(window.webpackJsonp = window.webpackJsonp || []).push([
    [52], {
        1121: function(t, e, a) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.default = void 0;
            var r = a(52),
                s = a(346);
            const i = ({
                    ticker: t,
                    contractAddress: e,
                    tokenId: a
                }) => `${t},${n(e)},${a}`,
                n = t => null === t ? "" : t;
            var o = new class NftHistory {
                async get(t = []) {
                    const e = t.map(t => t.ticker);
                    await this.maintenance();
                    const a = e.length > 0 ? r.db.sentNfts.where("ticker").anyOf(e) : r.db.sentNfts.toCollection(),
                        n = await a.toArray(),
                        o = new Set(n.map(t => i(t))),
                        c = e.length > 0 ? r.db.nfts.where("ticker").anyOf(e) : r.db.nfts.toCollection();
                    return (await c.and(t => !1 === o.has(i(t))).toArray()).map(({
                        ticker: t,
                        contractAddress: e,
                        tokenId: a,
                        blockchain: r,
                        tokenStandard: i,
                        name: n,
                        description: o,
                        imageUrl: c
                    }) => {
                        return new s.NftToken("" === (l = e) ? null : l, a, t, r, i, n, o, c);
                        var l
                    })
                }
                getOneOptimistic(t, e, a) {
                    const {
                        ticker: s
                    } = t;
                    return r.db.nfts.where("[ticker+contractAddress+tokenId]").equals([s, n(e), a]).first()
                }
                async set(t, e) {
                    const {
                        ticker: a
                    } = t;
                    return await r.db.nfts.where({
                        ticker: a
                    }).delete(), r.db.nfts.bulkAdd(e.map(t => (t.contractAddress = n(t.contractAddress), t)))
                }
                delete(t, e, a) {
                    const {
                        ticker: s
                    } = t;
                    return r.db.sentNfts.add({
                        ticker: s,
                        contractAddress: n(e),
                        tokenId: a,
                        expiredAt: Date.now() + 3e5
                    })
                }
                async maintenance() {
                    return r.db.sentNfts.where("expiredAt").below(Date.now()).delete()
                }
            };
            e.default = o
        },
        1408: function(t, e, a) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.default = void 0;
            var r = a(52);
            var s = new class AddrCacheDb {
                async getAddrCache(t, e) {
                    const a = await r.db.addrCache;
                    return t && e ? a.where({
                        ticker: t,
                        type: e
                    }).toArray() : t ? a.where({
                        ticker: t
                    }).toArray() : a.toArray()
                }
                async setAddrCache({
                    ticker: t,
                    type: e,
                    addresses: a
                }) {
                    const r = a.map(a => ({
                        id: a,
                        ticker: t,
                        type: e,
                        address: a
                    }));
                    return await this._insertBatch(r), r
                }
                async _insertBatch(t) {
                    return await r.db.addrCache.bulkPut(t), t
                }
                async _removeItem(t) {
                    await r.db.addrCache.delete(t)
                }
            };
            e.default = s
        },
        143: function(t, e, a) {
            "use strict";
            var r = a(2);
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.default = void 0;
            const s = new(r(a(69)).default);
            s.setMaxListeners(0);
            var i = s;
            e.default = i
        },
        1434: function(t, e, a) {
            "use strict";
            var r = a(2);
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.default = void 0;
            var s = a(26),
                i = r(a(1435));
            var n = new class Environment {
                constructor() {
                    this.settings = i.default
                }
                get(t) {
                    return this.getSection()[t] || this.getDefaultSection()[t]
                }
                getSection() {
                    if (process.env.STAGING) return this.settings["true" === process.env.STAGING ? "stage" : "default"];
                    const t = this.getEnvironmentFromStorage() || process.env.ATOMIC_CONFIG_MODE || "default";
                    return this.settings[t] || this.settings.default
                }
                getDefaultSection() {
                    return this.settings.default
                }
                getEnvironmentFromStorage() {
                    try {
                        var t;
                        return null !== (t = localStorage.getItem(s.LOCAL_ENV_CONFIG)) && void 0 !== t ? t : null
                    } catch (t) {
                        return console.warn(t), null
                    }
                }
            };
            e.default = n
        },
        1436: function(t, e, a) {
            "use strict";
            var r = a(2);
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.default = void 0, e.fetchPredefinedValidators = async function() {
                Object.keys(m).forEach(async t => {
                    const e = g.find(e => e.getName().toLowerCase() === t.toLowerCase());
                    if (!e) return;
                    n.default.register(m[t]);
                    const a = await n.default.get(m[t]).catch(e => (o.default.error(e), l.default.find(e => e.currency === t)));
                    e.modifyPredefinedValidators("XTZ" === t ? a.filter(t => t.stakingCapacity > t.stakingBalance) : a)
                })
            };
            var s = r(a(57)),
                i = p(a(2457)),
                n = p(a(67)),
                o = r(a(55)),
                c = r(a(192)),
                l = r(a(943)),
                d = a(2469),
                u = a(26),
                h = a(2471);

            function f(t) {
                if ("function" != typeof WeakMap) return null;
                var e = new WeakMap,
                    a = new WeakMap;
                return (f = function(t) {
                    return t ? a : e
                })(t)
            }

            function p(t, e) {
                if (!e && t && t.__esModule) return t;
                if (null === t || "object" != typeof t && "function" != typeof t) return {
                    default: t
                };
                var a = f(e);
                if (a && a.has(t)) return a.get(t);
                var r = {},
                    s = Object.defineProperty && Object.getOwnPropertyDescriptor;
                for (var i in t)
                    if ("default" !== i && Object.prototype.hasOwnProperty.call(t, i)) {
                        var n = s ? Object.getOwnPropertyDescriptor(t, i) : null;
                        n && (n.get || n.set) ? Object.defineProperty(r, i, n) : r[i] = t[i]
                    } return r.default = t, a && a.set(t, r), r
            }
            const m = {
                    ADA: "stake_validators_ada",
                    ATOM: "stake_validators_atom-2",
                    BAND: "stake_validators_band",
                    HBAR: "stake_validators_hbar",
                    ICX: "stake_validators_icx",
                    NEAR: "stake_validators_near",
                    SOL: "stake_validators_sol",
                    TRX: "stake_validators_trx",
                    XTZ: "stake_validators_tezos",
                    ZIL: "stake_validators_zil",
                    INJ: "stake_validators_inj"
                },
                g = Object.values(i).map(t => new t);
            var y = class Stakings extends Array {
                constructor(...t) {
                    super(...t), this.settings = u.STAKING_SETTINGS_DEFAULT, this.push(...g)
                }
                async fetchSettings() {
                    const t = await n.default.get(n.ConfigKey.StakingCoins).catch(t => (o.default.error({
                        instance: this,
                        error: t
                    }), null)) || u.STAKING_SETTINGS_DEFAULT;
                    return this.settings = t.filter(({
                        platforms: t = []
                    }) => t.some(t => (0, h.isSupportedAppVersion)(c.default.getPlatform(), c.default.getVersion(), t))), this.settings
                }
                getStakingInterface(t) {
                    return this.find(e => e.getName().toLowerCase() === t.toLowerCase())
                }
                saveSuccessStaking(t) {
                    const e = {
                        method: "post",
                        url: "https://apollo.atomicwallet.io/stakings",
                        data: t
                    };
                    d.Everstake.submitEverstakeTx({
                        provider: t.provider,
                        currency: t.currency,
                        hash: t.hash
                    }), (0, s.default)(e)
                }
            };
            e.default = y
        },
        1438: function(t, e, a) {
            "use strict";
            var r = a(2);
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.default = void 0, e.startSettingsSync = async function() {
                await async function t() {
                    clearTimeout(u);
                    try {
                        h = await i.default.get(i.ConfigKey.CashbackSettings)
                    } catch (t) {
                        console.error("Fetch cashback settings failed:", t)
                    }
                    u = setTimeout(t, 6e5)
                }(), c.default.on(l.CONFIGS.UPDATED, ({
                    id: t,
                    config: e
                }) => {
                    t === i.ConfigKey.CashbackSettings && (h = e)
                })
            };
            var s = r(a(466)),
                i = function(t, e) {
                    if (!e && t && t.__esModule) return t;
                    if (null === t || "object" != typeof t && "function" != typeof t) return {
                        default: t
                    };
                    var a = d(e);
                    if (a && a.has(t)) return a.get(t);
                    var r = {},
                        s = Object.defineProperty && Object.getOwnPropertyDescriptor;
                    for (var i in t)
                        if ("default" !== i && Object.prototype.hasOwnProperty.call(t, i)) {
                            var n = s ? Object.getOwnPropertyDescriptor(t, i) : null;
                            n && (n.get || n.set) ? Object.defineProperty(r, i, n) : r[i] = t[i]
                        } r.default = t, a && a.set(t, r);
                    return r
                }(a(67)),
                n = r(a(557)),
                o = r(a(2477)),
                c = r(a(143)),
                l = a(173);

            function d(t) {
                if ("function" != typeof WeakMap) return null;
                var e = new WeakMap,
                    a = new WeakMap;
                return (d = function(t) {
                    return t ? a : e
                })(t)
            }
            let u, h = o.default;
            var f = new class Cashback {
                get settings() {
                    return h
                }
                currentLevel(t) {
                    if (!t && "0" !== String(t)) return this.settings[0];
                    const e = this.settings[this.settings.length - 1];
                    return t >= e.minAWC ? e : this.settings.find(e => t >= e.minAWC && t < e.maxAWC)
                }
                async getCoinRate(t) {
                    await n.default.getRates([t], "USD", !0);
                    return Number(n.default.getCoinPrice(t, "USD")) || 0
                }
                async calculateCashback(t, e, a) {
                    const r = n.default.getCoinPrice(e, "USD") || await this.getCoinRate(e),
                        i = n.default.getCoinPrice(this.cashbackWallet, "USD") || await this.getCoinRate(this.cashbackWallet);
                    if (r * i == 0) return "0";
                    const o = this.currentLevel(a).percent;
                    return new s.default(r).multipliedBy(t).multipliedBy(o).dividedBy(i).toFixed(8, 2).toString()
                }
                setCashbackWallet(t) {
                    this.cashbackWallet = t
                }
            };
            e.default = f
        },
        1460: function(t, e, a) {
            "use strict";
            var r = a(2);
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.default = void 0, e.startSettingsSync = async function t() {
                async function e() {
                    clearTimeout(u);
                    try {
                        h = await n.default.get(n.ConfigKey.ReviewSettings)
                    } catch (t) {
                        console.error("Fetch reviews settings failed:", t)
                    }
                    u = setTimeout(t, 6e5)
                }
                await e(), o.default.on(l.CONFIGS.UPDATED, ({
                    id: t,
                    config: e
                }) => {
                    t === n.ConfigKey.ReviewSettings && (h = e)
                })
            };
            var s = r(a(57)),
                i = r(a(55)),
                n = function(t, e) {
                    if (!e && t && t.__esModule) return t;
                    if (null === t || "object" != typeof t && "function" != typeof t) return {
                        default: t
                    };
                    var a = d(e);
                    if (a && a.has(t)) return a.get(t);
                    var r = {},
                        s = Object.defineProperty && Object.getOwnPropertyDescriptor;
                    for (var i in t)
                        if ("default" !== i && Object.prototype.hasOwnProperty.call(t, i)) {
                            var n = s ? Object.getOwnPropertyDescriptor(t, i) : null;
                            n && (n.get || n.set) ? Object.defineProperty(r, i, n) : r[i] = t[i]
                        } r.default = t, a && a.set(t, r);
                    return r
                }(a(67)),
                o = r(a(143)),
                c = a(26),
                l = a(173);

            function d(t) {
                if ("function" != typeof WeakMap) return null;
                var e = new WeakMap,
                    a = new WeakMap;
                return (d = function(t) {
                    return t ? a : e
                })(t)
            }
            let u, h = c.REVIEW_SETTINGS_DEFAULT;
            var f = class Reviews {
                get settings() {
                    return h
                }
                async sendReview({
                    atomicId: t,
                    email: e,
                    rating: a,
                    operatingSystem: r,
                    appVersion: n,
                    platform: o,
                    text: c,
                    subject: l,
                    topic: d,
                    tags: u = ["reviews"]
                }) {
                    await s.default.post("https://atomic-reviews.atomicwallet.io/conversation", {
                        atomicId: t,
                        email: e,
                        rating: a,
                        operatingSystem: r,
                        appVersion: n,
                        platform: o,
                        text: c,
                        subject: l,
                        topic: d,
                        tags: u
                    }).catch(t => {
                        i.default.error({
                            instance: this,
                            error: t
                        })
                    })
                }
            };
            e.default = f
        },
        1476: function(t, e, a) {
            "use strict";
            var r = a(2);
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.default = void 0;
            var s = r(a(143));
            const i = ["reward", "unfreeze", "freeze", "vote"];
            var n = class TxNotifier {
                constructor(t) {
                    this.eventEmmiter = s.default, this.wallet = t
                }
                notify(t, e, a, r, s) {
                    "receive" === t && this.eventEmmiter.emit(`${this.wallet.ticker}-${a}::new-socket-tx`, {
                        unconfirmedTx: e
                    }), "confirm" === t && this.eventEmmiter.emit(this.wallet.ticker + "::confirmed-socket-tx", a, e, r, s), i.forEach(a => {
                        t === a && this.eventEmmiter.emit(`${this.wallet.ticker}::confirmed-${t}`, e || {})
                    })
                }
            };
            e.default = n
        },
        192: function(t, e, a) {
            const {
                version: r
            } = a(1415), s = Symbol("unknownOS"), i = {
                ios: "iOS",
                android: "Android",
                win32: "Windows",
                darwin: "macOS",
                linux: "Linux"
            }, n = Object.freeze({
                android: ["android", "Mobile"],
                browser: ["android", "Mobile"],
                desktop: ["desktop", "Desktop"],
                extension: ["extension", "Extension"],
                ios: ["ios", "Mobile"]
            });
            class PlatformVersion {
                constructor(t = r) {
                    this.coreVersion = t
                }
                setPlatform(t) {
                    var e;
                    [this.platform, this.platformType] = null !== (e = n[t]) && void 0 !== e ? e : n.desktop
                }
                getPlatform() {
                    return this.platform
                }
                getPlatformType() {
                    var t;
                    return null !== (t = this.platformType) && void 0 !== t ? t : "Unknown"
                }
                setVersion(t) {
                    this.version = t
                }
                getVersion() {
                    return this.version
                }
                setOS(t) {
                    const e = t.toLowerCase();
                    this.os = i[e] ? e : s
                }
                getOS() {
                    return this.os === s ? "Unknown".toLowerCase() : this.os
                }
                getOSName() {
                    var t;
                    return null !== (t = i[this.os]) && void 0 !== t ? t : "Unknown"
                }
                isIOS() {
                    return "ios" === this.getOS()
                }
                setCoreVersion(t) {
                    this.coreVersion = t
                }
                getCoreVersion() {
                    return this.coreVersion
                }
                getUserAgentHttpHeader() {
                    return {
                        "x-user-agent": `AtomicWallet (${this.getPlatformType()})/${this.getVersion()} (${this.getOSName()}, atomic-core ${this.getCoreVersion()})`
                    }
                }
                getAvailablePlatforms() {
                    return Object.entries(n).reduce((t, [e, [a]]) => (t[e] = a, t), {})
                }
            }
            t.exports = {
                __esModule: !0,
                default: new PlatformVersion,
                PlatformVersion: PlatformVersion,
                supportedOsTypes: i,
                UNKNOWN_VALUE: "Unknown",
                platforms: n
            }
        },
        1993: function(t, e, a) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.default = void 0;
            var r = class BaseClass {
                constructor(...t) {
                    const e = Object.keys(this.args);
                    if (t.length < e.length) throw new Error(`The ${this.constructor.name} constructor must receive at least ${e.length} argument${e.length>1&&"s"}!`);
                    const a = (t, e, a, r) => {
                        const s = r && r.name ? r.name.toLowerCase() : "object";
                        switch (typeof t) {
                            case "array":
                                if (!Array.isArray(t)) throw new TypeError(`The argument ${a+1} ('${e}') must be 'Array' type!`);
                                break;
                            case "object":
                                if (!(t instanceof r || t.constructor.name === r.name)) {
                                    const t = new TypeError(`[${this.ticker}][${this.constructor.name}] The argument ${a+1} ('${e}') must be '${r.name}' type!`);
                                    throw console.error(t.stack), t
                                }
                                break;
                            case "string":
                            case "number":
                            case "boolean":
                                if (typeof t !== s) throw new TypeError(`The argument ${a+1} ('${e}') must be '${r&&r.name}' type!`)
                        }
                    };
                    Object.assign(this, t.reduce((t, r, s) => {
                        const i = e[s];
                        if (void 0 !== i) {
                            const e = this.args[i];
                            if ("function" == typeof e && a(r, i, s, e), Array.isArray(e)) {
                                let t = !1;
                                const n = [];
                                if (e.forEach(e => {
                                        try {
                                            a(r, i, s, e), t = !0
                                        } catch (t) {
                                            n.push(t)
                                        }
                                    }), !t) throw n
                            }
                            t[i] = r
                        } else t[s] = r;
                        return t
                    }, {}))
                }
                get args() {
                    return {}
                }
            };
            e.default = r
        },
        1994: function(t, e, a) {
            "use strict";
            var r = a(2);
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.default = void 0;
            var s = r(a(4061)),
                i = r(a(67));
            var n = new class AboutInfoList {
                async get(t) {
                    let e;
                    try {
                        if (e = await i.default.get("about-tab"), e) {
                            const a = e.find(e => function(t, e) {
                                const {
                                    id: a,
                                    ticker: r,
                                    contract: s,
                                    deprecatedParent: i
                                } = e, {
                                    id: n,
                                    ticker: o,
                                    contract: c,
                                    network: l
                                } = null == t ? void 0 : t.where;
                                return n && a ? n.toLowerCase() === a.toLowerCase() : (!l || !i || l.toLowerCase() === i.toLowerCase()) && (c || s ? (null == c ? void 0 : c.toLowerCase()) === (null == s ? void 0 : s.toLowerCase()) : (null == o ? void 0 : o.toLowerCase()) === (null == r ? void 0 : r.toLowerCase()))
                            }(e, t));
                            return ((null == a ? void 0 : a.items) || []).reduce((t, e) => {
                                try {
                                    return t.concat(new s.default(e))
                                } catch (e) {
                                    return console.warn(e), t
                                }
                            }, [])
                        }
                    } catch (t) {
                        console.warn(t)
                    }
                    return null
                }
            };
            e.default = n
        },
        20: function(t, e, a) {
            "use strict";
            var r = a(2);
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.default = void 0;
            var s = r(a(57)),
                i = r(a(1462)),
                n = r(a(230)),
                o = r(a(143)),
                c = r(a(74)),
                l = r(a(1476)),
                d = a(95),
                u = a(29),
                h = a(26),
                f = a(377);
            var p = class Explorer {
                constructor({
                    wallet: t,
                    config: e
                }) {
                    var a;
                    this.config = e, this.defaultTxLimit = null !== (a = e.txLimit) && void 0 !== a ? a : 100, this.wallet = t, this.setAxiosClient(), this.socket = {}, this.webUrl = e.webUrl, this.clients = {}, this.eventEmmiter = o.default, this.txNotifier = new l.default(t), this.lastGetInfoRequestTime = null, this.lastGetTxsRequestTime = null, this.defaultRequestTimeout = null
                }
                setSocketClient(t) {
                    this.socket[this.wallet.ticker] = (0, i.default)(t, {
                        transports: ["websocket"]
                    })
                }
                setAxiosClient() {
                    this.client = s.default.create(this.getInitParams())
                }
                toBNMinimalUnit(t) {
                    return new this.wallet.BN(this.wallet.toMinimalUnit(null != t ? t : 0))
                }
                toBNCurrencyUnit(t) {
                    return new this.wallet.BN(this.wallet.toCurrencyUnit(null != t ? t : 0))
                }
                getWebTransactionUrl(t) {
                    return `${this.webUrl}${t}`
                }
                getAllowedTickers() {
                    return []
                }
                getInitParams() {
                    if (!this.config.baseUrl) throw new Error(`${this.wallet.ticker} ${this.constructor.name}: explorer config have no baseUrl`);
                    return {
                        baseURL: this.config.baseUrl
                    }
                }
                getApiPrefix() {
                    return "api"
                }
                async checkTransaction(t, {
                    coin: e,
                    address: a,
                    amount: r,
                    memo: s,
                    txid: i,
                    nonce: o,
                    fee: l,
                    feeTicker: u
                }) {
                    var h;
                    const f = new c.default({
                        ticker: e.ticker,
                        walletid: e.id,
                        name: e.name,
                        alias: e.alias,
                        explorer: this.constructor.name,
                        txid: i,
                        direction: t === a,
                        otherSideAddress: a,
                        amount: (0, d.toCurrency)(r, e.decimal),
                        datetime: new Date,
                        memo: s,
                        nonce: o,
                        confirmations: 0,
                        fee: l,
                        feeTicker: null !== (h = null != u ? u : e.feeTicker) && void 0 !== h ? h : this.getTxFeeTicker()
                    });
                    return await n.default.filterAndUpdateTransactions([f]), f
                }
                async getInfo(t) {
                    if (!t || "string" != typeof t) throw this.createError("getInfo: address must be string with length > 0");
                    if (this.defaultRequestTimeout && Date.now() - this.defaultRequestTimeout * h.ONE_MINUTE < this.lastGetInfoRequestTime) return this.modifyInfoResponse(void 0);
                    this.defaultRequestTimeout && Date.now() - this.defaultRequestTimeout * h.ONE_MINUTE > this.lastGetInfoRequestTime && (this.lastGetInfoRequestTime = Date.now());
                    const e = await this.request(this.getInfoUrl(t), this.getInfoMethod(), this.getInfoParams(t), h.GET_BALANCE_TYPE, this.getInfoOptions());
                    return this.modifyInfoResponse(e)
                }
                getInfoUrl(t) {
                    throw new u.UndeclaredAbstractMethodError("getInfoUrl", this)
                }
                getInfoMethod() {
                    return "get"
                }
                getInfoParams(t) {
                    return {}
                }
                getInfoOptions() {
                    return {
                        transformResponse: [t => JSON.parse(t.replace(/:(\d+)([,}])/g, ':"$1"$2'))]
                    }
                }
                getTransactionOptions() {
                    return {}
                }
                getTransactionsOptions() {
                    return {}
                }
                getUtxoOptions() {
                    return {}
                }
                getLatestBlockOptions() {
                    return {}
                }
                getSendOptions() {
                    return {}
                }
                modifyInfoResponse(t) {
                    return t
                }
                async getTransaction(t, e, a = []) {
                    const r = await this.request(this.getTransactionUrl(e), this.getTransactionMethod(), this.getTransactionParams(e), h.GET_TRANSACTION_TYPE, this.getTransactionOptions());
                    return this.modifyTransactionResponse(r, t, a)
                }
                getTransactionModifiedResponse(t, e, a = this.wallet.ticker) {
                    return Object.assign({
                        explorer: this.constructor.name,
                        locktime: t && t.lockTime
                    }, this.getTransactionsModifiedResponse(t, e, a))
                }
                getTransactionsModifiedResponse(t, e, a = this.wallet.ticker) {
                    return {
                        ticker: a,
                        name: this.wallet.name,
                        walletid: this.wallet.id,
                        txid: this.getTxHash(t),
                        direction: this.getTxDirection(e, t),
                        otherSideAddress: this.getTxOtherSideAddress(e, t),
                        amount: this.getTxValue(e, t),
                        datetime: this.getTxDateTime(t),
                        memo: this.getTxMemo(t),
                        confirmations: this.getTxConfirmations(t),
                        nonce: this.getTxNonce(t),
                        alias: this.wallet.alias,
                        fee: this.getTxFee(t),
                        feeTicker: this.getTxFeeTicker(),
                        txType: this.getTxType(t)
                    }
                }
                getTransactionUrl(t) {
                    throw new u.UndeclaredAbstractMethodError("getTransactionUrl", this)
                }
                getTransactionMethod() {
                    return "get"
                }
                getTransactionParams(t) {
                    return {}
                }
                modifyTransactionResponse(t, e, a = this.wallet.ticker) {
                    return new c.default(this.getTransactionModifiedResponse(t, e, a))
                }
                async getTransactions({
                    address: t,
                    offset: e,
                    limit: a,
                    pageNum: r
                }) {
                    if (this.defaultRequestTimeout && Date.now() - this.defaultRequestTimeout * h.ONE_MINUTE < this.lastGetTxsRequestTime) return [];
                    this.defaultRequestTimeout && Date.now() - this.defaultRequestTimeout * h.ONE_MINUTE > this.lastGetTxsRequestTime && (this.lastGetTxsRequestTime = Date.now());
                    const s = await this.request(this.getTransactionsUrl(t, e || 0, a || this.defaultTxLimit, r), this.getTransactionsMethod(), this.getTransactionsParams(t, e || 0, a || this.defaultTxLimit, r), h.GET_TRANSACTIONS_TYPE, this.getTransactionsOptions());
                    return this.modifyTransactionsResponse(s, t)
                }
                getTransactionsUrl(t, e, a, r) {
                    throw new u.UndeclaredAbstractMethodError("getTransactionsUrl", this)
                }
                getTransactionsMethod() {
                    return "get"
                }
                getTransactionsParams(t, e = 0, a = this.defaultTxLimit, r) {
                    return {
                        from: e,
                        to: e + a
                    }
                }
                modifyTransactionsResponse(t, e) {
                    return Array.isArray(t) ? t.map(t => new c.default(this.getTransactionsModifiedResponse(t, e))) : []
                }
                async getUnspentOutputs(t, e) {
                    const a = await this.request(this.getUnspentOutputsUrl(t), this.getUnspentOutputsMethod(), this.getUnspentOutputsParams(t), h.GET_UTXO_TYPE, this.getUtxoOptions());
                    return this.modifyUnspentOutputsResponse(t, a, e)
                }
                getUnspentOutputsUrl(t) {
                    throw new u.UndeclaredAbstractMethodError("getUnspentOutputsUrl", this)
                }
                getUnspentOutputsMethod() {
                    return "get"
                }
                getUnspentOutputsParams(t) {
                    return {}
                }
                modifyUnspentOutputsResponse(t, e, a) {
                    return e
                }
                async sendTransaction(t) {
                    const e = await this.request(this.getSendTransactionUrl(), this.getSendTransactionMethod(), this.getSendTransactionParams(t), h.SEND_TRANSACTION_TYPE, this.getSendOptions());
                    return this.modifySendTransactionResponse(e)
                }
                getSendTransactionUrl() {
                    throw new u.UndeclaredAbstractMethodError("getSendTransactionUrl", this)
                }
                getSendTransactionMethod() {
                    return "post"
                }
                getSendTransactionParam() {
                    return "txid"
                }
                getSendTransactionParams(t) {
                    return {
                        [this.getSendTransactionParam()]: t
                    }
                }
                modifySendTransactionResponse(t) {
                    return t
                }
                getHeaders() {
                    return {}
                }
                async request(t, e = "get", a = {}, r = h.UNDEFINED_OPERATION_ERROR, s = {}) {
                    let i;
                    if (-1 !== t.search("undefined")) throw new Error("corrupted url: " + t);
                    try {
                        i = await this.client.request({
                            url: t,
                            method: e,
                            ["get" === e ? "params" : "data"]: a,
                            ...s
                        })
                    } catch (e) {
                        const {
                            headers: a,
                            method: s,
                            baseURL: i,
                            url: n,
                            data: o
                        } = (null == e ? void 0 : e.config) || {}, c = {
                            request: {
                                headers: a,
                                method: s,
                                baseURL: i,
                                url: n,
                                data: o
                            }
                        };
                        if (e.response) {
                            const {
                                data: t,
                                status: a,
                                statusText: r,
                                headers: s
                            } = e.response, i = {
                                data: t,
                                status: a,
                                statusText: r,
                                headers: s
                            };
                            c.response = i
                        } else c.response = "No response data available";
                        throw new u.ExplorerRequestError({
                            type: r,
                            error: new Error(JSON.stringify(c)),
                            errorData: c,
                            url: `${this.config.baseUrl}${t}`,
                            instance: this
                        })
                    }
                    try {
                        return this.modifyGeneralResponse(i)
                    } catch (e) {
                        throw new u.ExplorerRequestError({
                            type: r,
                            error: e,
                            url: `${this.config.baseUrl}${t}`,
                            instance: this
                        })
                    }
                }
                modifyGeneralResponse(t) {
                    return t.data
                }
                getTxNonce(t) {}
                getTxFee(t) {
                    return this.wallet.toCurrencyUnit(t.fee || this.wallet.feeDefault || 0)
                }
                getTxValue(t, e) {
                    throw new u.UndeclaredAbstractMethodError("getTxValue", this)
                }
                getTxDirection(t, e) {
                    return e.vin && !e.vin.find(({
                        addr: e
                    }) => e === t) && !0
                }
                getTxOtherSideAddress(t, e) {
                    if (e.vin) {
                        if (this.getTxDirection(t, e)) return e.vin[0].addr;
                        const a = e.vout.find(({
                            scriptPubKey: {
                                addresses: e
                            }
                        }) => !e.includes(t));
                        if (a) return a.scriptPubKey.addresses[0]
                    }
                    return "..."
                }
                getTxDateTime(t) {
                    return new Date(Number(t.time + "000"))
                }
                getTxDate(t) {
                    return this.getTxDateTime(t).toDateString().slice(4)
                }
                getTxTime(t) {
                    return this.getTxDateTime(t).toTimeString().slice(0, 5)
                }
                getTxConfirmations(t) {
                    return t.confirmations || 0
                }
                getTxHash(t) {
                    return t.txid
                }
                getTxMemo(t) {
                    return ""
                }
                getTxFeeTicker() {
                    return this.wallet.deprecatedParent
                }
                getTxType(t) {
                    return f.TxTypes[t.type] || f.TxTypes.TRANSFER
                }
                async getBalance(t, e = !1) {
                    const a = await this.getInfo(t);
                    return a && a.balance ? e ? a.balance : String(this.wallet.toCurrencyUnit(a.balance)) : null
                }
                getLatestBlockUrl() {
                    throw new u.UndeclaredAbstractMethodError("getLatestBlockUrl", this)
                }
                getLatestBlockMethod() {
                    return "get"
                }
                getLatestBlockParams() {
                    return {}
                }
                modifyLatestBlockResponse(t) {
                    return t
                }
                async getLatestBlock() {
                    const t = await this.request(this.getLatestBlockUrl(), this.getLatestBlockMethod(), this.getLatestBlockParams(), h.GET_LATEST_BLOCK_TYPE, this.getLatestBlockOptions());
                    return this.modifyLatestBlockResponse(t)
                }
                getBlockUrl() {
                    throw new u.UndeclaredAbstractMethodError("getBlockUrl", this)
                }
                getBlockMethod() {
                    throw new u.UndeclaredAbstractMethodError("getBlockMethod", this)
                }
                getBlockParams() {
                    throw new u.UndeclaredAbstractMethodError("getBlockParams", this)
                }
                getBlockOptions() {
                    throw new u.UndeclaredAbstractMethodError("getBlockParams", this)
                }
                async getBlock(t) {
                    const e = await this.request(this.getBlockUrl(t), this.getBlockMethod(), this.getBlockParams(), h.GET_BLOCK_TYPE, this.getBlockOptions());
                    return this.modifyGetBlockResponse(e)
                }
                modifyGetBlockResponse(t) {
                    return t
                }
                getTxLimit() {
                    return this.defaultTxLimit
                }
                createError(t) {
                    return new Error(`[${this.wallet.ticker}] ${this.constructor.name} Error: ${t}`)
                }
                async getSocketTransaction({
                    address: t,
                    hash: e,
                    tokens: a,
                    type: r
                }) {
                    const s = await this.getTransaction(t, e, a);
                    await n.default.filterAndUpdateTransactions([s]), this.txNotifier.notify(r, s, s.walletid, s.ticker, e)
                }
                makeNftInfoUrl(t, e) {
                    throw new u.UndeclaredAbstractMethodError("makeNftInfoUrl", this)
                }
                async fetchNftList(t) {
                    throw new u.UndeclaredAbstractMethodError("fetchNftList", this)
                }
                async sendNft(t, e, a, r, s, i) {
                    throw new u.UndeclaredAbstractMethodError("fetchNftList", this)
                }
            };
            e.default = p
        },
        230: function(t, e, a) {
            "use strict";
            var r = a(2);
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.default = void 0;
            var s = r(a(74)),
                i = r(a(55)),
                n = a(52);
            var o = new class History {
                constructor() {
                    this.processing = !1
                }
                async getTransactionIds() {
                    this.processing = !0;
                    return (await n.db.transactions.toArray().finally(() => {
                        this.processing = !1
                    })).map(({
                        txid: t,
                        ticker: e,
                        walletid: a,
                        alias: r
                    }) => ({
                        txid: t,
                        ticker: e,
                        walletid: a,
                        alias: r
                    }))
                }
                async findTransaction(t) {
                    this.processing = !0;
                    return await n.db.transactions.where({
                        txid: t
                    }).first().finally(() => {
                        this.processing = !1
                    })
                }
                async removeTransaction(t) {
                    this.processing = !0;
                    return await n.db.transactions.where({
                        ...t,
                        alias: "atomic"
                    }).delete().finally(() => {
                        this.processing = !1
                    })
                }
                async selectTransactions(t = null) {
                    this.processing = !0;
                    let e = [];
                    if (t) {
                        const {
                            ticker: a,
                            ...r
                        } = t;
                        return e = await n.db.transactions.where({
                            ...r,
                            alias: "atomic"
                        }).and(t => {
                            var e;
                            return "string" != typeof a || (null === (e = t.ticker) || void 0 === e ? void 0 : e.toLowerCase()) === a.toLowerCase()
                        }).toArray().finally(() => {
                            this.processing = !1
                        }), e.map(t => s.default.fromHistory(t))
                    }
                    return e = await n.db.transactions.toArray().finally(() => {
                        this.processing = !1
                    }), e.map(t => s.default.fromHistory(t))
                }
                async filterAndUpdateTransactions(t) {
                    const e = await Promise.all(t.map(async t => {
                        const e = {
                            ...t
                        };
                        return e.fee = await t.fee, e.confirmations = await t.confirmations, e
                    }));
                    await this.putTransactions(e).catch(t => i.default.error({
                        instance: this,
                        error: t
                    }))
                }
                async putTransactions(t) {
                    return (t = t.filter(Boolean).map(this._prepareTransactionForIDB)).length > 0 && (this.processing = !0, await n.db.transactions.bulkPut(t)), t
                }
                async updateTransaction(t) {
                    this.processing = !0;
                    const e = await n.db.transactions.where({
                        txid: t.txid,
                        ticker: t.ticker,
                        alias: t.alias,
                        walletid: t.walletid
                    }).first();
                    if (e && e.id) return await n.db.transactions.update(e.id, t), t
                }
                async clearTransactions() {
                    await n.db.transactions.clear()
                }
                _prepareTransactionForIDB(t) {
                    return Object.keys(t).reduce((e, a) => {
                        if (void 0 === t[a]) return e;
                        var r;
                        "txid" === a && (e.id = null === (r = t[a]) || void 0 === r ? void 0 : r.toString());
                        if (["date", "time"].includes(a)) return e;
                        if ("direction" === a) e[a] = t[a] ? "in" : "out";
                        else if ("otherSideAddress" === a) {
                            var s;
                            e.recepient = null === (s = t[a]) || void 0 === s ? void 0 : s.toString()
                        } else {
                            var i;
                            e[a] = null === (i = t[a]) || void 0 === i ? void 0 : i.toString()
                        }
                        return e
                    }, {})
                }
                async updatePendingOrInsert(t, e) {
                    const a = (await this.selectTransactions({
                        txid: "pending",
                        ticker: t.ticker,
                        alias: "atomic"
                    })).find(e => e.amount === t.amount && e.recepient === t.otherSideAddress);
                    a ? (this.processing = !0, a && a.id && await n.db.transactions.delete(a.id).finally(() => {
                        this.processing = !1
                    })) : await this.filterAndUpdateTransactions([t])
                }
                async xmrHasFrozenBalance() {
                    return !!(await this.selectTransactions({
                        ticker: "XMR"
                    })).find(t => t.confirmations < 10)
                }
            };
            e.default = o
        },
        2365: function(t, e, a) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.default = void 0;
            var r = class LazyLoadedLib {
                constructor(t) {
                    this.importLib = t, this.promise = null
                }
                async get(t) {
                    let e;
                    this.isLibLoaded() || this.loadLib();
                    try {
                        e = await this.promise
                    } catch (t) {
                        throw new Error("The dynamically loaded module cannot be loaded")
                    }
                    if (void 0 === t) return e;
                    if (!Object.keys(e).includes(t)) throw new Error(`The dynamically loaded component ${t} is not implemented`);
                    return e[t]
                }
                isLibLoaded() {
                    return null !== this.promise
                }
                loadLib() {
                    this.promise = this.importLib()
                }
            };
            e.default = r
        },
        2411: function(t, e, a) {
            "use strict";
            var r = a(2);
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.default = e.APP_VERSION_DB_KEY = void 0;
            var s = r(a(208)),
                i = r(a(207)),
                n = r(a(57)),
                o = a(52),
                c = r(a(143)),
                l = a(173),
                d = a(26),
                u = a(29),
                h = r(a(1434)),
                f = r(a(192)),
                p = r(a(2440)),
                m = r(a(55)),
                g = a(321),
                y = a(2441);

            function w(t, e) {
                b(t, e), e.add(t)
            }

            function v(t, e, a) {
                b(t, e), e.set(t, a)
            }

            function b(t, e) {
                if (e.has(t)) throw new TypeError("Cannot initialize the same private elements twice on an object")
            }

            function k(t, e, a) {
                if (!e.has(t)) throw new TypeError("attempted to get private field on non-instance");
                return a
            }
            const T = new Set(Object.values(g.ConfigKey));
            e.APP_VERSION_DB_KEY = "__appVersion__";
            const C = () => Date.now();
            var S = new WeakMap,
                E = new WeakMap,
                x = new WeakMap,
                A = new WeakSet,
                O = new WeakSet,
                P = new WeakSet,
                _ = new WeakSet,
                D = new WeakSet,
                I = new WeakSet,
                M = new WeakSet,
                U = new WeakSet,
                R = new WeakSet,
                N = new WeakSet,
                j = new WeakSet,
                B = new WeakSet;

            function L({
                id: t,
                options: e
            }) {
                k(this, j, X).call(this, t) && k(this, I, q).call(this, t, e).catch(() => {})
            }

            function W(t) {
                if (!T.has(t)) throw new u.UnknownConfigKeyError(t)
            }

            function F(t, e) {
                if (void 0 !== e && "object" != typeof e) throw new u.ExternalError({
                    type: d.EXTERNAL_ERROR,
                    error: t + ".json is not valid json file",
                    instance: this
                })
            }

            function $() {
                return (0, i.default)(this, E) || (0, s.default)(this, E, (async () => {
                    try {
                        var t, e;
                        const a = null !== (t = f.default.getVersion()) && void 0 !== t ? t : f.default.getCoreVersion();
                        a !== (null === (e = await o.db.configs.where({
                            id: "__appVersion__"
                        }).first()) || void 0 === e ? void 0 : e.data) && (await o.db.configs.clear(), await o.db.configs.put({
                            id: "__appVersion__",
                            data: a
                        }))
                    } catch (t) {
                        m.default.error(t)
                    }
                })()), (0, i.default)(this, E)
            }
            async function H(t, e = {}) {
                try {
                    const {
                        data: a
                    } = await n.default.get(`${this.baseUrl}/config/${t}.json`, {
                        headers: {
                            ...f.default.getUserAgentHttpHeader(),
                            ...e.headers
                        },
                        ...e
                    });
                    if (void 0 === a) throw new u.ExternalError({
                        type: d.EXTERNAL_ERROR,
                        error: t + ".json is empty file",
                        instance: this
                    });
                    return k(this, P, F).call(this, t, a), a
                } catch (e) {
                    throw c.default.emit(l.CONFIGS.FAILED_FETCH, {
                        id: t
                    }), new u.ExternalError({
                        type: d.EXTERNAL_ERROR,
                        error: e,
                        instance: this
                    })
                }
            }
            async function q(t, e) {
                return (0, i.default)(this, x).call(this, t, async () => {
                    try {
                        const a = await k(this, D, H).call(this, t, e);
                        return await k(this, N, Y).call(this, t, a), c.default.emit(l.CONFIGS.UPDATED, {
                            id: t,
                            config: a
                        }), a
                    } catch (t) {
                        throw new u.ExternalError({
                            type: d.EXTERNAL_ERROR,
                            error: t,
                            instance: this
                        })
                    }
                })
            }
            async function K(t) {
                var e, a;
                const r = null !== (e = null !== (a = k(this, U, G).call(this, t)) && void 0 !== a ? a : await k(this, R, V).call(this, t).catch(t => console.error(t))) && void 0 !== e ? e : this.getFallback(t);
                return k(this, P, F).call(this, t, r), r
            }

            function G(t) {
                var e;
                return null === (e = this.cached[t]) || void 0 === e ? void 0 : e.data
            }
            async function V(t) {
                var e;
                return null === (e = await o.db.configs.where({
                    id: t
                }).first()) || void 0 === e ? void 0 : e.data
            }
            async function Y(t, e) {
                this.cached[t] = {
                    data: e,
                    expired: C() + k(this, B, z).call(this, t)
                }, await o.db.configs.put({
                    id: t,
                    data: e
                })
            }

            function X(t) {
                var e, a;
                const r = null !== (e = null === (a = this.cached[t]) || void 0 === a ? void 0 : a.expired) && void 0 !== e ? e : 0;
                return C() > r
            }

            function z(t) {
                var e;
                return null !== (e = g.CONFIG_CACHE_TTL[t]) && void 0 !== e ? e : 6e5
            }
            e.default = class ConfigManager {
                constructor(t) {
                    w(this, B), w(this, j), w(this, N), w(this, R), w(this, U), w(this, M), w(this, I), w(this, D), w(this, _), w(this, P), w(this, O), w(this, A), v(this, S, {
                        writable: !0,
                        value: void 0
                    }), v(this, E, {
                        writable: !0,
                        value: void 0
                    }), v(this, x, {
                        writable: !0,
                        value: (0, p.default)()
                    }), this.cached = {}, this.baseUrl = t || h.default.get("CONFIGS_BASE_URL"), c.default.on(l.CONFIGS.UPDATE, k(this, A, L).bind(this))
                }
                register(t, e) {
                    if (T.add(t), void 0 !== (null == e ? void 0 : e.cacheTtl)) {
                        if (!Number.isInteger(e.cacheTtl) || e.cacheTtl < 0) throw new TypeError("cacheTtl must be a positive number or 0");
                        g.CONFIG_CACHE_TTL[t] = e.cacheTtl
                    }
                }
                async get(t, e = !1, a = {}) {
                    if (k(this, O, W).call(this, t), e || 0 === k(this, B, z).call(this, t)) return k(this, I, q).call(this, t, a);
                    await k(this, _, $).call(this);
                    try {
                        const e = await k(this, M, K).call(this, t);
                        if (e) return k(this, j, X).call(this, t) && c.default.emit(l.CONFIGS.UPDATE, {
                            id: t,
                            options: a
                        }), e
                    } catch (t) {}
                    return k(this, I, q).call(this, t, a)
                }
                getFallback(t) {
                    k(this, O, W).call(this, t);
                    const e = y.fallbackConfigs[t];
                    return k(this, P, F).call(this, t, e), e
                }
            }
        },
        2441: function(t, e, a) {
            "use strict";
            var r = a(2);
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.fallbackConfigs = void 0;
            var s = r(a(2442)),
                i = r(a(2443)),
                n = r(a(2444)),
                o = r(a(2445)),
                c = r(a(2446)),
                l = r(a(2447)),
                d = r(a(2448)),
                u = r(a(2449)),
                h = r(a(2450)),
                f = r(a(2451)),
                p = r(a(2452)),
                m = r(a(2453)),
                g = r(a(2454)),
                y = r(a(2455)),
                w = r(a(2456)),
                v = a(321);
            const b = {
                [v.ConfigKey.WalletsFee]: s.default,
                [v.ConfigKey.LearnStaking]: i.default,
                [v.ConfigKey.BscTokens]: n.default,
                [v.ConfigKey.BscTokensBanned]: o.default,
                [v.ConfigKey.CashbackSettings]: c.default,
                [v.ConfigKey.EthereumTokens]: l.default,
                [v.ConfigKey.EthereumTokensBanned]: d.default,
                [v.ConfigKey.ArbitrumTokens]: u.default,
                [v.ConfigKey.ArbitrumTokensBanned]: h.default,
                [v.ConfigKey.ChangeNowOmniTickers]: f.default,
                [v.ConfigKey.ChangeNowUniqueTickers]: p.default,
                [v.ConfigKey.SimplexAliases]: m.default,
                [v.ConfigKey.FlareTokens]: g.default,
                [v.ConfigKey.FlareTokensBanned]: y.default,
                [v.ConfigKey.FlareClaimExecutors]: w.default
            };
            e.fallbackConfigs = b
        },
        2527: function(t, e, a) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.default = void 0;
            var r = class Addresses {
                constructor(t) {
                    this.secureStrage = t, this.secureStrageId = "wallets", this.storageId = "addresses"
                }
                async get() {
                    try {
                        const t = await this.secureStrage.get(this.secureStrageId),
                            e = JSON.parse(localStorage.getItem(this.storageId) || t);
                        return JSON.parse(t).map(t => {
                            var a;
                            return Object.assign({
                                address: null === (a = e.find(({
                                    id: e
                                }) => e === t.id)) || void 0 === a ? void 0 : a.address
                            }, t)
                        })
                    } catch (t) {
                        return console.error(t), []
                    }
                }
                set(t) {
                    try {
                        const e = Array.from(t);
                        this.secureStrage.set(this.secureStrageId, JSON.stringify(e.map(({
                            alias: t,
                            balance: e,
                            id: a,
                            privateKey: r,
                            ticker: s
                        }) => ({
                            alias: t,
                            balance: e,
                            id: a,
                            privateKey: r,
                            ticker: s
                        })))), localStorage.setItem(this.storageId, JSON.stringify(e.map(({
                            id: t,
                            address: e
                        }) => ({
                            id: t,
                            address: e
                        }))))
                    } catch (t) {
                        console.error(t)
                    }
                }
            };
            e.default = r
        },
        321: function(t, e, a) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.FIVE_SECONDS = e.FIVE_MINUTES = e.ConfigKey = e.CONFIG_CACHE_TTL = void 0;
            const r = {
                AboutTab: "about-tab",
                AvaxCGasPrice: "avax-c-gas-price",
                Banner: "banner",
                BnbTokens: "bnb-tokens",
                CashbackSettings: "cashback-settings",
                ChartSettings: "chart-data-settings-new",
                CoinMarketCapSupportedCoins: "coinmarketcap-supported-coins",
                DisabledCoins: "disabled-coins",
                EthereumGasPrice: "eth-gas-price",
                EthereumTokens: "ethereum-tokens",
                EthereumTokensBanned: "ethereum-tokens-banned",
                FantomGasPrice: "ftm-gas-price",
                FantomTokens: "fantom-tokens",
                FantomTokensBanned: "fantom-tokens-banned",
                FlareTokens: "flare-tokens",
                FlareTokensBanned: "flare-tokens-banned",
                OptimismTokens: "optimism-tokens",
                OptimismTokensBanned: "optimism-tokens-banned",
                FlareClaimExecutors: "flare-claim-executors",
                ArbitrumTokens: "arbitrum-tokens",
                ArbitrumTokensBanned: "arbitrum-tokens-banned",
                BscTokens: "bsc-tokens",
                BscTokensBanned: "bsc-tokens-banned",
                PolygonTokens: "polygon-tokens",
                PolygonTokensBanned: "polygon-tokens-banned",
                PolygonGasPrice: "polygon-gas-price",
                ExchangeDisabledCurrencyV2: "excludedMoveCurrency2",
                FontIcon: "icon-font-config",
                LearnStaking: "learn-staking",
                LogSettings: "logs-settings",
                SimplexSettings: "simplex-settings_v3",
                SimplexAliases: "simplex-aliases",
                StakingCoins: "staking-coins-list",
                SmpxUniqueTickers: "smpx-unique-tickers",
                WalletsFee: "wallets_fee_10",
                LunaClassicTokens: "luna-classic-tokens",
                LunaTokensBanned: "luna-tokens-banned",
                BalanceTracking: "balance-tracking",
                TrxTokens: "trx-tokens",
                TrxTokensBanned: "trx-tokens-banned",
                IpfsGateway: "ipfs-gateway",
                FiltersAndGroups: "move-lists",
                CoinsTips: "coins_tips",
                ExchangeDisabledCurrency: "excludedMoveCurrency",
                ReleaseNotesDesktop: "new-release-features-desktop",
                PriceAlerts: "price-alerts-config",
                Rates: "rates-list",
                RatesSettings: "rates-settings",
                ReferralProgramTexts: "referral-program-texts",
                ReviewSettings: "review-settings",
                TextsDesktop: "texts_desktop",
                ReleaseNotesMobile: "new-release-features-mobile",
                ServiceMessage: "service-message",
                SingleSocketSettingsMobile: "single-socket-settings-mobile",
                LegacyExchangeDisabledCurrency: "excludedExchangeCurrency",
                ChangeNowOmniTickers: "cn-omni-tickers",
                ChangeNowUniqueTickers: "cn-unique-tickers",
                LegacyRates: "rates-config",
                LegacySimplexSettings: "simplex-settings_v2",
                ChartRequestFrequency: "charts_request_frequency",
                BitcoinFeeForecast: "bitcoin-fee-forecast"
            };
            e.ConfigKey = r;
            e.FIVE_MINUTES = 3e5;
            e.FIVE_SECONDS = 5e3;
            const s = {
                [r.AvaxCGasPrice]: 5e3,
                [r.EthereumGasPrice]: 5e3,
                [r.ServiceMessage]: 3e5,
                [r.PolygonGasPrice]: 5e3,
                [r.WalletsFee]: 3e5,
                [r.BitcoinFeeForecast]: 0
            };
            e.CONFIG_CACHE_TTL = s
        },
        4061: function(t, e, a) {
            "use strict";
            var r = a(2);
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.default = void 0;
            var s = r(a(1453));
            var i = class AboutInfo {
                constructor(t) {
                    if (!(0, s.default)(t)) throw new TypeError("AboutInfo: constructor arguments object must be used");
                    if (!("string" == typeof t.title && t.title.length > 0)) throw new TypeError("AboutInfo: must have correct title");
                    if (this.title = t.title, !("string" == typeof t.contentUrl && t.contentUrl.length > 0)) throw new TypeError("AboutInfo: must have correct contentUrl");
                    this.contentUrl = t.contentUrl, (0, s.default)(t.previewUrl) ? this.previewUrl = {
                        desktop: "string" == typeof t.previewUrl.desktop ? t.previewUrl.desktop : "",
                        mobile: "string" == typeof t.previewUrl.mobile ? t.previewUrl.mobile : ""
                    } : this.previewUrl = {
                        desktop: "",
                        mobile: ""
                    }
                }
            };
            e.default = i
        },
        4064: function(t, e, a) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.default = void 0;
            var r = class Chat {
                constructor({
                    isMobile: t = !1
                }) {
                    this.isMobile = t, this.isNotch = !1, this.isModernScreen = !0, this.init({
                        id: "e947e766-402f-44b0-8f02-3ed79a72263c"
                    }), this.checkNotch()
                }
                init({
                    id: t
                }) {
                    window.Beacon && (window.Beacon("destroy"), document.querySelectorAll("script").forEach(t => {
                            0 === t.src.indexOf("https://beacon-v2") && t.parentNode.removeChild(t)
                        })),
                        function(t, e, a) {
                            function r() {
                                const t = e.querySelectorAll("script")[0];
                                (a = e.createElement("script")).type = "text/javascript", a.async = !0, a.src = "https://beacon-v2.helpscout.net", t.parentNode.insertBefore(a, t)
                            }
                            if (t.Beacon = a = function(e, a, r) {
                                    t.Beacon.readyQueue.push({
                                        method: e,
                                        options: a,
                                        data: r
                                    })
                                }, a.readyQueue = [], "complete" === e.readyState) return r();
                            t.attachEvent ? t.attachEvent("onload", r) : t.addEventListener("load", r, !1)
                        }(window, document, window.Beacon || function() {}), window.Beacon("config", {
                            color: "#222e51",
                            display: {
                                style: "manual",
                                beaconText: "Help",
                                iconImage: "search"
                            }
                        }), window.Beacon("init", t)
                }
                open() {
                    window.Beacon("open"), this.checkNotch(), this.isMobile && this.setMobilePositionStyles()
                }
                close() {
                    window.Beacon("close")
                }
                on(t, e) {
                    window.Beacon("on", t, e)
                }
                off(t) {
                    window.Beacon("off", t)
                }
                setMobilePositionStyles() {
                    if (this.isNotch) {
                        const t = document.querySelector(".BeaconContainer");
                        t && (t.classList.add("BeaconContainerWithSafeArea"), this.isModernScreen && t.classList.add("BeaconContainerWithModernScreen"))
                    }
                }
                checkNotch() {
                    const t = parseFloat(getComputedStyle(document.documentElement).getPropertyValue("--sat"));
                    this.isModernScreen = t > 20, this.isNotch = !!t
                }
            };
            e.default = r
        },
        4101: function(t, e, a) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.default = void 0;
            var r = a(53);
            var s = class PromiseQueue {
                constructor(t, e) {
                    this.chunks = (0, r.chunk)(t, e)
                }
                async execute() {
                    for (let t = 0; t < this.chunks.length; t++) await Promise.all(this.chunks[t].map(t => t()))
                }
            };
            e.default = s
        },
        4102: function(t, e, a) {
            "use strict";
            var r = a(2);
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.default = void 0;
            var s = r(a(1462)),
                i = r(a(57)),
                n = r(a(143)),
                o = a(26);
            const c = process.env.WATCHER_ENDPOINT || "https://subsync.atomicwallet.io";
            var l = class Socket {
                constructor(t, e) {
                    this.user = t, this.endpoint = e || "https://zeus.atomicwallet.io", this.socket = (0, s.default)(this.endpoint, {
                        transports: ["websocket"]
                    }), this.subs = null, this.socket.on("connect", () => {
                        this.subscribe()
                    }), this.socket.on("disconnect", () => {
                        this.socket.connect()
                    })
                }
                subscribe() {
                    this.socket.emit("subscribe", this.user);
                    const t = {
                        jsonrpc: "2.0",
                        method: "subscribe",
                        params: [{
                            user_id: this.user.id,
                            app_id: "atomicwallet"
                        }, this.user.addresses],
                        id: 1
                    };
                    i.default.post(c + "/rpc", t).catch(t => console.warn(t)), this.listen()
                }
                listen() {
                    this.subs = o.TxEventTypes.map(t => (this.socket.off(t), this.socket.on(t, e => {
                        n.default.emit(t, e)
                    })))
                }
            };
            e.default = l
        },
        4397: function(t, e, a) {
            "use strict";
            var r = a(2);
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.default = void 0;
            var s = function(t, e) {
                    if (!e && t && t.__esModule) return t;
                    if (null === t || "object" != typeof t && "function" != typeof t) return {
                        default: t
                    };
                    var a = n(e);
                    if (a && a.has(t)) return a.get(t);
                    var r = {},
                        s = Object.defineProperty && Object.getOwnPropertyDescriptor;
                    for (var i in t)
                        if ("default" !== i && Object.prototype.hasOwnProperty.call(t, i)) {
                            var o = s ? Object.getOwnPropertyDescriptor(t, i) : null;
                            o && (o.get || o.set) ? Object.defineProperty(r, i, o) : r[i] = t[i]
                        } r.default = t, a && a.set(t, r);
                    return r
                }(a(1387)),
                i = r(a(55));

            function n(t) {
                if ("function" != typeof WeakMap) return null;
                var e = new WeakMap,
                    a = new WeakMap;
                return (n = function(t) {
                    return t ? a : e
                })(t)
            }
            e.default = class Providers {
                constructor({
                    config: t,
                    wallet: e
                }) {
                    return t && Array.isArray(t.explorers) ? (this.list = [], t.explorers.forEach(a => {
                        if (!s[a.className]) return;
                        const r = s[a.className];
                        try {
                            const s = new r({
                                config: {
                                    ...a,
                                    webUrl: t.webUrl
                                },
                                wallet: e
                            });
                            this.list.push(s), !a.usedFor || Array.isArray(a.usedFor) && 0 === a.usedFor.length ? this.default = s : a.usedFor.forEach(t => {
                                this[t] = s
                            })
                        } catch (t) {
                            t.message = `[${e.ticker}::Providers] Could not load provider ${a.className}: ${t.message}`, i.default.error({
                                instance: this,
                                error: t
                            })
                        }
                    }), this) : this
                }
            }
        },
        4406: function(t, e, a) {
            "use strict";
            var r = a(2);
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.default = void 0;
            var s = r(a(461)),
                i = r(a(2075));
            class StubCoin extends s.default {
                constructor({
                    id: t,
                    ticker: e,
                    network: a,
                    importFn: r,
                    alias: s,
                    ...i
                }) {
                    super(i), this.alias = s, this.ticker = e, this.id = t, this.network = a, this.importFn = r, this.deprecatedParent = t
                }
                loadExplorers() {
                    return []
                }
                async loadOriginal() {
                    const {
                        default: t
                    } = await this.importFn();
                    return (0, i.default)(t, this.coinData)
                }
            }
            e.default = StubCoin
        },
        4408: function(t, e, a) {
            "use strict";
            var r = a(2);
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.BalanceNotifier = void 0;
            var s = r(a(151)),
                i = a(173);
            e.BalanceNotifier = class BalanceNotifier {
                constructor(t, e) {
                    (0, s.default)(this, "socket", null), (0, s.default)(this, "config", null), (0, s.default)(this, "hash", null), this.config = e, t.on(i.WALLETS.BALANCE_UPDATED, ({
                        wallet: t
                    }) => {
                        if (!this.socket) return void console.warn("Could not send balance change: socket is not initialized.");
                        if (!this.config) return void console.warn("Could not send balance change: balance tracking config is not loaded.");
                        if (!this.hash) return void console.warn("Could not send balance change: atomicId hash is not loaded.");
                        this.config.some(({
                            ticker: e,
                            contract: a,
                            network: r,
                            chainId: s
                        }) => t.isMatch({
                            ticker: e,
                            contract: a,
                            network: r,
                            chainId: s
                        })) && this.socket.emit("balances", {
                            atomicId: this.hash,
                            ticker: t.ticker,
                            amount: t.divisibleBalance,
                            network: t.deprecatedParent,
                            contract: t.contract,
                            chainId: t.chainId
                        })
                    })
                }
            }
        },
        4409: function(t, e, a) {
            "use strict";
            var r = a(2);
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.default = void 0;
            var s = r(a(57)),
                i = a(29),
                n = a(52),
                o = a(26);
            var c = class SimplexDb {
                async getSimplexTransactionsFromDb() {
                    return await n.db.simplexTxs.toArray()
                }
                async getSimplexTransactionsFromNet(t) {
                    const e = {
                            url: "https://apollo.atomicwallet.io/simplex/buy/user",
                            params: {
                                atomicId: t
                            },
                            method: "get"
                        },
                        {
                            data: a
                        } = await (0, s.default)(e).catch(t => {
                            throw new i.ExternalError({
                                type: o.EXTERNAL_ERROR,
                                error: t,
                                instance: this
                            })
                        }),
                        r = a.map(t => ({
                            id: t.paymentId,
                            quoteId: t.quoteId,
                            userId: t.atomicId,
                            status: t.status,
                            txHash: t.payoutHash,
                            payinHash: t.payinHash,
                            payoutHash: t.payoutHash,
                            refundAddress: t.refundAddress,
                            payoutAddress: t.payoutAddress,
                            payinAddress: t.payinAddress,
                            payinExtraId: t.payinExtraId,
                            fromCurrency: t.fromCurrency,
                            toCurrency: t.toCurrency,
                            amountToSend: t.amountSend,
                            amountToReceive: t.amountReceive,
                            expectedCashbackAmount: t.Cashbacks.length > 0 ? t.Cashbacks[0].expectedCashbackAmount : "0",
                            timestamp: t.createdAt
                        }));
                    return await this._insertBatch(r), r
                }
                async addSimplexTransactionToDb(t) {
                    return await n.db.simplexTxs.add(t), t
                }
                postCashbackBuyTx(t) {
                    const e = {
                        url: "https://apollo.atomicwallet.io/simplex/buy",
                        data: t,
                        method: "post"
                    };
                    return (0, s.default)(e)
                }
                async _insertBatch(t) {
                    return await n.db.simplexTxs.bulkPut(t), t
                }
            };
            e.default = c
        },
        4410: function(t, e, a) {
            "use strict";
            var r = a(2);
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.walletToString = e.default = void 0;
            var s = a(38),
                i = r(a(4411)),
                n = r(a(67)),
                o = r(a(192)),
                c = a(2077),
                l = a(1160),
                d = r(a(4420));
            const u = (t, e) => `${e||""}-${t||""}`.toLowerCase();
            e.walletToString = u;
            const h = ({
                contract: t,
                parent: e,
                network: a,
                ticker: r
            }) => ({
                contract: t,
                network: null != e ? e : a,
                ticker: r
            });
            var f = class Exchanges {
                constructor() {
                    this.cashback = new i.default("https://apollo.atomicwallet.io", "v2/transactions", "transactions"), this.db = new d.default, this.services = {
                        changenow: new c.Changenow
                    }
                }
                async getAvailableWalletIdCollection(t, e) {
                    const a = await n.default.get("excludedMoveCurrency2"),
                        r = new Set(a.map(({
                            excludedTicker: t,
                            excludedNetwork: e
                        }) => u(t, e))),
                        i = this.getService(this.getCurrentServiceName());
                    return t.reduce((t, a) => {
                        const n = i.getInternalContract(a),
                            {
                                ticker: o,
                                parentTicker: c
                            } = i.getInternalWalletData(a);
                        if (r.has(u(o, c))) return t;
                        if (["cchain", "xchain"].includes(a.network) && null !== n) return t;
                        if ("band" === a.ticker && "band" !== a.network) return t;
                        const l = e.findWalletV2({
                            alias: "atomic",
                            contract: n,
                            ticker: o,
                            parentTicker: c
                        });
                        if ("AVAX" === o && a.network !== (null == l ? void 0 : l.network)) return t;
                        if (l && s.CoinRestrictionPolicy.isAllowed(l.ticker, s.ACTION_EXCHANGE) && !t.includes(l.id)) return t.concat(l.id);
                        const d = e.findToken({
                            contract: n,
                            parent: c,
                            ticker: o
                        });
                        return d && s.CoinRestrictionPolicy.isAllowed(d.parent, s.ACTION_EXCHANGE) && !t.includes(d.id) ? t.concat(d.id) : t
                    }, [])
                }
                getCurrentServiceName() {
                    return "changenow"
                }
                getExchangeTransactionFromDb() {
                    return this.db.getBatch()
                }
                async getExchangeTransactionsFromNet(t, e = {}) {
                    const [a, r] = await Promise.all([this.getExchangeTransactionFromDb(), this.cashback.listTxs({
                        atomicId: t,
                        ...e
                    })]);
                    return this.db.insertTxs(r.filter(({
                        orderId: t
                    }) => !a.some(({
                        id: e
                    }) => e === t)))
                }
                getPreorder(t, e, a, r) {
                    return {
                        preorderFrom: t.ticker,
                        preorderTo: e.ticker,
                        preorderFromAmount: a,
                        preorderToAmount: r,
                        preorderTimestamp: Date.now()
                    }
                }
                getService(t) {
                    return this.services[t]
                }
                isAvailableToBuy(t) {
                    return this.getService(this.getCurrentServiceName()).isAvailableToBuy(t)
                }
                addExchangeTransactionToDb(t, e, a, {
                    estimatedAwcCashback: r
                }, s, i) {
                    return this.db.insertTx(Object.assign({}, t, {
                        from: h(t.from),
                        to: h(t.to)
                    }), e, a, r, s, i)
                }
                async updateExchangeTransactionsInDb(t) {
                    return this.db.updateBatch(t)
                }
                postCashbackExchangeTx(t, e, a, r, s, i, n) {
                    return this.cashback.addTx({
                        txParams: {
                            orderId: t.id,
                            atomicId: e,
                            status: "waiting",
                            fromCurrency: t.from.ticker,
                            toCurrency: t.to.ticker,
                            from: h(t.from),
                            to: h(t.to),
                            amountSend: a,
                            amountReceive: t.amountToReceive,
                            payinAddress: t.payinAddress,
                            payinExtraId: t.payinExtraId,
                            payoutAddress: t.payoutAddress,
                            refundAddress: s,
                            createdAt: t.timestamp,
                            ...i
                        },
                        cashbackParams: {
                            atomicId: r.hash,
                            bnbAddress: r.bnbAddr,
                            ethAddress: r.ethAddr,
                            expectedCashbackAmount: r.estimatedAwcCashback,
                            expectedCashbackAmountRate: r.estimatedAwcCashbackRate,
                            awcBep2Balance: r.awcBep2Balance,
                            awcBep2Rate: r.awcBep2Rate,
                            exchangeService: n,
                            platform: o.default.getPlatform(),
                            walletVersion: o.default.getVersion()
                        }
                    })
                }
                async sendTransaction(t, e, a, r, i, n, o = null) {
                    var c;
                    if (!a || !n) throw new Error("Invalid exchange transaction, no address or orderId is specified");
                    let d = null,
                        u = null,
                        h = null,
                        f = null,
                        p = null;
                    const m = t instanceof s.Token;
                    o && (p = o.fee, h = o.gasPrice, f = o.gasLimit);
                    try {
                        const s = {
                                address: a,
                                amount: r,
                                memo: i,
                                userGasPrice: h,
                                gasLimit: f,
                                userFee: p,
                                txStatType: l.TX_STAT_TYPES.EXCHANGE
                            },
                            n = m ? await t.createTransaction(s) : {};
                        d = m ? await e.createTokenTransaction(n) : await t.createTransaction(s)
                    } catch (t) {
                        throw console.error("Create tx error", t), new Error(t)
                    }
                    try {
                        u = await e.sendTransaction(d), await this.updateExchangeTransactionsInDb([{
                            id: n,
                            payinHash: u.txid
                        }])
                    } catch (t) {
                        throw console.error("Send tx error", t), new Error(t)
                    }
                    return null !== (c = u) && void 0 !== c && c.txid && await e.checkTransaction({
                        address: a,
                        amount: r,
                        memo: i,
                        txid: u.txid,
                        coin: t
                    }).catch(t => console.warn(t)), u
                }
            };
            e.default = f
        },
        4411: function(t, e, a) {
            "use strict";
            var r = a(2);
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.default = void 0;
            var s = r(a(57));
            var i = class ExchangeCashback {
                constructor(t, e, a) {
                    this.baseUrl = t, this.addUri = e, this.listUri = a
                }
                addTx(t) {
                    return this.submitRequest(this.addUri, "post", t, "data", null)
                }
                listTxs(t) {
                    return this.submitRequest(this.listUri, "get", t, "params", [])
                }
                async submitRequest(t, e, a, r, i) {
                    try {
                        const {
                            data: i
                        } = await (0, s.default)({
                            url: `${this.baseUrl}/${t}`,
                            [r]: a,
                            method: e
                        });
                        return i
                    } catch (t) {
                        return console.error(t), i
                    }
                }
            };
            e.default = i
        },
        4418: function(t, e, a) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.default = void 0;
            e.default = class ExchangeTransaction {
                constructor({
                    from: t,
                    to: e,
                    address: a,
                    refundAddress: r,
                    fromAmount: s,
                    extraId: i,
                    kycData: n,
                    preorder: o = {},
                    status: c,
                    payInHash: l,
                    payOutHash: d
                }) {
                    this.from = t, this.to = e, this.address = a, this.refundAddress = r, this.fromAmount = s, this.extraId = i, this.kycData = n, this.preorder = o, this.status = c, this.payInHash = l, this.payOutHash = l
                }
            }
        },
        4420: function(t, e, a) {
            "use strict";
            var r = a(2);
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.default = void 0;
            var s = r(a(4421));
            class ExchangeTxCache extends s.default {
                constructor() {
                    super("exchangeTxs", "exid")
                }
                insertTx(t, e, a, r, s, i = {}) {
                    return this.insertItem({
                        id: t.id,
                        userId: e,
                        status: "In process",
                        txHash: null,
                        payinHash: null,
                        payoutHash: null,
                        refundAddress: s,
                        payoutAddress: t.payoutAddress,
                        payinAddress: t.payinAddress,
                        payinExtraId: t.payinExtraId,
                        fromCurrency: t.from.ticker,
                        from: t.from,
                        toCurrency: t.to.ticker,
                        to: t.to,
                        amountToSend: a,
                        amountToReceive: t.amountToReceive,
                        expectedCashbackAmount: r,
                        timestamp: (new Date).toISOString(),
                        ...i
                    })
                }
                insertTxs(t) {
                    return this.insertBatch(t.map(t => ({
                        id: t.orderId,
                        userId: t.atomicId,
                        status: t.status,
                        txHash: t.payoutHash,
                        payinHash: t.payinHash,
                        payoutHash: t.payoutHash,
                        refundAddress: t.refundAddress,
                        payoutAddress: t.payoutAddress,
                        payinAddress: t.payinAddress,
                        payinExtraId: t.payinExtraId,
                        fromCurrency: t.fromCurrency,
                        from: t.from,
                        toCurrency: t.toCurrency,
                        to: t.to,
                        amountToSend: t.amountSend,
                        amountToReceive: t.amountReceive,
                        expectedCashbackAmount: t.Cashbacks.length > 0 ? t.Cashbacks[0].expectedCashbackAmount : "0",
                        timestamp: t.createdAt
                    })))
                }
            }
            var i = ExchangeTxCache;
            e.default = i
        },
        4421: function(t, e, a) {
            "use strict";
            var r = a(2);
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.default = void 0;
            var s = a(52),
                i = r(a(55));
            var n = class IndexedDbTable extends Array {
                constructor(t, e = "id", a = (({
                    id: t
                }) => ({
                    id: t
                }))) {
                    super(), this.tableName = t, this.primaryKey = e, this.getSearchCriterion = a
                }
                get table() {
                    return s.db[this.tableName]
                }
                getBatch(t = {}) {
                    return this.getItems(t).toArray()
                }
                async getItem(t = {}) {
                    return this.getItems(t).first()
                }
                getItems(t = {}) {
                    return Object.keys(t).length > 0 ? this.table.where(t) : this.table
                }
                async insertBatch(t) {
                    try {
                        return await this.table.bulkAdd(t), t
                    } catch (t) {
                        return i.default.error({
                            instance: this,
                            error: t
                        }), []
                    }
                }
                async insertItem(t) {
                    try {
                        return await this.table.add(t), t
                    } catch (t) {
                        i.default.error({
                            instance: this,
                            error: t
                        })
                    }
                }
                removeItem(t) {
                    return this.table.delete(t)
                }
                async updateBatch(t) {
                    try {
                        return await Promise.all(t.map(t => this.updateItem(t))), t
                    } catch (t) {
                        return i.default.error({
                            instance: this,
                            error: t
                        }), []
                    }
                }
                async updateItem(t) {
                    try {
                        const e = await this.getItem(this.getSearchCriterion(t));
                        if (e && e[this.primaryKey]) return await this.table.update(e[this.primaryKey], t), t
                    } catch (t) {
                        i.default.error({
                            instance: this,
                            error: t
                        })
                    }
                }
            };
            e.default = n
        },
        4422: function(t, e, a) {
            "use strict";
            var r = a(2);
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.default = void 0;
            var s = r(a(4423)),
                i = a(52);
            var n = class Membership {
                constructor(t) {
                    this.wallets = t
                }
                async getBalance() {
                    return (await Promise.all(s.default.map(async ({
                        contract: t,
                        parent: e,
                        ticker: a
                    }) => {
                        const r = this.wallets.findWalletV2({
                            ticker: a,
                            contract: t,
                            parentTicker: e
                        });
                        return void 0 === r ? 0 : (0, i.isBalanceCached)(r.id) ? (0, i.getCachedBalance)(r.id) : (await r.getInfo(), Number(r.toCurrencyUnit(r.balance)))
                    }))).reduce((t, e) => t + e)
                }
            };
            e.default = n
        },
        4424: function(t, e, a) {
            "use strict";
            var r = a(2);
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.default = void 0;
            var s = r(a(67)),
                i = r(a(55));
            const n = ["BTC", "ETH", "TRX"];
            var o = new class PriceAlerts {
                getTopicForCoin(t) {
                    return t + "-price-alerts"
                }
                getDefaultCoinsTopic() {
                    return "default-price-alerts"
                }
                async getCoinsForSubscription() {
                    try {
                        return await s.default.get("price-alerts-config")
                    } catch (t) {
                        return i.default.error({
                            instance: this,
                            error: t
                        }), {}
                    }
                }
                async getDefaultPriceAlertTickers() {
                    try {
                        const t = await this.getCoinsForSubscription();
                        return Object.entries(t).filter(([, t]) => !0 === t.default).map(([t]) => t)
                    } catch (t) {
                        return i.default.error({
                            instance: this,
                            error: t
                        }), n
                    }
                }
            };
            e.default = o
        },
        4477: function(t, e, a) {
            "use strict";
            var r = a(2);
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.default = e.WALLETS_KEY = e.MNEMONIC_KEY = e.ALL_KEYS = void 0;
            var s = r(a(937));
            e.MNEMONIC_KEY = "general_mnemonic";
            e.WALLETS_KEY = "wallets";
            const i = ["general_mnemonic", "wallets"];
            e.ALL_KEYS = i;
            var n = class SecureStorage {
                constructor(t, e) {
                    this.password = e, this.storage = t
                }
                decode(t, e) {
                    if (!e) throw new Error("No password");
                    return s.default.AES.decrypt(t.toString(), e).toString(s.default.enc.Utf8)
                }
                encode(t, e) {
                    if (!e) throw new Error("No password");
                    return s.default.AES.encrypt(t, String(e))
                }
                exists(t) {
                    return new Promise(e => {
                        this.getItemWrap(t, t => {
                            e("null" !== t)
                        }, () => e(!1))
                    })
                }
                get(t) {
                    return new Promise((e, a) => {
                        this.getItemWrap(t, t => {
                            "null" === t && a(new Error("Wrong password!"));
                            try {
                                t = this.decode(t, this.password)
                            } catch (t) {
                                a(t)
                            }
                            e(t)
                        }, a)
                    })
                }
                getItemWrap(t, e, a) {
                    this.storage.getItem(t, e, r => {
                        ("function" != typeof this.storage.getString || r && 5 !== r.code) && a(r), this.storage.getString(t, e, a)
                    })
                }
                set(t, e) {
                    return new Promise((a, r) => {
                        this.storage.setItem(t, this.encode(e, this.password).toString(), a, r)
                    })
                }
                remove(t) {
                    return new Promise((e, a) => {
                        this.storage.remove(t, e, a)
                    })
                }
                checkPassword(t) {
                    return new Promise((e, a) => {
                        this.storage.getItem("general_mnemonic", r => {
                            "null" === r && a(new Error("No mnemonic"));
                            try {
                                const s = this.decode(r, t);
                                s || a(new Error("Wrong password!")), e(s)
                            } catch (t) {
                                a(t)
                            }
                        }, a)
                    })
                }
                getByPassword(t, e) {
                    return new Promise((a, r) => {
                        this.storage.getItem(t, t => {
                            "null" === t && r(new Error("Wrong password!"));
                            try {
                                a(this.decode(t, e))
                            } catch (t) {
                                r(t)
                            }
                        }, r)
                    })
                }
                getAllByPassword(t, e) {
                    return Promise.all(t.map(async t => await this.exists(t) ? this.getByPassword(t, e) : null))
                }
                changePassword(t, e) {
                    return new Promise((a, r) => {
                        t && e || r(new Error("No password set!")), this.getAllByPassword(i, t).then(t => (this.password = e, Promise.all(i.map((e, a) => null === t[a] ? Promise.resolve() : this.set(e, t[a]))))).then(() => {
                            a()
                        }).catch(() => {
                            r(new Error("Wrong password"))
                        })
                    })
                }
                clear() {
                    return Promise.all(i.map(t => this.remove(t))).then(() => {
                        this.password = ""
                    })
                }
            };
            e.default = n
        },
        4478: function(t, e, a) {
            "use strict";
            var r = a(2);
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.default = e.TxPushSubscription = e.NOTIFICATION_TYPE = void 0;
            var s = r(a(207)),
                i = r(a(208)),
                n = r(a(57)),
                o = a(29),
                c = a(26);

            function l(t, e, a) {
                ! function(t, e) {
                    if (e.has(t)) throw new TypeError("Cannot initialize the same private elements twice on an object")
                }(t, e), e.set(t, a)
            }
            e.NOTIFICATION_TYPE = "IncomingTransaction";
            var d = new WeakMap;
            class TxPushSubscription {
                constructor({
                    serviceBaseUrl: t
                }) {
                    l(this, d, {
                        writable: !0,
                        value: void 0
                    }), (0, i.default)(this, d, n.default.create({
                        baseURL: t
                    })), (0, s.default)(this, d).interceptors.response.use(void 0, t => {
                        var e;
                        return Number(null === (e = t.response) || void 0 === e ? void 0 : e.status) >= c.HTTP_STATUS_SERVER_ERROR ? Promise.reject(new o.ExternalError({
                            error: t,
                            instance: this
                        })) : Promise.reject(new o.InternalError({
                            error: t,
                            instance: this
                        }))
                    })
                }
                async subscribe(t) {
                    await (0, s.default)(this, d).post("/subscriptions/subscribe", {
                        type: "IncomingTransaction",
                        ...t
                    })
                }
                async unsubscribe(t) {
                    await (0, s.default)(this, d).post("/subscriptions/unsubscribe", {
                        type: "IncomingTransaction",
                        ...t
                    })
                }
                async getActiveSubscriptions(t) {
                    const e = await (0, s.default)(this, d).get("/subscriptions", {
                        params: {
                            atomicId: t
                        }
                    });
                    if (!Array.isArray(e.data)) throw new o.ExternalError({
                        error: "Wrong response body",
                        url: `${e.baseURL}${e.url}`,
                        instance: this
                    });
                    return e.data
                }
            }
            e.TxPushSubscription = TxPushSubscription;
            var u = new TxPushSubscription({
                serviceBaseUrl: "https://atomic-notify.atomicwallet.io"
            });
            e.default = u
        },
        461: function(t, e, a) {
            "use strict";
            var r = a(2);
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.default = void 0;
            var s = r(a(35)),
                i = function(t, e) {
                    if (!e && t && t.__esModule) return t;
                    if (null === t || "object" != typeof t && "function" != typeof t) return {
                        default: t
                    };
                    var a = f(e);
                    if (a && a.has(t)) return a.get(t);
                    var r = {},
                        s = Object.defineProperty && Object.getOwnPropertyDescriptor;
                    for (var i in t)
                        if ("default" !== i && Object.prototype.hasOwnProperty.call(t, i)) {
                            var n = s ? Object.getOwnPropertyDescriptor(t, i) : null;
                            n && (n.get || n.set) ? Object.defineProperty(r, i, n) : r[i] = t[i]
                        } r.default = t, a && a.set(t, r);
                    return r
                }(a(1387)),
                n = r(a(143)),
                o = r(a(1993)),
                c = r(a(1476)),
                l = a(1411),
                d = a(29),
                u = a(26),
                h = a(4062);

            function f(t) {
                if ("function" != typeof WeakMap) return null;
                var e = new WeakMap,
                    a = new WeakMap;
                return (f = function(t) {
                    return t ? a : e
                })(t)
            }
            class Coin extends((0, l.WalletMixin)(o.default)) {
                constructor(t) {
                    super(...arguments), this.eventEmmiter = n.default, Object.keys(t).forEach(e => {
                        this[e] = t[e]
                    }), this.id || (this.id = this.ticker), this.BN = s.default, this.bus = null, this.fields = {}, this.deprecatedParent = this.id, this.plugins = [], this.address = "", this.balance = "", this.fiatBalance = "", this.txBaseUrl = "", this.explorers = [], this.transactions = [], this.activeExplorerIndex = 0, this.confirmed = !0, this.plugins = [new h.DomainsPlugin], this.config = Object.freeze({
                        wallet: this.instance,
                        config: arguments[0]
                    }), this.txNotifier = new c.default(this), this.loadExplorers(this.config), this.manageSocket(), this.manageEvents()
                }
                get args() {
                    return {
                        config: Object
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
                        parent: this.id,
                        BN: s.default,
                        toCurrencyUnit: t => this.toCurrencyUnit(t),
                        toMinimalUnit: t => this.toMinimalUnit(t),
                        tokens: () => this.tokens,
                        feeCoefficient: this.coefficient,
                        feeDefault: this.feeData && this.feeData.fee,
                        reserveForStake: this.feeData && this.feeData.reserveForStake,
                        l2Name: this.l2Name,
                        getFeeTicker: this.getFeeTicker
                    }
                }
                get explorer() {
                    return this.explorers[this.activeExplorerIndex]
                }
                get privateKeysObject() {
                    return this.KeysObject || !1
                }
                set privateKeysObject(t) {
                    this.KeysObject = t
                }
                isFeeDynamic() {
                    return !1
                }
                getWebTransactionUrl(t) {
                    return `${this.txWebUrl}${t}`
                }
                manageSocket() {
                    u.TxEventTypes.forEach(t => {
                        this.eventEmmiter.on(t, ({
                            ticker: e,
                            address: a,
                            hash: r,
                            transaction: s
                        }) => {
                            if (this.ticker === e) {
                                var i, n;
                                if (void 0 !== s) return this.txNotifier.notify(t, {
                                    amount: this.toCurrencyUnit(String(s.amount)),
                                    direction: this.address.toLowerCase() === s.to.toLowerCase(),
                                    txid: r
                                }, this.id, this.ticker, r);
                                let e;
                                if ("function" == typeof this.getScriptPubKey) try {
                                    e = this.getScriptPubKey()
                                } catch (t) {
                                    console.warn(t)
                                }
                                const o = null !== (i = null === (n = this.getProvider) || void 0 === n ? void 0 : n.call(this, "socket")) && void 0 !== i ? i : this.explorer;
                                if ("function" != typeof(null == o ? void 0 : o.getSocketTransaction)) throw new d.UndeclaredAbstractMethodError("getSocketTransaction", o);
                                return o.getSocketTransaction({
                                    address: a,
                                    hash: r,
                                    scriptPubKey: e,
                                    tokens: this.tokens,
                                    type: t
                                })
                            }
                            return null
                        })
                    })
                }
                manageEvents() {
                    this.eventEmmiter.on(`update::${this.id}::balance`, t => {
                        t ? this.balance = t : this.getInfo()
                    }), this.eventEmmiter.on(`update::${this.ticker}::token`, t => {
                        this.bus && this.bus.$emit("update::balance", t)
                    }), this.eventEmmiter.on(`${this.id}-${this.id}::new-socket-tx`, ({
                        unconfirmedBalance: t,
                        unconfirmedTx: e
                    }) => {
                        t && (this.balance = t), e && e.direction ? this.bus.$emit("socket::newtx", {
                            id: this.id,
                            ticker: this.ticker,
                            amount: e.amount,
                            txid: e.txid
                        }) : this.bus.$emit("socket::newtx::outgoing", {
                            id: this.id,
                            ticker: this.ticker
                        })
                    }), this.eventEmmiter.on(this.ticker + "::new-token-tx", ({
                        token: t,
                        unconfirmedTx: e
                    }) => {
                        const {
                            ticker: a,
                            id: r
                        } = this.tokens[t];
                        e && e.direction ? this.bus.$emit("socket::newtx", {
                            id: r,
                            ticker: a,
                            amount: e.amount,
                            txid: e.txid
                        }) : this.bus.$emit("socket::newtx::outgoing", {
                            id: r,
                            ticker: a
                        })
                    }), this.eventEmmiter.on(this.ticker + "::confirmed-socket-tx", (t, e) => this.onConfirmSocketTx(e))
                }
                onConfirmSocketTx() {}
                async getFee() {
                    return new this.BN(this.fee || 0)
                }
                getAddress() {
                    throw new d.UndeclaredAbstractMethodError("getAddress", this)
                }
                setAddress(t) {
                    this.address = t
                }
                setPrivateKey(t) {
                    this.privateKey = t
                }
                async validateAddress(t) {
                    throw new d.UndeclaredAbstractMethodError("validateAddress", this)
                }
                async loadWallet(t) {
                    throw new d.UndeclaredAbstractMethodError("async loadWallet", this)
                }
                async checkTransaction(t) {
                    try {
                        await this.explorer.checkTransaction(this.address, t)
                    } catch (t) {
                        console.warn(this.ticker, "Unable to check transaction")
                    }
                    this.bus.$emit("socket::newtx::outgoing", {
                        id: this.id,
                        ticker: t.coin.ticker
                    }), setTimeout(async () => {
                        await this.getBalance()
                    }, 3e3)
                }
                async getInfo() {
                    try {
                        const {
                            balance: t = null,
                            nonce: e = null
                        } = this.explorer && await this.explorer.getInfo(this.address);
                        return t && (this.balance = t), e && (this.nonce = Number(e)), {
                            balance: t,
                            nonce: e
                        }
                    } catch (t) {
                        return {
                            balance: this.balance
                        }
                    }
                }
                async getBalance() {
                    const {
                        balance: t
                    } = await this.getInfo();
                    return this.balance = t, t
                }
                async getTransactions(t) {
                    if (this.explorer) {
                        if (!this.address) throw new Error(`[${this.ticker}] getTransactions error: address is not loaded`);
                        return await this.explorer.getTransactions({
                            ...t,
                            address: this.address
                        }).catch(t => {
                            throw new d.ExplorerRequestError({
                                type: u.GET_TRANSACTIONS_TYPE,
                                error: t,
                                instance: this
                            })
                        })
                    }
                    return this.transactions
                }
                async availableBalance(t) {
                    var e, a;
                    const r = (null === (e = this.balances) || void 0 === e ? void 0 : e.available) && this.toMinimalUnit(null === (a = this.balances) || void 0 === a ? void 0 : a.available) || this.balance;
                    if (!r) return null;
                    const s = t && new this.BN(t) || await this.getFee(),
                        i = new this.BN(r).sub(s).sub(new this.BN(this.unspendableBalance));
                    return new this.BN(i).lt(new this.BN(0)) ? "0" : this.toCurrencyUnit(i)
                }
                async isAvailableForSend(t, e) {
                    if (t < 0) return !1;
                    if ([null, void 0].includes(this.balance)) return !1;
                    const a = e ? this.toMinimalUnit(e) : void 0,
                        r = new this.BN(this.toMinimalUnit(await this.availableBalance(a))),
                        s = new this.BN(this.toMinimalUnit(t));
                    return (!s.isZero() || !r.isZero()) && s.lte(r)
                }
                updateCoinParamsFromServer(t) {
                    if (t.feeData) {
                        const e = e => {
                            void 0 !== this[e] && void 0 !== t.feeData[e] && (this[e] = t.feeData[e])
                        };
                        Object.keys(t.feeData).forEach(t => {
                            e(t)
                        })
                    }
                    t.branchId && (this.branchId = t.branchId), this.explorers.forEach(e => {
                        const a = t.explorers.find(({
                            className: t
                        }) => -1 !== e.constructor.name.indexOf(t));
                        a && (a.defaultRequestTimeout && (e.defaultRequestTimeout = a.defaultRequestTimeout), a.websocketUrl && (e.config.websocketUrl = a.websocketUrl), e.config.baseUrl = a.baseUrl, e.setAxiosClient()), e.webUrl = t.txWebUrl
                    })
                }
                install() {
                    this.plugins.forEach(t => {
                        t.install(this)
                    })
                }
                loadExplorers({
                    wallet: t,
                    config: {
                        explorers: e,
                        txWebUrl: a,
                        submitUrl: r
                    }
                }) {
                    return this.explorers.push(...e.reduce((e, {
                        baseUrl: s,
                        className: n,
                        options: o
                    }) => {
                        try {
                            e.push(new i[n]({
                                wallet: t,
                                config: {
                                    baseUrl: s,
                                    webUrl: a,
                                    submitUrl: r,
                                    options: o
                                }
                            }))
                        } catch (e) {
                            console.warn(`[${null==t?void 0:t.ticker}] Explorer module ${n} not found`)
                        }
                        return e
                    }, []))
                }
            }
            var p = Coin;
            e.default = p
        },
        464: function(t, e, a) {
            "use strict";
            var r = a(2);
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.default = void 0;
            var s = r(a(466)),
                i = r(a(35)),
                n = a(95),
                o = r(a(557));

            function c(t, e) {
                ! function(t, e) {
                    if (e.has(t)) throw new TypeError("Cannot initialize the same private elements twice on an object")
                }(t, e), e.add(t)
            }
            const l = new s.default("0.01"),
                d = new s.default("0.000001");
            var u = new WeakSet;

            function h(t) {
                const e = new s.default(t);
                return e.gte(d) && e.lt(l) ? e.toFormat(6) : e.toFormat(2)
            }
            e.default = class Amount {
                constructor(t, {
                    id: e,
                    ticker: a,
                    decimal: r
                }) {
                    if (c(this, u), !(t && a && r && e)) throw new Error("Initial values should be defined: `amount`, `id`, `ticker`, `decimal`");
                    if (t.toString().includes(".")) throw new TypeError("Amount should be passed in minimal units");
                    if (!Number.isInteger(r)) throw new TypeError("Decimal should be integer");
                    this.amount = new i.default(t), this.ticker = a, this.id = e, this.decimal = new i.default(r).toNumber()
                }
                toCurrency(t = !1) {
                    const e = (0, n.toCurrency)(this.amount, this.decimal);
                    return t ? `${e} ${this.ticker}` : e
                }
                toMinimal(t = !1) {
                    const e = this.amount.toString();
                    return t ? `${e} ${this.ticker}` : e
                }
                toBN() {
                    return this.amount
                }
                toJSON() {
                    return this.toMinimal()
                }
                toFiat(t, e = !1) {
                    if (!t) throw new Error(this.ticker + ": Fiat ticker should be defined");
                    const {
                        rate: a
                    } = o.default.getRate({
                        id: this.id
                    }, t) || {};
                    if (!a) throw new Error(`${this.ticker}: Fiat rate for ${t} is not exist yet`);
                    const r = new s.default((0, n.toCurrency)(this.amount, this.decimal)).multipliedBy(a).toFormat();
                    return `${function(t,e,a){if(!e.has(t))throw new TypeError("attempted to get private field on non-instance");return a}(this,u,h).call(this,r)} ${e?t:""}`.trim()
                }
            }
        },
        545: function(t, e, a) {
            "use strict";
            var r = a(2);
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.default = void 0;
            var s = r(a(207)),
                i = r(a(208)),
                n = r(a(35)),
                o = r(a(1993)),
                c = r(a(143)),
                l = a(1411),
                d = a(52),
                u = r(a(230)),
                h = a(201);

            function f(t, e, a) {
                ! function(t, e) {
                    if (e.has(t)) throw new TypeError("Cannot initialize the same private elements twice on an object")
                }(t, e), e.set(t, a)
            }
            const p = new Set(["BNB", "TRX", "ETH", "MATIC", "BSC", "LUNA"]);
            var m = new WeakMap;
            class Token extends((0, l.WalletMixin)(o.default)) {
                constructor(t) {
                    super(t), f(this, m, {
                        writable: !0,
                        value: void 0
                    }), Object.entries(t).forEach(([t, e]) => {
                        "parent" === t ? (0, i.default)(this, m, e) : this[t] = e
                    }), this.BN = n.default, this.bus = null, this.fields = {}, this.balance = "", this.transactions = [], this.isSetBalance = !1, this.fields.paymentId = !1, this.eventEmmiter = c.default, this.id = (0, d.getTokenId)({
                        contract: this.contract,
                        parent: (0, s.default)(this, m).id,
                        ticker: this.ticker
                    }), this.manageEvents()
                }
                get alias() {
                    return "atomic"
                }
                get address() {
                    return (0, s.default)(this, m).address
                }
                get network() {
                    return (0, s.default)(this, m).id
                }
                get feeTicker() {
                    return (0, s.default)(this, m).ticker
                }
                get deprecatedParent() {
                    return (0, s.default)(this, m).id
                }
                get txWebUrl() {
                    return (0, s.default)(this, m).txWebUrl
                }
                get coreLibrary() {
                    return (0, s.default)(this, m).coreLibrary
                }
                get isCustom() {
                    return "custom" === this.source
                }
                getWebTransactionUrl(t) {
                    return (0, s.default)(this, m).getWebTransactionUrl(t)
                }
                async loadWallet(t) {
                    return this
                }
                async validateAddress(t) {
                    return (0, s.default)(this, m).validateAddress(t)
                }
                createTransaction(t) {
                    return (0, s.default)(this, m).createTokenTransaction({
                        ...t,
                        contract: this.contract
                    })
                }
                createRawTransactions(t) {
                    return (0, s.default)(this, m).createTransaction(t)
                }
                sendTransaction(t) {
                    return (0, s.default)(this, m).sendTransaction(t)
                }
                async getInfo() {
                    const t = await (0, s.default)(this, m).getTokenInfo({
                        contract: this.contract
                    });
                    return this.balance = t, {
                        balance: this.balance
                    }
                }
                async availableBalance() {
                    return this.divisibleBalance ? String(this.divisibleBalance) : "0"
                }
                async isAvailableForFee(t) {
                    return (0, s.default)(this, m).indivisibleBalance.gte(new this.BN(t))
                }
                getFee(t) {
                    return (0, s.default)(this, m).getFee(t)
                }
                async getTransactions(t, e) {
                    try {
                        const a = await (0, s.default)(this, m).getTokenTransactions({
                            contract: this.contract,
                            offset: t,
                            limit: e
                        });
                        if (a.length > 0) {
                            await u.default.filterAndUpdateTransactions(a);
                            const {
                                topic: t,
                                payload: e
                            } = (0, h.HISTORY_WALLET_UPDATED)(this.id, a);
                            this.eventEmmiter.emit(t, e)
                        }
                        return a
                    } catch (t) {
                        return this.transactions
                    }
                }
                async getTransaction(t) {
                    return (0, s.default)(this, m).getTransaction(t)
                }
                updateTokenParamsFromServer(t) {
                    if (t.feeData) {
                        const e = e => {
                            void 0 !== this[e] && void 0 !== t.feeData[e] && (this[e] = t.feeData[e])
                        };
                        Object.keys(t.feeData).forEach(t => {
                            e(t)
                        })
                    }
                }
                isTagShown() {
                    return p.has((0, s.default)(this, m).ticker)
                }
                manageEvents() {
                    this.eventEmmiter.on(`${(0,s.default)(this,m).id}-${this.id}::new-socket-tx`, ({
                        unconfirmedTx: t
                    }) => {
                        this.eventEmmiter.emit((0, s.default)(this, m).id + "::new-token-tx", {
                            token: this.contract,
                            unconfirmedTx: t
                        })
                    })
                }
                getFeeTicker() {
                    var t, e, a;
                    return null !== (t = null === (e = (a = (0, s.default)(this, m)).getFeeTicker) || void 0 === e ? void 0 : e.call(a)) && void 0 !== t ? t : (0, s.default)(this, m).ticker
                }
            }
            var g = Token;
            e.default = g
        },
        55: function(t, e, a) {
            "use strict";
            var r = a(2);
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.default = void 0;
            var s = r(a(207)),
                i = r(a(208)),
                n = r(a(57)),
                o = r(a(192));

            function c(t, e) {
                d(t, e), e.add(t)
            }

            function l(t, e, a) {
                d(t, e), e.set(t, a)
            }

            function d(t, e) {
                if (e.has(t)) throw new TypeError("Cannot initialize the same private elements twice on an object")
            }

            function u(t, e, a) {
                if (!e.has(t)) throw new TypeError("attempted to get private field on non-instance");
                return a
            }
            var h = new WeakMap,
                f = new WeakMap,
                p = new WeakMap,
                m = new WeakSet,
                g = new WeakSet,
                y = new WeakSet;

            function w() {
                (0, i.default)(this, p, [])
            }

            function v(t, e) {
                const a = "object" == typeof t.error ? t.error.toString() : t.error;
                return {
                    date: new Date,
                    userId: (0, s.default)(this, f),
                    currency: t.currency || t.instance.constructor.name,
                    platform: o.default.getPlatform(),
                    errorType: t.type || "",
                    appVersion: o.default.getVersion(),
                    coreVersion: o.default.getCoreVersion(),
                    errorMessage: t.url ? `${t.url} :: ${a}` : a,
                    errorStack: t.error.stack || "no stack trace"
                }
            }

            function b(t) {
                if (!this.isConnected()) return void console.warn("[Logger] Send logs cancelled while is offline");
                if (this.isEmpty()) return;
                const e = {
                    logs: (0, s.default)(this, p),
                    enabled: !0,
                    userId: (0, s.default)(this, f)
                };
                n.default.post(t, e, {
                    headers: {
                        "Content-Type": "application/json"
                    }
                }).then(() => {
                    u(this, m, w).call(this)
                }).catch(t => {
                    this.error({
                        type: "SendLogs",
                        error: t,
                        instance: this
                    })
                })
            }
            var k = new class Logger {
                constructor() {
                    c(this, y), c(this, g), c(this, m), l(this, h, {
                        writable: !0,
                        value: null
                    }), l(this, f, {
                        writable: !0,
                        value: null
                    }), l(this, p, {
                        writable: !0,
                        value: []
                    })
                }
                setUserId(t) {
                    (0, i.default)(this, f, t)
                }
                startCloudSync(t = "https://ob.atomicwallet.io/reportBugs") {
                    clearInterval((0, s.default)(this, h)), (0, i.default)(this, h, setInterval(() => u(this, y, b).call(this, t), 1e4))
                }
                log(t) {
                    (0, s.default)(this, p).push(u(this, g, v).call(this, t, "info"))
                }
                error(t) {
                    console.error("[Logger::error]", t), "KIN" !== t.currency && this.isConnected() && (0, s.default)(this, p).push(u(this, g, v).call(this, t, "error"))
                }
                isConnected() {
                    return window.navigator.onLine
                }
                isEmpty() {
                    return 0 === (0, s.default)(this, p).length
                }
            };
            e.default = k
        },
        557: function(t, e, a) {
            "use strict";
            var r = a(2);
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.default = void 0;
            var s = function(t, e) {
                    if (!e && t && t.__esModule) return t;
                    if (null === t || "object" != typeof t && "function" != typeof t) return {
                        default: t
                    };
                    var a = c(e);
                    if (a && a.has(t)) return a.get(t);
                    var r = {},
                        s = Object.defineProperty && Object.getOwnPropertyDescriptor;
                    for (var i in t)
                        if ("default" !== i && Object.prototype.hasOwnProperty.call(t, i)) {
                            var n = s ? Object.getOwnPropertyDescriptor(t, i) : null;
                            n && (n.get || n.set) ? Object.defineProperty(r, i, n) : r[i] = t[i]
                        } r.default = t, a && a.set(t, r);
                    return r
                }(a(67)),
                i = r(a(55)),
                n = a(1439),
                o = a(52);

            function c(t) {
                if ("function" != typeof WeakMap) return null;
                var e = new WeakMap,
                    a = new WeakMap;
                return (c = function(t) {
                    return t ? a : e
                })(t)
            }
            const l = (t, e) => (e.sort(), `${t}-${e.join(",")}`);
            var d = new class Rates {
                constructor() {
                    this.cache = {
                        popular: {},
                        other: {}
                    }, this.data = {}, this.dexRatesCache = null, this.popularCoins = [], this.ratesProviders = {
                        atomicRaki: new n.AtomicRaki,
                        coinMarketCap: new n.CoinMarketCap,
                        cryptoCompare: new n.CryptoCompare
                    }, this.ratesSettings = {
                        popular: [{
                            provider: "atomicRaki",
                            ttlSec: 60
                        }, {
                            provider: "cryptoCompare",
                            ttlSec: 60
                        }],
                        other: [{
                            provider: "coinMarketCap",
                            ttlSec: 180
                        }, {
                            provider: "cryptoCompare",
                            ttlSec: 180
                        }]
                    }
                }
                async getRatesFromDb(t) {
                    return t ? o.db.rates.where({
                        fiat: t
                    }).toArray() : o.db.rates.toArray()
                }
                async updateRatesInDb(t) {
                    await this._insertBatch(t)
                }
                async getRatesFromNet(t, e, a) {
                    await Promise.all([s.default.get(s.ConfigKey.Rates).then(t => {
                        var e;
                        this.popularCoins = (null === (e = t.providers[t.enabledProviders].tickers) || void 0 === e ? void 0 : e.split(",")) || []
                    }), s.default.get(s.ConfigKey.RatesSettings).then(t => {
                        this.ratesSettings = t
                    })].map(t => t.catch(t => {
                        i.default.error({
                            instance: this,
                            error: t
                        })
                    })));
                    return (await Promise.all(Object.keys(this.ratesSettings).map(async r => {
                        let s = [],
                            i = [];
                        for (const [o, {
                                provider: c,
                                ttlSec: d
                            }] of this.ratesSettings[r].entries()) {
                            var n;
                            const u = t.filter(({
                                ticker: t,
                                confirmed: e
                            }) => e && this.popularCoins.includes(t) === ("popular" === r)).concat(i);
                            i = [];
                            const h = l(c, u.map(({
                                id: t
                            }) => t));
                            if (!a && (null === (n = this.cache[r][h]) || void 0 === n ? void 0 : n.expired) > Date.now()) return this.cache[r][h].data;
                            const f = await this.fetchRates(u, e, r, c);
                            if (f.fetched) {
                                const t = await this.ratesProviders[c].getTargetTickersMap(u),
                                    e = [];
                                for (const a of u) {
                                    const r = f.data.find(({
                                        ticker: e
                                    }) => e === t[a.id]) || {};
                                    r.rate > 0 ? e.push(Object.assign({
                                        walletId: a.id
                                    }, r)) : i.push(a)
                                }
                                s = s.concat(e);
                                const a = 1e3;
                                this.cache[r][h] = {
                                    data: e,
                                    expired: Date.now() + d * a
                                }
                            }
                            if (0 === i.length || o === this.ratesSettings[r].length - 1) return s
                        }
                        return console.error(`no rates fetched for ${r} coins`), []
                    }))).flat(1)
                }
                async fetchRates(t, e, a, r) {
                    try {
                        return {
                            fetched: !0,
                            data: await this.ratesProviders[r].get(t, e)
                        }
                    } catch (t) {
                        return console.error(t), {
                            fetched: !1
                        }
                    }
                }
                setRate({
                    id: t
                }, e, a) {
                    this.data[t] || (this.data[t] = {}), this.data[t][e] = a
                }
                updateDataRate(t, e, a) {
                    this.data[t] || (this.data[t] = {}), this.data[t][e] = a
                }
                async initRates() {
                    (await this.getRatesFromDb()).forEach(({
                        rate: t = 0,
                        change: e = 0,
                        supply: a = 0,
                        volume: r = 0,
                        marketCap: s = 0,
                        fiat: i,
                        walletId: n
                    }) => {
                        const o = {
                            rate: t,
                            change: e,
                            supply: a,
                            volume: r,
                            marketCap: s
                        };
                        this.updateDataRate(n, i, o)
                    })
                }
                async updateRates() {
                    const t = Object.keys(this.data).map(t => Object.keys(this.data[t]).map(e => {
                        const a = this.data[t][e] || {};
                        return {
                            id: e + t,
                            fiat: e,
                            walletId: t,
                            timestamp: (new Date).getTime(),
                            rate: a.rate || 0,
                            change: a.change || 0,
                            volume: a.volume || 0,
                            supply: a.supply || 0,
                            marketCap: a.marketCap || 0
                        }
                    })).flat();
                    await this.updateRatesInDb(t)
                }
                getRate({
                    id: t,
                    confirmed: e
                }, a) {
                    if (!e) return;
                    const r = this.data[t];
                    return r && r[a]
                }
                async getRates(t, e = "USD", a = !1) {
                    await this.initRates();
                    const r = await this.getRatesFromNet(t, e, a);
                    return o.requestQueueState.setAsCompleted(o.REQUEST_TYPE.INITIAL_RATES), r.length > 0 && (r.forEach(({
                        walletId: t,
                        ...a
                    }) => {
                        this.updateDataRate(t, e, a)
                    }), await this.updateRates()), this.data
                }
                convertToUSD(t, {
                    id: e,
                    confirmed: a
                }, r) {
                    return (a || t && e && r) && Object.keys(this.data).includes(e) && void 0 !== this.data[e][r] ? Number(t) * this.data[e][r.toUpperCase()].rate : 0
                }
                getCoinPrice(t, e) {
                    return this.getRateField(t, e, "rate")
                }
                getChangeDay(t, e) {
                    return this.getRateField(t, e, "change")
                }
                getMarketCap(t, e) {
                    return this.getRateField(t, e, "marketCap")
                }
                getRateField({
                    id: t,
                    confirmed: e
                } = {}, a, r) {
                    if (!e) return 0;
                    try {
                        return this.data[t][a][r]
                    } catch (t) {
                        return 0
                    }
                }
                async _insertBatch(t) {
                    await o.db.rates.bulkPut(t)
                }
                async _update(t) {
                    const e = await o.db.rates.where({
                        ticker: t.ticker.toUpperCase(),
                        fiat: t.fiat.toUpperCase()
                    }).first().catch(t => i.default.error({
                        instance: this,
                        error: t
                    }));
                    if (null != e && e.id) return await o.db.rates.update(e.id, t), t
                }
            };
            e.default = d
        },
        650: function(t, e, a) {
            "use strict";
            var r = a(2);
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.default = e.ACTIVITY_TYPES = void 0;
            var s = a(173),
                i = r(a(143));
            const n = {
                balance: "balance",
                history: "history"
            };
            e.ACTIVITY_TYPES = n;
            const o = Symbol("SKIP_ADDRESS_CHECK"),
                c = ["BTC", "ETH"],
                l = ["XMR"],
                d = ({
                    address: t,
                    id: e,
                    deprecatedParent: a
                }) => t ? e : a;
            var u = new class ActiveWalletsList {
                constructor() {
                    this.storageId = "activeWallets", this.activatedWalletsIdCollection = [], this.activityChecked = {
                        balance: {},
                        history: {}
                    }, this.notCheckedWalletsDeactivated = !1, this.synchronize(), i.default.on(s.WALLETS.DEACTIVATE_COIN, ({
                        id: t
                    }) => this.deactivate(t))
                }
                deactivate(t) {
                    this.activatedWalletsIdCollection = this.activatedWalletsIdCollection.filter(e => e !== t), this.save()
                }
                activate(t) {
                    this.isActivated(t) || (this.activatedWalletsIdCollection.push(d(t)), this.save(), i.default.emit(s.WALLETS.ACTIVATE_COIN, {
                        id: d(t)
                    }))
                }
                deactivateNotCheckedWallets(t = !0) {
                    this.notCheckedWalletsDeactivated = t
                }
                getCheckResult(t, e) {
                    return this.activityChecked[e][d(t)]
                }
                isActivated(t) {
                    return [...c, ...this.activatedWalletsIdCollection].includes(d(t))
                }
                isActive(t, e = o) {
                    const a = Object.values(n),
                        r = a.some(e => !this.isChecked(t, e)),
                        s = a.some(e => this.getCheckResult(t, e));
                    return l.includes(d(t)) ? this.isActivated(t) : Boolean((e || e === o) && (this.isActivated(t) || r && !this.notCheckedWalletsDeactivated || s))
                }
                isChecked(t, e) {
                    return void 0 !== this.getCheckResult(t, e)
                }
                save() {
                    localStorage.setItem(this.storageId, JSON.stringify({
                        activatedWalletsIdCollection: this.activatedWalletsIdCollection,
                        activityChecked: this.activityChecked
                    }))
                }
                setChecked(t, e, a) {
                    this.activityChecked[e][d(t)] = a, this.save()
                }
                synchronize() {
                    const t = localStorage.getItem(this.storageId);
                    try {
                        const e = JSON.parse(t || "{}");
                        this.activatedWalletsIdCollection = e.activatedWalletsIdCollection || [], this.activityChecked = e.activityChecked || {
                            balance: {},
                            history: {}
                        }
                    } catch (t) {
                        console.error(t), this.activatedWalletsIdCollection = [], this.activityChecked = {
                            balance: {},
                            history: {}
                        }
                    }
                }
                reset() {
                    this.activatedWalletsIdCollection = [], this.activityChecked = {
                        balance: {},
                        history: {}
                    }, this.save()
                }
            };
            e.default = u
        },
        67: function(t, e, a) {
            "use strict";
            var r = a(2);
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), Object.defineProperty(e, "ConfigKey", {
                enumerable: !0,
                get: function() {
                    return i.ConfigKey
                }
            }), e.default = void 0;
            var s = r(a(2411)),
                i = a(321),
                n = new s.default;
            e.default = n
        },
        74: function(t, e, a) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.default = void 0;
            var r = class Transaction {
                constructor(t) {
                    if ("object" != typeof t) throw new TypeError("Transaction: constructor arguments object must be used");
                    if (arguments.length > 1) throw new Error("Transaction: constructor accepts only 1 argument");
                    if (t.alias || (t.alias = "atomic"), !t.ticker) throw new Error("Transaction: must have ticker");
                    if (!t.datetime) throw new Error("Transaction: must have datetime object");
                    "string" == typeof t.datetime && (t.datetime = new Date(t.datetime));
                    for (const [e, a] of Object.entries(t)) this[e] = a;
                    t.timestamp || (this.timestamp = t.datetime.getTime()), this.date = this.getDate(), this.time = this.getTime()
                }
                getDateTime() {
                    return new Date(Number("" + this.timestamp))
                }
                getDate() {
                    return this.datetime.toDateString().slice(4)
                }
                getTime() {
                    return this.datetime.toTimeString().slice(0, 5)
                }
                getStatus() {
                    return this.confirmations > 1 ? {
                        text: "Confirmed",
                        color: "#06CE91"
                    } : {
                        text: "Pending"
                    }
                }
                getHash() {
                    return this.txid
                }
                static fromHistory(t) {
                    const e = new this(t);
                    return e.direction = "in" === t.direction, e.datetime = e.getDateTime(), e.otherSideAddress = t.recepient, e
                }
            };
            e.default = r
        },
        944: function(t, e, a) {
            "use strict";
            var r = a(2);
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.default = void 0;
            var s = r(a(1442)),
                i = r(a(57)),
                n = r(a(55)),
                o = function(t, e) {
                    if (!e && t && t.__esModule) return t;
                    if (null === t || "object" != typeof t && "function" != typeof t) return {
                        default: t
                    };
                    var a = l(e);
                    if (a && a.has(t)) return a.get(t);
                    var r = {},
                        s = Object.defineProperty && Object.getOwnPropertyDescriptor;
                    for (var i in t)
                        if ("default" !== i && Object.prototype.hasOwnProperty.call(t, i)) {
                            var n = s ? Object.getOwnPropertyDescriptor(t, i) : null;
                            n && (n.get || n.set) ? Object.defineProperty(r, i, n) : r[i] = t[i]
                        } r.default = t, a && a.set(t, r);
                    return r
                }(a(67)),
                c = a(52);

            function l(t) {
                if ("function" != typeof WeakMap) return null;
                var e = new WeakMap,
                    a = new WeakMap;
                return (l = function(t) {
                    return t ? a : e
                })(t)
            }
            const d = {
                    BNB: "BSC",
                    USDC: "TRX-USDC",
                    USDT: "TRX-USDT"
                },
                u = {
                    chartDataSettings: {
                        type: "atomicServiceGetReverse",
                        baseUrl: "https://raki.atomicwallet.io/"
                    },
                    mainChartEndPoint: "lastWeek",
                    requestTimeouts: {
                        atomicServicePostReverse: {
                            lastYear: 18e4,
                            lastHour: 18e4,
                            last24Hour: 18e4,
                            lastWeek: 6e5,
                            lastMonth: 18e5,
                            allTime: 18e5
                        },
                        atomicServiceGetReverse: {
                            lastYear: 18e4,
                            lastHour: 18e4,
                            last24Hour: 18e4,
                            lastWeek: 6e5,
                            lastMonth: 18e5,
                            allTime: 18e5
                        },
                        atomicServicePost: {
                            lastYear: 18e4,
                            lastHour: 18e4,
                            last24Hour: 18e4,
                            lastWeek: 6e5,
                            lastMonth: 18e5,
                            allTime: 18e5
                        },
                        atomicServiceGet: {
                            lastYear: 18e4,
                            lastHour: 18e4,
                            last24Hour: 18e4,
                            lastWeek: 6e5,
                            lastMonth: 18e5,
                            allTime: 18e5
                        },
                        cryptocompare: {
                            last24Hour: 18e4,
                            allTime: 6e4
                        }
                    }
                },
                h = ["atomicServicePost", "atomicServicePostReverse"],
                f = ["atomicServiceGetReverse", "atomicServicePostReverse"];
            var p = new class ChartData {
                constructor() {
                    this.data = {}, this.dataToUpdate = {}, this.lastRequestTimes = {
                        lastYear: null,
                        last24Hour: null,
                        lastWeek: null,
                        lastMonth: null,
                        allTime: null
                    }, this.isReverse = !0, this.isMobile = !1, this.isLoading = !1, this.fiat = "USD", this.chartRequestList = {}, this.platformVersion = null, this.chartDataSettings = u.chartDataSettings, this.mainChartEndPoint = u.mainChartEndPoint, this.requestTimeouts = u.requestTimeouts[this.chartDataSettings.type], this.isReverse = f.includes(this.chartDataSettings.type)
                }
                async fetchSettings() {
                    const t = await o.default.get(o.ConfigKey.ChartSettings).catch(t => (n.default.error({
                        instance: this,
                        error: t
                    }), null));
                    t && (this.chartDataSettings = t.chartDataSettings || u.chartDataSettings, this.mainChartEndPoint = t.mainChartEndPoint || u.mainChartEndPoint, this.isReverse = f.includes(this.chartDataSettings.type), this.requestTimeouts = t.requestTimeouts && t.requestTimeouts[this.chartDataSettings.type] || u.requestTimeouts[this.chartDataSettings.type])
                }
                setFiat(t) {
                    this.fiat = t
                }
                async getChartDataFromDb() {
                    return await c.db.chartData.where({
                        fiat: this.fiat
                    }).toArray()
                }
                async getChartDataTickerFromDb(t) {
                    return await c.db.chartData.where({
                        fiat: this.fiat,
                        ticker: t
                    }).toArray()
                }
                setChartData(t, e, a, r) {
                    if (t[r] || (Object.defineProperty(t, Object.keys(r)[0], {}), t[r] = {}), t[r][this.fiat]) {
                        const s = Object.assign({}, t[r][this.fiat]);
                        s[a] = e, t[r][this.fiat] = s
                    } else t[r][this.fiat] = {}, t[r][this.fiat][a] = e;
                    if (Object.keys(d).includes(r)) {
                        const i = d[r];
                        t[i] = (0, s.default)(t[i] || {}, {
                            [this.fiat]: {
                                [a]: e
                            }
                        })
                    }
                }
                async initChartData(t) {
                    (t ? await this.getChartDataTickerFromDb(t) : await this.getChartDataFromDb()).forEach(({
                        data: t = [],
                        endPoint: e,
                        ticker: a
                    }) => {
                        this.setChartData(this.data, t, e, a)
                    })
                }
                updateChartData(t) {
                    const e = Object.keys(t).filter(e => t[e][this.fiat]).map(e => t[e][this.fiat] && Object.keys(t[e][this.fiat]).map(a => ({
                        id: e + this.fiat + a,
                        data: t[e][this.fiat][a],
                        fiat: this.fiat,
                        ticker: e,
                        endPoint: a
                    }))).flat();
                    this._insertBatch(e)
                }
                async getCryptoCompareData(t) {
                    const e = await (0, i.default)({
                        method: "get",
                        url: t
                    }).catch(t => n.default.error({
                        instance: this,
                        error: t
                    }));
                    return e.data && e.data.Data.Data && "Error" !== e.data.Response ? e.data.Data.Data : ""
                }
                async getCryptoCompareHistoryData({
                    ticker: t,
                    isRequestTimeSave: e,
                    isGetAtOnce: a,
                    isMainChart: r,
                    endPoint: s
                }) {
                    const i = `?tsym=${this.fiat}&fsym=${t}`,
                        n = {
                            last24Hour: "",
                            lastYear: "",
                            lastMonth: "",
                            lastWeek: "",
                            allTime: ""
                        };
                    let o = !1,
                        c = !1;
                    const l = Date.now();
                    if (r) {
                        const t = ["allTime", "lastWeek", "lastMonth", "lastYear"];
                        o = t.includes(this.mainChartEndPoint) || t.includes(s), c = "last24Hour" === this.mainChartEndPoint || this.mainChartEndPoint === s
                    }
                    return (o || a || l - this.requestTimeouts.allTime > this.lastRequestTimes.allTime) && (e && (this.lastRequestTimes.allTime = l), n.allTime = await this.getCryptoCompareData(`${this.chartDataSettings.baseUrl}v2/histoday${i}&limit=740`), n.allTime && (n.lastWeek = n.allTime.slice(-7), n.lastMonth = n.allTime.slice(-31), n.lastYear = n.allTime.slice(-365))), (c || a || l - this.requestTimeouts.last24Hour > this.lastRequestTimes.last24Hour) && (e && (this.lastRequestTimes.last24Hour = l), n.last24Hour = await this.getCryptoCompareData(`${this.chartDataSettings.baseUrl}v2/histominute${i}&limit=1440`)), n
                }
                async processCryptoCompareData({
                    tickers: t,
                    isGetAtOnce: e,
                    isMainChart: a,
                    endPoints: r
                }) {
                    const s = t.length;
                    for (let i = 0; i < s; i++) {
                        const n = s === i + 1,
                            o = t[i];
                        for (const t of r) {
                            const r = {
                                    ticker: o,
                                    isRequestTimeSave: n,
                                    isGetAtOnce: e,
                                    isMainChart: a,
                                    endPoint: t
                                },
                                s = await this.getCryptoCompareHistoryData(r);
                            for (const t in s) this.setChartData(this.data, s[t], t, o)
                        }
                    }
                    this.updateChartData(this.data)
                }
                async getAtomicServiceHistoryData(t, e, a) {
                    const r = this.isMobile && "lastWeek" === e ? "lastWeekHourly" : e,
                        s = h.includes(this.chartDataSettings.type) ? "post" : "get",
                        n = this.chartDataSettings.baseUrl + r,
                        o = {
                            url: "get" === s ? `${n}?tickers=${t.join(",")}&fiat=${this.fiat}` : n,
                            method: s,
                            headers: {
                                Authorization: "lYK43WJ95Y3195O"
                            }
                        };
                    "post" === s && (o.data = {
                        tickers: t.join(","),
                        fiat: this.fiat
                    });
                    const c = await (0, i.default)(o).catch(t => {
                        console.warn("Fetch chart data error", t)
                    });
                    c && c.data && (a && (this.dataToUpdate = {}), t.forEach(t => {
                        if (!c.data[t]) return;
                        const r = this.isReverse ? c.data[t].reverse() : c.data[t];
                        if (a && this.setChartData(this.dataToUpdate, r, e, t), this.setChartData(this.data, r, e, t), "allTime" === e) {
                            const e = r.slice(-365),
                                s = r.slice(-31);
                            a && (this.setChartData(this.dataToUpdate, e, "lastYear", t), this.isMobile && this.setChartData(this.dataToUpdate, s, "lastMonth", t)), this.setChartData(this.data, e, "lastYear", t), this.isMobile && this.setChartData(this.data, s, "lastMonth", t)
                        }
                        if (this.isMobile && "lastWeek" === e) {
                            const e = r.slice(-168),
                                s = r.slice(-24);
                            a && (this.setChartData(this.dataToUpdate, e, "lastWeek", t), this.setChartData(this.dataToUpdate, s, "last24Hour", t)), this.setChartData(this.data, e, "lastWeek", t), this.setChartData(this.data, s, "last24Hour", t)
                        }
                    }))
                }
                async processAtomicServiceData({
                    tickers: t,
                    isGetAtOnce: e,
                    isMainChart: a,
                    endPoints: r
                }) {
                    let s = ["last24Hour", "lastWeek", "lastMonth", "allTime"];
                    const i = a || r.length || 1 === t.length,
                        n = "lastYear" === this.mainChartEndPoint ? "allTime" : this.mainChartEndPoint;
                    a ? s = [n] : r.length > 0 ? s = r : (s = s.filter(t => t !== n), s.unshift(n));
                    const o = s.length,
                        l = Date.now(),
                        d = (0, c.chunkArray)(t, 30),
                        u = d.length,
                        h = [];
                    for (let t = 0; t < o; t++) {
                        const a = s[t],
                            r = l - this.requestTimeouts[a];
                        if (e || r > this.lastRequestTimes[a])
                            for (let t = 0; t < u; t++) u === t + 1 && (this.lastRequestTimes[a] = l), h.push(this.getAtomicServiceHistoryData(d[t], a, i))
                    }
                    await Promise.allSettled(h), this.updateChartData(this.data)
                }
                async getHistoryDataFromNetByEndpoint(t, e, a = "USD") {
                    await this.getHistoryDataFromNet([t], a, !0, !1, [e])
                }
                async getHistoryDataFromNet(t, e = "USD", a = !1, r = !1, s = []) {
                    if (!t || 0 === t.length) return;
                    this.fiat === e || "USD" === this.fiat && "BTC" === e || (this.fiat = "BTC" === e ? "USD" : e, this.isLoading = !0), 1 === t.length ? await this.initChartData(t[0]) : await this.initChartData(), this.getCoinChartData("BTC") && (this.isLoading = !1);
                    const i = {
                        tickers: t,
                        isGetAtOnce: a,
                        isMainChart: r,
                        endPoints: s
                    };
                    "cryptocompare" === this.chartDataSettings.type ? await this.processCryptoCompareData(i) : await this.processAtomicServiceData(i), this.isLoading = !1
                }
                getMainChartData(t) {
                    try {
                        return this.data[t][this.fiat][this.mainChartEndPoint]
                    } catch (t) {
                        return []
                    }
                }
                getCoinChartData(t) {
                    try {
                        return this.data[t][this.fiat]
                    } catch (t) {
                        return []
                    }
                }
                isEmptyChart(t) {
                    var e, a;
                    const {
                        CoinMarketCap: r,
                        CryptoCompare: s
                    } = this.chartRequestList;
                    return !(!r && !s) && !(null != r && null !== (e = r.assets) && void 0 !== e && e.includes(t) || null != s && null !== (a = s.assets) && void 0 !== a && a.includes(t))
                }
                async getChartsRequestFrequency() {
                    try {
                        const t = await o.default.get("charts_request_frequency");
                        this.chartRequestList = null == t ? void 0 : t.sources
                    } catch (t) {
                        console.warn(t)
                    }
                }
                isPriceChart(t) {
                    try {
                        return this.getMainChartData(t, this.fiat).length > 0
                    } catch (t) {
                        return !1
                    }
                }
                async _insertBatch(t) {
                    await c.db.chartData.bulkPut(t)
                }
                async getChartDataForEndpoint(t, e, a = !1, r = !1) {
                    let s = null;
                    if ("cryptocompare" === this.chartDataSettings.type) {
                        const i = {
                            ticker: t,
                            isRequestTimeSave: !1,
                            isMainChart: r,
                            isGetAtOnce: a,
                            endPoint: e
                        };
                        s = {
                            cryptoCompareData: await this.getCryptoCompareHistoryData(i)
                        }
                    } else {
                        var n;
                        const a = h.includes(this.chartDataSettings.type) ? "post" : "get",
                            r = this.chartDataSettings.baseUrl + e,
                            o = {
                                url: "get" === a ? `${r}?tickers=${t}&fiat=${this.fiat}` : r,
                                method: a,
                                headers: {
                                    Authorization: "lYK43WJ95Y3195O"
                                }
                            };
                        "post" === a && (o.data = {
                            tickers: t,
                            fiat: this.fiat
                        });
                        const c = await (0, i.default)(o).catch(t => {
                                console.warn("Fetch chart data error", t)
                            }),
                            l = this.isReverse ? null == c || null === (n = c.data[t]) || void 0 === n ? void 0 : n.reverse() : null == c ? void 0 : c.data[t];
                        if (l) {
                            if ("allTime" === e) {
                                const t = l.slice(-365),
                                    e = l.slice(-31);
                                s = {
                                    allTime: l,
                                    lastYear: t,
                                    lastMonth: e
                                }
                            }
                            if ("lastWeek" === e) {
                                s = {
                                    lastWeek: l.slice(-168),
                                    last24Hour: l.slice(-24)
                                }
                            }
                        }
                    }
                    return this.updateChartData({
                        [t]: {
                            [this.fiat]: s
                        }
                    }), s
                }
            };
            e.default = p
        },
        955: function(t, e, a) {
            "use strict";
            var r = a(2);
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.default = void 0;
            var s = r(a(57)),
                i = function(t, e) {
                    if (!e && t && t.__esModule) return t;
                    if (null === t || "object" != typeof t && "function" != typeof t) return {
                        default: t
                    };
                    var a = u(e);
                    if (a && a.has(t)) return a.get(t);
                    var r = {},
                        s = Object.defineProperty && Object.getOwnPropertyDescriptor;
                    for (var i in t)
                        if ("default" !== i && Object.prototype.hasOwnProperty.call(t, i)) {
                            var n = s ? Object.getOwnPropertyDescriptor(t, i) : null;
                            n && (n.get || n.set) ? Object.defineProperty(r, i, n) : r[i] = t[i]
                        } r.default = t, a && a.set(t, r);
                    return r
                }(a(67)),
                n = r(a(55)),
                o = a(1439),
                c = a(26),
                l = r(a(2524)),
                d = r(a(2525));

            function u(t) {
                if ("function" != typeof WeakMap) return null;
                var e = new WeakMap,
                    a = new WeakMap;
                return (u = function(t) {
                    return t ? a : e
                })(t)
            }

            function h(t, e) {
                ! function(t, e) {
                    if (e.has(t)) throw new TypeError("Cannot initialize the same private elements twice on an object")
                }(t, e), e.add(t)
            }

            function f(t, e, a) {
                if (!e.has(t)) throw new TypeError("attempted to get private field on non-instance");
                return a
            }
            var p = new WeakSet;

            function m(t) {
                const e = (Number(t) / 100 * 5).toFixed(0);
                return Number(e) > 10 ? Number(e) : 10
            }
            var g = new class Buy {
                constructor() {
                    h(this, p), this.rates = new o.CryptoCompare, this.settings = c.BUY_SETTINGS, this.settings.simplexTickers = l.default
                }
                async fetchSettings() {
                    const [t, e] = await Promise.all([i.default.get(i.ConfigKey.SimplexSettings), i.default.get(i.ConfigKey.SimplexAliases)].map(t => t.catch(t => (n.default.error(t), null))));
                    t && (this.settings = t), e && (this.settings.simplexTickers = e);
                    const a = await this.getAvailableFiats(this.settings.simplexApiUrl).then(({
                            data: t
                        }) => (null == t ? void 0 : t.result) || null).catch(() => null),
                        {
                            excludedFiat: r = []
                        } = this.settings,
                        s = Object.values(null != a ? a : {});
                    this.settings.fiats = d.default.reduce((t, e) => {
                        const a = s.find(({
                            ticker_symbol: t
                        }) => t === e.code);
                        return !r.includes(e.code) && a && (t[e.code] = {
                            min: a.min_amount,
                            max: a.max_amount,
                            ...e,
                            fee: f(this, p, m).call(this, a.min_amount)
                        }), t
                    }, {})
                }
                getAvailableFiats(t) {
                    const e = {
                        method: "get",
                        baseURL: t,
                        url: "/supportedFiatCurrencies"
                    };
                    return (0, s.default)(e)
                }
                async getSettings(t) {
                    const e = this.settings.fiats[t];
                    if (["USD", "EUR", "KHR", "BND"].includes(t)) return e;
                    try {
                        const a = await this.getUsdPrice(t),
                            r = 60,
                            s = 19990,
                            i = 10;
                        return {
                            min: Math.max(Math.round(a * r), e.min),
                            max: Math.min(Math.round(a * s), e.max),
                            fee: Math.ceil(a * i),
                            default: e.default
                        }
                    } catch (t) {
                        return e
                    }
                }
                getSimplexTicker({
                    contract: t,
                    deprecatedParent: e,
                    ticker: a
                }) {
                    const r = Object.entries(this.settings.simplexTickers).find(([, {
                        contract: r,
                        network: s,
                        ticker: i
                    }]) => {
                        const n = !r && !t && (null == i ? void 0 : i.toLowerCase()) === a.toLowerCase(),
                            o = r && t && r.toLowerCase() === t.toLowerCase();
                        return e.toLowerCase() === (null == s ? void 0 : s.toLowerCase()) && (n || o)
                    });
                    return r ? r[0] : a
                }
                getAvailableWallet({
                    id: t
                }) {
                    return this.settings.availableWallets.find(({
                        id: e
                    }) => e.toUpperCase() === t.toUpperCase())
                }
                isAvailable(t) {
                    return void 0 !== this.getAvailableWallet(t)
                }
                async getUsdPrice(t) {
                    const e = await this.rates.get([{
                            id: "USD",
                            ticker: "USD"
                        }], t),
                        {
                            rate: a
                        } = e.find(({
                            ticker: t
                        }) => "USD" === t) || {};
                    if (!a) throw new Error("No rate for " + t);
                    return a
                }
            };
            e.default = g
        },
        956: function(t, e, a) {
            "use strict";
            var r = a(2);
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.default = void 0;
            var s = r(a(2526)),
                i = function(t, e) {
                    if (!e && t && t.__esModule) return t;
                    if (null === t || "object" != typeof t && "function" != typeof t) return {
                        default: t
                    };
                    var a = c(e);
                    if (a && a.has(t)) return a.get(t);
                    var r = {},
                        s = Object.defineProperty && Object.getOwnPropertyDescriptor;
                    for (var i in t)
                        if ("default" !== i && Object.prototype.hasOwnProperty.call(t, i)) {
                            var n = s ? Object.getOwnPropertyDescriptor(t, i) : null;
                            n && (n.get || n.set) ? Object.defineProperty(r, i, n) : r[i] = t[i]
                        } r.default = t, a && a.set(t, r);
                    return r
                }(a(67)),
                n = r(a(55)),
                o = r(a(192));

            function c(t) {
                if ("function" != typeof WeakMap) return null;
                var e = new WeakMap,
                    a = new WeakMap;
                return (c = function(t) {
                    return t ? a : e
                })(t)
            }
            var l = new class CoinRestrictionPolicy {
                constructor() {
                    this.restrictions = {}
                }
                fetchSettings() {
                    return i.default.get(i.ConfigKey.DisabledCoins).then(t => {
                        this.restrictions = t
                    }).catch(t => {
                        n.default.error({
                            instance: this,
                            error: t
                        })
                    })
                }
                getMessage(t, e) {
                    var a;
                    return null === (a = this.getRestrictions(t, e)[0]) || void 0 === a ? void 0 : a.message
                }
                getRestrictions(t, e) {
                    return (this.restrictions[t] || []).filter(({
                        actions: t
                    }) => t.includes("all") || t.includes(e)).filter(({
                        platforms: t
                    }) => t.includes("all") || t.includes(o.default.getPlatform())).filter(({
                        versions: t
                    }) => {
                        const e = t[o.default.getPlatform()] || ["all"];
                        return e.includes("all") || e.reduce((t, e) => t || ((t, e) => {
                            const a = (t => {
                                const e = ["<", "<=", ">=", ">"];
                                for (const a of e)
                                    if (0 === t.indexOf(a)) return a;
                                return "="
                            })(t);
                            return s.default.compare(e, t.replace(a, ""), a)
                        })(e, o.default.getVersion()), !1)
                    })
                }
                isAllowed(t, e) {
                    return 0 === this.getRestrictions(t, e).length
                }
            };
            e.default = l
        }
    }
]);