/*! For license information please see vendors.18f3b9b38d0a81fe710b.js.LICENSE.txt */
(window.webpackJsonp = window.webpackJsonp || []).push([
    [119], {
        1186: function(t, e, r) {
            "use strict";
            var i = r(2);
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.Client = void 0;
            var n = i(r(463)),
                o = i(r(462)),
                s = i(r(549)),
                h = i(r(547)),
                a = i(r(548)),
                u = i(r(3638));

            function f(t) {
                var e = function() {
                    if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" == typeof Proxy) return !0;
                    try {
                        return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0
                    } catch (t) {
                        return !1
                    }
                }();
                return function() {
                    var r, i = (0, a.default)(t);
                    if (e) {
                        var n = (0, a.default)(this).constructor;
                        r = Reflect.construct(i, arguments, n)
                    } else r = i.apply(this, arguments);
                    return (0, h.default)(this, r)
                }
            }
            var l = function(t) {
                (0, s.default)(r, t);
                var e = f(r);

                function r() {
                    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "ws://localhost:8080",
                        i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                        n = i.autoconnect,
                        s = void 0 === n || n,
                        h = i.reconnect,
                        a = void 0 === h || h,
                        f = i.reconnect_interval,
                        l = void 0 === f ? 1e3 : f,
                        c = i.max_reconnects,
                        d = void 0 === c ? 5 : c,
                        m = arguments.length > 2 ? arguments[2] : void 0;
                    return (0, o.default)(this, r), e.call(this, u.default, t, {
                        autoconnect: s,
                        reconnect: a,
                        reconnect_interval: l,
                        max_reconnects: d
                    }, m)
                }
                return (0, n.default)(r)
            }(i(r(3639)).default);
            e.Client = l
        },
        3638: function(t, e, r) {
            "use strict";
            var i = r(2);
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.default = function(t, e) {
                return new f(t, e)
            };
            var n = i(r(462)),
                o = i(r(463)),
                s = i(r(549)),
                h = i(r(547)),
                a = i(r(548));

            function u(t) {
                var e = function() {
                    if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" == typeof Proxy) return !0;
                    try {
                        return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0
                    } catch (t) {
                        return !1
                    }
                }();
                return function() {
                    var r, i = (0, a.default)(t);
                    if (e) {
                        var n = (0, a.default)(this).constructor;
                        r = Reflect.construct(i, arguments, n)
                    } else r = i.apply(this, arguments);
                    return (0, h.default)(this, r)
                }
            }
            var f = function(t) {
                (0, s.default)(r, t);
                var e = u(r);

                function r(t, i, o) {
                    var s;
                    return (0, n.default)(this, r), (s = e.call(this)).socket = new window.WebSocket(t, o), s.socket.onopen = function() {
                        return s.emit("open")
                    }, s.socket.onmessage = function(t) {
                        return s.emit("message", t.data)
                    }, s.socket.onerror = function(t) {
                        return s.emit("error", t)
                    }, s.socket.onclose = function(t) {
                        s.emit("close", t.code, t.reason)
                    }, s
                }
                return (0, o.default)(r, [{
                    key: "send",
                    value: function(t, e, r) {
                        var i = r || e;
                        try {
                            this.socket.send(t), i()
                        } catch (t) {
                            i(t)
                        }
                    }
                }, {
                    key: "close",
                    value: function(t, e) {
                        this.socket.close(t, e)
                    }
                }, {
                    key: "addEventListener",
                    value: function(t, e, r) {
                        this.socket.addEventListener(t, e, r)
                    }
                }]), r
            }(r(1388).EventEmitter)
        },
        3639: function(t, e, r) {
            "use strict";
            var i = r(2);
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.default = void 0;
            var n = i(r(551)),
                o = i(r(552)),
                s = i(r(282)),
                h = i(r(462)),
                a = i(r(463)),
                u = i(r(549)),
                f = i(r(547)),
                l = i(r(548)),
                c = r(1388);

            function d(t) {
                var e = function() {
                    if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" == typeof Proxy) return !0;
                    try {
                        return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0
                    } catch (t) {
                        return !1
                    }
                }();
                return function() {
                    var r, i = (0, l.default)(t);
                    if (e) {
                        var n = (0, l.default)(this).constructor;
                        r = Reflect.construct(i, arguments, n)
                    } else r = i.apply(this, arguments);
                    return (0, f.default)(this, r)
                }
            }
            var m = function(t, e) {
                    var r = {};
                    for (var i in t) Object.prototype.hasOwnProperty.call(t, i) && e.indexOf(i) < 0 && (r[i] = t[i]);
                    if (null != t && "function" == typeof Object.getOwnPropertySymbols) {
                        var n = 0;
                        for (i = Object.getOwnPropertySymbols(t); n < i.length; n++) e.indexOf(i[n]) < 0 && Object.prototype.propertyIsEnumerable.call(t, i[n]) && (r[i[n]] = t[i[n]])
                    }
                    return r
                },
                p = function(t) {
                    (0, u.default)(c, t);
                    var e, r, i, f, l = d(c);

                    function c(t) {
                        var e, r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "ws://localhost:8080",
                            i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                            n = arguments.length > 3 ? arguments[3] : void 0;
                        (0, h.default)(this, c);
                        var o = i.autoconnect,
                            s = void 0 === o || o,
                            a = i.reconnect,
                            u = void 0 === a || a,
                            f = i.reconnect_interval,
                            d = void 0 === f ? 1e3 : f,
                            p = i.max_reconnects,
                            g = void 0 === p ? 5 : p,
                            y = m(i, ["autoconnect", "reconnect", "reconnect_interval", "max_reconnects"]);
                        return (e = l.call(this)).webSocketFactory = t, e.queue = {}, e.rpc_id = 0, e.address = r, e.autoconnect = s, e.ready = !1, e.reconnect = u, e.reconnect_timer_id = void 0, e.reconnect_interval = d, e.max_reconnects = g, e.rest_options = y, e.current_reconnects = 0, e.generate_request_id = n || function() {
                            return ++e.rpc_id
                        }, e.autoconnect && e._connect(e.address, Object.assign({
                            autoconnect: e.autoconnect,
                            reconnect: e.reconnect,
                            reconnect_interval: e.reconnect_interval,
                            max_reconnects: e.max_reconnects
                        }, e.rest_options)), e
                    }
                    return (0, a.default)(c, [{
                        key: "connect",
                        value: function() {
                            this.socket || this._connect(this.address, Object.assign({
                                autoconnect: this.autoconnect,
                                reconnect: this.reconnect,
                                reconnect_interval: this.reconnect_interval,
                                max_reconnects: this.max_reconnects
                            }, this.rest_options))
                        }
                    }, {
                        key: "call",
                        value: function(t, e, r, i) {
                            var n = this;
                            return i || "object" !== (0, s.default)(r) || (i = r, r = null), new Promise((function(o, s) {
                                if (!n.ready) return s(new Error("socket not ready"));
                                var h = n.generate_request_id(t, e),
                                    a = {
                                        jsonrpc: "2.0",
                                        method: t,
                                        params: e || null,
                                        id: h
                                    };
                                n.socket.send(JSON.stringify(a), i, (function(t) {
                                    if (t) return s(t);
                                    n.queue[h] = {
                                        promise: [o, s]
                                    }, r && (n.queue[h].timeout = setTimeout((function() {
                                        delete n.queue[h], s(new Error("reply timeout"))
                                    }), r))
                                }))
                            }))
                        }
                    }, {
                        key: "login",
                        value: (f = (0, o.default)(n.default.mark((function t(e) {
                            var r;
                            return n.default.wrap((function(t) {
                                for (;;) switch (t.prev = t.next) {
                                    case 0:
                                        return t.next = 2, this.call("rpc.login", e);
                                    case 2:
                                        if (r = t.sent) {
                                            t.next = 5;
                                            break
                                        }
                                        throw new Error("authentication failed");
                                    case 5:
                                        return t.abrupt("return", r);
                                    case 6:
                                    case "end":
                                        return t.stop()
                                }
                            }), t, this)
                        }))), function(t) {
                            return f.apply(this, arguments)
                        })
                    }, {
                        key: "listMethods",
                        value: (i = (0, o.default)(n.default.mark((function t() {
                            return n.default.wrap((function(t) {
                                for (;;) switch (t.prev = t.next) {
                                    case 0:
                                        return t.next = 2, this.call("__listMethods");
                                    case 2:
                                        return t.abrupt("return", t.sent);
                                    case 3:
                                    case "end":
                                        return t.stop()
                                }
                            }), t, this)
                        }))), function() {
                            return i.apply(this, arguments)
                        })
                    }, {
                        key: "notify",
                        value: function(t, e) {
                            var r = this;
                            return new Promise((function(i, n) {
                                if (!r.ready) return n(new Error("socket not ready"));
                                var o = {
                                    jsonrpc: "2.0",
                                    method: t,
                                    params: e || null
                                };
                                r.socket.send(JSON.stringify(o), (function(t) {
                                    if (t) return n(t);
                                    i()
                                }))
                            }))
                        }
                    }, {
                        key: "subscribe",
                        value: (r = (0, o.default)(n.default.mark((function t(e) {
                            var r;
                            return n.default.wrap((function(t) {
                                for (;;) switch (t.prev = t.next) {
                                    case 0:
                                        return "string" == typeof e && (e = [e]), t.next = 3, this.call("rpc.on", e);
                                    case 3:
                                        if (r = t.sent, "string" != typeof e || "ok" === r[e]) {
                                            t.next = 6;
                                            break
                                        }
                                        throw new Error("Failed subscribing to an event '" + e + "' with: " + r[e]);
                                    case 6:
                                        return t.abrupt("return", r);
                                    case 7:
                                    case "end":
                                        return t.stop()
                                }
                            }), t, this)
                        }))), function(t) {
                            return r.apply(this, arguments)
                        })
                    }, {
                        key: "unsubscribe",
                        value: (e = (0, o.default)(n.default.mark((function t(e) {
                            var r;
                            return n.default.wrap((function(t) {
                                for (;;) switch (t.prev = t.next) {
                                    case 0:
                                        return "string" == typeof e && (e = [e]), t.next = 3, this.call("rpc.off", e);
                                    case 3:
                                        if (r = t.sent, "string" != typeof e || "ok" === r[e]) {
                                            t.next = 6;
                                            break
                                        }
                                        throw new Error("Failed unsubscribing from an event with: " + r);
                                    case 6:
                                        return t.abrupt("return", r);
                                    case 7:
                                    case "end":
                                        return t.stop()
                                }
                            }), t, this)
                        }))), function(t) {
                            return e.apply(this, arguments)
                        })
                    }, {
                        key: "close",
                        value: function(t, e) {
                            this.socket.close(t || 1e3, e)
                        }
                    }, {
                        key: "_connect",
                        value: function(t, e) {
                            var r = this;
                            clearTimeout(this.reconnect_timer_id), this.socket = this.webSocketFactory(t, e), this.socket.addEventListener("open", (function() {
                                r.ready = !0, r.emit("open"), r.current_reconnects = 0
                            })), this.socket.addEventListener("message", (function(t) {
                                var e = t.data;
                                e instanceof ArrayBuffer && (e = Buffer.from(e).toString());
                                try {
                                    e = JSON.parse(e)
                                } catch (t) {
                                    return
                                }
                                if (e.notification && r.listeners(e.notification).length) {
                                    if (!Object.keys(e.params).length) return r.emit(e.notification);
                                    var i = [e.notification];
                                    if (e.params.constructor === Object) i.push(e.params);
                                    else
                                        for (var n = 0; n < e.params.length; n++) i.push(e.params[n]);
                                    return Promise.resolve().then((function() {
                                        r.emit.apply(r, i)
                                    }))
                                }
                                if (!r.queue[e.id]) return e.method && e.params ? Promise.resolve().then((function() {
                                    r.emit(e.method, e.params)
                                })) : void 0;
                                "error" in e == "result" in e && r.queue[e.id].promise[1](new Error('Server response malformed. Response must include either "result" or "error", but not both.')), r.queue[e.id].timeout && clearTimeout(r.queue[e.id].timeout), e.error ? r.queue[e.id].promise[1](e.error) : r.queue[e.id].promise[0](e.result), delete r.queue[e.id]
                            })), this.socket.addEventListener("error", (function(t) {
                                return r.emit("error", t)
                            })), this.socket.addEventListener("close", (function(i) {
                                var n = i.code,
                                    o = i.reason;
                                r.ready && setTimeout((function() {
                                    return r.emit("close", n, o)
                                }), 0), r.ready = !1, r.socket = void 0, 1e3 !== n && (r.current_reconnects++, r.reconnect && (r.max_reconnects > r.current_reconnects || 0 === r.max_reconnects) && (r.reconnect_timer_id = setTimeout((function() {
                                    return r._connect(t, e)
                                }), r.reconnect_interval)))
                            }))
                        }
                    }]), c
                }(c.EventEmitter);
            e.default = p
        },
        458: function(t, e, r) {
            "use strict";
            r.r(e), r.d(e, "CURVE", (function() {
                return u
            })), r.d(e, "Point", (function() {
                return Point
            })), r.d(e, "Signature", (function() {
                return Signature
            })), r.d(e, "getPublicKey", (function() {
                return D
            })), r.d(e, "recoverPublicKey", (function() {
                return F
            })), r.d(e, "getSharedSecret", (function() {
                return C
            })), r.d(e, "sign", (function() {
                return Y
            })), r.d(e, "signSync", (function() {
                return Q
            })), r.d(e, "verify", (function() {
                return et
            })), r.d(e, "schnorr", (function() {
                return ht
            })), r.d(e, "utils", (function() {
                return lt
            }));
            var i = r(24);
            const n = BigInt(0),
                o = BigInt(1),
                s = BigInt(2),
                h = BigInt(3),
                a = BigInt(8),
                u = Object.freeze({
                    a: n,
                    b: BigInt(7),
                    P: BigInt("0xfffffffffffffffffffffffffffffffffffffffffffffffffffffffefffffc2f"),
                    n: BigInt("0xfffffffffffffffffffffffffffffffebaaedce6af48a03bbfd25e8cd0364141"),
                    h: o,
                    Gx: BigInt("55066263022277343669578718895168534326250603453777594175500187360389116729240"),
                    Gy: BigInt("32670510020758816978083085130507043184471273380659243275938904335757337482424"),
                    beta: BigInt("0x7ae96a2b657c07106e64479eac3434e99cf0497512f58995c1396c28719501ee")
                }),
                f = (t, e) => (t + e / s) / e,
                l = {
                    beta: BigInt("0x7ae96a2b657c07106e64479eac3434e99cf0497512f58995c1396c28719501ee"),
                    splitScalar(t) {
                        const {
                            n: e
                        } = u, r = BigInt("0x3086d221a7d46bcde86c90e49284eb15"), i = -o * BigInt("0xe4437ed6010e88286f547fa90abfe4c3"), n = BigInt("0x114ca50f7a8e2f3f657c1108d9d44cfd8"), s = r, h = BigInt("0x100000000000000000000000000000000"), a = f(s * t, e), l = f(-i * t, e);
                        let c = U(t - a * r - l * n, e),
                            d = U(-a * i - l * s, e);
                        const m = c > h,
                            p = d > h;
                        if (m && (c = e - c), p && (d = e - d), c > h || d > h) throw new Error("splitScalarEndo: Endomorphism failed, k=" + t);
                        return {
                            k1neg: m,
                            k1: c,
                            k2neg: p,
                            k2: d
                        }
                    }
                };

            function c(t) {
                const {
                    a: e,
                    b: r
                } = u, i = U(t * t), n = U(i * t);
                return U(n + e * t + r)
            }
            const d = u.a === n;
            class ShaError extends Error {
                constructor(t) {
                    super(t)
                }
            }

            function m(t) {
                if (!(t instanceof JacobianPoint)) throw new TypeError("JacobianPoint expected")
            }
            class JacobianPoint {
                constructor(t, e, r) {
                    this.x = t, this.y = e, this.z = r
                }
                static fromAffine(t) {
                    if (!(t instanceof Point)) throw new TypeError("JacobianPoint#fromAffine: expected Point");
                    return t.equals(Point.ZERO) ? JacobianPoint.ZERO : new JacobianPoint(t.x, t.y, o)
                }
                static toAffineBatch(t) {
                    const e = function(t, e = u.P) {
                        const r = new Array(t.length),
                            i = z(t.reduce((t, i, o) => i === n ? t : (r[o] = t, U(t * i, e)), o), e);
                        return t.reduceRight((t, i, o) => i === n ? t : (r[o] = U(t * r[o], e), U(t * i, e)), i), r
                    }(t.map(t => t.z));
                    return t.map((t, r) => t.toAffine(e[r]))
                }
                static normalizeZ(t) {
                    return JacobianPoint.toAffineBatch(t).map(JacobianPoint.fromAffine)
                }
                equals(t) {
                    m(t);
                    const {
                        x: e,
                        y: r,
                        z: i
                    } = this, {
                        x: n,
                        y: o,
                        z: s
                    } = t, h = U(i * i), a = U(s * s), u = U(e * a), f = U(n * h), l = U(U(r * s) * a), c = U(U(o * i) * h);
                    return u === f && l === c
                }
                negate() {
                    return new JacobianPoint(this.x, U(-this.y), this.z)
                }
                double() {
                    const {
                        x: t,
                        y: e,
                        z: r
                    } = this, i = U(t * t), n = U(e * e), o = U(n * n), u = t + n, f = U(s * (U(u * u) - i - o)), l = U(h * i), c = U(l * l), d = U(c - s * f), m = U(l * (f - d) - a * o), p = U(s * e * r);
                    return new JacobianPoint(d, m, p)
                }
                add(t) {
                    m(t);
                    const {
                        x: e,
                        y: r,
                        z: i
                    } = this, {
                        x: o,
                        y: h,
                        z: a
                    } = t;
                    if (o === n || h === n) return this;
                    if (e === n || r === n) return t;
                    const u = U(i * i),
                        f = U(a * a),
                        l = U(e * f),
                        c = U(o * u),
                        d = U(U(r * a) * f),
                        p = U(U(h * i) * u),
                        g = U(c - l),
                        y = U(p - d);
                    if (g === n) return y === n ? this.double() : JacobianPoint.ZERO;
                    const w = U(g * g),
                        v = U(g * w),
                        M = U(l * w),
                        b = U(y * y - v - s * M),
                        E = U(y * (M - b) - d * v),
                        _ = U(i * a * g);
                    return new JacobianPoint(b, E, _)
                }
                subtract(t) {
                    return this.add(t.negate())
                }
                multiplyUnsafe(t) {
                    const e = JacobianPoint.ZERO;
                    if ("bigint" == typeof t && t === n) return e;
                    let r = R(t);
                    if (r === o) return this;
                    if (!d) {
                        let t = e,
                            i = this;
                        for (; r > n;) r & o && (t = t.add(i)), i = i.double(), r >>= o;
                        return t
                    }
                    let {
                        k1neg: i,
                        k1: s,
                        k2neg: h,
                        k2: a
                    } = l.splitScalar(r), u = e, f = e, c = this;
                    for (; s > n || a > n;) s & o && (u = u.add(c)), a & o && (f = f.add(c)), c = c.double(), s >>= o, a >>= o;
                    return i && (u = u.negate()), h && (f = f.negate()), f = new JacobianPoint(U(f.x * l.beta), f.y, f.z), u.add(f)
                }
                precomputeWindow(t) {
                    const e = d ? 128 / t + 1 : 256 / t + 1,
                        r = [];
                    let i = this,
                        n = i;
                    for (let o = 0; o < e; o++) {
                        n = i, r.push(n);
                        for (let e = 1; e < 2 ** (t - 1); e++) n = n.add(i), r.push(n);
                        i = n.double()
                    }
                    return r
                }
                wNAF(t, e) {
                    !e && this.equals(JacobianPoint.BASE) && (e = Point.BASE);
                    const r = e && e._WINDOW_SIZE || 1;
                    if (256 % r) throw new Error("Point#wNAF: Invalid precomputation window, must be power of 2");
                    let i = e && g.get(e);
                    i || (i = this.precomputeWindow(r), e && 1 !== r && (i = JacobianPoint.normalizeZ(i), g.set(e, i)));
                    let n = JacobianPoint.ZERO,
                        s = JacobianPoint.BASE;
                    const h = 1 + (d ? 128 / r : 256 / r),
                        a = 2 ** (r - 1),
                        u = BigInt(2 ** r - 1),
                        f = 2 ** r,
                        l = BigInt(r);
                    for (let e = 0; e < h; e++) {
                        const r = e * a;
                        let h = Number(t & u);
                        t >>= l, h > a && (h -= f, t += o);
                        const c = r,
                            d = r + Math.abs(h) - 1,
                            m = e % 2 != 0,
                            g = h < 0;
                        0 === h ? s = s.add(p(m, i[c])) : n = n.add(p(g, i[d]))
                    }
                    return {
                        p: n,
                        f: s
                    }
                }
                multiply(t, e) {
                    let r, i, n = R(t);
                    if (d) {
                        const {
                            k1neg: t,
                            k1: o,
                            k2neg: s,
                            k2: h
                        } = l.splitScalar(n);
                        let {
                            p: a,
                            f: u
                        } = this.wNAF(o, e), {
                            p: f,
                            f: c
                        } = this.wNAF(h, e);
                        a = p(t, a), f = p(s, f), f = new JacobianPoint(U(f.x * l.beta), f.y, f.z), r = a.add(f), i = u.add(c)
                    } else {
                        const {
                            p: t,
                            f: o
                        } = this.wNAF(n, e);
                        r = t, i = o
                    }
                    return JacobianPoint.normalizeZ([r, i])[0]
                }
                toAffine(t) {
                    const {
                        x: e,
                        y: r,
                        z: i
                    } = this, n = this.equals(JacobianPoint.ZERO);
                    null == t && (t = n ? a : z(i));
                    const s = t,
                        h = U(s * s),
                        u = U(h * s),
                        f = U(e * h),
                        l = U(r * u),
                        c = U(i * s);
                    if (n) return Point.ZERO;
                    if (c !== o) throw new Error("invZ was invalid");
                    return new Point(f, l)
                }
            }

            function p(t, e) {
                const r = e.negate();
                return t ? r : e
            }
            JacobianPoint.BASE = new JacobianPoint(u.Gx, u.Gy, o), JacobianPoint.ZERO = new JacobianPoint(n, o, n);
            const g = new WeakMap;
            class Point {
                constructor(t, e) {
                    this.x = t, this.y = e
                }
                _setWindowSize(t) {
                    this._WINDOW_SIZE = t, g.delete(this)
                }
                hasEvenY() {
                    return this.y % s === n
                }
                static fromCompressedHex(t) {
                    const e = 32 === t.length,
                        r = k(e ? t : t.subarray(1));
                    if (!N(r)) throw new Error("Point is not on curve");
                    let i = function(t) {
                        const {
                            P: e
                        } = u, r = BigInt(6), i = BigInt(11), n = BigInt(22), o = BigInt(23), a = BigInt(44), f = BigInt(88), l = t * t * t % e, c = l * l * t % e, d = I(c, h) * c % e, m = I(d, h) * c % e, p = I(m, s) * l % e, g = I(p, i) * p % e, y = I(g, n) * g % e, w = I(y, a) * y % e, v = I(w, f) * w % e, M = I(v, a) * y % e, b = I(M, h) * c % e, E = I(b, o) * g % e, _ = I(E, r) * l % e, x = I(_, s);
                        if (x * x % e !== t) throw new Error("Cannot find square root");
                        return x
                    }(c(r));
                    const n = (i & o) === o;
                    if (e) n && (i = U(-i));
                    else {
                        1 == (1 & t[0]) !== n && (i = U(-i))
                    }
                    const a = new Point(r, i);
                    return a.assertValidity(), a
                }
                static fromUncompressedHex(t) {
                    const e = k(t.subarray(1, 33)),
                        r = k(t.subarray(33, 65)),
                        i = new Point(e, r);
                    return i.assertValidity(), i
                }
                static fromHex(t) {
                    const e = P(t),
                        r = e.length,
                        i = e[0];
                    if (32 === r) return this.fromCompressedHex(e);
                    if (33 === r && (2 === i || 3 === i)) return this.fromCompressedHex(e);
                    if (65 === r && 4 === i) return this.fromUncompressedHex(e);
                    throw new Error("Point.fromHex: received invalid point. Expected 32-33 compressed bytes or 65 uncompressed bytes, not " + r)
                }
                static fromPrivateKey(t) {
                    return Point.BASE.multiply(Z(t))
                }
                static fromSignature(t, e, r) {
                    const {
                        r: i,
                        s: n
                    } = j(e);
                    if (![0, 1, 2, 3].includes(r)) throw new Error("Cannot recover: invalid recovery bit");
                    const o = O(P(t)),
                        {
                            n: s
                        } = u,
                        h = 2 === r || 3 === r ? i + s : i,
                        a = z(h, s),
                        f = U(-o * a, s),
                        l = U(n * a, s),
                        c = 1 & r ? "03" : "02",
                        d = Point.fromHex(c + _(h)),
                        m = Point.BASE.multiplyAndAddUnsafe(d, f, l);
                    if (!m) throw new Error("Cannot recover signature: point at infinify");
                    return m.assertValidity(), m
                }
                toRawBytes(t = !1) {
                    return A(this.toHex(t))
                }
                toHex(t = !1) {
                    const e = _(this.x);
                    if (t) {
                        return `${this.hasEvenY()?"02":"03"}${e}`
                    }
                    return `04${e}${_(this.y)}`
                }
                toHexX() {
                    return this.toHex(!0).slice(2)
                }
                toRawX() {
                    return this.toRawBytes(!0).slice(1)
                }
                assertValidity() {
                    const t = "Point is not on elliptic curve",
                        {
                            x: e,
                            y: r
                        } = this;
                    if (!N(e) || !N(r)) throw new Error(t);
                    const i = U(r * r);
                    if (U(i - c(e)) !== n) throw new Error(t)
                }
                equals(t) {
                    return this.x === t.x && this.y === t.y
                }
                negate() {
                    return new Point(this.x, U(-this.y))
                }
                double() {
                    return JacobianPoint.fromAffine(this).double().toAffine()
                }
                add(t) {
                    return JacobianPoint.fromAffine(this).add(JacobianPoint.fromAffine(t)).toAffine()
                }
                subtract(t) {
                    return this.add(t.negate())
                }
                multiply(t) {
                    return JacobianPoint.fromAffine(this).multiply(t, this).toAffine()
                }
                multiplyAndAddUnsafe(t, e, r) {
                    const i = JacobianPoint.fromAffine(this),
                        s = e === n || e === o || this !== Point.BASE ? i.multiplyUnsafe(e) : i.multiply(e),
                        h = JacobianPoint.fromAffine(t).multiplyUnsafe(r),
                        a = s.add(h);
                    return a.equals(JacobianPoint.ZERO) ? void 0 : a.toAffine()
                }
            }

            function y(t) {
                return Number.parseInt(t[0], 16) >= 8 ? "00" + t : t
            }

            function w(t) {
                if (t.length < 2 || 2 !== t[0]) throw new Error("Invalid signature integer tag: " + b(t));
                const e = t[1],
                    r = t.subarray(2, e + 2);
                if (!e || r.length !== e) throw new Error("Invalid signature integer: wrong length");
                if (0 === r[0] && r[1] <= 127) throw new Error("Invalid signature integer: trailing length");
                return {
                    data: k(r),
                    left: t.subarray(e + 2)
                }
            }
            Point.BASE = new Point(u.Gx, u.Gy), Point.ZERO = new Point(n, n);
            class Signature {
                constructor(t, e) {
                    this.r = t, this.s = e, this.assertValidity()
                }
                static fromCompact(t) {
                    const e = t instanceof Uint8Array,
                        r = "Signature.fromCompact";
                    if ("string" != typeof t && !e) throw new TypeError(r + ": Expected string or Uint8Array");
                    const i = e ? b(t) : t;
                    if (128 !== i.length) throw new Error(r + ": Expected 64-byte hex");
                    return new Signature(S(i.slice(0, 64)), S(i.slice(64, 128)))
                }
                static fromDER(t) {
                    const e = t instanceof Uint8Array;
                    if ("string" != typeof t && !e) throw new TypeError("Signature.fromDER: Expected string or Uint8Array");
                    const {
                        r: r,
                        s: i
                    } = function(t) {
                        if (t.length < 2 || 48 != t[0]) throw new Error("Invalid signature tag: " + b(t));
                        if (t[1] !== t.length - 2) throw new Error("Invalid signature: incorrect length");
                        const {
                            data: e,
                            left: r
                        } = w(t.subarray(2)), {
                            data: i,
                            left: n
                        } = w(r);
                        if (n.length) throw new Error("Invalid signature: left bytes after parsing: " + b(n));
                        return {
                            r: e,
                            s: i
                        }
                    }(e ? t : A(t));
                    return new Signature(r, i)
                }
                static fromHex(t) {
                    return this.fromDER(t)
                }
                assertValidity() {
                    const {
                        r: t,
                        s: e
                    } = this;
                    if (!H(t)) throw new Error("Invalid Signature: r must be 0 < r < n");
                    if (!H(e)) throw new Error("Invalid Signature: s must be 0 < s < n")
                }
                hasHighS() {
                    const t = u.n >> o;
                    return this.s > t
                }
                normalizeS() {
                    return this.hasHighS() ? new Signature(this.r, U(-this.s, u.n)) : this
                }
                toDERRawBytes() {
                    return A(this.toDERHex())
                }
                toDERHex() {
                    const t = y(B(this.s)),
                        e = y(B(this.r)),
                        r = t.length / 2,
                        i = e.length / 2,
                        n = B(r),
                        o = B(i);
                    return `30${B(i+r+4)}02${o}${e}02${n}${t}`
                }
                toRawBytes() {
                    return this.toDERRawBytes()
                }
                toHex() {
                    return this.toDERHex()
                }
                toCompactRawBytes() {
                    return A(this.toCompactHex())
                }
                toCompactHex() {
                    return _(this.r) + _(this.s)
                }
            }

            function v(...t) {
                if (!t.every(t => t instanceof Uint8Array)) throw new Error("Uint8Array list expected");
                if (1 === t.length) return t[0];
                const e = t.reduce((t, e) => t + e.length, 0),
                    r = new Uint8Array(e);
                for (let e = 0, i = 0; e < t.length; e++) {
                    const n = t[e];
                    r.set(n, i), i += n.length
                }
                return r
            }
            const M = Array.from({
                length: 256
            }, (t, e) => e.toString(16).padStart(2, "0"));

            function b(t) {
                if (!(t instanceof Uint8Array)) throw new Error("Expected Uint8Array");
                let e = "";
                for (let r = 0; r < t.length; r++) e += M[t[r]];
                return e
            }
            const E = BigInt("0x10000000000000000000000000000000000000000000000000000000000000000");

            function _(t) {
                if ("bigint" != typeof t) throw new Error("Expected bigint");
                if (!(n <= t && t < E)) throw new Error("Expected number 0 <= n < 2^256");
                return t.toString(16).padStart(64, "0")
            }

            function x(t) {
                const e = A(_(t));
                if (32 !== e.length) throw new Error("Error: expected 32 bytes");
                return e
            }

            function B(t) {
                const e = t.toString(16);
                return 1 & e.length ? "0" + e : e
            }

            function S(t) {
                if ("string" != typeof t) throw new TypeError("hexToNumber: expected string, got " + typeof t);
                return BigInt("0x" + t)
            }

            function A(t) {
                if ("string" != typeof t) throw new TypeError("hexToBytes: expected string, got " + typeof t);
                if (t.length % 2) throw new Error("hexToBytes: received invalid unpadded hex" + t.length);
                const e = new Uint8Array(t.length / 2);
                for (let r = 0; r < e.length; r++) {
                    const i = 2 * r,
                        n = t.slice(i, i + 2),
                        o = Number.parseInt(n, 16);
                    if (Number.isNaN(o) || o < 0) throw new Error("Invalid byte sequence");
                    e[r] = o
                }
                return e
            }

            function k(t) {
                return S(b(t))
            }

            function P(t) {
                return t instanceof Uint8Array ? Uint8Array.from(t) : A(t)
            }

            function R(t) {
                if ("number" == typeof t && Number.isSafeInteger(t) && t > 0) return BigInt(t);
                if ("bigint" == typeof t && H(t)) return t;
                throw new TypeError("Expected valid private scalar: 0 < scalar < curve.n")
            }

            function U(t, e = u.P) {
                const r = t % e;
                return r >= n ? r : e + r
            }

            function I(t, e) {
                const {
                    P: r
                } = u;
                let i = t;
                for (; e-- > n;) i *= i, i %= r;
                return i
            }

            function z(t, e = u.P) {
                if (t === n || e <= n) throw new Error(`invert: expected positive integers, got n=${t} mod=${e}`);
                let r = U(t, e),
                    i = e,
                    s = n,
                    h = o,
                    a = o,
                    f = n;
                for (; r !== n;) {
                    const t = i / r,
                        e = i % r,
                        n = s - a * t,
                        o = h - f * t;
                    i = r, r = e, s = a, h = f, a = n, f = o
                }
                if (i !== o) throw new Error("invert: does not exist");
                return U(s, e)
            }

            function O(t, e = !1) {
                const r = function(t) {
                    const e = 8 * t.length - 256,
                        r = k(t);
                    return e > 0 ? r >> BigInt(e) : r
                }(t);
                if (e) return r;
                const {
                    n: i
                } = u;
                return r >= i ? r - i : r
            }
            let T, q;
            class HmacDrbg {
                constructor(t, e) {
                    if (this.hashLen = t, this.qByteLen = e, "number" != typeof t || t < 2) throw new Error("hashLen must be a number");
                    if ("number" != typeof e || e < 2) throw new Error("qByteLen must be a number");
                    this.v = new Uint8Array(t).fill(1), this.k = new Uint8Array(t).fill(0), this.counter = 0
                }
                hmac(...t) {
                    return lt.hmacSha256(this.k, ...t)
                }
                hmacSync(...t) {
                    return q(this.k, ...t)
                }
                checkSync() {
                    if ("function" != typeof q) throw new ShaError("hmacSha256Sync needs to be set")
                }
                incr() {
                    if (this.counter >= 1e3) throw new Error("Tried 1,000 k values for sign(), all were invalid");
                    this.counter += 1
                }
                async reseed(t = new Uint8Array) {
                    this.k = await this.hmac(this.v, Uint8Array.from([0]), t), this.v = await this.hmac(this.v), 0 !== t.length && (this.k = await this.hmac(this.v, Uint8Array.from([1]), t), this.v = await this.hmac(this.v))
                }
                reseedSync(t = new Uint8Array) {
                    this.checkSync(), this.k = this.hmacSync(this.v, Uint8Array.from([0]), t), this.v = this.hmacSync(this.v), 0 !== t.length && (this.k = this.hmacSync(this.v, Uint8Array.from([1]), t), this.v = this.hmacSync(this.v))
                }
                async generate() {
                    this.incr();
                    let t = 0;
                    const e = [];
                    for (; t < this.qByteLen;) {
                        this.v = await this.hmac(this.v);
                        const r = this.v.slice();
                        e.push(r), t += this.v.length
                    }
                    return v(...e)
                }
                generateSync() {
                    this.checkSync(), this.incr();
                    let t = 0;
                    const e = [];
                    for (; t < this.qByteLen;) {
                        this.v = this.hmacSync(this.v);
                        const r = this.v.slice();
                        e.push(r), t += this.v.length
                    }
                    return v(...e)
                }
            }

            function H(t) {
                return n < t && t < u.n
            }

            function N(t) {
                return n < t && t < u.P
            }

            function J(t, e, r, i = !0) {
                const {
                    n: s
                } = u, h = O(t, !0);
                if (!H(h)) return;
                const a = z(h, s),
                    f = Point.BASE.multiply(h),
                    l = U(f.x, s);
                if (l === n) return;
                const c = U(a * U(e + r * l, s), s);
                if (c === n) return;
                let d = new Signature(l, c),
                    m = (f.x === d.r ? 0 : 2) | Number(f.y & o);
                return i && d.hasHighS() && (d = d.normalizeS(), m ^= 1), {
                    sig: d,
                    recovery: m
                }
            }

            function Z(t) {
                let e;
                if ("bigint" == typeof t) e = t;
                else if ("number" == typeof t && Number.isSafeInteger(t) && t > 0) e = BigInt(t);
                else if ("string" == typeof t) {
                    if (64 !== t.length) throw new Error("Expected 32 bytes of private key");
                    e = S(t)
                } else {
                    if (!(t instanceof Uint8Array)) throw new TypeError("Expected valid private key");
                    if (32 !== t.length) throw new Error("Expected 32 bytes of private key");
                    e = k(t)
                }
                if (!H(e)) throw new Error("Expected private key: 0 < key < n");
                return e
            }

            function L(t) {
                return t instanceof Point ? (t.assertValidity(), t) : Point.fromHex(t)
            }

            function j(t) {
                if (t instanceof Signature) return t.assertValidity(), t;
                try {
                    return Signature.fromDER(t)
                } catch (e) {
                    return Signature.fromCompact(t)
                }
            }

            function D(t, e = !1) {
                return Point.fromPrivateKey(t).toRawBytes(e)
            }

            function F(t, e, r, i = !1) {
                return Point.fromSignature(t, e, r).toRawBytes(i)
            }

            function $(t) {
                const e = t instanceof Uint8Array,
                    r = "string" == typeof t,
                    i = (e || r) && t.length;
                return e ? 33 === i || 65 === i : r ? 66 === i || 130 === i : t instanceof Point
            }

            function C(t, e, r = !1) {
                if ($(t)) throw new TypeError("getSharedSecret: first arg must be private key");
                if (!$(e)) throw new TypeError("getSharedSecret: second arg must be public key");
                const i = L(e);
                return i.assertValidity(), i.multiply(Z(t)).toRawBytes(r)
            }

            function K(t) {
                return k(t.length > 32 ? t.slice(0, 32) : t)
            }

            function W(t) {
                const e = K(t),
                    r = U(e, u.n);
                return V(r < n ? e : r)
            }

            function V(t) {
                return x(t)
            }

            function G(t, e, r) {
                if (null == t) throw new Error(`sign: expected valid message hash, not "${t}"`);
                const i = P(t),
                    n = Z(e),
                    o = [V(n), W(i)];
                if (null != r) {
                    !0 === r && (r = lt.randomBytes(32));
                    const t = P(r);
                    if (32 !== t.length) throw new Error("sign: Expected 32 bytes of extra data");
                    o.push(t)
                }
                return {
                    seed: v(...o),
                    m: K(i),
                    d: n
                }
            }

            function X(t, e) {
                const {
                    sig: r,
                    recovery: i
                } = t, {
                    der: n,
                    recovered: o
                } = Object.assign({
                    canonical: !0,
                    der: !0
                }, e), s = n ? r.toDERRawBytes() : r.toCompactRawBytes();
                return o ? [s, i] : s
            }
            async function Y(t, e, r = {}) {
                const {
                    seed: i,
                    m: n,
                    d: o
                } = G(t, e, r.extraEntropy), s = new HmacDrbg(32, 32);
                let h;
                for (await s.reseed(i); !(h = J(await s.generate(), n, o, r.canonical));) await s.reseed();
                return X(h, r)
            }

            function Q(t, e, r = {}) {
                const {
                    seed: i,
                    m: n,
                    d: o
                } = G(t, e, r.extraEntropy), s = new HmacDrbg(32, 32);
                let h;
                for (s.reseedSync(i); !(h = J(s.generateSync(), n, o, r.canonical));) s.reseedSync();
                return X(h, r)
            }
            const tt = {
                strict: !0
            };

            function et(t, e, r, i = tt) {
                let n;
                try {
                    n = j(t), e = P(e)
                } catch (t) {
                    return !1
                }
                const {
                    r: o,
                    s: s
                } = n;
                if (i.strict && n.hasHighS()) return !1;
                const h = O(e);
                let a;
                try {
                    a = L(r)
                } catch (t) {
                    return !1
                }
                const {
                    n: f
                } = u, l = z(s, f), c = U(h * l, f), d = U(o * l, f), m = Point.BASE.multiplyAndAddUnsafe(a, c, d);
                if (!m) return !1;
                return U(m.x, f) === o
            }

            function rt(t) {
                return U(k(t), u.n)
            }
            class SchnorrSignature {
                constructor(t, e) {
                    this.r = t, this.s = e, this.assertValidity()
                }
                static fromHex(t) {
                    const e = P(t);
                    if (64 !== e.length) throw new TypeError("SchnorrSignature.fromHex: expected 64 bytes, not " + e.length);
                    const r = k(e.subarray(0, 32)),
                        i = k(e.subarray(32, 64));
                    return new SchnorrSignature(r, i)
                }
                assertValidity() {
                    const {
                        r: t,
                        s: e
                    } = this;
                    if (!N(t) || !H(e)) throw new Error("Invalid signature")
                }
                toHex() {
                    return _(this.r) + _(this.s)
                }
                toRawBytes() {
                    return A(this.toHex())
                }
            }
            class InternalSchnorrSignature {
                constructor(t, e, r = lt.randomBytes()) {
                    if (null == t) throw new TypeError(`sign: Expected valid message, not "${t}"`);
                    this.m = P(t);
                    const {
                        x: i,
                        scalar: n
                    } = this.getScalar(Z(e));
                    if (this.px = i, this.d = n, this.rand = P(r), 32 !== this.rand.length) throw new TypeError("sign: Expected 32 bytes of aux randomness")
                }
                getScalar(t) {
                    const e = Point.fromPrivateKey(t),
                        r = e.hasEvenY() ? t : u.n - t;
                    return {
                        point: e,
                        scalar: r,
                        x: e.toRawX()
                    }
                }
                initNonce(t, e) {
                    return x(t ^ k(e))
                }
                finalizeNonce(t) {
                    const e = U(k(t), u.n);
                    if (e === n) throw new Error("sign: Creation of signature failed. k is zero");
                    const {
                        point: r,
                        x: i,
                        scalar: o
                    } = this.getScalar(e);
                    return {
                        R: r,
                        rx: i,
                        k: o
                    }
                }
                finalizeSig(t, e, r, i) {
                    return new SchnorrSignature(t.x, U(e + r * i, u.n)).toRawBytes()
                }
                error() {
                    throw new Error("sign: Invalid signature produced")
                }
                async calc() {
                    const {
                        m: t,
                        d: e,
                        px: r,
                        rand: i
                    } = this, n = lt.taggedHash, o = this.initNonce(e, await n(ut.aux, i)), {
                        R: s,
                        rx: h,
                        k: a
                    } = this.finalizeNonce(await n(ut.nonce, o, r, t)), u = rt(await n(ut.challenge, h, r, t)), f = this.finalizeSig(s, a, u, e);
                    return await ot(f, t, r) || this.error(), f
                }
                calcSync() {
                    const {
                        m: t,
                        d: e,
                        px: r,
                        rand: i
                    } = this, n = lt.taggedHashSync, o = this.initNonce(e, n(ut.aux, i)), {
                        R: s,
                        rx: h,
                        k: a
                    } = this.finalizeNonce(n(ut.nonce, o, r, t)), u = rt(n(ut.challenge, h, r, t)), f = this.finalizeSig(s, a, u, e);
                    return st(f, t, r) || this.error(), f
                }
            }

            function it(t, e, r) {
                const i = t instanceof SchnorrSignature,
                    n = i ? t : SchnorrSignature.fromHex(t);
                return i && n.assertValidity(), {
                    ...n,
                    m: P(e),
                    P: L(r)
                }
            }

            function nt(t, e, r, i) {
                const n = Point.BASE.multiplyAndAddUnsafe(e, Z(r), U(-i, u.n));
                return !(!n || !n.hasEvenY() || n.x !== t)
            }
            async function ot(t, e, r) {
                try {
                    const {
                        r: i,
                        s: n,
                        m: o,
                        P: s
                    } = it(t, e, r), h = rt(await lt.taggedHash(ut.challenge, x(i), s.toRawX(), o));
                    return nt(i, s, n, h)
                } catch (t) {
                    return !1
                }
            }

            function st(t, e, r) {
                try {
                    const {
                        r: i,
                        s: n,
                        m: o,
                        P: s
                    } = it(t, e, r), h = rt(lt.taggedHashSync(ut.challenge, x(i), s.toRawX(), o));
                    return nt(i, s, n, h)
                } catch (t) {
                    if (t instanceof ShaError) throw t;
                    return !1
                }
            }
            const ht = {
                Signature: SchnorrSignature,
                getPublicKey: function(t) {
                    return Point.fromPrivateKey(t).toRawX()
                },
                sign: async function(t, e, r) {
                    return new InternalSchnorrSignature(t, e, r).calc()
                },
                verify: ot,
                signSync: function(t, e, r) {
                    return new InternalSchnorrSignature(t, e, r).calcSync()
                },
                verifySync: st
            };
            Point.BASE._setWindowSize(8);
            const at = {
                    node: i,
                    web: "object" == typeof self && "crypto" in self ? self.crypto : void 0
                },
                ut = {
                    challenge: "BIP0340/challenge",
                    aux: "BIP0340/aux",
                    nonce: "BIP0340/nonce"
                },
                ft = {},
                lt = {
                    bytesToHex: b,
                    hexToBytes: A,
                    concatBytes: v,
                    mod: U,
                    invert: z,
                    isValidPrivateKey(t) {
                        try {
                            return Z(t), !0
                        } catch (t) {
                            return !1
                        }
                    },
                    _bigintTo32Bytes: x,
                    _normalizePrivateKey: Z,
                    hashToPrivateKey: t => {
                        if ((t = P(t)).length < 40 || t.length > 1024) throw new Error("Expected valid bytes of private key as per FIPS 186");
                        return x(U(k(t), u.n - o) + o)
                    },
                    randomBytes: (t = 32) => {
                        if (at.web) return at.web.getRandomValues(new Uint8Array(t));
                        if (at.node) {
                            const {
                                randomBytes: e
                            } = at.node;
                            return Uint8Array.from(e(t))
                        }
                        throw new Error("The environment doesn't have randomBytes function")
                    },
                    randomPrivateKey: () => lt.hashToPrivateKey(lt.randomBytes(40)),
                    precompute(t = 8, e = Point.BASE) {
                        const r = e === Point.BASE ? e : new Point(e.x, e.y);
                        return r._setWindowSize(t), r.multiply(h), r
                    },
                    sha256: async (...t) => {
                        if (at.web) {
                            const e = await at.web.subtle.digest("SHA-256", v(...t));
                            return new Uint8Array(e)
                        }
                        if (at.node) {
                            const {
                                createHash: e
                            } = at.node, r = e("sha256");
                            return t.forEach(t => r.update(t)), Uint8Array.from(r.digest())
                        }
                        throw new Error("The environment doesn't have sha256 function")
                    },
                    hmacSha256: async (t, ...e) => {
                        if (at.web) {
                            const r = await at.web.subtle.importKey("raw", t, {
                                    name: "HMAC",
                                    hash: {
                                        name: "SHA-256"
                                    }
                                }, !1, ["sign"]),
                                i = v(...e),
                                n = await at.web.subtle.sign("HMAC", r, i);
                            return new Uint8Array(n)
                        }
                        if (at.node) {
                            const {
                                createHmac: r
                            } = at.node, i = r("sha256", t);
                            return e.forEach(t => i.update(t)), Uint8Array.from(i.digest())
                        }
                        throw new Error("The environment doesn't have hmac-sha256 function")
                    },
                    sha256Sync: void 0,
                    hmacSha256Sync: void 0,
                    taggedHash: async (t, ...e) => {
                        let r = ft[t];
                        if (void 0 === r) {
                            const e = await lt.sha256(Uint8Array.from(t, t => t.charCodeAt(0)));
                            r = v(e, e), ft[t] = r
                        }
                        return lt.sha256(r, ...e)
                    },
                    taggedHashSync: (t, ...e) => {
                        if ("function" != typeof T) throw new ShaError("sha256Sync is undefined, you need to set it");
                        let r = ft[t];
                        if (void 0 === r) {
                            const e = T(Uint8Array.from(t, t => t.charCodeAt(0)));
                            r = v(e, e), ft[t] = r
                        }
                        return T(r, ...e)
                    },
                    _JacobianPoint: JacobianPoint
                };
            Object.defineProperties(lt, {
                sha256Sync: {
                    configurable: !1,
                    get: () => T,
                    set(t) {
                        T || (T = t)
                    }
                },
                hmacSha256Sync: {
                    configurable: !1,
                    get: () => q,
                    set(t) {
                        q || (q = t)
                    }
                }
            })
        },
        540: function(t, e, r) {
            (function(t) {
                ! function(t, e) {
                    "use strict";

                    function i(t, e) {
                        if (!t) throw new Error(e || "Assertion failed")
                    }

                    function n(t, e) {
                        t.super_ = e;
                        var r = function() {};
                        r.prototype = e.prototype, t.prototype = new r, t.prototype.constructor = t
                    }

                    function o(t, e, r) {
                        if (o.isBN(t)) return t;
                        this.negative = 0, this.words = null, this.length = 0, this.red = null, null !== t && ("le" !== e && "be" !== e || (r = e, e = 10), this._init(t || 0, e || 10, r || "be"))
                    }
                    var s;
                    "object" == typeof t ? t.exports = o : e.BN = o, o.BN = o, o.wordSize = 26;
                    try {
                        s = "undefined" != typeof window && void 0 !== window.Buffer ? window.Buffer : r(12).Buffer
                    } catch (t) {}

                    function h(t, e) {
                        var r = t.charCodeAt(e);
                        return r >= 48 && r <= 57 ? r - 48 : r >= 65 && r <= 70 ? r - 55 : r >= 97 && r <= 102 ? r - 87 : void i(!1, "Invalid character in " + t)
                    }

                    function a(t, e, r) {
                        var i = h(t, r);
                        return r - 1 >= e && (i |= h(t, r - 1) << 4), i
                    }

                    function u(t, e, r, n) {
                        for (var o = 0, s = 0, h = Math.min(t.length, r), a = e; a < h; a++) {
                            var u = t.charCodeAt(a) - 48;
                            o *= n, s = u >= 49 ? u - 49 + 10 : u >= 17 ? u - 17 + 10 : u, i(u >= 0 && s < n, "Invalid character"), o += s
                        }
                        return o
                    }

                    function f(t, e) {
                        t.words = e.words, t.length = e.length, t.negative = e.negative, t.red = e.red
                    }
                    if (o.isBN = function(t) {
                            return t instanceof o || null !== t && "object" == typeof t && t.constructor.wordSize === o.wordSize && Array.isArray(t.words)
                        }, o.max = function(t, e) {
                            return t.cmp(e) > 0 ? t : e
                        }, o.min = function(t, e) {
                            return t.cmp(e) < 0 ? t : e
                        }, o.prototype._init = function(t, e, r) {
                            if ("number" == typeof t) return this._initNumber(t, e, r);
                            if ("object" == typeof t) return this._initArray(t, e, r);
                            "hex" === e && (e = 16), i(e === (0 | e) && e >= 2 && e <= 36);
                            var n = 0;
                            "-" === (t = t.toString().replace(/\s+/g, ""))[0] && (n++, this.negative = 1), n < t.length && (16 === e ? this._parseHex(t, n, r) : (this._parseBase(t, e, n), "le" === r && this._initArray(this.toArray(), e, r)))
                        }, o.prototype._initNumber = function(t, e, r) {
                            t < 0 && (this.negative = 1, t = -t), t < 67108864 ? (this.words = [67108863 & t], this.length = 1) : t < 4503599627370496 ? (this.words = [67108863 & t, t / 67108864 & 67108863], this.length = 2) : (i(t < 9007199254740992), this.words = [67108863 & t, t / 67108864 & 67108863, 1], this.length = 3), "le" === r && this._initArray(this.toArray(), e, r)
                        }, o.prototype._initArray = function(t, e, r) {
                            if (i("number" == typeof t.length), t.length <= 0) return this.words = [0], this.length = 1, this;
                            this.length = Math.ceil(t.length / 3), this.words = new Array(this.length);
                            for (var n = 0; n < this.length; n++) this.words[n] = 0;
                            var o, s, h = 0;
                            if ("be" === r)
                                for (n = t.length - 1, o = 0; n >= 0; n -= 3) s = t[n] | t[n - 1] << 8 | t[n - 2] << 16, this.words[o] |= s << h & 67108863, this.words[o + 1] = s >>> 26 - h & 67108863, (h += 24) >= 26 && (h -= 26, o++);
                            else if ("le" === r)
                                for (n = 0, o = 0; n < t.length; n += 3) s = t[n] | t[n + 1] << 8 | t[n + 2] << 16, this.words[o] |= s << h & 67108863, this.words[o + 1] = s >>> 26 - h & 67108863, (h += 24) >= 26 && (h -= 26, o++);
                            return this._strip()
                        }, o.prototype._parseHex = function(t, e, r) {
                            this.length = Math.ceil((t.length - e) / 6), this.words = new Array(this.length);
                            for (var i = 0; i < this.length; i++) this.words[i] = 0;
                            var n, o = 0,
                                s = 0;
                            if ("be" === r)
                                for (i = t.length - 1; i >= e; i -= 2) n = a(t, e, i) << o, this.words[s] |= 67108863 & n, o >= 18 ? (o -= 18, s += 1, this.words[s] |= n >>> 26) : o += 8;
                            else
                                for (i = (t.length - e) % 2 == 0 ? e + 1 : e; i < t.length; i += 2) n = a(t, e, i) << o, this.words[s] |= 67108863 & n, o >= 18 ? (o -= 18, s += 1, this.words[s] |= n >>> 26) : o += 8;
                            this._strip()
                        }, o.prototype._parseBase = function(t, e, r) {
                            this.words = [0], this.length = 1;
                            for (var i = 0, n = 1; n <= 67108863; n *= e) i++;
                            i--, n = n / e | 0;
                            for (var o = t.length - r, s = o % i, h = Math.min(o, o - s) + r, a = 0, f = r; f < h; f += i) a = u(t, f, f + i, e), this.imuln(n), this.words[0] + a < 67108864 ? this.words[0] += a : this._iaddn(a);
                            if (0 !== s) {
                                var l = 1;
                                for (a = u(t, f, t.length, e), f = 0; f < s; f++) l *= e;
                                this.imuln(l), this.words[0] + a < 67108864 ? this.words[0] += a : this._iaddn(a)
                            }
                            this._strip()
                        }, o.prototype.copy = function(t) {
                            t.words = new Array(this.length);
                            for (var e = 0; e < this.length; e++) t.words[e] = this.words[e];
                            t.length = this.length, t.negative = this.negative, t.red = this.red
                        }, o.prototype._move = function(t) {
                            f(t, this)
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
                        o.prototype[Symbol.for("nodejs.util.inspect.custom")] = l
                    } catch (t) {
                        o.prototype.inspect = l
                    } else o.prototype.inspect = l;

                    function l() {
                        return (this.red ? "<BN-R: " : "<BN: ") + this.toString(16) + ">"
                    }
                    var c = ["", "0", "00", "000", "0000", "00000", "000000", "0000000", "00000000", "000000000", "0000000000", "00000000000", "000000000000", "0000000000000", "00000000000000", "000000000000000", "0000000000000000", "00000000000000000", "000000000000000000", "0000000000000000000", "00000000000000000000", "000000000000000000000", "0000000000000000000000", "00000000000000000000000", "000000000000000000000000", "0000000000000000000000000"],
                        d = [0, 0, 25, 16, 12, 11, 10, 9, 8, 8, 7, 7, 7, 7, 6, 6, 6, 6, 6, 6, 6, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5],
                        m = [0, 0, 33554432, 43046721, 16777216, 48828125, 60466176, 40353607, 16777216, 43046721, 1e7, 19487171, 35831808, 62748517, 7529536, 11390625, 16777216, 24137569, 34012224, 47045881, 64e6, 4084101, 5153632, 6436343, 7962624, 9765625, 11881376, 14348907, 17210368, 20511149, 243e5, 28629151, 33554432, 39135393, 45435424, 52521875, 60466176];
                    o.prototype.toString = function(t, e) {
                        var r;
                        if (e = 0 | e || 1, 16 === (t = t || 10) || "hex" === t) {
                            r = "";
                            for (var n = 0, o = 0, s = 0; s < this.length; s++) {
                                var h = this.words[s],
                                    a = (16777215 & (h << n | o)).toString(16);
                                o = h >>> 24 - n & 16777215, (n += 2) >= 26 && (n -= 26, s--), r = 0 !== o || s !== this.length - 1 ? c[6 - a.length] + a + r : a + r
                            }
                            for (0 !== o && (r = o.toString(16) + r); r.length % e != 0;) r = "0" + r;
                            return 0 !== this.negative && (r = "-" + r), r
                        }
                        if (t === (0 | t) && t >= 2 && t <= 36) {
                            var u = d[t],
                                f = m[t];
                            r = "";
                            var l = this.clone();
                            for (l.negative = 0; !l.isZero();) {
                                var p = l.modrn(f).toString(t);
                                r = (l = l.idivn(f)).isZero() ? p + r : c[u - p.length] + p + r
                            }
                            for (this.isZero() && (r = "0" + r); r.length % e != 0;) r = "0" + r;
                            return 0 !== this.negative && (r = "-" + r), r
                        }
                        i(!1, "Base should be between 2 and 36")
                    }, o.prototype.toNumber = function() {
                        var t = this.words[0];
                        return 2 === this.length ? t += 67108864 * this.words[1] : 3 === this.length && 1 === this.words[2] ? t += 4503599627370496 + 67108864 * this.words[1] : this.length > 2 && i(!1, "Number can only safely store up to 53 bits"), 0 !== this.negative ? -t : t
                    }, o.prototype.toJSON = function() {
                        return this.toString(16, 2)
                    }, s && (o.prototype.toBuffer = function(t, e) {
                        return this.toArrayLike(s, t, e)
                    }), o.prototype.toArray = function(t, e) {
                        return this.toArrayLike(Array, t, e)
                    };

                    function p(t, e, r) {
                        r.negative = e.negative ^ t.negative;
                        var i = t.length + e.length | 0;
                        r.length = i, i = i - 1 | 0;
                        var n = 0 | t.words[0],
                            o = 0 | e.words[0],
                            s = n * o,
                            h = 67108863 & s,
                            a = s / 67108864 | 0;
                        r.words[0] = h;
                        for (var u = 1; u < i; u++) {
                            for (var f = a >>> 26, l = 67108863 & a, c = Math.min(u, e.length - 1), d = Math.max(0, u - t.length + 1); d <= c; d++) {
                                var m = u - d | 0;
                                f += (s = (n = 0 | t.words[m]) * (o = 0 | e.words[d]) + l) / 67108864 | 0, l = 67108863 & s
                            }
                            r.words[u] = 0 | l, a = 0 | f
                        }
                        return 0 !== a ? r.words[u] = 0 | a : r.length--, r._strip()
                    }
                    o.prototype.toArrayLike = function(t, e, r) {
                        this._strip();
                        var n = this.byteLength(),
                            o = r || Math.max(1, n);
                        i(n <= o, "byte array longer than desired length"), i(o > 0, "Requested array length <= 0");
                        var s = function(t, e) {
                            return t.allocUnsafe ? t.allocUnsafe(e) : new t(e)
                        }(t, o);
                        return this["_toArrayLike" + ("le" === e ? "LE" : "BE")](s, n), s
                    }, o.prototype._toArrayLikeLE = function(t, e) {
                        for (var r = 0, i = 0, n = 0, o = 0; n < this.length; n++) {
                            var s = this.words[n] << o | i;
                            t[r++] = 255 & s, r < t.length && (t[r++] = s >> 8 & 255), r < t.length && (t[r++] = s >> 16 & 255), 6 === o ? (r < t.length && (t[r++] = s >> 24 & 255), i = 0, o = 0) : (i = s >>> 24, o += 2)
                        }
                        if (r < t.length)
                            for (t[r++] = i; r < t.length;) t[r++] = 0
                    }, o.prototype._toArrayLikeBE = function(t, e) {
                        for (var r = t.length - 1, i = 0, n = 0, o = 0; n < this.length; n++) {
                            var s = this.words[n] << o | i;
                            t[r--] = 255 & s, r >= 0 && (t[r--] = s >> 8 & 255), r >= 0 && (t[r--] = s >> 16 & 255), 6 === o ? (r >= 0 && (t[r--] = s >> 24 & 255), i = 0, o = 0) : (i = s >>> 24, o += 2)
                        }
                        if (r >= 0)
                            for (t[r--] = i; r >= 0;) t[r--] = 0
                    }, Math.clz32 ? o.prototype._countBits = function(t) {
                        return 32 - Math.clz32(t)
                    } : o.prototype._countBits = function(t) {
                        var e = t,
                            r = 0;
                        return e >= 4096 && (r += 13, e >>>= 13), e >= 64 && (r += 7, e >>>= 7), e >= 8 && (r += 4, e >>>= 4), e >= 2 && (r += 2, e >>>= 2), r + e
                    }, o.prototype._zeroBits = function(t) {
                        if (0 === t) return 26;
                        var e = t,
                            r = 0;
                        return 0 == (8191 & e) && (r += 13, e >>>= 13), 0 == (127 & e) && (r += 7, e >>>= 7), 0 == (15 & e) && (r += 4, e >>>= 4), 0 == (3 & e) && (r += 2, e >>>= 2), 0 == (1 & e) && r++, r
                    }, o.prototype.bitLength = function() {
                        var t = this.words[this.length - 1],
                            e = this._countBits(t);
                        return 26 * (this.length - 1) + e
                    }, o.prototype.zeroBits = function() {
                        if (this.isZero()) return 0;
                        for (var t = 0, e = 0; e < this.length; e++) {
                            var r = this._zeroBits(this.words[e]);
                            if (t += r, 26 !== r) break
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
                        for (var e = 0; e < t.length; e++) this.words[e] = this.words[e] | t.words[e];
                        return this._strip()
                    }, o.prototype.ior = function(t) {
                        return i(0 == (this.negative | t.negative)), this.iuor(t)
                    }, o.prototype.or = function(t) {
                        return this.length > t.length ? this.clone().ior(t) : t.clone().ior(this)
                    }, o.prototype.uor = function(t) {
                        return this.length > t.length ? this.clone().iuor(t) : t.clone().iuor(this)
                    }, o.prototype.iuand = function(t) {
                        var e;
                        e = this.length > t.length ? t : this;
                        for (var r = 0; r < e.length; r++) this.words[r] = this.words[r] & t.words[r];
                        return this.length = e.length, this._strip()
                    }, o.prototype.iand = function(t) {
                        return i(0 == (this.negative | t.negative)), this.iuand(t)
                    }, o.prototype.and = function(t) {
                        return this.length > t.length ? this.clone().iand(t) : t.clone().iand(this)
                    }, o.prototype.uand = function(t) {
                        return this.length > t.length ? this.clone().iuand(t) : t.clone().iuand(this)
                    }, o.prototype.iuxor = function(t) {
                        var e, r;
                        this.length > t.length ? (e = this, r = t) : (e = t, r = this);
                        for (var i = 0; i < r.length; i++) this.words[i] = e.words[i] ^ r.words[i];
                        if (this !== e)
                            for (; i < e.length; i++) this.words[i] = e.words[i];
                        return this.length = e.length, this._strip()
                    }, o.prototype.ixor = function(t) {
                        return i(0 == (this.negative | t.negative)), this.iuxor(t)
                    }, o.prototype.xor = function(t) {
                        return this.length > t.length ? this.clone().ixor(t) : t.clone().ixor(this)
                    }, o.prototype.uxor = function(t) {
                        return this.length > t.length ? this.clone().iuxor(t) : t.clone().iuxor(this)
                    }, o.prototype.inotn = function(t) {
                        i("number" == typeof t && t >= 0);
                        var e = 0 | Math.ceil(t / 26),
                            r = t % 26;
                        this._expand(e), r > 0 && e--;
                        for (var n = 0; n < e; n++) this.words[n] = 67108863 & ~this.words[n];
                        return r > 0 && (this.words[n] = ~this.words[n] & 67108863 >> 26 - r), this._strip()
                    }, o.prototype.notn = function(t) {
                        return this.clone().inotn(t)
                    }, o.prototype.setn = function(t, e) {
                        i("number" == typeof t && t >= 0);
                        var r = t / 26 | 0,
                            n = t % 26;
                        return this._expand(r + 1), this.words[r] = e ? this.words[r] | 1 << n : this.words[r] & ~(1 << n), this._strip()
                    }, o.prototype.iadd = function(t) {
                        var e, r, i;
                        if (0 !== this.negative && 0 === t.negative) return this.negative = 0, e = this.isub(t), this.negative ^= 1, this._normSign();
                        if (0 === this.negative && 0 !== t.negative) return t.negative = 0, e = this.isub(t), t.negative = 1, e._normSign();
                        this.length > t.length ? (r = this, i = t) : (r = t, i = this);
                        for (var n = 0, o = 0; o < i.length; o++) e = (0 | r.words[o]) + (0 | i.words[o]) + n, this.words[o] = 67108863 & e, n = e >>> 26;
                        for (; 0 !== n && o < r.length; o++) e = (0 | r.words[o]) + n, this.words[o] = 67108863 & e, n = e >>> 26;
                        if (this.length = r.length, 0 !== n) this.words[this.length] = n, this.length++;
                        else if (r !== this)
                            for (; o < r.length; o++) this.words[o] = r.words[o];
                        return this
                    }, o.prototype.add = function(t) {
                        var e;
                        return 0 !== t.negative && 0 === this.negative ? (t.negative = 0, e = this.sub(t), t.negative ^= 1, e) : 0 === t.negative && 0 !== this.negative ? (this.negative = 0, e = t.sub(this), this.negative = 1, e) : this.length > t.length ? this.clone().iadd(t) : t.clone().iadd(this)
                    }, o.prototype.isub = function(t) {
                        if (0 !== t.negative) {
                            t.negative = 0;
                            var e = this.iadd(t);
                            return t.negative = 1, e._normSign()
                        }
                        if (0 !== this.negative) return this.negative = 0, this.iadd(t), this.negative = 1, this._normSign();
                        var r, i, n = this.cmp(t);
                        if (0 === n) return this.negative = 0, this.length = 1, this.words[0] = 0, this;
                        n > 0 ? (r = this, i = t) : (r = t, i = this);
                        for (var o = 0, s = 0; s < i.length; s++) o = (e = (0 | r.words[s]) - (0 | i.words[s]) + o) >> 26, this.words[s] = 67108863 & e;
                        for (; 0 !== o && s < r.length; s++) o = (e = (0 | r.words[s]) + o) >> 26, this.words[s] = 67108863 & e;
                        if (0 === o && s < r.length && r !== this)
                            for (; s < r.length; s++) this.words[s] = r.words[s];
                        return this.length = Math.max(this.length, s), r !== this && (this.negative = 1), this._strip()
                    }, o.prototype.sub = function(t) {
                        return this.clone().isub(t)
                    };
                    var g = function(t, e, r) {
                        var i, n, o, s = t.words,
                            h = e.words,
                            a = r.words,
                            u = 0,
                            f = 0 | s[0],
                            l = 8191 & f,
                            c = f >>> 13,
                            d = 0 | s[1],
                            m = 8191 & d,
                            p = d >>> 13,
                            g = 0 | s[2],
                            y = 8191 & g,
                            w = g >>> 13,
                            v = 0 | s[3],
                            M = 8191 & v,
                            b = v >>> 13,
                            E = 0 | s[4],
                            _ = 8191 & E,
                            x = E >>> 13,
                            B = 0 | s[5],
                            S = 8191 & B,
                            A = B >>> 13,
                            k = 0 | s[6],
                            P = 8191 & k,
                            R = k >>> 13,
                            U = 0 | s[7],
                            I = 8191 & U,
                            z = U >>> 13,
                            O = 0 | s[8],
                            T = 8191 & O,
                            q = O >>> 13,
                            H = 0 | s[9],
                            N = 8191 & H,
                            J = H >>> 13,
                            Z = 0 | h[0],
                            L = 8191 & Z,
                            j = Z >>> 13,
                            D = 0 | h[1],
                            F = 8191 & D,
                            $ = D >>> 13,
                            C = 0 | h[2],
                            K = 8191 & C,
                            W = C >>> 13,
                            V = 0 | h[3],
                            G = 8191 & V,
                            X = V >>> 13,
                            Y = 0 | h[4],
                            Q = 8191 & Y,
                            tt = Y >>> 13,
                            et = 0 | h[5],
                            rt = 8191 & et,
                            it = et >>> 13,
                            nt = 0 | h[6],
                            ot = 8191 & nt,
                            st = nt >>> 13,
                            ht = 0 | h[7],
                            at = 8191 & ht,
                            ut = ht >>> 13,
                            ft = 0 | h[8],
                            lt = 8191 & ft,
                            ct = ft >>> 13,
                            dt = 0 | h[9],
                            mt = 8191 & dt,
                            pt = dt >>> 13;
                        r.negative = t.negative ^ e.negative, r.length = 19;
                        var gt = (u + (i = Math.imul(l, L)) | 0) + ((8191 & (n = (n = Math.imul(l, j)) + Math.imul(c, L) | 0)) << 13) | 0;
                        u = ((o = Math.imul(c, j)) + (n >>> 13) | 0) + (gt >>> 26) | 0, gt &= 67108863, i = Math.imul(m, L), n = (n = Math.imul(m, j)) + Math.imul(p, L) | 0, o = Math.imul(p, j);
                        var yt = (u + (i = i + Math.imul(l, F) | 0) | 0) + ((8191 & (n = (n = n + Math.imul(l, $) | 0) + Math.imul(c, F) | 0)) << 13) | 0;
                        u = ((o = o + Math.imul(c, $) | 0) + (n >>> 13) | 0) + (yt >>> 26) | 0, yt &= 67108863, i = Math.imul(y, L), n = (n = Math.imul(y, j)) + Math.imul(w, L) | 0, o = Math.imul(w, j), i = i + Math.imul(m, F) | 0, n = (n = n + Math.imul(m, $) | 0) + Math.imul(p, F) | 0, o = o + Math.imul(p, $) | 0;
                        var wt = (u + (i = i + Math.imul(l, K) | 0) | 0) + ((8191 & (n = (n = n + Math.imul(l, W) | 0) + Math.imul(c, K) | 0)) << 13) | 0;
                        u = ((o = o + Math.imul(c, W) | 0) + (n >>> 13) | 0) + (wt >>> 26) | 0, wt &= 67108863, i = Math.imul(M, L), n = (n = Math.imul(M, j)) + Math.imul(b, L) | 0, o = Math.imul(b, j), i = i + Math.imul(y, F) | 0, n = (n = n + Math.imul(y, $) | 0) + Math.imul(w, F) | 0, o = o + Math.imul(w, $) | 0, i = i + Math.imul(m, K) | 0, n = (n = n + Math.imul(m, W) | 0) + Math.imul(p, K) | 0, o = o + Math.imul(p, W) | 0;
                        var vt = (u + (i = i + Math.imul(l, G) | 0) | 0) + ((8191 & (n = (n = n + Math.imul(l, X) | 0) + Math.imul(c, G) | 0)) << 13) | 0;
                        u = ((o = o + Math.imul(c, X) | 0) + (n >>> 13) | 0) + (vt >>> 26) | 0, vt &= 67108863, i = Math.imul(_, L), n = (n = Math.imul(_, j)) + Math.imul(x, L) | 0, o = Math.imul(x, j), i = i + Math.imul(M, F) | 0, n = (n = n + Math.imul(M, $) | 0) + Math.imul(b, F) | 0, o = o + Math.imul(b, $) | 0, i = i + Math.imul(y, K) | 0, n = (n = n + Math.imul(y, W) | 0) + Math.imul(w, K) | 0, o = o + Math.imul(w, W) | 0, i = i + Math.imul(m, G) | 0, n = (n = n + Math.imul(m, X) | 0) + Math.imul(p, G) | 0, o = o + Math.imul(p, X) | 0;
                        var Mt = (u + (i = i + Math.imul(l, Q) | 0) | 0) + ((8191 & (n = (n = n + Math.imul(l, tt) | 0) + Math.imul(c, Q) | 0)) << 13) | 0;
                        u = ((o = o + Math.imul(c, tt) | 0) + (n >>> 13) | 0) + (Mt >>> 26) | 0, Mt &= 67108863, i = Math.imul(S, L), n = (n = Math.imul(S, j)) + Math.imul(A, L) | 0, o = Math.imul(A, j), i = i + Math.imul(_, F) | 0, n = (n = n + Math.imul(_, $) | 0) + Math.imul(x, F) | 0, o = o + Math.imul(x, $) | 0, i = i + Math.imul(M, K) | 0, n = (n = n + Math.imul(M, W) | 0) + Math.imul(b, K) | 0, o = o + Math.imul(b, W) | 0, i = i + Math.imul(y, G) | 0, n = (n = n + Math.imul(y, X) | 0) + Math.imul(w, G) | 0, o = o + Math.imul(w, X) | 0, i = i + Math.imul(m, Q) | 0, n = (n = n + Math.imul(m, tt) | 0) + Math.imul(p, Q) | 0, o = o + Math.imul(p, tt) | 0;
                        var bt = (u + (i = i + Math.imul(l, rt) | 0) | 0) + ((8191 & (n = (n = n + Math.imul(l, it) | 0) + Math.imul(c, rt) | 0)) << 13) | 0;
                        u = ((o = o + Math.imul(c, it) | 0) + (n >>> 13) | 0) + (bt >>> 26) | 0, bt &= 67108863, i = Math.imul(P, L), n = (n = Math.imul(P, j)) + Math.imul(R, L) | 0, o = Math.imul(R, j), i = i + Math.imul(S, F) | 0, n = (n = n + Math.imul(S, $) | 0) + Math.imul(A, F) | 0, o = o + Math.imul(A, $) | 0, i = i + Math.imul(_, K) | 0, n = (n = n + Math.imul(_, W) | 0) + Math.imul(x, K) | 0, o = o + Math.imul(x, W) | 0, i = i + Math.imul(M, G) | 0, n = (n = n + Math.imul(M, X) | 0) + Math.imul(b, G) | 0, o = o + Math.imul(b, X) | 0, i = i + Math.imul(y, Q) | 0, n = (n = n + Math.imul(y, tt) | 0) + Math.imul(w, Q) | 0, o = o + Math.imul(w, tt) | 0, i = i + Math.imul(m, rt) | 0, n = (n = n + Math.imul(m, it) | 0) + Math.imul(p, rt) | 0, o = o + Math.imul(p, it) | 0;
                        var Et = (u + (i = i + Math.imul(l, ot) | 0) | 0) + ((8191 & (n = (n = n + Math.imul(l, st) | 0) + Math.imul(c, ot) | 0)) << 13) | 0;
                        u = ((o = o + Math.imul(c, st) | 0) + (n >>> 13) | 0) + (Et >>> 26) | 0, Et &= 67108863, i = Math.imul(I, L), n = (n = Math.imul(I, j)) + Math.imul(z, L) | 0, o = Math.imul(z, j), i = i + Math.imul(P, F) | 0, n = (n = n + Math.imul(P, $) | 0) + Math.imul(R, F) | 0, o = o + Math.imul(R, $) | 0, i = i + Math.imul(S, K) | 0, n = (n = n + Math.imul(S, W) | 0) + Math.imul(A, K) | 0, o = o + Math.imul(A, W) | 0, i = i + Math.imul(_, G) | 0, n = (n = n + Math.imul(_, X) | 0) + Math.imul(x, G) | 0, o = o + Math.imul(x, X) | 0, i = i + Math.imul(M, Q) | 0, n = (n = n + Math.imul(M, tt) | 0) + Math.imul(b, Q) | 0, o = o + Math.imul(b, tt) | 0, i = i + Math.imul(y, rt) | 0, n = (n = n + Math.imul(y, it) | 0) + Math.imul(w, rt) | 0, o = o + Math.imul(w, it) | 0, i = i + Math.imul(m, ot) | 0, n = (n = n + Math.imul(m, st) | 0) + Math.imul(p, ot) | 0, o = o + Math.imul(p, st) | 0;
                        var _t = (u + (i = i + Math.imul(l, at) | 0) | 0) + ((8191 & (n = (n = n + Math.imul(l, ut) | 0) + Math.imul(c, at) | 0)) << 13) | 0;
                        u = ((o = o + Math.imul(c, ut) | 0) + (n >>> 13) | 0) + (_t >>> 26) | 0, _t &= 67108863, i = Math.imul(T, L), n = (n = Math.imul(T, j)) + Math.imul(q, L) | 0, o = Math.imul(q, j), i = i + Math.imul(I, F) | 0, n = (n = n + Math.imul(I, $) | 0) + Math.imul(z, F) | 0, o = o + Math.imul(z, $) | 0, i = i + Math.imul(P, K) | 0, n = (n = n + Math.imul(P, W) | 0) + Math.imul(R, K) | 0, o = o + Math.imul(R, W) | 0, i = i + Math.imul(S, G) | 0, n = (n = n + Math.imul(S, X) | 0) + Math.imul(A, G) | 0, o = o + Math.imul(A, X) | 0, i = i + Math.imul(_, Q) | 0, n = (n = n + Math.imul(_, tt) | 0) + Math.imul(x, Q) | 0, o = o + Math.imul(x, tt) | 0, i = i + Math.imul(M, rt) | 0, n = (n = n + Math.imul(M, it) | 0) + Math.imul(b, rt) | 0, o = o + Math.imul(b, it) | 0, i = i + Math.imul(y, ot) | 0, n = (n = n + Math.imul(y, st) | 0) + Math.imul(w, ot) | 0, o = o + Math.imul(w, st) | 0, i = i + Math.imul(m, at) | 0, n = (n = n + Math.imul(m, ut) | 0) + Math.imul(p, at) | 0, o = o + Math.imul(p, ut) | 0;
                        var xt = (u + (i = i + Math.imul(l, lt) | 0) | 0) + ((8191 & (n = (n = n + Math.imul(l, ct) | 0) + Math.imul(c, lt) | 0)) << 13) | 0;
                        u = ((o = o + Math.imul(c, ct) | 0) + (n >>> 13) | 0) + (xt >>> 26) | 0, xt &= 67108863, i = Math.imul(N, L), n = (n = Math.imul(N, j)) + Math.imul(J, L) | 0, o = Math.imul(J, j), i = i + Math.imul(T, F) | 0, n = (n = n + Math.imul(T, $) | 0) + Math.imul(q, F) | 0, o = o + Math.imul(q, $) | 0, i = i + Math.imul(I, K) | 0, n = (n = n + Math.imul(I, W) | 0) + Math.imul(z, K) | 0, o = o + Math.imul(z, W) | 0, i = i + Math.imul(P, G) | 0, n = (n = n + Math.imul(P, X) | 0) + Math.imul(R, G) | 0, o = o + Math.imul(R, X) | 0, i = i + Math.imul(S, Q) | 0, n = (n = n + Math.imul(S, tt) | 0) + Math.imul(A, Q) | 0, o = o + Math.imul(A, tt) | 0, i = i + Math.imul(_, rt) | 0, n = (n = n + Math.imul(_, it) | 0) + Math.imul(x, rt) | 0, o = o + Math.imul(x, it) | 0, i = i + Math.imul(M, ot) | 0, n = (n = n + Math.imul(M, st) | 0) + Math.imul(b, ot) | 0, o = o + Math.imul(b, st) | 0, i = i + Math.imul(y, at) | 0, n = (n = n + Math.imul(y, ut) | 0) + Math.imul(w, at) | 0, o = o + Math.imul(w, ut) | 0, i = i + Math.imul(m, lt) | 0, n = (n = n + Math.imul(m, ct) | 0) + Math.imul(p, lt) | 0, o = o + Math.imul(p, ct) | 0;
                        var Bt = (u + (i = i + Math.imul(l, mt) | 0) | 0) + ((8191 & (n = (n = n + Math.imul(l, pt) | 0) + Math.imul(c, mt) | 0)) << 13) | 0;
                        u = ((o = o + Math.imul(c, pt) | 0) + (n >>> 13) | 0) + (Bt >>> 26) | 0, Bt &= 67108863, i = Math.imul(N, F), n = (n = Math.imul(N, $)) + Math.imul(J, F) | 0, o = Math.imul(J, $), i = i + Math.imul(T, K) | 0, n = (n = n + Math.imul(T, W) | 0) + Math.imul(q, K) | 0, o = o + Math.imul(q, W) | 0, i = i + Math.imul(I, G) | 0, n = (n = n + Math.imul(I, X) | 0) + Math.imul(z, G) | 0, o = o + Math.imul(z, X) | 0, i = i + Math.imul(P, Q) | 0, n = (n = n + Math.imul(P, tt) | 0) + Math.imul(R, Q) | 0, o = o + Math.imul(R, tt) | 0, i = i + Math.imul(S, rt) | 0, n = (n = n + Math.imul(S, it) | 0) + Math.imul(A, rt) | 0, o = o + Math.imul(A, it) | 0, i = i + Math.imul(_, ot) | 0, n = (n = n + Math.imul(_, st) | 0) + Math.imul(x, ot) | 0, o = o + Math.imul(x, st) | 0, i = i + Math.imul(M, at) | 0, n = (n = n + Math.imul(M, ut) | 0) + Math.imul(b, at) | 0, o = o + Math.imul(b, ut) | 0, i = i + Math.imul(y, lt) | 0, n = (n = n + Math.imul(y, ct) | 0) + Math.imul(w, lt) | 0, o = o + Math.imul(w, ct) | 0;
                        var St = (u + (i = i + Math.imul(m, mt) | 0) | 0) + ((8191 & (n = (n = n + Math.imul(m, pt) | 0) + Math.imul(p, mt) | 0)) << 13) | 0;
                        u = ((o = o + Math.imul(p, pt) | 0) + (n >>> 13) | 0) + (St >>> 26) | 0, St &= 67108863, i = Math.imul(N, K), n = (n = Math.imul(N, W)) + Math.imul(J, K) | 0, o = Math.imul(J, W), i = i + Math.imul(T, G) | 0, n = (n = n + Math.imul(T, X) | 0) + Math.imul(q, G) | 0, o = o + Math.imul(q, X) | 0, i = i + Math.imul(I, Q) | 0, n = (n = n + Math.imul(I, tt) | 0) + Math.imul(z, Q) | 0, o = o + Math.imul(z, tt) | 0, i = i + Math.imul(P, rt) | 0, n = (n = n + Math.imul(P, it) | 0) + Math.imul(R, rt) | 0, o = o + Math.imul(R, it) | 0, i = i + Math.imul(S, ot) | 0, n = (n = n + Math.imul(S, st) | 0) + Math.imul(A, ot) | 0, o = o + Math.imul(A, st) | 0, i = i + Math.imul(_, at) | 0, n = (n = n + Math.imul(_, ut) | 0) + Math.imul(x, at) | 0, o = o + Math.imul(x, ut) | 0, i = i + Math.imul(M, lt) | 0, n = (n = n + Math.imul(M, ct) | 0) + Math.imul(b, lt) | 0, o = o + Math.imul(b, ct) | 0;
                        var At = (u + (i = i + Math.imul(y, mt) | 0) | 0) + ((8191 & (n = (n = n + Math.imul(y, pt) | 0) + Math.imul(w, mt) | 0)) << 13) | 0;
                        u = ((o = o + Math.imul(w, pt) | 0) + (n >>> 13) | 0) + (At >>> 26) | 0, At &= 67108863, i = Math.imul(N, G), n = (n = Math.imul(N, X)) + Math.imul(J, G) | 0, o = Math.imul(J, X), i = i + Math.imul(T, Q) | 0, n = (n = n + Math.imul(T, tt) | 0) + Math.imul(q, Q) | 0, o = o + Math.imul(q, tt) | 0, i = i + Math.imul(I, rt) | 0, n = (n = n + Math.imul(I, it) | 0) + Math.imul(z, rt) | 0, o = o + Math.imul(z, it) | 0, i = i + Math.imul(P, ot) | 0, n = (n = n + Math.imul(P, st) | 0) + Math.imul(R, ot) | 0, o = o + Math.imul(R, st) | 0, i = i + Math.imul(S, at) | 0, n = (n = n + Math.imul(S, ut) | 0) + Math.imul(A, at) | 0, o = o + Math.imul(A, ut) | 0, i = i + Math.imul(_, lt) | 0, n = (n = n + Math.imul(_, ct) | 0) + Math.imul(x, lt) | 0, o = o + Math.imul(x, ct) | 0;
                        var kt = (u + (i = i + Math.imul(M, mt) | 0) | 0) + ((8191 & (n = (n = n + Math.imul(M, pt) | 0) + Math.imul(b, mt) | 0)) << 13) | 0;
                        u = ((o = o + Math.imul(b, pt) | 0) + (n >>> 13) | 0) + (kt >>> 26) | 0, kt &= 67108863, i = Math.imul(N, Q), n = (n = Math.imul(N, tt)) + Math.imul(J, Q) | 0, o = Math.imul(J, tt), i = i + Math.imul(T, rt) | 0, n = (n = n + Math.imul(T, it) | 0) + Math.imul(q, rt) | 0, o = o + Math.imul(q, it) | 0, i = i + Math.imul(I, ot) | 0, n = (n = n + Math.imul(I, st) | 0) + Math.imul(z, ot) | 0, o = o + Math.imul(z, st) | 0, i = i + Math.imul(P, at) | 0, n = (n = n + Math.imul(P, ut) | 0) + Math.imul(R, at) | 0, o = o + Math.imul(R, ut) | 0, i = i + Math.imul(S, lt) | 0, n = (n = n + Math.imul(S, ct) | 0) + Math.imul(A, lt) | 0, o = o + Math.imul(A, ct) | 0;
                        var Pt = (u + (i = i + Math.imul(_, mt) | 0) | 0) + ((8191 & (n = (n = n + Math.imul(_, pt) | 0) + Math.imul(x, mt) | 0)) << 13) | 0;
                        u = ((o = o + Math.imul(x, pt) | 0) + (n >>> 13) | 0) + (Pt >>> 26) | 0, Pt &= 67108863, i = Math.imul(N, rt), n = (n = Math.imul(N, it)) + Math.imul(J, rt) | 0, o = Math.imul(J, it), i = i + Math.imul(T, ot) | 0, n = (n = n + Math.imul(T, st) | 0) + Math.imul(q, ot) | 0, o = o + Math.imul(q, st) | 0, i = i + Math.imul(I, at) | 0, n = (n = n + Math.imul(I, ut) | 0) + Math.imul(z, at) | 0, o = o + Math.imul(z, ut) | 0, i = i + Math.imul(P, lt) | 0, n = (n = n + Math.imul(P, ct) | 0) + Math.imul(R, lt) | 0, o = o + Math.imul(R, ct) | 0;
                        var Rt = (u + (i = i + Math.imul(S, mt) | 0) | 0) + ((8191 & (n = (n = n + Math.imul(S, pt) | 0) + Math.imul(A, mt) | 0)) << 13) | 0;
                        u = ((o = o + Math.imul(A, pt) | 0) + (n >>> 13) | 0) + (Rt >>> 26) | 0, Rt &= 67108863, i = Math.imul(N, ot), n = (n = Math.imul(N, st)) + Math.imul(J, ot) | 0, o = Math.imul(J, st), i = i + Math.imul(T, at) | 0, n = (n = n + Math.imul(T, ut) | 0) + Math.imul(q, at) | 0, o = o + Math.imul(q, ut) | 0, i = i + Math.imul(I, lt) | 0, n = (n = n + Math.imul(I, ct) | 0) + Math.imul(z, lt) | 0, o = o + Math.imul(z, ct) | 0;
                        var Ut = (u + (i = i + Math.imul(P, mt) | 0) | 0) + ((8191 & (n = (n = n + Math.imul(P, pt) | 0) + Math.imul(R, mt) | 0)) << 13) | 0;
                        u = ((o = o + Math.imul(R, pt) | 0) + (n >>> 13) | 0) + (Ut >>> 26) | 0, Ut &= 67108863, i = Math.imul(N, at), n = (n = Math.imul(N, ut)) + Math.imul(J, at) | 0, o = Math.imul(J, ut), i = i + Math.imul(T, lt) | 0, n = (n = n + Math.imul(T, ct) | 0) + Math.imul(q, lt) | 0, o = o + Math.imul(q, ct) | 0;
                        var It = (u + (i = i + Math.imul(I, mt) | 0) | 0) + ((8191 & (n = (n = n + Math.imul(I, pt) | 0) + Math.imul(z, mt) | 0)) << 13) | 0;
                        u = ((o = o + Math.imul(z, pt) | 0) + (n >>> 13) | 0) + (It >>> 26) | 0, It &= 67108863, i = Math.imul(N, lt), n = (n = Math.imul(N, ct)) + Math.imul(J, lt) | 0, o = Math.imul(J, ct);
                        var zt = (u + (i = i + Math.imul(T, mt) | 0) | 0) + ((8191 & (n = (n = n + Math.imul(T, pt) | 0) + Math.imul(q, mt) | 0)) << 13) | 0;
                        u = ((o = o + Math.imul(q, pt) | 0) + (n >>> 13) | 0) + (zt >>> 26) | 0, zt &= 67108863;
                        var Ot = (u + (i = Math.imul(N, mt)) | 0) + ((8191 & (n = (n = Math.imul(N, pt)) + Math.imul(J, mt) | 0)) << 13) | 0;
                        return u = ((o = Math.imul(J, pt)) + (n >>> 13) | 0) + (Ot >>> 26) | 0, Ot &= 67108863, a[0] = gt, a[1] = yt, a[2] = wt, a[3] = vt, a[4] = Mt, a[5] = bt, a[6] = Et, a[7] = _t, a[8] = xt, a[9] = Bt, a[10] = St, a[11] = At, a[12] = kt, a[13] = Pt, a[14] = Rt, a[15] = Ut, a[16] = It, a[17] = zt, a[18] = Ot, 0 !== u && (a[19] = u, r.length++), r
                    };

                    function y(t, e, r) {
                        r.negative = e.negative ^ t.negative, r.length = t.length + e.length;
                        for (var i = 0, n = 0, o = 0; o < r.length - 1; o++) {
                            var s = n;
                            n = 0;
                            for (var h = 67108863 & i, a = Math.min(o, e.length - 1), u = Math.max(0, o - t.length + 1); u <= a; u++) {
                                var f = o - u,
                                    l = (0 | t.words[f]) * (0 | e.words[u]),
                                    c = 67108863 & l;
                                h = 67108863 & (c = c + h | 0), n += (s = (s = s + (l / 67108864 | 0) | 0) + (c >>> 26) | 0) >>> 26, s &= 67108863
                            }
                            r.words[o] = h, i = s, s = n
                        }
                        return 0 !== i ? r.words[o] = i : r.length--, r._strip()
                    }

                    function w(t, e, r) {
                        return y(t, e, r)
                    }

                    function v(t, e) {
                        this.x = t, this.y = e
                    }
                    Math.imul || (g = p), o.prototype.mulTo = function(t, e) {
                        var r = this.length + t.length;
                        return 10 === this.length && 10 === t.length ? g(this, t, e) : r < 63 ? p(this, t, e) : r < 1024 ? y(this, t, e) : w(this, t, e)
                    }, v.prototype.makeRBT = function(t) {
                        for (var e = new Array(t), r = o.prototype._countBits(t) - 1, i = 0; i < t; i++) e[i] = this.revBin(i, r, t);
                        return e
                    }, v.prototype.revBin = function(t, e, r) {
                        if (0 === t || t === r - 1) return t;
                        for (var i = 0, n = 0; n < e; n++) i |= (1 & t) << e - n - 1, t >>= 1;
                        return i
                    }, v.prototype.permute = function(t, e, r, i, n, o) {
                        for (var s = 0; s < o; s++) i[s] = e[t[s]], n[s] = r[t[s]]
                    }, v.prototype.transform = function(t, e, r, i, n, o) {
                        this.permute(o, t, e, r, i, n);
                        for (var s = 1; s < n; s <<= 1)
                            for (var h = s << 1, a = Math.cos(2 * Math.PI / h), u = Math.sin(2 * Math.PI / h), f = 0; f < n; f += h)
                                for (var l = a, c = u, d = 0; d < s; d++) {
                                    var m = r[f + d],
                                        p = i[f + d],
                                        g = r[f + d + s],
                                        y = i[f + d + s],
                                        w = l * g - c * y;
                                    y = l * y + c * g, g = w, r[f + d] = m + g, i[f + d] = p + y, r[f + d + s] = m - g, i[f + d + s] = p - y, d !== h && (w = a * l - u * c, c = a * c + u * l, l = w)
                                }
                    }, v.prototype.guessLen13b = function(t, e) {
                        var r = 1 | Math.max(e, t),
                            i = 1 & r,
                            n = 0;
                        for (r = r / 2 | 0; r; r >>>= 1) n++;
                        return 1 << n + 1 + i
                    }, v.prototype.conjugate = function(t, e, r) {
                        if (!(r <= 1))
                            for (var i = 0; i < r / 2; i++) {
                                var n = t[i];
                                t[i] = t[r - i - 1], t[r - i - 1] = n, n = e[i], e[i] = -e[r - i - 1], e[r - i - 1] = -n
                            }
                    }, v.prototype.normalize13b = function(t, e) {
                        for (var r = 0, i = 0; i < e / 2; i++) {
                            var n = 8192 * Math.round(t[2 * i + 1] / e) + Math.round(t[2 * i] / e) + r;
                            t[i] = 67108863 & n, r = n < 67108864 ? 0 : n / 67108864 | 0
                        }
                        return t
                    }, v.prototype.convert13b = function(t, e, r, n) {
                        for (var o = 0, s = 0; s < e; s++) o += 0 | t[s], r[2 * s] = 8191 & o, o >>>= 13, r[2 * s + 1] = 8191 & o, o >>>= 13;
                        for (s = 2 * e; s < n; ++s) r[s] = 0;
                        i(0 === o), i(0 == (-8192 & o))
                    }, v.prototype.stub = function(t) {
                        for (var e = new Array(t), r = 0; r < t; r++) e[r] = 0;
                        return e
                    }, v.prototype.mulp = function(t, e, r) {
                        var i = 2 * this.guessLen13b(t.length, e.length),
                            n = this.makeRBT(i),
                            o = this.stub(i),
                            s = new Array(i),
                            h = new Array(i),
                            a = new Array(i),
                            u = new Array(i),
                            f = new Array(i),
                            l = new Array(i),
                            c = r.words;
                        c.length = i, this.convert13b(t.words, t.length, s, i), this.convert13b(e.words, e.length, u, i), this.transform(s, o, h, a, i, n), this.transform(u, o, f, l, i, n);
                        for (var d = 0; d < i; d++) {
                            var m = h[d] * f[d] - a[d] * l[d];
                            a[d] = h[d] * l[d] + a[d] * f[d], h[d] = m
                        }
                        return this.conjugate(h, a, i), this.transform(h, a, c, o, i, n), this.conjugate(c, o, i), this.normalize13b(c, i), r.negative = t.negative ^ e.negative, r.length = t.length + e.length, r._strip()
                    }, o.prototype.mul = function(t) {
                        var e = new o(null);
                        return e.words = new Array(this.length + t.length), this.mulTo(t, e)
                    }, o.prototype.mulf = function(t) {
                        var e = new o(null);
                        return e.words = new Array(this.length + t.length), w(this, t, e)
                    }, o.prototype.imul = function(t) {
                        return this.clone().mulTo(t, this)
                    }, o.prototype.imuln = function(t) {
                        var e = t < 0;
                        e && (t = -t), i("number" == typeof t), i(t < 67108864);
                        for (var r = 0, n = 0; n < this.length; n++) {
                            var o = (0 | this.words[n]) * t,
                                s = (67108863 & o) + (67108863 & r);
                            r >>= 26, r += o / 67108864 | 0, r += s >>> 26, this.words[n] = 67108863 & s
                        }
                        return 0 !== r && (this.words[n] = r, this.length++), e ? this.ineg() : this
                    }, o.prototype.muln = function(t) {
                        return this.clone().imuln(t)
                    }, o.prototype.sqr = function() {
                        return this.mul(this)
                    }, o.prototype.isqr = function() {
                        return this.imul(this.clone())
                    }, o.prototype.pow = function(t) {
                        var e = function(t) {
                            for (var e = new Array(t.bitLength()), r = 0; r < e.length; r++) {
                                var i = r / 26 | 0,
                                    n = r % 26;
                                e[r] = t.words[i] >>> n & 1
                            }
                            return e
                        }(t);
                        if (0 === e.length) return new o(1);
                        for (var r = this, i = 0; i < e.length && 0 === e[i]; i++, r = r.sqr());
                        if (++i < e.length)
                            for (var n = r.sqr(); i < e.length; i++, n = n.sqr()) 0 !== e[i] && (r = r.mul(n));
                        return r
                    }, o.prototype.iushln = function(t) {
                        i("number" == typeof t && t >= 0);
                        var e, r = t % 26,
                            n = (t - r) / 26,
                            o = 67108863 >>> 26 - r << 26 - r;
                        if (0 !== r) {
                            var s = 0;
                            for (e = 0; e < this.length; e++) {
                                var h = this.words[e] & o,
                                    a = (0 | this.words[e]) - h << r;
                                this.words[e] = a | s, s = h >>> 26 - r
                            }
                            s && (this.words[e] = s, this.length++)
                        }
                        if (0 !== n) {
                            for (e = this.length - 1; e >= 0; e--) this.words[e + n] = this.words[e];
                            for (e = 0; e < n; e++) this.words[e] = 0;
                            this.length += n
                        }
                        return this._strip()
                    }, o.prototype.ishln = function(t) {
                        return i(0 === this.negative), this.iushln(t)
                    }, o.prototype.iushrn = function(t, e, r) {
                        var n;
                        i("number" == typeof t && t >= 0), n = e ? (e - e % 26) / 26 : 0;
                        var o = t % 26,
                            s = Math.min((t - o) / 26, this.length),
                            h = 67108863 ^ 67108863 >>> o << o,
                            a = r;
                        if (n -= s, n = Math.max(0, n), a) {
                            for (var u = 0; u < s; u++) a.words[u] = this.words[u];
                            a.length = s
                        }
                        if (0 === s);
                        else if (this.length > s)
                            for (this.length -= s, u = 0; u < this.length; u++) this.words[u] = this.words[u + s];
                        else this.words[0] = 0, this.length = 1;
                        var f = 0;
                        for (u = this.length - 1; u >= 0 && (0 !== f || u >= n); u--) {
                            var l = 0 | this.words[u];
                            this.words[u] = f << 26 - o | l >>> o, f = l & h
                        }
                        return a && 0 !== f && (a.words[a.length++] = f), 0 === this.length && (this.words[0] = 0, this.length = 1), this._strip()
                    }, o.prototype.ishrn = function(t, e, r) {
                        return i(0 === this.negative), this.iushrn(t, e, r)
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
                        var e = t % 26,
                            r = (t - e) / 26,
                            n = 1 << e;
                        return !(this.length <= r) && !!(this.words[r] & n)
                    }, o.prototype.imaskn = function(t) {
                        i("number" == typeof t && t >= 0);
                        var e = t % 26,
                            r = (t - e) / 26;
                        if (i(0 === this.negative, "imaskn works only with positive numbers"), this.length <= r) return this;
                        if (0 !== e && r++, this.length = Math.min(r, this.length), 0 !== e) {
                            var n = 67108863 ^ 67108863 >>> e << e;
                            this.words[this.length - 1] &= n
                        }
                        return this._strip()
                    }, o.prototype.maskn = function(t) {
                        return this.clone().imaskn(t)
                    }, o.prototype.iaddn = function(t) {
                        return i("number" == typeof t), i(t < 67108864), t < 0 ? this.isubn(-t) : 0 !== this.negative ? 1 === this.length && (0 | this.words[0]) <= t ? (this.words[0] = t - (0 | this.words[0]), this.negative = 0, this) : (this.negative = 0, this.isubn(t), this.negative = 1, this) : this._iaddn(t)
                    }, o.prototype._iaddn = function(t) {
                        this.words[0] += t;
                        for (var e = 0; e < this.length && this.words[e] >= 67108864; e++) this.words[e] -= 67108864, e === this.length - 1 ? this.words[e + 1] = 1 : this.words[e + 1]++;
                        return this.length = Math.max(this.length, e + 1), this
                    }, o.prototype.isubn = function(t) {
                        if (i("number" == typeof t), i(t < 67108864), t < 0) return this.iaddn(-t);
                        if (0 !== this.negative) return this.negative = 0, this.iaddn(t), this.negative = 1, this;
                        if (this.words[0] -= t, 1 === this.length && this.words[0] < 0) this.words[0] = -this.words[0], this.negative = 1;
                        else
                            for (var e = 0; e < this.length && this.words[e] < 0; e++) this.words[e] += 67108864, this.words[e + 1] -= 1;
                        return this._strip()
                    }, o.prototype.addn = function(t) {
                        return this.clone().iaddn(t)
                    }, o.prototype.subn = function(t) {
                        return this.clone().isubn(t)
                    }, o.prototype.iabs = function() {
                        return this.negative = 0, this
                    }, o.prototype.abs = function() {
                        return this.clone().iabs()
                    }, o.prototype._ishlnsubmul = function(t, e, r) {
                        var n, o, s = t.length + r;
                        this._expand(s);
                        var h = 0;
                        for (n = 0; n < t.length; n++) {
                            o = (0 | this.words[n + r]) + h;
                            var a = (0 | t.words[n]) * e;
                            h = ((o -= 67108863 & a) >> 26) - (a / 67108864 | 0), this.words[n + r] = 67108863 & o
                        }
                        for (; n < this.length - r; n++) h = (o = (0 | this.words[n + r]) + h) >> 26, this.words[n + r] = 67108863 & o;
                        if (0 === h) return this._strip();
                        for (i(-1 === h), h = 0, n = 0; n < this.length; n++) h = (o = -(0 | this.words[n]) + h) >> 26, this.words[n] = 67108863 & o;
                        return this.negative = 1, this._strip()
                    }, o.prototype._wordDiv = function(t, e) {
                        var r = (this.length, t.length),
                            i = this.clone(),
                            n = t,
                            s = 0 | n.words[n.length - 1];
                        0 !== (r = 26 - this._countBits(s)) && (n = n.ushln(r), i.iushln(r), s = 0 | n.words[n.length - 1]);
                        var h, a = i.length - n.length;
                        if ("mod" !== e) {
                            (h = new o(null)).length = a + 1, h.words = new Array(h.length);
                            for (var u = 0; u < h.length; u++) h.words[u] = 0
                        }
                        var f = i.clone()._ishlnsubmul(n, 1, a);
                        0 === f.negative && (i = f, h && (h.words[a] = 1));
                        for (var l = a - 1; l >= 0; l--) {
                            var c = 67108864 * (0 | i.words[n.length + l]) + (0 | i.words[n.length + l - 1]);
                            for (c = Math.min(c / s | 0, 67108863), i._ishlnsubmul(n, c, l); 0 !== i.negative;) c--, i.negative = 0, i._ishlnsubmul(n, 1, l), i.isZero() || (i.negative ^= 1);
                            h && (h.words[l] = c)
                        }
                        return h && h._strip(), i._strip(), "div" !== e && 0 !== r && i.iushrn(r), {
                            div: h || null,
                            mod: i
                        }
                    }, o.prototype.divmod = function(t, e, r) {
                        return i(!t.isZero()), this.isZero() ? {
                            div: new o(0),
                            mod: new o(0)
                        } : 0 !== this.negative && 0 === t.negative ? (h = this.neg().divmod(t, e), "mod" !== e && (n = h.div.neg()), "div" !== e && (s = h.mod.neg(), r && 0 !== s.negative && s.iadd(t)), {
                            div: n,
                            mod: s
                        }) : 0 === this.negative && 0 !== t.negative ? (h = this.divmod(t.neg(), e), "mod" !== e && (n = h.div.neg()), {
                            div: n,
                            mod: h.mod
                        }) : 0 != (this.negative & t.negative) ? (h = this.neg().divmod(t.neg(), e), "div" !== e && (s = h.mod.neg(), r && 0 !== s.negative && s.isub(t)), {
                            div: h.div,
                            mod: s
                        }) : t.length > this.length || this.cmp(t) < 0 ? {
                            div: new o(0),
                            mod: this
                        } : 1 === t.length ? "div" === e ? {
                            div: this.divn(t.words[0]),
                            mod: null
                        } : "mod" === e ? {
                            div: null,
                            mod: new o(this.modrn(t.words[0]))
                        } : {
                            div: this.divn(t.words[0]),
                            mod: new o(this.modrn(t.words[0]))
                        } : this._wordDiv(t, e);
                        var n, s, h
                    }, o.prototype.div = function(t) {
                        return this.divmod(t, "div", !1).div
                    }, o.prototype.mod = function(t) {
                        return this.divmod(t, "mod", !1).mod
                    }, o.prototype.umod = function(t) {
                        return this.divmod(t, "mod", !0).mod
                    }, o.prototype.divRound = function(t) {
                        var e = this.divmod(t);
                        if (e.mod.isZero()) return e.div;
                        var r = 0 !== e.div.negative ? e.mod.isub(t) : e.mod,
                            i = t.ushrn(1),
                            n = t.andln(1),
                            o = r.cmp(i);
                        return o < 0 || 1 === n && 0 === o ? e.div : 0 !== e.div.negative ? e.div.isubn(1) : e.div.iaddn(1)
                    }, o.prototype.modrn = function(t) {
                        var e = t < 0;
                        e && (t = -t), i(t <= 67108863);
                        for (var r = (1 << 26) % t, n = 0, o = this.length - 1; o >= 0; o--) n = (r * n + (0 | this.words[o])) % t;
                        return e ? -n : n
                    }, o.prototype.modn = function(t) {
                        return this.modrn(t)
                    }, o.prototype.idivn = function(t) {
                        var e = t < 0;
                        e && (t = -t), i(t <= 67108863);
                        for (var r = 0, n = this.length - 1; n >= 0; n--) {
                            var o = (0 | this.words[n]) + 67108864 * r;
                            this.words[n] = o / t | 0, r = o % t
                        }
                        return this._strip(), e ? this.ineg() : this
                    }, o.prototype.divn = function(t) {
                        return this.clone().idivn(t)
                    }, o.prototype.egcd = function(t) {
                        i(0 === t.negative), i(!t.isZero());
                        var e = this,
                            r = t.clone();
                        e = 0 !== e.negative ? e.umod(t) : e.clone();
                        for (var n = new o(1), s = new o(0), h = new o(0), a = new o(1), u = 0; e.isEven() && r.isEven();) e.iushrn(1), r.iushrn(1), ++u;
                        for (var f = r.clone(), l = e.clone(); !e.isZero();) {
                            for (var c = 0, d = 1; 0 == (e.words[0] & d) && c < 26; ++c, d <<= 1);
                            if (c > 0)
                                for (e.iushrn(c); c-- > 0;)(n.isOdd() || s.isOdd()) && (n.iadd(f), s.isub(l)), n.iushrn(1), s.iushrn(1);
                            for (var m = 0, p = 1; 0 == (r.words[0] & p) && m < 26; ++m, p <<= 1);
                            if (m > 0)
                                for (r.iushrn(m); m-- > 0;)(h.isOdd() || a.isOdd()) && (h.iadd(f), a.isub(l)), h.iushrn(1), a.iushrn(1);
                            e.cmp(r) >= 0 ? (e.isub(r), n.isub(h), s.isub(a)) : (r.isub(e), h.isub(n), a.isub(s))
                        }
                        return {
                            a: h,
                            b: a,
                            gcd: r.iushln(u)
                        }
                    }, o.prototype._invmp = function(t) {
                        i(0 === t.negative), i(!t.isZero());
                        var e = this,
                            r = t.clone();
                        e = 0 !== e.negative ? e.umod(t) : e.clone();
                        for (var n, s = new o(1), h = new o(0), a = r.clone(); e.cmpn(1) > 0 && r.cmpn(1) > 0;) {
                            for (var u = 0, f = 1; 0 == (e.words[0] & f) && u < 26; ++u, f <<= 1);
                            if (u > 0)
                                for (e.iushrn(u); u-- > 0;) s.isOdd() && s.iadd(a), s.iushrn(1);
                            for (var l = 0, c = 1; 0 == (r.words[0] & c) && l < 26; ++l, c <<= 1);
                            if (l > 0)
                                for (r.iushrn(l); l-- > 0;) h.isOdd() && h.iadd(a), h.iushrn(1);
                            e.cmp(r) >= 0 ? (e.isub(r), s.isub(h)) : (r.isub(e), h.isub(s))
                        }
                        return (n = 0 === e.cmpn(1) ? s : h).cmpn(0) < 0 && n.iadd(t), n
                    }, o.prototype.gcd = function(t) {
                        if (this.isZero()) return t.abs();
                        if (t.isZero()) return this.abs();
                        var e = this.clone(),
                            r = t.clone();
                        e.negative = 0, r.negative = 0;
                        for (var i = 0; e.isEven() && r.isEven(); i++) e.iushrn(1), r.iushrn(1);
                        for (;;) {
                            for (; e.isEven();) e.iushrn(1);
                            for (; r.isEven();) r.iushrn(1);
                            var n = e.cmp(r);
                            if (n < 0) {
                                var o = e;
                                e = r, r = o
                            } else if (0 === n || 0 === r.cmpn(1)) break;
                            e.isub(r)
                        }
                        return r.iushln(i)
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
                        var e = t % 26,
                            r = (t - e) / 26,
                            n = 1 << e;
                        if (this.length <= r) return this._expand(r + 1), this.words[r] |= n, this;
                        for (var o = n, s = r; 0 !== o && s < this.length; s++) {
                            var h = 0 | this.words[s];
                            o = (h += o) >>> 26, h &= 67108863, this.words[s] = h
                        }
                        return 0 !== o && (this.words[s] = o, this.length++), this
                    }, o.prototype.isZero = function() {
                        return 1 === this.length && 0 === this.words[0]
                    }, o.prototype.cmpn = function(t) {
                        var e, r = t < 0;
                        if (0 !== this.negative && !r) return -1;
                        if (0 === this.negative && r) return 1;
                        if (this._strip(), this.length > 1) e = 1;
                        else {
                            r && (t = -t), i(t <= 67108863, "Number is too big");
                            var n = 0 | this.words[0];
                            e = n === t ? 0 : n < t ? -1 : 1
                        }
                        return 0 !== this.negative ? 0 | -e : e
                    }, o.prototype.cmp = function(t) {
                        if (0 !== this.negative && 0 === t.negative) return -1;
                        if (0 === this.negative && 0 !== t.negative) return 1;
                        var e = this.ucmp(t);
                        return 0 !== this.negative ? 0 | -e : e
                    }, o.prototype.ucmp = function(t) {
                        if (this.length > t.length) return 1;
                        if (this.length < t.length) return -1;
                        for (var e = 0, r = this.length - 1; r >= 0; r--) {
                            var i = 0 | this.words[r],
                                n = 0 | t.words[r];
                            if (i !== n) {
                                i < n ? e = -1 : i > n && (e = 1);
                                break
                            }
                        }
                        return e
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

                    function b(t, e) {
                        this.name = t, this.p = new o(e, 16), this.n = this.p.bitLength(), this.k = new o(1).iushln(this.n).isub(this.p), this.tmp = this._tmp()
                    }

                    function E() {
                        b.call(this, "k256", "ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffe fffffc2f")
                    }

                    function _() {
                        b.call(this, "p224", "ffffffff ffffffff ffffffff ffffffff 00000000 00000000 00000001")
                    }

                    function x() {
                        b.call(this, "p192", "ffffffff ffffffff ffffffff fffffffe ffffffff ffffffff")
                    }

                    function B() {
                        b.call(this, "25519", "7fffffffffffffff ffffffffffffffff ffffffffffffffff ffffffffffffffed")
                    }

                    function S(t) {
                        if ("string" == typeof t) {
                            var e = o._prime(t);
                            this.m = e.p, this.prime = e
                        } else i(t.gtn(1), "modulus must be greater than 1"), this.m = t, this.prime = null
                    }

                    function A(t) {
                        S.call(this, t), this.shift = this.m.bitLength(), this.shift % 26 != 0 && (this.shift += 26 - this.shift % 26), this.r = new o(1).iushln(this.shift), this.r2 = this.imod(this.r.sqr()), this.rinv = this.r._invmp(this.m), this.minv = this.rinv.mul(this.r).isubn(1).div(this.m), this.minv = this.minv.umod(this.r), this.minv = this.r.sub(this.minv)
                    }
                    b.prototype._tmp = function() {
                        var t = new o(null);
                        return t.words = new Array(Math.ceil(this.n / 13)), t
                    }, b.prototype.ireduce = function(t) {
                        var e, r = t;
                        do {
                            this.split(r, this.tmp), e = (r = (r = this.imulK(r)).iadd(this.tmp)).bitLength()
                        } while (e > this.n);
                        var i = e < this.n ? -1 : r.ucmp(this.p);
                        return 0 === i ? (r.words[0] = 0, r.length = 1) : i > 0 ? r.isub(this.p) : void 0 !== r.strip ? r.strip() : r._strip(), r
                    }, b.prototype.split = function(t, e) {
                        t.iushrn(this.n, 0, e)
                    }, b.prototype.imulK = function(t) {
                        return t.imul(this.k)
                    }, n(E, b), E.prototype.split = function(t, e) {
                        for (var r = Math.min(t.length, 9), i = 0; i < r; i++) e.words[i] = t.words[i];
                        if (e.length = r, t.length <= 9) return t.words[0] = 0, void(t.length = 1);
                        var n = t.words[9];
                        for (e.words[e.length++] = 4194303 & n, i = 10; i < t.length; i++) {
                            var o = 0 | t.words[i];
                            t.words[i - 10] = (4194303 & o) << 4 | n >>> 22, n = o
                        }
                        n >>>= 22, t.words[i - 10] = n, 0 === n && t.length > 10 ? t.length -= 10 : t.length -= 9
                    }, E.prototype.imulK = function(t) {
                        t.words[t.length] = 0, t.words[t.length + 1] = 0, t.length += 2;
                        for (var e = 0, r = 0; r < t.length; r++) {
                            var i = 0 | t.words[r];
                            e += 977 * i, t.words[r] = 67108863 & e, e = 64 * i + (e / 67108864 | 0)
                        }
                        return 0 === t.words[t.length - 1] && (t.length--, 0 === t.words[t.length - 1] && t.length--), t
                    }, n(_, b), n(x, b), n(B, b), B.prototype.imulK = function(t) {
                        for (var e = 0, r = 0; r < t.length; r++) {
                            var i = 19 * (0 | t.words[r]) + e,
                                n = 67108863 & i;
                            i >>>= 26, t.words[r] = n, e = i
                        }
                        return 0 !== e && (t.words[t.length++] = e), t
                    }, o._prime = function(t) {
                        if (M[t]) return M[t];
                        var e;
                        if ("k256" === t) e = new E;
                        else if ("p224" === t) e = new _;
                        else if ("p192" === t) e = new x;
                        else {
                            if ("p25519" !== t) throw new Error("Unknown prime " + t);
                            e = new B
                        }
                        return M[t] = e, e
                    }, S.prototype._verify1 = function(t) {
                        i(0 === t.negative, "red works only with positives"), i(t.red, "red works only with red numbers")
                    }, S.prototype._verify2 = function(t, e) {
                        i(0 == (t.negative | e.negative), "red works only with positives"), i(t.red && t.red === e.red, "red works only with red numbers")
                    }, S.prototype.imod = function(t) {
                        return this.prime ? this.prime.ireduce(t)._forceRed(this) : (f(t, t.umod(this.m)._forceRed(this)), t)
                    }, S.prototype.neg = function(t) {
                        return t.isZero() ? t.clone() : this.m.sub(t)._forceRed(this)
                    }, S.prototype.add = function(t, e) {
                        this._verify2(t, e);
                        var r = t.add(e);
                        return r.cmp(this.m) >= 0 && r.isub(this.m), r._forceRed(this)
                    }, S.prototype.iadd = function(t, e) {
                        this._verify2(t, e);
                        var r = t.iadd(e);
                        return r.cmp(this.m) >= 0 && r.isub(this.m), r
                    }, S.prototype.sub = function(t, e) {
                        this._verify2(t, e);
                        var r = t.sub(e);
                        return r.cmpn(0) < 0 && r.iadd(this.m), r._forceRed(this)
                    }, S.prototype.isub = function(t, e) {
                        this._verify2(t, e);
                        var r = t.isub(e);
                        return r.cmpn(0) < 0 && r.iadd(this.m), r
                    }, S.prototype.shl = function(t, e) {
                        return this._verify1(t), this.imod(t.ushln(e))
                    }, S.prototype.imul = function(t, e) {
                        return this._verify2(t, e), this.imod(t.imul(e))
                    }, S.prototype.mul = function(t, e) {
                        return this._verify2(t, e), this.imod(t.mul(e))
                    }, S.prototype.isqr = function(t) {
                        return this.imul(t, t.clone())
                    }, S.prototype.sqr = function(t) {
                        return this.mul(t, t)
                    }, S.prototype.sqrt = function(t) {
                        if (t.isZero()) return t.clone();
                        var e = this.m.andln(3);
                        if (i(e % 2 == 1), 3 === e) {
                            var r = this.m.add(new o(1)).iushrn(2);
                            return this.pow(t, r)
                        }
                        for (var n = this.m.subn(1), s = 0; !n.isZero() && 0 === n.andln(1);) s++, n.iushrn(1);
                        i(!n.isZero());
                        var h = new o(1).toRed(this),
                            a = h.redNeg(),
                            u = this.m.subn(1).iushrn(1),
                            f = this.m.bitLength();
                        for (f = new o(2 * f * f).toRed(this); 0 !== this.pow(f, u).cmp(a);) f.redIAdd(a);
                        for (var l = this.pow(f, n), c = this.pow(t, n.addn(1).iushrn(1)), d = this.pow(t, n), m = s; 0 !== d.cmp(h);) {
                            for (var p = d, g = 0; 0 !== p.cmp(h); g++) p = p.redSqr();
                            i(g < m);
                            var y = this.pow(l, new o(1).iushln(m - g - 1));
                            c = c.redMul(y), l = y.redSqr(), d = d.redMul(l), m = g
                        }
                        return c
                    }, S.prototype.invm = function(t) {
                        var e = t._invmp(this.m);
                        return 0 !== e.negative ? (e.negative = 0, this.imod(e).redNeg()) : this.imod(e)
                    }, S.prototype.pow = function(t, e) {
                        if (e.isZero()) return new o(1).toRed(this);
                        if (0 === e.cmpn(1)) return t.clone();
                        var r = new Array(16);
                        r[0] = new o(1).toRed(this), r[1] = t;
                        for (var i = 2; i < r.length; i++) r[i] = this.mul(r[i - 1], t);
                        var n = r[0],
                            s = 0,
                            h = 0,
                            a = e.bitLength() % 26;
                        for (0 === a && (a = 26), i = e.length - 1; i >= 0; i--) {
                            for (var u = e.words[i], f = a - 1; f >= 0; f--) {
                                var l = u >> f & 1;
                                n !== r[0] && (n = this.sqr(n)), 0 !== l || 0 !== s ? (s <<= 1, s |= l, (4 === ++h || 0 === i && 0 === f) && (n = this.mul(n, r[s]), h = 0, s = 0)) : h = 0
                            }
                            a = 26
                        }
                        return n
                    }, S.prototype.convertTo = function(t) {
                        var e = t.umod(this.m);
                        return e === t ? e.clone() : e
                    }, S.prototype.convertFrom = function(t) {
                        var e = t.clone();
                        return e.red = null, e
                    }, o.mont = function(t) {
                        return new A(t)
                    }, n(A, S), A.prototype.convertTo = function(t) {
                        return this.imod(t.ushln(this.shift))
                    }, A.prototype.convertFrom = function(t) {
                        var e = this.imod(t.mul(this.rinv));
                        return e.red = null, e
                    }, A.prototype.imul = function(t, e) {
                        if (t.isZero() || e.isZero()) return t.words[0] = 0, t.length = 1, t;
                        var r = t.imul(e),
                            i = r.maskn(this.shift).mul(this.minv).imaskn(this.shift).mul(this.m),
                            n = r.isub(i).iushrn(this.shift),
                            o = n;
                        return n.cmp(this.m) >= 0 ? o = n.isub(this.m) : n.cmpn(0) < 0 && (o = n.iadd(this.m)), o._forceRed(this)
                    }, A.prototype.mul = function(t, e) {
                        if (t.isZero() || e.isZero()) return new o(0)._forceRed(this);
                        var r = t.mul(e),
                            i = r.maskn(this.shift).mul(this.minv).imaskn(this.shift).mul(this.m),
                            n = r.isub(i).iushrn(this.shift),
                            s = n;
                        return n.cmp(this.m) >= 0 ? s = n.isub(this.m) : n.cmpn(0) < 0 && (s = n.iadd(this.m)), s._forceRed(this)
                    }, A.prototype.invm = function(t) {
                        return this.imod(t._invmp(this.m).mul(this.r2))._forceRed(this)
                    }
                }(t, this)
            }).call(this, r(81)(t))
        },
        543: function(t, e, r) {
            "use strict";
            var i = this && this.__createBinding || (Object.create ? function(t, e, r, i) {
                    void 0 === i && (i = r), Object.defineProperty(t, i, {
                        enumerable: !0,
                        get: function() {
                            return e[r]
                        }
                    })
                } : function(t, e, r, i) {
                    void 0 === i && (i = r), t[i] = e[r]
                }),
                n = this && this.__setModuleDefault || (Object.create ? function(t, e) {
                    Object.defineProperty(t, "default", {
                        enumerable: !0,
                        value: e
                    })
                } : function(t, e) {
                    t.default = e
                }),
                o = this && this.__decorate || function(t, e, r, i) {
                    var n, o = arguments.length,
                        s = o < 3 ? e : null === i ? i = Object.getOwnPropertyDescriptor(e, r) : i;
                    if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(t, e, r, i);
                    else
                        for (var h = t.length - 1; h >= 0; h--)(n = t[h]) && (s = (o < 3 ? n(s) : o > 3 ? n(e, r, s) : n(e, r)) || s);
                    return o > 3 && s && Object.defineProperty(e, r, s), s
                },
                s = this && this.__importStar || function(t) {
                    if (t && t.__esModule) return t;
                    var e = {};
                    if (null != t)
                        for (var r in t) "default" !== r && Object.hasOwnProperty.call(t, r) && i(e, t, r);
                    return n(e, t), e
                },
                h = this && this.__importDefault || function(t) {
                    return t && t.__esModule ? t : {
                        default: t
                    }
                };
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.deserializeUnchecked = e.deserialize = e.serialize = e.BinaryReader = e.BinaryWriter = e.BorshError = e.baseDecode = e.baseEncode = void 0;
            const a = h(r(540)),
                u = h(r(84)),
                f = s(r(1076)),
                l = new("function" != typeof TextDecoder ? f.TextDecoder : TextDecoder)("utf-8", {
                    fatal: !0
                });
            e.baseEncode = function(t) {
                return "string" == typeof t && (t = Buffer.from(t, "utf8")), u.default.encode(Buffer.from(t))
            }, e.baseDecode = function(t) {
                return Buffer.from(u.default.decode(t))
            };
            class BorshError extends Error {
                constructor(t) {
                    super(t), this.fieldPath = [], this.originalMessage = t
                }
                addToFieldPath(t) {
                    this.fieldPath.splice(0, 0, t), this.message = this.originalMessage + ": " + this.fieldPath.join(".")
                }
            }
            e.BorshError = BorshError;
            class BinaryWriter {
                constructor() {
                    this.buf = Buffer.alloc(1024), this.length = 0
                }
                maybeResize() {
                    this.buf.length < 16 + this.length && (this.buf = Buffer.concat([this.buf, Buffer.alloc(1024)]))
                }
                writeU8(t) {
                    this.maybeResize(), this.buf.writeUInt8(t, this.length), this.length += 1
                }
                writeU16(t) {
                    this.maybeResize(), this.buf.writeUInt16LE(t, this.length), this.length += 2
                }
                writeU32(t) {
                    this.maybeResize(), this.buf.writeUInt32LE(t, this.length), this.length += 4
                }
                writeU64(t) {
                    this.maybeResize(), this.writeBuffer(Buffer.from(new a.default(t).toArray("le", 8)))
                }
                writeU128(t) {
                    this.maybeResize(), this.writeBuffer(Buffer.from(new a.default(t).toArray("le", 16)))
                }
                writeU256(t) {
                    this.maybeResize(), this.writeBuffer(Buffer.from(new a.default(t).toArray("le", 32)))
                }
                writeU512(t) {
                    this.maybeResize(), this.writeBuffer(Buffer.from(new a.default(t).toArray("le", 64)))
                }
                writeBuffer(t) {
                    this.buf = Buffer.concat([Buffer.from(this.buf.subarray(0, this.length)), t, Buffer.alloc(1024)]), this.length += t.length
                }
                writeString(t) {
                    this.maybeResize();
                    const e = Buffer.from(t, "utf8");
                    this.writeU32(e.length), this.writeBuffer(e)
                }
                writeFixedArray(t) {
                    this.writeBuffer(Buffer.from(t))
                }
                writeArray(t, e) {
                    this.maybeResize(), this.writeU32(t.length);
                    for (const r of t) this.maybeResize(), e(r)
                }
                toArray() {
                    return this.buf.subarray(0, this.length)
                }
            }

            function c(t, e, r) {
                const i = r.value;
                r.value = function(...t) {
                    try {
                        return i.apply(this, t)
                    } catch (t) {
                        if (t instanceof RangeError) {
                            const e = t.code;
                            if (["ERR_BUFFER_OUT_OF_BOUNDS", "ERR_OUT_OF_RANGE"].indexOf(e) >= 0) throw new BorshError("Reached the end of buffer when deserializing")
                        }
                        throw t
                    }
                }
            }
            e.BinaryWriter = BinaryWriter;
            class BinaryReader {
                constructor(t) {
                    this.buf = t, this.offset = 0
                }
                readU8() {
                    const t = this.buf.readUInt8(this.offset);
                    return this.offset += 1, t
                }
                readU16() {
                    const t = this.buf.readUInt16LE(this.offset);
                    return this.offset += 2, t
                }
                readU32() {
                    const t = this.buf.readUInt32LE(this.offset);
                    return this.offset += 4, t
                }
                readU64() {
                    const t = this.readBuffer(8);
                    return new a.default(t, "le")
                }
                readU128() {
                    const t = this.readBuffer(16);
                    return new a.default(t, "le")
                }
                readU256() {
                    const t = this.readBuffer(32);
                    return new a.default(t, "le")
                }
                readU512() {
                    const t = this.readBuffer(64);
                    return new a.default(t, "le")
                }
                readBuffer(t) {
                    if (this.offset + t > this.buf.length) throw new BorshError(`Expected buffer length ${t} isn't within bounds`);
                    const e = this.buf.slice(this.offset, this.offset + t);
                    return this.offset += t, e
                }
                readString() {
                    const t = this.readU32(),
                        e = this.readBuffer(t);
                    try {
                        return l.decode(e)
                    } catch (t) {
                        throw new BorshError("Error decoding UTF-8 string: " + t)
                    }
                }
                readFixedArray(t) {
                    return new Uint8Array(this.readBuffer(t))
                }
                readArray(t) {
                    const e = this.readU32(),
                        r = Array();
                    for (let i = 0; i < e; ++i) r.push(t());
                    return r
                }
            }

            function d(t) {
                return t.charAt(0).toUpperCase() + t.slice(1)
            }

            function m(t, e, r, i, n) {
                try {
                    if ("string" == typeof i) n["write" + d(i)](r);
                    else if (i instanceof Array)
                        if ("number" == typeof i[0]) {
                            if (r.length !== i[0]) throw new BorshError(`Expecting byte array of length ${i[0]}, but got ${r.length} bytes`);
                            n.writeFixedArray(r)
                        } else if (2 === i.length && "number" == typeof i[1]) {
                        if (r.length !== i[1]) throw new BorshError(`Expecting byte array of length ${i[1]}, but got ${r.length} bytes`);
                        for (let e = 0; e < i[1]; e++) m(t, null, r[e], i[0], n)
                    } else n.writeArray(r, r => {
                        m(t, e, r, i[0], n)
                    });
                    else if (void 0 !== i.kind) switch (i.kind) {
                        case "option":
                            null == r ? n.writeU8(0) : (n.writeU8(1), m(t, e, r, i.type, n));
                            break;
                        case "map":
                            n.writeU32(r.size), r.forEach((r, o) => {
                                m(t, e, o, i.key, n), m(t, e, r, i.value, n)
                            });
                            break;
                        default:
                            throw new BorshError(`FieldType ${i} unrecognized`)
                    } else p(t, r, n)
                } catch (t) {
                    throw t instanceof BorshError && t.addToFieldPath(e), t
                }
            }

            function p(t, e, r) {
                if ("function" == typeof e.borshSerialize) return void e.borshSerialize(r);
                const i = t.get(e.constructor);
                if (!i) throw new BorshError(`Class ${e.constructor.name} is missing in schema`);
                if ("struct" === i.kind) i.fields.map(([i, n]) => {
                    m(t, i, e[i], n, r)
                });
                else {
                    if ("enum" !== i.kind) throw new BorshError(`Unexpected schema kind: ${i.kind} for ${e.constructor.name}`);
                    {
                        const n = e[i.field];
                        for (let o = 0; o < i.values.length; ++o) {
                            const [s, h] = i.values[o];
                            if (s === n) {
                                r.writeU8(o), m(t, s, e[s], h, r);
                                break
                            }
                        }
                    }
                }
            }

            function g(t, e, r, i) {
                try {
                    if ("string" == typeof r) return i["read" + d(r)]();
                    if (r instanceof Array) {
                        if ("number" == typeof r[0]) return i.readFixedArray(r[0]);
                        if ("number" == typeof r[1]) {
                            const e = [];
                            for (let n = 0; n < r[1]; n++) e.push(g(t, null, r[0], i));
                            return e
                        }
                        return i.readArray(() => g(t, e, r[0], i))
                    }
                    if ("option" === r.kind) {
                        return i.readU8() ? g(t, e, r.type, i) : void 0
                    }
                    if ("map" === r.kind) {
                        let n = new Map;
                        const o = i.readU32();
                        for (let s = 0; s < o; s++) {
                            const o = g(t, e, r.key, i),
                                s = g(t, e, r.value, i);
                            n.set(o, s)
                        }
                        return n
                    }
                    return y(t, r, i)
                } catch (t) {
                    throw t instanceof BorshError && t.addToFieldPath(e), t
                }
            }

            function y(t, e, r) {
                if ("function" == typeof e.borshDeserialize) return e.borshDeserialize(r);
                const i = t.get(e);
                if (!i) throw new BorshError(`Class ${e.name} is missing in schema`);
                if ("struct" === i.kind) {
                    const i = {};
                    for (const [n, o] of t.get(e).fields) i[n] = g(t, n, o, r);
                    return new e(i)
                }
                if ("enum" === i.kind) {
                    const n = r.readU8();
                    if (n >= i.values.length) throw new BorshError(`Enum index: ${n} is out of range`);
                    const [o, s] = i.values[n];
                    return new e({
                        [o]: g(t, o, s, r)
                    })
                }
                throw new BorshError(`Unexpected schema kind: ${i.kind} for ${e.constructor.name}`)
            }
            o([c], BinaryReader.prototype, "readU8", null), o([c], BinaryReader.prototype, "readU16", null), o([c], BinaryReader.prototype, "readU32", null), o([c], BinaryReader.prototype, "readU64", null), o([c], BinaryReader.prototype, "readU128", null), o([c], BinaryReader.prototype, "readU256", null), o([c], BinaryReader.prototype, "readU512", null), o([c], BinaryReader.prototype, "readString", null), o([c], BinaryReader.prototype, "readFixedArray", null), o([c], BinaryReader.prototype, "readArray", null), e.BinaryReader = BinaryReader, e.serialize = function(t, e, r = BinaryWriter) {
                const i = new r;
                return p(t, e, i), i.toArray()
            }, e.deserialize = function(t, e, r, i = BinaryReader) {
                const n = new i(r),
                    o = y(t, e, n);
                if (n.offset < r.length) throw new BorshError(`Unexpected ${r.length-n.offset} bytes after deserialized data`);
                return o
            }, e.deserializeUnchecked = function(t, e, r, i = BinaryReader) {
                return y(t, e, new i(r))
            }
        }
    }
]);