(window.webpackJsonp = window.webpackJsonp || []).push([
    [316], {
        5497: function(t, i, r) {
            "use strict";
            var e = r(5650),
                n = r(5483);
            t.exports = {
                checkState: function(t, i) {
                    if (!t) throw new e.InvalidState(i)
                },
                checkArgument: function(t, i, r, n) {
                    if (!t) throw new e.InvalidArgument(i, r, n)
                },
                checkArgumentType: function(t, i, h) {
                    if (h = h || "(unknown name)", n.isString(i)) {
                        if ("Buffer" === i) {
                            if (!r(12).Buffer.isBuffer(t)) throw new e.InvalidArgumentType(t, i, h)
                        } else if (typeof t !== i) throw new e.InvalidArgumentType(t, i, h)
                    } else if (!(t instanceof i)) throw new e.InvalidArgumentType(t, i.name, h)
                }
            }
        },
        5537: function(t, i, r) {
            "use strict";
            var e = r(12),
                n = r(72),
                h = r(5572),
                o = r(5497);

            function s(t, i) {
                if (t.length !== i.length) return !1;
                for (var r = t.length, e = 0; e < r; e++)
                    if (t[e] !== i[e]) return !1;
                return !0
            }
            t.exports = {
                fill: function(t, i) {
                    o.checkArgumentType(t, "Buffer", "buffer"), o.checkArgumentType(i, "number", "value");
                    for (var r = t.length, e = 0; e < r; e++) t[e] = i;
                    return t
                },
                copy: function(t) {
                    var i = Buffer.alloc(t.length);
                    return t.copy(i), i
                },
                isBuffer: function(t) {
                    return e.Buffer.isBuffer(t) || t instanceof Uint8Array
                },
                emptyBuffer: function(t) {
                    o.checkArgumentType(t, "number", "bytes");
                    for (var i = new e.Buffer(t), r = 0; r < t; r++) i.write("\0", r);
                    return i
                },
                concat: e.Buffer.concat,
                equals: s,
                equal: s,
                integerAsSingleByteBuffer: function(t) {
                    return o.checkArgumentType(t, "number", "integer"), new e.Buffer([255 & t])
                },
                integerAsBuffer: function(t) {
                    o.checkArgumentType(t, "number", "integer");
                    var i = [];
                    return i.push(t >> 24 & 255), i.push(t >> 16 & 255), i.push(t >> 8 & 255), i.push(255 & t), Buffer.from(i)
                },
                integerFromBuffer: function(t) {
                    return o.checkArgumentType(t, "Buffer", "buffer"), t[0] << 24 | t[1] << 16 | t[2] << 8 | t[3]
                },
                integerFromSingleByteBuffer: function(t) {
                    return o.checkArgumentType(t, "Buffer", "buffer"), t[0]
                },
                bufferToHex: function(t) {
                    return o.checkArgumentType(t, "Buffer", "buffer"), t.toString("hex")
                },
                reverse: function(t) {
                    for (var i = new e.Buffer(t.length), r = 0; r < t.length; r++) i[r] = t[t.length - r - 1];
                    return i
                },
                hexToBuffer: function(t) {
                    return n(h.isHexa(t)), new e.Buffer(t, "hex")
                }
            }, t.exports.NULL_HASH = t.exports.fill(Buffer.alloc(32), 0), t.exports.EMPTY_BUFFER = Buffer.alloc(0)
        },
        5572: function(t, i, r) {
            "use strict";
            var e = r(5483),
                n = function(t) {
                    return !!e.isString(t) && /^[0-9a-fA-F]+$/.test(t)
                };
            t.exports = {
                isValidJSON: function(t) {
                    var i;
                    if (!e.isString(t)) return !1;
                    try {
                        i = JSON.parse(t)
                    } catch (t) {
                        return !1
                    }
                    return "object" == typeof i
                },
                isHexa: n,
                isHexaString: n,
                cloneArray: function(t) {
                    return [].concat(t)
                },
                defineImmutable: function(t, i) {
                    return Object.keys(i).forEach((function(r) {
                        Object.defineProperty(t, r, {
                            configurable: !1,
                            enumerable: !0,
                            value: i[r]
                        })
                    })), t
                },
                isNaturalNumber: function(t) {
                    return "number" == typeof t && isFinite(t) && Math.floor(t) === t && t >= 0
                }
            }
        },
        6532: function(t, i, r) {
            "use strict";
            var e = r(5483),
                n = r(5650),
                h = r(5497),
                o = {
                    BTC: [1e8, 8],
                    mBTC: [1e5, 5],
                    uBTC: [100, 2],
                    bits: [100, 2],
                    satoshis: [1, 0]
                };

            function s(t, i) {
                if (!(this instanceof s)) return new s(t, i);
                if (e.isNumber(i)) {
                    if (i <= 0) throw new n.Unit.InvalidRate(i);
                    t /= i, i = s.BTC
                }
                this._value = this._from(t, i);
                var r = this;
                Object.keys(o).forEach((function(t) {
                    Object.defineProperty(r, t, {
                        get: function() {
                            return r.to(t)
                        },
                        enumerable: !0
                    })
                }))
            }
            Object.keys(o).forEach((function(t) {
                s[t] = t
            })), s.fromObject = function(t) {
                return h.checkArgument(e.isObject(t), "Argument is expected to be an object"), new s(t.amount, t.code)
            }, s.fromBTC = function(t) {
                return new s(t, s.BTC)
            }, s.fromMillis = s.fromMilis = function(t) {
                return new s(t, s.mBTC)
            }, s.fromMicros = s.fromBits = function(t) {
                return new s(t, s.bits)
            }, s.fromSatoshis = function(t) {
                return new s(t, s.satoshis)
            }, s.fromFiat = function(t, i) {
                return new s(t, i)
            }, s.prototype._from = function(t, i) {
                if (!o[i]) throw new n.Unit.UnknownCode(i);
                return parseInt((t * o[i][0]).toFixed())
            }, s.prototype.to = function(t) {
                if (e.isNumber(t)) {
                    if (t <= 0) throw new n.Unit.InvalidRate(t);
                    return parseFloat((this.BTC * t).toFixed(2))
                }
                if (!o[t]) throw new n.Unit.UnknownCode(t);
                var i = this._value / o[t][0];
                return parseFloat(i.toFixed(o[t][1]))
            }, s.prototype.toBTC = function() {
                return this.to(s.BTC)
            }, s.prototype.toMillis = s.prototype.toMilis = function() {
                return this.to(s.mBTC)
            }, s.prototype.toMicros = s.prototype.toBits = function() {
                return this.to(s.bits)
            }, s.prototype.toSatoshis = function() {
                return this.to(s.satoshis)
            }, s.prototype.atRate = function(t) {
                return this.to(t)
            }, s.prototype.toString = function() {
                return this.satoshis + " satoshis"
            }, s.prototype.toObject = s.prototype.toJSON = function() {
                return {
                    amount: this.BTC,
                    code: s.BTC
                }
            }, s.prototype.inspect = function() {
                return "<Unit: " + this.toString() + ">"
            }, t.exports = s
        },
        7257: function(t, i, r) {
            (function(t) {
                ! function(t, i) {
                    "use strict";

                    function e(t, i) {
                        if (!t) throw new Error(i || "Assertion failed")
                    }

                    function n(t, i) {
                        t.super_ = i;
                        var r = function() {};
                        r.prototype = i.prototype, t.prototype = new r, t.prototype.constructor = t
                    }

                    function h(t, i, r) {
                        if (h.isBN(t)) return t;
                        this.negative = 0, this.words = null, this.length = 0, this.red = null, null !== t && ("le" !== i && "be" !== i || (r = i, i = 10), this._init(t || 0, i || 10, r || "be"))
                    }
                    var o;
                    "object" == typeof t ? t.exports = h : i.BN = h, h.BN = h, h.wordSize = 26;
                    try {
                        o = r(12).Buffer
                    } catch (t) {}

                    function s(t, i, r) {
                        for (var e = 0, n = Math.min(t.length, r), h = i; h < n; h++) {
                            var o = t.charCodeAt(h) - 48;
                            e <<= 4, e |= o >= 49 && o <= 54 ? o - 49 + 10 : o >= 17 && o <= 22 ? o - 17 + 10 : 15 & o
                        }
                        return e
                    }

                    function u(t, i, r, e) {
                        for (var n = 0, h = Math.min(t.length, r), o = i; o < h; o++) {
                            var s = t.charCodeAt(o) - 48;
                            n *= e, n += s >= 49 ? s - 49 + 10 : s >= 17 ? s - 17 + 10 : s
                        }
                        return n
                    }
                    h.isBN = function(t) {
                        return t instanceof h || null !== t && "object" == typeof t && t.constructor.wordSize === h.wordSize && Array.isArray(t.words)
                    }, h.max = function(t, i) {
                        return t.cmp(i) > 0 ? t : i
                    }, h.min = function(t, i) {
                        return t.cmp(i) < 0 ? t : i
                    }, h.prototype._init = function(t, i, r) {
                        if ("number" == typeof t) return this._initNumber(t, i, r);
                        if ("object" == typeof t) return this._initArray(t, i, r);
                        "hex" === i && (i = 16), e(i === (0 | i) && i >= 2 && i <= 36);
                        var n = 0;
                        "-" === (t = t.toString().replace(/\s+/g, ""))[0] && n++, 16 === i ? this._parseHex(t, n) : this._parseBase(t, i, n), "-" === t[0] && (this.negative = 1), this.strip(), "le" === r && this._initArray(this.toArray(), i, r)
                    }, h.prototype._initNumber = function(t, i, r) {
                        t < 0 && (this.negative = 1, t = -t), t < 67108864 ? (this.words = [67108863 & t], this.length = 1) : t < 4503599627370496 ? (this.words = [67108863 & t, t / 67108864 & 67108863], this.length = 2) : (e(t < 9007199254740992), this.words = [67108863 & t, t / 67108864 & 67108863, 1], this.length = 3), "le" === r && this._initArray(this.toArray(), i, r)
                    }, h.prototype._initArray = function(t, i, r) {
                        if (e("number" == typeof t.length), t.length <= 0) return this.words = [0], this.length = 1, this;
                        this.length = Math.ceil(t.length / 3), this.words = new Array(this.length);
                        for (var n = 0; n < this.length; n++) this.words[n] = 0;
                        var h, o, s = 0;
                        if ("be" === r)
                            for (n = t.length - 1, h = 0; n >= 0; n -= 3) o = t[n] | t[n - 1] << 8 | t[n - 2] << 16, this.words[h] |= o << s & 67108863, this.words[h + 1] = o >>> 26 - s & 67108863, (s += 24) >= 26 && (s -= 26, h++);
                        else if ("le" === r)
                            for (n = 0, h = 0; n < t.length; n += 3) o = t[n] | t[n + 1] << 8 | t[n + 2] << 16, this.words[h] |= o << s & 67108863, this.words[h + 1] = o >>> 26 - s & 67108863, (s += 24) >= 26 && (s -= 26, h++);
                        return this.strip()
                    }, h.prototype._parseHex = function(t, i) {
                        this.length = Math.ceil((t.length - i) / 6), this.words = new Array(this.length);
                        for (var r = 0; r < this.length; r++) this.words[r] = 0;
                        var e, n, h = 0;
                        for (r = t.length - 6, e = 0; r >= i; r -= 6) n = s(t, r, r + 6), this.words[e] |= n << h & 67108863, this.words[e + 1] |= n >>> 26 - h & 4194303, (h += 24) >= 26 && (h -= 26, e++);
                        r + 6 !== i && (n = s(t, i, r + 6), this.words[e] |= n << h & 67108863, this.words[e + 1] |= n >>> 26 - h & 4194303), this.strip()
                    }, h.prototype._parseBase = function(t, i, r) {
                        this.words = [0], this.length = 1;
                        for (var e = 0, n = 1; n <= 67108863; n *= i) e++;
                        e--, n = n / i | 0;
                        for (var h = t.length - r, o = h % e, s = Math.min(h, h - o) + r, a = 0, l = r; l < s; l += e) a = u(t, l, l + e, i), this.imuln(n), this.words[0] + a < 67108864 ? this.words[0] += a : this._iaddn(a);
                        if (0 !== o) {
                            var f = 1;
                            for (a = u(t, l, t.length, i), l = 0; l < o; l++) f *= i;
                            this.imuln(f), this.words[0] + a < 67108864 ? this.words[0] += a : this._iaddn(a)
                        }
                    }, h.prototype.copy = function(t) {
                        t.words = new Array(this.length);
                        for (var i = 0; i < this.length; i++) t.words[i] = this.words[i];
                        t.length = this.length, t.negative = this.negative, t.red = this.red
                    }, h.prototype.clone = function() {
                        var t = new h(null);
                        return this.copy(t), t
                    }, h.prototype._expand = function(t) {
                        for (; this.length < t;) this.words[this.length++] = 0;
                        return this
                    }, h.prototype.strip = function() {
                        for (; this.length > 1 && 0 === this.words[this.length - 1];) this.length--;
                        return this._normSign()
                    }, h.prototype._normSign = function() {
                        return 1 === this.length && 0 === this.words[0] && (this.negative = 0), this
                    }, h.prototype.inspect = function() {
                        return (this.red ? "<BN-R: " : "<BN: ") + this.toString(16) + ">"
                    };
                    var a = ["", "0", "00", "000", "0000", "00000", "000000", "0000000", "00000000", "000000000", "0000000000", "00000000000", "000000000000", "0000000000000", "00000000000000", "000000000000000", "0000000000000000", "00000000000000000", "000000000000000000", "0000000000000000000", "00000000000000000000", "000000000000000000000", "0000000000000000000000", "00000000000000000000000", "000000000000000000000000", "0000000000000000000000000"],
                        l = [0, 0, 25, 16, 12, 11, 10, 9, 8, 8, 7, 7, 7, 7, 6, 6, 6, 6, 6, 6, 6, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5],
                        f = [0, 0, 33554432, 43046721, 16777216, 48828125, 60466176, 40353607, 16777216, 43046721, 1e7, 19487171, 35831808, 62748517, 7529536, 11390625, 16777216, 24137569, 34012224, 47045881, 64e6, 4084101, 5153632, 6436343, 7962624, 9765625, 11881376, 14348907, 17210368, 20511149, 243e5, 28629151, 33554432, 39135393, 45435424, 52521875, 60466176];

                    function m(t, i, r) {
                        r.negative = i.negative ^ t.negative;
                        var e = t.length + i.length | 0;
                        r.length = e, e = e - 1 | 0;
                        var n = 0 | t.words[0],
                            h = 0 | i.words[0],
                            o = n * h,
                            s = 67108863 & o,
                            u = o / 67108864 | 0;
                        r.words[0] = s;
                        for (var a = 1; a < e; a++) {
                            for (var l = u >>> 26, f = 67108863 & u, m = Math.min(a, i.length - 1), d = Math.max(0, a - t.length + 1); d <= m; d++) {
                                var p = a - d | 0;
                                l += (o = (n = 0 | t.words[p]) * (h = 0 | i.words[d]) + f) / 67108864 | 0, f = 67108863 & o
                            }
                            r.words[a] = 0 | f, u = 0 | l
                        }
                        return 0 !== u ? r.words[a] = 0 | u : r.length--, r.strip()
                    }
                    h.prototype.toString = function(t, i) {
                        var r;
                        if (i = 0 | i || 1, 16 === (t = t || 10) || "hex" === t) {
                            r = "";
                            for (var n = 0, h = 0, o = 0; o < this.length; o++) {
                                var s = this.words[o],
                                    u = (16777215 & (s << n | h)).toString(16);
                                r = 0 !== (h = s >>> 24 - n & 16777215) || o !== this.length - 1 ? a[6 - u.length] + u + r : u + r, (n += 2) >= 26 && (n -= 26, o--)
                            }
                            for (0 !== h && (r = h.toString(16) + r); r.length % i != 0;) r = "0" + r;
                            return 0 !== this.negative && (r = "-" + r), r
                        }
                        if (t === (0 | t) && t >= 2 && t <= 36) {
                            var m = l[t],
                                d = f[t];
                            r = "";
                            var p = this.clone();
                            for (p.negative = 0; !p.isZero();) {
                                var c = p.modn(d).toString(t);
                                r = (p = p.idivn(d)).isZero() ? c + r : a[m - c.length] + c + r
                            }
                            for (this.isZero() && (r = "0" + r); r.length % i != 0;) r = "0" + r;
                            return 0 !== this.negative && (r = "-" + r), r
                        }
                        e(!1, "Base should be between 2 and 36")
                    }, h.prototype.toNumber = function() {
                        var t = this.words[0];
                        return 2 === this.length ? t += 67108864 * this.words[1] : 3 === this.length && 1 === this.words[2] ? t += 4503599627370496 + 67108864 * this.words[1] : this.length > 2 && e(!1, "Number can only safely store up to 53 bits"), 0 !== this.negative ? -t : t
                    }, h.prototype.toJSON = function() {
                        return this.toString(16)
                    }, h.prototype.toBuffer = function(t, i) {
                        return e(void 0 !== o), this.toArrayLike(o, t, i)
                    }, h.prototype.toArray = function(t, i) {
                        return this.toArrayLike(Array, t, i)
                    }, h.prototype.toArrayLike = function(t, i, r) {
                        var n = this.byteLength(),
                            h = r || Math.max(1, n);
                        e(n <= h, "byte array longer than desired length"), e(h > 0, "Requested array length <= 0"), this.strip();
                        var o, s, u = "le" === i,
                            a = new t(h),
                            l = this.clone();
                        if (u) {
                            for (s = 0; !l.isZero(); s++) o = l.andln(255), l.iushrn(8), a[s] = o;
                            for (; s < h; s++) a[s] = 0
                        } else {
                            for (s = 0; s < h - n; s++) a[s] = 0;
                            for (s = 0; !l.isZero(); s++) o = l.andln(255), l.iushrn(8), a[h - s - 1] = o
                        }
                        return a
                    }, Math.clz32 ? h.prototype._countBits = function(t) {
                        return 32 - Math.clz32(t)
                    } : h.prototype._countBits = function(t) {
                        var i = t,
                            r = 0;
                        return i >= 4096 && (r += 13, i >>>= 13), i >= 64 && (r += 7, i >>>= 7), i >= 8 && (r += 4, i >>>= 4), i >= 2 && (r += 2, i >>>= 2), r + i
                    }, h.prototype._zeroBits = function(t) {
                        if (0 === t) return 26;
                        var i = t,
                            r = 0;
                        return 0 == (8191 & i) && (r += 13, i >>>= 13), 0 == (127 & i) && (r += 7, i >>>= 7), 0 == (15 & i) && (r += 4, i >>>= 4), 0 == (3 & i) && (r += 2, i >>>= 2), 0 == (1 & i) && r++, r
                    }, h.prototype.bitLength = function() {
                        var t = this.words[this.length - 1],
                            i = this._countBits(t);
                        return 26 * (this.length - 1) + i
                    }, h.prototype.zeroBits = function() {
                        if (this.isZero()) return 0;
                        for (var t = 0, i = 0; i < this.length; i++) {
                            var r = this._zeroBits(this.words[i]);
                            if (t += r, 26 !== r) break
                        }
                        return t
                    }, h.prototype.byteLength = function() {
                        return Math.ceil(this.bitLength() / 8)
                    }, h.prototype.toTwos = function(t) {
                        return 0 !== this.negative ? this.abs().inotn(t).iaddn(1) : this.clone()
                    }, h.prototype.fromTwos = function(t) {
                        return this.testn(t - 1) ? this.notn(t).iaddn(1).ineg() : this.clone()
                    }, h.prototype.isNeg = function() {
                        return 0 !== this.negative
                    }, h.prototype.neg = function() {
                        return this.clone().ineg()
                    }, h.prototype.ineg = function() {
                        return this.isZero() || (this.negative ^= 1), this
                    }, h.prototype.iuor = function(t) {
                        for (; this.length < t.length;) this.words[this.length++] = 0;
                        for (var i = 0; i < t.length; i++) this.words[i] = this.words[i] | t.words[i];
                        return this.strip()
                    }, h.prototype.ior = function(t) {
                        return e(0 == (this.negative | t.negative)), this.iuor(t)
                    }, h.prototype.or = function(t) {
                        return this.length > t.length ? this.clone().ior(t) : t.clone().ior(this)
                    }, h.prototype.uor = function(t) {
                        return this.length > t.length ? this.clone().iuor(t) : t.clone().iuor(this)
                    }, h.prototype.iuand = function(t) {
                        var i;
                        i = this.length > t.length ? t : this;
                        for (var r = 0; r < i.length; r++) this.words[r] = this.words[r] & t.words[r];
                        return this.length = i.length, this.strip()
                    }, h.prototype.iand = function(t) {
                        return e(0 == (this.negative | t.negative)), this.iuand(t)
                    }, h.prototype.and = function(t) {
                        return this.length > t.length ? this.clone().iand(t) : t.clone().iand(this)
                    }, h.prototype.uand = function(t) {
                        return this.length > t.length ? this.clone().iuand(t) : t.clone().iuand(this)
                    }, h.prototype.iuxor = function(t) {
                        var i, r;
                        this.length > t.length ? (i = this, r = t) : (i = t, r = this);
                        for (var e = 0; e < r.length; e++) this.words[e] = i.words[e] ^ r.words[e];
                        if (this !== i)
                            for (; e < i.length; e++) this.words[e] = i.words[e];
                        return this.length = i.length, this.strip()
                    }, h.prototype.ixor = function(t) {
                        return e(0 == (this.negative | t.negative)), this.iuxor(t)
                    }, h.prototype.xor = function(t) {
                        return this.length > t.length ? this.clone().ixor(t) : t.clone().ixor(this)
                    }, h.prototype.uxor = function(t) {
                        return this.length > t.length ? this.clone().iuxor(t) : t.clone().iuxor(this)
                    }, h.prototype.inotn = function(t) {
                        e("number" == typeof t && t >= 0);
                        var i = 0 | Math.ceil(t / 26),
                            r = t % 26;
                        this._expand(i), r > 0 && i--;
                        for (var n = 0; n < i; n++) this.words[n] = 67108863 & ~this.words[n];
                        return r > 0 && (this.words[n] = ~this.words[n] & 67108863 >> 26 - r), this.strip()
                    }, h.prototype.notn = function(t) {
                        return this.clone().inotn(t)
                    }, h.prototype.setn = function(t, i) {
                        e("number" == typeof t && t >= 0);
                        var r = t / 26 | 0,
                            n = t % 26;
                        return this._expand(r + 1), this.words[r] = i ? this.words[r] | 1 << n : this.words[r] & ~(1 << n), this.strip()
                    }, h.prototype.iadd = function(t) {
                        var i, r, e;
                        if (0 !== this.negative && 0 === t.negative) return this.negative = 0, i = this.isub(t), this.negative ^= 1, this._normSign();
                        if (0 === this.negative && 0 !== t.negative) return t.negative = 0, i = this.isub(t), t.negative = 1, i._normSign();
                        this.length > t.length ? (r = this, e = t) : (r = t, e = this);
                        for (var n = 0, h = 0; h < e.length; h++) i = (0 | r.words[h]) + (0 | e.words[h]) + n, this.words[h] = 67108863 & i, n = i >>> 26;
                        for (; 0 !== n && h < r.length; h++) i = (0 | r.words[h]) + n, this.words[h] = 67108863 & i, n = i >>> 26;
                        if (this.length = r.length, 0 !== n) this.words[this.length] = n, this.length++;
                        else if (r !== this)
                            for (; h < r.length; h++) this.words[h] = r.words[h];
                        return this
                    }, h.prototype.add = function(t) {
                        var i;
                        return 0 !== t.negative && 0 === this.negative ? (t.negative = 0, i = this.sub(t), t.negative ^= 1, i) : 0 === t.negative && 0 !== this.negative ? (this.negative = 0, i = t.sub(this), this.negative = 1, i) : this.length > t.length ? this.clone().iadd(t) : t.clone().iadd(this)
                    }, h.prototype.isub = function(t) {
                        if (0 !== t.negative) {
                            t.negative = 0;
                            var i = this.iadd(t);
                            return t.negative = 1, i._normSign()
                        }
                        if (0 !== this.negative) return this.negative = 0, this.iadd(t), this.negative = 1, this._normSign();
                        var r, e, n = this.cmp(t);
                        if (0 === n) return this.negative = 0, this.length = 1, this.words[0] = 0, this;
                        n > 0 ? (r = this, e = t) : (r = t, e = this);
                        for (var h = 0, o = 0; o < e.length; o++) h = (i = (0 | r.words[o]) - (0 | e.words[o]) + h) >> 26, this.words[o] = 67108863 & i;
                        for (; 0 !== h && o < r.length; o++) h = (i = (0 | r.words[o]) + h) >> 26, this.words[o] = 67108863 & i;
                        if (0 === h && o < r.length && r !== this)
                            for (; o < r.length; o++) this.words[o] = r.words[o];
                        return this.length = Math.max(this.length, o), r !== this && (this.negative = 1), this.strip()
                    }, h.prototype.sub = function(t) {
                        return this.clone().isub(t)
                    };
                    var d = function(t, i, r) {
                        var e, n, h, o = t.words,
                            s = i.words,
                            u = r.words,
                            a = 0,
                            l = 0 | o[0],
                            f = 8191 & l,
                            m = l >>> 13,
                            d = 0 | o[1],
                            p = 8191 & d,
                            c = d >>> 13,
                            M = 0 | o[2],
                            v = 8191 & M,
                            g = M >>> 13,
                            w = 0 | o[3],
                            y = 8191 & w,
                            b = w >>> 13,
                            _ = 0 | o[4],
                            B = 8191 & _,
                            k = _ >>> 13,
                            A = 0 | o[5],
                            x = 8191 & A,
                            S = A >>> 13,
                            T = 0 | o[6],
                            q = 8191 & T,
                            R = T >>> 13,
                            N = 0 | o[7],
                            O = 8191 & N,
                            I = N >>> 13,
                            Z = 0 | o[8],
                            j = 8191 & Z,
                            E = Z >>> 13,
                            C = 0 | o[9],
                            L = 8191 & C,
                            F = C >>> 13,
                            U = 0 | s[0],
                            z = 8191 & U,
                            P = U >>> 13,
                            H = 0 | s[1],
                            J = 8191 & H,
                            K = H >>> 13,
                            V = 0 | s[2],
                            D = 8191 & V,
                            Y = V >>> 13,
                            $ = 0 | s[3],
                            G = 8191 & $,
                            Q = $ >>> 13,
                            W = 0 | s[4],
                            X = 8191 & W,
                            tt = W >>> 13,
                            it = 0 | s[5],
                            rt = 8191 & it,
                            et = it >>> 13,
                            nt = 0 | s[6],
                            ht = 8191 & nt,
                            ot = nt >>> 13,
                            st = 0 | s[7],
                            ut = 8191 & st,
                            at = st >>> 13,
                            lt = 0 | s[8],
                            ft = 8191 & lt,
                            mt = lt >>> 13,
                            dt = 0 | s[9],
                            pt = 8191 & dt,
                            ct = dt >>> 13;
                        r.negative = t.negative ^ i.negative, r.length = 19;
                        var Mt = (a + (e = Math.imul(f, z)) | 0) + ((8191 & (n = (n = Math.imul(f, P)) + Math.imul(m, z) | 0)) << 13) | 0;
                        a = ((h = Math.imul(m, P)) + (n >>> 13) | 0) + (Mt >>> 26) | 0, Mt &= 67108863, e = Math.imul(p, z), n = (n = Math.imul(p, P)) + Math.imul(c, z) | 0, h = Math.imul(c, P);
                        var vt = (a + (e = e + Math.imul(f, J) | 0) | 0) + ((8191 & (n = (n = n + Math.imul(f, K) | 0) + Math.imul(m, J) | 0)) << 13) | 0;
                        a = ((h = h + Math.imul(m, K) | 0) + (n >>> 13) | 0) + (vt >>> 26) | 0, vt &= 67108863, e = Math.imul(v, z), n = (n = Math.imul(v, P)) + Math.imul(g, z) | 0, h = Math.imul(g, P), e = e + Math.imul(p, J) | 0, n = (n = n + Math.imul(p, K) | 0) + Math.imul(c, J) | 0, h = h + Math.imul(c, K) | 0;
                        var gt = (a + (e = e + Math.imul(f, D) | 0) | 0) + ((8191 & (n = (n = n + Math.imul(f, Y) | 0) + Math.imul(m, D) | 0)) << 13) | 0;
                        a = ((h = h + Math.imul(m, Y) | 0) + (n >>> 13) | 0) + (gt >>> 26) | 0, gt &= 67108863, e = Math.imul(y, z), n = (n = Math.imul(y, P)) + Math.imul(b, z) | 0, h = Math.imul(b, P), e = e + Math.imul(v, J) | 0, n = (n = n + Math.imul(v, K) | 0) + Math.imul(g, J) | 0, h = h + Math.imul(g, K) | 0, e = e + Math.imul(p, D) | 0, n = (n = n + Math.imul(p, Y) | 0) + Math.imul(c, D) | 0, h = h + Math.imul(c, Y) | 0;
                        var wt = (a + (e = e + Math.imul(f, G) | 0) | 0) + ((8191 & (n = (n = n + Math.imul(f, Q) | 0) + Math.imul(m, G) | 0)) << 13) | 0;
                        a = ((h = h + Math.imul(m, Q) | 0) + (n >>> 13) | 0) + (wt >>> 26) | 0, wt &= 67108863, e = Math.imul(B, z), n = (n = Math.imul(B, P)) + Math.imul(k, z) | 0, h = Math.imul(k, P), e = e + Math.imul(y, J) | 0, n = (n = n + Math.imul(y, K) | 0) + Math.imul(b, J) | 0, h = h + Math.imul(b, K) | 0, e = e + Math.imul(v, D) | 0, n = (n = n + Math.imul(v, Y) | 0) + Math.imul(g, D) | 0, h = h + Math.imul(g, Y) | 0, e = e + Math.imul(p, G) | 0, n = (n = n + Math.imul(p, Q) | 0) + Math.imul(c, G) | 0, h = h + Math.imul(c, Q) | 0;
                        var yt = (a + (e = e + Math.imul(f, X) | 0) | 0) + ((8191 & (n = (n = n + Math.imul(f, tt) | 0) + Math.imul(m, X) | 0)) << 13) | 0;
                        a = ((h = h + Math.imul(m, tt) | 0) + (n >>> 13) | 0) + (yt >>> 26) | 0, yt &= 67108863, e = Math.imul(x, z), n = (n = Math.imul(x, P)) + Math.imul(S, z) | 0, h = Math.imul(S, P), e = e + Math.imul(B, J) | 0, n = (n = n + Math.imul(B, K) | 0) + Math.imul(k, J) | 0, h = h + Math.imul(k, K) | 0, e = e + Math.imul(y, D) | 0, n = (n = n + Math.imul(y, Y) | 0) + Math.imul(b, D) | 0, h = h + Math.imul(b, Y) | 0, e = e + Math.imul(v, G) | 0, n = (n = n + Math.imul(v, Q) | 0) + Math.imul(g, G) | 0, h = h + Math.imul(g, Q) | 0, e = e + Math.imul(p, X) | 0, n = (n = n + Math.imul(p, tt) | 0) + Math.imul(c, X) | 0, h = h + Math.imul(c, tt) | 0;
                        var bt = (a + (e = e + Math.imul(f, rt) | 0) | 0) + ((8191 & (n = (n = n + Math.imul(f, et) | 0) + Math.imul(m, rt) | 0)) << 13) | 0;
                        a = ((h = h + Math.imul(m, et) | 0) + (n >>> 13) | 0) + (bt >>> 26) | 0, bt &= 67108863, e = Math.imul(q, z), n = (n = Math.imul(q, P)) + Math.imul(R, z) | 0, h = Math.imul(R, P), e = e + Math.imul(x, J) | 0, n = (n = n + Math.imul(x, K) | 0) + Math.imul(S, J) | 0, h = h + Math.imul(S, K) | 0, e = e + Math.imul(B, D) | 0, n = (n = n + Math.imul(B, Y) | 0) + Math.imul(k, D) | 0, h = h + Math.imul(k, Y) | 0, e = e + Math.imul(y, G) | 0, n = (n = n + Math.imul(y, Q) | 0) + Math.imul(b, G) | 0, h = h + Math.imul(b, Q) | 0, e = e + Math.imul(v, X) | 0, n = (n = n + Math.imul(v, tt) | 0) + Math.imul(g, X) | 0, h = h + Math.imul(g, tt) | 0, e = e + Math.imul(p, rt) | 0, n = (n = n + Math.imul(p, et) | 0) + Math.imul(c, rt) | 0, h = h + Math.imul(c, et) | 0;
                        var _t = (a + (e = e + Math.imul(f, ht) | 0) | 0) + ((8191 & (n = (n = n + Math.imul(f, ot) | 0) + Math.imul(m, ht) | 0)) << 13) | 0;
                        a = ((h = h + Math.imul(m, ot) | 0) + (n >>> 13) | 0) + (_t >>> 26) | 0, _t &= 67108863, e = Math.imul(O, z), n = (n = Math.imul(O, P)) + Math.imul(I, z) | 0, h = Math.imul(I, P), e = e + Math.imul(q, J) | 0, n = (n = n + Math.imul(q, K) | 0) + Math.imul(R, J) | 0, h = h + Math.imul(R, K) | 0, e = e + Math.imul(x, D) | 0, n = (n = n + Math.imul(x, Y) | 0) + Math.imul(S, D) | 0, h = h + Math.imul(S, Y) | 0, e = e + Math.imul(B, G) | 0, n = (n = n + Math.imul(B, Q) | 0) + Math.imul(k, G) | 0, h = h + Math.imul(k, Q) | 0, e = e + Math.imul(y, X) | 0, n = (n = n + Math.imul(y, tt) | 0) + Math.imul(b, X) | 0, h = h + Math.imul(b, tt) | 0, e = e + Math.imul(v, rt) | 0, n = (n = n + Math.imul(v, et) | 0) + Math.imul(g, rt) | 0, h = h + Math.imul(g, et) | 0, e = e + Math.imul(p, ht) | 0, n = (n = n + Math.imul(p, ot) | 0) + Math.imul(c, ht) | 0, h = h + Math.imul(c, ot) | 0;
                        var Bt = (a + (e = e + Math.imul(f, ut) | 0) | 0) + ((8191 & (n = (n = n + Math.imul(f, at) | 0) + Math.imul(m, ut) | 0)) << 13) | 0;
                        a = ((h = h + Math.imul(m, at) | 0) + (n >>> 13) | 0) + (Bt >>> 26) | 0, Bt &= 67108863, e = Math.imul(j, z), n = (n = Math.imul(j, P)) + Math.imul(E, z) | 0, h = Math.imul(E, P), e = e + Math.imul(O, J) | 0, n = (n = n + Math.imul(O, K) | 0) + Math.imul(I, J) | 0, h = h + Math.imul(I, K) | 0, e = e + Math.imul(q, D) | 0, n = (n = n + Math.imul(q, Y) | 0) + Math.imul(R, D) | 0, h = h + Math.imul(R, Y) | 0, e = e + Math.imul(x, G) | 0, n = (n = n + Math.imul(x, Q) | 0) + Math.imul(S, G) | 0, h = h + Math.imul(S, Q) | 0, e = e + Math.imul(B, X) | 0, n = (n = n + Math.imul(B, tt) | 0) + Math.imul(k, X) | 0, h = h + Math.imul(k, tt) | 0, e = e + Math.imul(y, rt) | 0, n = (n = n + Math.imul(y, et) | 0) + Math.imul(b, rt) | 0, h = h + Math.imul(b, et) | 0, e = e + Math.imul(v, ht) | 0, n = (n = n + Math.imul(v, ot) | 0) + Math.imul(g, ht) | 0, h = h + Math.imul(g, ot) | 0, e = e + Math.imul(p, ut) | 0, n = (n = n + Math.imul(p, at) | 0) + Math.imul(c, ut) | 0, h = h + Math.imul(c, at) | 0;
                        var kt = (a + (e = e + Math.imul(f, ft) | 0) | 0) + ((8191 & (n = (n = n + Math.imul(f, mt) | 0) + Math.imul(m, ft) | 0)) << 13) | 0;
                        a = ((h = h + Math.imul(m, mt) | 0) + (n >>> 13) | 0) + (kt >>> 26) | 0, kt &= 67108863, e = Math.imul(L, z), n = (n = Math.imul(L, P)) + Math.imul(F, z) | 0, h = Math.imul(F, P), e = e + Math.imul(j, J) | 0, n = (n = n + Math.imul(j, K) | 0) + Math.imul(E, J) | 0, h = h + Math.imul(E, K) | 0, e = e + Math.imul(O, D) | 0, n = (n = n + Math.imul(O, Y) | 0) + Math.imul(I, D) | 0, h = h + Math.imul(I, Y) | 0, e = e + Math.imul(q, G) | 0, n = (n = n + Math.imul(q, Q) | 0) + Math.imul(R, G) | 0, h = h + Math.imul(R, Q) | 0, e = e + Math.imul(x, X) | 0, n = (n = n + Math.imul(x, tt) | 0) + Math.imul(S, X) | 0, h = h + Math.imul(S, tt) | 0, e = e + Math.imul(B, rt) | 0, n = (n = n + Math.imul(B, et) | 0) + Math.imul(k, rt) | 0, h = h + Math.imul(k, et) | 0, e = e + Math.imul(y, ht) | 0, n = (n = n + Math.imul(y, ot) | 0) + Math.imul(b, ht) | 0, h = h + Math.imul(b, ot) | 0, e = e + Math.imul(v, ut) | 0, n = (n = n + Math.imul(v, at) | 0) + Math.imul(g, ut) | 0, h = h + Math.imul(g, at) | 0, e = e + Math.imul(p, ft) | 0, n = (n = n + Math.imul(p, mt) | 0) + Math.imul(c, ft) | 0, h = h + Math.imul(c, mt) | 0;
                        var At = (a + (e = e + Math.imul(f, pt) | 0) | 0) + ((8191 & (n = (n = n + Math.imul(f, ct) | 0) + Math.imul(m, pt) | 0)) << 13) | 0;
                        a = ((h = h + Math.imul(m, ct) | 0) + (n >>> 13) | 0) + (At >>> 26) | 0, At &= 67108863, e = Math.imul(L, J), n = (n = Math.imul(L, K)) + Math.imul(F, J) | 0, h = Math.imul(F, K), e = e + Math.imul(j, D) | 0, n = (n = n + Math.imul(j, Y) | 0) + Math.imul(E, D) | 0, h = h + Math.imul(E, Y) | 0, e = e + Math.imul(O, G) | 0, n = (n = n + Math.imul(O, Q) | 0) + Math.imul(I, G) | 0, h = h + Math.imul(I, Q) | 0, e = e + Math.imul(q, X) | 0, n = (n = n + Math.imul(q, tt) | 0) + Math.imul(R, X) | 0, h = h + Math.imul(R, tt) | 0, e = e + Math.imul(x, rt) | 0, n = (n = n + Math.imul(x, et) | 0) + Math.imul(S, rt) | 0, h = h + Math.imul(S, et) | 0, e = e + Math.imul(B, ht) | 0, n = (n = n + Math.imul(B, ot) | 0) + Math.imul(k, ht) | 0, h = h + Math.imul(k, ot) | 0, e = e + Math.imul(y, ut) | 0, n = (n = n + Math.imul(y, at) | 0) + Math.imul(b, ut) | 0, h = h + Math.imul(b, at) | 0, e = e + Math.imul(v, ft) | 0, n = (n = n + Math.imul(v, mt) | 0) + Math.imul(g, ft) | 0, h = h + Math.imul(g, mt) | 0;
                        var xt = (a + (e = e + Math.imul(p, pt) | 0) | 0) + ((8191 & (n = (n = n + Math.imul(p, ct) | 0) + Math.imul(c, pt) | 0)) << 13) | 0;
                        a = ((h = h + Math.imul(c, ct) | 0) + (n >>> 13) | 0) + (xt >>> 26) | 0, xt &= 67108863, e = Math.imul(L, D), n = (n = Math.imul(L, Y)) + Math.imul(F, D) | 0, h = Math.imul(F, Y), e = e + Math.imul(j, G) | 0, n = (n = n + Math.imul(j, Q) | 0) + Math.imul(E, G) | 0, h = h + Math.imul(E, Q) | 0, e = e + Math.imul(O, X) | 0, n = (n = n + Math.imul(O, tt) | 0) + Math.imul(I, X) | 0, h = h + Math.imul(I, tt) | 0, e = e + Math.imul(q, rt) | 0, n = (n = n + Math.imul(q, et) | 0) + Math.imul(R, rt) | 0, h = h + Math.imul(R, et) | 0, e = e + Math.imul(x, ht) | 0, n = (n = n + Math.imul(x, ot) | 0) + Math.imul(S, ht) | 0, h = h + Math.imul(S, ot) | 0, e = e + Math.imul(B, ut) | 0, n = (n = n + Math.imul(B, at) | 0) + Math.imul(k, ut) | 0, h = h + Math.imul(k, at) | 0, e = e + Math.imul(y, ft) | 0, n = (n = n + Math.imul(y, mt) | 0) + Math.imul(b, ft) | 0, h = h + Math.imul(b, mt) | 0;
                        var St = (a + (e = e + Math.imul(v, pt) | 0) | 0) + ((8191 & (n = (n = n + Math.imul(v, ct) | 0) + Math.imul(g, pt) | 0)) << 13) | 0;
                        a = ((h = h + Math.imul(g, ct) | 0) + (n >>> 13) | 0) + (St >>> 26) | 0, St &= 67108863, e = Math.imul(L, G), n = (n = Math.imul(L, Q)) + Math.imul(F, G) | 0, h = Math.imul(F, Q), e = e + Math.imul(j, X) | 0, n = (n = n + Math.imul(j, tt) | 0) + Math.imul(E, X) | 0, h = h + Math.imul(E, tt) | 0, e = e + Math.imul(O, rt) | 0, n = (n = n + Math.imul(O, et) | 0) + Math.imul(I, rt) | 0, h = h + Math.imul(I, et) | 0, e = e + Math.imul(q, ht) | 0, n = (n = n + Math.imul(q, ot) | 0) + Math.imul(R, ht) | 0, h = h + Math.imul(R, ot) | 0, e = e + Math.imul(x, ut) | 0, n = (n = n + Math.imul(x, at) | 0) + Math.imul(S, ut) | 0, h = h + Math.imul(S, at) | 0, e = e + Math.imul(B, ft) | 0, n = (n = n + Math.imul(B, mt) | 0) + Math.imul(k, ft) | 0, h = h + Math.imul(k, mt) | 0;
                        var Tt = (a + (e = e + Math.imul(y, pt) | 0) | 0) + ((8191 & (n = (n = n + Math.imul(y, ct) | 0) + Math.imul(b, pt) | 0)) << 13) | 0;
                        a = ((h = h + Math.imul(b, ct) | 0) + (n >>> 13) | 0) + (Tt >>> 26) | 0, Tt &= 67108863, e = Math.imul(L, X), n = (n = Math.imul(L, tt)) + Math.imul(F, X) | 0, h = Math.imul(F, tt), e = e + Math.imul(j, rt) | 0, n = (n = n + Math.imul(j, et) | 0) + Math.imul(E, rt) | 0, h = h + Math.imul(E, et) | 0, e = e + Math.imul(O, ht) | 0, n = (n = n + Math.imul(O, ot) | 0) + Math.imul(I, ht) | 0, h = h + Math.imul(I, ot) | 0, e = e + Math.imul(q, ut) | 0, n = (n = n + Math.imul(q, at) | 0) + Math.imul(R, ut) | 0, h = h + Math.imul(R, at) | 0, e = e + Math.imul(x, ft) | 0, n = (n = n + Math.imul(x, mt) | 0) + Math.imul(S, ft) | 0, h = h + Math.imul(S, mt) | 0;
                        var qt = (a + (e = e + Math.imul(B, pt) | 0) | 0) + ((8191 & (n = (n = n + Math.imul(B, ct) | 0) + Math.imul(k, pt) | 0)) << 13) | 0;
                        a = ((h = h + Math.imul(k, ct) | 0) + (n >>> 13) | 0) + (qt >>> 26) | 0, qt &= 67108863, e = Math.imul(L, rt), n = (n = Math.imul(L, et)) + Math.imul(F, rt) | 0, h = Math.imul(F, et), e = e + Math.imul(j, ht) | 0, n = (n = n + Math.imul(j, ot) | 0) + Math.imul(E, ht) | 0, h = h + Math.imul(E, ot) | 0, e = e + Math.imul(O, ut) | 0, n = (n = n + Math.imul(O, at) | 0) + Math.imul(I, ut) | 0, h = h + Math.imul(I, at) | 0, e = e + Math.imul(q, ft) | 0, n = (n = n + Math.imul(q, mt) | 0) + Math.imul(R, ft) | 0, h = h + Math.imul(R, mt) | 0;
                        var Rt = (a + (e = e + Math.imul(x, pt) | 0) | 0) + ((8191 & (n = (n = n + Math.imul(x, ct) | 0) + Math.imul(S, pt) | 0)) << 13) | 0;
                        a = ((h = h + Math.imul(S, ct) | 0) + (n >>> 13) | 0) + (Rt >>> 26) | 0, Rt &= 67108863, e = Math.imul(L, ht), n = (n = Math.imul(L, ot)) + Math.imul(F, ht) | 0, h = Math.imul(F, ot), e = e + Math.imul(j, ut) | 0, n = (n = n + Math.imul(j, at) | 0) + Math.imul(E, ut) | 0, h = h + Math.imul(E, at) | 0, e = e + Math.imul(O, ft) | 0, n = (n = n + Math.imul(O, mt) | 0) + Math.imul(I, ft) | 0, h = h + Math.imul(I, mt) | 0;
                        var Nt = (a + (e = e + Math.imul(q, pt) | 0) | 0) + ((8191 & (n = (n = n + Math.imul(q, ct) | 0) + Math.imul(R, pt) | 0)) << 13) | 0;
                        a = ((h = h + Math.imul(R, ct) | 0) + (n >>> 13) | 0) + (Nt >>> 26) | 0, Nt &= 67108863, e = Math.imul(L, ut), n = (n = Math.imul(L, at)) + Math.imul(F, ut) | 0, h = Math.imul(F, at), e = e + Math.imul(j, ft) | 0, n = (n = n + Math.imul(j, mt) | 0) + Math.imul(E, ft) | 0, h = h + Math.imul(E, mt) | 0;
                        var Ot = (a + (e = e + Math.imul(O, pt) | 0) | 0) + ((8191 & (n = (n = n + Math.imul(O, ct) | 0) + Math.imul(I, pt) | 0)) << 13) | 0;
                        a = ((h = h + Math.imul(I, ct) | 0) + (n >>> 13) | 0) + (Ot >>> 26) | 0, Ot &= 67108863, e = Math.imul(L, ft), n = (n = Math.imul(L, mt)) + Math.imul(F, ft) | 0, h = Math.imul(F, mt);
                        var It = (a + (e = e + Math.imul(j, pt) | 0) | 0) + ((8191 & (n = (n = n + Math.imul(j, ct) | 0) + Math.imul(E, pt) | 0)) << 13) | 0;
                        a = ((h = h + Math.imul(E, ct) | 0) + (n >>> 13) | 0) + (It >>> 26) | 0, It &= 67108863;
                        var Zt = (a + (e = Math.imul(L, pt)) | 0) + ((8191 & (n = (n = Math.imul(L, ct)) + Math.imul(F, pt) | 0)) << 13) | 0;
                        return a = ((h = Math.imul(F, ct)) + (n >>> 13) | 0) + (Zt >>> 26) | 0, Zt &= 67108863, u[0] = Mt, u[1] = vt, u[2] = gt, u[3] = wt, u[4] = yt, u[5] = bt, u[6] = _t, u[7] = Bt, u[8] = kt, u[9] = At, u[10] = xt, u[11] = St, u[12] = Tt, u[13] = qt, u[14] = Rt, u[15] = Nt, u[16] = Ot, u[17] = It, u[18] = Zt, 0 !== a && (u[19] = a, r.length++), r
                    };

                    function p(t, i, r) {
                        return (new c).mulp(t, i, r)
                    }

                    function c(t, i) {
                        this.x = t, this.y = i
                    }
                    Math.imul || (d = m), h.prototype.mulTo = function(t, i) {
                        var r = this.length + t.length;
                        return 10 === this.length && 10 === t.length ? d(this, t, i) : r < 63 ? m(this, t, i) : r < 1024 ? function(t, i, r) {
                            r.negative = i.negative ^ t.negative, r.length = t.length + i.length;
                            for (var e = 0, n = 0, h = 0; h < r.length - 1; h++) {
                                var o = n;
                                n = 0;
                                for (var s = 67108863 & e, u = Math.min(h, i.length - 1), a = Math.max(0, h - t.length + 1); a <= u; a++) {
                                    var l = h - a,
                                        f = (0 | t.words[l]) * (0 | i.words[a]),
                                        m = 67108863 & f;
                                    s = 67108863 & (m = m + s | 0), n += (o = (o = o + (f / 67108864 | 0) | 0) + (m >>> 26) | 0) >>> 26, o &= 67108863
                                }
                                r.words[h] = s, e = o, o = n
                            }
                            return 0 !== e ? r.words[h] = e : r.length--, r.strip()
                        }(this, t, i) : p(this, t, i)
                    }, c.prototype.makeRBT = function(t) {
                        for (var i = new Array(t), r = h.prototype._countBits(t) - 1, e = 0; e < t; e++) i[e] = this.revBin(e, r, t);
                        return i
                    }, c.prototype.revBin = function(t, i, r) {
                        if (0 === t || t === r - 1) return t;
                        for (var e = 0, n = 0; n < i; n++) e |= (1 & t) << i - n - 1, t >>= 1;
                        return e
                    }, c.prototype.permute = function(t, i, r, e, n, h) {
                        for (var o = 0; o < h; o++) e[o] = i[t[o]], n[o] = r[t[o]]
                    }, c.prototype.transform = function(t, i, r, e, n, h) {
                        this.permute(h, t, i, r, e, n);
                        for (var o = 1; o < n; o <<= 1)
                            for (var s = o << 1, u = Math.cos(2 * Math.PI / s), a = Math.sin(2 * Math.PI / s), l = 0; l < n; l += s)
                                for (var f = u, m = a, d = 0; d < o; d++) {
                                    var p = r[l + d],
                                        c = e[l + d],
                                        M = r[l + d + o],
                                        v = e[l + d + o],
                                        g = f * M - m * v;
                                    v = f * v + m * M, M = g, r[l + d] = p + M, e[l + d] = c + v, r[l + d + o] = p - M, e[l + d + o] = c - v, d !== s && (g = u * f - a * m, m = u * m + a * f, f = g)
                                }
                    }, c.prototype.guessLen13b = function(t, i) {
                        var r = 1 | Math.max(i, t),
                            e = 1 & r,
                            n = 0;
                        for (r = r / 2 | 0; r; r >>>= 1) n++;
                        return 1 << n + 1 + e
                    }, c.prototype.conjugate = function(t, i, r) {
                        if (!(r <= 1))
                            for (var e = 0; e < r / 2; e++) {
                                var n = t[e];
                                t[e] = t[r - e - 1], t[r - e - 1] = n, n = i[e], i[e] = -i[r - e - 1], i[r - e - 1] = -n
                            }
                    }, c.prototype.normalize13b = function(t, i) {
                        for (var r = 0, e = 0; e < i / 2; e++) {
                            var n = 8192 * Math.round(t[2 * e + 1] / i) + Math.round(t[2 * e] / i) + r;
                            t[e] = 67108863 & n, r = n < 67108864 ? 0 : n / 67108864 | 0
                        }
                        return t
                    }, c.prototype.convert13b = function(t, i, r, n) {
                        for (var h = 0, o = 0; o < i; o++) h += 0 | t[o], r[2 * o] = 8191 & h, h >>>= 13, r[2 * o + 1] = 8191 & h, h >>>= 13;
                        for (o = 2 * i; o < n; ++o) r[o] = 0;
                        e(0 === h), e(0 == (-8192 & h))
                    }, c.prototype.stub = function(t) {
                        for (var i = new Array(t), r = 0; r < t; r++) i[r] = 0;
                        return i
                    }, c.prototype.mulp = function(t, i, r) {
                        var e = 2 * this.guessLen13b(t.length, i.length),
                            n = this.makeRBT(e),
                            h = this.stub(e),
                            o = new Array(e),
                            s = new Array(e),
                            u = new Array(e),
                            a = new Array(e),
                            l = new Array(e),
                            f = new Array(e),
                            m = r.words;
                        m.length = e, this.convert13b(t.words, t.length, o, e), this.convert13b(i.words, i.length, a, e), this.transform(o, h, s, u, e, n), this.transform(a, h, l, f, e, n);
                        for (var d = 0; d < e; d++) {
                            var p = s[d] * l[d] - u[d] * f[d];
                            u[d] = s[d] * f[d] + u[d] * l[d], s[d] = p
                        }
                        return this.conjugate(s, u, e), this.transform(s, u, m, h, e, n), this.conjugate(m, h, e), this.normalize13b(m, e), r.negative = t.negative ^ i.negative, r.length = t.length + i.length, r.strip()
                    }, h.prototype.mul = function(t) {
                        var i = new h(null);
                        return i.words = new Array(this.length + t.length), this.mulTo(t, i)
                    }, h.prototype.mulf = function(t) {
                        var i = new h(null);
                        return i.words = new Array(this.length + t.length), p(this, t, i)
                    }, h.prototype.imul = function(t) {
                        return this.clone().mulTo(t, this)
                    }, h.prototype.imuln = function(t) {
                        e("number" == typeof t), e(t < 67108864);
                        for (var i = 0, r = 0; r < this.length; r++) {
                            var n = (0 | this.words[r]) * t,
                                h = (67108863 & n) + (67108863 & i);
                            i >>= 26, i += n / 67108864 | 0, i += h >>> 26, this.words[r] = 67108863 & h
                        }
                        return 0 !== i && (this.words[r] = i, this.length++), this
                    }, h.prototype.muln = function(t) {
                        return this.clone().imuln(t)
                    }, h.prototype.sqr = function() {
                        return this.mul(this)
                    }, h.prototype.isqr = function() {
                        return this.imul(this.clone())
                    }, h.prototype.pow = function(t) {
                        var i = function(t) {
                            for (var i = new Array(t.bitLength()), r = 0; r < i.length; r++) {
                                var e = r / 26 | 0,
                                    n = r % 26;
                                i[r] = (t.words[e] & 1 << n) >>> n
                            }
                            return i
                        }(t);
                        if (0 === i.length) return new h(1);
                        for (var r = this, e = 0; e < i.length && 0 === i[e]; e++, r = r.sqr());
                        if (++e < i.length)
                            for (var n = r.sqr(); e < i.length; e++, n = n.sqr()) 0 !== i[e] && (r = r.mul(n));
                        return r
                    }, h.prototype.iushln = function(t) {
                        e("number" == typeof t && t >= 0);
                        var i, r = t % 26,
                            n = (t - r) / 26,
                            h = 67108863 >>> 26 - r << 26 - r;
                        if (0 !== r) {
                            var o = 0;
                            for (i = 0; i < this.length; i++) {
                                var s = this.words[i] & h,
                                    u = (0 | this.words[i]) - s << r;
                                this.words[i] = u | o, o = s >>> 26 - r
                            }
                            o && (this.words[i] = o, this.length++)
                        }
                        if (0 !== n) {
                            for (i = this.length - 1; i >= 0; i--) this.words[i + n] = this.words[i];
                            for (i = 0; i < n; i++) this.words[i] = 0;
                            this.length += n
                        }
                        return this.strip()
                    }, h.prototype.ishln = function(t) {
                        return e(0 === this.negative), this.iushln(t)
                    }, h.prototype.iushrn = function(t, i, r) {
                        var n;
                        e("number" == typeof t && t >= 0), n = i ? (i - i % 26) / 26 : 0;
                        var h = t % 26,
                            o = Math.min((t - h) / 26, this.length),
                            s = 67108863 ^ 67108863 >>> h << h,
                            u = r;
                        if (n -= o, n = Math.max(0, n), u) {
                            for (var a = 0; a < o; a++) u.words[a] = this.words[a];
                            u.length = o
                        }
                        if (0 === o);
                        else if (this.length > o)
                            for (this.length -= o, a = 0; a < this.length; a++) this.words[a] = this.words[a + o];
                        else this.words[0] = 0, this.length = 1;
                        var l = 0;
                        for (a = this.length - 1; a >= 0 && (0 !== l || a >= n); a--) {
                            var f = 0 | this.words[a];
                            this.words[a] = l << 26 - h | f >>> h, l = f & s
                        }
                        return u && 0 !== l && (u.words[u.length++] = l), 0 === this.length && (this.words[0] = 0, this.length = 1), this.strip()
                    }, h.prototype.ishrn = function(t, i, r) {
                        return e(0 === this.negative), this.iushrn(t, i, r)
                    }, h.prototype.shln = function(t) {
                        return this.clone().ishln(t)
                    }, h.prototype.ushln = function(t) {
                        return this.clone().iushln(t)
                    }, h.prototype.shrn = function(t) {
                        return this.clone().ishrn(t)
                    }, h.prototype.ushrn = function(t) {
                        return this.clone().iushrn(t)
                    }, h.prototype.testn = function(t) {
                        e("number" == typeof t && t >= 0);
                        var i = t % 26,
                            r = (t - i) / 26,
                            n = 1 << i;
                        return !(this.length <= r) && !!(this.words[r] & n)
                    }, h.prototype.imaskn = function(t) {
                        e("number" == typeof t && t >= 0);
                        var i = t % 26,
                            r = (t - i) / 26;
                        if (e(0 === this.negative, "imaskn works only with positive numbers"), this.length <= r) return this;
                        if (0 !== i && r++, this.length = Math.min(r, this.length), 0 !== i) {
                            var n = 67108863 ^ 67108863 >>> i << i;
                            this.words[this.length - 1] &= n
                        }
                        return this.strip()
                    }, h.prototype.maskn = function(t) {
                        return this.clone().imaskn(t)
                    }, h.prototype.iaddn = function(t) {
                        return e("number" == typeof t), e(t < 67108864), t < 0 ? this.isubn(-t) : 0 !== this.negative ? 1 === this.length && (0 | this.words[0]) < t ? (this.words[0] = t - (0 | this.words[0]), this.negative = 0, this) : (this.negative = 0, this.isubn(t), this.negative = 1, this) : this._iaddn(t)
                    }, h.prototype._iaddn = function(t) {
                        this.words[0] += t;
                        for (var i = 0; i < this.length && this.words[i] >= 67108864; i++) this.words[i] -= 67108864, i === this.length - 1 ? this.words[i + 1] = 1 : this.words[i + 1]++;
                        return this.length = Math.max(this.length, i + 1), this
                    }, h.prototype.isubn = function(t) {
                        if (e("number" == typeof t), e(t < 67108864), t < 0) return this.iaddn(-t);
                        if (0 !== this.negative) return this.negative = 0, this.iaddn(t), this.negative = 1, this;
                        if (this.words[0] -= t, 1 === this.length && this.words[0] < 0) this.words[0] = -this.words[0], this.negative = 1;
                        else
                            for (var i = 0; i < this.length && this.words[i] < 0; i++) this.words[i] += 67108864, this.words[i + 1] -= 1;
                        return this.strip()
                    }, h.prototype.addn = function(t) {
                        return this.clone().iaddn(t)
                    }, h.prototype.subn = function(t) {
                        return this.clone().isubn(t)
                    }, h.prototype.iabs = function() {
                        return this.negative = 0, this
                    }, h.prototype.abs = function() {
                        return this.clone().iabs()
                    }, h.prototype._ishlnsubmul = function(t, i, r) {
                        var n, h, o = t.length + r;
                        this._expand(o);
                        var s = 0;
                        for (n = 0; n < t.length; n++) {
                            h = (0 | this.words[n + r]) + s;
                            var u = (0 | t.words[n]) * i;
                            s = ((h -= 67108863 & u) >> 26) - (u / 67108864 | 0), this.words[n + r] = 67108863 & h
                        }
                        for (; n < this.length - r; n++) s = (h = (0 | this.words[n + r]) + s) >> 26, this.words[n + r] = 67108863 & h;
                        if (0 === s) return this.strip();
                        for (e(-1 === s), s = 0, n = 0; n < this.length; n++) s = (h = -(0 | this.words[n]) + s) >> 26, this.words[n] = 67108863 & h;
                        return this.negative = 1, this.strip()
                    }, h.prototype._wordDiv = function(t, i) {
                        var r = (this.length, t.length),
                            e = this.clone(),
                            n = t,
                            o = 0 | n.words[n.length - 1];
                        0 !== (r = 26 - this._countBits(o)) && (n = n.ushln(r), e.iushln(r), o = 0 | n.words[n.length - 1]);
                        var s, u = e.length - n.length;
                        if ("mod" !== i) {
                            (s = new h(null)).length = u + 1, s.words = new Array(s.length);
                            for (var a = 0; a < s.length; a++) s.words[a] = 0
                        }
                        var l = e.clone()._ishlnsubmul(n, 1, u);
                        0 === l.negative && (e = l, s && (s.words[u] = 1));
                        for (var f = u - 1; f >= 0; f--) {
                            var m = 67108864 * (0 | e.words[n.length + f]) + (0 | e.words[n.length + f - 1]);
                            for (m = Math.min(m / o | 0, 67108863), e._ishlnsubmul(n, m, f); 0 !== e.negative;) m--, e.negative = 0, e._ishlnsubmul(n, 1, f), e.isZero() || (e.negative ^= 1);
                            s && (s.words[f] = m)
                        }
                        return s && s.strip(), e.strip(), "div" !== i && 0 !== r && e.iushrn(r), {
                            div: s || null,
                            mod: e
                        }
                    }, h.prototype.divmod = function(t, i, r) {
                        return e(!t.isZero()), this.isZero() ? {
                            div: new h(0),
                            mod: new h(0)
                        } : 0 !== this.negative && 0 === t.negative ? (s = this.neg().divmod(t, i), "mod" !== i && (n = s.div.neg()), "div" !== i && (o = s.mod.neg(), r && 0 !== o.negative && o.iadd(t)), {
                            div: n,
                            mod: o
                        }) : 0 === this.negative && 0 !== t.negative ? (s = this.divmod(t.neg(), i), "mod" !== i && (n = s.div.neg()), {
                            div: n,
                            mod: s.mod
                        }) : 0 != (this.negative & t.negative) ? (s = this.neg().divmod(t.neg(), i), "div" !== i && (o = s.mod.neg(), r && 0 !== o.negative && o.isub(t)), {
                            div: s.div,
                            mod: o
                        }) : t.length > this.length || this.cmp(t) < 0 ? {
                            div: new h(0),
                            mod: this
                        } : 1 === t.length ? "div" === i ? {
                            div: this.divn(t.words[0]),
                            mod: null
                        } : "mod" === i ? {
                            div: null,
                            mod: new h(this.modn(t.words[0]))
                        } : {
                            div: this.divn(t.words[0]),
                            mod: new h(this.modn(t.words[0]))
                        } : this._wordDiv(t, i);
                        var n, o, s
                    }, h.prototype.div = function(t) {
                        return this.divmod(t, "div", !1).div
                    }, h.prototype.mod = function(t) {
                        return this.divmod(t, "mod", !1).mod
                    }, h.prototype.umod = function(t) {
                        return this.divmod(t, "mod", !0).mod
                    }, h.prototype.divRound = function(t) {
                        var i = this.divmod(t);
                        if (i.mod.isZero()) return i.div;
                        var r = 0 !== i.div.negative ? i.mod.isub(t) : i.mod,
                            e = t.ushrn(1),
                            n = t.andln(1),
                            h = r.cmp(e);
                        return h < 0 || 1 === n && 0 === h ? i.div : 0 !== i.div.negative ? i.div.isubn(1) : i.div.iaddn(1)
                    }, h.prototype.modn = function(t) {
                        e(t <= 67108863);
                        for (var i = (1 << 26) % t, r = 0, n = this.length - 1; n >= 0; n--) r = (i * r + (0 | this.words[n])) % t;
                        return r
                    }, h.prototype.idivn = function(t) {
                        e(t <= 67108863);
                        for (var i = 0, r = this.length - 1; r >= 0; r--) {
                            var n = (0 | this.words[r]) + 67108864 * i;
                            this.words[r] = n / t | 0, i = n % t
                        }
                        return this.strip()
                    }, h.prototype.divn = function(t) {
                        return this.clone().idivn(t)
                    }, h.prototype.egcd = function(t) {
                        e(0 === t.negative), e(!t.isZero());
                        var i = this,
                            r = t.clone();
                        i = 0 !== i.negative ? i.umod(t) : i.clone();
                        for (var n = new h(1), o = new h(0), s = new h(0), u = new h(1), a = 0; i.isEven() && r.isEven();) i.iushrn(1), r.iushrn(1), ++a;
                        for (var l = r.clone(), f = i.clone(); !i.isZero();) {
                            for (var m = 0, d = 1; 0 == (i.words[0] & d) && m < 26; ++m, d <<= 1);
                            if (m > 0)
                                for (i.iushrn(m); m-- > 0;)(n.isOdd() || o.isOdd()) && (n.iadd(l), o.isub(f)), n.iushrn(1), o.iushrn(1);
                            for (var p = 0, c = 1; 0 == (r.words[0] & c) && p < 26; ++p, c <<= 1);
                            if (p > 0)
                                for (r.iushrn(p); p-- > 0;)(s.isOdd() || u.isOdd()) && (s.iadd(l), u.isub(f)), s.iushrn(1), u.iushrn(1);
                            i.cmp(r) >= 0 ? (i.isub(r), n.isub(s), o.isub(u)) : (r.isub(i), s.isub(n), u.isub(o))
                        }
                        return {
                            a: s,
                            b: u,
                            gcd: r.iushln(a)
                        }
                    }, h.prototype._invmp = function(t) {
                        e(0 === t.negative), e(!t.isZero());
                        var i = this,
                            r = t.clone();
                        i = 0 !== i.negative ? i.umod(t) : i.clone();
                        for (var n, o = new h(1), s = new h(0), u = r.clone(); i.cmpn(1) > 0 && r.cmpn(1) > 0;) {
                            for (var a = 0, l = 1; 0 == (i.words[0] & l) && a < 26; ++a, l <<= 1);
                            if (a > 0)
                                for (i.iushrn(a); a-- > 0;) o.isOdd() && o.iadd(u), o.iushrn(1);
                            for (var f = 0, m = 1; 0 == (r.words[0] & m) && f < 26; ++f, m <<= 1);
                            if (f > 0)
                                for (r.iushrn(f); f-- > 0;) s.isOdd() && s.iadd(u), s.iushrn(1);
                            i.cmp(r) >= 0 ? (i.isub(r), o.isub(s)) : (r.isub(i), s.isub(o))
                        }
                        return (n = 0 === i.cmpn(1) ? o : s).cmpn(0) < 0 && n.iadd(t), n
                    }, h.prototype.gcd = function(t) {
                        if (this.isZero()) return t.abs();
                        if (t.isZero()) return this.abs();
                        var i = this.clone(),
                            r = t.clone();
                        i.negative = 0, r.negative = 0;
                        for (var e = 0; i.isEven() && r.isEven(); e++) i.iushrn(1), r.iushrn(1);
                        for (;;) {
                            for (; i.isEven();) i.iushrn(1);
                            for (; r.isEven();) r.iushrn(1);
                            var n = i.cmp(r);
                            if (n < 0) {
                                var h = i;
                                i = r, r = h
                            } else if (0 === n || 0 === r.cmpn(1)) break;
                            i.isub(r)
                        }
                        return r.iushln(e)
                    }, h.prototype.invm = function(t) {
                        return this.egcd(t).a.umod(t)
                    }, h.prototype.isEven = function() {
                        return 0 == (1 & this.words[0])
                    }, h.prototype.isOdd = function() {
                        return 1 == (1 & this.words[0])
                    }, h.prototype.andln = function(t) {
                        return this.words[0] & t
                    }, h.prototype.bincn = function(t) {
                        e("number" == typeof t);
                        var i = t % 26,
                            r = (t - i) / 26,
                            n = 1 << i;
                        if (this.length <= r) return this._expand(r + 1), this.words[r] |= n, this;
                        for (var h = n, o = r; 0 !== h && o < this.length; o++) {
                            var s = 0 | this.words[o];
                            h = (s += h) >>> 26, s &= 67108863, this.words[o] = s
                        }
                        return 0 !== h && (this.words[o] = h, this.length++), this
                    }, h.prototype.isZero = function() {
                        return 1 === this.length && 0 === this.words[0]
                    }, h.prototype.cmpn = function(t) {
                        var i, r = t < 0;
                        if (0 !== this.negative && !r) return -1;
                        if (0 === this.negative && r) return 1;
                        if (this.strip(), this.length > 1) i = 1;
                        else {
                            r && (t = -t), e(t <= 67108863, "Number is too big");
                            var n = 0 | this.words[0];
                            i = n === t ? 0 : n < t ? -1 : 1
                        }
                        return 0 !== this.negative ? 0 | -i : i
                    }, h.prototype.cmp = function(t) {
                        if (0 !== this.negative && 0 === t.negative) return -1;
                        if (0 === this.negative && 0 !== t.negative) return 1;
                        var i = this.ucmp(t);
                        return 0 !== this.negative ? 0 | -i : i
                    }, h.prototype.ucmp = function(t) {
                        if (this.length > t.length) return 1;
                        if (this.length < t.length) return -1;
                        for (var i = 0, r = this.length - 1; r >= 0; r--) {
                            var e = 0 | this.words[r],
                                n = 0 | t.words[r];
                            if (e !== n) {
                                e < n ? i = -1 : e > n && (i = 1);
                                break
                            }
                        }
                        return i
                    }, h.prototype.gtn = function(t) {
                        return 1 === this.cmpn(t)
                    }, h.prototype.gt = function(t) {
                        return 1 === this.cmp(t)
                    }, h.prototype.gten = function(t) {
                        return this.cmpn(t) >= 0
                    }, h.prototype.gte = function(t) {
                        return this.cmp(t) >= 0
                    }, h.prototype.ltn = function(t) {
                        return -1 === this.cmpn(t)
                    }, h.prototype.lt = function(t) {
                        return -1 === this.cmp(t)
                    }, h.prototype.lten = function(t) {
                        return this.cmpn(t) <= 0
                    }, h.prototype.lte = function(t) {
                        return this.cmp(t) <= 0
                    }, h.prototype.eqn = function(t) {
                        return 0 === this.cmpn(t)
                    }, h.prototype.eq = function(t) {
                        return 0 === this.cmp(t)
                    }, h.red = function(t) {
                        return new _(t)
                    }, h.prototype.toRed = function(t) {
                        return e(!this.red, "Already a number in reduction context"), e(0 === this.negative, "red works only with positives"), t.convertTo(this)._forceRed(t)
                    }, h.prototype.fromRed = function() {
                        return e(this.red, "fromRed works only with numbers in reduction context"), this.red.convertFrom(this)
                    }, h.prototype._forceRed = function(t) {
                        return this.red = t, this
                    }, h.prototype.forceRed = function(t) {
                        return e(!this.red, "Already a number in reduction context"), this._forceRed(t)
                    }, h.prototype.redAdd = function(t) {
                        return e(this.red, "redAdd works only with red numbers"), this.red.add(this, t)
                    }, h.prototype.redIAdd = function(t) {
                        return e(this.red, "redIAdd works only with red numbers"), this.red.iadd(this, t)
                    }, h.prototype.redSub = function(t) {
                        return e(this.red, "redSub works only with red numbers"), this.red.sub(this, t)
                    }, h.prototype.redISub = function(t) {
                        return e(this.red, "redISub works only with red numbers"), this.red.isub(this, t)
                    }, h.prototype.redShl = function(t) {
                        return e(this.red, "redShl works only with red numbers"), this.red.shl(this, t)
                    }, h.prototype.redMul = function(t) {
                        return e(this.red, "redMul works only with red numbers"), this.red._verify2(this, t), this.red.mul(this, t)
                    }, h.prototype.redIMul = function(t) {
                        return e(this.red, "redMul works only with red numbers"), this.red._verify2(this, t), this.red.imul(this, t)
                    }, h.prototype.redSqr = function() {
                        return e(this.red, "redSqr works only with red numbers"), this.red._verify1(this), this.red.sqr(this)
                    }, h.prototype.redISqr = function() {
                        return e(this.red, "redISqr works only with red numbers"), this.red._verify1(this), this.red.isqr(this)
                    }, h.prototype.redSqrt = function() {
                        return e(this.red, "redSqrt works only with red numbers"), this.red._verify1(this), this.red.sqrt(this)
                    }, h.prototype.redInvm = function() {
                        return e(this.red, "redInvm works only with red numbers"), this.red._verify1(this), this.red.invm(this)
                    }, h.prototype.redNeg = function() {
                        return e(this.red, "redNeg works only with red numbers"), this.red._verify1(this), this.red.neg(this)
                    }, h.prototype.redPow = function(t) {
                        return e(this.red && !t.red, "redPow(normalNum)"), this.red._verify1(this), this.red.pow(this, t)
                    };
                    var M = {
                        k256: null,
                        p224: null,
                        p192: null,
                        p25519: null
                    };

                    function v(t, i) {
                        this.name = t, this.p = new h(i, 16), this.n = this.p.bitLength(), this.k = new h(1).iushln(this.n).isub(this.p), this.tmp = this._tmp()
                    }

                    function g() {
                        v.call(this, "k256", "ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffe fffffc2f")
                    }

                    function w() {
                        v.call(this, "p224", "ffffffff ffffffff ffffffff ffffffff 00000000 00000000 00000001")
                    }

                    function y() {
                        v.call(this, "p192", "ffffffff ffffffff ffffffff fffffffe ffffffff ffffffff")
                    }

                    function b() {
                        v.call(this, "25519", "7fffffffffffffff ffffffffffffffff ffffffffffffffff ffffffffffffffed")
                    }

                    function _(t) {
                        if ("string" == typeof t) {
                            var i = h._prime(t);
                            this.m = i.p, this.prime = i
                        } else e(t.gtn(1), "modulus must be greater than 1"), this.m = t, this.prime = null
                    }

                    function B(t) {
                        _.call(this, t), this.shift = this.m.bitLength(), this.shift % 26 != 0 && (this.shift += 26 - this.shift % 26), this.r = new h(1).iushln(this.shift), this.r2 = this.imod(this.r.sqr()), this.rinv = this.r._invmp(this.m), this.minv = this.rinv.mul(this.r).isubn(1).div(this.m), this.minv = this.minv.umod(this.r), this.minv = this.r.sub(this.minv)
                    }
                    v.prototype._tmp = function() {
                        var t = new h(null);
                        return t.words = new Array(Math.ceil(this.n / 13)), t
                    }, v.prototype.ireduce = function(t) {
                        var i, r = t;
                        do {
                            this.split(r, this.tmp), i = (r = (r = this.imulK(r)).iadd(this.tmp)).bitLength()
                        } while (i > this.n);
                        var e = i < this.n ? -1 : r.ucmp(this.p);
                        return 0 === e ? (r.words[0] = 0, r.length = 1) : e > 0 ? r.isub(this.p) : r.strip(), r
                    }, v.prototype.split = function(t, i) {
                        t.iushrn(this.n, 0, i)
                    }, v.prototype.imulK = function(t) {
                        return t.imul(this.k)
                    }, n(g, v), g.prototype.split = function(t, i) {
                        for (var r = Math.min(t.length, 9), e = 0; e < r; e++) i.words[e] = t.words[e];
                        if (i.length = r, t.length <= 9) return t.words[0] = 0, void(t.length = 1);
                        var n = t.words[9];
                        for (i.words[i.length++] = 4194303 & n, e = 10; e < t.length; e++) {
                            var h = 0 | t.words[e];
                            t.words[e - 10] = (4194303 & h) << 4 | n >>> 22, n = h
                        }
                        n >>>= 22, t.words[e - 10] = n, 0 === n && t.length > 10 ? t.length -= 10 : t.length -= 9
                    }, g.prototype.imulK = function(t) {
                        t.words[t.length] = 0, t.words[t.length + 1] = 0, t.length += 2;
                        for (var i = 0, r = 0; r < t.length; r++) {
                            var e = 0 | t.words[r];
                            i += 977 * e, t.words[r] = 67108863 & i, i = 64 * e + (i / 67108864 | 0)
                        }
                        return 0 === t.words[t.length - 1] && (t.length--, 0 === t.words[t.length - 1] && t.length--), t
                    }, n(w, v), n(y, v), n(b, v), b.prototype.imulK = function(t) {
                        for (var i = 0, r = 0; r < t.length; r++) {
                            var e = 19 * (0 | t.words[r]) + i,
                                n = 67108863 & e;
                            e >>>= 26, t.words[r] = n, i = e
                        }
                        return 0 !== i && (t.words[t.length++] = i), t
                    }, h._prime = function(t) {
                        if (M[t]) return M[t];
                        var i;
                        if ("k256" === t) i = new g;
                        else if ("p224" === t) i = new w;
                        else if ("p192" === t) i = new y;
                        else {
                            if ("p25519" !== t) throw new Error("Unknown prime " + t);
                            i = new b
                        }
                        return M[t] = i, i
                    }, _.prototype._verify1 = function(t) {
                        e(0 === t.negative, "red works only with positives"), e(t.red, "red works only with red numbers")
                    }, _.prototype._verify2 = function(t, i) {
                        e(0 == (t.negative | i.negative), "red works only with positives"), e(t.red && t.red === i.red, "red works only with red numbers")
                    }, _.prototype.imod = function(t) {
                        return this.prime ? this.prime.ireduce(t)._forceRed(this) : t.umod(this.m)._forceRed(this)
                    }, _.prototype.neg = function(t) {
                        return t.isZero() ? t.clone() : this.m.sub(t)._forceRed(this)
                    }, _.prototype.add = function(t, i) {
                        this._verify2(t, i);
                        var r = t.add(i);
                        return r.cmp(this.m) >= 0 && r.isub(this.m), r._forceRed(this)
                    }, _.prototype.iadd = function(t, i) {
                        this._verify2(t, i);
                        var r = t.iadd(i);
                        return r.cmp(this.m) >= 0 && r.isub(this.m), r
                    }, _.prototype.sub = function(t, i) {
                        this._verify2(t, i);
                        var r = t.sub(i);
                        return r.cmpn(0) < 0 && r.iadd(this.m), r._forceRed(this)
                    }, _.prototype.isub = function(t, i) {
                        this._verify2(t, i);
                        var r = t.isub(i);
                        return r.cmpn(0) < 0 && r.iadd(this.m), r
                    }, _.prototype.shl = function(t, i) {
                        return this._verify1(t), this.imod(t.ushln(i))
                    }, _.prototype.imul = function(t, i) {
                        return this._verify2(t, i), this.imod(t.imul(i))
                    }, _.prototype.mul = function(t, i) {
                        return this._verify2(t, i), this.imod(t.mul(i))
                    }, _.prototype.isqr = function(t) {
                        return this.imul(t, t.clone())
                    }, _.prototype.sqr = function(t) {
                        return this.mul(t, t)
                    }, _.prototype.sqrt = function(t) {
                        if (t.isZero()) return t.clone();
                        var i = this.m.andln(3);
                        if (e(i % 2 == 1), 3 === i) {
                            var r = this.m.add(new h(1)).iushrn(2);
                            return this.pow(t, r)
                        }
                        for (var n = this.m.subn(1), o = 0; !n.isZero() && 0 === n.andln(1);) o++, n.iushrn(1);
                        e(!n.isZero());
                        var s = new h(1).toRed(this),
                            u = s.redNeg(),
                            a = this.m.subn(1).iushrn(1),
                            l = this.m.bitLength();
                        for (l = new h(2 * l * l).toRed(this); 0 !== this.pow(l, a).cmp(u);) l.redIAdd(u);
                        for (var f = this.pow(l, n), m = this.pow(t, n.addn(1).iushrn(1)), d = this.pow(t, n), p = o; 0 !== d.cmp(s);) {
                            for (var c = d, M = 0; 0 !== c.cmp(s); M++) c = c.redSqr();
                            e(M < p);
                            var v = this.pow(f, new h(1).iushln(p - M - 1));
                            m = m.redMul(v), f = v.redSqr(), d = d.redMul(f), p = M
                        }
                        return m
                    }, _.prototype.invm = function(t) {
                        var i = t._invmp(this.m);
                        return 0 !== i.negative ? (i.negative = 0, this.imod(i).redNeg()) : this.imod(i)
                    }, _.prototype.pow = function(t, i) {
                        if (i.isZero()) return new h(1).toRed(this);
                        if (0 === i.cmpn(1)) return t.clone();
                        var r = new Array(16);
                        r[0] = new h(1).toRed(this), r[1] = t;
                        for (var e = 2; e < r.length; e++) r[e] = this.mul(r[e - 1], t);
                        var n = r[0],
                            o = 0,
                            s = 0,
                            u = i.bitLength() % 26;
                        for (0 === u && (u = 26), e = i.length - 1; e >= 0; e--) {
                            for (var a = i.words[e], l = u - 1; l >= 0; l--) {
                                var f = a >> l & 1;
                                n !== r[0] && (n = this.sqr(n)), 0 !== f || 0 !== o ? (o <<= 1, o |= f, (4 === ++s || 0 === e && 0 === l) && (n = this.mul(n, r[o]), s = 0, o = 0)) : s = 0
                            }
                            u = 26
                        }
                        return n
                    }, _.prototype.convertTo = function(t) {
                        var i = t.umod(this.m);
                        return i === t ? i.clone() : i
                    }, _.prototype.convertFrom = function(t) {
                        var i = t.clone();
                        return i.red = null, i
                    }, h.mont = function(t) {
                        return new B(t)
                    }, n(B, _), B.prototype.convertTo = function(t) {
                        return this.imod(t.ushln(this.shift))
                    }, B.prototype.convertFrom = function(t) {
                        var i = this.imod(t.mul(this.rinv));
                        return i.red = null, i
                    }, B.prototype.imul = function(t, i) {
                        if (t.isZero() || i.isZero()) return t.words[0] = 0, t.length = 1, t;
                        var r = t.imul(i),
                            e = r.maskn(this.shift).mul(this.minv).imaskn(this.shift).mul(this.m),
                            n = r.isub(e).iushrn(this.shift),
                            h = n;
                        return n.cmp(this.m) >= 0 ? h = n.isub(this.m) : n.cmpn(0) < 0 && (h = n.iadd(this.m)), h._forceRed(this)
                    }, B.prototype.mul = function(t, i) {
                        if (t.isZero() || i.isZero()) return new h(0)._forceRed(this);
                        var r = t.mul(i),
                            e = r.maskn(this.shift).mul(this.minv).imaskn(this.shift).mul(this.m),
                            n = r.isub(e).iushrn(this.shift),
                            o = n;
                        return n.cmp(this.m) >= 0 ? o = n.isub(this.m) : n.cmpn(0) < 0 && (o = n.iadd(this.m)), o._forceRed(this)
                    }, B.prototype.invm = function(t) {
                        return this.imod(t._invmp(this.m).mul(this.r2))._forceRed(this)
                    }
                }(t, this)
            }).call(this, r(81)(t))
        },
        9467: function(t, i, r) {
            "use strict";
            var e = r(5483),
                n = r(102),
                h = r(5784),
                o = r(6532),
                s = function(t, i) {
                    if (!(this instanceof s)) return new s(t, i);
                    if (this.extras = {}, this.knownParams = i || [], this.address = this.network = this.amount = this.message = null, "string" == typeof t) {
                        var r = s.parse(t);
                        r.amount && (r.amount = this._parseAmount(r.amount)), this._fromObject(r)
                    } else {
                        if ("object" != typeof t) throw new TypeError("Unrecognized data format.");
                        this._fromObject(t)
                    }
                };
            s.fromString = function(t) {
                if ("string" != typeof t) throw new TypeError("Expected a string");
                return new s(t)
            }, s.fromObject = function(t) {
                return new s(t)
            }, s.isValid = function(t, i) {
                try {
                    new s(t, i)
                } catch (t) {
                    return !1
                }
                return !0
            }, s.parse = function(t) {
                var i = n.parse(t, !0);
                if ("verge:" !== i.protocol) throw new TypeError("Invalid verge URI");
                var r = /[^:]*:\/?\/?([^?]*)/.exec(t);
                return i.query.address = r && r[1] || void 0, i.query
            }, s.Members = ["address", "amount", "message", "label", "r"], s.prototype._fromObject = function(t) {
                if (!h.isValid(t.address)) throw new TypeError("Invalid verge address");
                for (var i in this.address = new h(t.address), this.network = this.address.network, this.amount = t.amount, t)
                    if ("address" !== i && "amount" !== i) {
                        if (/^req-/.exec(i) && -1 === this.knownParams.indexOf(i)) throw Error("Unknown required argument " + i);
                        (s.Members.indexOf(i) > -1 ? this : this.extras)[i] = t[i]
                    }
            }, s.prototype._parseAmount = function(t) {
                if (t = Number(t), isNaN(t)) throw new TypeError("Invalid amount");
                return o.fromBTC(t).toSatoshis()
            }, s.prototype.toObject = s.prototype.toJSON = function() {
                for (var t = {}, i = 0; i < s.Members.length; i++) {
                    var r = s.Members[i];
                    this.hasOwnProperty(r) && void 0 !== this[r] && (t[r] = this[r].toString())
                }
                return e.extend(t, this.extras), t
            }, s.prototype.toString = function() {
                var t = {};
                return this.amount && (t.amount = o.fromSatoshis(this.amount).toBTC()), this.message && (t.message = this.message), this.label && (t.label = this.label), this.r && (t.r = this.r), e.extend(t, this.extras), n.format({
                    protocol: "verge:",
                    host: this.address,
                    query: t
                })
            }, s.prototype.inspect = function() {
                return "<URI: " + this.toString() + ">"
            }, t.exports = s
        }
    }
]);