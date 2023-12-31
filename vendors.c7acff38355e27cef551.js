(window.webpackJsonp = window.webpackJsonp || []).push([
    [352], {
        5444: function(e, t, a) {
            "use strict";
            var s = a(2);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = t.LUNA_SEND_TYPES = void 0;
            var i = a(1398),
                n = s(a(466)),
                r = s(a(35)),
                o = a(38),
                d = s(a(464)),
                c = s(a(55)),
                l = a(930);
            const u = {
                SEND: "Send",
                STAKE: "Stake",
                UNSTAKE: "Unstake",
                CLAIM: "Claim"
            };
            t.LUNA_SEND_TYPES = u;
            const h = {
                    [u.SEND]: 12e4,
                    [u.STAKE]: 8e5,
                    [u.UNSTAKE]: 8e5,
                    [u.CLAIM]: 35e5,
                    max: 35e5
                },
                g = "0.151";
            class LUNACoin extends((0, l.StakingMixin)((0, l.HasProviders)(o.Coin))) {
                constructor({
                    alias: e,
                    notify: t,
                    feeData: a,
                    explorers: s,
                    txWebUrl: i,
                    socket: r,
                    isTestnet: o
                }) {
                    var d;
                    super({
                        alias: e,
                        notify: t,
                        name: "Terra",
                        ticker: "LUNA",
                        decimal: 6,
                        derivation: "m/44'/330'/0'/0/0",
                        unspendableBalance: "0",
                        txWebUrl: i,
                        explorers: s,
                        socket: r,
                        feeData: a,
                        id: "LUNA",
                        denom: "uluna"
                    }), this.BigNumber = n.default, this.isTestnet = o, this.gasLimit = a.gasLimit, this.gasPriceCoefficient = a.gasPriceCoefficient, this.defaultGasPrice = a.defaultGasPrice, this.reserveForStake = a.reserveForStake, this.feeDenom = "uluna", this.gasPrices = {
                        uluna: (null === (d = a.defaultGasPrice) || void 0 === d ? void 0 : d.uluna) || g
                    }, this.fields.paymentId = !0, this.eventEmmiter.on(this.ticker + "::confirmed-socket-tx", (e, t, a) => {
                        this.bus.$emit("socket::tx::confirmed", {
                            id: e,
                            ticker: a
                        })
                    })
                }
                get instance() {
                    return {
                        id: this.id,
                        ticker: this.ticker,
                        name: this.name,
                        decimal: this.decimal,
                        address: this.address,
                        parent: this.id,
                        feeDenom: () => this.feeDenom,
                        BN: r.default,
                        toCurrencyUnit: e => this.toCurrencyUnit(e),
                        toMinimalUnit: e => this.toMinimalUnit(e),
                        alias: this.alias,
                        feeCoefficient: this.coefficient,
                        feeDefault: this.feeData && this.feeData.fee,
                        gasLimit: this.gasLimit,
                        getTickerFromDenom: e => this.getTickerFromDenom(e),
                        isTestnet: () => this.isTestnet,
                        denom: this.denom
                    }
                }
                isFeeDynamic() {
                    return !0
                }
                getTickerFromDenom(e) {
                    if (!e) return "";
                    if ("u" === e[0]) {
                        const t = e.slice(1);
                        return t.length > 3 ? t === "LUNA".toLowerCase() ? "LUNA" : t.toUpperCase() : t.slice(0, 2).toUpperCase() + "T"
                    }
                    return e
                }
                async loadWallet(e, t) {
                    const a = new i.MnemonicKey({
                        mnemonic: t
                    });
                    return this.setPrivateKey(a.privateKey.toString("hex")), this
                }
                getAddress() {
                    return this.privateKey ? this.address : new Error(this.ticker + " private key is empty!!!")
                }
                validateAddress(e) {
                    return i.AccAddress.validate(e)
                }
                getGasPrice(e = !1, t = !1) {
                    const a = this.defaultGasPrice[this.feeDenom];
                    let s = new this.BigNumber(a);
                    return s = e ? s : s.plus(t ? this.tokenGasPriceCoefficient : this.gasPriceCoefficient), s = s.times(10 ** 9).dividedBy(10 ** 6).integerValue(this.BigNumber.ROUND_CEIL).times(10 ** 9), new this.BN(s.toFixed())
                }
                getMsgSend(e, t, a, s = this.denom) {
                    return new i.MsgSend(t, a, {
                        [s]: e
                    })
                }
                getFee({
                    sendType: e
                } = {
                    sendType: u.SEND
                }) {
                    const t = this.createFee(e).amount.toString().replace("uluna", "");
                    return new this.BN(t)
                }
                async createTransaction({
                    memo: e,
                    amount: t,
                    address: a,
                    denom: s = this.denom,
                    sendType: i
                }) {
                    var n;
                    i = (null === (n = i) || void 0 === n ? void 0 : n.toLowerCase()) || u.SEND;
                    const r = this.createMsgSend({
                        amount: t,
                        fromAddress: this.address,
                        toAddress: a,
                        denom: s
                    });
                    try {
                        this.gasPrices = await this.getProvider("gas_price").getGasPrices()
                    } catch (e) {
                        console.warn("Could not get gasPrices"), c.default.error({
                            instance: this,
                            error: e
                        })
                    }
                    const o = this.createFee(i);
                    return this.createAndSignTx({
                        msgs: [r],
                        memo: e,
                        fee: o
                    })
                }
                gasPrice() {
                    return this.getGasPrice()
                }
                setPrivateKey(e, t) {
                    const a = new i.RawKey(Buffer.from(e, "hex"));
                    this.privateKey = a.privateKey.toString("hex"), this.address = a.accAddress, this.publicKey = a.publicKey.key, this.rawKey = a
                }
                getGasRange(e = "send") {
                    return this.feeData[e]
                }
                async getInfo() {
                    try {
                        const e = await this.getProvider("balance").getBalance(this.address, !1, this.denom);
                        if ("string" != typeof e) throw new TypeError(`[${this.ticker}] can't get balance`);
                        this.balance = e
                    } catch (e) {
                        console.error(e)
                    }
                    try {
                        await this.getStakingInfo()
                    } catch (e) {
                        console.warn("Could not get staking info"), c.default.error({
                            instance: this,
                            error: e
                        })
                    }
                    return {
                        balance: this.balance
                    }
                }
                async checkTransaction(e) {
                    super.checkTransaction({
                        feeTicker: this.getTickerFromDenom(this.feeDenom),
                        ...e
                    })
                }
                async getBalance() {
                    return (await this.getInfo()).balance
                }
                async createDelegationTransaction(e, t, a = "") {
                    const s = this.createMsgDelegate({
                            validator: e,
                            amount: t
                        }),
                        i = this.createFee(u.STAKE);
                    return this.createAndSignTx({
                        msgs: [s],
                        memo: a,
                        fee: i
                    })
                }
                createUnbondingDelegationTransaction(e, t, a = "") {
                    const s = this.createMsgUndelegate({
                            validator: e,
                            amount: t
                        }),
                        i = this.createFee(u.UNSTAKE);
                    return this.createAndSignTx({
                        msgs: [s],
                        memo: a,
                        fee: i
                    })
                }
                async createWithdrawDelegationTransaction(e = "") {
                    const [t] = await this.getProvider("balance").getValidators(this.address), a = this.createMsgsWithdraw({
                        validators: t.map(({
                            operator_address: e
                        }) => e)
                    }), s = this.createFee(u.UNSTAKE);
                    return this.createAndSignTx({
                        msgs: a,
                        memo: e,
                        fee: s
                    })
                }
                async fetchStakingInfo() {
                    try {
                        const e = this.getProvider("balance"),
                            t = {},
                            a = this.calculateStakedBalance(await e.getStakedDelegations(this.address), t),
                            s = this.calculateRewards(await e.getRewardsBalance(this.address));
                        return {
                            rewards: s,
                            staked: a,
                            unstaking: this.calculateUnstakingBalance(await e.getUnbondingDelegations(this.address)),
                            validators: t
                        }
                    } catch (e) {
                        return c.default.error({
                            instance: this,
                            error: e
                        }), {}
                    }
                }
                estimateGas() {}
                createFee(e = u.SEND) {
                    var t, a;
                    const s = Number(null === (t = this.gasLimit) || void 0 === t ? void 0 : t[e]) || h[e],
                        n = (s * (Number(null === (a = this.gasPrices) || void 0 === a ? void 0 : a.uluna) || Number(g))).toFixed(0);
                    return new i.Fee(s, {
                        uluna: n
                    })
                }
                async calculateAvailableForStake({
                    balance: e
                }) {
                    const t = e.toBN().sub(new this.BN(this.getFee({
                        sendType: u.STAKE
                    }))).sub(new this.BN(this.reserveForStake));
                    return new d.default(t.isNeg() ? "0" : t, this)
                }
                calculateTotal({
                    balance: e,
                    staked: t,
                    unstaking: a,
                    rewards: s
                }) {
                    return new d.default(e.toBN().add(t.toBN()).add(a.toBN()).add(s.toBN()).toString(), this)
                }
                calculateAvailableBalance(e) {
                    var t, a;
                    return new d.default(null !== (t = null === (a = e.find(e => e.denom === this.denom)) || void 0 === a ? void 0 : a.amount) && void 0 !== t ? t : "0", this)
                }
                calculateRewards(e) {
                    var t, a, s, i;
                    return new d.default((null === (t = e.total) || void 0 === t || null === (a = t._coins) || void 0 === a || null === (s = a.uluna) || void 0 === s || null === (i = s.amount) || void 0 === i ? void 0 : i.toString().split(".")[0]) || "0", this)
                }
                calculateStakedBalance(e, t) {
                    return new d.default((null == e ? void 0 : e.length) > 0 ? this.getTotalDelegations(e, t).toString() : "0", this)
                }
                calculateUnstakingBalance(e) {
                    const t = {
                        validators: {}
                    };
                    if ((null == e ? void 0 : e.length) > 0) {
                        const a = e.reduce((e, {
                            entries: a,
                            validator_address: s
                        }) => {
                            const i = s;
                            return t.validators[i] = a.map(e => new this.BN(e.balance.toString())).reduce((e, t) => e.add(new this.BN(t)), new this.BN("0")), e.add(t.validators[i])
                        }, new this.BN("0"));
                        t.total = a
                    }
                    return new d.default(t.total || "0", this)
                }
                getTotalDelegations(e, t) {
                    return e.reduce((e, {
                        validator_address: a,
                        balance: s
                    }) => (t[a] = {
                        address: a,
                        staked: new d.default(new this.BN(s.amount.toString()), this)
                    }, e.add(new this.BN(s.amount.toString()))), new this.BN("0"))
                }
                createMsgsBySendType(e, {
                    validator: t,
                    amount: a,
                    toAddress: s,
                    validators: i,
                    denom: n
                }) {
                    switch (e) {
                        case u.STAKE:
                            return [this.createMsgDelegate({
                                validator: t,
                                amount: a
                            })];
                        case u.UNSTAKE:
                            return [this.createMsgUndelegate({
                                validator: t,
                                amount: a
                            })];
                        case u.CLAIM:
                            return this.createMsgsWithdraw({
                                validators: i
                            });
                        default:
                            return [this.createMsgSend({
                                amount: a,
                                fromAddress: this.address,
                                toAddress: s,
                                denom: n
                            })]
                    }
                }
                createMsgSend({
                    amount: e,
                    fromAddress: t,
                    toAddress: a,
                    denom: s
                }) {
                    return new i.MsgSend(t, a, {
                        [s]: e
                    })
                }
                createMsgDelegate({
                    validator: e,
                    amount: t
                }) {
                    const a = new i.Coin(this.denom, String(t));
                    return new i.MsgDelegate(this.address, e, a)
                }
                createMsgUndelegate({
                    validator: e,
                    amount: t
                }) {
                    const a = new i.Coin(this.denom, String(t));
                    return new i.MsgUndelegate(this.address, e, a)
                }
                createMsgsWithdraw({
                    validators: e
                }) {
                    return e.map(e => new i.MsgWithdrawDelegatorReward(this.address, e))
                }
                async createAndSignTx(e) {
                    return this.getProvider("node").getLcdWallet(this.rawKey).createAndSignTx(e)
                }
            }
            var m = LUNACoin;
            t.default = m
        }
    }
]);