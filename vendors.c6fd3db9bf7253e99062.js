(window.webpackJsonp = window.webpackJsonp || []).push([
    [174], {
        1178: function(n, t, r) {
            "use strict";
            r.d(t, "a", (function() {
                return o
            }));
            var e = r(923),
                i = r(78);

            function u(n) {
                return function t(r) {
                    function u(t, u) {
                        var o = n((t = Object(e.a)(t)).h, (u = Object(e.a)(u)).h),
                            c = Object(i.a)(t.s, u.s),
                            a = Object(i.a)(t.l, u.l),
                            f = Object(i.a)(t.opacity, u.opacity);
                        return function(n) {
                            return t.h = o(n), t.s = c(n), t.l = a(Math.pow(n, r)), t.opacity = f(n), t + ""
                        }
                    }
                    return r = +r, u.gamma = t, u
                }(1)
            }
            t.b = u(i.c);
            var o = u(i.a)
        },
        1184: function(n, t, r) {
            "use strict";
            r.d(t, "a", (function() {
                return h
            })), r.d(t, "b", (function() {
                return p
            }));
            var e, i, u, o, c = r(170),
                a = 180 / Math.PI,
                f = {
                    translateX: 0,
                    translateY: 0,
                    rotate: 0,
                    skewX: 0,
                    scaleX: 1,
                    scaleY: 1
                },
                l = function(n, t, r, e, i, u) {
                    var o, c, f;
                    return (o = Math.sqrt(n * n + t * t)) && (n /= o, t /= o), (f = n * r + t * e) && (r -= n * f, e -= t * f), (c = Math.sqrt(r * r + e * e)) && (r /= c, e /= c, f /= c), n * e < t * r && (n = -n, t = -t, f = -f, o = -o), {
                        translateX: i,
                        translateY: u,
                        rotate: Math.atan2(t, n) * a,
                        skewX: Math.atan(f) * a,
                        scaleX: o,
                        scaleY: c
                    }
                };

            function s(n, t, r, e) {
                function i(n) {
                    return n.length ? n.pop() + " " : ""
                }
                return function(u, o) {
                    var a = [],
                        f = [];
                    return u = n(u), o = n(o),
                        function(n, e, i, u, o, a) {
                            if (n !== i || e !== u) {
                                var f = o.push("translate(", null, t, null, r);
                                a.push({
                                    i: f - 4,
                                    x: Object(c.a)(n, i)
                                }, {
                                    i: f - 2,
                                    x: Object(c.a)(e, u)
                                })
                            } else(i || u) && o.push("translate(" + i + t + u + r)
                        }(u.translateX, u.translateY, o.translateX, o.translateY, a, f),
                        function(n, t, r, u) {
                            n !== t ? (n - t > 180 ? t += 360 : t - n > 180 && (n += 360), u.push({
                                i: r.push(i(r) + "rotate(", null, e) - 2,
                                x: Object(c.a)(n, t)
                            })) : t && r.push(i(r) + "rotate(" + t + e)
                        }(u.rotate, o.rotate, a, f),
                        function(n, t, r, u) {
                            n !== t ? u.push({
                                i: r.push(i(r) + "skewX(", null, e) - 2,
                                x: Object(c.a)(n, t)
                            }) : t && r.push(i(r) + "skewX(" + t + e)
                        }(u.skewX, o.skewX, a, f),
                        function(n, t, r, e, u, o) {
                            if (n !== r || t !== e) {
                                var a = u.push(i(u) + "scale(", null, ",", null, ")");
                                o.push({
                                    i: a - 4,
                                    x: Object(c.a)(n, r)
                                }, {
                                    i: a - 2,
                                    x: Object(c.a)(t, e)
                                })
                            } else 1 === r && 1 === e || u.push(i(u) + "scale(" + r + "," + e + ")")
                        }(u.scaleX, u.scaleY, o.scaleX, o.scaleY, a, f), u = o = null,
                        function(n) {
                            for (var t, r = -1, e = f.length; ++r < e;) a[(t = f[r]).i] = t.x(n);
                            return a.join("")
                        }
                }
            }
            var h = s((function(n) {
                    return "none" === n ? f : (e || (e = document.createElement("DIV"), i = document.documentElement, u = document.defaultView), e.style.transform = n, n = u.getComputedStyle(i.appendChild(e), null).getPropertyValue("transform"), i.removeChild(e), n = n.slice(7, -1).split(","), l(+n[0], +n[1], +n[2], +n[3], +n[4], +n[5]))
                }), "px, ", "px)", "deg)"),
                p = s((function(n) {
                    return null == n ? f : (o || (o = document.createElementNS("http://www.w3.org/2000/svg", "g")), o.setAttribute("transform", n), (n = o.transform.baseVal.consolidate()) ? (n = n.matrix, l(n.a, n.b, n.c, n.d, n.e, n.f)) : f)
                }), ", ", ")", ")")
        },
        170: function(n, t, r) {
            "use strict";
            t.a = function(n, t) {
                return n = +n, t = +t,
                    function(r) {
                        return n * (1 - r) + t * r
                    }
            }
        },
        2269: function(n, t, r) {
            "use strict";
            var e = r(249);
            t.a = function(n) {
                return Math.max(0, -Object(e.a)(Math.abs(n)))
            }
        },
        227: function(n, t, r) {
            "use strict";
            r.d(t, "a", (function() {
                return e.a
            })), r.d(t, "b", (function() {
                return i.a
            })), r.d(t, "c", (function() {
                return u.b
            })), r.d(t, "d", (function() {
                return o.a
            })), r.d(t, "g", (function() {
                return c.a
            })), r.d(t, "h", (function() {
                return a
            })), r.d(t, "m", (function() {
                return l
            })), r.d(t, "o", (function() {
                return s.a
            })), r.d(t, "p", (function() {
                return h.a
            })), r.d(t, "q", (function() {
                return p.a
            })), r.d(t, "u", (function() {
                return v.a
            })), r.d(t, "v", (function() {
                return d.a
            })), r.d(t, "w", (function() {
                return g.a
            })), r.d(t, "x", (function() {
                return g.b
            })), r.d(t, "y", (function() {
                return y.a
            })), r.d(t, "r", (function() {
                return x.a
            })), r.d(t, "s", (function() {
                return x.b
            })), r.d(t, "t", (function() {
                return x.c
            })), r.d(t, "k", (function() {
                return M
            })), r.d(t, "l", (function() {
                return E
            })), r.d(t, "n", (function() {
                return w
            })), r.d(t, "i", (function() {
                return O
            })), r.d(t, "j", (function() {
                return _
            })), r.d(t, "e", (function() {
                return N.b
            })), r.d(t, "f", (function() {
                return N.a
            })), r.d(t, "z", (function() {
                return A
            })), r.d(t, "A", (function() {
                return z
            }));
            var e = r(448),
                i = r(799),
                u = r(444),
                o = r(793),
                c = r(798),
                a = function(n) {
                    var t = n.length;
                    return function(r) {
                        return n[Math.max(0, Math.min(t - 1, Math.floor(r * t)))]
                    }
                },
                f = r(78),
                l = function(n, t) {
                    var r = Object(f.c)(+n, +t);
                    return function(n) {
                        var t = r(n);
                        return t - 360 * Math.floor(t / 360)
                    }
                },
                s = r(170),
                h = r(315),
                p = r(800),
                v = r(2272),
                d = r(794),
                g = r(1184),
                y = r(2273),
                x = r(363),
                m = r(89);

            function b(n) {
                return function(t, r) {
                    var e = n((t = Object(m.f)(t)).h, (r = Object(m.f)(r)).h),
                        i = Object(f.a)(t.s, r.s),
                        u = Object(f.a)(t.l, r.l),
                        o = Object(f.a)(t.opacity, r.opacity);
                    return function(n) {
                        return t.h = e(n), t.s = i(n), t.l = u(n), t.opacity = o(n), t + ""
                    }
                }
            }
            var M = b(f.c),
                E = b(f.a),
                S = r(531);

            function w(n, t) {
                var r = Object(f.a)((n = Object(S.a)(n)).l, (t = Object(S.a)(t)).l),
                    e = Object(f.a)(n.a, t.a),
                    i = Object(f.a)(n.b, t.b),
                    u = Object(f.a)(n.opacity, t.opacity);
                return function(t) {
                    return n.l = r(t), n.a = e(t), n.b = i(t), n.opacity = u(t), n + ""
                }
            }

            function j(n) {
                return function(t, r) {
                    var e = n((t = Object(S.c)(t)).h, (r = Object(S.c)(r)).h),
                        i = Object(f.a)(t.c, r.c),
                        u = Object(f.a)(t.l, r.l),
                        o = Object(f.a)(t.opacity, r.opacity);
                    return function(n) {
                        return t.h = e(n), t.c = i(n), t.l = u(n), t.opacity = o(n), t + ""
                    }
                }
            }
            var O = j(f.c),
                _ = j(f.a),
                N = r(1178);

            function A(n, t) {
                for (var r = 0, e = t.length - 1, i = t[0], u = new Array(e < 0 ? 0 : e); r < e;) u[r] = n(i, i = t[++r]);
                return function(n) {
                    var t = Math.max(0, Math.min(e - 1, Math.floor(n *= e)));
                    return u[t](n - t)
                }
            }
            var z = function(n, t) {
                for (var r = new Array(t), e = 0; e < t; ++e) r[e] = n(e / (t - 1));
                return r
            }
        },
        2270: function(n, t, r) {
            "use strict";
            var e = r(249);
            t.a = function(n, t) {
                return Math.max(0, 3 * Math.max(-8, Math.min(8, Math.floor(Object(e.a)(t) / 3))) - Object(e.a)(Math.abs(n)))
            }
        },
        2271: function(n, t, r) {
            "use strict";
            var e = r(249);
            t.a = function(n, t) {
                return n = Math.abs(n), t = Math.abs(t) - n, Math.max(0, Object(e.a)(t) - Object(e.a)(n)) + 1
            }
        },
        2272: function(n, t, r) {
            "use strict";
            t.a = function(n, t) {
                return n = +n, t = +t,
                    function(r) {
                        return Math.round(n * (1 - r) + t * r)
                    }
            }
        },
        2273: function(n, t, r) {
            "use strict";
            var e = Math.SQRT2;

            function i(n) {
                return ((n = Math.exp(n)) + 1 / n) / 2
            }
            t.a = function(n, t) {
                var r, u, o = n[0],
                    c = n[1],
                    a = n[2],
                    f = t[0],
                    l = t[1],
                    s = t[2],
                    h = f - o,
                    p = l - c,
                    v = h * h + p * p;
                if (v < 1e-12) u = Math.log(s / a) / e, r = function(n) {
                    return [o + n * h, c + n * p, a * Math.exp(e * n * u)]
                };
                else {
                    var d = Math.sqrt(v),
                        g = (s * s - a * a + 4 * v) / (2 * a * 2 * d),
                        y = (s * s - a * a - 4 * v) / (2 * s * 2 * d),
                        x = Math.log(Math.sqrt(g * g + 1) - g),
                        m = Math.log(Math.sqrt(y * y + 1) - y);
                    u = (m - x) / e, r = function(n) {
                        var t, r = n * u,
                            f = i(x),
                            l = a / (2 * d) * (f * (t = e * r + x, ((t = Math.exp(2 * t)) - 1) / (t + 1)) - function(n) {
                                return ((n = Math.exp(n)) - 1 / n) / 2
                            }(x));
                        return [o + l * h, c + l * p, a * f / i(e * r + x)]
                    }
                }
                return r.duration = 1e3 * u, r
            }
        },
        2310: function(n, t, r) {
            "use strict";
            r.d(t, "c", (function() {
                return W
            })), r.d(t, "h", (function() {
                return Tn
            })), r.d(t, "i", (function() {
                return Kn
            })), r.d(t, "j", (function() {
                return lt
            })), r.d(t, "k", (function() {
                return St
            })), r.d(t, "l", (function() {
                return wt
            })), r.d(t, "m", (function() {
                return At
            })), r.d(t, "n", (function() {
                return jt
            })), r.d(t, "u", (function() {
                return Ht
            })), r.d(t, "v", (function() {
                return Ct
            })), r.d(t, "C", (function() {
                return Qt
            })), r.d(t, "D", (function() {
                return Ut
            })), r.d(t, "F", (function() {
                return rr
            })), r.d(t, "G", (function() {
                return qt
            })), r.d(t, "N", (function() {
                return ne
            })), r.d(t, "a", (function() {
                return me
            })), r.d(t, "b", (function() {
                return be
            })), r.d(t, "d", (function() {
                return we
            })), r.d(t, "e", (function() {
                return Se
            })), r.d(t, "f", (function() {
                return Oe
            })), r.d(t, "g", (function() {
                return je
            })), r.d(t, "o", (function() {
                return Be
            })), r.d(t, "p", (function() {
                return ke
            })), r.d(t, "q", (function() {
                return xe
            })), r.d(t, "r", (function() {
                return ye
            })), r.d(t, "s", (function() {
                return Le
            })), r.d(t, "t", (function() {
                return qe
            })), r.d(t, "w", (function() {
                return Ve
            })), r.d(t, "x", (function() {
                return Fe
            })), r.d(t, "y", (function() {
                return Xe
            })), r.d(t, "z", (function() {
                return Pe
            })), r.d(t, "A", (function() {
                return De
            })), r.d(t, "B", (function() {
                return $e
            })), r.d(t, "E", (function() {
                return Ge
            })), r.d(t, "O", (function() {
                return ve
            })), r.d(t, "P", (function() {
                return de
            })), r.d(t, "H", (function() {
                return Ne
            })), r.d(t, "I", (function() {
                return _e
            })), r.d(t, "J", (function() {
                return We
            })), r.d(t, "K", (function() {
                return He
            })), r.d(t, "L", (function() {
                return Qe
            })), r.d(t, "M", (function() {
                return Je
            })), r.d(t, "R", (function() {
                return Ze
            })), r.d(t, "S", (function() {
                return Ue
            })), r.d(t, "V", (function() {
                return ni
            })), r.d(t, "W", (function() {
                return Ke
            })), r.d(t, "Q", (function() {
                return ct
            })), r.d(t, "T", (function() {
                return Y
            })), r.d(t, "U", (function() {
                return te
            }));
            var e = function() {
                return new i
            };

            function i() {
                this.reset()
            }
            i.prototype = {
                constructor: i,
                reset: function() {
                    this.s = this.t = 0
                },
                add: function(n) {
                    o(u, n, this.t), o(this, u.s, this.s), this.s ? this.t += u.t : this.s = u.t
                },
                valueOf: function() {
                    return this.s
                }
            };
            var u = new i;

            function o(n, t, r) {
                var e = n.s = t + r,
                    i = e - t,
                    u = e - i;
                n.t = t - u + (r - i)
            }
            var c = 1e-6,
                a = Math.PI,
                f = a / 2,
                l = a / 4,
                s = 2 * a,
                h = 180 / a,
                p = a / 180,
                v = Math.abs,
                d = Math.atan,
                g = Math.atan2,
                y = Math.cos,
                x = Math.ceil,
                m = Math.exp,
                b = (Math.floor, Math.log),
                M = Math.pow,
                E = Math.sin,
                S = Math.sign || function(n) {
                    return n > 0 ? 1 : n < 0 ? -1 : 0
                },
                w = Math.sqrt,
                j = Math.tan;

            function O(n) {
                return n > 1 ? 0 : n < -1 ? a : Math.acos(n)
            }

            function _(n) {
                return n > 1 ? f : n < -1 ? -f : Math.asin(n)
            }

            function N(n) {
                return (n = E(n / 2)) * n
            }

            function A() {}

            function z(n, t) {
                n && B.hasOwnProperty(n.type) && B[n.type](n, t)
            }
            var k = {
                    Feature: function(n, t) {
                        z(n.geometry, t)
                    },
                    FeatureCollection: function(n, t) {
                        for (var r = n.features, e = -1, i = r.length; ++e < i;) z(r[e].geometry, t)
                    }
                },
                B = {
                    Sphere: function(n, t) {
                        t.sphere()
                    },
                    Point: function(n, t) {
                        n = n.coordinates, t.point(n[0], n[1], n[2])
                    },
                    MultiPoint: function(n, t) {
                        for (var r = n.coordinates, e = -1, i = r.length; ++e < i;) n = r[e], t.point(n[0], n[1], n[2])
                    },
                    LineString: function(n, t) {
                        P(n.coordinates, t, 0)
                    },
                    MultiLineString: function(n, t) {
                        for (var r = n.coordinates, e = -1, i = r.length; ++e < i;) P(r[e], t, 0)
                    },
                    Polygon: function(n, t) {
                        X(n.coordinates, t)
                    },
                    MultiPolygon: function(n, t) {
                        for (var r = n.coordinates, e = -1, i = r.length; ++e < i;) X(r[e], t)
                    },
                    GeometryCollection: function(n, t) {
                        for (var r = n.geometries, e = -1, i = r.length; ++e < i;) z(r[e], t)
                    }
                };

            function P(n, t, r) {
                var e, i = -1,
                    u = n.length - r;
                for (t.lineStart(); ++i < u;) e = n[i], t.point(e[0], e[1], e[2]);
                t.lineEnd()
            }

            function X(n, t) {
                var r = -1,
                    e = n.length;
                for (t.polygonStart(); ++r < e;) P(n[r], t, 1);
                t.polygonEnd()
            }
            var q, L, I, C, R, Y = function(n, t) {
                    n && k.hasOwnProperty(n.type) ? k[n.type](n, t) : z(n, t)
                },
                T = e(),
                F = e(),
                V = {
                    point: A,
                    lineStart: A,
                    lineEnd: A,
                    polygonStart: function() {
                        T.reset(), V.lineStart = $, V.lineEnd = D
                    },
                    polygonEnd: function() {
                        var n = +T;
                        F.add(n < 0 ? s + n : n), this.lineStart = this.lineEnd = this.point = A
                    },
                    sphere: function() {
                        F.add(s)
                    }
                };

            function $() {
                V.point = G
            }

            function D() {
                H(q, L)
            }

            function G(n, t) {
                V.point = H, q = n, L = t, I = n *= p, C = y(t = (t *= p) / 2 + l), R = E(t)
            }

            function H(n, t) {
                var r = (n *= p) - I,
                    e = r >= 0 ? 1 : -1,
                    i = e * r,
                    u = y(t = (t *= p) / 2 + l),
                    o = E(t),
                    c = R * o,
                    a = C * u + c * y(i),
                    f = c * e * E(i);
                T.add(g(f, a)), I = n, C = u, R = o
            }
            var W = function(n) {
                return F.reset(), Y(n, V), 2 * F
            };

            function J(n) {
                return [g(n[1], n[0]), _(n[2])]
            }

            function Q(n) {
                var t = n[0],
                    r = n[1],
                    e = y(r);
                return [e * y(t), e * E(t), E(r)]
            }

            function U(n, t) {
                return n[0] * t[0] + n[1] * t[1] + n[2] * t[2]
            }

            function Z(n, t) {
                return [n[1] * t[2] - n[2] * t[1], n[2] * t[0] - n[0] * t[2], n[0] * t[1] - n[1] * t[0]]
            }

            function K(n, t) {
                n[0] += t[0], n[1] += t[1], n[2] += t[2]
            }

            function nn(n, t) {
                return [n[0] * t, n[1] * t, n[2] * t]
            }

            function tn(n) {
                var t = w(n[0] * n[0] + n[1] * n[1] + n[2] * n[2]);
                n[0] /= t, n[1] /= t, n[2] /= t
            }
            var rn, en, un, on, cn, an, fn, ln, sn, hn, pn = e(),
                vn = {
                    point: dn,
                    lineStart: yn,
                    lineEnd: xn,
                    polygonStart: function() {
                        vn.point = mn, vn.lineStart = bn, vn.lineEnd = Mn, pn.reset(), V.polygonStart()
                    },
                    polygonEnd: function() {
                        V.polygonEnd(), vn.point = dn, vn.lineStart = yn, vn.lineEnd = xn, T < 0 ? (rn = -(un = 180), en = -(on = 90)) : pn > c ? on = 90 : pn < -c && (en = -90), hn[0] = rn, hn[1] = un
                    },
                    sphere: function() {
                        rn = -(un = 180), en = -(on = 90)
                    }
                };

            function dn(n, t) {
                sn.push(hn = [rn = n, un = n]), t < en && (en = t), t > on && (on = t)
            }

            function gn(n, t) {
                var r = Q([n * p, t * p]);
                if (ln) {
                    var e = Z(ln, r),
                        i = Z([e[1], -e[0], 0], e);
                    tn(i), i = J(i);
                    var u, o = n - cn,
                        c = o > 0 ? 1 : -1,
                        a = i[0] * h * c,
                        f = v(o) > 180;
                    f ^ (c * cn < a && a < c * n) ? (u = i[1] * h) > on && (on = u) : f ^ (c * cn < (a = (a + 360) % 360 - 180) && a < c * n) ? (u = -i[1] * h) < en && (en = u) : (t < en && (en = t), t > on && (on = t)), f ? n < cn ? En(rn, n) > En(rn, un) && (un = n) : En(n, un) > En(rn, un) && (rn = n) : un >= rn ? (n < rn && (rn = n), n > un && (un = n)) : n > cn ? En(rn, n) > En(rn, un) && (un = n) : En(n, un) > En(rn, un) && (rn = n)
                } else sn.push(hn = [rn = n, un = n]);
                t < en && (en = t), t > on && (on = t), ln = r, cn = n
            }

            function yn() {
                vn.point = gn
            }

            function xn() {
                hn[0] = rn, hn[1] = un, vn.point = dn, ln = null
            }

            function mn(n, t) {
                if (ln) {
                    var r = n - cn;
                    pn.add(v(r) > 180 ? r + (r > 0 ? 360 : -360) : r)
                } else an = n, fn = t;
                V.point(n, t), gn(n, t)
            }

            function bn() {
                V.lineStart()
            }

            function Mn() {
                mn(an, fn), V.lineEnd(), v(pn) > c && (rn = -(un = 180)), hn[0] = rn, hn[1] = un, ln = null
            }

            function En(n, t) {
                return (t -= n) < 0 ? t + 360 : t
            }

            function Sn(n, t) {
                return n[0] - t[0]
            }

            function wn(n, t) {
                return n[0] <= n[1] ? n[0] <= t && t <= n[1] : t < n[0] || n[1] < t
            }
            var jn, On, _n, Nn, An, zn, kn, Bn, Pn, Xn, qn, Ln, In, Cn, Rn, Yn, Tn = function(n) {
                    var t, r, e, i, u, o, c;
                    if (on = un = -(rn = en = 1 / 0), sn = [], Y(n, vn), r = sn.length) {
                        for (sn.sort(Sn), t = 1, u = [e = sn[0]]; t < r; ++t) wn(e, (i = sn[t])[0]) || wn(e, i[1]) ? (En(e[0], i[1]) > En(e[0], e[1]) && (e[1] = i[1]), En(i[0], e[1]) > En(e[0], e[1]) && (e[0] = i[0])) : u.push(e = i);
                        for (o = -1 / 0, t = 0, e = u[r = u.length - 1]; t <= r; e = i, ++t) i = u[t], (c = En(e[1], i[0])) > o && (o = c, rn = i[0], un = e[1])
                    }
                    return sn = hn = null, rn === 1 / 0 || en === 1 / 0 ? [
                        [NaN, NaN],
                        [NaN, NaN]
                    ] : [
                        [rn, en],
                        [un, on]
                    ]
                },
                Fn = {
                    sphere: A,
                    point: Vn,
                    lineStart: Dn,
                    lineEnd: Wn,
                    polygonStart: function() {
                        Fn.lineStart = Jn, Fn.lineEnd = Qn
                    },
                    polygonEnd: function() {
                        Fn.lineStart = Dn, Fn.lineEnd = Wn
                    }
                };

            function Vn(n, t) {
                n *= p;
                var r = y(t *= p);
                $n(r * y(n), r * E(n), E(t))
            }

            function $n(n, t, r) {
                ++jn, _n += (n - _n) / jn, Nn += (t - Nn) / jn, An += (r - An) / jn
            }

            function Dn() {
                Fn.point = Gn
            }

            function Gn(n, t) {
                n *= p;
                var r = y(t *= p);
                Cn = r * y(n), Rn = r * E(n), Yn = E(t), Fn.point = Hn, $n(Cn, Rn, Yn)
            }

            function Hn(n, t) {
                n *= p;
                var r = y(t *= p),
                    e = r * y(n),
                    i = r * E(n),
                    u = E(t),
                    o = g(w((o = Rn * u - Yn * i) * o + (o = Yn * e - Cn * u) * o + (o = Cn * i - Rn * e) * o), Cn * e + Rn * i + Yn * u);
                On += o, zn += o * (Cn + (Cn = e)), kn += o * (Rn + (Rn = i)), Bn += o * (Yn + (Yn = u)), $n(Cn, Rn, Yn)
            }

            function Wn() {
                Fn.point = Vn
            }

            function Jn() {
                Fn.point = Un
            }

            function Qn() {
                Zn(Ln, In), Fn.point = Vn
            }

            function Un(n, t) {
                Ln = n, In = t, n *= p, t *= p, Fn.point = Zn;
                var r = y(t);
                Cn = r * y(n), Rn = r * E(n), Yn = E(t), $n(Cn, Rn, Yn)
            }

            function Zn(n, t) {
                n *= p;
                var r = y(t *= p),
                    e = r * y(n),
                    i = r * E(n),
                    u = E(t),
                    o = Rn * u - Yn * i,
                    c = Yn * e - Cn * u,
                    a = Cn * i - Rn * e,
                    f = w(o * o + c * c + a * a),
                    l = _(f),
                    s = f && -l / f;
                Pn += s * o, Xn += s * c, qn += s * a, On += l, zn += l * (Cn + (Cn = e)), kn += l * (Rn + (Rn = i)), Bn += l * (Yn + (Yn = u)), $n(Cn, Rn, Yn)
            }
            var Kn = function(n) {
                    jn = On = _n = Nn = An = zn = kn = Bn = Pn = Xn = qn = 0, Y(n, Fn);
                    var t = Pn,
                        r = Xn,
                        e = qn,
                        i = t * t + r * r + e * e;
                    return i < 1e-12 && (t = zn, r = kn, e = Bn, On < c && (t = _n, r = Nn, e = An), (i = t * t + r * r + e * e) < 1e-12) ? [NaN, NaN] : [g(r, t) * h, _(e / w(i)) * h]
                },
                nt = function(n) {
                    return function() {
                        return n
                    }
                },
                tt = function(n, t) {
                    function r(r, e) {
                        return r = n(r, e), t(r[0], r[1])
                    }
                    return n.invert && t.invert && (r.invert = function(r, e) {
                        return (r = t.invert(r, e)) && n.invert(r[0], r[1])
                    }), r
                };

            function rt(n, t) {
                return [v(n) > a ? n + Math.round(-n / s) * s : n, t]
            }

            function et(n, t, r) {
                return (n %= s) ? t || r ? tt(ut(n), ot(t, r)) : ut(n) : t || r ? ot(t, r) : rt
            }

            function it(n) {
                return function(t, r) {
                    return [(t += n) > a ? t - s : t < -a ? t + s : t, r]
                }
            }

            function ut(n) {
                var t = it(n);
                return t.invert = it(-n), t
            }

            function ot(n, t) {
                var r = y(n),
                    e = E(n),
                    i = y(t),
                    u = E(t);

                function o(n, t) {
                    var o = y(t),
                        c = y(n) * o,
                        a = E(n) * o,
                        f = E(t),
                        l = f * r + c * e;
                    return [g(a * i - l * u, c * r - f * e), _(l * i + a * u)]
                }
                return o.invert = function(n, t) {
                    var o = y(t),
                        c = y(n) * o,
                        a = E(n) * o,
                        f = E(t),
                        l = f * i - a * u;
                    return [g(a * i + f * u, c * r + l * e), _(l * r - c * e)]
                }, o
            }
            rt.invert = rt;
            var ct = function(n) {
                function t(t) {
                    return (t = n(t[0] * p, t[1] * p))[0] *= h, t[1] *= h, t
                }
                return n = et(n[0] * p, n[1] * p, n.length > 2 ? n[2] * p : 0), t.invert = function(t) {
                    return (t = n.invert(t[0] * p, t[1] * p))[0] *= h, t[1] *= h, t
                }, t
            };

            function at(n, t, r, e, i, u) {
                if (r) {
                    var o = y(t),
                        c = E(t),
                        a = e * r;
                    null == i ? (i = t + e * s, u = t - a / 2) : (i = ft(o, i), u = ft(o, u), (e > 0 ? i < u : i > u) && (i += e * s));
                    for (var f, l = i; e > 0 ? l > u : l < u; l -= a) f = J([o, -c * y(l), -c * E(l)]), n.point(f[0], f[1])
                }
            }

            function ft(n, t) {
                (t = Q(t))[0] -= n, tn(t);
                var r = O(-t[1]);
                return ((-t[2] < 0 ? -r : r) + s - c) % s
            }
            var lt = function() {
                    var n, t, r = nt([0, 0]),
                        e = nt(90),
                        i = nt(6),
                        u = {
                            point: function(r, e) {
                                n.push(r = t(r, e)), r[0] *= h, r[1] *= h
                            }
                        };

                    function o() {
                        var o = r.apply(this, arguments),
                            c = e.apply(this, arguments) * p,
                            a = i.apply(this, arguments) * p;
                        return n = [], t = et(-o[0] * p, -o[1] * p, 0).invert, at(u, c, a, 1), o = {
                            type: "Polygon",
                            coordinates: [n]
                        }, n = t = null, o
                    }
                    return o.center = function(n) {
                        return arguments.length ? (r = "function" == typeof n ? n : nt([+n[0], +n[1]]), o) : r
                    }, o.radius = function(n) {
                        return arguments.length ? (e = "function" == typeof n ? n : nt(+n), o) : e
                    }, o.precision = function(n) {
                        return arguments.length ? (i = "function" == typeof n ? n : nt(+n), o) : i
                    }, o
                },
                st = function() {
                    var n, t = [];
                    return {
                        point: function(t, r, e) {
                            n.push([t, r, e])
                        },
                        lineStart: function() {
                            t.push(n = [])
                        },
                        lineEnd: A,
                        rejoin: function() {
                            t.length > 1 && t.push(t.pop().concat(t.shift()))
                        },
                        result: function() {
                            var r = t;
                            return t = [], n = null, r
                        }
                    }
                },
                ht = function(n, t) {
                    return v(n[0] - t[0]) < c && v(n[1] - t[1]) < c
                };

            function pt(n, t, r, e) {
                this.x = n, this.z = t, this.o = r, this.e = e, this.v = !1, this.n = this.p = null
            }
            var vt = function(n, t, r, e, i) {
                var u, o, a = [],
                    f = [];
                if (n.forEach((function(n) {
                        if (!((t = n.length - 1) <= 0)) {
                            var t, r, e = n[0],
                                o = n[t];
                            if (ht(e, o)) {
                                if (!e[2] && !o[2]) {
                                    for (i.lineStart(), u = 0; u < t; ++u) i.point((e = n[u])[0], e[1]);
                                    return void i.lineEnd()
                                }
                                o[0] += 2 * c
                            }
                            a.push(r = new pt(e, n, null, !0)), f.push(r.o = new pt(e, null, r, !1)), a.push(r = new pt(o, n, null, !1)), f.push(r.o = new pt(o, null, r, !0))
                        }
                    })), a.length) {
                    for (f.sort(t), dt(a), dt(f), u = 0, o = f.length; u < o; ++u) f[u].e = r = !r;
                    for (var l, s, h = a[0];;) {
                        for (var p = h, v = !0; p.v;)
                            if ((p = p.n) === h) return;
                        l = p.z, i.lineStart();
                        do {
                            if (p.v = p.o.v = !0, p.e) {
                                if (v)
                                    for (u = 0, o = l.length; u < o; ++u) i.point((s = l[u])[0], s[1]);
                                else e(p.x, p.n.x, 1, i);
                                p = p.n
                            } else {
                                if (v)
                                    for (l = p.p.z, u = l.length - 1; u >= 0; --u) i.point((s = l[u])[0], s[1]);
                                else e(p.x, p.p.x, -1, i);
                                p = p.p
                            }
                            l = (p = p.o).z, v = !v
                        } while (!p.v);
                        i.lineEnd()
                    }
                }
            };

            function dt(n) {
                if (t = n.length) {
                    for (var t, r, e = 0, i = n[0]; ++e < t;) i.n = r = n[e], r.p = i, i = r;
                    i.n = r = n[0], r.p = i
                }
            }
            var gt = e();

            function yt(n) {
                return v(n[0]) <= a ? n[0] : S(n[0]) * ((v(n[0]) + a) % s - a)
            }
            var xt = function(n, t) {
                    var r = yt(t),
                        e = t[1],
                        i = E(e),
                        u = [E(r), -y(r), 0],
                        o = 0,
                        h = 0;
                    gt.reset(), 1 === i ? e = f + c : -1 === i && (e = -f - c);
                    for (var p = 0, v = n.length; p < v; ++p)
                        if (x = (d = n[p]).length)
                            for (var d, x, m = d[x - 1], b = yt(m), M = m[1] / 2 + l, S = E(M), w = y(M), j = 0; j < x; ++j, b = N, S = z, w = k, m = O) {
                                var O = d[j],
                                    N = yt(O),
                                    A = O[1] / 2 + l,
                                    z = E(A),
                                    k = y(A),
                                    B = N - b,
                                    P = B >= 0 ? 1 : -1,
                                    X = P * B,
                                    q = X > a,
                                    L = S * z;
                                if (gt.add(g(L * P * E(X), w * k + L * y(X))), o += q ? B + P * s : B, q ^ b >= r ^ N >= r) {
                                    var I = Z(Q(m), Q(O));
                                    tn(I);
                                    var C = Z(u, I);
                                    tn(C);
                                    var R = (q ^ B >= 0 ? -1 : 1) * _(C[2]);
                                    (e > R || e === R && (I[0] || I[1])) && (h += q ^ B >= 0 ? 1 : -1)
                                }
                            }
                    return (o < -c || o < c && gt < -c) ^ 1 & h
                },
                mt = r(39),
                bt = function(n, t, r, e) {
                    return function(i) {
                        var u, o, c, a = t(i),
                            f = st(),
                            l = t(f),
                            s = !1,
                            h = {
                                point: p,
                                lineStart: d,
                                lineEnd: g,
                                polygonStart: function() {
                                    h.point = y, h.lineStart = x, h.lineEnd = m, o = [], u = []
                                },
                                polygonEnd: function() {
                                    h.point = p, h.lineStart = d, h.lineEnd = g, o = Object(mt.n)(o);
                                    var n = xt(u, e);
                                    o.length ? (s || (i.polygonStart(), s = !0), vt(o, Et, n, r, i)) : n && (s || (i.polygonStart(), s = !0), i.lineStart(), r(null, null, 1, i), i.lineEnd()), s && (i.polygonEnd(), s = !1), o = u = null
                                },
                                sphere: function() {
                                    i.polygonStart(), i.lineStart(), r(null, null, 1, i), i.lineEnd(), i.polygonEnd()
                                }
                            };

                        function p(t, r) {
                            n(t, r) && i.point(t, r)
                        }

                        function v(n, t) {
                            a.point(n, t)
                        }

                        function d() {
                            h.point = v, a.lineStart()
                        }

                        function g() {
                            h.point = p, a.lineEnd()
                        }

                        function y(n, t) {
                            c.push([n, t]), l.point(n, t)
                        }

                        function x() {
                            l.lineStart(), c = []
                        }

                        function m() {
                            y(c[0][0], c[0][1]), l.lineEnd();
                            var n, t, r, e, a = l.clean(),
                                h = f.result(),
                                p = h.length;
                            if (c.pop(), u.push(c), c = null, p)
                                if (1 & a) {
                                    if ((t = (r = h[0]).length - 1) > 0) {
                                        for (s || (i.polygonStart(), s = !0), i.lineStart(), n = 0; n < t; ++n) i.point((e = r[n])[0], e[1]);
                                        i.lineEnd()
                                    }
                                } else p > 1 && 2 & a && h.push(h.pop().concat(h.shift())), o.push(h.filter(Mt))
                        }
                        return h
                    }
                };

            function Mt(n) {
                return n.length > 1
            }

            function Et(n, t) {
                return ((n = n.x)[0] < 0 ? n[1] - f - c : f - n[1]) - ((t = t.x)[0] < 0 ? t[1] - f - c : f - t[1])
            }
            var St = bt((function() {
                return !0
            }), (function(n) {
                var t, r = NaN,
                    e = NaN,
                    i = NaN;
                return {
                    lineStart: function() {
                        n.lineStart(), t = 1
                    },
                    point: function(u, o) {
                        var l = u > 0 ? a : -a,
                            s = v(u - r);
                        v(s - a) < c ? (n.point(r, e = (e + o) / 2 > 0 ? f : -f), n.point(i, e), n.lineEnd(), n.lineStart(), n.point(l, e), n.point(u, e), t = 0) : i !== l && s >= a && (v(r - i) < c && (r -= i * c), v(u - l) < c && (u -= l * c), e = function(n, t, r, e) {
                            var i, u, o = E(n - r);
                            return v(o) > c ? d((E(t) * (u = y(e)) * E(r) - E(e) * (i = y(t)) * E(n)) / (i * u * o)) : (t + e) / 2
                        }(r, e, u, o), n.point(i, e), n.lineEnd(), n.lineStart(), n.point(l, e), t = 0), n.point(r = u, e = o), i = l
                    },
                    lineEnd: function() {
                        n.lineEnd(), r = e = NaN
                    },
                    clean: function() {
                        return 2 - t
                    }
                }
            }), (function(n, t, r, e) {
                var i;
                if (null == n) i = r * f, e.point(-a, i), e.point(0, i), e.point(a, i), e.point(a, 0), e.point(a, -i), e.point(0, -i), e.point(-a, -i), e.point(-a, 0), e.point(-a, i);
                else if (v(n[0] - t[0]) > c) {
                    var u = n[0] < t[0] ? a : -a;
                    i = r * u / 2, e.point(-u, i), e.point(0, i), e.point(u, i)
                } else e.point(t[0], t[1])
            }), [-a, -f]);
            var wt = function(n) {
                var t = y(n),
                    r = 6 * p,
                    e = t > 0,
                    i = v(t) > c;

                function u(n, r) {
                    return y(n) * y(r) > t
                }

                function o(n, r, e) {
                    var i = [1, 0, 0],
                        u = Z(Q(n), Q(r)),
                        o = U(u, u),
                        f = u[0],
                        l = o - f * f;
                    if (!l) return !e && n;
                    var s = t * o / l,
                        h = -t * f / l,
                        p = Z(i, u),
                        d = nn(i, s);
                    K(d, nn(u, h));
                    var g = p,
                        y = U(d, g),
                        x = U(g, g),
                        m = y * y - x * (U(d, d) - 1);
                    if (!(m < 0)) {
                        var b = w(m),
                            M = nn(g, (-y - b) / x);
                        if (K(M, d), M = J(M), !e) return M;
                        var E, S = n[0],
                            j = r[0],
                            O = n[1],
                            _ = r[1];
                        j < S && (E = S, S = j, j = E);
                        var N = j - S,
                            A = v(N - a) < c;
                        if (!A && _ < O && (E = O, O = _, _ = E), A || N < c ? A ? O + _ > 0 ^ M[1] < (v(M[0] - S) < c ? O : _) : O <= M[1] && M[1] <= _ : N > a ^ (S <= M[0] && M[0] <= j)) {
                            var z = nn(g, (-y + b) / x);
                            return K(z, d), [M, J(z)]
                        }
                    }
                }

                function f(t, r) {
                    var i = e ? n : a - n,
                        u = 0;
                    return t < -i ? u |= 1 : t > i && (u |= 2), r < -i ? u |= 4 : r > i && (u |= 8), u
                }
                return bt(u, (function(n) {
                    var t, r, c, l, s;
                    return {
                        lineStart: function() {
                            l = c = !1, s = 1
                        },
                        point: function(h, p) {
                            var v, d = [h, p],
                                g = u(h, p),
                                y = e ? g ? 0 : f(h, p) : g ? f(h + (h < 0 ? a : -a), p) : 0;
                            if (!t && (l = c = g) && n.lineStart(), g !== c && (!(v = o(t, d)) || ht(t, v) || ht(d, v)) && (d[2] = 1), g !== c) s = 0, g ? (n.lineStart(), v = o(d, t), n.point(v[0], v[1])) : (v = o(t, d), n.point(v[0], v[1], 2), n.lineEnd()), t = v;
                            else if (i && t && e ^ g) {
                                var x;
                                y & r || !(x = o(d, t, !0)) || (s = 0, e ? (n.lineStart(), n.point(x[0][0], x[0][1]), n.point(x[1][0], x[1][1]), n.lineEnd()) : (n.point(x[1][0], x[1][1]), n.lineEnd(), n.lineStart(), n.point(x[0][0], x[0][1], 3)))
                            }!g || t && ht(t, d) || n.point(d[0], d[1]), t = d, c = g, r = y
                        },
                        lineEnd: function() {
                            c && n.lineEnd(), t = null
                        },
                        clean: function() {
                            return s | (l && c) << 1
                        }
                    }
                }), (function(t, e, i, u) {
                    at(u, n, r, i, t, e)
                }), e ? [0, -n] : [-a, n - a])
            };

            function jt(n, t, r, e) {
                function i(i, u) {
                    return n <= i && i <= r && t <= u && u <= e
                }

                function u(i, u, c, a) {
                    var l = 0,
                        s = 0;
                    if (null == i || (l = o(i, c)) !== (s = o(u, c)) || f(i, u) < 0 ^ c > 0)
                        do {
                            a.point(0 === l || 3 === l ? n : r, l > 1 ? e : t)
                        } while ((l = (l + c + 4) % 4) !== s);
                    else a.point(u[0], u[1])
                }

                function o(e, i) {
                    return v(e[0] - n) < c ? i > 0 ? 0 : 3 : v(e[0] - r) < c ? i > 0 ? 2 : 1 : v(e[1] - t) < c ? i > 0 ? 1 : 0 : i > 0 ? 3 : 2
                }

                function a(n, t) {
                    return f(n.x, t.x)
                }

                function f(n, t) {
                    var r = o(n, 1),
                        e = o(t, 1);
                    return r !== e ? r - e : 0 === r ? t[1] - n[1] : 1 === r ? n[0] - t[0] : 2 === r ? n[1] - t[1] : t[0] - n[0]
                }
                return function(o) {
                    var c, f, l, s, h, p, v, d, g, y, x, m = o,
                        b = st(),
                        M = {
                            point: E,
                            lineStart: function() {
                                M.point = S, f && f.push(l = []);
                                y = !0, g = !1, v = d = NaN
                            },
                            lineEnd: function() {
                                c && (S(s, h), p && g && b.rejoin(), c.push(b.result()));
                                M.point = E, g && m.lineEnd()
                            },
                            polygonStart: function() {
                                m = b, c = [], f = [], x = !0
                            },
                            polygonEnd: function() {
                                var t = function() {
                                        for (var t = 0, r = 0, i = f.length; r < i; ++r)
                                            for (var u, o, c = f[r], a = 1, l = c.length, s = c[0], h = s[0], p = s[1]; a < l; ++a) u = h, o = p, s = c[a], h = s[0], p = s[1], o <= e ? p > e && (h - u) * (e - o) > (p - o) * (n - u) && ++t : p <= e && (h - u) * (e - o) < (p - o) * (n - u) && --t;
                                        return t
                                    }(),
                                    r = x && t,
                                    i = (c = Object(mt.n)(c)).length;
                                (r || i) && (o.polygonStart(), r && (o.lineStart(), u(null, null, 1, o), o.lineEnd()), i && vt(c, a, t, u, o), o.polygonEnd());
                                m = o, c = f = l = null
                            }
                        };

                    function E(n, t) {
                        i(n, t) && m.point(n, t)
                    }

                    function S(u, o) {
                        var c = i(u, o);
                        if (f && l.push([u, o]), y) s = u, h = o, p = c, y = !1, c && (m.lineStart(), m.point(u, o));
                        else if (c && g) m.point(u, o);
                        else {
                            var a = [v = Math.max(-1e9, Math.min(1e9, v)), d = Math.max(-1e9, Math.min(1e9, d))],
                                b = [u = Math.max(-1e9, Math.min(1e9, u)), o = Math.max(-1e9, Math.min(1e9, o))];
                            ! function(n, t, r, e, i, u) {
                                var o, c = n[0],
                                    a = n[1],
                                    f = 0,
                                    l = 1,
                                    s = t[0] - c,
                                    h = t[1] - a;
                                if (o = r - c, s || !(o > 0)) {
                                    if (o /= s, s < 0) {
                                        if (o < f) return;
                                        o < l && (l = o)
                                    } else if (s > 0) {
                                        if (o > l) return;
                                        o > f && (f = o)
                                    }
                                    if (o = i - c, s || !(o < 0)) {
                                        if (o /= s, s < 0) {
                                            if (o > l) return;
                                            o > f && (f = o)
                                        } else if (s > 0) {
                                            if (o < f) return;
                                            o < l && (l = o)
                                        }
                                        if (o = e - a, h || !(o > 0)) {
                                            if (o /= h, h < 0) {
                                                if (o < f) return;
                                                o < l && (l = o)
                                            } else if (h > 0) {
                                                if (o > l) return;
                                                o > f && (f = o)
                                            }
                                            if (o = u - a, h || !(o < 0)) {
                                                if (o /= h, h < 0) {
                                                    if (o > l) return;
                                                    o > f && (f = o)
                                                } else if (h > 0) {
                                                    if (o < f) return;
                                                    o < l && (l = o)
                                                }
                                                return f > 0 && (n[0] = c + f * s, n[1] = a + f * h), l < 1 && (t[0] = c + l * s, t[1] = a + l * h), !0
                                            }
                                        }
                                    }
                                }
                            }(a, b, n, t, r, e) ? c && (m.lineStart(), m.point(u, o), x = !1): (g || (m.lineStart(), m.point(a[0], a[1])), m.point(b[0], b[1]), c || m.lineEnd(), x = !1)
                        }
                        v = u, d = o, g = c
                    }
                    return M
                }
            }
            var Ot, _t, Nt, At = function() {
                    var n, t, r, e = 0,
                        i = 0,
                        u = 960,
                        o = 500;
                    return r = {
                        stream: function(r) {
                            return n && t === r ? n : n = jt(e, i, u, o)(t = r)
                        },
                        extent: function(c) {
                            return arguments.length ? (e = +c[0][0], i = +c[0][1], u = +c[1][0], o = +c[1][1], n = t = null, r) : [
                                [e, i],
                                [u, o]
                            ]
                        }
                    }
                },
                zt = e(),
                kt = {
                    sphere: A,
                    point: A,
                    lineStart: function() {
                        kt.point = Pt, kt.lineEnd = Bt
                    },
                    lineEnd: A,
                    polygonStart: A,
                    polygonEnd: A
                };

            function Bt() {
                kt.point = kt.lineEnd = A
            }

            function Pt(n, t) {
                Ot = n *= p, _t = E(t *= p), Nt = y(t), kt.point = Xt
            }

            function Xt(n, t) {
                n *= p;
                var r = E(t *= p),
                    e = y(t),
                    i = v(n - Ot),
                    u = y(i),
                    o = e * E(i),
                    c = Nt * r - _t * e * u,
                    a = _t * r + Nt * e * u;
                zt.add(g(w(o * o + c * c), a)), Ot = n, _t = r, Nt = e
            }
            var qt = function(n) {
                    return zt.reset(), Y(n, kt), +zt
                },
                Lt = [null, null],
                It = {
                    type: "LineString",
                    coordinates: Lt
                },
                Ct = function(n, t) {
                    return Lt[0] = n, Lt[1] = t, qt(It)
                },
                Rt = {
                    Feature: function(n, t) {
                        return Tt(n.geometry, t)
                    },
                    FeatureCollection: function(n, t) {
                        for (var r = n.features, e = -1, i = r.length; ++e < i;)
                            if (Tt(r[e].geometry, t)) return !0;
                        return !1
                    }
                },
                Yt = {
                    Sphere: function() {
                        return !0
                    },
                    Point: function(n, t) {
                        return Ft(n.coordinates, t)
                    },
                    MultiPoint: function(n, t) {
                        for (var r = n.coordinates, e = -1, i = r.length; ++e < i;)
                            if (Ft(r[e], t)) return !0;
                        return !1
                    },
                    LineString: function(n, t) {
                        return Vt(n.coordinates, t)
                    },
                    MultiLineString: function(n, t) {
                        for (var r = n.coordinates, e = -1, i = r.length; ++e < i;)
                            if (Vt(r[e], t)) return !0;
                        return !1
                    },
                    Polygon: function(n, t) {
                        return $t(n.coordinates, t)
                    },
                    MultiPolygon: function(n, t) {
                        for (var r = n.coordinates, e = -1, i = r.length; ++e < i;)
                            if ($t(r[e], t)) return !0;
                        return !1
                    },
                    GeometryCollection: function(n, t) {
                        for (var r = n.geometries, e = -1, i = r.length; ++e < i;)
                            if (Tt(r[e], t)) return !0;
                        return !1
                    }
                };

            function Tt(n, t) {
                return !(!n || !Yt.hasOwnProperty(n.type)) && Yt[n.type](n, t)
            }

            function Ft(n, t) {
                return 0 === Ct(n, t)
            }

            function Vt(n, t) {
                for (var r, e, i, u = 0, o = n.length; u < o; u++) {
                    if (0 === (e = Ct(n[u], t))) return !0;
                    if (u > 0 && (i = Ct(n[u], n[u - 1])) > 0 && r <= i && e <= i && (r + e - i) * (1 - Math.pow((r - e) / i, 2)) < 1e-12 * i) return !0;
                    r = e
                }
                return !1
            }

            function $t(n, t) {
                return !!xt(n.map(Dt), Gt(t))
            }

            function Dt(n) {
                return (n = n.map(Gt)).pop(), n
            }

            function Gt(n) {
                return [n[0] * p, n[1] * p]
            }
            var Ht = function(n, t) {
                return (n && Rt.hasOwnProperty(n.type) ? Rt[n.type] : Tt)(n, t)
            };

            function Wt(n, t, r) {
                var e = Object(mt.s)(n, t - c, r).concat(t);
                return function(n) {
                    return e.map((function(t) {
                        return [n, t]
                    }))
                }
            }

            function Jt(n, t, r) {
                var e = Object(mt.s)(n, t - c, r).concat(t);
                return function(n) {
                    return e.map((function(t) {
                        return [t, n]
                    }))
                }
            }

            function Qt() {
                var n, t, r, e, i, u, o, a, f, l, s, h, p = 10,
                    d = p,
                    g = 90,
                    y = 360,
                    m = 2.5;

                function b() {
                    return {
                        type: "MultiLineString",
                        coordinates: M()
                    }
                }

                function M() {
                    return Object(mt.s)(x(e / g) * g, r, g).map(s).concat(Object(mt.s)(x(a / y) * y, o, y).map(h)).concat(Object(mt.s)(x(t / p) * p, n, p).filter((function(n) {
                        return v(n % g) > c
                    })).map(f)).concat(Object(mt.s)(x(u / d) * d, i, d).filter((function(n) {
                        return v(n % y) > c
                    })).map(l))
                }
                return b.lines = function() {
                    return M().map((function(n) {
                        return {
                            type: "LineString",
                            coordinates: n
                        }
                    }))
                }, b.outline = function() {
                    return {
                        type: "Polygon",
                        coordinates: [s(e).concat(h(o).slice(1), s(r).reverse().slice(1), h(a).reverse().slice(1))]
                    }
                }, b.extent = function(n) {
                    return arguments.length ? b.extentMajor(n).extentMinor(n) : b.extentMinor()
                }, b.extentMajor = function(n) {
                    return arguments.length ? (e = +n[0][0], r = +n[1][0], a = +n[0][1], o = +n[1][1], e > r && (n = e, e = r, r = n), a > o && (n = a, a = o, o = n), b.precision(m)) : [
                        [e, a],
                        [r, o]
                    ]
                }, b.extentMinor = function(r) {
                    return arguments.length ? (t = +r[0][0], n = +r[1][0], u = +r[0][1], i = +r[1][1], t > n && (r = t, t = n, n = r), u > i && (r = u, u = i, i = r), b.precision(m)) : [
                        [t, u],
                        [n, i]
                    ]
                }, b.step = function(n) {
                    return arguments.length ? b.stepMajor(n).stepMinor(n) : b.stepMinor()
                }, b.stepMajor = function(n) {
                    return arguments.length ? (g = +n[0], y = +n[1], b) : [g, y]
                }, b.stepMinor = function(n) {
                    return arguments.length ? (p = +n[0], d = +n[1], b) : [p, d]
                }, b.precision = function(c) {
                    return arguments.length ? (m = +c, f = Wt(u, i, 90), l = Jt(t, n, m), s = Wt(a, o, 90), h = Jt(e, r, m), b) : m
                }, b.extentMajor([
                    [-180, -90 + c],
                    [180, 90 - c]
                ]).extentMinor([
                    [-180, -80 - c],
                    [180, 80 + c]
                ])
            }

            function Ut() {
                return Qt()()
            }
            var Zt, Kt, nr, tr, rr = function(n, t) {
                    var r = n[0] * p,
                        e = n[1] * p,
                        i = t[0] * p,
                        u = t[1] * p,
                        o = y(e),
                        c = E(e),
                        a = y(u),
                        f = E(u),
                        l = o * y(r),
                        s = o * E(r),
                        v = a * y(i),
                        d = a * E(i),
                        x = 2 * _(w(N(u - e) + o * a * N(i - r))),
                        m = E(x),
                        b = x ? function(n) {
                            var t = E(n *= x) / m,
                                r = E(x - n) / m,
                                e = r * l + t * v,
                                i = r * s + t * d,
                                u = r * c + t * f;
                            return [g(i, e) * h, g(u, w(e * e + i * i)) * h]
                        } : function() {
                            return [r * h, e * h]
                        };
                    return b.distance = x, b
                },
                er = function(n) {
                    return n
                },
                ir = e(),
                ur = e(),
                or = {
                    point: A,
                    lineStart: A,
                    lineEnd: A,
                    polygonStart: function() {
                        or.lineStart = cr, or.lineEnd = lr
                    },
                    polygonEnd: function() {
                        or.lineStart = or.lineEnd = or.point = A, ir.add(v(ur)), ur.reset()
                    },
                    result: function() {
                        var n = ir / 2;
                        return ir.reset(), n
                    }
                };

            function cr() {
                or.point = ar
            }

            function ar(n, t) {
                or.point = fr, Zt = nr = n, Kt = tr = t
            }

            function fr(n, t) {
                ur.add(tr * n - nr * t), nr = n, tr = t
            }

            function lr() {
                fr(Zt, Kt)
            }
            var sr = or,
                hr = 1 / 0,
                pr = hr,
                vr = -hr,
                dr = vr;
            var gr, yr, xr, mr, br = {
                    point: function(n, t) {
                        n < hr && (hr = n);
                        n > vr && (vr = n);
                        t < pr && (pr = t);
                        t > dr && (dr = t)
                    },
                    lineStart: A,
                    lineEnd: A,
                    polygonStart: A,
                    polygonEnd: A,
                    result: function() {
                        var n = [
                            [hr, pr],
                            [vr, dr]
                        ];
                        return vr = dr = -(pr = hr = 1 / 0), n
                    }
                },
                Mr = 0,
                Er = 0,
                Sr = 0,
                wr = 0,
                jr = 0,
                Or = 0,
                _r = 0,
                Nr = 0,
                Ar = 0,
                zr = {
                    point: kr,
                    lineStart: Br,
                    lineEnd: qr,
                    polygonStart: function() {
                        zr.lineStart = Lr, zr.lineEnd = Ir
                    },
                    polygonEnd: function() {
                        zr.point = kr, zr.lineStart = Br, zr.lineEnd = qr
                    },
                    result: function() {
                        var n = Ar ? [_r / Ar, Nr / Ar] : Or ? [wr / Or, jr / Or] : Sr ? [Mr / Sr, Er / Sr] : [NaN, NaN];
                        return Mr = Er = Sr = wr = jr = Or = _r = Nr = Ar = 0, n
                    }
                };

            function kr(n, t) {
                Mr += n, Er += t, ++Sr
            }

            function Br() {
                zr.point = Pr
            }

            function Pr(n, t) {
                zr.point = Xr, kr(xr = n, mr = t)
            }

            function Xr(n, t) {
                var r = n - xr,
                    e = t - mr,
                    i = w(r * r + e * e);
                wr += i * (xr + n) / 2, jr += i * (mr + t) / 2, Or += i, kr(xr = n, mr = t)
            }

            function qr() {
                zr.point = kr
            }

            function Lr() {
                zr.point = Cr
            }

            function Ir() {
                Rr(gr, yr)
            }

            function Cr(n, t) {
                zr.point = Rr, kr(gr = xr = n, yr = mr = t)
            }

            function Rr(n, t) {
                var r = n - xr,
                    e = t - mr,
                    i = w(r * r + e * e);
                wr += i * (xr + n) / 2, jr += i * (mr + t) / 2, Or += i, _r += (i = mr * n - xr * t) * (xr + n), Nr += i * (mr + t), Ar += 3 * i, kr(xr = n, mr = t)
            }
            var Yr = zr;

            function Tr(n) {
                this._context = n
            }
            Tr.prototype = {
                _radius: 4.5,
                pointRadius: function(n) {
                    return this._radius = n, this
                },
                polygonStart: function() {
                    this._line = 0
                },
                polygonEnd: function() {
                    this._line = NaN
                },
                lineStart: function() {
                    this._point = 0
                },
                lineEnd: function() {
                    0 === this._line && this._context.closePath(), this._point = NaN
                },
                point: function(n, t) {
                    switch (this._point) {
                        case 0:
                            this._context.moveTo(n, t), this._point = 1;
                            break;
                        case 1:
                            this._context.lineTo(n, t);
                            break;
                        default:
                            this._context.moveTo(n + this._radius, t), this._context.arc(n, t, this._radius, 0, s)
                    }
                },
                result: A
            };
            var Fr, Vr, $r, Dr, Gr, Hr = e(),
                Wr = {
                    point: A,
                    lineStart: function() {
                        Wr.point = Jr
                    },
                    lineEnd: function() {
                        Fr && Qr(Vr, $r), Wr.point = A
                    },
                    polygonStart: function() {
                        Fr = !0
                    },
                    polygonEnd: function() {
                        Fr = null
                    },
                    result: function() {
                        var n = +Hr;
                        return Hr.reset(), n
                    }
                };

            function Jr(n, t) {
                Wr.point = Qr, Vr = Dr = n, $r = Gr = t
            }

            function Qr(n, t) {
                Dr -= n, Gr -= t, Hr.add(w(Dr * Dr + Gr * Gr)), Dr = n, Gr = t
            }
            var Ur = Wr;

            function Zr() {
                this._string = []
            }

            function Kr(n) {
                return "m0," + n + "a" + n + "," + n + " 0 1,1 0," + -2 * n + "a" + n + "," + n + " 0 1,1 0," + 2 * n + "z"
            }
            Zr.prototype = {
                _radius: 4.5,
                _circle: Kr(4.5),
                pointRadius: function(n) {
                    return (n = +n) !== this._radius && (this._radius = n, this._circle = null), this
                },
                polygonStart: function() {
                    this._line = 0
                },
                polygonEnd: function() {
                    this._line = NaN
                },
                lineStart: function() {
                    this._point = 0
                },
                lineEnd: function() {
                    0 === this._line && this._string.push("Z"), this._point = NaN
                },
                point: function(n, t) {
                    switch (this._point) {
                        case 0:
                            this._string.push("M", n, ",", t), this._point = 1;
                            break;
                        case 1:
                            this._string.push("L", n, ",", t);
                            break;
                        default:
                            null == this._circle && (this._circle = Kr(this._radius)), this._string.push("M", n, ",", t, this._circle)
                    }
                },
                result: function() {
                    if (this._string.length) {
                        var n = this._string.join("");
                        return this._string = [], n
                    }
                    return null
                }
            };
            var ne = function(n, t) {
                    var r, e, i = 4.5;

                    function u(n) {
                        return n && ("function" == typeof i && e.pointRadius(+i.apply(this, arguments)), Y(n, r(e))), e.result()
                    }
                    return u.area = function(n) {
                        return Y(n, r(sr)), sr.result()
                    }, u.measure = function(n) {
                        return Y(n, r(Ur)), Ur.result()
                    }, u.bounds = function(n) {
                        return Y(n, r(br)), br.result()
                    }, u.centroid = function(n) {
                        return Y(n, r(Yr)), Yr.result()
                    }, u.projection = function(t) {
                        return arguments.length ? (r = null == t ? (n = null, er) : (n = t).stream, u) : n
                    }, u.context = function(n) {
                        return arguments.length ? (e = null == n ? (t = null, new Zr) : new Tr(t = n), "function" != typeof i && e.pointRadius(i), u) : t
                    }, u.pointRadius = function(n) {
                        return arguments.length ? (i = "function" == typeof n ? n : (e.pointRadius(+n), +n), u) : i
                    }, u.projection(n).context(t)
                },
                te = function(n) {
                    return {
                        stream: re(n)
                    }
                };

            function re(n) {
                return function(t) {
                    var r = new ee;
                    for (var e in n) r[e] = n[e];
                    return r.stream = t, r
                }
            }

            function ee() {}

            function ie(n, t, r) {
                var e = n.clipExtent && n.clipExtent();
                return n.scale(150).translate([0, 0]), null != e && n.clipExtent(null), Y(r, n.stream(br)), t(br.result()), null != e && n.clipExtent(e), n
            }

            function ue(n, t, r) {
                return ie(n, (function(r) {
                    var e = t[1][0] - t[0][0],
                        i = t[1][1] - t[0][1],
                        u = Math.min(e / (r[1][0] - r[0][0]), i / (r[1][1] - r[0][1])),
                        o = +t[0][0] + (e - u * (r[1][0] + r[0][0])) / 2,
                        c = +t[0][1] + (i - u * (r[1][1] + r[0][1])) / 2;
                    n.scale(150 * u).translate([o, c])
                }), r)
            }

            function oe(n, t, r) {
                return ue(n, [
                    [0, 0], t
                ], r)
            }

            function ce(n, t, r) {
                return ie(n, (function(r) {
                    var e = +t,
                        i = e / (r[1][0] - r[0][0]),
                        u = (e - i * (r[1][0] + r[0][0])) / 2,
                        o = -i * r[0][1];
                    n.scale(150 * i).translate([u, o])
                }), r)
            }

            function ae(n, t, r) {
                return ie(n, (function(r) {
                    var e = +t,
                        i = e / (r[1][1] - r[0][1]),
                        u = -i * r[0][0],
                        o = (e - i * (r[1][1] + r[0][1])) / 2;
                    n.scale(150 * i).translate([u, o])
                }), r)
            }
            ee.prototype = {
                constructor: ee,
                point: function(n, t) {
                    this.stream.point(n, t)
                },
                sphere: function() {
                    this.stream.sphere()
                },
                lineStart: function() {
                    this.stream.lineStart()
                },
                lineEnd: function() {
                    this.stream.lineEnd()
                },
                polygonStart: function() {
                    this.stream.polygonStart()
                },
                polygonEnd: function() {
                    this.stream.polygonEnd()
                }
            };
            var fe = y(30 * p),
                le = function(n, t) {
                    return +t ? function(n, t) {
                        function r(e, i, u, o, a, f, l, s, h, p, d, y, x, m) {
                            var b = l - e,
                                M = s - i,
                                E = b * b + M * M;
                            if (E > 4 * t && x--) {
                                var S = o + p,
                                    j = a + d,
                                    O = f + y,
                                    N = w(S * S + j * j + O * O),
                                    A = _(O /= N),
                                    z = v(v(O) - 1) < c || v(u - h) < c ? (u + h) / 2 : g(j, S),
                                    k = n(z, A),
                                    B = k[0],
                                    P = k[1],
                                    X = B - e,
                                    q = P - i,
                                    L = M * X - b * q;
                                (L * L / E > t || v((b * X + M * q) / E - .5) > .3 || o * p + a * d + f * y < fe) && (r(e, i, u, o, a, f, B, P, z, S /= N, j /= N, O, x, m), m.point(B, P), r(B, P, z, S, j, O, l, s, h, p, d, y, x, m))
                            }
                        }
                        return function(t) {
                            var e, i, u, o, c, a, f, l, s, h, p, v, d = {
                                point: g,
                                lineStart: y,
                                lineEnd: m,
                                polygonStart: function() {
                                    t.polygonStart(), d.lineStart = b
                                },
                                polygonEnd: function() {
                                    t.polygonEnd(), d.lineStart = y
                                }
                            };

                            function g(r, e) {
                                r = n(r, e), t.point(r[0], r[1])
                            }

                            function y() {
                                l = NaN, d.point = x, t.lineStart()
                            }

                            function x(e, i) {
                                var u = Q([e, i]),
                                    o = n(e, i);
                                r(l, s, f, h, p, v, l = o[0], s = o[1], f = e, h = u[0], p = u[1], v = u[2], 16, t), t.point(l, s)
                            }

                            function m() {
                                d.point = g, t.lineEnd()
                            }

                            function b() {
                                y(), d.point = M, d.lineEnd = E
                            }

                            function M(n, t) {
                                x(e = n, t), i = l, u = s, o = h, c = p, a = v, d.point = x
                            }

                            function E() {
                                r(l, s, f, h, p, v, i, u, e, o, c, a, 16, t), d.lineEnd = m, m()
                            }
                            return d
                        }
                    }(n, t) : function(n) {
                        return re({
                            point: function(t, r) {
                                t = n(t, r), this.stream.point(t[0], t[1])
                            }
                        })
                    }(n)
                };
            var se = re({
                point: function(n, t) {
                    this.stream.point(n * p, t * p)
                }
            });

            function he(n, t, r, e, i) {
                function u(u, o) {
                    return [t + n * (u *= e), r - n * (o *= i)]
                }
                return u.invert = function(u, o) {
                    return [(u - t) / n * e, (r - o) / n * i]
                }, u
            }

            function pe(n, t, r, e, i, u) {
                var o = y(u),
                    c = E(u),
                    a = o * n,
                    f = c * n,
                    l = o / n,
                    s = c / n,
                    h = (c * r - o * t) / n,
                    p = (c * t + o * r) / n;

                function v(n, u) {
                    return [a * (n *= e) - f * (u *= i) + t, r - f * n - a * u]
                }
                return v.invert = function(n, t) {
                    return [e * (l * n - s * t + h), i * (p - s * n - l * t)]
                }, v
            }

            function ve(n) {
                return de((function() {
                    return n
                }))()
            }

            function de(n) {
                var t, r, e, i, u, o, c, a, f, l, s = 150,
                    v = 480,
                    d = 250,
                    g = 0,
                    y = 0,
                    x = 0,
                    m = 0,
                    b = 0,
                    M = 0,
                    E = 1,
                    S = 1,
                    j = null,
                    O = St,
                    _ = null,
                    N = er,
                    A = .5;

                function z(n) {
                    return a(n[0] * p, n[1] * p)
                }

                function k(n) {
                    return (n = a.invert(n[0], n[1])) && [n[0] * h, n[1] * h]
                }

                function B() {
                    var n = pe(s, 0, 0, E, S, M).apply(null, t(g, y)),
                        e = (M ? pe : he)(s, v - n[0], d - n[1], E, S, M);
                    return r = et(x, m, b), c = tt(t, e), a = tt(r, c), o = le(c, A), P()
                }

                function P() {
                    return f = l = null, z
                }
                return z.stream = function(n) {
                        return f && l === n ? f : f = se(function(n) {
                            return re({
                                point: function(t, r) {
                                    var e = n(t, r);
                                    return this.stream.point(e[0], e[1])
                                }
                            })
                        }(r)(O(o(N(l = n)))))
                    }, z.preclip = function(n) {
                        return arguments.length ? (O = n, j = void 0, P()) : O
                    }, z.postclip = function(n) {
                        return arguments.length ? (N = n, _ = e = i = u = null, P()) : N
                    }, z.clipAngle = function(n) {
                        return arguments.length ? (O = +n ? wt(j = n * p) : (j = null, St), P()) : j * h
                    }, z.clipExtent = function(n) {
                        return arguments.length ? (N = null == n ? (_ = e = i = u = null, er) : jt(_ = +n[0][0], e = +n[0][1], i = +n[1][0], u = +n[1][1]), P()) : null == _ ? null : [
                            [_, e],
                            [i, u]
                        ]
                    }, z.scale = function(n) {
                        return arguments.length ? (s = +n, B()) : s
                    }, z.translate = function(n) {
                        return arguments.length ? (v = +n[0], d = +n[1], B()) : [v, d]
                    }, z.center = function(n) {
                        return arguments.length ? (g = n[0] % 360 * p, y = n[1] % 360 * p, B()) : [g * h, y * h]
                    }, z.rotate = function(n) {
                        return arguments.length ? (x = n[0] % 360 * p, m = n[1] % 360 * p, b = n.length > 2 ? n[2] % 360 * p : 0, B()) : [x * h, m * h, b * h]
                    }, z.angle = function(n) {
                        return arguments.length ? (M = n % 360 * p, B()) : M * h
                    }, z.reflectX = function(n) {
                        return arguments.length ? (E = n ? -1 : 1, B()) : E < 0
                    }, z.reflectY = function(n) {
                        return arguments.length ? (S = n ? -1 : 1, B()) : S < 0
                    }, z.precision = function(n) {
                        return arguments.length ? (o = le(c, A = n * n), P()) : w(A)
                    }, z.fitExtent = function(n, t) {
                        return ue(z, n, t)
                    }, z.fitSize = function(n, t) {
                        return oe(z, n, t)
                    }, z.fitWidth = function(n, t) {
                        return ce(z, n, t)
                    }, z.fitHeight = function(n, t) {
                        return ae(z, n, t)
                    },
                    function() {
                        return t = n.apply(this, arguments), z.invert = t.invert && k, B()
                    }
            }

            function ge(n) {
                var t = 0,
                    r = a / 3,
                    e = de(n),
                    i = e(t, r);
                return i.parallels = function(n) {
                    return arguments.length ? e(t = n[0] * p, r = n[1] * p) : [t * h, r * h]
                }, i
            }

            function ye(n, t) {
                var r = E(n),
                    e = (r + E(t)) / 2;
                if (v(e) < c) return function(n) {
                    var t = y(n);

                    function r(n, r) {
                        return [n * t, E(r) / t]
                    }
                    return r.invert = function(n, r) {
                        return [n / t, _(r * t)]
                    }, r
                }(n);
                var i = 1 + r * (2 * e - r),
                    u = w(i) / e;

                function o(n, t) {
                    var r = w(i - 2 * e * E(t)) / e;
                    return [r * E(n *= e), u - r * y(n)]
                }
                return o.invert = function(n, t) {
                    var r = u - t,
                        o = g(n, v(r)) * S(r);
                    return r * e < 0 && (o -= a * S(n) * S(r)), [o / e, _((i - (n * n + r * r) * e * e) / (2 * e))]
                }, o
            }
            var xe = function() {
                    return ge(ye).scale(155.424).center([0, 33.6442])
                },
                me = function() {
                    return xe().parallels([29.5, 45.5]).scale(1070).translate([480, 250]).rotate([96, 0]).center([-.6, 38.7])
                };
            var be = function() {
                var n, t, r, e, i, u, o = me(),
                    a = xe().rotate([154, 0]).center([-2, 58.5]).parallels([55, 65]),
                    f = xe().rotate([157, 0]).center([-3, 19.9]).parallels([8, 18]),
                    l = {
                        point: function(n, t) {
                            u = [n, t]
                        }
                    };

                function s(n) {
                    var t = n[0],
                        o = n[1];
                    return u = null, r.point(t, o), u || (e.point(t, o), u) || (i.point(t, o), u)
                }

                function h() {
                    return n = t = null, s
                }
                return s.invert = function(n) {
                    var t = o.scale(),
                        r = o.translate(),
                        e = (n[0] - r[0]) / t,
                        i = (n[1] - r[1]) / t;
                    return (i >= .12 && i < .234 && e >= -.425 && e < -.214 ? a : i >= .166 && i < .234 && e >= -.214 && e < -.115 ? f : o).invert(n)
                }, s.stream = function(r) {
                    return n && t === r ? n : (e = [o.stream(t = r), a.stream(r), f.stream(r)], i = e.length, n = {
                        point: function(n, t) {
                            for (var r = -1; ++r < i;) e[r].point(n, t)
                        },
                        sphere: function() {
                            for (var n = -1; ++n < i;) e[n].sphere()
                        },
                        lineStart: function() {
                            for (var n = -1; ++n < i;) e[n].lineStart()
                        },
                        lineEnd: function() {
                            for (var n = -1; ++n < i;) e[n].lineEnd()
                        },
                        polygonStart: function() {
                            for (var n = -1; ++n < i;) e[n].polygonStart()
                        },
                        polygonEnd: function() {
                            for (var n = -1; ++n < i;) e[n].polygonEnd()
                        }
                    });
                    var e, i
                }, s.precision = function(n) {
                    return arguments.length ? (o.precision(n), a.precision(n), f.precision(n), h()) : o.precision()
                }, s.scale = function(n) {
                    return arguments.length ? (o.scale(n), a.scale(.35 * n), f.scale(n), s.translate(o.translate())) : o.scale()
                }, s.translate = function(n) {
                    if (!arguments.length) return o.translate();
                    var t = o.scale(),
                        u = +n[0],
                        s = +n[1];
                    return r = o.translate(n).clipExtent([
                        [u - .455 * t, s - .238 * t],
                        [u + .455 * t, s + .238 * t]
                    ]).stream(l), e = a.translate([u - .307 * t, s + .201 * t]).clipExtent([
                        [u - .425 * t + c, s + .12 * t + c],
                        [u - .214 * t - c, s + .234 * t - c]
                    ]).stream(l), i = f.translate([u - .205 * t, s + .212 * t]).clipExtent([
                        [u - .214 * t + c, s + .166 * t + c],
                        [u - .115 * t - c, s + .234 * t - c]
                    ]).stream(l), h()
                }, s.fitExtent = function(n, t) {
                    return ue(s, n, t)
                }, s.fitSize = function(n, t) {
                    return oe(s, n, t)
                }, s.fitWidth = function(n, t) {
                    return ce(s, n, t)
                }, s.fitHeight = function(n, t) {
                    return ae(s, n, t)
                }, s.scale(1070)
            };

            function Me(n) {
                return function(t, r) {
                    var e = y(t),
                        i = y(r),
                        u = n(e * i);
                    return [u * i * E(t), u * E(r)]
                }
            }

            function Ee(n) {
                return function(t, r) {
                    var e = w(t * t + r * r),
                        i = n(e),
                        u = E(i),
                        o = y(i);
                    return [g(t * u, e * o), _(e && r * u / e)]
                }
            }
            var Se = Me((function(n) {
                return w(2 / (1 + n))
            }));
            Se.invert = Ee((function(n) {
                return 2 * _(n / 2)
            }));
            var we = function() {
                    return ve(Se).scale(124.75).clipAngle(179.999)
                },
                je = Me((function(n) {
                    return (n = O(n)) && n / E(n)
                }));
            je.invert = Ee((function(n) {
                return n
            }));
            var Oe = function() {
                return ve(je).scale(79.4188).clipAngle(179.999)
            };

            function _e(n, t) {
                return [n, b(j((f + t) / 2))]
            }
            _e.invert = function(n, t) {
                return [n, 2 * d(m(t)) - f]
            };
            var Ne = function() {
                return Ae(_e).scale(961 / s)
            };

            function Ae(n) {
                var t, r, e, i = ve(n),
                    u = i.center,
                    o = i.scale,
                    c = i.translate,
                    f = i.clipExtent,
                    l = null;

                function s() {
                    var u = a * o(),
                        c = i(ct(i.rotate()).invert([0, 0]));
                    return f(null == l ? [
                        [c[0] - u, c[1] - u],
                        [c[0] + u, c[1] + u]
                    ] : n === _e ? [
                        [Math.max(c[0] - u, l), t],
                        [Math.min(c[0] + u, r), e]
                    ] : [
                        [l, Math.max(c[1] - u, t)],
                        [r, Math.min(c[1] + u, e)]
                    ])
                }
                return i.scale = function(n) {
                    return arguments.length ? (o(n), s()) : o()
                }, i.translate = function(n) {
                    return arguments.length ? (c(n), s()) : c()
                }, i.center = function(n) {
                    return arguments.length ? (u(n), s()) : u()
                }, i.clipExtent = function(n) {
                    return arguments.length ? (null == n ? l = t = r = e = null : (l = +n[0][0], t = +n[0][1], r = +n[1][0], e = +n[1][1]), s()) : null == l ? null : [
                        [l, t],
                        [r, e]
                    ]
                }, s()
            }

            function ze(n) {
                return j((f + n) / 2)
            }

            function ke(n, t) {
                var r = y(n),
                    e = n === t ? E(n) : b(r / y(t)) / b(ze(t) / ze(n)),
                    i = r * M(ze(n), e) / e;
                if (!e) return _e;

                function u(n, t) {
                    i > 0 ? t < -f + c && (t = -f + c) : t > f - c && (t = f - c);
                    var r = i / M(ze(t), e);
                    return [r * E(e * n), i - r * y(e * n)]
                }
                return u.invert = function(n, t) {
                    var r = i - t,
                        u = S(e) * w(n * n + r * r),
                        o = g(n, v(r)) * S(r);
                    return r * e < 0 && (o -= a * S(n) * S(r)), [o / e, 2 * d(M(i / u, 1 / e)) - f]
                }, u
            }
            var Be = function() {
                return ge(ke).scale(109.5).parallels([30, 30])
            };

            function Pe(n, t) {
                return [n, t]
            }
            Pe.invert = Pe;
            var Xe = function() {
                return ve(Pe).scale(152.63)
            };

            function qe(n, t) {
                var r = y(n),
                    e = n === t ? E(n) : (r - y(t)) / (t - n),
                    i = r / e + n;
                if (v(e) < c) return Pe;

                function u(n, t) {
                    var r = i - t,
                        u = e * n;
                    return [r * E(u), i - r * y(u)]
                }
                return u.invert = function(n, t) {
                    var r = i - t,
                        u = g(n, v(r)) * S(r);
                    return r * e < 0 && (u -= a * S(n) * S(r)), [u / e, i - S(e) * w(n * n + r * r)]
                }, u
            }
            var Le = function() {
                    return ge(qe).scale(131.154).center([0, 13.9389])
                },
                Ie = 1.340264,
                Ce = -.081106,
                Re = 893e-6,
                Ye = .003796,
                Te = w(3) / 2;

            function Fe(n, t) {
                var r = _(Te * E(t)),
                    e = r * r,
                    i = e * e * e;
                return [n * y(r) / (Te * (Ie + 3 * Ce * e + i * (7 * Re + 9 * Ye * e))), r * (Ie + Ce * e + i * (Re + Ye * e))]
            }
            Fe.invert = function(n, t) {
                for (var r, e = t, i = e * e, u = i * i * i, o = 0; o < 12 && (u = (i = (e -= r = (e * (Ie + Ce * i + u * (Re + Ye * i)) - t) / (Ie + 3 * Ce * i + u * (7 * Re + 9 * Ye * i))) * e) * i * i, !(v(r) < 1e-12)); ++o);
                return [Te * n * (Ie + 3 * Ce * i + u * (7 * Re + 9 * Ye * i)) / y(e), _(E(e) / Te)]
            };
            var Ve = function() {
                return ve(Fe).scale(177.158)
            };

            function $e(n, t) {
                var r = y(t),
                    e = y(n) * r;
                return [r * E(n) / e, E(t) / e]
            }
            $e.invert = Ee(d);
            var De = function() {
                    return ve($e).scale(144.049).clipAngle(60)
                },
                Ge = function() {
                    var n, t, r, e, i, u, o, c = 1,
                        a = 0,
                        f = 0,
                        l = 1,
                        s = 1,
                        v = 0,
                        d = null,
                        g = 1,
                        x = 1,
                        m = re({
                            point: function(n, t) {
                                var r = S([n, t]);
                                this.stream.point(r[0], r[1])
                            }
                        }),
                        b = er;

                    function M() {
                        return g = c * l, x = c * s, u = o = null, S
                    }

                    function S(r) {
                        var e = r[0] * g,
                            i = r[1] * x;
                        if (v) {
                            var u = i * n - e * t;
                            e = e * n + i * t, i = u
                        }
                        return [e + a, i + f]
                    }
                    return S.invert = function(r) {
                        var e = r[0] - a,
                            i = r[1] - f;
                        if (v) {
                            var u = i * n + e * t;
                            e = e * n - i * t, i = u
                        }
                        return [e / g, i / x]
                    }, S.stream = function(n) {
                        return u && o === n ? u : u = m(b(o = n))
                    }, S.postclip = function(n) {
                        return arguments.length ? (b = n, d = r = e = i = null, M()) : b
                    }, S.clipExtent = function(n) {
                        return arguments.length ? (b = null == n ? (d = r = e = i = null, er) : jt(d = +n[0][0], r = +n[0][1], e = +n[1][0], i = +n[1][1]), M()) : null == d ? null : [
                            [d, r],
                            [e, i]
                        ]
                    }, S.scale = function(n) {
                        return arguments.length ? (c = +n, M()) : c
                    }, S.translate = function(n) {
                        return arguments.length ? (a = +n[0], f = +n[1], M()) : [a, f]
                    }, S.angle = function(r) {
                        return arguments.length ? (t = E(v = r % 360 * p), n = y(v), M()) : v * h
                    }, S.reflectX = function(n) {
                        return arguments.length ? (l = n ? -1 : 1, M()) : l < 0
                    }, S.reflectY = function(n) {
                        return arguments.length ? (s = n ? -1 : 1, M()) : s < 0
                    }, S.fitExtent = function(n, t) {
                        return ue(S, n, t)
                    }, S.fitSize = function(n, t) {
                        return oe(S, n, t)
                    }, S.fitWidth = function(n, t) {
                        return ce(S, n, t)
                    }, S.fitHeight = function(n, t) {
                        return ae(S, n, t)
                    }, S
                };

            function He(n, t) {
                var r = t * t,
                    e = r * r;
                return [n * (.8707 - .131979 * r + e * (e * (.003971 * r - .001529 * e) - .013791)), t * (1.007226 + r * (.015085 + e * (.028874 * r - .044475 - .005916 * e)))]
            }
            He.invert = function(n, t) {
                var r, e = t,
                    i = 25;
                do {
                    var u = e * e,
                        o = u * u;
                    e -= r = (e * (1.007226 + u * (.015085 + o * (.028874 * u - .044475 - .005916 * o))) - t) / (1.007226 + u * (.045255 + o * (.259866 * u - .311325 - .005916 * 11 * o)))
                } while (v(r) > c && --i > 0);
                return [n / (.8707 + (u = e * e) * (u * (u * u * u * (.003971 - .001529 * u) - .013791) - .131979)), e]
            };
            var We = function() {
                return ve(He).scale(175.295)
            };

            function Je(n, t) {
                return [y(t) * E(n), E(t)]
            }
            Je.invert = Ee(_);
            var Qe = function() {
                return ve(Je).scale(249.5).clipAngle(90 + c)
            };

            function Ue(n, t) {
                var r = y(t),
                    e = 1 + y(n) * r;
                return [r * E(n) / e, E(t) / e]
            }
            Ue.invert = Ee((function(n) {
                return 2 * d(n)
            }));
            var Ze = function() {
                return ve(Ue).scale(250).clipAngle(142)
            };

            function Ke(n, t) {
                return [b(j((f + t) / 2)), -n]
            }
            Ke.invert = function(n, t) {
                return [-t, 2 * d(m(n)) - f]
            };
            var ni = function() {
                var n = Ae(Ke),
                    t = n.center,
                    r = n.rotate;
                return n.center = function(n) {
                    return arguments.length ? t([-n[1], n[0]]) : [(n = t())[1], -n[0]]
                }, n.rotate = function(n) {
                    return arguments.length ? r([n[0], n[1], n.length > 2 ? n[2] + 90 : 90]) : [(n = r())[0], n[1], n[2] - 90]
                }, r([0, 0, 90]).scale(159.155)
            }
        },
        2312: function(n, t, r) {
            "use strict";

            function e(n, t) {
                return n.parent === t.parent ? 1 : 2
            }

            function i(n, t) {
                return n + t.x
            }

            function u(n, t) {
                return Math.max(n, t.y)
            }
            r.d(t, "a", (function() {
                return o
            })), r.d(t, "b", (function() {
                return a
            })), r.d(t, "c", (function() {
                return P
            })), r.d(t, "e", (function() {
                return _
            })), r.d(t, "d", (function() {
                return v
            })), r.d(t, "f", (function() {
                return R
            })), r.d(t, "g", (function() {
                return $
            })), r.d(t, "h", (function() {
                return U
            })), r.d(t, "i", (function() {
                return rn
            })), r.d(t, "j", (function() {
                return en
            })), r.d(t, "k", (function() {
                return C
            })), r.d(t, "m", (function() {
                return Z
            })), r.d(t, "n", (function() {
                return un
            })), r.d(t, "o", (function() {
                return tn
            })), r.d(t, "l", (function() {
                return on
            }));
            var o = function() {
                var n = e,
                    t = 1,
                    r = 1,
                    o = !1;

                function c(e) {
                    var c, a = 0;
                    e.eachAfter((function(t) {
                        var r = t.children;
                        r ? (t.x = function(n) {
                            return n.reduce(i, 0) / n.length
                        }(r), t.y = function(n) {
                            return 1 + n.reduce(u, 0)
                        }(r)) : (t.x = c ? a += n(t, c) : 0, t.y = 0, c = t)
                    }));
                    var f = function(n) {
                            for (var t; t = n.children;) n = t[0];
                            return n
                        }(e),
                        l = function(n) {
                            for (var t; t = n.children;) n = t[t.length - 1];
                            return n
                        }(e),
                        s = f.x - n(f, l) / 2,
                        h = l.x + n(l, f) / 2;
                    return e.eachAfter(o ? function(n) {
                        n.x = (n.x - e.x) * t, n.y = (e.y - n.y) * r
                    } : function(n) {
                        n.x = (n.x - s) / (h - s) * t, n.y = (1 - (e.y ? n.y / e.y : 1)) * r
                    })
                }
                return c.separation = function(t) {
                    return arguments.length ? (n = t, c) : n
                }, c.size = function(n) {
                    return arguments.length ? (o = !1, t = +n[0], r = +n[1], c) : o ? null : [t, r]
                }, c.nodeSize = function(n) {
                    return arguments.length ? (o = !0, t = +n[0], r = +n[1], c) : o ? [t, r] : null
                }, c
            };

            function c(n) {
                var t = 0,
                    r = n.children,
                    e = r && r.length;
                if (e)
                    for (; --e >= 0;) t += r[e].value;
                else t = 1;
                n.value = t
            }

            function a(n, t) {
                var r, e, i, u, o, c = new h(n),
                    a = +n.value && (c.value = n.value),
                    l = [c];
                for (null == t && (t = f); r = l.pop();)
                    if (a && (r.value = +r.data.value), (i = t(r.data)) && (o = i.length))
                        for (r.children = new Array(o), u = o - 1; u >= 0; --u) l.push(e = r.children[u] = new h(i[u])), e.parent = r, e.depth = r.depth + 1;
                return c.eachBefore(s)
            }

            function f(n) {
                return n.children
            }

            function l(n) {
                n.data = n.data.data
            }

            function s(n) {
                var t = 0;
                do {
                    n.height = t
                } while ((n = n.parent) && n.height < ++t)
            }

            function h(n) {
                this.data = n, this.depth = this.height = 0, this.parent = null
            }
            h.prototype = a.prototype = {
                constructor: h,
                count: function() {
                    return this.eachAfter(c)
                },
                each: function(n) {
                    var t, r, e, i, u = this,
                        o = [u];
                    do {
                        for (t = o.reverse(), o = []; u = t.pop();)
                            if (n(u), r = u.children)
                                for (e = 0, i = r.length; e < i; ++e) o.push(r[e])
                    } while (o.length);
                    return this
                },
                eachAfter: function(n) {
                    for (var t, r, e, i = this, u = [i], o = []; i = u.pop();)
                        if (o.push(i), t = i.children)
                            for (r = 0, e = t.length; r < e; ++r) u.push(t[r]);
                    for (; i = o.pop();) n(i);
                    return this
                },
                eachBefore: function(n) {
                    for (var t, r, e = this, i = [e]; e = i.pop();)
                        if (n(e), t = e.children)
                            for (r = t.length - 1; r >= 0; --r) i.push(t[r]);
                    return this
                },
                sum: function(n) {
                    return this.eachAfter((function(t) {
                        for (var r = +n(t.data) || 0, e = t.children, i = e && e.length; --i >= 0;) r += e[i].value;
                        t.value = r
                    }))
                },
                sort: function(n) {
                    return this.eachBefore((function(t) {
                        t.children && t.children.sort(n)
                    }))
                },
                path: function(n) {
                    for (var t = this, r = function(n, t) {
                            if (n === t) return n;
                            var r = n.ancestors(),
                                e = t.ancestors(),
                                i = null;
                            n = r.pop(), t = e.pop();
                            for (; n === t;) i = n, n = r.pop(), t = e.pop();
                            return i
                        }(t, n), e = [t]; t !== r;) t = t.parent, e.push(t);
                    for (var i = e.length; n !== r;) e.splice(i, 0, n), n = n.parent;
                    return e
                },
                ancestors: function() {
                    for (var n = this, t = [n]; n = n.parent;) t.push(n);
                    return t
                },
                descendants: function() {
                    var n = [];
                    return this.each((function(t) {
                        n.push(t)
                    })), n
                },
                leaves: function() {
                    var n = [];
                    return this.eachBefore((function(t) {
                        t.children || n.push(t)
                    })), n
                },
                links: function() {
                    var n = this,
                        t = [];
                    return n.each((function(r) {
                        r !== n && t.push({
                            source: r.parent,
                            target: r
                        })
                    })), t
                },
                copy: function() {
                    return a(this).eachBefore(l)
                }
            };
            var p = Array.prototype.slice;
            var v = function(n) {
                for (var t, r, e = 0, i = (n = function(n) {
                        for (var t, r, e = n.length; e;) r = Math.random() * e-- | 0, t = n[e], n[e] = n[r], n[r] = t;
                        return n
                    }(p.call(n))).length, u = []; e < i;) t = n[e], r && y(r, t) ? ++e : (r = m(u = d(u, t)), e = 0);
                return r
            };

            function d(n, t) {
                var r, e;
                if (x(t, n)) return [t];
                for (r = 0; r < n.length; ++r)
                    if (g(t, n[r]) && x(b(n[r], t), n)) return [n[r], t];
                for (r = 0; r < n.length - 1; ++r)
                    for (e = r + 1; e < n.length; ++e)
                        if (g(b(n[r], n[e]), t) && g(b(n[r], t), n[e]) && g(b(n[e], t), n[r]) && x(M(n[r], n[e], t), n)) return [n[r], n[e], t];
                throw new Error
            }

            function g(n, t) {
                var r = n.r - t.r,
                    e = t.x - n.x,
                    i = t.y - n.y;
                return r < 0 || r * r < e * e + i * i
            }

            function y(n, t) {
                var r = n.r - t.r + 1e-6,
                    e = t.x - n.x,
                    i = t.y - n.y;
                return r > 0 && r * r > e * e + i * i
            }

            function x(n, t) {
                for (var r = 0; r < t.length; ++r)
                    if (!y(n, t[r])) return !1;
                return !0
            }

            function m(n) {
                switch (n.length) {
                    case 1:
                        return {
                            x: (t = n[0]).x, y: t.y, r: t.r
                        };
                    case 2:
                        return b(n[0], n[1]);
                    case 3:
                        return M(n[0], n[1], n[2])
                }
                var t
            }

            function b(n, t) {
                var r = n.x,
                    e = n.y,
                    i = n.r,
                    u = t.x,
                    o = t.y,
                    c = t.r,
                    a = u - r,
                    f = o - e,
                    l = c - i,
                    s = Math.sqrt(a * a + f * f);
                return {
                    x: (r + u + a / s * l) / 2,
                    y: (e + o + f / s * l) / 2,
                    r: (s + i + c) / 2
                }
            }

            function M(n, t, r) {
                var e = n.x,
                    i = n.y,
                    u = n.r,
                    o = t.x,
                    c = t.y,
                    a = t.r,
                    f = r.x,
                    l = r.y,
                    s = r.r,
                    h = e - o,
                    p = e - f,
                    v = i - c,
                    d = i - l,
                    g = a - u,
                    y = s - u,
                    x = e * e + i * i - u * u,
                    m = x - o * o - c * c + a * a,
                    b = x - f * f - l * l + s * s,
                    M = p * v - h * d,
                    E = (v * b - d * m) / (2 * M) - e,
                    S = (d * g - v * y) / M,
                    w = (p * m - h * b) / (2 * M) - i,
                    j = (h * y - p * g) / M,
                    O = S * S + j * j - 1,
                    _ = 2 * (u + E * S + w * j),
                    N = E * E + w * w - u * u,
                    A = -(O ? (_ + Math.sqrt(_ * _ - 4 * O * N)) / (2 * O) : N / _);
                return {
                    x: e + E + S * A,
                    y: i + w + j * A,
                    r: A
                }
            }

            function E(n, t, r) {
                var e, i, u, o, c = n.x - t.x,
                    a = n.y - t.y,
                    f = c * c + a * a;
                f ? (i = t.r + r.r, i *= i, o = n.r + r.r, i > (o *= o) ? (e = (f + o - i) / (2 * f), u = Math.sqrt(Math.max(0, o / f - e * e)), r.x = n.x - e * c - u * a, r.y = n.y - e * a + u * c) : (e = (f + i - o) / (2 * f), u = Math.sqrt(Math.max(0, i / f - e * e)), r.x = t.x + e * c - u * a, r.y = t.y + e * a + u * c)) : (r.x = t.x + r.r, r.y = t.y)
            }

            function S(n, t) {
                var r = n.r + t.r - 1e-6,
                    e = t.x - n.x,
                    i = t.y - n.y;
                return r > 0 && r * r > e * e + i * i
            }

            function w(n) {
                var t = n._,
                    r = n.next._,
                    e = t.r + r.r,
                    i = (t.x * r.r + r.x * t.r) / e,
                    u = (t.y * r.r + r.y * t.r) / e;
                return i * i + u * u
            }

            function j(n) {
                this._ = n, this.next = null, this.previous = null
            }

            function O(n) {
                if (!(i = n.length)) return 0;
                var t, r, e, i, u, o, c, a, f, l, s;
                if ((t = n[0]).x = 0, t.y = 0, !(i > 1)) return t.r;
                if (r = n[1], t.x = -r.r, r.x = t.r, r.y = 0, !(i > 2)) return t.r + r.r;
                E(r, t, e = n[2]), t = new j(t), r = new j(r), e = new j(e), t.next = e.previous = r, r.next = t.previous = e, e.next = r.previous = t;
                n: for (c = 3; c < i; ++c) {
                    E(t._, r._, e = n[c]), e = new j(e), a = r.next, f = t.previous, l = r._.r, s = t._.r;
                    do {
                        if (l <= s) {
                            if (S(a._, e._)) {
                                r = a, t.next = r, r.previous = t, --c;
                                continue n
                            }
                            l += a._.r, a = a.next
                        } else {
                            if (S(f._, e._)) {
                                (t = f).next = r, r.previous = t, --c;
                                continue n
                            }
                            s += f._.r, f = f.previous
                        }
                    } while (a !== f.next);
                    for (e.previous = t, e.next = r, t.next = r.previous = r = e, u = w(t);
                        (e = e.next) !== r;)(o = w(e)) < u && (t = e, u = o);
                    r = t.next
                }
                for (t = [r._], e = r;
                    (e = e.next) !== r;) t.push(e._);
                for (e = v(t), c = 0; c < i; ++c)(t = n[c]).x -= e.x, t.y -= e.y;
                return e.r
            }
            var _ = function(n) {
                return O(n), n
            };

            function N(n) {
                return null == n ? null : A(n)
            }

            function A(n) {
                if ("function" != typeof n) throw new Error;
                return n
            }

            function z() {
                return 0
            }
            var k = function(n) {
                return function() {
                    return n
                }
            };

            function B(n) {
                return Math.sqrt(n.value)
            }
            var P = function() {
                var n = null,
                    t = 1,
                    r = 1,
                    e = z;

                function i(i) {
                    return i.x = t / 2, i.y = r / 2, n ? i.eachBefore(X(n)).eachAfter(q(e, .5)).eachBefore(L(1)) : i.eachBefore(X(B)).eachAfter(q(z, 1)).eachAfter(q(e, i.r / Math.min(t, r))).eachBefore(L(Math.min(t, r) / (2 * i.r))), i
                }
                return i.radius = function(t) {
                    return arguments.length ? (n = N(t), i) : n
                }, i.size = function(n) {
                    return arguments.length ? (t = +n[0], r = +n[1], i) : [t, r]
                }, i.padding = function(n) {
                    return arguments.length ? (e = "function" == typeof n ? n : k(+n), i) : e
                }, i
            };

            function X(n) {
                return function(t) {
                    t.children || (t.r = Math.max(0, +n(t) || 0))
                }
            }

            function q(n, t) {
                return function(r) {
                    if (e = r.children) {
                        var e, i, u, o = e.length,
                            c = n(r) * t || 0;
                        if (c)
                            for (i = 0; i < o; ++i) e[i].r += c;
                        if (u = O(e), c)
                            for (i = 0; i < o; ++i) e[i].r -= c;
                        r.r = u + c
                    }
                }
            }

            function L(n) {
                return function(t) {
                    var r = t.parent;
                    t.r *= n, r && (t.x = r.x + n * t.x, t.y = r.y + n * t.y)
                }
            }
            var I = function(n) {
                    n.x0 = Math.round(n.x0), n.y0 = Math.round(n.y0), n.x1 = Math.round(n.x1), n.y1 = Math.round(n.y1)
                },
                C = function(n, t, r, e, i) {
                    for (var u, o = n.children, c = -1, a = o.length, f = n.value && (e - t) / n.value; ++c < a;)(u = o[c]).y0 = r, u.y1 = i, u.x0 = t, u.x1 = t += u.value * f
                },
                R = function() {
                    var n = 1,
                        t = 1,
                        r = 0,
                        e = !1;

                    function i(i) {
                        var u = i.height + 1;
                        return i.x0 = i.y0 = r, i.x1 = n, i.y1 = t / u, i.eachBefore(function(n, t) {
                            return function(e) {
                                e.children && C(e, e.x0, n * (e.depth + 1) / t, e.x1, n * (e.depth + 2) / t);
                                var i = e.x0,
                                    u = e.y0,
                                    o = e.x1 - r,
                                    c = e.y1 - r;
                                o < i && (i = o = (i + o) / 2), c < u && (u = c = (u + c) / 2), e.x0 = i, e.y0 = u, e.x1 = o, e.y1 = c
                            }
                        }(t, u)), e && i.eachBefore(I), i
                    }
                    return i.round = function(n) {
                        return arguments.length ? (e = !!n, i) : e
                    }, i.size = function(r) {
                        return arguments.length ? (n = +r[0], t = +r[1], i) : [n, t]
                    }, i.padding = function(n) {
                        return arguments.length ? (r = +n, i) : r
                    }, i
                },
                Y = {
                    depth: -1
                },
                T = {};

            function F(n) {
                return n.id
            }

            function V(n) {
                return n.parentId
            }
            var $ = function() {
                var n = F,
                    t = V;

                function r(r) {
                    var e, i, u, o, c, a, f, l = r.length,
                        p = new Array(l),
                        v = {};
                    for (i = 0; i < l; ++i) e = r[i], c = p[i] = new h(e), null != (a = n(e, i, r)) && (a += "") && (v[f = "$" + (c.id = a)] = f in v ? T : c);
                    for (i = 0; i < l; ++i)
                        if (c = p[i], null != (a = t(r[i], i, r)) && (a += "")) {
                            if (!(o = v["$" + a])) throw new Error("missing: " + a);
                            if (o === T) throw new Error("ambiguous: " + a);
                            o.children ? o.children.push(c) : o.children = [c], c.parent = o
                        } else {
                            if (u) throw new Error("multiple roots");
                            u = c
                        } if (!u) throw new Error("no root");
                    if (u.parent = Y, u.eachBefore((function(n) {
                            n.depth = n.parent.depth + 1, --l
                        })).eachBefore(s), u.parent = null, l > 0) throw new Error("cycle");
                    return u
                }
                return r.id = function(t) {
                    return arguments.length ? (n = A(t), r) : n
                }, r.parentId = function(n) {
                    return arguments.length ? (t = A(n), r) : t
                }, r
            };

            function D(n, t) {
                return n.parent === t.parent ? 1 : 2
            }

            function G(n) {
                var t = n.children;
                return t ? t[0] : n.t
            }

            function H(n) {
                var t = n.children;
                return t ? t[t.length - 1] : n.t
            }

            function W(n, t, r) {
                var e = r / (t.i - n.i);
                t.c -= e, t.s += r, n.c += e, t.z += r, t.m += r
            }

            function J(n, t, r) {
                return n.a.parent === t.parent ? n.a : r
            }

            function Q(n, t) {
                this._ = n, this.parent = null, this.children = null, this.A = null, this.a = this, this.z = 0, this.m = 0, this.c = 0, this.s = 0, this.t = null, this.i = t
            }
            Q.prototype = Object.create(h.prototype);
            var U = function() {
                    var n = D,
                        t = 1,
                        r = 1,
                        e = null;

                    function i(i) {
                        var a = function(n) {
                            for (var t, r, e, i, u, o = new Q(n, 0), c = [o]; t = c.pop();)
                                if (e = t._.children)
                                    for (t.children = new Array(u = e.length), i = u - 1; i >= 0; --i) c.push(r = t.children[i] = new Q(e[i], i)), r.parent = t;
                            return (o.parent = new Q(null, 0)).children = [o], o
                        }(i);
                        if (a.eachAfter(u), a.parent.m = -a.z, a.eachBefore(o), e) i.eachBefore(c);
                        else {
                            var f = i,
                                l = i,
                                s = i;
                            i.eachBefore((function(n) {
                                n.x < f.x && (f = n), n.x > l.x && (l = n), n.depth > s.depth && (s = n)
                            }));
                            var h = f === l ? 1 : n(f, l) / 2,
                                p = h - f.x,
                                v = t / (l.x + h + p),
                                d = r / (s.depth || 1);
                            i.eachBefore((function(n) {
                                n.x = (n.x + p) * v, n.y = n.depth * d
                            }))
                        }
                        return i
                    }

                    function u(t) {
                        var r = t.children,
                            e = t.parent.children,
                            i = t.i ? e[t.i - 1] : null;
                        if (r) {
                            ! function(n) {
                                for (var t, r = 0, e = 0, i = n.children, u = i.length; --u >= 0;)(t = i[u]).z += r, t.m += r, r += t.s + (e += t.c)
                            }(t);
                            var u = (r[0].z + r[r.length - 1].z) / 2;
                            i ? (t.z = i.z + n(t._, i._), t.m = t.z - u) : t.z = u
                        } else i && (t.z = i.z + n(t._, i._));
                        t.parent.A = function(t, r, e) {
                            if (r) {
                                for (var i, u = t, o = t, c = r, a = u.parent.children[0], f = u.m, l = o.m, s = c.m, h = a.m; c = H(c), u = G(u), c && u;) a = G(a), (o = H(o)).a = t, (i = c.z + s - u.z - f + n(c._, u._)) > 0 && (W(J(c, t, e), t, i), f += i, l += i), s += c.m, f += u.m, h += a.m, l += o.m;
                                c && !H(o) && (o.t = c, o.m += s - l), u && !G(a) && (a.t = u, a.m += f - h, e = t)
                            }
                            return e
                        }(t, i, t.parent.A || e[0])
                    }

                    function o(n) {
                        n._.x = n.z + n.parent.m, n.m += n.parent.m
                    }

                    function c(n) {
                        n.x *= t, n.y = n.depth * r
                    }
                    return i.separation = function(t) {
                        return arguments.length ? (n = t, i) : n
                    }, i.size = function(n) {
                        return arguments.length ? (e = !1, t = +n[0], r = +n[1], i) : e ? null : [t, r]
                    }, i.nodeSize = function(n) {
                        return arguments.length ? (e = !0, t = +n[0], r = +n[1], i) : e ? [t, r] : null
                    }, i
                },
                Z = function(n, t, r, e, i) {
                    for (var u, o = n.children, c = -1, a = o.length, f = n.value && (i - r) / n.value; ++c < a;)(u = o[c]).x0 = t, u.x1 = e, u.y0 = r, u.y1 = r += u.value * f
                },
                K = (1 + Math.sqrt(5)) / 2;

            function nn(n, t, r, e, i, u) {
                for (var o, c, a, f, l, s, h, p, v, d, g, y = [], x = t.children, m = 0, b = 0, M = x.length, E = t.value; m < M;) {
                    a = i - r, f = u - e;
                    do {
                        l = x[b++].value
                    } while (!l && b < M);
                    for (s = h = l, g = l * l * (d = Math.max(f / a, a / f) / (E * n)), v = Math.max(h / g, g / s); b < M; ++b) {
                        if (l += c = x[b].value, c < s && (s = c), c > h && (h = c), g = l * l * d, (p = Math.max(h / g, g / s)) > v) {
                            l -= c;
                            break
                        }
                        v = p
                    }
                    y.push(o = {
                        value: l,
                        dice: a < f,
                        children: x.slice(m, b)
                    }), o.dice ? C(o, r, e, i, E ? e += f * l / E : u) : Z(o, r, e, E ? r += a * l / E : i, u), E -= l, m = b
                }
                return y
            }
            var tn = function n(t) {
                    function r(n, r, e, i, u) {
                        nn(t, n, r, e, i, u)
                    }
                    return r.ratio = function(t) {
                        return n((t = +t) > 1 ? t : 1)
                    }, r
                }(K),
                rn = function() {
                    var n = tn,
                        t = !1,
                        r = 1,
                        e = 1,
                        i = [0],
                        u = z,
                        o = z,
                        c = z,
                        a = z,
                        f = z;

                    function l(n) {
                        return n.x0 = n.y0 = 0, n.x1 = r, n.y1 = e, n.eachBefore(s), i = [0], t && n.eachBefore(I), n
                    }

                    function s(t) {
                        var r = i[t.depth],
                            e = t.x0 + r,
                            l = t.y0 + r,
                            s = t.x1 - r,
                            h = t.y1 - r;
                        s < e && (e = s = (e + s) / 2), h < l && (l = h = (l + h) / 2), t.x0 = e, t.y0 = l, t.x1 = s, t.y1 = h, t.children && (r = i[t.depth + 1] = u(t) / 2, e += f(t) - r, l += o(t) - r, (s -= c(t) - r) < e && (e = s = (e + s) / 2), (h -= a(t) - r) < l && (l = h = (l + h) / 2), n(t, e, l, s, h))
                    }
                    return l.round = function(n) {
                        return arguments.length ? (t = !!n, l) : t
                    }, l.size = function(n) {
                        return arguments.length ? (r = +n[0], e = +n[1], l) : [r, e]
                    }, l.tile = function(t) {
                        return arguments.length ? (n = A(t), l) : n
                    }, l.padding = function(n) {
                        return arguments.length ? l.paddingInner(n).paddingOuter(n) : l.paddingInner()
                    }, l.paddingInner = function(n) {
                        return arguments.length ? (u = "function" == typeof n ? n : k(+n), l) : u
                    }, l.paddingOuter = function(n) {
                        return arguments.length ? l.paddingTop(n).paddingRight(n).paddingBottom(n).paddingLeft(n) : l.paddingTop()
                    }, l.paddingTop = function(n) {
                        return arguments.length ? (o = "function" == typeof n ? n : k(+n), l) : o
                    }, l.paddingRight = function(n) {
                        return arguments.length ? (c = "function" == typeof n ? n : k(+n), l) : c
                    }, l.paddingBottom = function(n) {
                        return arguments.length ? (a = "function" == typeof n ? n : k(+n), l) : a
                    }, l.paddingLeft = function(n) {
                        return arguments.length ? (f = "function" == typeof n ? n : k(+n), l) : f
                    }, l
                },
                en = function(n, t, r, e, i) {
                    var u, o, c = n.children,
                        a = c.length,
                        f = new Array(a + 1);
                    for (f[0] = o = u = 0; u < a; ++u) f[u + 1] = o += c[u].value;
                    ! function n(t, r, e, i, u, o, a) {
                        if (t >= r - 1) {
                            var l = c[t];
                            return l.x0 = i, l.y0 = u, l.x1 = o, void(l.y1 = a)
                        }
                        var s = f[t],
                            h = e / 2 + s,
                            p = t + 1,
                            v = r - 1;
                        for (; p < v;) {
                            var d = p + v >>> 1;
                            f[d] < h ? p = d + 1 : v = d
                        }
                        h - f[p - 1] < f[p] - h && t + 1 < p && --p;
                        var g = f[p] - s,
                            y = e - g;
                        if (o - i > a - u) {
                            var x = (i * y + o * g) / e;
                            n(t, p, g, i, u, x, a), n(p, r, y, x, u, o, a)
                        } else {
                            var m = (u * y + a * g) / e;
                            n(t, p, g, i, u, o, m), n(p, r, y, i, m, o, a)
                        }
                    }(0, a, n.value, t, r, e, i)
                },
                un = function(n, t, r, e, i) {
                    (1 & n.depth ? Z : C)(n, t, r, e, i)
                },
                on = function n(t) {
                    function r(n, r, e, i, u) {
                        if ((o = n._squarify) && o.ratio === t)
                            for (var o, c, a, f, l, s = -1, h = o.length, p = n.value; ++s < h;) {
                                for (a = (c = o[s]).children, f = c.value = 0, l = a.length; f < l; ++f) c.value += a[f].value;
                                c.dice ? C(c, r, e, i, e += (u - e) * c.value / p) : Z(c, r, e, r += (i - r) * c.value / p, u), p -= c.value
                            } else n._squarify = o = nn(t, n, r, e, i, u), o.ratio = t
                    }
                    return r.ratio = function(t) {
                        return n((t = +t) > 1 ? t : 1)
                    }, r
                }(K)
        },
        249: function(n, t, r) {
            "use strict";
            var e = r(278);
            t.a = function(n) {
                return (n = Object(e.b)(Math.abs(n))) ? n[1] : NaN
            }
        },
        278: function(n, t, r) {
            "use strict";

            function e(n, t) {
                if ((r = (n = t ? n.toExponential(t - 1) : n.toExponential()).indexOf("e")) < 0) return null;
                var r, e = n.slice(0, r);
                return [e.length > 1 ? e[0] + e.slice(2) : e, +n.slice(r + 1)]
            }
            r.d(t, "b", (function() {
                return e
            })), t.a = function(n) {
                return Math.abs(n = Math.round(n)) >= 1e21 ? n.toLocaleString("en").replace(/,/g, "") : n.toString(10)
            }
        },
        315: function(n, t, r) {
            "use strict";

            function e(n) {
                return ArrayBuffer.isView(n) && !(n instanceof DataView)
            }
            r.d(t, "b", (function() {
                return e
            })), t.a = function(n, t) {
                t || (t = []);
                var r, e = n ? Math.min(t.length, n.length) : 0,
                    i = t.slice();
                return function(u) {
                    for (r = 0; r < e; ++r) i[r] = n[r] * (1 - u) + t[r] * u;
                    return i
                }
            }
        },
        363: function(n, t, r) {
            "use strict";
            r.d(t, "b", (function() {
                return a
            })), r.d(t, "c", (function() {
                return f
            }));
            var e = r(89),
                i = r(444),
                u = r(793),
                o = r(78);

            function c(n) {
                return function(t) {
                    var r, i, u = t.length,
                        o = new Array(u),
                        c = new Array(u),
                        a = new Array(u);
                    for (r = 0; r < u; ++r) i = Object(e.g)(t[r]), o[r] = i.r || 0, c[r] = i.g || 0, a[r] = i.b || 0;
                    return o = n(o), c = n(c), a = n(a), i.opacity = 1,
                        function(n) {
                            return i.r = o(n), i.g = c(n), i.b = a(n), i + ""
                        }
                }
            }
            t.a = function n(t) {
                var r = Object(o.b)(t);

                function i(n, t) {
                    var i = r((n = Object(e.g)(n)).r, (t = Object(e.g)(t)).r),
                        u = r(n.g, t.g),
                        c = r(n.b, t.b),
                        a = Object(o.a)(n.opacity, t.opacity);
                    return function(t) {
                        return n.r = i(t), n.g = u(t), n.b = c(t), n.opacity = a(t), n + ""
                    }
                }
                return i.gamma = n, i
            }(1);
            var a = c(i.b),
                f = c(u.a)
        },
        444: function(n, t, r) {
            "use strict";

            function e(n, t, r, e, i) {
                var u = n * n,
                    o = u * n;
                return ((1 - 3 * n + 3 * u - o) * t + (4 - 6 * u + 3 * o) * r + (1 + 3 * n + 3 * u - 3 * o) * e + o * i) / 6
            }
            r.d(t, "a", (function() {
                return e
            })), t.b = function(n) {
                var t = n.length - 1;
                return function(r) {
                    var i = r <= 0 ? r = 0 : r >= 1 ? (r = 1, t - 1) : Math.floor(r * t),
                        u = n[i],
                        o = n[i + 1],
                        c = i > 0 ? n[i - 1] : 2 * u - o,
                        a = i < t - 1 ? n[i + 2] : 2 * o - u;
                    return e((r - i / t) * t, c, u, o, a)
                }
            }
        },
        448: function(n, t, r) {
            "use strict";
            var e = r(89),
                i = r(363),
                u = r(799),
                o = r(798),
                c = r(170),
                a = r(800),
                f = r(794),
                l = r(459),
                s = r(315);
            t.a = function(n, t) {
                var r, h = typeof t;
                return null == t || "boolean" === h ? Object(l.a)(t) : ("number" === h ? c.a : "string" === h ? (r = Object(e.e)(t)) ? (t = r, i.a) : f.a : t instanceof e.e ? i.a : t instanceof Date ? o.a : Object(s.b)(t) ? s.a : Array.isArray(t) ? u.b : "function" != typeof t.valueOf && "function" != typeof t.toString || isNaN(t) ? a.a : c.a)(n, t)
            }
        },
        451: function(n, t, r) {
            "use strict";
            r.d(t, "b", (function() {
                return i
            })), r.d(t, "a", (function() {
                return u
            }));
            var e = /^(?:(.)?([<>=^]))?([+\-( ])?([$#])?(0)?(\d+)?(,)?(\.\d+)?(~)?([a-z%])?$/i;

            function i(n) {
                if (!(t = e.exec(n))) throw new Error("invalid format: " + n);
                var t;
                return new u({
                    fill: t[1],
                    align: t[2],
                    sign: t[3],
                    symbol: t[4],
                    zero: t[5],
                    width: t[6],
                    comma: t[7],
                    precision: t[8] && t[8].slice(1),
                    trim: t[9],
                    type: t[10]
                })
            }

            function u(n) {
                this.fill = void 0 === n.fill ? " " : n.fill + "", this.align = void 0 === n.align ? ">" : n.align + "", this.sign = void 0 === n.sign ? "-" : n.sign + "", this.symbol = void 0 === n.symbol ? "" : n.symbol + "", this.zero = !!n.zero, this.width = void 0 === n.width ? void 0 : +n.width, this.comma = !!n.comma, this.precision = void 0 === n.precision ? void 0 : +n.precision, this.trim = !!n.trim, this.type = void 0 === n.type ? "" : n.type + ""
            }
            i.prototype = u.prototype, u.prototype.toString = function() {
                return this.fill + this.align + this.sign + this.symbol + (this.zero ? "0" : "") + (void 0 === this.width ? "" : Math.max(1, 0 | this.width)) + (this.comma ? "," : "") + (void 0 === this.precision ? "" : "." + Math.max(0, 0 | this.precision)) + (this.trim ? "~" : "") + this.type
            }
        },
        459: function(n, t, r) {
            "use strict";
            t.a = function(n) {
                return function() {
                    return n
                }
            }
        },
        688: function(n, t, r) {
            "use strict";
            var e = r(689);
            r.d(t, "c", (function() {
                return e.a
            })), r.d(t, "b", (function() {
                return e.b
            })), r.d(t, "e", (function() {
                return e.c
            }));
            var i = r(915);
            r.d(t, "d", (function() {
                return i.a
            }));
            var u = r(451);
            r.d(t, "f", (function() {
                return u.b
            })), r.d(t, "a", (function() {
                return u.a
            }));
            var o = r(2269);
            r.d(t, "g", (function() {
                return o.a
            }));
            var c = r(2270);
            r.d(t, "h", (function() {
                return c.a
            }));
            var a = r(2271);
            r.d(t, "i", (function() {
                return a.a
            }))
        },
        689: function(n, t, r) {
            "use strict";
            r.d(t, "b", (function() {
                return i
            })), r.d(t, "c", (function() {
                return u
            })), r.d(t, "a", (function() {
                return c
            }));
            var e, i, u, o = r(915);

            function c(n) {
                return e = Object(o.a)(n), i = e.format, u = e.formatPrefix, e
            }
            c({
                decimal: ".",
                thousands: ",",
                grouping: [3],
                currency: ["$", ""],
                minus: "-"
            })
        },
        78: function(n, t, r) {
            "use strict";
            r.d(t, "c", (function() {
                return u
            })), r.d(t, "b", (function() {
                return o
            })), r.d(t, "a", (function() {
                return c
            }));
            var e = r(459);

            function i(n, t) {
                return function(r) {
                    return n + r * t
                }
            }

            function u(n, t) {
                var r = t - n;
                return r ? i(n, r > 180 || r < -180 ? r - 360 * Math.round(r / 360) : r) : Object(e.a)(isNaN(n) ? t : n)
            }

            function o(n) {
                return 1 == (n = +n) ? c : function(t, r) {
                    return r - t ? function(n, t, r) {
                        return n = Math.pow(n, r), t = Math.pow(t, r) - n, r = 1 / r,
                            function(e) {
                                return Math.pow(n + e * t, r)
                            }
                    }(t, r, n) : Object(e.a)(isNaN(t) ? r : t)
                }
            }

            function c(n, t) {
                var r = t - n;
                return r ? i(n, r) : Object(e.a)(isNaN(n) ? t : n)
            }
        },
        793: function(n, t, r) {
            "use strict";
            var e = r(444);
            t.a = function(n) {
                var t = n.length;
                return function(r) {
                    var i = Math.floor(((r %= 1) < 0 ? ++r : r) * t),
                        u = n[(i + t - 1) % t],
                        o = n[i % t],
                        c = n[(i + 1) % t],
                        a = n[(i + 2) % t];
                    return Object(e.a)((r - i / t) * t, u, o, c, a)
                }
            }
        },
        794: function(n, t, r) {
            "use strict";
            var e = r(170),
                i = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g,
                u = new RegExp(i.source, "g");
            t.a = function(n, t) {
                var r, o, c, a = i.lastIndex = u.lastIndex = 0,
                    f = -1,
                    l = [],
                    s = [];
                for (n += "", t += "";
                    (r = i.exec(n)) && (o = u.exec(t));)(c = o.index) > a && (c = t.slice(a, c), l[f] ? l[f] += c : l[++f] = c), (r = r[0]) === (o = o[0]) ? l[f] ? l[f] += o : l[++f] = o : (l[++f] = null, s.push({
                    i: f,
                    x: Object(e.a)(r, o)
                })), a = u.lastIndex;
                return a < t.length && (c = t.slice(a), l[f] ? l[f] += c : l[++f] = c), l.length < 2 ? s[0] ? function(n) {
                    return function(t) {
                        return n(t) + ""
                    }
                }(s[0].x) : function(n) {
                    return function() {
                        return n
                    }
                }(t) : (t = s.length, function(n) {
                    for (var r, e = 0; e < t; ++e) l[(r = s[e]).i] = r.x(n);
                    return l.join("")
                })
            }
        },
        798: function(n, t, r) {
            "use strict";
            t.a = function(n, t) {
                var r = new Date;
                return n = +n, t = +t,
                    function(e) {
                        return r.setTime(n * (1 - e) + t * e), r
                    }
            }
        },
        799: function(n, t, r) {
            "use strict";
            r.d(t, "b", (function() {
                return u
            }));
            var e = r(448),
                i = r(315);

            function u(n, t) {
                var r, i = t ? t.length : 0,
                    u = n ? Math.min(i, n.length) : 0,
                    o = new Array(u),
                    c = new Array(i);
                for (r = 0; r < u; ++r) o[r] = Object(e.a)(n[r], t[r]);
                for (; r < i; ++r) c[r] = t[r];
                return function(n) {
                    for (r = 0; r < u; ++r) c[r] = o[r](n);
                    return c
                }
            }
            t.a = function(n, t) {
                return (Object(i.b)(t) ? i.a : u)(n, t)
            }
        },
        800: function(n, t, r) {
            "use strict";
            var e = r(448);
            t.a = function(n, t) {
                var r, i = {},
                    u = {};
                for (r in null !== n && "object" == typeof n || (n = {}), null !== t && "object" == typeof t || (t = {}), t) r in n ? i[r] = Object(e.a)(n[r], t[r]) : u[r] = t[r];
                return function(n) {
                    for (r in i) u[r] = i[r](n);
                    return u
                }
            }
        },
        915: function(n, t, r) {
            "use strict";
            var e, i = r(249),
                u = r(451),
                o = r(278),
                c = function(n, t) {
                    var r = Object(o.b)(n, t);
                    if (!r) return n + "";
                    var e = r[0],
                        i = r[1];
                    return i < 0 ? "0." + new Array(-i).join("0") + e : e.length > i + 1 ? e.slice(0, i + 1) + "." + e.slice(i + 1) : e + new Array(i - e.length + 2).join("0")
                },
                a = {
                    "%": function(n, t) {
                        return (100 * n).toFixed(t)
                    },
                    b: function(n) {
                        return Math.round(n).toString(2)
                    },
                    c: function(n) {
                        return n + ""
                    },
                    d: o.a,
                    e: function(n, t) {
                        return n.toExponential(t)
                    },
                    f: function(n, t) {
                        return n.toFixed(t)
                    },
                    g: function(n, t) {
                        return n.toPrecision(t)
                    },
                    o: function(n) {
                        return Math.round(n).toString(8)
                    },
                    p: function(n, t) {
                        return c(100 * n, t)
                    },
                    r: c,
                    s: function(n, t) {
                        var r = Object(o.b)(n, t);
                        if (!r) return n + "";
                        var i = r[0],
                            u = r[1],
                            c = u - (e = 3 * Math.max(-8, Math.min(8, Math.floor(u / 3)))) + 1,
                            a = i.length;
                        return c === a ? i : c > a ? i + new Array(c - a + 1).join("0") : c > 0 ? i.slice(0, c) + "." + i.slice(c) : "0." + new Array(1 - c).join("0") + Object(o.b)(n, Math.max(0, t + c - 1))[0]
                    },
                    X: function(n) {
                        return Math.round(n).toString(16).toUpperCase()
                    },
                    x: function(n) {
                        return Math.round(n).toString(16)
                    }
                },
                f = function(n) {
                    return n
                },
                l = Array.prototype.map,
                s = ["y", "z", "a", "f", "p", "n", "µ", "m", "", "k", "M", "G", "T", "P", "E", "Z", "Y"];
            t.a = function(n) {
                var t, r, o = void 0 === n.grouping || void 0 === n.thousands ? f : (t = l.call(n.grouping, Number), r = n.thousands + "", function(n, e) {
                        for (var i = n.length, u = [], o = 0, c = t[0], a = 0; i > 0 && c > 0 && (a + c + 1 > e && (c = Math.max(1, e - a)), u.push(n.substring(i -= c, i + c)), !((a += c + 1) > e));) c = t[o = (o + 1) % t.length];
                        return u.reverse().join(r)
                    }),
                    c = void 0 === n.currency ? "" : n.currency[0] + "",
                    h = void 0 === n.currency ? "" : n.currency[1] + "",
                    p = void 0 === n.decimal ? "." : n.decimal + "",
                    v = void 0 === n.numerals ? f : function(n) {
                        return function(t) {
                            return t.replace(/[0-9]/g, (function(t) {
                                return n[+t]
                            }))
                        }
                    }(l.call(n.numerals, String)),
                    d = void 0 === n.percent ? "%" : n.percent + "",
                    g = void 0 === n.minus ? "-" : n.minus + "",
                    y = void 0 === n.nan ? "NaN" : n.nan + "";

                function x(n) {
                    var t = (n = Object(u.b)(n)).fill,
                        r = n.align,
                        i = n.sign,
                        f = n.symbol,
                        l = n.zero,
                        x = n.width,
                        m = n.comma,
                        b = n.precision,
                        M = n.trim,
                        E = n.type;
                    "n" === E ? (m = !0, E = "g") : a[E] || (void 0 === b && (b = 12), M = !0, E = "g"), (l || "0" === t && "=" === r) && (l = !0, t = "0", r = "=");
                    var S = "$" === f ? c : "#" === f && /[boxX]/.test(E) ? "0" + E.toLowerCase() : "",
                        w = "$" === f ? h : /[%p]/.test(E) ? d : "",
                        j = a[E],
                        O = /[defgprs%]/.test(E);

                    function _(n) {
                        var u, c, a, f = S,
                            h = w;
                        if ("c" === E) h = j(n) + h, n = "";
                        else {
                            var d = (n = +n) < 0 || 1 / n < 0;
                            if (n = isNaN(n) ? y : j(Math.abs(n), b), M && (n = function(n) {
                                    n: for (var t, r = n.length, e = 1, i = -1; e < r; ++e) switch (n[e]) {
                                        case ".":
                                            i = t = e;
                                            break;
                                        case "0":
                                            0 === i && (i = e), t = e;
                                            break;
                                        default:
                                            if (!+n[e]) break n;
                                            i > 0 && (i = 0)
                                    }
                                    return i > 0 ? n.slice(0, i) + n.slice(t + 1) : n
                                }(n)), d && 0 == +n && "+" !== i && (d = !1), f = (d ? "(" === i ? i : g : "-" === i || "(" === i ? "" : i) + f, h = ("s" === E ? s[8 + e / 3] : "") + h + (d && "(" === i ? ")" : ""), O)
                                for (u = -1, c = n.length; ++u < c;)
                                    if (48 > (a = n.charCodeAt(u)) || a > 57) {
                                        h = (46 === a ? p + n.slice(u + 1) : n.slice(u)) + h, n = n.slice(0, u);
                                        break
                                    }
                        }
                        m && !l && (n = o(n, 1 / 0));
                        var _ = f.length + n.length + h.length,
                            N = _ < x ? new Array(x - _ + 1).join(t) : "";
                        switch (m && l && (n = o(N + n, N.length ? x - h.length : 1 / 0), N = ""), r) {
                            case "<":
                                n = f + n + h + N;
                                break;
                            case "=":
                                n = f + N + n + h;
                                break;
                            case "^":
                                n = N.slice(0, _ = N.length >> 1) + f + n + h + N.slice(_);
                                break;
                            default:
                                n = N + f + n + h
                        }
                        return v(n)
                    }
                    return b = void 0 === b ? 6 : /[gprs]/.test(E) ? Math.max(1, Math.min(21, b)) : Math.max(0, Math.min(20, b)), _.toString = function() {
                        return n + ""
                    }, _
                }
                return {
                    format: x,
                    formatPrefix: function(n, t) {
                        var r = x(((n = Object(u.b)(n)).type = "f", n)),
                            e = 3 * Math.max(-8, Math.min(8, Math.floor(Object(i.a)(t) / 3))),
                            o = Math.pow(10, -e),
                            c = s[8 + e / 3];
                        return function(n) {
                            return r(o * n) + c
                        }
                    }
                }
            }
        }
    }
]);