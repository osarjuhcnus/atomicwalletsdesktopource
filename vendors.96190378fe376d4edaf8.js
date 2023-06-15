/*! For license information please see vendors.96190378fe376d4edaf8.js.LICENSE.txt */
(window.webpackJsonp = window.webpackJsonp || []).push([
    [289], {
        5400: function(t, e, n) {
            "use strict";
            var a = n(2);
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.default = void 0;
            var i = n(9088),
                s = n(5482),
                r = a(n(461)),
                o = n(29),
                u = n(26),
                l = a(n(464)),
                c = n(930);
            class BNBCoin extends((0, c.StakingMixin)((0, c.HasProviders)((0, c.HasTokensMixin)(r.default)))) {
                constructor({
                    alias: t,
                    notify: e,
                    feeData: n,
                    explorers: a,
                    txWebUrl: s,
                    socket: r
                }) {
                    super({
                        alias: t,
                        notify: e,
                        name: "BNB Coin",
                        ticker: "BNB",
                        decimal: 8,
                        derivation: void 0,
                        unspendableBalance: "0",
                        explorers: a,
                        txWebUrl: s,
                        socket: r,
                        feeData: n
                    }), this.fee = n.fee, this.freezeFee = n.freezeFee || "500000", this.reserveForStake = n.reserveForStake || "500000", this.transactions = [], this.coreLibraryLoaded = !1, this.coreLibrary = new i.BncClient("https://dex-atlantic.binance.org/"), this.coreLibrary.chooseNetwork("mainnet"), this.tokens = {}, this.fields.paymentId = !0
                }
                async loadWallet(t, e) {
                    return this.privateKey = i.crypto.getPrivateKeyFromMnemonic(e), this.address = i.crypto.getAddressFromPrivateKey(this.privateKey, this.coreLibrary.addressPrefix), this.loadCoreLibrary(), this
                }
                loadCoreLibrary() {
                    this.coreLibrary.initChain().then(() => {
                        console.warn("BNB core init went OK"), this.coreLibrary.setPrivateKey(this.privateKey), this.coreLibraryLoaded = !0
                    }).catch(t => {
                        console.error("BNB coreLibrary load FAILED.\n          It would be attemp to re-initialize during each\n          sendTransaction call. Error thrown:", t)
                    })
                }
                async getTransaction(t) {
                    const e = this.transactions.filter(e => e.txid === t);
                    return e.length > 0 ? e[0] : {}
                }
                getPublicKey() {
                    return i.crypto.getPublicKeyFromPrivateKey(this.privateKey)
                }
                getAddress() {
                    if (!this.address) {
                        if (!this.privateKey) throw new Error("BNB: Could not load address from core library because the privateKey is not set");
                        this.address = i.crypto.getAddressFromPrivateKey(this.privateKey)
                    }
                    return this.address
                }
                async validateAddress(t) {
                    return i.crypto.checkAddress(t, "bnb")
                }
                async createTransaction({
                    address: t,
                    amount: e,
                    memo: n,
                    asset: a = "BNB"
                }) {
                    return {
                        address: t,
                        amount: e,
                        memo: n,
                        asset: a
                    }
                }
                createDelegationTransaction({
                    account: t,
                    toValidator: e,
                    amount: n,
                    symbol: a = "BNB",
                    sideChainId: i = "bsc"
                }) {
                    return {
                        delegateAddress: t,
                        validatorAddress: e,
                        amount: n,
                        symbol: a,
                        sideChainId: i
                    }
                }
                createUnDelegationTransaction({
                    account: t,
                    toValidator: e,
                    amount: n,
                    symbol: a = "BNB",
                    sideChainId: i = "bsc"
                }) {
                    return {
                        delegateAddress: t,
                        validatorAddress: e,
                        amount: n,
                        symbol: a,
                        sideChainId: i
                    }
                }
                createReDelegationTransaction({
                    account: t,
                    fromValidator: e,
                    toValidator: n,
                    amount: a,
                    symbol: i = "BNB",
                    sideChainId: s = "bsc"
                }) {
                    return {
                        delegateAddress: t,
                        validatorSrcAddress: e,
                        validatorDstAddress: n,
                        amount: a,
                        symbol: i,
                        sideChainId: s
                    }
                }
                async sendDelegationTransaction(t) {
                    this.coreLibraryLoaded || await this.loadCoreLibrary();
                    const {
                        status: e,
                        result: n
                    } = await this.coreLibrary.stake.bscDelegate(t);
                    if (200 !== e) throw new Error(`${this.ticker}: sendDelegationTransaction error: ${JSON.stringify(n)}`);
                    const a = n[0];
                    if (!a.ok) throw new Error(`BNB: asset (${this.ticker}) : sendDelegationTransaction error:\n        coreLib.transfer is not ok, got: ${JSON.stringify(n)}`);
                    return {
                        txid: a.hash
                    }
                }
                async sendUnDelegationTransaction(t) {
                    this.coreLibraryLoaded || await this.loadCoreLibrary();
                    const {
                        status: e,
                        result: n
                    } = await this.coreLibrary.stake.bscUndelegate(t);
                    if (200 !== e) throw new Error(`${this.ticker}: sendUnDelegationTransaction error: ${JSON.stringify(n)}`);
                    const a = n[0];
                    if (!a.ok) throw new Error(`BNB: asset (${this.ticker}) : sendUnDelegationTransaction error:\n        coreLib.transfer is not ok, got: ${JSON.stringify(n)}`);
                    return {
                        txid: a.hash
                    }
                }
                async sendReDelegationTransaction(t) {
                    return this.coreLibraryLoaded || await this.loadCoreLibrary(), this.coreLibrary.stake.bscReDelegate(t)
                }
                async createTokenTransaction(t) {
                    return t
                }
                async signOrder(t) {
                    return i.crypto.generateSignature(this.toHex(JSON.stringify(t)), this.privateKey).toString("hex")
                }
                toHex(t) {
                    let e = "";
                    for (let n = 0; n < t.length; n += 1) {
                        e += t.charCodeAt(n).toString(16)
                    }
                    return e
                }
                async getFee() {
                    return new this.BN(this.fee)
                }
                async getFreezeFee() {
                    return new this.BN(this.freezeFee)
                }
                async getInfo() {
                    return await this.getBalance(), await this.getStakingInfo(), {
                        balance: this.balance,
                        balances: this.balances,
                        transactions: []
                    }
                }
                async getBalance() {
                    const t = await this.getProvider("balance").getBalance(this.address);
                    if (!t) return this.balance;
                    for (const e of Object.values(this.tokens)) {
                        const n = t.find(t => t.asset === e.ticker),
                            a = n ? new this.BN(e.toMinimalUnit(n.free)).add(new this.BN(e.toMinimalUnit(n.frozen))).add(new this.BN(e.toMinimalUnit(n.locked))) : "0";
                        e.balance = a.toString(), e.balances.frozen = n ? String(n.frozen) : "0", e.balances.locked = n ? String(n.locked) : "0", e.balances.available = n ? String(n.free) : e.divisibleBalance
                    }
                    const e = t.find(t => t.asset === this.ticker);
                    return e ? (this.balance = this.toMinimalUnit(e.free), this.balance) : (this.balance = "0", this.balance)
                }
                async sendTransaction({
                    address: t,
                    amount: e,
                    memo: n,
                    asset: a = "BNB"
                }) {
                    const i = this.address,
                        s = this.toCurrencyUnit(e);
                    this.coreLibraryLoaded || (await this.coreLibrary.initChain(), this.coreLibrary.setPrivateKey(this.privateKey), this.coreLibraryLoaded = !0);
                    const {
                        result: r,
                        status: o
                    } = await this.coreLibrary.transfer(i, t, s, a, n);
                    if (200 !== o) throw new Error(`${this.ticker}: sendTransaction error: ${JSON.stringify(r)}`);
                    const u = r[0];
                    if (!u.ok) throw new Error(`BNB: asset (${a}) : sendTransaction error:\n        coreLib.transfer is not ok, got: ${JSON.stringify(r)}`);
                    return {
                        txid: u.hash
                    }
                }
                async sendMultiTransaction(t) {
                    this.coreLibraryLoaded || await this.loadCoreLibrary();
                    const {
                        result: e,
                        status: n
                    } = await this.coreLibrary.BncClient.multiSend(this.address, t);
                    if (200 !== n) throw new Error(`${this.ticker}: sendTransaction error: ${JSON.stringify(e)}`);
                    const a = e[0];
                    if (!a.ok) throw new Error("BNB: sendTransaction error:\n        coreLib.transfer is not ok, got: " + JSON.stringify(e));
                    return {
                        txid: a.hash
                    }
                }
                async placeOrder(t, e, n = 1, a = this.address, i = "AWC-986_BNB", s = null, r = 3) {
                    await this.coreLibrary.initChain();
                    return await this.coreLibrary.placeOrder(a, i, n, e, t, s, r).catch(t => {
                        throw new o.WalletError({
                            type: u.SEND_TRANSACTION_TYPE,
                            error: new Error("place Order failed: " + t.message),
                            instance: this
                        })
                    })
                }
                async getPlaceOrderTx(t) {
                    await this.coreLibrary.initChain();
                    return await this.coreLibrary.getTx(t).catch(t => {
                        throw new o.WalletError({
                            type: "GetTx",
                            error: new Error("get tx failed: " + t.message),
                            instance: this
                        })
                    })
                }
                setPrivateKey(t) {
                    super.setPrivateKey(t), this.coreLibrary.setPrivateKey(t)
                }
                createToken(t) {
                    return new s.BNBToken({
                        parent: this,
                        ...t
                    })
                }
                async getTokenList(t = []) {
                    return this.getProvider("node").getAtomicTokenList()
                }
                async getUserTokenList() {
                    const t = await this.coreLibrary.getBalance(this.address);
                    if (!t) return [];
                    const e = t.map(t => t.symbol).filter(t => t.toLowerCase() !== this.ticker.toLowerCase());
                    return this.getProvider("node").getTokenList(e)
                }
                getExcludedTokenList() {
                    return ["BNB"]
                }
                async getTransactions({
                    address: t = this.address
                } = {}) {
                    const {
                        transactions: e = []
                    } = await this.getProvider("history").getTransactions({
                        address: t
                    });
                    return e
                }
                getTokenObject(t, e) {
                    return {
                        contract: t.owner,
                        name: t.name,
                        ticker: t.symbol,
                        decimal: 8,
                        parentTicker: "BNB",
                        uniqueField: t.symbol,
                        confirmed: t.confirmed
                    }
                }
                async freezeTokenBalance(t, e) {
                    await this.coreLibrary.initChain();
                    const n = await this.coreLibrary.tokens.freeze(this.address, t, String(e));
                    if (n.result && n.result.length > 0) return n.result[0].hash;
                    if (200 !== n.status) throw new o.WalletError({
                        type: "Freeze amount",
                        error: new Error(`Freeze amount for ${t} is failed: ${n.error}`),
                        instance: this
                    });
                    return n
                }
                async unfreezeTokenBalance(t, e) {
                    await this.coreLibrary.initChain();
                    const n = await this.coreLibrary.tokens.unfreeze(this.address, t, String(e));
                    if (n.result && n.result.length > 0) return n.result[0].hash;
                    if (200 !== n.status) throw new o.WalletError({
                        type: "Freeze amount",
                        error: new Error(`Unfreeze amount for ${t} is failed: ${n.error}`),
                        instance: this
                    });
                    return n
                }
                async connectSocket() {
                    this.getProvider("socket").connectSocket(this.address)
                }
                async updateBalances(t) {
                    const e = Object.values(this.tokens);
                    t.forEach(t => {
                        const n = t.a;
                        if ("BNB" === n) return void(this.balance = this.toMinimalUnit(t.f));
                        const a = e.find(t => t.ticker === n);
                        if (!a) return void console.warn(n + " is not found in the BNB token list. Balance update skipped.");
                        const i = t.f,
                            s = t.l,
                            r = t.r,
                            o = new this.BN(a.toMinimalUnit(i)).add(new this.BN(a.toMinimalUnit(r))).add(new this.BN(a.toMinimalUnit(s)));
                        a.balance = o.toString(), a.balances.frozen = r, a.balances.locked = s, a.balances.available = i
                    })
                }
                async availableBalance(t) {
                    const e = this.balance;
                    if (!e) return null;
                    const n = t && new this.BN(t) || await this.getFee(),
                        a = new this.BN(e).sub(n).sub(new this.BN(this.unspendableBalance)).sub(new this.BN(this.reserveForStake));
                    return new this.BN(a).lt(new this.BN(0)) ? "0" : this.toCurrencyUnit(a)
                }
                calculateTotal({
                    balance: t,
                    staked: e,
                    unstaking: n
                }) {
                    return new l.default(t.toBN().add(e.toBN()).add(n.toBN()).toString(), this)
                }
                async calculateAvailableForStake() {
                    return new l.default(this.toMinimalUnit(await this.availableBalance()), this)
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
                        tokens: () => this.tokens,
                        toCurrencyUnit: t => this.toCurrencyUnit(t),
                        toMinimalUnit: t => this.toMinimalUnit(t),
                        updateBalances: (...t) => this.updateBalances(...t),
                        feeCoefficient: this.coefficient,
                        feeDefault: this.feeData && this.feeData.fee
                    }
                }
            }
            var p = BNBCoin;
            e.default = p
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
                    return y.default
                }
            }), Object.defineProperty(e, "MATICToken", {
                enumerable: !0,
                get: function() {
                    return p.default
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
                y = a(n(5511)),
                d = a(n(5529)),
                m = a(n(5530)),
                b = a(n(5531)),
                h = a(n(5533)),
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
        5613: function(t, e, n) {
            "use strict";
            n.d(e, "a", (function() {
                return i
            }));
            var a = function(t, e) {
                return (a = Object.setPrototypeOf || {
                        __proto__: []
                    }
                    instanceof Array && function(t, e) {
                        t.__proto__ = e
                    } || function(t, e) {
                        for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n])
                    })(t, e)
            };

            function i(t, e) {
                function n() {
                    this.constructor = t
                }
                a(t, e), t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n)
            }
        },
        6507: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, "default", (function() {
                return TransportU2F
            }));
            var a = n(6508),
                i = n(427),
                s = n(86),
                r = n(71);
            const o = t => t.replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "");

            function u(t, e, n, i) {
                const r = function(t, e) {
                        const n = Buffer.alloc(t.length);
                        for (let a = 0; a < t.length; a++) n[a] = t[a] ^ e[a % e.length];
                        return n
                    }(t, n),
                    u = Buffer.from("0000000000000000000000000000000000000000000000000000000000000000", "hex"),
                    l = {
                        version: "U2F_V2",
                        keyHandle: o(r.toString("base64")),
                        challenge: o(u.toString("base64")),
                        appId: location.origin
                    };
                return Object(s.log)("apdu", "=> " + t.toString("hex")), Object(a.sign)(l, e / 1e3).then(t => {
                    const {
                        signatureData: e
                    } = t;
                    if ("string" == typeof e) {
                        const t = Buffer.from((n = e).replace(/-/g, "+").replace(/_/g, "/") + "==".substring(0, 3 * n.length % 4), "base64");
                        let a;
                        return a = i ? t.slice(5) : t, Object(s.log)("apdu", "<= " + a.toString("hex")), a
                    }
                    throw t;
                    var n
                })
            }
            let l = [];
            class TransportU2F extends i.a {
                static async open(t, e = 5e3) {
                    return new TransportU2F
                }
                constructor() {
                    super(), this.scrambleKey = void 0, this.unwrap = !0, l.push(this)
                }
                async exchange(t) {
                    try {
                        return await u(t, this.exchangeTimeout, this.scrambleKey, this.unwrap)
                    } catch (t) {
                        throw "object" == typeof t.metaData ? (5 === t.metaData.code && (l.forEach(t => t.emit("disconnect")), l = []), function(t, e, n) {
                            const a = new r.TransportError(e, n);
                            return a.originalError = t, a
                        }(t, "Failed to sign with Ledger device: U2F " + t.metaData.type, "U2F_" + t.metaData.code)) : t
                    }
                }
                setScrambleKey(t) {
                    this.scrambleKey = Buffer.from(t, "ascii")
                }
                setUnwrap(t) {
                    this.unwrap = t
                }
                close() {
                    return Promise.resolve()
                }
            }
            TransportU2F.isSupported = a.isSupported, TransportU2F.list = () => Object(a.isSupported)().then(t => t ? [null] : []), TransportU2F.listen = t => {
                let e = !1;
                return Object(a.isSupported)().then(n => {
                    e || (n ? (t.next({
                        type: "add",
                        descriptor: null
                    }), t.complete()) : t.error(new r.TransportError("U2F browser support is needed for Ledger. Please use Chrome, Opera or Firefox with a U2F extension. Also make sure you're on an HTTPS connection", "U2FNotSupported")))
                }), {
                    unsubscribe: () => {
                        e = !0
                    }
                }
            }
        }
    }
]);