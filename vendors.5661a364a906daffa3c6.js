(window.webpackJsonp = window.webpackJsonp || []).push([
    [106], {
        138: function(t, r, e) {
            "use strict";
            e.r(r), e.d(r, "encode", (function() {
                return h
            })), e.d(r, "decode", (function() {
                return d
            }));
            var i = e(14),
                n = e(37);
            const o = new n.b("rlp/5.7.0");

            function s(t) {
                const r = [];
                for (; t;) r.unshift(255 & t), t >>= 8;
                return r
            }

            function f(t, r, e) {
                let i = 0;
                for (let n = 0; n < e; n++) i = 256 * i + t[r + n];
                return i
            }

            function h(t) {
                return Object(i.i)(function t(r) {
                    if (Array.isArray(r)) {
                        let e = [];
                        if (r.forEach((function(r) {
                                e = e.concat(t(r))
                            })), e.length <= 55) return e.unshift(192 + e.length), e;
                        const i = s(e.length);
                        return i.unshift(247 + i.length), i.concat(e)
                    }
                    Object(i.k)(r) || o.throwArgumentError("RLP object must be BytesLike", "object", r);
                    const e = Array.prototype.slice.call(Object(i.a)(r));
                    if (1 === e.length && e[0] <= 127) return e;
                    if (e.length <= 55) return e.unshift(128 + e.length), e;
                    const n = s(e.length);
                    return n.unshift(183 + n.length), n.concat(e)
                }(t))
            }

            function u(t, r, e, i) {
                const s = [];
                for (; e < r + 1 + i;) {
                    const f = a(t, e);
                    s.push(f.result), (e += f.consumed) > r + 1 + i && o.throwError("child data too short", n.b.errors.BUFFER_OVERRUN, {})
                }
                return {
                    consumed: 1 + i,
                    result: s
                }
            }

            function a(t, r) {
                if (0 === t.length && o.throwError("data too short", n.b.errors.BUFFER_OVERRUN, {}), t[r] >= 248) {
                    const e = t[r] - 247;
                    r + 1 + e > t.length && o.throwError("data short segment too short", n.b.errors.BUFFER_OVERRUN, {});
                    const i = f(t, r + 1, e);
                    return r + 1 + e + i > t.length && o.throwError("data long segment too short", n.b.errors.BUFFER_OVERRUN, {}), u(t, r, r + 1 + e, e + i)
                }
                if (t[r] >= 192) {
                    const e = t[r] - 192;
                    return r + 1 + e > t.length && o.throwError("data array too short", n.b.errors.BUFFER_OVERRUN, {}), u(t, r, r + 1, e)
                }
                if (t[r] >= 184) {
                    const e = t[r] - 183;
                    r + 1 + e > t.length && o.throwError("data array too short", n.b.errors.BUFFER_OVERRUN, {});
                    const s = f(t, r + 1, e);
                    r + 1 + e + s > t.length && o.throwError("data array too short", n.b.errors.BUFFER_OVERRUN, {});
                    return {
                        consumed: 1 + e + s,
                        result: Object(i.i)(t.slice(r + 1 + e, r + 1 + e + s))
                    }
                }
                if (t[r] >= 128) {
                    const e = t[r] - 128;
                    r + 1 + e > t.length && o.throwError("data too short", n.b.errors.BUFFER_OVERRUN, {});
                    return {
                        consumed: 1 + e,
                        result: Object(i.i)(t.slice(r + 1, r + 1 + e))
                    }
                }
                return {
                    consumed: 1,
                    result: Object(i.i)(t[r])
                }
            }

            function d(t) {
                const r = Object(i.a)(t),
                    e = a(r, 0);
                return e.consumed !== r.length && o.throwArgumentError("invalid rlp data", "data", t), e.result
            }
        },
        150: function(t, r, e) {
            "use strict";
            e.d(r, "a", (function() {
                return s
            }));
            var i = e(465),
                n = e.n(i),
                o = e(14);

            function s(t) {
                return "0x" + n.a.keccak_256(Object(o.a)(t))
            }
        },
        2338: function(t, r, e) {
            "use strict";
            e.r(r), e.d(r, "TransactionTypes", (function() {
                return c
            })), e.d(r, "computeAddress", (function() {
                return b
            })), e.d(r, "recoverAddress", (function() {
                return y
            })), e.d(r, "accessListify", (function() {
                return _
            })), e.d(r, "serialize", (function() {
                return S
            })), e.d(r, "parse", (function() {
                return O
            }));
            var i = e(209),
                n = e(319),
                o = e(14),
                s = e(5392),
                f = e(150),
                h = e(60),
                u = e(138),
                a = e(933),
                d = e(37);
            const l = new d.b("transactions/5.7.0");
            var c;

            function p(t) {
                return "0x" === t ? null : Object(i.a)(t)
            }

            function m(t) {
                return "0x" === t ? s.h : n.a.from(t)
            }! function(t) {
                t[t.legacy = 0] = "legacy", t[t.eip2930 = 1] = "eip2930", t[t.eip1559 = 2] = "eip1559"
            }(c || (c = {}));
            const v = [{
                    name: "nonce",
                    maxLength: 32,
                    numeric: !0
                }, {
                    name: "gasPrice",
                    maxLength: 32,
                    numeric: !0
                }, {
                    name: "gasLimit",
                    maxLength: 32,
                    numeric: !0
                }, {
                    name: "to",
                    length: 20
                }, {
                    name: "value",
                    maxLength: 32,
                    numeric: !0
                }, {
                    name: "data"
                }],
                g = {
                    chainId: !0,
                    data: !0,
                    gasLimit: !0,
                    gasPrice: !0,
                    nonce: !0,
                    to: !0,
                    type: !0,
                    value: !0
                };

            function b(t) {
                const r = Object(a.b)(t);
                return Object(i.a)(Object(o.e)(Object(f.a)(Object(o.e)(r, 1)), 12))
            }

            function y(t, r) {
                return b(Object(a.c)(Object(o.a)(t), r))
            }

            function M(t, r) {
                const e = Object(o.o)(n.a.from(t).toHexString());
                return e.length > 32 && l.throwArgumentError("invalid length for " + r, "transaction:" + r, t), e
            }

            function w(t, r) {
                return {
                    address: Object(i.a)(t),
                    storageKeys: (r || []).map((r, e) => (32 !== Object(o.d)(r) && l.throwArgumentError("invalid access list storageKey", `accessList[${t}:${e}]`, r), r.toLowerCase()))
                }
            }

            function _(t) {
                if (Array.isArray(t)) return t.map((t, r) => Array.isArray(t) ? (t.length > 2 && l.throwArgumentError("access list expected to be [ address, storageKeys[] ]", `value[${r}]`, t), w(t[0], t[1])) : w(t.address, t.storageKeys));
                const r = Object.keys(t).map(r => {
                    const e = t[r].reduce((t, r) => (t[r] = !0, t), {});
                    return w(r, Object.keys(e).sort())
                });
                return r.sort((t, r) => t.address.localeCompare(r.address)), r
            }

            function A(t) {
                return _(t).map(t => [t.address, t.storageKeys])
            }

            function E(t, r) {
                if (null != t.gasPrice) {
                    const r = n.a.from(t.gasPrice),
                        e = n.a.from(t.maxFeePerGas || 0);
                    r.eq(e) || l.throwArgumentError("mismatch EIP-1559 gasPrice != maxFeePerGas", "tx", {
                        gasPrice: r,
                        maxFeePerGas: e
                    })
                }
                const e = [M(t.chainId || 0, "chainId"), M(t.nonce || 0, "nonce"), M(t.maxPriorityFeePerGas || 0, "maxPriorityFeePerGas"), M(t.maxFeePerGas || 0, "maxFeePerGas"), M(t.gasLimit || 0, "gasLimit"), null != t.to ? Object(i.a)(t.to) : "0x", M(t.value || 0, "value"), t.data || "0x", A(t.accessList || [])];
                if (r) {
                    const t = Object(o.n)(r);
                    e.push(M(t.recoveryParam, "recoveryParam")), e.push(Object(o.o)(t.r)), e.push(Object(o.o)(t.s))
                }
                return Object(o.c)(["0x02", u.encode(e)])
            }

            function I(t, r) {
                const e = [M(t.chainId || 0, "chainId"), M(t.nonce || 0, "nonce"), M(t.gasPrice || 0, "gasPrice"), M(t.gasLimit || 0, "gasLimit"), null != t.to ? Object(i.a)(t.to) : "0x", M(t.value || 0, "value"), t.data || "0x", A(t.accessList || [])];
                if (r) {
                    const t = Object(o.n)(r);
                    e.push(M(t.recoveryParam, "recoveryParam")), e.push(Object(o.o)(t.r)), e.push(Object(o.o)(t.s))
                }
                return Object(o.c)(["0x01", u.encode(e)])
            }

            function S(t, r) {
                if (null == t.type || 0 === t.type) return null != t.accessList && l.throwArgumentError("untyped transactions do not support accessList; include type: 1", "transaction", t),
                    function(t, r) {
                        Object(h.b)(t, g);
                        const e = [];
                        v.forEach((function(r) {
                            let i = t[r.name] || [];
                            const n = {};
                            r.numeric && (n.hexPad = "left"), i = Object(o.a)(Object(o.i)(i, n)), r.length && i.length !== r.length && i.length > 0 && l.throwArgumentError("invalid length for " + r.name, "transaction:" + r.name, i), r.maxLength && (i = Object(o.o)(i), i.length > r.maxLength && l.throwArgumentError("invalid length for " + r.name, "transaction:" + r.name, i)), e.push(Object(o.i)(i))
                        }));
                        let i = 0;
                        if (null != t.chainId ? (i = t.chainId, "number" != typeof i && l.throwArgumentError("invalid transaction.chainId", "transaction", t)) : r && !Object(o.k)(r) && r.v > 28 && (i = Math.floor((r.v - 35) / 2)), 0 !== i && (e.push(Object(o.i)(i)), e.push("0x"), e.push("0x")), !r) return u.encode(e);
                        const n = Object(o.n)(r);
                        let s = 27 + n.recoveryParam;
                        return 0 !== i ? (e.pop(), e.pop(), e.pop(), s += 2 * i + 8, n.v > 28 && n.v !== s && l.throwArgumentError("transaction.chainId/signature.v mismatch", "signature", r)) : n.v !== s && l.throwArgumentError("transaction.chainId/signature.v mismatch", "signature", r), e.push(Object(o.i)(s)), e.push(Object(o.o)(Object(o.a)(n.r))), e.push(Object(o.o)(Object(o.a)(n.s))), u.encode(e)
                    }(t, r);
                switch (t.type) {
                    case 1:
                        return I(t, r);
                    case 2:
                        return E(t, r)
                }
                return l.throwError("unsupported transaction type: " + t.type, d.b.errors.UNSUPPORTED_OPERATION, {
                    operation: "serializeTransaction",
                    transactionType: t.type
                })
            }

            function N(t, r, e) {
                try {
                    const e = m(r[0]).toNumber();
                    if (0 !== e && 1 !== e) throw new Error("bad recid");
                    t.v = e
                } catch (t) {
                    l.throwArgumentError("invalid v for transaction type: 1", "v", r[0])
                }
                t.r = Object(o.h)(r[1], 32), t.s = Object(o.h)(r[2], 32);
                try {
                    const r = Object(f.a)(e(t));
                    t.from = y(r, {
                        r: t.r,
                        s: t.s,
                        recoveryParam: t.v
                    })
                } catch (t) {}
            }

            function O(t) {
                const r = Object(o.a)(t);
                if (r[0] > 127) return function(t) {
                    const r = u.decode(t);
                    9 !== r.length && 6 !== r.length && l.throwArgumentError("invalid raw transaction", "rawTransaction", t);
                    const e = {
                        nonce: m(r[0]).toNumber(),
                        gasPrice: m(r[1]),
                        gasLimit: m(r[2]),
                        to: p(r[3]),
                        value: m(r[4]),
                        data: r[5],
                        chainId: 0
                    };
                    if (6 === r.length) return e;
                    try {
                        e.v = n.a.from(r[6]).toNumber()
                    } catch (t) {
                        return e
                    }
                    if (e.r = Object(o.h)(r[7], 32), e.s = Object(o.h)(r[8], 32), n.a.from(e.r).isZero() && n.a.from(e.s).isZero()) e.chainId = e.v, e.v = 0;
                    else {
                        e.chainId = Math.floor((e.v - 35) / 2), e.chainId < 0 && (e.chainId = 0);
                        let i = e.v - 27;
                        const n = r.slice(0, 6);
                        0 !== e.chainId && (n.push(Object(o.i)(e.chainId)), n.push("0x"), n.push("0x"), i -= 2 * e.chainId + 8);
                        const s = Object(f.a)(u.encode(n));
                        try {
                            e.from = y(s, {
                                r: Object(o.i)(e.r),
                                s: Object(o.i)(e.s),
                                recoveryParam: i
                            })
                        } catch (t) {}
                        e.hash = Object(f.a)(t)
                    }
                    return e.type = null, e
                }(r);
                switch (r[0]) {
                    case 1:
                        return function(t) {
                            const r = u.decode(t.slice(1));
                            8 !== r.length && 11 !== r.length && l.throwArgumentError("invalid component count for transaction type: 1", "payload", Object(o.i)(t));
                            const e = {
                                type: 1,
                                chainId: m(r[0]).toNumber(),
                                nonce: m(r[1]).toNumber(),
                                gasPrice: m(r[2]),
                                gasLimit: m(r[3]),
                                to: p(r[4]),
                                value: m(r[5]),
                                data: r[6],
                                accessList: _(r[7])
                            };
                            return 8 === r.length || (e.hash = Object(f.a)(t), N(e, r.slice(8), I)), e
                        }(r);
                    case 2:
                        return function(t) {
                            const r = u.decode(t.slice(1));
                            9 !== r.length && 12 !== r.length && l.throwArgumentError("invalid component count for transaction type: 2", "payload", Object(o.i)(t));
                            const e = m(r[2]),
                                i = m(r[3]),
                                n = {
                                    type: 2,
                                    chainId: m(r[0]).toNumber(),
                                    nonce: m(r[1]).toNumber(),
                                    maxPriorityFeePerGas: e,
                                    maxFeePerGas: i,
                                    gasPrice: null,
                                    gasLimit: m(r[4]),
                                    to: p(r[5]),
                                    value: m(r[6]),
                                    data: r[7],
                                    accessList: _(r[8])
                                };
                            return 9 === r.length || (n.hash = Object(f.a)(t), N(n, r.slice(9), E)), n
                        }(r)
                }
                return l.throwError("unsupported transaction type: " + r[0], d.b.errors.UNSUPPORTED_OPERATION, {
                    operation: "parseTransaction",
                    transactionType: r[0]
                })
            }
        },
        2379: function(t, r, e) {
            "use strict";
            e.d(r, "a", (function() {
                return o
            })), e.d(r, "c", (function() {
                return s
            })), e.d(r, "b", (function() {
                return h
            })), e.d(r, "f", (function() {
                return a
            })), e.d(r, "d", (function() {
                return l
            })), e.d(r, "e", (function() {
                return c
            })), e.d(r, "h", (function() {
                return p
            })), e.d(r, "g", (function() {
                return m
            }));
            var i = e(14);
            const n = new(e(37).b)("strings/5.7.0");
            var o, s;

            function f(t, r, e, i, n) {
                if (t === s.BAD_PREFIX || t === s.UNEXPECTED_CONTINUE) {
                    let t = 0;
                    for (let i = r + 1; i < e.length && e[i] >> 6 == 2; i++) t++;
                    return t
                }
                return t === s.OVERRUN ? e.length - r - 1 : 0
            }! function(t) {
                t.current = "", t.NFC = "NFC", t.NFD = "NFD", t.NFKC = "NFKC", t.NFKD = "NFKD"
            }(o || (o = {})),
            function(t) {
                t.UNEXPECTED_CONTINUE = "unexpected continuation byte", t.BAD_PREFIX = "bad codepoint prefix", t.OVERRUN = "string overrun", t.MISSING_CONTINUE = "missing continuation byte", t.OUT_OF_RANGE = "out of UTF-8 range", t.UTF16_SURROGATE = "UTF-16 surrogate", t.OVERLONG = "overlong representation"
            }(s || (s = {}));
            const h = Object.freeze({
                error: function(t, r, e, i, o) {
                    return n.throwArgumentError(`invalid codepoint at offset ${r}; ${t}`, "bytes", e)
                },
                ignore: f,
                replace: function(t, r, e, i, n) {
                    return t === s.OVERLONG ? (i.push(n), 0) : (i.push(65533), f(t, r, e))
                }
            });

            function u(t, r) {
                null == r && (r = h.error), t = Object(i.a)(t);
                const e = [];
                let n = 0;
                for (; n < t.length;) {
                    const i = t[n++];
                    if (i >> 7 == 0) {
                        e.push(i);
                        continue
                    }
                    let o = null,
                        f = null;
                    if (192 == (224 & i)) o = 1, f = 127;
                    else if (224 == (240 & i)) o = 2, f = 2047;
                    else {
                        if (240 != (248 & i)) {
                            n += r(128 == (192 & i) ? s.UNEXPECTED_CONTINUE : s.BAD_PREFIX, n - 1, t, e);
                            continue
                        }
                        o = 3, f = 65535
                    }
                    if (n - 1 + o >= t.length) {
                        n += r(s.OVERRUN, n - 1, t, e);
                        continue
                    }
                    let h = i & (1 << 8 - o - 1) - 1;
                    for (let i = 0; i < o; i++) {
                        let i = t[n];
                        if (128 != (192 & i)) {
                            n += r(s.MISSING_CONTINUE, n, t, e), h = null;
                            break
                        }
                        h = h << 6 | 63 & i, n++
                    }
                    null !== h && (h > 1114111 ? n += r(s.OUT_OF_RANGE, n - 1 - o, t, e, h) : h >= 55296 && h <= 57343 ? n += r(s.UTF16_SURROGATE, n - 1 - o, t, e, h) : h <= f ? n += r(s.OVERLONG, n - 1 - o, t, e, h) : e.push(h))
                }
                return e
            }

            function a(t, r = o.current) {
                r != o.current && (n.checkNormalize(), t = t.normalize(r));
                let e = [];
                for (let r = 0; r < t.length; r++) {
                    const i = t.charCodeAt(r);
                    if (i < 128) e.push(i);
                    else if (i < 2048) e.push(i >> 6 | 192), e.push(63 & i | 128);
                    else if (55296 == (64512 & i)) {
                        r++;
                        const n = t.charCodeAt(r);
                        if (r >= t.length || 56320 != (64512 & n)) throw new Error("invalid utf-8 string");
                        const o = 65536 + ((1023 & i) << 10) + (1023 & n);
                        e.push(o >> 18 | 240), e.push(o >> 12 & 63 | 128), e.push(o >> 6 & 63 | 128), e.push(63 & o | 128)
                    } else e.push(i >> 12 | 224), e.push(i >> 6 & 63 | 128), e.push(63 & i | 128)
                }
                return Object(i.a)(e)
            }

            function d(t) {
                const r = "0000" + t.toString(16);
                return "\\u" + r.substring(r.length - 4)
            }

            function l(t, r) {
                return '"' + u(t, r).map(t => {
                    if (t < 256) {
                        switch (t) {
                            case 8:
                                return "\\b";
                            case 9:
                                return "\\t";
                            case 10:
                                return "\\n";
                            case 13:
                                return "\\r";
                            case 34:
                                return '\\"';
                            case 92:
                                return "\\\\"
                        }
                        if (t >= 32 && t < 127) return String.fromCharCode(t)
                    }
                    return t <= 65535 ? d(t) : d(55296 + ((t -= 65536) >> 10 & 1023)) + d(56320 + (1023 & t))
                }).join("") + '"'
            }

            function c(t) {
                return t.map(t => t <= 65535 ? String.fromCharCode(t) : (t -= 65536, String.fromCharCode(55296 + (t >> 10 & 1023), 56320 + (1023 & t)))).join("")
            }

            function p(t, r) {
                return c(u(t, r))
            }

            function m(t, r = o.current) {
                return u(a(t, r))
            }
        },
        37: function(t, r, e) {
            "use strict";
            e.d(r, "a", (function() {
                return a
            })), e.d(r, "b", (function() {
                return lib_esm_Logger
            }));
            let i = !1,
                n = !1;
            const o = {
                debug: 1,
                default: 2,
                info: 2,
                warning: 3,
                error: 4,
                off: 5
            };
            let s = o.default,
                f = null;
            const h = function() {
                try {
                    const t = [];
                    if (["NFD", "NFC", "NFKD", "NFKC"].forEach(r => {
                            try {
                                if ("test" !== "test".normalize(r)) throw new Error("bad normalize")
                            } catch (e) {
                                t.push(r)
                            }
                        }), t.length) throw new Error("missing " + t.join(", "));
                    if (String.fromCharCode(233).normalize("NFD") !== String.fromCharCode(101, 769)) throw new Error("broken implementation")
                } catch (t) {
                    return t.message
                }
                return null
            }();
            var u, a;
            ! function(t) {
                t.DEBUG = "DEBUG", t.INFO = "INFO", t.WARNING = "WARNING", t.ERROR = "ERROR", t.OFF = "OFF"
            }(u || (u = {})),
            function(t) {
                t.UNKNOWN_ERROR = "UNKNOWN_ERROR", t.NOT_IMPLEMENTED = "NOT_IMPLEMENTED", t.UNSUPPORTED_OPERATION = "UNSUPPORTED_OPERATION", t.NETWORK_ERROR = "NETWORK_ERROR", t.SERVER_ERROR = "SERVER_ERROR", t.TIMEOUT = "TIMEOUT", t.BUFFER_OVERRUN = "BUFFER_OVERRUN", t.NUMERIC_FAULT = "NUMERIC_FAULT", t.MISSING_NEW = "MISSING_NEW", t.INVALID_ARGUMENT = "INVALID_ARGUMENT", t.MISSING_ARGUMENT = "MISSING_ARGUMENT", t.UNEXPECTED_ARGUMENT = "UNEXPECTED_ARGUMENT", t.CALL_EXCEPTION = "CALL_EXCEPTION", t.INSUFFICIENT_FUNDS = "INSUFFICIENT_FUNDS", t.NONCE_EXPIRED = "NONCE_EXPIRED", t.REPLACEMENT_UNDERPRICED = "REPLACEMENT_UNDERPRICED", t.UNPREDICTABLE_GAS_LIMIT = "UNPREDICTABLE_GAS_LIMIT", t.TRANSACTION_REPLACED = "TRANSACTION_REPLACED", t.ACTION_REJECTED = "ACTION_REJECTED"
            }(a || (a = {}));
            const d = "0123456789abcdef";
            class lib_esm_Logger {
                constructor(t) {
                    Object.defineProperty(this, "version", {
                        enumerable: !0,
                        value: t,
                        writable: !1
                    })
                }
                _log(t, r) {
                    const e = t.toLowerCase();
                    null == o[e] && this.throwArgumentError("invalid log level name", "logLevel", t), s > o[e] || console.log.apply(console, r)
                }
                debug(...t) {
                    this._log(lib_esm_Logger.levels.DEBUG, t)
                }
                info(...t) {
                    this._log(lib_esm_Logger.levels.INFO, t)
                }
                warn(...t) {
                    this._log(lib_esm_Logger.levels.WARNING, t)
                }
                makeError(t, r, e) {
                    if (n) return this.makeError("censored error", r, {});
                    r || (r = lib_esm_Logger.errors.UNKNOWN_ERROR), e || (e = {});
                    const i = [];
                    Object.keys(e).forEach(t => {
                        const r = e[t];
                        try {
                            if (r instanceof Uint8Array) {
                                let e = "";
                                for (let t = 0; t < r.length; t++) e += d[r[t] >> 4], e += d[15 & r[t]];
                                i.push(t + "=Uint8Array(0x" + e + ")")
                            } else i.push(t + "=" + JSON.stringify(r))
                        } catch (r) {
                            i.push(t + "=" + JSON.stringify(e[t].toString()))
                        }
                    }), i.push("code=" + r), i.push("version=" + this.version);
                    const o = t;
                    let s = "";
                    switch (r) {
                        case a.NUMERIC_FAULT: {
                            s = "NUMERIC_FAULT";
                            const r = t;
                            switch (r) {
                                case "overflow":
                                case "underflow":
                                case "division-by-zero":
                                    s += "-" + r;
                                    break;
                                case "negative-power":
                                case "negative-width":
                                    s += "-unsupported";
                                    break;
                                case "unbound-bitwise-result":
                                    s += "-unbound-result"
                            }
                            break
                        }
                        case a.CALL_EXCEPTION:
                        case a.INSUFFICIENT_FUNDS:
                        case a.MISSING_NEW:
                        case a.NONCE_EXPIRED:
                        case a.REPLACEMENT_UNDERPRICED:
                        case a.TRANSACTION_REPLACED:
                        case a.UNPREDICTABLE_GAS_LIMIT:
                            s = r
                    }
                    s && (t += " [ See: https://links.ethers.org/v5-errors-" + s + " ]"), i.length && (t += " (" + i.join(", ") + ")");
                    const f = new Error(t);
                    return f.reason = o, f.code = r, Object.keys(e).forEach((function(t) {
                        f[t] = e[t]
                    })), f
                }
                throwError(t, r, e) {
                    throw this.makeError(t, r, e)
                }
                throwArgumentError(t, r, e) {
                    return this.throwError(t, lib_esm_Logger.errors.INVALID_ARGUMENT, {
                        argument: r,
                        value: e
                    })
                }
                assert(t, r, e, i) {
                    t || this.throwError(r, e, i)
                }
                assertArgument(t, r, e, i) {
                    t || this.throwArgumentError(r, e, i)
                }
                checkNormalize(t) {
                    null == t && (t = "platform missing String.prototype.normalize"), h && this.throwError("platform missing String.prototype.normalize", lib_esm_Logger.errors.UNSUPPORTED_OPERATION, {
                        operation: "String.prototype.normalize",
                        form: h
                    })
                }
                checkSafeUint53(t, r) {
                    "number" == typeof t && (null == r && (r = "value not safe"), (t < 0 || t >= 9007199254740991) && this.throwError(r, lib_esm_Logger.errors.NUMERIC_FAULT, {
                        operation: "checkSafeInteger",
                        fault: "out-of-safe-range",
                        value: t
                    }), t % 1 && this.throwError(r, lib_esm_Logger.errors.NUMERIC_FAULT, {
                        operation: "checkSafeInteger",
                        fault: "non-integer",
                        value: t
                    }))
                }
                checkArgumentCount(t, r, e) {
                    e = e ? ": " + e : "", t < r && this.throwError("missing argument" + e, lib_esm_Logger.errors.MISSING_ARGUMENT, {
                        count: t,
                        expectedCount: r
                    }), t > r && this.throwError("too many arguments" + e, lib_esm_Logger.errors.UNEXPECTED_ARGUMENT, {
                        count: t,
                        expectedCount: r
                    })
                }
                checkNew(t, r) {
                    t !== Object && null != t || this.throwError("missing new", lib_esm_Logger.errors.MISSING_NEW, {
                        name: r.name
                    })
                }
                checkAbstract(t, r) {
                    t === r ? this.throwError("cannot instantiate abstract class " + JSON.stringify(r.name) + " directly; use a sub-class", lib_esm_Logger.errors.UNSUPPORTED_OPERATION, {
                        name: t.name,
                        operation: "new"
                    }) : t !== Object && null != t || this.throwError("missing new", lib_esm_Logger.errors.MISSING_NEW, {
                        name: r.name
                    })
                }
                static globalLogger() {
                    return f || (f = new lib_esm_Logger("logger/5.7.0")), f
                }
                static setCensorship(t, r) {
                    if (!t && r && this.globalLogger().throwError("cannot permanently disable censorship", lib_esm_Logger.errors.UNSUPPORTED_OPERATION, {
                            operation: "setCensorship"
                        }), i) {
                        if (!t) return;
                        this.globalLogger().throwError("error censorship permanent", lib_esm_Logger.errors.UNSUPPORTED_OPERATION, {
                            operation: "setCensorship"
                        })
                    }
                    n = !!t, i = !!r
                }
                static setLogLevel(t) {
                    const r = o[t.toLowerCase()];
                    null != r ? s = r : lib_esm_Logger.globalLogger().warn("invalid log level - " + t)
                }
                static from(t) {
                    return new lib_esm_Logger(t)
                }
            }
            lib_esm_Logger.errors = a, lib_esm_Logger.levels = u
        },
        48: function(t, r, e) {
            (function(t) {
                ! function(t, r) {
                    "use strict";

                    function i(t, r) {
                        if (!t) throw new Error(r || "Assertion failed")
                    }

                    function n(t, r) {
                        t.super_ = r;
                        var e = function() {};
                        e.prototype = r.prototype, t.prototype = new e, t.prototype.constructor = t
                    }

                    function o(t, r, e) {
                        if (o.isBN(t)) return t;
                        this.negative = 0, this.words = null, this.length = 0, this.red = null, null !== t && ("le" !== r && "be" !== r || (e = r, r = 10), this._init(t || 0, r || 10, e || "be"))
                    }
                    var s;
                    "object" == typeof t ? t.exports = o : r.BN = o, o.BN = o, o.wordSize = 26;
                    try {
                        s = "undefined" != typeof window && void 0 !== window.Buffer ? window.Buffer : e(12).Buffer
                    } catch (t) {}

                    function f(t, r) {
                        var e = t.charCodeAt(r);
                        return e >= 48 && e <= 57 ? e - 48 : e >= 65 && e <= 70 ? e - 55 : e >= 97 && e <= 102 ? e - 87 : void i(!1, "Invalid character in " + t)
                    }

                    function h(t, r, e) {
                        var i = f(t, e);
                        return e - 1 >= r && (i |= f(t, e - 1) << 4), i
                    }

                    function u(t, r, e, n) {
                        for (var o = 0, s = 0, f = Math.min(t.length, e), h = r; h < f; h++) {
                            var u = t.charCodeAt(h) - 48;
                            o *= n, s = u >= 49 ? u - 49 + 10 : u >= 17 ? u - 17 + 10 : u, i(u >= 0 && s < n, "Invalid character"), o += s
                        }
                        return o
                    }

                    function a(t, r) {
                        t.words = r.words, t.length = r.length, t.negative = r.negative, t.red = r.red
                    }
                    if (o.isBN = function(t) {
                            return t instanceof o || null !== t && "object" == typeof t && t.constructor.wordSize === o.wordSize && Array.isArray(t.words)
                        }, o.max = function(t, r) {
                            return t.cmp(r) > 0 ? t : r
                        }, o.min = function(t, r) {
                            return t.cmp(r) < 0 ? t : r
                        }, o.prototype._init = function(t, r, e) {
                            if ("number" == typeof t) return this._initNumber(t, r, e);
                            if ("object" == typeof t) return this._initArray(t, r, e);
                            "hex" === r && (r = 16), i(r === (0 | r) && r >= 2 && r <= 36);
                            var n = 0;
                            "-" === (t = t.toString().replace(/\s+/g, ""))[0] && (n++, this.negative = 1), n < t.length && (16 === r ? this._parseHex(t, n, e) : (this._parseBase(t, r, n), "le" === e && this._initArray(this.toArray(), r, e)))
                        }, o.prototype._initNumber = function(t, r, e) {
                            t < 0 && (this.negative = 1, t = -t), t < 67108864 ? (this.words = [67108863 & t], this.length = 1) : t < 4503599627370496 ? (this.words = [67108863 & t, t / 67108864 & 67108863], this.length = 2) : (i(t < 9007199254740992), this.words = [67108863 & t, t / 67108864 & 67108863, 1], this.length = 3), "le" === e && this._initArray(this.toArray(), r, e)
                        }, o.prototype._initArray = function(t, r, e) {
                            if (i("number" == typeof t.length), t.length <= 0) return this.words = [0], this.length = 1, this;
                            this.length = Math.ceil(t.length / 3), this.words = new Array(this.length);
                            for (var n = 0; n < this.length; n++) this.words[n] = 0;
                            var o, s, f = 0;
                            if ("be" === e)
                                for (n = t.length - 1, o = 0; n >= 0; n -= 3) s = t[n] | t[n - 1] << 8 | t[n - 2] << 16, this.words[o] |= s << f & 67108863, this.words[o + 1] = s >>> 26 - f & 67108863, (f += 24) >= 26 && (f -= 26, o++);
                            else if ("le" === e)
                                for (n = 0, o = 0; n < t.length; n += 3) s = t[n] | t[n + 1] << 8 | t[n + 2] << 16, this.words[o] |= s << f & 67108863, this.words[o + 1] = s >>> 26 - f & 67108863, (f += 24) >= 26 && (f -= 26, o++);
                            return this._strip()
                        }, o.prototype._parseHex = function(t, r, e) {
                            this.length = Math.ceil((t.length - r) / 6), this.words = new Array(this.length);
                            for (var i = 0; i < this.length; i++) this.words[i] = 0;
                            var n, o = 0,
                                s = 0;
                            if ("be" === e)
                                for (i = t.length - 1; i >= r; i -= 2) n = h(t, r, i) << o, this.words[s] |= 67108863 & n, o >= 18 ? (o -= 18, s += 1, this.words[s] |= n >>> 26) : o += 8;
                            else
                                for (i = (t.length - r) % 2 == 0 ? r + 1 : r; i < t.length; i += 2) n = h(t, r, i) << o, this.words[s] |= 67108863 & n, o >= 18 ? (o -= 18, s += 1, this.words[s] |= n >>> 26) : o += 8;
                            this._strip()
                        }, o.prototype._parseBase = function(t, r, e) {
                            this.words = [0], this.length = 1;
                            for (var i = 0, n = 1; n <= 67108863; n *= r) i++;
                            i--, n = n / r | 0;
                            for (var o = t.length - e, s = o % i, f = Math.min(o, o - s) + e, h = 0, a = e; a < f; a += i) h = u(t, a, a + i, r), this.imuln(n), this.words[0] + h < 67108864 ? this.words[0] += h : this._iaddn(h);
                            if (0 !== s) {
                                var d = 1;
                                for (h = u(t, a, t.length, r), a = 0; a < s; a++) d *= r;
                                this.imuln(d), this.words[0] + h < 67108864 ? this.words[0] += h : this._iaddn(h)
                            }
                            this._strip()
                        }, o.prototype.copy = function(t) {
                            t.words = new Array(this.length);
                            for (var r = 0; r < this.length; r++) t.words[r] = this.words[r];
                            t.length = this.length, t.negative = this.negative, t.red = this.red
                        }, o.prototype._move = function(t) {
                            a(t, this)
                        }, o.prototype.clone = function() {
                            var t = new o(null);
                            return this.copy(t), t
                        }, o.prototype._expand = function(t) {
                            for (; this.length < t;) this.words[this.length++] = 0;
                            return this
                        }, o.prototype._strip = function() {
                            for (; this.length > 1 && 0 === this.words[this.length - 1];) this.length--;
                            return this._normSign()
                        }, o.prototype._normSign = function() {
                            return 1 === this.length && 0 === this.words[0] && (this.negative = 0), this
                        }, "undefined" != typeof Symbol && "function" == typeof Symbol.for) try {
                        o.prototype[Symbol.for("nodejs.util.inspect.custom")] = d
                    } catch (t) {
                        o.prototype.inspect = d
                    } else o.prototype.inspect = d;

                    function d() {
                        return (this.red ? "<BN-R: " : "<BN: ") + this.toString(16) + ">"
                    }
                    var l = ["", "0", "00", "000", "0000", "00000", "000000", "0000000", "00000000", "000000000", "0000000000", "00000000000", "000000000000", "0000000000000", "00000000000000", "000000000000000", "0000000000000000", "00000000000000000", "000000000000000000", "0000000000000000000", "00000000000000000000", "000000000000000000000", "0000000000000000000000", "00000000000000000000000", "000000000000000000000000", "0000000000000000000000000"],
                        c = [0, 0, 25, 16, 12, 11, 10, 9, 8, 8, 7, 7, 7, 7, 6, 6, 6, 6, 6, 6, 6, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5],
                        p = [0, 0, 33554432, 43046721, 16777216, 48828125, 60466176, 40353607, 16777216, 43046721, 1e7, 19487171, 35831808, 62748517, 7529536, 11390625, 16777216, 24137569, 34012224, 47045881, 64e6, 4084101, 5153632, 6436343, 7962624, 9765625, 11881376, 14348907, 17210368, 20511149, 243e5, 28629151, 33554432, 39135393, 45435424, 52521875, 60466176];
                    o.prototype.toString = function(t, r) {
                        var e;
                        if (r = 0 | r || 1, 16 === (t = t || 10) || "hex" === t) {
                            e = "";
                            for (var n = 0, o = 0, s = 0; s < this.length; s++) {
                                var f = this.words[s],
                                    h = (16777215 & (f << n | o)).toString(16);
                                o = f >>> 24 - n & 16777215, (n += 2) >= 26 && (n -= 26, s--), e = 0 !== o || s !== this.length - 1 ? l[6 - h.length] + h + e : h + e
                            }
                            for (0 !== o && (e = o.toString(16) + e); e.length % r != 0;) e = "0" + e;
                            return 0 !== this.negative && (e = "-" + e), e
                        }
                        if (t === (0 | t) && t >= 2 && t <= 36) {
                            var u = c[t],
                                a = p[t];
                            e = "";
                            var d = this.clone();
                            for (d.negative = 0; !d.isZero();) {
                                var m = d.modrn(a).toString(t);
                                e = (d = d.idivn(a)).isZero() ? m + e : l[u - m.length] + m + e
                            }
                            for (this.isZero() && (e = "0" + e); e.length % r != 0;) e = "0" + e;
                            return 0 !== this.negative && (e = "-" + e), e
                        }
                        i(!1, "Base should be between 2 and 36")
                    }, o.prototype.toNumber = function() {
                        var t = this.words[0];
                        return 2 === this.length ? t += 67108864 * this.words[1] : 3 === this.length && 1 === this.words[2] ? t += 4503599627370496 + 67108864 * this.words[1] : this.length > 2 && i(!1, "Number can only safely store up to 53 bits"), 0 !== this.negative ? -t : t
                    }, o.prototype.toJSON = function() {
                        return this.toString(16, 2)
                    }, s && (o.prototype.toBuffer = function(t, r) {
                        return this.toArrayLike(s, t, r)
                    }), o.prototype.toArray = function(t, r) {
                        return this.toArrayLike(Array, t, r)
                    };

                    function m(t, r, e) {
                        e.negative = r.negative ^ t.negative;
                        var i = t.length + r.length | 0;
                        e.length = i, i = i - 1 | 0;
                        var n = 0 | t.words[0],
                            o = 0 | r.words[0],
                            s = n * o,
                            f = 67108863 & s,
                            h = s / 67108864 | 0;
                        e.words[0] = f;
                        for (var u = 1; u < i; u++) {
                            for (var a = h >>> 26, d = 67108863 & h, l = Math.min(u, r.length - 1), c = Math.max(0, u - t.length + 1); c <= l; c++) {
                                var p = u - c | 0;
                                a += (s = (n = 0 | t.words[p]) * (o = 0 | r.words[c]) + d) / 67108864 | 0, d = 67108863 & s
                            }
                            e.words[u] = 0 | d, h = 0 | a
                        }
                        return 0 !== h ? e.words[u] = 0 | h : e.length--, e._strip()
                    }
                    o.prototype.toArrayLike = function(t, r, e) {
                        this._strip();
                        var n = this.byteLength(),
                            o = e || Math.max(1, n);
                        i(n <= o, "byte array longer than desired length"), i(o > 0, "Requested array length <= 0");
                        var s = function(t, r) {
                            return t.allocUnsafe ? t.allocUnsafe(r) : new t(r)
                        }(t, o);
                        return this["_toArrayLike" + ("le" === r ? "LE" : "BE")](s, n), s
                    }, o.prototype._toArrayLikeLE = function(t, r) {
                        for (var e = 0, i = 0, n = 0, o = 0; n < this.length; n++) {
                            var s = this.words[n] << o | i;
                            t[e++] = 255 & s, e < t.length && (t[e++] = s >> 8 & 255), e < t.length && (t[e++] = s >> 16 & 255), 6 === o ? (e < t.length && (t[e++] = s >> 24 & 255), i = 0, o = 0) : (i = s >>> 24, o += 2)
                        }
                        if (e < t.length)
                            for (t[e++] = i; e < t.length;) t[e++] = 0
                    }, o.prototype._toArrayLikeBE = function(t, r) {
                        for (var e = t.length - 1, i = 0, n = 0, o = 0; n < this.length; n++) {
                            var s = this.words[n] << o | i;
                            t[e--] = 255 & s, e >= 0 && (t[e--] = s >> 8 & 255), e >= 0 && (t[e--] = s >> 16 & 255), 6 === o ? (e >= 0 && (t[e--] = s >> 24 & 255), i = 0, o = 0) : (i = s >>> 24, o += 2)
                        }
                        if (e >= 0)
                            for (t[e--] = i; e >= 0;) t[e--] = 0
                    }, Math.clz32 ? o.prototype._countBits = function(t) {
                        return 32 - Math.clz32(t)
                    } : o.prototype._countBits = function(t) {
                        var r = t,
                            e = 0;
                        return r >= 4096 && (e += 13, r >>>= 13), r >= 64 && (e += 7, r >>>= 7), r >= 8 && (e += 4, r >>>= 4), r >= 2 && (e += 2, r >>>= 2), e + r
                    }, o.prototype._zeroBits = function(t) {
                        if (0 === t) return 26;
                        var r = t,
                            e = 0;
                        return 0 == (8191 & r) && (e += 13, r >>>= 13), 0 == (127 & r) && (e += 7, r >>>= 7), 0 == (15 & r) && (e += 4, r >>>= 4), 0 == (3 & r) && (e += 2, r >>>= 2), 0 == (1 & r) && e++, e
                    }, o.prototype.bitLength = function() {
                        var t = this.words[this.length - 1],
                            r = this._countBits(t);
                        return 26 * (this.length - 1) + r
                    }, o.prototype.zeroBits = function() {
                        if (this.isZero()) return 0;
                        for (var t = 0, r = 0; r < this.length; r++) {
                            var e = this._zeroBits(this.words[r]);
                            if (t += e, 26 !== e) break
                        }
                        return t
                    }, o.prototype.byteLength = function() {
                        return Math.ceil(this.bitLength() / 8)
                    }, o.prototype.toTwos = function(t) {
                        return 0 !== this.negative ? this.abs().inotn(t).iaddn(1) : this.clone()
                    }, o.prototype.fromTwos = function(t) {
                        return this.testn(t - 1) ? this.notn(t).iaddn(1).ineg() : this.clone()
                    }, o.prototype.isNeg = function() {
                        return 0 !== this.negative
                    }, o.prototype.neg = function() {
                        return this.clone().ineg()
                    }, o.prototype.ineg = function() {
                        return this.isZero() || (this.negative ^= 1), this
                    }, o.prototype.iuor = function(t) {
                        for (; this.length < t.length;) this.words[this.length++] = 0;
                        for (var r = 0; r < t.length; r++) this.words[r] = this.words[r] | t.words[r];
                        return this._strip()
                    }, o.prototype.ior = function(t) {
                        return i(0 == (this.negative | t.negative)), this.iuor(t)
                    }, o.prototype.or = function(t) {
                        return this.length > t.length ? this.clone().ior(t) : t.clone().ior(this)
                    }, o.prototype.uor = function(t) {
                        return this.length > t.length ? this.clone().iuor(t) : t.clone().iuor(this)
                    }, o.prototype.iuand = function(t) {
                        var r;
                        r = this.length > t.length ? t : this;
                        for (var e = 0; e < r.length; e++) this.words[e] = this.words[e] & t.words[e];
                        return this.length = r.length, this._strip()
                    }, o.prototype.iand = function(t) {
                        return i(0 == (this.negative | t.negative)), this.iuand(t)
                    }, o.prototype.and = function(t) {
                        return this.length > t.length ? this.clone().iand(t) : t.clone().iand(this)
                    }, o.prototype.uand = function(t) {
                        return this.length > t.length ? this.clone().iuand(t) : t.clone().iuand(this)
                    }, o.prototype.iuxor = function(t) {
                        var r, e;
                        this.length > t.length ? (r = this, e = t) : (r = t, e = this);
                        for (var i = 0; i < e.length; i++) this.words[i] = r.words[i] ^ e.words[i];
                        if (this !== r)
                            for (; i < r.length; i++) this.words[i] = r.words[i];
                        return this.length = r.length, this._strip()
                    }, o.prototype.ixor = function(t) {
                        return i(0 == (this.negative | t.negative)), this.iuxor(t)
                    }, o.prototype.xor = function(t) {
                        return this.length > t.length ? this.clone().ixor(t) : t.clone().ixor(this)
                    }, o.prototype.uxor = function(t) {
                        return this.length > t.length ? this.clone().iuxor(t) : t.clone().iuxor(this)
                    }, o.prototype.inotn = function(t) {
                        i("number" == typeof t && t >= 0);
                        var r = 0 | Math.ceil(t / 26),
                            e = t % 26;
                        this._expand(r), e > 0 && r--;
                        for (var n = 0; n < r; n++) this.words[n] = 67108863 & ~this.words[n];
                        return e > 0 && (this.words[n] = ~this.words[n] & 67108863 >> 26 - e), this._strip()
                    }, o.prototype.notn = function(t) {
                        return this.clone().inotn(t)
                    }, o.prototype.setn = function(t, r) {
                        i("number" == typeof t && t >= 0);
                        var e = t / 26 | 0,
                            n = t % 26;
                        return this._expand(e + 1), this.words[e] = r ? this.words[e] | 1 << n : this.words[e] & ~(1 << n), this._strip()
                    }, o.prototype.iadd = function(t) {
                        var r, e, i;
                        if (0 !== this.negative && 0 === t.negative) return this.negative = 0, r = this.isub(t), this.negative ^= 1, this._normSign();
                        if (0 === this.negative && 0 !== t.negative) return t.negative = 0, r = this.isub(t), t.negative = 1, r._normSign();
                        this.length > t.length ? (e = this, i = t) : (e = t, i = this);
                        for (var n = 0, o = 0; o < i.length; o++) r = (0 | e.words[o]) + (0 | i.words[o]) + n, this.words[o] = 67108863 & r, n = r >>> 26;
                        for (; 0 !== n && o < e.length; o++) r = (0 | e.words[o]) + n, this.words[o] = 67108863 & r, n = r >>> 26;
                        if (this.length = e.length, 0 !== n) this.words[this.length] = n, this.length++;
                        else if (e !== this)
                            for (; o < e.length; o++) this.words[o] = e.words[o];
                        return this
                    }, o.prototype.add = function(t) {
                        var r;
                        return 0 !== t.negative && 0 === this.negative ? (t.negative = 0, r = this.sub(t), t.negative ^= 1, r) : 0 === t.negative && 0 !== this.negative ? (this.negative = 0, r = t.sub(this), this.negative = 1, r) : this.length > t.length ? this.clone().iadd(t) : t.clone().iadd(this)
                    }, o.prototype.isub = function(t) {
                        if (0 !== t.negative) {
                            t.negative = 0;
                            var r = this.iadd(t);
                            return t.negative = 1, r._normSign()
                        }
                        if (0 !== this.negative) return this.negative = 0, this.iadd(t), this.negative = 1, this._normSign();
                        var e, i, n = this.cmp(t);
                        if (0 === n) return this.negative = 0, this.length = 1, this.words[0] = 0, this;
                        n > 0 ? (e = this, i = t) : (e = t, i = this);
                        for (var o = 0, s = 0; s < i.length; s++) o = (r = (0 | e.words[s]) - (0 | i.words[s]) + o) >> 26, this.words[s] = 67108863 & r;
                        for (; 0 !== o && s < e.length; s++) o = (r = (0 | e.words[s]) + o) >> 26, this.words[s] = 67108863 & r;
                        if (0 === o && s < e.length && e !== this)
                            for (; s < e.length; s++) this.words[s] = e.words[s];
                        return this.length = Math.max(this.length, s), e !== this && (this.negative = 1), this._strip()
                    }, o.prototype.sub = function(t) {
                        return this.clone().isub(t)
                    };
                    var v = function(t, r, e) {
                        var i, n, o, s = t.words,
                            f = r.words,
                            h = e.words,
                            u = 0,
                            a = 0 | s[0],
                            d = 8191 & a,
                            l = a >>> 13,
                            c = 0 | s[1],
                            p = 8191 & c,
                            m = c >>> 13,
                            v = 0 | s[2],
                            g = 8191 & v,
                            b = v >>> 13,
                            y = 0 | s[3],
                            M = 8191 & y,
                            w = y >>> 13,
                            _ = 0 | s[4],
                            A = 8191 & _,
                            E = _ >>> 13,
                            I = 0 | s[5],
                            S = 8191 & I,
                            N = I >>> 13,
                            O = 0 | s[6],
                            R = 8191 & O,
                            x = O >>> 13,
                            P = 0 | s[7],
                            j = 8191 & P,
                            L = P >>> 13,
                            T = 0 | s[8],
                            k = 8191 & T,
                            U = T >>> 13,
                            F = 0 | s[9],
                            q = 8191 & F,
                            C = F >>> 13,
                            z = 0 | f[0],
                            D = 8191 & z,
                            B = z >>> 13,
                            K = 0 | f[1],
                            G = 8191 & K,
                            V = K >>> 13,
                            X = 0 | f[2],
                            Z = 8191 & X,
                            J = X >>> 13,
                            W = 0 | f[3],
                            H = 8191 & W,
                            $ = W >>> 13,
                            Y = 0 | f[4],
                            Q = 8191 & Y,
                            tt = Y >>> 13,
                            rt = 0 | f[5],
                            et = 8191 & rt,
                            it = rt >>> 13,
                            nt = 0 | f[6],
                            ot = 8191 & nt,
                            st = nt >>> 13,
                            ft = 0 | f[7],
                            ht = 8191 & ft,
                            ut = ft >>> 13,
                            at = 0 | f[8],
                            dt = 8191 & at,
                            lt = at >>> 13,
                            ct = 0 | f[9],
                            pt = 8191 & ct,
                            mt = ct >>> 13;
                        e.negative = t.negative ^ r.negative, e.length = 19;
                        var vt = (u + (i = Math.imul(d, D)) | 0) + ((8191 & (n = (n = Math.imul(d, B)) + Math.imul(l, D) | 0)) << 13) | 0;
                        u = ((o = Math.imul(l, B)) + (n >>> 13) | 0) + (vt >>> 26) | 0, vt &= 67108863, i = Math.imul(p, D), n = (n = Math.imul(p, B)) + Math.imul(m, D) | 0, o = Math.imul(m, B);
                        var gt = (u + (i = i + Math.imul(d, G) | 0) | 0) + ((8191 & (n = (n = n + Math.imul(d, V) | 0) + Math.imul(l, G) | 0)) << 13) | 0;
                        u = ((o = o + Math.imul(l, V) | 0) + (n >>> 13) | 0) + (gt >>> 26) | 0, gt &= 67108863, i = Math.imul(g, D), n = (n = Math.imul(g, B)) + Math.imul(b, D) | 0, o = Math.imul(b, B), i = i + Math.imul(p, G) | 0, n = (n = n + Math.imul(p, V) | 0) + Math.imul(m, G) | 0, o = o + Math.imul(m, V) | 0;
                        var bt = (u + (i = i + Math.imul(d, Z) | 0) | 0) + ((8191 & (n = (n = n + Math.imul(d, J) | 0) + Math.imul(l, Z) | 0)) << 13) | 0;
                        u = ((o = o + Math.imul(l, J) | 0) + (n >>> 13) | 0) + (bt >>> 26) | 0, bt &= 67108863, i = Math.imul(M, D), n = (n = Math.imul(M, B)) + Math.imul(w, D) | 0, o = Math.imul(w, B), i = i + Math.imul(g, G) | 0, n = (n = n + Math.imul(g, V) | 0) + Math.imul(b, G) | 0, o = o + Math.imul(b, V) | 0, i = i + Math.imul(p, Z) | 0, n = (n = n + Math.imul(p, J) | 0) + Math.imul(m, Z) | 0, o = o + Math.imul(m, J) | 0;
                        var yt = (u + (i = i + Math.imul(d, H) | 0) | 0) + ((8191 & (n = (n = n + Math.imul(d, $) | 0) + Math.imul(l, H) | 0)) << 13) | 0;
                        u = ((o = o + Math.imul(l, $) | 0) + (n >>> 13) | 0) + (yt >>> 26) | 0, yt &= 67108863, i = Math.imul(A, D), n = (n = Math.imul(A, B)) + Math.imul(E, D) | 0, o = Math.imul(E, B), i = i + Math.imul(M, G) | 0, n = (n = n + Math.imul(M, V) | 0) + Math.imul(w, G) | 0, o = o + Math.imul(w, V) | 0, i = i + Math.imul(g, Z) | 0, n = (n = n + Math.imul(g, J) | 0) + Math.imul(b, Z) | 0, o = o + Math.imul(b, J) | 0, i = i + Math.imul(p, H) | 0, n = (n = n + Math.imul(p, $) | 0) + Math.imul(m, H) | 0, o = o + Math.imul(m, $) | 0;
                        var Mt = (u + (i = i + Math.imul(d, Q) | 0) | 0) + ((8191 & (n = (n = n + Math.imul(d, tt) | 0) + Math.imul(l, Q) | 0)) << 13) | 0;
                        u = ((o = o + Math.imul(l, tt) | 0) + (n >>> 13) | 0) + (Mt >>> 26) | 0, Mt &= 67108863, i = Math.imul(S, D), n = (n = Math.imul(S, B)) + Math.imul(N, D) | 0, o = Math.imul(N, B), i = i + Math.imul(A, G) | 0, n = (n = n + Math.imul(A, V) | 0) + Math.imul(E, G) | 0, o = o + Math.imul(E, V) | 0, i = i + Math.imul(M, Z) | 0, n = (n = n + Math.imul(M, J) | 0) + Math.imul(w, Z) | 0, o = o + Math.imul(w, J) | 0, i = i + Math.imul(g, H) | 0, n = (n = n + Math.imul(g, $) | 0) + Math.imul(b, H) | 0, o = o + Math.imul(b, $) | 0, i = i + Math.imul(p, Q) | 0, n = (n = n + Math.imul(p, tt) | 0) + Math.imul(m, Q) | 0, o = o + Math.imul(m, tt) | 0;
                        var wt = (u + (i = i + Math.imul(d, et) | 0) | 0) + ((8191 & (n = (n = n + Math.imul(d, it) | 0) + Math.imul(l, et) | 0)) << 13) | 0;
                        u = ((o = o + Math.imul(l, it) | 0) + (n >>> 13) | 0) + (wt >>> 26) | 0, wt &= 67108863, i = Math.imul(R, D), n = (n = Math.imul(R, B)) + Math.imul(x, D) | 0, o = Math.imul(x, B), i = i + Math.imul(S, G) | 0, n = (n = n + Math.imul(S, V) | 0) + Math.imul(N, G) | 0, o = o + Math.imul(N, V) | 0, i = i + Math.imul(A, Z) | 0, n = (n = n + Math.imul(A, J) | 0) + Math.imul(E, Z) | 0, o = o + Math.imul(E, J) | 0, i = i + Math.imul(M, H) | 0, n = (n = n + Math.imul(M, $) | 0) + Math.imul(w, H) | 0, o = o + Math.imul(w, $) | 0, i = i + Math.imul(g, Q) | 0, n = (n = n + Math.imul(g, tt) | 0) + Math.imul(b, Q) | 0, o = o + Math.imul(b, tt) | 0, i = i + Math.imul(p, et) | 0, n = (n = n + Math.imul(p, it) | 0) + Math.imul(m, et) | 0, o = o + Math.imul(m, it) | 0;
                        var _t = (u + (i = i + Math.imul(d, ot) | 0) | 0) + ((8191 & (n = (n = n + Math.imul(d, st) | 0) + Math.imul(l, ot) | 0)) << 13) | 0;
                        u = ((o = o + Math.imul(l, st) | 0) + (n >>> 13) | 0) + (_t >>> 26) | 0, _t &= 67108863, i = Math.imul(j, D), n = (n = Math.imul(j, B)) + Math.imul(L, D) | 0, o = Math.imul(L, B), i = i + Math.imul(R, G) | 0, n = (n = n + Math.imul(R, V) | 0) + Math.imul(x, G) | 0, o = o + Math.imul(x, V) | 0, i = i + Math.imul(S, Z) | 0, n = (n = n + Math.imul(S, J) | 0) + Math.imul(N, Z) | 0, o = o + Math.imul(N, J) | 0, i = i + Math.imul(A, H) | 0, n = (n = n + Math.imul(A, $) | 0) + Math.imul(E, H) | 0, o = o + Math.imul(E, $) | 0, i = i + Math.imul(M, Q) | 0, n = (n = n + Math.imul(M, tt) | 0) + Math.imul(w, Q) | 0, o = o + Math.imul(w, tt) | 0, i = i + Math.imul(g, et) | 0, n = (n = n + Math.imul(g, it) | 0) + Math.imul(b, et) | 0, o = o + Math.imul(b, it) | 0, i = i + Math.imul(p, ot) | 0, n = (n = n + Math.imul(p, st) | 0) + Math.imul(m, ot) | 0, o = o + Math.imul(m, st) | 0;
                        var At = (u + (i = i + Math.imul(d, ht) | 0) | 0) + ((8191 & (n = (n = n + Math.imul(d, ut) | 0) + Math.imul(l, ht) | 0)) << 13) | 0;
                        u = ((o = o + Math.imul(l, ut) | 0) + (n >>> 13) | 0) + (At >>> 26) | 0, At &= 67108863, i = Math.imul(k, D), n = (n = Math.imul(k, B)) + Math.imul(U, D) | 0, o = Math.imul(U, B), i = i + Math.imul(j, G) | 0, n = (n = n + Math.imul(j, V) | 0) + Math.imul(L, G) | 0, o = o + Math.imul(L, V) | 0, i = i + Math.imul(R, Z) | 0, n = (n = n + Math.imul(R, J) | 0) + Math.imul(x, Z) | 0, o = o + Math.imul(x, J) | 0, i = i + Math.imul(S, H) | 0, n = (n = n + Math.imul(S, $) | 0) + Math.imul(N, H) | 0, o = o + Math.imul(N, $) | 0, i = i + Math.imul(A, Q) | 0, n = (n = n + Math.imul(A, tt) | 0) + Math.imul(E, Q) | 0, o = o + Math.imul(E, tt) | 0, i = i + Math.imul(M, et) | 0, n = (n = n + Math.imul(M, it) | 0) + Math.imul(w, et) | 0, o = o + Math.imul(w, it) | 0, i = i + Math.imul(g, ot) | 0, n = (n = n + Math.imul(g, st) | 0) + Math.imul(b, ot) | 0, o = o + Math.imul(b, st) | 0, i = i + Math.imul(p, ht) | 0, n = (n = n + Math.imul(p, ut) | 0) + Math.imul(m, ht) | 0, o = o + Math.imul(m, ut) | 0;
                        var Et = (u + (i = i + Math.imul(d, dt) | 0) | 0) + ((8191 & (n = (n = n + Math.imul(d, lt) | 0) + Math.imul(l, dt) | 0)) << 13) | 0;
                        u = ((o = o + Math.imul(l, lt) | 0) + (n >>> 13) | 0) + (Et >>> 26) | 0, Et &= 67108863, i = Math.imul(q, D), n = (n = Math.imul(q, B)) + Math.imul(C, D) | 0, o = Math.imul(C, B), i = i + Math.imul(k, G) | 0, n = (n = n + Math.imul(k, V) | 0) + Math.imul(U, G) | 0, o = o + Math.imul(U, V) | 0, i = i + Math.imul(j, Z) | 0, n = (n = n + Math.imul(j, J) | 0) + Math.imul(L, Z) | 0, o = o + Math.imul(L, J) | 0, i = i + Math.imul(R, H) | 0, n = (n = n + Math.imul(R, $) | 0) + Math.imul(x, H) | 0, o = o + Math.imul(x, $) | 0, i = i + Math.imul(S, Q) | 0, n = (n = n + Math.imul(S, tt) | 0) + Math.imul(N, Q) | 0, o = o + Math.imul(N, tt) | 0, i = i + Math.imul(A, et) | 0, n = (n = n + Math.imul(A, it) | 0) + Math.imul(E, et) | 0, o = o + Math.imul(E, it) | 0, i = i + Math.imul(M, ot) | 0, n = (n = n + Math.imul(M, st) | 0) + Math.imul(w, ot) | 0, o = o + Math.imul(w, st) | 0, i = i + Math.imul(g, ht) | 0, n = (n = n + Math.imul(g, ut) | 0) + Math.imul(b, ht) | 0, o = o + Math.imul(b, ut) | 0, i = i + Math.imul(p, dt) | 0, n = (n = n + Math.imul(p, lt) | 0) + Math.imul(m, dt) | 0, o = o + Math.imul(m, lt) | 0;
                        var It = (u + (i = i + Math.imul(d, pt) | 0) | 0) + ((8191 & (n = (n = n + Math.imul(d, mt) | 0) + Math.imul(l, pt) | 0)) << 13) | 0;
                        u = ((o = o + Math.imul(l, mt) | 0) + (n >>> 13) | 0) + (It >>> 26) | 0, It &= 67108863, i = Math.imul(q, G), n = (n = Math.imul(q, V)) + Math.imul(C, G) | 0, o = Math.imul(C, V), i = i + Math.imul(k, Z) | 0, n = (n = n + Math.imul(k, J) | 0) + Math.imul(U, Z) | 0, o = o + Math.imul(U, J) | 0, i = i + Math.imul(j, H) | 0, n = (n = n + Math.imul(j, $) | 0) + Math.imul(L, H) | 0, o = o + Math.imul(L, $) | 0, i = i + Math.imul(R, Q) | 0, n = (n = n + Math.imul(R, tt) | 0) + Math.imul(x, Q) | 0, o = o + Math.imul(x, tt) | 0, i = i + Math.imul(S, et) | 0, n = (n = n + Math.imul(S, it) | 0) + Math.imul(N, et) | 0, o = o + Math.imul(N, it) | 0, i = i + Math.imul(A, ot) | 0, n = (n = n + Math.imul(A, st) | 0) + Math.imul(E, ot) | 0, o = o + Math.imul(E, st) | 0, i = i + Math.imul(M, ht) | 0, n = (n = n + Math.imul(M, ut) | 0) + Math.imul(w, ht) | 0, o = o + Math.imul(w, ut) | 0, i = i + Math.imul(g, dt) | 0, n = (n = n + Math.imul(g, lt) | 0) + Math.imul(b, dt) | 0, o = o + Math.imul(b, lt) | 0;
                        var St = (u + (i = i + Math.imul(p, pt) | 0) | 0) + ((8191 & (n = (n = n + Math.imul(p, mt) | 0) + Math.imul(m, pt) | 0)) << 13) | 0;
                        u = ((o = o + Math.imul(m, mt) | 0) + (n >>> 13) | 0) + (St >>> 26) | 0, St &= 67108863, i = Math.imul(q, Z), n = (n = Math.imul(q, J)) + Math.imul(C, Z) | 0, o = Math.imul(C, J), i = i + Math.imul(k, H) | 0, n = (n = n + Math.imul(k, $) | 0) + Math.imul(U, H) | 0, o = o + Math.imul(U, $) | 0, i = i + Math.imul(j, Q) | 0, n = (n = n + Math.imul(j, tt) | 0) + Math.imul(L, Q) | 0, o = o + Math.imul(L, tt) | 0, i = i + Math.imul(R, et) | 0, n = (n = n + Math.imul(R, it) | 0) + Math.imul(x, et) | 0, o = o + Math.imul(x, it) | 0, i = i + Math.imul(S, ot) | 0, n = (n = n + Math.imul(S, st) | 0) + Math.imul(N, ot) | 0, o = o + Math.imul(N, st) | 0, i = i + Math.imul(A, ht) | 0, n = (n = n + Math.imul(A, ut) | 0) + Math.imul(E, ht) | 0, o = o + Math.imul(E, ut) | 0, i = i + Math.imul(M, dt) | 0, n = (n = n + Math.imul(M, lt) | 0) + Math.imul(w, dt) | 0, o = o + Math.imul(w, lt) | 0;
                        var Nt = (u + (i = i + Math.imul(g, pt) | 0) | 0) + ((8191 & (n = (n = n + Math.imul(g, mt) | 0) + Math.imul(b, pt) | 0)) << 13) | 0;
                        u = ((o = o + Math.imul(b, mt) | 0) + (n >>> 13) | 0) + (Nt >>> 26) | 0, Nt &= 67108863, i = Math.imul(q, H), n = (n = Math.imul(q, $)) + Math.imul(C, H) | 0, o = Math.imul(C, $), i = i + Math.imul(k, Q) | 0, n = (n = n + Math.imul(k, tt) | 0) + Math.imul(U, Q) | 0, o = o + Math.imul(U, tt) | 0, i = i + Math.imul(j, et) | 0, n = (n = n + Math.imul(j, it) | 0) + Math.imul(L, et) | 0, o = o + Math.imul(L, it) | 0, i = i + Math.imul(R, ot) | 0, n = (n = n + Math.imul(R, st) | 0) + Math.imul(x, ot) | 0, o = o + Math.imul(x, st) | 0, i = i + Math.imul(S, ht) | 0, n = (n = n + Math.imul(S, ut) | 0) + Math.imul(N, ht) | 0, o = o + Math.imul(N, ut) | 0, i = i + Math.imul(A, dt) | 0, n = (n = n + Math.imul(A, lt) | 0) + Math.imul(E, dt) | 0, o = o + Math.imul(E, lt) | 0;
                        var Ot = (u + (i = i + Math.imul(M, pt) | 0) | 0) + ((8191 & (n = (n = n + Math.imul(M, mt) | 0) + Math.imul(w, pt) | 0)) << 13) | 0;
                        u = ((o = o + Math.imul(w, mt) | 0) + (n >>> 13) | 0) + (Ot >>> 26) | 0, Ot &= 67108863, i = Math.imul(q, Q), n = (n = Math.imul(q, tt)) + Math.imul(C, Q) | 0, o = Math.imul(C, tt), i = i + Math.imul(k, et) | 0, n = (n = n + Math.imul(k, it) | 0) + Math.imul(U, et) | 0, o = o + Math.imul(U, it) | 0, i = i + Math.imul(j, ot) | 0, n = (n = n + Math.imul(j, st) | 0) + Math.imul(L, ot) | 0, o = o + Math.imul(L, st) | 0, i = i + Math.imul(R, ht) | 0, n = (n = n + Math.imul(R, ut) | 0) + Math.imul(x, ht) | 0, o = o + Math.imul(x, ut) | 0, i = i + Math.imul(S, dt) | 0, n = (n = n + Math.imul(S, lt) | 0) + Math.imul(N, dt) | 0, o = o + Math.imul(N, lt) | 0;
                        var Rt = (u + (i = i + Math.imul(A, pt) | 0) | 0) + ((8191 & (n = (n = n + Math.imul(A, mt) | 0) + Math.imul(E, pt) | 0)) << 13) | 0;
                        u = ((o = o + Math.imul(E, mt) | 0) + (n >>> 13) | 0) + (Rt >>> 26) | 0, Rt &= 67108863, i = Math.imul(q, et), n = (n = Math.imul(q, it)) + Math.imul(C, et) | 0, o = Math.imul(C, it), i = i + Math.imul(k, ot) | 0, n = (n = n + Math.imul(k, st) | 0) + Math.imul(U, ot) | 0, o = o + Math.imul(U, st) | 0, i = i + Math.imul(j, ht) | 0, n = (n = n + Math.imul(j, ut) | 0) + Math.imul(L, ht) | 0, o = o + Math.imul(L, ut) | 0, i = i + Math.imul(R, dt) | 0, n = (n = n + Math.imul(R, lt) | 0) + Math.imul(x, dt) | 0, o = o + Math.imul(x, lt) | 0;
                        var xt = (u + (i = i + Math.imul(S, pt) | 0) | 0) + ((8191 & (n = (n = n + Math.imul(S, mt) | 0) + Math.imul(N, pt) | 0)) << 13) | 0;
                        u = ((o = o + Math.imul(N, mt) | 0) + (n >>> 13) | 0) + (xt >>> 26) | 0, xt &= 67108863, i = Math.imul(q, ot), n = (n = Math.imul(q, st)) + Math.imul(C, ot) | 0, o = Math.imul(C, st), i = i + Math.imul(k, ht) | 0, n = (n = n + Math.imul(k, ut) | 0) + Math.imul(U, ht) | 0, o = o + Math.imul(U, ut) | 0, i = i + Math.imul(j, dt) | 0, n = (n = n + Math.imul(j, lt) | 0) + Math.imul(L, dt) | 0, o = o + Math.imul(L, lt) | 0;
                        var Pt = (u + (i = i + Math.imul(R, pt) | 0) | 0) + ((8191 & (n = (n = n + Math.imul(R, mt) | 0) + Math.imul(x, pt) | 0)) << 13) | 0;
                        u = ((o = o + Math.imul(x, mt) | 0) + (n >>> 13) | 0) + (Pt >>> 26) | 0, Pt &= 67108863, i = Math.imul(q, ht), n = (n = Math.imul(q, ut)) + Math.imul(C, ht) | 0, o = Math.imul(C, ut), i = i + Math.imul(k, dt) | 0, n = (n = n + Math.imul(k, lt) | 0) + Math.imul(U, dt) | 0, o = o + Math.imul(U, lt) | 0;
                        var jt = (u + (i = i + Math.imul(j, pt) | 0) | 0) + ((8191 & (n = (n = n + Math.imul(j, mt) | 0) + Math.imul(L, pt) | 0)) << 13) | 0;
                        u = ((o = o + Math.imul(L, mt) | 0) + (n >>> 13) | 0) + (jt >>> 26) | 0, jt &= 67108863, i = Math.imul(q, dt), n = (n = Math.imul(q, lt)) + Math.imul(C, dt) | 0, o = Math.imul(C, lt);
                        var Lt = (u + (i = i + Math.imul(k, pt) | 0) | 0) + ((8191 & (n = (n = n + Math.imul(k, mt) | 0) + Math.imul(U, pt) | 0)) << 13) | 0;
                        u = ((o = o + Math.imul(U, mt) | 0) + (n >>> 13) | 0) + (Lt >>> 26) | 0, Lt &= 67108863;
                        var Tt = (u + (i = Math.imul(q, pt)) | 0) + ((8191 & (n = (n = Math.imul(q, mt)) + Math.imul(C, pt) | 0)) << 13) | 0;
                        return u = ((o = Math.imul(C, mt)) + (n >>> 13) | 0) + (Tt >>> 26) | 0, Tt &= 67108863, h[0] = vt, h[1] = gt, h[2] = bt, h[3] = yt, h[4] = Mt, h[5] = wt, h[6] = _t, h[7] = At, h[8] = Et, h[9] = It, h[10] = St, h[11] = Nt, h[12] = Ot, h[13] = Rt, h[14] = xt, h[15] = Pt, h[16] = jt, h[17] = Lt, h[18] = Tt, 0 !== u && (h[19] = u, e.length++), e
                    };

                    function g(t, r, e) {
                        e.negative = r.negative ^ t.negative, e.length = t.length + r.length;
                        for (var i = 0, n = 0, o = 0; o < e.length - 1; o++) {
                            var s = n;
                            n = 0;
                            for (var f = 67108863 & i, h = Math.min(o, r.length - 1), u = Math.max(0, o - t.length + 1); u <= h; u++) {
                                var a = o - u,
                                    d = (0 | t.words[a]) * (0 | r.words[u]),
                                    l = 67108863 & d;
                                f = 67108863 & (l = l + f | 0), n += (s = (s = s + (d / 67108864 | 0) | 0) + (l >>> 26) | 0) >>> 26, s &= 67108863
                            }
                            e.words[o] = f, i = s, s = n
                        }
                        return 0 !== i ? e.words[o] = i : e.length--, e._strip()
                    }

                    function b(t, r, e) {
                        return g(t, r, e)
                    }

                    function y(t, r) {
                        this.x = t, this.y = r
                    }
                    Math.imul || (v = m), o.prototype.mulTo = function(t, r) {
                        var e = this.length + t.length;
                        return 10 === this.length && 10 === t.length ? v(this, t, r) : e < 63 ? m(this, t, r) : e < 1024 ? g(this, t, r) : b(this, t, r)
                    }, y.prototype.makeRBT = function(t) {
                        for (var r = new Array(t), e = o.prototype._countBits(t) - 1, i = 0; i < t; i++) r[i] = this.revBin(i, e, t);
                        return r
                    }, y.prototype.revBin = function(t, r, e) {
                        if (0 === t || t === e - 1) return t;
                        for (var i = 0, n = 0; n < r; n++) i |= (1 & t) << r - n - 1, t >>= 1;
                        return i
                    }, y.prototype.permute = function(t, r, e, i, n, o) {
                        for (var s = 0; s < o; s++) i[s] = r[t[s]], n[s] = e[t[s]]
                    }, y.prototype.transform = function(t, r, e, i, n, o) {
                        this.permute(o, t, r, e, i, n);
                        for (var s = 1; s < n; s <<= 1)
                            for (var f = s << 1, h = Math.cos(2 * Math.PI / f), u = Math.sin(2 * Math.PI / f), a = 0; a < n; a += f)
                                for (var d = h, l = u, c = 0; c < s; c++) {
                                    var p = e[a + c],
                                        m = i[a + c],
                                        v = e[a + c + s],
                                        g = i[a + c + s],
                                        b = d * v - l * g;
                                    g = d * g + l * v, v = b, e[a + c] = p + v, i[a + c] = m + g, e[a + c + s] = p - v, i[a + c + s] = m - g, c !== f && (b = h * d - u * l, l = h * l + u * d, d = b)
                                }
                    }, y.prototype.guessLen13b = function(t, r) {
                        var e = 1 | Math.max(r, t),
                            i = 1 & e,
                            n = 0;
                        for (e = e / 2 | 0; e; e >>>= 1) n++;
                        return 1 << n + 1 + i
                    }, y.prototype.conjugate = function(t, r, e) {
                        if (!(e <= 1))
                            for (var i = 0; i < e / 2; i++) {
                                var n = t[i];
                                t[i] = t[e - i - 1], t[e - i - 1] = n, n = r[i], r[i] = -r[e - i - 1], r[e - i - 1] = -n
                            }
                    }, y.prototype.normalize13b = function(t, r) {
                        for (var e = 0, i = 0; i < r / 2; i++) {
                            var n = 8192 * Math.round(t[2 * i + 1] / r) + Math.round(t[2 * i] / r) + e;
                            t[i] = 67108863 & n, e = n < 67108864 ? 0 : n / 67108864 | 0
                        }
                        return t
                    }, y.prototype.convert13b = function(t, r, e, n) {
                        for (var o = 0, s = 0; s < r; s++) o += 0 | t[s], e[2 * s] = 8191 & o, o >>>= 13, e[2 * s + 1] = 8191 & o, o >>>= 13;
                        for (s = 2 * r; s < n; ++s) e[s] = 0;
                        i(0 === o), i(0 == (-8192 & o))
                    }, y.prototype.stub = function(t) {
                        for (var r = new Array(t), e = 0; e < t; e++) r[e] = 0;
                        return r
                    }, y.prototype.mulp = function(t, r, e) {
                        var i = 2 * this.guessLen13b(t.length, r.length),
                            n = this.makeRBT(i),
                            o = this.stub(i),
                            s = new Array(i),
                            f = new Array(i),
                            h = new Array(i),
                            u = new Array(i),
                            a = new Array(i),
                            d = new Array(i),
                            l = e.words;
                        l.length = i, this.convert13b(t.words, t.length, s, i), this.convert13b(r.words, r.length, u, i), this.transform(s, o, f, h, i, n), this.transform(u, o, a, d, i, n);
                        for (var c = 0; c < i; c++) {
                            var p = f[c] * a[c] - h[c] * d[c];
                            h[c] = f[c] * d[c] + h[c] * a[c], f[c] = p
                        }
                        return this.conjugate(f, h, i), this.transform(f, h, l, o, i, n), this.conjugate(l, o, i), this.normalize13b(l, i), e.negative = t.negative ^ r.negative, e.length = t.length + r.length, e._strip()
                    }, o.prototype.mul = function(t) {
                        var r = new o(null);
                        return r.words = new Array(this.length + t.length), this.mulTo(t, r)
                    }, o.prototype.mulf = function(t) {
                        var r = new o(null);
                        return r.words = new Array(this.length + t.length), b(this, t, r)
                    }, o.prototype.imul = function(t) {
                        return this.clone().mulTo(t, this)
                    }, o.prototype.imuln = function(t) {
                        var r = t < 0;
                        r && (t = -t), i("number" == typeof t), i(t < 67108864);
                        for (var e = 0, n = 0; n < this.length; n++) {
                            var o = (0 | this.words[n]) * t,
                                s = (67108863 & o) + (67108863 & e);
                            e >>= 26, e += o / 67108864 | 0, e += s >>> 26, this.words[n] = 67108863 & s
                        }
                        return 0 !== e && (this.words[n] = e, this.length++), r ? this.ineg() : this
                    }, o.prototype.muln = function(t) {
                        return this.clone().imuln(t)
                    }, o.prototype.sqr = function() {
                        return this.mul(this)
                    }, o.prototype.isqr = function() {
                        return this.imul(this.clone())
                    }, o.prototype.pow = function(t) {
                        var r = function(t) {
                            for (var r = new Array(t.bitLength()), e = 0; e < r.length; e++) {
                                var i = e / 26 | 0,
                                    n = e % 26;
                                r[e] = t.words[i] >>> n & 1
                            }
                            return r
                        }(t);
                        if (0 === r.length) return new o(1);
                        for (var e = this, i = 0; i < r.length && 0 === r[i]; i++, e = e.sqr());
                        if (++i < r.length)
                            for (var n = e.sqr(); i < r.length; i++, n = n.sqr()) 0 !== r[i] && (e = e.mul(n));
                        return e
                    }, o.prototype.iushln = function(t) {
                        i("number" == typeof t && t >= 0);
                        var r, e = t % 26,
                            n = (t - e) / 26,
                            o = 67108863 >>> 26 - e << 26 - e;
                        if (0 !== e) {
                            var s = 0;
                            for (r = 0; r < this.length; r++) {
                                var f = this.words[r] & o,
                                    h = (0 | this.words[r]) - f << e;
                                this.words[r] = h | s, s = f >>> 26 - e
                            }
                            s && (this.words[r] = s, this.length++)
                        }
                        if (0 !== n) {
                            for (r = this.length - 1; r >= 0; r--) this.words[r + n] = this.words[r];
                            for (r = 0; r < n; r++) this.words[r] = 0;
                            this.length += n
                        }
                        return this._strip()
                    }, o.prototype.ishln = function(t) {
                        return i(0 === this.negative), this.iushln(t)
                    }, o.prototype.iushrn = function(t, r, e) {
                        var n;
                        i("number" == typeof t && t >= 0), n = r ? (r - r % 26) / 26 : 0;
                        var o = t % 26,
                            s = Math.min((t - o) / 26, this.length),
                            f = 67108863 ^ 67108863 >>> o << o,
                            h = e;
                        if (n -= s, n = Math.max(0, n), h) {
                            for (var u = 0; u < s; u++) h.words[u] = this.words[u];
                            h.length = s
                        }
                        if (0 === s);
                        else if (this.length > s)
                            for (this.length -= s, u = 0; u < this.length; u++) this.words[u] = this.words[u + s];
                        else this.words[0] = 0, this.length = 1;
                        var a = 0;
                        for (u = this.length - 1; u >= 0 && (0 !== a || u >= n); u--) {
                            var d = 0 | this.words[u];
                            this.words[u] = a << 26 - o | d >>> o, a = d & f
                        }
                        return h && 0 !== a && (h.words[h.length++] = a), 0 === this.length && (this.words[0] = 0, this.length = 1), this._strip()
                    }, o.prototype.ishrn = function(t, r, e) {
                        return i(0 === this.negative), this.iushrn(t, r, e)
                    }, o.prototype.shln = function(t) {
                        return this.clone().ishln(t)
                    }, o.prototype.ushln = function(t) {
                        return this.clone().iushln(t)
                    }, o.prototype.shrn = function(t) {
                        return this.clone().ishrn(t)
                    }, o.prototype.ushrn = function(t) {
                        return this.clone().iushrn(t)
                    }, o.prototype.testn = function(t) {
                        i("number" == typeof t && t >= 0);
                        var r = t % 26,
                            e = (t - r) / 26,
                            n = 1 << r;
                        return !(this.length <= e) && !!(this.words[e] & n)
                    }, o.prototype.imaskn = function(t) {
                        i("number" == typeof t && t >= 0);
                        var r = t % 26,
                            e = (t - r) / 26;
                        if (i(0 === this.negative, "imaskn works only with positive numbers"), this.length <= e) return this;
                        if (0 !== r && e++, this.length = Math.min(e, this.length), 0 !== r) {
                            var n = 67108863 ^ 67108863 >>> r << r;
                            this.words[this.length - 1] &= n
                        }
                        return this._strip()
                    }, o.prototype.maskn = function(t) {
                        return this.clone().imaskn(t)
                    }, o.prototype.iaddn = function(t) {
                        return i("number" == typeof t), i(t < 67108864), t < 0 ? this.isubn(-t) : 0 !== this.negative ? 1 === this.length && (0 | this.words[0]) <= t ? (this.words[0] = t - (0 | this.words[0]), this.negative = 0, this) : (this.negative = 0, this.isubn(t), this.negative = 1, this) : this._iaddn(t)
                    }, o.prototype._iaddn = function(t) {
                        this.words[0] += t;
                        for (var r = 0; r < this.length && this.words[r] >= 67108864; r++) this.words[r] -= 67108864, r === this.length - 1 ? this.words[r + 1] = 1 : this.words[r + 1]++;
                        return this.length = Math.max(this.length, r + 1), this
                    }, o.prototype.isubn = function(t) {
                        if (i("number" == typeof t), i(t < 67108864), t < 0) return this.iaddn(-t);
                        if (0 !== this.negative) return this.negative = 0, this.iaddn(t), this.negative = 1, this;
                        if (this.words[0] -= t, 1 === this.length && this.words[0] < 0) this.words[0] = -this.words[0], this.negative = 1;
                        else
                            for (var r = 0; r < this.length && this.words[r] < 0; r++) this.words[r] += 67108864, this.words[r + 1] -= 1;
                        return this._strip()
                    }, o.prototype.addn = function(t) {
                        return this.clone().iaddn(t)
                    }, o.prototype.subn = function(t) {
                        return this.clone().isubn(t)
                    }, o.prototype.iabs = function() {
                        return this.negative = 0, this
                    }, o.prototype.abs = function() {
                        return this.clone().iabs()
                    }, o.prototype._ishlnsubmul = function(t, r, e) {
                        var n, o, s = t.length + e;
                        this._expand(s);
                        var f = 0;
                        for (n = 0; n < t.length; n++) {
                            o = (0 | this.words[n + e]) + f;
                            var h = (0 | t.words[n]) * r;
                            f = ((o -= 67108863 & h) >> 26) - (h / 67108864 | 0), this.words[n + e] = 67108863 & o
                        }
                        for (; n < this.length - e; n++) f = (o = (0 | this.words[n + e]) + f) >> 26, this.words[n + e] = 67108863 & o;
                        if (0 === f) return this._strip();
                        for (i(-1 === f), f = 0, n = 0; n < this.length; n++) f = (o = -(0 | this.words[n]) + f) >> 26, this.words[n] = 67108863 & o;
                        return this.negative = 1, this._strip()
                    }, o.prototype._wordDiv = function(t, r) {
                        var e = (this.length, t.length),
                            i = this.clone(),
                            n = t,
                            s = 0 | n.words[n.length - 1];
                        0 !== (e = 26 - this._countBits(s)) && (n = n.ushln(e), i.iushln(e), s = 0 | n.words[n.length - 1]);
                        var f, h = i.length - n.length;
                        if ("mod" !== r) {
                            (f = new o(null)).length = h + 1, f.words = new Array(f.length);
                            for (var u = 0; u < f.length; u++) f.words[u] = 0
                        }
                        var a = i.clone()._ishlnsubmul(n, 1, h);
                        0 === a.negative && (i = a, f && (f.words[h] = 1));
                        for (var d = h - 1; d >= 0; d--) {
                            var l = 67108864 * (0 | i.words[n.length + d]) + (0 | i.words[n.length + d - 1]);
                            for (l = Math.min(l / s | 0, 67108863), i._ishlnsubmul(n, l, d); 0 !== i.negative;) l--, i.negative = 0, i._ishlnsubmul(n, 1, d), i.isZero() || (i.negative ^= 1);
                            f && (f.words[d] = l)
                        }
                        return f && f._strip(), i._strip(), "div" !== r && 0 !== e && i.iushrn(e), {
                            div: f || null,
                            mod: i
                        }
                    }, o.prototype.divmod = function(t, r, e) {
                        return i(!t.isZero()), this.isZero() ? {
                            div: new o(0),
                            mod: new o(0)
                        } : 0 !== this.negative && 0 === t.negative ? (f = this.neg().divmod(t, r), "mod" !== r && (n = f.div.neg()), "div" !== r && (s = f.mod.neg(), e && 0 !== s.negative && s.iadd(t)), {
                            div: n,
                            mod: s
                        }) : 0 === this.negative && 0 !== t.negative ? (f = this.divmod(t.neg(), r), "mod" !== r && (n = f.div.neg()), {
                            div: n,
                            mod: f.mod
                        }) : 0 != (this.negative & t.negative) ? (f = this.neg().divmod(t.neg(), r), "div" !== r && (s = f.mod.neg(), e && 0 !== s.negative && s.isub(t)), {
                            div: f.div,
                            mod: s
                        }) : t.length > this.length || this.cmp(t) < 0 ? {
                            div: new o(0),
                            mod: this
                        } : 1 === t.length ? "div" === r ? {
                            div: this.divn(t.words[0]),
                            mod: null
                        } : "mod" === r ? {
                            div: null,
                            mod: new o(this.modrn(t.words[0]))
                        } : {
                            div: this.divn(t.words[0]),
                            mod: new o(this.modrn(t.words[0]))
                        } : this._wordDiv(t, r);
                        var n, s, f
                    }, o.prototype.div = function(t) {
                        return this.divmod(t, "div", !1).div
                    }, o.prototype.mod = function(t) {
                        return this.divmod(t, "mod", !1).mod
                    }, o.prototype.umod = function(t) {
                        return this.divmod(t, "mod", !0).mod
                    }, o.prototype.divRound = function(t) {
                        var r = this.divmod(t);
                        if (r.mod.isZero()) return r.div;
                        var e = 0 !== r.div.negative ? r.mod.isub(t) : r.mod,
                            i = t.ushrn(1),
                            n = t.andln(1),
                            o = e.cmp(i);
                        return o < 0 || 1 === n && 0 === o ? r.div : 0 !== r.div.negative ? r.div.isubn(1) : r.div.iaddn(1)
                    }, o.prototype.modrn = function(t) {
                        var r = t < 0;
                        r && (t = -t), i(t <= 67108863);
                        for (var e = (1 << 26) % t, n = 0, o = this.length - 1; o >= 0; o--) n = (e * n + (0 | this.words[o])) % t;
                        return r ? -n : n
                    }, o.prototype.modn = function(t) {
                        return this.modrn(t)
                    }, o.prototype.idivn = function(t) {
                        var r = t < 0;
                        r && (t = -t), i(t <= 67108863);
                        for (var e = 0, n = this.length - 1; n >= 0; n--) {
                            var o = (0 | this.words[n]) + 67108864 * e;
                            this.words[n] = o / t | 0, e = o % t
                        }
                        return this._strip(), r ? this.ineg() : this
                    }, o.prototype.divn = function(t) {
                        return this.clone().idivn(t)
                    }, o.prototype.egcd = function(t) {
                        i(0 === t.negative), i(!t.isZero());
                        var r = this,
                            e = t.clone();
                        r = 0 !== r.negative ? r.umod(t) : r.clone();
                        for (var n = new o(1), s = new o(0), f = new o(0), h = new o(1), u = 0; r.isEven() && e.isEven();) r.iushrn(1), e.iushrn(1), ++u;
                        for (var a = e.clone(), d = r.clone(); !r.isZero();) {
                            for (var l = 0, c = 1; 0 == (r.words[0] & c) && l < 26; ++l, c <<= 1);
                            if (l > 0)
                                for (r.iushrn(l); l-- > 0;)(n.isOdd() || s.isOdd()) && (n.iadd(a), s.isub(d)), n.iushrn(1), s.iushrn(1);
                            for (var p = 0, m = 1; 0 == (e.words[0] & m) && p < 26; ++p, m <<= 1);
                            if (p > 0)
                                for (e.iushrn(p); p-- > 0;)(f.isOdd() || h.isOdd()) && (f.iadd(a), h.isub(d)), f.iushrn(1), h.iushrn(1);
                            r.cmp(e) >= 0 ? (r.isub(e), n.isub(f), s.isub(h)) : (e.isub(r), f.isub(n), h.isub(s))
                        }
                        return {
                            a: f,
                            b: h,
                            gcd: e.iushln(u)
                        }
                    }, o.prototype._invmp = function(t) {
                        i(0 === t.negative), i(!t.isZero());
                        var r = this,
                            e = t.clone();
                        r = 0 !== r.negative ? r.umod(t) : r.clone();
                        for (var n, s = new o(1), f = new o(0), h = e.clone(); r.cmpn(1) > 0 && e.cmpn(1) > 0;) {
                            for (var u = 0, a = 1; 0 == (r.words[0] & a) && u < 26; ++u, a <<= 1);
                            if (u > 0)
                                for (r.iushrn(u); u-- > 0;) s.isOdd() && s.iadd(h), s.iushrn(1);
                            for (var d = 0, l = 1; 0 == (e.words[0] & l) && d < 26; ++d, l <<= 1);
                            if (d > 0)
                                for (e.iushrn(d); d-- > 0;) f.isOdd() && f.iadd(h), f.iushrn(1);
                            r.cmp(e) >= 0 ? (r.isub(e), s.isub(f)) : (e.isub(r), f.isub(s))
                        }
                        return (n = 0 === r.cmpn(1) ? s : f).cmpn(0) < 0 && n.iadd(t), n
                    }, o.prototype.gcd = function(t) {
                        if (this.isZero()) return t.abs();
                        if (t.isZero()) return this.abs();
                        var r = this.clone(),
                            e = t.clone();
                        r.negative = 0, e.negative = 0;
                        for (var i = 0; r.isEven() && e.isEven(); i++) r.iushrn(1), e.iushrn(1);
                        for (;;) {
                            for (; r.isEven();) r.iushrn(1);
                            for (; e.isEven();) e.iushrn(1);
                            var n = r.cmp(e);
                            if (n < 0) {
                                var o = r;
                                r = e, e = o
                            } else if (0 === n || 0 === e.cmpn(1)) break;
                            r.isub(e)
                        }
                        return e.iushln(i)
                    }, o.prototype.invm = function(t) {
                        return this.egcd(t).a.umod(t)
                    }, o.prototype.isEven = function() {
                        return 0 == (1 & this.words[0])
                    }, o.prototype.isOdd = function() {
                        return 1 == (1 & this.words[0])
                    }, o.prototype.andln = function(t) {
                        return this.words[0] & t
                    }, o.prototype.bincn = function(t) {
                        i("number" == typeof t);
                        var r = t % 26,
                            e = (t - r) / 26,
                            n = 1 << r;
                        if (this.length <= e) return this._expand(e + 1), this.words[e] |= n, this;
                        for (var o = n, s = e; 0 !== o && s < this.length; s++) {
                            var f = 0 | this.words[s];
                            o = (f += o) >>> 26, f &= 67108863, this.words[s] = f
                        }
                        return 0 !== o && (this.words[s] = o, this.length++), this
                    }, o.prototype.isZero = function() {
                        return 1 === this.length && 0 === this.words[0]
                    }, o.prototype.cmpn = function(t) {
                        var r, e = t < 0;
                        if (0 !== this.negative && !e) return -1;
                        if (0 === this.negative && e) return 1;
                        if (this._strip(), this.length > 1) r = 1;
                        else {
                            e && (t = -t), i(t <= 67108863, "Number is too big");
                            var n = 0 | this.words[0];
                            r = n === t ? 0 : n < t ? -1 : 1
                        }
                        return 0 !== this.negative ? 0 | -r : r
                    }, o.prototype.cmp = function(t) {
                        if (0 !== this.negative && 0 === t.negative) return -1;
                        if (0 === this.negative && 0 !== t.negative) return 1;
                        var r = this.ucmp(t);
                        return 0 !== this.negative ? 0 | -r : r
                    }, o.prototype.ucmp = function(t) {
                        if (this.length > t.length) return 1;
                        if (this.length < t.length) return -1;
                        for (var r = 0, e = this.length - 1; e >= 0; e--) {
                            var i = 0 | this.words[e],
                                n = 0 | t.words[e];
                            if (i !== n) {
                                i < n ? r = -1 : i > n && (r = 1);
                                break
                            }
                        }
                        return r
                    }, o.prototype.gtn = function(t) {
                        return 1 === this.cmpn(t)
                    }, o.prototype.gt = function(t) {
                        return 1 === this.cmp(t)
                    }, o.prototype.gten = function(t) {
                        return this.cmpn(t) >= 0
                    }, o.prototype.gte = function(t) {
                        return this.cmp(t) >= 0
                    }, o.prototype.ltn = function(t) {
                        return -1 === this.cmpn(t)
                    }, o.prototype.lt = function(t) {
                        return -1 === this.cmp(t)
                    }, o.prototype.lten = function(t) {
                        return this.cmpn(t) <= 0
                    }, o.prototype.lte = function(t) {
                        return this.cmp(t) <= 0
                    }, o.prototype.eqn = function(t) {
                        return 0 === this.cmpn(t)
                    }, o.prototype.eq = function(t) {
                        return 0 === this.cmp(t)
                    }, o.red = function(t) {
                        return new S(t)
                    }, o.prototype.toRed = function(t) {
                        return i(!this.red, "Already a number in reduction context"), i(0 === this.negative, "red works only with positives"), t.convertTo(this)._forceRed(t)
                    }, o.prototype.fromRed = function() {
                        return i(this.red, "fromRed works only with numbers in reduction context"), this.red.convertFrom(this)
                    }, o.prototype._forceRed = function(t) {
                        return this.red = t, this
                    }, o.prototype.forceRed = function(t) {
                        return i(!this.red, "Already a number in reduction context"), this._forceRed(t)
                    }, o.prototype.redAdd = function(t) {
                        return i(this.red, "redAdd works only with red numbers"), this.red.add(this, t)
                    }, o.prototype.redIAdd = function(t) {
                        return i(this.red, "redIAdd works only with red numbers"), this.red.iadd(this, t)
                    }, o.prototype.redSub = function(t) {
                        return i(this.red, "redSub works only with red numbers"), this.red.sub(this, t)
                    }, o.prototype.redISub = function(t) {
                        return i(this.red, "redISub works only with red numbers"), this.red.isub(this, t)
                    }, o.prototype.redShl = function(t) {
                        return i(this.red, "redShl works only with red numbers"), this.red.shl(this, t)
                    }, o.prototype.redMul = function(t) {
                        return i(this.red, "redMul works only with red numbers"), this.red._verify2(this, t), this.red.mul(this, t)
                    }, o.prototype.redIMul = function(t) {
                        return i(this.red, "redMul works only with red numbers"), this.red._verify2(this, t), this.red.imul(this, t)
                    }, o.prototype.redSqr = function() {
                        return i(this.red, "redSqr works only with red numbers"), this.red._verify1(this), this.red.sqr(this)
                    }, o.prototype.redISqr = function() {
                        return i(this.red, "redISqr works only with red numbers"), this.red._verify1(this), this.red.isqr(this)
                    }, o.prototype.redSqrt = function() {
                        return i(this.red, "redSqrt works only with red numbers"), this.red._verify1(this), this.red.sqrt(this)
                    }, o.prototype.redInvm = function() {
                        return i(this.red, "redInvm works only with red numbers"), this.red._verify1(this), this.red.invm(this)
                    }, o.prototype.redNeg = function() {
                        return i(this.red, "redNeg works only with red numbers"), this.red._verify1(this), this.red.neg(this)
                    }, o.prototype.redPow = function(t) {
                        return i(this.red && !t.red, "redPow(normalNum)"), this.red._verify1(this), this.red.pow(this, t)
                    };
                    var M = {
                        k256: null,
                        p224: null,
                        p192: null,
                        p25519: null
                    };

                    function w(t, r) {
                        this.name = t, this.p = new o(r, 16), this.n = this.p.bitLength(), this.k = new o(1).iushln(this.n).isub(this.p), this.tmp = this._tmp()
                    }

                    function _() {
                        w.call(this, "k256", "ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffe fffffc2f")
                    }

                    function A() {
                        w.call(this, "p224", "ffffffff ffffffff ffffffff ffffffff 00000000 00000000 00000001")
                    }

                    function E() {
                        w.call(this, "p192", "ffffffff ffffffff ffffffff fffffffe ffffffff ffffffff")
                    }

                    function I() {
                        w.call(this, "25519", "7fffffffffffffff ffffffffffffffff ffffffffffffffff ffffffffffffffed")
                    }

                    function S(t) {
                        if ("string" == typeof t) {
                            var r = o._prime(t);
                            this.m = r.p, this.prime = r
                        } else i(t.gtn(1), "modulus must be greater than 1"), this.m = t, this.prime = null
                    }

                    function N(t) {
                        S.call(this, t), this.shift = this.m.bitLength(), this.shift % 26 != 0 && (this.shift += 26 - this.shift % 26), this.r = new o(1).iushln(this.shift), this.r2 = this.imod(this.r.sqr()), this.rinv = this.r._invmp(this.m), this.minv = this.rinv.mul(this.r).isubn(1).div(this.m), this.minv = this.minv.umod(this.r), this.minv = this.r.sub(this.minv)
                    }
                    w.prototype._tmp = function() {
                        var t = new o(null);
                        return t.words = new Array(Math.ceil(this.n / 13)), t
                    }, w.prototype.ireduce = function(t) {
                        var r, e = t;
                        do {
                            this.split(e, this.tmp), r = (e = (e = this.imulK(e)).iadd(this.tmp)).bitLength()
                        } while (r > this.n);
                        var i = r < this.n ? -1 : e.ucmp(this.p);
                        return 0 === i ? (e.words[0] = 0, e.length = 1) : i > 0 ? e.isub(this.p) : void 0 !== e.strip ? e.strip() : e._strip(), e
                    }, w.prototype.split = function(t, r) {
                        t.iushrn(this.n, 0, r)
                    }, w.prototype.imulK = function(t) {
                        return t.imul(this.k)
                    }, n(_, w), _.prototype.split = function(t, r) {
                        for (var e = Math.min(t.length, 9), i = 0; i < e; i++) r.words[i] = t.words[i];
                        if (r.length = e, t.length <= 9) return t.words[0] = 0, void(t.length = 1);
                        var n = t.words[9];
                        for (r.words[r.length++] = 4194303 & n, i = 10; i < t.length; i++) {
                            var o = 0 | t.words[i];
                            t.words[i - 10] = (4194303 & o) << 4 | n >>> 22, n = o
                        }
                        n >>>= 22, t.words[i - 10] = n, 0 === n && t.length > 10 ? t.length -= 10 : t.length -= 9
                    }, _.prototype.imulK = function(t) {
                        t.words[t.length] = 0, t.words[t.length + 1] = 0, t.length += 2;
                        for (var r = 0, e = 0; e < t.length; e++) {
                            var i = 0 | t.words[e];
                            r += 977 * i, t.words[e] = 67108863 & r, r = 64 * i + (r / 67108864 | 0)
                        }
                        return 0 === t.words[t.length - 1] && (t.length--, 0 === t.words[t.length - 1] && t.length--), t
                    }, n(A, w), n(E, w), n(I, w), I.prototype.imulK = function(t) {
                        for (var r = 0, e = 0; e < t.length; e++) {
                            var i = 19 * (0 | t.words[e]) + r,
                                n = 67108863 & i;
                            i >>>= 26, t.words[e] = n, r = i
                        }
                        return 0 !== r && (t.words[t.length++] = r), t
                    }, o._prime = function(t) {
                        if (M[t]) return M[t];
                        var r;
                        if ("k256" === t) r = new _;
                        else if ("p224" === t) r = new A;
                        else if ("p192" === t) r = new E;
                        else {
                            if ("p25519" !== t) throw new Error("Unknown prime " + t);
                            r = new I
                        }
                        return M[t] = r, r
                    }, S.prototype._verify1 = function(t) {
                        i(0 === t.negative, "red works only with positives"), i(t.red, "red works only with red numbers")
                    }, S.prototype._verify2 = function(t, r) {
                        i(0 == (t.negative | r.negative), "red works only with positives"), i(t.red && t.red === r.red, "red works only with red numbers")
                    }, S.prototype.imod = function(t) {
                        return this.prime ? this.prime.ireduce(t)._forceRed(this) : (a(t, t.umod(this.m)._forceRed(this)), t)
                    }, S.prototype.neg = function(t) {
                        return t.isZero() ? t.clone() : this.m.sub(t)._forceRed(this)
                    }, S.prototype.add = function(t, r) {
                        this._verify2(t, r);
                        var e = t.add(r);
                        return e.cmp(this.m) >= 0 && e.isub(this.m), e._forceRed(this)
                    }, S.prototype.iadd = function(t, r) {
                        this._verify2(t, r);
                        var e = t.iadd(r);
                        return e.cmp(this.m) >= 0 && e.isub(this.m), e
                    }, S.prototype.sub = function(t, r) {
                        this._verify2(t, r);
                        var e = t.sub(r);
                        return e.cmpn(0) < 0 && e.iadd(this.m), e._forceRed(this)
                    }, S.prototype.isub = function(t, r) {
                        this._verify2(t, r);
                        var e = t.isub(r);
                        return e.cmpn(0) < 0 && e.iadd(this.m), e
                    }, S.prototype.shl = function(t, r) {
                        return this._verify1(t), this.imod(t.ushln(r))
                    }, S.prototype.imul = function(t, r) {
                        return this._verify2(t, r), this.imod(t.imul(r))
                    }, S.prototype.mul = function(t, r) {
                        return this._verify2(t, r), this.imod(t.mul(r))
                    }, S.prototype.isqr = function(t) {
                        return this.imul(t, t.clone())
                    }, S.prototype.sqr = function(t) {
                        return this.mul(t, t)
                    }, S.prototype.sqrt = function(t) {
                        if (t.isZero()) return t.clone();
                        var r = this.m.andln(3);
                        if (i(r % 2 == 1), 3 === r) {
                            var e = this.m.add(new o(1)).iushrn(2);
                            return this.pow(t, e)
                        }
                        for (var n = this.m.subn(1), s = 0; !n.isZero() && 0 === n.andln(1);) s++, n.iushrn(1);
                        i(!n.isZero());
                        var f = new o(1).toRed(this),
                            h = f.redNeg(),
                            u = this.m.subn(1).iushrn(1),
                            a = this.m.bitLength();
                        for (a = new o(2 * a * a).toRed(this); 0 !== this.pow(a, u).cmp(h);) a.redIAdd(h);
                        for (var d = this.pow(a, n), l = this.pow(t, n.addn(1).iushrn(1)), c = this.pow(t, n), p = s; 0 !== c.cmp(f);) {
                            for (var m = c, v = 0; 0 !== m.cmp(f); v++) m = m.redSqr();
                            i(v < p);
                            var g = this.pow(d, new o(1).iushln(p - v - 1));
                            l = l.redMul(g), d = g.redSqr(), c = c.redMul(d), p = v
                        }
                        return l
                    }, S.prototype.invm = function(t) {
                        var r = t._invmp(this.m);
                        return 0 !== r.negative ? (r.negative = 0, this.imod(r).redNeg()) : this.imod(r)
                    }, S.prototype.pow = function(t, r) {
                        if (r.isZero()) return new o(1).toRed(this);
                        if (0 === r.cmpn(1)) return t.clone();
                        var e = new Array(16);
                        e[0] = new o(1).toRed(this), e[1] = t;
                        for (var i = 2; i < e.length; i++) e[i] = this.mul(e[i - 1], t);
                        var n = e[0],
                            s = 0,
                            f = 0,
                            h = r.bitLength() % 26;
                        for (0 === h && (h = 26), i = r.length - 1; i >= 0; i--) {
                            for (var u = r.words[i], a = h - 1; a >= 0; a--) {
                                var d = u >> a & 1;
                                n !== e[0] && (n = this.sqr(n)), 0 !== d || 0 !== s ? (s <<= 1, s |= d, (4 === ++f || 0 === i && 0 === a) && (n = this.mul(n, e[s]), f = 0, s = 0)) : f = 0
                            }
                            h = 26
                        }
                        return n
                    }, S.prototype.convertTo = function(t) {
                        var r = t.umod(this.m);
                        return r === t ? r.clone() : r
                    }, S.prototype.convertFrom = function(t) {
                        var r = t.clone();
                        return r.red = null, r
                    }, o.mont = function(t) {
                        return new N(t)
                    }, n(N, S), N.prototype.convertTo = function(t) {
                        return this.imod(t.ushln(this.shift))
                    }, N.prototype.convertFrom = function(t) {
                        var r = this.imod(t.mul(this.rinv));
                        return r.red = null, r
                    }, N.prototype.imul = function(t, r) {
                        if (t.isZero() || r.isZero()) return t.words[0] = 0, t.length = 1, t;
                        var e = t.imul(r),
                            i = e.maskn(this.shift).mul(this.minv).imaskn(this.shift).mul(this.m),
                            n = e.isub(i).iushrn(this.shift),
                            o = n;
                        return n.cmp(this.m) >= 0 ? o = n.isub(this.m) : n.cmpn(0) < 0 && (o = n.iadd(this.m)), o._forceRed(this)
                    }, N.prototype.mul = function(t, r) {
                        if (t.isZero() || r.isZero()) return new o(0)._forceRed(this);
                        var e = t.mul(r),
                            i = e.maskn(this.shift).mul(this.minv).imaskn(this.shift).mul(this.m),
                            n = e.isub(i).iushrn(this.shift),
                            s = n;
                        return n.cmp(this.m) >= 0 ? s = n.isub(this.m) : n.cmpn(0) < 0 && (s = n.iadd(this.m)), s._forceRed(this)
                    }, N.prototype.invm = function(t) {
                        return this.imod(t._invmp(this.m).mul(this.r2))._forceRed(this)
                    }
                }(t, this)
            }).call(this, e(81)(t))
        },
        5395: function(t, r, e) {
            "use strict";
            e.d(r, "a", (function() {
                return o
            }));
            var i = e(150),
                n = e(2379);

            function o(t) {
                return Object(i.a)(Object(n.f)(t))
            }
        },
        60: function(t, r, e) {
            "use strict";
            e.d(r, "d", (function() {
                return s
            })), e.d(r, "e", (function() {
                return f
            })), e.d(r, "f", (function() {
                return h
            })), e.d(r, "b", (function() {
                return u
            })), e.d(r, "g", (function() {
                return a
            })), e.d(r, "c", (function() {
                return c
            })), e.d(r, "a", (function() {
                return Description
            }));
            var i = e(37);
            var n = function(t, r, e, i) {
                return new(e || (e = Promise))((function(n, o) {
                    function s(t) {
                        try {
                            h(i.next(t))
                        } catch (t) {
                            o(t)
                        }
                    }

                    function f(t) {
                        try {
                            h(i.throw(t))
                        } catch (t) {
                            o(t)
                        }
                    }

                    function h(t) {
                        var r;
                        t.done ? n(t.value) : (r = t.value, r instanceof e ? r : new e((function(t) {
                            t(r)
                        }))).then(s, f)
                    }
                    h((i = i.apply(t, r || [])).next())
                }))
            };
            const o = new i.b("properties/5.7.0");

            function s(t, r, e) {
                Object.defineProperty(t, r, {
                    enumerable: !0,
                    value: e,
                    writable: !1
                })
            }

            function f(t, r) {
                for (let e = 0; e < 32; e++) {
                    if (t[r]) return t[r];
                    if (!t.prototype || "object" != typeof t.prototype) break;
                    t = Object.getPrototypeOf(t.prototype).constructor
                }
                return null
            }

            function h(t) {
                return n(this, void 0, void 0, (function*() {
                    const r = Object.keys(t).map(r => {
                        const e = t[r];
                        return Promise.resolve(e).then(t => ({
                            key: r,
                            value: t
                        }))
                    });
                    return (yield Promise.all(r)).reduce((t, r) => (t[r.key] = r.value, t), {})
                }))
            }

            function u(t, r) {
                t && "object" == typeof t || o.throwArgumentError("invalid object", "object", t), Object.keys(t).forEach(e => {
                    r[e] || o.throwArgumentError("invalid object key - " + e, "transaction:" + e, t)
                })
            }

            function a(t) {
                const r = {};
                for (const e in t) r[e] = t[e];
                return r
            }
            const d = {
                bigint: !0,
                boolean: !0,
                function: !0,
                number: !0,
                string: !0
            };

            function l(t) {
                if (function t(r) {
                        if (null == r || d[typeof r]) return !0;
                        if (Array.isArray(r) || "object" == typeof r) {
                            if (!Object.isFrozen(r)) return !1;
                            const e = Object.keys(r);
                            for (let i = 0; i < e.length; i++) {
                                let n = null;
                                try {
                                    n = r[e[i]]
                                } catch (t) {
                                    continue
                                }
                                if (!t(n)) return !1
                            }
                            return !0
                        }
                        return o.throwArgumentError("Cannot deepCopy " + typeof r, "object", r)
                    }(t)) return t;
                if (Array.isArray(t)) return Object.freeze(t.map(t => c(t)));
                if ("object" == typeof t) {
                    const r = {};
                    for (const e in t) {
                        const i = t[e];
                        void 0 !== i && s(r, e, c(i))
                    }
                    return r
                }
                return o.throwArgumentError("Cannot deepCopy " + typeof t, "object", t)
            }

            function c(t) {
                return l(t)
            }
            class Description {
                constructor(t) {
                    for (const r in t) this[r] = c(t[r])
                }
            }
        },
        933: function(t, r, e) {
            "use strict";
            e.d(r, "a", (function() {
                return lib_esm_SigningKey
            })), e.d(r, "c", (function() {
                return Z
            })), e.d(r, "b", (function() {
                return J
            }));
            var i = e(48),
                n = e.n(i),
                o = e(141),
                s = e.n(o);
            "undefined" != typeof globalThis ? globalThis : "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self && self;

            function f(t, r, e) {
                return t(e = {
                    path: r,
                    exports: {},
                    require: function(t, r) {
                        return function() {
                            throw new Error("Dynamic requires are not currently supported by @rollup/plugin-commonjs")
                        }(null == r && e.path)
                    }
                }, e.exports), e.exports
            }
            var h = u;

            function u(t, r) {
                if (!t) throw new Error(r || "Assertion failed")
            }
            u.equal = function(t, r, e) {
                if (t != r) throw new Error(e || "Assertion failed: " + t + " != " + r)
            };
            var a = f((function(t, r) {
                    var e = r;

                    function i(t) {
                        return 1 === t.length ? "0" + t : t
                    }

                    function n(t) {
                        for (var r = "", e = 0; e < t.length; e++) r += i(t[e].toString(16));
                        return r
                    }
                    e.toArray = function(t, r) {
                        if (Array.isArray(t)) return t.slice();
                        if (!t) return [];
                        var e = [];
                        if ("string" != typeof t) {
                            for (var i = 0; i < t.length; i++) e[i] = 0 | t[i];
                            return e
                        }
                        if ("hex" === r) {
                            (t = t.replace(/[^a-z0-9]+/gi, "")).length % 2 != 0 && (t = "0" + t);
                            for (i = 0; i < t.length; i += 2) e.push(parseInt(t[i] + t[i + 1], 16))
                        } else
                            for (i = 0; i < t.length; i++) {
                                var n = t.charCodeAt(i),
                                    o = n >> 8,
                                    s = 255 & n;
                                o ? e.push(o, s) : e.push(s)
                            }
                        return e
                    }, e.zero2 = i, e.toHex = n, e.encode = function(t, r) {
                        return "hex" === r ? n(t) : t
                    }
                })),
                d = f((function(t, r) {
                    var e = r;
                    e.assert = h, e.toArray = a.toArray, e.zero2 = a.zero2, e.toHex = a.toHex, e.encode = a.encode, e.getNAF = function(t, r, e) {
                        var i = new Array(Math.max(t.bitLength(), e) + 1);
                        i.fill(0);
                        for (var n = 1 << r + 1, o = t.clone(), s = 0; s < i.length; s++) {
                            var f, h = o.andln(n - 1);
                            o.isOdd() ? (f = h > (n >> 1) - 1 ? (n >> 1) - h : h, o.isubn(f)) : f = 0, i[s] = f, o.iushrn(1)
                        }
                        return i
                    }, e.getJSF = function(t, r) {
                        var e = [
                            [],
                            []
                        ];
                        t = t.clone(), r = r.clone();
                        for (var i, n = 0, o = 0; t.cmpn(-n) > 0 || r.cmpn(-o) > 0;) {
                            var s, f, h = t.andln(3) + n & 3,
                                u = r.andln(3) + o & 3;
                            3 === h && (h = -1), 3 === u && (u = -1), s = 0 == (1 & h) ? 0 : 3 !== (i = t.andln(7) + n & 7) && 5 !== i || 2 !== u ? h : -h, e[0].push(s), f = 0 == (1 & u) ? 0 : 3 !== (i = r.andln(7) + o & 7) && 5 !== i || 2 !== h ? u : -u, e[1].push(f), 2 * n === s + 1 && (n = 1 - n), 2 * o === f + 1 && (o = 1 - o), t.iushrn(1), r.iushrn(1)
                        }
                        return e
                    }, e.cachedProperty = function(t, r, e) {
                        var i = "_" + r;
                        t.prototype[r] = function() {
                            return void 0 !== this[i] ? this[i] : this[i] = e.call(this)
                        }
                    }, e.parseBytes = function(t) {
                        return "string" == typeof t ? e.toArray(t, "hex") : t
                    }, e.intFromLE = function(t) {
                        return new n.a(t, "hex", "le")
                    }
                })),
                l = d.getNAF,
                c = d.getJSF,
                p = d.assert;

            function m(t, r) {
                this.type = t, this.p = new n.a(r.p, 16), this.red = r.prime ? n.a.red(r.prime) : n.a.mont(this.p), this.zero = new n.a(0).toRed(this.red), this.one = new n.a(1).toRed(this.red), this.two = new n.a(2).toRed(this.red), this.n = r.n && new n.a(r.n, 16), this.g = r.g && this.pointFromJSON(r.g, r.gRed), this._wnafT1 = new Array(4), this._wnafT2 = new Array(4), this._wnafT3 = new Array(4), this._wnafT4 = new Array(4), this._bitLength = this.n ? this.n.bitLength() : 0;
                var e = this.n && this.p.div(this.n);
                !e || e.cmpn(100) > 0 ? this.redN = null : (this._maxwellTrick = !0, this.redN = this.n.toRed(this.red))
            }
            var v = m;

            function g(t, r) {
                this.curve = t, this.type = r, this.precomputed = null
            }
            m.prototype.point = function() {
                throw new Error("Not implemented")
            }, m.prototype.validate = function() {
                throw new Error("Not implemented")
            }, m.prototype._fixedNafMul = function(t, r) {
                p(t.precomputed);
                var e = t._getDoubles(),
                    i = l(r, 1, this._bitLength),
                    n = (1 << e.step + 1) - (e.step % 2 == 0 ? 2 : 1);
                n /= 3;
                var o, s, f = [];
                for (o = 0; o < i.length; o += e.step) {
                    s = 0;
                    for (var h = o + e.step - 1; h >= o; h--) s = (s << 1) + i[h];
                    f.push(s)
                }
                for (var u = this.jpoint(null, null, null), a = this.jpoint(null, null, null), d = n; d > 0; d--) {
                    for (o = 0; o < f.length; o++)(s = f[o]) === d ? a = a.mixedAdd(e.points[o]) : s === -d && (a = a.mixedAdd(e.points[o].neg()));
                    u = u.add(a)
                }
                return u.toP()
            }, m.prototype._wnafMul = function(t, r) {
                var e = 4,
                    i = t._getNAFPoints(e);
                e = i.wnd;
                for (var n = i.points, o = l(r, e, this._bitLength), s = this.jpoint(null, null, null), f = o.length - 1; f >= 0; f--) {
                    for (var h = 0; f >= 0 && 0 === o[f]; f--) h++;
                    if (f >= 0 && h++, s = s.dblp(h), f < 0) break;
                    var u = o[f];
                    p(0 !== u), s = "affine" === t.type ? u > 0 ? s.mixedAdd(n[u - 1 >> 1]) : s.mixedAdd(n[-u - 1 >> 1].neg()) : u > 0 ? s.add(n[u - 1 >> 1]) : s.add(n[-u - 1 >> 1].neg())
                }
                return "affine" === t.type ? s.toP() : s
            }, m.prototype._wnafMulAdd = function(t, r, e, i, n) {
                var o, s, f, h = this._wnafT1,
                    u = this._wnafT2,
                    a = this._wnafT3,
                    d = 0;
                for (o = 0; o < i; o++) {
                    var p = (f = r[o])._getNAFPoints(t);
                    h[o] = p.wnd, u[o] = p.points
                }
                for (o = i - 1; o >= 1; o -= 2) {
                    var m = o - 1,
                        v = o;
                    if (1 === h[m] && 1 === h[v]) {
                        var g = [r[m], null, null, r[v]];
                        0 === r[m].y.cmp(r[v].y) ? (g[1] = r[m].add(r[v]), g[2] = r[m].toJ().mixedAdd(r[v].neg())) : 0 === r[m].y.cmp(r[v].y.redNeg()) ? (g[1] = r[m].toJ().mixedAdd(r[v]), g[2] = r[m].add(r[v].neg())) : (g[1] = r[m].toJ().mixedAdd(r[v]), g[2] = r[m].toJ().mixedAdd(r[v].neg()));
                        var b = [-3, -1, -5, -7, 0, 7, 5, 1, 3],
                            y = c(e[m], e[v]);
                        for (d = Math.max(y[0].length, d), a[m] = new Array(d), a[v] = new Array(d), s = 0; s < d; s++) {
                            var M = 0 | y[0][s],
                                w = 0 | y[1][s];
                            a[m][s] = b[3 * (M + 1) + (w + 1)], a[v][s] = 0, u[m] = g
                        }
                    } else a[m] = l(e[m], h[m], this._bitLength), a[v] = l(e[v], h[v], this._bitLength), d = Math.max(a[m].length, d), d = Math.max(a[v].length, d)
                }
                var _ = this.jpoint(null, null, null),
                    A = this._wnafT4;
                for (o = d; o >= 0; o--) {
                    for (var E = 0; o >= 0;) {
                        var I = !0;
                        for (s = 0; s < i; s++) A[s] = 0 | a[s][o], 0 !== A[s] && (I = !1);
                        if (!I) break;
                        E++, o--
                    }
                    if (o >= 0 && E++, _ = _.dblp(E), o < 0) break;
                    for (s = 0; s < i; s++) {
                        var S = A[s];
                        0 !== S && (S > 0 ? f = u[s][S - 1 >> 1] : S < 0 && (f = u[s][-S - 1 >> 1].neg()), _ = "affine" === f.type ? _.mixedAdd(f) : _.add(f))
                    }
                }
                for (o = 0; o < i; o++) u[o] = null;
                return n ? _ : _.toP()
            }, m.BasePoint = g, g.prototype.eq = function() {
                throw new Error("Not implemented")
            }, g.prototype.validate = function() {
                return this.curve.validate(this)
            }, m.prototype.decodePoint = function(t, r) {
                t = d.toArray(t, r);
                var e = this.p.byteLength();
                if ((4 === t[0] || 6 === t[0] || 7 === t[0]) && t.length - 1 == 2 * e) return 6 === t[0] ? p(t[t.length - 1] % 2 == 0) : 7 === t[0] && p(t[t.length - 1] % 2 == 1), this.point(t.slice(1, 1 + e), t.slice(1 + e, 1 + 2 * e));
                if ((2 === t[0] || 3 === t[0]) && t.length - 1 === e) return this.pointFromX(t.slice(1, 1 + e), 3 === t[0]);
                throw new Error("Unknown point format")
            }, g.prototype.encodeCompressed = function(t) {
                return this.encode(t, !0)
            }, g.prototype._encode = function(t) {
                var r = this.curve.p.byteLength(),
                    e = this.getX().toArray("be", r);
                return t ? [this.getY().isEven() ? 2 : 3].concat(e) : [4].concat(e, this.getY().toArray("be", r))
            }, g.prototype.encode = function(t, r) {
                return d.encode(this._encode(r), t)
            }, g.prototype.precompute = function(t) {
                if (this.precomputed) return this;
                var r = {
                    doubles: null,
                    naf: null,
                    beta: null
                };
                return r.naf = this._getNAFPoints(8), r.doubles = this._getDoubles(4, t), r.beta = this._getBeta(), this.precomputed = r, this
            }, g.prototype._hasDoubles = function(t) {
                if (!this.precomputed) return !1;
                var r = this.precomputed.doubles;
                return !!r && r.points.length >= Math.ceil((t.bitLength() + 1) / r.step)
            }, g.prototype._getDoubles = function(t, r) {
                if (this.precomputed && this.precomputed.doubles) return this.precomputed.doubles;
                for (var e = [this], i = this, n = 0; n < r; n += t) {
                    for (var o = 0; o < t; o++) i = i.dbl();
                    e.push(i)
                }
                return {
                    step: t,
                    points: e
                }
            }, g.prototype._getNAFPoints = function(t) {
                if (this.precomputed && this.precomputed.naf) return this.precomputed.naf;
                for (var r = [this], e = (1 << t) - 1, i = 1 === e ? null : this.dbl(), n = 1; n < e; n++) r[n] = r[n - 1].add(i);
                return {
                    wnd: t,
                    points: r
                }
            }, g.prototype._getBeta = function() {
                return null
            }, g.prototype.dblp = function(t) {
                for (var r = this, e = 0; e < t; e++) r = r.dbl();
                return r
            };
            var b = f((function(t) {
                    "function" == typeof Object.create ? t.exports = function(t, r) {
                        r && (t.super_ = r, t.prototype = Object.create(r.prototype, {
                            constructor: {
                                value: t,
                                enumerable: !1,
                                writable: !0,
                                configurable: !0
                            }
                        }))
                    } : t.exports = function(t, r) {
                        if (r) {
                            t.super_ = r;
                            var e = function() {};
                            e.prototype = r.prototype, t.prototype = new e, t.prototype.constructor = t
                        }
                    }
                })),
                y = d.assert;

            function M(t) {
                v.call(this, "short", t), this.a = new n.a(t.a, 16).toRed(this.red), this.b = new n.a(t.b, 16).toRed(this.red), this.tinv = this.two.redInvm(), this.zeroA = 0 === this.a.fromRed().cmpn(0), this.threeA = 0 === this.a.fromRed().sub(this.p).cmpn(-3), this.endo = this._getEndomorphism(t), this._endoWnafT1 = new Array(4), this._endoWnafT2 = new Array(4)
            }
            b(M, v);
            var w = M;

            function Point(t, r, e, i) {
                v.BasePoint.call(this, t, "affine"), null === r && null === e ? (this.x = null, this.y = null, this.inf = !0) : (this.x = new n.a(r, 16), this.y = new n.a(e, 16), i && (this.x.forceRed(this.curve.red), this.y.forceRed(this.curve.red)), this.x.red || (this.x = this.x.toRed(this.curve.red)), this.y.red || (this.y = this.y.toRed(this.curve.red)), this.inf = !1)
            }

            function _(t, r, e, i) {
                v.BasePoint.call(this, t, "jacobian"), null === r && null === e && null === i ? (this.x = this.curve.one, this.y = this.curve.one, this.z = new n.a(0)) : (this.x = new n.a(r, 16), this.y = new n.a(e, 16), this.z = new n.a(i, 16)), this.x.red || (this.x = this.x.toRed(this.curve.red)), this.y.red || (this.y = this.y.toRed(this.curve.red)), this.z.red || (this.z = this.z.toRed(this.curve.red)), this.zOne = this.z === this.curve.one
            }
            M.prototype._getEndomorphism = function(t) {
                if (this.zeroA && this.g && this.n && 1 === this.p.modn(3)) {
                    var r, e;
                    if (t.beta) r = new n.a(t.beta, 16).toRed(this.red);
                    else {
                        var i = this._getEndoRoots(this.p);
                        r = (r = i[0].cmp(i[1]) < 0 ? i[0] : i[1]).toRed(this.red)
                    }
                    if (t.lambda) e = new n.a(t.lambda, 16);
                    else {
                        var o = this._getEndoRoots(this.n);
                        0 === this.g.mul(o[0]).x.cmp(this.g.x.redMul(r)) ? e = o[0] : (e = o[1], y(0 === this.g.mul(e).x.cmp(this.g.x.redMul(r))))
                    }
                    return {
                        beta: r,
                        lambda: e,
                        basis: t.basis ? t.basis.map((function(t) {
                            return {
                                a: new n.a(t.a, 16),
                                b: new n.a(t.b, 16)
                            }
                        })) : this._getEndoBasis(e)
                    }
                }
            }, M.prototype._getEndoRoots = function(t) {
                var r = t === this.p ? this.red : n.a.mont(t),
                    e = new n.a(2).toRed(r).redInvm(),
                    i = e.redNeg(),
                    o = new n.a(3).toRed(r).redNeg().redSqrt().redMul(e);
                return [i.redAdd(o).fromRed(), i.redSub(o).fromRed()]
            }, M.prototype._getEndoBasis = function(t) {
                for (var r, e, i, o, s, f, h, u, a, d = this.n.ushrn(Math.floor(this.n.bitLength() / 2)), l = t, c = this.n.clone(), p = new n.a(1), m = new n.a(0), v = new n.a(0), g = new n.a(1), b = 0; 0 !== l.cmpn(0);) {
                    var y = c.div(l);
                    u = c.sub(y.mul(l)), a = v.sub(y.mul(p));
                    var M = g.sub(y.mul(m));
                    if (!i && u.cmp(d) < 0) r = h.neg(), e = p, i = u.neg(), o = a;
                    else if (i && 2 == ++b) break;
                    h = u, c = l, l = u, v = p, p = a, g = m, m = M
                }
                s = u.neg(), f = a;
                var w = i.sqr().add(o.sqr());
                return s.sqr().add(f.sqr()).cmp(w) >= 0 && (s = r, f = e), i.negative && (i = i.neg(), o = o.neg()), s.negative && (s = s.neg(), f = f.neg()), [{
                    a: i,
                    b: o
                }, {
                    a: s,
                    b: f
                }]
            }, M.prototype._endoSplit = function(t) {
                var r = this.endo.basis,
                    e = r[0],
                    i = r[1],
                    n = i.b.mul(t).divRound(this.n),
                    o = e.b.neg().mul(t).divRound(this.n),
                    s = n.mul(e.a),
                    f = o.mul(i.a),
                    h = n.mul(e.b),
                    u = o.mul(i.b);
                return {
                    k1: t.sub(s).sub(f),
                    k2: h.add(u).neg()
                }
            }, M.prototype.pointFromX = function(t, r) {
                (t = new n.a(t, 16)).red || (t = t.toRed(this.red));
                var e = t.redSqr().redMul(t).redIAdd(t.redMul(this.a)).redIAdd(this.b),
                    i = e.redSqrt();
                if (0 !== i.redSqr().redSub(e).cmp(this.zero)) throw new Error("invalid point");
                var o = i.fromRed().isOdd();
                return (r && !o || !r && o) && (i = i.redNeg()), this.point(t, i)
            }, M.prototype.validate = function(t) {
                if (t.inf) return !0;
                var r = t.x,
                    e = t.y,
                    i = this.a.redMul(r),
                    n = r.redSqr().redMul(r).redIAdd(i).redIAdd(this.b);
                return 0 === e.redSqr().redISub(n).cmpn(0)
            }, M.prototype._endoWnafMulAdd = function(t, r, e) {
                for (var i = this._endoWnafT1, n = this._endoWnafT2, o = 0; o < t.length; o++) {
                    var s = this._endoSplit(r[o]),
                        f = t[o],
                        h = f._getBeta();
                    s.k1.negative && (s.k1.ineg(), f = f.neg(!0)), s.k2.negative && (s.k2.ineg(), h = h.neg(!0)), i[2 * o] = f, i[2 * o + 1] = h, n[2 * o] = s.k1, n[2 * o + 1] = s.k2
                }
                for (var u = this._wnafMulAdd(1, i, n, 2 * o, e), a = 0; a < 2 * o; a++) i[a] = null, n[a] = null;
                return u
            }, b(Point, v.BasePoint), M.prototype.point = function(t, r, e) {
                return new Point(this, t, r, e)
            }, M.prototype.pointFromJSON = function(t, r) {
                return Point.fromJSON(this, t, r)
            }, Point.prototype._getBeta = function() {
                if (this.curve.endo) {
                    var t = this.precomputed;
                    if (t && t.beta) return t.beta;
                    var r = this.curve.point(this.x.redMul(this.curve.endo.beta), this.y);
                    if (t) {
                        var e = this.curve,
                            i = function(t) {
                                return e.point(t.x.redMul(e.endo.beta), t.y)
                            };
                        t.beta = r, r.precomputed = {
                            beta: null,
                            naf: t.naf && {
                                wnd: t.naf.wnd,
                                points: t.naf.points.map(i)
                            },
                            doubles: t.doubles && {
                                step: t.doubles.step,
                                points: t.doubles.points.map(i)
                            }
                        }
                    }
                    return r
                }
            }, Point.prototype.toJSON = function() {
                return this.precomputed ? [this.x, this.y, this.precomputed && {
                    doubles: this.precomputed.doubles && {
                        step: this.precomputed.doubles.step,
                        points: this.precomputed.doubles.points.slice(1)
                    },
                    naf: this.precomputed.naf && {
                        wnd: this.precomputed.naf.wnd,
                        points: this.precomputed.naf.points.slice(1)
                    }
                }] : [this.x, this.y]
            }, Point.fromJSON = function(t, r, e) {
                "string" == typeof r && (r = JSON.parse(r));
                var i = t.point(r[0], r[1], e);
                if (!r[2]) return i;

                function n(r) {
                    return t.point(r[0], r[1], e)
                }
                var o = r[2];
                return i.precomputed = {
                    beta: null,
                    doubles: o.doubles && {
                        step: o.doubles.step,
                        points: [i].concat(o.doubles.points.map(n))
                    },
                    naf: o.naf && {
                        wnd: o.naf.wnd,
                        points: [i].concat(o.naf.points.map(n))
                    }
                }, i
            }, Point.prototype.inspect = function() {
                return this.isInfinity() ? "<EC Point Infinity>" : "<EC Point x: " + this.x.fromRed().toString(16, 2) + " y: " + this.y.fromRed().toString(16, 2) + ">"
            }, Point.prototype.isInfinity = function() {
                return this.inf
            }, Point.prototype.add = function(t) {
                if (this.inf) return t;
                if (t.inf) return this;
                if (this.eq(t)) return this.dbl();
                if (this.neg().eq(t)) return this.curve.point(null, null);
                if (0 === this.x.cmp(t.x)) return this.curve.point(null, null);
                var r = this.y.redSub(t.y);
                0 !== r.cmpn(0) && (r = r.redMul(this.x.redSub(t.x).redInvm()));
                var e = r.redSqr().redISub(this.x).redISub(t.x),
                    i = r.redMul(this.x.redSub(e)).redISub(this.y);
                return this.curve.point(e, i)
            }, Point.prototype.dbl = function() {
                if (this.inf) return this;
                var t = this.y.redAdd(this.y);
                if (0 === t.cmpn(0)) return this.curve.point(null, null);
                var r = this.curve.a,
                    e = this.x.redSqr(),
                    i = t.redInvm(),
                    n = e.redAdd(e).redIAdd(e).redIAdd(r).redMul(i),
                    o = n.redSqr().redISub(this.x.redAdd(this.x)),
                    s = n.redMul(this.x.redSub(o)).redISub(this.y);
                return this.curve.point(o, s)
            }, Point.prototype.getX = function() {
                return this.x.fromRed()
            }, Point.prototype.getY = function() {
                return this.y.fromRed()
            }, Point.prototype.mul = function(t) {
                return t = new n.a(t, 16), this.isInfinity() ? this : this._hasDoubles(t) ? this.curve._fixedNafMul(this, t) : this.curve.endo ? this.curve._endoWnafMulAdd([this], [t]) : this.curve._wnafMul(this, t)
            }, Point.prototype.mulAdd = function(t, r, e) {
                var i = [this, r],
                    n = [t, e];
                return this.curve.endo ? this.curve._endoWnafMulAdd(i, n) : this.curve._wnafMulAdd(1, i, n, 2)
            }, Point.prototype.jmulAdd = function(t, r, e) {
                var i = [this, r],
                    n = [t, e];
                return this.curve.endo ? this.curve._endoWnafMulAdd(i, n, !0) : this.curve._wnafMulAdd(1, i, n, 2, !0)
            }, Point.prototype.eq = function(t) {
                return this === t || this.inf === t.inf && (this.inf || 0 === this.x.cmp(t.x) && 0 === this.y.cmp(t.y))
            }, Point.prototype.neg = function(t) {
                if (this.inf) return this;
                var r = this.curve.point(this.x, this.y.redNeg());
                if (t && this.precomputed) {
                    var e = this.precomputed,
                        i = function(t) {
                            return t.neg()
                        };
                    r.precomputed = {
                        naf: e.naf && {
                            wnd: e.naf.wnd,
                            points: e.naf.points.map(i)
                        },
                        doubles: e.doubles && {
                            step: e.doubles.step,
                            points: e.doubles.points.map(i)
                        }
                    }
                }
                return r
            }, Point.prototype.toJ = function() {
                return this.inf ? this.curve.jpoint(null, null, null) : this.curve.jpoint(this.x, this.y, this.curve.one)
            }, b(_, v.BasePoint), M.prototype.jpoint = function(t, r, e) {
                return new _(this, t, r, e)
            }, _.prototype.toP = function() {
                if (this.isInfinity()) return this.curve.point(null, null);
                var t = this.z.redInvm(),
                    r = t.redSqr(),
                    e = this.x.redMul(r),
                    i = this.y.redMul(r).redMul(t);
                return this.curve.point(e, i)
            }, _.prototype.neg = function() {
                return this.curve.jpoint(this.x, this.y.redNeg(), this.z)
            }, _.prototype.add = function(t) {
                if (this.isInfinity()) return t;
                if (t.isInfinity()) return this;
                var r = t.z.redSqr(),
                    e = this.z.redSqr(),
                    i = this.x.redMul(r),
                    n = t.x.redMul(e),
                    o = this.y.redMul(r.redMul(t.z)),
                    s = t.y.redMul(e.redMul(this.z)),
                    f = i.redSub(n),
                    h = o.redSub(s);
                if (0 === f.cmpn(0)) return 0 !== h.cmpn(0) ? this.curve.jpoint(null, null, null) : this.dbl();
                var u = f.redSqr(),
                    a = u.redMul(f),
                    d = i.redMul(u),
                    l = h.redSqr().redIAdd(a).redISub(d).redISub(d),
                    c = h.redMul(d.redISub(l)).redISub(o.redMul(a)),
                    p = this.z.redMul(t.z).redMul(f);
                return this.curve.jpoint(l, c, p)
            }, _.prototype.mixedAdd = function(t) {
                if (this.isInfinity()) return t.toJ();
                if (t.isInfinity()) return this;
                var r = this.z.redSqr(),
                    e = this.x,
                    i = t.x.redMul(r),
                    n = this.y,
                    o = t.y.redMul(r).redMul(this.z),
                    s = e.redSub(i),
                    f = n.redSub(o);
                if (0 === s.cmpn(0)) return 0 !== f.cmpn(0) ? this.curve.jpoint(null, null, null) : this.dbl();
                var h = s.redSqr(),
                    u = h.redMul(s),
                    a = e.redMul(h),
                    d = f.redSqr().redIAdd(u).redISub(a).redISub(a),
                    l = f.redMul(a.redISub(d)).redISub(n.redMul(u)),
                    c = this.z.redMul(s);
                return this.curve.jpoint(d, l, c)
            }, _.prototype.dblp = function(t) {
                if (0 === t) return this;
                if (this.isInfinity()) return this;
                if (!t) return this.dbl();
                var r;
                if (this.curve.zeroA || this.curve.threeA) {
                    var e = this;
                    for (r = 0; r < t; r++) e = e.dbl();
                    return e
                }
                var i = this.curve.a,
                    n = this.curve.tinv,
                    o = this.x,
                    s = this.y,
                    f = this.z,
                    h = f.redSqr().redSqr(),
                    u = s.redAdd(s);
                for (r = 0; r < t; r++) {
                    var a = o.redSqr(),
                        d = u.redSqr(),
                        l = d.redSqr(),
                        c = a.redAdd(a).redIAdd(a).redIAdd(i.redMul(h)),
                        p = o.redMul(d),
                        m = c.redSqr().redISub(p.redAdd(p)),
                        v = p.redISub(m),
                        g = c.redMul(v);
                    g = g.redIAdd(g).redISub(l);
                    var b = u.redMul(f);
                    r + 1 < t && (h = h.redMul(l)), o = m, f = b, u = g
                }
                return this.curve.jpoint(o, u.redMul(n), f)
            }, _.prototype.dbl = function() {
                return this.isInfinity() ? this : this.curve.zeroA ? this._zeroDbl() : this.curve.threeA ? this._threeDbl() : this._dbl()
            }, _.prototype._zeroDbl = function() {
                var t, r, e;
                if (this.zOne) {
                    var i = this.x.redSqr(),
                        n = this.y.redSqr(),
                        o = n.redSqr(),
                        s = this.x.redAdd(n).redSqr().redISub(i).redISub(o);
                    s = s.redIAdd(s);
                    var f = i.redAdd(i).redIAdd(i),
                        h = f.redSqr().redISub(s).redISub(s),
                        u = o.redIAdd(o);
                    u = (u = u.redIAdd(u)).redIAdd(u), t = h, r = f.redMul(s.redISub(h)).redISub(u), e = this.y.redAdd(this.y)
                } else {
                    var a = this.x.redSqr(),
                        d = this.y.redSqr(),
                        l = d.redSqr(),
                        c = this.x.redAdd(d).redSqr().redISub(a).redISub(l);
                    c = c.redIAdd(c);
                    var p = a.redAdd(a).redIAdd(a),
                        m = p.redSqr(),
                        v = l.redIAdd(l);
                    v = (v = v.redIAdd(v)).redIAdd(v), t = m.redISub(c).redISub(c), r = p.redMul(c.redISub(t)).redISub(v), e = (e = this.y.redMul(this.z)).redIAdd(e)
                }
                return this.curve.jpoint(t, r, e)
            }, _.prototype._threeDbl = function() {
                var t, r, e;
                if (this.zOne) {
                    var i = this.x.redSqr(),
                        n = this.y.redSqr(),
                        o = n.redSqr(),
                        s = this.x.redAdd(n).redSqr().redISub(i).redISub(o);
                    s = s.redIAdd(s);
                    var f = i.redAdd(i).redIAdd(i).redIAdd(this.curve.a),
                        h = f.redSqr().redISub(s).redISub(s);
                    t = h;
                    var u = o.redIAdd(o);
                    u = (u = u.redIAdd(u)).redIAdd(u), r = f.redMul(s.redISub(h)).redISub(u), e = this.y.redAdd(this.y)
                } else {
                    var a = this.z.redSqr(),
                        d = this.y.redSqr(),
                        l = this.x.redMul(d),
                        c = this.x.redSub(a).redMul(this.x.redAdd(a));
                    c = c.redAdd(c).redIAdd(c);
                    var p = l.redIAdd(l),
                        m = (p = p.redIAdd(p)).redAdd(p);
                    t = c.redSqr().redISub(m), e = this.y.redAdd(this.z).redSqr().redISub(d).redISub(a);
                    var v = d.redSqr();
                    v = (v = (v = v.redIAdd(v)).redIAdd(v)).redIAdd(v), r = c.redMul(p.redISub(t)).redISub(v)
                }
                return this.curve.jpoint(t, r, e)
            }, _.prototype._dbl = function() {
                var t = this.curve.a,
                    r = this.x,
                    e = this.y,
                    i = this.z,
                    n = i.redSqr().redSqr(),
                    o = r.redSqr(),
                    s = e.redSqr(),
                    f = o.redAdd(o).redIAdd(o).redIAdd(t.redMul(n)),
                    h = r.redAdd(r),
                    u = (h = h.redIAdd(h)).redMul(s),
                    a = f.redSqr().redISub(u.redAdd(u)),
                    d = u.redISub(a),
                    l = s.redSqr();
                l = (l = (l = l.redIAdd(l)).redIAdd(l)).redIAdd(l);
                var c = f.redMul(d).redISub(l),
                    p = e.redAdd(e).redMul(i);
                return this.curve.jpoint(a, c, p)
            }, _.prototype.trpl = function() {
                if (!this.curve.zeroA) return this.dbl().add(this);
                var t = this.x.redSqr(),
                    r = this.y.redSqr(),
                    e = this.z.redSqr(),
                    i = r.redSqr(),
                    n = t.redAdd(t).redIAdd(t),
                    o = n.redSqr(),
                    s = this.x.redAdd(r).redSqr().redISub(t).redISub(i),
                    f = (s = (s = (s = s.redIAdd(s)).redAdd(s).redIAdd(s)).redISub(o)).redSqr(),
                    h = i.redIAdd(i);
                h = (h = (h = h.redIAdd(h)).redIAdd(h)).redIAdd(h);
                var u = n.redIAdd(s).redSqr().redISub(o).redISub(f).redISub(h),
                    a = r.redMul(u);
                a = (a = a.redIAdd(a)).redIAdd(a);
                var d = this.x.redMul(f).redISub(a);
                d = (d = d.redIAdd(d)).redIAdd(d);
                var l = this.y.redMul(u.redMul(h.redISub(u)).redISub(s.redMul(f)));
                l = (l = (l = l.redIAdd(l)).redIAdd(l)).redIAdd(l);
                var c = this.z.redAdd(s).redSqr().redISub(e).redISub(f);
                return this.curve.jpoint(d, l, c)
            }, _.prototype.mul = function(t, r) {
                return t = new n.a(t, r), this.curve._wnafMul(this, t)
            }, _.prototype.eq = function(t) {
                if ("affine" === t.type) return this.eq(t.toJ());
                if (this === t) return !0;
                var r = this.z.redSqr(),
                    e = t.z.redSqr();
                if (0 !== this.x.redMul(e).redISub(t.x.redMul(r)).cmpn(0)) return !1;
                var i = r.redMul(this.z),
                    n = e.redMul(t.z);
                return 0 === this.y.redMul(n).redISub(t.y.redMul(i)).cmpn(0)
            }, _.prototype.eqXToP = function(t) {
                var r = this.z.redSqr(),
                    e = t.toRed(this.curve.red).redMul(r);
                if (0 === this.x.cmp(e)) return !0;
                for (var i = t.clone(), n = this.curve.redN.redMul(r);;) {
                    if (i.iadd(this.curve.n), i.cmp(this.curve.p) >= 0) return !1;
                    if (e.redIAdd(n), 0 === this.x.cmp(e)) return !0
                }
            }, _.prototype.inspect = function() {
                return this.isInfinity() ? "<EC JPoint Infinity>" : "<EC JPoint x: " + this.x.toString(16, 2) + " y: " + this.y.toString(16, 2) + " z: " + this.z.toString(16, 2) + ">"
            }, _.prototype.isInfinity = function() {
                return 0 === this.z.cmpn(0)
            };
            var A = f((function(t, r) {
                    var e = r;
                    e.base = v, e.short = w, e.mont = null, e.edwards = null
                })),
                E = f((function(t, r) {
                    var e, i = r,
                        n = d.assert;

                    function o(t) {
                        "short" === t.type ? this.curve = new A.short(t) : "edwards" === t.type ? this.curve = new A.edwards(t) : this.curve = new A.mont(t), this.g = this.curve.g, this.n = this.curve.n, this.hash = t.hash, n(this.g.validate(), "Invalid curve"), n(this.g.mul(this.n).isInfinity(), "Invalid curve, G*N != O")
                    }

                    function f(t, r) {
                        Object.defineProperty(i, t, {
                            configurable: !0,
                            enumerable: !0,
                            get: function() {
                                var e = new o(r);
                                return Object.defineProperty(i, t, {
                                    configurable: !0,
                                    enumerable: !0,
                                    value: e
                                }), e
                            }
                        })
                    }
                    i.PresetCurve = o, f("p192", {
                        type: "short",
                        prime: "p192",
                        p: "ffffffff ffffffff ffffffff fffffffe ffffffff ffffffff",
                        a: "ffffffff ffffffff ffffffff fffffffe ffffffff fffffffc",
                        b: "64210519 e59c80e7 0fa7e9ab 72243049 feb8deec c146b9b1",
                        n: "ffffffff ffffffff ffffffff 99def836 146bc9b1 b4d22831",
                        hash: s.a.sha256,
                        gRed: !1,
                        g: ["188da80e b03090f6 7cbf20eb 43a18800 f4ff0afd 82ff1012", "07192b95 ffc8da78 631011ed 6b24cdd5 73f977a1 1e794811"]
                    }), f("p224", {
                        type: "short",
                        prime: "p224",
                        p: "ffffffff ffffffff ffffffff ffffffff 00000000 00000000 00000001",
                        a: "ffffffff ffffffff ffffffff fffffffe ffffffff ffffffff fffffffe",
                        b: "b4050a85 0c04b3ab f5413256 5044b0b7 d7bfd8ba 270b3943 2355ffb4",
                        n: "ffffffff ffffffff ffffffff ffff16a2 e0b8f03e 13dd2945 5c5c2a3d",
                        hash: s.a.sha256,
                        gRed: !1,
                        g: ["b70e0cbd 6bb4bf7f 321390b9 4a03c1d3 56c21122 343280d6 115c1d21", "bd376388 b5f723fb 4c22dfe6 cd4375a0 5a074764 44d58199 85007e34"]
                    }), f("p256", {
                        type: "short",
                        prime: null,
                        p: "ffffffff 00000001 00000000 00000000 00000000 ffffffff ffffffff ffffffff",
                        a: "ffffffff 00000001 00000000 00000000 00000000 ffffffff ffffffff fffffffc",
                        b: "5ac635d8 aa3a93e7 b3ebbd55 769886bc 651d06b0 cc53b0f6 3bce3c3e 27d2604b",
                        n: "ffffffff 00000000 ffffffff ffffffff bce6faad a7179e84 f3b9cac2 fc632551",
                        hash: s.a.sha256,
                        gRed: !1,
                        g: ["6b17d1f2 e12c4247 f8bce6e5 63a440f2 77037d81 2deb33a0 f4a13945 d898c296", "4fe342e2 fe1a7f9b 8ee7eb4a 7c0f9e16 2bce3357 6b315ece cbb64068 37bf51f5"]
                    }), f("p384", {
                        type: "short",
                        prime: null,
                        p: "ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffe ffffffff 00000000 00000000 ffffffff",
                        a: "ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffe ffffffff 00000000 00000000 fffffffc",
                        b: "b3312fa7 e23ee7e4 988e056b e3f82d19 181d9c6e fe814112 0314088f 5013875a c656398d 8a2ed19d 2a85c8ed d3ec2aef",
                        n: "ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff c7634d81 f4372ddf 581a0db2 48b0a77a ecec196a ccc52973",
                        hash: s.a.sha384,
                        gRed: !1,
                        g: ["aa87ca22 be8b0537 8eb1c71e f320ad74 6e1d3b62 8ba79b98 59f741e0 82542a38 5502f25d bf55296c 3a545e38 72760ab7", "3617de4a 96262c6f 5d9e98bf 9292dc29 f8f41dbd 289a147c e9da3113 b5f0b8c0 0a60b1ce 1d7e819d 7a431d7c 90ea0e5f"]
                    }), f("p521", {
                        type: "short",
                        prime: null,
                        p: "000001ff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff",
                        a: "000001ff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffc",
                        b: "00000051 953eb961 8e1c9a1f 929a21a0 b68540ee a2da725b 99b315f3 b8b48991 8ef109e1 56193951 ec7e937b 1652c0bd 3bb1bf07 3573df88 3d2c34f1 ef451fd4 6b503f00",
                        n: "000001ff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffa 51868783 bf2f966b 7fcc0148 f709a5d0 3bb5c9b8 899c47ae bb6fb71e 91386409",
                        hash: s.a.sha512,
                        gRed: !1,
                        g: ["000000c6 858e06b7 0404e9cd 9e3ecb66 2395b442 9c648139 053fb521 f828af60 6b4d3dba a14b5e77 efe75928 fe1dc127 a2ffa8de 3348b3c1 856a429b f97e7e31 c2e5bd66", "00000118 39296a78 9a3bc004 5c8a5fb4 2c7d1bd9 98f54449 579b4468 17afbd17 273e662c 97ee7299 5ef42640 c550b901 3fad0761 353c7086 a272c240 88be9476 9fd16650"]
                    }), f("curve25519", {
                        type: "mont",
                        prime: "p25519",
                        p: "7fffffffffffffff ffffffffffffffff ffffffffffffffff ffffffffffffffed",
                        a: "76d06",
                        b: "1",
                        n: "1000000000000000 0000000000000000 14def9dea2f79cd6 5812631a5cf5d3ed",
                        hash: s.a.sha256,
                        gRed: !1,
                        g: ["9"]
                    }), f("ed25519", {
                        type: "edwards",
                        prime: "p25519",
                        p: "7fffffffffffffff ffffffffffffffff ffffffffffffffff ffffffffffffffed",
                        a: "-1",
                        c: "1",
                        d: "52036cee2b6ffe73 8cc740797779e898 00700a4d4141d8ab 75eb4dca135978a3",
                        n: "1000000000000000 0000000000000000 14def9dea2f79cd6 5812631a5cf5d3ed",
                        hash: s.a.sha256,
                        gRed: !1,
                        g: ["216936d3cd6e53fec0a4e231fdd6dc5c692cc7609525a7b2c9562d608f25d51a", "6666666666666666666666666666666666666666666666666666666666666658"]
                    });
                    try {
                        e = null.crash()
                    } catch (t) {
                        e = void 0
                    }
                    f("secp256k1", {
                        type: "short",
                        prime: "k256",
                        p: "ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffe fffffc2f",
                        a: "0",
                        b: "7",
                        n: "ffffffff ffffffff ffffffff fffffffe baaedce6 af48a03b bfd25e8c d0364141",
                        h: "1",
                        hash: s.a.sha256,
                        beta: "7ae96a2b657c07106e64479eac3434e99cf0497512f58995c1396c28719501ee",
                        lambda: "5363ad4cc05c30e0a5261c028812645a122e22ea20816678df02967c1b23bd72",
                        basis: [{
                            a: "3086d221a7d46bcde86c90e49284eb15",
                            b: "-e4437ed6010e88286f547fa90abfe4c3"
                        }, {
                            a: "114ca50f7a8e2f3f657c1108d9d44cfd8",
                            b: "3086d221a7d46bcde86c90e49284eb15"
                        }],
                        gRed: !1,
                        g: ["79be667ef9dcbbac55a06295ce870b07029bfcdb2dce28d959f2815b16f81798", "483ada7726a3c4655da4fbfc0e1108a8fd17b448a68554199c47d08ffb10d4b8", e]
                    })
                }));

            function I(t) {
                if (!(this instanceof I)) return new I(t);
                this.hash = t.hash, this.predResist = !!t.predResist, this.outLen = this.hash.outSize, this.minEntropy = t.minEntropy || this.hash.hmacStrength, this._reseed = null, this.reseedInterval = null, this.K = null, this.V = null;
                var r = a.toArray(t.entropy, t.entropyEnc || "hex"),
                    e = a.toArray(t.nonce, t.nonceEnc || "hex"),
                    i = a.toArray(t.pers, t.persEnc || "hex");
                h(r.length >= this.minEntropy / 8, "Not enough entropy. Minimum is: " + this.minEntropy + " bits"), this._init(r, e, i)
            }
            var S = I;
            I.prototype._init = function(t, r, e) {
                var i = t.concat(r).concat(e);
                this.K = new Array(this.outLen / 8), this.V = new Array(this.outLen / 8);
                for (var n = 0; n < this.V.length; n++) this.K[n] = 0, this.V[n] = 1;
                this._update(i), this._reseed = 1, this.reseedInterval = 281474976710656
            }, I.prototype._hmac = function() {
                return new s.a.hmac(this.hash, this.K)
            }, I.prototype._update = function(t) {
                var r = this._hmac().update(this.V).update([0]);
                t && (r = r.update(t)), this.K = r.digest(), this.V = this._hmac().update(this.V).digest(), t && (this.K = this._hmac().update(this.V).update([1]).update(t).digest(), this.V = this._hmac().update(this.V).digest())
            }, I.prototype.reseed = function(t, r, e, i) {
                "string" != typeof r && (i = e, e = r, r = null), t = a.toArray(t, r), e = a.toArray(e, i), h(t.length >= this.minEntropy / 8, "Not enough entropy. Minimum is: " + this.minEntropy + " bits"), this._update(t.concat(e || [])), this._reseed = 1
            }, I.prototype.generate = function(t, r, e, i) {
                if (this._reseed > this.reseedInterval) throw new Error("Reseed is required");
                "string" != typeof r && (i = e, e = r, r = null), e && (e = a.toArray(e, i || "hex"), this._update(e));
                for (var n = []; n.length < t;) this.V = this._hmac().update(this.V).digest(), n = n.concat(this.V);
                var o = n.slice(0, t);
                return this._update(e), this._reseed++, a.encode(o, r)
            };
            var N = d.assert;

            function O(t, r) {
                this.ec = t, this.priv = null, this.pub = null, r.priv && this._importPrivate(r.priv, r.privEnc), r.pub && this._importPublic(r.pub, r.pubEnc)
            }
            var R = O;
            O.fromPublic = function(t, r, e) {
                return r instanceof O ? r : new O(t, {
                    pub: r,
                    pubEnc: e
                })
            }, O.fromPrivate = function(t, r, e) {
                return r instanceof O ? r : new O(t, {
                    priv: r,
                    privEnc: e
                })
            }, O.prototype.validate = function() {
                var t = this.getPublic();
                return t.isInfinity() ? {
                    result: !1,
                    reason: "Invalid public key"
                } : t.validate() ? t.mul(this.ec.curve.n).isInfinity() ? {
                    result: !0,
                    reason: null
                } : {
                    result: !1,
                    reason: "Public key * N != O"
                } : {
                    result: !1,
                    reason: "Public key is not a point"
                }
            }, O.prototype.getPublic = function(t, r) {
                return "string" == typeof t && (r = t, t = null), this.pub || (this.pub = this.ec.g.mul(this.priv)), r ? this.pub.encode(r, t) : this.pub
            }, O.prototype.getPrivate = function(t) {
                return "hex" === t ? this.priv.toString(16, 2) : this.priv
            }, O.prototype._importPrivate = function(t, r) {
                this.priv = new n.a(t, r || 16), this.priv = this.priv.umod(this.ec.curve.n)
            }, O.prototype._importPublic = function(t, r) {
                if (t.x || t.y) return "mont" === this.ec.curve.type ? N(t.x, "Need x coordinate") : "short" !== this.ec.curve.type && "edwards" !== this.ec.curve.type || N(t.x && t.y, "Need both x and y coordinate"), void(this.pub = this.ec.curve.point(t.x, t.y));
                this.pub = this.ec.curve.decodePoint(t, r)
            }, O.prototype.derive = function(t) {
                return t.validate() || N(t.validate(), "public point not validated"), t.mul(this.priv).getX()
            }, O.prototype.sign = function(t, r, e) {
                return this.ec.sign(t, this, r, e)
            }, O.prototype.verify = function(t, r) {
                return this.ec.verify(t, r, this)
            }, O.prototype.inspect = function() {
                return "<Key priv: " + (this.priv && this.priv.toString(16, 2)) + " pub: " + (this.pub && this.pub.inspect()) + " >"
            };
            var x = d.assert;

            function P(t, r) {
                if (t instanceof P) return t;
                this._importDER(t, r) || (x(t.r && t.s, "Signature without r or s"), this.r = new n.a(t.r, 16), this.s = new n.a(t.s, 16), void 0 === t.recoveryParam ? this.recoveryParam = null : this.recoveryParam = t.recoveryParam)
            }
            var j = P;

            function L() {
                this.place = 0
            }

            function T(t, r) {
                var e = t[r.place++];
                if (!(128 & e)) return e;
                var i = 15 & e;
                if (0 === i || i > 4) return !1;
                for (var n = 0, o = 0, s = r.place; o < i; o++, s++) n <<= 8, n |= t[s], n >>>= 0;
                return !(n <= 127) && (r.place = s, n)
            }

            function k(t) {
                for (var r = 0, e = t.length - 1; !t[r] && !(128 & t[r + 1]) && r < e;) r++;
                return 0 === r ? t : t.slice(r)
            }

            function U(t, r) {
                if (r < 128) t.push(r);
                else {
                    var e = 1 + (Math.log(r) / Math.LN2 >>> 3);
                    for (t.push(128 | e); --e;) t.push(r >>> (e << 3) & 255);
                    t.push(r)
                }
            }
            P.prototype._importDER = function(t, r) {
                t = d.toArray(t, r);
                var e = new L;
                if (48 !== t[e.place++]) return !1;
                var i = T(t, e);
                if (!1 === i) return !1;
                if (i + e.place !== t.length) return !1;
                if (2 !== t[e.place++]) return !1;
                var o = T(t, e);
                if (!1 === o) return !1;
                var s = t.slice(e.place, o + e.place);
                if (e.place += o, 2 !== t[e.place++]) return !1;
                var f = T(t, e);
                if (!1 === f) return !1;
                if (t.length !== f + e.place) return !1;
                var h = t.slice(e.place, f + e.place);
                if (0 === s[0]) {
                    if (!(128 & s[1])) return !1;
                    s = s.slice(1)
                }
                if (0 === h[0]) {
                    if (!(128 & h[1])) return !1;
                    h = h.slice(1)
                }
                return this.r = new n.a(s), this.s = new n.a(h), this.recoveryParam = null, !0
            }, P.prototype.toDER = function(t) {
                var r = this.r.toArray(),
                    e = this.s.toArray();
                for (128 & r[0] && (r = [0].concat(r)), 128 & e[0] && (e = [0].concat(e)), r = k(r), e = k(e); !(e[0] || 128 & e[1]);) e = e.slice(1);
                var i = [2];
                U(i, r.length), (i = i.concat(r)).push(2), U(i, e.length);
                var n = i.concat(e),
                    o = [48];
                return U(o, n.length), o = o.concat(n), d.encode(o, t)
            };
            var F = function() {
                    throw new Error("unsupported")
                },
                q = d.assert;

            function C(t) {
                if (!(this instanceof C)) return new C(t);
                "string" == typeof t && (q(Object.prototype.hasOwnProperty.call(E, t), "Unknown curve " + t), t = E[t]), t instanceof E.PresetCurve && (t = {
                    curve: t
                }), this.curve = t.curve.curve, this.n = this.curve.n, this.nh = this.n.ushrn(1), this.g = this.curve.g, this.g = t.curve.g, this.g.precompute(t.curve.n.bitLength() + 1), this.hash = t.hash || t.curve.hash
            }
            var z = C;
            C.prototype.keyPair = function(t) {
                return new R(this, t)
            }, C.prototype.keyFromPrivate = function(t, r) {
                return R.fromPrivate(this, t, r)
            }, C.prototype.keyFromPublic = function(t, r) {
                return R.fromPublic(this, t, r)
            }, C.prototype.genKeyPair = function(t) {
                t || (t = {});
                for (var r = new S({
                        hash: this.hash,
                        pers: t.pers,
                        persEnc: t.persEnc || "utf8",
                        entropy: t.entropy || F(this.hash.hmacStrength),
                        entropyEnc: t.entropy && t.entropyEnc || "utf8",
                        nonce: this.n.toArray()
                    }), e = this.n.byteLength(), i = this.n.sub(new n.a(2));;) {
                    var o = new n.a(r.generate(e));
                    if (!(o.cmp(i) > 0)) return o.iaddn(1), this.keyFromPrivate(o)
                }
            }, C.prototype._truncateToN = function(t, r) {
                var e = 8 * t.byteLength() - this.n.bitLength();
                return e > 0 && (t = t.ushrn(e)), !r && t.cmp(this.n) >= 0 ? t.sub(this.n) : t
            }, C.prototype.sign = function(t, r, e, i) {
                "object" == typeof e && (i = e, e = null), i || (i = {}), r = this.keyFromPrivate(r, e), t = this._truncateToN(new n.a(t, 16));
                for (var o = this.n.byteLength(), s = r.getPrivate().toArray("be", o), f = t.toArray("be", o), h = new S({
                        hash: this.hash,
                        entropy: s,
                        nonce: f,
                        pers: i.pers,
                        persEnc: i.persEnc || "utf8"
                    }), u = this.n.sub(new n.a(1)), a = 0;; a++) {
                    var d = i.k ? i.k(a) : new n.a(h.generate(this.n.byteLength()));
                    if (!((d = this._truncateToN(d, !0)).cmpn(1) <= 0 || d.cmp(u) >= 0)) {
                        var l = this.g.mul(d);
                        if (!l.isInfinity()) {
                            var c = l.getX(),
                                p = c.umod(this.n);
                            if (0 !== p.cmpn(0)) {
                                var m = d.invm(this.n).mul(p.mul(r.getPrivate()).iadd(t));
                                if (0 !== (m = m.umod(this.n)).cmpn(0)) {
                                    var v = (l.getY().isOdd() ? 1 : 0) | (0 !== c.cmp(p) ? 2 : 0);
                                    return i.canonical && m.cmp(this.nh) > 0 && (m = this.n.sub(m), v ^= 1), new j({
                                        r: p,
                                        s: m,
                                        recoveryParam: v
                                    })
                                }
                            }
                        }
                    }
                }
            }, C.prototype.verify = function(t, r, e, i) {
                t = this._truncateToN(new n.a(t, 16)), e = this.keyFromPublic(e, i);
                var o = (r = new j(r, "hex")).r,
                    s = r.s;
                if (o.cmpn(1) < 0 || o.cmp(this.n) >= 0) return !1;
                if (s.cmpn(1) < 0 || s.cmp(this.n) >= 0) return !1;
                var f, h = s.invm(this.n),
                    u = h.mul(t).umod(this.n),
                    a = h.mul(o).umod(this.n);
                return this.curve._maxwellTrick ? !(f = this.g.jmulAdd(u, e.getPublic(), a)).isInfinity() && f.eqXToP(o) : !(f = this.g.mulAdd(u, e.getPublic(), a)).isInfinity() && 0 === f.getX().umod(this.n).cmp(o)
            }, C.prototype.recoverPubKey = function(t, r, e, i) {
                q((3 & e) === e, "The recovery param is more than two bits"), r = new j(r, i);
                var o = this.n,
                    s = new n.a(t),
                    f = r.r,
                    h = r.s,
                    u = 1 & e,
                    a = e >> 1;
                if (f.cmp(this.curve.p.umod(this.curve.n)) >= 0 && a) throw new Error("Unable to find sencond key candinate");
                f = a ? this.curve.pointFromX(f.add(this.curve.n), u) : this.curve.pointFromX(f, u);
                var d = r.r.invm(o),
                    l = o.sub(s).mul(d).umod(o),
                    c = h.mul(d).umod(o);
                return this.g.mulAdd(l, f, c)
            }, C.prototype.getKeyRecoveryParam = function(t, r, e, i) {
                if (null !== (r = new j(r, i)).recoveryParam) return r.recoveryParam;
                for (var n = 0; n < 4; n++) {
                    var o;
                    try {
                        o = this.recoverPubKey(t, r, n)
                    } catch (t) {
                        continue
                    }
                    if (o.eq(e)) return n
                }
                throw new Error("Unable to find valid recovery factor")
            };
            var D = f((function(t, r) {
                    var e = r;
                    e.version = "6.5.4", e.utils = d, e.rand = function() {
                        throw new Error("unsupported")
                    }, e.curve = A, e.curves = E, e.ec = z, e.eddsa = null
                })).ec,
                B = e(14),
                K = e(60);
            const G = new(e(37).b)("signing-key/5.7.0");
            let V = null;

            function X() {
                return V || (V = new D("secp256k1")), V
            }
            class lib_esm_SigningKey {
                constructor(t) {
                    Object(K.d)(this, "curve", "secp256k1"), Object(K.d)(this, "privateKey", Object(B.i)(t)), 32 !== Object(B.d)(this.privateKey) && G.throwArgumentError("invalid private key", "privateKey", "[[ REDACTED ]]");
                    const r = X().keyFromPrivate(Object(B.a)(this.privateKey));
                    Object(K.d)(this, "publicKey", "0x" + r.getPublic(!1, "hex")), Object(K.d)(this, "compressedPublicKey", "0x" + r.getPublic(!0, "hex")), Object(K.d)(this, "_isSigningKey", !0)
                }
                _addPoint(t) {
                    const r = X().keyFromPublic(Object(B.a)(this.publicKey)),
                        e = X().keyFromPublic(Object(B.a)(t));
                    return "0x" + r.pub.add(e.pub).encodeCompressed("hex")
                }
                signDigest(t) {
                    const r = X().keyFromPrivate(Object(B.a)(this.privateKey)),
                        e = Object(B.a)(t);
                    32 !== e.length && G.throwArgumentError("bad digest length", "digest", t);
                    const i = r.sign(e, {
                        canonical: !0
                    });
                    return Object(B.n)({
                        recoveryParam: i.recoveryParam,
                        r: Object(B.h)("0x" + i.r.toString(16), 32),
                        s: Object(B.h)("0x" + i.s.toString(16), 32)
                    })
                }
                computeSharedSecret(t) {
                    const r = X().keyFromPrivate(Object(B.a)(this.privateKey)),
                        e = X().keyFromPublic(Object(B.a)(J(t)));
                    return Object(B.h)("0x" + r.derive(e.getPublic()).toString(16), 32)
                }
                static isSigningKey(t) {
                    return !(!t || !t._isSigningKey)
                }
            }

            function Z(t, r) {
                const e = Object(B.n)(r),
                    i = {
                        r: Object(B.a)(e.r),
                        s: Object(B.a)(e.s)
                    };
                return "0x" + X().recoverPubKey(Object(B.a)(t), i, e.recoveryParam).encode("hex", !1)
            }

            function J(t, r) {
                const e = Object(B.a)(t);
                if (32 === e.length) {
                    const t = new lib_esm_SigningKey(e);
                    return r ? "0x" + X().keyFromPrivate(e).getPublic(!0, "hex") : t.publicKey
                }
                return 33 === e.length ? r ? Object(B.i)(e) : "0x" + X().keyFromPublic(e).getPublic(!1, "hex") : 65 === e.length ? r ? "0x" + X().keyFromPublic(e).getPublic(!0, "hex") : Object(B.i)(e) : G.throwArgumentError("invalid public or private key", "key", "[REDACTED]")
            }
        }
    }
]);