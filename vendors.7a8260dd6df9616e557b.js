(window.webpackJsonp = window.webpackJsonp || []).push([
    [170], {
        1413: function(e, t, r) {
            "use strict";
            var s = r(2);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), Object.defineProperty(t, "AdaLibApi", {
                enumerable: !0,
                get: function() {
                    return n.default
                }
            }), Object.defineProperty(t, "AdaLibLegacy", {
                enumerable: !0,
                get: function() {
                    return a.default
                }
            }), Object.defineProperty(t, "CosmosTxTypes", {
                enumerable: !0,
                get: function() {
                    return i.default
                }
            });
            var n = s(r(4225)),
                a = s(r(4246)),
                i = s(r(4252))
        },
        2003: function(e, t, r) {
            "use strict";
            var s = r(2);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var n = s(r(4105)),
                a = s(r(35)),
                i = r(29),
                o = s(r(461)),
                d = r(930);

            function c(e, t) {
                ! function(e, t) {
                    if (t.has(e)) throw new TypeError("Cannot initialize the same private elements twice on an object")
                }(e, t), t.add(e)
            }
            const l = n.default.nettype_utils.network_type.MAINNET;
            var u = new WeakSet;
            class XMRCoin extends((0, d.HasProviders)(o.default)) {
                constructor({
                    alias: e,
                    notify: t,
                    feeData: r,
                    explorers: s,
                    txWebUrl: n,
                    socket: a
                }) {
                    super({
                        alias: e,
                        notify: t,
                        name: "Monero",
                        ticker: "XMR",
                        decimal: 12,
                        derivation: "m/44'/128'/0'/0/0",
                        unspendableBalance: "0",
                        explorers: s,
                        txWebUrl: n,
                        socket: a
                    }), c(this, u), this.fee = r.fee, this.coreLibrary = null, this.privateKey = null, this.privateKeyView = null, this.privateKeySpend = null, this.publicKeySpend = null, this.info = {}
                }
                get instance() {
                    return {
                        id: this.id,
                        ticker: this.ticker,
                        deprecatedParent: this.ticker,
                        name: this.name,
                        alias: this.alias,
                        assetName: this.assetName,
                        decimal: this.decimal,
                        parent: this.id,
                        toCurrencyUnit: e => this.toCurrencyUnit(e),
                        toMinimalUnit: e => this.toMinimalUnit(e),
                        feeDefault: this.feeData && this.feeData.fee
                    }
                }
                async loadWallet(e, t) {
                    const r = e.toString("hex").substr(0, 64);
                    return await this.setPrivateKey(r), this
                }
                async setPrivateKey(e, t) {
                    this.coreLibrary = await n.default.monero_utils_promise;
                    const r = this.coreLibrary.address_and_keys_from_seed(e, l);
                    this.privateKeyView = r.sec_viewKey_string, this.privateKeySpend = r.sec_spendKey_string, this.publicKeySpend = r.pub_spendKey_string, this.address = r.address_string, this.privateKey = e;
                    try {
                        await this.getProvider("node").setupMyMonero(this.address, this.privateKeyView, this.privateKeySpend)
                    } catch (e) {
                        throw new i.ExternalError({
                            error: e,
                            instance: this
                        })
                    }
                }
                validateAddress(e) {
                    try {
                        return this.coreLibrary.decode_address(e, l), !0
                    } catch (e) {
                        return !1
                    }
                }
                async getInfo() {
                    const {
                        balance: e
                    } = await this.getProvider("balance").getInfo();
                    return this.balance = e, {
                        balance: e
                    }
                }
                getFee() {
                    return this.getProvider("node").getFee()
                }
                async createTransaction({
                    address: e,
                    amount: t,
                    memo: r,
                    isSendAll: s = !1
                }) {
                    try {
                        const r = s || await
                        function(e, t, r) {
                            if (!t.has(e)) throw new TypeError("attempted to get private field on non-instance");
                            return r
                        }(this, u, h).call(this, t);
                        return {
                            destinations: [{
                                to_address: e,
                                send_amount: r ? 0 : this.toCurrencyUnit(t)
                            }],
                            shouldSweep: r,
                            priority: 1
                        }
                    } catch (e) {
                        throw new i.ExternalError({
                            error: e,
                            instance: this
                        })
                    }
                }
            }
            async function h(e) {
                const [t, r] = await Promise.all([this.getBalance(), this.getFee()]);
                return e === new a.default(t).sub(new a.default(r)).toString()
            }
            var f = XMRCoin;
            t.default = f
        },
        2074: function(e, t, r) {
            "use strict";
            var s = r(2);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var n = s(r(57)),
                a = s(r(172)),
                i = s(r(4404)),
                o = s(r(461)),
                d = s(r(67)),
                c = r(29),
                l = r(26),
                u = r(930);
            class XTZCoin extends((0, u.HasProviders)(o.default)) {
                constructor({
                    alias: e,
                    notify: t,
                    feeData: r,
                    explorers: s,
                    txWebUrl: n,
                    socket: a
                }) {
                    const o = {
                        alias: e,
                        notify: t,
                        name: "Tezos",
                        ticker: "XTZ",
                        decimal: 6,
                        derivation: "m/44'/1729'/0'/0/0",
                        unspendableBalance: "275000",
                        explorers: s,
                        txWebUrl: n,
                        socket: a,
                        feeData: r
                    };
                    d.default.register("stake_validators_tezos"), super(o), this.network = "", this.coreLibrary = i.default, this.prefix = {
                        tz1: new Uint8Array([6, 161, 159]),
                        edpk: new Uint8Array([13, 15, 37, 217]),
                        edsk: new Uint8Array([43, 246, 78, 7]),
                        edsig: new Uint8Array([9, 245, 205, 134, 18])
                    }, this.eventEmmiter.on(this.ticker + "::confirmed-socket-tx", (e, t, r) => {
                        this.getInfo(), t && t.direction ? this.bus.$emit("socket::newtx", {
                            id: this.id,
                            ticker: r,
                            amount: t.amount,
                            txid: t.txid
                        }) : this.bus.$emit("socket::newtx::outgoing", {
                            id: this.id,
                            ticker: r
                        })
                    })
                }
                loadWallet(e) {
                    return new Promise((t, r) => {
                        const s = this.coreLibrary.crypto_sign_seed_keypair(e.slice(0, 32));
                        s || r(new Error(this.ticker + " can't get a privateKey!!!")), this.privateKey = this.bs58EncodeWithPrefix(s.privateKey, this.prefix.edsk), this.address = this.bs58EncodeWithPrefix(this.coreLibrary.crypto_generichash(20, s.publicKey), this.prefix.tz1), t(this)
                    })
                }
                getAddress() {
                    return this.privateKey ? this.bs58EncodeWithPrefix(this.coreLibrary.crypto_generichash(20, this.bs58Decode(this.privateKey, this.prefix.edsk).slice(32)), this.prefix.tz1) : new c.WalletError({
                        type: l.LOAD_WALLET_ERROR,
                        error: new Error("privateKey is empty!"),
                        instance: this
                    })
                }
                async validateAddress(e) {
                    if (!e) return !1;
                    try {
                        return this.bs58Decode(e, this.prefix.tz1), !0
                    } catch (e) {
                        return !1
                    }
                }
                async create(e) {
                    if (!this.privateKey) throw new Error("[XTZ] forge() error: no privateKey");
                    const t = await this.getFee(),
                        r = this.bs58EncodeWithPrefix(this.bs58Decode(this.privateKey, this.prefix.edsk).slice(32), this.prefix.edpk),
                        s = {
                            headers: {
                                "Content-Type": "application/json"
                            }
                        },
                        a = this.getProvider("send").config.baseUrl,
                        [i, o, d] = await Promise.all([n.default.get(a + "/chains/main/blocks/head/header").then(e => e.data), n.default.get(`${a}/chains/main/blocks/head/context/contracts/${this.address}/counter`).then(e => e.data), n.default.get(`${a}/chains/main/blocks/head/context/contracts/${this.address}/manager_key`).then(e => e.data)]),
                        u = [];
                    let h = Number(o);
                    d || (h += 1, u.push({
                        kind: "reveal",
                        fee: t.toString(),
                        gas_limit: this.config.config.feeData.gasLimit,
                        storage_limit: this.config.config.feeData.storageLimit,
                        public_key: r,
                        source: this.address,
                        counter: String(h)
                    })), h += 1, e.counter = String(h), u.push(Object.assign(e, {
                        fee: t.toString(),
                        source: this.address,
                        counter: String(h),
                        gas_limit: this.config.config.feeData.gasLimit,
                        storage_limit: this.config.config.feeData.storageLimit
                    }));
                    const f = {
                            branch: i.hash,
                            contents: u
                        },
                        p = i.protocol,
                        g = (await n.default.post(`${a}/chains/${i.chain_id}/blocks/${i.hash}/helpers/forge/operations`, f, s)).data;
                    f.protocol = p;
                    const m = this.sign(g),
                        y = m.sbytes;
                    f.signature = m.edsig;
                    const w = await n.default.post(a + "/chains/main/blocks/head/helpers/preapply/operations", [f], s);
                    if (!Array.isArray(w.data)) throw new c.ExplorerRequestError({
                        type: l.SEND_TRANSACTION_TYPE,
                        error: new TypeError(this.ticker + " node fail check transaction!"),
                        instance: this
                    });
                    const b = w.data.reduce((t, r, s) => (t.push(...r.contents.reduce((t, {
                        destination: r,
                        metadata: s
                    }) => ("transaction" === e.kind && r && r !== e.destination && t.push("operation is malicious, destination changed"), void 0 !== s.operation_result && "failed" === s.operation_result.status && t.push(...s.operation_result.errors), t), [])), t), []);
                    if (b.length > 0) throw new c.ExplorerRequestError({
                        type: l.SEND_TRANSACTION_TYPE,
                        error: b.join(),
                        instance: this
                    });
                    return y
                }
                async createTransaction({
                    address: e,
                    amount: t
                }) {
                    return this.create({
                        kind: "transaction",
                        amount: t.toString(),
                        destination: e
                    })
                }
                async createDelegationTransaction(e) {
                    return this.create({
                        kind: "delegation",
                        delegate: e
                    })
                }
                async sendTransaction(e) {
                    const t = {
                            headers: {
                                "Content-Type": "application/json"
                            }
                        },
                        r = this.getProvider("send").config.baseUrl;
                    try {
                        return {
                            txid: (await n.default.post(r + "/injection/operation", JSON.stringify(e), t)).data
                        }
                    } catch (e) {
                        throw new c.ExplorerRequestError({
                            type: l.SEND_TRANSACTION_TYPE,
                            error: e,
                            instance: this
                        })
                    }
                }
                sign(e) {
                    const t = new Uint8Array([3]);
                    let r = this.hex2buf(e);
                    r = this.mergebuf(t, r);
                    const s = this.coreLibrary.crypto_sign_detached(this.coreLibrary.crypto_generichash(32, r), this.bs58Decode(this.privateKey, this.prefix.edsk), "uint8array");
                    return {
                        bytes: e,
                        sig: s,
                        edsig: this.bs58EncodeWithPrefix(s, this.prefix.edsig),
                        sbytes: e + this.buf2hex(s)
                    }
                }
                bs58EncodeWithPrefix(e, t) {
                    const r = new Uint8Array(t.length + e.length);
                    return r.set(t), r.set(e, t.length), a.default.encode(Buffer.from(r, "hex"))
                }
                bs58Decode(e, t) {
                    return a.default.decode(e).slice(t.length)
                }
                buf2hex(e) {
                    const t = new Uint8Array(e),
                        r = [];
                    for (let e = 0; e < t.length; e += 1) {
                        const s = 16,
                            n = -2,
                            a = ("00" + t[e].toString(s)).slice(n);
                        r.push(a)
                    }
                    return r.join("")
                }
                hex2buf(e) {
                    return new Uint8Array(e.match(/[\da-f]{2}/gi).map(e => parseInt(e, 16)))
                }
                mergebuf(e, t) {
                    const r = new Uint8Array(e.length + t.length);
                    return r.set(e), r.set(t, e.length), r
                }
                async getInfo() {
                    return await this.getBalance(), {
                        balance: this.balance,
                        balances: this.balances,
                        transactions: []
                    }
                }
                async getBalance() {
                    this.balance = this.toMinimalUnit(await this.getProvider("balance").getBalance(this.address));
                    const e = await this.getProvider("balance").getDelegate(this.address).catch(e => console.error(e));
                    this.balances = {
                        available: this.toCurrencyUnit(this.balance),
                        staking: {
                            total: e ? this.toCurrencyUnit(this.balance) : "0",
                            validator: e || ""
                        }
                    }
                }
                getTransactions({
                    pageNum: e = 0
                } = {}) {
                    return this.getProvider("history").getTransactions({
                        address: this.address,
                        pageNum: e
                    })
                }
                getTransaction(e) {
                    return this.getProvider("history").getTransaction(this.address, e)
                }
            }
            var h = XTZCoin;
            t.default = h
        },
        2390: function(e, t, r) {
            "use strict";
            var s = r(2);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var n = r(1415),
                a = r(173),
                i = s(r(192)),
                o = s(r(55)),
                d = function(e, t) {
                    if (!t && e && e.__esModule) return e;
                    if (null === e || "object" != typeof e && "function" != typeof e) return {
                        default: e
                    };
                    var r = y(t);
                    if (r && r.has(e)) return r.get(e);
                    var s = {},
                        n = Object.defineProperty && Object.getOwnPropertyDescriptor;
                    for (var a in e)
                        if ("default" !== a && Object.prototype.hasOwnProperty.call(e, a)) {
                            var i = n ? Object.getOwnPropertyDescriptor(e, a) : null;
                            i && (i.get || i.set) ? Object.defineProperty(s, a, i) : s[a] = e[a]
                        } s.default = e, r && r.set(e, s);
                    return s
                }(r(67)),
                c = s(r(143)),
                l = r(1436),
                u = r(1437),
                h = r(1438),
                f = s(r(944)),
                p = s(r(955)),
                g = r(1460),
                m = s(r(956));

            function y(e) {
                if ("function" != typeof WeakMap) return null;
                var t = new WeakMap,
                    r = new WeakMap;
                return (y = function(e) {
                    return e ? r : t
                })(e)
            }
            async function w() {
                c.default.on(a.WALLETS.NEW_ATOMIC_ID, ({
                    atomicId: e
                }) => {
                    o.default.setUserId(e)
                });
                try {
                    const e = await d.default.get(d.ConfigKey.LogSettings, !0);
                    o.default.startCloudSync(e.loggerUrl)
                } catch (e) {
                    setTimeout(w, 1e4)
                }
            }
            t.default = ({
                platform: e
            } = {}) => {
                i.default.setCoreVersion(n.version), e && (i.default.setPlatform(e.type), i.default.setVersion(e.version), i.default.setOS(e.os)), c.default.once(a.WALLETS.WALLET_READY, () => {
                    (0, l.fetchPredefinedValidators)()
                }), (0, u.startActivityTracking)(), (0, h.startSettingsSync)(), (0, g.startSettingsSync)();
                const t = {
                    logger: w(),
                    chartData: f.default.fetchSettings(),
                    buy: p.default.fetchSettings(),
                    coinRestrictionPolicy: m.default.fetchSettings()
                };
                return {
                    modulesReady: t,
                    ready: Promise.all(Object.values(t))
                }
            }
        },
        2457: function(e, t, r) {
            "use strict";
            var s = r(2);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), Object.defineProperty(t, "ADAStaking", {
                enumerable: !0,
                get: function() {
                    return n.default
                }
            }), Object.defineProperty(t, "ATOMStaking", {
                enumerable: !0,
                get: function() {
                    return a.default
                }
            }), Object.defineProperty(t, "BANDStaking", {
                enumerable: !0,
                get: function() {
                    return i.default
                }
            }), Object.defineProperty(t, "HBARStaking", {
                enumerable: !0,
                get: function() {
                    return o.default
                }
            }), Object.defineProperty(t, "ICXStaking", {
                enumerable: !0,
                get: function() {
                    return d.default
                }
            }), Object.defineProperty(t, "NEARStaking", {
                enumerable: !0,
                get: function() {
                    return c.default
                }
            }), Object.defineProperty(t, "SOLStaking", {
                enumerable: !0,
                get: function() {
                    return u.default
                }
            }), Object.defineProperty(t, "TRXStaking", {
                enumerable: !0,
                get: function() {
                    return l.default
                }
            }), Object.defineProperty(t, "XTZStaking", {
                enumerable: !0,
                get: function() {
                    return h.default
                }
            }), Object.defineProperty(t, "ZILStaking", {
                enumerable: !0,
                get: function() {
                    return f.default
                }
            });
            var n = s(r(2458)),
                a = s(r(2460)),
                i = s(r(2461)),
                o = s(r(2462)),
                d = s(r(2463)),
                c = s(r(2464)),
                l = s(r(2465)),
                u = s(r(2466)),
                h = s(r(2467)),
                f = s(r(2468))
        },
        2458: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var s = r(232);
            class ADAStaking extends s.Staking {
                constructor() {
                    super(), this.name = "ADA"
                }
                async fetchActiveValidators() {}
            }
            var n = ADAStaking;
            t.default = n
        },
        2460: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var s = r(232);
            class ATOMStaking extends s.Staking {
                constructor() {
                    super(), this.name = "ATOM"
                }
                async fetchActiveValidators() {}
                modifyActiveValidators(e) {
                    const t = this.validators.map(({
                            name: e
                        }) => e),
                        r = e.map(({
                            description: e
                        }) => e.moniker);
                    t.forEach(e => {
                        r.includes(e) || this.validators.splice(this.validators.findIndex(t => t.name === e), 1)
                    })
                }
            }
            var n = ATOMStaking;
            t.default = n
        },
        2461: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var s = r(232);
            class BANDStaking extends s.Staking {
                constructor() {
                    super(), this.name = "BAND"
                }
                async fetchActiveValidators() {}
                modifyActiveValidators(e) {
                    const t = this.validators.map(({
                            name: e
                        }) => e),
                        r = e.map(({
                            description: e
                        }) => e.moniker);
                    t.forEach(e => {
                        r.includes(e) || this.validators.splice(this.validators.findIndex(t => t.name === e), 1)
                    })
                }
            }
            var n = BANDStaking;
            t.default = n
        },
        2462: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var s = r(232);
            class HBARStaking extends s.Staking {
                constructor() {
                    super(), this.name = "HBAR"
                }
                async fetchActiveValidators() {}
            }
            var n = HBARStaking;
            t.default = n
        },
        2463: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var s = r(232);
            class ICXStaking extends s.Staking {
                constructor() {
                    super(), this.name = "ICX"
                }
                async fetchActiveValidators() {}
            }
            var n = ICXStaking;
            t.default = n
        },
        2464: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var s = r(232);
            class NEARStaking extends s.Staking {
                constructor() {
                    super(), this.name = "NEAR"
                }
                async fetchActiveValidators() {}
            }
            var n = NEARStaking;
            t.default = n
        },
        2465: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var s = r(232);
            class TRXStaking extends s.Staking {
                constructor() {
                    super(), this.name = "TRX"
                }
                async fetchActiveValidators() {}
            }
            var n = TRXStaking;
            t.default = n
        },
        2466: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var s = r(232);
            class SOLStaking extends s.Staking {
                constructor() {
                    super(), this.name = "SOL"
                }
                async fetchActiveValidators() {}
            }
            var n = SOLStaking;
            t.default = n
        },
        2467: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var s = r(232);
            class XTZStaking extends s.Staking {
                constructor() {
                    super(), this.name = "XTZ"
                }
                async fetchActiveValidators() {}
            }
            var n = XTZStaking;
            t.default = n
        },
        2468: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var s = r(232);
            class ZILStaking extends s.Staking {
                constructor() {
                    super(), this.name = "ZIL"
                }
                async fetchActiveValidators() {}
            }
            var n = ZILStaking;
            t.default = n
        },
        3680: function(e, t, r) {
            "use strict";
            var s = r(2);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var n = s(r(35)),
                a = s(r(57)),
                i = r(1409);
            t.default = class RewardCalculator {
                constructor(e, t) {
                    this.baseUrl = e, this.zilliqa = new i.Zilliqa(e), this.contract = this.zilliqa.contracts.at(t), this.jsonBody = e => ({
                        id: "atomic",
                        jsonrpc: "2.0",
                        method: "GetSmartContractSubState",
                        params: [t, ...e]
                    })
                }
                async getRewards(e, t) {
                    const r = await a.default.post(this.baseUrl, this.jsonBody(["last_withdraw_cycle_deleg", [t.toLowerCase()]])),
                        s = await a.default.post(this.baseUrl, this.jsonBody(["lastrewardcycle", []])),
                        n = r.data.result,
                        i = s.data.result,
                        o = await this.getRewardCycleList(n, i, e, t),
                        d = await this.combineBuffDirect(e, t, o),
                        c = await this.getRewardNeedCycleList(n, i, e, t);
                    return await this.calculateRewards(e, d, c)
                }
                async getRewardCycleList(e, t, r, s) {
                    if (null !== e && void 0 !== e.last_withdraw_cycle_deleg[s][r]) {
                        const e = Number.parseInt(t.lastrewardcycle),
                            r = [];
                        let s = 1;
                        for (; s <= e; s++) r.push(s);
                        return r
                    }
                    return []
                }
                async getRewardNeedCycleList(e, t, r, s) {
                    const n = t.lastrewardcycle;
                    if (null === e) return [];
                    const a = e.last_withdraw_cycle_deleg[s][r];
                    return (await this.getRewardCycleList(e, t, r, s)).filter(e => e > Number.parseInt(a) && e <= Number.parseInt(n))
                }
                async combineBuffDirect(e, t, r) {
                    const s = new Map,
                        i = await a.default.post(this.baseUrl, this.jsonBody(["direct_deposit_deleg", [t.toLowerCase(), e]])),
                        o = await a.default.post(this.baseUrl, this.jsonBody(["buff_deposit_deleg", [t.toLowerCase(), e]])),
                        d = await a.default.post(this.baseUrl, this.jsonBody(["deleg_stake_per_cycle", [t.toLowerCase(), e]])),
                        c = i.data.result,
                        l = o.data.result,
                        u = d.data.result;
                    let h = null,
                        f = null,
                        p = null;
                    return null !== c && (h = c.direct_deposit_deleg[t.toLowerCase()][e]), null !== l && (f = l.buff_deposit_deleg[t.toLowerCase()][e]), null !== u && (p = u.deleg_stake_per_cycle[t.toLowerCase()][e]), r.forEach(e => {
                        const t = e - 1,
                            r = e - 2;
                        let a = new n.default(0);
                        null !== p && void 0 !== p[t.toString()] && (a = new n.default(p[t.toString()]));
                        let i = new n.default(0);
                        null !== h && void 0 !== h[t.toString()] && (i = new n.default(h[t.toString()]));
                        let o = new n.default(0);
                        null !== f && void 0 !== f[r.toString()] && (o = new n.default(f[r.toString()]));
                        let d = i.add(o);
                        d = d.add(a);
                        const c = s.get(t);
                        if (void 0 !== c) {
                            const t = d.add(c);
                            s.set(e, t)
                        } else s.set(e, d)
                    }), s
                }
                async calculateRewards(e, t, r) {
                    let s = new n.default(0);
                    const i = (await a.default.post(this.baseUrl, this.jsonBody(["stake_ssn_per_cycle", [e]]))).data.result;
                    return null === i || r.forEach(r => {
                        const a = i.stake_ssn_per_cycle[e][r];
                        if (void 0 === a);
                        else {
                            const e = new n.default(a.arguments[1]),
                                i = new n.default(a.arguments[0]),
                                o = t.get(r);
                            if (void 0 !== o) {
                                const t = o.mul(e).div(i);
                                s = s.add(t)
                            }
                        }
                    }), s
                }
            }
        },
        4062: function(e, t, r) {
            "use strict";
            var s = r(2);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), Object.defineProperty(t, "DomainsPlugin", {
                enumerable: !0,
                get: function() {
                    return n.default
                }
            });
            var n = s(r(4063))
        },
        4063: function(e, t, r) {
            "use strict";
            var s = r(2);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var n = s(r(57)),
                a = s(r(55));
            class DomainsPlugin {
                static getUrlPathFromDomain(e) {
                    return "/domains/" + e.toLowerCase()
                }
                install(e) {
                    const t = e.validateAddress,
                        r = n.default.create({
                            baseURL: "https://resolve.unstoppabledomains.com",
                            headers: {
                                Authorization: "Bearer da938e74-b9c5-4895-b059-8eb7960acebf"
                            }
                        });
                    e.validateAddress = async function(s, n) {
                        const i = await t.call(e, s || e.address);
                        if (i) return i;
                        return await async function(e, t, s) {
                            var n;
                            if (!e || 0 === e.length) return null;
                            const i = await r.get(DomainsPlugin.getUrlPathFromDomain(e)).catch(e => a.default.error({
                                instance: this,
                                error: e
                            }));
                            return function(e, t, r) {
                                var s;
                                return null !== (s = (null == e ? void 0 : e[`crypto.${t}.address`]) || (null == e ? void 0 : e[`crypto.${r}.version.${t}.address`])) && void 0 !== s ? s : null
                            }(null == i || null === (n = i.data) || void 0 === n ? void 0 : n.records, t, s)
                        }(s, this.ticker, this.parent)
                    }
                }
            }
            var i = DomainsPlugin;
            t.default = i
        },
        4065: function(e, t, r) {
            "use strict";
            var s = r(2);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var n = s(r(57)),
                a = s(r(4066)),
                i = s(r(4098)),
                o = s(r(1412)),
                d = function(e, t) {
                    if (!t && e && e.__esModule) return e;
                    if (null === e || "object" != typeof e && "function" != typeof e) return {
                        default: e
                    };
                    var r = N(t);
                    if (r && r.has(e)) return r.get(e);
                    var s = {},
                        n = Object.defineProperty && Object.getOwnPropertyDescriptor;
                    for (var a in e)
                        if ("default" !== a && Object.prototype.hasOwnProperty.call(e, a)) {
                            var i = n ? Object.getOwnPropertyDescriptor(e, a) : null;
                            i && (i.get || i.set) ? Object.defineProperty(s, a, i) : s[a] = e[a]
                        } s.default = e, r && r.set(e, s);
                    return s
                }(r(650)),
                c = s(r(67)),
                l = r(321),
                u = s(r(461)),
                h = s(r(1121)),
                f = r(346),
                p = r(29),
                g = s(r(230)),
                m = s(r(55)),
                y = s(r(192)),
                w = s(r(4101)),
                b = s(r(4102)),
                v = s(r(545)),
                T = s(r(74)),
                k = r(52),
                A = r(26),
                _ = s(r(4103)),
                S = r(1160),
                C = r(173),
                P = s(r(143)),
                x = r(2076),
                E = r(201),
                L = r(4408);

            function N(e) {
                if ("function" != typeof WeakMap) return null;
                var t = new WeakMap,
                    r = new WeakMap;
                return (N = function(e) {
                    return e ? r : t
                })(e)
            }
            const B = {
                nft: 6e4
            };
            class Wallets extends Array {
                constructor(...e) {
                    super(...e), this.store = {
                        walletsCollection: {
                            atomic: new Map
                        }
                    }, this.BitcoreMnemonic = a.default, this.logger = m.default, this.socket = null, this.autoUpdateBalances = !0, this.autoUpdateTransactions = !0, this.autoUpdateCoinsDataCounter = null, this.autoUpdateBalancesCounter = null, this.autoUpdateTransactionsCounter = null, this.autoUpdateNftTimeouts = {}, this.disabledSockets = !1, this.updateProcessFlag = !1, P.default.on(C.WALLETS.ACTIVATE_COIN, e => this.replaceStubCoinWithOriginal(e)), this.balanceNotifier = new L.BalanceNotifier(P.default, c.default.getFallback(l.ConfigKey.BalanceTracking))
                }
                static getInstance(...e) {
                    return f.NftToken.updateIpfsGateway(), new Wallets(...e)
                }
                findToken({
                    contract: e,
                    parent: t,
                    ticker: r
                }) {
                    return this.getTokens().find(({
                        contract: s,
                        deprecatedParent: n,
                        ticker: a
                    }) => a.toUpperCase() === r.toUpperCase() && (s && s.toLowerCase() === (null == e ? void 0 : e.toLowerCase()) || "eth" !== t && (null == t ? void 0 : t.toLowerCase()) === (null == n ? void 0 : n.toLowerCase())))
                }
                getTokens() {
                    return Array.from(this).filter(e => e instanceof v.default)
                }
                async updateBalanceTrackingConfig() {
                    return c.default.get(l.ConfigKey.BalanceTracking, !0).then(e => {
                        this.balanceNotifier.config = e
                    }).catch(() => {
                        console.warn("Could not load balance tracking config.")
                    })
                }
                async initialize() {
                    Object.values(this.store.walletsCollection).forEach(e => e.clear()), this.updateBalanceTrackingConfig();
                    let e = await c.default.get(l.ConfigKey.WalletsFee, !0).catch(() => c.default.getFallback(l.ConfigKey.WalletsFee));
                    if (!e) throw new p.WalletsCollectionError({
                        type: A.WALLET_ERROR,
                        instance: this
                    });
                    P.default.once(C.CONFIGS.UPDATED, ({
                        id: t,
                        config: r
                    }) => {
                        t === l.ConfigKey.WalletsFee && (e = r)
                    });
                    const t = new _.default((0, k.arrayToObject)(e, "className"), e => (this.push(e), this.store.walletsCollection[e.alias].set(e.id.toUpperCase(), e), e.install(this), "function" == typeof e.loadTokensList ? e.loadTokensList(this) : Promise.resolve("no tokens found"))),
                        r = Array.from(this);
                    try {
                        this.length = 0, await t.installAsync(), t.installStaticallyLoadedCoins(), await t.installTokens()
                    } catch (e) {
                        m.default.error({
                            instance: this,
                            error: e
                        }), this.push(...r)
                    } finally {
                        this.updateCoinsData(e), this.startCoinsDataUpdateSchedule(), P.default.on(C.CONFIGS.UPDATED, ({
                            id: e,
                            config: t
                        }) => {
                            e === l.ConfigKey.WalletsFee && this.updateCoinsData(t)
                        })
                    }
                    Array.from(this).forEach(e => {
                        try {
                            const {
                                createTransaction: t,
                                sendTransaction: r
                            } = (0, S.createSendTransactionStatTracker)(this, e);
                            e.createTransaction = t, e.sendTransaction = r
                        } catch (e) {
                            console.error(e)
                        }
                    }), P.default.emit(C.WALLETS.WALLET_READY)
                }
                isWalletActive(e) {
                    var t;
                    return d.default.isActive(e, null === (t = this.getWallet(e.deprecatedParent)) || void 0 === t ? void 0 : t.address)
                }
                setActivityChecked(e, t, r) {
                    !d.default.getCheckResult(e, t) && (e instanceof u.default || r) && d.default.setChecked(e, t, r);
                    [d.ACTIVITY_TYPES.balance, d.ACTIVITY_TYPES.history].every(t => d.default.isChecked(e, t)) && !this.isWalletActive(e) && "function" == typeof e.disconnectSocket && e.disconnectSocket()
                }
                setAutoUpdateBalances(e = !0) {
                    this.autoUpdateBalances = e
                }
                setAutoUpdateTransactions(e = !0) {
                    this.autoUpdateTransactions = e
                }
                async startCoinsDataUpdateSchedule() {
                    clearTimeout(this.autoUpdateCoinsDataCounter), this.autoUpdateCoinsDataCounter = setTimeout(async () => {
                        const e = await c.default.get(l.ConfigKey.WalletsFee, !0).catch(() => null);
                        e && this.updateCoinsData(e), this.startCoinsDataUpdateSchedule()
                    }, 3e5)
                }
                async updateCoinsData(e) {
                    e.forEach(async e => {
                        const t = e.className.match(/(Coin|Token)/)[1],
                            r = e.className.replace(t, ""),
                            s = r && this.findWallet(r) || null,
                            a = e.feesEstimateUrl;
                        if ("Coin" === t) try {
                            if (s && "BTC" === s.ticker && a) {
                                const t = await n.default.get(a).catch(e => console.warn("Bitcoinfees is unavailable", e));
                                t && t.data && t.data.fastestFee && (e.feeData.feePerByte = t.data.fastestFee)
                            }
                            s && "function" == typeof s.updateCoinParamsFromServer && s.updateCoinParamsFromServer(e)
                        } catch (e) {
                            m.default.error({
                                instance: this,
                                error: new Error(`${r}: ${e.message}`)
                            })
                        }
                        if ("Token" === t) try {
                            (s ? Object.keys(s.tokens) : []).forEach(t => {
                                s.tokens[t].updateTokenParamsFromServer(e)
                            })
                        } catch (e) {
                            m.default.error({
                                instance: this,
                                error: new Error(`${r}: ${e.message}`)
                            })
                        }
                    }), P.default.emit(C.WALLETS.UPDATE)
                }
                get hash() {
                    return (0, o.default)((0, o.default)(this.mnemonic.toString()))
                }
                validateMnemonic(e) {
                    return this.BitcoreMnemonic.isValid(e)
                }
                async loadWalletsByMnemonic(e, t = {}, r = 5) {
                    t.$bus.$emit(C.WALLETS.START_LOADING_ALL, this.length), d.default.reset(), this.phrase = e, this.mnemonic = new this.BitcoreMnemonic(e), this.balanceNotifier.hash = this.hash, this.emitNewAtomicId(this.hash);
                    const s = this.mnemonic.toString();
                    let n = 0;
                    this.seed = this.mnemonic.toSeed();
                    const a = Array.from(this).map(e => async () => {
                            e.setBus(t.$bus), e.transactions.length > 0 && (e.transactions = []), t.$bus.$emit(C.WALLETS.START_LOADING, e);
                            try {
                                await e.loadWallet(this.seed, s)
                            } catch (r) {
                                throw t.$bus.$emit(C.WALLETS.RAISE_LOADING_ERROR, {
                                    wallet: e.name
                                }), new p.WalletsCollectionError({
                                    type: A.WALLET_ERROR,
                                    error: r,
                                    instance: e
                                })
                            }
                            t.$bus.$emit(C.WALLETS.UPDATE_LOADING_PROGRESS, {
                                progress: ++n
                            }), t.$bus.$emit(C.WALLETS.FINISH_LOADING, e), "function" == typeof e.fetchUserTokens && e.fetchUserTokens(this), await e.fakeThrow().catch(e => console.warn(e))
                        }),
                        i = new w.default(a, r);
                    await i.execute(), t.$bus.$emit(C.WALLETS.FINISH_LOADING_ALL), this.disabledSockets || this.enableSockets()
                }
                async loadWalletsByKeys(e, t, r, s = 5) {
                    this.phrase = r;
                    const n = e.filter(e => e.privateKey),
                        a = n.length,
                        i = Array.from(this).filter(e => {
                            const t = (r = e.id, n.findIndex(({
                                id: e,
                                alias: t
                            }) => r === e && "atomic" === t));
                            var r;
                            return e instanceof u.default && -1 === t
                        });
                    if (this.emitNewAtomicId(this.hash), this.balanceNotifier.hash = this.hash, i.length > 0) {
                        this.seed = this.BitcoreMnemonic(this.mnemonic.toString()).toSeed(), t.$emit(C.WALLETS.START_LOADING_ALL, i.length);
                        let e = 0;
                        const n = i.map(s => async () => {
                                t.$emit(C.WALLETS.START_LOADING, s);
                                try {
                                    await s.loadWallet(this.seed, r)
                                } catch (e) {
                                    t.$emit(C.WALLETS.RAISE_LOADING_ERROR, {
                                        wallet: s.name
                                    })
                                }
                                t.$emit(C.WALLETS.UPDATE_LOADING_PROGRESS, {
                                    progress: ++e
                                }), t.$emit(C.WALLETS.FINISH_LOADING, s), s.setBus(t), "function" == typeof s.fetchUserTokens && await s.fetchUserTokens(this)
                            }),
                            a = new w.default(n, s);
                        await a.execute(), t.$emit(C.WALLETS.FINISH_LOADING_ALL)
                    }
                    for (let e = 0; e < a; e += 1) {
                        const {
                            id: s,
                            address: a,
                            privateKey: i
                        } = n[e];
                        if (!s) return;
                        const o = this.getWallet(s);
                        if ((o || o instanceof u.default) && (o.setBus(t), o instanceof u.default)) {
                            if (a ? (o.setAddress(a), "EOS" !== o.ticker && "HBAR" !== o.ticker || (o.activated = !0)) : ("EOS" !== o.ticker && "HBAR" !== o.ticker || await o.loadWallet(this.seed, r), console.warn("loadWalletsByKeys", o.ticker, "does not have address")), i) try {
                                o.setPrivateKey(i, r)
                            } catch (e) {
                                await o.loadWallet(this.seed, r)
                            } else await o.loadWallet(this.seed, r), console.warn("loadWalletsByKeys", o.ticker, "does not have privateKey");
                            "function" == typeof o.fetchUserTokens && o.fetchUserTokens(this)
                        }
                    }
                    this.disabledSockets || this.enableSockets(), t.$emit("save::wallets"), t.$emit("save::mnemonic", this.mnemonic.toString())
                }
                async updateWalletNft(e) {
                    if (!e.address || !e.isNftSupported()) return;
                    clearTimeout(this.autoUpdateNftTimeouts[e.id]);
                    try {
                        var t;
                        const r = await e.getNftList();
                        await h.default.set(e, r), null === (t = e.bus) || void 0 === t || t.$emit("update::nft::list::wallet", {
                            ticker: e.ticker,
                            id: e.id
                        })
                    } catch (e) {
                        console.warn(e)
                    }
                    const r = B["nft"];
                    this.autoUpdateNftTimeouts[e.id] = setTimeout(() => this.updateWalletNft(e), r)
                }
                initUpdateNft() {
                    let e = null;
                    return Promise.allSettled(Array.from(this).map(t => (e = t.bus, !this.autoUpdateNftTimeouts[t.id] && this.updateWalletNft(t)))).then(t => {
                        var r;
                        return null === (r = e) || void 0 === r || r.$emit("update::nft::all"), t
                    })
                }
                stopUpdateNft() {
                    Object.keys(this.autoUpdateNftTimeouts).forEach(e => {
                        clearTimeout(this.autoUpdateNftTimeouts[e]), delete this.autoUpdateNftTimeouts[e]
                    })
                }
                async fetchTransactions(e, t) {
                    try {
                        if (e.address || await e.loadWallet(this.seed, this.phrase), !e.address) throw new Error(e.id + " address is not set");
                        return e.getTransactions({
                            address: e.address,
                            pageNum: t
                        })
                    } catch (e) {
                        return []
                    }
                }
                async initUpdateTransactions() {
                    if (clearTimeout(this.autoUpdateTransactionsCounter), !this.autoUpdateTransactions) return;
                    const e = await this.getTransactions().catch(e => console.warn(e));
                    e && (this.transactions = e), this.autoUpdateTransactionsCounter = setTimeout(() => {
                        this.initUpdateTransactions()
                    }, 6e4)
                }
                initUpdateBalances() {
                    this.updateBalanceTrackingConfig(), clearTimeout(this.autoUpdateBalancesCounter), this.autoUpdateBalances && k.requestQueueState.waitForPermitted(k.REQUEST_TYPE.INITIAL_BALANCES).then(() => {
                        const e = [];
                        for (let t = 0; t < this.length; t += 1) {
                            const r = this[t];
                            if (this.isWalletActive(r)) try {
                                const t = r.getInfo();
                                e.push(t), t.then(() => {
                                    var e;
                                    null === (e = r.bus) || void 0 === e || e.$emit("update", {
                                        ticker: r.ticker,
                                        alias: r.alias,
                                        id: r.id
                                    }), this.setActivityChecked(r, d.ACTIVITY_TYPES.balance, r.balance > 0)
                                }).catch(e => console.warn(e))
                            } catch (e) {
                                console.warn(`[updateBalancesCycle] ${this[t].ticker} update crashed:`, e)
                            }
                        }
                        k.requestQueueState.setAsCompleted(k.REQUEST_TYPE.INITIAL_BALANCES), this.autoUpdateBalancesCounter = setTimeout(() => {
                            this.initUpdateBalances()
                        }, 6e4)
                    })
                }
                loadTransactions(e) {
                    const t = e.length;
                    for (let r = 0; r < t; r += 1) {
                        const t = e[r],
                            s = t.walletid && "undefined" !== t.walletid ? this.getWallet(t.walletid) : null;
                        if (s) {
                            const e = t.otherSideAddress || t.recepient;
                            d.default.setChecked(s, d.ACTIVITY_TYPES.history, !0), this.transactions = [new T.default({
                                ticker: s.ticker,
                                parent: s.deprecatedParent,
                                name: s.name,
                                walletid: s.id,
                                explorer: t.explorer,
                                txid: t.txid,
                                txType: t.txType,
                                direction: t.direction,
                                otherSideAddress: e,
                                amount: t.amount,
                                datetime: new Date(Number(t.timestamp)),
                                memo: t.memo || "",
                                nonce: t.nonce,
                                confirmations: Number(t.confirmations) || 0,
                                alias: s.alias,
                                fee: t.fee || null,
                                feeTicker: t.feeTicker || ""
                            })]
                        }
                    }
                }
                getSumBalance(e) {
                    return Array.from(this).reduce((t, r) => t + Number(r.balance) * e.getRate(r.ticker), 0)
                }
                findWallet(e, t = "atomic", r) {
                    return [...this.store.walletsCollection[t].values()].find(({
                        ticker: t,
                        contract: s
                    }) => t.toLowerCase() === (null == e ? void 0 : e.toLowerCase()) && (!r || (null == s ? void 0 : s.toLowerCase()) === r.toLowerCase()))
                }
                findWalletV2({
                    ticker: e = "",
                    alias: t = "atomic",
                    contract: r = "",
                    parentTicker: s = ""
                }) {
                    const n = [...this.store.walletsCollection[t].values()].filter(t => {
                        var s;
                        return t.ticker.toLowerCase() === (null == e ? void 0 : e.toLowerCase()) && (!r || (null === (s = t.contract) || void 0 === s ? void 0 : s.toLowerCase()) === r.toLowerCase())
                    });
                    return n.length > 1 && s ? n.find(({
                        deprecatedParent: e
                    }) => e.toLowerCase() === s.toLowerCase()) : n[0]
                }
                getWallet(e, t = "atomic") {
                    if (!e) throw new Error("The ticker/id ");
                    return this.store.walletsCollection[t].get(e.toUpperCase())
                }
                getWalletByParams({
                    ticker: e,
                    contract: t,
                    address: r,
                    parent: s,
                    network: n,
                    chainId: a,
                    alias: i = "atomic"
                }) {
                    var o;
                    return null !== (o = this.getAllWalletsByParams({
                        ticker: e,
                        contract: t,
                        parent: s,
                        address: r,
                        network: n,
                        chainId: a,
                        alias: i
                    })[0]) && void 0 !== o ? o : null
                }
                getAllWalletsByParams({
                    ticker: e,
                    contract: t,
                    address: r,
                    parent: s,
                    network: n,
                    chainId: a,
                    alias: i = "atomic"
                }) {
                    const o = [];
                    return this.store.walletsCollection[i].forEach(i => {
                        i.isMatch({
                            ticker: e,
                            contract: t,
                            address: r,
                            parent: s,
                            network: n,
                            chainId: a
                        }) && o.push(i)
                    }), o
                }
                get transactions() {
                    const e = [];
                    Array.from(this).forEach(t => {
                        e.push(t.transactions)
                    });
                    const t = [].concat.apply([], e.filter(Boolean));
                    return (0, i.default)(t.filter(({
                        datetime: e
                    }) => !Number.isNaN(new Date(e).getTime()))).desc(e => e.datetime)
                }
                set transactions(e) {
                    e.forEach(e => {
                        const t = e.walletid && this.getWallet(e.walletid, e.alias);
                        if (void 0 !== t && t.transactions)
                            if (t.transactions.find(({
                                    txid: t
                                }) => e.txid === t)) {
                                const r = t.transactions.findIndex(({
                                    txid: t
                                }) => e.txid === t);
                                t.transactions[r] = e
                            } else t.transactions.push(e)
                    })
                }
                removeTransaction(e) {
                    const t = this.transactions.find(({
                        txid: t
                    }) => t === e.txid);
                    if (t) {
                        const r = this.getWallet(t.walletid),
                            s = r.transactions.findIndex(({
                                txid: r
                            }) => e.txid === t.txid);
                        s >= 0 && r.transactions.splice(s, 1)
                    }
                }
                async getTransactionsByWallet(e, t = 5) {
                    if (!this.isWalletActive(e)) return [];
                    const r = [],
                        s = e.bus;
                    let n, a = 0;
                    const o = e.getTxLimit(),
                        c = new Set(["ETH", "AVAX", "BSC", "THETA", "TRX", "BNB"]),
                        l = e instanceof v.default && c.has(e.deprecatedParent) ? this.getWallet(e.deprecatedParent) : e;
                    do {
                        if (n = await this.fetchTransactions(l, a++), await g.default.filterAndUpdateTransactions(n), n && n.length > 0) {
                            r.push(...n);
                            const {
                                topic: e,
                                payload: t
                            } = (0, E.HISTORY_WALLET_UPDATED)(l.id, n);
                            P.default.emit(e, t)
                        }
                        null == s || s.$emit("update::wallet-transactions", {
                            ticker: e.ticker,
                            alias: e.alias
                        })
                    } while (n.length >= o && a < t);
                    this.setActivityChecked(e, d.ACTIVITY_TYPES.history, r.length > 0), s && s.$emit("transactions::end-update");
                    const u = await g.default.selectTransactions({
                            ticker: e.ticker,
                            walletid: e.id,
                            alias: "atomic"
                        }),
                        h = null == u ? void 0 : u.filter(({
                            amount: e
                        }) => "0" !== e).sort((e, t) => e.txType > t.txType ? 1 : -1).sort((e, t) => t.datetime.getTime() > e.datetime.getTime() ? 1 : -1);
                    return (0, i.default)(h || []).desc(e => e.datetime)
                }
                async getTransactions() {
                    if (this.transactionsLoading) return console.error(new Error("Transactions history update is not yet finished, new request is canceled.")), null;
                    this.transactionsLoading = !0, await k.requestQueueState.waitForPermitted(k.REQUEST_TYPE.INITIAL_TRANSACTIONS);
                    const e = [],
                        t = Array.from(this).filter(e => e instanceof u.default);
                    let r = null;
                    for (let s = t.length - 1; s >= 0; s -= 1) {
                        const n = t[s],
                            a = n.bus;
                        if (this.isWalletActive(n)) {
                            a && !r && (r = a, r.$emit("transactions::start-update"));
                            try {
                                const t = await this.fetchTransactions(n);
                                if (await g.default.filterAndUpdateTransactions(t), t && t.length > 0) {
                                    e.push(...t);
                                    const {
                                        topic: r,
                                        payload: s
                                    } = (0, E.HISTORY_WALLET_UPDATED)(n.id, t);
                                    P.default.emit(r, s)
                                }
                                this.setActivityChecked(n, d.ACTIVITY_TYPES.history, t.length > 0), a && a.$emit("update::wallet-transactions", {
                                    ticker: n.ticker,
                                    alias: n.alias
                                })
                            } catch (e) {
                                console.warn(e)
                            }
                        }
                    }
                    return r && r.$emit("transactions::end-update"), this.transactionsLoading = !1, k.requestQueueState.setAsCompleted(k.REQUEST_TYPE.INITIAL_TRANSACTIONS), (0, i.default)(e).desc(e => e.datetime).filter(Boolean)
                }
                enableSockets() {
                    const e = {
                        id: this.hash,
                        addresses: Array.from(this).map(e => e.socket && e.address ? {
                            ticker: e.ticker,
                            address: e.address,
                            name: e.name,
                            parent: e.deprecatedParent,
                            contract: e.contract
                        } : null).filter(Boolean),
                        platform: y.default.getPlatform(),
                        appVersion: y.default.getVersion()
                    };
                    this.socket = new b.default(e), this.balanceNotifier.socket = this.socket.socket, this.store.walletsCollection.atomic.forEach(e => {
                        e instanceof u.default && "function" == typeof e.connectSocket && this.isWalletActive(e) && e.connectSocket()
                    })
                }
                disableSockets() {
                    this.store.walletsCollection.atomic.forEach(e => {
                        "function" == typeof e.disconnectSocket && e.disconnectSocket()
                    })
                }
                async updateBalances() {
                    if (this.updateProcessFlag) return console.warn("Update is cancelled"), null;
                    this.updateProcessFlag = !0, await k.requestQueueState.waitForPermitted(k.REQUEST_TYPE.INITIAL_BALANCES);
                    const e = Array.from(this).filter(e => e instanceof u.default);
                    let t = null;
                    const r = [];
                    for (let t = 0; t < e.length; t += 1) {
                        const s = e[t];
                        if (this.isWalletActive(s)) {
                            const e = s.getInfo();
                            r.push(e), e.then(() => this.setActivityChecked(s, d.ACTIVITY_TYPES.balance, s.balance > 0))
                        }
                    }
                    const s = await Promise.allSettled(r);
                    return s.forEach((r, s) => {
                        "rejected" === r.status && (e[s].divisibleBalance = null, e[s].balance = null);
                        const n = e[s].bus;
                        n && (t || (t = n), n.$emit("update", {
                            ticker: e[s].ticker,
                            alias: e[s].alias,
                            id: e[s].id
                        }))
                    }), this.updateProcessFlag = !1, t && t.$emit("update::balances"), k.requestQueueState.setAsCompleted(k.REQUEST_TYPE.INITIAL_BALANCES), s
                }
                getHiddenWallets() {
                    const e = [];
                    return this.store.walletsCollection.atomic.forEach(t => {
                        !1 !== t.visibility || t.isCustom || e.push(t)
                    }), e
                }
                getTickers(e = "atomic") {
                    return Array.from(this.store.walletsCollection[e].entries()).map(([e, t]) => t.ticker)
                }
                emitNewAtomicId(e) {
                    P.default.emit(C.WALLETS.NEW_ATOMIC_ID, {
                        atomicId: e
                    })
                }
                async getFilters() {
                    try {
                        return await x.filtersAndGroupsConfig.load(), x.filtersAndGroupsConfig.getFilterNames()
                    } catch (e) {
                        return m.default.error({
                            instance: this,
                            error: e
                        }), []
                    }
                }
                async getWalletsByFilter(e) {
                    if (!e) throw new Error("filterName is not defined");
                    try {
                        await x.filtersAndGroupsConfig.load();
                        return x.filtersAndGroupsConfig.getCoinsForFilter(e).reduce((e, t) => {
                            const r = this.findWalletV2({
                                ...t
                            });
                            return r && e.push(r), e
                        }, [])
                    } catch (e) {
                        return m.default.error({
                            instance: this,
                            error: e
                        }), []
                    }
                }
                async getAvailableWalletsByFilter(e, t = []) {
                    try {
                        return (await this.getWalletsByFilter(e)).filter(e => t.includes(e.id))
                    } catch (e) {
                        return m.default.error({
                            instance: this,
                            error: e
                        }), []
                    }
                }
                async getWalletsGrouped() {
                    await x.filtersAndGroupsConfig.load();
                    return x.filtersAndGroupsConfig.getGroups().reduce((e, t) => {
                        const r = {
                            name: t.name,
                            coins: []
                        };
                        e.push(r);
                        const s = t.coins.map(e => this.findWalletV2({
                            ...e
                        }));
                        return r.coins.concat(s), e
                    }, [])
                }
                async replaceStubCoinWithOriginal({
                    id: e
                }) {
                    const t = this.getWallet(e);
                    if ("function" != typeof t.loadOriginal) throw new TypeError("`loadOriginal` function is unavaiable for instance: " + t);
                    const r = await t.loadOriginal();
                    return await r.loadWallet(this.BitcoreMnemonic(this.mnemonic.toString()).toSeed(), this.phrase), this[this.indexOf(t)] = r, this.store.walletsCollection[t.alias].set(t.id.toUpperCase(), r), P.default.emit(C.WALLETS.UPDATE), r.getInfo(), "function" == typeof r.loadTokensList ? r.loadTokensList(this) : Promise.resolve("no tokens found")
                }
            }
            t.default = Wallets
        },
        4104: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var s = {
                BTCCoin: () => r.e(323).then(r.t.bind(null, 5396, 7)),
                ETHCoin: () => r.e(261).then(r.t.bind(null, 5397, 7)),
                FLRCoin: () => r.e(259).then(r.t.bind(null, 5398, 7)),
                EGLDCoin: () => Promise.all([r.e(283), r.e(304), r.e(305), r.e(239)]).then(r.t.bind(null, 5399, 7)),
                BNBCoin: () => Promise.all([r.e(289), r.e(303), r.e(250), r.e(253), r.e(254)]).then(r.t.bind(null, 5400, 7)),
                DOGECoin: () => r.e(342).then(r.t.bind(null, 5401, 7)),
                SOLCoin: () => r.e(318).then(r.t.bind(null, 5402, 7)),
                ADACoin: () => r.e(335).then(r.t.bind(null, 5403, 7)),
                ZILCoin: () => r.e(298).then(r.t.bind(null, 5404, 7)),
                MATICCoin: () => r.e(262).then(r.t.bind(null, 5405, 7)),
                DOTCoin: () => Promise.all([r.e(3), r.e(13), r.e(12), r.e(11), r.e(14), r.e(5), r.e(6), r.e(16), r.e(8), r.e(9), r.e(17), r.e(15), r.e(10), r.e(7), r.e(2), r.e(1), r.e(0), r.e(24), r.e(23), r.e(343)]).then(r.t.bind(null, 5406, 7)),
                BSCCoin: () => r.e(258).then(r.t.bind(null, 5407, 7)),
                TRXCoin: () => Promise.all([r.e(25), r.e(21), r.e(20), r.e(26), r.e(287)]).then(r.t.bind(null, 5408, 7)),
                XRPCoin: () => Promise.all([r.e(314), r.e(238), r.e(267), r.e(307), r.e(225)]).then(r.t.bind(null, 5409, 7)),
                ATOMCoin: () => r.e(337).then(r.t.bind(null, 5410, 7)),
                BANDCoin: () => r.e(338).then(r.t.bind(null, 5411, 7)),
                ICXCoin: () => r.e(324).then(r.t.bind(null, 5412, 7)),
                LTCCoin: () => r.e(351).then(r.t.bind(null, 5413, 7)),
                NEOCoin: () => Promise.all([r.e(27), r.e(354)]).then(r.t.bind(null, 5414, 7)),
                ONGCoin: () => r.e(355).then(r.t.bind(null, 5415, 7)),
                ONTCoin: () => r.e(356).then(r.t.bind(null, 5416, 7)),
                RVNCoin: () => r.e(358).then(r.t.bind(null, 5417, 7)),
                XLMCoin: () => Promise.all([r.e(273), r.e(285), r.e(311)]).then(r.t.bind(null, 5418, 7)),
                XTZCoin: () => Promise.resolve().then(r.t.bind(null, 2074, 7)),
                XVGCoin: () => Promise.all([r.e(279), r.e(280), r.e(316), r.e(290), r.e(360)]).then(r.t.bind(null, 5419, 7)),
                ETCCoin: () => r.e(282).then(r.t.bind(null, 5420, 7)),
                ZECCoin: () => r.e(247).then(r.t.bind(null, 5421, 7)),
                VETCoin: () => r.e(297).then(r.t.bind(null, 5422, 7)),
                XEMCoin: () => r.e(359).then(r.t.bind(null, 5423, 7)),
                KMDCoin: () => r.e(246).then(r.t.bind(null, 5424, 7)),
                ALGOCoin: () => r.e(322).then(r.t.bind(null, 5425, 7)),
                DASHCoin: () => Promise.all([r.e(299), r.e(272), r.e(313), r.e(308), r.e(268), r.e(286)]).then(r.t.bind(null, 5426, 7)),
                HBARCoin: () => r.e(348).then(r.t.bind(null, 5427, 7)),
                QTUMCoin: () => Promise.all([r.e(275), r.e(276), r.e(302), r.e(363)]).then(r.t.bind(null, 5428, 7)),
                NANOCoin: () => r.e(312).then(r.t.bind(null, 5429, 7)),
                WAVESCoin: () => Promise.all([r.e(263), r.e(218), r.e(309), r.e(264), r.e(291), r.e(232), r.e(292), r.e(266), r.e(321), r.e(277), r.e(293), r.e(306), r.e(234), r.e(235)]).then(r.t.bind(null, 5430, 7)),
                ARKCoin: () => Promise.all([r.e(221), r.e(271), r.e(300), r.e(328), r.e(251), r.e(240), r.e(301), r.e(243), r.e(294), r.e(255), r.e(284), r.e(274), r.e(288), r.e(315), r.e(310)]).then(r.t.bind(null, 5431, 7)),
                BCHCoin: () => Promise.all([r.e(18), r.e(22), r.e(19), r.e(339)]).then(r.t.bind(null, 5432, 7)),
                BSVCoin: () => Promise.all([r.e(18), r.e(22), r.e(19), r.e(340)]).then(r.t.bind(null, 5433, 7)),
                BTGCoin: () => r.e(244).then(r.t.bind(null, 5434, 7)),
                DCRCoin: () => Promise.all([r.e(278), r.e(249), r.e(295), r.e(362)]).then(r.t.bind(null, 5435, 7)),
                DGBCoin: () => r.e(341).then(r.t.bind(null, 5436, 7)),
                XMRCoin: () => Promise.resolve().then(r.t.bind(null, 2003, 7)),
                EOSCoin: () => r.e(344).then(r.t.bind(null, 5437, 7)),
                GASCoin: () => Promise.all([r.e(27), r.e(347)]).then(r.t.bind(null, 5438, 7)),
                NEO3Coin: () => Promise.all([r.e(28), r.e(353)]).then(r.t.bind(null, 5439, 7)),
                GAS3Coin: () => Promise.all([r.e(28), r.e(346)]).then(r.t.bind(null, 5440, 7)),
                NEARCoin: () => r.e(317).then(r.t.bind(null, 5441, 7)),
                AVAXCoin: () => r.e(281).then(r.t.bind(null, 5442, 7)),
                LUNCCoin: () => r.e(325).then(r.t.bind(null, 5443, 7)),
                LUNACoin: () => r.e(352).then(r.t.bind(null, 5444, 7)),
                THETACoin: () => r.e(296).then(r.t.bind(null, 5445, 7)),
                APTCoin: () => r.e(336).then(r.t.bind(null, 5446, 7)),
                OSMOCoin: () => r.e(357).then(r.t.bind(null, 5447, 7)),
                KAVACoin: () => r.e(350).then(r.t.bind(null, 5448, 7)),
                FTMCoin: () => r.e(260).then(r.t.bind(null, 5449, 7)),
                TONCoin: () => r.e(326).then(r.t.bind(null, 5450, 7)),
                FETCoin: () => r.e(345).then(r.t.bind(null, 5451, 7)),
                FILCoin: () => Promise.all([r.e(25), r.e(21), r.e(20), r.e(26), r.e(241)]).then(r.t.bind(null, 5452, 7)),
                OPCoin: () => r.e(257).then(r.t.bind(null, 5453, 7)),
                INJCoin: () => r.e(349).then(r.t.bind(null, 5454, 7)),
                ARBCoin: () => r.e(265).then(r.t.bind(null, 5455, 7))
            };
            t.default = s
        },
        4123: function(e, t, r) {
            "use strict";
            var s = r(2);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var n = s(r(4124)),
                a = r(29),
                i = r(26);
            var o = e => class extends e {
                async loadWallet(e, t) {
                    const r = n.default.HDNode.fromSeedBuffer(e, n.default.bitcoin).derivePath(this.derivation),
                        {
                            keyPair: s
                        } = r.derive(0);
                    if (!s) throw new a.WalletError({
                        type: i.WALLET_ERROR,
                        error: new Error("can't derive private key"),
                        instance: this
                    });
                    return this.setPrivateKey(s.toWIF()), this
                }
                getAddress() {
                    return this.account ? this.account.address : new a.WalletError({
                        type: i.WALLET_ERROR,
                        error: new Error("this.account is empty"),
                        instance: this
                    })
                }
                async validateAddress(e) {
                    if (!e) return !1;
                    const t = "NEO3" === this.id ? "N" : "A";
                    return e[0] === t && this.coreLib.wallet.isAddress(e)
                }
                async createTransaction({
                    address: e,
                    amount: t,
                    asset: r
                }) {
                    r || (r = this.ticker), "GAS" === r.toUpperCase() && (t = this.toCurrencyUnit(t, 8));
                    const s = await this.coreLib.api.makeIntent({
                        [r.toUpperCase()]: t
                    }, e);
                    return JSON.stringify(s)
                }
                async sendTransaction(e) {
                    const t = new this.coreLib.api.neoscan.instance("MainNet"),
                        r = JSON.parse(e);
                    try {
                        const {
                            response: {
                                result: e,
                                txid: s
                            }
                        } = await this.coreLib.default.sendAsset({
                            api: t,
                            account: this.account,
                            intents: r
                        });
                        if (!e) throw new a.ExplorerRequestError({
                            type: i.SEND_TRANSACTION_TYPE,
                            error: new Error("sendTransaction return false"),
                            instance: this
                        });
                        return {
                            txid: s
                        }
                    } catch (e) {
                        throw new a.ExplorerRequestError({
                            type: i.SEND_TRANSACTION_TYPE,
                            error: e,
                            instance: this
                        })
                    }
                }
                async getInfo() {
                    const {
                        balance: e,
                        balances: t
                    } = await this.explorer.getInfo(this.address);
                    return this.balance = e, this.balances = t, {
                        balance: e,
                        balances: t
                    }
                }
                async sendAllToMyself() {
                    let e, t;
                    this.balances.neo > 0 ? (t = "neo", e = this.balances.neo) : this.balances.gas > 0 && (t = "gas", e = this.toMinimalUnit(this.balances.gas, 8));
                    const r = await this.createTransaction({
                        address: this.address,
                        amount: e,
                        asset: t
                    });
                    return this.sendTransaction(r)
                }
                async claim() {
                    try {
                        if (!this.privateKey) throw new Error(`[${this.ticker}] claim: no private key`);
                        await this.getInfo(this.address), await this.sendAllToMyself(), await new Promise((e, t) => setTimeout(e, 5e3));
                        const e = new this.coreLib.api.neoscan.instance("MainNet");
                        return {
                            txid: (await this.coreLib.default.claimGas({
                                api: e,
                                account: this.account
                            })).response.txid
                        }
                    } catch (e) {
                        throw new a.ExplorerRequestError({
                            type: i.SEND_TRANSACTION_TYPE,
                            error: e,
                            instance: this
                        })
                    }
                }
                async waitUntilConfirmed(e) {
                    let t = !1,
                        r = 0;
                    do {
                        try {
                            await new Promise((e, t) => setTimeout(e, 5e3)), await this.getTransaction(e), t = !0
                        } catch (e) {
                            if (r >= 5) throw console.error(`[${this.ticker}] waitUntilConfirmed: max tries count reached`), e
                        }
                        r++
                    } while (r < 5 && !t)
                }
                get instance() {
                    return {
                        id: this.id,
                        ticker: this.ticker,
                        name: this.name,
                        alias: this.alias,
                        assetName: this.assetName,
                        decimal: this.decimal,
                        coreLib: this.coreLib,
                        toCurrencyUnit: e => this.toCurrencyUnit(e),
                        toMinimalUnit: e => this.toMinimalUnit(e),
                        BN: this.BN
                    }
                }
                async swap({
                    amount: e,
                    asset: t = this.ticker
                }) {
                    const {
                        api: r,
                        tx: s
                    } = this.coreLib, {
                        wallet: n
                    } = this.coreLib3, a = this.account, i = r.makeIntent({
                        [t]: e
                    }, "ANeo2toNeo3MigrationAddressxwPB2Hz"), o = new this.coreLib.api.neoscan.instance("MainNet"), d = await o.getBalance(a.address), c = {
                        url: o,
                        account: a,
                        balance: d,
                        intents: i,
                        fees: e > 10 ? 0 : 1,
                        signingCallback: r.signWithPrivateKey(this.privateKey)
                    }, l = await r.createContractTx(c), u = new n.Account(this.privateKey);
                    l.tx.addAttribute(s.TxAttrUsage.Remark14, Buffer.from(u.address).toString("hex")), await r.signTx(l);
                    return {
                        txid: (await r.sendTx(c)).response.txid
                    }
                }
                setPrivateKey(e) {
                    this.privateKey = e, this.account = new this.coreLib.wallet.Account(e), this.address = this.account.address
                }
            };
            t.default = o
        },
        4151: function(e, t, r) {
            "use strict";
            var s = r(2);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var n = r(1541),
                a = s(r(4152)),
                i = r(29);
            var o = e => class extends e {
                constructor(e) {
                    super(e), this.gasLimit = e && e.feeData.gasLimit || "25000", this.gasPrice = e && e.feeData.gasPrice || "3500"
                }
                async loadWallet(e, t) {
                    const r = n.Crypto.PrivateKey.generateFromMnemonic(t, this.derivation);
                    if (!r) throw new Error(this.ticker + " can't get a privateKey!!!");
                    const s = r.getPublicKey(),
                        a = n.Crypto.Address.fromPubKey(s);
                    return this.privateKey = r.serializeWIF(), this.address = a.toBase58(), this
                }
                getFee() {
                    return new this.BN(this.gasLimit).mul(new this.BN(this.gasPrice))
                }
                getAddress() {
                    if (this.privateKey) {
                        const e = this.getPrivateKeyObject().getPublicKey();
                        return n.Crypto.Address.fromPubKey(e).toBase58()
                    }
                    throw new Error(this.ticker + " privateKey is empty!!!")
                }
                async validateAddress(e) {
                    if (!e) return !1;
                    try {
                        const {
                            prefix: t
                        } = a.default.decode(e, "hex");
                        return t === n.CONST.ADDR_VERSION
                    } catch (e) {
                        return !1
                    }
                }
                async createTransaction({
                    address: e,
                    amount: t,
                    asset: r
                }) {
                    r || (r = this.ticker);
                    const s = this.getPrivateKeyObject(),
                        a = new n.Crypto.Address(this.address),
                        i = new n.Crypto.Address(e),
                        o = n.OntAssetTxBuilder.makeTransferTx(r, a, i, Number(t), "3500", "25000");
                    return n.TransactionBuilder.signTransaction(o, s), o.serialize()
                }
                getPrivateKeyObject() {
                    return n.Crypto.PrivateKey.deserializeWIF(this.privateKey)
                }
                async sendAllToMyself(e) {
                    const t = await this.createTransaction({
                        address: this.address,
                        amount: "ONT" === e ? this.toMinimalUnit(this.balances.ont, 0) : this.toMinimalUnit(this.balances.ong, 9),
                        asset: e
                    });
                    return this.sendTransaction(t)
                }
                async checkUnbondSendTxAndRefreshBalance() {
                    return this.balances.ont > 0 ? await this.sendAllToMyself("ONT") : this.balances.ong > 0 && await this.sendAllToMyself("ONG"), await new Promise(e => setTimeout(e, 5e3)), this.getInfo()
                }
                async checkRewardAndClaim() {
                    const e = this.createClaimTransaction(this.balances.rewards);
                    return this.sendTransaction(e)
                }
                async makeClaim() {
                    const e = Number(this.balances.unbonding) + Number(this.balances.rewards);
                    if (e < .03) throw new Error(`Unbonding + rewards ${e} ONG is less then 0.03 ONG`);
                    if (Number(this.balances.ong) <= Number(this.fee)) throw new Error(`${this.balances.ong} ONG is available, but needed ${this.fee} ONG to pay for fee`);
                    return await this.checkUnbondSendTxAndRefreshBalance(), this.checkRewardAndClaim()
                }
                async getInfo() {
                    const {
                        balances: e
                    } = await this.explorer.getInfo(this.address), t = this.ticker.toLowerCase();
                    return e.available = e[t], this.balance = this.toMinimalUnit(e[t]), this.balances = e, {
                        balance: this.balance,
                        balances: this.balances
                    }
                }
                createClaimTransaction(e) {
                    const t = new n.Crypto.Address(this.address),
                        r = this.toMinimalUnit(e, 9),
                        s = n.OntAssetTxBuilder.makeWithdrawOngTx(t, t, r, t, "2500", "" + n.CONST.DEFAULT_GAS_LIMIT),
                        a = this.getPrivateKeyObject();
                    return n.TransactionBuilder.signTransaction(s, a), s.serialize()
                }
                async claim() {
                    try {
                        if (!this.address) throw new Error("No coin address");
                        if (this.balances || await this.getInfo(this.address), this.balances.rewards) return await this.makeClaim();
                        throw new Error("No rewards")
                    } catch (e) {
                        throw new i.ExplorerRequestError({
                            type: "Send",
                            error: e,
                            instance: this
                        })
                    }
                }
            };
            t.default = o
        },
        4155: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var s = r(95);
            var n = e => class extends e {
                async createTransaction({
                    address: e,
                    amount: t,
                    asset: r = this.ticker
                }) {
                    const s = "NEO" === r ? "NeoToken" : "GasToken",
                        n = {
                            from: this.account,
                            to: e,
                            integerAmt: Number(t),
                            contractHash: this.coreLib.CONST.NATIVE_CONTRACT_HASH[s]
                        },
                        a = new this.coreLib.api.TransactionBuilder;
                    a.addNep17Transfer(n.from, n.to, n.contractHash, n.integerAmt);
                    const i = a.build(),
                        o = await this.getProvider("node").getClient(),
                        d = await this.coreLib.api.NetworkFacade.fromConfig({
                            node: o
                        });
                    if (!(await d.validate(i)).valid) throw new Error("NEO: Unable to validate transaction");
                    const c = {
                        signingCallback: this.coreLib.api.signWithAccount(this.account)
                    };
                    return d.sign(i, c)
                }
                async sendTransaction(e) {
                    return {
                        txid: await this.getProvider("node").sendRawTransaction(e)
                    }
                }
                async getInfo() {
                    const {
                        balance: e,
                        balances: t
                    } = await this.getProvider("balance").getInfo(this.address);
                    return this.balance = this.toMinimalUnit(e || 0), this.balances = t, {
                        balance: e,
                        balances: t
                    }
                }
                get instance() {
                    return {
                        id: this.id,
                        ticker: this.ticker,
                        name: this.name,
                        alias: this.alias,
                        assetName: this.assetName,
                        decimal: this.decimal,
                        coreLib: this.coreLib,
                        toCurrencyUnit: e => this.toCurrencyUnit(e),
                        toMinimalUnit: e => this.toMinimalUnit(e)
                    }
                }
                async getFee({
                    sendAmount: e
                }) {
                    const [{
                        feePerByte: t,
                        executionFeeFactor: r
                    }, n] = await Promise.all([this.getProvider("node").getFeeInformation(this.coreLib.api), this.createTransaction({
                        address: this.address,
                        amount: e
                    })]), a = this.coreLib.api.calculateNetworkFee(n, t, r);
                    return (0, s.toCurrency)(a.toString(), 8)
                }
            };
            t.default = n
        },
        4156: function(e, t, r) {
            "use strict";
            var s = r(2);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var n = s(r(4157));
            var a = e => class extends e {
                createSmartContractCall({
                    type: e = "ERC20",
                    smartContractAddress: t,
                    standard: r = !1,
                    action: s,
                    args: a = []
                } = {}) {
                    var i;
                    if (!e) throw new Error("One of supported 'type' should be defined: [" + Object.keys(n.default).toString());
                    if (!t) throw new Error("argument `smartContractAddress` should be defined!");
                    const o = null === (i = n.default[e.toUpperCase()]) || void 0 === i ? void 0 : i[r ? "standard" : t.toLowerCase()];
                    if (!o) throw new Error(`Smart-contract ${e.toUpperCase()} ${t} is not supported`);
                    const {
                        name: d,
                        params: c
                    } = o.methods[s] || {};
                    if (!d) throw new Error(`Smart-contract action '${s}' is not supported, supported actions: [${Object.keys(o.methods).toString()}]`);
                    if ((null == c ? void 0 : c.length) > a.length) throw new Error(`Smart-contract parameters should include ${c.length} values, got ${a.length}`);
                    const l = o.abi;
                    if (!l) throw new Error(`No such ${e} ABI found for ${t}`);
                    const u = new this.coreLibrary.eth.Contract(l, t, a);
                    if ("function" != typeof u.methods[d]) throw new TypeError(`${this.constructor.name}: "${d}" is not implemented in provided smart-contract ABI methods`);
                    return u.methods[d](...a).encodeABI()
                }
                makeRawCall(e, t, r, s = []) {
                    return new this.coreLibrary.eth.Contract(e, t).methods[r](...s).call()
                }
            };
            t.default = a
        },
        4160: function(e, t, r) {
            "use strict";
            var s = r(2);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var n = s(r(35)),
                a = r(29),
                i = r(26);
            var o = e => class extends e {
                get instance() {
                    return {
                        id: this.id,
                        ticker: this.ticker,
                        name: this.name,
                        decimal: this.decimal,
                        alias: this.alias,
                        parent: this.id,
                        BN: n.default,
                        toCurrencyUnit: e => this.toCurrencyUnit(e),
                        toMinimalUnit: e => this.toMinimalUnit(e),
                        coreLibrary: this.coreLibrary,
                        getAddressFromPublicKey: e => this.getAddressFromPublicKey(e),
                        getScriptPubKey: () => this.coreLibrary.address.toOutputScript(this.address, this.network).toString("hex"),
                        feeCoefficient: this.coefficient,
                        feeDefault: this.feeData && this.feeData.fee
                    }
                }
                loadWallet(e) {
                    return new Promise((t, r) => {
                        const s = this.coreLibrary.HDNode.fromSeedBuffer(e, this.network).derivePath(this.derivation);
                        s.keyPair || r(new a.WalletError({
                            type: i.WALLET_ERROR,
                            error: new Error("can't get a privateKey!"),
                            instance: this
                        })), this.privateKey = s.keyPair.toWIF(), this.address = s.keyPair.getAddress(), t(this)
                    })
                }
                getAddress(e = this.privateKey) {
                    return e ? this.getKeyForSignFromPrivateKey(e).getAddress() : new a.WalletError({
                        type: i.WALLET_ERROR,
                        error: new Error("privateKey is empty!"),
                        instance: this
                    })
                }
                async validateAddress(e) {
                    if (!e) return !1;
                    try {
                        return this.coreLibrary.address.toOutputScript(e, this.network), !0
                    } catch (e) {
                        return !1
                    }
                }
                getTransactionBuilder() {
                    return new this.coreLibrary.TransactionBuilder(this.network)
                }
                addInput(e, t) {
                    e.addInput(t.txId, t.outputIndex)
                }
                signInput(e, t, r, s) {
                    e.sign(r, t)
                }
                async createClaimTransaction(e) {
                    const t = this.getAddress(e);
                    if (!t || 0 === t.length) throw new a.WalletError({
                        type: i.WALLET_ERROR,
                        error: new Error("can't get a address from forked privateKey!"),
                        instance: this
                    });
                    const r = await this.getUnspentOutputs(t);
                    let s = this.explorer.calculateBalance(r);
                    const n = await this.getFee(s, !0, t);
                    if (s = new this.BN(s).sub(n).toString(), new this.BN(s).lt(new this.BN(0))) throw new a.InsufficientFundsError({
                        type: i.SEND_TRANSACTION_TYPE,
                        error: new Error("Not enough otherside balance for claim"),
                        instance: this
                    });
                    let o = new this.BN(0);
                    const d = [],
                        c = new this.BN(s).add(n);
                    r.forEach(({
                        txid: e,
                        vout: t,
                        address: r,
                        script: s,
                        value: n
                    }) => {
                        if (o.lt(c)) {
                            const a = new this.BN(n);
                            o = o.add(a), d.push({
                                txId: e,
                                outputIndex: t,
                                address: r,
                                script: s,
                                satoshis: parseInt(n, 10)
                            })
                        }
                    });
                    const l = o.sub(new this.BN(s)).sub(n);
                    if (l.lt(new this.BN(0))) throw new a.InsufficientFundsError({
                        type: i.SEND_TRANSACTION_TYPE,
                        error: new Error("Insufficient funds!"),
                        instance: this
                    });
                    return await this.buildTx(d, this.address, s, l, e, t)
                }
                async createTransaction({
                    address: e,
                    amount: t
                }) {
                    const r = await this.getUnspentOutputs(this.address, this.getScriptPubKey()),
                        s = await this.getFee({
                            amount: t
                        });
                    let n = new this.BN(0);
                    const o = [],
                        d = new this.BN(t).add(s);
                    r.forEach(e => {
                        if (n.lt(d)) {
                            const t = new this.BN(e.value);
                            n = n.add(t), o.push({
                                txId: e.txid,
                                outputIndex: e.vout,
                                address: e.address,
                                script: e.script,
                                satoshis: parseInt(e.value, 10)
                            })
                        }
                    });
                    const c = n.sub(new this.BN(t)).sub(s);
                    if (c.lt(new this.BN(0))) throw new a.InsufficientFundsError({
                        type: i.SEND_TRANSACTION_TYPE,
                        error: new Error("Insufficient funds!"),
                        instance: this
                    });
                    return await this.buildTx(o, e, t, c)
                }
                buildTx(e, t, r, s, n, o) {
                    return new Promise((d, c) => {
                        const l = this.getTransactionBuilder();
                        e.forEach(e => {
                            this.addInput(l, e)
                        }), l.addOutput(t, parseInt(r.toString(), 10)), s.gt(new this.BN(0)) && l.addOutput(o || this.address, parseInt(s.toString(), 10));
                        const u = this.getKeyForSignFromPrivateKey(n);
                        e.forEach((e, t) => {
                            try {
                                this.signInput(l, u, t, e)
                            } catch (e) {
                                throw new a.ExplorerRequestError({
                                    type: i.SEND_TRANSACTION_TYPE,
                                    error: e,
                                    instance: this
                                })
                            }
                        });
                        try {
                            d(l.build().toHex())
                        } catch (e) {
                            c(e)
                        }
                    })
                }
                getKeyForSignFromPrivateKey(e = this.privateKey) {
                    return this.coreLibrary.ECPair.fromWIF(e, this.network)
                }
                getScriptPubKey() {
                    return this.coreLibrary.address.toOutputScript(this.address, this.network).toString("hex")
                }
            };
            t.default = o
        },
        4161: function(e, t, r) {
            "use strict";
            var s = r(2);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var n = function(e, t) {
                    if (!t && e && e.__esModule) return e;
                    if (null === e || "object" != typeof e && "function" != typeof e) return {
                        default: e
                    };
                    var r = u(t);
                    if (r && r.has(e)) return r.get(e);
                    var s = {},
                        n = Object.defineProperty && Object.getOwnPropertyDescriptor;
                    for (var a in e)
                        if ("default" !== a && Object.prototype.hasOwnProperty.call(e, a)) {
                            var i = n ? Object.getOwnPropertyDescriptor(e, a) : null;
                            i && (i.get || i.set) ? Object.defineProperty(s, a, i) : s[a] = e[a]
                        } s.default = e, r && r.set(e, s);
                    return s
                }(r(1390)),
                a = s(r(322)),
                i = s(r(281)),
                o = r(2372),
                d = r(29),
                c = r(26),
                l = r(1413);

            function u(e) {
                if ("function" != typeof WeakMap) return null;
                var t = new WeakMap,
                    r = new WeakMap;
                return (u = function(e) {
                    return e ? r : t
                })(e)
            }
            var h = e => class extends e {
                constructor(e) {
                    super(...arguments), this.denom = "uatom"
                }
                async loadWallet(e) {
                    const t = n.bip32.fromSeed(e).derivePath(this.derivation);
                    if (!t) throw new d.WalletError({
                        type: c.WALLET_ERROR,
                        error: new Error("can't get a privateKey!"),
                        instance: this
                    });
                    const r = n.crypto.hash160(t.publicKey);
                    return this.privateKey = t.toWIF(), this.address = a.default.encode(this.prefix, a.default.toWords(r)), this
                }
                getAddress() {
                    if (this.privateKey) {
                        const e = n.ECPair.fromWIF(this.privateKey),
                            t = n.crypto.hash160(e.publicKey);
                        return a.default.encode(this.prefix, a.default.toWords(t))
                    }
                    return new d.WalletError({
                        type: c.WALLET_ERROR,
                        error: new Error("privateKey is empty!"),
                        instance: this
                    })
                }
                getSignKeys() {
                    const e = n.ECPair.fromWIF(this.privateKey);
                    return {
                        privateKey: i.default.decode(this.privateKey).privateKey.toString("hex"),
                        publicKey: e.publicKey.toString("hex")
                    }
                }
                async validateAddress(e) {
                    try {
                        const {
                            prefix: t
                        } = a.default.decode(e);
                        return t === this.prefix
                    } catch (e) {
                        return !1
                    }
                }
                async getTransaction(e) {
                    return this.getProvider("history").getTransaction(this.address, e)
                }
                async getTransactions({
                    address: e = this.address,
                    offset: t = 0,
                    limit: r = this.explorer.defaultTxLimit,
                    pageNum: s = 0
                }) {
                    return this.transactions = await this.getProvider("history").getTransactions({
                        address: e,
                        offset: t,
                        limit: r,
                        pageNum: s
                    }).catch(e => {
                        throw new d.ExplorerRequestError({
                            type: c.GET_TRANSACTIONS_TYPE,
                            error: e,
                            instance: this
                        })
                    }), this.transactions
                }
                async getTransactionBlueprint({
                    type: e,
                    ...t
                }) {
                    if (l.CosmosTxTypes[e]) return l.CosmosTxTypes[e](t);
                    if (e === c.ATOM_MSG_TYPES.Withdraw) return this.getProvider("send").getTransactionRewardsBlueprint({
                        from: this.address,
                        ...t
                    });
                    throw new Error(`[${this.ticker}] no ${e} tx blueprint found`)
                }
                async signTransaction(e) {
                    const t = this.getSignKeys(),
                        {
                            sequence: r = "0",
                            account_number: s
                        } = await this.getProvider("send").getAuth(this.address),
                        n = (0, o.sign)(e, t, {
                            sequence: r,
                            account_number: s,
                            chain_id: this.getProvider("send").getChainId()
                        });
                    return (0, o.createSignedTx)(e, n)
                }
                async createTransaction({
                    address: e,
                    amount: t,
                    memo: r = ""
                }) {
                    const s = (await this.getFee()).toString(),
                        n = await this.getTransactionBlueprint({
                            type: c.ATOM_MSG_TYPES.Send,
                            fromAddress: this.address,
                            toAddress: e,
                            amount: new this.BN(t).toString(),
                            fee: s,
                            memo: r,
                            gas: this.sendFeeGas,
                            denom: this.denom
                        });
                    return {
                        tx: await this.signTransaction(n),
                        mode: "sync"
                    }
                }
                async sendTransaction(e) {
                    return this.getProvider("send").sendTransaction(e)
                }
                async createDelegationTransaction(e, t, r = "") {
                    const s = (await this.getFee()).toString(),
                        n = await this.getTransactionBlueprint({
                            type: c.ATOM_MSG_TYPES.Delegate,
                            delegatorAddress: this.address,
                            validatorAddress: e,
                            amount: new this.BN(t).toString(),
                            fee: s,
                            gas: this.stakingFeeGas,
                            memo: r,
                            denom: this.denom
                        });
                    return {
                        tx: await this.signTransaction(n),
                        mode: "sync"
                    }
                }
                async createRedelegationTransaction(e, t, r, s = "") {
                    const n = (await this.getFee()).toString(),
                        a = await this.getTransactionBlueprint({
                            type: c.ATOM_MSG_TYPES.Redelegate,
                            delegatorAddress: this.address,
                            validatorSrcAddress: e,
                            validatorDstAddress: t,
                            amount: new this.BN(r).toString(),
                            fee: n,
                            gas: this.stakingFeeGas,
                            memo: s,
                            denom: this.denom
                        });
                    return {
                        tx: await this.signTransaction(a),
                        mode: "sync"
                    }
                }
                async createUnbondingDelegationTransaction(e, t) {
                    const r = (await this.getFee()).toString(),
                        s = await this.getTransactionBlueprint({
                            type: c.ATOM_MSG_TYPES.Undelegate,
                            delegatorAddress: this.address,
                            validatorAddress: e,
                            amount: new this.BN(t).toString(),
                            fee: r,
                            gas: this.stakingFeeGas,
                            denom: this.denom
                        });
                    return {
                        tx: await this.signTransaction(s),
                        mode: "sync"
                    }
                }
                async createWithdrawDelegationTransaction() {
                    const e = (await this.getFee()).toString(),
                        t = await this.getTransactionBlueprint({
                            type: c.ATOM_MSG_TYPES.Withdraw,
                            delegatorAddress: this.address,
                            fee: e,
                            gas: this.claimFeeGas,
                            chain_id: this.chainId,
                            denom: this.denom
                        });
                    return {
                        tx: await this.signTransaction(t),
                        mode: "sync"
                    }
                }
                async getInfo() {
                    const {
                        balance: e,
                        balances: t
                    } = await this.getProvider("balance").getInfo(this.address);
                    return this.balance = e, this.balances = t, {
                        balance: this.balance,
                        balances: this.balances
                    }
                }
            };
            t.default = h
        },
        4225: function(e, t, r) {
            "use strict";
            var s = r(2);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0, t.shelleyTxEqual = p;
            var n = s(r(2373)),
                a = s(r(172)),
                i = s(r(466)),
                o = s(r(2015)),
                d = r(190);
            const c = [2147483648, 2147483648],
                l = 0,
                u = 2;

            function h() {
                const e = new i.default(6);
                return {
                    primaryTicker: "ADA",
                    decimalPlaces: e,
                    totalSupply: new i.default("45 000 000 000".replace(/ /g, ""), 10).times(new i.default(10).pow(e))
                }
            }
            const f = e => 2147483648 + e;
            class HaskellShelleyTxSignRequest {
                constructor(e, t) {
                    this.cardano = t, this.signRequest = e
                }
                totalInput(e) {
                    const t = this.signRequest.unsignedTx.get_implicit_input().checked_add(this.signRequest.unsignedTx.get_explicit_input()),
                        r = this.signRequest.changeAddr.map(e => new i.default(e.value || new i.default(0))).reduce((e, t) => e.plus(t), new i.default(0)),
                        s = new i.default(t.to_str()).minus(r);
                    return e ? s.shiftedBy(-h().decimalPlaces.toNumber()) : s
                }
                totalOutput(e) {
                    const t = this.signRequest.unsignedTx.get_explicit_output(),
                        r = new i.default(t.to_str());
                    return e ? r.shiftedBy(-h().decimalPlaces.toNumber()) : r
                }
                fee(e) {
                    const t = this.signRequest.unsignedTx.get_fee_or_calc(),
                        r = new i.default(t.to_str());
                    return e ? r.shiftedBy(-h().decimalPlaces.toNumber()) : r
                }
                receivers(e) {
                    const t = this.signRequest.unsignedTx.build().outputs(),
                        r = [];
                    for (let e = 0; e < t.len(); e += 1) r.push(this.toHexOrBase58(t.get(e).address()));
                    if (!e) {
                        const e = this.signRequest.changeAddr.map(e => e.address);
                        return r.filter(t => !e.includes(t))
                    }
                    return r
                }
                uniqueSenderAddresses() {
                    return Array.from(new Set(this.signRequest.senderUtxos.map(e => e.receiver)))
                }
                isEqual(e) {
                    return null != e && (e instanceof this.cardano.TransactionBuilder && p(this.signRequest.unsignedTx, e))
                }
                toHexOrBase58(e) {
                    const t = this.cardano.ByronAddress.from_address(e);
                    return null == t ? Buffer.from(e.to_bytes()).toString("hex") : t.to_base58()
                }
                self() {
                    return this.signRequest
                }
            }

            function p(e, t) {
                return Buffer.from(e.build().to_bytes()).toString("hex") === Buffer.from(t.build().to_bytes()).toString("hex")
            }
            t.default = class AdaLibApi {
                constructor(e, t, r) {
                    this.cardano = t, this.legacyLib = e, this.cip1852Account = void 0, this.legacyAccount = void 0, this.protocolParams = {
                        linearFee: this.cardano.LinearFee.new(this.cardano.BigNum.from_str(String(r.feeCoefficient)), this.cardano.BigNum.from_str(String(r.feeConst))),
                        minimumUtxoVal: this.cardano.BigNum.from_str("1"),
                        poolDeposit: this.cardano.BigNum.from_str("50000000"),
                        keyDeposit: this.cardano.BigNum.from_str("2000000")
                    }, this.legacyCrypto = {
                        HDNode: ({
                            secret: e,
                            secretKey: t,
                            publicKey: r,
                            chainCode: s
                        }) => {
                            e ? (t = e.slice(0, 64), r = e.slice(64, 96), s = e.slice(96, 128)) : e = Buffer.concat([t, r, s]);
                            const n = Buffer.concat([r, s], 64);

                            function a() {
                                return Buffer.concat([t, n])
                            }
                            return {
                                secretKey: t,
                                publicKey: r,
                                chainCode: s,
                                extendedPublicKey: n,
                                toBuffer: a,
                                toString: function() {
                                    return a().toString("hex")
                                }
                            }
                        },
                        deriveChildHdNode: (e, t) => {
                            const r = o.default.derivePrivate(e.toBuffer(), t, 1);
                            return this.legacyCrypto.HDNode({
                                secretKey: r.slice(0, 64),
                                publicKey: r.slice(64, 96),
                                chainCode: r.slice(96, 128)
                            })
                        }
                    }
                }
                getCip1852AccountFromMnemonic(e) {
                    const t = n.default.mnemonicToEntropy(e);
                    return this.cardano.Bip32PrivateKey.from_bip39_entropy(Buffer.from(t, "hex"), Buffer.from("")).derive(f(1852)).derive(f(1815)).derive(f(0))
                }
                getCip1852AccountFromPrivateKey(e) {
                    return this.cip1852Account = this.cardano.Bip32PrivateKey.from_bech32(e), this.cip1852Account
                }
                getLegacyAccountFromMnemonic(e) {
                    const t = this.legacyLib.Entropy.from_english_mnemonics(e);
                    return this.legacyAccount = this.legacyLib.DaedalusWallet.recover(t), this.legacyAccount
                }
                async getPrivateKeyByMnemonic(e) {
                    const t = this.getCip1852AccountFromMnemonic(e);
                    return this.cip1852Account = t, t.to_bech32()
                }
                async getLegacyPrivateKeyByMnemonic(e) {
                    const t = await o.default.mnemonicToRootKeypair(e, 1);
                    return a.default.encode(t)
                }
                getLegacyAddressByPrivateKeySync(e) {
                    const {
                        HDNode: HDNode,
                        deriveChildHdNode: t
                    } = this.legacyCrypto, r = HDNode({
                        secret: a.default.decode(e)
                    }), s = c.reduce(t, r).extendedPublicKey, n = this.getHDPassphrase(e);
                    return o.default.packAddress(c, s, n, 1)
                }
                getHDPassphrase(e) {
                    const t = a.default.decode(e),
                        r = this.legacyCrypto.HDNode({
                            secret: t
                        });
                    return (0, d.pbkdf2Sync)(r.extendedPublicKey, "address-hashing", 500, 32, "sha512")
                }
                async getAddressByPrivateKey(e) {
                    const t = e || this.cip1852Account,
                        r = t.derive(l).derive(0).to_public(),
                        s = t.derive(u).derive(0).to_public();
                    return this.cardano.BaseAddress.new(1, this.cardano.StakeCredential.from_keyhash(r.to_raw_key().hash()), this.cardano.StakeCredential.from_keyhash(s.to_raw_key().hash())).to_address().to_bech32()
                }
                validateShelleyPrivateKey(e) {
                    try {
                        return this.cardano.Bip32PrivateKey.from_bech32(e)
                    } catch (e) {
                        return !1
                    }
                }
                validateShelleyAddress(e) {
                    if (!e) return !1;
                    try {
                        return this.cardano.Address.from_bech32(e)
                    } catch (e) {
                        return !1
                    }
                }
                validateAddress(e) {
                    let t;
                    if (!e) return !1;
                    try {
                        if (t = this.cardano.Address.from_bech32(e), t) return t
                    } catch (e) {
                        t = !1
                    }
                    try {
                        t = this.cardano.ByronAddress.from_base58(e)
                    } catch (e) {
                        t = !1
                    }
                    return t
                }
                normalizeToAddress(e) {
                    return this.cardano.ByronAddress.is_valid(e) ? this.cardano.ByronAddress.from_base58(e).to_address() : this.cardano.Address.from_bech32(e)
                }
                newAdaUnsignedTx(e, t, r, s, n, a, i) {
                    const o = n + 21600,
                        d = new Map;
                    for (const e of s) d.set({
                        amount: e.amount,
                        receiver: e.receiver,
                        tx_hash: e.tx_hash,
                        tx_index: e.tx_index,
                        utxo_id: e.tx_hash + e.tx_index
                    }, e);
                    const c = this.newAdaUnsignedTxFromUtxo(e, t, r, Array.from(d.keys()), this.protocolParams, o, a, i);
                    return {
                        senderUtxos: c.senderUtxos.map(e => {
                            const t = d.get(e);
                            if (null == t) throw new Error("[newAdaUnsignedTx] utxo reference was changed. Should not happen");
                            return t
                        }),
                        txBuilder: c.txBuilder,
                        changeAddr: c.changeAddr
                    }
                }
                findSuitableInputs(e = [], t) {
                    if (e.length <= 0) throw new Error("[findSuitableInputs]: UTXOs must be provided");
                    let r = new i.default(t);
                    const s = new i.default(0),
                        n = new i.default(-1),
                        a = new i.default("1000000"),
                        o = [],
                        d = [...e.sort((e, t) => Number(e.amount) - Number(t.amount))];
                    let c = d.length - 1;
                    for (;
                        (r.gt(s) || r.lt(s) && r.times(n).lt(a)) && !(c < 0);) {
                        const e = d.findIndex(e => new i.default(e.amount).gte(r));
                        e >= 0 ? (r = r.minus(new i.default(d[e].amount)), o.push(...d.splice(e, 1))) : (r = r.minus(new i.default(d[c].amount)), o.push(...d.splice(c, 1))), c = d.length - 1
                    }
                    return o
                }
                newAdaUnsignedTxFromUtxo(e, t, r, s, n = this.protocolParams, a = 21600, o, d) {
                    const c = this.normalizeToAddress(e);
                    if (null == c) throw new Error("[newAdaUnsignedTxFromUtxo] receiver not a valid Shelley address");
                    const l = this.cardano.TransactionBuilder.new(n.linearFee, n.minimumUtxoVal, n.poolDeposit, n.keyDeposit);
                    l.set_ttl(a);
                    const u = null === t && o;
                    u || null === t || l.add_output(this.cardano.TransactionOutput.new(c, this.cardano.BigNum.from_str(t))), o && l.set_certs(o), d && l.set_withdrawals(d);
                    const h = u ? new i.default(25e5) : new i.default(l.get_explicit_output().checked_add(l.min_fee()).to_str()),
                        f = this.findSuitableInputs(s, h, l);
                    f.forEach(e => {
                        this.addUtxoInput(l, e)
                    });
                    const p = (() => {
                        if (null == r) return l.set_fee(l.min_fee()), [];
                        const e = this.cardano.BigNum.from_str(h.toString()),
                            t = this.normalizeToAddress(r);
                        if (null == t) throw new Error("[newAdaUnsignedTxFromUtxo] change not a valid Shelley address");
                        const s = new i.default(l.get_explicit_input().checked_sub(e).to_str());
                        let n = !1;
                        try {
                            s.toNumber() > 0 && (l.add_change_if_needed(t), n = !0)
                        } catch (e) {
                            console.warn(e)
                        }
                        return n ? [{
                            address: r,
                            value: s.toString()
                        }] : []
                    })();
                    return {
                        senderUtxos: f,
                        txBuilder: l,
                        changeAddr: p
                    }
                }
                addUtxoInput(e, t) {
                    const r = this.normalizeToAddress(t.receiver),
                        s = this.getCardanoAddrKeyHash(r);
                    if (null !== s) {
                        if (void 0 === s) throw new Error("addUtxoInput script inputs not expected");
                        e.add_key_input(s, this.utxoToTxInput(t), this.cardano.BigNum.from_str(t.amount))
                    } else {
                        const s = this.cardano.ByronAddress.from_address(r);
                        if (null == s) throw new Error("Add input should never happen: non-byron address without key hash");
                        e.add_bootstrap_input(s, this.utxoToTxInput(t), this.cardano.BigNum.from_str(t.amount))
                    }
                }
                utxoToTxInput(e) {
                    return this.cardano.TransactionInput.new(this.cardano.TransactionHash.from_bytes(Buffer.from(e.tx_hash, "hex")), e.tx_index)
                }
                getCardanoAddrKeyHash(e) {
                    if (this.cardano.ByronAddress.from_address(e)) return null;
                    {
                        const t = this.cardano.BaseAddress.from_address(e);
                        if (t) return t.payment_cred().to_keyhash()
                    } {
                        const t = this.cardano.PointerAddress.from_address(e);
                        if (t) return t.payment_cred().to_keyhash()
                    } {
                        const t = this.cardano.EnterpriseAddress.from_address(e);
                        if (t) return t.payment_cred().to_keyhash()
                    } {
                        const t = this.cardano.RewardAddress.from_address(e);
                        if (t) return t.payment_cred().to_keyhash()
                    }
                    throw new Error(" unknown address type")
                }
                signTransaction(e, t = this.cip1852Account) {
                    const r = new HaskellShelleyTxSignRequest({
                            senderUtxos: e.senderUtxos,
                            unsignedTx: e.txBuilder,
                            changeAddr: e.changeAddr
                        }, this.cardano),
                        s = this.legacyLib.DaedalusAddressChecker.new(this.legacyAccount);
                    let n;
                    const a = new Set,
                        i = new Set,
                        o = [];
                    for (const t of e.senderUtxos) {
                        const e = this.normalizeToAddress(t.receiver);
                        if (null == e) throw new Error("[signTransaction] utxo not a valid Shelley address");
                        const r = this.getCardanoAddrKeyHash(e),
                            s = Buffer.from(e.to_bytes()).toString("hex");
                        if (null !== r) {
                            if (void 0 === r) throw new Error("[signTransaction] cannot sign script inputs");
                            {
                                const e = Buffer.from(r.to_bytes()).toString("hex");
                                i.has(e) || (i.add(e), o.push(t))
                            }
                        } else n = this.legacyLib.Address.from_base58(t.receiver), a.has(s) || (a.add(s), o.push(t))
                    }
                    const d = r.signRequest.unsignedTx instanceof this.cardano.TransactionBuilder ? r.signRequest.unsignedTx.build() : r.signRequest.unsignedTx,
                        c = {
                            shelleyKey: t.derive(0).derive(0).to_raw_key(),
                            shelleyStakeKey: t.derive(2).derive(0).to_raw_key()
                        };
                    n && (c.byronKey = Buffer.from(s.check_address(n).private_key().to_hex(), "hex"));
                    const l = this.addWitnesses({
                        txBody: d,
                        uniqueUtxo: o,
                        keys: c
                    });
                    return {
                        rawtx: this.cardano.Transaction.new(d, l).to_bytes(),
                        txid: Buffer.from(this.cardano.hash_transaction(d).to_bytes()).toString("hex")
                    }
                }
                addWitnesses({
                    txBody: e,
                    uniqueUtxo: t,
                    keys: r
                }) {
                    const {
                        byronKey: s,
                        shelleyKey: n,
                        shelleyStakeKey: a
                    } = r, i = this.cardano.hash_transaction(e), o = this.cardano.BootstrapWitnesses.new(), d = this.cardano.Vkeywitnesses.new(), c = this.cardano.TransactionWitnessSet.new();
                    for (let e = 0; e < t.length; e += 1) {
                        const r = this.normalizeToAddress(t[e].receiver);
                        if (null == r) throw new Error("[addWitnesses] utxo not a valid Shelley address");
                        const c = this.cardano.ByronAddress.from_address(r);
                        if (c) {
                            const e = this.cardano.make_daedalus_bootstrap_witness(i, c, this.cardano.LegacyDaedalusPrivateKey.from_bytes(s));
                            o.add(e)
                        } else {
                            const e = this.cardano.make_vkey_witness(i, n),
                                t = this.cardano.make_vkey_witness(i, a);
                            d.add(e), d.add(t)
                        }
                    }
                    return o.len() > 0 && c.set_bootstraps(o), d.len() > 0 && c.set_vkeys(d), c
                }
                estimateFee({
                    address: e,
                    amount: t,
                    outputs: r,
                    ttl: s,
                    certs: n
                }) {
                    const a = this.cardano.TransactionBuilder.new(this.protocolParams.linearFee, this.protocolParams.minimumUtxoVal, this.protocolParams.poolDeposit, this.protocolParams.keyDeposit),
                        i = this.normalizeToAddress(e);
                    return a.add_output(this.cardano.TransactionOutput.new(i, this.cardano.BigNum.from_str(String(t)))), r.forEach(e => {
                        this.addUtxoInput(a, e)
                    }), a.set_ttl(s + 21600), n && a.set_certs(n), a.min_fee().to_str()
                }
                createTransaction({
                    address: e,
                    amount: t,
                    changeAddress: r,
                    utxo: s,
                    slotNo: n
                }) {
                    const a = this.newAdaUnsignedTx(e, t, r, s, n);
                    return this.signTransaction(a)
                }
                createStakeRegistrationCertificate(e) {
                    const t = this.cardano.StakeRegistration.new(e);
                    return this.cardano.Certificate.new_stake_registration(t)
                }
                createStakeDeregistrationCertificate(e) {
                    const t = this.cardano.StakeDeregistration.new(e);
                    return this.cardano.Certificate.new_stake_deregistration(t)
                }
                createStakeDelegationCertificate(e, t) {
                    const r = this.cardano.StakeDelegation.new(e, t);
                    return this.cardano.Certificate.new_stake_delegation(r)
                }
                createDelegationTransaction({
                    paymentAddress: e,
                    utxo: t,
                    slotNo: r,
                    poolId: s,
                    stakeAddressRegistered: n
                }) {
                    const a = this.cardano.Address.from_bech32(e),
                        i = this.cardano.BaseAddress.from_address(a),
                        o = this.cardano.Certificates.new(),
                        d = this.cardano.Ed25519KeyHash.from_bytes(Buffer.from(s, "hex"));
                    n || o.add(this.createStakeRegistrationCertificate(i.stake_cred())), o.add(this.createStakeDelegationCertificate(i.stake_cred(), d));
                    const c = this.newAdaUnsignedTx(e, null, e, t, r, o);
                    return this.signTransaction(c)
                }
                getRewardAddressHexFromAddressStr(e) {
                    return Buffer.from(this.getRewardAddress(e).to_address().to_bytes()).toString("hex")
                }
                createWithdrawalTransaction({
                    paymentAddress: e,
                    utxo: t,
                    slotNo: r,
                    rewardAddress: s,
                    amountToWithdraw: n
                }) {
                    const a = this.cardano.Withdrawals.new();
                    a.insert(s, this.cardano.BigNum.from_str(n));
                    const i = this.newAdaUnsignedTx(e, null, e, t, r, void 0, a);
                    return this.signTransaction(i)
                }
                getRewardAddress(e) {
                    const t = this.cardano.Address.from_bech32(e),
                        r = this.cardano.BaseAddress.from_address(t).stake_cred();
                    return this.cardano.RewardAddress.new(1, r)
                }
            }
        },
        4246: function(e, t, r) {
            "use strict";
            var s = r(2);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var n = s(r(2015)),
                a = s(r(172)),
                i = s(r(4247)),
                o = r(190),
                d = r(26),
                c = r(29);
            const l = [2147483648, 2147483648];
            class CborIndefiniteLengthArray {
                constructor(e) {
                    this.elements = e
                }
                encodeCBOR(e) {
                    return e.push(Buffer.concat([Buffer.from([159]), ...this.elements.map(e => i.default.encode(e)), Buffer.from([255])]))
                }
            }

            function u(e, t, r) {
                return Math.ceil(r + e * t)
            }

            function HDNode({
                secret: e,
                secretKey: t,
                publicKey: r,
                chainCode: s
            }) {
                e ? (t = e.slice(0, 64), r = e.slice(64, 96), s = e.slice(96, 128)) : e = Buffer.concat([t, r, s]);
                const n = Buffer.concat([r, s], 64);

                function a() {
                    return Buffer.concat([t, n])
                }
                return {
                    secretKey: t,
                    publicKey: r,
                    chainCode: s,
                    extendedPublicKey: n,
                    toBuffer: a,
                    toString: function() {
                        return a().toString("hex")
                    }
                }
            }

            function h(e, t) {
                const r = n.default.derivePrivate(e.toBuffer(), t, 1);
                return HDNode({
                    secretKey: r.slice(0, 64),
                    publicKey: r.slice(64, 96),
                    chainCode: r.slice(96, 128)
                })
            }
            async function f(e, t) {
                const r = await p(t);
                return n.default.unpackAddress(e, r).derivationPath
            }

            function p(e) {
                const t = HDNode({
                    secret: a.default.decode(e)
                });
                return (0, o.pbkdf2Sync)(t.extendedPublicKey, "address-hashing", 500, 32, "sha512")
            }
            async function g(e, t) {
                const r = e.getId(),
                    s = await Promise.all(e.inputs.map(async e => {
                        const s = await f(e.utxo.receiver, t),
                            o = HDNode({
                                secret: a.default.decode(t)
                            });
                        return function(e, t) {
                            return {
                                extendedPublicKey: e,
                                signature: t,
                                encodeCBOR: function(r) {
                                    return r.pushAny([0, new i.default.Tagged(24, i.default.encode([e, t]))])
                                }
                            }
                        }(s.reduce(h, o).extendedPublicKey, function(e, t, r) {
                            const s = t.reduce(h, r),
                                a = Buffer.from(e, "hex");
                            return n.default.sign(a, s.toBuffer())
                        }("011a2d964a095820" + r, s, o))
                    }));
                return function(e, t) {
                    return {
                        getId: function() {
                            return e.getId()
                        },
                        witnesses: t,
                        txAux: e,
                        encodeCBOR: function(r) {
                            return r.pushAny([e, t])
                        }
                    }
                }(e, s)
            }

            function m(e) {
                const t = e.amount,
                    r = e.tx_hash,
                    s = e.tx_index;
                return {
                    coins: t,
                    txHash: r,
                    outputIndex: s,
                    utxo: e,
                    encodeCBOR: function(e) {
                        return e.pushAny([0, new i.default.Tagged(24, i.default.encode([Buffer.from(r, "hex"), s]))])
                    }
                }
            }

            function y(e, t, r) {
                return {
                    address: e,
                    coins: t,
                    isChange: r,
                    encodeCBOR: function(r) {
                        return r.pushAny([w(e), t])
                    }
                }
            }

            function w(e) {
                return {
                    address: e,
                    encodeCBOR: function(t) {
                        return t.push(e)
                    }
                }
            }

            function b(e, t, r, s) {
                const n = i.default.encode(new CborIndefiniteLengthArray(e)).length,
                    a = t.length;
                return 1 + (1 + n + (s ? a + 76 + 18 + 2 : a + 9 + 2) + 1) + (142 * e.length + 1) + 4
            }
            async function v(e) {
                const t = [];
                for (let r = 0; r < e.length; r += 1) t.push(m(e[r]));
                return t
            }
            var T = {
                getDerivationPathFromAddress: f,
                getPrivateKeyByMnemonic: async function(e) {
                    const t = await n.default.mnemonicToRootKeypair(e, 1);
                    return a.default.encode(t)
                },
                getAddressByPrivateKey: function(e) {
                    const t = HDNode({
                            secret: a.default.decode(e)
                        }),
                        r = l.reduce(h, t).extendedPublicKey,
                        s = p(e);
                    return n.default.packAddress(l, r, s, 1)
                },
                getTxFee: async function(e, t, r, s, n) {
                    const a = await v(e);
                    return Math.ceil(function(e, t, r, s, n) {
                        if (r > Number.MAX_SAFE_INTEGER) throw new c.WalletError({
                            type: d.WALLET_ERROR,
                            error: new Error("Unsupported amount of coins: " + r),
                            instance: this
                        });
                        const a = e.reduce((e, t) => e + t.coins, 0),
                            i = u(b(e, t, 0, !1), s, n);
                        if (r + i >= a) return i;
                        const o = u(b(e, t, 0, !0), s, n);
                        if (r + o > a) return a - r;
                        return o
                    }(a, t, r, s, n))
                },
                prepareSignedTx: async function(e, t, r, s, a, o) {
                    return async function(e, t) {
                        const r = await g(e, t);
                        return {
                            txHash: r.getId(),
                            txBody: i.default.encode(r).toString("hex"),
                            cbor: i.default.encode(r)
                        }
                    }(await async function(e, t, r, s, a) {
                        const o = await v(e),
                            l = o.reduce((e, t) => e + Number(t.coins), 0),
                            u = l - s - Number(a);
                        if (u < 0) throw new c.WalletError({
                            type: d.WALLET_ERROR,
                            error: new Error(`Transaction inputs (sum ${l}) don't cover coins (${s}) + fee (${a})`),
                            instance: this
                        });
                        const h = [y(t, s, !1)];
                        u > 0 && h.push(y(r, u, !0));
                        return function e(t, r, s) {
                            function a() {
                                return n.default.blake2b(i.default.encode(e(t, r, s)), 32).toString("hex")
                            }
                            return {
                                getId: a,
                                inputs: t,
                                outputs: r,
                                attributes: s,
                                encodeCBOR: function(e) {
                                    return e.pushAny([new CborIndefiniteLengthArray(t), new CborIndefiniteLengthArray(r), s])
                                }
                            }
                        }(o, h, {})
                    }(e, t, r, Number(s), o), a)
                },
                validateAddress: async function(e) {
                    if (!e) return !1;
                    try {
                        return n.default.isValidAddress(e)
                    } catch (e) {
                        return !1
                    }
                },
                getHDKey: function(e) {
                    const t = HDNode({
                        secret: a.default.decode(e)
                    });
                    return (0, o.pbkdf2Sync)(Buffer.concat([t.secretKey, t.chainCode]), "", 4096, 96, "sha512")
                }
            };
            t.default = T
        },
        4252: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.msgUndelegate = t.msgSend = t.msgRedelegate = t.msgDelegate = t.default = void 0;
            var s = r(26);
            const n = ({
                fromAddress: e,
                toAddress: t,
                amount: r,
                fee: n,
                gas: a,
                memo: i,
                denom: o = "uatom"
            }) => ({
                msg: [{
                    type: s.ATOM_MSG_TYPES.Send,
                    value: {
                        from_address: e,
                        to_address: t,
                        amount: [{
                            denom: o,
                            amount: r
                        }]
                    }
                }],
                fee: {
                    amount: [{
                        denom: o,
                        amount: n
                    }],
                    gas: a
                },
                signatures: null,
                memo: i
            });
            t.msgSend = n;
            const a = ({
                delegatorAddress: e,
                validatorAddress: t,
                amount: r,
                fee: n,
                gas: a,
                memo: i,
                denom: o = "uatom"
            }) => ({
                msg: [{
                    type: s.ATOM_MSG_TYPES.Delegate,
                    value: {
                        delegator_address: e,
                        validator_address: t,
                        amount: {
                            denom: o,
                            amount: r
                        }
                    }
                }],
                fee: {
                    amount: [{
                        denom: o,
                        amount: n
                    }],
                    gas: a
                },
                signatures: null,
                memo: i
            });
            t.msgDelegate = a;
            const i = ({
                delegatorAddress: e,
                validatorAddress: t,
                amount: r,
                fee: n,
                gas: a,
                memo: i = "",
                denom: o = "uatom"
            }) => ({
                msg: [{
                    type: s.ATOM_MSG_TYPES.Undelegate,
                    value: {
                        delegator_address: e,
                        validator_address: t,
                        amount: {
                            denom: o,
                            amount: r
                        }
                    }
                }],
                fee: {
                    amount: [{
                        denom: o,
                        amount: n
                    }],
                    gas: a
                },
                signatures: null,
                memo: i
            });
            t.msgUndelegate = i;
            const o = ({
                delegatorAddress: e,
                validatorSrcAddress: t,
                validatorDstAddress: r,
                amount: n,
                fee: a,
                gas: i,
                memo: o,
                denom: d = "uatom"
            }) => ({
                msg: [{
                    type: s.ATOM_MSG_TYPES.Redelegate,
                    value: {
                        delegator_address: e,
                        validator_src_address: t,
                        validator_dst_address: r,
                        amount: {
                            denom: d,
                            amount: n
                        }
                    }
                }],
                fee: {
                    amount: [{
                        denom: d,
                        amount: a
                    }],
                    gas: i
                },
                signatures: null,
                memo: o
            });
            t.msgRedelegate = o;
            var d = {
                "cosmos-sdk/MsgSend": n,
                "cosmos-sdk/MsgDelegate": a,
                "cosmos-sdk/MsgUndelegate": i,
                "cosmos-sdk/MsgBeginRedelegate": o
            };
            t.default = d
        },
        4253: function(e, t, r) {
            "use strict";
            var s = r(2);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var n = function(e, t) {
                    if (!t && e && e.__esModule) return e;
                    if (null === e || "object" != typeof e && "function" != typeof e) return {
                        default: e
                    };
                    var r = y(t);
                    if (r && r.has(e)) return r.get(e);
                    var s = {},
                        n = Object.defineProperty && Object.getOwnPropertyDescriptor;
                    for (var a in e)
                        if ("default" !== a && Object.prototype.hasOwnProperty.call(e, a)) {
                            var i = n ? Object.getOwnPropertyDescriptor(e, a) : null;
                            i && (i.get || i.set) ? Object.defineProperty(s, a, i) : s[a] = e[a]
                        } s.default = e, r && r.set(e, s);
                    return s
                }(r(1390)),
                a = s(r(322)),
                i = s(r(281)),
                o = r(434),
                d = r(4289),
                c = r(4387),
                l = r(184),
                u = r(29),
                h = r(26),
                f = r(1413),
                p = s(r(464)),
                g = s(r(55)),
                m = r(930);

            function y(e) {
                if ("function" != typeof WeakMap) return null;
                var t = new WeakMap,
                    r = new WeakMap;
                return (y = function(e) {
                    return e ? r : t
                })(e)
            }
            var w = e => class extends((0, m.StakingMixin)(e)) {
                async loadWallet(e, t) {
                    const r = n.bip32.fromSeed(e).derivePath(this.derivation);
                    if (!r) throw new u.WalletError({
                        type: h.WALLET_ERROR,
                        error: new Error("can't get a privateKey!"),
                        instance: this
                    });
                    const s = n.crypto.hash160(r.publicKey);
                    return this.privateKey = r.toWIF(), this.address = a.default.encode(this.prefix, a.default.toWords(s)), this.setPrivateKey(r.toWIF(), t), this
                }
                getAddress() {
                    if (this.privateKey) {
                        const e = n.ECPair.fromWIF(this.privateKey),
                            t = n.crypto.hash160(e.publicKey);
                        return a.default.encode(this.prefix, a.default.toWords(t))
                    }
                    return new u.WalletError({
                        type: h.WALLET_ERROR,
                        error: new Error("privateKey is empty!"),
                        instance: this
                    })
                }
                getSignKeys() {
                    const e = n.ECPair.fromWIF(this.privateKey);
                    return {
                        privateKey: i.default.decode(this.privateKey).privateKey.toString("hex"),
                        publicKey: e.publicKey.toString("hex")
                    }
                }
                async validateAddress(e) {
                    try {
                        const {
                            prefix: t
                        } = a.default.decode(e);
                        return t === this.prefix
                    } catch (e) {
                        return !1
                    }
                }
                async getTransaction(e) {
                    return this.getProvider("history2").getTransaction(this.address, e)
                }
                async getTransactions({
                    address: e = this.address,
                    offset: t = 0,
                    limit: r = this.explorer.defaultTxLimit,
                    pageNum: s = 0
                }) {
                    return this.transactions = await this.getProvider("history2").getTransactions({
                        address: e,
                        offset: t,
                        limit: r,
                        pageNum: s,
                        denom: this.denom
                    }).catch(e => {
                        throw new u.ExplorerRequestError({
                            type: h.GET_TRANSACTIONS_TYPE,
                            error: e,
                            instance: this
                        })
                    }), this.transactions
                }
                async getTransactionBlueprint({
                    type: e,
                    ...t
                }) {
                    if (f.CosmosTxTypes[e]) return f.CosmosTxTypes[e](t);
                    if (e === h.ATOM_MSG_TYPES.Withdraw) return this.getProvider("send2").getTransactionRewardsBlueprint({
                        from: this.address,
                        ...t
                    });
                    throw new Error(`[${this.ticker}] no ${e} tx blueprint found`)
                }
                async sign(e, t, r = "") {
                    this.signer = this.signer || await d.SigningStargateClient.offline(this.wallet);
                    const s = await this.getProvider("send2").getSignerData(this.address);
                    return this.signer.signDirect(this.address, e, t, r, s)
                }
                createTransaction({
                    address: e,
                    amount: t,
                    memo: r = ""
                }) {
                    const s = [{
                            typeUrl: "/cosmos.bank.v1beta1.MsgSend",
                            value: {
                                fromAddress: this.address,
                                toAddress: e,
                                amount: [{
                                    denom: this.denom,
                                    amount: t
                                }]
                            }
                        }],
                        n = {
                            amount: [{
                                denom: this.denom,
                                amount: this.fee
                            }],
                            gas: this.sendFeeGas
                        };
                    return this.sign(s, n, r)
                }
                async sendTransaction(e) {
                    const t = c.TxRaw.encode(e).finish();
                    return this.getProvider("send2").sendTransaction(t)
                }
                createDelegationTransaction(e, t, r = "") {
                    const s = [{
                            typeUrl: "/cosmos.staking.v1beta1.MsgDelegate",
                            value: {
                                delegatorAddress: this.address,
                                validatorAddress: e,
                                amount: {
                                    denom: this.denom,
                                    amount: t
                                }
                            }
                        }],
                        n = {
                            amount: [{
                                denom: this.denom,
                                amount: this.fee
                            }],
                            gas: this.stakingFeeGas
                        };
                    return this.sign(s, n, r)
                }
                createRedelegationTransaction(e, t, r, s = "") {
                    const n = [{
                            typeUrl: "/cosmos.staking.v1beta1.MsgBeginRedelegate",
                            value: {
                                delegatorAddress: this.address,
                                validatorSrcAddress: e,
                                validatorDstAddress: t,
                                amount: {
                                    denom: this.denom,
                                    amount: r
                                }
                            }
                        }],
                        a = {
                            amount: [{
                                denom: this.denom,
                                amount: this.fee
                            }],
                            gas: this.stakingFeeGas
                        };
                    return this.sign(n, a)
                }
                createUnbondingDelegationTransaction(e, t) {
                    const r = [{
                            typeUrl: "/cosmos.staking.v1beta1.MsgUndelegate",
                            value: {
                                delegatorAddress: this.address,
                                validatorAddress: e,
                                amount: {
                                    denom: this.denom,
                                    amount: t
                                }
                            }
                        }],
                        s = {
                            amount: [{
                                denom: this.denom,
                                amount: this.fee
                            }],
                            gas: this.stakingFeeGas
                        };
                    return this.sign(r, s)
                }
                async createWithdrawDelegationTransaction(e) {
                    const t = (await this.getProvider("balance2").getValidators(this.address)).map(e => ({
                            typeUrl: "/cosmos.distribution.v1beta1.MsgWithdrawDelegatorReward",
                            value: {
                                delegatorAddress: this.address,
                                validatorAddress: e
                            }
                        })),
                        r = {
                            amount: [{
                                denom: this.denom,
                                amount: this.fee
                            }],
                            gas: this.claimFeeGas
                        };
                    return this.sign(t, r)
                }
                async getInfo() {
                    return this.balance = this.calculateAvailableBalance(await this.getProvider("balance2").getTotalBalance(this.address)).toBN(), await this.getStakingInfo(), {
                        balance: this.balance,
                        balances: this.balances
                    }
                }
                async fetchStakingInfo() {
                    try {
                        const e = this.getProvider("balance2");
                        await e.getLatestBlock();
                        const t = {},
                            r = this.calculateStakedBalance(await e.getStakedDelegations(this.address), t);
                        return {
                            rewards: this.calculateRewards(await e.getRewardsBalance(this.address)),
                            staked: r,
                            unstaking: this.calculateUnstakingBalance(await e.getUnbondingDelegations(this.address)),
                            validators: t
                        }
                    } catch (e) {
                        return g.default.error({
                            instance: this,
                            error: e
                        }), {}
                    }
                }
                async calculateAvailableForStake({
                    balance: e
                }) {
                    const t = e.toBN().sub(new this.BN(this.fee)).sub(new this.BN(this.reserveForStake));
                    return new p.default(t.isNeg() ? "0" : t, this)
                }
                calculateTotal({
                    balance: e,
                    staked: t,
                    unstaking: r,
                    rewards: s
                }) {
                    return new p.default(e.toBN().add(t.toBN()).add(r.toBN()).add(s.toBN()).toString(), this)
                }
                calculateAvailableBalance(e) {
                    var t, r;
                    return new p.default(null !== (t = null === (r = e.find(e => e.denom === this.denom)) || void 0 === r ? void 0 : r.amount) && void 0 !== t ? t : "0", this)
                }
                calculateRewards(e) {
                    var t, r, s;
                    return new p.default(null !== (t = null == e || null === (r = e.find(e => e.denom === this.denom)) || void 0 === r || null === (s = r.amount) || void 0 === s ? void 0 : s.split(".")[0]) && void 0 !== t ? t : "0", this)
                }
                calculateStakedBalance(e, t) {
                    return new p.default((null == e ? void 0 : e.length) > 0 ? this.getTotalDelegations(e, t).toString() : "0", this)
                }
                calculateUnstakingBalance(e) {
                    const t = {
                        validators: {}
                    };
                    if ((null == e ? void 0 : e.length) > 0) {
                        const r = e.reduce((e, {
                            entries: r,
                            validator_address: s
                        }) => {
                            const n = s;
                            return t.validators[n] = r.map(e => new this.BN(e.balance.split(".")[0])).reduce((e, t) => e.add(new this.BN(t)), new this.BN("0")), e.add(t.validators[n])
                        }, new this.BN("0"));
                        t.total = r.toString().split(".")[0]
                    }
                    return new p.default(t.total || "0", this)
                }
                getTotalDelegations(e, t) {
                    return e.reduce((e, {
                        delegation: r,
                        balance: s
                    }) => (t[r.validator_address] = {
                        address: r.validator_address,
                        staked: new p.default(new this.BN(s.amount), this)
                    }, e.add(new this.BN(s.amount))), new this.BN("0"))
                }
                setPrivateKey(e, t) {
                    this.privateKey = e;
                    const r = (0, l.stringToPath)(this.derivation);
                    o.DirectSecp256k1HdWallet.fromMnemonic(t, {
                        hdPaths: [r],
                        prefix: this.prefix
                    }).then(e => {
                        this.wallet = e
                    })
                }
            };
            t.default = w
        },
        4390: function(e, t, r) {
            "use strict";
            var s = r(2);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var n = s(r(35)),
                a = s(r(2070)),
                i = r(29),
                o = r(26);
            var d = e => class extends e {
                get instance() {
                    return {
                        id: this.id,
                        ticker: this.ticker,
                        name: this.name,
                        decimal: this.decimal,
                        alias: this.alias,
                        parent: this.id,
                        BN: n.default,
                        toCurrencyUnit: e => this.toCurrencyUnit(e),
                        toMinimalUnit: e => this.toMinimalUnit(e),
                        coreLibrary: this.coreLibrary,
                        getAddressFromPublicKey: e => this.getAddressFromPublicKey(e),
                        getScriptPubKey: () => this.coreLibrary.Script.fromAddress(this.address).toHex(),
                        feeCoefficient: this.coefficient,
                        feeDefault: this.feeData && this.feeData.fee
                    }
                }
                loadWallet(e) {
                    return new Promise((t, r) => {
                        const s = this.coreLibrary.HDPrivateKey.fromSeed(e, this.network),
                            {
                                privateKey: n
                            } = s[this.getDeriveFunctionName()](this.derivation);
                        n || r(new i.WalletError({
                            type: o.LOAD_WALLET_ERROR,
                            error: "can't derive privateKey!",
                            instance: this
                        })), this.privateKey = n.toWIF(), this.address = this.getAddress(), t(this)
                    })
                }
                getDeriveFunctionName() {
                    return "deriveChild"
                }
                getAddress() {
                    return this.privateKey ? this.coreLibrary.PrivateKey.fromWIF(this.privateKey.toString()).toAddress(this.network).toString() : new Error(this.ticker + " privateKey is empty!!!")
                }
                getAddressFromScript(e) {
                    const t = this.coreLibrary.Script(e);
                    return this.coreLibrary.Address(t, this.network).toString()
                }
                async validateAddress(e) {
                    return this.coreLibrary.Address.isValid(e || this.address, this.network)
                }
                async createTransaction({
                    address: e,
                    amount: t,
                    memo: r,
                    userFee: s
                }) {
                    const n = await this.getUnspentOutputs(this.address, this.getScriptPubKey()),
                        a = Number(s || await this.getFee({
                            amount: t
                        })),
                        i = (new this.coreLibrary.Transaction).from(n).to(e, Number(t)).fee(a);
                    return "XVG" === this.ticker && (i.timestamp = Number((new Date).getTime().toString().slice(0, -3))), Number(this.feePerByte) > 0 && i.feePerKb(1e3 * this.getFeePerByte()), i.change(this.address), "function" == typeof i.enableRBF ? i.enableRBF() : console.warn(`[${this.ticker}] bitcore-lib does not have enableRBF function`), i.sign(this.privateKey).serialize()
                }
                createTransactionSync({
                    inputs: e,
                    outputs: t,
                    fee: r
                }) {
                    const s = t.filter(e => e.address).map(({
                            address: e,
                            value: t
                        }) => ({
                            address: e,
                            satoshis: t
                        })),
                        n = (new this.coreLibrary.Transaction).from(e).to(s);
                    return r && n.fee(r).change(this.address), "function" == typeof n.enableRBF ? n.enableRBF() : console.warn(`[${this.ticker}] bitcore-lib does not have enableRBF function`), n.sign(this.privateKey).serialize()
                }
                createReplacementTx({
                    tx: e,
                    fee: t
                }) {
                    const r = this.address,
                        s = [];
                    for (const t of e.vin) s.push({
                        txid: t.txid,
                        vout: t.vout || 0,
                        script: this.getScriptPubKey(),
                        satoshis: Number(t.value)
                    });
                    const n = [];
                    let a = !1;
                    for (const s of e.vout) {
                        if (1 !== s.addresses.length) throw new Error("incompatible tx: tx output must have exacly one address");
                        const e = s.addresses[0];
                        let i;
                        e !== r || a ? i = Number(s.value) : (i = Number(s.value) - t, a = !0), n.push({
                            address: e,
                            satoshis: i
                        })
                    }
                    return (new this.coreLibrary.Transaction).from(s).to(n).sign(this.privateKey).serialize()
                }
                getScriptPubKey() {
                    return this.coreLibrary.Script.fromAddress(this.address).toHex()
                }
                decodeTransaction(e) {
                    return new this.coreLibrary.Transaction(e)
                }
                async getCoins({
                    address: e,
                    value: t,
                    feePerByte: r
                }) {
                    const s = (await this.getUnspentOutputs(this.address, this.getScriptPubKey())).map(e => ({
                            ...e,
                            value: Number(e.value)
                        })),
                        n = (0, a.default)(s, [{
                            address: e,
                            value: t
                        }], r);
                    if (!n.inputs || !n.outputs) throw new Error("Could not select utxos");
                    return n
                }
            };
            t.default = d
        },
        4393: function(e, t, r) {
            "use strict";
            var s = r(2);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var n = r(4394),
                a = s(r(55)),
                i = s(r(4397));
            var o = e => class extends e {
                constructor(e) {
                    super(...arguments), this.setProviders(e.explorers)
                }
                setProviders(e, t) {
                    const r = this.filterProviders(e),
                        s = (0, n.diff)(this.providersConfig, r);
                    Object.keys(s).length > 0 && r.length > 0 && (this.providers = new i.default({
                        config: {
                            explorers: r,
                            webUrl: t
                        },
                        wallet: this.instance
                    }), this.providersConfig = r), Object.keys(s).length > 0 && 0 === r.length && console.warn(`[${this.ticker}] HasProviders update warning: server config is different, but no valid providers found. Server config should define 'usedFor' property to define valid providers. Update server config or remove HasProviders mixin from a coin.`)
                }
                filterProviders(e) {
                    return e.filter(e => Array.isArray(e.usedFor))
                }
                handleError(e, t) {
                    e.message = `[${this.ticker}] Providers::${t} error: ${e.message||"Unknown error"}`, a.default.error({
                        instance: this,
                        error: e
                    })
                }
                getProvider(e) {
                    var t, r;
                    return (null === (t = this.providers) || void 0 === t ? void 0 : t[e]) || (null === (r = this.providers) || void 0 === r ? void 0 : r.default) || this.explorer
                }
                async getBalance() {
                    return this.getProvider("balance").getBalance(this.address, !0)
                }
                async getTransactions(e) {
                    try {
                        if (!this.address) throw new Error(`[${this.ticker}] getTransactions error: address is not loaded`);
                        return this.getProvider("history").getTransactions({
                            ...e[0],
                            address: this.address
                        })
                    } catch (e) {
                        return console.error(e), this.transactions || []
                    }
                }
                async getInfo() {
                    const e = await this.getBalance();
                    return this.balance = e, {
                        balance: e
                    }
                }
                getUnspentOutputs(e = this.address, t) {
                    return t || "function" != typeof this.getScriptPubKey || (t = this.getScriptPubKey()), this.getProvider("utxo").getUnspentOutputs(e, t)
                }
                getUTXO() {
                    return this.getProvider("utxo").getUnspentOutputs(this.address)
                }
                sendTransaction(e) {
                    return this.getProvider("send").sendTransaction(e)
                }
                getTransaction(e) {
                    return this.getProvider("tx").getTransaction(this.address, e)
                }
                updateCoinParamsFromServer(e) {
                    e.txWebUrl && this.explorer && (this.explorer.webUrl = e.txWebUrl), e.chainID && (this.chainId = e.chainID), e.branchId && (this.branchId = e.branchId);
                    try {
                        return this.setProviders(e.explorers, e.txWebUrl), e.feeData && (this.feeData = e.feeData, this.fee = e.feeData.fee, e.feeData.stakingContract && (this.stakingContract = e.feeData.stakingContract), e.feeData.stakingProxyContract && (this.stakingProxyContract = e.feeData.stakingProxyContract), e.feeData.stakingFeeGas && (this.stakingFeeGas = e.feeData.stakingFeeGas), e.feeData.unstakingFeeGas && (this.unstakingFeeGas = e.feeData.unstakingFeeGas), e.feeData.claimFeeGas && (this.claimFeeGas = e.feeData.claimFeeGas), e.feeData.tokenFeeGas && (this.tokenFeeGas = e.feeData.tokenFeeGas), e.feeData.sendFeeGas && (this.sendFeeGas = e.feeData.sendFeeGas), e.feeData.defaultGasPrice && (this.sendFeeGas = e.feeData.defaultGasPrice), e.feeData.gasPriceCoefficient && (this.sendFeeGas = e.feeData.gasPriceCoefficient), e.feeData.defaultMaxGasPrice && (this.sendFeeGas = e.feeData.defaultMaxGasPrice), e.feeData.gasLimitCoefficient && (this.sendFeeGas = e.feeData.gasLimitCoefficient), e.feeData.gasLimit && (this.sendFeeGas = e.feeData.gasLimit), e.feeData.resendTimeout && (this.sendFeeGas = e.feeData.resendTimeout)), !0
                    } catch (e) {
                        return e.message = `[${this.ticker}] updateCoinParamsFromServer error: ${e.message||"Unknown error"}`, a.default.error({
                            instance: this,
                            error: e
                        }), !1
                    }
                }
            };
            t.default = o
        },
        4398: function(e, t, r) {
            "use strict";
            var s = r(2);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var n = s(r(35)),
                a = r(29),
                i = r(26);
            var o = e => class extends e {
                get instance() {
                    return {
                        id: this.id,
                        ticker: this.ticker,
                        name: this.name,
                        decimal: this.decimal,
                        alias: this.alias,
                        parent: this.id,
                        BN: n.default,
                        toCurrencyUnit: e => this.toCurrencyUnit(e),
                        toMinimalUnit: e => this.toMinimalUnit(e),
                        coreLibrary: this.coreLibrary,
                        getAddressFromPublicKey: e => this.getAddressFromPublicKey(e),
                        getScriptPubKey: () => this.coreLibrary.address.toOutputScript(this.address, this.network).toString("hex"),
                        feeCoefficient: this.coefficient,
                        feeDefault: this.feeData && this.feeData.fee
                    }
                }
                async loadWallet(e) {
                    const t = this.coreLibrary.bip32.fromSeed(e, this.network).derivePath(this.derivation);
                    if (!t) throw new a.WalletError({
                        type: i.WALLET_ERROR,
                        error: new Error("can't get a privateKey!"),
                        instance: this
                    });
                    return this.privateKey = t.toWIF(), this.address = this.getAddress(), this
                }
                getAddress(e = this.privateKey) {
                    const t = this.getKeyForSignFromPrivateKey(e);
                    return e ? this.getAddressFromPublicKey(t.publicKey) : new a.WalletError({
                        type: i.WALLET_ERROR,
                        error: new Error("privateKey is empty!"),
                        instance: this
                    })
                }
                getAddressFromPublicKey(e) {
                    return this.coreLibrary.payments.p2pkh({
                        pubkey: e,
                        network: this.network
                    }).address
                }
                async validateAddress(e) {
                    if (!e) return !1;
                    try {
                        return this.coreLibrary.address.toOutputScript(e, this.network), !0
                    } catch (e) {
                        return !1
                    }
                }
                getTransactionBuilder() {
                    return new this.coreLibrary.TransactionBuilder(this.network)
                }
                addInput(e, t) {
                    e.addInput(t.txId, t.outputIndex)
                }
                signInput(e, t, r, s) {
                    e.sign(r, t)
                }
                async createClaimTransaction(e) {
                    const t = this.getAddress(e);
                    if (!t || 0 === t.length) throw new a.WalletError({
                        type: i.WALLET_ERROR,
                        error: new Error("can't get a address from forked privateKey!"),
                        instance: this
                    });
                    const r = await this.getUnspentOutputs(t);
                    let s = this.explorer.calculateBalance(r);
                    const n = await this.getFee(s, !0, t);
                    if (s = new this.BN(s).sub(n).toString(), new this.BN(s).lt(new this.BN(0))) throw new a.InsufficientFundsError({
                        type: i.SEND_TRANSACTION_TYPE,
                        error: new Error("Not enough otherside balance for claim"),
                        instance: this
                    });
                    let o = new this.BN(0);
                    const d = [],
                        c = new this.BN(s).add(n);
                    r.forEach(({
                        txid: e,
                        vout: t,
                        address: r,
                        script: s,
                        value: n
                    }) => {
                        if (o.lt(c)) {
                            const a = new this.BN(n);
                            o = o.add(a), d.push({
                                txId: e,
                                outputIndex: t,
                                address: r,
                                script: s,
                                satoshis: parseInt(n, 10)
                            })
                        }
                    });
                    const l = o.sub(new this.BN(s)).sub(n);
                    if (l.lt(new this.BN(0))) throw new a.InsufficientFundsError({
                        type: i.SEND_TRANSACTION_TYPE,
                        error: new Error("Insufficient funds!"),
                        instance: this
                    });
                    return await this.buildTx(d, this.address, s, l, e, t, 1)
                }
                async createTransaction({
                    address: e,
                    amount: t
                }) {
                    const r = await this.getUnspentOutputs(),
                        s = await this.getFee({
                            utxos: r
                        });
                    let n = new this.BN(0);
                    const o = [],
                        d = new this.BN(t).add(s);
                    r.forEach(e => {
                        if (n.lt(d)) {
                            const t = new this.BN(e.value);
                            n = n.add(t), o.push({
                                txId: e.txid,
                                outputIndex: e.vout,
                                addres: e.address,
                                script: e.script,
                                satoshis: parseInt(e.value, 10)
                            })
                        }
                    });
                    const c = n.sub(new this.BN(t)).sub(s);
                    if (c.lt(new this.BN(0))) throw new a.InsufficientFundsError({
                        type: i.SEND_TRANSACTION_TYPE,
                        error: new Error("Insufficient funds!"),
                        instance: this
                    });
                    return await this.buildTx(o, e, t, c, void 0, void 0, 1)
                }
                buildTx(e, t, r, s, n, o, d) {
                    return new Promise((c, l) => {
                        const u = this.getTransactionBuilder();
                        d && "BCD" !== this.ticker && u.setVersion(d), e.forEach(e => {
                            this.addInput(u, e)
                        }), u.addOutput(t, parseInt(r.toString(), 10)), s.gt(new this.BN(0)) && u.addOutput(o || this.address, parseInt(s.toString(), 10));
                        const h = this.getKeyForSignFromPrivateKey(n);
                        e.forEach((e, t) => {
                            try {
                                this.signInput(u, h, t, e)
                            } catch (e) {
                                throw new a.ExplorerRequestError({
                                    type: i.SEND_TRANSACTION_TYPE,
                                    error: e,
                                    instance: this
                                })
                            }
                        });
                        try {
                            c(u.build().toHex())
                        } catch (e) {
                            l(e)
                        }
                    })
                }
                getKeyForSignFromPrivateKey(e = this.privateKey) {
                    return this.coreLibrary.ECPair.fromWIF(e, this.network)
                }
                getScriptPubKey() {
                    return this.coreLibrary.address.toOutputScript(this.address, this.network).toString("hex")
                }
            };
            t.default = o
        },
        4399: function(e, t, r) {
            "use strict";
            var s = r(2);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var n = s(r(55)),
                a = r(29),
                i = s(r(1433)),
                o = r(52),
                d = r(26),
                c = s(r(545));

            function l(e, t) {
                ! function(e, t) {
                    if (t.has(e)) throw new TypeError("Cannot initialize the same private elements twice on an object")
                }(e, t), t.add(e)
            }

            function u(e, t, r) {
                if (!t.has(e)) throw new TypeError("attempted to get private field on non-instance");
                return r
            }
            var h = e => {
                var t;
                return t = new WeakSet, class extends e {
                    constructor(...e) {
                        super(...e), l(this, t)
                    }
                    async _selectTokens({
                        parentTicker: e
                    }) {
                        let t = [];
                        return t = e ? await o.db.tokens.where({
                            parentTicker: e
                        }).toArray().catch(e => n.default.error({
                            instance: this,
                            error: e
                        })) : await o.db.tokens.toArray().catch(e => n.default.error({
                            instance: this,
                            error: e
                        })), t
                    }
                    async _insertBatchTokens(e) {
                        return await o.db.tokens.bulkPut(e), e
                    }
                    async _updateBatchTokens(e) {
                        const t = [];
                        for (const r of e) t.push(this._updateToken(r));
                        return await Promise.all(t), e
                    }
                    async _updateToken(e) {
                        const t = await o.db.tokens.where({
                            uniqueField: e.uniqueField
                        }).first().catch(e => n.default.error({
                            instance: this,
                            error: e
                        }));
                        if (t && t.id) return await o.db.tokens.update(t.id, e), e
                    }
                    async _removeToken(e) {
                        const t = await o.db.tokens.where({
                            uniqueField: e
                        }).first().catch(e => n.default.error({
                            instance: this,
                            error: e
                        }));
                        t && t.id && await o.db.tokens.delete(t.id)
                    }
                    async loadTokensFromDb(e) {
                        return await this._selectTokens({
                            parentTicker: e
                        })
                    }
                    async insertTokensToDb(e) {
                        const t = e.map(e => (e.parentTicker = this.id, e)).filter(e => e),
                            [r] = await this.getUniquesAndDuplicates(e);
                        return await this._insertBatchTokens(t.filter(e => void 0 === r[e.uniqueField])), t
                    }
                    async updateTokensInDb(e, t) {
                        const r = (await this.loadTokensFromDb(this.ticker)).map(({
                                uniqueField: e
                            }) => e.toLowerCase()),
                            s = e.reduce((e, {
                                uniqueField: t,
                                ticker: s,
                                name: n,
                                source: a,
                                isCustom: i,
                                ...o
                            }) => (r.includes(t.toLowerCase()) && ("list" !== a || i ? e.push({
                                ...o,
                                uniqueField: t,
                                source: a,
                                parentTicker: this.ticker
                            }) : e.push({
                                ...o,
                                uniqueField: t,
                                ticker: s,
                                name: n,
                                source: a,
                                isCustom: i,
                                parentTicker: this.ticker
                            })), e), []);
                        return await this._updateBatchTokens(s), s
                    }
                    async removeTokenFromDb(e) {
                        await this._removeToken(e)
                    }
                    async loadTokensList(e) {
                        try {
                            this.bannedTokens = await this.getBannedTokenList() || [];
                            const s = "list",
                                n = await this.getTokenList() || [],
                                a = this.processTokenList(await u(this, t, r).call(this, n, e, s), s),
                                i = a.filter(e => e.uniqueField).map(e => e.uniqueField);
                            await this.deleteDuplicates(a), await this.updateTokensInDb(a, s), await this.bulkDeleteNotInList(i);
                            const d = await o.db.tokens.where("uniqueField").anyOf(i).toArray(),
                                c = d.map(e => e.uniqueField),
                                l = a.filter(e => !c.includes(e.uniqueField));
                            return await this.insertTokensToDb(l), this.createTokens([...d, ...l], e)
                        } catch (e) {
                            throw console.warn("[HasTokensMixin] loadTokensList failed with error " + e), new i.default({
                                type: d.INTERNAL_ERROR,
                                error: e,
                                instance: this
                            })
                        }
                    }
                    async fetchUserTokens(e) {
                        const s = await this.loadTokensFromDb(this.id);
                        s && 0 === s.length ? await this.loadTokensList(e) : this.createTokens(await u(this, t, r).call(this, s, e, "user"), e);
                        const n = this.getUserTokenList ? await this.getUserTokenList() : [],
                            a = await this.processTokenList(await u(this, t, r).call(this, n, e, "user"), "user"),
                            i = await this.insertTokensToDb(a);
                        return this.createTokens(i, e)
                    }
                    processTokenList(e = [], t) {
                        return Array.isArray(e) ? e.map(e => this.getTokenObject(e, t)).filter(e => this.isTokenExcluded(e)).filter(e => !!e.ticker && !!e.name && /^[a-zA-Z0-9 -_.]+$/.test(e.ticker)).filter(e => "" !== e.ticker.trim() && !(e.ticker.length > 9 || e.name.length > 30)).map(e => ({
                            ...e,
                            source: t
                        })) : []
                    }
                    async getTokenList() {
                        throw new a.UndeclaredAbstractMethodError("getTokenList", this)
                    }
                    async getBannedTokenList() {
                        return []
                    }
                    getExcludedTokenList() {
                        return (Array.isArray(this.bannedTokens) ? this.bannedTokens : []).map(e => e.toLowerCase())
                    }
                    async getUserTokenList() {
                        return []
                    }
                    isTokenExcluded(e) {
                        return !this.getExcludedTokenList().includes(e.contract.toLowerCase())
                    }
                    getTokenObject(e, t = "user") {
                        return "user" === t ? this.getTokenFromUserList(e, t) : this.getTokenFromCommonList(e, t)
                    }
                    getTokenFromUserList(e, t) {
                        var r, s;
                        return {
                            name: e.name,
                            ticker: e.symbol,
                            decimal: Number(e.decimals) || 0,
                            contract: null === (r = e.contractAddress) || void 0 === r ? void 0 : r.toLowerCase(),
                            parentTicker: this.id,
                            uniqueField: null === (s = e.contractAddress) || void 0 === s ? void 0 : s.toLowerCase(),
                            visibility: !0,
                            confirmed: e.confirmed,
                            source: t
                        }
                    }
                    getTokenFromCommonList(e, t) {
                        return {
                            name: e.name,
                            ticker: e.ticker,
                            decimal: Number(e.decimal) || 0,
                            contract: e.contract.toLowerCase(),
                            parentTicker: this.ticker,
                            uniqueField: e.contract.toLowerCase(),
                            visibility: !1 !== e.visibility,
                            confirmed: e.confirmed,
                            source: t
                        }
                    }
                    async updateCustomToken(e, t) {
                        await this.removeTokenFromDb(e.uniqueField);
                        for (const r in t) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
                        const r = {
                            name: e.name,
                            ticker: e.ticker,
                            decimal: Number(e.decimal),
                            contract: e.contract.toLowerCase(),
                            parentTicker: e.parent,
                            uniqueField: e.contract.toLowerCase()
                        };
                        return await this.insertTokensToDb([r])
                    }
                    async createCustomToken({
                        name: e,
                        ticker: s,
                        decimal: n,
                        contract: a,
                        uniqueField: i,
                        source: o = "custom"
                    }, d) {
                        const c = await u(this, t, r).call(this, [{
                                name: e,
                                ticker: s,
                                decimal: n,
                                contract: a,
                                uniqueField: i,
                                visibility: !0,
                                source: o,
                                isCustom: !0
                            }], d),
                            l = this.createTokens(c, d);
                        return await this.insertTokensToDb(l.map(e => this.getTokenObject(e, o))), l
                    }
                    createTokens(e = [], t) {
                        const r = e,
                            s = [];
                        if (0 !== e.length) return r.forEach(e => {
                            const r = t.getWallet((0, o.getTokenId)({
                                contract: e.contract,
                                parent: this.id,
                                ticker: e.ticker
                            }));
                            if (r && r.uniqueField === e.uniqueField) return void(r.visibility = e.visibility);
                            const n = this.createToken({
                                name: e.name,
                                ticker: e.ticker,
                                decimal: e.decimal,
                                contract: e.contract.toLowerCase(),
                                uniqueField: e.uniqueField,
                                visibility: !1 !== e.visibility,
                                confirmed: e.confirmed,
                                denom: e.denom,
                                source: e.source,
                                isStakable: e.isStakable,
                                config: e.config
                            });
                            s.push(n), t.push(n), t.store.walletsCollection[n.alias].set(n.id.toUpperCase(), n), this.tokens[e.contract.toLowerCase()] = n
                        }), this.bus && this.bus.$emit("update::coin-list"), s;
                        console.warn(this.ticker, "No tokens to create")
                    }
                    async getUniquesAndDuplicates(e) {
                        const t = await o.db.tokens.where(["parentTicker", "uniqueField"]).anyOf(e.filter(e => (null == e ? void 0 : e.uniqueField) && (null == e ? void 0 : e.parentTicker)).map(e => [e.parentTicker, e.uniqueField])),
                            r = {},
                            s = [];
                        return await t.each(e => {
                            r[e.uniqueField] ? s.push(e.id) : r[e.uniqueField] = e.id
                        }), [r, s]
                    }
                    async deleteDuplicates(e) {
                        try {
                            const [, t] = await this.getUniquesAndDuplicates(e);
                            return o.db.tokens.where("id").anyOf(t).delete()
                        } catch (e) {
                            return void console.error(e)
                        }
                    }
                    async bulkDeleteNotInList(e) {
                        const t = await o.db.tokens.where("parentTicker").equals(this.id).filter(t => "list" === t.source && !e.includes(t.uniqueField)).toArray();
                        await o.db.tokens.where("id").anyOf(t.map(e => e.id)).delete()
                    }
                };
                async function r(e = [], t, r) {
                    if (void 0 === t) throw new TypeError("#setTokensConfirmation Error: wallets instance is not defined");
                    const s = await this.getTokenList(),
                        n = t.filter(e => !(e instanceof c.default)).map(e => e.ticker);
                    return e.reduce((e, t) => {
                        if (n.includes(t.ticker) && "list" !== r) return t.confirmed = !1, e;
                        const a = s.some(({
                                contract: e,
                                owner: r
                            }) => {
                                var s, n;
                                return ((null == e ? void 0 : e.toLowerCase()) || (null == r ? void 0 : r.toLowerCase())) === ((null === (s = t.contract) || void 0 === s ? void 0 : s.toLowerCase()) || (null === (n = t.owner) || void 0 === n ? void 0 : n.toLowerCase()))
                            }),
                            i = s.some(({
                                ticker: e,
                                symbol: r
                            }) => !a && (e || r) === (t.ticker || t.symbol));
                        return t.isStakable = s.some(({
                            contract: e,
                            owner: r,
                            isStakable: s
                        }) => {
                            var n, a;
                            return s && ((null == e ? void 0 : e.toLowerCase()) || (null == r ? void 0 : r.toLowerCase())) === ((null === (n = t.contract) || void 0 === n ? void 0 : n.toLowerCase()) || (null === (a = t.owner) || void 0 === a ? void 0 : a.toLowerCase()))
                        }), t.confirmed = !i, e
                    }, e)
                }
            };
            t.default = h
        },
        4400: function(e, t, r) {
            "use strict";
            var s = r(2);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var n = s(r(57)),
                a = s(r(55));
            var i = e => class extends e {
                async getDomainAddresses(e) {
                    if (!e.toLowerCase().endsWith(".zil") || !e.toLowerCase().endsWith(".crypto")) return null;
                    const t = await n.default.get("https://unstoppabledomains.com/api/v1/" + e).catch(e => a.default.error({
                        instance: this,
                        error: e
                    }));
                    return !(!t || !t.data) && this.extractAddress(t.data)
                }
                extractAddress({
                    addresses: e
                }) {
                    return e[this.ticker.toUpperCase()]
                }
            };
            t.default = i
        },
        4401: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var s = e => class extends e {
                onConfirmSocketTx(e) {
                    this.getInfo(), null != e && e.direction ? this.bus.$emit("socket::newtx", {
                        id: this.id,
                        ticker: this.ticker,
                        amount: e.amount,
                        txid: e.txid
                    }) : this.bus.$emit("socket::newtx::outgoing", {
                        id: this.id,
                        ticker: this.ticker
                    })
                }
            };
            t.default = s
        },
        4402: function(e, t, r) {
            "use strict";
            var s = r(2);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var n = s(r(2070));
            var a = e => class extends e {
                async getFee({
                    utxos: e = null,
                    feePerByte: t = null
                } = {}) {
                    const r = e || await this.getUnspentOutputs(),
                        s = this.calculateBalance(r),
                        a = t || this.getFeePerByte(),
                        i = s.toString(),
                        o = r.map(({
                            txid: e,
                            vout: t,
                            script: r,
                            value: s,
                            amount: n
                        }) => ({
                            txId: e,
                            vout: t,
                            value: Number(s || n)
                        })),
                        {
                            fee: d
                        } = (0, n.default)(o, [{
                            address: this.mockAddress || this.address,
                            value: Number(i)
                        }], Number(a.toString()));
                    return new this.BN(d)
                }
                getMultiplier() {
                    return new this.BN(this.coefficient)
                }
                getFeePerByte() {
                    return new this.BN(this.feePerByte).add(this.getMultiplier())
                }
                calculateBalance(e = []) {
                    return e.reduce((e, {
                        value: t
                    }) => new this.BN(t).add(e), new this.BN("0"))
                }
            };
            t.default = a
        },
        4403: function(e, t, r) {
            "use strict";
            var s = r(2);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var n = s(r(1010));
            var a = e => class extends e {
                getAddress() {
                    if (!this.privateKey) return new Error(this.ticker + " privateKey is empty!!!");
                    let e = this.coreLibrary.PrivateKey.fromWIF(this.privateKey.toString()).toAddress(this.network).toString();
                    return n.default.isCashAddress(e) || (e = this.convertToCashAddress(e)), e
                }
                convertToLegacyAddress(e) {
                    return n.default.toLegacyAddress(e)
                }
                convertToCashAddress(e) {
                    return n.default.toCashAddress(e)
                }
                async validateAddress(e) {
                    try {
                        return n.default.isLegacyAddress(e) || n.default.isCashAddress(e)
                    } catch (e) {
                        return !1
                    }
                }
                async createTransaction({
                    address: e,
                    amount: t
                }) {
                    const r = await this.getUnspentOutputs(),
                        s = Number(await this.getFee(t)),
                        a = n.default.isCashAddress(e) ? e : n.default.toCashAddress(e),
                        i = n.default.isCashAddress(this.address) ? this.address : n.default.toCashAddress(this.address);
                    return (new this.coreLibrary.Transaction).from(r).to(a, Number(t)).fee(s).feePerKb(1e3 * this.getFeePerByte()).change(i).sign(this.privateKey).serialize()
                }
            };
            t.default = a
        },
        5390: function(e, t, r) {
            "use strict";
            r.r(t), r.d(t, "banner", (function() {
                return d
            }));
            var s = r(67),
                n = r.n(s),
                a = r(29),
                i = r(52),
                o = (e, t, r) => new Promise((s, n) => {
                    var a = e => {
                            try {
                                o(r.next(e))
                            } catch (e) {
                                n(e)
                            }
                        },
                        i = e => {
                            try {
                                o(r.throw(e))
                            } catch (e) {
                                n(e)
                            }
                        },
                        o = e => e.done ? s(e.value) : Promise.resolve(e.value).then(a, i);
                    o((r = r.apply(e, t)).next())
                });
            const d = new class Banner_Banner {
                shouldBeShown() {
                    return o(this, null, (function*() {
                        var e, t;
                        const {
                            viewCount: r
                        } = null != (e = yield this.getContent()) ? e : {};
                        if (!r) return !1;
                        const {
                            views: s
                        } = null != (t = yield this.getBannerRecordFromDb()) ? t : {
                            views: 0
                        };
                        return s < r
                    }))
                }
                getContent() {
                    return o(this, null, (function*() {
                        try {
                            if (this.cache) return this.cache;
                            const [e, {
                                banner: t
                            } = {
                                banner: void 0
                            }] = yield Promise.all([n.a.get(s.ConfigKey.Banner, !0), this.getBannerRecordFromDb()]), r = JSON.stringify(e);
                            return r !== t && (yield this.saveToDbAndResetViews(r)), this.cache = e, this.cache
                        } catch (e) {
                            throw new a.ExternalError({
                                error: e,
                                instance: this
                            })
                        }
                    }))
                }
                incrementViews() {
                    return o(this, null, (function*() {
                        var e;
                        try {
                            const {
                                banner: t,
                                views: r
                            } = null != (e = yield i.db.banner.get("key")) ? e : {};
                            if (void 0 === t || void 0 === r) throw new Error("No banner in db");
                            yield i.db.banner.put({
                                key: "key",
                                banner: t,
                                views: r + 1
                            })
                        } catch (e) {
                            throw new a.ExternalError({
                                error: e,
                                instance: this
                            })
                        }
                    }))
                }
                getBannerRecordFromDb() {
                    return i.db.banner.get("key")
                }
                saveToDbAndResetViews(e) {
                    return o(this, null, (function*() {
                        yield i.db.banner.put({
                            key: "key",
                            banner: e,
                            views: 0
                        })
                    }))
                }
            }
        },
        930: function(e, t, r) {
            "use strict";
            var s = r(2);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), Object.defineProperty(t, "BitcoinJSMixin", {
                enumerable: !0,
                get: function() {
                    return p.default
                }
            }), Object.defineProperty(t, "BitcoinLikeFeeMixin", {
                enumerable: !0,
                get: function() {
                    return w.default
                }
            }), Object.defineProperty(t, "BitcoreBitcoinCashMixin", {
                enumerable: !0,
                get: function() {
                    return b.default
                }
            }), Object.defineProperty(t, "BitcoreMixin", {
                enumerable: !0,
                get: function() {
                    return h.default
                }
            }), Object.defineProperty(t, "BitgoMixin", {
                enumerable: !0,
                get: function() {
                    return d.default
                }
            }), Object.defineProperty(t, "CosmosMixin", {
                enumerable: !0,
                get: function() {
                    return c.default
                }
            }), Object.defineProperty(t, "CosmosMixinV2", {
                enumerable: !0,
                get: function() {
                    return u.default
                }
            }), Object.defineProperty(t, "HasBlockScanner", {
                enumerable: !0,
                get: function() {
                    return y.default
                }
            }), Object.defineProperty(t, "HasDomainsMixin", {
                enumerable: !0,
                get: function() {
                    return m.default
                }
            }), Object.defineProperty(t, "HasProviders", {
                enumerable: !0,
                get: function() {
                    return f.default
                }
            }), Object.defineProperty(t, "HasTokensMixin", {
                enumerable: !0,
                get: function() {
                    return g.default
                }
            }), Object.defineProperty(t, "Neo3Mixin", {
                enumerable: !0,
                get: function() {
                    return i.default
                }
            }), Object.defineProperty(t, "NeoMixin", {
                enumerable: !0,
                get: function() {
                    return n.default
                }
            }), Object.defineProperty(t, "NftMixin", {
                enumerable: !0,
                get: function() {
                    return v.default
                }
            }), Object.defineProperty(t, "OntMixin", {
                enumerable: !0,
                get: function() {
                    return a.default
                }
            }), Object.defineProperty(t, "StakingMixin", {
                enumerable: !0,
                get: function() {
                    return l.default
                }
            }), Object.defineProperty(t, "Web3Mixin", {
                enumerable: !0,
                get: function() {
                    return o.default
                }
            });
            var n = s(r(4123)),
                a = s(r(4151)),
                i = s(r(4155)),
                o = s(r(4156)),
                d = s(r(4160)),
                c = s(r(4161)),
                l = s(r(1995)),
                u = s(r(4253)),
                h = s(r(4390)),
                f = s(r(4393)),
                p = s(r(4398)),
                g = s(r(4399)),
                m = s(r(4400)),
                y = s(r(4401)),
                w = s(r(4402)),
                b = s(r(4403)),
                v = s(r(2349))
        }
    }
]);