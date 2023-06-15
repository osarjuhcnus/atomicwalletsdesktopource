(window.webpackJsonp = window.webpackJsonp || []).push([
    [26], {
        11830: function(t, e, r) {
            "use strict";

            function o(t) {
                for (let e = (t = t.slice()).length - 1; e > 0; e--) {
                    const r = Math.floor(Math.random() * (e + 1)),
                        o = t[e];
                    t[e] = t[r], t[r] = o
                }
                return t
            }
            r.d(e, "a", (function() {
                return o
            }))
        },
        11833: function(t, e, r) {
            "use strict";
            r.d(e, "b", (function() {
                return l
            })), r.d(e, "c", (function() {
                return u
            })), r.d(e, "d", (function() {
                return d
            })), r.d(e, "a", (function() {
                return h
            }));
            var o = r(141),
                n = r.n(o),
                s = r(14),
                i = r(9179),
                a = r(37);
            const c = new a.b("sha2/5.7.0");

            function l(t) {
                return "0x" + n.a.ripemd160().update(Object(s.a)(t)).digest("hex")
            }

            function u(t) {
                return "0x" + n.a.sha256().update(Object(s.a)(t)).digest("hex")
            }

            function d(t) {
                return "0x" + n.a.sha512().update(Object(s.a)(t)).digest("hex")
            }

            function h(t, e, r) {
                return i.a[t] || c.throwError("unsupported algorithm " + t, a.b.errors.UNSUPPORTED_OPERATION, {
                    operation: "hmac",
                    algorithm: t
                }), "0x" + n.a.hmac(n.a[t], Object(s.a)(e)).update(Object(s.a)(r)).digest("hex")
            }
        },
        11834: function(t, e, r) {
            "use strict";
            r.d(e, "a", (function() {
                return c
            }));
            var o = r(14),
                n = r(37);
            const s = new n.b("random/5.7.0");
            const i = function() {
                if ("undefined" != typeof self) return self;
                if ("undefined" != typeof window) return window;
                if ("undefined" != typeof global) return global;
                throw new Error("unable to locate global object")
            }();
            let a = i.crypto || i.msCrypto;

            function c(t) {
                (t <= 0 || t > 1024 || t % 1 || t != t) && s.throwArgumentError("invalid length", "length", t);
                const e = new Uint8Array(t);
                return a.getRandomValues(e), Object(o.a)(e)
            }
            a && a.getRandomValues || (s.warn("WARNING: Missing strong random number source"), a = {
                getRandomValues: function(t) {
                    return s.throwError("no secure random source avaialble", n.b.errors.UNSUPPORTED_OPERATION, {
                        operation: "crypto.getRandomValues"
                    })
                }
            })
        },
        6139: function(t, e, r) {
            "use strict";
            r.r(e), r.d(e, "Provider", (function() {
                return o.b
            })), r.d(e, "BaseProvider", (function() {
                return base_provider_BaseProvider
            })), r.d(e, "Resolver", (function() {
                return base_provider_Resolver
            })), r.d(e, "UrlJsonRpcProvider", (function() {
                return url_json_rpc_provider_UrlJsonRpcProvider
            })), r.d(e, "FallbackProvider", (function() {
                return fallback_provider_FallbackProvider
            })), r.d(e, "AlchemyProvider", (function() {
                return alchemy_provider_AlchemyProvider
            })), r.d(e, "AlchemyWebSocketProvider", (function() {
                return alchemy_provider_AlchemyWebSocketProvider
            })), r.d(e, "AnkrProvider", (function() {
                return ankr_provider_AnkrProvider
            })), r.d(e, "CloudflareProvider", (function() {
                return cloudflare_provider_CloudflareProvider
            })), r.d(e, "EtherscanProvider", (function() {
                return etherscan_provider_EtherscanProvider
            })), r.d(e, "InfuraProvider", (function() {
                return infura_provider_InfuraProvider
            })), r.d(e, "InfuraWebSocketProvider", (function() {
                return infura_provider_InfuraWebSocketProvider
            })), r.d(e, "JsonRpcProvider", (function() {
                return json_rpc_provider_JsonRpcProvider
            })), r.d(e, "JsonRpcBatchProvider", (function() {
                return json_rpc_batch_provider_JsonRpcBatchProvider
            })), r.d(e, "NodesmithProvider", (function() {
                return nodesmith_provider_NodesmithProvider
            })), r.d(e, "PocketProvider", (function() {
                return pocket_provider_PocketProvider
            })), r.d(e, "StaticJsonRpcProvider", (function() {
                return url_json_rpc_provider_StaticJsonRpcProvider
            })), r.d(e, "Web3Provider", (function() {
                return web3_provider_Web3Provider
            })), r.d(e, "WebSocketProvider", (function() {
                return websocket_provider_WebSocketProvider
            })), r.d(e, "IpcProvider", (function() {
                return qt
            })), r.d(e, "JsonRpcSigner", (function() {
                return json_rpc_provider_JsonRpcSigner
            })), r.d(e, "getDefaultProvider", (function() {
                return Xt
            })), r.d(e, "getNetwork", (function() {
                return n.a
            })), r.d(e, "isCommunityResource", (function() {
                return E
            })), r.d(e, "isCommunityResourcable", (function() {
                return y
            })), r.d(e, "showThrottleMessage", (function() {
                return O
            })), r.d(e, "Formatter", (function() {
                return formatter_Formatter
            }));
            var o = r(5989),
                n = r(6909),
                s = r(6515),
                i = r(6184),
                a = r(319),
                c = r(14),
                l = r(7224),
                u = r(11832),
                d = r(60),
                h = r(11833),
                p = r(2379),
                m = r(5769),
                f = r(322),
                b = r.n(f),
                g = r(37);
            var v = r(209),
                _ = r(7225),
                k = r(2338);
            const w = new g.b("providers/5.7.2");
            class formatter_Formatter {
                constructor() {
                    this.formats = this.getDefaultFormats()
                }
                getDefaultFormats() {
                    const t = {},
                        e = this.address.bind(this),
                        r = this.bigNumber.bind(this),
                        o = this.blockTag.bind(this),
                        n = this.data.bind(this),
                        s = this.hash.bind(this),
                        i = this.hex.bind(this),
                        a = this.number.bind(this),
                        c = this.type.bind(this);
                    return t.transaction = {
                        hash: s,
                        type: c,
                        accessList: formatter_Formatter.allowNull(this.accessList.bind(this), null),
                        blockHash: formatter_Formatter.allowNull(s, null),
                        blockNumber: formatter_Formatter.allowNull(a, null),
                        transactionIndex: formatter_Formatter.allowNull(a, null),
                        confirmations: formatter_Formatter.allowNull(a, null),
                        from: e,
                        gasPrice: formatter_Formatter.allowNull(r),
                        maxPriorityFeePerGas: formatter_Formatter.allowNull(r),
                        maxFeePerGas: formatter_Formatter.allowNull(r),
                        gasLimit: r,
                        to: formatter_Formatter.allowNull(e, null),
                        value: r,
                        nonce: a,
                        data: n,
                        r: formatter_Formatter.allowNull(this.uint256),
                        s: formatter_Formatter.allowNull(this.uint256),
                        v: formatter_Formatter.allowNull(a),
                        creates: formatter_Formatter.allowNull(e, null),
                        raw: formatter_Formatter.allowNull(n)
                    }, t.transactionRequest = {
                        from: formatter_Formatter.allowNull(e),
                        nonce: formatter_Formatter.allowNull(a),
                        gasLimit: formatter_Formatter.allowNull(r),
                        gasPrice: formatter_Formatter.allowNull(r),
                        maxPriorityFeePerGas: formatter_Formatter.allowNull(r),
                        maxFeePerGas: formatter_Formatter.allowNull(r),
                        to: formatter_Formatter.allowNull(e),
                        value: formatter_Formatter.allowNull(r),
                        data: formatter_Formatter.allowNull(t => this.data(t, !0)),
                        type: formatter_Formatter.allowNull(a),
                        accessList: formatter_Formatter.allowNull(this.accessList.bind(this), null)
                    }, t.receiptLog = {
                        transactionIndex: a,
                        blockNumber: a,
                        transactionHash: s,
                        address: e,
                        topics: formatter_Formatter.arrayOf(s),
                        data: n,
                        logIndex: a,
                        blockHash: s
                    }, t.receipt = {
                        to: formatter_Formatter.allowNull(this.address, null),
                        from: formatter_Formatter.allowNull(this.address, null),
                        contractAddress: formatter_Formatter.allowNull(e, null),
                        transactionIndex: a,
                        root: formatter_Formatter.allowNull(i),
                        gasUsed: r,
                        logsBloom: formatter_Formatter.allowNull(n),
                        blockHash: s,
                        transactionHash: s,
                        logs: formatter_Formatter.arrayOf(this.receiptLog.bind(this)),
                        blockNumber: a,
                        confirmations: formatter_Formatter.allowNull(a, null),
                        cumulativeGasUsed: r,
                        effectiveGasPrice: formatter_Formatter.allowNull(r),
                        status: formatter_Formatter.allowNull(a),
                        type: c
                    }, t.block = {
                        hash: formatter_Formatter.allowNull(s),
                        parentHash: s,
                        number: a,
                        timestamp: a,
                        nonce: formatter_Formatter.allowNull(i),
                        difficulty: this.difficulty.bind(this),
                        gasLimit: r,
                        gasUsed: r,
                        miner: formatter_Formatter.allowNull(e),
                        extraData: n,
                        transactions: formatter_Formatter.allowNull(formatter_Formatter.arrayOf(s)),
                        baseFeePerGas: formatter_Formatter.allowNull(r)
                    }, t.blockWithTransactions = Object(d.g)(t.block), t.blockWithTransactions.transactions = formatter_Formatter.allowNull(formatter_Formatter.arrayOf(this.transactionResponse.bind(this))), t.filter = {
                        fromBlock: formatter_Formatter.allowNull(o, void 0),
                        toBlock: formatter_Formatter.allowNull(o, void 0),
                        blockHash: formatter_Formatter.allowNull(s, void 0),
                        address: formatter_Formatter.allowNull(e, void 0),
                        topics: formatter_Formatter.allowNull(this.topics.bind(this), void 0)
                    }, t.filterLog = {
                        blockNumber: formatter_Formatter.allowNull(a),
                        blockHash: formatter_Formatter.allowNull(s),
                        transactionIndex: a,
                        removed: formatter_Formatter.allowNull(this.boolean.bind(this)),
                        address: e,
                        data: formatter_Formatter.allowFalsish(n, "0x"),
                        topics: formatter_Formatter.arrayOf(s),
                        transactionHash: s,
                        logIndex: a
                    }, t
                }
                accessList(t) {
                    return Object(k.accessListify)(t || [])
                }
                number(t) {
                    return "0x" === t ? 0 : a.a.from(t).toNumber()
                }
                type(t) {
                    return "0x" === t || null == t ? 0 : a.a.from(t).toNumber()
                }
                bigNumber(t) {
                    return a.a.from(t)
                }
                boolean(t) {
                    if ("boolean" == typeof t) return t;
                    if ("string" == typeof t) {
                        if ("true" === (t = t.toLowerCase())) return !0;
                        if ("false" === t) return !1
                    }
                    throw new Error("invalid boolean - " + t)
                }
                hex(t, e) {
                    return "string" == typeof t && (e || "0x" === t.substring(0, 2) || (t = "0x" + t), Object(c.l)(t)) ? t.toLowerCase() : w.throwArgumentError("invalid hash", "value", t)
                }
                data(t, e) {
                    const r = this.hex(t, e);
                    if (r.length % 2 != 0) throw new Error("invalid data; odd-length - " + t);
                    return r
                }
                address(t) {
                    return Object(v.a)(t)
                }
                callAddress(t) {
                    if (!Object(c.l)(t, 32)) return null;
                    const e = Object(v.a)(Object(c.e)(t, 12));
                    return e === _.a ? null : e
                }
                contractAddress(t) {
                    return Object(v.b)(t)
                }
                blockTag(t) {
                    if (null == t) return "latest";
                    if ("earliest" === t) return "0x0";
                    switch (t) {
                        case "earliest":
                            return "0x0";
                        case "latest":
                        case "pending":
                        case "safe":
                        case "finalized":
                            return t
                    }
                    if ("number" == typeof t || Object(c.l)(t)) return Object(c.g)(t);
                    throw new Error("invalid blockTag")
                }
                hash(t, e) {
                    const r = this.hex(t, e);
                    return 32 !== Object(c.d)(r) ? w.throwArgumentError("invalid hash", "value", t) : r
                }
                difficulty(t) {
                    if (null == t) return null;
                    const e = a.a.from(t);
                    try {
                        return e.toNumber()
                    } catch (t) {}
                    return null
                }
                uint256(t) {
                    if (!Object(c.l)(t)) throw new Error("invalid uint256");
                    return Object(c.h)(t, 32)
                }
                _block(t, e) {
                    null != t.author && null == t.miner && (t.miner = t.author);
                    const r = null != t._difficulty ? t._difficulty : t.difficulty,
                        o = formatter_Formatter.check(e, t);
                    return o._difficulty = null == r ? null : a.a.from(r), o
                }
                block(t) {
                    return this._block(t, this.formats.block)
                }
                blockWithTransactions(t) {
                    return this._block(t, this.formats.blockWithTransactions)
                }
                transactionRequest(t) {
                    return formatter_Formatter.check(this.formats.transactionRequest, t)
                }
                transactionResponse(t) {
                    null != t.gas && null == t.gasLimit && (t.gasLimit = t.gas), t.to && a.a.from(t.to).isZero() && (t.to = "0x0000000000000000000000000000000000000000"), null != t.input && null == t.data && (t.data = t.input), null == t.to && null == t.creates && (t.creates = this.contractAddress(t)), 1 !== t.type && 2 !== t.type || null != t.accessList || (t.accessList = []);
                    const e = formatter_Formatter.check(this.formats.transaction, t);
                    if (null != t.chainId) {
                        let r = t.chainId;
                        Object(c.l)(r) && (r = a.a.from(r).toNumber()), e.chainId = r
                    } else {
                        let r = t.networkId;
                        null == r && null == e.v && (r = t.chainId), Object(c.l)(r) && (r = a.a.from(r).toNumber()), "number" != typeof r && null != e.v && (r = (e.v - 35) / 2, r < 0 && (r = 0), r = parseInt(r)), "number" != typeof r && (r = 0), e.chainId = r
                    }
                    return e.blockHash && "x" === e.blockHash.replace(/0/g, "") && (e.blockHash = null), e
                }
                transaction(t) {
                    return Object(k.parse)(t)
                }
                receiptLog(t) {
                    return formatter_Formatter.check(this.formats.receiptLog, t)
                }
                receipt(t) {
                    const e = formatter_Formatter.check(this.formats.receipt, t);
                    if (null != e.root)
                        if (e.root.length <= 4) {
                            const t = a.a.from(e.root).toNumber();
                            0 === t || 1 === t ? (null != e.status && e.status !== t && w.throwArgumentError("alt-root-status/status mismatch", "value", {
                                root: e.root,
                                status: e.status
                            }), e.status = t, delete e.root) : w.throwArgumentError("invalid alt-root-status", "value.root", e.root)
                        } else 66 !== e.root.length && w.throwArgumentError("invalid root hash", "value.root", e.root);
                    return null != e.status && (e.byzantium = !0), e
                }
                topics(t) {
                    return Array.isArray(t) ? t.map(t => this.topics(t)) : null != t ? this.hash(t, !0) : null
                }
                filter(t) {
                    return formatter_Formatter.check(this.formats.filter, t)
                }
                filterLog(t) {
                    return formatter_Formatter.check(this.formats.filterLog, t)
                }
                static check(t, e) {
                    const r = {};
                    for (const o in t) try {
                        const n = t[o](e[o]);
                        void 0 !== n && (r[o] = n)
                    } catch (t) {
                        throw t.checkKey = o, t.checkValue = e[o], t
                    }
                    return r
                }
                static allowNull(t, e) {
                    return function(r) {
                        return null == r ? e : t(r)
                    }
                }
                static allowFalsish(t, e) {
                    return function(r) {
                        return r ? t(r) : e
                    }
                }
                static arrayOf(t) {
                    return function(e) {
                        if (!Array.isArray(e)) throw new Error("not an array");
                        const r = [];
                        return e.forEach((function(e) {
                            r.push(t(e))
                        })), r
                    }
                }
            }

            function y(t) {
                return t && "function" == typeof t.isCommunityResource
            }

            function E(t) {
                return y(t) && t.isCommunityResource()
            }
            let N = !1;

            function O() {
                N || (N = !0, console.log("========= NOTICE ========="), console.log("Request-Rate Exceeded  (this message will not be repeated)"), console.log(""), console.log("The default API keys for each service are provided as a highly-throttled,"), console.log("community resource for low-traffic projects and early prototyping."), console.log(""), console.log("While your application will continue to function, we highly recommended"), console.log("signing up for your own API keys to improve performance, increase your"), console.log("request rate/limit and enable other perks, such as metrics and advanced APIs."), console.log(""), console.log("For more details: https://docs.ethers.io/api-keys/"), console.log("=========================="))
            }
            var P = function(t, e, r, o) {
                return new(r || (r = Promise))((function(n, s) {
                    function i(t) {
                        try {
                            c(o.next(t))
                        } catch (t) {
                            s(t)
                        }
                    }

                    function a(t) {
                        try {
                            c(o.throw(t))
                        } catch (t) {
                            s(t)
                        }
                    }

                    function c(t) {
                        var e;
                        t.done ? n(t.value) : (e = t.value, e instanceof r ? e : new r((function(t) {
                            t(e)
                        }))).then(i, a)
                    }
                    c((o = o.apply(t, e || [])).next())
                }))
            };
            const R = new g.b("providers/5.7.2");

            function j(t) {
                return null == t ? "null" : (32 !== Object(c.d)(t) && R.throwArgumentError("invalid topic", "topic", t), t.toLowerCase())
            }

            function T(t) {
                for (t = t.slice(); t.length > 0 && null == t[t.length - 1];) t.pop();
                return t.map(t => {
                    if (Array.isArray(t)) {
                        const e = {};
                        t.forEach(t => {
                            e[j(t)] = !0
                        });
                        const r = Object.keys(e);
                        return r.sort(), r.join("|")
                    }
                    return j(t)
                }).join("&")
            }

            function I(t) {
                if ("string" == typeof t) {
                    if (t = t.toLowerCase(), 32 === Object(c.d)(t)) return "tx:" + t;
                    if (-1 === t.indexOf(":")) return t
                } else {
                    if (Array.isArray(t)) return "filter:*:" + T(t);
                    if (o.a.isForkEvent(t)) throw R.warn("not implemented"), new Error("not implemented");
                    if (t && "object" == typeof t) return "filter:" + (t.address || "*") + ":" + T(t.topics || [])
                }
                throw new Error("invalid event - " + t)
            }

            function x() {
                return (new Date).getTime()
            }

            function A(t) {
                return new Promise(e => {
                    setTimeout(e, t)
                })
            }
            const B = ["block", "network", "pending", "poll"];
            class base_provider_Event {
                constructor(t, e, r) {
                    Object(d.d)(this, "tag", t), Object(d.d)(this, "listener", e), Object(d.d)(this, "once", r), this._lastBlockNumber = -2, this._inflight = !1
                }
                get event() {
                    switch (this.type) {
                        case "tx":
                            return this.hash;
                        case "filter":
                            return this.filter
                    }
                    return this.tag
                }
                get type() {
                    return this.tag.split(":")[0]
                }
                get hash() {
                    const t = this.tag.split(":");
                    return "tx" !== t[0] ? null : t[1]
                }
                get filter() {
                    const t = this.tag.split(":");
                    if ("filter" !== t[0]) return null;
                    const e = t[1],
                        r = "" === (o = t[2]) ? [] : o.split(/&/g).map(t => {
                            if ("" === t) return [];
                            const e = t.split("|").map(t => "null" === t ? null : t);
                            return 1 === e.length ? e[0] : e
                        });
                    var o;
                    const n = {};
                    return r.length > 0 && (n.topics = r), e && "*" !== e && (n.address = e), n
                }
                pollable() {
                    return this.tag.indexOf(":") >= 0 || B.indexOf(this.tag) >= 0
                }
            }
            const S = {
                0: {
                    symbol: "btc",
                    p2pkh: 0,
                    p2sh: 5,
                    prefix: "bc"
                },
                2: {
                    symbol: "ltc",
                    p2pkh: 48,
                    p2sh: 50,
                    prefix: "ltc"
                },
                3: {
                    symbol: "doge",
                    p2pkh: 30,
                    p2sh: 22
                },
                60: {
                    symbol: "eth",
                    ilk: "eth"
                },
                61: {
                    symbol: "etc",
                    ilk: "eth"
                },
                700: {
                    symbol: "xdai",
                    ilk: "eth"
                }
            };

            function C(t) {
                return Object(c.h)(a.a.from(t).toHexString(), 32)
            }

            function F(t) {
                return i.a.encode(Object(c.b)([t, Object(c.e)(Object(h.c)(Object(h.c)(t)), 0, 4)]))
            }
            const L = new RegExp("^(ipfs)://(.*)$", "i"),
                U = [new RegExp("^(https)://(.*)$", "i"), new RegExp("^(data):(.*)$", "i"), L, new RegExp("^eip155:[0-9]+/(erc[0-9]+):(.*)$", "i")];

            function D(t, e) {
                try {
                    return Object(p.h)(q(t, e))
                } catch (t) {}
                return null
            }

            function q(t, e) {
                if ("0x" === t) return null;
                const r = a.a.from(Object(c.e)(t, e, e + 32)).toNumber(),
                    o = a.a.from(Object(c.e)(t, r, r + 32)).toNumber();
                return Object(c.e)(t, r + 32, r + 32 + o)
            }

            function J(t) {
                return t.match(/^ipfs:\/\/ipfs\//i) ? t = t.substring(12) : t.match(/^ipfs:\/\//i) ? t = t.substring(7) : R.throwArgumentError("unsupported IPFS format", "link", t), "https://gateway.ipfs.io/ipfs/" + t
            }

            function W(t) {
                const e = Object(c.a)(t);
                if (e.length > 32) throw new Error("internal; should not happen");
                const r = new Uint8Array(32);
                return r.set(e, 32 - e.length), r
            }

            function K(t) {
                if (t.length % 32 == 0) return t;
                const e = new Uint8Array(32 * Math.ceil(t.length / 32));
                return e.set(t), e
            }

            function G(t) {
                const e = [];
                let r = 0;
                for (let o = 0; o < t.length; o++) e.push(null), r += 32;
                for (let o = 0; o < t.length; o++) {
                    const n = Object(c.a)(t[o]);
                    e[o] = W(r), e.push(W(n.length)), e.push(K(n)), r += 32 + 32 * Math.ceil(n.length / 32)
                }
                return Object(c.c)(e)
            }
            class base_provider_Resolver {
                constructor(t, e, r, o) {
                    Object(d.d)(this, "provider", t), Object(d.d)(this, "name", r), Object(d.d)(this, "address", t.formatter.address(e)), Object(d.d)(this, "_resolvedAddress", o)
                }
                supportsWildcard() {
                    return this._supportsEip2544 || (this._supportsEip2544 = this.provider.call({
                        to: this.address,
                        data: "0x01ffc9a79061b92300000000000000000000000000000000000000000000000000000000"
                    }).then(t => a.a.from(t).eq(1)).catch(t => {
                        if (t.code === g.b.errors.CALL_EXCEPTION) return !1;
                        throw this._supportsEip2544 = null, t
                    })), this._supportsEip2544
                }
                _fetch(t, e) {
                    return P(this, void 0, void 0, (function*() {
                        const r = {
                            to: this.address,
                            ccipReadEnabled: !0,
                            data: Object(c.c)([t, Object(u.c)(this.name), e || "0x"])
                        };
                        let o = !1;
                        (yield this.supportsWildcard()) && (o = !0, r.data = Object(c.c)(["0x9061b923", G([Object(u.a)(this.name), r.data])]));
                        try {
                            let t = yield this.provider.call(r);
                            return Object(c.a)(t).length % 32 == 4 && R.throwError("resolver threw error", g.b.errors.CALL_EXCEPTION, {
                                transaction: r,
                                data: t
                            }), o && (t = q(t, 0)), t
                        } catch (t) {
                            if (t.code === g.b.errors.CALL_EXCEPTION) return null;
                            throw t
                        }
                    }))
                }
                _fetchBytes(t, e) {
                    return P(this, void 0, void 0, (function*() {
                        const r = yield this._fetch(t, e);
                        return null != r ? q(r, 0) : null
                    }))
                }
                _getAddress(t, e) {
                    const r = S[String(t)];
                    if (null == r && R.throwError("unsupported coin type: " + t, g.b.errors.UNSUPPORTED_OPERATION, {
                            operation: `getAddress(${t})`
                        }), "eth" === r.ilk) return this.provider.formatter.address(e);
                    const o = Object(c.a)(e);
                    if (null != r.p2pkh) {
                        const t = e.match(/^0x76a9([0-9a-f][0-9a-f])([0-9a-f]*)88ac$/);
                        if (t) {
                            const e = parseInt(t[1], 16);
                            if (t[2].length === 2 * e && e >= 1 && e <= 75) return F(Object(c.b)([
                                [r.p2pkh], "0x" + t[2]
                            ]))
                        }
                    }
                    if (null != r.p2sh) {
                        const t = e.match(/^0xa9([0-9a-f][0-9a-f])([0-9a-f]*)87$/);
                        if (t) {
                            const e = parseInt(t[1], 16);
                            if (t[2].length === 2 * e && e >= 1 && e <= 75) return F(Object(c.b)([
                                [r.p2sh], "0x" + t[2]
                            ]))
                        }
                    }
                    if (null != r.prefix) {
                        const t = o[1];
                        let e = o[0];
                        if (0 === e ? 20 !== t && 32 !== t && (e = -1) : e = -1, e >= 0 && o.length === 2 + t && t >= 1 && t <= 75) {
                            const t = b.a.toWords(o.slice(2));
                            return t.unshift(e), b.a.encode(r.prefix, t)
                        }
                    }
                    return null
                }
                getAddress(t) {
                    return P(this, void 0, void 0, (function*() {
                        if (null == t && (t = 60), 60 === t) try {
                            const t = yield this._fetch("0x3b3b57de");
                            return "0x" === t || t === l.a ? null : this.provider.formatter.callAddress(t)
                        } catch (t) {
                            if (t.code === g.b.errors.CALL_EXCEPTION) return null;
                            throw t
                        }
                        const e = yield this._fetchBytes("0xf1cb7e06", C(t));
                        if (null == e || "0x" === e) return null;
                        const r = this._getAddress(t, e);
                        return null == r && R.throwError("invalid or unsupported coin data", g.b.errors.UNSUPPORTED_OPERATION, {
                            operation: `getAddress(${t})`,
                            coinType: t,
                            data: e
                        }), r
                    }))
                }
                getAvatar() {
                    return P(this, void 0, void 0, (function*() {
                        const t = [{
                            type: "name",
                            content: this.name
                        }];
                        try {
                            const e = yield this.getText("avatar");
                            if (null == e) return null;
                            for (let r = 0; r < U.length; r++) {
                                const o = e.match(U[r]);
                                if (null == o) continue;
                                const n = o[1].toLowerCase();
                                switch (n) {
                                    case "https":
                                        return t.push({
                                            type: "url",
                                            content: e
                                        }), {
                                            linkage: t,
                                            url: e
                                        };
                                    case "data":
                                        return t.push({
                                            type: "data",
                                            content: e
                                        }), {
                                            linkage: t,
                                            url: e
                                        };
                                    case "ipfs":
                                        return t.push({
                                            type: "ipfs",
                                            content: e
                                        }), {
                                            linkage: t,
                                            url: J(e)
                                        };
                                    case "erc721":
                                    case "erc1155": {
                                        const r = "erc721" === n ? "0xc87b56dd" : "0x0e89341c";
                                        t.push({
                                            type: n,
                                            content: e
                                        });
                                        const s = this._resolvedAddress || (yield this.getAddress()),
                                            i = (o[2] || "").split("/");
                                        if (2 !== i.length) return null;
                                        const l = yield this.provider.formatter.address(i[0]), u = Object(c.h)(a.a.from(i[1]).toHexString(), 32);
                                        if ("erc721" === n) {
                                            const e = this.provider.formatter.callAddress(yield this.provider.call({
                                                to: l,
                                                data: Object(c.c)(["0x6352211e", u])
                                            }));
                                            if (s !== e) return null;
                                            t.push({
                                                type: "owner",
                                                content: e
                                            })
                                        } else if ("erc1155" === n) {
                                            const e = a.a.from(yield this.provider.call({
                                                to: l,
                                                data: Object(c.c)(["0x00fdd58e", Object(c.h)(s, 32), u])
                                            }));
                                            if (e.isZero()) return null;
                                            t.push({
                                                type: "balance",
                                                content: e.toString()
                                            })
                                        }
                                        const d = {
                                            to: this.provider.formatter.address(i[0]),
                                            data: Object(c.c)([r, u])
                                        };
                                        let h = D(yield this.provider.call(d), 0);
                                        if (null == h) return null;
                                        t.push({
                                            type: "metadata-url-base",
                                            content: h
                                        }), "erc1155" === n && (h = h.replace("{id}", u.substring(2)), t.push({
                                            type: "metadata-url-expanded",
                                            content: h
                                        })), h.match(/^ipfs:/i) && (h = J(h)), t.push({
                                            type: "metadata-url",
                                            content: h
                                        });
                                        const p = yield Object(m.b)(h);
                                        if (!p) return null;
                                        t.push({
                                            type: "metadata",
                                            content: JSON.stringify(p)
                                        });
                                        let f = p.image;
                                        if ("string" != typeof f) return null;
                                        if (f.match(/^(https:\/\/|data:)/i));
                                        else {
                                            if (null == f.match(L)) return null;
                                            t.push({
                                                type: "url-ipfs",
                                                content: f
                                            }), f = J(f)
                                        }
                                        return t.push({
                                            type: "url",
                                            content: f
                                        }), {
                                            linkage: t,
                                            url: f
                                        }
                                    }
                                }
                            }
                        } catch (t) {}
                        return null
                    }))
                }
                getContentHash() {
                    return P(this, void 0, void 0, (function*() {
                        const t = yield this._fetchBytes("0xbc1c58d1");
                        if (null == t || "0x" === t) return null;
                        const e = t.match(/^0xe3010170(([0-9a-f][0-9a-f])([0-9a-f][0-9a-f])([0-9a-f]*))$/);
                        if (e) {
                            const t = parseInt(e[3], 16);
                            if (e[4].length === 2 * t) return "ipfs://" + i.a.encode("0x" + e[1])
                        }
                        const r = t.match(/^0xe5010172(([0-9a-f][0-9a-f])([0-9a-f][0-9a-f])([0-9a-f]*))$/);
                        if (r) {
                            const t = parseInt(r[3], 16);
                            if (r[4].length === 2 * t) return "ipns://" + i.a.encode("0x" + r[1])
                        }
                        const o = t.match(/^0xe40101fa011b20([0-9a-f]*)$/);
                        if (o && 64 === o[1].length) return "bzz://" + o[1];
                        const n = t.match(/^0x90b2c605([0-9a-f]*)$/);
                        if (n && 68 === n[1].length) {
                            const t = {
                                "=": "",
                                "+": "-",
                                "/": "_"
                            };
                            return "sia://" + Object(s.b)("0x" + n[1]).replace(/[=+\/]/g, e => t[e])
                        }
                        return R.throwError("invalid or unsupported content hash data", g.b.errors.UNSUPPORTED_OPERATION, {
                            operation: "getContentHash()",
                            data: t
                        })
                    }))
                }
                getText(t) {
                    return P(this, void 0, void 0, (function*() {
                        let e = Object(p.f)(t);
                        e = Object(c.b)([C(64), C(e.length), e]), e.length % 32 != 0 && (e = Object(c.b)([e, Object(c.h)("0x", 32 - t.length % 32)]));
                        const r = yield this._fetchBytes("0x59d1d43c", Object(c.i)(e));
                        return null == r || "0x" === r ? null : Object(p.h)(r)
                    }))
                }
            }
            let H = null,
                M = 1;
            class base_provider_BaseProvider extends o.b {
                constructor(t) {
                    if (super(), this._events = [], this._emitted = {
                            block: -2
                        }, this.disableCcipRead = !1, this.formatter = new.target.getFormatter(), Object(d.d)(this, "anyNetwork", "any" === t), this.anyNetwork && (t = this.detectNetwork()), t instanceof Promise) this._networkPromise = t, t.catch(t => {}), this._ready().catch(t => {});
                    else {
                        const e = Object(d.e)(new.target, "getNetwork")(t);
                        e ? (Object(d.d)(this, "_network", e), this.emit("network", e, null)) : R.throwArgumentError("invalid network", "network", t)
                    }
                    this._maxInternalBlockNumber = -1024, this._lastBlockNumber = -2, this._maxFilterBlockRange = 10, this._pollingInterval = 4e3, this._fastQueryDate = 0
                }
                _ready() {
                    return P(this, void 0, void 0, (function*() {
                        if (null == this._network) {
                            let t = null;
                            if (this._networkPromise) try {
                                t = yield this._networkPromise
                            } catch (t) {}
                            null == t && (t = yield this.detectNetwork()), t || R.throwError("no network detected", g.b.errors.UNKNOWN_ERROR, {}), null == this._network && (this.anyNetwork ? this._network = t : Object(d.d)(this, "_network", t), this.emit("network", t, null))
                        }
                        return this._network
                    }))
                }
                get ready() {
                    return Object(m.c)(() => this._ready().then(t => t, t => {
                        if (t.code !== g.b.errors.NETWORK_ERROR || "noNetwork" !== t.event) throw t
                    }))
                }
                static getFormatter() {
                    return null == H && (H = new formatter_Formatter), H
                }
                static getNetwork(t) {
                    return Object(n.a)(null == t ? "homestead" : t)
                }
                ccipReadFetch(t, e, r) {
                    return P(this, void 0, void 0, (function*() {
                        if (this.disableCcipRead || 0 === r.length) return null;
                        const o = t.to.toLowerCase(),
                            n = e.toLowerCase(),
                            s = [];
                        for (let t = 0; t < r.length; t++) {
                            const e = r[t],
                                i = e.replace("{sender}", o).replace("{data}", n),
                                a = e.indexOf("{data}") >= 0 ? null : JSON.stringify({
                                    data: n,
                                    sender: o
                                }),
                                c = yield Object(m.b)({
                                    url: i,
                                    errorPassThrough: !0
                                }, a, (t, e) => (t.status = e.statusCode, t));
                            if (c.data) return c.data;
                            const l = c.message || "unknown error";
                            if (c.status >= 400 && c.status < 500) return R.throwError("response not found during CCIP fetch: " + l, g.b.errors.SERVER_ERROR, {
                                url: e,
                                errorMessage: l
                            });
                            s.push(l)
                        }
                        return R.throwError("error encountered during CCIP fetch: " + s.map(t => JSON.stringify(t)).join(", "), g.b.errors.SERVER_ERROR, {
                            urls: r,
                            errorMessages: s
                        })
                    }))
                }
                _getInternalBlockNumber(t) {
                    return P(this, void 0, void 0, (function*() {
                        if (yield this._ready(), t > 0)
                            for (; this._internalBlockNumber;) {
                                const e = this._internalBlockNumber;
                                try {
                                    const r = yield e;
                                    if (x() - r.respTime <= t) return r.blockNumber;
                                    break
                                } catch (t) {
                                    if (this._internalBlockNumber === e) break
                                }
                            }
                        const e = x(),
                            r = Object(d.f)({
                                blockNumber: this.perform("getBlockNumber", {}),
                                networkError: this.getNetwork().then(t => null, t => t)
                            }).then(({
                                blockNumber: t,
                                networkError: o
                            }) => {
                                if (o) throw this._internalBlockNumber === r && (this._internalBlockNumber = null), o;
                                const n = x();
                                return (t = a.a.from(t).toNumber()) < this._maxInternalBlockNumber && (t = this._maxInternalBlockNumber), this._maxInternalBlockNumber = t, this._setFastBlockNumber(t), {
                                    blockNumber: t,
                                    reqTime: e,
                                    respTime: n
                                }
                            });
                        return this._internalBlockNumber = r, r.catch(t => {
                            this._internalBlockNumber === r && (this._internalBlockNumber = null)
                        }), (yield r).blockNumber
                    }))
                }
                poll() {
                    return P(this, void 0, void 0, (function*() {
                        const t = M++,
                            e = [];
                        let r = null;
                        try {
                            r = yield this._getInternalBlockNumber(100 + this.pollingInterval / 2)
                        } catch (t) {
                            return void this.emit("error", t)
                        }
                        if (this._setFastBlockNumber(r), this.emit("poll", t, r), r !== this._lastBlockNumber) {
                            if (-2 === this._emitted.block && (this._emitted.block = r - 1), Math.abs(this._emitted.block - r) > 1e3) R.warn(`network block skew detected; skipping block events (emitted=${this._emitted.block} blockNumber${r})`), this.emit("error", R.makeError("network block skew detected", g.b.errors.NETWORK_ERROR, {
                                blockNumber: r,
                                event: "blockSkew",
                                previousBlockNumber: this._emitted.block
                            })), this.emit("block", r);
                            else
                                for (let t = this._emitted.block + 1; t <= r; t++) this.emit("block", t);
                            this._emitted.block !== r && (this._emitted.block = r, Object.keys(this._emitted).forEach(t => {
                                if ("block" === t) return;
                                const e = this._emitted[t];
                                "pending" !== e && r - e > 12 && delete this._emitted[t]
                            })), -2 === this._lastBlockNumber && (this._lastBlockNumber = r - 1), this._events.forEach(t => {
                                switch (t.type) {
                                    case "tx": {
                                        const r = t.hash;
                                        let o = this.getTransactionReceipt(r).then(t => t && null != t.blockNumber ? (this._emitted["t:" + r] = t.blockNumber, this.emit(r, t), null) : null).catch(t => {
                                            this.emit("error", t)
                                        });
                                        e.push(o);
                                        break
                                    }
                                    case "filter":
                                        if (!t._inflight) {
                                            t._inflight = !0, -2 === t._lastBlockNumber && (t._lastBlockNumber = r - 1);
                                            const o = t.filter;
                                            o.fromBlock = t._lastBlockNumber + 1, o.toBlock = r;
                                            const n = o.toBlock - this._maxFilterBlockRange;
                                            n > o.fromBlock && (o.fromBlock = n), o.fromBlock < 0 && (o.fromBlock = 0);
                                            const s = this.getLogs(o).then(e => {
                                                t._inflight = !1, 0 !== e.length && e.forEach(e => {
                                                    e.blockNumber > t._lastBlockNumber && (t._lastBlockNumber = e.blockNumber), this._emitted["b:" + e.blockHash] = e.blockNumber, this._emitted["t:" + e.transactionHash] = e.blockNumber, this.emit(o, e)
                                                })
                                            }).catch(e => {
                                                this.emit("error", e), t._inflight = !1
                                            });
                                            e.push(s)
                                        }
                                }
                            }), this._lastBlockNumber = r, Promise.all(e).then(() => {
                                this.emit("didPoll", t)
                            }).catch(t => {
                                this.emit("error", t)
                            })
                        } else this.emit("didPoll", t)
                    }))
                }
                resetEventsBlock(t) {
                    this._lastBlockNumber = t - 1, this.polling && this.poll()
                }
                get network() {
                    return this._network
                }
                detectNetwork() {
                    return P(this, void 0, void 0, (function*() {
                        return R.throwError("provider does not support network detection", g.b.errors.UNSUPPORTED_OPERATION, {
                            operation: "provider.detectNetwork"
                        })
                    }))
                }
                getNetwork() {
                    return P(this, void 0, void 0, (function*() {
                        const t = yield this._ready(), e = yield this.detectNetwork();
                        if (t.chainId !== e.chainId) {
                            if (this.anyNetwork) return this._network = e, this._lastBlockNumber = -2, this._fastBlockNumber = null, this._fastBlockNumberPromise = null, this._fastQueryDate = 0, this._emitted.block = -2, this._maxInternalBlockNumber = -1024, this._internalBlockNumber = null, this.emit("network", e, t), yield A(0), this._network;
                            const r = R.makeError("underlying network changed", g.b.errors.NETWORK_ERROR, {
                                event: "changed",
                                network: t,
                                detectedNetwork: e
                            });
                            throw this.emit("error", r), r
                        }
                        return t
                    }))
                }
                get blockNumber() {
                    return this._getInternalBlockNumber(100 + this.pollingInterval / 2).then(t => {
                        this._setFastBlockNumber(t)
                    }, t => {}), null != this._fastBlockNumber ? this._fastBlockNumber : -1
                }
                get polling() {
                    return null != this._poller
                }
                set polling(t) {
                    t && !this._poller ? (this._poller = setInterval(() => {
                        this.poll()
                    }, this.pollingInterval), this._bootstrapPoll || (this._bootstrapPoll = setTimeout(() => {
                        this.poll(), this._bootstrapPoll = setTimeout(() => {
                            this._poller || this.poll(), this._bootstrapPoll = null
                        }, this.pollingInterval)
                    }, 0))) : !t && this._poller && (clearInterval(this._poller), this._poller = null)
                }
                get pollingInterval() {
                    return this._pollingInterval
                }
                set pollingInterval(t) {
                    if ("number" != typeof t || t <= 0 || parseInt(String(t)) != t) throw new Error("invalid polling interval");
                    this._pollingInterval = t, this._poller && (clearInterval(this._poller), this._poller = setInterval(() => {
                        this.poll()
                    }, this._pollingInterval))
                }
                _getFastBlockNumber() {
                    const t = x();
                    return t - this._fastQueryDate > 2 * this._pollingInterval && (this._fastQueryDate = t, this._fastBlockNumberPromise = this.getBlockNumber().then(t => ((null == this._fastBlockNumber || t > this._fastBlockNumber) && (this._fastBlockNumber = t), this._fastBlockNumber))), this._fastBlockNumberPromise
                }
                _setFastBlockNumber(t) {
                    null != this._fastBlockNumber && t < this._fastBlockNumber || (this._fastQueryDate = x(), (null == this._fastBlockNumber || t > this._fastBlockNumber) && (this._fastBlockNumber = t, this._fastBlockNumberPromise = Promise.resolve(t)))
                }
                waitForTransaction(t, e, r) {
                    return P(this, void 0, void 0, (function*() {
                        return this._waitForTransaction(t, null == e ? 1 : e, r || 0, null)
                    }))
                }
                _waitForTransaction(t, e, r, o) {
                    return P(this, void 0, void 0, (function*() {
                        const n = yield this.getTransactionReceipt(t);
                        return (n ? n.confirmations : 0) >= e ? n : new Promise((n, s) => {
                            const i = [];
                            let a = !1;
                            const c = function() {
                                    return !!a || (a = !0, i.forEach(t => {
                                        t()
                                    }), !1)
                                },
                                l = t => {
                                    t.confirmations < e || c() || n(t)
                                };
                            if (this.on(t, l), i.push(() => {
                                    this.removeListener(t, l)
                                }), o) {
                                let r = o.startBlock,
                                    n = null;
                                const l = i => P(this, void 0, void 0, (function*() {
                                    a || (yield A(1e3), this.getTransactionCount(o.from).then(u => P(this, void 0, void 0, (function*() {
                                        if (!a) {
                                            if (u <= o.nonce) r = i;
                                            else {
                                                {
                                                    const e = yield this.getTransaction(t);
                                                    if (e && null != e.blockNumber) return
                                                }
                                                for (null == n && (n = r - 3, n < o.startBlock && (n = o.startBlock)); n <= i;) {
                                                    if (a) return;
                                                    const r = yield this.getBlockWithTransactions(n);
                                                    for (let n = 0; n < r.transactions.length; n++) {
                                                        const i = r.transactions[n];
                                                        if (i.hash === t) return;
                                                        if (i.from === o.from && i.nonce === o.nonce) {
                                                            if (a) return;
                                                            const r = yield this.waitForTransaction(i.hash, e);
                                                            if (c()) return;
                                                            let n = "replaced";
                                                            return i.data === o.data && i.to === o.to && i.value.eq(o.value) ? n = "repriced" : "0x" === i.data && i.from === i.to && i.value.isZero() && (n = "cancelled"), void s(R.makeError("transaction was replaced", g.b.errors.TRANSACTION_REPLACED, {
                                                                cancelled: "replaced" === n || "cancelled" === n,
                                                                reason: n,
                                                                replacement: this._wrapTransaction(i),
                                                                hash: t,
                                                                receipt: r
                                                            }))
                                                        }
                                                    }
                                                    n++
                                                }
                                            }
                                            a || this.once("block", l)
                                        }
                                    })), t => {
                                        a || this.once("block", l)
                                    }))
                                }));
                                if (a) return;
                                this.once("block", l), i.push(() => {
                                    this.removeListener("block", l)
                                })
                            }
                            if ("number" == typeof r && r > 0) {
                                const t = setTimeout(() => {
                                    c() || s(R.makeError("timeout exceeded", g.b.errors.TIMEOUT, {
                                        timeout: r
                                    }))
                                }, r);
                                t.unref && t.unref(), i.push(() => {
                                    clearTimeout(t)
                                })
                            }
                        })
                    }))
                }
                getBlockNumber() {
                    return P(this, void 0, void 0, (function*() {
                        return this._getInternalBlockNumber(0)
                    }))
                }
                getGasPrice() {
                    return P(this, void 0, void 0, (function*() {
                        yield this.getNetwork();
                        const t = yield this.perform("getGasPrice", {});
                        try {
                            return a.a.from(t)
                        } catch (e) {
                            return R.throwError("bad result from backend", g.b.errors.SERVER_ERROR, {
                                method: "getGasPrice",
                                result: t,
                                error: e
                            })
                        }
                    }))
                }
                getBalance(t, e) {
                    return P(this, void 0, void 0, (function*() {
                        yield this.getNetwork();
                        const r = yield Object(d.f)({
                            address: this._getAddress(t),
                            blockTag: this._getBlockTag(e)
                        }), o = yield this.perform("getBalance", r);
                        try {
                            return a.a.from(o)
                        } catch (t) {
                            return R.throwError("bad result from backend", g.b.errors.SERVER_ERROR, {
                                method: "getBalance",
                                params: r,
                                result: o,
                                error: t
                            })
                        }
                    }))
                }
                getTransactionCount(t, e) {
                    return P(this, void 0, void 0, (function*() {
                        yield this.getNetwork();
                        const r = yield Object(d.f)({
                            address: this._getAddress(t),
                            blockTag: this._getBlockTag(e)
                        }), o = yield this.perform("getTransactionCount", r);
                        try {
                            return a.a.from(o).toNumber()
                        } catch (t) {
                            return R.throwError("bad result from backend", g.b.errors.SERVER_ERROR, {
                                method: "getTransactionCount",
                                params: r,
                                result: o,
                                error: t
                            })
                        }
                    }))
                }
                getCode(t, e) {
                    return P(this, void 0, void 0, (function*() {
                        yield this.getNetwork();
                        const r = yield Object(d.f)({
                            address: this._getAddress(t),
                            blockTag: this._getBlockTag(e)
                        }), o = yield this.perform("getCode", r);
                        try {
                            return Object(c.i)(o)
                        } catch (t) {
                            return R.throwError("bad result from backend", g.b.errors.SERVER_ERROR, {
                                method: "getCode",
                                params: r,
                                result: o,
                                error: t
                            })
                        }
                    }))
                }
                getStorageAt(t, e, r) {
                    return P(this, void 0, void 0, (function*() {
                        yield this.getNetwork();
                        const o = yield Object(d.f)({
                            address: this._getAddress(t),
                            blockTag: this._getBlockTag(r),
                            position: Promise.resolve(e).then(t => Object(c.g)(t))
                        }), n = yield this.perform("getStorageAt", o);
                        try {
                            return Object(c.i)(n)
                        } catch (t) {
                            return R.throwError("bad result from backend", g.b.errors.SERVER_ERROR, {
                                method: "getStorageAt",
                                params: o,
                                result: n,
                                error: t
                            })
                        }
                    }))
                }
                _wrapTransaction(t, e, r) {
                    if (null != e && 32 !== Object(c.d)(e)) throw new Error("invalid response - sendTransaction");
                    const o = t;
                    return null != e && t.hash !== e && R.throwError("Transaction hash mismatch from Provider.sendTransaction.", g.b.errors.UNKNOWN_ERROR, {
                        expectedHash: t.hash,
                        returnedHash: e
                    }), o.wait = (e, o) => P(this, void 0, void 0, (function*() {
                        null == e && (e = 1), null == o && (o = 0);
                        let n = void 0;
                        0 !== e && null != r && (n = {
                            data: t.data,
                            from: t.from,
                            nonce: t.nonce,
                            to: t.to,
                            value: t.value,
                            startBlock: r
                        });
                        const s = yield this._waitForTransaction(t.hash, e, o, n);
                        return null == s && 0 === e ? null : (this._emitted["t:" + t.hash] = s.blockNumber, 0 === s.status && R.throwError("transaction failed", g.b.errors.CALL_EXCEPTION, {
                            transactionHash: t.hash,
                            transaction: t,
                            receipt: s
                        }), s)
                    })), o
                }
                sendTransaction(t) {
                    return P(this, void 0, void 0, (function*() {
                        yield this.getNetwork();
                        const e = yield Promise.resolve(t).then(t => Object(c.i)(t)), r = this.formatter.transaction(t);
                        null == r.confirmations && (r.confirmations = 0);
                        const o = yield this._getInternalBlockNumber(100 + 2 * this.pollingInterval);
                        try {
                            const t = yield this.perform("sendTransaction", {
                                signedTransaction: e
                            });
                            return this._wrapTransaction(r, t, o)
                        } catch (t) {
                            throw t.transaction = r, t.transactionHash = r.hash, t
                        }
                    }))
                }
                _getTransactionRequest(t) {
                    return P(this, void 0, void 0, (function*() {
                        const e = yield t, r = {};
                        return ["from", "to"].forEach(t => {
                            null != e[t] && (r[t] = Promise.resolve(e[t]).then(t => t ? this._getAddress(t) : null))
                        }), ["gasLimit", "gasPrice", "maxFeePerGas", "maxPriorityFeePerGas", "value"].forEach(t => {
                            null != e[t] && (r[t] = Promise.resolve(e[t]).then(t => t ? a.a.from(t) : null))
                        }), ["type"].forEach(t => {
                            null != e[t] && (r[t] = Promise.resolve(e[t]).then(t => null != t ? t : null))
                        }), e.accessList && (r.accessList = this.formatter.accessList(e.accessList)), ["data"].forEach(t => {
                            null != e[t] && (r[t] = Promise.resolve(e[t]).then(t => t ? Object(c.i)(t) : null))
                        }), this.formatter.transactionRequest(yield Object(d.f)(r))
                    }))
                }
                _getFilter(t) {
                    return P(this, void 0, void 0, (function*() {
                        t = yield t;
                        const e = {};
                        return null != t.address && (e.address = this._getAddress(t.address)), ["blockHash", "topics"].forEach(r => {
                            null != t[r] && (e[r] = t[r])
                        }), ["fromBlock", "toBlock"].forEach(r => {
                            null != t[r] && (e[r] = this._getBlockTag(t[r]))
                        }), this.formatter.filter(yield Object(d.f)(e))
                    }))
                }
                _call(t, e, r) {
                    return P(this, void 0, void 0, (function*() {
                        r >= 10 && R.throwError("CCIP read exceeded maximum redirections", g.b.errors.SERVER_ERROR, {
                            redirects: r,
                            transaction: t
                        });
                        const o = t.to,
                            n = yield this.perform("call", {
                                transaction: t,
                                blockTag: e
                            });
                        if (r >= 0 && "latest" === e && null != o && "0x556f1830" === n.substring(0, 10) && Object(c.d)(n) % 32 == 4) try {
                            const s = Object(c.e)(n, 4),
                                i = Object(c.e)(s, 0, 32);
                            a.a.from(i).eq(o) || R.throwError("CCIP Read sender did not match", g.b.errors.CALL_EXCEPTION, {
                                name: "OffchainLookup",
                                signature: "OffchainLookup(address,string[],bytes,bytes4,bytes)",
                                transaction: t,
                                data: n
                            });
                            const l = [],
                                u = a.a.from(Object(c.e)(s, 32, 64)).toNumber(),
                                d = a.a.from(Object(c.e)(s, u, u + 32)).toNumber(),
                                h = Object(c.e)(s, u + 32);
                            for (let e = 0; e < d; e++) {
                                const r = D(h, 32 * e);
                                null == r && R.throwError("CCIP Read contained corrupt URL string", g.b.errors.CALL_EXCEPTION, {
                                    name: "OffchainLookup",
                                    signature: "OffchainLookup(address,string[],bytes,bytes4,bytes)",
                                    transaction: t,
                                    data: n
                                }), l.push(r)
                            }
                            const p = q(s, 64);
                            a.a.from(Object(c.e)(s, 100, 128)).isZero() || R.throwError("CCIP Read callback selector included junk", g.b.errors.CALL_EXCEPTION, {
                                name: "OffchainLookup",
                                signature: "OffchainLookup(address,string[],bytes,bytes4,bytes)",
                                transaction: t,
                                data: n
                            });
                            const m = Object(c.e)(s, 96, 100),
                                f = q(s, 128),
                                b = yield this.ccipReadFetch(t, p, l);
                            null == b && R.throwError("CCIP Read disabled or provided no URLs", g.b.errors.CALL_EXCEPTION, {
                                name: "OffchainLookup",
                                signature: "OffchainLookup(address,string[],bytes,bytes4,bytes)",
                                transaction: t,
                                data: n
                            });
                            const v = {
                                to: o,
                                data: Object(c.c)([m, G([b, f])])
                            };
                            return this._call(v, e, r + 1)
                        } catch (t) {
                            if (t.code === g.b.errors.SERVER_ERROR) throw t
                        }
                        try {
                            return Object(c.i)(n)
                        } catch (r) {
                            return R.throwError("bad result from backend", g.b.errors.SERVER_ERROR, {
                                method: "call",
                                params: {
                                    transaction: t,
                                    blockTag: e
                                },
                                result: n,
                                error: r
                            })
                        }
                    }))
                }
                call(t, e) {
                    return P(this, void 0, void 0, (function*() {
                        yield this.getNetwork();
                        const r = yield Object(d.f)({
                            transaction: this._getTransactionRequest(t),
                            blockTag: this._getBlockTag(e),
                            ccipReadEnabled: Promise.resolve(t.ccipReadEnabled)
                        });
                        return this._call(r.transaction, r.blockTag, r.ccipReadEnabled ? 0 : -1)
                    }))
                }
                estimateGas(t) {
                    return P(this, void 0, void 0, (function*() {
                        yield this.getNetwork();
                        const e = yield Object(d.f)({
                            transaction: this._getTransactionRequest(t)
                        }), r = yield this.perform("estimateGas", e);
                        try {
                            return a.a.from(r)
                        } catch (t) {
                            return R.throwError("bad result from backend", g.b.errors.SERVER_ERROR, {
                                method: "estimateGas",
                                params: e,
                                result: r,
                                error: t
                            })
                        }
                    }))
                }
                _getAddress(t) {
                    return P(this, void 0, void 0, (function*() {
                        "string" != typeof(t = yield t) && R.throwArgumentError("invalid address or ENS name", "name", t);
                        const e = yield this.resolveName(t);
                        return null == e && R.throwError("ENS name not configured", g.b.errors.UNSUPPORTED_OPERATION, {
                            operation: `resolveName(${JSON.stringify(t)})`
                        }), e
                    }))
                }
                _getBlock(t, e) {
                    return P(this, void 0, void 0, (function*() {
                        yield this.getNetwork(), t = yield t;
                        let r = -128;
                        const o = {
                            includeTransactions: !!e
                        };
                        if (Object(c.l)(t, 32)) o.blockHash = t;
                        else try {
                            o.blockTag = yield this._getBlockTag(t), Object(c.l)(o.blockTag) && (r = parseInt(o.blockTag.substring(2), 16))
                        } catch (e) {
                            R.throwArgumentError("invalid block hash or block tag", "blockHashOrBlockTag", t)
                        }
                        return Object(m.c)(() => P(this, void 0, void 0, (function*() {
                            const t = yield this.perform("getBlock", o);
                            if (null == t) return null != o.blockHash && null == this._emitted["b:" + o.blockHash] || null != o.blockTag && r > this._emitted.block ? null : void 0;
                            if (e) {
                                let e = null;
                                for (let r = 0; r < t.transactions.length; r++) {
                                    const o = t.transactions[r];
                                    if (null == o.blockNumber) o.confirmations = 0;
                                    else if (null == o.confirmations) {
                                        null == e && (e = yield this._getInternalBlockNumber(100 + 2 * this.pollingInterval));
                                        let t = e - o.blockNumber + 1;
                                        t <= 0 && (t = 1), o.confirmations = t
                                    }
                                }
                                const r = this.formatter.blockWithTransactions(t);
                                return r.transactions = r.transactions.map(t => this._wrapTransaction(t)), r
                            }
                            return this.formatter.block(t)
                        })), {
                            oncePoll: this
                        })
                    }))
                }
                getBlock(t) {
                    return this._getBlock(t, !1)
                }
                getBlockWithTransactions(t) {
                    return this._getBlock(t, !0)
                }
                getTransaction(t) {
                    return P(this, void 0, void 0, (function*() {
                        yield this.getNetwork(), t = yield t;
                        const e = {
                            transactionHash: this.formatter.hash(t, !0)
                        };
                        return Object(m.c)(() => P(this, void 0, void 0, (function*() {
                            const r = yield this.perform("getTransaction", e);
                            if (null == r) return null == this._emitted["t:" + t] ? null : void 0;
                            const o = this.formatter.transactionResponse(r);
                            if (null == o.blockNumber) o.confirmations = 0;
                            else if (null == o.confirmations) {
                                let t = (yield this._getInternalBlockNumber(100 + 2 * this.pollingInterval)) - o.blockNumber + 1;
                                t <= 0 && (t = 1), o.confirmations = t
                            }
                            return this._wrapTransaction(o)
                        })), {
                            oncePoll: this
                        })
                    }))
                }
                getTransactionReceipt(t) {
                    return P(this, void 0, void 0, (function*() {
                        yield this.getNetwork(), t = yield t;
                        const e = {
                            transactionHash: this.formatter.hash(t, !0)
                        };
                        return Object(m.c)(() => P(this, void 0, void 0, (function*() {
                            const r = yield this.perform("getTransactionReceipt", e);
                            if (null == r) return null == this._emitted["t:" + t] ? null : void 0;
                            if (null == r.blockHash) return;
                            const o = this.formatter.receipt(r);
                            if (null == o.blockNumber) o.confirmations = 0;
                            else if (null == o.confirmations) {
                                let t = (yield this._getInternalBlockNumber(100 + 2 * this.pollingInterval)) - o.blockNumber + 1;
                                t <= 0 && (t = 1), o.confirmations = t
                            }
                            return o
                        })), {
                            oncePoll: this
                        })
                    }))
                }
                getLogs(t) {
                    return P(this, void 0, void 0, (function*() {
                        yield this.getNetwork();
                        const e = yield Object(d.f)({
                            filter: this._getFilter(t)
                        }), r = yield this.perform("getLogs", e);
                        return r.forEach(t => {
                            null == t.removed && (t.removed = !1)
                        }), formatter_Formatter.arrayOf(this.formatter.filterLog.bind(this.formatter))(r)
                    }))
                }
                getEtherPrice() {
                    return P(this, void 0, void 0, (function*() {
                        return yield this.getNetwork(), this.perform("getEtherPrice", {})
                    }))
                }
                _getBlockTag(t) {
                    return P(this, void 0, void 0, (function*() {
                        if ("number" == typeof(t = yield t) && t < 0) {
                            t % 1 && R.throwArgumentError("invalid BlockTag", "blockTag", t);
                            let e = yield this._getInternalBlockNumber(100 + 2 * this.pollingInterval);
                            return e += t, e < 0 && (e = 0), this.formatter.blockTag(e)
                        }
                        return this.formatter.blockTag(t)
                    }))
                }
                getResolver(t) {
                    return P(this, void 0, void 0, (function*() {
                        let e = t;
                        for (;;) {
                            if ("" === e || "." === e) return null;
                            if ("eth" !== t && "eth" === e) return null;
                            const r = yield this._getResolver(e, "getResolver");
                            if (null != r) {
                                const o = new base_provider_Resolver(this, r, t);
                                return e === t || (yield o.supportsWildcard()) ? o : null
                            }
                            e = e.split(".").slice(1).join(".")
                        }
                    }))
                }
                _getResolver(t, e) {
                    return P(this, void 0, void 0, (function*() {
                        null == e && (e = "ENS");
                        const r = yield this.getNetwork();
                        r.ensAddress || R.throwError("network does not support ENS", g.b.errors.UNSUPPORTED_OPERATION, {
                            operation: e,
                            network: r.name
                        });
                        try {
                            const e = yield this.call({
                                to: r.ensAddress,
                                data: "0x0178b8bf" + Object(u.c)(t).substring(2)
                            });
                            return this.formatter.callAddress(e)
                        } catch (t) {}
                        return null
                    }))
                }
                resolveName(t) {
                    return P(this, void 0, void 0, (function*() {
                        t = yield t;
                        try {
                            return Promise.resolve(this.formatter.address(t))
                        } catch (e) {
                            if (Object(c.l)(t)) throw e
                        }
                        "string" != typeof t && R.throwArgumentError("invalid ENS name", "name", t);
                        const e = yield this.getResolver(t);
                        return e ? yield e.getAddress(): null
                    }))
                }
                lookupAddress(t) {
                    return P(this, void 0, void 0, (function*() {
                        t = yield t;
                        const e = (t = this.formatter.address(t)).substring(2).toLowerCase() + ".addr.reverse",
                            r = yield this._getResolver(e, "lookupAddress");
                        if (null == r) return null;
                        const o = D(yield this.call({
                            to: r,
                            data: "0x691f3431" + Object(u.c)(e).substring(2)
                        }), 0);
                        return (yield this.resolveName(o)) != t ? null : o
                    }))
                }
                getAvatar(t) {
                    return P(this, void 0, void 0, (function*() {
                        let e = null;
                        if (Object(c.l)(t)) {
                            const r = this.formatter.address(t).substring(2).toLowerCase() + ".addr.reverse",
                                o = yield this._getResolver(r, "getAvatar");
                            if (!o) return null;
                            e = new base_provider_Resolver(this, o, r);
                            try {
                                const t = yield e.getAvatar();
                                if (t) return t.url
                            } catch (t) {
                                if (t.code !== g.b.errors.CALL_EXCEPTION) throw t
                            }
                            try {
                                const t = D(yield this.call({
                                    to: o,
                                    data: "0x691f3431" + Object(u.c)(r).substring(2)
                                }), 0);
                                e = yield this.getResolver(t)
                            } catch (t) {
                                if (t.code !== g.b.errors.CALL_EXCEPTION) throw t;
                                return null
                            }
                        } else if (e = yield this.getResolver(t), !e) return null;
                        const r = yield e.getAvatar();
                        return null == r ? null : r.url
                    }))
                }
                perform(t, e) {
                    return R.throwError(t + " not implemented", g.b.errors.NOT_IMPLEMENTED, {
                        operation: t
                    })
                }
                _startEvent(t) {
                    this.polling = this._events.filter(t => t.pollable()).length > 0
                }
                _stopEvent(t) {
                    this.polling = this._events.filter(t => t.pollable()).length > 0
                }
                _addEventListener(t, e, r) {
                    const o = new base_provider_Event(I(t), e, r);
                    return this._events.push(o), this._startEvent(o), this
                }
                on(t, e) {
                    return this._addEventListener(t, e, !1)
                }
                once(t, e) {
                    return this._addEventListener(t, e, !0)
                }
                emit(t, ...e) {
                    let r = !1,
                        o = [],
                        n = I(t);
                    return this._events = this._events.filter(t => t.tag !== n || (setTimeout(() => {
                        t.listener.apply(this, e)
                    }, 0), r = !0, !t.once || (o.push(t), !1))), o.forEach(t => {
                        this._stopEvent(t)
                    }), r
                }
                listenerCount(t) {
                    if (!t) return this._events.length;
                    let e = I(t);
                    return this._events.filter(t => t.tag === e).length
                }
                listeners(t) {
                    if (null == t) return this._events.map(t => t.listener);
                    let e = I(t);
                    return this._events.filter(t => t.tag === e).map(t => t.listener)
                }
                off(t, e) {
                    if (null == e) return this.removeAllListeners(t);
                    const r = [];
                    let o = !1,
                        n = I(t);
                    return this._events = this._events.filter(t => t.tag !== n || t.listener != e || (!!o || (o = !0, r.push(t), !1))), r.forEach(t => {
                        this._stopEvent(t)
                    }), this
                }
                removeAllListeners(t) {
                    let e = [];
                    if (null == t) e = this._events, this._events = [];
                    else {
                        const r = I(t);
                        this._events = this._events.filter(t => t.tag !== r || (e.push(t), !1))
                    }
                    return e.forEach(t => {
                        this._stopEvent(t)
                    }), this
                }
            }
            var $ = r(5822),
                V = r(11829),
                X = function(t, e, r, o) {
                    return new(r || (r = Promise))((function(n, s) {
                        function i(t) {
                            try {
                                c(o.next(t))
                            } catch (t) {
                                s(t)
                            }
                        }

                        function a(t) {
                            try {
                                c(o.throw(t))
                            } catch (t) {
                                s(t)
                            }
                        }

                        function c(t) {
                            var e;
                            t.done ? n(t.value) : (e = t.value, e instanceof r ? e : new r((function(t) {
                                t(e)
                            }))).then(i, a)
                        }
                        c((o = o.apply(t, e || [])).next())
                    }))
                };
            const z = new g.b("providers/5.7.2"),
                Q = ["call", "estimateGas"];

            function Z(t, e) {
                if (null == t) return null;
                if ("string" == typeof t.message && t.message.match("reverted")) {
                    const r = Object(c.l)(t.data) ? t.data : null;
                    if (!e || r) return {
                        message: t.message,
                        data: r
                    }
                }
                if ("object" == typeof t) {
                    for (const r in t) {
                        const o = Z(t[r], e);
                        if (o) return o
                    }
                    return null
                }
                if ("string" == typeof t) try {
                    return Z(JSON.parse(t), e)
                } catch (t) {}
                return null
            }

            function Y(t, e, r) {
                const o = r.transaction || r.signedTransaction;
                if ("call" === t) {
                    const t = Z(e, !0);
                    if (t) return t.data;
                    z.throwError("missing revert data in call exception; Transaction reverted without a reason string", g.b.errors.CALL_EXCEPTION, {
                        data: "0x",
                        transaction: o,
                        error: e
                    })
                }
                if ("estimateGas" === t) {
                    let r = Z(e.body, !1);
                    null == r && (r = Z(e, !1)), r && z.throwError("cannot estimate gas; transaction may fail or may require manual gas limit", g.b.errors.UNPREDICTABLE_GAS_LIMIT, {
                        reason: r.message,
                        method: t,
                        transaction: o,
                        error: e
                    })
                }
                let n = e.message;
                throw e.code === g.b.errors.SERVER_ERROR && e.error && "string" == typeof e.error.message ? n = e.error.message : "string" == typeof e.body ? n = e.body : "string" == typeof e.responseText && (n = e.responseText), n = (n || "").toLowerCase(), n.match(/insufficient funds|base fee exceeds gas limit|InsufficientFunds/i) && z.throwError("insufficient funds for intrinsic transaction cost", g.b.errors.INSUFFICIENT_FUNDS, {
                    error: e,
                    method: t,
                    transaction: o
                }), n.match(/nonce (is )?too low/i) && z.throwError("nonce has already been used", g.b.errors.NONCE_EXPIRED, {
                    error: e,
                    method: t,
                    transaction: o
                }), n.match(/replacement transaction underpriced|transaction gas price.*too low/i) && z.throwError("replacement fee too low", g.b.errors.REPLACEMENT_UNDERPRICED, {
                    error: e,
                    method: t,
                    transaction: o
                }), n.match(/only replay-protected/i) && z.throwError("legacy pre-eip-155 transactions not supported", g.b.errors.UNSUPPORTED_OPERATION, {
                    error: e,
                    method: t,
                    transaction: o
                }), Q.indexOf(t) >= 0 && n.match(/gas required exceeds allowance|always failing transaction|execution reverted|revert/) && z.throwError("cannot estimate gas; transaction may fail or may require manual gas limit", g.b.errors.UNPREDICTABLE_GAS_LIMIT, {
                    error: e,
                    method: t,
                    transaction: o
                }), e
            }

            function tt(t) {
                return new Promise((function(e) {
                    setTimeout(e, t)
                }))
            }

            function et(t) {
                if (t.error) {
                    const e = new Error(t.error.message);
                    throw e.code = t.error.code, e.data = t.error.data, e
                }
                return t.result
            }

            function rt(t) {
                return t ? t.toLowerCase() : t
            }
            const ot = {};
            class json_rpc_provider_JsonRpcSigner extends $.a {
                constructor(t, e, r) {
                    if (super(), t !== ot) throw new Error("do not call the JsonRpcSigner constructor directly; use provider.getSigner");
                    Object(d.d)(this, "provider", e), null == r && (r = 0), "string" == typeof r ? (Object(d.d)(this, "_address", this.provider.formatter.address(r)), Object(d.d)(this, "_index", null)) : "number" == typeof r ? (Object(d.d)(this, "_index", r), Object(d.d)(this, "_address", null)) : z.throwArgumentError("invalid address or index", "addressOrIndex", r)
                }
                connect(t) {
                    return z.throwError("cannot alter JSON-RPC Signer connection", g.b.errors.UNSUPPORTED_OPERATION, {
                        operation: "connect"
                    })
                }
                connectUnchecked() {
                    return new UncheckedJsonRpcSigner(ot, this.provider, this._address || this._index)
                }
                getAddress() {
                    return this._address ? Promise.resolve(this._address) : this.provider.send("eth_accounts", []).then(t => (t.length <= this._index && z.throwError("unknown account #" + this._index, g.b.errors.UNSUPPORTED_OPERATION, {
                        operation: "getAddress"
                    }), this.provider.formatter.address(t[this._index])))
                }
                sendUncheckedTransaction(t) {
                    t = Object(d.g)(t);
                    const e = this.getAddress().then(t => (t && (t = t.toLowerCase()), t));
                    if (null == t.gasLimit) {
                        const r = Object(d.g)(t);
                        r.from = e, t.gasLimit = this.provider.estimateGas(r)
                    }
                    return null != t.to && (t.to = Promise.resolve(t.to).then(t => X(this, void 0, void 0, (function*() {
                        if (null == t) return null;
                        const e = yield this.provider.resolveName(t);
                        return null == e && z.throwArgumentError("provided ENS name resolves to null", "tx.to", t), e
                    })))), Object(d.f)({
                        tx: Object(d.f)(t),
                        sender: e
                    }).then(({
                        tx: e,
                        sender: r
                    }) => {
                        null != e.from ? e.from.toLowerCase() !== r && z.throwArgumentError("from address mismatch", "transaction", t) : e.from = r;
                        const o = this.provider.constructor.hexlifyTransaction(e, {
                            from: !0
                        });
                        return this.provider.send("eth_sendTransaction", [o]).then(t => t, t => ("string" == typeof t.message && t.message.match(/user denied/i) && z.throwError("user rejected transaction", g.b.errors.ACTION_REJECTED, {
                            action: "sendTransaction",
                            transaction: e
                        }), Y("sendTransaction", t, o)))
                    })
                }
                signTransaction(t) {
                    return z.throwError("signing transactions is unsupported", g.b.errors.UNSUPPORTED_OPERATION, {
                        operation: "signTransaction"
                    })
                }
                sendTransaction(t) {
                    return X(this, void 0, void 0, (function*() {
                        const e = yield this.provider._getInternalBlockNumber(100 + 2 * this.provider.pollingInterval), r = yield this.sendUncheckedTransaction(t);
                        try {
                            return yield Object(m.c)(() => X(this, void 0, void 0, (function*() {
                                const t = yield this.provider.getTransaction(r);
                                if (null !== t) return this.provider._wrapTransaction(t, r, e)
                            })), {
                                oncePoll: this.provider
                            })
                        } catch (t) {
                            throw t.transactionHash = r, t
                        }
                    }))
                }
                signMessage(t) {
                    return X(this, void 0, void 0, (function*() {
                        const e = "string" == typeof t ? Object(p.f)(t) : t,
                            r = yield this.getAddress();
                        try {
                            return yield this.provider.send("personal_sign", [Object(c.i)(e), r.toLowerCase()])
                        } catch (e) {
                            throw "string" == typeof e.message && e.message.match(/user denied/i) && z.throwError("user rejected signing", g.b.errors.ACTION_REJECTED, {
                                action: "signMessage",
                                from: r,
                                messageData: t
                            }), e
                        }
                    }))
                }
                _legacySignMessage(t) {
                    return X(this, void 0, void 0, (function*() {
                        const e = "string" == typeof t ? Object(p.f)(t) : t,
                            r = yield this.getAddress();
                        try {
                            return yield this.provider.send("eth_sign", [r.toLowerCase(), Object(c.i)(e)])
                        } catch (e) {
                            throw "string" == typeof e.message && e.message.match(/user denied/i) && z.throwError("user rejected signing", g.b.errors.ACTION_REJECTED, {
                                action: "_legacySignMessage",
                                from: r,
                                messageData: t
                            }), e
                        }
                    }))
                }
                _signTypedData(t, e, r) {
                    return X(this, void 0, void 0, (function*() {
                        const o = yield V.a.resolveNames(t, e, r, t => this.provider.resolveName(t)), n = yield this.getAddress();
                        try {
                            return yield this.provider.send("eth_signTypedData_v4", [n.toLowerCase(), JSON.stringify(V.a.getPayload(o.domain, e, o.value))])
                        } catch (t) {
                            throw "string" == typeof t.message && t.message.match(/user denied/i) && z.throwError("user rejected signing", g.b.errors.ACTION_REJECTED, {
                                action: "_signTypedData",
                                from: n,
                                messageData: {
                                    domain: o.domain,
                                    types: e,
                                    value: o.value
                                }
                            }), t
                        }
                    }))
                }
                unlock(t) {
                    return X(this, void 0, void 0, (function*() {
                        const e = this.provider,
                            r = yield this.getAddress();
                        return e.send("personal_unlockAccount", [r.toLowerCase(), t, null])
                    }))
                }
            }
            class UncheckedJsonRpcSigner extends json_rpc_provider_JsonRpcSigner {
                sendTransaction(t) {
                    return this.sendUncheckedTransaction(t).then(t => ({
                        hash: t,
                        nonce: null,
                        gasLimit: null,
                        gasPrice: null,
                        data: null,
                        value: null,
                        chainId: null,
                        confirmations: 0,
                        from: null,
                        wait: e => this.provider.waitForTransaction(t, e)
                    }))
                }
            }
            const nt = {
                chainId: !0,
                data: !0,
                gasLimit: !0,
                gasPrice: !0,
                nonce: !0,
                to: !0,
                value: !0,
                type: !0,
                accessList: !0,
                maxFeePerGas: !0,
                maxPriorityFeePerGas: !0
            };
            class json_rpc_provider_JsonRpcProvider extends base_provider_BaseProvider {
                constructor(t, e) {
                    let r = e;
                    null == r && (r = new Promise((t, e) => {
                        setTimeout(() => {
                            this.detectNetwork().then(e => {
                                t(e)
                            }, t => {
                                e(t)
                            })
                        }, 0)
                    })), super(r), t || (t = Object(d.e)(this.constructor, "defaultUrl")()), "string" == typeof t ? Object(d.d)(this, "connection", Object.freeze({
                        url: t
                    })) : Object(d.d)(this, "connection", Object.freeze(Object(d.g)(t))), this._nextId = 42
                }
                get _cache() {
                    return null == this._eventLoopCache && (this._eventLoopCache = {}), this._eventLoopCache
                }
                static defaultUrl() {
                    return "http://localhost:8545"
                }
                detectNetwork() {
                    return this._cache.detectNetwork || (this._cache.detectNetwork = this._uncachedDetectNetwork(), setTimeout(() => {
                        this._cache.detectNetwork = null
                    }, 0)), this._cache.detectNetwork
                }
                _uncachedDetectNetwork() {
                    return X(this, void 0, void 0, (function*() {
                        yield tt(0);
                        let t = null;
                        try {
                            t = yield this.send("eth_chainId", [])
                        } catch (e) {
                            try {
                                t = yield this.send("net_version", [])
                            } catch (t) {}
                        }
                        if (null != t) {
                            const e = Object(d.e)(this.constructor, "getNetwork");
                            try {
                                return e(a.a.from(t).toNumber())
                            } catch (e) {
                                return z.throwError("could not detect network", g.b.errors.NETWORK_ERROR, {
                                    chainId: t,
                                    event: "invalidNetwork",
                                    serverError: e
                                })
                            }
                        }
                        return z.throwError("could not detect network", g.b.errors.NETWORK_ERROR, {
                            event: "noNetwork"
                        })
                    }))
                }
                getSigner(t) {
                    return new json_rpc_provider_JsonRpcSigner(ot, this, t)
                }
                getUncheckedSigner(t) {
                    return this.getSigner(t).connectUnchecked()
                }
                listAccounts() {
                    return this.send("eth_accounts", []).then(t => t.map(t => this.formatter.address(t)))
                }
                send(t, e) {
                    const r = {
                        method: t,
                        params: e,
                        id: this._nextId++,
                        jsonrpc: "2.0"
                    };
                    this.emit("debug", {
                        action: "request",
                        request: Object(d.c)(r),
                        provider: this
                    });
                    const o = ["eth_chainId", "eth_blockNumber"].indexOf(t) >= 0;
                    if (o && this._cache[t]) return this._cache[t];
                    const n = Object(m.b)(this.connection, JSON.stringify(r), et).then(t => (this.emit("debug", {
                        action: "response",
                        request: r,
                        response: t,
                        provider: this
                    }), t), t => {
                        throw this.emit("debug", {
                            action: "response",
                            error: t,
                            request: r,
                            provider: this
                        }), t
                    });
                    return o && (this._cache[t] = n, setTimeout(() => {
                        this._cache[t] = null
                    }, 0)), n
                }
                prepareRequest(t, e) {
                    switch (t) {
                        case "getBlockNumber":
                            return ["eth_blockNumber", []];
                        case "getGasPrice":
                            return ["eth_gasPrice", []];
                        case "getBalance":
                            return ["eth_getBalance", [rt(e.address), e.blockTag]];
                        case "getTransactionCount":
                            return ["eth_getTransactionCount", [rt(e.address), e.blockTag]];
                        case "getCode":
                            return ["eth_getCode", [rt(e.address), e.blockTag]];
                        case "getStorageAt":
                            return ["eth_getStorageAt", [rt(e.address), Object(c.h)(e.position, 32), e.blockTag]];
                        case "sendTransaction":
                            return ["eth_sendRawTransaction", [e.signedTransaction]];
                        case "getBlock":
                            return e.blockTag ? ["eth_getBlockByNumber", [e.blockTag, !!e.includeTransactions]] : e.blockHash ? ["eth_getBlockByHash", [e.blockHash, !!e.includeTransactions]] : null;
                        case "getTransaction":
                            return ["eth_getTransactionByHash", [e.transactionHash]];
                        case "getTransactionReceipt":
                            return ["eth_getTransactionReceipt", [e.transactionHash]];
                        case "call":
                            return ["eth_call", [Object(d.e)(this.constructor, "hexlifyTransaction")(e.transaction, {
                                from: !0
                            }), e.blockTag]];
                        case "estimateGas":
                            return ["eth_estimateGas", [Object(d.e)(this.constructor, "hexlifyTransaction")(e.transaction, {
                                from: !0
                            })]];
                        case "getLogs":
                            return e.filter && null != e.filter.address && (e.filter.address = rt(e.filter.address)), ["eth_getLogs", [e.filter]]
                    }
                    return null
                }
                perform(t, e) {
                    return X(this, void 0, void 0, (function*() {
                        if ("call" === t || "estimateGas" === t) {
                            const t = e.transaction;
                            if (t && null != t.type && a.a.from(t.type).isZero() && null == t.maxFeePerGas && null == t.maxPriorityFeePerGas) {
                                const r = yield this.getFeeData();
                                null == r.maxFeePerGas && null == r.maxPriorityFeePerGas && ((e = Object(d.g)(e)).transaction = Object(d.g)(t), delete e.transaction.type)
                            }
                        }
                        const r = this.prepareRequest(t, e);
                        null == r && z.throwError(t + " not implemented", g.b.errors.NOT_IMPLEMENTED, {
                            operation: t
                        });
                        try {
                            return yield this.send(r[0], r[1])
                        } catch (r) {
                            return Y(t, r, e)
                        }
                    }))
                }
                _startEvent(t) {
                    "pending" === t.tag && this._startPending(), super._startEvent(t)
                }
                _startPending() {
                    if (null != this._pendingFilter) return;
                    const t = this,
                        e = this.send("eth_newPendingTransactionFilter", []);
                    this._pendingFilter = e, e.then((function(r) {
                        return function o() {
                            t.send("eth_getFilterChanges", [r]).then((function(r) {
                                if (t._pendingFilter != e) return null;
                                let o = Promise.resolve();
                                return r.forEach((function(e) {
                                    t._emitted["t:" + e.toLowerCase()] = "pending", o = o.then((function() {
                                        return t.getTransaction(e).then((function(e) {
                                            return t.emit("pending", e), null
                                        }))
                                    }))
                                })), o.then((function() {
                                    return tt(1e3)
                                }))
                            })).then((function() {
                                if (t._pendingFilter == e) return setTimeout((function() {
                                    o()
                                }), 0), null;
                                t.send("eth_uninstallFilter", [r])
                            })).catch(t => {})
                        }(), r
                    })).catch(t => {})
                }
                _stopEvent(t) {
                    "pending" === t.tag && 0 === this.listenerCount("pending") && (this._pendingFilter = null), super._stopEvent(t)
                }
                static hexlifyTransaction(t, e) {
                    const r = Object(d.g)(nt);
                    if (e)
                        for (const t in e) e[t] && (r[t] = !0);
                    Object(d.b)(t, r);
                    const o = {};
                    return ["chainId", "gasLimit", "gasPrice", "type", "maxFeePerGas", "maxPriorityFeePerGas", "nonce", "value"].forEach((function(e) {
                        if (null == t[e]) return;
                        const r = Object(c.g)(a.a.from(t[e]));
                        "gasLimit" === e && (e = "gas"), o[e] = r
                    })), ["from", "to", "data"].forEach((function(e) {
                        null != t[e] && (o[e] = Object(c.i)(t[e]))
                    })), t.accessList && (o.accessList = Object(k.accessListify)(t.accessList)), o
                }
            }
            let st = null;
            try {
                if (st = WebSocket, null == st) throw new Error("inject please")
            } catch (t) {
                const e = new g.b("providers/5.7.2");
                st = function() {
                    e.throwError("WebSockets not supported in this environment", g.b.errors.UNSUPPORTED_OPERATION, {
                        operation: "new WebSocket()"
                    })
                }
            }
            var it = function(t, e, r, o) {
                return new(r || (r = Promise))((function(n, s) {
                    function i(t) {
                        try {
                            c(o.next(t))
                        } catch (t) {
                            s(t)
                        }
                    }

                    function a(t) {
                        try {
                            c(o.throw(t))
                        } catch (t) {
                            s(t)
                        }
                    }

                    function c(t) {
                        var e;
                        t.done ? n(t.value) : (e = t.value, e instanceof r ? e : new r((function(t) {
                            t(e)
                        }))).then(i, a)
                    }
                    c((o = o.apply(t, e || [])).next())
                }))
            };
            const at = new g.b("providers/5.7.2");
            let ct = 1;
            class websocket_provider_WebSocketProvider extends json_rpc_provider_JsonRpcProvider {
                constructor(t, e) {
                    "any" === e && at.throwError("WebSocketProvider does not support 'any' network yet", g.b.errors.UNSUPPORTED_OPERATION, {
                        operation: "network:any"
                    }), super("string" == typeof t ? t : "_websocket", e), this._pollingInterval = -1, this._wsReady = !1, "string" == typeof t ? Object(d.d)(this, "_websocket", new st(this.connection.url)) : Object(d.d)(this, "_websocket", t), Object(d.d)(this, "_requests", {}), Object(d.d)(this, "_subs", {}), Object(d.d)(this, "_subIds", {}), Object(d.d)(this, "_detectNetwork", super.detectNetwork()), this.websocket.onopen = () => {
                        this._wsReady = !0, Object.keys(this._requests).forEach(t => {
                            this.websocket.send(this._requests[t].payload)
                        })
                    }, this.websocket.onmessage = t => {
                        const e = t.data,
                            r = JSON.parse(e);
                        if (null != r.id) {
                            const t = String(r.id),
                                o = this._requests[t];
                            if (delete this._requests[t], void 0 !== r.result) o.callback(null, r.result), this.emit("debug", {
                                action: "response",
                                request: JSON.parse(o.payload),
                                response: r.result,
                                provider: this
                            });
                            else {
                                let t = null;
                                r.error ? (t = new Error(r.error.message || "unknown error"), Object(d.d)(t, "code", r.error.code || null), Object(d.d)(t, "response", e)) : t = new Error("unknown error"), o.callback(t, void 0), this.emit("debug", {
                                    action: "response",
                                    error: t,
                                    request: JSON.parse(o.payload),
                                    provider: this
                                })
                            }
                        } else if ("eth_subscription" === r.method) {
                            const t = this._subs[r.params.subscription];
                            t && t.processFunc(r.params.result)
                        } else console.warn("this should not happen")
                    };
                    const r = setInterval(() => {
                        this.emit("poll")
                    }, 1e3);
                    r.unref && r.unref()
                }
                get websocket() {
                    return this._websocket
                }
                detectNetwork() {
                    return this._detectNetwork
                }
                get pollingInterval() {
                    return 0
                }
                resetEventsBlock(t) {
                    at.throwError("cannot reset events block on WebSocketProvider", g.b.errors.UNSUPPORTED_OPERATION, {
                        operation: "resetEventBlock"
                    })
                }
                set pollingInterval(t) {
                    at.throwError("cannot set polling interval on WebSocketProvider", g.b.errors.UNSUPPORTED_OPERATION, {
                        operation: "setPollingInterval"
                    })
                }
                poll() {
                    return it(this, void 0, void 0, (function*() {
                        return null
                    }))
                }
                set polling(t) {
                    t && at.throwError("cannot set polling on WebSocketProvider", g.b.errors.UNSUPPORTED_OPERATION, {
                        operation: "setPolling"
                    })
                }
                send(t, e) {
                    const r = ct++;
                    return new Promise((o, n) => {
                        const s = JSON.stringify({
                            method: t,
                            params: e,
                            id: r,
                            jsonrpc: "2.0"
                        });
                        this.emit("debug", {
                            action: "request",
                            request: JSON.parse(s),
                            provider: this
                        }), this._requests[String(r)] = {
                            callback: function(t, e) {
                                return t ? n(t) : o(e)
                            },
                            payload: s
                        }, this._wsReady && this.websocket.send(s)
                    })
                }
                static defaultUrl() {
                    return "ws://localhost:8546"
                }
                _subscribe(t, e, r) {
                    return it(this, void 0, void 0, (function*() {
                        let o = this._subIds[t];
                        null == o && (o = Promise.all(e).then(t => this.send("eth_subscribe", t)), this._subIds[t] = o);
                        const n = yield o;
                        this._subs[n] = {
                            tag: t,
                            processFunc: r
                        }
                    }))
                }
                _startEvent(t) {
                    switch (t.type) {
                        case "block":
                            this._subscribe("block", ["newHeads"], t => {
                                const e = a.a.from(t.number).toNumber();
                                this._emitted.block = e, this.emit("block", e)
                            });
                            break;
                        case "pending":
                            this._subscribe("pending", ["newPendingTransactions"], t => {
                                this.emit("pending", t)
                            });
                            break;
                        case "filter":
                            this._subscribe(t.tag, ["logs", this._getFilter(t.filter)], e => {
                                null == e.removed && (e.removed = !1), this.emit(t.filter, this.formatter.filterLog(e))
                            });
                            break;
                        case "tx": {
                            const e = t => {
                                const e = t.hash;
                                this.getTransactionReceipt(e).then(t => {
                                    t && this.emit(e, t)
                                })
                            };
                            e(t), this._subscribe("tx", ["newHeads"], t => {
                                this._events.filter(t => "tx" === t.type).forEach(e)
                            });
                            break
                        }
                        case "debug":
                        case "poll":
                        case "willPoll":
                        case "didPoll":
                        case "error":
                            break;
                        default:
                            console.log("unhandled:", t)
                    }
                }
                _stopEvent(t) {
                    let e = t.tag;
                    if ("tx" === t.type) {
                        if (this._events.filter(t => "tx" === t.type).length) return;
                        e = "tx"
                    } else if (this.listenerCount(t.event)) return;
                    const r = this._subIds[e];
                    r && (delete this._subIds[e], r.then(t => {
                        this._subs[t] && (delete this._subs[t], this.send("eth_unsubscribe", [t]))
                    }))
                }
                destroy() {
                    return it(this, void 0, void 0, (function*() {
                        this.websocket.readyState === st.CONNECTING && (yield new Promise(t => {
                            this.websocket.onopen = function() {
                                t(!0)
                            }, this.websocket.onerror = function() {
                                t(!1)
                            }
                        })), this.websocket.close(1e3)
                    }))
                }
            }
            var lt = function(t, e, r, o) {
                return new(r || (r = Promise))((function(n, s) {
                    function i(t) {
                        try {
                            c(o.next(t))
                        } catch (t) {
                            s(t)
                        }
                    }

                    function a(t) {
                        try {
                            c(o.throw(t))
                        } catch (t) {
                            s(t)
                        }
                    }

                    function c(t) {
                        var e;
                        t.done ? n(t.value) : (e = t.value, e instanceof r ? e : new r((function(t) {
                            t(e)
                        }))).then(i, a)
                    }
                    c((o = o.apply(t, e || [])).next())
                }))
            };
            const ut = new g.b("providers/5.7.2");
            class url_json_rpc_provider_StaticJsonRpcProvider extends json_rpc_provider_JsonRpcProvider {
                detectNetwork() {
                    const t = Object.create(null, {
                        detectNetwork: {
                            get: () => super.detectNetwork
                        }
                    });
                    return lt(this, void 0, void 0, (function*() {
                        let e = this.network;
                        return null == e && (e = yield t.detectNetwork.call(this), e || ut.throwError("no network detected", g.b.errors.UNKNOWN_ERROR, {}), null == this._network && (Object(d.d)(this, "_network", e), this.emit("network", e, null))), e
                    }))
                }
            }
            class url_json_rpc_provider_UrlJsonRpcProvider extends url_json_rpc_provider_StaticJsonRpcProvider {
                constructor(t, e) {
                    ut.checkAbstract(new.target, url_json_rpc_provider_UrlJsonRpcProvider), t = Object(d.e)(new.target, "getNetwork")(t), e = Object(d.e)(new.target, "getApiKey")(e);
                    super(Object(d.e)(new.target, "getUrl")(t, e), t), "string" == typeof e ? Object(d.d)(this, "apiKey", e) : null != e && Object.keys(e).forEach(t => {
                        Object(d.d)(this, t, e[t])
                    })
                }
                _startPending() {
                    ut.warn("WARNING: API provider does not support pending filters")
                }
                isCommunityResource() {
                    return !1
                }
                getSigner(t) {
                    return ut.throwError("API provider does not support signing", g.b.errors.UNSUPPORTED_OPERATION, {
                        operation: "getSigner"
                    })
                }
                listAccounts() {
                    return Promise.resolve([])
                }
                static getApiKey(t) {
                    return t
                }
                static getUrl(t, e) {
                    return ut.throwError("not implemented; sub-classes must override getUrl", g.b.errors.NOT_IMPLEMENTED, {
                        operation: "getUrl"
                    })
                }
            }
            const dt = new g.b("providers/5.7.2"),
                ht = "_gg7wSSi0KMBsdKnGVfHDueq6xMB9EkC";
            class alchemy_provider_AlchemyWebSocketProvider extends websocket_provider_WebSocketProvider {
                constructor(t, e) {
                    const r = new alchemy_provider_AlchemyProvider(t, e);
                    super(r.connection.url.replace(/^http/i, "ws").replace(".alchemyapi.", ".ws.alchemyapi."), r.network), Object(d.d)(this, "apiKey", r.apiKey)
                }
                isCommunityResource() {
                    return this.apiKey === ht
                }
            }
            class alchemy_provider_AlchemyProvider extends url_json_rpc_provider_UrlJsonRpcProvider {
                static getWebSocketProvider(t, e) {
                    return new alchemy_provider_AlchemyWebSocketProvider(t, e)
                }
                static getApiKey(t) {
                    return null == t ? ht : (t && "string" != typeof t && dt.throwArgumentError("invalid apiKey", "apiKey", t), t)
                }
                static getUrl(t, e) {
                    let r = null;
                    switch (t.name) {
                        case "homestead":
                            r = "eth-mainnet.alchemyapi.io/v2/";
                            break;
                        case "goerli":
                            r = "eth-goerli.g.alchemy.com/v2/";
                            break;
                        case "matic":
                            r = "polygon-mainnet.g.alchemy.com/v2/";
                            break;
                        case "maticmum":
                            r = "polygon-mumbai.g.alchemy.com/v2/";
                            break;
                        case "arbitrum":
                            r = "arb-mainnet.g.alchemy.com/v2/";
                            break;
                        case "arbitrum-goerli":
                            r = "arb-goerli.g.alchemy.com/v2/";
                            break;
                        case "optimism":
                            r = "opt-mainnet.g.alchemy.com/v2/";
                            break;
                        case "optimism-goerli":
                            r = "opt-goerli.g.alchemy.com/v2/";
                            break;
                        default:
                            dt.throwArgumentError("unsupported network", "network", arguments[0])
                    }
                    return {
                        allowGzip: !0,
                        url: "https://" + r + e,
                        throttleCallback: (t, r) => (e === ht && O(), Promise.resolve(!0))
                    }
                }
                isCommunityResource() {
                    return this.apiKey === ht
                }
            }
            const pt = new g.b("providers/5.7.2"),
                mt = "9f7d929b018cdffb338517efa06f58359e86ff1ffd350bc889738523659e7972";

            function ft(t) {
                switch (t) {
                    case "homestead":
                        return "rpc.ankr.com/eth/";
                    case "ropsten":
                        return "rpc.ankr.com/eth_ropsten/";
                    case "rinkeby":
                        return "rpc.ankr.com/eth_rinkeby/";
                    case "goerli":
                        return "rpc.ankr.com/eth_goerli/";
                    case "matic":
                        return "rpc.ankr.com/polygon/";
                    case "arbitrum":
                        return "rpc.ankr.com/arbitrum/"
                }
                return pt.throwArgumentError("unsupported network", "name", t)
            }
            class ankr_provider_AnkrProvider extends url_json_rpc_provider_UrlJsonRpcProvider {
                isCommunityResource() {
                    return this.apiKey === mt
                }
                static getApiKey(t) {
                    return null == t ? mt : t
                }
                static getUrl(t, e) {
                    null == e && (e = mt);
                    const r = {
                        allowGzip: !0,
                        url: "https://" + ft(t.name) + e,
                        throttleCallback: (t, r) => (e.apiKey === mt && O(), Promise.resolve(!0))
                    };
                    return null != e.projectSecret && (r.user = "", r.password = e.projectSecret), r
                }
            }
            var bt = function(t, e, r, o) {
                return new(r || (r = Promise))((function(n, s) {
                    function i(t) {
                        try {
                            c(o.next(t))
                        } catch (t) {
                            s(t)
                        }
                    }

                    function a(t) {
                        try {
                            c(o.throw(t))
                        } catch (t) {
                            s(t)
                        }
                    }

                    function c(t) {
                        var e;
                        t.done ? n(t.value) : (e = t.value, e instanceof r ? e : new r((function(t) {
                            t(e)
                        }))).then(i, a)
                    }
                    c((o = o.apply(t, e || [])).next())
                }))
            };
            const gt = new g.b("providers/5.7.2");
            class cloudflare_provider_CloudflareProvider extends url_json_rpc_provider_UrlJsonRpcProvider {
                static getApiKey(t) {
                    return null != t && gt.throwArgumentError("apiKey not supported for cloudflare", "apiKey", t), null
                }
                static getUrl(t, e) {
                    let r = null;
                    switch (t.name) {
                        case "homestead":
                            r = "https://cloudflare-eth.com/";
                            break;
                        default:
                            gt.throwArgumentError("unsupported network", "network", arguments[0])
                    }
                    return r
                }
                perform(t, e) {
                    const r = Object.create(null, {
                        perform: {
                            get: () => super.perform
                        }
                    });
                    return bt(this, void 0, void 0, (function*() {
                        if ("getBlockNumber" === t) {
                            return (yield r.perform.call(this, "getBlock", {
                                blockTag: "latest"
                            })).number
                        }
                        return r.perform.call(this, t, e)
                    }))
                }
            }
            var vt = function(t, e, r, o) {
                return new(r || (r = Promise))((function(n, s) {
                    function i(t) {
                        try {
                            c(o.next(t))
                        } catch (t) {
                            s(t)
                        }
                    }

                    function a(t) {
                        try {
                            c(o.throw(t))
                        } catch (t) {
                            s(t)
                        }
                    }

                    function c(t) {
                        var e;
                        t.done ? n(t.value) : (e = t.value, e instanceof r ? e : new r((function(t) {
                            t(e)
                        }))).then(i, a)
                    }
                    c((o = o.apply(t, e || [])).next())
                }))
            };
            const _t = new g.b("providers/5.7.2");

            function kt(t) {
                const e = {};
                for (let r in t) {
                    if (null == t[r]) continue;
                    let o = t[r];
                    "type" === r && 0 === o || (o = {
                        type: !0,
                        gasLimit: !0,
                        gasPrice: !0,
                        maxFeePerGs: !0,
                        maxPriorityFeePerGas: !0,
                        nonce: !0,
                        value: !0
                    } [r] ? Object(c.g)(Object(c.i)(o)) : "accessList" === r ? "[" + Object(k.accessListify)(o).map(t => `{address:"${t.address}",storageKeys:["${t.storageKeys.join('","')}"]}`).join(",") + "]" : Object(c.i)(o), e[r] = o)
                }
                return e
            }

            function wt(t) {
                if (0 == t.status && ("No records found" === t.message || "No transactions found" === t.message)) return t.result;
                if (1 != t.status || "string" != typeof t.message || !t.message.match(/^OK/)) {
                    const e = new Error("invalid response");
                    throw e.result = JSON.stringify(t), (t.result || "").toLowerCase().indexOf("rate limit") >= 0 && (e.throttleRetry = !0), e
                }
                return t.result
            }

            function yt(t) {
                if (t && 0 == t.status && "NOTOK" == t.message && (t.result || "").toLowerCase().indexOf("rate limit") >= 0) {
                    const e = new Error("throttled response");
                    throw e.result = JSON.stringify(t), e.throttleRetry = !0, e
                }
                if ("2.0" != t.jsonrpc) {
                    const e = new Error("invalid response");
                    throw e.result = JSON.stringify(t), e
                }
                if (t.error) {
                    const e = new Error(t.error.message || "unknown error");
                    throw t.error.code && (e.code = t.error.code), t.error.data && (e.data = t.error.data), e
                }
                return t.result
            }

            function Et(t) {
                if ("pending" === t) throw new Error("pending not supported");
                return "latest" === t ? t : parseInt(t.substring(2), 16)
            }

            function Nt(t, e, r) {
                if ("call" === t && e.code === g.b.errors.SERVER_ERROR) {
                    const t = e.error;
                    if (t && (t.message.match(/reverted/i) || t.message.match(/VM execution error/i))) {
                        let r = t.data;
                        if (r && (r = "0x" + r.replace(/^.*0x/i, "")), Object(c.l)(r)) return r;
                        _t.throwError("missing revert data in call exception", g.b.errors.CALL_EXCEPTION, {
                            error: e,
                            data: "0x"
                        })
                    }
                }
                let o = e.message;
                throw e.code === g.b.errors.SERVER_ERROR && (e.error && "string" == typeof e.error.message ? o = e.error.message : "string" == typeof e.body ? o = e.body : "string" == typeof e.responseText && (o = e.responseText)), o = (o || "").toLowerCase(), o.match(/insufficient funds/) && _t.throwError("insufficient funds for intrinsic transaction cost", g.b.errors.INSUFFICIENT_FUNDS, {
                    error: e,
                    method: t,
                    transaction: r
                }), o.match(/same hash was already imported|transaction nonce is too low|nonce too low/) && _t.throwError("nonce has already been used", g.b.errors.NONCE_EXPIRED, {
                    error: e,
                    method: t,
                    transaction: r
                }), o.match(/another transaction with same nonce/) && _t.throwError("replacement fee too low", g.b.errors.REPLACEMENT_UNDERPRICED, {
                    error: e,
                    method: t,
                    transaction: r
                }), o.match(/execution failed due to an exception|execution reverted/) && _t.throwError("cannot estimate gas; transaction may fail or may require manual gas limit", g.b.errors.UNPREDICTABLE_GAS_LIMIT, {
                    error: e,
                    method: t,
                    transaction: r
                }), e
            }
            class etherscan_provider_EtherscanProvider extends base_provider_BaseProvider {
                constructor(t, e) {
                    super(t), Object(d.d)(this, "baseUrl", this.getBaseUrl()), Object(d.d)(this, "apiKey", e || null)
                }
                getBaseUrl() {
                    switch (this.network ? this.network.name : "invalid") {
                        case "homestead":
                            return "https://api.etherscan.io";
                        case "goerli":
                            return "https://api-goerli.etherscan.io";
                        case "sepolia":
                            return "https://api-sepolia.etherscan.io";
                        case "matic":
                            return "https://api.polygonscan.com";
                        case "maticmum":
                            return "https://api-testnet.polygonscan.com";
                        case "arbitrum":
                            return "https://api.arbiscan.io";
                        case "arbitrum-goerli":
                            return "https://api-goerli.arbiscan.io";
                        case "optimism":
                            return "https://api-optimistic.etherscan.io";
                        case "optimism-goerli":
                            return "https://api-goerli-optimistic.etherscan.io"
                    }
                    return _t.throwArgumentError("unsupported network", "network", this.network.name)
                }
                getUrl(t, e) {
                    const r = Object.keys(e).reduce((t, r) => {
                            const o = e[r];
                            return null != o && (t += `&${r}=${o}`), t
                        }, ""),
                        o = this.apiKey ? "&apikey=" + this.apiKey : "";
                    return `${this.baseUrl}/api?module=${t}${r}${o}`
                }
                getPostUrl() {
                    return this.baseUrl + "/api"
                }
                getPostData(t, e) {
                    return e.module = t, e.apikey = this.apiKey, e
                }
                fetch(t, e, r) {
                    return vt(this, void 0, void 0, (function*() {
                        const o = r ? this.getPostUrl() : this.getUrl(t, e),
                            n = r ? this.getPostData(t, e) : null,
                            s = "proxy" === t ? yt : wt;
                        this.emit("debug", {
                            action: "request",
                            request: o,
                            provider: this
                        });
                        const i = {
                            url: o,
                            throttleSlotInterval: 1e3,
                            throttleCallback: (t, e) => (this.isCommunityResource() && O(), Promise.resolve(!0))
                        };
                        let a = null;
                        n && (i.headers = {
                            "content-type": "application/x-www-form-urlencoded; charset=UTF-8"
                        }, a = Object.keys(n).map(t => `${t}=${n[t]}`).join("&"));
                        const c = yield Object(m.b)(i, a, s || yt);
                        return this.emit("debug", {
                            action: "response",
                            request: o,
                            response: Object(d.c)(c),
                            provider: this
                        }), c
                    }))
                }
                detectNetwork() {
                    return vt(this, void 0, void 0, (function*() {
                        return this.network
                    }))
                }
                perform(t, e) {
                    const r = Object.create(null, {
                        perform: {
                            get: () => super.perform
                        }
                    });
                    return vt(this, void 0, void 0, (function*() {
                        switch (t) {
                            case "getBlockNumber":
                                return this.fetch("proxy", {
                                    action: "eth_blockNumber"
                                });
                            case "getGasPrice":
                                return this.fetch("proxy", {
                                    action: "eth_gasPrice"
                                });
                            case "getBalance":
                                return this.fetch("account", {
                                    action: "balance",
                                    address: e.address,
                                    tag: e.blockTag
                                });
                            case "getTransactionCount":
                                return this.fetch("proxy", {
                                    action: "eth_getTransactionCount",
                                    address: e.address,
                                    tag: e.blockTag
                                });
                            case "getCode":
                                return this.fetch("proxy", {
                                    action: "eth_getCode",
                                    address: e.address,
                                    tag: e.blockTag
                                });
                            case "getStorageAt":
                                return this.fetch("proxy", {
                                    action: "eth_getStorageAt",
                                    address: e.address,
                                    position: e.position,
                                    tag: e.blockTag
                                });
                            case "sendTransaction":
                                return this.fetch("proxy", {
                                    action: "eth_sendRawTransaction",
                                    hex: e.signedTransaction
                                }, !0).catch(t => Nt("sendTransaction", t, e.signedTransaction));
                            case "getBlock":
                                if (e.blockTag) return this.fetch("proxy", {
                                    action: "eth_getBlockByNumber",
                                    tag: e.blockTag,
                                    boolean: e.includeTransactions ? "true" : "false"
                                });
                                throw new Error("getBlock by blockHash not implemented");
                            case "getTransaction":
                                return this.fetch("proxy", {
                                    action: "eth_getTransactionByHash",
                                    txhash: e.transactionHash
                                });
                            case "getTransactionReceipt":
                                return this.fetch("proxy", {
                                    action: "eth_getTransactionReceipt",
                                    txhash: e.transactionHash
                                });
                            case "call": {
                                if ("latest" !== e.blockTag) throw new Error("EtherscanProvider does not support blockTag for call");
                                const t = kt(e.transaction);
                                t.module = "proxy", t.action = "eth_call";
                                try {
                                    return yield this.fetch("proxy", t, !0)
                                } catch (t) {
                                    return Nt("call", t, e.transaction)
                                }
                            }
                            case "estimateGas": {
                                const t = kt(e.transaction);
                                t.module = "proxy", t.action = "eth_estimateGas";
                                try {
                                    return yield this.fetch("proxy", t, !0)
                                } catch (t) {
                                    return Nt("estimateGas", t, e.transaction)
                                }
                            }
                            case "getLogs": {
                                const t = {
                                    action: "getLogs"
                                };
                                if (e.filter.fromBlock && (t.fromBlock = Et(e.filter.fromBlock)), e.filter.toBlock && (t.toBlock = Et(e.filter.toBlock)), e.filter.address && (t.address = e.filter.address), e.filter.topics && e.filter.topics.length > 0 && (e.filter.topics.length > 1 && _t.throwError("unsupported topic count", g.b.errors.UNSUPPORTED_OPERATION, {
                                        topics: e.filter.topics
                                    }), 1 === e.filter.topics.length)) {
                                    const r = e.filter.topics[0];
                                    "string" == typeof r && 66 === r.length || _t.throwError("unsupported topic format", g.b.errors.UNSUPPORTED_OPERATION, {
                                        topic0: r
                                    }), t.topic0 = r
                                }
                                const r = yield this.fetch("logs", t);
                                let o = {};
                                for (let t = 0; t < r.length; t++) {
                                    const e = r[t];
                                    if (null == e.blockHash) {
                                        if (null == o[e.blockNumber]) {
                                            const t = yield this.getBlock(e.blockNumber);
                                            t && (o[e.blockNumber] = t.hash)
                                        }
                                        e.blockHash = o[e.blockNumber]
                                    }
                                }
                                return r
                            }
                            case "getEtherPrice":
                                return "homestead" !== this.network.name ? 0 : parseFloat((yield this.fetch("stats", {
                                    action: "ethprice"
                                })).ethusd)
                        }
                        return r.perform.call(this, t, e)
                    }))
                }
                getHistory(t, e, r) {
                    return vt(this, void 0, void 0, (function*() {
                        const o = {
                            action: "txlist",
                            address: yield this.resolveName(t),
                            startblock: null == e ? 0 : e,
                            endblock: null == r ? 99999999 : r,
                            sort: "asc"
                        };
                        return (yield this.fetch("account", o)).map(t => {
                            ["contractAddress", "to"].forEach((function(e) {
                                "" == t[e] && delete t[e]
                            })), null == t.creates && null != t.contractAddress && (t.creates = t.contractAddress);
                            const e = this.formatter.transactionResponse(t);
                            return t.timeStamp && (e.timestamp = parseInt(t.timeStamp)), e
                        })
                    }))
                }
                isCommunityResource() {
                    return null == this.apiKey
                }
            }
            var Ot = r(11830),
                Pt = function(t, e, r, o) {
                    return new(r || (r = Promise))((function(n, s) {
                        function i(t) {
                            try {
                                c(o.next(t))
                            } catch (t) {
                                s(t)
                            }
                        }

                        function a(t) {
                            try {
                                c(o.throw(t))
                            } catch (t) {
                                s(t)
                            }
                        }

                        function c(t) {
                            var e;
                            t.done ? n(t.value) : (e = t.value, e instanceof r ? e : new r((function(t) {
                                t(e)
                            }))).then(i, a)
                        }
                        c((o = o.apply(t, e || [])).next())
                    }))
                };
            const Rt = new g.b("providers/5.7.2");

            function jt() {
                return (new Date).getTime()
            }

            function Tt(t) {
                let e = null;
                for (let r = 0; r < t.length; r++) {
                    const o = t[r];
                    if (null == o) return null;
                    e ? e.name === o.name && e.chainId === o.chainId && (e.ensAddress === o.ensAddress || null == e.ensAddress && null == o.ensAddress) || Rt.throwArgumentError("provider mismatch", "networks", t) : e = o
                }
                return e
            }

            function It(t, e) {
                t = t.slice().sort();
                const r = Math.floor(t.length / 2);
                if (t.length % 2) return t[r];
                const o = t[r - 1],
                    n = t[r];
                return null != e && Math.abs(o - n) > e ? null : (o + n) / 2
            }

            function xt(t) {
                if (null === t) return "null";
                if ("number" == typeof t || "boolean" == typeof t) return JSON.stringify(t);
                if ("string" == typeof t) return t;
                if (a.a.isBigNumber(t)) return t.toString();
                if (Array.isArray(t)) return JSON.stringify(t.map(t => xt(t)));
                if ("object" == typeof t) {
                    const e = Object.keys(t);
                    return e.sort(), "{" + e.map(e => {
                        let r = t[e];
                        return r = "function" == typeof r ? "[function]" : xt(r), JSON.stringify(e) + ":" + r
                    }).join(",") + "}"
                }
                throw new Error("unknown value type: " + typeof t)
            }
            let At = 1;

            function Bt(t) {
                let e = null,
                    r = null,
                    o = new Promise(o => {
                        e = function() {
                            r && (clearTimeout(r), r = null), o()
                        }, r = setTimeout(e, t)
                    });
                return {
                    cancel: e,
                    getPromise: function() {
                        return o
                    },
                    wait: t => (o = o.then(t), o)
                }
            }
            const St = [g.b.errors.CALL_EXCEPTION, g.b.errors.INSUFFICIENT_FUNDS, g.b.errors.NONCE_EXPIRED, g.b.errors.REPLACEMENT_UNDERPRICED, g.b.errors.UNPREDICTABLE_GAS_LIMIT],
                Ct = ["address", "args", "errorArgs", "errorSignature", "method", "transaction"];

            function Ft(t, e) {
                const r = {
                    weight: t.weight
                };
                return Object.defineProperty(r, "provider", {
                    get: () => t.provider
                }), t.start && (r.start = t.start), e && (r.duration = e - t.start), t.done && (t.error ? r.error = t.error : r.result = t.result || null), r
            }

            function Lt(t, e, r) {
                let o = xt;
                switch (e) {
                    case "getBlockNumber":
                        return function(e) {
                            const r = e.map(t => t.result);
                            let o = It(e.map(t => t.result), 2);
                            if (null != o) return o = Math.ceil(o), r.indexOf(o + 1) >= 0 && o++, o >= t._highestBlockNumber && (t._highestBlockNumber = o), t._highestBlockNumber
                        };
                    case "getGasPrice":
                        return function(t) {
                            const e = t.map(t => t.result);
                            return e.sort(), e[Math.floor(e.length / 2)]
                        };
                    case "getEtherPrice":
                        return function(t) {
                            return It(t.map(t => t.result))
                        };
                    case "getBalance":
                    case "getTransactionCount":
                    case "getCode":
                    case "getStorageAt":
                    case "call":
                    case "estimateGas":
                    case "getLogs":
                        break;
                    case "getTransaction":
                    case "getTransactionReceipt":
                        o = function(t) {
                            return null == t ? null : ((t = Object(d.g)(t)).confirmations = -1, xt(t))
                        };
                        break;
                    case "getBlock":
                        o = r.includeTransactions ? function(t) {
                            return null == t ? null : ((t = Object(d.g)(t)).transactions = t.transactions.map(t => ((t = Object(d.g)(t)).confirmations = -1, t)), xt(t))
                        } : function(t) {
                            return null == t ? null : xt(t)
                        };
                        break;
                    default:
                        throw new Error("unknown method: " + e)
                }
                return function(t, e) {
                    return function(r) {
                        const o = {};
                        r.forEach(e => {
                            const r = t(e.result);
                            o[r] || (o[r] = {
                                count: 0,
                                result: e.result
                            }), o[r].count++
                        });
                        const n = Object.keys(o);
                        for (let t = 0; t < n.length; t++) {
                            const r = o[n[t]];
                            if (r.count >= e) return r.result
                        }
                    }
                }(o, t.quorum)
            }

            function Ut(t, e) {
                return Pt(this, void 0, void 0, (function*() {
                    const r = t.provider;
                    return null != r.blockNumber && r.blockNumber >= e || -1 === e ? r : Object(m.c)(() => new Promise((o, n) => {
                        setTimeout((function() {
                            return r.blockNumber >= e ? o(r) : t.cancelled ? o(null) : o(void 0)
                        }), 0)
                    }), {
                        oncePoll: r
                    })
                }))
            }

            function Dt(t, e, r, o) {
                return Pt(this, void 0, void 0, (function*() {
                    let n = t.provider;
                    switch (r) {
                        case "getBlockNumber":
                        case "getGasPrice":
                            return n[r]();
                        case "getEtherPrice":
                            if (n.getEtherPrice) return n.getEtherPrice();
                            break;
                        case "getBalance":
                        case "getTransactionCount":
                        case "getCode":
                            return o.blockTag && Object(c.l)(o.blockTag) && (n = yield Ut(t, e)), n[r](o.address, o.blockTag || "latest");
                        case "getStorageAt":
                            return o.blockTag && Object(c.l)(o.blockTag) && (n = yield Ut(t, e)), n.getStorageAt(o.address, o.position, o.blockTag || "latest");
                        case "getBlock":
                            return o.blockTag && Object(c.l)(o.blockTag) && (n = yield Ut(t, e)), n[o.includeTransactions ? "getBlockWithTransactions" : "getBlock"](o.blockTag || o.blockHash);
                        case "call":
                        case "estimateGas":
                            return o.blockTag && Object(c.l)(o.blockTag) && (n = yield Ut(t, e)), "call" === r && o.blockTag ? n[r](o.transaction, o.blockTag) : n[r](o.transaction);
                        case "getTransaction":
                        case "getTransactionReceipt":
                            return n[r](o.transactionHash);
                        case "getLogs": {
                            let r = o.filter;
                            return (r.fromBlock && Object(c.l)(r.fromBlock) || r.toBlock && Object(c.l)(r.toBlock)) && (n = yield Ut(t, e)), n.getLogs(r)
                        }
                    }
                    return Rt.throwError("unknown method error", g.b.errors.UNKNOWN_ERROR, {
                        method: r,
                        params: o
                    })
                }))
            }
            class fallback_provider_FallbackProvider extends base_provider_BaseProvider {
                constructor(t, e) {
                    0 === t.length && Rt.throwArgumentError("missing providers", "providers", t);
                    const r = t.map((t, e) => {
                            if (o.b.isProvider(t)) {
                                const e = E(t) ? 2e3 : 750,
                                    r = 1;
                                return Object.freeze({
                                    provider: t,
                                    weight: 1,
                                    stallTimeout: e,
                                    priority: r
                                })
                            }
                            const r = Object(d.g)(t);
                            null == r.priority && (r.priority = 1), null == r.stallTimeout && (r.stallTimeout = E(t) ? 2e3 : 750), null == r.weight && (r.weight = 1);
                            const n = r.weight;
                            return (n % 1 || n > 512 || n < 1) && Rt.throwArgumentError("invalid weight; must be integer in [1, 512]", `providers[${e}].weight`, n), Object.freeze(r)
                        }),
                        n = r.reduce((t, e) => t + e.weight, 0);
                    null == e ? e = n / 2 : e > n && Rt.throwArgumentError("quorum will always fail; larger than total weight", "quorum", e);
                    let s = Tt(r.map(t => t.provider.network));
                    null == s && (s = new Promise((t, e) => {
                        setTimeout(() => {
                            this.detectNetwork().then(t, e)
                        }, 0)
                    })), super(s), Object(d.d)(this, "providerConfigs", Object.freeze(r)), Object(d.d)(this, "quorum", e), this._highestBlockNumber = -1
                }
                detectNetwork() {
                    return Pt(this, void 0, void 0, (function*() {
                        return Tt(yield Promise.all(this.providerConfigs.map(t => t.provider.getNetwork())))
                    }))
                }
                perform(t, e) {
                    return Pt(this, void 0, void 0, (function*() {
                        if ("sendTransaction" === t) {
                            const t = yield Promise.all(this.providerConfigs.map(t => t.provider.sendTransaction(e.signedTransaction).then(t => t.hash, t => t)));
                            for (let e = 0; e < t.length; e++) {
                                const r = t[e];
                                if ("string" == typeof r) return r
                            }
                            throw t[0]
                        } - 1 === this._highestBlockNumber && "getBlockNumber" !== t && (yield this.getBlockNumber());
                        const r = Lt(this, t, e),
                            o = Object(Ot.a)(this.providerConfigs.map(d.g));
                        o.sort((t, e) => t.priority - e.priority);
                        const n = this._highestBlockNumber;
                        let s = 0,
                            i = !0;
                        for (;;) {
                            const a = jt();
                            let c = o.filter(t => t.runner && a - t.start < t.stallTimeout).reduce((t, e) => t + e.weight, 0);
                            for (; c < this.quorum && s < o.length;) {
                                const r = o[s++],
                                    i = At++;
                                r.start = jt(), r.staller = Bt(r.stallTimeout), r.staller.wait(() => {
                                    r.staller = null
                                }), r.runner = Dt(r, n, t, e).then(o => {
                                    r.done = !0, r.result = o, this.listenerCount("debug") && this.emit("debug", {
                                        action: "request",
                                        rid: i,
                                        backend: Ft(r, jt()),
                                        request: {
                                            method: t,
                                            params: Object(d.c)(e)
                                        },
                                        provider: this
                                    })
                                }, o => {
                                    r.done = !0, r.error = o, this.listenerCount("debug") && this.emit("debug", {
                                        action: "request",
                                        rid: i,
                                        backend: Ft(r, jt()),
                                        request: {
                                            method: t,
                                            params: Object(d.c)(e)
                                        },
                                        provider: this
                                    })
                                }), this.listenerCount("debug") && this.emit("debug", {
                                    action: "request",
                                    rid: i,
                                    backend: Ft(r, null),
                                    request: {
                                        method: t,
                                        params: Object(d.c)(e)
                                    },
                                    provider: this
                                }), c += r.weight
                            }
                            const l = [];
                            o.forEach(t => {
                                !t.done && t.runner && (l.push(t.runner), t.staller && l.push(t.staller.getPromise()))
                            }), l.length && (yield Promise.race(l));
                            const u = o.filter(t => t.done && null == t.error);
                            if (u.length >= this.quorum) {
                                const t = r(u);
                                if (void 0 !== t) return o.forEach(t => {
                                    t.staller && t.staller.cancel(), t.cancelled = !0
                                }), t;
                                i || (yield Bt(100).getPromise()), i = !1
                            }
                            const h = o.reduce((t, e) => {
                                if (!e.done || null == e.error) return t;
                                const r = e.error.code;
                                return St.indexOf(r) >= 0 && (t[r] || (t[r] = {
                                    error: e.error,
                                    weight: 0
                                }), t[r].weight += e.weight), t
                            }, {});
                            if (Object.keys(h).forEach(t => {
                                    const e = h[t];
                                    if (e.weight < this.quorum) return;
                                    o.forEach(t => {
                                        t.staller && t.staller.cancel(), t.cancelled = !0
                                    });
                                    const r = e.error,
                                        n = {};
                                    Ct.forEach(t => {
                                        null != r[t] && (n[t] = r[t])
                                    }), Rt.throwError(r.reason || r.message, t, n)
                                }), 0 === o.filter(t => !t.done).length) break
                        }
                        return o.forEach(t => {
                            t.staller && t.staller.cancel(), t.cancelled = !0
                        }), Rt.throwError("failed to meet quorum", g.b.errors.SERVER_ERROR, {
                            method: t,
                            params: e,
                            results: o.map(t => Ft(t)),
                            provider: this
                        })
                    }))
                }
            }
            const qt = null,
                Jt = new g.b("providers/5.7.2"),
                Wt = "84842078b09946638c03157f83405213";
            class infura_provider_InfuraWebSocketProvider extends websocket_provider_WebSocketProvider {
                constructor(t, e) {
                    const r = new infura_provider_InfuraProvider(t, e),
                        o = r.connection;
                    o.password && Jt.throwError("INFURA WebSocket project secrets unsupported", g.b.errors.UNSUPPORTED_OPERATION, {
                        operation: "InfuraProvider.getWebSocketProvider()"
                    });
                    super(o.url.replace(/^http/i, "ws").replace("/v3/", "/ws/v3/"), t), Object(d.d)(this, "apiKey", r.projectId), Object(d.d)(this, "projectId", r.projectId), Object(d.d)(this, "projectSecret", r.projectSecret)
                }
                isCommunityResource() {
                    return this.projectId === Wt
                }
            }
            class infura_provider_InfuraProvider extends url_json_rpc_provider_UrlJsonRpcProvider {
                static getWebSocketProvider(t, e) {
                    return new infura_provider_InfuraWebSocketProvider(t, e)
                }
                static getApiKey(t) {
                    const e = {
                        apiKey: Wt,
                        projectId: Wt,
                        projectSecret: null
                    };
                    return null == t || ("string" == typeof t ? e.projectId = t : null != t.projectSecret ? (Jt.assertArgument("string" == typeof t.projectId, "projectSecret requires a projectId", "projectId", t.projectId), Jt.assertArgument("string" == typeof t.projectSecret, "invalid projectSecret", "projectSecret", "[REDACTED]"), e.projectId = t.projectId, e.projectSecret = t.projectSecret) : t.projectId && (e.projectId = t.projectId), e.apiKey = e.projectId), e
                }
                static getUrl(t, e) {
                    let r = null;
                    switch (t ? t.name : "unknown") {
                        case "homestead":
                            r = "mainnet.infura.io";
                            break;
                        case "goerli":
                            r = "goerli.infura.io";
                            break;
                        case "sepolia":
                            r = "sepolia.infura.io";
                            break;
                        case "matic":
                            r = "polygon-mainnet.infura.io";
                            break;
                        case "maticmum":
                            r = "polygon-mumbai.infura.io";
                            break;
                        case "optimism":
                            r = "optimism-mainnet.infura.io";
                            break;
                        case "optimism-goerli":
                            r = "optimism-goerli.infura.io";
                            break;
                        case "arbitrum":
                            r = "arbitrum-mainnet.infura.io";
                            break;
                        case "arbitrum-goerli":
                            r = "arbitrum-goerli.infura.io";
                            break;
                        default:
                            Jt.throwError("unsupported network", g.b.errors.INVALID_ARGUMENT, {
                                argument: "network",
                                value: t
                            })
                    }
                    const o = {
                        allowGzip: !0,
                        url: "https://" + r + "/v3/" + e.projectId,
                        throttleCallback: (t, r) => (e.projectId === Wt && O(), Promise.resolve(!0))
                    };
                    return null != e.projectSecret && (o.user = "", o.password = e.projectSecret), o
                }
                isCommunityResource() {
                    return this.projectId === Wt
                }
            }
            class json_rpc_batch_provider_JsonRpcBatchProvider extends json_rpc_provider_JsonRpcProvider {
                send(t, e) {
                    const r = {
                        method: t,
                        params: e,
                        id: this._nextId++,
                        jsonrpc: "2.0"
                    };
                    null == this._pendingBatch && (this._pendingBatch = []);
                    const o = {
                            request: r,
                            resolve: null,
                            reject: null
                        },
                        n = new Promise((t, e) => {
                            o.resolve = t, o.reject = e
                        });
                    return this._pendingBatch.push(o), this._pendingBatchAggregator || (this._pendingBatchAggregator = setTimeout(() => {
                        const t = this._pendingBatch;
                        this._pendingBatch = null, this._pendingBatchAggregator = null;
                        const e = t.map(t => t.request);
                        return this.emit("debug", {
                            action: "requestBatch",
                            request: Object(d.c)(e),
                            provider: this
                        }), Object(m.b)(this.connection, JSON.stringify(e)).then(r => {
                            this.emit("debug", {
                                action: "response",
                                request: e,
                                response: r,
                                provider: this
                            }), t.forEach((t, e) => {
                                const o = r[e];
                                if (o.error) {
                                    const e = new Error(o.error.message);
                                    e.code = o.error.code, e.data = o.error.data, t.reject(e)
                                } else t.resolve(o.result)
                            })
                        }, r => {
                            this.emit("debug", {
                                action: "response",
                                error: r,
                                request: e,
                                provider: this
                            }), t.forEach(t => {
                                t.reject(r)
                            })
                        })
                    }, 10)), n
                }
            }
            const Kt = new g.b("providers/5.7.2");
            class nodesmith_provider_NodesmithProvider extends url_json_rpc_provider_UrlJsonRpcProvider {
                static getApiKey(t) {
                    return t && "string" != typeof t && Kt.throwArgumentError("invalid apiKey", "apiKey", t), t || "ETHERS_JS_SHARED"
                }
                static getUrl(t, e) {
                    Kt.warn("NodeSmith will be discontinued on 2019-12-20; please migrate to another platform.");
                    let r = null;
                    switch (t.name) {
                        case "homestead":
                            r = "https://ethereum.api.nodesmith.io/v1/mainnet/jsonrpc";
                            break;
                        case "ropsten":
                            r = "https://ethereum.api.nodesmith.io/v1/ropsten/jsonrpc";
                            break;
                        case "rinkeby":
                            r = "https://ethereum.api.nodesmith.io/v1/rinkeby/jsonrpc";
                            break;
                        case "goerli":
                            r = "https://ethereum.api.nodesmith.io/v1/goerli/jsonrpc";
                            break;
                        case "kovan":
                            r = "https://ethereum.api.nodesmith.io/v1/kovan/jsonrpc";
                            break;
                        default:
                            Kt.throwArgumentError("unsupported network", "network", arguments[0])
                    }
                    return r + "?apiKey=" + e
                }
            }
            const Gt = new g.b("providers/5.7.2");
            class pocket_provider_PocketProvider extends url_json_rpc_provider_UrlJsonRpcProvider {
                static getApiKey(t) {
                    const e = {
                        applicationId: null,
                        loadBalancer: !0,
                        applicationSecretKey: null
                    };
                    return null == t ? e.applicationId = "62e1ad51b37b8e00394bda3b" : "string" == typeof t ? e.applicationId = t : null != t.applicationSecretKey ? (e.applicationId = t.applicationId, e.applicationSecretKey = t.applicationSecretKey) : t.applicationId ? e.applicationId = t.applicationId : Gt.throwArgumentError("unsupported PocketProvider apiKey", "apiKey", t), e
                }
                static getUrl(t, e) {
                    let r = null;
                    switch (t ? t.name : "unknown") {
                        case "goerli":
                            r = "eth-goerli.gateway.pokt.network";
                            break;
                        case "homestead":
                            r = "eth-mainnet.gateway.pokt.network";
                            break;
                        case "kovan":
                            r = "poa-kovan.gateway.pokt.network";
                            break;
                        case "matic":
                            r = "poly-mainnet.gateway.pokt.network";
                            break;
                        case "maticmum":
                            r = "polygon-mumbai-rpc.gateway.pokt.network";
                            break;
                        case "rinkeby":
                            r = "eth-rinkeby.gateway.pokt.network";
                            break;
                        case "ropsten":
                            r = "eth-ropsten.gateway.pokt.network";
                            break;
                        default:
                            Gt.throwError("unsupported network", g.b.errors.INVALID_ARGUMENT, {
                                argument: "network",
                                value: t
                            })
                    }
                    const o = {
                        headers: {},
                        url: `https://${r}/v1/lb/${e.applicationId}`
                    };
                    return null != e.applicationSecretKey && (o.user = "", o.password = e.applicationSecretKey), o
                }
                isCommunityResource() {
                    return "62e1ad51b37b8e00394bda3b" === this.applicationId
                }
            }
            const Ht = new g.b("providers/5.7.2");
            let Mt = 1;

            function $t(t, e) {
                const r = "Web3LegacyFetcher";
                return function(t, o) {
                    const n = {
                        method: t,
                        params: o,
                        id: Mt++,
                        jsonrpc: "2.0"
                    };
                    return new Promise((t, o) => {
                        this.emit("debug", {
                            action: "request",
                            fetcher: r,
                            request: Object(d.c)(n),
                            provider: this
                        }), e(n, (e, s) => {
                            if (e) return this.emit("debug", {
                                action: "response",
                                fetcher: r,
                                error: e,
                                request: n,
                                provider: this
                            }), o(e);
                            if (this.emit("debug", {
                                    action: "response",
                                    fetcher: r,
                                    request: n,
                                    response: s,
                                    provider: this
                                }), s.error) {
                                const t = new Error(s.error.message);
                                return t.code = s.error.code, t.data = s.error.data, o(t)
                            }
                            t(s.result)
                        })
                    })
                }
            }
            class web3_provider_Web3Provider extends json_rpc_provider_JsonRpcProvider {
                constructor(t, e) {
                    null == t && Ht.throwArgumentError("missing provider", "provider", t);
                    let r = null,
                        o = null,
                        n = null;
                    "function" == typeof t ? (r = "unknown:", o = t) : (r = t.host || t.path || "", !r && t.isMetaMask && (r = "metamask"), n = t, t.request ? ("" === r && (r = "eip-1193:"), o = function(t) {
                        return function(e, r) {
                            null == r && (r = []);
                            const o = {
                                method: e,
                                params: r
                            };
                            return this.emit("debug", {
                                action: "request",
                                fetcher: "Eip1193Fetcher",
                                request: Object(d.c)(o),
                                provider: this
                            }), t.request(o).then(t => (this.emit("debug", {
                                action: "response",
                                fetcher: "Eip1193Fetcher",
                                request: o,
                                response: t,
                                provider: this
                            }), t), t => {
                                throw this.emit("debug", {
                                    action: "response",
                                    fetcher: "Eip1193Fetcher",
                                    request: o,
                                    error: t,
                                    provider: this
                                }), t
                            })
                        }
                    }(t)) : t.sendAsync ? o = $t(0, t.sendAsync.bind(t)) : t.send ? o = $t(0, t.send.bind(t)) : Ht.throwArgumentError("unsupported provider", "provider", t), r || (r = "unknown:")), super(r, e), Object(d.d)(this, "jsonRpcFetchFunc", o), Object(d.d)(this, "provider", n)
                }
                send(t, e) {
                    return this.jsonRpcFetchFunc(t, e)
                }
            }
            const Vt = new g.b("providers/5.7.2");

            function Xt(t, e) {
                if (null == t && (t = "homestead"), "string" == typeof t) {
                    const e = t.match(/^(ws|http)s?:/i);
                    if (e) switch (e[1].toLowerCase()) {
                        case "http":
                        case "https":
                            return new json_rpc_provider_JsonRpcProvider(t);
                        case "ws":
                        case "wss":
                            return new websocket_provider_WebSocketProvider(t);
                        default:
                            Vt.throwArgumentError("unsupported URL scheme", "network", t)
                    }
                }
                const r = Object(n.a)(t);
                return r && r._defaultProvider || Vt.throwError("unsupported getDefaultProvider network", g.b.errors.NETWORK_ERROR, {
                    operation: "getDefaultProvider",
                    network: t
                }), r._defaultProvider({
                    FallbackProvider: fallback_provider_FallbackProvider,
                    AlchemyProvider: alchemy_provider_AlchemyProvider,
                    AnkrProvider: ankr_provider_AnkrProvider,
                    CloudflareProvider: cloudflare_provider_CloudflareProvider,
                    EtherscanProvider: etherscan_provider_EtherscanProvider,
                    InfuraProvider: infura_provider_InfuraProvider,
                    JsonRpcProvider: json_rpc_provider_JsonRpcProvider,
                    NodesmithProvider: nodesmith_provider_NodesmithProvider,
                    PocketProvider: pocket_provider_PocketProvider,
                    Web3Provider: web3_provider_Web3Provider,
                    IpcProvider: qt
                }, e)
            }
        },
        9179: function(t, e, r) {
            "use strict";
            var o;
            r.d(e, "a", (function() {
                    return o
                })),
                function(t) {
                    t.sha256 = "sha256", t.sha512 = "sha512"
                }(o || (o = {}))
        }
    }
]);