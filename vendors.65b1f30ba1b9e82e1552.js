(window.webpackJsonp = window.webpackJsonp || []).push([
    [69], {
        14: function(t, r, i) {
            "use strict";
            i.d(r, "k", (function() {
                return h
            })), i.d(r, "j", (function() {
                return u
            })), i.d(r, "a", (function() {
                return a
            })), i.d(r, "b", (function() {
                return l
            })), i.d(r, "o", (function() {
                return f
            })), i.d(r, "p", (function() {
                return m
            })), i.d(r, "l", (function() {
                return d
            })), i.d(r, "i", (function() {
                return g
            })), i.d(r, "d", (function() {
                return c
            })), i.d(r, "e", (function() {
                return p
            })), i.d(r, "c", (function() {
                return v
            })), i.d(r, "g", (function() {
                return M
            })), i.d(r, "f", (function() {
                return w
            })), i.d(r, "h", (function() {
                return y
            })), i.d(r, "n", (function() {
                return b
            })), i.d(r, "m", (function() {
                return _
            }));
            const n = new(i(37).b)("bytes/5.7.0");

            function e(t) {
                return !!t.toHexString
            }

            function o(t) {
                return t.slice || (t.slice = function() {
                    const r = Array.prototype.slice.call(arguments);
                    return o(new Uint8Array(Array.prototype.slice.apply(t, r)))
                }), t
            }

            function h(t) {
                return d(t) && !(t.length % 2) || u(t)
            }

            function s(t) {
                return "number" == typeof t && t == t && t % 1 == 0
            }

            function u(t) {
                if (null == t) return !1;
                if (t.constructor === Uint8Array) return !0;
                if ("string" == typeof t) return !1;
                if (!s(t.length) || t.length < 0) return !1;
                for (let r = 0; r < t.length; r++) {
                    const i = t[r];
                    if (!s(i) || i < 0 || i >= 256) return !1
                }
                return !0
            }

            function a(t, r) {
                if (r || (r = {}), "number" == typeof t) {
                    n.checkSafeUint53(t, "invalid arrayify value");
                    const r = [];
                    for (; t;) r.unshift(255 & t), t = parseInt(String(t / 256));
                    return 0 === r.length && r.push(0), o(new Uint8Array(r))
                }
                if (r.allowMissingPrefix && "string" == typeof t && "0x" !== t.substring(0, 2) && (t = "0x" + t), e(t) && (t = t.toHexString()), d(t)) {
                    let i = t.substring(2);
                    i.length % 2 && ("left" === r.hexPad ? i = "0" + i : "right" === r.hexPad ? i += "0" : n.throwArgumentError("hex data is odd-length", "value", t));
                    const e = [];
                    for (let t = 0; t < i.length; t += 2) e.push(parseInt(i.substring(t, t + 2), 16));
                    return o(new Uint8Array(e))
                }
                return u(t) ? o(new Uint8Array(t)) : n.throwArgumentError("invalid arrayify value", "value", t)
            }

            function l(t) {
                const r = t.map(t => a(t)),
                    i = r.reduce((t, r) => t + r.length, 0),
                    n = new Uint8Array(i);
                return r.reduce((t, r) => (n.set(r, t), t + r.length), 0), o(n)
            }

            function f(t) {
                let r = a(t);
                if (0 === r.length) return r;
                let i = 0;
                for (; i < r.length && 0 === r[i];) i++;
                return i && (r = r.slice(i)), r
            }

            function m(t, r) {
                (t = a(t)).length > r && n.throwArgumentError("value out of range", "value", arguments[0]);
                const i = new Uint8Array(r);
                return i.set(t, r - t.length), o(i)
            }

            function d(t, r) {
                return !("string" != typeof t || !t.match(/^0x[0-9A-Fa-f]*$/)) && (!r || t.length === 2 + 2 * r)
            }

            function g(t, r) {
                if (r || (r = {}), "number" == typeof t) {
                    n.checkSafeUint53(t, "invalid hexlify value");
                    let r = "";
                    for (; t;) r = "0123456789abcdef" [15 & t] + r, t = Math.floor(t / 16);
                    return r.length ? (r.length % 2 && (r = "0" + r), "0x" + r) : "0x00"
                }
                if ("bigint" == typeof t) return (t = t.toString(16)).length % 2 ? "0x0" + t : "0x" + t;
                if (r.allowMissingPrefix && "string" == typeof t && "0x" !== t.substring(0, 2) && (t = "0x" + t), e(t)) return t.toHexString();
                if (d(t)) return t.length % 2 && ("left" === r.hexPad ? t = "0x0" + t.substring(2) : "right" === r.hexPad ? t += "0" : n.throwArgumentError("hex data is odd-length", "value", t)), t.toLowerCase();
                if (u(t)) {
                    let r = "0x";
                    for (let i = 0; i < t.length; i++) {
                        let n = t[i];
                        r += "0123456789abcdef" [(240 & n) >> 4] + "0123456789abcdef" [15 & n]
                    }
                    return r
                }
                return n.throwArgumentError("invalid hexlify value", "value", t)
            }

            function c(t) {
                if ("string" != typeof t) t = g(t);
                else if (!d(t) || t.length % 2) return null;
                return (t.length - 2) / 2
            }

            function p(t, r, i) {
                return "string" != typeof t ? t = g(t) : (!d(t) || t.length % 2) && n.throwArgumentError("invalid hexData", "value", t), r = 2 + 2 * r, null != i ? "0x" + t.substring(r, 2 + 2 * i) : "0x" + t.substring(r)
            }

            function v(t) {
                let r = "0x";
                return t.forEach(t => {
                    r += g(t).substring(2)
                }), r
            }

            function M(t) {
                const r = w(g(t, {
                    hexPad: "left"
                }));
                return "0x" === r ? "0x0" : r
            }

            function w(t) {
                "string" != typeof t && (t = g(t)), d(t) || n.throwArgumentError("invalid hex string", "value", t), t = t.substring(2);
                let r = 0;
                for (; r < t.length && "0" === t[r];) r++;
                return "0x" + t.substring(r)
            }

            function y(t, r) {
                for ("string" != typeof t ? t = g(t) : d(t) || n.throwArgumentError("invalid hex string", "value", t), t.length > 2 * r + 2 && n.throwArgumentError("value out of range", "value", arguments[1]); t.length < 2 * r + 2;) t = "0x0" + t.substring(2);
                return t
            }

            function b(t) {
                const r = {
                    r: "0x",
                    s: "0x",
                    _vs: "0x",
                    recoveryParam: 0,
                    v: 0,
                    yParityAndS: "0x",
                    compact: "0x"
                };
                if (h(t)) {
                    let i = a(t);
                    64 === i.length ? (r.v = 27 + (i[32] >> 7), i[32] &= 127, r.r = g(i.slice(0, 32)), r.s = g(i.slice(32, 64))) : 65 === i.length ? (r.r = g(i.slice(0, 32)), r.s = g(i.slice(32, 64)), r.v = i[64]) : n.throwArgumentError("invalid signature string", "signature", t), r.v < 27 && (0 === r.v || 1 === r.v ? r.v += 27 : n.throwArgumentError("signature invalid v byte", "signature", t)), r.recoveryParam = 1 - r.v % 2, r.recoveryParam && (i[32] |= 128), r._vs = g(i.slice(32, 64))
                } else {
                    if (r.r = t.r, r.s = t.s, r.v = t.v, r.recoveryParam = t.recoveryParam, r._vs = t._vs, null != r._vs) {
                        const i = m(a(r._vs), 32);
                        r._vs = g(i);
                        const e = i[0] >= 128 ? 1 : 0;
                        null == r.recoveryParam ? r.recoveryParam = e : r.recoveryParam !== e && n.throwArgumentError("signature recoveryParam mismatch _vs", "signature", t), i[0] &= 127;
                        const o = g(i);
                        null == r.s ? r.s = o : r.s !== o && n.throwArgumentError("signature v mismatch _vs", "signature", t)
                    }
                    if (null == r.recoveryParam) null == r.v ? n.throwArgumentError("signature missing v and recoveryParam", "signature", t) : 0 === r.v || 1 === r.v ? r.recoveryParam = r.v : r.recoveryParam = 1 - r.v % 2;
                    else if (null == r.v) r.v = 27 + r.recoveryParam;
                    else {
                        const i = 0 === r.v || 1 === r.v ? r.v : 1 - r.v % 2;
                        r.recoveryParam !== i && n.throwArgumentError("signature recoveryParam mismatch v", "signature", t)
                    }
                    null != r.r && d(r.r) ? r.r = y(r.r, 32) : n.throwArgumentError("signature missing or invalid r", "signature", t), null != r.s && d(r.s) ? r.s = y(r.s, 32) : n.throwArgumentError("signature missing or invalid s", "signature", t);
                    const i = a(r.s);
                    i[0] >= 128 && n.throwArgumentError("signature s out of range", "signature", t), r.recoveryParam && (i[0] |= 128);
                    const e = g(i);
                    r._vs && (d(r._vs) || n.throwArgumentError("signature invalid _vs", "signature", t), r._vs = y(r._vs, 32)), null == r._vs ? r._vs = e : r._vs !== e && n.throwArgumentError("signature _vs mismatch v and s", "signature", t)
                }
                return r.yParityAndS = r._vs, r.compact = r.r + r.yParityAndS.substring(2), r
            }

            function _(t) {
                return g(l([(t = b(t)).r, t.s, t.recoveryParam ? "0x1c" : "0x1b"]))
            }
        },
        1848: function(t, r, i) {
            "use strict";
            i.d(r, "a", (function() {
                return n
            }));
            const n = "bignumber/5.7.0"
        },
        209: function(t, r, i) {
            "use strict";
            i.d(r, "a", (function() {
                return d
            })), i.d(r, "e", (function() {
                return g
            })), i.d(r, "d", (function() {
                return c
            })), i.d(r, "b", (function() {
                return p
            })), i.d(r, "c", (function() {
                return v
            }));
            var n = i(14),
                e = i(319),
                o = i(150),
                h = i(138);
            const s = new(i(37).b)("address/5.7.0");

            function u(t) {
                Object(n.l)(t, 20) || s.throwArgumentError("invalid address", "address", t);
                const r = (t = t.toLowerCase()).substring(2).split(""),
                    i = new Uint8Array(40);
                for (let t = 0; t < 40; t++) i[t] = r[t].charCodeAt(0);
                const e = Object(n.a)(Object(o.a)(i));
                for (let t = 0; t < 40; t += 2) e[t >> 1] >> 4 >= 8 && (r[t] = r[t].toUpperCase()), (15 & e[t >> 1]) >= 8 && (r[t + 1] = r[t + 1].toUpperCase());
                return "0x" + r.join("")
            }
            const a = {};
            for (let t = 0; t < 10; t++) a[String(t)] = String(t);
            for (let t = 0; t < 26; t++) a[String.fromCharCode(65 + t)] = String(10 + t);
            const l = Math.floor((f = 9007199254740991, Math.log10 ? Math.log10(f) : Math.log(f) / Math.LN10));
            var f;

            function m(t) {
                let r = (t = (t = t.toUpperCase()).substring(4) + t.substring(0, 2) + "00").split("").map(t => a[t]).join("");
                for (; r.length >= l;) {
                    let t = r.substring(0, l);
                    r = parseInt(t, 10) % 97 + r.substring(t.length)
                }
                let i = String(98 - parseInt(r, 10) % 97);
                for (; i.length < 2;) i = "0" + i;
                return i
            }

            function d(t) {
                let r = null;
                if ("string" != typeof t && s.throwArgumentError("invalid address", "address", t), t.match(/^(0x)?[0-9a-fA-F]{40}$/)) "0x" !== t.substring(0, 2) && (t = "0x" + t), r = u(t), t.match(/([A-F].*[a-f])|([a-f].*[A-F])/) && r !== t && s.throwArgumentError("bad address checksum", "address", t);
                else if (t.match(/^XE[0-9]{2}[0-9A-Za-z]{30,31}$/)) {
                    for (t.substring(2, 4) !== m(t) && s.throwArgumentError("bad icap checksum", "address", t), r = Object(e.c)(t.substring(4)); r.length < 40;) r = "0" + r;
                    r = u("0x" + r)
                } else s.throwArgumentError("invalid address", "address", t);
                return r
            }

            function g(t) {
                try {
                    return d(t), !0
                } catch (t) {}
                return !1
            }

            function c(t) {
                let r = Object(e.b)(d(t).substring(2)).toUpperCase();
                for (; r.length < 30;) r = "0" + r;
                return "XE" + m("XE00" + r) + r
            }

            function p(t) {
                let r = null;
                try {
                    r = d(t.from)
                } catch (r) {
                    s.throwArgumentError("missing from address", "transaction", t)
                }
                const i = Object(n.o)(Object(n.a)(e.a.from(t.nonce).toHexString()));
                return d(Object(n.e)(Object(o.a)(Object(h.encode)([r, i])), 12))
            }

            function v(t, r, i) {
                return 32 !== Object(n.d)(r) && s.throwArgumentError("salt must be 32 bytes", "salt", r), 32 !== Object(n.d)(i) && s.throwArgumentError("initCodeHash must be 32 bytes", "initCodeHash", i), d(Object(n.e)(Object(o.a)(Object(n.b)(["0xff", d(t), r, i])), 12))
            }
        },
        2332: function(t, r, i) {
            (function(t) {
                ! function(t, r) {
                    "use strict";

                    function n(t, r) {
                        if (!t) throw new Error(r || "Assertion failed")
                    }

                    function e(t, r) {
                        t.super_ = r;
                        var i = function() {};
                        i.prototype = r.prototype, t.prototype = new i, t.prototype.constructor = t
                    }

                    function o(t, r, i) {
                        if (o.isBN(t)) return t;
                        this.negative = 0, this.words = null, this.length = 0, this.red = null, null !== t && ("le" !== r && "be" !== r || (i = r, r = 10), this._init(t || 0, r || 10, i || "be"))
                    }
                    var h;
                    "object" == typeof t ? t.exports = o : r.BN = o, o.BN = o, o.wordSize = 26;
                    try {
                        h = "undefined" != typeof window && void 0 !== window.Buffer ? window.Buffer : i(12).Buffer
                    } catch (t) {}

                    function s(t, r) {
                        var i = t.charCodeAt(r);
                        return i >= 48 && i <= 57 ? i - 48 : i >= 65 && i <= 70 ? i - 55 : i >= 97 && i <= 102 ? i - 87 : void n(!1, "Invalid character in " + t)
                    }

                    function u(t, r, i) {
                        var n = s(t, i);
                        return i - 1 >= r && (n |= s(t, i - 1) << 4), n
                    }

                    function a(t, r, i, e) {
                        for (var o = 0, h = 0, s = Math.min(t.length, i), u = r; u < s; u++) {
                            var a = t.charCodeAt(u) - 48;
                            o *= e, h = a >= 49 ? a - 49 + 10 : a >= 17 ? a - 17 + 10 : a, n(a >= 0 && h < e, "Invalid character"), o += h
                        }
                        return o
                    }

                    function l(t, r) {
                        t.words = r.words, t.length = r.length, t.negative = r.negative, t.red = r.red
                    }
                    if (o.isBN = function(t) {
                            return t instanceof o || null !== t && "object" == typeof t && t.constructor.wordSize === o.wordSize && Array.isArray(t.words)
                        }, o.max = function(t, r) {
                            return t.cmp(r) > 0 ? t : r
                        }, o.min = function(t, r) {
                            return t.cmp(r) < 0 ? t : r
                        }, o.prototype._init = function(t, r, i) {
                            if ("number" == typeof t) return this._initNumber(t, r, i);
                            if ("object" == typeof t) return this._initArray(t, r, i);
                            "hex" === r && (r = 16), n(r === (0 | r) && r >= 2 && r <= 36);
                            var e = 0;
                            "-" === (t = t.toString().replace(/\s+/g, ""))[0] && (e++, this.negative = 1), e < t.length && (16 === r ? this._parseHex(t, e, i) : (this._parseBase(t, r, e), "le" === i && this._initArray(this.toArray(), r, i)))
                        }, o.prototype._initNumber = function(t, r, i) {
                            t < 0 && (this.negative = 1, t = -t), t < 67108864 ? (this.words = [67108863 & t], this.length = 1) : t < 4503599627370496 ? (this.words = [67108863 & t, t / 67108864 & 67108863], this.length = 2) : (n(t < 9007199254740992), this.words = [67108863 & t, t / 67108864 & 67108863, 1], this.length = 3), "le" === i && this._initArray(this.toArray(), r, i)
                        }, o.prototype._initArray = function(t, r, i) {
                            if (n("number" == typeof t.length), t.length <= 0) return this.words = [0], this.length = 1, this;
                            this.length = Math.ceil(t.length / 3), this.words = new Array(this.length);
                            for (var e = 0; e < this.length; e++) this.words[e] = 0;
                            var o, h, s = 0;
                            if ("be" === i)
                                for (e = t.length - 1, o = 0; e >= 0; e -= 3) h = t[e] | t[e - 1] << 8 | t[e - 2] << 16, this.words[o] |= h << s & 67108863, this.words[o + 1] = h >>> 26 - s & 67108863, (s += 24) >= 26 && (s -= 26, o++);
                            else if ("le" === i)
                                for (e = 0, o = 0; e < t.length; e += 3) h = t[e] | t[e + 1] << 8 | t[e + 2] << 16, this.words[o] |= h << s & 67108863, this.words[o + 1] = h >>> 26 - s & 67108863, (s += 24) >= 26 && (s -= 26, o++);
                            return this._strip()
                        }, o.prototype._parseHex = function(t, r, i) {
                            this.length = Math.ceil((t.length - r) / 6), this.words = new Array(this.length);
                            for (var n = 0; n < this.length; n++) this.words[n] = 0;
                            var e, o = 0,
                                h = 0;
                            if ("be" === i)
                                for (n = t.length - 1; n >= r; n -= 2) e = u(t, r, n) << o, this.words[h] |= 67108863 & e, o >= 18 ? (o -= 18, h += 1, this.words[h] |= e >>> 26) : o += 8;
                            else
                                for (n = (t.length - r) % 2 == 0 ? r + 1 : r; n < t.length; n += 2) e = u(t, r, n) << o, this.words[h] |= 67108863 & e, o >= 18 ? (o -= 18, h += 1, this.words[h] |= e >>> 26) : o += 8;
                            this._strip()
                        }, o.prototype._parseBase = function(t, r, i) {
                            this.words = [0], this.length = 1;
                            for (var n = 0, e = 1; e <= 67108863; e *= r) n++;
                            n--, e = e / r | 0;
                            for (var o = t.length - i, h = o % n, s = Math.min(o, o - h) + i, u = 0, l = i; l < s; l += n) u = a(t, l, l + n, r), this.imuln(e), this.words[0] + u < 67108864 ? this.words[0] += u : this._iaddn(u);
                            if (0 !== h) {
                                var f = 1;
                                for (u = a(t, l, t.length, r), l = 0; l < h; l++) f *= r;
                                this.imuln(f), this.words[0] + u < 67108864 ? this.words[0] += u : this._iaddn(u)
                            }
                            this._strip()
                        }, o.prototype.copy = function(t) {
                            t.words = new Array(this.length);
                            for (var r = 0; r < this.length; r++) t.words[r] = this.words[r];
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
                    var m = ["", "0", "00", "000", "0000", "00000", "000000", "0000000", "00000000", "000000000", "0000000000", "00000000000", "000000000000", "0000000000000", "00000000000000", "000000000000000", "0000000000000000", "00000000000000000", "000000000000000000", "0000000000000000000", "00000000000000000000", "000000000000000000000", "0000000000000000000000", "00000000000000000000000", "000000000000000000000000", "0000000000000000000000000"],
                        d = [0, 0, 25, 16, 12, 11, 10, 9, 8, 8, 7, 7, 7, 7, 6, 6, 6, 6, 6, 6, 6, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5],
                        g = [0, 0, 33554432, 43046721, 16777216, 48828125, 60466176, 40353607, 16777216, 43046721, 1e7, 19487171, 35831808, 62748517, 7529536, 11390625, 16777216, 24137569, 34012224, 47045881, 64e6, 4084101, 5153632, 6436343, 7962624, 9765625, 11881376, 14348907, 17210368, 20511149, 243e5, 28629151, 33554432, 39135393, 45435424, 52521875, 60466176];
                    o.prototype.toString = function(t, r) {
                        var i;
                        if (r = 0 | r || 1, 16 === (t = t || 10) || "hex" === t) {
                            i = "";
                            for (var e = 0, o = 0, h = 0; h < this.length; h++) {
                                var s = this.words[h],
                                    u = (16777215 & (s << e | o)).toString(16);
                                o = s >>> 24 - e & 16777215, (e += 2) >= 26 && (e -= 26, h--), i = 0 !== o || h !== this.length - 1 ? m[6 - u.length] + u + i : u + i
                            }
                            for (0 !== o && (i = o.toString(16) + i); i.length % r != 0;) i = "0" + i;
                            return 0 !== this.negative && (i = "-" + i), i
                        }
                        if (t === (0 | t) && t >= 2 && t <= 36) {
                            var a = d[t],
                                l = g[t];
                            i = "";
                            var f = this.clone();
                            for (f.negative = 0; !f.isZero();) {
                                var c = f.modrn(l).toString(t);
                                i = (f = f.idivn(l)).isZero() ? c + i : m[a - c.length] + c + i
                            }
                            for (this.isZero() && (i = "0" + i); i.length % r != 0;) i = "0" + i;
                            return 0 !== this.negative && (i = "-" + i), i
                        }
                        n(!1, "Base should be between 2 and 36")
                    }, o.prototype.toNumber = function() {
                        var t = this.words[0];
                        return 2 === this.length ? t += 67108864 * this.words[1] : 3 === this.length && 1 === this.words[2] ? t += 4503599627370496 + 67108864 * this.words[1] : this.length > 2 && n(!1, "Number can only safely store up to 53 bits"), 0 !== this.negative ? -t : t
                    }, o.prototype.toJSON = function() {
                        return this.toString(16, 2)
                    }, h && (o.prototype.toBuffer = function(t, r) {
                        return this.toArrayLike(h, t, r)
                    }), o.prototype.toArray = function(t, r) {
                        return this.toArrayLike(Array, t, r)
                    };

                    function c(t, r, i) {
                        i.negative = r.negative ^ t.negative;
                        var n = t.length + r.length | 0;
                        i.length = n, n = n - 1 | 0;
                        var e = 0 | t.words[0],
                            o = 0 | r.words[0],
                            h = e * o,
                            s = 67108863 & h,
                            u = h / 67108864 | 0;
                        i.words[0] = s;
                        for (var a = 1; a < n; a++) {
                            for (var l = u >>> 26, f = 67108863 & u, m = Math.min(a, r.length - 1), d = Math.max(0, a - t.length + 1); d <= m; d++) {
                                var g = a - d | 0;
                                l += (h = (e = 0 | t.words[g]) * (o = 0 | r.words[d]) + f) / 67108864 | 0, f = 67108863 & h
                            }
                            i.words[a] = 0 | f, u = 0 | l
                        }
                        return 0 !== u ? i.words[a] = 0 | u : i.length--, i._strip()
                    }
                    o.prototype.toArrayLike = function(t, r, i) {
                        this._strip();
                        var e = this.byteLength(),
                            o = i || Math.max(1, e);
                        n(e <= o, "byte array longer than desired length"), n(o > 0, "Requested array length <= 0");
                        var h = function(t, r) {
                            return t.allocUnsafe ? t.allocUnsafe(r) : new t(r)
                        }(t, o);
                        return this["_toArrayLike" + ("le" === r ? "LE" : "BE")](h, e), h
                    }, o.prototype._toArrayLikeLE = function(t, r) {
                        for (var i = 0, n = 0, e = 0, o = 0; e < this.length; e++) {
                            var h = this.words[e] << o | n;
                            t[i++] = 255 & h, i < t.length && (t[i++] = h >> 8 & 255), i < t.length && (t[i++] = h >> 16 & 255), 6 === o ? (i < t.length && (t[i++] = h >> 24 & 255), n = 0, o = 0) : (n = h >>> 24, o += 2)
                        }
                        if (i < t.length)
                            for (t[i++] = n; i < t.length;) t[i++] = 0
                    }, o.prototype._toArrayLikeBE = function(t, r) {
                        for (var i = t.length - 1, n = 0, e = 0, o = 0; e < this.length; e++) {
                            var h = this.words[e] << o | n;
                            t[i--] = 255 & h, i >= 0 && (t[i--] = h >> 8 & 255), i >= 0 && (t[i--] = h >> 16 & 255), 6 === o ? (i >= 0 && (t[i--] = h >> 24 & 255), n = 0, o = 0) : (n = h >>> 24, o += 2)
                        }
                        if (i >= 0)
                            for (t[i--] = n; i >= 0;) t[i--] = 0
                    }, Math.clz32 ? o.prototype._countBits = function(t) {
                        return 32 - Math.clz32(t)
                    } : o.prototype._countBits = function(t) {
                        var r = t,
                            i = 0;
                        return r >= 4096 && (i += 13, r >>>= 13), r >= 64 && (i += 7, r >>>= 7), r >= 8 && (i += 4, r >>>= 4), r >= 2 && (i += 2, r >>>= 2), i + r
                    }, o.prototype._zeroBits = function(t) {
                        if (0 === t) return 26;
                        var r = t,
                            i = 0;
                        return 0 == (8191 & r) && (i += 13, r >>>= 13), 0 == (127 & r) && (i += 7, r >>>= 7), 0 == (15 & r) && (i += 4, r >>>= 4), 0 == (3 & r) && (i += 2, r >>>= 2), 0 == (1 & r) && i++, i
                    }, o.prototype.bitLength = function() {
                        var t = this.words[this.length - 1],
                            r = this._countBits(t);
                        return 26 * (this.length - 1) + r
                    }, o.prototype.zeroBits = function() {
                        if (this.isZero()) return 0;
                        for (var t = 0, r = 0; r < this.length; r++) {
                            var i = this._zeroBits(this.words[r]);
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
                        for (var r = 0; r < t.length; r++) this.words[r] = this.words[r] | t.words[r];
                        return this._strip()
                    }, o.prototype.ior = function(t) {
                        return n(0 == (this.negative | t.negative)), this.iuor(t)
                    }, o.prototype.or = function(t) {
                        return this.length > t.length ? this.clone().ior(t) : t.clone().ior(this)
                    }, o.prototype.uor = function(t) {
                        return this.length > t.length ? this.clone().iuor(t) : t.clone().iuor(this)
                    }, o.prototype.iuand = function(t) {
                        var r;
                        r = this.length > t.length ? t : this;
                        for (var i = 0; i < r.length; i++) this.words[i] = this.words[i] & t.words[i];
                        return this.length = r.length, this._strip()
                    }, o.prototype.iand = function(t) {
                        return n(0 == (this.negative | t.negative)), this.iuand(t)
                    }, o.prototype.and = function(t) {
                        return this.length > t.length ? this.clone().iand(t) : t.clone().iand(this)
                    }, o.prototype.uand = function(t) {
                        return this.length > t.length ? this.clone().iuand(t) : t.clone().iuand(this)
                    }, o.prototype.iuxor = function(t) {
                        var r, i;
                        this.length > t.length ? (r = this, i = t) : (r = t, i = this);
                        for (var n = 0; n < i.length; n++) this.words[n] = r.words[n] ^ i.words[n];
                        if (this !== r)
                            for (; n < r.length; n++) this.words[n] = r.words[n];
                        return this.length = r.length, this._strip()
                    }, o.prototype.ixor = function(t) {
                        return n(0 == (this.negative | t.negative)), this.iuxor(t)
                    }, o.prototype.xor = function(t) {
                        return this.length > t.length ? this.clone().ixor(t) : t.clone().ixor(this)
                    }, o.prototype.uxor = function(t) {
                        return this.length > t.length ? this.clone().iuxor(t) : t.clone().iuxor(this)
                    }, o.prototype.inotn = function(t) {
                        n("number" == typeof t && t >= 0);
                        var r = 0 | Math.ceil(t / 26),
                            i = t % 26;
                        this._expand(r), i > 0 && r--;
                        for (var e = 0; e < r; e++) this.words[e] = 67108863 & ~this.words[e];
                        return i > 0 && (this.words[e] = ~this.words[e] & 67108863 >> 26 - i), this._strip()
                    }, o.prototype.notn = function(t) {
                        return this.clone().inotn(t)
                    }, o.prototype.setn = function(t, r) {
                        n("number" == typeof t && t >= 0);
                        var i = t / 26 | 0,
                            e = t % 26;
                        return this._expand(i + 1), this.words[i] = r ? this.words[i] | 1 << e : this.words[i] & ~(1 << e), this._strip()
                    }, o.prototype.iadd = function(t) {
                        var r, i, n;
                        if (0 !== this.negative && 0 === t.negative) return this.negative = 0, r = this.isub(t), this.negative ^= 1, this._normSign();
                        if (0 === this.negative && 0 !== t.negative) return t.negative = 0, r = this.isub(t), t.negative = 1, r._normSign();
                        this.length > t.length ? (i = this, n = t) : (i = t, n = this);
                        for (var e = 0, o = 0; o < n.length; o++) r = (0 | i.words[o]) + (0 | n.words[o]) + e, this.words[o] = 67108863 & r, e = r >>> 26;
                        for (; 0 !== e && o < i.length; o++) r = (0 | i.words[o]) + e, this.words[o] = 67108863 & r, e = r >>> 26;
                        if (this.length = i.length, 0 !== e) this.words[this.length] = e, this.length++;
                        else if (i !== this)
                            for (; o < i.length; o++) this.words[o] = i.words[o];
                        return this
                    }, o.prototype.add = function(t) {
                        var r;
                        return 0 !== t.negative && 0 === this.negative ? (t.negative = 0, r = this.sub(t), t.negative ^= 1, r) : 0 === t.negative && 0 !== this.negative ? (this.negative = 0, r = t.sub(this), this.negative = 1, r) : this.length > t.length ? this.clone().iadd(t) : t.clone().iadd(this)
                    }, o.prototype.isub = function(t) {
                        if (0 !== t.negative) {
                            t.negative = 0;
                            var r = this.iadd(t);
                            return t.negative = 1, r._normSign()
                        }
                        if (0 !== this.negative) return this.negative = 0, this.iadd(t), this.negative = 1, this._normSign();
                        var i, n, e = this.cmp(t);
                        if (0 === e) return this.negative = 0, this.length = 1, this.words[0] = 0, this;
                        e > 0 ? (i = this, n = t) : (i = t, n = this);
                        for (var o = 0, h = 0; h < n.length; h++) o = (r = (0 | i.words[h]) - (0 | n.words[h]) + o) >> 26, this.words[h] = 67108863 & r;
                        for (; 0 !== o && h < i.length; h++) o = (r = (0 | i.words[h]) + o) >> 26, this.words[h] = 67108863 & r;
                        if (0 === o && h < i.length && i !== this)
                            for (; h < i.length; h++) this.words[h] = i.words[h];
                        return this.length = Math.max(this.length, h), i !== this && (this.negative = 1), this._strip()
                    }, o.prototype.sub = function(t) {
                        return this.clone().isub(t)
                    };
                    var p = function(t, r, i) {
                        var n, e, o, h = t.words,
                            s = r.words,
                            u = i.words,
                            a = 0,
                            l = 0 | h[0],
                            f = 8191 & l,
                            m = l >>> 13,
                            d = 0 | h[1],
                            g = 8191 & d,
                            c = d >>> 13,
                            p = 0 | h[2],
                            v = 8191 & p,
                            M = p >>> 13,
                            w = 0 | h[3],
                            y = 8191 & w,
                            b = w >>> 13,
                            _ = 0 | h[4],
                            x = 8191 & _,
                            A = _ >>> 13,
                            N = 0 | h[5],
                            S = 8191 & N,
                            E = N >>> 13,
                            B = 0 | h[6],
                            k = 8191 & B,
                            P = B >>> 13,
                            O = 0 | h[7],
                            j = 8191 & O,
                            R = O >>> 13,
                            Z = 0 | h[8],
                            U = 8191 & Z,
                            q = Z >>> 13,
                            I = 0 | h[9],
                            L = 8191 & I,
                            T = I >>> 13,
                            C = 0 | s[0],
                            z = 8191 & C,
                            H = C >>> 13,
                            F = 0 | s[1],
                            D = 8191 & F,
                            $ = F >>> 13,
                            X = 0 | s[2],
                            J = 8191 & X,
                            K = X >>> 13,
                            G = 0 | s[3],
                            Q = 8191 & G,
                            V = G >>> 13,
                            W = 0 | s[4],
                            Y = 8191 & W,
                            tt = W >>> 13,
                            rt = 0 | s[5],
                            it = 8191 & rt,
                            nt = rt >>> 13,
                            et = 0 | s[6],
                            ot = 8191 & et,
                            ht = et >>> 13,
                            st = 0 | s[7],
                            ut = 8191 & st,
                            at = st >>> 13,
                            lt = 0 | s[8],
                            ft = 8191 & lt,
                            mt = lt >>> 13,
                            dt = 0 | s[9],
                            gt = 8191 & dt,
                            ct = dt >>> 13;
                        i.negative = t.negative ^ r.negative, i.length = 19;
                        var pt = (a + (n = Math.imul(f, z)) | 0) + ((8191 & (e = (e = Math.imul(f, H)) + Math.imul(m, z) | 0)) << 13) | 0;
                        a = ((o = Math.imul(m, H)) + (e >>> 13) | 0) + (pt >>> 26) | 0, pt &= 67108863, n = Math.imul(g, z), e = (e = Math.imul(g, H)) + Math.imul(c, z) | 0, o = Math.imul(c, H);
                        var vt = (a + (n = n + Math.imul(f, D) | 0) | 0) + ((8191 & (e = (e = e + Math.imul(f, $) | 0) + Math.imul(m, D) | 0)) << 13) | 0;
                        a = ((o = o + Math.imul(m, $) | 0) + (e >>> 13) | 0) + (vt >>> 26) | 0, vt &= 67108863, n = Math.imul(v, z), e = (e = Math.imul(v, H)) + Math.imul(M, z) | 0, o = Math.imul(M, H), n = n + Math.imul(g, D) | 0, e = (e = e + Math.imul(g, $) | 0) + Math.imul(c, D) | 0, o = o + Math.imul(c, $) | 0;
                        var Mt = (a + (n = n + Math.imul(f, J) | 0) | 0) + ((8191 & (e = (e = e + Math.imul(f, K) | 0) + Math.imul(m, J) | 0)) << 13) | 0;
                        a = ((o = o + Math.imul(m, K) | 0) + (e >>> 13) | 0) + (Mt >>> 26) | 0, Mt &= 67108863, n = Math.imul(y, z), e = (e = Math.imul(y, H)) + Math.imul(b, z) | 0, o = Math.imul(b, H), n = n + Math.imul(v, D) | 0, e = (e = e + Math.imul(v, $) | 0) + Math.imul(M, D) | 0, o = o + Math.imul(M, $) | 0, n = n + Math.imul(g, J) | 0, e = (e = e + Math.imul(g, K) | 0) + Math.imul(c, J) | 0, o = o + Math.imul(c, K) | 0;
                        var wt = (a + (n = n + Math.imul(f, Q) | 0) | 0) + ((8191 & (e = (e = e + Math.imul(f, V) | 0) + Math.imul(m, Q) | 0)) << 13) | 0;
                        a = ((o = o + Math.imul(m, V) | 0) + (e >>> 13) | 0) + (wt >>> 26) | 0, wt &= 67108863, n = Math.imul(x, z), e = (e = Math.imul(x, H)) + Math.imul(A, z) | 0, o = Math.imul(A, H), n = n + Math.imul(y, D) | 0, e = (e = e + Math.imul(y, $) | 0) + Math.imul(b, D) | 0, o = o + Math.imul(b, $) | 0, n = n + Math.imul(v, J) | 0, e = (e = e + Math.imul(v, K) | 0) + Math.imul(M, J) | 0, o = o + Math.imul(M, K) | 0, n = n + Math.imul(g, Q) | 0, e = (e = e + Math.imul(g, V) | 0) + Math.imul(c, Q) | 0, o = o + Math.imul(c, V) | 0;
                        var yt = (a + (n = n + Math.imul(f, Y) | 0) | 0) + ((8191 & (e = (e = e + Math.imul(f, tt) | 0) + Math.imul(m, Y) | 0)) << 13) | 0;
                        a = ((o = o + Math.imul(m, tt) | 0) + (e >>> 13) | 0) + (yt >>> 26) | 0, yt &= 67108863, n = Math.imul(S, z), e = (e = Math.imul(S, H)) + Math.imul(E, z) | 0, o = Math.imul(E, H), n = n + Math.imul(x, D) | 0, e = (e = e + Math.imul(x, $) | 0) + Math.imul(A, D) | 0, o = o + Math.imul(A, $) | 0, n = n + Math.imul(y, J) | 0, e = (e = e + Math.imul(y, K) | 0) + Math.imul(b, J) | 0, o = o + Math.imul(b, K) | 0, n = n + Math.imul(v, Q) | 0, e = (e = e + Math.imul(v, V) | 0) + Math.imul(M, Q) | 0, o = o + Math.imul(M, V) | 0, n = n + Math.imul(g, Y) | 0, e = (e = e + Math.imul(g, tt) | 0) + Math.imul(c, Y) | 0, o = o + Math.imul(c, tt) | 0;
                        var bt = (a + (n = n + Math.imul(f, it) | 0) | 0) + ((8191 & (e = (e = e + Math.imul(f, nt) | 0) + Math.imul(m, it) | 0)) << 13) | 0;
                        a = ((o = o + Math.imul(m, nt) | 0) + (e >>> 13) | 0) + (bt >>> 26) | 0, bt &= 67108863, n = Math.imul(k, z), e = (e = Math.imul(k, H)) + Math.imul(P, z) | 0, o = Math.imul(P, H), n = n + Math.imul(S, D) | 0, e = (e = e + Math.imul(S, $) | 0) + Math.imul(E, D) | 0, o = o + Math.imul(E, $) | 0, n = n + Math.imul(x, J) | 0, e = (e = e + Math.imul(x, K) | 0) + Math.imul(A, J) | 0, o = o + Math.imul(A, K) | 0, n = n + Math.imul(y, Q) | 0, e = (e = e + Math.imul(y, V) | 0) + Math.imul(b, Q) | 0, o = o + Math.imul(b, V) | 0, n = n + Math.imul(v, Y) | 0, e = (e = e + Math.imul(v, tt) | 0) + Math.imul(M, Y) | 0, o = o + Math.imul(M, tt) | 0, n = n + Math.imul(g, it) | 0, e = (e = e + Math.imul(g, nt) | 0) + Math.imul(c, it) | 0, o = o + Math.imul(c, nt) | 0;
                        var _t = (a + (n = n + Math.imul(f, ot) | 0) | 0) + ((8191 & (e = (e = e + Math.imul(f, ht) | 0) + Math.imul(m, ot) | 0)) << 13) | 0;
                        a = ((o = o + Math.imul(m, ht) | 0) + (e >>> 13) | 0) + (_t >>> 26) | 0, _t &= 67108863, n = Math.imul(j, z), e = (e = Math.imul(j, H)) + Math.imul(R, z) | 0, o = Math.imul(R, H), n = n + Math.imul(k, D) | 0, e = (e = e + Math.imul(k, $) | 0) + Math.imul(P, D) | 0, o = o + Math.imul(P, $) | 0, n = n + Math.imul(S, J) | 0, e = (e = e + Math.imul(S, K) | 0) + Math.imul(E, J) | 0, o = o + Math.imul(E, K) | 0, n = n + Math.imul(x, Q) | 0, e = (e = e + Math.imul(x, V) | 0) + Math.imul(A, Q) | 0, o = o + Math.imul(A, V) | 0, n = n + Math.imul(y, Y) | 0, e = (e = e + Math.imul(y, tt) | 0) + Math.imul(b, Y) | 0, o = o + Math.imul(b, tt) | 0, n = n + Math.imul(v, it) | 0, e = (e = e + Math.imul(v, nt) | 0) + Math.imul(M, it) | 0, o = o + Math.imul(M, nt) | 0, n = n + Math.imul(g, ot) | 0, e = (e = e + Math.imul(g, ht) | 0) + Math.imul(c, ot) | 0, o = o + Math.imul(c, ht) | 0;
                        var xt = (a + (n = n + Math.imul(f, ut) | 0) | 0) + ((8191 & (e = (e = e + Math.imul(f, at) | 0) + Math.imul(m, ut) | 0)) << 13) | 0;
                        a = ((o = o + Math.imul(m, at) | 0) + (e >>> 13) | 0) + (xt >>> 26) | 0, xt &= 67108863, n = Math.imul(U, z), e = (e = Math.imul(U, H)) + Math.imul(q, z) | 0, o = Math.imul(q, H), n = n + Math.imul(j, D) | 0, e = (e = e + Math.imul(j, $) | 0) + Math.imul(R, D) | 0, o = o + Math.imul(R, $) | 0, n = n + Math.imul(k, J) | 0, e = (e = e + Math.imul(k, K) | 0) + Math.imul(P, J) | 0, o = o + Math.imul(P, K) | 0, n = n + Math.imul(S, Q) | 0, e = (e = e + Math.imul(S, V) | 0) + Math.imul(E, Q) | 0, o = o + Math.imul(E, V) | 0, n = n + Math.imul(x, Y) | 0, e = (e = e + Math.imul(x, tt) | 0) + Math.imul(A, Y) | 0, o = o + Math.imul(A, tt) | 0, n = n + Math.imul(y, it) | 0, e = (e = e + Math.imul(y, nt) | 0) + Math.imul(b, it) | 0, o = o + Math.imul(b, nt) | 0, n = n + Math.imul(v, ot) | 0, e = (e = e + Math.imul(v, ht) | 0) + Math.imul(M, ot) | 0, o = o + Math.imul(M, ht) | 0, n = n + Math.imul(g, ut) | 0, e = (e = e + Math.imul(g, at) | 0) + Math.imul(c, ut) | 0, o = o + Math.imul(c, at) | 0;
                        var At = (a + (n = n + Math.imul(f, ft) | 0) | 0) + ((8191 & (e = (e = e + Math.imul(f, mt) | 0) + Math.imul(m, ft) | 0)) << 13) | 0;
                        a = ((o = o + Math.imul(m, mt) | 0) + (e >>> 13) | 0) + (At >>> 26) | 0, At &= 67108863, n = Math.imul(L, z), e = (e = Math.imul(L, H)) + Math.imul(T, z) | 0, o = Math.imul(T, H), n = n + Math.imul(U, D) | 0, e = (e = e + Math.imul(U, $) | 0) + Math.imul(q, D) | 0, o = o + Math.imul(q, $) | 0, n = n + Math.imul(j, J) | 0, e = (e = e + Math.imul(j, K) | 0) + Math.imul(R, J) | 0, o = o + Math.imul(R, K) | 0, n = n + Math.imul(k, Q) | 0, e = (e = e + Math.imul(k, V) | 0) + Math.imul(P, Q) | 0, o = o + Math.imul(P, V) | 0, n = n + Math.imul(S, Y) | 0, e = (e = e + Math.imul(S, tt) | 0) + Math.imul(E, Y) | 0, o = o + Math.imul(E, tt) | 0, n = n + Math.imul(x, it) | 0, e = (e = e + Math.imul(x, nt) | 0) + Math.imul(A, it) | 0, o = o + Math.imul(A, nt) | 0, n = n + Math.imul(y, ot) | 0, e = (e = e + Math.imul(y, ht) | 0) + Math.imul(b, ot) | 0, o = o + Math.imul(b, ht) | 0, n = n + Math.imul(v, ut) | 0, e = (e = e + Math.imul(v, at) | 0) + Math.imul(M, ut) | 0, o = o + Math.imul(M, at) | 0, n = n + Math.imul(g, ft) | 0, e = (e = e + Math.imul(g, mt) | 0) + Math.imul(c, ft) | 0, o = o + Math.imul(c, mt) | 0;
                        var Nt = (a + (n = n + Math.imul(f, gt) | 0) | 0) + ((8191 & (e = (e = e + Math.imul(f, ct) | 0) + Math.imul(m, gt) | 0)) << 13) | 0;
                        a = ((o = o + Math.imul(m, ct) | 0) + (e >>> 13) | 0) + (Nt >>> 26) | 0, Nt &= 67108863, n = Math.imul(L, D), e = (e = Math.imul(L, $)) + Math.imul(T, D) | 0, o = Math.imul(T, $), n = n + Math.imul(U, J) | 0, e = (e = e + Math.imul(U, K) | 0) + Math.imul(q, J) | 0, o = o + Math.imul(q, K) | 0, n = n + Math.imul(j, Q) | 0, e = (e = e + Math.imul(j, V) | 0) + Math.imul(R, Q) | 0, o = o + Math.imul(R, V) | 0, n = n + Math.imul(k, Y) | 0, e = (e = e + Math.imul(k, tt) | 0) + Math.imul(P, Y) | 0, o = o + Math.imul(P, tt) | 0, n = n + Math.imul(S, it) | 0, e = (e = e + Math.imul(S, nt) | 0) + Math.imul(E, it) | 0, o = o + Math.imul(E, nt) | 0, n = n + Math.imul(x, ot) | 0, e = (e = e + Math.imul(x, ht) | 0) + Math.imul(A, ot) | 0, o = o + Math.imul(A, ht) | 0, n = n + Math.imul(y, ut) | 0, e = (e = e + Math.imul(y, at) | 0) + Math.imul(b, ut) | 0, o = o + Math.imul(b, at) | 0, n = n + Math.imul(v, ft) | 0, e = (e = e + Math.imul(v, mt) | 0) + Math.imul(M, ft) | 0, o = o + Math.imul(M, mt) | 0;
                        var St = (a + (n = n + Math.imul(g, gt) | 0) | 0) + ((8191 & (e = (e = e + Math.imul(g, ct) | 0) + Math.imul(c, gt) | 0)) << 13) | 0;
                        a = ((o = o + Math.imul(c, ct) | 0) + (e >>> 13) | 0) + (St >>> 26) | 0, St &= 67108863, n = Math.imul(L, J), e = (e = Math.imul(L, K)) + Math.imul(T, J) | 0, o = Math.imul(T, K), n = n + Math.imul(U, Q) | 0, e = (e = e + Math.imul(U, V) | 0) + Math.imul(q, Q) | 0, o = o + Math.imul(q, V) | 0, n = n + Math.imul(j, Y) | 0, e = (e = e + Math.imul(j, tt) | 0) + Math.imul(R, Y) | 0, o = o + Math.imul(R, tt) | 0, n = n + Math.imul(k, it) | 0, e = (e = e + Math.imul(k, nt) | 0) + Math.imul(P, it) | 0, o = o + Math.imul(P, nt) | 0, n = n + Math.imul(S, ot) | 0, e = (e = e + Math.imul(S, ht) | 0) + Math.imul(E, ot) | 0, o = o + Math.imul(E, ht) | 0, n = n + Math.imul(x, ut) | 0, e = (e = e + Math.imul(x, at) | 0) + Math.imul(A, ut) | 0, o = o + Math.imul(A, at) | 0, n = n + Math.imul(y, ft) | 0, e = (e = e + Math.imul(y, mt) | 0) + Math.imul(b, ft) | 0, o = o + Math.imul(b, mt) | 0;
                        var Et = (a + (n = n + Math.imul(v, gt) | 0) | 0) + ((8191 & (e = (e = e + Math.imul(v, ct) | 0) + Math.imul(M, gt) | 0)) << 13) | 0;
                        a = ((o = o + Math.imul(M, ct) | 0) + (e >>> 13) | 0) + (Et >>> 26) | 0, Et &= 67108863, n = Math.imul(L, Q), e = (e = Math.imul(L, V)) + Math.imul(T, Q) | 0, o = Math.imul(T, V), n = n + Math.imul(U, Y) | 0, e = (e = e + Math.imul(U, tt) | 0) + Math.imul(q, Y) | 0, o = o + Math.imul(q, tt) | 0, n = n + Math.imul(j, it) | 0, e = (e = e + Math.imul(j, nt) | 0) + Math.imul(R, it) | 0, o = o + Math.imul(R, nt) | 0, n = n + Math.imul(k, ot) | 0, e = (e = e + Math.imul(k, ht) | 0) + Math.imul(P, ot) | 0, o = o + Math.imul(P, ht) | 0, n = n + Math.imul(S, ut) | 0, e = (e = e + Math.imul(S, at) | 0) + Math.imul(E, ut) | 0, o = o + Math.imul(E, at) | 0, n = n + Math.imul(x, ft) | 0, e = (e = e + Math.imul(x, mt) | 0) + Math.imul(A, ft) | 0, o = o + Math.imul(A, mt) | 0;
                        var Bt = (a + (n = n + Math.imul(y, gt) | 0) | 0) + ((8191 & (e = (e = e + Math.imul(y, ct) | 0) + Math.imul(b, gt) | 0)) << 13) | 0;
                        a = ((o = o + Math.imul(b, ct) | 0) + (e >>> 13) | 0) + (Bt >>> 26) | 0, Bt &= 67108863, n = Math.imul(L, Y), e = (e = Math.imul(L, tt)) + Math.imul(T, Y) | 0, o = Math.imul(T, tt), n = n + Math.imul(U, it) | 0, e = (e = e + Math.imul(U, nt) | 0) + Math.imul(q, it) | 0, o = o + Math.imul(q, nt) | 0, n = n + Math.imul(j, ot) | 0, e = (e = e + Math.imul(j, ht) | 0) + Math.imul(R, ot) | 0, o = o + Math.imul(R, ht) | 0, n = n + Math.imul(k, ut) | 0, e = (e = e + Math.imul(k, at) | 0) + Math.imul(P, ut) | 0, o = o + Math.imul(P, at) | 0, n = n + Math.imul(S, ft) | 0, e = (e = e + Math.imul(S, mt) | 0) + Math.imul(E, ft) | 0, o = o + Math.imul(E, mt) | 0;
                        var kt = (a + (n = n + Math.imul(x, gt) | 0) | 0) + ((8191 & (e = (e = e + Math.imul(x, ct) | 0) + Math.imul(A, gt) | 0)) << 13) | 0;
                        a = ((o = o + Math.imul(A, ct) | 0) + (e >>> 13) | 0) + (kt >>> 26) | 0, kt &= 67108863, n = Math.imul(L, it), e = (e = Math.imul(L, nt)) + Math.imul(T, it) | 0, o = Math.imul(T, nt), n = n + Math.imul(U, ot) | 0, e = (e = e + Math.imul(U, ht) | 0) + Math.imul(q, ot) | 0, o = o + Math.imul(q, ht) | 0, n = n + Math.imul(j, ut) | 0, e = (e = e + Math.imul(j, at) | 0) + Math.imul(R, ut) | 0, o = o + Math.imul(R, at) | 0, n = n + Math.imul(k, ft) | 0, e = (e = e + Math.imul(k, mt) | 0) + Math.imul(P, ft) | 0, o = o + Math.imul(P, mt) | 0;
                        var Pt = (a + (n = n + Math.imul(S, gt) | 0) | 0) + ((8191 & (e = (e = e + Math.imul(S, ct) | 0) + Math.imul(E, gt) | 0)) << 13) | 0;
                        a = ((o = o + Math.imul(E, ct) | 0) + (e >>> 13) | 0) + (Pt >>> 26) | 0, Pt &= 67108863, n = Math.imul(L, ot), e = (e = Math.imul(L, ht)) + Math.imul(T, ot) | 0, o = Math.imul(T, ht), n = n + Math.imul(U, ut) | 0, e = (e = e + Math.imul(U, at) | 0) + Math.imul(q, ut) | 0, o = o + Math.imul(q, at) | 0, n = n + Math.imul(j, ft) | 0, e = (e = e + Math.imul(j, mt) | 0) + Math.imul(R, ft) | 0, o = o + Math.imul(R, mt) | 0;
                        var Ot = (a + (n = n + Math.imul(k, gt) | 0) | 0) + ((8191 & (e = (e = e + Math.imul(k, ct) | 0) + Math.imul(P, gt) | 0)) << 13) | 0;
                        a = ((o = o + Math.imul(P, ct) | 0) + (e >>> 13) | 0) + (Ot >>> 26) | 0, Ot &= 67108863, n = Math.imul(L, ut), e = (e = Math.imul(L, at)) + Math.imul(T, ut) | 0, o = Math.imul(T, at), n = n + Math.imul(U, ft) | 0, e = (e = e + Math.imul(U, mt) | 0) + Math.imul(q, ft) | 0, o = o + Math.imul(q, mt) | 0;
                        var jt = (a + (n = n + Math.imul(j, gt) | 0) | 0) + ((8191 & (e = (e = e + Math.imul(j, ct) | 0) + Math.imul(R, gt) | 0)) << 13) | 0;
                        a = ((o = o + Math.imul(R, ct) | 0) + (e >>> 13) | 0) + (jt >>> 26) | 0, jt &= 67108863, n = Math.imul(L, ft), e = (e = Math.imul(L, mt)) + Math.imul(T, ft) | 0, o = Math.imul(T, mt);
                        var Rt = (a + (n = n + Math.imul(U, gt) | 0) | 0) + ((8191 & (e = (e = e + Math.imul(U, ct) | 0) + Math.imul(q, gt) | 0)) << 13) | 0;
                        a = ((o = o + Math.imul(q, ct) | 0) + (e >>> 13) | 0) + (Rt >>> 26) | 0, Rt &= 67108863;
                        var Zt = (a + (n = Math.imul(L, gt)) | 0) + ((8191 & (e = (e = Math.imul(L, ct)) + Math.imul(T, gt) | 0)) << 13) | 0;
                        return a = ((o = Math.imul(T, ct)) + (e >>> 13) | 0) + (Zt >>> 26) | 0, Zt &= 67108863, u[0] = pt, u[1] = vt, u[2] = Mt, u[3] = wt, u[4] = yt, u[5] = bt, u[6] = _t, u[7] = xt, u[8] = At, u[9] = Nt, u[10] = St, u[11] = Et, u[12] = Bt, u[13] = kt, u[14] = Pt, u[15] = Ot, u[16] = jt, u[17] = Rt, u[18] = Zt, 0 !== a && (u[19] = a, i.length++), i
                    };

                    function v(t, r, i) {
                        i.negative = r.negative ^ t.negative, i.length = t.length + r.length;
                        for (var n = 0, e = 0, o = 0; o < i.length - 1; o++) {
                            var h = e;
                            e = 0;
                            for (var s = 67108863 & n, u = Math.min(o, r.length - 1), a = Math.max(0, o - t.length + 1); a <= u; a++) {
                                var l = o - a,
                                    f = (0 | t.words[l]) * (0 | r.words[a]),
                                    m = 67108863 & f;
                                s = 67108863 & (m = m + s | 0), e += (h = (h = h + (f / 67108864 | 0) | 0) + (m >>> 26) | 0) >>> 26, h &= 67108863
                            }
                            i.words[o] = s, n = h, h = e
                        }
                        return 0 !== n ? i.words[o] = n : i.length--, i._strip()
                    }

                    function M(t, r, i) {
                        return v(t, r, i)
                    }

                    function w(t, r) {
                        this.x = t, this.y = r
                    }
                    Math.imul || (p = c), o.prototype.mulTo = function(t, r) {
                        var i = this.length + t.length;
                        return 10 === this.length && 10 === t.length ? p(this, t, r) : i < 63 ? c(this, t, r) : i < 1024 ? v(this, t, r) : M(this, t, r)
                    }, w.prototype.makeRBT = function(t) {
                        for (var r = new Array(t), i = o.prototype._countBits(t) - 1, n = 0; n < t; n++) r[n] = this.revBin(n, i, t);
                        return r
                    }, w.prototype.revBin = function(t, r, i) {
                        if (0 === t || t === i - 1) return t;
                        for (var n = 0, e = 0; e < r; e++) n |= (1 & t) << r - e - 1, t >>= 1;
                        return n
                    }, w.prototype.permute = function(t, r, i, n, e, o) {
                        for (var h = 0; h < o; h++) n[h] = r[t[h]], e[h] = i[t[h]]
                    }, w.prototype.transform = function(t, r, i, n, e, o) {
                        this.permute(o, t, r, i, n, e);
                        for (var h = 1; h < e; h <<= 1)
                            for (var s = h << 1, u = Math.cos(2 * Math.PI / s), a = Math.sin(2 * Math.PI / s), l = 0; l < e; l += s)
                                for (var f = u, m = a, d = 0; d < h; d++) {
                                    var g = i[l + d],
                                        c = n[l + d],
                                        p = i[l + d + h],
                                        v = n[l + d + h],
                                        M = f * p - m * v;
                                    v = f * v + m * p, p = M, i[l + d] = g + p, n[l + d] = c + v, i[l + d + h] = g - p, n[l + d + h] = c - v, d !== s && (M = u * f - a * m, m = u * m + a * f, f = M)
                                }
                    }, w.prototype.guessLen13b = function(t, r) {
                        var i = 1 | Math.max(r, t),
                            n = 1 & i,
                            e = 0;
                        for (i = i / 2 | 0; i; i >>>= 1) e++;
                        return 1 << e + 1 + n
                    }, w.prototype.conjugate = function(t, r, i) {
                        if (!(i <= 1))
                            for (var n = 0; n < i / 2; n++) {
                                var e = t[n];
                                t[n] = t[i - n - 1], t[i - n - 1] = e, e = r[n], r[n] = -r[i - n - 1], r[i - n - 1] = -e
                            }
                    }, w.prototype.normalize13b = function(t, r) {
                        for (var i = 0, n = 0; n < r / 2; n++) {
                            var e = 8192 * Math.round(t[2 * n + 1] / r) + Math.round(t[2 * n] / r) + i;
                            t[n] = 67108863 & e, i = e < 67108864 ? 0 : e / 67108864 | 0
                        }
                        return t
                    }, w.prototype.convert13b = function(t, r, i, e) {
                        for (var o = 0, h = 0; h < r; h++) o += 0 | t[h], i[2 * h] = 8191 & o, o >>>= 13, i[2 * h + 1] = 8191 & o, o >>>= 13;
                        for (h = 2 * r; h < e; ++h) i[h] = 0;
                        n(0 === o), n(0 == (-8192 & o))
                    }, w.prototype.stub = function(t) {
                        for (var r = new Array(t), i = 0; i < t; i++) r[i] = 0;
                        return r
                    }, w.prototype.mulp = function(t, r, i) {
                        var n = 2 * this.guessLen13b(t.length, r.length),
                            e = this.makeRBT(n),
                            o = this.stub(n),
                            h = new Array(n),
                            s = new Array(n),
                            u = new Array(n),
                            a = new Array(n),
                            l = new Array(n),
                            f = new Array(n),
                            m = i.words;
                        m.length = n, this.convert13b(t.words, t.length, h, n), this.convert13b(r.words, r.length, a, n), this.transform(h, o, s, u, n, e), this.transform(a, o, l, f, n, e);
                        for (var d = 0; d < n; d++) {
                            var g = s[d] * l[d] - u[d] * f[d];
                            u[d] = s[d] * f[d] + u[d] * l[d], s[d] = g
                        }
                        return this.conjugate(s, u, n), this.transform(s, u, m, o, n, e), this.conjugate(m, o, n), this.normalize13b(m, n), i.negative = t.negative ^ r.negative, i.length = t.length + r.length, i._strip()
                    }, o.prototype.mul = function(t) {
                        var r = new o(null);
                        return r.words = new Array(this.length + t.length), this.mulTo(t, r)
                    }, o.prototype.mulf = function(t) {
                        var r = new o(null);
                        return r.words = new Array(this.length + t.length), M(this, t, r)
                    }, o.prototype.imul = function(t) {
                        return this.clone().mulTo(t, this)
                    }, o.prototype.imuln = function(t) {
                        var r = t < 0;
                        r && (t = -t), n("number" == typeof t), n(t < 67108864);
                        for (var i = 0, e = 0; e < this.length; e++) {
                            var o = (0 | this.words[e]) * t,
                                h = (67108863 & o) + (67108863 & i);
                            i >>= 26, i += o / 67108864 | 0, i += h >>> 26, this.words[e] = 67108863 & h
                        }
                        return 0 !== i && (this.words[e] = i, this.length++), r ? this.ineg() : this
                    }, o.prototype.muln = function(t) {
                        return this.clone().imuln(t)
                    }, o.prototype.sqr = function() {
                        return this.mul(this)
                    }, o.prototype.isqr = function() {
                        return this.imul(this.clone())
                    }, o.prototype.pow = function(t) {
                        var r = function(t) {
                            for (var r = new Array(t.bitLength()), i = 0; i < r.length; i++) {
                                var n = i / 26 | 0,
                                    e = i % 26;
                                r[i] = t.words[n] >>> e & 1
                            }
                            return r
                        }(t);
                        if (0 === r.length) return new o(1);
                        for (var i = this, n = 0; n < r.length && 0 === r[n]; n++, i = i.sqr());
                        if (++n < r.length)
                            for (var e = i.sqr(); n < r.length; n++, e = e.sqr()) 0 !== r[n] && (i = i.mul(e));
                        return i
                    }, o.prototype.iushln = function(t) {
                        n("number" == typeof t && t >= 0);
                        var r, i = t % 26,
                            e = (t - i) / 26,
                            o = 67108863 >>> 26 - i << 26 - i;
                        if (0 !== i) {
                            var h = 0;
                            for (r = 0; r < this.length; r++) {
                                var s = this.words[r] & o,
                                    u = (0 | this.words[r]) - s << i;
                                this.words[r] = u | h, h = s >>> 26 - i
                            }
                            h && (this.words[r] = h, this.length++)
                        }
                        if (0 !== e) {
                            for (r = this.length - 1; r >= 0; r--) this.words[r + e] = this.words[r];
                            for (r = 0; r < e; r++) this.words[r] = 0;
                            this.length += e
                        }
                        return this._strip()
                    }, o.prototype.ishln = function(t) {
                        return n(0 === this.negative), this.iushln(t)
                    }, o.prototype.iushrn = function(t, r, i) {
                        var e;
                        n("number" == typeof t && t >= 0), e = r ? (r - r % 26) / 26 : 0;
                        var o = t % 26,
                            h = Math.min((t - o) / 26, this.length),
                            s = 67108863 ^ 67108863 >>> o << o,
                            u = i;
                        if (e -= h, e = Math.max(0, e), u) {
                            for (var a = 0; a < h; a++) u.words[a] = this.words[a];
                            u.length = h
                        }
                        if (0 === h);
                        else if (this.length > h)
                            for (this.length -= h, a = 0; a < this.length; a++) this.words[a] = this.words[a + h];
                        else this.words[0] = 0, this.length = 1;
                        var l = 0;
                        for (a = this.length - 1; a >= 0 && (0 !== l || a >= e); a--) {
                            var f = 0 | this.words[a];
                            this.words[a] = l << 26 - o | f >>> o, l = f & s
                        }
                        return u && 0 !== l && (u.words[u.length++] = l), 0 === this.length && (this.words[0] = 0, this.length = 1), this._strip()
                    }, o.prototype.ishrn = function(t, r, i) {
                        return n(0 === this.negative), this.iushrn(t, r, i)
                    }, o.prototype.shln = function(t) {
                        return this.clone().ishln(t)
                    }, o.prototype.ushln = function(t) {
                        return this.clone().iushln(t)
                    }, o.prototype.shrn = function(t) {
                        return this.clone().ishrn(t)
                    }, o.prototype.ushrn = function(t) {
                        return this.clone().iushrn(t)
                    }, o.prototype.testn = function(t) {
                        n("number" == typeof t && t >= 0);
                        var r = t % 26,
                            i = (t - r) / 26,
                            e = 1 << r;
                        return !(this.length <= i) && !!(this.words[i] & e)
                    }, o.prototype.imaskn = function(t) {
                        n("number" == typeof t && t >= 0);
                        var r = t % 26,
                            i = (t - r) / 26;
                        if (n(0 === this.negative, "imaskn works only with positive numbers"), this.length <= i) return this;
                        if (0 !== r && i++, this.length = Math.min(i, this.length), 0 !== r) {
                            var e = 67108863 ^ 67108863 >>> r << r;
                            this.words[this.length - 1] &= e
                        }
                        return this._strip()
                    }, o.prototype.maskn = function(t) {
                        return this.clone().imaskn(t)
                    }, o.prototype.iaddn = function(t) {
                        return n("number" == typeof t), n(t < 67108864), t < 0 ? this.isubn(-t) : 0 !== this.negative ? 1 === this.length && (0 | this.words[0]) <= t ? (this.words[0] = t - (0 | this.words[0]), this.negative = 0, this) : (this.negative = 0, this.isubn(t), this.negative = 1, this) : this._iaddn(t)
                    }, o.prototype._iaddn = function(t) {
                        this.words[0] += t;
                        for (var r = 0; r < this.length && this.words[r] >= 67108864; r++) this.words[r] -= 67108864, r === this.length - 1 ? this.words[r + 1] = 1 : this.words[r + 1]++;
                        return this.length = Math.max(this.length, r + 1), this
                    }, o.prototype.isubn = function(t) {
                        if (n("number" == typeof t), n(t < 67108864), t < 0) return this.iaddn(-t);
                        if (0 !== this.negative) return this.negative = 0, this.iaddn(t), this.negative = 1, this;
                        if (this.words[0] -= t, 1 === this.length && this.words[0] < 0) this.words[0] = -this.words[0], this.negative = 1;
                        else
                            for (var r = 0; r < this.length && this.words[r] < 0; r++) this.words[r] += 67108864, this.words[r + 1] -= 1;
                        return this._strip()
                    }, o.prototype.addn = function(t) {
                        return this.clone().iaddn(t)
                    }, o.prototype.subn = function(t) {
                        return this.clone().isubn(t)
                    }, o.prototype.iabs = function() {
                        return this.negative = 0, this
                    }, o.prototype.abs = function() {
                        return this.clone().iabs()
                    }, o.prototype._ishlnsubmul = function(t, r, i) {
                        var e, o, h = t.length + i;
                        this._expand(h);
                        var s = 0;
                        for (e = 0; e < t.length; e++) {
                            o = (0 | this.words[e + i]) + s;
                            var u = (0 | t.words[e]) * r;
                            s = ((o -= 67108863 & u) >> 26) - (u / 67108864 | 0), this.words[e + i] = 67108863 & o
                        }
                        for (; e < this.length - i; e++) s = (o = (0 | this.words[e + i]) + s) >> 26, this.words[e + i] = 67108863 & o;
                        if (0 === s) return this._strip();
                        for (n(-1 === s), s = 0, e = 0; e < this.length; e++) s = (o = -(0 | this.words[e]) + s) >> 26, this.words[e] = 67108863 & o;
                        return this.negative = 1, this._strip()
                    }, o.prototype._wordDiv = function(t, r) {
                        var i = (this.length, t.length),
                            n = this.clone(),
                            e = t,
                            h = 0 | e.words[e.length - 1];
                        0 !== (i = 26 - this._countBits(h)) && (e = e.ushln(i), n.iushln(i), h = 0 | e.words[e.length - 1]);
                        var s, u = n.length - e.length;
                        if ("mod" !== r) {
                            (s = new o(null)).length = u + 1, s.words = new Array(s.length);
                            for (var a = 0; a < s.length; a++) s.words[a] = 0
                        }
                        var l = n.clone()._ishlnsubmul(e, 1, u);
                        0 === l.negative && (n = l, s && (s.words[u] = 1));
                        for (var f = u - 1; f >= 0; f--) {
                            var m = 67108864 * (0 | n.words[e.length + f]) + (0 | n.words[e.length + f - 1]);
                            for (m = Math.min(m / h | 0, 67108863), n._ishlnsubmul(e, m, f); 0 !== n.negative;) m--, n.negative = 0, n._ishlnsubmul(e, 1, f), n.isZero() || (n.negative ^= 1);
                            s && (s.words[f] = m)
                        }
                        return s && s._strip(), n._strip(), "div" !== r && 0 !== i && n.iushrn(i), {
                            div: s || null,
                            mod: n
                        }
                    }, o.prototype.divmod = function(t, r, i) {
                        return n(!t.isZero()), this.isZero() ? {
                            div: new o(0),
                            mod: new o(0)
                        } : 0 !== this.negative && 0 === t.negative ? (s = this.neg().divmod(t, r), "mod" !== r && (e = s.div.neg()), "div" !== r && (h = s.mod.neg(), i && 0 !== h.negative && h.iadd(t)), {
                            div: e,
                            mod: h
                        }) : 0 === this.negative && 0 !== t.negative ? (s = this.divmod(t.neg(), r), "mod" !== r && (e = s.div.neg()), {
                            div: e,
                            mod: s.mod
                        }) : 0 != (this.negative & t.negative) ? (s = this.neg().divmod(t.neg(), r), "div" !== r && (h = s.mod.neg(), i && 0 !== h.negative && h.isub(t)), {
                            div: s.div,
                            mod: h
                        }) : t.length > this.length || this.cmp(t) < 0 ? {
                            div: new o(0),
                            mod: this
                        } : 1 === t.length ? "div" === r ? {
                            div: this.divn(t.words[0]),
                            mod: null
                        } : "mod" === r ? {
                            div: null,
                            mod: new o(this.modrn(t.words[0]))
                        } : {
                            div: this.divn(t.words[0]),
                            mod: new o(this.modrn(t.words[0]))
                        } : this._wordDiv(t, r);
                        var e, h, s
                    }, o.prototype.div = function(t) {
                        return this.divmod(t, "div", !1).div
                    }, o.prototype.mod = function(t) {
                        return this.divmod(t, "mod", !1).mod
                    }, o.prototype.umod = function(t) {
                        return this.divmod(t, "mod", !0).mod
                    }, o.prototype.divRound = function(t) {
                        var r = this.divmod(t);
                        if (r.mod.isZero()) return r.div;
                        var i = 0 !== r.div.negative ? r.mod.isub(t) : r.mod,
                            n = t.ushrn(1),
                            e = t.andln(1),
                            o = i.cmp(n);
                        return o < 0 || 1 === e && 0 === o ? r.div : 0 !== r.div.negative ? r.div.isubn(1) : r.div.iaddn(1)
                    }, o.prototype.modrn = function(t) {
                        var r = t < 0;
                        r && (t = -t), n(t <= 67108863);
                        for (var i = (1 << 26) % t, e = 0, o = this.length - 1; o >= 0; o--) e = (i * e + (0 | this.words[o])) % t;
                        return r ? -e : e
                    }, o.prototype.modn = function(t) {
                        return this.modrn(t)
                    }, o.prototype.idivn = function(t) {
                        var r = t < 0;
                        r && (t = -t), n(t <= 67108863);
                        for (var i = 0, e = this.length - 1; e >= 0; e--) {
                            var o = (0 | this.words[e]) + 67108864 * i;
                            this.words[e] = o / t | 0, i = o % t
                        }
                        return this._strip(), r ? this.ineg() : this
                    }, o.prototype.divn = function(t) {
                        return this.clone().idivn(t)
                    }, o.prototype.egcd = function(t) {
                        n(0 === t.negative), n(!t.isZero());
                        var r = this,
                            i = t.clone();
                        r = 0 !== r.negative ? r.umod(t) : r.clone();
                        for (var e = new o(1), h = new o(0), s = new o(0), u = new o(1), a = 0; r.isEven() && i.isEven();) r.iushrn(1), i.iushrn(1), ++a;
                        for (var l = i.clone(), f = r.clone(); !r.isZero();) {
                            for (var m = 0, d = 1; 0 == (r.words[0] & d) && m < 26; ++m, d <<= 1);
                            if (m > 0)
                                for (r.iushrn(m); m-- > 0;)(e.isOdd() || h.isOdd()) && (e.iadd(l), h.isub(f)), e.iushrn(1), h.iushrn(1);
                            for (var g = 0, c = 1; 0 == (i.words[0] & c) && g < 26; ++g, c <<= 1);
                            if (g > 0)
                                for (i.iushrn(g); g-- > 0;)(s.isOdd() || u.isOdd()) && (s.iadd(l), u.isub(f)), s.iushrn(1), u.iushrn(1);
                            r.cmp(i) >= 0 ? (r.isub(i), e.isub(s), h.isub(u)) : (i.isub(r), s.isub(e), u.isub(h))
                        }
                        return {
                            a: s,
                            b: u,
                            gcd: i.iushln(a)
                        }
                    }, o.prototype._invmp = function(t) {
                        n(0 === t.negative), n(!t.isZero());
                        var r = this,
                            i = t.clone();
                        r = 0 !== r.negative ? r.umod(t) : r.clone();
                        for (var e, h = new o(1), s = new o(0), u = i.clone(); r.cmpn(1) > 0 && i.cmpn(1) > 0;) {
                            for (var a = 0, l = 1; 0 == (r.words[0] & l) && a < 26; ++a, l <<= 1);
                            if (a > 0)
                                for (r.iushrn(a); a-- > 0;) h.isOdd() && h.iadd(u), h.iushrn(1);
                            for (var f = 0, m = 1; 0 == (i.words[0] & m) && f < 26; ++f, m <<= 1);
                            if (f > 0)
                                for (i.iushrn(f); f-- > 0;) s.isOdd() && s.iadd(u), s.iushrn(1);
                            r.cmp(i) >= 0 ? (r.isub(i), h.isub(s)) : (i.isub(r), s.isub(h))
                        }
                        return (e = 0 === r.cmpn(1) ? h : s).cmpn(0) < 0 && e.iadd(t), e
                    }, o.prototype.gcd = function(t) {
                        if (this.isZero()) return t.abs();
                        if (t.isZero()) return this.abs();
                        var r = this.clone(),
                            i = t.clone();
                        r.negative = 0, i.negative = 0;
                        for (var n = 0; r.isEven() && i.isEven(); n++) r.iushrn(1), i.iushrn(1);
                        for (;;) {
                            for (; r.isEven();) r.iushrn(1);
                            for (; i.isEven();) i.iushrn(1);
                            var e = r.cmp(i);
                            if (e < 0) {
                                var o = r;
                                r = i, i = o
                            } else if (0 === e || 0 === i.cmpn(1)) break;
                            r.isub(i)
                        }
                        return i.iushln(n)
                    }, o.prototype.invm = function(t) {
                        return this.egcd(t).a.umod(t)
                    }, o.prototype.isEven = function() {
                        return 0 == (1 & this.words[0])
                    }, o.prototype.isOdd = function() {
                        return 1 == (1 & this.words[0])
                    }, o.prototype.andln = function(t) {
                        return this.words[0] & t
                    }, o.prototype.bincn = function(t) {
                        n("number" == typeof t);
                        var r = t % 26,
                            i = (t - r) / 26,
                            e = 1 << r;
                        if (this.length <= i) return this._expand(i + 1), this.words[i] |= e, this;
                        for (var o = e, h = i; 0 !== o && h < this.length; h++) {
                            var s = 0 | this.words[h];
                            o = (s += o) >>> 26, s &= 67108863, this.words[h] = s
                        }
                        return 0 !== o && (this.words[h] = o, this.length++), this
                    }, o.prototype.isZero = function() {
                        return 1 === this.length && 0 === this.words[0]
                    }, o.prototype.cmpn = function(t) {
                        var r, i = t < 0;
                        if (0 !== this.negative && !i) return -1;
                        if (0 === this.negative && i) return 1;
                        if (this._strip(), this.length > 1) r = 1;
                        else {
                            i && (t = -t), n(t <= 67108863, "Number is too big");
                            var e = 0 | this.words[0];
                            r = e === t ? 0 : e < t ? -1 : 1
                        }
                        return 0 !== this.negative ? 0 | -r : r
                    }, o.prototype.cmp = function(t) {
                        if (0 !== this.negative && 0 === t.negative) return -1;
                        if (0 === this.negative && 0 !== t.negative) return 1;
                        var r = this.ucmp(t);
                        return 0 !== this.negative ? 0 | -r : r
                    }, o.prototype.ucmp = function(t) {
                        if (this.length > t.length) return 1;
                        if (this.length < t.length) return -1;
                        for (var r = 0, i = this.length - 1; i >= 0; i--) {
                            var n = 0 | this.words[i],
                                e = 0 | t.words[i];
                            if (n !== e) {
                                n < e ? r = -1 : n > e && (r = 1);
                                break
                            }
                        }
                        return r
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
                        return n(!this.red, "Already a number in reduction context"), n(0 === this.negative, "red works only with positives"), t.convertTo(this)._forceRed(t)
                    }, o.prototype.fromRed = function() {
                        return n(this.red, "fromRed works only with numbers in reduction context"), this.red.convertFrom(this)
                    }, o.prototype._forceRed = function(t) {
                        return this.red = t, this
                    }, o.prototype.forceRed = function(t) {
                        return n(!this.red, "Already a number in reduction context"), this._forceRed(t)
                    }, o.prototype.redAdd = function(t) {
                        return n(this.red, "redAdd works only with red numbers"), this.red.add(this, t)
                    }, o.prototype.redIAdd = function(t) {
                        return n(this.red, "redIAdd works only with red numbers"), this.red.iadd(this, t)
                    }, o.prototype.redSub = function(t) {
                        return n(this.red, "redSub works only with red numbers"), this.red.sub(this, t)
                    }, o.prototype.redISub = function(t) {
                        return n(this.red, "redISub works only with red numbers"), this.red.isub(this, t)
                    }, o.prototype.redShl = function(t) {
                        return n(this.red, "redShl works only with red numbers"), this.red.shl(this, t)
                    }, o.prototype.redMul = function(t) {
                        return n(this.red, "redMul works only with red numbers"), this.red._verify2(this, t), this.red.mul(this, t)
                    }, o.prototype.redIMul = function(t) {
                        return n(this.red, "redMul works only with red numbers"), this.red._verify2(this, t), this.red.imul(this, t)
                    }, o.prototype.redSqr = function() {
                        return n(this.red, "redSqr works only with red numbers"), this.red._verify1(this), this.red.sqr(this)
                    }, o.prototype.redISqr = function() {
                        return n(this.red, "redISqr works only with red numbers"), this.red._verify1(this), this.red.isqr(this)
                    }, o.prototype.redSqrt = function() {
                        return n(this.red, "redSqrt works only with red numbers"), this.red._verify1(this), this.red.sqrt(this)
                    }, o.prototype.redInvm = function() {
                        return n(this.red, "redInvm works only with red numbers"), this.red._verify1(this), this.red.invm(this)
                    }, o.prototype.redNeg = function() {
                        return n(this.red, "redNeg works only with red numbers"), this.red._verify1(this), this.red.neg(this)
                    }, o.prototype.redPow = function(t) {
                        return n(this.red && !t.red, "redPow(normalNum)"), this.red._verify1(this), this.red.pow(this, t)
                    };
                    var y = {
                        k256: null,
                        p224: null,
                        p192: null,
                        p25519: null
                    };

                    function b(t, r) {
                        this.name = t, this.p = new o(r, 16), this.n = this.p.bitLength(), this.k = new o(1).iushln(this.n).isub(this.p), this.tmp = this._tmp()
                    }

                    function _() {
                        b.call(this, "k256", "ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffe fffffc2f")
                    }

                    function x() {
                        b.call(this, "p224", "ffffffff ffffffff ffffffff ffffffff 00000000 00000000 00000001")
                    }

                    function A() {
                        b.call(this, "p192", "ffffffff ffffffff ffffffff fffffffe ffffffff ffffffff")
                    }

                    function N() {
                        b.call(this, "25519", "7fffffffffffffff ffffffffffffffff ffffffffffffffff ffffffffffffffed")
                    }

                    function S(t) {
                        if ("string" == typeof t) {
                            var r = o._prime(t);
                            this.m = r.p, this.prime = r
                        } else n(t.gtn(1), "modulus must be greater than 1"), this.m = t, this.prime = null
                    }

                    function E(t) {
                        S.call(this, t), this.shift = this.m.bitLength(), this.shift % 26 != 0 && (this.shift += 26 - this.shift % 26), this.r = new o(1).iushln(this.shift), this.r2 = this.imod(this.r.sqr()), this.rinv = this.r._invmp(this.m), this.minv = this.rinv.mul(this.r).isubn(1).div(this.m), this.minv = this.minv.umod(this.r), this.minv = this.r.sub(this.minv)
                    }
                    b.prototype._tmp = function() {
                        var t = new o(null);
                        return t.words = new Array(Math.ceil(this.n / 13)), t
                    }, b.prototype.ireduce = function(t) {
                        var r, i = t;
                        do {
                            this.split(i, this.tmp), r = (i = (i = this.imulK(i)).iadd(this.tmp)).bitLength()
                        } while (r > this.n);
                        var n = r < this.n ? -1 : i.ucmp(this.p);
                        return 0 === n ? (i.words[0] = 0, i.length = 1) : n > 0 ? i.isub(this.p) : void 0 !== i.strip ? i.strip() : i._strip(), i
                    }, b.prototype.split = function(t, r) {
                        t.iushrn(this.n, 0, r)
                    }, b.prototype.imulK = function(t) {
                        return t.imul(this.k)
                    }, e(_, b), _.prototype.split = function(t, r) {
                        for (var i = Math.min(t.length, 9), n = 0; n < i; n++) r.words[n] = t.words[n];
                        if (r.length = i, t.length <= 9) return t.words[0] = 0, void(t.length = 1);
                        var e = t.words[9];
                        for (r.words[r.length++] = 4194303 & e, n = 10; n < t.length; n++) {
                            var o = 0 | t.words[n];
                            t.words[n - 10] = (4194303 & o) << 4 | e >>> 22, e = o
                        }
                        e >>>= 22, t.words[n - 10] = e, 0 === e && t.length > 10 ? t.length -= 10 : t.length -= 9
                    }, _.prototype.imulK = function(t) {
                        t.words[t.length] = 0, t.words[t.length + 1] = 0, t.length += 2;
                        for (var r = 0, i = 0; i < t.length; i++) {
                            var n = 0 | t.words[i];
                            r += 977 * n, t.words[i] = 67108863 & r, r = 64 * n + (r / 67108864 | 0)
                        }
                        return 0 === t.words[t.length - 1] && (t.length--, 0 === t.words[t.length - 1] && t.length--), t
                    }, e(x, b), e(A, b), e(N, b), N.prototype.imulK = function(t) {
                        for (var r = 0, i = 0; i < t.length; i++) {
                            var n = 19 * (0 | t.words[i]) + r,
                                e = 67108863 & n;
                            n >>>= 26, t.words[i] = e, r = n
                        }
                        return 0 !== r && (t.words[t.length++] = r), t
                    }, o._prime = function(t) {
                        if (y[t]) return y[t];
                        var r;
                        if ("k256" === t) r = new _;
                        else if ("p224" === t) r = new x;
                        else if ("p192" === t) r = new A;
                        else {
                            if ("p25519" !== t) throw new Error("Unknown prime " + t);
                            r = new N
                        }
                        return y[t] = r, r
                    }, S.prototype._verify1 = function(t) {
                        n(0 === t.negative, "red works only with positives"), n(t.red, "red works only with red numbers")
                    }, S.prototype._verify2 = function(t, r) {
                        n(0 == (t.negative | r.negative), "red works only with positives"), n(t.red && t.red === r.red, "red works only with red numbers")
                    }, S.prototype.imod = function(t) {
                        return this.prime ? this.prime.ireduce(t)._forceRed(this) : (l(t, t.umod(this.m)._forceRed(this)), t)
                    }, S.prototype.neg = function(t) {
                        return t.isZero() ? t.clone() : this.m.sub(t)._forceRed(this)
                    }, S.prototype.add = function(t, r) {
                        this._verify2(t, r);
                        var i = t.add(r);
                        return i.cmp(this.m) >= 0 && i.isub(this.m), i._forceRed(this)
                    }, S.prototype.iadd = function(t, r) {
                        this._verify2(t, r);
                        var i = t.iadd(r);
                        return i.cmp(this.m) >= 0 && i.isub(this.m), i
                    }, S.prototype.sub = function(t, r) {
                        this._verify2(t, r);
                        var i = t.sub(r);
                        return i.cmpn(0) < 0 && i.iadd(this.m), i._forceRed(this)
                    }, S.prototype.isub = function(t, r) {
                        this._verify2(t, r);
                        var i = t.isub(r);
                        return i.cmpn(0) < 0 && i.iadd(this.m), i
                    }, S.prototype.shl = function(t, r) {
                        return this._verify1(t), this.imod(t.ushln(r))
                    }, S.prototype.imul = function(t, r) {
                        return this._verify2(t, r), this.imod(t.imul(r))
                    }, S.prototype.mul = function(t, r) {
                        return this._verify2(t, r), this.imod(t.mul(r))
                    }, S.prototype.isqr = function(t) {
                        return this.imul(t, t.clone())
                    }, S.prototype.sqr = function(t) {
                        return this.mul(t, t)
                    }, S.prototype.sqrt = function(t) {
                        if (t.isZero()) return t.clone();
                        var r = this.m.andln(3);
                        if (n(r % 2 == 1), 3 === r) {
                            var i = this.m.add(new o(1)).iushrn(2);
                            return this.pow(t, i)
                        }
                        for (var e = this.m.subn(1), h = 0; !e.isZero() && 0 === e.andln(1);) h++, e.iushrn(1);
                        n(!e.isZero());
                        var s = new o(1).toRed(this),
                            u = s.redNeg(),
                            a = this.m.subn(1).iushrn(1),
                            l = this.m.bitLength();
                        for (l = new o(2 * l * l).toRed(this); 0 !== this.pow(l, a).cmp(u);) l.redIAdd(u);
                        for (var f = this.pow(l, e), m = this.pow(t, e.addn(1).iushrn(1)), d = this.pow(t, e), g = h; 0 !== d.cmp(s);) {
                            for (var c = d, p = 0; 0 !== c.cmp(s); p++) c = c.redSqr();
                            n(p < g);
                            var v = this.pow(f, new o(1).iushln(g - p - 1));
                            m = m.redMul(v), f = v.redSqr(), d = d.redMul(f), g = p
                        }
                        return m
                    }, S.prototype.invm = function(t) {
                        var r = t._invmp(this.m);
                        return 0 !== r.negative ? (r.negative = 0, this.imod(r).redNeg()) : this.imod(r)
                    }, S.prototype.pow = function(t, r) {
                        if (r.isZero()) return new o(1).toRed(this);
                        if (0 === r.cmpn(1)) return t.clone();
                        var i = new Array(16);
                        i[0] = new o(1).toRed(this), i[1] = t;
                        for (var n = 2; n < i.length; n++) i[n] = this.mul(i[n - 1], t);
                        var e = i[0],
                            h = 0,
                            s = 0,
                            u = r.bitLength() % 26;
                        for (0 === u && (u = 26), n = r.length - 1; n >= 0; n--) {
                            for (var a = r.words[n], l = u - 1; l >= 0; l--) {
                                var f = a >> l & 1;
                                e !== i[0] && (e = this.sqr(e)), 0 !== f || 0 !== h ? (h <<= 1, h |= f, (4 === ++s || 0 === n && 0 === l) && (e = this.mul(e, i[h]), s = 0, h = 0)) : s = 0
                            }
                            u = 26
                        }
                        return e
                    }, S.prototype.convertTo = function(t) {
                        var r = t.umod(this.m);
                        return r === t ? r.clone() : r
                    }, S.prototype.convertFrom = function(t) {
                        var r = t.clone();
                        return r.red = null, r
                    }, o.mont = function(t) {
                        return new E(t)
                    }, e(E, S), E.prototype.convertTo = function(t) {
                        return this.imod(t.ushln(this.shift))
                    }, E.prototype.convertFrom = function(t) {
                        var r = this.imod(t.mul(this.rinv));
                        return r.red = null, r
                    }, E.prototype.imul = function(t, r) {
                        if (t.isZero() || r.isZero()) return t.words[0] = 0, t.length = 1, t;
                        var i = t.imul(r),
                            n = i.maskn(this.shift).mul(this.minv).imaskn(this.shift).mul(this.m),
                            e = i.isub(n).iushrn(this.shift),
                            o = e;
                        return e.cmp(this.m) >= 0 ? o = e.isub(this.m) : e.cmpn(0) < 0 && (o = e.iadd(this.m)), o._forceRed(this)
                    }, E.prototype.mul = function(t, r) {
                        if (t.isZero() || r.isZero()) return new o(0)._forceRed(this);
                        var i = t.mul(r),
                            n = i.maskn(this.shift).mul(this.minv).imaskn(this.shift).mul(this.m),
                            e = i.isub(n).iushrn(this.shift),
                            h = e;
                        return e.cmp(this.m) >= 0 ? h = e.isub(this.m) : e.cmpn(0) < 0 && (h = e.iadd(this.m)), h._forceRed(this)
                    }, E.prototype.invm = function(t) {
                        return this.imod(t._invmp(this.m).mul(this.r2))._forceRed(this)
                    }
                }(t, this)
            }).call(this, i(81)(t))
        },
        319: function(t, r, i) {
            "use strict";
            i.d(r, "d", (function() {
                return f
            })), i.d(r, "a", (function() {
                return BigNumber
            })), i.d(r, "c", (function() {
                return v
            })), i.d(r, "b", (function() {
                return M
            }));
            var n = i(2332),
                e = i.n(n),
                o = i(14),
                h = i(37),
                s = i(1848),
                u = e.a.BN;
            const a = new h.b(s.a),
                l = {};

            function f(t) {
                return null != t && (BigNumber.isBigNumber(t) || "number" == typeof t && t % 1 == 0 || "string" == typeof t && !!t.match(/^-?[0-9]+$/) || Object(o.l)(t) || "bigint" == typeof t || Object(o.j)(t))
            }
            let m = !1;
            class BigNumber {
                constructor(t, r) {
                    t !== l && a.throwError("cannot call constructor directly; use BigNumber.from", h.b.errors.UNSUPPORTED_OPERATION, {
                        operation: "new (BigNumber)"
                    }), this._hex = r, this._isBigNumber = !0, Object.freeze(this)
                }
                fromTwos(t) {
                    return g(c(this).fromTwos(t))
                }
                toTwos(t) {
                    return g(c(this).toTwos(t))
                }
                abs() {
                    return "-" === this._hex[0] ? BigNumber.from(this._hex.substring(1)) : this
                }
                add(t) {
                    return g(c(this).add(c(t)))
                }
                sub(t) {
                    return g(c(this).sub(c(t)))
                }
                div(t) {
                    return BigNumber.from(t).isZero() && p("division-by-zero", "div"), g(c(this).div(c(t)))
                }
                mul(t) {
                    return g(c(this).mul(c(t)))
                }
                mod(t) {
                    const r = c(t);
                    return r.isNeg() && p("division-by-zero", "mod"), g(c(this).umod(r))
                }
                pow(t) {
                    const r = c(t);
                    return r.isNeg() && p("negative-power", "pow"), g(c(this).pow(r))
                }
                and(t) {
                    const r = c(t);
                    return (this.isNegative() || r.isNeg()) && p("unbound-bitwise-result", "and"), g(c(this).and(r))
                }
                or(t) {
                    const r = c(t);
                    return (this.isNegative() || r.isNeg()) && p("unbound-bitwise-result", "or"), g(c(this).or(r))
                }
                xor(t) {
                    const r = c(t);
                    return (this.isNegative() || r.isNeg()) && p("unbound-bitwise-result", "xor"), g(c(this).xor(r))
                }
                mask(t) {
                    return (this.isNegative() || t < 0) && p("negative-width", "mask"), g(c(this).maskn(t))
                }
                shl(t) {
                    return (this.isNegative() || t < 0) && p("negative-width", "shl"), g(c(this).shln(t))
                }
                shr(t) {
                    return (this.isNegative() || t < 0) && p("negative-width", "shr"), g(c(this).shrn(t))
                }
                eq(t) {
                    return c(this).eq(c(t))
                }
                lt(t) {
                    return c(this).lt(c(t))
                }
                lte(t) {
                    return c(this).lte(c(t))
                }
                gt(t) {
                    return c(this).gt(c(t))
                }
                gte(t) {
                    return c(this).gte(c(t))
                }
                isNegative() {
                    return "-" === this._hex[0]
                }
                isZero() {
                    return c(this).isZero()
                }
                toNumber() {
                    try {
                        return c(this).toNumber()
                    } catch (t) {
                        p("overflow", "toNumber", this.toString())
                    }
                    return null
                }
                toBigInt() {
                    try {
                        return BigInt(this.toString())
                    } catch (t) {}
                    return a.throwError("this platform does not support BigInt", h.b.errors.UNSUPPORTED_OPERATION, {
                        value: this.toString()
                    })
                }
                toString() {
                    return arguments.length > 0 && (10 === arguments[0] ? m || (m = !0, a.warn("BigNumber.toString does not accept any parameters; base-10 is assumed")) : 16 === arguments[0] ? a.throwError("BigNumber.toString does not accept any parameters; use bigNumber.toHexString()", h.b.errors.UNEXPECTED_ARGUMENT, {}) : a.throwError("BigNumber.toString does not accept parameters", h.b.errors.UNEXPECTED_ARGUMENT, {})), c(this).toString(10)
                }
                toHexString() {
                    return this._hex
                }
                toJSON(t) {
                    return {
                        type: "BigNumber",
                        hex: this.toHexString()
                    }
                }
                static from(t) {
                    if (t instanceof BigNumber) return t;
                    if ("string" == typeof t) return t.match(/^-?0x[0-9a-f]+$/i) ? new BigNumber(l, d(t)) : t.match(/^-?[0-9]+$/) ? new BigNumber(l, d(new u(t))) : a.throwArgumentError("invalid BigNumber string", "value", t);
                    if ("number" == typeof t) return t % 1 && p("underflow", "BigNumber.from", t), (t >= 9007199254740991 || t <= -9007199254740991) && p("overflow", "BigNumber.from", t), BigNumber.from(String(t));
                    const r = t;
                    if ("bigint" == typeof r) return BigNumber.from(r.toString());
                    if (Object(o.j)(r)) return BigNumber.from(Object(o.i)(r));
                    if (r)
                        if (r.toHexString) {
                            const t = r.toHexString();
                            if ("string" == typeof t) return BigNumber.from(t)
                        } else {
                            let t = r._hex;
                            if (null == t && "BigNumber" === r.type && (t = r.hex), "string" == typeof t && (Object(o.l)(t) || "-" === t[0] && Object(o.l)(t.substring(1)))) return BigNumber.from(t)
                        } return a.throwArgumentError("invalid BigNumber value", "value", t)
                }
                static isBigNumber(t) {
                    return !(!t || !t._isBigNumber)
                }
            }

            function d(t) {
                if ("string" != typeof t) return d(t.toString(16));
                if ("-" === t[0]) return "-" === (t = t.substring(1))[0] && a.throwArgumentError("invalid hex", "value", t), "0x00" === (t = d(t)) ? t : "-" + t;
                if ("0x" !== t.substring(0, 2) && (t = "0x" + t), "0x" === t) return "0x00";
                for (t.length % 2 && (t = "0x0" + t.substring(2)); t.length > 4 && "0x00" === t.substring(0, 4);) t = "0x" + t.substring(4);
                return t
            }

            function g(t) {
                return BigNumber.from(d(t))
            }

            function c(t) {
                const r = BigNumber.from(t).toHexString();
                return "-" === r[0] ? new u("-" + r.substring(3), 16) : new u(r.substring(2), 16)
            }

            function p(t, r, i) {
                const n = {
                    fault: t,
                    operation: r
                };
                return null != i && (n.value = i), a.throwError(t, h.b.errors.NUMERIC_FAULT, n)
            }

            function v(t) {
                return new u(t, 36).toString(16)
            }

            function M(t) {
                return new u(t, 16).toString(36)
            }
        },
        5392: function(t, r, i) {
            "use strict";
            i.d(r, "d", (function() {
                return e
            })), i.d(r, "h", (function() {
                return o
            })), i.d(r, "e", (function() {
                return h
            })), i.d(r, "f", (function() {
                return s
            })), i.d(r, "g", (function() {
                return u
            })), i.d(r, "b", (function() {
                return a
            })), i.d(r, "c", (function() {
                return l
            })), i.d(r, "a", (function() {
                return f
            }));
            var n = i(319);
            const e = n.a.from(-1),
                o = n.a.from(0),
                h = n.a.from(1),
                s = n.a.from(2),
                u = n.a.from("1000000000000000000"),
                a = n.a.from("0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff"),
                l = n.a.from("-0x8000000000000000000000000000000000000000000000000000000000000000"),
                f = n.a.from("0x7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff")
        }
    }
]);