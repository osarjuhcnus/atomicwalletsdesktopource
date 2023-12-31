(window.webpackJsonp = window.webpackJsonp || []).push([
    [287], {
        5408: function(t, e, n) {
            "use strict";
            var a = n(2);
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.default = void 0;
            var i = a(n(1405)),
                s = a(n(1406)),
                r = n(7219),
                o = a(n(461)),
                u = n(5482),
                l = n(29),
                c = n(26),
                p = a(n(464)),
                d = function(t, e) {
                    if (!e && t && t.__esModule) return t;
                    if (null === t || "object" != typeof t && "function" != typeof t) return {
                        default: t
                    };
                    var n = f(e);
                    if (n && n.has(t)) return n.get(t);
                    var a = {},
                        i = Object.defineProperty && Object.getOwnPropertyDescriptor;
                    for (var s in t)
                        if ("default" !== s && Object.prototype.hasOwnProperty.call(t, s)) {
                            var r = i ? Object.getOwnPropertyDescriptor(t, s) : null;
                            r && (r.get || r.set) ? Object.defineProperty(a, s, r) : a[s] = t[s]
                        } a.default = t, n && n.set(t, a);
                    return a
                }(n(67)),
                y = a(n(55)),
                m = a(n(9181)),
                h = a(n(9182)),
                b = n(930);

            function f(t) {
                if ("function" != typeof WeakMap) return null;
                var e = new WeakMap,
                    n = new WeakMap;
                return (f = function(t) {
                    return t ? n : e
                })(t)
            }
            class TRXCoin extends((0, b.StakingMixin)((0, b.HasProviders)((0, b.HasTokensMixin)(o.default)))) {
                constructor({
                    alias: t,
                    notify: e,
                    feeData: n,
                    explorers: a,
                    txWebUrl: i,
                    socket: s
                }) {
                    super({
                        alias: t,
                        notify: e,
                        name: "Tron",
                        ticker: "TRX",
                        decimal: 6,
                        derivation: "m/44'/195'/0'",
                        unspendableBalance: "0",
                        explorers: a,
                        txWebUrl: i,
                        socket: s,
                        feeData: n
                    }), this.derivation = "m/44'/195'/0'", this.transactions = [], this.tokens = {}, this.bannedTokens = [], this.dynamicTrc20EnergyEnabled = !!n.dynamicTrc20EnergyEnabled, this.eventEmmiter.on(this.ticker + "::confirmed-socket-tx", (t, e, n) => {
                        this.getInfo(), e && e.direction ? this.bus.$emit("socket::newtx", {
                            id: t,
                            ticker: n,
                            amount: e.amount,
                            txid: e.txid
                        }) : this.bus.$emit("socket::newtx::outgoing", {
                            id: t,
                            ticker: n
                        })
                    })
                }
                get instance() {
                    return {
                        id: this.id,
                        ticker: this.ticker,
                        name: this.name,
                        alias: this.alias,
                        assetName: this.assetName,
                        decimal: this.decimal,
                        parent: this.id,
                        BN: this.BN,
                        toCurrencyUnit: (t, e) => this.toCurrencyUnit(t, e),
                        toMinimalUnit: (t, e) => this.toMinimalUnit(t, e),
                        tokens: () => this.tokens,
                        getFee: t => this.getFee(t),
                        getTRC20Fee: t => this.getTRC20Fee(t),
                        feeCoefficient: this.coefficient,
                        feeDefault: this.feeData && this.feeData.fee,
                        feeTRC20: this.feeData.feeTRC20
                    }
                }
                async loadTokensList(t) {
                    (await this.getTokenList()).forEach(e => {
                        const n = this.createToken({
                            name: e.name,
                            ticker: e.ticker,
                            decimal: e.decimal,
                            contract: e.contract,
                            uniqueField: e.contract,
                            source: "list",
                            visibility: !0,
                            confirmed: !0,
                            config: {
                                feeData: {
                                    energy: e.energy
                                }
                            }
                        });
                        t.push(n), t.store.walletsCollection[n.alias].set(n.id.toUpperCase(), n), this.tokens[e.contract] = n
                    })
                }
                async fetchUserTokens() {
                    return []
                }
                createToken(t) {
                    return new u.TRXToken({
                        parent: this,
                        ...t
                    })
                }
                loadWallet(t) {
                    return new Promise((e, n) => {
                        const a = i.default.fromMasterSeed(t).derive(this.derivation),
                            r = s.default.utils.crypto.getAddressFromPriKey(a._privateKey);
                        a || n(new l.WalletError({
                            type: c.WALLET_ERROR,
                            error: new Error("private key is empty"),
                            instance: this
                        })), this.privateKey = s.default.utils.bytes.byteArray2hexStr(a._privateKey), this.address = s.default.utils.crypto.getBase58CheckAddress(r), this.tronWeb = new s.default({
                            fullHost: this.getProvider("node").config.baseUrl,
                            privateKey: this.privateKey
                        }), e(this)
                    })
                }
                getAddress() {
                    if (this.privateKey) {
                        const t = s.default.utils.crypto.getAddressFromPriKey(s.default.utils.bytes.hexStr2byteArray(this.privateKey));
                        return s.default.utils.crypto.getBase58CheckAddress(t)
                    }
                    throw new l.WalletError({
                        type: c.WALLET_ERROR,
                        error: new Error("can't get private key"),
                        instance: this
                    })
                }
                async validateAddress(t) {
                    try {
                        return s.default.utils.crypto.isAddressValid(t)
                    } catch (t) {
                        return !1
                    }
                }
                async createTransaction({
                    address: t,
                    amount: e
                }) {
                    return {
                        address: t,
                        amount: e
                    }
                }
                async createTokenTransaction(t) {
                    return t
                }
                async sendTransaction({
                    address: t,
                    amount: e,
                    contract: n = null,
                    feeLimit: a = null,
                    transfer: i = !1
                }) {
                    const s = [];
                    var r;
                    if (i) return this.sendTokenTransaction({
                        address: t,
                        amount: e,
                        contract: n,
                        feeLimit: null != a ? a : null === (r = this.feeData) || void 0 === r ? void 0 : r.feeTRC20
                    });
                    try {
                        return {
                            txid: (await this.tronWeb.trx.send(t, e, this.privateKey)).transaction.txID
                        }
                    } catch (t) {
                        s.push(t)
                    }
                    try {
                        const n = this.getProvider("send").helper.transactionBuilder.buildTransferTransaction("TRX", this.address, t, e);
                        return this.getProvider("send").sendTransaction(n, this.privateKey)
                    } catch (t) {
                        s.push(t)
                    }
                    throw new l.WalletError({
                        type: c.SEND_TRANSACTION_TYPE,
                        error: new Error(s),
                        instance: this
                    })
                }
                async sendTokenTransaction({
                    address: t,
                    amount: e,
                    contract: n,
                    feeLimit: a
                }) {
                    if ("trc20" === (Number(n) ? "trc10" : "trc20")) try {
                        const i = await this.tronWeb.contract().at(n);
                        return {
                            txid: await i.transfer(t, e).send({
                                feeLimit: a
                            }, this.privateKey)
                        }
                    } catch (t) {
                        throw new l.WalletError({
                            type: c.SEND_TRANSACTION_TYPE,
                            error: new Error(t),
                            instance: this
                        })
                    }
                    return {
                        txid: (await this.tronWeb.trx.sendToken(t, e, n, {
                            privateKey: this.privateKey
                        })).transaction.txID
                    }
                }
                encodeParameters(t) {
                    const {
                        AbiCoder: e
                    } = r.utils, n = /^(41)/;
                    if (0 === t.length) return "";
                    const a = new e,
                        i = [],
                        s = [];
                    for (let e = 0; e < t.length; e++) {
                        let {
                            value: a
                        } = t[e];
                        const {
                            type: r
                        } = t[e];
                        "address" === r ? a = a.replace(n, "0x") : "address[]" === r && (a = a.map(t => this.tronWeb.address.toHex(t).replace(n, "0x"))), i.push(r), s.push(a)
                    }
                    try {
                        return a.encode(i, s).replace(/^(0x)/, "")
                    } catch (t) {
                        return console.warn(t), ""
                    }
                }
                async sendRawTransaction(t) {
                    try {
                        return {
                            txid: (await (await this.tronWeb.trx.sendRawTransaction(t))).transaction.txID
                        }
                    } catch (t) {
                        throw new l.WalletError({
                            type: c.SEND_TRANSACTION_TYPE,
                            error: new Error(t),
                            instance: this
                        })
                    }
                }
                async estimateDynamicEnergy({
                    address: t,
                    amount: e,
                    contract: n
                }) {
                    var a, i, s;
                    const r = Number(this.feeData.defaultTrc20TransferEnergy || 13500),
                        o = (null === (a = this.tokens[n]) || void 0 === a || null === (i = a.config) || void 0 === i || null === (s = i.feeData) || void 0 === s ? void 0 : s.energy) || r;
                    if (!this.dynamicTrc20EnergyEnabled) return o;
                    const u = [{
                            type: "address",
                            value: this.tronWeb.address.toHex(t)
                        }, {
                            type: "uint256",
                            value: e
                        }],
                        l = {
                            owner_address: this.address,
                            contract_address: n,
                            function_selector: "transfer(address,uint256)",
                            parameter: this.encodeParameters(u),
                            visible: !0
                        };
                    return await this.getProvider("dynamicEnergy").getEstimatedEnergy(l).catch(t => y.default.error({
                        instance: this,
                        error: t
                    })) || o
                }
                async getFee({
                    contract: t,
                    address: e,
                    amount: n
                } = {}) {
                    try {
                        if (this.isTRC20Token(t)) {
                            const a = this.getProvider("history"),
                                i = await a.getAccount(this.address),
                                {
                                    energyRemaining: s,
                                    freeNetRemaining: r
                                } = i.bandwidth,
                                o = !!e && await a.isFirstTransfer(e);
                            let u = await this.estimateDynamicEnergy({
                                address: e,
                                contract: t,
                                amount: n
                            });
                            const l = Number(this.feeData.oneEnergyInTrx || 28e-5),
                                c = Number(this.feeData.oneBandwidthInTrx || .001);
                            o && (u += 15e3);
                            const p = u - s,
                                d = 345 - r;
                            let y = 0;
                            p > 0 && (y = p * l);
                            let m = 0;
                            return d > 0 && (m = d * c), this.toMinimalUnit(y + m)
                        }
                    } catch (t) {
                        console.error(t)
                    }
                    return new this.BN(this.feeData.fee)
                }
                getTRC20Fee(t) {
                    const e = this.transactions.find(e => e.txid === t.transaction_id);
                    return (null == e ? void 0 : e.fee) || null
                }
                async getTransactions() {
                    const {
                        transactions: t = [],
                        transfers: e = []
                    } = await this.getProvider("history").getTransactions({
                        address: this.address
                    }).catch(t => (console.error(t), {})), {
                        trc20transfers: n = []
                    } = await this.getProvider("trc20History").getTransactions({
                        address: this.address
                    }).catch(t => (console.error(t), {})), a = e.map(t => {
                        const e = this.tokens[t.tokenName];
                        return e && this.getProvider("history").modifyTokenTransactionResponse(t, this.address, e.ticker, e.decimal)
                    }).filter(Boolean);
                    return t.concat(a).concat(n)
                }
                async getTransaction(t) {
                    return this.getProvider("tx").getTransaction(this.address, t)
                }
                isTRC20Token(t) {
                    var e;
                    return (null === (e = this.tokens[t]) || void 0 === e ? void 0 : e.contract.indexOf("100")) < 0
                }
                async getInfo() {
                    const {
                        balance: t,
                        assetV2: e = [],
                        stakingInfo: n = {}
                    } = await this.getProvider("balance").getInfo(this.address);
                    if (this.balance = t, e.forEach(t => {
                            this.tokens[t.key] && (this.tokens[t.key].balance = t.value)
                        }), this.getProvider("tokens").getInfo(this.address).then(({
                            assets: t = []
                        }) => {
                            Object.keys(this.tokens).forEach(e => {
                                if (!this.isTRC20Token(e)) return;
                                const n = t.find(t => t.tokenId.toLowerCase() === e.toLowerCase());
                                this.tokens[e].balance = n && n.balance || 0
                            })
                        }).catch(t => console.warn(`[${this.ticker}] Tronscan Error: failed to fetch trc20 tokens,`, t)), n) {
                        var a, i;
                        const t = await this.getProvider("validators").getInfo(this.address),
                            e = null !== (a = null == t || null === (i = t.votes) || void 0 === i ? void 0 : i.reduce((t, {
                                vote_address: e,
                                vote_count: n
                            }) => (t[e] = {
                                address: e,
                                staked: new p.default(n, this)
                            }, t), {})) && void 0 !== a ? a : {},
                            s = new p.default(n.frozenBalanceForEnergy.toString(), this),
                            {
                                frozenVotes: r,
                                frozenVotesExpiration: o
                            } = this.calculateFrozenVotes(n.frozen, s),
                            u = this.calculateStakedAmount(n.votes),
                            l = this.calculateAvailableVotes(r, u),
                            c = this.calculateRewards(n.reward);
                        this.setBalances(await this.makeStakingInfoStruct({
                            staked: u,
                            availableVotes: l,
                            frozenVotes: r,
                            frozenEnergy: s,
                            rewards: c,
                            validators: e,
                            additional: {
                                frozenVotesExpiration: o
                            }
                        }))
                    }
                    return {
                        balance: this.balance,
                        balances: this.balances
                    }
                }
                async getStakingInfo() {
                    return await this.getInfo(), this.balances
                }
                calculateStakedAmount(t) {
                    var e, n;
                    return new p.default(this.toMinimalUnit(null !== (e = null === (n = t[0]) || void 0 === n ? void 0 : n.vote_count) && void 0 !== e ? e : "0"), this)
                }
                calculateFrozenVotes(t, e) {
                    const n = t.length > 0 ? new this.BN(t[0].frozen_balance).add(e.toBN()).toString() : "0",
                        a = t.length > 0 ? t[0].expire_time : "0";
                    return {
                        frozenVotes: new p.default(n, this),
                        frozenVotesExpiration: a
                    }
                }
                calculateAvailableVotes(t, e) {
                    return new p.default(t.toBN().sub(e.toBN()), this)
                }
                calculateAvailableForStake({
                    balance: t
                }) {
                    var e, n;
                    const a = t.toBN().sub(new this.BN(this.feeData.fee)).sub(new this.BN(null !== (e = null === (n = this.feeData.reserveForStake) || void 0 === n ? void 0 : n.toString()) && void 0 !== e ? e : "0"));
                    return new p.default(a.isNeg() ? "0" : a, this)
                }
                calculateTotal({
                    balance: t,
                    frozenVotes: e,
                    rewards: n
                }) {
                    return new p.default(t.toBN().add(e.toBN()).add(n.toBN()), this)
                }
                calculateRewards(t) {
                    var e;
                    return new p.default(null !== (e = null == t ? void 0 : t.toString()) && void 0 !== e ? e : "0", this)
                }
                setPrivateKey(t) {
                    super.setPrivateKey(t), this.tronWeb || (this.tronWeb = new s.default({
                        fullHost: this.getProvider("node").config.baseUrl,
                        privateKey: t
                    }))
                }
                createDelegationTransaction(t, e) {
                    return new Promise((n, a) => {
                        const i = this.toCurrencyUnit(e);
                        let s = null;
                        const r = this.getFrozenVotes(),
                            o = () => new Promise((t, e) => {
                                this.getFrozenVotes().toBN().gt(r.toBN()) ? t() : this.getInfo().then(n => {
                                    this.getFrozenVotes().toBN().gt(r.toBN()) ? t() : e()
                                }).catch(t => {
                                    e(t)
                                })
                            }),
                            u = () => new Promise((e, n) => {
                                const a = this.getFrozenVotes().toCurrency(),
                                    s = Number(this.getTotalBalance().toMinimal()) > 0 ? a : i;
                                this.createVoteTransaction(t, s).then(t => {
                                    e(t)
                                }).catch(t => n(t))
                            }),
                            l = () => {
                                o().then(() => {
                                    clearTimeout(s), u().then(t => n(t)).catch(t => a(t))
                                }).catch(() => {
                                    s = setTimeout(l, 5e3)
                                })
                            };
                        this.createFreezeTransaction(e).then(() => l()).catch(t => a(t))
                    })
                }
                async createFreezeTransaction(t) {
                    const e = [];
                    try {
                        const e = await this.tronWeb.transactionBuilder.freezeBalance(t, 3, "BANDWIDTH", this.address),
                            n = await this.tronWeb.trx.sign(e, this.privateKey);
                        return await this.sendRawTransaction(n)
                    } catch (t) {
                        e.push(t)
                    }
                    throw new l.WalletError({
                        type: c.SEND_TRANSACTION_TYPE,
                        error: new Error(e),
                        instance: this
                    })
                }
                async createVoteTransaction(t, e) {
                    const n = [];
                    try {
                        const n = await this.tronWeb.transactionBuilder.vote({
                            [t]: e
                        }, this.address);
                        return await this.tronWeb.trx.sign(n, this.privateKey)
                    } catch (t) {
                        n.push(t)
                    }
                    throw new l.WalletError({
                        type: c.SEND_TRANSACTION_TYPE,
                        error: new Error(n),
                        instance: this
                    })
                }
                async createUnfreezeTransaction() {
                    const t = [];
                    try {
                        const t = await this.tronWeb.transactionBuilder.unfreezeBalance("BANDWIDTH", this.address),
                            e = await this.tronWeb.trx.sign(t, this.privateKey);
                        return {
                            txid: (await this.tronWeb.trx.sendRawTransaction(e)).transaction.txID
                        }
                    } catch (e) {
                        t.push(e)
                    }
                    throw new l.WalletError({
                        type: c.SEND_TRANSACTION_TYPE,
                        error: new Error(t),
                        instance: this
                    })
                }
                async createWithdrawRewardTransaction() {
                    const t = await this.tronWeb.transactionBuilder.withdrawBlockRewards(this.address);
                    return await this.tronWeb.trx.sign(t, this.privateKey)
                }
                getFreezeExpiration() {
                    const t = (new Date).getTime(),
                        {
                            frozenVotesExpiration: e = "0"
                        } = this.getAdditionalInfo();
                    return Number(e) > 0 ? ((e - t) / 36e5).toFixed() : "0"
                }
                async getTokenList() {
                    this.bannedTokens = await this.getBannedTokenList();
                    try {
                        return await d.default.get(d.ConfigKey.TrxTokens, !0)
                    } catch (t) {
                        y.default.error({
                            instance: this,
                            error: t
                        })
                    }
                    return m.default
                }
                async getBannedTokenList() {
                    let t;
                    try {
                        t = await d.default.get(d.ConfigKey.TrxTokensBanned, !0)
                    } catch (t) {
                        y.default.error({
                            instance: this,
                            error: t
                        })
                    }
                    return t || h.default
                }
            }
            var T = TRXCoin;
            e.default = T
        },
        5482: function(t, e, n) {
            "use strict";
            var a = n(2);
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), Object.defineProperty(e, "ARBToken", {
                enumerable: !0,
                get: function() {
                    return f.default
                }
            }), Object.defineProperty(e, "BNBToken", {
                enumerable: !0,
                get: function() {
                    return u.default
                }
            }), Object.defineProperty(e, "BSCToken", {
                enumerable: !0,
                get: function() {
                    return r.default
                }
            }), Object.defineProperty(e, "ETHToken", {
                enumerable: !0,
                get: function() {
                    return i.default
                }
            }), Object.defineProperty(e, "FLRToken", {
                enumerable: !0,
                get: function() {
                    return s.default
                }
            }), Object.defineProperty(e, "FTMToken", {
                enumerable: !0,
                get: function() {
                    return m.default
                }
            }), Object.defineProperty(e, "LUNCToken", {
                enumerable: !0,
                get: function() {
                    return d.default
                }
            }), Object.defineProperty(e, "MATICToken", {
                enumerable: !0,
                get: function() {
                    return p.default
                }
            }), Object.defineProperty(e, "OPToken", {
                enumerable: !0,
                get: function() {
                    return b.default
                }
            }), Object.defineProperty(e, "StakableMaticETHToken", {
                enumerable: !0,
                get: function() {
                    return h.default
                }
            }), Object.defineProperty(e, "THETAToken", {
                enumerable: !0,
                get: function() {
                    return y.default
                }
            }), Object.defineProperty(e, "TRXToken", {
                enumerable: !0,
                get: function() {
                    return o.default
                }
            }), Object.defineProperty(e, "VETToken", {
                enumerable: !0,
                get: function() {
                    return l.default
                }
            }), Object.defineProperty(e, "ZILToken", {
                enumerable: !0,
                get: function() {
                    return c.default
                }
            });
            var i = a(n(5521)),
                s = a(n(5522)),
                r = a(n(5523)),
                o = a(n(5524)),
                u = a(n(5525)),
                l = a(n(5526)),
                c = a(n(5527)),
                p = a(n(5528)),
                d = a(n(5511)),
                y = a(n(5529)),
                m = a(n(5530)),
                h = a(n(5531)),
                b = a(n(5533)),
                f = a(n(5534))
        },
        5511: function(t, e, n) {
            "use strict";
            var a = n(2);
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.default = void 0;
            var i = a(n(545));
            class LUNCToken extends i.default {
                constructor(t) {
                    var e;
                    super(t), this.fields.paymentId = !0, this.stabilityFee = (null === (e = this.config) || void 0 === e ? void 0 : e.stabilityFee) || .012
                }
                async createTransaction({
                    address: t,
                    amount: e,
                    userGasPrice: n,
                    gasLimit: a,
                    multiplier: i,
                    feeLimit: s = 1e7,
                    memo: r
                }) {
                    return {
                        address: t,
                        amount: e,
                        contract: this.contract,
                        transfer: !0,
                        ticker: this.ticker,
                        userGasPrice: n,
                        gasLimit: a,
                        multiplier: i,
                        feeLimit: s,
                        denom: this.denom,
                        memo: r
                    }
                }
                async availableBalance() {
                    if (this.divisibleBalance) {
                        const t = await this.getStabilityFee(this.indivisibleBalance),
                            e = this.indivisibleBalance.sub(new this.BN(t));
                        return e.gt(0) ? this.toCurrencyUnit(e.toString()) : "0"
                    }
                    return "0"
                }
                getStabilityFee(t) {
                    return (Number(t) * this.stabilityFee + 1).toFixed(0)
                }
            }
            var s = LUNCToken;
            e.default = s
        },
        5521: function(t, e, n) {
            "use strict";
            var a = n(2);
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.default = void 0;
            var i = a(n(67)),
                s = a(n(545));
            class ETHToken extends s.default {
                constructor(...t) {
                    super(...t), this.gasLimit = "150000", this.coefficient = 1
                }
                async createTransaction({
                    address: t,
                    amount: e,
                    custom: n,
                    userGasPrice: a,
                    gasLimit: i = this.gasLimit,
                    multiplier: s = this.multiplier,
                    nonce: r
                }) {
                    return {
                        address: t,
                        amount: e,
                        custom: n,
                        userGasPrice: a,
                        gasLimit: i,
                        contract: this.contract,
                        multiplier: s,
                        nonce: r
                    }
                }
                getFeeSettings() {
                    return i.default.get("eth-gas-price")
                }
            }
            var r = ETHToken;
            e.default = r
        },
        5522: function(t, e, n) {
            "use strict";
            var a = n(2);
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.default = void 0;
            var i = a(n(67)),
                s = a(n(545)),
                r = n(29),
                o = n(26);
            class FLRToken extends s.default {
                constructor(...t) {
                    super(...t), this.gasLimit = "150000", this.coefficient = 1
                }
                async getInfo() {
                    return {
                        balance: String(this.balance),
                        transactions: this.transactions
                    }
                }
                async getFee({
                    amount: t = 0,
                    isSendAll: e,
                    gasPrice: n,
                    gasLimit: a
                }) {
                    const i = Number(n.toString()) * Number(this.coefficient),
                        s = a || this.gasLimit;
                    return new this.BN(s).mul(new this.BN(i))
                }
                getFeeSettings() {
                    return i.default.get("eth-gas-price")
                }
                async createTransaction({
                    address: t,
                    amount: e,
                    custom: n,
                    userGasPrice: a,
                    gasLimit: i = this.gasLimit,
                    multiplier: s = this.multiplier,
                    nonce: r
                }) {
                    return {
                        address: t,
                        amount: e,
                        custom: n,
                        userGasPrice: a,
                        gasLimit: i,
                        contract: this.contract,
                        multiplier: s,
                        nonce: r
                    }
                }
                async sendTransaction(t) {
                    return new Promise((e, n) => {
                        this.web3.eth.sendSignedTransaction(t).on("transactionHash", t => {
                            e({
                                txid: t
                            })
                        }).catch(t => {
                            const e = this.parent.coreLibrary.currentProvider.host,
                                a = new r.ExplorerRequestError({
                                    type: o.SEND_TRANSACTION_TYPE,
                                    error: t,
                                    url: e,
                                    instance: this
                                });
                            n(a)
                        })
                    })
                }
            }
            var u = FLRToken;
            e.default = u
        },
        5523: function(t, e, n) {
            "use strict";
            var a = n(2);
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.default = void 0;
            var i = a(n(545)),
                s = n(29),
                r = n(26);
            class BSCToken extends i.default {
                constructor(...t) {
                    super(...t), this.gasLimit = "150000", this.coefficient = 1
                }
                async getInfo() {
                    return {
                        balance: String(this.balance),
                        transactions: this.transactions
                    }
                }
                async getFee({
                    amount: t = 0,
                    isSendAll: e,
                    gasPrice: n,
                    gasLimit: a
                }) {
                    const i = Number(n.toString()) * Number(this.coefficient),
                        s = a || this.gasLimit;
                    return new this.BN(s).mul(new this.BN(i))
                }
                async createTransaction({
                    address: t,
                    amount: e,
                    custom: n,
                    userGasPrice: a,
                    gasLimit: i = this.gasLimit,
                    multiplier: s = this.multiplier,
                    nonce: r
                }) {
                    return {
                        address: t,
                        amount: e,
                        custom: n,
                        userGasPrice: a,
                        gasLimit: i,
                        contract: this.contract,
                        multiplier: s,
                        nonce: r
                    }
                }
                async sendTransaction(t) {
                    return new Promise((e, n) => {
                        this.web3.eth.sendSignedTransaction(t).on("transactionHash", t => {
                            e({
                                txid: t
                            })
                        }).catch(t => {
                            const e = this.coreLibrary.currentProvider.host,
                                a = new s.ExplorerRequestError({
                                    type: r.SEND_TRANSACTION_TYPE,
                                    error: t,
                                    url: e,
                                    instance: this
                                });
                            n(a)
                        })
                    })
                }
            }
            var o = BSCToken;
            e.default = o
        },
        5524: function(t, e, n) {
            "use strict";
            var a = n(2);
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.default = void 0;
            var i = a(n(545));
            class TRXToken extends i.default {
                async createTransaction({
                    address: t,
                    amount: e,
                    userFee: n
                }) {
                    return {
                        address: t,
                        amount: e,
                        contract: this.contract,
                        transfer: !0,
                        feeLimit: null != n ? n : 2e7
                    }
                }
                getUserTicker() {
                    return -1 !== this.ticker.indexOf("-") && this.ticker.split("-")[1] || this.ticker
                }
            }
            var s = TRXToken;
            e.default = s
        },
        5525: function(t, e, n) {
            "use strict";
            var a = n(2);
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.default = void 0;
            var i = a(n(545));
            class BNBToken extends i.default {
                constructor(t) {
                    super(t), this.fields.paymentId = !0, this.balances = {}
                }
                async availableBalance() {
                    return this.balances && this.balances.available ? this.balances.available : this.divisibleBalance ? String(this.divisibleBalance) : "0"
                }
                async getInfo() {
                    return await this.getBalance(), {
                        balance: String(this.balance),
                        transactions: this.transactions
                    }
                }
                async createTransaction({
                    address: t,
                    amount: e,
                    memo: n
                }) {
                    return {
                        address: t,
                        amount: e,
                        memo: n,
                        asset: this.ticker
                    }
                }
                async getBalance() {
                    return this.balance
                }
                async getTransactions() {
                    return this.transactions
                }
                getUserTicker() {
                    return this.ticker.split("-")[0]
                }
            }
            var s = BNBToken;
            e.default = s
        },
        5526: function(t, e, n) {
            "use strict";
            var a = n(2);
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.default = void 0;
            var i = a(n(545));
            class VETToken extends i.default {
                constructor(...t) {
                    super(...t), this.fee = "60"
                }
                get feeTicker() {
                    return "VTHO"
                }
                async getInfo() {
                    return {
                        balance: String(this.balance),
                        transactions: this.transactions
                    }
                }
                async getFee() {
                    return new this.BN(this.toMinimalUnit(this.fee))
                }
                async createTransaction({
                    address: t,
                    amount: e
                }) {
                    const n = Number(this.toCurrencyUnit(await this.getFee())),
                        a = `0xa9059cbb${this.addLeadingZero(t.substring(2),64)}${this.addLeadingZero(new this.BN(e).toString(16),64)}`;
                    return {
                        contract: this.contract,
                        amount: "0",
                        dataToSend: a,
                        fee: n
                    }
                }
                async isAvailableForFee() {
                    const t = await this.getFee();
                    return this.indivisibleBalance.gte(t)
                }
                async availableBalance() {
                    const t = await this.getFee(),
                        e = new this.BN(this.balance).sub(t);
                    return e.lt(new this.BN(0)) ? "0" : this.toCurrencyUnit(e)
                }
                addLeadingZero(t, e) {
                    return String(t).padStart(e, "0")
                }
            }
            var s = VETToken;
            e.default = s
        },
        5527: function(t, e, n) {
            "use strict";
            var a = n(2);
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.default = void 0;
            var i = a(n(545));
            class ZILToken extends i.default {
                async createTransaction({
                    address: t,
                    amount: e
                }) {
                    return {
                        address: t,
                        amount: e,
                        contract: this.contract
                    }
                }
            }
            var s = ZILToken;
            e.default = s
        },
        5528: function(t, e, n) {
            "use strict";
            var a = n(2);
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.default = void 0;
            var i = a(n(35)),
                s = a(n(545)),
                r = n(29),
                o = n(26);
            class MATICToken extends s.default {
                constructor(...t) {
                    super(...t), this.gasLimit = "150000", this.coefficient = 1, this.BN = i.default
                }
                async getInfo() {
                    return {
                        balance: String(this.balance),
                        transactions: this.transactions
                    }
                }
                async getFee({
                    gasPrice: t,
                    gasLimit: e
                }) {
                    const n = new this.BN(t.toString()).mul(new this.BN(this.coefficient)),
                        a = e || this.gasLimit;
                    return new this.BN(a).mul(new this.BN(n))
                }
                async createTransaction({
                    address: t,
                    amount: e,
                    custom: n,
                    userGasPrice: a,
                    gasLimit: i = this.gasLimit,
                    multiplier: s = this.multiplier,
                    nonce: r
                }) {
                    return {
                        address: t,
                        amount: e,
                        custom: n,
                        userGasPrice: a,
                        gasLimit: i,
                        contract: this.contract,
                        multiplier: s,
                        nonce: r
                    }
                }
                async sendTransaction(t) {
                    return new Promise((e, n) => {
                        this.web3.eth.sendSignedTransaction(t).on("transactionHash", t => {
                            e({
                                txid: t
                            })
                        }).catch(t => {
                            const e = this.coreLibrary.currentProvider.host;
                            n(new r.ExplorerRequestError({
                                type: o.SEND_TRANSACTION_TYPE,
                                error: t,
                                url: e,
                                instance: this
                            }))
                        })
                    })
                }
            }
            var u = MATICToken;
            e.default = u
        },
        5529: function(t, e, n) {
            "use strict";
            var a = n(2);
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.default = void 0;
            var i = a(n(207)),
                s = a(n(208)),
                r = a(n(35)),
                o = a(n(545));

            function u(t, e, n) {
                ! function(t, e) {
                    if (e.has(t)) throw new TypeError("Cannot initialize the same private elements twice on an object")
                }(t, e), e.set(t, n)
            }
            var l = new WeakMap;
            class THETAToken extends o.default {
                constructor(t) {
                    super(t), u(this, l, {
                        writable: !0,
                        value: void 0
                    }), this.id = this.ticker, (0, s.default)(this, l, t.parent)
                }
                get feeTicker() {
                    return this.getFeeTicker()
                }
                async createTransaction({
                    address: t,
                    amount: e,
                    userFee: n
                }) {
                    return {
                        address: t,
                        amount: e,
                        contract: this.contract,
                        ticker: this.ticker,
                        userFee: n || await this.getFee()
                    }
                }
                async availableBalance(t) {
                    return (0, i.default)(this, l).getAvailableBalanceForWallet(this, t)
                }
                async isAvailableForSend(t, e) {
                    const n = await this.availableBalance(this.toMinimalUnit(e));
                    return new r.default(this.toMinimalUnit(t)).lte(new r.default(this.toMinimalUnit(n)))
                }
                async isAvailableForFee(t) {
                    return (0, i.default)(this, l).hasEnoughFeeBalance(t)
                }
            }
            e.default = THETAToken
        },
        5530: function(t, e, n) {
            "use strict";
            var a = n(2);
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.default = void 0;
            var i = n(321),
                s = a(n(67)),
                r = a(n(545)),
                o = n(29),
                u = n(26);
            class FTMToken extends r.default {
                constructor(...t) {
                    super(...t), this.gasLimit = "150000", this.coefficient = 1
                }
                async getInfo() {
                    return {
                        balance: String(this.balance),
                        transactions: this.transactions
                    }
                }
                async getFee({
                    amount: t = 0,
                    isSendAll: e,
                    gasPrice: n,
                    gasLimit: a
                }) {
                    const i = Number(n.toString()) * Number(this.coefficient),
                        s = a || this.gasLimit;
                    return new this.BN(s).mul(new this.BN(i))
                }
                getFeeSettings() {
                    return s.default.get(i.ConfigKey.FantomGasPrice)
                }
                async createTransaction({
                    address: t,
                    amount: e,
                    custom: n,
                    userGasPrice: a,
                    gasLimit: i = this.gasLimit,
                    multiplier: s = this.multiplier,
                    nonce: r
                }) {
                    return {
                        address: t,
                        amount: e,
                        custom: n,
                        userGasPrice: a,
                        gasLimit: i,
                        contract: this.contract,
                        multiplier: s,
                        nonce: r
                    }
                }
                async sendTransaction(t) {
                    return new Promise((e, n) => {
                        this.web3.eth.sendSignedTransaction(t).on("transactionHash", t => {
                            e({
                                txid: t
                            })
                        }).catch(t => {
                            const e = this.parent.coreLibrary.currentProvider.host,
                                a = new o.ExplorerRequestError({
                                    type: u.SEND_TRANSACTION_TYPE,
                                    error: t,
                                    url: e,
                                    instance: this
                                });
                            n(a)
                        })
                    })
                }
            }
            var l = FTMToken;
            e.default = l
        },
        5531: function(t, e, n) {
            "use strict";
            var a = n(2);
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.default = void 0;
            var i = n(930),
                s = a(n(464)),
                r = a(n(2341)),
                o = a(n(5532)),
                u = a(n(2340)),
                l = n(5482);
            class StakableMaticETHToken extends((0, i.Web3Mixin)((0, i.StakingMixin)(l.ETHToken))) {
                constructor({
                    config: t,
                    ...e
                }) {
                    var n, a, i, s, r, o, u;
                    super({
                        config: t,
                        ...e
                    }), this.stakingContract = null !== (n = t.stakingContract) && void 0 !== n ? n : "0x5E3EF299FDDF15EAA0432E6E66473ACE8C13D908", this.stakingGasLimit = null !== (a = t.stakingGasLimit) && void 0 !== a ? a : 3e5, this.unstakingGasLimit = null !== (i = t.unstakingGasLimit) && void 0 !== i ? i : 3e5, this.restakeRewardsGasLimit = null !== (s = t.restakeRewardsGasLimit) && void 0 !== s ? s : 3e5, this.claimRewardsGasLimit = null !== (r = t.claimRewardsGasLimit) && void 0 !== r ? r : 17e4, this.withdrawGasLimit = null !== (o = t.withdrawGasLimit) && void 0 !== o ? o : 3e5, this.approvalGasLimit = null !== (u = t.approvalGasLimit) && void 0 !== u ? u : 5e4
                }
                async getInfo() {
                    return await super.getInfo(), await this.getStakingInfo(), {
                        balance: this.balance,
                        balances: this.balances
                    }
                }
                calculateTotal({
                    balance: t,
                    staked: e,
                    unstaking: n,
                    rewards: a
                }) {
                    const i = t.toBN().add(e.toBN()).add(a.toBN()).add(n.toBN()).toString();
                    return new s.default(i, this)
                }
                async calculateAvailableForStake({
                    balance: t,
                    availableVotes: e
                }) {
                    return e.toBN().gte(t.toBN()) ? new s.default(t.toMinimal(), this) : new s.default("0", this)
                }
                accumulateValidatorsValues(t, e) {
                    return Object.values(t).reduce((t, {
                        ["" + e]: n
                    }) => new s.default(t.toBN().add(n.toBN()), this), new s.default("0", this))
                }
                calculateStaked(t) {
                    return this.accumulateValidatorsValues(t, "staked")
                }
                calculateUnstaking(t) {
                    return this.accumulateValidatorsValues(t, "unstaking")
                }
                calculateRewards(t) {
                    return this.accumulateValidatorsValues(t, "rewards")
                }
                calculatePendingWithdrawals(t) {
                    return this.accumulateValidatorsValues(t, "pendingWithdrawals")
                }
                calculateAvailableWithdrawals(t) {
                    return this.accumulateValidatorsValues(t, "availableWithdrawals")
                }
                async fetchStakingInfo() {
                    const t = Object.fromEntries(await Promise.all(this.predefinedValidators.map(async ({
                            address: t
                        }) => {
                            const e = await this.makeRawCall(o.default, this.stakingContract, "currentEpoch"),
                                n = await this.makeRawCall(r.default, t, "unbondNonces", [this.address]),
                                {
                                    shares: a,
                                    withdrawEpoch: i
                                } = await this.makeRawCall(r.default, t, "unbonds_new", [this.address, n]),
                                u = Number(e) > Number(i) + 82,
                                l = new s.default(u ? "0" : a, this),
                                c = new s.default(u ? a : "0", this),
                                p = new s.default(l.toBN().add(c.toBN()).toString(), this);
                            return [t, {
                                staked: new s.default(await this.makeRawCall(r.default, t, "balanceOf", [this.address]), this),
                                rewards: new s.default(await this.makeRawCall(r.default, t, "getLiquidRewards", [this.address]), this),
                                pendingWithdrawals: l,
                                availableWithdrawals: c,
                                unstaking: p
                            }]
                        }))),
                        e = this.calculateStaked(t),
                        n = this.calculateUnstaking(t),
                        a = this.calculateRewards(t),
                        i = this.calculatePendingWithdrawals(t),
                        l = this.calculateAvailableWithdrawals(t),
                        c = new s.default(await this.makeRawCall(u.default, this.contract, "allowance", [this.address, this.stakingContract]), this);
                    return {
                        balance: new s.default(this.balance, this),
                        staked: e,
                        unstaking: n,
                        availableVotes: c,
                        pendingWithdrawals: i,
                        availableWithdrawals: l,
                        rewards: a,
                        validators: t
                    }
                }
                makeApproval({
                    address: t,
                    amount: e
                }) {
                    return this.createSmartContractCall({
                        smartContractAddress: t,
                        standard: !0,
                        action: "approve",
                        args: [t, e]
                    })
                }
                increaseAllowance({
                    address: t,
                    amount: e
                }) {
                    return this.createSmartContractCall({
                        smartContractAddress: t,
                        standard: !0,
                        action: "increaseAllowance",
                        args: [t, e]
                    })
                }
                createApproveTransaction({
                    nonce: t,
                    userGasPrice: e,
                    gasLimit: n = this.approvalGasLimit,
                    multiplier: a
                } = {}) {
                    const i = this.makeApproval({
                        address: this.stakingContract,
                        amount: "115792089237316195423570985008687907853269984665640564039457584007913129639935"
                    });
                    return this.createRawTransactions({
                        address: this.contract,
                        amount: "0",
                        paymentData: i,
                        nonce: t,
                        userGasPrice: e,
                        gasLimit: n,
                        multiplier: a
                    })
                }
                createDelegationTransaction({
                    amount: t,
                    validator: e,
                    nonce: n,
                    userGasPrice: a,
                    gasLimit: i = this.stakingGasLimit,
                    multiplier: s
                }) {
                    const o = new this.coreLibrary.eth.Contract(r.default, e).methods.buyVoucher(t, t).encodeABI();
                    return this.createRawTransactions({
                        address: e,
                        paymentData: o,
                        amount: "0",
                        nonce: n,
                        userGasPrice: a,
                        gasLimit: i,
                        multiplier: s
                    })
                }
                createUnstakeTransaction({
                    amount: t,
                    validator: e,
                    nonce: n,
                    userGasPrice: a,
                    gasLimit: i = this.unstakingGasLimit,
                    multiplier: s
                }) {
                    const o = new this.coreLibrary.eth.Contract(r.default, e).methods.sellVoucher_new(t, t).encodeABI();
                    return this.createRawTransactions({
                        address: e,
                        paymentData: o,
                        amount: "0",
                        nonce: n,
                        userGasPrice: a,
                        gasLimit: i,
                        multiplier: s
                    })
                }
                async createWithdrawalTransaction({
                    validator: t,
                    nonce: e,
                    userGasPrice: n,
                    gasLimit: a = this.withdrawGasLimit,
                    multiplier: i
                }) {
                    const s = new this.coreLibrary.eth.Contract(r.default, t),
                        o = await this.makeRawCall(r.default, t, "unbondNonces", [this.address]),
                        u = s.methods.unstakeClaimTokens_new(o).encodeABI();
                    return this.createRawTransactions({
                        address: t,
                        paymentData: u,
                        amount: "0",
                        nonce: e,
                        userGasPrice: n,
                        gasLimit: a,
                        multiplier: i
                    })
                }
                createClaimRewardsTransaction({
                    validator: t,
                    nonce: e,
                    userGasPrice: n,
                    gasLimit: a = this.claimRewardsGasLimit,
                    multiplier: i
                }) {
                    const s = new this.coreLibrary.eth.Contract(r.default, t).methods.withdrawRewards().encodeABI();
                    return this.createRawTransactions({
                        address: t,
                        paymentData: s,
                        amount: "0",
                        nonce: e,
                        userGasPrice: n,
                        gasLimit: a,
                        multiplier: i
                    })
                }
                createRestakeRewardsTransaction({
                    validator: t,
                    nonce: e,
                    userGasPrice: n,
                    gasLimit: a = this.restakeRewardsGasLimit,
                    multiplier: i
                }) {
                    const s = new this.coreLibrary.eth.Contract(r.default, t).methods.restake().encodeABI();
                    return this.createRawTransactions({
                        address: t,
                        paymentData: s,
                        amount: "0",
                        nonce: e,
                        userGasPrice: n,
                        gasLimit: a,
                        multiplier: i
                    })
                }
                getPredefineValidatorsConfigIdentifier() {
                    return "matic_eth"
                }
            }
            e.default = StakableMaticETHToken
        },
        5532: function(t, e, n) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.default = void 0;
            e.default = [{
                inputs: [],
                payable: !1,
                stateMutability: "nonpayable",
                type: "constructor"
            }, {
                anonymous: !1,
                inputs: [{
                    indexed: !0,
                    internalType: "address",
                    name: "previousOwner",
                    type: "address"
                }, {
                    indexed: !0,
                    internalType: "address",
                    name: "newOwner",
                    type: "address"
                }],
                name: "OwnershipTransferred",
                type: "event"
            }, {
                anonymous: !1,
                inputs: [{
                    indexed: !0,
                    internalType: "address",
                    name: "previousRootChain",
                    type: "address"
                }, {
                    indexed: !0,
                    internalType: "address",
                    name: "newRootChain",
                    type: "address"
                }],
                name: "RootChainChanged",
                type: "event"
            }, {
                constant: !0,
                inputs: [],
                name: "CHECKPOINT_REWARD",
                outputs: [{
                    internalType: "uint256",
                    name: "",
                    type: "uint256"
                }],
                payable: !1,
                stateMutability: "view",
                type: "function"
            }, {
                constant: !0,
                inputs: [],
                name: "NFTContract",
                outputs: [{
                    internalType: "contract StakingNFT",
                    name: "",
                    type: "address"
                }],
                payable: !1,
                stateMutability: "view",
                type: "function"
            }, {
                constant: !0,
                inputs: [],
                name: "NFTCounter",
                outputs: [{
                    internalType: "uint256",
                    name: "",
                    type: "uint256"
                }],
                payable: !1,
                stateMutability: "view",
                type: "function"
            }, {
                constant: !0,
                inputs: [],
                name: "WITHDRAWAL_DELAY",
                outputs: [{
                    internalType: "uint256",
                    name: "",
                    type: "uint256"
                }],
                payable: !1,
                stateMutability: "view",
                type: "function"
            }, {
                constant: !0,
                inputs: [],
                name: "accountStateRoot",
                outputs: [{
                    internalType: "bytes32",
                    name: "",
                    type: "bytes32"
                }],
                payable: !1,
                stateMutability: "view",
                type: "function"
            }, {
                constant: !0,
                inputs: [],
                name: "auctionPeriod",
                outputs: [{
                    internalType: "uint256",
                    name: "",
                    type: "uint256"
                }],
                payable: !1,
                stateMutability: "view",
                type: "function"
            }, {
                constant: !1,
                inputs: [{
                    internalType: "address",
                    name: "newRootChain",
                    type: "address"
                }],
                name: "changeRootChain",
                outputs: [],
                payable: !1,
                stateMutability: "nonpayable",
                type: "function"
            }, {
                constant: !0,
                inputs: [],
                name: "checkPointBlockInterval",
                outputs: [{
                    internalType: "uint256",
                    name: "",
                    type: "uint256"
                }],
                payable: !1,
                stateMutability: "view",
                type: "function"
            }, {
                constant: !1,
                inputs: [{
                    internalType: "uint256",
                    name: "blockInterval",
                    type: "uint256"
                }, {
                    internalType: "bytes32",
                    name: "voteHash",
                    type: "bytes32"
                }, {
                    internalType: "bytes32",
                    name: "stateRoot",
                    type: "bytes32"
                }, {
                    internalType: "address",
                    name: "proposer",
                    type: "address"
                }, {
                    internalType: "uint256[3][]",
                    name: "sigs",
                    type: "uint256[3][]"
                }],
                name: "checkSignatures",
                outputs: [{
                    internalType: "uint256",
                    name: "",
                    type: "uint256"
                }],
                payable: !1,
                stateMutability: "nonpayable",
                type: "function"
            }, {
                constant: !0,
                inputs: [],
                name: "checkpointRewardDelta",
                outputs: [{
                    internalType: "uint256",
                    name: "",
                    type: "uint256"
                }],
                payable: !1,
                stateMutability: "view",
                type: "function"
            }, {
                constant: !1,
                inputs: [{
                    internalType: "uint256",
                    name: "accumFeeAmount",
                    type: "uint256"
                }, {
                    internalType: "uint256",
                    name: "index",
                    type: "uint256"
                }, {
                    internalType: "bytes",
                    name: "proof",
                    type: "bytes"
                }],
                name: "claimFee",
                outputs: [],
                payable: !1,
                stateMutability: "nonpayable",
                type: "function"
            }, {
                constant: !1,
                inputs: [{
                    internalType: "uint256",
                    name: "validatorId",
                    type: "uint256"
                }, {
                    internalType: "uint256",
                    name: "heimdallFee",
                    type: "uint256"
                }],
                name: "confirmAuctionBid",
                outputs: [],
                payable: !1,
                stateMutability: "nonpayable",
                type: "function"
            }, {
                constant: !0,
                inputs: [],
                name: "currentEpoch",
                outputs: [{
                    internalType: "uint256",
                    name: "",
                    type: "uint256"
                }],
                payable: !1,
                stateMutability: "view",
                type: "function"
            }, {
                constant: !0,
                inputs: [],
                name: "currentValidatorSetSize",
                outputs: [{
                    internalType: "uint256",
                    name: "",
                    type: "uint256"
                }],
                payable: !1,
                stateMutability: "view",
                type: "function"
            }, {
                constant: !0,
                inputs: [],
                name: "currentValidatorSetTotalStake",
                outputs: [{
                    internalType: "uint256",
                    name: "",
                    type: "uint256"
                }],
                payable: !1,
                stateMutability: "view",
                type: "function"
            }, {
                constant: !1,
                inputs: [{
                    internalType: "uint256",
                    name: "validatorId",
                    type: "uint256"
                }, {
                    internalType: "uint256",
                    name: "amount",
                    type: "uint256"
                }],
                name: "decreaseValidatorDelegatedAmount",
                outputs: [],
                payable: !1,
                stateMutability: "nonpayable",
                type: "function"
            }, {
                constant: !0,
                inputs: [{
                    internalType: "uint256",
                    name: "validatorId",
                    type: "uint256"
                }],
                name: "delegatedAmount",
                outputs: [{
                    internalType: "uint256",
                    name: "",
                    type: "uint256"
                }],
                payable: !1,
                stateMutability: "view",
                type: "function"
            }, {
                constant: !1,
                inputs: [{
                    internalType: "uint256",
                    name: "validatorId",
                    type: "uint256"
                }, {
                    internalType: "uint256",
                    name: "amount",
                    type: "uint256"
                }, {
                    internalType: "address",
                    name: "delegator",
                    type: "address"
                }],
                name: "delegationDeposit",
                outputs: [{
                    internalType: "bool",
                    name: "",
                    type: "bool"
                }],
                payable: !1,
                stateMutability: "nonpayable",
                type: "function"
            }, {
                constant: !0,
                inputs: [],
                name: "delegationEnabled",
                outputs: [{
                    internalType: "bool",
                    name: "",
                    type: "bool"
                }],
                payable: !1,
                stateMutability: "view",
                type: "function"
            }, {
                constant: !0,
                inputs: [{
                    internalType: "uint256",
                    name: "validatorId",
                    type: "uint256"
                }],
                name: "delegatorsReward",
                outputs: [{
                    internalType: "uint256",
                    name: "",
                    type: "uint256"
                }],
                payable: !1,
                stateMutability: "view",
                type: "function"
            }, {
                constant: !1,
                inputs: [{
                    internalType: "address",
                    name: "auctionUser",
                    type: "address"
                }, {
                    internalType: "uint256",
                    name: "heimdallFee",
                    type: "uint256"
                }, {
                    internalType: "uint256",
                    name: "validatorId",
                    type: "uint256"
                }, {
                    internalType: "uint256",
                    name: "auctionAmount",
                    type: "uint256"
                }, {
                    internalType: "bool",
                    name: "acceptDelegation",
                    type: "bool"
                }, {
                    internalType: "bytes",
                    name: "signerPubkey",
                    type: "bytes"
                }],
                name: "dethroneAndStake",
                outputs: [],
                payable: !1,
                stateMutability: "nonpayable",
                type: "function"
            }, {
                constant: !1,
                inputs: [{
                    internalType: "address",
                    name: "destination",
                    type: "address"
                }, {
                    internalType: "uint256",
                    name: "amount",
                    type: "uint256"
                }],
                name: "drain",
                outputs: [],
                payable: !1,
                stateMutability: "nonpayable",
                type: "function"
            }, {
                constant: !1,
                inputs: [{
                    internalType: "uint256",
                    name: "validatorId",
                    type: "uint256"
                }, {
                    internalType: "address",
                    name: "tokenAddr",
                    type: "address"
                }, {
                    internalType: "address payable",
                    name: "destination",
                    type: "address"
                }, {
                    internalType: "uint256",
                    name: "amount",
                    type: "uint256"
                }],
                name: "drainValidatorShares",
                outputs: [],
                payable: !1,
                stateMutability: "nonpayable",
                type: "function"
            }, {
                constant: !0,
                inputs: [],
                name: "dynasty",
                outputs: [{
                    internalType: "uint256",
                    name: "",
                    type: "uint256"
                }],
                payable: !1,
                stateMutability: "view",
                type: "function"
            }, {
                constant: !0,
                inputs: [],
                name: "epoch",
                outputs: [{
                    internalType: "uint256",
                    name: "",
                    type: "uint256"
                }],
                payable: !1,
                stateMutability: "view",
                type: "function"
            }, {
                constant: !0,
                inputs: [],
                name: "eventsHub",
                outputs: [{
                    internalType: "address",
                    name: "",
                    type: "address"
                }],
                payable: !1,
                stateMutability: "view",
                type: "function"
            }, {
                constant: !0,
                inputs: [],
                name: "extensionCode",
                outputs: [{
                    internalType: "address",
                    name: "",
                    type: "address"
                }],
                payable: !1,
                stateMutability: "view",
                type: "function"
            }, {
                constant: !1,
                inputs: [{
                    internalType: "uint256",
                    name: "validatorId",
                    type: "uint256"
                }],
                name: "forceUnstake",
                outputs: [],
                payable: !1,
                stateMutability: "nonpayable",
                type: "function"
            }, {
                constant: !0,
                inputs: [],
                name: "getRegistry",
                outputs: [{
                    internalType: "address",
                    name: "",
                    type: "address"
                }],
                payable: !1,
                stateMutability: "view",
                type: "function"
            }, {
                constant: !0,
                inputs: [{
                    internalType: "uint256",
                    name: "validatorId",
                    type: "uint256"
                }],
                name: "getValidatorContract",
                outputs: [{
                    internalType: "address",
                    name: "",
                    type: "address"
                }],
                payable: !1,
                stateMutability: "view",
                type: "function"
            }, {
                constant: !0,
                inputs: [{
                    internalType: "address",
                    name: "user",
                    type: "address"
                }],
                name: "getValidatorId",
                outputs: [{
                    internalType: "uint256",
                    name: "",
                    type: "uint256"
                }],
                payable: !1,
                stateMutability: "view",
                type: "function"
            }, {
                constant: !0,
                inputs: [],
                name: "governance",
                outputs: [{
                    internalType: "contract IGovernance",
                    name: "",
                    type: "address"
                }],
                payable: !1,
                stateMutability: "view",
                type: "function"
            }, {
                constant: !1,
                inputs: [{
                    internalType: "address",
                    name: "_registry",
                    type: "address"
                }, {
                    internalType: "address",
                    name: "_rootchain",
                    type: "address"
                }, {
                    internalType: "address",
                    name: "_token",
                    type: "address"
                }, {
                    internalType: "address",
                    name: "_NFTContract",
                    type: "address"
                }, {
                    internalType: "address",
                    name: "_stakingLogger",
                    type: "address"
                }, {
                    internalType: "address",
                    name: "_validatorShareFactory",
                    type: "address"
                }, {
                    internalType: "address",
                    name: "_governance",
                    type: "address"
                }, {
                    internalType: "address",
                    name: "_owner",
                    type: "address"
                }, {
                    internalType: "address",
                    name: "_extensionCode",
                    type: "address"
                }],
                name: "initialize",
                outputs: [],
                payable: !1,
                stateMutability: "nonpayable",
                type: "function"
            }, {
                constant: !1,
                inputs: [{
                    internalType: "address[]",
                    name: "_signers",
                    type: "address[]"
                }],
                name: "insertSigners",
                outputs: [],
                payable: !1,
                stateMutability: "nonpayable",
                type: "function"
            }, {
                constant: !0,
                inputs: [],
                name: "isOwner",
                outputs: [{
                    internalType: "bool",
                    name: "",
                    type: "bool"
                }],
                payable: !1,
                stateMutability: "view",
                type: "function"
            }, {
                constant: !0,
                inputs: [{
                    internalType: "uint256",
                    name: "validatorId",
                    type: "uint256"
                }],
                name: "isValidator",
                outputs: [{
                    internalType: "bool",
                    name: "",
                    type: "bool"
                }],
                payable: !1,
                stateMutability: "view",
                type: "function"
            }, {
                constant: !0,
                inputs: [{
                    internalType: "uint256",
                    name: "",
                    type: "uint256"
                }],
                name: "latestSignerUpdateEpoch",
                outputs: [{
                    internalType: "uint256",
                    name: "",
                    type: "uint256"
                }],
                payable: !1,
                stateMutability: "view",
                type: "function"
            }, {
                constant: !1,
                inputs: [],
                name: "lock",
                outputs: [],
                payable: !1,
                stateMutability: "nonpayable",
                type: "function"
            }, {
                constant: !0,
                inputs: [],
                name: "locked",
                outputs: [{
                    internalType: "bool",
                    name: "",
                    type: "bool"
                }],
                payable: !1,
                stateMutability: "view",
                type: "function"
            }, {
                constant: !0,
                inputs: [],
                name: "logger",
                outputs: [{
                    internalType: "contract StakingInfo",
                    name: "",
                    type: "address"
                }],
                payable: !1,
                stateMutability: "view",
                type: "function"
            }, {
                constant: !0,
                inputs: [],
                name: "maxRewardedCheckpoints",
                outputs: [{
                    internalType: "uint256",
                    name: "",
                    type: "uint256"
                }],
                payable: !1,
                stateMutability: "view",
                type: "function"
            }, {
                constant: !1,
                inputs: [{
                    internalType: "uint256",
                    name: "fromValidatorId",
                    type: "uint256"
                }, {
                    internalType: "uint256",
                    name: "toValidatorId",
                    type: "uint256"
                }, {
                    internalType: "uint256",
                    name: "amount",
                    type: "uint256"
                }],
                name: "migrateDelegation",
                outputs: [],
                payable: !1,
                stateMutability: "nonpayable",
                type: "function"
            }, {
                constant: !1,
                inputs: [{
                    internalType: "uint256",
                    name: "validatorIdFrom",
                    type: "uint256"
                }, {
                    internalType: "uint256",
                    name: "validatorIdTo",
                    type: "uint256"
                }],
                name: "migrateValidatorsData",
                outputs: [],
                payable: !1,
                stateMutability: "nonpayable",
                type: "function"
            }, {
                constant: !0,
                inputs: [],
                name: "minDeposit",
                outputs: [{
                    internalType: "uint256",
                    name: "",
                    type: "uint256"
                }],
                payable: !1,
                stateMutability: "view",
                type: "function"
            }, {
                constant: !0,
                inputs: [],
                name: "minHeimdallFee",
                outputs: [{
                    internalType: "uint256",
                    name: "",
                    type: "uint256"
                }],
                payable: !1,
                stateMutability: "view",
                type: "function"
            }, {
                constant: !0,
                inputs: [],
                name: "owner",
                outputs: [{
                    internalType: "address",
                    name: "",
                    type: "address"
                }],
                payable: !1,
                stateMutability: "view",
                type: "function"
            }, {
                constant: !0,
                inputs: [{
                    internalType: "uint256",
                    name: "tokenId",
                    type: "uint256"
                }],
                name: "ownerOf",
                outputs: [{
                    internalType: "address",
                    name: "",
                    type: "address"
                }],
                payable: !1,
                stateMutability: "view",
                type: "function"
            }, {
                constant: !0,
                inputs: [],
                name: "prevBlockInterval",
                outputs: [{
                    internalType: "uint256",
                    name: "",
                    type: "uint256"
                }],
                payable: !1,
                stateMutability: "view",
                type: "function"
            }, {
                constant: !0,
                inputs: [],
                name: "proposerBonus",
                outputs: [{
                    internalType: "uint256",
                    name: "",
                    type: "uint256"
                }],
                payable: !1,
                stateMutability: "view",
                type: "function"
            }, {
                constant: !0,
                inputs: [],
                name: "registry",
                outputs: [{
                    internalType: "address",
                    name: "",
                    type: "address"
                }],
                payable: !1,
                stateMutability: "view",
                type: "function"
            }, {
                constant: !1,
                inputs: [{
                    internalType: "address",
                    name: "_NFTContract",
                    type: "address"
                }, {
                    internalType: "address",
                    name: "_stakingLogger",
                    type: "address"
                }, {
                    internalType: "address",
                    name: "_validatorShareFactory",
                    type: "address"
                }, {
                    internalType: "address",
                    name: "_extensionCode",
                    type: "address"
                }],
                name: "reinitialize",
                outputs: [],
                payable: !1,
                stateMutability: "nonpayable",
                type: "function"
            }, {
                constant: !1,
                inputs: [],
                name: "renounceOwnership",
                outputs: [],
                payable: !1,
                stateMutability: "nonpayable",
                type: "function"
            }, {
                constant: !0,
                inputs: [],
                name: "replacementCoolDown",
                outputs: [{
                    internalType: "uint256",
                    name: "",
                    type: "uint256"
                }],
                payable: !1,
                stateMutability: "view",
                type: "function"
            }, {
                constant: !1,
                inputs: [{
                    internalType: "uint256",
                    name: "validatorId",
                    type: "uint256"
                }, {
                    internalType: "uint256",
                    name: "amount",
                    type: "uint256"
                }, {
                    internalType: "bool",
                    name: "stakeRewards",
                    type: "bool"
                }],
                name: "restake",
                outputs: [],
                payable: !1,
                stateMutability: "nonpayable",
                type: "function"
            }, {
                constant: !0,
                inputs: [],
                name: "rewardDecreasePerCheckpoint",
                outputs: [{
                    internalType: "uint256",
                    name: "",
                    type: "uint256"
                }],
                payable: !1,
                stateMutability: "view",
                type: "function"
            }, {
                constant: !0,
                inputs: [],
                name: "rewardPerStake",
                outputs: [{
                    internalType: "uint256",
                    name: "",
                    type: "uint256"
                }],
                payable: !1,
                stateMutability: "view",
                type: "function"
            }, {
                constant: !0,
                inputs: [],
                name: "rootChain",
                outputs: [{
                    internalType: "address",
                    name: "",
                    type: "address"
                }],
                payable: !1,
                stateMutability: "view",
                type: "function"
            }, {
                constant: !1,
                inputs: [{
                    internalType: "uint256",
                    name: "_currentEpoch",
                    type: "uint256"
                }],
                name: "setCurrentEpoch",
                outputs: [],
                payable: !1,
                stateMutability: "nonpayable",
                type: "function"
            }, {
                constant: !1,
                inputs: [{
                    internalType: "bool",
                    name: "enabled",
                    type: "bool"
                }],
                name: "setDelegationEnabled",
                outputs: [],
                payable: !1,
                stateMutability: "nonpayable",
                type: "function"
            }, {
                constant: !1,
                inputs: [{
                    internalType: "address",
                    name: "_token",
                    type: "address"
                }],
                name: "setStakingToken",
                outputs: [],
                payable: !1,
                stateMutability: "nonpayable",
                type: "function"
            }, {
                constant: !0,
                inputs: [{
                    internalType: "address",
                    name: "",
                    type: "address"
                }],
                name: "signerToValidator",
                outputs: [{
                    internalType: "uint256",
                    name: "",
                    type: "uint256"
                }],
                payable: !1,
                stateMutability: "view",
                type: "function"
            }, {
                constant: !0,
                inputs: [],
                name: "signerUpdateLimit",
                outputs: [{
                    internalType: "uint256",
                    name: "",
                    type: "uint256"
                }],
                payable: !1,
                stateMutability: "view",
                type: "function"
            }, {
                constant: !0,
                inputs: [{
                    internalType: "uint256",
                    name: "",
                    type: "uint256"
                }],
                name: "signers",
                outputs: [{
                    internalType: "address",
                    name: "",
                    type: "address"
                }],
                payable: !1,
                stateMutability: "view",
                type: "function"
            }, {
                constant: !1,
                inputs: [{
                    internalType: "bytes",
                    name: "_slashingInfoList",
                    type: "bytes"
                }],
                name: "slash",
                outputs: [{
                    internalType: "uint256",
                    name: "",
                    type: "uint256"
                }],
                payable: !1,
                stateMutability: "nonpayable",
                type: "function"
            }, {
                constant: !1,
                inputs: [{
                    internalType: "address",
                    name: "user",
                    type: "address"
                }, {
                    internalType: "uint256",
                    name: "amount",
                    type: "uint256"
                }, {
                    internalType: "uint256",
                    name: "heimdallFee",
                    type: "uint256"
                }, {
                    internalType: "bool",
                    name: "acceptDelegation",
                    type: "bool"
                }, {
                    internalType: "bytes",
                    name: "signerPubkey",
                    type: "bytes"
                }],
                name: "stakeFor",
                outputs: [],
                payable: !1,
                stateMutability: "nonpayable",
                type: "function"
            }, {
                constant: !1,
                inputs: [{
                    internalType: "uint256",
                    name: "validatorId",
                    type: "uint256"
                }, {
                    internalType: "uint256",
                    name: "amount",
                    type: "uint256"
                }, {
                    internalType: "bool",
                    name: "_acceptDelegation",
                    type: "bool"
                }, {
                    internalType: "bytes",
                    name: "_signerPubkey",
                    type: "bytes"
                }],
                name: "startAuction",
                outputs: [],
                payable: !1,
                stateMutability: "nonpayable",
                type: "function"
            }, {
                constant: !1,
                inputs: [{
                    internalType: "uint256",
                    name: "forNCheckpoints",
                    type: "uint256"
                }],
                name: "stopAuctions",
                outputs: [],
                payable: !1,
                stateMutability: "nonpayable",
                type: "function"
            }, {
                constant: !0,
                inputs: [],
                name: "token",
                outputs: [{
                    internalType: "contract IERC20",
                    name: "",
                    type: "address"
                }],
                payable: !1,
                stateMutability: "view",
                type: "function"
            }, {
                constant: !1,
                inputs: [{
                    internalType: "address",
                    name: "user",
                    type: "address"
                }, {
                    internalType: "uint256",
                    name: "heimdallFee",
                    type: "uint256"
                }],
                name: "topUpForFee",
                outputs: [],
                payable: !1,
                stateMutability: "nonpayable",
                type: "function"
            }, {
                constant: !0,
                inputs: [],
                name: "totalHeimdallFee",
                outputs: [{
                    internalType: "uint256",
                    name: "",
                    type: "uint256"
                }],
                payable: !1,
                stateMutability: "view",
                type: "function"
            }, {
                constant: !0,
                inputs: [],
                name: "totalRewards",
                outputs: [{
                    internalType: "uint256",
                    name: "",
                    type: "uint256"
                }],
                payable: !1,
                stateMutability: "view",
                type: "function"
            }, {
                constant: !0,
                inputs: [],
                name: "totalRewardsLiquidated",
                outputs: [{
                    internalType: "uint256",
                    name: "",
                    type: "uint256"
                }],
                payable: !1,
                stateMutability: "view",
                type: "function"
            }, {
                constant: !0,
                inputs: [],
                name: "totalStaked",
                outputs: [{
                    internalType: "uint256",
                    name: "",
                    type: "uint256"
                }],
                payable: !1,
                stateMutability: "view",
                type: "function"
            }, {
                constant: !0,
                inputs: [{
                    internalType: "address",
                    name: "user",
                    type: "address"
                }],
                name: "totalStakedFor",
                outputs: [{
                    internalType: "uint256",
                    name: "",
                    type: "uint256"
                }],
                payable: !1,
                stateMutability: "view",
                type: "function"
            }, {
                constant: !1,
                inputs: [{
                    internalType: "uint256",
                    name: "validatorId",
                    type: "uint256"
                }, {
                    internalType: "uint256",
                    name: "amount",
                    type: "uint256"
                }, {
                    internalType: "address",
                    name: "delegator",
                    type: "address"
                }],
                name: "transferFunds",
                outputs: [{
                    internalType: "bool",
                    name: "",
                    type: "bool"
                }],
                payable: !1,
                stateMutability: "nonpayable",
                type: "function"
            }, {
                constant: !1,
                inputs: [{
                    internalType: "address",
                    name: "newOwner",
                    type: "address"
                }],
                name: "transferOwnership",
                outputs: [],
                payable: !1,
                stateMutability: "nonpayable",
                type: "function"
            }, {
                constant: !1,
                inputs: [{
                    internalType: "uint256",
                    name: "validatorId",
                    type: "uint256"
                }],
                name: "unjail",
                outputs: [],
                payable: !1,
                stateMutability: "nonpayable",
                type: "function"
            }, {
                constant: !1,
                inputs: [],
                name: "unlock",
                outputs: [],
                payable: !1,
                stateMutability: "nonpayable",
                type: "function"
            }, {
                constant: !1,
                inputs: [{
                    internalType: "uint256",
                    name: "validatorId",
                    type: "uint256"
                }],
                name: "unstake",
                outputs: [],
                payable: !1,
                stateMutability: "nonpayable",
                type: "function"
            }, {
                constant: !1,
                inputs: [{
                    internalType: "uint256",
                    name: "validatorId",
                    type: "uint256"
                }],
                name: "unstakeClaim",
                outputs: [],
                payable: !1,
                stateMutability: "nonpayable",
                type: "function"
            }, {
                constant: !1,
                inputs: [{
                    internalType: "uint256",
                    name: "_blocks",
                    type: "uint256"
                }],
                name: "updateCheckPointBlockInterval",
                outputs: [],
                payable: !1,
                stateMutability: "nonpayable",
                type: "function"
            }, {
                constant: !1,
                inputs: [{
                    internalType: "uint256",
                    name: "newReward",
                    type: "uint256"
                }],
                name: "updateCheckpointReward",
                outputs: [],
                payable: !1,
                stateMutability: "nonpayable",
                type: "function"
            }, {
                constant: !1,
                inputs: [{
                    internalType: "uint256",
                    name: "_rewardDecreasePerCheckpoint",
                    type: "uint256"
                }, {
                    internalType: "uint256",
                    name: "_maxRewardedCheckpoints",
                    type: "uint256"
                }, {
                    internalType: "uint256",
                    name: "_checkpointRewardDelta",
                    type: "uint256"
                }],
                name: "updateCheckpointRewardParams",
                outputs: [],
                payable: !1,
                stateMutability: "nonpayable",
                type: "function"
            }, {
                constant: !1,
                inputs: [{
                    internalType: "uint256",
                    name: "validatorId",
                    type: "uint256"
                }, {
                    internalType: "uint256",
                    name: "newCommissionRate",
                    type: "uint256"
                }],
                name: "updateCommissionRate",
                outputs: [],
                payable: !1,
                stateMutability: "nonpayable",
                type: "function"
            }, {
                constant: !1,
                inputs: [{
                    internalType: "uint256",
                    name: "newDynasty",
                    type: "uint256"
                }],
                name: "updateDynastyValue",
                outputs: [],
                payable: !1,
                stateMutability: "nonpayable",
                type: "function"
            }, {
                constant: !1,
                inputs: [{
                    internalType: "uint256",
                    name: "_minDeposit",
                    type: "uint256"
                }, {
                    internalType: "uint256",
                    name: "_minHeimdallFee",
                    type: "uint256"
                }],
                name: "updateMinAmounts",
                outputs: [],
                payable: !1,
                stateMutability: "nonpayable",
                type: "function"
            }, {
                constant: !1,
                inputs: [{
                    internalType: "uint256",
                    name: "newProposerBonus",
                    type: "uint256"
                }],
                name: "updateProposerBonus",
                outputs: [],
                payable: !1,
                stateMutability: "nonpayable",
                type: "function"
            }, {
                constant: !1,
                inputs: [{
                    internalType: "uint256",
                    name: "validatorId",
                    type: "uint256"
                }, {
                    internalType: "bytes",
                    name: "signerPubkey",
                    type: "bytes"
                }],
                name: "updateSigner",
                outputs: [],
                payable: !1,
                stateMutability: "nonpayable",
                type: "function"
            }, {
                constant: !1,
                inputs: [{
                    internalType: "uint256",
                    name: "_limit",
                    type: "uint256"
                }],
                name: "updateSignerUpdateLimit",
                outputs: [],
                payable: !1,
                stateMutability: "nonpayable",
                type: "function"
            }, {
                constant: !1,
                inputs: [{
                    internalType: "uint256",
                    name: "validatorId",
                    type: "uint256"
                }, {
                    internalType: "address",
                    name: "newContractAddress",
                    type: "address"
                }],
                name: "updateValidatorContractAddress",
                outputs: [],
                payable: !1,
                stateMutability: "nonpayable",
                type: "function"
            }, {
                constant: !1,
                inputs: [{
                    internalType: "bool",
                    name: "delegation",
                    type: "bool"
                }],
                name: "updateValidatorDelegation",
                outputs: [],
                payable: !1,
                stateMutability: "nonpayable",
                type: "function"
            }, {
                constant: !1,
                inputs: [{
                    internalType: "uint256",
                    name: "validatorId",
                    type: "uint256"
                }, {
                    internalType: "int256",
                    name: "amount",
                    type: "int256"
                }],
                name: "updateValidatorState",
                outputs: [],
                payable: !1,
                stateMutability: "nonpayable",
                type: "function"
            }, {
                constant: !1,
                inputs: [{
                    internalType: "uint256",
                    name: "newThreshold",
                    type: "uint256"
                }],
                name: "updateValidatorThreshold",
                outputs: [],
                payable: !1,
                stateMutability: "nonpayable",
                type: "function"
            }, {
                constant: !0,
                inputs: [{
                    internalType: "address",
                    name: "",
                    type: "address"
                }],
                name: "userFeeExit",
                outputs: [{
                    internalType: "uint256",
                    name: "",
                    type: "uint256"
                }],
                payable: !1,
                stateMutability: "view",
                type: "function"
            }, {
                constant: !0,
                inputs: [{
                    internalType: "uint256",
                    name: "",
                    type: "uint256"
                }],
                name: "validatorAuction",
                outputs: [{
                    internalType: "uint256",
                    name: "amount",
                    type: "uint256"
                }, {
                    internalType: "uint256",
                    name: "startEpoch",
                    type: "uint256"
                }, {
                    internalType: "address",
                    name: "user",
                    type: "address"
                }, {
                    internalType: "bool",
                    name: "acceptDelegation",
                    type: "bool"
                }, {
                    internalType: "bytes",
                    name: "signerPubkey",
                    type: "bytes"
                }],
                payable: !1,
                stateMutability: "view",
                type: "function"
            }, {
                constant: !0,
                inputs: [{
                    internalType: "uint256",
                    name: "validatorId",
                    type: "uint256"
                }],
                name: "validatorReward",
                outputs: [{
                    internalType: "uint256",
                    name: "",
                    type: "uint256"
                }],
                payable: !1,
                stateMutability: "view",
                type: "function"
            }, {
                constant: !0,
                inputs: [],
                name: "validatorShareFactory",
                outputs: [{
                    internalType: "contract ValidatorShareFactory",
                    name: "",
                    type: "address"
                }],
                payable: !1,
                stateMutability: "view",
                type: "function"
            }, {
                constant: !0,
                inputs: [{
                    internalType: "uint256",
                    name: "validatorId",
                    type: "uint256"
                }],
                name: "validatorStake",
                outputs: [{
                    internalType: "uint256",
                    name: "",
                    type: "uint256"
                }],
                payable: !1,
                stateMutability: "view",
                type: "function"
            }, {
                constant: !0,
                inputs: [],
                name: "validatorState",
                outputs: [{
                    internalType: "uint256",
                    name: "amount",
                    type: "uint256"
                }, {
                    internalType: "uint256",
                    name: "stakerCount",
                    type: "uint256"
                }],
                payable: !1,
                stateMutability: "view",
                type: "function"
            }, {
                constant: !0,
                inputs: [{
                    internalType: "uint256",
                    name: "",
                    type: "uint256"
                }],
                name: "validatorStateChanges",
                outputs: [{
                    internalType: "int256",
                    name: "amount",
                    type: "int256"
                }, {
                    internalType: "int256",
                    name: "stakerCount",
                    type: "int256"
                }],
                payable: !1,
                stateMutability: "view",
                type: "function"
            }, {
                constant: !0,
                inputs: [],
                name: "validatorThreshold",
                outputs: [{
                    internalType: "uint256",
                    name: "",
                    type: "uint256"
                }],
                payable: !1,
                stateMutability: "view",
                type: "function"
            }, {
                constant: !0,
                inputs: [{
                    internalType: "uint256",
                    name: "",
                    type: "uint256"
                }],
                name: "validators",
                outputs: [{
                    internalType: "uint256",
                    name: "amount",
                    type: "uint256"
                }, {
                    internalType: "uint256",
                    name: "reward",
                    type: "uint256"
                }, {
                    internalType: "uint256",
                    name: "activationEpoch",
                    type: "uint256"
                }, {
                    internalType: "uint256",
                    name: "deactivationEpoch",
                    type: "uint256"
                }, {
                    internalType: "uint256",
                    name: "jailTime",
                    type: "uint256"
                }, {
                    internalType: "address",
                    name: "signer",
                    type: "address"
                }, {
                    internalType: "address",
                    name: "contractAddress",
                    type: "address"
                }, {
                    internalType: "enum StakeManagerStorage.Status",
                    name: "status",
                    type: "uint8"
                }, {
                    internalType: "uint256",
                    name: "commissionRate",
                    type: "uint256"
                }, {
                    internalType: "uint256",
                    name: "lastCommissionUpdate",
                    type: "uint256"
                }, {
                    internalType: "uint256",
                    name: "delegatorsReward",
                    type: "uint256"
                }, {
                    internalType: "uint256",
                    name: "delegatedAmount",
                    type: "uint256"
                }, {
                    internalType: "uint256",
                    name: "initialRewardPerStake",
                    type: "uint256"
                }],
                payable: !1,
                stateMutability: "view",
                type: "function"
            }, {
                constant: !1,
                inputs: [{
                    internalType: "uint256",
                    name: "validatorId",
                    type: "uint256"
                }],
                name: "withdrawDelegatorsReward",
                outputs: [{
                    internalType: "uint256",
                    name: "",
                    type: "uint256"
                }],
                payable: !1,
                stateMutability: "nonpayable",
                type: "function"
            }, {
                constant: !1,
                inputs: [{
                    internalType: "uint256",
                    name: "validatorId",
                    type: "uint256"
                }],
                name: "withdrawRewards",
                outputs: [],
                payable: !1,
                stateMutability: "nonpayable",
                type: "function"
            }, {
                constant: !0,
                inputs: [],
                name: "withdrawalDelay",
                outputs: [{
                    internalType: "uint256",
                    name: "",
                    type: "uint256"
                }],
                payable: !1,
                stateMutability: "view",
                type: "function"
            }]
        },
        5533: function(t, e, n) {
            "use strict";
            var a = n(2);
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.default = void 0;
            var i = a(n(545)),
                s = n(29),
                r = n(26);
            class OPToken extends i.default {
                constructor(...t) {
                    super(...t), this.gasLimit = "150000", this.coefficient = 1
                }
                async getInfo() {
                    return {
                        balance: String(this.balance),
                        transactions: this.transactions
                    }
                }
                async createTransaction({
                    address: t,
                    amount: e,
                    custom: n,
                    userGasPrice: a,
                    gasLimit: i = this.gasLimit,
                    multiplier: s = this.multiplier,
                    nonce: r
                }) {
                    return {
                        address: t,
                        amount: e,
                        custom: n,
                        userGasPrice: a,
                        gasLimit: i,
                        contract: this.contract,
                        multiplier: s,
                        nonce: r
                    }
                }
                async sendTransaction(t) {
                    return new Promise((e, n) => {
                        this.web3.eth.sendSignedTransaction(t).on("transactionHash", t => {
                            e({
                                txid: t
                            })
                        }).catch(t => {
                            const e = this.parent.coreLibrary.currentProvider.host,
                                a = new s.ExplorerRequestError({
                                    type: r.SEND_TRANSACTION_TYPE,
                                    error: t,
                                    url: e,
                                    instance: this
                                });
                            n(a)
                        })
                    })
                }
                getFeeTicker() {
                    return this.deprecatedParent
                }
            }
            var o = OPToken;
            e.default = o
        },
        5534: function(t, e, n) {
            "use strict";
            var a = n(2);
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.default = void 0;
            var i = a(n(545)),
                s = n(29),
                r = n(26);
            class ARBToken extends i.default {
                constructor(...t) {
                    super(...t), this.gasLimit = "150000", this.coefficient = 1
                }
                async getInfo() {
                    return {
                        balance: String(this.balance),
                        transactions: this.transactions
                    }
                }
                async createTransaction({
                    address: t,
                    amount: e,
                    custom: n,
                    userGasPrice: a,
                    gasLimit: i = this.gasLimit,
                    multiplier: s = this.multiplier,
                    nonce: r
                }) {
                    return {
                        address: t,
                        amount: e,
                        custom: n,
                        userGasPrice: a,
                        gasLimit: i,
                        contract: this.contract,
                        multiplier: s,
                        nonce: r
                    }
                }
                async sendTransaction(t) {
                    return new Promise((e, n) => {
                        this.web3.eth.sendSignedTransaction(t).on("transactionHash", t => {
                            e({
                                txid: t
                            })
                        }).catch(t => {
                            const e = this.parent.coreLibrary.currentProvider.host,
                                a = new s.ExplorerRequestError({
                                    type: r.SEND_TRANSACTION_TYPE,
                                    error: t,
                                    url: e,
                                    instance: this
                                });
                            n(a)
                        })
                    })
                }
                getFeeTicker() {
                    return this.deprecatedParent
                }
            }
            var o = ARBToken;
            e.default = o
        },
        7219: function(t, e, n) {
            "use strict";
            n.r(e);
            var a = n(5899);
            n.d(e, "ethers", (function() {
                return a
            }));
            var i = n(5822);
            n.d(e, "Signer", (function() {
                return i.a
            }));
            var s = n(5988);
            n.d(e, "Wallet", (function() {
                return s.a
            })), n.d(e, "VoidSigner", (function() {
                return i.b
            }));
            var r = n(6139);
            n.d(e, "getDefaultProvider", (function() {
                return r.getDefaultProvider
            })), n.d(e, "providers", (function() {
                return a.providers
            }));
            var o = n(5900);
            n.d(e, "BaseContract", (function() {
                return o.a
            })), n.d(e, "Contract", (function() {
                return o.b
            })), n.d(e, "ContractFactory", (function() {
                return o.c
            }));
            var u = n(319);
            n.d(e, "BigNumber", (function() {
                return u.a
            }));
            var l = n(9180);
            n.d(e, "FixedNumber", (function() {
                return l.a
            })), n.d(e, "constants", (function() {
                return a.constants
            }));
            var c = n(37);
            n.d(e, "errors", (function() {
                return c.a
            })), n.d(e, "logger", (function() {
                return a.logger
            })), n.d(e, "utils", (function() {
                return a.utils
            }));
            var p = n(11825);
            n.d(e, "wordlists", (function() {
                return p.a
            }));
            var d = n(6514);
            n.d(e, "version", (function() {
                return d.a
            }));
            var y = n(7963);
            n.d(e, "Wordlist", (function() {
                return y.a
            }));
            try {
                const t = window;
                null == t._ethers && (t._ethers = a)
            } catch (t) {}
        },
        9181: function(t) {
            t.exports = JSON.parse('[{"name":"BitTorrent","ticker":"BTT","decimal":6,"contract":"1002000","isCustom":false},{"name":"Tether USD TRX","ticker":"TRX-USDT","decimal":6,"contract":"TR7NHqjeKQxGTCi8q8ZY4pL8otSzgjLj6t","isCustom":false,"energy":14631},{"name":"WINK","ticker":"WIN","decimal":6,"contract":"TLa2f6VPqDgRE67v1736s7bJ8Ray5wYjU7","isCustom":false,"energy":13248},{"name":"JUST","ticker":"JST","decimal":18,"contract":"TCFLL5dx5ZJdKnWuesXxi1VPwjLVmWZZy9","isCustom":false,"energy":13516},{"name":"Bridge Token","ticker":"BRG","decimal":6,"contract":"TJvqNiWUN2v2NBG12UhfV7WSvReJkRP3VC","isCustom":false,"energy":13429},{"name":"USDCoin TRX","ticker":"TRX-USDC","decimal":6,"contract":"TEkxiTehnzSmSe2XqrBj4w32RUN966rdz8","isCustom":false}]')
        },
        9182: function(t) {
            t.exports = JSON.parse("[]")
        }
    }
]);