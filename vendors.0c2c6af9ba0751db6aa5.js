(window.webpackJsonp = window.webpackJsonp || []).push([
    [15], {
        6141: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.packageInfo = void 0;
            t.packageInfo = {
                name: "@polkadot/types",
                version: "6.3.1"
            }
        },
        6162: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.Null = void 0;
            var r = n(5464);
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
                    return e instanceof Null || (0, r.isNull)(e)
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
        6421: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), Object.defineProperty(t, "BitVec", {
                enumerable: !0,
                get: function() {
                    return r.BitVec
                }
            }), Object.defineProperty(t, "Bool", {
                enumerable: !0,
                get: function() {
                    return i.bool
                }
            }), Object.defineProperty(t, "Bytes", {
                enumerable: !0,
                get: function() {
                    return s.Bytes
                }
            }), Object.defineProperty(t, "Data", {
                enumerable: !0,
                get: function() {
                    return o.Data
                }
            }), Object.defineProperty(t, "I128", {
                enumerable: !0,
                get: function() {
                    return d.i128
                }
            }), Object.defineProperty(t, "I16", {
                enumerable: !0,
                get: function() {
                    return u.i16
                }
            }), Object.defineProperty(t, "I256", {
                enumerable: !0,
                get: function() {
                    return p.i256
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
                    return a.i8
                }
            }), Object.defineProperty(t, "Null", {
                enumerable: !0,
                get: function() {
                    return f.Null
                }
            }), Object.defineProperty(t, "StorageKey", {
                enumerable: !0,
                get: function() {
                    return y.StorageKey
                }
            }), Object.defineProperty(t, "Text", {
                enumerable: !0,
                get: function() {
                    return m.Text
                }
            }), Object.defineProperty(t, "Type", {
                enumerable: !0,
                get: function() {
                    return g.Type
                }
            }), Object.defineProperty(t, "U128", {
                enumerable: !0,
                get: function() {
                    return v.u128
                }
            }), Object.defineProperty(t, "U16", {
                enumerable: !0,
                get: function() {
                    return b.u16
                }
            }), Object.defineProperty(t, "U256", {
                enumerable: !0,
                get: function() {
                    return M.u256
                }
            }), Object.defineProperty(t, "U32", {
                enumerable: !0,
                get: function() {
                    return V.u32
                }
            }), Object.defineProperty(t, "U64", {
                enumerable: !0,
                get: function() {
                    return O.u64
                }
            }), Object.defineProperty(t, "U8", {
                enumerable: !0,
                get: function() {
                    return h.u8
                }
            }), Object.defineProperty(t, "USize", {
                enumerable: !0,
                get: function() {
                    return T.usize
                }
            }), Object.defineProperty(t, "bool", {
                enumerable: !0,
                get: function() {
                    return i.bool
                }
            }), Object.defineProperty(t, "i128", {
                enumerable: !0,
                get: function() {
                    return d.i128
                }
            }), Object.defineProperty(t, "i16", {
                enumerable: !0,
                get: function() {
                    return u.i16
                }
            }), Object.defineProperty(t, "i256", {
                enumerable: !0,
                get: function() {
                    return p.i256
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
                    return a.i8
                }
            }), Object.defineProperty(t, "u128", {
                enumerable: !0,
                get: function() {
                    return v.u128
                }
            }), Object.defineProperty(t, "u16", {
                enumerable: !0,
                get: function() {
                    return b.u16
                }
            }), Object.defineProperty(t, "u256", {
                enumerable: !0,
                get: function() {
                    return M.u256
                }
            }), Object.defineProperty(t, "u32", {
                enumerable: !0,
                get: function() {
                    return V.u32
                }
            }), Object.defineProperty(t, "u64", {
                enumerable: !0,
                get: function() {
                    return O.u64
                }
            }), Object.defineProperty(t, "u8", {
                enumerable: !0,
                get: function() {
                    return h.u8
                }
            }), Object.defineProperty(t, "usize", {
                enumerable: !0,
                get: function() {
                    return T.usize
                }
            });
            var r = n(8463),
                i = n(7064),
                s = n(7065),
                o = n(8464),
                a = n(8465),
                u = n(8466),
                c = n(8467),
                l = n(8468),
                d = n(8469),
                p = n(8470),
                f = n(6162),
                y = n(7066),
                m = n(7070),
                g = n(8475),
                h = n(8476),
                b = n(8477),
                V = n(6424),
                O = n(7071),
                v = n(8478),
                M = n(8479),
                T = n(8480)
        },
        6422: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), Object.defineProperty(t, "flattenUniq", {
                enumerable: !0,
                get: function() {
                    return r.flattenUniq
                }
            }), Object.defineProperty(t, "getSiName", {
                enumerable: !0,
                get: function() {
                    return i.getSiName
                }
            }), Object.defineProperty(t, "getUniqTypes", {
                enumerable: !0,
                get: function() {
                    return s.getUniqTypes
                }
            }), Object.defineProperty(t, "toCallsOnly", {
                enumerable: !0,
                get: function() {
                    return o.toCallsOnly
                }
            }), Object.defineProperty(t, "validateTypes", {
                enumerable: !0,
                get: function() {
                    return a.validateTypes
                }
            });
            var r = n(6423),
                i = n(8471),
                s = n(8472),
                o = n(8474),
                a = n(7067)
        },
        6423: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.flattenUniq = function e(t, n = []) {
                return [...new Set(t.reduce((t, n) => Array.isArray(n) ? e(n, t) : (t.push(n), t), n))]
            }
        },
        6424: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.u32 = void 0;
            var r = n(5835);
            class u32 extends(r.UInt.with(32)) {
                constructor(...e) {
                    super(...e), this.__UIntType = "u32"
                }
            }
            t.u32 = u32
        },
        6427: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.Metadata = void 0;
            var r = n(5464),
                i = n(8526);
            const s = new Uint8Array([109, 101, 116, 97, 9]),
                o = new Uint8Array;

            function a(e, t) {
                if (!t || (0, r.isU8a)(t) || (0, r.isHex)(t)) {
                    const n = function e(t = o) {
                            if ((0, r.isHex)(t)) return e((0, r.u8aToU8a)(t));
                            if ((0, r.isU8a)(t)) return 0 === t.length ? s : t;
                            throw new Error("Invalid type passed to Metadata constructor")
                        }(t),
                        u = n[4];
                    try {
                        return new i.MetadataVersioned(e, n)
                    } catch (t) {
                        if (9 === u) return n[4] = 10, a(e, n);
                        throw t
                    }
                }
                return new i.MetadataVersioned(e, t)
            }
            class Metadata extends i.MetadataVersioned {
                constructor(e, t) {
                    super(e, a(e, t))
                }
            }
            t.Metadata = Metadata
        },
        7064: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.bool = void 0;
            var r = n(5464);
            class bool extends Boolean {
                constructor(e, t = !1) {
                    super(function(e) {
                        return e instanceof Boolean ? e.valueOf() : (0, r.isU8a)(e) ? 1 === e[0] : !!e
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
                    return (0, r.u8aToHex)(this.toU8a())
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
        7065: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.Bytes = void 0;
            var r = n(5464),
                i = n(5834);

            function s(e) {
                return Array.isArray(e) || (0, r.isString)(e) ? (0, r.u8aToU8a)(e) : e instanceof i.Raw || !(0, r.isU8a)(e) ? e : function(e) {
                    if (!e.length) return new Uint8Array;
                    const [t, n] = (0, r.compactFromU8a)(e), i = t + n.toNumber();
                    return (0, r.assert)(n.lten(10485760), () => `Bytes length ${n.toString()} exceeds 10485760`), (0, r.assert)(i <= e.length, () => `Bytes: required length less than remainder, expected at least ${i}, found ${e.length}`), e.subarray(t, i)
                }(e)
            }
            class Bytes extends i.Raw {
                constructor(e, t) {
                    super(e, s(t))
                }
                get encodedLength() {
                    return this.length + (0, r.compactToU8a)(this.length).length
                }
                toRawType() {
                    return "Bytes"
                }
                toU8a(e) {
                    return e ? super.toU8a(e) : (0, r.compactAddLength)(this)
                }
            }
            t.Bytes = Bytes
        },
        7066: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.StorageKey = void 0, t.unwrapStorageSi = a, t.unwrapStorageType = u;
            var r = n(5464),
                i = n(6422),
                s = n(7065);
            const o = {
                Blake2_128: [16, !1],
                Blake2_128Concat: [16, !0],
                Blake2_256: [32, !1],
                Identity: [0, !0],
                Twox128: [16, !1],
                Twox256: [32, !1],
                Twox64Concat: [8, !0]
            };

            function a(e) {
                return e.isPlain ? e.asPlain : e.asMap.value
            }

            function u(e, t, n) {
                const r = (0, i.getSiName)(e.lookup, a(t));
                return n ? `Option<${r}>` : r
            }

            function c(e, t, n) {
                if (!n || !n.type.isMap) return [];
                const {
                    hashers: r,
                    key: i
                } = n.type.asMap, s = 1 === r.length ? [i] : e.lookup.getSiType(i).def.asTuple;
                return function(e, t, n) {
                    let r = 32;
                    return n.reduce((n, [i, s]) => {
                        const [a, u] = o[i.type], c = u ? e.createType(e.createLookupType(s), t.subarray(r + a)) : e.createType("Raw", t.subarray(r, r + a));
                        return r += a + (u ? c.encodedLength : 0), n.push(c), n
                    }, [])
                }(e, t, r.map((e, t) => [e, s[t]]))
            }
            class StorageKey extends s.Bytes {
                constructor(e, t, n = {}) {
                    const {
                        key: i,
                        method: s,
                        section: o
                    } = function(e) {
                        if (e instanceof StorageKey) return {
                            key: e,
                            method: e.method,
                            section: e.section
                        };
                        if (!e || (0, r.isString)(e) || (0, r.isU8a)(e)) return {
                            key: e
                        };
                        if ((0, r.isFunction)(e)) return {
                            key: e(),
                            method: e.method,
                            section: e.section
                        };
                        if (Array.isArray(e)) {
                            const [t, n = []] = e;
                            if ((0, r.assert)((0, r.isFunction)(t), "Expected function input for key construction"), t.meta && t.meta.type.isMap) {
                                const e = t.meta.type.asMap;
                                (0, r.assert)(Array.isArray(n) && n.length === e.hashers.length, () => `Expected an array of ${e.hashers.length} values as params to a Map query`)
                            }
                            return {
                                key: t(...n),
                                method: t.method,
                                section: t.section
                            }
                        }
                        throw new Error(`Unable to convert input ${e} to StorageKey`)
                    }(t);
                    super(e, i), this._args = void 0, this._meta = void 0, this._outputType = void 0, this._method = void 0, this._section = void 0, this._outputType = function(e, t) {
                        if (t instanceof StorageKey) return t.outputType;
                        if ((0, r.isFunction)(t)) return u(e, t.meta.type);
                        if (Array.isArray(t)) {
                            const [n] = t;
                            if (n.meta) return u(e, n.meta.type)
                        }
                        return "Raw"
                    }(e, t), this.setMeta(function(e) {
                        if (e instanceof StorageKey) return e.meta;
                        if ((0, r.isFunction)(e)) return e.meta;
                        if (Array.isArray(e)) {
                            const [t] = e;
                            return t.meta
                        }
                    }(t), n.section || o, n.method || s)
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
                setMeta(e, t, n) {
                    this._meta = e, this._method = n || this._method, this._section = t || this._section, e && (this._outputType = u(this.registry, e.type));
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
        7067: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.validateTypes = function(e, t, n) {
                const r = (0, s.flattenUniq)((0, i.extractTypes)(n)).filter(t => !e.hasType(t)).sort();
                if (0 !== r.length) {
                    const e = "Unknown types found, no types for " + r.join(", ");
                    if (t) throw new Error(e);
                    o.warn(e)
                }
                return n
            };
            var r = n(5464),
                i = n(8473),
                s = n(6423);
            const o = (0, r.logger)("metadata")
        },
        7070: function(e, t, n) {
            "use strict";
            var r = n(2);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.Text = void 0;
            var i = r(n(5471)),
                s = r(n(5472)),
                o = n(5464),
                a = n(5834);
            var u = (0, s.default)("override");
            t.Text = class Text extends String {
                constructor(e, t) {
                    super(function(e) {
                        if ((0, o.isHex)(e)) return (0, o.u8aToString)((0, o.hexToU8a)(e));
                        if (e instanceof Uint8Array) {
                            if (!e.length) return "";
                            if (e instanceof a.Raw) return (0, o.u8aToString)(e);
                            const [t, n] = (0, o.compactFromU8a)(e), r = t + n.toNumber();
                            return (0, o.assert)(n.lten(131072), () => `Text: length ${n.toString()} exceeds 131072`), (0, o.assert)(r <= e.length, () => `Text: required length less than remainder, expected at least ${r}, found ${e.length}`), (0, o.u8aToString)(e.subarray(t, r))
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
                    return !!(0, o.isString)(e) && this.toString() === e.toString()
                }
                setOverride(e) {
                    (0, i.default)(this, u)[u] = e
                }
                toHex() {
                    return (0, o.u8aToHex)(this.toU8a(!0))
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
                    return (0, i.default)(this, u)[u] || super.toString()
                }
                toU8a(e) {
                    const t = (0, o.stringToU8a)(super.toString());
                    return e ? t : (0, o.compactAddLength)(t)
                }
            }
        },
        7071: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.u64 = void 0;
            var r = n(5835);
            class u64 extends(r.UInt.with(64)) {
                constructor(...e) {
                    super(...e), this.__UIntType = "u64"
                }
            }
            t.u64 = u64
        },
        7079: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), Object.defineProperty(t, "decorateConstants", {
                enumerable: !0,
                get: function() {
                    return s.decorateConstants
                }
            }), Object.defineProperty(t, "decorateErrors", {
                enumerable: !0,
                get: function() {
                    return o.decorateErrors
                }
            }), Object.defineProperty(t, "decorateEvents", {
                enumerable: !0,
                get: function() {
                    return a.decorateEvents
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
                (0, r.assert)(t instanceof i.Metadata, "You need to pass a valid Metadata instance to Decorated");
                const n = t.asLatest,
                    l = t.version;
                return {
                    consts: (0, s.decorateConstants)(e, n, l),
                    errors: (0, o.decorateErrors)(e, n, l),
                    events: (0, a.decorateEvents)(e, n, l),
                    query: (0, c.decorateStorage)(e, n, l),
                    registry: e,
                    tx: (0, u.decorateExtrinsics)(e, n, l)
                }
            };
            var r = n(5464),
                i = n(6427),
                s = n(8633),
                o = n(7105),
                a = n(8634),
                u = n(8635),
                c = n(8637)
        },
        7105: function(e, t, n) {
            "use strict";
            var r = n(2);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.decorateErrors = function(e, {
                lookup: t,
                pallets: n
            }, r) {
                return n.reduce((n, {
                    errors: i,
                    index: o,
                    name: a
                }, c) => {
                    if (!i.isSome) return n;
                    const l = r >= 12 ? o.toNumber() : c;
                    return n[(0, s.stringCamelCase)(a)] = t.getSiType(i.unwrap().type).def.asVariant.variants.reduce((n, r) => (n[r.name.toString()] = {
                        is: ({
                            error: e,
                            index: t
                        }) => t.eq(l) && e.eq(r.index),
                        meta: e.createType("ErrorMetadataLatest", u(t, r))
                    }, n), {}), n
                }, {})
            }, t.variantToMeta = u;
            var i = r(n(5461)),
                s = n(5464);

            function o(e, t) {
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
                    t % 2 ? o(Object(n), !0).forEach((function(t) {
                        (0, i.default)(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : o(Object(n)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }

            function u(e, t) {
                return a(a({}, t), {}, {
                    args: t.fields.map(({
                        type: t
                    }) => e.getTypeDef(t).type)
                })
            }
        },
        7106: function(e, t, n) {
            "use strict";
            var r = n(2);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.createFunction = function(e, t, n) {
                const {
                    meta: {
                        type: r
                    }
                } = t, i = function({
                    meta: e,
                    method: t,
                    prefix: n,
                    section: r
                }, i) {
                    const o = i;
                    return o.meta = e, o.method = (0, s.stringLowerFirst)(t), o.prefix = n, o.section = r, o.toJSON = () => l(l({}, e.toJSON()), {}, {
                        storage: {
                            method: t,
                            prefix: n,
                            section: r
                        }
                    }), o
                }(t, (...i) => {
                    if (r.isPlain) return n.skipHashing ? (0, s.compactAddLength)((0, s.u8aToU8a)(n.key)) : p(e, t, [], [], []);
                    const {
                        hashers: o,
                        key: a
                    } = r.asMap;
                    return 1 === o.length ? p(e, t, [a], o, i) : p(e, t, e.lookup.getSiType(a).def.asTuple.map(e => e), o, i)
                });
                r.isMap && function(e, t, n) {
                    const {
                        meta: {
                            type: r
                        },
                        method: i,
                        section: o
                    } = t;
                    n.iterKey = function(e, {
                        meta: {
                            docs: t,
                            name: n,
                            type: r
                        },
                        section: i
                    }, {
                        method: s
                    }, o) {
                        const a = e.createLookupType(r.asMap.key);
                        return o.meta = e.createType("StorageEntryMetadataLatest", {
                            docs: t,
                            fallback: e.createType("Bytes"),
                            modifier: e.createType("StorageEntryModifierLatest", 1),
                            name: n,
                            type: e.createType("StorageEntryTypeLatest", a, 0)
                        }), (...t) => e.createType("StorageKey", o(...t), {
                            method: s,
                            section: i
                        })
                    }(e, t, n, (...n) => {
                        if ((0, s.assert)(0 === n.length || r.isMap && n.length < r.asMap.hashers.length, () => `Iteration ${(0,s.stringCamelCase)(o||"unknown")}.${(0,s.stringCamelCase)(i||"unknown")} needs arguments to be at least one less than the full arguments, found [${n.join(", ")}]`), n.length && r.isMap) {
                            const {
                                hashers: i,
                                key: s
                            } = r.asMap, o = 1 === i.length ? [s] : [...e.lookup.getSiType(s).def.asTuple.map(e => e)], u = [...i];
                            return new a.Raw(e, d(e, t, o.slice(0, n.length), u.slice(0, n.length), n))
                        }
                        return new a.Raw(e, d(e, t, [], [], []))
                    })
                }(e, t, i);
                return i.keyPrefix = (...e) => i.iterKey && i.iterKey(...e) || (0, s.compactStripLength)(i())[1], i
            };
            var i = r(n(5461)),
                s = n(5464),
                o = n(5496),
                a = n(6160),
                u = n(8638);

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

            function l(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? c(Object(n), !0).forEach((function(t) {
                        (0, i.default)(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : c(Object(n)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }

            function d(e, t, n, r, i) {
                return (0, s.u8aConcat)((0, o.xxhashAsU8a)(t.prefix, 128), (0, o.xxhashAsU8a)(t.method, 128), ...n.map((t, n) => (0, u.getHasher)(r[n])(e.createType(e.createLookupType(t), i[n]).toU8a())))
            }

            function p(e, t, n, r, i) {
                const {
                    method: o,
                    section: a
                } = t;
                return (0, s.assert)(Array.isArray(i), () => `Call to ${(0,s.stringCamelCase)(a||"unknown")}.${(0,s.stringCamelCase)(o||"unknown")} needs ${n.length} arguments`), (0, s.assert)(i.filter(e => !(0, s.isUndefined)(e)).length === n.length, () => `Call to ${(0,s.stringCamelCase)(a||"unknown")}.${(0,s.stringCamelCase)(o||"unknown")} needs ${n.length} arguments, found [${i.join(", ")}]`), (0, s.compactAddLength)(d(e, t, n, r, i))
            }
        },
        8424: function(e, t, n) {
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
        8425: function(e, t, n) {
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
        8426: function(e, t, n) {
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
        8463: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.BitVec = void 0;
            var r = n(5464),
                i = n(5834);

            function s(e) {
                if (Array.isArray(e) || (0, r.isString)(e)) {
                    const t = (0, r.u8aToU8a)(e);
                    return [t.length / 8, t]
                }
                return function(e) {
                    if (!e || !e.length) return [0, new Uint8Array];
                    const [t, n] = (0, r.compactFromU8a)(e), i = t + Math.ceil(n.toNumber() / 8);
                    return (0, r.assert)(i <= e.length, () => `BitVec: required length less than remainder, expected at least ${i}, found ${e.length}`), [n.toNumber(), e.subarray(t, i)]
                }(e)
            }
            class BitVec extends i.Raw {
                constructor(e, t) {
                    const [n, r] = s(t);
                    super(e, r), this._decodedLength = void 0, this._decodedLength = n
                }
                get encodedLength() {
                    return this.length + (0, r.compactToU8a)(this._decodedLength).length
                }
                toHuman() {
                    return "0b" + [...this.toU8a(!0)].map(e => ("00000000" + e.toString(2)).slice(-8)).join("_")
                }
                toRawType() {
                    return "BitVec"
                }
                toU8a(e) {
                    const t = super.toU8a();
                    return e ? t : (0, r.u8aConcat)((0, r.compactToU8a)(this._decodedLength), t)
                }
            }
            t.BitVec = BitVec
        },
        8464: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.Data = void 0;
            var r = n(5464),
                i = n(5777);

            function s(e, t) {
                return t ? (0, r.isU8a)(t) || (0, r.isString)(t) ? function(e, t) {
                    const n = t[0];
                    if (!n) return [void 0, void 0];
                    if (n >= 1 && n <= 33) {
                        const r = n - 1,
                            i = t.subarray(1, r + 1);
                        return [e.createType("Raw", i), 1]
                    }
                    if (n >= 34 && n <= 37) return [t.subarray(1, 33), n - 32];
                    throw new Error("Unable to decode Data, invalid indicator byte " + n)
                }(e, (0, r.u8aToU8a)(t)) : [t, void 0] : [void 0, void 0]
            }
            class Data extends i.Enum {
                constructor(e, t) {
                    super(e, {
                        None: "Null",
                        Raw: "Bytes",
                        BlakeTwo256: "H256",
                        Sha256: "H256",
                        Keccak256: "H256",
                        ShaThree256: "H256"
                    }, ...s(e, t)), (0, r.assert)(!this.isRaw || this.asRaw.length <= 32, "Data.Raw values are limited to a maximum length of 32 bytes")
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
                            n = new Uint8Array(t + 1);
                        return n.set([t + 1], 0), n.set(e.subarray(0, t), 1), n
                    }
                    const e = new Uint8Array(33);
                    return e.set([this.index + 32], 0), e.set(this.value.toU8a(), 1), e
                }
            }
            t.Data = Data
        },
        8465: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.i8 = void 0;
            var r = n(5833);
            class i8 extends(r.Int.with(8)) {
                constructor(...e) {
                    super(...e), this.__IntType = "i8"
                }
            }
            t.i8 = i8
        },
        8466: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.i16 = void 0;
            var r = n(5833);
            class i16 extends(r.Int.with(16)) {
                constructor(...e) {
                    super(...e), this.__IntType = "i16"
                }
            }
            t.i16 = i16
        },
        8467: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.i32 = void 0;
            var r = n(5833);
            class i32 extends(r.Int.with(32)) {
                constructor(...e) {
                    super(...e), this.__IntType = "i32"
                }
            }
            t.i32 = i32
        },
        8468: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.i64 = void 0;
            var r = n(5833);
            class i64 extends(r.Int.with(64)) {
                constructor(...e) {
                    super(...e), this.__IntType = "i64"
                }
            }
            t.i64 = i64
        },
        8469: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.i128 = void 0;
            var r = n(5833);
            class i128 extends(r.Int.with(128)) {
                constructor(...e) {
                    super(...e), this.__IntType = "i128"
                }
            }
            t.i128 = i128
        },
        8470: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.i256 = void 0;
            var r = n(5833);
            class i256 extends(r.Int.with(256)) {
                constructor(...e) {
                    super(...e), this.__IntType = "i256"
                }
            }
            t.i256 = i256
        },
        8471: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.getSiName = function(e, t) {
                const n = e.getTypeDef(t);
                return n.lookupName || n.type
            }
        },
        8472: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.getUniqTypes = function(e, t, n) {
                return (0, i.validateTypes)(e, n, (0, r.flattenUniq)(function({
                    lookup: e,
                    pallets: t
                }) {
                    return t.reduce((t, {
                        calls: n,
                        constants: r,
                        events: i,
                        storage: a
                    }) => (t.push([s(e, r)]), n.isSome && t.push(o(e, n.unwrap().type)), i.isSome && t.push(o(e, i.unwrap().type)), a.isSome && t.push(a.unwrap().items.map(({
                        type: t
                    }) => {
                        if (t.isPlain) return [e.getTypeDef(t.asPlain).type];
                        const {
                            hashers: n,
                            key: r,
                            value: i
                        } = t.asMap;
                        return 1 === n.length ? [e.getTypeDef(i).type, e.getTypeDef(r).type] : [e.getTypeDef(i).type, ...e.getSiType(r).def.asTuple.map(t => e.getTypeDef(t).type)]
                    })), t), [])
                }(t)))
            };
            var r = n(6423),
                i = n(7067);

            function s(e, t) {
                return t.map(({
                    type: t
                }) => e.getTypeDef(t).type)
            }

            function o(e, t) {
                return e.getSiType(t).def.asVariant.variants.map(({
                    fields: t
                }) => s(e, t))
            }
        },
        8473: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.extractTypes = s;
            var r = n(6163),
                i = n(5913);

            function s(e) {
                return e.map(e => {
                    const t = (0, r.getTypeDef)(e);
                    switch (t.info) {
                        case i.TypeDefInfo.Plain:
                            return t.lookupName || t.type;
                        case i.TypeDefInfo.BTreeSet:
                        case i.TypeDefInfo.Compact:
                        case i.TypeDefInfo.Option:
                        case i.TypeDefInfo.Vec:
                        case i.TypeDefInfo.VecFixed:
                        case i.TypeDefInfo.WrapperOpaque:
                            return function({
                                lookupName: e,
                                type: t
                            }) {
                                return s([e || t])
                            }(t.sub);
                        case i.TypeDefInfo.BTreeMap:
                        case i.TypeDefInfo.Enum:
                        case i.TypeDefInfo.HashMap:
                        case i.TypeDefInfo.Result:
                        case i.TypeDefInfo.Set:
                        case i.TypeDefInfo.Struct:
                        case i.TypeDefInfo.Tuple:
                            return function(e) {
                                return s(e.map(({
                                    lookupName: e,
                                    type: t
                                }) => e || t))
                            }(t.sub);
                        default:
                            throw new Error(`Unhandled: Unable to create and validate type from ${e} (info=${i.TypeDefInfo[t.info]})`)
                    }
                })
            }
        },
        8474: function(e, t, n) {
            "use strict";
            var r = n(2);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.toCallsOnly = function(e, {
                extrinsic: t,
                lookup: n,
                pallets: r
            }) {
                return e.createType("MetadataLatest", {
                    extrinsic: t,
                    lookup: {
                        types: n.types.map(({
                            id: t,
                            type: n
                        }) => e.createType("PortableType", {
                            id: t,
                            type: o(o({}, n), {}, {
                                docs: a(n.docs)
                            })
                        }))
                    },
                    pallets: r.map(({
                        calls: t,
                        index: n,
                        name: r
                    }) => ({
                        calls: e.createType("Option<PalletCallMetadataLatest>", t.unwrapOr(null)),
                        index: n,
                        name: r
                    }))
                }).toJSON()
            };
            var i = r(n(5461));

            function s(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, r)
                }
                return n
            }

            function o(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? s(Object(n), !0).forEach((function(t) {
                        (0, i.default)(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : s(Object(n)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }

            function a(e) {
                const t = e.map(e => e.toString().trim()),
                    n = t.findIndex(e => !e.length);
                return -1 === n ? t : t.slice(0, n)
            }
        },
        8475: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.Type = void 0;
            var r = n(7068),
                i = n(7070);
            class Type extends i.Text {
                constructor(e, t = "") {
                    super(e, t), this.setOverride((0, r.sanitize)(this.toString()))
                }
                toRawType() {
                    return "Type"
                }
            }
            t.Type = Type
        },
        8476: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.u8 = void 0;
            var r = n(5835);
            class u8 extends(r.UInt.with(8)) {
                constructor(...e) {
                    super(...e), this.__UIntType = "u8"
                }
            }
            t.u8 = u8
        },
        8477: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.u16 = void 0;
            var r = n(5835);
            class u16 extends(r.UInt.with(16)) {
                constructor(...e) {
                    super(...e), this.__UIntType = "u16"
                }
            }
            t.u16 = u16
        },
        8478: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.u128 = void 0;
            var r = n(5835);
            class u128 extends(r.UInt.with(128)) {
                constructor(...e) {
                    super(...e), this.__UIntType = "u128"
                }
            }
            t.u128 = u128
        },
        8479: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.u256 = void 0;
            var r = n(5835);
            class u256 extends(r.UInt.with(256)) {
                constructor(...e) {
                    super(...e), this.__UIntType = "u256"
                }
            }
            t.u256 = u256
        },
        8480: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.usize = void 0;
            var r = n(6424);
            class usize extends r.u32 {
                constructor(e, t) {
                    throw super(e, t), new Error("The `usize` type should not be used. Since it is platform-specific, it creates incompatibilities between native (generally u64) and WASM (always u32) code. Use one of the `u32` or `u64` types explicitly.")
                }
            }
            t.usize = usize
        },
        8508: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), n(8509);
            var r = n(5913);
            Object.keys(r).forEach((function(e) {
                "default" !== e && "__esModule" !== e && (e in t && t[e] === r[e] || Object.defineProperty(t, e, {
                    enumerable: !0,
                    get: function() {
                        return r[e]
                    }
                }))
            }));
            var i = n(8516);
            Object.keys(i).forEach((function(e) {
                "default" !== e && "__esModule" !== e && (e in t && t[e] === i[e] || Object.defineProperty(t, e, {
                    enumerable: !0,
                    get: function() {
                        return i[e]
                    }
                }))
            }));
            var s = n(8517);
            Object.keys(s).forEach((function(e) {
                "default" !== e && "__esModule" !== e && (e in t && t[e] === s[e] || Object.defineProperty(t, e, {
                    enumerable: !0,
                    get: function() {
                        return s[e]
                    }
                }))
            }));
            var o = n(8518);
            Object.keys(o).forEach((function(e) {
                "default" !== e && "__esModule" !== e && (e in t && t[e] === o[e] || Object.defineProperty(t, e, {
                    enumerable: !0,
                    get: function() {
                        return o[e]
                    }
                }))
            }));
            var a = n(8519);
            Object.keys(a).forEach((function(e) {
                "default" !== e && "__esModule" !== e && (e in t && t[e] === a[e] || Object.defineProperty(t, e, {
                    enumerable: !0,
                    get: function() {
                        return a[e]
                    }
                }))
            }));
            var u = n(8520);
            Object.keys(u).forEach((function(e) {
                "default" !== e && "__esModule" !== e && (e in t && t[e] === u[e] || Object.defineProperty(t, e, {
                    enumerable: !0,
                    get: function() {
                        return u[e]
                    }
                }))
            }));
            var c = n(8521);
            Object.keys(c).forEach((function(e) {
                "default" !== e && "__esModule" !== e && (e in t && t[e] === c[e] || Object.defineProperty(t, e, {
                    enumerable: !0,
                    get: function() {
                        return c[e]
                    }
                }))
            }));
            var l = n(8522);
            Object.keys(l).forEach((function(e) {
                "default" !== e && "__esModule" !== e && (e in t && t[e] === l[e] || Object.defineProperty(t, e, {
                    enumerable: !0,
                    get: function() {
                        return l[e]
                    }
                }))
            }));
            var d = n(8523);
            Object.keys(d).forEach((function(e) {
                "default" !== e && "__esModule" !== e && (e in t && t[e] === d[e] || Object.defineProperty(t, e, {
                    enumerable: !0,
                    get: function() {
                        return d[e]
                    }
                }))
            }))
        },
        8516: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            })
        },
        8517: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            })
        },
        8518: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            })
        },
        8519: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            })
        },
        8520: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            })
        },
        8521: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            })
        },
        8522: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            })
        },
        8523: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            })
        },
        8526: function(e, t, n) {
            "use strict";
            var r = n(2);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.MetadataVersioned = void 0;
            var i = r(n(5471)),
                s = r(n(5472)),
                o = n(5464),
                a = n(6160),
                u = n(8527),
                c = n(8528),
                l = n(8529),
                d = n(8530),
                p = n(8531),
                f = n(8631),
                y = n(8632),
                m = n(6422);
            var g = (0, s.default)("converted"),
                h = (0, s.default)("assertVersion"),
                b = (0, s.default)("getVersion"),
                V = (0, s.default)("metadata");
            class MetadataVersioned extends a.Struct {
                constructor(e, t) {
                    super(e, {
                        magicNumber: y.MagicNumber,
                        metadata: "MetadataAll"
                    }, t), Object.defineProperty(this, g, {
                        writable: !0,
                        value: new Map
                    }), Object.defineProperty(this, h, {
                        writable: !0,
                        value: e => ((0, o.assert)(this.version <= e, () => `Cannot convert metadata from version ${this.version} to ${e}`), this.version === e)
                    }), Object.defineProperty(this, b, {
                        writable: !0,
                        value: (e, t) => {
                            const n = "asV" + e,
                                r = "latest" === e ? "asV14" : "asV" + (e - 1);
                            return "latest" !== e && (0, i.default)(this, h)[h](e) ? (0, i.default)(this, V)[V]()[n] : ((0, i.default)(this, g)[g].has(e) || (0, i.default)(this, g)[g].set(e, t(this.registry, this[r], this.version)), (0, i.default)(this, g)[g].get(e))
                        }
                    }), Object.defineProperty(this, V, {
                        writable: !0,
                        value: () => this.get("metadata")
                    })
                }
                get asCallsOnly() {
                    return new MetadataVersioned(this.registry, {
                        magicNumber: this.magicNumber,
                        metadata: this.registry.createType("MetadataAll", (0, m.toCallsOnly)(this.registry, this.asLatest), 14)
                    })
                }
                get asV9() {
                    return (0, i.default)(this, h)[h](9), (0, i.default)(this, V)[V]().asV9
                }
                get asV10() {
                    return (0, i.default)(this, b)[b](10, u.toV10)
                }
                get asV11() {
                    return (0, i.default)(this, b)[b](11, c.toV11)
                }
                get asV12() {
                    return (0, i.default)(this, b)[b](12, l.toV12)
                }
                get asV13() {
                    return (0, i.default)(this, b)[b](13, d.toV13)
                }
                get asV14() {
                    return (0, i.default)(this, b)[b](14, p.toV14)
                }
                get asLatest() {
                    return (0, i.default)(this, b)[b]("latest", f.toLatest)
                }
                get magicNumber() {
                    return this.get("magicNumber")
                }
                get version() {
                    return (0, i.default)(this, V)[V]().index
                }
                getUniqTypes(e) {
                    return (0, m.getUniqTypes)(this.registry, this.asLatest, e)
                }
                toJSON() {
                    return this.asLatest, super.toJSON()
                }
            }
            t.MetadataVersioned = MetadataVersioned
        },
        8527: function(e, t, n) {
            "use strict";
            var r = n(2);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.toV10 = function(e, {
                modules: t
            }) {
                return e.createType("MetadataV10", {
                    modules: t.map(t => function(e, t) {
                        const n = t.storage.unwrapOr(null);
                        return e.createType("ModuleMetadataV10", o(o({}, t), {}, {
                            storage: n ? o(o({}, n), {}, {
                                items: n.items.map(t => o(o({}, t), {}, {
                                    type: e.createType("StorageEntryTypeV10", ...u(e, t.type))
                                }))
                            }) : null
                        }))
                    }(e, t))
                })
            };
            var i = r(n(5461));

            function s(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, r)
                }
                return n
            }

            function o(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? s(Object(n), !0).forEach((function(t) {
                        (0, i.default)(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : s(Object(n)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }

            function a(e, t) {
                return t.toNumber() >= 2 ? e.createType("StorageHasherV10", t.toNumber() + 1) : e.createType("StorageHasherV10", t)
            }

            function u(e, t) {
                return t.isMap ? [o(o({}, t.asMap), {}, {
                    hasher: a(e, t.asMap.hasher)
                }), 1] : t.isDoubleMap ? [o(o({}, t.asDoubleMap), {}, {
                    hasher: a(e, t.asDoubleMap.hasher),
                    key2Hasher: a(e, t.asDoubleMap.key2Hasher)
                }), 2] : [t.asPlain, 0]
            }
        },
        8528: function(e, t, n) {
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
        8529: function(e, t, n) {
            "use strict";
            var r = n(2);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.toV12 = function(e, {
                extrinsic: t,
                modules: n
            }) {
                return e.createType("MetadataV12", {
                    extrinsic: t,
                    modules: n.map(t => e.createType("ModuleMetadataV12", o(o({}, t), {}, {
                        index: 255
                    })))
                })
            };
            var i = r(n(5461));

            function s(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, r)
                }
                return n
            }

            function o(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? s(Object(n), !0).forEach((function(t) {
                        (0, i.default)(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : s(Object(n)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }
        },
        8530: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.toV13 = function(e, t) {
                return e.createType("MetadataV13", t)
            }
        },
        8531: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.toV14 = function(e, t, n) {
                const s = [];
                o(s, "Null"),
                    function(e, t, n) {
                        e.register({
                            OriginCaller: {
                                _enum: t.map((e, t) => [e.name.toString(), n >= 12 ? e.index.toNumber() : t]).sort((e, t) => e[1] - t[1]).reduce((e, [t, n]) => {
                                    for (let t = Object.keys(e).length; t < n; t++) e["Empty" + t] = "Null";
                                    return e[t] = r.knownOrigins[t] || "Null", e
                                }, {})
                            }
                        })
                    }(e, t.modules, n);
                const a = function(e, {
                        signedExtensions: t,
                        version: n
                    }) {
                        return e.createType("ExtrinsicMetadataV14", {
                            signedExtensions: t.map(e => ({
                                identifier: e,
                                type: 0
                            })),
                            type: 0,
                            version: n
                        })
                    }(e, t.extrinsic),
                    u = t.modules.map(t => function(e, t, n, {
                        calls: s,
                        constants: o,
                        errors: a,
                        events: u,
                        storage: c
                    }) {
                        const y = (0, r.getModuleTypes)(t, (0, i.stringCamelCase)(n.name));
                        return t.createType("PalletMetadataV14", {
                            calls: s && l(e, t, n.name, s, y),
                            constants: d(e, t, o, y),
                            errors: a && p(e, t, n.name, a, y),
                            events: u && f(e, t, n.name, u, y),
                            index: n.index,
                            name: n.name,
                            storage: c && m(e, t, c, y)
                        })
                    }(s, e, t, {
                        calls: t.calls.unwrapOr(null),
                        constants: t.constants,
                        errors: t.errors.length ? t.errors : null,
                        events: t.events.unwrapOr(null),
                        storage: t.storage.unwrapOr(null)
                    }));
                return e.createType("MetadataV14", {
                    extrinsic: a,
                    lookup: {
                        types: s.map((t, n) => e.createType("PortableType", {
                            id: n,
                            type: t
                        }))
                    },
                    pallets: u
                })
            };
            var r = n(6428),
                i = n(5464);
            const s = [
                ["<", ">"],
                ["<", ","],
                [",", ">"],
                ["(", ")"],
                ["(", ","],
                [",", ","],
                [",", ")"]
            ];

            function o(e, t) {
                const n = t.toString(),
                    r = e.findIndex(({
                        def: e
                    }) => e.HistoricMetaCompat === n);
                return -1 !== r ? r : e.push({
                    def: {
                        HistoricMetaCompat: n
                    }
                }) - 1
            }

            function a(e, t) {
                return e.push({
                    def: {
                        Tuple: t
                    }
                }) - 1
            }

            function u(e, t, n, r) {
                return n.push({
                    def: {
                        Variant: {
                            variants: r
                        }
                    },
                    path: ["pallet_" + e.toString(), "pallet", t]
                }) - 1
            }

            function c(e, t) {
                t.forEach(t => {
                    const n = Object.keys(e).find(e => t.eq(e));
                    if (n) t.setOverride(e[n]);
                    else {
                        const n = t.toString(),
                            r = Object.entries(e).reduce((e, [t, n]) => s.reduce((e, [r, i]) => e.replace(`${r}${t}${i}`, `${r}${n}${i}`), e), n);
                        n !== r && t.setOverride(r)
                    }
                })
            }

            function l(e, t, n, r, i) {
                const s = r.map(({
                    args: n,
                    docs: r,
                    name: s
                }, a) => (c(i, n.map(({
                    type: e
                }) => e)), t.createType("SiVariant", {
                    docs: r,
                    fields: n.map(({
                        name: n,
                        type: r
                    }) => t.createType("SiField", {
                        name: n,
                        type: o(e, r)
                    })),
                    index: a,
                    name: s
                })));
                return t.createType("PalletCallMetadataV14", {
                    type: u(n, "Call", e, s)
                })
            }

            function d(e, t, n, r) {
                return n.map(({
                    docs: n,
                    name: i,
                    type: s,
                    value: a
                }) => (c(r, [s]), t.createType("PalletConstantMetadataV14", {
                    docs: n,
                    name: i,
                    type: o(e, s),
                    value: a
                })))
            }

            function p(e, t, n, r, i) {
                const s = r.map(({
                    docs: e,
                    name: n
                }, r) => t.createType("SiVariant", {
                    docs: e,
                    fields: [],
                    index: r,
                    name: n
                }));
                return t.createType("PalletErrorMetadataV14", {
                    type: u(n, "Error", e, s)
                })
            }

            function f(e, t, n, r, i) {
                const s = r.map(({
                    args: n,
                    docs: r,
                    name: s
                }, a) => (c(i, n), t.createType("SiVariant", {
                    docs: r,
                    fields: n.map(n => t.createType("SiField", {
                        type: o(e, n)
                    })),
                    index: a,
                    name: s
                })));
                return t.createType("PalletEventMetadataV14", {
                    type: u(n, "Event", e, s)
                })
            }

            function y(e, t, n, {
                hashers: r,
                keys: i,
                value: s
            }) {
                return c(n, [s, ...Array.isArray(i) ? i : [i]]), t.createType("StorageEntryTypeV14", {
                    Map: {
                        hashers: r,
                        key: 1 === r.length ? o(e, i[0]) : a(e, i.map(t => o(e, t))),
                        value: o(e, s)
                    }
                })
            }

            function m(e, t, {
                items: n,
                prefix: r
            }, i) {
                return t.createType("PalletStorageMetadataV14", {
                    items: n.map(({
                        docs: n,
                        fallback: r,
                        modifier: s,
                        name: a,
                        type: u
                    }) => {
                        let l;
                        if (u.isPlain) {
                            const n = u.asPlain;
                            c(i, [n]), l = t.createType("StorageEntryTypeV14", {
                                Plain: o(e, n)
                            })
                        } else if (u.isMap) {
                            const n = u.asMap;
                            l = y(e, t, i, {
                                hashers: [n.hasher],
                                keys: [n.key],
                                value: n.value
                            })
                        } else if (u.isDoubleMap) {
                            const n = u.asDoubleMap;
                            l = y(e, t, i, {
                                hashers: [n.hasher, n.key2Hasher],
                                keys: [n.key1, n.key2],
                                value: n.value
                            })
                        } else {
                            const n = u.asNMap;
                            l = y(e, t, i, {
                                hashers: n.hashers,
                                keys: n.keyVec,
                                value: n.value
                            })
                        }
                        return t.createType("StorageEntryMetadataV14", {
                            docs: n,
                            fallback: r,
                            modifier: s,
                            name: a,
                            type: l
                        })
                    }),
                    prefix: r
                })
            }
        },
        8631: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.toLatest = function(e, t, n) {
                return t
            }
        },
        8632: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.MagicNumber = t.MAGIC_NUMBER = void 0;
            var r = n(5464),
                i = n(6421);
            t.MAGIC_NUMBER = 1635018093;
            class MagicNumber extends i.U32 {
                constructor(e, t) {
                    super(e, t), this.isEmpty || (0, r.assert)(this.eq(1635018093), () => `MagicNumber mismatch: expected ${e.createType("u32",1635018093).toHex()}, found ${this.toHex()}`)
                }
            }
            t.MagicNumber = MagicNumber
        },
        8633: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.decorateConstants = function(e, {
                pallets: t
            }, n) {
                return t.reduce((t, {
                    constants: n,
                    name: i
                }) => (n.isEmpty || (t[(0, r.stringCamelCase)(i)] = n.reduce((t, n) => {
                    const i = e.createTypeUnsafe(e.createLookupType(n.type), [(0, r.hexToU8a)(n.value.toHex())]);
                    return i.meta = n, t[(0, r.stringCamelCase)(n.name)] = i, t
                }, {})), t), {})
            };
            var r = n(5464)
        },
        8634: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.decorateEvents = function(e, {
                lookup: t,
                pallets: n
            }, s) {
                return n.filter(({
                    events: e
                }) => e.isSome).reduce((n, {
                    events: o,
                    index: a,
                    name: u
                }, c) => {
                    const l = s >= 12 ? a.toNumber() : c;
                    return n[(0, r.stringCamelCase)(u)] = t.getSiType(o.unwrap().type).def.asVariant.variants.reduce((n, r) => (n[r.name.toString()] = {
                        is: e => e.index[0] === l && r.index.eq(e.index[1]),
                        meta: e.createType("EventMetadataLatest", (0, i.variantToMeta)(t, r))
                    }, n), {}), n
                }, {})
            };
            var r = n(5464),
                i = n(7105)
        },
        8635: function(e, t, n) {
            "use strict";
            var r = n(2);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.decorateExtrinsics = function(e, {
                lookup: t,
                pallets: n
            }, r) {
                return n.filter(({
                    calls: e
                }) => e.isSome).reduce((n, {
                    calls: i,
                    index: u,
                    name: l
                }, d) => {
                    const p = (0, s.stringCamelCase)(l),
                        f = r >= 12 ? u.toNumber() : d;
                    return n[p] = t.getSiType(i.unwrap().type).def.asVariant.variants.reduce((n, r) => {
                        const i = e.createType("FunctionMetadataLatest", c(c({}, r), {}, {
                            args: r.fields.map(({
                                name: e,
                                type: n
                            }, r) => ({
                                name: (0, s.stringCamelCase)(e.unwrapOr("param" + r)),
                                type: (0, o.getSiName)(t, n)
                            }))
                        }));
                        return n[(0, s.stringCamelCase)(i.name)] = (0, a.createUnchecked)(e, p, new Uint8Array([f, i.index.toNumber()]), i), n
                    }, {}), n
                }, {})
            };
            var i = r(n(5461)),
                s = n(5464),
                o = n(6422),
                a = n(8636);

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

            function c(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? u(Object(n), !0).forEach((function(t) {
                        (0, i.default)(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : u(Object(n)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }
        },
        8636: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.createUnchecked = function(e, t, n, i) {
                const s = i.fields,
                    o = (0, r.stringCamelCase)(i.name),
                    a = (...a) => ((0, r.assert)(s.length === a.length, () => `Extrinsic ${t}.${o} expects ${s.length} arguments, got ${a.length}.`), e.createType("Call", {
                        args: a,
                        callIndex: n
                    }, i));
                return a.is = e => function(e, t) {
                    return e.callIndex[0] === t[0] && e.callIndex[1] === t[1]
                }(e, n), a.callIndex = n, a.meta = i, a.method = o, a.section = t, a.toJSON = () => i.toJSON(), a
            };
            var r = n(5464)
        },
        8637: function(e, t, n) {
            "use strict";
            var r = n(2);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.decorateStorage = function(e, {
                pallets: t
            }, n) {
                return t.reduce((t, n) => {
                    if (n.storage.isNone) return t;
                    const {
                        name: r
                    } = n, i = (0, s.stringCamelCase)(r), a = n.storage.unwrap(), u = a.prefix.toString();
                    return t[i] = a.items.reduce((t, n) => {
                        const r = n.name.toString();
                        return t[(0, s.stringLowerFirst)(r)] = (0, o.createFunction)(e, {
                            meta: n,
                            method: r,
                            prefix: u,
                            section: i
                        }, {}), t
                    }, {}), t
                }, function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = null != arguments[t] ? arguments[t] : {};
                        t % 2 ? u(Object(n), !0).forEach((function(t) {
                            (0, i.default)(e, t, n[t])
                        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : u(Object(n)).forEach((function(t) {
                            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                        }))
                    }
                    return e
                }({}, (0, a.getStorage)(e)))
            };
            var i = r(n(5461)),
                s = n(5464),
                o = n(7106),
                a = n(8639);

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
        },
        8638: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.getHasher = function(e) {
                return o[e.type] || s
            };
            var r = n(5464),
                i = n(5496);
            const s = e => (0, i.xxhashAsU8a)(e, 128),
                o = {
                    Blake2_128: e => (0, i.blake2AsU8a)(e, 128),
                    Blake2_128Concat: e => (0, r.u8aConcat)((0, i.blake2AsU8a)(e, 128), (0, r.u8aToU8a)(e)),
                    Blake2_256: e => (0, i.blake2AsU8a)(e, 256),
                    Identity: e => (0, r.u8aToU8a)(e),
                    Twox128: e => (0, i.xxhashAsU8a)(e, 128),
                    Twox256: e => (0, i.xxhashAsU8a)(e, 256),
                    Twox64Concat: e => (0, r.u8aConcat)((0, i.xxhashAsU8a)(e, 64), (0, r.u8aToU8a)(e))
                }
        },
        8639: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.getStorage = function(e) {
                return {
                    substrate: Object.entries(r.substrate).reduce((t, [n, r]) => (t[n] = r(e), t), {})
                }
            };
            var r = n(8640)
        },
        8640: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.substrate = void 0;
            var r = n(7106);

            function i(e, t) {
                const n = t.toLowerCase();
                return e.lookup.types.find(e => e.type.def.isPrimitive && e.type.def.asPrimitive.toString().toLowerCase() === n || e.type.def.isHistoricMetaCompat && e.type.def.asHistoricMetaCompat.toString().toLowerCase() === n)
            }

            function s(e, t) {
                let n = i(e, t);
                if (!n && "Bytes" === t) {
                    const r = i(e, "u8");
                    r && (n = e.lookup.types.find(e => e.type.def.isSequence && e.type.def.asSequence.type.eq(r.id) || e.type.def.isHistoricMetaCompat && e.type.def.asHistoricMetaCompat.eq(t)))
                }
                return n || console.warn(`Unable to map ${t} to a lookup index`), n
            }

            function o(e, t, {
                docs: n,
                type: i
            }) {
                return o => {
                    var a;
                    return (0, r.createFunction)(o, {
                        meta: o.createType("StorageEntryMetadataLatest", {
                            docs: o.createType("Vec<Text>", [n]),
                            modifier: o.createType("StorageEntryModifierLatest", "Required"),
                            name: o.createType("Text", e),
                            toJSON: () => t,
                            type: o.createType("StorageEntryTypeLatest", {
                                Plain: (null === (a = s(o, i)) || void 0 === a ? void 0 : a.id) || 0
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
            const a = {
                changesTrieConfig: o("changesTrieConfig", ":changes_trie", {
                    docs: " Changes trie configuration is stored under this key.",
                    type: "u32"
                }),
                childStorageKeyPrefix: o("childStorageKeyPrefix", ":child_storage:", {
                    docs: " Prefix of child storage keys.",
                    type: "u32"
                }),
                code: o("code", ":code", {
                    docs: " Wasm code of the runtime.",
                    type: "Bytes"
                }),
                extrinsicIndex: o("extrinsicIndex", ":extrinsic_index", {
                    docs: " Current extrinsic index (u32) is stored under this key.",
                    type: "u32"
                }),
                heapPages: o("heapPages", ":heappages", {
                    docs: " Number of wasm linear memory pages required for execution of the runtime.",
                    type: "u64"
                })
            };
            t.substrate = a
        },
        8641: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), Object.defineProperty(t, "Metadata", {
                enumerable: !0,
                get: function() {
                    return r.Metadata
                }
            }), Object.defineProperty(t, "decorateConstants", {
                enumerable: !0,
                get: function() {
                    return i.decorateConstants
                }
            }), Object.defineProperty(t, "decorateExtrinsics", {
                enumerable: !0,
                get: function() {
                    return i.decorateExtrinsics
                }
            }), Object.defineProperty(t, "decorateStorage", {
                enumerable: !0,
                get: function() {
                    return i.decorateStorage
                }
            }), Object.defineProperty(t, "expandMetadata", {
                enumerable: !0,
                get: function() {
                    return i.expandMetadata
                }
            });
            var r = n(6427),
                i = n(7079)
        }
    }
]);