/*! For license information please see vendors.852466b1b1db42e050b6.js.LICENSE.txt */
(window.webpackJsonp = window.webpackJsonp || []).push([
    [108], {
        0: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, "Struct", (function() {
                return Struct
            })), n.d(t, "StructError", (function() {
                return StructError
            })), n.d(t, "any", (function() {
                return S
            })), n.d(t, "array", (function() {
                return _
            })), n.d(t, "assert", (function() {
                return c
            })), n.d(t, "assign", (function() {
                return p
            })), n.d(t, "boolean", (function() {
                return E
            })), n.d(t, "coerce", (function() {
                return H
            })), n.d(t, "create", (function() {
                return l
            })), n.d(t, "date", (function() {
                return k
            })), n.d(t, "defaulted", (function() {
                return J
            })), n.d(t, "define", (function() {
                return m
            })), n.d(t, "deprecated", (function() {
                return y
            })), n.d(t, "dynamic", (function() {
                return v
            })), n.d(t, "empty", (function() {
                return Q
            })), n.d(t, "enums", (function() {
                return A
            })), n.d(t, "func", (function() {
                return P
            })), n.d(t, "instance", (function() {
                return j
            })), n.d(t, "integer", (function() {
                return B
            })), n.d(t, "intersection", (function() {
                return O
            })), n.d(t, "is", (function() {
                return d
            })), n.d(t, "lazy", (function() {
                return g
            })), n.d(t, "literal", (function() {
                return D
            })), n.d(t, "map", (function() {
                return N
            })), n.d(t, "mask", (function() {
                return f
            })), n.d(t, "max", (function() {
                return W
            })), n.d(t, "min", (function() {
                return Y
            })), n.d(t, "never", (function() {
                return q
            })), n.d(t, "nullable", (function() {
                return M
            })), n.d(t, "number", (function() {
                return C
            })), n.d(t, "object", (function() {
                return I
            })), n.d(t, "omit", (function() {
                return b
            })), n.d(t, "optional", (function() {
                return R
            })), n.d(t, "partial", (function() {
                return w
            })), n.d(t, "pattern", (function() {
                return $
            })), n.d(t, "pick", (function() {
                return T
            })), n.d(t, "record", (function() {
                return K
            })), n.d(t, "refine", (function() {
                return te
            })), n.d(t, "regexp", (function() {
                return L
            })), n.d(t, "set", (function() {
                return F
            })), n.d(t, "size", (function() {
                return ee
            })), n.d(t, "string", (function() {
                return V
            })), n.d(t, "struct", (function() {
                return x
            })), n.d(t, "trimmed", (function() {
                return Z
            })), n.d(t, "tuple", (function() {
                return z
            })), n.d(t, "type", (function() {
                return U
            })), n.d(t, "union", (function() {
                return X
            })), n.d(t, "unknown", (function() {
                return G
            })), n.d(t, "validate", (function() {
                return h
            }));
            class StructError extends TypeError {
                constructor(e, t) {
                    let n;
                    const {
                        message: r,
                        ...i
                    } = e, {
                        path: o
                    } = e;
                    super(0 === o.length ? r : "At path: " + o.join(".") + " -- " + r), Object.assign(this, i), this.name = this.constructor.name, this.failures = () => {
                        var r;
                        return null != (r = n) ? r : n = [e, ...t()]
                    }
                }
            }

            function r(e) {
                return "object" == typeof e && null != e
            }

            function i(e) {
                if ("[object Object]" !== Object.prototype.toString.call(e)) return !1;
                const t = Object.getPrototypeOf(e);
                return null === t || t === Object.prototype
            }

            function o(e) {
                return "string" == typeof e ? JSON.stringify(e) : "" + e
            }

            function u(e, t, n, r) {
                if (!0 === e) return;
                !1 === e ? e = {} : "string" == typeof e && (e = {
                    message: e
                });
                const {
                    path: i,
                    branch: u
                } = t, {
                    type: a
                } = n, {
                    refinement: s,
                    message: c = "Expected a value of type `" + a + "`" + (s ? " with refinement `" + s + "`" : "") + ", but received: `" + o(r) + "`"
                } = e;
                return {
                    value: r,
                    type: a,
                    refinement: s,
                    key: i[i.length - 1],
                    path: i,
                    branch: u,
                    ...e,
                    message: c
                }
            }

            function* a(e, t, n, i) {
                var o;
                r(o = e) && "function" == typeof o[Symbol.iterator] || (e = [e]);
                for (const r of e) {
                    const e = u(r, t, n, i);
                    e && (yield e)
                }
            }

            function* s(e, t, n = {}) {
                const {
                    path: i = [],
                    branch: o = [e],
                    coerce: u = !1,
                    mask: a = !1
                } = n, c = {
                    path: i,
                    branch: o
                };
                if (u && (e = t.coercer(e, c), a && "type" !== t.type && r(t.schema) && r(e) && !Array.isArray(e)))
                    for (const n in e) void 0 === t.schema[n] && delete e[n];
                let l = !0;
                for (const n of t.validator(e, c)) l = !1, yield [n, void 0];
                for (let [n, f, d] of t.entries(e, c)) {
                    const t = s(f, d, {
                        path: void 0 === n ? i : [...i, n],
                        branch: void 0 === n ? o : [...o, f],
                        coerce: u,
                        mask: a
                    });
                    for (const i of t) i[0] ? (l = !1, yield [i[0], void 0]) : u && (f = i[1], void 0 === n ? e = f : e instanceof Map ? e.set(n, f) : e instanceof Set ? e.add(f) : r(e) && (e[n] = f))
                }
                if (l)
                    for (const n of t.refiner(e, c)) l = !1, yield [n, void 0];
                l && (yield [void 0, e])
            }
            class Struct {
                constructor(e) {
                    const {
                        type: t,
                        schema: n,
                        validator: r,
                        refiner: i,
                        coercer: o = (e => e),
                        entries: u = function*() {}
                    } = e;
                    this.type = t, this.schema = n, this.entries = u, this.coercer = o, this.validator = r ? (e, t) => a(r(e, t), t, this, e) : () => [], this.refiner = i ? (e, t) => a(i(e, t), t, this, e) : () => []
                }
                assert(e) {
                    return c(e, this)
                }
                create(e) {
                    return l(e, this)
                }
                is(e) {
                    return d(e, this)
                }
                mask(e) {
                    return f(e, this)
                }
                validate(e, t = {}) {
                    return h(e, this, t)
                }
            }

            function c(e, t) {
                const n = h(e, t);
                if (n[0]) throw n[0]
            }

            function l(e, t) {
                const n = h(e, t, {
                    coerce: !0
                });
                if (n[0]) throw n[0];
                return n[1]
            }

            function f(e, t) {
                const n = h(e, t, {
                    coerce: !0,
                    mask: !0
                });
                if (n[0]) throw n[0];
                return n[1]
            }

            function d(e, t) {
                return !h(e, t)[0]
            }

            function h(e, t, n = {}) {
                const r = s(e, t, n),
                    i = function(e) {
                        const {
                            done: t,
                            value: n
                        } = e.next();
                        return t ? void 0 : n
                    }(r);
                if (i[0]) {
                    return [new StructError(i[0], (function*() {
                        for (const e of r) e[0] && (yield e[0])
                    })), void 0]
                }
                return [void 0, i[1]]
            }

            function p(...e) {
                const t = e.map(e => e.schema);
                return I(Object.assign({}, ...t))
            }

            function m(e, t) {
                return new Struct({
                    type: e,
                    schema: null,
                    validator: t
                })
            }

            function y(e, t) {
                return new Struct({
                    ...e,
                    refiner: (t, n) => void 0 === t || e.refiner(t, n),
                    validator: (n, r) => void 0 === n || (t(n, r), e.validator(n, r))
                })
            }

            function v(e) {
                return new Struct({
                    type: "dynamic",
                    schema: null,
                    * entries(t, n) {
                        const r = e(t, n);
                        yield* r.entries(t, n)
                    },
                    validator: (t, n) => e(t, n).validator(t, n),
                    coercer: (t, n) => e(t, n).coercer(t, n)
                })
            }

            function g(e) {
                let t;
                return new Struct({
                    type: "lazy",
                    schema: null,
                    * entries(n, r) {
                        null != t || (t = e()), yield* t.entries(n, r)
                    },
                    validator: (n, r) => (null != t || (t = e()), t.validator(n, r)),
                    coercer: (n, r) => (null != t || (t = e()), t.coercer(n, r))
                })
            }

            function b(e, t) {
                const {
                    schema: n
                } = e, r = {
                    ...n
                };
                for (const e of t) delete r[e];
                return I(r)
            }

            function w(e) {
                const t = e instanceof Struct ? {
                    ...e.schema
                } : {
                    ...e
                };
                for (const e in t) t[e] = R(t[e]);
                return I(t)
            }

            function T(e, t) {
                const {
                    schema: n
                } = e, r = {};
                for (const e of t) r[e] = n[e];
                return I(r)
            }

            function x(e, t) {
                return console.warn("superstruct@0.11 - The `struct` helper has been renamed to `define`."), m(e, t)
            }

            function S() {
                return m("any", () => !0)
            }

            function _(e) {
                return new Struct({
                    type: "array",
                    schema: e,
                    * entries(t) {
                        if (e && Array.isArray(t))
                            for (const [n, r] of t.entries()) yield [n, r, e]
                    },
                    coercer: e => Array.isArray(e) ? e.slice() : e,
                    validator: e => Array.isArray(e) || "Expected an array value, but received: " + o(e)
                })
            }

            function E() {
                return m("boolean", e => "boolean" == typeof e)
            }

            function k() {
                return m("date", e => e instanceof Date && !isNaN(e.getTime()) || "Expected a valid `Date` object, but received: " + o(e))
            }

            function A(e) {
                const t = {},
                    n = e.map(e => o(e)).join();
                for (const n of e) t[n] = n;
                return new Struct({
                    type: "enums",
                    schema: t,
                    validator: t => e.includes(t) || "Expected one of `" + n + "`, but received: " + o(t)
                })
            }

            function P() {
                return m("func", e => "function" == typeof e || "Expected a function, but received: " + o(e))
            }

            function j(e) {
                return m("instance", t => t instanceof e || "Expected a `" + e.name + "` instance, but received: " + o(t))
            }

            function B() {
                return m("integer", e => "number" == typeof e && !isNaN(e) && Number.isInteger(e) || "Expected an integer, but received: " + o(e))
            }

            function O(e) {
                return new Struct({
                    type: "intersection",
                    schema: null,
                    * entries(t, n) {
                        for (const r of e) yield* r.entries(t, n)
                    },
                    * validator(t, n) {
                        for (const r of e) yield* r.validator(t, n)
                    },
                    * refiner(t, n) {
                        for (const r of e) yield* r.refiner(t, n)
                    }
                })
            }

            function D(e) {
                const t = o(e),
                    n = typeof e;
                return new Struct({
                    type: "literal",
                    schema: "string" === n || "number" === n || "boolean" === n ? e : null,
                    validator: n => n === e || "Expected the literal `" + t + "`, but received: " + o(n)
                })
            }

            function N(e, t) {
                return new Struct({
                    type: "map",
                    schema: null,
                    * entries(n) {
                        if (e && t && n instanceof Map)
                            for (const [r, i] of n.entries()) yield [r, r, e], yield [r, i, t]
                    },
                    coercer: e => e instanceof Map ? new Map(e) : e,
                    validator: e => e instanceof Map || "Expected a `Map` object, but received: " + o(e)
                })
            }

            function q() {
                return m("never", () => !1)
            }

            function M(e) {
                return new Struct({
                    ...e,
                    validator: (t, n) => null === t || e.validator(t, n),
                    refiner: (t, n) => null === t || e.refiner(t, n)
                })
            }

            function C() {
                return m("number", e => "number" == typeof e && !isNaN(e) || "Expected a number, but received: " + o(e))
            }

            function I(e) {
                const t = e ? Object.keys(e) : [],
                    n = q();
                return new Struct({
                    type: "object",
                    schema: e || null,
                    * entries(i) {
                        if (e && r(i)) {
                            const r = new Set(Object.keys(i));
                            for (const n of t) r.delete(n), yield [n, i[n], e[n]];
                            for (const e of r) yield [e, i[e], n]
                        }
                    },
                    validator: e => r(e) || "Expected an object, but received: " + o(e),
                    coercer: e => r(e) ? {
                        ...e
                    } : e
                })
            }

            function R(e) {
                return new Struct({
                    ...e,
                    validator: (t, n) => void 0 === t || e.validator(t, n),
                    refiner: (t, n) => void 0 === t || e.refiner(t, n)
                })
            }

            function K(e, t) {
                return new Struct({
                    type: "record",
                    schema: null,
                    * entries(n) {
                        if (r(n))
                            for (const r in n) {
                                const i = n[r];
                                yield [r, r, e], yield [r, i, t]
                            }
                    },
                    validator: e => r(e) || "Expected an object, but received: " + o(e)
                })
            }

            function L() {
                return m("regexp", e => e instanceof RegExp)
            }

            function F(e) {
                return new Struct({
                    type: "set",
                    schema: null,
                    * entries(t) {
                        if (e && t instanceof Set)
                            for (const n of t) yield [n, n, e]
                    },
                    coercer: e => e instanceof Set ? new Set(e) : e,
                    validator: e => e instanceof Set || "Expected a `Set` object, but received: " + o(e)
                })
            }

            function V() {
                return m("string", e => "string" == typeof e || "Expected a string, but received: " + o(e))
            }

            function z(e) {
                const t = q();
                return new Struct({
                    type: "tuple",
                    schema: null,
                    * entries(n) {
                        if (Array.isArray(n)) {
                            const r = Math.max(e.length, n.length);
                            for (let i = 0; i < r; i++) yield [i, n[i], e[i] || t]
                        }
                    },
                    validator: e => Array.isArray(e) || "Expected an array, but received: " + o(e)
                })
            }

            function U(e) {
                const t = Object.keys(e);
                return new Struct({
                    type: "type",
                    schema: e,
                    * entries(n) {
                        if (r(n))
                            for (const r of t) yield [r, n[r], e[r]]
                    },
                    validator: e => r(e) || "Expected an object, but received: " + o(e)
                })
            }

            function X(e) {
                const t = e.map(e => e.type).join(" | ");
                return new Struct({
                    type: "union",
                    schema: null,
                    validator(n, r) {
                        const i = [];
                        for (const t of e) {
                            const [...e] = s(n, t, r), [o] = e;
                            if (!o[0]) return [];
                            for (const [t] of e) t && i.push(t)
                        }
                        return ["Expected the value to satisfy a union of `" + t + "`, but received: " + o(n), ...i]
                    }
                })
            }

            function G() {
                return m("unknown", () => !0)
            }

            function H(e, t, n) {
                return new Struct({
                    ...e,
                    coercer: (r, i) => d(r, t) ? e.coercer(n(r, i), i) : e.coercer(r, i)
                })
            }

            function J(e, t, n = {}) {
                return H(e, G(), e => {
                    const r = "function" == typeof t ? t() : t;
                    if (void 0 === e) return r;
                    if (!n.strict && i(e) && i(r)) {
                        const t = {
                            ...e
                        };
                        let n = !1;
                        for (const e in r) void 0 === t[e] && (t[e] = r[e], n = !0);
                        if (n) return t
                    }
                    return e
                })
            }

            function Z(e) {
                return H(e, V(), e => e.trim())
            }

            function Q(e) {
                const t = "Expected an empty " + e.type;
                return te(e, "empty", e => {
                    if (e instanceof Map || e instanceof Set) {
                        const {
                            size: n
                        } = e;
                        return 0 === n || t + " but received one with a size of `" + n + "`"
                    } {
                        const {
                            length: n
                        } = e;
                        return 0 === n || t + " but received one with a length of `" + n + "`"
                    }
                })
            }

            function W(e, t, n = {}) {
                const {
                    exclusive: r
                } = n;
                return te(e, "max", n => r ? n < t : n <= t || "Expected a " + e.type + " greater than " + (r ? "" : "or equal to ") + t + " but received `" + n + "`")
            }

            function Y(e, t, n = {}) {
                const {
                    exclusive: r
                } = n;
                return te(e, "min", n => r ? n > t : n >= t || "Expected a " + e.type + " greater than " + (r ? "" : "or equal to ") + t + " but received `" + n + "`")
            }

            function $(e, t) {
                return te(e, "pattern", n => t.test(n) || "Expected a " + e.type + " matching `/" + t.source + '/` but received "' + n + '"')
            }

            function ee(e, t, n = t) {
                const r = "Expected a " + e.type,
                    i = t === n ? "of `" + t + "`" : "between `" + t + "` and `" + n + "`";
                return te(e, "size", e => {
                    if ("number" == typeof e || e instanceof Date) return t <= e && e <= n || r + " " + i + " but received `" + e + "`";
                    if (e instanceof Map || e instanceof Set) {
                        const {
                            size: o
                        } = e;
                        return t <= o && o <= n || r + " with a size " + i + " but received one with a size of `" + o + "`"
                    } {
                        const {
                            length: o
                        } = e;
                        return t <= o && o <= n || r + " with a length " + i + " but received one with a length of `" + o + "`"
                    }
                })
            }

            function te(e, t, n) {
                return new Struct({
                    ...e,
                    * refiner(r, i) {
                        yield* e.refiner(r, i);
                        const o = a(n(r, i), i, e, r);
                        for (const e of o) yield {
                            ...e,
                            refinement: t
                        }
                    }
                })
            }
        },
        1e3: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.TransactionBase = void 0;
            var r, i = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                },
                o = function() {
                    function e(e, t) {
                        for (var n = 0; n < t.length; n++) {
                            var r = t[n];
                            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                        }
                    }
                    return function(t, n, r) {
                        return n && e(t.prototype, n), r && e(t, r), t
                    }
                }(),
                u = n(51),
                a = (r = u) && r.__esModule ? r : {
                    default: r
                },
                s = n(385),
                c = n(235);
            t.TransactionBase = function() {
                function e(t, n, r, o) {
                    if (function(e, t) {
                            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                        }(this, e), "string" != typeof o) throw new Error("Invalid passphrase provided to Transaction: expected a string but got a " + (void 0 === o ? "undefined" : i(o)));
                    this._networkPassphrase = o, this._tx = t, this._signatures = n, this._fee = r
                }
                return o(e, [{
                    key: "sign",
                    value: function() {
                        for (var e = this, t = this.hash(), n = arguments.length, r = Array(n), i = 0; i < n; i++) r[i] = arguments[i];
                        r.forEach((function(n) {
                            var r = n.signDecorated(t);
                            e.signatures.push(r)
                        }))
                    }
                }, {
                    key: "getKeypairSignature",
                    value: function(e) {
                        return e.sign(this.hash()).toString("base64")
                    }
                }, {
                    key: "addSignature",
                    value: function() {
                        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
                            t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "";
                        if (!t || "string" != typeof t) throw new Error("Invalid signature");
                        if (!e || "string" != typeof e) throw new Error("Invalid publicKey");
                        var n = void 0,
                            r = void 0,
                            i = Buffer.from(t, "base64");
                        try {
                            r = (n = c.Keypair.fromPublicKey(e)).signatureHint()
                        } catch (e) {
                            throw new Error("Invalid publicKey")
                        }
                        if (!n.verify(this.hash(), i)) throw new Error("Invalid signature");
                        this.signatures.push(new a.default.DecoratedSignature({
                            hint: r,
                            signature: i
                        }))
                    }
                }, {
                    key: "addDecoratedSignature",
                    value: function(e) {
                        this.signatures.push(e)
                    }
                }, {
                    key: "signHashX",
                    value: function(e) {
                        if ("string" == typeof e && (e = Buffer.from(e, "hex")), e.length > 64) throw new Error("preimage cannnot be longer than 64 bytes");
                        var t = e,
                            n = (0, s.hash)(e),
                            r = n.slice(n.length - 4);
                        this.signatures.push(new a.default.DecoratedSignature({
                            hint: r,
                            signature: t
                        }))
                    }
                }, {
                    key: "hash",
                    value: function() {
                        return (0, s.hash)(this.signatureBase())
                    }
                }, {
                    key: "signatureBase",
                    value: function() {
                        throw new Error("Implement in subclass")
                    }
                }, {
                    key: "toEnvelope",
                    value: function() {
                        throw new Error("Implement in subclass")
                    }
                }, {
                    key: "toXDR",
                    value: function() {
                        return this.toEnvelope().toXDR().toString("base64")
                    }
                }, {
                    key: "signatures",
                    get: function() {
                        return this._signatures
                    },
                    set: function(e) {
                        throw new Error("Transaction is immutable")
                    }
                }, {
                    key: "tx",
                    get: function() {
                        return this._tx
                    },
                    set: function(e) {
                        throw new Error("Transaction is immutable")
                    }
                }, {
                    key: "fee",
                    get: function() {
                        return this._fee
                    },
                    set: function(e) {
                        throw new Error("Transaction is immutable")
                    }
                }, {
                    key: "networkPassphrase",
                    get: function() {
                        return this._networkPassphrase
                    },
                    set: function(e) {
                        this._networkPassphrase = e
                    }
                }]), e
            }()
        },
        1001: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.Transaction = void 0;
            var r = function() {
                    function e(e, t) {
                        for (var n = 0; n < t.length; n++) {
                            var r = t[n];
                            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                        }
                    }
                    return function(t, n, r) {
                        return n && e(t.prototype, n), r && e(t, r), t
                    }
                }(),
                i = d(n(1402)),
                o = d(n(51)),
                u = n(385),
                a = n(154),
                s = n(1642),
                c = n(1004),
                l = n(1e3),
                f = n(213);

            function d(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }
            t.Transaction = function(e) {
                function t(e, n) {
                    if (function(e, t) {
                            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                        }(this, t), "string" == typeof e) {
                        var r = Buffer.from(e, "base64");
                        e = o.default.TransactionEnvelope.fromXDR(r)
                    }
                    var u = e.switch();
                    if (u !== o.default.EnvelopeType.envelopeTypeTxV0() && u !== o.default.EnvelopeType.envelopeTypeTx()) throw new Error("Invalid TransactionEnvelope: expected an envelopeTypeTxV0 or envelopeTypeTx but received an " + u.name + ".");
                    var c = e.value(),
                        l = c.tx(),
                        d = l.fee().toString(),
                        h = (c.signatures() || []).slice(),
                        p = function(e, t) {
                            if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                            return !t || "object" != typeof t && "function" != typeof t ? e : t
                        }(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, l, h, d, n));
                    switch (p._envelopeType = u, p._memo = l.memo(), p._sequence = l.seqNum().toString(), p._envelopeType) {
                        case o.default.EnvelopeType.envelopeTypeTxV0():
                            p._source = a.StrKey.encodeEd25519PublicKey(p.tx.sourceAccountEd25519());
                            break;
                        default:
                            p._source = (0, f.encodeMuxedAccountToAddress)(p.tx.sourceAccount())
                    }
                    var m = null,
                        y = null;
                    switch (p._envelopeType) {
                        case o.default.EnvelopeType.envelopeTypeTxV0():
                            y = l.timeBounds();
                            break;
                        case o.default.EnvelopeType.envelopeTypeTx():
                            switch (l.cond().switch()) {
                                case o.default.PreconditionType.precondTime():
                                    y = l.cond().timeBounds();
                                    break;
                                case o.default.PreconditionType.precondV2():
                                    y = (m = l.cond().v2()).timeBounds()
                            }
                    }
                    if (y && (p._timeBounds = {
                            minTime: y.minTime().toString(),
                            maxTime: y.maxTime().toString()
                        }), m) {
                        var v = m.ledgerBounds();
                        v && (p._ledgerBounds = {
                            minLedger: v.minLedger(),
                            maxLedger: v.maxLedger()
                        });
                        var g = m.minSeqNum();
                        g && (p._minAccountSequence = g.toString()), p._minAccountSequenceAge = m.minSeqAge(), p._minAccountSequenceLedgerGap = m.minSeqLedgerGap(), p._extraSigners = m.extraSigners()
                    }
                    var b = l.operations() || [];
                    return p._operations = (0, i.default)(b, (function(e) {
                        return s.Operation.fromXDRObject(e)
                    })), p
                }
                return function(e, t) {
                    if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
                    e.prototype = Object.create(t && t.prototype, {
                        constructor: {
                            value: e,
                            enumerable: !1,
                            writable: !0,
                            configurable: !0
                        }
                    }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
                }(t, e), r(t, [{
                    key: "signatureBase",
                    value: function() {
                        var e = this.tx;
                        this._envelopeType === o.default.EnvelopeType.envelopeTypeTxV0() && (e = o.default.Transaction.fromXDR(Buffer.concat([o.default.PublicKeyType.publicKeyTypeEd25519().toXDR(), e.toXDR()])));
                        var t = new o.default.TransactionSignaturePayloadTaggedTransaction.envelopeTypeTx(e);
                        return new o.default.TransactionSignaturePayload({
                            networkId: o.default.Hash.fromXDR((0, u.hash)(this.networkPassphrase)),
                            taggedTransaction: t
                        }).toXDR()
                    }
                }, {
                    key: "toEnvelope",
                    value: function() {
                        var e = this.tx.toXDR(),
                            t = this.signatures.slice(),
                            n = void 0;
                        switch (this._envelopeType) {
                            case o.default.EnvelopeType.envelopeTypeTxV0():
                                n = new o.default.TransactionEnvelope.envelopeTypeTxV0(new o.default.TransactionV0Envelope({
                                    tx: o.default.TransactionV0.fromXDR(e),
                                    signatures: t
                                }));
                                break;
                            case o.default.EnvelopeType.envelopeTypeTx():
                                n = new o.default.TransactionEnvelope.envelopeTypeTx(new o.default.TransactionV1Envelope({
                                    tx: o.default.Transaction.fromXDR(e),
                                    signatures: t
                                }));
                                break;
                            default:
                                throw new Error("Invalid TransactionEnvelope: expected an envelopeTypeTxV0 or envelopeTypeTx but received an " + this._envelopeType.name + ".")
                        }
                        return n
                    }
                }, {
                    key: "getClaimableBalanceId",
                    value: function(e) {
                        if (!Number.isInteger(e) || e < 0 || e >= this.operations.length) throw new RangeError("invalid operation index");
                        var t = this.operations[e];
                        try {
                            t = s.Operation.createClaimableBalance(t)
                        } catch (e) {
                            throw new TypeError("expected createClaimableBalance, got " + t.type + ": " + e)
                        }
                        var n = a.StrKey.decodeEd25519PublicKey((0, f.extractBaseAddress)(this.source)),
                            r = o.default.HashIdPreimage.envelopeTypeOpId(new o.default.HashIdPreimageOperationId({
                                sourceAccount: o.default.AccountId.publicKeyTypeEd25519(n),
                                seqNum: o.default.SequenceNumber.fromString(this.sequence),
                                opNum: e
                            })),
                            i = (0, u.hash)(r.toXDR("raw"));
                        return o.default.ClaimableBalanceId.claimableBalanceIdTypeV0(i).toXDR("hex")
                    }
                }, {
                    key: "timeBounds",
                    get: function() {
                        return this._timeBounds
                    },
                    set: function(e) {
                        throw new Error("Transaction is immutable")
                    }
                }, {
                    key: "ledgerBounds",
                    get: function() {
                        return this._ledgerBounds
                    },
                    set: function(e) {
                        throw new Error("Transaction is immutable")
                    }
                }, {
                    key: "minAccountSequence",
                    get: function() {
                        return this._minAccountSequence
                    },
                    set: function(e) {
                        throw new Error("Transaction is immutable")
                    }
                }, {
                    key: "minAccountSequenceAge",
                    get: function() {
                        return this._minAccountSequenceAge
                    },
                    set: function(e) {
                        throw new Error("Transaction is immutable")
                    }
                }, {
                    key: "minAccountSequenceLedgerGap",
                    get: function() {
                        return this._minAccountSequenceLedgerGap
                    },
                    set: function(e) {
                        throw new Error("Transaction is immutable")
                    }
                }, {
                    key: "extraSigners",
                    get: function() {
                        return this._extraSigners
                    },
                    set: function(e) {
                        throw new Error("Transaction is immutable")
                    }
                }, {
                    key: "sequence",
                    get: function() {
                        return this._sequence
                    },
                    set: function(e) {
                        throw new Error("Transaction is immutable")
                    }
                }, {
                    key: "source",
                    get: function() {
                        return this._source
                    },
                    set: function(e) {
                        throw new Error("Transaction is immutable")
                    }
                }, {
                    key: "operations",
                    get: function() {
                        return this._operations
                    },
                    set: function(e) {
                        throw new Error("Transaction is immutable")
                    }
                }, {
                    key: "memo",
                    get: function() {
                        return c.Memo.fromXDRObject(this._memo)
                    },
                    set: function(e) {
                        throw new Error("Transaction is immutable")
                    }
                }]), t
            }(l.TransactionBase)
        },
        1862: function(e, t, n) {
            n(3611);
            var r = function(e, t) {
                    return parseInt(e.slice(2 * t + 2, 2 * t + 4), 16)
                },
                i = function(e) {
                    return (e.length - 2) / 2
                },
                o = function(e) {
                    for (var t = [], n = 2, r = e.length; n < r; n += 2) t.push(parseInt(e.slice(n, n + 2), 16));
                    return t
                },
                u = function(e) {
                    for (var t = "0x", n = 0, r = e.length; n < r; ++n) {
                        var i = e[n];
                        t += (i < 16 ? "0" : "") + i.toString(16)
                    }
                    return t
                };
            e.exports = {
                random: function(e) {
                    var t = void 0;
                    t = "undefined" != typeof window && window.crypto && window.crypto.getRandomValues ? window.crypto.getRandomValues(new Uint8Array(e)) : n(24).randomBytes(e);
                    for (var r = "0x", i = 0; i < e; ++i) r += ("00" + t[i].toString(16)).slice(-2);
                    return r
                },
                length: i,
                concat: function(e, t) {
                    return e.concat(t.slice(2))
                },
                flatten: function(e) {
                    return "0x" + e.reduce((function(e, t) {
                        return e + t.slice(2)
                    }), "")
                },
                slice: function(e, t, n) {
                    return "0x" + n.slice(2 * e + 2, 2 * t + 2)
                },
                reverse: function(e) {
                    for (var t = "0x", n = 0, r = i(e); n < r; ++n) t += e.slice(2 * (r - n), 2 * (r - n + 1));
                    return t
                },
                pad: function e(t, n) {
                    return n.length === 2 * t + 2 ? n : e(t, "0x0" + n.slice(2))
                },
                padRight: function e(t, n) {
                    return n.length === 2 * t + 2 ? n : e(t, n + "0")
                },
                fromAscii: function(e) {
                    for (var t = "0x", n = 0; n < e.length; ++n) t += ("00" + e.charCodeAt(n).toString(16)).slice(-2);
                    return t
                },
                toAscii: function(e) {
                    for (var t = "", n = 2; n < e.length; n += 2) t += String.fromCharCode(parseInt(e.slice(n, n + 2), 16));
                    return t
                },
                fromString: function(e) {
                    for (var t = function(e) {
                            var t = e.toString(16);
                            return t.length < 2 ? "0" + t : t
                        }, n = "0x", r = 0; r != e.length; r++) {
                        var i = e.charCodeAt(r);
                        if (i < 128) n += t(i);
                        else {
                            if (i < 2048) n += t(i >> 6 | 192);
                            else {
                                if (i > 55295 && i < 56320) {
                                    if (++r == e.length) return null;
                                    var o = e.charCodeAt(r);
                                    if (o < 56320 || o > 57343) return null;
                                    n += t((i = 65536 + ((1023 & i) << 10) + (1023 & o)) >> 18 | 240), n += t(i >> 12 & 63 | 128)
                                } else n += t(i >> 12 | 224);
                                n += t(i >> 6 & 63 | 128)
                            }
                            n += t(63 & i | 128)
                        }
                    }
                    return n
                },
                toString: function(e) {
                    for (var t = "", n = 0, o = i(e); n < o;) {
                        var u = r(e, n++);
                        if (u > 127) {
                            if (u > 191 && u < 224) {
                                if (n >= o) return null;
                                u = (31 & u) << 6 | 63 & r(e, n)
                            } else if (u > 223 && u < 240) {
                                if (n + 1 >= o) return null;
                                u = (15 & u) << 12 | (63 & r(e, n)) << 6 | 63 & r(e, ++n)
                            } else {
                                if (!(u > 239 && u < 248)) return null;
                                if (n + 2 >= o) return null;
                                u = (7 & u) << 18 | (63 & r(e, n)) << 12 | (63 & r(e, ++n)) << 6 | 63 & r(e, ++n)
                            }++n
                        }
                        if (u <= 65535) t += String.fromCharCode(u);
                        else {
                            if (!(u <= 1114111)) return null;
                            u -= 65536, t += String.fromCharCode(u >> 10 | 55296), t += String.fromCharCode(1023 & u | 56320)
                        }
                    }
                    return t
                },
                fromNumber: function(e) {
                    var t = e.toString(16);
                    return t.length % 2 == 0 ? "0x" + t : "0x0" + t
                },
                toNumber: function(e) {
                    return parseInt(e.slice(2), 16)
                },
                fromNat: function(e) {
                    return "0x0" === e ? "0x" : e.length % 2 == 0 ? e : "0x0" + e.slice(2)
                },
                toNat: function(e) {
                    return "0" === e[2] ? "0x" + e.slice(3) : e
                },
                fromArray: u,
                toArray: o,
                fromUint8Array: function(e) {
                    return u([].slice.call(e, 0))
                },
                toUint8Array: function(e) {
                    return new Uint8Array(o(e))
                }
            }
        },
        213: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.decodeAddressToMuxedAccount = a, t.encodeMuxedAccountToAddress = s, t.encodeMuxedAccount = function(e, t) {
                if (!o.StrKey.isValidEd25519PublicKey(e)) throw new Error("address should be a Stellar account ID (G...)");
                if (!(0, r.default)(t)) throw new Error("id should be a string representing a number (uint64)");
                return i.default.MuxedAccount.keyTypeMuxedEd25519(new i.default.MuxedAccountMed25519({
                    id: i.default.Uint64.fromString(t),
                    ed25519: o.StrKey.decodeEd25519PublicKey(e)
                }))
            }, t.extractBaseAddress = function(e) {
                if (o.StrKey.isValidEd25519PublicKey(e)) return e;
                if (!o.StrKey.isValidMed25519PublicKey(e)) throw new TypeError("expected muxed account (M...), got " + e);
                var t = a(e);
                return o.StrKey.encodeEd25519PublicKey(t.med25519().ed25519())
            };
            var r = u(n(161)),
                i = u(n(51)),
                o = n(154);

            function u(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }

            function a(e) {
                return o.StrKey.isValidMed25519PublicKey(e) ? function(e) {
                    var t = o.StrKey.decodeMed25519PublicKey(e);
                    return i.default.MuxedAccount.keyTypeMuxedEd25519(new i.default.MuxedAccountMed25519({
                        id: i.default.Uint64.fromXDR(t.slice(-8)),
                        ed25519: t.slice(0, -8)
                    }))
                }(e) : i.default.MuxedAccount.keyTypeEd25519(o.StrKey.decodeEd25519PublicKey(e))
            }

            function s(e) {
                return e.switch().value === i.default.CryptoKeyType.keyTypeMuxedEd25519().value ? function(e) {
                    if (e.switch() === i.default.CryptoKeyType.keyTypeEd25519()) return s(e);
                    var t = e.med25519();
                    return o.StrKey.encodeMed25519PublicKey(Buffer.concat([t.ed25519(), t.id().toXDR("raw")]))
                }(e) : o.StrKey.encodeEd25519PublicKey(e.ed25519())
            }
        },
        2344: function(e, t, n) {
            var r = n(2345);
            e.exports = function(e) {
                return "string" != typeof e ? e : r(e) ? e.slice(2) : e
            }
        },
        283: function(e, t, n) {
            "use strict";
            var r = n(21).Buffer,
                i = r.isEncoding || function(e) {
                    switch ((e = "" + e) && e.toLowerCase()) {
                        case "hex":
                        case "utf8":
                        case "utf-8":
                        case "ascii":
                        case "binary":
                        case "base64":
                        case "ucs2":
                        case "ucs-2":
                        case "utf16le":
                        case "utf-16le":
                        case "raw":
                            return !0;
                        default:
                            return !1
                    }
                };

            function o(e) {
                var t;
                switch (this.encoding = function(e) {
                        var t = function(e) {
                            if (!e) return "utf8";
                            for (var t;;) switch (e) {
                                case "utf8":
                                case "utf-8":
                                    return "utf8";
                                case "ucs2":
                                case "ucs-2":
                                case "utf16le":
                                case "utf-16le":
                                    return "utf16le";
                                case "latin1":
                                case "binary":
                                    return "latin1";
                                case "base64":
                                case "ascii":
                                case "hex":
                                    return e;
                                default:
                                    if (t) return;
                                    e = ("" + e).toLowerCase(), t = !0
                            }
                        }(e);
                        if ("string" != typeof t && (r.isEncoding === i || !i(e))) throw new Error("Unknown encoding: " + e);
                        return t || e
                    }(e), this.encoding) {
                    case "utf16le":
                        this.text = s, this.end = c, t = 4;
                        break;
                    case "utf8":
                        this.fillLast = a, t = 4;
                        break;
                    case "base64":
                        this.text = l, this.end = f, t = 3;
                        break;
                    default:
                        return this.write = d, void(this.end = h)
                }
                this.lastNeed = 0, this.lastTotal = 0, this.lastChar = r.allocUnsafe(t)
            }

            function u(e) {
                return e <= 127 ? 0 : e >> 5 == 6 ? 2 : e >> 4 == 14 ? 3 : e >> 3 == 30 ? 4 : e >> 6 == 2 ? -1 : -2
            }

            function a(e) {
                var t = this.lastTotal - this.lastNeed,
                    n = function(e, t, n) {
                        if (128 != (192 & t[0])) return e.lastNeed = 0, "�";
                        if (e.lastNeed > 1 && t.length > 1) {
                            if (128 != (192 & t[1])) return e.lastNeed = 1, "�";
                            if (e.lastNeed > 2 && t.length > 2 && 128 != (192 & t[2])) return e.lastNeed = 2, "�"
                        }
                    }(this, e);
                return void 0 !== n ? n : this.lastNeed <= e.length ? (e.copy(this.lastChar, t, 0, this.lastNeed), this.lastChar.toString(this.encoding, 0, this.lastTotal)) : (e.copy(this.lastChar, t, 0, e.length), void(this.lastNeed -= e.length))
            }

            function s(e, t) {
                if ((e.length - t) % 2 == 0) {
                    var n = e.toString("utf16le", t);
                    if (n) {
                        var r = n.charCodeAt(n.length - 1);
                        if (r >= 55296 && r <= 56319) return this.lastNeed = 2, this.lastTotal = 4, this.lastChar[0] = e[e.length - 2], this.lastChar[1] = e[e.length - 1], n.slice(0, -1)
                    }
                    return n
                }
                return this.lastNeed = 1, this.lastTotal = 2, this.lastChar[0] = e[e.length - 1], e.toString("utf16le", t, e.length - 1)
            }

            function c(e) {
                var t = e && e.length ? this.write(e) : "";
                if (this.lastNeed) {
                    var n = this.lastTotal - this.lastNeed;
                    return t + this.lastChar.toString("utf16le", 0, n)
                }
                return t
            }

            function l(e, t) {
                var n = (e.length - t) % 3;
                return 0 === n ? e.toString("base64", t) : (this.lastNeed = 3 - n, this.lastTotal = 3, 1 === n ? this.lastChar[0] = e[e.length - 1] : (this.lastChar[0] = e[e.length - 2], this.lastChar[1] = e[e.length - 1]), e.toString("base64", t, e.length - n))
            }

            function f(e) {
                var t = e && e.length ? this.write(e) : "";
                return this.lastNeed ? t + this.lastChar.toString("base64", 0, 3 - this.lastNeed) : t
            }

            function d(e) {
                return e.toString(this.encoding)
            }

            function h(e) {
                return e && e.length ? this.write(e) : ""
            }
            t.StringDecoder = o, o.prototype.write = function(e) {
                if (0 === e.length) return "";
                var t, n;
                if (this.lastNeed) {
                    if (void 0 === (t = this.fillLast(e))) return "";
                    n = this.lastNeed, this.lastNeed = 0
                } else n = 0;
                return n < e.length ? t ? t + this.text(e, n) : this.text(e, n) : t || ""
            }, o.prototype.end = function(e) {
                var t = e && e.length ? this.write(e) : "";
                return this.lastNeed ? t + "�" : t
            }, o.prototype.text = function(e, t) {
                var n = function(e, t, n) {
                    var r = t.length - 1;
                    if (r < n) return 0;
                    var i = u(t[r]);
                    if (i >= 0) return i > 0 && (e.lastNeed = i - 1), i;
                    if (--r < n || -2 === i) return 0;
                    if ((i = u(t[r])) >= 0) return i > 0 && (e.lastNeed = i - 2), i;
                    if (--r < n || -2 === i) return 0;
                    if ((i = u(t[r])) >= 0) return i > 0 && (2 === i ? i = 0 : e.lastNeed = i - 3), i;
                    return 0
                }(this, e, t);
                if (!this.lastNeed) return e.toString("utf8", t);
                this.lastTotal = n;
                var r = e.length - (n - this.lastNeed);
                return e.copy(this.lastChar, 0, r), e.toString("utf8", t, r)
            }, o.prototype.fillLast = function(e) {
                if (this.lastNeed <= e.length) return e.copy(this.lastChar, this.lastTotal - this.lastNeed, 0, this.lastNeed), this.lastChar.toString(this.encoding, 0, this.lastTotal);
                e.copy(this.lastChar, this.lastTotal - this.lastNeed, 0, e.length), this.lastNeed -= e.length
            }
        },
        2841: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.verifyChecksum = function(e, t) {
                if (e.length !== t.length) return !1;
                if (0 === e.length) return !0;
                for (var n = 0; n < e.length; n += 1)
                    if (e[n] !== t[n]) return !1;
                return !0
            }
        },
        2842: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var r = function(e, t) {
                if (Array.isArray(e)) return e;
                if (Symbol.iterator in Object(e)) return function(e, t) {
                    var n = [],
                        r = !0,
                        i = !1,
                        o = void 0;
                    try {
                        for (var u, a = e[Symbol.iterator](); !(r = (u = a.next()).done) && (n.push(u.value), !t || n.length !== t); r = !0);
                    } catch (e) {
                        i = !0, o = e
                    } finally {
                        try {
                            !r && a.return && a.return()
                        } finally {
                            if (i) throw o
                        }
                    }
                    return n
                }(e, t);
                throw new TypeError("Invalid attempt to destructure non-iterable instance")
            };
            t.best_r = function(e) {
                var t = new u.default(e),
                    n = void 0,
                    i = void 0,
                    o = [
                        [new u.default(0), new u.default(1)],
                        [new u.default(1), new u.default(0)]
                    ],
                    a = 2;
                for (; !t.gt(2147483647);) {
                    n = t.floor(), i = t.sub(n);
                    var s = n.mul(o[a - 1][0]).add(o[a - 2][0]),
                        c = n.mul(o[a - 1][1]).add(o[a - 2][1]);
                    if (s.gt(2147483647) || c.gt(2147483647)) break;
                    if (o.push([s, c]), i.eq(0)) break;
                    t = new u.default(1).div(i), a += 1
                }
                var l = r(o[o.length - 1], 2),
                    f = l[0],
                    d = l[1];
                if (f.isZero() || d.isZero()) throw new Error("Couldn't find approximation");
                return [f.toNumber(), d.toNumber()]
            };
            var i, o = n(285),
                u = (i = o) && i.__esModule ? i : {
                    default: i
                }
        },
        2867: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.TransactionBuilder = t.TimeoutInfinite = t.BASE_FEE = void 0;
            var r = function() {
                function e(e, t) {
                    for (var n = 0; n < t.length; n++) {
                        var r = t[n];
                        r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                    }
                }
                return function(t, n, r) {
                    return n && e(t.prototype, n), r && e(t, r), t
                }
            }();
            t.isValidDate = b;
            var i = n(252),
                o = y(n(285)),
                u = y(n(323)),
                a = y(n(140)),
                s = y(n(161)),
                c = y(n(110)),
                l = y(n(51)),
                f = n(1001),
                d = n(1645),
                h = n(1646),
                p = n(1004),
                m = n(213);

            function y(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }

            function v(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }
            var g = t.BASE_FEE = "100";
            t.TimeoutInfinite = 0, t.TransactionBuilder = function() {
                function e(t) {
                    var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                    if (v(this, e), !t) throw new Error("must specify source account for the transaction");
                    if ((0, a.default)(n.fee)) throw new Error("must specify fee for the transaction (in stroops)");
                    this.source = t, this.operations = [], this.baseFee = n.fee, this.timebounds = (0, u.default)(n.timebounds) || null, this.ledgerbounds = (0, u.default)(n.ledgerbounds) || null, this.minAccountSequence = n.minAccountSequence || null, this.minAccountSequenceAge = n.minAccountSequenceAge || null, this.minAccountSequenceLedgerGap = n.minAccountSequenceLedgerGap || null, this.extraSigners = (0, u.default)(n.extraSigners) || null, this.memo = n.memo || p.Memo.none(), this.networkPassphrase = n.networkPassphrase || null
                }
                return r(e, [{
                    key: "addOperation",
                    value: function(e) {
                        return this.operations.push(e), this
                    }
                }, {
                    key: "addMemo",
                    value: function(e) {
                        return this.memo = e, this
                    }
                }, {
                    key: "setTimeout",
                    value: function(e) {
                        if (null !== this.timebounds && this.timebounds.maxTime > 0) throw new Error("TimeBounds.max_time has been already set - setting timeout would overwrite it.");
                        if (e < 0) throw new Error("timeout cannot be negative");
                        if (e > 0) {
                            var t = Math.floor(Date.now() / 1e3) + e;
                            null === this.timebounds ? this.timebounds = {
                                minTime: 0,
                                maxTime: t
                            } : this.timebounds = {
                                minTime: this.timebounds.minTime,
                                maxTime: t
                            }
                        } else this.timebounds = {
                            minTime: 0,
                            maxTime: 0
                        };
                        return this
                    }
                }, {
                    key: "setTimebounds",
                    value: function(e, t) {
                        if ("number" == typeof e && (e = new Date(1e3 * e)), "number" == typeof t && (t = new Date(1e3 * t)), null !== this.timebounds) throw new Error("TimeBounds has been already set - setting timebounds would overwrite it.");
                        var n = Math.floor(e.valueOf() / 1e3),
                            r = Math.floor(t.valueOf() / 1e3);
                        if (n < 0) throw new Error("min_time cannot be negative");
                        if (r < 0) throw new Error("max_time cannot be negative");
                        if (r > 0 && n > r) throw new Error("min_time cannot be greater than max_time");
                        return this.timebounds = {
                            minTime: n,
                            maxTime: r
                        }, this
                    }
                }, {
                    key: "setLedgerbounds",
                    value: function(e, t) {
                        if (null !== this.ledgerbounds) throw new Error("LedgerBounds has been already set - setting ledgerbounds would overwrite it.");
                        if (e < 0) throw new Error("min_ledger cannot be negative");
                        if (t < 0) throw new Error("max_ledger cannot be negative");
                        if (t > 0 && e > t) throw new Error("min_ledger cannot be greater than max_ledger");
                        return this.ledgerbounds = {
                            minLedger: e,
                            maxLedger: t
                        }, this
                    }
                }, {
                    key: "setMinAccountSequence",
                    value: function(e) {
                        if (null !== this.minAccountSequence) throw new Error("min_account_sequence has been already set - setting min_account_sequence would overwrite it.");
                        return this.minAccountSequence = e, this
                    }
                }, {
                    key: "setMinAccountSequenceAge",
                    value: function(e) {
                        if ("number" != typeof e) throw new Error("min_account_sequence_age must be a number");
                        if (null !== this.minAccountSequenceAge) throw new Error("min_account_sequence_age has been already set - setting min_account_sequence_age would overwrite it.");
                        if (e < 0) throw new Error("min_account_sequence_age cannot be negative");
                        return this.minAccountSequenceAge = e, this
                    }
                }, {
                    key: "setMinAccountSequenceLedgerGap",
                    value: function(e) {
                        if (null !== this.minAccountSequenceLedgerGap) throw new Error("min_account_sequence_ledger_gap has been already set - setting min_account_sequence_ledger_gap would overwrite it.");
                        if (e < 0) throw new Error("min_account_sequence_ledger_gap cannot be negative");
                        return this.minAccountSequenceLedgerGap = e, this
                    }
                }, {
                    key: "setExtraSigners",
                    value: function(e) {
                        if (!(0, c.default)(e)) throw new Error("extra_signers must be an array of strings.");
                        if (null !== this.extraSigners) throw new Error("extra_signers has been already set - setting extra_signers would overwrite it.");
                        if (e.length > 2) throw new Error("extra_signers cannot be longer than 2 elements.");
                        return this.extraSigners = (0, u.default)(e), this
                    }
                }, {
                    key: "setNetworkPassphrase",
                    value: function(e) {
                        return this.networkPassphrase = e, this
                    }
                }, {
                    key: "build",
                    value: function() {
                        var e = new o.default(this.source.sequenceNumber()).add(1),
                            t = {
                                fee: new o.default(this.baseFee).mul(this.operations.length).toNumber(),
                                seqNum: l.default.SequenceNumber.fromString(e.toString()),
                                memo: this.memo ? this.memo.toXDRObject() : null
                            };
                        if (null === this.timebounds || void 0 === this.timebounds.minTime || void 0 === this.timebounds.maxTime) throw new Error("TimeBounds has to be set or you must call setTimeout(TimeoutInfinite).");
                        b(this.timebounds.minTime) && (this.timebounds.minTime = this.timebounds.minTime.getTime() / 1e3), b(this.timebounds.maxTime) && (this.timebounds.maxTime = this.timebounds.maxTime.getTime() / 1e3), this.timebounds.minTime = i.UnsignedHyper.fromString(this.timebounds.minTime.toString()), this.timebounds.maxTime = i.UnsignedHyper.fromString(this.timebounds.maxTime.toString());
                        var n = new l.default.TimeBounds(this.timebounds);
                        if (this.hasV2Preconditions()) {
                            var r = null;
                            null !== this.ledgerbounds && (r = new l.default.LedgerBounds(this.ledgerbounds));
                            var u = this.minAccountSequence || "0";
                            u = l.default.SequenceNumber.fromString(u);
                            var a = i.UnsignedHyper.fromString(null !== this.minAccountSequenceAge ? this.minAccountSequenceAge.toString() : "0"),
                                s = this.minAccountSequenceLedgerGap || 0,
                                c = null !== this.extraSigners ? this.extraSigners.map(h.SignerKey.decodeAddress) : [];
                            t.cond = l.default.Preconditions.precondV2(new l.default.PreconditionsV2({
                                timeBounds: n,
                                ledgerBounds: r,
                                minSeqNum: u,
                                minSeqAge: a,
                                minSeqLedgerGap: s,
                                extraSigners: c
                            }))
                        } else t.cond = l.default.Preconditions.precondTime(n);
                        t.sourceAccount = (0, m.decodeAddressToMuxedAccount)(this.source.accountId()), t.ext = new l.default.TransactionExt(0);
                        var d = new l.default.Transaction(t);
                        d.operations(this.operations);
                        var p = new l.default.TransactionEnvelope.envelopeTypeTx(new l.default.TransactionV1Envelope({
                                tx: d
                            })),
                            y = new f.Transaction(p, this.networkPassphrase);
                        return this.source.incrementSequenceNumber(), y
                    }
                }, {
                    key: "hasV2Preconditions",
                    value: function() {
                        return null !== this.ledgerbounds || null !== this.minAccountSequence || null !== this.minAccountSequenceAge || null !== this.minAccountSequenceLedgerGap || null !== this.extraSigners && this.extraSigners.length > 0
                    }
                }], [{
                    key: "buildFeeBumpTransaction",
                    value: function(e, t, n, r) {
                        var i = n.operations.length,
                            u = new o.default(n.fee).div(i),
                            a = new o.default(t);
                        if (a.lessThan(u)) throw new Error("Invalid baseFee, it should be at least " + u + " stroops.");
                        var c = new o.default(g);
                        if (a.lessThan(c)) throw new Error("Invalid baseFee, it should be at least " + c + " stroops.");
                        var f = n.toEnvelope();
                        if (f.switch() === l.default.EnvelopeType.envelopeTypeTxV0()) {
                            var h = f.v0().tx(),
                                p = new l.default.Transaction({
                                    sourceAccount: new l.default.MuxedAccount.keyTypeEd25519(h.sourceAccountEd25519()),
                                    fee: h.fee(),
                                    seqNum: h.seqNum(),
                                    cond: l.default.Preconditions.precondTime(h.timeBounds()),
                                    memo: h.memo(),
                                    operations: h.operations(),
                                    ext: new l.default.TransactionExt(0)
                                });
                            f = new l.default.TransactionEnvelope.envelopeTypeTx(new l.default.TransactionV1Envelope({
                                tx: p,
                                signatures: f.v0().signatures()
                            }))
                        }
                        var y = void 0;
                        y = (0, s.default)(e) ? (0, m.decodeAddressToMuxedAccount)(e) : e.xdrMuxedAccount();
                        var v = new l.default.FeeBumpTransaction({
                                feeSource: y,
                                fee: l.default.Int64.fromString(a.mul(i + 1).toString()),
                                innerTx: l.default.FeeBumpTransactionInnerTx.envelopeTypeTx(f.v1()),
                                ext: new l.default.FeeBumpTransactionExt(0)
                            }),
                            b = new l.default.FeeBumpTransactionEnvelope({
                                tx: v,
                                signatures: []
                            }),
                            w = new l.default.TransactionEnvelope.envelopeTypeTxFeeBump(b);
                        return new d.FeeBumpTransaction(w, r)
                    }
                }, {
                    key: "fromXDR",
                    value: function(e, t) {
                        return "string" == typeof e && (e = l.default.TransactionEnvelope.fromXDR(e, "base64")), e.switch() === l.default.EnvelopeType.envelopeTypeTxFeeBump() ? new d.FeeBumpTransaction(e, t) : new f.Transaction(e, t)
                    }
                }]), e
            }();

            function b(e) {
                return e instanceof Date && !isNaN(e)
            }
        },
        3036: function(e, t, n) {
            var r = n(43),
                i = n(145),
                o = n(1400).StringDecoder;

            function u(e, t) {
                if (!(this instanceof u)) return new u(e, t);
                i.call(this), null == e && (e = "utf8"), this.readable = this.writable = !0, this.paused = !1, this.toEncoding = null == t ? e : t, this.fromEncoding = null == t ? "" : e, this.decoder = new a(this.toEncoding)
            }

            function a(e) {
                switch (o.call(this, e), this.encoding) {
                    case "base64":
                        this.write = s, this.alignedBuffer = new Buffer(3), this.alignedBytes = 0
                }
            }

            function s(e) {
                var t = (this.alignedBytes + e.length) % this.alignedBuffer.length;
                if (!t && !this.alignedBytes) return e.toString(this.encoding);
                var n = new Buffer(this.alignedBytes + e.length - t);
                return this.alignedBuffer.copy(n, 0, 0, this.alignedBytes), e.copy(n, this.alignedBytes, 0, e.length - t), e.copy(this.alignedBuffer, 0, e.length - t, e.length), this.alignedBytes = t, n.toString(this.encoding)
            }
            e.exports = u, e.exports.AlignedStringDecoder = a, r.inherits(u, i), u.prototype.write = function(e) {
                if (!this.writable) {
                    var t = new Error("stream not writable");
                    return t.code = "EPIPE", this.emit("error", t), !1
                }
                this.fromEncoding && ((Buffer.isBuffer(e) || "number" == typeof e) && (e = e.toString()), e = new Buffer(e, this.fromEncoding));
                var n = this.decoder.write(e);
                return n.length && this.emit("data", n), !this.paused
            }, u.prototype.flush = function() {
                if (this.decoder.flush) {
                    var e = this.decoder.flush();
                    e.length && this.emit("data", e)
                }
            }, u.prototype.end = function() {
                (this.writable || this.readable) && (this.flush(), this.emit("end"), this.writable = this.readable = !1, this.destroy())
            }, u.prototype.destroy = function() {
                this.decoder = null, this.writable = this.readable = !1, this.emit("close")
            }, u.prototype.pause = function() {
                this.paused = !0
            }, u.prototype.resume = function() {
                this.paused && this.emit("drain"), this.paused = !1
            }, r.inherits(a, o), a.prototype.flush = function() {
                if (!this.alignedBuffer || !this.alignedBytes) return "";
                var e = this.alignedBuffer.toString(this.encoding, 0, this.alignedBytes);
                return this.alignedBytes = 0, e
            }
        },
        3598: function(e, t, n) {
            var r = function() {
                    throw "This swarm.js function isn't available on the browser."
                },
                i = {
                    readFile: r
                },
                o = {
                    download: r,
                    safeDownloadArchived: r,
                    directoryTree: r
                },
                u = {
                    platform: r,
                    arch: r
                },
                a = {
                    join: r,
                    slice: r
                },
                s = {
                    spawn: r
                },
                c = {
                    lookup: r
                },
                l = n(3599),
                f = n(1862),
                d = n(3612),
                h = n(3614),
                p = n(3615);
            e.exports = p({
                fs: i,
                files: o,
                os: u,
                path: a,
                child_process: s,
                defaultArchives: {},
                mimetype: c,
                request: l,
                downloadUrl: null,
                bytes: f,
                hash: d,
                pick: h
            })
        },
        3601: function(e, t, n) {
            "use strict";
            e.exports = function(e) {
                return encodeURIComponent(e).replace(/[!'()*]/g, (function(e) {
                    return "%" + e.charCodeAt(0).toString(16).toUpperCase()
                }))
            }
        },
        3611: function(e, t) {
            var n = function(e, t) {
                for (var n = [], r = 0; r < e; ++r) n.push(t(r));
                return n
            };
            e.exports = {
                generate: n,
                replicate: function(e, t) {
                    return n(e, (function() {
                        return t
                    }))
                },
                concat: function(e, t) {
                    return e.concat(t)
                },
                flatten: function(e) {
                    for (var t = [], n = 0, r = e.length; n < r; ++n)
                        for (var i = 0, o = e[n].length; i < o; ++i) t.push(e[n][i]);
                    return t
                },
                chunksOf: function(e, t) {
                    for (var n = [], r = 0, i = t.length; r < i; r += e) n.push(t.slice(r, r + e));
                    return n
                }
            }
        },
        3612: function(e, t, n) {
            var r = n(3613).keccak256,
                i = n(1862),
                o = function(e, t) {
                    var n = i.reverse(i.pad(6, i.fromNumber(e))),
                        o = i.flatten([n, "0x0000", t]);
                    return r(o).slice(2)
                };
            e.exports = function e(t) {
                "string" == typeof t && "0x" !== t.slice(0, 2) ? t = i.fromString(t) : "string" != typeof t && void 0 !== t.length && (t = i.fromUint8Array(t));
                var n = i.length(t);
                if (n <= 4096) return o(n, t);
                for (var r = 4096; 128 * r < n;) r *= 128;
                for (var u = [], a = 0; a < n; a += r) {
                    var s = r < n - a ? r : n - a;
                    u.push(e(i.slice(t, a, a + s)))
                }
                return o(n, i.flatten(u))
            }
        },
        3613: function(e, t) {
            var n = "0123456789abcdef".split(""),
                r = [1, 256, 65536, 16777216],
                i = [0, 8, 16, 24],
                o = [1, 0, 32898, 0, 32906, 2147483648, 2147516416, 2147483648, 32907, 0, 2147483649, 0, 2147516545, 2147483648, 32777, 2147483648, 138, 0, 136, 0, 2147516425, 0, 2147483658, 0, 2147516555, 0, 139, 2147483648, 32905, 2147483648, 32771, 2147483648, 32770, 2147483648, 128, 2147483648, 32778, 0, 2147483658, 2147483648, 2147516545, 2147483648, 32896, 2147483648, 2147483649, 0, 2147516424, 2147483648],
                u = function(e) {
                    var t, n, r, i, u, a, s, c, l, f, d, h, p, m, y, v, g, b, w, T, x, S, _, E, k, A, P, j, B, O, D, N, q, M, C, I, R, K, L, F, V, z, U, X, G, H, J, Z, Q, W, Y, $, ee, te, ne, re, ie, oe, ue, ae, se, ce, le;
                    for (r = 0; r < 48; r += 2) i = e[0] ^ e[10] ^ e[20] ^ e[30] ^ e[40], u = e[1] ^ e[11] ^ e[21] ^ e[31] ^ e[41], a = e[2] ^ e[12] ^ e[22] ^ e[32] ^ e[42], s = e[3] ^ e[13] ^ e[23] ^ e[33] ^ e[43], c = e[4] ^ e[14] ^ e[24] ^ e[34] ^ e[44], l = e[5] ^ e[15] ^ e[25] ^ e[35] ^ e[45], f = e[6] ^ e[16] ^ e[26] ^ e[36] ^ e[46], d = e[7] ^ e[17] ^ e[27] ^ e[37] ^ e[47], t = (h = e[8] ^ e[18] ^ e[28] ^ e[38] ^ e[48]) ^ (a << 1 | s >>> 31), n = (p = e[9] ^ e[19] ^ e[29] ^ e[39] ^ e[49]) ^ (s << 1 | a >>> 31), e[0] ^= t, e[1] ^= n, e[10] ^= t, e[11] ^= n, e[20] ^= t, e[21] ^= n, e[30] ^= t, e[31] ^= n, e[40] ^= t, e[41] ^= n, t = i ^ (c << 1 | l >>> 31), n = u ^ (l << 1 | c >>> 31), e[2] ^= t, e[3] ^= n, e[12] ^= t, e[13] ^= n, e[22] ^= t, e[23] ^= n, e[32] ^= t, e[33] ^= n, e[42] ^= t, e[43] ^= n, t = a ^ (f << 1 | d >>> 31), n = s ^ (d << 1 | f >>> 31), e[4] ^= t, e[5] ^= n, e[14] ^= t, e[15] ^= n, e[24] ^= t, e[25] ^= n, e[34] ^= t, e[35] ^= n, e[44] ^= t, e[45] ^= n, t = c ^ (h << 1 | p >>> 31), n = l ^ (p << 1 | h >>> 31), e[6] ^= t, e[7] ^= n, e[16] ^= t, e[17] ^= n, e[26] ^= t, e[27] ^= n, e[36] ^= t, e[37] ^= n, e[46] ^= t, e[47] ^= n, t = f ^ (i << 1 | u >>> 31), n = d ^ (u << 1 | i >>> 31), e[8] ^= t, e[9] ^= n, e[18] ^= t, e[19] ^= n, e[28] ^= t, e[29] ^= n, e[38] ^= t, e[39] ^= n, e[48] ^= t, e[49] ^= n, m = e[0], y = e[1], H = e[11] << 4 | e[10] >>> 28, J = e[10] << 4 | e[11] >>> 28, j = e[20] << 3 | e[21] >>> 29, B = e[21] << 3 | e[20] >>> 29, ae = e[31] << 9 | e[30] >>> 23, se = e[30] << 9 | e[31] >>> 23, z = e[40] << 18 | e[41] >>> 14, U = e[41] << 18 | e[40] >>> 14, M = e[2] << 1 | e[3] >>> 31, C = e[3] << 1 | e[2] >>> 31, v = e[13] << 12 | e[12] >>> 20, g = e[12] << 12 | e[13] >>> 20, Z = e[22] << 10 | e[23] >>> 22, Q = e[23] << 10 | e[22] >>> 22, O = e[33] << 13 | e[32] >>> 19, D = e[32] << 13 | e[33] >>> 19, ce = e[42] << 2 | e[43] >>> 30, le = e[43] << 2 | e[42] >>> 30, te = e[5] << 30 | e[4] >>> 2, ne = e[4] << 30 | e[5] >>> 2, I = e[14] << 6 | e[15] >>> 26, R = e[15] << 6 | e[14] >>> 26, b = e[25] << 11 | e[24] >>> 21, w = e[24] << 11 | e[25] >>> 21, W = e[34] << 15 | e[35] >>> 17, Y = e[35] << 15 | e[34] >>> 17, N = e[45] << 29 | e[44] >>> 3, q = e[44] << 29 | e[45] >>> 3, E = e[6] << 28 | e[7] >>> 4, k = e[7] << 28 | e[6] >>> 4, re = e[17] << 23 | e[16] >>> 9, ie = e[16] << 23 | e[17] >>> 9, K = e[26] << 25 | e[27] >>> 7, L = e[27] << 25 | e[26] >>> 7, T = e[36] << 21 | e[37] >>> 11, x = e[37] << 21 | e[36] >>> 11, $ = e[47] << 24 | e[46] >>> 8, ee = e[46] << 24 | e[47] >>> 8, X = e[8] << 27 | e[9] >>> 5, G = e[9] << 27 | e[8] >>> 5, A = e[18] << 20 | e[19] >>> 12, P = e[19] << 20 | e[18] >>> 12, oe = e[29] << 7 | e[28] >>> 25, ue = e[28] << 7 | e[29] >>> 25, F = e[38] << 8 | e[39] >>> 24, V = e[39] << 8 | e[38] >>> 24, S = e[48] << 14 | e[49] >>> 18, _ = e[49] << 14 | e[48] >>> 18, e[0] = m ^ ~v & b, e[1] = y ^ ~g & w, e[10] = E ^ ~A & j, e[11] = k ^ ~P & B, e[20] = M ^ ~I & K, e[21] = C ^ ~R & L, e[30] = X ^ ~H & Z, e[31] = G ^ ~J & Q, e[40] = te ^ ~re & oe, e[41] = ne ^ ~ie & ue, e[2] = v ^ ~b & T, e[3] = g ^ ~w & x, e[12] = A ^ ~j & O, e[13] = P ^ ~B & D, e[22] = I ^ ~K & F, e[23] = R ^ ~L & V, e[32] = H ^ ~Z & W, e[33] = J ^ ~Q & Y, e[42] = re ^ ~oe & ae, e[43] = ie ^ ~ue & se, e[4] = b ^ ~T & S, e[5] = w ^ ~x & _, e[14] = j ^ ~O & N, e[15] = B ^ ~D & q, e[24] = K ^ ~F & z, e[25] = L ^ ~V & U, e[34] = Z ^ ~W & $, e[35] = Q ^ ~Y & ee, e[44] = oe ^ ~ae & ce, e[45] = ue ^ ~se & le, e[6] = T ^ ~S & m, e[7] = x ^ ~_ & y, e[16] = O ^ ~N & E, e[17] = D ^ ~q & k, e[26] = F ^ ~z & M, e[27] = V ^ ~U & C, e[36] = W ^ ~$ & X, e[37] = Y ^ ~ee & G, e[46] = ae ^ ~ce & te, e[47] = se ^ ~le & ne, e[8] = S ^ ~m & v, e[9] = _ ^ ~y & g, e[18] = N ^ ~E & A, e[19] = q ^ ~k & P, e[28] = z ^ ~M & I, e[29] = U ^ ~C & R, e[38] = $ ^ ~X & H, e[39] = ee ^ ~G & J, e[48] = ce ^ ~te & re, e[49] = le ^ ~ne & ie, e[0] ^= o[r], e[1] ^= o[r + 1]
                },
                a = function(e) {
                    return function(t) {
                        var o;
                        if ("0x" === t.slice(0, 2)) {
                            o = [];
                            for (var a = 2, s = t.length; a < s; a += 2) o.push(parseInt(t.slice(a, a + 2), 16))
                        } else o = t;
                        return function(e, t) {
                            for (var o, a = t.length, s = e.blocks, c = e.blockCount << 2, l = e.blockCount, f = e.outputBlocks, d = e.s, h = 0; h < a;) {
                                if (e.reset)
                                    for (e.reset = !1, s[0] = e.block, y = 1; y < l + 1; ++y) s[y] = 0;
                                if ("string" != typeof t)
                                    for (y = e.start; h < a && y < c; ++h) s[y >> 2] |= t[h] << i[3 & y++];
                                else
                                    for (y = e.start; h < a && y < c; ++h)(o = t.charCodeAt(h)) < 128 ? s[y >> 2] |= o << i[3 & y++] : o < 2048 ? (s[y >> 2] |= (192 | o >> 6) << i[3 & y++], s[y >> 2] |= (128 | 63 & o) << i[3 & y++]) : o < 55296 || o >= 57344 ? (s[y >> 2] |= (224 | o >> 12) << i[3 & y++], s[y >> 2] |= (128 | o >> 6 & 63) << i[3 & y++], s[y >> 2] |= (128 | 63 & o) << i[3 & y++]) : (o = 65536 + ((1023 & o) << 10 | 1023 & t.charCodeAt(++h)), s[y >> 2] |= (240 | o >> 18) << i[3 & y++], s[y >> 2] |= (128 | o >> 12 & 63) << i[3 & y++], s[y >> 2] |= (128 | o >> 6 & 63) << i[3 & y++], s[y >> 2] |= (128 | 63 & o) << i[3 & y++]);
                                if (e.lastByteIndex = y, y >= c) {
                                    for (e.start = y - c, e.block = s[l], y = 0; y < l; ++y) d[y] ^= s[y];
                                    u(d), e.reset = !0
                                } else e.start = y
                            }
                            if (s[(y = e.lastByteIndex) >> 2] |= r[3 & y], e.lastByteIndex === c)
                                for (s[0] = s[l], y = 1; y < l + 1; ++y) s[y] = 0;
                            for (s[l - 1] |= 2147483648, y = 0; y < l; ++y) d[y] ^= s[y];
                            u(d);
                            for (var p, m = "", y = 0, v = 0; v < f;) {
                                for (y = 0; y < l && v < f; ++y, ++v) p = d[y], m += n[p >> 4 & 15] + n[15 & p] + n[p >> 12 & 15] + n[p >> 8 & 15] + n[p >> 20 & 15] + n[p >> 16 & 15] + n[p >> 28 & 15] + n[p >> 24 & 15];
                                v % l == 0 && (u(d), y = 0)
                            }
                            return "0x" + m
                        }(function(e) {
                            return {
                                blocks: [],
                                reset: !0,
                                block: 0,
                                start: 0,
                                blockCount: 1600 - (e << 1) >> 5,
                                outputBlocks: e >> 5,
                                s: (t = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [].concat(t, t, t, t, t))
                            };
                            var t
                        }(e), o)
                    }
                };
            e.exports = {
                keccak256: a(256),
                keccak512: a(512),
                keccak256s: a(256),
                keccak512s: a(512)
            }
        },
        3614: function(e, t) {
            var n = function(e) {
                return function() {
                    return new Promise((function(t, n) {
                        var r, i = function(n) {
                            var r = {},
                                i = n.target.files.length,
                                o = 0;
                            [].map.call(n.target.files, (function(n) {
                                var u = new FileReader;
                                u.onload = function(u) {
                                    var a = new Uint8Array(u.target.result);
                                    if ("directory" === e) {
                                        var s = n.webkitRelativePath;
                                        r[s.slice(s.indexOf("/") + 1)] = {
                                            type: "text/plain",
                                            data: a
                                        }, ++o === i && t(r)
                                    } else if ("file" === e) {
                                        var c = n.webkitRelativePath;
                                        t({
                                            type: mimetype.lookup(c),
                                            data: a
                                        })
                                    } else t(a)
                                }, u.readAsArrayBuffer(n)
                            }))
                        };
                        "directory" === e ? ((r = document.createElement("input")).addEventListener("change", i), r.type = "file", r.webkitdirectory = !0, r.mozdirectory = !0, r.msdirectory = !0, r.odirectory = !0, r.directory = !0) : ((r = document.createElement("input")).addEventListener("change", i), r.type = "file");
                        var o = document.createEvent("MouseEvents");
                        o.initEvent("click", !0, !1), r.dispatchEvent(o)
                    }))
                }
            };
            e.exports = {
                data: n("data"),
                file: n("file"),
                directory: n("directory")
            }
        },
        3615: function(e, t) {
            e.exports = function(e) {
                var t = e.fs,
                    n = e.files,
                    r = e.os,
                    i = e.path,
                    o = e.child_process,
                    u = e.mimetype,
                    a = e.defaultArchives,
                    s = e.request,
                    c = e.downloadUrl,
                    l = e.bytes,
                    f = e.hash,
                    d = e.pick,
                    h = function(e) {
                        return function(t) {
                            for (var n = {}, r = 0, i = e.length; r < i; ++r) n[e[r]] = t[r];
                            return n
                        }
                    },
                    p = function(e) {
                        return function(t) {
                            return "".concat(e, "/bzz-raw:/").concat(t)
                        }
                    },
                    m = function(e) {
                        return function(t) {
                            return new Promise((function(n, r) {
                                s(p(e)(t), {
                                    responseType: "arraybuffer"
                                }, (function(e, t, i) {
                                    return e ? r(e) : i.statusCode >= 400 ? r(new Error("Error ".concat(i.statusCode, "."))) : n(new Uint8Array(t))
                                }))
                            }))
                        }
                    },
                    y = function(e) {
                        return function(t) {
                            return function t(n) {
                                return function(r) {
                                    return function(i) {
                                        var o = function(e) {
                                            return void 0 === e.path ? Promise.resolve() : "application/bzz-manifest+json" === e.contentType ? t(e.hash)(r + e.path)(i) : Promise.resolve((n = r + e.path, function(e) {
                                                return function(t) {
                                                    return t[n] = e, t
                                                }
                                            })(function(e) {
                                                return {
                                                    type: e.contentType,
                                                    hash: e.hash
                                                }
                                            }(e))(i));
                                            var n
                                        };
                                        return m(e)(n).then((function(e) {
                                            return JSON.parse(C(e)).entries
                                        })).then((function(e) {
                                            return Promise.all(e.map(o))
                                        })).then((function() {
                                            return i
                                        }))
                                    }
                                }
                            }(t)("")({})
                        }
                    },
                    v = function(e) {
                        return function(t) {
                            return y(e)(t).then((function(e) {
                                return h(Object.keys(e))(Object.keys(e).map((function(t) {
                                    return e[t].hash
                                })))
                            }))
                        }
                    },
                    g = function(e) {
                        return function(t) {
                            return y(e)(t).then((function(t) {
                                var n = Object.keys(t),
                                    r = n.map((function(e) {
                                        return t[e].hash
                                    })),
                                    i = n.map((function(e) {
                                        return t[e].type
                                    })),
                                    o = r.map(m(e));
                                return Promise.all(o).then((function(e) {
                                    return h(n)(function(e) {
                                        return e.map((function(e, t) {
                                            return {
                                                type: i[t],
                                                data: e
                                            }
                                        }))
                                    }(e))
                                }))
                            }))
                        }
                    },
                    b = function(e) {
                        return function(t) {
                            return function(r) {
                                return n.download(p(e)(t))(r)
                            }
                        }
                    },
                    w = function(e) {
                        return function(t) {
                            return function(n) {
                                return v(e)(t).then((function(t) {
                                    var r = [];
                                    for (var o in t)
                                        if (o.length > 0) {
                                            var u = i.join(n, o);
                                            r.push(b(e)(t[o])(u))
                                        } return Promise.all(r).then((function() {
                                        return n
                                    }))
                                }))
                            }
                        }
                    },
                    T = function(e) {
                        return function(t) {
                            return new Promise((function(n, r) {
                                var i = {
                                    body: "string" == typeof t ? I(t) : t,
                                    method: "POST"
                                };
                                s("".concat(e, "/bzz-raw:/"), i, (function(e, t) {
                                    return e ? r(e) : n(t)
                                }))
                            }))
                        }
                    },
                    x = function(e) {
                        return function(t) {
                            return function(n) {
                                return function(r) {
                                    return function i(o) {
                                        var u = "/" === n[0] ? n : "/" + n,
                                            a = "".concat(e, "/bzz:/").concat(t).concat(u),
                                            c = {
                                                method: "PUT",
                                                headers: {
                                                    "Content-Type": r.type
                                                },
                                                body: r.data
                                            };
                                        return new Promise((function(e, t) {
                                            s(a, c, (function(n, r) {
                                                return n ? t(n) : -1 !== r.indexOf("error") ? t(r) : e(r)
                                            }))
                                        })).catch((function(e) {
                                            return o > 0 && i(o - 1)
                                        }))
                                    }(3)
                                }
                            }
                        }
                    },
                    S = function(e) {
                        return function(t) {
                            return E(e)({
                                "": t
                            })
                        }
                    },
                    _ = function(e) {
                        return function(n) {
                            return t.readFile(n).then((function(t) {
                                return S(e)({
                                    type: u.lookup(n),
                                    data: t
                                })
                            }))
                        }
                    },
                    E = function(e) {
                        return function(t) {
                            return T(e)("{}").then((function(n) {
                                return Object.keys(t).reduce((function(n, r) {
                                    return n.then(function(n) {
                                        return function(r) {
                                            return x(e)(r)(n)(t[n])
                                        }
                                    }(r))
                                }), Promise.resolve(n))
                            }))
                        }
                    },
                    k = function(e) {
                        return function(n) {
                            return t.readFile(n).then(T(e))
                        }
                    },
                    A = function(e) {
                        return function(r) {
                            return function(i) {
                                return n.directoryTree(i).then((function(e) {
                                    return Promise.all(e.map((function(e) {
                                        return t.readFile(e)
                                    }))).then((function(t) {
                                        var n = e.map((function(e) {
                                                return e.slice(i.length)
                                            })),
                                            r = e.map((function(e) {
                                                return u.lookup(e) || "text/plain"
                                            }));
                                        return h(n)(t.map((function(e, t) {
                                            return {
                                                type: r[t],
                                                data: e
                                            }
                                        })))
                                    }))
                                })).then((function(e) {
                                    return (t = r ? {
                                        "": e[r]
                                    } : {}, function(e) {
                                        var n = {};
                                        for (var r in t) n[r] = t[r];
                                        for (var i in e) n[i] = e[i];
                                        return n
                                    })(e);
                                    var t
                                })).then(E(e))
                            }
                        }
                    },
                    P = function(e) {
                        return function(t) {
                            if ("data" === t.pick) return d.data().then(T(e));
                            if ("file" === t.pick) return d.file().then(S(e));
                            if ("directory" === t.pick) return d.directory().then(E(e));
                            if (t.path) switch (t.kind) {
                                case "data":
                                    return k(e)(t.path);
                                case "file":
                                    return _(e)(t.path);
                                case "directory":
                                    return A(e)(t.defaultFile)(t.path)
                            } else {
                                if (t.length || "string" == typeof t) return T(e)(t);
                                if (t instanceof Object) return E(e)(t)
                            }
                            return Promise.reject(new Error("Bad arguments"))
                        }
                    },
                    j = function(e) {
                        return function(t) {
                            return function(n) {
                                return q(e)(t).then((function(r) {
                                    return r ? n ? w(e)(t)(n) : g(e)(t) : n ? b(e)(t)(n) : m(e)(t)
                                }))
                            }
                        }
                    },
                    B = function(e, t) {
                        var i = r.platform().replace("win32", "windows") + "-" + ("x64" === r.arch() ? "amd64" : "386"),
                            o = (t || a)[i],
                            u = c + o.archive + ".tar.gz",
                            s = o.archiveMD5,
                            l = o.binaryMD5;
                        return n.safeDownloadArchived(u)(s)(l)(e)
                    },
                    O = function(e) {
                        return new Promise((function(t, n) {
                            var r = o.spawn,
                                i = function(e) {
                                    return function(t) {
                                        return -1 !== ("" + t).indexOf(e)
                                    }
                                },
                                u = e.account,
                                a = e.password,
                                s = e.dataDir,
                                c = e.ensApi,
                                l = e.privateKey,
                                f = 0,
                                d = r(e.binPath, ["--bzzaccount", u || l, "--datadir", s, "--ens-api", c]),
                                h = function(e) {
                                    0 === f && i("Passphrase")(e) ? setTimeout((function() {
                                        f = 1, d.stdin.write(a + "\n")
                                    }), 500) : i("Swarm http proxy started")(e) && (f = 2, clearTimeout(p), t(d))
                                };
                            d.stdout.on("data", h), d.stderr.on("data", h);
                            var p = setTimeout((function() {
                                return n(new Error("Couldn't start swarm process."))
                            }), 2e4)
                        }))
                    },
                    D = function(e) {
                        return new Promise((function(t, n) {
                            e.stderr.removeAllListeners("data"), e.stdout.removeAllListeners("data"), e.stdin.removeAllListeners("error"), e.removeAllListeners("error"), e.removeAllListeners("exit"), e.kill("SIGINT");
                            var r = setTimeout((function() {
                                return e.kill("SIGKILL")
                            }), 8e3);
                            e.once("close", (function() {
                                clearTimeout(r), t()
                            }))
                        }))
                    },
                    N = function(e) {
                        return T(e)("test").then((function(e) {
                            return "c9a99c7d326dcc6316f32fe2625b311f6dc49a175e6877681ded93137d3569e7" === e
                        })).catch((function() {
                            return !1
                        }))
                    },
                    q = function(e) {
                        return function(t) {
                            return m(e)(t).then((function(e) {
                                try {
                                    return !!JSON.parse(C(e)).entries
                                } catch (e) {
                                    return !1
                                }
                            }))
                        }
                    },
                    M = function(e) {
                        return function(t, n, r, i, o) {
                            var u;
                            return void 0 !== t && (u = e(t)), void 0 !== n && (u = e(n)), void 0 !== r && (u = e(r)), void 0 !== i && (u = e(i)), void 0 !== o && (u = e(o)), u
                        }
                    },
                    C = function(e) {
                        return l.toString(l.fromUint8Array(e))
                    },
                    I = function(e) {
                        return l.toUint8Array(l.fromString(e))
                    },
                    R = function(e) {
                        return {
                            download: function(t, n) {
                                return j(e)(t)(n)
                            },
                            downloadData: M(m(e)),
                            downloadDataToDisk: M(b(e)),
                            downloadDirectory: M(g(e)),
                            downloadDirectoryToDisk: M(w(e)),
                            downloadEntries: M(y(e)),
                            downloadRoutes: M(v(e)),
                            isAvailable: function() {
                                return N(e)
                            },
                            upload: function(t) {
                                return P(e)(t)
                            },
                            uploadData: M(T(e)),
                            uploadFile: M(S(e)),
                            uploadFileFromDisk: M(S(e)),
                            uploadDataFromDisk: M(k(e)),
                            uploadDirectory: M(E(e)),
                            uploadDirectoryFromDisk: M(A(e)),
                            uploadToManifest: M(x(e)),
                            pick: d,
                            hash: f,
                            fromString: I,
                            toString: C
                        }
                    };
                return {
                    at: R,
                    local: function(e) {
                        return function(t) {
                            return N("http://localhost:8500").then((function(n) {
                                return n ? t(R("http://localhost:8500")).then((function() {})) : B(e.binPath, e.archives).onData((function(t) {
                                    return (e.onProgress || function() {})(t.length)
                                })).then((function() {
                                    return O(e)
                                })).then((function(e) {
                                    return t(R("http://localhost:8500")).then((function() {
                                        return e
                                    }))
                                })).then(D)
                            }))
                        }
                    },
                    download: j,
                    downloadBinary: B,
                    downloadData: m,
                    downloadDataToDisk: b,
                    downloadDirectory: g,
                    downloadDirectoryToDisk: w,
                    downloadEntries: y,
                    downloadRoutes: v,
                    isAvailable: N,
                    startProcess: O,
                    stopProcess: D,
                    upload: P,
                    uploadData: T,
                    uploadDataFromDisk: k,
                    uploadFile: S,
                    uploadFileFromDisk: _,
                    uploadDirectory: E,
                    uploadDirectoryFromDisk: A,
                    uploadToManifest: x,
                    pick: d,
                    hash: f,
                    fromString: I,
                    toString: C
                }
            }
        },
        4304: function(e, t, n) {
            e.exports = n(4305)
        },
        4305: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = function(e) {
                var t, n = e.Symbol;
                if ("function" == typeof n)
                    if (n.observable) t = n.observable;
                    else {
                        t = n.for("https://github.com/benlesh/symbol-observable");
                        try {
                            n.observable = t
                        } catch (e) {}
                    }
                else t = "@@observable";
                return t
            }
        },
        51: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var r, i = n(2754),
                o = (r = i) && r.__esModule ? r : {
                    default: r
                };
            t.default = o.default
        },
        82: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, "__extends", (function() {
                return i
            })), n.d(t, "__assign", (function() {
                return o
            })), n.d(t, "__rest", (function() {
                return u
            })), n.d(t, "__decorate", (function() {
                return a
            })), n.d(t, "__param", (function() {
                return s
            })), n.d(t, "__metadata", (function() {
                return c
            })), n.d(t, "__awaiter", (function() {
                return l
            })), n.d(t, "__generator", (function() {
                return f
            })), n.d(t, "__createBinding", (function() {
                return d
            })), n.d(t, "__exportStar", (function() {
                return h
            })), n.d(t, "__values", (function() {
                return p
            })), n.d(t, "__read", (function() {
                return m
            })), n.d(t, "__spread", (function() {
                return y
            })), n.d(t, "__spreadArrays", (function() {
                return v
            })), n.d(t, "__await", (function() {
                return g
            })), n.d(t, "__asyncGenerator", (function() {
                return b
            })), n.d(t, "__asyncDelegator", (function() {
                return w
            })), n.d(t, "__asyncValues", (function() {
                return T
            })), n.d(t, "__makeTemplateObject", (function() {
                return x
            })), n.d(t, "__importStar", (function() {
                return S
            })), n.d(t, "__importDefault", (function() {
                return _
            })), n.d(t, "__classPrivateFieldGet", (function() {
                return E
            })), n.d(t, "__classPrivateFieldSet", (function() {
                return k
            }));
            var r = function(e, t) {
                return (r = Object.setPrototypeOf || {
                        __proto__: []
                    }
                    instanceof Array && function(e, t) {
                        e.__proto__ = t
                    } || function(e, t) {
                        for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n])
                    })(e, t)
            };

            function i(e, t) {
                function n() {
                    this.constructor = e
                }
                r(e, t), e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n)
            }
            var o = function() {
                return (o = Object.assign || function(e) {
                    for (var t, n = 1, r = arguments.length; n < r; n++)
                        for (var i in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
                    return e
                }).apply(this, arguments)
            };

            function u(e, t) {
                var n = {};
                for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
                if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
                    var i = 0;
                    for (r = Object.getOwnPropertySymbols(e); i < r.length; i++) t.indexOf(r[i]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[i]) && (n[r[i]] = e[r[i]])
                }
                return n
            }

            function a(e, t, n, r) {
                var i, o = arguments.length,
                    u = o < 3 ? t : null === r ? r = Object.getOwnPropertyDescriptor(t, n) : r;
                if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) u = Reflect.decorate(e, t, n, r);
                else
                    for (var a = e.length - 1; a >= 0; a--)(i = e[a]) && (u = (o < 3 ? i(u) : o > 3 ? i(t, n, u) : i(t, n)) || u);
                return o > 3 && u && Object.defineProperty(t, n, u), u
            }

            function s(e, t) {
                return function(n, r) {
                    t(n, r, e)
                }
            }

            function c(e, t) {
                if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t)
            }

            function l(e, t, n, r) {
                return new(n || (n = Promise))((function(i, o) {
                    function u(e) {
                        try {
                            s(r.next(e))
                        } catch (e) {
                            o(e)
                        }
                    }

                    function a(e) {
                        try {
                            s(r.throw(e))
                        } catch (e) {
                            o(e)
                        }
                    }

                    function s(e) {
                        var t;
                        e.done ? i(e.value) : (t = e.value, t instanceof n ? t : new n((function(e) {
                            e(t)
                        }))).then(u, a)
                    }
                    s((r = r.apply(e, t || [])).next())
                }))
            }

            function f(e, t) {
                var n, r, i, o, u = {
                    label: 0,
                    sent: function() {
                        if (1 & i[0]) throw i[1];
                        return i[1]
                    },
                    trys: [],
                    ops: []
                };
                return o = {
                    next: a(0),
                    throw: a(1),
                    return: a(2)
                }, "function" == typeof Symbol && (o[Symbol.iterator] = function() {
                    return this
                }), o;

                function a(o) {
                    return function(a) {
                        return function(o) {
                            if (n) throw new TypeError("Generator is already executing.");
                            for (; u;) try {
                                if (n = 1, r && (i = 2 & o[0] ? r.return : o[0] ? r.throw || ((i = r.return) && i.call(r), 0) : r.next) && !(i = i.call(r, o[1])).done) return i;
                                switch (r = 0, i && (o = [2 & o[0], i.value]), o[0]) {
                                    case 0:
                                    case 1:
                                        i = o;
                                        break;
                                    case 4:
                                        return u.label++, {
                                            value: o[1],
                                            done: !1
                                        };
                                    case 5:
                                        u.label++, r = o[1], o = [0];
                                        continue;
                                    case 7:
                                        o = u.ops.pop(), u.trys.pop();
                                        continue;
                                    default:
                                        if (!(i = u.trys, (i = i.length > 0 && i[i.length - 1]) || 6 !== o[0] && 2 !== o[0])) {
                                            u = 0;
                                            continue
                                        }
                                        if (3 === o[0] && (!i || o[1] > i[0] && o[1] < i[3])) {
                                            u.label = o[1];
                                            break
                                        }
                                        if (6 === o[0] && u.label < i[1]) {
                                            u.label = i[1], i = o;
                                            break
                                        }
                                        if (i && u.label < i[2]) {
                                            u.label = i[2], u.ops.push(o);
                                            break
                                        }
                                        i[2] && u.ops.pop(), u.trys.pop();
                                        continue
                                }
                                o = t.call(e, u)
                            } catch (e) {
                                o = [6, e], r = 0
                            } finally {
                                n = i = 0
                            }
                            if (5 & o[0]) throw o[1];
                            return {
                                value: o[0] ? o[1] : void 0,
                                done: !0
                            }
                        }([o, a])
                    }
                }
            }

            function d(e, t, n, r) {
                void 0 === r && (r = n), e[r] = t[n]
            }

            function h(e, t) {
                for (var n in e) "default" === n || t.hasOwnProperty(n) || (t[n] = e[n])
            }

            function p(e) {
                var t = "function" == typeof Symbol && Symbol.iterator,
                    n = t && e[t],
                    r = 0;
                if (n) return n.call(e);
                if (e && "number" == typeof e.length) return {
                    next: function() {
                        return e && r >= e.length && (e = void 0), {
                            value: e && e[r++],
                            done: !e
                        }
                    }
                };
                throw new TypeError(t ? "Object is not iterable." : "Symbol.iterator is not defined.")
            }

            function m(e, t) {
                var n = "function" == typeof Symbol && e[Symbol.iterator];
                if (!n) return e;
                var r, i, o = n.call(e),
                    u = [];
                try {
                    for (;
                        (void 0 === t || t-- > 0) && !(r = o.next()).done;) u.push(r.value)
                } catch (e) {
                    i = {
                        error: e
                    }
                } finally {
                    try {
                        r && !r.done && (n = o.return) && n.call(o)
                    } finally {
                        if (i) throw i.error
                    }
                }
                return u
            }

            function y() {
                for (var e = [], t = 0; t < arguments.length; t++) e = e.concat(m(arguments[t]));
                return e
            }

            function v() {
                for (var e = 0, t = 0, n = arguments.length; t < n; t++) e += arguments[t].length;
                var r = Array(e),
                    i = 0;
                for (t = 0; t < n; t++)
                    for (var o = arguments[t], u = 0, a = o.length; u < a; u++, i++) r[i] = o[u];
                return r
            }

            function g(e) {
                return this instanceof g ? (this.v = e, this) : new g(e)
            }

            function b(e, t, n) {
                if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
                var r, i = n.apply(e, t || []),
                    o = [];
                return r = {}, u("next"), u("throw"), u("return"), r[Symbol.asyncIterator] = function() {
                    return this
                }, r;

                function u(e) {
                    i[e] && (r[e] = function(t) {
                        return new Promise((function(n, r) {
                            o.push([e, t, n, r]) > 1 || a(e, t)
                        }))
                    })
                }

                function a(e, t) {
                    try {
                        (n = i[e](t)).value instanceof g ? Promise.resolve(n.value.v).then(s, c) : l(o[0][2], n)
                    } catch (e) {
                        l(o[0][3], e)
                    }
                    var n
                }

                function s(e) {
                    a("next", e)
                }

                function c(e) {
                    a("throw", e)
                }

                function l(e, t) {
                    e(t), o.shift(), o.length && a(o[0][0], o[0][1])
                }
            }

            function w(e) {
                var t, n;
                return t = {}, r("next"), r("throw", (function(e) {
                    throw e
                })), r("return"), t[Symbol.iterator] = function() {
                    return this
                }, t;

                function r(r, i) {
                    t[r] = e[r] ? function(t) {
                        return (n = !n) ? {
                            value: g(e[r](t)),
                            done: "return" === r
                        } : i ? i(t) : t
                    } : i
                }
            }

            function T(e) {
                if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
                var t, n = e[Symbol.asyncIterator];
                return n ? n.call(e) : (e = p(e), t = {}, r("next"), r("throw"), r("return"), t[Symbol.asyncIterator] = function() {
                    return this
                }, t);

                function r(n) {
                    t[n] = e[n] && function(t) {
                        return new Promise((function(r, i) {
                            (function(e, t, n, r) {
                                Promise.resolve(r).then((function(t) {
                                    e({
                                        value: t,
                                        done: n
                                    })
                                }), t)
                            })(r, i, (t = e[n](t)).done, t.value)
                        }))
                    }
                }
            }

            function x(e, t) {
                return Object.defineProperty ? Object.defineProperty(e, "raw", {
                    value: t
                }) : e.raw = t, e
            }

            function S(e) {
                if (e && e.__esModule) return e;
                var t = {};
                if (null != e)
                    for (var n in e) Object.hasOwnProperty.call(e, n) && (t[n] = e[n]);
                return t.default = e, t
            }

            function _(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }

            function E(e, t) {
                if (!t.has(e)) throw new TypeError("attempted to get private field on non-instance");
                return t.get(e)
            }

            function k(e, t, n) {
                if (!t.has(e)) throw new TypeError("attempted to set private field on non-instance");
                return t.set(e, n), n
            }
        },
        989: function(e) {
            e.exports = JSON.parse('{"name":"stellar-sdk","version":"10.1.2","description":"stellar-sdk is a library for working with the Stellar Horizon server.","main":"./lib/index.js","types":"./lib/index.d.ts","files":["/types","/lib","/dist"],"scripts":{"prepare":"gulp build","test":"babel-node ./node_modules/.bin/gulp test","test:watch":"babel-node ./node_modules/.bin/gulp test:watch","build:docs":"gulp build:docs","docs":"yarn build:docs && jsdoc -c .jsdoc.json","preversion":"gulp test","version":"gulp build","postversion":"git push && git push --tags","prettier-all":"prettier --write **/*.{js,ts}"},"husky":{"hooks":{"pre-commit":"lint-staged"}},"prettier":"@stellar/prettier-config","lint-staged":{"lib/*.{js,json}":["prettier --write","git add"],"lib/*.js":["eslint --fix --max-warnings 0","git add"],"**/*.ts":["prettier --write","tslint --fix","git add"]},"keywords":["stellar"],"repository":{"type":"git","url":"https://github.com/stellar/js-stellar-sdk.git"},"author":"Stellar Development Foundation <hello@stellar.org>","license":"Apache-2.0","bugs":{"url":"https://github.com/stellar/js-stellar-sdk/issues"},"homepage":"https://github.com/stellar/js-stellar-sdk","devDependencies":{"@kollavarsham/gulp-coveralls":"0.2.8","@stellar/prettier-config":"^1.0.1","@stellar/tsconfig":"^1.0.1","@stellar/tslint-config":"^1.0.3","@types/detect-node":"^2.0.0","@types/lodash":"^4.14.130","axios-mock-adapter":"^1.16.0","babel-cli":"^6.26.0","babel-core":"~6.26.3","babel-eslint":"^10.0.1","babel-istanbul":"^0.12.2","babel-loader":"^7.0.0","babel-plugin-transform-builtin-extend":"^1.1.2","babel-preset-es2015":"^6.24.1","babel-register":"^6.26.0","body-parser":"^1.12.2","chai":"^2.2.0","chai-as-promised":"^5.2.0","chai-http":"^4.3.0","clear":"^0.1.0","coveralls":"3.0.2","del":"^5.1.0","eslint":"^5.12.1","eslint-config-airbnb-base":"^13.1.0","eslint-config-prettier":"^3.6.0","eslint-plugin-import":"^2.15.0","eslint-plugin-node":"^8.0.1","eslint-plugin-prefer-import":"^0.0.1","eslint-plugin-prettier":"^3.0.1","ghooks":"^0.3.0","gulp":"^4.0.0","gulp-babel":"^6.1.3","gulp-eslint":"^5.0.0","gulp-insert":"^0.5.0","gulp-istanbul":"^1.1.3","gulp-load-plugins":"1.5.0","gulp-mocha":"^7.0.2","gulp-plumber":"^1.0.0","gulp-rename":"~1.2.0","gulp-tslint":"^8.1.4","husky":"^1.3.1","isparta":"^4.1.1","istanbul":"^0.4.5","jsdoc":"3.5.5","json-loader":"^0.5.1","karma":"^6.3.0","karma-chai":"^0.1.0","karma-chai-as-promised":"^0.1.2","karma-chrome-launcher":"^3.1.0","karma-commonjs":"^1.0.0","karma-firefox-launcher":"^2.1.2","karma-mocha":"^2.0.1","karma-phantomjs-launcher":"^1.0.4","karma-sauce-launcher":"2.0.2","karma-sinon":"^1.0.5","karma-sinon-chai":"2.0.2","karma-webpack":"5.0.0","lint-staged":"7.3.0","minami":"^1.1.1","mocha":"^9.1.4","prettier":"^1.17.1","sinon":"^1.14.1","sinon-chai":"^2.7.0","terser-webpack-plugin":"^1.3.0","ts-loader":"^5.0.0","tslint":"^5.16.0","typescript":"^3.4.5","webpack":"^4.33.0","webpack-cli":"^3.3.3","webpack-stream":"^5.2.1"},"dependencies":{"@types/eventsource":"^1.1.2","@types/node":">= 8","@types/randombytes":"^2.0.0","@types/urijs":"^1.19.6","axios":"0.25.0","bignumber.js":"^4.0.0","detect-node":"^2.0.4","es6-promise":"^4.2.4","eventsource":"^1.1.1","lodash":"^4.17.21","randombytes":"^2.1.0","stellar-base":"^8.0.1","toml":"^2.3.0","tslib":"^1.10.0","urijs":"^1.19.1","utility-types":"^3.7.0"}}')
        }
    }
]);