(window.webpackJsonp = window.webpackJsonp || []).push([
    [1], {
        5690: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.assert = u, t.assertReturn = function(e, t) {
                return u(!(0, i.isUndefined)(e) && !(0, o.isNull)(e), t), e
            };
            var r = n(5733),
                o = n(6020),
                i = n(5734);

            function u(e, t) {
                if (!e) throw new Error((0, r.isFunction)(t) ? t() : t)
            }
        },
        5691: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.objectSpread = function(e, ...t) {
                for (let n = 0; n < t.length; n++) {
                    const o = t[n];
                    if (o) {
                        const t = (0, r.objectKeys)(o);
                        for (let n = 0; n < t.length; n++) {
                            const r = t[n];
                            e[r] = o[r]
                        }
                    }
                }
                return e
            };
            var r = n(7086)
        },
        5733: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.isFunction = function(e) {
                return "function" == typeof e
            }
        },
        5734: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.isUndefined = function(e) {
                return void 0 === e
            }
        },
        5778: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.u8aToU8a = function(e) {
                if (!e) return new Uint8Array;
                if ((0, u.isHex)(e)) return (0, o.hexToU8a)(e);
                if ((0, s.isString)(e)) return (0, a.stringToU8a)(e);
                if (Array.isArray(e) || (0, i.isBuffer)(e)) return new Uint8Array(e);
                return (0, r.assert)((0, c.isU8a)(e), () => `Unable to convert ${e.toString()} (typeof ${typeof e}) to a Uint8Array`), e
            };
            var r = n(5690),
                o = n(6021),
                i = n(6435),
                u = n(5836),
                s = n(6019),
                c = n(6437),
                a = n(6438)
        },
        5836: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.REGEX_HEX_PREFIXED = t.REGEX_HEX_NOPREFIX = void 0, t.isHex = function(e, t = -1, n = !1) {
                return !("string" != typeof e || "0x" !== e && !r.test(e)) && (-1 === t ? !!n || e.length % 2 == 0 : e.length === 2 + Math.ceil(t / 4))
            };
            const r = /^0x[\da-fA-F]+$/;
            t.REGEX_HEX_PREFIXED = r;
            t.REGEX_HEX_NOPREFIX = /^[\da-fA-F]+$/
        },
        5837: function(e, t, n) {
            "use strict";
            var r = n(2);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), Object.defineProperty(t, "BN", {
                enumerable: !0,
                get: function() {
                    return o.default
                }
            });
            var o = r(n(35))
        },
        5914: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), Object.defineProperty(t, "U8A_WRAP_ETHEREUM", {
                enumerable: !0,
                get: function() {
                    return y.U8A_WRAP_ETHEREUM
                }
            }), Object.defineProperty(t, "U8A_WRAP_POSTFIX", {
                enumerable: !0,
                get: function() {
                    return y.U8A_WRAP_POSTFIX
                }
            }), Object.defineProperty(t, "U8A_WRAP_PREFIX", {
                enumerable: !0,
                get: function() {
                    return y.U8A_WRAP_PREFIX
                }
            }), Object.defineProperty(t, "u8aCmp", {
                enumerable: !0,
                get: function() {
                    return r.u8aCmp
                }
            }), Object.defineProperty(t, "u8aConcat", {
                enumerable: !0,
                get: function() {
                    return o.u8aConcat
                }
            }), Object.defineProperty(t, "u8aEmpty", {
                enumerable: !0,
                get: function() {
                    return i.u8aEmpty
                }
            }), Object.defineProperty(t, "u8aEq", {
                enumerable: !0,
                get: function() {
                    return u.u8aEq
                }
            }), Object.defineProperty(t, "u8aFixLength", {
                enumerable: !0,
                get: function() {
                    return s.u8aFixLength
                }
            }), Object.defineProperty(t, "u8aIsWrapped", {
                enumerable: !0,
                get: function() {
                    return y.u8aIsWrapped
                }
            }), Object.defineProperty(t, "u8aSorted", {
                enumerable: !0,
                get: function() {
                    return c.u8aSorted
                }
            }), Object.defineProperty(t, "u8aToBigInt", {
                enumerable: !0,
                get: function() {
                    return a.u8aToBigInt
                }
            }), Object.defineProperty(t, "u8aToBn", {
                enumerable: !0,
                get: function() {
                    return l.u8aToBn
                }
            }), Object.defineProperty(t, "u8aToBuffer", {
                enumerable: !0,
                get: function() {
                    return f.u8aToBuffer
                }
            }), Object.defineProperty(t, "u8aToHex", {
                enumerable: !0,
                get: function() {
                    return d.u8aToHex
                }
            }), Object.defineProperty(t, "u8aToString", {
                enumerable: !0,
                get: function() {
                    return p.u8aToString
                }
            }), Object.defineProperty(t, "u8aToU8a", {
                enumerable: !0,
                get: function() {
                    return b.u8aToU8a
                }
            }), Object.defineProperty(t, "u8aUnwrapBytes", {
                enumerable: !0,
                get: function() {
                    return y.u8aUnwrapBytes
                }
            }), Object.defineProperty(t, "u8aWrapBytes", {
                enumerable: !0,
                get: function() {
                    return y.u8aWrapBytes
                }
            });
            var r = n(7089),
                o = n(7090),
                i = n(8553),
                u = n(6439),
                s = n(8554),
                c = n(8555),
                a = n(7087),
                l = n(8556),
                f = n(8557),
                d = n(6166),
                p = n(7091),
                b = n(5778),
                y = n(8558)
        },
        5915: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.bnToBn = function(e) {
                return c.BN.isBN(e) ? e : e ? (0, i.isHex)(e) ? (0, r.hexToBn)(e.toString()) : (0, o.isBigInt)(e) ? new c.BN(e.toString()) : (0, s.isToBn)(e) ? e.toBn() : (0, u.isToBigInt)(e) ? new c.BN(e.toBigInt().toString()) : new c.BN(e) : new c.BN(0)
            };
            var r = n(6022),
                o = n(6442),
                i = n(5836),
                u = n(6433),
                s = n(6434),
                c = n(5837)
        },
        5992: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.packageInfo = void 0;
            t.packageInfo = {
                name: "@polkadot/types-known",
                version: "6.3.1"
            }
        },
        6019: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.isString = function(e) {
                return "string" == typeof e || e instanceof String
            }
        },
        6020: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.isNull = function(e) {
                return null === e
            }
        },
        6021: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.hexToU8a = function(e, t = -1) {
                if (!e) return new Uint8Array;
                const n = (0, o.hexStripPrefix)(e).toLowerCase(),
                    i = n.length / 2,
                    u = Math.ceil(-1 === t ? i : t / 8),
                    s = new Uint8Array(u),
                    c = u > i ? u - i : 0,
                    a = new DataView(s.buffer, c),
                    l = (u - c) % 2,
                    f = u - c - l;
                for (let e = 0; e < f; e += 2) a.setUint16(e, r.HEX_TO_U16[n.substr(2 * e, 4)]);
                l && a.setUint8(f, r.HEX_TO_U8[n.substr(n.length - 2, 2)]);
                return s
            };
            var r = n(7088),
                o = n(6165)
        },
        6022: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.hexToBn = function(e, t = s) {
                if (!e || "0x" === e) return new r.BN(0);
                const {
                    isLe: n,
                    isNegative: c
                } = (0, i.objectSpread)({
                    isLe: !1,
                    isNegative: !1
                }, (0, o.isBoolean)(t) ? {
                    isLe: t
                } : t), a = (0, u.hexStripPrefix)(e), l = new r.BN(a, 16, n ? "le" : "be");
                return c ? l.fromTwos(4 * a.length) : l
            };
            var r = n(5837),
                o = n(6440),
                i = n(5691),
                u = n(6165);
            const s = {
                isLe: !1,
                isNegative: !1
            }
        },
        6023: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.isObject = function(e) {
                return !!e && "object" == typeof e
            }
        },
        6165: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.hexStripPrefix = function(e) {
                if (!e || "0x" === e) return "";
                if (r.REGEX_HEX_PREFIXED.test(e)) return e.substr(2);
                if (r.REGEX_HEX_NOPREFIX.test(e)) return e;
                throw new Error(`Expected hex value to convert, found '${e}'`)
            };
            var r = n(5836)
        },
        6166: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.u8aToHex = function(e, t = -1, n = !0) {
                const r = Math.ceil(t / 8);
                return `${n?"0x":""}${e&&e.length?r>0&&e.length>r?`${o(e.subarray(0,r/2))}…${o(e.subarray(e.length-r/2))}`:o(e):""}`
            };
            var r = n(7088);

            function o(e) {
                const t = e.length % 2,
                    n = e.length - t,
                    o = new DataView(e.buffer, e.byteOffset);
                let i = "";
                for (let e = 0; e < n; e += 2) i += r.U16_TO_HEX[o.getUint16(e)];
                return t && (i += r.U8_TO_HEX[o.getUint8(n)]), i
            }
        },
        6428: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), n(8532);
            var r = n(8609);
            Object.keys(r).forEach((function(e) {
                "default" !== e && "__esModule" !== e && (e in t && t[e] === r[e] || Object.defineProperty(t, e, {
                    enumerable: !0,
                    get: function() {
                        return r[e]
                    }
                }))
            }))
        },
        6429: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), n(8534);
            var r = n(8540);
            Object.keys(r).forEach((function(e) {
                "default" !== e && "__esModule" !== e && (e in t && t[e] === r[e] || Object.defineProperty(t, e, {
                    enumerable: !0,
                    get: function() {
                        return r[e]
                    }
                }))
            }))
        },
        6430: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), Object.defineProperty(t, "packageInfo", {
                enumerable: !0,
                get: function() {
                    return r.packageInfo
                }
            }), t.xglobal = void 0;
            var r = n(8535);
            const o = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : Function("return this");
            t.xglobal = o
        },
        6431: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.biToBigInt = function(e) {
                return "bigint" == typeof e ? e : e ? (0, i.isHex)(e) ? (0, r.hexToBigInt)(e.toString()) : (0, o.isBn)(e) ? BigInt(e.toString()) : (0, u.isToBigInt)(e) ? e.toBigInt() : (0, s.isToBn)(e) ? BigInt(e.toBn().toString()) : BigInt(e) : BigInt(0)
            };
            var r = n(7085),
                o = n(6432),
                i = n(5836),
                u = n(6433),
                s = n(6434)
        },
        6432: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.isBn = function(e) {
                return r.BN.isBN(e)
            };
            var r = n(5837)
        },
        6433: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.isToBigInt = function(e) {
                return !!e && (0, r.isFunction)(e.toBigInt)
            };
            var r = n(5733)
        },
        6434: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.isToBn = function(e) {
                return !!e && (0, r.isFunction)(e.toBn)
            };
            var r = n(5733)
        },
        6435: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.isBuffer = function(e) {
                return r.hasBuffer && Buffer.isBuffer(e)
            };
            var r = n(6436)
        },
        6436: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.hasWasm = t.hasProcess = t.hasDirname = t.hasBuffer = t.hasBigInt = void 0;
            const r = "undefined" != typeof BigInt;
            t.hasBigInt = r;
            const o = "undefined" != typeof Buffer;
            t.hasBuffer = o;
            const i = "undefined" != typeof __dirname;
            t.hasDirname = i;
            const u = "object" == typeof process;
            t.hasProcess = u;
            const s = "undefined" != typeof WebAssembly;
            t.hasWasm = s
        },
        6437: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.isU8a = function(e) {
                return e instanceof Uint8Array
            }
        },
        6438: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.stringToU8a = function(e) {
                return e ? r.encode(e.toString()) : new Uint8Array
            };
            const r = new(n(7081).TextEncoder)
        },
        6439: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.u8aEq = function(e, t) {
                const n = (0, r.u8aToU8a)(e),
                    o = (0, r.u8aToU8a)(t);
                if (n.length === o.length) {
                    const e = new DataView(n.buffer, n.byteOffset),
                        t = new DataView(o.buffer, o.byteOffset),
                        r = n.length % 4,
                        i = n.length - r;
                    for (let n = 0; n < i; n += 4)
                        if (e.getUint32(n) !== t.getUint32(n)) return !1;
                    for (let e = i; e < n.length; e++)
                        if (n[e] !== o[e]) return !1;
                    return !0
                }
                return !1
            };
            var r = n(5778)
        },
        6440: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.isBoolean = function(e) {
                return "boolean" == typeof e
            }
        },
        6441: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var r = {
                BN: !0,
                bnFromHex: !0,
                bnMax: !0,
                bnMin: !0,
                bnSqrt: !0,
                bnToBn: !0,
                bnToHex: !0,
                bnToU8a: !0
            };
            Object.defineProperty(t, "BN", {
                enumerable: !0,
                get: function() {
                    return i.BN
                }
            }), Object.defineProperty(t, "bnFromHex", {
                enumerable: !0,
                get: function() {
                    return u.bnFromHex
                }
            }), Object.defineProperty(t, "bnMax", {
                enumerable: !0,
                get: function() {
                    return s.bnMax
                }
            }), Object.defineProperty(t, "bnMin", {
                enumerable: !0,
                get: function() {
                    return c.bnMin
                }
            }), Object.defineProperty(t, "bnSqrt", {
                enumerable: !0,
                get: function() {
                    return a.bnSqrt
                }
            }), Object.defineProperty(t, "bnToBn", {
                enumerable: !0,
                get: function() {
                    return l.bnToBn
                }
            }), Object.defineProperty(t, "bnToHex", {
                enumerable: !0,
                get: function() {
                    return f.bnToHex
                }
            }), Object.defineProperty(t, "bnToU8a", {
                enumerable: !0,
                get: function() {
                    return d.bnToU8a
                }
            });
            var o = n(7093);
            Object.keys(o).forEach((function(e) {
                "default" !== e && "__esModule" !== e && (Object.prototype.hasOwnProperty.call(r, e) || e in t && t[e] === o[e] || Object.defineProperty(t, e, {
                    enumerable: !0,
                    get: function() {
                        return o[e]
                    }
                }))
            }));
            var i = n(5837),
                u = n(8559),
                s = n(7094),
                c = n(8560),
                a = n(8561),
                l = n(5915),
                f = n(8562),
                d = n(7095)
        },
        6442: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.isBigInt = function(e) {
                return "bigint" == typeof e || e instanceof BigInt
            }
        },
        6443: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.isNumber = function(e) {
                return "number" == typeof e
            }
        },
        6444: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.formatDecimal = function(e) {
                const t = e[0].startsWith("-"),
                    n = t ? e.substr(1).match(r) : e.match(r);
                return n ? `${t?"-":""}${n.join(",")}` : e
            };
            const r = new RegExp("(\\d+?)(?=(\\d{3})+(?!\\d)|$)", "g")
        },
        6445: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.stringify = function(e, t) {
                return JSON.stringify(e, o, t)
            };
            var r = n(6442);

            function o(e, t) {
                return (0, r.isBigInt)(t) ? t.toString() : t
            }
        },
        6446: function(e, t, n) {
            "use strict";
            var r = n(2);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = t.XCM_MAPPINGS = void 0, t.mapXcm = f;
            var o = r(n(5461)),
                i = n(8615),
                u = n(8616),
                s = n(8617);

            function c(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, r)
                }
                return n
            }

            function a(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? c(Object(n), !0).forEach((function(t) {
                        (0, o.default)(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : c(Object(n)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }
            const l = ["AssetInstance", "Fungibility", "Junction", "Junctions", "MultiAsset", "MultiAssetFilter", "MultiLocation", "Response", "WildFungibility", "WildMultiAsset", "Xcm", "XcmError", "XcmOrder"];
            t.XCM_MAPPINGS = l;

            function f(e) {
                return l.reduce((t, n) => a(a({}, t), {}, {
                    [n]: `${n}${e}`
                }), {})
            }
            var d = {
                rpc: {},
                types: a(a(a(a(a(a(a({}, {
                    BodyId: {
                        _enum: {
                            Unit: "Null",
                            Named: "Vec<u8>",
                            Index: "Compact<u32>",
                            Executive: "Null",
                            Technical: "Null",
                            Legislative: "Null",
                            Judicial: "Null"
                        }
                    },
                    BodyPart: {
                        _enum: {
                            Voice: "Null",
                            Members: "Compact<u32>",
                            Fraction: {
                                nom: "Compact<u32>",
                                denom: "Compact<u32>"
                            },
                            AtLeastProportion: {
                                nom: "Compact<u32>",
                                denom: "Compact<u32>"
                            },
                            MoreThanProportion: {
                                nom: "Compact<u32>",
                                denom: "Compact<u32>"
                            }
                        }
                    },
                    InteriorMultiLocation: "Junctions",
                    NetworkId: {
                        _enum: {
                            Any: "Null",
                            Named: "Vec<u8>",
                            Polkadot: "Null",
                            Kusama: "Null"
                        }
                    }
                }), {
                    XcmOrigin: {
                        _enum: {
                            Xcm: "MultiLocation"
                        }
                    },
                    XcmpMessageFormat: {
                        _enum: ["ConcatenatedVersionedXcm", "ConcatenatedEncodedBlob", "Signals"]
                    },
                    XcmAssetId: {
                        _enum: {
                            Concrete: "MultiLocation",
                            Abstract: "Bytes"
                        }
                    },
                    InboundStatus: {
                        _enum: ["Ok", "Suspended"]
                    },
                    OutboundStatus: {
                        _enum: ["Ok", "Suspended"]
                    },
                    MultiAssets: "Vec<MultiAsset>"
                }), i.v0), u.v1), s.v2), f("V2")), {}, {
                    DoubleEncodedCall: {
                        encoded: "Vec<u8>"
                    },
                    XcmOriginKind: {
                        _enum: ["Native", "SovereignAccount", "Superuser", "Xcm"]
                    },
                    Outcome: {
                        _enum: {
                            Complete: "Weight",
                            Incomplete: "(Weight, XcmErrorV0)",
                            Error: "XcmErrorV0"
                        }
                    },
                    QueryId: "u64",
                    QueryStatus: {
                        _enum: {
                            Pending: {
                                responder: "VersionedMultiLocation",
                                maybeNotify: "Option<(u8, u8)>",
                                timeout: "BlockNumber"
                            },
                            Ready: {
                                response: "VersionedResponse",
                                at: "BlockNumber"
                            }
                        }
                    },
                    QueueConfigData: {
                        suspendThreshold: "u32",
                        dropThreshold: "u32",
                        resumeThreshold: "u32",
                        thresholdWeight: "Weight",
                        weightRestrictDecay: "Weight"
                    },
                    VersionMigrationStage: {
                        _enum: {
                            MigrateSupportedVersion: "Null",
                            MigrateVersionNotifiers: "Null",
                            NotifyCurrentTargets: "Option<Bytes>",
                            MigrateAndNotifyOldTargets: "Null"
                        }
                    },
                    VersionedMultiAsset: {
                        _enum: {
                            V0: "MultiAssetV0",
                            V1: "MultiAssetV1",
                            V2: "MultiAssetV2"
                        }
                    },
                    VersionedMultiAssets: {
                        _enum: {
                            V0: "Vec<MultiAssetV0>",
                            V1: "MultiAssetsV1",
                            V2: "MultiAssetsV2"
                        }
                    },
                    VersionedMultiLocation: {
                        _enum: {
                            V0: "MultiLocationV0",
                            V1: "MultiLocationV1",
                            V2: "MultiLocationV2"
                        }
                    },
                    VersionedResponse: {
                        V0: "ResponseV0",
                        V1: "ResponseV1",
                        V2: "ResponseV2"
                    },
                    VersionedXcm: {
                        _enum: {
                            V0: "XcmV0",
                            V1: "XcmV1",
                            V2: "XcmV2"
                        }
                    },
                    XcmVersion: "u32"
                })
            };
            t.default = d
        },
        7080: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.TextDecoder = void 0, Object.defineProperty(t, "packageInfo", {
                enumerable: !0,
                get: function() {
                    return i.packageInfo
                }
            });
            var r = n(6430),
                o = n(8536),
                i = n(8537);
            const u = void 0 === r.xglobal.TextDecoder ? o.TextDecoder : r.xglobal.TextDecoder;
            t.TextDecoder = u
        },
        7081: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.TextEncoder = void 0, Object.defineProperty(t, "packageInfo", {
                enumerable: !0,
                get: function() {
                    return i.packageInfo
                }
            });
            var r = n(6430),
                o = n(8538),
                i = n(8539);
            const u = void 0 === r.xglobal.TextEncoder ? o.TextEncoder : r.xglobal.TextEncoder;
            t.TextEncoder = u
        },
        7082: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.packageInfo = void 0;
            t.packageInfo = {
                name: "@polkadot/util",
                version: "7.9.2"
            }
        },
        7083: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.detectPackage = function({
                name: e,
                version: t
            }, n, o = []) {
                (0, u.assert)(e.startsWith("@polkadot"), () => "Invalid package descriptor " + e);
                const l = function(e) {
                    const t = r.xglobal;
                    t.__polkadotjs || (t.__polkadotjs = {});
                    t.__polkadotjs[e] || (t.__polkadotjs[e] = []);
                    return t.__polkadotjs[e]
                }(e);
                if (l.push({
                        path: a(n),
                        version: t
                    }), 1 !== l.length) console.warn(`${e} has multiple versions, ensure that there is only one installed.\n${s}\n${function(e){const t=e.map(e=>(0,i.isString)(e)?{version:e}:e),n=c(t);return t.map(({path:e,version:t})=>`\
                    t$ {
                        t.padEnd(n)
                    }\
                    t$ {
                        !e || e.length < 5 ? "<unknown>" : e
                    }
                    `).join("\n")}(l)}`);
                else {
                    const n = o.filter(e => e && e.version !== t);
                    n.length && console.warn(`${e} requires direct dependencies exactly matching version ${t}.\n${s}\n${function(e){const t=c(e);return e.map(({name:e,version:n})=>`\
                        t$ {
                            n.padEnd(t)
                        }\
                        t$ {
                            e
                        }
                        `).join("\n")}(n)}`)
                }
            };
            var r = n(6430),
                o = n(5733),
                i = n(6019),
                u = n(5690);
            const s = "Either remove and explicitly install matching versions or dedupe using your package manager.\nThe following conflicting packages were found:";

            function c(e) {
                let t = 0;
                for (const {
                        version: n
                    }
                    of e) t = Math.max(t, n.length);
                return t
            }

            function a(e) {
                if ((0, o.isFunction)(e)) try {
                    return e() || ""
                } catch (e) {
                    return ""
                }
                return e || ""
            }
        },
        7084: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.BI_QUINTILL = t.BI_MILLION = t.BI_MAX_INTEGER = t.BI_BILLION = void 0;
            const r = BigInt(1e6);
            t.BI_MILLION = r;
            const o = BigInt(1e9);
            t.BI_BILLION = o;
            const i = o * o;
            t.BI_QUINTILL = i;
            const u = BigInt(Number.MAX_SAFE_INTEGER);
            t.BI_MAX_INTEGER = u
        },
        7085: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.hexToBigInt = function(e, t = {}) {
                if (!e || "0x" === e) return BigInt(0);
                return (0, o.u8aToBigInt)((0, i.hexToU8a)(e), (0, r.objectSpread)({
                    isLe: !1,
                    isNegative: !1
                }, t))
            };
            var r = n(5691),
                o = n(7087),
                i = n(6021)
        },
        7086: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.objectKeys = function(e) {
                return Object.keys(e)
            }
        },
        7087: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.u8aToBigInt = function(e, t = {}) {
                if (!e || !e.length) return BigInt(0);
                const {
                    isLe: n,
                    isNegative: o
                } = (0, r.objectSpread)({
                    isLe: !0,
                    isNegative: !1
                }, t), i = n ? e.reverse() : e;
                return o ? -1n * u(function(e) {
                    const t = new Uint8Array(e.length),
                        n = new DataView(e.buffer, e.byteOffset),
                        r = new DataView(t.buffer),
                        o = e.length % 2,
                        i = e.length - o;
                    for (let e = 0; e < i; e += 2) r.setUint16(e, 65535 ^ n.getUint16(e));
                    o && r.setUint8(i, 255 ^ n.getUint8(i));
                    return t
                }(i)) - 1n : u(i)
            };
            var r = n(5691);
            const o = 256n,
                i = o * o;

            function u(e) {
                const t = new DataView(e.buffer, e.byteOffset),
                    n = e.length % 2,
                    r = e.length - n;
                let u = BigInt(0);
                for (let e = 0; e < r; e += 2) u = u * i + BigInt(t.getUint16(e));
                return n && (u = u * o + BigInt(t.getUint8(r))), u
            }
        },
        7088: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.U8_TO_HEX = t.U16_TO_HEX = t.HEX_TO_U8 = t.HEX_TO_U16 = void 0;
            const r = new Array(256);
            t.U8_TO_HEX = r;
            const o = new Array(65536);
            t.U16_TO_HEX = o;
            const i = {};
            t.HEX_TO_U8 = i;
            const u = {};
            t.HEX_TO_U16 = u;
            for (let e = 0; e < 256; e++) {
                const t = e.toString(16).padStart(2, "0");
                r[e] = t, i[t] = e
            }
            for (let e = 0; e < 256; e++)
                for (let t = 0; t < 256; t++) {
                    const n = r[e] + r[t],
                        i = 256 * e + t;
                    o[i] = n, u[n] = i
                }
        },
        7089: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.u8aCmp = function(e, t) {
                const n = (0, r.u8aToU8a)(e),
                    o = (0, r.u8aToU8a)(t);
                let i = 0;
                for (;;) {
                    const e = i >= n.length,
                        t = i >= o.length;
                    if (e && t) return 0;
                    if (e) return -1;
                    if (t) return 1;
                    if (n[i] !== o[i]) return n[i] > o[i] ? 1 : -1;
                    i++
                }
            };
            var r = n(5778)
        },
        7090: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.u8aConcat = function(...e) {
                let t = 0,
                    n = 0;
                const o = new Array(e.length);
                for (let n = 0; n < e.length; n++) o[n] = (0, r.u8aToU8a)(e[n]), t += o[n].length;
                const i = new Uint8Array(t);
                for (let e = 0; e < o.length; e++) i.set(o[e], n), n += o[e].length;
                return i
            };
            var r = n(5778)
        },
        7091: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.u8aToString = function(e) {
                return null != e && e.length ? r.decode(e) : ""
            };
            const r = new(n(7080).TextDecoder)("utf-8")
        },
        7092: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.biToU8a = function(e, t) {
                const n = (0, r.objectSpread)({
                        bitLength: -1,
                        isLe: !0,
                        isNegative: !1
                    }, t),
                    u = (0, o.biToBigInt)(e);
                if (0n === u) return function({
                    bitLength: e = 0
                }) {
                    return -1 === e ? new Uint8Array : new Uint8Array(Math.ceil(e / 8))
                }(n);
                const s = function(e, {
                    isLe: t,
                    isNegative: n
                }) {
                    const r = [];
                    n && (e = -1n * (e + 1n));
                    for (; 0n !== e;) {
                        const o = e % i,
                            u = Number(n ? 0xffn ^ o : o);
                        t ? r.push(u) : r.unshift(u), e = (e - o) / i
                    }
                    return Uint8Array.from(r)
                }(u, n);
                if (-1 === n.bitLength) return s;
                const c = Math.ceil((n.bitLength || 0) / 8),
                    a = new Uint8Array(c);
                n.isNegative && a.fill(255);
                return a.set(s, n.isLe ? 0 : c - s.length), a
            };
            var r = n(5691),
                o = n(6431);
            const i = 256n
        },
        7093: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.BN_ZERO = t.BN_TWO = t.BN_THREE = t.BN_THOUSAND = t.BN_TEN = t.BN_SIX = t.BN_SEVEN = t.BN_QUINTILL = t.BN_ONE = t.BN_NINE = t.BN_MILLION = t.BN_MAX_INTEGER = t.BN_HUNDRED = t.BN_FOUR = t.BN_FIVE = t.BN_EIGHT = t.BN_BILLION = void 0;
            var r = n(5837);
            const o = new r.BN(0);
            t.BN_ZERO = o;
            const i = new r.BN(1);
            t.BN_ONE = i;
            const u = new r.BN(2);
            t.BN_TWO = u;
            const s = new r.BN(3);
            t.BN_THREE = s;
            const c = new r.BN(4);
            t.BN_FOUR = c;
            const a = new r.BN(5);
            t.BN_FIVE = a;
            const l = new r.BN(6);
            t.BN_SIX = l;
            const f = new r.BN(7);
            t.BN_SEVEN = f;
            const d = new r.BN(8);
            t.BN_EIGHT = d;
            const p = new r.BN(9);
            t.BN_NINE = p;
            const b = new r.BN(10);
            t.BN_TEN = b;
            const y = new r.BN(100);
            t.BN_HUNDRED = y;
            const m = new r.BN(1e3);
            t.BN_THOUSAND = m;
            const g = new r.BN(1e6);
            t.BN_MILLION = g;
            const O = new r.BN(1e9);
            t.BN_BILLION = O;
            const v = O.mul(O);
            t.BN_QUINTILL = v;
            const h = new r.BN(Number.MAX_SAFE_INTEGER);
            t.BN_MAX_INTEGER = h
        },
        7094: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.bnMax = function(...e) {
                return i("max", e)
            }, t.checkMaxMin = i;
            var r = n(5690),
                o = n(5837);

            function i(e, t) {
                (0, r.assert)(t.length >= 1, "Must provide one or more BN arguments");
                let n = t[0];
                for (let r = 1; r < t.length; r++) n = o.BN[e](n, t[r]);
                return n
            }
        },
        7095: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.bnToU8a = function(e, t = u, n) {
                const s = (0, o.objectSpread)({
                        bitLength: -1,
                        isLe: !0,
                        isNegative: !1
                    }, (0, r.isNumber)(t) ? {
                        bitLength: t,
                        isLe: n
                    } : t),
                    c = (0, i.bnToBn)(e),
                    a = -1 === s.bitLength ? Math.ceil(c.bitLength() / 8) : Math.ceil((s.bitLength || 0) / 8);
                return e ? function(e, t, {
                    isLe: n,
                    isNegative: r
                }) {
                    const o = new Uint8Array(t),
                        i = r ? e.toTwos(8 * t) : e;
                    return o.set(i.toArray(n ? "le" : "be", t), 0), o
                }(c, a, s) : function(e, t) {
                    return -1 === t.bitLength ? new Uint8Array : new Uint8Array(e)
                }(a, s)
            };
            var r = n(6443),
                o = n(5691),
                i = n(5915);
            const u = {
                bitLength: -1,
                isLe: !0,
                isNegative: !1
            }
        },
        7096: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.compactToU8a = function(e) {
                const t = (0, o.bnToBn)(e);
                if (t.lte(u)) return new Uint8Array([t.toNumber() << 2]);
                if (t.lte(s)) return (0, o.bnToU8a)(t.shln(2).iadd(o.BN_ONE), 16, !0);
                if (t.lte(c)) return (0, o.bnToU8a)(t.shln(2).iadd(o.BN_TWO), 32, !0);
                const n = (0, o.bnToU8a)(t);
                let a = n.length;
                for (; 0 === n[a - 1];) a--;
                return (0, r.assert)(a >= 4, "Invalid length, previous checks match anything less than 2^30"), (0, i.u8aConcat)([3 + (a - 4 << 2)], n.subarray(0, a))
            };
            var r = n(5690),
                o = n(6441),
                i = n(5914);
            const u = o.BN_TWO.pow(new o.BN(6)).isub(o.BN_ONE),
                s = o.BN_TWO.pow(new o.BN(14)).isub(o.BN_ONE),
                c = o.BN_TWO.pow(new o.BN(30)).isub(o.BN_ONE)
        },
        7097: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.compactFromU8a = function(e) {
                const t = (0, o.u8aToU8a)(e),
                    n = 3 & t[0];
                if (0 === n) return [1, new r.BN(t[0]).ishrn(2)];
                if (1 === n) return [2, (0, o.u8aToBn)(t.subarray(0, 2), !0).ishrn(2)];
                if (2 === n) return [4, (0, o.u8aToBn)(t.subarray(0, 4), !0).ishrn(2)];
                const i = 1 + new r.BN(t[0]).ishrn(2).iadd(r.BN_FOUR).toNumber();
                return [i, (0, o.u8aToBn)(t.subarray(1, i), !0)]
            };
            var r = n(6441),
                o = n(5914)
        },
        7098: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.SI_MID = t.SI = void 0, t.calcSi = function(e, t, n) {
                if (n) return o(n);
                const i = 7 + Math.ceil((e.length - t) / 3);
                return r[i] || r[i < 0 ? 0 : r.length - 1]
            }, t.findSi = o;
            t.SI_MID = 8;
            const r = [{
                power: -24,
                text: "yocto",
                value: "y"
            }, {
                power: -21,
                text: "zepto",
                value: "z"
            }, {
                power: -18,
                text: "atto",
                value: "a"
            }, {
                power: -15,
                text: "femto",
                value: "f"
            }, {
                power: -12,
                text: "pico",
                value: "p"
            }, {
                power: -9,
                text: "nano",
                value: "n"
            }, {
                power: -6,
                text: "micro",
                value: "µ"
            }, {
                power: -3,
                text: "milli",
                value: "m"
            }, {
                power: 0,
                text: "Unit",
                value: "-"
            }, {
                power: 3,
                text: "Kilo",
                value: "k"
            }, {
                power: 6,
                text: "Mill",
                value: "M"
            }, {
                power: 9,
                text: "Bill",
                value: "B"
            }, {
                power: 12,
                text: "Tril",
                value: "T"
            }, {
                power: 15,
                text: "Peta",
                value: "P"
            }, {
                power: 18,
                text: "Exa",
                value: "E"
            }, {
                power: 21,
                text: "Zeta",
                value: "Z"
            }, {
                power: 24,
                text: "Yotta",
                value: "Y"
            }];

            function o(e) {
                for (let t = 0; t < r.length; t++)
                    if (r[t].value === e) return r[t];
                return r[8]
            }
            t.SI = r
        },
        7099: function(e, t, n) {
            "use strict";

            function r(e) {
                return e.toString().padStart(2, "0")
            }
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.formatDate = function(e) {
                const t = e.getFullYear().toString(),
                    n = r(e.getMonth() + 1),
                    o = r(e.getDate()),
                    i = r(e.getHours()),
                    u = r(e.getMinutes()),
                    s = r(e.getSeconds());
                return `${t}-${n}-${o} ${i}:${u}:${s}`
            }
        },
        7100: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.hexAddPrefix = function(e) {
                if (e && (0, r.hexHasPrefix)(e)) return e;
                return `0x${e&&e.length%2==1?"0":""}${e||""}`
            };
            var r = n(7101)
        },
        7101: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.hexHasPrefix = function(e) {
                return !!e && (0, r.isHex)(e, -1)
            };
            var r = n(5836)
        },
        7102: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.hexFixLength = function(e, t = -1, n = !1) {
                const i = Math.ceil(t / 4),
                    u = i + 2;
                return (0, r.hexAddPrefix)(-1 === t || e.length === u || !n && e.length < u ? (0, o.hexStripPrefix)(e) : e.length > u ? (0, o.hexStripPrefix)(e).slice(-1 * i) : `${"0".repeat(i)}${(0,o.hexStripPrefix)(e)}`.slice(-1 * i))
            };
            var r = n(7100),
                o = n(6165)
        },
        7103: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.numberToHex = function(e, t = -1) {
                if ((0, i.isUndefined)(e) || (0, o.isNull)(e) || isNaN(e)) return "0x";
                const n = e.toString(16);
                return (0, r.hexFixLength)(n.length % 2 ? "0" + n : n, t, !0)
            };
            var r = n(7102),
                o = n(6020),
                i = n(5734)
        },
        7104: function(e, t, n) {
            "use strict";
            const r = /[\p{Lu}]/u,
                o = /[\p{Ll}]/u,
                i = /^[\p{Lu}](?![\p{Lu}])/gu,
                u = /([\p{Alpha}\p{N}_]|$)/u,
                s = /[_.\- ]+/,
                c = new RegExp("^" + s.source),
                a = new RegExp(s.source + u.source, "gu"),
                l = new RegExp("\\d+" + u.source, "gu"),
                f = (e, t) => {
                    if ("string" != typeof e && !Array.isArray(e)) throw new TypeError("Expected the input to be `string | string[]`");
                    if (t = {
                            pascalCase: !1,
                            preserveConsecutiveUppercase: !1,
                            ...t
                        }, 0 === (e = Array.isArray(e) ? e.map(e => e.trim()).filter(e => e.length).join("-") : e.trim()).length) return "";
                    const n = !1 === t.locale ? e => e.toLowerCase() : e => e.toLocaleLowerCase(t.locale),
                        u = !1 === t.locale ? e => e.toUpperCase() : e => e.toLocaleUpperCase(t.locale);
                    if (1 === e.length) return t.pascalCase ? u(e) : n(e);
                    return e !== n(e) && (e = ((e, t, n) => {
                        let i = !1,
                            u = !1,
                            s = !1;
                        for (let c = 0; c < e.length; c++) {
                            const a = e[c];
                            i && r.test(a) ? (e = e.slice(0, c) + "-" + e.slice(c), i = !1, s = u, u = !0, c++) : u && s && o.test(a) ? (e = e.slice(0, c - 1) + "-" + e.slice(c - 1), s = u, u = !1, i = !0) : (i = t(a) === a && n(a) !== a, s = u, u = n(a) === a && t(a) !== a)
                        }
                        return e
                    })(e, n, u)), e = e.replace(c, ""), e = t.preserveConsecutiveUppercase ? ((e, t) => (i.lastIndex = 0, e.replace(i, e => t(e))))(e, n) : n(e), t.pascalCase && (e = u(e.charAt(0)) + e.slice(1)), ((e, t) => (a.lastIndex = 0, l.lastIndex = 0, e.replace(a, (e, n) => t(n)).replace(l, e => t(e))))(e, u)
                };
            e.exports = f, e.exports.default = f
        },
        8532: function(e, t, n) {
            "use strict";
            var r = n(8533),
                o = n(6429),
                i = n(5992);
            (0, o.detectPackage)(i.packageInfo, "undefined" != typeof __dirname && __dirname, [r.packageInfo])
        },
        8533: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.packageInfo = void 0;
            t.packageInfo = {
                name: "@polkadot/types",
                version: "6.3.1"
            }
        },
        8534: function(e, t, n) {
            var r = n(7080),
                o = n(7081),
                i = n(7082);
            (0, n(7083).detectPackage)(i.packageInfo, "undefined" != typeof __dirname && __dirname, [r.packageInfo, o.packageInfo])
        },
        8535: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.packageInfo = void 0;
            t.packageInfo = {
                name: "@polkadot/x-global",
                version: "7.9.2"
            }
        },
        8536: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.TextDecoder = void 0;
            t.TextDecoder = class TextDecoder {
                constructor(e) {}
                decode(e) {
                    let t = "";
                    for (let n = 0; n < e.length; n++) t += String.fromCharCode(e[n]);
                    return t
                }
            }
        },
        8537: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.packageInfo = void 0;
            t.packageInfo = {
                name: "@polkadot/x-textdecoder",
                version: "7.9.2"
            }
        },
        8538: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.TextEncoder = void 0;
            t.TextEncoder = class TextEncoder {
                encode(e) {
                    const t = new Uint8Array(e.length);
                    for (let n = 0; n < e.length; n++) t[n] = e.charCodeAt(n);
                    return t
                }
            }
        },
        8539: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.packageInfo = void 0;
            t.packageInfo = {
                name: "@polkadot/x-textencoder",
                version: "7.9.2"
            }
        },
        8540: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var r = {
                packageInfo: !0
            };
            Object.defineProperty(t, "packageInfo", {
                enumerable: !0,
                get: function() {
                    return o.packageInfo
                }
            });
            var o = n(7082),
                i = n(8541);
            Object.keys(i).forEach((function(e) {
                "default" !== e && "__esModule" !== e && (Object.prototype.hasOwnProperty.call(r, e) || e in t && t[e] === i[e] || Object.defineProperty(t, e, {
                    enumerable: !0,
                    get: function() {
                        return i[e]
                    }
                }))
            }));
            var u = n(5690);
            Object.keys(u).forEach((function(e) {
                "default" !== e && "__esModule" !== e && (Object.prototype.hasOwnProperty.call(r, e) || e in t && t[e] === u[e] || Object.defineProperty(t, e, {
                    enumerable: !0,
                    get: function() {
                        return u[e]
                    }
                }))
            }));
            var s = n(8548);
            Object.keys(s).forEach((function(e) {
                "default" !== e && "__esModule" !== e && (Object.prototype.hasOwnProperty.call(r, e) || e in t && t[e] === s[e] || Object.defineProperty(t, e, {
                    enumerable: !0,
                    get: function() {
                        return s[e]
                    }
                }))
            }));
            var c = n(6441);
            Object.keys(c).forEach((function(e) {
                "default" !== e && "__esModule" !== e && (Object.prototype.hasOwnProperty.call(r, e) || e in t && t[e] === c[e] || Object.defineProperty(t, e, {
                    enumerable: !0,
                    get: function() {
                        return c[e]
                    }
                }))
            }));
            var a = n(8563);
            Object.keys(a).forEach((function(e) {
                "default" !== e && "__esModule" !== e && (Object.prototype.hasOwnProperty.call(r, e) || e in t && t[e] === a[e] || Object.defineProperty(t, e, {
                    enumerable: !0,
                    get: function() {
                        return a[e]
                    }
                }))
            }));
            var l = n(8565);
            Object.keys(l).forEach((function(e) {
                "default" !== e && "__esModule" !== e && (Object.prototype.hasOwnProperty.call(r, e) || e in t && t[e] === l[e] || Object.defineProperty(t, e, {
                    enumerable: !0,
                    get: function() {
                        return l[e]
                    }
                }))
            }));
            var f = n(8568);
            Object.keys(f).forEach((function(e) {
                "default" !== e && "__esModule" !== e && (Object.prototype.hasOwnProperty.call(r, e) || e in t && t[e] === f[e] || Object.defineProperty(t, e, {
                    enumerable: !0,
                    get: function() {
                        return f[e]
                    }
                }))
            }));
            var d = n(8569);
            Object.keys(d).forEach((function(e) {
                "default" !== e && "__esModule" !== e && (Object.prototype.hasOwnProperty.call(r, e) || e in t && t[e] === d[e] || Object.defineProperty(t, e, {
                    enumerable: !0,
                    get: function() {
                        return d[e]
                    }
                }))
            }));
            var p = n(6436);
            Object.keys(p).forEach((function(e) {
                "default" !== e && "__esModule" !== e && (Object.prototype.hasOwnProperty.call(r, e) || e in t && t[e] === p[e] || Object.defineProperty(t, e, {
                    enumerable: !0,
                    get: function() {
                        return p[e]
                    }
                }))
            }));
            var b = n(8573);
            Object.keys(b).forEach((function(e) {
                "default" !== e && "__esModule" !== e && (Object.prototype.hasOwnProperty.call(r, e) || e in t && t[e] === b[e] || Object.defineProperty(t, e, {
                    enumerable: !0,
                    get: function() {
                        return b[e]
                    }
                }))
            }));
            var y = n(8576);
            Object.keys(y).forEach((function(e) {
                "default" !== e && "__esModule" !== e && (Object.prototype.hasOwnProperty.call(r, e) || e in t && t[e] === y[e] || Object.defineProperty(t, e, {
                    enumerable: !0,
                    get: function() {
                        return y[e]
                    }
                }))
            }));
            var m = n(8590);
            Object.keys(m).forEach((function(e) {
                "default" !== e && "__esModule" !== e && (Object.prototype.hasOwnProperty.call(r, e) || e in t && t[e] === m[e] || Object.defineProperty(t, e, {
                    enumerable: !0,
                    get: function() {
                        return m[e]
                    }
                }))
            }));
            var g = n(8591);
            Object.keys(g).forEach((function(e) {
                "default" !== e && "__esModule" !== e && (Object.prototype.hasOwnProperty.call(r, e) || e in t && t[e] === g[e] || Object.defineProperty(t, e, {
                    enumerable: !0,
                    get: function() {
                        return g[e]
                    }
                }))
            }));
            var O = n(8592);
            Object.keys(O).forEach((function(e) {
                "default" !== e && "__esModule" !== e && (Object.prototype.hasOwnProperty.call(r, e) || e in t && t[e] === O[e] || Object.defineProperty(t, e, {
                    enumerable: !0,
                    get: function() {
                        return O[e]
                    }
                }))
            }));
            var v = n(8593);
            Object.keys(v).forEach((function(e) {
                "default" !== e && "__esModule" !== e && (Object.prototype.hasOwnProperty.call(r, e) || e in t && t[e] === v[e] || Object.defineProperty(t, e, {
                    enumerable: !0,
                    get: function() {
                        return v[e]
                    }
                }))
            }));
            var h = n(8595);
            Object.keys(h).forEach((function(e) {
                "default" !== e && "__esModule" !== e && (Object.prototype.hasOwnProperty.call(r, e) || e in t && t[e] === h[e] || Object.defineProperty(t, e, {
                    enumerable: !0,
                    get: function() {
                        return h[e]
                    }
                }))
            }));
            var _ = n(8601);
            Object.keys(_).forEach((function(e) {
                "default" !== e && "__esModule" !== e && (Object.prototype.hasOwnProperty.call(r, e) || e in t && t[e] === _[e] || Object.defineProperty(t, e, {
                    enumerable: !0,
                    get: function() {
                        return _[e]
                    }
                }))
            }));
            var P = n(8602);
            Object.keys(P).forEach((function(e) {
                "default" !== e && "__esModule" !== e && (Object.prototype.hasOwnProperty.call(r, e) || e in t && t[e] === P[e] || Object.defineProperty(t, e, {
                    enumerable: !0,
                    get: function() {
                        return P[e]
                    }
                }))
            }));
            var j = n(6445);
            Object.keys(j).forEach((function(e) {
                "default" !== e && "__esModule" !== e && (Object.prototype.hasOwnProperty.call(r, e) || e in t && t[e] === j[e] || Object.defineProperty(t, e, {
                    enumerable: !0,
                    get: function() {
                        return j[e]
                    }
                }))
            }));
            var M = n(5914);
            Object.keys(M).forEach((function(e) {
                "default" !== e && "__esModule" !== e && (Object.prototype.hasOwnProperty.call(r, e) || e in t && t[e] === M[e] || Object.defineProperty(t, e, {
                    enumerable: !0,
                    get: function() {
                        return M[e]
                    }
                }))
            }));
            var V = n(7083);
            Object.keys(V).forEach((function(e) {
                "default" !== e && "__esModule" !== e && (Object.prototype.hasOwnProperty.call(r, e) || e in t && t[e] === V[e] || Object.defineProperty(t, e, {
                    enumerable: !0,
                    get: function() {
                        return V[e]
                    }
                }))
            }))
        },
        8541: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), Object.defineProperty(t, "arrayChunk", {
                enumerable: !0,
                get: function() {
                    return r.arrayChunk
                }
            }), Object.defineProperty(t, "arrayFilter", {
                enumerable: !0,
                get: function() {
                    return o.arrayFilter
                }
            }), Object.defineProperty(t, "arrayFlatten", {
                enumerable: !0,
                get: function() {
                    return i.arrayFlatten
                }
            }), Object.defineProperty(t, "arrayRange", {
                enumerable: !0,
                get: function() {
                    return u.arrayRange
                }
            }), Object.defineProperty(t, "arrayShuffle", {
                enumerable: !0,
                get: function() {
                    return s.arrayShuffle
                }
            }), Object.defineProperty(t, "arrayZip", {
                enumerable: !0,
                get: function() {
                    return c.arrayZip
                }
            });
            var r = n(8542),
                o = n(8543),
                i = n(8544),
                u = n(8545),
                s = n(8546),
                c = n(8547)
        },
        8542: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.arrayChunk = function(e, t) {
                const n = Math.ceil(e.length / t),
                    r = Array(n);
                for (let o = 0; o < n; o++) {
                    const n = o * t;
                    r[o] = e.slice(n, n + t)
                }
                return r
            }
        },
        8543: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.arrayFilter = function(e, t = !0) {
                return e.filter(e => !(0, o.isUndefined)(e) && (t || !(0, r.isNull)(e)))
            };
            var r = n(6020),
                o = n(5734)
        },
        8544: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.arrayFlatten = function(e) {
                let t = 0;
                for (let n = 0; n < e.length; n++) t += e[n].length;
                const n = new Array(t);
                let r = -1;
                for (let t = 0; t < e.length; t++) {
                    const o = e[t];
                    for (let e = 0; e < o.length; e++) n[++r] = o[e]
                }
                return n
            }
        },
        8545: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.arrayRange = function(e, t = 0) {
                (0, r.assert)(e > 0, "Expected non-zero, positive number as a range size");
                const n = new Array(e).fill(0);
                for (let e = 0; e < n.length; e++) n[e] = e + t;
                return n
            };
            var r = n(5690)
        },
        8546: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.arrayShuffle = function(e) {
                const t = e.slice();
                let n = t.length;
                if (1 === n) return t;
                for (; 0 !== n;) {
                    const e = Math.floor(Math.random() * n);
                    n--, [t[n], t[e]] = [t[e], t[n]]
                }
                return t
            }
        },
        8547: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.arrayZip = function(e, t) {
                const n = new Array(e.length);
                for (let r = 0; r < e.length; r++) n[r] = [e[r], t[r]];
                return n
            }
        },
        8548: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var r = {
                biSqrt: !0,
                biToBigInt: !0,
                biMax: !0,
                biMin: !0,
                biToHex: !0,
                biToU8a: !0
            };
            Object.defineProperty(t, "biMax", {
                enumerable: !0,
                get: function() {
                    return s.biMax
                }
            }), Object.defineProperty(t, "biMin", {
                enumerable: !0,
                get: function() {
                    return c.biMin
                }
            }), Object.defineProperty(t, "biSqrt", {
                enumerable: !0,
                get: function() {
                    return i.biSqrt
                }
            }), Object.defineProperty(t, "biToBigInt", {
                enumerable: !0,
                get: function() {
                    return u.biToBigInt
                }
            }), Object.defineProperty(t, "biToHex", {
                enumerable: !0,
                get: function() {
                    return a.biToHex
                }
            }), Object.defineProperty(t, "biToU8a", {
                enumerable: !0,
                get: function() {
                    return l.biToU8a
                }
            });
            var o = n(7084);
            Object.keys(o).forEach((function(e) {
                "default" !== e && "__esModule" !== e && (Object.prototype.hasOwnProperty.call(r, e) || e in t && t[e] === o[e] || Object.defineProperty(t, e, {
                    enumerable: !0,
                    get: function() {
                        return o[e]
                    }
                }))
            }));
            var i = n(8549),
                u = n(6431),
                s = n(8550),
                c = n(8551),
                a = n(8552),
                l = n(7092)
        },
        8549: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.biSqrt = function(e) {
                const t = (0, i.biToBigInt)(e);
                if ((0, r.assert)(t >= 0n, "square root of negative numbers is not supported"), t <= o.BI_MAX_INTEGER) return BigInt(Math.floor(Math.sqrt(Number(t))));
                let n = u;
                for (;;) {
                    const e = t / n + n >> 1n;
                    if (n === e || n === e - 1n) return n;
                    n = e
                }
            };
            var r = n(5690),
                o = n(7084),
                i = n(6431);
            const u = 94906265n
        },
        8550: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.biMax = function(...e) {
                (0, r.assert)(e.length >= 1, "Must provide one or more bigint arguments");
                let t = e[0];
                for (let n = 1; n < e.length; n++) e[n] > t && (t = e[n]);
                return t
            };
            var r = n(5690)
        },
        8551: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.biMin = function(...e) {
                (0, r.assert)(e.length >= 1, "Must provide one or more bigint arguments");
                let t = e[0];
                for (let n = 1; n < e.length; n++) e[n] < t && (t = e[n]);
                return t
            };
            var r = n(5690)
        },
        8552: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.biToHex = function(e, t) {
                if (!e) return "0x00";
                return (0, o.u8aToHex)((0, i.biToU8a)(e, (0, r.objectSpread)({
                    isLe: !1,
                    isNegative: !1
                }, t)))
            };
            var r = n(5691),
                o = n(5914),
                i = n(7092)
        },
        8553: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.u8aEmpty = function(e) {
                for (let t = 0; t < e.length; t++)
                    if (e[t]) return !1;
                return !0
            }
        },
        8554: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.u8aFixLength = function(e, t = -1, n = !1) {
                const r = Math.ceil(t / 8);
                if (-1 === t || e.length === r) return e;
                if (e.length > r) return e.subarray(0, r);
                const o = new Uint8Array(r);
                return o.set(e, n ? 0 : r - e.length), o
            }
        },
        8555: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.u8aSorted = function(e) {
                return e.sort(r.u8aCmp)
            };
            var r = n(7089)
        },
        8556: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.u8aToBn = function(e, t = i) {
                return (0, r.hexToBn)((0, o.u8aToHex)(e), t)
            };
            var r = n(6022),
                o = n(6166);
            const i = {
                isLe: !0,
                isNegative: !1
            }
        },
        8557: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.u8aToBuffer = function(e) {
                return Buffer.from(e || [])
            }
        },
        8558: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.U8A_WRAP_PREFIX = t.U8A_WRAP_POSTFIX = t.U8A_WRAP_ETHEREUM = void 0, t.u8aIsWrapped = l, t.u8aUnwrapBytes = function(e) {
                const t = (0, i.u8aToU8a)(e);
                return l(t, !1) ? t.subarray(s.length, t.length - c.length) : t
            }, t.u8aWrapBytes = function(e) {
                const t = (0, i.u8aToU8a)(e);
                return l(t, !0) ? t : (0, r.u8aConcat)(s, t, c)
            };
            var r = n(7090),
                o = n(6439),
                i = n(5778);
            const u = (0, i.u8aToU8a)("Ethereum Signed Message:\n");
            t.U8A_WRAP_ETHEREUM = u;
            const s = (0, i.u8aToU8a)("<Bytes>");
            t.U8A_WRAP_PREFIX = s;
            const c = (0, i.u8aToU8a)("</Bytes>");
            t.U8A_WRAP_POSTFIX = c;
            const a = s.length + c.length;

            function l(e, t) {
                return e.length >= a && (0, o.u8aEq)(e.subarray(0, s.length), s) && (0, o.u8aEq)(e.slice(-c.length), c) || t && e.length >= u.length && (0, o.u8aEq)(e.subarray(0, u.length), u)
            }
        },
        8559: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), Object.defineProperty(t, "bnFromHex", {
                enumerable: !0,
                get: function() {
                    return r.hexToBn
                }
            });
            var r = n(6022)
        },
        8560: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.bnMin = function(...e) {
                return (0, r.checkMaxMin)("min", e)
            };
            var r = n(7094)
        },
        8561: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.bnSqrt = function(e) {
                const t = (0, u.bnToBn)(e);
                if ((0, r.assert)(t.gte(i.BN_ZERO), "square root of negative numbers is not supported"), t.lte(i.BN_MAX_INTEGER)) return new o.BN(Math.floor(Math.sqrt(t.toNumber())));
                let n = s.clone();
                for (;;) {
                    const e = t.div(n).iadd(n).ishrn(1);
                    if (n.eq(e) || n.eq(e.sub(i.BN_ONE))) return n;
                    n = e
                }
            };
            var r = n(5690),
                o = n(5837),
                i = n(7093),
                u = n(5915);
            const s = new o.BN(94906265)
        },
        8562: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.bnToHex = function(e, t = s, n) {
                if (!e) return "0x00";
                return (0, i.u8aToHex)((0, u.bnToU8a)(e, (0, o.objectSpread)({
                    isLe: !1,
                    isNegative: !1
                }, (0, r.isNumber)(t) ? {
                    bitLength: t,
                    isLe: n
                } : t)))
            };
            var r = n(6443),
                o = n(5691),
                i = n(5914),
                u = n(7095);
            const s = {
                bitLength: -1,
                isLe: !1,
                isNegative: !1
            }
        },
        8563: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), Object.defineProperty(t, "bufferToU8a", {
                enumerable: !0,
                get: function() {
                    return r.bufferToU8a
                }
            });
            var r = n(8564)
        },
        8564: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.bufferToU8a = function(e) {
                return new Uint8Array(e || [])
            }
        },
        8565: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), Object.defineProperty(t, "compactAddLength", {
                enumerable: !0,
                get: function() {
                    return r.compactAddLength
                }
            }), Object.defineProperty(t, "compactFromU8a", {
                enumerable: !0,
                get: function() {
                    return i.compactFromU8a
                }
            }), Object.defineProperty(t, "compactStripLength", {
                enumerable: !0,
                get: function() {
                    return o.compactStripLength
                }
            }), Object.defineProperty(t, "compactToU8a", {
                enumerable: !0,
                get: function() {
                    return u.compactToU8a
                }
            });
            var r = n(8566),
                o = n(8567),
                i = n(7097),
                u = n(7096)
        },
        8566: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.compactAddLength = function(e) {
                return (0, r.u8aConcat)((0, o.compactToU8a)(e.length), e)
            };
            var r = n(5914),
                o = n(7096)
        },
        8567: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.compactStripLength = function(e) {
                const [t, n] = (0, r.compactFromU8a)(e), o = t + n.toNumber();
                return [o, e.subarray(t, o)]
            };
            var r = n(7097)
        },
        8568: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.extractTime = c;
            var r = n(5691);

            function o(e, t) {
                return {
                    days: e.days + t.days,
                    hours: e.hours + t.hours,
                    milliseconds: e.milliseconds + t.milliseconds,
                    minutes: e.minutes + t.minutes,
                    seconds: e.seconds + t.seconds
                }
            }
            const i = {
                days: 0,
                hours: 0,
                milliseconds: 0,
                minutes: 0,
                seconds: 0
            };

            function u(e, t) {
                const n = t / 60;
                if (n < 24) {
                    const t = Math.floor(n);
                    return o((0, r.objectSpread)({}, i, {
                        hours: t
                    }), c(e - 3600 * t * 1e3))
                }
                return function(e, t) {
                    const n = Math.floor(t / 24);
                    return o((0, r.objectSpread)({}, i, {
                        days: n
                    }), c(e - 86400 * n * 1e3))
                }(e, n)
            }

            function s(e) {
                const t = e / 1e3;
                if (t < 60) {
                    const n = Math.floor(t);
                    return o((0, r.objectSpread)({}, i, {
                        seconds: n
                    }), c(e - 1e3 * n))
                }
                return function(e, t) {
                    const n = t / 60;
                    if (n < 60) {
                        const t = Math.floor(n);
                        return o((0, r.objectSpread)({}, i, {
                            minutes: t
                        }), c(e - 60 * t * 1e3))
                    }
                    return u(e, n)
                }(e, t)
            }

            function c(e) {
                return e ? e < 1e3 ? (0, r.objectSpread)({}, i, {
                    milliseconds: e
                }) : s(e) : i
            }
        },
        8569: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), Object.defineProperty(t, "calcSi", {
                enumerable: !0,
                get: function() {
                    return c.calcSi
                }
            }), Object.defineProperty(t, "findSi", {
                enumerable: !0,
                get: function() {
                    return c.findSi
                }
            }), Object.defineProperty(t, "formatBalance", {
                enumerable: !0,
                get: function() {
                    return r.formatBalance
                }
            }), Object.defineProperty(t, "formatDate", {
                enumerable: !0,
                get: function() {
                    return o.formatDate
                }
            }), Object.defineProperty(t, "formatDecimal", {
                enumerable: !0,
                get: function() {
                    return i.formatDecimal
                }
            }), Object.defineProperty(t, "formatElapsed", {
                enumerable: !0,
                get: function() {
                    return u.formatElapsed
                }
            }), Object.defineProperty(t, "formatNumber", {
                enumerable: !0,
                get: function() {
                    return s.formatNumber
                }
            });
            var r = n(8570),
                o = n(7099),
                i = n(6444),
                u = n(8571),
                s = n(8572),
                c = n(7098)
        },
        8570: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.formatBalance = void 0;
            var r = n(5915),
                o = n(6440),
                i = n(5734),
                u = n(6444),
                s = n(7098);
            const c = s.SI[s.SI_MID].text;
            let a = 0,
                l = c;
            const f = function(e, t = !0, n = a) {
                let i = (0, r.bnToBn)(e).toString();
                if (0 === i.length || "0" === i) return "0";
                const c = i[0].startsWith("-");
                c && (i = i.substr(1));
                const {
                    decimals: l = n,
                    forceUnit: f,
                    withSi: d = !0,
                    withSiFull: p = !1,
                    withUnit: b = !0
                } = (0, o.isBoolean)(t) ? {
                    withSi: t
                } : t, y = (0, s.calcSi)(i, l, f), m = i.length - (l + y.power), g = i.substr(0, m), O = (`${new Array((m<0?0-m:0)+1).join("0")}${i}`.substr(m < 0 ? 0 : m) + "0000").substr(0, 4), v = d || p ? "-" === y.value ? b ? " " + ((0, o.isBoolean)(b) ? y.text : b) : "" : ` ${p?y.text:y.value}${b?`${p?" ":""}${(0,o.isBoolean)(b)?s.SI[s.SI_MID].text:b}`:""}` : "";
                return `${c?"-":""}${(0,u.formatDecimal)(g||"0")}.${O}${v}`
            };
            t.formatBalance = f, f.calcSi = (e, t = a) => (0, s.calcSi)(e, t), f.findSi = s.findSi, f.getDefaults = () => ({
                decimals: a,
                unit: l
            }), f.getOptions = (e = a) => s.SI.filter(({
                power: t
            }) => !(t < 0) || e + t >= 0), f.setDefaults = ({
                decimals: e,
                unit: t
            }) => {
                a = (0, i.isUndefined)(e) ? a : Array.isArray(e) ? e[0] : e, l = (0, i.isUndefined)(t) ? l : Array.isArray(t) ? t[0] : t, s.SI[s.SI_MID].text = l
            }
        },
        8571: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.formatElapsed = function(e, t) {
                const n = e && e.getTime() || 0,
                    o = t instanceof Date ? t.getTime() : (0, r.bnToBn)(t).toNumber();
                return n && o ? function(e) {
                    if (e < 15) return e.toFixed(1) + "s";
                    if (e < 60) return (0 | e) + "s";
                    if (e < 3600) return (e / 60 | 0) + "m";
                    return (e / 3600 | 0) + "h"
                }(Math.max(Math.abs(n - o), 0) / 1e3) : "0.0s"
            };
            var r = n(5915)
        },
        8572: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.formatNumber = function(e) {
                return (0, o.formatDecimal)((0, r.bnToBn)(e).toString())
            };
            var r = n(5915),
                o = n(6444)
        },
        8573: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), Object.defineProperty(t, "hexAddPrefix", {
                enumerable: !0,
                get: function() {
                    return r.hexAddPrefix
                }
            }), Object.defineProperty(t, "hexFixLength", {
                enumerable: !0,
                get: function() {
                    return o.hexFixLength
                }
            }), Object.defineProperty(t, "hexHasPrefix", {
                enumerable: !0,
                get: function() {
                    return i.hexHasPrefix
                }
            }), Object.defineProperty(t, "hexStripPrefix", {
                enumerable: !0,
                get: function() {
                    return u.hexStripPrefix
                }
            }), Object.defineProperty(t, "hexToBigInt", {
                enumerable: !0,
                get: function() {
                    return s.hexToBigInt
                }
            }), Object.defineProperty(t, "hexToBn", {
                enumerable: !0,
                get: function() {
                    return c.hexToBn
                }
            }), Object.defineProperty(t, "hexToNumber", {
                enumerable: !0,
                get: function() {
                    return a.hexToNumber
                }
            }), Object.defineProperty(t, "hexToString", {
                enumerable: !0,
                get: function() {
                    return l.hexToString
                }
            }), Object.defineProperty(t, "hexToU8a", {
                enumerable: !0,
                get: function() {
                    return f.hexToU8a
                }
            });
            var r = n(7100),
                o = n(7102),
                i = n(7101),
                u = n(6165),
                s = n(7085),
                c = n(6022),
                a = n(8574),
                l = n(8575),
                f = n(6021)
        },
        8574: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.hexToNumber = function(e) {
                return e ? (0, r.hexToBn)(e).toNumber() : NaN
            };
            var r = n(6022)
        },
        8575: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.hexToString = function(e) {
                return (0, r.u8aToString)((0, o.hexToU8a)(e))
            };
            var r = n(7091),
                o = n(6021)
        },
        8576: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), Object.defineProperty(t, "isArray", {
                enumerable: !0,
                get: function() {
                    return r.isArray
                }
            }), Object.defineProperty(t, "isAscii", {
                enumerable: !0,
                get: function() {
                    return o.isAscii
                }
            }), Object.defineProperty(t, "isBigInt", {
                enumerable: !0,
                get: function() {
                    return i.isBigInt
                }
            }), Object.defineProperty(t, "isBn", {
                enumerable: !0,
                get: function() {
                    return u.isBn
                }
            }), Object.defineProperty(t, "isBoolean", {
                enumerable: !0,
                get: function() {
                    return c.isBoolean
                }
            }), Object.defineProperty(t, "isBuffer", {
                enumerable: !0,
                get: function() {
                    return s.isBuffer
                }
            }), Object.defineProperty(t, "isChildClass", {
                enumerable: !0,
                get: function() {
                    return a.isChildClass
                }
            }), Object.defineProperty(t, "isCodec", {
                enumerable: !0,
                get: function() {
                    return l.isCodec
                }
            }), Object.defineProperty(t, "isCompact", {
                enumerable: !0,
                get: function() {
                    return f.isCompact
                }
            }), Object.defineProperty(t, "isError", {
                enumerable: !0,
                get: function() {
                    return d.isError
                }
            }), Object.defineProperty(t, "isFunction", {
                enumerable: !0,
                get: function() {
                    return p.isFunction
                }
            }), Object.defineProperty(t, "isHex", {
                enumerable: !0,
                get: function() {
                    return b.isHex
                }
            }), Object.defineProperty(t, "isInstanceOf", {
                enumerable: !0,
                get: function() {
                    return y.isInstanceOf
                }
            }), Object.defineProperty(t, "isIp", {
                enumerable: !0,
                get: function() {
                    return m.isIp
                }
            }), Object.defineProperty(t, "isJsonObject", {
                enumerable: !0,
                get: function() {
                    return g.isJsonObject
                }
            }), Object.defineProperty(t, "isNull", {
                enumerable: !0,
                get: function() {
                    return O.isNull
                }
            }), Object.defineProperty(t, "isNumber", {
                enumerable: !0,
                get: function() {
                    return v.isNumber
                }
            }), Object.defineProperty(t, "isObject", {
                enumerable: !0,
                get: function() {
                    return h.isObject
                }
            }), Object.defineProperty(t, "isObservable", {
                enumerable: !0,
                get: function() {
                    return _.isObservable
                }
            }), Object.defineProperty(t, "isString", {
                enumerable: !0,
                get: function() {
                    return P.isString
                }
            }), Object.defineProperty(t, "isTestChain", {
                enumerable: !0,
                get: function() {
                    return j.isTestChain
                }
            }), Object.defineProperty(t, "isToBigInt", {
                enumerable: !0,
                get: function() {
                    return M.isToBigInt
                }
            }), Object.defineProperty(t, "isToBn", {
                enumerable: !0,
                get: function() {
                    return V.isToBn
                }
            }), Object.defineProperty(t, "isU8a", {
                enumerable: !0,
                get: function() {
                    return A.isU8a
                }
            }), Object.defineProperty(t, "isUndefined", {
                enumerable: !0,
                get: function() {
                    return T.isUndefined
                }
            }), Object.defineProperty(t, "isUtf8", {
                enumerable: !0,
                get: function() {
                    return N.isUtf8
                }
            }), Object.defineProperty(t, "isWasm", {
                enumerable: !0,
                get: function() {
                    return I.isWasm
                }
            });
            var r = n(8577),
                o = n(8578),
                i = n(6442),
                u = n(6432),
                s = n(6435),
                c = n(6440),
                a = n(8579),
                l = n(8580),
                f = n(8581),
                d = n(8582),
                p = n(5733),
                b = n(5836),
                y = n(8583),
                m = n(8584),
                g = n(8585),
                O = n(6020),
                v = n(6443),
                h = n(6023),
                _ = n(8586),
                P = n(6019),
                j = n(8587),
                M = n(6433),
                V = n(6434),
                A = n(6437),
                T = n(5734),
                N = n(8588),
                I = n(8589)
        },
        8577: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.isArray = function(e) {
                return Array.isArray(e)
            }
        },
        8578: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.isAscii = function(e) {
                const t = (0, i.isString)(e);
                if (e) return t && !(0, o.isHex)(e) ? e.toString().split("").every(c) : (0, r.u8aToU8a)(e).every(s);
                return t
            };
            var r = n(5778),
                o = n(5836),
                i = n(6019);
            const u = [9, 10, 13];

            function s(e) {
                return e < 127 && (e >= 32 || u.includes(e))
            }

            function c(e) {
                return s(e.charCodeAt(0))
            }
        },
        8579: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.isChildClass = function(e, t) {
                return !!t && (e === t || e.isPrototypeOf(t))
            }
        },
        8580: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.isCodec = function(e) {
                return (0, o.isObject)(e) && (0, r.isFunction)(e.toU8a) && (0, o.isObject)(e.registry) && (0, r.isFunction)(e.registry.get)
            };
            var r = n(5733),
                o = n(6023)
        },
        8581: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.isCompact = function(e) {
                return (0, o.isObject)(e) && (0, r.isFunction)(e.toBigInt) && (0, r.isFunction)(e.toBn) && (0, r.isFunction)(e.toNumber) && (0, r.isFunction)(e.unwrap)
            };
            var r = n(5733),
                o = n(6023)
        },
        8582: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.isError = function(e) {
                return e instanceof Error
            }
        },
        8583: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.isInstanceOf = function(e, t) {
                return e instanceof t
            }
        },
        8584: function(e, t, n) {
            "use strict";
            var r = n(2);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.isIp = function(e, t) {
                if ("v4" === t) return o.default.v4({
                    exact: !0
                }).test(e);
                if ("v6" === t) return o.default.v6({
                    exact: !0
                }).test(e);
                return (0, o.default)({
                    exact: !0
                }).test(e)
            };
            var o = r(n(5663))
        },
        8585: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.isJsonObject = function(e) {
                const t = "string" != typeof e ? (0, r.stringify)(e) : e;
                try {
                    const e = JSON.parse(t);
                    return "object" == typeof e && null !== e
                } catch (e) {
                    return !1
                }
            };
            var r = n(6445)
        },
        8586: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.isObservable = function(e) {
                return (0, o.isObject)(e) && (0, r.isFunction)(e.next)
            };
            var r = n(5733),
                o = n(6023)
        },
        8587: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.isTestChain = function(e) {
                if (!e) return !1;
                return !!r.test(e.toString())
            };
            const r = /(Development|Local Testnet)$/
        },
        8588: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.isUtf8 = function(e) {
                if (!e) return (0, o.isString)(e);
                const t = (0, r.u8aToU8a)(e),
                    n = t.length;
                let i = 0;
                for (; i < n;)
                    if (t[i] <= 127) i += 1;
                    else if (t[i] >= 194 && t[i] <= 223) {
                    if (!(i + 1 < n)) return !1;
                    if (t[i + 1] < 128 || t[i + 1] > 191) return !1;
                    i += 2
                } else if (224 === t[i]) {
                    if (!(i + 2 < n)) return !1;
                    if (t[i + 1] < 160 || t[i + 1] > 191) return !1;
                    if (t[i + 2] < 128 || t[i + 2] > 191) return !1;
                    i += 3
                } else if (t[i] >= 225 && t[i] <= 236) {
                    if (!(i + 2 < n)) return !1;
                    if (t[i + 1] < 128 || t[i + 1] > 191) return !1;
                    if (t[i + 2] < 128 || t[i + 2] > 191) return !1;
                    i += 3
                } else if (237 === t[i]) {
                    if (!(i + 2 < n)) return !1;
                    if (t[i + 1] < 128 || t[i + 1] > 159) return !1;
                    if (t[i + 2] < 128 || t[i + 2] > 191) return !1;
                    i += 3
                } else if (t[i] >= 238 && t[i] <= 239) {
                    if (!(i + 2 < n)) return !1;
                    if (t[i + 1] < 128 || t[i + 1] > 191) return !1;
                    if (t[i + 2] < 128 || t[i + 2] > 191) return !1;
                    i += 3
                } else if (240 === t[i]) {
                    if (!(i + 3 < n)) return !1;
                    if (t[i + 1] < 144 || t[i + 1] > 191) return !1;
                    if (t[i + 2] < 128 || t[i + 2] > 191) return !1;
                    if (t[i + 3] < 128 || t[i + 3] > 191) return !1;
                    i += 4
                } else if (t[i] >= 241 && t[i] <= 243) {
                    if (!(i + 3 < n)) return !1;
                    if (t[i + 1] < 128 || t[i + 1] > 191) return !1;
                    if (t[i + 2] < 128 || t[i + 2] > 191) return !1;
                    if (t[i + 3] < 128 || t[i + 3] > 191) return !1;
                    i += 4
                } else {
                    if (244 !== t[i]) return !1;
                    if (!(i + 3 < n)) return !1;
                    if (t[i + 1] < 128 || t[i + 1] > 143) return !1;
                    if (t[i + 2] < 128 || t[i + 2] > 191) return !1;
                    if (t[i + 3] < 128 || t[i + 3] > 191) return !1;
                    i += 4
                }
                return !0
            };
            var r = n(5778),
                o = n(6019)
        },
        8589: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.isWasm = function(e) {
                return !!e && (0, r.u8aEq)(e.subarray(0, 4), o)
            };
            var r = n(6439);
            const o = new Uint8Array([0, 97, 115, 109])
        },
        8590: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.lazyMethod = o, t.lazyMethods = function(e, t, n, r) {
                for (let i = 0; i < t.length; i++) o(e, t[i], n, r);
                return e
            };
            var r = n(5734);

            function o(e, t, n, o) {
                const i = o ? o(t) : t.toString();
                let u;
                Object.defineProperty(e, i, {
                    configurable: !0,
                    enumerable: !0,
                    get: function() {
                        if ((0, r.isUndefined)(u)) {
                            u = n(t);
                            try {
                                Object.defineProperty(this, i, {
                                    value: u
                                })
                            } catch {}
                        }
                        return u
                    }
                })
            }
        },
        8591: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.logger = function(e) {
                const t = (e.toUpperCase() + ":").padStart(16),
                    [n, r] = function(e) {
                        const t = (f.hasProcess ? process : {}).env || {},
                            n = parseInt(t.DEBUG_MAX || "-1", 10);
                        return [O((t.DEBUG || "").toLowerCase().split(","), e), isNaN(n) ? -1 : n]
                    }(e.toLowerCase());
                return {
                    debug: n ? (...e) => b("debug", t, e, r) : y,
                    error: (...e) => b("error", t, e),
                    log: (...e) => b("log", t, e),
                    noop: y,
                    warn: (...e) => b("warn", t, e)
                }
            }, t.loggerFormat = p;
            var r = n(7099),
                o = n(6432),
                i = n(6435),
                u = n(5733),
                s = n(6023),
                c = n(6437),
                a = n(6166),
                l = n(5778),
                f = n(6436);
            const d = {
                debug: "log",
                error: "error",
                log: "log",
                warn: "warn"
            };

            function p(e) {
                return Array.isArray(e) ? e.map(p) : (0, o.isBn)(e) ? e.toString() : (0, c.isU8a)(e) || (0, i.isBuffer)(e) ? (0, a.u8aToHex)((0, l.u8aToU8a)(e)) : function(e) {
                    if (e && (0, s.isObject)(e) && e.constructor === Object) {
                        const t = {};
                        for (const n of Object.keys(e)) t[n] = p(e[n]);
                        return t
                    }
                    return e
                }(e)
            }

            function b(e, t, n, o = -1) {
                if (1 === n.length && (0, u.isFunction)(n[0])) {
                    const r = n[0]();
                    return b(e, t, Array.isArray(r) ? r : [r], o)
                }
                var i;
                console[d[e]]((0, r.formatDate)(new Date), t, ...n.map(p).map((i = o, e => {
                    if (i <= 0) return e;
                    const t = "" + e;
                    return t.length < i ? e : t.substr(0, i) + " ..."
                })))
            }

            function y() {}

            function m(e, t) {
                return !!e && ("*" === e || t === e || e.endsWith("*") && t.startsWith(e.slice(0, -1)))
            }

            function g(e, t) {
                return !!e && e.startsWith("-") && (t === e.slice(1) || e.endsWith("*") && t.startsWith(e.slice(1, -1)))
            }

            function O(e, t) {
                let n = !1;
                for (const r of e) m(r, t) ? n = !0 : g(r, t) && (n = !1);
                return n
            }
        },
        8592: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.memoize = function(e, {
                getInstanceId: t = i
            } = {}) {
                const n = {},
                    u = (...i) => {
                        const u = (0, o.stringify)(i),
                            s = t();
                        return n[s] || (n[s] = {}), (0, r.isUndefined)(n[s][u]) && (n[s][u] = e(...i)), n[s][u]
                    };
                return u.unmemoize = (...e) => {
                    const i = (0, o.stringify)(e),
                        u = t();
                    n[u] && !(0, r.isUndefined)(n[u][i]) && delete n[u][i]
                }, u
            };
            var r = n(5734),
                o = n(6445);

            function i() {
                return "none"
            }
        },
        8593: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), Object.defineProperty(t, "numberToHex", {
                enumerable: !0,
                get: function() {
                    return r.numberToHex
                }
            }), Object.defineProperty(t, "numberToU8a", {
                enumerable: !0,
                get: function() {
                    return o.numberToU8a
                }
            });
            var r = n(7103),
                o = n(8594)
        },
        8594: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.numberToU8a = function(e, t = -1) {
                if ((0, i.isUndefined)(e) || (0, o.isNull)(e) || isNaN(e)) return new Uint8Array;
                return (0, r.hexToU8a)((0, u.numberToHex)(e, t))
            };
            var r = n(6021),
                o = n(6020),
                i = n(5734),
                u = n(7103)
        },
        8595: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), Object.defineProperty(t, "objectClear", {
                enumerable: !0,
                get: function() {
                    return r.objectClear
                }
            }), Object.defineProperty(t, "objectCopy", {
                enumerable: !0,
                get: function() {
                    return o.objectCopy
                }
            }), Object.defineProperty(t, "objectEntries", {
                enumerable: !0,
                get: function() {
                    return i.objectEntries
                }
            }), Object.defineProperty(t, "objectKeys", {
                enumerable: !0,
                get: function() {
                    return u.objectKeys
                }
            }), Object.defineProperty(t, "objectProperties", {
                enumerable: !0,
                get: function() {
                    return s.objectProperties
                }
            }), Object.defineProperty(t, "objectProperty", {
                enumerable: !0,
                get: function() {
                    return s.objectProperty
                }
            }), Object.defineProperty(t, "objectSpread", {
                enumerable: !0,
                get: function() {
                    return c.objectSpread
                }
            }), Object.defineProperty(t, "objectValues", {
                enumerable: !0,
                get: function() {
                    return a.objectValues
                }
            });
            var r = n(8596),
                o = n(8597),
                i = n(8598),
                u = n(7086),
                s = n(8599),
                c = n(5691),
                a = n(8600)
        },
        8596: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.objectClear = function(e) {
                const t = Object.keys(e);
                for (let n = 0; n < t.length; n++) delete e[t[n]];
                return e
            }
        },
        8597: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.objectCopy = function(e) {
                return (0, r.objectSpread)({}, e)
            };
            var r = n(5691)
        },
        8598: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.objectEntries = function(e) {
                return Object.entries(e)
            }
        },
        8599: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.objectProperties = function(e, t, n) {
                for (let r = 0; r < t.length; r++) o(e, t[r], e => n(e, r))
            }, t.objectProperty = o;
            var r = n(5734);

            function o(e, t, n) {
                !Object.prototype.hasOwnProperty.call(e, t) && (0, r.isUndefined)(e[t]) && Object.defineProperty(e, t, {
                    enumerable: !0,
                    get: () => n(t)
                })
            }
        },
        8600: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.objectValues = function(e) {
                return Object.values(e)
            }
        },
        8601: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.promisify = function(e, t, ...n) {
                return new Promise((r, o) => {
                    t.apply(e, n.concat((e, t) => {
                        e ? o(e) : r(t)
                    }))
                })
            }
        },
        8602: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), Object.defineProperty(t, "stringCamelCase", {
                enumerable: !0,
                get: function() {
                    return r.stringCamelCase
                }
            }), Object.defineProperty(t, "stringLowerFirst", {
                enumerable: !0,
                get: function() {
                    return o.stringLowerFirst
                }
            }), Object.defineProperty(t, "stringPascalCase", {
                enumerable: !0,
                get: function() {
                    return i.stringPascalCase
                }
            }), Object.defineProperty(t, "stringShorten", {
                enumerable: !0,
                get: function() {
                    return u.stringShorten
                }
            }), Object.defineProperty(t, "stringToHex", {
                enumerable: !0,
                get: function() {
                    return s.stringToHex
                }
            }), Object.defineProperty(t, "stringToU8a", {
                enumerable: !0,
                get: function() {
                    return c.stringToU8a
                }
            }), Object.defineProperty(t, "stringUpperFirst", {
                enumerable: !0,
                get: function() {
                    return a.stringUpperFirst
                }
            });
            var r = n(8603),
                o = n(8604),
                i = n(8605),
                u = n(8606),
                s = n(8607),
                c = n(6438),
                a = n(8608)
        },
        8603: function(e, t, n) {
            "use strict";
            var r = n(2);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.stringCamelCase = function(e) {
                return (0, o.default)(e.toString())
            };
            var o = r(n(7104))
        },
        8604: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.stringLowerFirst = function(e) {
                return e ? e.charAt(0).toLowerCase() + e.slice(1) : ""
            }
        },
        8605: function(e, t, n) {
            "use strict";
            var r = n(2);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.stringPascalCase = function(e) {
                return (0, o.default)(e.toString(), i)
            };
            var o = r(n(7104));
            const i = {
                pascalCase: !0
            }
        },
        8606: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.stringShorten = function(e, t = 6) {
                if (e.length <= 2 + 2 * t) return e.toString();
                return `${e.substr(0,t)}…${e.slice(-t)}`
            }
        },
        8607: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.stringToHex = function(e) {
                return (0, r.u8aToHex)((0, o.stringToU8a)(e))
            };
            var r = n(6166),
                o = n(6438)
        },
        8608: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.stringUpperFirst = function(e) {
                return e ? e.charAt(0).toUpperCase() + e.slice(1) : ""
            }
        },
        8609: function(e, t, n) {
            "use strict";
            var r = n(2);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.getModuleTypes = function({
                knownTypes: e
            }, t) {
                var n;
                return p(p({}, s.default[t] || {}), (null === (n = e.typesAlias) || void 0 === n ? void 0 : n[t]) || {})
            }, t.getSpecAlias = function({
                knownTypes: e
            }, t, n) {
                var r, o, i, u, s, c;
                const a = t.toString(),
                    l = n.toString();
                return p(p(p({}, (null === (r = e.typesBundle) || void 0 === r || null === (o = r.spec) || void 0 === o || null === (i = o[l]) || void 0 === i ? void 0 : i.alias) || {}), (null === (u = e.typesBundle) || void 0 === u || null === (s = u.chain) || void 0 === s || null === (c = s[a]) || void 0 === c ? void 0 : c.alias) || {}), e.typesAlias || {})
            }, t.getSpecExtensions = function({
                knownTypes: e
            }, t, n) {
                var r, o, i, u, s, c;
                const a = t.toString(),
                    l = n.toString();
                return p(p({}, (null === (r = e.typesBundle) || void 0 === r || null === (o = r.spec) || void 0 === o || null === (i = o[l]) || void 0 === i ? void 0 : i.signedExtensions) || {}), (null === (u = e.typesBundle) || void 0 === u || null === (s = u.chain) || void 0 === s || null === (c = s[a]) || void 0 === c ? void 0 : c.signedExtensions) || {})
            }, t.getSpecHasher = function({
                knownTypes: e
            }, t, n) {
                var r, o, i, u, s, c;
                const a = t.toString(),
                    l = n.toString();
                return e.hasher || (null === (r = e.typesBundle) || void 0 === r || null === (o = r.chain) || void 0 === o || null === (i = o[a]) || void 0 === i ? void 0 : i.hasher) || (null === (u = e.typesBundle) || void 0 === u || null === (s = u.spec) || void 0 === s || null === (c = s[l]) || void 0 === c ? void 0 : c.hasher) || null
            }, t.getSpecRpc = function({
                knownTypes: e
            }, t, n) {
                var r, o, i, u, s, c;
                const a = t.toString(),
                    l = n.toString();
                return p(p({}, (null === (r = e.typesBundle) || void 0 === r || null === (o = r.spec) || void 0 === o || null === (i = o[l]) || void 0 === i ? void 0 : i.rpc) || {}), (null === (u = e.typesBundle) || void 0 === u || null === (s = u.chain) || void 0 === s || null === (c = s[a]) || void 0 === c ? void 0 : c.rpc) || {})
            }, t.getSpecTypes = function({
                knownTypes: e
            }, t, n, r) {
                var o, s, a, l, f, d, y, m;
                const g = t.toString(),
                    O = n.toString(),
                    v = (0, i.bnToBn)(r).toNumber();
                return p(p(p(p(p(p(p({}, b(c.default[O], v)), b(u.default[g], v)), b(null === (o = e.typesBundle) || void 0 === o || null === (s = o.spec) || void 0 === s || null === (a = s[O]) || void 0 === a ? void 0 : a.types, v)), b(null === (l = e.typesBundle) || void 0 === l || null === (f = l.chain) || void 0 === f || null === (d = f[g]) || void 0 === d ? void 0 : d.types, v)), (null === (y = e.typesSpec) || void 0 === y ? void 0 : y[O]) || {}), (null === (m = e.typesChain) || void 0 === m ? void 0 : m[g]) || {}), e.types || {})
            }, t.getUpgradeVersion = function(e, t) {
                const n = a.default.find(t => e.eq(t.genesisHash));
                return n ? [n.versions.reduce((e, n) => t.gt(n.blockNumber) ? n : e, void 0), n.versions.find(e => t.lte(e.blockNumber))] : [void 0, void 0]
            }, Object.defineProperty(t, "knownOrigins", {
                enumerable: !0,
                get: function() {
                    return l.knownOrigins
                }
            }), Object.defineProperty(t, "packageInfo", {
                enumerable: !0,
                get: function() {
                    return f.packageInfo
                }
            });
            var o = r(n(5461)),
                i = n(6429),
                u = r(n(8610)),
                s = r(n(8611)),
                c = r(n(8612)),
                a = r(n(8625)),
                l = n(8630),
                f = n(5992);

            function d(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, r)
                }
                return n
            }

            function p(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? d(Object(n), !0).forEach((function(t) {
                        (0, o.default)(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : d(Object(n)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }

            function b(e = [], t) {
                return e.filter(({
                    minmax: [e, n]
                }) => ((0, i.isUndefined)(e) || (0, i.isNull)(e) || t >= e) && ((0, i.isUndefined)(n) || (0, i.isNull)(n) || t <= n)).reduce((e, {
                    types: t
                }) => p(p({}, e), t), {})
            }
        },
        8610: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var r = {};
            t.default = r
        },
        8611: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var r = {
                assets: {
                    Approval: "AssetApproval",
                    ApprovalKey: "AssetApprovalKey",
                    Balance: "TAssetBalance",
                    DestroyWitness: "AssetDestroyWitness"
                },
                babe: {
                    EquivocationProof: "BabeEquivocationProof"
                },
                balances: {
                    Status: "BalanceStatus"
                },
                beefy: {
                    AuthorityId: "BeefyId"
                },
                contracts: {
                    StorageKey: "ContractStorageKey"
                },
                electionProviderMultiPhase: {
                    Phase: "ElectionPhase"
                },
                ethereum: {
                    Block: "EthBlock",
                    Header: "EthHeader",
                    Receipt: "EthReceipt",
                    Transaction: "EthTransaction",
                    TransactionStatus: "EthTransactionStatus"
                },
                evm: {
                    Account: "EvmAccount",
                    Log: "EvmLog",
                    Vicinity: "EvmVicinity"
                },
                grandpa: {
                    Equivocation: "GrandpaEquivocation",
                    EquivocationProof: "GrandpaEquivocationProof"
                },
                identity: {
                    Judgement: "IdentityJudgement"
                },
                inclusion: {
                    ValidatorIndex: "ParaValidatorIndex"
                },
                paraDisputes: {
                    ValidatorIndex: "ParaValidatorIndex"
                },
                paraInclusion: {
                    ValidatorIndex: "ParaValidatorIndex"
                },
                paraScheduler: {
                    ValidatorIndex: "ParaValidatorIndex"
                },
                paraShared: {
                    ValidatorIndex: "ParaValidatorIndex"
                },
                parachains: {
                    Id: "ParaId"
                },
                parasDisputes: {
                    ValidatorIndex: "ParaValidatorIndex"
                },
                parasInclusion: {
                    ValidatorIndex: "ParaValidatorIndex"
                },
                parasScheduler: {
                    ValidatorIndex: "ParaValidatorIndex"
                },
                parasShared: {
                    ValidatorIndex: "ParaValidatorIndex"
                },
                proposeParachain: {
                    Proposal: "ParachainProposal"
                },
                proxy: {
                    Announcement: "ProxyAnnouncement"
                },
                scheduler: {
                    ValidatorIndex: "ParaValidatorIndex"
                },
                shared: {
                    ValidatorIndex: "ParaValidatorIndex"
                },
                society: {
                    Judgement: "SocietyJudgement",
                    Vote: "SocietyVote"
                },
                staking: {
                    Compact: "CompactAssignments"
                },
                treasury: {
                    Proposal: "TreasuryProposal"
                },
                xcm: {
                    AssetId: "XcmAssetId"
                },
                xcmPallet: {
                    AssetId: "XcmAssetId"
                }
            };
            t.default = r
        },
        8612: function(e, t, n) {
            "use strict";
            var r = n(2);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var o = r(n(8613)),
                i = r(n(8614)),
                u = r(n(8618)),
                s = r(n(8619)),
                c = r(n(8620)),
                a = r(n(8621)),
                l = r(n(8622)),
                f = r(n(8623)),
                d = r(n(8624));
            var p = {
                "centrifuge-chain": o.default,
                kusama: i.default,
                node: u.default,
                "node-template": s.default,
                polkadot: c.default,
                rococo: a.default,
                shell: l.default,
                statemine: f.default,
                statemint: f.default,
                westend: d.default,
                westmint: f.default
            };
            t.default = p
        },
        8613: function(e, t, n) {
            "use strict";
            var r = n(2);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var o = r(n(5461));

            function i(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, r)
                }
                return n
            }

            function u(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? i(Object(n), !0).forEach((function(t) {
                        (0, o.default)(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : i(Object(n)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }
            const s = {
                    AnchorData: {
                        anchoredBlock: "u64",
                        docRoot: "H256",
                        id: "H256"
                    },
                    PreCommitData: {
                        expirationBlock: "u64",
                        identity: "H256",
                        signingRoot: "H256"
                    },
                    Fee: {
                        key: "Hash",
                        price: "Balance"
                    },
                    MultiAccountData: {
                        deposit: "Balance",
                        depositor: "AccountId",
                        signatories: "Vec<AccountId>",
                        threshold: "u16"
                    },
                    ChainId: "u8",
                    DepositNonce: "u64",
                    ResourceId: "[u8; 32]",
                    "chainbridge::ChainId": "u8",
                    RegistryId: "H160",
                    TokenId: "U256",
                    AssetId: {
                        registryId: "RegistryId",
                        tokenId: "TokenId"
                    },
                    AssetInfo: {
                        metadata: "Bytes"
                    },
                    MintInfo: {
                        anchorId: "Hash",
                        proofs: "Vec<ProofMint>",
                        staticHashes: "[Hash; 3]"
                    },
                    Proof: {
                        leafHash: "H256",
                        sortedHashes: "H256"
                    },
                    ProofMint: {
                        hashes: "Vec<Hash>",
                        property: "Bytes",
                        salt: "[u8; 32]",
                        value: "Bytes"
                    },
                    RegistryInfo: {
                        fields: "Vec<Bytes>",
                        ownerCanBurn: "bool"
                    },
                    ProxyType: {
                        _enum: ["Any", "NonTransfer", "Governance", "Staking", "NonProxy"]
                    }
                },
                c = u(u({}, s), {}, {
                    AccountInfo: "AccountInfoWithRefCount",
                    Address: "LookupSource",
                    LookupSource: "IndicesLookupSource",
                    Multiplier: "Fixed64",
                    RefCount: "RefCountTo259"
                });
            var a = [{
                minmax: [240, 243],
                types: u(u({}, c), {}, {
                    ProxyType: {
                        _enum: ["Any", "NonTransfer", "Governance", "Staking", "Vesting"]
                    }
                })
            }, {
                minmax: [244, 999],
                types: u({}, c)
            }, {
                minmax: [1e3, void 0],
                types: u({}, s)
            }];
            t.default = a
        },
        8614: function(e, t, n) {
            "use strict";
            var r = n(2);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var o = r(n(5461)),
                i = n(6446);

            function u(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, r)
                }
                return n
            }

            function s(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? u(Object(n), !0).forEach((function(t) {
                        (0, o.default)(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : u(Object(n)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }
            const c = {
                    CompactAssignments: "CompactAssignmentsWith24",
                    RawSolution: "RawSolutionWith24",
                    Keys: "SessionKeys6",
                    ProxyType: {
                        _enum: ["Any", "NonTransfer", "Governance", "Staking", "IdentityJudgement", "CancelProxy", "Auction"]
                    }
                },
                a = {
                    AccountInfo: "AccountInfoWithRefCount",
                    Address: "LookupSource",
                    CompactAssignments: "CompactAssignmentsWith16",
                    RawSolution: "RawSolutionWith16",
                    Keys: "SessionKeys5",
                    LookupSource: "IndicesLookupSource",
                    ValidatorPrefs: "ValidatorPrefsWithCommission"
                },
                l = {
                    AccountInfo: "AccountInfoWithRefCount",
                    Address: "AccountId",
                    CompactAssignments: "CompactAssignmentsWith16",
                    RawSolution: "RawSolutionWith16",
                    Keys: "SessionKeys5",
                    LookupSource: "AccountId",
                    ValidatorPrefs: "ValidatorPrefsWithCommission"
                };
            var f = [{
                minmax: [1019, 1031],
                types: s(s({}, a), {}, {
                    BalanceLock: "BalanceLockTo212",
                    CompactAssignments: "CompactAssignmentsTo257",
                    DispatchError: "DispatchErrorTo198",
                    DispatchInfo: "DispatchInfoTo244",
                    Heartbeat: "HeartbeatTo244",
                    IdentityInfo: "IdentityInfoTo198",
                    Keys: "SessionKeys5",
                    Multiplier: "Fixed64",
                    OpenTip: "OpenTipTo225",
                    RefCount: "RefCountTo259",
                    ReferendumInfo: "ReferendumInfoTo239",
                    SlashingSpans: "SlashingSpansTo204",
                    StakingLedger: "StakingLedgerTo223",
                    Votes: "VotesTo230",
                    Weight: "u32"
                })
            }, {
                minmax: [1032, 1042],
                types: s(s({}, a), {}, {
                    BalanceLock: "BalanceLockTo212",
                    CompactAssignments: "CompactAssignmentsTo257",
                    DispatchInfo: "DispatchInfoTo244",
                    Heartbeat: "HeartbeatTo244",
                    Keys: "SessionKeys5",
                    Multiplier: "Fixed64",
                    OpenTip: "OpenTipTo225",
                    RefCount: "RefCountTo259",
                    ReferendumInfo: "ReferendumInfoTo239",
                    SlashingSpans: "SlashingSpansTo204",
                    StakingLedger: "StakingLedgerTo223",
                    Votes: "VotesTo230",
                    Weight: "u32"
                })
            }, {
                minmax: [1043, 1045],
                types: s(s({}, a), {}, {
                    BalanceLock: "BalanceLockTo212",
                    CompactAssignments: "CompactAssignmentsTo257",
                    DispatchInfo: "DispatchInfoTo244",
                    Heartbeat: "HeartbeatTo244",
                    Keys: "SessionKeys5",
                    Multiplier: "Fixed64",
                    OpenTip: "OpenTipTo225",
                    RefCount: "RefCountTo259",
                    ReferendumInfo: "ReferendumInfoTo239",
                    StakingLedger: "StakingLedgerTo223",
                    Votes: "VotesTo230",
                    Weight: "u32"
                })
            }, {
                minmax: [1046, 1054],
                types: s(s(s({}, c), l), {}, {
                    CompactAssignments: "CompactAssignmentsTo257",
                    DispatchInfo: "DispatchInfoTo244",
                    Heartbeat: "HeartbeatTo244",
                    Multiplier: "Fixed64",
                    OpenTip: "OpenTipTo225",
                    RefCount: "RefCountTo259",
                    ReferendumInfo: "ReferendumInfoTo239",
                    StakingLedger: "StakingLedgerTo240",
                    Weight: "u32"
                })
            }, {
                minmax: [1055, 1056],
                types: s(s(s({}, c), l), {}, {
                    CompactAssignments: "CompactAssignmentsTo257",
                    DispatchInfo: "DispatchInfoTo244",
                    Heartbeat: "HeartbeatTo244",
                    Multiplier: "Fixed64",
                    OpenTip: "OpenTipTo225",
                    RefCount: "RefCountTo259",
                    StakingLedger: "StakingLedgerTo240",
                    Weight: "u32"
                })
            }, {
                minmax: [1057, 1061],
                types: s(s(s({}, c), l), {}, {
                    CompactAssignments: "CompactAssignmentsTo257",
                    DispatchInfo: "DispatchInfoTo244",
                    Heartbeat: "HeartbeatTo244",
                    OpenTip: "OpenTipTo225",
                    RefCount: "RefCountTo259"
                })
            }, {
                minmax: [1062, 2012],
                types: s(s(s({}, c), l), {}, {
                    CompactAssignments: "CompactAssignmentsTo257",
                    OpenTip: "OpenTipTo225",
                    RefCount: "RefCountTo259"
                })
            }, {
                minmax: [2013, 2022],
                types: s(s(s({}, c), l), {}, {
                    CompactAssignments: "CompactAssignmentsTo257",
                    RefCount: "RefCountTo259"
                })
            }, {
                minmax: [2023, 2024],
                types: s(s(s({}, c), l), {}, {
                    RefCount: "RefCountTo259"
                })
            }, {
                minmax: [2025, 2027],
                types: s(s({}, c), l)
            }, {
                minmax: [2028, 2029],
                types: s(s({}, c), {}, {
                    AccountInfo: "AccountInfoWithDualRefCount",
                    CompactAssignments: "CompactAssignmentsWith16",
                    RawSolution: "RawSolutionWith16"
                })
            }, {
                minmax: [2030, 9e3],
                types: s(s({}, c), {}, {
                    CompactAssignments: "CompactAssignmentsWith16",
                    RawSolution: "RawSolutionWith16"
                })
            }, {
                minmax: [9010, 9099],
                types: s(s({}, c), (0, i.mapXcm)("V0"))
            }, {
                minmax: [9100, 9105],
                types: s(s({}, c), (0, i.mapXcm)("V1"))
            }, {
                minmax: [9106, void 0],
                types: s({}, c)
            }];
            t.default = f
        },
        8615: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.v0 = void 0;
            t.v0 = {
                FungibilityV0: "FungibilityV1",
                WildFungibilityV0: "WildFungibilityV1",
                AssetInstanceV0: {
                    _enum: {
                        Undefined: "Null",
                        Index8: "u8",
                        Index16: "Compact<u16>",
                        Index32: "Compact<u32>",
                        Index64: "Compact<u64>",
                        Index128: "Compact<u128>",
                        Array4: "[u8; 4]",
                        Array8: "[u8; 8]",
                        Array16: "[u8; 16]",
                        Array32: "[u8; 32]",
                        Blob: "Vec<u8>"
                    }
                },
                JunctionV0: {
                    _enum: {
                        Parent: "Null",
                        Parachain: "Compact<u32>",
                        AccountId32: {
                            network: "NetworkId",
                            id: "AccountId"
                        },
                        AccountIndex64: {
                            network: "NetworkId",
                            index: "Compact<u64>"
                        },
                        AccountKey20: {
                            network: "NetworkId",
                            key: "[u8; 20]"
                        },
                        PalletInstance: "u8",
                        GeneralIndex: "Compact<u128>",
                        GeneralKey: "Vec<u8>",
                        OnlyChild: "Null",
                        Plurality: {
                            id: "BodyId",
                            part: "BodyPart"
                        }
                    }
                },
                MultiAssetV0: {
                    _enum: {
                        None: "Null",
                        All: "Null",
                        AllFungible: "Null",
                        AllNonFungible: "Null",
                        AllAbstractFungible: "Vec<u8>",
                        AllAbstractNonFungible: "Vec<u8>",
                        AllConcreteFungible: "MultiLocationV0",
                        AllConcreteNonFungible: "MultiLocationV0",
                        AbstractFungible: {
                            id: "Vec<u8>",
                            instance: "Compact<u128>"
                        },
                        AbstractNonFungible: {
                            class: "Vec<u8>",
                            instance: "AssetInstanceV0"
                        },
                        ConcreteFungible: {
                            id: "MultiLocationV0",
                            amount: "Compact<u128>"
                        },
                        ConcreteNonFungible: {
                            class: "MultiLocationV0",
                            instance: "AssetInstanceV0"
                        }
                    }
                },
                MultiLocationV0: {
                    _enum: {
                        Here: "Null",
                        X1: "JunctionV0",
                        X2: "(JunctionV0, JunctionV0)",
                        X3: "(JunctionV0, JunctionV0, JunctionV0)",
                        X4: "(JunctionV0, JunctionV0, JunctionV0, JunctionV0)",
                        X5: "(JunctionV0, JunctionV0, JunctionV0, JunctionV0, JunctionV0)",
                        X6: "(JunctionV0, JunctionV0, JunctionV0, JunctionV0, JunctionV0, JunctionV0)",
                        X7: "(JunctionV0, JunctionV0, JunctionV0, JunctionV0, JunctionV0, JunctionV0, JunctionV0)",
                        X8: "(JunctionV0, JunctionV0, JunctionV0, JunctionV0, JunctionV0, JunctionV0, JunctionV0, JunctionV0)"
                    }
                },
                OriginKindV0: {
                    _enum: ["Native", "SovereignAccount", "Superuser", "Xcm"]
                },
                ResponseV0: {
                    _enum: {
                        Assets: "Vec<MultiAssetV0>"
                    }
                },
                XcmV0: {
                    _enum: {
                        WithdrawAsset: {
                            assets: "Vec<MultiAssetV0>",
                            effects: "Vec<XcmOrderV0>"
                        },
                        ReserveAssetDeposit: {
                            assets: "Vec<MultiAssetV0>",
                            effects: "Vec<XcmOrderV0>"
                        },
                        ReceiveTeleportedAsset: {
                            assets: "Vec<MultiAssetV0>",
                            effects: "Vec<XcmOrderV0>"
                        },
                        QueryResponse: {
                            queryId: "Compact<u64>",
                            response: "ResponseV0"
                        },
                        TransferAsset: {
                            assets: "Vec<MultiAssetV0>",
                            dest: "MultiLocationV0"
                        },
                        TransferReserveAsset: {
                            assets: "Vec<MultiAssetV0>",
                            dest: "MultiLocationV0",
                            effects: "Vec<XcmOrderV0>"
                        },
                        Transact: {
                            originType: "XcmOriginKind",
                            requireWeightAtMost: "u64",
                            call: "DoubleEncodedCall"
                        },
                        HrmpNewChannelOpenRequest: {
                            sender: "Compact<u32>",
                            maxMessageSize: "Compact<u32>",
                            maxCapacity: "Compact<u32>"
                        },
                        HrmpChannelAccepted: {
                            recipient: "Compact<u32>"
                        },
                        HrmpChannelClosing: {
                            initiator: "Compact<u32>",
                            sender: "Compact<u32>",
                            recipient: "Compact<u32>"
                        },
                        RelayedFrom: {
                            who: "MultiLocationV0",
                            message: "XcmV0"
                        }
                    }
                },
                XcmErrorV0: {
                    _enum: {
                        Undefined: "Null",
                        Overflow: "Null",
                        Unimplemented: "Null",
                        UnhandledXcmVersion: "Null",
                        UnhandledXcmMessage: "Null",
                        UnhandledEffect: "Null",
                        EscalationOfPrivilege: "Null",
                        UntrustedReserveLocation: "Null",
                        UntrustedTeleportLocation: "Null",
                        DestinationBufferOverflow: "Null",
                        SendFailed: "Null",
                        CannotReachDestination: "(MultiLocation, Xcm)",
                        MultiLocationFull: "Null",
                        FailedToDecode: "Null",
                        BadOrigin: "Null",
                        ExceedsMaxMessageSize: "Null",
                        FailedToTransactAsset: "Null",
                        WeightLimitReached: "Weight",
                        Wildcard: "Null",
                        TooMuchWeightRequired: "Null",
                        NotHoldingFees: "Null",
                        WeightNotComputable: "Null",
                        Barrier: "Null",
                        NotWithdrawable: "Null",
                        LocationCannotHold: "Null",
                        TooExpensive: "Null",
                        AssetNotFound: "Null",
                        RecursionLimitReached: "Null"
                    }
                },
                XcmOrderV0: {
                    _enum: {
                        Null: "Null",
                        DepositAsset: {
                            assets: "Vec<MultiAssetV0>",
                            dest: "MultiLocationV0"
                        },
                        DepositReserveAsset: {
                            assets: "Vec<MultiAssetV0>",
                            dest: "MultiLocationV0",
                            effects: "Vec<XcmOrderV0>"
                        },
                        ExchangeAsset: {
                            give: "Vec<MultiAssetV0>",
                            receive: "Vec<MultiAssetV0>"
                        },
                        InitiateReserveWithdraw: {
                            assets: "Vec<MultiAssetV0>",
                            reserve: "MultiLocationV0",
                            effects: "Vec<XcmOrderV0>"
                        },
                        InitiateTeleport: {
                            assets: "Vec<MultiAsset>",
                            dest: "MultiLocationV0",
                            effects: "Vec<XcmOrderV0>"
                        },
                        QueryHolding: {
                            queryId: "Compact<u64>",
                            dest: "MultiLocationV0",
                            assets: "Vec<MultiAssetV0>"
                        },
                        BuyExecution: {
                            fees: "MultiAsset",
                            weight: "u64",
                            debt: "u64",
                            haltOnError: "bool",
                            xcm: "Vec<XcmV0>"
                        }
                    }
                }
            }
        },
        8616: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.v1 = void 0;
            t.v1 = {
                AssetInstanceV1: {
                    _enum: {
                        Undefined: "Null",
                        Index: "Compact<u128>",
                        Array4: "[u8; 4]",
                        Array8: "[u8; 8]",
                        Array16: "[u8; 16]",
                        Array32: "[u8; 32]",
                        Blob: "Bytes"
                    }
                },
                FungibilityV1: {
                    _enum: {
                        Fungible: "Compact<u128>",
                        NonFungible: "AssetInstanceV1"
                    }
                },
                JunctionV1: {
                    _enum: {
                        Parachain: "Compact<u32>",
                        AccountId32: {
                            network: "NetworkId",
                            id: "AccountId"
                        },
                        AccountIndex64: {
                            network: "NetworkId",
                            index: "Compact<u64>"
                        },
                        AccountKey20: {
                            network: "NetworkId",
                            key: "[u8; 20]"
                        },
                        PalletInstance: "u8",
                        GeneralIndex: "Compact<u128>",
                        GeneralKey: "Vec<u8>",
                        OnlyChild: "Null",
                        Plurality: {
                            id: "BodyId",
                            part: "BodyPart"
                        }
                    }
                },
                JunctionsV1: {
                    _enum: {
                        Here: "Null",
                        X1: "JunctionV1",
                        X2: "(JunctionV1, JunctionV1)",
                        X3: "(JunctionV1, JunctionV1, JunctionV1)",
                        X4: "(JunctionV1, JunctionV1, JunctionV1, JunctionV1)",
                        X5: "(JunctionV1, JunctionV1, JunctionV1, JunctionV1, JunctionV1)",
                        X6: "(JunctionV1, JunctionV1, JunctionV1, JunctionV1, JunctionV1, JunctionV1)",
                        X7: "(JunctionV1, JunctionV1, JunctionV1, JunctionV1, JunctionV1, JunctionV1, JunctionV1)",
                        X8: "(JunctionV1, JunctionV1, JunctionV1, JunctionV1, JunctionV1, JunctionV1, JunctionV1, JunctionV1)"
                    }
                },
                MultiAssetsV1: "Vec<MultiAssetV1>",
                MultiAssetV1: {
                    id: "XcmAssetId",
                    fungibility: "FungibilityV1"
                },
                MultiAssetFilterV1: {
                    _enum: {
                        Definite: "MultiAssetsV1",
                        Wild: "WildMultiAssetV1"
                    }
                },
                MultiLocationV1: {
                    parents: "u8",
                    interior: "JunctionsV1"
                },
                OriginKindV1: "OriginKindV0",
                ResponseV1: {
                    _enum: {
                        Assets: "MultiAssetsV1"
                    }
                },
                WildFungibilityV1: {
                    _enum: ["Fungible", "NonFungible"]
                },
                WildMultiAssetV1: {
                    _enum: {
                        All: "Null",
                        AllOf: {
                            id: "XcmAssetId",
                            fungibility: "WildFungibilityV1"
                        }
                    }
                },
                XcmV1: {
                    _enum: {
                        WithdrawAsset: {
                            Vassets: "MultiAssetsV1",
                            effects: "Vec<XcmOrderV1>"
                        },
                        ReserveAssetDeposit: {
                            Vassets: "MultiAssetsV1",
                            effects: "Vec<XcmOrderV1>"
                        },
                        ReceiveTeleportedAsset: {
                            Vassets: "MultiAssetsV1",
                            effects: "Vec<XcmOrderV1>"
                        },
                        QueryResponse: {
                            queryId: "Compact<u64>",
                            response: "ResponseV1"
                        },
                        TransferAsset: {
                            Vassets: "MultiAssetsV1",
                            dest: "MultiLocationV1"
                        },
                        TransferReserveAsset: {
                            Vassets: "MultiAssetsV1",
                            dest: "MultiLocationV1",
                            effects: "Vec<XcmOrderV1>"
                        },
                        Transact: {
                            originType: "XcmOriginKind",
                            requireWeightAtMost: "u64",
                            call: "DoubleEncodedCall"
                        },
                        HrmpNewChannelOpenRequest: {
                            sender: "Compact<u32>",
                            maxMessageSize: "Compact<u32>",
                            maxCapacity: "Compact<u32>"
                        },
                        HrmpChannelAccepted: {
                            recipient: "Compact<u32>"
                        },
                        HrmpChannelClosing: {
                            initiator: "Compact<u32>",
                            sender: "Compact<u32>",
                            recipient: "Compact<u32>"
                        },
                        RelayedFrom: {
                            who: "MultiLocationV1",
                            message: "XcmV1"
                        }
                    }
                },
                XcmErrorV1: {
                    _enum: {
                        Undefined: "Null",
                        Overflow: "Null",
                        Unimplemented: "Null",
                        UnhandledXcmVersion: "Null",
                        UnhandledXcmMessage: "Null",
                        UnhandledEffect: "Null",
                        EscalationOfPrivilege: "Null",
                        UntrustedReserveLocation: "Null",
                        UntrustedTeleportLocation: "Null",
                        DestinationBufferOverflow: "Null",
                        SendFailed: "Null",
                        CannotReachDestination: "(MultiLocationV1, XcmV1)",
                        MultiLocationFull: "Null",
                        FailedToDecode: "Null",
                        BadOrigin: "Null",
                        ExceedsMaxMessageSize: "Null",
                        FailedToTransactAsset: "Null",
                        WeightLimitReached: "Weight",
                        Wildcard: "Null",
                        TooMuchWeightRequired: "Null",
                        NotHoldingFees: "Null",
                        WeightNotComputable: "Null",
                        Barrier: "Null",
                        NotWithdrawable: "Null",
                        LocationCannotHold: "Null",
                        TooExpensive: "Null",
                        AssetNotFound: "Null",
                        DestinationUnsupported: "Null",
                        RecursionLimitReached: "Null"
                    }
                },
                XcmOrderV1: {
                    _enum: {
                        Noop: "Null",
                        DepositAsset: {
                            assets: "MultiAssetFilterV1",
                            maxAssets: "u32",
                            beneficiary: "MultiLocationV1"
                        },
                        DepositReserveAsset: {
                            assets: "MultiAssetFilterV1",
                            maxAssets: "u32",
                            dest: "MultiLocationV1",
                            effects: "Vec<XcmOrderV1>"
                        },
                        ExchangeAsset: {
                            give: "MultiAssetFilterV1",
                            receive: "MultiAssetsV1"
                        },
                        InitiateReserveWithdraw: {
                            assets: "MultiAssetFilterV1",
                            reserve: "MultiLocationV1",
                            effects: "Vec<XcmOrderV1>"
                        },
                        InitiateTeleport: {
                            assets: "MultiAssetFilterV1",
                            dest: "MultiLocationV1",
                            effects: "Vec<XcmOrderV1>"
                        },
                        QueryHolding: {
                            queryId: "Compact<u64>",
                            dest: "MultiLocationV1",
                            assets: "MultiAssetFilterV1"
                        },
                        BuyExecution: {
                            fees: "MultiAsset",
                            weight: "u64",
                            debt: "u64",
                            haltOnError: "bool",
                            orders: "Vec<XcmOrderV1>",
                            instructions: "Vec<XcmV1>"
                        }
                    }
                }
            }
        },
        8617: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.v2 = void 0;
            t.v2 = {
                AssetInstanceV2: "AssetInstanceV1",
                FungibilityV2: "FungibilityV1",
                JunctionV2: "JunctionV1",
                JunctionsV2: "JunctionsV1",
                MultiAssetsV2: "MultiAssetsV1",
                MultiAssetV2: "MultiAssetV1",
                MultiAssetFilterV2: "MultiAssetFilterV1",
                MultiLocationV2: "MultiLocationV1",
                OriginKindV2: "OriginKindV1",
                WildFungibilityV2: "WildFungibilityV1",
                ResponseV2: {
                    _enum: {
                        Null: "Null",
                        Assets: "MultiAssetsV2",
                        ExecutionResult: "ResponseV2Result"
                    }
                },
                ResponseV2Error: "(u32, XcmErrorV2)",
                ResponseV2Result: "Result<Null, ResponseV2Error>",
                WeightLimitV2: {
                    _enum: {
                        Unlimited: "Null",
                        Limited: "Compact<u64>"
                    }
                },
                InstructionV2: {
                    _enum: {
                        WithdrawAsset: "MultiAssetsV2",
                        ReserveAssetDeposited: "MultiAssetsV2",
                        ReceiveTeleportedAsset: "MultiAssetsV2",
                        QueryResponse: {
                            queryId: "Compact<u64>",
                            response: "ResponseV2",
                            maxWeight: "Compact<u64>"
                        },
                        TransferAsset: {
                            assets: "MultiAssetsV2",
                            beneficiary: "MultiLocationV2"
                        },
                        TransferReserveAsset: {
                            assets: "MultiAssetsV2",
                            dest: "MultiLocationV2",
                            xcm: "XcmV2"
                        },
                        Transact: {
                            originType: "OriginKindV2",
                            requireWeightAtMost: "u64",
                            call: "DoubleEncodedCall"
                        },
                        HrmpNewChannelOpenRequest: {
                            sender: "Compact<u32>",
                            maxMessageSize: "Compact<u32>",
                            maxCapacity: "Compact<u32>"
                        },
                        HrmpChannelAccepted: {
                            recipient: "Compact<u32>"
                        },
                        HrmpChannelClosing: {
                            initiator: "Compact<u32>",
                            sender: "Compact<u32>",
                            recipient: "Compact<u32>"
                        },
                        ClearOrigin: "Null",
                        DescendOrigin: "InteriorMultiLocation",
                        ReportError: {
                            queryId: "Compact<u64>",
                            dest: "MultiLocationV2",
                            maxResponseWeight: "Compact<u64>"
                        },
                        DepositAsset: {
                            assets: "MultiAssetFilterV2",
                            maxAssets: "u32",
                            beneficiary: "MultiLocationV2"
                        },
                        DepositReserveAsset: {
                            assets: "MultiAssetFilterV2",
                            maxAssets: "u32",
                            dest: "MultiLocationV2",
                            xcm: "XcmV2"
                        },
                        ExchangeAsset: {
                            give: "MultiAssetFilterV2",
                            receive: "MultiAssetsV2"
                        },
                        InitiateReserveWithdraw: {
                            assets: "MultiAssetFilterV2",
                            reserve: "MultiLocationV2",
                            xcm: "XcmV2"
                        },
                        InitiateTeleport: {
                            assets: "MultiAssetFilterV2",
                            dest: "MultiLocationV2",
                            xcm: "XcmV2"
                        },
                        QueryHolding: {
                            query_id: "Compact<u64>",
                            dest: "MultiLocationV2",
                            assets: "MultiAssetFilterV2",
                            maxResponse_Weight: "Compact<u64>"
                        },
                        BuyExecution: {
                            fees: "MultiAssetV2",
                            weightLimit: "WeightLimitV2"
                        },
                        RefundSurplus: "Null",
                        SetErrorHandler: "XcmV2",
                        SetAppendix: "XcmV2",
                        ClearError: "Null",
                        ClaimAsset: {
                            assets: "MultiAssetsV2",
                            ticket: "MultiLocationV2"
                        },
                        Trap: "u64"
                    }
                },
                WildMultiAssetV2: "WildMultiAssetV1",
                XcmV2: "Vec<InstructionV2>",
                XcmErrorV2: {
                    _enum: {
                        Undefined: "Null",
                        Overflow: "Null",
                        Unimplemented: "Null",
                        UnhandledXcmVersion: "Null",
                        UnhandledXcmMessage: "Null",
                        UnhandledEffect: "Null",
                        EscalationOfPrivilege: "Null",
                        UntrustedReserveLocation: "Null",
                        UntrustedTeleportLocation: "Null",
                        DestinationBufferOverflow: "Null",
                        MultiLocationFull: "Null",
                        MultiLocationNotInvertible: "Null",
                        FailedToDecode: "Null",
                        BadOrigin: "Null",
                        ExceedsMaxMessageSize: "Null",
                        FailedToTransactAsset: "Null",
                        WeightLimitReached: "Weight",
                        Wildcard: "Null",
                        TooMuchWeightRequired: "Null",
                        NotHoldingFees: "Null",
                        WeightNotComputable: "Null",
                        Barrier: "Null",
                        NotWithdrawable: "Null",
                        LocationCannotHold: "Null",
                        TooExpensive: "Null",
                        AssetNotFound: "Null",
                        DestinationUnsupported: "Null",
                        RecursionLimitReached: "Null",
                        Transport: "Null",
                        Unroutable: "Null",
                        UnknownWeightRequired: "Null",
                        Trap: "u64",
                        UnknownClaim: "Null",
                        InvalidLocation: "Null"
                    }
                },
                XcmOrderV2: "XcmOrderV1"
            }
        },
        8618: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var r = [{
                minmax: [0, void 0],
                types: {}
            }];
            t.default = r
        },
        8619: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var r = [{
                minmax: [0, void 0],
                types: {}
            }];
            t.default = r
        },
        8620: function(e, t, n) {
            "use strict";
            var r = n(2);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var o = r(n(5461));

            function i(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, r)
                }
                return n
            }

            function u(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? i(Object(n), !0).forEach((function(t) {
                        (0, o.default)(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : i(Object(n)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }
            const s = {
                    CompactAssignments: "CompactAssignmentsWith16",
                    RawSolution: "RawSolutionWith16",
                    Keys: "SessionKeys6",
                    ProxyType: {
                        _enum: {
                            Any: 0,
                            NonTransfer: 1,
                            Governance: 2,
                            Staking: 3,
                            UnusedSudoBalances: 4,
                            IdentityJudgement: 5,
                            CancelProxy: 6
                        }
                    }
                },
                c = {
                    AccountInfo: "AccountInfoWithRefCount",
                    Address: "AccountId",
                    Keys: "SessionKeys5",
                    LookupSource: "AccountId",
                    ValidatorPrefs: "ValidatorPrefsWithCommission"
                };
            var a = [{
                minmax: [0, 12],
                types: u(u(u({}, s), c), {}, {
                    CompactAssignments: "CompactAssignmentsTo257",
                    OpenTip: "OpenTipTo225",
                    RefCount: "RefCountTo259"
                })
            }, {
                minmax: [13, 22],
                types: u(u(u({}, s), c), {}, {
                    CompactAssignments: "CompactAssignmentsTo257",
                    RefCount: "RefCountTo259"
                })
            }, {
                minmax: [23, 24],
                types: u(u(u({}, s), c), {}, {
                    RefCount: "RefCountTo259"
                })
            }, {
                minmax: [25, 27],
                types: u(u({}, s), c)
            }, {
                minmax: [28, 29],
                types: u(u({}, s), {}, {
                    AccountInfo: "AccountInfoWithDualRefCount"
                })
            }, {
                minmax: [30, 9109],
                types: u({}, s)
            }, {
                minmax: [9110, void 0],
                types: u({}, s)
            }];
            t.default = a
        },
        8621: function(e, t, n) {
            "use strict";
            var r = n(2);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var o = r(n(5461)),
                i = n(6446);

            function u(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, r)
                }
                return n
            }

            function s(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? u(Object(n), !0).forEach((function(t) {
                        (0, o.default)(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : u(Object(n)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }
            const c = {
                FullIdentification: "()",
                Keys: "SessionKeys7B"
            };
            var a = [{
                minmax: [0, 200],
                types: s(s({}, c), {}, {
                    AccountInfo: "AccountInfoWithDualRefCount",
                    Address: "AccountId",
                    LookupSource: "AccountId"
                })
            }, {
                minmax: [201, 214],
                types: s(s({}, c), {}, {
                    AccountInfo: "AccountInfoWithDualRefCount"
                })
            }, {
                minmax: [215, 228],
                types: s(s({}, c), {}, {
                    Keys: "SessionKeys6"
                })
            }, {
                minmax: [229, 9099],
                types: s(s({}, c), (0, i.mapXcm)("V0"))
            }, {
                minmax: [9100, 9105],
                types: s(s({}, c), (0, i.mapXcm)("V1"))
            }, {
                minmax: [9106, void 0],
                types: s({}, c)
            }];
            t.default = a
        },
        8622: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var r = [{
                minmax: [0, void 0],
                types: {}
            }];
            t.default = r
        },
        8623: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var r = [{
                minmax: [0, void 0],
                types: {
                    TAssetBalance: "u128",
                    ProxyType: {
                        _enum: ["Any", "NonTransfer", "CancelProxy", "Assets", "AssetOwner", "AssetManager", "Staking"]
                    },
                    AssetInstance: "AssetInstanceV0",
                    MultiAsset: "MultiAssetV0",
                    MultiLocation: "MultiLocationV0",
                    Response: "ResponseV0",
                    Xcm: "XcmV0",
                    XcmOrder: "XcmOrderV0"
                }
            }];
            t.default = r
        },
        8624: function(e, t, n) {
            "use strict";
            var r = n(2);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var o = r(n(5461)),
                i = n(6446);

            function u(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, r)
                }
                return n
            }

            function s(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? u(Object(n), !0).forEach((function(t) {
                        (0, o.default)(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : u(Object(n)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }
            const c = {
                    CompactAssignments: "CompactAssignmentsWith16",
                    RawSolution: "RawSolutionWith16",
                    Keys: "SessionKeys6",
                    ProxyType: {
                        _enum: ["Any", "NonTransfer", "Staking", "SudoBalances", "IdentityJudgement", "CancelProxy"]
                    }
                },
                a = {
                    AccountInfo: "AccountInfoWithRefCount",
                    Address: "AccountId",
                    CompactAssignments: "CompactAssignmentsWith16",
                    LookupSource: "AccountId",
                    Keys: "SessionKeys5",
                    RawSolution: "RawSolutionWith16",
                    ValidatorPrefs: "ValidatorPrefsWithCommission"
                };
            var l = [{
                minmax: [1, 2],
                types: s(s(s({}, c), a), {}, {
                    CompactAssignments: "CompactAssignmentsTo257",
                    DispatchInfo: "DispatchInfoTo244",
                    Heartbeat: "HeartbeatTo244",
                    Multiplier: "Fixed64",
                    OpenTip: "OpenTipTo225",
                    RefCount: "RefCountTo259",
                    Weight: "u32"
                })
            }, {
                minmax: [3, 22],
                types: s(s(s({}, c), a), {}, {
                    CompactAssignments: "CompactAssignmentsTo257",
                    DispatchInfo: "DispatchInfoTo244",
                    Heartbeat: "HeartbeatTo244",
                    OpenTip: "OpenTipTo225",
                    RefCount: "RefCountTo259"
                })
            }, {
                minmax: [23, 42],
                types: s(s(s({}, c), a), {}, {
                    CompactAssignments: "CompactAssignmentsTo257",
                    DispatchInfo: "DispatchInfoTo244",
                    Heartbeat: "HeartbeatTo244",
                    RefCount: "RefCountTo259"
                })
            }, {
                minmax: [43, 44],
                types: s(s(s({}, c), a), {}, {
                    DispatchInfo: "DispatchInfoTo244",
                    Heartbeat: "HeartbeatTo244",
                    RefCount: "RefCountTo259"
                })
            }, {
                minmax: [45, 47],
                types: s(s({}, c), a)
            }, {
                minmax: [48, 49],
                types: s(s({}, c), {}, {
                    AccountInfo: "AccountInfoWithDualRefCount"
                })
            }, {
                minmax: [50, 9099],
                types: s(s({}, c), (0, i.mapXcm)("V0"))
            }, {
                minmax: [9100, 9105],
                types: s(s({}, c), (0, i.mapXcm)("V1"))
            }, {
                minmax: [9106, void 0],
                types: s({}, c)
            }];
            t.default = l
        },
        8625: function(e, t, n) {
            "use strict";
            var r = n(2);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var o = n(8626),
                i = n(6429),
                u = r(n(8627)),
                s = r(n(8628)),
                c = r(n(8629));
            const a = {
                    kusama: u.default,
                    polkadot: s.default,
                    westend: c.default
                },
                l = {
                    westend: {
                        genesisHash: ["0xe143f23803ac50e8f6f8e62695d1ce9e4e1d68aa36c1cd2cfd15340213f3423e"]
                    }
                };

            function f(e, t) {
                const n = t.filter((e, n) => {
                    const r = t[n - 1];
                    return 0 !== n && (e[0] <= r[0] || e[1] <= r[1])
                });
                return (0, i.assert)(!n.length, () => `${e}: Mismatched upgrade ordering: ${(0,i.stringify)(n)}`), t
            }
            var d = Object.entries(a).map((function([e, t]) {
                const n = o.selectableNetworks.find(t => t.network === e) || l[e];
                return (0, i.assert)(n, () => "Unable to find info for chain " + e), {
                    genesisHash: (0, i.hexToU8a)(n.genesisHash[0]),
                    network: e,
                    versions: f(e, t).map(([e, t]) => ({
                        blockNumber: new i.BN(e),
                        specVersion: new i.BN(t)
                    }))
                }
            }));
            t.default = d
        },
        8627: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var r = [
                [0, 1020],
                [26669, 1021],
                [38245, 1022],
                [54248, 1023],
                [59659, 1024],
                [67651, 1025],
                [82191, 1027],
                [83238, 1028],
                [101503, 1029],
                [203466, 1030],
                [295787, 1031],
                [461692, 1032],
                [504329, 1033],
                [569327, 1038],
                [587687, 1039],
                [653183, 1040],
                [693488, 1042],
                [901442, 1045],
                [1375086, 1050],
                [1445458, 1051],
                [1472960, 1052],
                [1475648, 1053],
                [1491596, 1054],
                [1574408, 1055],
                [2064961, 1058],
                [2201991, 1062],
                [2671528, 2005],
                [2704202, 2007],
                [2728002, 2008],
                [2832534, 2011],
                [2962294, 2012],
                [324e4, 2013],
                [3274408, 2015],
                [3323565, 2019],
                [3534175, 2022],
                [3860281, 2023],
                [4143129, 2024],
                [4401242, 2025],
                [4841367, 2026],
                [5961600, 2027],
                [6137912, 2028],
                [6561855, 2029],
                [7100891, 2030],
                [7468792, 9010],
                [7668600, 9030],
                [7812476, 9040],
                [8010981, 9050],
                [8073833, 9070],
                [8555825, 9080],
                [8945245, 9090]
            ];
            t.default = r
        },
        8628: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var r = [
                [0, 0],
                [29231, 1],
                [188836, 5],
                [199405, 6],
                [214264, 7],
                [244358, 8],
                [303079, 9],
                [314201, 10],
                [342400, 11],
                [443963, 12],
                [528470, 13],
                [687751, 14],
                [746085, 15],
                [787923, 16],
                [799302, 17],
                [1205128, 18],
                [1603423, 23],
                [1733218, 24],
                [2005673, 25],
                [2436698, 26],
                [3613564, 27],
                [3899547, 28],
                [4345767, 29],
                [4876134, 30],
                [5661442, 9050],
                [6321619, 9080],
                [6713249, 9090]
            ];
            t.default = r
        },
        8629: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var r = [
                [214356, 4],
                [392764, 7],
                [409740, 8],
                [809976, 20],
                [877581, 24],
                [879238, 25],
                [889472, 26],
                [902937, 27],
                [932751, 28],
                [991142, 29],
                [1030162, 31],
                [1119657, 32],
                [1199282, 33],
                [1342534, 34],
                [1392263, 35],
                [1431703, 36],
                [1433369, 37],
                [1490972, 41],
                [2087397, 43],
                [2316688, 44],
                [2549864, 45],
                [3925782, 46],
                [3925843, 47],
                [4207800, 48],
                [4627944, 49],
                [5124076, 50],
                [5478664, 900],
                [5482450, 9e3],
                [5584305, 9010],
                [5784566, 9030],
                [5879822, 9031],
                [5896856, 9032],
                [5897316, 9033],
                [6117927, 9050],
                [6210274, 9070],
                [6379314, 9080],
                [6979141, 9090],
                [7568453, 9100]
            ];
            t.default = r
        },
        8630: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.knownOrigins = void 0;
            t.knownOrigins = {
                Council: "CollectiveOrigin",
                System: "SystemOrigin",
                TechnicalCommittee: "CollectiveOrigin",
                Xcm: "XcmOrigin",
                XcmPallet: "XcmOrigin",
                Authority: "AuthorityOrigin",
                GeneralCouncil: "CollectiveOrigin"
            }
        }
    }
]);