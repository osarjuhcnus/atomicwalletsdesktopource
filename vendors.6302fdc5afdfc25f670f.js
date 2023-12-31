(window.webpackJsonp = window.webpackJsonp || []).push([
    [165], {
        1031: function(t, e, n) {
            "use strict";
            var r = n(191);

            function i(t) {
                this.options = t, this.type = this.options.type, this.blockSize = 8, this._init(), this.buffer = new Array(this.blockSize), this.bufferOff = 0
            }
            t.exports = i, i.prototype._init = function() {}, i.prototype.update = function(t) {
                return 0 === t.length ? [] : "decrypt" === this.type ? this._updateDecrypt(t) : this._updateEncrypt(t)
            }, i.prototype._buffer = function(t, e) {
                for (var n = Math.min(this.buffer.length - this.bufferOff, t.length - e), r = 0; r < n; r++) this.buffer[this.bufferOff + r] = t[e + r];
                return this.bufferOff += n, n
            }, i.prototype._flushBuffer = function(t, e) {
                return this._update(this.buffer, 0, t, e), this.bufferOff = 0, this.blockSize
            }, i.prototype._updateEncrypt = function(t) {
                var e = 0,
                    n = 0,
                    r = (this.bufferOff + t.length) / this.blockSize | 0,
                    i = new Array(r * this.blockSize);
                0 !== this.bufferOff && (e += this._buffer(t, e), this.bufferOff === this.buffer.length && (n += this._flushBuffer(i, n)));
                for (var f = t.length - (t.length - e) % this.blockSize; e < f; e += this.blockSize) this._update(t, e, i, n), n += this.blockSize;
                for (; e < t.length; e++, this.bufferOff++) this.buffer[this.bufferOff] = t[e];
                return i
            }, i.prototype._updateDecrypt = function(t) {
                for (var e = 0, n = 0, r = Math.ceil((this.bufferOff + t.length) / this.blockSize) - 1, i = new Array(r * this.blockSize); r > 0; r--) e += this._buffer(t, e), n += this._flushBuffer(i, n);
                return e += this._buffer(t, e), i
            }, i.prototype.final = function(t) {
                var e, n;
                return t && (e = this.update(t)), n = "encrypt" === this.type ? this._finalEncrypt() : this._finalDecrypt(), e ? e.concat(n) : n
            }, i.prototype._pad = function(t, e) {
                if (0 === e) return !1;
                for (; e < t.length;) t[e++] = 0;
                return !0
            }, i.prototype._finalEncrypt = function() {
                if (!this._pad(this.buffer, this.bufferOff)) return [];
                var t = new Array(this.blockSize);
                return this._update(this.buffer, 0, t, 0), t
            }, i.prototype._unpad = function(t) {
                return t
            }, i.prototype._finalDecrypt = function() {
                r.equal(this.bufferOff, this.blockSize, "Not enough data to decrypt");
                var t = new Array(this.blockSize);
                return this._flushBuffer(t, 0), this._unpad(t)
            }
        },
        1745: function(t, e, n) {
            "use strict";
            e.readUInt32BE = function(t, e) {
                return (t[0 + e] << 24 | t[1 + e] << 16 | t[2 + e] << 8 | t[3 + e]) >>> 0
            }, e.writeUInt32BE = function(t, e, n) {
                t[0 + n] = e >>> 24, t[1 + n] = e >>> 16 & 255, t[2 + n] = e >>> 8 & 255, t[3 + n] = 255 & e
            }, e.ip = function(t, e, n, r) {
                for (var i = 0, f = 0, o = 6; o >= 0; o -= 2) {
                    for (var u = 0; u <= 24; u += 8) i <<= 1, i |= e >>> u + o & 1;
                    for (u = 0; u <= 24; u += 8) i <<= 1, i |= t >>> u + o & 1
                }
                for (o = 6; o >= 0; o -= 2) {
                    for (u = 1; u <= 25; u += 8) f <<= 1, f |= e >>> u + o & 1;
                    for (u = 1; u <= 25; u += 8) f <<= 1, f |= t >>> u + o & 1
                }
                n[r + 0] = i >>> 0, n[r + 1] = f >>> 0
            }, e.rip = function(t, e, n, r) {
                for (var i = 0, f = 0, o = 0; o < 4; o++)
                    for (var u = 24; u >= 0; u -= 8) i <<= 1, i |= e >>> u + o & 1, i <<= 1, i |= t >>> u + o & 1;
                for (o = 4; o < 8; o++)
                    for (u = 24; u >= 0; u -= 8) f <<= 1, f |= e >>> u + o & 1, f <<= 1, f |= t >>> u + o & 1;
                n[r + 0] = i >>> 0, n[r + 1] = f >>> 0
            }, e.pc1 = function(t, e, n, r) {
                for (var i = 0, f = 0, o = 7; o >= 5; o--) {
                    for (var u = 0; u <= 24; u += 8) i <<= 1, i |= e >> u + o & 1;
                    for (u = 0; u <= 24; u += 8) i <<= 1, i |= t >> u + o & 1
                }
                for (u = 0; u <= 24; u += 8) i <<= 1, i |= e >> u + o & 1;
                for (o = 1; o <= 3; o++) {
                    for (u = 0; u <= 24; u += 8) f <<= 1, f |= e >> u + o & 1;
                    for (u = 0; u <= 24; u += 8) f <<= 1, f |= t >> u + o & 1
                }
                for (u = 0; u <= 24; u += 8) f <<= 1, f |= t >> u + o & 1;
                n[r + 0] = i >>> 0, n[r + 1] = f >>> 0
            }, e.r28shl = function(t, e) {
                return t << e & 268435455 | t >>> 28 - e
            };
            var r = [14, 11, 17, 4, 27, 23, 25, 0, 13, 22, 7, 18, 5, 9, 16, 24, 2, 20, 12, 21, 1, 8, 15, 26, 15, 4, 25, 19, 9, 1, 26, 16, 5, 11, 23, 8, 12, 7, 17, 0, 22, 3, 10, 14, 6, 20, 27, 24];
            e.pc2 = function(t, e, n, i) {
                for (var f = 0, o = 0, u = r.length >>> 1, a = 0; a < u; a++) f <<= 1, f |= t >>> r[a] & 1;
                for (a = u; a < r.length; a++) o <<= 1, o |= e >>> r[a] & 1;
                n[i + 0] = f >>> 0, n[i + 1] = o >>> 0
            }, e.expand = function(t, e, n) {
                var r = 0,
                    i = 0;
                r = (1 & t) << 5 | t >>> 27;
                for (var f = 23; f >= 15; f -= 4) r <<= 6, r |= t >>> f & 63;
                for (f = 11; f >= 3; f -= 4) i |= t >>> f & 63, i <<= 6;
                i |= (31 & t) << 1 | t >>> 31, e[n + 0] = r >>> 0, e[n + 1] = i >>> 0
            };
            var i = [14, 0, 4, 15, 13, 7, 1, 4, 2, 14, 15, 2, 11, 13, 8, 1, 3, 10, 10, 6, 6, 12, 12, 11, 5, 9, 9, 5, 0, 3, 7, 8, 4, 15, 1, 12, 14, 8, 8, 2, 13, 4, 6, 9, 2, 1, 11, 7, 15, 5, 12, 11, 9, 3, 7, 14, 3, 10, 10, 0, 5, 6, 0, 13, 15, 3, 1, 13, 8, 4, 14, 7, 6, 15, 11, 2, 3, 8, 4, 14, 9, 12, 7, 0, 2, 1, 13, 10, 12, 6, 0, 9, 5, 11, 10, 5, 0, 13, 14, 8, 7, 10, 11, 1, 10, 3, 4, 15, 13, 4, 1, 2, 5, 11, 8, 6, 12, 7, 6, 12, 9, 0, 3, 5, 2, 14, 15, 9, 10, 13, 0, 7, 9, 0, 14, 9, 6, 3, 3, 4, 15, 6, 5, 10, 1, 2, 13, 8, 12, 5, 7, 14, 11, 12, 4, 11, 2, 15, 8, 1, 13, 1, 6, 10, 4, 13, 9, 0, 8, 6, 15, 9, 3, 8, 0, 7, 11, 4, 1, 15, 2, 14, 12, 3, 5, 11, 10, 5, 14, 2, 7, 12, 7, 13, 13, 8, 14, 11, 3, 5, 0, 6, 6, 15, 9, 0, 10, 3, 1, 4, 2, 7, 8, 2, 5, 12, 11, 1, 12, 10, 4, 14, 15, 9, 10, 3, 6, 15, 9, 0, 0, 6, 12, 10, 11, 1, 7, 13, 13, 8, 15, 9, 1, 4, 3, 5, 14, 11, 5, 12, 2, 7, 8, 2, 4, 14, 2, 14, 12, 11, 4, 2, 1, 12, 7, 4, 10, 7, 11, 13, 6, 1, 8, 5, 5, 0, 3, 15, 15, 10, 13, 3, 0, 9, 14, 8, 9, 6, 4, 11, 2, 8, 1, 12, 11, 7, 10, 1, 13, 14, 7, 2, 8, 13, 15, 6, 9, 15, 12, 0, 5, 9, 6, 10, 3, 4, 0, 5, 14, 3, 12, 10, 1, 15, 10, 4, 15, 2, 9, 7, 2, 12, 6, 9, 8, 5, 0, 6, 13, 1, 3, 13, 4, 14, 14, 0, 7, 11, 5, 3, 11, 8, 9, 4, 14, 3, 15, 2, 5, 12, 2, 9, 8, 5, 12, 15, 3, 10, 7, 11, 0, 14, 4, 1, 10, 7, 1, 6, 13, 0, 11, 8, 6, 13, 4, 13, 11, 0, 2, 11, 14, 7, 15, 4, 0, 9, 8, 1, 13, 10, 3, 14, 12, 3, 9, 5, 7, 12, 5, 2, 10, 15, 6, 8, 1, 6, 1, 6, 4, 11, 11, 13, 13, 8, 12, 1, 3, 4, 7, 10, 14, 7, 10, 9, 15, 5, 6, 0, 8, 15, 0, 14, 5, 2, 9, 3, 2, 12, 13, 1, 2, 15, 8, 13, 4, 8, 6, 10, 15, 3, 11, 7, 1, 4, 10, 12, 9, 5, 3, 6, 14, 11, 5, 0, 0, 14, 12, 9, 7, 2, 7, 2, 11, 1, 4, 14, 1, 7, 9, 4, 12, 10, 14, 8, 2, 13, 0, 15, 6, 12, 10, 9, 13, 0, 15, 3, 3, 5, 5, 6, 8, 11];
            e.substitute = function(t, e) {
                for (var n = 0, r = 0; r < 4; r++) {
                    n <<= 4, n |= i[64 * r + (t >>> 18 - 6 * r & 63)]
                }
                for (r = 0; r < 4; r++) {
                    n <<= 4, n |= i[256 + 64 * r + (e >>> 18 - 6 * r & 63)]
                }
                return n >>> 0
            };
            var f = [16, 25, 12, 11, 3, 20, 4, 15, 31, 17, 9, 6, 27, 14, 1, 22, 30, 24, 8, 18, 0, 5, 29, 23, 13, 19, 2, 26, 10, 21, 28, 7];
            e.permute = function(t) {
                for (var e = 0, n = 0; n < f.length; n++) e <<= 1, e |= t >>> f[n] & 1;
                return e >>> 0
            }, e.padSplit = function(t, e, n) {
                for (var r = t.toString(2); r.length < e;) r = "0" + r;
                for (var i = [], f = 0; f < e; f += n) i.push(r.slice(f, f + n));
                return i.join(" ")
            }
        },
        1746: function(t, e, n) {
            "use strict";
            var r = n(191),
                i = n(18),
                f = n(1745),
                o = n(1031);

            function u() {
                this.tmp = new Array(2), this.keys = null
            }

            function a(t) {
                o.call(this, t);
                var e = new u;
                this._desState = e, this.deriveKeys(e, t.key)
            }
            i(a, o), t.exports = a, a.create = function(t) {
                return new a(t)
            };
            var c = [1, 1, 2, 2, 2, 2, 2, 2, 1, 2, 2, 2, 2, 2, 2, 1];
            a.prototype.deriveKeys = function(t, e) {
                t.keys = new Array(32), r.equal(e.length, this.blockSize, "Invalid key length");
                var n = f.readUInt32BE(e, 0),
                    i = f.readUInt32BE(e, 4);
                f.pc1(n, i, t.tmp, 0), n = t.tmp[0], i = t.tmp[1];
                for (var o = 0; o < t.keys.length; o += 2) {
                    var u = c[o >>> 1];
                    n = f.r28shl(n, u), i = f.r28shl(i, u), f.pc2(n, i, t.keys, o)
                }
            }, a.prototype._update = function(t, e, n, r) {
                var i = this._desState,
                    o = f.readUInt32BE(t, e),
                    u = f.readUInt32BE(t, e + 4);
                f.ip(o, u, i.tmp, 0), o = i.tmp[0], u = i.tmp[1], "encrypt" === this.type ? this._encrypt(i, o, u, i.tmp, 0) : this._decrypt(i, o, u, i.tmp, 0), o = i.tmp[0], u = i.tmp[1], f.writeUInt32BE(n, o, r), f.writeUInt32BE(n, u, r + 4)
            }, a.prototype._pad = function(t, e) {
                for (var n = t.length - e, r = e; r < t.length; r++) t[r] = n;
                return !0
            }, a.prototype._unpad = function(t) {
                for (var e = t[t.length - 1], n = t.length - e; n < t.length; n++) r.equal(t[n], e);
                return t.slice(0, t.length - e)
            }, a.prototype._encrypt = function(t, e, n, r, i) {
                for (var o = e, u = n, a = 0; a < t.keys.length; a += 2) {
                    var c = t.keys[a],
                        s = t.keys[a + 1];
                    f.expand(u, t.tmp, 0), c ^= t.tmp[0], s ^= t.tmp[1];
                    var h = f.substitute(c, s),
                        l = u;
                    u = (o ^ f.permute(h)) >>> 0, o = l
                }
                f.rip(u, o, r, i)
            }, a.prototype._decrypt = function(t, e, n, r, i) {
                for (var o = n, u = e, a = t.keys.length - 2; a >= 0; a -= 2) {
                    var c = t.keys[a],
                        s = t.keys[a + 1];
                    f.expand(o, t.tmp, 0), c ^= t.tmp[0], s ^= t.tmp[1];
                    var h = f.substitute(c, s),
                        l = o;
                    o = (u ^ f.permute(h)) >>> 0, u = l
                }
                f.rip(o, u, r, i)
            }
        },
        1752: function(t, e, n) {
            var r = n(125);
            t.exports = m, m.simpleSieve = v, m.fermatTest = y;
            var i = n(35),
                f = new i(24),
                o = new(n(1753)),
                u = new i(1),
                a = new i(2),
                c = new i(5),
                s = (new i(16), new i(8), new i(10)),
                h = new i(3),
                l = (new i(7), new i(11)),
                d = new i(4),
                p = (new i(12), null);

            function b() {
                if (null !== p) return p;
                var t = [];
                t[0] = 2;
                for (var e = 1, n = 3; n < 1048576; n += 2) {
                    for (var r = Math.ceil(Math.sqrt(n)), i = 0; i < e && t[i] <= r && n % t[i] != 0; i++);
                    e !== i && t[i] <= r || (t[e++] = n)
                }
                return p = t, t
            }

            function v(t) {
                for (var e = b(), n = 0; n < e.length; n++)
                    if (0 === t.modn(e[n])) return 0 === t.cmpn(e[n]);
                return !0
            }

            function y(t) {
                var e = i.mont(t);
                return 0 === a.toRed(e).redPow(t.subn(1)).fromRed().cmpn(1)
            }

            function m(t, e) {
                if (t < 16) return new i(2 === e || 5 === e ? [140, 123] : [140, 39]);
                var n, p;
                for (e = new i(e);;) {
                    for (n = new i(r(Math.ceil(t / 8))); n.bitLength() > t;) n.ishrn(1);
                    if (n.isEven() && n.iadd(u), n.testn(1) || n.iadd(a), e.cmp(a)) {
                        if (!e.cmp(c))
                            for (; n.mod(s).cmp(h);) n.iadd(d)
                    } else
                        for (; n.mod(f).cmp(l);) n.iadd(d);
                    if (v(p = n.shrn(1)) && v(n) && y(p) && y(n) && o.test(p) && o.test(n)) return n
                }
            }
        },
        1997: function(t, e, n) {
            var r = n(72),
                i = n(21).Buffer,
                BigInteger = n(109),
                f = BigInteger.valueOf(3);

            function Point(t, e, n, i) {
                r.notStrictEqual(i, void 0, "Missing Z coordinate"), this.curve = t, this.x = e, this.y = n, this.z = i, this._zInv = null, this.compressed = !0
            }
            Object.defineProperty(Point.prototype, "zInv", {
                get: function() {
                    return null === this._zInv && (this._zInv = this.z.modInverse(this.curve.p)), this._zInv
                }
            }), Object.defineProperty(Point.prototype, "affineX", {
                get: function() {
                    return this.x.multiply(this.zInv).mod(this.curve.p)
                }
            }), Object.defineProperty(Point.prototype, "affineY", {
                get: function() {
                    return this.y.multiply(this.zInv).mod(this.curve.p)
                }
            }), Point.fromAffine = function(t, e, n) {
                return new Point(t, e, n, BigInteger.ONE)
            }, Point.prototype.equals = function(t) {
                return t === this || (this.curve.isInfinity(this) ? this.curve.isInfinity(t) : this.curve.isInfinity(t) ? this.curve.isInfinity(this) : 0 === t.y.multiply(this.z).subtract(this.y.multiply(t.z)).mod(this.curve.p).signum() && 0 === t.x.multiply(this.z).subtract(this.x.multiply(t.z)).mod(this.curve.p).signum())
            }, Point.prototype.negate = function() {
                var t = this.curve.p.subtract(this.y);
                return new Point(this.curve, this.x, t, this.z)
            }, Point.prototype.add = function(t) {
                if (this.curve.isInfinity(this)) return t;
                if (this.curve.isInfinity(t)) return this;
                var e = this.x,
                    n = this.y,
                    r = t.x,
                    i = t.y.multiply(this.z).subtract(n.multiply(t.z)).mod(this.curve.p),
                    o = r.multiply(this.z).subtract(e.multiply(t.z)).mod(this.curve.p);
                if (0 === o.signum()) return 0 === i.signum() ? this.twice() : this.curve.infinity;
                var u = o.square(),
                    a = u.multiply(o),
                    c = e.multiply(u),
                    s = i.square().multiply(this.z),
                    h = s.subtract(c.shiftLeft(1)).multiply(t.z).subtract(a).multiply(o).mod(this.curve.p),
                    l = c.multiply(f).multiply(i).subtract(n.multiply(a)).subtract(s.multiply(i)).multiply(t.z).add(i.multiply(a)).mod(this.curve.p),
                    d = a.multiply(this.z).multiply(t.z).mod(this.curve.p);
                return new Point(this.curve, h, l, d)
            }, Point.prototype.twice = function() {
                if (this.curve.isInfinity(this)) return this;
                if (0 === this.y.signum()) return this.curve.infinity;
                var t = this.x,
                    e = this.y,
                    n = e.multiply(this.z).mod(this.curve.p),
                    r = n.multiply(e).mod(this.curve.p),
                    i = this.curve.a,
                    o = t.square().multiply(f);
                0 !== i.signum() && (o = o.add(this.z.square().multiply(i)));
                var u = (o = o.mod(this.curve.p)).square().subtract(t.shiftLeft(3).multiply(r)).shiftLeft(1).multiply(n).mod(this.curve.p),
                    a = o.multiply(f).multiply(t).subtract(r.shiftLeft(1)).shiftLeft(2).multiply(r).subtract(o.pow(3)).mod(this.curve.p),
                    c = n.pow(3).shiftLeft(3).mod(this.curve.p);
                return new Point(this.curve, u, a, c)
            }, Point.prototype.multiply = function(t) {
                if (this.curve.isInfinity(this)) return this;
                if (0 === t.signum()) return this.curve.infinity;
                for (var e = t, n = e.multiply(f), r = this.negate(), i = this, o = n.bitLength() - 2; o > 0; --o) {
                    var u = n.testBit(o),
                        a = e.testBit(o);
                    i = i.twice(), u !== a && (i = i.add(u ? this : r))
                }
                return i
            }, Point.prototype.multiplyTwo = function(t, e, n) {
                for (var r = Math.max(t.bitLength(), n.bitLength()) - 1, i = this.curve.infinity, f = this.add(e); r >= 0;) {
                    var o = t.testBit(r),
                        u = n.testBit(r);
                    i = i.twice(), o ? i = u ? i.add(f) : i.add(this) : u && (i = i.add(e)), --r
                }
                return i
            }, Point.prototype.getEncoded = function(t) {
                if (null == t && (t = this.compressed), this.curve.isInfinity(this)) return i.alloc(1, 0);
                var e, n = this.affineX,
                    r = this.affineY,
                    f = this.curve.pLength;
                return t ? (e = i.allocUnsafe(1 + f)).writeUInt8(r.isEven() ? 2 : 3, 0) : ((e = i.allocUnsafe(1 + f + f)).writeUInt8(4, 0), r.toBuffer(f).copy(e, 1 + f)), n.toBuffer(f).copy(e, 1), e
            }, Point.decodeFrom = function(t, e) {
                var n, i = e.readUInt8(0),
                    f = 4 !== i,
                    o = Math.floor((t.p.bitLength() + 7) / 8),
                    u = BigInteger.fromBuffer(e.slice(1, 1 + o));
                if (f) {
                    r.equal(e.length, o + 1, "Invalid sequence length"), r(2 === i || 3 === i, "Invalid sequence tag");
                    var a = 3 === i;
                    n = t.pointFromX(a, u)
                } else {
                    r.equal(e.length, 1 + o + o, "Invalid sequence length");
                    var c = BigInteger.fromBuffer(e.slice(1 + o));
                    n = Point.fromAffine(t, u, c)
                }
                return n.compressed = f, n
            }, Point.prototype.toString = function() {
                return this.curve.isInfinity(this) ? "(INFINITY)" : "(" + this.affineX.toString() + "," + this.affineY.toString() + ")"
            }, t.exports = Point
        },
        1998: function(t, e, n) {
            var r = n(72),
                BigInteger = n(109),
                Point = n(1997);

            function i(t, e, n, r, i, f, o) {
                this.p = t, this.a = e, this.b = n, this.G = Point.fromAffine(this, r, i), this.n = f, this.h = o, this.infinity = new Point(this, null, null, BigInteger.ZERO), this.pOverFour = t.add(BigInteger.ONE).shiftRight(2), this.pLength = Math.floor((this.p.bitLength() + 7) / 8)
            }
            i.prototype.pointFromX = function(t, e) {
                var n = e.pow(3).add(this.a.multiply(e)).add(this.b).mod(this.p).modPow(this.pOverFour, this.p),
                    r = n;
                return n.isEven() ^ !t && (r = this.p.subtract(r)), Point.fromAffine(this, e, r)
            }, i.prototype.isInfinity = function(t) {
                return t === this.infinity || 0 === t.z.signum() && 0 !== t.y.signum()
            }, i.prototype.isOnCurve = function(t) {
                if (this.isInfinity(t)) return !0;
                var e = t.affineX,
                    n = t.affineY,
                    r = this.a,
                    i = this.b,
                    f = this.p;
                if (e.signum() < 0 || e.compareTo(f) >= 0) return !1;
                if (n.signum() < 0 || n.compareTo(f) >= 0) return !1;
                var o = n.square().mod(f),
                    u = e.pow(3).add(r.multiply(e)).add(i).mod(f);
                return o.equals(u)
            }, i.prototype.validate = function(t) {
                r(!this.isInfinity(t), "Point is at infinity"), r(this.isOnCurve(t), "Point is not on the curve");
                var e = t.multiply(this.n);
                return r(this.isInfinity(e), "Point is not a scalar multiple of G"), !0
            }, t.exports = i
        },
        2413: function(t, e, n) {
            "use strict";
            n.r(e);
            var r = Object.keys,
                i = Array.isArray,
                f = "undefined" != typeof self ? self : "undefined" != typeof window ? window : global;

            function o(t, e) {
                return "object" != typeof e || r(e).forEach((function(n) {
                    t[n] = e[n]
                })), t
            }
            var u = Object.getPrototypeOf,
                a = {}.hasOwnProperty;

            function c(t, e) {
                return a.call(t, e)
            }

            function s(t, e) {
                "function" == typeof e && (e = e(u(t))), r(e).forEach((function(n) {
                    l(t, n, e[n])
                }))
            }
            var h = Object.defineProperty;

            function l(t, e, n, r) {
                h(t, e, o(n && c(n, "get") && "function" == typeof n.get ? {
                    get: n.get,
                    set: n.set,
                    configurable: !0
                } : {
                    value: n,
                    configurable: !0,
                    writable: !0
                }, r))
            }

            function d(t) {
                return {
                    from: function(e) {
                        return t.prototype = Object.create(e.prototype), l(t.prototype, "constructor", t), {
                            extend: s.bind(null, t.prototype)
                        }
                    }
                }
            }
            var p = Object.getOwnPropertyDescriptor;
            var b = [].slice;

            function v(t, e, n) {
                return b.call(t, e, n)
            }

            function y(t, e) {
                return e(t)
            }

            function m(t) {
                if (!t) throw new Error("Assertion Failed")
            }

            function F(t) {
                f.setImmediate ? setImmediate(t) : setTimeout(t, 0)
            }

            function g(t, e) {
                return t.reduce((function(t, n, r) {
                    var i = e(n, r);
                    return i && (t[i[0]] = i[1]), t
                }), {})
            }

            function w(t, e) {
                return function() {
                    try {
                        t.apply(this, arguments)
                    } catch (t) {
                        e(t)
                    }
                }
            }

            function _(t, e, n) {
                try {
                    t.apply(null, n)
                } catch (t) {
                    e && e(t)
                }
            }

            function x(t, e) {
                if (c(t, e)) return t[e];
                if (!e) return t;
                if ("string" != typeof e) {
                    for (var n = [], r = 0, i = e.length; r < i; ++r) {
                        var f = x(t, e[r]);
                        n.push(f)
                    }
                    return n
                }
                var o = e.indexOf(".");
                if (-1 !== o) {
                    var u = t[e.substr(0, o)];
                    return void 0 === u ? void 0 : x(u, e.substr(o + 1))
                }
            }

            function B(t, e, n) {
                if (t && void 0 !== e && (!("isFrozen" in Object) || !Object.isFrozen(t)))
                    if ("string" != typeof e && "length" in e) {
                        m("string" != typeof n && "length" in n);
                        for (var r = 0, i = e.length; r < i; ++r) B(t, e[r], n[r])
                    } else {
                        var f = e.indexOf(".");
                        if (-1 !== f) {
                            var o = e.substr(0, f),
                                u = e.substr(f + 1);
                            if ("" === u) void 0 === n ? delete t[o] : t[o] = n;
                            else {
                                var a = t[o];
                                a || (a = t[o] = {}), B(a, u, n)
                            }
                        } else void 0 === n ? delete t[e] : t[e] = n
                    }
            }

            function k(t) {
                var e = {};
                for (var n in t) c(t, n) && (e[n] = t[n]);
                return e
            }
            var E = [].concat;

            function I(t) {
                return E.apply([], t)
            }
            var C = "Boolean,String,Date,RegExp,Blob,File,FileList,ArrayBuffer,DataView,Uint8ClampedArray,ImageData,Map,Set".split(",").concat(I([8, 16, 32, 64].map((function(t) {
                return ["Int", "Uint", "Float"].map((function(e) {
                    return e + t + "Array"
                }))
            })))).filter((function(t) {
                return f[t]
            })).map((function(t) {
                return f[t]
            }));

            function A(t) {
                if (!t || "object" != typeof t) return t;
                var e;
                if (i(t)) {
                    e = [];
                    for (var n = 0, r = t.length; n < r; ++n) e.push(A(t[n]))
                } else if (C.indexOf(t.constructor) >= 0) e = t;
                else
                    for (var f in e = t.constructor ? Object.create(t.constructor.prototype) : {}, t) c(t, f) && (e[f] = A(t[f]));
                return e
            }

            function D(t, e, n, i) {
                return n = n || {}, i = i || "", r(t).forEach((function(r) {
                    if (c(e, r)) {
                        var f = t[r],
                            o = e[r];
                        "object" == typeof f && "object" == typeof o && f && o && "" + f.constructor == "" + o.constructor ? D(f, o, n, i + r + ".") : f !== o && (n[i + r] = e[r])
                    } else n[i + r] = void 0
                })), r(e).forEach((function(r) {
                    c(t, r) || (n[i + r] = e[r])
                })), n
            }
            var q = "undefined" != typeof Symbol && Symbol.iterator,
                O = q ? function(t) {
                    var e;
                    return null != t && (e = t[q]) && e.apply(t)
                } : function() {
                    return null
                },
                S = {};

            function P(t) {
                var e, n, r, f;
                if (1 === arguments.length) {
                    if (i(t)) return t.slice();
                    if (this === S && "string" == typeof t) return [t];
                    if (f = O(t)) {
                        for (n = []; !(r = f.next()).done;) n.push(r.value);
                        return n
                    }
                    if (null == t) return [t];
                    if ("number" == typeof(e = t.length)) {
                        for (n = new Array(e); e--;) n[e] = t[e];
                        return n
                    }
                    return [t]
                }
                for (e = arguments.length, n = new Array(e); e--;) n[e] = arguments[e];
                return n
            }
            var j = "undefined" != typeof location && /^(http|https):\/\/(localhost|127\.0\.0\.1)/.test(location.href);

            function z(t, e) {
                j = t, K = e
            }
            var K = function() {
                    return !0
                },
                N = !new Error("").stack;

            function T() {
                if (N) try {
                    throw T.arguments, new Error
                } catch (t) {
                    return t
                }
                return new Error
            }

            function R(t, e) {
                var n = t.stack;
                return n ? (e = e || 0, 0 === n.indexOf(t.name) && (e += (t.name + t.message).split("\n").length), n.split("\n").slice(e).filter(K).map((function(t) {
                    return "\n" + t
                })).join("")) : ""
            }
            var M = ["Unknown", "Constraint", "Data", "TransactionInactive", "ReadOnly", "Version", "NotFound", "InvalidState", "InvalidAccess", "Abort", "Timeout", "QuotaExceeded", "Syntax", "DataClone"],
                L = ["Modify", "Bulk", "OpenFailed", "VersionChange", "Schema", "Upgrade", "InvalidTable", "MissingAPI", "NoSuchDatabase", "InvalidArgument", "SubTransaction", "Unsupported", "Internal", "DatabaseClosed", "PrematureCommit", "ForeignAwait"].concat(M),
                U = {
                    VersionChanged: "Database version changed by other database connection",
                    DatabaseClosed: "Database has been closed",
                    Abort: "Transaction aborted",
                    TransactionInactive: "Transaction has already completed or failed"
                };

            function G(t, e) {
                this._e = T(), this.name = t, this.message = e
            }

            function H(t, e, n, r) {
                this._e = T(), this.failures = e, this.failedKeys = r, this.successCount = n
            }

            function V(t, e) {
                this._e = T(), this.name = "BulkError", this.failures = e, this.message = function(t, e) {
                    return t + ". Errors: " + e.map((function(t) {
                        return t.toString()
                    })).filter((function(t, e, n) {
                        return n.indexOf(t) === e
                    })).join("\n")
                }(t, e)
            }
            d(G).from(Error).extend({
                stack: {
                    get: function() {
                        return this._stack || (this._stack = this.name + ": " + this.message + R(this._e, 2))
                    }
                },
                toString: function() {
                    return this.name + ": " + this.message
                }
            }), d(H).from(G), d(V).from(G);
            var Q = L.reduce((function(t, e) {
                    return t[e] = e + "Error", t
                }), {}),
                W = G,
                Z = L.reduce((function(t, e) {
                    var n = e + "Error";

                    function r(t, r) {
                        this._e = T(), this.name = n, t ? "string" == typeof t ? (this.message = t, this.inner = r || null) : "object" == typeof t && (this.message = t.name + " " + t.message, this.inner = t) : (this.message = U[e] || n, this.inner = null)
                    }
                    return d(r).from(W), t[e] = r, t
                }), {});
            Z.Syntax = SyntaxError, Z.Type = TypeError, Z.Range = RangeError;
            var X = M.reduce((function(t, e) {
                return t[e + "Error"] = Z[e], t
            }), {});
            var Y = L.reduce((function(t, e) {
                return -1 === ["Syntax", "Type", "Range"].indexOf(e) && (t[e + "Error"] = Z[e]), t
            }), {});

            function J() {}

            function $(t) {
                return t
            }

            function tt(t, e) {
                return null == t || t === $ ? e : function(n) {
                    return e(t(n))
                }
            }

            function et(t, e) {
                return function() {
                    t.apply(this, arguments), e.apply(this, arguments)
                }
            }

            function nt(t, e) {
                return t === J ? e : function() {
                    var n = t.apply(this, arguments);
                    void 0 !== n && (arguments[0] = n);
                    var r = this.onsuccess,
                        i = this.onerror;
                    this.onsuccess = null, this.onerror = null;
                    var f = e.apply(this, arguments);
                    return r && (this.onsuccess = this.onsuccess ? et(r, this.onsuccess) : r), i && (this.onerror = this.onerror ? et(i, this.onerror) : i), void 0 !== f ? f : n
                }
            }

            function rt(t, e) {
                return t === J ? e : function() {
                    t.apply(this, arguments);
                    var n = this.onsuccess,
                        r = this.onerror;
                    this.onsuccess = this.onerror = null, e.apply(this, arguments), n && (this.onsuccess = this.onsuccess ? et(n, this.onsuccess) : n), r && (this.onerror = this.onerror ? et(r, this.onerror) : r)
                }
            }

            function it(t, e) {
                return t === J ? e : function(n) {
                    var r = t.apply(this, arguments);
                    o(n, r);
                    var i = this.onsuccess,
                        f = this.onerror;
                    this.onsuccess = null, this.onerror = null;
                    var u = e.apply(this, arguments);
                    return i && (this.onsuccess = this.onsuccess ? et(i, this.onsuccess) : i), f && (this.onerror = this.onerror ? et(f, this.onerror) : f), void 0 === r ? void 0 === u ? void 0 : u : o(r, u)
                }
            }

            function ft(t, e) {
                return t === J ? e : function() {
                    return !1 !== e.apply(this, arguments) && t.apply(this, arguments)
                }
            }

            function ot(t, e) {
                return t === J ? e : function() {
                    var n = t.apply(this, arguments);
                    if (n && "function" == typeof n.then) {
                        for (var r = this, i = arguments.length, f = new Array(i); i--;) f[i] = arguments[i];
                        return n.then((function() {
                            return e.apply(r, f)
                        }))
                    }
                    return e.apply(this, arguments)
                }
            }
            Y.ModifyError = H, Y.DexieError = G, Y.BulkError = V;
            var ut = {},
                at = function() {
                    try {
                        return new Function("let F=async ()=>{},p=F();return [p,Object.getPrototypeOf(p),Promise.resolve(),F.constructor];")()
                    } catch (e) {
                        var t = f.Promise;
                        return t ? [t.resolve(), t.prototype, t.resolve()] : []
                    }
                }(),
                ct = at[0],
                st = at[1],
                ht = at[2],
                lt = st && st.then,
                dt = ct && ct.constructor,
                pt = at[3],
                bt = !!ht,
                vt = !1,
                yt = ht ? function() {
                    ht.then(Tt)
                } : f.setImmediate ? setImmediate.bind(null, Tt) : f.MutationObserver ? function() {
                    var t = document.createElement("div");
                    new MutationObserver((function() {
                        Tt(), t = null
                    })).observe(t, {
                        attributes: !0
                    }), t.setAttribute("i", "1")
                } : function() {
                    setTimeout(Tt, 0)
                },
                mt = function(t, e) {
                    It.push([t, e]), gt && (yt(), gt = !1)
                },
                Ft = !0,
                gt = !0,
                wt = [],
                _t = [],
                xt = null,
                Bt = $,
                kt = {
                    id: "global",
                    global: !0,
                    ref: 0,
                    unhandleds: [],
                    onunhandled: ae,
                    pgp: !1,
                    env: {},
                    finalize: function() {
                        this.unhandleds.forEach((function(t) {
                            try {
                                ae(t[0], t[1])
                            } catch (t) {}
                        }))
                    }
                },
                Et = kt,
                It = [],
                Ct = 0,
                At = [];

            function Dt(t) {
                if ("object" != typeof this) throw new TypeError("Promises must be constructed via new");
                this._listeners = [], this.onuncatched = J, this._lib = !1;
                var e = this._PSD = Et;
                if (j && (this._stackHolder = T(), this._prev = null, this._numPrev = 0), "function" != typeof t) {
                    if (t !== ut) throw new TypeError("Not a function");
                    return this._state = arguments[1], this._value = arguments[2], void(!1 === this._state && Pt(this, this._value))
                }
                this._state = null, this._value = null, ++e.ref, St(this, t)
            }
            var qt = {
                get: function() {
                    var t = Et,
                        e = Zt;

                    function n(n, r) {
                        var i = this,
                            f = !t.global && (t !== Et || e !== Zt);
                        f && $t();
                        var o = new Dt((function(e, o) {
                            zt(i, new Ot(oe(n, t, f), oe(r, t, f), e, o, t))
                        }));
                        return j && Nt(o, this), o
                    }
                    return n.prototype = ut, n
                },
                set: function(t) {
                    l(this, "then", t && t.prototype === ut ? qt : {
                        get: function() {
                            return t
                        },
                        set: qt.set
                    })
                }
            };

            function Ot(t, e, n, r, i) {
                this.onFulfilled = "function" == typeof t ? t : null, this.onRejected = "function" == typeof e ? e : null, this.resolve = n, this.reject = r, this.psd = i
            }

            function St(t, e) {
                try {
                    e((function(e) {
                        if (null === t._state) {
                            if (e === t) throw new TypeError("A promise cannot be resolved with itself.");
                            var n = t._lib && Rt();
                            e && "function" == typeof e.then ? St(t, (function(t, n) {
                                e instanceof Dt ? e._then(t, n) : e.then(t, n)
                            })) : (t._state = !0, t._value = e, jt(t)), n && Mt()
                        }
                    }), Pt.bind(null, t))
                } catch (e) {
                    Pt(t, e)
                }
            }

            function Pt(t, e) {
                if (_t.push(e), null === t._state) {
                    var n = t._lib && Rt();
                    e = Bt(e), t._state = !1, t._value = e, j && null !== e && "object" == typeof e && !e._promise && _((function() {
                            var n = function t(e, n) {
                                var r;
                                return p(e, n) || (r = u(e)) && t(r, n)
                            }(e, "stack");
                            e._promise = t, l(e, "stack", {
                                get: function() {
                                    return vt ? n && (n.get ? n.get.apply(e) : n.value) : t.stack
                                }
                            })
                        })),
                        function(t) {
                            wt.some((function(e) {
                                return e._value === t._value
                            })) || wt.push(t)
                        }(t), jt(t), n && Mt()
                }
            }

            function jt(t) {
                var e = t._listeners;
                t._listeners = [];
                for (var n = 0, r = e.length; n < r; ++n) zt(t, e[n]);
                var i = t._PSD;
                --i.ref || i.finalize(), 0 === Ct && (++Ct, mt((function() {
                    0 == --Ct && Lt()
                }), []))
            }

            function zt(t, e) {
                if (null !== t._state) {
                    var n = t._state ? e.onFulfilled : e.onRejected;
                    if (null === n) return (t._state ? e.resolve : e.reject)(t._value);
                    ++e.psd.ref, ++Ct, mt(Kt, [n, t, e])
                } else t._listeners.push(e)
            }

            function Kt(t, e, n) {
                try {
                    xt = e;
                    var r, i = e._value;
                    e._state ? r = t(i) : (_t.length && (_t = []), r = t(i), -1 === _t.indexOf(i) && function(t) {
                        var e = wt.length;
                        for (; e;)
                            if (wt[--e]._value === t._value) return void wt.splice(e, 1)
                    }(e)), n.resolve(r)
                } catch (t) {
                    n.reject(t)
                } finally {
                    xt = null, 0 == --Ct && Lt(), --n.psd.ref || n.psd.finalize()
                }
            }

            function Nt(t, e) {
                var n = e ? e._numPrev + 1 : 0;
                n < 100 && (t._prev = e, t._numPrev = n)
            }

            function Tt() {
                Rt() && Mt()
            }

            function Rt() {
                var t = Ft;
                return Ft = !1, gt = !1, t
            }

            function Mt() {
                var t, e, n;
                do {
                    for (; It.length > 0;)
                        for (t = It, It = [], n = t.length, e = 0; e < n; ++e) {
                            var r = t[e];
                            r[0].apply(null, r[1])
                        }
                } while (It.length > 0);
                Ft = !0, gt = !0
            }

            function Lt() {
                var t = wt;
                wt = [], t.forEach((function(t) {
                    t._PSD.onunhandled.call(null, t._value, t)
                }));
                for (var e = At.slice(0), n = e.length; n;) e[--n]()
            }

            function Ut(t) {
                return new Dt(ut, !1, t)
            }

            function Gt(t, e) {
                var n = Et;
                return function() {
                    var r = Rt(),
                        i = Et;
                    try {
                        return re(n, !0), t.apply(this, arguments)
                    } catch (t) {
                        e && e(t)
                    } finally {
                        re(i, !1), r && Mt()
                    }
                }
            }
            s(Dt.prototype, {
                then: qt,
                _then: function(t, e) {
                    zt(this, new Ot(null, null, t, e, Et))
                },
                catch: function(t) {
                    if (1 === arguments.length) return this.then(null, t);
                    var e = arguments[0],
                        n = arguments[1];
                    return "function" == typeof e ? this.then(null, (function(t) {
                        return t instanceof e ? n(t) : Ut(t)
                    })) : this.then(null, (function(t) {
                        return t && t.name === e ? n(t) : Ut(t)
                    }))
                },
                finally: function(t) {
                    return this.then((function(e) {
                        return t(), e
                    }), (function(e) {
                        return t(), Ut(e)
                    }))
                },
                stack: {
                    get: function() {
                        if (this._stack) return this._stack;
                        try {
                            vt = !0;
                            var t = function t(e, n, r) {
                                if (n.length === r) return n;
                                var i = "";
                                if (!1 === e._state) {
                                    var f, o, u = e._value;
                                    null != u ? (f = u.name || "Error", o = u.message || u, i = R(u, 0)) : (f = u, o = ""), n.push(f + (o ? ": " + o : "") + i)
                                }
                                j && ((i = R(e._stackHolder, 2)) && -1 === n.indexOf(i) && n.push(i), e._prev && t(e._prev, n, r));
                                return n
                            }(this, [], 20).join("\nFrom previous: ");
                            return null !== this._state && (this._stack = t), t
                        } finally {
                            vt = !1
                        }
                    }
                },
                timeout: function(t, e) {
                    var n = this;
                    return t < 1 / 0 ? new Dt((function(r, i) {
                        var f = setTimeout((function() {
                            return i(new Z.Timeout(e))
                        }), t);
                        n.then(r, i).finally(clearTimeout.bind(null, f))
                    })) : this
                }
            }), "undefined" != typeof Symbol && Symbol.toStringTag && l(Dt.prototype, Symbol.toStringTag, "Promise"), kt.env = ie(), s(Dt, {
                all: function() {
                    var t = P.apply(null, arguments).map(te);
                    return new Dt((function(e, n) {
                        0 === t.length && e([]);
                        var r = t.length;
                        t.forEach((function(i, f) {
                            return Dt.resolve(i).then((function(n) {
                                t[f] = n, --r || e(t)
                            }), n)
                        }))
                    }))
                },
                resolve: function(t) {
                    if (t instanceof Dt) return t;
                    if (t && "function" == typeof t.then) return new Dt((function(e, n) {
                        t.then(e, n)
                    }));
                    var e = new Dt(ut, !0, t);
                    return Nt(e, xt), e
                },
                reject: Ut,
                race: function() {
                    var t = P.apply(null, arguments).map(te);
                    return new Dt((function(e, n) {
                        t.map((function(t) {
                            return Dt.resolve(t).then(e, n)
                        }))
                    }))
                },
                PSD: {
                    get: function() {
                        return Et
                    },
                    set: function(t) {
                        return Et = t
                    }
                },
                newPSD: Yt,
                usePSD: fe,
                scheduler: {
                    get: function() {
                        return mt
                    },
                    set: function(t) {
                        mt = t
                    }
                },
                rejectionMapper: {
                    get: function() {
                        return Bt
                    },
                    set: function(t) {
                        Bt = t
                    }
                },
                follow: function(t, e) {
                    return new Dt((function(n, r) {
                        return Yt((function(e, n) {
                            var r = Et;
                            r.unhandleds = [], r.onunhandled = n, r.finalize = et((function() {
                                var t = this;
                                ! function(t) {
                                    At.push((function e() {
                                        t(), At.splice(At.indexOf(e), 1)
                                    })), ++Ct, mt((function() {
                                        0 == --Ct && Lt()
                                    }), [])
                                }((function() {
                                    0 === t.unhandleds.length ? e() : n(t.unhandleds[0])
                                }))
                            }), r.finalize), t()
                        }), e, n, r)
                    }))
                }
            });
            var Ht = {
                    awaits: 0,
                    echoes: 0,
                    id: 0
                },
                Vt = 0,
                Qt = [],
                Wt = 0,
                Zt = 0,
                Xt = 0;

            function Yt(t, e, n, r) {
                var i = Et,
                    f = Object.create(i);
                f.parent = i, f.ref = 0, f.global = !1, f.id = ++Xt;
                var u = kt.env;
                f.env = bt ? {
                    Promise: Dt,
                    PromiseProp: {
                        value: Dt,
                        configurable: !0,
                        writable: !0
                    },
                    all: Dt.all,
                    race: Dt.race,
                    resolve: Dt.resolve,
                    reject: Dt.reject,
                    nthen: ue(u.nthen, f),
                    gthen: ue(u.gthen, f)
                } : {}, e && o(f, e), ++i.ref, f.finalize = function() {
                    --this.parent.ref || this.parent.finalize()
                };
                var a = fe(f, t, n, r);
                return 0 === f.ref && f.finalize(), a
            }

            function Jt() {
                return Ht.id || (Ht.id = ++Vt), ++Ht.awaits, Ht.echoes += 7, Ht.id
            }

            function $t(t) {
                !Ht.awaits || t && t !== Ht.id || (0 == --Ht.awaits && (Ht.id = 0), Ht.echoes = 7 * Ht.awaits)
            }

            function te(t) {
                return Ht.echoes && t && t.constructor === dt ? (Jt(), t.then((function(t) {
                    return $t(), t
                }), (function(t) {
                    return $t(), ce(t)
                }))) : t
            }

            function ee(t) {
                ++Zt, Ht.echoes && 0 != --Ht.echoes || (Ht.echoes = Ht.id = 0), Qt.push(Et), re(t, !0)
            }

            function ne() {
                var t = Qt[Qt.length - 1];
                Qt.pop(), re(t, !1)
            }

            function re(t, e) {
                var n, r = Et;
                if ((e ? !Ht.echoes || Wt++ && t === Et : !Wt || --Wt && t === Et) || (n = e ? ee.bind(null, t) : ne, lt.call(ct, n)), t !== Et && (Et = t, r === kt && (kt.env = ie()), bt)) {
                    var i = kt.env.Promise,
                        o = t.env;
                    st.then = o.nthen, i.prototype.then = o.gthen, (r.global || t.global) && (Object.defineProperty(f, "Promise", o.PromiseProp), i.all = o.all, i.race = o.race, i.resolve = o.resolve, i.reject = o.reject)
                }
            }

            function ie() {
                var t = f.Promise;
                return bt ? {
                    Promise: t,
                    PromiseProp: Object.getOwnPropertyDescriptor(f, "Promise"),
                    all: t.all,
                    race: t.race,
                    resolve: t.resolve,
                    reject: t.reject,
                    nthen: st.then,
                    gthen: t.prototype.then
                } : {}
            }

            function fe(t, e, n, r, i) {
                var f = Et;
                try {
                    return re(t, !0), e(n, r, i)
                } finally {
                    re(f, !1)
                }
            }

            function oe(t, e, n) {
                return "function" != typeof t ? t : function() {
                    var r = Et;
                    n && Jt(), re(e, !0);
                    try {
                        return t.apply(this, arguments)
                    } finally {
                        re(r, !1)
                    }
                }
            }

            function ue(t, e) {
                return function(n, r) {
                    return t.call(this, oe(n, e, !1), oe(r, e, !1))
                }
            }

            function ae(t, e) {
                var n;
                try {
                    n = e.onuncatched(t)
                } catch (t) {}
                if (!1 !== n) try {
                    var r, i = {
                        promise: e,
                        reason: t
                    };
                    if (f.document && document.createEvent ? ((r = document.createEvent("Event")).initEvent("unhandledrejection", !0, !0), o(r, i)) : f.CustomEvent && o(r = new CustomEvent("unhandledrejection", {
                            detail: i
                        }), i), r && f.dispatchEvent && (dispatchEvent(r), !f.PromiseRejectionEvent && f.onunhandledrejection)) try {
                        f.onunhandledrejection(r)
                    } catch (t) {}
                    r.defaultPrevented || console.warn("Unhandled rejection: " + (t.stack || t))
                } catch (t) {}
            }
            var ce = Dt.reject;

            function se(t) {
                var e = {},
                    n = function(n, r) {
                        if (r) {
                            for (var i = arguments.length, f = new Array(i - 1); --i;) f[i - 1] = arguments[i];
                            return e[n].subscribe.apply(null, f), t
                        }
                        if ("string" == typeof n) return e[n]
                    };
                n.addEventType = u;
                for (var f = 1, o = arguments.length; f < o; ++f) u(arguments[f]);
                return n;

                function u(t, r, i) {
                    if ("object" == typeof t) return a(t);
                    r || (r = ft), i || (i = J);
                    var f = {
                        subscribers: [],
                        fire: i,
                        subscribe: function(t) {
                            -1 === f.subscribers.indexOf(t) && (f.subscribers.push(t), f.fire = r(f.fire, t))
                        },
                        unsubscribe: function(t) {
                            f.subscribers = f.subscribers.filter((function(e) {
                                return e !== t
                            })), f.fire = f.subscribers.reduce(r, i)
                        }
                    };
                    return e[t] = n[t] = f, f
                }

                function a(t) {
                    r(t).forEach((function(e) {
                        var n = t[e];
                        if (i(n)) u(e, t[e][0], t[e][1]);
                        else {
                            if ("asap" !== n) throw new Z.InvalidArgument("Invalid event config");
                            var r = u(e, $, (function() {
                                for (var t = arguments.length, e = new Array(t); t--;) e[t] = arguments[t];
                                r.subscribers.forEach((function(t) {
                                    F((function() {
                                        t.apply(null, e)
                                    }))
                                }))
                            }))
                        }
                    }))
                }
            }
            var he, le = String.fromCharCode(65535),
                de = function() {
                    try {
                        return IDBKeyRange.only([
                            []
                        ]), [
                            []
                        ]
                    } catch (t) {
                        return le
                    }
                }(),
                pe = "Invalid key provided. Keys must be of type string, number, Date or Array<string | number | Date>.",
                be = [],
                ve = "undefined" != typeof navigator && /(MSIE|Trident|Edge)/.test(navigator.userAgent),
                ye = ve,
                me = ve,
                Fe = function(t) {
                    return !/(dexie\.js|dexie\.min\.js)/.test(t)
                };

            function ge(t, e) {
                var n, u, a, h, d, p = ge.dependencies,
                    b = o({
                        addons: ge.addons,
                        autoOpen: !0,
                        indexedDB: p.indexedDB,
                        IDBKeyRange: p.IDBKeyRange
                    }, e),
                    F = b.addons,
                    E = b.autoOpen,
                    C = b.indexedDB,
                    q = b.IDBKeyRange,
                    O = this._dbSchema = {},
                    z = [],
                    K = [],
                    N = {},
                    M = null,
                    L = null,
                    U = !1,
                    G = null,
                    Q = !1,
                    W = "readwrite",
                    X = this,
                    Y = new Dt((function(t) {
                        n = t
                    })),
                    et = new Dt((function(t, e) {
                        u = e
                    })),
                    ft = !0,
                    ut = !!qe(C);

                function at(t) {
                    this._cfg = {
                        version: t,
                        storesSource: null,
                        dbschema: {},
                        tables: {},
                        contentUpgrade: null
                    }, this.stores({})
                }

                function ct(t, e, n) {
                    var i = X._createTransaction(W, K, O);
                    i.create(e), i._completion.catch(n);
                    var f = i._reject.bind(i);
                    Yt((function() {
                        Et.trans = i, 0 === t ? (r(O).forEach((function(t) {
                            st(e, t, O[t].primKey, O[t].indexes)
                        })), Dt.follow((function() {
                            return X.on.populate.fire(i)
                        })).catch(f)) : function(t, e, n) {
                            var i = [],
                                f = z.filter((function(e) {
                                    return e._cfg.version === t
                                }))[0];
                            if (!f) throw new Z.Upgrade("Dexie specification of currently installed DB version is missing");
                            O = X._dbSchema = f._cfg.dbschema;
                            var o = !1;

                            function u() {
                                return i.length ? Dt.resolve(i.shift()(e.idbtrans)).then(u) : Dt.resolve()
                            }
                            return z.filter((function(e) {
                                return e._cfg.version > t
                            })).forEach((function(t) {
                                i.push((function() {
                                    var r = O,
                                        i = t._cfg.dbschema;
                                    Pt(r, n), Pt(i, n), O = X._dbSchema = i;
                                    var f = function(t, e) {
                                        var n = {
                                            del: [],
                                            add: [],
                                            change: []
                                        };
                                        for (var r in t) e[r] || n.del.push(r);
                                        for (r in e) {
                                            var i = t[r],
                                                f = e[r];
                                            if (i) {
                                                var o = {
                                                    name: r,
                                                    def: f,
                                                    recreate: !1,
                                                    del: [],
                                                    add: [],
                                                    change: []
                                                };
                                                if (i.primKey.src !== f.primKey.src) o.recreate = !0, n.change.push(o);
                                                else {
                                                    var u = i.idxByName,
                                                        a = f.idxByName;
                                                    for (var c in u) a[c] || o.del.push(c);
                                                    for (c in a) {
                                                        var s = u[c],
                                                            h = a[c];
                                                        s ? s.src !== h.src && o.change.push(h) : o.add.push(h)
                                                    }(o.del.length > 0 || o.add.length > 0 || o.change.length > 0) && n.change.push(o)
                                                }
                                            } else n.add.push([r, f])
                                        }
                                        return n
                                    }(r, i);
                                    if (f.add.forEach((function(t) {
                                            st(n, t[0], t[1].primKey, t[1].indexes)
                                        })), f.change.forEach((function(t) {
                                            if (t.recreate) throw new Z.Upgrade("Not yet support for changing primary key");
                                            var e = n.objectStore(t.name);
                                            t.add.forEach((function(t) {
                                                ht(e, t)
                                            })), t.change.forEach((function(t) {
                                                e.deleteIndex(t.name), ht(e, t)
                                            })), t.del.forEach((function(t) {
                                                e.deleteIndex(t)
                                            }))
                                        })), t._cfg.contentUpgrade) return o = !0, Dt.follow((function() {
                                        t._cfg.contentUpgrade(e)
                                    }))
                                })), i.push((function(e) {
                                    o && ye || function(t, e) {
                                        for (var n = 0; n < e.db.objectStoreNames.length; ++n) {
                                            var r = e.db.objectStoreNames[n];
                                            null == t[r] && e.db.deleteObjectStore(r)
                                        }
                                    }(t._cfg.dbschema, e)
                                }))
                            })), u().then((function() {
                                ! function(t, e) {
                                    r(t).forEach((function(n) {
                                        e.db.objectStoreNames.contains(n) || st(e, n, t[n].primKey, t[n].indexes)
                                    }))
                                }(O, n)
                            }))
                        }(t, i, e).catch(f)
                    }))
                }

                function st(t, e, n, r) {
                    var i = t.db.createObjectStore(e, n.keyPath ? {
                        keyPath: n.keyPath,
                        autoIncrement: n.auto
                    } : {
                        autoIncrement: n.auto
                    });
                    return r.forEach((function(t) {
                        ht(i, t)
                    })), i
                }

                function ht(t, e) {
                    t.createIndex(e.name, e.keyPath, {
                        unique: e.unique,
                        multiEntry: e.multi
                    })
                }

                function lt(t, e, n) {
                    var r = arguments.length;
                    if (r < 2) throw new Z.InvalidArgument("Too few arguments");
                    for (var i = new Array(r - 1); --r;) i[r - 1] = arguments[r];
                    n = i.pop();
                    var f = I(i);
                    return [t, f, n]
                }

                function bt(t, e, n) {
                    this.name = t, this.schema = e, this._tx = n, this.hook = N[t] ? N[t].hook : se(null, {
                        creating: [nt, J],
                        reading: [tt, $],
                        updating: [it, J],
                        deleting: [rt, J]
                    })
                }

                function vt(t, e, n) {
                    return (n ? ke : xe)((function(n) {
                        t.push(n), e && e()
                    }))
                }

                function yt(t, e, n, r, i) {
                    return new Dt((function(f, o) {
                        var u = n.length,
                            a = u - 1;
                        if (0 === u) return f();
                        if (r) {
                            var c, s = ke(o),
                                h = _e(null);
                            _((function() {
                                for (var r = 0; r < u; ++r) {
                                    c = {
                                        onsuccess: null,
                                        onerror: null
                                    };
                                    var o = n[r];
                                    i.call(c, o[0], o[1], e);
                                    var l = t.delete(o[0]);
                                    l._hookCtx = c, l.onerror = s, l.onsuccess = r === a ? _e(f) : h
                                }
                            }), (function(t) {
                                throw c.onerror && c.onerror(t), t
                            }))
                        } else
                            for (var l = 0; l < u; ++l) {
                                var d = t.delete(n[l]);
                                d.onerror = xe(o), l === a && (d.onsuccess = Gt((function() {
                                    return f()
                                })))
                            }
                    }))
                }

                function mt(t, e, n, r) {
                    var i = this;
                    this.db = X, this.mode = t, this.storeNames = e, this.idbtrans = null, this.on = se(this, "complete", "error", "abort"), this.parent = r || null, this.active = !0, this._reculock = 0, this._blockedFuncs = [], this._resolve = null, this._reject = null, this._waitingFor = null, this._waitingQueue = null, this._spinCount = 0, this._completion = new Dt((function(t, e) {
                        i._resolve = t, i._reject = e
                    })), this._completion.then((function() {
                        i.active = !1, i.on.complete.fire()
                    }), (function(t) {
                        var e = i.active;
                        return i.active = !1, i.on.error.fire(t), i.parent ? i.parent._reject(t) : e && i.idbtrans && i.idbtrans.abort(), ce(t)
                    }))
                }

                function Ft(t, e, n) {
                    this._ctx = {
                        table: t,
                        index: ":id" === e ? null : e,
                        or: n
                    }
                }

                function gt(t, e) {
                    var n = null,
                        r = null;
                    if (e) try {
                        n = e()
                    } catch (t) {
                        r = t
                    }
                    var i = t._ctx,
                        f = i.table;
                    this._ctx = {
                        table: f,
                        index: i.index,
                        isPrimKey: !i.index || f.schema.primKey.keyPath && i.index === f.schema.primKey.name,
                        range: n,
                        keysOnly: !1,
                        dir: "next",
                        unique: "",
                        algorithm: null,
                        filter: null,
                        replayFilter: null,
                        justLimit: !0,
                        isMatch: null,
                        offset: 0,
                        limit: 1 / 0,
                        error: r,
                        or: i.or,
                        valueMapper: f.hook.reading.fire
                    }
                }

                function wt(t, e) {
                    return !(t.filter || t.algorithm || t.or) && (e ? t.justLimit : !t.replayFilter)
                }

                function _t(t, e) {
                    return t._cfg.version - e._cfg.version
                }

                function xt(t, e, n) {
                    e.forEach((function(e) {
                        var r = n[e];
                        t.forEach((function(t) {
                            e in t || (t === mt.prototype || t instanceof mt ? l(t, e, {
                                get: function() {
                                    return this.table(e)
                                }
                            }) : t[e] = new bt(e, r))
                        }))
                    }))
                }

                function Bt(t, e, n, r, i, f) {
                    var o = Gt(f ? function(t, e, r) {
                        return n(f(t), e, r)
                    } : n, i);
                    t.onerror || (t.onerror = xe(i)), t.onsuccess = w(e ? function() {
                        var n = t.result;
                        if (n) {
                            var f = function() {
                                n.continue()
                            };
                            e(n, (function(t) {
                                f = t
                            }), r, i) && o(n.value, n, (function(t) {
                                f = t
                            })), f()
                        } else r()
                    } : function() {
                        var e = t.result;
                        if (e) {
                            var n = function() {
                                e.continue()
                            };
                            o(e.value, e, (function(t) {
                                n = t
                            })), n()
                        } else r()
                    }, i)
                }

                function kt(t, e) {
                    return C.cmp(t, e)
                }

                function It(t, e) {
                    return kt(t, e) > 0 ? t : e
                }

                function Ct(t, e) {
                    return C.cmp(t, e)
                }

                function At(t, e) {
                    return C.cmp(e, t)
                }

                function qt(t, e) {
                    return t < e ? -1 : t === e ? 0 : 1
                }

                function Ot(t, e) {
                    return t > e ? -1 : t === e ? 0 : 1
                }

                function St(t, e) {
                    return t ? e ? function() {
                        return t.apply(this, arguments) && e.apply(this, arguments)
                    } : t : e
                }

                function Pt(t, e) {
                    for (var n = e.db.objectStoreNames, r = 0; r < n.length; ++r) {
                        var i = n[r],
                            o = e.objectStore(i);
                        a = "getAll" in o;
                        for (var u = 0; u < o.indexNames.length; ++u) {
                            var c = o.indexNames[u],
                                s = o.index(c).keyPath,
                                h = "string" == typeof s ? s : "[" + v(s).join("+") + "]";
                            if (t[i]) {
                                var l = t[i].idxByName[h];
                                l && (l.name = c)
                            }
                        }
                    }
                    /Safari/.test(navigator.userAgent) && !/(Chrome\/|Edge\/)/.test(navigator.userAgent) && f.WorkerGlobalScope && f instanceof f.WorkerGlobalScope && [].concat(navigator.userAgent.match(/Safari\/(\d*)/))[1] < 604 && (a = !1)
                }

                function jt(t) {
                    X.on("blocked").fire(t), be.filter((function(t) {
                        return t.name === X.name && t !== X && !t._vcFired
                    })).map((function(e) {
                        return e.on("versionchange").fire(t)
                    }))
                }
                this.version = function(t) {
                    if (M || U) throw new Z.Schema("Cannot add version when database is open");
                    this.verno = Math.max(this.verno, t);
                    var e = z.filter((function(e) {
                        return e._cfg.version === t
                    }))[0];
                    return e || (e = new at(t), z.push(e), z.sort(_t), ft = !1, e)
                }, o(at.prototype, {
                    stores: function(t) {
                        this._cfg.storesSource = this._cfg.storesSource ? o(this._cfg.storesSource, t) : t;
                        var e = {};
                        z.forEach((function(t) {
                            o(e, t._cfg.storesSource)
                        }));
                        var n = this._cfg.dbschema = {};
                        return this._parseStoresSpec(e, n), O = X._dbSchema = n, [N, X, mt.prototype].forEach((function(t) {
                            for (var e in t) t[e] instanceof bt && delete t[e]
                        })), xt([N, X, mt.prototype, this._cfg.tables], r(n), n), K = r(n), this
                    },
                    upgrade: function(t) {
                        return this._cfg.contentUpgrade = t, this
                    },
                    _parseStoresSpec: function(t, e) {
                        r(t).forEach((function(n) {
                            if (null !== t[n]) {
                                var r = {},
                                    f = function(t) {
                                        var e = [];
                                        return t.split(",").forEach((function(t) {
                                            var n = (t = t.trim()).replace(/([&*]|\+\+)/g, ""),
                                                r = /^\[/.test(n) ? n.match(/^\[(.*)\]$/)[1].split("+") : n;
                                            e.push(new Ce(n, r || null, /\&/.test(t), /\*/.test(t), /\+\+/.test(t), i(r), /\./.test(t)))
                                        })), e
                                    }(t[n]),
                                    o = f.shift();
                                if (o.multi) throw new Z.Schema("Primary key cannot be multi-valued");
                                o.keyPath && B(r, o.keyPath, o.auto ? 0 : o.keyPath), f.forEach((function(t) {
                                    if (t.auto) throw new Z.Schema("Only primary key can be marked as autoIncrement (++)");
                                    if (!t.keyPath) throw new Z.Schema("Index must have a name and cannot be an empty string");
                                    B(r, t.keyPath, t.compound ? t.keyPath.map((function() {
                                        return ""
                                    })) : "")
                                })), e[n] = new Ae(n, o, f, r)
                            }
                        }))
                    }
                }), this._allTables = N, this._createTransaction = function(t, e, n, r) {
                    return new mt(t, e, n, r)
                }, this._whenReady = function(t) {
                    return Q || Et.letThrough ? t() : new Dt((function(t, e) {
                        if (!U) {
                            if (!E) return void e(new Z.DatabaseClosed);
                            X.open().catch(J)
                        }
                        Y.then(t, e)
                    })).then(t)
                }, this.verno = 0, this.open = function() {
                    if (U || M) return Y.then((function() {
                        return L ? ce(L) : X
                    }));
                    j && (et._stackHolder = T()), U = !0, L = null, Q = !1;
                    var e = n,
                        i = null;
                    return Dt.race([et, new Dt((function(e, n) {
                        if (!C) throw new Z.MissingAPI("indexedDB API not found. If using IE10+, make sure to run your code on a server URL (not locally). If using old Safari versions, make sure to include indexedDB polyfill.");
                        var f = ft ? C.open(t) : C.open(t, Math.round(10 * X.verno));
                        if (!f) throw new Z.MissingAPI("IndexedDB API not available");
                        f.onerror = xe(n), f.onblocked = Gt(jt), f.onupgradeneeded = Gt((function(e) {
                            if (i = f.transaction, ft && !X._allowEmptyDB) {
                                f.onerror = Ee, i.abort(), f.result.close();
                                var r = C.deleteDatabase(t);
                                r.onsuccess = r.onerror = Gt((function() {
                                    n(new Z.NoSuchDatabase("Database " + t + " doesnt exist"))
                                }))
                            } else {
                                i.onerror = xe(n), ct((e.oldVersion > Math.pow(2, 62) ? 0 : e.oldVersion) / 10, i, n)
                            }
                        }), n), f.onsuccess = Gt((function() {
                            if (i = null, M = f.result, be.push(X), ft) ! function() {
                                if (X.verno = M.version / 10, X._dbSchema = O = {}, 0 === (K = v(M.objectStoreNames, 0)).length) return;
                                var t = M.transaction(De(K), "readonly");
                                K.forEach((function(e) {
                                    for (var n = t.objectStore(e), r = n.keyPath, i = r && "string" == typeof r && -1 !== r.indexOf("."), f = new Ce(r, r || "", !1, !1, !!n.autoIncrement, r && "string" != typeof r, i), o = [], u = 0; u < n.indexNames.length; ++u) {
                                        var a = n.index(n.indexNames[u]);
                                        i = (r = a.keyPath) && "string" == typeof r && -1 !== r.indexOf(".");
                                        var c = new Ce(a.name, r, !!a.unique, !!a.multiEntry, !1, r && "string" != typeof r, i);
                                        o.push(c)
                                    }
                                    O[e] = new Ae(e, f, o, {})
                                })), xt([N], r(O), O)
                            }();
                            else if (M.objectStoreNames.length > 0) try {
                                Pt(O, M.transaction(De(M.objectStoreNames), "readonly"))
                            } catch (t) {}
                            M.onversionchange = Gt((function(t) {
                                X._vcFired = !0, X.on("versionchange").fire(t)
                            })), ut || "__dbnames" === t || he.dbnames.put({
                                name: t
                            }).catch(J), e()
                        }), n)
                    }))]).then((function() {
                        return G = [], Dt.resolve(ge.vip(X.on.ready.fire)).then((function t() {
                            if (G.length > 0) {
                                var e = G.reduce(ot, J);
                                return G = [], Dt.resolve(ge.vip(e)).then(t)
                            }
                        }))
                    })).finally((function() {
                        G = null
                    })).then((function() {
                        return U = !1, X
                    })).catch((function(t) {
                        try {
                            i && i.abort()
                        } catch (t) {}
                        return U = !1, X.close(), ce(L = t)
                    })).finally((function() {
                        Q = !0, e()
                    }))
                }, this.close = function() {
                    var t = be.indexOf(X);
                    if (t >= 0 && be.splice(t, 1), M) {
                        try {
                            M.close()
                        } catch (t) {}
                        M = null
                    }
                    E = !1, L = new Z.DatabaseClosed, U && u(L), Y = new Dt((function(t) {
                        n = t
                    })), et = new Dt((function(t, e) {
                        u = e
                    }))
                }, this.delete = function() {
                    var e = arguments.length > 0;
                    return new Dt((function(n, r) {
                        if (e) throw new Z.InvalidArgument("Arguments not allowed in db.delete()");

                        function i() {
                            X.close();
                            var e = C.deleteDatabase(t);
                            e.onsuccess = Gt((function() {
                                ut || he.dbnames.delete(t).catch(J), n()
                            })), e.onerror = xe(r), e.onblocked = jt
                        }
                        U ? Y.then(i) : i()
                    }))
                }, this.backendDB = function() {
                    return M
                }, this.isOpen = function() {
                    return null !== M
                }, this.hasBeenClosed = function() {
                    return L && L instanceof Z.DatabaseClosed
                }, this.hasFailed = function() {
                    return null !== L
                }, this.dynamicallyOpened = function() {
                    return ft
                }, this.name = t, s(this, {
                    tables: {
                        get: function() {
                            return r(N).map((function(t) {
                                return N[t]
                            }))
                        }
                    }
                }), this.on = se(this, "populate", "blocked", "versionchange", {
                    ready: [ot, J]
                }), this.on.ready.subscribe = y(this.on.ready.subscribe, (function(t) {
                    return function(e, n) {
                        ge.vip((function() {
                            Q ? (L || Dt.resolve().then(e), n && t(e)) : G ? (G.push(e), n && t(e)) : (t(e), n || t((function t() {
                                X.on.ready.unsubscribe(e), X.on.ready.unsubscribe(t)
                            })))
                        }))
                    }
                })), this.transaction = function() {
                    var t = lt.apply(this, arguments);
                    return this._transaction.apply(this, t)
                }, this._transaction = function(t, e, n) {
                    var r = Et.trans;
                    r && r.db === X && -1 === t.indexOf("!") || (r = null);
                    var i = -1 !== t.indexOf("?");
                    t = t.replace("!", "").replace("?", "");
                    try {
                        var f = e.map((function(t) {
                            var e = t instanceof bt ? t.name : t;
                            if ("string" != typeof e) throw new TypeError("Invalid table argument to Dexie.transaction(). Only Table or String are allowed");
                            return e
                        }));
                        if ("r" == t || "readonly" == t) t = "readonly";
                        else {
                            if ("rw" != t && t != W) throw new Z.InvalidArgument("Invalid transaction mode: " + t);
                            t = W
                        }
                        if (r) {
                            if ("readonly" === r.mode && t === W) {
                                if (!i) throw new Z.SubTransaction("Cannot enter a sub-transaction with READWRITE mode when parent transaction is READONLY");
                                r = null
                            }
                            r && f.forEach((function(t) {
                                if (r && -1 === r.storeNames.indexOf(t)) {
                                    if (!i) throw new Z.SubTransaction("Table " + t + " not included in parent transaction.");
                                    r = null
                                }
                            })), i && r && !r.active && (r = null)
                        }
                    } catch (t) {
                        return r ? r._promise(null, (function(e, n) {
                            n(t)
                        })) : ce(t)
                    }
                    return r ? r._promise(t, o, "lock") : Et.trans ? fe(Et.transless, (function() {
                        return X._whenReady(o)
                    })) : X._whenReady(o);

                    function o() {
                        return Dt.resolve().then((function() {
                            var e, i = Et.transless || Et,
                                o = X._createTransaction(t, f, O, r),
                                u = {
                                    trans: o,
                                    transless: i
                                };
                            r ? o.idbtrans = r.idbtrans : o.create(), n.constructor === pt && Jt();
                            var a = Dt.follow((function() {
                                if (e = n.call(o, o))
                                    if (e.constructor === dt) {
                                        var t = $t.bind(null, null);
                                        e.then(t, t)
                                    } else "function" == typeof e.next && "function" == typeof e.throw && (e = Ie(e))
                            }), u);
                            return (e && "function" == typeof e.then ? Dt.resolve(e).then((function(t) {
                                return o.active ? t : ce(new Z.PrematureCommit("Transaction committed too early. See http://bit.ly/2kdckMn"))
                            })) : a.then((function() {
                                return e
                            }))).then((function(t) {
                                return r && o._resolve(), o._completion.then((function() {
                                    return t
                                }))
                            })).catch((function(t) {
                                return o._reject(t), ce(t)
                            }))
                        }))
                    }
                }, this.table = function(t) {
                    if (!c(N, t)) throw new Z.InvalidTable("Table " + t + " does not exist");
                    return N[t]
                }, s(bt.prototype, {
                    _trans: function(t, e, n) {
                        var r = this._tx || Et.trans;
                        return r && r.db === X ? r === Et.trans ? r._promise(t, e, n) : Yt((function() {
                            return r._promise(t, e, n)
                        }), {
                            trans: r,
                            transless: Et.transless || Et
                        }) : function t(e, n, r) {
                            if (Q || Et.letThrough) {
                                var i = X._createTransaction(e, n, O);
                                try {
                                    i.create()
                                } catch (t) {
                                    return ce(t)
                                }
                                return i._promise(e, (function(t, e) {
                                    return Yt((function() {
                                        return Et.trans = i, r(t, e, i)
                                    }))
                                })).then((function(t) {
                                    return i._completion.then((function() {
                                        return t
                                    }))
                                }))
                            }
                            if (!U) {
                                if (!E) return ce(new Z.DatabaseClosed);
                                X.open().catch(J)
                            }
                            return Y.then((function() {
                                return t(e, n, r)
                            }))
                        }(t, [this.name], e)
                    },
                    _idbstore: function(t, e, n) {
                        var r = this.name;
                        return this._trans(t, (function(t, n, i) {
                            if (-1 === i.storeNames.indexOf(r)) throw new Z.NotFound("Table" + r + " not part of transaction");
                            return e(t, n, i.idbtrans.objectStore(r), i)
                        }), n)
                    },
                    get: function(t, e) {
                        if (t && t.constructor === Object) return this.where(t).first(e);
                        var n = this;
                        return this._idbstore("readonly", (function(e, r, i) {
                            var f = i.get(t);
                            f.onerror = xe(r), f.onsuccess = Gt((function() {
                                e(n.hook.reading.fire(f.result))
                            }), r)
                        })).then(e)
                    },
                    where: function(t) {
                        if ("string" == typeof t) return new Ft(this, t);
                        if (i(t)) return new Ft(this, "[" + t.join("+") + "]");
                        var e = r(t);
                        if (1 === e.length) return this.where(e[0]).equals(t[e[0]]);
                        var n = this.schema.indexes.concat(this.schema.primKey).filter((function(t) {
                            return t.compound && e.every((function(e) {
                                return t.keyPath.indexOf(e) >= 0
                            })) && t.keyPath.every((function(t) {
                                return e.indexOf(t) >= 0
                            }))
                        }))[0];
                        if (n && de !== le) return this.where(n.name).equals(n.keyPath.map((function(e) {
                            return t[e]
                        })));
                        n || console.warn("The query " + JSON.stringify(t) + " on " + this.name + " would benefit of a compound index [" + e.join("+") + "]");
                        var f = this.schema.idxByName,
                            o = e.reduce((function(e, n) {
                                return [e[0] || f[n], e[0] || !f[n] ? St(e[1], (function(e) {
                                    return "" + x(e, n) == "" + t[n]
                                })) : e[1]]
                            }), [null, null]),
                            u = o[0];
                        return u ? this.where(u.name).equals(t[u.keyPath]).filter(o[1]) : n ? this.filter(o[1]) : this.where(e).equals("")
                    },
                    count: function(t) {
                        return this.toCollection().count(t)
                    },
                    offset: function(t) {
                        return this.toCollection().offset(t)
                    },
                    limit: function(t) {
                        return this.toCollection().limit(t)
                    },
                    reverse: function() {
                        return this.toCollection().reverse()
                    },
                    filter: function(t) {
                        return this.toCollection().and(t)
                    },
                    each: function(t) {
                        return this.toCollection().each(t)
                    },
                    toArray: function(t) {
                        return this.toCollection().toArray(t)
                    },
                    orderBy: function(t) {
                        return new gt(new Ft(this, i(t) ? "[" + t.join("+") + "]" : t))
                    },
                    toCollection: function() {
                        return new gt(new Ft(this))
                    },
                    mapToClass: function(t, e) {
                        this.schema.mappedClass = t;
                        var n = Object.create(t.prototype);
                        e && we(n, e), this.schema.instanceTemplate = n;
                        var r = function(e) {
                            if (!e) return e;
                            var n = Object.create(t.prototype);
                            for (var r in e)
                                if (c(e, r)) try {
                                    n[r] = e[r]
                                } catch (t) {}
                            return n
                        };
                        return this.schema.readHook && this.hook.reading.unsubscribe(this.schema.readHook), this.schema.readHook = r, this.hook("reading", r), t
                    },
                    defineClass: function(t) {
                        return this.mapToClass(ge.defineClass(t), t)
                    },
                    bulkDelete: function(t) {
                        return this.hook.deleting.fire === J ? this._idbstore(W, (function(e, n, r, i) {
                            e(yt(r, i, t, !1, J))
                        })) : this.where(":id").anyOf(t).delete().then((function() {}))
                    },
                    bulkPut: function(t, e) {
                        var n = this;
                        return this._idbstore(W, (function(r, i, f) {
                            if (!f.keyPath && !n.schema.primKey.auto && !e) throw new Z.InvalidArgument("bulkPut() with non-inbound keys requires keys array in second argument");
                            if (f.keyPath && e) throw new Z.InvalidArgument("bulkPut(): keys argument invalid on tables with inbound keys");
                            if (e && e.length !== t.length) throw new Z.InvalidArgument("Arguments objects and keys must have the same length");
                            if (0 === t.length) return r();
                            var o, u, a = function(t) {
                                    0 === c.length ? r(t) : i(new V(n.name + ".bulkPut(): " + c.length + " of " + s + " operations failed", c))
                                },
                                c = [],
                                s = t.length,
                                h = n;
                            if (n.hook.creating.fire === J && n.hook.updating.fire === J) {
                                u = vt(c);
                                for (var l = 0, d = t.length; l < d; ++l)(o = e ? f.put(t[l], e[l]) : f.put(t[l])).onerror = u;
                                o.onerror = vt(c, a), o.onsuccess = Be(a)
                            } else {
                                var p = e || f.keyPath && t.map((function(t) {
                                        return x(t, f.keyPath)
                                    })),
                                    b = p && g(p, (function(e, n) {
                                        return null != e && [e, t[n]]
                                    }));
                                (p ? h.where(":id").anyOf(p.filter((function(t) {
                                    return null != t
                                }))).modify((function() {
                                    this.value = b[this.primKey], b[this.primKey] = null
                                })).catch(H, (function(t) {
                                    c = t.failures
                                })).then((function() {
                                    for (var n = [], r = e && [], i = p.length - 1; i >= 0; --i) {
                                        var f = p[i];
                                        (null == f || b[f]) && (n.push(t[i]), e && r.push(f), null != f && (b[f] = null))
                                    }
                                    return n.reverse(), e && r.reverse(), h.bulkAdd(n, r)
                                })).then((function(t) {
                                    var e = p[p.length - 1];
                                    return null != e ? e : t
                                })) : h.bulkAdd(t)).then(a).catch(V, (function(t) {
                                    c = c.concat(t.failures), a()
                                })).catch(i)
                            }
                        }), "locked")
                    },
                    bulkAdd: function(t, e) {
                        var n = this,
                            r = this.hook.creating.fire;
                        return this._idbstore(W, (function(i, f, o, u) {
                            if (!o.keyPath && !n.schema.primKey.auto && !e) throw new Z.InvalidArgument("bulkAdd() with non-inbound keys requires keys array in second argument");
                            if (o.keyPath && e) throw new Z.InvalidArgument("bulkAdd(): keys argument invalid on tables with inbound keys");
                            if (e && e.length !== t.length) throw new Z.InvalidArgument("Arguments objects and keys must have the same length");
                            if (0 === t.length) return i();

                            function a(t) {
                                0 === l.length ? i(t) : f(new V(n.name + ".bulkAdd(): " + l.length + " of " + d + " operations failed", l))
                            }
                            var c, s, h, l = [],
                                d = t.length;
                            if (r !== J) {
                                var p, b = o.keyPath;
                                s = vt(l, null, !0), h = _e(null), _((function() {
                                    for (var n = 0, i = t.length; n < i; ++n) {
                                        p = {
                                            onerror: null,
                                            onsuccess: null
                                        };
                                        var f = e && e[n],
                                            a = t[n],
                                            l = e ? f : b ? x(a, b) : void 0,
                                            d = r.call(p, l, a, u);
                                        null == l && null != d && (b ? B(a = A(a), b, d) : f = d), (c = null != f ? o.add(a, f) : o.add(a))._hookCtx = p, n < i - 1 && (c.onerror = s, p.onsuccess && (c.onsuccess = h))
                                    }
                                }), (function(t) {
                                    throw p.onerror && p.onerror(t), t
                                })), c.onerror = vt(l, a, !0), c.onsuccess = _e(a)
                            } else {
                                s = vt(l);
                                for (var v = 0, y = t.length; v < y; ++v)(c = e ? o.add(t[v], e[v]) : o.add(t[v])).onerror = s;
                                c.onerror = vt(l, a), c.onsuccess = Be(a)
                            }
                        }))
                    },
                    add: function(t, e) {
                        var n = this.hook.creating.fire;
                        return this._idbstore(W, (function(r, i, f, o) {
                            var u = {
                                onsuccess: null,
                                onerror: null
                            };
                            if (n !== J) {
                                var a = null != e ? e : f.keyPath ? x(t, f.keyPath) : void 0,
                                    c = n.call(u, a, t, o);
                                null == a && null != c && (f.keyPath ? B(t, f.keyPath, c) : e = c)
                            }
                            try {
                                var s = null != e ? f.add(t, e) : f.add(t);
                                s._hookCtx = u, s.onerror = ke(i), s.onsuccess = _e((function(e) {
                                    var n = f.keyPath;
                                    n && B(t, n, e), r(e)
                                }))
                            } catch (t) {
                                throw u.onerror && u.onerror(t), t
                            }
                        }))
                    },
                    put: function(t, e) {
                        var n = this,
                            r = this.hook.creating.fire,
                            i = this.hook.updating.fire;
                        if (r !== J || i !== J) {
                            var f = this.schema.primKey.keyPath,
                                o = void 0 !== e ? e : f && x(t, f);
                            return null == o ? this.add(t) : (t = A(t), this._trans(W, (function() {
                                return n.where(":id").equals(o).modify((function() {
                                    this.value = t
                                })).then((function(r) {
                                    return 0 === r ? n.add(t, e) : o
                                }))
                            }), "locked"))
                        }
                        return this._idbstore(W, (function(n, r, i) {
                            var f = void 0 !== e ? i.put(t, e) : i.put(t);
                            f.onerror = xe(r), f.onsuccess = Gt((function(e) {
                                var r = i.keyPath;
                                r && B(t, r, e.target.result), n(f.result)
                            }))
                        }))
                    },
                    delete: function(t) {
                        return this.hook.deleting.subscribers.length ? this.where(":id").equals(t).delete() : this._idbstore(W, (function(e, n, r) {
                            var i = r.delete(t);
                            i.onerror = xe(n), i.onsuccess = Gt((function() {
                                e(i.result)
                            }))
                        }))
                    },
                    clear: function() {
                        return this.hook.deleting.subscribers.length ? this.toCollection().delete() : this._idbstore(W, (function(t, e, n) {
                            var r = n.clear();
                            r.onerror = xe(e), r.onsuccess = Gt((function() {
                                t(r.result)
                            }))
                        }))
                    },
                    update: function(t, e) {
                        if ("object" != typeof e || i(e)) throw new Z.InvalidArgument("Modifications must be an object.");
                        if ("object" != typeof t || i(t)) return this.where(":id").equals(t).modify(e);
                        r(e).forEach((function(n) {
                            B(t, n, e[n])
                        }));
                        var n = x(t, this.schema.primKey.keyPath);
                        return void 0 === n ? ce(new Z.InvalidArgument("Given object does not contain its primary key")) : this.where(":id").equals(n).modify(e)
                    }
                }), s(mt.prototype, {
                    _lock: function() {
                        return m(!Et.global), ++this._reculock, 1 !== this._reculock || Et.global || (Et.lockOwnerFor = this), this
                    },
                    _unlock: function() {
                        if (m(!Et.global), 0 == --this._reculock)
                            for (Et.global || (Et.lockOwnerFor = null); this._blockedFuncs.length > 0 && !this._locked();) {
                                var t = this._blockedFuncs.shift();
                                try {
                                    fe(t[1], t[0])
                                } catch (t) {}
                            }
                        return this
                    },
                    _locked: function() {
                        return this._reculock && Et.lockOwnerFor !== this
                    },
                    create: function(t) {
                        var e = this;
                        if (!this.mode) return this;
                        if (m(!this.idbtrans), !t && !M) switch (L && L.name) {
                            case "DatabaseClosedError":
                                throw new Z.DatabaseClosed(L);
                            case "MissingAPIError":
                                throw new Z.MissingAPI(L.message, L);
                            default:
                                throw new Z.OpenFailed(L)
                        }
                        if (!this.active) throw new Z.TransactionInactive;
                        return m(null === this._completion._state), (t = this.idbtrans = t || M.transaction(De(this.storeNames), this.mode)).onerror = Gt((function(n) {
                            Ee(n), e._reject(t.error)
                        })), t.onabort = Gt((function(n) {
                            Ee(n), e.active && e._reject(new Z.Abort(t.error)), e.active = !1, e.on("abort").fire(n)
                        })), t.oncomplete = Gt((function() {
                            e.active = !1, e._resolve()
                        })), this
                    },
                    _promise: function(t, e, n) {
                        var r = this;
                        if (t === W && this.mode !== W) return ce(new Z.ReadOnly("Transaction is readonly"));
                        if (!this.active) return ce(new Z.TransactionInactive);
                        if (this._locked()) return new Dt((function(i, f) {
                            r._blockedFuncs.push([function() {
                                r._promise(t, e, n).then(i, f)
                            }, Et])
                        }));
                        if (n) return Yt((function() {
                            var t = new Dt((function(t, n) {
                                r._lock();
                                var i = e(t, n, r);
                                i && i.then && i.then(t, n)
                            }));
                            return t.finally((function() {
                                return r._unlock()
                            })), t._lib = !0, t
                        }));
                        var i = new Dt((function(t, n) {
                            var i = e(t, n, r);
                            i && i.then && i.then(t, n)
                        }));
                        return i._lib = !0, i
                    },
                    _root: function() {
                        return this.parent ? this.parent._root() : this
                    },
                    waitFor: function(t) {
                        var e = this._root();
                        if (t = Dt.resolve(t), e._waitingFor) e._waitingFor = e._waitingFor.then((function() {
                            return t
                        }));
                        else {
                            e._waitingFor = t, e._waitingQueue = [];
                            var n = e.idbtrans.objectStore(e.storeNames[0]);
                            ! function t() {
                                for (++e._spinCount; e._waitingQueue.length;) e._waitingQueue.shift()();
                                e._waitingFor && (n.get(-1 / 0).onsuccess = t)
                            }()
                        }
                        var r = e._waitingFor;
                        return new Dt((function(n, i) {
                            t.then((function(t) {
                                return e._waitingQueue.push(Gt(n.bind(null, t)))
                            }), (function(t) {
                                return e._waitingQueue.push(Gt(i.bind(null, t)))
                            })).finally((function() {
                                e._waitingFor === r && (e._waitingFor = null)
                            }))
                        }))
                    },
                    abort: function() {
                        this.active && this._reject(new Z.Abort), this.active = !1
                    },
                    tables: {
                        get: (h = "Transaction.tables", d = function() {
                            return N
                        }, function() {
                            return console.warn(h + " is deprecated. See https://github.com/dfahlander/Dexie.js/wiki/Deprecations. " + R(T(), 1)), d.apply(this, arguments)
                        })
                    },
                    table: function(t) {
                        return new bt(t, X.table(t).schema, this)
                    }
                }), s(Ft.prototype, (function() {
                    function t(t, e, n) {
                        var r = t instanceof Ft ? new gt(t) : t;
                        return r._ctx.error = n ? new n(e) : new TypeError(e), r
                    }

                    function e(t) {
                        return new gt(t, (function() {
                            return q.only("")
                        })).limit(0)
                    }

                    function n(t, e, n, r, i, f) {
                        for (var o = Math.min(t.length, r.length), u = -1, a = 0; a < o; ++a) {
                            var c = e[a];
                            if (c !== r[a]) return i(t[a], n[a]) < 0 ? t.substr(0, a) + n[a] + n.substr(a + 1) : i(t[a], r[a]) < 0 ? t.substr(0, a) + r[a] + n.substr(a + 1) : u >= 0 ? t.substr(0, u) + e[u] + n.substr(u + 1) : null;
                            i(t[a], c) < 0 && (u = a)
                        }
                        return o < r.length && "next" === f ? t + n.substr(t.length) : o < t.length && "prev" === f ? t.substr(0, n.length) : u < 0 ? null : t.substr(0, u) + r[u] + n.substr(u + 1)
                    }

                    function r(e, r, i, f) {
                        var o, u, a, c, s, h, l, d = i.length;
                        if (!i.every((function(t) {
                                return "string" == typeof t
                            }))) return t(e, "String expected.");

                        function p(t) {
                            o = function(t) {
                                return "next" === t ? function(t) {
                                    return t.toUpperCase()
                                } : function(t) {
                                    return t.toLowerCase()
                                }
                            }(t), u = function(t) {
                                return "next" === t ? function(t) {
                                    return t.toLowerCase()
                                } : function(t) {
                                    return t.toUpperCase()
                                }
                            }(t), a = "next" === t ? qt : Ot;
                            var e = i.map((function(t) {
                                return {
                                    lower: u(t),
                                    upper: o(t)
                                }
                            })).sort((function(t, e) {
                                return a(t.lower, e.lower)
                            }));
                            c = e.map((function(t) {
                                return t.upper
                            })), s = e.map((function(t) {
                                return t.lower
                            })), h = t, l = "next" === t ? "" : f
                        }
                        p("next");
                        var b = new gt(e, (function() {
                            return q.bound(c[0], s[d - 1] + f)
                        }));
                        b._ondirectionchange = function(t) {
                            p(t)
                        };
                        var v = 0;
                        return b._addAlgorithm((function(t, e, i) {
                            var f = t.key;
                            if ("string" != typeof f) return !1;
                            var o = u(f);
                            if (r(o, s, v)) return !0;
                            for (var p = null, b = v; b < d; ++b) {
                                var y = n(f, o, c[b], s[b], a, h);
                                null === y && null === p ? v = b + 1 : (null === p || a(p, y) > 0) && (p = y)
                            }
                            return e(null !== p ? function() {
                                t.continue(p + l)
                            } : i), !1
                        })), b
                    }
                    return {
                        between: function(n, r, i, f) {
                            i = !1 !== i, f = !0 === f;
                            try {
                                return kt(n, r) > 0 || 0 === kt(n, r) && (i || f) && (!i || !f) ? e(this) : new gt(this, (function() {
                                    return q.bound(n, r, !i, !f)
                                }))
                            } catch (e) {
                                return t(this, pe)
                            }
                        },
                        equals: function(t) {
                            return new gt(this, (function() {
                                return q.only(t)
                            }))
                        },
                        above: function(t) {
                            return new gt(this, (function() {
                                return q.lowerBound(t, !0)
                            }))
                        },
                        aboveOrEqual: function(t) {
                            return new gt(this, (function() {
                                return q.lowerBound(t)
                            }))
                        },
                        below: function(t) {
                            return new gt(this, (function() {
                                return q.upperBound(t, !0)
                            }))
                        },
                        belowOrEqual: function(t) {
                            return new gt(this, (function() {
                                return q.upperBound(t)
                            }))
                        },
                        startsWith: function(e) {
                            return "string" != typeof e ? t(this, "String expected.") : this.between(e, e + le, !0, !0)
                        },
                        startsWithIgnoreCase: function(t) {
                            return "" === t ? this.startsWith(t) : r(this, (function(t, e) {
                                return 0 === t.indexOf(e[0])
                            }), [t], le)
                        },
                        equalsIgnoreCase: function(t) {
                            return r(this, (function(t, e) {
                                return t === e[0]
                            }), [t], "")
                        },
                        anyOfIgnoreCase: function() {
                            var t = P.apply(S, arguments);
                            return 0 === t.length ? e(this) : r(this, (function(t, e) {
                                return -1 !== e.indexOf(t)
                            }), t, "")
                        },
                        startsWithAnyOfIgnoreCase: function() {
                            var t = P.apply(S, arguments);
                            return 0 === t.length ? e(this) : r(this, (function(t, e) {
                                return e.some((function(e) {
                                    return 0 === t.indexOf(e)
                                }))
                            }), t, le)
                        },
                        anyOf: function() {
                            var n = P.apply(S, arguments),
                                r = Ct;
                            try {
                                n.sort(r)
                            } catch (e) {
                                return t(this, pe)
                            }
                            if (0 === n.length) return e(this);
                            var i = new gt(this, (function() {
                                return q.bound(n[0], n[n.length - 1])
                            }));
                            i._ondirectionchange = function(t) {
                                r = "next" === t ? Ct : At, n.sort(r)
                            };
                            var f = 0;
                            return i._addAlgorithm((function(t, e, i) {
                                for (var o = t.key; r(o, n[f]) > 0;)
                                    if (++f === n.length) return e(i), !1;
                                return 0 === r(o, n[f]) || (e((function() {
                                    t.continue(n[f])
                                })), !1)
                            })), i
                        },
                        notEqual: function(t) {
                            return this.inAnyRange([
                                [-1 / 0, t],
                                [t, de]
                            ], {
                                includeLowers: !1,
                                includeUppers: !1
                            })
                        },
                        noneOf: function() {
                            var e = P.apply(S, arguments);
                            if (0 === e.length) return new gt(this);
                            try {
                                e.sort(Ct)
                            } catch (e) {
                                return t(this, pe)
                            }
                            var n = e.reduce((function(t, e) {
                                return t ? t.concat([
                                    [t[t.length - 1][1], e]
                                ]) : [
                                    [-1 / 0, e]
                                ]
                            }), null);
                            return n.push([e[e.length - 1], de]), this.inAnyRange(n, {
                                includeLowers: !1,
                                includeUppers: !1
                            })
                        },
                        inAnyRange: function(n, r) {
                            if (0 === n.length) return e(this);
                            if (!n.every((function(t) {
                                    return void 0 !== t[0] && void 0 !== t[1] && Ct(t[0], t[1]) <= 0
                                }))) return t(this, "First argument to inAnyRange() must be an Array of two-value Arrays [lower,upper] where upper must not be lower than lower", Z.InvalidArgument);
                            var i = !r || !1 !== r.includeLowers,
                                f = r && !0 === r.includeUppers;
                            var o, u = Ct;

                            function a(t, e) {
                                return u(t[0], e[0])
                            }
                            try {
                                (o = n.reduce((function(t, e) {
                                    for (var n = 0, r = t.length; n < r; ++n) {
                                        var i = t[n];
                                        if (kt(e[0], i[1]) < 0 && kt(e[1], i[0]) > 0) {
                                            i[0] = (f = i[0], o = e[0], kt(f, o) < 0 ? f : o), i[1] = It(i[1], e[1]);
                                            break
                                        }
                                    }
                                    var f, o;
                                    return n === r && t.push(e), t
                                }), [])).sort(a)
                            } catch (e) {
                                return t(this, pe)
                            }
                            var c = 0,
                                s = f ? function(t) {
                                    return Ct(t, o[c][1]) > 0
                                } : function(t) {
                                    return Ct(t, o[c][1]) >= 0
                                },
                                h = i ? function(t) {
                                    return At(t, o[c][0]) > 0
                                } : function(t) {
                                    return At(t, o[c][0]) >= 0
                                };
                            var l = s,
                                d = new gt(this, (function() {
                                    return q.bound(o[0][0], o[o.length - 1][1], !i, !f)
                                }));
                            return d._ondirectionchange = function(t) {
                                "next" === t ? (l = s, u = Ct) : (l = h, u = At), o.sort(a)
                            }, d._addAlgorithm((function(t, e, n) {
                                for (var r = t.key; l(r);)
                                    if (++c === o.length) return e(n), !1;
                                return !! function(t) {
                                    return !s(t) && !h(t)
                                }(r) || (0 === kt(r, o[c][1]) || 0 === kt(r, o[c][0]) || e((function() {
                                    u === Ct ? t.continue(o[c][0]) : t.continue(o[c][1])
                                })), !1)
                            })), d
                        },
                        startsWithAnyOf: function() {
                            var n = P.apply(S, arguments);
                            return n.every((function(t) {
                                return "string" == typeof t
                            })) ? 0 === n.length ? e(this) : this.inAnyRange(n.map((function(t) {
                                return [t, t + le]
                            }))) : t(this, "startsWithAnyOf() only works with strings")
                        }
                    }
                })), s(gt.prototype, (function() {
                    function t(t, e) {
                        t.filter = St(t.filter, e)
                    }

                    function e(t, e, n) {
                        var r = t.replayFilter;
                        t.replayFilter = r ? function() {
                            return St(r(), e())
                        } : e, t.justLimit = n && !r
                    }

                    function n(t, e) {
                        if (t.isPrimKey) return e;
                        var n = t.table.schema.idxByName[t.index];
                        if (!n) throw new Z.Schema("KeyPath " + t.index + " on object store " + e.name + " is not indexed");
                        return e.index(n.name)
                    }

                    function i(t, e) {
                        var r = n(t, e);
                        return t.keysOnly && "openKeyCursor" in r ? r.openKeyCursor(t.range || null, t.dir + t.unique) : r.openCursor(t.range || null, t.dir + t.unique)
                    }

                    function f(t, e, n, r, f) {
                        var o = t.replayFilter ? St(t.filter, t.replayFilter()) : t.filter;
                        t.or ? function() {
                            var u = {},
                                a = 0;

                            function s() {
                                2 == ++a && n()
                            }

                            function h(t, n, i) {
                                if (!o || o(n, i, s, r)) {
                                    var f = n.primaryKey,
                                        a = "" + f;
                                    "[object ArrayBuffer]" === a && (a = "" + new Uint8Array(f)), c(u, a) || (u[a] = !0, e(t, n, i))
                                }
                            }
                            t.or._iterate(h, s, r, f), Bt(i(t, f), t.algorithm, h, s, r, !t.keysOnly && t.valueMapper)
                        }() : Bt(i(t, f), St(t.algorithm, o), e, n, r, !t.keysOnly && t.valueMapper)
                    }
                    return {
                        _read: function(t, e) {
                            var n = this._ctx;
                            return n.error ? n.table._trans(null, ce.bind(null, n.error)) : n.table._idbstore("readonly", t).then(e)
                        },
                        _write: function(t) {
                            var e = this._ctx;
                            return e.error ? e.table._trans(null, ce.bind(null, e.error)) : e.table._idbstore(W, t, "locked")
                        },
                        _addAlgorithm: function(t) {
                            var e = this._ctx;
                            e.algorithm = St(e.algorithm, t)
                        },
                        _iterate: function(t, e, n, r) {
                            return f(this._ctx, t, e, n, r)
                        },
                        clone: function(t) {
                            var e = Object.create(this.constructor.prototype),
                                n = Object.create(this._ctx);
                            return t && o(n, t), e._ctx = n, e
                        },
                        raw: function() {
                            return this._ctx.valueMapper = null, this
                        },
                        each: function(t) {
                            var e = this._ctx;
                            return this._read((function(n, r, i) {
                                f(e, t, n, r, i)
                            }))
                        },
                        count: function(t) {
                            var e = this._ctx;
                            if (wt(e, !0)) return this._read((function(t, r, i) {
                                var f = n(e, i),
                                    o = e.range ? f.count(e.range) : f.count();
                                o.onerror = xe(r), o.onsuccess = function(n) {
                                    t(Math.min(n.target.result, e.limit))
                                }
                            }), t);
                            var r = 0;
                            return this._read((function(t, n, i) {
                                f(e, (function() {
                                    return ++r, !1
                                }), (function() {
                                    t(r)
                                }), n, i)
                            }), t)
                        },
                        sortBy: function(t, e) {
                            var n = t.split(".").reverse(),
                                r = n[0],
                                i = n.length - 1;

                            function f(t, e) {
                                return e ? f(t[n[e]], e - 1) : t[r]
                            }
                            var o = "next" === this._ctx.dir ? 1 : -1;

                            function u(t, e) {
                                var n = f(t, i),
                                    r = f(e, i);
                                return n < r ? -o : n > r ? o : 0
                            }
                            return this.toArray((function(t) {
                                return t.sort(u)
                            })).then(e)
                        },
                        toArray: function(t) {
                            var e = this._ctx;
                            return this._read((function(t, r, i) {
                                if (a && "next" === e.dir && wt(e, !0) && e.limit > 0) {
                                    var o = e.table.hook.reading.fire,
                                        u = n(e, i),
                                        c = e.limit < 1 / 0 ? u.getAll(e.range, e.limit) : u.getAll(e.range);
                                    c.onerror = xe(r), c.onsuccess = Be(o === $ ? t : function(e) {
                                        try {
                                            t(e.map(o))
                                        } catch (t) {
                                            r(t)
                                        }
                                    })
                                } else {
                                    var s = [];
                                    f(e, (function(t) {
                                        s.push(t)
                                    }), (function() {
                                        t(s)
                                    }), r, i)
                                }
                            }), t)
                        },
                        offset: function(t) {
                            var n = this._ctx;
                            return t <= 0 || (n.offset += t, wt(n) ? e(n, (function() {
                                var e = t;
                                return function(t, n) {
                                    return 0 === e || (1 === e ? (--e, !1) : (n((function() {
                                        t.advance(e), e = 0
                                    })), !1))
                                }
                            })) : e(n, (function() {
                                var e = t;
                                return function() {
                                    return --e < 0
                                }
                            }))), this
                        },
                        limit: function(t) {
                            return this._ctx.limit = Math.min(this._ctx.limit, t), e(this._ctx, (function() {
                                var e = t;
                                return function(t, n, r) {
                                    return --e <= 0 && n(r), e >= 0
                                }
                            }), !0), this
                        },
                        until: function(e, n) {
                            return t(this._ctx, (function(t, r, i) {
                                return !e(t.value) || (r(i), n)
                            })), this
                        },
                        first: function(t) {
                            return this.limit(1).toArray((function(t) {
                                return t[0]
                            })).then(t)
                        },
                        last: function(t) {
                            return this.reverse().first(t)
                        },
                        filter: function(e) {
                            return t(this._ctx, (function(t) {
                                    return e(t.value)
                                })),
                                function(t, e) {
                                    t.isMatch = St(t.isMatch, e)
                                }(this._ctx, e), this
                        },
                        and: function(t) {
                            return this.filter(t)
                        },
                        or: function(t) {
                            return new Ft(this._ctx.table, t, this)
                        },
                        reverse: function() {
                            return this._ctx.dir = "prev" === this._ctx.dir ? "next" : "prev", this._ondirectionchange && this._ondirectionchange(this._ctx.dir), this
                        },
                        desc: function() {
                            return this.reverse()
                        },
                        eachKey: function(t) {
                            var e = this._ctx;
                            return e.keysOnly = !e.isMatch, this.each((function(e, n) {
                                t(n.key, n)
                            }))
                        },
                        eachUniqueKey: function(t) {
                            return this._ctx.unique = "unique", this.eachKey(t)
                        },
                        eachPrimaryKey: function(t) {
                            var e = this._ctx;
                            return e.keysOnly = !e.isMatch, this.each((function(e, n) {
                                t(n.primaryKey, n)
                            }))
                        },
                        keys: function(t) {
                            var e = this._ctx;
                            e.keysOnly = !e.isMatch;
                            var n = [];
                            return this.each((function(t, e) {
                                n.push(e.key)
                            })).then((function() {
                                return n
                            })).then(t)
                        },
                        primaryKeys: function(t) {
                            var e = this._ctx;
                            if (a && "next" === e.dir && wt(e, !0) && e.limit > 0) return this._read((function(t, r, i) {
                                var f = n(e, i),
                                    o = e.limit < 1 / 0 ? f.getAllKeys(e.range, e.limit) : f.getAllKeys(e.range);
                                o.onerror = xe(r), o.onsuccess = Be(t)
                            })).then(t);
                            e.keysOnly = !e.isMatch;
                            var r = [];
                            return this.each((function(t, e) {
                                r.push(e.primaryKey)
                            })).then((function() {
                                return r
                            })).then(t)
                        },
                        uniqueKeys: function(t) {
                            return this._ctx.unique = "unique", this.keys(t)
                        },
                        firstKey: function(t) {
                            return this.limit(1).keys((function(t) {
                                return t[0]
                            })).then(t)
                        },
                        lastKey: function(t) {
                            return this.reverse().firstKey(t)
                        },
                        distinct: function() {
                            var e = this._ctx,
                                n = e.index && e.table.schema.idxByName[e.index];
                            if (!n || !n.multi) return this;
                            var r = {};
                            return t(this._ctx, (function(t) {
                                var e = t.primaryKey.toString(),
                                    n = c(r, e);
                                return r[e] = !0, !n
                            })), this
                        },
                        modify: function(t) {
                            var e = this,
                                n = this._ctx.table.hook,
                                i = n.updating.fire,
                                f = n.deleting.fire;
                            return this._write((function(n, u, a, s) {
                                var h;
                                if ("function" == typeof t) h = i === J && f === J ? t : function(e) {
                                    var n = A(e);
                                    if (!1 === t.call(this, e, this)) return !1;
                                    if (c(this, "value")) {
                                        var o = D(n, this.value),
                                            u = i.call(this, o, this.primKey, n, s);
                                        u && (e = this.value, r(u).forEach((function(t) {
                                            B(e, t, u[t])
                                        })))
                                    } else f.call(this, this.primKey, e, s)
                                };
                                else if (i === J) {
                                    var l = r(t),
                                        d = l.length;
                                    h = function(e) {
                                        for (var n = !1, r = 0; r < d; ++r) {
                                            var i = l[r],
                                                f = t[i];
                                            x(e, i) !== f && (B(e, i, f), n = !0)
                                        }
                                        return n
                                    }
                                } else {
                                    var p = t;
                                    t = k(p), h = function(e) {
                                        var n = !1,
                                            f = i.call(this, t, this.primKey, A(e), s);
                                        return f && o(t, f), r(t).forEach((function(r) {
                                            var i = t[r];
                                            x(e, r) !== i && (B(e, r, i), n = !0)
                                        })), f && (t = k(p)), n
                                    }
                                }
                                var b = 0,
                                    v = 0,
                                    y = !1,
                                    m = [],
                                    F = [],
                                    g = null;

                                function w(t) {
                                    return t && (m.push(t), F.push(g)), u(new H("Error modifying one or more objects", m, v, F))
                                }

                                function E() {
                                    y && v + m.length === b && (m.length > 0 ? w() : n(v))
                                }
                                e.clone().raw()._iterate((function(t, e) {
                                    g = e.primaryKey;
                                    var n = {
                                        primKey: e.primaryKey,
                                        value: t,
                                        onsuccess: null,
                                        onerror: null
                                    };

                                    function r(t) {
                                        return m.push(t), F.push(n.primKey), E(), !0
                                    }
                                    if (!1 !== h.call(n, t, n)) {
                                        var i = !c(n, "value");
                                        ++b, _((function() {
                                            var t = i ? e.delete() : e.update(n.value);
                                            t._hookCtx = n, t.onerror = ke(r), t.onsuccess = _e((function() {
                                                ++v, E()
                                            }))
                                        }), r)
                                    } else n.onsuccess && n.onsuccess(n.value)
                                }), (function() {
                                    y = !0, E()
                                }), w, a)
                            }))
                        },
                        delete: function() {
                            var t = this,
                                e = this._ctx,
                                n = e.range,
                                r = e.table.hook.deleting.fire,
                                i = r !== J;
                            if (!i && wt(e) && (e.isPrimKey && !me || !n)) return this._write((function(t, e, r) {
                                var i = xe(e),
                                    f = n ? r.count(n) : r.count();
                                f.onerror = i, f.onsuccess = function() {
                                    var o = f.result;
                                    _((function() {
                                        var e = n ? r.delete(n) : r.clear();
                                        e.onerror = i, e.onsuccess = function() {
                                            return t(o)
                                        }
                                    }), (function(t) {
                                        return e(t)
                                    }))
                                }
                            }));
                            var f = i ? 2e3 : 1e4;
                            return this._write((function(n, o, u, a) {
                                var c = 0,
                                    s = t.clone({
                                        keysOnly: !e.isMatch && !i
                                    }).distinct().limit(f).raw(),
                                    h = [],
                                    l = function() {
                                        return s.each(i ? function(t, e) {
                                            h.push([e.primaryKey, e.value])
                                        } : function(t, e) {
                                            h.push(e.primaryKey)
                                        }).then((function() {
                                            return i ? h.sort((function(t, e) {
                                                return Ct(t[0], e[0])
                                            })) : h.sort(Ct), yt(u, a, h, i, r)
                                        })).then((function() {
                                            var t = h.length;
                                            return c += t, h = [], t < f ? c : l()
                                        }))
                                    };
                                n(l())
                            }))
                        }
                    }
                })), o(this, {
                    Collection: gt,
                    Table: bt,
                    Transaction: mt,
                    Version: at,
                    WhereClause: Ft
                }), X.on("versionchange", (function(t) {
                    t.newVersion > 0 ? console.warn("Another connection wants to upgrade database '" + X.name + "'. Closing db now to resume the upgrade.") : console.warn("Another connection wants to delete database '" + X.name + "'. Closing db now to resume the delete request."), X.close()
                })), X.on("blocked", (function(t) {
                    !t.newVersion || t.newVersion < t.oldVersion ? console.warn("Dexie.delete('" + X.name + "') was blocked") : console.warn("Upgrade '" + X.name + "' blocked by other connection holding version " + t.oldVersion / 10)
                })), F.forEach((function(t) {
                    t(X)
                }))
            }

            function we(t, e) {
                return r(e).forEach((function(n) {
                    var r = function t(e) {
                        if ("function" == typeof e) return new e;
                        if (i(e)) return [t(e[0])];
                        if (e && "object" == typeof e) {
                            var n = {};
                            return we(n, e), n
                        }
                        return e
                    }(e[n]);
                    t[n] = r
                })), t
            }

            function _e(t) {
                return Gt((function(e) {
                    var n = e.target,
                        r = n._hookCtx,
                        i = r.value || n.result,
                        f = r && r.onsuccess;
                    f && f(i), t && t(i)
                }), t)
            }

            function xe(t) {
                return Gt((function(e) {
                    return Ee(e), t(e.target.error), !1
                }))
            }

            function Be(t) {
                return Gt((function(e) {
                    t(e.target.result)
                }))
            }

            function ke(t) {
                return Gt((function(e) {
                    var n = e.target,
                        r = n.error,
                        i = n._hookCtx,
                        f = i && i.onerror;
                    return f && f(r), Ee(e), t(r), !1
                }))
            }

            function Ee(t) {
                t.stopPropagation && t.stopPropagation(), t.preventDefault && t.preventDefault()
            }

            function Ie(t) {
                var e = function(e) {
                        return t.next(e)
                    },
                    n = f(e),
                    r = f((function(e) {
                        return t.throw(e)
                    }));

                function f(t) {
                    return function(e) {
                        var f = t(e),
                            o = f.value;
                        return f.done ? o : o && "function" == typeof o.then ? o.then(n, r) : i(o) ? Dt.all(o).then(n, r) : n(o)
                    }
                }
                return f(e)()
            }

            function Ce(t, e, n, r, i, f, o) {
                this.name = t, this.keyPath = e, this.unique = n, this.multi = r, this.auto = i, this.compound = f, this.dotted = o;
                var u = "string" == typeof e ? e : e && "[" + [].join.call(e, "+") + "]";
                this.src = (n ? "&" : "") + (r ? "*" : "") + (i ? "++" : "") + u
            }

            function Ae(t, e, n, r) {
                this.name = t, this.primKey = e || new Ce, this.indexes = n || [new Ce], this.instanceTemplate = r, this.mappedClass = null, this.idxByName = g(n, (function(t) {
                    return [t.name, t]
                }))
            }

            function De(t) {
                return 1 === t.length ? t[0] : t
            }

            function qe(t) {
                var e = t && (t.getDatabaseNames || t.webkitGetDatabaseNames);
                return e && e.bind(t)
            }
            z(j, Fe), s(ge, Y), s(ge, {
                    delete: function(t) {
                        var e = new ge(t),
                            n = e.delete();
                        return n.onblocked = function(t) {
                            return e.on("blocked", t), this
                        }, n
                    },
                    exists: function(t) {
                        return new ge(t).open().then((function(t) {
                            return t.close(), !0
                        })).catch(ge.NoSuchDatabaseError, (function() {
                            return !1
                        }))
                    },
                    getDatabaseNames: function(t) {
                        var e = qe(ge.dependencies.indexedDB);
                        return e ? new Dt((function(t, n) {
                            var r = e();
                            r.onsuccess = function(e) {
                                t(v(e.target.result, 0))
                            }, r.onerror = xe(n)
                        })).then(t) : he.dbnames.toCollection().primaryKeys(t)
                    },
                    defineClass: function() {
                        return function(t) {
                            t && o(this, t)
                        }
                    },
                    applyStructure: we,
                    ignoreTransaction: function(t) {
                        return Et.trans ? fe(Et.transless, t) : t()
                    },
                    vip: function(t) {
                        return Yt((function() {
                            return Et.letThrough = !0, t()
                        }))
                    },
                    async: function(t) {
                        return function() {
                            try {
                                var e = Ie(t.apply(this, arguments));
                                return e && "function" == typeof e.then ? e : Dt.resolve(e)
                            } catch (t) {
                                return ce(t)
                            }
                        }
                    },
                    spawn: function(t, e, n) {
                        try {
                            var r = Ie(t.apply(n, e || []));
                            return r && "function" == typeof r.then ? r : Dt.resolve(r)
                        } catch (t) {
                            return ce(t)
                        }
                    },
                    currentTransaction: {
                        get: function() {
                            return Et.trans || null
                        }
                    },
                    waitFor: function(t, e) {
                        var n = Dt.resolve("function" == typeof t ? ge.ignoreTransaction(t) : t).timeout(e || 6e4);
                        return Et.trans ? Et.trans.waitFor(n) : n
                    },
                    Promise: Dt,
                    debug: {
                        get: function() {
                            return j
                        },
                        set: function(t) {
                            z(t, "dexie" === t ? function() {
                                return !0
                            } : Fe)
                        }
                    },
                    derive: d,
                    extend: o,
                    props: s,
                    override: y,
                    Events: se,
                    getByKeyPath: x,
                    setByKeyPath: B,
                    delByKeyPath: function(t, e) {
                        "string" == typeof e ? B(t, e, void 0) : "length" in e && [].map.call(e, (function(e) {
                            B(t, e, void 0)
                        }))
                    },
                    shallowClone: k,
                    deepClone: A,
                    getObjectDiff: D,
                    asap: F,
                    maxKey: de,
                    minKey: -1 / 0,
                    addons: [],
                    connections: be,
                    MultiModifyError: Z.Modify,
                    errnames: Q,
                    IndexSpec: Ce,
                    TableSchema: Ae,
                    dependencies: function() {
                        try {
                            return {
                                indexedDB: f.indexedDB || f.mozIndexedDB || f.webkitIndexedDB || f.msIndexedDB,
                                IDBKeyRange: f.IDBKeyRange || f.webkitIDBKeyRange
                            }
                        } catch (t) {
                            return {
                                indexedDB: null,
                                IDBKeyRange: null
                            }
                        }
                    }(),
                    semVer: "{version}",
                    version: "{version}".split(".").map((function(t) {
                        return parseInt(t)
                    })).reduce((function(t, e, n) {
                        return t + e / Math.pow(10, 2 * n)
                    })),
                    default: ge,
                    Dexie: ge
                }), Dt.rejectionMapper = function(t, e) {
                    if (!t || t instanceof G || t instanceof TypeError || t instanceof SyntaxError || !t.name || !X[t.name]) return t;
                    var n = new X[t.name](e || t.message, t);
                    return "stack" in t && l(n, "stack", {
                        get: function() {
                            return this.inner.stack
                        }
                    }), n
                }, (he = new ge("__dbnames")).version(1).stores({
                    dbnames: "name"
                }),
                function() {
                    try {
                        void 0 !== typeof localStorage && void 0 !== f.document && (JSON.parse(localStorage.getItem("Dexie.DatabaseNames") || "[]").forEach((function(t) {
                            return he.dbnames.put({
                                name: t
                            }).catch(J)
                        })), localStorage.removeItem("Dexie.DatabaseNames"))
                    } catch (t) {}
                }(), e.default = ge
        },
        280: function(t, e, n) {
            var Point = n(1997),
                r = n(1998),
                i = n(4075);
            t.exports = {
                Curve: r,
                Point: Point,
                getCurveByName: i
            }
        },
        2872: function(t, e) {
            t.exports = !1
        },
        3022: function(t, e, n) {
            var r = n(24),
                BigInteger = n(491).BigInteger,
                i = (n(601).ECPointFp, n(77).Buffer);

            function f(t, e) {
                return t.length >= e ? t : f("0" + t, e)
            }
            e.ECCurves = n(3023), e.ECKey = function(t, e, n) {
                var o, u = t(),
                    a = u.getN(),
                    c = Math.floor(a.bitLength() / 8);
                if (e)
                    if (n) {
                        t = u.getCurve();
                        this.P = t.decodePointHex(e.toString("hex"))
                    } else {
                        if (e.length != c) return !1;
                        o = new BigInteger(e.toString("hex"), 16)
                    }
                else {
                    var s = a.subtract(BigInteger.ONE),
                        h = new BigInteger(r.randomBytes(a.bitLength()));
                    o = h.mod(s).add(BigInteger.ONE), this.P = u.getG().multiply(o)
                }
                this.P && (this.PublicKey = i.from(u.getCurve().encodeCompressedPointHex(this.P), "hex")), o && (this.PrivateKey = i.from(f(o.toString(16), 2 * c), "hex"), this.deriveSharedSecret = function(t) {
                    if (!t || !t.P) return !1;
                    var e = t.P.multiply(o);
                    return i.from(f(e.getX().toBigInteger().toString(16), 2 * c), "hex")
                })
            }
        },
        3023: function(t, e, n) {
            var BigInteger = n(491).BigInteger,
                r = n(601).ECCurveFp;

            function i(t, e, n, r) {
                this.curve = t, this.g = e, this.n = n, this.h = r
            }

            function f(t) {
                return new BigInteger(t, 16)
            }

            function o() {
                var t = f("FFFFFFFDFFFFFFFFFFFFFFFFFFFFFFFF"),
                    e = f("FFFFFFFDFFFFFFFFFFFFFFFFFFFFFFFC"),
                    n = f("E87579C11079F43DD824993C2CEE5ED3"),
                    o = f("FFFFFFFE0000000075A30D1B9038A115"),
                    u = BigInteger.ONE,
                    a = new r(t, e, n),
                    c = a.decodePointHex("04161FF7528B899B2D0C28607CA52C5B86CF5AC8395BAFEB13C02DA292DDED7A83");
                return new i(a, c, o, u)
            }

            function u() {
                var t = f("FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFEFFFFAC73"),
                    e = BigInteger.ZERO,
                    n = f("7"),
                    o = f("0100000000000000000001B8FA16DFAB9ACA16B6B3"),
                    u = BigInteger.ONE,
                    a = new r(t, e, n),
                    c = a.decodePointHex("043B4C382CE37AA192A4019E763036F4F5DD4D7EBB938CF935318FDCED6BC28286531733C3F03C4FEE");
                return new i(a, c, o, u)
            }

            function a() {
                var t = f("FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF7FFFFFFF"),
                    e = f("FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF7FFFFFFC"),
                    n = f("1C97BEFC54BD7A8B65ACF89F81D4D4ADC565FA45"),
                    o = f("0100000000000000000001F4C8F927AED3CA752257"),
                    u = BigInteger.ONE,
                    a = new r(t, e, n),
                    c = a.decodePointHex("044A96B5688EF573284664698968C38BB913CBFC8223A628553168947D59DCC912042351377AC5FB32");
                return new i(a, c, o, u)
            }

            function c() {
                var t = f("FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFEFFFFEE37"),
                    e = BigInteger.ZERO,
                    n = f("3"),
                    o = f("FFFFFFFFFFFFFFFFFFFFFFFE26F2FC170F69466A74DEFD8D"),
                    u = BigInteger.ONE,
                    a = new r(t, e, n),
                    c = a.decodePointHex("04DB4FF10EC057E9AE26B07D0280B7F4341DA5D1B1EAE06C7D9B2F2F6D9C5628A7844163D015BE86344082AA88D95E2F9D");
                return new i(a, c, o, u)
            }

            function s() {
                var t = f("FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFEFFFFFFFFFFFFFFFF"),
                    e = f("FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFEFFFFFFFFFFFFFFFC"),
                    n = f("64210519E59C80E70FA7E9AB72243049FEB8DEECC146B9B1"),
                    o = f("FFFFFFFFFFFFFFFFFFFFFFFF99DEF836146BC9B1B4D22831"),
                    u = BigInteger.ONE,
                    a = new r(t, e, n),
                    c = a.decodePointHex("04188DA80EB03090F67CBF20EB43A18800F4FF0AFD82FF101207192B95FFC8DA78631011ED6B24CDD573F977A11E794811");
                return new i(a, c, o, u)
            }

            function h() {
                var t = f("FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF000000000000000000000001"),
                    e = f("FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFEFFFFFFFFFFFFFFFFFFFFFFFE"),
                    n = f("B4050A850C04B3ABF54132565044B0B7D7BFD8BA270B39432355FFB4"),
                    o = f("FFFFFFFFFFFFFFFFFFFFFFFFFFFF16A2E0B8F03E13DD29455C5C2A3D"),
                    u = BigInteger.ONE,
                    a = new r(t, e, n),
                    c = a.decodePointHex("04B70E0CBD6BB4BF7F321390B94A03C1D356C21122343280D6115C1D21BD376388B5F723FB4C22DFE6CD4375A05A07476444D5819985007E34");
                return new i(a, c, o, u)
            }

            function l() {
                var t = f("FFFFFFFF00000001000000000000000000000000FFFFFFFFFFFFFFFFFFFFFFFF"),
                    e = f("FFFFFFFF00000001000000000000000000000000FFFFFFFFFFFFFFFFFFFFFFFC"),
                    n = f("5AC635D8AA3A93E7B3EBBD55769886BC651D06B0CC53B0F63BCE3C3E27D2604B"),
                    o = f("FFFFFFFF00000000FFFFFFFFFFFFFFFFBCE6FAADA7179E84F3B9CAC2FC632551"),
                    u = BigInteger.ONE,
                    a = new r(t, e, n),
                    c = a.decodePointHex("046B17D1F2E12C4247F8BCE6E563A440F277037D812DEB33A0F4A13945D898C2964FE342E2FE1A7F9B8EE7EB4A7C0F9E162BCE33576B315ECECBB6406837BF51F5");
                return new i(a, c, o, u)
            }
            i.prototype.getCurve = function() {
                return this.curve
            }, i.prototype.getG = function() {
                return this.g
            }, i.prototype.getN = function() {
                return this.n
            }, i.prototype.getH = function() {
                return this.h
            }, t.exports = {
                secp128r1: o,
                secp160k1: u,
                secp160r1: a,
                secp192k1: c,
                secp192r1: s,
                secp224r1: h,
                secp256r1: l
            }
        },
        3199: function(t, e, n) {
            "use strict";
            e.utils = n(1745), e.Cipher = n(1031), e.DES = n(1746), e.CBC = n(3200), e.EDE = n(3201)
        },
        3200: function(t, e, n) {
            "use strict";
            var r = n(191),
                i = n(18),
                f = {};

            function o(t) {
                r.equal(t.length, 8, "Invalid IV length"), this.iv = new Array(8);
                for (var e = 0; e < this.iv.length; e++) this.iv[e] = t[e]
            }
            e.instantiate = function(t) {
                function e(e) {
                    t.call(this, e), this._cbcInit()
                }
                i(e, t);
                for (var n = Object.keys(f), r = 0; r < n.length; r++) {
                    var o = n[r];
                    e.prototype[o] = f[o]
                }
                return e.create = function(t) {
                    return new e(t)
                }, e
            }, f._cbcInit = function() {
                var t = new o(this.options.iv);
                this._cbcState = t
            }, f._update = function(t, e, n, r) {
                var i = this._cbcState,
                    f = this.constructor.super_.prototype,
                    o = i.iv;
                if ("encrypt" === this.type) {
                    for (var u = 0; u < this.blockSize; u++) o[u] ^= t[e + u];
                    f._update.call(this, o, 0, n, r);
                    for (u = 0; u < this.blockSize; u++) o[u] = n[r + u]
                } else {
                    f._update.call(this, t, e, n, r);
                    for (u = 0; u < this.blockSize; u++) n[r + u] ^= o[u];
                    for (u = 0; u < this.blockSize; u++) o[u] = t[e + u]
                }
            }
        },
        3201: function(t, e, n) {
            "use strict";
            var r = n(191),
                i = n(18),
                f = n(1031),
                o = n(1746);

            function u(t, e) {
                r.equal(e.length, 24, "Invalid key length");
                var n = e.slice(0, 8),
                    i = e.slice(8, 16),
                    f = e.slice(16, 24);
                this.ciphers = "encrypt" === t ? [o.create({
                    type: "encrypt",
                    key: n
                }), o.create({
                    type: "decrypt",
                    key: i
                }), o.create({
                    type: "encrypt",
                    key: f
                })] : [o.create({
                    type: "decrypt",
                    key: f
                }), o.create({
                    type: "encrypt",
                    key: i
                }), o.create({
                    type: "decrypt",
                    key: n
                })]
            }

            function a(t) {
                f.call(this, t);
                var e = new u(this.type, this.options.key);
                this._edeState = e
            }
            i(a, f), t.exports = a, a.create = function(t) {
                return new a(t)
            }, a.prototype._update = function(t, e, n, r) {
                var i = this._edeState;
                i.ciphers[0]._update(t, e, n, r), i.ciphers[1]._update(n, r, n, r), i.ciphers[2]._update(n, r, n, r)
            }, a.prototype._pad = o.prototype._pad, a.prototype._unpad = o.prototype._unpad
        },
        3212: function(t, e, n) {
            var r = n(1752),
                i = n(3213),
                f = n(3214);
            var o = {
                binary: !0,
                hex: !0,
                base64: !0
            };
            e.DiffieHellmanGroup = e.createDiffieHellmanGroup = e.getDiffieHellman = function(t) {
                var e = new Buffer(i[t].prime, "hex"),
                    n = new Buffer(i[t].gen, "hex");
                return new f(e, n)
            }, e.createDiffieHellman = e.DiffieHellman = function t(e, n, i, u) {
                return Buffer.isBuffer(n) || void 0 === o[n] ? t(e, "binary", n, i) : (n = n || "binary", u = u || "binary", i = i || new Buffer([2]), Buffer.isBuffer(i) || (i = new Buffer(i, u)), "number" == typeof e ? new f(r(e, i), i, !0) : (Buffer.isBuffer(e) || (e = new Buffer(e, n)), new f(e, i, !0)))
            }
        },
        3213: function(t) {
            t.exports = JSON.parse('{"modp1":{"gen":"02","prime":"ffffffffffffffffc90fdaa22168c234c4c6628b80dc1cd129024e088a67cc74020bbea63b139b22514a08798e3404ddef9519b3cd3a431b302b0a6df25f14374fe1356d6d51c245e485b576625e7ec6f44c42e9a63a3620ffffffffffffffff"},"modp2":{"gen":"02","prime":"ffffffffffffffffc90fdaa22168c234c4c6628b80dc1cd129024e088a67cc74020bbea63b139b22514a08798e3404ddef9519b3cd3a431b302b0a6df25f14374fe1356d6d51c245e485b576625e7ec6f44c42e9a637ed6b0bff5cb6f406b7edee386bfb5a899fa5ae9f24117c4b1fe649286651ece65381ffffffffffffffff"},"modp5":{"gen":"02","prime":"ffffffffffffffffc90fdaa22168c234c4c6628b80dc1cd129024e088a67cc74020bbea63b139b22514a08798e3404ddef9519b3cd3a431b302b0a6df25f14374fe1356d6d51c245e485b576625e7ec6f44c42e9a637ed6b0bff5cb6f406b7edee386bfb5a899fa5ae9f24117c4b1fe649286651ece45b3dc2007cb8a163bf0598da48361c55d39a69163fa8fd24cf5f83655d23dca3ad961c62f356208552bb9ed529077096966d670c354e4abc9804f1746c08ca237327ffffffffffffffff"},"modp14":{"gen":"02","prime":"ffffffffffffffffc90fdaa22168c234c4c6628b80dc1cd129024e088a67cc74020bbea63b139b22514a08798e3404ddef9519b3cd3a431b302b0a6df25f14374fe1356d6d51c245e485b576625e7ec6f44c42e9a637ed6b0bff5cb6f406b7edee386bfb5a899fa5ae9f24117c4b1fe649286651ece45b3dc2007cb8a163bf0598da48361c55d39a69163fa8fd24cf5f83655d23dca3ad961c62f356208552bb9ed529077096966d670c354e4abc9804f1746c08ca18217c32905e462e36ce3be39e772c180e86039b2783a2ec07a28fb5c55df06f4c52c9de2bcbf6955817183995497cea956ae515d2261898fa051015728e5a8aacaa68ffffffffffffffff"},"modp15":{"gen":"02","prime":"ffffffffffffffffc90fdaa22168c234c4c6628b80dc1cd129024e088a67cc74020bbea63b139b22514a08798e3404ddef9519b3cd3a431b302b0a6df25f14374fe1356d6d51c245e485b576625e7ec6f44c42e9a637ed6b0bff5cb6f406b7edee386bfb5a899fa5ae9f24117c4b1fe649286651ece45b3dc2007cb8a163bf0598da48361c55d39a69163fa8fd24cf5f83655d23dca3ad961c62f356208552bb9ed529077096966d670c354e4abc9804f1746c08ca18217c32905e462e36ce3be39e772c180e86039b2783a2ec07a28fb5c55df06f4c52c9de2bcbf6955817183995497cea956ae515d2261898fa051015728e5a8aaac42dad33170d04507a33a85521abdf1cba64ecfb850458dbef0a8aea71575d060c7db3970f85a6e1e4c7abf5ae8cdb0933d71e8c94e04a25619dcee3d2261ad2ee6bf12ffa06d98a0864d87602733ec86a64521f2b18177b200cbbe117577a615d6c770988c0bad946e208e24fa074e5ab3143db5bfce0fd108e4b82d120a93ad2caffffffffffffffff"},"modp16":{"gen":"02","prime":"ffffffffffffffffc90fdaa22168c234c4c6628b80dc1cd129024e088a67cc74020bbea63b139b22514a08798e3404ddef9519b3cd3a431b302b0a6df25f14374fe1356d6d51c245e485b576625e7ec6f44c42e9a637ed6b0bff5cb6f406b7edee386bfb5a899fa5ae9f24117c4b1fe649286651ece45b3dc2007cb8a163bf0598da48361c55d39a69163fa8fd24cf5f83655d23dca3ad961c62f356208552bb9ed529077096966d670c354e4abc9804f1746c08ca18217c32905e462e36ce3be39e772c180e86039b2783a2ec07a28fb5c55df06f4c52c9de2bcbf6955817183995497cea956ae515d2261898fa051015728e5a8aaac42dad33170d04507a33a85521abdf1cba64ecfb850458dbef0a8aea71575d060c7db3970f85a6e1e4c7abf5ae8cdb0933d71e8c94e04a25619dcee3d2261ad2ee6bf12ffa06d98a0864d87602733ec86a64521f2b18177b200cbbe117577a615d6c770988c0bad946e208e24fa074e5ab3143db5bfce0fd108e4b82d120a92108011a723c12a787e6d788719a10bdba5b2699c327186af4e23c1a946834b6150bda2583e9ca2ad44ce8dbbbc2db04de8ef92e8efc141fbecaa6287c59474e6bc05d99b2964fa090c3a2233ba186515be7ed1f612970cee2d7afb81bdd762170481cd0069127d5b05aa993b4ea988d8fddc186ffb7dc90a6c08f4df435c934063199ffffffffffffffff"},"modp17":{"gen":"02","prime":"ffffffffffffffffc90fdaa22168c234c4c6628b80dc1cd129024e088a67cc74020bbea63b139b22514a08798e3404ddef9519b3cd3a431b302b0a6df25f14374fe1356d6d51c245e485b576625e7ec6f44c42e9a637ed6b0bff5cb6f406b7edee386bfb5a899fa5ae9f24117c4b1fe649286651ece45b3dc2007cb8a163bf0598da48361c55d39a69163fa8fd24cf5f83655d23dca3ad961c62f356208552bb9ed529077096966d670c354e4abc9804f1746c08ca18217c32905e462e36ce3be39e772c180e86039b2783a2ec07a28fb5c55df06f4c52c9de2bcbf6955817183995497cea956ae515d2261898fa051015728e5a8aaac42dad33170d04507a33a85521abdf1cba64ecfb850458dbef0a8aea71575d060c7db3970f85a6e1e4c7abf5ae8cdb0933d71e8c94e04a25619dcee3d2261ad2ee6bf12ffa06d98a0864d87602733ec86a64521f2b18177b200cbbe117577a615d6c770988c0bad946e208e24fa074e5ab3143db5bfce0fd108e4b82d120a92108011a723c12a787e6d788719a10bdba5b2699c327186af4e23c1a946834b6150bda2583e9ca2ad44ce8dbbbc2db04de8ef92e8efc141fbecaa6287c59474e6bc05d99b2964fa090c3a2233ba186515be7ed1f612970cee2d7afb81bdd762170481cd0069127d5b05aa993b4ea988d8fddc186ffb7dc90a6c08f4df435c93402849236c3fab4d27c7026c1d4dcb2602646dec9751e763dba37bdf8ff9406ad9e530ee5db382f413001aeb06a53ed9027d831179727b0865a8918da3edbebcf9b14ed44ce6cbaced4bb1bdb7f1447e6cc254b332051512bd7af426fb8f401378cd2bf5983ca01c64b92ecf032ea15d1721d03f482d7ce6e74fef6d55e702f46980c82b5a84031900b1c9e59e7c97fbec7e8f323a97a7e36cc88be0f1d45b7ff585ac54bd407b22b4154aacc8f6d7ebf48e1d814cc5ed20f8037e0a79715eef29be32806a1d58bb7c5da76f550aa3d8a1fbff0eb19ccb1a313d55cda56c9ec2ef29632387fe8d76e3c0468043e8f663f4860ee12bf2d5b0b7474d6e694f91e6dcc4024ffffffffffffffff"},"modp18":{"gen":"02","prime":"ffffffffffffffffc90fdaa22168c234c4c6628b80dc1cd129024e088a67cc74020bbea63b139b22514a08798e3404ddef9519b3cd3a431b302b0a6df25f14374fe1356d6d51c245e485b576625e7ec6f44c42e9a637ed6b0bff5cb6f406b7edee386bfb5a899fa5ae9f24117c4b1fe649286651ece45b3dc2007cb8a163bf0598da48361c55d39a69163fa8fd24cf5f83655d23dca3ad961c62f356208552bb9ed529077096966d670c354e4abc9804f1746c08ca18217c32905e462e36ce3be39e772c180e86039b2783a2ec07a28fb5c55df06f4c52c9de2bcbf6955817183995497cea956ae515d2261898fa051015728e5a8aaac42dad33170d04507a33a85521abdf1cba64ecfb850458dbef0a8aea71575d060c7db3970f85a6e1e4c7abf5ae8cdb0933d71e8c94e04a25619dcee3d2261ad2ee6bf12ffa06d98a0864d87602733ec86a64521f2b18177b200cbbe117577a615d6c770988c0bad946e208e24fa074e5ab3143db5bfce0fd108e4b82d120a92108011a723c12a787e6d788719a10bdba5b2699c327186af4e23c1a946834b6150bda2583e9ca2ad44ce8dbbbc2db04de8ef92e8efc141fbecaa6287c59474e6bc05d99b2964fa090c3a2233ba186515be7ed1f612970cee2d7afb81bdd762170481cd0069127d5b05aa993b4ea988d8fddc186ffb7dc90a6c08f4df435c93402849236c3fab4d27c7026c1d4dcb2602646dec9751e763dba37bdf8ff9406ad9e530ee5db382f413001aeb06a53ed9027d831179727b0865a8918da3edbebcf9b14ed44ce6cbaced4bb1bdb7f1447e6cc254b332051512bd7af426fb8f401378cd2bf5983ca01c64b92ecf032ea15d1721d03f482d7ce6e74fef6d55e702f46980c82b5a84031900b1c9e59e7c97fbec7e8f323a97a7e36cc88be0f1d45b7ff585ac54bd407b22b4154aacc8f6d7ebf48e1d814cc5ed20f8037e0a79715eef29be32806a1d58bb7c5da76f550aa3d8a1fbff0eb19ccb1a313d55cda56c9ec2ef29632387fe8d76e3c0468043e8f663f4860ee12bf2d5b0b7474d6e694f91e6dbe115974a3926f12fee5e438777cb6a932df8cd8bec4d073b931ba3bc832b68d9dd300741fa7bf8afc47ed2576f6936ba424663aab639c5ae4f5683423b4742bf1c978238f16cbe39d652de3fdb8befc848ad922222e04a4037c0713eb57a81a23f0c73473fc646cea306b4bcbc8862f8385ddfa9d4b7fa2c087e879683303ed5bdd3a062b3cf5b3a278a66d2a13f83f44f82ddf310ee074ab6a364597e899a0255dc164f31cc50846851df9ab48195ded7ea1b1d510bd7ee74d73faf36bc31ecfa268359046f4eb879f924009438b481c6cd7889a002ed5ee382bc9190da6fc026e479558e4475677e9aa9e3050e2765694dfc81f56e880b96e7160c980dd98edd3dfffffffffffffffff"}}')
        },
        3214: function(t, e, n) {
            var r = n(35),
                i = new(n(1753)),
                f = new r(24),
                o = new r(11),
                u = new r(10),
                a = new r(3),
                c = new r(7),
                s = n(1752),
                h = n(125);

            function l(t, e) {
                return e = e || "utf8", Buffer.isBuffer(t) || (t = new Buffer(t, e)), this._pub = new r(t), this
            }

            function d(t, e) {
                return e = e || "utf8", Buffer.isBuffer(t) || (t = new Buffer(t, e)), this._priv = new r(t), this
            }
            t.exports = b;
            var p = {};

            function b(t, e, n) {
                this.setGenerator(e), this.__prime = new r(t), this._prime = r.mont(this.__prime), this._primeLen = t.length, this._pub = void 0, this._priv = void 0, this._primeCode = void 0, n ? (this.setPublicKey = l, this.setPrivateKey = d) : this._primeCode = 8
            }

            function v(t, e) {
                var n = new Buffer(t.toArray());
                return e ? n.toString(e) : n
            }
            Object.defineProperty(b.prototype, "verifyError", {
                enumerable: !0,
                get: function() {
                    return "number" != typeof this._primeCode && (this._primeCode = function(t, e) {
                        var n = e.toString("hex"),
                            r = [n, t.toString(16)].join("_");
                        if (r in p) return p[r];
                        var h, l = 0;
                        if (t.isEven() || !s.simpleSieve || !s.fermatTest(t) || !i.test(t)) return l += 1, l += "02" === n || "05" === n ? 8 : 4, p[r] = l, l;
                        switch (i.test(t.shrn(1)) || (l += 2), n) {
                            case "02":
                                t.mod(f).cmp(o) && (l += 8);
                                break;
                            case "05":
                                (h = t.mod(u)).cmp(a) && h.cmp(c) && (l += 8);
                                break;
                            default:
                                l += 4
                        }
                        return p[r] = l, l
                    }(this.__prime, this.__gen)), this._primeCode
                }
            }), b.prototype.generateKeys = function() {
                return this._priv || (this._priv = new r(h(this._primeLen))), this._pub = this._gen.toRed(this._prime).redPow(this._priv).fromRed(), this.getPublicKey()
            }, b.prototype.computeSecret = function(t) {
                var e = (t = (t = new r(t)).toRed(this._prime)).redPow(this._priv).fromRed(),
                    n = new Buffer(e.toArray()),
                    i = this.getPrime();
                if (n.length < i.length) {
                    var f = new Buffer(i.length - n.length);
                    f.fill(0), n = Buffer.concat([f, n])
                }
                return n
            }, b.prototype.getPublicKey = function(t) {
                return v(this._pub, t)
            }, b.prototype.getPrivateKey = function(t) {
                return v(this._priv, t)
            }, b.prototype.getPrime = function(t) {
                return v(this.__prime, t)
            }, b.prototype.getGenerator = function(t) {
                return v(this._gen, t)
            }, b.prototype.setGenerator = function(t, e) {
                return e = e || "utf8", Buffer.isBuffer(t) || (t = new Buffer(t, e)), this.__gen = t, this._gen = new r(t), this
            }
        },
        4075: function(t, e, n) {
            var BigInteger = n(109),
                r = n(4076),
                i = n(1998);
            t.exports = function(t) {
                var e = r[t];
                if (!e) return null;
                var n = new BigInteger(e.p, 16),
                    f = new BigInteger(e.a, 16),
                    o = new BigInteger(e.b, 16),
                    u = new BigInteger(e.n, 16),
                    a = new BigInteger(e.h, 16),
                    c = new BigInteger(e.Gx, 16),
                    s = new BigInteger(e.Gy, 16);
                return new i(n, f, o, c, s, u, a)
            }
        },
        4076: function(t) {
            t.exports = JSON.parse('{"secp128r1":{"p":"fffffffdffffffffffffffffffffffff","a":"fffffffdfffffffffffffffffffffffc","b":"e87579c11079f43dd824993c2cee5ed3","n":"fffffffe0000000075a30d1b9038a115","h":"01","Gx":"161ff7528b899b2d0c28607ca52c5b86","Gy":"cf5ac8395bafeb13c02da292dded7a83"},"secp160k1":{"p":"fffffffffffffffffffffffffffffffeffffac73","a":"00","b":"07","n":"0100000000000000000001b8fa16dfab9aca16b6b3","h":"01","Gx":"3b4c382ce37aa192a4019e763036f4f5dd4d7ebb","Gy":"938cf935318fdced6bc28286531733c3f03c4fee"},"secp160r1":{"p":"ffffffffffffffffffffffffffffffff7fffffff","a":"ffffffffffffffffffffffffffffffff7ffffffc","b":"1c97befc54bd7a8b65acf89f81d4d4adc565fa45","n":"0100000000000000000001f4c8f927aed3ca752257","h":"01","Gx":"4a96b5688ef573284664698968c38bb913cbfc82","Gy":"23a628553168947d59dcc912042351377ac5fb32"},"secp192k1":{"p":"fffffffffffffffffffffffffffffffffffffffeffffee37","a":"00","b":"03","n":"fffffffffffffffffffffffe26f2fc170f69466a74defd8d","h":"01","Gx":"db4ff10ec057e9ae26b07d0280b7f4341da5d1b1eae06c7d","Gy":"9b2f2f6d9c5628a7844163d015be86344082aa88d95e2f9d"},"secp192r1":{"p":"fffffffffffffffffffffffffffffffeffffffffffffffff","a":"fffffffffffffffffffffffffffffffefffffffffffffffc","b":"64210519e59c80e70fa7e9ab72243049feb8deecc146b9b1","n":"ffffffffffffffffffffffff99def836146bc9b1b4d22831","h":"01","Gx":"188da80eb03090f67cbf20eb43a18800f4ff0afd82ff1012","Gy":"07192b95ffc8da78631011ed6b24cdd573f977a11e794811"},"secp256k1":{"p":"fffffffffffffffffffffffffffffffffffffffffffffffffffffffefffffc2f","a":"00","b":"07","n":"fffffffffffffffffffffffffffffffebaaedce6af48a03bbfd25e8cd0364141","h":"01","Gx":"79be667ef9dcbbac55a06295ce870b07029bfcdb2dce28d959f2815b16f81798","Gy":"483ada7726a3c4655da4fbfc0e1108a8fd17b448a68554199c47d08ffb10d4b8"},"secp256r1":{"p":"ffffffff00000001000000000000000000000000ffffffffffffffffffffffff","a":"ffffffff00000001000000000000000000000000fffffffffffffffffffffffc","b":"5ac635d8aa3a93e7b3ebbd55769886bc651d06b0cc53b0f63bce3c3e27d2604b","n":"ffffffff00000000ffffffffffffffffbce6faada7179e84f3b9cac2fc632551","h":"01","Gx":"6b17d1f2e12c4247f8bce6e563a440f277037d812deb33a0f4a13945d898c296","Gy":"4fe342e2fe1a7f9b8ee7eb4a7c0f9e162bce33576b315ececbb6406837bf51f5"}}')
        },
        601: function(t, e, n) {
            var BigInteger = n(491).BigInteger,
                r = BigInteger.prototype.Barrett;

            function i(t, e) {
                this.x = e, this.q = t
            }

            function f(t, e, n, r) {
                this.curve = t, this.x = e, this.y = n, this.z = null == r ? BigInteger.ONE : r, this.zinv = null
            }

            function o(t, e, n) {
                this.q = t, this.a = this.fromBigInteger(e), this.b = this.fromBigInteger(n), this.infinity = new f(this, null, null), this.reducer = new r(this.q)
            }
            i.prototype.equals = function(t) {
                return t == this || this.q.equals(t.q) && this.x.equals(t.x)
            }, i.prototype.toBigInteger = function() {
                return this.x
            }, i.prototype.negate = function() {
                return new i(this.q, this.x.negate().mod(this.q))
            }, i.prototype.add = function(t) {
                return new i(this.q, this.x.add(t.toBigInteger()).mod(this.q))
            }, i.prototype.subtract = function(t) {
                return new i(this.q, this.x.subtract(t.toBigInteger()).mod(this.q))
            }, i.prototype.multiply = function(t) {
                return new i(this.q, this.x.multiply(t.toBigInteger()).mod(this.q))
            }, i.prototype.square = function() {
                return new i(this.q, this.x.square().mod(this.q))
            }, i.prototype.divide = function(t) {
                return new i(this.q, this.x.multiply(t.toBigInteger().modInverse(this.q)).mod(this.q))
            }, f.prototype.getX = function() {
                null == this.zinv && (this.zinv = this.z.modInverse(this.curve.q));
                var t = this.x.toBigInteger().multiply(this.zinv);
                return this.curve.reduce(t), this.curve.fromBigInteger(t)
            }, f.prototype.getY = function() {
                null == this.zinv && (this.zinv = this.z.modInverse(this.curve.q));
                var t = this.y.toBigInteger().multiply(this.zinv);
                return this.curve.reduce(t), this.curve.fromBigInteger(t)
            }, f.prototype.equals = function(t) {
                return t == this || (this.isInfinity() ? t.isInfinity() : t.isInfinity() ? this.isInfinity() : !!t.y.toBigInteger().multiply(this.z).subtract(this.y.toBigInteger().multiply(t.z)).mod(this.curve.q).equals(BigInteger.ZERO) && t.x.toBigInteger().multiply(this.z).subtract(this.x.toBigInteger().multiply(t.z)).mod(this.curve.q).equals(BigInteger.ZERO))
            }, f.prototype.isInfinity = function() {
                return null == this.x && null == this.y || this.z.equals(BigInteger.ZERO) && !this.y.toBigInteger().equals(BigInteger.ZERO)
            }, f.prototype.negate = function() {
                return new f(this.curve, this.x, this.y.negate(), this.z)
            }, f.prototype.add = function(t) {
                if (this.isInfinity()) return t;
                if (t.isInfinity()) return this;
                var e = t.y.toBigInteger().multiply(this.z).subtract(this.y.toBigInteger().multiply(t.z)).mod(this.curve.q),
                    n = t.x.toBigInteger().multiply(this.z).subtract(this.x.toBigInteger().multiply(t.z)).mod(this.curve.q);
                if (BigInteger.ZERO.equals(n)) return BigInteger.ZERO.equals(e) ? this.twice() : this.curve.getInfinity();
                var r = new BigInteger("3"),
                    i = this.x.toBigInteger(),
                    o = this.y.toBigInteger(),
                    u = (t.x.toBigInteger(), t.y.toBigInteger(), n.square()),
                    a = u.multiply(n),
                    c = i.multiply(u),
                    s = e.square().multiply(this.z),
                    h = s.subtract(c.shiftLeft(1)).multiply(t.z).subtract(a).multiply(n).mod(this.curve.q),
                    l = c.multiply(r).multiply(e).subtract(o.multiply(a)).subtract(s.multiply(e)).multiply(t.z).add(e.multiply(a)).mod(this.curve.q),
                    d = a.multiply(this.z).multiply(t.z).mod(this.curve.q);
                return new f(this.curve, this.curve.fromBigInteger(h), this.curve.fromBigInteger(l), d)
            }, f.prototype.twice = function() {
                if (this.isInfinity()) return this;
                if (0 == this.y.toBigInteger().signum()) return this.curve.getInfinity();
                var t = new BigInteger("3"),
                    e = this.x.toBigInteger(),
                    n = this.y.toBigInteger(),
                    r = n.multiply(this.z),
                    i = r.multiply(n).mod(this.curve.q),
                    o = this.curve.a.toBigInteger(),
                    u = e.square().multiply(t);
                BigInteger.ZERO.equals(o) || (u = u.add(this.z.square().multiply(o)));
                var a = (u = u.mod(this.curve.q)).square().subtract(e.shiftLeft(3).multiply(i)).shiftLeft(1).multiply(r).mod(this.curve.q),
                    c = u.multiply(t).multiply(e).subtract(i.shiftLeft(1)).shiftLeft(2).multiply(i).subtract(u.square().multiply(u)).mod(this.curve.q),
                    s = r.square().multiply(r).shiftLeft(3).mod(this.curve.q);
                return new f(this.curve, this.curve.fromBigInteger(a), this.curve.fromBigInteger(c), s)
            }, f.prototype.multiply = function(t) {
                if (this.isInfinity()) return this;
                if (0 == t.signum()) return this.curve.getInfinity();
                var e, n = t,
                    r = n.multiply(new BigInteger("3")),
                    i = this.negate(),
                    f = this;
                for (e = r.bitLength() - 2; e > 0; --e) {
                    f = f.twice();
                    var o = r.testBit(e);
                    o != n.testBit(e) && (f = f.add(o ? this : i))
                }
                return f
            }, f.prototype.multiplyTwo = function(t, e, n) {
                var r;
                r = t.bitLength() > n.bitLength() ? t.bitLength() - 1 : n.bitLength() - 1;
                for (var i = this.curve.getInfinity(), f = this.add(e); r >= 0;) i = i.twice(), t.testBit(r) ? i = n.testBit(r) ? i.add(f) : i.add(this) : n.testBit(r) && (i = i.add(e)), --r;
                return i
            }, o.prototype.getQ = function() {
                return this.q
            }, o.prototype.getA = function() {
                return this.a
            }, o.prototype.getB = function() {
                return this.b
            }, o.prototype.equals = function(t) {
                return t == this || this.q.equals(t.q) && this.a.equals(t.a) && this.b.equals(t.b)
            }, o.prototype.getInfinity = function() {
                return this.infinity
            }, o.prototype.fromBigInteger = function(t) {
                return new i(this.q, t)
            }, o.prototype.reduce = function(t) {
                this.reducer.reduce(t)
            }, o.prototype.encodePointHex = function(t) {
                if (t.isInfinity()) return "00";
                var e = t.getX().toBigInteger().toString(16),
                    n = t.getY().toBigInteger().toString(16),
                    r = this.getQ().toString(16).length;
                for (r % 2 != 0 && r++; e.length < r;) e = "0" + e;
                for (; n.length < r;) n = "0" + n;
                return "04" + e + n
            }, o.prototype.decodePointHex = function(t) {
                var e;
                switch (parseInt(t.substr(0, 2), 16)) {
                    case 0:
                        return this.infinity;
                    case 2:
                        e = !1;
                    case 3:
                        null == e && (e = !0);
                        var n = t.length - 2,
                            r = t.substr(2, n),
                            i = this.fromBigInteger(new BigInteger(r, 16)),
                            o = i.multiply(i.square().add(this.getA())).add(this.getB()).sqrt();
                        if (null == o) throw "Invalid point compression";
                        var u = o.toBigInteger();
                        return u.testBit(0) != e && (o = this.fromBigInteger(this.getQ().subtract(u))), new f(this, i, o);
                    case 4:
                    case 6:
                    case 7:
                        n = (t.length - 2) / 2, r = t.substr(2, n);
                        var a = t.substr(n + 2, n);
                        return new f(this, this.fromBigInteger(new BigInteger(r, 16)), this.fromBigInteger(new BigInteger(a, 16)));
                    default:
                        return null
                }
            }, o.prototype.encodeCompressedPointHex = function(t) {
                if (t.isInfinity()) return "00";
                var e = t.getX().toBigInteger().toString(16),
                    n = this.getQ().toString(16).length;
                for (n % 2 != 0 && n++; e.length < n;) e = "0" + e;
                return (t.getY().toBigInteger().isEven() ? "02" : "03") + e
            }, i.prototype.getR = function() {
                if (null != this.r) return this.r;
                this.r = null;
                var t = this.q.bitLength();
                t > 128 && (-1 == this.q.shiftRight(t - 64).intValue() && (this.r = BigInteger.ONE.shiftLeft(t).subtract(this.q)));
                return this.r
            }, i.prototype.modMult = function(t, e) {
                return this.modReduce(t.multiply(e))
            }, i.prototype.modReduce = function(t) {
                if (null != this.getR()) {
                    for (var e = q.bitLength(); t.bitLength() > e + 1;) {
                        var n = t.shiftRight(e),
                            r = t.subtract(n.shiftLeft(e));
                        this.getR().equals(BigInteger.ONE) || (n = n.multiply(this.getR())), t = n.add(r)
                    }
                    for (; t.compareTo(q) >= 0;) t = t.subtract(q)
                } else t = t.mod(q);
                return t
            }, i.prototype.sqrt = function() {
                if (!this.q.testBit(0)) throw "unsupported";
                if (this.q.testBit(1)) {
                    var t = new i(this.q, this.x.modPow(this.q.shiftRight(2).add(BigInteger.ONE), this.q));
                    return t.square().equals(this) ? t : null
                }
                var e = this.q.subtract(BigInteger.ONE),
                    n = e.shiftRight(1);
                if (!this.x.modPow(n, this.q).equals(BigInteger.ONE)) return null;
                var r, f, o = e.shiftRight(2).shiftLeft(1).add(BigInteger.ONE),
                    u = this.x,
                    a = modDouble(modDouble(u));
                do {
                    var c;
                    do {
                        c = new BigInteger(this.q.bitLength(), new SecureRandom)
                    } while (c.compareTo(this.q) >= 0 || !c.multiply(c).subtract(a).modPow(n, this.q).equals(e));
                    var s = this.lucasSequence(c, u, o);
                    if (r = s[0], f = s[1], this.modMult(f, f).equals(a)) return f.testBit(0) && (f = f.add(q)), f = f.shiftRight(1), new i(q, f)
                } while (r.equals(BigInteger.ONE) || r.equals(e));
                return null
            }, i.prototype.lucasSequence = function(t, e, n) {
                for (var r = n.bitLength(), i = n.getLowestSetBit(), f = BigInteger.ONE, o = BigInteger.TWO, u = t, a = BigInteger.ONE, c = BigInteger.ONE, s = r - 1; s >= i + 1; --s) a = this.modMult(a, c), n.testBit(s) ? (c = this.modMult(a, e), f = this.modMult(f, u), o = this.modReduce(u.multiply(o).subtract(t.multiply(a))), u = this.modReduce(u.multiply(u).subtract(c.shiftLeft(1)))) : (c = a, f = this.modReduce(f.multiply(o).subtract(a)), u = this.modReduce(u.multiply(o).subtract(t.multiply(a))), o = this.modReduce(o.multiply(o).subtract(a.shiftLeft(1))));
                a = this.modMult(a, c), c = this.modMult(a, e), f = this.modReduce(f.multiply(o).subtract(a)), o = this.modReduce(u.multiply(o).subtract(t.multiply(a))), a = this.modMult(a, c);
                for (s = 1; s <= i; ++s) f = this.modMult(f, o), o = this.modReduce(o.multiply(o).subtract(a.shiftLeft(1))), a = this.modMult(a, a);
                return [f, o]
            };
            e = {
                ECCurveFp: o,
                ECPointFp: f,
                ECFieldElementFp: i
            };
            t.exports = e
        }
    }
]);