(window.webpackJsonp = window.webpackJsonp || []).push([
    [172], {
        1077: function(t, n, e) {
            "use strict";
            Object.defineProperty(n, "__esModule", {
                value: !0
            }), n.deleteNameRegistry = n.transferNameOwnership = n.updateNameRegistryData = n.createNameRegistry = n.HASH_PREFIX = n.NAME_PROGRAM_ID = void 0;
            const r = e(162),
                i = e(1078),
                o = e(627),
                u = e(506),
                a = e(506);
            n.NAME_PROGRAM_ID = new r.PublicKey("namesLPneVptA9Z5rqUDD9tMTWEJwofgaYwp8cawRkX"), n.HASH_PREFIX = "SPL Name Service", n.createNameRegistry = async function(t, e, o, s, c, h, d, l) {
                const f = await (0, a.getHashedName)(e),
                    m = await (0, a.getNameAccountKey)(f, d, l),
                    p = h || await t.getMinimumBalanceForRentExemption(o);
                let g;
                if (l) {
                    g = (await (0, a.getNameOwner)(t, l)).owner
                }
                return (0, i.createInstruction)(n.NAME_PROGRAM_ID, r.SystemProgram.programId, m, c, s, f, new u.Numberu64(p), new a.Numberu32(o), d, l, g)
            }, n.updateNameRegistryData = async function(t, e, r, u, s, c) {
                const h = await (0, a.getHashedName)(e),
                    d = await (0, a.getNameAccountKey)(h, s, c);
                let l;
                return l = s || (await o.NameRegistryState.retrieve(t, d)).owner, (0, i.updateInstruction)(n.NAME_PROGRAM_ID, d, new a.Numberu32(r), u, l, c)
            }, n.transferNameOwnership = async function(t, e, r, u, s) {
                const c = await (0, a.getHashedName)(e),
                    h = await (0, a.getNameAccountKey)(c, u, s);
                let d;
                return d = u || (await o.NameRegistryState.retrieve(t, h)).owner, (0, i.transferInstruction)(n.NAME_PROGRAM_ID, h, r, d, u, s)
            }, n.deleteNameRegistry = async function(t, e, r, u, s) {
                const c = await (0, a.getHashedName)(e),
                    h = await (0, a.getNameAccountKey)(c, u, s);
                let d;
                return d = u || (await o.NameRegistryState.retrieve(t, h)).owner, (0, i.deleteInstruction)(n.NAME_PROGRAM_ID, h, r, d)
            }
        },
        1078: function(t, n, e) {
            "use strict";
            Object.defineProperty(n, "__esModule", {
                value: !0
            }), n.deleteInstruction = n.transferInstruction = n.updateInstruction = n.createInstruction = void 0;
            const r = e(162),
                i = e(506);
            n.createInstruction = function(t, n, e, o, u, a, s, c, h, d, l) {
                const f = [Buffer.from(Int8Array.from([0])), new i.Numberu32(a.length).toBuffer(), a, s.toBuffer(), c.toBuffer()],
                    m = Buffer.concat(f),
                    p = [{
                        pubkey: n,
                        isSigner: !1,
                        isWritable: !1
                    }, {
                        pubkey: u,
                        isSigner: !0,
                        isWritable: !0
                    }, {
                        pubkey: e,
                        isSigner: !1,
                        isWritable: !0
                    }, {
                        pubkey: o,
                        isSigner: !1,
                        isWritable: !1
                    }];
                return h ? p.push({
                    pubkey: h,
                    isSigner: !0,
                    isWritable: !1
                }) : p.push({
                    pubkey: new r.PublicKey(Buffer.alloc(32)),
                    isSigner: !1,
                    isWritable: !1
                }), d ? p.push({
                    pubkey: d,
                    isSigner: !1,
                    isWritable: !1
                }) : p.push({
                    pubkey: new r.PublicKey(Buffer.alloc(32)),
                    isSigner: !1,
                    isWritable: !1
                }), l && p.push({
                    pubkey: l,
                    isSigner: !0,
                    isWritable: !1
                }), new r.TransactionInstruction({
                    keys: p,
                    programId: t,
                    data: m
                })
            }, n.updateInstruction = function(t, n, e, o, u, a) {
                const s = [Buffer.from(Int8Array.from([1])), e.toBuffer(), new i.Numberu32(o.length).toBuffer(), o],
                    c = Buffer.concat(s),
                    h = [{
                        pubkey: n,
                        isSigner: !1,
                        isWritable: !0
                    }, {
                        pubkey: u,
                        isSigner: !0,
                        isWritable: !1
                    }];
                return a && h.push({
                    pubkey: a,
                    isSigner: !1,
                    isWritable: !1
                }), new r.TransactionInstruction({
                    keys: h,
                    programId: t,
                    data: c
                })
            }, n.transferInstruction = function(t, n, e, i, o, u) {
                const a = [Buffer.from(Int8Array.from([2])), e.toBuffer()],
                    s = Buffer.concat(a),
                    c = [{
                        pubkey: n,
                        isSigner: !1,
                        isWritable: !0
                    }, {
                        pubkey: i,
                        isSigner: !0,
                        isWritable: !1
                    }];
                return o && c.push({
                    pubkey: o,
                    isSigner: !0,
                    isWritable: !1
                }), u && c.push({
                    pubkey: u,
                    isSigner: !1,
                    isWritable: !1
                }), new r.TransactionInstruction({
                    keys: c,
                    programId: t,
                    data: s
                })
            }, n.deleteInstruction = function(t, n, e, i) {
                const o = [Buffer.from(Int8Array.from([3]))],
                    u = Buffer.concat(o),
                    a = [{
                        pubkey: n,
                        isSigner: !1,
                        isWritable: !0
                    }, {
                        pubkey: i,
                        isSigner: !0,
                        isWritable: !1
                    }, {
                        pubkey: e,
                        isSigner: !1,
                        isWritable: !0
                    }];
                return new r.TransactionInstruction({
                    keys: a,
                    programId: t,
                    data: u
                })
            }
        },
        1870: function(t, n, e) {
            (function(t) {
                ! function(t, n) {
                    "use strict";

                    function r(t, n) {
                        if (!t) throw new Error(n || "Assertion failed")
                    }

                    function i(t, n) {
                        t.super_ = n;
                        var e = function() {};
                        e.prototype = n.prototype, t.prototype = new e, t.prototype.constructor = t
                    }

                    function o(t, n, e) {
                        if (o.isBN(t)) return t;
                        this.negative = 0, this.words = null, this.length = 0, this.red = null, null !== t && ("le" !== n && "be" !== n || (e = n, n = 10), this._init(t || 0, n || 10, e || "be"))
                    }
                    var u;
                    "object" == typeof t ? t.exports = o : n.BN = o, o.BN = o, o.wordSize = 26;
                    try {
                        u = "undefined" != typeof window && void 0 !== window.Buffer ? window.Buffer : e(12).Buffer
                    } catch (t) {}

                    function a(t, n) {
                        var e = t.charCodeAt(n);
                        return e >= 48 && e <= 57 ? e - 48 : e >= 65 && e <= 70 ? e - 55 : e >= 97 && e <= 102 ? e - 87 : void r(!1, "Invalid character in " + t)
                    }

                    function s(t, n, e) {
                        var r = a(t, e);
                        return e - 1 >= n && (r |= a(t, e - 1) << 4), r
                    }

                    function c(t, n, e, i) {
                        for (var o = 0, u = 0, a = Math.min(t.length, e), s = n; s < a; s++) {
                            var c = t.charCodeAt(s) - 48;
                            o *= i, u = c >= 49 ? c - 49 + 10 : c >= 17 ? c - 17 + 10 : c, r(c >= 0 && u < i, "Invalid character"), o += u
                        }
                        return o
                    }

                    function h(t, n) {
                        t.words = n.words, t.length = n.length, t.negative = n.negative, t.red = n.red
                    }
                    if (o.isBN = function(t) {
                            return t instanceof o || null !== t && "object" == typeof t && t.constructor.wordSize === o.wordSize && Array.isArray(t.words)
                        }, o.max = function(t, n) {
                            return t.cmp(n) > 0 ? t : n
                        }, o.min = function(t, n) {
                            return t.cmp(n) < 0 ? t : n
                        }, o.prototype._init = function(t, n, e) {
                            if ("number" == typeof t) return this._initNumber(t, n, e);
                            if ("object" == typeof t) return this._initArray(t, n, e);
                            "hex" === n && (n = 16), r(n === (0 | n) && n >= 2 && n <= 36);
                            var i = 0;
                            "-" === (t = t.toString().replace(/\s+/g, ""))[0] && (i++, this.negative = 1), i < t.length && (16 === n ? this._parseHex(t, i, e) : (this._parseBase(t, n, i), "le" === e && this._initArray(this.toArray(), n, e)))
                        }, o.prototype._initNumber = function(t, n, e) {
                            t < 0 && (this.negative = 1, t = -t), t < 67108864 ? (this.words = [67108863 & t], this.length = 1) : t < 4503599627370496 ? (this.words = [67108863 & t, t / 67108864 & 67108863], this.length = 2) : (r(t < 9007199254740992), this.words = [67108863 & t, t / 67108864 & 67108863, 1], this.length = 3), "le" === e && this._initArray(this.toArray(), n, e)
                        }, o.prototype._initArray = function(t, n, e) {
                            if (r("number" == typeof t.length), t.length <= 0) return this.words = [0], this.length = 1, this;
                            this.length = Math.ceil(t.length / 3), this.words = new Array(this.length);
                            for (var i = 0; i < this.length; i++) this.words[i] = 0;
                            var o, u, a = 0;
                            if ("be" === e)
                                for (i = t.length - 1, o = 0; i >= 0; i -= 3) u = t[i] | t[i - 1] << 8 | t[i - 2] << 16, this.words[o] |= u << a & 67108863, this.words[o + 1] = u >>> 26 - a & 67108863, (a += 24) >= 26 && (a -= 26, o++);
                            else if ("le" === e)
                                for (i = 0, o = 0; i < t.length; i += 3) u = t[i] | t[i + 1] << 8 | t[i + 2] << 16, this.words[o] |= u << a & 67108863, this.words[o + 1] = u >>> 26 - a & 67108863, (a += 24) >= 26 && (a -= 26, o++);
                            return this._strip()
                        }, o.prototype._parseHex = function(t, n, e) {
                            this.length = Math.ceil((t.length - n) / 6), this.words = new Array(this.length);
                            for (var r = 0; r < this.length; r++) this.words[r] = 0;
                            var i, o = 0,
                                u = 0;
                            if ("be" === e)
                                for (r = t.length - 1; r >= n; r -= 2) i = s(t, n, r) << o, this.words[u] |= 67108863 & i, o >= 18 ? (o -= 18, u += 1, this.words[u] |= i >>> 26) : o += 8;
                            else
                                for (r = (t.length - n) % 2 == 0 ? n + 1 : n; r < t.length; r += 2) i = s(t, n, r) << o, this.words[u] |= 67108863 & i, o >= 18 ? (o -= 18, u += 1, this.words[u] |= i >>> 26) : o += 8;
                            this._strip()
                        }, o.prototype._parseBase = function(t, n, e) {
                            this.words = [0], this.length = 1;
                            for (var r = 0, i = 1; i <= 67108863; i *= n) r++;
                            r--, i = i / n | 0;
                            for (var o = t.length - e, u = o % r, a = Math.min(o, o - u) + e, s = 0, h = e; h < a; h += r) s = c(t, h, h + r, n), this.imuln(i), this.words[0] + s < 67108864 ? this.words[0] += s : this._iaddn(s);
                            if (0 !== u) {
                                var d = 1;
                                for (s = c(t, h, t.length, n), h = 0; h < u; h++) d *= n;
                                this.imuln(d), this.words[0] + s < 67108864 ? this.words[0] += s : this._iaddn(s)
                            }
                            this._strip()
                        }, o.prototype.copy = function(t) {
                            t.words = new Array(this.length);
                            for (var n = 0; n < this.length; n++) t.words[n] = this.words[n];
                            t.length = this.length, t.negative = this.negative, t.red = this.red
                        }, o.prototype._move = function(t) {
                            h(t, this)
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
                        o.prototype[Symbol.for("nodejs.util.inspect.custom")] = d
                    } catch (t) {
                        o.prototype.inspect = d
                    } else o.prototype.inspect = d;

                    function d() {
                        return (this.red ? "<BN-R: " : "<BN: ") + this.toString(16) + ">"
                    }
                    var l = ["", "0", "00", "000", "0000", "00000", "000000", "0000000", "00000000", "000000000", "0000000000", "00000000000", "000000000000", "0000000000000", "00000000000000", "000000000000000", "0000000000000000", "00000000000000000", "000000000000000000", "0000000000000000000", "00000000000000000000", "000000000000000000000", "0000000000000000000000", "00000000000000000000000", "000000000000000000000000", "0000000000000000000000000"],
                        f = [0, 0, 25, 16, 12, 11, 10, 9, 8, 8, 7, 7, 7, 7, 6, 6, 6, 6, 6, 6, 6, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5],
                        m = [0, 0, 33554432, 43046721, 16777216, 48828125, 60466176, 40353607, 16777216, 43046721, 1e7, 19487171, 35831808, 62748517, 7529536, 11390625, 16777216, 24137569, 34012224, 47045881, 64e6, 4084101, 5153632, 6436343, 7962624, 9765625, 11881376, 14348907, 17210368, 20511149, 243e5, 28629151, 33554432, 39135393, 45435424, 52521875, 60466176];
                    o.prototype.toString = function(t, n) {
                        var e;
                        if (n = 0 | n || 1, 16 === (t = t || 10) || "hex" === t) {
                            e = "";
                            for (var i = 0, o = 0, u = 0; u < this.length; u++) {
                                var a = this.words[u],
                                    s = (16777215 & (a << i | o)).toString(16);
                                o = a >>> 24 - i & 16777215, (i += 2) >= 26 && (i -= 26, u--), e = 0 !== o || u !== this.length - 1 ? l[6 - s.length] + s + e : s + e
                            }
                            for (0 !== o && (e = o.toString(16) + e); e.length % n != 0;) e = "0" + e;
                            return 0 !== this.negative && (e = "-" + e), e
                        }
                        if (t === (0 | t) && t >= 2 && t <= 36) {
                            var c = f[t],
                                h = m[t];
                            e = "";
                            var d = this.clone();
                            for (d.negative = 0; !d.isZero();) {
                                var p = d.modrn(h).toString(t);
                                e = (d = d.idivn(h)).isZero() ? p + e : l[c - p.length] + p + e
                            }
                            for (this.isZero() && (e = "0" + e); e.length % n != 0;) e = "0" + e;
                            return 0 !== this.negative && (e = "-" + e), e
                        }
                        r(!1, "Base should be between 2 and 36")
                    }, o.prototype.toNumber = function() {
                        var t = this.words[0];
                        return 2 === this.length ? t += 67108864 * this.words[1] : 3 === this.length && 1 === this.words[2] ? t += 4503599627370496 + 67108864 * this.words[1] : this.length > 2 && r(!1, "Number can only safely store up to 53 bits"), 0 !== this.negative ? -t : t
                    }, o.prototype.toJSON = function() {
                        return this.toString(16, 2)
                    }, u && (o.prototype.toBuffer = function(t, n) {
                        return this.toArrayLike(u, t, n)
                    }), o.prototype.toArray = function(t, n) {
                        return this.toArrayLike(Array, t, n)
                    };

                    function p(t, n, e) {
                        e.negative = n.negative ^ t.negative;
                        var r = t.length + n.length | 0;
                        e.length = r, r = r - 1 | 0;
                        var i = 0 | t.words[0],
                            o = 0 | n.words[0],
                            u = i * o,
                            a = 67108863 & u,
                            s = u / 67108864 | 0;
                        e.words[0] = a;
                        for (var c = 1; c < r; c++) {
                            for (var h = s >>> 26, d = 67108863 & s, l = Math.min(c, n.length - 1), f = Math.max(0, c - t.length + 1); f <= l; f++) {
                                var m = c - f | 0;
                                h += (u = (i = 0 | t.words[m]) * (o = 0 | n.words[f]) + d) / 67108864 | 0, d = 67108863 & u
                            }
                            e.words[c] = 0 | d, s = 0 | h
                        }
                        return 0 !== s ? e.words[c] = 0 | s : e.length--, e._strip()
                    }
                    o.prototype.toArrayLike = function(t, n, e) {
                        this._strip();
                        var i = this.byteLength(),
                            o = e || Math.max(1, i);
                        r(i <= o, "byte array longer than desired length"), r(o > 0, "Requested array length <= 0");
                        var u = function(t, n) {
                            return t.allocUnsafe ? t.allocUnsafe(n) : new t(n)
                        }(t, o);
                        return this["_toArrayLike" + ("le" === n ? "LE" : "BE")](u, i), u
                    }, o.prototype._toArrayLikeLE = function(t, n) {
                        for (var e = 0, r = 0, i = 0, o = 0; i < this.length; i++) {
                            var u = this.words[i] << o | r;
                            t[e++] = 255 & u, e < t.length && (t[e++] = u >> 8 & 255), e < t.length && (t[e++] = u >> 16 & 255), 6 === o ? (e < t.length && (t[e++] = u >> 24 & 255), r = 0, o = 0) : (r = u >>> 24, o += 2)
                        }
                        if (e < t.length)
                            for (t[e++] = r; e < t.length;) t[e++] = 0
                    }, o.prototype._toArrayLikeBE = function(t, n) {
                        for (var e = t.length - 1, r = 0, i = 0, o = 0; i < this.length; i++) {
                            var u = this.words[i] << o | r;
                            t[e--] = 255 & u, e >= 0 && (t[e--] = u >> 8 & 255), e >= 0 && (t[e--] = u >> 16 & 255), 6 === o ? (e >= 0 && (t[e--] = u >> 24 & 255), r = 0, o = 0) : (r = u >>> 24, o += 2)
                        }
                        if (e >= 0)
                            for (t[e--] = r; e >= 0;) t[e--] = 0
                    }, Math.clz32 ? o.prototype._countBits = function(t) {
                        return 32 - Math.clz32(t)
                    } : o.prototype._countBits = function(t) {
                        var n = t,
                            e = 0;
                        return n >= 4096 && (e += 13, n >>>= 13), n >= 64 && (e += 7, n >>>= 7), n >= 8 && (e += 4, n >>>= 4), n >= 2 && (e += 2, n >>>= 2), e + n
                    }, o.prototype._zeroBits = function(t) {
                        if (0 === t) return 26;
                        var n = t,
                            e = 0;
                        return 0 == (8191 & n) && (e += 13, n >>>= 13), 0 == (127 & n) && (e += 7, n >>>= 7), 0 == (15 & n) && (e += 4, n >>>= 4), 0 == (3 & n) && (e += 2, n >>>= 2), 0 == (1 & n) && e++, e
                    }, o.prototype.bitLength = function() {
                        var t = this.words[this.length - 1],
                            n = this._countBits(t);
                        return 26 * (this.length - 1) + n
                    }, o.prototype.zeroBits = function() {
                        if (this.isZero()) return 0;
                        for (var t = 0, n = 0; n < this.length; n++) {
                            var e = this._zeroBits(this.words[n]);
                            if (t += e, 26 !== e) break
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
                        for (var n = 0; n < t.length; n++) this.words[n] = this.words[n] | t.words[n];
                        return this._strip()
                    }, o.prototype.ior = function(t) {
                        return r(0 == (this.negative | t.negative)), this.iuor(t)
                    }, o.prototype.or = function(t) {
                        return this.length > t.length ? this.clone().ior(t) : t.clone().ior(this)
                    }, o.prototype.uor = function(t) {
                        return this.length > t.length ? this.clone().iuor(t) : t.clone().iuor(this)
                    }, o.prototype.iuand = function(t) {
                        var n;
                        n = this.length > t.length ? t : this;
                        for (var e = 0; e < n.length; e++) this.words[e] = this.words[e] & t.words[e];
                        return this.length = n.length, this._strip()
                    }, o.prototype.iand = function(t) {
                        return r(0 == (this.negative | t.negative)), this.iuand(t)
                    }, o.prototype.and = function(t) {
                        return this.length > t.length ? this.clone().iand(t) : t.clone().iand(this)
                    }, o.prototype.uand = function(t) {
                        return this.length > t.length ? this.clone().iuand(t) : t.clone().iuand(this)
                    }, o.prototype.iuxor = function(t) {
                        var n, e;
                        this.length > t.length ? (n = this, e = t) : (n = t, e = this);
                        for (var r = 0; r < e.length; r++) this.words[r] = n.words[r] ^ e.words[r];
                        if (this !== n)
                            for (; r < n.length; r++) this.words[r] = n.words[r];
                        return this.length = n.length, this._strip()
                    }, o.prototype.ixor = function(t) {
                        return r(0 == (this.negative | t.negative)), this.iuxor(t)
                    }, o.prototype.xor = function(t) {
                        return this.length > t.length ? this.clone().ixor(t) : t.clone().ixor(this)
                    }, o.prototype.uxor = function(t) {
                        return this.length > t.length ? this.clone().iuxor(t) : t.clone().iuxor(this)
                    }, o.prototype.inotn = function(t) {
                        r("number" == typeof t && t >= 0);
                        var n = 0 | Math.ceil(t / 26),
                            e = t % 26;
                        this._expand(n), e > 0 && n--;
                        for (var i = 0; i < n; i++) this.words[i] = 67108863 & ~this.words[i];
                        return e > 0 && (this.words[i] = ~this.words[i] & 67108863 >> 26 - e), this._strip()
                    }, o.prototype.notn = function(t) {
                        return this.clone().inotn(t)
                    }, o.prototype.setn = function(t, n) {
                        r("number" == typeof t && t >= 0);
                        var e = t / 26 | 0,
                            i = t % 26;
                        return this._expand(e + 1), this.words[e] = n ? this.words[e] | 1 << i : this.words[e] & ~(1 << i), this._strip()
                    }, o.prototype.iadd = function(t) {
                        var n, e, r;
                        if (0 !== this.negative && 0 === t.negative) return this.negative = 0, n = this.isub(t), this.negative ^= 1, this._normSign();
                        if (0 === this.negative && 0 !== t.negative) return t.negative = 0, n = this.isub(t), t.negative = 1, n._normSign();
                        this.length > t.length ? (e = this, r = t) : (e = t, r = this);
                        for (var i = 0, o = 0; o < r.length; o++) n = (0 | e.words[o]) + (0 | r.words[o]) + i, this.words[o] = 67108863 & n, i = n >>> 26;
                        for (; 0 !== i && o < e.length; o++) n = (0 | e.words[o]) + i, this.words[o] = 67108863 & n, i = n >>> 26;
                        if (this.length = e.length, 0 !== i) this.words[this.length] = i, this.length++;
                        else if (e !== this)
                            for (; o < e.length; o++) this.words[o] = e.words[o];
                        return this
                    }, o.prototype.add = function(t) {
                        var n;
                        return 0 !== t.negative && 0 === this.negative ? (t.negative = 0, n = this.sub(t), t.negative ^= 1, n) : 0 === t.negative && 0 !== this.negative ? (this.negative = 0, n = t.sub(this), this.negative = 1, n) : this.length > t.length ? this.clone().iadd(t) : t.clone().iadd(this)
                    }, o.prototype.isub = function(t) {
                        if (0 !== t.negative) {
                            t.negative = 0;
                            var n = this.iadd(t);
                            return t.negative = 1, n._normSign()
                        }
                        if (0 !== this.negative) return this.negative = 0, this.iadd(t), this.negative = 1, this._normSign();
                        var e, r, i = this.cmp(t);
                        if (0 === i) return this.negative = 0, this.length = 1, this.words[0] = 0, this;
                        i > 0 ? (e = this, r = t) : (e = t, r = this);
                        for (var o = 0, u = 0; u < r.length; u++) o = (n = (0 | e.words[u]) - (0 | r.words[u]) + o) >> 26, this.words[u] = 67108863 & n;
                        for (; 0 !== o && u < e.length; u++) o = (n = (0 | e.words[u]) + o) >> 26, this.words[u] = 67108863 & n;
                        if (0 === o && u < e.length && e !== this)
                            for (; u < e.length; u++) this.words[u] = e.words[u];
                        return this.length = Math.max(this.length, u), e !== this && (this.negative = 1), this._strip()
                    }, o.prototype.sub = function(t) {
                        return this.clone().isub(t)
                    };
                    var g = function(t, n, e) {
                        var r, i, o, u = t.words,
                            a = n.words,
                            s = e.words,
                            c = 0,
                            h = 0 | u[0],
                            d = 8191 & h,
                            l = h >>> 13,
                            f = 0 | u[1],
                            m = 8191 & f,
                            p = f >>> 13,
                            g = 0 | u[2],
                            y = 8191 & g,
                            w = g >>> 13,
                            v = 0 | u[3],
                            I = 8191 & v,
                            b = v >>> 13,
                            M = 0 | u[4],
                            T = 8191 & M,
                            k = M >>> 13,
                            A = 0 | u[5],
                            E = 8191 & A,
                            R = A >>> 13,
                            _ = 0 | u[6],
                            O = 8191 & _,
                            S = _ >>> 13,
                            B = 0 | u[7],
                            N = 8191 & B,
                            P = B >>> 13,
                            K = 0 | u[8],
                            j = 8191 & K,
                            z = K >>> 13,
                            C = 0 | u[9],
                            W = 8191 & C,
                            U = C >>> 13,
                            D = 0 | a[0],
                            x = 8191 & D,
                            F = D >>> 13,
                            Y = 0 | a[1],
                            q = 8191 & Y,
                            H = Y >>> 13,
                            G = 0 | a[2],
                            L = 8191 & G,
                            Z = G >>> 13,
                            V = 0 | a[3],
                            $ = 8191 & V,
                            J = V >>> 13,
                            X = 0 | a[4],
                            Q = 8191 & X,
                            tt = X >>> 13,
                            nt = 0 | a[5],
                            et = 8191 & nt,
                            rt = nt >>> 13,
                            it = 0 | a[6],
                            ot = 8191 & it,
                            ut = it >>> 13,
                            at = 0 | a[7],
                            st = 8191 & at,
                            ct = at >>> 13,
                            ht = 0 | a[8],
                            dt = 8191 & ht,
                            lt = ht >>> 13,
                            ft = 0 | a[9],
                            mt = 8191 & ft,
                            pt = ft >>> 13;
                        e.negative = t.negative ^ n.negative, e.length = 19;
                        var gt = (c + (r = Math.imul(d, x)) | 0) + ((8191 & (i = (i = Math.imul(d, F)) + Math.imul(l, x) | 0)) << 13) | 0;
                        c = ((o = Math.imul(l, F)) + (i >>> 13) | 0) + (gt >>> 26) | 0, gt &= 67108863, r = Math.imul(m, x), i = (i = Math.imul(m, F)) + Math.imul(p, x) | 0, o = Math.imul(p, F);
                        var yt = (c + (r = r + Math.imul(d, q) | 0) | 0) + ((8191 & (i = (i = i + Math.imul(d, H) | 0) + Math.imul(l, q) | 0)) << 13) | 0;
                        c = ((o = o + Math.imul(l, H) | 0) + (i >>> 13) | 0) + (yt >>> 26) | 0, yt &= 67108863, r = Math.imul(y, x), i = (i = Math.imul(y, F)) + Math.imul(w, x) | 0, o = Math.imul(w, F), r = r + Math.imul(m, q) | 0, i = (i = i + Math.imul(m, H) | 0) + Math.imul(p, q) | 0, o = o + Math.imul(p, H) | 0;
                        var wt = (c + (r = r + Math.imul(d, L) | 0) | 0) + ((8191 & (i = (i = i + Math.imul(d, Z) | 0) + Math.imul(l, L) | 0)) << 13) | 0;
                        c = ((o = o + Math.imul(l, Z) | 0) + (i >>> 13) | 0) + (wt >>> 26) | 0, wt &= 67108863, r = Math.imul(I, x), i = (i = Math.imul(I, F)) + Math.imul(b, x) | 0, o = Math.imul(b, F), r = r + Math.imul(y, q) | 0, i = (i = i + Math.imul(y, H) | 0) + Math.imul(w, q) | 0, o = o + Math.imul(w, H) | 0, r = r + Math.imul(m, L) | 0, i = (i = i + Math.imul(m, Z) | 0) + Math.imul(p, L) | 0, o = o + Math.imul(p, Z) | 0;
                        var vt = (c + (r = r + Math.imul(d, $) | 0) | 0) + ((8191 & (i = (i = i + Math.imul(d, J) | 0) + Math.imul(l, $) | 0)) << 13) | 0;
                        c = ((o = o + Math.imul(l, J) | 0) + (i >>> 13) | 0) + (vt >>> 26) | 0, vt &= 67108863, r = Math.imul(T, x), i = (i = Math.imul(T, F)) + Math.imul(k, x) | 0, o = Math.imul(k, F), r = r + Math.imul(I, q) | 0, i = (i = i + Math.imul(I, H) | 0) + Math.imul(b, q) | 0, o = o + Math.imul(b, H) | 0, r = r + Math.imul(y, L) | 0, i = (i = i + Math.imul(y, Z) | 0) + Math.imul(w, L) | 0, o = o + Math.imul(w, Z) | 0, r = r + Math.imul(m, $) | 0, i = (i = i + Math.imul(m, J) | 0) + Math.imul(p, $) | 0, o = o + Math.imul(p, J) | 0;
                        var It = (c + (r = r + Math.imul(d, Q) | 0) | 0) + ((8191 & (i = (i = i + Math.imul(d, tt) | 0) + Math.imul(l, Q) | 0)) << 13) | 0;
                        c = ((o = o + Math.imul(l, tt) | 0) + (i >>> 13) | 0) + (It >>> 26) | 0, It &= 67108863, r = Math.imul(E, x), i = (i = Math.imul(E, F)) + Math.imul(R, x) | 0, o = Math.imul(R, F), r = r + Math.imul(T, q) | 0, i = (i = i + Math.imul(T, H) | 0) + Math.imul(k, q) | 0, o = o + Math.imul(k, H) | 0, r = r + Math.imul(I, L) | 0, i = (i = i + Math.imul(I, Z) | 0) + Math.imul(b, L) | 0, o = o + Math.imul(b, Z) | 0, r = r + Math.imul(y, $) | 0, i = (i = i + Math.imul(y, J) | 0) + Math.imul(w, $) | 0, o = o + Math.imul(w, J) | 0, r = r + Math.imul(m, Q) | 0, i = (i = i + Math.imul(m, tt) | 0) + Math.imul(p, Q) | 0, o = o + Math.imul(p, tt) | 0;
                        var bt = (c + (r = r + Math.imul(d, et) | 0) | 0) + ((8191 & (i = (i = i + Math.imul(d, rt) | 0) + Math.imul(l, et) | 0)) << 13) | 0;
                        c = ((o = o + Math.imul(l, rt) | 0) + (i >>> 13) | 0) + (bt >>> 26) | 0, bt &= 67108863, r = Math.imul(O, x), i = (i = Math.imul(O, F)) + Math.imul(S, x) | 0, o = Math.imul(S, F), r = r + Math.imul(E, q) | 0, i = (i = i + Math.imul(E, H) | 0) + Math.imul(R, q) | 0, o = o + Math.imul(R, H) | 0, r = r + Math.imul(T, L) | 0, i = (i = i + Math.imul(T, Z) | 0) + Math.imul(k, L) | 0, o = o + Math.imul(k, Z) | 0, r = r + Math.imul(I, $) | 0, i = (i = i + Math.imul(I, J) | 0) + Math.imul(b, $) | 0, o = o + Math.imul(b, J) | 0, r = r + Math.imul(y, Q) | 0, i = (i = i + Math.imul(y, tt) | 0) + Math.imul(w, Q) | 0, o = o + Math.imul(w, tt) | 0, r = r + Math.imul(m, et) | 0, i = (i = i + Math.imul(m, rt) | 0) + Math.imul(p, et) | 0, o = o + Math.imul(p, rt) | 0;
                        var Mt = (c + (r = r + Math.imul(d, ot) | 0) | 0) + ((8191 & (i = (i = i + Math.imul(d, ut) | 0) + Math.imul(l, ot) | 0)) << 13) | 0;
                        c = ((o = o + Math.imul(l, ut) | 0) + (i >>> 13) | 0) + (Mt >>> 26) | 0, Mt &= 67108863, r = Math.imul(N, x), i = (i = Math.imul(N, F)) + Math.imul(P, x) | 0, o = Math.imul(P, F), r = r + Math.imul(O, q) | 0, i = (i = i + Math.imul(O, H) | 0) + Math.imul(S, q) | 0, o = o + Math.imul(S, H) | 0, r = r + Math.imul(E, L) | 0, i = (i = i + Math.imul(E, Z) | 0) + Math.imul(R, L) | 0, o = o + Math.imul(R, Z) | 0, r = r + Math.imul(T, $) | 0, i = (i = i + Math.imul(T, J) | 0) + Math.imul(k, $) | 0, o = o + Math.imul(k, J) | 0, r = r + Math.imul(I, Q) | 0, i = (i = i + Math.imul(I, tt) | 0) + Math.imul(b, Q) | 0, o = o + Math.imul(b, tt) | 0, r = r + Math.imul(y, et) | 0, i = (i = i + Math.imul(y, rt) | 0) + Math.imul(w, et) | 0, o = o + Math.imul(w, rt) | 0, r = r + Math.imul(m, ot) | 0, i = (i = i + Math.imul(m, ut) | 0) + Math.imul(p, ot) | 0, o = o + Math.imul(p, ut) | 0;
                        var Tt = (c + (r = r + Math.imul(d, st) | 0) | 0) + ((8191 & (i = (i = i + Math.imul(d, ct) | 0) + Math.imul(l, st) | 0)) << 13) | 0;
                        c = ((o = o + Math.imul(l, ct) | 0) + (i >>> 13) | 0) + (Tt >>> 26) | 0, Tt &= 67108863, r = Math.imul(j, x), i = (i = Math.imul(j, F)) + Math.imul(z, x) | 0, o = Math.imul(z, F), r = r + Math.imul(N, q) | 0, i = (i = i + Math.imul(N, H) | 0) + Math.imul(P, q) | 0, o = o + Math.imul(P, H) | 0, r = r + Math.imul(O, L) | 0, i = (i = i + Math.imul(O, Z) | 0) + Math.imul(S, L) | 0, o = o + Math.imul(S, Z) | 0, r = r + Math.imul(E, $) | 0, i = (i = i + Math.imul(E, J) | 0) + Math.imul(R, $) | 0, o = o + Math.imul(R, J) | 0, r = r + Math.imul(T, Q) | 0, i = (i = i + Math.imul(T, tt) | 0) + Math.imul(k, Q) | 0, o = o + Math.imul(k, tt) | 0, r = r + Math.imul(I, et) | 0, i = (i = i + Math.imul(I, rt) | 0) + Math.imul(b, et) | 0, o = o + Math.imul(b, rt) | 0, r = r + Math.imul(y, ot) | 0, i = (i = i + Math.imul(y, ut) | 0) + Math.imul(w, ot) | 0, o = o + Math.imul(w, ut) | 0, r = r + Math.imul(m, st) | 0, i = (i = i + Math.imul(m, ct) | 0) + Math.imul(p, st) | 0, o = o + Math.imul(p, ct) | 0;
                        var kt = (c + (r = r + Math.imul(d, dt) | 0) | 0) + ((8191 & (i = (i = i + Math.imul(d, lt) | 0) + Math.imul(l, dt) | 0)) << 13) | 0;
                        c = ((o = o + Math.imul(l, lt) | 0) + (i >>> 13) | 0) + (kt >>> 26) | 0, kt &= 67108863, r = Math.imul(W, x), i = (i = Math.imul(W, F)) + Math.imul(U, x) | 0, o = Math.imul(U, F), r = r + Math.imul(j, q) | 0, i = (i = i + Math.imul(j, H) | 0) + Math.imul(z, q) | 0, o = o + Math.imul(z, H) | 0, r = r + Math.imul(N, L) | 0, i = (i = i + Math.imul(N, Z) | 0) + Math.imul(P, L) | 0, o = o + Math.imul(P, Z) | 0, r = r + Math.imul(O, $) | 0, i = (i = i + Math.imul(O, J) | 0) + Math.imul(S, $) | 0, o = o + Math.imul(S, J) | 0, r = r + Math.imul(E, Q) | 0, i = (i = i + Math.imul(E, tt) | 0) + Math.imul(R, Q) | 0, o = o + Math.imul(R, tt) | 0, r = r + Math.imul(T, et) | 0, i = (i = i + Math.imul(T, rt) | 0) + Math.imul(k, et) | 0, o = o + Math.imul(k, rt) | 0, r = r + Math.imul(I, ot) | 0, i = (i = i + Math.imul(I, ut) | 0) + Math.imul(b, ot) | 0, o = o + Math.imul(b, ut) | 0, r = r + Math.imul(y, st) | 0, i = (i = i + Math.imul(y, ct) | 0) + Math.imul(w, st) | 0, o = o + Math.imul(w, ct) | 0, r = r + Math.imul(m, dt) | 0, i = (i = i + Math.imul(m, lt) | 0) + Math.imul(p, dt) | 0, o = o + Math.imul(p, lt) | 0;
                        var At = (c + (r = r + Math.imul(d, mt) | 0) | 0) + ((8191 & (i = (i = i + Math.imul(d, pt) | 0) + Math.imul(l, mt) | 0)) << 13) | 0;
                        c = ((o = o + Math.imul(l, pt) | 0) + (i >>> 13) | 0) + (At >>> 26) | 0, At &= 67108863, r = Math.imul(W, q), i = (i = Math.imul(W, H)) + Math.imul(U, q) | 0, o = Math.imul(U, H), r = r + Math.imul(j, L) | 0, i = (i = i + Math.imul(j, Z) | 0) + Math.imul(z, L) | 0, o = o + Math.imul(z, Z) | 0, r = r + Math.imul(N, $) | 0, i = (i = i + Math.imul(N, J) | 0) + Math.imul(P, $) | 0, o = o + Math.imul(P, J) | 0, r = r + Math.imul(O, Q) | 0, i = (i = i + Math.imul(O, tt) | 0) + Math.imul(S, Q) | 0, o = o + Math.imul(S, tt) | 0, r = r + Math.imul(E, et) | 0, i = (i = i + Math.imul(E, rt) | 0) + Math.imul(R, et) | 0, o = o + Math.imul(R, rt) | 0, r = r + Math.imul(T, ot) | 0, i = (i = i + Math.imul(T, ut) | 0) + Math.imul(k, ot) | 0, o = o + Math.imul(k, ut) | 0, r = r + Math.imul(I, st) | 0, i = (i = i + Math.imul(I, ct) | 0) + Math.imul(b, st) | 0, o = o + Math.imul(b, ct) | 0, r = r + Math.imul(y, dt) | 0, i = (i = i + Math.imul(y, lt) | 0) + Math.imul(w, dt) | 0, o = o + Math.imul(w, lt) | 0;
                        var Et = (c + (r = r + Math.imul(m, mt) | 0) | 0) + ((8191 & (i = (i = i + Math.imul(m, pt) | 0) + Math.imul(p, mt) | 0)) << 13) | 0;
                        c = ((o = o + Math.imul(p, pt) | 0) + (i >>> 13) | 0) + (Et >>> 26) | 0, Et &= 67108863, r = Math.imul(W, L), i = (i = Math.imul(W, Z)) + Math.imul(U, L) | 0, o = Math.imul(U, Z), r = r + Math.imul(j, $) | 0, i = (i = i + Math.imul(j, J) | 0) + Math.imul(z, $) | 0, o = o + Math.imul(z, J) | 0, r = r + Math.imul(N, Q) | 0, i = (i = i + Math.imul(N, tt) | 0) + Math.imul(P, Q) | 0, o = o + Math.imul(P, tt) | 0, r = r + Math.imul(O, et) | 0, i = (i = i + Math.imul(O, rt) | 0) + Math.imul(S, et) | 0, o = o + Math.imul(S, rt) | 0, r = r + Math.imul(E, ot) | 0, i = (i = i + Math.imul(E, ut) | 0) + Math.imul(R, ot) | 0, o = o + Math.imul(R, ut) | 0, r = r + Math.imul(T, st) | 0, i = (i = i + Math.imul(T, ct) | 0) + Math.imul(k, st) | 0, o = o + Math.imul(k, ct) | 0, r = r + Math.imul(I, dt) | 0, i = (i = i + Math.imul(I, lt) | 0) + Math.imul(b, dt) | 0, o = o + Math.imul(b, lt) | 0;
                        var Rt = (c + (r = r + Math.imul(y, mt) | 0) | 0) + ((8191 & (i = (i = i + Math.imul(y, pt) | 0) + Math.imul(w, mt) | 0)) << 13) | 0;
                        c = ((o = o + Math.imul(w, pt) | 0) + (i >>> 13) | 0) + (Rt >>> 26) | 0, Rt &= 67108863, r = Math.imul(W, $), i = (i = Math.imul(W, J)) + Math.imul(U, $) | 0, o = Math.imul(U, J), r = r + Math.imul(j, Q) | 0, i = (i = i + Math.imul(j, tt) | 0) + Math.imul(z, Q) | 0, o = o + Math.imul(z, tt) | 0, r = r + Math.imul(N, et) | 0, i = (i = i + Math.imul(N, rt) | 0) + Math.imul(P, et) | 0, o = o + Math.imul(P, rt) | 0, r = r + Math.imul(O, ot) | 0, i = (i = i + Math.imul(O, ut) | 0) + Math.imul(S, ot) | 0, o = o + Math.imul(S, ut) | 0, r = r + Math.imul(E, st) | 0, i = (i = i + Math.imul(E, ct) | 0) + Math.imul(R, st) | 0, o = o + Math.imul(R, ct) | 0, r = r + Math.imul(T, dt) | 0, i = (i = i + Math.imul(T, lt) | 0) + Math.imul(k, dt) | 0, o = o + Math.imul(k, lt) | 0;
                        var _t = (c + (r = r + Math.imul(I, mt) | 0) | 0) + ((8191 & (i = (i = i + Math.imul(I, pt) | 0) + Math.imul(b, mt) | 0)) << 13) | 0;
                        c = ((o = o + Math.imul(b, pt) | 0) + (i >>> 13) | 0) + (_t >>> 26) | 0, _t &= 67108863, r = Math.imul(W, Q), i = (i = Math.imul(W, tt)) + Math.imul(U, Q) | 0, o = Math.imul(U, tt), r = r + Math.imul(j, et) | 0, i = (i = i + Math.imul(j, rt) | 0) + Math.imul(z, et) | 0, o = o + Math.imul(z, rt) | 0, r = r + Math.imul(N, ot) | 0, i = (i = i + Math.imul(N, ut) | 0) + Math.imul(P, ot) | 0, o = o + Math.imul(P, ut) | 0, r = r + Math.imul(O, st) | 0, i = (i = i + Math.imul(O, ct) | 0) + Math.imul(S, st) | 0, o = o + Math.imul(S, ct) | 0, r = r + Math.imul(E, dt) | 0, i = (i = i + Math.imul(E, lt) | 0) + Math.imul(R, dt) | 0, o = o + Math.imul(R, lt) | 0;
                        var Ot = (c + (r = r + Math.imul(T, mt) | 0) | 0) + ((8191 & (i = (i = i + Math.imul(T, pt) | 0) + Math.imul(k, mt) | 0)) << 13) | 0;
                        c = ((o = o + Math.imul(k, pt) | 0) + (i >>> 13) | 0) + (Ot >>> 26) | 0, Ot &= 67108863, r = Math.imul(W, et), i = (i = Math.imul(W, rt)) + Math.imul(U, et) | 0, o = Math.imul(U, rt), r = r + Math.imul(j, ot) | 0, i = (i = i + Math.imul(j, ut) | 0) + Math.imul(z, ot) | 0, o = o + Math.imul(z, ut) | 0, r = r + Math.imul(N, st) | 0, i = (i = i + Math.imul(N, ct) | 0) + Math.imul(P, st) | 0, o = o + Math.imul(P, ct) | 0, r = r + Math.imul(O, dt) | 0, i = (i = i + Math.imul(O, lt) | 0) + Math.imul(S, dt) | 0, o = o + Math.imul(S, lt) | 0;
                        var St = (c + (r = r + Math.imul(E, mt) | 0) | 0) + ((8191 & (i = (i = i + Math.imul(E, pt) | 0) + Math.imul(R, mt) | 0)) << 13) | 0;
                        c = ((o = o + Math.imul(R, pt) | 0) + (i >>> 13) | 0) + (St >>> 26) | 0, St &= 67108863, r = Math.imul(W, ot), i = (i = Math.imul(W, ut)) + Math.imul(U, ot) | 0, o = Math.imul(U, ut), r = r + Math.imul(j, st) | 0, i = (i = i + Math.imul(j, ct) | 0) + Math.imul(z, st) | 0, o = o + Math.imul(z, ct) | 0, r = r + Math.imul(N, dt) | 0, i = (i = i + Math.imul(N, lt) | 0) + Math.imul(P, dt) | 0, o = o + Math.imul(P, lt) | 0;
                        var Bt = (c + (r = r + Math.imul(O, mt) | 0) | 0) + ((8191 & (i = (i = i + Math.imul(O, pt) | 0) + Math.imul(S, mt) | 0)) << 13) | 0;
                        c = ((o = o + Math.imul(S, pt) | 0) + (i >>> 13) | 0) + (Bt >>> 26) | 0, Bt &= 67108863, r = Math.imul(W, st), i = (i = Math.imul(W, ct)) + Math.imul(U, st) | 0, o = Math.imul(U, ct), r = r + Math.imul(j, dt) | 0, i = (i = i + Math.imul(j, lt) | 0) + Math.imul(z, dt) | 0, o = o + Math.imul(z, lt) | 0;
                        var Nt = (c + (r = r + Math.imul(N, mt) | 0) | 0) + ((8191 & (i = (i = i + Math.imul(N, pt) | 0) + Math.imul(P, mt) | 0)) << 13) | 0;
                        c = ((o = o + Math.imul(P, pt) | 0) + (i >>> 13) | 0) + (Nt >>> 26) | 0, Nt &= 67108863, r = Math.imul(W, dt), i = (i = Math.imul(W, lt)) + Math.imul(U, dt) | 0, o = Math.imul(U, lt);
                        var Pt = (c + (r = r + Math.imul(j, mt) | 0) | 0) + ((8191 & (i = (i = i + Math.imul(j, pt) | 0) + Math.imul(z, mt) | 0)) << 13) | 0;
                        c = ((o = o + Math.imul(z, pt) | 0) + (i >>> 13) | 0) + (Pt >>> 26) | 0, Pt &= 67108863;
                        var Kt = (c + (r = Math.imul(W, mt)) | 0) + ((8191 & (i = (i = Math.imul(W, pt)) + Math.imul(U, mt) | 0)) << 13) | 0;
                        return c = ((o = Math.imul(U, pt)) + (i >>> 13) | 0) + (Kt >>> 26) | 0, Kt &= 67108863, s[0] = gt, s[1] = yt, s[2] = wt, s[3] = vt, s[4] = It, s[5] = bt, s[6] = Mt, s[7] = Tt, s[8] = kt, s[9] = At, s[10] = Et, s[11] = Rt, s[12] = _t, s[13] = Ot, s[14] = St, s[15] = Bt, s[16] = Nt, s[17] = Pt, s[18] = Kt, 0 !== c && (s[19] = c, e.length++), e
                    };

                    function y(t, n, e) {
                        e.negative = n.negative ^ t.negative, e.length = t.length + n.length;
                        for (var r = 0, i = 0, o = 0; o < e.length - 1; o++) {
                            var u = i;
                            i = 0;
                            for (var a = 67108863 & r, s = Math.min(o, n.length - 1), c = Math.max(0, o - t.length + 1); c <= s; c++) {
                                var h = o - c,
                                    d = (0 | t.words[h]) * (0 | n.words[c]),
                                    l = 67108863 & d;
                                a = 67108863 & (l = l + a | 0), i += (u = (u = u + (d / 67108864 | 0) | 0) + (l >>> 26) | 0) >>> 26, u &= 67108863
                            }
                            e.words[o] = a, r = u, u = i
                        }
                        return 0 !== r ? e.words[o] = r : e.length--, e._strip()
                    }

                    function w(t, n, e) {
                        return y(t, n, e)
                    }

                    function v(t, n) {
                        this.x = t, this.y = n
                    }
                    Math.imul || (g = p), o.prototype.mulTo = function(t, n) {
                        var e = this.length + t.length;
                        return 10 === this.length && 10 === t.length ? g(this, t, n) : e < 63 ? p(this, t, n) : e < 1024 ? y(this, t, n) : w(this, t, n)
                    }, v.prototype.makeRBT = function(t) {
                        for (var n = new Array(t), e = o.prototype._countBits(t) - 1, r = 0; r < t; r++) n[r] = this.revBin(r, e, t);
                        return n
                    }, v.prototype.revBin = function(t, n, e) {
                        if (0 === t || t === e - 1) return t;
                        for (var r = 0, i = 0; i < n; i++) r |= (1 & t) << n - i - 1, t >>= 1;
                        return r
                    }, v.prototype.permute = function(t, n, e, r, i, o) {
                        for (var u = 0; u < o; u++) r[u] = n[t[u]], i[u] = e[t[u]]
                    }, v.prototype.transform = function(t, n, e, r, i, o) {
                        this.permute(o, t, n, e, r, i);
                        for (var u = 1; u < i; u <<= 1)
                            for (var a = u << 1, s = Math.cos(2 * Math.PI / a), c = Math.sin(2 * Math.PI / a), h = 0; h < i; h += a)
                                for (var d = s, l = c, f = 0; f < u; f++) {
                                    var m = e[h + f],
                                        p = r[h + f],
                                        g = e[h + f + u],
                                        y = r[h + f + u],
                                        w = d * g - l * y;
                                    y = d * y + l * g, g = w, e[h + f] = m + g, r[h + f] = p + y, e[h + f + u] = m - g, r[h + f + u] = p - y, f !== a && (w = s * d - c * l, l = s * l + c * d, d = w)
                                }
                    }, v.prototype.guessLen13b = function(t, n) {
                        var e = 1 | Math.max(n, t),
                            r = 1 & e,
                            i = 0;
                        for (e = e / 2 | 0; e; e >>>= 1) i++;
                        return 1 << i + 1 + r
                    }, v.prototype.conjugate = function(t, n, e) {
                        if (!(e <= 1))
                            for (var r = 0; r < e / 2; r++) {
                                var i = t[r];
                                t[r] = t[e - r - 1], t[e - r - 1] = i, i = n[r], n[r] = -n[e - r - 1], n[e - r - 1] = -i
                            }
                    }, v.prototype.normalize13b = function(t, n) {
                        for (var e = 0, r = 0; r < n / 2; r++) {
                            var i = 8192 * Math.round(t[2 * r + 1] / n) + Math.round(t[2 * r] / n) + e;
                            t[r] = 67108863 & i, e = i < 67108864 ? 0 : i / 67108864 | 0
                        }
                        return t
                    }, v.prototype.convert13b = function(t, n, e, i) {
                        for (var o = 0, u = 0; u < n; u++) o += 0 | t[u], e[2 * u] = 8191 & o, o >>>= 13, e[2 * u + 1] = 8191 & o, o >>>= 13;
                        for (u = 2 * n; u < i; ++u) e[u] = 0;
                        r(0 === o), r(0 == (-8192 & o))
                    }, v.prototype.stub = function(t) {
                        for (var n = new Array(t), e = 0; e < t; e++) n[e] = 0;
                        return n
                    }, v.prototype.mulp = function(t, n, e) {
                        var r = 2 * this.guessLen13b(t.length, n.length),
                            i = this.makeRBT(r),
                            o = this.stub(r),
                            u = new Array(r),
                            a = new Array(r),
                            s = new Array(r),
                            c = new Array(r),
                            h = new Array(r),
                            d = new Array(r),
                            l = e.words;
                        l.length = r, this.convert13b(t.words, t.length, u, r), this.convert13b(n.words, n.length, c, r), this.transform(u, o, a, s, r, i), this.transform(c, o, h, d, r, i);
                        for (var f = 0; f < r; f++) {
                            var m = a[f] * h[f] - s[f] * d[f];
                            s[f] = a[f] * d[f] + s[f] * h[f], a[f] = m
                        }
                        return this.conjugate(a, s, r), this.transform(a, s, l, o, r, i), this.conjugate(l, o, r), this.normalize13b(l, r), e.negative = t.negative ^ n.negative, e.length = t.length + n.length, e._strip()
                    }, o.prototype.mul = function(t) {
                        var n = new o(null);
                        return n.words = new Array(this.length + t.length), this.mulTo(t, n)
                    }, o.prototype.mulf = function(t) {
                        var n = new o(null);
                        return n.words = new Array(this.length + t.length), w(this, t, n)
                    }, o.prototype.imul = function(t) {
                        return this.clone().mulTo(t, this)
                    }, o.prototype.imuln = function(t) {
                        var n = t < 0;
                        n && (t = -t), r("number" == typeof t), r(t < 67108864);
                        for (var e = 0, i = 0; i < this.length; i++) {
                            var o = (0 | this.words[i]) * t,
                                u = (67108863 & o) + (67108863 & e);
                            e >>= 26, e += o / 67108864 | 0, e += u >>> 26, this.words[i] = 67108863 & u
                        }
                        return 0 !== e && (this.words[i] = e, this.length++), n ? this.ineg() : this
                    }, o.prototype.muln = function(t) {
                        return this.clone().imuln(t)
                    }, o.prototype.sqr = function() {
                        return this.mul(this)
                    }, o.prototype.isqr = function() {
                        return this.imul(this.clone())
                    }, o.prototype.pow = function(t) {
                        var n = function(t) {
                            for (var n = new Array(t.bitLength()), e = 0; e < n.length; e++) {
                                var r = e / 26 | 0,
                                    i = e % 26;
                                n[e] = t.words[r] >>> i & 1
                            }
                            return n
                        }(t);
                        if (0 === n.length) return new o(1);
                        for (var e = this, r = 0; r < n.length && 0 === n[r]; r++, e = e.sqr());
                        if (++r < n.length)
                            for (var i = e.sqr(); r < n.length; r++, i = i.sqr()) 0 !== n[r] && (e = e.mul(i));
                        return e
                    }, o.prototype.iushln = function(t) {
                        r("number" == typeof t && t >= 0);
                        var n, e = t % 26,
                            i = (t - e) / 26,
                            o = 67108863 >>> 26 - e << 26 - e;
                        if (0 !== e) {
                            var u = 0;
                            for (n = 0; n < this.length; n++) {
                                var a = this.words[n] & o,
                                    s = (0 | this.words[n]) - a << e;
                                this.words[n] = s | u, u = a >>> 26 - e
                            }
                            u && (this.words[n] = u, this.length++)
                        }
                        if (0 !== i) {
                            for (n = this.length - 1; n >= 0; n--) this.words[n + i] = this.words[n];
                            for (n = 0; n < i; n++) this.words[n] = 0;
                            this.length += i
                        }
                        return this._strip()
                    }, o.prototype.ishln = function(t) {
                        return r(0 === this.negative), this.iushln(t)
                    }, o.prototype.iushrn = function(t, n, e) {
                        var i;
                        r("number" == typeof t && t >= 0), i = n ? (n - n % 26) / 26 : 0;
                        var o = t % 26,
                            u = Math.min((t - o) / 26, this.length),
                            a = 67108863 ^ 67108863 >>> o << o,
                            s = e;
                        if (i -= u, i = Math.max(0, i), s) {
                            for (var c = 0; c < u; c++) s.words[c] = this.words[c];
                            s.length = u
                        }
                        if (0 === u);
                        else if (this.length > u)
                            for (this.length -= u, c = 0; c < this.length; c++) this.words[c] = this.words[c + u];
                        else this.words[0] = 0, this.length = 1;
                        var h = 0;
                        for (c = this.length - 1; c >= 0 && (0 !== h || c >= i); c--) {
                            var d = 0 | this.words[c];
                            this.words[c] = h << 26 - o | d >>> o, h = d & a
                        }
                        return s && 0 !== h && (s.words[s.length++] = h), 0 === this.length && (this.words[0] = 0, this.length = 1), this._strip()
                    }, o.prototype.ishrn = function(t, n, e) {
                        return r(0 === this.negative), this.iushrn(t, n, e)
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
                        var n = t % 26,
                            e = (t - n) / 26,
                            i = 1 << n;
                        return !(this.length <= e) && !!(this.words[e] & i)
                    }, o.prototype.imaskn = function(t) {
                        r("number" == typeof t && t >= 0);
                        var n = t % 26,
                            e = (t - n) / 26;
                        if (r(0 === this.negative, "imaskn works only with positive numbers"), this.length <= e) return this;
                        if (0 !== n && e++, this.length = Math.min(e, this.length), 0 !== n) {
                            var i = 67108863 ^ 67108863 >>> n << n;
                            this.words[this.length - 1] &= i
                        }
                        return this._strip()
                    }, o.prototype.maskn = function(t) {
                        return this.clone().imaskn(t)
                    }, o.prototype.iaddn = function(t) {
                        return r("number" == typeof t), r(t < 67108864), t < 0 ? this.isubn(-t) : 0 !== this.negative ? 1 === this.length && (0 | this.words[0]) <= t ? (this.words[0] = t - (0 | this.words[0]), this.negative = 0, this) : (this.negative = 0, this.isubn(t), this.negative = 1, this) : this._iaddn(t)
                    }, o.prototype._iaddn = function(t) {
                        this.words[0] += t;
                        for (var n = 0; n < this.length && this.words[n] >= 67108864; n++) this.words[n] -= 67108864, n === this.length - 1 ? this.words[n + 1] = 1 : this.words[n + 1]++;
                        return this.length = Math.max(this.length, n + 1), this
                    }, o.prototype.isubn = function(t) {
                        if (r("number" == typeof t), r(t < 67108864), t < 0) return this.iaddn(-t);
                        if (0 !== this.negative) return this.negative = 0, this.iaddn(t), this.negative = 1, this;
                        if (this.words[0] -= t, 1 === this.length && this.words[0] < 0) this.words[0] = -this.words[0], this.negative = 1;
                        else
                            for (var n = 0; n < this.length && this.words[n] < 0; n++) this.words[n] += 67108864, this.words[n + 1] -= 1;
                        return this._strip()
                    }, o.prototype.addn = function(t) {
                        return this.clone().iaddn(t)
                    }, o.prototype.subn = function(t) {
                        return this.clone().isubn(t)
                    }, o.prototype.iabs = function() {
                        return this.negative = 0, this
                    }, o.prototype.abs = function() {
                        return this.clone().iabs()
                    }, o.prototype._ishlnsubmul = function(t, n, e) {
                        var i, o, u = t.length + e;
                        this._expand(u);
                        var a = 0;
                        for (i = 0; i < t.length; i++) {
                            o = (0 | this.words[i + e]) + a;
                            var s = (0 | t.words[i]) * n;
                            a = ((o -= 67108863 & s) >> 26) - (s / 67108864 | 0), this.words[i + e] = 67108863 & o
                        }
                        for (; i < this.length - e; i++) a = (o = (0 | this.words[i + e]) + a) >> 26, this.words[i + e] = 67108863 & o;
                        if (0 === a) return this._strip();
                        for (r(-1 === a), a = 0, i = 0; i < this.length; i++) a = (o = -(0 | this.words[i]) + a) >> 26, this.words[i] = 67108863 & o;
                        return this.negative = 1, this._strip()
                    }, o.prototype._wordDiv = function(t, n) {
                        var e = (this.length, t.length),
                            r = this.clone(),
                            i = t,
                            u = 0 | i.words[i.length - 1];
                        0 !== (e = 26 - this._countBits(u)) && (i = i.ushln(e), r.iushln(e), u = 0 | i.words[i.length - 1]);
                        var a, s = r.length - i.length;
                        if ("mod" !== n) {
                            (a = new o(null)).length = s + 1, a.words = new Array(a.length);
                            for (var c = 0; c < a.length; c++) a.words[c] = 0
                        }
                        var h = r.clone()._ishlnsubmul(i, 1, s);
                        0 === h.negative && (r = h, a && (a.words[s] = 1));
                        for (var d = s - 1; d >= 0; d--) {
                            var l = 67108864 * (0 | r.words[i.length + d]) + (0 | r.words[i.length + d - 1]);
                            for (l = Math.min(l / u | 0, 67108863), r._ishlnsubmul(i, l, d); 0 !== r.negative;) l--, r.negative = 0, r._ishlnsubmul(i, 1, d), r.isZero() || (r.negative ^= 1);
                            a && (a.words[d] = l)
                        }
                        return a && a._strip(), r._strip(), "div" !== n && 0 !== e && r.iushrn(e), {
                            div: a || null,
                            mod: r
                        }
                    }, o.prototype.divmod = function(t, n, e) {
                        return r(!t.isZero()), this.isZero() ? {
                            div: new o(0),
                            mod: new o(0)
                        } : 0 !== this.negative && 0 === t.negative ? (a = this.neg().divmod(t, n), "mod" !== n && (i = a.div.neg()), "div" !== n && (u = a.mod.neg(), e && 0 !== u.negative && u.iadd(t)), {
                            div: i,
                            mod: u
                        }) : 0 === this.negative && 0 !== t.negative ? (a = this.divmod(t.neg(), n), "mod" !== n && (i = a.div.neg()), {
                            div: i,
                            mod: a.mod
                        }) : 0 != (this.negative & t.negative) ? (a = this.neg().divmod(t.neg(), n), "div" !== n && (u = a.mod.neg(), e && 0 !== u.negative && u.isub(t)), {
                            div: a.div,
                            mod: u
                        }) : t.length > this.length || this.cmp(t) < 0 ? {
                            div: new o(0),
                            mod: this
                        } : 1 === t.length ? "div" === n ? {
                            div: this.divn(t.words[0]),
                            mod: null
                        } : "mod" === n ? {
                            div: null,
                            mod: new o(this.modrn(t.words[0]))
                        } : {
                            div: this.divn(t.words[0]),
                            mod: new o(this.modrn(t.words[0]))
                        } : this._wordDiv(t, n);
                        var i, u, a
                    }, o.prototype.div = function(t) {
                        return this.divmod(t, "div", !1).div
                    }, o.prototype.mod = function(t) {
                        return this.divmod(t, "mod", !1).mod
                    }, o.prototype.umod = function(t) {
                        return this.divmod(t, "mod", !0).mod
                    }, o.prototype.divRound = function(t) {
                        var n = this.divmod(t);
                        if (n.mod.isZero()) return n.div;
                        var e = 0 !== n.div.negative ? n.mod.isub(t) : n.mod,
                            r = t.ushrn(1),
                            i = t.andln(1),
                            o = e.cmp(r);
                        return o < 0 || 1 === i && 0 === o ? n.div : 0 !== n.div.negative ? n.div.isubn(1) : n.div.iaddn(1)
                    }, o.prototype.modrn = function(t) {
                        var n = t < 0;
                        n && (t = -t), r(t <= 67108863);
                        for (var e = (1 << 26) % t, i = 0, o = this.length - 1; o >= 0; o--) i = (e * i + (0 | this.words[o])) % t;
                        return n ? -i : i
                    }, o.prototype.modn = function(t) {
                        return this.modrn(t)
                    }, o.prototype.idivn = function(t) {
                        var n = t < 0;
                        n && (t = -t), r(t <= 67108863);
                        for (var e = 0, i = this.length - 1; i >= 0; i--) {
                            var o = (0 | this.words[i]) + 67108864 * e;
                            this.words[i] = o / t | 0, e = o % t
                        }
                        return this._strip(), n ? this.ineg() : this
                    }, o.prototype.divn = function(t) {
                        return this.clone().idivn(t)
                    }, o.prototype.egcd = function(t) {
                        r(0 === t.negative), r(!t.isZero());
                        var n = this,
                            e = t.clone();
                        n = 0 !== n.negative ? n.umod(t) : n.clone();
                        for (var i = new o(1), u = new o(0), a = new o(0), s = new o(1), c = 0; n.isEven() && e.isEven();) n.iushrn(1), e.iushrn(1), ++c;
                        for (var h = e.clone(), d = n.clone(); !n.isZero();) {
                            for (var l = 0, f = 1; 0 == (n.words[0] & f) && l < 26; ++l, f <<= 1);
                            if (l > 0)
                                for (n.iushrn(l); l-- > 0;)(i.isOdd() || u.isOdd()) && (i.iadd(h), u.isub(d)), i.iushrn(1), u.iushrn(1);
                            for (var m = 0, p = 1; 0 == (e.words[0] & p) && m < 26; ++m, p <<= 1);
                            if (m > 0)
                                for (e.iushrn(m); m-- > 0;)(a.isOdd() || s.isOdd()) && (a.iadd(h), s.isub(d)), a.iushrn(1), s.iushrn(1);
                            n.cmp(e) >= 0 ? (n.isub(e), i.isub(a), u.isub(s)) : (e.isub(n), a.isub(i), s.isub(u))
                        }
                        return {
                            a: a,
                            b: s,
                            gcd: e.iushln(c)
                        }
                    }, o.prototype._invmp = function(t) {
                        r(0 === t.negative), r(!t.isZero());
                        var n = this,
                            e = t.clone();
                        n = 0 !== n.negative ? n.umod(t) : n.clone();
                        for (var i, u = new o(1), a = new o(0), s = e.clone(); n.cmpn(1) > 0 && e.cmpn(1) > 0;) {
                            for (var c = 0, h = 1; 0 == (n.words[0] & h) && c < 26; ++c, h <<= 1);
                            if (c > 0)
                                for (n.iushrn(c); c-- > 0;) u.isOdd() && u.iadd(s), u.iushrn(1);
                            for (var d = 0, l = 1; 0 == (e.words[0] & l) && d < 26; ++d, l <<= 1);
                            if (d > 0)
                                for (e.iushrn(d); d-- > 0;) a.isOdd() && a.iadd(s), a.iushrn(1);
                            n.cmp(e) >= 0 ? (n.isub(e), u.isub(a)) : (e.isub(n), a.isub(u))
                        }
                        return (i = 0 === n.cmpn(1) ? u : a).cmpn(0) < 0 && i.iadd(t), i
                    }, o.prototype.gcd = function(t) {
                        if (this.isZero()) return t.abs();
                        if (t.isZero()) return this.abs();
                        var n = this.clone(),
                            e = t.clone();
                        n.negative = 0, e.negative = 0;
                        for (var r = 0; n.isEven() && e.isEven(); r++) n.iushrn(1), e.iushrn(1);
                        for (;;) {
                            for (; n.isEven();) n.iushrn(1);
                            for (; e.isEven();) e.iushrn(1);
                            var i = n.cmp(e);
                            if (i < 0) {
                                var o = n;
                                n = e, e = o
                            } else if (0 === i || 0 === e.cmpn(1)) break;
                            n.isub(e)
                        }
                        return e.iushln(r)
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
                        var n = t % 26,
                            e = (t - n) / 26,
                            i = 1 << n;
                        if (this.length <= e) return this._expand(e + 1), this.words[e] |= i, this;
                        for (var o = i, u = e; 0 !== o && u < this.length; u++) {
                            var a = 0 | this.words[u];
                            o = (a += o) >>> 26, a &= 67108863, this.words[u] = a
                        }
                        return 0 !== o && (this.words[u] = o, this.length++), this
                    }, o.prototype.isZero = function() {
                        return 1 === this.length && 0 === this.words[0]
                    }, o.prototype.cmpn = function(t) {
                        var n, e = t < 0;
                        if (0 !== this.negative && !e) return -1;
                        if (0 === this.negative && e) return 1;
                        if (this._strip(), this.length > 1) n = 1;
                        else {
                            e && (t = -t), r(t <= 67108863, "Number is too big");
                            var i = 0 | this.words[0];
                            n = i === t ? 0 : i < t ? -1 : 1
                        }
                        return 0 !== this.negative ? 0 | -n : n
                    }, o.prototype.cmp = function(t) {
                        if (0 !== this.negative && 0 === t.negative) return -1;
                        if (0 === this.negative && 0 !== t.negative) return 1;
                        var n = this.ucmp(t);
                        return 0 !== this.negative ? 0 | -n : n
                    }, o.prototype.ucmp = function(t) {
                        if (this.length > t.length) return 1;
                        if (this.length < t.length) return -1;
                        for (var n = 0, e = this.length - 1; e >= 0; e--) {
                            var r = 0 | this.words[e],
                                i = 0 | t.words[e];
                            if (r !== i) {
                                r < i ? n = -1 : r > i && (n = 1);
                                break
                            }
                        }
                        return n
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
                        return new E(t)
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
                    var I = {
                        k256: null,
                        p224: null,
                        p192: null,
                        p25519: null
                    };

                    function b(t, n) {
                        this.name = t, this.p = new o(n, 16), this.n = this.p.bitLength(), this.k = new o(1).iushln(this.n).isub(this.p), this.tmp = this._tmp()
                    }

                    function M() {
                        b.call(this, "k256", "ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffe fffffc2f")
                    }

                    function T() {
                        b.call(this, "p224", "ffffffff ffffffff ffffffff ffffffff 00000000 00000000 00000001")
                    }

                    function k() {
                        b.call(this, "p192", "ffffffff ffffffff ffffffff fffffffe ffffffff ffffffff")
                    }

                    function A() {
                        b.call(this, "25519", "7fffffffffffffff ffffffffffffffff ffffffffffffffff ffffffffffffffed")
                    }

                    function E(t) {
                        if ("string" == typeof t) {
                            var n = o._prime(t);
                            this.m = n.p, this.prime = n
                        } else r(t.gtn(1), "modulus must be greater than 1"), this.m = t, this.prime = null
                    }

                    function R(t) {
                        E.call(this, t), this.shift = this.m.bitLength(), this.shift % 26 != 0 && (this.shift += 26 - this.shift % 26), this.r = new o(1).iushln(this.shift), this.r2 = this.imod(this.r.sqr()), this.rinv = this.r._invmp(this.m), this.minv = this.rinv.mul(this.r).isubn(1).div(this.m), this.minv = this.minv.umod(this.r), this.minv = this.r.sub(this.minv)
                    }
                    b.prototype._tmp = function() {
                        var t = new o(null);
                        return t.words = new Array(Math.ceil(this.n / 13)), t
                    }, b.prototype.ireduce = function(t) {
                        var n, e = t;
                        do {
                            this.split(e, this.tmp), n = (e = (e = this.imulK(e)).iadd(this.tmp)).bitLength()
                        } while (n > this.n);
                        var r = n < this.n ? -1 : e.ucmp(this.p);
                        return 0 === r ? (e.words[0] = 0, e.length = 1) : r > 0 ? e.isub(this.p) : void 0 !== e.strip ? e.strip() : e._strip(), e
                    }, b.prototype.split = function(t, n) {
                        t.iushrn(this.n, 0, n)
                    }, b.prototype.imulK = function(t) {
                        return t.imul(this.k)
                    }, i(M, b), M.prototype.split = function(t, n) {
                        for (var e = Math.min(t.length, 9), r = 0; r < e; r++) n.words[r] = t.words[r];
                        if (n.length = e, t.length <= 9) return t.words[0] = 0, void(t.length = 1);
                        var i = t.words[9];
                        for (n.words[n.length++] = 4194303 & i, r = 10; r < t.length; r++) {
                            var o = 0 | t.words[r];
                            t.words[r - 10] = (4194303 & o) << 4 | i >>> 22, i = o
                        }
                        i >>>= 22, t.words[r - 10] = i, 0 === i && t.length > 10 ? t.length -= 10 : t.length -= 9
                    }, M.prototype.imulK = function(t) {
                        t.words[t.length] = 0, t.words[t.length + 1] = 0, t.length += 2;
                        for (var n = 0, e = 0; e < t.length; e++) {
                            var r = 0 | t.words[e];
                            n += 977 * r, t.words[e] = 67108863 & n, n = 64 * r + (n / 67108864 | 0)
                        }
                        return 0 === t.words[t.length - 1] && (t.length--, 0 === t.words[t.length - 1] && t.length--), t
                    }, i(T, b), i(k, b), i(A, b), A.prototype.imulK = function(t) {
                        for (var n = 0, e = 0; e < t.length; e++) {
                            var r = 19 * (0 | t.words[e]) + n,
                                i = 67108863 & r;
                            r >>>= 26, t.words[e] = i, n = r
                        }
                        return 0 !== n && (t.words[t.length++] = n), t
                    }, o._prime = function(t) {
                        if (I[t]) return I[t];
                        var n;
                        if ("k256" === t) n = new M;
                        else if ("p224" === t) n = new T;
                        else if ("p192" === t) n = new k;
                        else {
                            if ("p25519" !== t) throw new Error("Unknown prime " + t);
                            n = new A
                        }
                        return I[t] = n, n
                    }, E.prototype._verify1 = function(t) {
                        r(0 === t.negative, "red works only with positives"), r(t.red, "red works only with red numbers")
                    }, E.prototype._verify2 = function(t, n) {
                        r(0 == (t.negative | n.negative), "red works only with positives"), r(t.red && t.red === n.red, "red works only with red numbers")
                    }, E.prototype.imod = function(t) {
                        return this.prime ? this.prime.ireduce(t)._forceRed(this) : (h(t, t.umod(this.m)._forceRed(this)), t)
                    }, E.prototype.neg = function(t) {
                        return t.isZero() ? t.clone() : this.m.sub(t)._forceRed(this)
                    }, E.prototype.add = function(t, n) {
                        this._verify2(t, n);
                        var e = t.add(n);
                        return e.cmp(this.m) >= 0 && e.isub(this.m), e._forceRed(this)
                    }, E.prototype.iadd = function(t, n) {
                        this._verify2(t, n);
                        var e = t.iadd(n);
                        return e.cmp(this.m) >= 0 && e.isub(this.m), e
                    }, E.prototype.sub = function(t, n) {
                        this._verify2(t, n);
                        var e = t.sub(n);
                        return e.cmpn(0) < 0 && e.iadd(this.m), e._forceRed(this)
                    }, E.prototype.isub = function(t, n) {
                        this._verify2(t, n);
                        var e = t.isub(n);
                        return e.cmpn(0) < 0 && e.iadd(this.m), e
                    }, E.prototype.shl = function(t, n) {
                        return this._verify1(t), this.imod(t.ushln(n))
                    }, E.prototype.imul = function(t, n) {
                        return this._verify2(t, n), this.imod(t.imul(n))
                    }, E.prototype.mul = function(t, n) {
                        return this._verify2(t, n), this.imod(t.mul(n))
                    }, E.prototype.isqr = function(t) {
                        return this.imul(t, t.clone())
                    }, E.prototype.sqr = function(t) {
                        return this.mul(t, t)
                    }, E.prototype.sqrt = function(t) {
                        if (t.isZero()) return t.clone();
                        var n = this.m.andln(3);
                        if (r(n % 2 == 1), 3 === n) {
                            var e = this.m.add(new o(1)).iushrn(2);
                            return this.pow(t, e)
                        }
                        for (var i = this.m.subn(1), u = 0; !i.isZero() && 0 === i.andln(1);) u++, i.iushrn(1);
                        r(!i.isZero());
                        var a = new o(1).toRed(this),
                            s = a.redNeg(),
                            c = this.m.subn(1).iushrn(1),
                            h = this.m.bitLength();
                        for (h = new o(2 * h * h).toRed(this); 0 !== this.pow(h, c).cmp(s);) h.redIAdd(s);
                        for (var d = this.pow(h, i), l = this.pow(t, i.addn(1).iushrn(1)), f = this.pow(t, i), m = u; 0 !== f.cmp(a);) {
                            for (var p = f, g = 0; 0 !== p.cmp(a); g++) p = p.redSqr();
                            r(g < m);
                            var y = this.pow(d, new o(1).iushln(m - g - 1));
                            l = l.redMul(y), d = y.redSqr(), f = f.redMul(d), m = g
                        }
                        return l
                    }, E.prototype.invm = function(t) {
                        var n = t._invmp(this.m);
                        return 0 !== n.negative ? (n.negative = 0, this.imod(n).redNeg()) : this.imod(n)
                    }, E.prototype.pow = function(t, n) {
                        if (n.isZero()) return new o(1).toRed(this);
                        if (0 === n.cmpn(1)) return t.clone();
                        var e = new Array(16);
                        e[0] = new o(1).toRed(this), e[1] = t;
                        for (var r = 2; r < e.length; r++) e[r] = this.mul(e[r - 1], t);
                        var i = e[0],
                            u = 0,
                            a = 0,
                            s = n.bitLength() % 26;
                        for (0 === s && (s = 26), r = n.length - 1; r >= 0; r--) {
                            for (var c = n.words[r], h = s - 1; h >= 0; h--) {
                                var d = c >> h & 1;
                                i !== e[0] && (i = this.sqr(i)), 0 !== d || 0 !== u ? (u <<= 1, u |= d, (4 === ++a || 0 === r && 0 === h) && (i = this.mul(i, e[u]), a = 0, u = 0)) : a = 0
                            }
                            s = 26
                        }
                        return i
                    }, E.prototype.convertTo = function(t) {
                        var n = t.umod(this.m);
                        return n === t ? n.clone() : n
                    }, E.prototype.convertFrom = function(t) {
                        var n = t.clone();
                        return n.red = null, n
                    }, o.mont = function(t) {
                        return new R(t)
                    }, i(R, E), R.prototype.convertTo = function(t) {
                        return this.imod(t.ushln(this.shift))
                    }, R.prototype.convertFrom = function(t) {
                        var n = this.imod(t.mul(this.rinv));
                        return n.red = null, n
                    }, R.prototype.imul = function(t, n) {
                        if (t.isZero() || n.isZero()) return t.words[0] = 0, t.length = 1, t;
                        var e = t.imul(n),
                            r = e.maskn(this.shift).mul(this.minv).imaskn(this.shift).mul(this.m),
                            i = e.isub(r).iushrn(this.shift),
                            o = i;
                        return i.cmp(this.m) >= 0 ? o = i.isub(this.m) : i.cmpn(0) < 0 && (o = i.iadd(this.m)), o._forceRed(this)
                    }, R.prototype.mul = function(t, n) {
                        if (t.isZero() || n.isZero()) return new o(0)._forceRed(this);
                        var e = t.mul(n),
                            r = e.maskn(this.shift).mul(this.minv).imaskn(this.shift).mul(this.m),
                            i = e.isub(r).iushrn(this.shift),
                            u = i;
                        return i.cmp(this.m) >= 0 ? u = i.isub(this.m) : i.cmpn(0) < 0 && (u = i.iadd(this.m)), u._forceRed(this)
                    }, R.prototype.invm = function(t) {
                        return this.imod(t._invmp(this.m).mul(this.r2))._forceRed(this)
                    }
                }(t, this)
            }).call(this, e(81)(t))
        },
        1871: function(t, n, e) {
            "use strict";
            var r = this && this.__createBinding || (Object.create ? function(t, n, e, r) {
                    void 0 === r && (r = e), Object.defineProperty(t, r, {
                        enumerable: !0,
                        get: function() {
                            return n[e]
                        }
                    })
                } : function(t, n, e, r) {
                    void 0 === r && (r = e), t[r] = n[e]
                }),
                i = this && this.__setModuleDefault || (Object.create ? function(t, n) {
                    Object.defineProperty(t, "default", {
                        enumerable: !0,
                        value: n
                    })
                } : function(t, n) {
                    t.default = n
                }),
                o = this && this.__decorate || function(t, n, e, r) {
                    var i, o = arguments.length,
                        u = o < 3 ? n : null === r ? r = Object.getOwnPropertyDescriptor(n, e) : r;
                    if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) u = Reflect.decorate(t, n, e, r);
                    else
                        for (var a = t.length - 1; a >= 0; a--)(i = t[a]) && (u = (o < 3 ? i(u) : o > 3 ? i(n, e, u) : i(n, e)) || u);
                    return o > 3 && u && Object.defineProperty(n, e, u), u
                },
                u = this && this.__importStar || function(t) {
                    if (t && t.__esModule) return t;
                    var n = {};
                    if (null != t)
                        for (var e in t) "default" !== e && Object.hasOwnProperty.call(t, e) && r(n, t, e);
                    return i(n, t), n
                },
                a = this && this.__importDefault || function(t) {
                    return t && t.__esModule ? t : {
                        default: t
                    }
                };
            Object.defineProperty(n, "__esModule", {
                value: !0
            }), n.deserializeUnchecked = n.deserialize = n.serialize = n.BinaryReader = n.BinaryWriter = n.BorshError = n.baseDecode = n.baseEncode = void 0;
            const s = a(e(1870)),
                c = a(e(84)),
                h = u(e(1076)),
                d = new("function" != typeof global.TextDecoder ? h.TextDecoder : global.TextDecoder)("utf-8", {
                    fatal: !0
                });
            n.baseEncode = function(t) {
                return "string" == typeof t && (t = Buffer.from(t, "utf8")), c.default.encode(Buffer.from(t))
            }, n.baseDecode = function(t) {
                return Buffer.from(c.default.decode(t))
            };
            class BorshError extends Error {
                constructor(t) {
                    super(t), this.fieldPath = [], this.originalMessage = t
                }
                addToFieldPath(t) {
                    this.fieldPath.splice(0, 0, t), this.message = this.originalMessage + ": " + this.fieldPath.join(".")
                }
            }
            n.BorshError = BorshError;
            class BinaryWriter {
                constructor() {
                    this.buf = Buffer.alloc(1024), this.length = 0
                }
                maybeResize() {
                    this.buf.length < 16 + this.length && (this.buf = Buffer.concat([this.buf, Buffer.alloc(1024)]))
                }
                writeU8(t) {
                    this.maybeResize(), this.buf.writeUInt8(t, this.length), this.length += 1
                }
                writeU16(t) {
                    this.maybeResize(), this.buf.writeUInt16LE(t, this.length), this.length += 2
                }
                writeU32(t) {
                    this.maybeResize(), this.buf.writeUInt32LE(t, this.length), this.length += 4
                }
                writeU64(t) {
                    this.maybeResize(), this.writeBuffer(Buffer.from(new s.default(t).toArray("le", 8)))
                }
                writeU128(t) {
                    this.maybeResize(), this.writeBuffer(Buffer.from(new s.default(t).toArray("le", 16)))
                }
                writeU256(t) {
                    this.maybeResize(), this.writeBuffer(Buffer.from(new s.default(t).toArray("le", 32)))
                }
                writeU512(t) {
                    this.maybeResize(), this.writeBuffer(Buffer.from(new s.default(t).toArray("le", 64)))
                }
                writeBuffer(t) {
                    this.buf = Buffer.concat([Buffer.from(this.buf.subarray(0, this.length)), t, Buffer.alloc(1024)]), this.length += t.length
                }
                writeString(t) {
                    this.maybeResize();
                    const n = Buffer.from(t, "utf8");
                    this.writeU32(n.length), this.writeBuffer(n)
                }
                writeFixedArray(t) {
                    this.writeBuffer(Buffer.from(t))
                }
                writeArray(t, n) {
                    this.maybeResize(), this.writeU32(t.length);
                    for (const e of t) this.maybeResize(), n(e)
                }
                toArray() {
                    return this.buf.subarray(0, this.length)
                }
            }

            function l(t, n, e) {
                const r = e.value;
                e.value = function(...t) {
                    try {
                        return r.apply(this, t)
                    } catch (t) {
                        if (t instanceof RangeError) {
                            const n = t.code;
                            if (["ERR_BUFFER_OUT_OF_BOUNDS", "ERR_OUT_OF_RANGE"].indexOf(n) >= 0) throw new BorshError("Reached the end of buffer when deserializing")
                        }
                        throw t
                    }
                }
            }
            n.BinaryWriter = BinaryWriter;
            class BinaryReader {
                constructor(t) {
                    this.buf = t, this.offset = 0
                }
                readU8() {
                    const t = this.buf.readUInt8(this.offset);
                    return this.offset += 1, t
                }
                readU16() {
                    const t = this.buf.readUInt16LE(this.offset);
                    return this.offset += 2, t
                }
                readU32() {
                    const t = this.buf.readUInt32LE(this.offset);
                    return this.offset += 4, t
                }
                readU64() {
                    const t = this.readBuffer(8);
                    return new s.default(t, "le")
                }
                readU128() {
                    const t = this.readBuffer(16);
                    return new s.default(t, "le")
                }
                readU256() {
                    const t = this.readBuffer(32);
                    return new s.default(t, "le")
                }
                readU512() {
                    const t = this.readBuffer(64);
                    return new s.default(t, "le")
                }
                readBuffer(t) {
                    if (this.offset + t > this.buf.length) throw new BorshError(`Expected buffer length ${t} isn't within bounds`);
                    const n = this.buf.slice(this.offset, this.offset + t);
                    return this.offset += t, n
                }
                readString() {
                    const t = this.readU32(),
                        n = this.readBuffer(t);
                    try {
                        return d.decode(n)
                    } catch (t) {
                        throw new BorshError("Error decoding UTF-8 string: " + t)
                    }
                }
                readFixedArray(t) {
                    return new Uint8Array(this.readBuffer(t))
                }
                readArray(t) {
                    const n = this.readU32(),
                        e = Array();
                    for (let r = 0; r < n; ++r) e.push(t());
                    return e
                }
            }

            function f(t) {
                return t.charAt(0).toUpperCase() + t.slice(1)
            }

            function m(t, n, e, r, i) {
                try {
                    if ("string" == typeof r) i["write" + f(r)](e);
                    else if (r instanceof Array)
                        if ("number" == typeof r[0]) {
                            if (e.length !== r[0]) throw new BorshError(`Expecting byte array of length ${r[0]}, but got ${e.length} bytes`);
                            i.writeFixedArray(e)
                        } else i.writeArray(e, e => {
                            m(t, n, e, r[0], i)
                        });
                    else if (void 0 !== r.kind) switch (r.kind) {
                        case "option":
                            null == e ? i.writeU8(0) : (i.writeU8(1), m(t, n, e, r.type, i));
                            break;
                        default:
                            throw new BorshError(`FieldType ${r} unrecognized`)
                    } else p(t, e, i)
                } catch (t) {
                    throw t instanceof BorshError && t.addToFieldPath(n), t
                }
            }

            function p(t, n, e) {
                const r = t.get(n.constructor);
                if (!r) throw new BorshError(`Class ${n.constructor.name} is missing in schema`);
                if ("struct" === r.kind) r.fields.map(([r, i]) => {
                    m(t, r, n[r], i, e)
                });
                else {
                    if ("enum" !== r.kind) throw new BorshError(`Unexpected schema kind: ${r.kind} for ${n.constructor.name}`);
                    {
                        const i = n[r.field];
                        for (let o = 0; o < r.values.length; ++o) {
                            const [u, a] = r.values[o];
                            if (u === i) {
                                e.writeU8(o), m(t, u, n[u], a, e);
                                break
                            }
                        }
                    }
                }
            }

            function g(t, n, e, r) {
                try {
                    if ("string" == typeof e) return r["read" + f(e)]();
                    if (e instanceof Array) return "number" == typeof e[0] ? r.readFixedArray(e[0]) : r.readArray(() => g(t, n, e[0], r));
                    if ("option" === e.kind) {
                        return r.readU8() ? g(t, n, e.type, r) : void 0
                    }
                    return y(t, e, r)
                } catch (t) {
                    throw t instanceof BorshError && t.addToFieldPath(n), t
                }
            }

            function y(t, n, e) {
                const r = t.get(n);
                if (!r) throw new BorshError(`Class ${n.name} is missing in schema`);
                if ("struct" === r.kind) {
                    const r = {};
                    for (const [i, o] of t.get(n).fields) r[i] = g(t, i, o, e);
                    return new n(r)
                }
                if ("enum" === r.kind) {
                    const i = e.readU8();
                    if (i >= r.values.length) throw new BorshError(`Enum index: ${i} is out of range`);
                    const [o, u] = r.values[i];
                    return new n({
                        [o]: g(t, o, u, e)
                    })
                }
                throw new BorshError(`Unexpected schema kind: ${r.kind} for ${n.constructor.name}`)
            }
            o([l], BinaryReader.prototype, "readU8", null), o([l], BinaryReader.prototype, "readU16", null), o([l], BinaryReader.prototype, "readU32", null), o([l], BinaryReader.prototype, "readU64", null), o([l], BinaryReader.prototype, "readU128", null), o([l], BinaryReader.prototype, "readU256", null), o([l], BinaryReader.prototype, "readU512", null), o([l], BinaryReader.prototype, "readString", null), o([l], BinaryReader.prototype, "readFixedArray", null), o([l], BinaryReader.prototype, "readArray", null), n.BinaryReader = BinaryReader, n.serialize = function(t, n) {
                const e = new BinaryWriter;
                return p(t, n, e), e.toArray()
            }, n.deserialize = function(t, n, e) {
                const r = new BinaryReader(e),
                    i = y(t, n, r);
                if (r.offset < e.length) throw new BorshError(`Unexpected ${e.length-r.offset} bytes after deserialized data`);
                return i
            }, n.deserializeUnchecked = function(t, n, e) {
                return y(t, n, new BinaryReader(e))
            }
        },
        2311: function(t, n, e) {
            "use strict";
            var r;
            e.r(n), e.d(n, "TokenInstruction", (function() {
                    return r
                })), e.d(n, "initializeMintInstructionData", (function() {
                    return h
                })), e.d(n, "createInitializeMintInstruction", (function() {
                    return d
                })), e.d(n, "decodeInitializeMintInstruction", (function() {
                    return l
                })), e.d(n, "decodeInitializeMintInstructionUnchecked", (function() {
                    return f
                })), e.d(n, "initializeAccountInstructionData", (function() {
                    return m
                })), e.d(n, "createInitializeAccountInstruction", (function() {
                    return p
                })), e.d(n, "decodeInitializeAccountInstruction", (function() {
                    return g
                })), e.d(n, "decodeInitializeAccountInstructionUnchecked", (function() {
                    return y
                })), e.d(n, "initializeMultisigInstructionData", (function() {
                    return w
                })), e.d(n, "createInitializeMultisigInstruction", (function() {
                    return v
                })), e.d(n, "decodeInitializeMultisigInstruction", (function() {
                    return I
                })), e.d(n, "decodeInitializeMultisigInstructionUnchecked", (function() {
                    return b
                })), e.d(n, "transferInstructionData", (function() {
                    return T
                })), e.d(n, "createTransferInstruction", (function() {
                    return k
                })), e.d(n, "decodeTransferInstruction", (function() {
                    return A
                })), e.d(n, "decodeTransferInstructionUnchecked", (function() {
                    return E
                })), e.d(n, "approveInstructionData", (function() {
                    return R
                })), e.d(n, "createApproveInstruction", (function() {
                    return _
                })), e.d(n, "decodeApproveInstruction", (function() {
                    return O
                })), e.d(n, "decodeApproveInstructionUnchecked", (function() {
                    return S
                })), e.d(n, "revokeInstructionData", (function() {
                    return B
                })), e.d(n, "createRevokeInstruction", (function() {
                    return N
                })), e.d(n, "decodeRevokeInstruction", (function() {
                    return P
                })), e.d(n, "decodeRevokeInstructionUnchecked", (function() {
                    return K
                })), e.d(n, "AuthorityType", (function() {
                    return j
                })), e.d(n, "setAuthorityInstructionData", (function() {
                    return z
                })), e.d(n, "createSetAuthorityInstruction", (function() {
                    return C
                })), e.d(n, "decodeSetAuthorityInstruction", (function() {
                    return W
                })), e.d(n, "decodeSetAuthorityInstructionUnchecked", (function() {
                    return U
                })), e.d(n, "mintToInstructionData", (function() {
                    return D
                })), e.d(n, "createMintToInstruction", (function() {
                    return x
                })), e.d(n, "decodeMintToInstruction", (function() {
                    return F
                })), e.d(n, "decodeMintToInstructionUnchecked", (function() {
                    return Y
                })), e.d(n, "burnInstructionData", (function() {
                    return q
                })), e.d(n, "createBurnInstruction", (function() {
                    return H
                })), e.d(n, "decodeBurnInstruction", (function() {
                    return G
                })), e.d(n, "decodeBurnInstructionUnchecked", (function() {
                    return L
                })), e.d(n, "closeAccountInstructionData", (function() {
                    return Z
                })), e.d(n, "createCloseAccountInstruction", (function() {
                    return V
                })), e.d(n, "decodeCloseAccountInstruction", (function() {
                    return $
                })), e.d(n, "decodeCloseAccountInstructionUnchecked", (function() {
                    return J
                })), e.d(n, "freezeAccountInstructionData", (function() {
                    return X
                })), e.d(n, "createFreezeAccountInstruction", (function() {
                    return Q
                })), e.d(n, "decodeFreezeAccountInstruction", (function() {
                    return tt
                })), e.d(n, "decodeFreezeAccountInstructionUnchecked", (function() {
                    return nt
                })), e.d(n, "thawAccountInstructionData", (function() {
                    return et
                })), e.d(n, "createThawAccountInstruction", (function() {
                    return rt
                })), e.d(n, "decodeThawAccountInstruction", (function() {
                    return it
                })), e.d(n, "decodeThawAccountInstructionUnchecked", (function() {
                    return ot
                })), e.d(n, "transferCheckedInstructionData", (function() {
                    return ut
                })), e.d(n, "createTransferCheckedInstruction", (function() {
                    return at
                })), e.d(n, "decodeTransferCheckedInstruction", (function() {
                    return st
                })), e.d(n, "decodeTransferCheckedInstructionUnchecked", (function() {
                    return ct
                })), e.d(n, "approveCheckedInstructionData", (function() {
                    return ht
                })), e.d(n, "createApproveCheckedInstruction", (function() {
                    return dt
                })), e.d(n, "decodeApproveCheckedInstruction", (function() {
                    return lt
                })), e.d(n, "decodeApproveCheckedInstructionUnchecked", (function() {
                    return ft
                })), e.d(n, "mintToCheckedInstructionData", (function() {
                    return mt
                })), e.d(n, "createMintToCheckedInstruction", (function() {
                    return pt
                })), e.d(n, "decodeMintToCheckedInstruction", (function() {
                    return gt
                })), e.d(n, "decodeMintToCheckedInstructionUnchecked", (function() {
                    return yt
                })), e.d(n, "burnCheckedInstructionData", (function() {
                    return wt
                })), e.d(n, "createBurnCheckedInstruction", (function() {
                    return vt
                })), e.d(n, "decodeBurnCheckedInstruction", (function() {
                    return It
                })), e.d(n, "decodeBurnCheckedInstructionUnchecked", (function() {
                    return bt
                })), e.d(n, "syncNativeInstructionData", (function() {
                    return Mt
                })), e.d(n, "createSyncNativeInstruction", (function() {
                    return Tt
                })), e.d(n, "decodeSyncNativeInstruction", (function() {
                    return kt
                })), e.d(n, "decodeSyncNativeInstructionUnchecked", (function() {
                    return At
                })), e.d(n, "decodeInstruction", (function() {
                    return Et
                })), e.d(n, "isInitializeMintInstruction", (function() {
                    return Rt
                })), e.d(n, "isInitializeAccountInstruction", (function() {
                    return _t
                })), e.d(n, "isInitializeMultisigInstruction", (function() {
                    return Ot
                })), e.d(n, "isTransferInstruction", (function() {
                    return St
                })), e.d(n, "isApproveInstruction", (function() {
                    return Bt
                })), e.d(n, "isRevokeInstruction", (function() {
                    return Nt
                })), e.d(n, "isSetAuthorityInstruction", (function() {
                    return Pt
                })), e.d(n, "isMintToInstruction", (function() {
                    return Kt
                })), e.d(n, "isBurnInstruction", (function() {
                    return jt
                })), e.d(n, "isCloseAccountInstruction", (function() {
                    return zt
                })), e.d(n, "isFreezeAccountInstruction", (function() {
                    return Ct
                })), e.d(n, "isThawAccountInstruction", (function() {
                    return Wt
                })), e.d(n, "isTransferCheckedInstruction", (function() {
                    return Ut
                })), e.d(n, "isApproveCheckedInstruction", (function() {
                    return Dt
                })), e.d(n, "isMintToCheckedInstruction", (function() {
                    return xt
                })), e.d(n, "isBurnCheckedInstruction", (function() {
                    return Ft
                })), e.d(n, "isSyncNativeInstruction", (function() {
                    return Yt
                })), e.d(n, "createAssociatedTokenAccountInstruction", (function() {
                    return qt
                })), e.d(n, "AccountState", (function() {
                    return Ht
                })), e.d(n, "AccountLayout", (function() {
                    return Gt
                })), e.d(n, "ACCOUNT_SIZE", (function() {
                    return Lt
                })), e.d(n, "getAccount", (function() {
                    return Zt
                })), e.d(n, "getMinimumBalanceForRentExemptAccount", (function() {
                    return Vt
                })), e.d(n, "MintLayout", (function() {
                    return $t
                })), e.d(n, "MINT_SIZE", (function() {
                    return Jt
                })), e.d(n, "getMint", (function() {
                    return Xt
                })), e.d(n, "getMinimumBalanceForRentExemptMint", (function() {
                    return Qt
                })), e.d(n, "getAssociatedTokenAddress", (function() {
                    return tn
                })), e.d(n, "MultisigLayout", (function() {
                    return nn
                })), e.d(n, "MULTISIG_SIZE", (function() {
                    return en
                })), e.d(n, "getMultisig", (function() {
                    return rn
                })), e.d(n, "getMinimumBalanceForRentExemptMultisig", (function() {
                    return on
                })), e.d(n, "createMint", (function() {
                    return un
                })), e.d(n, "createAccount", (function() {
                    return sn
                })), e.d(n, "createWrappedNativeAccount", (function() {
                    return cn
                })), e.d(n, "createMultisig", (function() {
                    return hn
                })), e.d(n, "transfer", (function() {
                    return ln
                })), e.d(n, "approve", (function() {
                    return fn
                })), e.d(n, "revoke", (function() {
                    return mn
                })), e.d(n, "setAuthority", (function() {
                    return pn
                })), e.d(n, "mintTo", (function() {
                    return gn
                })), e.d(n, "burn", (function() {
                    return yn
                })), e.d(n, "closeAccount", (function() {
                    return wn
                })), e.d(n, "freezeAccount", (function() {
                    return vn
                })), e.d(n, "thawAccount", (function() {
                    return In
                })), e.d(n, "transferChecked", (function() {
                    return bn
                })), e.d(n, "approveChecked", (function() {
                    return Mn
                })), e.d(n, "mintToChecked", (function() {
                    return Tn
                })), e.d(n, "burnChecked", (function() {
                    return kn
                })), e.d(n, "syncNative", (function() {
                    return An
                })), e.d(n, "createAssociatedTokenAccount", (function() {
                    return an
                })), e.d(n, "getOrCreateAssociatedTokenAccount", (function() {
                    return En
                })), e.d(n, "TOKEN_PROGRAM_ID", (function() {
                    return a
                })), e.d(n, "ASSOCIATED_TOKEN_PROGRAM_ID", (function() {
                    return s
                })), e.d(n, "NATIVE_MINT", (function() {
                    return c
                })), e.d(n, "TokenError", (function() {
                    return TokenError
                })), e.d(n, "TokenAccountNotFoundError", (function() {
                    return TokenAccountNotFoundError
                })), e.d(n, "TokenInvalidAccountOwnerError", (function() {
                    return TokenInvalidAccountOwnerError
                })), e.d(n, "TokenInvalidAccountSizeError", (function() {
                    return TokenInvalidAccountSizeError
                })), e.d(n, "TokenInvalidMintError", (function() {
                    return TokenInvalidMintError
                })), e.d(n, "TokenInvalidOwnerError", (function() {
                    return TokenInvalidOwnerError
                })), e.d(n, "TokenOwnerOffCurveError", (function() {
                    return TokenOwnerOffCurveError
                })), e.d(n, "TokenInvalidInstructionProgramError", (function() {
                    return TokenInvalidInstructionProgramError
                })), e.d(n, "TokenInvalidInstructionKeysError", (function() {
                    return TokenInvalidInstructionKeysError
                })), e.d(n, "TokenInvalidInstructionDataError", (function() {
                    return TokenInvalidInstructionDataError
                })), e.d(n, "TokenInvalidInstructionTypeError", (function() {
                    return TokenInvalidInstructionTypeError
                })),
                function(t) {
                    t[t.InitializeMint = 0] = "InitializeMint", t[t.InitializeAccount = 1] = "InitializeAccount", t[t.InitializeMultisig = 2] = "InitializeMultisig", t[t.Transfer = 3] = "Transfer", t[t.Approve = 4] = "Approve", t[t.Revoke = 5] = "Revoke", t[t.SetAuthority = 6] = "SetAuthority", t[t.MintTo = 7] = "MintTo", t[t.Burn = 8] = "Burn", t[t.CloseAccount = 9] = "CloseAccount", t[t.FreezeAccount = 10] = "FreezeAccount", t[t.ThawAccount = 11] = "ThawAccount", t[t.TransferChecked = 12] = "TransferChecked", t[t.ApproveChecked = 13] = "ApproveChecked", t[t.MintToChecked = 14] = "MintToChecked", t[t.BurnChecked = 15] = "BurnChecked", t[t.InitializeAccount2 = 16] = "InitializeAccount2", t[t.SyncNative = 17] = "SyncNative", t[t.InitializeAccount3 = 18] = "InitializeAccount3", t[t.InitializeMultisig2 = 19] = "InitializeMultisig2", t[t.InitializeMint2 = 20] = "InitializeMint2"
                }(r || (r = {}));
            var i = e(4),
                o = e(41),
                u = e(15);
            const a = new u.PublicKey("TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA"),
                s = new u.PublicKey("ATokenGPvbdGVxr1b2hvZbsiqW5xWH25efTNsLJA8knL"),
                c = new u.PublicKey("So11111111111111111111111111111111111111112");
            class TokenError extends Error {
                constructor(t) {
                    super(t)
                }
            }
            class TokenAccountNotFoundError extends TokenError {
                constructor() {
                    super(...arguments), this.name = "TokenAccountNotFoundError"
                }
            }
            class TokenInvalidAccountOwnerError extends TokenError {
                constructor() {
                    super(...arguments), this.name = "TokenInvalidAccountOwnerError"
                }
            }
            class TokenInvalidAccountSizeError extends TokenError {
                constructor() {
                    super(...arguments), this.name = "TokenInvalidAccountSizeError"
                }
            }
            class TokenInvalidMintError extends TokenError {
                constructor() {
                    super(...arguments), this.name = "TokenInvalidMintError"
                }
            }
            class TokenInvalidOwnerError extends TokenError {
                constructor() {
                    super(...arguments), this.name = "TokenInvalidOwnerError"
                }
            }
            class TokenOwnerOffCurveError extends TokenError {
                constructor() {
                    super(...arguments), this.name = "TokenOwnerOffCurveError"
                }
            }
            class TokenInvalidInstructionProgramError extends TokenError {
                constructor() {
                    super(...arguments), this.name = "TokenInvalidInstructionProgramError"
                }
            }
            class TokenInvalidInstructionKeysError extends TokenError {
                constructor() {
                    super(...arguments), this.name = "TokenInvalidInstructionKeysError"
                }
            }
            class TokenInvalidInstructionDataError extends TokenError {
                constructor() {
                    super(...arguments), this.name = "TokenInvalidInstructionDataError"
                }
            }
            class TokenInvalidInstructionTypeError extends TokenError {
                constructor() {
                    super(...arguments), this.name = "TokenInvalidInstructionTypeError"
                }
            }
            const h = Object(i.struct)([Object(i.u8)("instruction"), Object(i.u8)("decimals"), Object(o.publicKey)("mintAuthority"), Object(i.u8)("freezeAuthorityOption"), Object(o.publicKey)("freezeAuthority")]);

            function d(t, n, e, i, o = a) {
                const s = [{
                        pubkey: t,
                        isSigner: !1,
                        isWritable: !0
                    }, {
                        pubkey: u.SYSVAR_RENT_PUBKEY,
                        isSigner: !1,
                        isWritable: !1
                    }],
                    c = Buffer.alloc(h.span);
                return h.encode({
                    instruction: r.InitializeMint,
                    decimals: n,
                    mintAuthority: e,
                    freezeAuthorityOption: i ? 1 : 0,
                    freezeAuthority: i || new u.PublicKey(0)
                }, c), new u.TransactionInstruction({
                    keys: s,
                    programId: o,
                    data: c
                })
            }

            function l(t, n = a) {
                if (!t.programId.equals(n)) throw new TokenInvalidInstructionProgramError;
                if (t.data.length !== h.span) throw new TokenInvalidInstructionDataError;
                const {
                    keys: {
                        mint: e,
                        rent: i
                    },
                    data: o
                } = f(t);
                if (o.instruction !== r.InitializeMint) throw new TokenInvalidInstructionTypeError;
                if (!e || !i) throw new TokenInvalidInstructionKeysError;
                return {
                    programId: n,
                    keys: {
                        mint: e,
                        rent: i
                    },
                    data: o
                }
            }

            function f({
                programId: t,
                keys: [n, e],
                data: r
            }) {
                const {
                    instruction: i,
                    decimals: o,
                    mintAuthority: u,
                    freezeAuthorityOption: a,
                    freezeAuthority: s
                } = h.decode(r);
                return {
                    programId: t,
                    keys: {
                        mint: n,
                        rent: e
                    },
                    data: {
                        instruction: i,
                        decimals: o,
                        mintAuthority: u,
                        freezeAuthority: a ? s : null
                    }
                }
            }
            const m = Object(i.struct)([Object(i.u8)("instruction")]);

            function p(t, n, e, i = a) {
                const o = [{
                        pubkey: t,
                        isSigner: !1,
                        isWritable: !0
                    }, {
                        pubkey: n,
                        isSigner: !1,
                        isWritable: !1
                    }, {
                        pubkey: e,
                        isSigner: !1,
                        isWritable: !1
                    }, {
                        pubkey: u.SYSVAR_RENT_PUBKEY,
                        isSigner: !1,
                        isWritable: !1
                    }],
                    s = Buffer.alloc(m.span);
                return m.encode({
                    instruction: r.InitializeAccount
                }, s), new u.TransactionInstruction({
                    keys: o,
                    programId: i,
                    data: s
                })
            }

            function g(t, n = a) {
                if (!t.programId.equals(n)) throw new TokenInvalidInstructionProgramError;
                if (t.data.length !== m.span) throw new TokenInvalidInstructionDataError;
                const {
                    keys: {
                        account: e,
                        mint: i,
                        owner: o,
                        rent: u
                    },
                    data: s
                } = y(t);
                if (s.instruction !== r.InitializeAccount) throw new TokenInvalidInstructionTypeError;
                if (!(e && i && o && u)) throw new TokenInvalidInstructionKeysError;
                return {
                    programId: n,
                    keys: {
                        account: e,
                        mint: i,
                        owner: o,
                        rent: u
                    },
                    data: s
                }
            }

            function y({
                programId: t,
                keys: [n, e, r, i],
                data: o
            }) {
                return {
                    programId: t,
                    keys: {
                        account: n,
                        mint: e,
                        owner: r,
                        rent: i
                    },
                    data: m.decode(o)
                }
            }
            const w = Object(i.struct)([Object(i.u8)("instruction"), Object(i.u8)("m")]);

            function v(t, n, e, i = a) {
                const o = [{
                    pubkey: t,
                    isSigner: !1,
                    isWritable: !0
                }, {
                    pubkey: u.SYSVAR_RENT_PUBKEY,
                    isSigner: !1,
                    isWritable: !1
                }];
                for (const t of n) o.push({
                    pubkey: t,
                    isSigner: !1,
                    isWritable: !1
                });
                const s = Buffer.alloc(w.span);
                return w.encode({
                    instruction: r.InitializeMultisig,
                    m: e
                }, s), new u.TransactionInstruction({
                    keys: o,
                    programId: i,
                    data: s
                })
            }

            function I(t, n = a) {
                if (!t.programId.equals(n)) throw new TokenInvalidInstructionProgramError;
                if (t.data.length !== w.span) throw new TokenInvalidInstructionDataError;
                const {
                    keys: {
                        account: e,
                        rent: i,
                        signers: o
                    },
                    data: u
                } = b(t);
                if (u.instruction !== r.InitializeMultisig) throw new TokenInvalidInstructionTypeError;
                if (!e || !i || !o.length) throw new TokenInvalidInstructionKeysError;
                return {
                    programId: n,
                    keys: {
                        account: e,
                        rent: i,
                        signers: o
                    },
                    data: u
                }
            }

            function b({
                programId: t,
                keys: [n, e, ...r],
                data: i
            }) {
                return {
                    programId: t,
                    keys: {
                        account: n,
                        rent: e,
                        signers: r
                    },
                    data: w.decode(i)
                }
            }

            function M(t, n, e) {
                if (e.length) {
                    t.push({
                        pubkey: n,
                        isSigner: !1,
                        isWritable: !1
                    });
                    for (const n of e) t.push({
                        pubkey: n.publicKey,
                        isSigner: !0,
                        isWritable: !1
                    })
                } else t.push({
                    pubkey: n,
                    isSigner: !0,
                    isWritable: !1
                });
                return t
            }
            const T = Object(i.struct)([Object(i.u8)("instruction"), Object(o.u64)("amount")]);

            function k(t, n, e, i, o = [], s = a) {
                const c = M([{
                        pubkey: t,
                        isSigner: !1,
                        isWritable: !0
                    }, {
                        pubkey: n,
                        isSigner: !1,
                        isWritable: !0
                    }], e, o),
                    h = Buffer.alloc(T.span);
                return T.encode({
                    instruction: r.Transfer,
                    amount: BigInt(i)
                }, h), new u.TransactionInstruction({
                    keys: c,
                    programId: s,
                    data: h
                })
            }

            function A(t, n = a) {
                if (!t.programId.equals(n)) throw new TokenInvalidInstructionProgramError;
                if (t.data.length !== T.span) throw new TokenInvalidInstructionDataError;
                const {
                    keys: {
                        source: e,
                        destination: i,
                        owner: o,
                        multiSigners: u
                    },
                    data: s
                } = E(t);
                if (s.instruction !== r.Transfer) throw new TokenInvalidInstructionTypeError;
                if (!e || !i || !o) throw new TokenInvalidInstructionKeysError;
                return {
                    programId: n,
                    keys: {
                        source: e,
                        destination: i,
                        owner: o,
                        multiSigners: u
                    },
                    data: s
                }
            }

            function E({
                programId: t,
                keys: [n, e, r, ...i],
                data: o
            }) {
                return {
                    programId: t,
                    keys: {
                        source: n,
                        destination: e,
                        owner: r,
                        multiSigners: i
                    },
                    data: T.decode(o)
                }
            }
            const R = Object(i.struct)([Object(i.u8)("instruction"), Object(o.u64)("amount")]);

            function _(t, n, e, i, o = [], s = a) {
                const c = M([{
                        pubkey: t,
                        isSigner: !1,
                        isWritable: !0
                    }, {
                        pubkey: n,
                        isSigner: !1,
                        isWritable: !1
                    }], e, o),
                    h = Buffer.alloc(R.span);
                return R.encode({
                    instruction: r.Approve,
                    amount: BigInt(i)
                }, h), new u.TransactionInstruction({
                    keys: c,
                    programId: s,
                    data: h
                })
            }

            function O(t, n = a) {
                if (!t.programId.equals(n)) throw new TokenInvalidInstructionProgramError;
                if (t.data.length !== R.span) throw new TokenInvalidInstructionDataError;
                const {
                    keys: {
                        account: e,
                        delegate: i,
                        owner: o,
                        multiSigners: u
                    },
                    data: s
                } = S(t);
                if (s.instruction !== r.Approve) throw new TokenInvalidInstructionTypeError;
                if (!e || !i || !o) throw new TokenInvalidInstructionKeysError;
                return {
                    programId: n,
                    keys: {
                        account: e,
                        delegate: i,
                        owner: o,
                        multiSigners: u
                    },
                    data: s
                }
            }

            function S({
                programId: t,
                keys: [n, e, r, ...i],
                data: o
            }) {
                return {
                    programId: t,
                    keys: {
                        account: n,
                        delegate: e,
                        owner: r,
                        multiSigners: i
                    },
                    data: R.decode(o)
                }
            }
            const B = Object(i.struct)([Object(i.u8)("instruction")]);

            function N(t, n, e = [], i = a) {
                const o = M([{
                        pubkey: t,
                        isSigner: !1,
                        isWritable: !0
                    }], n, e),
                    s = Buffer.alloc(B.span);
                return B.encode({
                    instruction: r.Revoke
                }, s), new u.TransactionInstruction({
                    keys: o,
                    programId: i,
                    data: s
                })
            }

            function P(t, n = a) {
                if (!t.programId.equals(n)) throw new TokenInvalidInstructionProgramError;
                if (t.data.length !== B.span) throw new TokenInvalidInstructionDataError;
                const {
                    keys: {
                        account: e,
                        owner: i,
                        multiSigners: o
                    },
                    data: u
                } = K(t);
                if (u.instruction !== r.Revoke) throw new TokenInvalidInstructionTypeError;
                if (!e || !i) throw new TokenInvalidInstructionKeysError;
                return {
                    programId: n,
                    keys: {
                        account: e,
                        owner: i,
                        multiSigners: o
                    },
                    data: u
                }
            }

            function K({
                programId: t,
                keys: [n, e, ...r],
                data: i
            }) {
                return {
                    programId: t,
                    keys: {
                        account: n,
                        owner: e,
                        multiSigners: r
                    },
                    data: B.decode(i)
                }
            }
            var j;
            ! function(t) {
                t[t.MintTokens = 0] = "MintTokens", t[t.FreezeAccount = 1] = "FreezeAccount", t[t.AccountOwner = 2] = "AccountOwner", t[t.CloseAccount = 3] = "CloseAccount"
            }(j || (j = {}));
            const z = Object(i.struct)([Object(i.u8)("instruction"), Object(i.u8)("authorityType"), Object(i.u8)("newAuthorityOption"), Object(o.publicKey)("newAuthority")]);

            function C(t, n, e, i, o = [], s = a) {
                const c = M([{
                        pubkey: t,
                        isSigner: !1,
                        isWritable: !0
                    }], n, o),
                    h = Buffer.alloc(z.span);
                return z.encode({
                    instruction: r.SetAuthority,
                    authorityType: e,
                    newAuthorityOption: i ? 1 : 0,
                    newAuthority: i || new u.PublicKey(0)
                }, h), new u.TransactionInstruction({
                    keys: c,
                    programId: s,
                    data: h
                })
            }

            function W(t, n = a) {
                if (!t.programId.equals(n)) throw new TokenInvalidInstructionProgramError;
                if (t.data.length !== z.span) throw new TokenInvalidInstructionDataError;
                const {
                    keys: {
                        account: e,
                        currentAuthority: i,
                        multiSigners: o
                    },
                    data: u
                } = U(t);
                if (u.instruction !== r.SetAuthority) throw new TokenInvalidInstructionTypeError;
                if (!e || !i) throw new TokenInvalidInstructionKeysError;
                return {
                    programId: n,
                    keys: {
                        account: e,
                        currentAuthority: i,
                        multiSigners: o
                    },
                    data: u
                }
            }

            function U({
                programId: t,
                keys: [n, e, ...r],
                data: i
            }) {
                const {
                    instruction: o,
                    authorityType: u,
                    newAuthorityOption: a,
                    newAuthority: s
                } = z.decode(i);
                return {
                    programId: t,
                    keys: {
                        account: n,
                        currentAuthority: e,
                        multiSigners: r
                    },
                    data: {
                        instruction: o,
                        authorityType: u,
                        newAuthority: a ? s : null
                    }
                }
            }
            const D = Object(i.struct)([Object(i.u8)("instruction"), Object(o.u64)("amount")]);

            function x(t, n, e, i, o = [], s = a) {
                const c = M([{
                        pubkey: t,
                        isSigner: !1,
                        isWritable: !0
                    }, {
                        pubkey: n,
                        isSigner: !1,
                        isWritable: !0
                    }], e, o),
                    h = Buffer.alloc(D.span);
                return D.encode({
                    instruction: r.MintTo,
                    amount: BigInt(i)
                }, h), new u.TransactionInstruction({
                    keys: c,
                    programId: s,
                    data: h
                })
            }

            function F(t, n = a) {
                if (!t.programId.equals(n)) throw new TokenInvalidInstructionProgramError;
                if (t.data.length !== D.span) throw new TokenInvalidInstructionDataError;
                const {
                    keys: {
                        mint: e,
                        destination: i,
                        authority: o,
                        multiSigners: u
                    },
                    data: s
                } = Y(t);
                if (s.instruction !== r.MintTo) throw new TokenInvalidInstructionTypeError;
                if (!e || !i || !o) throw new TokenInvalidInstructionKeysError;
                return {
                    programId: n,
                    keys: {
                        mint: e,
                        destination: i,
                        authority: o,
                        multiSigners: u
                    },
                    data: s
                }
            }

            function Y({
                programId: t,
                keys: [n, e, r, ...i],
                data: o
            }) {
                return {
                    programId: t,
                    keys: {
                        mint: n,
                        destination: e,
                        authority: r,
                        multiSigners: i
                    },
                    data: D.decode(o)
                }
            }
            const q = Object(i.struct)([Object(i.u8)("instruction"), Object(o.u64)("amount")]);

            function H(t, n, e, i, o = [], s = a) {
                const c = M([{
                        pubkey: t,
                        isSigner: !1,
                        isWritable: !0
                    }, {
                        pubkey: n,
                        isSigner: !1,
                        isWritable: !0
                    }], e, o),
                    h = Buffer.alloc(q.span);
                return q.encode({
                    instruction: r.Burn,
                    amount: BigInt(i)
                }, h), new u.TransactionInstruction({
                    keys: c,
                    programId: s,
                    data: h
                })
            }

            function G(t, n = a) {
                if (!t.programId.equals(n)) throw new TokenInvalidInstructionProgramError;
                if (t.data.length !== q.span) throw new TokenInvalidInstructionDataError;
                const {
                    keys: {
                        account: e,
                        mint: i,
                        owner: o,
                        multiSigners: u
                    },
                    data: s
                } = L(t);
                if (s.instruction !== r.Burn) throw new TokenInvalidInstructionTypeError;
                if (!e || !i || !o) throw new TokenInvalidInstructionKeysError;
                return {
                    programId: n,
                    keys: {
                        account: e,
                        mint: i,
                        owner: o,
                        multiSigners: u
                    },
                    data: s
                }
            }

            function L({
                programId: t,
                keys: [n, e, r, ...i],
                data: o
            }) {
                return {
                    programId: t,
                    keys: {
                        account: n,
                        mint: e,
                        owner: r,
                        multiSigners: i
                    },
                    data: q.decode(o)
                }
            }
            const Z = Object(i.struct)([Object(i.u8)("instruction")]);

            function V(t, n, e, i = [], o = a) {
                const s = M([{
                        pubkey: t,
                        isSigner: !1,
                        isWritable: !0
                    }, {
                        pubkey: n,
                        isSigner: !1,
                        isWritable: !0
                    }], e, i),
                    c = Buffer.alloc(Z.span);
                return Z.encode({
                    instruction: r.CloseAccount
                }, c), new u.TransactionInstruction({
                    keys: s,
                    programId: o,
                    data: c
                })
            }

            function $(t, n = a) {
                if (!t.programId.equals(n)) throw new TokenInvalidInstructionProgramError;
                if (t.data.length !== Z.span) throw new TokenInvalidInstructionDataError;
                const {
                    keys: {
                        account: e,
                        destination: i,
                        authority: o,
                        multiSigners: u
                    },
                    data: s
                } = J(t);
                if (s.instruction !== r.CloseAccount) throw new TokenInvalidInstructionTypeError;
                if (!e || !i || !o) throw new TokenInvalidInstructionKeysError;
                return {
                    programId: n,
                    keys: {
                        account: e,
                        destination: i,
                        authority: o,
                        multiSigners: u
                    },
                    data: s
                }
            }

            function J({
                programId: t,
                keys: [n, e, r, ...i],
                data: o
            }) {
                return {
                    programId: t,
                    keys: {
                        account: n,
                        destination: e,
                        authority: r,
                        multiSigners: i
                    },
                    data: Z.decode(o)
                }
            }
            const X = Object(i.struct)([Object(i.u8)("instruction")]);

            function Q(t, n, e, i = [], o = a) {
                const s = M([{
                        pubkey: t,
                        isSigner: !1,
                        isWritable: !0
                    }, {
                        pubkey: n,
                        isSigner: !1,
                        isWritable: !1
                    }], e, i),
                    c = Buffer.alloc(X.span);
                return X.encode({
                    instruction: r.FreezeAccount
                }, c), new u.TransactionInstruction({
                    keys: s,
                    programId: o,
                    data: c
                })
            }

            function tt(t, n = a) {
                if (!t.programId.equals(n)) throw new TokenInvalidInstructionProgramError;
                if (t.data.length !== X.span) throw new TokenInvalidInstructionDataError;
                const {
                    keys: {
                        account: e,
                        mint: i,
                        authority: o,
                        multiSigners: u
                    },
                    data: s
                } = nt(t);
                if (s.instruction !== r.FreezeAccount) throw new TokenInvalidInstructionTypeError;
                if (!e || !i || !o) throw new TokenInvalidInstructionKeysError;
                return {
                    programId: n,
                    keys: {
                        account: e,
                        mint: i,
                        authority: o,
                        multiSigners: u
                    },
                    data: s
                }
            }

            function nt({
                programId: t,
                keys: [n, e, r, ...i],
                data: o
            }) {
                return {
                    programId: t,
                    keys: {
                        account: n,
                        mint: e,
                        authority: r,
                        multiSigners: i
                    },
                    data: X.decode(o)
                }
            }
            const et = Object(i.struct)([Object(i.u8)("instruction")]);

            function rt(t, n, e, i = [], o = a) {
                const s = M([{
                        pubkey: t,
                        isSigner: !1,
                        isWritable: !0
                    }, {
                        pubkey: n,
                        isSigner: !1,
                        isWritable: !1
                    }], e, i),
                    c = Buffer.alloc(et.span);
                return et.encode({
                    instruction: r.ThawAccount
                }, c), new u.TransactionInstruction({
                    keys: s,
                    programId: o,
                    data: c
                })
            }

            function it(t, n = a) {
                if (!t.programId.equals(n)) throw new TokenInvalidInstructionProgramError;
                if (t.data.length !== et.span) throw new TokenInvalidInstructionDataError;
                const {
                    keys: {
                        account: e,
                        mint: i,
                        authority: o,
                        multiSigners: u
                    },
                    data: s
                } = ot(t);
                if (s.instruction !== r.ThawAccount) throw new TokenInvalidInstructionTypeError;
                if (!e || !i || !o) throw new TokenInvalidInstructionKeysError;
                return {
                    programId: n,
                    keys: {
                        account: e,
                        mint: i,
                        authority: o,
                        multiSigners: u
                    },
                    data: s
                }
            }

            function ot({
                programId: t,
                keys: [n, e, r, ...i],
                data: o
            }) {
                return {
                    programId: t,
                    keys: {
                        account: n,
                        mint: e,
                        authority: r,
                        multiSigners: i
                    },
                    data: et.decode(o)
                }
            }
            const ut = Object(i.struct)([Object(i.u8)("instruction"), Object(o.u64)("amount"), Object(i.u8)("decimals")]);

            function at(t, n, e, i, o, s, c = [], h = a) {
                const d = M([{
                        pubkey: t,
                        isSigner: !1,
                        isWritable: !0
                    }, {
                        pubkey: n,
                        isSigner: !1,
                        isWritable: !1
                    }, {
                        pubkey: e,
                        isSigner: !1,
                        isWritable: !0
                    }], i, c),
                    l = Buffer.alloc(ut.span);
                return ut.encode({
                    instruction: r.TransferChecked,
                    amount: BigInt(o),
                    decimals: s
                }, l), new u.TransactionInstruction({
                    keys: d,
                    programId: h,
                    data: l
                })
            }

            function st(t, n = a) {
                if (!t.programId.equals(n)) throw new TokenInvalidInstructionProgramError;
                if (t.data.length !== ut.span) throw new TokenInvalidInstructionDataError;
                const {
                    keys: {
                        source: e,
                        mint: i,
                        destination: o,
                        owner: u,
                        multiSigners: s
                    },
                    data: c
                } = ct(t);
                if (c.instruction !== r.TransferChecked) throw new TokenInvalidInstructionTypeError;
                if (!(e && i && o && u)) throw new TokenInvalidInstructionKeysError;
                return {
                    programId: n,
                    keys: {
                        source: e,
                        mint: i,
                        destination: o,
                        owner: u,
                        multiSigners: s
                    },
                    data: c
                }
            }

            function ct({
                programId: t,
                keys: [n, e, r, i, ...o],
                data: u
            }) {
                return {
                    programId: t,
                    keys: {
                        source: n,
                        mint: e,
                        destination: r,
                        owner: i,
                        multiSigners: o
                    },
                    data: ut.decode(u)
                }
            }
            const ht = Object(i.struct)([Object(i.u8)("instruction"), Object(o.u64)("amount"), Object(i.u8)("decimals")]);

            function dt(t, n, e, i, o, s, c = [], h = a) {
                const d = M([{
                        pubkey: t,
                        isSigner: !1,
                        isWritable: !0
                    }, {
                        pubkey: n,
                        isSigner: !1,
                        isWritable: !1
                    }, {
                        pubkey: e,
                        isSigner: !1,
                        isWritable: !1
                    }], i, c),
                    l = Buffer.alloc(ht.span);
                return ht.encode({
                    instruction: r.ApproveChecked,
                    amount: BigInt(o),
                    decimals: s
                }, l), new u.TransactionInstruction({
                    keys: d,
                    programId: h,
                    data: l
                })
            }

            function lt(t, n = a) {
                if (!t.programId.equals(n)) throw new TokenInvalidInstructionProgramError;
                if (t.data.length !== ht.span) throw new TokenInvalidInstructionDataError;
                const {
                    keys: {
                        account: e,
                        mint: i,
                        delegate: o,
                        owner: u,
                        multiSigners: s
                    },
                    data: c
                } = ft(t);
                if (c.instruction !== r.ApproveChecked) throw new TokenInvalidInstructionTypeError;
                if (!(e && i && o && u)) throw new TokenInvalidInstructionKeysError;
                return {
                    programId: n,
                    keys: {
                        account: e,
                        mint: i,
                        delegate: o,
                        owner: u,
                        multiSigners: s
                    },
                    data: c
                }
            }

            function ft({
                programId: t,
                keys: [n, e, r, i, ...o],
                data: u
            }) {
                return {
                    programId: t,
                    keys: {
                        account: n,
                        mint: e,
                        delegate: r,
                        owner: i,
                        multiSigners: o
                    },
                    data: ht.decode(u)
                }
            }
            const mt = Object(i.struct)([Object(i.u8)("instruction"), Object(o.u64)("amount"), Object(i.u8)("decimals")]);

            function pt(t, n, e, i, o, s = [], c = a) {
                const h = M([{
                        pubkey: t,
                        isSigner: !1,
                        isWritable: !0
                    }, {
                        pubkey: n,
                        isSigner: !1,
                        isWritable: !0
                    }], e, s),
                    d = Buffer.alloc(mt.span);
                return mt.encode({
                    instruction: r.MintToChecked,
                    amount: BigInt(i),
                    decimals: o
                }, d), new u.TransactionInstruction({
                    keys: h,
                    programId: c,
                    data: d
                })
            }

            function gt(t, n = a) {
                if (!t.programId.equals(n)) throw new TokenInvalidInstructionProgramError;
                if (t.data.length !== mt.span) throw new TokenInvalidInstructionDataError;
                const {
                    keys: {
                        mint: e,
                        destination: i,
                        authority: o,
                        multiSigners: u
                    },
                    data: s
                } = yt(t);
                if (s.instruction !== r.MintToChecked) throw new TokenInvalidInstructionTypeError;
                if (!e || !i || !o) throw new TokenInvalidInstructionKeysError;
                return {
                    programId: n,
                    keys: {
                        mint: e,
                        destination: i,
                        authority: o,
                        multiSigners: u
                    },
                    data: s
                }
            }

            function yt({
                programId: t,
                keys: [n, e, r, ...i],
                data: o
            }) {
                return {
                    programId: t,
                    keys: {
                        mint: n,
                        destination: e,
                        authority: r,
                        multiSigners: i
                    },
                    data: mt.decode(o)
                }
            }
            const wt = Object(i.struct)([Object(i.u8)("instruction"), Object(o.u64)("amount"), Object(i.u8)("decimals")]);

            function vt(t, n, e, i, o, s = [], c = a) {
                const h = M([{
                        pubkey: t,
                        isSigner: !1,
                        isWritable: !0
                    }, {
                        pubkey: n,
                        isSigner: !1,
                        isWritable: !0
                    }], e, s),
                    d = Buffer.alloc(wt.span);
                return wt.encode({
                    instruction: r.BurnChecked,
                    amount: BigInt(i),
                    decimals: o
                }, d), new u.TransactionInstruction({
                    keys: h,
                    programId: c,
                    data: d
                })
            }

            function It(t, n = a) {
                if (!t.programId.equals(n)) throw new TokenInvalidInstructionProgramError;
                if (t.data.length !== wt.span) throw new TokenInvalidInstructionDataError;
                const {
                    keys: {
                        account: e,
                        mint: i,
                        owner: o,
                        multiSigners: u
                    },
                    data: s
                } = bt(t);
                if (s.instruction !== r.BurnChecked) throw new TokenInvalidInstructionTypeError;
                if (!e || !i || !o) throw new TokenInvalidInstructionKeysError;
                return {
                    programId: n,
                    keys: {
                        account: e,
                        mint: i,
                        owner: o,
                        multiSigners: u
                    },
                    data: s
                }
            }

            function bt({
                programId: t,
                keys: [n, e, r, ...i],
                data: o
            }) {
                return {
                    programId: t,
                    keys: {
                        account: n,
                        mint: e,
                        owner: r,
                        multiSigners: i
                    },
                    data: wt.decode(o)
                }
            }
            const Mt = Object(i.struct)([Object(i.u8)("instruction")]);

            function Tt(t, n = a) {
                const e = [{
                        pubkey: t,
                        isSigner: !1,
                        isWritable: !0
                    }],
                    i = Buffer.alloc(Mt.span);
                return Mt.encode({
                    instruction: r.SyncNative
                }, i), new u.TransactionInstruction({
                    keys: e,
                    programId: n,
                    data: i
                })
            }

            function kt(t, n = a) {
                if (!t.programId.equals(n)) throw new TokenInvalidInstructionProgramError;
                if (t.data.length !== Mt.span) throw new TokenInvalidInstructionDataError;
                const {
                    keys: {
                        account: e
                    },
                    data: i
                } = At(t);
                if (i.instruction !== r.SyncNative) throw new TokenInvalidInstructionTypeError;
                if (!e) throw new TokenInvalidInstructionKeysError;
                return {
                    programId: n,
                    keys: {
                        account: e
                    },
                    data: i
                }
            }

            function At({
                programId: t,
                keys: [n],
                data: e
            }) {
                return {
                    programId: t,
                    keys: {
                        account: n
                    },
                    data: Mt.decode(e)
                }
            }

            function Et(t, n = a) {
                if (!t.data.length) throw new TokenInvalidInstructionDataError;
                const e = Object(i.u8)().decode(t.data);
                if (e === r.InitializeMint) return l(t, n);
                if (e === r.InitializeAccount) return g(t, n);
                if (e === r.InitializeMultisig) return I(t, n);
                if (e === r.Transfer) return A(t, n);
                if (e === r.Approve) return O(t, n);
                if (e === r.Revoke) return P(t, n);
                if (e === r.SetAuthority) return W(t, n);
                if (e === r.MintTo) return F(t, n);
                if (e === r.Burn) return G(t, n);
                if (e === r.CloseAccount) return $(t, n);
                if (e === r.FreezeAccount) return tt(t, n);
                if (e === r.ThawAccount) return it(t, n);
                if (e === r.TransferChecked) return st(t, n);
                if (e === r.ApproveChecked) return lt(t, n);
                if (e === r.MintToChecked) return gt(t, n);
                if (e === r.BurnChecked) return It(t, n);
                if (e === r.InitializeAccount2) throw new TokenInvalidInstructionTypeError;
                if (e === r.SyncNative) return kt(t, n);
                if (e === r.InitializeAccount3) throw new TokenInvalidInstructionTypeError;
                if (e === r.InitializeMultisig2) throw new TokenInvalidInstructionTypeError;
                if (e === r.InitializeMint2) throw new TokenInvalidInstructionTypeError;
                throw new TokenInvalidInstructionTypeError
            }

            function Rt(t) {
                return t.data.instruction === r.InitializeMint
            }

            function _t(t) {
                return t.data.instruction === r.InitializeAccount
            }

            function Ot(t) {
                return t.data.instruction === r.InitializeMultisig
            }

            function St(t) {
                return t.data.instruction === r.Transfer
            }

            function Bt(t) {
                return t.data.instruction === r.Approve
            }

            function Nt(t) {
                return t.data.instruction === r.Revoke
            }

            function Pt(t) {
                return t.data.instruction === r.SetAuthority
            }

            function Kt(t) {
                return t.data.instruction === r.MintTo
            }

            function jt(t) {
                return t.data.instruction === r.Burn
            }

            function zt(t) {
                return t.data.instruction === r.CloseAccount
            }

            function Ct(t) {
                return t.data.instruction === r.FreezeAccount
            }

            function Wt(t) {
                return t.data.instruction === r.ThawAccount
            }

            function Ut(t) {
                return t.data.instruction === r.TransferChecked
            }

            function Dt(t) {
                return t.data.instruction === r.ApproveChecked
            }

            function xt(t) {
                return t.data.instruction === r.MintToChecked
            }

            function Ft(t) {
                return t.data.instruction === r.BurnChecked
            }

            function Yt(t) {
                return t.data.instruction === r.SyncNative
            }

            function qt(t, n, e, r, i = a, o = s) {
                const c = [{
                    pubkey: t,
                    isSigner: !0,
                    isWritable: !0
                }, {
                    pubkey: n,
                    isSigner: !1,
                    isWritable: !0
                }, {
                    pubkey: e,
                    isSigner: !1,
                    isWritable: !1
                }, {
                    pubkey: r,
                    isSigner: !1,
                    isWritable: !1
                }, {
                    pubkey: u.SystemProgram.programId,
                    isSigner: !1,
                    isWritable: !1
                }, {
                    pubkey: i,
                    isSigner: !1,
                    isWritable: !1
                }, {
                    pubkey: u.SYSVAR_RENT_PUBKEY,
                    isSigner: !1,
                    isWritable: !1
                }];
                return new u.TransactionInstruction({
                    keys: c,
                    programId: o,
                    data: Buffer.alloc(0)
                })
            }
            var Ht;
            ! function(t) {
                t[t.Uninitialized = 0] = "Uninitialized", t[t.Initialized = 1] = "Initialized", t[t.Frozen = 2] = "Frozen"
            }(Ht || (Ht = {}));
            const Gt = Object(i.struct)([Object(o.publicKey)("mint"), Object(o.publicKey)("owner"), Object(o.u64)("amount"), Object(i.u32)("delegateOption"), Object(o.publicKey)("delegate"), Object(i.u8)("state"), Object(i.u32)("isNativeOption"), Object(o.u64)("isNative"), Object(o.u64)("delegatedAmount"), Object(i.u32)("closeAuthorityOption"), Object(o.publicKey)("closeAuthority")]),
                Lt = Gt.span;
            async function Zt(t, n, e, r = a) {
                const i = await t.getAccountInfo(n, e);
                if (!i) throw new TokenAccountNotFoundError;
                if (!i.owner.equals(r)) throw new TokenInvalidAccountOwnerError;
                if (i.data.length != Lt) throw new TokenInvalidAccountSizeError;
                const o = Gt.decode(i.data);
                return {
                    address: n,
                    mint: o.mint,
                    owner: o.owner,
                    amount: o.amount,
                    delegate: o.delegateOption ? o.delegate : null,
                    delegatedAmount: o.delegatedAmount,
                    isInitialized: o.state !== Ht.Uninitialized,
                    isFrozen: o.state === Ht.Frozen,
                    isNative: !!o.isNativeOption,
                    rentExemptReserve: o.isNativeOption ? o.isNative : null,
                    closeAuthority: o.closeAuthorityOption ? o.closeAuthority : null
                }
            }
            async function Vt(t, n) {
                return await t.getMinimumBalanceForRentExemption(Lt, n)
            }
            const $t = Object(i.struct)([Object(i.u32)("mintAuthorityOption"), Object(o.publicKey)("mintAuthority"), Object(o.u64)("supply"), Object(i.u8)("decimals"), Object(o.bool)("isInitialized"), Object(i.u32)("freezeAuthorityOption"), Object(o.publicKey)("freezeAuthority")]),
                Jt = $t.span;
            async function Xt(t, n, e, r = a) {
                const i = await t.getAccountInfo(n, e);
                if (!i) throw new TokenAccountNotFoundError;
                if (!i.owner.equals(r)) throw new TokenInvalidAccountOwnerError;
                if (i.data.length != Jt) throw new TokenInvalidAccountSizeError;
                const o = $t.decode(i.data);
                return {
                    address: n,
                    mintAuthority: o.mintAuthorityOption ? o.mintAuthority : null,
                    supply: o.supply,
                    decimals: o.decimals,
                    isInitialized: o.isInitialized,
                    freezeAuthority: o.freezeAuthorityOption ? o.freezeAuthority : null
                }
            }
            async function Qt(t, n) {
                return await t.getMinimumBalanceForRentExemption(Jt, n)
            }
            async function tn(t, n, e = !1, r = a, i = s) {
                if (!e && !u.PublicKey.isOnCurve(n.toBuffer())) throw new TokenOwnerOffCurveError;
                const [o] = await u.PublicKey.findProgramAddress([n.toBuffer(), r.toBuffer(), t.toBuffer()], i);
                return o
            }
            const nn = Object(i.struct)([Object(i.u8)("m"), Object(i.u8)("n"), Object(o.bool)("isInitialized"), Object(o.publicKey)("signer1"), Object(o.publicKey)("signer2"), Object(o.publicKey)("signer3"), Object(o.publicKey)("signer4"), Object(o.publicKey)("signer5"), Object(o.publicKey)("signer6"), Object(o.publicKey)("signer7"), Object(o.publicKey)("signer8"), Object(o.publicKey)("signer9"), Object(o.publicKey)("signer10"), Object(o.publicKey)("signer11")]),
                en = nn.span;
            async function rn(t, n, e, r = a) {
                const i = await t.getAccountInfo(n, e);
                if (!i) throw new TokenAccountNotFoundError;
                if (!i.owner.equals(r)) throw new TokenInvalidAccountOwnerError;
                if (i.data.length != en) throw new TokenInvalidAccountSizeError;
                return {
                    address: n,
                    ...nn.decode(i.data)
                }
            }
            async function on(t, n) {
                return await t.getMinimumBalanceForRentExemption(en, n)
            }
            async function un(t, n, e, r, i, o = u.Keypair.generate(), s, c = a) {
                const h = await Qt(t),
                    l = (new u.Transaction).add(u.SystemProgram.createAccount({
                        fromPubkey: n.publicKey,
                        newAccountPubkey: o.publicKey,
                        space: Jt,
                        lamports: h,
                        programId: c
                    }), d(o.publicKey, i, e, r, c));
                return await Object(u.sendAndConfirmTransaction)(t, l, [n, o], s), o.publicKey
            }
            async function an(t, n, e, r, i, o = a, c = s) {
                const h = await tn(e, r, !1, o, c),
                    d = (new u.Transaction).add(qt(n.publicKey, h, r, e, o, c));
                return await Object(u.sendAndConfirmTransaction)(t, d, [n], i), h
            }
            async function sn(t, n, e, r, i, o, s = a) {
                if (!i) return await an(t, n, e, r, o, s);
                const c = await Vt(t),
                    h = (new u.Transaction).add(u.SystemProgram.createAccount({
                        fromPubkey: n.publicKey,
                        newAccountPubkey: i.publicKey,
                        space: Lt,
                        lamports: c,
                        programId: s
                    }), p(i.publicKey, e, r, s));
                return await Object(u.sendAndConfirmTransaction)(t, h, [n, i], o), i.publicKey
            }
            async function cn(t, n, e, r, i, o, h = a) {
                if (!r) return await sn(t, n, c, e, i, o, h);
                if (!i) {
                    const i = await tn(c, e, !1, h, s),
                        a = (new u.Transaction).add(qt(n.publicKey, i, e, c, h, s), u.SystemProgram.transfer({
                            fromPubkey: n.publicKey,
                            toPubkey: i,
                            lamports: r
                        }), Tt(i, h));
                    return await Object(u.sendAndConfirmTransaction)(t, a, [n], o), i
                }
                const d = await Vt(t),
                    l = (new u.Transaction).add(u.SystemProgram.createAccount({
                        fromPubkey: n.publicKey,
                        newAccountPubkey: i.publicKey,
                        space: Lt,
                        lamports: d,
                        programId: h
                    }), u.SystemProgram.transfer({
                        fromPubkey: n.publicKey,
                        toPubkey: i.publicKey,
                        lamports: r
                    }), p(i.publicKey, c, e, h));
                return await Object(u.sendAndConfirmTransaction)(t, l, [n, i], o), i.publicKey
            }
            async function hn(t, n, e, r, i = u.Keypair.generate(), o, s = a) {
                const c = await on(t),
                    h = (new u.Transaction).add(u.SystemProgram.createAccount({
                        fromPubkey: n.publicKey,
                        newAccountPubkey: i.publicKey,
                        space: en,
                        lamports: c,
                        programId: s
                    }), v(i.publicKey, e, r, s));
                return await Object(u.sendAndConfirmTransaction)(t, h, [n, i], o), i.publicKey
            }

            function dn(t, n) {
                return t instanceof u.PublicKey ? [t, n] : [t.publicKey, [t]]
            }
            async function ln(t, n, e, r, i, o, s = [], c, h = a) {
                const [d, l] = dn(i, s), f = (new u.Transaction).add(k(e, r, d, o, s, h));
                return await Object(u.sendAndConfirmTransaction)(t, f, [n, ...l], c)
            }
            async function fn(t, n, e, r, i, o, s = [], c, h = a) {
                const [d, l] = dn(i, s), f = (new u.Transaction).add(_(e, r, d, o, s, h));
                return await Object(u.sendAndConfirmTransaction)(t, f, [n, ...l], c)
            }
            async function mn(t, n, e, r, i = [], o, s = a) {
                const [c, h] = dn(r, i), d = (new u.Transaction).add(N(e, c, i, s));
                return await Object(u.sendAndConfirmTransaction)(t, d, [n, ...h], o)
            }
            async function pn(t, n, e, r, i, o, s = [], c, h = a) {
                const [d, l] = dn(r, s), f = (new u.Transaction).add(C(e, d, i, o, s, h));
                return await Object(u.sendAndConfirmTransaction)(t, f, [n, ...l], c)
            }
            async function gn(t, n, e, r, i, o, s = [], c, h = a) {
                const [d, l] = dn(i, s), f = (new u.Transaction).add(x(e, r, d, o, s, h));
                return await Object(u.sendAndConfirmTransaction)(t, f, [n, ...l], c)
            }
            async function yn(t, n, e, r, i, o, s = [], c, h = a) {
                const [d, l] = dn(i, s), f = (new u.Transaction).add(H(e, r, d, o, s, h));
                return await Object(u.sendAndConfirmTransaction)(t, f, [n, ...l], c)
            }
            async function wn(t, n, e, r, i, o = [], s, c = a) {
                const [h, d] = dn(i, o), l = (new u.Transaction).add(V(e, r, h, o, c));
                return await Object(u.sendAndConfirmTransaction)(t, l, [n, ...d], s)
            }
            async function vn(t, n, e, r, i, o = [], s, c = a) {
                const [h, d] = dn(i, o), l = (new u.Transaction).add(Q(e, r, h, o, c));
                return await Object(u.sendAndConfirmTransaction)(t, l, [n, ...d], s)
            }
            async function In(t, n, e, r, i, o = [], s, c = a) {
                const [h, d] = dn(i, o), l = (new u.Transaction).add(rt(e, r, h, o, c));
                return await Object(u.sendAndConfirmTransaction)(t, l, [n, ...d], s)
            }
            async function bn(t, n, e, r, i, o, s, c, h = [], d, l = a) {
                const [f, m] = dn(o, h), p = (new u.Transaction).add(at(e, r, i, f, s, c, h, l));
                return await Object(u.sendAndConfirmTransaction)(t, p, [n, ...m], d)
            }
            async function Mn(t, n, e, r, i, o, s, c, h = [], d, l = a) {
                const [f, m] = dn(o, h), p = (new u.Transaction).add(dt(r, e, i, f, s, c, h, l));
                return await Object(u.sendAndConfirmTransaction)(t, p, [n, ...m], d)
            }
            async function Tn(t, n, e, r, i, o, s, c = [], h, d = a) {
                const [l, f] = dn(i, c), m = (new u.Transaction).add(pt(e, r, l, o, s, c, d));
                return await Object(u.sendAndConfirmTransaction)(t, m, [n, ...f], h)
            }
            async function kn(t, n, e, r, i, o, s, c = [], h, d = a) {
                const [l, f] = dn(i, c), m = (new u.Transaction).add(vt(e, r, l, o, s, c, d));
                return await Object(u.sendAndConfirmTransaction)(t, m, [n, ...f], h)
            }
            async function An(t, n, e, r, i = a) {
                const o = (new u.Transaction).add(Tt(e, i));
                return await Object(u.sendAndConfirmTransaction)(t, o, [n], r)
            }
            async function En(t, n, e, r, i = !1, o, c, h = a, d = s) {
                const l = await tn(e, r, i, h, d);
                let f;
                try {
                    f = await Zt(t, l, o, h)
                } catch (i) {
                    if (!(i instanceof TokenAccountNotFoundError || i instanceof TokenInvalidAccountOwnerError)) throw i;
                    try {
                        const i = (new u.Transaction).add(qt(n.publicKey, l, r, e, h, d));
                        await Object(u.sendAndConfirmTransaction)(t, i, [n], c)
                    } catch (t) {}
                    f = await Zt(t, l, o, h)
                }
                if (!f.mint.equals(e)) throw new TokenInvalidMintError;
                if (!f.owner.equals(r)) throw new TokenInvalidOwnerError;
                return f
            }
        },
        3653: function(t, n, e) {
            "use strict";
            var r = this && this.__createBinding || (Object.create ? function(t, n, e, r) {
                    void 0 === r && (r = e);
                    var i = Object.getOwnPropertyDescriptor(n, e);
                    i && !("get" in i ? !n.__esModule : i.writable || i.configurable) || (i = {
                        enumerable: !0,
                        get: function() {
                            return n[e]
                        }
                    }), Object.defineProperty(t, r, i)
                } : function(t, n, e, r) {
                    void 0 === r && (r = e), t[r] = n[e]
                }),
                i = this && this.__exportStar || function(t, n) {
                    for (var e in t) "default" === e || Object.prototype.hasOwnProperty.call(n, e) || r(n, t, e)
                };
            Object.defineProperty(n, "__esModule", {
                value: !0
            }), i(e(1077), n), i(e(1078), n), i(e(627), n), i(e(506), n), i(e(3654), n)
        },
        3654: function(t, n, e) {
            "use strict";
            Object.defineProperty(n, "__esModule", {
                value: !0
            }), n.createReverseTwitterRegistry = n.ReverseTwitterRegistryState = n.getTwitterRegistryData = n.getTwitterHandleandRegistryKeyViaFilters = n.getHandleAndRegistryKey = n.getTwitterRegistry = n.getTwitterRegistryKey = n.deleteTwitterRegistry = n.changeVerifiedPubkey = n.changeTwitterRegistryData = n.createVerifiedTwitterRegistry = n.TWITTER_ROOT_PARENT_REGISTRY_KEY = n.TWITTER_VERIFICATION_AUTHORITY = void 0;
            const r = e(162),
                i = e(1871),
                o = e(1077),
                u = e(1078),
                a = e(627),
                s = e(506);
            n.TWITTER_VERIFICATION_AUTHORITY = new r.PublicKey("FvPH7PrVrLGKPfqaf3xJodFTjZriqrAXXLTVWEorTFBi"), n.TWITTER_ROOT_PARENT_REGISTRY_KEY = new r.PublicKey("4YcexoW3r78zz16J2aqmukBLRwGq6rAvWzJpkYAXqebv"), n.createVerifiedTwitterRegistry = async function(t, e, i, a, h) {
                const d = await (0, s.getHashedName)(e),
                    l = await (0, s.getNameAccountKey)(d, void 0, n.TWITTER_ROOT_PARENT_REGISTRY_KEY);
                let f = [(0, u.createInstruction)(o.NAME_PROGRAM_ID, r.SystemProgram.programId, l, i, h, d, new s.Numberu64(await t.getMinimumBalanceForRentExemption(a)), new s.Numberu32(a), void 0, n.TWITTER_ROOT_PARENT_REGISTRY_KEY, n.TWITTER_VERIFICATION_AUTHORITY)];
                return f = f.concat(await c(t, e, l, i, h)), f
            }, n.changeTwitterRegistryData = async function(t, e, r, i) {
                const a = await (0, s.getHashedName)(t),
                    c = await (0, s.getNameAccountKey)(a, void 0, n.TWITTER_ROOT_PARENT_REGISTRY_KEY);
                return [(0, u.updateInstruction)(o.NAME_PROGRAM_ID, c, new s.Numberu32(r), i, e, void 0)]
            }, n.changeVerifiedPubkey = async function(t, e, r, i, a) {
                const h = await (0, s.getHashedName)(e),
                    d = await (0, s.getNameAccountKey)(h, void 0, n.TWITTER_ROOT_PARENT_REGISTRY_KEY);
                let l = [(0, u.transferInstruction)(o.NAME_PROGRAM_ID, d, i, r, void 0)];
                return l.push(await (0, o.deleteNameRegistry)(t, r.toString(), a, n.TWITTER_VERIFICATION_AUTHORITY, n.TWITTER_ROOT_PARENT_REGISTRY_KEY)), l = l.concat(await c(t, e, d, i, a)), l
            }, n.deleteTwitterRegistry = async function(t, e) {
                const r = await (0, s.getHashedName)(t),
                    i = await (0, s.getNameAccountKey)(r, void 0, n.TWITTER_ROOT_PARENT_REGISTRY_KEY),
                    a = await (0, s.getHashedName)(e.toString()),
                    c = await (0, s.getNameAccountKey)(a, n.TWITTER_VERIFICATION_AUTHORITY, n.TWITTER_ROOT_PARENT_REGISTRY_KEY);
                return [(0, u.deleteInstruction)(o.NAME_PROGRAM_ID, i, e, e), (0, u.deleteInstruction)(o.NAME_PROGRAM_ID, c, e, e)]
            }, n.getTwitterRegistryKey = async function(t) {
                const e = await (0, s.getHashedName)(t);
                return await (0, s.getNameAccountKey)(e, void 0, n.TWITTER_ROOT_PARENT_REGISTRY_KEY)
            }, n.getTwitterRegistry = async function(t, e) {
                const r = await (0, s.getHashedName)(e),
                    i = await (0, s.getNameAccountKey)(r, void 0, n.TWITTER_ROOT_PARENT_REGISTRY_KEY);
                return a.NameRegistryState.retrieve(t, i)
            }, n.getHandleAndRegistryKey = async function(t, e) {
                const i = await (0, s.getHashedName)(e.toString()),
                    o = await (0, s.getNameAccountKey)(i, n.TWITTER_VERIFICATION_AUTHORITY, n.TWITTER_ROOT_PARENT_REGISTRY_KEY),
                    u = await ReverseTwitterRegistryState.retrieve(t, o);
                return [u.twitterHandle, new r.PublicKey(u.twitterRegistryKey)]
            }, n.getTwitterHandleandRegistryKeyViaFilters = async function(t, e) {
                const u = [{
                        memcmp: {
                            offset: 0,
                            bytes: n.TWITTER_ROOT_PARENT_REGISTRY_KEY.toBase58()
                        }
                    }, {
                        memcmp: {
                            offset: 32,
                            bytes: e.toBase58()
                        }
                    }, {
                        memcmp: {
                            offset: 64,
                            bytes: n.TWITTER_VERIFICATION_AUTHORITY.toBase58()
                        }
                    }],
                    c = await (0, s.getFilteredProgramAccounts)(t, o.NAME_PROGRAM_ID, u);
                for (const t of c)
                    if (t.accountInfo.data.length > a.NameRegistryState.HEADER_LEN + 32) {
                        const n = t.accountInfo.data.slice(a.NameRegistryState.HEADER_LEN),
                            e = (0, i.deserialize)(ReverseTwitterRegistryState.schema, ReverseTwitterRegistryState, n);
                        return [e.twitterHandle, new r.PublicKey(e.twitterRegistryKey)]
                    } throw new Error("Registry not found.")
            }, n.getTwitterRegistryData = async function(t, e) {
                const i = [{
                        memcmp: {
                            offset: 0,
                            bytes: n.TWITTER_ROOT_PARENT_REGISTRY_KEY.toBytes()
                        }
                    }, {
                        memcmp: {
                            offset: 32,
                            bytes: e.toBytes()
                        }
                    }, {
                        memcmp: {
                            offset: 64,
                            bytes: new r.PublicKey(Buffer.alloc(32, 0)).toBase58()
                        }
                    }],
                    u = await (0, s.getFilteredProgramAccounts)(t, o.NAME_PROGRAM_ID, i);
                if (u.length > 1) throw new Error("Found more than one registry.");
                return u[0].accountInfo.data.slice(a.NameRegistryState.HEADER_LEN)
            };
            class ReverseTwitterRegistryState {
                constructor(t) {
                    this.twitterRegistryKey = t.twitterRegistryKey, this.twitterHandle = t.twitterHandle
                }
                static async retrieve(t, n) {
                    const e = await t.getAccountInfo(n, "processed");
                    if (!e) throw new Error("Invalid reverse Twitter account provided");
                    return (0, i.deserializeUnchecked)(this.schema, ReverseTwitterRegistryState, e.data.slice(a.NameRegistryState.HEADER_LEN))
                }
            }
            async function c(t, e, a, c, h) {
                const d = await (0, s.getHashedName)(c.toString()),
                    l = await (0, s.getNameAccountKey)(d, n.TWITTER_VERIFICATION_AUTHORITY, n.TWITTER_ROOT_PARENT_REGISTRY_KEY),
                    f = (0, i.serialize)(ReverseTwitterRegistryState.schema, new ReverseTwitterRegistryState({
                        twitterRegistryKey: a.toBytes(),
                        twitterHandle: e
                    }));
                return [(0, u.createInstruction)(o.NAME_PROGRAM_ID, r.SystemProgram.programId, l, c, h, d, new s.Numberu64(await t.getMinimumBalanceForRentExemption(f.length)), new s.Numberu32(f.length), n.TWITTER_VERIFICATION_AUTHORITY, n.TWITTER_ROOT_PARENT_REGISTRY_KEY, n.TWITTER_VERIFICATION_AUTHORITY), (0, u.updateInstruction)(o.NAME_PROGRAM_ID, l, new s.Numberu32(0), Buffer.from(f), n.TWITTER_VERIFICATION_AUTHORITY, void 0)]
            }
            n.ReverseTwitterRegistryState = ReverseTwitterRegistryState, ReverseTwitterRegistryState.schema = new Map([
                [ReverseTwitterRegistryState, {
                    kind: "struct",
                    fields: [
                        ["twitterRegistryKey", [32]],
                        ["twitterHandle", "string"]
                    ]
                }]
            ]), n.createReverseTwitterRegistry = c
        },
        506: function(t, n, e) {
            "use strict";
            var r = this && this.__importDefault || function(t) {
                return t && t.__esModule ? t : {
                    default: t
                }
            };
            Object.defineProperty(n, "__esModule", {
                value: !0
            }), n.getFilteredProgramAccounts = n.getNameOwner = n.getNameAccountKey = n.getHashedName = n.signAndSendTransactionInstructions = n.Numberu64 = n.Numberu32 = void 0;
            const i = r(e(72)),
                o = e(24),
                u = e(162),
                a = r(e(1870)),
                s = e(1077),
                c = e(627);
            class Numberu32 extends a.default {
                toBuffer() {
                    const t = super.toArray().reverse(),
                        n = Buffer.from(t);
                    if (4 === n.length) return n;
                    (0, i.default)(n.length < 4, "Numberu32 too large");
                    const e = Buffer.alloc(4);
                    return n.copy(e), e
                }
                static fromBuffer(t) {
                    return (0, i.default)(4 === t.length, "Invalid buffer length: " + t.length), new a.default([...t].reverse().map(t => ("00" + t.toString(16)).slice(-2)).join(""), 16)
                }
            }
            n.Numberu32 = Numberu32;
            class Numberu64 extends a.default {
                toBuffer() {
                    const t = super.toArray().reverse(),
                        n = Buffer.from(t);
                    if (8 === n.length) return n;
                    (0, i.default)(n.length < 8, "Numberu64 too large");
                    const e = Buffer.alloc(8);
                    return n.copy(e), e
                }
                static fromBuffer(t) {
                    return (0, i.default)(8 === t.length, "Invalid buffer length: " + t.length), new a.default([...t].reverse().map(t => ("00" + t.toString(16)).slice(-2)).join(""), 16)
                }
            }
            n.Numberu64 = Numberu64;
            n.signAndSendTransactionInstructions = async (t, n, e, r) => {
                const i = new u.Transaction;
                return i.feePayer = e.publicKey, n.push(e), i.add(...r), await t.sendTransaction(i, n)
            }, n.getHashedName = async function(t) {
                const n = s.HASH_PREFIX + t;
                return (0, o.createHash)("sha256").update(n, "utf8").digest()
            }, n.getNameAccountKey = async function(t, n, e) {
                const r = [t];
                n ? r.push(n.toBuffer()) : r.push(Buffer.alloc(32)), e ? r.push(e.toBuffer()) : r.push(Buffer.alloc(32));
                const [i] = await u.PublicKey.findProgramAddress(r, s.NAME_PROGRAM_ID);
                return i
            }, n.getNameOwner = async function(t, n) {
                if (!await t.getAccountInfo(n)) throw new Error("Unable to find the given account.");
                return c.NameRegistryState.retrieve(t, n)
            }, n.getFilteredProgramAccounts = async function(t, n, e) {
                return (await t.getProgramAccounts(n, {
                    commitment: t.commitment,
                    filters: e,
                    encoding: "base64"
                })).map(({
                    pubkey: t,
                    account: {
                        data: n,
                        executable: e,
                        owner: r,
                        lamports: i
                    }
                }) => ({
                    publicKey: t,
                    accountInfo: {
                        data: n,
                        executable: e,
                        owner: r,
                        lamports: i
                    }
                }))
            }
        },
        627: function(t, n, e) {
            "use strict";
            Object.defineProperty(n, "__esModule", {
                value: !0
            }), n.NameRegistryState = void 0;
            const r = e(162),
                i = e(1871);
            class NameRegistryState {
                constructor(t) {
                    this.parentName = new r.PublicKey(t.parentName), this.owner = new r.PublicKey(t.owner), this.class = new r.PublicKey(t.class)
                }
                static async retrieve(t, n) {
                    var e;
                    const r = await t.getAccountInfo(n, "processed");
                    if (!r) throw new Error("Invalid name account provided");
                    const o = (0, i.deserializeUnchecked)(this.schema, NameRegistryState, r.data);
                    return o.data = null === (e = r.data) || void 0 === e ? void 0 : e.slice(this.HEADER_LEN), o
                }
            }
            n.NameRegistryState = NameRegistryState, NameRegistryState.HEADER_LEN = 96, NameRegistryState.schema = new Map([
                [NameRegistryState, {
                    kind: "struct",
                    fields: [
                        ["parentName", [32]],
                        ["owner", [32]],
                        ["class", [32]]
                    ]
                }]
            ])
        }
    }
]);