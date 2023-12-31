(window.webpackJsonp = window.webpackJsonp || []).push([
    [298], {
        5404: function(t, e, a) {
            "use strict";
            var n = a(2);
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.default = void 0;
            var i = function(t, e) {
                    if (!e && t && t.__esModule) return t;
                    if (null === t || "object" != typeof t && "function" != typeof t) return {
                        default: t
                    };
                    var a = b(e);
                    if (a && a.has(t)) return a.get(t);
                    var n = {},
                        i = Object.defineProperty && Object.getOwnPropertyDescriptor;
                    for (var s in t)
                        if ("default" !== s && Object.prototype.hasOwnProperty.call(t, s)) {
                            var r = i ? Object.getOwnPropertyDescriptor(t, s) : null;
                            r && (r.get || r.set) ? Object.defineProperty(n, s, r) : n[s] = t[s]
                        } n.default = t, a && a.set(t, n);
                    return n
                }(a(1390)),
                s = a(472),
                r = a(1409),
                u = a(471),
                o = n(a(172)),
                l = n(a(461)),
                p = n(a(67)),
                c = a(29),
                y = a(26),
                d = a(5482),
                m = a(930);

            function b(t) {
                if ("function" != typeof WeakMap) return null;
                var e = new WeakMap,
                    a = new WeakMap;
                return (b = function(t) {
                    return t ? a : e
                })(t)
            }
            const h = u.bytes.pack(1, 1),
                f = "Governance ZIL",
                g = "gZIL",
                T = 15,
                v = "zil14pzuzq6v6pmmmrfjhczywguu0e97djepxt8g3e";
            class ZILCoin extends((0, m.HasBlockScanner)((0, m.HasProviders)((0, m.HasTokensMixin)(l.default)))) {
                constructor({
                    alias: t,
                    notify: e,
                    feeData: a,
                    explorers: n,
                    txWebUrl: i,
                    socket: s,
                    stakingContract: u,
                    stakingProxyContract: o
                }) {
                    const l = {
                        alias: t,
                        notify: e,
                        name: "Zilliqa",
                        ticker: "ZIL",
                        decimal: 12,
                        derivation: "m/44'/313'/0'/0/0",
                        unspendableBalance: "0",
                        explorers: n,
                        txWebUrl: i,
                        socket: s,
                        stakingContract: u,
                        feeData: a,
                        stakingProxyContract: o
                    };
                    p.default.register("stake_validators_zil"), super(l), this.derivation = "m/44'/313'/0'/0/0", this.fee = a.fee, this.feeData = a, this.transactions = [], this.tokens = {}, this.nonce = 0, this.stakingProxyContract = a.stakingProxyContract, this.stakingContract = a.stakingContract, this.stakingFeeGas = String(a.stakingFeeGas) || 25e3, this.unstakingFeeGas = String(a.unstakingFeeGas) || 25e3, this.claimFeeGas = String(a.claimFeeGas) || 25e3, this.tokenFeeGas = String(a.tokenFeeGas) || 1e3, this.sendFeeGas = String(a.sendFeeGas) || 100, this.zilliqa = new r.Zilliqa, this.balances = {}, this.gasLimit = String(a.gasLimit), this.gasSettings = a.gasSettings, this.reserveForStake = a.reserveForStake || "8400000000000"
                }
                async loadWallet(t, e) {
                    const a = i.bip32.fromSeed(t).derivePath(this.derivation);
                    if (!a) throw new c.WalletError({
                        type: y.LOAD_WALLET_ERROR,
                        error: new Error("can't get a privateKey!"),
                        instance: this
                    });
                    const n = o.default.decode(a.toWIF()).toString("hex");
                    return this.privateKey = n.slice(2, 66), this.zilliqa.wallet.addByPrivateKey(this.privateKey), this.address = (0, s.toBech32Address)((0, s.getAddressFromPrivateKey)(this.privateKey)), this.oldFormatAddressForBalance = (0, s.getAddressFromPrivateKey)(this.privateKey).replace(/^0x/, ""), this
                }
                getNonce() {
                    const t = Number(this.nonce) + 1;
                    return this.nonce = t, t
                }
                async getFee({
                    sendType: t = "send",
                    userGasPrice: e = this.getGasPrice(t.toLowerCase()),
                    gasLimit: a = this.getGasLimit(t.toLowerCase()),
                    isToken: n
                } = {}) {
                    return n && (a = this.tokenFeeGas), new this.BN(e).mul(new this.BN(a || 100))
                }
                getAddress() {
                    return this.privateKey ? (0, s.toBech32Address)((0, s.getAddressFromPrivateKey)(this.privateKey)) : new c.WalletError({
                        type: y.WALLET_ERROR,
                        error: new Error("privateKey is empty!"),
                        instance: this
                    })
                }
                async validateAddress(t) {
                    try {
                        return (0, s.isValidChecksumAddress)((0, s.fromBech32Address)(t))
                    } catch (t) {
                        return !1
                    }
                }
                toValidChecksumAddress(t) {
                    let e = "";
                    try {
                        e = (0, s.toChecksumAddress)(t)
                    } catch (a) {
                        e = (0, s.toChecksumAddress)((0, s.fromBech32Address)(t))
                    }
                    return e.toLowerCase()
                }
                async createTransaction({
                    address: t,
                    amount: e,
                    sendType: a = "send"
                }) {
                    return await this.getInfo(), {
                        version: h,
                        toAddr: t,
                        amount: new this.BN(e),
                        gasPrice: new this.BN(this.getGasPrice(a.toLowerCase())),
                        gasLimit: u.Long.fromString(this.getGasLimit(a.toLowerCase())),
                        nonce: this.getNonce(),
                        pubKey: this.zilliqa.wallet.defaultAccount.publicKey
                    }
                }
                async sendTransaction(t) {
                    return this.getProvider("send").sendTransaction({
                        rawtx: t,
                        privateKey: this.privateKey
                    })
                }
                async getInfo() {
                    const {
                        balance: t,
                        nonce: e
                    } = await this.getProvider("balance").getBalance(this.address, this.stakingContract);
                    try {
                        const {
                            staking: e,
                            withdrawals: a
                        } = await this.getProvider("staking").getStakingBalance(this.address, this.stakingContract);
                        this.balances.staking = e, this.balances.withdrawals = a;
                        const n = await this.getProvider("rewards").getRewards(this.address, this.stakingContract, e);
                        this.balances.rewards = n;
                        const i = new this.BN(t || 0),
                            s = new this.BN(i).add(new this.BN(e.total)).add(new this.BN(a.total)).add(new this.BN(n.total)).toString(),
                            r = u.units.fromQa(i, "zil"),
                            o = this.getGasLimit("stake"),
                            l = await this.getFee({
                                gasLimit: o || 1
                            }),
                            p = new this.BN(i).sub(new this.BN(l)).sub(new this.BN(this.reserveForStake));
                        this.balance = s, this.balances.available = r, this.balances.availableForStake = Number(p) > 0 ? u.units.fromQa(p, "zil") : "0", this.balances.total = s
                    } catch (e) {
                        this.balance = t, console.error(e)
                    }
                    const a = Object.keys(this.tokens || {}).filter(Boolean);
                    if (a.length > 0) {
                        (await this.getProvider("token").getTokenBalance(this.address, a) || []).forEach(t => {
                            this.tokens[t.contract].balance = t.balance
                        })
                    }
                    return e && (this.nonce = Number(e) > Number(this.nonce) ? Number(e) : this.nonce), {
                        balance: t,
                        balances: this.balances
                    }
                }
                setPrivateKey(...t) {
                    super.setPrivateKey(...t), this.zilliqa.wallet.addByPrivateKey(this.privateKey), this.oldFormatAddressForBalance = (0, s.getAddressFromPrivateKey)(this.privateKey).replace(/^0x/, "")
                }
                changeProviders(t) {
                    const e = t.find(t => !0 === t.balanceProvider);
                    this.balanceProvider = e && "ViewblockExplorer" === e.className ? this.explorer : this.node
                }
                updateCoinParamsFromServer(t) {
                    super.updateCoinParamsFromServer(t), this.changeProviders(t.explorers)
                }
                async createDelegationTransaction({
                    validator: t = "",
                    amount: e = 0
                }) {
                    return await this.getInfo(), {
                        version: h,
                        toAddr: (0, s.fromBech32Address)(this.stakingProxyContract),
                        amount: new this.BN(e),
                        gasPrice: new this.BN(this.fee),
                        gasLimit: u.Long.fromNumber(this.stakingFeeGas),
                        nonce: this.getNonce(),
                        pubKey: this.zilliqa.wallet.defaultAccount.publicKey,
                        data: JSON.stringify({
                            _tag: "DelegateStake",
                            params: [{
                                vname: "ssnaddr",
                                type: "ByStr20",
                                value: this.toValidChecksumAddress(t)
                            }]
                        })
                    }
                }
                async createUnDelegationTransaction({
                    validator: t = "",
                    amount: e = 0,
                    gasPrice: a = this.getGasPrice(),
                    gasLimit: n = this.getGasLimit("unstake")
                }) {
                    return await this.getInfo(), {
                        version: h,
                        toAddr: (0, s.fromBech32Address)(this.stakingProxyContract),
                        amount: new this.BN(0),
                        gasPrice: new this.BN(a),
                        gasLimit: u.Long.fromNumber(n),
                        nonce: this.getNonce(),
                        pubKey: this.zilliqa.wallet.defaultAccount.publicKey,
                        data: JSON.stringify({
                            _tag: "WithdrawStakeAmt",
                            params: [{
                                vname: "ssnaddr",
                                type: "ByStr20",
                                value: this.toValidChecksumAddress(t)
                            }, {
                                vname: "amt",
                                type: "Uint128",
                                value: String(e)
                            }]
                        })
                    }
                }
                async completeWithdrawal() {
                    return await this.getInfo(), {
                        version: h,
                        toAddr: (0, s.fromBech32Address)(this.stakingProxyContract),
                        amount: new this.BN(0),
                        gasPrice: new this.BN(this.fee),
                        gasLimit: u.Long.fromNumber(this.stakingFeeGas),
                        nonce: this.getNonce(),
                        pubKey: this.zilliqa.wallet.defaultAccount.publicKey,
                        data: JSON.stringify({
                            _tag: "CompleteWithdrawal",
                            params: []
                        })
                    }
                }
                async createClaimTransaction({
                    validator: t = "",
                    gasPrice: e = this.getGasPrice("claim"),
                    gasLimit: a = this.getGasLimit("claim")
                }) {
                    return await this.getInfo(), {
                        version: h,
                        toAddr: (0, s.fromBech32Address)(this.stakingProxyContract),
                        amount: new this.BN(0),
                        gasPrice: new this.BN(e),
                        gasLimit: u.Long.fromNumber(a),
                        nonce: this.getNonce(),
                        pubKey: this.zilliqa.wallet.defaultAccount.publicKey,
                        data: JSON.stringify({
                            _tag: "WithdrawStakeRewards",
                            params: [{
                                vname: "ssnaddr",
                                type: "ByStr20",
                                value: this.toValidChecksumAddress(t)
                            }]
                        })
                    }
                }
                async createTokenTransaction({
                    address: t,
                    amount: e,
                    contract: a
                }) {
                    return await this.getInfo(), {
                        version: h,
                        toAddr: (0, s.fromBech32Address)(a),
                        amount: new this.BN(0),
                        gasPrice: new this.BN(this.fee),
                        gasLimit: u.Long.fromNumber(this.tokenFeeGas),
                        nonce: this.getNonce(),
                        pubKey: this.zilliqa.wallet.defaultAccount.publicKey,
                        data: JSON.stringify({
                            _tag: "Transfer",
                            params: [{
                                vname: "to",
                                type: "ByStr20",
                                value: (0, s.fromBech32Address)(t)
                            }, {
                                vname: "amount",
                                type: "Uint128",
                                value: String(e)
                            }]
                        })
                    }
                }
                createToken(t) {
                    return new d.ZILToken({
                        parent: this,
                        ...t
                    })
                }
                getExcludedTokenList() {
                    return []
                }
                async fetchUserTokens() {
                    return []
                }
                async loadTokensList(t) {
                    const e = this.createToken({
                        name: f,
                        ticker: g,
                        decimal: T,
                        contract: v,
                        uniqueField: v,
                        visibility: !0,
                        confirmed: !0,
                        source: "list"
                    });
                    t.push(e), t.store.walletsCollection[e.alias].set(e.id.toUpperCase(), e), this.tokens[e.contract] = e
                }
                getGasLimit(t = "send") {
                    switch (t) {
                        case "send":
                            return this.sendFeeGas;
                        case "stake":
                            return this.stakingFeeGas;
                        case "unstake":
                            return this.unstakingFeeGas;
                        case "claim":
                            return this.claimFeeGas;
                        default:
                            return this.sendFeeGas
                    }
                }
                getGasPrice(t = "send") {
                    return this.fee
                }
                getGasRange(t = "send") {
                    return this.feeData[t] || this.feeData.gasSettings || this.feeDataDefaults.gasSettings
                }
            }
            var w = ZILCoin;
            e.default = w
        },
        5482: function(t, e, a) {
            "use strict";
            var n = a(2);
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
            var i = n(a(5521)),
                s = n(a(5522)),
                r = n(a(5523)),
                u = n(a(5524)),
                o = n(a(5525)),
                l = n(a(5526)),
                p = n(a(5527)),
                c = n(a(5528)),
                y = n(a(5511)),
                d = n(a(5529)),
                m = n(a(5530)),
                b = n(a(5531)),
                h = n(a(5533)),
                f = n(a(5534))
        },
        5511: function(t, e, a) {
            "use strict";
            var n = a(2);
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.default = void 0;
            var i = n(a(545));
            class LUNCToken extends i.default {
                constructor(t) {
                    var e;
                    super(t), this.fields.paymentId = !0, this.stabilityFee = (null === (e = this.config) || void 0 === e ? void 0 : e.stabilityFee) || .012
                }
                async createTransaction({
                    address: t,
                    amount: e,
                    userGasPrice: a,
                    gasLimit: n,
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
                        userGasPrice: a,
                        gasLimit: n,
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
        5521: function(t, e, a) {
            "use strict";
            var n = a(2);
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.default = void 0;
            var i = n(a(67)),
                s = n(a(545));
            class ETHToken extends s.default {
                constructor(...t) {
                    super(...t), this.gasLimit = "150000", this.coefficient = 1
                }
                async createTransaction({
                    address: t,
                    amount: e,
                    custom: a,
                    userGasPrice: n,
                    gasLimit: i = this.gasLimit,
                    multiplier: s = this.multiplier,
                    nonce: r
                }) {
                    return {
                        address: t,
                        amount: e,
                        custom: a,
                        userGasPrice: n,
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
        5522: function(t, e, a) {
            "use strict";
            var n = a(2);
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.default = void 0;
            var i = n(a(67)),
                s = n(a(545)),
                r = a(29),
                u = a(26);
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
                    gasPrice: a,
                    gasLimit: n
                }) {
                    const i = Number(a.toString()) * Number(this.coefficient),
                        s = n || this.gasLimit;
                    return new this.BN(s).mul(new this.BN(i))
                }
                getFeeSettings() {
                    return i.default.get("eth-gas-price")
                }
                async createTransaction({
                    address: t,
                    amount: e,
                    custom: a,
                    userGasPrice: n,
                    gasLimit: i = this.gasLimit,
                    multiplier: s = this.multiplier,
                    nonce: r
                }) {
                    return {
                        address: t,
                        amount: e,
                        custom: a,
                        userGasPrice: n,
                        gasLimit: i,
                        contract: this.contract,
                        multiplier: s,
                        nonce: r
                    }
                }
                async sendTransaction(t) {
                    return new Promise((e, a) => {
                        this.web3.eth.sendSignedTransaction(t).on("transactionHash", t => {
                            e({
                                txid: t
                            })
                        }).catch(t => {
                            const e = this.parent.coreLibrary.currentProvider.host,
                                n = new r.ExplorerRequestError({
                                    type: u.SEND_TRANSACTION_TYPE,
                                    error: t,
                                    url: e,
                                    instance: this
                                });
                            a(n)
                        })
                    })
                }
            }
            var o = FLRToken;
            e.default = o
        },
        5523: function(t, e, a) {
            "use strict";
            var n = a(2);
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.default = void 0;
            var i = n(a(545)),
                s = a(29),
                r = a(26);
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
                    gasPrice: a,
                    gasLimit: n
                }) {
                    const i = Number(a.toString()) * Number(this.coefficient),
                        s = n || this.gasLimit;
                    return new this.BN(s).mul(new this.BN(i))
                }
                async createTransaction({
                    address: t,
                    amount: e,
                    custom: a,
                    userGasPrice: n,
                    gasLimit: i = this.gasLimit,
                    multiplier: s = this.multiplier,
                    nonce: r
                }) {
                    return {
                        address: t,
                        amount: e,
                        custom: a,
                        userGasPrice: n,
                        gasLimit: i,
                        contract: this.contract,
                        multiplier: s,
                        nonce: r
                    }
                }
                async sendTransaction(t) {
                    return new Promise((e, a) => {
                        this.web3.eth.sendSignedTransaction(t).on("transactionHash", t => {
                            e({
                                txid: t
                            })
                        }).catch(t => {
                            const e = this.coreLibrary.currentProvider.host,
                                n = new s.ExplorerRequestError({
                                    type: r.SEND_TRANSACTION_TYPE,
                                    error: t,
                                    url: e,
                                    instance: this
                                });
                            a(n)
                        })
                    })
                }
            }
            var u = BSCToken;
            e.default = u
        },
        5524: function(t, e, a) {
            "use strict";
            var n = a(2);
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.default = void 0;
            var i = n(a(545));
            class TRXToken extends i.default {
                async createTransaction({
                    address: t,
                    amount: e,
                    userFee: a
                }) {
                    return {
                        address: t,
                        amount: e,
                        contract: this.contract,
                        transfer: !0,
                        feeLimit: null != a ? a : 2e7
                    }
                }
                getUserTicker() {
                    return -1 !== this.ticker.indexOf("-") && this.ticker.split("-")[1] || this.ticker
                }
            }
            var s = TRXToken;
            e.default = s
        },
        5525: function(t, e, a) {
            "use strict";
            var n = a(2);
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.default = void 0;
            var i = n(a(545));
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
                    memo: a
                }) {
                    return {
                        address: t,
                        amount: e,
                        memo: a,
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
        5526: function(t, e, a) {
            "use strict";
            var n = a(2);
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.default = void 0;
            var i = n(a(545));
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
                    const a = Number(this.toCurrencyUnit(await this.getFee())),
                        n = `0xa9059cbb${this.addLeadingZero(t.substring(2),64)}${this.addLeadingZero(new this.BN(e).toString(16),64)}`;
                    return {
                        contract: this.contract,
                        amount: "0",
                        dataToSend: n,
                        fee: a
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
        5527: function(t, e, a) {
            "use strict";
            var n = a(2);
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.default = void 0;
            var i = n(a(545));
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
        5528: function(t, e, a) {
            "use strict";
            var n = a(2);
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.default = void 0;
            var i = n(a(35)),
                s = n(a(545)),
                r = a(29),
                u = a(26);
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
                    const a = new this.BN(t.toString()).mul(new this.BN(this.coefficient)),
                        n = e || this.gasLimit;
                    return new this.BN(n).mul(new this.BN(a))
                }
                async createTransaction({
                    address: t,
                    amount: e,
                    custom: a,
                    userGasPrice: n,
                    gasLimit: i = this.gasLimit,
                    multiplier: s = this.multiplier,
                    nonce: r
                }) {
                    return {
                        address: t,
                        amount: e,
                        custom: a,
                        userGasPrice: n,
                        gasLimit: i,
                        contract: this.contract,
                        multiplier: s,
                        nonce: r
                    }
                }
                async sendTransaction(t) {
                    return new Promise((e, a) => {
                        this.web3.eth.sendSignedTransaction(t).on("transactionHash", t => {
                            e({
                                txid: t
                            })
                        }).catch(t => {
                            const e = this.coreLibrary.currentProvider.host;
                            a(new r.ExplorerRequestError({
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
        5529: function(t, e, a) {
            "use strict";
            var n = a(2);
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.default = void 0;
            var i = n(a(207)),
                s = n(a(208)),
                r = n(a(35)),
                u = n(a(545));

            function o(t, e, a) {
                ! function(t, e) {
                    if (e.has(t)) throw new TypeError("Cannot initialize the same private elements twice on an object")
                }(t, e), e.set(t, a)
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
                    userFee: a
                }) {
                    return {
                        address: t,
                        amount: e,
                        contract: this.contract,
                        ticker: this.ticker,
                        userFee: a || await this.getFee()
                    }
                }
                async availableBalance(t) {
                    return (0, i.default)(this, l).getAvailableBalanceForWallet(this, t)
                }
                async isAvailableForSend(t, e) {
                    const a = await this.availableBalance(this.toMinimalUnit(e));
                    return new r.default(this.toMinimalUnit(t)).lte(new r.default(this.toMinimalUnit(a)))
                }
                async isAvailableForFee(t) {
                    return (0, i.default)(this, l).hasEnoughFeeBalance(t)
                }
            }
            e.default = THETAToken
        },
        5530: function(t, e, a) {
            "use strict";
            var n = a(2);
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.default = void 0;
            var i = a(321),
                s = n(a(67)),
                r = n(a(545)),
                u = a(29),
                o = a(26);
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
                    gasPrice: a,
                    gasLimit: n
                }) {
                    const i = Number(a.toString()) * Number(this.coefficient),
                        s = n || this.gasLimit;
                    return new this.BN(s).mul(new this.BN(i))
                }
                getFeeSettings() {
                    return s.default.get(i.ConfigKey.FantomGasPrice)
                }
                async createTransaction({
                    address: t,
                    amount: e,
                    custom: a,
                    userGasPrice: n,
                    gasLimit: i = this.gasLimit,
                    multiplier: s = this.multiplier,
                    nonce: r
                }) {
                    return {
                        address: t,
                        amount: e,
                        custom: a,
                        userGasPrice: n,
                        gasLimit: i,
                        contract: this.contract,
                        multiplier: s,
                        nonce: r
                    }
                }
                async sendTransaction(t) {
                    return new Promise((e, a) => {
                        this.web3.eth.sendSignedTransaction(t).on("transactionHash", t => {
                            e({
                                txid: t
                            })
                        }).catch(t => {
                            const e = this.parent.coreLibrary.currentProvider.host,
                                n = new u.ExplorerRequestError({
                                    type: o.SEND_TRANSACTION_TYPE,
                                    error: t,
                                    url: e,
                                    instance: this
                                });
                            a(n)
                        })
                    })
                }
            }
            var l = FTMToken;
            e.default = l
        },
        5531: function(t, e, a) {
            "use strict";
            var n = a(2);
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.default = void 0;
            var i = a(930),
                s = n(a(464)),
                r = n(a(2341)),
                u = n(a(5532)),
                o = n(a(2340)),
                l = a(5482);
            class StakableMaticETHToken extends((0, i.Web3Mixin)((0, i.StakingMixin)(l.ETHToken))) {
                constructor({
                    config: t,
                    ...e
                }) {
                    var a, n, i, s, r, u, o;
                    super({
                        config: t,
                        ...e
                    }), this.stakingContract = null !== (a = t.stakingContract) && void 0 !== a ? a : "0x5E3EF299FDDF15EAA0432E6E66473ACE8C13D908", this.stakingGasLimit = null !== (n = t.stakingGasLimit) && void 0 !== n ? n : 3e5, this.unstakingGasLimit = null !== (i = t.unstakingGasLimit) && void 0 !== i ? i : 3e5, this.restakeRewardsGasLimit = null !== (s = t.restakeRewardsGasLimit) && void 0 !== s ? s : 3e5, this.claimRewardsGasLimit = null !== (r = t.claimRewardsGasLimit) && void 0 !== r ? r : 17e4, this.withdrawGasLimit = null !== (u = t.withdrawGasLimit) && void 0 !== u ? u : 3e5, this.approvalGasLimit = null !== (o = t.approvalGasLimit) && void 0 !== o ? o : 5e4
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
                    unstaking: a,
                    rewards: n
                }) {
                    const i = t.toBN().add(e.toBN()).add(n.toBN()).add(a.toBN()).toString();
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
                        ["" + e]: a
                    }) => new s.default(t.toBN().add(a.toBN()), this), new s.default("0", this))
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
                                a = await this.makeRawCall(r.default, t, "unbondNonces", [this.address]),
                                {
                                    shares: n,
                                    withdrawEpoch: i
                                } = await this.makeRawCall(r.default, t, "unbonds_new", [this.address, a]),
                                o = Number(e) > Number(i) + 82,
                                l = new s.default(o ? "0" : n, this),
                                p = new s.default(o ? n : "0", this),
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
                        a = this.calculateUnstaking(t),
                        n = this.calculateRewards(t),
                        i = this.calculatePendingWithdrawals(t),
                        l = this.calculateAvailableWithdrawals(t),
                        p = new s.default(await this.makeRawCall(o.default, this.contract, "allowance", [this.address, this.stakingContract]), this);
                    return {
                        balance: new s.default(this.balance, this),
                        staked: e,
                        unstaking: a,
                        availableVotes: p,
                        pendingWithdrawals: i,
                        availableWithdrawals: l,
                        rewards: n,
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
                    gasLimit: a = this.approvalGasLimit,
                    multiplier: n
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
                        gasLimit: a,
                        multiplier: n
                    })
                }
                createDelegationTransaction({
                    amount: t,
                    validator: e,
                    nonce: a,
                    userGasPrice: n,
                    gasLimit: i = this.stakingGasLimit,
                    multiplier: s
                }) {
                    const u = new this.coreLibrary.eth.Contract(r.default, e).methods.buyVoucher(t, t).encodeABI();
                    return this.createRawTransactions({
                        address: e,
                        paymentData: u,
                        amount: "0",
                        nonce: a,
                        userGasPrice: n,
                        gasLimit: i,
                        multiplier: s
                    })
                }
                createUnstakeTransaction({
                    amount: t,
                    validator: e,
                    nonce: a,
                    userGasPrice: n,
                    gasLimit: i = this.unstakingGasLimit,
                    multiplier: s
                }) {
                    const u = new this.coreLibrary.eth.Contract(r.default, e).methods.sellVoucher_new(t, t).encodeABI();
                    return this.createRawTransactions({
                        address: e,
                        paymentData: u,
                        amount: "0",
                        nonce: a,
                        userGasPrice: n,
                        gasLimit: i,
                        multiplier: s
                    })
                }
                async createWithdrawalTransaction({
                    validator: t,
                    nonce: e,
                    userGasPrice: a,
                    gasLimit: n = this.withdrawGasLimit,
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
                        userGasPrice: a,
                        gasLimit: n,
                        multiplier: i
                    })
                }
                createClaimRewardsTransaction({
                    validator: t,
                    nonce: e,
                    userGasPrice: a,
                    gasLimit: n = this.claimRewardsGasLimit,
                    multiplier: i
                }) {
                    const s = new this.coreLibrary.eth.Contract(r.default, t).methods.withdrawRewards().encodeABI();
                    return this.createRawTransactions({
                        address: t,
                        paymentData: s,
                        amount: "0",
                        nonce: e,
                        userGasPrice: a,
                        gasLimit: n,
                        multiplier: i
                    })
                }
                createRestakeRewardsTransaction({
                    validator: t,
                    nonce: e,
                    userGasPrice: a,
                    gasLimit: n = this.restakeRewardsGasLimit,
                    multiplier: i
                }) {
                    const s = new this.coreLibrary.eth.Contract(r.default, t).methods.restake().encodeABI();
                    return this.createRawTransactions({
                        address: t,
                        paymentData: s,
                        amount: "0",
                        nonce: e,
                        userGasPrice: a,
                        gasLimit: n,
                        multiplier: i
                    })
                }
                getPredefineValidatorsConfigIdentifier() {
                    return "matic_eth"
                }
            }
            e.default = StakableMaticETHToken
        },
        5532: function(t, e, a) {
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
        5533: function(t, e, a) {
            "use strict";
            var n = a(2);
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.default = void 0;
            var i = n(a(545)),
                s = a(29),
                r = a(26);
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
                    custom: a,
                    userGasPrice: n,
                    gasLimit: i = this.gasLimit,
                    multiplier: s = this.multiplier,
                    nonce: r
                }) {
                    return {
                        address: t,
                        amount: e,
                        custom: a,
                        userGasPrice: n,
                        gasLimit: i,
                        contract: this.contract,
                        multiplier: s,
                        nonce: r
                    }
                }
                async sendTransaction(t) {
                    return new Promise((e, a) => {
                        this.web3.eth.sendSignedTransaction(t).on("transactionHash", t => {
                            e({
                                txid: t
                            })
                        }).catch(t => {
                            const e = this.parent.coreLibrary.currentProvider.host,
                                n = new s.ExplorerRequestError({
                                    type: r.SEND_TRANSACTION_TYPE,
                                    error: t,
                                    url: e,
                                    instance: this
                                });
                            a(n)
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
        5534: function(t, e, a) {
            "use strict";
            var n = a(2);
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.default = void 0;
            var i = n(a(545)),
                s = a(29),
                r = a(26);
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
                    custom: a,
                    userGasPrice: n,
                    gasLimit: i = this.gasLimit,
                    multiplier: s = this.multiplier,
                    nonce: r
                }) {
                    return {
                        address: t,
                        amount: e,
                        custom: a,
                        userGasPrice: n,
                        gasLimit: i,
                        contract: this.contract,
                        multiplier: s,
                        nonce: r
                    }
                }
                async sendTransaction(t) {
                    return new Promise((e, a) => {
                        this.web3.eth.sendSignedTransaction(t).on("transactionHash", t => {
                            e({
                                txid: t
                            })
                        }).catch(t => {
                            const e = this.parent.coreLibrary.currentProvider.host,
                                n = new s.ExplorerRequestError({
                                    type: r.SEND_TRANSACTION_TYPE,
                                    error: t,
                                    url: e,
                                    instance: this
                                });
                            a(n)
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