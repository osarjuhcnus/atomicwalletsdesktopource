/*! For license information please see vendors.57f07a9c5ae8c0c31aa8.js.LICENSE.txt */
(window.webpackJsonp = window.webpackJsonp || []).push([
    [203], {
        1383: function(e, t) {
            e.exports = function(e) {
                if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e
            }, e.exports.__esModule = !0, e.exports.default = e.exports
        },
        1422: function(e, t) {
            e.exports = function(e, t, r) {
                if (!t.has(e)) throw new TypeError("attempted to " + r + " private field on non-instance");
                return t.get(e)
            }, e.exports.__esModule = !0, e.exports.default = e.exports
        },
        1432: function(e, t, r) {
            var n = r(282).default,
                o = r(2429);
            e.exports = function(e) {
                var t = o(e, "string");
                return "symbol" === n(t) ? t : String(t)
            }, e.exports.__esModule = !0, e.exports.default = e.exports
        },
        151: function(e, t, r) {
            var n = r(1432);
            e.exports = function(e, t, r) {
                return (t = n(t)) in e ? Object.defineProperty(e, t, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = r, e
            }, e.exports.__esModule = !0, e.exports.default = e.exports
        },
        1809: function(e, t, r) {
            var n = r(3327),
                o = r(3328),
                i = r(1811),
                s = r(3329);
            e.exports = function(e) {
                return n(e) || o(e) || i(e) || s()
            }, e.exports.__esModule = !0, e.exports.default = e.exports
        },
        1810: function(e, t) {
            e.exports = function(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
                return n
            }, e.exports.__esModule = !0, e.exports.default = e.exports
        },
        1811: function(e, t, r) {
            var n = r(1810);
            e.exports = function(e, t) {
                if (e) {
                    if ("string" == typeof e) return n(e, t);
                    var r = Object.prototype.toString.call(e).slice(8, -1);
                    return "Object" === r && e.constructor && (r = e.constructor.name), "Map" === r || "Set" === r ? Array.from(e) : "Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r) ? n(e, t) : void 0
                }
            }, e.exports.__esModule = !0, e.exports.default = e.exports
        },
        2: function(e, t) {
            e.exports = function(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }, e.exports.__esModule = !0, e.exports.default = e.exports
        },
        2035: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.ensureLeftNeighbor = t.ensureSpec = t.calculateExistenceRoot = t.verifyNonExistence = t.verifyExistence = t.smtSpec = t.tendermintSpec = t.iavlSpec = void 0;
            const n = r(675),
                o = r(4300),
                i = r(2036);

            function s(e, t, r, n, o) {
                a(e, t);
                const s = c(e);
                (0, i.ensureBytesEqual)(s, r), (0, i.ensureBytesEqual)(n, e.key), (0, i.ensureBytesEqual)(o, e.value)
            }

            function c(e) {
                if (!e.key || !e.value) throw new Error("Existence proof needs key and value set");
                if (!e.leaf) throw new Error("Existence proof must start with a leaf operation");
                const t = e.path || [];
                let r = (0, o.applyLeaf)(e.leaf, e.key, e.value);
                for (const e of t) r = (0, o.applyInner)(e, r);
                return r
            }

            function a(e, t) {
                if (!e.leaf) throw new Error("Existence proof must start with a leaf operation");
                if (!t.leafSpec) throw new Error("Spec must include leafSpec");
                if (!t.innerSpec) throw new Error("Spec must include innerSpec");
                (0, i.ensureLeaf)(e.leaf, t.leafSpec);
                const r = e.path || [];
                if (t.minDepth && r.length < t.minDepth) throw new Error("Too few inner nodes " + r.length);
                if (t.maxDepth && r.length > t.maxDepth) throw new Error("Too many inner nodes " + r.length);
                for (const e of r)(0, i.ensureInner)(e, t.leafSpec.prefix, t.innerSpec)
            }

            function f(e, t) {
                const {
                    minPrefix: r,
                    maxPrefix: n,
                    suffix: o
                } = y(e, 0);
                for (const e of t)
                    if (!h(e, r, n, o)) throw new Error("Step not leftmost")
            }

            function u(e, t) {
                const r = e.childOrder.length - 1,
                    {
                        minPrefix: n,
                        maxPrefix: o,
                        suffix: i
                    } = y(e, r);
                for (const e of t)
                    if (!h(e, n, o, i)) throw new Error("Step not leftmost")
            }

            function l(e, t, r) {
                const n = [...t],
                    o = [...r];
                let s = n.pop(),
                    c = o.pop();
                for (;
                    (0, i.bytesEqual)(s.prefix, c.prefix) && (0, i.bytesEqual)(s.suffix, c.suffix);) s = n.pop(), c = o.pop();
                if (! function(e, t, r) {
                        const n = p(e, t);
                        return p(e, r) === n + 1
                    }(e, s, c)) throw new Error("Not left neightbor at first divergent step");
                u(e, n), f(e, o)
            }

            function p(e, t) {
                for (let r = 0; r < e.childOrder.length; r++) {
                    const {
                        minPrefix: n,
                        maxPrefix: o,
                        suffix: i
                    } = y(e, r);
                    if (h(t, n, o, i)) return r
                }
                throw new Error("Cannot find any valid spacing for this node")
            }

            function h(e, t, r, n) {
                return !((e.prefix || []).length < t) && (!((e.prefix || []).length > r) && (e.suffix || []).length === n)
            }

            function y(e, t) {
                const r = function(e, t) {
                        if (t < 0 || t >= e.length) throw new Error("Invalid branch: " + t);
                        return e.findIndex(e => e === t)
                    }(e.childOrder, t),
                    n = r * e.childSize;
                return {
                    minPrefix: n + e.minPrefixLength,
                    maxPrefix: n + e.maxPrefixLength,
                    suffix: (e.childOrder.length - 1 - r) * e.childSize
                }
            }
            t.iavlSpec = {
                leafSpec: {
                    prefix: Uint8Array.from([0]),
                    hash: n.ics23.HashOp.SHA256,
                    prehashValue: n.ics23.HashOp.SHA256,
                    prehashKey: n.ics23.HashOp.NO_HASH,
                    length: n.ics23.LengthOp.VAR_PROTO
                },
                innerSpec: {
                    childOrder: [0, 1],
                    minPrefixLength: 4,
                    maxPrefixLength: 12,
                    childSize: 33,
                    hash: n.ics23.HashOp.SHA256
                }
            }, t.tendermintSpec = {
                leafSpec: {
                    prefix: Uint8Array.from([0]),
                    hash: n.ics23.HashOp.SHA256,
                    prehashValue: n.ics23.HashOp.SHA256,
                    prehashKey: n.ics23.HashOp.NO_HASH,
                    length: n.ics23.LengthOp.VAR_PROTO
                },
                innerSpec: {
                    childOrder: [0, 1],
                    minPrefixLength: 1,
                    maxPrefixLength: 1,
                    childSize: 32,
                    hash: n.ics23.HashOp.SHA256
                }
            }, t.smtSpec = {
                leafSpec: {
                    hash: n.ics23.HashOp.SHA256,
                    prehashKey: n.ics23.HashOp.NO_HASH,
                    prehashValue: n.ics23.HashOp.SHA256,
                    length: n.ics23.LengthOp.NO_PREFIX,
                    prefix: Uint8Array.from([0])
                },
                innerSpec: {
                    childOrder: [0, 1],
                    childSize: 32,
                    minPrefixLength: 1,
                    maxPrefixLength: 1,
                    emptyChild: new Uint8Array(32),
                    hash: n.ics23.HashOp.SHA256
                },
                maxDepth: 256
            }, t.verifyExistence = s, t.verifyNonExistence = function(e, t, r, n) {
                let o, c;
                if (e.left && (s(e.left, t, r, e.left.key, e.left.value), o = e.left.key), e.right && (s(e.right, t, r, e.right.key, e.right.value), c = e.right.key), !o && !c) throw new Error("neither left nor right proof defined");
                if (o && (0, i.ensureBytesBefore)(o, n), c && (0, i.ensureBytesBefore)(n, c), !t.innerSpec) throw new Error("no inner spec");
                o ? c ? l(t.innerSpec, e.left.path, e.right.path) : u(t.innerSpec, e.left.path) : f(t.innerSpec, e.right.path)
            }, t.calculateExistenceRoot = c, t.ensureSpec = a, t.ensureLeftNeighbor = l
        },
        2036: function(e, t, r) {
            "use strict";

            function n(e, t) {
                if (e.length !== t.length) throw new Error(`Different lengths ${e.length} vs ${t.length}`);
                for (let r = 0; r < e.length; r++)
                    if (e[r] !== t[r]) throw new Error(`Arrays differ at index ${r}: ${e[r]} vs ${t[r]}`)
            }

            function o(e, t) {
                const r = e.length < t.length ? e.length : t.length;
                for (let n = 0; n < r; n++) {
                    if (e[n] < t[n]) return !0;
                    if (e[n] > t[n]) return !1
                }
                return e.length < t.length
            }
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.bytesBefore = t.ensureBytesBefore = t.bytesEqual = t.ensureBytesEqual = t.ensureInner = t.ensureLeaf = void 0, t.ensureLeaf = function(e, t) {
                if (e.hash !== t.hash) throw new Error("Unexpected hashOp: " + e.hash);
                if (e.prehashKey !== t.prehashKey) throw new Error("Unexpected prehashKey: " + e.prehashKey);
                if (e.prehashValue !== t.prehashValue) throw new Error("Unexpected prehashValue: " + e.prehashValue);
                if (e.length !== t.length) throw new Error("Unexpected length op: " + e.length);
                ! function(e, t) {
                    if (!t || 0 === t.length) return;
                    if (!e) throw new Error("Target bytes missing");
                    n(t, e.slice(0, t.length))
                }(e.prefix, t.prefix)
            }, t.ensureInner = function(e, t, r) {
                if (e.hash !== r.hash) throw new Error("Unexpected hashOp: " + e.hash);
                if (!e.prefix) throw new Error("No prefix set for inner node");
                if (function(e, t) {
                        if (!t || 0 === t.length) return !1;
                        if (!e) return !1;
                        if (e.length <= t.length) return !1;
                        for (let r = 0; r < t.length; r++)
                            if (e[r] !== t[r]) return !1;
                        throw !0
                    }(e.prefix, t)) throw new Error("Inner node has leaf prefix");
                if (e.prefix.length < (r.minPrefixLength || 0)) throw new Error(`Prefix too short: ${e.prefix.length} bytes`);
                const n = (r.childOrder.length - 1) * r.childSize;
                if (e.prefix.length > (r.maxPrefixLength || 0) + n) throw new Error(`Prefix too long: ${e.prefix.length} bytes`)
            }, t.ensureBytesEqual = n, t.bytesEqual = function(e, t) {
                if (e.length !== t.length) return !1;
                for (let r = 0; r < e.length; r++)
                    if (e[r] !== t[r]) return !1;
                return !0
            }, t.ensureBytesBefore = function(e, t) {
                if (!o(e, t)) throw new Error("first is after last")
            }, t.bytesBefore = o
        },
        207: function(e, t, r) {
            var n = r(2391),
                o = r(1422);
            e.exports = function(e, t) {
                var r = o(e, t, "get");
                return n(e, r)
            }, e.exports.__esModule = !0, e.exports.default = e.exports
        },
        208: function(e, t, r) {
            var n = r(2392),
                o = r(1422);
            e.exports = function(e, t, r) {
                var i = o(e, t, "set");
                return n(e, i, r), r
            }, e.exports.__esModule = !0, e.exports.default = e.exports
        },
        2363: function(e, t, r) {
            var n = r(3330),
                o = r(3331),
                i = r(1811),
                s = r(3332);
            e.exports = function(e, t) {
                return n(e) || o(e, t) || i(e, t) || s()
            }, e.exports.__esModule = !0, e.exports.default = e.exports
        },
        2391: function(e, t) {
            e.exports = function(e, t) {
                return t.get ? t.get.call(e) : t.value
            }, e.exports.__esModule = !0, e.exports.default = e.exports
        },
        2392: function(e, t) {
            e.exports = function(e, t, r) {
                if (t.set) t.set.call(e, r);
                else {
                    if (!t.writable) throw new TypeError("attempted to set read only private field");
                    t.value = r
                }
            }, e.exports.__esModule = !0, e.exports.default = e.exports
        },
        2429: function(e, t, r) {
            var n = r(282).default;
            e.exports = function(e, t) {
                if ("object" !== n(e) || null === e) return e;
                var r = e[Symbol.toPrimitive];
                if (void 0 !== r) {
                    var o = r.call(e, t || "default");
                    if ("object" !== n(o)) return o;
                    throw new TypeError("@@toPrimitive must return a primitive value.")
                }
                return ("string" === t ? String : Number)(e)
            }, e.exports.__esModule = !0, e.exports.default = e.exports
        },
        2549: function(e, t) {},
        2753: function(e, t) {},
        282: function(e, t) {
            function r(t) {
                return e.exports = r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                }, e.exports.__esModule = !0, e.exports.default = e.exports, r(t)
            }
            e.exports = r, e.exports.__esModule = !0, e.exports.default = e.exports
        },
        3325: function(e, t, r) {
            var n = r(282).default;

            function o() {
                "use strict";
                e.exports = o = function() {
                    return t
                }, e.exports.__esModule = !0, e.exports.default = e.exports;
                var t = {},
                    r = Object.prototype,
                    i = r.hasOwnProperty,
                    s = Object.defineProperty || function(e, t, r) {
                        e[t] = r.value
                    },
                    c = "function" == typeof Symbol ? Symbol : {},
                    a = c.iterator || "@@iterator",
                    f = c.asyncIterator || "@@asyncIterator",
                    u = c.toStringTag || "@@toStringTag";

                function l(e, t, r) {
                    return Object.defineProperty(e, t, {
                        value: r,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }), e[t]
                }
                try {
                    l({}, "")
                } catch (e) {
                    l = function(e, t, r) {
                        return e[t] = r
                    }
                }

                function p(e, t, r, n) {
                    var o = t && t.prototype instanceof d ? t : d,
                        i = Object.create(o.prototype),
                        c = new _(n || []);
                    return s(i, "_invoke", {
                        value: k(e, r, c)
                    }), i
                }

                function h(e, t, r) {
                    try {
                        return {
                            type: "normal",
                            arg: e.call(t, r)
                        }
                    } catch (e) {
                        return {
                            type: "throw",
                            arg: e
                        }
                    }
                }
                t.wrap = p;
                var y = {};

                function d() {}

                function x() {}

                function b() {}
                var m = {};
                l(m, a, (function() {
                    return this
                }));
                var g = Object.getPrototypeOf,
                    O = g && g(g(A([])));
                O && O !== r && i.call(O, a) && (m = O);
                var v = b.prototype = d.prototype = Object.create(m);

                function w(e) {
                    ["next", "throw", "return"].forEach((function(t) {
                        l(e, t, (function(e) {
                            return this._invoke(t, e)
                        }))
                    }))
                }

                function P(e, t) {
                    var r;
                    s(this, "_invoke", {
                        value: function(o, s) {
                            function c() {
                                return new t((function(r, c) {
                                    ! function r(o, s, c, a) {
                                        var f = h(e[o], e, s);
                                        if ("throw" !== f.type) {
                                            var u = f.arg,
                                                l = u.value;
                                            return l && "object" == n(l) && i.call(l, "__await") ? t.resolve(l.__await).then((function(e) {
                                                r("next", e, c, a)
                                            }), (function(e) {
                                                r("throw", e, c, a)
                                            })) : t.resolve(l).then((function(e) {
                                                u.value = e, c(u)
                                            }), (function(e) {
                                                return r("throw", e, c, a)
                                            }))
                                        }
                                        a(f.arg)
                                    }(o, s, r, c)
                                }))
                            }
                            return r = r ? r.then(c, c) : c()
                        }
                    })
                }

                function k(e, t, r) {
                    var n = "suspendedStart";
                    return function(o, i) {
                        if ("executing" === n) throw new Error("Generator is already running");
                        if ("completed" === n) {
                            if ("throw" === o) throw i;
                            return I()
                        }
                        for (r.method = o, r.arg = i;;) {
                            var s = r.delegate;
                            if (s) {
                                var c = E(s, r);
                                if (c) {
                                    if (c === y) continue;
                                    return c
                                }
                            }
                            if ("next" === r.method) r.sent = r._sent = r.arg;
                            else if ("throw" === r.method) {
                                if ("suspendedStart" === n) throw n = "completed", r.arg;
                                r.dispatchException(r.arg)
                            } else "return" === r.method && r.abrupt("return", r.arg);
                            n = "executing";
                            var a = h(e, t, r);
                            if ("normal" === a.type) {
                                if (n = r.done ? "completed" : "suspendedYield", a.arg === y) continue;
                                return {
                                    value: a.arg,
                                    done: r.done
                                }
                            }
                            "throw" === a.type && (n = "completed", r.method = "throw", r.arg = a.arg)
                        }
                    }
                }

                function E(e, t) {
                    var r = t.method,
                        n = e.iterator[r];
                    if (void 0 === n) return t.delegate = null, "throw" === r && e.iterator.return && (t.method = "return", t.arg = void 0, E(e, t), "throw" === t.method) || "return" !== r && (t.method = "throw", t.arg = new TypeError("The iterator does not provide a '" + r + "' method")), y;
                    var o = h(n, e.iterator, t.arg);
                    if ("throw" === o.type) return t.method = "throw", t.arg = o.arg, t.delegate = null, y;
                    var i = o.arg;
                    return i ? i.done ? (t[e.resultName] = i.value, t.next = e.nextLoc, "return" !== t.method && (t.method = "next", t.arg = void 0), t.delegate = null, y) : i : (t.method = "throw", t.arg = new TypeError("iterator result is not an object"), t.delegate = null, y)
                }

                function S(e) {
                    var t = {
                        tryLoc: e[0]
                    };
                    1 in e && (t.catchLoc = e[1]), 2 in e && (t.finallyLoc = e[2], t.afterLoc = e[3]), this.tryEntries.push(t)
                }

                function j(e) {
                    var t = e.completion || {};
                    t.type = "normal", delete t.arg, e.completion = t
                }

                function _(e) {
                    this.tryEntries = [{
                        tryLoc: "root"
                    }], e.forEach(S, this), this.reset(!0)
                }

                function A(e) {
                    if (e) {
                        var t = e[a];
                        if (t) return t.call(e);
                        if ("function" == typeof e.next) return e;
                        if (!isNaN(e.length)) {
                            var r = -1,
                                n = function t() {
                                    for (; ++r < e.length;)
                                        if (i.call(e, r)) return t.value = e[r], t.done = !1, t;
                                    return t.value = void 0, t.done = !0, t
                                };
                            return n.next = n
                        }
                    }
                    return {
                        next: I
                    }
                }

                function I() {
                    return {
                        value: void 0,
                        done: !0
                    }
                }
                return x.prototype = b, s(v, "constructor", {
                    value: b,
                    configurable: !0
                }), s(b, "constructor", {
                    value: x,
                    configurable: !0
                }), x.displayName = l(b, u, "GeneratorFunction"), t.isGeneratorFunction = function(e) {
                    var t = "function" == typeof e && e.constructor;
                    return !!t && (t === x || "GeneratorFunction" === (t.displayName || t.name))
                }, t.mark = function(e) {
                    return Object.setPrototypeOf ? Object.setPrototypeOf(e, b) : (e.__proto__ = b, l(e, u, "GeneratorFunction")), e.prototype = Object.create(v), e
                }, t.awrap = function(e) {
                    return {
                        __await: e
                    }
                }, w(P.prototype), l(P.prototype, f, (function() {
                    return this
                })), t.AsyncIterator = P, t.async = function(e, r, n, o, i) {
                    void 0 === i && (i = Promise);
                    var s = new P(p(e, r, n, o), i);
                    return t.isGeneratorFunction(r) ? s : s.next().then((function(e) {
                        return e.done ? e.value : s.next()
                    }))
                }, w(v), l(v, u, "Generator"), l(v, a, (function() {
                    return this
                })), l(v, "toString", (function() {
                    return "[object Generator]"
                })), t.keys = function(e) {
                    var t = Object(e),
                        r = [];
                    for (var n in t) r.push(n);
                    return r.reverse(),
                        function e() {
                            for (; r.length;) {
                                var n = r.pop();
                                if (n in t) return e.value = n, e.done = !1, e
                            }
                            return e.done = !0, e
                        }
                }, t.values = A, _.prototype = {
                    constructor: _,
                    reset: function(e) {
                        if (this.prev = 0, this.next = 0, this.sent = this._sent = void 0, this.done = !1, this.delegate = null, this.method = "next", this.arg = void 0, this.tryEntries.forEach(j), !e)
                            for (var t in this) "t" === t.charAt(0) && i.call(this, t) && !isNaN(+t.slice(1)) && (this[t] = void 0)
                    },
                    stop: function() {
                        this.done = !0;
                        var e = this.tryEntries[0].completion;
                        if ("throw" === e.type) throw e.arg;
                        return this.rval
                    },
                    dispatchException: function(e) {
                        if (this.done) throw e;
                        var t = this;

                        function r(r, n) {
                            return s.type = "throw", s.arg = e, t.next = r, n && (t.method = "next", t.arg = void 0), !!n
                        }
                        for (var n = this.tryEntries.length - 1; n >= 0; --n) {
                            var o = this.tryEntries[n],
                                s = o.completion;
                            if ("root" === o.tryLoc) return r("end");
                            if (o.tryLoc <= this.prev) {
                                var c = i.call(o, "catchLoc"),
                                    a = i.call(o, "finallyLoc");
                                if (c && a) {
                                    if (this.prev < o.catchLoc) return r(o.catchLoc, !0);
                                    if (this.prev < o.finallyLoc) return r(o.finallyLoc)
                                } else if (c) {
                                    if (this.prev < o.catchLoc) return r(o.catchLoc, !0)
                                } else {
                                    if (!a) throw new Error("try statement without catch or finally");
                                    if (this.prev < o.finallyLoc) return r(o.finallyLoc)
                                }
                            }
                        }
                    },
                    abrupt: function(e, t) {
                        for (var r = this.tryEntries.length - 1; r >= 0; --r) {
                            var n = this.tryEntries[r];
                            if (n.tryLoc <= this.prev && i.call(n, "finallyLoc") && this.prev < n.finallyLoc) {
                                var o = n;
                                break
                            }
                        }
                        o && ("break" === e || "continue" === e) && o.tryLoc <= t && t <= o.finallyLoc && (o = null);
                        var s = o ? o.completion : {};
                        return s.type = e, s.arg = t, o ? (this.method = "next", this.next = o.finallyLoc, y) : this.complete(s)
                    },
                    complete: function(e, t) {
                        if ("throw" === e.type) throw e.arg;
                        return "break" === e.type || "continue" === e.type ? this.next = e.arg : "return" === e.type ? (this.rval = this.arg = e.arg, this.method = "return", this.next = "end") : "normal" === e.type && t && (this.next = t), y
                    },
                    finish: function(e) {
                        for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                            var r = this.tryEntries[t];
                            if (r.finallyLoc === e) return this.complete(r.completion, r.afterLoc), j(r), y
                        }
                    },
                    catch: function(e) {
                        for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                            var r = this.tryEntries[t];
                            if (r.tryLoc === e) {
                                var n = r.completion;
                                if ("throw" === n.type) {
                                    var o = n.arg;
                                    j(r)
                                }
                                return o
                            }
                        }
                        throw new Error("illegal catch attempt")
                    },
                    delegateYield: function(e, t, r) {
                        return this.delegate = {
                            iterator: A(e),
                            resultName: t,
                            nextLoc: r
                        }, "next" === this.method && (this.arg = void 0), y
                    }
                }, t
            }
            e.exports = o, e.exports.__esModule = !0, e.exports.default = e.exports
        },
        3326: function(e, t, r) {
            var n = r(151);
            e.exports = function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = null != arguments[t] ? Object(arguments[t]) : {},
                        o = Object.keys(r);
                    "function" == typeof Object.getOwnPropertySymbols && o.push.apply(o, Object.getOwnPropertySymbols(r).filter((function(e) {
                        return Object.getOwnPropertyDescriptor(r, e).enumerable
                    }))), o.forEach((function(t) {
                        n(e, t, r[t])
                    }))
                }
                return e
            }, e.exports.__esModule = !0, e.exports.default = e.exports
        },
        3327: function(e, t, r) {
            var n = r(1810);
            e.exports = function(e) {
                if (Array.isArray(e)) return n(e)
            }, e.exports.__esModule = !0, e.exports.default = e.exports
        },
        3328: function(e, t) {
            e.exports = function(e) {
                if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e)
            }, e.exports.__esModule = !0, e.exports.default = e.exports
        },
        3329: function(e, t) {
            e.exports = function() {
                throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }, e.exports.__esModule = !0, e.exports.default = e.exports
        },
        3330: function(e, t) {
            e.exports = function(e) {
                if (Array.isArray(e)) return e
            }, e.exports.__esModule = !0, e.exports.default = e.exports
        },
        3331: function(e, t) {
            e.exports = function(e, t) {
                var r = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                if (null != r) {
                    var n, o, i, s, c = [],
                        a = !0,
                        f = !1;
                    try {
                        if (i = (r = r.call(e)).next, 0 === t) {
                            if (Object(r) !== r) return;
                            a = !1
                        } else
                            for (; !(a = (n = i.call(r)).done) && (c.push(n.value), c.length !== t); a = !0);
                    } catch (e) {
                        f = !0, o = e
                    } finally {
                        try {
                            if (!a && null != r.return && (s = r.return(), Object(s) !== s)) return
                        } finally {
                            if (f) throw o
                        }
                    }
                    return c
                }
            }, e.exports.__esModule = !0, e.exports.default = e.exports
        },
        3332: function(e, t) {
            e.exports = function() {
                throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }, e.exports.__esModule = !0, e.exports.default = e.exports
        },
        3336: function(e, t) {
            function r(t, n) {
                return e.exports = r = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e, t) {
                    return e.__proto__ = t, e
                }, e.exports.__esModule = !0, e.exports.default = e.exports, r(t, n)
            }
            e.exports = r, e.exports.__esModule = !0, e.exports.default = e.exports
        },
        4006: function(e, t) {},
        4297: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.verifyNonExistence = t.verifyExistence = t.tendermintSpec = t.iavlSpec = t.calculateExistenceRoot = t.verifyNonMembership = t.verifyMembership = t.ics23 = void 0;
            var n = r(675);
            Object.defineProperty(t, "ics23", {
                enumerable: !0,
                get: function() {
                    return n.ics23
                }
            });
            var o = r(4298);
            Object.defineProperty(t, "verifyMembership", {
                enumerable: !0,
                get: function() {
                    return o.verifyMembership
                }
            }), Object.defineProperty(t, "verifyNonMembership", {
                enumerable: !0,
                get: function() {
                    return o.verifyNonMembership
                }
            });
            var i = r(2035);
            Object.defineProperty(t, "calculateExistenceRoot", {
                enumerable: !0,
                get: function() {
                    return i.calculateExistenceRoot
                }
            }), Object.defineProperty(t, "iavlSpec", {
                enumerable: !0,
                get: function() {
                    return i.iavlSpec
                }
            }), Object.defineProperty(t, "tendermintSpec", {
                enumerable: !0,
                get: function() {
                    return i.tendermintSpec
                }
            }), Object.defineProperty(t, "verifyExistence", {
                enumerable: !0,
                get: function() {
                    return i.verifyExistence
                }
            }), Object.defineProperty(t, "verifyNonExistence", {
                enumerable: !0,
                get: function() {
                    return i.verifyNonExistence
                }
            })
        },
        4298: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.batchVerifyNonMembership = t.batchVerifyMembership = t.verifyNonMembership = t.verifyMembership = void 0;
            const n = r(4299),
                o = r(2035),
                i = r(2036);

            function s(e, t, r, s, c) {
                const a = function(e, t) {
                    const r = e => !!e && (0, i.bytesEqual)(t, e.key);
                    if (r(e.exist)) return e.exist;
                    if (e.batch) return e.batch.entries.map(e => e.exist || null).find(r);
                    return
                }((0, n.decompress)(e), s);
                if (!a) return !1;
                try {
                    return (0, o.verifyExistence)(a, t, r, s, c), !0
                } catch (e) {
                    return !1
                }
            }

            function c(e, t, r, s) {
                const c = function(e, t) {
                    const r = e => !!e && (!e.left || (0, i.bytesBefore)(e.left.key, t)) && (!e.right || (0, i.bytesBefore)(t, e.right.key));
                    if (r(e.nonexist)) return e.nonexist;
                    if (e.batch) return e.batch.entries.map(e => e.nonexist || null).find(r);
                    return
                }((0, n.decompress)(e), s);
                if (!c) return !1;
                try {
                    return (0, o.verifyNonExistence)(c, t, r, s), !0
                } catch (e) {
                    return !1
                }
            }
            t.verifyMembership = s, t.verifyNonMembership = c, t.batchVerifyMembership = function(e, t, r, o) {
                const i = (0, n.decompress)(e);
                for (const [e, n] of o.entries())
                    if (!s(i, t, r, e, n)) return !1;
                return !0
            }, t.batchVerifyNonMembership = function(e, t, r, o) {
                const i = (0, n.decompress)(e);
                for (const e of o)
                    if (!c(i, t, r, e)) return !1;
                return !0
            }
        },
        4299: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.decompress = t.compress = void 0;
            const n = r(675);

            function o(e) {
                const t = [],
                    r = [],
                    n = new Map;
                for (const o of e.entries)
                    if (o.exist) {
                        const e = {
                            exist: i(o.exist, r, n)
                        };
                        t.push(e)
                    } else {
                        if (!o.nonexist) throw new Error("Unexpected batch entry during compress");
                        {
                            const e = o.nonexist,
                                s = {
                                    nonexist: {
                                        key: e.key,
                                        left: i(e.left, r, n),
                                        right: i(e.right, r, n)
                                    }
                                };
                            t.push(s)
                        }
                    } return {
                    entries: t,
                    lookupInners: r
                }
            }

            function i(e, t, r) {
                if (!e) return;
                const o = e.path.map(e => {
                    const o = n.ics23.InnerOp.encode(e).finish();
                    let i = r.get(o);
                    return void 0 === i && (i = t.length, t.push(e), r.set(o, i)), i
                });
                return {
                    key: e.key,
                    value: e.value,
                    leaf: e.leaf,
                    path: o
                }
            }

            function s(e) {
                const t = e.lookupInners;
                return {
                    entries: e.entries.map(e => {
                        if (e.exist) return {
                            exist: c(e.exist, t)
                        };
                        if (e.nonexist) {
                            const r = e.nonexist;
                            return {
                                nonexist: {
                                    key: r.key,
                                    left: c(r.left, t),
                                    right: c(r.right, t)
                                }
                            }
                        }
                        throw new Error("Unexpected batch entry during compress")
                    })
                }
            }

            function c(e, t) {
                if (!e) return;
                const {
                    key: r,
                    value: n,
                    leaf: o,
                    path: i
                } = e;
                return {
                    key: r,
                    value: n,
                    leaf: o,
                    path: (i || []).map(e => t[e])
                }
            }
            t.compress = function(e) {
                return e.batch ? {
                    compressed: o(e.batch)
                } : e
            }, t.decompress = function(e) {
                return e.compressed ? {
                    batch: s(e.compressed)
                } : e
            }
        },
        4300: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.doHash = t.applyInner = t.applyLeaf = void 0;
            const n = r(4301),
                o = r(367),
                i = r(533),
                s = r(675);

            function c(e, t) {
                return null == e ? t : e
            }
            t.applyLeaf = function(e, t, r) {
                if (0 === t.length) throw new Error("Missing key");
                if (0 === r.length) throw new Error("Missing value");
                const n = l(a(e.prehashKey), f(e.length), t),
                    o = l(a(e.prehashValue), f(e.length), r),
                    i = new Uint8Array([...u(e.prefix), ...n, ...o]);
                return p(a(e.hash), i)
            }, t.applyInner = function(e, t) {
                if (0 === t.length) throw new Error("Inner op needs child value");
                const r = new Uint8Array([...u(e.prefix), ...t, ...u(e.suffix)]);
                return p(a(e.hash), r)
            };
            const a = e => c(e, s.ics23.HashOp.NO_HASH),
                f = e => c(e, s.ics23.LengthOp.NO_PREFIX),
                u = e => c(e, new Uint8Array([]));

            function l(e, t, r) {
                return function(e, t) {
                    switch (e) {
                        case s.ics23.LengthOp.NO_PREFIX:
                            return t;
                        case s.ics23.LengthOp.VAR_PROTO:
                            return new Uint8Array([...h(t.length), ...t]);
                        case s.ics23.LengthOp.REQUIRE_32_BYTES:
                            if (32 !== t.length) throw new Error(`Length is ${t.length}, not 32 bytes`);
                            return t;
                        case s.ics23.LengthOp.REQUIRE_64_BYTES:
                            if (64 !== t.length) throw new Error(`Length is ${t.length}, not 64 bytes`);
                            return t;
                        case s.ics23.LengthOp.FIXED32_LITTLE:
                            return new Uint8Array([...y(t.length), ...t])
                    }
                    throw new Error("Unsupported lengthop: " + e)
                }(t, function(e, t) {
                    if (e === s.ics23.HashOp.NO_HASH) return t;
                    return p(e, t)
                }(e, r))
            }

            function p(e, t) {
                switch (e) {
                    case s.ics23.HashOp.SHA256:
                        return (0, o.sha256)(t);
                    case s.ics23.HashOp.SHA512:
                        return (0, i.sha512)(t);
                    case s.ics23.HashOp.RIPEMD160:
                        return (0, n.ripemd160)(t);
                    case s.ics23.HashOp.BITCOIN:
                        return (0, n.ripemd160)((0, o.sha256)(t));
                    case s.ics23.HashOp.SHA512_256:
                        return (0, i.sha512_256)(t)
                }
                throw new Error("Unsupported hashop: " + e)
            }

            function h(e) {
                let t = [],
                    r = e;
                for (; r >= 128;) {
                    const e = r % 128 + 128;
                    t = [...t, e], r /= 128
                }
                return t = [...t, r], new Uint8Array(t)
            }

            function y(e) {
                const t = new Uint8Array(4);
                let r = e;
                for (let e = t.length; e > 0; e--) t[Math.abs(e - t.length)] = r % 256, r = Math.floor(r / 256);
                return t
            }
            t.doHash = p
        },
        462: function(e, t) {
            e.exports = function(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }, e.exports.__esModule = !0, e.exports.default = e.exports
        },
        463: function(e, t, r) {
            var n = r(1432);

            function o(e, t) {
                for (var r = 0; r < t.length; r++) {
                    var o = t[r];
                    o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, n(o.key), o)
                }
            }
            e.exports = function(e, t, r) {
                return t && o(e.prototype, t), r && o(e, r), Object.defineProperty(e, "prototype", {
                    writable: !1
                }), e
            }, e.exports.__esModule = !0, e.exports.default = e.exports
        },
        547: function(e, t, r) {
            var n = r(282).default,
                o = r(1383);
            e.exports = function(e, t) {
                if (t && ("object" === n(t) || "function" == typeof t)) return t;
                if (void 0 !== t) throw new TypeError("Derived constructors may only return object or undefined");
                return o(e)
            }, e.exports.__esModule = !0, e.exports.default = e.exports
        },
        548: function(e, t) {
            function r(t) {
                return e.exports = r = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                }, e.exports.__esModule = !0, e.exports.default = e.exports, r(t)
            }
            e.exports = r, e.exports.__esModule = !0, e.exports.default = e.exports
        },
        549: function(e, t, r) {
            var n = r(3336);
            e.exports = function(e, t) {
                if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        writable: !0,
                        configurable: !0
                    }
                }), Object.defineProperty(e, "prototype", {
                    writable: !1
                }), t && n(e, t)
            }, e.exports.__esModule = !0, e.exports.default = e.exports
        },
        551: function(e, t, r) {
            var n = r(3325)();
            e.exports = n;
            try {
                regeneratorRuntime = n
            } catch (e) {
                "object" == typeof globalThis ? globalThis.regeneratorRuntime = n : Function("r", "regeneratorRuntime = r")(n)
            }
        },
        552: function(e, t) {
            function r(e, t, r, n, o, i, s) {
                try {
                    var c = e[i](s),
                        a = c.value
                } catch (e) {
                    return void r(e)
                }
                c.done ? t(a) : Promise.resolve(a).then(n, o)
            }
            e.exports = function(e) {
                return function() {
                    var t = this,
                        n = arguments;
                    return new Promise((function(o, i) {
                        var s = e.apply(t, n);

                        function c(e) {
                            r(s, o, i, c, a, "next", e)
                        }

                        function a(e) {
                            r(s, o, i, c, a, "throw", e)
                        }
                        c(void 0)
                    }))
                }
            }, e.exports.__esModule = !0, e.exports.default = e.exports
        },
        675: function(e, t, r) {
            "use strict";
            var n, o, i, s = r(8),
                c = s.Reader,
                a = s.Writer,
                f = s.util,
                u = s.roots.default || (s.roots.default = {});
            u.ics23 = ((i = {}).HashOp = (n = {}, (o = Object.create(n))[n[0] = "NO_HASH"] = 0, o[n[1] = "SHA256"] = 1, o[n[2] = "SHA512"] = 2, o[n[3] = "KECCAK"] = 3, o[n[4] = "RIPEMD160"] = 4, o[n[5] = "BITCOIN"] = 5, o[n[6] = "SHA512_256"] = 6, o), i.LengthOp = function() {
                var e = {},
                    t = Object.create(e);
                return t[e[0] = "NO_PREFIX"] = 0, t[e[1] = "VAR_PROTO"] = 1, t[e[2] = "VAR_RLP"] = 2, t[e[3] = "FIXED32_BIG"] = 3, t[e[4] = "FIXED32_LITTLE"] = 4, t[e[5] = "FIXED64_BIG"] = 5, t[e[6] = "FIXED64_LITTLE"] = 6, t[e[7] = "REQUIRE_32_BYTES"] = 7, t[e[8] = "REQUIRE_64_BYTES"] = 8, t
            }(), i.ExistenceProof = function() {
                function e(e) {
                    if (this.path = [], e)
                        for (var t = Object.keys(e), r = 0; r < t.length; ++r) null != e[t[r]] && (this[t[r]] = e[t[r]])
                }
                return e.prototype.key = f.newBuffer([]), e.prototype.value = f.newBuffer([]), e.prototype.leaf = null, e.prototype.path = f.emptyArray, e.create = function(t) {
                    return new e(t)
                }, e.encode = function(e, t) {
                    if (t || (t = a.create()), null != e.key && e.hasOwnProperty("key") && t.uint32(10).bytes(e.key), null != e.value && e.hasOwnProperty("value") && t.uint32(18).bytes(e.value), null != e.leaf && e.hasOwnProperty("leaf") && u.ics23.LeafOp.encode(e.leaf, t.uint32(26).fork()).ldelim(), null != e.path && e.path.length)
                        for (var r = 0; r < e.path.length; ++r) u.ics23.InnerOp.encode(e.path[r], t.uint32(34).fork()).ldelim();
                    return t
                }, e.encodeDelimited = function(e, t) {
                    return this.encode(e, t).ldelim()
                }, e.decode = function(e, t) {
                    e instanceof c || (e = c.create(e));
                    for (var r = void 0 === t ? e.len : e.pos + t, n = new u.ics23.ExistenceProof; e.pos < r;) {
                        var o = e.uint32();
                        switch (o >>> 3) {
                            case 1:
                                n.key = e.bytes();
                                break;
                            case 2:
                                n.value = e.bytes();
                                break;
                            case 3:
                                n.leaf = u.ics23.LeafOp.decode(e, e.uint32());
                                break;
                            case 4:
                                n.path && n.path.length || (n.path = []), n.path.push(u.ics23.InnerOp.decode(e, e.uint32()));
                                break;
                            default:
                                e.skipType(7 & o)
                        }
                    }
                    return n
                }, e.decodeDelimited = function(e) {
                    return e instanceof c || (e = new c(e)), this.decode(e, e.uint32())
                }, e.verify = function(e) {
                    if ("object" != typeof e || null === e) return "object expected";
                    if (null != e.key && e.hasOwnProperty("key") && !(e.key && "number" == typeof e.key.length || f.isString(e.key))) return "key: buffer expected";
                    if (null != e.value && e.hasOwnProperty("value") && !(e.value && "number" == typeof e.value.length || f.isString(e.value))) return "value: buffer expected";
                    if (null != e.leaf && e.hasOwnProperty("leaf") && (r = u.ics23.LeafOp.verify(e.leaf))) return "leaf." + r;
                    if (null != e.path && e.hasOwnProperty("path")) {
                        if (!Array.isArray(e.path)) return "path: array expected";
                        for (var t = 0; t < e.path.length; ++t) {
                            var r;
                            if (r = u.ics23.InnerOp.verify(e.path[t])) return "path." + r
                        }
                    }
                    return null
                }, e.fromObject = function(e) {
                    if (e instanceof u.ics23.ExistenceProof) return e;
                    var t = new u.ics23.ExistenceProof;
                    if (null != e.key && ("string" == typeof e.key ? f.base64.decode(e.key, t.key = f.newBuffer(f.base64.length(e.key)), 0) : e.key.length && (t.key = e.key)), null != e.value && ("string" == typeof e.value ? f.base64.decode(e.value, t.value = f.newBuffer(f.base64.length(e.value)), 0) : e.value.length && (t.value = e.value)), null != e.leaf) {
                        if ("object" != typeof e.leaf) throw TypeError(".ics23.ExistenceProof.leaf: object expected");
                        t.leaf = u.ics23.LeafOp.fromObject(e.leaf)
                    }
                    if (e.path) {
                        if (!Array.isArray(e.path)) throw TypeError(".ics23.ExistenceProof.path: array expected");
                        t.path = [];
                        for (var r = 0; r < e.path.length; ++r) {
                            if ("object" != typeof e.path[r]) throw TypeError(".ics23.ExistenceProof.path: object expected");
                            t.path[r] = u.ics23.InnerOp.fromObject(e.path[r])
                        }
                    }
                    return t
                }, e.toObject = function(e, t) {
                    t || (t = {});
                    var r = {};
                    if ((t.arrays || t.defaults) && (r.path = []), t.defaults && (t.bytes === String ? r.key = "" : (r.key = [], t.bytes !== Array && (r.key = f.newBuffer(r.key))), t.bytes === String ? r.value = "" : (r.value = [], t.bytes !== Array && (r.value = f.newBuffer(r.value))), r.leaf = null), null != e.key && e.hasOwnProperty("key") && (r.key = t.bytes === String ? f.base64.encode(e.key, 0, e.key.length) : t.bytes === Array ? Array.prototype.slice.call(e.key) : e.key), null != e.value && e.hasOwnProperty("value") && (r.value = t.bytes === String ? f.base64.encode(e.value, 0, e.value.length) : t.bytes === Array ? Array.prototype.slice.call(e.value) : e.value), null != e.leaf && e.hasOwnProperty("leaf") && (r.leaf = u.ics23.LeafOp.toObject(e.leaf, t)), e.path && e.path.length) {
                        r.path = [];
                        for (var n = 0; n < e.path.length; ++n) r.path[n] = u.ics23.InnerOp.toObject(e.path[n], t)
                    }
                    return r
                }, e.prototype.toJSON = function() {
                    return this.constructor.toObject(this, s.util.toJSONOptions)
                }, e
            }(), i.NonExistenceProof = function() {
                function e(e) {
                    if (e)
                        for (var t = Object.keys(e), r = 0; r < t.length; ++r) null != e[t[r]] && (this[t[r]] = e[t[r]])
                }
                return e.prototype.key = f.newBuffer([]), e.prototype.left = null, e.prototype.right = null, e.create = function(t) {
                    return new e(t)
                }, e.encode = function(e, t) {
                    return t || (t = a.create()), null != e.key && e.hasOwnProperty("key") && t.uint32(10).bytes(e.key), null != e.left && e.hasOwnProperty("left") && u.ics23.ExistenceProof.encode(e.left, t.uint32(18).fork()).ldelim(), null != e.right && e.hasOwnProperty("right") && u.ics23.ExistenceProof.encode(e.right, t.uint32(26).fork()).ldelim(), t
                }, e.encodeDelimited = function(e, t) {
                    return this.encode(e, t).ldelim()
                }, e.decode = function(e, t) {
                    e instanceof c || (e = c.create(e));
                    for (var r = void 0 === t ? e.len : e.pos + t, n = new u.ics23.NonExistenceProof; e.pos < r;) {
                        var o = e.uint32();
                        switch (o >>> 3) {
                            case 1:
                                n.key = e.bytes();
                                break;
                            case 2:
                                n.left = u.ics23.ExistenceProof.decode(e, e.uint32());
                                break;
                            case 3:
                                n.right = u.ics23.ExistenceProof.decode(e, e.uint32());
                                break;
                            default:
                                e.skipType(7 & o)
                        }
                    }
                    return n
                }, e.decodeDelimited = function(e) {
                    return e instanceof c || (e = new c(e)), this.decode(e, e.uint32())
                }, e.verify = function(e) {
                    return "object" != typeof e || null === e ? "object expected" : null != e.key && e.hasOwnProperty("key") && !(e.key && "number" == typeof e.key.length || f.isString(e.key)) ? "key: buffer expected" : null != e.left && e.hasOwnProperty("left") && (t = u.ics23.ExistenceProof.verify(e.left)) ? "left." + t : null != e.right && e.hasOwnProperty("right") && (t = u.ics23.ExistenceProof.verify(e.right)) ? "right." + t : null;
                    var t
                }, e.fromObject = function(e) {
                    if (e instanceof u.ics23.NonExistenceProof) return e;
                    var t = new u.ics23.NonExistenceProof;
                    if (null != e.key && ("string" == typeof e.key ? f.base64.decode(e.key, t.key = f.newBuffer(f.base64.length(e.key)), 0) : e.key.length && (t.key = e.key)), null != e.left) {
                        if ("object" != typeof e.left) throw TypeError(".ics23.NonExistenceProof.left: object expected");
                        t.left = u.ics23.ExistenceProof.fromObject(e.left)
                    }
                    if (null != e.right) {
                        if ("object" != typeof e.right) throw TypeError(".ics23.NonExistenceProof.right: object expected");
                        t.right = u.ics23.ExistenceProof.fromObject(e.right)
                    }
                    return t
                }, e.toObject = function(e, t) {
                    t || (t = {});
                    var r = {};
                    return t.defaults && (t.bytes === String ? r.key = "" : (r.key = [], t.bytes !== Array && (r.key = f.newBuffer(r.key))), r.left = null, r.right = null), null != e.key && e.hasOwnProperty("key") && (r.key = t.bytes === String ? f.base64.encode(e.key, 0, e.key.length) : t.bytes === Array ? Array.prototype.slice.call(e.key) : e.key), null != e.left && e.hasOwnProperty("left") && (r.left = u.ics23.ExistenceProof.toObject(e.left, t)), null != e.right && e.hasOwnProperty("right") && (r.right = u.ics23.ExistenceProof.toObject(e.right, t)), r
                }, e.prototype.toJSON = function() {
                    return this.constructor.toObject(this, s.util.toJSONOptions)
                }, e
            }(), i.CommitmentProof = function() {
                function e(e) {
                    if (e)
                        for (var t = Object.keys(e), r = 0; r < t.length; ++r) null != e[t[r]] && (this[t[r]] = e[t[r]])
                }
                var t;
                return e.prototype.exist = null, e.prototype.nonexist = null, e.prototype.batch = null, e.prototype.compressed = null, Object.defineProperty(e.prototype, "proof", {
                    get: f.oneOfGetter(t = ["exist", "nonexist", "batch", "compressed"]),
                    set: f.oneOfSetter(t)
                }), e.create = function(t) {
                    return new e(t)
                }, e.encode = function(e, t) {
                    return t || (t = a.create()), null != e.exist && e.hasOwnProperty("exist") && u.ics23.ExistenceProof.encode(e.exist, t.uint32(10).fork()).ldelim(), null != e.nonexist && e.hasOwnProperty("nonexist") && u.ics23.NonExistenceProof.encode(e.nonexist, t.uint32(18).fork()).ldelim(), null != e.batch && e.hasOwnProperty("batch") && u.ics23.BatchProof.encode(e.batch, t.uint32(26).fork()).ldelim(), null != e.compressed && e.hasOwnProperty("compressed") && u.ics23.CompressedBatchProof.encode(e.compressed, t.uint32(34).fork()).ldelim(), t
                }, e.encodeDelimited = function(e, t) {
                    return this.encode(e, t).ldelim()
                }, e.decode = function(e, t) {
                    e instanceof c || (e = c.create(e));
                    for (var r = void 0 === t ? e.len : e.pos + t, n = new u.ics23.CommitmentProof; e.pos < r;) {
                        var o = e.uint32();
                        switch (o >>> 3) {
                            case 1:
                                n.exist = u.ics23.ExistenceProof.decode(e, e.uint32());
                                break;
                            case 2:
                                n.nonexist = u.ics23.NonExistenceProof.decode(e, e.uint32());
                                break;
                            case 3:
                                n.batch = u.ics23.BatchProof.decode(e, e.uint32());
                                break;
                            case 4:
                                n.compressed = u.ics23.CompressedBatchProof.decode(e, e.uint32());
                                break;
                            default:
                                e.skipType(7 & o)
                        }
                    }
                    return n
                }, e.decodeDelimited = function(e) {
                    return e instanceof c || (e = new c(e)), this.decode(e, e.uint32())
                }, e.verify = function(e) {
                    if ("object" != typeof e || null === e) return "object expected";
                    var t = {};
                    if (null != e.exist && e.hasOwnProperty("exist") && (t.proof = 1, r = u.ics23.ExistenceProof.verify(e.exist))) return "exist." + r;
                    if (null != e.nonexist && e.hasOwnProperty("nonexist")) {
                        if (1 === t.proof) return "proof: multiple values";
                        if (t.proof = 1, r = u.ics23.NonExistenceProof.verify(e.nonexist)) return "nonexist." + r
                    }
                    if (null != e.batch && e.hasOwnProperty("batch")) {
                        if (1 === t.proof) return "proof: multiple values";
                        if (t.proof = 1, r = u.ics23.BatchProof.verify(e.batch)) return "batch." + r
                    }
                    if (null != e.compressed && e.hasOwnProperty("compressed")) {
                        if (1 === t.proof) return "proof: multiple values";
                        var r;
                        if (t.proof = 1, r = u.ics23.CompressedBatchProof.verify(e.compressed)) return "compressed." + r
                    }
                    return null
                }, e.fromObject = function(e) {
                    if (e instanceof u.ics23.CommitmentProof) return e;
                    var t = new u.ics23.CommitmentProof;
                    if (null != e.exist) {
                        if ("object" != typeof e.exist) throw TypeError(".ics23.CommitmentProof.exist: object expected");
                        t.exist = u.ics23.ExistenceProof.fromObject(e.exist)
                    }
                    if (null != e.nonexist) {
                        if ("object" != typeof e.nonexist) throw TypeError(".ics23.CommitmentProof.nonexist: object expected");
                        t.nonexist = u.ics23.NonExistenceProof.fromObject(e.nonexist)
                    }
                    if (null != e.batch) {
                        if ("object" != typeof e.batch) throw TypeError(".ics23.CommitmentProof.batch: object expected");
                        t.batch = u.ics23.BatchProof.fromObject(e.batch)
                    }
                    if (null != e.compressed) {
                        if ("object" != typeof e.compressed) throw TypeError(".ics23.CommitmentProof.compressed: object expected");
                        t.compressed = u.ics23.CompressedBatchProof.fromObject(e.compressed)
                    }
                    return t
                }, e.toObject = function(e, t) {
                    t || (t = {});
                    var r = {};
                    return null != e.exist && e.hasOwnProperty("exist") && (r.exist = u.ics23.ExistenceProof.toObject(e.exist, t), t.oneofs && (r.proof = "exist")), null != e.nonexist && e.hasOwnProperty("nonexist") && (r.nonexist = u.ics23.NonExistenceProof.toObject(e.nonexist, t), t.oneofs && (r.proof = "nonexist")), null != e.batch && e.hasOwnProperty("batch") && (r.batch = u.ics23.BatchProof.toObject(e.batch, t), t.oneofs && (r.proof = "batch")), null != e.compressed && e.hasOwnProperty("compressed") && (r.compressed = u.ics23.CompressedBatchProof.toObject(e.compressed, t), t.oneofs && (r.proof = "compressed")), r
                }, e.prototype.toJSON = function() {
                    return this.constructor.toObject(this, s.util.toJSONOptions)
                }, e
            }(), i.LeafOp = function() {
                function e(e) {
                    if (e)
                        for (var t = Object.keys(e), r = 0; r < t.length; ++r) null != e[t[r]] && (this[t[r]] = e[t[r]])
                }
                return e.prototype.hash = 0, e.prototype.prehashKey = 0, e.prototype.prehashValue = 0, e.prototype.length = 0, e.prototype.prefix = f.newBuffer([]), e.create = function(t) {
                    return new e(t)
                }, e.encode = function(e, t) {
                    return t || (t = a.create()), null != e.hash && e.hasOwnProperty("hash") && t.uint32(8).int32(e.hash), null != e.prehashKey && e.hasOwnProperty("prehashKey") && t.uint32(16).int32(e.prehashKey), null != e.prehashValue && e.hasOwnProperty("prehashValue") && t.uint32(24).int32(e.prehashValue), null != e.length && e.hasOwnProperty("length") && t.uint32(32).int32(e.length), null != e.prefix && e.hasOwnProperty("prefix") && t.uint32(42).bytes(e.prefix), t
                }, e.encodeDelimited = function(e, t) {
                    return this.encode(e, t).ldelim()
                }, e.decode = function(e, t) {
                    e instanceof c || (e = c.create(e));
                    for (var r = void 0 === t ? e.len : e.pos + t, n = new u.ics23.LeafOp; e.pos < r;) {
                        var o = e.uint32();
                        switch (o >>> 3) {
                            case 1:
                                n.hash = e.int32();
                                break;
                            case 2:
                                n.prehashKey = e.int32();
                                break;
                            case 3:
                                n.prehashValue = e.int32();
                                break;
                            case 4:
                                n.length = e.int32();
                                break;
                            case 5:
                                n.prefix = e.bytes();
                                break;
                            default:
                                e.skipType(7 & o)
                        }
                    }
                    return n
                }, e.decodeDelimited = function(e) {
                    return e instanceof c || (e = new c(e)), this.decode(e, e.uint32())
                }, e.verify = function(e) {
                    if ("object" != typeof e || null === e) return "object expected";
                    if (null != e.hash && e.hasOwnProperty("hash")) switch (e.hash) {
                        default:
                            return "hash: enum value expected";
                        case 0:
                        case 1:
                        case 2:
                        case 3:
                        case 4:
                        case 5:
                        case 6:
                    }
                    if (null != e.prehashKey && e.hasOwnProperty("prehashKey")) switch (e.prehashKey) {
                        default:
                            return "prehashKey: enum value expected";
                        case 0:
                        case 1:
                        case 2:
                        case 3:
                        case 4:
                        case 5:
                        case 6:
                    }
                    if (null != e.prehashValue && e.hasOwnProperty("prehashValue")) switch (e.prehashValue) {
                        default:
                            return "prehashValue: enum value expected";
                        case 0:
                        case 1:
                        case 2:
                        case 3:
                        case 4:
                        case 5:
                        case 6:
                    }
                    if (null != e.length && e.hasOwnProperty("length")) switch (e.length) {
                        default:
                            return "length: enum value expected";
                        case 0:
                        case 1:
                        case 2:
                        case 3:
                        case 4:
                        case 5:
                        case 6:
                        case 7:
                        case 8:
                    }
                    return null != e.prefix && e.hasOwnProperty("prefix") && !(e.prefix && "number" == typeof e.prefix.length || f.isString(e.prefix)) ? "prefix: buffer expected" : null
                }, e.fromObject = function(e) {
                    if (e instanceof u.ics23.LeafOp) return e;
                    var t = new u.ics23.LeafOp;
                    switch (e.hash) {
                        case "NO_HASH":
                        case 0:
                            t.hash = 0;
                            break;
                        case "SHA256":
                        case 1:
                            t.hash = 1;
                            break;
                        case "SHA512":
                        case 2:
                            t.hash = 2;
                            break;
                        case "KECCAK":
                        case 3:
                            t.hash = 3;
                            break;
                        case "RIPEMD160":
                        case 4:
                            t.hash = 4;
                            break;
                        case "BITCOIN":
                        case 5:
                            t.hash = 5;
                            break;
                        case "SHA512_256":
                        case 6:
                            t.hash = 6
                    }
                    switch (e.prehashKey) {
                        case "NO_HASH":
                        case 0:
                            t.prehashKey = 0;
                            break;
                        case "SHA256":
                        case 1:
                            t.prehashKey = 1;
                            break;
                        case "SHA512":
                        case 2:
                            t.prehashKey = 2;
                            break;
                        case "KECCAK":
                        case 3:
                            t.prehashKey = 3;
                            break;
                        case "RIPEMD160":
                        case 4:
                            t.prehashKey = 4;
                            break;
                        case "BITCOIN":
                        case 5:
                            t.prehashKey = 5;
                            break;
                        case "SHA512_256":
                        case 6:
                            t.prehashKey = 6
                    }
                    switch (e.prehashValue) {
                        case "NO_HASH":
                        case 0:
                            t.prehashValue = 0;
                            break;
                        case "SHA256":
                        case 1:
                            t.prehashValue = 1;
                            break;
                        case "SHA512":
                        case 2:
                            t.prehashValue = 2;
                            break;
                        case "KECCAK":
                        case 3:
                            t.prehashValue = 3;
                            break;
                        case "RIPEMD160":
                        case 4:
                            t.prehashValue = 4;
                            break;
                        case "BITCOIN":
                        case 5:
                            t.prehashValue = 5;
                            break;
                        case "SHA512_256":
                        case 6:
                            t.prehashValue = 6
                    }
                    switch (e.length) {
                        case "NO_PREFIX":
                        case 0:
                            t.length = 0;
                            break;
                        case "VAR_PROTO":
                        case 1:
                            t.length = 1;
                            break;
                        case "VAR_RLP":
                        case 2:
                            t.length = 2;
                            break;
                        case "FIXED32_BIG":
                        case 3:
                            t.length = 3;
                            break;
                        case "FIXED32_LITTLE":
                        case 4:
                            t.length = 4;
                            break;
                        case "FIXED64_BIG":
                        case 5:
                            t.length = 5;
                            break;
                        case "FIXED64_LITTLE":
                        case 6:
                            t.length = 6;
                            break;
                        case "REQUIRE_32_BYTES":
                        case 7:
                            t.length = 7;
                            break;
                        case "REQUIRE_64_BYTES":
                        case 8:
                            t.length = 8
                    }
                    return null != e.prefix && ("string" == typeof e.prefix ? f.base64.decode(e.prefix, t.prefix = f.newBuffer(f.base64.length(e.prefix)), 0) : e.prefix.length && (t.prefix = e.prefix)), t
                }, e.toObject = function(e, t) {
                    t || (t = {});
                    var r = {};
                    return t.defaults && (r.hash = t.enums === String ? "NO_HASH" : 0, r.prehashKey = t.enums === String ? "NO_HASH" : 0, r.prehashValue = t.enums === String ? "NO_HASH" : 0, r.length = t.enums === String ? "NO_PREFIX" : 0, t.bytes === String ? r.prefix = "" : (r.prefix = [], t.bytes !== Array && (r.prefix = f.newBuffer(r.prefix)))), null != e.hash && e.hasOwnProperty("hash") && (r.hash = t.enums === String ? u.ics23.HashOp[e.hash] : e.hash), null != e.prehashKey && e.hasOwnProperty("prehashKey") && (r.prehashKey = t.enums === String ? u.ics23.HashOp[e.prehashKey] : e.prehashKey), null != e.prehashValue && e.hasOwnProperty("prehashValue") && (r.prehashValue = t.enums === String ? u.ics23.HashOp[e.prehashValue] : e.prehashValue), null != e.length && e.hasOwnProperty("length") && (r.length = t.enums === String ? u.ics23.LengthOp[e.length] : e.length), null != e.prefix && e.hasOwnProperty("prefix") && (r.prefix = t.bytes === String ? f.base64.encode(e.prefix, 0, e.prefix.length) : t.bytes === Array ? Array.prototype.slice.call(e.prefix) : e.prefix), r
                }, e.prototype.toJSON = function() {
                    return this.constructor.toObject(this, s.util.toJSONOptions)
                }, e
            }(), i.InnerOp = function() {
                function e(e) {
                    if (e)
                        for (var t = Object.keys(e), r = 0; r < t.length; ++r) null != e[t[r]] && (this[t[r]] = e[t[r]])
                }
                return e.prototype.hash = 0, e.prototype.prefix = f.newBuffer([]), e.prototype.suffix = f.newBuffer([]), e.create = function(t) {
                    return new e(t)
                }, e.encode = function(e, t) {
                    return t || (t = a.create()), null != e.hash && e.hasOwnProperty("hash") && t.uint32(8).int32(e.hash), null != e.prefix && e.hasOwnProperty("prefix") && t.uint32(18).bytes(e.prefix), null != e.suffix && e.hasOwnProperty("suffix") && t.uint32(26).bytes(e.suffix), t
                }, e.encodeDelimited = function(e, t) {
                    return this.encode(e, t).ldelim()
                }, e.decode = function(e, t) {
                    e instanceof c || (e = c.create(e));
                    for (var r = void 0 === t ? e.len : e.pos + t, n = new u.ics23.InnerOp; e.pos < r;) {
                        var o = e.uint32();
                        switch (o >>> 3) {
                            case 1:
                                n.hash = e.int32();
                                break;
                            case 2:
                                n.prefix = e.bytes();
                                break;
                            case 3:
                                n.suffix = e.bytes();
                                break;
                            default:
                                e.skipType(7 & o)
                        }
                    }
                    return n
                }, e.decodeDelimited = function(e) {
                    return e instanceof c || (e = new c(e)), this.decode(e, e.uint32())
                }, e.verify = function(e) {
                    if ("object" != typeof e || null === e) return "object expected";
                    if (null != e.hash && e.hasOwnProperty("hash")) switch (e.hash) {
                        default:
                            return "hash: enum value expected";
                        case 0:
                        case 1:
                        case 2:
                        case 3:
                        case 4:
                        case 5:
                        case 6:
                    }
                    return null != e.prefix && e.hasOwnProperty("prefix") && !(e.prefix && "number" == typeof e.prefix.length || f.isString(e.prefix)) ? "prefix: buffer expected" : null != e.suffix && e.hasOwnProperty("suffix") && !(e.suffix && "number" == typeof e.suffix.length || f.isString(e.suffix)) ? "suffix: buffer expected" : null
                }, e.fromObject = function(e) {
                    if (e instanceof u.ics23.InnerOp) return e;
                    var t = new u.ics23.InnerOp;
                    switch (e.hash) {
                        case "NO_HASH":
                        case 0:
                            t.hash = 0;
                            break;
                        case "SHA256":
                        case 1:
                            t.hash = 1;
                            break;
                        case "SHA512":
                        case 2:
                            t.hash = 2;
                            break;
                        case "KECCAK":
                        case 3:
                            t.hash = 3;
                            break;
                        case "RIPEMD160":
                        case 4:
                            t.hash = 4;
                            break;
                        case "BITCOIN":
                        case 5:
                            t.hash = 5;
                            break;
                        case "SHA512_256":
                        case 6:
                            t.hash = 6
                    }
                    return null != e.prefix && ("string" == typeof e.prefix ? f.base64.decode(e.prefix, t.prefix = f.newBuffer(f.base64.length(e.prefix)), 0) : e.prefix.length && (t.prefix = e.prefix)), null != e.suffix && ("string" == typeof e.suffix ? f.base64.decode(e.suffix, t.suffix = f.newBuffer(f.base64.length(e.suffix)), 0) : e.suffix.length && (t.suffix = e.suffix)), t
                }, e.toObject = function(e, t) {
                    t || (t = {});
                    var r = {};
                    return t.defaults && (r.hash = t.enums === String ? "NO_HASH" : 0, t.bytes === String ? r.prefix = "" : (r.prefix = [], t.bytes !== Array && (r.prefix = f.newBuffer(r.prefix))), t.bytes === String ? r.suffix = "" : (r.suffix = [], t.bytes !== Array && (r.suffix = f.newBuffer(r.suffix)))), null != e.hash && e.hasOwnProperty("hash") && (r.hash = t.enums === String ? u.ics23.HashOp[e.hash] : e.hash), null != e.prefix && e.hasOwnProperty("prefix") && (r.prefix = t.bytes === String ? f.base64.encode(e.prefix, 0, e.prefix.length) : t.bytes === Array ? Array.prototype.slice.call(e.prefix) : e.prefix), null != e.suffix && e.hasOwnProperty("suffix") && (r.suffix = t.bytes === String ? f.base64.encode(e.suffix, 0, e.suffix.length) : t.bytes === Array ? Array.prototype.slice.call(e.suffix) : e.suffix), r
                }, e.prototype.toJSON = function() {
                    return this.constructor.toObject(this, s.util.toJSONOptions)
                }, e
            }(), i.ProofSpec = function() {
                function e(e) {
                    if (e)
                        for (var t = Object.keys(e), r = 0; r < t.length; ++r) null != e[t[r]] && (this[t[r]] = e[t[r]])
                }
                return e.prototype.leafSpec = null, e.prototype.innerSpec = null, e.prototype.maxDepth = 0, e.prototype.minDepth = 0, e.create = function(t) {
                    return new e(t)
                }, e.encode = function(e, t) {
                    return t || (t = a.create()), null != e.leafSpec && e.hasOwnProperty("leafSpec") && u.ics23.LeafOp.encode(e.leafSpec, t.uint32(10).fork()).ldelim(), null != e.innerSpec && e.hasOwnProperty("innerSpec") && u.ics23.InnerSpec.encode(e.innerSpec, t.uint32(18).fork()).ldelim(), null != e.maxDepth && e.hasOwnProperty("maxDepth") && t.uint32(24).int32(e.maxDepth), null != e.minDepth && e.hasOwnProperty("minDepth") && t.uint32(32).int32(e.minDepth), t
                }, e.encodeDelimited = function(e, t) {
                    return this.encode(e, t).ldelim()
                }, e.decode = function(e, t) {
                    e instanceof c || (e = c.create(e));
                    for (var r = void 0 === t ? e.len : e.pos + t, n = new u.ics23.ProofSpec; e.pos < r;) {
                        var o = e.uint32();
                        switch (o >>> 3) {
                            case 1:
                                n.leafSpec = u.ics23.LeafOp.decode(e, e.uint32());
                                break;
                            case 2:
                                n.innerSpec = u.ics23.InnerSpec.decode(e, e.uint32());
                                break;
                            case 3:
                                n.maxDepth = e.int32();
                                break;
                            case 4:
                                n.minDepth = e.int32();
                                break;
                            default:
                                e.skipType(7 & o)
                        }
                    }
                    return n
                }, e.decodeDelimited = function(e) {
                    return e instanceof c || (e = new c(e)), this.decode(e, e.uint32())
                }, e.verify = function(e) {
                    return "object" != typeof e || null === e ? "object expected" : null != e.leafSpec && e.hasOwnProperty("leafSpec") && (t = u.ics23.LeafOp.verify(e.leafSpec)) ? "leafSpec." + t : null != e.innerSpec && e.hasOwnProperty("innerSpec") && (t = u.ics23.InnerSpec.verify(e.innerSpec)) ? "innerSpec." + t : null != e.maxDepth && e.hasOwnProperty("maxDepth") && !f.isInteger(e.maxDepth) ? "maxDepth: integer expected" : null != e.minDepth && e.hasOwnProperty("minDepth") && !f.isInteger(e.minDepth) ? "minDepth: integer expected" : null;
                    var t
                }, e.fromObject = function(e) {
                    if (e instanceof u.ics23.ProofSpec) return e;
                    var t = new u.ics23.ProofSpec;
                    if (null != e.leafSpec) {
                        if ("object" != typeof e.leafSpec) throw TypeError(".ics23.ProofSpec.leafSpec: object expected");
                        t.leafSpec = u.ics23.LeafOp.fromObject(e.leafSpec)
                    }
                    if (null != e.innerSpec) {
                        if ("object" != typeof e.innerSpec) throw TypeError(".ics23.ProofSpec.innerSpec: object expected");
                        t.innerSpec = u.ics23.InnerSpec.fromObject(e.innerSpec)
                    }
                    return null != e.maxDepth && (t.maxDepth = 0 | e.maxDepth), null != e.minDepth && (t.minDepth = 0 | e.minDepth), t
                }, e.toObject = function(e, t) {
                    t || (t = {});
                    var r = {};
                    return t.defaults && (r.leafSpec = null, r.innerSpec = null, r.maxDepth = 0, r.minDepth = 0), null != e.leafSpec && e.hasOwnProperty("leafSpec") && (r.leafSpec = u.ics23.LeafOp.toObject(e.leafSpec, t)), null != e.innerSpec && e.hasOwnProperty("innerSpec") && (r.innerSpec = u.ics23.InnerSpec.toObject(e.innerSpec, t)), null != e.maxDepth && e.hasOwnProperty("maxDepth") && (r.maxDepth = e.maxDepth), null != e.minDepth && e.hasOwnProperty("minDepth") && (r.minDepth = e.minDepth), r
                }, e.prototype.toJSON = function() {
                    return this.constructor.toObject(this, s.util.toJSONOptions)
                }, e
            }(), i.InnerSpec = function() {
                function e(e) {
                    if (this.childOrder = [], e)
                        for (var t = Object.keys(e), r = 0; r < t.length; ++r) null != e[t[r]] && (this[t[r]] = e[t[r]])
                }
                return e.prototype.childOrder = f.emptyArray, e.prototype.childSize = 0, e.prototype.minPrefixLength = 0, e.prototype.maxPrefixLength = 0, e.prototype.emptyChild = f.newBuffer([]), e.prototype.hash = 0, e.create = function(t) {
                    return new e(t)
                }, e.encode = function(e, t) {
                    if (t || (t = a.create()), null != e.childOrder && e.childOrder.length) {
                        t.uint32(10).fork();
                        for (var r = 0; r < e.childOrder.length; ++r) t.int32(e.childOrder[r]);
                        t.ldelim()
                    }
                    return null != e.childSize && e.hasOwnProperty("childSize") && t.uint32(16).int32(e.childSize), null != e.minPrefixLength && e.hasOwnProperty("minPrefixLength") && t.uint32(24).int32(e.minPrefixLength), null != e.maxPrefixLength && e.hasOwnProperty("maxPrefixLength") && t.uint32(32).int32(e.maxPrefixLength), null != e.emptyChild && e.hasOwnProperty("emptyChild") && t.uint32(42).bytes(e.emptyChild), null != e.hash && e.hasOwnProperty("hash") && t.uint32(48).int32(e.hash), t
                }, e.encodeDelimited = function(e, t) {
                    return this.encode(e, t).ldelim()
                }, e.decode = function(e, t) {
                    e instanceof c || (e = c.create(e));
                    for (var r = void 0 === t ? e.len : e.pos + t, n = new u.ics23.InnerSpec; e.pos < r;) {
                        var o = e.uint32();
                        switch (o >>> 3) {
                            case 1:
                                if (n.childOrder && n.childOrder.length || (n.childOrder = []), 2 == (7 & o))
                                    for (var i = e.uint32() + e.pos; e.pos < i;) n.childOrder.push(e.int32());
                                else n.childOrder.push(e.int32());
                                break;
                            case 2:
                                n.childSize = e.int32();
                                break;
                            case 3:
                                n.minPrefixLength = e.int32();
                                break;
                            case 4:
                                n.maxPrefixLength = e.int32();
                                break;
                            case 5:
                                n.emptyChild = e.bytes();
                                break;
                            case 6:
                                n.hash = e.int32();
                                break;
                            default:
                                e.skipType(7 & o)
                        }
                    }
                    return n
                }, e.decodeDelimited = function(e) {
                    return e instanceof c || (e = new c(e)), this.decode(e, e.uint32())
                }, e.verify = function(e) {
                    if ("object" != typeof e || null === e) return "object expected";
                    if (null != e.childOrder && e.hasOwnProperty("childOrder")) {
                        if (!Array.isArray(e.childOrder)) return "childOrder: array expected";
                        for (var t = 0; t < e.childOrder.length; ++t)
                            if (!f.isInteger(e.childOrder[t])) return "childOrder: integer[] expected"
                    }
                    if (null != e.childSize && e.hasOwnProperty("childSize") && !f.isInteger(e.childSize)) return "childSize: integer expected";
                    if (null != e.minPrefixLength && e.hasOwnProperty("minPrefixLength") && !f.isInteger(e.minPrefixLength)) return "minPrefixLength: integer expected";
                    if (null != e.maxPrefixLength && e.hasOwnProperty("maxPrefixLength") && !f.isInteger(e.maxPrefixLength)) return "maxPrefixLength: integer expected";
                    if (null != e.emptyChild && e.hasOwnProperty("emptyChild") && !(e.emptyChild && "number" == typeof e.emptyChild.length || f.isString(e.emptyChild))) return "emptyChild: buffer expected";
                    if (null != e.hash && e.hasOwnProperty("hash")) switch (e.hash) {
                        default:
                            return "hash: enum value expected";
                        case 0:
                        case 1:
                        case 2:
                        case 3:
                        case 4:
                        case 5:
                        case 6:
                    }
                    return null
                }, e.fromObject = function(e) {
                    if (e instanceof u.ics23.InnerSpec) return e;
                    var t = new u.ics23.InnerSpec;
                    if (e.childOrder) {
                        if (!Array.isArray(e.childOrder)) throw TypeError(".ics23.InnerSpec.childOrder: array expected");
                        t.childOrder = [];
                        for (var r = 0; r < e.childOrder.length; ++r) t.childOrder[r] = 0 | e.childOrder[r]
                    }
                    switch (null != e.childSize && (t.childSize = 0 | e.childSize), null != e.minPrefixLength && (t.minPrefixLength = 0 | e.minPrefixLength), null != e.maxPrefixLength && (t.maxPrefixLength = 0 | e.maxPrefixLength), null != e.emptyChild && ("string" == typeof e.emptyChild ? f.base64.decode(e.emptyChild, t.emptyChild = f.newBuffer(f.base64.length(e.emptyChild)), 0) : e.emptyChild.length && (t.emptyChild = e.emptyChild)), e.hash) {
                        case "NO_HASH":
                        case 0:
                            t.hash = 0;
                            break;
                        case "SHA256":
                        case 1:
                            t.hash = 1;
                            break;
                        case "SHA512":
                        case 2:
                            t.hash = 2;
                            break;
                        case "KECCAK":
                        case 3:
                            t.hash = 3;
                            break;
                        case "RIPEMD160":
                        case 4:
                            t.hash = 4;
                            break;
                        case "BITCOIN":
                        case 5:
                            t.hash = 5;
                            break;
                        case "SHA512_256":
                        case 6:
                            t.hash = 6
                    }
                    return t
                }, e.toObject = function(e, t) {
                    t || (t = {});
                    var r = {};
                    if ((t.arrays || t.defaults) && (r.childOrder = []), t.defaults && (r.childSize = 0, r.minPrefixLength = 0, r.maxPrefixLength = 0, t.bytes === String ? r.emptyChild = "" : (r.emptyChild = [], t.bytes !== Array && (r.emptyChild = f.newBuffer(r.emptyChild))), r.hash = t.enums === String ? "NO_HASH" : 0), e.childOrder && e.childOrder.length) {
                        r.childOrder = [];
                        for (var n = 0; n < e.childOrder.length; ++n) r.childOrder[n] = e.childOrder[n]
                    }
                    return null != e.childSize && e.hasOwnProperty("childSize") && (r.childSize = e.childSize), null != e.minPrefixLength && e.hasOwnProperty("minPrefixLength") && (r.minPrefixLength = e.minPrefixLength), null != e.maxPrefixLength && e.hasOwnProperty("maxPrefixLength") && (r.maxPrefixLength = e.maxPrefixLength), null != e.emptyChild && e.hasOwnProperty("emptyChild") && (r.emptyChild = t.bytes === String ? f.base64.encode(e.emptyChild, 0, e.emptyChild.length) : t.bytes === Array ? Array.prototype.slice.call(e.emptyChild) : e.emptyChild), null != e.hash && e.hasOwnProperty("hash") && (r.hash = t.enums === String ? u.ics23.HashOp[e.hash] : e.hash), r
                }, e.prototype.toJSON = function() {
                    return this.constructor.toObject(this, s.util.toJSONOptions)
                }, e
            }(), i.BatchProof = function() {
                function e(e) {
                    if (this.entries = [], e)
                        for (var t = Object.keys(e), r = 0; r < t.length; ++r) null != e[t[r]] && (this[t[r]] = e[t[r]])
                }
                return e.prototype.entries = f.emptyArray, e.create = function(t) {
                    return new e(t)
                }, e.encode = function(e, t) {
                    if (t || (t = a.create()), null != e.entries && e.entries.length)
                        for (var r = 0; r < e.entries.length; ++r) u.ics23.BatchEntry.encode(e.entries[r], t.uint32(10).fork()).ldelim();
                    return t
                }, e.encodeDelimited = function(e, t) {
                    return this.encode(e, t).ldelim()
                }, e.decode = function(e, t) {
                    e instanceof c || (e = c.create(e));
                    for (var r = void 0 === t ? e.len : e.pos + t, n = new u.ics23.BatchProof; e.pos < r;) {
                        var o = e.uint32();
                        switch (o >>> 3) {
                            case 1:
                                n.entries && n.entries.length || (n.entries = []), n.entries.push(u.ics23.BatchEntry.decode(e, e.uint32()));
                                break;
                            default:
                                e.skipType(7 & o)
                        }
                    }
                    return n
                }, e.decodeDelimited = function(e) {
                    return e instanceof c || (e = new c(e)), this.decode(e, e.uint32())
                }, e.verify = function(e) {
                    if ("object" != typeof e || null === e) return "object expected";
                    if (null != e.entries && e.hasOwnProperty("entries")) {
                        if (!Array.isArray(e.entries)) return "entries: array expected";
                        for (var t = 0; t < e.entries.length; ++t) {
                            var r = u.ics23.BatchEntry.verify(e.entries[t]);
                            if (r) return "entries." + r
                        }
                    }
                    return null
                }, e.fromObject = function(e) {
                    if (e instanceof u.ics23.BatchProof) return e;
                    var t = new u.ics23.BatchProof;
                    if (e.entries) {
                        if (!Array.isArray(e.entries)) throw TypeError(".ics23.BatchProof.entries: array expected");
                        t.entries = [];
                        for (var r = 0; r < e.entries.length; ++r) {
                            if ("object" != typeof e.entries[r]) throw TypeError(".ics23.BatchProof.entries: object expected");
                            t.entries[r] = u.ics23.BatchEntry.fromObject(e.entries[r])
                        }
                    }
                    return t
                }, e.toObject = function(e, t) {
                    t || (t = {});
                    var r = {};
                    if ((t.arrays || t.defaults) && (r.entries = []), e.entries && e.entries.length) {
                        r.entries = [];
                        for (var n = 0; n < e.entries.length; ++n) r.entries[n] = u.ics23.BatchEntry.toObject(e.entries[n], t)
                    }
                    return r
                }, e.prototype.toJSON = function() {
                    return this.constructor.toObject(this, s.util.toJSONOptions)
                }, e
            }(), i.BatchEntry = function() {
                function e(e) {
                    if (e)
                        for (var t = Object.keys(e), r = 0; r < t.length; ++r) null != e[t[r]] && (this[t[r]] = e[t[r]])
                }
                var t;
                return e.prototype.exist = null, e.prototype.nonexist = null, Object.defineProperty(e.prototype, "proof", {
                    get: f.oneOfGetter(t = ["exist", "nonexist"]),
                    set: f.oneOfSetter(t)
                }), e.create = function(t) {
                    return new e(t)
                }, e.encode = function(e, t) {
                    return t || (t = a.create()), null != e.exist && e.hasOwnProperty("exist") && u.ics23.ExistenceProof.encode(e.exist, t.uint32(10).fork()).ldelim(), null != e.nonexist && e.hasOwnProperty("nonexist") && u.ics23.NonExistenceProof.encode(e.nonexist, t.uint32(18).fork()).ldelim(), t
                }, e.encodeDelimited = function(e, t) {
                    return this.encode(e, t).ldelim()
                }, e.decode = function(e, t) {
                    e instanceof c || (e = c.create(e));
                    for (var r = void 0 === t ? e.len : e.pos + t, n = new u.ics23.BatchEntry; e.pos < r;) {
                        var o = e.uint32();
                        switch (o >>> 3) {
                            case 1:
                                n.exist = u.ics23.ExistenceProof.decode(e, e.uint32());
                                break;
                            case 2:
                                n.nonexist = u.ics23.NonExistenceProof.decode(e, e.uint32());
                                break;
                            default:
                                e.skipType(7 & o)
                        }
                    }
                    return n
                }, e.decodeDelimited = function(e) {
                    return e instanceof c || (e = new c(e)), this.decode(e, e.uint32())
                }, e.verify = function(e) {
                    if ("object" != typeof e || null === e) return "object expected";
                    var t = {};
                    if (null != e.exist && e.hasOwnProperty("exist") && (t.proof = 1, r = u.ics23.ExistenceProof.verify(e.exist))) return "exist." + r;
                    if (null != e.nonexist && e.hasOwnProperty("nonexist")) {
                        if (1 === t.proof) return "proof: multiple values";
                        var r;
                        if (t.proof = 1, r = u.ics23.NonExistenceProof.verify(e.nonexist)) return "nonexist." + r
                    }
                    return null
                }, e.fromObject = function(e) {
                    if (e instanceof u.ics23.BatchEntry) return e;
                    var t = new u.ics23.BatchEntry;
                    if (null != e.exist) {
                        if ("object" != typeof e.exist) throw TypeError(".ics23.BatchEntry.exist: object expected");
                        t.exist = u.ics23.ExistenceProof.fromObject(e.exist)
                    }
                    if (null != e.nonexist) {
                        if ("object" != typeof e.nonexist) throw TypeError(".ics23.BatchEntry.nonexist: object expected");
                        t.nonexist = u.ics23.NonExistenceProof.fromObject(e.nonexist)
                    }
                    return t
                }, e.toObject = function(e, t) {
                    t || (t = {});
                    var r = {};
                    return null != e.exist && e.hasOwnProperty("exist") && (r.exist = u.ics23.ExistenceProof.toObject(e.exist, t), t.oneofs && (r.proof = "exist")), null != e.nonexist && e.hasOwnProperty("nonexist") && (r.nonexist = u.ics23.NonExistenceProof.toObject(e.nonexist, t), t.oneofs && (r.proof = "nonexist")), r
                }, e.prototype.toJSON = function() {
                    return this.constructor.toObject(this, s.util.toJSONOptions)
                }, e
            }(), i.CompressedBatchProof = function() {
                function e(e) {
                    if (this.entries = [], this.lookupInners = [], e)
                        for (var t = Object.keys(e), r = 0; r < t.length; ++r) null != e[t[r]] && (this[t[r]] = e[t[r]])
                }
                return e.prototype.entries = f.emptyArray, e.prototype.lookupInners = f.emptyArray, e.create = function(t) {
                    return new e(t)
                }, e.encode = function(e, t) {
                    if (t || (t = a.create()), null != e.entries && e.entries.length)
                        for (var r = 0; r < e.entries.length; ++r) u.ics23.CompressedBatchEntry.encode(e.entries[r], t.uint32(10).fork()).ldelim();
                    if (null != e.lookupInners && e.lookupInners.length)
                        for (r = 0; r < e.lookupInners.length; ++r) u.ics23.InnerOp.encode(e.lookupInners[r], t.uint32(18).fork()).ldelim();
                    return t
                }, e.encodeDelimited = function(e, t) {
                    return this.encode(e, t).ldelim()
                }, e.decode = function(e, t) {
                    e instanceof c || (e = c.create(e));
                    for (var r = void 0 === t ? e.len : e.pos + t, n = new u.ics23.CompressedBatchProof; e.pos < r;) {
                        var o = e.uint32();
                        switch (o >>> 3) {
                            case 1:
                                n.entries && n.entries.length || (n.entries = []), n.entries.push(u.ics23.CompressedBatchEntry.decode(e, e.uint32()));
                                break;
                            case 2:
                                n.lookupInners && n.lookupInners.length || (n.lookupInners = []), n.lookupInners.push(u.ics23.InnerOp.decode(e, e.uint32()));
                                break;
                            default:
                                e.skipType(7 & o)
                        }
                    }
                    return n
                }, e.decodeDelimited = function(e) {
                    return e instanceof c || (e = new c(e)), this.decode(e, e.uint32())
                }, e.verify = function(e) {
                    if ("object" != typeof e || null === e) return "object expected";
                    if (null != e.entries && e.hasOwnProperty("entries")) {
                        if (!Array.isArray(e.entries)) return "entries: array expected";
                        for (var t = 0; t < e.entries.length; ++t)
                            if (r = u.ics23.CompressedBatchEntry.verify(e.entries[t])) return "entries." + r
                    }
                    if (null != e.lookupInners && e.hasOwnProperty("lookupInners")) {
                        if (!Array.isArray(e.lookupInners)) return "lookupInners: array expected";
                        for (t = 0; t < e.lookupInners.length; ++t) {
                            var r;
                            if (r = u.ics23.InnerOp.verify(e.lookupInners[t])) return "lookupInners." + r
                        }
                    }
                    return null
                }, e.fromObject = function(e) {
                    if (e instanceof u.ics23.CompressedBatchProof) return e;
                    var t = new u.ics23.CompressedBatchProof;
                    if (e.entries) {
                        if (!Array.isArray(e.entries)) throw TypeError(".ics23.CompressedBatchProof.entries: array expected");
                        t.entries = [];
                        for (var r = 0; r < e.entries.length; ++r) {
                            if ("object" != typeof e.entries[r]) throw TypeError(".ics23.CompressedBatchProof.entries: object expected");
                            t.entries[r] = u.ics23.CompressedBatchEntry.fromObject(e.entries[r])
                        }
                    }
                    if (e.lookupInners) {
                        if (!Array.isArray(e.lookupInners)) throw TypeError(".ics23.CompressedBatchProof.lookupInners: array expected");
                        for (t.lookupInners = [], r = 0; r < e.lookupInners.length; ++r) {
                            if ("object" != typeof e.lookupInners[r]) throw TypeError(".ics23.CompressedBatchProof.lookupInners: object expected");
                            t.lookupInners[r] = u.ics23.InnerOp.fromObject(e.lookupInners[r])
                        }
                    }
                    return t
                }, e.toObject = function(e, t) {
                    t || (t = {});
                    var r = {};
                    if ((t.arrays || t.defaults) && (r.entries = [], r.lookupInners = []), e.entries && e.entries.length) {
                        r.entries = [];
                        for (var n = 0; n < e.entries.length; ++n) r.entries[n] = u.ics23.CompressedBatchEntry.toObject(e.entries[n], t)
                    }
                    if (e.lookupInners && e.lookupInners.length)
                        for (r.lookupInners = [], n = 0; n < e.lookupInners.length; ++n) r.lookupInners[n] = u.ics23.InnerOp.toObject(e.lookupInners[n], t);
                    return r
                }, e.prototype.toJSON = function() {
                    return this.constructor.toObject(this, s.util.toJSONOptions)
                }, e
            }(), i.CompressedBatchEntry = function() {
                function e(e) {
                    if (e)
                        for (var t = Object.keys(e), r = 0; r < t.length; ++r) null != e[t[r]] && (this[t[r]] = e[t[r]])
                }
                var t;
                return e.prototype.exist = null, e.prototype.nonexist = null, Object.defineProperty(e.prototype, "proof", {
                    get: f.oneOfGetter(t = ["exist", "nonexist"]),
                    set: f.oneOfSetter(t)
                }), e.create = function(t) {
                    return new e(t)
                }, e.encode = function(e, t) {
                    return t || (t = a.create()), null != e.exist && e.hasOwnProperty("exist") && u.ics23.CompressedExistenceProof.encode(e.exist, t.uint32(10).fork()).ldelim(), null != e.nonexist && e.hasOwnProperty("nonexist") && u.ics23.CompressedNonExistenceProof.encode(e.nonexist, t.uint32(18).fork()).ldelim(), t
                }, e.encodeDelimited = function(e, t) {
                    return this.encode(e, t).ldelim()
                }, e.decode = function(e, t) {
                    e instanceof c || (e = c.create(e));
                    for (var r = void 0 === t ? e.len : e.pos + t, n = new u.ics23.CompressedBatchEntry; e.pos < r;) {
                        var o = e.uint32();
                        switch (o >>> 3) {
                            case 1:
                                n.exist = u.ics23.CompressedExistenceProof.decode(e, e.uint32());
                                break;
                            case 2:
                                n.nonexist = u.ics23.CompressedNonExistenceProof.decode(e, e.uint32());
                                break;
                            default:
                                e.skipType(7 & o)
                        }
                    }
                    return n
                }, e.decodeDelimited = function(e) {
                    return e instanceof c || (e = new c(e)), this.decode(e, e.uint32())
                }, e.verify = function(e) {
                    if ("object" != typeof e || null === e) return "object expected";
                    var t = {};
                    if (null != e.exist && e.hasOwnProperty("exist") && (t.proof = 1, r = u.ics23.CompressedExistenceProof.verify(e.exist))) return "exist." + r;
                    if (null != e.nonexist && e.hasOwnProperty("nonexist")) {
                        if (1 === t.proof) return "proof: multiple values";
                        var r;
                        if (t.proof = 1, r = u.ics23.CompressedNonExistenceProof.verify(e.nonexist)) return "nonexist." + r
                    }
                    return null
                }, e.fromObject = function(e) {
                    if (e instanceof u.ics23.CompressedBatchEntry) return e;
                    var t = new u.ics23.CompressedBatchEntry;
                    if (null != e.exist) {
                        if ("object" != typeof e.exist) throw TypeError(".ics23.CompressedBatchEntry.exist: object expected");
                        t.exist = u.ics23.CompressedExistenceProof.fromObject(e.exist)
                    }
                    if (null != e.nonexist) {
                        if ("object" != typeof e.nonexist) throw TypeError(".ics23.CompressedBatchEntry.nonexist: object expected");
                        t.nonexist = u.ics23.CompressedNonExistenceProof.fromObject(e.nonexist)
                    }
                    return t
                }, e.toObject = function(e, t) {
                    t || (t = {});
                    var r = {};
                    return null != e.exist && e.hasOwnProperty("exist") && (r.exist = u.ics23.CompressedExistenceProof.toObject(e.exist, t), t.oneofs && (r.proof = "exist")), null != e.nonexist && e.hasOwnProperty("nonexist") && (r.nonexist = u.ics23.CompressedNonExistenceProof.toObject(e.nonexist, t), t.oneofs && (r.proof = "nonexist")), r
                }, e.prototype.toJSON = function() {
                    return this.constructor.toObject(this, s.util.toJSONOptions)
                }, e
            }(), i.CompressedExistenceProof = function() {
                function e(e) {
                    if (this.path = [], e)
                        for (var t = Object.keys(e), r = 0; r < t.length; ++r) null != e[t[r]] && (this[t[r]] = e[t[r]])
                }
                return e.prototype.key = f.newBuffer([]), e.prototype.value = f.newBuffer([]), e.prototype.leaf = null, e.prototype.path = f.emptyArray, e.create = function(t) {
                    return new e(t)
                }, e.encode = function(e, t) {
                    if (t || (t = a.create()), null != e.key && e.hasOwnProperty("key") && t.uint32(10).bytes(e.key), null != e.value && e.hasOwnProperty("value") && t.uint32(18).bytes(e.value), null != e.leaf && e.hasOwnProperty("leaf") && u.ics23.LeafOp.encode(e.leaf, t.uint32(26).fork()).ldelim(), null != e.path && e.path.length) {
                        t.uint32(34).fork();
                        for (var r = 0; r < e.path.length; ++r) t.int32(e.path[r]);
                        t.ldelim()
                    }
                    return t
                }, e.encodeDelimited = function(e, t) {
                    return this.encode(e, t).ldelim()
                }, e.decode = function(e, t) {
                    e instanceof c || (e = c.create(e));
                    for (var r = void 0 === t ? e.len : e.pos + t, n = new u.ics23.CompressedExistenceProof; e.pos < r;) {
                        var o = e.uint32();
                        switch (o >>> 3) {
                            case 1:
                                n.key = e.bytes();
                                break;
                            case 2:
                                n.value = e.bytes();
                                break;
                            case 3:
                                n.leaf = u.ics23.LeafOp.decode(e, e.uint32());
                                break;
                            case 4:
                                if (n.path && n.path.length || (n.path = []), 2 == (7 & o))
                                    for (var i = e.uint32() + e.pos; e.pos < i;) n.path.push(e.int32());
                                else n.path.push(e.int32());
                                break;
                            default:
                                e.skipType(7 & o)
                        }
                    }
                    return n
                }, e.decodeDelimited = function(e) {
                    return e instanceof c || (e = new c(e)), this.decode(e, e.uint32())
                }, e.verify = function(e) {
                    if ("object" != typeof e || null === e) return "object expected";
                    if (null != e.key && e.hasOwnProperty("key") && !(e.key && "number" == typeof e.key.length || f.isString(e.key))) return "key: buffer expected";
                    if (null != e.value && e.hasOwnProperty("value") && !(e.value && "number" == typeof e.value.length || f.isString(e.value))) return "value: buffer expected";
                    if (null != e.leaf && e.hasOwnProperty("leaf")) {
                        var t = u.ics23.LeafOp.verify(e.leaf);
                        if (t) return "leaf." + t
                    }
                    if (null != e.path && e.hasOwnProperty("path")) {
                        if (!Array.isArray(e.path)) return "path: array expected";
                        for (var r = 0; r < e.path.length; ++r)
                            if (!f.isInteger(e.path[r])) return "path: integer[] expected"
                    }
                    return null
                }, e.fromObject = function(e) {
                    if (e instanceof u.ics23.CompressedExistenceProof) return e;
                    var t = new u.ics23.CompressedExistenceProof;
                    if (null != e.key && ("string" == typeof e.key ? f.base64.decode(e.key, t.key = f.newBuffer(f.base64.length(e.key)), 0) : e.key.length && (t.key = e.key)), null != e.value && ("string" == typeof e.value ? f.base64.decode(e.value, t.value = f.newBuffer(f.base64.length(e.value)), 0) : e.value.length && (t.value = e.value)), null != e.leaf) {
                        if ("object" != typeof e.leaf) throw TypeError(".ics23.CompressedExistenceProof.leaf: object expected");
                        t.leaf = u.ics23.LeafOp.fromObject(e.leaf)
                    }
                    if (e.path) {
                        if (!Array.isArray(e.path)) throw TypeError(".ics23.CompressedExistenceProof.path: array expected");
                        t.path = [];
                        for (var r = 0; r < e.path.length; ++r) t.path[r] = 0 | e.path[r]
                    }
                    return t
                }, e.toObject = function(e, t) {
                    t || (t = {});
                    var r = {};
                    if ((t.arrays || t.defaults) && (r.path = []), t.defaults && (t.bytes === String ? r.key = "" : (r.key = [], t.bytes !== Array && (r.key = f.newBuffer(r.key))), t.bytes === String ? r.value = "" : (r.value = [], t.bytes !== Array && (r.value = f.newBuffer(r.value))), r.leaf = null), null != e.key && e.hasOwnProperty("key") && (r.key = t.bytes === String ? f.base64.encode(e.key, 0, e.key.length) : t.bytes === Array ? Array.prototype.slice.call(e.key) : e.key), null != e.value && e.hasOwnProperty("value") && (r.value = t.bytes === String ? f.base64.encode(e.value, 0, e.value.length) : t.bytes === Array ? Array.prototype.slice.call(e.value) : e.value), null != e.leaf && e.hasOwnProperty("leaf") && (r.leaf = u.ics23.LeafOp.toObject(e.leaf, t)), e.path && e.path.length) {
                        r.path = [];
                        for (var n = 0; n < e.path.length; ++n) r.path[n] = e.path[n]
                    }
                    return r
                }, e.prototype.toJSON = function() {
                    return this.constructor.toObject(this, s.util.toJSONOptions)
                }, e
            }(), i.CompressedNonExistenceProof = function() {
                function e(e) {
                    if (e)
                        for (var t = Object.keys(e), r = 0; r < t.length; ++r) null != e[t[r]] && (this[t[r]] = e[t[r]])
                }
                return e.prototype.key = f.newBuffer([]), e.prototype.left = null, e.prototype.right = null, e.create = function(t) {
                    return new e(t)
                }, e.encode = function(e, t) {
                    return t || (t = a.create()), null != e.key && e.hasOwnProperty("key") && t.uint32(10).bytes(e.key), null != e.left && e.hasOwnProperty("left") && u.ics23.CompressedExistenceProof.encode(e.left, t.uint32(18).fork()).ldelim(), null != e.right && e.hasOwnProperty("right") && u.ics23.CompressedExistenceProof.encode(e.right, t.uint32(26).fork()).ldelim(), t
                }, e.encodeDelimited = function(e, t) {
                    return this.encode(e, t).ldelim()
                }, e.decode = function(e, t) {
                    e instanceof c || (e = c.create(e));
                    for (var r = void 0 === t ? e.len : e.pos + t, n = new u.ics23.CompressedNonExistenceProof; e.pos < r;) {
                        var o = e.uint32();
                        switch (o >>> 3) {
                            case 1:
                                n.key = e.bytes();
                                break;
                            case 2:
                                n.left = u.ics23.CompressedExistenceProof.decode(e, e.uint32());
                                break;
                            case 3:
                                n.right = u.ics23.CompressedExistenceProof.decode(e, e.uint32());
                                break;
                            default:
                                e.skipType(7 & o)
                        }
                    }
                    return n
                }, e.decodeDelimited = function(e) {
                    return e instanceof c || (e = new c(e)), this.decode(e, e.uint32())
                }, e.verify = function(e) {
                    return "object" != typeof e || null === e ? "object expected" : null != e.key && e.hasOwnProperty("key") && !(e.key && "number" == typeof e.key.length || f.isString(e.key)) ? "key: buffer expected" : null != e.left && e.hasOwnProperty("left") && (t = u.ics23.CompressedExistenceProof.verify(e.left)) ? "left." + t : null != e.right && e.hasOwnProperty("right") && (t = u.ics23.CompressedExistenceProof.verify(e.right)) ? "right." + t : null;
                    var t
                }, e.fromObject = function(e) {
                    if (e instanceof u.ics23.CompressedNonExistenceProof) return e;
                    var t = new u.ics23.CompressedNonExistenceProof;
                    if (null != e.key && ("string" == typeof e.key ? f.base64.decode(e.key, t.key = f.newBuffer(f.base64.length(e.key)), 0) : e.key.length && (t.key = e.key)), null != e.left) {
                        if ("object" != typeof e.left) throw TypeError(".ics23.CompressedNonExistenceProof.left: object expected");
                        t.left = u.ics23.CompressedExistenceProof.fromObject(e.left)
                    }
                    if (null != e.right) {
                        if ("object" != typeof e.right) throw TypeError(".ics23.CompressedNonExistenceProof.right: object expected");
                        t.right = u.ics23.CompressedExistenceProof.fromObject(e.right)
                    }
                    return t
                }, e.toObject = function(e, t) {
                    t || (t = {});
                    var r = {};
                    return t.defaults && (t.bytes === String ? r.key = "" : (r.key = [], t.bytes !== Array && (r.key = f.newBuffer(r.key))), r.left = null, r.right = null), null != e.key && e.hasOwnProperty("key") && (r.key = t.bytes === String ? f.base64.encode(e.key, 0, e.key.length) : t.bytes === Array ? Array.prototype.slice.call(e.key) : e.key), null != e.left && e.hasOwnProperty("left") && (r.left = u.ics23.CompressedExistenceProof.toObject(e.left, t)), null != e.right && e.hasOwnProperty("right") && (r.right = u.ics23.CompressedExistenceProof.toObject(e.right, t)), r
                }, e.prototype.toJSON = function() {
                    return this.constructor.toObject(this, s.util.toJSONOptions)
                }, e
            }(), i), e.exports = u
        }
    }
]);