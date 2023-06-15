(window.webpackJsonp = window.webpackJsonp || []).push([
    [143], {
        11: function(e, r, t) {
            "use strict";
            t.r(r), t.d(r, "Reader", (function() {
                return l
            })), t.d(r, "Writer", (function() {
                return c
            })), t.d(r, "proto", (function() {
                return u
            })), t.d(r, "com", (function() {
                return d
            })), t.d(r, "google", (function() {
                return h
            }));
            var n, a = t(8),
                i = t(1),
                o = t.n(i),
                s = t(927);
            null == (n = a.util).Long && (console.log("Patching Protobuf Long.js instance..."), n.Long = o.a, null != a.Reader._configure && a.Reader._configure(a.BufferReader));
            const l = a.Reader,
                c = a.Writer,
                u = s.c,
                d = s.a,
                h = s.b
        },
        2324: function(e, r, t) {
            var n;
            ! function(a) {
                "use strict";
                var i, o = /^-?(?:\d+(?:\.\d*)?|\.\d+)(?:e[+-]?\d+)?$/i,
                    s = Math.ceil,
                    l = Math.floor,
                    c = "[BigNumber Error] ",
                    u = c + "Number primitive has more than 15 significant digits: ",
                    d = 1e14,
                    h = [1, 10, 100, 1e3, 1e4, 1e5, 1e6, 1e7, 1e8, 1e9, 1e10, 1e11, 1e12, 1e13],
                    p = 1e9;

                function f(e) {
                    var r = 0 | e;
                    return e > 0 || e === r ? r : r - 1
                }

                function y(e) {
                    for (var r, t, n = 1, a = e.length, i = e[0] + ""; n < a;) {
                        for (t = 14 - (r = e[n++] + "").length; t--; r = "0" + r);
                        i += r
                    }
                    for (a = i.length; 48 === i.charCodeAt(--a););
                    return i.slice(0, a + 1 || 1)
                }

                function g(e, r) {
                    var t, n, a = e.c,
                        i = r.c,
                        o = e.s,
                        s = r.s,
                        l = e.e,
                        c = r.e;
                    if (!o || !s) return null;
                    if (t = a && !a[0], n = i && !i[0], t || n) return t ? n ? 0 : -s : o;
                    if (o != s) return o;
                    if (t = o < 0, n = l == c, !a || !i) return n ? 0 : !a ^ t ? 1 : -1;
                    if (!n) return l > c ^ t ? 1 : -1;
                    for (s = (l = a.length) < (c = i.length) ? l : c, o = 0; o < s; o++)
                        if (a[o] != i[o]) return a[o] > i[o] ^ t ? 1 : -1;
                    return l == c ? 0 : l > c ^ t ? 1 : -1
                }

                function m(e, r, t, n) {
                    if (e < r || e > t || e !== l(e)) throw Error(c + (n || "Argument") + ("number" == typeof e ? e < r || e > t ? " out of range: " : " not an integer: " : " not a primitive number: ") + String(e))
                }

                function b(e) {
                    var r = e.c.length - 1;
                    return f(e.e / 14) == r && e.c[r] % 2 != 0
                }

                function w(e, r) {
                    return (e.length > 1 ? e.charAt(0) + "." + e.slice(1) : e) + (r < 0 ? "e" : "e+") + r
                }

                function v(e, r, t) {
                    var n, a;
                    if (r < 0) {
                        for (a = t + "."; ++r; a += t);
                        e = a + e
                    } else if (++r > (n = e.length)) {
                        for (a = t, r -= n; --r; a += t);
                        e += a
                    } else r < n && (e = e.slice(0, r) + "." + e.slice(r));
                    return e
                }(i = function e(r) {
                    var t, n, a, i, k, E, P, K, _, x = N.prototype = {
                            constructor: N,
                            toString: null,
                            valueOf: null
                        },
                        S = new N(1),
                        B = 20,
                        A = 4,
                        C = -7,
                        M = 21,
                        O = -1e7,
                        D = 1e7,
                        j = !1,
                        q = 1,
                        R = 0,
                        z = {
                            prefix: "",
                            groupSize: 3,
                            secondaryGroupSize: 0,
                            groupSeparator: ",",
                            decimalSeparator: ".",
                            fractionGroupSize: 0,
                            fractionGroupSeparator: " ",
                            suffix: ""
                        },
                        T = "0123456789abcdefghijklmnopqrstuvwxyz",
                        I = !0;

                    function N(e, r) {
                        var t, i, s, c, d, h, p, f, y = this;
                        if (!(y instanceof N)) return new N(e, r);
                        if (null == r) {
                            if (e && !0 === e._isBigNumber) return y.s = e.s, void(!e.c || e.e > D ? y.c = y.e = null : e.e < O ? y.c = [y.e = 0] : (y.e = e.e, y.c = e.c.slice()));
                            if ((h = "number" == typeof e) && 0 * e == 0) {
                                if (y.s = 1 / e < 0 ? (e = -e, -1) : 1, e === ~~e) {
                                    for (c = 0, d = e; d >= 10; d /= 10, c++);
                                    return void(c > D ? y.c = y.e = null : (y.e = c, y.c = [e]))
                                }
                                f = String(e)
                            } else {
                                if (!o.test(f = String(e))) return a(y, f, h);
                                y.s = 45 == f.charCodeAt(0) ? (f = f.slice(1), -1) : 1
                            }(c = f.indexOf(".")) > -1 && (f = f.replace(".", "")), (d = f.search(/e/i)) > 0 ? (c < 0 && (c = d), c += +f.slice(d + 1), f = f.substring(0, d)) : c < 0 && (c = f.length)
                        } else {
                            if (m(r, 2, T.length, "Base"), 10 == r && I) return F(y = new N(e), B + y.e + 1, A);
                            if (f = String(e), h = "number" == typeof e) {
                                if (0 * e != 0) return a(y, f, h, r);
                                if (y.s = 1 / e < 0 ? (f = f.slice(1), -1) : 1, N.DEBUG && f.replace(/^0\.0*|\./, "").length > 15) throw Error(u + e)
                            } else y.s = 45 === f.charCodeAt(0) ? (f = f.slice(1), -1) : 1;
                            for (t = T.slice(0, r), c = d = 0, p = f.length; d < p; d++)
                                if (t.indexOf(i = f.charAt(d)) < 0) {
                                    if ("." == i) {
                                        if (d > c) {
                                            c = p;
                                            continue
                                        }
                                    } else if (!s && (f == f.toUpperCase() && (f = f.toLowerCase()) || f == f.toLowerCase() && (f = f.toUpperCase()))) {
                                        s = !0, d = -1, c = 0;
                                        continue
                                    }
                                    return a(y, String(e), h, r)
                                } h = !1, (c = (f = n(f, r, 10, y.s)).indexOf(".")) > -1 ? f = f.replace(".", "") : c = f.length
                        }
                        for (d = 0; 48 === f.charCodeAt(d); d++);
                        for (p = f.length; 48 === f.charCodeAt(--p););
                        if (f = f.slice(d, ++p)) {
                            if (p -= d, h && N.DEBUG && p > 15 && (e > 9007199254740991 || e !== l(e))) throw Error(u + y.s * e);
                            if ((c = c - d - 1) > D) y.c = y.e = null;
                            else if (c < O) y.c = [y.e = 0];
                            else {
                                if (y.e = c, y.c = [], d = (c + 1) % 14, c < 0 && (d += 14), d < p) {
                                    for (d && y.c.push(+f.slice(0, d)), p -= 14; d < p;) y.c.push(+f.slice(d, d += 14));
                                    d = 14 - (f = f.slice(d)).length
                                } else d -= p;
                                for (; d--; f += "0");
                                y.c.push(+f)
                            }
                        } else y.c = [y.e = 0]
                    }

                    function H(e, r, t, n) {
                        var a, i, o, s, l;
                        if (null == t ? t = A : m(t, 0, 8), !e.c) return e.toString();
                        if (a = e.c[0], o = e.e, null == r) l = y(e.c), l = 1 == n || 2 == n && (o <= C || o >= M) ? w(l, o) : v(l, o, "0");
                        else if (i = (e = F(new N(e), r, t)).e, s = (l = y(e.c)).length, 1 == n || 2 == n && (r <= i || i <= C)) {
                            for (; s < r; l += "0", s++);
                            l = w(l, i)
                        } else if (r -= o, l = v(l, i, "0"), i + 1 > s) {
                            if (--r > 0)
                                for (l += "."; r--; l += "0");
                        } else if ((r += i - s) > 0)
                            for (i + 1 == s && (l += "."); r--; l += "0");
                        return e.s < 0 && a ? "-" + l : l
                    }

                    function U(e, r) {
                        for (var t, n = 1, a = new N(e[0]); n < e.length; n++) {
                            if (!(t = new N(e[n])).s) {
                                a = t;
                                break
                            }
                            r.call(a, t) && (a = t)
                        }
                        return a
                    }

                    function L(e, r, t) {
                        for (var n = 1, a = r.length; !r[--a]; r.pop());
                        for (a = r[0]; a >= 10; a /= 10, n++);
                        return (t = n + 14 * t - 1) > D ? e.c = e.e = null : t < O ? e.c = [e.e = 0] : (e.e = t, e.c = r), e
                    }

                    function F(e, r, t, n) {
                        var a, i, o, c, u, p, f, y = e.c,
                            g = h;
                        if (y) {
                            e: {
                                for (a = 1, c = y[0]; c >= 10; c /= 10, a++);
                                if ((i = r - a) < 0) i += 14,
                                o = r,
                                f = (u = y[p = 0]) / g[a - o - 1] % 10 | 0;
                                else if ((p = s((i + 1) / 14)) >= y.length) {
                                    if (!n) break e;
                                    for (; y.length <= p; y.push(0));
                                    u = f = 0, a = 1, o = (i %= 14) - 14 + 1
                                } else {
                                    for (u = c = y[p], a = 1; c >= 10; c /= 10, a++);
                                    f = (o = (i %= 14) - 14 + a) < 0 ? 0 : u / g[a - o - 1] % 10 | 0
                                }
                                if (n = n || r < 0 || null != y[p + 1] || (o < 0 ? u : u % g[a - o - 1]), n = t < 4 ? (f || n) && (0 == t || t == (e.s < 0 ? 3 : 2)) : f > 5 || 5 == f && (4 == t || n || 6 == t && (i > 0 ? o > 0 ? u / g[a - o] : 0 : y[p - 1]) % 10 & 1 || t == (e.s < 0 ? 8 : 7)), r < 1 || !y[0]) return y.length = 0,
                                n ? (r -= e.e + 1, y[0] = g[(14 - r % 14) % 14], e.e = -r || 0) : y[0] = e.e = 0,
                                e;
                                if (0 == i ? (y.length = p, c = 1, p--) : (y.length = p + 1, c = g[14 - i], y[p] = o > 0 ? l(u / g[a - o] % g[o]) * c : 0), n)
                                    for (;;) {
                                        if (0 == p) {
                                            for (i = 1, o = y[0]; o >= 10; o /= 10, i++);
                                            for (o = y[0] += c, c = 1; o >= 10; o /= 10, c++);
                                            i != c && (e.e++, y[0] == d && (y[0] = 1));
                                            break
                                        }
                                        if (y[p] += c, y[p] != d) break;
                                        y[p--] = 0, c = 1
                                    }
                                for (i = y.length; 0 === y[--i]; y.pop());
                            }
                            e.e > D ? e.c = e.e = null : e.e < O && (e.c = [e.e = 0])
                        }
                        return e
                    }

                    function V(e) {
                        var r, t = e.e;
                        return null === t ? e.toString() : (r = y(e.c), r = t <= C || t >= M ? w(r, t) : v(r, t, "0"), e.s < 0 ? "-" + r : r)
                    }
                    return N.clone = e, N.ROUND_UP = 0, N.ROUND_DOWN = 1, N.ROUND_CEIL = 2, N.ROUND_FLOOR = 3, N.ROUND_HALF_UP = 4, N.ROUND_HALF_DOWN = 5, N.ROUND_HALF_EVEN = 6, N.ROUND_HALF_CEIL = 7, N.ROUND_HALF_FLOOR = 8, N.EUCLID = 9, N.config = N.set = function(e) {
                        var r, t;
                        if (null != e) {
                            if ("object" != typeof e) throw Error(c + "Object expected: " + e);
                            if (e.hasOwnProperty(r = "DECIMAL_PLACES") && (m(t = e[r], 0, p, r), B = t), e.hasOwnProperty(r = "ROUNDING_MODE") && (m(t = e[r], 0, 8, r), A = t), e.hasOwnProperty(r = "EXPONENTIAL_AT") && ((t = e[r]) && t.pop ? (m(t[0], -p, 0, r), m(t[1], 0, p, r), C = t[0], M = t[1]) : (m(t, -p, p, r), C = -(M = t < 0 ? -t : t))), e.hasOwnProperty(r = "RANGE"))
                                if ((t = e[r]) && t.pop) m(t[0], -p, -1, r), m(t[1], 1, p, r), O = t[0], D = t[1];
                                else {
                                    if (m(t, -p, p, r), !t) throw Error(c + r + " cannot be zero: " + t);
                                    O = -(D = t < 0 ? -t : t)
                                } if (e.hasOwnProperty(r = "CRYPTO")) {
                                if ((t = e[r]) !== !!t) throw Error(c + r + " not true or false: " + t);
                                if (t) {
                                    if ("undefined" == typeof crypto || !crypto || !crypto.getRandomValues && !crypto.randomBytes) throw j = !t, Error(c + "crypto unavailable");
                                    j = t
                                } else j = t
                            }
                            if (e.hasOwnProperty(r = "MODULO_MODE") && (m(t = e[r], 0, 9, r), q = t), e.hasOwnProperty(r = "POW_PRECISION") && (m(t = e[r], 0, p, r), R = t), e.hasOwnProperty(r = "FORMAT")) {
                                if ("object" != typeof(t = e[r])) throw Error(c + r + " not an object: " + t);
                                z = t
                            }
                            if (e.hasOwnProperty(r = "ALPHABET")) {
                                if ("string" != typeof(t = e[r]) || /^.?$|[+\-.\s]|(.).*\1/.test(t)) throw Error(c + r + " invalid: " + t);
                                I = "0123456789" == t.slice(0, 10), T = t
                            }
                        }
                        return {
                            DECIMAL_PLACES: B,
                            ROUNDING_MODE: A,
                            EXPONENTIAL_AT: [C, M],
                            RANGE: [O, D],
                            CRYPTO: j,
                            MODULO_MODE: q,
                            POW_PRECISION: R,
                            FORMAT: z,
                            ALPHABET: T
                        }
                    }, N.isBigNumber = function(e) {
                        if (!e || !0 !== e._isBigNumber) return !1;
                        if (!N.DEBUG) return !0;
                        var r, t, n = e.c,
                            a = e.e,
                            i = e.s;
                        e: if ("[object Array]" == {}.toString.call(n)) {
                            if ((1 === i || -1 === i) && a >= -p && a <= p && a === l(a)) {
                                if (0 === n[0]) {
                                    if (0 === a && 1 === n.length) return !0;
                                    break e
                                }
                                if ((r = (a + 1) % 14) < 1 && (r += 14), String(n[0]).length == r) {
                                    for (r = 0; r < n.length; r++)
                                        if ((t = n[r]) < 0 || t >= d || t !== l(t)) break e;
                                    if (0 !== t) return !0
                                }
                            }
                        } else if (null === n && null === a && (null === i || 1 === i || -1 === i)) return !0;
                        throw Error(c + "Invalid BigNumber: " + e)
                    }, N.maximum = N.max = function() {
                        return U(arguments, x.lt)
                    }, N.minimum = N.min = function() {
                        return U(arguments, x.gt)
                    }, N.random = (i = 9007199254740992 * Math.random() & 2097151 ? function() {
                        return l(9007199254740992 * Math.random())
                    } : function() {
                        return 8388608 * (1073741824 * Math.random() | 0) + (8388608 * Math.random() | 0)
                    }, function(e) {
                        var r, t, n, a, o, u = 0,
                            d = [],
                            f = new N(S);
                        if (null == e ? e = B : m(e, 0, p), a = s(e / 14), j)
                            if (crypto.getRandomValues) {
                                for (r = crypto.getRandomValues(new Uint32Array(a *= 2)); u < a;)(o = 131072 * r[u] + (r[u + 1] >>> 11)) >= 9e15 ? (t = crypto.getRandomValues(new Uint32Array(2)), r[u] = t[0], r[u + 1] = t[1]) : (d.push(o % 1e14), u += 2);
                                u = a / 2
                            } else {
                                if (!crypto.randomBytes) throw j = !1, Error(c + "crypto unavailable");
                                for (r = crypto.randomBytes(a *= 7); u < a;)(o = 281474976710656 * (31 & r[u]) + 1099511627776 * r[u + 1] + 4294967296 * r[u + 2] + 16777216 * r[u + 3] + (r[u + 4] << 16) + (r[u + 5] << 8) + r[u + 6]) >= 9e15 ? crypto.randomBytes(7).copy(r, u) : (d.push(o % 1e14), u += 7);
                                u = a / 7
                            } if (!j)
                            for (; u < a;)(o = i()) < 9e15 && (d[u++] = o % 1e14);
                        for (e %= 14, (a = d[--u]) && e && (o = h[14 - e], d[u] = l(a / o) * o); 0 === d[u]; d.pop(), u--);
                        if (u < 0) d = [n = 0];
                        else {
                            for (n = -1; 0 === d[0]; d.splice(0, 1), n -= 14);
                            for (u = 1, o = d[0]; o >= 10; o /= 10, u++);
                            u < 14 && (n -= 14 - u)
                        }
                        return f.e = n, f.c = d, f
                    }), N.sum = function() {
                        for (var e = 1, r = arguments, t = new N(r[0]); e < r.length;) t = t.plus(r[e++]);
                        return t
                    }, n = function() {
                        function e(e, r, t, n) {
                            for (var a, i, o = [0], s = 0, l = e.length; s < l;) {
                                for (i = o.length; i--; o[i] *= r);
                                for (o[0] += n.indexOf(e.charAt(s++)), a = 0; a < o.length; a++) o[a] > t - 1 && (null == o[a + 1] && (o[a + 1] = 0), o[a + 1] += o[a] / t | 0, o[a] %= t)
                            }
                            return o.reverse()
                        }
                        return function(r, n, a, i, o) {
                            var s, l, c, u, d, h, p, f, g = r.indexOf("."),
                                m = B,
                                b = A;
                            for (g >= 0 && (u = R, R = 0, r = r.replace(".", ""), h = (f = new N(n)).pow(r.length - g), R = u, f.c = e(v(y(h.c), h.e, "0"), 10, a, "0123456789"), f.e = f.c.length), c = u = (p = e(r, n, a, o ? (s = T, "0123456789") : (s = "0123456789", T))).length; 0 == p[--u]; p.pop());
                            if (!p[0]) return s.charAt(0);
                            if (g < 0 ? --c : (h.c = p, h.e = c, h.s = i, p = (h = t(h, f, m, b, a)).c, d = h.r, c = h.e), g = p[l = c + m + 1], u = a / 2, d = d || l < 0 || null != p[l + 1], d = b < 4 ? (null != g || d) && (0 == b || b == (h.s < 0 ? 3 : 2)) : g > u || g == u && (4 == b || d || 6 == b && 1 & p[l - 1] || b == (h.s < 0 ? 8 : 7)), l < 1 || !p[0]) r = d ? v(s.charAt(1), -m, s.charAt(0)) : s.charAt(0);
                            else {
                                if (p.length = l, d)
                                    for (--a; ++p[--l] > a;) p[l] = 0, l || (++c, p = [1].concat(p));
                                for (u = p.length; !p[--u];);
                                for (g = 0, r = ""; g <= u; r += s.charAt(p[g++]));
                                r = v(r, c, s.charAt(0))
                            }
                            return r
                        }
                    }(), t = function() {
                        function e(e, r, t) {
                            var n, a, i, o, s = 0,
                                l = e.length,
                                c = r % 1e7,
                                u = r / 1e7 | 0;
                            for (e = e.slice(); l--;) s = ((a = c * (i = e[l] % 1e7) + (n = u * i + (o = e[l] / 1e7 | 0) * c) % 1e7 * 1e7 + s) / t | 0) + (n / 1e7 | 0) + u * o, e[l] = a % t;
                            return s && (e = [s].concat(e)), e
                        }

                        function r(e, r, t, n) {
                            var a, i;
                            if (t != n) i = t > n ? 1 : -1;
                            else
                                for (a = i = 0; a < t; a++)
                                    if (e[a] != r[a]) {
                                        i = e[a] > r[a] ? 1 : -1;
                                        break
                                    } return i
                        }

                        function t(e, r, t, n) {
                            for (var a = 0; t--;) e[t] -= a, a = e[t] < r[t] ? 1 : 0, e[t] = a * n + e[t] - r[t];
                            for (; !e[0] && e.length > 1; e.splice(0, 1));
                        }
                        return function(n, a, i, o, s) {
                            var c, u, h, p, y, g, m, b, w, v, k, E, P, K, _, x, S, B = n.s == a.s ? 1 : -1,
                                A = n.c,
                                C = a.c;
                            if (!(A && A[0] && C && C[0])) return new N(n.s && a.s && (A ? !C || A[0] != C[0] : C) ? A && 0 == A[0] || !C ? 0 * B : B / 0 : NaN);
                            for (w = (b = new N(B)).c = [], B = i + (u = n.e - a.e) + 1, s || (s = d, u = f(n.e / 14) - f(a.e / 14), B = B / 14 | 0), h = 0; C[h] == (A[h] || 0); h++);
                            if (C[h] > (A[h] || 0) && u--, B < 0) w.push(1), p = !0;
                            else {
                                for (K = A.length, x = C.length, h = 0, B += 2, (y = l(s / (C[0] + 1))) > 1 && (C = e(C, y, s), A = e(A, y, s), x = C.length, K = A.length), P = x, k = (v = A.slice(0, x)).length; k < x; v[k++] = 0);
                                S = C.slice(), S = [0].concat(S), _ = C[0], C[1] >= s / 2 && _++;
                                do {
                                    if (y = 0, (c = r(C, v, x, k)) < 0) {
                                        if (E = v[0], x != k && (E = E * s + (v[1] || 0)), (y = l(E / _)) > 1)
                                            for (y >= s && (y = s - 1), m = (g = e(C, y, s)).length, k = v.length; 1 == r(g, v, m, k);) y--, t(g, x < m ? S : C, m, s), m = g.length, c = 1;
                                        else 0 == y && (c = y = 1), m = (g = C.slice()).length;
                                        if (m < k && (g = [0].concat(g)), t(v, g, k, s), k = v.length, -1 == c)
                                            for (; r(C, v, x, k) < 1;) y++, t(v, x < k ? S : C, k, s), k = v.length
                                    } else 0 === c && (y++, v = [0]);
                                    w[h++] = y, v[0] ? v[k++] = A[P] || 0 : (v = [A[P]], k = 1)
                                } while ((P++ < K || null != v[0]) && B--);
                                p = null != v[0], w[0] || w.splice(0, 1)
                            }
                            if (s == d) {
                                for (h = 1, B = w[0]; B >= 10; B /= 10, h++);
                                F(b, i + (b.e = h + 14 * u - 1) + 1, o, p)
                            } else b.e = u, b.r = +p;
                            return b
                        }
                    }(), k = /^(-?)0([xbo])(?=\w[\w.]*$)/i, E = /^([^.]+)\.$/, P = /^\.([^.]+)$/, K = /^-?(Infinity|NaN)$/, _ = /^\s*\+(?=[\w.])|^\s+|\s+$/g, a = function(e, r, t, n) {
                        var a, i = t ? r : r.replace(_, "");
                        if (K.test(i)) e.s = isNaN(i) ? null : i < 0 ? -1 : 1;
                        else {
                            if (!t && (i = i.replace(k, (function(e, r, t) {
                                    return a = "x" == (t = t.toLowerCase()) ? 16 : "b" == t ? 2 : 8, n && n != a ? e : r
                                })), n && (a = n, i = i.replace(E, "$1").replace(P, "0.$1")), r != i)) return new N(i, a);
                            if (N.DEBUG) throw Error(c + "Not a" + (n ? " base " + n : "") + " number: " + r);
                            e.s = null
                        }
                        e.c = e.e = null
                    }, x.absoluteValue = x.abs = function() {
                        var e = new N(this);
                        return e.s < 0 && (e.s = 1), e
                    }, x.comparedTo = function(e, r) {
                        return g(this, new N(e, r))
                    }, x.decimalPlaces = x.dp = function(e, r) {
                        var t, n, a, i = this;
                        if (null != e) return m(e, 0, p), null == r ? r = A : m(r, 0, 8), F(new N(i), e + i.e + 1, r);
                        if (!(t = i.c)) return null;
                        if (n = 14 * ((a = t.length - 1) - f(this.e / 14)), a = t[a])
                            for (; a % 10 == 0; a /= 10, n--);
                        return n < 0 && (n = 0), n
                    }, x.dividedBy = x.div = function(e, r) {
                        return t(this, new N(e, r), B, A)
                    }, x.dividedToIntegerBy = x.idiv = function(e, r) {
                        return t(this, new N(e, r), 0, 1)
                    }, x.exponentiatedBy = x.pow = function(e, r) {
                        var t, n, a, i, o, u, d, h, p = this;
                        if ((e = new N(e)).c && !e.isInteger()) throw Error(c + "Exponent not an integer: " + V(e));
                        if (null != r && (r = new N(r)), o = e.e > 14, !p.c || !p.c[0] || 1 == p.c[0] && !p.e && 1 == p.c.length || !e.c || !e.c[0]) return h = new N(Math.pow(+V(p), o ? e.s * (2 - b(e)) : +V(e))), r ? h.mod(r) : h;
                        if (u = e.s < 0, r) {
                            if (r.c ? !r.c[0] : !r.s) return new N(NaN);
                            (n = !u && p.isInteger() && r.isInteger()) && (p = p.mod(r))
                        } else {
                            if (e.e > 9 && (p.e > 0 || p.e < -1 || (0 == p.e ? p.c[0] > 1 || o && p.c[1] >= 24e7 : p.c[0] < 8e13 || o && p.c[0] <= 9999975e7))) return i = p.s < 0 && b(e) ? -0 : 0, p.e > -1 && (i = 1 / i), new N(u ? 1 / i : i);
                            R && (i = s(R / 14 + 2))
                        }
                        for (o ? (t = new N(.5), u && (e.s = 1), d = b(e)) : d = (a = Math.abs(+V(e))) % 2, h = new N(S);;) {
                            if (d) {
                                if (!(h = h.times(p)).c) break;
                                i ? h.c.length > i && (h.c.length = i) : n && (h = h.mod(r))
                            }
                            if (a) {
                                if (0 === (a = l(a / 2))) break;
                                d = a % 2
                            } else if (F(e = e.times(t), e.e + 1, 1), e.e > 14) d = b(e);
                            else {
                                if (0 === (a = +V(e))) break;
                                d = a % 2
                            }
                            p = p.times(p), i ? p.c && p.c.length > i && (p.c.length = i) : n && (p = p.mod(r))
                        }
                        return n ? h : (u && (h = S.div(h)), r ? h.mod(r) : i ? F(h, R, A, void 0) : h)
                    }, x.integerValue = function(e) {
                        var r = new N(this);
                        return null == e ? e = A : m(e, 0, 8), F(r, r.e + 1, e)
                    }, x.isEqualTo = x.eq = function(e, r) {
                        return 0 === g(this, new N(e, r))
                    }, x.isFinite = function() {
                        return !!this.c
                    }, x.isGreaterThan = x.gt = function(e, r) {
                        return g(this, new N(e, r)) > 0
                    }, x.isGreaterThanOrEqualTo = x.gte = function(e, r) {
                        return 1 === (r = g(this, new N(e, r))) || 0 === r
                    }, x.isInteger = function() {
                        return !!this.c && f(this.e / 14) > this.c.length - 2
                    }, x.isLessThan = x.lt = function(e, r) {
                        return g(this, new N(e, r)) < 0
                    }, x.isLessThanOrEqualTo = x.lte = function(e, r) {
                        return -1 === (r = g(this, new N(e, r))) || 0 === r
                    }, x.isNaN = function() {
                        return !this.s
                    }, x.isNegative = function() {
                        return this.s < 0
                    }, x.isPositive = function() {
                        return this.s > 0
                    }, x.isZero = function() {
                        return !!this.c && 0 == this.c[0]
                    }, x.minus = function(e, r) {
                        var t, n, a, i, o = this,
                            s = o.s;
                        if (r = (e = new N(e, r)).s, !s || !r) return new N(NaN);
                        if (s != r) return e.s = -r, o.plus(e);
                        var l = o.e / 14,
                            c = e.e / 14,
                            u = o.c,
                            h = e.c;
                        if (!l || !c) {
                            if (!u || !h) return u ? (e.s = -r, e) : new N(h ? o : NaN);
                            if (!u[0] || !h[0]) return h[0] ? (e.s = -r, e) : new N(u[0] ? o : 3 == A ? -0 : 0)
                        }
                        if (l = f(l), c = f(c), u = u.slice(), s = l - c) {
                            for ((i = s < 0) ? (s = -s, a = u) : (c = l, a = h), a.reverse(), r = s; r--; a.push(0));
                            a.reverse()
                        } else
                            for (n = (i = (s = u.length) < (r = h.length)) ? s : r, s = r = 0; r < n; r++)
                                if (u[r] != h[r]) {
                                    i = u[r] < h[r];
                                    break
                                } if (i && (a = u, u = h, h = a, e.s = -e.s), (r = (n = h.length) - (t = u.length)) > 0)
                            for (; r--; u[t++] = 0);
                        for (r = d - 1; n > s;) {
                            if (u[--n] < h[n]) {
                                for (t = n; t && !u[--t]; u[t] = r);
                                --u[t], u[n] += d
                            }
                            u[n] -= h[n]
                        }
                        for (; 0 == u[0]; u.splice(0, 1), --c);
                        return u[0] ? L(e, u, c) : (e.s = 3 == A ? -1 : 1, e.c = [e.e = 0], e)
                    }, x.modulo = x.mod = function(e, r) {
                        var n, a, i = this;
                        return e = new N(e, r), !i.c || !e.s || e.c && !e.c[0] ? new N(NaN) : !e.c || i.c && !i.c[0] ? new N(i) : (9 == q ? (a = e.s, e.s = 1, n = t(i, e, 0, 3), e.s = a, n.s *= a) : n = t(i, e, 0, q), (e = i.minus(n.times(e))).c[0] || 1 != q || (e.s = i.s), e)
                    }, x.multipliedBy = x.times = function(e, r) {
                        var t, n, a, i, o, s, l, c, u, h, p, y, g, m, b = this,
                            w = b.c,
                            v = (e = new N(e, r)).c;
                        if (!(w && v && w[0] && v[0])) return !b.s || !e.s || w && !w[0] && !v || v && !v[0] && !w ? e.c = e.e = e.s = null : (e.s *= b.s, w && v ? (e.c = [0], e.e = 0) : e.c = e.e = null), e;
                        for (n = f(b.e / 14) + f(e.e / 14), e.s *= b.s, (l = w.length) < (h = v.length) && (g = w, w = v, v = g, a = l, l = h, h = a), a = l + h, g = []; a--; g.push(0));
                        for (m = d, 1e7, a = h; --a >= 0;) {
                            for (t = 0, p = v[a] % 1e7, y = v[a] / 1e7 | 0, i = a + (o = l); i > a;) t = ((c = p * (c = w[--o] % 1e7) + (s = y * c + (u = w[o] / 1e7 | 0) * p) % 1e7 * 1e7 + g[i] + t) / m | 0) + (s / 1e7 | 0) + y * u, g[i--] = c % m;
                            g[i] = t
                        }
                        return t ? ++n : g.splice(0, 1), L(e, g, n)
                    }, x.negated = function() {
                        var e = new N(this);
                        return e.s = -e.s || null, e
                    }, x.plus = function(e, r) {
                        var t, n = this,
                            a = n.s;
                        if (r = (e = new N(e, r)).s, !a || !r) return new N(NaN);
                        if (a != r) return e.s = -r, n.minus(e);
                        var i = n.e / 14,
                            o = e.e / 14,
                            s = n.c,
                            l = e.c;
                        if (!i || !o) {
                            if (!s || !l) return new N(a / 0);
                            if (!s[0] || !l[0]) return l[0] ? e : new N(s[0] ? n : 0 * a)
                        }
                        if (i = f(i), o = f(o), s = s.slice(), a = i - o) {
                            for (a > 0 ? (o = i, t = l) : (a = -a, t = s), t.reverse(); a--; t.push(0));
                            t.reverse()
                        }
                        for ((a = s.length) - (r = l.length) < 0 && (t = l, l = s, s = t, r = a), a = 0; r;) a = (s[--r] = s[r] + l[r] + a) / d | 0, s[r] = d === s[r] ? 0 : s[r] % d;
                        return a && (s = [a].concat(s), ++o), L(e, s, o)
                    }, x.precision = x.sd = function(e, r) {
                        var t, n, a, i = this;
                        if (null != e && e !== !!e) return m(e, 1, p), null == r ? r = A : m(r, 0, 8), F(new N(i), e, r);
                        if (!(t = i.c)) return null;
                        if (n = 14 * (a = t.length - 1) + 1, a = t[a]) {
                            for (; a % 10 == 0; a /= 10, n--);
                            for (a = t[0]; a >= 10; a /= 10, n++);
                        }
                        return e && i.e + 1 > n && (n = i.e + 1), n
                    }, x.shiftedBy = function(e) {
                        return m(e, -9007199254740991, 9007199254740991), this.times("1e" + e)
                    }, x.squareRoot = x.sqrt = function() {
                        var e, r, n, a, i, o = this,
                            s = o.c,
                            l = o.s,
                            c = o.e,
                            u = B + 4,
                            d = new N("0.5");
                        if (1 !== l || !s || !s[0]) return new N(!l || l < 0 && (!s || s[0]) ? NaN : s ? o : 1 / 0);
                        if (0 == (l = Math.sqrt(+V(o))) || l == 1 / 0 ? (((r = y(s)).length + c) % 2 == 0 && (r += "0"), l = Math.sqrt(+r), c = f((c + 1) / 2) - (c < 0 || c % 2), n = new N(r = l == 1 / 0 ? "5e" + c : (r = l.toExponential()).slice(0, r.indexOf("e") + 1) + c)) : n = new N(l + ""), n.c[0])
                            for ((l = (c = n.e) + u) < 3 && (l = 0);;)
                                if (i = n, n = d.times(i.plus(t(o, i, u, 1))), y(i.c).slice(0, l) === (r = y(n.c)).slice(0, l)) {
                                    if (n.e < c && --l, "9999" != (r = r.slice(l - 3, l + 1)) && (a || "4999" != r)) {
                                        +r && (+r.slice(1) || "5" != r.charAt(0)) || (F(n, n.e + B + 2, 1), e = !n.times(n).eq(o));
                                        break
                                    }
                                    if (!a && (F(i, i.e + B + 2, 0), i.times(i).eq(o))) {
                                        n = i;
                                        break
                                    }
                                    u += 4, l += 4, a = 1
                                } return F(n, n.e + B + 1, A, e)
                    }, x.toExponential = function(e, r) {
                        return null != e && (m(e, 0, p), e++), H(this, e, r, 1)
                    }, x.toFixed = function(e, r) {
                        return null != e && (m(e, 0, p), e = e + this.e + 1), H(this, e, r)
                    }, x.toFormat = function(e, r, t) {
                        var n, a = this;
                        if (null == t) null != e && r && "object" == typeof r ? (t = r, r = null) : e && "object" == typeof e ? (t = e, e = r = null) : t = z;
                        else if ("object" != typeof t) throw Error(c + "Argument not an object: " + t);
                        if (n = a.toFixed(e, r), a.c) {
                            var i, o = n.split("."),
                                s = +t.groupSize,
                                l = +t.secondaryGroupSize,
                                u = t.groupSeparator || "",
                                d = o[0],
                                h = o[1],
                                p = a.s < 0,
                                f = p ? d.slice(1) : d,
                                y = f.length;
                            if (l && (i = s, s = l, l = i, y -= i), s > 0 && y > 0) {
                                for (i = y % s || s, d = f.substr(0, i); i < y; i += s) d += u + f.substr(i, s);
                                l > 0 && (d += u + f.slice(i)), p && (d = "-" + d)
                            }
                            n = h ? d + (t.decimalSeparator || "") + ((l = +t.fractionGroupSize) ? h.replace(new RegExp("\\d{" + l + "}\\B", "g"), "$&" + (t.fractionGroupSeparator || "")) : h) : d
                        }
                        return (t.prefix || "") + n + (t.suffix || "")
                    }, x.toFraction = function(e) {
                        var r, n, a, i, o, s, l, u, d, p, f, g, m = this,
                            b = m.c;
                        if (null != e && (!(l = new N(e)).isInteger() && (l.c || 1 !== l.s) || l.lt(S))) throw Error(c + "Argument " + (l.isInteger() ? "out of range: " : "not an integer: ") + V(l));
                        if (!b) return new N(m);
                        for (r = new N(S), d = n = new N(S), a = u = new N(S), g = y(b), o = r.e = g.length - m.e - 1, r.c[0] = h[(s = o % 14) < 0 ? 14 + s : s], e = !e || l.comparedTo(r) > 0 ? o > 0 ? r : d : l, s = D, D = 1 / 0, l = new N(g), u.c[0] = 0; p = t(l, r, 0, 1), 1 != (i = n.plus(p.times(a))).comparedTo(e);) n = a, a = i, d = u.plus(p.times(i = d)), u = i, r = l.minus(p.times(i = r)), l = i;
                        return i = t(e.minus(n), a, 0, 1), u = u.plus(i.times(d)), n = n.plus(i.times(a)), u.s = d.s = m.s, f = t(d, a, o *= 2, A).minus(m).abs().comparedTo(t(u, n, o, A).minus(m).abs()) < 1 ? [d, a] : [u, n], D = s, f
                    }, x.toNumber = function() {
                        return +V(this)
                    }, x.toPrecision = function(e, r) {
                        return null != e && m(e, 1, p), H(this, e, r, 2)
                    }, x.toString = function(e) {
                        var r, t = this,
                            a = t.s,
                            i = t.e;
                        return null === i ? a ? (r = "Infinity", a < 0 && (r = "-" + r)) : r = "NaN" : (null == e ? r = i <= C || i >= M ? w(y(t.c), i) : v(y(t.c), i, "0") : 10 === e && I ? r = v(y((t = F(new N(t), B + i + 1, A)).c), t.e, "0") : (m(e, 2, T.length, "Base"), r = n(v(y(t.c), i, "0"), 10, e, a, !0)), a < 0 && t.c[0] && (r = "-" + r)), r
                    }, x.valueOf = x.toJSON = function() {
                        return V(this)
                    }, x._isBigNumber = !0, null != r && N.set(r), N
                }()).default = i.BigNumber = i, void 0 === (n = function() {
                    return i
                }.call(r, t, r, e)) || (e.exports = n)
            }()
        },
        289: function(e, r, t) {
            e.exports = function(e) {
                var r = {};

                function t(n) {
                    if (r[n]) return r[n].exports;
                    var a = r[n] = {
                        i: n,
                        l: !1,
                        exports: {}
                    };
                    return e[n].call(a.exports, a, a.exports, t), a.l = !0, a.exports
                }
                return t.m = e, t.c = r, t.d = function(e, r, n) {
                    t.o(e, r) || Object.defineProperty(e, r, {
                        enumerable: !0,
                        get: n
                    })
                }, t.r = function(e) {
                    "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
                        value: "Module"
                    }), Object.defineProperty(e, "__esModule", {
                        value: !0
                    })
                }, t.t = function(e, r) {
                    if (1 & r && (e = t(e)), 8 & r) return e;
                    if (4 & r && "object" == typeof e && e && e.__esModule) return e;
                    var n = Object.create(null);
                    if (t.r(n), Object.defineProperty(n, "default", {
                            enumerable: !0,
                            value: e
                        }), 2 & r && "string" != typeof e)
                        for (var a in e) t.d(n, a, function(r) {
                            return e[r]
                        }.bind(null, a));
                    return n
                }, t.n = function(e) {
                    var r = e && e.__esModule ? function() {
                        return e.default
                    } : function() {
                        return e
                    };
                    return t.d(r, "a", r), r
                }, t.o = function(e, r) {
                    return Object.prototype.hasOwnProperty.call(e, r)
                }, t.p = "", t(t.s = 11)
            }([function(e, r, t) {
                "use strict";
                Object.defineProperty(r, "__esModule", {
                    value: !0
                });
                var n = t(4);
                r.Metadata = n.BrowserHeaders
            }, function(e, r, t) {
                "use strict";
                Object.defineProperty(r, "__esModule", {
                    value: !0
                }), r.debug = function() {
                    for (var e = [], r = 0; r < arguments.length; r++) e[r] = arguments[r];
                    console.debug ? console.debug.apply(null, e) : console.log.apply(null, e)
                }
            }, function(e, r, t) {
                "use strict";
                Object.defineProperty(r, "__esModule", {
                    value: !0
                });
                var n = null;
                r.default = function(e) {
                    null === n ? (n = [e], setTimeout((function() {
                        ! function e() {
                            if (n) {
                                var r = n;
                                n = null;
                                for (var t = 0; t < r.length; t++) try {
                                    r[t]()
                                } catch (i) {
                                    null === n && (n = [], setTimeout((function() {
                                        e()
                                    }), 0));
                                    for (var a = r.length - 1; a > t; a--) n.unshift(r[a]);
                                    throw i
                                }
                            }
                        }()
                    }), 0)) : n.push(e)
                }
            }, function(e, r, t) {
                "use strict";
                Object.defineProperty(r, "__esModule", {
                    value: !0
                });
                var n = t(0),
                    a = t(9),
                    i = t(10),
                    o = t(1),
                    s = t(2),
                    l = t(5),
                    c = t(15);
                r.client = function(e, r) {
                    return new u(e, r)
                };
                var u = function() {
                    function e(e, r) {
                        this.started = !1, this.sentFirstMessage = !1, this.completed = !1, this.closed = !1, this.finishedSending = !1, this.onHeadersCallbacks = [], this.onMessageCallbacks = [], this.onEndCallbacks = [], this.parser = new a.ChunkParser, this.methodDefinition = e, this.props = r, this.createTransport()
                    }
                    return e.prototype.createTransport = function() {
                        var e = this.props.host + "/" + this.methodDefinition.service.serviceName + "/" + this.methodDefinition.methodName,
                            r = {
                                methodDefinition: this.methodDefinition,
                                debug: this.props.debug || !1,
                                url: e,
                                onHeaders: this.onTransportHeaders.bind(this),
                                onChunk: this.onTransportChunk.bind(this),
                                onEnd: this.onTransportEnd.bind(this)
                            };
                        this.props.transport ? this.transport = this.props.transport(r) : this.transport = l.makeDefaultTransport(r)
                    }, e.prototype.onTransportHeaders = function(e, r) {
                        if (this.props.debug && o.debug("onHeaders", e, r), this.closed) this.props.debug && o.debug("grpc.onHeaders received after request was closed - ignoring");
                        else if (0 === r);
                        else {
                            this.responseHeaders = e, this.props.debug && o.debug("onHeaders.responseHeaders", JSON.stringify(this.responseHeaders, null, 2));
                            var t = d(e);
                            this.props.debug && o.debug("onHeaders.gRPCStatus", t);
                            var n = t && t >= 0 ? t : i.httpStatusToCode(r);
                            this.props.debug && o.debug("onHeaders.code", n);
                            var a = e.get("grpc-message") || [];
                            if (this.props.debug && o.debug("onHeaders.gRPCMessage", a), this.rawOnHeaders(e), n !== i.Code.OK) {
                                var s = this.decodeGRPCStatus(a[0]);
                                this.rawOnError(n, s, e)
                            }
                        }
                    }, e.prototype.onTransportChunk = function(e) {
                        var r = this;
                        if (this.closed) this.props.debug && o.debug("grpc.onChunk received after request was closed - ignoring");
                        else {
                            var t = [];
                            try {
                                t = this.parser.parse(e)
                            } catch (e) {
                                return this.props.debug && o.debug("onChunk.parsing error", e, e.message), void this.rawOnError(i.Code.Internal, "parsing error: " + e.message)
                            }
                            t.forEach((function(e) {
                                if (e.chunkType === a.ChunkType.MESSAGE) {
                                    var t = r.methodDefinition.responseType.deserializeBinary(e.data);
                                    r.rawOnMessage(t)
                                } else e.chunkType === a.ChunkType.TRAILERS && (r.responseHeaders ? (r.responseTrailers = new n.Metadata(e.trailers), r.props.debug && o.debug("onChunk.trailers", r.responseTrailers)) : (r.responseHeaders = new n.Metadata(e.trailers), r.rawOnHeaders(r.responseHeaders)))
                            }))
                        }
                    }, e.prototype.onTransportEnd = function() {
                        if (this.props.debug && o.debug("grpc.onEnd"), this.closed) this.props.debug && o.debug("grpc.onEnd received after request was closed - ignoring");
                        else if (void 0 !== this.responseTrailers) {
                            var e = d(this.responseTrailers);
                            if (null !== e) {
                                var r = this.responseTrailers.get("grpc-message"),
                                    t = this.decodeGRPCStatus(r[0]);
                                this.rawOnEnd(e, t, this.responseTrailers)
                            } else this.rawOnError(i.Code.Internal, "Response closed without grpc-status (Trailers provided)")
                        } else {
                            if (void 0 === this.responseHeaders) return void this.rawOnError(i.Code.Unknown, "Response closed without headers");
                            var n = d(this.responseHeaders),
                                a = this.responseHeaders.get("grpc-message");
                            if (this.props.debug && o.debug("grpc.headers only response ", n, a), null === n) return void this.rawOnEnd(i.Code.Unknown, "Response closed without grpc-status (Headers only)", this.responseHeaders);
                            var s = this.decodeGRPCStatus(a[0]);
                            this.rawOnEnd(n, s, this.responseHeaders)
                        }
                    }, e.prototype.decodeGRPCStatus = function(e) {
                        if (!e) return "";
                        try {
                            return decodeURIComponent(e)
                        } catch (r) {
                            return e
                        }
                    }, e.prototype.rawOnEnd = function(e, r, t) {
                        var n = this;
                        this.props.debug && o.debug("rawOnEnd", e, r, t), this.completed || (this.completed = !0, this.onEndCallbacks.forEach((function(a) {
                            s.default((function() {
                                n.closed || a(e, r, t)
                            }))
                        })))
                    }, e.prototype.rawOnHeaders = function(e) {
                        this.props.debug && o.debug("rawOnHeaders", e), this.completed || this.onHeadersCallbacks.forEach((function(r) {
                            s.default((function() {
                                r(e)
                            }))
                        }))
                    }, e.prototype.rawOnError = function(e, r, t) {
                        var a = this;
                        void 0 === t && (t = new n.Metadata), this.props.debug && o.debug("rawOnError", e, r), this.completed || (this.completed = !0, this.onEndCallbacks.forEach((function(n) {
                            s.default((function() {
                                a.closed || n(e, r, t)
                            }))
                        })))
                    }, e.prototype.rawOnMessage = function(e) {
                        var r = this;
                        this.props.debug && o.debug("rawOnMessage", e.toObject()), this.completed || this.closed || this.onMessageCallbacks.forEach((function(t) {
                            s.default((function() {
                                r.closed || t(e)
                            }))
                        }))
                    }, e.prototype.onHeaders = function(e) {
                        this.onHeadersCallbacks.push(e)
                    }, e.prototype.onMessage = function(e) {
                        this.onMessageCallbacks.push(e)
                    }, e.prototype.onEnd = function(e) {
                        this.onEndCallbacks.push(e)
                    }, e.prototype.start = function(e) {
                        if (this.started) throw new Error("Client already started - cannot .start()");
                        this.started = !0;
                        var r = new n.Metadata(e || {});
                        r.set("content-type", "application/grpc-web+proto"), r.set("x-grpc-web", "1"), this.transport.start(r)
                    }, e.prototype.send = function(e) {
                        if (!this.started) throw new Error("Client not started - .start() must be called before .send()");
                        if (this.closed) throw new Error("Client already closed - cannot .send()");
                        if (this.finishedSending) throw new Error("Client already finished sending - cannot .send()");
                        if (!this.methodDefinition.requestStream && this.sentFirstMessage) throw new Error("Message already sent for non-client-streaming method - cannot .send()");
                        this.sentFirstMessage = !0;
                        var r = c.frameRequest(e);
                        this.transport.sendMessage(r)
                    }, e.prototype.finishSend = function() {
                        if (!this.started) throw new Error("Client not started - .finishSend() must be called before .close()");
                        if (this.closed) throw new Error("Client already closed - cannot .send()");
                        if (this.finishedSending) throw new Error("Client already finished sending - cannot .finishSend()");
                        this.finishedSending = !0, this.transport.finishSend()
                    }, e.prototype.close = function() {
                        if (!this.started) throw new Error("Client not started - .start() must be called before .close()");
                        if (this.closed) throw new Error("Client already closed - cannot .close()");
                        this.closed = !0, this.props.debug && o.debug("request.abort aborting request"), this.transport.cancel()
                    }, e
                }();

                function d(e) {
                    var r = e.get("grpc-status") || [];
                    if (r.length > 0) try {
                        var t = r[0];
                        return parseInt(t, 10)
                    } catch (e) {
                        return null
                    }
                    return null
                }
            }, function(e, r, t) {
                var n;
                n = function() {
                    return function(e) {
                        var r = {};

                        function t(n) {
                            if (r[n]) return r[n].exports;
                            var a = r[n] = {
                                i: n,
                                l: !1,
                                exports: {}
                            };
                            return e[n].call(a.exports, a, a.exports, t), a.l = !0, a.exports
                        }
                        return t.m = e, t.c = r, t.i = function(e) {
                            return e
                        }, t.d = function(e, r, n) {
                            t.o(e, r) || Object.defineProperty(e, r, {
                                configurable: !1,
                                enumerable: !0,
                                get: n
                            })
                        }, t.n = function(e) {
                            var r = e && e.__esModule ? function() {
                                return e.default
                            } : function() {
                                return e
                            };
                            return t.d(r, "a", r), r
                        }, t.o = function(e, r) {
                            return Object.prototype.hasOwnProperty.call(e, r)
                        }, t.p = "", t(t.s = 1)
                    }([function(e, r, t) {
                        "use strict";
                        Object.defineProperty(r, "__esModule", {
                            value: !0
                        });
                        var n = t(3),
                            a = function() {
                                function e(e, r) {
                                    void 0 === e && (e = {}), void 0 === r && (r = {
                                        splitValues: !1
                                    });
                                    var t, a = this;
                                    this.headersMap = {}, e && ("undefined" != typeof Headers && e instanceof Headers ? n.getHeaderKeys(e).forEach((function(t) {
                                        n.getHeaderValues(e, t).forEach((function(e) {
                                            r.splitValues ? a.append(t, n.splitHeaderValue(e)) : a.append(t, e)
                                        }))
                                    })) : "object" == typeof(t = e) && "object" == typeof t.headersMap && "function" == typeof t.forEach ? e.forEach((function(e, r) {
                                        a.append(e, r)
                                    })) : "undefined" != typeof Map && e instanceof Map ? e.forEach((function(e, r) {
                                        a.append(r, e)
                                    })) : "string" == typeof e ? this.appendFromString(e) : "object" == typeof e && Object.getOwnPropertyNames(e).forEach((function(r) {
                                        var t = e[r];
                                        Array.isArray(t) ? t.forEach((function(e) {
                                            a.append(r, e)
                                        })) : a.append(r, t)
                                    })))
                                }
                                return e.prototype.appendFromString = function(e) {
                                    for (var r = e.split("\r\n"), t = 0; t < r.length; t++) {
                                        var n = r[t],
                                            a = n.indexOf(":");
                                        if (a > 0) {
                                            var i = n.substring(0, a).trim(),
                                                o = n.substring(a + 1).trim();
                                            this.append(i, o)
                                        }
                                    }
                                }, e.prototype.delete = function(e, r) {
                                    var t = n.normalizeName(e);
                                    if (void 0 === r) delete this.headersMap[t];
                                    else {
                                        var a = this.headersMap[t];
                                        if (a) {
                                            var i = a.indexOf(r);
                                            i >= 0 && a.splice(i, 1), 0 === a.length && delete this.headersMap[t]
                                        }
                                    }
                                }, e.prototype.append = function(e, r) {
                                    var t = this,
                                        a = n.normalizeName(e);
                                    Array.isArray(this.headersMap[a]) || (this.headersMap[a] = []), Array.isArray(r) ? r.forEach((function(e) {
                                        t.headersMap[a].push(n.normalizeValue(e))
                                    })) : this.headersMap[a].push(n.normalizeValue(r))
                                }, e.prototype.set = function(e, r) {
                                    var t = n.normalizeName(e);
                                    if (Array.isArray(r)) {
                                        var a = [];
                                        r.forEach((function(e) {
                                            a.push(n.normalizeValue(e))
                                        })), this.headersMap[t] = a
                                    } else this.headersMap[t] = [n.normalizeValue(r)]
                                }, e.prototype.has = function(e, r) {
                                    var t = this.headersMap[n.normalizeName(e)];
                                    if (!Array.isArray(t)) return !1;
                                    if (void 0 !== r) {
                                        var a = n.normalizeValue(r);
                                        return t.indexOf(a) >= 0
                                    }
                                    return !0
                                }, e.prototype.get = function(e) {
                                    var r = this.headersMap[n.normalizeName(e)];
                                    return void 0 !== r ? r.concat() : []
                                }, e.prototype.forEach = function(e) {
                                    var r = this;
                                    Object.getOwnPropertyNames(this.headersMap).forEach((function(t) {
                                        e(t, r.headersMap[t])
                                    }), this)
                                }, e.prototype.toHeaders = function() {
                                    if ("undefined" != typeof Headers) {
                                        var e = new Headers;
                                        return this.forEach((function(r, t) {
                                            t.forEach((function(t) {
                                                e.append(r, t)
                                            }))
                                        })), e
                                    }
                                    throw new Error("Headers class is not defined")
                                }, e
                            }();
                        r.BrowserHeaders = a
                    }, function(e, r, t) {
                        "use strict";
                        Object.defineProperty(r, "__esModule", {
                            value: !0
                        });
                        var n = t(0);
                        r.BrowserHeaders = n.BrowserHeaders
                    }, function(e, r, t) {
                        "use strict";
                        Object.defineProperty(r, "__esModule", {
                            value: !0
                        }), r.iterateHeaders = function(e, r) {
                            for (var t = e[Symbol.iterator](), n = t.next(); !n.done;) r(n.value[0]), n = t.next()
                        }, r.iterateHeadersKeys = function(e, r) {
                            for (var t = e.keys(), n = t.next(); !n.done;) r(n.value), n = t.next()
                        }
                    }, function(e, r, t) {
                        "use strict";
                        Object.defineProperty(r, "__esModule", {
                            value: !0
                        });
                        var n = t(2);
                        r.normalizeName = function(e) {
                            if ("string" != typeof e && (e = String(e)), /[^a-z0-9\-#$%&'*+.\^_`|~]/i.test(e)) throw new TypeError("Invalid character in header field name");
                            return e.toLowerCase()
                        }, r.normalizeValue = function(e) {
                            return "string" != typeof e && (e = String(e)), e
                        }, r.getHeaderValues = function(e, r) {
                            var t = e;
                            if (t instanceof Headers && t.getAll) return t.getAll(r);
                            var n = t.get(r);
                            return n && "string" == typeof n ? [n] : n
                        }, r.getHeaderKeys = function(e) {
                            var r = e,
                                t = {},
                                a = [];
                            return r.keys ? n.iterateHeadersKeys(r, (function(e) {
                                t[e] || (t[e] = !0, a.push(e))
                            })) : r.forEach ? r.forEach((function(e, r) {
                                t[r] || (t[r] = !0, a.push(r))
                            })) : n.iterateHeaders(r, (function(e) {
                                var r = e[0];
                                t[r] || (t[r] = !0, a.push(r))
                            })), a
                        }, r.splitHeaderValue = function(e) {
                            var r = [];
                            return e.split(", ").forEach((function(e) {
                                e.split(",").forEach((function(e) {
                                    r.push(e)
                                }))
                            })), r
                        }
                    }])
                }, e.exports = n()
            }, function(e, r, t) {
                "use strict";
                Object.defineProperty(r, "__esModule", {
                    value: !0
                });
                var n = t(6),
                    a = function(e) {
                        return n.CrossBrowserHttpTransport({
                            withCredentials: !1
                        })(e)
                    };
                r.setDefaultTransportFactory = function(e) {
                    a = e
                }, r.makeDefaultTransport = function(e) {
                    return a(e)
                }
            }, function(e, r, t) {
                "use strict";
                Object.defineProperty(r, "__esModule", {
                    value: !0
                });
                var n = t(7),
                    a = t(8);
                r.CrossBrowserHttpTransport = function(e) {
                    if (n.detectFetchSupport()) {
                        var r = {
                            credentials: e.withCredentials ? "include" : "same-origin"
                        };
                        return n.FetchReadableStreamTransport(r)
                    }
                    return a.XhrTransport({
                        withCredentials: e.withCredentials
                    })
                }
            }, function(e, r, t) {
                "use strict";
                var n = this && this.__assign || function() {
                    return (n = Object.assign || function(e) {
                        for (var r, t = 1, n = arguments.length; t < n; t++)
                            for (var a in r = arguments[t]) Object.prototype.hasOwnProperty.call(r, a) && (e[a] = r[a]);
                        return e
                    }).apply(this, arguments)
                };
                Object.defineProperty(r, "__esModule", {
                    value: !0
                });
                var a = t(0),
                    i = t(1),
                    o = t(2);
                r.FetchReadableStreamTransport = function(e) {
                    return function(r) {
                        return function(e, r) {
                            return e.debug && i.debug("fetchRequest", e), new s(e, r)
                        }(r, e)
                    }
                };
                var s = function() {
                    function e(e, r) {
                        this.cancelled = !1, this.controller = self.AbortController && new AbortController, this.options = e, this.init = r
                    }
                    return e.prototype.pump = function(e, r) {
                        var t = this;
                        if (this.reader = e, this.cancelled) return this.options.debug && i.debug("Fetch.pump.cancel at first pump"), void this.reader.cancel();
                        this.reader.read().then((function(e) {
                            if (e.done) return o.default((function() {
                                t.options.onEnd()
                            })), r;
                            o.default((function() {
                                t.options.onChunk(e.value)
                            })), t.pump(t.reader, r)
                        })).catch((function(e) {
                            t.cancelled ? t.options.debug && i.debug("Fetch.catch - request cancelled") : (t.cancelled = !0, t.options.debug && i.debug("Fetch.catch", e.message), o.default((function() {
                                t.options.onEnd(e)
                            })))
                        }))
                    }, e.prototype.send = function(e) {
                        var r = this;
                        fetch(this.options.url, n({}, this.init, {
                            headers: this.metadata.toHeaders(),
                            method: "POST",
                            body: e,
                            signal: this.controller && this.controller.signal
                        })).then((function(e) {
                            if (r.options.debug && i.debug("Fetch.response", e), o.default((function() {
                                    r.options.onHeaders(new a.Metadata(e.headers), e.status)
                                })), !e.body) return e;
                            r.pump(e.body.getReader(), e)
                        })).catch((function(e) {
                            r.cancelled ? r.options.debug && i.debug("Fetch.catch - request cancelled") : (r.cancelled = !0, r.options.debug && i.debug("Fetch.catch", e.message), o.default((function() {
                                r.options.onEnd(e)
                            })))
                        }))
                    }, e.prototype.sendMessage = function(e) {
                        this.send(e)
                    }, e.prototype.finishSend = function() {}, e.prototype.start = function(e) {
                        this.metadata = e
                    }, e.prototype.cancel = function() {
                        this.cancelled ? this.options.debug && i.debug("Fetch.abort.cancel already cancelled") : (this.cancelled = !0, this.reader ? (this.options.debug && i.debug("Fetch.abort.cancel"), this.reader.cancel()) : this.options.debug && i.debug("Fetch.abort.cancel before reader"), this.controller && this.controller.abort())
                    }, e
                }();
                r.detectFetchSupport = function() {
                    return "undefined" != typeof Response && Response.prototype.hasOwnProperty("body") && "function" == typeof Headers
                }
            }, function(e, r, t) {
                "use strict";
                var n, a = this && this.__extends || (n = function(e, r) {
                    return (n = Object.setPrototypeOf || {
                            __proto__: []
                        }
                        instanceof Array && function(e, r) {
                            e.__proto__ = r
                        } || function(e, r) {
                            for (var t in r) r.hasOwnProperty(t) && (e[t] = r[t])
                        })(e, r)
                }, function(e, r) {
                    function t() {
                        this.constructor = e
                    }
                    n(e, r), e.prototype = null === r ? Object.create(r) : (t.prototype = r.prototype, new t)
                });
                Object.defineProperty(r, "__esModule", {
                    value: !0
                });
                var i = t(0),
                    o = t(1),
                    s = t(2),
                    l = t(12);
                r.XhrTransport = function(e) {
                    return function(r) {
                        if (l.detectMozXHRSupport()) return new u(r, e);
                        if (l.detectXHROverrideMimeTypeSupport()) return new c(r, e);
                        throw new Error("This environment's XHR implementation cannot support binary transfer.")
                    }
                };
                var c = function() {
                    function e(e, r) {
                        this.options = e, this.init = r
                    }
                    return e.prototype.onProgressEvent = function() {
                        var e = this;
                        this.options.debug && o.debug("XHR.onProgressEvent.length: ", this.xhr.response.length);
                        var r = this.xhr.response.substr(this.index);
                        this.index = this.xhr.response.length;
                        var t = h(r);
                        s.default((function() {
                            e.options.onChunk(t)
                        }))
                    }, e.prototype.onLoadEvent = function() {
                        var e = this;
                        this.options.debug && o.debug("XHR.onLoadEvent"), s.default((function() {
                            e.options.onEnd()
                        }))
                    }, e.prototype.onStateChange = function() {
                        var e = this;
                        this.options.debug && o.debug("XHR.onStateChange", this.xhr.readyState), this.xhr.readyState === XMLHttpRequest.HEADERS_RECEIVED && s.default((function() {
                            e.options.onHeaders(new i.Metadata(e.xhr.getAllResponseHeaders()), e.xhr.status)
                        }))
                    }, e.prototype.sendMessage = function(e) {
                        this.xhr.send(e)
                    }, e.prototype.finishSend = function() {}, e.prototype.start = function(e) {
                        var r = this;
                        this.metadata = e;
                        var t = new XMLHttpRequest;
                        this.xhr = t, t.open("POST", this.options.url), this.configureXhr(), this.metadata.forEach((function(e, r) {
                            t.setRequestHeader(e, r.join(", "))
                        })), t.withCredentials = Boolean(this.init.withCredentials), t.addEventListener("readystatechange", this.onStateChange.bind(this)), t.addEventListener("progress", this.onProgressEvent.bind(this)), t.addEventListener("loadend", this.onLoadEvent.bind(this)), t.addEventListener("error", (function(e) {
                            r.options.debug && o.debug("XHR.error", e), s.default((function() {
                                r.options.onEnd(e.error)
                            }))
                        }))
                    }, e.prototype.configureXhr = function() {
                        this.xhr.responseType = "text", this.xhr.overrideMimeType("text/plain; charset=x-user-defined")
                    }, e.prototype.cancel = function() {
                        this.options.debug && o.debug("XHR.abort"), this.xhr.abort()
                    }, e
                }();
                r.XHR = c;
                var u = function(e) {
                    function r() {
                        return null !== e && e.apply(this, arguments) || this
                    }
                    return a(r, e), r.prototype.configureXhr = function() {
                        this.options.debug && o.debug("MozXHR.configureXhr: setting responseType to 'moz-chunked-arraybuffer'"), this.xhr.responseType = "moz-chunked-arraybuffer"
                    }, r.prototype.onProgressEvent = function() {
                        var e = this,
                            r = this.xhr.response;
                        this.options.debug && o.debug("MozXHR.onProgressEvent: ", new Uint8Array(r)), s.default((function() {
                            e.options.onChunk(new Uint8Array(r))
                        }))
                    }, r
                }(c);

                function d(e, r) {
                    var t = e.charCodeAt(r);
                    if (t >= 55296 && t <= 56319) {
                        var n = e.charCodeAt(r + 1);
                        n >= 56320 && n <= 57343 && (t = 65536 + (t - 55296 << 10) + (n - 56320))
                    }
                    return t
                }

                function h(e) {
                    for (var r = new Uint8Array(e.length), t = 0, n = 0; n < e.length; n++) {
                        var a = String.prototype.codePointAt ? e.codePointAt(n) : d(e, n);
                        r[t++] = 255 & a
                    }
                    return r
                }
                r.MozChunkedArrayBufferXHR = u, r.stringToArrayBuffer = h
            }, function(e, r, t) {
                "use strict";
                Object.defineProperty(r, "__esModule", {
                    value: !0
                });
                var n, a = t(0);

                function i(e) {
                    return function(e) {
                        return 9 === e || 10 === e || 13 === e
                    }(e) || e >= 32 && e <= 126
                }

                function o(e) {
                    for (var r = 0; r !== e.length; ++r)
                        if (!i(e[r])) throw new Error("Metadata is not valid (printable) ASCII");
                    return String.fromCharCode.apply(String, Array.prototype.slice.call(e))
                }

                function s(e) {
                    return 128 == (128 & e.getUint8(0))
                }

                function l(e) {
                    return e.getUint32(1, !1)
                }

                function c(e, r, t) {
                    return e.byteLength - r >= t
                }

                function u(e, r, t) {
                    if (e.slice) return e.slice(r, t);
                    var n = e.length;
                    void 0 !== t && (n = t);
                    for (var a = new Uint8Array(n - r), i = 0, o = r; o < n; o++) a[i++] = e[o];
                    return a
                }
                r.decodeASCII = o, r.encodeASCII = function(e) {
                        for (var r = new Uint8Array(e.length), t = 0; t !== e.length; ++t) {
                            var n = e.charCodeAt(t);
                            if (!i(n)) throw new Error("Metadata contains invalid ASCII");
                            r[t] = n
                        }
                        return r
                    },
                    function(e) {
                        e[e.MESSAGE = 1] = "MESSAGE", e[e.TRAILERS = 2] = "TRAILERS"
                    }(n = r.ChunkType || (r.ChunkType = {}));
                var d = function() {
                    function e() {
                        this.buffer = null, this.position = 0
                    }
                    return e.prototype.parse = function(e, r) {
                        if (0 === e.length && r) return [];
                        var t, i = [];
                        if (null == this.buffer) this.buffer = e, this.position = 0;
                        else if (this.position === this.buffer.byteLength) this.buffer = e, this.position = 0;
                        else {
                            var d = this.buffer.byteLength - this.position,
                                h = new Uint8Array(d + e.byteLength),
                                p = u(this.buffer, this.position);
                            h.set(p, 0);
                            var f = new Uint8Array(e);
                            h.set(f, d), this.buffer = h, this.position = 0
                        }
                        for (;;) {
                            if (!c(this.buffer, this.position, 5)) return i;
                            var y = u(this.buffer, this.position, this.position + 5),
                                g = new DataView(y.buffer, y.byteOffset, y.byteLength),
                                m = l(g);
                            if (!c(this.buffer, this.position, 5 + m)) return i;
                            var b = u(this.buffer, this.position + 5, this.position + 5 + m);
                            if (this.position += 5 + m, s(g)) return i.push({
                                chunkType: n.TRAILERS,
                                trailers: (t = b, new a.Metadata(o(t)))
                            }), i;
                            i.push({
                                chunkType: n.MESSAGE,
                                data: b
                            })
                        }
                    }, e
                }();
                r.ChunkParser = d
            }, function(e, r, t) {
                "use strict";
                var n;
                Object.defineProperty(r, "__esModule", {
                        value: !0
                    }),
                    function(e) {
                        e[e.OK = 0] = "OK", e[e.Canceled = 1] = "Canceled", e[e.Unknown = 2] = "Unknown", e[e.InvalidArgument = 3] = "InvalidArgument", e[e.DeadlineExceeded = 4] = "DeadlineExceeded", e[e.NotFound = 5] = "NotFound", e[e.AlreadyExists = 6] = "AlreadyExists", e[e.PermissionDenied = 7] = "PermissionDenied", e[e.ResourceExhausted = 8] = "ResourceExhausted", e[e.FailedPrecondition = 9] = "FailedPrecondition", e[e.Aborted = 10] = "Aborted", e[e.OutOfRange = 11] = "OutOfRange", e[e.Unimplemented = 12] = "Unimplemented", e[e.Internal = 13] = "Internal", e[e.Unavailable = 14] = "Unavailable", e[e.DataLoss = 15] = "DataLoss", e[e.Unauthenticated = 16] = "Unauthenticated"
                    }(n = r.Code || (r.Code = {})), r.httpStatusToCode = function(e) {
                        switch (e) {
                            case 0:
                                return n.Internal;
                            case 200:
                                return n.OK;
                            case 400:
                                return n.InvalidArgument;
                            case 401:
                                return n.Unauthenticated;
                            case 403:
                                return n.PermissionDenied;
                            case 404:
                                return n.NotFound;
                            case 409:
                                return n.Aborted;
                            case 412:
                                return n.FailedPrecondition;
                            case 429:
                                return n.ResourceExhausted;
                            case 499:
                                return n.Canceled;
                            case 500:
                                return n.Unknown;
                            case 501:
                                return n.Unimplemented;
                            case 503:
                                return n.Unavailable;
                            case 504:
                                return n.DeadlineExceeded;
                            default:
                                return n.Unknown
                        }
                    }
            }, function(e, r, t) {
                "use strict";
                Object.defineProperty(r, "__esModule", {
                    value: !0
                });
                var n = t(4),
                    a = t(5),
                    i = t(7),
                    o = t(13),
                    s = t(8),
                    l = t(6),
                    c = t(10),
                    u = t(14),
                    d = t(16),
                    h = t(3);
                ! function(e) {
                    e.setDefaultTransport = a.setDefaultTransportFactory, e.CrossBrowserHttpTransport = l.CrossBrowserHttpTransport, e.FetchReadableStreamTransport = i.FetchReadableStreamTransport, e.XhrTransport = s.XhrTransport, e.WebsocketTransport = o.WebsocketTransport, e.Code = c.Code, e.Metadata = n.BrowserHeaders, e.client = function(e, r) {
                        return h.client(e, r)
                    }, e.invoke = u.invoke, e.unary = d.unary
                }(r.grpc || (r.grpc = {}))
            }, function(e, r, t) {
                "use strict";
                var n;

                function a(e) {
                    var r = function() {
                        if (void 0 !== n) return n;
                        if (XMLHttpRequest) {
                            n = new XMLHttpRequest;
                            try {
                                n.open("GET", "https://localhost")
                            } catch (e) {}
                        }
                        return n
                    }();
                    if (!r) return !1;
                    try {
                        return r.responseType = e, r.responseType === e
                    } catch (e) {}
                    return !1
                }
                Object.defineProperty(r, "__esModule", {
                    value: !0
                }), r.xhrSupportsResponseType = a, r.detectMozXHRSupport = function() {
                    return "undefined" != typeof XMLHttpRequest && a("moz-chunked-arraybuffer")
                }, r.detectXHROverrideMimeTypeSupport = function() {
                    return "undefined" != typeof XMLHttpRequest && XMLHttpRequest.prototype.hasOwnProperty("overrideMimeType")
                }
            }, function(e, r, t) {
                "use strict";
                Object.defineProperty(r, "__esModule", {
                    value: !0
                });
                var n, a = t(1),
                    i = t(2),
                    o = t(9);
                ! function(e) {
                    e[e.FINISH_SEND = 1] = "FINISH_SEND"
                }(n || (n = {}));
                var s = new Uint8Array([1]);
                r.WebsocketTransport = function() {
                    return function(e) {
                        return function(e) {
                            e.debug && a.debug("websocketRequest", e);
                            var r, t = function(e) {
                                    if ("https://" === e.substr(0, 8)) return "wss://" + e.substr(8);
                                    if ("http://" === e.substr(0, 7)) return "ws://" + e.substr(7);
                                    throw new Error("Websocket transport constructed with non-https:// or http:// host.")
                                }(e.url),
                                l = [];

                            function c(e) {
                                if (e === n.FINISH_SEND) r.send(s);
                                else {
                                    var t = e,
                                        a = new Int8Array(t.byteLength + 1);
                                    a.set(new Uint8Array([0])), a.set(t, 1), r.send(a)
                                }
                            }
                            return {
                                sendMessage: function(e) {
                                    r && r.readyState !== r.CONNECTING ? c(e) : l.push(e)
                                },
                                finishSend: function() {
                                    r && r.readyState !== r.CONNECTING ? c(n.FINISH_SEND) : l.push(n.FINISH_SEND)
                                },
                                start: function(n) {
                                    (r = new WebSocket(t, ["grpc-websockets"])).binaryType = "arraybuffer", r.onopen = function() {
                                        var t;
                                        e.debug && a.debug("websocketRequest.onopen"), r.send((t = "", n.forEach((function(e, r) {
                                            t += e + ": " + r.join(", ") + "\r\n"
                                        })), o.encodeASCII(t))), l.forEach((function(e) {
                                            c(e)
                                        }))
                                    }, r.onclose = function(r) {
                                        e.debug && a.debug("websocketRequest.onclose", r), i.default((function() {
                                            e.onEnd()
                                        }))
                                    }, r.onerror = function(r) {
                                        e.debug && a.debug("websocketRequest.onerror", r)
                                    }, r.onmessage = function(r) {
                                        i.default((function() {
                                            e.onChunk(new Uint8Array(r.data))
                                        }))
                                    }
                                },
                                cancel: function() {
                                    e.debug && a.debug("websocket.abort"), i.default((function() {
                                        r.close()
                                    }))
                                }
                            }
                        }(e)
                    }
                }
            }, function(e, r, t) {
                "use strict";
                Object.defineProperty(r, "__esModule", {
                    value: !0
                });
                var n = t(3);
                r.invoke = function(e, r) {
                    if (e.requestStream) throw new Error(".invoke cannot be used with client-streaming methods. Use .client instead.");
                    var t = n.client(e, {
                        host: r.host,
                        transport: r.transport,
                        debug: r.debug
                    });
                    return r.onHeaders && t.onHeaders(r.onHeaders), r.onMessage && t.onMessage(r.onMessage), r.onEnd && t.onEnd(r.onEnd), t.start(r.metadata), t.send(r.request), t.finishSend(), {
                        close: function() {
                            t.close()
                        }
                    }
                }
            }, function(e, r, t) {
                "use strict";
                Object.defineProperty(r, "__esModule", {
                    value: !0
                }), r.frameRequest = function(e) {
                    var r = e.serializeBinary(),
                        t = new ArrayBuffer(r.byteLength + 5);
                    return new DataView(t, 1, 4).setUint32(0, r.length, !1), new Uint8Array(t, 5).set(r), new Uint8Array(t)
                }
            }, function(e, r, t) {
                "use strict";
                Object.defineProperty(r, "__esModule", {
                    value: !0
                });
                var n = t(0),
                    a = t(3);
                r.unary = function(e, r) {
                    if (e.responseStream) throw new Error(".unary cannot be used with server-streaming methods. Use .invoke or .client instead.");
                    if (e.requestStream) throw new Error(".unary cannot be used with client-streaming methods. Use .client instead.");
                    var t = null,
                        i = null,
                        o = a.client(e, {
                            host: r.host,
                            transport: r.transport,
                            debug: r.debug
                        });
                    return o.onHeaders((function(e) {
                        t = e
                    })), o.onMessage((function(e) {
                        i = e
                    })), o.onEnd((function(e, a, o) {
                        r.onEnd({
                            status: e,
                            statusMessage: a,
                            headers: t || new n.Metadata,
                            message: i,
                            trailers: o
                        })
                    })), o.start(r.metadata), o.send(r.request), o.finishSend(), {
                        close: function() {
                            o.close()
                        }
                    }
                }
            }])
        },
        65: function(e, r, t) {
            "use strict";
            t.d(r, "f", (function() {
                return PrivateKey_PrivateKey
            })), t.d(r, "g", (function() {
                return PublicKey_PublicKey
            })), t.d(r, "e", (function() {
                return Mnemonic_Mnemonic
            })), t.d(r, "d", (function() {
                return F
            })), t.d(r, "h", (function() {
                return G
            })), t.d(r, "i", (function() {
                return V
            })), t.d(r, "a", (function() {
                return BadKeyError
            })), t.d(r, "b", (function() {
                return BadMnemonicError_BadMnemonicError
            })), t.d(r, "c", (function() {
                return f
            }));
            class Key {}
            Symbol.iterator;
            var n = {
                privateKeyConstructor: null,
                privateKeyFromBytes: null
            };
            class BadKeyError extends Error {
                constructor(e) {
                    super(e instanceof Error ? e.message : e), this.name = "BadKeyError", e instanceof Error && (this.cause = e, this.stack = e.stack)
                }
            }
            var a = t(73),
                i = t.n(a);

            function o(e, r) {
                if (e === r) return !0;
                if (e.byteLength !== r.byteLength) return !1;
                const t = new DataView(e.buffer, e.byteOffset, e.byteLength),
                    n = new DataView(r.buffer, r.byteOffset, r.byteLength);
                let a = e.byteLength;
                for (; a--;)
                    if (t.getUint8(a) !== n.getUint8(a)) return !1;
                return !0
            }

            function s(e, r) {
                if (e.byteLength < r.byteLength) return !1;
                let t = r.byteLength;
                for (; t--;)
                    if (e[t] !== r[t]) return !1;
                return !0
            }
            const l = [];
            for (let e = 0; e <= 255; e += 1) l.push(e.toString(16).padStart(2, "0"));

            function c(e) {
                let r = "";
                for (const t of e) r += l[t];
                return r
            }

            function u(e) {
                const r = (e.startsWith("0x") ? e.substring(2) : e).match(/.{1,2}/gu);
                return new Uint8Array((null == r ? [] : r).map(e => parseInt(e, 16)))
            }
            const d = u("302a300506032b6570032100");
            class Ed25519PublicKey_Ed25519PublicKey extends Key {
                constructor(e) {
                    super(), this._keyData = e
                }
                get _type() {
                    return "ED25519"
                }
                static fromBytes(e) {
                    switch (e.length) {
                        case 32:
                            return Ed25519PublicKey_Ed25519PublicKey.fromBytesRaw(e);
                        case 44:
                            return Ed25519PublicKey_Ed25519PublicKey.fromBytesDer(e);
                        default:
                            throw new BadKeyError(`invalid public key length: ${e.length} bytes`)
                    }
                }
                static fromBytesDer(e) {
                    if (44 != e.length || !s(e, d)) throw new BadKeyError(`invalid public key length: ${e.length} bytes`);
                    return new Ed25519PublicKey_Ed25519PublicKey(e.subarray(12))
                }
                static fromBytesRaw(e) {
                    if (32 != e.length) throw new BadKeyError(`invalid public key length: ${e.length} bytes`);
                    return new Ed25519PublicKey_Ed25519PublicKey(e)
                }
                static fromString(e) {
                    return Ed25519PublicKey_Ed25519PublicKey.fromBytes(u(e))
                }
                verify(e, r) {
                    return i.a.sign.detached.verify(e, r, this._keyData)
                }
                toBytesDer() {
                    const e = new Uint8Array(d.length + 32);
                    return e.set(d, 0), e.set(this._keyData.subarray(0, 32), d.length), e
                }
                toBytesRaw() {
                    return this._keyData.slice()
                }
                equals(e) {
                    return o(this._keyData, e._keyData)
                }
            }

            function h(e) {
                return Promise.resolve(i.a.randomBytes(e))
            }
            const p = u("302e020100300506032b657004220420");
            class Ed25519PrivateKey_Ed25519PrivateKey {
                constructor(e, r) {
                    this._keyPair = e instanceof Uint8Array ? i.a.sign.keyPair.fromSeed(e) : e, this._chainCode = null != r ? r : null
                }
                get _type() {
                    return "ED25519"
                }
                static generate() {
                    const e = (r = 64, i.a.randomBytes(r));
                    var r;
                    return new Ed25519PrivateKey_Ed25519PrivateKey(i.a.sign.keyPair.fromSeed(e.subarray(0, 32)), e.subarray(32))
                }
                static async generateAsync() {
                    const e = await h(64);
                    return new Ed25519PrivateKey_Ed25519PrivateKey(i.a.sign.keyPair.fromSeed(e.subarray(0, 32)), e.subarray(32))
                }
                static fromBytes(e) {
                    switch (e.length) {
                        case 48:
                            return Ed25519PrivateKey_Ed25519PrivateKey.fromBytesDer(e);
                        case 32:
                        case 64:
                            return Ed25519PrivateKey_Ed25519PrivateKey.fromBytesRaw(e);
                        default:
                            throw new BadKeyError(`invalid private key length: ${e.length} bytes`)
                    }
                }
                static fromBytesDer(e) {
                    if (48 != e.length || !s(e, p)) throw new BadKeyError(`invalid private key length: ${e.length} bytes`);
                    const r = i.a.sign.keyPair.fromSeed(e.subarray(16));
                    return new Ed25519PrivateKey_Ed25519PrivateKey(r)
                }
                static fromBytesRaw(e) {
                    switch (e.length) {
                        case 32:
                            return new Ed25519PrivateKey_Ed25519PrivateKey(i.a.sign.keyPair.fromSeed(e));
                        case 64:
                            return new Ed25519PrivateKey_Ed25519PrivateKey(i.a.sign.keyPair.fromSecretKey(e))
                    }
                    throw new BadKeyError(`invalid private key length: ${e.length} bytes`)
                }
                static fromString(e) {
                    return Ed25519PrivateKey_Ed25519PrivateKey.fromBytes(u(e))
                }
                static fromStringDer(e) {
                    return Ed25519PrivateKey_Ed25519PrivateKey.fromBytesDer(u(e))
                }
                static fromStringRaw(e) {
                    return Ed25519PrivateKey_Ed25519PrivateKey.fromBytesRaw(u(e))
                }
                get publicKey() {
                    return new Ed25519PublicKey_Ed25519PublicKey(this._keyPair.publicKey)
                }
                sign(e) {
                    return i.a.sign.detached(e, this._keyPair.secretKey)
                }
                toBytesDer() {
                    const e = new Uint8Array(p.length + 32);
                    return e.set(p, 0), e.set(this._keyPair.secretKey.subarray(0, 32), p.length), e
                }
                toBytesRaw() {
                    return this._keyPair.secretKey.slice(0, 32)
                }
            }
            var f = Object.freeze({
                BadLength: "BadLength",
                UnknownWords: "UnknownWords",
                ChecksumMismatch: "ChecksumMismatch"
            });
            class BadMnemonicError_BadMnemonicError extends Error {
                constructor(e, r, t) {
                    let n;
                    switch (r) {
                        case f.BadLength:
                            n = "mnemonic is of an unexpected number of words";
                            break;
                        case f.ChecksumMismatch:
                            n = "checksum byte in mnemonic did not match the rest of the mnemonic";
                            break;
                        case f.UnknownWords:
                            n = "mnemonic contained words that are not in the standard word list";
                            break;
                        default:
                            throw new Error(`unexpected value ${r.toString()} for 'reason'`)
                    }
                    super("invalid mnemonic: " + n), void 0 !== Error.captureStackTrace && Error.captureStackTrace(this, BadMnemonicError_BadMnemonicError), this.name = "BadMnemonicError", this.reason = r, this.mnemonic = e, this.unknownWordIndices = t
                }
            }
            var y = ["aback", "abbey", "abbot", "abide", "ablaze", "able", "aboard", "abode", "abort", "abound", "about", "above", "abroad", "abrupt", "absent", "absorb", "absurd", "abuse", "accent", "accept", "access", "accord", "accuse", "ace", "ache", "aching", "acid", "acidic", "acorn", "acre", "across", "act", "action", "active", "actor", "actual", "acute", "adam", "adapt", "add", "added", "addict", "adept", "adhere", "adjust", "admire", "admit", "adobe", "adopt", "adrift", "adult", "adverb", "advice", "aerial", "afar", "affair", "affect", "afford", "afghan", "afield", "afloat", "afraid", "afresh", "after", "again", "age", "agency", "agenda", "agent", "aghast", "agile", "ago", "agony", "agree", "agreed", "ahead", "aid", "aide", "aim", "air", "airman", "airy", "akin", "alarm", "alaska", "albeit", "album", "ale", "alert", "alibi", "alice", "alien", "alight", "align", "alike", "alive", "alkali", "all", "alley", "allied", "allow", "alloy", "ally", "almond", "almost", "aloft", "alone", "along", "aloof", "aloud", "alpha", "alpine", "also", "altar", "alter", "always", "amaze", "amazon", "amber", "ambush", "amen", "amend", "amid", "amidst", "amiss", "among", "amount", "ample", "amuse", "anchor", "and", "andrew", "anew", "angel", "anger", "angle", "angry", "animal", "ankle", "annoy", "annual", "answer", "anthem", "any", "anyhow", "anyway", "apart", "apathy", "apex", "apiece", "appeal", "appear", "apple", "apply", "april", "apron", "arab", "arcade", "arcane", "arch", "arctic", "ardent", "are", "area", "argue", "arid", "arise", "ark", "arm", "armful", "army", "aroma", "around", "arouse", "array", "arrest", "arrive", "arrow", "arson", "art", "artery", "artful", "artist", "ascent", "ash", "ashen", "ashore", "aside", "ask", "asleep", "aspect", "assay", "assent", "assert", "assess", "asset", "assign", "assist", "assume", "assure", "asthma", "astute", "asylum", "ate", "athens", "atlas", "atom", "atomic", "attach", "attack", "attain", "attend", "attic", "auburn", "audio", "audit", "august", "aunt", "auntie", "aura", "austin", "author", "auto", "autumn", "avail", "avenge", "avenue", "avert", "avid", "avoid", "await", "awake", "awaken", "award", "aware", "awash", "away", "awful", "awhile", "axe", "axes", "axiom", "axis", "axle", "aye", "babe", "baby", "bach", "back", "backup", "bacon", "bad", "badge", "badly", "bag", "baggy", "bail", "bait", "bake", "baker", "bakery", "bald", "ball", "ballad", "ballet", "ballot", "baltic", "bamboo", "ban", "banal", "banana", "band", "bang", "bank", "bar", "barber", "bare", "barely", "barge", "bark", "barley", "barn", "baron", "barrel", "barren", "basalt", "base", "basic", "basil", "basin", "basis", "basket", "bass", "bat", "batch", "bath", "baton", "battle", "bay", "beach", "beacon", "beak", "beam", "bean", "bear", "beard", "beast", "beat", "beauty", "become", "bed", "beech", "beef", "beefy", "beep", "beer", "beet", "beetle", "before", "beg", "beggar", "begin", "behalf", "behave", "behind", "beige", "being", "belief", "bell", "belly", "belong", "below", "belt", "bench", "bend", "benign", "bent", "berlin", "berry", "berth", "beset", "beside", "best", "bestow", "bet", "beta", "betray", "better", "beware", "beyond", "bias", "biceps", "bicker", "bid", "big", "bigger", "bike", "bile", "bill", "bin", "binary", "bind", "biopsy", "birch", "bird", "birdie", "birth", "bishop", "bit", "bitch", "bite", "bitter", "black", "blade", "blame", "bland", "blast", "blaze", "bleak", "blend", "bless", "blew", "blind", "blink", "blip", "bliss", "blitz", "block", "blond", "blood", "bloody", "bloom", "blot", "blouse", "blow", "blue", "bluff", "blunt", "blur", "blush", "boar", "board", "boast", "boat", "bob", "bodily", "body", "bogus", "boil", "bold", "bolt", "bomb", "bombay", "bond", "bone", "bonn", "bonnet", "bonus", "bony", "book", "boom", "boost", "boot", "booth", "booze", "border", "bore", "borrow", "bosom", "boss", "boston", "both", "bother", "bottle", "bottom", "bought", "bounce", "bound", "bounty", "bout", "bovine", "bow", "bowel", "bowl", "box", "boy", "boyish", "brace", "brain", "brainy", "brake", "bran", "branch", "brand", "brandy", "brass", "brave", "bravo", "brazil", "breach", "bread", "break", "breast", "breath", "bred", "breed", "breeze", "brew", "bribe", "brick", "bride", "bridge", "brief", "bright", "brim", "brine", "bring", "brink", "brisk", "broad", "broke", "broken", "bronze", "brook", "broom", "brown", "bruise", "brush", "brutal", "brute", "bubble", "buck", "bucket", "buckle", "budget", "buffet", "buggy", "build", "bulb", "bulge", "bulk", "bulky", "bull", "bullet", "bully", "bump", "bumpy", "bunch", "bundle", "bunk", "bunny", "burden", "bureau", "burial", "buried", "burly", "burn", "burnt", "burrow", "burst", "bury", "bus", "bush", "bust", "bustle", "busy", "but", "butler", "butt", "butter", "button", "buy", "buyer", "buzz", "bye", "byte", "cab", "cabin", "cable", "cache", "cactus", "caesar", "cage", "cairo", "cajun", "cajole", "cake", "calf", "call", "caller", "calm", "calmly", "came", "camel", "camera", "camp", "campus", "can", "canada", "canal", "canary", "cancel", "cancer", "candid", "candle", "candy", "cane", "canine", "canoe", "canopy", "canvas", "canyon", "cap", "cape", "car", "carbon", "card", "care", "career", "caress", "cargo", "carl", "carnal", "carol", "carp", "carpet", "carrot", "carry", "cart", "cartel", "case", "cash", "cask", "cast", "castle", "casual", "cat", "catch", "cater", "cattle", "caught", "causal", "cause", "cave", "cease", "celery", "cell", "cellar", "celtic", "cement", "censor", "census", "cent", "cereal", "chain", "chair", "chalk", "chalky", "champ", "chance", "change", "chant", "chaos", "chap", "chapel", "charge", "charm", "chart", "chase", "chat", "cheap", "cheat", "check", "cheek", "cheeky", "cheer", "cheery", "cheese", "chef", "cheque", "cherry", "chess", "chest", "chew", "chic", "chick", "chief", "child", "chile", "chill", "chilly", "chin", "china", "chip", "choice", "choir", "choose", "chop", "choppy", "chord", "chorus", "chose", "chosen", "chris", "chrome", "chunk", "chunky", "church", "cider", "cigar", "cinema", "circa", "circle", "circus", "cite", "city", "civic", "civil", "clad", "claim", "clammy", "clan", "clap", "clash", "clasp", "class", "clause", "claw", "clay", "clean", "clear", "clergy", "clerk", "clever", "click", "client", "cliff", "climax", "climb", "clinch", "cling", "clinic", "clip", "cloak", "clock", "clone", "close", "closer", "closet", "cloth", "cloud", "cloudy", "clout", "clown", "club", "clue", "clumsy", "clung", "clutch", "coach", "coal", "coarse", "coast", "coat", "coax", "cobalt", "cobra", "coca", "cock", "cocoa", "code", "coffee", "coffin", "cohort", "coil", "coin", "coke", "cold", "collar", "colon", "colony", "colt", "column", "comb", "combat", "come", "comedy", "comic", "commit", "common", "compel", "comply", "concur", "cone", "confer", "congo", "consul", "convex", "convey", "convoy", "cook", "cool", "cope", "copper", "copy", "coral", "cord", "core", "cork", "corn", "corner", "corps", "corpse", "corpus", "cortex", "cosmic", "cosmos", "cost", "costly", "cotton", "couch", "cough", "could", "count", "county", "coup", "couple", "coupon", "course", "court", "cousin", "cove", "cover", "covert", "cow", "coward", "cowboy", "cozy", "crab", "crack", "cradle", "craft", "crafty", "crag", "crane", "crash", "crate", "crater", "crawl", "crazy", "creak", "cream", "creamy", "create", "credit", "creed", "creek", "creep", "creepy", "crept", "crest", "crew", "cried", "crime", "crisis", "crisp", "critic", "crook", "crop", "cross", "crow", "crowd", "crown", "crude", "cruel", "cruise", "crunch", "crush", "crust", "crux", "cry", "crypt", "cuba", "cube", "cubic", "cuckoo", "cuff", "cult", "cup", "curb", "cure", "curfew", "curl", "curry", "curse", "cursor", "curve", "cuss", "custom", "cut", "cute", "cycle", "cyclic", "cynic", "czech", "dad", "daddy", "dagger", "daily", "dairy", "daisy", "dale", "dam", "damage", "damp", "dampen", "dance", "danger", "danish", "dare", "dark", "darken", "darn", "dart", "dash", "data", "date", "david", "dawn", "day", "dead", "deadly", "deaf", "deal", "dealer", "dean", "dear", "death", "debate", "debit", "debris", "debt", "debtor", "decade", "decay", "decent", "decide", "deck", "decor", "decree", "deduce", "deed", "deep", "deeply", "deer", "defeat", "defect", "defend", "defer", "define", "defy", "degree", "deity", "delay", "delete", "delhi", "delta", "demand", "demise", "demo", "demure", "denial", "denote", "dense", "dental", "deny", "depart", "depend", "depict", "deploy", "depot", "depth", "deputy", "derive", "desert", "design", "desire", "desist", "desk", "detail", "detect", "deter", "detest", "detour", "device", "devise", "devoid", "devote", "devour", "dial", "diana", "diary", "dice", "dictum", "did", "die", "diesel", "diet", "differ", "dig", "digest", "digit", "dine", "dinghy", "dinner", "diode", "dip", "dire", "direct", "dirt", "dirty", "disc", "disco", "dish", "disk", "dismal", "dispel", "ditch", "dive", "divert", "divide", "divine", "dizzy", "docile", "dock", "doctor", "dog", "dogma", "dole", "doll", "dollar", "dolly", "domain", "dome", "domino", "donate", "done", "donkey", "donor", "doom", "door", "dorsal", "dose", "dot", "double", "doubt", "dough", "dour", "dove", "down", "dozen", "draft", "drag", "dragon", "drain", "drama", "drank", "draw", "drawer", "dread", "dream", "dreary", "dress", "drew", "dried", "drift", "drill", "drink", "drip", "drive", "driver", "drop", "drove", "drown", "drug", "drum", "drunk", "dry", "dual", "duck", "duct", "due", "duel", "duet", "duke", "dull", "duly", "dumb", "dummy", "dump", "dune", "dung", "duress", "during", "dusk", "dust", "dusty", "dutch", "duty", "dwarf", "dwell", "dyer", "dying", "dynamo", "each", "eager", "eagle", "ear", "earl", "early", "earn", "earth", "ease", "easel", "easily", "east", "easter", "easy", "eat", "eaten", "eater", "echo", "eddy", "eden", "edge", "edible", "edict", "edit", "editor", "eel", "eerie", "eerily", "effect", "effort", "egg", "ego", "eight", "eighth", "eighty", "either", "elbow", "elder", "eldest", "elect", "eleven", "elicit", "elite", "else", "elude", "elves", "embark", "emblem", "embryo", "emerge", "emit", "empire", "employ", "empty", "enable", "enamel", "end", "endure", "enemy", "energy", "engage", "engine", "enjoy", "enlist", "enough", "ensure", "entail", "enter", "entire", "entry", "envoy", "envy", "enzyme", "epic", "epoch", "equal", "equate", "equip", "equity", "era", "erect", "eric", "erode", "erotic", "errant", "error", "escape", "escort", "essay", "essex", "estate", "esteem", "ethic", "ethnic", "europe", "evade", "eve", "even", "event", "ever", "every", "evict", "evil", "evoke", "evolve", "exact", "exam", "exceed", "excel", "except", "excess", "excise", "excite", "excuse", "exempt", "exert", "exile", "exist", "exit", "exodus", "exotic", "expand", "expect", "expert", "expire", "export", "expose", "extend", "extra", "eye", "eyed", "fabric", "face", "facial", "fact", "factor", "fade", "fail", "faint", "fair", "fairly", "fairy", "faith", "fake", "falcon", "fall", "false", "falter", "fame", "family", "famine", "famous", "fan", "fancy", "far", "farce", "fare", "farm", "farmer", "fast", "fasten", "faster", "fat", "fatal", "fate", "father", "fatty", "fault", "faulty", "fauna", "fear", "feast", "feat", "fed", "fee", "feeble", "feed", "feel", "feet", "fell", "fellow", "felt", "female", "fence", "fend", "ferry", "fetal", "fetch", "feudal", "fever", "few", "fewer", "fiasco", "fiddle", "field", "fiend", "fierce", "fiery", "fifth", "fifty", "fig", "fight", "figure", "file", "fill", "filled", "filler", "film", "filter", "filth", "filthy", "final", "finale", "find", "fine", "finery", "finger", "finish", "finite", "fire", "firm", "firmly", "first", "fiscal", "fish", "fisher", "fist", "fit", "fitful", "five", "fix", "flag", "flair", "flak", "flame", "flank", "flap", "flare", "flash", "flask", "flat", "flavor", "flaw", "fled", "flee", "fleece", "fleet", "flesh", "fleshy", "flew", "flick", "flight", "flimsy", "flint", "flirt", "float", "flock", "flood", "floor", "floppy", "flora", "floral", "flour", "flow", "flower", "fluent", "fluffy", "fluid", "flung", "flurry", "flush", "flute", "flux", "fly", "flyer", "foal", "foam", "focal", "focus", "fog", "foil", "fold", "folk", "follow", "folly", "fond", "fondly", "font", "food", "fool", "foot", "for", "forbid", "force", "ford", "forest", "forge", "forget", "fork", "form", "formal", "format", "former", "fort", "forth", "forty", "forum", "fossil", "foster", "foul", "found", "four", "fourth", "fox", "foyer", "frail", "frame", "franc", "france", "frank", "fraud", "fred", "free", "freed", "freely", "freeze", "french", "frenzy", "fresh", "friar", "friday", "fridge", "fried", "friend", "fright", "fringe", "frock", "frog", "from", "front", "frost", "frosty", "frown", "frozen", "frugal", "fruit", "fry", "fudge", "fuel", "full", "fully", "fumes", "fun", "fund", "funny", "fur", "furry", "fury", "fuse", "fusion", "fuss", "fussy", "futile", "future", "fuzzy", "gadget", "gain", "gala", "galaxy", "gale", "gall", "galley", "gallon", "gallop", "gamble", "game", "gamma", "gandhi", "gang", "gap", "garage", "garden", "garlic", "gas", "gasp", "gate", "gather", "gauge", "gaunt", "gave", "gaze", "gear", "geese", "gem", "gemini", "gender", "gene", "geneva", "genial", "genius", "genre", "gentle", "gently", "gentry", "genus", "george", "germ", "get", "ghetto", "ghost", "giant", "gift", "giggle", "gill", "gilt", "ginger", "girl", "give", "given", "glad", "glade", "glance", "gland", "glare", "glass", "glassy", "gleam", "glee", "glide", "global", "globe", "gloom", "gloomy", "gloria", "glory", "gloss", "glossy", "glove", "glow", "glue", "gnat", "gnu", "goal", "goat", "gold", "golden", "golf", "gone", "gong", "goo", "good", "goose", "gore", "gorge", "gory", "gosh", "gospel", "gossip", "got", "gothic", "govern", "gown", "grab", "grace", "grade", "grail", "grain", "grand", "grant", "grape", "graph", "grasp", "grass", "grassy", "grate", "grave", "gravel", "gravy", "grease", "greasy", "great", "greece", "greed", "greedy", "greek", "green", "greet", "grew", "grey", "grid", "grief", "grill", "grim", "grin", "grind", "grip", "grit", "gritty", "groan", "groin", "groom", "groove", "gross", "ground", "group", "grove", "grow", "grown", "growth", "grudge", "grunt", "guard", "guess", "guest", "guide", "guild", "guilt", "guilty", "guise", "guitar", "gulf", "gully", "gun", "gunman", "guru", "gut", "guy", "gypsy", "habit", "hack", "had", "hail", "hair", "hairy", "haiti", "hale", "half", "hall", "halt", "hamlet", "hammer", "hand", "handle", "handy", "hang", "hangar", "hanoi", "happen", "happy", "harass", "harbor", "hard", "harder", "hardly", "hare", "harem", "harm", "harp", "harry", "harsh", "has", "hash", "hassle", "haste", "hasten", "hasty", "hat", "hatch", "hate", "haul", "haunt", "havana", "have", "haven", "havoc", "hawaii", "hawk", "hay", "hazard", "haze", "hazel", "hazy", "head", "heal", "health", "heap", "hear", "heard", "heart", "hearth", "hearty", "heat", "heater", "heaven", "heavy", "hebrew", "heck", "hectic", "hedge", "heel", "hefty", "height", "heir", "held", "helium", "helix", "hell", "hello", "helm", "helmet", "help", "hemp", "hence", "henry", "her", "herald", "herb", "herd", "here", "hereby", "hermes", "hernia", "hero", "heroic", "heroin", "hey", "heyday", "hick", "hidden", "hide", "high", "higher", "highly", "hill", "him", "hind", "hinder", "hint", "hippie", "hire", "his", "hiss", "hit", "hive", "hoard", "hoarse", "hobby", "hockey", "hold", "holder", "hole", "hollow", "holly", "holy", "home", "honest", "honey", "hood", "hook", "hope", "horn", "horrid", "horror", "horse", "hose", "host", "hot", "hotel", "hound", "hour", "house", "hover", "how", "huge", "hull", "human", "humane", "humble", "humid", "hung", "hunger", "hungry", "hunt", "hurdle", "hurl", "hurry", "hurt", "hush", "hut", "hybrid", "hymn", "hyphen", "ice", "icing", "icon", "idaho", "idea", "ideal", "idiom", "idiot", "idle", "idly", "idol", "ignite", "ignore", "ill", "image", "immune", "impact", "imply", "import", "impose", "inca", "incest", "inch", "income", "incur", "indeed", "index", "india", "indian", "indoor", "induce", "inept", "inert", "infant", "infect", "infer", "influx", "inform", "inject", "injure", "injury", "ink", "inlaid", "inland", "inlet", "inmate", "inn", "innate", "inner", "input", "insane", "insect", "insert", "inset", "inside", "insist", "insult", "insure", "intact", "intake", "intend", "inter", "into", "invade", "invent", "invest", "invite", "invoke", "inward", "iowa", "iran", "iraq", "irish", "iron", "ironic", "irony", "isaac", "isabel", "island", "isle", "israel", "issue", "italy", "itch", "item", "itself", "ivan", "ivory", "jack", "jacket", "jacob", "jade", "jaguar", "jail", "james", "jane", "japan", "jargon", "java", "jaw", "jazz", "jeep", "jelly", "jerky", "jest", "jet", "jewel", "jewish", "jim", "job", "jock", "jockey", "joe", "john", "join", "joint", "joke", "jolly", "jolt", "jordan", "joseph", "joy", "joyful", "joyous", "judge", "judy", "juice", "juicy", "july", "jumble", "jumbo", "jump", "june", "jungle", "junior", "junk", "junta", "jury", "just", "kansas", "karate", "karl", "keel", "keen", "keep", "keeper", "kenya", "kept", "kernel", "kettle", "key", "khaki", "kick", "kid", "kidnap", "kidney", "kill", "killer", "kin", "kind", "kindly", "king", "kiss", "kite", "kitten", "knack", "knee", "kneel", "knew", "knife", "knight", "knit", "knob", "knock", "knot", "know", "known", "koran", "korea", "kuwait", "label", "lace", "lack", "lad", "ladder", "laden", "lady", "lagoon", "laity", "lake", "lamb", "lame", "lamp", "lance", "land", "lane", "lap", "lapse", "large", "larval", "laser", "last", "latch", "late", "lately", "latent", "later", "latest", "latin", "latter", "laugh", "launch", "lava", "lavish", "law", "lawful", "lawn", "lawyer", "lay", "layer", "layman", "lazy", "lead", "leader", "leaf", "leafy", "league", "leak", "leaky", "lean", "leap", "learn", "lease", "leash", "least", "leave", "led", "ledge", "left", "leg", "legacy", "legal", "legend", "legion", "lemon", "lend", "length", "lens", "lent", "leo", "leper", "lesion", "less", "lessen", "lesser", "lesson", "lest", "let", "lethal", "letter", "level", "lever", "levy", "lewis", "liable", "liar", "libel", "libya", "lice", "lick", "lid", "lie", "lied", "lier", "life", "lift", "light", "like", "likely", "limb", "lime", "limit", "limp", "line", "linear", "linen", "linger", "link", "lint", "lion", "lip", "liquid", "liquor", "list", "listen", "lit", "live", "lively", "liver", "liz", "lizard", "load", "loaf", "loan", "lobby", "lobe", "local", "locate", "lock", "locus", "lodge", "loft", "lofty", "log", "logic", "logo", "london", "lone", "lonely", "long", "longer", "look", "loop", "loose", "loosen", "loot", "lord", "lorry", "lose", "loss", "lost", "lot", "lotion", "lotus", "loud", "loudly", "lounge", "lousy", "love", "lovely", "lover", "low", "lower", "lowest", "loyal", "lucid", "luck", "lucky", "lucy", "lull", "lump", "lumpy", "lunacy", "lunar", "lunch", "lung", "lure", "lurid", "lush", "lust", "lute", "luther", "luxury", "lying", "lymph", "lynch", "lyric", "macho", "macro", "mad", "madam", "made", "mafia", "magic", "magma", "magnet", "magnum", "magpie", "maid", "maiden", "mail", "main", "mainly", "major", "make", "maker", "male", "malice", "mall", "malt", "mammal", "manage", "mane", "mania", "manic", "manner", "manor", "mantle", "manual", "manure", "many", "map", "maple", "marble", "march", "mare", "margin", "maria", "marina", "mark", "market", "marry", "mars", "marsh", "martin", "martyr", "mary", "mask", "mason", "mass", "mast", "master", "mat", "match", "mate", "matrix", "matter", "mature", "maxim", "may", "maybe", "mayor", "maze", "mead", "meadow", "meal", "mean", "meant", "meat", "medal", "media", "median", "medic", "medium", "meet", "mellow", "melody", "melon", "melt", "member", "memo", "memory", "menace", "mend", "mental", "mentor", "menu", "mercy", "mere", "merely", "merge", "merger", "merit", "merry", "mesh", "mess", "messy", "met", "metal", "meter", "method", "methyl", "metric", "metro", "mexico", "miami", "mickey", "mid", "midday", "middle", "midst", "midway", "might", "mighty", "mild", "mildew", "mile", "milk", "milky", "mill", "mimic", "mince", "mind", "mine", "mini", "mink", "minor", "mint", "minus", "minute", "mire", "mirror", "mirth", "misery", "miss", "mist", "misty", "mite", "mix", "moan", "moat", "mob", "mobile", "mock", "mode", "model", "modem", "modern", "modest", "modify", "module", "moist", "molar", "mold", "mole", "molten", "moment", "monday", "money", "monk", "monkey", "month", "mood", "moody", "moon", "moor", "moral", "morale", "morbid", "more", "morgue", "mortal", "mortar", "mosaic", "moscow", "moses", "mosque", "moss", "most", "mostly", "moth", "mother", "motion", "motive", "motor", "mount", "mourn", "mouse", "mouth", "move", "movie", "mrs", "much", "muck", "mucus", "mud", "muddle", "muddy", "mule", "mummy", "munich", "murder", "murky", "murmur", "muscle", "museum", "music", "mussel", "must", "mutant", "mute", "mutiny", "mutter", "mutton", "mutual", "muzzle", "myopic", "myriad", "myself", "mystic", "myth", "nadir", "nail", "naked", "name", "namely", "nape", "napkin", "naples", "narrow", "nasal", "nasty", "nathan", "nation", "native", "nature", "nausea", "naval", "nave", "navy", "near", "nearer", "nearly", "neat", "neatly", "neck", "need", "needle", "needy", "negate", "neon", "nepal", "nephew", "nerve", "nest", "net", "neural", "never", "newly", "next", "nice", "nicely", "niche", "nickel", "niece", "night", "nile", "nimble", "nine", "ninety", "ninth", "nobel", "noble", "nobody", "node", "noise", "noisy", "none", "noon", "nor", "norm", "normal", "north", "norway", "nose", "nosy", "not", "note", "notice", "notify", "notion", "noun", "novel", "novice", "now", "nozzle", "null", "numb", "number", "nurse", "nut", "nylon", "nymph", "oak", "oar", "oasis", "oath", "obese", "obey", "object", "oblige", "oboe", "obtain", "obtuse", "occult", "occupy", "occur", "ocean", "octave", "odd", "off", "offend", "offer", "office", "offset", "often", "ohio", "oil", "oily", "okay", "old", "older", "oldest", "olive", "omega", "omen", "omit", "once", "one", "onion", "only", "onset", "onto", "onus", "onward", "opaque", "open", "openly", "opera", "opium", "oppose", "optic", "option", "oracle", "oral", "orange", "orbit", "orchid", "ordeal", "order", "organ", "orgasm", "orient", "origin", "ornate", "orphan", "oscar", "other", "otter", "ought", "ounce", "our", "out", "outer", "output", "outset", "oval", "oven", "over", "overt", "owe", "owing", "owl", "own", "owner", "oxford", "oxide", "oxygen", "oyster", "ozone", "pace", "pack", "packet", "pact", "pad", "paddle", "paddy", "pagan", "page", "paid", "pain", "paint", "pair", "palace", "pale", "palm", "pan", "panama", "panel", "panic", "papa", "papal", "paper", "parade", "parcel", "pardon", "parent", "paris", "parish", "park", "parody", "parrot", "part", "partly", "party", "pascal", "pass", "past", "paste", "pastel", "pastor", "pastry", "pat", "patch", "patent", "path", "patio", "patrol", "patron", "paul", "pause", "pave", "paw", "pawn", "pay", "peace", "peach", "peak", "pear", "pearl", "pedal", "peel", "peer", "peking", "pelvic", "pelvis", "pen", "penal", "pence", "pencil", "penny", "people", "pepper", "per", "perch", "peril", "period", "perish", "permit", "person", "peru", "pest", "pet", "peter", "petite", "petrol", "petty", "phase", "philip", "phone", "photo", "phrase", "piano", "pick", "picket", "picnic", "pie", "piece", "pier", "pierce", "piety", "pig", "pigeon", "piggy", "pike", "pile", "pill", "pillar", "pillow", "pilot", "pin", "pinch", "pine", "pink", "pint", "pious", "pipe", "pirate", "piss", "pistol", "piston", "pit", "pitch", "pity", "pivot", "pixel", "pizza", "place", "placid", "plague", "plain", "plan", "plane", "planet", "plank", "plant", "plasma", "plate", "play", "player", "plea", "plead", "please", "pledge", "plenty", "plight", "plot", "plough", "ploy", "plug", "plum", "plump", "plunge", "plural", "plus", "plush", "pocket", "poem", "poet", "poetic", "poetry", "point", "poison", "poland", "polar", "pole", "police", "policy", "polish", "polite", "poll", "pollen", "polo", "pond", "ponder", "pony", "pool", "poor", "poorly", "pop", "poppy", "pore", "pork", "port", "portal", "pose", "posh", "post", "postal", "pot", "potato", "potent", "pouch", "pound", "pour", "powder", "power", "praise", "pray", "prayer", "preach", "prefer", "prefix", "press", "pretty", "price", "pride", "priest", "primal", "prime", "prince", "print", "prior", "prism", "prison", "privy", "prize", "probe", "profit", "prompt", "prone", "proof", "propel", "proper", "prose", "proton", "proud", "prove", "proven", "proxy", "prune", "pry", "psalm", "pseudo", "psyche", "pub", "public", "puff", "pull", "pulp", "pulpit", "pulsar", "pulse", "pump", "punch", "punish", "punk", "pupil", "puppet", "puppy", "pure", "purely", "purge", "purify", "purple", "purse", "pursue", "push", "pushy", "put", "putt", "puzzle", "quaint", "quake", "quarry", "quart", "quartz", "quebec", "queen", "queer", "query", "quest", "queue", "quick", "quid", "quiet", "quilt", "quirk", "quit", "quite", "quiver", "quiz", "quota", "quote", "rabbit", "race", "racial", "racism", "rack", "racket", "radar", "radio", "radish", "radius", "raffle", "raft", "rage", "raid", "rail", "rain", "rainy", "raise", "rake", "rally", "ramp", "random", "range", "rank", "ransom", "rape", "rapid", "rare", "rarely", "rarity", "rash", "rat", "rate", "rather", "ratify", "ratio", "rattle", "rave", "raven", "raw", "ray", "razor", "reach", "react", "read", "reader", "ready", "real", "really", "realm", "reap", "rear", "reason", "rebel", "recall", "recent", "recess", "recipe", "reckon", "record", "recoup", "rector", "red", "redeem", "redo", "reduce", "reed", "reef", "reek", "refer", "reform", "refuge", "refuse", "regal", "regard", "regent", "regime", "region", "regret", "reign", "reject", "relate", "relax", "relay", "relic", "relief", "relish", "rely", "remain", "remark", "remedy", "remind", "remit", "remote", "remove", "renal", "render", "rent", "rental", "repair", "repeal", "repeat", "repent", "reply", "report", "rescue", "resent", "reside", "resign", "resin", "resist", "resort", "rest", "result", "resume", "retail", "retain", "retina", "retire", "return", "reveal", "review", "revise", "revive", "revolt", "reward", "rex", "rhine", "rhino", "rhyme", "rhythm", "ribbon", "rice", "rich", "rick", "rid", "ride", "rider", "ridge", "rife", "rifle", "rift", "right", "rigid", "rile", "rim", "ring", "rinse", "riot", "ripe", "ripen", "ripple", "rise", "risk", "risky", "rite", "ritual", "ritz", "rival", "river", "road", "roar", "roast", "rob", "robe", "robert", "robin", "robot", "robust", "rock", "rocket", "rocky", "rod", "rode", "rodent", "rogue", "role", "roll", "roman", "rome", "roof", "room", "root", "rope", "rose", "rosy", "rot", "rotate", "rotor", "rotten", "rouge", "rough", "round", "route", "rover", "row", "royal", "rub", "rubber", "rubble", "ruby", "rudder", "rude", "rug", "rugby", "ruin", "rule", "ruler", "rumble", "rump", "run", "rune", "rung", "runway", "rural", "rush", "russia", "rust", "rustic", "rusty", "sack", "sacred", "sad", "saddle", "sadism", "sadly", "safari", "safe", "safely", "safer", "safety", "saga", "sage", "sahara", "said", "sail", "sailor", "saint", "sake", "salad", "salary", "sale", "saline", "saliva", "salmon", "saloon", "salt", "salty", "salute", "sam", "same", "sample", "sand", "sandy", "sane", "sash", "satin", "satire", "saturn", "sauce", "saucer", "saudi", "sauna", "savage", "save", "saw", "say", "scale", "scalp", "scan", "scant", "scar", "scarce", "scare", "scarf", "scary", "scene", "scenic", "scent", "school", "scold", "scope", "score", "scorn", "scotch", "scott", "scout", "scrap", "scrape", "scream", "screen", "screw", "script", "scroll", "scrub", "scum", "sea", "seal", "seam", "seaman", "search", "season", "seat", "second", "secret", "sect", "sector", "secure", "see", "seed", "seeing", "seek", "seem", "seize", "seldom", "select", "self", "sell", "seller", "semi", "senate", "send", "senile", "senior", "sense", "sensor", "sent", "sentry", "seoul", "sequel", "serene", "serial", "series", "sermon", "serum", "serve", "server", "set", "settle", "seven", "severe", "sew", "sewage", "shabby", "shade", "shadow", "shady", "shaft", "shaggy", "shah", "shake", "shaky", "shall", "sham", "shame", "shape", "share", "shark", "sharp", "shawl", "she", "shear", "sheen", "sheep", "sheer", "sheet", "shelf", "shell", "sherry", "shield", "shift", "shine", "shiny", "ship", "shire", "shirk", "shirt", "shiver", "shock", "shoe", "shook", "shoot", "shop", "shore", "short", "shot", "should", "shout", "show", "shower", "shrank", "shrewd", "shrill", "shrimp", "shrine", "shrink", "shrub", "shrug", "shut", "shy", "shyly", "sick", "side", "siege", "sigh", "sight", "sigma", "sign", "signal", "silent", "silk", "silken", "silky", "sill", "silly", "silo", "silver", "simple", "simply", "since", "sinful", "sing", "singer", "single", "sink", "sir", "sire", "siren", "sister", "sit", "site", "sitter", "six", "sixth", "sixty", "size", "sketch", "skill", "skin", "skinny", "skip", "skirt", "skull", "sky", "slab", "slack", "slain", "slam", "slang", "slap", "slat", "slate", "slave", "sleek", "sleep", "sleepy", "sleeve", "slice", "slick", "slid", "slide", "slight", "slim", "slimy", "sling", "slip", "slit", "slogan", "slope", "sloppy", "slot", "slow", "slowly", "slug", "slum", "slump", "smack", "small", "smart", "smash", "smear", "smell", "smelly", "smelt", "smile", "smite", "smoke", "smoky", "smooth", "smug", "snack", "snail", "snake", "snap", "snatch", "sneak", "snow", "snowy", "snug", "soak", "soap", "sober", "soccer", "social", "sock", "socket", "socks", "soda", "sodden", "sodium", "sofa", "soft", "soften", "softly", "soggy", "soil", "solar", "sold", "sole", "solely", "solemn", "solid", "solo", "solve", "some", "son", "sonar", "sonata", "song", "sonic", "sony", "soon", "sooner", "soot", "soothe", "sordid", "sore", "sorrow", "sorry", "sort", "soul", "sound", "soup", "sour", "source", "soviet", "sow", "space", "spade", "spain", "span", "spare", "spark", "sparse", "spasm", "spat", "spate", "speak", "spear", "speech", "speed", "speedy", "spell", "spend", "sphere", "spice", "spicy", "spider", "spiky", "spill", "spin", "spinal", "spine", "spiral", "spirit", "spit", "spite", "splash", "split", "spoil", "spoke", "sponge", "spoon", "sport", "spot", "spouse", "spray", "spread", "spree", "spring", "sprint", "spur", "squad", "square", "squash", "squat", "squid", "stab", "stable", "stack", "staff", "stage", "stain", "stair", "stairs", "stake", "stale", "stall", "stamp", "stance", "stand", "staple", "star", "starch", "stare", "stark", "start", "starve", "state", "static", "statue", "status", "stay", "stead", "steady", "steak", "steal", "steam", "steel", "steep", "steer", "stem", "stench", "step", "stereo", "stern", "stew", "stick", "sticky", "stiff", "stifle", "stigma", "still", "sting", "stint", "stir", "stitch", "stock", "stocky", "stone", "stony", "stool", "stop", "store", "storm", "stormy", "story", "stout", "stove", "stow", "strain", "strait", "strand", "strap", "strata", "straw", "stray", "streak", "stream", "street", "stress", "strict", "stride", "strife", "strike", "string", "strip", "stripe", "strive", "stroke", "stroll", "strong", "stud", "studio", "study", "stuff", "stuffy", "stunt", "stupid", "sturdy", "style", "submit", "subtle", "subtly", "suburb", "such", "sudden", "sue", "suez", "suffer", "sugar", "suit", "suite", "suitor", "sullen", "sultan", "sum", "summer", "summit", "summon", "sun", "sunday", "sunny", "sunset", "super", "superb", "supper", "supple", "supply", "sure", "surely", "surf", "surge", "survey", "suture", "swamp", "swan", "swap", "swarm", "sway", "swear", "sweat", "sweaty", "sweden", "sweep", "sweet", "swell", "swift", "swim", "swine", "swing", "swirl", "swiss", "switch", "sword", "swore", "sydney", "symbol", "synod", "syntax", "syria", "syrup", "system", "table", "tablet", "taboo", "tacit", "tackle", "tact", "tactic", "tail", "tailor", "taiwan", "take", "tale", "talent", "talk", "tall", "tally", "tame", "tampa", "tan", "tandem", "tangle", "tank", "tap", "tape", "target", "tariff", "tarp", "tart", "tarzan", "task", "taste", "tasty", "tattoo", "taurus", "taut", "tavern", "tax", "taxi", "tea", "teach", "teak", "team", "tear", "tease", "tech", "teeth", "tell", "temper", "temple", "tempo", "tempt", "ten", "tenant", "tend", "tender", "tendon", "tennis", "tenor", "tense", "tent", "tenth", "tenure", "teresa", "term", "terror", "terse", "test", "texas", "text", "thank", "thaw", "them", "theme", "thence", "theory", "there", "these", "thesis", "they", "thick", "thief", "thigh", "thin", "thing", "think", "third", "thirst", "thirty", "this", "thomas", "thorn", "those", "though", "thread", "threat", "three", "thrill", "thrive", "throat", "throne", "throng", "throw", "thrust", "thud", "thug", "thumb", "thus", "thyme", "tibet", "tick", "ticket", "tidal", "tide", "tidy", "tie", "tier", "tiger", "tight", "tile", "till", "tilt", "timber", "time", "timid", "tin", "tiny", "tip", "tire", "tissue", "title", "toad", "toast", "today", "toe", "toilet", "token", "tokyo", "told", "toll", "tom", "tomato", "tomb", "tonal", "tone", "tongue", "tonic", "too", "took", "tool", "tooth", "top", "topaz", "topic", "torch", "torque", "torso", "tort", "toss", "total", "touch", "tough", "tour", "toward", "towel", "tower", "town", "toxic", "toxin", "toy", "trace", "track", "tract", "trade", "tragic", "trail", "train", "trait", "tram", "trance", "trap", "trauma", "travel", "tray", "tread", "treat", "treaty", "treble", "tree", "trek", "tremor", "trench", "trend", "trendy", "trial", "tribal", "tribe", "trick", "tricky", "tried", "trifle", "trim", "trio", "trip", "triple", "troop", "trophy", "trot", "trough", "trout", "truce", "truck", "true", "truly", "trunk", "trust", "truth", "try", "tube", "tumble", "tuna", "tundra", "tune", "tunic", "tunnel", "turban", "turf", "turk", "turkey", "turn", "turtle", "tutor", "tweed", "twelve", "twenty", "twice", "twin", "twist", "two", "tycoon", "tying", "type", "tyrant", "ugly", "ulcer", "ultra", "umpire", "unable", "uncle", "under", "uneasy", "unfair", "unify", "union", "unique", "unit", "unite", "unity", "unlike", "unrest", "unruly", "until", "update", "upheld", "uphill", "uphold", "upon", "upper", "uproar", "upset", "upshot", "uptake", "upturn", "upward", "urban", "urge", "urgent", "urging", "urine", "usable", "usage", "use", "useful", "user", "usual", "utmost", "utter", "vacant", "vacuum", "vague", "vain", "valet", "valid", "valley", "value", "valve", "van", "vanish", "vanity", "vary", "vase", "vast", "vat", "vault", "vector", "veil", "vein", "velvet", "vendor", "veneer", "venice", "venom", "vent", "venue", "venus", "verb", "verbal", "verge", "verify", "verity", "verse", "versus", "very", "vessel", "vest", "vet", "veto", "via", "viable", "vicar", "vice", "victim", "victor", "video", "vienna", "view", "vigil", "viking", "vile", "villa", "vine", "vinyl", "viola", "violet", "violin", "viral", "virgo", "virtue", "virus", "visa", "vision", "visit", "visual", "vital", "vivid", "vocal", "vodka", "vogue", "voice", "void", "volley", "volume", "vote", "vowel", "voyage", "vulgar", "wade", "wage", "waist", "wait", "waiter", "wake", "walk", "walker", "wall", "wallet", "walnut", "wander", "want", "war", "warden", "warm", "warmth", "warn", "warp", "warsaw", "wary", "was", "wash", "wasp", "waste", "watch", "water", "watery", "wave", "wax", "way", "weak", "weaken", "wealth", "weapon", "wear", "weary", "weave", "wedge", "wee", "weed", "week", "weekly", "weep", "weigh", "weight", "weird", "well", "were", "west", "wet", "whale", "wharf", "what", "wheat", "wheel", "when", "whence", "where", "which", "whiff", "while", "whim", "whip", "whisky", "white", "who", "whole", "wholly", "whom", "whose", "why", "wicked", "wide", "widely", "widen", "wider", "widow", "width", "wife", "wig", "wild", "wildly", "will", "willow", "wily", "win", "wind", "window", "windy", "wine", "wing", "wink", "winner", "winter", "wipe", "wire", "wisdom", "wise", "wish", "wit", "witch", "with", "within", "witty", "wizard", "woke", "wolf", "wolves", "woman", "womb", "won", "wonder", "wood", "wooden", "woods", "woody", "wool", "word", "work", "worker", "world", "worm", "worry", "worse", "worst", "worth", "worthy", "would", "wound", "wrap", "wrath", "wreath", "wreck", "wring", "wrist", "writ", "write", "writer", "wrong", "xerox", "yacht", "yale", "yard", "yarn", "yeah", "year", "yeard", "yeast", "yellow", "yet", "yield", "yogurt", "yolk", "you", "young", "your", "youth", "zaire", "zeal", "zebra", "zenith", "zero", "zeus", "zigzag", "zinc", "zombie", "zone"],
                g = ["abandon", "ability", "able", "about", "above", "absent", "absorb", "abstract", "absurd", "abuse", "access", "accident", "account", "accuse", "achieve", "acid", "acoustic", "acquire", "across", "act", "action", "actor", "actress", "actual", "adapt", "add", "addict", "address", "adjust", "admit", "adult", "advance", "advice", "aerobic", "affair", "afford", "afraid", "again", "age", "agent", "agree", "ahead", "aim", "air", "airport", "aisle", "alarm", "album", "alcohol", "alert", "alien", "all", "alley", "allow", "almost", "alone", "alpha", "already", "also", "alter", "always", "amateur", "amazing", "among", "amount", "amused", "analyst", "anchor", "ancient", "anger", "angle", "angry", "animal", "ankle", "announce", "annual", "another", "answer", "antenna", "antique", "anxiety", "any", "apart", "apology", "appear", "apple", "approve", "april", "arch", "arctic", "area", "arena", "argue", "arm", "armed", "armor", "army", "around", "arrange", "arrest", "arrive", "arrow", "art", "artefact", "artist", "artwork", "ask", "aspect", "assault", "asset", "assist", "assume", "asthma", "athlete", "atom", "attack", "attend", "attitude", "attract", "auction", "audit", "august", "aunt", "author", "auto", "autumn", "average", "avocado", "avoid", "awake", "aware", "away", "awesome", "awful", "awkward", "axis", "baby", "bachelor", "bacon", "badge", "bag", "balance", "balcony", "ball", "bamboo", "banana", "banner", "bar", "barely", "bargain", "barrel", "base", "basic", "basket", "battle", "beach", "bean", "beauty", "because", "become", "beef", "before", "begin", "behave", "behind", "believe", "below", "belt", "bench", "benefit", "best", "betray", "better", "between", "beyond", "bicycle", "bid", "bike", "bind", "biology", "bird", "birth", "bitter", "black", "blade", "blame", "blanket", "blast", "bleak", "bless", "blind", "blood", "blossom", "blouse", "blue", "blur", "blush", "board", "boat", "body", "boil", "bomb", "bone", "bonus", "book", "boost", "border", "boring", "borrow", "boss", "bottom", "bounce", "box", "boy", "bracket", "brain", "brand", "brass", "brave", "bread", "breeze", "brick", "bridge", "brief", "bright", "bring", "brisk", "broccoli", "broken", "bronze", "broom", "brother", "brown", "brush", "bubble", "buddy", "budget", "buffalo", "build", "bulb", "bulk", "bullet", "bundle", "bunker", "burden", "burger", "burst", "bus", "business", "busy", "butter", "buyer", "buzz", "cabbage", "cabin", "cable", "cactus", "cage", "cake", "call", "calm", "camera", "camp", "can", "canal", "cancel", "candy", "cannon", "canoe", "canvas", "canyon", "capable", "capital", "captain", "car", "carbon", "card", "cargo", "carpet", "carry", "cart", "case", "cash", "casino", "castle", "casual", "cat", "catalog", "catch", "category", "cattle", "caught", "cause", "caution", "cave", "ceiling", "celery", "cement", "census", "century", "cereal", "certain", "chair", "chalk", "champion", "change", "chaos", "chapter", "charge", "chase", "chat", "cheap", "check", "cheese", "chef", "cherry", "chest", "chicken", "chief", "child", "chimney", "choice", "choose", "chronic", "chuckle", "chunk", "churn", "cigar", "cinnamon", "circle", "citizen", "city", "civil", "claim", "clap", "clarify", "claw", "clay", "clean", "clerk", "clever", "click", "client", "cliff", "climb", "clinic", "clip", "clock", "clog", "close", "cloth", "cloud", "clown", "club", "clump", "cluster", "clutch", "coach", "coast", "coconut", "code", "coffee", "coil", "coin", "collect", "color", "column", "combine", "come", "comfort", "comic", "common", "company", "concert", "conduct", "confirm", "congress", "connect", "consider", "control", "convince", "cook", "cool", "copper", "copy", "coral", "core", "corn", "correct", "cost", "cotton", "couch", "country", "couple", "course", "cousin", "cover", "coyote", "crack", "cradle", "craft", "cram", "crane", "crash", "crater", "crawl", "crazy", "cream", "credit", "creek", "crew", "cricket", "crime", "crisp", "critic", "crop", "cross", "crouch", "crowd", "crucial", "cruel", "cruise", "crumble", "crunch", "crush", "cry", "crystal", "cube", "culture", "cup", "cupboard", "curious", "current", "curtain", "curve", "cushion", "custom", "cute", "cycle", "dad", "damage", "damp", "dance", "danger", "daring", "dash", "daughter", "dawn", "day", "deal", "debate", "debris", "decade", "december", "decide", "decline", "decorate", "decrease", "deer", "defense", "define", "defy", "degree", "delay", "deliver", "demand", "demise", "denial", "dentist", "deny", "depart", "depend", "deposit", "depth", "deputy", "derive", "describe", "desert", "design", "desk", "despair", "destroy", "detail", "detect", "develop", "device", "devote", "diagram", "dial", "diamond", "diary", "dice", "diesel", "diet", "differ", "digital", "dignity", "dilemma", "dinner", "dinosaur", "direct", "dirt", "disagree", "discover", "disease", "dish", "dismiss", "disorder", "display", "distance", "divert", "divide", "divorce", "dizzy", "doctor", "document", "dog", "doll", "dolphin", "domain", "donate", "donkey", "donor", "door", "dose", "double", "dove", "draft", "dragon", "drama", "drastic", "draw", "dream", "dress", "drift", "drill", "drink", "drip", "drive", "drop", "drum", "dry", "duck", "dumb", "dune", "during", "dust", "dutch", "duty", "dwarf", "dynamic", "eager", "eagle", "early", "earn", "earth", "easily", "east", "easy", "echo", "ecology", "economy", "edge", "edit", "educate", "effort", "egg", "eight", "either", "elbow", "elder", "electric", "elegant", "element", "elephant", "elevator", "elite", "else", "embark", "embody", "embrace", "emerge", "emotion", "employ", "empower", "empty", "enable", "enact", "end", "endless", "endorse", "enemy", "energy", "enforce", "engage", "engine", "enhance", "enjoy", "enlist", "enough", "enrich", "enroll", "ensure", "enter", "entire", "entry", "envelope", "episode", "equal", "equip", "era", "erase", "erode", "erosion", "error", "erupt", "escape", "essay", "essence", "estate", "eternal", "ethics", "evidence", "evil", "evoke", "evolve", "exact", "example", "excess", "exchange", "excite", "exclude", "excuse", "execute", "exercise", "exhaust", "exhibit", "exile", "exist", "exit", "exotic", "expand", "expect", "expire", "explain", "expose", "express", "extend", "extra", "eye", "eyebrow", "fabric", "face", "faculty", "fade", "faint", "faith", "fall", "false", "fame", "family", "famous", "fan", "fancy", "fantasy", "farm", "fashion", "fat", "fatal", "father", "fatigue", "fault", "favorite", "feature", "february", "federal", "fee", "feed", "feel", "female", "fence", "festival", "fetch", "fever", "few", "fiber", "fiction", "field", "figure", "file", "film", "filter", "final", "find", "fine", "finger", "finish", "fire", "firm", "first", "fiscal", "fish", "fit", "fitness", "fix", "flag", "flame", "flash", "flat", "flavor", "flee", "flight", "flip", "float", "flock", "floor", "flower", "fluid", "flush", "fly", "foam", "focus", "fog", "foil", "fold", "follow", "food", "foot", "force", "forest", "forget", "fork", "fortune", "forum", "forward", "fossil", "foster", "found", "fox", "fragile", "frame", "frequent", "fresh", "friend", "fringe", "frog", "front", "frost", "frown", "frozen", "fruit", "fuel", "fun", "funny", "furnace", "fury", "future", "gadget", "gain", "galaxy", "gallery", "game", "gap", "garage", "garbage", "garden", "garlic", "garment", "gas", "gasp", "gate", "gather", "gauge", "gaze", "general", "genius", "genre", "gentle", "genuine", "gesture", "ghost", "giant", "gift", "giggle", "ginger", "giraffe", "girl", "give", "glad", "glance", "glare", "glass", "glide", "glimpse", "globe", "gloom", "glory", "glove", "glow", "glue", "goat", "goddess", "gold", "good", "goose", "gorilla", "gospel", "gossip", "govern", "gown", "grab", "grace", "grain", "grant", "grape", "grass", "gravity", "great", "green", "grid", "grief", "grit", "grocery", "group", "grow", "grunt", "guard", "guess", "guide", "guilt", "guitar", "gun", "gym", "habit", "hair", "half", "hammer", "hamster", "hand", "happy", "harbor", "hard", "harsh", "harvest", "hat", "have", "hawk", "hazard", "head", "health", "heart", "heavy", "hedgehog", "height", "hello", "helmet", "help", "hen", "hero", "hidden", "high", "hill", "hint", "hip", "hire", "history", "hobby", "hockey", "hold", "hole", "holiday", "hollow", "home", "honey", "hood", "hope", "horn", "horror", "horse", "hospital", "host", "hotel", "hour", "hover", "hub", "huge", "human", "humble", "humor", "hundred", "hungry", "hunt", "hurdle", "hurry", "hurt", "husband", "hybrid", "ice", "icon", "idea", "identify", "idle", "ignore", "ill", "illegal", "illness", "image", "imitate", "immense", "immune", "impact", "impose", "improve", "impulse", "inch", "include", "income", "increase", "index", "indicate", "indoor", "industry", "infant", "inflict", "inform", "inhale", "inherit", "initial", "inject", "injury", "inmate", "inner", "innocent", "input", "inquiry", "insane", "insect", "inside", "inspire", "install", "intact", "interest", "into", "invest", "invite", "involve", "iron", "island", "isolate", "issue", "item", "ivory", "jacket", "jaguar", "jar", "jazz", "jealous", "jeans", "jelly", "jewel", "job", "join", "joke", "journey", "joy", "judge", "juice", "jump", "jungle", "junior", "junk", "just", "kangaroo", "keen", "keep", "ketchup", "key", "kick", "kid", "kidney", "kind", "kingdom", "kiss", "kit", "kitchen", "kite", "kitten", "kiwi", "knee", "knife", "knock", "know", "lab", "label", "labor", "ladder", "lady", "lake", "lamp", "language", "laptop", "large", "later", "latin", "laugh", "laundry", "lava", "law", "lawn", "lawsuit", "layer", "lazy", "leader", "leaf", "learn", "leave", "lecture", "left", "leg", "legal", "legend", "leisure", "lemon", "lend", "length", "lens", "leopard", "lesson", "letter", "level", "liar", "liberty", "library", "license", "life", "lift", "light", "like", "limb", "limit", "link", "lion", "liquid", "list", "little", "live", "lizard", "load", "loan", "lobster", "local", "lock", "logic", "lonely", "long", "loop", "lottery", "loud", "lounge", "love", "loyal", "lucky", "luggage", "lumber", "lunar", "lunch", "luxury", "lyrics", "machine", "mad", "magic", "magnet", "maid", "mail", "main", "major", "make", "mammal", "man", "manage", "mandate", "mango", "mansion", "manual", "maple", "marble", "march", "margin", "marine", "market", "marriage", "mask", "mass", "master", "match", "material", "math", "matrix", "matter", "maximum", "maze", "meadow", "mean", "measure", "meat", "mechanic", "medal", "media", "melody", "melt", "member", "memory", "mention", "menu", "mercy", "merge", "merit", "merry", "mesh", "message", "metal", "method", "middle", "midnight", "milk", "million", "mimic", "mind", "minimum", "minor", "minute", "miracle", "mirror", "misery", "miss", "mistake", "mix", "mixed", "mixture", "mobile", "model", "modify", "mom", "moment", "monitor", "monkey", "monster", "month", "moon", "moral", "more", "morning", "mosquito", "mother", "motion", "motor", "mountain", "mouse", "move", "movie", "much", "muffin", "mule", "multiply", "muscle", "museum", "mushroom", "music", "must", "mutual", "myself", "mystery", "myth", "naive", "name", "napkin", "narrow", "nasty", "nation", "nature", "near", "neck", "need", "negative", "neglect", "neither", "nephew", "nerve", "nest", "net", "network", "neutral", "never", "news", "next", "nice", "night", "noble", "noise", "nominee", "noodle", "normal", "north", "nose", "notable", "note", "nothing", "notice", "novel", "now", "nuclear", "number", "nurse", "nut", "oak", "obey", "object", "oblige", "obscure", "observe", "obtain", "obvious", "occur", "ocean", "october", "odor", "off", "offer", "office", "often", "oil", "okay", "old", "olive", "olympic", "omit", "once", "one", "onion", "online", "only", "open", "opera", "opinion", "oppose", "option", "orange", "orbit", "orchard", "order", "ordinary", "organ", "orient", "original", "orphan", "ostrich", "other", "outdoor", "outer", "output", "outside", "oval", "oven", "over", "own", "owner", "oxygen", "oyster", "ozone", "pact", "paddle", "page", "pair", "palace", "palm", "panda", "panel", "panic", "panther", "paper", "parade", "parent", "park", "parrot", "party", "pass", "patch", "path", "patient", "patrol", "pattern", "pause", "pave", "payment", "peace", "peanut", "pear", "peasant", "pelican", "pen", "penalty", "pencil", "people", "pepper", "perfect", "permit", "person", "pet", "phone", "photo", "phrase", "physical", "piano", "picnic", "picture", "piece", "pig", "pigeon", "pill", "pilot", "pink", "pioneer", "pipe", "pistol", "pitch", "pizza", "place", "planet", "plastic", "plate", "play", "please", "pledge", "pluck", "plug", "plunge", "poem", "poet", "point", "polar", "pole", "police", "pond", "pony", "pool", "popular", "portion", "position", "possible", "post", "potato", "pottery", "poverty", "powder", "power", "practice", "praise", "predict", "prefer", "prepare", "present", "pretty", "prevent", "price", "pride", "primary", "print", "priority", "prison", "private", "prize", "problem", "process", "produce", "profit", "program", "project", "promote", "proof", "property", "prosper", "protect", "proud", "provide", "public", "pudding", "pull", "pulp", "pulse", "pumpkin", "punch", "pupil", "puppy", "purchase", "purity", "purpose", "purse", "push", "put", "puzzle", "pyramid", "quality", "quantum", "quarter", "question", "quick", "quit", "quiz", "quote", "rabbit", "raccoon", "race", "rack", "radar", "radio", "rail", "rain", "raise", "rally", "ramp", "ranch", "random", "range", "rapid", "rare", "rate", "rather", "raven", "raw", "razor", "ready", "real", "reason", "rebel", "rebuild", "recall", "receive", "recipe", "record", "recycle", "reduce", "reflect", "reform", "refuse", "region", "regret", "regular", "reject", "relax", "release", "relief", "rely", "remain", "remember", "remind", "remove", "render", "renew", "rent", "reopen", "repair", "repeat", "replace", "report", "require", "rescue", "resemble", "resist", "resource", "response", "result", "retire", "retreat", "return", "reunion", "reveal", "review", "reward", "rhythm", "rib", "ribbon", "rice", "rich", "ride", "ridge", "rifle", "right", "rigid", "ring", "riot", "ripple", "risk", "ritual", "rival", "river", "road", "roast", "robot", "robust", "rocket", "romance", "roof", "rookie", "room", "rose", "rotate", "rough", "round", "route", "royal", "rubber", "rude", "rug", "rule", "run", "runway", "rural", "sad", "saddle", "sadness", "safe", "sail", "salad", "salmon", "salon", "salt", "salute", "same", "sample", "sand", "satisfy", "satoshi", "sauce", "sausage", "save", "say", "scale", "scan", "scare", "scatter", "scene", "scheme", "school", "science", "scissors", "scorpion", "scout", "scrap", "screen", "script", "scrub", "sea", "search", "season", "seat", "second", "secret", "section", "security", "seed", "seek", "segment", "select", "sell", "seminar", "senior", "sense", "sentence", "series", "service", "session", "settle", "setup", "seven", "shadow", "shaft", "shallow", "share", "shed", "shell", "sheriff", "shield", "shift", "shine", "ship", "shiver", "shock", "shoe", "shoot", "shop", "short", "shoulder", "shove", "shrimp", "shrug", "shuffle", "shy", "sibling", "sick", "side", "siege", "sight", "sign", "silent", "silk", "silly", "silver", "similar", "simple", "since", "sing", "siren", "sister", "situate", "six", "size", "skate", "sketch", "ski", "skill", "skin", "skirt", "skull", "slab", "slam", "sleep", "slender", "slice", "slide", "slight", "slim", "slogan", "slot", "slow", "slush", "small", "smart", "smile", "smoke", "smooth", "snack", "snake", "snap", "sniff", "snow", "soap", "soccer", "social", "sock", "soda", "soft", "solar", "soldier", "solid", "solution", "solve", "someone", "song", "soon", "sorry", "sort", "soul", "sound", "soup", "source", "south", "space", "spare", "spatial", "spawn", "speak", "special", "speed", "spell", "spend", "sphere", "spice", "spider", "spike", "spin", "spirit", "split", "spoil", "sponsor", "spoon", "sport", "spot", "spray", "spread", "spring", "spy", "square", "squeeze", "squirrel", "stable", "stadium", "staff", "stage", "stairs", "stamp", "stand", "start", "state", "stay", "steak", "steel", "stem", "step", "stereo", "stick", "still", "sting", "stock", "stomach", "stone", "stool", "story", "stove", "strategy", "street", "strike", "strong", "struggle", "student", "stuff", "stumble", "style", "subject", "submit", "subway", "success", "such", "sudden", "suffer", "sugar", "suggest", "suit", "summer", "sun", "sunny", "sunset", "super", "supply", "supreme", "sure", "surface", "surge", "surprise", "surround", "survey", "suspect", "sustain", "swallow", "swamp", "swap", "swarm", "swear", "sweet", "swift", "swim", "swing", "switch", "sword", "symbol", "symptom", "syrup", "system", "table", "tackle", "tag", "tail", "talent", "talk", "tank", "tape", "target", "task", "taste", "tattoo", "taxi", "teach", "team", "tell", "ten", "tenant", "tennis", "tent", "term", "test", "text", "thank", "that", "theme", "then", "theory", "there", "they", "thing", "this", "thought", "three", "thrive", "throw", "thumb", "thunder", "ticket", "tide", "tiger", "tilt", "timber", "time", "tiny", "tip", "tired", "tissue", "title", "toast", "tobacco", "today", "toddler", "toe", "together", "toilet", "token", "tomato", "tomorrow", "tone", "tongue", "tonight", "tool", "tooth", "top", "topic", "topple", "torch", "tornado", "tortoise", "toss", "total", "tourist", "toward", "tower", "town", "toy", "track", "trade", "traffic", "tragic", "train", "transfer", "trap", "trash", "travel", "tray", "treat", "tree", "trend", "trial", "tribe", "trick", "trigger", "trim", "trip", "trophy", "trouble", "truck", "true", "truly", "trumpet", "trust", "truth", "try", "tube", "tuition", "tumble", "tuna", "tunnel", "turkey", "turn", "turtle", "twelve", "twenty", "twice", "twin", "twist", "two", "type", "typical", "ugly", "umbrella", "unable", "unaware", "uncle", "uncover", "under", "undo", "unfair", "unfold", "unhappy", "uniform", "unique", "unit", "universe", "unknown", "unlock", "until", "unusual", "unveil", "update", "upgrade", "uphold", "upon", "upper", "upset", "urban", "urge", "usage", "use", "used", "useful", "useless", "usual", "utility", "vacant", "vacuum", "vague", "valid", "valley", "valve", "van", "vanish", "vapor", "various", "vast", "vault", "vehicle", "velvet", "vendor", "venture", "venue", "verb", "verify", "version", "very", "vessel", "veteran", "viable", "vibrant", "vicious", "victory", "video", "view", "village", "vintage", "violin", "virtual", "virus", "visa", "visit", "visual", "vital", "vivid", "vocal", "voice", "void", "volcano", "volume", "vote", "voyage", "wage", "wagon", "wait", "walk", "wall", "walnut", "want", "warfare", "warm", "warrior", "wash", "wasp", "waste", "water", "wave", "way", "wealth", "weapon", "wear", "weasel", "weather", "web", "wedding", "weekend", "weird", "welcome", "west", "wet", "whale", "what", "wheat", "wheel", "when", "where", "whip", "whisper", "wide", "width", "wife", "wild", "will", "win", "window", "wine", "wing", "wink", "winner", "winter", "wire", "wisdom", "wise", "wish", "witness", "wolf", "woman", "wonder", "wood", "wool", "word", "work", "world", "worry", "worth", "wrap", "wreck", "wrestle", "wrist", "write", "wrong", "yard", "year", "yellow", "you", "young", "youth", "zebra", "zero", "zone", "zoo"];
            async function m(e) {
                return new Uint8Array(await crypto.subtle.digest("SHA-256", e))
            }

            function b(e) {
                return (new TextEncoder).encode(e)
            }
            const w = "SHA-256",
                v = "SHA-384",
                k = "SHA-512";
            async function E(e, r, t) {
                const n = "string" == typeof r ? b(r) : r,
                    a = "string" == typeof t ? b(t) : t;
                try {
                    const r = await window.crypto.subtle.importKey("raw", n, {
                        name: "HMAC",
                        hash: e
                    }, !1, ["sign"]);
                    return new Uint8Array(await window.crypto.subtle.sign("HMAC", r, a))
                } catch {
                    throw new Error("Fallback if SubtleCrypto fails is not implemented")
                }
            }
            async function P(e, r, t) {
                const n = new Uint8Array(37);
                n[0] = 0, n.set(e, 1), new DataView(n.buffer, n.byteOffset, n.byteLength).setUint32(33, t, !1), n[33] |= 128;
                const a = await E(k, r, n);
                return {
                    keyData: a.subarray(0, 32),
                    chainCode: a.subarray(32)
                }
            }
            var K = t(85),
                _ = t.n(K);
            const x = new _.a.ec("secp256k1");
            async function S(e, r, t) {
                const n = 0 != (2147483648 & t),
                    a = new Uint8Array(37),
                    i = u(x.keyFromPrivate(e).getPublic(!0, "hex"));
                n ? (a[0] = 0, a.set(e, 1)) : a.set(i, 0), new DataView(a.buffer, a.byteOffset, a.byteLength).setUint32(33, t, !1);
                const o = await E(k, r, a),
                    s = o.subarray(0, 32),
                    l = o.subarray(32);
                try {
                    const n = x.keyFromPrivate(e).getPrivate().add(x.keyFromPrivate(s).getPrivate());
                    return n.eqn(0) ? S(e, r, t + 1) : {
                        keyData: u(x.keyFromPrivate(n.toArray()).getPrivate("hex")),
                        chainCode: l
                    }
                } catch {
                    return S(e, r, t + 1)
                }
            }
            async function B(e, r, t, n, a) {
                const i = "string" == typeof r ? b(r) : r,
                    o = "string" == typeof t ? b(t) : t;
                try {
                    const r = await window.crypto.subtle.importKey("raw", i, {
                        name: "PBKDF2",
                        hash: e
                    }, !1, ["deriveBits"]);
                    return new Uint8Array(await window.crypto.subtle.deriveBits({
                        name: "PBKDF2",
                        hash: e,
                        salt: o,
                        iterations: n
                    }, r, a << 3))
                } catch {
                    throw new Error("(BUG) Non-Exhaustive switch statement for algorithms")
                }
            }
            var A = t(2324),
                C = t.n(A);

            function M(e, r) {
                const t = function(e, r, t, n) {
                        let a = new C.a(0);
                        for (const t of e) a = a.times(r), a = a.plus(t);
                        const i = new Uint8Array(n);
                        for (let e = n - 1; e >= 0; e -= 1) {
                            const r = a.dividedToIntegerBy(t),
                                n = a.modulo(t);
                            a = r, i[e] = n.toNumber()
                        }
                        return i
                    }(e.map(e => r.indexOf(e.toLowerCase())), r.length, 256, 33),
                    n = t[t.length - 1],
                    a = new Uint8Array(t.length - 1);
                for (let e = 0; e < t.length - 1; e += 1) a[e] = t[e] ^ n;
                return [a, n]
            }
            const O = "0123456789abcdef".split(""),
                D = [1, 256, 65536, 16777216],
                j = [0, 8, 16, 24],
                q = [1, 0, 32898, 0, 32906, 2147483648, 2147516416, 2147483648, 32907, 0, 2147483649, 0, 2147516545, 2147483648, 32777, 2147483648, 138, 0, 136, 0, 2147516425, 0, 2147483658, 0, 2147516555, 0, 139, 2147483648, 32905, 2147483648, 32771, 2147483648, 32770, 2147483648, 128, 2147483648, 32778, 0, 2147483658, 2147483648, 2147516545, 2147483648, 32896, 2147483648, 2147483649, 0, 2147516424, 2147483648],
                R = e => {
                    var r, t, n, a, i, o, s, l, c, u, d, h, p, f, y, g, m, b, w, v, k, E, P, K, _, x, S, B, A, C, M, O, D, j, R, z, T, I, N, H, U, L, F, V, G, X, $, W, J, Y, Z, Q, ee, re, te, ne, ae, ie, oe, se, le, ce, ue;
                    for (n = 0; n < 48; n += 2) a = e[0] ^ e[10] ^ e[20] ^ e[30] ^ e[40], i = e[1] ^ e[11] ^ e[21] ^ e[31] ^ e[41], o = e[2] ^ e[12] ^ e[22] ^ e[32] ^ e[42], s = e[3] ^ e[13] ^ e[23] ^ e[33] ^ e[43], l = e[4] ^ e[14] ^ e[24] ^ e[34] ^ e[44], c = e[5] ^ e[15] ^ e[25] ^ e[35] ^ e[45], u = e[6] ^ e[16] ^ e[26] ^ e[36] ^ e[46], d = e[7] ^ e[17] ^ e[27] ^ e[37] ^ e[47], r = (h = e[8] ^ e[18] ^ e[28] ^ e[38] ^ e[48]) ^ (o << 1 | s >>> 31), t = (p = e[9] ^ e[19] ^ e[29] ^ e[39] ^ e[49]) ^ (s << 1 | o >>> 31), e[0] ^= r, e[1] ^= t, e[10] ^= r, e[11] ^= t, e[20] ^= r, e[21] ^= t, e[30] ^= r, e[31] ^= t, e[40] ^= r, e[41] ^= t, r = a ^ (l << 1 | c >>> 31), t = i ^ (c << 1 | l >>> 31), e[2] ^= r, e[3] ^= t, e[12] ^= r, e[13] ^= t, e[22] ^= r, e[23] ^= t, e[32] ^= r, e[33] ^= t, e[42] ^= r, e[43] ^= t, r = o ^ (u << 1 | d >>> 31), t = s ^ (d << 1 | u >>> 31), e[4] ^= r, e[5] ^= t, e[14] ^= r, e[15] ^= t, e[24] ^= r, e[25] ^= t, e[34] ^= r, e[35] ^= t, e[44] ^= r, e[45] ^= t, r = l ^ (h << 1 | p >>> 31), t = c ^ (p << 1 | h >>> 31), e[6] ^= r, e[7] ^= t, e[16] ^= r, e[17] ^= t, e[26] ^= r, e[27] ^= t, e[36] ^= r, e[37] ^= t, e[46] ^= r, e[47] ^= t, r = u ^ (a << 1 | i >>> 31), t = d ^ (i << 1 | a >>> 31), e[8] ^= r, e[9] ^= t, e[18] ^= r, e[19] ^= t, e[28] ^= r, e[29] ^= t, e[38] ^= r, e[39] ^= t, e[48] ^= r, e[49] ^= t, f = e[0], y = e[1], X = e[11] << 4 | e[10] >>> 28, $ = e[10] << 4 | e[11] >>> 28, B = e[20] << 3 | e[21] >>> 29, A = e[21] << 3 | e[20] >>> 29, se = e[31] << 9 | e[30] >>> 23, le = e[30] << 9 | e[31] >>> 23, L = e[40] << 18 | e[41] >>> 14, F = e[41] << 18 | e[40] >>> 14, j = e[2] << 1 | e[3] >>> 31, R = e[3] << 1 | e[2] >>> 31, g = e[13] << 12 | e[12] >>> 20, m = e[12] << 12 | e[13] >>> 20, W = e[22] << 10 | e[23] >>> 22, J = e[23] << 10 | e[22] >>> 22, C = e[33] << 13 | e[32] >>> 19, M = e[32] << 13 | e[33] >>> 19, ce = e[42] << 2 | e[43] >>> 30, ue = e[43] << 2 | e[42] >>> 30, re = e[5] << 30 | e[4] >>> 2, te = e[4] << 30 | e[5] >>> 2, z = e[14] << 6 | e[15] >>> 26, T = e[15] << 6 | e[14] >>> 26, b = e[25] << 11 | e[24] >>> 21, w = e[24] << 11 | e[25] >>> 21, Y = e[34] << 15 | e[35] >>> 17, Z = e[35] << 15 | e[34] >>> 17, O = e[45] << 29 | e[44] >>> 3, D = e[44] << 29 | e[45] >>> 3, K = e[6] << 28 | e[7] >>> 4, _ = e[7] << 28 | e[6] >>> 4, ne = e[17] << 23 | e[16] >>> 9, ae = e[16] << 23 | e[17] >>> 9, I = e[26] << 25 | e[27] >>> 7, N = e[27] << 25 | e[26] >>> 7, v = e[36] << 21 | e[37] >>> 11, k = e[37] << 21 | e[36] >>> 11, Q = e[47] << 24 | e[46] >>> 8, ee = e[46] << 24 | e[47] >>> 8, V = e[8] << 27 | e[9] >>> 5, G = e[9] << 27 | e[8] >>> 5, x = e[18] << 20 | e[19] >>> 12, S = e[19] << 20 | e[18] >>> 12, ie = e[29] << 7 | e[28] >>> 25, oe = e[28] << 7 | e[29] >>> 25, H = e[38] << 8 | e[39] >>> 24, U = e[39] << 8 | e[38] >>> 24, E = e[48] << 14 | e[49] >>> 18, P = e[49] << 14 | e[48] >>> 18, e[0] = f ^ ~g & b, e[1] = y ^ ~m & w, e[10] = K ^ ~x & B, e[11] = _ ^ ~S & A, e[20] = j ^ ~z & I, e[21] = R ^ ~T & N, e[30] = V ^ ~X & W, e[31] = G ^ ~$ & J, e[40] = re ^ ~ne & ie, e[41] = te ^ ~ae & oe, e[2] = g ^ ~b & v, e[3] = m ^ ~w & k, e[12] = x ^ ~B & C, e[13] = S ^ ~A & M, e[22] = z ^ ~I & H, e[23] = T ^ ~N & U, e[32] = X ^ ~W & Y, e[33] = $ ^ ~J & Z, e[42] = ne ^ ~ie & se, e[43] = ae ^ ~oe & le, e[4] = b ^ ~v & E, e[5] = w ^ ~k & P, e[14] = B ^ ~C & O, e[15] = A ^ ~M & D, e[24] = I ^ ~H & L, e[25] = N ^ ~U & F, e[34] = W ^ ~Y & Q, e[35] = J ^ ~Z & ee, e[44] = ie ^ ~se & ce, e[45] = oe ^ ~le & ue, e[6] = v ^ ~E & f, e[7] = k ^ ~P & y, e[16] = C ^ ~O & K, e[17] = M ^ ~D & _, e[26] = H ^ ~L & j, e[27] = U ^ ~F & R, e[36] = Y ^ ~Q & V, e[37] = Z ^ ~ee & G, e[46] = se ^ ~ce & re, e[47] = le ^ ~ue & te, e[8] = E ^ ~f & g, e[9] = P ^ ~y & m, e[18] = O ^ ~K & x, e[19] = D ^ ~_ & S, e[28] = L ^ ~j & z, e[29] = F ^ ~R & T, e[38] = Q ^ ~V & X, e[39] = ee ^ ~G & $, e[48] = ce ^ ~re & ne, e[49] = ue ^ ~te & ae, e[0] ^= q[n], e[1] ^= q[n + 1]
                },
                z = (T = 256, e => {
                    var r;
                    if ("0x" === e.slice(0, 2)) {
                        r = [];
                        for (var t = 2, n = e.length; t < n; t += 2) r.push(parseInt(e.slice(t, t + 2), 16))
                    } else r = e;
                    return ((e, r) => {
                        for (var t, n, a = r.length, i = e.blocks, o = e.blockCount << 2, s = e.blockCount, l = e.outputBlocks, c = e.s, u = 0; u < a;) {
                            if (e.reset)
                                for (e.reset = !1, i[0] = e.block, t = 1; t < s + 1; ++t) i[t] = 0;
                            if ("string" != typeof r)
                                for (t = e.start; u < a && t < o; ++u) i[t >> 2] |= r[u] << j[3 & t++];
                            else
                                for (t = e.start; u < a && t < o; ++u)(n = r.charCodeAt(u)) < 128 ? i[t >> 2] |= n << j[3 & t++] : n < 2048 ? (i[t >> 2] |= (192 | n >> 6) << j[3 & t++], i[t >> 2] |= (128 | 63 & n) << j[3 & t++]) : n < 55296 || n >= 57344 ? (i[t >> 2] |= (224 | n >> 12) << j[3 & t++], i[t >> 2] |= (128 | n >> 6 & 63) << j[3 & t++], i[t >> 2] |= (128 | 63 & n) << j[3 & t++]) : (n = 65536 + ((1023 & n) << 10 | 1023 & r.charCodeAt(++u)), i[t >> 2] |= (240 | n >> 18) << j[3 & t++], i[t >> 2] |= (128 | n >> 12 & 63) << j[3 & t++], i[t >> 2] |= (128 | n >> 6 & 63) << j[3 & t++], i[t >> 2] |= (128 | 63 & n) << j[3 & t++]);
                            if (e.lastByteIndex = t, t >= o) {
                                for (e.start = t - o, e.block = i[s], t = 0; t < s; ++t) c[t] ^= i[t];
                                R(c), e.reset = !0
                            } else e.start = t
                        }
                        if (i[(t = e.lastByteIndex) >> 2] |= D[3 & t], e.lastByteIndex === o)
                            for (i[0] = i[s], t = 1; t < s + 1; ++t) i[t] = 0;
                        for (i[s - 1] |= 2147483648, t = 0; t < s; ++t) c[t] ^= i[t];
                        R(c);
                        var d, h = "",
                            p = 0;
                        for (t = 0; p < l;) {
                            for (t = 0; t < s && p < l; ++t, ++p) d = c[t], h += O[d >> 4 & 15] + O[15 & d] + O[d >> 12 & 15] + O[d >> 8 & 15] + O[d >> 20 & 15] + O[d >> 16 & 15] + O[d >> 28 & 15] + O[d >> 24 & 15];
                            p % s == 0 && (R(c), t = 0)
                        }
                        return "0x" + h
                    })((e => {
                        return {
                            blocks: [],
                            reset: !0,
                            block: 0,
                            start: 0,
                            blockCount: 1600 - (e << 1) >> 5,
                            outputBlocks: e >> 5,
                            s: (r = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [].concat(r, r, r, r, r))
                        };
                        var r
                    })(T), r)
                });
            var T;
            const I = new _.a.ec("secp256k1");

            function N() {
                const e = I.genKeyPair();
                return {
                    privateKey: u(e.getPrivate("hex")),
                    publicKey: u(e.getPublic(!0, "hex"))
                }
            }

            function H(e) {
                const r = I.keyFromPrivate(e);
                return {
                    privateKey: u(r.getPrivate("hex")),
                    publicKey: u(r.getPublic(!0, "hex"))
                }
            }
            const U = u("302d300706052b8104000a032200");
            class EcdsaPublicKey_EcdsaPublicKey extends Key {
                constructor(e) {
                    super(), this._keyData = e
                }
                get _type() {
                    return "secp256k1"
                }
                static fromBytes(e) {
                    switch (e.length) {
                        case 33:
                            return EcdsaPublicKey_EcdsaPublicKey.fromBytesRaw(e);
                        case 47:
                            return EcdsaPublicKey_EcdsaPublicKey.fromBytesDer(e);
                        default:
                            throw new BadKeyError(`invalid public key length: ${e.length} bytes`)
                    }
                }
                static fromBytesDer(e) {
                    if (47 != e.length || !s(e, U)) throw new BadKeyError(`invalid public key length: ${e.length} bytes`);
                    return new EcdsaPublicKey_EcdsaPublicKey(e.subarray(U.length))
                }
                static fromBytesRaw(e) {
                    if (33 != e.length) throw new BadKeyError(`invalid public key length: ${e.length} bytes`);
                    return new EcdsaPublicKey_EcdsaPublicKey(e)
                }
                static fromString(e) {
                    return EcdsaPublicKey_EcdsaPublicKey.fromBytes(u(e))
                }
                verify(e, r) {
                    return function(e, r, t) {
                        const n = c(r),
                            a = u(z("0x" + n));
                        return I.keyFromPublic(e).verify(a, {
                            r: t.subarray(0, 32),
                            s: t.subarray(32, 64)
                        })
                    }(this._keyData, e, r)
                }
                toBytesDer() {
                    const e = new Uint8Array(U.length + this._keyData.length);
                    return e.set(U, 0), e.set(this._keyData, U.length), e
                }
                toBytesRaw() {
                    return new Uint8Array(this._keyData.subarray())
                }
                toEthereumAddress() {
                    const e = u(z("0x" + c((r = this.toBytesRaw(), u(I.keyFromPublic(r).getPublic(!1, "hex"))).subarray(1))));
                    var r;
                    return c(e.subarray(12))
                }
                equals(e) {
                    return o(this._keyData, e._keyData)
                }
            }
            const L = u("3030020100300706052b8104000a04220420");
            class EcdsaPrivateKey_EcdsaPrivateKey {
                constructor(e, r) {
                    this._keyPair = e, this._chainCode = null != r ? r : null
                }
                get _type() {
                    return "secp256k1"
                }
                static generate() {
                    return new EcdsaPrivateKey_EcdsaPrivateKey(N())
                }
                static async generateAsync() {
                    return new EcdsaPrivateKey_EcdsaPrivateKey(await async function() {
                        return Promise.resolve(N())
                    }())
                }
                static fromBytes(e) {
                    switch (e.length) {
                        case 32:
                            return EcdsaPrivateKey_EcdsaPrivateKey.fromBytesRaw(e);
                        case 50:
                            return EcdsaPrivateKey_EcdsaPrivateKey.fromBytesDer(e);
                        default:
                            throw new BadKeyError(`invalid private key length: ${e.length} bytes`)
                    }
                }
                static fromBytesDer(e) {
                    if (32 != e.length && !s(e, L)) throw new BadKeyError("invalid der header");
                    return new EcdsaPrivateKey_EcdsaPrivateKey(H(e.subarray(L.length)))
                }
                static fromBytesRaw(e) {
                    return new EcdsaPrivateKey_EcdsaPrivateKey(H(e))
                }
                static fromString(e) {
                    return EcdsaPrivateKey_EcdsaPrivateKey.fromBytes(u(e))
                }
                static fromStringDer(e) {
                    return EcdsaPrivateKey_EcdsaPrivateKey.fromBytesDer(u(e))
                }
                static fromStringRaw(e) {
                    return EcdsaPrivateKey_EcdsaPrivateKey.fromBytesRaw(u(e))
                }
                get publicKey() {
                    return new EcdsaPublicKey_EcdsaPublicKey(this._keyPair.publicKey)
                }
                sign(e) {
                    return function(e, r) {
                        const t = c(r),
                            n = u(z("0x" + t)),
                            a = I.keyFromPrivate(e).sign(n),
                            i = a.r.toArray("be", 32),
                            o = a.s.toArray("be", 32),
                            s = new Uint8Array(64);
                        return s.set(i, 0), s.set(o, 32), s
                    }(this._keyPair.privateKey, e)
                }
                toBytesDer() {
                    const e = new Uint8Array(L.length + 32);
                    return e.set(L, 0), e.set(this._keyPair.privateKey.subarray(0, 32), L.length), e
                }
                toBytesRaw() {
                    const e = new Uint8Array(32);
                    return e.set(this._keyPair.privateKey.slice(0, 32), 0), e
                }
            }
            const F = [44, 3030, 0, 0],
                V = [-2147483604, -2147480618, -2147483648, 0],
                G = [-2147483604, -2147483588, -2147483648, 0, 0];
            class Mnemonic_Mnemonic {
                constructor({
                    words: e,
                    legacy: r
                }) {
                    this.words = e, this._isLegacy = r
                }
                static generate() {
                    return Mnemonic_Mnemonic._generate(24)
                }
                static generate12() {
                    return Mnemonic_Mnemonic._generate(12)
                }
                static async _generate(e) {
                    let r;
                    if (12 === e) r = 16;
                    else {
                        if (24 !== e) throw new Error(`unsupported phrase length ${e}, only 12 or 24 are supported`);
                        r = 32
                    }
                    const t = await h(r),
                        n = ($(Array.from(t)) + await W(t)).match(/(.{1,11})/g),
                        a = (null != n ? n : []).map(e => g[X(e)]);
                    return new Mnemonic_Mnemonic({
                        words: a,
                        legacy: !1
                    })
                }
                static fromWords(e) {
                    return new Mnemonic_Mnemonic({
                        words: e,
                        legacy: 22 === e.length
                    })._validate()
                }
                toPrivateKey(e = "") {
                    return this.toEd25519PrivateKey(e)
                }
                async toEd25519PrivateKey(e = "", r = F) {
                    if (this._isLegacy) {
                        if (e.length > 0) throw new Error("legacy 22-word mnemonics do not support passphrases");
                        return this.toLegacyPrivateKey()
                    }
                    let {
                        keyData: t,
                        chainCode: a
                    } = await this._toKeyData(e, "ed25519 seed");
                    for (const e of r)({
                        keyData: t,
                        chainCode: a
                    } = await P(t, a, e));
                    const o = i.a.sign.keyPair.fromSeed(t);
                    if (null == n.privateKeyConstructor) throw new Error("PrivateKey not found in cache");
                    return n.privateKeyConstructor(new Ed25519PrivateKey_Ed25519PrivateKey(o, a))
                }
                async toEcdsaPrivateKey(e = "", r = F) {
                    let {
                        keyData: t,
                        chainCode: a
                    } = await this._toKeyData(e, "Bitcoin seed");
                    for (const e of r)({
                        keyData: t,
                        chainCode: a
                    } = await S(t, a, e));
                    if (null == n.privateKeyConstructor) throw new Error("PrivateKey not found in cache");
                    return n.privateKeyConstructor(new EcdsaPrivateKey_EcdsaPrivateKey(H(t), a))
                }
                async _toKeyData(e, r) {
                    const t = await async function(e, r) {
                        const t = e.join(" "),
                            n = ("mnemonic" + r).normalize("NFKD");
                        return B(k, t, n, 2048, 64)
                    }(this.words, e), n = await E(k, r, t);
                    return {
                        keyData: n.subarray(0, 32),
                        chainCode: n.subarray(32)
                    }
                }
                static async fromString(e) {
                    return Mnemonic_Mnemonic.fromWords(e.split(/\s|,/))
                }
                async _validate() {
                    if (this._isLegacy) {
                        if (22 !== this.words.length) throw new BadMnemonicError_BadMnemonicError(this, f.BadLength, []);
                        const e = this.words.reduce((e, r, t) => y.includes(r.toLowerCase()) ? e : [...e, t], []);
                        if (e.length > 0) throw new BadMnemonicError_BadMnemonicError(this, f.UnknownWords, e);
                        const [r, t] = M(this.words, y);
                        if (t !== function(e) {
                                let r = 255;
                                for (let t = 0; t < e.length - 1; t += 1) {
                                    r ^= e[t];
                                    for (let e = 0; e < 8; e += 1) r = r >>> 1 ^ (0 == (1 & r) ? 0 : 178)
                                }
                                return 255 ^ r
                            }(r)) throw new BadMnemonicError_BadMnemonicError(this, f.ChecksumMismatch, [])
                    } else {
                        if (12 !== this.words.length && 24 !== this.words.length) throw new BadMnemonicError_BadMnemonicError(this, f.BadLength, []);
                        const e = this.words.reduce((e, r, t) => g.includes(r) ? e : [...e, t], []);
                        if (e.length > 0) throw new BadMnemonicError_BadMnemonicError(this, f.UnknownWords, e);
                        const r = this.words.map(e => g.indexOf(e).toString(2).padStart(11, "0")).join(""),
                            t = 32 * Math.floor(r.length / 33),
                            n = r.slice(0, t),
                            a = r.slice(t),
                            i = n.match(/(.{1,8})/g).map(X);
                        if (await W(Uint8Array.from(i)) !== a) throw new BadMnemonicError_BadMnemonicError(this, f.ChecksumMismatch, [])
                    }
                    return this
                }
                async toLegacyPrivateKey() {
                    let e;
                    if (this._isLegacy ? [e] = M(this.words, y) : e = await async function(e, r) {
                            const t = 11 * e.length,
                                n = [];
                            n.fill(!1, 0, t);
                            for (const [t, a] of e.entries()) {
                                const e = r.indexOf(a.toLowerCase());
                                if (e < 0) throw new Error("Word not found in wordlist: " + a);
                                for (let r = 0; r < 11; r += 1) n[11 * t + r] = 0 != (e & 1 << 10 - r)
                            }
                            const a = t / 33,
                                i = t - a,
                                o = new Uint8Array(i / 8);
                            for (let e = 0; e < o.length; e += 1)
                                for (let r = 0; r < 8; r += 1) n[8 * e + r] && (o[e] |= 1 << 7 - r);
                            const s = function(e) {
                                const r = [];
                                r.fill(!1, 0, 8 * e.length);
                                for (let t = 0; t < e.length; t += 1)
                                    for (let n = 0; n < 8; n += 1) r[8 * t + n] = 0 != (e[t] & 1 << 7 - n);
                                return r
                            }(await m(o));
                            for (let e = 0; e < a; e += 1)
                                if (n[i + e] !== s[e]) throw new Error("Checksum mismatch");
                            return o
                        }(this.words, g), null == n.privateKeyFromBytes) throw new Error("PrivateKey not found in cache");
                    return n.privateKeyFromBytes(e)
                }
                toString() {
                    return this.words.join(" ")
                }
            }

            function X(e) {
                return parseInt(e, 2)
            }

            function $(e) {
                return e.map(e => e.toString(2).padStart(8, "0")).join("")
            }
            async function W(e) {
                const r = 8 * e.length / 32,
                    t = await m(e);
                return $(Array.from(t)).slice(0, r)
            }
            class PublicKey_PublicKey extends Key {
                constructor(e) {
                    super(), this._key = e
                }
                get _type() {
                    return this._key._type
                }
                static fromBytes(e) {
                    try {
                        return new PublicKey_PublicKey(Ed25519PublicKey_Ed25519PublicKey.fromBytes(e))
                    } catch {}
                    try {
                        return new PublicKey_PublicKey(EcdsaPublicKey_EcdsaPublicKey.fromBytes(e))
                    } catch {}
                    throw new BadKeyError(`invalid public key length: ${e.length} bytes`)
                }
                static fromBytesED25519(e) {
                    return new PublicKey_PublicKey(Ed25519PublicKey_Ed25519PublicKey.fromBytes(e))
                }
                static fromBytesECDSA(e) {
                    return new PublicKey_PublicKey(EcdsaPublicKey_EcdsaPublicKey.fromBytes(e))
                }
                static fromString(e) {
                    return PublicKey_PublicKey.fromBytes(u(e))
                }
                static fromStringED25519(e) {
                    return PublicKey_PublicKey.fromBytesED25519(u(e))
                }
                static fromStringECDSA(e) {
                    return PublicKey_PublicKey.fromBytesECDSA(u(e))
                }
                verify(e, r) {
                    return this._key.verify(e, r)
                }
                verifyTransaction(e) {
                    console.log("Deprecated: use `@hashgraph/sdk`.PublicKey instead"), e._requireFrozen(), e.isFrozen() || e.freeze();
                    for (const r of e._signedTransactions)
                        if (null != r.sigMap && null != r.sigMap.sigPair) {
                            let e = !1;
                            for (const t of r.sigMap.sigPair) {
                                if (o(t.pubKeyPrefix, this.toBytesRaw())) {
                                    e = !0;
                                    const n = r.bodyBytes,
                                        a = null != t.ed25519 ? t.ed25519 : t.ECDSASecp256k1;
                                    if (!this.verify(n, a)) return !1
                                }
                            }
                            if (!e) return !1
                        } return !0
                }
                toBytes() {
                    return this._key instanceof Ed25519PublicKey_Ed25519PublicKey ? this.toBytesRaw() : this.toBytesDer()
                }
                toBytesDer() {
                    return this._key.toBytesDer()
                }
                toBytesRaw() {
                    return this._key.toBytesRaw()
                }
                toString() {
                    return this.toStringDer()
                }
                toStringDer() {
                    return c(this.toBytesDer())
                }
                toStringRaw() {
                    return c(this.toBytesRaw())
                }
                toEthereumAddress() {
                    if (this._key instanceof EcdsaPublicKey_EcdsaPublicKey) return this._key.toEthereumAddress();
                    throw new Error("unsupported operation on Ed25519PublicKey")
                }
                equals(e) {
                    return (this._key instanceof Ed25519PublicKey_Ed25519PublicKey && e._key instanceof Ed25519PublicKey_Ed25519PublicKey || this._key instanceof EcdsaPublicKey_EcdsaPublicKey && e._key instanceof EcdsaPublicKey_EcdsaPublicKey) && this._key.equals(e._key)
                }
            }
            const J = "AES-128-CTR",
                Y = "AES-128-CBC";
            async function Z(e, r, t, n) {
                let a;
                switch (e.toUpperCase()) {
                    case J:
                        a = {
                            name: "AES-CTR",
                            counter: t,
                            length: 128
                        };
                        break;
                    case Y:
                        a = {
                            name: "AES-CBC",
                            iv: t
                        };
                        break;
                    default:
                        throw new Error("(BUG) non-exhaustive switch statement for CipherAlgorithm")
                }
                const i = await window.crypto.subtle.importKey("raw", r, a.name, !1, ["decrypt"]);
                return new Uint8Array(await window.crypto.subtle.decrypt(a, i, n))
            }
            async function Q(e, r) {
                const t = 262144,
                    n = await h(32),
                    a = await B(w, r, n, t, 32),
                    i = await h(16),
                    o = await async function(e, r, t, n) {
                        let a;
                        switch (e.toUpperCase()) {
                            case J:
                                a = {
                                    name: "AES-CTR",
                                    counter: t,
                                    length: 128
                                };
                                break;
                            case Y:
                                a = {
                                    name: "AES-CBC",
                                    iv: t
                                };
                                break;
                            default:
                                throw new Error("(BUG) non-exhaustive switch statement for CipherAlgorithm")
                        }
                        const i = await window.crypto.subtle.importKey("raw", r, a.name, !1, ["encrypt"]);
                        return new Uint8Array(await window.crypto.subtle.encrypt(a, i, n))
                    }(J, a.slice(0, 16), i, e), s = await E(v, a.slice(16), o), l = {
                        version: 1,
                        crypto: {
                            ciphertext: c(o),
                            cipherparams: {
                                iv: c(i)
                            },
                            cipher: J,
                            kdf: "pbkdf2",
                            kdfparams: {
                                dkLen: 32,
                                salt: c(n),
                                c: t,
                                prf: "hmac-sha256"
                            },
                            mac: c(s)
                        }
                    };
                return b(JSON.stringify(l))
            }
            async function ee(e, r) {
                const t = JSON.parse((n = e, (new TextDecoder).decode(n)));
                var n;
                if (1 !== t.version) throw new BadKeyError("unsupported keystore version: " + t.version);
                const {
                    ciphertext: a,
                    cipherparams: {
                        iv: i
                    },
                    cipher: o,
                    kdf: s,
                    kdfparams: {
                        dkLen: l,
                        salt: c,
                        c: d,
                        prf: h
                    },
                    mac: p
                } = t.crypto;
                if ("pbkdf2" !== s) throw new BadKeyError('unsupported key derivation function:" + ' + s);
                if ("hmac-sha256" !== h) throw new BadKeyError("unsupported key derivation hash function: " + h);
                const f = u(c),
                    y = u(i),
                    g = u(a),
                    m = await B(w, r, f, d, l),
                    b = u(p),
                    k = await E(v, m.slice(16), g);
                if (!b.every((e, r) => e === k[r])) throw new BadKeyError("HMAC mismatch; passphrase is incorrect");
                return Z(o, m.slice(0, 16), y, g)
            }

            function re(e) {
                return te(e)[0]
            }

            function te(e) {
                const [r, t] = function(e) {
                    if (e[0] < 128) return [e[0], e.subarray(1)];
                    const r = e[0] - 128,
                        t = e.subarray(1, r + 1),
                        n = e.subarray(r + 1);
                    return [ie(t), n]
                }(e.subarray(1)), n = t.subarray(0, r), a = t.subarray(r);
                switch (e[0]) {
                    case 2:
                        return [{
                            int: ie(n)
                        }, a];
                    case 4:
                        return [{
                            bytes: n
                        }, a];
                    case 5:
                        return [{}, a];
                    case 6:
                        return [{
                            ident: ae(n)
                        }, a];
                    case 48:
                        return [{
                            seq: ne(n)
                        }, a];
                    default:
                        throw new Error("unsupported DER type tag: " + e[0])
                }
            }

            function ne(e) {
                let r = e;
                const t = [];
                for (; 0 !== r.length;) {
                    const [e, n] = te(r);
                    t.push(e), r = n
                }
                return t
            }

            function ae(e) {
                const r = [Math.floor(e[0] / 40), e[0] % 40];
                let t = 0;
                for (const n of e.subarray(1)) t *= 128, n < 128 ? (t += n, r.push(t), t = 0) : t += 127 & n;
                return r.join(".")
            }

            function ie(e) {
                const r = e.length;
                if (1 === r) return e[0];
                let t = new DataView(e.buffer, e.byteOffset, e.byteLength);
                if (2 === r) return t.getUint16(0, !1);
                if (3 === r) {
                    const r = Uint8Array.of(0, ...e);
                    t = new DataView(r.buffer, r.byteOffset, r.byteLength)
                }
                if (r > 4) throw new Error(`unsupported DER integer length of ${r} bytes`);
                return t.getUint32(0, !1)
            }
            class AlgorithmIdentifier {
                constructor(e) {
                    if (!("seq" in e && e.seq.length >= 1 && "ident" in e.seq[0])) throw new Error("error parsing AlgorithmIdentifier from " + JSON.stringify(e));
                    this.algIdent = e.seq[0].ident, this.parameters = e.seq[1]
                }
                toString() {
                    return JSON.stringify(this)
                }
            }
            class PBES2Params {
                constructor(e) {
                    if (!("seq" in e) || 2 !== e.seq.length) throw new Error("error parsing PBES2Params from " + JSON.stringify(e));
                    this.kdf = new AlgorithmIdentifier(e.seq[0]), this.encScheme = new AlgorithmIdentifier(e.seq[1])
                }
            }
            class PBKDF2Params {
                constructor(e) {
                    if ("seq" in e && e.seq.length >= 2 && "bytes" in e.seq[0] && "int" in e.seq[1] && (this.salt = e.seq[0].bytes, this.iterCount = e.seq[1].int, e.seq.length > 2)) return "seq" in e.seq[2] ? void(this.prf = new AlgorithmIdentifier(e.seq[2])) : ("int" in e.seq[2] && (this.keyLength = e.seq[2].int), void(4 === e.seq.length && (this.prf = new AlgorithmIdentifier(e.seq[3]))));
                    throw new Error("error parsing PBKDF2Params from " + JSON.stringify(e))
                }
            }
            class pkcs_PrivateKeyInfo {
                constructor(e) {
                    if (!("seq" in e) || 3 !== e.seq.length) throw new Error("error parsing PrivateKeyInfo from " + JSON.stringify(e));
                    if (!("int" in e.seq[0]) || 0 !== e.seq[0].int) throw new Error("expected version = 0, got " + JSON.stringify(e.seq[0]));
                    if (this.version = 0, this.algId = new AlgorithmIdentifier(e.seq[1]), !("bytes" in e.seq[2])) throw new Error("expected octet string as 3rd element, got " + JSON.stringify(e.seq[2]));
                    this.privateKey = e.seq[2].bytes
                }
                static parse(e) {
                    return new pkcs_PrivateKeyInfo(re(e))
                }
            }
            class pkcs_EncryptedPrivateKeyInfo {
                constructor(e) {
                    if ("seq" in e && 2 === e.seq.length && "bytes" in e.seq[1]) return this.algId = new AlgorithmIdentifier(e.seq[0]), void(this.data = e.seq[1].bytes);
                    throw new Error("error parsing EncryptedPrivateKeyInfo from " + JSON.stringify(e))
                }
                static parse(e) {
                    return new pkcs_EncryptedPrivateKeyInfo(re(e))
                }
                async decrypt(e) {
                    if ("1.2.840.113549.1.5.13" !== this.algId.algIdent || !this.algId.parameters) throw new Error("unsupported key encryption algorithm: " + this.algId.toString());
                    const r = new PBES2Params(this.algId.parameters);
                    if ("1.2.840.113549.1.5.12" !== r.kdf.algIdent || !r.kdf.parameters) throw new Error("unsupported key derivation function: " + r.kdf.toString());
                    const t = new PBKDF2Params(r.kdf.parameters);
                    if (!t.prf) throw new Error("unsupported PRF HMAC-SHA-1");
                    if ("1.2.840.113549.2.9" !== t.prf.algIdent) throw new Error("unsupported PRF " + t.prf.toString());
                    if ("2.16.840.1.101.3.4.1.2" !== r.encScheme.algIdent) throw new Error("unsupported encryption scheme: " + r.encScheme.toString());
                    if (!r.encScheme.parameters || !("bytes" in r.encScheme.parameters)) throw new Error("expected IV as bytes for AES-128-CBC, got: " + JSON.stringify(r.encScheme.parameters));
                    const n = t.keyLength || 16,
                        a = r.encScheme.parameters.bytes,
                        i = await B(w, e, t.salt, t.iterCount, n),
                        o = await Z(Y, i, a, this.data);
                    return pkcs_PrivateKeyInfo.parse(o)
                }
            }
            async function oe(e, r) {
                const t = r ? "-----BEGIN ENCRYPTED PRIVATE KEY-----\n" : "-----BEGIN PRIVATE KEY-----\n",
                    n = r ? "-----END ENCRYPTED PRIVATE KEY-----\n" : "-----END PRIVATE KEY-----\n",
                    a = e.indexOf(t),
                    i = e.indexOf(n);
                if (-1 === a || -1 === i) throw new BadKeyError("failed to find a private key in the PEM file");
                const o = e.slice(a + t.length, i),
                    s = (l = o, Uint8Array.from(atob(l), e => e.charCodeAt(0)));
                var l;
                if (r) {
                    let e;
                    try {
                        e = pkcs_EncryptedPrivateKeyInfo.parse(s)
                    } catch (e) {
                        const r = null != e && null != e.message ? e.message : "";
                        throw new BadKeyError("failed to parse encrypted private key: " + r)
                    }
                    const t = await e.decrypt(r);
                    let n = null;
                    if ("1.3.101.112" === t.algId.algIdent) n = Ed25519PrivateKey_Ed25519PrivateKey;
                    else {
                        if ("1.3.132.0.10" !== t.algId.algIdent) throw new BadKeyError("unknown private key algorithm " + t.algId.toString());
                        n = EcdsaPrivateKey_EcdsaPrivateKey
                    }
                    const a = re(t.privateKey);
                    if (!("bytes" in a)) throw new BadKeyError("expected ASN bytes, got " + JSON.stringify(a));
                    return n.fromBytes(a.bytes)
                }
                return s.subarray(16)
            }
            class PrivateKey_PrivateKey extends Key {
                constructor(e) {
                    super(), this._key = e
                }
                get _type() {
                    return this._key._type
                }
                static generateED25519() {
                    return new PrivateKey_PrivateKey(Ed25519PrivateKey_Ed25519PrivateKey.generate())
                }
                static generateECDSA() {
                    return new PrivateKey_PrivateKey(EcdsaPrivateKey_EcdsaPrivateKey.generate())
                }
                static generate() {
                    return PrivateKey_PrivateKey.generateED25519()
                }
                static async generateAsync() {
                    return PrivateKey_PrivateKey.generateED25519Async()
                }
                static async generateED25519Async() {
                    return new PrivateKey_PrivateKey(await Ed25519PrivateKey_Ed25519PrivateKey.generateAsync())
                }
                static async generateECDSAAsync() {
                    return new PrivateKey_PrivateKey(await EcdsaPrivateKey_EcdsaPrivateKey.generateAsync())
                }
                static fromBytes(e) {
                    try {
                        return new PrivateKey_PrivateKey(Ed25519PrivateKey_Ed25519PrivateKey.fromBytes(e))
                    } catch {}
                    try {
                        return new PrivateKey_PrivateKey(EcdsaPrivateKey_EcdsaPrivateKey.fromBytes(e))
                    } catch {}
                    throw new BadKeyError(`invalid private key length: ${e.length} bytes`)
                }
                static fromBytesECDSA(e) {
                    return new PrivateKey_PrivateKey(EcdsaPrivateKey_EcdsaPrivateKey.fromBytes(e))
                }
                static fromBytesED25519(e) {
                    return new PrivateKey_PrivateKey(Ed25519PrivateKey_Ed25519PrivateKey.fromBytes(e))
                }
                static fromString(e) {
                    return PrivateKey_PrivateKey.fromBytes(u(e))
                }
                static fromStringECDSA(e) {
                    return PrivateKey_PrivateKey.fromBytesECDSA(u(e))
                }
                static fromStringED25519(e) {
                    return PrivateKey_PrivateKey.fromBytesED25519(u(e))
                }
                static async fromMnemonic(e, r = "") {
                    return ("string" == typeof e ? await Mnemonic_Mnemonic.fromString(e) : e).toEd25519PrivateKey(r)
                }
                static async fromKeystore(e, r = "") {
                    return PrivateKey_PrivateKey.fromBytes(await ee(e, r))
                }
                static async fromPem(e, r = "") {
                    const t = await oe(e, r);
                    return t instanceof Ed25519PrivateKey_Ed25519PrivateKey || t instanceof EcdsaPrivateKey_EcdsaPrivateKey ? new PrivateKey_PrivateKey(t) : PrivateKey_PrivateKey.fromBytes(t)
                }
                async derive(e) {
                    if (null == this._key._chainCode) throw new Error("this private key does not support key derivation");
                    if (this._key instanceof Ed25519PrivateKey_Ed25519PrivateKey) {
                        const {
                            keyData: r,
                            chainCode: t
                        } = await P(this.toBytesRaw(), this._key._chainCode, e);
                        return new PrivateKey_PrivateKey(new Ed25519PrivateKey_Ed25519PrivateKey(r, t))
                    } {
                        const {
                            keyData: r,
                            chainCode: t
                        } = await S(this.toBytesRaw(), this._key._chainCode, e);
                        return new PrivateKey_PrivateKey(new EcdsaPrivateKey_EcdsaPrivateKey(H(r), t))
                    }
                }
                async legacyDerive(e) {
                    const r = await
                    function(e, r) {
                        const t = new Uint8Array(e.length + 8);
                        t.set(e, 0);
                        const n = new DataView(t.buffer, t.byteOffset, t.byteLength);
                        0xffffffffff === r ? (n.setInt32(e.length + 0, 255), n.setInt32(e.length + 4, -1)) : (n.setInt32(e.length + 0, r < 0 ? -1 : 0), n.setInt32(e.length + 4, r));
                        const a = Uint8Array.from([255]);
                        return B(k, t, a, 2048, 32)
                    }(this.toBytesRaw().subarray(0, 32), e), t = this._key.constructor;
                    return new PrivateKey_PrivateKey(new t(r))
                }
                get publicKey() {
                    return new PublicKey_PublicKey(this._key.publicKey)
                }
                sign(e) {
                    return this._key.sign(e)
                }
                signTransaction(e) {
                    if (e.isFrozen() || e.freeze(), 1 != e._signedTransactions.length) throw new Error("`PrivateKey.signTransaction()` requires `Transaction` to have a single node `AccountId` set");
                    const r = e._signedTransactions[0],
                        t = c(this.publicKey.toBytesRaw());
                    null == r.sigMap && (r.sigMap = {}), null == r.sigMap.sigPair && (r.sigMap.sigPair = []);
                    for (const e of r.sigMap.sigPair)
                        if (null != e.pubKeyPrefix && c(e.pubKeyPrefix) === t) switch (this._type) {
                            case "ED25519":
                                return e.ed25519;
                            case "secp256k1":
                                return e.ECDSASecp256k1
                        }
                    const n = this.sign(null != r.bodyBytes ? r.bodyBytes : new Uint8Array),
                        a = {
                            pubKeyPrefix: this.publicKey.toBytesRaw()
                        };
                    switch (this._type) {
                        case "ED25519":
                            a.ed25519 = n;
                            break;
                        case "secp256k1":
                            a.ECDSASecp256k1 = n
                    }
                    return r.sigMap.sigPair.push(a), e._signerPublicKeys.add(t), n
                }
                isDerivable() {
                    return null != this._key._chainCode
                }
                toBytes() {
                    return this._key instanceof Ed25519PrivateKey_Ed25519PrivateKey ? this.toBytesRaw() : this.toBytesDer()
                }
                toBytesDer() {
                    return this._key.toBytesDer()
                }
                toBytesRaw() {
                    return this._key.toBytesRaw()
                }
                toString() {
                    return this.toStringDer()
                }
                toStringDer() {
                    return c(this.toBytesDer())
                }
                toStringRaw() {
                    return c(this.toBytesRaw())
                }
                toKeystore(e = "") {
                    return Q(this.toBytesRaw(), e)
                }
            }
            n.privateKeyConstructor = e => new PrivateKey_PrivateKey(e), n.privateKeyFromBytes = e => PrivateKey_PrivateKey.fromBytes(e)
        }
    }
]);