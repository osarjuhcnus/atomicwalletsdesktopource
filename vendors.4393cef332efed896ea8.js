(window.webpackJsonp = window.webpackJsonp || []).push([
    [276], {
        5505: function(e, t, r) {
            "use strict";
            var f = r(5669),
                d = r(5489);
            e.exports = {
                checkState: function(e, t) {
                    if (!e) throw new f.InvalidState(t)
                },
                checkArgument: function(e, t, r, d) {
                    if (!e) throw new f.InvalidArgument(t, r, d)
                },
                checkArgumentType: function(e, t, i) {
                    if (i = i || "(unknown name)", d.isString(t)) {
                        if ("Buffer" === t) {
                            if (!r(5516).isBuffer(e)) throw new f.InvalidArgumentType(e, t, i)
                        } else if (typeof e !== t) throw new f.InvalidArgumentType(e, t, i)
                    } else if (!(e instanceof t)) throw new f.InvalidArgumentType(e, t.name, i)
                }
            }
        },
        5516: function(e, t, r) {
            "use strict";
            var f = r(12),
                d = r(72),
                i = r(5583),
                n = r(5505);

            function c(e, t) {
                if (e.length !== t.length) return !1;
                for (var r = e.length, f = 0; f < r; f++)
                    if (e[f] !== t[f]) return !1;
                return !0
            }
            e.exports = {
                fill: function(e, t) {
                    n.checkArgumentType(e, "Buffer", "buffer"), n.checkArgumentType(t, "number", "value");
                    for (var r = e.length, f = 0; f < r; f++) e[f] = t;
                    return e
                },
                copy: function(e) {
                    var t = new Buffer(e.length);
                    return e.copy(t), t
                },
                isBuffer: function(e) {
                    return f.Buffer.isBuffer(e) || e instanceof Uint8Array
                },
                emptyBuffer: function(e) {
                    n.checkArgumentType(e, "number", "bytes");
                    for (var t = new f.Buffer(e), r = 0; r < e; r++) t.write("\0", r);
                    return t
                },
                concat: f.Buffer.concat,
                equals: c,
                equal: c,
                integerAsSingleByteBuffer: function(e) {
                    return n.checkArgumentType(e, "number", "integer"), new f.Buffer([255 & e])
                },
                integerAsBuffer: function(e) {
                    n.checkArgumentType(e, "number", "integer");
                    var t = [];
                    return t.push(e >> 24 & 255), t.push(e >> 16 & 255), t.push(e >> 8 & 255), t.push(255 & e), new Buffer(t)
                },
                integerFromBuffer: function(e) {
                    return n.checkArgumentType(e, "Buffer", "buffer"), e[0] << 24 | e[1] << 16 | e[2] << 8 | e[3]
                },
                integerFromSingleByteBuffer: function(e) {
                    return n.checkArgumentType(e, "Buffer", "buffer"), e[0]
                },
                bufferToHex: function(e) {
                    return n.checkArgumentType(e, "Buffer", "buffer"), e.toString("hex")
                },
                reverse: function(e) {
                    for (var t = new f.Buffer(e.length), r = 0; r < e.length; r++) t[r] = e[e.length - r - 1];
                    return t
                },
                hexToBuffer: function(e) {
                    return d(i.isHexa(e)), new f.Buffer(e, "hex")
                }
            }, e.exports.NULL_HASH = e.exports.fill(new Buffer(32), 0), e.exports.EMPTY_BUFFER = new Buffer(0)
        },
        5583: function(e, t, r) {
            "use strict";
            var f = r(5489),
                d = function(e) {
                    return !!f.isString(e) && /^[0-9a-fA-F]+$/.test(e)
                };
            e.exports = {
                isValidJSON: function(e) {
                    var t;
                    if (!f.isString(e)) return !1;
                    try {
                        t = JSON.parse(e)
                    } catch (e) {
                        return !1
                    }
                    return "object" == typeof t
                },
                isHexa: d,
                isHexaString: d,
                cloneArray: function(e) {
                    return [].concat(e)
                },
                defineImmutable: function(e, t) {
                    return Object.keys(t).forEach((function(r) {
                        Object.defineProperty(e, r, {
                            configurable: !1,
                            enumerable: !0,
                            value: t[r]
                        })
                    })), e
                },
                isNaturalNumber: function(e) {
                    return "number" == typeof e && isFinite(e) && Math.floor(e) === e && e >= 0
                }
            }
        },
        5697: function(e, t, r) {
            "use strict";
            var f = t;
            f.version = r(9586).version, f.utils = r(9587), f.rand = r(932), f.hmacDRBG = r(9588), f.curve = r(6208), f.curves = r(9593), f.ec = r(9595)
        },
        5745: function(e, t, r) {
            (function(e) {
                ! function(e, t) {
                    "use strict";

                    function r(e, t) {
                        if (!e) throw new Error(t || "Assertion failed")
                    }

                    function f(e, t) {
                        e.super_ = t;
                        var r = function() {};
                        r.prototype = t.prototype, e.prototype = new r, e.prototype.constructor = e
                    }

                    function d(e, t, r) {
                        if (null !== e && "object" == typeof e && Array.isArray(e.words)) return e;
                        this.sign = !1, this.words = null, this.length = 0, this.red = null, "le" !== t && "be" !== t || (r = t, t = 10), null !== e && this._init(e || 0, t || 10, r || "be")
                    }

                    function i(e, t, r) {
                        for (var f = 0, d = Math.min(e.length, r), i = t; i < d; i++) {
                            var n = e.charCodeAt(i) - 48;
                            f <<= 4, f |= n >= 49 && n <= 54 ? n - 49 + 10 : n >= 17 && n <= 22 ? n - 17 + 10 : 15 & n
                        }
                        return f
                    }

                    function n(e, t, r, f) {
                        for (var d = 0, i = Math.min(e.length, r), n = t; n < i; n++) {
                            var c = e.charCodeAt(n) - 48;
                            d *= f, d += c >= 49 ? c - 49 + 10 : c >= 17 ? c - 17 + 10 : c
                        }
                        return d
                    }
                    "object" == typeof e ? e.exports = d : t.BN = d, d.BN = d, d.wordSize = 26, d.prototype._init = function(e, t, f) {
                        if ("number" == typeof e) return e < 0 && (this.sign = !0, e = -e), void(e < 67108864 ? (this.words = [67108863 & e], this.length = 1) : e < 4503599627370496 ? (this.words = [67108863 & e, e / 67108864 & 67108863], this.length = 2) : (r(e < 9007199254740992), this.words = [67108863 & e, e / 67108864 & 67108863, 1], this.length = 3));
                        if ("object" == typeof e) return this._initArray(e, t, f);
                        "hex" === t && (t = 16), r(t === (0 | t) && t >= 2 && t <= 36);
                        var d = 0;
                        "-" === (e = e.toString().replace(/\s+/g, ""))[0] && d++, 16 === t ? this._parseHex(e, d) : this._parseBase(e, t, d), "-" === e[0] && (this.sign = !0), this.strip()
                    }, d.prototype._initArray = function(e, t, f) {
                        if (r("number" == typeof e.length), e.length <= 0) return this.words = [0], this.length = 1, this;
                        this.length = Math.ceil(e.length / 3), this.words = new Array(this.length);
                        for (var d = 0; d < this.length; d++) this.words[d] = 0;
                        var i = 0;
                        if ("be" === f) {
                            d = e.length - 1;
                            for (var n = 0; d >= 0; d -= 3) {
                                var c = e[d] | e[d - 1] << 8 | e[d - 2] << 16;
                                this.words[n] |= c << i & 67108863, this.words[n + 1] = c >>> 26 - i & 67108863, (i += 24) >= 26 && (i -= 26, n++)
                            }
                        } else if ("le" === f)
                            for (d = 0, n = 0; d < e.length; d += 3) {
                                c = e[d] | e[d + 1] << 8 | e[d + 2] << 16;
                                this.words[n] |= c << i & 67108863, this.words[n + 1] = c >>> 26 - i & 67108863, (i += 24) >= 26 && (i -= 26, n++)
                            }
                        return this.strip()
                    }, d.prototype._parseHex = function(e, t) {
                        this.length = Math.ceil((e.length - t) / 6), this.words = new Array(this.length);
                        for (var r = 0; r < this.length; r++) this.words[r] = 0;
                        for (var f = 0, d = (r = e.length - 6, 0); r >= t; r -= 6) {
                            var n = i(e, r, r + 6);
                            this.words[d] |= n << f & 67108863, this.words[d + 1] |= n >>> 26 - f & 4194303, (f += 24) >= 26 && (f -= 26, d++)
                        }
                        if (r + 6 !== t) {
                            n = i(e, t, r + 6);
                            this.words[d] |= n << f & 67108863, this.words[d + 1] |= n >>> 26 - f & 4194303
                        }
                        this.strip()
                    }, d.prototype._parseBase = function(e, t, r) {
                        this.words = [0], this.length = 1;
                        for (var f = 0, d = 1; d <= 67108863; d *= t) f++;
                        f--, d = d / t | 0;
                        for (var i = e.length - r, c = i % f, a = Math.min(i, i - c) + r, s = 0, o = r; o < a; o += f) s = n(e, o, o + f, t), this.imuln(d), this.words[0] + s < 67108864 ? this.words[0] += s : this._iaddn(s);
                        if (0 !== c) {
                            var b = 1;
                            for (s = n(e, o, e.length, t), o = 0; o < c; o++) b *= t;
                            this.imuln(b), this.words[0] + s < 67108864 ? this.words[0] += s : this._iaddn(s)
                        }
                    }, d.prototype.copy = function(e) {
                        e.words = new Array(this.length);
                        for (var t = 0; t < this.length; t++) e.words[t] = this.words[t];
                        e.length = this.length, e.sign = this.sign, e.red = this.red
                    }, d.prototype.clone = function() {
                        var e = new d(null);
                        return this.copy(e), e
                    }, d.prototype.strip = function() {
                        for (; this.length > 1 && 0 === this.words[this.length - 1];) this.length--;
                        return this._normSign()
                    }, d.prototype._normSign = function() {
                        return 1 === this.length && 0 === this.words[0] && (this.sign = !1), this
                    }, d.prototype.inspect = function() {
                        return (this.red ? "<BN-R: " : "<BN: ") + this.toString(16) + ">"
                    };
                    var c = ["", "0", "00", "000", "0000", "00000", "000000", "0000000", "00000000", "000000000", "0000000000", "00000000000", "000000000000", "0000000000000", "00000000000000", "000000000000000", "0000000000000000", "00000000000000000", "000000000000000000", "0000000000000000000", "00000000000000000000", "000000000000000000000", "0000000000000000000000", "00000000000000000000000", "000000000000000000000000", "0000000000000000000000000"],
                        a = [0, 0, 25, 16, 12, 11, 10, 9, 8, 8, 7, 7, 7, 7, 6, 6, 6, 6, 6, 6, 6, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5],
                        s = [0, 0, 33554432, 43046721, 16777216, 48828125, 60466176, 40353607, 16777216, 43046721, 1e7, 19487171, 35831808, 62748517, 7529536, 11390625, 16777216, 24137569, 34012224, 47045881, 64e6, 4084101, 5153632, 6436343, 7962624, 9765625, 11881376, 14348907, 17210368, 20511149, 243e5, 28629151, 33554432, 39135393, 45435424, 52521875, 60466176];
                    d.prototype.toString = function(e, t) {
                        if (16 === (e = e || 10) || "hex" === e) {
                            for (var f = "", d = 0, i = (t = 0 | t || 1, 0), n = 0; n < this.length; n++) {
                                var o = this.words[n],
                                    b = (16777215 & (o << d | i)).toString(16);
                                f = 0 !== (i = o >>> 24 - d & 16777215) || n !== this.length - 1 ? c[6 - b.length] + b + f : b + f, (d += 2) >= 26 && (d -= 26, n--)
                            }
                            for (0 !== i && (f = i.toString(16) + f); f.length % t != 0;) f = "0" + f;
                            return this.sign && (f = "-" + f), f
                        }
                        if (e === (0 | e) && e >= 2 && e <= 36) {
                            var h = a[e],
                                u = s[e],
                                p = (f = "", this.clone());
                            for (p.sign = !1; 0 !== p.cmpn(0);) {
                                var l = p.modn(u).toString(e);
                                f = 0 !== (p = p.idivn(u)).cmpn(0) ? c[h - l.length] + l + f : l + f
                            }
                            return 0 === this.cmpn(0) && (f = "0" + f), this.sign && (f = "-" + f), f
                        }
                        r(!1, "Base should be between 2 and 36")
                    }, d.prototype.toJSON = function() {
                        return this.toString(16)
                    }, d.prototype.toArray = function() {
                        this.strip();
                        var e = new Array(this.byteLength());
                        e[0] = 0;
                        for (var t = this.clone(), r = 0; 0 !== t.cmpn(0); r++) {
                            var f = t.andln(255);
                            t.ishrn(8), e[e.length - r - 1] = f
                        }
                        return e
                    }, Math.clz32 ? d.prototype._countBits = function(e) {
                        return 32 - Math.clz32(e)
                    } : d.prototype._countBits = function(e) {
                        var t = e,
                            r = 0;
                        return t >= 4096 && (r += 13, t >>>= 13), t >= 64 && (r += 7, t >>>= 7), t >= 8 && (r += 4, t >>>= 4), t >= 2 && (r += 2, t >>>= 2), r + t
                    }, d.prototype._zeroBits = function(e) {
                        if (0 === e) return 26;
                        var t = e,
                            r = 0;
                        return 0 == (8191 & t) && (r += 13, t >>>= 13), 0 == (127 & t) && (r += 7, t >>>= 7), 0 == (15 & t) && (r += 4, t >>>= 4), 0 == (3 & t) && (r += 2, t >>>= 2), 0 == (1 & t) && r++, r
                    }, d.prototype.bitLength = function() {
                        var e = this.words[this.length - 1],
                            t = this._countBits(e);
                        return 26 * (this.length - 1) + t
                    }, d.prototype.zeroBits = function() {
                        if (0 === this.cmpn(0)) return 0;
                        for (var e = 0, t = 0; t < this.length; t++) {
                            var r = this._zeroBits(this.words[t]);
                            if (e += r, 26 !== r) break
                        }
                        return e
                    }, d.prototype.byteLength = function() {
                        return Math.ceil(this.bitLength() / 8)
                    }, d.prototype.neg = function() {
                        if (0 === this.cmpn(0)) return this.clone();
                        var e = this.clone();
                        return e.sign = !this.sign, e
                    }, d.prototype.ior = function(e) {
                        for (this.sign = this.sign || e.sign; this.length < e.length;) this.words[this.length++] = 0;
                        for (var t = 0; t < e.length; t++) this.words[t] = this.words[t] | e.words[t];
                        return this.strip()
                    }, d.prototype.or = function(e) {
                        return this.length > e.length ? this.clone().ior(e) : e.clone().ior(this)
                    }, d.prototype.iand = function(e) {
                        var t;
                        this.sign = this.sign && e.sign, t = this.length > e.length ? e : this;
                        for (var r = 0; r < t.length; r++) this.words[r] = this.words[r] & e.words[r];
                        return this.length = t.length, this.strip()
                    }, d.prototype.and = function(e) {
                        return this.length > e.length ? this.clone().iand(e) : e.clone().iand(this)
                    }, d.prototype.ixor = function(e) {
                        var t, r;
                        this.sign = this.sign || e.sign, this.length > e.length ? (t = this, r = e) : (t = e, r = this);
                        for (var f = 0; f < r.length; f++) this.words[f] = t.words[f] ^ r.words[f];
                        if (this !== t)
                            for (; f < t.length; f++) this.words[f] = t.words[f];
                        return this.length = t.length, this.strip()
                    }, d.prototype.xor = function(e) {
                        return this.length > e.length ? this.clone().ixor(e) : e.clone().ixor(this)
                    }, d.prototype.setn = function(e, t) {
                        r("number" == typeof e && e >= 0);
                        for (var f = e / 26 | 0, d = e % 26; this.length <= f;) this.words[this.length++] = 0;
                        return this.words[f] = t ? this.words[f] | 1 << d : this.words[f] & ~(1 << d), this.strip()
                    }, d.prototype.iadd = function(e) {
                        if (this.sign && !e.sign) {
                            this.sign = !1;
                            var t = this.isub(e);
                            return this.sign = !this.sign, this._normSign()
                        }
                        if (!this.sign && e.sign) {
                            e.sign = !1;
                            t = this.isub(e);
                            return e.sign = !0, t._normSign()
                        }
                        var r, f;
                        this.length > e.length ? (r = this, f = e) : (r = e, f = this);
                        for (var d = 0, i = 0; i < f.length; i++) {
                            t = r.words[i] + f.words[i] + d;
                            this.words[i] = 67108863 & t, d = t >>> 26
                        }
                        for (; 0 !== d && i < r.length; i++) {
                            t = r.words[i] + d;
                            this.words[i] = 67108863 & t, d = t >>> 26
                        }
                        if (this.length = r.length, 0 !== d) this.words[this.length] = d, this.length++;
                        else if (r !== this)
                            for (; i < r.length; i++) this.words[i] = r.words[i];
                        return this
                    }, d.prototype.add = function(e) {
                        if (e.sign && !this.sign) {
                            e.sign = !1;
                            var t = this.sub(e);
                            return e.sign = !0, t
                        }
                        if (!e.sign && this.sign) {
                            this.sign = !1;
                            t = e.sub(this);
                            return this.sign = !0, t
                        }
                        return this.length > e.length ? this.clone().iadd(e) : e.clone().iadd(this)
                    }, d.prototype.isub = function(e) {
                        if (e.sign) {
                            e.sign = !1;
                            var t = this.iadd(e);
                            return e.sign = !0, t._normSign()
                        }
                        if (this.sign) return this.sign = !1, this.iadd(e), this.sign = !0, this._normSign();
                        var r, f, d = this.cmp(e);
                        if (0 === d) return this.sign = !1, this.length = 1, this.words[0] = 0, this;
                        d > 0 ? (r = this, f = e) : (r = e, f = this);
                        for (var i = 0, n = 0; n < f.length; n++) {
                            i = (t = r.words[n] - f.words[n] + i) >> 26, this.words[n] = 67108863 & t
                        }
                        for (; 0 !== i && n < r.length; n++) {
                            i = (t = r.words[n] + i) >> 26, this.words[n] = 67108863 & t
                        }
                        if (0 === i && n < r.length && r !== this)
                            for (; n < r.length; n++) this.words[n] = r.words[n];
                        return this.length = Math.max(this.length, n), r !== this && (this.sign = !0), this.strip()
                    }, d.prototype.sub = function(e) {
                        return this.clone().isub(e)
                    }, d.prototype._smallMulTo = function(e, t) {
                        t.sign = e.sign !== this.sign, t.length = this.length + e.length;
                        for (var r = 0, f = 0; f < t.length - 1; f++) {
                            for (var d = r >>> 26, i = 67108863 & r, n = Math.min(f, e.length - 1), c = Math.max(0, f - this.length + 1); c <= n; c++) {
                                var a = f - c,
                                    s = (0 | this.words[a]) * (0 | e.words[c]),
                                    o = 67108863 & s;
                                i = 67108863 & (o = o + i | 0), d = (d = d + (s / 67108864 | 0) | 0) + (o >>> 26) | 0
                            }
                            t.words[f] = i, r = d
                        }
                        return 0 !== r ? t.words[f] = r : t.length--, t.strip()
                    }, d.prototype._bigMulTo = function(e, t) {
                        t.sign = e.sign !== this.sign, t.length = this.length + e.length;
                        for (var r = 0, f = 0, d = 0; d < t.length - 1; d++) {
                            var i = f;
                            f = 0;
                            for (var n = 67108863 & r, c = Math.min(d, e.length - 1), a = Math.max(0, d - this.length + 1); a <= c; a++) {
                                var s = d - a,
                                    o = (0 | this.words[s]) * (0 | e.words[a]),
                                    b = 67108863 & o;
                                n = 67108863 & (b = b + n | 0), f += (i = (i = i + (o / 67108864 | 0) | 0) + (b >>> 26) | 0) >>> 26, i &= 67108863
                            }
                            t.words[d] = n, r = i, i = f
                        }
                        return 0 !== r ? t.words[d] = r : t.length--, t.strip()
                    }, d.prototype.mulTo = function(e, t) {
                        return this.length + e.length < 63 ? this._smallMulTo(e, t) : this._bigMulTo(e, t)
                    }, d.prototype.mul = function(e) {
                        var t = new d(null);
                        return t.words = new Array(this.length + e.length), this.mulTo(e, t)
                    }, d.prototype.imul = function(e) {
                        if (0 === this.cmpn(0) || 0 === e.cmpn(0)) return this.words[0] = 0, this.length = 1, this;
                        var t = this.length,
                            r = e.length;
                        this.sign = e.sign !== this.sign, this.length = this.length + e.length, this.words[this.length - 1] = 0;
                        for (var f = this.length - 2; f >= 0; f--) {
                            for (var d = 0, i = 0, n = Math.min(f, r - 1), c = Math.max(0, f - t + 1); c <= n; c++) {
                                var a = f - c,
                                    s = this.words[a] * e.words[c],
                                    o = 67108863 & s;
                                d += s / 67108864 | 0, i = 67108863 & (o += i), d += o >>> 26
                            }
                            this.words[f] = i, this.words[f + 1] += d, d = 0
                        }
                        for (d = 0, a = 1; a < this.length; a++) {
                            var b = this.words[a] + d;
                            this.words[a] = 67108863 & b, d = b >>> 26
                        }
                        return this.strip()
                    }, d.prototype.imuln = function(e) {
                        r("number" == typeof e);
                        for (var t = 0, f = 0; f < this.length; f++) {
                            var d = this.words[f] * e,
                                i = (67108863 & d) + (67108863 & t);
                            t >>= 26, t += d / 67108864 | 0, t += i >>> 26, this.words[f] = 67108863 & i
                        }
                        return 0 !== t && (this.words[f] = t, this.length++), this
                    }, d.prototype.sqr = function() {
                        return this.mul(this)
                    }, d.prototype.isqr = function() {
                        return this.mul(this)
                    }, d.prototype.ishln = function(e) {
                        r("number" == typeof e && e >= 0);
                        var t = e % 26,
                            f = (e - t) / 26,
                            d = 67108863 >>> 26 - t << 26 - t;
                        if (0 !== t) {
                            for (var i = 0, n = 0; n < this.length; n++) {
                                var c = this.words[n] & d,
                                    a = this.words[n] - c << t;
                                this.words[n] = a | i, i = c >>> 26 - t
                            }
                            i && (this.words[n] = i, this.length++)
                        }
                        if (0 !== f) {
                            for (n = this.length - 1; n >= 0; n--) this.words[n + f] = this.words[n];
                            for (n = 0; n < f; n++) this.words[n] = 0;
                            this.length += f
                        }
                        return this.strip()
                    }, d.prototype.ishrn = function(e, t, f) {
                        var d;
                        r("number" == typeof e && e >= 0), d = t ? (t - t % 26) / 26 : 0;
                        var i = e % 26,
                            n = Math.min((e - i) / 26, this.length),
                            c = 67108863 ^ 67108863 >>> i << i,
                            a = f;
                        if (d -= n, d = Math.max(0, d), a) {
                            for (var s = 0; s < n; s++) a.words[s] = this.words[s];
                            a.length = n
                        }
                        if (0 === n);
                        else if (this.length > n) {
                            this.length -= n;
                            for (s = 0; s < this.length; s++) this.words[s] = this.words[s + n]
                        } else this.words[0] = 0, this.length = 1;
                        var o = 0;
                        for (s = this.length - 1; s >= 0 && (0 !== o || s >= d); s--) {
                            var b = this.words[s];
                            this.words[s] = o << 26 - i | b >>> i, o = b & c
                        }
                        return a && 0 !== o && (a.words[a.length++] = o), 0 === this.length && (this.words[0] = 0, this.length = 1), this.strip(), this
                    }, d.prototype.shln = function(e) {
                        return this.clone().ishln(e)
                    }, d.prototype.shrn = function(e) {
                        return this.clone().ishrn(e)
                    }, d.prototype.testn = function(e) {
                        r("number" == typeof e && e >= 0);
                        var t = e % 26,
                            f = (e - t) / 26,
                            d = 1 << t;
                        return !(this.length <= f) && !!(this.words[f] & d)
                    }, d.prototype.imaskn = function(e) {
                        r("number" == typeof e && e >= 0);
                        var t = e % 26,
                            f = (e - t) / 26;
                        if (r(!this.sign, "imaskn works only with positive numbers"), 0 !== t && f++, this.length = Math.min(f, this.length), 0 !== t) {
                            var d = 67108863 ^ 67108863 >>> t << t;
                            this.words[this.length - 1] &= d
                        }
                        return this.strip()
                    }, d.prototype.maskn = function(e) {
                        return this.clone().imaskn(e)
                    }, d.prototype.iaddn = function(e) {
                        return r("number" == typeof e), e < 0 ? this.isubn(-e) : this.sign ? 1 === this.length && this.words[0] < e ? (this.words[0] = e - this.words[0], this.sign = !1, this) : (this.sign = !1, this.isubn(e), this.sign = !0, this) : this._iaddn(e)
                    }, d.prototype._iaddn = function(e) {
                        this.words[0] += e;
                        for (var t = 0; t < this.length && this.words[t] >= 67108864; t++) this.words[t] -= 67108864, t === this.length - 1 ? this.words[t + 1] = 1 : this.words[t + 1]++;
                        return this.length = Math.max(this.length, t + 1), this
                    }, d.prototype.isubn = function(e) {
                        if (r("number" == typeof e), e < 0) return this.iaddn(-e);
                        if (this.sign) return this.sign = !1, this.iaddn(e), this.sign = !0, this;
                        this.words[0] -= e;
                        for (var t = 0; t < this.length && this.words[t] < 0; t++) this.words[t] += 67108864, this.words[t + 1] -= 1;
                        return this.strip()
                    }, d.prototype.addn = function(e) {
                        return this.clone().iaddn(e)
                    }, d.prototype.subn = function(e) {
                        return this.clone().isubn(e)
                    }, d.prototype.iabs = function() {
                        return this.sign = !1, this
                    }, d.prototype.abs = function() {
                        return this.clone().iabs()
                    }, d.prototype._ishlnsubmul = function(e, t, f) {
                        var d = e.length + f;
                        if (this.words.length < d) {
                            for (var i = new Array(d), n = 0; n < this.length; n++) i[n] = this.words[n];
                            this.words = i
                        } else n = this.length;
                        for (this.length = Math.max(this.length, d); n < this.length; n++) this.words[n] = 0;
                        var c = 0;
                        for (n = 0; n < e.length; n++) {
                            var a = this.words[n + f] + c,
                                s = e.words[n] * t;
                            c = ((a -= 67108863 & s) >> 26) - (s / 67108864 | 0), this.words[n + f] = 67108863 & a
                        }
                        for (; n < this.length - f; n++) {
                            c = (a = this.words[n + f] + c) >> 26, this.words[n + f] = 67108863 & a
                        }
                        if (0 === c) return this.strip();
                        r(-1 === c), c = 0;
                        for (n = 0; n < this.length; n++) {
                            c = (a = -this.words[n] + c) >> 26, this.words[n] = 67108863 & a
                        }
                        return this.sign = !0, this.strip()
                    }, d.prototype._wordDiv = function(e, t) {
                        var r = (this.length, e.length),
                            f = this.clone(),
                            i = e,
                            n = i.words[i.length - 1];
                        0 !== (r = 26 - this._countBits(n)) && (i = i.shln(r), f.ishln(r), n = i.words[i.length - 1]);
                        var c, a = f.length - i.length;
                        if ("mod" !== t) {
                            (c = new d(null)).length = a + 1, c.words = new Array(c.length);
                            for (var s = 0; s < c.length; s++) c.words[s] = 0
                        }
                        var o = f.clone()._ishlnsubmul(i, 1, a);
                        o.sign || (f = o, c && (c.words[a] = 1));
                        for (var b = a - 1; b >= 0; b--) {
                            var h = 67108864 * f.words[i.length + b] + f.words[i.length + b - 1];
                            for (h = Math.min(h / n | 0, 67108863), f._ishlnsubmul(i, h, b); f.sign;) h--, f.sign = !1, f._ishlnsubmul(i, 1, b), 0 !== f.cmpn(0) && (f.sign = !f.sign);
                            c && (c.words[b] = h)
                        }
                        return c && c.strip(), f.strip(), "div" !== t && 0 !== r && f.ishrn(r), {
                            div: c || null,
                            mod: f
                        }
                    }, d.prototype.divmod = function(e, t) {
                        if (r(0 !== e.cmpn(0)), this.sign && !e.sign) {
                            var f, i = this.neg().divmod(e, t);
                            return "mod" !== t && (n = i.div.neg()), "div" !== t && (f = 0 === i.mod.cmpn(0) ? i.mod : e.sub(i.mod)), {
                                div: n,
                                mod: f
                            }
                        }
                        if (!this.sign && e.sign) {
                            var n;
                            i = this.divmod(e.neg(), t);
                            return "mod" !== t && (n = i.div.neg()), {
                                div: n,
                                mod: i.mod
                            }
                        }
                        return this.sign && e.sign ? this.neg().divmod(e.neg(), t) : e.length > this.length || this.cmp(e) < 0 ? {
                            div: new d(0),
                            mod: this
                        } : 1 === e.length ? "div" === t ? {
                            div: this.divn(e.words[0]),
                            mod: null
                        } : "mod" === t ? {
                            div: null,
                            mod: new d(this.modn(e.words[0]))
                        } : {
                            div: this.divn(e.words[0]),
                            mod: new d(this.modn(e.words[0]))
                        } : this._wordDiv(e, t)
                    }, d.prototype.div = function(e) {
                        return this.divmod(e, "div").div
                    }, d.prototype.mod = function(e) {
                        return this.divmod(e, "mod").mod
                    }, d.prototype.divRound = function(e) {
                        var t = this.divmod(e);
                        if (0 === t.mod.cmpn(0)) return t.div;
                        var r = t.div.sign ? t.mod.isub(e) : t.mod,
                            f = e.shrn(1),
                            d = e.andln(1),
                            i = r.cmp(f);
                        return i < 0 || 1 === d && 0 === i ? t.div : t.div.sign ? t.div.isubn(1) : t.div.iaddn(1)
                    }, d.prototype.modn = function(e) {
                        r(e <= 67108863);
                        for (var t = (1 << 26) % e, f = 0, d = this.length - 1; d >= 0; d--) f = (t * f + this.words[d]) % e;
                        return f
                    }, d.prototype.idivn = function(e) {
                        r(e <= 67108863);
                        for (var t = 0, f = this.length - 1; f >= 0; f--) {
                            var d = this.words[f] + 67108864 * t;
                            this.words[f] = d / e | 0, t = d % e
                        }
                        return this.strip()
                    }, d.prototype.divn = function(e) {
                        return this.clone().idivn(e)
                    }, d.prototype.egcd = function(e) {
                        r(!e.sign), r(0 !== e.cmpn(0));
                        var t = this,
                            f = e.clone();
                        t = t.sign ? t.mod(e) : t.clone();
                        for (var i = new d(1), n = new d(0), c = new d(0), a = new d(1), s = 0; t.isEven() && f.isEven();) t.ishrn(1), f.ishrn(1), ++s;
                        for (var o = f.clone(), b = t.clone(); 0 !== t.cmpn(0);) {
                            for (; t.isEven();) t.ishrn(1), i.isEven() && n.isEven() ? (i.ishrn(1), n.ishrn(1)) : (i.iadd(o).ishrn(1), n.isub(b).ishrn(1));
                            for (; f.isEven();) f.ishrn(1), c.isEven() && a.isEven() ? (c.ishrn(1), a.ishrn(1)) : (c.iadd(o).ishrn(1), a.isub(b).ishrn(1));
                            t.cmp(f) >= 0 ? (t.isub(f), i.isub(c), n.isub(a)) : (f.isub(t), c.isub(i), a.isub(n))
                        }
                        return {
                            a: c,
                            b: a,
                            gcd: f.ishln(s)
                        }
                    }, d.prototype._invmp = function(e) {
                        r(!e.sign), r(0 !== e.cmpn(0));
                        var t = this,
                            f = e.clone();
                        t = t.sign ? t.mod(e) : t.clone();
                        for (var i = new d(1), n = new d(0), c = f.clone(); t.cmpn(1) > 0 && f.cmpn(1) > 0;) {
                            for (; t.isEven();) t.ishrn(1), i.isEven() ? i.ishrn(1) : i.iadd(c).ishrn(1);
                            for (; f.isEven();) f.ishrn(1), n.isEven() ? n.ishrn(1) : n.iadd(c).ishrn(1);
                            t.cmp(f) >= 0 ? (t.isub(f), i.isub(n)) : (f.isub(t), n.isub(i))
                        }
                        return 0 === t.cmpn(1) ? i : n
                    }, d.prototype.gcd = function(e) {
                        if (0 === this.cmpn(0)) return e.clone();
                        if (0 === e.cmpn(0)) return this.clone();
                        var t = this.clone(),
                            r = e.clone();
                        t.sign = !1, r.sign = !1;
                        for (var f = 0; t.isEven() && r.isEven(); f++) t.ishrn(1), r.ishrn(1);
                        for (;;) {
                            for (; t.isEven();) t.ishrn(1);
                            for (; r.isEven();) r.ishrn(1);
                            var d = t.cmp(r);
                            if (d < 0) {
                                var i = t;
                                t = r, r = i
                            } else if (0 === d || 0 === r.cmpn(1)) break;
                            t.isub(r)
                        }
                        return r.ishln(f)
                    }, d.prototype.invm = function(e) {
                        return this.egcd(e).a.mod(e)
                    }, d.prototype.isEven = function() {
                        return 0 == (1 & this.words[0])
                    }, d.prototype.isOdd = function() {
                        return 1 == (1 & this.words[0])
                    }, d.prototype.andln = function(e) {
                        return this.words[0] & e
                    }, d.prototype.bincn = function(e) {
                        r("number" == typeof e);
                        var t = e % 26,
                            f = (e - t) / 26,
                            d = 1 << t;
                        if (this.length <= f) {
                            for (var i = this.length; i < f + 1; i++) this.words[i] = 0;
                            return this.words[f] |= d, this.length = f + 1, this
                        }
                        var n = d;
                        for (i = f; 0 !== n && i < this.length; i++) {
                            var c = this.words[i];
                            n = (c += n) >>> 26, c &= 67108863, this.words[i] = c
                        }
                        return 0 !== n && (this.words[i] = n, this.length++), this
                    }, d.prototype.cmpn = function(e) {
                        var t, r = e < 0;
                        if (r && (e = -e), this.sign && !r) return -1;
                        if (!this.sign && r) return 1;
                        if (e &= 67108863, this.strip(), this.length > 1) t = 1;
                        else {
                            var f = this.words[0];
                            t = f === e ? 0 : f < e ? -1 : 1
                        }
                        return this.sign && (t = -t), t
                    }, d.prototype.cmp = function(e) {
                        if (this.sign && !e.sign) return -1;
                        if (!this.sign && e.sign) return 1;
                        var t = this.ucmp(e);
                        return this.sign ? -t : t
                    }, d.prototype.ucmp = function(e) {
                        if (this.length > e.length) return 1;
                        if (this.length < e.length) return -1;
                        for (var t = 0, r = this.length - 1; r >= 0; r--) {
                            var f = this.words[r],
                                d = e.words[r];
                            if (f !== d) {
                                f < d ? t = -1 : f > d && (t = 1);
                                break
                            }
                        }
                        return t
                    }, d.red = function(e) {
                        return new v(e)
                    }, d.prototype.toRed = function(e) {
                        return r(!this.red, "Already a number in reduction context"), r(!this.sign, "red works only with positives"), e.convertTo(this)._forceRed(e)
                    }, d.prototype.fromRed = function() {
                        return r(this.red, "fromRed works only with numbers in reduction context"), this.red.convertFrom(this)
                    }, d.prototype._forceRed = function(e) {
                        return this.red = e, this
                    }, d.prototype.forceRed = function(e) {
                        return r(!this.red, "Already a number in reduction context"), this._forceRed(e)
                    }, d.prototype.redAdd = function(e) {
                        return r(this.red, "redAdd works only with red numbers"), this.red.add(this, e)
                    }, d.prototype.redIAdd = function(e) {
                        return r(this.red, "redIAdd works only with red numbers"), this.red.iadd(this, e)
                    }, d.prototype.redSub = function(e) {
                        return r(this.red, "redSub works only with red numbers"), this.red.sub(this, e)
                    }, d.prototype.redISub = function(e) {
                        return r(this.red, "redISub works only with red numbers"), this.red.isub(this, e)
                    }, d.prototype.redShl = function(e) {
                        return r(this.red, "redShl works only with red numbers"), this.red.shl(this, e)
                    }, d.prototype.redMul = function(e) {
                        return r(this.red, "redMul works only with red numbers"), this.red._verify2(this, e), this.red.mul(this, e)
                    }, d.prototype.redIMul = function(e) {
                        return r(this.red, "redMul works only with red numbers"), this.red._verify2(this, e), this.red.imul(this, e)
                    }, d.prototype.redSqr = function() {
                        return r(this.red, "redSqr works only with red numbers"), this.red._verify1(this), this.red.sqr(this)
                    }, d.prototype.redISqr = function() {
                        return r(this.red, "redISqr works only with red numbers"), this.red._verify1(this), this.red.isqr(this)
                    }, d.prototype.redSqrt = function() {
                        return r(this.red, "redSqrt works only with red numbers"), this.red._verify1(this), this.red.sqrt(this)
                    }, d.prototype.redInvm = function() {
                        return r(this.red, "redInvm works only with red numbers"), this.red._verify1(this), this.red.invm(this)
                    }, d.prototype.redNeg = function() {
                        return r(this.red, "redNeg works only with red numbers"), this.red._verify1(this), this.red.neg(this)
                    }, d.prototype.redPow = function(e) {
                        return r(this.red && !e.red, "redPow(normalNum)"), this.red._verify1(this), this.red.pow(this, e)
                    };
                    var o = {
                        k256: null,
                        p224: null,
                        p192: null,
                        p25519: null
                    };

                    function b(e, t) {
                        this.name = e, this.p = new d(t, 16), this.n = this.p.bitLength(), this.k = new d(1).ishln(this.n).isub(this.p), this.tmp = this._tmp()
                    }

                    function h() {
                        b.call(this, "k256", "ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffe fffffc2f")
                    }

                    function u() {
                        b.call(this, "p224", "ffffffff ffffffff ffffffff ffffffff 00000000 00000000 00000001")
                    }

                    function p() {
                        b.call(this, "p192", "ffffffff ffffffff ffffffff fffffffe ffffffff ffffffff")
                    }

                    function l() {
                        b.call(this, "25519", "7fffffffffffffff ffffffffffffffff ffffffffffffffff ffffffffffffffed")
                    }

                    function v(e) {
                        if ("string" == typeof e) {
                            var t = d._prime(e);
                            this.m = t.p, this.prime = t
                        } else this.m = e, this.prime = null
                    }

                    function m(e) {
                        v.call(this, e), this.shift = this.m.bitLength(), this.shift % 26 != 0 && (this.shift += 26 - this.shift % 26), this.r = new d(1).ishln(this.shift), this.r2 = this.imod(this.r.sqr()), this.rinv = this.r._invmp(this.m), this.minv = this.rinv.mul(this.r).isubn(1).div(this.m), this.minv.sign = !0, this.minv = this.minv.mod(this.r)
                    }
                    b.prototype._tmp = function() {
                        var e = new d(null);
                        return e.words = new Array(Math.ceil(this.n / 13)), e
                    }, b.prototype.ireduce = function(e) {
                        var t, r = e;
                        do {
                            this.split(r, this.tmp), t = (r = (r = this.imulK(r)).iadd(this.tmp)).bitLength()
                        } while (t > this.n);
                        var f = t < this.n ? -1 : r.ucmp(this.p);
                        return 0 === f ? (r.words[0] = 0, r.length = 1) : f > 0 ? r.isub(this.p) : r.strip(), r
                    }, b.prototype.split = function(e, t) {
                        e.ishrn(this.n, 0, t)
                    }, b.prototype.imulK = function(e) {
                        return e.imul(this.k)
                    }, f(h, b), h.prototype.split = function(e, t) {
                        for (var r = Math.min(e.length, 9), f = 0; f < r; f++) t.words[f] = e.words[f];
                        if (t.length = r, e.length <= 9) return e.words[0] = 0, void(e.length = 1);
                        var d = e.words[9];
                        t.words[t.length++] = 4194303 & d;
                        for (f = 10; f < e.length; f++) {
                            var i = e.words[f];
                            e.words[f - 10] = (4194303 & i) << 4 | d >>> 22, d = i
                        }
                        e.words[f - 10] = d >>> 22, e.length -= 9
                    }, h.prototype.imulK = function(e) {
                        var t;
                        e.words[e.length] = 0, e.words[e.length + 1] = 0, e.length += 2;
                        for (var r = 0, f = 0; f < e.length; f++) {
                            var d = e.words[f];
                            t = 64 * d, t += (r += 977 * d) / 67108864 | 0, r &= 67108863, e.words[f] = r, r = t
                        }
                        return 0 === e.words[e.length - 1] && (e.length--, 0 === e.words[e.length - 1] && e.length--), e
                    }, f(u, b), f(p, b), f(l, b), l.prototype.imulK = function(e) {
                        for (var t = 0, r = 0; r < e.length; r++) {
                            var f = 19 * e.words[r] + t,
                                d = 67108863 & f;
                            f >>>= 26, e.words[r] = d, t = f
                        }
                        return 0 !== t && (e.words[e.length++] = t), e
                    }, d._prime = function(e) {
                        if (o[e]) return o[e];
                        var t;
                        if ("k256" === e) t = new h;
                        else if ("p224" === e) t = new u;
                        else if ("p192" === e) t = new p;
                        else {
                            if ("p25519" !== e) throw new Error("Unknown prime " + e);
                            t = new l
                        }
                        return o[e] = t, t
                    }, v.prototype._verify1 = function(e) {
                        r(!e.sign, "red works only with positives"), r(e.red, "red works only with red numbers")
                    }, v.prototype._verify2 = function(e, t) {
                        r(!e.sign && !t.sign, "red works only with positives"), r(e.red && e.red === t.red, "red works only with red numbers")
                    }, v.prototype.imod = function(e) {
                        return this.prime ? this.prime.ireduce(e)._forceRed(this) : e.mod(this.m)._forceRed(this)
                    }, v.prototype.neg = function(e) {
                        var t = e.clone();
                        return t.sign = !t.sign, t.iadd(this.m)._forceRed(this)
                    }, v.prototype.add = function(e, t) {
                        this._verify2(e, t);
                        var r = e.add(t);
                        return r.cmp(this.m) >= 0 && r.isub(this.m), r._forceRed(this)
                    }, v.prototype.iadd = function(e, t) {
                        this._verify2(e, t);
                        var r = e.iadd(t);
                        return r.cmp(this.m) >= 0 && r.isub(this.m), r
                    }, v.prototype.sub = function(e, t) {
                        this._verify2(e, t);
                        var r = e.sub(t);
                        return r.cmpn(0) < 0 && r.iadd(this.m), r._forceRed(this)
                    }, v.prototype.isub = function(e, t) {
                        this._verify2(e, t);
                        var r = e.isub(t);
                        return r.cmpn(0) < 0 && r.iadd(this.m), r
                    }, v.prototype.shl = function(e, t) {
                        return this._verify1(e), this.imod(e.shln(t))
                    }, v.prototype.imul = function(e, t) {
                        return this._verify2(e, t), this.imod(e.imul(t))
                    }, v.prototype.mul = function(e, t) {
                        return this._verify2(e, t), this.imod(e.mul(t))
                    }, v.prototype.isqr = function(e) {
                        return this.imul(e, e)
                    }, v.prototype.sqr = function(e) {
                        return this.mul(e, e)
                    }, v.prototype.sqrt = function(e) {
                        if (0 === e.cmpn(0)) return e.clone();
                        var t = this.m.andln(3);
                        if (r(t % 2 == 1), 3 === t) {
                            var f = this.m.add(new d(1)).ishrn(2);
                            return h = this.pow(e, f)
                        }
                        for (var i = this.m.subn(1), n = 0; 0 !== i.cmpn(0) && 0 === i.andln(1);) n++, i.ishrn(1);
                        r(0 !== i.cmpn(0));
                        var c = new d(1).toRed(this),
                            a = c.redNeg(),
                            s = this.m.subn(1).ishrn(1),
                            o = this.m.bitLength();
                        for (o = new d(2 * o * o).toRed(this); 0 !== this.pow(o, s).cmp(a);) o.redIAdd(a);
                        for (var b = this.pow(o, i), h = this.pow(e, i.addn(1).ishrn(1)), u = this.pow(e, i), p = n; 0 !== u.cmp(c);) {
                            for (var l = u, v = 0; 0 !== l.cmp(c); v++) l = l.redSqr();
                            r(v < p);
                            var m = this.pow(b, new d(1).ishln(p - v - 1));
                            h = h.redMul(m), b = m.redSqr(), u = u.redMul(b), p = v
                        }
                        return h
                    }, v.prototype.invm = function(e) {
                        var t = e._invmp(this.m);
                        return t.sign ? (t.sign = !1, this.imod(t).redNeg()) : this.imod(t)
                    }, v.prototype.pow = function(e, t) {
                        var r = [];
                        if (0 === t.cmpn(0)) return new d(1);
                        for (var f = t.clone(); 0 !== f.cmpn(0);) r.push(f.andln(1)), f.ishrn(1);
                        for (var i = e, n = 0; n < r.length && 0 === r[n]; n++, i = this.sqr(i));
                        if (++n < r.length)
                            for (f = this.sqr(i); n < r.length; n++, f = this.sqr(f)) 0 !== r[n] && (i = this.mul(i, f));
                        return i
                    }, v.prototype.convertTo = function(e) {
                        return e.clone()
                    }, v.prototype.convertFrom = function(e) {
                        var t = e.clone();
                        return t.red = null, t
                    }, d.mont = function(e) {
                        return new m(e)
                    }, f(m, v), m.prototype.convertTo = function(e) {
                        return this.imod(e.shln(this.shift))
                    }, m.prototype.convertFrom = function(e) {
                        var t = this.imod(e.mul(this.rinv));
                        return t.red = null, t
                    }, m.prototype.imul = function(e, t) {
                        if (0 === e.cmpn(0) || 0 === t.cmpn(0)) return e.words[0] = 0, e.length = 1, e;
                        var r = e.imul(t),
                            f = r.maskn(this.shift).mul(this.minv).imaskn(this.shift).mul(this.m),
                            d = r.isub(f).ishrn(this.shift),
                            i = d;
                        return d.cmp(this.m) >= 0 ? i = d.isub(this.m) : d.cmpn(0) < 0 && (i = d.iadd(this.m)), i._forceRed(this)
                    }, m.prototype.mul = function(e, t) {
                        if (0 === e.cmpn(0) || 0 === t.cmpn(0)) return new d(0)._forceRed(this);
                        var r = e.mul(t),
                            f = r.maskn(this.shift).mul(this.minv).imaskn(this.shift).mul(this.m),
                            i = r.isub(f).ishrn(this.shift),
                            n = i;
                        return i.cmp(this.m) >= 0 ? n = i.isub(this.m) : i.cmpn(0) < 0 && (n = i.iadd(this.m)), n._forceRed(this)
                    }, m.prototype.invm = function(e) {
                        return this.imod(e._invmp(this.m).mul(this.r2))._forceRed(this)
                    }
                }(e, this)
            }).call(this, r(81)(e))
        },
        6062: function(e, t) {
            "function" == typeof Object.create ? e.exports = function(e, t) {
                e.super_ = t, e.prototype = Object.create(t.prototype, {
                    constructor: {
                        value: e,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                })
            } : e.exports = function(e, t) {
                e.super_ = t;
                var r = function() {};
                r.prototype = t.prototype, e.prototype = new r, e.prototype.constructor = e
            }
        },
        6208: function(e, t, r) {
            "use strict";
            var f = t;
            f.base = r(9589), f.short = r(9590), f.mont = r(9591), f.edwards = r(9592)
        },
        6555: function(e, t) {
            "function" == typeof Object.create ? e.exports = function(e, t) {
                t && (e.super_ = t, e.prototype = Object.create(t.prototype, {
                    constructor: {
                        value: e,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }))
            } : e.exports = function(e, t) {
                if (t) {
                    e.super_ = t;
                    var r = function() {};
                    r.prototype = t.prototype, e.prototype = new r, e.prototype.constructor = e
                }
            }
        },
        6559: function(e, t, r) {
            "use strict";
            var f = r(5489),
                d = r(5669),
                i = r(5505),
                n = {
                    BTC: [1e8, 8],
                    mBTC: [1e5, 5],
                    uBTC: [100, 2],
                    bits: [100, 2],
                    satoshis: [1, 0]
                };

            function c(e, t) {
                if (!(this instanceof c)) return new c(e, t);
                if (f.isNumber(t)) {
                    if (t <= 0) throw new d.Unit.InvalidRate(t);
                    e /= t, t = c.BTC
                }
                this._value = this._from(e, t);
                var r = this;
                Object.keys(n).forEach((function(e) {
                    Object.defineProperty(r, e, {
                        get: function() {
                            return r.to(e)
                        },
                        enumerable: !0
                    })
                }))
            }
            Object.keys(n).forEach((function(e) {
                c[e] = e
            })), c.fromObject = function(e) {
                return i.checkArgument(f.isObject(e), "Argument is expected to be an object"), new c(e.amount, e.code)
            }, c.fromBTC = function(e) {
                return new c(e, c.BTC)
            }, c.fromMillis = c.fromMilis = function(e) {
                return new c(e, c.mBTC)
            }, c.fromMicros = c.fromBits = function(e) {
                return new c(e, c.bits)
            }, c.fromSatoshis = function(e) {
                return new c(e, c.satoshis)
            }, c.fromFiat = function(e, t) {
                return new c(e, t)
            }, c.prototype._from = function(e, t) {
                if (!n[t]) throw new d.Unit.UnknownCode(t);
                return parseInt((e * n[t][0]).toFixed())
            }, c.prototype.to = function(e) {
                if (f.isNumber(e)) {
                    if (e <= 0) throw new d.Unit.InvalidRate(e);
                    return parseFloat((this.BTC * e).toFixed(2))
                }
                if (!n[e]) throw new d.Unit.UnknownCode(e);
                var t = this._value / n[e][0];
                return parseFloat(t.toFixed(n[e][1]))
            }, c.prototype.toBTC = function() {
                return this.to(c.BTC)
            }, c.prototype.toMillis = c.prototype.toMilis = function() {
                return this.to(c.mBTC)
            }, c.prototype.toMicros = c.prototype.toBits = function() {
                return this.to(c.bits)
            }, c.prototype.toSatoshis = function() {
                return this.to(c.satoshis)
            }, c.prototype.atRate = function(e) {
                return this.to(e)
            }, c.prototype.toString = function() {
                return this.satoshis + " satoshis"
            }, c.prototype.toObject = c.prototype.toJSON = function() {
                return {
                    amount: this.BTC,
                    code: c.BTC
                }
            }, c.prototype.inspect = function() {
                return "<Unit: " + this.toString() + ">"
            }, e.exports = c
        },
        7296: function(e, t) {
            for (var r = "123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz", f = {}, d = 0; d < r.length; d++) f[r.charAt(d)] = d;
            e.exports = {
                encode: function(e) {
                    if (0 === e.length) return "";
                    var t, f, d = [0];
                    for (t = 0; t < e.length; t++) {
                        for (f = 0; f < d.length; f++) d[f] <<= 8;
                        d[0] += e[t];
                        var i = 0;
                        for (f = 0; f < d.length; ++f) d[f] += i, i = d[f] / 58 | 0, d[f] %= 58;
                        for (; i;) d.push(i % 58), i = i / 58 | 0
                    }
                    for (t = 0; 0 === e[t] && t < e.length - 1; t++) d.push(0);
                    return d.reverse().map((function(e) {
                        return r[e]
                    })).join("")
                },
                decode: function(e) {
                    if (0 === e.length) return [];
                    var t, r, d = [0];
                    for (t = 0; t < e.length; t++) {
                        var i = e[t];
                        if (!(i in f)) throw new Error("Non-base58 character");
                        for (r = 0; r < d.length; r++) d[r] *= 58;
                        d[0] += f[i];
                        var n = 0;
                        for (r = 0; r < d.length; ++r) d[r] += n, n = d[r] >> 8, d[r] &= 255;
                        for (; n;) d.push(255 & n), n >>= 8
                    }
                    for (t = 0;
                        "1" === e[t] && t < e.length - 1; t++) d.push(0);
                    return d.reverse()
                }
            }
        },
        9584: function(e) {
            e.exports = JSON.parse('{"name":"qtumcore-lib","version":"0.0.1","description":"A pure and powerful JavaScript QTUM library.","author":"QTUM <foundation@qtum.org>","main":"index.js","scripts":{"lint":"gulp lint","test":"gulp test","coverage":"gulp coverage","build":"gulp"},"contributors":[],"keywords":["qtum","bitcoin","transaction","address","p2p","ecies","cryptocurrency","blockchain","payment","bip21","bip32","bip37","bip69","bip70","multisig"],"repository":{"type":"git","url":"git+https://github.com/qtumproject/qtumcore-lib.git"},"browser":{"request":"browser-request"},"dependencies":{"bn.js":"=2.0.4","bs58":"=2.0.0","buffer-compare":"=1.0.0","elliptic":"=3.0.3","inherits":"=2.0.1","lodash":"=3.10.1"},"devDependencies":{"bitcore-build":"github:bitpay/bitcore-build","brfs":"^1.2.0","chai":"^1.10.0","gulp":"^3.9.1","sinon":"^1.13.0"},"license":"MIT","bugs":{"url":"https://github.com/qtumproject/qtumcore-lib/issues"},"homepage":"https://github.com/qtumproject/qtumcore-lib#readme","directories":{"doc":"docs","lib":"lib","test":"test"}}')
        },
        9586: function(e) {
            e.exports = JSON.parse('{"name":"elliptic","version":"3.0.3","description":"EC cryptography","main":"lib/elliptic.js","scripts":{"test":"make lint && mocha --reporter=spec test/*-test.js"},"repository":{"type":"git","url":"git@github.com:indutny/elliptic"},"keywords":["EC","Elliptic","curve","Cryptography"],"author":"Fedor Indutny <fedor@indutny.com>","license":"MIT","bugs":{"url":"https://github.com/indutny/elliptic/issues"},"homepage":"https://github.com/indutny/elliptic","devDependencies":{"browserify":"^3.44.2","jscs":"^1.11.3","jshint":"^2.6.0","mocha":"^2.1.0","uglify-js":"^2.4.13"},"dependencies":{"bn.js":"^2.0.0","brorand":"^1.0.1","hash.js":"^1.0.0","inherits":"^2.0.1"}}')
        },
        9587: function(e, t, r) {
            "use strict";
            var f = t;

            function d(e) {
                return 1 === e.length ? "0" + e : e
            }

            function i(e) {
                for (var t = "", r = 0; r < e.length; r++) t += d(e[r].toString(16));
                return t
            }
            f.assert = function(e, t) {
                if (!e) throw new Error(t || "Assertion failed")
            }, f.toArray = function(e, t) {
                if (Array.isArray(e)) return e.slice();
                if (!e) return [];
                var r = [];
                if ("string" != typeof e) {
                    for (var f = 0; f < e.length; f++) r[f] = 0 | e[f];
                    return r
                }
                if (t) {
                    if ("hex" === t) {
                        (e = e.replace(/[^a-z0-9]+/gi, "")).length % 2 != 0 && (e = "0" + e);
                        for (f = 0; f < e.length; f += 2) r.push(parseInt(e[f] + e[f + 1], 16))
                    }
                } else
                    for (var f = 0; f < e.length; f++) {
                        var d = e.charCodeAt(f),
                            i = d >> 8,
                            n = 255 & d;
                        i ? r.push(i, n) : r.push(n)
                    }
                return r
            }, f.zero2 = d, f.toHex = i, f.encode = function(e, t) {
                return "hex" === t ? i(e) : e
            }, f.getNAF = function(e, t) {
                for (var r = [], f = 1 << t + 1, d = e.clone(); d.cmpn(1) >= 0;) {
                    var i;
                    if (d.isOdd()) {
                        var n = d.andln(f - 1);
                        i = n > (f >> 1) - 1 ? (f >> 1) - n : n, d.isubn(i)
                    } else i = 0;
                    r.push(i);
                    for (var c = 0 !== d.cmpn(0) && 0 === d.andln(f - 1) ? t + 1 : 1, a = 1; a < c; a++) r.push(0);
                    d.ishrn(c)
                }
                return r
            }, f.getJSF = function(e, t) {
                var r = [
                    [],
                    []
                ];
                e = e.clone(), t = t.clone();
                for (var f = 0, d = 0; e.cmpn(-f) > 0 || t.cmpn(-d) > 0;) {
                    var i, n, c, a = e.andln(3) + f & 3,
                        s = t.andln(3) + d & 3;
                    if (3 === a && (a = -1), 3 === s && (s = -1), 0 == (1 & a)) i = 0;
                    else i = 3 !== (c = e.andln(7) + f & 7) && 5 !== c || 2 !== s ? a : -a;
                    if (r[0].push(i), 0 == (1 & s)) n = 0;
                    else n = 3 !== (c = t.andln(7) + d & 7) && 5 !== c || 2 !== a ? s : -s;
                    r[1].push(n), 2 * f === i + 1 && (f = 1 - f), 2 * d === n + 1 && (d = 1 - d), e.ishrn(1), t.ishrn(1)
                }
                return r
            }
        },
        9588: function(e, t, r) {
            "use strict";
            var f = r(141),
                d = r(5697).utils,
                i = d.assert;

            function n(e) {
                if (!(this instanceof n)) return new n(e);
                this.hash = e.hash, this.predResist = !!e.predResist, this.outLen = this.hash.outSize, this.minEntropy = e.minEntropy || this.hash.hmacStrength, this.reseed = null, this.reseedInterval = null, this.K = null, this.V = null;
                var t = d.toArray(e.entropy, e.entropyEnc),
                    r = d.toArray(e.nonce, e.nonceEnc),
                    f = d.toArray(e.pers, e.persEnc);
                i(t.length >= this.minEntropy / 8, "Not enough entropy. Minimum is: " + this.minEntropy + " bits"), this._init(t, r, f)
            }
            e.exports = n, n.prototype._init = function(e, t, r) {
                var f = e.concat(t).concat(r);
                this.K = new Array(this.outLen / 8), this.V = new Array(this.outLen / 8);
                for (var d = 0; d < this.V.length; d++) this.K[d] = 0, this.V[d] = 1;
                this._update(f), this.reseed = 1, this.reseedInterval = 281474976710656
            }, n.prototype._hmac = function() {
                return new f.hmac(this.hash, this.K)
            }, n.prototype._update = function(e) {
                var t = this._hmac().update(this.V).update([0]);
                e && (t = t.update(e)), this.K = t.digest(), this.V = this._hmac().update(this.V).digest(), e && (this.K = this._hmac().update(this.V).update([1]).update(e).digest(), this.V = this._hmac().update(this.V).digest())
            }, n.prototype.reseed = function(e, t, r, f) {
                "string" != typeof t && (f = r, r = t, t = null), e = d.toBuffer(e, t), r = d.toBuffer(r, f), i(e.length >= this.minEntropy / 8, "Not enough entropy. Minimum is: " + this.minEntropy + " bits"), this._update(e.concat(r || [])), this.reseed = 1
            }, n.prototype.generate = function(e, t, r, f) {
                if (this.reseed > this.reseedInterval) throw new Error("Reseed is required");
                "string" != typeof t && (f = r, r = t, t = null), r && (r = d.toArray(r, f), this._update(r));
                for (var i = []; i.length < e;) this.V = this._hmac().update(this.V).digest(), i = i.concat(this.V);
                var n = i.slice(0, e);
                return this._update(r), this.reseed++, d.encode(n, t)
            }
        },
        9589: function(e, t, r) {
            "use strict";
            var f = r(5745),
                d = r(5697),
                i = d.utils.getNAF,
                n = d.utils.getJSF,
                c = d.utils.assert;

            function a(e, t) {
                this.type = e, this.p = new f(t.p, 16), this.red = t.prime ? f.red(t.prime) : f.mont(this.p), this.zero = new f(0).toRed(this.red), this.one = new f(1).toRed(this.red), this.two = new f(2).toRed(this.red), this.n = t.n && new f(t.n, 16), this.g = t.g && this.pointFromJSON(t.g, t.gRed), this._wnafT1 = new Array(4), this._wnafT2 = new Array(4), this._wnafT3 = new Array(4), this._wnafT4 = new Array(4)
            }

            function s(e, t) {
                this.curve = e, this.type = t, this.precomputed = null
            }
            e.exports = a, a.prototype.point = function() {
                throw new Error("Not implemented")
            }, a.prototype.validate = function() {
                throw new Error("Not implemented")
            }, a.prototype._fixedNafMul = function(e, t) {
                var r = e._getDoubles(),
                    f = i(t, 1),
                    d = (1 << r.step + 1) - (r.step % 2 == 0 ? 2 : 1);
                d /= 3;
                for (var n = [], c = 0; c < f.length; c += r.step) {
                    var a = 0;
                    for (t = c + r.step - 1; t >= c; t--) a = (a << 1) + f[t];
                    n.push(a)
                }
                for (var s = this.jpoint(null, null, null), o = this.jpoint(null, null, null), b = d; b > 0; b--) {
                    for (c = 0; c < n.length; c++) {
                        (a = n[c]) === b ? o = o.mixedAdd(r.points[c]) : a === -b && (o = o.mixedAdd(r.points[c].neg()))
                    }
                    s = s.add(o)
                }
                return s.toP()
            }, a.prototype._wnafMul = function(e, t) {
                var r = 4,
                    f = e._getNAFPoints(r);
                r = f.wnd;
                for (var d = f.points, n = i(t, r), a = this.jpoint(null, null, null), s = n.length - 1; s >= 0; s--) {
                    for (t = 0; s >= 0 && 0 === n[s]; s--) t++;
                    if (s >= 0 && t++, a = a.dblp(t), s < 0) break;
                    var o = n[s];
                    c(0 !== o), a = "affine" === e.type ? o > 0 ? a.mixedAdd(d[o - 1 >> 1]) : a.mixedAdd(d[-o - 1 >> 1].neg()) : o > 0 ? a.add(d[o - 1 >> 1]) : a.add(d[-o - 1 >> 1].neg())
                }
                return "affine" === e.type ? a.toP() : a
            }, a.prototype._wnafMulAdd = function(e, t, r, f) {
                for (var d = this._wnafT1, c = this._wnafT2, a = this._wnafT3, s = 0, o = 0; o < f; o++) {
                    var b = (M = t[o])._getNAFPoints(e);
                    d[o] = b.wnd, c[o] = b.points
                }
                for (o = f - 1; o >= 1; o -= 2) {
                    var h = o - 1,
                        u = o;
                    if (1 === d[h] && 1 === d[u]) {
                        var p = [t[h], null, null, t[u]];
                        0 === t[h].y.cmp(t[u].y) ? (p[1] = t[h].add(t[u]), p[2] = t[h].toJ().mixedAdd(t[u].neg())) : 0 === t[h].y.cmp(t[u].y.redNeg()) ? (p[1] = t[h].toJ().mixedAdd(t[u]), p[2] = t[h].add(t[u].neg())) : (p[1] = t[h].toJ().mixedAdd(t[u]), p[2] = t[h].toJ().mixedAdd(t[u].neg()));
                        var l = [-3, -1, -5, -7, 0, 7, 5, 1, 3],
                            v = n(r[h], r[u]);
                        s = Math.max(v[0].length, s), a[h] = new Array(s), a[u] = new Array(s);
                        for (var m = 0; m < s; m++) {
                            var g = 0 | v[0][m],
                                y = 0 | v[1][m];
                            a[h][m] = l[3 * (g + 1) + (y + 1)], a[u][m] = 0, c[h] = p
                        }
                    } else a[h] = i(r[h], d[h]), a[u] = i(r[u], d[u]), s = Math.max(a[h].length, s), s = Math.max(a[u].length, s)
                }
                var w = this.jpoint(null, null, null),
                    S = this._wnafT4;
                for (o = s; o >= 0; o--) {
                    for (var A = 0; o >= 0;) {
                        var x = !0;
                        for (m = 0; m < f; m++) S[m] = 0 | a[m][o], 0 !== S[m] && (x = !1);
                        if (!x) break;
                        A++, o--
                    }
                    if (o >= 0 && A++, w = w.dblp(A), o < 0) break;
                    for (m = 0; m < f; m++) {
                        var M, I = S[m];
                        0 !== I && (I > 0 ? M = c[m][I - 1 >> 1] : I < 0 && (M = c[m][-I - 1 >> 1].neg()), w = "affine" === M.type ? w.mixedAdd(M) : w.add(M))
                    }
                }
                for (o = 0; o < f; o++) c[o] = null;
                return w.toP()
            }, a.BasePoint = s, s.prototype.validate = function() {
                return this.curve.validate(this)
            }, s.prototype.precompute = function(e) {
                if (this.precomputed) return this;
                var t = {
                    doubles: null,
                    naf: null,
                    beta: null
                };
                return t.naf = this._getNAFPoints(8), t.doubles = this._getDoubles(4, e), t.beta = this._getBeta(), this.precomputed = t, this
            }, s.prototype._getDoubles = function(e, t) {
                if (this.precomputed && this.precomputed.doubles) return this.precomputed.doubles;
                for (var r = [this], f = this, d = 0; d < t; d += e) {
                    for (var i = 0; i < e; i++) f = f.dbl();
                    r.push(f)
                }
                return {
                    step: e,
                    points: r
                }
            }, s.prototype._getNAFPoints = function(e) {
                if (this.precomputed && this.precomputed.naf) return this.precomputed.naf;
                for (var t = [this], r = (1 << e) - 1, f = 1 === r ? null : this.dbl(), d = 1; d < r; d++) t[d] = t[d - 1].add(f);
                return {
                    wnd: e,
                    points: t
                }
            }, s.prototype._getBeta = function() {
                return null
            }, s.prototype.dblp = function(e) {
                for (var t = this, r = 0; r < e; r++) t = t.dbl();
                return t
            }
        },
        9590: function(e, t, r) {
            "use strict";
            var f = r(6208),
                d = r(5697),
                i = r(5745),
                n = r(6555),
                c = f.base,
                a = d.utils.assert;

            function s(e) {
                c.call(this, "short", e), this.a = new i(e.a, 16).toRed(this.red), this.b = new i(e.b, 16).toRed(this.red), this.tinv = this.two.redInvm(), this.zeroA = 0 === this.a.fromRed().cmpn(0), this.threeA = 0 === this.a.fromRed().sub(this.p).cmpn(-3), this.endo = this._getEndomorphism(e), this._endoWnafT1 = new Array(4), this._endoWnafT2 = new Array(4)
            }

            function Point(e, t, r, f) {
                c.BasePoint.call(this, e, "affine"), null === t && null === r ? (this.x = null, this.y = null, this.inf = !0) : (this.x = new i(t, 16), this.y = new i(r, 16), f && (this.x.forceRed(this.curve.red), this.y.forceRed(this.curve.red)), this.x.red || (this.x = this.x.toRed(this.curve.red)), this.y.red || (this.y = this.y.toRed(this.curve.red)), this.inf = !1)
            }

            function o(e, t, r, f) {
                c.BasePoint.call(this, e, "jacobian"), null === t && null === r && null === f ? (this.x = this.curve.one, this.y = this.curve.one, this.z = new i(0)) : (this.x = new i(t, 16), this.y = new i(r, 16), this.z = new i(f, 16)), this.x.red || (this.x = this.x.toRed(this.curve.red)), this.y.red || (this.y = this.y.toRed(this.curve.red)), this.z.red || (this.z = this.z.toRed(this.curve.red)), this.zOne = this.z === this.curve.one
            }
            n(s, c), e.exports = s, s.prototype._getEndomorphism = function(e) {
                if (this.zeroA && this.g && this.n && 1 === this.p.modn(3)) {
                    var t, r;
                    if (e.beta) t = new i(e.beta, 16).toRed(this.red);
                    else {
                        var f = this._getEndoRoots(this.p);
                        t = (t = f[0].cmp(f[1]) < 0 ? f[0] : f[1]).toRed(this.red)
                    }
                    if (e.lambda) r = new i(e.lambda, 16);
                    else {
                        var d = this._getEndoRoots(this.n);
                        0 === this.g.mul(d[0]).x.cmp(this.g.x.redMul(t)) ? r = d[0] : (r = d[1], a(0 === this.g.mul(r).x.cmp(this.g.x.redMul(t))))
                    }
                    return {
                        beta: t,
                        lambda: r,
                        basis: e.basis ? e.basis.map((function(e) {
                            return {
                                a: new i(e.a, 16),
                                b: new i(e.b, 16)
                            }
                        })) : this._getEndoBasis(r)
                    }
                }
            }, s.prototype._getEndoRoots = function(e) {
                var t = e === this.p ? this.red : i.mont(e),
                    r = new i(2).toRed(t).redInvm(),
                    f = r.redNeg(),
                    d = new i(3).toRed(t).redNeg().redSqrt().redMul(r);
                return [f.redAdd(d).fromRed(), f.redSub(d).fromRed()]
            }, s.prototype._getEndoBasis = function(e) {
                for (var t, r, f, d, n, c, a, s, o, b = this.n.shrn(Math.floor(this.n.bitLength() / 2)), h = e, u = this.n.clone(), p = new i(1), l = new i(0), v = new i(0), m = new i(1), g = 0; 0 !== h.cmpn(0);) {
                    var y = u.div(h);
                    s = u.sub(y.mul(h)), o = v.sub(y.mul(p));
                    var w = m.sub(y.mul(l));
                    if (!f && s.cmp(b) < 0) t = a.neg(), r = p, f = s.neg(), d = o;
                    else if (f && 2 == ++g) break;
                    a = s, u = h, h = s, v = p, p = o, m = l, l = w
                }
                n = s.neg(), c = o;
                var S = f.sqr().add(d.sqr());
                return n.sqr().add(c.sqr()).cmp(S) >= 0 && (n = t, c = r), f.sign && (f = f.neg(), d = d.neg()), n.sign && (n = n.neg(), c = c.neg()), [{
                    a: f,
                    b: d
                }, {
                    a: n,
                    b: c
                }]
            }, s.prototype._endoSplit = function(e) {
                var t = this.endo.basis,
                    r = t[0],
                    f = t[1],
                    d = f.b.mul(e).divRound(this.n),
                    i = r.b.neg().mul(e).divRound(this.n),
                    n = d.mul(r.a),
                    c = i.mul(f.a),
                    a = d.mul(r.b),
                    s = i.mul(f.b);
                return {
                    k1: e.sub(n).sub(c),
                    k2: a.add(s).neg()
                }
            }, s.prototype.pointFromX = function(e, t) {
                (t = new i(t, 16)).red || (t = t.toRed(this.red));
                var r = t.redSqr().redMul(t).redIAdd(t.redMul(this.a)).redIAdd(this.b).redSqrt(),
                    f = r.fromRed().isOdd();
                return (e && !f || !e && f) && (r = r.redNeg()), this.point(t, r)
            }, s.prototype.validate = function(e) {
                if (e.inf) return !0;
                var t = e.x,
                    r = e.y,
                    f = this.a.redMul(t),
                    d = t.redSqr().redMul(t).redIAdd(f).redIAdd(this.b);
                return 0 === r.redSqr().redISub(d).cmpn(0)
            }, s.prototype._endoWnafMulAdd = function(e, t) {
                for (var r = this._endoWnafT1, f = this._endoWnafT2, d = 0; d < e.length; d++) {
                    var i = this._endoSplit(t[d]),
                        n = e[d],
                        c = n._getBeta();
                    i.k1.sign && (i.k1.sign = !i.k1.sign, n = n.neg(!0)), i.k2.sign && (i.k2.sign = !i.k2.sign, c = c.neg(!0)), r[2 * d] = n, r[2 * d + 1] = c, f[2 * d] = i.k1, f[2 * d + 1] = i.k2
                }
                for (var a = this._wnafMulAdd(1, r, f, 2 * d), s = 0; s < 2 * d; s++) r[s] = null, f[s] = null;
                return a
            }, n(Point, c.BasePoint), s.prototype.point = function(e, t, r) {
                return new Point(this, e, t, r)
            }, s.prototype.pointFromJSON = function(e, t) {
                return Point.fromJSON(this, e, t)
            }, Point.prototype._getBeta = function() {
                if (this.curve.endo) {
                    var e = this.precomputed;
                    if (e && e.beta) return e.beta;
                    var t = this.curve.point(this.x.redMul(this.curve.endo.beta), this.y);
                    if (e) {
                        var r = this.curve,
                            f = function(e) {
                                return r.point(e.x.redMul(r.endo.beta), e.y)
                            };
                        e.beta = t, t.precomputed = {
                            beta: null,
                            naf: e.naf && {
                                wnd: e.naf.wnd,
                                points: e.naf.points.map(f)
                            },
                            doubles: e.doubles && {
                                step: e.doubles.step,
                                points: e.doubles.points.map(f)
                            }
                        }
                    }
                    return t
                }
            }, Point.prototype.toJSON = function() {
                return this.precomputed ? [this.x, this.y, this.precomputed && {
                    doubles: this.precomputed.doubles && {
                        step: this.precomputed.doubles.step,
                        points: this.precomputed.doubles.points.slice(1)
                    },
                    naf: this.precomputed.naf && {
                        wnd: this.precomputed.naf.wnd,
                        points: this.precomputed.naf.points.slice(1)
                    }
                }] : [this.x, this.y]
            }, Point.fromJSON = function(e, t, r) {
                "string" == typeof t && (t = JSON.parse(t));
                var f = e.point(t[0], t[1], r);
                if (!t[2]) return f;

                function d(t) {
                    return e.point(t[0], t[1], r)
                }
                var i = t[2];
                return f.precomputed = {
                    beta: null,
                    doubles: i.doubles && {
                        step: i.doubles.step,
                        points: [f].concat(i.doubles.points.map(d))
                    },
                    naf: i.naf && {
                        wnd: i.naf.wnd,
                        points: [f].concat(i.naf.points.map(d))
                    }
                }, f
            }, Point.prototype.inspect = function() {
                return this.isInfinity() ? "<EC Point Infinity>" : "<EC Point x: " + this.x.fromRed().toString(16, 2) + " y: " + this.y.fromRed().toString(16, 2) + ">"
            }, Point.prototype.isInfinity = function() {
                return this.inf
            }, Point.prototype.add = function(e) {
                if (this.inf) return e;
                if (e.inf) return this;
                if (this.eq(e)) return this.dbl();
                if (this.neg().eq(e)) return this.curve.point(null, null);
                if (0 === this.x.cmp(e.x)) return this.curve.point(null, null);
                var t = this.y.redSub(e.y);
                0 !== t.cmpn(0) && (t = t.redMul(this.x.redSub(e.x).redInvm()));
                var r = t.redSqr().redISub(this.x).redISub(e.x),
                    f = t.redMul(this.x.redSub(r)).redISub(this.y);
                return this.curve.point(r, f)
            }, Point.prototype.dbl = function() {
                if (this.inf) return this;
                var e = this.y.redAdd(this.y);
                if (0 === e.cmpn(0)) return this.curve.point(null, null);
                var t = this.curve.a,
                    r = this.x.redSqr(),
                    f = e.redInvm(),
                    d = r.redAdd(r).redIAdd(r).redIAdd(t).redMul(f),
                    i = d.redSqr().redISub(this.x.redAdd(this.x)),
                    n = d.redMul(this.x.redSub(i)).redISub(this.y);
                return this.curve.point(i, n)
            }, Point.prototype.getX = function() {
                return this.x.fromRed()
            }, Point.prototype.getY = function() {
                return this.y.fromRed()
            }, Point.prototype.mul = function(e) {
                return e = new i(e, 16), this.precomputed && this.precomputed.doubles ? this.curve._fixedNafMul(this, e) : this.curve.endo ? this.curve._endoWnafMulAdd([this], [e]) : this.curve._wnafMul(this, e)
            }, Point.prototype.mulAdd = function(e, t, r) {
                var f = [this, t],
                    d = [e, r];
                return this.curve.endo ? this.curve._endoWnafMulAdd(f, d) : this.curve._wnafMulAdd(1, f, d, 2)
            }, Point.prototype.eq = function(e) {
                return this === e || this.inf === e.inf && (this.inf || 0 === this.x.cmp(e.x) && 0 === this.y.cmp(e.y))
            }, Point.prototype.neg = function(e) {
                if (this.inf) return this;
                var t = this.curve.point(this.x, this.y.redNeg());
                if (e && this.precomputed) {
                    var r = this.precomputed,
                        f = function(e) {
                            return e.neg()
                        };
                    t.precomputed = {
                        naf: r.naf && {
                            wnd: r.naf.wnd,
                            points: r.naf.points.map(f)
                        },
                        doubles: r.doubles && {
                            step: r.doubles.step,
                            points: r.doubles.points.map(f)
                        }
                    }
                }
                return t
            }, Point.prototype.toJ = function() {
                return this.inf ? this.curve.jpoint(null, null, null) : this.curve.jpoint(this.x, this.y, this.curve.one)
            }, n(o, c.BasePoint), s.prototype.jpoint = function(e, t, r) {
                return new o(this, e, t, r)
            }, o.prototype.toP = function() {
                if (this.isInfinity()) return this.curve.point(null, null);
                var e = this.z.redInvm(),
                    t = e.redSqr(),
                    r = this.x.redMul(t),
                    f = this.y.redMul(t).redMul(e);
                return this.curve.point(r, f)
            }, o.prototype.neg = function() {
                return this.curve.jpoint(this.x, this.y.redNeg(), this.z)
            }, o.prototype.add = function(e) {
                if (this.isInfinity()) return e;
                if (e.isInfinity()) return this;
                var t = e.z.redSqr(),
                    r = this.z.redSqr(),
                    f = this.x.redMul(t),
                    d = e.x.redMul(r),
                    i = this.y.redMul(t.redMul(e.z)),
                    n = e.y.redMul(r.redMul(this.z)),
                    c = f.redSub(d),
                    a = i.redSub(n);
                if (0 === c.cmpn(0)) return 0 !== a.cmpn(0) ? this.curve.jpoint(null, null, null) : this.dbl();
                var s = c.redSqr(),
                    o = s.redMul(c),
                    b = f.redMul(s),
                    h = a.redSqr().redIAdd(o).redISub(b).redISub(b),
                    u = a.redMul(b.redISub(h)).redISub(i.redMul(o)),
                    p = this.z.redMul(e.z).redMul(c);
                return this.curve.jpoint(h, u, p)
            }, o.prototype.mixedAdd = function(e) {
                if (this.isInfinity()) return e.toJ();
                if (e.isInfinity()) return this;
                var t = this.z.redSqr(),
                    r = this.x,
                    f = e.x.redMul(t),
                    d = this.y,
                    i = e.y.redMul(t).redMul(this.z),
                    n = r.redSub(f),
                    c = d.redSub(i);
                if (0 === n.cmpn(0)) return 0 !== c.cmpn(0) ? this.curve.jpoint(null, null, null) : this.dbl();
                var a = n.redSqr(),
                    s = a.redMul(n),
                    o = r.redMul(a),
                    b = c.redSqr().redIAdd(s).redISub(o).redISub(o),
                    h = c.redMul(o.redISub(b)).redISub(d.redMul(s)),
                    u = this.z.redMul(n);
                return this.curve.jpoint(b, h, u)
            }, o.prototype.dblp = function(e) {
                if (0 === e) return this;
                if (this.isInfinity()) return this;
                if (!e) return this.dbl();
                if (this.curve.zeroA || this.curve.threeA) {
                    for (var t = this, r = 0; r < e; r++) t = t.dbl();
                    return t
                }
                var f = this.curve.a,
                    d = this.curve.tinv,
                    i = this.x,
                    n = this.y,
                    c = this.z,
                    a = c.redSqr().redSqr(),
                    s = n.redAdd(n);
                for (r = 0; r < e; r++) {
                    var o = i.redSqr(),
                        b = s.redSqr(),
                        h = b.redSqr(),
                        u = o.redAdd(o).redIAdd(o).redIAdd(f.redMul(a)),
                        p = i.redMul(b),
                        l = u.redSqr().redISub(p.redAdd(p)),
                        v = p.redISub(l),
                        m = u.redMul(v);
                    m = m.redIAdd(m).redISub(h);
                    var g = s.redMul(c);
                    r + 1 < e && (a = a.redMul(h)), i = l, c = g, s = m
                }
                return this.curve.jpoint(i, s.redMul(d), c)
            }, o.prototype.dbl = function() {
                return this.isInfinity() ? this : this.curve.zeroA ? this._zeroDbl() : this.curve.threeA ? this._threeDbl() : this._dbl()
            }, o.prototype._zeroDbl = function() {
                var e, t, r;
                if (this.zOne) {
                    var f = this.x.redSqr(),
                        d = this.y.redSqr(),
                        i = d.redSqr(),
                        n = this.x.redAdd(d).redSqr().redISub(f).redISub(i);
                    n = n.redIAdd(n);
                    var c = f.redAdd(f).redIAdd(f),
                        a = c.redSqr().redISub(n).redISub(n),
                        s = i.redIAdd(i);
                    s = (s = s.redIAdd(s)).redIAdd(s), e = a, t = c.redMul(n.redISub(a)).redISub(s), r = this.y.redAdd(this.y)
                } else {
                    var o = this.x.redSqr(),
                        b = this.y.redSqr(),
                        h = b.redSqr(),
                        u = this.x.redAdd(b).redSqr().redISub(o).redISub(h);
                    u = u.redIAdd(u);
                    var p = o.redAdd(o).redIAdd(o),
                        l = p.redSqr(),
                        v = h.redIAdd(h);
                    v = (v = v.redIAdd(v)).redIAdd(v), e = l.redISub(u).redISub(u), t = p.redMul(u.redISub(e)).redISub(v), r = (r = this.y.redMul(this.z)).redIAdd(r)
                }
                return this.curve.jpoint(e, t, r)
            }, o.prototype._threeDbl = function() {
                var e, t, r;
                if (this.zOne) {
                    var f = this.x.redSqr(),
                        d = this.y.redSqr(),
                        i = d.redSqr(),
                        n = this.x.redAdd(d).redSqr().redISub(f).redISub(i);
                    n = n.redIAdd(n);
                    var c = f.redAdd(f).redIAdd(f).redIAdd(this.curve.a),
                        a = c.redSqr().redISub(n).redISub(n);
                    e = a;
                    var s = i.redIAdd(i);
                    s = (s = s.redIAdd(s)).redIAdd(s), t = c.redMul(n.redISub(a)).redISub(s), r = this.y.redAdd(this.y)
                } else {
                    var o = this.z.redSqr(),
                        b = this.y.redSqr(),
                        h = this.x.redMul(b),
                        u = this.x.redSub(o).redMul(this.x.redAdd(o));
                    u = u.redAdd(u).redIAdd(u);
                    var p = h.redIAdd(h),
                        l = (p = p.redIAdd(p)).redAdd(p);
                    e = u.redSqr().redISub(l), r = this.y.redAdd(this.z).redSqr().redISub(b).redISub(o);
                    var v = b.redSqr();
                    v = (v = (v = v.redIAdd(v)).redIAdd(v)).redIAdd(v), t = u.redMul(p.redISub(e)).redISub(v)
                }
                return this.curve.jpoint(e, t, r)
            }, o.prototype._dbl = function() {
                var e = this.curve.a,
                    t = this.x,
                    r = this.y,
                    f = this.z,
                    d = f.redSqr().redSqr(),
                    i = t.redSqr(),
                    n = r.redSqr(),
                    c = i.redAdd(i).redIAdd(i).redIAdd(e.redMul(d)),
                    a = t.redAdd(t),
                    s = (a = a.redIAdd(a)).redMul(n),
                    o = c.redSqr().redISub(s.redAdd(s)),
                    b = s.redISub(o),
                    h = n.redSqr();
                h = (h = (h = h.redIAdd(h)).redIAdd(h)).redIAdd(h);
                var u = c.redMul(b).redISub(h),
                    p = r.redAdd(r).redMul(f);
                return this.curve.jpoint(o, u, p)
            }, o.prototype.trpl = function() {
                if (!this.curve.zeroA) return this.dbl().add(this);
                var e = this.x.redSqr(),
                    t = this.y.redSqr(),
                    r = this.z.redSqr(),
                    f = t.redSqr(),
                    d = e.redAdd(e).redIAdd(e),
                    i = d.redSqr(),
                    n = this.x.redAdd(t).redSqr().redISub(e).redISub(f),
                    c = (n = (n = (n = n.redIAdd(n)).redAdd(n).redIAdd(n)).redISub(i)).redSqr(),
                    a = f.redIAdd(f);
                a = (a = (a = a.redIAdd(a)).redIAdd(a)).redIAdd(a);
                var s = d.redIAdd(n).redSqr().redISub(i).redISub(c).redISub(a),
                    o = t.redMul(s);
                o = (o = o.redIAdd(o)).redIAdd(o);
                var b = this.x.redMul(c).redISub(o);
                b = (b = b.redIAdd(b)).redIAdd(b);
                var h = this.y.redMul(s.redMul(a.redISub(s)).redISub(n.redMul(c)));
                h = (h = (h = h.redIAdd(h)).redIAdd(h)).redIAdd(h);
                var u = this.z.redAdd(n).redSqr().redISub(r).redISub(c);
                return this.curve.jpoint(b, h, u)
            }, o.prototype.mul = function(e, t) {
                return e = new i(e, t), this.curve._wnafMul(this, e)
            }, o.prototype.eq = function(e) {
                if ("affine" === e.type) return this.eq(e.toJ());
                if (this === e) return !0;
                var t = this.z.redSqr(),
                    r = e.z.redSqr();
                if (0 !== this.x.redMul(r).redISub(e.x.redMul(t)).cmpn(0)) return !1;
                var f = t.redMul(this.z),
                    d = r.redMul(e.z);
                return 0 === this.y.redMul(d).redISub(e.y.redMul(f)).cmpn(0)
            }, o.prototype.inspect = function() {
                return this.isInfinity() ? "<EC JPoint Infinity>" : "<EC JPoint x: " + this.x.toString(16, 2) + " y: " + this.y.toString(16, 2) + " z: " + this.z.toString(16, 2) + ">"
            }, o.prototype.isInfinity = function() {
                return 0 === this.z.cmpn(0)
            }
        },
        9591: function(e, t, r) {
            "use strict";
            var f = r(6208),
                d = r(5745),
                i = r(6555),
                n = f.base;

            function c(e) {
                n.call(this, "mont", e), this.a = new d(e.a, 16).toRed(this.red), this.b = new d(e.b, 16).toRed(this.red), this.i4 = new d(4).toRed(this.red).redInvm(), this.two = new d(2).toRed(this.red), this.a24 = this.i4.redMul(this.a.redAdd(this.two))
            }

            function Point(e, t, r) {
                n.BasePoint.call(this, e, "projective"), null === t && null === r ? (this.x = this.curve.one, this.z = this.curve.zero) : (this.x = new d(t, 16), this.z = new d(r, 16), this.x.red || (this.x = this.x.toRed(this.curve.red)), this.z.red || (this.z = this.z.toRed(this.curve.red)))
            }
            i(c, n), e.exports = c, c.prototype.validate = function(e) {
                var t = e.normalize().x,
                    r = t.redSqr(),
                    f = r.redMul(t).redAdd(r.redMul(this.a)).redAdd(t);
                return 0 === f.redSqrt().redSqr().cmp(f)
            }, i(Point, n.BasePoint), c.prototype.point = function(e, t) {
                return new Point(this, e, t)
            }, c.prototype.pointFromJSON = function(e) {
                return Point.fromJSON(this, e)
            }, Point.prototype.precompute = function() {}, Point.fromJSON = function(e, t) {
                return new Point(e, t[0], t[1] || e.one)
            }, Point.prototype.inspect = function() {
                return this.isInfinity() ? "<EC Point Infinity>" : "<EC Point x: " + this.x.fromRed().toString(16, 2) + " z: " + this.z.fromRed().toString(16, 2) + ">"
            }, Point.prototype.isInfinity = function() {
                return 0 === this.z.cmpn(0)
            }, Point.prototype.dbl = function() {
                var e = this.x.redAdd(this.z).redSqr(),
                    t = this.x.redSub(this.z).redSqr(),
                    r = e.redSub(t),
                    f = e.redMul(t),
                    d = r.redMul(t.redAdd(this.curve.a24.redMul(r)));
                return this.curve.point(f, d)
            }, Point.prototype.add = function() {
                throw new Error("Not supported on Montgomery curve")
            }, Point.prototype.diffAdd = function(e, t) {
                var r = this.x.redAdd(this.z),
                    f = this.x.redSub(this.z),
                    d = e.x.redAdd(e.z),
                    i = e.x.redSub(e.z).redMul(r),
                    n = d.redMul(f),
                    c = t.z.redMul(i.redAdd(n).redSqr()),
                    a = t.x.redMul(i.redISub(n).redSqr());
                return this.curve.point(c, a)
            }, Point.prototype.mul = function(e) {
                for (var t = e.clone(), r = this, f = this.curve.point(null, null), d = []; 0 !== t.cmpn(0); t.ishrn(1)) d.push(t.andln(1));
                for (var i = d.length - 1; i >= 0; i--) 0 === d[i] ? (r = r.diffAdd(f, this), f = f.dbl()) : (f = r.diffAdd(f, this), r = r.dbl());
                return f
            }, Point.prototype.mulAdd = function() {
                throw new Error("Not supported on Montgomery curve")
            }, Point.prototype.normalize = function() {
                return this.x = this.x.redMul(this.z.redInvm()), this.z = this.curve.one, this
            }, Point.prototype.getX = function() {
                return this.normalize(), this.x.fromRed()
            }
        },
        9592: function(e, t, r) {
            "use strict";
            var f = r(6208),
                d = r(5697),
                i = r(5745),
                n = r(6555),
                c = f.base,
                a = d.utils.assert;

            function s(e) {
                this.twisted = 1 != (0 | e.a), this.mOneA = this.twisted && -1 == (0 | e.a), this.extended = this.mOneA, c.call(this, "edwards", e), this.a = new i(e.a, 16).mod(this.red.m).toRed(this.red), this.c = new i(e.c, 16).toRed(this.red), this.c2 = this.c.redSqr(), this.d = new i(e.d, 16).toRed(this.red), this.dd = this.d.redAdd(this.d), a(!this.twisted || 0 === this.c.fromRed().cmpn(1)), this.oneC = 1 == (0 | e.c)
            }

            function Point(e, t, r, f, d) {
                c.BasePoint.call(this, e, "projective"), null === t && null === r && null === f ? (this.x = this.curve.zero, this.y = this.curve.one, this.z = this.curve.one, this.t = this.curve.zero, this.zOne = !0) : (this.x = new i(t, 16), this.y = new i(r, 16), this.z = f ? new i(f, 16) : this.curve.one, this.t = d && new i(d, 16), this.x.red || (this.x = this.x.toRed(this.curve.red)), this.y.red || (this.y = this.y.toRed(this.curve.red)), this.z.red || (this.z = this.z.toRed(this.curve.red)), this.t && !this.t.red && (this.t = this.t.toRed(this.curve.red)), this.zOne = this.z === this.curve.one, this.curve.extended && !this.t && (this.t = this.x.redMul(this.y), this.zOne || (this.t = this.t.redMul(this.z.redInvm()))))
            }
            n(s, c), e.exports = s, s.prototype._mulA = function(e) {
                return this.mOneA ? e.redNeg() : this.a.redMul(e)
            }, s.prototype._mulC = function(e) {
                return this.oneC ? e : this.c.redMul(e)
            }, s.prototype.jpoint = function(e, t, r, f) {
                return this.point(e, t, r, f)
            }, s.prototype.pointFromX = function(e, t) {
                (t = new i(t, 16)).red || (t = t.toRed(this.red));
                var r = t.redSqr(),
                    d = this.c2.redSub(this.a.redMul(r)),
                    n = this.one.redSub(this.c2.redMul(this.d).redMul(r)),
                    c = d.redMul(n.redInvm()).redSqrt(),
                    a = c.fromRed().isOdd();
                return (e && !a || !e && a) && (c = c.redNeg()), this.point(t, c, f.one)
            }, s.prototype.validate = function(e) {
                if (e.isInfinity()) return !0;
                e.normalize();
                var t = e.x.redSqr(),
                    r = e.y.redSqr(),
                    f = t.redMul(this.a).redAdd(r),
                    d = this.c2.redMul(this.one.redAdd(this.d.redMul(t).redMul(r)));
                return 0 === f.cmp(d)
            }, n(Point, c.BasePoint), s.prototype.pointFromJSON = function(e) {
                return Point.fromJSON(this, e)
            }, s.prototype.point = function(e, t, r, f) {
                return new Point(this, e, t, r, f)
            }, Point.fromJSON = function(e, t) {
                return new Point(e, t[0], t[1], t[2])
            }, Point.prototype.inspect = function() {
                return this.isInfinity() ? "<EC Point Infinity>" : "<EC Point x: " + this.x.fromRed().toString(16, 2) + " y: " + this.y.fromRed().toString(16, 2) + " z: " + this.z.fromRed().toString(16, 2) + ">"
            }, Point.prototype.isInfinity = function() {
                return 0 === this.x.cmpn(0) && 0 === this.y.cmp(this.z)
            }, Point.prototype._extDbl = function() {
                var e = this.x.redSqr(),
                    t = this.y.redSqr(),
                    r = this.z.redSqr();
                r = r.redIAdd(r);
                var f = this.curve._mulA(e),
                    d = this.x.redAdd(this.y).redSqr().redISub(e).redISub(t),
                    i = f.redAdd(t),
                    n = i.redSub(r),
                    c = f.redSub(t),
                    a = d.redMul(n),
                    s = i.redMul(c),
                    o = d.redMul(c),
                    b = n.redMul(i);
                return this.curve.point(a, s, b, o)
            }, Point.prototype._projDbl = function() {
                var e, t, r, f = this.x.redAdd(this.y).redSqr(),
                    d = this.x.redSqr(),
                    i = this.y.redSqr();
                if (this.curve.twisted) {
                    var n = (s = this.curve._mulA(d)).redAdd(i);
                    if (this.zOne) e = f.redSub(d).redSub(i).redMul(n.redSub(this.curve.two)), t = n.redMul(s.redSub(i)), r = n.redSqr().redSub(n).redSub(n);
                    else {
                        var c = this.z.redSqr(),
                            a = n.redSub(c).redISub(c);
                        e = f.redSub(d).redISub(i).redMul(a), t = n.redMul(s.redSub(i)), r = n.redMul(a)
                    }
                } else {
                    var s = d.redAdd(i);
                    c = this.curve._mulC(this.c.redMul(this.z)).redSqr(), a = s.redSub(c).redSub(c);
                    e = this.curve._mulC(f.redISub(s)).redMul(a), t = this.curve._mulC(s).redMul(d.redISub(i)), r = s.redMul(a)
                }
                return this.curve.point(e, t, r)
            }, Point.prototype.dbl = function() {
                return this.isInfinity() ? this : this.curve.extended ? this._extDbl() : this._projDbl()
            }, Point.prototype._extAdd = function(e) {
                var t = this.y.redSub(this.x).redMul(e.y.redSub(e.x)),
                    r = this.y.redAdd(this.x).redMul(e.y.redAdd(e.x)),
                    f = this.t.redMul(this.curve.dd).redMul(e.t),
                    d = this.z.redMul(e.z.redAdd(e.z)),
                    i = r.redSub(t),
                    n = d.redSub(f),
                    c = d.redAdd(f),
                    a = r.redAdd(t),
                    s = i.redMul(n),
                    o = c.redMul(a),
                    b = i.redMul(a),
                    h = n.redMul(c);
                return this.curve.point(s, o, h, b)
            }, Point.prototype._projAdd = function(e) {
                var t, r, f = this.z.redMul(e.z),
                    d = f.redSqr(),
                    i = this.x.redMul(e.x),
                    n = this.y.redMul(e.y),
                    c = this.curve.d.redMul(i).redMul(n),
                    a = d.redSub(c),
                    s = d.redAdd(c),
                    o = this.x.redAdd(this.y).redMul(e.x.redAdd(e.y)).redISub(i).redISub(n),
                    b = f.redMul(a).redMul(o);
                return this.curve.twisted ? (t = f.redMul(s).redMul(n.redSub(this.curve._mulA(i))), r = a.redMul(s)) : (t = f.redMul(s).redMul(n.redSub(i)), r = this.curve._mulC(a).redMul(s)), this.curve.point(b, t, r)
            }, Point.prototype.add = function(e) {
                return this.isInfinity() ? e : e.isInfinity() ? this : this.curve.extended ? this._extAdd(e) : this._projAdd(e)
            }, Point.prototype.mul = function(e) {
                return this.precomputed && this.precomputed.doubles ? this.curve._fixedNafMul(this, e) : this.curve._wnafMul(this, e)
            }, Point.prototype.mulAdd = function(e, t, r) {
                return this.curve._wnafMulAdd(1, [this, t], [e, r], 2)
            }, Point.prototype.normalize = function() {
                if (this.zOne) return this;
                var e = this.z.redInvm();
                return this.x = this.x.redMul(e), this.y = this.y.redMul(e), this.t && (this.t = this.t.redMul(e)), this.z = this.curve.one, this.zOne = !0, this
            }, Point.prototype.neg = function() {
                return this.curve.point(this.x.redNeg(), this.y, this.z, this.t && this.t.redNeg())
            }, Point.prototype.getX = function() {
                return this.normalize(), this.x.fromRed()
            }, Point.prototype.getY = function() {
                return this.normalize(), this.y.fromRed()
            }, Point.prototype.toP = Point.prototype.normalize, Point.prototype.mixedAdd = Point.prototype.add
        },
        9593: function(e, t, r) {
            "use strict";
            var f, d = t,
                i = r(141),
                n = r(5697),
                c = n.utils.assert;

            function a(e) {
                "short" === e.type ? this.curve = new n.curve.short(e) : "edwards" === e.type ? this.curve = new n.curve.edwards(e) : this.curve = new n.curve.mont(e), this.g = this.curve.g, this.n = this.curve.n, this.hash = e.hash, c(this.g.validate(), "Invalid curve"), c(this.g.mul(this.n).isInfinity(), "Invalid curve, G*N != O")
            }

            function s(e, t) {
                Object.defineProperty(d, e, {
                    configurable: !0,
                    enumerable: !0,
                    get: function() {
                        var r = new a(t);
                        return Object.defineProperty(d, e, {
                            configurable: !0,
                            enumerable: !0,
                            value: r
                        }), r
                    }
                })
            }
            d.PresetCurve = a, s("p192", {
                type: "short",
                prime: "p192",
                p: "ffffffff ffffffff ffffffff fffffffe ffffffff ffffffff",
                a: "ffffffff ffffffff ffffffff fffffffe ffffffff fffffffc",
                b: "64210519 e59c80e7 0fa7e9ab 72243049 feb8deec c146b9b1",
                n: "ffffffff ffffffff ffffffff 99def836 146bc9b1 b4d22831",
                hash: i.sha256,
                gRed: !1,
                g: ["188da80e b03090f6 7cbf20eb 43a18800 f4ff0afd 82ff1012", "07192b95 ffc8da78 631011ed 6b24cdd5 73f977a1 1e794811"]
            }), s("p224", {
                type: "short",
                prime: "p224",
                p: "ffffffff ffffffff ffffffff ffffffff 00000000 00000000 00000001",
                a: "ffffffff ffffffff ffffffff fffffffe ffffffff ffffffff fffffffe",
                b: "b4050a85 0c04b3ab f5413256 5044b0b7 d7bfd8ba 270b3943 2355ffb4",
                n: "ffffffff ffffffff ffffffff ffff16a2 e0b8f03e 13dd2945 5c5c2a3d",
                hash: i.sha256,
                gRed: !1,
                g: ["b70e0cbd 6bb4bf7f 321390b9 4a03c1d3 56c21122 343280d6 115c1d21", "bd376388 b5f723fb 4c22dfe6 cd4375a0 5a074764 44d58199 85007e34"]
            }), s("p256", {
                type: "short",
                prime: null,
                p: "ffffffff 00000001 00000000 00000000 00000000 ffffffff ffffffff ffffffff",
                a: "ffffffff 00000001 00000000 00000000 00000000 ffffffff ffffffff fffffffc",
                b: "5ac635d8 aa3a93e7 b3ebbd55 769886bc 651d06b0 cc53b0f6 3bce3c3e 27d2604b",
                n: "ffffffff 00000000 ffffffff ffffffff bce6faad a7179e84 f3b9cac2 fc632551",
                hash: i.sha256,
                gRed: !1,
                g: ["6b17d1f2 e12c4247 f8bce6e5 63a440f2 77037d81 2deb33a0 f4a13945 d898c296", "4fe342e2 fe1a7f9b 8ee7eb4a 7c0f9e16 2bce3357 6b315ece cbb64068 37bf51f5"]
            }), s("curve25519", {
                type: "mont",
                prime: "p25519",
                p: "7fffffffffffffff ffffffffffffffff ffffffffffffffff ffffffffffffffed",
                a: "76d06",
                b: "0",
                n: "1000000000000000 0000000000000000 14def9dea2f79cd6 5812631a5cf5d3ed",
                hash: i.sha256,
                gRed: !1,
                g: ["9"]
            }), s("ed25519", {
                type: "edwards",
                prime: "p25519",
                p: "7fffffffffffffff ffffffffffffffff ffffffffffffffff ffffffffffffffed",
                a: "-1",
                c: "1",
                d: "52036cee2b6ffe73 8cc740797779e898 00700a4d4141d8ab 75eb4dca135978a3",
                n: "1000000000000000 0000000000000000 14def9dea2f79cd6 5812631a5cf5d3ed",
                hash: i.sha256,
                gRed: !1,
                g: ["216936d3cd6e53fec0a4e231fdd6dc5c692cc7609525a7b2c9562d608f25d51a", "6666666666666666666666666666666666666666666666666666666666666658"]
            });
            try {
                f = r(9594)
            } catch (e) {
                f = void 0
            }
            s("secp256k1", {
                type: "short",
                prime: "k256",
                p: "ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffe fffffc2f",
                a: "0",
                b: "7",
                n: "ffffffff ffffffff ffffffff fffffffe baaedce6 af48a03b bfd25e8c d0364141",
                h: "1",
                hash: i.sha256,
                beta: "7ae96a2b657c07106e64479eac3434e99cf0497512f58995c1396c28719501ee",
                lambda: "5363ad4cc05c30e0a5261c028812645a122e22ea20816678df02967c1b23bd72",
                basis: [{
                    a: "3086d221a7d46bcde86c90e49284eb15",
                    b: "-e4437ed6010e88286f547fa90abfe4c3"
                }, {
                    a: "114ca50f7a8e2f3f657c1108d9d44cfd8",
                    b: "3086d221a7d46bcde86c90e49284eb15"
                }],
                gRed: !1,
                g: ["79be667ef9dcbbac55a06295ce870b07029bfcdb2dce28d959f2815b16f81798", "483ada7726a3c4655da4fbfc0e1108a8fd17b448a68554199c47d08ffb10d4b8", f]
            })
        },
        9594: function(e, t) {
            e.exports = {
                doubles: {
                    step: 4,
                    points: [
                        ["e60fce93b59e9ec53011aabc21c23e97b2a31369b87a5ae9c44ee89e2a6dec0a", "f7e3507399e595929db99f34f57937101296891e44d23f0be1f32cce69616821"],
                        ["8282263212c609d9ea2a6e3e172de238d8c39cabd5ac1ca10646e23fd5f51508", "11f8a8098557dfe45e8256e830b60ace62d613ac2f7b17bed31b6eaff6e26caf"],
                        ["175e159f728b865a72f99cc6c6fc846de0b93833fd2222ed73fce5b551e5b739", "d3506e0d9e3c79eba4ef97a51ff71f5eacb5955add24345c6efa6ffee9fed695"],
                        ["363d90d447b00c9c99ceac05b6262ee053441c7e55552ffe526bad8f83ff4640", "4e273adfc732221953b445397f3363145b9a89008199ecb62003c7f3bee9de9"],
                        ["8b4b5f165df3c2be8c6244b5b745638843e4a781a15bcd1b69f79a55dffdf80c", "4aad0a6f68d308b4b3fbd7813ab0da04f9e336546162ee56b3eff0c65fd4fd36"],
                        ["723cbaa6e5db996d6bf771c00bd548c7b700dbffa6c0e77bcb6115925232fcda", "96e867b5595cc498a921137488824d6e2660a0653779494801dc069d9eb39f5f"],
                        ["eebfa4d493bebf98ba5feec812c2d3b50947961237a919839a533eca0e7dd7fa", "5d9a8ca3970ef0f269ee7edaf178089d9ae4cdc3a711f712ddfd4fdae1de8999"],
                        ["100f44da696e71672791d0a09b7bde459f1215a29b3c03bfefd7835b39a48db0", "cdd9e13192a00b772ec8f3300c090666b7ff4a18ff5195ac0fbd5cd62bc65a09"],
                        ["e1031be262c7ed1b1dc9227a4a04c017a77f8d4464f3b3852c8acde6e534fd2d", "9d7061928940405e6bb6a4176597535af292dd419e1ced79a44f18f29456a00d"],
                        ["feea6cae46d55b530ac2839f143bd7ec5cf8b266a41d6af52d5e688d9094696d", "e57c6b6c97dce1bab06e4e12bf3ecd5c981c8957cc41442d3155debf18090088"],
                        ["da67a91d91049cdcb367be4be6ffca3cfeed657d808583de33fa978bc1ec6cb1", "9bacaa35481642bc41f463f7ec9780e5dec7adc508f740a17e9ea8e27a68be1d"],
                        ["53904faa0b334cdda6e000935ef22151ec08d0f7bb11069f57545ccc1a37b7c0", "5bc087d0bc80106d88c9eccac20d3c1c13999981e14434699dcb096b022771c8"],
                        ["8e7bcd0bd35983a7719cca7764ca906779b53a043a9b8bcaeff959f43ad86047", "10b7770b2a3da4b3940310420ca9514579e88e2e47fd68b3ea10047e8460372a"],
                        ["385eed34c1cdff21e6d0818689b81bde71a7f4f18397e6690a841e1599c43862", "283bebc3e8ea23f56701de19e9ebf4576b304eec2086dc8cc0458fe5542e5453"],
                        ["6f9d9b803ecf191637c73a4413dfa180fddf84a5947fbc9c606ed86c3fac3a7", "7c80c68e603059ba69b8e2a30e45c4d47ea4dd2f5c281002d86890603a842160"],
                        ["3322d401243c4e2582a2147c104d6ecbf774d163db0f5e5313b7e0e742d0e6bd", "56e70797e9664ef5bfb019bc4ddaf9b72805f63ea2873af624f3a2e96c28b2a0"],
                        ["85672c7d2de0b7da2bd1770d89665868741b3f9af7643397721d74d28134ab83", "7c481b9b5b43b2eb6374049bfa62c2e5e77f17fcc5298f44c8e3094f790313a6"],
                        ["948bf809b1988a46b06c9f1919413b10f9226c60f668832ffd959af60c82a0a", "53a562856dcb6646dc6b74c5d1c3418c6d4dff08c97cd2bed4cb7f88d8c8e589"],
                        ["6260ce7f461801c34f067ce0f02873a8f1b0e44dfc69752accecd819f38fd8e8", "bc2da82b6fa5b571a7f09049776a1ef7ecd292238051c198c1a84e95b2b4ae17"],
                        ["e5037de0afc1d8d43d8348414bbf4103043ec8f575bfdc432953cc8d2037fa2d", "4571534baa94d3b5f9f98d09fb990bddbd5f5b03ec481f10e0e5dc841d755bda"],
                        ["e06372b0f4a207adf5ea905e8f1771b4e7e8dbd1c6a6c5b725866a0ae4fce725", "7a908974bce18cfe12a27bb2ad5a488cd7484a7787104870b27034f94eee31dd"],
                        ["213c7a715cd5d45358d0bbf9dc0ce02204b10bdde2a3f58540ad6908d0559754", "4b6dad0b5ae462507013ad06245ba190bb4850f5f36a7eeddff2c27534b458f2"],
                        ["4e7c272a7af4b34e8dbb9352a5419a87e2838c70adc62cddf0cc3a3b08fbd53c", "17749c766c9d0b18e16fd09f6def681b530b9614bff7dd33e0b3941817dcaae6"],
                        ["fea74e3dbe778b1b10f238ad61686aa5c76e3db2be43057632427e2840fb27b6", "6e0568db9b0b13297cf674deccb6af93126b596b973f7b77701d3db7f23cb96f"],
                        ["76e64113f677cf0e10a2570d599968d31544e179b760432952c02a4417bdde39", "c90ddf8dee4e95cf577066d70681f0d35e2a33d2b56d2032b4b1752d1901ac01"],
                        ["c738c56b03b2abe1e8281baa743f8f9a8f7cc643df26cbee3ab150242bcbb891", "893fb578951ad2537f718f2eacbfbbbb82314eef7880cfe917e735d9699a84c3"],
                        ["d895626548b65b81e264c7637c972877d1d72e5f3a925014372e9f6588f6c14b", "febfaa38f2bc7eae728ec60818c340eb03428d632bb067e179363ed75d7d991f"],
                        ["b8da94032a957518eb0f6433571e8761ceffc73693e84edd49150a564f676e03", "2804dfa44805a1e4d7c99cc9762808b092cc584d95ff3b511488e4e74efdf6e7"],
                        ["e80fea14441fb33a7d8adab9475d7fab2019effb5156a792f1a11778e3c0df5d", "eed1de7f638e00771e89768ca3ca94472d155e80af322ea9fcb4291b6ac9ec78"],
                        ["a301697bdfcd704313ba48e51d567543f2a182031efd6915ddc07bbcc4e16070", "7370f91cfb67e4f5081809fa25d40f9b1735dbf7c0a11a130c0d1a041e177ea1"],
                        ["90ad85b389d6b936463f9d0512678de208cc330b11307fffab7ac63e3fb04ed4", "e507a3620a38261affdcbd9427222b839aefabe1582894d991d4d48cb6ef150"],
                        ["8f68b9d2f63b5f339239c1ad981f162ee88c5678723ea3351b7b444c9ec4c0da", "662a9f2dba063986de1d90c2b6be215dbbea2cfe95510bfdf23cbf79501fff82"],
                        ["e4f3fb0176af85d65ff99ff9198c36091f48e86503681e3e6686fd5053231e11", "1e63633ad0ef4f1c1661a6d0ea02b7286cc7e74ec951d1c9822c38576feb73bc"],
                        ["8c00fa9b18ebf331eb961537a45a4266c7034f2f0d4e1d0716fb6eae20eae29e", "efa47267fea521a1a9dc343a3736c974c2fadafa81e36c54e7d2a4c66702414b"],
                        ["e7a26ce69dd4829f3e10cec0a9e98ed3143d084f308b92c0997fddfc60cb3e41", "2a758e300fa7984b471b006a1aafbb18d0a6b2c0420e83e20e8a9421cf2cfd51"],
                        ["b6459e0ee3662ec8d23540c223bcbdc571cbcb967d79424f3cf29eb3de6b80ef", "67c876d06f3e06de1dadf16e5661db3c4b3ae6d48e35b2ff30bf0b61a71ba45"],
                        ["d68a80c8280bb840793234aa118f06231d6f1fc67e73c5a5deda0f5b496943e8", "db8ba9fff4b586d00c4b1f9177b0e28b5b0e7b8f7845295a294c84266b133120"],
                        ["324aed7df65c804252dc0270907a30b09612aeb973449cea4095980fc28d3d5d", "648a365774b61f2ff130c0c35aec1f4f19213b0c7e332843967224af96ab7c84"],
                        ["4df9c14919cde61f6d51dfdbe5fee5dceec4143ba8d1ca888e8bd373fd054c96", "35ec51092d8728050974c23a1d85d4b5d506cdc288490192ebac06cad10d5d"],
                        ["9c3919a84a474870faed8a9c1cc66021523489054d7f0308cbfc99c8ac1f98cd", "ddb84f0f4a4ddd57584f044bf260e641905326f76c64c8e6be7e5e03d4fc599d"],
                        ["6057170b1dd12fdf8de05f281d8e06bb91e1493a8b91d4cc5a21382120a959e5", "9a1af0b26a6a4807add9a2daf71df262465152bc3ee24c65e899be932385a2a8"],
                        ["a576df8e23a08411421439a4518da31880cef0fba7d4df12b1a6973eecb94266", "40a6bf20e76640b2c92b97afe58cd82c432e10a7f514d9f3ee8be11ae1b28ec8"],
                        ["7778a78c28dec3e30a05fe9629de8c38bb30d1f5cf9a3a208f763889be58ad71", "34626d9ab5a5b22ff7098e12f2ff580087b38411ff24ac563b513fc1fd9f43ac"],
                        ["928955ee637a84463729fd30e7afd2ed5f96274e5ad7e5cb09eda9c06d903ac", "c25621003d3f42a827b78a13093a95eeac3d26efa8a8d83fc5180e935bcd091f"],
                        ["85d0fef3ec6db109399064f3a0e3b2855645b4a907ad354527aae75163d82751", "1f03648413a38c0be29d496e582cf5663e8751e96877331582c237a24eb1f962"],
                        ["ff2b0dce97eece97c1c9b6041798b85dfdfb6d8882da20308f5404824526087e", "493d13fef524ba188af4c4dc54d07936c7b7ed6fb90e2ceb2c951e01f0c29907"],
                        ["827fbbe4b1e880ea9ed2b2e6301b212b57f1ee148cd6dd28780e5e2cf856e241", "c60f9c923c727b0b71bef2c67d1d12687ff7a63186903166d605b68baec293ec"],
                        ["eaa649f21f51bdbae7be4ae34ce6e5217a58fdce7f47f9aa7f3b58fa2120e2b3", "be3279ed5bbbb03ac69a80f89879aa5a01a6b965f13f7e59d47a5305ba5ad93d"],
                        ["e4a42d43c5cf169d9391df6decf42ee541b6d8f0c9a137401e23632dda34d24f", "4d9f92e716d1c73526fc99ccfb8ad34ce886eedfa8d8e4f13a7f7131deba9414"],
                        ["1ec80fef360cbdd954160fadab352b6b92b53576a88fea4947173b9d4300bf19", "aeefe93756b5340d2f3a4958a7abbf5e0146e77f6295a07b671cdc1cc107cefd"],
                        ["146a778c04670c2f91b00af4680dfa8bce3490717d58ba889ddb5928366642be", "b318e0ec3354028add669827f9d4b2870aaa971d2f7e5ed1d0b297483d83efd0"],
                        ["fa50c0f61d22e5f07e3acebb1aa07b128d0012209a28b9776d76a8793180eef9", "6b84c6922397eba9b72cd2872281a68a5e683293a57a213b38cd8d7d3f4f2811"],
                        ["da1d61d0ca721a11b1a5bf6b7d88e8421a288ab5d5bba5220e53d32b5f067ec2", "8157f55a7c99306c79c0766161c91e2966a73899d279b48a655fba0f1ad836f1"],
                        ["a8e282ff0c9706907215ff98e8fd416615311de0446f1e062a73b0610d064e13", "7f97355b8db81c09abfb7f3c5b2515888b679a3e50dd6bd6cef7c73111f4cc0c"],
                        ["174a53b9c9a285872d39e56e6913cab15d59b1fa512508c022f382de8319497c", "ccc9dc37abfc9c1657b4155f2c47f9e6646b3a1d8cb9854383da13ac079afa73"],
                        ["959396981943785c3d3e57edf5018cdbe039e730e4918b3d884fdff09475b7ba", "2e7e552888c331dd8ba0386a4b9cd6849c653f64c8709385e9b8abf87524f2fd"],
                        ["d2a63a50ae401e56d645a1153b109a8fcca0a43d561fba2dbb51340c9d82b151", "e82d86fb6443fcb7565aee58b2948220a70f750af484ca52d4142174dcf89405"],
                        ["64587e2335471eb890ee7896d7cfdc866bacbdbd3839317b3436f9b45617e073", "d99fcdd5bf6902e2ae96dd6447c299a185b90a39133aeab358299e5e9faf6589"],
                        ["8481bde0e4e4d885b3a546d3e549de042f0aa6cea250e7fd358d6c86dd45e458", "38ee7b8cba5404dd84a25bf39cecb2ca900a79c42b262e556d64b1b59779057e"],
                        ["13464a57a78102aa62b6979ae817f4637ffcfed3c4b1ce30bcd6303f6caf666b", "69be159004614580ef7e433453ccb0ca48f300a81d0942e13f495a907f6ecc27"],
                        ["bc4a9df5b713fe2e9aef430bcc1dc97a0cd9ccede2f28588cada3a0d2d83f366", "d3a81ca6e785c06383937adf4b798caa6e8a9fbfa547b16d758d666581f33c1"],
                        ["8c28a97bf8298bc0d23d8c749452a32e694b65e30a9472a3954ab30fe5324caa", "40a30463a3305193378fedf31f7cc0eb7ae784f0451cb9459e71dc73cbef9482"],
                        ["8ea9666139527a8c1dd94ce4f071fd23c8b350c5a4bb33748c4ba111faccae0", "620efabbc8ee2782e24e7c0cfb95c5d735b783be9cf0f8e955af34a30e62b945"],
                        ["dd3625faef5ba06074669716bbd3788d89bdde815959968092f76cc4eb9a9787", "7a188fa3520e30d461da2501045731ca941461982883395937f68d00c644a573"],
                        ["f710d79d9eb962297e4f6232b40e8f7feb2bc63814614d692c12de752408221e", "ea98e67232d3b3295d3b535532115ccac8612c721851617526ae47a9c77bfc82"]
                    ]
                },
                naf: {
                    wnd: 7,
                    points: [
                        ["f9308a019258c31049344f85f89d5229b531c845836f99b08601f113bce036f9", "388f7b0f632de8140fe337e62a37f3566500a99934c2231b6cb9fd7584b8e672"],
                        ["2f8bde4d1a07209355b4a7250a5c5128e88b84bddc619ab7cba8d569b240efe4", "d8ac222636e5e3d6d4dba9dda6c9c426f788271bab0d6840dca87d3aa6ac62d6"],
                        ["5cbdf0646e5db4eaa398f365f2ea7a0e3d419b7e0330e39ce92bddedcac4f9bc", "6aebca40ba255960a3178d6d861a54dba813d0b813fde7b5a5082628087264da"],
                        ["acd484e2f0c7f65309ad178a9f559abde09796974c57e714c35f110dfc27ccbe", "cc338921b0a7d9fd64380971763b61e9add888a4375f8e0f05cc262ac64f9c37"],
                        ["774ae7f858a9411e5ef4246b70c65aac5649980be5c17891bbec17895da008cb", "d984a032eb6b5e190243dd56d7b7b365372db1e2dff9d6a8301d74c9c953c61b"],
                        ["f28773c2d975288bc7d1d205c3748651b075fbc6610e58cddeeddf8f19405aa8", "ab0902e8d880a89758212eb65cdaf473a1a06da521fa91f29b5cb52db03ed81"],
                        ["d7924d4f7d43ea965a465ae3095ff41131e5946f3c85f79e44adbcf8e27e080e", "581e2872a86c72a683842ec228cc6defea40af2bd896d3a5c504dc9ff6a26b58"],
                        ["defdea4cdb677750a420fee807eacf21eb9898ae79b9768766e4faa04a2d4a34", "4211ab0694635168e997b0ead2a93daeced1f4a04a95c0f6cfb199f69e56eb77"],
                        ["2b4ea0a797a443d293ef5cff444f4979f06acfebd7e86d277475656138385b6c", "85e89bc037945d93b343083b5a1c86131a01f60c50269763b570c854e5c09b7a"],
                        ["352bbf4a4cdd12564f93fa332ce333301d9ad40271f8107181340aef25be59d5", "321eb4075348f534d59c18259dda3e1f4a1b3b2e71b1039c67bd3d8bcf81998c"],
                        ["2fa2104d6b38d11b0230010559879124e42ab8dfeff5ff29dc9cdadd4ecacc3f", "2de1068295dd865b64569335bd5dd80181d70ecfc882648423ba76b532b7d67"],
                        ["9248279b09b4d68dab21a9b066edda83263c3d84e09572e269ca0cd7f5453714", "73016f7bf234aade5d1aa71bdea2b1ff3fc0de2a887912ffe54a32ce97cb3402"],
                        ["daed4f2be3a8bf278e70132fb0beb7522f570e144bf615c07e996d443dee8729", "a69dce4a7d6c98e8d4a1aca87ef8d7003f83c230f3afa726ab40e52290be1c55"],
                        ["c44d12c7065d812e8acf28d7cbb19f9011ecd9e9fdf281b0e6a3b5e87d22e7db", "2119a460ce326cdc76c45926c982fdac0e106e861edf61c5a039063f0e0e6482"],
                        ["6a245bf6dc698504c89a20cfded60853152b695336c28063b61c65cbd269e6b4", "e022cf42c2bd4a708b3f5126f16a24ad8b33ba48d0423b6efd5e6348100d8a82"],
                        ["1697ffa6fd9de627c077e3d2fe541084ce13300b0bec1146f95ae57f0d0bd6a5", "b9c398f186806f5d27561506e4557433a2cf15009e498ae7adee9d63d01b2396"],
                        ["605bdb019981718b986d0f07e834cb0d9deb8360ffb7f61df982345ef27a7479", "2972d2de4f8d20681a78d93ec96fe23c26bfae84fb14db43b01e1e9056b8c49"],
                        ["62d14dab4150bf497402fdc45a215e10dcb01c354959b10cfe31c7e9d87ff33d", "80fc06bd8cc5b01098088a1950eed0db01aa132967ab472235f5642483b25eaf"],
                        ["80c60ad0040f27dade5b4b06c408e56b2c50e9f56b9b8b425e555c2f86308b6f", "1c38303f1cc5c30f26e66bad7fe72f70a65eed4cbe7024eb1aa01f56430bd57a"],
                        ["7a9375ad6167ad54aa74c6348cc54d344cc5dc9487d847049d5eabb0fa03c8fb", "d0e3fa9eca8726909559e0d79269046bdc59ea10c70ce2b02d499ec224dc7f7"],
                        ["d528ecd9b696b54c907a9ed045447a79bb408ec39b68df504bb51f459bc3ffc9", "eecf41253136e5f99966f21881fd656ebc4345405c520dbc063465b521409933"],
                        ["49370a4b5f43412ea25f514e8ecdad05266115e4a7ecb1387231808f8b45963", "758f3f41afd6ed428b3081b0512fd62a54c3f3afbb5b6764b653052a12949c9a"],
                        ["77f230936ee88cbbd73df930d64702ef881d811e0e1498e2f1c13eb1fc345d74", "958ef42a7886b6400a08266e9ba1b37896c95330d97077cbbe8eb3c7671c60d6"],
                        ["f2dac991cc4ce4b9ea44887e5c7c0bce58c80074ab9d4dbaeb28531b7739f530", "e0dedc9b3b2f8dad4da1f32dec2531df9eb5fbeb0598e4fd1a117dba703a3c37"],
                        ["463b3d9f662621fb1b4be8fbbe2520125a216cdfc9dae3debcba4850c690d45b", "5ed430d78c296c3543114306dd8622d7c622e27c970a1de31cb377b01af7307e"],
                        ["f16f804244e46e2a09232d4aff3b59976b98fac14328a2d1a32496b49998f247", "cedabd9b82203f7e13d206fcdf4e33d92a6c53c26e5cce26d6579962c4e31df6"],
                        ["caf754272dc84563b0352b7a14311af55d245315ace27c65369e15f7151d41d1", "cb474660ef35f5f2a41b643fa5e460575f4fa9b7962232a5c32f908318a04476"],
                        ["2600ca4b282cb986f85d0f1709979d8b44a09c07cb86d7c124497bc86f082120", "4119b88753c15bd6a693b03fcddbb45d5ac6be74ab5f0ef44b0be9475a7e4b40"],
                        ["7635ca72d7e8432c338ec53cd12220bc01c48685e24f7dc8c602a7746998e435", "91b649609489d613d1d5e590f78e6d74ecfc061d57048bad9e76f302c5b9c61"],
                        ["754e3239f325570cdbbf4a87deee8a66b7f2b33479d468fbc1a50743bf56cc18", "673fb86e5bda30fb3cd0ed304ea49a023ee33d0197a695d0c5d98093c536683"],
                        ["e3e6bd1071a1e96aff57859c82d570f0330800661d1c952f9fe2694691d9b9e8", "59c9e0bba394e76f40c0aa58379a3cb6a5a2283993e90c4167002af4920e37f5"],
                        ["186b483d056a033826ae73d88f732985c4ccb1f32ba35f4b4cc47fdcf04aa6eb", "3b952d32c67cf77e2e17446e204180ab21fb8090895138b4a4a797f86e80888b"],
                        ["df9d70a6b9876ce544c98561f4be4f725442e6d2b737d9c91a8321724ce0963f", "55eb2dafd84d6ccd5f862b785dc39d4ab157222720ef9da217b8c45cf2ba2417"],
                        ["5edd5cc23c51e87a497ca815d5dce0f8ab52554f849ed8995de64c5f34ce7143", "efae9c8dbc14130661e8cec030c89ad0c13c66c0d17a2905cdc706ab7399a868"],
                        ["290798c2b6476830da12fe02287e9e777aa3fba1c355b17a722d362f84614fba", "e38da76dcd440621988d00bcf79af25d5b29c094db2a23146d003afd41943e7a"],
                        ["af3c423a95d9f5b3054754efa150ac39cd29552fe360257362dfdecef4053b45", "f98a3fd831eb2b749a93b0e6f35cfb40c8cd5aa667a15581bc2feded498fd9c6"],
                        ["766dbb24d134e745cccaa28c99bf274906bb66b26dcf98df8d2fed50d884249a", "744b1152eacbe5e38dcc887980da38b897584a65fa06cedd2c924f97cbac5996"],
                        ["59dbf46f8c94759ba21277c33784f41645f7b44f6c596a58ce92e666191abe3e", "c534ad44175fbc300f4ea6ce648309a042ce739a7919798cd85e216c4a307f6e"],
                        ["f13ada95103c4537305e691e74e9a4a8dd647e711a95e73cb62dc6018cfd87b8", "e13817b44ee14de663bf4bc808341f326949e21a6a75c2570778419bdaf5733d"],
                        ["7754b4fa0e8aced06d4167a2c59cca4cda1869c06ebadfb6488550015a88522c", "30e93e864e669d82224b967c3020b8fa8d1e4e350b6cbcc537a48b57841163a2"],
                        ["948dcadf5990e048aa3874d46abef9d701858f95de8041d2a6828c99e2262519", "e491a42537f6e597d5d28a3224b1bc25df9154efbd2ef1d2cbba2cae5347d57e"],
                        ["7962414450c76c1689c7b48f8202ec37fb224cf5ac0bfa1570328a8a3d7c77ab", "100b610ec4ffb4760d5c1fc133ef6f6b12507a051f04ac5760afa5b29db83437"],
                        ["3514087834964b54b15b160644d915485a16977225b8847bb0dd085137ec47ca", "ef0afbb2056205448e1652c48e8127fc6039e77c15c2378b7e7d15a0de293311"],
                        ["d3cc30ad6b483e4bc79ce2c9dd8bc54993e947eb8df787b442943d3f7b527eaf", "8b378a22d827278d89c5e9be8f9508ae3c2ad46290358630afb34db04eede0a4"],
                        ["1624d84780732860ce1c78fcbfefe08b2b29823db913f6493975ba0ff4847610", "68651cf9b6da903e0914448c6cd9d4ca896878f5282be4c8cc06e2a404078575"],
                        ["733ce80da955a8a26902c95633e62a985192474b5af207da6df7b4fd5fc61cd4", "f5435a2bd2badf7d485a4d8b8db9fcce3e1ef8e0201e4578c54673bc1dc5ea1d"],
                        ["15d9441254945064cf1a1c33bbd3b49f8966c5092171e699ef258dfab81c045c", "d56eb30b69463e7234f5137b73b84177434800bacebfc685fc37bbe9efe4070d"],
                        ["a1d0fcf2ec9de675b612136e5ce70d271c21417c9d2b8aaaac138599d0717940", "edd77f50bcb5a3cab2e90737309667f2641462a54070f3d519212d39c197a629"],
                        ["e22fbe15c0af8ccc5780c0735f84dbe9a790badee8245c06c7ca37331cb36980", "a855babad5cd60c88b430a69f53a1a7a38289154964799be43d06d77d31da06"],
                        ["311091dd9860e8e20ee13473c1155f5f69635e394704eaa74009452246cfa9b3", "66db656f87d1f04fffd1f04788c06830871ec5a64feee685bd80f0b1286d8374"],
                        ["34c1fd04d301be89b31c0442d3e6ac24883928b45a9340781867d4232ec2dbdf", "9414685e97b1b5954bd46f730174136d57f1ceeb487443dc5321857ba73abee"],
                        ["f219ea5d6b54701c1c14de5b557eb42a8d13f3abbcd08affcc2a5e6b049b8d63", "4cb95957e83d40b0f73af4544cccf6b1f4b08d3c07b27fb8d8c2962a400766d1"],
                        ["d7b8740f74a8fbaab1f683db8f45de26543a5490bca627087236912469a0b448", "fa77968128d9c92ee1010f337ad4717eff15db5ed3c049b3411e0315eaa4593b"],
                        ["32d31c222f8f6f0ef86f7c98d3a3335ead5bcd32abdd94289fe4d3091aa824bf", "5f3032f5892156e39ccd3d7915b9e1da2e6dac9e6f26e961118d14b8462e1661"],
                        ["7461f371914ab32671045a155d9831ea8793d77cd59592c4340f86cbc18347b5", "8ec0ba238b96bec0cbdddcae0aa442542eee1ff50c986ea6b39847b3cc092ff6"],
                        ["ee079adb1df1860074356a25aa38206a6d716b2c3e67453d287698bad7b2b2d6", "8dc2412aafe3be5c4c5f37e0ecc5f9f6a446989af04c4e25ebaac479ec1c8c1e"],
                        ["16ec93e447ec83f0467b18302ee620f7e65de331874c9dc72bfd8616ba9da6b5", "5e4631150e62fb40d0e8c2a7ca5804a39d58186a50e497139626778e25b0674d"],
                        ["eaa5f980c245f6f038978290afa70b6bd8855897f98b6aa485b96065d537bd99", "f65f5d3e292c2e0819a528391c994624d784869d7e6ea67fb18041024edc07dc"],
                        ["78c9407544ac132692ee1910a02439958ae04877151342ea96c4b6b35a49f51", "f3e0319169eb9b85d5404795539a5e68fa1fbd583c064d2462b675f194a3ddb4"],
                        ["494f4be219a1a77016dcd838431aea0001cdc8ae7a6fc688726578d9702857a5", "42242a969283a5f339ba7f075e36ba2af925ce30d767ed6e55f4b031880d562c"],
                        ["a598a8030da6d86c6bc7f2f5144ea549d28211ea58faa70ebf4c1e665c1fe9b5", "204b5d6f84822c307e4b4a7140737aec23fc63b65b35f86a10026dbd2d864e6b"],
                        ["c41916365abb2b5d09192f5f2dbeafec208f020f12570a184dbadc3e58595997", "4f14351d0087efa49d245b328984989d5caf9450f34bfc0ed16e96b58fa9913"],
                        ["841d6063a586fa475a724604da03bc5b92a2e0d2e0a36acfe4c73a5514742881", "73867f59c0659e81904f9a1c7543698e62562d6744c169ce7a36de01a8d6154"],
                        ["5e95bb399a6971d376026947f89bde2f282b33810928be4ded112ac4d70e20d5", "39f23f366809085beebfc71181313775a99c9aed7d8ba38b161384c746012865"],
                        ["36e4641a53948fd476c39f8a99fd974e5ec07564b5315d8bf99471bca0ef2f66", "d2424b1b1abe4eb8164227b085c9aa9456ea13493fd563e06fd51cf5694c78fc"],
                        ["336581ea7bfbbb290c191a2f507a41cf5643842170e914faeab27c2c579f726", "ead12168595fe1be99252129b6e56b3391f7ab1410cd1e0ef3dcdcabd2fda224"],
                        ["8ab89816dadfd6b6a1f2634fcf00ec8403781025ed6890c4849742706bd43ede", "6fdcef09f2f6d0a044e654aef624136f503d459c3e89845858a47a9129cdd24e"],
                        ["1e33f1a746c9c5778133344d9299fcaa20b0938e8acff2544bb40284b8c5fb94", "60660257dd11b3aa9c8ed618d24edff2306d320f1d03010e33a7d2057f3b3b6"],
                        ["85b7c1dcb3cec1b7ee7f30ded79dd20a0ed1f4cc18cbcfcfa410361fd8f08f31", "3d98a9cdd026dd43f39048f25a8847f4fcafad1895d7a633c6fed3c35e999511"],
                        ["29df9fbd8d9e46509275f4b125d6d45d7fbe9a3b878a7af872a2800661ac5f51", "b4c4fe99c775a606e2d8862179139ffda61dc861c019e55cd2876eb2a27d84b"],
                        ["a0b1cae06b0a847a3fea6e671aaf8adfdfe58ca2f768105c8082b2e449fce252", "ae434102edde0958ec4b19d917a6a28e6b72da1834aff0e650f049503a296cf2"],
                        ["4e8ceafb9b3e9a136dc7ff67e840295b499dfb3b2133e4ba113f2e4c0e121e5", "cf2174118c8b6d7a4b48f6d534ce5c79422c086a63460502b827ce62a326683c"],
                        ["d24a44e047e19b6f5afb81c7ca2f69080a5076689a010919f42725c2b789a33b", "6fb8d5591b466f8fc63db50f1c0f1c69013f996887b8244d2cdec417afea8fa3"],
                        ["ea01606a7a6c9cdd249fdfcfacb99584001edd28abbab77b5104e98e8e3b35d4", "322af4908c7312b0cfbfe369f7a7b3cdb7d4494bc2823700cfd652188a3ea98d"],
                        ["af8addbf2b661c8a6c6328655eb96651252007d8c5ea31be4ad196de8ce2131f", "6749e67c029b85f52a034eafd096836b2520818680e26ac8f3dfbcdb71749700"],
                        ["e3ae1974566ca06cc516d47e0fb165a674a3dabcfca15e722f0e3450f45889", "2aeabe7e4531510116217f07bf4d07300de97e4874f81f533420a72eeb0bd6a4"],
                        ["591ee355313d99721cf6993ffed1e3e301993ff3ed258802075ea8ced397e246", "b0ea558a113c30bea60fc4775460c7901ff0b053d25ca2bdeee98f1a4be5d196"],
                        ["11396d55fda54c49f19aa97318d8da61fa8584e47b084945077cf03255b52984", "998c74a8cd45ac01289d5833a7beb4744ff536b01b257be4c5767bea93ea57a4"],
                        ["3c5d2a1ba39c5a1790000738c9e0c40b8dcdfd5468754b6405540157e017aa7a", "b2284279995a34e2f9d4de7396fc18b80f9b8b9fdd270f6661f79ca4c81bd257"],
                        ["cc8704b8a60a0defa3a99a7299f2e9c3fbc395afb04ac078425ef8a1793cc030", "bdd46039feed17881d1e0862db347f8cf395b74fc4bcdc4e940b74e3ac1f1b13"],
                        ["c533e4f7ea8555aacd9777ac5cad29b97dd4defccc53ee7ea204119b2889b197", "6f0a256bc5efdf429a2fb6242f1a43a2d9b925bb4a4b3a26bb8e0f45eb596096"],
                        ["c14f8f2ccb27d6f109f6d08d03cc96a69ba8c34eec07bbcf566d48e33da6593", "c359d6923bb398f7fd4473e16fe1c28475b740dd098075e6c0e8649113dc3a38"],
                        ["a6cbc3046bc6a450bac24789fa17115a4c9739ed75f8f21ce441f72e0b90e6ef", "21ae7f4680e889bb130619e2c0f95a360ceb573c70603139862afd617fa9b9f"],
                        ["347d6d9a02c48927ebfb86c1359b1caf130a3c0267d11ce6344b39f99d43cc38", "60ea7f61a353524d1c987f6ecec92f086d565ab687870cb12689ff1e31c74448"],
                        ["da6545d2181db8d983f7dcb375ef5866d47c67b1bf31c8cf855ef7437b72656a", "49b96715ab6878a79e78f07ce5680c5d6673051b4935bd897fea824b77dc208a"],
                        ["c40747cc9d012cb1a13b8148309c6de7ec25d6945d657146b9d5994b8feb1111", "5ca560753be2a12fc6de6caf2cb489565db936156b9514e1bb5e83037e0fa2d4"],
                        ["4e42c8ec82c99798ccf3a610be870e78338c7f713348bd34c8203ef4037f3502", "7571d74ee5e0fb92a7a8b33a07783341a5492144cc54bcc40a94473693606437"],
                        ["3775ab7089bc6af823aba2e1af70b236d251cadb0c86743287522a1b3b0dedea", "be52d107bcfa09d8bcb9736a828cfa7fac8db17bf7a76a2c42ad961409018cf7"],
                        ["cee31cbf7e34ec379d94fb814d3d775ad954595d1314ba8846959e3e82f74e26", "8fd64a14c06b589c26b947ae2bcf6bfa0149ef0be14ed4d80f448a01c43b1c6d"],
                        ["b4f9eaea09b6917619f6ea6a4eb5464efddb58fd45b1ebefcdc1a01d08b47986", "39e5c9925b5a54b07433a4f18c61726f8bb131c012ca542eb24a8ac07200682a"],
                        ["d4263dfc3d2df923a0179a48966d30ce84e2515afc3dccc1b77907792ebcc60e", "62dfaf07a0f78feb30e30d6295853ce189e127760ad6cf7fae164e122a208d54"],
                        ["48457524820fa65a4f8d35eb6930857c0032acc0a4a2de422233eeda897612c4", "25a748ab367979d98733c38a1fa1c2e7dc6cc07db2d60a9ae7a76aaa49bd0f77"],
                        ["dfeeef1881101f2cb11644f3a2afdfc2045e19919152923f367a1767c11cceda", "ecfb7056cf1de042f9420bab396793c0c390bde74b4bbdff16a83ae09a9a7517"],
                        ["6d7ef6b17543f8373c573f44e1f389835d89bcbc6062ced36c82df83b8fae859", "cd450ec335438986dfefa10c57fea9bcc521a0959b2d80bbf74b190dca712d10"],
                        ["e75605d59102a5a2684500d3b991f2e3f3c88b93225547035af25af66e04541f", "f5c54754a8f71ee540b9b48728473e314f729ac5308b06938360990e2bfad125"],
                        ["eb98660f4c4dfaa06a2be453d5020bc99a0c2e60abe388457dd43fefb1ed620c", "6cb9a8876d9cb8520609af3add26cd20a0a7cd8a9411131ce85f44100099223e"],
                        ["13e87b027d8514d35939f2e6892b19922154596941888336dc3563e3b8dba942", "fef5a3c68059a6dec5d624114bf1e91aac2b9da568d6abeb2570d55646b8adf1"],
                        ["ee163026e9fd6fe017c38f06a5be6fc125424b371ce2708e7bf4491691e5764a", "1acb250f255dd61c43d94ccc670d0f58f49ae3fa15b96623e5430da0ad6c62b2"],
                        ["b268f5ef9ad51e4d78de3a750c2dc89b1e626d43505867999932e5db33af3d80", "5f310d4b3c99b9ebb19f77d41c1dee018cf0d34fd4191614003e945a1216e423"],
                        ["ff07f3118a9df035e9fad85eb6c7bfe42b02f01ca99ceea3bf7ffdba93c4750d", "438136d603e858a3a5c440c38eccbaddc1d2942114e2eddd4740d098ced1f0d8"],
                        ["8d8b9855c7c052a34146fd20ffb658bea4b9f69e0d825ebec16e8c3ce2b526a1", "cdb559eedc2d79f926baf44fb84ea4d44bcf50fee51d7ceb30e2e7f463036758"],
                        ["52db0b5384dfbf05bfa9d472d7ae26dfe4b851ceca91b1eba54263180da32b63", "c3b997d050ee5d423ebaf66a6db9f57b3180c902875679de924b69d84a7b375"],
                        ["e62f9490d3d51da6395efd24e80919cc7d0f29c3f3fa48c6fff543becbd43352", "6d89ad7ba4876b0b22c2ca280c682862f342c8591f1daf5170e07bfd9ccafa7d"],
                        ["7f30ea2476b399b4957509c88f77d0191afa2ff5cb7b14fd6d8e7d65aaab1193", "ca5ef7d4b231c94c3b15389a5f6311e9daff7bb67b103e9880ef4bff637acaec"],
                        ["5098ff1e1d9f14fb46a210fada6c903fef0fb7b4a1dd1d9ac60a0361800b7a00", "9731141d81fc8f8084d37c6e7542006b3ee1b40d60dfe5362a5b132fd17ddc0"],
                        ["32b78c7de9ee512a72895be6b9cbefa6e2f3c4ccce445c96b9f2c81e2778ad58", "ee1849f513df71e32efc3896ee28260c73bb80547ae2275ba497237794c8753c"],
                        ["e2cb74fddc8e9fbcd076eef2a7c72b0ce37d50f08269dfc074b581550547a4f7", "d3aa2ed71c9dd2247a62df062736eb0baddea9e36122d2be8641abcb005cc4a4"],
                        ["8438447566d4d7bedadc299496ab357426009a35f235cb141be0d99cd10ae3a8", "c4e1020916980a4da5d01ac5e6ad330734ef0d7906631c4f2390426b2edd791f"],
                        ["4162d488b89402039b584c6fc6c308870587d9c46f660b878ab65c82c711d67e", "67163e903236289f776f22c25fb8a3afc1732f2b84b4e95dbda47ae5a0852649"],
                        ["3fad3fa84caf0f34f0f89bfd2dcf54fc175d767aec3e50684f3ba4a4bf5f683d", "cd1bc7cb6cc407bb2f0ca647c718a730cf71872e7d0d2a53fa20efcdfe61826"],
                        ["674f2600a3007a00568c1a7ce05d0816c1fb84bf1370798f1c69532faeb1a86b", "299d21f9413f33b3edf43b257004580b70db57da0b182259e09eecc69e0d38a5"],
                        ["d32f4da54ade74abb81b815ad1fb3b263d82d6c692714bcff87d29bd5ee9f08f", "f9429e738b8e53b968e99016c059707782e14f4535359d582fc416910b3eea87"],
                        ["30e4e670435385556e593657135845d36fbb6931f72b08cb1ed954f1e3ce3ff6", "462f9bce619898638499350113bbc9b10a878d35da70740dc695a559eb88db7b"],
                        ["be2062003c51cc3004682904330e4dee7f3dcd10b01e580bf1971b04d4cad297", "62188bc49d61e5428573d48a74e1c655b1c61090905682a0d5558ed72dccb9bc"],
                        ["93144423ace3451ed29e0fb9ac2af211cb6e84a601df5993c419859fff5df04a", "7c10dfb164c3425f5c71a3f9d7992038f1065224f72bb9d1d902a6d13037b47c"],
                        ["b015f8044f5fcbdcf21ca26d6c34fb8197829205c7b7d2a7cb66418c157b112c", "ab8c1e086d04e813744a655b2df8d5f83b3cdc6faa3088c1d3aea1454e3a1d5f"],
                        ["d5e9e1da649d97d89e4868117a465a3a4f8a18de57a140d36b3f2af341a21b52", "4cb04437f391ed73111a13cc1d4dd0db1693465c2240480d8955e8592f27447a"],
                        ["d3ae41047dd7ca065dbf8ed77b992439983005cd72e16d6f996a5316d36966bb", "bd1aeb21ad22ebb22a10f0303417c6d964f8cdd7df0aca614b10dc14d125ac46"],
                        ["463e2763d885f958fc66cdd22800f0a487197d0a82e377b49f80af87c897b065", "bfefacdb0e5d0fd7df3a311a94de062b26b80c61fbc97508b79992671ef7ca7f"],
                        ["7985fdfd127c0567c6f53ec1bb63ec3158e597c40bfe747c83cddfc910641917", "603c12daf3d9862ef2b25fe1de289aed24ed291e0ec6708703a5bd567f32ed03"],
                        ["74a1ad6b5f76e39db2dd249410eac7f99e74c59cb83d2d0ed5ff1543da7703e9", "cc6157ef18c9c63cd6193d83631bbea0093e0968942e8c33d5737fd790e0db08"],
                        ["30682a50703375f602d416664ba19b7fc9bab42c72747463a71d0896b22f6da3", "553e04f6b018b4fa6c8f39e7f311d3176290d0e0f19ca73f17714d9977a22ff8"],
                        ["9e2158f0d7c0d5f26c3791efefa79597654e7a2b2464f52b1ee6c1347769ef57", "712fcdd1b9053f09003a3481fa7762e9ffd7c8ef35a38509e2fbf2629008373"],
                        ["176e26989a43c9cfeba4029c202538c28172e566e3c4fce7322857f3be327d66", "ed8cc9d04b29eb877d270b4878dc43c19aefd31f4eee09ee7b47834c1fa4b1c3"],
                        ["75d46efea3771e6e68abb89a13ad747ecf1892393dfc4f1b7004788c50374da8", "9852390a99507679fd0b86fd2b39a868d7efc22151346e1a3ca4726586a6bed8"],
                        ["809a20c67d64900ffb698c4c825f6d5f2310fb0451c869345b7319f645605721", "9e994980d9917e22b76b061927fa04143d096ccc54963e6a5ebfa5f3f8e286c1"],
                        ["1b38903a43f7f114ed4500b4eac7083fdefece1cf29c63528d563446f972c180", "4036edc931a60ae889353f77fd53de4a2708b26b6f5da72ad3394119daf408f9"]
                    ]
                }
            }
        },
        9595: function(e, t, r) {
            "use strict";
            var f = r(5745),
                d = r(5697),
                i = d.utils.assert,
                n = r(9596),
                c = r(9597);

            function a(e) {
                if (!(this instanceof a)) return new a(e);
                "string" == typeof e && (i(d.curves.hasOwnProperty(e), "Unknown curve " + e), e = d.curves[e]), e instanceof d.curves.PresetCurve && (e = {
                    curve: e
                }), this.curve = e.curve.curve, this.n = this.curve.n, this.nh = this.n.shrn(1), this.g = this.curve.g, this.g = e.curve.g, this.g.precompute(e.curve.n.bitLength() + 1), this.hash = e.hash || e.curve.hash
            }
            e.exports = a, a.prototype.keyPair = function(e) {
                return new n(this, e)
            }, a.prototype.keyFromPrivate = function(e, t) {
                return n.fromPrivate(this, e, t)
            }, a.prototype.keyFromPublic = function(e, t) {
                return n.fromPublic(this, e, t)
            }, a.prototype.genKeyPair = function(e) {
                e || (e = {});
                for (var t = new d.hmacDRBG({
                        hash: this.hash,
                        pers: e.pers,
                        entropy: e.entropy || d.rand(this.hash.hmacStrength),
                        nonce: this.n.toArray()
                    }), r = this.n.byteLength(), i = this.n.sub(new f(2));;) {
                    var n = new f(t.generate(r));
                    if (!(n.cmp(i) > 0)) return n.iaddn(1), this.keyFromPrivate(n)
                }
            }, a.prototype._truncateToN = function(e, t) {
                var r = 8 * e.byteLength() - this.n.bitLength();
                return r > 0 && (e = e.shrn(r)), !t && e.cmp(this.n) >= 0 ? e.sub(this.n) : e
            }, a.prototype.sign = function(e, t, r, i) {
                "object" == typeof r && (i = r, r = null), i || (i = {}), t = this.keyFromPrivate(t, r), e = this._truncateToN(new f(e, 16));
                for (var n = this.n.byteLength(), a = t.getPrivate().toArray(), s = a.length; s < 21; s++) a.unshift(0);
                var o = e.toArray();
                for (s = o.length; s < n; s++) o.unshift(0);
                for (var b = new d.hmacDRBG({
                        hash: this.hash,
                        entropy: a,
                        nonce: o
                    }), h = this.n.sub(new f(1));;) {
                    var u = new f(b.generate(this.n.byteLength()));
                    if (!((u = this._truncateToN(u, !0)).cmpn(1) <= 0 || u.cmp(h) >= 0)) {
                        var p = this.g.mul(u);
                        if (!p.isInfinity()) {
                            var l = p.getX().mod(this.n);
                            if (0 !== l.cmpn(0)) {
                                var v = u.invm(this.n).mul(l.mul(t.getPrivate()).iadd(e)).mod(this.n);
                                if (0 !== v.cmpn(0)) return i.canonical && v.cmp(this.nh) > 0 && (v = this.n.sub(v)), new c({
                                    r: l,
                                    s: v
                                })
                            }
                        }
                    }
                }
            }, a.prototype.verify = function(e, t, r, d) {
                e = this._truncateToN(new f(e, 16)), r = this.keyFromPublic(r, d);
                var i = (t = new c(t, "hex")).r,
                    n = t.s;
                if (i.cmpn(1) < 0 || i.cmp(this.n) >= 0) return !1;
                if (n.cmpn(1) < 0 || n.cmp(this.n) >= 0) return !1;
                var a = n.invm(this.n),
                    s = a.mul(e).mod(this.n),
                    o = a.mul(i).mod(this.n),
                    b = this.g.mulAdd(s, r.getPublic(), o);
                return !b.isInfinity() && 0 === b.getX().mod(this.n).cmp(i)
            }
        },
        9596: function(e, t, r) {
            "use strict";
            var f = r(5745),
                d = r(5697).utils;

            function i(e, t) {
                this.ec = e, this.priv = null, this.pub = null, t.priv && this._importPrivate(t.priv, t.privEnc), t.pub && this._importPublic(t.pub, t.pubEnc)
            }
            e.exports = i, i.fromPublic = function(e, t, r) {
                return t instanceof i ? t : new i(e, {
                    pub: t,
                    pubEnc: r
                })
            }, i.fromPrivate = function(e, t, r) {
                return t instanceof i ? t : new i(e, {
                    priv: t,
                    privEnc: r
                })
            }, i.prototype.validate = function() {
                var e = this.getPublic();
                return e.isInfinity() ? {
                    result: !1,
                    reason: "Invalid public key"
                } : e.validate() ? e.mul(this.ec.curve.n).isInfinity() ? {
                    result: !0,
                    reason: null
                } : {
                    result: !1,
                    reason: "Public key * N != O"
                } : {
                    result: !1,
                    reason: "Public key is not a point"
                }
            }, i.prototype.getPublic = function(e, t) {
                if (this.pub || (this.pub = this.ec.g.mul(this.priv)), "string" == typeof e && (t = e, e = null), !t) return this.pub;
                for (var r = this.ec.curve.p.byteLength(), f = this.pub.getX().toArray(), i = f.length; i < r; i++) f.unshift(0);
                if ("mont" !== this.ec.curve.type)
                    if (e) c = [this.pub.getY().isEven() ? 2 : 3].concat(f);
                    else {
                        var n = this.pub.getY().toArray();
                        for (i = n.length; i < r; i++) n.unshift(0);
                        var c = [4].concat(f, n)
                    }
                else c = f;
                return d.encode(c, t)
            }, i.prototype.getPrivate = function(e) {
                return "hex" === e ? this.priv.toString(16, 2) : this.priv
            }, i.prototype._importPrivate = function(e, t) {
                this.priv = new f(e, t || 16), this.priv = this.priv.mod(this.ec.curve.n)
            }, i.prototype._importPublic = function(e, t) {
                if (!e.x && !e.y) return e = d.toArray(e, t), "mont" !== this.ec.curve.type ? this._importPublicShort(e) : this._importPublicMont(e);
                this.pub = this.ec.curve.point(e.x, e.y)
            }, i.prototype._importPublicShort = function(e) {
                var t = this.ec.curve.p.byteLength();
                4 === e[0] && e.length - 1 == 2 * t ? this.pub = this.ec.curve.point(e.slice(1, 1 + t), e.slice(1 + t, 1 + 2 * t)) : 2 !== e[0] && 3 !== e[0] || e.length - 1 !== t || (this.pub = this.ec.curve.pointFromX(3 === e[0], e.slice(1, 1 + t)))
            }, i.prototype._importPublicMont = function(e) {
                this.pub = this.ec.curve.point(e, 1)
            }, i.prototype.derive = function(e) {
                return e.mul(this.priv).getX()
            }, i.prototype.sign = function(e) {
                return this.ec.sign(e, this)
            }, i.prototype.verify = function(e, t) {
                return this.ec.verify(e, t, this)
            }, i.prototype.inspect = function() {
                return "<Key priv: " + (this.priv && this.priv.toString(16, 2)) + " pub: " + (this.pub && this.pub.inspect()) + " >"
            }
        },
        9597: function(e, t, r) {
            "use strict";
            var f = r(5745),
                d = r(5697).utils,
                i = d.assert;

            function n(e, t) {
                if (e instanceof n) return e;
                this._importDER(e, t) || (i(e.r && e.s, "Signature without r or s"), this.r = new f(e.r, 16), this.s = new f(e.s, 16))
            }
            e.exports = n, n.prototype._importDER = function(e, t) {
                if ((e = d.toArray(e, t)).length < 6 || 48 !== e[0] || 2 !== e[2]) return !1;
                if (1 + e[1] > e.length) return !1;
                var r = e[3];
                if (r >= 128) return !1;
                if (4 + r + 2 >= e.length) return !1;
                if (2 !== e[4 + r]) return !1;
                var i = e[5 + r];
                return !(i >= 128) && (!(4 + r + 2 + i > e.length) && (this.r = new f(e.slice(4, 4 + r)), this.s = new f(e.slice(4 + r + 2, 4 + r + 2 + i)), !0))
            }, n.prototype.toDER = function(e) {
                var t = this.r.toArray(),
                    r = this.s.toArray();
                128 & t[0] && (t = [0].concat(t)), 128 & r[0] && (r = [0].concat(r));
                var f = [48, t.length + r.length + 4, 2, t.length];
                return f = f.concat(t, [2, r.length], r), d.encode(f, e)
            }
        },
        9599: function(e, t) {
            e.exports = function(e, t) {
                for (var r = 0, f = 0; f < e.length && f != t.length && 0 == (r = e[f] < t[f] ? -1 : e[f] > t[f] ? 1 : 0); ++f);
                return 0 == r && (t.length > e.length ? r = -1 : e.length > t.length && (r = 1)), r
            }
        },
        9607: function(e, t, r) {
            "use strict";
            var f = r(5489),
                d = r(102),
                i = r(5850),
                n = r(6559),
                c = function(e, t) {
                    if (!(this instanceof c)) return new c(e, t);
                    if (this.extras = {}, this.knownParams = t || [], this.address = this.network = this.amount = this.message = null, "string" == typeof e) {
                        var r = c.parse(e);
                        r.amount && (r.amount = this._parseAmount(r.amount)), this._fromObject(r)
                    } else {
                        if ("object" != typeof e) throw new TypeError("Unrecognized data format.");
                        this._fromObject(e)
                    }
                };
            c.fromString = function(e) {
                if ("string" != typeof e) throw new TypeError("Expected a string");
                return new c(e)
            }, c.fromObject = function(e) {
                return new c(e)
            }, c.isValid = function(e, t) {
                try {
                    new c(e, t)
                } catch (e) {
                    return !1
                }
                return !0
            }, c.parse = function(e) {
                var t = d.parse(e, !0);
                if ("qtum:" !== t.protocol) throw new TypeError("Invalid qtum URI");
                var r = /[^:]*:\/?\/?([^?]*)/.exec(e);
                return t.query.address = r && r[1] || void 0, t.query
            }, c.Members = ["address", "amount", "message", "label", "r"], c.prototype._fromObject = function(e) {
                if (!i.isValid(e.address)) throw new TypeError("Invalid qtum address");
                for (var t in this.address = new i(e.address), this.network = this.address.network, this.amount = e.amount, e)
                    if ("address" !== t && "amount" !== t) {
                        if (/^req-/.exec(t) && -1 === this.knownParams.indexOf(t)) throw Error("Unknown required argument " + t);
                        (c.Members.indexOf(t) > -1 ? this : this.extras)[t] = e[t]
                    }
            }, c.prototype._parseAmount = function(e) {
                if (e = Number(e), isNaN(e)) throw new TypeError("Invalid amount");
                return n.fromBTC(e).toSatoshis()
            }, c.prototype.toObject = c.prototype.toJSON = function() {
                for (var e = {}, t = 0; t < c.Members.length; t++) {
                    var r = c.Members[t];
                    this.hasOwnProperty(r) && void 0 !== this[r] && (e[r] = this[r].toString())
                }
                return f.extend(e, this.extras), e
            }, c.prototype.toString = function() {
                var e = {};
                return this.amount && (e.amount = n.fromSatoshis(this.amount).toBTC()), this.message && (e.message = this.message), this.label && (e.label = this.label), this.r && (e.r = this.r), f.extend(e, this.extras), d.format({
                    protocol: "qtum:",
                    host: this.address,
                    query: e
                })
            }, c.prototype.inspect = function() {
                return "<URI: " + this.toString() + ">"
            }, e.exports = c
        }
    }
]);