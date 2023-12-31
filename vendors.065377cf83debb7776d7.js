(window.webpackJsonp = window.webpackJsonp || []).push([
    [296], {
        5445: function(t, e, n) {
            "use strict";
            var a = n(2);
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.default = void 0;
            var i = a(n(207)),
                s = a(n(208)),
                r = n(2367),
                u = a(n(461)),
                o = a(n(55)),
                l = n(5482),
                p = n(930);

            function c(t, e) {
                if (e.has(t)) throw new TypeError("Cannot initialize the same private elements twice on an object")
            }
            const y = r.constants.DerivationPaths.Theta,
                d = "THETA",
                m = "TFUEL",
                b = /^(0x)?[0-9a-f]{40}$/i;
            var h = new WeakMap,
                T = new WeakSet;
            class THETACoin extends((0, p.HasProviders)((0, p.HasTokensMixin)(u.default))) {
                constructor({
                    alias: t,
                    notify: e,
                    feeData: n,
                    explorers: a,
                    txWebUrl: i,
                    socket: s,
                    network: r = d
                }) {
                    var u, o;
                    super({
                            alias: t,
                            notify: e,
                            name: "THETA Coin",
                            ticker: d,
                            decimal: 18,
                            derivation: y,
                            txWebUrl: i,
                            explorers: a,
                            socket: s,
                            feeData: n,
                            id: d,
                            network: r
                        }), c(u = this, o = T), o.add(u),
                        function(t, e, n) {
                            c(t, e), e.set(t, n)
                        }(this, h, {
                            writable: !0,
                            value: void 0
                        }), this.defaultFee = n.defaultFee, this.resendTimeout = n.resendTimeout, this.fields.paymentId = !1, this.tokens = {}, this.activated = !1,
                        function(t, e, n) {
                            if (!e.has(t)) throw new TypeError("attempted to get private field on non-instance");
                            return n
                        }(this, T, f).call(this), this.eventEmmiter.on(this.ticker + "::confirmed-socket-tx", (t, e, n) => {
                            this.bus.$emit("socket::tx::confirmed", {
                                id: t,
                                ticker: n
                            })
                        })
                }
                get instance() {
                    return {
                        ...super.instance,
                        address: this.address,
                        BN: this.BN,
                        gasLimit: this.gasLimit,
                        getTokens: () => this.tokens,
                        getProvider: t => this.getProvider(t)
                    }
                }
                loadTokensList(t) {
                    var e;
                    t.push((0, i.default)(this, h)), t.store.walletsCollection[(0, i.default)(this, h).alias].set((0, i.default)(this, h).id.toUpperCase(), (0, i.default)(this, h)), null === (e = this.bus) || void 0 === e || e.$emit("update::coin-list")
                }
                createToken(t) {
                    return new l.THETAToken({
                        parent: this,
                        ...t
                    })
                }
                getTokenList() {
                    return [{
                        id: (0, i.default)(this, h).id,
                        name: (0, i.default)(this, h).name,
                        ticker: (0, i.default)(this, h).ticker,
                        decimal: (0, i.default)(this, h).decimal,
                        visibility: (0, i.default)(this, h).visibility
                    }]
                }
                async loadWallet(t, e) {
                    try {
                        const {
                            address: t,
                            privateKey: n
                        } = r.Wallet.fromMnemonic(e);
                        this.address = t, this.privateKey = n
                    } catch (t) {
                        o.default.error({
                            instance: this,
                            error: t
                        })
                    }
                    return this
                }
                validateAddress(t) {
                    return b.test(t)
                }
                async createTransaction({
                    address: t,
                    amount: e,
                    nonce: n,
                    ticker: a = this.ticker,
                    userFee: i
                }) {
                    const {
                        provider: s
                    } = this.getProvider("node");
                    if (!s) throw new Error(this.ticker + " set provider first");
                    return new r.Wallet(this.privateKey, s).signTransaction(new r.transactions.SendTransaction({
                        from: this.address,
                        outputs: [{
                            address: t,
                            thetaWei: a === d ? e : "0",
                            tfuelWei: a === m ? e : "0"
                        }],
                        sequence: Number(n || await this.updateNonce()),
                        gasPrice: i || await this.getFee()
                    }))
                }
                async createTokenTransaction(t) {
                    if ([d, m].includes(t.ticker)) return this.createTransaction(t);
                    throw new Error(this.ticker + " adapter supports only TFUEL and THETA coins")
                }
                async getTransactions(t) {
                    if (!this.address) throw new Error(this.ticker + " address not found");
                    try {
                        return this.getProvider("history").getTransactions({
                            address: this.address,
                            ...t
                        })
                    } catch (t) {
                        return o.default.error({
                            instance: this,
                            error: t
                        }), []
                    }
                }
                async getAvailableBalanceForWallet(t, e) {
                    if (!t.balance) return "0";
                    let n = new this.BN(t.balance);
                    return t.ticker === this.getFeeTicker() && (n = n.sub(e ? new this.BN(e) : await t.getFee())), n.gt(new this.BN(0)) ? this.toCurrencyUnit(n) : "0"
                }
                async availableBalance(t) {
                    return this.getAvailableBalanceForWallet(this, t)
                }
                async getInfo() {
                    return this.updateInfo()
                }
                setPrivateKey(t, e) {
                    const {
                        address: n
                    } = new r.Wallet(t);
                    this.address = n, this.privateKey = t
                }
                async checkTransaction(t) {
                    await super.checkTransaction({
                        feeTicker: this.getFeeTicker(),
                        ...t
                    })
                }
                async getBalance() {
                    return (await this.getInfo()).balance
                }
                async updateNonce() {
                    return (await this.updateInfo()).nonce
                }
                async updateInfo() {
                    if (!this.address) throw new Error(this.ticker + " address not found");
                    const {
                        sequence: t,
                        coins: e,
                        emptyAddress: n
                    } = await this.getProvider("node").getAccount(this.address);
                    return this.nonce = new this.BN(t).add(new this.BN(1)), n ? (this.balance = "0", Object.values(this.tokens).forEach(t => {
                        t.balance = "0"
                    })) : Object.entries(e).forEach(([t, e]) => {
                        t === this.ticker ? this.balance = e : this.tokens[t].balance = e
                    }), {
                        nonce: this.nonce.toString(),
                        balance: this.balance
                    }
                }
                getFeeTicker() {
                    return (0, i.default)(this, h).ticker
                }
                async getFee() {
                    const t = this.defaultFee[this.getFeeTicker().toLowerCase()];
                    if (!t) throw new Error(this.ticker + " provide defaultFee in config");
                    return new this.BN(t)
                }
                async hasEnoughFeeBalance(t) {
                    const e = !t || t.isZero() ? await this.getFee() : t;
                    return new this.BN((0, i.default)(this, h).balance).gte(e)
                }
                isAvailableForFee(t) {
                    return this.hasEnoughFeeBalance(t)
                }
            }

            function f() {
                (0, s.default)(this, h, this.createToken({
                    name: "THETA Fuel Coin",
                    ticker: m,
                    decimal: 18,
                    visibility: !0,
                    confirmed: !0,
                    source: "list"
                })), this.tokens[(0, i.default)(this, h).id] = (0, i.default)(this, h)
            }
            var v = THETACoin;
            e.default = v
        },
        5482: function(t, e, n) {
            "use strict";
            var a = n(2);
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), Object.defineProperty(e, "ARBToken", {
                enumerable: !0,
                get: function() {
                    return T.default
                }
            }), Object.defineProperty(e, "BNBToken", {
                enumerable: !0,
                get: function() {
                    return o.default
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
                    return y.default
                }
            }), Object.defineProperty(e, "MATICToken", {
                enumerable: !0,
                get: function() {
                    return c.default
                }
            }), Object.defineProperty(e, "OPToken", {
                enumerable: !0,
                get: function() {
                    return h.default
                }
            }), Object.defineProperty(e, "StakableMaticETHToken", {
                enumerable: !0,
                get: function() {
                    return b.default
                }
            }), Object.defineProperty(e, "THETAToken", {
                enumerable: !0,
                get: function() {
                    return d.default
                }
            }), Object.defineProperty(e, "TRXToken", {
                enumerable: !0,
                get: function() {
                    return u.default
                }
            }), Object.defineProperty(e, "VETToken", {
                enumerable: !0,
                get: function() {
                    return l.default
                }
            }), Object.defineProperty(e, "ZILToken", {
                enumerable: !0,
                get: function() {
                    return p.default
                }
            });
            var i = a(n(5521)),
                s = a(n(5522)),
                r = a(n(5523)),
                u = a(n(5524)),
                o = a(n(5525)),
                l = a(n(5526)),
                p = a(n(5527)),
                c = a(n(5528)),
                y = a(n(5511)),
                d = a(n(5529)),
                m = a(n(5530)),
                b = a(n(5531)),
                h = a(n(5533)),
                T = a(n(5534))
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
                u = n(26);
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
            var o = FLRToken;
            e.default = o
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
            var u = BSCToken;
            e.default = u
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
                u = n(26);
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
                                type: u.SEND_TRANSACTION_TYPE,
                                error: t,
                                url: e,
                                instance: this
                            }))
                        })
                    })
                }
            }
            var o = MATICToken;
            e.default = o
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
                u = a(n(545));

            function o(t, e, n) {
                ! function(t, e) {
                    if (e.has(t)) throw new TypeError("Cannot initialize the same private elements twice on an object")
                }(t, e), e.set(t, n)
            }
            var l = new WeakMap;
            class THETAToken extends u.default {
                constructor(t) {
                    super(t), o(this, l, {
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
                u = n(29),
                o = n(26);
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
                                a = new u.ExplorerRequestError({
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
                u = a(n(5532)),
                o = a(n(2340)),
                l = n(5482);
            class StakableMaticETHToken extends((0, i.Web3Mixin)((0, i.StakingMixin)(l.ETHToken))) {
                constructor({
                    config: t,
                    ...e
                }) {
                    var n, a, i, s, r, u, o;
                    super({
                        config: t,
                        ...e
                    }), this.stakingContract = null !== (n = t.stakingContract) && void 0 !== n ? n : "0x5E3EF299FDDF15EAA0432E6E66473ACE8C13D908", this.stakingGasLimit = null !== (a = t.stakingGasLimit) && void 0 !== a ? a : 3e5, this.unstakingGasLimit = null !== (i = t.unstakingGasLimit) && void 0 !== i ? i : 3e5, this.restakeRewardsGasLimit = null !== (s = t.restakeRewardsGasLimit) && void 0 !== s ? s : 3e5, this.claimRewardsGasLimit = null !== (r = t.claimRewardsGasLimit) && void 0 !== r ? r : 17e4, this.withdrawGasLimit = null !== (u = t.withdrawGasLimit) && void 0 !== u ? u : 3e5, this.approvalGasLimit = null !== (o = t.approvalGasLimit) && void 0 !== o ? o : 5e4
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
                            const e = await this.makeRawCall(u.default, this.stakingContract, "currentEpoch"),
                                n = await this.makeRawCall(r.default, t, "unbondNonces", [this.address]),
                                {
                                    shares: a,
                                    withdrawEpoch: i
                                } = await this.makeRawCall(r.default, t, "unbonds_new", [this.address, n]),
                                o = Number(e) > Number(i) + 82,
                                l = new s.default(o ? "0" : a, this),
                                p = new s.default(o ? a : "0", this),
                                c = new s.default(l.toBN().add(p.toBN()).toString(), this);
                            return [t, {
                                staked: new s.default(await this.makeRawCall(r.default, t, "balanceOf", [this.address]), this),
                                rewards: new s.default(await this.makeRawCall(r.default, t, "getLiquidRewards", [this.address]), this),
                                pendingWithdrawals: l,
                                availableWithdrawals: p,
                                unstaking: c
                            }]
                        }))),
                        e = this.calculateStaked(t),
                        n = this.calculateUnstaking(t),
                        a = this.calculateRewards(t),
                        i = this.calculatePendingWithdrawals(t),
                        l = this.calculateAvailableWithdrawals(t),
                        p = new s.default(await this.makeRawCall(o.default, this.contract, "allowance", [this.address, this.stakingContract]), this);
                    return {
                        balance: new s.default(this.balance, this),
                        staked: e,
                        unstaking: n,
                        availableVotes: p,
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
                    const u = new this.coreLibrary.eth.Contract(r.default, e).methods.buyVoucher(t, t).encodeABI();
                    return this.createRawTransactions({
                        address: e,
                        paymentData: u,
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
                    const u = new this.coreLibrary.eth.Contract(r.default, e).methods.sellVoucher_new(t, t).encodeABI();
                    return this.createRawTransactions({
                        address: e,
                        paymentData: u,
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
                        u = await this.makeRawCall(r.default, t, "unbondNonces", [this.address]),
                        o = s.methods.unstakeClaimTokens_new(u).encodeABI();
                    return this.createRawTransactions({
                        address: t,
                        paymentData: o,
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
            var u = OPToken;
            e.default = u
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
            var u = ARBToken;
            e.default = u
        }
    }
]);