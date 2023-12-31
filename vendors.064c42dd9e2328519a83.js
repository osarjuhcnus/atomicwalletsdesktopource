(window.webpackJsonp = window.webpackJsonp || []).push([
    [325], {
        5443: function(e, t, a) {
            "use strict";
            var s = a(2);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = t.LUNC_SEND_TYPES = void 0;
            var r = function(e, t) {
                    if (!t && e && e.__esModule) return e;
                    if (null === e || "object" != typeof e && "function" != typeof e) return {
                        default: e
                    };
                    var a = h(t);
                    if (a && a.has(e)) return a.get(e);
                    var s = {},
                        r = Object.defineProperty && Object.getOwnPropertyDescriptor;
                    for (var i in e)
                        if ("default" !== i && Object.prototype.hasOwnProperty.call(e, i)) {
                            var n = r ? Object.getOwnPropertyDescriptor(e, i) : null;
                            n && (n.get || n.set) ? Object.defineProperty(s, i, n) : s[i] = e[i]
                        } s.default = e, a && a.set(e, s);
                    return s
                }(a(1398)),
                i = s(a(466)),
                n = s(a(35)),
                o = s(a(461)),
                d = s(a(464)),
                c = s(a(55)),
                l = s(a(5511)),
                u = s(a(67)),
                m = a(930);

            function h(e) {
                if ("function" != typeof WeakMap) return null;
                var t = new WeakMap,
                    a = new WeakMap;
                return (h = function(e) {
                    return e ? a : t
                })(e)
            }
            const g = {
                SEND: "send",
                STAKE: "stake",
                UNSTAKE: "unstake",
                CLAIM: "claim"
            };
            t.LUNC_SEND_TYPES = g;
            const v = {
                    [g.SEND]: 12e4,
                    [g.STAKE]: 8e5,
                    [g.UNSTAKE]: 8e5,
                    [g.CLAIM]: 35e5,
                    max: 35e5
                },
                f = "60";
            class LUNCCoin extends((0, m.StakingMixin)((0, m.HasProviders)((0, m.HasTokensMixin)(o.default)))) {
                constructor({
                    alias: e,
                    notify: t,
                    feeData: a,
                    explorers: s,
                    txWebUrl: n,
                    socket: o,
                    isTestnet: d
                }) {
                    var c;
                    super({
                        alias: e,
                        notify: t,
                        name: "Terra Classic",
                        ticker: "LUNC",
                        decimal: 6,
                        derivation: "m/44'/330'/0'/0/0",
                        unspendableBalance: "0",
                        txWebUrl: n,
                        explorers: s,
                        socket: o,
                        feeData: a,
                        id: "LUNC",
                        denom: "uluna"
                    }), this.BigNumber = i.default, this.isTestnet = d, this.gasLimit = a.gasLimit, this.gasLimitCoefficient = a.gasLimitCoefficient, this.gasPriceCoefficient = a.gasPriceCoefficient, this.reserveForStake = a.reserveForStake, this.bannedTokens = [], this.resendTimeout = a.resendTimeout, this.gasPrices = {
                        uluna: (null === (c = a.defaultGasPrice) || void 0 === c ? void 0 : c.uluna) || f
                    }, this.coreLibrary = r, this.fields.paymentId = !0, this.tokens = {}, this.nonce = 0, this.eventEmmiter.on(this.ticker + "::confirmed-socket-tx", (e, t, a) => {
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
                        BN: n.default,
                        toCurrencyUnit: e => this.toCurrencyUnit(e),
                        toMinimalUnit: e => this.toMinimalUnit(e),
                        alias: this.alias,
                        feeCoefficient: this.coefficient,
                        feeDefault: this.feeData && this.feeData.fee,
                        gasLimit: this.gasLimit,
                        getTickerFromContractAddress: e => this.getTickerFromContractAddress(e),
                        tokens: () => this.tokens,
                        denom: this.denom
                    }
                }
                isFeeDynamic() {
                    return !0
                }
                getTickerFromContractAddress(e) {
                    var t;
                    return null === (t = this.tokens[e]) || void 0 === t ? void 0 : t.ticker
                }
                createToken(e) {
                    return new l.default({
                        parent: this,
                        ...e,
                        config: this.feeData
                    })
                }
                getExcludedTokenList() {
                    return []
                }
                isTokenExcluded(e) {
                    var t, a;
                    const s = null === (t = e.contract) || void 0 === t ? void 0 : t.toLowerCase(),
                        r = null === (a = e.denom) || void 0 === a ? void 0 : a.toLowerCase();
                    return !this.getExcludedTokenList().some(({
                        denom: e,
                        contract: t
                    }) => r && r === e || s && s === t)
                }
                async loadWallet(e, t) {
                    const a = new r.MnemonicKey({
                        mnemonic: t
                    });
                    return this.setPrivateKey(a.privateKey.toString("hex")), this
                }
                getAddress() {
                    return this.privateKey ? this.address : new Error(this.ticker + " private key is empty!!!")
                }
                validateAddress(e) {
                    return r.AccAddress.validate(e)
                }
                createMsgPayloadBySendType(e, {
                    amount: t,
                    validators: a,
                    denom: s
                }) {
                    switch (e) {
                        case g.STAKE:
                            return {
                                validator: "terravaloper1qqu376azltyc5wnsje5qgwru5mtj2yqdhar97v", amount: this.toMinimalUnit(t)
                            };
                        case g.UNSTAKE:
                            return {
                                validator: "terravaloper1qqu376azltyc5wnsje5qgwru5mtj2yqdhar97v", amount: t
                            };
                        case g.CLAIM:
                            return {
                                validators: a
                            };
                        default:
                            return {
                                amount: t, fromAddress: this.address, toAddress: "terra1y6z0mzhlgkxr6q0xrykqalce3vhnvujurv96e6", denom: s
                            }
                    }
                }
                createMsgsBySendType(e, {
                    validator: t,
                    amount: a,
                    toAddress: s,
                    validators: r,
                    denom: i
                }) {
                    switch (e) {
                        case g.STAKE:
                            return [this.createMsgDelegate({
                                validator: t,
                                amount: a
                            })];
                        case g.UNSTAKE:
                            return [this.createMsgUndelegate({
                                validator: t,
                                amount: a
                            })];
                        case g.CLAIM:
                            return this.createMsgsWithdraw({
                                validators: r
                            });
                        default:
                            return [this.createMsgSend({
                                amount: a,
                                fromAddress: this.address,
                                toAddress: s,
                                denom: i
                            })]
                    }
                }
                createMsgSend({
                    amount: e,
                    fromAddress: t,
                    toAddress: a,
                    denom: s
                }) {
                    return new r.MsgSend(t, a, {
                        [s]: e
                    })
                }
                createMsgDelegate({
                    validator: e,
                    amount: t
                }) {
                    const a = new r.Coin(this.denom, String(t));
                    return new r.MsgDelegate(this.address, e, a)
                }
                createMsgUndelegate({
                    validator: e,
                    amount: t
                }) {
                    const a = new r.Coin(this.denom, String(t));
                    return new r.MsgUndelegate(this.address, e, a)
                }
                createMsgsWithdraw({
                    validators: e
                }) {
                    return e.map(e => new r.MsgWithdrawDelegatorReward(this.address, e))
                }
                isToken(e) {
                    return this.denom !== e
                }
                async getFee({
                    custom: e,
                    sendType: t,
                    sendAmount: a,
                    denom: s = this.denom,
                    address: r = "terra1y6z0mzhlgkxr6q0xrykqalce3vhnvujurv96e6"
                } = {}) {
                    var i;
                    t = (null === (i = t) || void 0 === i ? void 0 : i.toLowerCase()) || g.SEND;
                    try {
                        const i = await this.getProvider("gas_price").getGasPrices(),
                            {
                                fee: n,
                                tax: o
                            } = await this.estimateFeeAndTax({
                                sendType: t,
                                amount: a || this.indivisibleBalance.toString(),
                                gasPrices: i,
                                address: r,
                                denom: s,
                                memo: e
                            });
                        return n.amount[0].denom === o.denom ? (Number(n.amount[0].amount) + Number(o.amount)).toString() : n.amount[0].amount
                    } catch (e) {
                        var n, o;
                        c.default.error({
                            instance: this,
                            error: e
                        });
                        return ((Number(null === (n = this.gasLimit) || void 0 === n ? void 0 : n[t]) || v[t] || v.max) * (Number(null === (o = this.gasPrices) || void 0 === o ? void 0 : o.uluna) || Number(f))).toFixed(0)
                    }
                }
                async estimateFeeAndTax({
                    sendType: e,
                    gasLimit: t,
                    amount: a,
                    gasPrices: s,
                    msgs: i,
                    address: n,
                    denom: o,
                    memo: d
                }) {
                    if (!i) {
                        let t;
                        e === g.CLAIM && ([t] = await this.getProvider("balance").getValidators(this.address), t = t.map(({
                            operator_address: e
                        }) => e));
                        const s = this.createMsgPayloadBySendType(e, {
                            amount: a,
                            validators: t,
                            fromAddress: this.address,
                            toAddress: n,
                            denom: o
                        });
                        i = this.createMsgsBySendType(e, s)
                    }
                    const c = await this.getSigners(),
                        l = await this.getProvider("estimate_fee").estimateFee(c, {
                            msgs: i,
                            gas: null != t ? t : "auto",
                            gasPrices: s,
                            gasAdjustment: this.gasLimitCoefficient || 2,
                            feeDenoms: ["uluna"],
                            memo: d
                        });
                    let u = {
                        denom: o,
                        amount: "0"
                    };
                    return e === g.SEND && (u = (await this.getProvider("estimate_fee").calculateTax(new r.Coin(o, a))).toAmino()), {
                        fee: l.toAmino(),
                        tax: u
                    }
                }
                async getSigners() {
                    const e = await this.getProvider("node").getAccountInfo(this.address);
                    return [{
                        sequenceNumber: e.getSequenceNumber(),
                        publicKey: e.getPublicKey()
                    }]
                }
                async availableBalance(e) {
                    return this.BigNumber(this.balance).isGreaterThan(0) ? this.toCurrencyUnit(this.BigNumber(this.balance).minus(e || 0).toFixed()) : "0"
                }
                async createTransaction({
                    memo: e,
                    amount: t,
                    address: a,
                    denom: s = this.denom,
                    sendType: i
                }) {
                    var n;
                    i = (null === (n = i) || void 0 === n ? void 0 : n.toLowerCase()) || g.SEND;
                    const o = this.createMsgSend({
                            amount: t,
                            fromAddress: this.address,
                            toAddress: a,
                            denom: s
                        }),
                        d = await this.getProvider("gas_prices").getGasPrices(),
                        {
                            fee: c,
                            tax: l
                        } = await this.estimateFeeAndTax({
                            amount: t,
                            sendType: i,
                            gasPrices: d,
                            msgs: [o],
                            denom: s
                        }),
                        u = c.amount;
                    u[0].denom === l.denom ? u[0].amount = Number(u[0].amount) + Number(l.amount) : u.push(l);
                    const m = r.Fee.fromAmino(c);
                    return this.createAndSignTx({
                        msgs: [o],
                        memo: e,
                        fee: m
                    })
                }
                async getUserTokenList(...e) {
                    try {
                        const [t, a] = await Promise.all([this.getProvider("token").getUserTokenList(this.address, !0, ...e), this.getProvider("denom").getUserDenomList(this.address, ...e)]), s = Object.values(this.tokens).map(e => e.ticker).concat(this.ticker);
                        return t.concat(a).filter(e => !s.includes(e.symbol))
                    } catch (e) {
                        return e.message = `[${this.ticker}] getUserTokenList error: ${e.message||"Unknown error"}.`, c.default.error({
                            instance: this,
                            error: e
                        }), []
                    }
                }
                async getTokenList() {
                    try {
                        return u.default.get("luna-classic-tokens", !0)
                    } catch (e) {
                        return c.default.error({
                            instance: this,
                            error: e
                        }), []
                    }
                }
                getTokenFromUserList(e, t) {
                    return {
                        ...this.getTokenBase(e),
                        visibility: !0,
                        denom: e.denom,
                        source: t
                    }
                }
                getTokenBase(e) {
                    var t;
                    const a = null === (t = e.contract) || void 0 === t ? void 0 : t.toLowerCase();
                    return {
                        name: e.name,
                        ticker: e.ticker,
                        decimal: Number(e.decimal) || 0,
                        contract: a,
                        parentTicker: this.ticker,
                        uniqueField: a,
                        confirmed: e.confirmed
                    }
                }
                getTokenFromCommonList(e, t) {
                    return {
                        ...this.getTokenBase(e),
                        visibility: !1 !== e.visibility,
                        denom: e.denom.toLowerCase(),
                        source: t
                    }
                }
                gasPrice() {
                    return this.getGasPrice()
                }
                setPrivateKey(e, t) {
                    const a = new r.RawKey(Buffer.from(e, "hex"));
                    this.privateKey = a.privateKey.toString("hex"), this.address = a.accAddress, this.publicKey = a.publicKey.key, this.rawKey = a
                }
                getGasRange(e = "send") {
                    return this.feeData[e]
                }
                async getInfo(e) {
                    if (this.getProvider("gas_price").getGasPrices().then(e => {
                            this.gasPrices = e
                        }), !e || !e.onlyCoin && !1 !== e.isToken) {
                        var t;
                        const a = e ? null === (t = Object.values(this.tokens).find(t => t.ticker === e.ticker)) || void 0 === t ? void 0 : t.denom : null,
                            s = e ? {
                                [e.contract || e.ticker]: {
                                    denom: a,
                                    ...e
                                }
                            } : this.tokens;
                        await Promise.all(Object.values(s).map(async e => {
                            try {
                                var t;
                                let a;
                                if (e.contract ? a = await this.getProvider("node").getTokenBalanceByContractAddress({
                                        address: this.address,
                                        contractAddress: e.contract.toLowerCase()
                                    }) : e.denom && (a = await this.getProvider("balance").getBalance(this.address, !1, e.denom)), !a) throw new Error(`${this.ticker} can't get balance of token with ${e.contract?"contract address":"denom"} ${e.contract||e.denom}`);
                                [e.contract, null === (t = e.contract) || void 0 === t ? void 0 : t.toLowerCase(), e.ticker].filter(e => e && this.tokens[e]).forEach(e => {
                                    this.tokens[e].balance = a.toString()
                                })
                            } catch (e) {
                                c.default.error({
                                    instance: this,
                                    error: e
                                })
                            }
                        }))
                    }
                    try {
                        const e = await this.getProvider("balance").getBalance(this.address, !1, this.denom);
                        if ("string" != typeof e) throw new TypeError(`[${this.ticker}] can't get balance`);
                        this.balance = e
                    } catch (e) {
                        c.default.error({
                            instance: this,
                            error: e
                        })
                    }
                    try {
                        await this.getStakingInfo()
                    } catch (e) {
                        c.default.error({
                            instance: this,
                            error: e
                        })
                    }
                    return {
                        balance: this.balance
                    }
                }
                async createTokenTransaction({
                    memo: e,
                    denom: t,
                    amount: a,
                    address: s,
                    multiplier: r
                }) {
                    return this.createTransaction({
                        memo: e,
                        denom: t,
                        amount: a,
                        address: s,
                        multiplier: r
                    })
                }
                async getGasPrice(e = !1, t = !1) {
                    try {
                        this.gasPrices = await this.getProvider("gas_price").getGasPrices()
                    } catch (e) {
                        console.error(e)
                    }
                    const {
                        uluna: a
                    } = this.gasPrices;
                    return new this.BN(a.split(".")[0])
                }
                async getBalance() {
                    return (await this.getInfo()).balance
                }
                async createAndSignTx(e) {
                    return this.getProvider("node").getLcdWallet(this.rawKey).createAndSignTx(e)
                }
                async createDelegationTransaction(e, t, a = "") {
                    const s = this.createMsgDelegate({
                            validator: e,
                            amount: t
                        }),
                        {
                            uluna: r
                        } = this.gasPrices;
                    return this.createAndSignTx({
                        msgs: [s],
                        memo: a,
                        gasPrices: {
                            uluna: r
                        },
                        feeDenoms: ["uluna"]
                    })
                }
                createUnbondingDelegationTransaction(e, t, a = "") {
                    const s = this.createMsgUndelegate({
                            validator: e,
                            amount: t
                        }),
                        {
                            uluna: r
                        } = this.gasPrices;
                    return this.createAndSignTx({
                        msgs: [s],
                        gasPrices: {
                            uluna: r
                        },
                        feeDenoms: ["uluna"],
                        memo: a
                    })
                }
                async createWithdrawDelegationTransaction(e = "") {
                    const [t] = await this.getProvider("balance").getValidators(this.address), a = this.createMsgsWithdraw({
                        validators: t.map(({
                            operator_address: e
                        }) => e)
                    }), {
                        uluna: s
                    } = this.gasPrices;
                    return this.createAndSignTx({
                        msgs: a,
                        gasPrices: {
                            uluna: s
                        },
                        feeDenoms: ["uluna"],
                        memo: e
                    })
                }
                async sendTransaction(e) {
                    const t = await this.getProvider("send").sendTransaction(e);
                    if (void 0 !== t.code) throw new Error(t.raw_log);
                    return {
                        txid: t.txhash
                    }
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
                async calculateAvailableForStake({
                    balance: e
                }) {
                    var t, a;
                    const s = ((Number(null === (t = this.gasLimit) || void 0 === t ? void 0 : t[g.STAKE]) || v[g.STAKE]) * (Number(null === (a = this.gasPrices) || void 0 === a ? void 0 : a.uluna) || Number(f))).toFixed(0),
                        r = e.toBN().sub(new this.BN(s)).sub(new this.BN(this.reserveForStake));
                    return new d.default(r.isNeg() ? "0" : r, this)
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
                    var t, a, s, r;
                    return new d.default((null === (t = e.total) || void 0 === t || null === (a = t._coins) || void 0 === a || null === (s = a.uluna) || void 0 === s || null === (r = s.amount) || void 0 === r ? void 0 : r.toString().split(".")[0]) || "0", this)
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
                            const r = s;
                            return t.validators[r] = a.map(e => new this.BN(e.balance.toString())).reduce((e, t) => e.add(new this.BN(t)), new this.BN("0")), e.add(t.validators[r])
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
            }
            var y = LUNCCoin;
            t.default = y
        },
        5511: function(e, t, a) {
            "use strict";
            var s = a(2);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var r = s(a(545));
            class LUNCToken extends r.default {
                constructor(e) {
                    var t;
                    super(e), this.fields.paymentId = !0, this.stabilityFee = (null === (t = this.config) || void 0 === t ? void 0 : t.stabilityFee) || .012
                }
                async createTransaction({
                    address: e,
                    amount: t,
                    userGasPrice: a,
                    gasLimit: s,
                    multiplier: r,
                    feeLimit: i = 1e7,
                    memo: n
                }) {
                    return {
                        address: e,
                        amount: t,
                        contract: this.contract,
                        transfer: !0,
                        ticker: this.ticker,
                        userGasPrice: a,
                        gasLimit: s,
                        multiplier: r,
                        feeLimit: i,
                        denom: this.denom,
                        memo: n
                    }
                }
                async availableBalance() {
                    if (this.divisibleBalance) {
                        const e = await this.getStabilityFee(this.indivisibleBalance),
                            t = this.indivisibleBalance.sub(new this.BN(e));
                        return t.gt(0) ? this.toCurrencyUnit(t.toString()) : "0"
                    }
                    return "0"
                }
                getStabilityFee(e) {
                    return (Number(e) * this.stabilityFee + 1).toFixed(0)
                }
            }
            var i = LUNCToken;
            t.default = i
        }
    }
]);