(window.webpackJsonp = window.webpackJsonp || []).push([
    [324], {
        5412: function(t, e, a) {
            "use strict";
            var n = a(2);
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.default = void 0;
            var s = function(t, e) {
                    if (!e && t && t.__esModule) return t;
                    if (null === t || "object" != typeof t && "function" != typeof t) return {
                        default: t
                    };
                    var a = f(e);
                    if (a && a.has(t)) return a.get(t);
                    var n = {},
                        s = Object.defineProperty && Object.getOwnPropertyDescriptor;
                    for (var i in t)
                        if ("default" !== i && Object.prototype.hasOwnProperty.call(t, i)) {
                            var r = s ? Object.getOwnPropertyDescriptor(t, i) : null;
                            r && (r.get || r.set) ? Object.defineProperty(n, i, r) : n[i] = t[i]
                        } n.default = t, a && a.set(t, n);
                    return n
                }(a(1390)),
                i = n(a(2361)),
                r = n(a(35)),
                o = n(a(461)),
                l = a(29),
                c = a(6523),
                d = a(26),
                u = n(a(464)),
                h = a(930);

            function f(t) {
                if ("function" != typeof WeakMap) return null;
                var e = new WeakMap,
                    a = new WeakMap;
                return (f = function(t) {
                    return t ? a : e
                })(t)
            }
            const v = "cx0000000000000000000000000000000000000000",
                m = "Incorrect balance, possibly balance is not fetched",
                g = "Stake",
                w = "Claim reward",
                b = "Delegate";
            class ICXCoin extends((0, h.StakingMixin)((0, h.HasProviders)(o.default))) {
                constructor({
                    alias: t,
                    notify: e,
                    feeData: a,
                    explorers: n,
                    txWebUrl: s,
                    socket: i
                }) {
                    super({
                        alias: t,
                        notify: e,
                        name: "ICON",
                        ticker: "ICX",
                        decimal: 18,
                        derivation: "m/44'/74'/0'/0/0",
                        unspendableBalance: "0",
                        explorers: n,
                        txWebUrl: s,
                        socket: i,
                        feeData: a
                    }), this.fee = a.fee, this.stepLimit = a.stepLimit, this.reserveForStake = a.reserveForStake || "1200000000000000000", this.transactions = [], this.fields.paymentId = !1
                }
                getICXWallet(t) {
                    return i.default.IconWallet.loadPrivateKey(t)
                }
                async loadWallet(t) {
                    const e = s.bip32.fromSeed(t).derivePath(this.derivation);
                    if (!e) throw new l.WalletError({
                        type: d.WALLET_ERROR,
                        error: new Error("can't get a privateKey!"),
                        instance: this
                    });
                    const a = this.getICXWallet(e.privateKey.toString("hex"));
                    return this.privateKey = a.getPrivateKey(), this.address = await a.getAddress(), this
                }
                getAddress(t = this.privateKey) {
                    if (t) {
                        return this.getICXWallet(t).getAddress()
                    }
                    return new l.WalletError({
                        type: d.WALLET_ERROR,
                        error: new Error("privateKey is empty!"),
                        instance: this
                    })
                }
                async validateAddress(t) {
                    return i.default.IconValidator.isAddress(t)
                }
                async getInfo() {
                    const t = await this.getProvider("balance").getInfo(this.address);
                    t.balances = {
                        available: this.toCurrencyUnit(await this.calculateAvailable(t.balance)),
                        total: new r.default(t.balance)
                    }, this.balance = t.balances.total;
                    const e = await this.getStakingInfo();
                    return {
                        balance: this.balance,
                        balances: e
                    }
                }
                async getStakingInfo() {
                    const t = (new i.default.IconBuilder.CallBuilder).from(this.address).to(v).method("getStake").params({
                            address: this.address
                        }).build(),
                        e = await this.getProvider("call").call(t),
                        a = await this.getProvider("call").call({
                            to: v,
                            dataType: "call",
                            data: {
                                method: "getDelegation",
                                params: {
                                    address: this.address
                                }
                            }
                        }),
                        n = (new i.default.IconBuilder.CallBuilder).from(this.address).to(v).method("queryIScore").params({
                            address: this.address
                        }).build(),
                        s = await this.getProvider("call").call(n),
                        o = this.calculateStakedAmount(e),
                        l = this.calculateAvailableForUnstake(e),
                        c = this.calculateUnstakingAmount(e),
                        d = this.calculateRewards(s),
                        h = new u.default(new r.default(null == a ? void 0 : a.totalDelegated.replace("0x", ""), 16), this),
                        f = new u.default(new r.default(null == a ? void 0 : a.votingPower.replace("0x", ""), 16), this),
                        m = Object.fromEntries((null == a ? void 0 : a.delegations.map(({
                            address: t,
                            value: e
                        }) => [t, {
                            staked: new u.default(new r.default(e.replace("0x", ""), 16), this)
                        }])) || []);
                    return this.setBalances(await this.makeStakingInfoStruct({
                        staked: o,
                        unstaking: c,
                        rewards: d,
                        validators: m,
                        delegatedVotes: h,
                        availableVotes: f,
                        availableForUnstake: l
                    })), this.balances
                }
                calculateTotal({
                    balance: t,
                    staked: e,
                    unstaking: a,
                    rewards: n
                }) {
                    return new u.default(t.toBN().add(e.toBN()).add(a.toBN()).add(n.toBN()), this)
                }
                async calculateAvailableForStake({
                    balance: t
                }) {
                    return new u.default(this.BN.max(t.toBN(), 0), this)
                }
                calculateAvailableForUnstake(t) {
                    return this.calculateStakedAmount(t)
                }
                calculateUnstakingAmount(t) {
                    let e = new r.default(0);
                    return t.unstake && (e = new r.default(t.unstake.replace("0x", ""), 16)), t.unstakes && t.unstakes.length > 0 && (e = t.unstakes.reduce((t, {
                        unstake: e
                    }) => t.add(new r.default(e.replace("0x", ""), 16)), e)), new u.default(e, this)
                }
                calculateStakedAmount(t) {
                    return t.stake ? new u.default(new r.default(t.stake.replace("0x", ""), 16), this) : this.defaultAmount()
                }
                calculateRewards(t) {
                    return new u.default(new r.default(t.estimatedICX.replace("0x", ""), 16), this)
                }
                async signTransaction(t) {
                    const e = this.getICXWallet(this.privateKey);
                    return new i.default.SignedTransaction(t, e)
                }
                async calculateAvailable(t, e) {
                    const a = e && new this.BN(e) || await this.getFee(),
                        n = new this.BN(t).sub(a).sub(new this.BN(this.unspendableBalance)).sub(new this.BN(this.reserveForStake)),
                        s = new this.BN(0);
                    return this.BN.max(n, s)
                }
                async availableBalance(t) {
                    var e;
                    const a = null === (e = this.balances) || void 0 === e ? void 0 : e.available;
                    if (a) return a;
                    const n = this.balance;
                    if (!n) return null;
                    const s = await this.calculateAvailable(n, t);
                    return this.toCurrencyUnit(s)
                }
                async createTransaction({
                    address: t,
                    amount: e
                }) {
                    const a = (new i.default.IconBuilder.IcxTransactionBuilder).from(this.address).to(t).value(e).stepLimit(this.stepLimit).nid(i.default.IconConverter.toBigNumber(1)).nonce(i.default.IconConverter.toBigNumber(1)).version(i.default.IconConverter.toBigNumber(3)).timestamp(1e3 * (new Date).getTime()).build();
                    return this.signTransaction(a)
                }
                async createCallTransaction(t, e) {
                    const a = (new i.default.IconBuilder.CallTransactionBuilder).from(this.address).to(v).value(0).stepLimit(this.stepLimit).nid(i.default.IconConverter.toBigNumber(1)).nonce(i.default.IconConverter.toBigNumber(1)).version(i.default.IconConverter.toBigNumber(3)).timestamp(1e3 * (new Date).getTime()).method(t).params(e).build();
                    return this.signTransaction(a)
                }
                async createStakeTransaction({
                    amount: t
                }) {
                    return this.createCallTransaction("setStake", {
                        value: i.default.IconConverter.toHexNumber(t)
                    })
                }
                async stake({
                    amount: t,
                    validator: e
                }) {
                    if (!this.balances) throw new Error(m);
                    const a = new r.default(this.toMinimalUnit(t)),
                        n = this.balances.stakedSatoshis ? this.balances.stakedSatoshis.add(a) : a,
                        s = await this.createStakeTransaction({
                            amount: n.toString()
                        });
                    await this.sendTransactionOnce(s);
                    const i = await this.vote({
                        validator: e,
                        amount: t
                    });
                    return (0, c.delayedRepeatUntilSuccess)(this.getInfo.bind(this), [void 0], 3, 7500), i
                }
                async unstake() {
                    if (!this.balances) throw new Error(m);
                    const t = await this.getInfo();
                    if (Number(t.balances.delegatedVotes.toMinimal()) > 0) {
                        const e = [];
                        t.balances.validators && Object.entries(t.balances.validators).forEach(([t]) => {
                            e.push({
                                address: t,
                                value: "0x0"
                            })
                        });
                        const a = await this.createCallTransaction("setDelegation", {
                            delegations: e
                        });
                        await this.sendTransactionOnce(a)
                    }
                    const e = await this.createStakeTransaction({
                            amount: 0
                        }),
                        {
                            txid: a
                        } = await this.sendTransaction(e);
                    return (0, c.delayedRepeatUntilSuccess)(this.getInfo.bind(this), [void 0], 3, 7500), a
                }
                async vote({
                    validator: t,
                    amount: e
                }) {
                    var a;
                    const n = [],
                        s = await this.getInfo();
                    let o;
                    null !== (a = s.balances) && void 0 !== a && a.validators && Number(s.balances.delegatedVotes) > 0 && s.balances.validators.forEach(e => {
                        e.address === t ? o = e : n.push({
                            address: e.address,
                            value: e.value
                        })
                    });
                    let l = new r.default(this.toMinimalUnit(e));
                    if (o) {
                        const t = new r.default(o.value.replace("0x", ""), 16);
                        l = l.add(t)
                    }
                    n.push({
                        address: t,
                        value: i.default.IconConverter.toHexNumber(l.toString())
                    });
                    const d = await this.createCallTransaction("setDelegation", {
                            delegations: n
                        }),
                        {
                            txid: u
                        } = await this.sendTransaction(d);
                    return (0, c.delayedRepeatUntilSuccess)(this.getInfo.bind(this), [void 0], 3, 7500), u
                }
                async revote({
                    validator: t,
                    amount: e
                }) {
                    const a = new r.default(this.toMinimalUnit(e)),
                        n = await this.createCallTransaction("setDelegation", {
                            delegations: [{
                                address: t,
                                value: i.default.IconConverter.toHexNumber(a)
                            }]
                        }),
                        {
                            txid: s
                        } = await this.sendTransaction(n);
                    return (0, c.delayedRepeatUntilSuccess)(this.getInfo.bind(this), [void 0], 3, 7500), s
                }
                getDelegateTransactionAmount(t) {
                    let e = i.default.IconConverter.toBigNumber(0);
                    for (const a of t.data.params.delegations) e = e.plus(i.default.IconConverter.toBigNumber(a.value));
                    return e.div(1e18).toString()
                }
                async createClaimTransaction() {
                    const t = this.createCallTransaction("claimIScore", {});
                    return this.signTransaction(t)
                }
                async claim() {
                    const t = await this.createCallTransaction("claimIScore"),
                        {
                            txid: e
                        } = await this.sendTransaction(t);
                    return (0, c.delayedRepeatUntilSuccess)(this.getInfo.bind(this), [void 0], 3, 7500), e
                }
                getClaimTransactionAmount(t) {
                    return i.default.IconConverter.toBigNumber(t.eventLogs[0].data[1]).div(1e18).toString()
                }
                getStakeTransactionAmount(t) {
                    return i.default.IconConverter.toBigNumber(t.data.params.value).div(1e18).toString()
                }
                async getTransactions({
                    offset: t = 0,
                    limit: e,
                    address: a,
                    pageNum: n
                }) {
                    const s = await this.getProvider("history").getTransactions({
                            address: a,
                            offset: t,
                            limit: e,
                            pageNum: n
                        }),
                        i = this.getProvider("call");
                    if (!i) return s;
                    for (const t of s)
                        if (!t.amount) switch (t.otherSideAddress) {
                            case w: {
                                const e = await i.getTransactionResult(t.txid);
                                t.amount = this.getClaimTransactionAmount(e)
                            }
                            break;
                            case g: {
                                const e = await i.getTransactionByHash(t.txid);
                                t.amount = this.getStakeTransactionAmount(e)
                            }
                            break;
                            case b: {
                                const e = await i.getTransactionByHash(t.txid);
                                t.amount = this.getDelegateTransactionAmount(e)
                            }
                        }
                    return s
                }
            }
            var p = ICXCoin;
            e.default = p
        },
        6523: function(t, e, a) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.delayedRepeatUntilSuccess = async function(t, e, a, s) {
                for (let i = 0; i < a; i++) try {
                    return await n(t, e, s)
                } catch (t) {
                    console.warn(t)
                }
                return
            }, e.formatAmount = function(t) {
                return new Intl.NumberFormat("en-US").format(t)
            }, e.isStartsWith = function(t, e) {
                return 0 === t.indexOf(e)
            };
            async function n(t, e, a) {
                return new Promise((n, s) => {
                    setTimeout(async () => {
                        try {
                            const a = await t(...e);
                            n(a)
                        } catch (t) {
                            s(t)
                        }
                    }, a)
                })
            }
        }
    }
]);