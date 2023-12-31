(window.webpackJsonp = window.webpackJsonp || []).push([
    [307], {
        5844: function(t, e, i) {
            "use strict";
            const r = i(72),
                n = i(932),
                o = i(141),
                s = i(85),
                u = i(5624),
                h = i(9190),
                a = i(9192),
                l = s.eddsa("ed25519"),
                f = s.ec("secp256k1"),
                {
                    hexToBytes: c
                } = a,
                {
                    bytesToHex: d
                } = a;

            function m(t) {
                return o.sha512().update(t).digest().slice(0, 32)
            }
            const p = {
                    deriveKeypair(t, e) {
                        const i = "00" + h.derivePrivateKey(t, e).toString(16, 64).toUpperCase(),
                            r = d(f.keyFromPrivate(i.slice(2)).getPublic().encodeCompressed());
                        return {
                            privateKey: i,
                            publicKey: r
                        }
                    },
                    sign: (t, e) => d(f.sign(m(t), c(e), {
                        canonical: !0
                    }).toDER()),
                    verify: (t, e, i) => f.verify(m(t), e, c(i))
                },
                g = {
                    deriveKeypair(t) {
                        const e = m(t);
                        return {
                            privateKey: "ED" + d(e),
                            publicKey: "ED" + d(l.keyFromSecret(e).pubBytes())
                        }
                    },
                    sign: (t, e) => (r(Array.isArray(t), "message must be array of octets"), d(l.sign(t, c(e).slice(1)).toBytes())),
                    verify: (t, e, i) => l.verify(t, c(e), c(i).slice(1))
                };

            function v(t) {
                return {
                    "ecdsa-secp256k1": p,
                    ed25519: g
                } [t]
            }

            function M(t) {
                const e = c(t);
                return 33 === e.length && 237 === e[0] ? "ed25519" : "ecdsa-secp256k1"
            }

            function w(t) {
                return u.encodeAccountID(a.computePublicKeyHash(t))
            }
            const {
                decodeSeed: y
            } = u;
            t.exports = {
                generateSeed: function(t = {}) {
                    r(!t.entropy || t.entropy.length >= 16, "entropy too short");
                    const e = t.entropy ? t.entropy.slice(0, 16) : n(16),
                        i = "ed25519" === t.algorithm ? "ed25519" : "secp256k1";
                    return u.encodeSeed(e, i)
                },
                deriveKeypair: function(t, e) {
                    const i = u.decodeSeed(t),
                        r = v("ed25519" === i.type ? "ed25519" : "ecdsa-secp256k1"),
                        n = r.deriveKeypair(i.bytes, e),
                        o = m("This test message should verify."),
                        s = r.sign(o, n.privateKey);
                    if (!0 !== r.verify(o, s, n.publicKey)) throw new Error("derived keypair did not generate verifiable signature");
                    return n
                },
                sign: function(t, e) {
                    return v(M(e)).sign(c(t), e)
                },
                verify: function(t, e, i) {
                    return v(M(i)).verify(c(t), e, i)
                },
                deriveAddress: function(t) {
                    return w(Buffer.from(c(t)))
                },
                deriveNodeAddress: function(t) {
                    const e = u.decodeNodePublic(t);
                    return w(h.accountPublicFromPublicGenerator(e))
                },
                decodeSeed: y
            }
        },
        6043: function(t, e, i) {
            var r;
            ! function(n) {
                "use strict";
                var o, s = /^-?(?:\d+(?:\.\d*)?|\.\d+)(?:e[+-]?\d+)?$/i,
                    u = Math.ceil,
                    h = Math.floor,
                    a = "[BigNumber Error] ",
                    l = a + "Number primitive has more than 15 significant digits: ",
                    f = 1e14,
                    c = [1, 10, 100, 1e3, 1e4, 1e5, 1e6, 1e7, 1e8, 1e9, 1e10, 1e11, 1e12, 1e13],
                    d = 1e9;

                function m(t) {
                    var e = 0 | t;
                    return t > 0 || t === e ? e : e - 1
                }

                function p(t) {
                    for (var e, i, r = 1, n = t.length, o = t[0] + ""; r < n;) {
                        for (i = 14 - (e = t[r++] + "").length; i--; e = "0" + e);
                        o += e
                    }
                    for (n = o.length; 48 === o.charCodeAt(--n););
                    return o.slice(0, n + 1 || 1)
                }

                function g(t, e) {
                    var i, r, n = t.c,
                        o = e.c,
                        s = t.s,
                        u = e.s,
                        h = t.e,
                        a = e.e;
                    if (!s || !u) return null;
                    if (i = n && !n[0], r = o && !o[0], i || r) return i ? r ? 0 : -u : s;
                    if (s != u) return s;
                    if (i = s < 0, r = h == a, !n || !o) return r ? 0 : !n ^ i ? 1 : -1;
                    if (!r) return h > a ^ i ? 1 : -1;
                    for (u = (h = n.length) < (a = o.length) ? h : a, s = 0; s < u; s++)
                        if (n[s] != o[s]) return n[s] > o[s] ^ i ? 1 : -1;
                    return h == a ? 0 : h > a ^ i ? 1 : -1
                }

                function v(t, e, i, r) {
                    if (t < e || t > i || t !== h(t)) throw Error(a + (r || "Argument") + ("number" == typeof t ? t < e || t > i ? " out of range: " : " not an integer: " : " not a primitive number: ") + String(t))
                }

                function M(t) {
                    var e = t.c.length - 1;
                    return m(t.e / 14) == e && t.c[e] % 2 != 0
                }

                function w(t, e) {
                    return (t.length > 1 ? t.charAt(0) + "." + t.slice(1) : t) + (e < 0 ? "e" : "e+") + e
                }

                function y(t, e, i) {
                    var r, n;
                    if (e < 0) {
                        for (n = i + "."; ++e; n += i);
                        t = n + t
                    } else if (++e > (r = t.length)) {
                        for (n = i, e -= r; --e; n += i);
                        t += n
                    } else e < r && (t = t.slice(0, e) + "." + t.slice(e));
                    return t
                }(o = function t(e) {
                    var i, r, n, o, b, _, A, N, B, S = U.prototype = {
                            constructor: U,
                            toString: null,
                            valueOf: null
                        },
                        k = new U(1),
                        x = 20,
                        E = 4,
                        O = -7,
                        F = 21,
                        P = -1e7,
                        T = 1e7,
                        R = !1,
                        L = 1,
                        C = 0,
                        I = {
                            prefix: "",
                            groupSize: 3,
                            secondaryGroupSize: 0,
                            groupSeparator: ",",
                            decimalSeparator: ".",
                            fractionGroupSize: 0,
                            fractionGroupSeparator: " ",
                            suffix: ""
                        },
                        D = "0123456789abcdefghijklmnopqrstuvwxyz",
                        q = !0;

                    function U(t, e) {
                        var i, o, u, a, f, c, d, m, p = this;
                        if (!(p instanceof U)) return new U(t, e);
                        if (null == e) {
                            if (t && !0 === t._isBigNumber) return p.s = t.s, void(!t.c || t.e > T ? p.c = p.e = null : t.e < P ? p.c = [p.e = 0] : (p.e = t.e, p.c = t.c.slice()));
                            if ((c = "number" == typeof t) && 0 * t == 0) {
                                if (p.s = 1 / t < 0 ? (t = -t, -1) : 1, t === ~~t) {
                                    for (a = 0, f = t; f >= 10; f /= 10, a++);
                                    return void(a > T ? p.c = p.e = null : (p.e = a, p.c = [t]))
                                }
                                m = String(t)
                            } else {
                                if (!s.test(m = String(t))) return n(p, m, c);
                                p.s = 45 == m.charCodeAt(0) ? (m = m.slice(1), -1) : 1
                            }(a = m.indexOf(".")) > -1 && (m = m.replace(".", "")), (f = m.search(/e/i)) > 0 ? (a < 0 && (a = f), a += +m.slice(f + 1), m = m.substring(0, f)) : a < 0 && (a = m.length)
                        } else {
                            if (v(e, 2, D.length, "Base"), 10 == e && q) return z(p = new U(t), x + p.e + 1, E);
                            if (m = String(t), c = "number" == typeof t) {
                                if (0 * t != 0) return n(p, m, c, e);
                                if (p.s = 1 / t < 0 ? (m = m.slice(1), -1) : 1, U.DEBUG && m.replace(/^0\.0*|\./, "").length > 15) throw Error(l + t)
                            } else p.s = 45 === m.charCodeAt(0) ? (m = m.slice(1), -1) : 1;
                            for (i = D.slice(0, e), a = f = 0, d = m.length; f < d; f++)
                                if (i.indexOf(o = m.charAt(f)) < 0) {
                                    if ("." == o) {
                                        if (f > a) {
                                            a = d;
                                            continue
                                        }
                                    } else if (!u && (m == m.toUpperCase() && (m = m.toLowerCase()) || m == m.toLowerCase() && (m = m.toUpperCase()))) {
                                        u = !0, f = -1, a = 0;
                                        continue
                                    }
                                    return n(p, String(t), c, e)
                                } c = !1, (a = (m = r(m, e, 10, p.s)).indexOf(".")) > -1 ? m = m.replace(".", "") : a = m.length
                        }
                        for (f = 0; 48 === m.charCodeAt(f); f++);
                        for (d = m.length; 48 === m.charCodeAt(--d););
                        if (m = m.slice(f, ++d)) {
                            if (d -= f, c && U.DEBUG && d > 15 && (t > 9007199254740991 || t !== h(t))) throw Error(l + p.s * t);
                            if ((a = a - f - 1) > T) p.c = p.e = null;
                            else if (a < P) p.c = [p.e = 0];
                            else {
                                if (p.e = a, p.c = [], f = (a + 1) % 14, a < 0 && (f += 14), f < d) {
                                    for (f && p.c.push(+m.slice(0, f)), d -= 14; f < d;) p.c.push(+m.slice(f, f += 14));
                                    f = 14 - (m = m.slice(f)).length
                                } else f -= d;
                                for (; f--; m += "0");
                                p.c.push(+m)
                            }
                        } else p.c = [p.e = 0]
                    }

                    function Z(t, e, i, r) {
                        var n, o, s, u, h;
                        if (null == i ? i = E : v(i, 0, 8), !t.c) return t.toString();
                        if (n = t.c[0], s = t.e, null == e) h = p(t.c), h = 1 == r || 2 == r && (s <= O || s >= F) ? w(h, s) : y(h, s, "0");
                        else if (o = (t = z(new U(t), e, i)).e, u = (h = p(t.c)).length, 1 == r || 2 == r && (e <= o || o <= O)) {
                            for (; u < e; h += "0", u++);
                            h = w(h, o)
                        } else if (e -= s, h = y(h, o, "0"), o + 1 > u) {
                            if (--e > 0)
                                for (h += "."; e--; h += "0");
                        } else if ((e += o - u) > 0)
                            for (o + 1 == u && (h += "."); e--; h += "0");
                        return t.s < 0 && n ? "-" + h : h
                    }

                    function j(t, e) {
                        for (var i, r = 1, n = new U(t[0]); r < t.length; r++) {
                            if (!(i = new U(t[r])).s) {
                                n = i;
                                break
                            }
                            e.call(n, i) && (n = i)
                        }
                        return n
                    }

                    function G(t, e, i) {
                        for (var r = 1, n = e.length; !e[--n]; e.pop());
                        for (n = e[0]; n >= 10; n /= 10, r++);
                        return (i = r + 14 * i - 1) > T ? t.c = t.e = null : i < P ? t.c = [t.e = 0] : (t.e = i, t.c = e), t
                    }

                    function z(t, e, i, r) {
                        var n, o, s, a, l, d, m, p = t.c,
                            g = c;
                        if (p) {
                            t: {
                                for (n = 1, a = p[0]; a >= 10; a /= 10, n++);
                                if ((o = e - n) < 0) o += 14,
                                s = e,
                                m = (l = p[d = 0]) / g[n - s - 1] % 10 | 0;
                                else if ((d = u((o + 1) / 14)) >= p.length) {
                                    if (!r) break t;
                                    for (; p.length <= d; p.push(0));
                                    l = m = 0, n = 1, s = (o %= 14) - 14 + 1
                                } else {
                                    for (l = a = p[d], n = 1; a >= 10; a /= 10, n++);
                                    m = (s = (o %= 14) - 14 + n) < 0 ? 0 : l / g[n - s - 1] % 10 | 0
                                }
                                if (r = r || e < 0 || null != p[d + 1] || (s < 0 ? l : l % g[n - s - 1]), r = i < 4 ? (m || r) && (0 == i || i == (t.s < 0 ? 3 : 2)) : m > 5 || 5 == m && (4 == i || r || 6 == i && (o > 0 ? s > 0 ? l / g[n - s] : 0 : p[d - 1]) % 10 & 1 || i == (t.s < 0 ? 8 : 7)), e < 1 || !p[0]) return p.length = 0,
                                r ? (e -= t.e + 1, p[0] = g[(14 - e % 14) % 14], t.e = -e || 0) : p[0] = t.e = 0,
                                t;
                                if (0 == o ? (p.length = d, a = 1, d--) : (p.length = d + 1, a = g[14 - o], p[d] = s > 0 ? h(l / g[n - s] % g[s]) * a : 0), r)
                                    for (;;) {
                                        if (0 == d) {
                                            for (o = 1, s = p[0]; s >= 10; s /= 10, o++);
                                            for (s = p[0] += a, a = 1; s >= 10; s /= 10, a++);
                                            o != a && (t.e++, p[0] == f && (p[0] = 1));
                                            break
                                        }
                                        if (p[d] += a, p[d] != f) break;
                                        p[d--] = 0, a = 1
                                    }
                                for (o = p.length; 0 === p[--o]; p.pop());
                            }
                            t.e > T ? t.c = t.e = null : t.e < P && (t.c = [t.e = 0])
                        }
                        return t
                    }

                    function K(t) {
                        var e, i = t.e;
                        return null === i ? t.toString() : (e = p(t.c), e = i <= O || i >= F ? w(e, i) : y(e, i, "0"), t.s < 0 ? "-" + e : e)
                    }
                    return U.clone = t, U.ROUND_UP = 0, U.ROUND_DOWN = 1, U.ROUND_CEIL = 2, U.ROUND_FLOOR = 3, U.ROUND_HALF_UP = 4, U.ROUND_HALF_DOWN = 5, U.ROUND_HALF_EVEN = 6, U.ROUND_HALF_CEIL = 7, U.ROUND_HALF_FLOOR = 8, U.EUCLID = 9, U.config = U.set = function(t) {
                        var e, i;
                        if (null != t) {
                            if ("object" != typeof t) throw Error(a + "Object expected: " + t);
                            if (t.hasOwnProperty(e = "DECIMAL_PLACES") && (v(i = t[e], 0, d, e), x = i), t.hasOwnProperty(e = "ROUNDING_MODE") && (v(i = t[e], 0, 8, e), E = i), t.hasOwnProperty(e = "EXPONENTIAL_AT") && ((i = t[e]) && i.pop ? (v(i[0], -d, 0, e), v(i[1], 0, d, e), O = i[0], F = i[1]) : (v(i, -d, d, e), O = -(F = i < 0 ? -i : i))), t.hasOwnProperty(e = "RANGE"))
                                if ((i = t[e]) && i.pop) v(i[0], -d, -1, e), v(i[1], 1, d, e), P = i[0], T = i[1];
                                else {
                                    if (v(i, -d, d, e), !i) throw Error(a + e + " cannot be zero: " + i);
                                    P = -(T = i < 0 ? -i : i)
                                } if (t.hasOwnProperty(e = "CRYPTO")) {
                                if ((i = t[e]) !== !!i) throw Error(a + e + " not true or false: " + i);
                                if (i) {
                                    if ("undefined" == typeof crypto || !crypto || !crypto.getRandomValues && !crypto.randomBytes) throw R = !i, Error(a + "crypto unavailable");
                                    R = i
                                } else R = i
                            }
                            if (t.hasOwnProperty(e = "MODULO_MODE") && (v(i = t[e], 0, 9, e), L = i), t.hasOwnProperty(e = "POW_PRECISION") && (v(i = t[e], 0, d, e), C = i), t.hasOwnProperty(e = "FORMAT")) {
                                if ("object" != typeof(i = t[e])) throw Error(a + e + " not an object: " + i);
                                I = i
                            }
                            if (t.hasOwnProperty(e = "ALPHABET")) {
                                if ("string" != typeof(i = t[e]) || /^.?$|[+\-.\s]|(.).*\1/.test(i)) throw Error(a + e + " invalid: " + i);
                                q = "0123456789" == i.slice(0, 10), D = i
                            }
                        }
                        return {
                            DECIMAL_PLACES: x,
                            ROUNDING_MODE: E,
                            EXPONENTIAL_AT: [O, F],
                            RANGE: [P, T],
                            CRYPTO: R,
                            MODULO_MODE: L,
                            POW_PRECISION: C,
                            FORMAT: I,
                            ALPHABET: D
                        }
                    }, U.isBigNumber = function(t) {
                        if (!t || !0 !== t._isBigNumber) return !1;
                        if (!U.DEBUG) return !0;
                        var e, i, r = t.c,
                            n = t.e,
                            o = t.s;
                        t: if ("[object Array]" == {}.toString.call(r)) {
                            if ((1 === o || -1 === o) && n >= -d && n <= d && n === h(n)) {
                                if (0 === r[0]) {
                                    if (0 === n && 1 === r.length) return !0;
                                    break t
                                }
                                if ((e = (n + 1) % 14) < 1 && (e += 14), String(r[0]).length == e) {
                                    for (e = 0; e < r.length; e++)
                                        if ((i = r[e]) < 0 || i >= f || i !== h(i)) break t;
                                    if (0 !== i) return !0
                                }
                            }
                        } else if (null === r && null === n && (null === o || 1 === o || -1 === o)) return !0;
                        throw Error(a + "Invalid BigNumber: " + t)
                    }, U.maximum = U.max = function() {
                        return j(arguments, S.lt)
                    }, U.minimum = U.min = function() {
                        return j(arguments, S.gt)
                    }, U.random = (o = 9007199254740992 * Math.random() & 2097151 ? function() {
                        return h(9007199254740992 * Math.random())
                    } : function() {
                        return 8388608 * (1073741824 * Math.random() | 0) + (8388608 * Math.random() | 0)
                    }, function(t) {
                        var e, i, r, n, s, l = 0,
                            f = [],
                            m = new U(k);
                        if (null == t ? t = x : v(t, 0, d), n = u(t / 14), R)
                            if (crypto.getRandomValues) {
                                for (e = crypto.getRandomValues(new Uint32Array(n *= 2)); l < n;)(s = 131072 * e[l] + (e[l + 1] >>> 11)) >= 9e15 ? (i = crypto.getRandomValues(new Uint32Array(2)), e[l] = i[0], e[l + 1] = i[1]) : (f.push(s % 1e14), l += 2);
                                l = n / 2
                            } else {
                                if (!crypto.randomBytes) throw R = !1, Error(a + "crypto unavailable");
                                for (e = crypto.randomBytes(n *= 7); l < n;)(s = 281474976710656 * (31 & e[l]) + 1099511627776 * e[l + 1] + 4294967296 * e[l + 2] + 16777216 * e[l + 3] + (e[l + 4] << 16) + (e[l + 5] << 8) + e[l + 6]) >= 9e15 ? crypto.randomBytes(7).copy(e, l) : (f.push(s % 1e14), l += 7);
                                l = n / 7
                            } if (!R)
                            for (; l < n;)(s = o()) < 9e15 && (f[l++] = s % 1e14);
                        for (t %= 14, (n = f[--l]) && t && (s = c[14 - t], f[l] = h(n / s) * s); 0 === f[l]; f.pop(), l--);
                        if (l < 0) f = [r = 0];
                        else {
                            for (r = -1; 0 === f[0]; f.splice(0, 1), r -= 14);
                            for (l = 1, s = f[0]; s >= 10; s /= 10, l++);
                            l < 14 && (r -= 14 - l)
                        }
                        return m.e = r, m.c = f, m
                    }), U.sum = function() {
                        for (var t = 1, e = arguments, i = new U(e[0]); t < e.length;) i = i.plus(e[t++]);
                        return i
                    }, r = function() {
                        function t(t, e, i, r) {
                            for (var n, o, s = [0], u = 0, h = t.length; u < h;) {
                                for (o = s.length; o--; s[o] *= e);
                                for (s[0] += r.indexOf(t.charAt(u++)), n = 0; n < s.length; n++) s[n] > i - 1 && (null == s[n + 1] && (s[n + 1] = 0), s[n + 1] += s[n] / i | 0, s[n] %= i)
                            }
                            return s.reverse()
                        }
                        return function(e, r, n, o, s) {
                            var u, h, a, l, f, c, d, m, g = e.indexOf("."),
                                v = x,
                                M = E;
                            for (g >= 0 && (l = C, C = 0, e = e.replace(".", ""), c = (m = new U(r)).pow(e.length - g), C = l, m.c = t(y(p(c.c), c.e, "0"), 10, n, "0123456789"), m.e = m.c.length), a = l = (d = t(e, r, n, s ? (u = D, "0123456789") : (u = "0123456789", D))).length; 0 == d[--l]; d.pop());
                            if (!d[0]) return u.charAt(0);
                            if (g < 0 ? --a : (c.c = d, c.e = a, c.s = o, d = (c = i(c, m, v, M, n)).c, f = c.r, a = c.e), g = d[h = a + v + 1], l = n / 2, f = f || h < 0 || null != d[h + 1], f = M < 4 ? (null != g || f) && (0 == M || M == (c.s < 0 ? 3 : 2)) : g > l || g == l && (4 == M || f || 6 == M && 1 & d[h - 1] || M == (c.s < 0 ? 8 : 7)), h < 1 || !d[0]) e = f ? y(u.charAt(1), -v, u.charAt(0)) : u.charAt(0);
                            else {
                                if (d.length = h, f)
                                    for (--n; ++d[--h] > n;) d[h] = 0, h || (++a, d = [1].concat(d));
                                for (l = d.length; !d[--l];);
                                for (g = 0, e = ""; g <= l; e += u.charAt(d[g++]));
                                e = y(e, a, u.charAt(0))
                            }
                            return e
                        }
                    }(), i = function() {
                        function t(t, e, i) {
                            var r, n, o, s, u = 0,
                                h = t.length,
                                a = e % 1e7,
                                l = e / 1e7 | 0;
                            for (t = t.slice(); h--;) u = ((n = a * (o = t[h] % 1e7) + (r = l * o + (s = t[h] / 1e7 | 0) * a) % 1e7 * 1e7 + u) / i | 0) + (r / 1e7 | 0) + l * s, t[h] = n % i;
                            return u && (t = [u].concat(t)), t
                        }

                        function e(t, e, i, r) {
                            var n, o;
                            if (i != r) o = i > r ? 1 : -1;
                            else
                                for (n = o = 0; n < i; n++)
                                    if (t[n] != e[n]) {
                                        o = t[n] > e[n] ? 1 : -1;
                                        break
                                    } return o
                        }

                        function i(t, e, i, r) {
                            for (var n = 0; i--;) t[i] -= n, n = t[i] < e[i] ? 1 : 0, t[i] = n * r + t[i] - e[i];
                            for (; !t[0] && t.length > 1; t.splice(0, 1));
                        }
                        return function(r, n, o, s, u) {
                            var a, l, c, d, p, g, v, M, w, y, b, _, A, N, B, S, k, x = r.s == n.s ? 1 : -1,
                                E = r.c,
                                O = n.c;
                            if (!(E && E[0] && O && O[0])) return new U(r.s && n.s && (E ? !O || E[0] != O[0] : O) ? E && 0 == E[0] || !O ? 0 * x : x / 0 : NaN);
                            for (w = (M = new U(x)).c = [], x = o + (l = r.e - n.e) + 1, u || (u = f, l = m(r.e / 14) - m(n.e / 14), x = x / 14 | 0), c = 0; O[c] == (E[c] || 0); c++);
                            if (O[c] > (E[c] || 0) && l--, x < 0) w.push(1), d = !0;
                            else {
                                for (N = E.length, S = O.length, c = 0, x += 2, (p = h(u / (O[0] + 1))) > 1 && (O = t(O, p, u), E = t(E, p, u), S = O.length, N = E.length), A = S, b = (y = E.slice(0, S)).length; b < S; y[b++] = 0);
                                k = O.slice(), k = [0].concat(k), B = O[0], O[1] >= u / 2 && B++;
                                do {
                                    if (p = 0, (a = e(O, y, S, b)) < 0) {
                                        if (_ = y[0], S != b && (_ = _ * u + (y[1] || 0)), (p = h(_ / B)) > 1)
                                            for (p >= u && (p = u - 1), v = (g = t(O, p, u)).length, b = y.length; 1 == e(g, y, v, b);) p--, i(g, S < v ? k : O, v, u), v = g.length, a = 1;
                                        else 0 == p && (a = p = 1), v = (g = O.slice()).length;
                                        if (v < b && (g = [0].concat(g)), i(y, g, b, u), b = y.length, -1 == a)
                                            for (; e(O, y, S, b) < 1;) p++, i(y, S < b ? k : O, b, u), b = y.length
                                    } else 0 === a && (p++, y = [0]);
                                    w[c++] = p, y[0] ? y[b++] = E[A] || 0 : (y = [E[A]], b = 1)
                                } while ((A++ < N || null != y[0]) && x--);
                                d = null != y[0], w[0] || w.splice(0, 1)
                            }
                            if (u == f) {
                                for (c = 1, x = w[0]; x >= 10; x /= 10, c++);
                                z(M, o + (M.e = c + 14 * l - 1) + 1, s, d)
                            } else M.e = l, M.r = +d;
                            return M
                        }
                    }(), b = /^(-?)0([xbo])(?=\w[\w.]*$)/i, _ = /^([^.]+)\.$/, A = /^\.([^.]+)$/, N = /^-?(Infinity|NaN)$/, B = /^\s*\+(?=[\w.])|^\s+|\s+$/g, n = function(t, e, i, r) {
                        var n, o = i ? e : e.replace(B, "");
                        if (N.test(o)) t.s = isNaN(o) ? null : o < 0 ? -1 : 1;
                        else {
                            if (!i && (o = o.replace(b, (function(t, e, i) {
                                    return n = "x" == (i = i.toLowerCase()) ? 16 : "b" == i ? 2 : 8, r && r != n ? t : e
                                })), r && (n = r, o = o.replace(_, "$1").replace(A, "0.$1")), e != o)) return new U(o, n);
                            if (U.DEBUG) throw Error(a + "Not a" + (r ? " base " + r : "") + " number: " + e);
                            t.s = null
                        }
                        t.c = t.e = null
                    }, S.absoluteValue = S.abs = function() {
                        var t = new U(this);
                        return t.s < 0 && (t.s = 1), t
                    }, S.comparedTo = function(t, e) {
                        return g(this, new U(t, e))
                    }, S.decimalPlaces = S.dp = function(t, e) {
                        var i, r, n, o = this;
                        if (null != t) return v(t, 0, d), null == e ? e = E : v(e, 0, 8), z(new U(o), t + o.e + 1, e);
                        if (!(i = o.c)) return null;
                        if (r = 14 * ((n = i.length - 1) - m(this.e / 14)), n = i[n])
                            for (; n % 10 == 0; n /= 10, r--);
                        return r < 0 && (r = 0), r
                    }, S.dividedBy = S.div = function(t, e) {
                        return i(this, new U(t, e), x, E)
                    }, S.dividedToIntegerBy = S.idiv = function(t, e) {
                        return i(this, new U(t, e), 0, 1)
                    }, S.exponentiatedBy = S.pow = function(t, e) {
                        var i, r, n, o, s, l, f, c, d = this;
                        if ((t = new U(t)).c && !t.isInteger()) throw Error(a + "Exponent not an integer: " + K(t));
                        if (null != e && (e = new U(e)), s = t.e > 14, !d.c || !d.c[0] || 1 == d.c[0] && !d.e && 1 == d.c.length || !t.c || !t.c[0]) return c = new U(Math.pow(+K(d), s ? t.s * (2 - M(t)) : +K(t))), e ? c.mod(e) : c;
                        if (l = t.s < 0, e) {
                            if (e.c ? !e.c[0] : !e.s) return new U(NaN);
                            (r = !l && d.isInteger() && e.isInteger()) && (d = d.mod(e))
                        } else {
                            if (t.e > 9 && (d.e > 0 || d.e < -1 || (0 == d.e ? d.c[0] > 1 || s && d.c[1] >= 24e7 : d.c[0] < 8e13 || s && d.c[0] <= 9999975e7))) return o = d.s < 0 && M(t) ? -0 : 0, d.e > -1 && (o = 1 / o), new U(l ? 1 / o : o);
                            C && (o = u(C / 14 + 2))
                        }
                        for (s ? (i = new U(.5), l && (t.s = 1), f = M(t)) : f = (n = Math.abs(+K(t))) % 2, c = new U(k);;) {
                            if (f) {
                                if (!(c = c.times(d)).c) break;
                                o ? c.c.length > o && (c.c.length = o) : r && (c = c.mod(e))
                            }
                            if (n) {
                                if (0 === (n = h(n / 2))) break;
                                f = n % 2
                            } else if (z(t = t.times(i), t.e + 1, 1), t.e > 14) f = M(t);
                            else {
                                if (0 === (n = +K(t))) break;
                                f = n % 2
                            }
                            d = d.times(d), o ? d.c && d.c.length > o && (d.c.length = o) : r && (d = d.mod(e))
                        }
                        return r ? c : (l && (c = k.div(c)), e ? c.mod(e) : o ? z(c, C, E, void 0) : c)
                    }, S.integerValue = function(t) {
                        var e = new U(this);
                        return null == t ? t = E : v(t, 0, 8), z(e, e.e + 1, t)
                    }, S.isEqualTo = S.eq = function(t, e) {
                        return 0 === g(this, new U(t, e))
                    }, S.isFinite = function() {
                        return !!this.c
                    }, S.isGreaterThan = S.gt = function(t, e) {
                        return g(this, new U(t, e)) > 0
                    }, S.isGreaterThanOrEqualTo = S.gte = function(t, e) {
                        return 1 === (e = g(this, new U(t, e))) || 0 === e
                    }, S.isInteger = function() {
                        return !!this.c && m(this.e / 14) > this.c.length - 2
                    }, S.isLessThan = S.lt = function(t, e) {
                        return g(this, new U(t, e)) < 0
                    }, S.isLessThanOrEqualTo = S.lte = function(t, e) {
                        return -1 === (e = g(this, new U(t, e))) || 0 === e
                    }, S.isNaN = function() {
                        return !this.s
                    }, S.isNegative = function() {
                        return this.s < 0
                    }, S.isPositive = function() {
                        return this.s > 0
                    }, S.isZero = function() {
                        return !!this.c && 0 == this.c[0]
                    }, S.minus = function(t, e) {
                        var i, r, n, o, s = this,
                            u = s.s;
                        if (e = (t = new U(t, e)).s, !u || !e) return new U(NaN);
                        if (u != e) return t.s = -e, s.plus(t);
                        var h = s.e / 14,
                            a = t.e / 14,
                            l = s.c,
                            c = t.c;
                        if (!h || !a) {
                            if (!l || !c) return l ? (t.s = -e, t) : new U(c ? s : NaN);
                            if (!l[0] || !c[0]) return c[0] ? (t.s = -e, t) : new U(l[0] ? s : 3 == E ? -0 : 0)
                        }
                        if (h = m(h), a = m(a), l = l.slice(), u = h - a) {
                            for ((o = u < 0) ? (u = -u, n = l) : (a = h, n = c), n.reverse(), e = u; e--; n.push(0));
                            n.reverse()
                        } else
                            for (r = (o = (u = l.length) < (e = c.length)) ? u : e, u = e = 0; e < r; e++)
                                if (l[e] != c[e]) {
                                    o = l[e] < c[e];
                                    break
                                } if (o && (n = l, l = c, c = n, t.s = -t.s), (e = (r = c.length) - (i = l.length)) > 0)
                            for (; e--; l[i++] = 0);
                        for (e = f - 1; r > u;) {
                            if (l[--r] < c[r]) {
                                for (i = r; i && !l[--i]; l[i] = e);
                                --l[i], l[r] += f
                            }
                            l[r] -= c[r]
                        }
                        for (; 0 == l[0]; l.splice(0, 1), --a);
                        return l[0] ? G(t, l, a) : (t.s = 3 == E ? -1 : 1, t.c = [t.e = 0], t)
                    }, S.modulo = S.mod = function(t, e) {
                        var r, n, o = this;
                        return t = new U(t, e), !o.c || !t.s || t.c && !t.c[0] ? new U(NaN) : !t.c || o.c && !o.c[0] ? new U(o) : (9 == L ? (n = t.s, t.s = 1, r = i(o, t, 0, 3), t.s = n, r.s *= n) : r = i(o, t, 0, L), (t = o.minus(r.times(t))).c[0] || 1 != L || (t.s = o.s), t)
                    }, S.multipliedBy = S.times = function(t, e) {
                        var i, r, n, o, s, u, h, a, l, c, d, p, g, v, M = this,
                            w = M.c,
                            y = (t = new U(t, e)).c;
                        if (!(w && y && w[0] && y[0])) return !M.s || !t.s || w && !w[0] && !y || y && !y[0] && !w ? t.c = t.e = t.s = null : (t.s *= M.s, w && y ? (t.c = [0], t.e = 0) : t.c = t.e = null), t;
                        for (r = m(M.e / 14) + m(t.e / 14), t.s *= M.s, (h = w.length) < (c = y.length) && (g = w, w = y, y = g, n = h, h = c, c = n), n = h + c, g = []; n--; g.push(0));
                        for (v = f, 1e7, n = c; --n >= 0;) {
                            for (i = 0, d = y[n] % 1e7, p = y[n] / 1e7 | 0, o = n + (s = h); o > n;) i = ((a = d * (a = w[--s] % 1e7) + (u = p * a + (l = w[s] / 1e7 | 0) * d) % 1e7 * 1e7 + g[o] + i) / v | 0) + (u / 1e7 | 0) + p * l, g[o--] = a % v;
                            g[o] = i
                        }
                        return i ? ++r : g.splice(0, 1), G(t, g, r)
                    }, S.negated = function() {
                        var t = new U(this);
                        return t.s = -t.s || null, t
                    }, S.plus = function(t, e) {
                        var i, r = this,
                            n = r.s;
                        if (e = (t = new U(t, e)).s, !n || !e) return new U(NaN);
                        if (n != e) return t.s = -e, r.minus(t);
                        var o = r.e / 14,
                            s = t.e / 14,
                            u = r.c,
                            h = t.c;
                        if (!o || !s) {
                            if (!u || !h) return new U(n / 0);
                            if (!u[0] || !h[0]) return h[0] ? t : new U(u[0] ? r : 0 * n)
                        }
                        if (o = m(o), s = m(s), u = u.slice(), n = o - s) {
                            for (n > 0 ? (s = o, i = h) : (n = -n, i = u), i.reverse(); n--; i.push(0));
                            i.reverse()
                        }
                        for ((n = u.length) - (e = h.length) < 0 && (i = h, h = u, u = i, e = n), n = 0; e;) n = (u[--e] = u[e] + h[e] + n) / f | 0, u[e] = f === u[e] ? 0 : u[e] % f;
                        return n && (u = [n].concat(u), ++s), G(t, u, s)
                    }, S.precision = S.sd = function(t, e) {
                        var i, r, n, o = this;
                        if (null != t && t !== !!t) return v(t, 1, d), null == e ? e = E : v(e, 0, 8), z(new U(o), t, e);
                        if (!(i = o.c)) return null;
                        if (r = 14 * (n = i.length - 1) + 1, n = i[n]) {
                            for (; n % 10 == 0; n /= 10, r--);
                            for (n = i[0]; n >= 10; n /= 10, r++);
                        }
                        return t && o.e + 1 > r && (r = o.e + 1), r
                    }, S.shiftedBy = function(t) {
                        return v(t, -9007199254740991, 9007199254740991), this.times("1e" + t)
                    }, S.squareRoot = S.sqrt = function() {
                        var t, e, r, n, o, s = this,
                            u = s.c,
                            h = s.s,
                            a = s.e,
                            l = x + 4,
                            f = new U("0.5");
                        if (1 !== h || !u || !u[0]) return new U(!h || h < 0 && (!u || u[0]) ? NaN : u ? s : 1 / 0);
                        if (0 == (h = Math.sqrt(+K(s))) || h == 1 / 0 ? (((e = p(u)).length + a) % 2 == 0 && (e += "0"), h = Math.sqrt(+e), a = m((a + 1) / 2) - (a < 0 || a % 2), r = new U(e = h == 1 / 0 ? "5e" + a : (e = h.toExponential()).slice(0, e.indexOf("e") + 1) + a)) : r = new U(h + ""), r.c[0])
                            for ((h = (a = r.e) + l) < 3 && (h = 0);;)
                                if (o = r, r = f.times(o.plus(i(s, o, l, 1))), p(o.c).slice(0, h) === (e = p(r.c)).slice(0, h)) {
                                    if (r.e < a && --h, "9999" != (e = e.slice(h - 3, h + 1)) && (n || "4999" != e)) {
                                        +e && (+e.slice(1) || "5" != e.charAt(0)) || (z(r, r.e + x + 2, 1), t = !r.times(r).eq(s));
                                        break
                                    }
                                    if (!n && (z(o, o.e + x + 2, 0), o.times(o).eq(s))) {
                                        r = o;
                                        break
                                    }
                                    l += 4, h += 4, n = 1
                                } return z(r, r.e + x + 1, E, t)
                    }, S.toExponential = function(t, e) {
                        return null != t && (v(t, 0, d), t++), Z(this, t, e, 1)
                    }, S.toFixed = function(t, e) {
                        return null != t && (v(t, 0, d), t = t + this.e + 1), Z(this, t, e)
                    }, S.toFormat = function(t, e, i) {
                        var r, n = this;
                        if (null == i) null != t && e && "object" == typeof e ? (i = e, e = null) : t && "object" == typeof t ? (i = t, t = e = null) : i = I;
                        else if ("object" != typeof i) throw Error(a + "Argument not an object: " + i);
                        if (r = n.toFixed(t, e), n.c) {
                            var o, s = r.split("."),
                                u = +i.groupSize,
                                h = +i.secondaryGroupSize,
                                l = i.groupSeparator || "",
                                f = s[0],
                                c = s[1],
                                d = n.s < 0,
                                m = d ? f.slice(1) : f,
                                p = m.length;
                            if (h && (o = u, u = h, h = o, p -= o), u > 0 && p > 0) {
                                for (o = p % u || u, f = m.substr(0, o); o < p; o += u) f += l + m.substr(o, u);
                                h > 0 && (f += l + m.slice(o)), d && (f = "-" + f)
                            }
                            r = c ? f + (i.decimalSeparator || "") + ((h = +i.fractionGroupSize) ? c.replace(new RegExp("\\d{" + h + "}\\B", "g"), "$&" + (i.fractionGroupSeparator || "")) : c) : f
                        }
                        return (i.prefix || "") + r + (i.suffix || "")
                    }, S.toFraction = function(t) {
                        var e, r, n, o, s, u, h, l, f, d, m, g, v = this,
                            M = v.c;
                        if (null != t && (!(h = new U(t)).isInteger() && (h.c || 1 !== h.s) || h.lt(k))) throw Error(a + "Argument " + (h.isInteger() ? "out of range: " : "not an integer: ") + K(h));
                        if (!M) return new U(v);
                        for (e = new U(k), f = r = new U(k), n = l = new U(k), g = p(M), s = e.e = g.length - v.e - 1, e.c[0] = c[(u = s % 14) < 0 ? 14 + u : u], t = !t || h.comparedTo(e) > 0 ? s > 0 ? e : f : h, u = T, T = 1 / 0, h = new U(g), l.c[0] = 0; d = i(h, e, 0, 1), 1 != (o = r.plus(d.times(n))).comparedTo(t);) r = n, n = o, f = l.plus(d.times(o = f)), l = o, e = h.minus(d.times(o = e)), h = o;
                        return o = i(t.minus(r), n, 0, 1), l = l.plus(o.times(f)), r = r.plus(o.times(n)), l.s = f.s = v.s, m = i(f, n, s *= 2, E).minus(v).abs().comparedTo(i(l, r, s, E).minus(v).abs()) < 1 ? [f, n] : [l, r], T = u, m
                    }, S.toNumber = function() {
                        return +K(this)
                    }, S.toPrecision = function(t, e) {
                        return null != t && v(t, 1, d), Z(this, t, e, 2)
                    }, S.toString = function(t) {
                        var e, i = this,
                            n = i.s,
                            o = i.e;
                        return null === o ? n ? (e = "Infinity", n < 0 && (e = "-" + e)) : e = "NaN" : (null == t ? e = o <= O || o >= F ? w(p(i.c), o) : y(p(i.c), o, "0") : 10 === t && q ? e = y(p((i = z(new U(i), x + o + 1, E)).c), i.e, "0") : (v(t, 2, D.length, "Base"), e = r(y(p(i.c), o, "0"), 10, t, n, !0)), n < 0 && i.c[0] && (e = "-" + e)), e
                    }, S.valueOf = S.toJSON = function() {
                        return K(this)
                    }, S._isBigNumber = !0, null != e && U.set(e), U
                }()).default = o.BigNumber = o, void 0 === (r = function() {
                    return o
                }.call(e, i, e, t)) || (t.exports = r)
            }()
        },
        6044: function(t, e, i) {
            "use strict";
            var r = i(53),
                n = i(6043);

            function o(t) {
                return t.dividedBy(1e6)
            }

            function s(t) {
                var e = Object.keys(t)[0],
                    i = t[e];
                return Object.assign({}, i, {
                    diffType: e,
                    entryType: i.LedgerEntryType,
                    ledgerIndex: i.LedgerIndex,
                    newFields: i.NewFields || {},
                    finalFields: i.FinalFields || {},
                    previousFields: i.PreviousFields || {}
                })
            }

            function u(t) {
                return t.AffectedNodes ? t.AffectedNodes.map(s) : []
            }
            t.exports = {
                dropsToXRP: o,
                normalizeNodes: u,
                parseCurrencyAmount: function(t) {
                    if (void 0 !== t) return "string" == typeof t ? {
                        currency: "XRP",
                        value: o(new n(t)).toString()
                    } : {
                        currency: t.currency,
                        counterparty: t.issuer,
                        value: t.value
                    }
                },
                getAffectedAccounts: function(t) {
                    var e = [];
                    return r.forEach(u(t), (function(t) {
                        var i = "CreatedNode" === t.diffType ? t.newFields : t.finalFields;
                        r.forEach(i, (function(t, i) {
                            ! function(t) {
                                return r.includes(["Account", "Owner", "Destination", "Issuer", "Target"], t)
                            }(i) ? function(t) {
                                return r.includes(["LowLimit", "HighLimit", "TakerPays", "TakerGets"], t)
                            }(i) && t.issuer && e.push(t.issuer): e.push(t)
                        }))
                    })), r.uniq(e)
                }
            }
        },
        7227: function(t, e, i) {
            (function(t) {
                ! function(t, e) {
                    "use strict";

                    function r(t, e) {
                        if (!t) throw new Error(e || "Assertion failed")
                    }

                    function n(t, e) {
                        t.super_ = e;
                        var i = function() {};
                        i.prototype = e.prototype, t.prototype = new i, t.prototype.constructor = t
                    }

                    function o(t, e, i) {
                        if (o.isBN(t)) return t;
                        this.negative = 0, this.words = null, this.length = 0, this.red = null, null !== t && ("le" !== e && "be" !== e || (i = e, e = 10), this._init(t || 0, e || 10, i || "be"))
                    }
                    var s;
                    "object" == typeof t ? t.exports = o : e.BN = o, o.BN = o, o.wordSize = 26;
                    try {
                        s = "undefined" != typeof window && void 0 !== window.Buffer ? window.Buffer : i(12).Buffer
                    } catch (t) {}

                    function u(t, e) {
                        var i = t.charCodeAt(e);
                        return i >= 48 && i <= 57 ? i - 48 : i >= 65 && i <= 70 ? i - 55 : i >= 97 && i <= 102 ? i - 87 : void r(!1, "Invalid character in " + t)
                    }

                    function h(t, e, i) {
                        var r = u(t, i);
                        return i - 1 >= e && (r |= u(t, i - 1) << 4), r
                    }

                    function a(t, e, i, n) {
                        for (var o = 0, s = 0, u = Math.min(t.length, i), h = e; h < u; h++) {
                            var a = t.charCodeAt(h) - 48;
                            o *= n, s = a >= 49 ? a - 49 + 10 : a >= 17 ? a - 17 + 10 : a, r(a >= 0 && s < n, "Invalid character"), o += s
                        }
                        return o
                    }

                    function l(t, e) {
                        t.words = e.words, t.length = e.length, t.negative = e.negative, t.red = e.red
                    }
                    if (o.isBN = function(t) {
                            return t instanceof o || null !== t && "object" == typeof t && t.constructor.wordSize === o.wordSize && Array.isArray(t.words)
                        }, o.max = function(t, e) {
                            return t.cmp(e) > 0 ? t : e
                        }, o.min = function(t, e) {
                            return t.cmp(e) < 0 ? t : e
                        }, o.prototype._init = function(t, e, i) {
                            if ("number" == typeof t) return this._initNumber(t, e, i);
                            if ("object" == typeof t) return this._initArray(t, e, i);
                            "hex" === e && (e = 16), r(e === (0 | e) && e >= 2 && e <= 36);
                            var n = 0;
                            "-" === (t = t.toString().replace(/\s+/g, ""))[0] && (n++, this.negative = 1), n < t.length && (16 === e ? this._parseHex(t, n, i) : (this._parseBase(t, e, n), "le" === i && this._initArray(this.toArray(), e, i)))
                        }, o.prototype._initNumber = function(t, e, i) {
                            t < 0 && (this.negative = 1, t = -t), t < 67108864 ? (this.words = [67108863 & t], this.length = 1) : t < 4503599627370496 ? (this.words = [67108863 & t, t / 67108864 & 67108863], this.length = 2) : (r(t < 9007199254740992), this.words = [67108863 & t, t / 67108864 & 67108863, 1], this.length = 3), "le" === i && this._initArray(this.toArray(), e, i)
                        }, o.prototype._initArray = function(t, e, i) {
                            if (r("number" == typeof t.length), t.length <= 0) return this.words = [0], this.length = 1, this;
                            this.length = Math.ceil(t.length / 3), this.words = new Array(this.length);
                            for (var n = 0; n < this.length; n++) this.words[n] = 0;
                            var o, s, u = 0;
                            if ("be" === i)
                                for (n = t.length - 1, o = 0; n >= 0; n -= 3) s = t[n] | t[n - 1] << 8 | t[n - 2] << 16, this.words[o] |= s << u & 67108863, this.words[o + 1] = s >>> 26 - u & 67108863, (u += 24) >= 26 && (u -= 26, o++);
                            else if ("le" === i)
                                for (n = 0, o = 0; n < t.length; n += 3) s = t[n] | t[n + 1] << 8 | t[n + 2] << 16, this.words[o] |= s << u & 67108863, this.words[o + 1] = s >>> 26 - u & 67108863, (u += 24) >= 26 && (u -= 26, o++);
                            return this._strip()
                        }, o.prototype._parseHex = function(t, e, i) {
                            this.length = Math.ceil((t.length - e) / 6), this.words = new Array(this.length);
                            for (var r = 0; r < this.length; r++) this.words[r] = 0;
                            var n, o = 0,
                                s = 0;
                            if ("be" === i)
                                for (r = t.length - 1; r >= e; r -= 2) n = h(t, e, r) << o, this.words[s] |= 67108863 & n, o >= 18 ? (o -= 18, s += 1, this.words[s] |= n >>> 26) : o += 8;
                            else
                                for (r = (t.length - e) % 2 == 0 ? e + 1 : e; r < t.length; r += 2) n = h(t, e, r) << o, this.words[s] |= 67108863 & n, o >= 18 ? (o -= 18, s += 1, this.words[s] |= n >>> 26) : o += 8;
                            this._strip()
                        }, o.prototype._parseBase = function(t, e, i) {
                            this.words = [0], this.length = 1;
                            for (var r = 0, n = 1; n <= 67108863; n *= e) r++;
                            r--, n = n / e | 0;
                            for (var o = t.length - i, s = o % r, u = Math.min(o, o - s) + i, h = 0, l = i; l < u; l += r) h = a(t, l, l + r, e), this.imuln(n), this.words[0] + h < 67108864 ? this.words[0] += h : this._iaddn(h);
                            if (0 !== s) {
                                var f = 1;
                                for (h = a(t, l, t.length, e), l = 0; l < s; l++) f *= e;
                                this.imuln(f), this.words[0] + h < 67108864 ? this.words[0] += h : this._iaddn(h)
                            }
                            this._strip()
                        }, o.prototype.copy = function(t) {
                            t.words = new Array(this.length);
                            for (var e = 0; e < this.length; e++) t.words[e] = this.words[e];
                            t.length = this.length, t.negative = this.negative, t.red = this.red
                        }, o.prototype._move = function(t) {
                            l(t, this)
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
                        o.prototype[Symbol.for("nodejs.util.inspect.custom")] = f
                    } catch (t) {
                        o.prototype.inspect = f
                    } else o.prototype.inspect = f;

                    function f() {
                        return (this.red ? "<BN-R: " : "<BN: ") + this.toString(16) + ">"
                    }
                    var c = ["", "0", "00", "000", "0000", "00000", "000000", "0000000", "00000000", "000000000", "0000000000", "00000000000", "000000000000", "0000000000000", "00000000000000", "000000000000000", "0000000000000000", "00000000000000000", "000000000000000000", "0000000000000000000", "00000000000000000000", "000000000000000000000", "0000000000000000000000", "00000000000000000000000", "000000000000000000000000", "0000000000000000000000000"],
                        d = [0, 0, 25, 16, 12, 11, 10, 9, 8, 8, 7, 7, 7, 7, 6, 6, 6, 6, 6, 6, 6, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5],
                        m = [0, 0, 33554432, 43046721, 16777216, 48828125, 60466176, 40353607, 16777216, 43046721, 1e7, 19487171, 35831808, 62748517, 7529536, 11390625, 16777216, 24137569, 34012224, 47045881, 64e6, 4084101, 5153632, 6436343, 7962624, 9765625, 11881376, 14348907, 17210368, 20511149, 243e5, 28629151, 33554432, 39135393, 45435424, 52521875, 60466176];
                    o.prototype.toString = function(t, e) {
                        var i;
                        if (e = 0 | e || 1, 16 === (t = t || 10) || "hex" === t) {
                            i = "";
                            for (var n = 0, o = 0, s = 0; s < this.length; s++) {
                                var u = this.words[s],
                                    h = (16777215 & (u << n | o)).toString(16);
                                o = u >>> 24 - n & 16777215, (n += 2) >= 26 && (n -= 26, s--), i = 0 !== o || s !== this.length - 1 ? c[6 - h.length] + h + i : h + i
                            }
                            for (0 !== o && (i = o.toString(16) + i); i.length % e != 0;) i = "0" + i;
                            return 0 !== this.negative && (i = "-" + i), i
                        }
                        if (t === (0 | t) && t >= 2 && t <= 36) {
                            var a = d[t],
                                l = m[t];
                            i = "";
                            var f = this.clone();
                            for (f.negative = 0; !f.isZero();) {
                                var p = f.modrn(l).toString(t);
                                i = (f = f.idivn(l)).isZero() ? p + i : c[a - p.length] + p + i
                            }
                            for (this.isZero() && (i = "0" + i); i.length % e != 0;) i = "0" + i;
                            return 0 !== this.negative && (i = "-" + i), i
                        }
                        r(!1, "Base should be between 2 and 36")
                    }, o.prototype.toNumber = function() {
                        var t = this.words[0];
                        return 2 === this.length ? t += 67108864 * this.words[1] : 3 === this.length && 1 === this.words[2] ? t += 4503599627370496 + 67108864 * this.words[1] : this.length > 2 && r(!1, "Number can only safely store up to 53 bits"), 0 !== this.negative ? -t : t
                    }, o.prototype.toJSON = function() {
                        return this.toString(16, 2)
                    }, s && (o.prototype.toBuffer = function(t, e) {
                        return this.toArrayLike(s, t, e)
                    }), o.prototype.toArray = function(t, e) {
                        return this.toArrayLike(Array, t, e)
                    };

                    function p(t, e, i) {
                        i.negative = e.negative ^ t.negative;
                        var r = t.length + e.length | 0;
                        i.length = r, r = r - 1 | 0;
                        var n = 0 | t.words[0],
                            o = 0 | e.words[0],
                            s = n * o,
                            u = 67108863 & s,
                            h = s / 67108864 | 0;
                        i.words[0] = u;
                        for (var a = 1; a < r; a++) {
                            for (var l = h >>> 26, f = 67108863 & h, c = Math.min(a, e.length - 1), d = Math.max(0, a - t.length + 1); d <= c; d++) {
                                var m = a - d | 0;
                                l += (s = (n = 0 | t.words[m]) * (o = 0 | e.words[d]) + f) / 67108864 | 0, f = 67108863 & s
                            }
                            i.words[a] = 0 | f, h = 0 | l
                        }
                        return 0 !== h ? i.words[a] = 0 | h : i.length--, i._strip()
                    }
                    o.prototype.toArrayLike = function(t, e, i) {
                        this._strip();
                        var n = this.byteLength(),
                            o = i || Math.max(1, n);
                        r(n <= o, "byte array longer than desired length"), r(o > 0, "Requested array length <= 0");
                        var s = function(t, e) {
                            return t.allocUnsafe ? t.allocUnsafe(e) : new t(e)
                        }(t, o);
                        return this["_toArrayLike" + ("le" === e ? "LE" : "BE")](s, n), s
                    }, o.prototype._toArrayLikeLE = function(t, e) {
                        for (var i = 0, r = 0, n = 0, o = 0; n < this.length; n++) {
                            var s = this.words[n] << o | r;
                            t[i++] = 255 & s, i < t.length && (t[i++] = s >> 8 & 255), i < t.length && (t[i++] = s >> 16 & 255), 6 === o ? (i < t.length && (t[i++] = s >> 24 & 255), r = 0, o = 0) : (r = s >>> 24, o += 2)
                        }
                        if (i < t.length)
                            for (t[i++] = r; i < t.length;) t[i++] = 0
                    }, o.prototype._toArrayLikeBE = function(t, e) {
                        for (var i = t.length - 1, r = 0, n = 0, o = 0; n < this.length; n++) {
                            var s = this.words[n] << o | r;
                            t[i--] = 255 & s, i >= 0 && (t[i--] = s >> 8 & 255), i >= 0 && (t[i--] = s >> 16 & 255), 6 === o ? (i >= 0 && (t[i--] = s >> 24 & 255), r = 0, o = 0) : (r = s >>> 24, o += 2)
                        }
                        if (i >= 0)
                            for (t[i--] = r; i >= 0;) t[i--] = 0
                    }, Math.clz32 ? o.prototype._countBits = function(t) {
                        return 32 - Math.clz32(t)
                    } : o.prototype._countBits = function(t) {
                        var e = t,
                            i = 0;
                        return e >= 4096 && (i += 13, e >>>= 13), e >= 64 && (i += 7, e >>>= 7), e >= 8 && (i += 4, e >>>= 4), e >= 2 && (i += 2, e >>>= 2), i + e
                    }, o.prototype._zeroBits = function(t) {
                        if (0 === t) return 26;
                        var e = t,
                            i = 0;
                        return 0 == (8191 & e) && (i += 13, e >>>= 13), 0 == (127 & e) && (i += 7, e >>>= 7), 0 == (15 & e) && (i += 4, e >>>= 4), 0 == (3 & e) && (i += 2, e >>>= 2), 0 == (1 & e) && i++, i
                    }, o.prototype.bitLength = function() {
                        var t = this.words[this.length - 1],
                            e = this._countBits(t);
                        return 26 * (this.length - 1) + e
                    }, o.prototype.zeroBits = function() {
                        if (this.isZero()) return 0;
                        for (var t = 0, e = 0; e < this.length; e++) {
                            var i = this._zeroBits(this.words[e]);
                            if (t += i, 26 !== i) break
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
                        return r(0 == (this.negative | t.negative)), this.iuor(t)
                    }, o.prototype.or = function(t) {
                        return this.length > t.length ? this.clone().ior(t) : t.clone().ior(this)
                    }, o.prototype.uor = function(t) {
                        return this.length > t.length ? this.clone().iuor(t) : t.clone().iuor(this)
                    }, o.prototype.iuand = function(t) {
                        var e;
                        e = this.length > t.length ? t : this;
                        for (var i = 0; i < e.length; i++) this.words[i] = this.words[i] & t.words[i];
                        return this.length = e.length, this._strip()
                    }, o.prototype.iand = function(t) {
                        return r(0 == (this.negative | t.negative)), this.iuand(t)
                    }, o.prototype.and = function(t) {
                        return this.length > t.length ? this.clone().iand(t) : t.clone().iand(this)
                    }, o.prototype.uand = function(t) {
                        return this.length > t.length ? this.clone().iuand(t) : t.clone().iuand(this)
                    }, o.prototype.iuxor = function(t) {
                        var e, i;
                        this.length > t.length ? (e = this, i = t) : (e = t, i = this);
                        for (var r = 0; r < i.length; r++) this.words[r] = e.words[r] ^ i.words[r];
                        if (this !== e)
                            for (; r < e.length; r++) this.words[r] = e.words[r];
                        return this.length = e.length, this._strip()
                    }, o.prototype.ixor = function(t) {
                        return r(0 == (this.negative | t.negative)), this.iuxor(t)
                    }, o.prototype.xor = function(t) {
                        return this.length > t.length ? this.clone().ixor(t) : t.clone().ixor(this)
                    }, o.prototype.uxor = function(t) {
                        return this.length > t.length ? this.clone().iuxor(t) : t.clone().iuxor(this)
                    }, o.prototype.inotn = function(t) {
                        r("number" == typeof t && t >= 0);
                        var e = 0 | Math.ceil(t / 26),
                            i = t % 26;
                        this._expand(e), i > 0 && e--;
                        for (var n = 0; n < e; n++) this.words[n] = 67108863 & ~this.words[n];
                        return i > 0 && (this.words[n] = ~this.words[n] & 67108863 >> 26 - i), this._strip()
                    }, o.prototype.notn = function(t) {
                        return this.clone().inotn(t)
                    }, o.prototype.setn = function(t, e) {
                        r("number" == typeof t && t >= 0);
                        var i = t / 26 | 0,
                            n = t % 26;
                        return this._expand(i + 1), this.words[i] = e ? this.words[i] | 1 << n : this.words[i] & ~(1 << n), this._strip()
                    }, o.prototype.iadd = function(t) {
                        var e, i, r;
                        if (0 !== this.negative && 0 === t.negative) return this.negative = 0, e = this.isub(t), this.negative ^= 1, this._normSign();
                        if (0 === this.negative && 0 !== t.negative) return t.negative = 0, e = this.isub(t), t.negative = 1, e._normSign();
                        this.length > t.length ? (i = this, r = t) : (i = t, r = this);
                        for (var n = 0, o = 0; o < r.length; o++) e = (0 | i.words[o]) + (0 | r.words[o]) + n, this.words[o] = 67108863 & e, n = e >>> 26;
                        for (; 0 !== n && o < i.length; o++) e = (0 | i.words[o]) + n, this.words[o] = 67108863 & e, n = e >>> 26;
                        if (this.length = i.length, 0 !== n) this.words[this.length] = n, this.length++;
                        else if (i !== this)
                            for (; o < i.length; o++) this.words[o] = i.words[o];
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
                        var i, r, n = this.cmp(t);
                        if (0 === n) return this.negative = 0, this.length = 1, this.words[0] = 0, this;
                        n > 0 ? (i = this, r = t) : (i = t, r = this);
                        for (var o = 0, s = 0; s < r.length; s++) o = (e = (0 | i.words[s]) - (0 | r.words[s]) + o) >> 26, this.words[s] = 67108863 & e;
                        for (; 0 !== o && s < i.length; s++) o = (e = (0 | i.words[s]) + o) >> 26, this.words[s] = 67108863 & e;
                        if (0 === o && s < i.length && i !== this)
                            for (; s < i.length; s++) this.words[s] = i.words[s];
                        return this.length = Math.max(this.length, s), i !== this && (this.negative = 1), this._strip()
                    }, o.prototype.sub = function(t) {
                        return this.clone().isub(t)
                    };
                    var g = function(t, e, i) {
                        var r, n, o, s = t.words,
                            u = e.words,
                            h = i.words,
                            a = 0,
                            l = 0 | s[0],
                            f = 8191 & l,
                            c = l >>> 13,
                            d = 0 | s[1],
                            m = 8191 & d,
                            p = d >>> 13,
                            g = 0 | s[2],
                            v = 8191 & g,
                            M = g >>> 13,
                            w = 0 | s[3],
                            y = 8191 & w,
                            b = w >>> 13,
                            _ = 0 | s[4],
                            A = 8191 & _,
                            N = _ >>> 13,
                            B = 0 | s[5],
                            S = 8191 & B,
                            k = B >>> 13,
                            x = 0 | s[6],
                            E = 8191 & x,
                            O = x >>> 13,
                            F = 0 | s[7],
                            P = 8191 & F,
                            T = F >>> 13,
                            R = 0 | s[8],
                            L = 8191 & R,
                            C = R >>> 13,
                            I = 0 | s[9],
                            D = 8191 & I,
                            q = I >>> 13,
                            U = 0 | u[0],
                            Z = 8191 & U,
                            j = U >>> 13,
                            G = 0 | u[1],
                            z = 8191 & G,
                            K = G >>> 13,
                            H = 0 | u[2],
                            X = 8191 & H,
                            $ = H >>> 13,
                            V = 0 | u[3],
                            J = 8191 & V,
                            W = V >>> 13,
                            Y = 0 | u[4],
                            Q = 8191 & Y,
                            tt = Y >>> 13,
                            et = 0 | u[5],
                            it = 8191 & et,
                            rt = et >>> 13,
                            nt = 0 | u[6],
                            ot = 8191 & nt,
                            st = nt >>> 13,
                            ut = 0 | u[7],
                            ht = 8191 & ut,
                            at = ut >>> 13,
                            lt = 0 | u[8],
                            ft = 8191 & lt,
                            ct = lt >>> 13,
                            dt = 0 | u[9],
                            mt = 8191 & dt,
                            pt = dt >>> 13;
                        i.negative = t.negative ^ e.negative, i.length = 19;
                        var gt = (a + (r = Math.imul(f, Z)) | 0) + ((8191 & (n = (n = Math.imul(f, j)) + Math.imul(c, Z) | 0)) << 13) | 0;
                        a = ((o = Math.imul(c, j)) + (n >>> 13) | 0) + (gt >>> 26) | 0, gt &= 67108863, r = Math.imul(m, Z), n = (n = Math.imul(m, j)) + Math.imul(p, Z) | 0, o = Math.imul(p, j);
                        var vt = (a + (r = r + Math.imul(f, z) | 0) | 0) + ((8191 & (n = (n = n + Math.imul(f, K) | 0) + Math.imul(c, z) | 0)) << 13) | 0;
                        a = ((o = o + Math.imul(c, K) | 0) + (n >>> 13) | 0) + (vt >>> 26) | 0, vt &= 67108863, r = Math.imul(v, Z), n = (n = Math.imul(v, j)) + Math.imul(M, Z) | 0, o = Math.imul(M, j), r = r + Math.imul(m, z) | 0, n = (n = n + Math.imul(m, K) | 0) + Math.imul(p, z) | 0, o = o + Math.imul(p, K) | 0;
                        var Mt = (a + (r = r + Math.imul(f, X) | 0) | 0) + ((8191 & (n = (n = n + Math.imul(f, $) | 0) + Math.imul(c, X) | 0)) << 13) | 0;
                        a = ((o = o + Math.imul(c, $) | 0) + (n >>> 13) | 0) + (Mt >>> 26) | 0, Mt &= 67108863, r = Math.imul(y, Z), n = (n = Math.imul(y, j)) + Math.imul(b, Z) | 0, o = Math.imul(b, j), r = r + Math.imul(v, z) | 0, n = (n = n + Math.imul(v, K) | 0) + Math.imul(M, z) | 0, o = o + Math.imul(M, K) | 0, r = r + Math.imul(m, X) | 0, n = (n = n + Math.imul(m, $) | 0) + Math.imul(p, X) | 0, o = o + Math.imul(p, $) | 0;
                        var wt = (a + (r = r + Math.imul(f, J) | 0) | 0) + ((8191 & (n = (n = n + Math.imul(f, W) | 0) + Math.imul(c, J) | 0)) << 13) | 0;
                        a = ((o = o + Math.imul(c, W) | 0) + (n >>> 13) | 0) + (wt >>> 26) | 0, wt &= 67108863, r = Math.imul(A, Z), n = (n = Math.imul(A, j)) + Math.imul(N, Z) | 0, o = Math.imul(N, j), r = r + Math.imul(y, z) | 0, n = (n = n + Math.imul(y, K) | 0) + Math.imul(b, z) | 0, o = o + Math.imul(b, K) | 0, r = r + Math.imul(v, X) | 0, n = (n = n + Math.imul(v, $) | 0) + Math.imul(M, X) | 0, o = o + Math.imul(M, $) | 0, r = r + Math.imul(m, J) | 0, n = (n = n + Math.imul(m, W) | 0) + Math.imul(p, J) | 0, o = o + Math.imul(p, W) | 0;
                        var yt = (a + (r = r + Math.imul(f, Q) | 0) | 0) + ((8191 & (n = (n = n + Math.imul(f, tt) | 0) + Math.imul(c, Q) | 0)) << 13) | 0;
                        a = ((o = o + Math.imul(c, tt) | 0) + (n >>> 13) | 0) + (yt >>> 26) | 0, yt &= 67108863, r = Math.imul(S, Z), n = (n = Math.imul(S, j)) + Math.imul(k, Z) | 0, o = Math.imul(k, j), r = r + Math.imul(A, z) | 0, n = (n = n + Math.imul(A, K) | 0) + Math.imul(N, z) | 0, o = o + Math.imul(N, K) | 0, r = r + Math.imul(y, X) | 0, n = (n = n + Math.imul(y, $) | 0) + Math.imul(b, X) | 0, o = o + Math.imul(b, $) | 0, r = r + Math.imul(v, J) | 0, n = (n = n + Math.imul(v, W) | 0) + Math.imul(M, J) | 0, o = o + Math.imul(M, W) | 0, r = r + Math.imul(m, Q) | 0, n = (n = n + Math.imul(m, tt) | 0) + Math.imul(p, Q) | 0, o = o + Math.imul(p, tt) | 0;
                        var bt = (a + (r = r + Math.imul(f, it) | 0) | 0) + ((8191 & (n = (n = n + Math.imul(f, rt) | 0) + Math.imul(c, it) | 0)) << 13) | 0;
                        a = ((o = o + Math.imul(c, rt) | 0) + (n >>> 13) | 0) + (bt >>> 26) | 0, bt &= 67108863, r = Math.imul(E, Z), n = (n = Math.imul(E, j)) + Math.imul(O, Z) | 0, o = Math.imul(O, j), r = r + Math.imul(S, z) | 0, n = (n = n + Math.imul(S, K) | 0) + Math.imul(k, z) | 0, o = o + Math.imul(k, K) | 0, r = r + Math.imul(A, X) | 0, n = (n = n + Math.imul(A, $) | 0) + Math.imul(N, X) | 0, o = o + Math.imul(N, $) | 0, r = r + Math.imul(y, J) | 0, n = (n = n + Math.imul(y, W) | 0) + Math.imul(b, J) | 0, o = o + Math.imul(b, W) | 0, r = r + Math.imul(v, Q) | 0, n = (n = n + Math.imul(v, tt) | 0) + Math.imul(M, Q) | 0, o = o + Math.imul(M, tt) | 0, r = r + Math.imul(m, it) | 0, n = (n = n + Math.imul(m, rt) | 0) + Math.imul(p, it) | 0, o = o + Math.imul(p, rt) | 0;
                        var _t = (a + (r = r + Math.imul(f, ot) | 0) | 0) + ((8191 & (n = (n = n + Math.imul(f, st) | 0) + Math.imul(c, ot) | 0)) << 13) | 0;
                        a = ((o = o + Math.imul(c, st) | 0) + (n >>> 13) | 0) + (_t >>> 26) | 0, _t &= 67108863, r = Math.imul(P, Z), n = (n = Math.imul(P, j)) + Math.imul(T, Z) | 0, o = Math.imul(T, j), r = r + Math.imul(E, z) | 0, n = (n = n + Math.imul(E, K) | 0) + Math.imul(O, z) | 0, o = o + Math.imul(O, K) | 0, r = r + Math.imul(S, X) | 0, n = (n = n + Math.imul(S, $) | 0) + Math.imul(k, X) | 0, o = o + Math.imul(k, $) | 0, r = r + Math.imul(A, J) | 0, n = (n = n + Math.imul(A, W) | 0) + Math.imul(N, J) | 0, o = o + Math.imul(N, W) | 0, r = r + Math.imul(y, Q) | 0, n = (n = n + Math.imul(y, tt) | 0) + Math.imul(b, Q) | 0, o = o + Math.imul(b, tt) | 0, r = r + Math.imul(v, it) | 0, n = (n = n + Math.imul(v, rt) | 0) + Math.imul(M, it) | 0, o = o + Math.imul(M, rt) | 0, r = r + Math.imul(m, ot) | 0, n = (n = n + Math.imul(m, st) | 0) + Math.imul(p, ot) | 0, o = o + Math.imul(p, st) | 0;
                        var At = (a + (r = r + Math.imul(f, ht) | 0) | 0) + ((8191 & (n = (n = n + Math.imul(f, at) | 0) + Math.imul(c, ht) | 0)) << 13) | 0;
                        a = ((o = o + Math.imul(c, at) | 0) + (n >>> 13) | 0) + (At >>> 26) | 0, At &= 67108863, r = Math.imul(L, Z), n = (n = Math.imul(L, j)) + Math.imul(C, Z) | 0, o = Math.imul(C, j), r = r + Math.imul(P, z) | 0, n = (n = n + Math.imul(P, K) | 0) + Math.imul(T, z) | 0, o = o + Math.imul(T, K) | 0, r = r + Math.imul(E, X) | 0, n = (n = n + Math.imul(E, $) | 0) + Math.imul(O, X) | 0, o = o + Math.imul(O, $) | 0, r = r + Math.imul(S, J) | 0, n = (n = n + Math.imul(S, W) | 0) + Math.imul(k, J) | 0, o = o + Math.imul(k, W) | 0, r = r + Math.imul(A, Q) | 0, n = (n = n + Math.imul(A, tt) | 0) + Math.imul(N, Q) | 0, o = o + Math.imul(N, tt) | 0, r = r + Math.imul(y, it) | 0, n = (n = n + Math.imul(y, rt) | 0) + Math.imul(b, it) | 0, o = o + Math.imul(b, rt) | 0, r = r + Math.imul(v, ot) | 0, n = (n = n + Math.imul(v, st) | 0) + Math.imul(M, ot) | 0, o = o + Math.imul(M, st) | 0, r = r + Math.imul(m, ht) | 0, n = (n = n + Math.imul(m, at) | 0) + Math.imul(p, ht) | 0, o = o + Math.imul(p, at) | 0;
                        var Nt = (a + (r = r + Math.imul(f, ft) | 0) | 0) + ((8191 & (n = (n = n + Math.imul(f, ct) | 0) + Math.imul(c, ft) | 0)) << 13) | 0;
                        a = ((o = o + Math.imul(c, ct) | 0) + (n >>> 13) | 0) + (Nt >>> 26) | 0, Nt &= 67108863, r = Math.imul(D, Z), n = (n = Math.imul(D, j)) + Math.imul(q, Z) | 0, o = Math.imul(q, j), r = r + Math.imul(L, z) | 0, n = (n = n + Math.imul(L, K) | 0) + Math.imul(C, z) | 0, o = o + Math.imul(C, K) | 0, r = r + Math.imul(P, X) | 0, n = (n = n + Math.imul(P, $) | 0) + Math.imul(T, X) | 0, o = o + Math.imul(T, $) | 0, r = r + Math.imul(E, J) | 0, n = (n = n + Math.imul(E, W) | 0) + Math.imul(O, J) | 0, o = o + Math.imul(O, W) | 0, r = r + Math.imul(S, Q) | 0, n = (n = n + Math.imul(S, tt) | 0) + Math.imul(k, Q) | 0, o = o + Math.imul(k, tt) | 0, r = r + Math.imul(A, it) | 0, n = (n = n + Math.imul(A, rt) | 0) + Math.imul(N, it) | 0, o = o + Math.imul(N, rt) | 0, r = r + Math.imul(y, ot) | 0, n = (n = n + Math.imul(y, st) | 0) + Math.imul(b, ot) | 0, o = o + Math.imul(b, st) | 0, r = r + Math.imul(v, ht) | 0, n = (n = n + Math.imul(v, at) | 0) + Math.imul(M, ht) | 0, o = o + Math.imul(M, at) | 0, r = r + Math.imul(m, ft) | 0, n = (n = n + Math.imul(m, ct) | 0) + Math.imul(p, ft) | 0, o = o + Math.imul(p, ct) | 0;
                        var Bt = (a + (r = r + Math.imul(f, mt) | 0) | 0) + ((8191 & (n = (n = n + Math.imul(f, pt) | 0) + Math.imul(c, mt) | 0)) << 13) | 0;
                        a = ((o = o + Math.imul(c, pt) | 0) + (n >>> 13) | 0) + (Bt >>> 26) | 0, Bt &= 67108863, r = Math.imul(D, z), n = (n = Math.imul(D, K)) + Math.imul(q, z) | 0, o = Math.imul(q, K), r = r + Math.imul(L, X) | 0, n = (n = n + Math.imul(L, $) | 0) + Math.imul(C, X) | 0, o = o + Math.imul(C, $) | 0, r = r + Math.imul(P, J) | 0, n = (n = n + Math.imul(P, W) | 0) + Math.imul(T, J) | 0, o = o + Math.imul(T, W) | 0, r = r + Math.imul(E, Q) | 0, n = (n = n + Math.imul(E, tt) | 0) + Math.imul(O, Q) | 0, o = o + Math.imul(O, tt) | 0, r = r + Math.imul(S, it) | 0, n = (n = n + Math.imul(S, rt) | 0) + Math.imul(k, it) | 0, o = o + Math.imul(k, rt) | 0, r = r + Math.imul(A, ot) | 0, n = (n = n + Math.imul(A, st) | 0) + Math.imul(N, ot) | 0, o = o + Math.imul(N, st) | 0, r = r + Math.imul(y, ht) | 0, n = (n = n + Math.imul(y, at) | 0) + Math.imul(b, ht) | 0, o = o + Math.imul(b, at) | 0, r = r + Math.imul(v, ft) | 0, n = (n = n + Math.imul(v, ct) | 0) + Math.imul(M, ft) | 0, o = o + Math.imul(M, ct) | 0;
                        var St = (a + (r = r + Math.imul(m, mt) | 0) | 0) + ((8191 & (n = (n = n + Math.imul(m, pt) | 0) + Math.imul(p, mt) | 0)) << 13) | 0;
                        a = ((o = o + Math.imul(p, pt) | 0) + (n >>> 13) | 0) + (St >>> 26) | 0, St &= 67108863, r = Math.imul(D, X), n = (n = Math.imul(D, $)) + Math.imul(q, X) | 0, o = Math.imul(q, $), r = r + Math.imul(L, J) | 0, n = (n = n + Math.imul(L, W) | 0) + Math.imul(C, J) | 0, o = o + Math.imul(C, W) | 0, r = r + Math.imul(P, Q) | 0, n = (n = n + Math.imul(P, tt) | 0) + Math.imul(T, Q) | 0, o = o + Math.imul(T, tt) | 0, r = r + Math.imul(E, it) | 0, n = (n = n + Math.imul(E, rt) | 0) + Math.imul(O, it) | 0, o = o + Math.imul(O, rt) | 0, r = r + Math.imul(S, ot) | 0, n = (n = n + Math.imul(S, st) | 0) + Math.imul(k, ot) | 0, o = o + Math.imul(k, st) | 0, r = r + Math.imul(A, ht) | 0, n = (n = n + Math.imul(A, at) | 0) + Math.imul(N, ht) | 0, o = o + Math.imul(N, at) | 0, r = r + Math.imul(y, ft) | 0, n = (n = n + Math.imul(y, ct) | 0) + Math.imul(b, ft) | 0, o = o + Math.imul(b, ct) | 0;
                        var kt = (a + (r = r + Math.imul(v, mt) | 0) | 0) + ((8191 & (n = (n = n + Math.imul(v, pt) | 0) + Math.imul(M, mt) | 0)) << 13) | 0;
                        a = ((o = o + Math.imul(M, pt) | 0) + (n >>> 13) | 0) + (kt >>> 26) | 0, kt &= 67108863, r = Math.imul(D, J), n = (n = Math.imul(D, W)) + Math.imul(q, J) | 0, o = Math.imul(q, W), r = r + Math.imul(L, Q) | 0, n = (n = n + Math.imul(L, tt) | 0) + Math.imul(C, Q) | 0, o = o + Math.imul(C, tt) | 0, r = r + Math.imul(P, it) | 0, n = (n = n + Math.imul(P, rt) | 0) + Math.imul(T, it) | 0, o = o + Math.imul(T, rt) | 0, r = r + Math.imul(E, ot) | 0, n = (n = n + Math.imul(E, st) | 0) + Math.imul(O, ot) | 0, o = o + Math.imul(O, st) | 0, r = r + Math.imul(S, ht) | 0, n = (n = n + Math.imul(S, at) | 0) + Math.imul(k, ht) | 0, o = o + Math.imul(k, at) | 0, r = r + Math.imul(A, ft) | 0, n = (n = n + Math.imul(A, ct) | 0) + Math.imul(N, ft) | 0, o = o + Math.imul(N, ct) | 0;
                        var xt = (a + (r = r + Math.imul(y, mt) | 0) | 0) + ((8191 & (n = (n = n + Math.imul(y, pt) | 0) + Math.imul(b, mt) | 0)) << 13) | 0;
                        a = ((o = o + Math.imul(b, pt) | 0) + (n >>> 13) | 0) + (xt >>> 26) | 0, xt &= 67108863, r = Math.imul(D, Q), n = (n = Math.imul(D, tt)) + Math.imul(q, Q) | 0, o = Math.imul(q, tt), r = r + Math.imul(L, it) | 0, n = (n = n + Math.imul(L, rt) | 0) + Math.imul(C, it) | 0, o = o + Math.imul(C, rt) | 0, r = r + Math.imul(P, ot) | 0, n = (n = n + Math.imul(P, st) | 0) + Math.imul(T, ot) | 0, o = o + Math.imul(T, st) | 0, r = r + Math.imul(E, ht) | 0, n = (n = n + Math.imul(E, at) | 0) + Math.imul(O, ht) | 0, o = o + Math.imul(O, at) | 0, r = r + Math.imul(S, ft) | 0, n = (n = n + Math.imul(S, ct) | 0) + Math.imul(k, ft) | 0, o = o + Math.imul(k, ct) | 0;
                        var Et = (a + (r = r + Math.imul(A, mt) | 0) | 0) + ((8191 & (n = (n = n + Math.imul(A, pt) | 0) + Math.imul(N, mt) | 0)) << 13) | 0;
                        a = ((o = o + Math.imul(N, pt) | 0) + (n >>> 13) | 0) + (Et >>> 26) | 0, Et &= 67108863, r = Math.imul(D, it), n = (n = Math.imul(D, rt)) + Math.imul(q, it) | 0, o = Math.imul(q, rt), r = r + Math.imul(L, ot) | 0, n = (n = n + Math.imul(L, st) | 0) + Math.imul(C, ot) | 0, o = o + Math.imul(C, st) | 0, r = r + Math.imul(P, ht) | 0, n = (n = n + Math.imul(P, at) | 0) + Math.imul(T, ht) | 0, o = o + Math.imul(T, at) | 0, r = r + Math.imul(E, ft) | 0, n = (n = n + Math.imul(E, ct) | 0) + Math.imul(O, ft) | 0, o = o + Math.imul(O, ct) | 0;
                        var Ot = (a + (r = r + Math.imul(S, mt) | 0) | 0) + ((8191 & (n = (n = n + Math.imul(S, pt) | 0) + Math.imul(k, mt) | 0)) << 13) | 0;
                        a = ((o = o + Math.imul(k, pt) | 0) + (n >>> 13) | 0) + (Ot >>> 26) | 0, Ot &= 67108863, r = Math.imul(D, ot), n = (n = Math.imul(D, st)) + Math.imul(q, ot) | 0, o = Math.imul(q, st), r = r + Math.imul(L, ht) | 0, n = (n = n + Math.imul(L, at) | 0) + Math.imul(C, ht) | 0, o = o + Math.imul(C, at) | 0, r = r + Math.imul(P, ft) | 0, n = (n = n + Math.imul(P, ct) | 0) + Math.imul(T, ft) | 0, o = o + Math.imul(T, ct) | 0;
                        var Ft = (a + (r = r + Math.imul(E, mt) | 0) | 0) + ((8191 & (n = (n = n + Math.imul(E, pt) | 0) + Math.imul(O, mt) | 0)) << 13) | 0;
                        a = ((o = o + Math.imul(O, pt) | 0) + (n >>> 13) | 0) + (Ft >>> 26) | 0, Ft &= 67108863, r = Math.imul(D, ht), n = (n = Math.imul(D, at)) + Math.imul(q, ht) | 0, o = Math.imul(q, at), r = r + Math.imul(L, ft) | 0, n = (n = n + Math.imul(L, ct) | 0) + Math.imul(C, ft) | 0, o = o + Math.imul(C, ct) | 0;
                        var Pt = (a + (r = r + Math.imul(P, mt) | 0) | 0) + ((8191 & (n = (n = n + Math.imul(P, pt) | 0) + Math.imul(T, mt) | 0)) << 13) | 0;
                        a = ((o = o + Math.imul(T, pt) | 0) + (n >>> 13) | 0) + (Pt >>> 26) | 0, Pt &= 67108863, r = Math.imul(D, ft), n = (n = Math.imul(D, ct)) + Math.imul(q, ft) | 0, o = Math.imul(q, ct);
                        var Tt = (a + (r = r + Math.imul(L, mt) | 0) | 0) + ((8191 & (n = (n = n + Math.imul(L, pt) | 0) + Math.imul(C, mt) | 0)) << 13) | 0;
                        a = ((o = o + Math.imul(C, pt) | 0) + (n >>> 13) | 0) + (Tt >>> 26) | 0, Tt &= 67108863;
                        var Rt = (a + (r = Math.imul(D, mt)) | 0) + ((8191 & (n = (n = Math.imul(D, pt)) + Math.imul(q, mt) | 0)) << 13) | 0;
                        return a = ((o = Math.imul(q, pt)) + (n >>> 13) | 0) + (Rt >>> 26) | 0, Rt &= 67108863, h[0] = gt, h[1] = vt, h[2] = Mt, h[3] = wt, h[4] = yt, h[5] = bt, h[6] = _t, h[7] = At, h[8] = Nt, h[9] = Bt, h[10] = St, h[11] = kt, h[12] = xt, h[13] = Et, h[14] = Ot, h[15] = Ft, h[16] = Pt, h[17] = Tt, h[18] = Rt, 0 !== a && (h[19] = a, i.length++), i
                    };

                    function v(t, e, i) {
                        i.negative = e.negative ^ t.negative, i.length = t.length + e.length;
                        for (var r = 0, n = 0, o = 0; o < i.length - 1; o++) {
                            var s = n;
                            n = 0;
                            for (var u = 67108863 & r, h = Math.min(o, e.length - 1), a = Math.max(0, o - t.length + 1); a <= h; a++) {
                                var l = o - a,
                                    f = (0 | t.words[l]) * (0 | e.words[a]),
                                    c = 67108863 & f;
                                u = 67108863 & (c = c + u | 0), n += (s = (s = s + (f / 67108864 | 0) | 0) + (c >>> 26) | 0) >>> 26, s &= 67108863
                            }
                            i.words[o] = u, r = s, s = n
                        }
                        return 0 !== r ? i.words[o] = r : i.length--, i._strip()
                    }

                    function M(t, e, i) {
                        return v(t, e, i)
                    }

                    function w(t, e) {
                        this.x = t, this.y = e
                    }
                    Math.imul || (g = p), o.prototype.mulTo = function(t, e) {
                        var i = this.length + t.length;
                        return 10 === this.length && 10 === t.length ? g(this, t, e) : i < 63 ? p(this, t, e) : i < 1024 ? v(this, t, e) : M(this, t, e)
                    }, w.prototype.makeRBT = function(t) {
                        for (var e = new Array(t), i = o.prototype._countBits(t) - 1, r = 0; r < t; r++) e[r] = this.revBin(r, i, t);
                        return e
                    }, w.prototype.revBin = function(t, e, i) {
                        if (0 === t || t === i - 1) return t;
                        for (var r = 0, n = 0; n < e; n++) r |= (1 & t) << e - n - 1, t >>= 1;
                        return r
                    }, w.prototype.permute = function(t, e, i, r, n, o) {
                        for (var s = 0; s < o; s++) r[s] = e[t[s]], n[s] = i[t[s]]
                    }, w.prototype.transform = function(t, e, i, r, n, o) {
                        this.permute(o, t, e, i, r, n);
                        for (var s = 1; s < n; s <<= 1)
                            for (var u = s << 1, h = Math.cos(2 * Math.PI / u), a = Math.sin(2 * Math.PI / u), l = 0; l < n; l += u)
                                for (var f = h, c = a, d = 0; d < s; d++) {
                                    var m = i[l + d],
                                        p = r[l + d],
                                        g = i[l + d + s],
                                        v = r[l + d + s],
                                        M = f * g - c * v;
                                    v = f * v + c * g, g = M, i[l + d] = m + g, r[l + d] = p + v, i[l + d + s] = m - g, r[l + d + s] = p - v, d !== u && (M = h * f - a * c, c = h * c + a * f, f = M)
                                }
                    }, w.prototype.guessLen13b = function(t, e) {
                        var i = 1 | Math.max(e, t),
                            r = 1 & i,
                            n = 0;
                        for (i = i / 2 | 0; i; i >>>= 1) n++;
                        return 1 << n + 1 + r
                    }, w.prototype.conjugate = function(t, e, i) {
                        if (!(i <= 1))
                            for (var r = 0; r < i / 2; r++) {
                                var n = t[r];
                                t[r] = t[i - r - 1], t[i - r - 1] = n, n = e[r], e[r] = -e[i - r - 1], e[i - r - 1] = -n
                            }
                    }, w.prototype.normalize13b = function(t, e) {
                        for (var i = 0, r = 0; r < e / 2; r++) {
                            var n = 8192 * Math.round(t[2 * r + 1] / e) + Math.round(t[2 * r] / e) + i;
                            t[r] = 67108863 & n, i = n < 67108864 ? 0 : n / 67108864 | 0
                        }
                        return t
                    }, w.prototype.convert13b = function(t, e, i, n) {
                        for (var o = 0, s = 0; s < e; s++) o += 0 | t[s], i[2 * s] = 8191 & o, o >>>= 13, i[2 * s + 1] = 8191 & o, o >>>= 13;
                        for (s = 2 * e; s < n; ++s) i[s] = 0;
                        r(0 === o), r(0 == (-8192 & o))
                    }, w.prototype.stub = function(t) {
                        for (var e = new Array(t), i = 0; i < t; i++) e[i] = 0;
                        return e
                    }, w.prototype.mulp = function(t, e, i) {
                        var r = 2 * this.guessLen13b(t.length, e.length),
                            n = this.makeRBT(r),
                            o = this.stub(r),
                            s = new Array(r),
                            u = new Array(r),
                            h = new Array(r),
                            a = new Array(r),
                            l = new Array(r),
                            f = new Array(r),
                            c = i.words;
                        c.length = r, this.convert13b(t.words, t.length, s, r), this.convert13b(e.words, e.length, a, r), this.transform(s, o, u, h, r, n), this.transform(a, o, l, f, r, n);
                        for (var d = 0; d < r; d++) {
                            var m = u[d] * l[d] - h[d] * f[d];
                            h[d] = u[d] * f[d] + h[d] * l[d], u[d] = m
                        }
                        return this.conjugate(u, h, r), this.transform(u, h, c, o, r, n), this.conjugate(c, o, r), this.normalize13b(c, r), i.negative = t.negative ^ e.negative, i.length = t.length + e.length, i._strip()
                    }, o.prototype.mul = function(t) {
                        var e = new o(null);
                        return e.words = new Array(this.length + t.length), this.mulTo(t, e)
                    }, o.prototype.mulf = function(t) {
                        var e = new o(null);
                        return e.words = new Array(this.length + t.length), M(this, t, e)
                    }, o.prototype.imul = function(t) {
                        return this.clone().mulTo(t, this)
                    }, o.prototype.imuln = function(t) {
                        var e = t < 0;
                        e && (t = -t), r("number" == typeof t), r(t < 67108864);
                        for (var i = 0, n = 0; n < this.length; n++) {
                            var o = (0 | this.words[n]) * t,
                                s = (67108863 & o) + (67108863 & i);
                            i >>= 26, i += o / 67108864 | 0, i += s >>> 26, this.words[n] = 67108863 & s
                        }
                        return 0 !== i && (this.words[n] = i, this.length++), e ? this.ineg() : this
                    }, o.prototype.muln = function(t) {
                        return this.clone().imuln(t)
                    }, o.prototype.sqr = function() {
                        return this.mul(this)
                    }, o.prototype.isqr = function() {
                        return this.imul(this.clone())
                    }, o.prototype.pow = function(t) {
                        var e = function(t) {
                            for (var e = new Array(t.bitLength()), i = 0; i < e.length; i++) {
                                var r = i / 26 | 0,
                                    n = i % 26;
                                e[i] = t.words[r] >>> n & 1
                            }
                            return e
                        }(t);
                        if (0 === e.length) return new o(1);
                        for (var i = this, r = 0; r < e.length && 0 === e[r]; r++, i = i.sqr());
                        if (++r < e.length)
                            for (var n = i.sqr(); r < e.length; r++, n = n.sqr()) 0 !== e[r] && (i = i.mul(n));
                        return i
                    }, o.prototype.iushln = function(t) {
                        r("number" == typeof t && t >= 0);
                        var e, i = t % 26,
                            n = (t - i) / 26,
                            o = 67108863 >>> 26 - i << 26 - i;
                        if (0 !== i) {
                            var s = 0;
                            for (e = 0; e < this.length; e++) {
                                var u = this.words[e] & o,
                                    h = (0 | this.words[e]) - u << i;
                                this.words[e] = h | s, s = u >>> 26 - i
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
                        return r(0 === this.negative), this.iushln(t)
                    }, o.prototype.iushrn = function(t, e, i) {
                        var n;
                        r("number" == typeof t && t >= 0), n = e ? (e - e % 26) / 26 : 0;
                        var o = t % 26,
                            s = Math.min((t - o) / 26, this.length),
                            u = 67108863 ^ 67108863 >>> o << o,
                            h = i;
                        if (n -= s, n = Math.max(0, n), h) {
                            for (var a = 0; a < s; a++) h.words[a] = this.words[a];
                            h.length = s
                        }
                        if (0 === s);
                        else if (this.length > s)
                            for (this.length -= s, a = 0; a < this.length; a++) this.words[a] = this.words[a + s];
                        else this.words[0] = 0, this.length = 1;
                        var l = 0;
                        for (a = this.length - 1; a >= 0 && (0 !== l || a >= n); a--) {
                            var f = 0 | this.words[a];
                            this.words[a] = l << 26 - o | f >>> o, l = f & u
                        }
                        return h && 0 !== l && (h.words[h.length++] = l), 0 === this.length && (this.words[0] = 0, this.length = 1), this._strip()
                    }, o.prototype.ishrn = function(t, e, i) {
                        return r(0 === this.negative), this.iushrn(t, e, i)
                    }, o.prototype.shln = function(t) {
                        return this.clone().ishln(t)
                    }, o.prototype.ushln = function(t) {
                        return this.clone().iushln(t)
                    }, o.prototype.shrn = function(t) {
                        return this.clone().ishrn(t)
                    }, o.prototype.ushrn = function(t) {
                        return this.clone().iushrn(t)
                    }, o.prototype.testn = function(t) {
                        r("number" == typeof t && t >= 0);
                        var e = t % 26,
                            i = (t - e) / 26,
                            n = 1 << e;
                        return !(this.length <= i) && !!(this.words[i] & n)
                    }, o.prototype.imaskn = function(t) {
                        r("number" == typeof t && t >= 0);
                        var e = t % 26,
                            i = (t - e) / 26;
                        if (r(0 === this.negative, "imaskn works only with positive numbers"), this.length <= i) return this;
                        if (0 !== e && i++, this.length = Math.min(i, this.length), 0 !== e) {
                            var n = 67108863 ^ 67108863 >>> e << e;
                            this.words[this.length - 1] &= n
                        }
                        return this._strip()
                    }, o.prototype.maskn = function(t) {
                        return this.clone().imaskn(t)
                    }, o.prototype.iaddn = function(t) {
                        return r("number" == typeof t), r(t < 67108864), t < 0 ? this.isubn(-t) : 0 !== this.negative ? 1 === this.length && (0 | this.words[0]) <= t ? (this.words[0] = t - (0 | this.words[0]), this.negative = 0, this) : (this.negative = 0, this.isubn(t), this.negative = 1, this) : this._iaddn(t)
                    }, o.prototype._iaddn = function(t) {
                        this.words[0] += t;
                        for (var e = 0; e < this.length && this.words[e] >= 67108864; e++) this.words[e] -= 67108864, e === this.length - 1 ? this.words[e + 1] = 1 : this.words[e + 1]++;
                        return this.length = Math.max(this.length, e + 1), this
                    }, o.prototype.isubn = function(t) {
                        if (r("number" == typeof t), r(t < 67108864), t < 0) return this.iaddn(-t);
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
                    }, o.prototype._ishlnsubmul = function(t, e, i) {
                        var n, o, s = t.length + i;
                        this._expand(s);
                        var u = 0;
                        for (n = 0; n < t.length; n++) {
                            o = (0 | this.words[n + i]) + u;
                            var h = (0 | t.words[n]) * e;
                            u = ((o -= 67108863 & h) >> 26) - (h / 67108864 | 0), this.words[n + i] = 67108863 & o
                        }
                        for (; n < this.length - i; n++) u = (o = (0 | this.words[n + i]) + u) >> 26, this.words[n + i] = 67108863 & o;
                        if (0 === u) return this._strip();
                        for (r(-1 === u), u = 0, n = 0; n < this.length; n++) u = (o = -(0 | this.words[n]) + u) >> 26, this.words[n] = 67108863 & o;
                        return this.negative = 1, this._strip()
                    }, o.prototype._wordDiv = function(t, e) {
                        var i = (this.length, t.length),
                            r = this.clone(),
                            n = t,
                            s = 0 | n.words[n.length - 1];
                        0 !== (i = 26 - this._countBits(s)) && (n = n.ushln(i), r.iushln(i), s = 0 | n.words[n.length - 1]);
                        var u, h = r.length - n.length;
                        if ("mod" !== e) {
                            (u = new o(null)).length = h + 1, u.words = new Array(u.length);
                            for (var a = 0; a < u.length; a++) u.words[a] = 0
                        }
                        var l = r.clone()._ishlnsubmul(n, 1, h);
                        0 === l.negative && (r = l, u && (u.words[h] = 1));
                        for (var f = h - 1; f >= 0; f--) {
                            var c = 67108864 * (0 | r.words[n.length + f]) + (0 | r.words[n.length + f - 1]);
                            for (c = Math.min(c / s | 0, 67108863), r._ishlnsubmul(n, c, f); 0 !== r.negative;) c--, r.negative = 0, r._ishlnsubmul(n, 1, f), r.isZero() || (r.negative ^= 1);
                            u && (u.words[f] = c)
                        }
                        return u && u._strip(), r._strip(), "div" !== e && 0 !== i && r.iushrn(i), {
                            div: u || null,
                            mod: r
                        }
                    }, o.prototype.divmod = function(t, e, i) {
                        return r(!t.isZero()), this.isZero() ? {
                            div: new o(0),
                            mod: new o(0)
                        } : 0 !== this.negative && 0 === t.negative ? (u = this.neg().divmod(t, e), "mod" !== e && (n = u.div.neg()), "div" !== e && (s = u.mod.neg(), i && 0 !== s.negative && s.iadd(t)), {
                            div: n,
                            mod: s
                        }) : 0 === this.negative && 0 !== t.negative ? (u = this.divmod(t.neg(), e), "mod" !== e && (n = u.div.neg()), {
                            div: n,
                            mod: u.mod
                        }) : 0 != (this.negative & t.negative) ? (u = this.neg().divmod(t.neg(), e), "div" !== e && (s = u.mod.neg(), i && 0 !== s.negative && s.isub(t)), {
                            div: u.div,
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
                        var n, s, u
                    }, o.prototype.div = function(t) {
                        return this.divmod(t, "div", !1).div
                    }, o.prototype.mod = function(t) {
                        return this.divmod(t, "mod", !1).mod
                    }, o.prototype.umod = function(t) {
                        return this.divmod(t, "mod", !0).mod
                    }, o.prototype.divRound = function(t) {
                        var e = this.divmod(t);
                        if (e.mod.isZero()) return e.div;
                        var i = 0 !== e.div.negative ? e.mod.isub(t) : e.mod,
                            r = t.ushrn(1),
                            n = t.andln(1),
                            o = i.cmp(r);
                        return o < 0 || 1 === n && 0 === o ? e.div : 0 !== e.div.negative ? e.div.isubn(1) : e.div.iaddn(1)
                    }, o.prototype.modrn = function(t) {
                        var e = t < 0;
                        e && (t = -t), r(t <= 67108863);
                        for (var i = (1 << 26) % t, n = 0, o = this.length - 1; o >= 0; o--) n = (i * n + (0 | this.words[o])) % t;
                        return e ? -n : n
                    }, o.prototype.modn = function(t) {
                        return this.modrn(t)
                    }, o.prototype.idivn = function(t) {
                        var e = t < 0;
                        e && (t = -t), r(t <= 67108863);
                        for (var i = 0, n = this.length - 1; n >= 0; n--) {
                            var o = (0 | this.words[n]) + 67108864 * i;
                            this.words[n] = o / t | 0, i = o % t
                        }
                        return this._strip(), e ? this.ineg() : this
                    }, o.prototype.divn = function(t) {
                        return this.clone().idivn(t)
                    }, o.prototype.egcd = function(t) {
                        r(0 === t.negative), r(!t.isZero());
                        var e = this,
                            i = t.clone();
                        e = 0 !== e.negative ? e.umod(t) : e.clone();
                        for (var n = new o(1), s = new o(0), u = new o(0), h = new o(1), a = 0; e.isEven() && i.isEven();) e.iushrn(1), i.iushrn(1), ++a;
                        for (var l = i.clone(), f = e.clone(); !e.isZero();) {
                            for (var c = 0, d = 1; 0 == (e.words[0] & d) && c < 26; ++c, d <<= 1);
                            if (c > 0)
                                for (e.iushrn(c); c-- > 0;)(n.isOdd() || s.isOdd()) && (n.iadd(l), s.isub(f)), n.iushrn(1), s.iushrn(1);
                            for (var m = 0, p = 1; 0 == (i.words[0] & p) && m < 26; ++m, p <<= 1);
                            if (m > 0)
                                for (i.iushrn(m); m-- > 0;)(u.isOdd() || h.isOdd()) && (u.iadd(l), h.isub(f)), u.iushrn(1), h.iushrn(1);
                            e.cmp(i) >= 0 ? (e.isub(i), n.isub(u), s.isub(h)) : (i.isub(e), u.isub(n), h.isub(s))
                        }
                        return {
                            a: u,
                            b: h,
                            gcd: i.iushln(a)
                        }
                    }, o.prototype._invmp = function(t) {
                        r(0 === t.negative), r(!t.isZero());
                        var e = this,
                            i = t.clone();
                        e = 0 !== e.negative ? e.umod(t) : e.clone();
                        for (var n, s = new o(1), u = new o(0), h = i.clone(); e.cmpn(1) > 0 && i.cmpn(1) > 0;) {
                            for (var a = 0, l = 1; 0 == (e.words[0] & l) && a < 26; ++a, l <<= 1);
                            if (a > 0)
                                for (e.iushrn(a); a-- > 0;) s.isOdd() && s.iadd(h), s.iushrn(1);
                            for (var f = 0, c = 1; 0 == (i.words[0] & c) && f < 26; ++f, c <<= 1);
                            if (f > 0)
                                for (i.iushrn(f); f-- > 0;) u.isOdd() && u.iadd(h), u.iushrn(1);
                            e.cmp(i) >= 0 ? (e.isub(i), s.isub(u)) : (i.isub(e), u.isub(s))
                        }
                        return (n = 0 === e.cmpn(1) ? s : u).cmpn(0) < 0 && n.iadd(t), n
                    }, o.prototype.gcd = function(t) {
                        if (this.isZero()) return t.abs();
                        if (t.isZero()) return this.abs();
                        var e = this.clone(),
                            i = t.clone();
                        e.negative = 0, i.negative = 0;
                        for (var r = 0; e.isEven() && i.isEven(); r++) e.iushrn(1), i.iushrn(1);
                        for (;;) {
                            for (; e.isEven();) e.iushrn(1);
                            for (; i.isEven();) i.iushrn(1);
                            var n = e.cmp(i);
                            if (n < 0) {
                                var o = e;
                                e = i, i = o
                            } else if (0 === n || 0 === i.cmpn(1)) break;
                            e.isub(i)
                        }
                        return i.iushln(r)
                    }, o.prototype.invm = function(t) {
                        return this.egcd(t).a.umod(t)
                    }, o.prototype.isEven = function() {
                        return 0 == (1 & this.words[0])
                    }, o.prototype.isOdd = function() {
                        return 1 == (1 & this.words[0])
                    }, o.prototype.andln = function(t) {
                        return this.words[0] & t
                    }, o.prototype.bincn = function(t) {
                        r("number" == typeof t);
                        var e = t % 26,
                            i = (t - e) / 26,
                            n = 1 << e;
                        if (this.length <= i) return this._expand(i + 1), this.words[i] |= n, this;
                        for (var o = n, s = i; 0 !== o && s < this.length; s++) {
                            var u = 0 | this.words[s];
                            o = (u += o) >>> 26, u &= 67108863, this.words[s] = u
                        }
                        return 0 !== o && (this.words[s] = o, this.length++), this
                    }, o.prototype.isZero = function() {
                        return 1 === this.length && 0 === this.words[0]
                    }, o.prototype.cmpn = function(t) {
                        var e, i = t < 0;
                        if (0 !== this.negative && !i) return -1;
                        if (0 === this.negative && i) return 1;
                        if (this._strip(), this.length > 1) e = 1;
                        else {
                            i && (t = -t), r(t <= 67108863, "Number is too big");
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
                        for (var e = 0, i = this.length - 1; i >= 0; i--) {
                            var r = 0 | this.words[i],
                                n = 0 | t.words[i];
                            if (r !== n) {
                                r < n ? e = -1 : r > n && (e = 1);
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
                        return r(!this.red, "Already a number in reduction context"), r(0 === this.negative, "red works only with positives"), t.convertTo(this)._forceRed(t)
                    }, o.prototype.fromRed = function() {
                        return r(this.red, "fromRed works only with numbers in reduction context"), this.red.convertFrom(this)
                    }, o.prototype._forceRed = function(t) {
                        return this.red = t, this
                    }, o.prototype.forceRed = function(t) {
                        return r(!this.red, "Already a number in reduction context"), this._forceRed(t)
                    }, o.prototype.redAdd = function(t) {
                        return r(this.red, "redAdd works only with red numbers"), this.red.add(this, t)
                    }, o.prototype.redIAdd = function(t) {
                        return r(this.red, "redIAdd works only with red numbers"), this.red.iadd(this, t)
                    }, o.prototype.redSub = function(t) {
                        return r(this.red, "redSub works only with red numbers"), this.red.sub(this, t)
                    }, o.prototype.redISub = function(t) {
                        return r(this.red, "redISub works only with red numbers"), this.red.isub(this, t)
                    }, o.prototype.redShl = function(t) {
                        return r(this.red, "redShl works only with red numbers"), this.red.shl(this, t)
                    }, o.prototype.redMul = function(t) {
                        return r(this.red, "redMul works only with red numbers"), this.red._verify2(this, t), this.red.mul(this, t)
                    }, o.prototype.redIMul = function(t) {
                        return r(this.red, "redMul works only with red numbers"), this.red._verify2(this, t), this.red.imul(this, t)
                    }, o.prototype.redSqr = function() {
                        return r(this.red, "redSqr works only with red numbers"), this.red._verify1(this), this.red.sqr(this)
                    }, o.prototype.redISqr = function() {
                        return r(this.red, "redISqr works only with red numbers"), this.red._verify1(this), this.red.isqr(this)
                    }, o.prototype.redSqrt = function() {
                        return r(this.red, "redSqrt works only with red numbers"), this.red._verify1(this), this.red.sqrt(this)
                    }, o.prototype.redInvm = function() {
                        return r(this.red, "redInvm works only with red numbers"), this.red._verify1(this), this.red.invm(this)
                    }, o.prototype.redNeg = function() {
                        return r(this.red, "redNeg works only with red numbers"), this.red._verify1(this), this.red.neg(this)
                    }, o.prototype.redPow = function(t) {
                        return r(this.red && !t.red, "redPow(normalNum)"), this.red._verify1(this), this.red.pow(this, t)
                    };
                    var y = {
                        k256: null,
                        p224: null,
                        p192: null,
                        p25519: null
                    };

                    function b(t, e) {
                        this.name = t, this.p = new o(e, 16), this.n = this.p.bitLength(), this.k = new o(1).iushln(this.n).isub(this.p), this.tmp = this._tmp()
                    }

                    function _() {
                        b.call(this, "k256", "ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffe fffffc2f")
                    }

                    function A() {
                        b.call(this, "p224", "ffffffff ffffffff ffffffff ffffffff 00000000 00000000 00000001")
                    }

                    function N() {
                        b.call(this, "p192", "ffffffff ffffffff ffffffff fffffffe ffffffff ffffffff")
                    }

                    function B() {
                        b.call(this, "25519", "7fffffffffffffff ffffffffffffffff ffffffffffffffff ffffffffffffffed")
                    }

                    function S(t) {
                        if ("string" == typeof t) {
                            var e = o._prime(t);
                            this.m = e.p, this.prime = e
                        } else r(t.gtn(1), "modulus must be greater than 1"), this.m = t, this.prime = null
                    }

                    function k(t) {
                        S.call(this, t), this.shift = this.m.bitLength(), this.shift % 26 != 0 && (this.shift += 26 - this.shift % 26), this.r = new o(1).iushln(this.shift), this.r2 = this.imod(this.r.sqr()), this.rinv = this.r._invmp(this.m), this.minv = this.rinv.mul(this.r).isubn(1).div(this.m), this.minv = this.minv.umod(this.r), this.minv = this.r.sub(this.minv)
                    }
                    b.prototype._tmp = function() {
                        var t = new o(null);
                        return t.words = new Array(Math.ceil(this.n / 13)), t
                    }, b.prototype.ireduce = function(t) {
                        var e, i = t;
                        do {
                            this.split(i, this.tmp), e = (i = (i = this.imulK(i)).iadd(this.tmp)).bitLength()
                        } while (e > this.n);
                        var r = e < this.n ? -1 : i.ucmp(this.p);
                        return 0 === r ? (i.words[0] = 0, i.length = 1) : r > 0 ? i.isub(this.p) : void 0 !== i.strip ? i.strip() : i._strip(), i
                    }, b.prototype.split = function(t, e) {
                        t.iushrn(this.n, 0, e)
                    }, b.prototype.imulK = function(t) {
                        return t.imul(this.k)
                    }, n(_, b), _.prototype.split = function(t, e) {
                        for (var i = Math.min(t.length, 9), r = 0; r < i; r++) e.words[r] = t.words[r];
                        if (e.length = i, t.length <= 9) return t.words[0] = 0, void(t.length = 1);
                        var n = t.words[9];
                        for (e.words[e.length++] = 4194303 & n, r = 10; r < t.length; r++) {
                            var o = 0 | t.words[r];
                            t.words[r - 10] = (4194303 & o) << 4 | n >>> 22, n = o
                        }
                        n >>>= 22, t.words[r - 10] = n, 0 === n && t.length > 10 ? t.length -= 10 : t.length -= 9
                    }, _.prototype.imulK = function(t) {
                        t.words[t.length] = 0, t.words[t.length + 1] = 0, t.length += 2;
                        for (var e = 0, i = 0; i < t.length; i++) {
                            var r = 0 | t.words[i];
                            e += 977 * r, t.words[i] = 67108863 & e, e = 64 * r + (e / 67108864 | 0)
                        }
                        return 0 === t.words[t.length - 1] && (t.length--, 0 === t.words[t.length - 1] && t.length--), t
                    }, n(A, b), n(N, b), n(B, b), B.prototype.imulK = function(t) {
                        for (var e = 0, i = 0; i < t.length; i++) {
                            var r = 19 * (0 | t.words[i]) + e,
                                n = 67108863 & r;
                            r >>>= 26, t.words[i] = n, e = r
                        }
                        return 0 !== e && (t.words[t.length++] = e), t
                    }, o._prime = function(t) {
                        if (y[t]) return y[t];
                        var e;
                        if ("k256" === t) e = new _;
                        else if ("p224" === t) e = new A;
                        else if ("p192" === t) e = new N;
                        else {
                            if ("p25519" !== t) throw new Error("Unknown prime " + t);
                            e = new B
                        }
                        return y[t] = e, e
                    }, S.prototype._verify1 = function(t) {
                        r(0 === t.negative, "red works only with positives"), r(t.red, "red works only with red numbers")
                    }, S.prototype._verify2 = function(t, e) {
                        r(0 == (t.negative | e.negative), "red works only with positives"), r(t.red && t.red === e.red, "red works only with red numbers")
                    }, S.prototype.imod = function(t) {
                        return this.prime ? this.prime.ireduce(t)._forceRed(this) : (l(t, t.umod(this.m)._forceRed(this)), t)
                    }, S.prototype.neg = function(t) {
                        return t.isZero() ? t.clone() : this.m.sub(t)._forceRed(this)
                    }, S.prototype.add = function(t, e) {
                        this._verify2(t, e);
                        var i = t.add(e);
                        return i.cmp(this.m) >= 0 && i.isub(this.m), i._forceRed(this)
                    }, S.prototype.iadd = function(t, e) {
                        this._verify2(t, e);
                        var i = t.iadd(e);
                        return i.cmp(this.m) >= 0 && i.isub(this.m), i
                    }, S.prototype.sub = function(t, e) {
                        this._verify2(t, e);
                        var i = t.sub(e);
                        return i.cmpn(0) < 0 && i.iadd(this.m), i._forceRed(this)
                    }, S.prototype.isub = function(t, e) {
                        this._verify2(t, e);
                        var i = t.isub(e);
                        return i.cmpn(0) < 0 && i.iadd(this.m), i
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
                        if (r(e % 2 == 1), 3 === e) {
                            var i = this.m.add(new o(1)).iushrn(2);
                            return this.pow(t, i)
                        }
                        for (var n = this.m.subn(1), s = 0; !n.isZero() && 0 === n.andln(1);) s++, n.iushrn(1);
                        r(!n.isZero());
                        var u = new o(1).toRed(this),
                            h = u.redNeg(),
                            a = this.m.subn(1).iushrn(1),
                            l = this.m.bitLength();
                        for (l = new o(2 * l * l).toRed(this); 0 !== this.pow(l, a).cmp(h);) l.redIAdd(h);
                        for (var f = this.pow(l, n), c = this.pow(t, n.addn(1).iushrn(1)), d = this.pow(t, n), m = s; 0 !== d.cmp(u);) {
                            for (var p = d, g = 0; 0 !== p.cmp(u); g++) p = p.redSqr();
                            r(g < m);
                            var v = this.pow(f, new o(1).iushln(m - g - 1));
                            c = c.redMul(v), f = v.redSqr(), d = d.redMul(f), m = g
                        }
                        return c
                    }, S.prototype.invm = function(t) {
                        var e = t._invmp(this.m);
                        return 0 !== e.negative ? (e.negative = 0, this.imod(e).redNeg()) : this.imod(e)
                    }, S.prototype.pow = function(t, e) {
                        if (e.isZero()) return new o(1).toRed(this);
                        if (0 === e.cmpn(1)) return t.clone();
                        var i = new Array(16);
                        i[0] = new o(1).toRed(this), i[1] = t;
                        for (var r = 2; r < i.length; r++) i[r] = this.mul(i[r - 1], t);
                        var n = i[0],
                            s = 0,
                            u = 0,
                            h = e.bitLength() % 26;
                        for (0 === h && (h = 26), r = e.length - 1; r >= 0; r--) {
                            for (var a = e.words[r], l = h - 1; l >= 0; l--) {
                                var f = a >> l & 1;
                                n !== i[0] && (n = this.sqr(n)), 0 !== f || 0 !== s ? (s <<= 1, s |= f, (4 === ++u || 0 === r && 0 === l) && (n = this.mul(n, i[s]), u = 0, s = 0)) : u = 0
                            }
                            h = 26
                        }
                        return n
                    }, S.prototype.convertTo = function(t) {
                        var e = t.umod(this.m);
                        return e === t ? e.clone() : e
                    }, S.prototype.convertFrom = function(t) {
                        var e = t.clone();
                        return e.red = null, e
                    }, o.mont = function(t) {
                        return new k(t)
                    }, n(k, S), k.prototype.convertTo = function(t) {
                        return this.imod(t.ushln(this.shift))
                    }, k.prototype.convertFrom = function(t) {
                        var e = this.imod(t.mul(this.rinv));
                        return e.red = null, e
                    }, k.prototype.imul = function(t, e) {
                        if (t.isZero() || e.isZero()) return t.words[0] = 0, t.length = 1, t;
                        var i = t.imul(e),
                            r = i.maskn(this.shift).mul(this.minv).imaskn(this.shift).mul(this.m),
                            n = i.isub(r).iushrn(this.shift),
                            o = n;
                        return n.cmp(this.m) >= 0 ? o = n.isub(this.m) : n.cmpn(0) < 0 && (o = n.iadd(this.m)), o._forceRed(this)
                    }, k.prototype.mul = function(t, e) {
                        if (t.isZero() || e.isZero()) return new o(0)._forceRed(this);
                        var i = t.mul(e),
                            r = i.maskn(this.shift).mul(this.minv).imaskn(this.shift).mul(this.m),
                            n = i.isub(r).iushrn(this.shift),
                            s = n;
                        return n.cmp(this.m) >= 0 ? s = n.isub(this.m) : n.cmpn(0) < 0 && (s = n.iadd(this.m)), s._forceRed(this)
                    }, k.prototype.invm = function(t) {
                        return this.imod(t._invmp(this.m).mul(this.r2))._forceRed(this)
                    }
                }(t, this)
            }).call(this, i(81)(t))
        },
        7233: function(t, e, i) {
            "use strict";
            var r = i(53),
                n = i(6043),
                o = i(6044).normalizeNodes,
                s = i(6044).dropsToXRP;

            function u(t) {
                return new n(t.value || t)
            }

            function h(t) {
                var e = null;
                return t.newFields.Balance ? e = u(t.newFields.Balance) : t.previousFields.Balance && t.finalFields.Balance && (e = u(t.finalFields.Balance).minus(u(t.previousFields.Balance))), null === e || e.isZero() ? null : e
            }

            function a(t) {
                return t.newFields.Balance ? u(t.newFields.Balance) : t.finalFields.Balance ? u(t.finalFields.Balance) : null
            }

            function l(t, e) {
                var i = e(t);
                return null === i ? null : {
                    address: t.finalFields.Account || t.newFields.Account,
                    balance: {
                        counterparty: "",
                        currency: "XRP",
                        value: s(i).toString()
                    }
                }
            }

            function f(t, e) {
                var i, s, u = o(t).map((function(t) {
                    return "AccountRoot" === t.entryType ? [l(t, e)] : "RippleState" === t.entryType ? function(t, e) {
                        var i = e(t);
                        if (null === i) return null;
                        var o, s, u = r.isEmpty(t.newFields) ? t.finalFields : t.newFields,
                            h = {
                                address: u.LowLimit.issuer,
                                balance: {
                                    counterparty: u.HighLimit.issuer,
                                    currency: u.Balance.currency,
                                    value: i.toString()
                                }
                            };
                        return [h, (o = h, s = new n(o.balance.value).negated(), {
                            address: o.balance.counterparty,
                            balance: {
                                counterparty: o.address,
                                currency: o.balance.currency,
                                value: s.toString()
                            }
                        })]
                    }(t, e) : []
                }));
                return i = r.compact(r.flatten(u)), s = r.groupBy(i, (function(t) {
                    return t.address
                })), r.mapValues(s, (function(t) {
                    return r.map(t, (function(t) {
                        return t.balance
                    }))
                }))
            }
            t.exports.parseBalanceChanges = function(t) {
                return f(t, h)
            }, t.exports.parseFinalBalances = function(t) {
                return f(t, a)
            }
        },
        9190: function(t, e, i) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.accountPublicFromPublicGenerator = e.derivePrivateKey = void 0;
            const r = i(85),
                n = i(9191),
                o = r.ec("secp256k1");

            function s(t, e) {
                const i = o.curve.n;
                for (let r = 0; r <= 4294967295; r++) {
                    const o = (new n.default).add(t);
                    void 0 !== e && o.addU32(e), o.addU32(r);
                    const s = o.first256BN();
                    if (s.cmpn(0) > 0 && s.cmp(i) < 0) return s
                }
                throw new Error("impossible unicorn ;)")
            }
            e.derivePrivateKey = function(t, e = {}) {
                const i = e.validator,
                    r = o.curve.n,
                    n = s(t);
                if (i) return n;
                const u = o.g.mul(n),
                    h = e.accountIndex || 0;
                return s(u.encodeCompressed(), h).add(n).mod(r)
            }, e.accountPublicFromPublicGenerator = function(t) {
                const e = o.curve.decodePoint(t),
                    i = s(t, 0),
                    r = o.g.mul(i);
                return e.add(r).encodeCompressed()
            }
        },
        9191: function(t, e, i) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            });
            const r = i(141),
                n = i(7227);
            e.default = class Sha512 {
                constructor() {
                    this.hash = r.sha512()
                }
                add(t) {
                    return this.hash.update(t), this
                }
                addU32(t) {
                    return this.add([t >>> 24 & 255, t >>> 16 & 255, t >>> 8 & 255, 255 & t])
                }
                finish() {
                    return this.hash.digest()
                }
                first256() {
                    return this.finish().slice(0, 32)
                }
                first256BN() {
                    return new n(this.first256())
                }
            }
        },
        9192: function(t, e, i) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.computePublicKeyHash = e.hexToBytes = e.bytesToHex = void 0;
            const r = i(72),
                n = i(141),
                o = i(7227);
            e.bytesToHex = function(t) {
                return t.map(t => {
                    const e = t.toString(16).toUpperCase();
                    return e.length > 1 ? e : "0" + e
                }).join("")
            }, e.hexToBytes = function(t) {
                return r(t.length % 2 == 0), new o(t, 16).toArray(null, t.length / 2)
            }, e.computePublicKeyHash = function(t) {
                const e = n.sha256().update(t).digest(),
                    i = n.ripemd160().update(e).digest();
                return Buffer.from(i)
            }
        },
        9321: function(t, e, i) {
            "use strict";
            t.exports.parseBalanceChanges = i(7233).parseBalanceChanges, t.exports.parseFinalBalances = i(7233).parseFinalBalances, t.exports.parseOrderbookChanges = i(9322).parseOrderbookChanges, t.exports.getAffectedAccounts = i(6044).getAffectedAccounts, t.exports.parseChannelChanges = i(9324).parseChannelChanges
        },
        9322: function(t, e, i) {
            "use strict";
            var r = i(53),
                n = i(6044),
                o = i(6043).clone({
                    DECIMAL_PLACES: 40
                }),
                s = i(9323);

            function u(t) {
                var e, i = t.taker_gets,
                    n = t.taker_pays,
                    o = t.sell ? "sell" : "buy";
                return e = {
                    direction: o,
                    quantity: "buy" === o ? n : i,
                    totalPrice: "buy" === o ? i : n,
                    sequence: t.sequence,
                    status: t.status,
                    makerExchangeRate: t.quality,
                    expirationTime: t.expiration
                }, r.omitBy(e, r.isUndefined)
            }

            function h(t) {
                var e, i = t.finalFields.Expiration || t.newFields.Expiration;
                if (void 0 !== i) return new Date((e = i, 1e3 * (e + 946684800))).toISOString()
            }

            function a(t) {
                var e = t.finalFields.TakerGets || t.newFields.TakerGets,
                    i = t.finalFields.TakerPays || t.newFields.TakerPays,
                    r = e.currency || "XRP",
                    n = i.currency || "XRP",
                    o = t.finalFields.BookDirectory || t.newFields.BookDirectory,
                    u = o.substring(o.length - 16);
                return s(u, r, n)
            }

            function l(t) {
                return "CreatedNode" === t.diffType ? "created" : "ModifiedNode" === t.diffType ? "partially-filled" : "DeletedNode" === t.diffType ? t.previousFields.hasOwnProperty("TakerPays") ? "filled" : "cancelled" : void 0
            }

            function f(t, e) {
                var i = l(t);
                if ("cancelled" === i) return n.parseCurrencyAmount(t.finalFields[e]);
                if ("created" === i) return n.parseCurrencyAmount(t.newFields[e]);
                var s = n.parseCurrencyAmount(t.finalFields[e]),
                    u = function(t, e) {
                        if (e) {
                            var i = new o(t.value),
                                r = new o(e.value);
                            return i.minus(r).abs().toString()
                        }
                        return "0"
                    }(s, n.parseCurrencyAmount(t.previousFields[e]));
                return r.assign({}, s, {
                    value: u
                })
            }

            function c(t) {
                var e = u({
                    taker_pays: f(t, "TakerPays"),
                    taker_gets: f(t, "TakerGets"),
                    sell: 0 != (131072 & t.finalFields.Flags),
                    sequence: t.finalFields.Sequence || t.newFields.Sequence,
                    status: l(t),
                    quality: a(t),
                    expiration: h(t)
                });
                return Object.defineProperty(e, "account", {
                    value: t.finalFields.Account || t.newFields.Account
                }), e
            }
            e.parseOrderbookChanges = function(t) {
                var e = n.normalizeNodes(t);
                return function(t) {
                    return r.groupBy(t, (function(t) {
                        return t.account
                    }))
                }(r.map(r.filter(e, (function(t) {
                    return "Offer" === t.entryType
                })), c))
            }
        },
        9323: function(t, e, i) {
            "use strict";
            var r = i(72),
                n = i(6043);
            t.exports = function(t, e, i) {
                r(16 === t.length);
                var o = new n(t.substring(2), 16),
                    s = parseInt(t.substring(0, 2), 16) - 100;
                return function(t, e, i) {
                    var r = ("XRP" === i ? -6 : 0) - ("XRP" === e ? -6 : 0);
                    return 0 === r ? new n(t).toString() : new n(t).shiftedBy(r).toString()
                }(o.toString() + "e" + s.toString(), e, i)
            }
        },
        9324: function(t, e, i) {
            "use strict";
            const r = i(6044).normalizeNodes,
                n = i(6043);

            function o(t) {
                return "CreatedNode" === t.diffType ? "created" : "ModifiedNode" === t.diffType ? "modified" : "DeletedNode" === t.diffType ? "deleted" : void 0
            }
            t.exports.parseChannelChanges = function(t) {
                const e = r(t).filter(t => "PayChannel" === t.entryType);
                return 1 === e.length ? function(t) {
                    const e = "CreatedNode" === t.diffType ? t.newFields : t.finalFields,
                        i = t.previousFields || {},
                        r = {
                            status: o(t),
                            channelId: t.ledgerIndex,
                            source: e.Account,
                            destination: e.Destination,
                            channelAmountDrops: new n(e.Amount || 0).toString(10),
                            channelBalanceDrops: new n(e.Balance || 0).toString(10)
                        };
                    return i.Amount && (r.channelAmountChangeDrops = new n(e.Amount).minus(new n(i.Amount || 0)).toString(10)), i.Balance && (r.channelBalanceChangeDrops = new n(e.Balance).minus(new n(i.Balance || 0)).toString(10)), t.PreviousTxnID && (r.previousTxnId = t.PreviousTxnID), r
                }(e[0]) : void 0
            }
        }
    }
]);