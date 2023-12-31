(window.webpackJsonp = window.webpackJsonp || []).push([
    [6], {
        5692: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.assert = a, t.assertReturn = function(e, t) {
                return a(!(0, i.isUndefined)(e) && !(0, o.isNull)(e), t), e
            };
            var n = r(5735),
                o = r(6025),
                i = r(5736);

            function a(e, t) {
                if (!e) throw new Error((0, n.isFunction)(t) ? t() : t)
            }
        },
        5839: function(e, t, r) {
            "use strict";
            var n = r(2);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), Object.defineProperty(t, "BN", {
                enumerable: !0,
                get: function() {
                    return o.default
                }
            });
            var o = n(r(35))
        },
        5917: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.bnToBn = function(e) {
                return u.BN.isBN(e) ? e : e ? (0, i.isHex)(e) ? (0, n.hexToBn)(e.toString()) : (0, o.isBigInt)(e) ? new u.BN(e.toString()) : (0, s.isToBn)(e) ? e.toBn() : (0, a.isToBigInt)(e) ? new u.BN(e.toBigInt().toString()) : new u.BN(e) : new u.BN(0)
            };
            var n = r(6027),
                o = r(6460),
                i = r(5838),
                a = r(6451),
                s = r(6452),
                u = r(5839)
        },
        6167: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.packageInfo = void 0;
            t.packageInfo = {
                name: "@polkadot/types",
                version: "6.3.1"
            }
        },
        6172: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.Null = void 0;
            var n = r(5463);
            class Null {
                constructor(e) {
                    this.registry = void 0, this.createdAtHash = void 0, this.registry = e
                }
                get encodedLength() {
                    return 0
                }
                get hash() {
                    throw new Error(".hash is not implemented on Null")
                }
                get isEmpty() {
                    return !0
                }
                eq(e) {
                    return e instanceof Null || (0, n.isNull)(e)
                }
                toHex() {
                    return "0x"
                }
                toHuman() {
                    return this.toJSON()
                }
                toJSON() {
                    return null
                }
                toRawType() {
                    return "Null"
                }
                toString() {
                    return ""
                }
                toU8a(e) {
                    return new Uint8Array
                }
            }
            t.Null = Null
        },
        6449: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.biToBigInt = function(e) {
                return "bigint" == typeof e ? e : e ? (0, i.isHex)(e) ? (0, n.hexToBigInt)(e.toString()) : (0, o.isBn)(e) ? BigInt(e.toString()) : (0, a.isToBigInt)(e) ? e.toBigInt() : (0, s.isToBn)(e) ? BigInt(e.toBn().toString()) : BigInt(e) : BigInt(0)
            };
            var n = r(7112),
                o = r(6450),
                i = r(5838),
                a = r(6451),
                s = r(6452)
        },
        6459: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var n = {
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
                    return a.bnFromHex
                }
            }), Object.defineProperty(t, "bnMax", {
                enumerable: !0,
                get: function() {
                    return s.bnMax
                }
            }), Object.defineProperty(t, "bnMin", {
                enumerable: !0,
                get: function() {
                    return u.bnMin
                }
            }), Object.defineProperty(t, "bnSqrt", {
                enumerable: !0,
                get: function() {
                    return c.bnSqrt
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
            var o = r(7120);
            Object.keys(o).forEach((function(e) {
                "default" !== e && "__esModule" !== e && (Object.prototype.hasOwnProperty.call(n, e) || e in t && t[e] === o[e] || Object.defineProperty(t, e, {
                    enumerable: !0,
                    get: function() {
                        return o[e]
                    }
                }))
            }));
            var i = r(5839),
                a = r(8671),
                s = r(7121),
                u = r(8672),
                c = r(8673),
                l = r(5917),
                f = r(8674),
                d = r(7122)
        },
        6470: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), Object.defineProperty(t, "BitVec", {
                enumerable: !0,
                get: function() {
                    return n.BitVec
                }
            }), Object.defineProperty(t, "Bool", {
                enumerable: !0,
                get: function() {
                    return o.bool
                }
            }), Object.defineProperty(t, "Bytes", {
                enumerable: !0,
                get: function() {
                    return i.Bytes
                }
            }), Object.defineProperty(t, "Data", {
                enumerable: !0,
                get: function() {
                    return a.Data
                }
            }), Object.defineProperty(t, "I128", {
                enumerable: !0,
                get: function() {
                    return f.i128
                }
            }), Object.defineProperty(t, "I16", {
                enumerable: !0,
                get: function() {
                    return u.i16
                }
            }), Object.defineProperty(t, "I256", {
                enumerable: !0,
                get: function() {
                    return d.i256
                }
            }), Object.defineProperty(t, "I32", {
                enumerable: !0,
                get: function() {
                    return c.i32
                }
            }), Object.defineProperty(t, "I64", {
                enumerable: !0,
                get: function() {
                    return l.i64
                }
            }), Object.defineProperty(t, "I8", {
                enumerable: !0,
                get: function() {
                    return s.i8
                }
            }), Object.defineProperty(t, "Null", {
                enumerable: !0,
                get: function() {
                    return p.Null
                }
            }), Object.defineProperty(t, "StorageKey", {
                enumerable: !0,
                get: function() {
                    return y.StorageKey
                }
            }), Object.defineProperty(t, "Text", {
                enumerable: !0,
                get: function() {
                    return b.Text
                }
            }), Object.defineProperty(t, "Type", {
                enumerable: !0,
                get: function() {
                    return g.Type
                }
            }), Object.defineProperty(t, "U128", {
                enumerable: !0,
                get: function() {
                    return _.u128
                }
            }), Object.defineProperty(t, "U16", {
                enumerable: !0,
                get: function() {
                    return m.u16
                }
            }), Object.defineProperty(t, "U256", {
                enumerable: !0,
                get: function() {
                    return j.u256
                }
            }), Object.defineProperty(t, "U32", {
                enumerable: !0,
                get: function() {
                    return O.u32
                }
            }), Object.defineProperty(t, "U64", {
                enumerable: !0,
                get: function() {
                    return v.u64
                }
            }), Object.defineProperty(t, "U8", {
                enumerable: !0,
                get: function() {
                    return h.u8
                }
            }), Object.defineProperty(t, "USize", {
                enumerable: !0,
                get: function() {
                    return P.usize
                }
            }), Object.defineProperty(t, "bool", {
                enumerable: !0,
                get: function() {
                    return o.bool
                }
            }), Object.defineProperty(t, "i128", {
                enumerable: !0,
                get: function() {
                    return f.i128
                }
            }), Object.defineProperty(t, "i16", {
                enumerable: !0,
                get: function() {
                    return u.i16
                }
            }), Object.defineProperty(t, "i256", {
                enumerable: !0,
                get: function() {
                    return d.i256
                }
            }), Object.defineProperty(t, "i32", {
                enumerable: !0,
                get: function() {
                    return c.i32
                }
            }), Object.defineProperty(t, "i64", {
                enumerable: !0,
                get: function() {
                    return l.i64
                }
            }), Object.defineProperty(t, "i8", {
                enumerable: !0,
                get: function() {
                    return s.i8
                }
            }), Object.defineProperty(t, "u128", {
                enumerable: !0,
                get: function() {
                    return _.u128
                }
            }), Object.defineProperty(t, "u16", {
                enumerable: !0,
                get: function() {
                    return m.u16
                }
            }), Object.defineProperty(t, "u256", {
                enumerable: !0,
                get: function() {
                    return j.u256
                }
            }), Object.defineProperty(t, "u32", {
                enumerable: !0,
                get: function() {
                    return O.u32
                }
            }), Object.defineProperty(t, "u64", {
                enumerable: !0,
                get: function() {
                    return v.u64
                }
            }), Object.defineProperty(t, "u8", {
                enumerable: !0,
                get: function() {
                    return h.u8
                }
            }), Object.defineProperty(t, "usize", {
                enumerable: !0,
                get: function() {
                    return P.usize
                }
            });
            var n = r(8817),
                o = r(7139),
                i = r(7140),
                a = r(8818),
                s = r(8819),
                u = r(8820),
                c = r(8821),
                l = r(8822),
                f = r(8823),
                d = r(8824),
                p = r(6172),
                y = r(7141),
                b = r(7145),
                g = r(8829),
                h = r(8830),
                m = r(8831),
                O = r(6473),
                v = r(7146),
                _ = r(8832),
                j = r(8833),
                P = r(8834)
        },
        6471: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), Object.defineProperty(t, "flattenUniq", {
                enumerable: !0,
                get: function() {
                    return n.flattenUniq
                }
            }), Object.defineProperty(t, "getSiName", {
                enumerable: !0,
                get: function() {
                    return o.getSiName
                }
            }), Object.defineProperty(t, "getUniqTypes", {
                enumerable: !0,
                get: function() {
                    return i.getUniqTypes
                }
            }), Object.defineProperty(t, "toCallsOnly", {
                enumerable: !0,
                get: function() {
                    return a.toCallsOnly
                }
            }), Object.defineProperty(t, "validateTypes", {
                enumerable: !0,
                get: function() {
                    return s.validateTypes
                }
            });
            var n = r(6472),
                o = r(8825),
                i = r(8826),
                a = r(8828),
                s = r(7142)
        },
        6472: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.flattenUniq = function e(t, r = []) {
                return [...new Set(t.reduce((t, r) => Array.isArray(r) ? e(r, t) : (t.push(r), t), r))]
            }
        },
        6473: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.u32 = void 0;
            var n = r(5842);
            class u32 extends(n.UInt.with(32)) {
                constructor(...e) {
                    super(...e), this.__UIntType = "u32"
                }
            }
            t.u32 = u32
        },
        6476: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.Metadata = void 0;
            var n = r(5463),
                o = r(8880);
            const i = new Uint8Array([109, 101, 116, 97, 9]),
                a = new Uint8Array;

            function s(e, t) {
                if (!t || (0, n.isU8a)(t) || (0, n.isHex)(t)) {
                    const r = function e(t = a) {
                            if ((0, n.isHex)(t)) return e((0, n.u8aToU8a)(t));
                            if ((0, n.isU8a)(t)) return 0 === t.length ? i : t;
                            throw new Error("Invalid type passed to Metadata constructor")
                        }(t),
                        u = r[4];
                    try {
                        return new o.MetadataVersioned(e, r)
                    } catch (t) {
                        if (9 === u) return r[4] = 10, s(e, r);
                        throw t
                    }
                }
                return new o.MetadataVersioned(e, t)
            }
            class Metadata extends o.MetadataVersioned {
                constructor(e, t) {
                    super(e, s(e, t))
                }
            }
            t.Metadata = Metadata
        },
        7111: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.BI_QUINTILL = t.BI_MILLION = t.BI_MAX_INTEGER = t.BI_BILLION = void 0;
            const n = BigInt(1e6);
            t.BI_MILLION = n;
            const o = BigInt(1e9);
            t.BI_BILLION = o;
            const i = o * o;
            t.BI_QUINTILL = i;
            const a = BigInt(Number.MAX_SAFE_INTEGER);
            t.BI_MAX_INTEGER = a
        },
        7119: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.biToU8a = function(e, t) {
                const r = (0, n.objectSpread)({
                        bitLength: -1,
                        isLe: !0,
                        isNegative: !1
                    }, t),
                    a = (0, o.biToBigInt)(e);
                if (0n === a) return function({
                    bitLength: e = 0
                }) {
                    return -1 === e ? new Uint8Array : new Uint8Array(Math.ceil(e / 8))
                }(r);
                const s = function(e, {
                    isLe: t,
                    isNegative: r
                }) {
                    const n = [];
                    r && (e = -1n * (e + 1n));
                    for (; 0n !== e;) {
                        const o = e % i,
                            a = Number(r ? 0xffn ^ o : o);
                        t ? n.push(a) : n.unshift(a), e = (e - o) / i
                    }
                    return Uint8Array.from(n)
                }(a, r);
                if (-1 === r.bitLength) return s;
                const u = Math.ceil((r.bitLength || 0) / 8),
                    c = new Uint8Array(u);
                r.isNegative && c.fill(255);
                return c.set(s, r.isLe ? 0 : u - s.length), c
            };
            var n = r(5693),
                o = r(6449);
            const i = 256n
        },
        7120: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.BN_ZERO = t.BN_TWO = t.BN_THREE = t.BN_THOUSAND = t.BN_TEN = t.BN_SIX = t.BN_SEVEN = t.BN_QUINTILL = t.BN_ONE = t.BN_NINE = t.BN_MILLION = t.BN_MAX_INTEGER = t.BN_HUNDRED = t.BN_FOUR = t.BN_FIVE = t.BN_EIGHT = t.BN_BILLION = void 0;
            var n = r(5839);
            const o = new n.BN(0);
            t.BN_ZERO = o;
            const i = new n.BN(1);
            t.BN_ONE = i;
            const a = new n.BN(2);
            t.BN_TWO = a;
            const s = new n.BN(3);
            t.BN_THREE = s;
            const u = new n.BN(4);
            t.BN_FOUR = u;
            const c = new n.BN(5);
            t.BN_FIVE = c;
            const l = new n.BN(6);
            t.BN_SIX = l;
            const f = new n.BN(7);
            t.BN_SEVEN = f;
            const d = new n.BN(8);
            t.BN_EIGHT = d;
            const p = new n.BN(9);
            t.BN_NINE = p;
            const y = new n.BN(10);
            t.BN_TEN = y;
            const b = new n.BN(100);
            t.BN_HUNDRED = b;
            const g = new n.BN(1e3);
            t.BN_THOUSAND = g;
            const h = new n.BN(1e6);
            t.BN_MILLION = h;
            const m = new n.BN(1e9);
            t.BN_BILLION = m;
            const O = m.mul(m);
            t.BN_QUINTILL = O;
            const v = new n.BN(Number.MAX_SAFE_INTEGER);
            t.BN_MAX_INTEGER = v
        },
        7121: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.bnMax = function(...e) {
                return i("max", e)
            }, t.checkMaxMin = i;
            var n = r(5692),
                o = r(5839);

            function i(e, t) {
                (0, n.assert)(t.length >= 1, "Must provide one or more BN arguments");
                let r = t[0];
                for (let n = 1; n < t.length; n++) r = o.BN[e](r, t[n]);
                return r
            }
        },
        7122: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.bnToU8a = function(e, t = a, r) {
                const s = (0, o.objectSpread)({
                        bitLength: -1,
                        isLe: !0,
                        isNegative: !1
                    }, (0, n.isNumber)(t) ? {
                        bitLength: t,
                        isLe: r
                    } : t),
                    u = (0, i.bnToBn)(e),
                    c = -1 === s.bitLength ? Math.ceil(u.bitLength() / 8) : Math.ceil((s.bitLength || 0) / 8);
                return e ? function(e, t, {
                    isLe: r,
                    isNegative: n
                }) {
                    const o = new Uint8Array(t),
                        i = n ? e.toTwos(8 * t) : e;
                    return o.set(i.toArray(r ? "le" : "be", t), 0), o
                }(u, c, s) : function(e, t) {
                    return -1 === t.bitLength ? new Uint8Array : new Uint8Array(e)
                }(c, s)
            };
            var n = r(6461),
                o = r(5693),
                i = r(5917);
            const a = {
                bitLength: -1,
                isLe: !0,
                isNegative: !1
            }
        },
        7139: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.bool = void 0;
            var n = r(5463);
            class bool extends Boolean {
                constructor(e, t = !1) {
                    super(function(e) {
                        return e instanceof Boolean ? e.valueOf() : (0, n.isU8a)(e) ? 1 === e[0] : !!e
                    }(t)), this.registry = void 0, this.createdAtHash = void 0, this.registry = e
                }
                get encodedLength() {
                    return 1
                }
                get hash() {
                    return this.registry.hash(this.toU8a())
                }
                get isEmpty() {
                    return this.isFalse
                }
                get isFalse() {
                    return !this.isTrue
                }
                get isTrue() {
                    return this.valueOf()
                }
                eq(e) {
                    return this.valueOf() === (e instanceof Boolean ? e.valueOf() : e)
                }
                toHex() {
                    return (0, n.u8aToHex)(this.toU8a())
                }
                toHuman() {
                    return this.toJSON()
                }
                toJSON() {
                    return this.valueOf()
                }
                toRawType() {
                    return "bool"
                }
                toString() {
                    return this.toJSON().toString()
                }
                toU8a(e) {
                    return new Uint8Array([this.valueOf() ? 1 : 0])
                }
            }
            t.bool = bool
        },
        7140: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.Bytes = void 0;
            var n = r(5463),
                o = r(5841);

            function i(e) {
                return Array.isArray(e) || (0, n.isString)(e) ? (0, n.u8aToU8a)(e) : e instanceof o.Raw || !(0, n.isU8a)(e) ? e : function(e) {
                    if (!e.length) return new Uint8Array;
                    const [t, r] = (0, n.compactFromU8a)(e), o = t + r.toNumber();
                    return (0, n.assert)(r.lten(10485760), () => `Bytes length ${r.toString()} exceeds 10485760`), (0, n.assert)(o <= e.length, () => `Bytes: required length less than remainder, expected at least ${o}, found ${e.length}`), e.subarray(t, o)
                }(e)
            }
            class Bytes extends o.Raw {
                constructor(e, t) {
                    super(e, i(t))
                }
                get encodedLength() {
                    return this.length + (0, n.compactToU8a)(this.length).length
                }
                toRawType() {
                    return "Bytes"
                }
                toU8a(e) {
                    return e ? super.toU8a(e) : (0, n.compactAddLength)(this)
                }
            }
            t.Bytes = Bytes
        },
        7141: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.StorageKey = void 0, t.unwrapStorageSi = s, t.unwrapStorageType = u;
            var n = r(5463),
                o = r(6471),
                i = r(7140);
            const a = {
                Blake2_128: [16, !1],
                Blake2_128Concat: [16, !0],
                Blake2_256: [32, !1],
                Identity: [0, !0],
                Twox128: [16, !1],
                Twox256: [32, !1],
                Twox64Concat: [8, !0]
            };

            function s(e) {
                return e.isPlain ? e.asPlain : e.asMap.value
            }

            function u(e, t, r) {
                const n = (0, o.getSiName)(e.lookup, s(t));
                return r ? `Option<${n}>` : n
            }

            function c(e, t, r) {
                if (!r || !r.type.isMap) return [];
                const {
                    hashers: n,
                    key: o
                } = r.type.asMap, i = 1 === n.length ? [o] : e.lookup.getSiType(o).def.asTuple;
                return function(e, t, r) {
                    let n = 32;
                    return r.reduce((r, [o, i]) => {
                        const [s, u] = a[o.type], c = u ? e.createType(e.createLookupType(i), t.subarray(n + s)) : e.createType("Raw", t.subarray(n, n + s));
                        return n += s + (u ? c.encodedLength : 0), r.push(c), r
                    }, [])
                }(e, t, n.map((e, t) => [e, i[t]]))
            }
            class StorageKey extends i.Bytes {
                constructor(e, t, r = {}) {
                    const {
                        key: o,
                        method: i,
                        section: a
                    } = function(e) {
                        if (e instanceof StorageKey) return {
                            key: e,
                            method: e.method,
                            section: e.section
                        };
                        if (!e || (0, n.isString)(e) || (0, n.isU8a)(e)) return {
                            key: e
                        };
                        if ((0, n.isFunction)(e)) return {
                            key: e(),
                            method: e.method,
                            section: e.section
                        };
                        if (Array.isArray(e)) {
                            const [t, r = []] = e;
                            if ((0, n.assert)((0, n.isFunction)(t), "Expected function input for key construction"), t.meta && t.meta.type.isMap) {
                                const e = t.meta.type.asMap;
                                (0, n.assert)(Array.isArray(r) && r.length === e.hashers.length, () => `Expected an array of ${e.hashers.length} values as params to a Map query`)
                            }
                            return {
                                key: t(...r),
                                method: t.method,
                                section: t.section
                            }
                        }
                        throw new Error(`Unable to convert input ${e} to StorageKey`)
                    }(t);
                    super(e, o), this._args = void 0, this._meta = void 0, this._outputType = void 0, this._method = void 0, this._section = void 0, this._outputType = function(e, t) {
                        if (t instanceof StorageKey) return t.outputType;
                        if ((0, n.isFunction)(t)) return u(e, t.meta.type);
                        if (Array.isArray(t)) {
                            const [r] = t;
                            if (r.meta) return u(e, r.meta.type)
                        }
                        return "Raw"
                    }(e, t), this.setMeta(function(e) {
                        if (e instanceof StorageKey) return e.meta;
                        if ((0, n.isFunction)(e)) return e.meta;
                        if (Array.isArray(e)) {
                            const [t] = e;
                            return t.meta
                        }
                    }(t), r.section || a, r.method || i)
                }
                get args() {
                    return this._args
                }
                get meta() {
                    return this._meta
                }
                get method() {
                    return this._method
                }
                get outputType() {
                    return this._outputType
                }
                get section() {
                    return this._section
                }
                is(e) {
                    return e.section === this.section && e.method === this.method
                }
                setMeta(e, t, r) {
                    this._meta = e, this._method = r || this._method, this._section = t || this._section, e && (this._outputType = u(this.registry, e.type));
                    try {
                        this._args = c(this.registry, this.toU8a(!0), this.meta)
                    } catch (e) {}
                    return this
                }
                toHuman() {
                    return this._args.length ? this._args.map(e => e.toHuman()) : super.toHuman()
                }
                toRawType() {
                    return "StorageKey"
                }
            }
            t.StorageKey = StorageKey
        },
        7142: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.validateTypes = function(e, t, r) {
                const n = (0, i.flattenUniq)((0, o.extractTypes)(r)).filter(t => !e.hasType(t)).sort();
                if (0 !== n.length) {
                    const e = "Unknown types found, no types for " + n.join(", ");
                    if (t) throw new Error(e);
                    a.warn(e)
                }
                return r
            };
            var n = r(5463),
                o = r(8827),
                i = r(6472);
            const a = (0, n.logger)("metadata")
        },
        7145: function(e, t, r) {
            "use strict";
            var n = r(2);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.Text = void 0;
            var o = n(r(5471)),
                i = n(r(5472)),
                a = r(5463),
                s = r(5841);
            var u = (0, i.default)("override");
            t.Text = class Text extends String {
                constructor(e, t) {
                    super(function(e) {
                        if ((0, a.isHex)(e)) return (0, a.u8aToString)((0, a.hexToU8a)(e));
                        if (e instanceof Uint8Array) {
                            if (!e.length) return "";
                            if (e instanceof s.Raw) return (0, a.u8aToString)(e);
                            const [t, r] = (0, a.compactFromU8a)(e), n = t + r.toNumber();
                            return (0, a.assert)(r.lten(131072), () => `Text: length ${r.toString()} exceeds 131072`), (0, a.assert)(n <= e.length, () => `Text: required length less than remainder, expected at least ${n}, found ${e.length}`), (0, a.u8aToString)(e.subarray(t, n))
                        }
                        return e ? e.toString() : ""
                    }(t)), this.registry = void 0, this.createdAtHash = void 0, Object.defineProperty(this, u, {
                        writable: !0,
                        value: null
                    }), this.registry = e
                }
                get encodedLength() {
                    return this.toU8a().length
                }
                get hash() {
                    return this.registry.hash(this.toU8a())
                }
                get isEmpty() {
                    return 0 === this.length
                }
                get length() {
                    return super.length
                }
                eq(e) {
                    return !!(0, a.isString)(e) && this.toString() === e.toString()
                }
                setOverride(e) {
                    (0, o.default)(this, u)[u] = e
                }
                toHex() {
                    return (0, a.u8aToHex)(this.toU8a(!0))
                }
                toHuman() {
                    return this.toJSON()
                }
                toJSON() {
                    return this.toString()
                }
                toRawType() {
                    return "Text"
                }
                toString() {
                    return (0, o.default)(this, u)[u] || super.toString()
                }
                toU8a(e) {
                    const t = (0, a.stringToU8a)(super.toString());
                    return e ? t : (0, a.compactAddLength)(t)
                }
            }
        },
        7146: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.u64 = void 0;
            var n = r(5842);
            class u64 extends(n.UInt.with(64)) {
                constructor(...e) {
                    super(...e), this.__UIntType = "u64"
                }
            }
            t.u64 = u64
        },
        7154: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), Object.defineProperty(t, "decorateConstants", {
                enumerable: !0,
                get: function() {
                    return i.decorateConstants
                }
            }), Object.defineProperty(t, "decorateErrors", {
                enumerable: !0,
                get: function() {
                    return a.decorateErrors
                }
            }), Object.defineProperty(t, "decorateEvents", {
                enumerable: !0,
                get: function() {
                    return s.decorateEvents
                }
            }), Object.defineProperty(t, "decorateExtrinsics", {
                enumerable: !0,
                get: function() {
                    return u.decorateExtrinsics
                }
            }), Object.defineProperty(t, "decorateStorage", {
                enumerable: !0,
                get: function() {
                    return c.decorateStorage
                }
            }), t.expandMetadata = function(e, t) {
                (0, n.assert)(t instanceof o.Metadata, "You need to pass a valid Metadata instance to Decorated");
                const r = t.asLatest,
                    l = t.version;
                return {
                    consts: (0, i.decorateConstants)(e, r, l),
                    errors: (0, a.decorateErrors)(e, r, l),
                    events: (0, s.decorateEvents)(e, r, l),
                    query: (0, c.decorateStorage)(e, r, l),
                    registry: e,
                    tx: (0, u.decorateExtrinsics)(e, r, l)
                }
            };
            var n = r(5463),
                o = r(6476),
                i = r(8888),
                a = r(7155),
                s = r(8889),
                u = r(8890),
                c = r(8892)
        },
        7155: function(e, t, r) {
            "use strict";
            var n = r(2);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.decorateErrors = function(e, {
                lookup: t,
                pallets: r
            }, n) {
                return r.reduce((r, {
                    errors: o,
                    index: a,
                    name: s
                }, c) => {
                    if (!o.isSome) return r;
                    const l = n >= 12 ? a.toNumber() : c;
                    return r[(0, i.stringCamelCase)(s)] = t.getSiType(o.unwrap().type).def.asVariant.variants.reduce((r, n) => (r[n.name.toString()] = {
                        is: ({
                            error: e,
                            index: t
                        }) => t.eq(l) && e.eq(n.index),
                        meta: e.createType("ErrorMetadataLatest", u(t, n))
                    }, r), {}), r
                }, {})
            }, t.variantToMeta = u;
            var o = n(r(5461)),
                i = r(5463);

            function a(e, t) {
                var r = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(e);
                    t && (n = n.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), r.push.apply(r, n)
                }
                return r
            }

            function s(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? a(Object(r), !0).forEach((function(t) {
                        (0, o.default)(e, t, r[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : a(Object(r)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                    }))
                }
                return e
            }

            function u(e, t) {
                return s(s({}, t), {}, {
                    args: t.fields.map(({
                        type: t
                    }) => e.getTypeDef(t).type)
                })
            }
        },
        7156: function(e, t, r) {
            "use strict";
            var n = r(2);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.createFunction = function(e, t, r) {
                const {
                    meta: {
                        type: n
                    }
                } = t, o = function({
                    meta: e,
                    method: t,
                    prefix: r,
                    section: n
                }, o) {
                    const a = o;
                    return a.meta = e, a.method = (0, i.stringLowerFirst)(t), a.prefix = r, a.section = n, a.toJSON = () => l(l({}, e.toJSON()), {}, {
                        storage: {
                            method: t,
                            prefix: r,
                            section: n
                        }
                    }), a
                }(t, (...o) => {
                    if (n.isPlain) return r.skipHashing ? (0, i.compactAddLength)((0, i.u8aToU8a)(r.key)) : d(e, t, [], [], []);
                    const {
                        hashers: a,
                        key: s
                    } = n.asMap;
                    return 1 === a.length ? d(e, t, [s], a, o) : d(e, t, e.lookup.getSiType(s).def.asTuple.map(e => e), a, o)
                });
                n.isMap && function(e, t, r) {
                    const {
                        meta: {
                            type: n
                        },
                        method: o,
                        section: a
                    } = t;
                    r.iterKey = function(e, {
                        meta: {
                            docs: t,
                            name: r,
                            type: n
                        },
                        section: o
                    }, {
                        method: i
                    }, a) {
                        const s = e.createLookupType(n.asMap.key);
                        return a.meta = e.createType("StorageEntryMetadataLatest", {
                            docs: t,
                            fallback: e.createType("Bytes"),
                            modifier: e.createType("StorageEntryModifierLatest", 1),
                            name: r,
                            type: e.createType("StorageEntryTypeLatest", s, 0)
                        }), (...t) => e.createType("StorageKey", a(...t), {
                            method: i,
                            section: o
                        })
                    }(e, t, r, (...r) => {
                        if ((0, i.assert)(0 === r.length || n.isMap && r.length < n.asMap.hashers.length, () => `Iteration ${(0,i.stringCamelCase)(a||"unknown")}.${(0,i.stringCamelCase)(o||"unknown")} needs arguments to be at least one less than the full arguments, found [${r.join(", ")}]`), r.length && n.isMap) {
                            const {
                                hashers: o,
                                key: i
                            } = n.asMap, a = 1 === o.length ? [i] : [...e.lookup.getSiType(i).def.asTuple.map(e => e)], u = [...o];
                            return new s.Raw(e, f(e, t, a.slice(0, r.length), u.slice(0, r.length), r))
                        }
                        return new s.Raw(e, f(e, t, [], [], []))
                    })
                }(e, t, o);
                return o.keyPrefix = (...e) => o.iterKey && o.iterKey(...e) || (0, i.compactStripLength)(o())[1], o
            };
            var o = n(r(5461)),
                i = r(5463),
                a = r(5496),
                s = r(6170),
                u = r(8893);

            function c(e, t) {
                var r = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(e);
                    t && (n = n.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), r.push.apply(r, n)
                }
                return r
            }

            function l(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? c(Object(r), !0).forEach((function(t) {
                        (0, o.default)(e, t, r[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : c(Object(r)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                    }))
                }
                return e
            }

            function f(e, t, r, n, o) {
                return (0, i.u8aConcat)((0, a.xxhashAsU8a)(t.prefix, 128), (0, a.xxhashAsU8a)(t.method, 128), ...r.map((t, r) => (0, u.getHasher)(n[r])(e.createType(e.createLookupType(t), o[r]).toU8a())))
            }

            function d(e, t, r, n, o) {
                const {
                    method: a,
                    section: s
                } = t;
                return (0, i.assert)(Array.isArray(o), () => `Call to ${(0,i.stringCamelCase)(s||"unknown")}.${(0,i.stringCamelCase)(a||"unknown")} needs ${r.length} arguments`), (0, i.assert)(o.filter(e => !(0, i.isUndefined)(e)).length === r.length, () => `Call to ${(0,i.stringCamelCase)(s||"unknown")}.${(0,i.stringCamelCase)(a||"unknown")} needs ${r.length} arguments, found [${o.join(", ")}]`), (0, i.compactAddLength)(f(e, t, r, n, o))
            }
        },
        8653: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), Object.defineProperty(t, "arrayChunk", {
                enumerable: !0,
                get: function() {
                    return n.arrayChunk
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
                    return a.arrayRange
                }
            }), Object.defineProperty(t, "arrayShuffle", {
                enumerable: !0,
                get: function() {
                    return s.arrayShuffle
                }
            }), Object.defineProperty(t, "arrayZip", {
                enumerable: !0,
                get: function() {
                    return u.arrayZip
                }
            });
            var n = r(8654),
                o = r(8655),
                i = r(8656),
                a = r(8657),
                s = r(8658),
                u = r(8659)
        },
        8654: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.arrayChunk = function(e, t) {
                const r = Math.ceil(e.length / t),
                    n = Array(r);
                for (let o = 0; o < r; o++) {
                    const r = o * t;
                    n[o] = e.slice(r, r + t)
                }
                return n
            }
        },
        8655: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.arrayFilter = function(e, t = !0) {
                return e.filter(e => !(0, o.isUndefined)(e) && (t || !(0, n.isNull)(e)))
            };
            var n = r(6025),
                o = r(5736)
        },
        8656: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.arrayFlatten = function(e) {
                let t = 0;
                for (let r = 0; r < e.length; r++) t += e[r].length;
                const r = new Array(t);
                let n = -1;
                for (let t = 0; t < e.length; t++) {
                    const o = e[t];
                    for (let e = 0; e < o.length; e++) r[++n] = o[e]
                }
                return r
            }
        },
        8657: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.arrayRange = function(e, t = 0) {
                (0, n.assert)(e > 0, "Expected non-zero, positive number as a range size");
                const r = new Array(e).fill(0);
                for (let e = 0; e < r.length; e++) r[e] = e + t;
                return r
            };
            var n = r(5692)
        },
        8658: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.arrayShuffle = function(e) {
                const t = e.slice();
                let r = t.length;
                if (1 === r) return t;
                for (; 0 !== r;) {
                    const e = Math.floor(Math.random() * r);
                    r--, [t[r], t[e]] = [t[e], t[r]]
                }
                return t
            }
        },
        8659: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.arrayZip = function(e, t) {
                const r = new Array(e.length);
                for (let n = 0; n < e.length; n++) r[n] = [e[n], t[n]];
                return r
            }
        },
        8660: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var n = {
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
                    return u.biMin
                }
            }), Object.defineProperty(t, "biSqrt", {
                enumerable: !0,
                get: function() {
                    return i.biSqrt
                }
            }), Object.defineProperty(t, "biToBigInt", {
                enumerable: !0,
                get: function() {
                    return a.biToBigInt
                }
            }), Object.defineProperty(t, "biToHex", {
                enumerable: !0,
                get: function() {
                    return c.biToHex
                }
            }), Object.defineProperty(t, "biToU8a", {
                enumerable: !0,
                get: function() {
                    return l.biToU8a
                }
            });
            var o = r(7111);
            Object.keys(o).forEach((function(e) {
                "default" !== e && "__esModule" !== e && (Object.prototype.hasOwnProperty.call(n, e) || e in t && t[e] === o[e] || Object.defineProperty(t, e, {
                    enumerable: !0,
                    get: function() {
                        return o[e]
                    }
                }))
            }));
            var i = r(8661),
                a = r(6449),
                s = r(8662),
                u = r(8663),
                c = r(8664),
                l = r(7119)
        },
        8661: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.biSqrt = function(e) {
                const t = (0, i.biToBigInt)(e);
                if ((0, n.assert)(t >= 0n, "square root of negative numbers is not supported"), t <= o.BI_MAX_INTEGER) return BigInt(Math.floor(Math.sqrt(Number(t))));
                let r = a;
                for (;;) {
                    const e = t / r + r >> 1n;
                    if (r === e || r === e - 1n) return r;
                    r = e
                }
            };
            var n = r(5692),
                o = r(7111),
                i = r(6449);
            const a = 94906265n
        },
        8662: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.biMax = function(...e) {
                (0, n.assert)(e.length >= 1, "Must provide one or more bigint arguments");
                let t = e[0];
                for (let r = 1; r < e.length; r++) e[r] > t && (t = e[r]);
                return t
            };
            var n = r(5692)
        },
        8663: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.biMin = function(...e) {
                (0, n.assert)(e.length >= 1, "Must provide one or more bigint arguments");
                let t = e[0];
                for (let r = 1; r < e.length; r++) e[r] < t && (t = e[r]);
                return t
            };
            var n = r(5692)
        },
        8664: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.biToHex = function(e, t) {
                if (!e) return "0x00";
                return (0, o.u8aToHex)((0, i.biToU8a)(e, (0, n.objectSpread)({
                    isLe: !1,
                    isNegative: !1
                }, t)))
            };
            var n = r(5693),
                o = r(5916),
                i = r(7119)
        },
        8671: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), Object.defineProperty(t, "bnFromHex", {
                enumerable: !0,
                get: function() {
                    return n.hexToBn
                }
            });
            var n = r(6027)
        },
        8672: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.bnMin = function(...e) {
                return (0, n.checkMaxMin)("min", e)
            };
            var n = r(7121)
        },
        8673: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.bnSqrt = function(e) {
                const t = (0, a.bnToBn)(e);
                if ((0, n.assert)(t.gte(i.BN_ZERO), "square root of negative numbers is not supported"), t.lte(i.BN_MAX_INTEGER)) return new o.BN(Math.floor(Math.sqrt(t.toNumber())));
                let r = s.clone();
                for (;;) {
                    const e = t.div(r).iadd(r).ishrn(1);
                    if (r.eq(e) || r.eq(e.sub(i.BN_ONE))) return r;
                    r = e
                }
            };
            var n = r(5692),
                o = r(5839),
                i = r(7120),
                a = r(5917);
            const s = new o.BN(94906265)
        },
        8674: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.bnToHex = function(e, t = s, r) {
                if (!e) return "0x00";
                return (0, i.u8aToHex)((0, a.bnToU8a)(e, (0, o.objectSpread)({
                    isLe: !1,
                    isNegative: !1
                }, (0, n.isNumber)(t) ? {
                    bitLength: t,
                    isLe: r
                } : t)))
            };
            var n = r(6461),
                o = r(5693),
                i = r(5916),
                a = r(7122);
            const s = {
                bitLength: -1,
                isLe: !1,
                isNegative: !1
            }
        },
        8817: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.BitVec = void 0;
            var n = r(5463),
                o = r(5841);

            function i(e) {
                if (Array.isArray(e) || (0, n.isString)(e)) {
                    const t = (0, n.u8aToU8a)(e);
                    return [t.length / 8, t]
                }
                return function(e) {
                    if (!e || !e.length) return [0, new Uint8Array];
                    const [t, r] = (0, n.compactFromU8a)(e), o = t + Math.ceil(r.toNumber() / 8);
                    return (0, n.assert)(o <= e.length, () => `BitVec: required length less than remainder, expected at least ${o}, found ${e.length}`), [r.toNumber(), e.subarray(t, o)]
                }(e)
            }
            class BitVec extends o.Raw {
                constructor(e, t) {
                    const [r, n] = i(t);
                    super(e, n), this._decodedLength = void 0, this._decodedLength = r
                }
                get encodedLength() {
                    return this.length + (0, n.compactToU8a)(this._decodedLength).length
                }
                toHuman() {
                    return "0b" + [...this.toU8a(!0)].map(e => ("00000000" + e.toString(2)).slice(-8)).join("_")
                }
                toRawType() {
                    return "BitVec"
                }
                toU8a(e) {
                    const t = super.toU8a();
                    return e ? t : (0, n.u8aConcat)((0, n.compactToU8a)(this._decodedLength), t)
                }
            }
            t.BitVec = BitVec
        },
        8818: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.Data = void 0;
            var n = r(5463),
                o = r(5780);

            function i(e, t) {
                return t ? (0, n.isU8a)(t) || (0, n.isString)(t) ? function(e, t) {
                    const r = t[0];
                    if (!r) return [void 0, void 0];
                    if (r >= 1 && r <= 33) {
                        const n = r - 1,
                            o = t.subarray(1, n + 1);
                        return [e.createType("Raw", o), 1]
                    }
                    if (r >= 34 && r <= 37) return [t.subarray(1, 33), r - 32];
                    throw new Error("Unable to decode Data, invalid indicator byte " + r)
                }(e, (0, n.u8aToU8a)(t)) : [t, void 0] : [void 0, void 0]
            }
            class Data extends o.Enum {
                constructor(e, t) {
                    super(e, {
                        None: "Null",
                        Raw: "Bytes",
                        BlakeTwo256: "H256",
                        Sha256: "H256",
                        Keccak256: "H256",
                        ShaThree256: "H256"
                    }, ...i(e, t)), (0, n.assert)(!this.isRaw || this.asRaw.length <= 32, "Data.Raw values are limited to a maximum length of 32 bytes")
                }
                get asBlakeTwo256() {
                    return this.value
                }
                get asKeccak256() {
                    return this.value
                }
                get asRaw() {
                    return this.value
                }
                get asSha256() {
                    return this.value
                }
                get asShaThree256() {
                    return this.value
                }
                get isBlakeTwo256() {
                    return 2 === this.index
                }
                get isKeccak256() {
                    return 4 === this.index
                }
                get isNone() {
                    return 0 === this.index
                }
                get isRaw() {
                    return 1 === this.index
                }
                get isSha256() {
                    return 3 === this.index
                }
                get isShaThree256() {
                    return 5 === this.index
                }
                get encodedLength() {
                    return this.toU8a().length
                }
                toU8a() {
                    if (0 === this.index) return new Uint8Array(1);
                    if (1 === this.index) {
                        const e = this.value.toU8a(!0),
                            t = Math.min(e.length, 32),
                            r = new Uint8Array(t + 1);
                        return r.set([t + 1], 0), r.set(e.subarray(0, t), 1), r
                    }
                    const e = new Uint8Array(33);
                    return e.set([this.index + 32], 0), e.set(this.value.toU8a(), 1), e
                }
            }
            t.Data = Data
        },
        8819: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.i8 = void 0;
            var n = r(5840);
            class i8 extends(n.Int.with(8)) {
                constructor(...e) {
                    super(...e), this.__IntType = "i8"
                }
            }
            t.i8 = i8
        },
        8820: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.i16 = void 0;
            var n = r(5840);
            class i16 extends(n.Int.with(16)) {
                constructor(...e) {
                    super(...e), this.__IntType = "i16"
                }
            }
            t.i16 = i16
        },
        8821: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.i32 = void 0;
            var n = r(5840);
            class i32 extends(n.Int.with(32)) {
                constructor(...e) {
                    super(...e), this.__IntType = "i32"
                }
            }
            t.i32 = i32
        },
        8822: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.i64 = void 0;
            var n = r(5840);
            class i64 extends(n.Int.with(64)) {
                constructor(...e) {
                    super(...e), this.__IntType = "i64"
                }
            }
            t.i64 = i64
        },
        8823: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.i128 = void 0;
            var n = r(5840);
            class i128 extends(n.Int.with(128)) {
                constructor(...e) {
                    super(...e), this.__IntType = "i128"
                }
            }
            t.i128 = i128
        },
        8824: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.i256 = void 0;
            var n = r(5840);
            class i256 extends(n.Int.with(256)) {
                constructor(...e) {
                    super(...e), this.__IntType = "i256"
                }
            }
            t.i256 = i256
        },
        8825: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.getSiName = function(e, t) {
                const r = e.getTypeDef(t);
                return r.lookupName || r.type
            }
        },
        8826: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.getUniqTypes = function(e, t, r) {
                return (0, o.validateTypes)(e, r, (0, n.flattenUniq)(function({
                    lookup: e,
                    pallets: t
                }) {
                    return t.reduce((t, {
                        calls: r,
                        constants: n,
                        events: o,
                        storage: s
                    }) => (t.push([i(e, n)]), r.isSome && t.push(a(e, r.unwrap().type)), o.isSome && t.push(a(e, o.unwrap().type)), s.isSome && t.push(s.unwrap().items.map(({
                        type: t
                    }) => {
                        if (t.isPlain) return [e.getTypeDef(t.asPlain).type];
                        const {
                            hashers: r,
                            key: n,
                            value: o
                        } = t.asMap;
                        return 1 === r.length ? [e.getTypeDef(o).type, e.getTypeDef(n).type] : [e.getTypeDef(o).type, ...e.getSiType(n).def.asTuple.map(t => e.getTypeDef(t).type)]
                    })), t), [])
                }(t)))
            };
            var n = r(6472),
                o = r(7142);

            function i(e, t) {
                return t.map(({
                    type: t
                }) => e.getTypeDef(t).type)
            }

            function a(e, t) {
                return e.getSiType(t).def.asVariant.variants.map(({
                    fields: t
                }) => i(e, t))
            }
        },
        8827: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.extractTypes = i;
            var n = r(6173),
                o = r(5919);

            function i(e) {
                return e.map(e => {
                    const t = (0, n.getTypeDef)(e);
                    switch (t.info) {
                        case o.TypeDefInfo.Plain:
                            return t.lookupName || t.type;
                        case o.TypeDefInfo.BTreeSet:
                        case o.TypeDefInfo.Compact:
                        case o.TypeDefInfo.Option:
                        case o.TypeDefInfo.Vec:
                        case o.TypeDefInfo.VecFixed:
                        case o.TypeDefInfo.WrapperOpaque:
                            return function({
                                lookupName: e,
                                type: t
                            }) {
                                return i([e || t])
                            }(t.sub);
                        case o.TypeDefInfo.BTreeMap:
                        case o.TypeDefInfo.Enum:
                        case o.TypeDefInfo.HashMap:
                        case o.TypeDefInfo.Result:
                        case o.TypeDefInfo.Set:
                        case o.TypeDefInfo.Struct:
                        case o.TypeDefInfo.Tuple:
                            return function(e) {
                                return i(e.map(({
                                    lookupName: e,
                                    type: t
                                }) => e || t))
                            }(t.sub);
                        default:
                            throw new Error(`Unhandled: Unable to create and validate type from ${e} (info=${o.TypeDefInfo[t.info]})`)
                    }
                })
            }
        },
        8828: function(e, t, r) {
            "use strict";
            var n = r(2);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.toCallsOnly = function(e, {
                extrinsic: t,
                lookup: r,
                pallets: n
            }) {
                return e.createType("MetadataLatest", {
                    extrinsic: t,
                    lookup: {
                        types: r.types.map(({
                            id: t,
                            type: r
                        }) => e.createType("PortableType", {
                            id: t,
                            type: a(a({}, r), {}, {
                                docs: s(r.docs)
                            })
                        }))
                    },
                    pallets: n.map(({
                        calls: t,
                        index: r,
                        name: n
                    }) => ({
                        calls: e.createType("Option<PalletCallMetadataLatest>", t.unwrapOr(null)),
                        index: r,
                        name: n
                    }))
                }).toJSON()
            };
            var o = n(r(5461));

            function i(e, t) {
                var r = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(e);
                    t && (n = n.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), r.push.apply(r, n)
                }
                return r
            }

            function a(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? i(Object(r), !0).forEach((function(t) {
                        (0, o.default)(e, t, r[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : i(Object(r)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                    }))
                }
                return e
            }

            function s(e) {
                const t = e.map(e => e.toString().trim()),
                    r = t.findIndex(e => !e.length);
                return -1 === r ? t : t.slice(0, r)
            }
        },
        8829: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.Type = void 0;
            var n = r(7143),
                o = r(7145);
            class Type extends o.Text {
                constructor(e, t = "") {
                    super(e, t), this.setOverride((0, n.sanitize)(this.toString()))
                }
                toRawType() {
                    return "Type"
                }
            }
            t.Type = Type
        },
        8830: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.u8 = void 0;
            var n = r(5842);
            class u8 extends(n.UInt.with(8)) {
                constructor(...e) {
                    super(...e), this.__UIntType = "u8"
                }
            }
            t.u8 = u8
        },
        8831: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.u16 = void 0;
            var n = r(5842);
            class u16 extends(n.UInt.with(16)) {
                constructor(...e) {
                    super(...e), this.__UIntType = "u16"
                }
            }
            t.u16 = u16
        },
        8832: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.u128 = void 0;
            var n = r(5842);
            class u128 extends(n.UInt.with(128)) {
                constructor(...e) {
                    super(...e), this.__UIntType = "u128"
                }
            }
            t.u128 = u128
        },
        8833: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.u256 = void 0;
            var n = r(5842);
            class u256 extends(n.UInt.with(256)) {
                constructor(...e) {
                    super(...e), this.__UIntType = "u256"
                }
            }
            t.u256 = u256
        },
        8834: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.usize = void 0;
            var n = r(6473);
            class usize extends n.u32 {
                constructor(e, t) {
                    throw super(e, t), new Error("The `usize` type should not be used. Since it is platform-specific, it creates incompatibilities between native (generally u64) and WASM (always u32) code. Use one of the `u32` or `u64` types explicitly.")
                }
            }
            t.usize = usize
        },
        8862: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), r(8863);
            var n = r(5919);
            Object.keys(n).forEach((function(e) {
                "default" !== e && "__esModule" !== e && (e in t && t[e] === n[e] || Object.defineProperty(t, e, {
                    enumerable: !0,
                    get: function() {
                        return n[e]
                    }
                }))
            }));
            var o = r(8870);
            Object.keys(o).forEach((function(e) {
                "default" !== e && "__esModule" !== e && (e in t && t[e] === o[e] || Object.defineProperty(t, e, {
                    enumerable: !0,
                    get: function() {
                        return o[e]
                    }
                }))
            }));
            var i = r(8871);
            Object.keys(i).forEach((function(e) {
                "default" !== e && "__esModule" !== e && (e in t && t[e] === i[e] || Object.defineProperty(t, e, {
                    enumerable: !0,
                    get: function() {
                        return i[e]
                    }
                }))
            }));
            var a = r(8872);
            Object.keys(a).forEach((function(e) {
                "default" !== e && "__esModule" !== e && (e in t && t[e] === a[e] || Object.defineProperty(t, e, {
                    enumerable: !0,
                    get: function() {
                        return a[e]
                    }
                }))
            }));
            var s = r(8873);
            Object.keys(s).forEach((function(e) {
                "default" !== e && "__esModule" !== e && (e in t && t[e] === s[e] || Object.defineProperty(t, e, {
                    enumerable: !0,
                    get: function() {
                        return s[e]
                    }
                }))
            }));
            var u = r(8874);
            Object.keys(u).forEach((function(e) {
                "default" !== e && "__esModule" !== e && (e in t && t[e] === u[e] || Object.defineProperty(t, e, {
                    enumerable: !0,
                    get: function() {
                        return u[e]
                    }
                }))
            }));
            var c = r(8875);
            Object.keys(c).forEach((function(e) {
                "default" !== e && "__esModule" !== e && (e in t && t[e] === c[e] || Object.defineProperty(t, e, {
                    enumerable: !0,
                    get: function() {
                        return c[e]
                    }
                }))
            }));
            var l = r(8876);
            Object.keys(l).forEach((function(e) {
                "default" !== e && "__esModule" !== e && (e in t && t[e] === l[e] || Object.defineProperty(t, e, {
                    enumerable: !0,
                    get: function() {
                        return l[e]
                    }
                }))
            }));
            var f = r(8877);
            Object.keys(f).forEach((function(e) {
                "default" !== e && "__esModule" !== e && (e in t && t[e] === f[e] || Object.defineProperty(t, e, {
                    enumerable: !0,
                    get: function() {
                        return f[e]
                    }
                }))
            }))
        },
        8870: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            })
        },
        8871: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            })
        },
        8872: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            })
        },
        8873: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            })
        },
        8874: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            })
        },
        8875: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            })
        },
        8876: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            })
        },
        8877: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            })
        },
        8880: function(e, t, r) {
            "use strict";
            var n = r(2);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.MetadataVersioned = void 0;
            var o = n(r(5471)),
                i = n(r(5472)),
                a = r(5463),
                s = r(6170),
                u = r(8881),
                c = r(8882),
                l = r(8883),
                f = r(8884),
                d = r(8885),
                p = r(8886),
                y = r(8887),
                b = r(6471);
            var g = (0, i.default)("converted"),
                h = (0, i.default)("assertVersion"),
                m = (0, i.default)("getVersion"),
                O = (0, i.default)("metadata");
            class MetadataVersioned extends s.Struct {
                constructor(e, t) {
                    super(e, {
                        magicNumber: y.MagicNumber,
                        metadata: "MetadataAll"
                    }, t), Object.defineProperty(this, g, {
                        writable: !0,
                        value: new Map
                    }), Object.defineProperty(this, h, {
                        writable: !0,
                        value: e => ((0, a.assert)(this.version <= e, () => `Cannot convert metadata from version ${this.version} to ${e}`), this.version === e)
                    }), Object.defineProperty(this, m, {
                        writable: !0,
                        value: (e, t) => {
                            const r = "asV" + e,
                                n = "latest" === e ? "asV14" : "asV" + (e - 1);
                            return "latest" !== e && (0, o.default)(this, h)[h](e) ? (0, o.default)(this, O)[O]()[r] : ((0, o.default)(this, g)[g].has(e) || (0, o.default)(this, g)[g].set(e, t(this.registry, this[n], this.version)), (0, o.default)(this, g)[g].get(e))
                        }
                    }), Object.defineProperty(this, O, {
                        writable: !0,
                        value: () => this.get("metadata")
                    })
                }
                get asCallsOnly() {
                    return new MetadataVersioned(this.registry, {
                        magicNumber: this.magicNumber,
                        metadata: this.registry.createType("MetadataAll", (0, b.toCallsOnly)(this.registry, this.asLatest), 14)
                    })
                }
                get asV9() {
                    return (0, o.default)(this, h)[h](9), (0, o.default)(this, O)[O]().asV9
                }
                get asV10() {
                    return (0, o.default)(this, m)[m](10, u.toV10)
                }
                get asV11() {
                    return (0, o.default)(this, m)[m](11, c.toV11)
                }
                get asV12() {
                    return (0, o.default)(this, m)[m](12, l.toV12)
                }
                get asV13() {
                    return (0, o.default)(this, m)[m](13, f.toV13)
                }
                get asV14() {
                    return (0, o.default)(this, m)[m](14, d.toV14)
                }
                get asLatest() {
                    return (0, o.default)(this, m)[m]("latest", p.toLatest)
                }
                get magicNumber() {
                    return this.get("magicNumber")
                }
                get version() {
                    return (0, o.default)(this, O)[O]().index
                }
                getUniqTypes(e) {
                    return (0, b.getUniqTypes)(this.registry, this.asLatest, e)
                }
                toJSON() {
                    return this.asLatest, super.toJSON()
                }
            }
            t.MetadataVersioned = MetadataVersioned
        },
        8881: function(e, t, r) {
            "use strict";
            var n = r(2);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.toV10 = function(e, {
                modules: t
            }) {
                return e.createType("MetadataV10", {
                    modules: t.map(t => function(e, t) {
                        const r = t.storage.unwrapOr(null);
                        return e.createType("ModuleMetadataV10", a(a({}, t), {}, {
                            storage: r ? a(a({}, r), {}, {
                                items: r.items.map(t => a(a({}, t), {}, {
                                    type: e.createType("StorageEntryTypeV10", ...u(e, t.type))
                                }))
                            }) : null
                        }))
                    }(e, t))
                })
            };
            var o = n(r(5461));

            function i(e, t) {
                var r = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(e);
                    t && (n = n.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), r.push.apply(r, n)
                }
                return r
            }

            function a(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? i(Object(r), !0).forEach((function(t) {
                        (0, o.default)(e, t, r[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : i(Object(r)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                    }))
                }
                return e
            }

            function s(e, t) {
                return t.toNumber() >= 2 ? e.createType("StorageHasherV10", t.toNumber() + 1) : e.createType("StorageHasherV10", t)
            }

            function u(e, t) {
                return t.isMap ? [a(a({}, t.asMap), {}, {
                    hasher: s(e, t.asMap.hasher)
                }), 1] : t.isDoubleMap ? [a(a({}, t.asDoubleMap), {}, {
                    hasher: s(e, t.asDoubleMap.hasher),
                    key2Hasher: s(e, t.asDoubleMap.key2Hasher)
                }), 2] : [t.asPlain, 0]
            }
        },
        8882: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.toV11 = function(e, {
                modules: t
            }) {
                return e.createType("MetadataV11", {
                    extrinsic: {
                        signedExtensions: [],
                        version: 0
                    },
                    modules: t
                })
            }
        },
        8883: function(e, t, r) {
            "use strict";
            var n = r(2);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.toV12 = function(e, {
                extrinsic: t,
                modules: r
            }) {
                return e.createType("MetadataV12", {
                    extrinsic: t,
                    modules: r.map(t => e.createType("ModuleMetadataV12", a(a({}, t), {}, {
                        index: 255
                    })))
                })
            };
            var o = n(r(5461));

            function i(e, t) {
                var r = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(e);
                    t && (n = n.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), r.push.apply(r, n)
                }
                return r
            }

            function a(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? i(Object(r), !0).forEach((function(t) {
                        (0, o.default)(e, t, r[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : i(Object(r)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                    }))
                }
                return e
            }
        },
        8884: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.toV13 = function(e, t) {
                return e.createType("MetadataV13", t)
            }
        },
        8885: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.toV14 = function(e, t, r) {
                const i = [];
                a(i, "Null"),
                    function(e, t, r) {
                        e.register({
                            OriginCaller: {
                                _enum: t.map((e, t) => [e.name.toString(), r >= 12 ? e.index.toNumber() : t]).sort((e, t) => e[1] - t[1]).reduce((e, [t, r]) => {
                                    for (let t = Object.keys(e).length; t < r; t++) e["Empty" + t] = "Null";
                                    return e[t] = n.knownOrigins[t] || "Null", e
                                }, {})
                            }
                        })
                    }(e, t.modules, r);
                const s = function(e, {
                        signedExtensions: t,
                        version: r
                    }) {
                        return e.createType("ExtrinsicMetadataV14", {
                            signedExtensions: t.map(e => ({
                                identifier: e,
                                type: 0
                            })),
                            type: 0,
                            version: r
                        })
                    }(e, t.extrinsic),
                    u = t.modules.map(t => function(e, t, r, {
                        calls: i,
                        constants: a,
                        errors: s,
                        events: u,
                        storage: c
                    }) {
                        const y = (0, n.getModuleTypes)(t, (0, o.stringCamelCase)(r.name));
                        return t.createType("PalletMetadataV14", {
                            calls: i && l(e, t, r.name, i, y),
                            constants: f(e, t, a, y),
                            errors: s && d(e, t, r.name, s, y),
                            events: u && p(e, t, r.name, u, y),
                            index: r.index,
                            name: r.name,
                            storage: c && b(e, t, c, y)
                        })
                    }(i, e, t, {
                        calls: t.calls.unwrapOr(null),
                        constants: t.constants,
                        errors: t.errors.length ? t.errors : null,
                        events: t.events.unwrapOr(null),
                        storage: t.storage.unwrapOr(null)
                    }));
                return e.createType("MetadataV14", {
                    extrinsic: s,
                    lookup: {
                        types: i.map((t, r) => e.createType("PortableType", {
                            id: r,
                            type: t
                        }))
                    },
                    pallets: u
                })
            };
            var n = r(6428),
                o = r(5463);
            const i = [
                ["<", ">"],
                ["<", ","],
                [",", ">"],
                ["(", ")"],
                ["(", ","],
                [",", ","],
                [",", ")"]
            ];

            function a(e, t) {
                const r = t.toString(),
                    n = e.findIndex(({
                        def: e
                    }) => e.HistoricMetaCompat === r);
                return -1 !== n ? n : e.push({
                    def: {
                        HistoricMetaCompat: r
                    }
                }) - 1
            }

            function s(e, t) {
                return e.push({
                    def: {
                        Tuple: t
                    }
                }) - 1
            }

            function u(e, t, r, n) {
                return r.push({
                    def: {
                        Variant: {
                            variants: n
                        }
                    },
                    path: ["pallet_" + e.toString(), "pallet", t]
                }) - 1
            }

            function c(e, t) {
                t.forEach(t => {
                    const r = Object.keys(e).find(e => t.eq(e));
                    if (r) t.setOverride(e[r]);
                    else {
                        const r = t.toString(),
                            n = Object.entries(e).reduce((e, [t, r]) => i.reduce((e, [n, o]) => e.replace(`${n}${t}${o}`, `${n}${r}${o}`), e), r);
                        r !== n && t.setOverride(n)
                    }
                })
            }

            function l(e, t, r, n, o) {
                const i = n.map(({
                    args: r,
                    docs: n,
                    name: i
                }, s) => (c(o, r.map(({
                    type: e
                }) => e)), t.createType("SiVariant", {
                    docs: n,
                    fields: r.map(({
                        name: r,
                        type: n
                    }) => t.createType("SiField", {
                        name: r,
                        type: a(e, n)
                    })),
                    index: s,
                    name: i
                })));
                return t.createType("PalletCallMetadataV14", {
                    type: u(r, "Call", e, i)
                })
            }

            function f(e, t, r, n) {
                return r.map(({
                    docs: r,
                    name: o,
                    type: i,
                    value: s
                }) => (c(n, [i]), t.createType("PalletConstantMetadataV14", {
                    docs: r,
                    name: o,
                    type: a(e, i),
                    value: s
                })))
            }

            function d(e, t, r, n, o) {
                const i = n.map(({
                    docs: e,
                    name: r
                }, n) => t.createType("SiVariant", {
                    docs: e,
                    fields: [],
                    index: n,
                    name: r
                }));
                return t.createType("PalletErrorMetadataV14", {
                    type: u(r, "Error", e, i)
                })
            }

            function p(e, t, r, n, o) {
                const i = n.map(({
                    args: r,
                    docs: n,
                    name: i
                }, s) => (c(o, r), t.createType("SiVariant", {
                    docs: n,
                    fields: r.map(r => t.createType("SiField", {
                        type: a(e, r)
                    })),
                    index: s,
                    name: i
                })));
                return t.createType("PalletEventMetadataV14", {
                    type: u(r, "Event", e, i)
                })
            }

            function y(e, t, r, {
                hashers: n,
                keys: o,
                value: i
            }) {
                return c(r, [i, ...Array.isArray(o) ? o : [o]]), t.createType("StorageEntryTypeV14", {
                    Map: {
                        hashers: n,
                        key: 1 === n.length ? a(e, o[0]) : s(e, o.map(t => a(e, t))),
                        value: a(e, i)
                    }
                })
            }

            function b(e, t, {
                items: r,
                prefix: n
            }, o) {
                return t.createType("PalletStorageMetadataV14", {
                    items: r.map(({
                        docs: r,
                        fallback: n,
                        modifier: i,
                        name: s,
                        type: u
                    }) => {
                        let l;
                        if (u.isPlain) {
                            const r = u.asPlain;
                            c(o, [r]), l = t.createType("StorageEntryTypeV14", {
                                Plain: a(e, r)
                            })
                        } else if (u.isMap) {
                            const r = u.asMap;
                            l = y(e, t, o, {
                                hashers: [r.hasher],
                                keys: [r.key],
                                value: r.value
                            })
                        } else if (u.isDoubleMap) {
                            const r = u.asDoubleMap;
                            l = y(e, t, o, {
                                hashers: [r.hasher, r.key2Hasher],
                                keys: [r.key1, r.key2],
                                value: r.value
                            })
                        } else {
                            const r = u.asNMap;
                            l = y(e, t, o, {
                                hashers: r.hashers,
                                keys: r.keyVec,
                                value: r.value
                            })
                        }
                        return t.createType("StorageEntryMetadataV14", {
                            docs: r,
                            fallback: n,
                            modifier: i,
                            name: s,
                            type: l
                        })
                    }),
                    prefix: n
                })
            }
        },
        8886: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.toLatest = function(e, t, r) {
                return t
            }
        },
        8887: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.MagicNumber = t.MAGIC_NUMBER = void 0;
            var n = r(5463),
                o = r(6470);
            t.MAGIC_NUMBER = 1635018093;
            class MagicNumber extends o.U32 {
                constructor(e, t) {
                    super(e, t), this.isEmpty || (0, n.assert)(this.eq(1635018093), () => `MagicNumber mismatch: expected ${e.createType("u32",1635018093).toHex()}, found ${this.toHex()}`)
                }
            }
            t.MagicNumber = MagicNumber
        },
        8888: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.decorateConstants = function(e, {
                pallets: t
            }, r) {
                return t.reduce((t, {
                    constants: r,
                    name: o
                }) => (r.isEmpty || (t[(0, n.stringCamelCase)(o)] = r.reduce((t, r) => {
                    const o = e.createTypeUnsafe(e.createLookupType(r.type), [(0, n.hexToU8a)(r.value.toHex())]);
                    return o.meta = r, t[(0, n.stringCamelCase)(r.name)] = o, t
                }, {})), t), {})
            };
            var n = r(5463)
        },
        8889: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.decorateEvents = function(e, {
                lookup: t,
                pallets: r
            }, i) {
                return r.filter(({
                    events: e
                }) => e.isSome).reduce((r, {
                    events: a,
                    index: s,
                    name: u
                }, c) => {
                    const l = i >= 12 ? s.toNumber() : c;
                    return r[(0, n.stringCamelCase)(u)] = t.getSiType(a.unwrap().type).def.asVariant.variants.reduce((r, n) => (r[n.name.toString()] = {
                        is: e => e.index[0] === l && n.index.eq(e.index[1]),
                        meta: e.createType("EventMetadataLatest", (0, o.variantToMeta)(t, n))
                    }, r), {}), r
                }, {})
            };
            var n = r(5463),
                o = r(7155)
        },
        8890: function(e, t, r) {
            "use strict";
            var n = r(2);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.decorateExtrinsics = function(e, {
                lookup: t,
                pallets: r
            }, n) {
                return r.filter(({
                    calls: e
                }) => e.isSome).reduce((r, {
                    calls: o,
                    index: u,
                    name: l
                }, f) => {
                    const d = (0, i.stringCamelCase)(l),
                        p = n >= 12 ? u.toNumber() : f;
                    return r[d] = t.getSiType(o.unwrap().type).def.asVariant.variants.reduce((r, n) => {
                        const o = e.createType("FunctionMetadataLatest", c(c({}, n), {}, {
                            args: n.fields.map(({
                                name: e,
                                type: r
                            }, n) => ({
                                name: (0, i.stringCamelCase)(e.unwrapOr("param" + n)),
                                type: (0, a.getSiName)(t, r)
                            }))
                        }));
                        return r[(0, i.stringCamelCase)(o.name)] = (0, s.createUnchecked)(e, d, new Uint8Array([p, o.index.toNumber()]), o), r
                    }, {}), r
                }, {})
            };
            var o = n(r(5461)),
                i = r(5463),
                a = r(6471),
                s = r(8891);

            function u(e, t) {
                var r = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(e);
                    t && (n = n.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), r.push.apply(r, n)
                }
                return r
            }

            function c(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? u(Object(r), !0).forEach((function(t) {
                        (0, o.default)(e, t, r[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : u(Object(r)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                    }))
                }
                return e
            }
        },
        8891: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.createUnchecked = function(e, t, r, o) {
                const i = o.fields,
                    a = (0, n.stringCamelCase)(o.name),
                    s = (...s) => ((0, n.assert)(i.length === s.length, () => `Extrinsic ${t}.${a} expects ${i.length} arguments, got ${s.length}.`), e.createType("Call", {
                        args: s,
                        callIndex: r
                    }, o));
                return s.is = e => function(e, t) {
                    return e.callIndex[0] === t[0] && e.callIndex[1] === t[1]
                }(e, r), s.callIndex = r, s.meta = o, s.method = a, s.section = t, s.toJSON = () => o.toJSON(), s
            };
            var n = r(5463)
        },
        8892: function(e, t, r) {
            "use strict";
            var n = r(2);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.decorateStorage = function(e, {
                pallets: t
            }, r) {
                return t.reduce((t, r) => {
                    if (r.storage.isNone) return t;
                    const {
                        name: n
                    } = r, o = (0, i.stringCamelCase)(n), s = r.storage.unwrap(), u = s.prefix.toString();
                    return t[o] = s.items.reduce((t, r) => {
                        const n = r.name.toString();
                        return t[(0, i.stringLowerFirst)(n)] = (0, a.createFunction)(e, {
                            meta: r,
                            method: n,
                            prefix: u,
                            section: o
                        }, {}), t
                    }, {}), t
                }, function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var r = null != arguments[t] ? arguments[t] : {};
                        t % 2 ? u(Object(r), !0).forEach((function(t) {
                            (0, o.default)(e, t, r[t])
                        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : u(Object(r)).forEach((function(t) {
                            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                        }))
                    }
                    return e
                }({}, (0, s.getStorage)(e)))
            };
            var o = n(r(5461)),
                i = r(5463),
                a = r(7156),
                s = r(8894);

            function u(e, t) {
                var r = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(e);
                    t && (n = n.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), r.push.apply(r, n)
                }
                return r
            }
        },
        8893: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.getHasher = function(e) {
                return a[e.type] || i
            };
            var n = r(5463),
                o = r(5496);
            const i = e => (0, o.xxhashAsU8a)(e, 128),
                a = {
                    Blake2_128: e => (0, o.blake2AsU8a)(e, 128),
                    Blake2_128Concat: e => (0, n.u8aConcat)((0, o.blake2AsU8a)(e, 128), (0, n.u8aToU8a)(e)),
                    Blake2_256: e => (0, o.blake2AsU8a)(e, 256),
                    Identity: e => (0, n.u8aToU8a)(e),
                    Twox128: e => (0, o.xxhashAsU8a)(e, 128),
                    Twox256: e => (0, o.xxhashAsU8a)(e, 256),
                    Twox64Concat: e => (0, n.u8aConcat)((0, o.xxhashAsU8a)(e, 64), (0, n.u8aToU8a)(e))
                }
        },
        8894: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.getStorage = function(e) {
                return {
                    substrate: Object.entries(n.substrate).reduce((t, [r, n]) => (t[r] = n(e), t), {})
                }
            };
            var n = r(8895)
        },
        8895: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.substrate = void 0;
            var n = r(7156);

            function o(e, t) {
                const r = t.toLowerCase();
                return e.lookup.types.find(e => e.type.def.isPrimitive && e.type.def.asPrimitive.toString().toLowerCase() === r || e.type.def.isHistoricMetaCompat && e.type.def.asHistoricMetaCompat.toString().toLowerCase() === r)
            }

            function i(e, t) {
                let r = o(e, t);
                if (!r && "Bytes" === t) {
                    const n = o(e, "u8");
                    n && (r = e.lookup.types.find(e => e.type.def.isSequence && e.type.def.asSequence.type.eq(n.id) || e.type.def.isHistoricMetaCompat && e.type.def.asHistoricMetaCompat.eq(t)))
                }
                return r || console.warn(`Unable to map ${t} to a lookup index`), r
            }

            function a(e, t, {
                docs: r,
                type: o
            }) {
                return a => {
                    var s;
                    return (0, n.createFunction)(a, {
                        meta: a.createType("StorageEntryMetadataLatest", {
                            docs: a.createType("Vec<Text>", [r]),
                            modifier: a.createType("StorageEntryModifierLatest", "Required"),
                            name: a.createType("Text", e),
                            toJSON: () => t,
                            type: a.createType("StorageEntryTypeLatest", {
                                Plain: (null === (s = i(a, o)) || void 0 === s ? void 0 : s.id) || 0
                            })
                        }),
                        method: e,
                        prefix: "Substrate",
                        section: "substrate"
                    }, {
                        key: t,
                        skipHashing: !0
                    })
                }
            }
            const s = {
                changesTrieConfig: a("changesTrieConfig", ":changes_trie", {
                    docs: " Changes trie configuration is stored under this key.",
                    type: "u32"
                }),
                childStorageKeyPrefix: a("childStorageKeyPrefix", ":child_storage:", {
                    docs: " Prefix of child storage keys.",
                    type: "u32"
                }),
                code: a("code", ":code", {
                    docs: " Wasm code of the runtime.",
                    type: "Bytes"
                }),
                extrinsicIndex: a("extrinsicIndex", ":extrinsic_index", {
                    docs: " Current extrinsic index (u32) is stored under this key.",
                    type: "u32"
                }),
                heapPages: a("heapPages", ":heappages", {
                    docs: " Number of wasm linear memory pages required for execution of the runtime.",
                    type: "u64"
                })
            };
            t.substrate = s
        },
        8896: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), Object.defineProperty(t, "Metadata", {
                enumerable: !0,
                get: function() {
                    return n.Metadata
                }
            }), Object.defineProperty(t, "decorateConstants", {
                enumerable: !0,
                get: function() {
                    return o.decorateConstants
                }
            }), Object.defineProperty(t, "decorateExtrinsics", {
                enumerable: !0,
                get: function() {
                    return o.decorateExtrinsics
                }
            }), Object.defineProperty(t, "decorateStorage", {
                enumerable: !0,
                get: function() {
                    return o.decorateStorage
                }
            }), Object.defineProperty(t, "expandMetadata", {
                enumerable: !0,
                get: function() {
                    return o.expandMetadata
                }
            });
            var n = r(6476),
                o = r(7154)
        }
    }
]);