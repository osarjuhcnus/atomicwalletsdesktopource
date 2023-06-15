(window.webpackJsonp = window.webpackJsonp || []).push([
    [309], {
        6214: function(e, t, n) {
            ! function(e) {
                "use strict";
                var t = /^-?(?:\d+(?:\.\d*)?|\.\d+)(?:e[+-]?\d+)?$/i,
                    n = Math.ceil,
                    r = Math.floor,
                    i = "[BigNumber Error] ",
                    o = i + "Number primitive has more than 15 significant digits: ",
                    s = 1e14,
                    u = 14,
                    c = 9007199254740991,
                    f = [1, 10, 100, 1e3, 1e4, 1e5, 1e6, 1e7, 1e8, 1e9, 1e10, 1e11, 1e12, 1e13],
                    a = 1e7,
                    l = 1e9;

                function h(e) {
                    var t = 0 | e;
                    return e > 0 || e === t ? t : t - 1
                }

                function p(e) {
                    for (var t, n, r = 1, i = e.length, o = e[0] + ""; r < i;) {
                        for (t = e[r++] + "", n = u - t.length; n--; t = "0" + t);
                        o += t
                    }
                    for (i = o.length; 48 === o.charCodeAt(--i););
                    return o.slice(0, i + 1 || 1)
                }

                function g(e, t) {
                    var n, r, i = e.c,
                        o = t.c,
                        s = e.s,
                        u = t.s,
                        c = e.e,
                        f = t.e;
                    if (!s || !u) return null;
                    if (n = i && !i[0], r = o && !o[0], n || r) return n ? r ? 0 : -u : s;
                    if (s != u) return s;
                    if (n = s < 0, r = c == f, !i || !o) return r ? 0 : !i ^ n ? 1 : -1;
                    if (!r) return c > f ^ n ? 1 : -1;
                    for (u = (c = i.length) < (f = o.length) ? c : f, s = 0; s < u; s++)
                        if (i[s] != o[s]) return i[s] > o[s] ^ n ? 1 : -1;
                    return c == f ? 0 : c > f ^ n ? 1 : -1
                }

                function m(e, t, n, o) {
                    if (e < t || e > n || e !== r(e)) throw Error(i + (o || "Argument") + ("number" == typeof e ? e < t || e > n ? " out of range: " : " not an integer: " : " not a primitive number: ") + String(e))
                }

                function d(e) {
                    var t = e.c.length - 1;
                    return h(e.e / u) == t && e.c[t] % 2 != 0
                }

                function w(e, t) {
                    return (e.length > 1 ? e.charAt(0) + "." + e.slice(1) : e) + (t < 0 ? "e" : "e+") + t
                }

                function N(e, t, n) {
                    var r, i;
                    if (t < 0) {
                        for (i = n + "."; ++t; i += n);
                        e = i + e
                    } else if (++t > (r = e.length)) {
                        for (i = n, t -= r; --t; i += n);
                        e += i
                    } else t < r && (e = e.slice(0, t) + "." + e.slice(t));
                    return e
                }
                var y = function e(y) {
                        var b, v, O, _, A, E, B, D, S, R = q.prototype = {
                                constructor: q,
                                toString: null,
                                valueOf: null
                            },
                            C = new q(1),
                            P = 20,
                            U = 4,
                            L = -7,
                            T = 21,
                            F = -1e7,
                            M = 1e7,
                            k = !1,
                            x = 1,
                            I = 0,
                            j = {
                                prefix: "",
                                groupSize: 3,
                                secondaryGroupSize: 0,
                                groupSeparator: ",",
                                decimalSeparator: ".",
                                fractionGroupSize: 0,
                                fractionGroupSeparator: " ",
                                suffix: ""
                            },
                            G = "0123456789abcdefghijklmnopqrstuvwxyz";

                        function q(e, n) {
                            var i, s, f, a, l, h, p, g, d = this;
                            if (!(d instanceof q)) return new q(e, n);
                            if (null == n) {
                                if (e && !0 === e._isBigNumber) return d.s = e.s, void(!e.c || e.e > M ? d.c = d.e = null : e.e < F ? d.c = [d.e = 0] : (d.e = e.e, d.c = e.c.slice()));
                                if ((h = "number" == typeof e) && 0 * e == 0) {
                                    if (d.s = 1 / e < 0 ? (e = -e, -1) : 1, e === ~~e) {
                                        for (a = 0, l = e; l >= 10; l /= 10, a++);
                                        return void(a > M ? d.c = d.e = null : (d.e = a, d.c = [e]))
                                    }
                                    g = String(e)
                                } else {
                                    if (!t.test(g = String(e))) return O(d, g, h);
                                    d.s = 45 == g.charCodeAt(0) ? (g = g.slice(1), -1) : 1
                                }(a = g.indexOf(".")) > -1 && (g = g.replace(".", "")), (l = g.search(/e/i)) > 0 ? (a < 0 && (a = l), a += +g.slice(l + 1), g = g.substring(0, l)) : a < 0 && (a = g.length)
                            } else {
                                if (m(n, 2, G.length, "Base"), 10 == n) return $(d = new q(e), P + d.e + 1, U);
                                if (g = String(e), h = "number" == typeof e) {
                                    if (0 * e != 0) return O(d, g, h, n);
                                    if (d.s = 1 / e < 0 ? (g = g.slice(1), -1) : 1, q.DEBUG && g.replace(/^0\.0*|\./, "").length > 15) throw Error(o + e)
                                } else d.s = 45 === g.charCodeAt(0) ? (g = g.slice(1), -1) : 1;
                                for (i = G.slice(0, n), a = l = 0, p = g.length; l < p; l++)
                                    if (i.indexOf(s = g.charAt(l)) < 0) {
                                        if ("." == s) {
                                            if (l > a) {
                                                a = p;
                                                continue
                                            }
                                        } else if (!f && (g == g.toUpperCase() && (g = g.toLowerCase()) || g == g.toLowerCase() && (g = g.toUpperCase()))) {
                                            f = !0, l = -1, a = 0;
                                            continue
                                        }
                                        return O(d, String(e), h, n)
                                    } h = !1, (a = (g = v(g, n, 10, d.s)).indexOf(".")) > -1 ? g = g.replace(".", "") : a = g.length
                            }
                            for (l = 0; 48 === g.charCodeAt(l); l++);
                            for (p = g.length; 48 === g.charCodeAt(--p););
                            if (g = g.slice(l, ++p)) {
                                if (p -= l, h && q.DEBUG && p > 15 && (e > c || e !== r(e))) throw Error(o + d.s * e);
                                if ((a = a - l - 1) > M) d.c = d.e = null;
                                else if (a < F) d.c = [d.e = 0];
                                else {
                                    if (d.e = a, d.c = [], l = (a + 1) % u, a < 0 && (l += u), l < p) {
                                        for (l && d.c.push(+g.slice(0, l)), p -= u; l < p;) d.c.push(+g.slice(l, l += u));
                                        l = u - (g = g.slice(l)).length
                                    } else l -= p;
                                    for (; l--; g += "0");
                                    d.c.push(+g)
                                }
                            } else d.c = [d.e = 0]
                        }

                        function H(e, t, n, r) {
                            var i, o, s, u, c;
                            if (null == n ? n = U : m(n, 0, 8), !e.c) return e.toString();
                            if (i = e.c[0], s = e.e, null == t) c = p(e.c), c = 1 == r || 2 == r && (s <= L || s >= T) ? w(c, s) : N(c, s, "0");
                            else if (o = (e = $(new q(e), t, n)).e, u = (c = p(e.c)).length, 1 == r || 2 == r && (t <= o || o <= L)) {
                                for (; u < t; c += "0", u++);
                                c = w(c, o)
                            } else if (t -= s, c = N(c, o, "0"), o + 1 > u) {
                                if (--t > 0)
                                    for (c += "."; t--; c += "0");
                            } else if ((t += o - u) > 0)
                                for (o + 1 == u && (c += "."); t--; c += "0");
                            return e.s < 0 && i ? "-" + c : c
                        }

                        function J(e, t) {
                            for (var n, r = 1, i = new q(e[0]); r < e.length; r++) {
                                if (!(n = new q(e[r])).s) {
                                    i = n;
                                    break
                                }
                                t.call(i, n) && (i = n)
                            }
                            return i
                        }

                        function V(e, t, n) {
                            for (var r = 1, i = t.length; !t[--i]; t.pop());
                            for (i = t[0]; i >= 10; i /= 10, r++);
                            return (n = r + n * u - 1) > M ? e.c = e.e = null : n < F ? e.c = [e.e = 0] : (e.e = n, e.c = t), e
                        }

                        function $(e, t, i, o) {
                            var c, a, l, h, p, g, m, d = e.c,
                                w = f;
                            if (d) {
                                e: {
                                    for (c = 1, h = d[0]; h >= 10; h /= 10, c++);
                                    if ((a = t - c) < 0) a += u,
                                    l = t,
                                    m = (p = d[g = 0]) / w[c - l - 1] % 10 | 0;
                                    else if ((g = n((a + 1) / u)) >= d.length) {
                                        if (!o) break e;
                                        for (; d.length <= g; d.push(0));
                                        p = m = 0, c = 1, l = (a %= u) - u + 1
                                    } else {
                                        for (p = h = d[g], c = 1; h >= 10; h /= 10, c++);
                                        m = (l = (a %= u) - u + c) < 0 ? 0 : p / w[c - l - 1] % 10 | 0
                                    }
                                    if (o = o || t < 0 || null != d[g + 1] || (l < 0 ? p : p % w[c - l - 1]), o = i < 4 ? (m || o) && (0 == i || i == (e.s < 0 ? 3 : 2)) : m > 5 || 5 == m && (4 == i || o || 6 == i && (a > 0 ? l > 0 ? p / w[c - l] : 0 : d[g - 1]) % 10 & 1 || i == (e.s < 0 ? 8 : 7)), t < 1 || !d[0]) return d.length = 0,
                                    o ? (t -= e.e + 1, d[0] = w[(u - t % u) % u], e.e = -t || 0) : d[0] = e.e = 0,
                                    e;
                                    if (0 == a ? (d.length = g, h = 1, g--) : (d.length = g + 1, h = w[u - a], d[g] = l > 0 ? r(p / w[c - l] % w[l]) * h : 0), o)
                                        for (;;) {
                                            if (0 == g) {
                                                for (a = 1, l = d[0]; l >= 10; l /= 10, a++);
                                                for (l = d[0] += h, h = 1; l >= 10; l /= 10, h++);
                                                a != h && (e.e++, d[0] == s && (d[0] = 1));
                                                break
                                            }
                                            if (d[g] += h, d[g] != s) break;
                                            d[g--] = 0, h = 1
                                        }
                                    for (a = d.length; 0 === d[--a]; d.pop());
                                }
                                e.e > M ? e.c = e.e = null : e.e < F && (e.c = [e.e = 0])
                            }
                            return e
                        }

                        function z(e) {
                            var t, n = e.e;
                            return null === n ? e.toString() : (t = p(e.c), t = n <= L || n >= T ? w(t, n) : N(t, n, "0"), e.s < 0 ? "-" + t : t)
                        }
                        return q.clone = e, q.ROUND_UP = 0, q.ROUND_DOWN = 1, q.ROUND_CEIL = 2, q.ROUND_FLOOR = 3, q.ROUND_HALF_UP = 4, q.ROUND_HALF_DOWN = 5, q.ROUND_HALF_EVEN = 6, q.ROUND_HALF_CEIL = 7, q.ROUND_HALF_FLOOR = 8, q.EUCLID = 9, q.config = q.set = function(e) {
                            var t, n;
                            if (null != e) {
                                if ("object" != typeof e) throw Error(i + "Object expected: " + e);
                                if (e.hasOwnProperty(t = "DECIMAL_PLACES") && (m(n = e[t], 0, l, t), P = n), e.hasOwnProperty(t = "ROUNDING_MODE") && (m(n = e[t], 0, 8, t), U = n), e.hasOwnProperty(t = "EXPONENTIAL_AT") && ((n = e[t]) && n.pop ? (m(n[0], -l, 0, t), m(n[1], 0, l, t), L = n[0], T = n[1]) : (m(n, -l, l, t), L = -(T = n < 0 ? -n : n))), e.hasOwnProperty(t = "RANGE"))
                                    if ((n = e[t]) && n.pop) m(n[0], -l, -1, t), m(n[1], 1, l, t), F = n[0], M = n[1];
                                    else {
                                        if (m(n, -l, l, t), !n) throw Error(i + t + " cannot be zero: " + n);
                                        F = -(M = n < 0 ? -n : n)
                                    } if (e.hasOwnProperty(t = "CRYPTO")) {
                                    if ((n = e[t]) !== !!n) throw Error(i + t + " not true or false: " + n);
                                    if (n) {
                                        if ("undefined" == typeof crypto || !crypto || !crypto.getRandomValues && !crypto.randomBytes) throw k = !n, Error(i + "crypto unavailable");
                                        k = n
                                    } else k = n
                                }
                                if (e.hasOwnProperty(t = "MODULO_MODE") && (m(n = e[t], 0, 9, t), x = n), e.hasOwnProperty(t = "POW_PRECISION") && (m(n = e[t], 0, l, t), I = n), e.hasOwnProperty(t = "FORMAT")) {
                                    if ("object" != typeof(n = e[t])) throw Error(i + t + " not an object: " + n);
                                    j = n
                                }
                                if (e.hasOwnProperty(t = "ALPHABET")) {
                                    if ("string" != typeof(n = e[t]) || /^.$|[+-.\s]|(.).*\1/.test(n)) throw Error(i + t + " invalid: " + n);
                                    G = n
                                }
                            }
                            return {
                                DECIMAL_PLACES: P,
                                ROUNDING_MODE: U,
                                EXPONENTIAL_AT: [L, T],
                                RANGE: [F, M],
                                CRYPTO: k,
                                MODULO_MODE: x,
                                POW_PRECISION: I,
                                FORMAT: j,
                                ALPHABET: G
                            }
                        }, q.isBigNumber = function(e) {
                            if (!e || !0 !== e._isBigNumber) return !1;
                            if (!q.DEBUG) return !0;
                            var t, n, o = e.c,
                                c = e.e,
                                f = e.s;
                            e: if ("[object Array]" == {}.toString.call(o)) {
                                if ((1 === f || -1 === f) && c >= -l && c <= l && c === r(c)) {
                                    if (0 === o[0]) {
                                        if (0 === c && 1 === o.length) return !0;
                                        break e
                                    }
                                    if ((t = (c + 1) % u) < 1 && (t += u), String(o[0]).length == t) {
                                        for (t = 0; t < o.length; t++)
                                            if ((n = o[t]) < 0 || n >= s || n !== r(n)) break e;
                                        if (0 !== n) return !0
                                    }
                                }
                            } else if (null === o && null === c && (null === f || 1 === f || -1 === f)) return !0;
                            throw Error(i + "Invalid BigNumber: " + e)
                        }, q.maximum = q.max = function() {
                            return J(arguments, R.lt)
                        }, q.minimum = q.min = function() {
                            return J(arguments, R.gt)
                        }, q.random = (_ = 9007199254740992 * Math.random() & 2097151 ? function() {
                            return r(9007199254740992 * Math.random())
                        } : function() {
                            return 8388608 * (1073741824 * Math.random() | 0) + (8388608 * Math.random() | 0)
                        }, function(e) {
                            var t, o, s, c, a, h = 0,
                                p = [],
                                g = new q(C);
                            if (null == e ? e = P : m(e, 0, l), c = n(e / u), k)
                                if (crypto.getRandomValues) {
                                    for (t = crypto.getRandomValues(new Uint32Array(c *= 2)); h < c;)(a = 131072 * t[h] + (t[h + 1] >>> 11)) >= 9e15 ? (o = crypto.getRandomValues(new Uint32Array(2)), t[h] = o[0], t[h + 1] = o[1]) : (p.push(a % 1e14), h += 2);
                                    h = c / 2
                                } else {
                                    if (!crypto.randomBytes) throw k = !1, Error(i + "crypto unavailable");
                                    for (t = crypto.randomBytes(c *= 7); h < c;)(a = 281474976710656 * (31 & t[h]) + 1099511627776 * t[h + 1] + 4294967296 * t[h + 2] + 16777216 * t[h + 3] + (t[h + 4] << 16) + (t[h + 5] << 8) + t[h + 6]) >= 9e15 ? crypto.randomBytes(7).copy(t, h) : (p.push(a % 1e14), h += 7);
                                    h = c / 7
                                } if (!k)
                                for (; h < c;)(a = _()) < 9e15 && (p[h++] = a % 1e14);
                            for (c = p[--h], e %= u, c && e && (a = f[u - e], p[h] = r(c / a) * a); 0 === p[h]; p.pop(), h--);
                            if (h < 0) p = [s = 0];
                            else {
                                for (s = -1; 0 === p[0]; p.splice(0, 1), s -= u);
                                for (h = 1, a = p[0]; a >= 10; a /= 10, h++);
                                h < u && (s -= u - h)
                            }
                            return g.e = s, g.c = p, g
                        }), q.sum = function() {
                            for (var e = 1, t = arguments, n = new q(t[0]); e < t.length;) n = n.plus(t[e++]);
                            return n
                        }, v = function() {
                            function e(e, t, n, r) {
                                for (var i, o, s = [0], u = 0, c = e.length; u < c;) {
                                    for (o = s.length; o--; s[o] *= t);
                                    for (s[0] += r.indexOf(e.charAt(u++)), i = 0; i < s.length; i++) s[i] > n - 1 && (null == s[i + 1] && (s[i + 1] = 0), s[i + 1] += s[i] / n | 0, s[i] %= n)
                                }
                                return s.reverse()
                            }
                            return function(t, n, r, i, o) {
                                var s, u, c, f, a, l, h, g, m = t.indexOf("."),
                                    d = P,
                                    w = U;
                                for (m >= 0 && (f = I, I = 0, t = t.replace(".", ""), l = (g = new q(n)).pow(t.length - m), I = f, g.c = e(N(p(l.c), l.e, "0"), 10, r, "0123456789"), g.e = g.c.length), c = f = (h = e(t, n, r, o ? (s = G, "0123456789") : (s = "0123456789", G))).length; 0 == h[--f]; h.pop());
                                if (!h[0]) return s.charAt(0);
                                if (m < 0 ? --c : (l.c = h, l.e = c, l.s = i, h = (l = b(l, g, d, w, r)).c, a = l.r, c = l.e), m = h[u = c + d + 1], f = r / 2, a = a || u < 0 || null != h[u + 1], a = w < 4 ? (null != m || a) && (0 == w || w == (l.s < 0 ? 3 : 2)) : m > f || m == f && (4 == w || a || 6 == w && 1 & h[u - 1] || w == (l.s < 0 ? 8 : 7)), u < 1 || !h[0]) t = a ? N(s.charAt(1), -d, s.charAt(0)) : s.charAt(0);
                                else {
                                    if (h.length = u, a)
                                        for (--r; ++h[--u] > r;) h[u] = 0, u || (++c, h = [1].concat(h));
                                    for (f = h.length; !h[--f];);
                                    for (m = 0, t = ""; m <= f; t += s.charAt(h[m++]));
                                    t = N(t, c, s.charAt(0))
                                }
                                return t
                            }
                        }(), b = function() {
                            function e(e, t, n) {
                                var r, i, o, s, u = 0,
                                    c = e.length,
                                    f = t % a,
                                    l = t / a | 0;
                                for (e = e.slice(); c--;) u = ((i = f * (o = e[c] % a) + (r = l * o + (s = e[c] / a | 0) * f) % a * a + u) / n | 0) + (r / a | 0) + l * s, e[c] = i % n;
                                return u && (e = [u].concat(e)), e
                            }

                            function t(e, t, n, r) {
                                var i, o;
                                if (n != r) o = n > r ? 1 : -1;
                                else
                                    for (i = o = 0; i < n; i++)
                                        if (e[i] != t[i]) {
                                            o = e[i] > t[i] ? 1 : -1;
                                            break
                                        } return o
                            }

                            function n(e, t, n, r) {
                                for (var i = 0; n--;) e[n] -= i, i = e[n] < t[n] ? 1 : 0, e[n] = i * r + e[n] - t[n];
                                for (; !e[0] && e.length > 1; e.splice(0, 1));
                            }
                            return function(i, o, c, f, a) {
                                var l, p, g, m, d, w, N, y, b, v, O, _, A, E, B, D, S, R = i.s == o.s ? 1 : -1,
                                    C = i.c,
                                    P = o.c;
                                if (!(C && C[0] && P && P[0])) return new q(i.s && o.s && (C ? !P || C[0] != P[0] : P) ? C && 0 == C[0] || !P ? 0 * R : R / 0 : NaN);
                                for (b = (y = new q(R)).c = [], R = c + (p = i.e - o.e) + 1, a || (a = s, p = h(i.e / u) - h(o.e / u), R = R / u | 0), g = 0; P[g] == (C[g] || 0); g++);
                                if (P[g] > (C[g] || 0) && p--, R < 0) b.push(1), m = !0;
                                else {
                                    for (E = C.length, D = P.length, g = 0, R += 2, (d = r(a / (P[0] + 1))) > 1 && (P = e(P, d, a), C = e(C, d, a), D = P.length, E = C.length), A = D, O = (v = C.slice(0, D)).length; O < D; v[O++] = 0);
                                    S = P.slice(), S = [0].concat(S), B = P[0], P[1] >= a / 2 && B++;
                                    do {
                                        if (d = 0, (l = t(P, v, D, O)) < 0) {
                                            if (_ = v[0], D != O && (_ = _ * a + (v[1] || 0)), (d = r(_ / B)) > 1)
                                                for (d >= a && (d = a - 1), N = (w = e(P, d, a)).length, O = v.length; 1 == t(w, v, N, O);) d--, n(w, D < N ? S : P, N, a), N = w.length, l = 1;
                                            else 0 == d && (l = d = 1), N = (w = P.slice()).length;
                                            if (N < O && (w = [0].concat(w)), n(v, w, O, a), O = v.length, -1 == l)
                                                for (; t(P, v, D, O) < 1;) d++, n(v, D < O ? S : P, O, a), O = v.length
                                        } else 0 === l && (d++, v = [0]);
                                        b[g++] = d, v[0] ? v[O++] = C[A] || 0 : (v = [C[A]], O = 1)
                                    } while ((A++ < E || null != v[0]) && R--);
                                    m = null != v[0], b[0] || b.splice(0, 1)
                                }
                                if (a == s) {
                                    for (g = 1, R = b[0]; R >= 10; R /= 10, g++);
                                    $(y, c + (y.e = g + p * u - 1) + 1, f, m)
                                } else y.e = p, y.r = +m;
                                return y
                            }
                        }(), A = /^(-?)0([xbo])(?=\w[\w.]*$)/i, E = /^([^.]+)\.$/, B = /^\.([^.]+)$/, D = /^-?(Infinity|NaN)$/, S = /^\s*\+(?=[\w.])|^\s+|\s+$/g, O = function(e, t, n, r) {
                            var o, s = n ? t : t.replace(S, "");
                            if (D.test(s)) e.s = isNaN(s) ? null : s < 0 ? -1 : 1;
                            else {
                                if (!n && (s = s.replace(A, (function(e, t, n) {
                                        return o = "x" == (n = n.toLowerCase()) ? 16 : "b" == n ? 2 : 8, r && r != o ? e : t
                                    })), r && (o = r, s = s.replace(E, "$1").replace(B, "0.$1")), t != s)) return new q(s, o);
                                if (q.DEBUG) throw Error(i + "Not a" + (r ? " base " + r : "") + " number: " + t);
                                e.s = null
                            }
                            e.c = e.e = null
                        }, R.absoluteValue = R.abs = function() {
                            var e = new q(this);
                            return e.s < 0 && (e.s = 1), e
                        }, R.comparedTo = function(e, t) {
                            return g(this, new q(e, t))
                        }, R.decimalPlaces = R.dp = function(e, t) {
                            var n, r, i, o = this;
                            if (null != e) return m(e, 0, l), null == t ? t = U : m(t, 0, 8), $(new q(o), e + o.e + 1, t);
                            if (!(n = o.c)) return null;
                            if (r = ((i = n.length - 1) - h(this.e / u)) * u, i = n[i])
                                for (; i % 10 == 0; i /= 10, r--);
                            return r < 0 && (r = 0), r
                        }, R.dividedBy = R.div = function(e, t) {
                            return b(this, new q(e, t), P, U)
                        }, R.dividedToIntegerBy = R.idiv = function(e, t) {
                            return b(this, new q(e, t), 0, 1)
                        }, R.exponentiatedBy = R.pow = function(e, t) {
                            var o, s, c, f, a, l, h, p, g = this;
                            if ((e = new q(e)).c && !e.isInteger()) throw Error(i + "Exponent not an integer: " + z(e));
                            if (null != t && (t = new q(t)), a = e.e > 14, !g.c || !g.c[0] || 1 == g.c[0] && !g.e && 1 == g.c.length || !e.c || !e.c[0]) return p = new q(Math.pow(+z(g), a ? 2 - d(e) : +z(e))), t ? p.mod(t) : p;
                            if (l = e.s < 0, t) {
                                if (t.c ? !t.c[0] : !t.s) return new q(NaN);
                                (s = !l && g.isInteger() && t.isInteger()) && (g = g.mod(t))
                            } else {
                                if (e.e > 9 && (g.e > 0 || g.e < -1 || (0 == g.e ? g.c[0] > 1 || a && g.c[1] >= 24e7 : g.c[0] < 8e13 || a && g.c[0] <= 9999975e7))) return f = g.s < 0 && d(e) ? -0 : 0, g.e > -1 && (f = 1 / f), new q(l ? 1 / f : f);
                                I && (f = n(I / u + 2))
                            }
                            for (a ? (o = new q(.5), l && (e.s = 1), h = d(e)) : h = (c = Math.abs(+z(e))) % 2, p = new q(C);;) {
                                if (h) {
                                    if (!(p = p.times(g)).c) break;
                                    f ? p.c.length > f && (p.c.length = f) : s && (p = p.mod(t))
                                }
                                if (c) {
                                    if (0 === (c = r(c / 2))) break;
                                    h = c % 2
                                } else if ($(e = e.times(o), e.e + 1, 1), e.e > 14) h = d(e);
                                else {
                                    if (0 == (c = +z(e))) break;
                                    h = c % 2
                                }
                                g = g.times(g), f ? g.c && g.c.length > f && (g.c.length = f) : s && (g = g.mod(t))
                            }
                            return s ? p : (l && (p = C.div(p)), t ? p.mod(t) : f ? $(p, I, U, void 0) : p)
                        }, R.integerValue = function(e) {
                            var t = new q(this);
                            return null == e ? e = U : m(e, 0, 8), $(t, t.e + 1, e)
                        }, R.isEqualTo = R.eq = function(e, t) {
                            return 0 === g(this, new q(e, t))
                        }, R.isFinite = function() {
                            return !!this.c
                        }, R.isGreaterThan = R.gt = function(e, t) {
                            return g(this, new q(e, t)) > 0
                        }, R.isGreaterThanOrEqualTo = R.gte = function(e, t) {
                            return 1 === (t = g(this, new q(e, t))) || 0 === t
                        }, R.isInteger = function() {
                            return !!this.c && h(this.e / u) > this.c.length - 2
                        }, R.isLessThan = R.lt = function(e, t) {
                            return g(this, new q(e, t)) < 0
                        }, R.isLessThanOrEqualTo = R.lte = function(e, t) {
                            return -1 === (t = g(this, new q(e, t))) || 0 === t
                        }, R.isNaN = function() {
                            return !this.s
                        }, R.isNegative = function() {
                            return this.s < 0
                        }, R.isPositive = function() {
                            return this.s > 0
                        }, R.isZero = function() {
                            return !!this.c && 0 == this.c[0]
                        }, R.minus = function(e, t) {
                            var n, r, i, o, c = this,
                                f = c.s;
                            if (t = (e = new q(e, t)).s, !f || !t) return new q(NaN);
                            if (f != t) return e.s = -t, c.plus(e);
                            var a = c.e / u,
                                l = e.e / u,
                                p = c.c,
                                g = e.c;
                            if (!a || !l) {
                                if (!p || !g) return p ? (e.s = -t, e) : new q(g ? c : NaN);
                                if (!p[0] || !g[0]) return g[0] ? (e.s = -t, e) : new q(p[0] ? c : 3 == U ? -0 : 0)
                            }
                            if (a = h(a), l = h(l), p = p.slice(), f = a - l) {
                                for ((o = f < 0) ? (f = -f, i = p) : (l = a, i = g), i.reverse(), t = f; t--; i.push(0));
                                i.reverse()
                            } else
                                for (r = (o = (f = p.length) < (t = g.length)) ? f : t, f = t = 0; t < r; t++)
                                    if (p[t] != g[t]) {
                                        o = p[t] < g[t];
                                        break
                                    } if (o && (i = p, p = g, g = i, e.s = -e.s), (t = (r = g.length) - (n = p.length)) > 0)
                                for (; t--; p[n++] = 0);
                            for (t = s - 1; r > f;) {
                                if (p[--r] < g[r]) {
                                    for (n = r; n && !p[--n]; p[n] = t);
                                    --p[n], p[r] += s
                                }
                                p[r] -= g[r]
                            }
                            for (; 0 == p[0]; p.splice(0, 1), --l);
                            return p[0] ? V(e, p, l) : (e.s = 3 == U ? -1 : 1, e.c = [e.e = 0], e)
                        }, R.modulo = R.mod = function(e, t) {
                            var n, r, i = this;
                            return e = new q(e, t), !i.c || !e.s || e.c && !e.c[0] ? new q(NaN) : !e.c || i.c && !i.c[0] ? new q(i) : (9 == x ? (r = e.s, e.s = 1, n = b(i, e, 0, 3), e.s = r, n.s *= r) : n = b(i, e, 0, x), (e = i.minus(n.times(e))).c[0] || 1 != x || (e.s = i.s), e)
                        }, R.multipliedBy = R.times = function(e, t) {
                            var n, r, i, o, c, f, l, p, g, m, d, w, N, y, b, v = this,
                                O = v.c,
                                _ = (e = new q(e, t)).c;
                            if (!(O && _ && O[0] && _[0])) return !v.s || !e.s || O && !O[0] && !_ || _ && !_[0] && !O ? e.c = e.e = e.s = null : (e.s *= v.s, O && _ ? (e.c = [0], e.e = 0) : e.c = e.e = null), e;
                            for (r = h(v.e / u) + h(e.e / u), e.s *= v.s, (l = O.length) < (m = _.length) && (N = O, O = _, _ = N, i = l, l = m, m = i), i = l + m, N = []; i--; N.push(0));
                            for (y = s, b = a, i = m; --i >= 0;) {
                                for (n = 0, d = _[i] % b, w = _[i] / b | 0, o = i + (c = l); o > i;) n = ((p = d * (p = O[--c] % b) + (f = w * p + (g = O[c] / b | 0) * d) % b * b + N[o] + n) / y | 0) + (f / b | 0) + w * g, N[o--] = p % y;
                                N[o] = n
                            }
                            return n ? ++r : N.splice(0, 1), V(e, N, r)
                        }, R.negated = function() {
                            var e = new q(this);
                            return e.s = -e.s || null, e
                        }, R.plus = function(e, t) {
                            var n, r = this,
                                i = r.s;
                            if (t = (e = new q(e, t)).s, !i || !t) return new q(NaN);
                            if (i != t) return e.s = -t, r.minus(e);
                            var o = r.e / u,
                                c = e.e / u,
                                f = r.c,
                                a = e.c;
                            if (!o || !c) {
                                if (!f || !a) return new q(i / 0);
                                if (!f[0] || !a[0]) return a[0] ? e : new q(f[0] ? r : 0 * i)
                            }
                            if (o = h(o), c = h(c), f = f.slice(), i = o - c) {
                                for (i > 0 ? (c = o, n = a) : (i = -i, n = f), n.reverse(); i--; n.push(0));
                                n.reverse()
                            }
                            for ((i = f.length) - (t = a.length) < 0 && (n = a, a = f, f = n, t = i), i = 0; t;) i = (f[--t] = f[t] + a[t] + i) / s | 0, f[t] = s === f[t] ? 0 : f[t] % s;
                            return i && (f = [i].concat(f), ++c), V(e, f, c)
                        }, R.precision = R.sd = function(e, t) {
                            var n, r, i, o = this;
                            if (null != e && e !== !!e) return m(e, 1, l), null == t ? t = U : m(t, 0, 8), $(new q(o), e, t);
                            if (!(n = o.c)) return null;
                            if (r = (i = n.length - 1) * u + 1, i = n[i]) {
                                for (; i % 10 == 0; i /= 10, r--);
                                for (i = n[0]; i >= 10; i /= 10, r++);
                            }
                            return e && o.e + 1 > r && (r = o.e + 1), r
                        }, R.shiftedBy = function(e) {
                            return m(e, -c, c), this.times("1e" + e)
                        }, R.squareRoot = R.sqrt = function() {
                            var e, t, n, r, i, o = this,
                                s = o.c,
                                u = o.s,
                                c = o.e,
                                f = P + 4,
                                a = new q("0.5");
                            if (1 !== u || !s || !s[0]) return new q(!u || u < 0 && (!s || s[0]) ? NaN : s ? o : 1 / 0);
                            if (0 == (u = Math.sqrt(+z(o))) || u == 1 / 0 ? (((t = p(s)).length + c) % 2 == 0 && (t += "0"), u = Math.sqrt(+t), c = h((c + 1) / 2) - (c < 0 || c % 2), n = new q(t = u == 1 / 0 ? "1e" + c : (t = u.toExponential()).slice(0, t.indexOf("e") + 1) + c)) : n = new q(u + ""), n.c[0])
                                for ((u = (c = n.e) + f) < 3 && (u = 0);;)
                                    if (i = n, n = a.times(i.plus(b(o, i, f, 1))), p(i.c).slice(0, u) === (t = p(n.c)).slice(0, u)) {
                                        if (n.e < c && --u, "9999" != (t = t.slice(u - 3, u + 1)) && (r || "4999" != t)) {
                                            +t && (+t.slice(1) || "5" != t.charAt(0)) || ($(n, n.e + P + 2, 1), e = !n.times(n).eq(o));
                                            break
                                        }
                                        if (!r && ($(i, i.e + P + 2, 0), i.times(i).eq(o))) {
                                            n = i;
                                            break
                                        }
                                        f += 4, u += 4, r = 1
                                    } return $(n, n.e + P + 1, U, e)
                        }, R.toExponential = function(e, t) {
                            return null != e && (m(e, 0, l), e++), H(this, e, t, 1)
                        }, R.toFixed = function(e, t) {
                            return null != e && (m(e, 0, l), e = e + this.e + 1), H(this, e, t)
                        }, R.toFormat = function(e, t, n) {
                            var r, o = this;
                            if (null == n) null != e && t && "object" == typeof t ? (n = t, t = null) : e && "object" == typeof e ? (n = e, e = t = null) : n = j;
                            else if ("object" != typeof n) throw Error(i + "Argument not an object: " + n);
                            if (r = o.toFixed(e, t), o.c) {
                                var s, u = r.split("."),
                                    c = +n.groupSize,
                                    f = +n.secondaryGroupSize,
                                    a = n.groupSeparator || "",
                                    l = u[0],
                                    h = u[1],
                                    p = o.s < 0,
                                    g = p ? l.slice(1) : l,
                                    m = g.length;
                                if (f && (s = c, c = f, f = s, m -= s), c > 0 && m > 0) {
                                    for (s = m % c || c, l = g.substr(0, s); s < m; s += c) l += a + g.substr(s, c);
                                    f > 0 && (l += a + g.slice(s)), p && (l = "-" + l)
                                }
                                r = h ? l + (n.decimalSeparator || "") + ((f = +n.fractionGroupSize) ? h.replace(new RegExp("\\d{" + f + "}\\B", "g"), "$&" + (n.fractionGroupSeparator || "")) : h) : l
                            }
                            return (n.prefix || "") + r + (n.suffix || "")
                        }, R.toFraction = function(e) {
                            var t, n, r, o, s, c, a, l, h, g, m, d, w = this,
                                N = w.c;
                            if (null != e && (!(a = new q(e)).isInteger() && (a.c || 1 !== a.s) || a.lt(C))) throw Error(i + "Argument " + (a.isInteger() ? "out of range: " : "not an integer: ") + z(a));
                            if (!N) return new q(w);
                            for (t = new q(C), h = n = new q(C), r = l = new q(C), d = p(N), s = t.e = d.length - w.e - 1, t.c[0] = f[(c = s % u) < 0 ? u + c : c], e = !e || a.comparedTo(t) > 0 ? s > 0 ? t : h : a, c = M, M = 1 / 0, a = new q(d), l.c[0] = 0; g = b(a, t, 0, 1), 1 != (o = n.plus(g.times(r))).comparedTo(e);) n = r, r = o, h = l.plus(g.times(o = h)), l = o, t = a.minus(g.times(o = t)), a = o;
                            return o = b(e.minus(n), r, 0, 1), l = l.plus(o.times(h)), n = n.plus(o.times(r)), l.s = h.s = w.s, m = b(h, r, s *= 2, U).minus(w).abs().comparedTo(b(l, n, s, U).minus(w).abs()) < 1 ? [h, r] : [l, n], M = c, m
                        }, R.toNumber = function() {
                            return +z(this)
                        }, R.toPrecision = function(e, t) {
                            return null != e && m(e, 1, l), H(this, e, t, 2)
                        }, R.toString = function(e) {
                            var t, n = this,
                                r = n.s,
                                i = n.e;
                            return null === i ? r ? (t = "Infinity", r < 0 && (t = "-" + t)) : t = "NaN" : (null == e ? t = i <= L || i >= T ? w(p(n.c), i) : N(p(n.c), i, "0") : 10 === e ? t = N(p((n = $(new q(n), P + i + 1, U)).c), n.e, "0") : (m(e, 2, G.length, "Base"), t = v(N(p(n.c), i, "0"), 10, e, r, !0)), r < 0 && n.c[0] && (t = "-" + t)), t
                        }, R.valueOf = R.toJSON = function() {
                            return z(this)
                        }, R._isBigNumber = !0, R[Symbol.toStringTag] = "BigNumber", R[Symbol.for("nodejs.util.inspect.custom")] = R.valueOf, null != y && q.set(y), q
                    }(),
                    b = function() {
                        return (b = Object.assign || function(e) {
                            for (var t, n = 1, r = arguments.length; n < r; n++)
                                for (var i in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
                            return e
                        }).apply(this, arguments)
                    },
                    v = function() {
                        function e() {
                            this.format = e.DEFAULT_FORMAT, y.config({
                                FORMAT: this.format
                            })
                        }
                        return e.prototype.set = function(e) {
                            "FORMAT" in e && (this.format = b({}, this.format, e.FORMAT), e.FORMAT = this.format), y.config(e)
                        }, e.DEFAULT_FORMAT = {
                            prefix: "",
                            decimalSeparator: ".",
                            groupSeparator: ",",
                            groupSize: 3,
                            secondaryGroupSize: 0,
                            fractionGroupSeparator: " ",
                            fractionGroupSize: 0,
                            suffix: ""
                        }, e
                    }();
                e.BigNumber = function() {
                        function e(t) {
                            "object" == typeof t && e.isBigNumber(t) ? this.bn = t.bn.plus(0) : this.bn = e.toBigNumberJs(t)
                        }
                        return e.prototype.clone = function() {
                            return new e(this)
                        }, e.prototype.add = function(t) {
                            return new e(this.bn.plus(e.toBigNumberJs(t)))
                        }, e.prototype.sub = function(t) {
                            return new e(this.bn.minus(e.toBigNumberJs(t)))
                        }, e.prototype.mul = function(t) {
                            return new e(this.bn.times(e.toBigNumberJs(t)))
                        }, e.prototype.div = function(t) {
                            return new e(this.bn.div(e.toBigNumberJs(t)))
                        }, e.prototype.pow = function(t) {
                            return new e(this.bn.pow(e.toBigNumberJs(t)))
                        }, e.prototype.abs = function() {
                            return new e(this.bn.abs())
                        }, e.prototype.mod = function(t) {
                            return new e(this.bn.mod(e.toBigNumberJs(t)))
                        }, e.prototype.roundTo = function(t, n) {
                            return void 0 === t && (t = 0), void 0 === n && (n = 4), new e(this.bn.dp(t || 0, n))
                        }, e.prototype.eq = function(t) {
                            return this.bn.eq(e.toBigNumberJs(t))
                        }, e.prototype.lt = function(t) {
                            return this.bn.lt(e.toBigNumberJs(t))
                        }, e.prototype.gt = function(t) {
                            return this.bn.gt(e.toBigNumberJs(t))
                        }, e.prototype.lte = function(t) {
                            return this.bn.lte(e.toBigNumberJs(t))
                        }, e.prototype.gte = function(t) {
                            return this.bn.gte(e.toBigNumberJs(t))
                        }, e.prototype.isNaN = function() {
                            return this.bn.isNaN()
                        }, e.prototype.isFinite = function() {
                            return this.bn.isFinite()
                        }, e.prototype.isZero = function() {
                            return this.eq(0)
                        }, e.prototype.isPositive = function() {
                            return this.gt(0)
                        }, e.prototype.isNegative = function() {
                            return this.lt(0)
                        }, e.prototype.isInt = function() {
                            return this.bn.isInteger()
                        }, e.prototype.getDecimalsCount = function() {
                            return this.bn.dp()
                        }, e.prototype.isEven = function() {
                            return this.mod(2).eq(0)
                        }, e.prototype.isOdd = function() {
                            return !this.isEven()
                        }, e.prototype.toBytes = function() {
                            if (!this.isInt()) throw new Error("Cant create bytes from number with decimals!");
                            var t = this.isNegative(),
                                n = t ? "1" : "0",
                                r = e._toLength(64, this.bn.plus(n).abs().toString(2).replace("-", "")).split(""),
                                i = [];
                            do {
                                i.push(parseInt(r.splice(0, 8).join(""), 2))
                            } while (r.length);
                            return t ? Uint8Array.from(i.map((function(e) {
                                return 255 - e
                            }))) : Uint8Array.from(i)
                        }, e.prototype.toFormat = function(e, t, n) {
                            return this.bn.toFormat(e, t, n)
                        }, e.prototype.toFixed = function(e, t) {
                            return null == e ? this.bn.toFixed() : this.bn.toFixed(e, t)
                        }, e.prototype.toString = function() {
                            return this.toFixed()
                        }, e.prototype.toNumber = function() {
                            return this.bn.toNumber()
                        }, e.prototype.toJSON = function() {
                            return this.bn.toFixed()
                        }, e.prototype.valueOf = function() {
                            return this.bn.valueOf()
                        }, e.fromBytes = function(t) {
                            if (8 !== t.length) throw new Error("Wrong bytes length! Need 8 bytes!");
                            var n = t[0] > 127,
                                r = Array.from(t).map((function(e) {
                                    return n ? 255 - e : e
                                })).map((function(t) {
                                    return e._toLength(8, t.toString(2))
                                })).join(""),
                                i = new e(new y(r, 2));
                            return n ? i.mul(-1).sub(1) : i
                        }, e.max = function() {
                            for (var t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
                            return e.toBigNumber(t).reduce((function(e, t) {
                                return e.gte(t) ? e : t
                            }))
                        }, e.min = function() {
                            for (var t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
                            return e.toBigNumber(t).reduce((function(e, t) {
                                return e.lte(t) ? e : t
                            }))
                        }, e.sum = function() {
                            for (var t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
                            return e.toBigNumber(t).reduce((function(e, t) {
                                return e.add(t)
                            }))
                        }, e.isBigNumber = function(t) {
                            return t && "object" == typeof t && (t instanceof e || Object.entries(e.prototype).filter((function(e) {
                                return "_" !== e[0].charAt(0)
                            })).every((function(e) {
                                var n = e[0],
                                    r = e[1];
                                return n in t && typeof r == typeof t[n]
                            })))
                        }, e.toBigNumber = function(t) {
                            return Array.isArray(t) ? t.map((function(t) {
                                return new e(t)
                            })) : new e(t)
                        }, e.toBigNumberJs = function(t) {
                            return y.isBigNumber(t) ? t : t instanceof e ? t.bn : new y(t)
                        }, e._toLength = function(e, t) {
                            return new Array(e).fill("0", 0, e).concat(t.split("")).slice(-e).join("")
                        }, e.MAX_VALUE = new e("9223372036854775807"), e.MIN_VALUE = new e("-9223372036854775808"), e.MAX_UNSIGNED_VALUE = new e("18446744073709551615"), e.config = new v, e
                    }(),
                    function(e) {
                        ! function(e) {
                            e[e.ROUND_UP = 0] = "ROUND_UP", e[e.ROUND_DOWN = 1] = "ROUND_DOWN", e[e.ROUND_CEIL = 2] = "ROUND_CEIL", e[e.ROUND_FLOOR = 3] = "ROUND_FLOOR", e[e.ROUND_HALF_UP = 4] = "ROUND_HALF_UP", e[e.ROUND_HALF_DOWN = 5] = "ROUND_HALF_DOWN", e[e.ROUND_HALF_EVEN = 6] = "ROUND_HALF_EVEN", e[e.ROUND_HALF_CEIL = 7] = "ROUND_HALF_CEIL", e[e.ROUND_HALF_FLOOR = 8] = "ROUND_HALF_FLOOR"
                        }(e.ROUND_MODE || (e.ROUND_MODE = {}))
                    }(e.BigNumber || (e.BigNumber = {}));
                var O = e.BigNumber;
                e.default = O, Object.defineProperty(e, "__esModule", {
                    value: !0
                })
            }(t)
        },
        6252: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var r = n(9908);
            t.BigNumber = r.default, r.default.config({
                ROUNDING_MODE: r.default.ROUND_DOWN
            })
        },
        6253: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var r = n(6252);
            t.toBigNumber = function(e) {
                return e instanceof r.BigNumber ? e : new r.BigNumber(e)
            }
        },
        6646: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var r = n(6252);
            t.BigNumber = r.BigNumber;
            var i = n(9909);
            t.Asset = i.Asset;
            var o = n(9910);
            t.Candle = o.Candle;
            var s = n(9911);
            t.Money = s.Money;
            var u = n(9912);
            t.OrderPrice = u.OrderPrice;
            var c = n(9913);
            t.AssetPair = c.AssetPair;
            var f = n(6647);
            t.config = f.config
        },
        6647: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var r = {
                remapAsset: function(e) {
                    return e
                },
                remapCandle: function(e) {
                    return e
                }
            };
            ! function(e) {
                e.get = function(e) {
                    return r[e]
                }, e.set = function e(t, n) {
                    "string" == typeof t ? r[t] = n : Object.keys(t).forEach((function(n) {
                        return e(n, t[n])
                    }))
                }
            }(t.config || (t.config = {}))
        },
        9908: function(e, t, n) {
            var r;
            ! function(i) {
                "use strict";
                var o, s = /^-?(?:\d+(?:\.\d*)?|\.\d+)(?:e[+-]?\d+)?$/i,
                    u = Math.ceil,
                    c = Math.floor,
                    f = "[BigNumber Error] ",
                    a = f + "Number primitive has more than 15 significant digits: ",
                    l = 1e14,
                    h = [1, 10, 100, 1e3, 1e4, 1e5, 1e6, 1e7, 1e8, 1e9, 1e10, 1e11, 1e12, 1e13],
                    p = 1e9;

                function g(e) {
                    var t = 0 | e;
                    return e > 0 || e === t ? t : t - 1
                }

                function m(e) {
                    for (var t, n, r = 1, i = e.length, o = e[0] + ""; r < i;) {
                        for (n = 14 - (t = e[r++] + "").length; n--; t = "0" + t);
                        o += t
                    }
                    for (i = o.length; 48 === o.charCodeAt(--i););
                    return o.slice(0, i + 1 || 1)
                }

                function d(e, t) {
                    var n, r, i = e.c,
                        o = t.c,
                        s = e.s,
                        u = t.s,
                        c = e.e,
                        f = t.e;
                    if (!s || !u) return null;
                    if (n = i && !i[0], r = o && !o[0], n || r) return n ? r ? 0 : -u : s;
                    if (s != u) return s;
                    if (n = s < 0, r = c == f, !i || !o) return r ? 0 : !i ^ n ? 1 : -1;
                    if (!r) return c > f ^ n ? 1 : -1;
                    for (u = (c = i.length) < (f = o.length) ? c : f, s = 0; s < u; s++)
                        if (i[s] != o[s]) return i[s] > o[s] ^ n ? 1 : -1;
                    return c == f ? 0 : c > f ^ n ? 1 : -1
                }

                function w(e, t, n, r) {
                    if (e < t || e > n || e !== (e < 0 ? u(e) : c(e))) throw Error(f + (r || "Argument") + ("number" == typeof e ? e < t || e > n ? " out of range: " : " not an integer: " : " not a primitive number: ") + e)
                }

                function N(e) {
                    return "[object Array]" == Object.prototype.toString.call(e)
                }

                function y(e) {
                    var t = e.c.length - 1;
                    return g(e.e / 14) == t && e.c[t] % 2 != 0
                }

                function b(e, t) {
                    return (e.length > 1 ? e.charAt(0) + "." + e.slice(1) : e) + (t < 0 ? "e" : "e+") + t
                }

                function v(e, t, n) {
                    var r, i;
                    if (t < 0) {
                        for (i = n + "."; ++t; i += n);
                        e = i + e
                    } else if (++t > (r = e.length)) {
                        for (i = n, t -= r; --t; i += n);
                        e += i
                    } else t < r && (e = e.slice(0, t) + "." + e.slice(t));
                    return e
                }(o = function e(t) {
                    var n, r, i, o, O, _, A, E, B, D = j.prototype = {
                            constructor: j,
                            toString: null,
                            valueOf: null
                        },
                        S = new j(1),
                        R = 20,
                        C = 4,
                        P = -7,
                        U = 21,
                        L = -1e7,
                        T = 1e7,
                        F = !1,
                        M = 1,
                        k = 0,
                        x = {
                            decimalSeparator: ".",
                            groupSeparator: ",",
                            groupSize: 3,
                            secondaryGroupSize: 0,
                            fractionGroupSeparator: " ",
                            fractionGroupSize: 0
                        },
                        I = "0123456789abcdefghijklmnopqrstuvwxyz";

                    function j(e, t) {
                        var n, o, u, f, l, h, p, g = this;
                        if (!(g instanceof j)) return new j(e, t);
                        if (null == t) {
                            if (e instanceof j) return g.s = e.s, g.e = e.e, void(g.c = (e = e.c) ? e.slice() : e);
                            if ((l = "number" == typeof e) && 0 * e == 0) {
                                if (g.s = 1 / e < 0 ? (e = -e, -1) : 1, e === ~~e) {
                                    for (u = 0, f = e; f >= 10; f /= 10, u++);
                                    return g.e = u, void(g.c = [e])
                                }
                                p = e + ""
                            } else {
                                if (!s.test(p = e + "")) return i(g, p, l);
                                g.s = 45 == p.charCodeAt(0) ? (p = p.slice(1), -1) : 1
                            }
                        } else {
                            if (w(t, 2, I.length, "Base"), p = e + "", 10 == t) return J(g = new j(e instanceof j ? e : p), R + g.e + 1, C);
                            if (l = "number" == typeof e) {
                                if (0 * e != 0) return i(g, p, l, t);
                                if (g.s = 1 / e < 0 ? (p = p.slice(1), -1) : 1, j.DEBUG && p.replace(/^0\.0*|\./, "").length > 15) throw Error(a + e);
                                l = !1
                            } else g.s = 45 === p.charCodeAt(0) ? (p = p.slice(1), -1) : 1, t > 10 && t < 37 && (p = p.toLowerCase());
                            for (n = I.slice(0, t), u = f = 0, h = p.length; f < h; f++)
                                if (n.indexOf(o = p.charAt(f)) < 0) {
                                    if ("." == o && f > u) {
                                        u = h;
                                        continue
                                    }
                                    return i(g, e + "", l, t)
                                } p = r(p, t, 10, g.s)
                        }
                        for ((u = p.indexOf(".")) > -1 && (p = p.replace(".", "")), (f = p.search(/e/i)) > 0 ? (u < 0 && (u = f), u += +p.slice(f + 1), p = p.substring(0, f)) : u < 0 && (u = p.length), f = 0; 48 === p.charCodeAt(f); f++);
                        for (h = p.length; 48 === p.charCodeAt(--h););
                        if (p = p.slice(f, ++h)) {
                            if (h -= f, l && j.DEBUG && h > 15 && (e > 9007199254740991 || e !== c(e))) throw Error(a + g.s * e);
                            if ((u = u - f - 1) > T) g.c = g.e = null;
                            else if (u < L) g.c = [g.e = 0];
                            else {
                                if (g.e = u, g.c = [], f = (u + 1) % 14, u < 0 && (f += 14), f < h) {
                                    for (f && g.c.push(+p.slice(0, f)), h -= 14; f < h;) g.c.push(+p.slice(f, f += 14));
                                    f = 14 - (p = p.slice(f)).length
                                } else f -= h;
                                for (; f--; p += "0");
                                g.c.push(+p)
                            }
                        } else g.c = [g.e = 0]
                    }

                    function G(e, t, n, r) {
                        var i, o, s, u, c;
                        if (null == n ? n = C : w(n, 0, 8), !e.c) return e.toString();
                        if (i = e.c[0], s = e.e, null == t) c = m(e.c), c = 1 == r || 2 == r && s <= P ? b(c, s) : v(c, s, "0");
                        else if (o = (e = J(new j(e), t, n)).e, u = (c = m(e.c)).length, 1 == r || 2 == r && (t <= o || o <= P)) {
                            for (; u < t; c += "0", u++);
                            c = b(c, o)
                        } else if (t -= s, c = v(c, o, "0"), o + 1 > u) {
                            if (--t > 0)
                                for (c += "."; t--; c += "0");
                        } else if ((t += o - u) > 0)
                            for (o + 1 == u && (c += "."); t--; c += "0");
                        return e.s < 0 && i ? "-" + c : c
                    }

                    function q(e, t) {
                        var n, r, i = 0;
                        for (N(e[0]) && (e = e[0]), n = new j(e[0]); ++i < e.length;) {
                            if (!(r = new j(e[i])).s) {
                                n = r;
                                break
                            }
                            t.call(n, r) && (n = r)
                        }
                        return n
                    }

                    function H(e, t, n) {
                        for (var r = 1, i = t.length; !t[--i]; t.pop());
                        for (i = t[0]; i >= 10; i /= 10, r++);
                        return (n = r + 14 * n - 1) > T ? e.c = e.e = null : n < L ? e.c = [e.e = 0] : (e.e = n, e.c = t), e
                    }

                    function J(e, t, n, r) {
                        var i, o, s, f, a, p, g, m = e.c,
                            d = h;
                        if (m) {
                            e: {
                                for (i = 1, f = m[0]; f >= 10; f /= 10, i++);
                                if ((o = t - i) < 0) o += 14,
                                s = t,
                                g = (a = m[p = 0]) / d[i - s - 1] % 10 | 0;
                                else if ((p = u((o + 1) / 14)) >= m.length) {
                                    if (!r) break e;
                                    for (; m.length <= p; m.push(0));
                                    a = g = 0, i = 1, s = (o %= 14) - 14 + 1
                                } else {
                                    for (a = f = m[p], i = 1; f >= 10; f /= 10, i++);
                                    g = (s = (o %= 14) - 14 + i) < 0 ? 0 : a / d[i - s - 1] % 10 | 0
                                }
                                if (r = r || t < 0 || null != m[p + 1] || (s < 0 ? a : a % d[i - s - 1]), r = n < 4 ? (g || r) && (0 == n || n == (e.s < 0 ? 3 : 2)) : g > 5 || 5 == g && (4 == n || r || 6 == n && (o > 0 ? s > 0 ? a / d[i - s] : 0 : m[p - 1]) % 10 & 1 || n == (e.s < 0 ? 8 : 7)), t < 1 || !m[0]) return m.length = 0,
                                r ? (t -= e.e + 1, m[0] = d[(14 - t % 14) % 14], e.e = -t || 0) : m[0] = e.e = 0,
                                e;
                                if (0 == o ? (m.length = p, f = 1, p--) : (m.length = p + 1, f = d[14 - o], m[p] = s > 0 ? c(a / d[i - s] % d[s]) * f : 0), r)
                                    for (;;) {
                                        if (0 == p) {
                                            for (o = 1, s = m[0]; s >= 10; s /= 10, o++);
                                            for (s = m[0] += f, f = 1; s >= 10; s /= 10, f++);
                                            o != f && (e.e++, m[0] == l && (m[0] = 1));
                                            break
                                        }
                                        if (m[p] += f, m[p] != l) break;
                                        m[p--] = 0, f = 1
                                    }
                                for (o = m.length; 0 === m[--o]; m.pop());
                            }
                            e.e > T ? e.c = e.e = null : e.e < L && (e.c = [e.e = 0])
                        }
                        return e
                    }
                    return j.clone = e, j.ROUND_UP = 0, j.ROUND_DOWN = 1, j.ROUND_CEIL = 2, j.ROUND_FLOOR = 3, j.ROUND_HALF_UP = 4, j.ROUND_HALF_DOWN = 5, j.ROUND_HALF_EVEN = 6, j.ROUND_HALF_CEIL = 7, j.ROUND_HALF_FLOOR = 8, j.EUCLID = 9, j.config = j.set = function(e) {
                        var t, n;
                        if (null != e) {
                            if ("object" != typeof e) throw Error(f + "Object expected: " + e);
                            if (e.hasOwnProperty(t = "DECIMAL_PLACES") && (w(n = e[t], 0, p, t), R = n), e.hasOwnProperty(t = "ROUNDING_MODE") && (w(n = e[t], 0, 8, t), C = n), e.hasOwnProperty(t = "EXPONENTIAL_AT") && (N(n = e[t]) ? (w(n[0], -p, 0, t), w(n[1], 0, p, t), P = n[0], U = n[1]) : (w(n, -p, p, t), P = -(U = n < 0 ? -n : n))), e.hasOwnProperty(t = "RANGE"))
                                if (N(n = e[t])) w(n[0], -p, -1, t), w(n[1], 1, p, t), L = n[0], T = n[1];
                                else {
                                    if (w(n, -p, p, t), !n) throw Error(f + t + " cannot be zero: " + n);
                                    L = -(T = n < 0 ? -n : n)
                                } if (e.hasOwnProperty(t = "CRYPTO")) {
                                if ((n = e[t]) !== !!n) throw Error(f + t + " not true or false: " + n);
                                if (n) {
                                    if ("undefined" == typeof crypto || !crypto || !crypto.getRandomValues && !crypto.randomBytes) throw F = !n, Error(f + "crypto unavailable");
                                    F = n
                                } else F = n
                            }
                            if (e.hasOwnProperty(t = "MODULO_MODE") && (w(n = e[t], 0, 9, t), M = n), e.hasOwnProperty(t = "POW_PRECISION") && (w(n = e[t], 0, p, t), k = n), e.hasOwnProperty(t = "FORMAT")) {
                                if ("object" != typeof(n = e[t])) throw Error(f + t + " not an object: " + n);
                                x = n
                            }
                            if (e.hasOwnProperty(t = "ALPHABET")) {
                                if ("string" != typeof(n = e[t]) || /^.$|\.|(.).*\1/.test(n)) throw Error(f + t + " invalid: " + n);
                                I = n
                            }
                        }
                        return {
                            DECIMAL_PLACES: R,
                            ROUNDING_MODE: C,
                            EXPONENTIAL_AT: [P, U],
                            RANGE: [L, T],
                            CRYPTO: F,
                            MODULO_MODE: M,
                            POW_PRECISION: k,
                            FORMAT: x,
                            ALPHABET: I
                        }
                    }, j.isBigNumber = function(e) {
                        return e instanceof j || e && !0 === e._isBigNumber || !1
                    }, j.maximum = j.max = function() {
                        return q(arguments, D.lt)
                    }, j.minimum = j.min = function() {
                        return q(arguments, D.gt)
                    }, j.random = (o = 9007199254740992 * Math.random() & 2097151 ? function() {
                        return c(9007199254740992 * Math.random())
                    } : function() {
                        return 8388608 * (1073741824 * Math.random() | 0) + (8388608 * Math.random() | 0)
                    }, function(e) {
                        var t, n, r, i, s, a = 0,
                            l = [],
                            g = new j(S);
                        if (null == e ? e = R : w(e, 0, p), i = u(e / 14), F)
                            if (crypto.getRandomValues) {
                                for (t = crypto.getRandomValues(new Uint32Array(i *= 2)); a < i;)(s = 131072 * t[a] + (t[a + 1] >>> 11)) >= 9e15 ? (n = crypto.getRandomValues(new Uint32Array(2)), t[a] = n[0], t[a + 1] = n[1]) : (l.push(s % 1e14), a += 2);
                                a = i / 2
                            } else {
                                if (!crypto.randomBytes) throw F = !1, Error(f + "crypto unavailable");
                                for (t = crypto.randomBytes(i *= 7); a < i;)(s = 281474976710656 * (31 & t[a]) + 1099511627776 * t[a + 1] + 4294967296 * t[a + 2] + 16777216 * t[a + 3] + (t[a + 4] << 16) + (t[a + 5] << 8) + t[a + 6]) >= 9e15 ? crypto.randomBytes(7).copy(t, a) : (l.push(s % 1e14), a += 7);
                                a = i / 7
                            } if (!F)
                            for (; a < i;)(s = o()) < 9e15 && (l[a++] = s % 1e14);
                        for (e %= 14, (i = l[--a]) && e && (s = h[14 - e], l[a] = c(i / s) * s); 0 === l[a]; l.pop(), a--);
                        if (a < 0) l = [r = 0];
                        else {
                            for (r = -1; 0 === l[0]; l.splice(0, 1), r -= 14);
                            for (a = 1, s = l[0]; s >= 10; s /= 10, a++);
                            a < 14 && (r -= 14 - a)
                        }
                        return g.e = r, g.c = l, g
                    }), r = function() {
                        function e(e, t, n, r) {
                            for (var i, o, s = [0], u = 0, c = e.length; u < c;) {
                                for (o = s.length; o--; s[o] *= t);
                                for (s[0] += r.indexOf(e.charAt(u++)), i = 0; i < s.length; i++) s[i] > n - 1 && (null == s[i + 1] && (s[i + 1] = 0), s[i + 1] += s[i] / n | 0, s[i] %= n)
                            }
                            return s.reverse()
                        }
                        return function(t, r, i, o, s) {
                            var u, c, f, a, l, h, p, g, d = t.indexOf("."),
                                w = R,
                                N = C;
                            for (d >= 0 && (a = k, k = 0, t = t.replace(".", ""), h = (g = new j(r)).pow(t.length - d), k = a, g.c = e(v(m(h.c), h.e, "0"), 10, i, "0123456789"), g.e = g.c.length), f = a = (p = e(t, r, i, s ? (u = I, "0123456789") : (u = "0123456789", I))).length; 0 == p[--a]; p.pop());
                            if (!p[0]) return u.charAt(0);
                            if (d < 0 ? --f : (h.c = p, h.e = f, h.s = o, p = (h = n(h, g, w, N, i)).c, l = h.r, f = h.e), d = p[c = f + w + 1], a = i / 2, l = l || c < 0 || null != p[c + 1], l = N < 4 ? (null != d || l) && (0 == N || N == (h.s < 0 ? 3 : 2)) : d > a || d == a && (4 == N || l || 6 == N && 1 & p[c - 1] || N == (h.s < 0 ? 8 : 7)), c < 1 || !p[0]) t = l ? v(u.charAt(1), -w, u.charAt(0)) : u.charAt(0);
                            else {
                                if (p.length = c, l)
                                    for (--i; ++p[--c] > i;) p[c] = 0, c || (++f, p = [1].concat(p));
                                for (a = p.length; !p[--a];);
                                for (d = 0, t = ""; d <= a; t += u.charAt(p[d++]));
                                t = v(t, f, u.charAt(0))
                            }
                            return t
                        }
                    }(), n = function() {
                        function e(e, t, n) {
                            var r, i, o, s, u = 0,
                                c = e.length,
                                f = t % 1e7,
                                a = t / 1e7 | 0;
                            for (e = e.slice(); c--;) u = ((i = f * (o = e[c] % 1e7) + (r = a * o + (s = e[c] / 1e7 | 0) * f) % 1e7 * 1e7 + u) / n | 0) + (r / 1e7 | 0) + a * s, e[c] = i % n;
                            return u && (e = [u].concat(e)), e
                        }

                        function t(e, t, n, r) {
                            var i, o;
                            if (n != r) o = n > r ? 1 : -1;
                            else
                                for (i = o = 0; i < n; i++)
                                    if (e[i] != t[i]) {
                                        o = e[i] > t[i] ? 1 : -1;
                                        break
                                    } return o
                        }

                        function n(e, t, n, r) {
                            for (var i = 0; n--;) e[n] -= i, i = e[n] < t[n] ? 1 : 0, e[n] = i * r + e[n] - t[n];
                            for (; !e[0] && e.length > 1; e.splice(0, 1));
                        }
                        return function(r, i, o, s, u) {
                            var f, a, h, p, m, d, w, N, y, b, v, O, _, A, E, B, D, S = r.s == i.s ? 1 : -1,
                                R = r.c,
                                C = i.c;
                            if (!(R && R[0] && C && C[0])) return new j(r.s && i.s && (R ? !C || R[0] != C[0] : C) ? R && 0 == R[0] || !C ? 0 * S : S / 0 : NaN);
                            for (y = (N = new j(S)).c = [], S = o + (a = r.e - i.e) + 1, u || (u = l, a = g(r.e / 14) - g(i.e / 14), S = S / 14 | 0), h = 0; C[h] == (R[h] || 0); h++);
                            if (C[h] > (R[h] || 0) && a--, S < 0) y.push(1), p = !0;
                            else {
                                for (A = R.length, B = C.length, h = 0, S += 2, (m = c(u / (C[0] + 1))) > 1 && (C = e(C, m, u), R = e(R, m, u), B = C.length, A = R.length), _ = B, v = (b = R.slice(0, B)).length; v < B; b[v++] = 0);
                                D = C.slice(), D = [0].concat(D), E = C[0], C[1] >= u / 2 && E++;
                                do {
                                    if (m = 0, (f = t(C, b, B, v)) < 0) {
                                        if (O = b[0], B != v && (O = O * u + (b[1] || 0)), (m = c(O / E)) > 1)
                                            for (m >= u && (m = u - 1), w = (d = e(C, m, u)).length, v = b.length; 1 == t(d, b, w, v);) m--, n(d, B < w ? D : C, w, u), w = d.length, f = 1;
                                        else 0 == m && (f = m = 1), w = (d = C.slice()).length;
                                        if (w < v && (d = [0].concat(d)), n(b, d, v, u), v = b.length, -1 == f)
                                            for (; t(C, b, B, v) < 1;) m++, n(b, B < v ? D : C, v, u), v = b.length
                                    } else 0 === f && (m++, b = [0]);
                                    y[h++] = m, b[0] ? b[v++] = R[_] || 0 : (b = [R[_]], v = 1)
                                } while ((_++ < A || null != b[0]) && S--);
                                p = null != b[0], y[0] || y.splice(0, 1)
                            }
                            if (u == l) {
                                for (h = 1, S = y[0]; S >= 10; S /= 10, h++);
                                J(N, o + (N.e = h + 14 * a - 1) + 1, s, p)
                            } else N.e = a, N.r = +p;
                            return N
                        }
                    }(), O = /^(-?)0([xbo])(?=\w[\w.]*$)/i, _ = /^([^.]+)\.$/, A = /^\.([^.]+)$/, E = /^-?(Infinity|NaN)$/, B = /^\s*\+(?=[\w.])|^\s+|\s+$/g, i = function(e, t, n, r) {
                        var i, o = n ? t : t.replace(B, "");
                        if (E.test(o)) e.s = isNaN(o) ? null : o < 0 ? -1 : 1, e.c = e.e = null;
                        else {
                            if (!n && (o = o.replace(O, (function(e, t, n) {
                                    return i = "x" == (n = n.toLowerCase()) ? 16 : "b" == n ? 2 : 8, r && r != i ? e : t
                                })), r && (i = r, o = o.replace(_, "$1").replace(A, "0.$1")), t != o)) return new j(o, i);
                            if (j.DEBUG) throw Error(f + "Not a" + (r ? " base " + r : "") + " number: " + t);
                            e.c = e.e = e.s = null
                        }
                    }, D.absoluteValue = D.abs = function() {
                        var e = new j(this);
                        return e.s < 0 && (e.s = 1), e
                    }, D.comparedTo = function(e, t) {
                        return d(this, new j(e, t))
                    }, D.decimalPlaces = D.dp = function(e, t) {
                        var n, r, i, o = this;
                        if (null != e) return w(e, 0, p), null == t ? t = C : w(t, 0, 8), J(new j(o), e + o.e + 1, t);
                        if (!(n = o.c)) return null;
                        if (r = 14 * ((i = n.length - 1) - g(this.e / 14)), i = n[i])
                            for (; i % 10 == 0; i /= 10, r--);
                        return r < 0 && (r = 0), r
                    }, D.dividedBy = D.div = function(e, t) {
                        return n(this, new j(e, t), R, C)
                    }, D.dividedToIntegerBy = D.idiv = function(e, t) {
                        return n(this, new j(e, t), 0, 1)
                    }, D.exponentiatedBy = D.pow = function(e, t) {
                        var n, r, i, o, s, a, l, h = this;
                        if ((e = new j(e)).c && !e.isInteger()) throw Error(f + "Exponent not an integer: " + e);
                        if (null != t && (t = new j(t)), o = e.e > 14, !h.c || !h.c[0] || 1 == h.c[0] && !h.e && 1 == h.c.length || !e.c || !e.c[0]) return l = new j(Math.pow(+h.valueOf(), o ? 2 - y(e) : +e)), t ? l.mod(t) : l;
                        if (s = e.s < 0, t) {
                            if (t.c ? !t.c[0] : !t.s) return new j(NaN);
                            (r = !s && h.isInteger() && t.isInteger()) && (h = h.mod(t))
                        } else {
                            if (e.e > 9 && (h.e > 0 || h.e < -1 || (0 == h.e ? h.c[0] > 1 || o && h.c[1] >= 24e7 : h.c[0] < 8e13 || o && h.c[0] <= 9999975e7))) return i = h.s < 0 && y(e) ? -0 : 0, h.e > -1 && (i = 1 / i), new j(s ? 1 / i : i);
                            k && (i = u(k / 14 + 2))
                        }
                        for (o ? (n = new j(.5), a = y(e)) : a = e % 2, s && (e.s = 1), l = new j(S);;) {
                            if (a) {
                                if (!(l = l.times(h)).c) break;
                                i ? l.c.length > i && (l.c.length = i) : r && (l = l.mod(t))
                            }
                            if (o) {
                                if (J(e = e.times(n), e.e + 1, 1), !e.c[0]) break;
                                o = e.e > 14, a = y(e)
                            } else {
                                if (!(e = c(e / 2))) break;
                                a = e % 2
                            }
                            h = h.times(h), i ? h.c && h.c.length > i && (h.c.length = i) : r && (h = h.mod(t))
                        }
                        return r ? l : (s && (l = S.div(l)), t ? l.mod(t) : i ? J(l, k, C, void 0) : l)
                    }, D.integerValue = function(e) {
                        var t = new j(this);
                        return null == e ? e = C : w(e, 0, 8), J(t, t.e + 1, e)
                    }, D.isEqualTo = D.eq = function(e, t) {
                        return 0 === d(this, new j(e, t))
                    }, D.isFinite = function() {
                        return !!this.c
                    }, D.isGreaterThan = D.gt = function(e, t) {
                        return d(this, new j(e, t)) > 0
                    }, D.isGreaterThanOrEqualTo = D.gte = function(e, t) {
                        return 1 === (t = d(this, new j(e, t))) || 0 === t
                    }, D.isInteger = function() {
                        return !!this.c && g(this.e / 14) > this.c.length - 2
                    }, D.isLessThan = D.lt = function(e, t) {
                        return d(this, new j(e, t)) < 0
                    }, D.isLessThanOrEqualTo = D.lte = function(e, t) {
                        return -1 === (t = d(this, new j(e, t))) || 0 === t
                    }, D.isNaN = function() {
                        return !this.s
                    }, D.isNegative = function() {
                        return this.s < 0
                    }, D.isPositive = function() {
                        return this.s > 0
                    }, D.isZero = function() {
                        return !!this.c && 0 == this.c[0]
                    }, D.minus = function(e, t) {
                        var n, r, i, o, s = this,
                            u = s.s;
                        if (t = (e = new j(e, t)).s, !u || !t) return new j(NaN);
                        if (u != t) return e.s = -t, s.plus(e);
                        var c = s.e / 14,
                            f = e.e / 14,
                            a = s.c,
                            h = e.c;
                        if (!c || !f) {
                            if (!a || !h) return a ? (e.s = -t, e) : new j(h ? s : NaN);
                            if (!a[0] || !h[0]) return h[0] ? (e.s = -t, e) : new j(a[0] ? s : 3 == C ? -0 : 0)
                        }
                        if (c = g(c), f = g(f), a = a.slice(), u = c - f) {
                            for ((o = u < 0) ? (u = -u, i = a) : (f = c, i = h), i.reverse(), t = u; t--; i.push(0));
                            i.reverse()
                        } else
                            for (r = (o = (u = a.length) < (t = h.length)) ? u : t, u = t = 0; t < r; t++)
                                if (a[t] != h[t]) {
                                    o = a[t] < h[t];
                                    break
                                } if (o && (i = a, a = h, h = i, e.s = -e.s), (t = (r = h.length) - (n = a.length)) > 0)
                            for (; t--; a[n++] = 0);
                        for (t = l - 1; r > u;) {
                            if (a[--r] < h[r]) {
                                for (n = r; n && !a[--n]; a[n] = t);
                                --a[n], a[r] += l
                            }
                            a[r] -= h[r]
                        }
                        for (; 0 == a[0]; a.splice(0, 1), --f);
                        return a[0] ? H(e, a, f) : (e.s = 3 == C ? -1 : 1, e.c = [e.e = 0], e)
                    }, D.modulo = D.mod = function(e, t) {
                        var r, i, o = this;
                        return e = new j(e, t), !o.c || !e.s || e.c && !e.c[0] ? new j(NaN) : !e.c || o.c && !o.c[0] ? new j(o) : (9 == M ? (i = e.s, e.s = 1, r = n(o, e, 0, 3), e.s = i, r.s *= i) : r = n(o, e, 0, M), (e = o.minus(r.times(e))).c[0] || 1 != M || (e.s = o.s), e)
                    }, D.multipliedBy = D.times = function(e, t) {
                        var n, r, i, o, s, u, c, f, a, h, p, m, d, w, N = this,
                            y = N.c,
                            b = (e = new j(e, t)).c;
                        if (!(y && b && y[0] && b[0])) return !N.s || !e.s || y && !y[0] && !b || b && !b[0] && !y ? e.c = e.e = e.s = null : (e.s *= N.s, y && b ? (e.c = [0], e.e = 0) : e.c = e.e = null), e;
                        for (r = g(N.e / 14) + g(e.e / 14), e.s *= N.s, (c = y.length) < (h = b.length) && (d = y, y = b, b = d, i = c, c = h, h = i), i = c + h, d = []; i--; d.push(0));
                        for (w = l, 1e7, i = h; --i >= 0;) {
                            for (n = 0, p = b[i] % 1e7, m = b[i] / 1e7 | 0, o = i + (s = c); o > i;) n = ((f = p * (f = y[--s] % 1e7) + (u = m * f + (a = y[s] / 1e7 | 0) * p) % 1e7 * 1e7 + d[o] + n) / w | 0) + (u / 1e7 | 0) + m * a, d[o--] = f % w;
                            d[o] = n
                        }
                        return n ? ++r : d.splice(0, 1), H(e, d, r)
                    }, D.negated = function() {
                        var e = new j(this);
                        return e.s = -e.s || null, e
                    }, D.plus = function(e, t) {
                        var n, r = this,
                            i = r.s;
                        if (t = (e = new j(e, t)).s, !i || !t) return new j(NaN);
                        if (i != t) return e.s = -t, r.minus(e);
                        var o = r.e / 14,
                            s = e.e / 14,
                            u = r.c,
                            c = e.c;
                        if (!o || !s) {
                            if (!u || !c) return new j(i / 0);
                            if (!u[0] || !c[0]) return c[0] ? e : new j(u[0] ? r : 0 * i)
                        }
                        if (o = g(o), s = g(s), u = u.slice(), i = o - s) {
                            for (i > 0 ? (s = o, n = c) : (i = -i, n = u), n.reverse(); i--; n.push(0));
                            n.reverse()
                        }
                        for ((i = u.length) - (t = c.length) < 0 && (n = c, c = u, u = n, t = i), i = 0; t;) i = (u[--t] = u[t] + c[t] + i) / l | 0, u[t] = l === u[t] ? 0 : u[t] % l;
                        return i && (u = [i].concat(u), ++s), H(e, u, s)
                    }, D.precision = D.sd = function(e, t) {
                        var n, r, i, o = this;
                        if (null != e && e !== !!e) return w(e, 1, p), null == t ? t = C : w(t, 0, 8), J(new j(o), e, t);
                        if (!(n = o.c)) return null;
                        if (r = 14 * (i = n.length - 1) + 1, i = n[i]) {
                            for (; i % 10 == 0; i /= 10, r--);
                            for (i = n[0]; i >= 10; i /= 10, r++);
                        }
                        return e && o.e + 1 > r && (r = o.e + 1), r
                    }, D.shiftedBy = function(e) {
                        return w(e, -9007199254740991, 9007199254740991), this.times("1e" + e)
                    }, D.squareRoot = D.sqrt = function() {
                        var e, t, r, i, o, s = this,
                            u = s.c,
                            c = s.s,
                            f = s.e,
                            a = R + 4,
                            l = new j("0.5");
                        if (1 !== c || !u || !u[0]) return new j(!c || c < 0 && (!u || u[0]) ? NaN : u ? s : 1 / 0);
                        if (0 == (c = Math.sqrt(+s)) || c == 1 / 0 ? (((t = m(u)).length + f) % 2 == 0 && (t += "0"), c = Math.sqrt(t), f = g((f + 1) / 2) - (f < 0 || f % 2), r = new j(t = c == 1 / 0 ? "1e" + f : (t = c.toExponential()).slice(0, t.indexOf("e") + 1) + f)) : r = new j(c + ""), r.c[0])
                            for ((c = (f = r.e) + a) < 3 && (c = 0);;)
                                if (o = r, r = l.times(o.plus(n(s, o, a, 1))), m(o.c).slice(0, c) === (t = m(r.c)).slice(0, c)) {
                                    if (r.e < f && --c, "9999" != (t = t.slice(c - 3, c + 1)) && (i || "4999" != t)) {
                                        +t && (+t.slice(1) || "5" != t.charAt(0)) || (J(r, r.e + R + 2, 1), e = !r.times(r).eq(s));
                                        break
                                    }
                                    if (!i && (J(o, o.e + R + 2, 0), o.times(o).eq(s))) {
                                        r = o;
                                        break
                                    }
                                    a += 4, c += 4, i = 1
                                } return J(r, r.e + R + 1, C, e)
                    }, D.toExponential = function(e, t) {
                        return null != e && (w(e, 0, p), e++), G(this, e, t, 1)
                    }, D.toFixed = function(e, t) {
                        return null != e && (w(e, 0, p), e = e + this.e + 1), G(this, e, t)
                    }, D.toFormat = function(e, t) {
                        var n = this.toFixed(e, t);
                        if (this.c) {
                            var r, i = n.split("."),
                                o = +x.groupSize,
                                s = +x.secondaryGroupSize,
                                u = x.groupSeparator,
                                c = i[0],
                                f = i[1],
                                a = this.s < 0,
                                l = a ? c.slice(1) : c,
                                h = l.length;
                            if (s && (r = o, o = s, s = r, h -= r), o > 0 && h > 0) {
                                for (r = h % o || o, c = l.substr(0, r); r < h; r += o) c += u + l.substr(r, o);
                                s > 0 && (c += u + l.slice(r)), a && (c = "-" + c)
                            }
                            n = f ? c + x.decimalSeparator + ((s = +x.fractionGroupSize) ? f.replace(new RegExp("\\d{" + s + "}\\B", "g"), "$&" + x.fractionGroupSeparator) : f) : c
                        }
                        return n
                    }, D.toFraction = function(e) {
                        var t, r, i, o, s, u, c, a, l, p, g, d, w = this,
                            N = w.c;
                        if (null != e && (!(a = new j(e)).isInteger() && (a.c || 1 !== a.s) || a.lt(S))) throw Error(f + "Argument " + (a.isInteger() ? "out of range: " : "not an integer: ") + e);
                        if (!N) return w.toString();
                        for (r = new j(S), p = i = new j(S), o = l = new j(S), d = m(N), u = r.e = d.length - w.e - 1, r.c[0] = h[(c = u % 14) < 0 ? 14 + c : c], e = !e || a.comparedTo(r) > 0 ? u > 0 ? r : p : a, c = T, T = 1 / 0, a = new j(d), l.c[0] = 0; g = n(a, r, 0, 1), 1 != (s = i.plus(g.times(o))).comparedTo(e);) i = o, o = s, p = l.plus(g.times(s = p)), l = s, r = a.minus(g.times(s = r)), a = s;
                        return s = n(e.minus(i), o, 0, 1), l = l.plus(s.times(p)), i = i.plus(s.times(o)), l.s = p.s = w.s, t = n(p, o, u *= 2, C).minus(w).abs().comparedTo(n(l, i, u, C).minus(w).abs()) < 1 ? [p.toString(), o.toString()] : [l.toString(), i.toString()], T = c, t
                    }, D.toNumber = function() {
                        return +this
                    }, D.toPrecision = function(e, t) {
                        return null != e && w(e, 1, p), G(this, e, t, 2)
                    }, D.toString = function(e) {
                        var t, n = this,
                            i = n.s,
                            o = n.e;
                        return null === o ? i ? (t = "Infinity", i < 0 && (t = "-" + t)) : t = "NaN" : (t = m(n.c), null == e ? t = o <= P || o >= U ? b(t, o) : v(t, o, "0") : (w(e, 2, I.length, "Base"), t = r(v(t, o, "0"), 10, e, i, !0)), i < 0 && n.c[0] && (t = "-" + t)), t
                    }, D.valueOf = D.toJSON = function() {
                        var e, t = this,
                            n = t.e;
                        return null === n ? t.toString() : (e = m(t.c), e = n <= P || n >= U ? b(e, n) : v(e, n, "0"), t.s < 0 ? "-" + e : e)
                    }, D._isBigNumber = !0, null != t && j.set(t), j
                }()).default = o.BigNumber = o, void 0 === (r = function() {
                    return o
                }.call(t, n, t, e)) || (e.exports = r)
            }()
        },
        9909: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var r = n(6647),
                i = n(6253),
                o = function() {
                    function e(e) {
                        e = r.config.get("remapAsset")(e), this.quantity = i.toBigNumber(e.quantity), this.minSponsoredFee = i.toBigNumber(e.minSponsoredFee), this.ticker = e.ticker || null, this.id = e.id, this.name = e.name, this.precision = e.precision, this.description = e.description, this.height = e.height, this.timestamp = e.timestamp, this.sender = e.sender, this.reissuable = e.reissuable, this.hasScript = e.hasScript || !1, this.displayName = e.ticker || e.name
                    }
                    return e.prototype.toJSON = function() {
                        return {
                            ticker: this.ticker,
                            id: this.id,
                            name: this.name,
                            precision: this.precision,
                            description: this.description,
                            height: this.height,
                            timestamp: this.timestamp,
                            sender: this.sender,
                            quantity: this.quantity,
                            reissuable: this.reissuable,
                            hasScript: this.hasScript,
                            minSponsoredFee: this.minSponsoredFee
                        }
                    }, e.prototype.toString = function() {
                        return this.id
                    }, e.isAsset = function(t) {
                        return t instanceof e
                    }, e
                }();
            t.Asset = o
        },
        9910: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var r = n(6647),
                i = n(6253),
                o = function() {
                    function e(e) {
                        var t = this;
                        e = r.config.get("remapCandle")(e);
                        ["open", "close", "high", "low", "volume", "quoteVolume", "weightedAveragePrice"].forEach((function(n) {
                            return t[n] = i.toBigNumber(e[n])
                        })), this.time = e.time, this.maxHeight = e.maxHeight, this.txsCount = e.txsCount
                    }
                    return e.prototype.toJSON = function() {
                        return {
                            time: this.time,
                            open: this.open,
                            close: this.close,
                            high: this.high,
                            low: this.low,
                            volume: this.volume,
                            quoteVolume: this.quoteVolume,
                            weightedAveragePrice: this.weightedAveragePrice,
                            maxHeight: this.maxHeight,
                            txsCount: this.txsCount
                        }
                    }, e.prototype.toString = function() {
                        return "[object Candle]"
                    }, e.isCandle = function(t) {
                        return t instanceof e
                    }, e
                }();
            t.Candle = o
        },
        9911: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var r = n(6252),
                i = n(6253),
                o = function() {
                    function e(t, n) {
                        var r = e._getDivider(n.precision);
                        this.asset = n, this._coins = i.toBigNumber(t).dp(0), this._tokens = this._coins.div(r)
                    }
                    return e.prototype.getCoins = function() {
                        return this._coins.plus(0)
                    }, e.prototype.getTokens = function() {
                        return this._tokens.plus(0)
                    }, e.prototype.toCoins = function() {
                        return this._coins.toFixed(0)
                    }, e.prototype.toTokens = function() {
                        return this._tokens.toFixed(this.asset.precision)
                    }, e.prototype.toFormat = function(e) {
                        return this._tokens.toFormat(e)
                    }, e.prototype.add = function(t) {
                        this._matchAssets(t);
                        var n = t.getCoins();
                        return new e(this._coins.plus(n), this.asset)
                    }, e.prototype.plus = function(e) {
                        return this.add(e)
                    }, e.prototype.sub = function(t) {
                        this._matchAssets(t);
                        var n = t.getCoins();
                        return new e(this._coins.minus(n), this.asset)
                    }, e.prototype.minus = function(e) {
                        return this.sub(e)
                    }, e.prototype.times = function(t) {
                        return this._matchAssets(t), new e(this.getTokens().times(t.getTokens()), this.asset)
                    }, e.prototype.div = function(t) {
                        return this._matchAssets(t), new e(this.getTokens().div(t.getTokens()), this.asset)
                    }, e.prototype.eq = function(e) {
                        return this._matchAssets(e), this._coins.eq(e.getCoins())
                    }, e.prototype.lt = function(e) {
                        return this._matchAssets(e), this._coins.lt(e.getCoins())
                    }, e.prototype.lte = function(e) {
                        return this._matchAssets(e), this._coins.lte(e.getCoins())
                    }, e.prototype.gt = function(e) {
                        return this._matchAssets(e), this._coins.gt(e.getCoins())
                    }, e.prototype.gte = function(e) {
                        return this._matchAssets(e), this._coins.gte(e.getCoins())
                    }, e.prototype.safeSub = function(e) {
                        return this.asset.id === e.asset.id ? this.sub(e) : this
                    }, e.prototype.toNonNegative = function() {
                        return this.getTokens().lt(0) ? this.cloneWithTokens(0) : this
                    }, e.prototype.cloneWithCoins = function(t) {
                        return new e(new r.BigNumber(t), this.asset)
                    }, e.prototype.cloneWithTokens = function(t) {
                        var n = e._tokensToCoins(t, this.asset.precision);
                        return new e(n, this.asset)
                    }, e.prototype.convertTo = function(t, n) {
                        return e.convert(this, t, i.toBigNumber(n))
                    }, e.prototype.toJSON = function() {
                        return {
                            assetId: this.asset.id,
                            tokens: this.toTokens()
                        }
                    }, e.prototype.toString = function() {
                        return this.toTokens() + " " + this.asset.id
                    }, e.prototype._matchAssets = function(e) {
                        if (this.asset.id !== e.asset.id) throw new Error("You cannot apply arithmetic operations to Money created with different assets")
                    }, e.max = function() {
                        for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
                        return e.reduce((function(e, t) {
                            return e.gte(t) ? e : t
                        }))
                    }, e.min = function() {
                        for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
                        return e.reduce((function(e, t) {
                            return e.lte(t) ? e : t
                        }))
                    }, e.isMoney = function(t) {
                        return t instanceof e
                    }, e.convert = function(t, n, i) {
                        if (t.asset === n) return t;
                        var o = t.asset.precision - n.precision,
                            s = new r.BigNumber(10).pow(o),
                            u = t.getCoins().multipliedBy(i).div(s).toFixed(0, r.BigNumber.ROUND_DOWN);
                        return new e(new r.BigNumber(u), n)
                    }, e.fromTokens = function(t, n) {
                        return new e(i.toBigNumber(t).times(new r.BigNumber(10).pow(n.precision)), n)
                    }, e.fromCoins = function(t, n) {
                        return new e(t, n)
                    }, e._tokensToCoins = function(t, n) {
                        var i = e._getDivider(n);
                        return t = new r.BigNumber(t).toFixed(n), new r.BigNumber(t).multipliedBy(i)
                    }, e._getDivider = function(e) {
                        return new r.BigNumber(10).pow(e)
                    }, e
                }();
            t.Money = o
        },
        9912: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var r = n(6252),
                i = n(6253),
                o = function() {
                    function e(t, n) {
                        var r = e._getMatcherDivider(n.precisionDifference);
                        this.pair = n, this._matcherCoins = t, this._tokens = this._matcherCoins.div(r)
                    }
                    return e.prototype.getMatcherCoins = function() {
                        return this._matcherCoins.plus(0)
                    }, e.prototype.getTokens = function() {
                        return this._tokens.plus(0)
                    }, e.prototype.toMatcherCoins = function() {
                        return this._matcherCoins.toFixed(0)
                    }, e.prototype.toTokens = function() {
                        return this._tokens.toFixed(this.pair.priceAsset.precision)
                    }, e.prototype.toFormat = function() {
                        return this._tokens.toFormat(this.pair.priceAsset.precision)
                    }, e.prototype.toJSON = function() {
                        return {
                            amountAssetId: this.pair.amountAsset.id,
                            priceAssetId: this.pair.priceAsset.id,
                            priceTokens: this.toTokens()
                        }
                    }, e.prototype.toString = function() {
                        return this.toTokens() + " " + this.pair.amountAsset.id + "/" + this.pair.priceAsset.id
                    }, e.fromMatcherCoins = function(t, n) {
                        return e._checkAmount(t), new e(i.toBigNumber(t), n)
                    }, e.fromTokens = function(t, n) {
                        e._checkAmount(t), t = i.toBigNumber(t).toFixed(n.priceAsset.precision);
                        var o = e._getMatcherDivider(n.precisionDifference);
                        return new e(new r.BigNumber(t).times(o), n)
                    }, e._getMatcherDivider = function(t) {
                        return new r.BigNumber(10).pow(t).multipliedBy(e._MATCHER_SCALE)
                    }, e.isOrderPrice = function(t) {
                        return t instanceof e
                    }, e._checkAmount = function(e) {
                        if (!(["string", "number"].includes(typeof e) || e instanceof r.BigNumber)) throw new Error("Please use strings to create instances of OrderPrice")
                    }, e._MATCHER_SCALE = new r.BigNumber(10).pow(8), e
                }();
            t.OrderPrice = o
        },
        9913: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var r = function() {
                function e(e, t) {
                    this.amountAsset = e, this.priceAsset = t, this.precisionDifference = this.priceAsset.precision - this.amountAsset.precision
                }
                return e.prototype.toJSON = function() {
                    return {
                        amountAsset: this.amountAsset.id,
                        priceAsset: this.priceAsset.id
                    }
                }, e.prototype.toString = function() {
                    return this.amountAsset + "/" + this.priceAsset
                }, e.isAssetPair = function(t) {
                    return t instanceof e
                }, e
            }();
            t.AssetPair = r
        }
    }
]);