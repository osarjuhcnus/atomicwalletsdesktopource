/*! For license information please see vendors.c61aea130277c251446f.js.LICENSE.txt */
(window.webpackJsonp = window.webpackJsonp || []).push([
    [150], {
        1866: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.u256be = t.u256 = t.u192be = t.u192 = t.u128be = t.u128 = t.u64be = t.u64 = t.bigIntBE = t.bigInt = void 0;
            const n = r(4),
                o = r(453),
                i = r(504);
            t.bigInt = e => t => {
                const r = (0, n.blob)(e, t),
                    {
                        encode: s,
                        decode: a
                    } = (0, i.encodeDecode)(r),
                    c = r;
                return c.decode = (e, t) => {
                    const r = a(e, t);
                    return (0, o.toBigIntLE)(Buffer.from(r))
                }, c.encode = (t, r, n) => {
                    const i = (0, o.toBufferLE)(t, e);
                    return s(i, r, n)
                }, c
            };
            t.bigIntBE = e => t => {
                const r = (0, n.blob)(e, t),
                    {
                        encode: s,
                        decode: a
                    } = (0, i.encodeDecode)(r),
                    c = r;
                return c.decode = (e, t) => {
                    const r = a(e, t);
                    return (0, o.toBigIntBE)(Buffer.from(r))
                }, c.encode = (t, r, n) => {
                    const i = (0, o.toBufferBE)(t, e);
                    return s(i, r, n)
                }, c
            }, t.u64 = (0, t.bigInt)(8), t.u64be = (0, t.bigIntBE)(8), t.u128 = (0, t.bigInt)(16), t.u128be = (0, t.bigIntBE)(16), t.u192 = (0, t.bigInt)(24), t.u192be = (0, t.bigIntBE)(24), t.u256 = (0, t.bigInt)(32), t.u256be = (0, t.bigIntBE)(32)
        },
        1969: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.SHA2 = void 0;
            const n = r(648),
                o = r(424);
            class SHA2 extends o.Hash {
                constructor(e, t, r, n) {
                    super(), this.blockLen = e, this.outputLen = t, this.padOffset = r, this.isLE = n, this.finished = !1, this.length = 0, this.pos = 0, this.destroyed = !1, this.buffer = new Uint8Array(e), this.view = (0, o.createView)(this.buffer)
                }
                update(e) {
                    n.default.exists(this);
                    const {
                        view: t,
                        buffer: r,
                        blockLen: i
                    } = this, s = (e = (0, o.toBytes)(e)).length;
                    for (let n = 0; n < s;) {
                        const a = Math.min(i - this.pos, s - n);
                        if (a !== i) r.set(e.subarray(n, n + a), this.pos), this.pos += a, n += a, this.pos === i && (this.process(t, 0), this.pos = 0);
                        else {
                            const t = (0, o.createView)(e);
                            for (; i <= s - n; n += i) this.process(t, n)
                        }
                    }
                    return this.length += e.length, this.roundClean(), this
                }
                digestInto(e) {
                    n.default.exists(this), n.default.output(e, this), this.finished = !0;
                    const {
                        buffer: t,
                        view: r,
                        blockLen: i,
                        isLE: s
                    } = this;
                    let {
                        pos: a
                    } = this;
                    t[a++] = 128, this.buffer.subarray(a).fill(0), this.padOffset > i - a && (this.process(r, 0), a = 0);
                    for (let e = a; e < i; e++) t[e] = 0;
                    ! function(e, t, r, n) {
                        if ("function" == typeof e.setBigUint64) return e.setBigUint64(t, r, n);
                        const o = BigInt(32),
                            i = BigInt(4294967295),
                            s = Number(r >> o & i),
                            a = Number(r & i),
                            c = n ? 4 : 0,
                            u = n ? 0 : 4;
                        e.setUint32(t + c, s, n), e.setUint32(t + u, a, n)
                    }(r, i - 8, BigInt(8 * this.length), s), this.process(r, 0);
                    const c = (0, o.createView)(e),
                        u = this.outputLen;
                    if (u % 4) throw new Error("_sha2: outputLen should be aligned to 32bit");
                    const f = u / 4,
                        h = this.get();
                    if (f > h.length) throw new Error("_sha2: outputLen bigger than state");
                    for (let e = 0; e < f; e++) c.setUint32(4 * e, h[e], s)
                }
                digest() {
                    const {
                        buffer: e,
                        outputLen: t
                    } = this;
                    this.digestInto(e);
                    const r = e.slice(0, t);
                    return this.destroy(), r
                }
                _cloneInto(e) {
                    e || (e = new this.constructor), e.set(...this.get());
                    const {
                        blockLen: t,
                        buffer: r,
                        length: n,
                        finished: o,
                        destroyed: i,
                        pos: s
                    } = this;
                    return e.length = n, e.pos = s, e.finished = o, e.destroyed = i, n % t && e.buffer.set(r), e
                }
            }
            t.SHA2 = SHA2
        },
        2333: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.mnemonicToSeedSync = t.mnemonicToSeed = t.validateMnemonic = t.entropyToMnemonic = t.mnemonicToEntropy = t.generateMnemonic = void 0;
            const n = r(648),
                o = r(3936),
                i = r(3939),
                s = r(3940),
                a = r(424),
                c = r(3942);

            function u(e) {
                if ("string" != typeof e) throw new TypeError("Invalid mnemonic type: " + typeof e);
                return e.normalize("NFKD")
            }

            function f(e) {
                const t = u(e),
                    r = t.split(" ");
                if (![12, 15, 18, 21, 24].includes(r.length)) throw new Error("Invalid mnemonic");
                return {
                    nfkd: t,
                    words: r
                }
            }

            function h(e) {
                n.default.bytes(e, 16, 20, 24, 28, 32)
            }
            t.generateMnemonic = function(e, t = 128) {
                if (n.default.number(t), t % 32 != 0 || t > 256) throw new TypeError("Invalid entropy");
                return y((0, a.randomBytes)(t / 8), e)
            };
            const l = e => {
                const t = 8 - e.length / 4;
                return new Uint8Array([(0, i.sha256)(e)[0] >> t << t])
            };

            function d(e) {
                if (!Array.isArray(e) || 2048 !== e.length || "string" != typeof e[0]) throw new Error("Worlist: expected array of 2048 strings");
                return e.forEach(e => {
                    if ("string" != typeof e) throw new Error("Wordlist: non-string element: " + e)
                }), c.utils.chain(c.utils.checksum(1, l), c.utils.radix2(11, !0), c.utils.alphabet(e))
            }

            function p(e, t) {
                const {
                    words: r
                } = f(e), n = d(t).decode(r);
                return h(n), n
            }

            function y(e, t) {
                h(e);
                return d(t).encode(e).join((e => "あいこくしん" === e[0])(t) ? "　" : " ")
            }
            t.mnemonicToEntropy = p, t.entropyToMnemonic = y, t.validateMnemonic = function(e, t) {
                try {
                    p(e, t)
                } catch (e) {
                    return !1
                }
                return !0
            };
            const w = e => u("mnemonic" + e);
            t.mnemonicToSeed = function(e, t = "") {
                return (0, o.pbkdf2Async)(s.sha512, f(e).nfkd, w(t), {
                    c: 2048,
                    dkLen: 64
                })
            }, t.mnemonicToSeedSync = function(e, t = "") {
                return (0, o.pbkdf2)(s.sha512, f(e).nfkd, w(t), {
                    c: 2048,
                    dkLen: 64
                })
            }
        },
        3641: function(e, t, r) {
            "use strict";
            var n = this && this.__importDefault || function(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            };
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.decimal = t.WAD = void 0;
            const o = n(r(3642)),
                i = r(504),
                s = r(1866);
            t.WAD = new o.default("1e+18");
            t.decimal = e => {
                const r = (0, s.u128)(e),
                    {
                        encode: n,
                        decode: a
                    } = (0, i.encodeDecode)(r),
                    c = r;
                return c.decode = (e, r) => {
                    const n = a(e, r).toString();
                    return new o.default(n).div(t.WAD)
                }, c.encode = (e, r, o) => {
                    const i = BigInt(e.times(t.WAD).integerValue().toString());
                    return n(i, r, o)
                }, c
            }
        },
        3642: function(e, t, r) {
            var n;
            ! function(o) {
                "use strict";
                var i, s = /^-?(?:\d+(?:\.\d*)?|\.\d+)(?:e[+-]?\d+)?$/i,
                    a = Math.ceil,
                    c = Math.floor,
                    u = "[BigNumber Error] ",
                    f = u + "Number primitive has more than 15 significant digits: ",
                    h = 1e14,
                    l = [1, 10, 100, 1e3, 1e4, 1e5, 1e6, 1e7, 1e8, 1e9, 1e10, 1e11, 1e12, 1e13],
                    d = 1e9;

                function p(e) {
                    var t = 0 | e;
                    return e > 0 || e === t ? t : t - 1
                }

                function y(e) {
                    for (var t, r, n = 1, o = e.length, i = e[0] + ""; n < o;) {
                        for (r = 14 - (t = e[n++] + "").length; r--; t = "0" + t);
                        i += t
                    }
                    for (o = i.length; 48 === i.charCodeAt(--o););
                    return i.slice(0, o + 1 || 1)
                }

                function w(e, t) {
                    var r, n, o = e.c,
                        i = t.c,
                        s = e.s,
                        a = t.s,
                        c = e.e,
                        u = t.e;
                    if (!s || !a) return null;
                    if (r = o && !o[0], n = i && !i[0], r || n) return r ? n ? 0 : -a : s;
                    if (s != a) return s;
                    if (r = s < 0, n = c == u, !o || !i) return n ? 0 : !o ^ r ? 1 : -1;
                    if (!n) return c > u ^ r ? 1 : -1;
                    for (a = (c = o.length) < (u = i.length) ? c : u, s = 0; s < a; s++)
                        if (o[s] != i[s]) return o[s] > i[s] ^ r ? 1 : -1;
                    return c == u ? 0 : c > u ^ r ? 1 : -1
                }

                function b(e, t, r, n) {
                    if (e < t || e > r || e !== c(e)) throw Error(u + (n || "Argument") + ("number" == typeof e ? e < t || e > r ? " out of range: " : " not an integer: " : " not a primitive number: ") + String(e))
                }

                function g(e) {
                    var t = e.c.length - 1;
                    return p(e.e / 14) == t && e.c[t] % 2 != 0
                }

                function E(e, t) {
                    return (e.length > 1 ? e.charAt(0) + "." + e.slice(1) : e) + (t < 0 ? "e" : "e+") + t
                }

                function m(e, t, r) {
                    var n, o;
                    if (t < 0) {
                        for (o = r + "."; ++t; o += r);
                        e = o + e
                    } else if (++t > (n = e.length)) {
                        for (o = r, t -= n; --t; o += r);
                        e += o
                    } else t < n && (e = e.slice(0, t) + "." + e.slice(t));
                    return e
                }(i = function e(t) {
                    var r, n, o, i, x, L, B, v, A, I = M.prototype = {
                            constructor: M,
                            toString: null,
                            valueOf: null
                        },
                        U = new M(1),
                        S = 20,
                        O = 4,
                        D = -7,
                        H = 21,
                        N = -1e7,
                        T = 1e7,
                        C = !1,
                        k = 1,
                        _ = 0,
                        P = {
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
                        j = !0;

                    function M(e, t) {
                        var r, i, a, u, h, l, d, p, y = this;
                        if (!(y instanceof M)) return new M(e, t);
                        if (null == t) {
                            if (e && !0 === e._isBigNumber) return y.s = e.s, void(!e.c || e.e > T ? y.c = y.e = null : e.e < N ? y.c = [y.e = 0] : (y.e = e.e, y.c = e.c.slice()));
                            if ((l = "number" == typeof e) && 0 * e == 0) {
                                if (y.s = 1 / e < 0 ? (e = -e, -1) : 1, e === ~~e) {
                                    for (u = 0, h = e; h >= 10; h /= 10, u++);
                                    return void(u > T ? y.c = y.e = null : (y.e = u, y.c = [e]))
                                }
                                p = String(e)
                            } else {
                                if (!s.test(p = String(e))) return o(y, p, l);
                                y.s = 45 == p.charCodeAt(0) ? (p = p.slice(1), -1) : 1
                            }(u = p.indexOf(".")) > -1 && (p = p.replace(".", "")), (h = p.search(/e/i)) > 0 ? (u < 0 && (u = h), u += +p.slice(h + 1), p = p.substring(0, h)) : u < 0 && (u = p.length)
                        } else {
                            if (b(t, 2, F.length, "Base"), 10 == t && j) return $(y = new M(e), S + y.e + 1, O);
                            if (p = String(e), l = "number" == typeof e) {
                                if (0 * e != 0) return o(y, p, l, t);
                                if (y.s = 1 / e < 0 ? (p = p.slice(1), -1) : 1, M.DEBUG && p.replace(/^0\.0*|\./, "").length > 15) throw Error(f + e)
                            } else y.s = 45 === p.charCodeAt(0) ? (p = p.slice(1), -1) : 1;
                            for (r = F.slice(0, t), u = h = 0, d = p.length; h < d; h++)
                                if (r.indexOf(i = p.charAt(h)) < 0) {
                                    if ("." == i) {
                                        if (h > u) {
                                            u = d;
                                            continue
                                        }
                                    } else if (!a && (p == p.toUpperCase() && (p = p.toLowerCase()) || p == p.toLowerCase() && (p = p.toUpperCase()))) {
                                        a = !0, h = -1, u = 0;
                                        continue
                                    }
                                    return o(y, String(e), l, t)
                                } l = !1, (u = (p = n(p, t, 10, y.s)).indexOf(".")) > -1 ? p = p.replace(".", "") : u = p.length
                        }
                        for (h = 0; 48 === p.charCodeAt(h); h++);
                        for (d = p.length; 48 === p.charCodeAt(--d););
                        if (p = p.slice(h, ++d)) {
                            if (d -= h, l && M.DEBUG && d > 15 && (e > 9007199254740991 || e !== c(e))) throw Error(f + y.s * e);
                            if ((u = u - h - 1) > T) y.c = y.e = null;
                            else if (u < N) y.c = [y.e = 0];
                            else {
                                if (y.e = u, y.c = [], h = (u + 1) % 14, u < 0 && (h += 14), h < d) {
                                    for (h && y.c.push(+p.slice(0, h)), d -= 14; h < d;) y.c.push(+p.slice(h, h += 14));
                                    h = 14 - (p = p.slice(h)).length
                                } else h -= d;
                                for (; h--; p += "0");
                                y.c.push(+p)
                            }
                        } else y.c = [y.e = 0]
                    }

                    function R(e, t, r, n) {
                        var o, i, s, a, c;
                        if (null == r ? r = O : b(r, 0, 8), !e.c) return e.toString();
                        if (o = e.c[0], s = e.e, null == t) c = y(e.c), c = 1 == n || 2 == n && (s <= D || s >= H) ? E(c, s) : m(c, s, "0");
                        else if (i = (e = $(new M(e), t, r)).e, a = (c = y(e.c)).length, 1 == n || 2 == n && (t <= i || i <= D)) {
                            for (; a < t; c += "0", a++);
                            c = E(c, i)
                        } else if (t -= s, c = m(c, i, "0"), i + 1 > a) {
                            if (--t > 0)
                                for (c += "."; t--; c += "0");
                        } else if ((t += i - a) > 0)
                            for (i + 1 == a && (c += "."); t--; c += "0");
                        return e.s < 0 && o ? "-" + c : c
                    }

                    function G(e, t) {
                        for (var r, n = 1, o = new M(e[0]); n < e.length; n++) {
                            if (!(r = new M(e[n])).s) {
                                o = r;
                                break
                            }
                            t.call(o, r) && (o = r)
                        }
                        return o
                    }

                    function V(e, t, r) {
                        for (var n = 1, o = t.length; !t[--o]; t.pop());
                        for (o = t[0]; o >= 10; o /= 10, n++);
                        return (r = n + 14 * r - 1) > T ? e.c = e.e = null : r < N ? e.c = [e.e = 0] : (e.e = r, e.c = t), e
                    }

                    function $(e, t, r, n) {
                        var o, i, s, u, f, d, p, y = e.c,
                            w = l;
                        if (y) {
                            e: {
                                for (o = 1, u = y[0]; u >= 10; u /= 10, o++);
                                if ((i = t - o) < 0) i += 14,
                                s = t,
                                p = (f = y[d = 0]) / w[o - s - 1] % 10 | 0;
                                else if ((d = a((i + 1) / 14)) >= y.length) {
                                    if (!n) break e;
                                    for (; y.length <= d; y.push(0));
                                    f = p = 0, o = 1, s = (i %= 14) - 14 + 1
                                } else {
                                    for (f = u = y[d], o = 1; u >= 10; u /= 10, o++);
                                    p = (s = (i %= 14) - 14 + o) < 0 ? 0 : f / w[o - s - 1] % 10 | 0
                                }
                                if (n = n || t < 0 || null != y[d + 1] || (s < 0 ? f : f % w[o - s - 1]), n = r < 4 ? (p || n) && (0 == r || r == (e.s < 0 ? 3 : 2)) : p > 5 || 5 == p && (4 == r || n || 6 == r && (i > 0 ? s > 0 ? f / w[o - s] : 0 : y[d - 1]) % 10 & 1 || r == (e.s < 0 ? 8 : 7)), t < 1 || !y[0]) return y.length = 0,
                                n ? (t -= e.e + 1, y[0] = w[(14 - t % 14) % 14], e.e = -t || 0) : y[0] = e.e = 0,
                                e;
                                if (0 == i ? (y.length = d, u = 1, d--) : (y.length = d + 1, u = w[14 - i], y[d] = s > 0 ? c(f / w[o - s] % w[s]) * u : 0), n)
                                    for (;;) {
                                        if (0 == d) {
                                            for (i = 1, s = y[0]; s >= 10; s /= 10, i++);
                                            for (s = y[0] += u, u = 1; s >= 10; s /= 10, u++);
                                            i != u && (e.e++, y[0] == h && (y[0] = 1));
                                            break
                                        }
                                        if (y[d] += u, y[d] != h) break;
                                        y[d--] = 0, u = 1
                                    }
                                for (i = y.length; 0 === y[--i]; y.pop());
                            }
                            e.e > T ? e.c = e.e = null : e.e < N && (e.c = [e.e = 0])
                        }
                        return e
                    }

                    function W(e) {
                        var t, r = e.e;
                        return null === r ? e.toString() : (t = y(e.c), t = r <= D || r >= H ? E(t, r) : m(t, r, "0"), e.s < 0 ? "-" + t : t)
                    }
                    return M.clone = e, M.ROUND_UP = 0, M.ROUND_DOWN = 1, M.ROUND_CEIL = 2, M.ROUND_FLOOR = 3, M.ROUND_HALF_UP = 4, M.ROUND_HALF_DOWN = 5, M.ROUND_HALF_EVEN = 6, M.ROUND_HALF_CEIL = 7, M.ROUND_HALF_FLOOR = 8, M.EUCLID = 9, M.config = M.set = function(e) {
                        var t, r;
                        if (null != e) {
                            if ("object" != typeof e) throw Error(u + "Object expected: " + e);
                            if (e.hasOwnProperty(t = "DECIMAL_PLACES") && (b(r = e[t], 0, d, t), S = r), e.hasOwnProperty(t = "ROUNDING_MODE") && (b(r = e[t], 0, 8, t), O = r), e.hasOwnProperty(t = "EXPONENTIAL_AT") && ((r = e[t]) && r.pop ? (b(r[0], -d, 0, t), b(r[1], 0, d, t), D = r[0], H = r[1]) : (b(r, -d, d, t), D = -(H = r < 0 ? -r : r))), e.hasOwnProperty(t = "RANGE"))
                                if ((r = e[t]) && r.pop) b(r[0], -d, -1, t), b(r[1], 1, d, t), N = r[0], T = r[1];
                                else {
                                    if (b(r, -d, d, t), !r) throw Error(u + t + " cannot be zero: " + r);
                                    N = -(T = r < 0 ? -r : r)
                                } if (e.hasOwnProperty(t = "CRYPTO")) {
                                if ((r = e[t]) !== !!r) throw Error(u + t + " not true or false: " + r);
                                if (r) {
                                    if ("undefined" == typeof crypto || !crypto || !crypto.getRandomValues && !crypto.randomBytes) throw C = !r, Error(u + "crypto unavailable");
                                    C = r
                                } else C = r
                            }
                            if (e.hasOwnProperty(t = "MODULO_MODE") && (b(r = e[t], 0, 9, t), k = r), e.hasOwnProperty(t = "POW_PRECISION") && (b(r = e[t], 0, d, t), _ = r), e.hasOwnProperty(t = "FORMAT")) {
                                if ("object" != typeof(r = e[t])) throw Error(u + t + " not an object: " + r);
                                P = r
                            }
                            if (e.hasOwnProperty(t = "ALPHABET")) {
                                if ("string" != typeof(r = e[t]) || /^.?$|[+\-.\s]|(.).*\1/.test(r)) throw Error(u + t + " invalid: " + r);
                                j = "0123456789" == r.slice(0, 10), F = r
                            }
                        }
                        return {
                            DECIMAL_PLACES: S,
                            ROUNDING_MODE: O,
                            EXPONENTIAL_AT: [D, H],
                            RANGE: [N, T],
                            CRYPTO: C,
                            MODULO_MODE: k,
                            POW_PRECISION: _,
                            FORMAT: P,
                            ALPHABET: F
                        }
                    }, M.isBigNumber = function(e) {
                        if (!e || !0 !== e._isBigNumber) return !1;
                        if (!M.DEBUG) return !0;
                        var t, r, n = e.c,
                            o = e.e,
                            i = e.s;
                        e: if ("[object Array]" == {}.toString.call(n)) {
                            if ((1 === i || -1 === i) && o >= -d && o <= d && o === c(o)) {
                                if (0 === n[0]) {
                                    if (0 === o && 1 === n.length) return !0;
                                    break e
                                }
                                if ((t = (o + 1) % 14) < 1 && (t += 14), String(n[0]).length == t) {
                                    for (t = 0; t < n.length; t++)
                                        if ((r = n[t]) < 0 || r >= h || r !== c(r)) break e;
                                    if (0 !== r) return !0
                                }
                            }
                        } else if (null === n && null === o && (null === i || 1 === i || -1 === i)) return !0;
                        throw Error(u + "Invalid BigNumber: " + e)
                    }, M.maximum = M.max = function() {
                        return G(arguments, I.lt)
                    }, M.minimum = M.min = function() {
                        return G(arguments, I.gt)
                    }, M.random = (i = 9007199254740992 * Math.random() & 2097151 ? function() {
                        return c(9007199254740992 * Math.random())
                    } : function() {
                        return 8388608 * (1073741824 * Math.random() | 0) + (8388608 * Math.random() | 0)
                    }, function(e) {
                        var t, r, n, o, s, f = 0,
                            h = [],
                            p = new M(U);
                        if (null == e ? e = S : b(e, 0, d), o = a(e / 14), C)
                            if (crypto.getRandomValues) {
                                for (t = crypto.getRandomValues(new Uint32Array(o *= 2)); f < o;)(s = 131072 * t[f] + (t[f + 1] >>> 11)) >= 9e15 ? (r = crypto.getRandomValues(new Uint32Array(2)), t[f] = r[0], t[f + 1] = r[1]) : (h.push(s % 1e14), f += 2);
                                f = o / 2
                            } else {
                                if (!crypto.randomBytes) throw C = !1, Error(u + "crypto unavailable");
                                for (t = crypto.randomBytes(o *= 7); f < o;)(s = 281474976710656 * (31 & t[f]) + 1099511627776 * t[f + 1] + 4294967296 * t[f + 2] + 16777216 * t[f + 3] + (t[f + 4] << 16) + (t[f + 5] << 8) + t[f + 6]) >= 9e15 ? crypto.randomBytes(7).copy(t, f) : (h.push(s % 1e14), f += 7);
                                f = o / 7
                            } if (!C)
                            for (; f < o;)(s = i()) < 9e15 && (h[f++] = s % 1e14);
                        for (e %= 14, (o = h[--f]) && e && (s = l[14 - e], h[f] = c(o / s) * s); 0 === h[f]; h.pop(), f--);
                        if (f < 0) h = [n = 0];
                        else {
                            for (n = -1; 0 === h[0]; h.splice(0, 1), n -= 14);
                            for (f = 1, s = h[0]; s >= 10; s /= 10, f++);
                            f < 14 && (n -= 14 - f)
                        }
                        return p.e = n, p.c = h, p
                    }), M.sum = function() {
                        for (var e = 1, t = arguments, r = new M(t[0]); e < t.length;) r = r.plus(t[e++]);
                        return r
                    }, n = function() {
                        function e(e, t, r, n) {
                            for (var o, i, s = [0], a = 0, c = e.length; a < c;) {
                                for (i = s.length; i--; s[i] *= t);
                                for (s[0] += n.indexOf(e.charAt(a++)), o = 0; o < s.length; o++) s[o] > r - 1 && (null == s[o + 1] && (s[o + 1] = 0), s[o + 1] += s[o] / r | 0, s[o] %= r)
                            }
                            return s.reverse()
                        }
                        return function(t, n, o, i, s) {
                            var a, c, u, f, h, l, d, p, w = t.indexOf("."),
                                b = S,
                                g = O;
                            for (w >= 0 && (f = _, _ = 0, t = t.replace(".", ""), l = (p = new M(n)).pow(t.length - w), _ = f, p.c = e(m(y(l.c), l.e, "0"), 10, o, "0123456789"), p.e = p.c.length), u = f = (d = e(t, n, o, s ? (a = F, "0123456789") : (a = "0123456789", F))).length; 0 == d[--f]; d.pop());
                            if (!d[0]) return a.charAt(0);
                            if (w < 0 ? --u : (l.c = d, l.e = u, l.s = i, d = (l = r(l, p, b, g, o)).c, h = l.r, u = l.e), w = d[c = u + b + 1], f = o / 2, h = h || c < 0 || null != d[c + 1], h = g < 4 ? (null != w || h) && (0 == g || g == (l.s < 0 ? 3 : 2)) : w > f || w == f && (4 == g || h || 6 == g && 1 & d[c - 1] || g == (l.s < 0 ? 8 : 7)), c < 1 || !d[0]) t = h ? m(a.charAt(1), -b, a.charAt(0)) : a.charAt(0);
                            else {
                                if (d.length = c, h)
                                    for (--o; ++d[--c] > o;) d[c] = 0, c || (++u, d = [1].concat(d));
                                for (f = d.length; !d[--f];);
                                for (w = 0, t = ""; w <= f; t += a.charAt(d[w++]));
                                t = m(t, u, a.charAt(0))
                            }
                            return t
                        }
                    }(), r = function() {
                        function e(e, t, r) {
                            var n, o, i, s, a = 0,
                                c = e.length,
                                u = t % 1e7,
                                f = t / 1e7 | 0;
                            for (e = e.slice(); c--;) a = ((o = u * (i = e[c] % 1e7) + (n = f * i + (s = e[c] / 1e7 | 0) * u) % 1e7 * 1e7 + a) / r | 0) + (n / 1e7 | 0) + f * s, e[c] = o % r;
                            return a && (e = [a].concat(e)), e
                        }

                        function t(e, t, r, n) {
                            var o, i;
                            if (r != n) i = r > n ? 1 : -1;
                            else
                                for (o = i = 0; o < r; o++)
                                    if (e[o] != t[o]) {
                                        i = e[o] > t[o] ? 1 : -1;
                                        break
                                    } return i
                        }

                        function r(e, t, r, n) {
                            for (var o = 0; r--;) e[r] -= o, o = e[r] < t[r] ? 1 : 0, e[r] = o * n + e[r] - t[r];
                            for (; !e[0] && e.length > 1; e.splice(0, 1));
                        }
                        return function(n, o, i, s, a) {
                            var u, f, l, d, y, w, b, g, E, m, x, L, B, v, A, I, U, S = n.s == o.s ? 1 : -1,
                                O = n.c,
                                D = o.c;
                            if (!(O && O[0] && D && D[0])) return new M(n.s && o.s && (O ? !D || O[0] != D[0] : D) ? O && 0 == O[0] || !D ? 0 * S : S / 0 : NaN);
                            for (E = (g = new M(S)).c = [], S = i + (f = n.e - o.e) + 1, a || (a = h, f = p(n.e / 14) - p(o.e / 14), S = S / 14 | 0), l = 0; D[l] == (O[l] || 0); l++);
                            if (D[l] > (O[l] || 0) && f--, S < 0) E.push(1), d = !0;
                            else {
                                for (v = O.length, I = D.length, l = 0, S += 2, (y = c(a / (D[0] + 1))) > 1 && (D = e(D, y, a), O = e(O, y, a), I = D.length, v = O.length), B = I, x = (m = O.slice(0, I)).length; x < I; m[x++] = 0);
                                U = D.slice(), U = [0].concat(U), A = D[0], D[1] >= a / 2 && A++;
                                do {
                                    if (y = 0, (u = t(D, m, I, x)) < 0) {
                                        if (L = m[0], I != x && (L = L * a + (m[1] || 0)), (y = c(L / A)) > 1)
                                            for (y >= a && (y = a - 1), b = (w = e(D, y, a)).length, x = m.length; 1 == t(w, m, b, x);) y--, r(w, I < b ? U : D, b, a), b = w.length, u = 1;
                                        else 0 == y && (u = y = 1), b = (w = D.slice()).length;
                                        if (b < x && (w = [0].concat(w)), r(m, w, x, a), x = m.length, -1 == u)
                                            for (; t(D, m, I, x) < 1;) y++, r(m, I < x ? U : D, x, a), x = m.length
                                    } else 0 === u && (y++, m = [0]);
                                    E[l++] = y, m[0] ? m[x++] = O[B] || 0 : (m = [O[B]], x = 1)
                                } while ((B++ < v || null != m[0]) && S--);
                                d = null != m[0], E[0] || E.splice(0, 1)
                            }
                            if (a == h) {
                                for (l = 1, S = E[0]; S >= 10; S /= 10, l++);
                                $(g, i + (g.e = l + 14 * f - 1) + 1, s, d)
                            } else g.e = f, g.r = +d;
                            return g
                        }
                    }(), x = /^(-?)0([xbo])(?=\w[\w.]*$)/i, L = /^([^.]+)\.$/, B = /^\.([^.]+)$/, v = /^-?(Infinity|NaN)$/, A = /^\s*\+(?=[\w.])|^\s+|\s+$/g, o = function(e, t, r, n) {
                        var o, i = r ? t : t.replace(A, "");
                        if (v.test(i)) e.s = isNaN(i) ? null : i < 0 ? -1 : 1;
                        else {
                            if (!r && (i = i.replace(x, (function(e, t, r) {
                                    return o = "x" == (r = r.toLowerCase()) ? 16 : "b" == r ? 2 : 8, n && n != o ? e : t
                                })), n && (o = n, i = i.replace(L, "$1").replace(B, "0.$1")), t != i)) return new M(i, o);
                            if (M.DEBUG) throw Error(u + "Not a" + (n ? " base " + n : "") + " number: " + t);
                            e.s = null
                        }
                        e.c = e.e = null
                    }, I.absoluteValue = I.abs = function() {
                        var e = new M(this);
                        return e.s < 0 && (e.s = 1), e
                    }, I.comparedTo = function(e, t) {
                        return w(this, new M(e, t))
                    }, I.decimalPlaces = I.dp = function(e, t) {
                        var r, n, o, i = this;
                        if (null != e) return b(e, 0, d), null == t ? t = O : b(t, 0, 8), $(new M(i), e + i.e + 1, t);
                        if (!(r = i.c)) return null;
                        if (n = 14 * ((o = r.length - 1) - p(this.e / 14)), o = r[o])
                            for (; o % 10 == 0; o /= 10, n--);
                        return n < 0 && (n = 0), n
                    }, I.dividedBy = I.div = function(e, t) {
                        return r(this, new M(e, t), S, O)
                    }, I.dividedToIntegerBy = I.idiv = function(e, t) {
                        return r(this, new M(e, t), 0, 1)
                    }, I.exponentiatedBy = I.pow = function(e, t) {
                        var r, n, o, i, s, f, h, l, d = this;
                        if ((e = new M(e)).c && !e.isInteger()) throw Error(u + "Exponent not an integer: " + W(e));
                        if (null != t && (t = new M(t)), s = e.e > 14, !d.c || !d.c[0] || 1 == d.c[0] && !d.e && 1 == d.c.length || !e.c || !e.c[0]) return l = new M(Math.pow(+W(d), s ? e.s * (2 - g(e)) : +W(e))), t ? l.mod(t) : l;
                        if (f = e.s < 0, t) {
                            if (t.c ? !t.c[0] : !t.s) return new M(NaN);
                            (n = !f && d.isInteger() && t.isInteger()) && (d = d.mod(t))
                        } else {
                            if (e.e > 9 && (d.e > 0 || d.e < -1 || (0 == d.e ? d.c[0] > 1 || s && d.c[1] >= 24e7 : d.c[0] < 8e13 || s && d.c[0] <= 9999975e7))) return i = d.s < 0 && g(e) ? -0 : 0, d.e > -1 && (i = 1 / i), new M(f ? 1 / i : i);
                            _ && (i = a(_ / 14 + 2))
                        }
                        for (s ? (r = new M(.5), f && (e.s = 1), h = g(e)) : h = (o = Math.abs(+W(e))) % 2, l = new M(U);;) {
                            if (h) {
                                if (!(l = l.times(d)).c) break;
                                i ? l.c.length > i && (l.c.length = i) : n && (l = l.mod(t))
                            }
                            if (o) {
                                if (0 === (o = c(o / 2))) break;
                                h = o % 2
                            } else if ($(e = e.times(r), e.e + 1, 1), e.e > 14) h = g(e);
                            else {
                                if (0 === (o = +W(e))) break;
                                h = o % 2
                            }
                            d = d.times(d), i ? d.c && d.c.length > i && (d.c.length = i) : n && (d = d.mod(t))
                        }
                        return n ? l : (f && (l = U.div(l)), t ? l.mod(t) : i ? $(l, _, O, void 0) : l)
                    }, I.integerValue = function(e) {
                        var t = new M(this);
                        return null == e ? e = O : b(e, 0, 8), $(t, t.e + 1, e)
                    }, I.isEqualTo = I.eq = function(e, t) {
                        return 0 === w(this, new M(e, t))
                    }, I.isFinite = function() {
                        return !!this.c
                    }, I.isGreaterThan = I.gt = function(e, t) {
                        return w(this, new M(e, t)) > 0
                    }, I.isGreaterThanOrEqualTo = I.gte = function(e, t) {
                        return 1 === (t = w(this, new M(e, t))) || 0 === t
                    }, I.isInteger = function() {
                        return !!this.c && p(this.e / 14) > this.c.length - 2
                    }, I.isLessThan = I.lt = function(e, t) {
                        return w(this, new M(e, t)) < 0
                    }, I.isLessThanOrEqualTo = I.lte = function(e, t) {
                        return -1 === (t = w(this, new M(e, t))) || 0 === t
                    }, I.isNaN = function() {
                        return !this.s
                    }, I.isNegative = function() {
                        return this.s < 0
                    }, I.isPositive = function() {
                        return this.s > 0
                    }, I.isZero = function() {
                        return !!this.c && 0 == this.c[0]
                    }, I.minus = function(e, t) {
                        var r, n, o, i, s = this,
                            a = s.s;
                        if (t = (e = new M(e, t)).s, !a || !t) return new M(NaN);
                        if (a != t) return e.s = -t, s.plus(e);
                        var c = s.e / 14,
                            u = e.e / 14,
                            f = s.c,
                            l = e.c;
                        if (!c || !u) {
                            if (!f || !l) return f ? (e.s = -t, e) : new M(l ? s : NaN);
                            if (!f[0] || !l[0]) return l[0] ? (e.s = -t, e) : new M(f[0] ? s : 3 == O ? -0 : 0)
                        }
                        if (c = p(c), u = p(u), f = f.slice(), a = c - u) {
                            for ((i = a < 0) ? (a = -a, o = f) : (u = c, o = l), o.reverse(), t = a; t--; o.push(0));
                            o.reverse()
                        } else
                            for (n = (i = (a = f.length) < (t = l.length)) ? a : t, a = t = 0; t < n; t++)
                                if (f[t] != l[t]) {
                                    i = f[t] < l[t];
                                    break
                                } if (i && (o = f, f = l, l = o, e.s = -e.s), (t = (n = l.length) - (r = f.length)) > 0)
                            for (; t--; f[r++] = 0);
                        for (t = h - 1; n > a;) {
                            if (f[--n] < l[n]) {
                                for (r = n; r && !f[--r]; f[r] = t);
                                --f[r], f[n] += h
                            }
                            f[n] -= l[n]
                        }
                        for (; 0 == f[0]; f.splice(0, 1), --u);
                        return f[0] ? V(e, f, u) : (e.s = 3 == O ? -1 : 1, e.c = [e.e = 0], e)
                    }, I.modulo = I.mod = function(e, t) {
                        var n, o, i = this;
                        return e = new M(e, t), !i.c || !e.s || e.c && !e.c[0] ? new M(NaN) : !e.c || i.c && !i.c[0] ? new M(i) : (9 == k ? (o = e.s, e.s = 1, n = r(i, e, 0, 3), e.s = o, n.s *= o) : n = r(i, e, 0, k), (e = i.minus(n.times(e))).c[0] || 1 != k || (e.s = i.s), e)
                    }, I.multipliedBy = I.times = function(e, t) {
                        var r, n, o, i, s, a, c, u, f, l, d, y, w, b, g = this,
                            E = g.c,
                            m = (e = new M(e, t)).c;
                        if (!(E && m && E[0] && m[0])) return !g.s || !e.s || E && !E[0] && !m || m && !m[0] && !E ? e.c = e.e = e.s = null : (e.s *= g.s, E && m ? (e.c = [0], e.e = 0) : e.c = e.e = null), e;
                        for (n = p(g.e / 14) + p(e.e / 14), e.s *= g.s, (c = E.length) < (l = m.length) && (w = E, E = m, m = w, o = c, c = l, l = o), o = c + l, w = []; o--; w.push(0));
                        for (b = h, 1e7, o = l; --o >= 0;) {
                            for (r = 0, d = m[o] % 1e7, y = m[o] / 1e7 | 0, i = o + (s = c); i > o;) r = ((u = d * (u = E[--s] % 1e7) + (a = y * u + (f = E[s] / 1e7 | 0) * d) % 1e7 * 1e7 + w[i] + r) / b | 0) + (a / 1e7 | 0) + y * f, w[i--] = u % b;
                            w[i] = r
                        }
                        return r ? ++n : w.splice(0, 1), V(e, w, n)
                    }, I.negated = function() {
                        var e = new M(this);
                        return e.s = -e.s || null, e
                    }, I.plus = function(e, t) {
                        var r, n = this,
                            o = n.s;
                        if (t = (e = new M(e, t)).s, !o || !t) return new M(NaN);
                        if (o != t) return e.s = -t, n.minus(e);
                        var i = n.e / 14,
                            s = e.e / 14,
                            a = n.c,
                            c = e.c;
                        if (!i || !s) {
                            if (!a || !c) return new M(o / 0);
                            if (!a[0] || !c[0]) return c[0] ? e : new M(a[0] ? n : 0 * o)
                        }
                        if (i = p(i), s = p(s), a = a.slice(), o = i - s) {
                            for (o > 0 ? (s = i, r = c) : (o = -o, r = a), r.reverse(); o--; r.push(0));
                            r.reverse()
                        }
                        for ((o = a.length) - (t = c.length) < 0 && (r = c, c = a, a = r, t = o), o = 0; t;) o = (a[--t] = a[t] + c[t] + o) / h | 0, a[t] = h === a[t] ? 0 : a[t] % h;
                        return o && (a = [o].concat(a), ++s), V(e, a, s)
                    }, I.precision = I.sd = function(e, t) {
                        var r, n, o, i = this;
                        if (null != e && e !== !!e) return b(e, 1, d), null == t ? t = O : b(t, 0, 8), $(new M(i), e, t);
                        if (!(r = i.c)) return null;
                        if (n = 14 * (o = r.length - 1) + 1, o = r[o]) {
                            for (; o % 10 == 0; o /= 10, n--);
                            for (o = r[0]; o >= 10; o /= 10, n++);
                        }
                        return e && i.e + 1 > n && (n = i.e + 1), n
                    }, I.shiftedBy = function(e) {
                        return b(e, -9007199254740991, 9007199254740991), this.times("1e" + e)
                    }, I.squareRoot = I.sqrt = function() {
                        var e, t, n, o, i, s = this,
                            a = s.c,
                            c = s.s,
                            u = s.e,
                            f = S + 4,
                            h = new M("0.5");
                        if (1 !== c || !a || !a[0]) return new M(!c || c < 0 && (!a || a[0]) ? NaN : a ? s : 1 / 0);
                        if (0 == (c = Math.sqrt(+W(s))) || c == 1 / 0 ? (((t = y(a)).length + u) % 2 == 0 && (t += "0"), c = Math.sqrt(+t), u = p((u + 1) / 2) - (u < 0 || u % 2), n = new M(t = c == 1 / 0 ? "5e" + u : (t = c.toExponential()).slice(0, t.indexOf("e") + 1) + u)) : n = new M(c + ""), n.c[0])
                            for ((c = (u = n.e) + f) < 3 && (c = 0);;)
                                if (i = n, n = h.times(i.plus(r(s, i, f, 1))), y(i.c).slice(0, c) === (t = y(n.c)).slice(0, c)) {
                                    if (n.e < u && --c, "9999" != (t = t.slice(c - 3, c + 1)) && (o || "4999" != t)) {
                                        +t && (+t.slice(1) || "5" != t.charAt(0)) || ($(n, n.e + S + 2, 1), e = !n.times(n).eq(s));
                                        break
                                    }
                                    if (!o && ($(i, i.e + S + 2, 0), i.times(i).eq(s))) {
                                        n = i;
                                        break
                                    }
                                    f += 4, c += 4, o = 1
                                } return $(n, n.e + S + 1, O, e)
                    }, I.toExponential = function(e, t) {
                        return null != e && (b(e, 0, d), e++), R(this, e, t, 1)
                    }, I.toFixed = function(e, t) {
                        return null != e && (b(e, 0, d), e = e + this.e + 1), R(this, e, t)
                    }, I.toFormat = function(e, t, r) {
                        var n, o = this;
                        if (null == r) null != e && t && "object" == typeof t ? (r = t, t = null) : e && "object" == typeof e ? (r = e, e = t = null) : r = P;
                        else if ("object" != typeof r) throw Error(u + "Argument not an object: " + r);
                        if (n = o.toFixed(e, t), o.c) {
                            var i, s = n.split("."),
                                a = +r.groupSize,
                                c = +r.secondaryGroupSize,
                                f = r.groupSeparator || "",
                                h = s[0],
                                l = s[1],
                                d = o.s < 0,
                                p = d ? h.slice(1) : h,
                                y = p.length;
                            if (c && (i = a, a = c, c = i, y -= i), a > 0 && y > 0) {
                                for (i = y % a || a, h = p.substr(0, i); i < y; i += a) h += f + p.substr(i, a);
                                c > 0 && (h += f + p.slice(i)), d && (h = "-" + h)
                            }
                            n = l ? h + (r.decimalSeparator || "") + ((c = +r.fractionGroupSize) ? l.replace(new RegExp("\\d{" + c + "}\\B", "g"), "$&" + (r.fractionGroupSeparator || "")) : l) : h
                        }
                        return (r.prefix || "") + n + (r.suffix || "")
                    }, I.toFraction = function(e) {
                        var t, n, o, i, s, a, c, f, h, d, p, w, b = this,
                            g = b.c;
                        if (null != e && (!(c = new M(e)).isInteger() && (c.c || 1 !== c.s) || c.lt(U))) throw Error(u + "Argument " + (c.isInteger() ? "out of range: " : "not an integer: ") + W(c));
                        if (!g) return new M(b);
                        for (t = new M(U), h = n = new M(U), o = f = new M(U), w = y(g), s = t.e = w.length - b.e - 1, t.c[0] = l[(a = s % 14) < 0 ? 14 + a : a], e = !e || c.comparedTo(t) > 0 ? s > 0 ? t : h : c, a = T, T = 1 / 0, c = new M(w), f.c[0] = 0; d = r(c, t, 0, 1), 1 != (i = n.plus(d.times(o))).comparedTo(e);) n = o, o = i, h = f.plus(d.times(i = h)), f = i, t = c.minus(d.times(i = t)), c = i;
                        return i = r(e.minus(n), o, 0, 1), f = f.plus(i.times(h)), n = n.plus(i.times(o)), f.s = h.s = b.s, p = r(h, o, s *= 2, O).minus(b).abs().comparedTo(r(f, n, s, O).minus(b).abs()) < 1 ? [h, o] : [f, n], T = a, p
                    }, I.toNumber = function() {
                        return +W(this)
                    }, I.toPrecision = function(e, t) {
                        return null != e && b(e, 1, d), R(this, e, t, 2)
                    }, I.toString = function(e) {
                        var t, r = this,
                            o = r.s,
                            i = r.e;
                        return null === i ? o ? (t = "Infinity", o < 0 && (t = "-" + t)) : t = "NaN" : (null == e ? t = i <= D || i >= H ? E(y(r.c), i) : m(y(r.c), i, "0") : 10 === e && j ? t = m(y((r = $(new M(r), S + i + 1, O)).c), r.e, "0") : (b(e, 2, F.length, "Base"), t = n(m(y(r.c), i, "0"), 10, e, o, !0)), o < 0 && r.c[0] && (t = "-" + t)), t
                    }, I.valueOf = I.toJSON = function() {
                        return W(this)
                    }, I._isBigNumber = !0, null != t && M.set(t), M
                }()).default = i.BigNumber = i, void 0 === (n = function() {
                    return i
                }.call(t, r, t, e)) || (e.exports = n)
            }()
        },
        3643: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.bool = void 0;
            const n = r(4),
                o = r(504);
            t.bool = e => {
                const t = (0, n.u8)(e),
                    {
                        encode: r,
                        decode: i
                    } = (0, o.encodeDecode)(t),
                    s = t;
                return s.decode = (e, t) => !!i(e, t), s.encode = (e, t, n) => {
                    const o = Number(e);
                    return r(o, t, n)
                }, s
            }
        },
        3644: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.publicKey = void 0;
            const n = r(4),
                o = r(162),
                i = r(504);
            t.publicKey = e => {
                const t = (0, n.blob)(32, e),
                    {
                        encode: r,
                        decode: s
                    } = (0, i.encodeDecode)(t),
                    a = t;
                return a.decode = (e, t) => {
                    const r = s(e, t);
                    return new o.PublicKey(r)
                }, a.encode = (e, t, n) => {
                    const o = e.toBuffer();
                    return r(o, t, n)
                }, a
            }
        },
        3936: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.pbkdf2Async = t.pbkdf2 = void 0;
            const n = r(648),
                o = r(3937),
                i = r(424);

            function s(e, t, r, s) {
                n.default.hash(e);
                const a = (0, i.checkOpts)({
                        dkLen: 32,
                        asyncTick: 10
                    }, s),
                    {
                        c: c,
                        dkLen: u,
                        asyncTick: f
                    } = a;
                if (n.default.number(c), n.default.number(u), n.default.number(f), c < 1) throw new Error("PBKDF2: iterations (c) should be >= 1");
                const h = (0, i.toBytes)(t),
                    l = (0, i.toBytes)(r),
                    d = new Uint8Array(u),
                    p = o.hmac.create(e, h),
                    y = p._cloneInto().update(l);
                return {
                    c: c,
                    dkLen: u,
                    asyncTick: f,
                    DK: d,
                    PRF: p,
                    PRFSalt: y
                }
            }

            function a(e, t, r, n, o) {
                return e.destroy(), t.destroy(), n && n.destroy(), o.fill(0), r
            }
            t.pbkdf2 = function(e, t, r, n) {
                const {
                    c: o,
                    dkLen: c,
                    DK: u,
                    PRF: f,
                    PRFSalt: h
                } = s(e, t, r, n);
                let l;
                const d = new Uint8Array(4),
                    p = (0, i.createView)(d),
                    y = new Uint8Array(f.outputLen);
                for (let e = 1, t = 0; t < c; e++, t += f.outputLen) {
                    const r = u.subarray(t, t + f.outputLen);
                    p.setInt32(0, e, !1), (l = h._cloneInto(l)).update(d).digestInto(y), r.set(y.subarray(0, r.length));
                    for (let e = 1; e < o; e++) {
                        f._cloneInto(l).update(y).digestInto(y);
                        for (let e = 0; e < r.length; e++) r[e] ^= y[e]
                    }
                }
                return a(f, h, u, l, y)
            }, t.pbkdf2Async = async function(e, t, r, n) {
                const {
                    c: o,
                    dkLen: c,
                    asyncTick: u,
                    DK: f,
                    PRF: h,
                    PRFSalt: l
                } = s(e, t, r, n);
                let d;
                const p = new Uint8Array(4),
                    y = (0, i.createView)(p),
                    w = new Uint8Array(h.outputLen);
                for (let e = 1, t = 0; t < c; e++, t += h.outputLen) {
                    const r = f.subarray(t, t + h.outputLen);
                    y.setInt32(0, e, !1), (d = l._cloneInto(d)).update(p).digestInto(w), r.set(w.subarray(0, r.length)), await (0, i.asyncLoop)(o - 1, u, e => {
                        h._cloneInto(d).update(w).digestInto(w);
                        for (let e = 0; e < r.length; e++) r[e] ^= w[e]
                    })
                }
                return a(h, l, f, d, w)
            }
        },
        3937: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.hmac = void 0;
            const n = r(648),
                o = r(424);
            class HMAC extends o.Hash {
                constructor(e, t) {
                    super(), this.finished = !1, this.destroyed = !1, n.default.hash(e);
                    const r = (0, o.toBytes)(t);
                    if (this.iHash = e.create(), "function" != typeof this.iHash.update) throw new TypeError("Expected instance of class which extends utils.Hash");
                    this.blockLen = this.iHash.blockLen, this.outputLen = this.iHash.outputLen;
                    const i = this.blockLen,
                        s = new Uint8Array(i);
                    s.set(r.length > i ? e.create().update(r).digest() : r);
                    for (let e = 0; e < s.length; e++) s[e] ^= 54;
                    this.iHash.update(s), this.oHash = e.create();
                    for (let e = 0; e < s.length; e++) s[e] ^= 106;
                    this.oHash.update(s), s.fill(0)
                }
                update(e) {
                    return n.default.exists(this), this.iHash.update(e), this
                }
                digestInto(e) {
                    n.default.exists(this), n.default.bytes(e, this.outputLen), this.finished = !0, this.iHash.digestInto(e), this.oHash.update(e), this.oHash.digestInto(e), this.destroy()
                }
                digest() {
                    const e = new Uint8Array(this.oHash.outputLen);
                    return this.digestInto(e), e
                }
                _cloneInto(e) {
                    e || (e = Object.create(Object.getPrototypeOf(this), {}));
                    const {
                        oHash: t,
                        iHash: r,
                        finished: n,
                        destroyed: o,
                        blockLen: i,
                        outputLen: s
                    } = this;
                    return (e = e).finished = n, e.destroyed = o, e.blockLen = i, e.outputLen = s, e.oHash = t._cloneInto(e.oHash), e.iHash = r._cloneInto(e.iHash), e
                }
                destroy() {
                    this.destroyed = !0, this.oHash.destroy(), this.iHash.destroy()
                }
            }
            t.hmac = (e, t, r) => new HMAC(e, t).update(r).digest(), t.hmac.create = (e, t) => new HMAC(e, t)
        },
        3938: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.crypto = void 0, t.crypto = {
                node: void 0,
                web: "object" == typeof self && "crypto" in self ? self.crypto : void 0
            }
        },
        3939: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.sha224 = t.sha256 = void 0;
            const n = r(1969),
                o = r(424),
                i = (e, t, r) => e & t ^ e & r ^ t & r,
                s = new Uint32Array([1116352408, 1899447441, 3049323471, 3921009573, 961987163, 1508970993, 2453635748, 2870763221, 3624381080, 310598401, 607225278, 1426881987, 1925078388, 2162078206, 2614888103, 3248222580, 3835390401, 4022224774, 264347078, 604807628, 770255983, 1249150122, 1555081692, 1996064986, 2554220882, 2821834349, 2952996808, 3210313671, 3336571891, 3584528711, 113926993, 338241895, 666307205, 773529912, 1294757372, 1396182291, 1695183700, 1986661051, 2177026350, 2456956037, 2730485921, 2820302411, 3259730800, 3345764771, 3516065817, 3600352804, 4094571909, 275423344, 430227734, 506948616, 659060556, 883997877, 958139571, 1322822218, 1537002063, 1747873779, 1955562222, 2024104815, 2227730452, 2361852424, 2428436474, 2756734187, 3204031479, 3329325298]),
                a = new Uint32Array([1779033703, 3144134277, 1013904242, 2773480762, 1359893119, 2600822924, 528734635, 1541459225]),
                c = new Uint32Array(64);
            class SHA256 extends n.SHA2 {
                constructor() {
                    super(64, 32, 8, !1), this.A = 0 | a[0], this.B = 0 | a[1], this.C = 0 | a[2], this.D = 0 | a[3], this.E = 0 | a[4], this.F = 0 | a[5], this.G = 0 | a[6], this.H = 0 | a[7]
                }
                get() {
                    const {
                        A: e,
                        B: t,
                        C: r,
                        D: n,
                        E: o,
                        F: i,
                        G: s,
                        H: a
                    } = this;
                    return [e, t, r, n, o, i, s, a]
                }
                set(e, t, r, n, o, i, s, a) {
                    this.A = 0 | e, this.B = 0 | t, this.C = 0 | r, this.D = 0 | n, this.E = 0 | o, this.F = 0 | i, this.G = 0 | s, this.H = 0 | a
                }
                process(e, t) {
                    for (let r = 0; r < 16; r++, t += 4) c[r] = e.getUint32(t, !1);
                    for (let e = 16; e < 64; e++) {
                        const t = c[e - 15],
                            r = c[e - 2],
                            n = (0, o.rotr)(t, 7) ^ (0, o.rotr)(t, 18) ^ t >>> 3,
                            i = (0, o.rotr)(r, 17) ^ (0, o.rotr)(r, 19) ^ r >>> 10;
                        c[e] = i + c[e - 7] + n + c[e - 16] | 0
                    }
                    let {
                        A: r,
                        B: n,
                        C: a,
                        D: u,
                        E: f,
                        F: h,
                        G: l,
                        H: d
                    } = this;
                    for (let e = 0; e < 64; e++) {
                        const t = d + ((0, o.rotr)(f, 6) ^ (0, o.rotr)(f, 11) ^ (0, o.rotr)(f, 25)) + ((p = f) & h ^ ~p & l) + s[e] + c[e] | 0,
                            y = ((0, o.rotr)(r, 2) ^ (0, o.rotr)(r, 13) ^ (0, o.rotr)(r, 22)) + i(r, n, a) | 0;
                        d = l, l = h, h = f, f = u + t | 0, u = a, a = n, n = r, r = t + y | 0
                    }
                    var p;
                    r = r + this.A | 0, n = n + this.B | 0, a = a + this.C | 0, u = u + this.D | 0, f = f + this.E | 0, h = h + this.F | 0, l = l + this.G | 0, d = d + this.H | 0, this.set(r, n, a, u, f, h, l, d)
                }
                roundClean() {
                    c.fill(0)
                }
                destroy() {
                    this.set(0, 0, 0, 0, 0, 0, 0, 0), this.buffer.fill(0)
                }
            }
            class SHA224 extends SHA256 {
                constructor() {
                    super(), this.A = -1056596264, this.B = 914150663, this.C = 812702999, this.D = -150054599, this.E = -4191439, this.F = 1750603025, this.G = 1694076839, this.H = -1090891868, this.outputLen = 28
                }
            }
            t.sha256 = (0, o.wrapConstructor)(() => new SHA256), t.sha224 = (0, o.wrapConstructor)(() => new SHA224)
        },
        3940: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.sha384 = t.sha512_256 = t.sha512_224 = t.sha512 = t.SHA512 = void 0;
            const n = r(1969),
                o = r(3941),
                i = r(424),
                [s, a] = o.default.split(["0x428a2f98d728ae22", "0x7137449123ef65cd", "0xb5c0fbcfec4d3b2f", "0xe9b5dba58189dbbc", "0x3956c25bf348b538", "0x59f111f1b605d019", "0x923f82a4af194f9b", "0xab1c5ed5da6d8118", "0xd807aa98a3030242", "0x12835b0145706fbe", "0x243185be4ee4b28c", "0x550c7dc3d5ffb4e2", "0x72be5d74f27b896f", "0x80deb1fe3b1696b1", "0x9bdc06a725c71235", "0xc19bf174cf692694", "0xe49b69c19ef14ad2", "0xefbe4786384f25e3", "0x0fc19dc68b8cd5b5", "0x240ca1cc77ac9c65", "0x2de92c6f592b0275", "0x4a7484aa6ea6e483", "0x5cb0a9dcbd41fbd4", "0x76f988da831153b5", "0x983e5152ee66dfab", "0xa831c66d2db43210", "0xb00327c898fb213f", "0xbf597fc7beef0ee4", "0xc6e00bf33da88fc2", "0xd5a79147930aa725", "0x06ca6351e003826f", "0x142929670a0e6e70", "0x27b70a8546d22ffc", "0x2e1b21385c26c926", "0x4d2c6dfc5ac42aed", "0x53380d139d95b3df", "0x650a73548baf63de", "0x766a0abb3c77b2a8", "0x81c2c92e47edaee6", "0x92722c851482353b", "0xa2bfe8a14cf10364", "0xa81a664bbc423001", "0xc24b8b70d0f89791", "0xc76c51a30654be30", "0xd192e819d6ef5218", "0xd69906245565a910", "0xf40e35855771202a", "0x106aa07032bbd1b8", "0x19a4c116b8d2d0c8", "0x1e376c085141ab53", "0x2748774cdf8eeb99", "0x34b0bcb5e19b48a8", "0x391c0cb3c5c95a63", "0x4ed8aa4ae3418acb", "0x5b9cca4f7763e373", "0x682e6ff3d6b2b8a3", "0x748f82ee5defb2fc", "0x78a5636f43172f60", "0x84c87814a1f0ab72", "0x8cc702081a6439ec", "0x90befffa23631e28", "0xa4506cebde82bde9", "0xbef9a3f7b2c67915", "0xc67178f2e372532b", "0xca273eceea26619c", "0xd186b8c721c0c207", "0xeada7dd6cde0eb1e", "0xf57d4f7fee6ed178", "0x06f067aa72176fba", "0x0a637dc5a2c898a6", "0x113f9804bef90dae", "0x1b710b35131c471b", "0x28db77f523047d84", "0x32caab7b40c72493", "0x3c9ebe0a15c9bebc", "0x431d67c49c100d4c", "0x4cc5d4becb3e42b6", "0x597f299cfc657e2a", "0x5fcb6fab3ad6faec", "0x6c44198c4a475817"].map(e => BigInt(e))),
                c = new Uint32Array(80),
                u = new Uint32Array(80);
            class SHA512 extends n.SHA2 {
                constructor() {
                    super(128, 64, 16, !1), this.Ah = 1779033703, this.Al = -205731576, this.Bh = -1150833019, this.Bl = -2067093701, this.Ch = 1013904242, this.Cl = -23791573, this.Dh = -1521486534, this.Dl = 1595750129, this.Eh = 1359893119, this.El = -1377402159, this.Fh = -1694144372, this.Fl = 725511199, this.Gh = 528734635, this.Gl = -79577749, this.Hh = 1541459225, this.Hl = 327033209
                }
                get() {
                    const {
                        Ah: e,
                        Al: t,
                        Bh: r,
                        Bl: n,
                        Ch: o,
                        Cl: i,
                        Dh: s,
                        Dl: a,
                        Eh: c,
                        El: u,
                        Fh: f,
                        Fl: h,
                        Gh: l,
                        Gl: d,
                        Hh: p,
                        Hl: y
                    } = this;
                    return [e, t, r, n, o, i, s, a, c, u, f, h, l, d, p, y]
                }
                set(e, t, r, n, o, i, s, a, c, u, f, h, l, d, p, y) {
                    this.Ah = 0 | e, this.Al = 0 | t, this.Bh = 0 | r, this.Bl = 0 | n, this.Ch = 0 | o, this.Cl = 0 | i, this.Dh = 0 | s, this.Dl = 0 | a, this.Eh = 0 | c, this.El = 0 | u, this.Fh = 0 | f, this.Fl = 0 | h, this.Gh = 0 | l, this.Gl = 0 | d, this.Hh = 0 | p, this.Hl = 0 | y
                }
                process(e, t) {
                    for (let r = 0; r < 16; r++, t += 4) c[r] = e.getUint32(t), u[r] = e.getUint32(t += 4);
                    for (let e = 16; e < 80; e++) {
                        const t = 0 | c[e - 15],
                            r = 0 | u[e - 15],
                            n = o.default.rotrSH(t, r, 1) ^ o.default.rotrSH(t, r, 8) ^ o.default.shrSH(t, r, 7),
                            i = o.default.rotrSL(t, r, 1) ^ o.default.rotrSL(t, r, 8) ^ o.default.shrSL(t, r, 7),
                            s = 0 | c[e - 2],
                            a = 0 | u[e - 2],
                            f = o.default.rotrSH(s, a, 19) ^ o.default.rotrBH(s, a, 61) ^ o.default.shrSH(s, a, 6),
                            h = o.default.rotrSL(s, a, 19) ^ o.default.rotrBL(s, a, 61) ^ o.default.shrSL(s, a, 6),
                            l = o.default.add4L(i, h, u[e - 7], u[e - 16]),
                            d = o.default.add4H(l, n, f, c[e - 7], c[e - 16]);
                        c[e] = 0 | d, u[e] = 0 | l
                    }
                    let {
                        Ah: r,
                        Al: n,
                        Bh: i,
                        Bl: f,
                        Ch: h,
                        Cl: l,
                        Dh: d,
                        Dl: p,
                        Eh: y,
                        El: w,
                        Fh: b,
                        Fl: g,
                        Gh: E,
                        Gl: m,
                        Hh: x,
                        Hl: L
                    } = this;
                    for (let e = 0; e < 80; e++) {
                        const t = o.default.rotrSH(y, w, 14) ^ o.default.rotrSH(y, w, 18) ^ o.default.rotrBH(y, w, 41),
                            B = o.default.rotrSL(y, w, 14) ^ o.default.rotrSL(y, w, 18) ^ o.default.rotrBL(y, w, 41),
                            v = y & b ^ ~y & E,
                            A = w & g ^ ~w & m,
                            I = o.default.add5L(L, B, A, a[e], u[e]),
                            U = o.default.add5H(I, x, t, v, s[e], c[e]),
                            S = 0 | I,
                            O = o.default.rotrSH(r, n, 28) ^ o.default.rotrBH(r, n, 34) ^ o.default.rotrBH(r, n, 39),
                            D = o.default.rotrSL(r, n, 28) ^ o.default.rotrBL(r, n, 34) ^ o.default.rotrBL(r, n, 39),
                            H = r & i ^ r & h ^ i & h,
                            N = n & f ^ n & l ^ f & l;
                        x = 0 | E, L = 0 | m, E = 0 | b, m = 0 | g, b = 0 | y, g = 0 | w, ({
                            h: y,
                            l: w
                        } = o.default.add(0 | d, 0 | p, 0 | U, 0 | S)), d = 0 | h, p = 0 | l, h = 0 | i, l = 0 | f, i = 0 | r, f = 0 | n;
                        const T = o.default.add3L(S, D, N);
                        r = o.default.add3H(T, U, O, H), n = 0 | T
                    }({
                        h: r,
                        l: n
                    } = o.default.add(0 | this.Ah, 0 | this.Al, 0 | r, 0 | n)), ({
                        h: i,
                        l: f
                    } = o.default.add(0 | this.Bh, 0 | this.Bl, 0 | i, 0 | f)), ({
                        h: h,
                        l: l
                    } = o.default.add(0 | this.Ch, 0 | this.Cl, 0 | h, 0 | l)), ({
                        h: d,
                        l: p
                    } = o.default.add(0 | this.Dh, 0 | this.Dl, 0 | d, 0 | p)), ({
                        h: y,
                        l: w
                    } = o.default.add(0 | this.Eh, 0 | this.El, 0 | y, 0 | w)), ({
                        h: b,
                        l: g
                    } = o.default.add(0 | this.Fh, 0 | this.Fl, 0 | b, 0 | g)), ({
                        h: E,
                        l: m
                    } = o.default.add(0 | this.Gh, 0 | this.Gl, 0 | E, 0 | m)), ({
                        h: x,
                        l: L
                    } = o.default.add(0 | this.Hh, 0 | this.Hl, 0 | x, 0 | L)), this.set(r, n, i, f, h, l, d, p, y, w, b, g, E, m, x, L)
                }
                roundClean() {
                    c.fill(0), u.fill(0)
                }
                destroy() {
                    this.buffer.fill(0), this.set(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0)
                }
            }
            t.SHA512 = SHA512;
            class SHA512_224 extends SHA512 {
                constructor() {
                    super(), this.Ah = -1942145080, this.Al = 424955298, this.Bh = 1944164710, this.Bl = -1982016298, this.Ch = 502970286, this.Cl = 855612546, this.Dh = 1738396948, this.Dl = 1479516111, this.Eh = 258812777, this.El = 2077511080, this.Fh = 2011393907, this.Fl = 79989058, this.Gh = 1067287976, this.Gl = 1780299464, this.Hh = 286451373, this.Hl = -1848208735, this.outputLen = 28
                }
            }
            class SHA512_256 extends SHA512 {
                constructor() {
                    super(), this.Ah = 573645204, this.Al = -64227540, this.Bh = -1621794909, this.Bl = -934517566, this.Ch = 596883563, this.Cl = 1867755857, this.Dh = -1774684391, this.Dl = 1497426621, this.Eh = -1775747358, this.El = -1467023389, this.Fh = -1101128155, this.Fl = 1401305490, this.Gh = 721525244, this.Gl = 746961066, this.Hh = 246885852, this.Hl = -2117784414, this.outputLen = 32
                }
            }
            class SHA384 extends SHA512 {
                constructor() {
                    super(), this.Ah = -876896931, this.Al = -1056596264, this.Bh = 1654270250, this.Bl = 914150663, this.Ch = -1856437926, this.Cl = 812702999, this.Dh = 355462360, this.Dl = -150054599, this.Eh = 1731405415, this.El = -4191439, this.Fh = -1900787065, this.Fl = 1750603025, this.Gh = -619958771, this.Gl = 1694076839, this.Hh = 1203062813, this.Hl = -1090891868, this.outputLen = 48
                }
            }
            t.sha512 = (0, i.wrapConstructor)(() => new SHA512), t.sha512_224 = (0, i.wrapConstructor)(() => new SHA512_224), t.sha512_256 = (0, i.wrapConstructor)(() => new SHA512_256), t.sha384 = (0, i.wrapConstructor)(() => new SHA384)
        },
        3941: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.add = t.toBig = t.split = t.fromBig = void 0;
            const n = BigInt(2 ** 32 - 1),
                o = BigInt(32);

            function i(e, t = !1) {
                return t ? {
                    h: Number(e & n),
                    l: Number(e >> o & n)
                } : {
                    h: 0 | Number(e >> o & n),
                    l: 0 | Number(e & n)
                }
            }

            function s(e, t = !1) {
                let r = new Uint32Array(e.length),
                    n = new Uint32Array(e.length);
                for (let o = 0; o < e.length; o++) {
                    const {
                        h: s,
                        l: a
                    } = i(e[o], t);
                    [r[o], n[o]] = [s, a]
                }
                return [r, n]
            }
            t.fromBig = i, t.split = s;
            t.toBig = (e, t) => BigInt(e >>> 0) << o | BigInt(t >>> 0);

            function a(e, t, r, n) {
                const o = (t >>> 0) + (n >>> 0);
                return {
                    h: e + r + (o / 2 ** 32 | 0) | 0,
                    l: 0 | o
                }
            }
            t.add = a;
            const c = {
                fromBig: i,
                split: s,
                toBig: t.toBig,
                shrSH: (e, t, r) => e >>> r,
                shrSL: (e, t, r) => e << 32 - r | t >>> r,
                rotrSH: (e, t, r) => e >>> r | t << 32 - r,
                rotrSL: (e, t, r) => e << 32 - r | t >>> r,
                rotrBH: (e, t, r) => e << 64 - r | t >>> r - 32,
                rotrBL: (e, t, r) => e >>> r - 32 | t << 64 - r,
                rotr32H: (e, t) => t,
                rotr32L: (e, t) => e,
                rotlSH: (e, t, r) => e << r | t >>> 32 - r,
                rotlSL: (e, t, r) => t << r | e >>> 32 - r,
                rotlBH: (e, t, r) => t << r - 32 | e >>> 64 - r,
                rotlBL: (e, t, r) => e << r - 32 | t >>> 64 - r,
                add: a,
                add3L: (e, t, r) => (e >>> 0) + (t >>> 0) + (r >>> 0),
                add3H: (e, t, r, n) => t + r + n + (e / 2 ** 32 | 0) | 0,
                add4L: (e, t, r, n) => (e >>> 0) + (t >>> 0) + (r >>> 0) + (n >>> 0),
                add4H: (e, t, r, n, o) => t + r + n + o + (e / 2 ** 32 | 0) | 0,
                add5H: (e, t, r, n, o, i) => t + r + n + o + i + (e / 2 ** 32 | 0) | 0,
                add5L: (e, t, r, n, o) => (e >>> 0) + (t >>> 0) + (r >>> 0) + (n >>> 0) + (o >>> 0)
            };
            t.default = c
        },
        3942: function(e, t, r) {
            "use strict";

            function n(e) {
                if (!Number.isSafeInteger(e)) throw new Error("Wrong integer: " + e)
            }

            function o(...e) {
                const t = (e, t) => r => e(t(r));
                return {
                    encode: Array.from(e).reverse().reduce((e, r) => e ? t(e, r.encode) : r.encode, void 0),
                    decode: e.reduce((e, r) => e ? t(e, r.decode) : r.decode, void 0)
                }
            }

            function i(e) {
                return {
                    encode: t => {
                        if (!Array.isArray(t) || t.length && "number" != typeof t[0]) throw new Error("alphabet.encode input should be an array of numbers");
                        return t.map(t => {
                            if (n(t), t < 0 || t >= e.length) throw new Error(`Digit index outside alphabet: ${t} (alphabet: ${e.length})`);
                            return e[t]
                        })
                    },
                    decode: t => {
                        if (!Array.isArray(t) || t.length && "string" != typeof t[0]) throw new Error("alphabet.decode input should be array of strings");
                        return t.map(t => {
                            if ("string" != typeof t) throw new Error("alphabet.decode: not string element=" + t);
                            const r = e.indexOf(t);
                            if (-1 === r) throw new Error(`Unknown letter: "${t}". Allowed: ${e}`);
                            return r
                        })
                    }
                }
            }

            function s(e = "") {
                if ("string" != typeof e) throw new Error("join separator should be string");
                return {
                    encode: t => {
                        if (!Array.isArray(t) || t.length && "string" != typeof t[0]) throw new Error("join.encode input should be array of strings");
                        for (let e of t)
                            if ("string" != typeof e) throw new Error("join.encode: non-string input=" + e);
                        return t.join(e)
                    },
                    decode: t => {
                        if ("string" != typeof t) throw new Error("join.decode input should be string");
                        return t.split(e)
                    }
                }
            }

            function a(e, t = "=") {
                if (n(e), "string" != typeof t) throw new Error("padding chr should be string");
                return {
                    encode(r) {
                        if (!Array.isArray(r) || r.length && "string" != typeof r[0]) throw new Error("padding.encode input should be array of strings");
                        for (let e of r)
                            if ("string" != typeof e) throw new Error("padding.encode: non-string input=" + e);
                        for (; r.length * e % 8;) r.push(t);
                        return r
                    },
                    decode(r) {
                        if (!Array.isArray(r) || r.length && "string" != typeof r[0]) throw new Error("padding.encode input should be array of strings");
                        for (let e of r)
                            if ("string" != typeof e) throw new Error("padding.decode: non-string input=" + e);
                        let n = r.length;
                        if (n * e % 8) throw new Error("Invalid padding: string should have whole number of bytes");
                        for (; n > 0 && r[n - 1] === t; n--)
                            if (!((n - 1) * e % 8)) throw new Error("Invalid padding: string has too much padding");
                        return r.slice(0, n)
                    }
                }
            }

            function c(e) {
                if ("function" != typeof e) throw new Error("normalize fn should be function");
                return {
                    encode: e => e,
                    decode: t => e(t)
                }
            }

            function u(e, t, r) {
                if (t < 2) throw new Error(`convertRadix: wrong from=${t}, base cannot be less than 2`);
                if (r < 2) throw new Error(`convertRadix: wrong to=${r}, base cannot be less than 2`);
                if (!Array.isArray(e)) throw new Error("convertRadix: data should be array");
                if (!e.length) return [];
                let o = 0;
                const i = [],
                    s = Array.from(e);
                for (s.forEach(e => {
                        if (n(e), e < 0 || e >= t) throw new Error("Wrong integer: " + e)
                    });;) {
                    let e = 0,
                        n = !0;
                    for (let i = o; i < s.length; i++) {
                        const a = s[i],
                            c = t * e + a;
                        if (!Number.isSafeInteger(c) || t * e / t !== e || c - a != t * e) throw new Error("convertRadix: carry overflow");
                        if (e = c % r, s[i] = Math.floor(c / r), !Number.isSafeInteger(s[i]) || s[i] * r + e !== c) throw new Error("convertRadix: carry overflow");
                        n && (s[i] ? n = !1 : o = i)
                    }
                    if (i.push(e), n) break
                }
                for (let t = 0; t < e.length - 1 && 0 === e[t]; t++) i.push(0);
                return i.reverse()
            }
            r.r(t), r.d(t, "assertNumber", (function() {
                return n
            })), r.d(t, "utils", (function() {
                return b
            })), r.d(t, "base16", (function() {
                return g
            })), r.d(t, "base32", (function() {
                return E
            })), r.d(t, "base32hex", (function() {
                return m
            })), r.d(t, "base32crockford", (function() {
                return x
            })), r.d(t, "base64", (function() {
                return L
            })), r.d(t, "base64url", (function() {
                return B
            })), r.d(t, "base58", (function() {
                return A
            })), r.d(t, "base58flickr", (function() {
                return I
            })), r.d(t, "base58xrp", (function() {
                return U
            })), r.d(t, "base58xmr", (function() {
                return O
            })), r.d(t, "base58check", (function() {
                return D
            })), r.d(t, "bech32", (function() {
                return _
            })), r.d(t, "bech32m", (function() {
                return P
            })), r.d(t, "utf8", (function() {
                return F
            })), r.d(t, "hex", (function() {
                return j
            })), r.d(t, "bytesToString", (function() {
                return G
            })), r.d(t, "str", (function() {
                return V
            })), r.d(t, "stringToBytes", (function() {
                return $
            })), r.d(t, "bytes", (function() {
                return W
            }));
            const f = (e, t) => t ? f(t, e % t) : e,
                h = (e, t) => e + (t - f(e, t));

            function l(e, t, r, o) {
                if (!Array.isArray(e)) throw new Error("convertRadix2: data should be array");
                if (t <= 0 || t > 32) throw new Error("convertRadix2: wrong from=" + t);
                if (r <= 0 || r > 32) throw new Error("convertRadix2: wrong to=" + r);
                if (h(t, r) > 32) throw new Error(`convertRadix2: carry overflow from=${t} to=${r} carryBits=${h(t,r)}`);
                let i = 0,
                    s = 0;
                const a = 2 ** r - 1,
                    c = [];
                for (const o of e) {
                    if (n(o), o >= 2 ** t) throw new Error(`convertRadix2: invalid data word=${o} from=${t}`);
                    if (i = i << t | o, s + t > 32) throw new Error(`convertRadix2: carry overflow pos=${s} from=${t}`);
                    for (s += t; s >= r; s -= r) c.push((i >> s - r & a) >>> 0);
                    i &= 2 ** s - 1
                }
                if (i = i << r - s & a, !o && s >= t) throw new Error("Excess padding");
                if (!o && i) throw new Error("Non-zero padding: " + i);
                return o && s > 0 && c.push(i >>> 0), c
            }

            function d(e) {
                return n(e), {
                    encode: t => {
                        if (!(t instanceof Uint8Array)) throw new Error("radix.encode input should be Uint8Array");
                        return u(Array.from(t), 256, e)
                    },
                    decode: t => {
                        if (!Array.isArray(t) || t.length && "number" != typeof t[0]) throw new Error("radix.decode input should be array of strings");
                        return Uint8Array.from(u(t, e, 256))
                    }
                }
            }

            function p(e, t = !1) {
                if (n(e), e <= 0 || e > 32) throw new Error("radix2: bits should be in (0..32]");
                if (h(8, e) > 32 || h(e, 8) > 32) throw new Error("radix2: carry overflow");
                return {
                    encode: r => {
                        if (!(r instanceof Uint8Array)) throw new Error("radix2.encode input should be Uint8Array");
                        return l(Array.from(r), 8, e, !t)
                    },
                    decode: r => {
                        if (!Array.isArray(r) || r.length && "number" != typeof r[0]) throw new Error("radix2.decode input should be array of strings");
                        return Uint8Array.from(l(r, e, 8, t))
                    }
                }
            }

            function y(e) {
                if ("function" != typeof e) throw new Error("unsafeWrapper fn should be function");
                return function(...t) {
                    try {
                        return e.apply(null, t)
                    } catch (e) {}
                }
            }

            function w(e, t) {
                if (n(e), "function" != typeof t) throw new Error("checksum fn should be function");
                return {
                    encode(r) {
                        if (!(r instanceof Uint8Array)) throw new Error("checksum.encode: input should be Uint8Array");
                        const n = t(r).slice(0, e),
                            o = new Uint8Array(r.length + e);
                        return o.set(r), o.set(n, r.length), o
                    },
                    decode(r) {
                        if (!(r instanceof Uint8Array)) throw new Error("checksum.decode: input should be Uint8Array");
                        const n = r.slice(0, -e),
                            o = t(n).slice(0, e),
                            i = r.slice(-e);
                        for (let t = 0; t < e; t++)
                            if (o[t] !== i[t]) throw new Error("Invalid checksum");
                        return n
                    }
                }
            }
            const b = {
                    alphabet: i,
                    chain: o,
                    checksum: w,
                    radix: d,
                    radix2: p,
                    join: s,
                    padding: a
                },
                g = o(p(4), i("0123456789ABCDEF"), s("")),
                E = o(p(5), i("ABCDEFGHIJKLMNOPQRSTUVWXYZ234567"), a(5), s("")),
                m = o(p(5), i("0123456789ABCDEFGHIJKLMNOPQRSTUV"), a(5), s("")),
                x = o(p(5), i("0123456789ABCDEFGHJKMNPQRSTVWXYZ"), s(""), c(e => e.toUpperCase().replace(/O/g, "0").replace(/[IL]/g, "1"))),
                L = o(p(6), i("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"), a(6), s("")),
                B = o(p(6), i("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_"), a(6), s("")),
                v = e => o(d(58), i(e), s("")),
                A = v("123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz"),
                I = v("123456789abcdefghijkmnopqrstuvwxyzABCDEFGHJKLMNPQRSTUVWXYZ"),
                U = v("rpshnaf39wBUDNEGHJKLM4PQRST7VWXYZ2bcdeCg65jkm8oFqi1tuvAxyz"),
                S = [0, 2, 3, 5, 6, 7, 9, 10, 11],
                O = {
                    encode(e) {
                        let t = "";
                        for (let r = 0; r < e.length; r += 8) {
                            const n = e.subarray(r, r + 8);
                            t += A.encode(n).padStart(S[n.length], "1")
                        }
                        return t
                    },
                    decode(e) {
                        let t = [];
                        for (let r = 0; r < e.length; r += 11) {
                            const n = e.slice(r, r + 11),
                                o = S.indexOf(n.length),
                                i = A.decode(n);
                            for (let e = 0; e < i.length - o; e++)
                                if (0 !== i[e]) throw new Error("base58xmr: wrong padding");
                            t = t.concat(Array.from(i.slice(i.length - o)))
                        }
                        return Uint8Array.from(t)
                    }
                },
                D = e => o(w(4, t => e(e(t))), A),
                H = o(i("qpzry9x8gf2tvdw0s3jn54khce6mua7l"), s("")),
                N = [996825010, 642813549, 513874426, 1027748829, 705979059];

            function T(e) {
                const t = e >> 25;
                let r = (33554431 & e) << 5;
                for (let e = 0; e < N.length; e++) 1 == (t >> e & 1) && (r ^= N[e]);
                return r
            }

            function C(e, t, r = 1) {
                const n = e.length;
                let o = 1;
                for (let t = 0; t < n; t++) {
                    const r = e.charCodeAt(t);
                    if (r < 33 || r > 126) throw new Error(`Invalid prefix (${e})`);
                    o = T(o) ^ r >> 5
                }
                o = T(o);
                for (let t = 0; t < n; t++) o = T(o) ^ 31 & e.charCodeAt(t);
                for (let e of t) o = T(o) ^ e;
                for (let e = 0; e < 6; e++) o = T(o);
                return o ^= r, H.encode(l([o % 2 ** 30], 30, 5, !1))
            }

            function k(e) {
                const t = "bech32" === e ? 1 : 734539939,
                    r = p(5),
                    n = r.decode,
                    o = r.encode,
                    i = y(n);

                function s(e, r = 90) {
                    if ("string" != typeof e) throw new Error("bech32.decode input should be string, not " + typeof e);
                    if (e.length < 8 || !1 !== r && e.length > r) throw new TypeError(`Wrong string length: ${e.length} (${e}). Expected (8..${r})`);
                    const n = e.toLowerCase();
                    if (e !== n && e !== e.toUpperCase()) throw new Error("String must be lowercase or uppercase");
                    const o = (e = n).lastIndexOf("1");
                    if (0 === o || -1 === o) throw new Error('Letter "1" must be present between prefix and data only');
                    const i = e.slice(0, o),
                        s = e.slice(o + 1);
                    if (s.length < 6) throw new Error("Data must be at least 6 characters long");
                    const a = H.decode(s).slice(0, -6),
                        c = C(i, a, t);
                    if (!s.endsWith(c)) throw new Error(`Invalid checksum in ${e}: expected "${c}"`);
                    return {
                        prefix: i,
                        words: a
                    }
                }
                return {
                    encode: function(e, r, n = 90) {
                        if ("string" != typeof e) throw new Error("bech32.encode prefix should be string, not " + typeof e);
                        if (!Array.isArray(r) || r.length && "number" != typeof r[0]) throw new Error("bech32.encode words should be array of numbers, not " + typeof r);
                        const o = e.length + 7 + r.length;
                        if (!1 !== n && o > n) throw new TypeError(`Length ${o} exceeds limit ${n}`);
                        return `${e=e.toLowerCase()}1${H.encode(r)}${C(e,r,t)}`
                    },
                    decode: s,
                    decodeToBytes: function(e) {
                        const {
                            prefix: t,
                            words: r
                        } = s(e, !1);
                        return {
                            prefix: t,
                            words: r,
                            bytes: n(r)
                        }
                    },
                    decodeUnsafe: y(s),
                    fromWords: n,
                    fromWordsUnsafe: i,
                    toWords: o
                }
            }
            const _ = k("bech32"),
                P = k("bech32m"),
                F = {
                    encode: e => (new TextDecoder).decode(e),
                    decode: e => (new TextEncoder).encode(e)
                },
                j = o(p(4), i("0123456789abcdef"), s(""), c(e => {
                    if ("string" != typeof e || e.length % 2) throw new TypeError(`hex.decode: expected string, got ${typeof e} with length ${e.length}`);
                    return e.toLowerCase()
                })),
                M = {
                    utf8: F,
                    hex: j,
                    base16: g,
                    base32: E,
                    base64: L,
                    base64url: B,
                    base58: A,
                    base58xmr: O
                },
                R = "Invalid encoding type. Available types: " + Object.keys(M).join(", "),
                G = (e, t) => {
                    if ("string" != typeof e || !M.hasOwnProperty(e)) throw new TypeError(R);
                    if (!(t instanceof Uint8Array)) throw new TypeError("bytesToString() expects Uint8Array");
                    return M[e].encode(t)
                },
                V = G,
                $ = (e, t) => {
                    if (!M.hasOwnProperty(e)) throw new TypeError(R);
                    if ("string" != typeof t) throw new TypeError("stringToBytes() expects string");
                    return M[e].decode(t)
                },
                W = $
        },
        4: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.s16 = t.s8 = t.nu64be = t.u48be = t.u40be = t.u32be = t.u24be = t.u16be = t.nu64 = t.u48 = t.u40 = t.u32 = t.u24 = t.u16 = t.u8 = t.offset = t.greedy = t.Constant = t.UTF8 = t.CString = t.Blob = t.Boolean = t.BitField = t.BitStructure = t.VariantLayout = t.Union = t.UnionLayoutDiscriminator = t.UnionDiscriminator = t.Structure = t.Sequence = t.DoubleBE = t.Double = t.FloatBE = t.Float = t.NearInt64BE = t.NearInt64 = t.NearUInt64BE = t.NearUInt64 = t.IntBE = t.Int = t.UIntBE = t.UInt = t.OffsetLayout = t.GreedyCount = t.ExternalLayout = t.bindConstructorLayout = t.nameWithProperty = t.Layout = t.uint8ArrayToBuffer = t.checkUint8Array = void 0, t.constant = t.utf8 = t.cstr = t.blob = t.unionLayoutDiscriminator = t.union = t.seq = t.bits = t.struct = t.f64be = t.f64 = t.f32be = t.f32 = t.ns64be = t.s48be = t.s40be = t.s32be = t.s24be = t.s16be = t.ns64 = t.s48 = t.s40 = t.s32 = t.s24 = void 0;
            const n = r(12);

            function o(e) {
                if (!(e instanceof Uint8Array)) throw new TypeError("b must be a Uint8Array")
            }

            function i(e) {
                return o(e), n.Buffer.from(e.buffer, e.byteOffset, e.length)
            }
            t.checkUint8Array = o, t.uint8ArrayToBuffer = i;
            class Layout {
                constructor(e, t) {
                    if (!Number.isInteger(e)) throw new TypeError("span must be an integer");
                    this.span = e, this.property = t
                }
                makeDestinationObject() {
                    return {}
                }
                getSpan(e, t) {
                    if (0 > this.span) throw new RangeError("indeterminate span");
                    return this.span
                }
                replicate(e) {
                    const t = Object.create(this.constructor.prototype);
                    return Object.assign(t, this), t.property = e, t
                }
                fromArray(e) {}
            }

            function s(e, t) {
                return t.property ? e + "[" + t.property + "]" : e
            }
            t.Layout = Layout, t.nameWithProperty = s, t.bindConstructorLayout = function(e, t) {
                if ("function" != typeof e) throw new TypeError("Class must be constructor");
                if (Object.prototype.hasOwnProperty.call(e, "layout_")) throw new Error("Class is already bound to a layout");
                if (!(t && t instanceof Layout)) throw new TypeError("layout must be a Layout");
                if (Object.prototype.hasOwnProperty.call(t, "boundConstructor_")) throw new Error("layout is already bound to a constructor");
                e.layout_ = t, t.boundConstructor_ = e, t.makeDestinationObject = () => new e, Object.defineProperty(e.prototype, "encode", {
                    value(e, r) {
                        return t.encode(this, e, r)
                    },
                    writable: !0
                }), Object.defineProperty(e, "decode", {
                    value: (e, r) => t.decode(e, r),
                    writable: !0
                })
            };
            class ExternalLayout extends Layout {
                isCount() {
                    throw new Error("ExternalLayout is abstract")
                }
            }
            t.ExternalLayout = ExternalLayout;
            class GreedyCount extends ExternalLayout {
                constructor(e = 1, t) {
                    if (!Number.isInteger(e) || 0 >= e) throw new TypeError("elementSpan must be a (positive) integer");
                    super(-1, t), this.elementSpan = e
                }
                isCount() {
                    return !0
                }
                decode(e, t = 0) {
                    o(e);
                    const r = e.length - t;
                    return Math.floor(r / this.elementSpan)
                }
                encode(e, t, r) {
                    return 0
                }
            }
            t.GreedyCount = GreedyCount;
            class OffsetLayout extends ExternalLayout {
                constructor(e, t = 0, r) {
                    if (!(e instanceof Layout)) throw new TypeError("layout must be a Layout");
                    if (!Number.isInteger(t)) throw new TypeError("offset must be integer or undefined");
                    super(e.span, r || e.property), this.layout = e, this.offset = t
                }
                isCount() {
                    return this.layout instanceof UInt || this.layout instanceof UIntBE
                }
                decode(e, t = 0) {
                    return this.layout.decode(e, t + this.offset)
                }
                encode(e, t, r = 0) {
                    return this.layout.encode(e, t, r + this.offset)
                }
            }
            t.OffsetLayout = OffsetLayout;
            class UInt extends Layout {
                constructor(e, t) {
                    if (super(e, t), 6 < this.span) throw new RangeError("span must not exceed 6 bytes")
                }
                decode(e, t = 0) {
                    return i(e).readUIntLE(t, this.span)
                }
                encode(e, t, r = 0) {
                    return i(t).writeUIntLE(e, r, this.span), this.span
                }
            }
            t.UInt = UInt;
            class UIntBE extends Layout {
                constructor(e, t) {
                    if (super(e, t), 6 < this.span) throw new RangeError("span must not exceed 6 bytes")
                }
                decode(e, t = 0) {
                    return i(e).readUIntBE(t, this.span)
                }
                encode(e, t, r = 0) {
                    return i(t).writeUIntBE(e, r, this.span), this.span
                }
            }
            t.UIntBE = UIntBE;
            class Int extends Layout {
                constructor(e, t) {
                    if (super(e, t), 6 < this.span) throw new RangeError("span must not exceed 6 bytes")
                }
                decode(e, t = 0) {
                    return i(e).readIntLE(t, this.span)
                }
                encode(e, t, r = 0) {
                    return i(t).writeIntLE(e, r, this.span), this.span
                }
            }
            t.Int = Int;
            class IntBE extends Layout {
                constructor(e, t) {
                    if (super(e, t), 6 < this.span) throw new RangeError("span must not exceed 6 bytes")
                }
                decode(e, t = 0) {
                    return i(e).readIntBE(t, this.span)
                }
                encode(e, t, r = 0) {
                    return i(t).writeIntBE(e, r, this.span), this.span
                }
            }
            t.IntBE = IntBE;
            const a = Math.pow(2, 32);

            function c(e) {
                const t = Math.floor(e / a);
                return {
                    hi32: t,
                    lo32: e - t * a
                }
            }

            function u(e, t) {
                return e * a + t
            }
            class NearUInt64 extends Layout {
                constructor(e) {
                    super(8, e)
                }
                decode(e, t = 0) {
                    const r = i(e),
                        n = r.readUInt32LE(t);
                    return u(r.readUInt32LE(t + 4), n)
                }
                encode(e, t, r = 0) {
                    const n = c(e),
                        o = i(t);
                    return o.writeUInt32LE(n.lo32, r), o.writeUInt32LE(n.hi32, r + 4), 8
                }
            }
            t.NearUInt64 = NearUInt64;
            class NearUInt64BE extends Layout {
                constructor(e) {
                    super(8, e)
                }
                decode(e, t = 0) {
                    const r = i(e);
                    return u(r.readUInt32BE(t), r.readUInt32BE(t + 4))
                }
                encode(e, t, r = 0) {
                    const n = c(e),
                        o = i(t);
                    return o.writeUInt32BE(n.hi32, r), o.writeUInt32BE(n.lo32, r + 4), 8
                }
            }
            t.NearUInt64BE = NearUInt64BE;
            class NearInt64 extends Layout {
                constructor(e) {
                    super(8, e)
                }
                decode(e, t = 0) {
                    const r = i(e),
                        n = r.readUInt32LE(t);
                    return u(r.readInt32LE(t + 4), n)
                }
                encode(e, t, r = 0) {
                    const n = c(e),
                        o = i(t);
                    return o.writeUInt32LE(n.lo32, r), o.writeInt32LE(n.hi32, r + 4), 8
                }
            }
            t.NearInt64 = NearInt64;
            class NearInt64BE extends Layout {
                constructor(e) {
                    super(8, e)
                }
                decode(e, t = 0) {
                    const r = i(e);
                    return u(r.readInt32BE(t), r.readUInt32BE(t + 4))
                }
                encode(e, t, r = 0) {
                    const n = c(e),
                        o = i(t);
                    return o.writeInt32BE(n.hi32, r), o.writeUInt32BE(n.lo32, r + 4), 8
                }
            }
            t.NearInt64BE = NearInt64BE;
            class Float extends Layout {
                constructor(e) {
                    super(4, e)
                }
                decode(e, t = 0) {
                    return i(e).readFloatLE(t)
                }
                encode(e, t, r = 0) {
                    return i(t).writeFloatLE(e, r), 4
                }
            }
            t.Float = Float;
            class FloatBE extends Layout {
                constructor(e) {
                    super(4, e)
                }
                decode(e, t = 0) {
                    return i(e).readFloatBE(t)
                }
                encode(e, t, r = 0) {
                    return i(t).writeFloatBE(e, r), 4
                }
            }
            t.FloatBE = FloatBE;
            class Double extends Layout {
                constructor(e) {
                    super(8, e)
                }
                decode(e, t = 0) {
                    return i(e).readDoubleLE(t)
                }
                encode(e, t, r = 0) {
                    return i(t).writeDoubleLE(e, r), 8
                }
            }
            t.Double = Double;
            class DoubleBE extends Layout {
                constructor(e) {
                    super(8, e)
                }
                decode(e, t = 0) {
                    return i(e).readDoubleBE(t)
                }
                encode(e, t, r = 0) {
                    return i(t).writeDoubleBE(e, r), 8
                }
            }
            t.DoubleBE = DoubleBE;
            class Sequence extends Layout {
                constructor(e, t, r) {
                    if (!(e instanceof Layout)) throw new TypeError("elementLayout must be a Layout");
                    if (!(t instanceof ExternalLayout && t.isCount() || Number.isInteger(t) && 0 <= t)) throw new TypeError("count must be non-negative integer or an unsigned integer ExternalLayout");
                    let n = -1;
                    !(t instanceof ExternalLayout) && 0 < e.span && (n = t * e.span), super(n, r), this.elementLayout = e, this.count = t
                }
                getSpan(e, t = 0) {
                    if (0 <= this.span) return this.span;
                    let r = 0,
                        n = this.count;
                    if (n instanceof ExternalLayout && (n = n.decode(e, t)), 0 < this.elementLayout.span) r = n * this.elementLayout.span;
                    else {
                        let o = 0;
                        for (; o < n;) r += this.elementLayout.getSpan(e, t + r), ++o
                    }
                    return r
                }
                decode(e, t = 0) {
                    const r = [];
                    let n = 0,
                        o = this.count;
                    for (o instanceof ExternalLayout && (o = o.decode(e, t)); n < o;) r.push(this.elementLayout.decode(e, t)), t += this.elementLayout.getSpan(e, t), n += 1;
                    return r
                }
                encode(e, t, r = 0) {
                    const n = this.elementLayout,
                        o = e.reduce((e, o) => e + n.encode(o, t, r + e), 0);
                    return this.count instanceof ExternalLayout && this.count.encode(e.length, t, r), o
                }
            }
            t.Sequence = Sequence;
            class Structure extends Layout {
                constructor(e, t, r) {
                    if (!Array.isArray(e) || !e.reduce((e, t) => e && t instanceof Layout, !0)) throw new TypeError("fields must be array of Layout instances");
                    "boolean" == typeof t && void 0 === r && (r = t, t = void 0);
                    for (const t of e)
                        if (0 > t.span && void 0 === t.property) throw new Error("fields cannot contain unnamed variable-length layout");
                    let n = -1;
                    try {
                        n = e.reduce((e, t) => e + t.getSpan(), 0)
                    } catch (e) {}
                    super(n, t), this.fields = e, this.decodePrefixes = !!r
                }
                getSpan(e, t = 0) {
                    if (0 <= this.span) return this.span;
                    let r = 0;
                    try {
                        r = this.fields.reduce((r, n) => {
                            const o = n.getSpan(e, t);
                            return t += o, r + o
                        }, 0)
                    } catch (e) {
                        throw new RangeError("indeterminate span")
                    }
                    return r
                }
                decode(e, t = 0) {
                    o(e);
                    const r = this.makeDestinationObject();
                    for (const n of this.fields)
                        if (void 0 !== n.property && (r[n.property] = n.decode(e, t)), t += n.getSpan(e, t), this.decodePrefixes && e.length === t) break;
                    return r
                }
                encode(e, t, r = 0) {
                    const n = r;
                    let o = 0,
                        i = 0;
                    for (const n of this.fields) {
                        let s = n.span;
                        if (i = 0 < s ? s : 0, void 0 !== n.property) {
                            const o = e[n.property];
                            void 0 !== o && (i = n.encode(o, t, r), 0 > s && (s = n.getSpan(t, r)))
                        }
                        o = r, r += s
                    }
                    return o + i - n
                }
                fromArray(e) {
                    const t = this.makeDestinationObject();
                    for (const r of this.fields) void 0 !== r.property && 0 < e.length && (t[r.property] = e.shift());
                    return t
                }
                layoutFor(e) {
                    if ("string" != typeof e) throw new TypeError("property must be string");
                    for (const t of this.fields)
                        if (t.property === e) return t
                }
                offsetOf(e) {
                    if ("string" != typeof e) throw new TypeError("property must be string");
                    let t = 0;
                    for (const r of this.fields) {
                        if (r.property === e) return t;
                        0 > r.span ? t = -1 : 0 <= t && (t += r.span)
                    }
                }
            }
            t.Structure = Structure;
            class UnionDiscriminator {
                constructor(e) {
                    this.property = e
                }
                decode(e, t) {
                    throw new Error("UnionDiscriminator is abstract")
                }
                encode(e, t, r) {
                    throw new Error("UnionDiscriminator is abstract")
                }
            }
            t.UnionDiscriminator = UnionDiscriminator;
            class UnionLayoutDiscriminator extends UnionDiscriminator {
                constructor(e, t) {
                    if (!(e instanceof ExternalLayout && e.isCount())) throw new TypeError("layout must be an unsigned integer ExternalLayout");
                    super(t || e.property || "variant"), this.layout = e
                }
                decode(e, t) {
                    return this.layout.decode(e, t)
                }
                encode(e, t, r) {
                    return this.layout.encode(e, t, r)
                }
            }
            t.UnionLayoutDiscriminator = UnionLayoutDiscriminator;
            class Union extends Layout {
                constructor(e, t, r) {
                    let n;
                    if (e instanceof UInt || e instanceof UIntBE) n = new UnionLayoutDiscriminator(new OffsetLayout(e));
                    else if (e instanceof ExternalLayout && e.isCount()) n = new UnionLayoutDiscriminator(e);
                    else {
                        if (!(e instanceof UnionDiscriminator)) throw new TypeError("discr must be a UnionDiscriminator or an unsigned integer layout");
                        n = e
                    }
                    if (void 0 === t && (t = null), !(null === t || t instanceof Layout)) throw new TypeError("defaultLayout must be null or a Layout");
                    if (null !== t) {
                        if (0 > t.span) throw new Error("defaultLayout must have constant span");
                        void 0 === t.property && (t = t.replicate("content"))
                    }
                    let o = -1;
                    t && (o = t.span, 0 <= o && (e instanceof UInt || e instanceof UIntBE) && (o += n.layout.span)), super(o, r), this.discriminator = n, this.usesPrefixDiscriminator = e instanceof UInt || e instanceof UIntBE, this.defaultLayout = t, this.registry = {};
                    let i = this.defaultGetSourceVariant.bind(this);
                    this.getSourceVariant = function(e) {
                        return i(e)
                    }, this.configGetSourceVariant = function(e) {
                        i = e.bind(this)
                    }
                }
                getSpan(e, t = 0) {
                    if (0 <= this.span) return this.span;
                    const r = this.getVariant(e, t);
                    if (!r) throw new Error("unable to determine span for unrecognized variant");
                    return r.getSpan(e, t)
                }
                defaultGetSourceVariant(e) {
                    if (Object.prototype.hasOwnProperty.call(e, this.discriminator.property)) {
                        if (this.defaultLayout && this.defaultLayout.property && Object.prototype.hasOwnProperty.call(e, this.defaultLayout.property)) return;
                        const t = this.registry[e[this.discriminator.property]];
                        if (t && (!t.layout || t.property && Object.prototype.hasOwnProperty.call(e, t.property))) return t
                    } else
                        for (const t in this.registry) {
                            const r = this.registry[t];
                            if (r.property && Object.prototype.hasOwnProperty.call(e, r.property)) return r
                        }
                    throw new Error("unable to infer src variant")
                }
                decode(e, t = 0) {
                    let r;
                    const n = this.discriminator,
                        o = n.decode(e, t),
                        i = this.registry[o];
                    if (void 0 === i) {
                        const i = this.defaultLayout;
                        let s = 0;
                        this.usesPrefixDiscriminator && (s = n.layout.span), r = this.makeDestinationObject(), r[n.property] = o, r[i.property] = i.decode(e, t + s)
                    } else r = i.decode(e, t);
                    return r
                }
                encode(e, t, r = 0) {
                    const n = this.getSourceVariant(e);
                    if (void 0 === n) {
                        const n = this.discriminator,
                            o = this.defaultLayout;
                        let i = 0;
                        return this.usesPrefixDiscriminator && (i = n.layout.span), n.encode(e[n.property], t, r), i + o.encode(e[o.property], t, r + i)
                    }
                    return n.encode(e, t, r)
                }
                addVariant(e, t, r) {
                    const n = new VariantLayout(this, e, t, r);
                    return this.registry[e] = n, n
                }
                getVariant(e, t = 0) {
                    let r;
                    return r = e instanceof Uint8Array ? this.discriminator.decode(e, t) : e, this.registry[r]
                }
            }
            t.Union = Union;
            class VariantLayout extends Layout {
                constructor(e, t, r, n) {
                    if (!(e instanceof Union)) throw new TypeError("union must be a Union");
                    if (!Number.isInteger(t) || 0 > t) throw new TypeError("variant must be a (non-negative) integer");
                    if ("string" == typeof r && void 0 === n && (n = r, r = null), r) {
                        if (!(r instanceof Layout)) throw new TypeError("layout must be a Layout");
                        if (null !== e.defaultLayout && 0 <= r.span && r.span > e.defaultLayout.span) throw new Error("variant span exceeds span of containing union");
                        if ("string" != typeof n) throw new TypeError("variant must have a String property")
                    }
                    let o = e.span;
                    0 > e.span && (o = r ? r.span : 0, 0 <= o && e.usesPrefixDiscriminator && (o += e.discriminator.layout.span)), super(o, n), this.union = e, this.variant = t, this.layout = r || null
                }
                getSpan(e, t = 0) {
                    if (0 <= this.span) return this.span;
                    let r = 0;
                    this.union.usesPrefixDiscriminator && (r = this.union.discriminator.layout.span);
                    let n = 0;
                    return this.layout && (n = this.layout.getSpan(e, t + r)), r + n
                }
                decode(e, t = 0) {
                    const r = this.makeDestinationObject();
                    if (this !== this.union.getVariant(e, t)) throw new Error("variant mismatch");
                    let n = 0;
                    return this.union.usesPrefixDiscriminator && (n = this.union.discriminator.layout.span), this.layout ? r[this.property] = this.layout.decode(e, t + n) : this.property ? r[this.property] = !0 : this.union.usesPrefixDiscriminator && (r[this.union.discriminator.property] = this.variant), r
                }
                encode(e, t, r = 0) {
                    let n = 0;
                    if (this.union.usesPrefixDiscriminator && (n = this.union.discriminator.layout.span), this.layout && !Object.prototype.hasOwnProperty.call(e, this.property)) throw new TypeError("variant lacks property " + this.property);
                    this.union.discriminator.encode(this.variant, t, r);
                    let o = n;
                    if (this.layout && (this.layout.encode(e[this.property], t, r + n), o += this.layout.getSpan(t, r + n), 0 <= this.union.span && o > this.union.span)) throw new Error("encoded variant overruns containing union");
                    return o
                }
                fromArray(e) {
                    if (this.layout) return this.layout.fromArray(e)
                }
            }

            function f(e) {
                return 0 > e && (e += 4294967296), e
            }
            t.VariantLayout = VariantLayout;
            class BitStructure extends Layout {
                constructor(e, t, r) {
                    if (!(e instanceof UInt || e instanceof UIntBE)) throw new TypeError("word must be a UInt or UIntBE layout");
                    if ("string" == typeof t && void 0 === r && (r = t, t = !1), 4 < e.span) throw new RangeError("word cannot exceed 32 bits");
                    super(e.span, r), this.word = e, this.msb = !!t, this.fields = [];
                    let n = 0;
                    this._packedSetValue = function(e) {
                        return n = f(e), this
                    }, this._packedGetValue = function() {
                        return n
                    }
                }
                decode(e, t = 0) {
                    const r = this.makeDestinationObject(),
                        n = this.word.decode(e, t);
                    this._packedSetValue(n);
                    for (const t of this.fields) void 0 !== t.property && (r[t.property] = t.decode(e));
                    return r
                }
                encode(e, t, r = 0) {
                    const n = this.word.decode(t, r);
                    this._packedSetValue(n);
                    for (const t of this.fields)
                        if (void 0 !== t.property) {
                            const r = e[t.property];
                            void 0 !== r && t.encode(r)
                        } return this.word.encode(this._packedGetValue(), t, r)
                }
                addField(e, t) {
                    const r = new BitField(this, e, t);
                    return this.fields.push(r), r
                }
                addBoolean(e) {
                    const t = new Boolean(this, e);
                    return this.fields.push(t), t
                }
                fieldFor(e) {
                    if ("string" != typeof e) throw new TypeError("property must be string");
                    for (const t of this.fields)
                        if (t.property === e) return t
                }
            }
            t.BitStructure = BitStructure;
            class BitField {
                constructor(e, t, r) {
                    if (!(e instanceof BitStructure)) throw new TypeError("container must be a BitStructure");
                    if (!Number.isInteger(t) || 0 >= t) throw new TypeError("bits must be positive integer");
                    const n = 8 * e.span,
                        o = e.fields.reduce((e, t) => e + t.bits, 0);
                    if (t + o > n) throw new Error("bits too long for span remainder (" + (n - o) + " of " + n + " remain)");
                    this.container = e, this.bits = t, this.valueMask = (1 << t) - 1, 32 === t && (this.valueMask = 4294967295), this.start = o, this.container.msb && (this.start = n - o - t), this.wordMask = f(this.valueMask << this.start), this.property = r
                }
                decode(e, t) {
                    return f(this.container._packedGetValue() & this.wordMask) >>> this.start
                }
                encode(e) {
                    if ("number" != typeof e || !Number.isInteger(e) || e !== f(e & this.valueMask)) throw new TypeError(s("BitField.encode", this) + " value must be integer not exceeding " + this.valueMask);
                    const t = this.container._packedGetValue(),
                        r = f(e << this.start);
                    this.container._packedSetValue(f(t & ~this.wordMask) | r)
                }
            }
            t.BitField = BitField;
            class Boolean extends BitField {
                constructor(e, t) {
                    super(e, 1, t)
                }
                decode(e, t) {
                    return !!super.decode(e, t)
                }
                encode(e) {
                    "boolean" == typeof e && (e = +e), super.encode(e)
                }
            }
            t.Boolean = Boolean;
            class Blob extends Layout {
                constructor(e, t) {
                    if (!(e instanceof ExternalLayout && e.isCount() || Number.isInteger(e) && 0 <= e)) throw new TypeError("length must be positive integer or an unsigned integer ExternalLayout");
                    let r = -1;
                    e instanceof ExternalLayout || (r = e), super(r, t), this.length = e
                }
                getSpan(e, t) {
                    let r = this.span;
                    return 0 > r && (r = this.length.decode(e, t)), r
                }
                decode(e, t = 0) {
                    let r = this.span;
                    return 0 > r && (r = this.length.decode(e, t)), i(e).slice(t, t + r)
                }
                encode(e, t, r) {
                    let n = this.length;
                    if (this.length instanceof ExternalLayout && (n = e.length), !(e instanceof Uint8Array && n === e.length)) throw new TypeError(s("Blob.encode", this) + " requires (length " + n + ") Uint8Array as src");
                    if (r + n > t.length) throw new RangeError("encoding overruns Uint8Array");
                    const o = i(e);
                    return i(t).write(o.toString("hex"), r, n, "hex"), this.length instanceof ExternalLayout && this.length.encode(n, t, r), n
                }
            }
            t.Blob = Blob;
            class CString extends Layout {
                constructor(e) {
                    super(-1, e)
                }
                getSpan(e, t = 0) {
                    o(e);
                    let r = t;
                    for (; r < e.length && 0 !== e[r];) r += 1;
                    return 1 + r - t
                }
                decode(e, t = 0) {
                    const r = this.getSpan(e, t);
                    return i(e).slice(t, t + r - 1).toString("utf-8")
                }
                encode(e, t, r = 0) {
                    "string" != typeof e && (e = String(e));
                    const o = n.Buffer.from(e, "utf8"),
                        s = o.length;
                    if (r + s > t.length) throw new RangeError("encoding overruns Buffer");
                    const a = i(t);
                    return o.copy(a, r), a[r + s] = 0, s + 1
                }
            }
            t.CString = CString;
            class UTF8 extends Layout {
                constructor(e, t) {
                    if ("string" == typeof e && void 0 === t && (t = e, e = void 0), void 0 === e) e = -1;
                    else if (!Number.isInteger(e)) throw new TypeError("maxSpan must be an integer");
                    super(-1, t), this.maxSpan = e
                }
                getSpan(e, t = 0) {
                    return o(e), e.length - t
                }
                decode(e, t = 0) {
                    const r = this.getSpan(e, t);
                    if (0 <= this.maxSpan && this.maxSpan < r) throw new RangeError("text length exceeds maxSpan");
                    return i(e).slice(t, t + r).toString("utf-8")
                }
                encode(e, t, r = 0) {
                    "string" != typeof e && (e = String(e));
                    const o = n.Buffer.from(e, "utf8"),
                        s = o.length;
                    if (0 <= this.maxSpan && this.maxSpan < s) throw new RangeError("text length exceeds maxSpan");
                    if (r + s > t.length) throw new RangeError("encoding overruns Buffer");
                    return o.copy(i(t), r), s
                }
            }
            t.UTF8 = UTF8;
            class Constant extends Layout {
                constructor(e, t) {
                    super(0, t), this.value = e
                }
                decode(e, t) {
                    return this.value
                }
                encode(e, t, r) {
                    return 0
                }
            }
            t.Constant = Constant, t.greedy = (e, t) => new GreedyCount(e, t), t.offset = (e, t, r) => new OffsetLayout(e, t, r), t.u8 = e => new UInt(1, e), t.u16 = e => new UInt(2, e), t.u24 = e => new UInt(3, e), t.u32 = e => new UInt(4, e), t.u40 = e => new UInt(5, e), t.u48 = e => new UInt(6, e), t.nu64 = e => new NearUInt64(e), t.u16be = e => new UIntBE(2, e), t.u24be = e => new UIntBE(3, e), t.u32be = e => new UIntBE(4, e), t.u40be = e => new UIntBE(5, e), t.u48be = e => new UIntBE(6, e), t.nu64be = e => new NearUInt64BE(e), t.s8 = e => new Int(1, e), t.s16 = e => new Int(2, e), t.s24 = e => new Int(3, e), t.s32 = e => new Int(4, e), t.s40 = e => new Int(5, e), t.s48 = e => new Int(6, e), t.ns64 = e => new NearInt64(e), t.s16be = e => new IntBE(2, e), t.s24be = e => new IntBE(3, e), t.s32be = e => new IntBE(4, e), t.s40be = e => new IntBE(5, e), t.s48be = e => new IntBE(6, e), t.ns64be = e => new NearInt64BE(e), t.f32 = e => new Float(e), t.f32be = e => new FloatBE(e), t.f64 = e => new Double(e), t.f64be = e => new DoubleBE(e), t.struct = (e, t, r) => new Structure(e, t, r), t.bits = (e, t, r) => new BitStructure(e, t, r), t.seq = (e, t, r) => new Sequence(e, t, r), t.union = (e, t, r) => new Union(e, t, r), t.unionLayoutDiscriminator = (e, t) => new UnionLayoutDiscriminator(e, t), t.blob = (e, t) => new Blob(e, t), t.cstr = e => new CString(e), t.utf8 = (e, t) => new UTF8(e, t), t.constant = (e, t) => new Constant(e, t)
        },
        41: function(e, t, r) {
            "use strict";
            var n = this && this.__createBinding || (Object.create ? function(e, t, r, n) {
                    void 0 === n && (n = r), Object.defineProperty(e, n, {
                        enumerable: !0,
                        get: function() {
                            return t[r]
                        }
                    })
                } : function(e, t, r, n) {
                    void 0 === n && (n = r), e[n] = t[r]
                }),
                o = this && this.__exportStar || function(e, t) {
                    for (var r in e) "default" === r || Object.prototype.hasOwnProperty.call(t, r) || n(t, e, r)
                };
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), o(r(504), t), o(r(1866), t), o(r(3641), t), o(r(3643), t), o(r(3644), t)
        },
        424: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.randomBytes = t.wrapConstructorWithOpts = t.wrapConstructor = t.checkOpts = t.Hash = t.concatBytes = t.toBytes = t.utf8ToBytes = t.asyncLoop = t.nextTick = t.hexToBytes = t.bytesToHex = t.isLE = t.rotr = t.createView = t.u32 = t.u8 = void 0;
            const n = r(3938);
            t.u8 = e => new Uint8Array(e.buffer, e.byteOffset, e.byteLength);
            t.u32 = e => new Uint32Array(e.buffer, e.byteOffset, Math.floor(e.byteLength / 4));
            t.createView = e => new DataView(e.buffer, e.byteOffset, e.byteLength);
            if (t.rotr = (e, t) => e << 32 - t | e >>> t, t.isLE = 68 === new Uint8Array(new Uint32Array([287454020]).buffer)[0], !t.isLE) throw new Error("Non little-endian hardware is not supported");
            const o = Array.from({
                length: 256
            }, (e, t) => t.toString(16).padStart(2, "0"));
            t.bytesToHex = function(e) {
                if (!(e instanceof Uint8Array)) throw new Error("Uint8Array expected");
                let t = "";
                for (let r = 0; r < e.length; r++) t += o[e[r]];
                return t
            }, t.hexToBytes = function(e) {
                if ("string" != typeof e) throw new TypeError("hexToBytes: expected string, got " + typeof e);
                if (e.length % 2) throw new Error("hexToBytes: received invalid unpadded hex");
                const t = new Uint8Array(e.length / 2);
                for (let r = 0; r < t.length; r++) {
                    const n = 2 * r,
                        o = e.slice(n, n + 2),
                        i = Number.parseInt(o, 16);
                    if (Number.isNaN(i) || i < 0) throw new Error("Invalid byte sequence");
                    t[r] = i
                }
                return t
            };

            function i(e) {
                if ("string" != typeof e) throw new TypeError("utf8ToBytes expected string, got " + typeof e);
                return (new TextEncoder).encode(e)
            }

            function s(e) {
                if ("string" == typeof e && (e = i(e)), !(e instanceof Uint8Array)) throw new TypeError(`Expected input type is Uint8Array (got ${typeof e})`);
                return e
            }
            t.nextTick = async () => {}, t.asyncLoop = async function(e, r, n) {
                let o = Date.now();
                for (let i = 0; i < e; i++) {
                    n(i);
                    const e = Date.now() - o;
                    e >= 0 && e < r || (await (0, t.nextTick)(), o += e)
                }
            }, t.utf8ToBytes = i, t.toBytes = s, t.concatBytes = function(...e) {
                if (!e.every(e => e instanceof Uint8Array)) throw new Error("Uint8Array list expected");
                if (1 === e.length) return e[0];
                const t = e.reduce((e, t) => e + t.length, 0),
                    r = new Uint8Array(t);
                for (let t = 0, n = 0; t < e.length; t++) {
                    const o = e[t];
                    r.set(o, n), n += o.length
                }
                return r
            };
            t.Hash = class Hash {
                clone() {
                    return this._cloneInto()
                }
            };
            t.checkOpts = function(e, t) {
                if (void 0 !== t && ("object" != typeof t || (r = t, "[object Object]" !== Object.prototype.toString.call(r) || r.constructor !== Object))) throw new TypeError("Options should be object or undefined");
                var r;
                return Object.assign(e, t)
            }, t.wrapConstructor = function(e) {
                const t = t => e().update(s(t)).digest(),
                    r = e();
                return t.outputLen = r.outputLen, t.blockLen = r.blockLen, t.create = () => e(), t
            }, t.wrapConstructorWithOpts = function(e) {
                const t = (t, r) => e(r).update(s(t)).digest(),
                    r = e({});
                return t.outputLen = r.outputLen, t.blockLen = r.blockLen, t.create = t => e(t), t
            }, t.randomBytes = function(e = 32) {
                if (n.crypto.web) return n.crypto.web.getRandomValues(new Uint8Array(e));
                if (n.crypto.node) return new Uint8Array(n.crypto.node.randomBytes(e).buffer);
                throw new Error("The environment doesn't have randomBytes function")
            }
        },
        504: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.encodeDecode = void 0;
            t.encodeDecode = e => ({
                decode: e.decode.bind(e),
                encode: e.encode.bind(e)
            })
        },
        648: function(e, t, r) {
            "use strict";

            function n(e) {
                if (!Number.isSafeInteger(e) || e < 0) throw new Error("Wrong positive integer: " + e)
            }

            function o(e) {
                if ("boolean" != typeof e) throw new Error("Expected boolean, not " + e)
            }

            function i(e, ...t) {
                if (!(e instanceof Uint8Array)) throw new TypeError("Expected Uint8Array");
                if (t.length > 0 && !t.includes(e.length)) throw new TypeError(`Expected Uint8Array of length ${t}, not of length=${e.length}`)
            }

            function s(e) {
                if ("function" != typeof e || "function" != typeof e.create) throw new Error("Hash should be wrapped by utils.wrapConstructor");
                n(e.outputLen), n(e.blockLen)
            }

            function a(e, t = !0) {
                if (e.destroyed) throw new Error("Hash instance has been destroyed");
                if (t && e.finished) throw new Error("Hash#digest() has already been called")
            }

            function c(e, t) {
                i(e);
                const r = t.outputLen;
                if (e.length < r) throw new Error("digestInto() expects output buffer of length at least " + r)
            }
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.output = t.exists = t.hash = t.bytes = t.bool = t.number = void 0, t.number = n, t.bool = o, t.bytes = i, t.hash = s, t.exists = a, t.output = c;
            const u = {
                number: n,
                bool: o,
                bytes: i,
                hash: s,
                exists: a,
                output: c
            };
            t.default = u
        }
    }
]);