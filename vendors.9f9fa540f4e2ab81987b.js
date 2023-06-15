(window.webpackJsonp = window.webpackJsonp || []).push([
    [206], {
        218: function(e, r, t) {
            var n;
            ! function(i) {
                "use strict";
                var o, s = /^-?(?:\d+(?:\.\d*)?|\.\d+)(?:e[+-]?\d+)?$/i,
                    u = Math.ceil,
                    c = Math.floor,
                    l = "[BigNumber Error] ",
                    f = l + "Number primitive has more than 15 significant digits: ",
                    a = 1e14,
                    h = [1, 10, 100, 1e3, 1e4, 1e5, 1e6, 1e7, 1e8, 1e9, 1e10, 1e11, 1e12, 1e13],
                    p = 1e9;

                function g(e) {
                    var r = 0 | e;
                    return e > 0 || e === r ? r : r - 1
                }

                function w(e) {
                    for (var r, t, n = 1, i = e.length, o = e[0] + ""; n < i;) {
                        for (t = 14 - (r = e[n++] + "").length; t--; r = "0" + r);
                        o += r
                    }
                    for (i = o.length; 48 === o.charCodeAt(--i););
                    return o.slice(0, i + 1 || 1)
                }

                function d(e, r) {
                    var t, n, i = e.c,
                        o = r.c,
                        s = e.s,
                        u = r.s,
                        c = e.e,
                        l = r.e;
                    if (!s || !u) return null;
                    if (t = i && !i[0], n = o && !o[0], t || n) return t ? n ? 0 : -u : s;
                    if (s != u) return s;
                    if (t = s < 0, n = c == l, !i || !o) return n ? 0 : !i ^ t ? 1 : -1;
                    if (!n) return c > l ^ t ? 1 : -1;
                    for (u = (c = i.length) < (l = o.length) ? c : l, s = 0; s < u; s++)
                        if (i[s] != o[s]) return i[s] > o[s] ^ t ? 1 : -1;
                    return c == l ? 0 : c > l ^ t ? 1 : -1
                }

                function m(e, r, t, n) {
                    if (e < r || e > t || e !== c(e)) throw Error(l + (n || "Argument") + ("number" == typeof e ? e < r || e > t ? " out of range: " : " not an integer: " : " not a primitive number: ") + String(e))
                }

                function y(e) {
                    var r = e.c.length - 1;
                    return g(e.e / 14) == r && e.c[r] % 2 != 0
                }

                function v(e, r) {
                    return (e.length > 1 ? e.charAt(0) + "." + e.slice(1) : e) + (r < 0 ? "e" : "e+") + r
                }

                function E(e, r, t) {
                    var n, i;
                    if (r < 0) {
                        for (i = t + "."; ++r; i += t);
                        e = i + e
                    } else if (++r > (n = e.length)) {
                        for (i = t, r -= n; --r; i += t);
                        e += i
                    } else r < n && (e = e.slice(0, r) + "." + e.slice(r));
                    return e
                }(o = function e(r) {
                    var t, n, i, o, b, N, _, O, C, A = G.prototype = {
                            constructor: G,
                            toString: null,
                            valueOf: null
                        },
                        D = new G(1),
                        B = 20,
                        I = 4,
                        R = -7,
                        S = 21,
                        L = -1e7,
                        T = 1e7,
                        P = !1,
                        x = 1,
                        U = 0,
                        k = {
                            prefix: "",
                            groupSize: 3,
                            secondaryGroupSize: 0,
                            groupSeparator: ",",
                            decimalSeparator: ".",
                            fractionGroupSize: 0,
                            fractionGroupSeparator: " ",
                            suffix: ""
                        },
                        F = "0123456789abcdefghijklmnopqrstuvwxyz",
                        M = !0;

                    function G(e, r) {
                        var t, o, u, l, a, h, p, g, w = this;
                        if (!(w instanceof G)) return new G(e, r);
                        if (null == r) {
                            if (e && !0 === e._isBigNumber) return w.s = e.s, void(!e.c || e.e > T ? w.c = w.e = null : e.e < L ? w.c = [w.e = 0] : (w.e = e.e, w.c = e.c.slice()));
                            if ((h = "number" == typeof e) && 0 * e == 0) {
                                if (w.s = 1 / e < 0 ? (e = -e, -1) : 1, e === ~~e) {
                                    for (l = 0, a = e; a >= 10; a /= 10, l++);
                                    return void(l > T ? w.c = w.e = null : (w.e = l, w.c = [e]))
                                }
                                g = String(e)
                            } else {
                                if (!s.test(g = String(e))) return i(w, g, h);
                                w.s = 45 == g.charCodeAt(0) ? (g = g.slice(1), -1) : 1
                            }(l = g.indexOf(".")) > -1 && (g = g.replace(".", "")), (a = g.search(/e/i)) > 0 ? (l < 0 && (l = a), l += +g.slice(a + 1), g = g.substring(0, a)) : l < 0 && (l = g.length)
                        } else {
                            if (m(r, 2, F.length, "Base"), 10 == r && M) return j(w = new G(e), B + w.e + 1, I);
                            if (g = String(e), h = "number" == typeof e) {
                                if (0 * e != 0) return i(w, g, h, r);
                                if (w.s = 1 / e < 0 ? (g = g.slice(1), -1) : 1, G.DEBUG && g.replace(/^0\.0*|\./, "").length > 15) throw Error(f + e)
                            } else w.s = 45 === g.charCodeAt(0) ? (g = g.slice(1), -1) : 1;
                            for (t = F.slice(0, r), l = a = 0, p = g.length; a < p; a++)
                                if (t.indexOf(o = g.charAt(a)) < 0) {
                                    if ("." == o) {
                                        if (a > l) {
                                            l = p;
                                            continue
                                        }
                                    } else if (!u && (g == g.toUpperCase() && (g = g.toLowerCase()) || g == g.toLowerCase() && (g = g.toUpperCase()))) {
                                        u = !0, a = -1, l = 0;
                                        continue
                                    }
                                    return i(w, String(e), h, r)
                                } h = !1, (l = (g = n(g, r, 10, w.s)).indexOf(".")) > -1 ? g = g.replace(".", "") : l = g.length
                        }
                        for (a = 0; 48 === g.charCodeAt(a); a++);
                        for (p = g.length; 48 === g.charCodeAt(--p););
                        if (g = g.slice(a, ++p)) {
                            if (p -= a, h && G.DEBUG && p > 15 && (e > 9007199254740991 || e !== c(e))) throw Error(f + w.s * e);
                            if ((l = l - a - 1) > T) w.c = w.e = null;
                            else if (l < L) w.c = [w.e = 0];
                            else {
                                if (w.e = l, w.c = [], a = (l + 1) % 14, l < 0 && (a += 14), a < p) {
                                    for (a && w.c.push(+g.slice(0, a)), p -= 14; a < p;) w.c.push(+g.slice(a, a += 14));
                                    a = 14 - (g = g.slice(a)).length
                                } else a -= p;
                                for (; a--; g += "0");
                                w.c.push(+g)
                            }
                        } else w.c = [w.e = 0]
                    }

                    function K(e, r, t, n) {
                        var i, o, s, u, c;
                        if (null == t ? t = I : m(t, 0, 8), !e.c) return e.toString();
                        if (i = e.c[0], s = e.e, null == r) c = w(e.c), c = 1 == n || 2 == n && (s <= R || s >= S) ? v(c, s) : E(c, s, "0");
                        else if (o = (e = j(new G(e), r, t)).e, u = (c = w(e.c)).length, 1 == n || 2 == n && (r <= o || o <= R)) {
                            for (; u < r; c += "0", u++);
                            c = v(c, o)
                        } else if (r -= s, c = E(c, o, "0"), o + 1 > u) {
                            if (--r > 0)
                                for (c += "."; r--; c += "0");
                        } else if ((r += o - u) > 0)
                            for (o + 1 == u && (c += "."); r--; c += "0");
                        return e.s < 0 && i ? "-" + c : c
                    }

                    function $(e, r) {
                        for (var t, n = 1, i = new G(e[0]); n < e.length; n++) {
                            if (!(t = new G(e[n])).s) {
                                i = t;
                                break
                            }
                            r.call(i, t) && (i = t)
                        }
                        return i
                    }

                    function q(e, r, t) {
                        for (var n = 1, i = r.length; !r[--i]; r.pop());
                        for (i = r[0]; i >= 10; i /= 10, n++);
                        return (t = n + 14 * t - 1) > T ? e.c = e.e = null : t < L ? e.c = [e.e = 0] : (e.e = t, e.c = r), e
                    }

                    function j(e, r, t, n) {
                        var i, o, s, l, f, p, g, w = e.c,
                            d = h;
                        if (w) {
                            e: {
                                for (i = 1, l = w[0]; l >= 10; l /= 10, i++);
                                if ((o = r - i) < 0) o += 14,
                                s = r,
                                g = (f = w[p = 0]) / d[i - s - 1] % 10 | 0;
                                else if ((p = u((o + 1) / 14)) >= w.length) {
                                    if (!n) break e;
                                    for (; w.length <= p; w.push(0));
                                    f = g = 0, i = 1, s = (o %= 14) - 14 + 1
                                } else {
                                    for (f = l = w[p], i = 1; l >= 10; l /= 10, i++);
                                    g = (s = (o %= 14) - 14 + i) < 0 ? 0 : f / d[i - s - 1] % 10 | 0
                                }
                                if (n = n || r < 0 || null != w[p + 1] || (s < 0 ? f : f % d[i - s - 1]), n = t < 4 ? (g || n) && (0 == t || t == (e.s < 0 ? 3 : 2)) : g > 5 || 5 == g && (4 == t || n || 6 == t && (o > 0 ? s > 0 ? f / d[i - s] : 0 : w[p - 1]) % 10 & 1 || t == (e.s < 0 ? 8 : 7)), r < 1 || !w[0]) return w.length = 0,
                                n ? (r -= e.e + 1, w[0] = d[(14 - r % 14) % 14], e.e = -r || 0) : w[0] = e.e = 0,
                                e;
                                if (0 == o ? (w.length = p, l = 1, p--) : (w.length = p + 1, l = d[14 - o], w[p] = s > 0 ? c(f / d[i - s] % d[s]) * l : 0), n)
                                    for (;;) {
                                        if (0 == p) {
                                            for (o = 1, s = w[0]; s >= 10; s /= 10, o++);
                                            for (s = w[0] += l, l = 1; s >= 10; s /= 10, l++);
                                            o != l && (e.e++, w[0] == a && (w[0] = 1));
                                            break
                                        }
                                        if (w[p] += l, w[p] != a) break;
                                        w[p--] = 0, l = 1
                                    }
                                for (o = w.length; 0 === w[--o]; w.pop());
                            }
                            e.e > T ? e.c = e.e = null : e.e < L && (e.c = [e.e = 0])
                        }
                        return e
                    }

                    function Q(e) {
                        var r, t = e.e;
                        return null === t ? e.toString() : (r = w(e.c), r = t <= R || t >= S ? v(r, t) : E(r, t, "0"), e.s < 0 ? "-" + r : r)
                    }
                    return G.clone = e, G.ROUND_UP = 0, G.ROUND_DOWN = 1, G.ROUND_CEIL = 2, G.ROUND_FLOOR = 3, G.ROUND_HALF_UP = 4, G.ROUND_HALF_DOWN = 5, G.ROUND_HALF_EVEN = 6, G.ROUND_HALF_CEIL = 7, G.ROUND_HALF_FLOOR = 8, G.EUCLID = 9, G.config = G.set = function(e) {
                        var r, t;
                        if (null != e) {
                            if ("object" != typeof e) throw Error(l + "Object expected: " + e);
                            if (e.hasOwnProperty(r = "DECIMAL_PLACES") && (m(t = e[r], 0, p, r), B = t), e.hasOwnProperty(r = "ROUNDING_MODE") && (m(t = e[r], 0, 8, r), I = t), e.hasOwnProperty(r = "EXPONENTIAL_AT") && ((t = e[r]) && t.pop ? (m(t[0], -p, 0, r), m(t[1], 0, p, r), R = t[0], S = t[1]) : (m(t, -p, p, r), R = -(S = t < 0 ? -t : t))), e.hasOwnProperty(r = "RANGE"))
                                if ((t = e[r]) && t.pop) m(t[0], -p, -1, r), m(t[1], 1, p, r), L = t[0], T = t[1];
                                else {
                                    if (m(t, -p, p, r), !t) throw Error(l + r + " cannot be zero: " + t);
                                    L = -(T = t < 0 ? -t : t)
                                } if (e.hasOwnProperty(r = "CRYPTO")) {
                                if ((t = e[r]) !== !!t) throw Error(l + r + " not true or false: " + t);
                                if (t) {
                                    if ("undefined" == typeof crypto || !crypto || !crypto.getRandomValues && !crypto.randomBytes) throw P = !t, Error(l + "crypto unavailable");
                                    P = t
                                } else P = t
                            }
                            if (e.hasOwnProperty(r = "MODULO_MODE") && (m(t = e[r], 0, 9, r), x = t), e.hasOwnProperty(r = "POW_PRECISION") && (m(t = e[r], 0, p, r), U = t), e.hasOwnProperty(r = "FORMAT")) {
                                if ("object" != typeof(t = e[r])) throw Error(l + r + " not an object: " + t);
                                k = t
                            }
                            if (e.hasOwnProperty(r = "ALPHABET")) {
                                if ("string" != typeof(t = e[r]) || /^.?$|[+\-.\s]|(.).*\1/.test(t)) throw Error(l + r + " invalid: " + t);
                                M = "0123456789" == t.slice(0, 10), F = t
                            }
                        }
                        return {
                            DECIMAL_PLACES: B,
                            ROUNDING_MODE: I,
                            EXPONENTIAL_AT: [R, S],
                            RANGE: [L, T],
                            CRYPTO: P,
                            MODULO_MODE: x,
                            POW_PRECISION: U,
                            FORMAT: k,
                            ALPHABET: F
                        }
                    }, G.isBigNumber = function(e) {
                        if (!e || !0 !== e._isBigNumber) return !1;
                        if (!G.DEBUG) return !0;
                        var r, t, n = e.c,
                            i = e.e,
                            o = e.s;
                        e: if ("[object Array]" == {}.toString.call(n)) {
                            if ((1 === o || -1 === o) && i >= -p && i <= p && i === c(i)) {
                                if (0 === n[0]) {
                                    if (0 === i && 1 === n.length) return !0;
                                    break e
                                }
                                if ((r = (i + 1) % 14) < 1 && (r += 14), String(n[0]).length == r) {
                                    for (r = 0; r < n.length; r++)
                                        if ((t = n[r]) < 0 || t >= a || t !== c(t)) break e;
                                    if (0 !== t) return !0
                                }
                            }
                        } else if (null === n && null === i && (null === o || 1 === o || -1 === o)) return !0;
                        throw Error(l + "Invalid BigNumber: " + e)
                    }, G.maximum = G.max = function() {
                        return $(arguments, A.lt)
                    }, G.minimum = G.min = function() {
                        return $(arguments, A.gt)
                    }, G.random = (o = 9007199254740992 * Math.random() & 2097151 ? function() {
                        return c(9007199254740992 * Math.random())
                    } : function() {
                        return 8388608 * (1073741824 * Math.random() | 0) + (8388608 * Math.random() | 0)
                    }, function(e) {
                        var r, t, n, i, s, f = 0,
                            a = [],
                            g = new G(D);
                        if (null == e ? e = B : m(e, 0, p), i = u(e / 14), P)
                            if (crypto.getRandomValues) {
                                for (r = crypto.getRandomValues(new Uint32Array(i *= 2)); f < i;)(s = 131072 * r[f] + (r[f + 1] >>> 11)) >= 9e15 ? (t = crypto.getRandomValues(new Uint32Array(2)), r[f] = t[0], r[f + 1] = t[1]) : (a.push(s % 1e14), f += 2);
                                f = i / 2
                            } else {
                                if (!crypto.randomBytes) throw P = !1, Error(l + "crypto unavailable");
                                for (r = crypto.randomBytes(i *= 7); f < i;)(s = 281474976710656 * (31 & r[f]) + 1099511627776 * r[f + 1] + 4294967296 * r[f + 2] + 16777216 * r[f + 3] + (r[f + 4] << 16) + (r[f + 5] << 8) + r[f + 6]) >= 9e15 ? crypto.randomBytes(7).copy(r, f) : (a.push(s % 1e14), f += 7);
                                f = i / 7
                            } if (!P)
                            for (; f < i;)(s = o()) < 9e15 && (a[f++] = s % 1e14);
                        for (e %= 14, (i = a[--f]) && e && (s = h[14 - e], a[f] = c(i / s) * s); 0 === a[f]; a.pop(), f--);
                        if (f < 0) a = [n = 0];
                        else {
                            for (n = -1; 0 === a[0]; a.splice(0, 1), n -= 14);
                            for (f = 1, s = a[0]; s >= 10; s /= 10, f++);
                            f < 14 && (n -= 14 - f)
                        }
                        return g.e = n, g.c = a, g
                    }), G.sum = function() {
                        for (var e = 1, r = arguments, t = new G(r[0]); e < r.length;) t = t.plus(r[e++]);
                        return t
                    }, n = function() {
                        function e(e, r, t, n) {
                            for (var i, o, s = [0], u = 0, c = e.length; u < c;) {
                                for (o = s.length; o--; s[o] *= r);
                                for (s[0] += n.indexOf(e.charAt(u++)), i = 0; i < s.length; i++) s[i] > t - 1 && (null == s[i + 1] && (s[i + 1] = 0), s[i + 1] += s[i] / t | 0, s[i] %= t)
                            }
                            return s.reverse()
                        }
                        return function(r, n, i, o, s) {
                            var u, c, l, f, a, h, p, g, d = r.indexOf("."),
                                m = B,
                                y = I;
                            for (d >= 0 && (f = U, U = 0, r = r.replace(".", ""), h = (g = new G(n)).pow(r.length - d), U = f, g.c = e(E(w(h.c), h.e, "0"), 10, i, "0123456789"), g.e = g.c.length), l = f = (p = e(r, n, i, s ? (u = F, "0123456789") : (u = "0123456789", F))).length; 0 == p[--f]; p.pop());
                            if (!p[0]) return u.charAt(0);
                            if (d < 0 ? --l : (h.c = p, h.e = l, h.s = o, p = (h = t(h, g, m, y, i)).c, a = h.r, l = h.e), d = p[c = l + m + 1], f = i / 2, a = a || c < 0 || null != p[c + 1], a = y < 4 ? (null != d || a) && (0 == y || y == (h.s < 0 ? 3 : 2)) : d > f || d == f && (4 == y || a || 6 == y && 1 & p[c - 1] || y == (h.s < 0 ? 8 : 7)), c < 1 || !p[0]) r = a ? E(u.charAt(1), -m, u.charAt(0)) : u.charAt(0);
                            else {
                                if (p.length = c, a)
                                    for (--i; ++p[--c] > i;) p[c] = 0, c || (++l, p = [1].concat(p));
                                for (f = p.length; !p[--f];);
                                for (d = 0, r = ""; d <= f; r += u.charAt(p[d++]));
                                r = E(r, l, u.charAt(0))
                            }
                            return r
                        }
                    }(), t = function() {
                        function e(e, r, t) {
                            var n, i, o, s, u = 0,
                                c = e.length,
                                l = r % 1e7,
                                f = r / 1e7 | 0;
                            for (e = e.slice(); c--;) u = ((i = l * (o = e[c] % 1e7) + (n = f * o + (s = e[c] / 1e7 | 0) * l) % 1e7 * 1e7 + u) / t | 0) + (n / 1e7 | 0) + f * s, e[c] = i % t;
                            return u && (e = [u].concat(e)), e
                        }

                        function r(e, r, t, n) {
                            var i, o;
                            if (t != n) o = t > n ? 1 : -1;
                            else
                                for (i = o = 0; i < t; i++)
                                    if (e[i] != r[i]) {
                                        o = e[i] > r[i] ? 1 : -1;
                                        break
                                    } return o
                        }

                        function t(e, r, t, n) {
                            for (var i = 0; t--;) e[t] -= i, i = e[t] < r[t] ? 1 : 0, e[t] = i * n + e[t] - r[t];
                            for (; !e[0] && e.length > 1; e.splice(0, 1));
                        }
                        return function(n, i, o, s, u) {
                            var l, f, h, p, w, d, m, y, v, E, b, N, _, O, C, A, D, B = n.s == i.s ? 1 : -1,
                                I = n.c,
                                R = i.c;
                            if (!(I && I[0] && R && R[0])) return new G(n.s && i.s && (I ? !R || I[0] != R[0] : R) ? I && 0 == I[0] || !R ? 0 * B : B / 0 : NaN);
                            for (v = (y = new G(B)).c = [], B = o + (f = n.e - i.e) + 1, u || (u = a, f = g(n.e / 14) - g(i.e / 14), B = B / 14 | 0), h = 0; R[h] == (I[h] || 0); h++);
                            if (R[h] > (I[h] || 0) && f--, B < 0) v.push(1), p = !0;
                            else {
                                for (O = I.length, A = R.length, h = 0, B += 2, (w = c(u / (R[0] + 1))) > 1 && (R = e(R, w, u), I = e(I, w, u), A = R.length, O = I.length), _ = A, b = (E = I.slice(0, A)).length; b < A; E[b++] = 0);
                                D = R.slice(), D = [0].concat(D), C = R[0], R[1] >= u / 2 && C++;
                                do {
                                    if (w = 0, (l = r(R, E, A, b)) < 0) {
                                        if (N = E[0], A != b && (N = N * u + (E[1] || 0)), (w = c(N / C)) > 1)
                                            for (w >= u && (w = u - 1), m = (d = e(R, w, u)).length, b = E.length; 1 == r(d, E, m, b);) w--, t(d, A < m ? D : R, m, u), m = d.length, l = 1;
                                        else 0 == w && (l = w = 1), m = (d = R.slice()).length;
                                        if (m < b && (d = [0].concat(d)), t(E, d, b, u), b = E.length, -1 == l)
                                            for (; r(R, E, A, b) < 1;) w++, t(E, A < b ? D : R, b, u), b = E.length
                                    } else 0 === l && (w++, E = [0]);
                                    v[h++] = w, E[0] ? E[b++] = I[_] || 0 : (E = [I[_]], b = 1)
                                } while ((_++ < O || null != E[0]) && B--);
                                p = null != E[0], v[0] || v.splice(0, 1)
                            }
                            if (u == a) {
                                for (h = 1, B = v[0]; B >= 10; B /= 10, h++);
                                j(y, o + (y.e = h + 14 * f - 1) + 1, s, p)
                            } else y.e = f, y.r = +p;
                            return y
                        }
                    }(), b = /^(-?)0([xbo])(?=\w[\w.]*$)/i, N = /^([^.]+)\.$/, _ = /^\.([^.]+)$/, O = /^-?(Infinity|NaN)$/, C = /^\s*\+(?=[\w.])|^\s+|\s+$/g, i = function(e, r, t, n) {
                        var i, o = t ? r : r.replace(C, "");
                        if (O.test(o)) e.s = isNaN(o) ? null : o < 0 ? -1 : 1;
                        else {
                            if (!t && (o = o.replace(b, (function(e, r, t) {
                                    return i = "x" == (t = t.toLowerCase()) ? 16 : "b" == t ? 2 : 8, n && n != i ? e : r
                                })), n && (i = n, o = o.replace(N, "$1").replace(_, "0.$1")), r != o)) return new G(o, i);
                            if (G.DEBUG) throw Error(l + "Not a" + (n ? " base " + n : "") + " number: " + r);
                            e.s = null
                        }
                        e.c = e.e = null
                    }, A.absoluteValue = A.abs = function() {
                        var e = new G(this);
                        return e.s < 0 && (e.s = 1), e
                    }, A.comparedTo = function(e, r) {
                        return d(this, new G(e, r))
                    }, A.decimalPlaces = A.dp = function(e, r) {
                        var t, n, i, o = this;
                        if (null != e) return m(e, 0, p), null == r ? r = I : m(r, 0, 8), j(new G(o), e + o.e + 1, r);
                        if (!(t = o.c)) return null;
                        if (n = 14 * ((i = t.length - 1) - g(this.e / 14)), i = t[i])
                            for (; i % 10 == 0; i /= 10, n--);
                        return n < 0 && (n = 0), n
                    }, A.dividedBy = A.div = function(e, r) {
                        return t(this, new G(e, r), B, I)
                    }, A.dividedToIntegerBy = A.idiv = function(e, r) {
                        return t(this, new G(e, r), 0, 1)
                    }, A.exponentiatedBy = A.pow = function(e, r) {
                        var t, n, i, o, s, f, a, h, p = this;
                        if ((e = new G(e)).c && !e.isInteger()) throw Error(l + "Exponent not an integer: " + Q(e));
                        if (null != r && (r = new G(r)), s = e.e > 14, !p.c || !p.c[0] || 1 == p.c[0] && !p.e && 1 == p.c.length || !e.c || !e.c[0]) return h = new G(Math.pow(+Q(p), s ? e.s * (2 - y(e)) : +Q(e))), r ? h.mod(r) : h;
                        if (f = e.s < 0, r) {
                            if (r.c ? !r.c[0] : !r.s) return new G(NaN);
                            (n = !f && p.isInteger() && r.isInteger()) && (p = p.mod(r))
                        } else {
                            if (e.e > 9 && (p.e > 0 || p.e < -1 || (0 == p.e ? p.c[0] > 1 || s && p.c[1] >= 24e7 : p.c[0] < 8e13 || s && p.c[0] <= 9999975e7))) return o = p.s < 0 && y(e) ? -0 : 0, p.e > -1 && (o = 1 / o), new G(f ? 1 / o : o);
                            U && (o = u(U / 14 + 2))
                        }
                        for (s ? (t = new G(.5), f && (e.s = 1), a = y(e)) : a = (i = Math.abs(+Q(e))) % 2, h = new G(D);;) {
                            if (a) {
                                if (!(h = h.times(p)).c) break;
                                o ? h.c.length > o && (h.c.length = o) : n && (h = h.mod(r))
                            }
                            if (i) {
                                if (0 === (i = c(i / 2))) break;
                                a = i % 2
                            } else if (j(e = e.times(t), e.e + 1, 1), e.e > 14) a = y(e);
                            else {
                                if (0 === (i = +Q(e))) break;
                                a = i % 2
                            }
                            p = p.times(p), o ? p.c && p.c.length > o && (p.c.length = o) : n && (p = p.mod(r))
                        }
                        return n ? h : (f && (h = D.div(h)), r ? h.mod(r) : o ? j(h, U, I, void 0) : h)
                    }, A.integerValue = function(e) {
                        var r = new G(this);
                        return null == e ? e = I : m(e, 0, 8), j(r, r.e + 1, e)
                    }, A.isEqualTo = A.eq = function(e, r) {
                        return 0 === d(this, new G(e, r))
                    }, A.isFinite = function() {
                        return !!this.c
                    }, A.isGreaterThan = A.gt = function(e, r) {
                        return d(this, new G(e, r)) > 0
                    }, A.isGreaterThanOrEqualTo = A.gte = function(e, r) {
                        return 1 === (r = d(this, new G(e, r))) || 0 === r
                    }, A.isInteger = function() {
                        return !!this.c && g(this.e / 14) > this.c.length - 2
                    }, A.isLessThan = A.lt = function(e, r) {
                        return d(this, new G(e, r)) < 0
                    }, A.isLessThanOrEqualTo = A.lte = function(e, r) {
                        return -1 === (r = d(this, new G(e, r))) || 0 === r
                    }, A.isNaN = function() {
                        return !this.s
                    }, A.isNegative = function() {
                        return this.s < 0
                    }, A.isPositive = function() {
                        return this.s > 0
                    }, A.isZero = function() {
                        return !!this.c && 0 == this.c[0]
                    }, A.minus = function(e, r) {
                        var t, n, i, o, s = this,
                            u = s.s;
                        if (r = (e = new G(e, r)).s, !u || !r) return new G(NaN);
                        if (u != r) return e.s = -r, s.plus(e);
                        var c = s.e / 14,
                            l = e.e / 14,
                            f = s.c,
                            h = e.c;
                        if (!c || !l) {
                            if (!f || !h) return f ? (e.s = -r, e) : new G(h ? s : NaN);
                            if (!f[0] || !h[0]) return h[0] ? (e.s = -r, e) : new G(f[0] ? s : 3 == I ? -0 : 0)
                        }
                        if (c = g(c), l = g(l), f = f.slice(), u = c - l) {
                            for ((o = u < 0) ? (u = -u, i = f) : (l = c, i = h), i.reverse(), r = u; r--; i.push(0));
                            i.reverse()
                        } else
                            for (n = (o = (u = f.length) < (r = h.length)) ? u : r, u = r = 0; r < n; r++)
                                if (f[r] != h[r]) {
                                    o = f[r] < h[r];
                                    break
                                } if (o && (i = f, f = h, h = i, e.s = -e.s), (r = (n = h.length) - (t = f.length)) > 0)
                            for (; r--; f[t++] = 0);
                        for (r = a - 1; n > u;) {
                            if (f[--n] < h[n]) {
                                for (t = n; t && !f[--t]; f[t] = r);
                                --f[t], f[n] += a
                            }
                            f[n] -= h[n]
                        }
                        for (; 0 == f[0]; f.splice(0, 1), --l);
                        return f[0] ? q(e, f, l) : (e.s = 3 == I ? -1 : 1, e.c = [e.e = 0], e)
                    }, A.modulo = A.mod = function(e, r) {
                        var n, i, o = this;
                        return e = new G(e, r), !o.c || !e.s || e.c && !e.c[0] ? new G(NaN) : !e.c || o.c && !o.c[0] ? new G(o) : (9 == x ? (i = e.s, e.s = 1, n = t(o, e, 0, 3), e.s = i, n.s *= i) : n = t(o, e, 0, x), (e = o.minus(n.times(e))).c[0] || 1 != x || (e.s = o.s), e)
                    }, A.multipliedBy = A.times = function(e, r) {
                        var t, n, i, o, s, u, c, l, f, h, p, w, d, m, y = this,
                            v = y.c,
                            E = (e = new G(e, r)).c;
                        if (!(v && E && v[0] && E[0])) return !y.s || !e.s || v && !v[0] && !E || E && !E[0] && !v ? e.c = e.e = e.s = null : (e.s *= y.s, v && E ? (e.c = [0], e.e = 0) : e.c = e.e = null), e;
                        for (n = g(y.e / 14) + g(e.e / 14), e.s *= y.s, (c = v.length) < (h = E.length) && (d = v, v = E, E = d, i = c, c = h, h = i), i = c + h, d = []; i--; d.push(0));
                        for (m = a, 1e7, i = h; --i >= 0;) {
                            for (t = 0, p = E[i] % 1e7, w = E[i] / 1e7 | 0, o = i + (s = c); o > i;) t = ((l = p * (l = v[--s] % 1e7) + (u = w * l + (f = v[s] / 1e7 | 0) * p) % 1e7 * 1e7 + d[o] + t) / m | 0) + (u / 1e7 | 0) + w * f, d[o--] = l % m;
                            d[o] = t
                        }
                        return t ? ++n : d.splice(0, 1), q(e, d, n)
                    }, A.negated = function() {
                        var e = new G(this);
                        return e.s = -e.s || null, e
                    }, A.plus = function(e, r) {
                        var t, n = this,
                            i = n.s;
                        if (r = (e = new G(e, r)).s, !i || !r) return new G(NaN);
                        if (i != r) return e.s = -r, n.minus(e);
                        var o = n.e / 14,
                            s = e.e / 14,
                            u = n.c,
                            c = e.c;
                        if (!o || !s) {
                            if (!u || !c) return new G(i / 0);
                            if (!u[0] || !c[0]) return c[0] ? e : new G(u[0] ? n : 0 * i)
                        }
                        if (o = g(o), s = g(s), u = u.slice(), i = o - s) {
                            for (i > 0 ? (s = o, t = c) : (i = -i, t = u), t.reverse(); i--; t.push(0));
                            t.reverse()
                        }
                        for ((i = u.length) - (r = c.length) < 0 && (t = c, c = u, u = t, r = i), i = 0; r;) i = (u[--r] = u[r] + c[r] + i) / a | 0, u[r] = a === u[r] ? 0 : u[r] % a;
                        return i && (u = [i].concat(u), ++s), q(e, u, s)
                    }, A.precision = A.sd = function(e, r) {
                        var t, n, i, o = this;
                        if (null != e && e !== !!e) return m(e, 1, p), null == r ? r = I : m(r, 0, 8), j(new G(o), e, r);
                        if (!(t = o.c)) return null;
                        if (n = 14 * (i = t.length - 1) + 1, i = t[i]) {
                            for (; i % 10 == 0; i /= 10, n--);
                            for (i = t[0]; i >= 10; i /= 10, n++);
                        }
                        return e && o.e + 1 > n && (n = o.e + 1), n
                    }, A.shiftedBy = function(e) {
                        return m(e, -9007199254740991, 9007199254740991), this.times("1e" + e)
                    }, A.squareRoot = A.sqrt = function() {
                        var e, r, n, i, o, s = this,
                            u = s.c,
                            c = s.s,
                            l = s.e,
                            f = B + 4,
                            a = new G("0.5");
                        if (1 !== c || !u || !u[0]) return new G(!c || c < 0 && (!u || u[0]) ? NaN : u ? s : 1 / 0);
                        if (0 == (c = Math.sqrt(+Q(s))) || c == 1 / 0 ? (((r = w(u)).length + l) % 2 == 0 && (r += "0"), c = Math.sqrt(+r), l = g((l + 1) / 2) - (l < 0 || l % 2), n = new G(r = c == 1 / 0 ? "5e" + l : (r = c.toExponential()).slice(0, r.indexOf("e") + 1) + l)) : n = new G(c + ""), n.c[0])
                            for ((c = (l = n.e) + f) < 3 && (c = 0);;)
                                if (o = n, n = a.times(o.plus(t(s, o, f, 1))), w(o.c).slice(0, c) === (r = w(n.c)).slice(0, c)) {
                                    if (n.e < l && --c, "9999" != (r = r.slice(c - 3, c + 1)) && (i || "4999" != r)) {
                                        +r && (+r.slice(1) || "5" != r.charAt(0)) || (j(n, n.e + B + 2, 1), e = !n.times(n).eq(s));
                                        break
                                    }
                                    if (!i && (j(o, o.e + B + 2, 0), o.times(o).eq(s))) {
                                        n = o;
                                        break
                                    }
                                    f += 4, c += 4, i = 1
                                } return j(n, n.e + B + 1, I, e)
                    }, A.toExponential = function(e, r) {
                        return null != e && (m(e, 0, p), e++), K(this, e, r, 1)
                    }, A.toFixed = function(e, r) {
                        return null != e && (m(e, 0, p), e = e + this.e + 1), K(this, e, r)
                    }, A.toFormat = function(e, r, t) {
                        var n, i = this;
                        if (null == t) null != e && r && "object" == typeof r ? (t = r, r = null) : e && "object" == typeof e ? (t = e, e = r = null) : t = k;
                        else if ("object" != typeof t) throw Error(l + "Argument not an object: " + t);
                        if (n = i.toFixed(e, r), i.c) {
                            var o, s = n.split("."),
                                u = +t.groupSize,
                                c = +t.secondaryGroupSize,
                                f = t.groupSeparator || "",
                                a = s[0],
                                h = s[1],
                                p = i.s < 0,
                                g = p ? a.slice(1) : a,
                                w = g.length;
                            if (c && (o = u, u = c, c = o, w -= o), u > 0 && w > 0) {
                                for (o = w % u || u, a = g.substr(0, o); o < w; o += u) a += f + g.substr(o, u);
                                c > 0 && (a += f + g.slice(o)), p && (a = "-" + a)
                            }
                            n = h ? a + (t.decimalSeparator || "") + ((c = +t.fractionGroupSize) ? h.replace(new RegExp("\\d{" + c + "}\\B", "g"), "$&" + (t.fractionGroupSeparator || "")) : h) : a
                        }
                        return (t.prefix || "") + n + (t.suffix || "")
                    }, A.toFraction = function(e) {
                        var r, n, i, o, s, u, c, f, a, p, g, d, m = this,
                            y = m.c;
                        if (null != e && (!(c = new G(e)).isInteger() && (c.c || 1 !== c.s) || c.lt(D))) throw Error(l + "Argument " + (c.isInteger() ? "out of range: " : "not an integer: ") + Q(c));
                        if (!y) return new G(m);
                        for (r = new G(D), a = n = new G(D), i = f = new G(D), d = w(y), s = r.e = d.length - m.e - 1, r.c[0] = h[(u = s % 14) < 0 ? 14 + u : u], e = !e || c.comparedTo(r) > 0 ? s > 0 ? r : a : c, u = T, T = 1 / 0, c = new G(d), f.c[0] = 0; p = t(c, r, 0, 1), 1 != (o = n.plus(p.times(i))).comparedTo(e);) n = i, i = o, a = f.plus(p.times(o = a)), f = o, r = c.minus(p.times(o = r)), c = o;
                        return o = t(e.minus(n), i, 0, 1), f = f.plus(o.times(a)), n = n.plus(o.times(i)), f.s = a.s = m.s, g = t(a, i, s *= 2, I).minus(m).abs().comparedTo(t(f, n, s, I).minus(m).abs()) < 1 ? [a, i] : [f, n], T = u, g
                    }, A.toNumber = function() {
                        return +Q(this)
                    }, A.toPrecision = function(e, r) {
                        return null != e && m(e, 1, p), K(this, e, r, 2)
                    }, A.toString = function(e) {
                        var r, t = this,
                            i = t.s,
                            o = t.e;
                        return null === o ? i ? (r = "Infinity", i < 0 && (r = "-" + r)) : r = "NaN" : (null == e ? r = o <= R || o >= S ? v(w(t.c), o) : E(w(t.c), o, "0") : 10 === e && M ? r = E(w((t = j(new G(t), B + o + 1, I)).c), t.e, "0") : (m(e, 2, F.length, "Base"), r = n(E(w(t.c), o, "0"), 10, e, i, !0)), i < 0 && t.c[0] && (r = "-" + r)), r
                    }, A.valueOf = A.toJSON = function() {
                        return Q(this)
                    }, A._isBigNumber = !0, null != r && G.set(r), G
                }()).default = o.BigNumber = o, void 0 === (n = function() {
                    return o
                }.call(r, t, r, e)) || (e.exports = n)
            }()
        },
        22: function(e, r, t) {
            var n;
            ! function(i) {
                "use strict";
                var o, s = /^-?(?:\d+(?:\.\d*)?|\.\d+)(?:e[+-]?\d+)?$/i,
                    u = Math.ceil,
                    c = Math.floor,
                    l = "[BigNumber Error] ",
                    f = l + "Number primitive has more than 15 significant digits: ",
                    a = 1e14,
                    h = [1, 10, 100, 1e3, 1e4, 1e5, 1e6, 1e7, 1e8, 1e9, 1e10, 1e11, 1e12, 1e13],
                    p = 1e9;

                function g(e) {
                    var r = 0 | e;
                    return e > 0 || e === r ? r : r - 1
                }

                function w(e) {
                    for (var r, t, n = 1, i = e.length, o = e[0] + ""; n < i;) {
                        for (t = 14 - (r = e[n++] + "").length; t--; r = "0" + r);
                        o += r
                    }
                    for (i = o.length; 48 === o.charCodeAt(--i););
                    return o.slice(0, i + 1 || 1)
                }

                function d(e, r) {
                    var t, n, i = e.c,
                        o = r.c,
                        s = e.s,
                        u = r.s,
                        c = e.e,
                        l = r.e;
                    if (!s || !u) return null;
                    if (t = i && !i[0], n = o && !o[0], t || n) return t ? n ? 0 : -u : s;
                    if (s != u) return s;
                    if (t = s < 0, n = c == l, !i || !o) return n ? 0 : !i ^ t ? 1 : -1;
                    if (!n) return c > l ^ t ? 1 : -1;
                    for (u = (c = i.length) < (l = o.length) ? c : l, s = 0; s < u; s++)
                        if (i[s] != o[s]) return i[s] > o[s] ^ t ? 1 : -1;
                    return c == l ? 0 : c > l ^ t ? 1 : -1
                }

                function m(e, r, t, n) {
                    if (e < r || e > t || e !== c(e)) throw Error(l + (n || "Argument") + ("number" == typeof e ? e < r || e > t ? " out of range: " : " not an integer: " : " not a primitive number: ") + String(e))
                }

                function y(e) {
                    var r = e.c.length - 1;
                    return g(e.e / 14) == r && e.c[r] % 2 != 0
                }

                function v(e, r) {
                    return (e.length > 1 ? e.charAt(0) + "." + e.slice(1) : e) + (r < 0 ? "e" : "e+") + r
                }

                function E(e, r, t) {
                    var n, i;
                    if (r < 0) {
                        for (i = t + "."; ++r; i += t);
                        e = i + e
                    } else if (++r > (n = e.length)) {
                        for (i = t, r -= n; --r; i += t);
                        e += i
                    } else r < n && (e = e.slice(0, r) + "." + e.slice(r));
                    return e
                }(o = function e(r) {
                    var t, n, i, o, b, N, _, O, C, A = G.prototype = {
                            constructor: G,
                            toString: null,
                            valueOf: null
                        },
                        D = new G(1),
                        B = 20,
                        I = 4,
                        R = -7,
                        S = 21,
                        L = -1e7,
                        T = 1e7,
                        P = !1,
                        x = 1,
                        U = 0,
                        k = {
                            prefix: "",
                            groupSize: 3,
                            secondaryGroupSize: 0,
                            groupSeparator: ",",
                            decimalSeparator: ".",
                            fractionGroupSize: 0,
                            fractionGroupSeparator: " ",
                            suffix: ""
                        },
                        F = "0123456789abcdefghijklmnopqrstuvwxyz",
                        M = !0;

                    function G(e, r) {
                        var t, o, u, l, a, h, p, g, w = this;
                        if (!(w instanceof G)) return new G(e, r);
                        if (null == r) {
                            if (e && !0 === e._isBigNumber) return w.s = e.s, void(!e.c || e.e > T ? w.c = w.e = null : e.e < L ? w.c = [w.e = 0] : (w.e = e.e, w.c = e.c.slice()));
                            if ((h = "number" == typeof e) && 0 * e == 0) {
                                if (w.s = 1 / e < 0 ? (e = -e, -1) : 1, e === ~~e) {
                                    for (l = 0, a = e; a >= 10; a /= 10, l++);
                                    return void(l > T ? w.c = w.e = null : (w.e = l, w.c = [e]))
                                }
                                g = String(e)
                            } else {
                                if (!s.test(g = String(e))) return i(w, g, h);
                                w.s = 45 == g.charCodeAt(0) ? (g = g.slice(1), -1) : 1
                            }(l = g.indexOf(".")) > -1 && (g = g.replace(".", "")), (a = g.search(/e/i)) > 0 ? (l < 0 && (l = a), l += +g.slice(a + 1), g = g.substring(0, a)) : l < 0 && (l = g.length)
                        } else {
                            if (m(r, 2, F.length, "Base"), 10 == r && M) return j(w = new G(e), B + w.e + 1, I);
                            if (g = String(e), h = "number" == typeof e) {
                                if (0 * e != 0) return i(w, g, h, r);
                                if (w.s = 1 / e < 0 ? (g = g.slice(1), -1) : 1, G.DEBUG && g.replace(/^0\.0*|\./, "").length > 15) throw Error(f + e)
                            } else w.s = 45 === g.charCodeAt(0) ? (g = g.slice(1), -1) : 1;
                            for (t = F.slice(0, r), l = a = 0, p = g.length; a < p; a++)
                                if (t.indexOf(o = g.charAt(a)) < 0) {
                                    if ("." == o) {
                                        if (a > l) {
                                            l = p;
                                            continue
                                        }
                                    } else if (!u && (g == g.toUpperCase() && (g = g.toLowerCase()) || g == g.toLowerCase() && (g = g.toUpperCase()))) {
                                        u = !0, a = -1, l = 0;
                                        continue
                                    }
                                    return i(w, String(e), h, r)
                                } h = !1, (l = (g = n(g, r, 10, w.s)).indexOf(".")) > -1 ? g = g.replace(".", "") : l = g.length
                        }
                        for (a = 0; 48 === g.charCodeAt(a); a++);
                        for (p = g.length; 48 === g.charCodeAt(--p););
                        if (g = g.slice(a, ++p)) {
                            if (p -= a, h && G.DEBUG && p > 15 && (e > 9007199254740991 || e !== c(e))) throw Error(f + w.s * e);
                            if ((l = l - a - 1) > T) w.c = w.e = null;
                            else if (l < L) w.c = [w.e = 0];
                            else {
                                if (w.e = l, w.c = [], a = (l + 1) % 14, l < 0 && (a += 14), a < p) {
                                    for (a && w.c.push(+g.slice(0, a)), p -= 14; a < p;) w.c.push(+g.slice(a, a += 14));
                                    a = 14 - (g = g.slice(a)).length
                                } else a -= p;
                                for (; a--; g += "0");
                                w.c.push(+g)
                            }
                        } else w.c = [w.e = 0]
                    }

                    function K(e, r, t, n) {
                        var i, o, s, u, c;
                        if (null == t ? t = I : m(t, 0, 8), !e.c) return e.toString();
                        if (i = e.c[0], s = e.e, null == r) c = w(e.c), c = 1 == n || 2 == n && (s <= R || s >= S) ? v(c, s) : E(c, s, "0");
                        else if (o = (e = j(new G(e), r, t)).e, u = (c = w(e.c)).length, 1 == n || 2 == n && (r <= o || o <= R)) {
                            for (; u < r; c += "0", u++);
                            c = v(c, o)
                        } else if (r -= s, c = E(c, o, "0"), o + 1 > u) {
                            if (--r > 0)
                                for (c += "."; r--; c += "0");
                        } else if ((r += o - u) > 0)
                            for (o + 1 == u && (c += "."); r--; c += "0");
                        return e.s < 0 && i ? "-" + c : c
                    }

                    function $(e, r) {
                        for (var t, n = 1, i = new G(e[0]); n < e.length; n++) {
                            if (!(t = new G(e[n])).s) {
                                i = t;
                                break
                            }
                            r.call(i, t) && (i = t)
                        }
                        return i
                    }

                    function q(e, r, t) {
                        for (var n = 1, i = r.length; !r[--i]; r.pop());
                        for (i = r[0]; i >= 10; i /= 10, n++);
                        return (t = n + 14 * t - 1) > T ? e.c = e.e = null : t < L ? e.c = [e.e = 0] : (e.e = t, e.c = r), e
                    }

                    function j(e, r, t, n) {
                        var i, o, s, l, f, p, g, w = e.c,
                            d = h;
                        if (w) {
                            e: {
                                for (i = 1, l = w[0]; l >= 10; l /= 10, i++);
                                if ((o = r - i) < 0) o += 14,
                                s = r,
                                g = (f = w[p = 0]) / d[i - s - 1] % 10 | 0;
                                else if ((p = u((o + 1) / 14)) >= w.length) {
                                    if (!n) break e;
                                    for (; w.length <= p; w.push(0));
                                    f = g = 0, i = 1, s = (o %= 14) - 14 + 1
                                } else {
                                    for (f = l = w[p], i = 1; l >= 10; l /= 10, i++);
                                    g = (s = (o %= 14) - 14 + i) < 0 ? 0 : f / d[i - s - 1] % 10 | 0
                                }
                                if (n = n || r < 0 || null != w[p + 1] || (s < 0 ? f : f % d[i - s - 1]), n = t < 4 ? (g || n) && (0 == t || t == (e.s < 0 ? 3 : 2)) : g > 5 || 5 == g && (4 == t || n || 6 == t && (o > 0 ? s > 0 ? f / d[i - s] : 0 : w[p - 1]) % 10 & 1 || t == (e.s < 0 ? 8 : 7)), r < 1 || !w[0]) return w.length = 0,
                                n ? (r -= e.e + 1, w[0] = d[(14 - r % 14) % 14], e.e = -r || 0) : w[0] = e.e = 0,
                                e;
                                if (0 == o ? (w.length = p, l = 1, p--) : (w.length = p + 1, l = d[14 - o], w[p] = s > 0 ? c(f / d[i - s] % d[s]) * l : 0), n)
                                    for (;;) {
                                        if (0 == p) {
                                            for (o = 1, s = w[0]; s >= 10; s /= 10, o++);
                                            for (s = w[0] += l, l = 1; s >= 10; s /= 10, l++);
                                            o != l && (e.e++, w[0] == a && (w[0] = 1));
                                            break
                                        }
                                        if (w[p] += l, w[p] != a) break;
                                        w[p--] = 0, l = 1
                                    }
                                for (o = w.length; 0 === w[--o]; w.pop());
                            }
                            e.e > T ? e.c = e.e = null : e.e < L && (e.c = [e.e = 0])
                        }
                        return e
                    }

                    function Q(e) {
                        var r, t = e.e;
                        return null === t ? e.toString() : (r = w(e.c), r = t <= R || t >= S ? v(r, t) : E(r, t, "0"), e.s < 0 ? "-" + r : r)
                    }
                    return G.clone = e, G.ROUND_UP = 0, G.ROUND_DOWN = 1, G.ROUND_CEIL = 2, G.ROUND_FLOOR = 3, G.ROUND_HALF_UP = 4, G.ROUND_HALF_DOWN = 5, G.ROUND_HALF_EVEN = 6, G.ROUND_HALF_CEIL = 7, G.ROUND_HALF_FLOOR = 8, G.EUCLID = 9, G.config = G.set = function(e) {
                        var r, t;
                        if (null != e) {
                            if ("object" != typeof e) throw Error(l + "Object expected: " + e);
                            if (e.hasOwnProperty(r = "DECIMAL_PLACES") && (m(t = e[r], 0, p, r), B = t), e.hasOwnProperty(r = "ROUNDING_MODE") && (m(t = e[r], 0, 8, r), I = t), e.hasOwnProperty(r = "EXPONENTIAL_AT") && ((t = e[r]) && t.pop ? (m(t[0], -p, 0, r), m(t[1], 0, p, r), R = t[0], S = t[1]) : (m(t, -p, p, r), R = -(S = t < 0 ? -t : t))), e.hasOwnProperty(r = "RANGE"))
                                if ((t = e[r]) && t.pop) m(t[0], -p, -1, r), m(t[1], 1, p, r), L = t[0], T = t[1];
                                else {
                                    if (m(t, -p, p, r), !t) throw Error(l + r + " cannot be zero: " + t);
                                    L = -(T = t < 0 ? -t : t)
                                } if (e.hasOwnProperty(r = "CRYPTO")) {
                                if ((t = e[r]) !== !!t) throw Error(l + r + " not true or false: " + t);
                                if (t) {
                                    if ("undefined" == typeof crypto || !crypto || !crypto.getRandomValues && !crypto.randomBytes) throw P = !t, Error(l + "crypto unavailable");
                                    P = t
                                } else P = t
                            }
                            if (e.hasOwnProperty(r = "MODULO_MODE") && (m(t = e[r], 0, 9, r), x = t), e.hasOwnProperty(r = "POW_PRECISION") && (m(t = e[r], 0, p, r), U = t), e.hasOwnProperty(r = "FORMAT")) {
                                if ("object" != typeof(t = e[r])) throw Error(l + r + " not an object: " + t);
                                k = t
                            }
                            if (e.hasOwnProperty(r = "ALPHABET")) {
                                if ("string" != typeof(t = e[r]) || /^.?$|[+\-.\s]|(.).*\1/.test(t)) throw Error(l + r + " invalid: " + t);
                                M = "0123456789" == t.slice(0, 10), F = t
                            }
                        }
                        return {
                            DECIMAL_PLACES: B,
                            ROUNDING_MODE: I,
                            EXPONENTIAL_AT: [R, S],
                            RANGE: [L, T],
                            CRYPTO: P,
                            MODULO_MODE: x,
                            POW_PRECISION: U,
                            FORMAT: k,
                            ALPHABET: F
                        }
                    }, G.isBigNumber = function(e) {
                        if (!e || !0 !== e._isBigNumber) return !1;
                        if (!G.DEBUG) return !0;
                        var r, t, n = e.c,
                            i = e.e,
                            o = e.s;
                        e: if ("[object Array]" == {}.toString.call(n)) {
                            if ((1 === o || -1 === o) && i >= -p && i <= p && i === c(i)) {
                                if (0 === n[0]) {
                                    if (0 === i && 1 === n.length) return !0;
                                    break e
                                }
                                if ((r = (i + 1) % 14) < 1 && (r += 14), String(n[0]).length == r) {
                                    for (r = 0; r < n.length; r++)
                                        if ((t = n[r]) < 0 || t >= a || t !== c(t)) break e;
                                    if (0 !== t) return !0
                                }
                            }
                        } else if (null === n && null === i && (null === o || 1 === o || -1 === o)) return !0;
                        throw Error(l + "Invalid BigNumber: " + e)
                    }, G.maximum = G.max = function() {
                        return $(arguments, A.lt)
                    }, G.minimum = G.min = function() {
                        return $(arguments, A.gt)
                    }, G.random = (o = 9007199254740992 * Math.random() & 2097151 ? function() {
                        return c(9007199254740992 * Math.random())
                    } : function() {
                        return 8388608 * (1073741824 * Math.random() | 0) + (8388608 * Math.random() | 0)
                    }, function(e) {
                        var r, t, n, i, s, f = 0,
                            a = [],
                            g = new G(D);
                        if (null == e ? e = B : m(e, 0, p), i = u(e / 14), P)
                            if (crypto.getRandomValues) {
                                for (r = crypto.getRandomValues(new Uint32Array(i *= 2)); f < i;)(s = 131072 * r[f] + (r[f + 1] >>> 11)) >= 9e15 ? (t = crypto.getRandomValues(new Uint32Array(2)), r[f] = t[0], r[f + 1] = t[1]) : (a.push(s % 1e14), f += 2);
                                f = i / 2
                            } else {
                                if (!crypto.randomBytes) throw P = !1, Error(l + "crypto unavailable");
                                for (r = crypto.randomBytes(i *= 7); f < i;)(s = 281474976710656 * (31 & r[f]) + 1099511627776 * r[f + 1] + 4294967296 * r[f + 2] + 16777216 * r[f + 3] + (r[f + 4] << 16) + (r[f + 5] << 8) + r[f + 6]) >= 9e15 ? crypto.randomBytes(7).copy(r, f) : (a.push(s % 1e14), f += 7);
                                f = i / 7
                            } if (!P)
                            for (; f < i;)(s = o()) < 9e15 && (a[f++] = s % 1e14);
                        for (e %= 14, (i = a[--f]) && e && (s = h[14 - e], a[f] = c(i / s) * s); 0 === a[f]; a.pop(), f--);
                        if (f < 0) a = [n = 0];
                        else {
                            for (n = -1; 0 === a[0]; a.splice(0, 1), n -= 14);
                            for (f = 1, s = a[0]; s >= 10; s /= 10, f++);
                            f < 14 && (n -= 14 - f)
                        }
                        return g.e = n, g.c = a, g
                    }), G.sum = function() {
                        for (var e = 1, r = arguments, t = new G(r[0]); e < r.length;) t = t.plus(r[e++]);
                        return t
                    }, n = function() {
                        function e(e, r, t, n) {
                            for (var i, o, s = [0], u = 0, c = e.length; u < c;) {
                                for (o = s.length; o--; s[o] *= r);
                                for (s[0] += n.indexOf(e.charAt(u++)), i = 0; i < s.length; i++) s[i] > t - 1 && (null == s[i + 1] && (s[i + 1] = 0), s[i + 1] += s[i] / t | 0, s[i] %= t)
                            }
                            return s.reverse()
                        }
                        return function(r, n, i, o, s) {
                            var u, c, l, f, a, h, p, g, d = r.indexOf("."),
                                m = B,
                                y = I;
                            for (d >= 0 && (f = U, U = 0, r = r.replace(".", ""), h = (g = new G(n)).pow(r.length - d), U = f, g.c = e(E(w(h.c), h.e, "0"), 10, i, "0123456789"), g.e = g.c.length), l = f = (p = e(r, n, i, s ? (u = F, "0123456789") : (u = "0123456789", F))).length; 0 == p[--f]; p.pop());
                            if (!p[0]) return u.charAt(0);
                            if (d < 0 ? --l : (h.c = p, h.e = l, h.s = o, p = (h = t(h, g, m, y, i)).c, a = h.r, l = h.e), d = p[c = l + m + 1], f = i / 2, a = a || c < 0 || null != p[c + 1], a = y < 4 ? (null != d || a) && (0 == y || y == (h.s < 0 ? 3 : 2)) : d > f || d == f && (4 == y || a || 6 == y && 1 & p[c - 1] || y == (h.s < 0 ? 8 : 7)), c < 1 || !p[0]) r = a ? E(u.charAt(1), -m, u.charAt(0)) : u.charAt(0);
                            else {
                                if (p.length = c, a)
                                    for (--i; ++p[--c] > i;) p[c] = 0, c || (++l, p = [1].concat(p));
                                for (f = p.length; !p[--f];);
                                for (d = 0, r = ""; d <= f; r += u.charAt(p[d++]));
                                r = E(r, l, u.charAt(0))
                            }
                            return r
                        }
                    }(), t = function() {
                        function e(e, r, t) {
                            var n, i, o, s, u = 0,
                                c = e.length,
                                l = r % 1e7,
                                f = r / 1e7 | 0;
                            for (e = e.slice(); c--;) u = ((i = l * (o = e[c] % 1e7) + (n = f * o + (s = e[c] / 1e7 | 0) * l) % 1e7 * 1e7 + u) / t | 0) + (n / 1e7 | 0) + f * s, e[c] = i % t;
                            return u && (e = [u].concat(e)), e
                        }

                        function r(e, r, t, n) {
                            var i, o;
                            if (t != n) o = t > n ? 1 : -1;
                            else
                                for (i = o = 0; i < t; i++)
                                    if (e[i] != r[i]) {
                                        o = e[i] > r[i] ? 1 : -1;
                                        break
                                    } return o
                        }

                        function t(e, r, t, n) {
                            for (var i = 0; t--;) e[t] -= i, i = e[t] < r[t] ? 1 : 0, e[t] = i * n + e[t] - r[t];
                            for (; !e[0] && e.length > 1; e.splice(0, 1));
                        }
                        return function(n, i, o, s, u) {
                            var l, f, h, p, w, d, m, y, v, E, b, N, _, O, C, A, D, B = n.s == i.s ? 1 : -1,
                                I = n.c,
                                R = i.c;
                            if (!(I && I[0] && R && R[0])) return new G(n.s && i.s && (I ? !R || I[0] != R[0] : R) ? I && 0 == I[0] || !R ? 0 * B : B / 0 : NaN);
                            for (v = (y = new G(B)).c = [], B = o + (f = n.e - i.e) + 1, u || (u = a, f = g(n.e / 14) - g(i.e / 14), B = B / 14 | 0), h = 0; R[h] == (I[h] || 0); h++);
                            if (R[h] > (I[h] || 0) && f--, B < 0) v.push(1), p = !0;
                            else {
                                for (O = I.length, A = R.length, h = 0, B += 2, (w = c(u / (R[0] + 1))) > 1 && (R = e(R, w, u), I = e(I, w, u), A = R.length, O = I.length), _ = A, b = (E = I.slice(0, A)).length; b < A; E[b++] = 0);
                                D = R.slice(), D = [0].concat(D), C = R[0], R[1] >= u / 2 && C++;
                                do {
                                    if (w = 0, (l = r(R, E, A, b)) < 0) {
                                        if (N = E[0], A != b && (N = N * u + (E[1] || 0)), (w = c(N / C)) > 1)
                                            for (w >= u && (w = u - 1), m = (d = e(R, w, u)).length, b = E.length; 1 == r(d, E, m, b);) w--, t(d, A < m ? D : R, m, u), m = d.length, l = 1;
                                        else 0 == w && (l = w = 1), m = (d = R.slice()).length;
                                        if (m < b && (d = [0].concat(d)), t(E, d, b, u), b = E.length, -1 == l)
                                            for (; r(R, E, A, b) < 1;) w++, t(E, A < b ? D : R, b, u), b = E.length
                                    } else 0 === l && (w++, E = [0]);
                                    v[h++] = w, E[0] ? E[b++] = I[_] || 0 : (E = [I[_]], b = 1)
                                } while ((_++ < O || null != E[0]) && B--);
                                p = null != E[0], v[0] || v.splice(0, 1)
                            }
                            if (u == a) {
                                for (h = 1, B = v[0]; B >= 10; B /= 10, h++);
                                j(y, o + (y.e = h + 14 * f - 1) + 1, s, p)
                            } else y.e = f, y.r = +p;
                            return y
                        }
                    }(), b = /^(-?)0([xbo])(?=\w[\w.]*$)/i, N = /^([^.]+)\.$/, _ = /^\.([^.]+)$/, O = /^-?(Infinity|NaN)$/, C = /^\s*\+(?=[\w.])|^\s+|\s+$/g, i = function(e, r, t, n) {
                        var i, o = t ? r : r.replace(C, "");
                        if (O.test(o)) e.s = isNaN(o) ? null : o < 0 ? -1 : 1;
                        else {
                            if (!t && (o = o.replace(b, (function(e, r, t) {
                                    return i = "x" == (t = t.toLowerCase()) ? 16 : "b" == t ? 2 : 8, n && n != i ? e : r
                                })), n && (i = n, o = o.replace(N, "$1").replace(_, "0.$1")), r != o)) return new G(o, i);
                            if (G.DEBUG) throw Error(l + "Not a" + (n ? " base " + n : "") + " number: " + r);
                            e.s = null
                        }
                        e.c = e.e = null
                    }, A.absoluteValue = A.abs = function() {
                        var e = new G(this);
                        return e.s < 0 && (e.s = 1), e
                    }, A.comparedTo = function(e, r) {
                        return d(this, new G(e, r))
                    }, A.decimalPlaces = A.dp = function(e, r) {
                        var t, n, i, o = this;
                        if (null != e) return m(e, 0, p), null == r ? r = I : m(r, 0, 8), j(new G(o), e + o.e + 1, r);
                        if (!(t = o.c)) return null;
                        if (n = 14 * ((i = t.length - 1) - g(this.e / 14)), i = t[i])
                            for (; i % 10 == 0; i /= 10, n--);
                        return n < 0 && (n = 0), n
                    }, A.dividedBy = A.div = function(e, r) {
                        return t(this, new G(e, r), B, I)
                    }, A.dividedToIntegerBy = A.idiv = function(e, r) {
                        return t(this, new G(e, r), 0, 1)
                    }, A.exponentiatedBy = A.pow = function(e, r) {
                        var t, n, i, o, s, f, a, h, p = this;
                        if ((e = new G(e)).c && !e.isInteger()) throw Error(l + "Exponent not an integer: " + Q(e));
                        if (null != r && (r = new G(r)), s = e.e > 14, !p.c || !p.c[0] || 1 == p.c[0] && !p.e && 1 == p.c.length || !e.c || !e.c[0]) return h = new G(Math.pow(+Q(p), s ? e.s * (2 - y(e)) : +Q(e))), r ? h.mod(r) : h;
                        if (f = e.s < 0, r) {
                            if (r.c ? !r.c[0] : !r.s) return new G(NaN);
                            (n = !f && p.isInteger() && r.isInteger()) && (p = p.mod(r))
                        } else {
                            if (e.e > 9 && (p.e > 0 || p.e < -1 || (0 == p.e ? p.c[0] > 1 || s && p.c[1] >= 24e7 : p.c[0] < 8e13 || s && p.c[0] <= 9999975e7))) return o = p.s < 0 && y(e) ? -0 : 0, p.e > -1 && (o = 1 / o), new G(f ? 1 / o : o);
                            U && (o = u(U / 14 + 2))
                        }
                        for (s ? (t = new G(.5), f && (e.s = 1), a = y(e)) : a = (i = Math.abs(+Q(e))) % 2, h = new G(D);;) {
                            if (a) {
                                if (!(h = h.times(p)).c) break;
                                o ? h.c.length > o && (h.c.length = o) : n && (h = h.mod(r))
                            }
                            if (i) {
                                if (0 === (i = c(i / 2))) break;
                                a = i % 2
                            } else if (j(e = e.times(t), e.e + 1, 1), e.e > 14) a = y(e);
                            else {
                                if (0 === (i = +Q(e))) break;
                                a = i % 2
                            }
                            p = p.times(p), o ? p.c && p.c.length > o && (p.c.length = o) : n && (p = p.mod(r))
                        }
                        return n ? h : (f && (h = D.div(h)), r ? h.mod(r) : o ? j(h, U, I, void 0) : h)
                    }, A.integerValue = function(e) {
                        var r = new G(this);
                        return null == e ? e = I : m(e, 0, 8), j(r, r.e + 1, e)
                    }, A.isEqualTo = A.eq = function(e, r) {
                        return 0 === d(this, new G(e, r))
                    }, A.isFinite = function() {
                        return !!this.c
                    }, A.isGreaterThan = A.gt = function(e, r) {
                        return d(this, new G(e, r)) > 0
                    }, A.isGreaterThanOrEqualTo = A.gte = function(e, r) {
                        return 1 === (r = d(this, new G(e, r))) || 0 === r
                    }, A.isInteger = function() {
                        return !!this.c && g(this.e / 14) > this.c.length - 2
                    }, A.isLessThan = A.lt = function(e, r) {
                        return d(this, new G(e, r)) < 0
                    }, A.isLessThanOrEqualTo = A.lte = function(e, r) {
                        return -1 === (r = d(this, new G(e, r))) || 0 === r
                    }, A.isNaN = function() {
                        return !this.s
                    }, A.isNegative = function() {
                        return this.s < 0
                    }, A.isPositive = function() {
                        return this.s > 0
                    }, A.isZero = function() {
                        return !!this.c && 0 == this.c[0]
                    }, A.minus = function(e, r) {
                        var t, n, i, o, s = this,
                            u = s.s;
                        if (r = (e = new G(e, r)).s, !u || !r) return new G(NaN);
                        if (u != r) return e.s = -r, s.plus(e);
                        var c = s.e / 14,
                            l = e.e / 14,
                            f = s.c,
                            h = e.c;
                        if (!c || !l) {
                            if (!f || !h) return f ? (e.s = -r, e) : new G(h ? s : NaN);
                            if (!f[0] || !h[0]) return h[0] ? (e.s = -r, e) : new G(f[0] ? s : 3 == I ? -0 : 0)
                        }
                        if (c = g(c), l = g(l), f = f.slice(), u = c - l) {
                            for ((o = u < 0) ? (u = -u, i = f) : (l = c, i = h), i.reverse(), r = u; r--; i.push(0));
                            i.reverse()
                        } else
                            for (n = (o = (u = f.length) < (r = h.length)) ? u : r, u = r = 0; r < n; r++)
                                if (f[r] != h[r]) {
                                    o = f[r] < h[r];
                                    break
                                } if (o && (i = f, f = h, h = i, e.s = -e.s), (r = (n = h.length) - (t = f.length)) > 0)
                            for (; r--; f[t++] = 0);
                        for (r = a - 1; n > u;) {
                            if (f[--n] < h[n]) {
                                for (t = n; t && !f[--t]; f[t] = r);
                                --f[t], f[n] += a
                            }
                            f[n] -= h[n]
                        }
                        for (; 0 == f[0]; f.splice(0, 1), --l);
                        return f[0] ? q(e, f, l) : (e.s = 3 == I ? -1 : 1, e.c = [e.e = 0], e)
                    }, A.modulo = A.mod = function(e, r) {
                        var n, i, o = this;
                        return e = new G(e, r), !o.c || !e.s || e.c && !e.c[0] ? new G(NaN) : !e.c || o.c && !o.c[0] ? new G(o) : (9 == x ? (i = e.s, e.s = 1, n = t(o, e, 0, 3), e.s = i, n.s *= i) : n = t(o, e, 0, x), (e = o.minus(n.times(e))).c[0] || 1 != x || (e.s = o.s), e)
                    }, A.multipliedBy = A.times = function(e, r) {
                        var t, n, i, o, s, u, c, l, f, h, p, w, d, m, y = this,
                            v = y.c,
                            E = (e = new G(e, r)).c;
                        if (!(v && E && v[0] && E[0])) return !y.s || !e.s || v && !v[0] && !E || E && !E[0] && !v ? e.c = e.e = e.s = null : (e.s *= y.s, v && E ? (e.c = [0], e.e = 0) : e.c = e.e = null), e;
                        for (n = g(y.e / 14) + g(e.e / 14), e.s *= y.s, (c = v.length) < (h = E.length) && (d = v, v = E, E = d, i = c, c = h, h = i), i = c + h, d = []; i--; d.push(0));
                        for (m = a, 1e7, i = h; --i >= 0;) {
                            for (t = 0, p = E[i] % 1e7, w = E[i] / 1e7 | 0, o = i + (s = c); o > i;) t = ((l = p * (l = v[--s] % 1e7) + (u = w * l + (f = v[s] / 1e7 | 0) * p) % 1e7 * 1e7 + d[o] + t) / m | 0) + (u / 1e7 | 0) + w * f, d[o--] = l % m;
                            d[o] = t
                        }
                        return t ? ++n : d.splice(0, 1), q(e, d, n)
                    }, A.negated = function() {
                        var e = new G(this);
                        return e.s = -e.s || null, e
                    }, A.plus = function(e, r) {
                        var t, n = this,
                            i = n.s;
                        if (r = (e = new G(e, r)).s, !i || !r) return new G(NaN);
                        if (i != r) return e.s = -r, n.minus(e);
                        var o = n.e / 14,
                            s = e.e / 14,
                            u = n.c,
                            c = e.c;
                        if (!o || !s) {
                            if (!u || !c) return new G(i / 0);
                            if (!u[0] || !c[0]) return c[0] ? e : new G(u[0] ? n : 0 * i)
                        }
                        if (o = g(o), s = g(s), u = u.slice(), i = o - s) {
                            for (i > 0 ? (s = o, t = c) : (i = -i, t = u), t.reverse(); i--; t.push(0));
                            t.reverse()
                        }
                        for ((i = u.length) - (r = c.length) < 0 && (t = c, c = u, u = t, r = i), i = 0; r;) i = (u[--r] = u[r] + c[r] + i) / a | 0, u[r] = a === u[r] ? 0 : u[r] % a;
                        return i && (u = [i].concat(u), ++s), q(e, u, s)
                    }, A.precision = A.sd = function(e, r) {
                        var t, n, i, o = this;
                        if (null != e && e !== !!e) return m(e, 1, p), null == r ? r = I : m(r, 0, 8), j(new G(o), e, r);
                        if (!(t = o.c)) return null;
                        if (n = 14 * (i = t.length - 1) + 1, i = t[i]) {
                            for (; i % 10 == 0; i /= 10, n--);
                            for (i = t[0]; i >= 10; i /= 10, n++);
                        }
                        return e && o.e + 1 > n && (n = o.e + 1), n
                    }, A.shiftedBy = function(e) {
                        return m(e, -9007199254740991, 9007199254740991), this.times("1e" + e)
                    }, A.squareRoot = A.sqrt = function() {
                        var e, r, n, i, o, s = this,
                            u = s.c,
                            c = s.s,
                            l = s.e,
                            f = B + 4,
                            a = new G("0.5");
                        if (1 !== c || !u || !u[0]) return new G(!c || c < 0 && (!u || u[0]) ? NaN : u ? s : 1 / 0);
                        if (0 == (c = Math.sqrt(+Q(s))) || c == 1 / 0 ? (((r = w(u)).length + l) % 2 == 0 && (r += "0"), c = Math.sqrt(+r), l = g((l + 1) / 2) - (l < 0 || l % 2), n = new G(r = c == 1 / 0 ? "5e" + l : (r = c.toExponential()).slice(0, r.indexOf("e") + 1) + l)) : n = new G(c + ""), n.c[0])
                            for ((c = (l = n.e) + f) < 3 && (c = 0);;)
                                if (o = n, n = a.times(o.plus(t(s, o, f, 1))), w(o.c).slice(0, c) === (r = w(n.c)).slice(0, c)) {
                                    if (n.e < l && --c, "9999" != (r = r.slice(c - 3, c + 1)) && (i || "4999" != r)) {
                                        +r && (+r.slice(1) || "5" != r.charAt(0)) || (j(n, n.e + B + 2, 1), e = !n.times(n).eq(s));
                                        break
                                    }
                                    if (!i && (j(o, o.e + B + 2, 0), o.times(o).eq(s))) {
                                        n = o;
                                        break
                                    }
                                    f += 4, c += 4, i = 1
                                } return j(n, n.e + B + 1, I, e)
                    }, A.toExponential = function(e, r) {
                        return null != e && (m(e, 0, p), e++), K(this, e, r, 1)
                    }, A.toFixed = function(e, r) {
                        return null != e && (m(e, 0, p), e = e + this.e + 1), K(this, e, r)
                    }, A.toFormat = function(e, r, t) {
                        var n, i = this;
                        if (null == t) null != e && r && "object" == typeof r ? (t = r, r = null) : e && "object" == typeof e ? (t = e, e = r = null) : t = k;
                        else if ("object" != typeof t) throw Error(l + "Argument not an object: " + t);
                        if (n = i.toFixed(e, r), i.c) {
                            var o, s = n.split("."),
                                u = +t.groupSize,
                                c = +t.secondaryGroupSize,
                                f = t.groupSeparator || "",
                                a = s[0],
                                h = s[1],
                                p = i.s < 0,
                                g = p ? a.slice(1) : a,
                                w = g.length;
                            if (c && (o = u, u = c, c = o, w -= o), u > 0 && w > 0) {
                                for (o = w % u || u, a = g.substr(0, o); o < w; o += u) a += f + g.substr(o, u);
                                c > 0 && (a += f + g.slice(o)), p && (a = "-" + a)
                            }
                            n = h ? a + (t.decimalSeparator || "") + ((c = +t.fractionGroupSize) ? h.replace(new RegExp("\\d{" + c + "}\\B", "g"), "$&" + (t.fractionGroupSeparator || "")) : h) : a
                        }
                        return (t.prefix || "") + n + (t.suffix || "")
                    }, A.toFraction = function(e) {
                        var r, n, i, o, s, u, c, f, a, p, g, d, m = this,
                            y = m.c;
                        if (null != e && (!(c = new G(e)).isInteger() && (c.c || 1 !== c.s) || c.lt(D))) throw Error(l + "Argument " + (c.isInteger() ? "out of range: " : "not an integer: ") + Q(c));
                        if (!y) return new G(m);
                        for (r = new G(D), a = n = new G(D), i = f = new G(D), d = w(y), s = r.e = d.length - m.e - 1, r.c[0] = h[(u = s % 14) < 0 ? 14 + u : u], e = !e || c.comparedTo(r) > 0 ? s > 0 ? r : a : c, u = T, T = 1 / 0, c = new G(d), f.c[0] = 0; p = t(c, r, 0, 1), 1 != (o = n.plus(p.times(i))).comparedTo(e);) n = i, i = o, a = f.plus(p.times(o = a)), f = o, r = c.minus(p.times(o = r)), c = o;
                        return o = t(e.minus(n), i, 0, 1), f = f.plus(o.times(a)), n = n.plus(o.times(i)), f.s = a.s = m.s, g = t(a, i, s *= 2, I).minus(m).abs().comparedTo(t(f, n, s, I).minus(m).abs()) < 1 ? [a, i] : [f, n], T = u, g
                    }, A.toNumber = function() {
                        return +Q(this)
                    }, A.toPrecision = function(e, r) {
                        return null != e && m(e, 1, p), K(this, e, r, 2)
                    }, A.toString = function(e) {
                        var r, t = this,
                            i = t.s,
                            o = t.e;
                        return null === o ? i ? (r = "Infinity", i < 0 && (r = "-" + r)) : r = "NaN" : (null == e ? r = o <= R || o >= S ? v(w(t.c), o) : E(w(t.c), o, "0") : 10 === e && M ? r = E(w((t = j(new G(t), B + o + 1, I)).c), t.e, "0") : (m(e, 2, F.length, "Base"), r = n(E(w(t.c), o, "0"), 10, e, i, !0)), i < 0 && t.c[0] && (r = "-" + r)), r
                    }, A.valueOf = A.toJSON = function() {
                        return Q(this)
                    }, A._isBigNumber = !0, null != r && G.set(r), G
                }()).default = o.BigNumber = o, void 0 === (n = function() {
                    return o
                }.call(r, t, r, e)) || (e.exports = n)
            }()
        },
        2327: function(e, r, t) {
            "use strict";
            t.d(r, "a", (function() {
                return BadEntityIdError
            }));
            class BadEntityIdError extends Error {
                constructor(e, r, t, n, i) {
                    super(`Entity ID ${e.toString()}.${r.toString()}.${t.toString()}-${n} was incorrect.`), this.name = "BadEntityIdException", this.shard = e, this.realm = r, this.num = t, this.presentChecksum = n, this.expectedChecksum = i
                }
            }
        },
        44: function(e, r, t) {
            "use strict";
            const n = new class Cache {
                constructor() {
                    this._timeDrift = 0, this._contractId = null, this._keyList = null, this._thresholdKey = null, this._publicKeyED25519 = null, this._publicKeyECDSA = null, this._privateKeyConstructor = null, this._accountIdConstructor = null, this._delegateContractId = null, this._evmAddress = null, this._ethereumTransactionDataLegacyFromBytes = null, this._ethereumTransactionDataEip1559FromBytes = null, this._transactionReceiptQueryConstructor = null, this._transactionRecordQueryConstructor = null
                }
                setTimeDrift(e) {
                    this._timeDrift = e
                }
                get timeDrift() {
                    if (null == this._timeDrift) throw new Error("Cache.timeDrift was used before it was set");
                    return this._timeDrift
                }
                setContractId(e) {
                    this._contractId = e
                }
                get contractId() {
                    if (null == this._contractId) throw new Error("Cache.contractId was used before it was set");
                    return this._contractId
                }
                setKeyList(e) {
                    this._keyList = e
                }
                get keyList() {
                    if (null == this._keyList) throw new Error("Cache.keyList was used before it was set");
                    return this._keyList
                }
                setThresholdKey(e) {
                    this._thresholdKey = e
                }
                get thresholdKey() {
                    if (null == this._thresholdKey) throw new Error("Cache.thresholdKey was used before it was set");
                    return this._thresholdKey
                }
                setPublicKeyED25519(e) {
                    this._publicKeyED25519 = e
                }
                get publicKeyED25519() {
                    if (null == this._publicKeyED25519) throw new Error("Cache.publicKeyED25519 was used before it was set");
                    return this._publicKeyED25519
                }
                setPublicKeyECDSA(e) {
                    this._publicKeyECDSA = e
                }
                get publicKeyECDSA() {
                    if (null == this._publicKeyECDSA) throw new Error("Cache.publicKeyECDSA was used before it was set");
                    return this._publicKeyECDSA
                }
                setPrivateKeyConstructor(e) {
                    this._privateKeyConstructor = e
                }
                get privateKeyConstructor() {
                    if (null == this._privateKeyConstructor) throw new Error("Cache.privateKeyConstructor was used before it was set");
                    return this._privateKeyConstructor
                }
                setAccountIdConstructor(e) {
                    this._accountIdConstructor = e
                }
                get accountIdConstructor() {
                    if (null == this._accountIdConstructor) throw new Error("Cache.accountIdConstructor was used before it was set");
                    return this._accountIdConstructor
                }
                setDelegateContractId(e) {
                    this._delegateContractId = e
                }
                get delegateContractId() {
                    if (null == this._delegateContractId) throw new Error("Cache.delegateContractId was used before it was set");
                    return this._delegateContractId
                }
                setEvmAddress(e) {
                    this._evmAddress = e
                }
                get evmAddress() {
                    if (null == this._evmAddress) throw new Error("Cache.evmAddress was used before it was set");
                    return this._evmAddress
                }
                setEthereumTransactionDataLegacyFromBytes(e) {
                    this._ethereumTransactionDataLegacyFromBytes = e
                }
                get ethereumTransactionDataLegacyFromBytes() {
                    if (null == this._ethereumTransactionDataLegacyFromBytes) throw new Error("Cache.ethereumTransactionDataLegacyFromBytes was used before it was set");
                    return this._ethereumTransactionDataLegacyFromBytes
                }
                setEthereumTransactionDataEip1559FromBytes(e) {
                    this._ethereumTransactionDataEip1559FromBytes = e
                }
                get ethereumTransactionDataEip1559FromBytes() {
                    if (null == this._ethereumTransactionDataEip1559FromBytes) throw new Error("Cache.ethereumTransactionDataEip1559FromBytes was used before it was set");
                    return this._ethereumTransactionDataEip1559FromBytes
                }
                setTransactionReceiptQueryConstructor(e) {
                    this._transactionReceiptQueryConstructor = e
                }
                get transactionReceiptQueryConstructor() {
                    if (null == this._transactionReceiptQueryConstructor) throw new Error("Cache.transactionReceiptQueryConstructor was used before it was set");
                    return this._transactionReceiptQueryConstructor
                }
                setTransactionRecordQueryConstructor(e) {
                    this._transactionRecordQueryConstructor = e
                }
                get transactionRecordQueryConstructor() {
                    if (null == this._transactionRecordQueryConstructor) throw new Error("Cache.transactionRecordQueryConstructor was used before it was set");
                    return this._transactionRecordQueryConstructor
                }
                setAddressBookQueryConstructor(e) {
                    this._addressBookQueryConstructor = e
                }
                get addressBookQueryConstructor() {
                    if (null == this._addressBookQueryConstructor) throw new Error("Cache.addressBookQueryConstructor was used before it was set");
                    return this._addressBookQueryConstructor
                }
            };
            r.a = n
        }
    }
]);