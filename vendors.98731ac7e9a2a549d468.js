(window.webpackJsonp = window.webpackJsonp || []).push([
    [248], {
        10903: function(t, e, i) {
            function n(t) {
                const e = i.p;
                let n = "";
                return (!e || e.indexOf("://") < 0) && (n += window.location.protocol + "//" + window.location.host), n += e || "/", n + t
            }
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.packageInfo = void 0;
            const r = {
                name: "@polkadot/x-global",
                path: (n("node_modules/@polkadot/x-global/packageInfo.js"), n("node_modules/@polkadot/x-global/packageInfo.js") ? new URL(n("node_modules/@polkadot/x-global/packageInfo.js")).pathname.substring(0, new URL(n("node_modules/@polkadot/x-global/packageInfo.js")).pathname.lastIndexOf("/") + 1) : "auto"),
                type: "esm",
                version: "8.7.1"
            };
            e.packageInfo = r
        },
        10904: function(t, e, i) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.TextDecoder = void 0;
            e.TextDecoder = class TextDecoder {
                constructor(t) {}
                decode(t) {
                    let e = "";
                    for (let i = 0; i < t.length; i++) e += String.fromCharCode(t[i]);
                    return e
                }
            }
        },
        10905: function(t, e, i) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.packageInfo = void 0;
            const n = {
                name: "@polkadot/x-textdecoder",
                path: "string" == typeof __dirname ? __dirname : "auto",
                type: "cjs",
                version: "8.7.1"
            };
            e.packageInfo = n
        },
        10906: function(t, e, i) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.TextEncoder = void 0;
            e.TextEncoder = class TextEncoder {
                encode(t) {
                    const e = new Uint8Array(t.length);
                    for (let i = 0; i < t.length; i++) e[i] = t.charCodeAt(i);
                    return e
                }
            }
        },
        10907: function(t, e, i) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.packageInfo = void 0;
            const n = {
                name: "@polkadot/x-textencoder",
                path: "string" == typeof __dirname ? __dirname : "auto",
                type: "cjs",
                version: "8.7.1"
            };
            e.packageInfo = n
        },
        10917: function(t, e, i) {
            function n(t) {
                const e = i.p;
                let n = "";
                return (!e || e.indexOf("://") < 0) && (n += window.location.protocol + "//" + window.location.host), n += e || "/", n + t
            }
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.packageInfo = void 0;
            const r = {
                name: "@polkadot/x-bigint",
                path: (n("node_modules/@polkadot/x-bigint/packageInfo.js"), n("node_modules/@polkadot/x-bigint/packageInfo.js") ? new URL(n("node_modules/@polkadot/x-bigint/packageInfo.js")).pathname.substring(0, new URL(n("node_modules/@polkadot/x-bigint/packageInfo.js")).pathname.lastIndexOf("/") + 1) : "auto"),
                type: "esm",
                version: "8.7.1"
            };
            e.packageInfo = r
        },
        10919: function(t, e, i) {
            (function(t) {
                ! function(t, e) {
                    "use strict";

                    function n(t, e) {
                        if (!t) throw new Error(e || "Assertion failed")
                    }

                    function r(t, e) {
                        t.super_ = e;
                        var i = function() {};
                        i.prototype = e.prototype, t.prototype = new i, t.prototype.constructor = t
                    }

                    function o(t, e, i) {
                        if (o.isBN(t)) return t;
                        this.negative = 0, this.words = null, this.length = 0, this.red = null, null !== t && ("le" !== e && "be" !== e || (i = e, e = 10), this._init(t || 0, e || 10, i || "be"))
                    }
                    var u;
                    "object" == typeof t ? t.exports = o : e.BN = o, o.BN = o, o.wordSize = 26;
                    try {
                        u = "undefined" != typeof window && void 0 !== window.Buffer ? window.Buffer : i(12).Buffer
                    } catch (t) {}

                    function s(t, e) {
                        var i = t.charCodeAt(e);
                        return i >= 48 && i <= 57 ? i - 48 : i >= 65 && i <= 70 ? i - 55 : i >= 97 && i <= 102 ? i - 87 : void n(!1, "Invalid character in " + t)
                    }

                    function h(t, e, i) {
                        var n = s(t, i);
                        return i - 1 >= e && (n |= s(t, i - 1) << 4), n
                    }

                    function a(t, e, i, r) {
                        for (var o = 0, u = 0, s = Math.min(t.length, i), h = e; h < s; h++) {
                            var a = t.charCodeAt(h) - 48;
                            o *= r, u = a >= 49 ? a - 49 + 10 : a >= 17 ? a - 17 + 10 : a, n(a >= 0 && u < r, "Invalid character"), o += u
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
                            "hex" === e && (e = 16), n(e === (0 | e) && e >= 2 && e <= 36);
                            var r = 0;
                            "-" === (t = t.toString().replace(/\s+/g, ""))[0] && (r++, this.negative = 1), r < t.length && (16 === e ? this._parseHex(t, r, i) : (this._parseBase(t, e, r), "le" === i && this._initArray(this.toArray(), e, i)))
                        }, o.prototype._initNumber = function(t, e, i) {
                            t < 0 && (this.negative = 1, t = -t), t < 67108864 ? (this.words = [67108863 & t], this.length = 1) : t < 4503599627370496 ? (this.words = [67108863 & t, t / 67108864 & 67108863], this.length = 2) : (n(t < 9007199254740992), this.words = [67108863 & t, t / 67108864 & 67108863, 1], this.length = 3), "le" === i && this._initArray(this.toArray(), e, i)
                        }, o.prototype._initArray = function(t, e, i) {
                            if (n("number" == typeof t.length), t.length <= 0) return this.words = [0], this.length = 1, this;
                            this.length = Math.ceil(t.length / 3), this.words = new Array(this.length);
                            for (var r = 0; r < this.length; r++) this.words[r] = 0;
                            var o, u, s = 0;
                            if ("be" === i)
                                for (r = t.length - 1, o = 0; r >= 0; r -= 3) u = t[r] | t[r - 1] << 8 | t[r - 2] << 16, this.words[o] |= u << s & 67108863, this.words[o + 1] = u >>> 26 - s & 67108863, (s += 24) >= 26 && (s -= 26, o++);
                            else if ("le" === i)
                                for (r = 0, o = 0; r < t.length; r += 3) u = t[r] | t[r + 1] << 8 | t[r + 2] << 16, this.words[o] |= u << s & 67108863, this.words[o + 1] = u >>> 26 - s & 67108863, (s += 24) >= 26 && (s -= 26, o++);
                            return this._strip()
                        }, o.prototype._parseHex = function(t, e, i) {
                            this.length = Math.ceil((t.length - e) / 6), this.words = new Array(this.length);
                            for (var n = 0; n < this.length; n++) this.words[n] = 0;
                            var r, o = 0,
                                u = 0;
                            if ("be" === i)
                                for (n = t.length - 1; n >= e; n -= 2) r = h(t, e, n) << o, this.words[u] |= 67108863 & r, o >= 18 ? (o -= 18, u += 1, this.words[u] |= r >>> 26) : o += 8;
                            else
                                for (n = (t.length - e) % 2 == 0 ? e + 1 : e; n < t.length; n += 2) r = h(t, e, n) << o, this.words[u] |= 67108863 & r, o >= 18 ? (o -= 18, u += 1, this.words[u] |= r >>> 26) : o += 8;
                            this._strip()
                        }, o.prototype._parseBase = function(t, e, i) {
                            this.words = [0], this.length = 1;
                            for (var n = 0, r = 1; r <= 67108863; r *= e) n++;
                            n--, r = r / e | 0;
                            for (var o = t.length - i, u = o % n, s = Math.min(o, o - u) + i, h = 0, l = i; l < s; l += n) h = a(t, l, l + n, e), this.imuln(r), this.words[0] + h < 67108864 ? this.words[0] += h : this._iaddn(h);
                            if (0 !== u) {
                                var f = 1;
                                for (h = a(t, l, t.length, e), l = 0; l < u; l++) f *= e;
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
                            for (var r = 0, o = 0, u = 0; u < this.length; u++) {
                                var s = this.words[u],
                                    h = (16777215 & (s << r | o)).toString(16);
                                o = s >>> 24 - r & 16777215, (r += 2) >= 26 && (r -= 26, u--), i = 0 !== o || u !== this.length - 1 ? c[6 - h.length] + h + i : h + i
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
                        n(!1, "Base should be between 2 and 36")
                    }, o.prototype.toNumber = function() {
                        var t = this.words[0];
                        return 2 === this.length ? t += 67108864 * this.words[1] : 3 === this.length && 1 === this.words[2] ? t += 4503599627370496 + 67108864 * this.words[1] : this.length > 2 && n(!1, "Number can only safely store up to 53 bits"), 0 !== this.negative ? -t : t
                    }, o.prototype.toJSON = function() {
                        return this.toString(16, 2)
                    }, u && (o.prototype.toBuffer = function(t, e) {
                        return this.toArrayLike(u, t, e)
                    }), o.prototype.toArray = function(t, e) {
                        return this.toArrayLike(Array, t, e)
                    };

                    function p(t, e, i) {
                        i.negative = e.negative ^ t.negative;
                        var n = t.length + e.length | 0;
                        i.length = n, n = n - 1 | 0;
                        var r = 0 | t.words[0],
                            o = 0 | e.words[0],
                            u = r * o,
                            s = 67108863 & u,
                            h = u / 67108864 | 0;
                        i.words[0] = s;
                        for (var a = 1; a < n; a++) {
                            for (var l = h >>> 26, f = 67108863 & h, c = Math.min(a, e.length - 1), d = Math.max(0, a - t.length + 1); d <= c; d++) {
                                var m = a - d | 0;
                                l += (u = (r = 0 | t.words[m]) * (o = 0 | e.words[d]) + f) / 67108864 | 0, f = 67108863 & u
                            }
                            i.words[a] = 0 | f, h = 0 | l
                        }
                        return 0 !== h ? i.words[a] = 0 | h : i.length--, i._strip()
                    }
                    o.prototype.toArrayLike = function(t, e, i) {
                        this._strip();
                        var r = this.byteLength(),
                            o = i || Math.max(1, r);
                        n(r <= o, "byte array longer than desired length"), n(o > 0, "Requested array length <= 0");
                        var u = function(t, e) {
                            return t.allocUnsafe ? t.allocUnsafe(e) : new t(e)
                        }(t, o);
                        return this["_toArrayLike" + ("le" === e ? "LE" : "BE")](u, r), u
                    }, o.prototype._toArrayLikeLE = function(t, e) {
                        for (var i = 0, n = 0, r = 0, o = 0; r < this.length; r++) {
                            var u = this.words[r] << o | n;
                            t[i++] = 255 & u, i < t.length && (t[i++] = u >> 8 & 255), i < t.length && (t[i++] = u >> 16 & 255), 6 === o ? (i < t.length && (t[i++] = u >> 24 & 255), n = 0, o = 0) : (n = u >>> 24, o += 2)
                        }
                        if (i < t.length)
                            for (t[i++] = n; i < t.length;) t[i++] = 0
                    }, o.prototype._toArrayLikeBE = function(t, e) {
                        for (var i = t.length - 1, n = 0, r = 0, o = 0; r < this.length; r++) {
                            var u = this.words[r] << o | n;
                            t[i--] = 255 & u, i >= 0 && (t[i--] = u >> 8 & 255), i >= 0 && (t[i--] = u >> 16 & 255), 6 === o ? (i >= 0 && (t[i--] = u >> 24 & 255), n = 0, o = 0) : (n = u >>> 24, o += 2)
                        }
                        if (i >= 0)
                            for (t[i--] = n; i >= 0;) t[i--] = 0
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
                        return n(0 == (this.negative | t.negative)), this.iuor(t)
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
                        return n(0 == (this.negative | t.negative)), this.iuand(t)
                    }, o.prototype.and = function(t) {
                        return this.length > t.length ? this.clone().iand(t) : t.clone().iand(this)
                    }, o.prototype.uand = function(t) {
                        return this.length > t.length ? this.clone().iuand(t) : t.clone().iuand(this)
                    }, o.prototype.iuxor = function(t) {
                        var e, i;
                        this.length > t.length ? (e = this, i = t) : (e = t, i = this);
                        for (var n = 0; n < i.length; n++) this.words[n] = e.words[n] ^ i.words[n];
                        if (this !== e)
                            for (; n < e.length; n++) this.words[n] = e.words[n];
                        return this.length = e.length, this._strip()
                    }, o.prototype.ixor = function(t) {
                        return n(0 == (this.negative | t.negative)), this.iuxor(t)
                    }, o.prototype.xor = function(t) {
                        return this.length > t.length ? this.clone().ixor(t) : t.clone().ixor(this)
                    }, o.prototype.uxor = function(t) {
                        return this.length > t.length ? this.clone().iuxor(t) : t.clone().iuxor(this)
                    }, o.prototype.inotn = function(t) {
                        n("number" == typeof t && t >= 0);
                        var e = 0 | Math.ceil(t / 26),
                            i = t % 26;
                        this._expand(e), i > 0 && e--;
                        for (var r = 0; r < e; r++) this.words[r] = 67108863 & ~this.words[r];
                        return i > 0 && (this.words[r] = ~this.words[r] & 67108863 >> 26 - i), this._strip()
                    }, o.prototype.notn = function(t) {
                        return this.clone().inotn(t)
                    }, o.prototype.setn = function(t, e) {
                        n("number" == typeof t && t >= 0);
                        var i = t / 26 | 0,
                            r = t % 26;
                        return this._expand(i + 1), this.words[i] = e ? this.words[i] | 1 << r : this.words[i] & ~(1 << r), this._strip()
                    }, o.prototype.iadd = function(t) {
                        var e, i, n;
                        if (0 !== this.negative && 0 === t.negative) return this.negative = 0, e = this.isub(t), this.negative ^= 1, this._normSign();
                        if (0 === this.negative && 0 !== t.negative) return t.negative = 0, e = this.isub(t), t.negative = 1, e._normSign();
                        this.length > t.length ? (i = this, n = t) : (i = t, n = this);
                        for (var r = 0, o = 0; o < n.length; o++) e = (0 | i.words[o]) + (0 | n.words[o]) + r, this.words[o] = 67108863 & e, r = e >>> 26;
                        for (; 0 !== r && o < i.length; o++) e = (0 | i.words[o]) + r, this.words[o] = 67108863 & e, r = e >>> 26;
                        if (this.length = i.length, 0 !== r) this.words[this.length] = r, this.length++;
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
                        var i, n, r = this.cmp(t);
                        if (0 === r) return this.negative = 0, this.length = 1, this.words[0] = 0, this;
                        r > 0 ? (i = this, n = t) : (i = t, n = this);
                        for (var o = 0, u = 0; u < n.length; u++) o = (e = (0 | i.words[u]) - (0 | n.words[u]) + o) >> 26, this.words[u] = 67108863 & e;
                        for (; 0 !== o && u < i.length; u++) o = (e = (0 | i.words[u]) + o) >> 26, this.words[u] = 67108863 & e;
                        if (0 === o && u < i.length && i !== this)
                            for (; u < i.length; u++) this.words[u] = i.words[u];
                        return this.length = Math.max(this.length, u), i !== this && (this.negative = 1), this._strip()
                    }, o.prototype.sub = function(t) {
                        return this.clone().isub(t)
                    };
                    var g = function(t, e, i) {
                        var n, r, o, u = t.words,
                            s = e.words,
                            h = i.words,
                            a = 0,
                            l = 0 | u[0],
                            f = 8191 & l,
                            c = l >>> 13,
                            d = 0 | u[1],
                            m = 8191 & d,
                            p = d >>> 13,
                            g = 0 | u[2],
                            v = 8191 & g,
                            M = g >>> 13,
                            y = 0 | u[3],
                            w = 8191 & y,
                            b = y >>> 13,
                            _ = 0 | u[4],
                            j = 8191 & _,
                            P = _ >>> 13,
                            O = 0 | u[5],
                            k = 8191 & O,
                            x = O >>> 13,
                            U = 0 | u[6],
                            T = 8191 & U,
                            A = U >>> 13,
                            I = 0 | u[7],
                            B = 8191 & I,
                            S = I >>> 13,
                            E = 0 | u[8],
                            R = 8191 & E,
                            C = E >>> 13,
                            L = 0 | u[9],
                            N = 8191 & L,
                            q = L >>> 13,
                            F = 0 | s[0],
                            Z = 8191 & F,
                            W = F >>> 13,
                            H = 0 | s[1],
                            D = 8191 & H,
                            $ = H >>> 13,
                            z = 0 | s[2],
                            X = 8191 & z,
                            V = z >>> 13,
                            K = 0 | s[3],
                            G = 8191 & K,
                            J = K >>> 13,
                            Q = 0 | s[4],
                            Y = 8191 & Q,
                            tt = Q >>> 13,
                            et = 0 | s[5],
                            it = 8191 & et,
                            nt = et >>> 13,
                            rt = 0 | s[6],
                            ot = 8191 & rt,
                            ut = rt >>> 13,
                            st = 0 | s[7],
                            ht = 8191 & st,
                            at = st >>> 13,
                            lt = 0 | s[8],
                            ft = 8191 & lt,
                            ct = lt >>> 13,
                            dt = 0 | s[9],
                            mt = 8191 & dt,
                            pt = dt >>> 13;
                        i.negative = t.negative ^ e.negative, i.length = 19;
                        var gt = (a + (n = Math.imul(f, Z)) | 0) + ((8191 & (r = (r = Math.imul(f, W)) + Math.imul(c, Z) | 0)) << 13) | 0;
                        a = ((o = Math.imul(c, W)) + (r >>> 13) | 0) + (gt >>> 26) | 0, gt &= 67108863, n = Math.imul(m, Z), r = (r = Math.imul(m, W)) + Math.imul(p, Z) | 0, o = Math.imul(p, W);
                        var vt = (a + (n = n + Math.imul(f, D) | 0) | 0) + ((8191 & (r = (r = r + Math.imul(f, $) | 0) + Math.imul(c, D) | 0)) << 13) | 0;
                        a = ((o = o + Math.imul(c, $) | 0) + (r >>> 13) | 0) + (vt >>> 26) | 0, vt &= 67108863, n = Math.imul(v, Z), r = (r = Math.imul(v, W)) + Math.imul(M, Z) | 0, o = Math.imul(M, W), n = n + Math.imul(m, D) | 0, r = (r = r + Math.imul(m, $) | 0) + Math.imul(p, D) | 0, o = o + Math.imul(p, $) | 0;
                        var Mt = (a + (n = n + Math.imul(f, X) | 0) | 0) + ((8191 & (r = (r = r + Math.imul(f, V) | 0) + Math.imul(c, X) | 0)) << 13) | 0;
                        a = ((o = o + Math.imul(c, V) | 0) + (r >>> 13) | 0) + (Mt >>> 26) | 0, Mt &= 67108863, n = Math.imul(w, Z), r = (r = Math.imul(w, W)) + Math.imul(b, Z) | 0, o = Math.imul(b, W), n = n + Math.imul(v, D) | 0, r = (r = r + Math.imul(v, $) | 0) + Math.imul(M, D) | 0, o = o + Math.imul(M, $) | 0, n = n + Math.imul(m, X) | 0, r = (r = r + Math.imul(m, V) | 0) + Math.imul(p, X) | 0, o = o + Math.imul(p, V) | 0;
                        var yt = (a + (n = n + Math.imul(f, G) | 0) | 0) + ((8191 & (r = (r = r + Math.imul(f, J) | 0) + Math.imul(c, G) | 0)) << 13) | 0;
                        a = ((o = o + Math.imul(c, J) | 0) + (r >>> 13) | 0) + (yt >>> 26) | 0, yt &= 67108863, n = Math.imul(j, Z), r = (r = Math.imul(j, W)) + Math.imul(P, Z) | 0, o = Math.imul(P, W), n = n + Math.imul(w, D) | 0, r = (r = r + Math.imul(w, $) | 0) + Math.imul(b, D) | 0, o = o + Math.imul(b, $) | 0, n = n + Math.imul(v, X) | 0, r = (r = r + Math.imul(v, V) | 0) + Math.imul(M, X) | 0, o = o + Math.imul(M, V) | 0, n = n + Math.imul(m, G) | 0, r = (r = r + Math.imul(m, J) | 0) + Math.imul(p, G) | 0, o = o + Math.imul(p, J) | 0;
                        var wt = (a + (n = n + Math.imul(f, Y) | 0) | 0) + ((8191 & (r = (r = r + Math.imul(f, tt) | 0) + Math.imul(c, Y) | 0)) << 13) | 0;
                        a = ((o = o + Math.imul(c, tt) | 0) + (r >>> 13) | 0) + (wt >>> 26) | 0, wt &= 67108863, n = Math.imul(k, Z), r = (r = Math.imul(k, W)) + Math.imul(x, Z) | 0, o = Math.imul(x, W), n = n + Math.imul(j, D) | 0, r = (r = r + Math.imul(j, $) | 0) + Math.imul(P, D) | 0, o = o + Math.imul(P, $) | 0, n = n + Math.imul(w, X) | 0, r = (r = r + Math.imul(w, V) | 0) + Math.imul(b, X) | 0, o = o + Math.imul(b, V) | 0, n = n + Math.imul(v, G) | 0, r = (r = r + Math.imul(v, J) | 0) + Math.imul(M, G) | 0, o = o + Math.imul(M, J) | 0, n = n + Math.imul(m, Y) | 0, r = (r = r + Math.imul(m, tt) | 0) + Math.imul(p, Y) | 0, o = o + Math.imul(p, tt) | 0;
                        var bt = (a + (n = n + Math.imul(f, it) | 0) | 0) + ((8191 & (r = (r = r + Math.imul(f, nt) | 0) + Math.imul(c, it) | 0)) << 13) | 0;
                        a = ((o = o + Math.imul(c, nt) | 0) + (r >>> 13) | 0) + (bt >>> 26) | 0, bt &= 67108863, n = Math.imul(T, Z), r = (r = Math.imul(T, W)) + Math.imul(A, Z) | 0, o = Math.imul(A, W), n = n + Math.imul(k, D) | 0, r = (r = r + Math.imul(k, $) | 0) + Math.imul(x, D) | 0, o = o + Math.imul(x, $) | 0, n = n + Math.imul(j, X) | 0, r = (r = r + Math.imul(j, V) | 0) + Math.imul(P, X) | 0, o = o + Math.imul(P, V) | 0, n = n + Math.imul(w, G) | 0, r = (r = r + Math.imul(w, J) | 0) + Math.imul(b, G) | 0, o = o + Math.imul(b, J) | 0, n = n + Math.imul(v, Y) | 0, r = (r = r + Math.imul(v, tt) | 0) + Math.imul(M, Y) | 0, o = o + Math.imul(M, tt) | 0, n = n + Math.imul(m, it) | 0, r = (r = r + Math.imul(m, nt) | 0) + Math.imul(p, it) | 0, o = o + Math.imul(p, nt) | 0;
                        var _t = (a + (n = n + Math.imul(f, ot) | 0) | 0) + ((8191 & (r = (r = r + Math.imul(f, ut) | 0) + Math.imul(c, ot) | 0)) << 13) | 0;
                        a = ((o = o + Math.imul(c, ut) | 0) + (r >>> 13) | 0) + (_t >>> 26) | 0, _t &= 67108863, n = Math.imul(B, Z), r = (r = Math.imul(B, W)) + Math.imul(S, Z) | 0, o = Math.imul(S, W), n = n + Math.imul(T, D) | 0, r = (r = r + Math.imul(T, $) | 0) + Math.imul(A, D) | 0, o = o + Math.imul(A, $) | 0, n = n + Math.imul(k, X) | 0, r = (r = r + Math.imul(k, V) | 0) + Math.imul(x, X) | 0, o = o + Math.imul(x, V) | 0, n = n + Math.imul(j, G) | 0, r = (r = r + Math.imul(j, J) | 0) + Math.imul(P, G) | 0, o = o + Math.imul(P, J) | 0, n = n + Math.imul(w, Y) | 0, r = (r = r + Math.imul(w, tt) | 0) + Math.imul(b, Y) | 0, o = o + Math.imul(b, tt) | 0, n = n + Math.imul(v, it) | 0, r = (r = r + Math.imul(v, nt) | 0) + Math.imul(M, it) | 0, o = o + Math.imul(M, nt) | 0, n = n + Math.imul(m, ot) | 0, r = (r = r + Math.imul(m, ut) | 0) + Math.imul(p, ot) | 0, o = o + Math.imul(p, ut) | 0;
                        var jt = (a + (n = n + Math.imul(f, ht) | 0) | 0) + ((8191 & (r = (r = r + Math.imul(f, at) | 0) + Math.imul(c, ht) | 0)) << 13) | 0;
                        a = ((o = o + Math.imul(c, at) | 0) + (r >>> 13) | 0) + (jt >>> 26) | 0, jt &= 67108863, n = Math.imul(R, Z), r = (r = Math.imul(R, W)) + Math.imul(C, Z) | 0, o = Math.imul(C, W), n = n + Math.imul(B, D) | 0, r = (r = r + Math.imul(B, $) | 0) + Math.imul(S, D) | 0, o = o + Math.imul(S, $) | 0, n = n + Math.imul(T, X) | 0, r = (r = r + Math.imul(T, V) | 0) + Math.imul(A, X) | 0, o = o + Math.imul(A, V) | 0, n = n + Math.imul(k, G) | 0, r = (r = r + Math.imul(k, J) | 0) + Math.imul(x, G) | 0, o = o + Math.imul(x, J) | 0, n = n + Math.imul(j, Y) | 0, r = (r = r + Math.imul(j, tt) | 0) + Math.imul(P, Y) | 0, o = o + Math.imul(P, tt) | 0, n = n + Math.imul(w, it) | 0, r = (r = r + Math.imul(w, nt) | 0) + Math.imul(b, it) | 0, o = o + Math.imul(b, nt) | 0, n = n + Math.imul(v, ot) | 0, r = (r = r + Math.imul(v, ut) | 0) + Math.imul(M, ot) | 0, o = o + Math.imul(M, ut) | 0, n = n + Math.imul(m, ht) | 0, r = (r = r + Math.imul(m, at) | 0) + Math.imul(p, ht) | 0, o = o + Math.imul(p, at) | 0;
                        var Pt = (a + (n = n + Math.imul(f, ft) | 0) | 0) + ((8191 & (r = (r = r + Math.imul(f, ct) | 0) + Math.imul(c, ft) | 0)) << 13) | 0;
                        a = ((o = o + Math.imul(c, ct) | 0) + (r >>> 13) | 0) + (Pt >>> 26) | 0, Pt &= 67108863, n = Math.imul(N, Z), r = (r = Math.imul(N, W)) + Math.imul(q, Z) | 0, o = Math.imul(q, W), n = n + Math.imul(R, D) | 0, r = (r = r + Math.imul(R, $) | 0) + Math.imul(C, D) | 0, o = o + Math.imul(C, $) | 0, n = n + Math.imul(B, X) | 0, r = (r = r + Math.imul(B, V) | 0) + Math.imul(S, X) | 0, o = o + Math.imul(S, V) | 0, n = n + Math.imul(T, G) | 0, r = (r = r + Math.imul(T, J) | 0) + Math.imul(A, G) | 0, o = o + Math.imul(A, J) | 0, n = n + Math.imul(k, Y) | 0, r = (r = r + Math.imul(k, tt) | 0) + Math.imul(x, Y) | 0, o = o + Math.imul(x, tt) | 0, n = n + Math.imul(j, it) | 0, r = (r = r + Math.imul(j, nt) | 0) + Math.imul(P, it) | 0, o = o + Math.imul(P, nt) | 0, n = n + Math.imul(w, ot) | 0, r = (r = r + Math.imul(w, ut) | 0) + Math.imul(b, ot) | 0, o = o + Math.imul(b, ut) | 0, n = n + Math.imul(v, ht) | 0, r = (r = r + Math.imul(v, at) | 0) + Math.imul(M, ht) | 0, o = o + Math.imul(M, at) | 0, n = n + Math.imul(m, ft) | 0, r = (r = r + Math.imul(m, ct) | 0) + Math.imul(p, ft) | 0, o = o + Math.imul(p, ct) | 0;
                        var Ot = (a + (n = n + Math.imul(f, mt) | 0) | 0) + ((8191 & (r = (r = r + Math.imul(f, pt) | 0) + Math.imul(c, mt) | 0)) << 13) | 0;
                        a = ((o = o + Math.imul(c, pt) | 0) + (r >>> 13) | 0) + (Ot >>> 26) | 0, Ot &= 67108863, n = Math.imul(N, D), r = (r = Math.imul(N, $)) + Math.imul(q, D) | 0, o = Math.imul(q, $), n = n + Math.imul(R, X) | 0, r = (r = r + Math.imul(R, V) | 0) + Math.imul(C, X) | 0, o = o + Math.imul(C, V) | 0, n = n + Math.imul(B, G) | 0, r = (r = r + Math.imul(B, J) | 0) + Math.imul(S, G) | 0, o = o + Math.imul(S, J) | 0, n = n + Math.imul(T, Y) | 0, r = (r = r + Math.imul(T, tt) | 0) + Math.imul(A, Y) | 0, o = o + Math.imul(A, tt) | 0, n = n + Math.imul(k, it) | 0, r = (r = r + Math.imul(k, nt) | 0) + Math.imul(x, it) | 0, o = o + Math.imul(x, nt) | 0, n = n + Math.imul(j, ot) | 0, r = (r = r + Math.imul(j, ut) | 0) + Math.imul(P, ot) | 0, o = o + Math.imul(P, ut) | 0, n = n + Math.imul(w, ht) | 0, r = (r = r + Math.imul(w, at) | 0) + Math.imul(b, ht) | 0, o = o + Math.imul(b, at) | 0, n = n + Math.imul(v, ft) | 0, r = (r = r + Math.imul(v, ct) | 0) + Math.imul(M, ft) | 0, o = o + Math.imul(M, ct) | 0;
                        var kt = (a + (n = n + Math.imul(m, mt) | 0) | 0) + ((8191 & (r = (r = r + Math.imul(m, pt) | 0) + Math.imul(p, mt) | 0)) << 13) | 0;
                        a = ((o = o + Math.imul(p, pt) | 0) + (r >>> 13) | 0) + (kt >>> 26) | 0, kt &= 67108863, n = Math.imul(N, X), r = (r = Math.imul(N, V)) + Math.imul(q, X) | 0, o = Math.imul(q, V), n = n + Math.imul(R, G) | 0, r = (r = r + Math.imul(R, J) | 0) + Math.imul(C, G) | 0, o = o + Math.imul(C, J) | 0, n = n + Math.imul(B, Y) | 0, r = (r = r + Math.imul(B, tt) | 0) + Math.imul(S, Y) | 0, o = o + Math.imul(S, tt) | 0, n = n + Math.imul(T, it) | 0, r = (r = r + Math.imul(T, nt) | 0) + Math.imul(A, it) | 0, o = o + Math.imul(A, nt) | 0, n = n + Math.imul(k, ot) | 0, r = (r = r + Math.imul(k, ut) | 0) + Math.imul(x, ot) | 0, o = o + Math.imul(x, ut) | 0, n = n + Math.imul(j, ht) | 0, r = (r = r + Math.imul(j, at) | 0) + Math.imul(P, ht) | 0, o = o + Math.imul(P, at) | 0, n = n + Math.imul(w, ft) | 0, r = (r = r + Math.imul(w, ct) | 0) + Math.imul(b, ft) | 0, o = o + Math.imul(b, ct) | 0;
                        var xt = (a + (n = n + Math.imul(v, mt) | 0) | 0) + ((8191 & (r = (r = r + Math.imul(v, pt) | 0) + Math.imul(M, mt) | 0)) << 13) | 0;
                        a = ((o = o + Math.imul(M, pt) | 0) + (r >>> 13) | 0) + (xt >>> 26) | 0, xt &= 67108863, n = Math.imul(N, G), r = (r = Math.imul(N, J)) + Math.imul(q, G) | 0, o = Math.imul(q, J), n = n + Math.imul(R, Y) | 0, r = (r = r + Math.imul(R, tt) | 0) + Math.imul(C, Y) | 0, o = o + Math.imul(C, tt) | 0, n = n + Math.imul(B, it) | 0, r = (r = r + Math.imul(B, nt) | 0) + Math.imul(S, it) | 0, o = o + Math.imul(S, nt) | 0, n = n + Math.imul(T, ot) | 0, r = (r = r + Math.imul(T, ut) | 0) + Math.imul(A, ot) | 0, o = o + Math.imul(A, ut) | 0, n = n + Math.imul(k, ht) | 0, r = (r = r + Math.imul(k, at) | 0) + Math.imul(x, ht) | 0, o = o + Math.imul(x, at) | 0, n = n + Math.imul(j, ft) | 0, r = (r = r + Math.imul(j, ct) | 0) + Math.imul(P, ft) | 0, o = o + Math.imul(P, ct) | 0;
                        var Ut = (a + (n = n + Math.imul(w, mt) | 0) | 0) + ((8191 & (r = (r = r + Math.imul(w, pt) | 0) + Math.imul(b, mt) | 0)) << 13) | 0;
                        a = ((o = o + Math.imul(b, pt) | 0) + (r >>> 13) | 0) + (Ut >>> 26) | 0, Ut &= 67108863, n = Math.imul(N, Y), r = (r = Math.imul(N, tt)) + Math.imul(q, Y) | 0, o = Math.imul(q, tt), n = n + Math.imul(R, it) | 0, r = (r = r + Math.imul(R, nt) | 0) + Math.imul(C, it) | 0, o = o + Math.imul(C, nt) | 0, n = n + Math.imul(B, ot) | 0, r = (r = r + Math.imul(B, ut) | 0) + Math.imul(S, ot) | 0, o = o + Math.imul(S, ut) | 0, n = n + Math.imul(T, ht) | 0, r = (r = r + Math.imul(T, at) | 0) + Math.imul(A, ht) | 0, o = o + Math.imul(A, at) | 0, n = n + Math.imul(k, ft) | 0, r = (r = r + Math.imul(k, ct) | 0) + Math.imul(x, ft) | 0, o = o + Math.imul(x, ct) | 0;
                        var Tt = (a + (n = n + Math.imul(j, mt) | 0) | 0) + ((8191 & (r = (r = r + Math.imul(j, pt) | 0) + Math.imul(P, mt) | 0)) << 13) | 0;
                        a = ((o = o + Math.imul(P, pt) | 0) + (r >>> 13) | 0) + (Tt >>> 26) | 0, Tt &= 67108863, n = Math.imul(N, it), r = (r = Math.imul(N, nt)) + Math.imul(q, it) | 0, o = Math.imul(q, nt), n = n + Math.imul(R, ot) | 0, r = (r = r + Math.imul(R, ut) | 0) + Math.imul(C, ot) | 0, o = o + Math.imul(C, ut) | 0, n = n + Math.imul(B, ht) | 0, r = (r = r + Math.imul(B, at) | 0) + Math.imul(S, ht) | 0, o = o + Math.imul(S, at) | 0, n = n + Math.imul(T, ft) | 0, r = (r = r + Math.imul(T, ct) | 0) + Math.imul(A, ft) | 0, o = o + Math.imul(A, ct) | 0;
                        var At = (a + (n = n + Math.imul(k, mt) | 0) | 0) + ((8191 & (r = (r = r + Math.imul(k, pt) | 0) + Math.imul(x, mt) | 0)) << 13) | 0;
                        a = ((o = o + Math.imul(x, pt) | 0) + (r >>> 13) | 0) + (At >>> 26) | 0, At &= 67108863, n = Math.imul(N, ot), r = (r = Math.imul(N, ut)) + Math.imul(q, ot) | 0, o = Math.imul(q, ut), n = n + Math.imul(R, ht) | 0, r = (r = r + Math.imul(R, at) | 0) + Math.imul(C, ht) | 0, o = o + Math.imul(C, at) | 0, n = n + Math.imul(B, ft) | 0, r = (r = r + Math.imul(B, ct) | 0) + Math.imul(S, ft) | 0, o = o + Math.imul(S, ct) | 0;
                        var It = (a + (n = n + Math.imul(T, mt) | 0) | 0) + ((8191 & (r = (r = r + Math.imul(T, pt) | 0) + Math.imul(A, mt) | 0)) << 13) | 0;
                        a = ((o = o + Math.imul(A, pt) | 0) + (r >>> 13) | 0) + (It >>> 26) | 0, It &= 67108863, n = Math.imul(N, ht), r = (r = Math.imul(N, at)) + Math.imul(q, ht) | 0, o = Math.imul(q, at), n = n + Math.imul(R, ft) | 0, r = (r = r + Math.imul(R, ct) | 0) + Math.imul(C, ft) | 0, o = o + Math.imul(C, ct) | 0;
                        var Bt = (a + (n = n + Math.imul(B, mt) | 0) | 0) + ((8191 & (r = (r = r + Math.imul(B, pt) | 0) + Math.imul(S, mt) | 0)) << 13) | 0;
                        a = ((o = o + Math.imul(S, pt) | 0) + (r >>> 13) | 0) + (Bt >>> 26) | 0, Bt &= 67108863, n = Math.imul(N, ft), r = (r = Math.imul(N, ct)) + Math.imul(q, ft) | 0, o = Math.imul(q, ct);
                        var St = (a + (n = n + Math.imul(R, mt) | 0) | 0) + ((8191 & (r = (r = r + Math.imul(R, pt) | 0) + Math.imul(C, mt) | 0)) << 13) | 0;
                        a = ((o = o + Math.imul(C, pt) | 0) + (r >>> 13) | 0) + (St >>> 26) | 0, St &= 67108863;
                        var Et = (a + (n = Math.imul(N, mt)) | 0) + ((8191 & (r = (r = Math.imul(N, pt)) + Math.imul(q, mt) | 0)) << 13) | 0;
                        return a = ((o = Math.imul(q, pt)) + (r >>> 13) | 0) + (Et >>> 26) | 0, Et &= 67108863, h[0] = gt, h[1] = vt, h[2] = Mt, h[3] = yt, h[4] = wt, h[5] = bt, h[6] = _t, h[7] = jt, h[8] = Pt, h[9] = Ot, h[10] = kt, h[11] = xt, h[12] = Ut, h[13] = Tt, h[14] = At, h[15] = It, h[16] = Bt, h[17] = St, h[18] = Et, 0 !== a && (h[19] = a, i.length++), i
                    };

                    function v(t, e, i) {
                        i.negative = e.negative ^ t.negative, i.length = t.length + e.length;
                        for (var n = 0, r = 0, o = 0; o < i.length - 1; o++) {
                            var u = r;
                            r = 0;
                            for (var s = 67108863 & n, h = Math.min(o, e.length - 1), a = Math.max(0, o - t.length + 1); a <= h; a++) {
                                var l = o - a,
                                    f = (0 | t.words[l]) * (0 | e.words[a]),
                                    c = 67108863 & f;
                                s = 67108863 & (c = c + s | 0), r += (u = (u = u + (f / 67108864 | 0) | 0) + (c >>> 26) | 0) >>> 26, u &= 67108863
                            }
                            i.words[o] = s, n = u, u = r
                        }
                        return 0 !== n ? i.words[o] = n : i.length--, i._strip()
                    }

                    function M(t, e, i) {
                        return v(t, e, i)
                    }

                    function y(t, e) {
                        this.x = t, this.y = e
                    }
                    Math.imul || (g = p), o.prototype.mulTo = function(t, e) {
                        var i = this.length + t.length;
                        return 10 === this.length && 10 === t.length ? g(this, t, e) : i < 63 ? p(this, t, e) : i < 1024 ? v(this, t, e) : M(this, t, e)
                    }, y.prototype.makeRBT = function(t) {
                        for (var e = new Array(t), i = o.prototype._countBits(t) - 1, n = 0; n < t; n++) e[n] = this.revBin(n, i, t);
                        return e
                    }, y.prototype.revBin = function(t, e, i) {
                        if (0 === t || t === i - 1) return t;
                        for (var n = 0, r = 0; r < e; r++) n |= (1 & t) << e - r - 1, t >>= 1;
                        return n
                    }, y.prototype.permute = function(t, e, i, n, r, o) {
                        for (var u = 0; u < o; u++) n[u] = e[t[u]], r[u] = i[t[u]]
                    }, y.prototype.transform = function(t, e, i, n, r, o) {
                        this.permute(o, t, e, i, n, r);
                        for (var u = 1; u < r; u <<= 1)
                            for (var s = u << 1, h = Math.cos(2 * Math.PI / s), a = Math.sin(2 * Math.PI / s), l = 0; l < r; l += s)
                                for (var f = h, c = a, d = 0; d < u; d++) {
                                    var m = i[l + d],
                                        p = n[l + d],
                                        g = i[l + d + u],
                                        v = n[l + d + u],
                                        M = f * g - c * v;
                                    v = f * v + c * g, g = M, i[l + d] = m + g, n[l + d] = p + v, i[l + d + u] = m - g, n[l + d + u] = p - v, d !== s && (M = h * f - a * c, c = h * c + a * f, f = M)
                                }
                    }, y.prototype.guessLen13b = function(t, e) {
                        var i = 1 | Math.max(e, t),
                            n = 1 & i,
                            r = 0;
                        for (i = i / 2 | 0; i; i >>>= 1) r++;
                        return 1 << r + 1 + n
                    }, y.prototype.conjugate = function(t, e, i) {
                        if (!(i <= 1))
                            for (var n = 0; n < i / 2; n++) {
                                var r = t[n];
                                t[n] = t[i - n - 1], t[i - n - 1] = r, r = e[n], e[n] = -e[i - n - 1], e[i - n - 1] = -r
                            }
                    }, y.prototype.normalize13b = function(t, e) {
                        for (var i = 0, n = 0; n < e / 2; n++) {
                            var r = 8192 * Math.round(t[2 * n + 1] / e) + Math.round(t[2 * n] / e) + i;
                            t[n] = 67108863 & r, i = r < 67108864 ? 0 : r / 67108864 | 0
                        }
                        return t
                    }, y.prototype.convert13b = function(t, e, i, r) {
                        for (var o = 0, u = 0; u < e; u++) o += 0 | t[u], i[2 * u] = 8191 & o, o >>>= 13, i[2 * u + 1] = 8191 & o, o >>>= 13;
                        for (u = 2 * e; u < r; ++u) i[u] = 0;
                        n(0 === o), n(0 == (-8192 & o))
                    }, y.prototype.stub = function(t) {
                        for (var e = new Array(t), i = 0; i < t; i++) e[i] = 0;
                        return e
                    }, y.prototype.mulp = function(t, e, i) {
                        var n = 2 * this.guessLen13b(t.length, e.length),
                            r = this.makeRBT(n),
                            o = this.stub(n),
                            u = new Array(n),
                            s = new Array(n),
                            h = new Array(n),
                            a = new Array(n),
                            l = new Array(n),
                            f = new Array(n),
                            c = i.words;
                        c.length = n, this.convert13b(t.words, t.length, u, n), this.convert13b(e.words, e.length, a, n), this.transform(u, o, s, h, n, r), this.transform(a, o, l, f, n, r);
                        for (var d = 0; d < n; d++) {
                            var m = s[d] * l[d] - h[d] * f[d];
                            h[d] = s[d] * f[d] + h[d] * l[d], s[d] = m
                        }
                        return this.conjugate(s, h, n), this.transform(s, h, c, o, n, r), this.conjugate(c, o, n), this.normalize13b(c, n), i.negative = t.negative ^ e.negative, i.length = t.length + e.length, i._strip()
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
                        e && (t = -t), n("number" == typeof t), n(t < 67108864);
                        for (var i = 0, r = 0; r < this.length; r++) {
                            var o = (0 | this.words[r]) * t,
                                u = (67108863 & o) + (67108863 & i);
                            i >>= 26, i += o / 67108864 | 0, i += u >>> 26, this.words[r] = 67108863 & u
                        }
                        return 0 !== i && (this.words[r] = i, this.length++), e ? this.ineg() : this
                    }, o.prototype.muln = function(t) {
                        return this.clone().imuln(t)
                    }, o.prototype.sqr = function() {
                        return this.mul(this)
                    }, o.prototype.isqr = function() {
                        return this.imul(this.clone())
                    }, o.prototype.pow = function(t) {
                        var e = function(t) {
                            for (var e = new Array(t.bitLength()), i = 0; i < e.length; i++) {
                                var n = i / 26 | 0,
                                    r = i % 26;
                                e[i] = t.words[n] >>> r & 1
                            }
                            return e
                        }(t);
                        if (0 === e.length) return new o(1);
                        for (var i = this, n = 0; n < e.length && 0 === e[n]; n++, i = i.sqr());
                        if (++n < e.length)
                            for (var r = i.sqr(); n < e.length; n++, r = r.sqr()) 0 !== e[n] && (i = i.mul(r));
                        return i
                    }, o.prototype.iushln = function(t) {
                        n("number" == typeof t && t >= 0);
                        var e, i = t % 26,
                            r = (t - i) / 26,
                            o = 67108863 >>> 26 - i << 26 - i;
                        if (0 !== i) {
                            var u = 0;
                            for (e = 0; e < this.length; e++) {
                                var s = this.words[e] & o,
                                    h = (0 | this.words[e]) - s << i;
                                this.words[e] = h | u, u = s >>> 26 - i
                            }
                            u && (this.words[e] = u, this.length++)
                        }
                        if (0 !== r) {
                            for (e = this.length - 1; e >= 0; e--) this.words[e + r] = this.words[e];
                            for (e = 0; e < r; e++) this.words[e] = 0;
                            this.length += r
                        }
                        return this._strip()
                    }, o.prototype.ishln = function(t) {
                        return n(0 === this.negative), this.iushln(t)
                    }, o.prototype.iushrn = function(t, e, i) {
                        var r;
                        n("number" == typeof t && t >= 0), r = e ? (e - e % 26) / 26 : 0;
                        var o = t % 26,
                            u = Math.min((t - o) / 26, this.length),
                            s = 67108863 ^ 67108863 >>> o << o,
                            h = i;
                        if (r -= u, r = Math.max(0, r), h) {
                            for (var a = 0; a < u; a++) h.words[a] = this.words[a];
                            h.length = u
                        }
                        if (0 === u);
                        else if (this.length > u)
                            for (this.length -= u, a = 0; a < this.length; a++) this.words[a] = this.words[a + u];
                        else this.words[0] = 0, this.length = 1;
                        var l = 0;
                        for (a = this.length - 1; a >= 0 && (0 !== l || a >= r); a--) {
                            var f = 0 | this.words[a];
                            this.words[a] = l << 26 - o | f >>> o, l = f & s
                        }
                        return h && 0 !== l && (h.words[h.length++] = l), 0 === this.length && (this.words[0] = 0, this.length = 1), this._strip()
                    }, o.prototype.ishrn = function(t, e, i) {
                        return n(0 === this.negative), this.iushrn(t, e, i)
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
                        var e = t % 26,
                            i = (t - e) / 26,
                            r = 1 << e;
                        return !(this.length <= i) && !!(this.words[i] & r)
                    }, o.prototype.imaskn = function(t) {
                        n("number" == typeof t && t >= 0);
                        var e = t % 26,
                            i = (t - e) / 26;
                        if (n(0 === this.negative, "imaskn works only with positive numbers"), this.length <= i) return this;
                        if (0 !== e && i++, this.length = Math.min(i, this.length), 0 !== e) {
                            var r = 67108863 ^ 67108863 >>> e << e;
                            this.words[this.length - 1] &= r
                        }
                        return this._strip()
                    }, o.prototype.maskn = function(t) {
                        return this.clone().imaskn(t)
                    }, o.prototype.iaddn = function(t) {
                        return n("number" == typeof t), n(t < 67108864), t < 0 ? this.isubn(-t) : 0 !== this.negative ? 1 === this.length && (0 | this.words[0]) <= t ? (this.words[0] = t - (0 | this.words[0]), this.negative = 0, this) : (this.negative = 0, this.isubn(t), this.negative = 1, this) : this._iaddn(t)
                    }, o.prototype._iaddn = function(t) {
                        this.words[0] += t;
                        for (var e = 0; e < this.length && this.words[e] >= 67108864; e++) this.words[e] -= 67108864, e === this.length - 1 ? this.words[e + 1] = 1 : this.words[e + 1]++;
                        return this.length = Math.max(this.length, e + 1), this
                    }, o.prototype.isubn = function(t) {
                        if (n("number" == typeof t), n(t < 67108864), t < 0) return this.iaddn(-t);
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
                        var r, o, u = t.length + i;
                        this._expand(u);
                        var s = 0;
                        for (r = 0; r < t.length; r++) {
                            o = (0 | this.words[r + i]) + s;
                            var h = (0 | t.words[r]) * e;
                            s = ((o -= 67108863 & h) >> 26) - (h / 67108864 | 0), this.words[r + i] = 67108863 & o
                        }
                        for (; r < this.length - i; r++) s = (o = (0 | this.words[r + i]) + s) >> 26, this.words[r + i] = 67108863 & o;
                        if (0 === s) return this._strip();
                        for (n(-1 === s), s = 0, r = 0; r < this.length; r++) s = (o = -(0 | this.words[r]) + s) >> 26, this.words[r] = 67108863 & o;
                        return this.negative = 1, this._strip()
                    }, o.prototype._wordDiv = function(t, e) {
                        var i = (this.length, t.length),
                            n = this.clone(),
                            r = t,
                            u = 0 | r.words[r.length - 1];
                        0 !== (i = 26 - this._countBits(u)) && (r = r.ushln(i), n.iushln(i), u = 0 | r.words[r.length - 1]);
                        var s, h = n.length - r.length;
                        if ("mod" !== e) {
                            (s = new o(null)).length = h + 1, s.words = new Array(s.length);
                            for (var a = 0; a < s.length; a++) s.words[a] = 0
                        }
                        var l = n.clone()._ishlnsubmul(r, 1, h);
                        0 === l.negative && (n = l, s && (s.words[h] = 1));
                        for (var f = h - 1; f >= 0; f--) {
                            var c = 67108864 * (0 | n.words[r.length + f]) + (0 | n.words[r.length + f - 1]);
                            for (c = Math.min(c / u | 0, 67108863), n._ishlnsubmul(r, c, f); 0 !== n.negative;) c--, n.negative = 0, n._ishlnsubmul(r, 1, f), n.isZero() || (n.negative ^= 1);
                            s && (s.words[f] = c)
                        }
                        return s && s._strip(), n._strip(), "div" !== e && 0 !== i && n.iushrn(i), {
                            div: s || null,
                            mod: n
                        }
                    }, o.prototype.divmod = function(t, e, i) {
                        return n(!t.isZero()), this.isZero() ? {
                            div: new o(0),
                            mod: new o(0)
                        } : 0 !== this.negative && 0 === t.negative ? (s = this.neg().divmod(t, e), "mod" !== e && (r = s.div.neg()), "div" !== e && (u = s.mod.neg(), i && 0 !== u.negative && u.iadd(t)), {
                            div: r,
                            mod: u
                        }) : 0 === this.negative && 0 !== t.negative ? (s = this.divmod(t.neg(), e), "mod" !== e && (r = s.div.neg()), {
                            div: r,
                            mod: s.mod
                        }) : 0 != (this.negative & t.negative) ? (s = this.neg().divmod(t.neg(), e), "div" !== e && (u = s.mod.neg(), i && 0 !== u.negative && u.isub(t)), {
                            div: s.div,
                            mod: u
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
                        var r, u, s
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
                            n = t.ushrn(1),
                            r = t.andln(1),
                            o = i.cmp(n);
                        return o < 0 || 1 === r && 0 === o ? e.div : 0 !== e.div.negative ? e.div.isubn(1) : e.div.iaddn(1)
                    }, o.prototype.modrn = function(t) {
                        var e = t < 0;
                        e && (t = -t), n(t <= 67108863);
                        for (var i = (1 << 26) % t, r = 0, o = this.length - 1; o >= 0; o--) r = (i * r + (0 | this.words[o])) % t;
                        return e ? -r : r
                    }, o.prototype.modn = function(t) {
                        return this.modrn(t)
                    }, o.prototype.idivn = function(t) {
                        var e = t < 0;
                        e && (t = -t), n(t <= 67108863);
                        for (var i = 0, r = this.length - 1; r >= 0; r--) {
                            var o = (0 | this.words[r]) + 67108864 * i;
                            this.words[r] = o / t | 0, i = o % t
                        }
                        return this._strip(), e ? this.ineg() : this
                    }, o.prototype.divn = function(t) {
                        return this.clone().idivn(t)
                    }, o.prototype.egcd = function(t) {
                        n(0 === t.negative), n(!t.isZero());
                        var e = this,
                            i = t.clone();
                        e = 0 !== e.negative ? e.umod(t) : e.clone();
                        for (var r = new o(1), u = new o(0), s = new o(0), h = new o(1), a = 0; e.isEven() && i.isEven();) e.iushrn(1), i.iushrn(1), ++a;
                        for (var l = i.clone(), f = e.clone(); !e.isZero();) {
                            for (var c = 0, d = 1; 0 == (e.words[0] & d) && c < 26; ++c, d <<= 1);
                            if (c > 0)
                                for (e.iushrn(c); c-- > 0;)(r.isOdd() || u.isOdd()) && (r.iadd(l), u.isub(f)), r.iushrn(1), u.iushrn(1);
                            for (var m = 0, p = 1; 0 == (i.words[0] & p) && m < 26; ++m, p <<= 1);
                            if (m > 0)
                                for (i.iushrn(m); m-- > 0;)(s.isOdd() || h.isOdd()) && (s.iadd(l), h.isub(f)), s.iushrn(1), h.iushrn(1);
                            e.cmp(i) >= 0 ? (e.isub(i), r.isub(s), u.isub(h)) : (i.isub(e), s.isub(r), h.isub(u))
                        }
                        return {
                            a: s,
                            b: h,
                            gcd: i.iushln(a)
                        }
                    }, o.prototype._invmp = function(t) {
                        n(0 === t.negative), n(!t.isZero());
                        var e = this,
                            i = t.clone();
                        e = 0 !== e.negative ? e.umod(t) : e.clone();
                        for (var r, u = new o(1), s = new o(0), h = i.clone(); e.cmpn(1) > 0 && i.cmpn(1) > 0;) {
                            for (var a = 0, l = 1; 0 == (e.words[0] & l) && a < 26; ++a, l <<= 1);
                            if (a > 0)
                                for (e.iushrn(a); a-- > 0;) u.isOdd() && u.iadd(h), u.iushrn(1);
                            for (var f = 0, c = 1; 0 == (i.words[0] & c) && f < 26; ++f, c <<= 1);
                            if (f > 0)
                                for (i.iushrn(f); f-- > 0;) s.isOdd() && s.iadd(h), s.iushrn(1);
                            e.cmp(i) >= 0 ? (e.isub(i), u.isub(s)) : (i.isub(e), s.isub(u))
                        }
                        return (r = 0 === e.cmpn(1) ? u : s).cmpn(0) < 0 && r.iadd(t), r
                    }, o.prototype.gcd = function(t) {
                        if (this.isZero()) return t.abs();
                        if (t.isZero()) return this.abs();
                        var e = this.clone(),
                            i = t.clone();
                        e.negative = 0, i.negative = 0;
                        for (var n = 0; e.isEven() && i.isEven(); n++) e.iushrn(1), i.iushrn(1);
                        for (;;) {
                            for (; e.isEven();) e.iushrn(1);
                            for (; i.isEven();) i.iushrn(1);
                            var r = e.cmp(i);
                            if (r < 0) {
                                var o = e;
                                e = i, i = o
                            } else if (0 === r || 0 === i.cmpn(1)) break;
                            e.isub(i)
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
                        var e = t % 26,
                            i = (t - e) / 26,
                            r = 1 << e;
                        if (this.length <= i) return this._expand(i + 1), this.words[i] |= r, this;
                        for (var o = r, u = i; 0 !== o && u < this.length; u++) {
                            var s = 0 | this.words[u];
                            o = (s += o) >>> 26, s &= 67108863, this.words[u] = s
                        }
                        return 0 !== o && (this.words[u] = o, this.length++), this
                    }, o.prototype.isZero = function() {
                        return 1 === this.length && 0 === this.words[0]
                    }, o.prototype.cmpn = function(t) {
                        var e, i = t < 0;
                        if (0 !== this.negative && !i) return -1;
                        if (0 === this.negative && i) return 1;
                        if (this._strip(), this.length > 1) e = 1;
                        else {
                            i && (t = -t), n(t <= 67108863, "Number is too big");
                            var r = 0 | this.words[0];
                            e = r === t ? 0 : r < t ? -1 : 1
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
                            var n = 0 | this.words[i],
                                r = 0 | t.words[i];
                            if (n !== r) {
                                n < r ? e = -1 : n > r && (e = 1);
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
                        return new k(t)
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
                    var w = {
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

                    function j() {
                        b.call(this, "p224", "ffffffff ffffffff ffffffff ffffffff 00000000 00000000 00000001")
                    }

                    function P() {
                        b.call(this, "p192", "ffffffff ffffffff ffffffff fffffffe ffffffff ffffffff")
                    }

                    function O() {
                        b.call(this, "25519", "7fffffffffffffff ffffffffffffffff ffffffffffffffff ffffffffffffffed")
                    }

                    function k(t) {
                        if ("string" == typeof t) {
                            var e = o._prime(t);
                            this.m = e.p, this.prime = e
                        } else n(t.gtn(1), "modulus must be greater than 1"), this.m = t, this.prime = null
                    }

                    function x(t) {
                        k.call(this, t), this.shift = this.m.bitLength(), this.shift % 26 != 0 && (this.shift += 26 - this.shift % 26), this.r = new o(1).iushln(this.shift), this.r2 = this.imod(this.r.sqr()), this.rinv = this.r._invmp(this.m), this.minv = this.rinv.mul(this.r).isubn(1).div(this.m), this.minv = this.minv.umod(this.r), this.minv = this.r.sub(this.minv)
                    }
                    b.prototype._tmp = function() {
                        var t = new o(null);
                        return t.words = new Array(Math.ceil(this.n / 13)), t
                    }, b.prototype.ireduce = function(t) {
                        var e, i = t;
                        do {
                            this.split(i, this.tmp), e = (i = (i = this.imulK(i)).iadd(this.tmp)).bitLength()
                        } while (e > this.n);
                        var n = e < this.n ? -1 : i.ucmp(this.p);
                        return 0 === n ? (i.words[0] = 0, i.length = 1) : n > 0 ? i.isub(this.p) : void 0 !== i.strip ? i.strip() : i._strip(), i
                    }, b.prototype.split = function(t, e) {
                        t.iushrn(this.n, 0, e)
                    }, b.prototype.imulK = function(t) {
                        return t.imul(this.k)
                    }, r(_, b), _.prototype.split = function(t, e) {
                        for (var i = Math.min(t.length, 9), n = 0; n < i; n++) e.words[n] = t.words[n];
                        if (e.length = i, t.length <= 9) return t.words[0] = 0, void(t.length = 1);
                        var r = t.words[9];
                        for (e.words[e.length++] = 4194303 & r, n = 10; n < t.length; n++) {
                            var o = 0 | t.words[n];
                            t.words[n - 10] = (4194303 & o) << 4 | r >>> 22, r = o
                        }
                        r >>>= 22, t.words[n - 10] = r, 0 === r && t.length > 10 ? t.length -= 10 : t.length -= 9
                    }, _.prototype.imulK = function(t) {
                        t.words[t.length] = 0, t.words[t.length + 1] = 0, t.length += 2;
                        for (var e = 0, i = 0; i < t.length; i++) {
                            var n = 0 | t.words[i];
                            e += 977 * n, t.words[i] = 67108863 & e, e = 64 * n + (e / 67108864 | 0)
                        }
                        return 0 === t.words[t.length - 1] && (t.length--, 0 === t.words[t.length - 1] && t.length--), t
                    }, r(j, b), r(P, b), r(O, b), O.prototype.imulK = function(t) {
                        for (var e = 0, i = 0; i < t.length; i++) {
                            var n = 19 * (0 | t.words[i]) + e,
                                r = 67108863 & n;
                            n >>>= 26, t.words[i] = r, e = n
                        }
                        return 0 !== e && (t.words[t.length++] = e), t
                    }, o._prime = function(t) {
                        if (w[t]) return w[t];
                        var e;
                        if ("k256" === t) e = new _;
                        else if ("p224" === t) e = new j;
                        else if ("p192" === t) e = new P;
                        else {
                            if ("p25519" !== t) throw new Error("Unknown prime " + t);
                            e = new O
                        }
                        return w[t] = e, e
                    }, k.prototype._verify1 = function(t) {
                        n(0 === t.negative, "red works only with positives"), n(t.red, "red works only with red numbers")
                    }, k.prototype._verify2 = function(t, e) {
                        n(0 == (t.negative | e.negative), "red works only with positives"), n(t.red && t.red === e.red, "red works only with red numbers")
                    }, k.prototype.imod = function(t) {
                        return this.prime ? this.prime.ireduce(t)._forceRed(this) : (l(t, t.umod(this.m)._forceRed(this)), t)
                    }, k.prototype.neg = function(t) {
                        return t.isZero() ? t.clone() : this.m.sub(t)._forceRed(this)
                    }, k.prototype.add = function(t, e) {
                        this._verify2(t, e);
                        var i = t.add(e);
                        return i.cmp(this.m) >= 0 && i.isub(this.m), i._forceRed(this)
                    }, k.prototype.iadd = function(t, e) {
                        this._verify2(t, e);
                        var i = t.iadd(e);
                        return i.cmp(this.m) >= 0 && i.isub(this.m), i
                    }, k.prototype.sub = function(t, e) {
                        this._verify2(t, e);
                        var i = t.sub(e);
                        return i.cmpn(0) < 0 && i.iadd(this.m), i._forceRed(this)
                    }, k.prototype.isub = function(t, e) {
                        this._verify2(t, e);
                        var i = t.isub(e);
                        return i.cmpn(0) < 0 && i.iadd(this.m), i
                    }, k.prototype.shl = function(t, e) {
                        return this._verify1(t), this.imod(t.ushln(e))
                    }, k.prototype.imul = function(t, e) {
                        return this._verify2(t, e), this.imod(t.imul(e))
                    }, k.prototype.mul = function(t, e) {
                        return this._verify2(t, e), this.imod(t.mul(e))
                    }, k.prototype.isqr = function(t) {
                        return this.imul(t, t.clone())
                    }, k.prototype.sqr = function(t) {
                        return this.mul(t, t)
                    }, k.prototype.sqrt = function(t) {
                        if (t.isZero()) return t.clone();
                        var e = this.m.andln(3);
                        if (n(e % 2 == 1), 3 === e) {
                            var i = this.m.add(new o(1)).iushrn(2);
                            return this.pow(t, i)
                        }
                        for (var r = this.m.subn(1), u = 0; !r.isZero() && 0 === r.andln(1);) u++, r.iushrn(1);
                        n(!r.isZero());
                        var s = new o(1).toRed(this),
                            h = s.redNeg(),
                            a = this.m.subn(1).iushrn(1),
                            l = this.m.bitLength();
                        for (l = new o(2 * l * l).toRed(this); 0 !== this.pow(l, a).cmp(h);) l.redIAdd(h);
                        for (var f = this.pow(l, r), c = this.pow(t, r.addn(1).iushrn(1)), d = this.pow(t, r), m = u; 0 !== d.cmp(s);) {
                            for (var p = d, g = 0; 0 !== p.cmp(s); g++) p = p.redSqr();
                            n(g < m);
                            var v = this.pow(f, new o(1).iushln(m - g - 1));
                            c = c.redMul(v), f = v.redSqr(), d = d.redMul(f), m = g
                        }
                        return c
                    }, k.prototype.invm = function(t) {
                        var e = t._invmp(this.m);
                        return 0 !== e.negative ? (e.negative = 0, this.imod(e).redNeg()) : this.imod(e)
                    }, k.prototype.pow = function(t, e) {
                        if (e.isZero()) return new o(1).toRed(this);
                        if (0 === e.cmpn(1)) return t.clone();
                        var i = new Array(16);
                        i[0] = new o(1).toRed(this), i[1] = t;
                        for (var n = 2; n < i.length; n++) i[n] = this.mul(i[n - 1], t);
                        var r = i[0],
                            u = 0,
                            s = 0,
                            h = e.bitLength() % 26;
                        for (0 === h && (h = 26), n = e.length - 1; n >= 0; n--) {
                            for (var a = e.words[n], l = h - 1; l >= 0; l--) {
                                var f = a >> l & 1;
                                r !== i[0] && (r = this.sqr(r)), 0 !== f || 0 !== u ? (u <<= 1, u |= f, (4 === ++s || 0 === n && 0 === l) && (r = this.mul(r, i[u]), s = 0, u = 0)) : s = 0
                            }
                            h = 26
                        }
                        return r
                    }, k.prototype.convertTo = function(t) {
                        var e = t.umod(this.m);
                        return e === t ? e.clone() : e
                    }, k.prototype.convertFrom = function(t) {
                        var e = t.clone();
                        return e.red = null, e
                    }, o.mont = function(t) {
                        return new x(t)
                    }, r(x, k), x.prototype.convertTo = function(t) {
                        return this.imod(t.ushln(this.shift))
                    }, x.prototype.convertFrom = function(t) {
                        var e = this.imod(t.mul(this.rinv));
                        return e.red = null, e
                    }, x.prototype.imul = function(t, e) {
                        if (t.isZero() || e.isZero()) return t.words[0] = 0, t.length = 1, t;
                        var i = t.imul(e),
                            n = i.maskn(this.shift).mul(this.minv).imaskn(this.shift).mul(this.m),
                            r = i.isub(n).iushrn(this.shift),
                            o = r;
                        return r.cmp(this.m) >= 0 ? o = r.isub(this.m) : r.cmpn(0) < 0 && (o = r.iadd(this.m)), o._forceRed(this)
                    }, x.prototype.mul = function(t, e) {
                        if (t.isZero() || e.isZero()) return new o(0)._forceRed(this);
                        var i = t.mul(e),
                            n = i.maskn(this.shift).mul(this.minv).imaskn(this.shift).mul(this.m),
                            r = i.isub(n).iushrn(this.shift),
                            u = r;
                        return r.cmp(this.m) >= 0 ? u = r.isub(this.m) : r.cmpn(0) < 0 && (u = r.iadd(this.m)), u._forceRed(this)
                    }, x.prototype.invm = function(t) {
                        return this.imod(t._invmp(this.m).mul(this.r2))._forceRed(this)
                    }
                }(t, this)
            }).call(this, i(81)(t))
        },
        10922: function(t, e, i) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.u8aEmpty = function(t) {
                for (let e = 0; e < t.length; e++)
                    if (t[e]) return !1;
                return !0
            }
        },
        10923: function(t, e, i) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.u8aFixLength = function(t, e = -1, i = !1) {
                const n = Math.ceil(e / 8);
                if (-1 === e || t.length === n) return t;
                if (t.length > n) return t.subarray(0, n);
                const r = new Uint8Array(n);
                return r.set(t, i ? 0 : n - t.length), r
            }
        },
        10924: function(t, e, i) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.u8aSorted = function(t) {
                return t.sort(n.u8aCmp)
            };
            var n = i(7766)
        },
        10925: function(t, e, i) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.u8aToBn = function(t, e = o) {
                return (0, n.hexToBn)((0, r.u8aToHex)(t), e)
            };
            var n = i(6124),
                r = i(6312);
            const o = {
                isLe: !0,
                isNegative: !1
            }
        },
        10926: function(t, e, i) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.u8aToBuffer = function(t) {
                return Buffer.from(t || [])
            }
        },
        10927: function(t, e, i) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.U8A_WRAP_PREFIX = e.U8A_WRAP_POSTFIX = e.U8A_WRAP_ETHEREUM = void 0, e.u8aIsWrapped = l, e.u8aUnwrapBytes = function(t) {
                const e = (0, o.u8aToU8a)(t);
                return l(e, !1) ? e.subarray(s.length, e.length - h.length) : e
            }, e.u8aWrapBytes = function(t) {
                const e = (0, o.u8aToU8a)(t);
                return l(e, !0) ? e : (0, n.u8aConcat)(s, e, h)
            };
            var n = i(7767),
                r = i(6813),
                o = i(5815);
            const u = (0, o.u8aToU8a)("Ethereum Signed Message:\n");
            e.U8A_WRAP_ETHEREUM = u;
            const s = (0, o.u8aToU8a)("<Bytes>");
            e.U8A_WRAP_PREFIX = s;
            const h = (0, o.u8aToU8a)("</Bytes>");
            e.U8A_WRAP_POSTFIX = h;
            const a = s.length + h.length;

            function l(t, e) {
                return t.length >= a && (0, r.u8aEq)(t.subarray(0, s.length), s) && (0, r.u8aEq)(t.slice(-h.length), h) || e && t.length >= u.length && (0, r.u8aEq)(t.subarray(0, u.length), u)
            }
        },
        10961: function(t, e, i) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.logger = function(t) {
                const e = (t.toUpperCase() + ":").padStart(16),
                    [i, n] = function(t) {
                        const e = (f.hasProcess ? process : {}).env || {},
                            i = parseInt(e.DEBUG_MAX || "-1", 10);
                        return [M((e.DEBUG || "").toLowerCase().split(","), t), isNaN(i) ? -1 : i]
                    }(t.toLowerCase());
                return {
                    debug: i ? (...t) => m("debug", e, t, n) : p,
                    error: (...t) => m("error", e, t),
                    log: (...t) => m("log", e, t),
                    noop: p,
                    warn: (...t) => m("warn", e, t)
                }
            }, e.loggerFormat = d;
            var n = i(7775),
                r = i(6806),
                o = i(6810),
                u = i(5972),
                s = i(6808),
                h = i(6311),
                a = i(6312),
                l = i(5815),
                f = i(6811);
            const c = {
                debug: "log",
                error: "error",
                log: "log",
                warn: "warn"
            };

            function d(t) {
                return Array.isArray(t) ? t.map(d) : (0, r.isBn)(t) ? t.toString() : (0, h.isU8a)(t) || (0, o.isBuffer)(t) ? (0, a.u8aToHex)((0, l.u8aToU8a)(t)) : function(t) {
                    if (t && (0, s.isObject)(t) && t.constructor === Object) {
                        const e = {};
                        for (const i of Object.keys(t)) e[i] = d(t[i]);
                        return e
                    }
                    return t
                }(t)
            }

            function m(t, e, i, r = -1) {
                if (1 === i.length && (0, u.isFunction)(i[0])) {
                    const n = i[0]();
                    return m(t, e, Array.isArray(n) ? n : [n], r)
                }
                var o;
                console[c[t]]((0, n.formatDate)(new Date), e, ...i.map(d).map((o = r, t => {
                    if (o <= 0) return t;
                    const e = "" + t;
                    return e.length < o ? t : e.substr(0, o) + " ..."
                })))
            }

            function p() {}

            function g(t, e) {
                return !!t && ("*" === t || e === t || t.endsWith("*") && e.startsWith(t.slice(0, -1)))
            }

            function v(t, e) {
                return !!t && t.startsWith("-") && (e === t.slice(1) || t.endsWith("*") && e.startsWith(t.slice(1, -1)))
            }

            function M(t, e) {
                let i = !1;
                for (const n of t) g(n, e) ? i = !0 : v(n, e) && (i = !1);
                return i
            }
        },
        10962: function(t, e, i) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.memoize = function(t, {
                getInstanceId: e = o
            } = {}) {
                const i = {},
                    u = (...o) => {
                        const u = (0, r.stringify)(o),
                            s = e();
                        return i[s] || (i[s] = {}), (0, n.isUndefined)(i[s][u]) && (i[s][u] = t(...o)), i[s][u]
                    };
                return u.unmemoize = (...t) => {
                    const o = (0, r.stringify)(t),
                        u = e();
                    i[u] && !(0, n.isUndefined)(i[u][o]) && delete i[u][o]
                }, u
            };
            var n = i(5762),
                r = i(6819);

            function o() {
                return "none"
            }
        },
        10963: function(t, e, i) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), Object.defineProperty(e, "numberToHex", {
                enumerable: !0,
                get: function() {
                    return n.numberToHex
                }
            }), Object.defineProperty(e, "numberToU8a", {
                enumerable: !0,
                get: function() {
                    return r.numberToU8a
                }
            });
            var n = i(7779),
                r = i(10964)
        },
        10964: function(t, e, i) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.numberToU8a = function(t, e = -1) {
                return (0, o.isUndefined)(t) || (0, r.isNull)(t) || isNaN(t) ? new Uint8Array : (0, n.hexToU8a)((0, u.numberToHex)(t, e))
            };
            var n = i(6123),
                r = i(6122),
                o = i(5762),
                u = i(7779)
        },
        10965: function(t, e, i) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), Object.defineProperty(e, "objectClear", {
                enumerable: !0,
                get: function() {
                    return n.objectClear
                }
            }), Object.defineProperty(e, "objectCopy", {
                enumerable: !0,
                get: function() {
                    return r.objectCopy
                }
            }), Object.defineProperty(e, "objectEntries", {
                enumerable: !0,
                get: function() {
                    return o.objectEntries
                }
            }), Object.defineProperty(e, "objectKeys", {
                enumerable: !0,
                get: function() {
                    return u.objectKeys
                }
            }), Object.defineProperty(e, "objectProperties", {
                enumerable: !0,
                get: function() {
                    return s.objectProperties
                }
            }), Object.defineProperty(e, "objectProperty", {
                enumerable: !0,
                get: function() {
                    return s.objectProperty
                }
            }), Object.defineProperty(e, "objectSpread", {
                enumerable: !0,
                get: function() {
                    return h.objectSpread
                }
            }), Object.defineProperty(e, "objectValues", {
                enumerable: !0,
                get: function() {
                    return a.objectValues
                }
            });
            var n = i(10966),
                r = i(10967),
                o = i(10968),
                u = i(7763),
                s = i(10969),
                h = i(5717),
                a = i(10970)
        },
        10966: function(t, e, i) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.objectClear = function(t) {
                const e = Object.keys(t);
                for (let i = 0; i < e.length; i++) delete t[e[i]];
                return t
            }
        },
        10967: function(t, e, i) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.objectCopy = function(t) {
                return (0, n.objectSpread)({}, t)
            };
            var n = i(5717)
        },
        10968: function(t, e, i) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.objectEntries = function(t) {
                return Object.entries(t)
            }
        },
        10969: function(t, e, i) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.objectProperties = function(t, e, i) {
                for (let n = 0; n < e.length; n++) r(t, e[n], t => i(t, n))
            }, e.objectProperty = r;
            var n = i(5762);

            function r(t, e, i) {
                !Object.prototype.hasOwnProperty.call(t, e) && (0, n.isUndefined)(t[e]) && Object.defineProperty(t, e, {
                    enumerable: !0,
                    get: () => i(e)
                })
            }
        },
        10970: function(t, e, i) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.objectValues = function(t) {
                return Object.values(t)
            }
        },
        10971: function(t, e, i) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.promisify = function(t, e, ...i) {
                return new Promise((n, r) => {
                    e.apply(t, i.concat((t, e) => {
                        t ? r(t) : n(e)
                    }))
                })
            }
        },
        10972: function(t, e, i) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), Object.defineProperty(e, "stringCamelCase", {
                enumerable: !0,
                get: function() {
                    return n.stringCamelCase
                }
            }), Object.defineProperty(e, "stringLowerFirst", {
                enumerable: !0,
                get: function() {
                    return r.stringLowerFirst
                }
            }), Object.defineProperty(e, "stringPascalCase", {
                enumerable: !0,
                get: function() {
                    return n.stringPascalCase
                }
            }), Object.defineProperty(e, "stringShorten", {
                enumerable: !0,
                get: function() {
                    return o.stringShorten
                }
            }), Object.defineProperty(e, "stringToHex", {
                enumerable: !0,
                get: function() {
                    return u.stringToHex
                }
            }), Object.defineProperty(e, "stringToU8a", {
                enumerable: !0,
                get: function() {
                    return s.stringToU8a
                }
            }), Object.defineProperty(e, "stringUpperFirst", {
                enumerable: !0,
                get: function() {
                    return r.stringUpperFirst
                }
            });
            var n = i(10973),
                r = i(10974),
                o = i(10975),
                u = i(10976),
                s = i(6812)
        },
        10973: function(t, e, i) {
            "use strict";

            function n(t) {
                return e => e.toString().replace(/[-_., ]+/g, " ").trim().split(" ").map((e, i) => ((e, i) => t(e[0], i) + e.slice(1))(e.toUpperCase() === e ? e.toLowerCase() : e.replace(/^[A-Z0-9]{2,}[^a-z]/, t => t.slice(0, t.length - 1).toLowerCase() + t.slice(-1).toUpperCase()), i)).join("")
            }
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.stringPascalCase = e.stringCamelCase = void 0;
            const r = n((t, e) => e ? t.toUpperCase() : t.toLowerCase());
            e.stringCamelCase = r;
            const o = n(t => t.toUpperCase());
            e.stringPascalCase = o
        },
        10974: function(t, e, i) {
            "use strict";

            function n(t) {
                return e => e ? t(e[0]) + e.slice(1) : ""
            }
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.stringUpperFirst = e.stringLowerFirst = void 0;
            const r = n(t => t.toLowerCase());
            e.stringLowerFirst = r;
            const o = n(t => t.toUpperCase());
            e.stringUpperFirst = o
        },
        10975: function(t, e, i) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.stringShorten = function(t, e = 6) {
                return t.length <= 2 + 2 * e ? t.toString() : `${t.substr(0,e)}…${t.slice(-e)}`
            }
        },
        10976: function(t, e, i) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.stringToHex = function(t) {
                return (0, n.u8aToHex)((0, r.stringToU8a)(t))
            };
            var n = i(6312),
                r = i(6812)
        },
        5620: function(t, e, i) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.BigInt = void 0, Object.defineProperty(e, "packageInfo", {
                enumerable: !0,
                get: function() {
                    return r.packageInfo
                }
            });
            var n = i(5682),
                r = i(10917);
            const o = "function" == typeof n.xglobal.BigInt && "function" == typeof n.xglobal.BigInt.asIntN ? n.xglobal.BigInt : () => Number.NaN;
            e.BigInt = o
        },
        5682: function(t, e, i) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.exposeGlobal = function(t, e) {
                void 0 === r[t] && (r[t] = e)
            }, e.extractGlobal = function(t, e) {
                return void 0 === r[t] ? e : r[t]
            }, Object.defineProperty(e, "packageInfo", {
                enumerable: !0,
                get: function() {
                    return n.packageInfo
                }
            }), e.xglobal = void 0;
            var n = i(10903);
            const r = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : Function("return this");
            e.xglobal = r
        },
        5717: function(t, e, i) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.objectSpread = function(t, ...e) {
                for (let i = 0; i < e.length; i++) {
                    const r = e[i];
                    if (r) {
                        const e = (0, n.objectKeys)(r);
                        for (let i = 0; i < e.length; i++) {
                            const n = e[i];
                            t[n] = r[n]
                        }
                    }
                }
                return t
            };
            var n = i(7763)
        },
        5815: function(t, e, i) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.u8aToU8a = function(t) {
                return t ? Array.isArray(t) || (0, r.isBuffer)(t) ? new Uint8Array(t) : (0, u.isU8a)(t) ? t : (0, o.isHex)(t) ? (0, n.hexToU8a)(t) : (0, s.stringToU8a)(t) : new Uint8Array
            };
            var n = i(6123),
                r = i(6810),
                o = i(5891),
                u = i(6311),
                s = i(6812)
        },
        5971: function(t, e, i) {
            function n(t) {
                const e = i.p;
                let n = "";
                return (!e || e.indexOf("://") < 0) && (n += window.location.protocol + "//" + window.location.host), n += e || "/", n + t
            }
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.packageInfo = void 0;
            const r = {
                name: "@polkadot/util",
                path: (n("node_modules/@polkadot/util/packageInfo.js"), n("node_modules/@polkadot/util/packageInfo.js") ? new URL(n("node_modules/@polkadot/util/packageInfo.js")).pathname.substring(0, new URL(n("node_modules/@polkadot/util/packageInfo.js")).pathname.lastIndexOf("/") + 1) : "auto"),
                type: "esm",
                version: "8.7.1"
            };
            e.packageInfo = r
        },
        5974: function(t, e, i) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), Object.defineProperty(e, "U8A_WRAP_ETHEREUM", {
                enumerable: !0,
                get: function() {
                    return p.U8A_WRAP_ETHEREUM
                }
            }), Object.defineProperty(e, "U8A_WRAP_POSTFIX", {
                enumerable: !0,
                get: function() {
                    return p.U8A_WRAP_POSTFIX
                }
            }), Object.defineProperty(e, "U8A_WRAP_PREFIX", {
                enumerable: !0,
                get: function() {
                    return p.U8A_WRAP_PREFIX
                }
            }), Object.defineProperty(e, "u8aCmp", {
                enumerable: !0,
                get: function() {
                    return n.u8aCmp
                }
            }), Object.defineProperty(e, "u8aConcat", {
                enumerable: !0,
                get: function() {
                    return r.u8aConcat
                }
            }), Object.defineProperty(e, "u8aEmpty", {
                enumerable: !0,
                get: function() {
                    return o.u8aEmpty
                }
            }), Object.defineProperty(e, "u8aEq", {
                enumerable: !0,
                get: function() {
                    return u.u8aEq
                }
            }), Object.defineProperty(e, "u8aFixLength", {
                enumerable: !0,
                get: function() {
                    return s.u8aFixLength
                }
            }), Object.defineProperty(e, "u8aIsWrapped", {
                enumerable: !0,
                get: function() {
                    return p.u8aIsWrapped
                }
            }), Object.defineProperty(e, "u8aSorted", {
                enumerable: !0,
                get: function() {
                    return h.u8aSorted
                }
            }), Object.defineProperty(e, "u8aToBigInt", {
                enumerable: !0,
                get: function() {
                    return a.u8aToBigInt
                }
            }), Object.defineProperty(e, "u8aToBn", {
                enumerable: !0,
                get: function() {
                    return l.u8aToBn
                }
            }), Object.defineProperty(e, "u8aToBuffer", {
                enumerable: !0,
                get: function() {
                    return f.u8aToBuffer
                }
            }), Object.defineProperty(e, "u8aToHex", {
                enumerable: !0,
                get: function() {
                    return c.u8aToHex
                }
            }), Object.defineProperty(e, "u8aToString", {
                enumerable: !0,
                get: function() {
                    return d.u8aToString
                }
            }), Object.defineProperty(e, "u8aToU8a", {
                enumerable: !0,
                get: function() {
                    return m.u8aToU8a
                }
            }), Object.defineProperty(e, "u8aUnwrapBytes", {
                enumerable: !0,
                get: function() {
                    return p.u8aUnwrapBytes
                }
            }), Object.defineProperty(e, "u8aWrapBytes", {
                enumerable: !0,
                get: function() {
                    return p.u8aWrapBytes
                }
            });
            var n = i(7766),
                r = i(7767),
                o = i(10922),
                u = i(6813),
                s = i(10923),
                h = i(10924),
                a = i(7764),
                l = i(10925),
                f = i(10926),
                c = i(6312),
                d = i(7768),
                m = i(5815),
                p = i(10927)
        },
        6312: function(t, e, i) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.u8aToHex = function(t, e = -1, i = !0) {
                const n = Math.ceil(e / 8);
                return `${i?"0x":""}${t&&t.length?n>0&&t.length>n?`${r(t.subarray(0,n/2))}…${r(t.subarray(t.length-n/2))}`:r(t):""}`
            };
            var n = i(7765);

            function r(t) {
                const e = t.length % 2,
                    i = t.length - e,
                    r = new DataView(t.buffer, t.byteOffset);
                let o = "";
                for (let t = 0; t < i; t += 2) o += n.U16_TO_HEX[r.getUint16(t)];
                return e && (o += n.U8_TO_HEX[r.getUint8(i)]), o
            }
        },
        6812: function(t, e, i) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.stringToU8a = function(t) {
                return t ? n.encode(t.toString()) : new Uint8Array
            };
            const n = new(i(7760).TextEncoder)
        },
        6813: function(t, e, i) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.u8aEq = function(t, e) {
                const i = (0, n.u8aToU8a)(t),
                    r = (0, n.u8aToU8a)(e);
                if (i.length === r.length) {
                    const t = new DataView(i.buffer, i.byteOffset),
                        e = new DataView(r.buffer, r.byteOffset),
                        n = i.length % 4,
                        o = i.length - n;
                    for (let i = 0; i < o; i += 4)
                        if (t.getUint32(i) !== e.getUint32(i)) return !1;
                    for (let t = o; t < i.length; t++)
                        if (i[t] !== r[t]) return !1;
                    return !0
                }
                return !1
            };
            var n = i(5815)
        },
        6819: function(t, e, i) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.stringify = function(t, e) {
                return JSON.stringify(t, r, e)
            };
            var n = i(6816);

            function r(t, e) {
                return (0, n.isBigInt)(e) ? e.toString() : e
            }
        },
        6821: function(t, e, i) {
            "use strict";
            var n = i(5620);
            (0, i(5682).exposeGlobal)("BigInt", n.BigInt)
        },
        7759: function(t, e, i) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.TextDecoder = void 0, Object.defineProperty(e, "packageInfo", {
                enumerable: !0,
                get: function() {
                    return o.packageInfo
                }
            });
            var n = i(5682),
                r = i(10904),
                o = i(10905);
            const u = (0, n.extractGlobal)("TextDecoder", r.TextDecoder);
            e.TextDecoder = u
        },
        7760: function(t, e, i) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.TextEncoder = void 0, Object.defineProperty(e, "packageInfo", {
                enumerable: !0,
                get: function() {
                    return o.packageInfo
                }
            });
            var n = i(5682),
                r = i(10906),
                o = i(10907);
            const u = (0, n.extractGlobal)("TextEncoder", r.TextEncoder);
            e.TextEncoder = u
        },
        7761: function(t, e, i) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.detectPackage = function({
                name: t,
                path: e,
                type: i,
                version: r
            }, l, f = []) {
                (0, u.assert)(t.startsWith("@polkadot"), () => "Invalid package descriptor " + t);
                const c = function(t) {
                    const e = n.xglobal;
                    e.__polkadotjs || (e.__polkadotjs = {});
                    e.__polkadotjs[t] || (e.__polkadotjs[t] = []);
                    return e.__polkadotjs[t]
                }(t);
                if (c.push({
                        path: a(e, l),
                        type: i,
                        version: r
                    }), 1 !== c.length) console.warn(`${t} has multiple versions, ensure that there is only one installed.\n${s}\n${function(t){const e=t.map(t=>(0,o.isString)(t)?{version:t}:t),i=h(e);return e.map(({path:t,type:e,version:n})=>`\
                    t$ {
                        ("" + (e || "")).padStart(3)
                    }
                    $ {
                        n.padEnd(i)
                    }\
                    t$ {
                        !t || t.length < 5 ? "<unknown>" : t
                    }
                    `).join("\n")}(c)}`);
                else {
                    const e = f.filter(t => t && t.version !== r);
                    e.length && console.warn(`${t} requires direct dependencies exactly matching version ${r}.\n${s}\n${function(t){const e=h(t);return t.map(({name:t,version:i})=>`\
                        t$ {
                            i.padEnd(e)
                        }\
                        t$ {
                            t
                        }
                        `).join("\n")}(e)}`)
                }
            };
            var n = i(5682),
                r = i(5972),
                o = i(6308),
                u = i(5814);
            const s = "Either remove and explicitly install matching versions or dedupe using your package manager.\nThe following conflicting packages were found:";

            function h(t) {
                let e = 0;
                for (const {
                        version: i
                    }
                    of t) e = Math.max(e, i.length);
                return e
            }

            function a(t, e) {
                if (t) return t;
                if ((0, r.isFunction)(e)) try {
                    return e() || ""
                } catch (t) {
                    return ""
                }
                return e || ""
            }
        },
        7763: function(t, e, i) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.objectKeys = function(t) {
                return Object.keys(t)
            }
        },
        7764: function(t, e, i) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.u8aToBigInt = function(t, e = {}) {
                if (!t || !t.length) return (0, n.BigInt)(0);
                const {
                    isLe: i,
                    isNegative: u
                } = (0, o.objectSpread)({
                    isLe: !0,
                    isNegative: !1
                }, e), s = i ? t.reverse() : t;
                return u ? h(function(t) {
                    const e = new Uint8Array(t.length),
                        i = new DataView(t.buffer, t.byteOffset),
                        n = new DataView(e.buffer),
                        r = t.length % 2,
                        o = t.length - r;
                    for (let t = 0; t < o; t += 2) n.setUint16(t, 65535 ^ i.getUint16(t));
                    r && n.setUint8(o, 255 ^ i.getUint8(o));
                    return e
                }(s)) * -r._1n - r._1n : h(s)
            };
            var n = i(5620),
                r = i(6309),
                o = i(5717);
            const u = (0, n.BigInt)(256),
                s = (0, n.BigInt)(65536);

            function h(t) {
                const e = new DataView(t.buffer, t.byteOffset),
                    i = t.length % 2,
                    r = t.length - i;
                let o = (0, n.BigInt)(0);
                for (let t = 0; t < r; t += 2) o = o * s + (0, n.BigInt)(e.getUint16(t));
                return i && (o = o * u + (0, n.BigInt)(e.getUint8(r))), o
            }
        },
        7766: function(t, e, i) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.u8aCmp = function(t, e) {
                const i = (0, n.u8aToU8a)(t),
                    r = (0, n.u8aToU8a)(e);
                let o = 0;
                for (;;) {
                    const t = o >= i.length,
                        e = o >= r.length;
                    if (t && e) return 0;
                    if (t) return -1;
                    if (e) return 1;
                    if (i[o] !== r[o]) return i[o] > r[o] ? 1 : -1;
                    o++
                }
            };
            var n = i(5815)
        },
        7767: function(t, e, i) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.u8aConcat = function(...t) {
                let e = 0,
                    i = 0;
                const r = new Array(t.length);
                for (let i = 0; i < t.length; i++) r[i] = (0, n.u8aToU8a)(t[i]), e += r[i].length;
                const o = new Uint8Array(e);
                for (let t = 0; t < r.length; t++) o.set(r[t], i), i += r[t].length;
                return o
            };
            var n = i(5815)
        },
        7768: function(t, e, i) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.u8aToString = function(t) {
                return null != t && t.length ? n.decode(t) : ""
            };
            const n = new(i(7759).TextDecoder)("utf-8")
        },
        7779: function(t, e, i) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.numberToHex = function(t, e = -1) {
                if ((0, o.isUndefined)(t) || (0, r.isNull)(t) || isNaN(t)) return "0x";
                const i = t.toString(16);
                return (0, n.hexFixLength)(i.length % 2 ? "0" + i : i, e, !0)
            };
            var n = i(7778),
                r = i(6122),
                o = i(5762)
        }
    }
]);