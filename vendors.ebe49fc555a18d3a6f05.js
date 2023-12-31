(window.webpackJsonp = window.webpackJsonp || []).push([
    [68], {
        1007: function(e, t) {
            t["aes-128-ecb"] = {
                cipher: "AES",
                key: 128,
                iv: 0,
                mode: "ECB",
                type: "block"
            }, t["aes-192-ecb"] = {
                cipher: "AES",
                key: 192,
                iv: 0,
                mode: "ECB",
                type: "block"
            }, t["aes-256-ecb"] = {
                cipher: "AES",
                key: 256,
                iv: 0,
                mode: "ECB",
                type: "block"
            }, t["aes-128-cbc"] = {
                cipher: "AES",
                key: 128,
                iv: 16,
                mode: "CBC",
                type: "block"
            }, t["aes-192-cbc"] = {
                cipher: "AES",
                key: 192,
                iv: 16,
                mode: "CBC",
                type: "block"
            }, t["aes-256-cbc"] = {
                cipher: "AES",
                key: 256,
                iv: 16,
                mode: "CBC",
                type: "block"
            }, t.aes128 = t["aes-128-cbc"], t.aes192 = t["aes-192-cbc"], t.aes256 = t["aes-256-cbc"], t["aes-128-cfb"] = {
                cipher: "AES",
                key: 128,
                iv: 16,
                mode: "CFB",
                type: "stream"
            }, t["aes-192-cfb"] = {
                cipher: "AES",
                key: 192,
                iv: 16,
                mode: "CFB",
                type: "stream"
            }, t["aes-256-cfb"] = {
                cipher: "AES",
                key: 256,
                iv: 16,
                mode: "CFB",
                type: "stream"
            }, t["aes-128-cfb8"] = {
                cipher: "AES",
                key: 128,
                iv: 16,
                mode: "CFB8",
                type: "stream"
            }, t["aes-192-cfb8"] = {
                cipher: "AES",
                key: 192,
                iv: 16,
                mode: "CFB8",
                type: "stream"
            }, t["aes-256-cfb8"] = {
                cipher: "AES",
                key: 256,
                iv: 16,
                mode: "CFB8",
                type: "stream"
            }, t["aes-128-cfb1"] = {
                cipher: "AES",
                key: 128,
                iv: 16,
                mode: "CFB1",
                type: "stream"
            }, t["aes-192-cfb1"] = {
                cipher: "AES",
                key: 192,
                iv: 16,
                mode: "CFB1",
                type: "stream"
            }, t["aes-256-cfb1"] = {
                cipher: "AES",
                key: 256,
                iv: 16,
                mode: "CFB1",
                type: "stream"
            }, t["aes-128-ofb"] = {
                cipher: "AES",
                key: 128,
                iv: 16,
                mode: "OFB",
                type: "stream"
            }, t["aes-192-ofb"] = {
                cipher: "AES",
                key: 192,
                iv: 16,
                mode: "OFB",
                type: "stream"
            }, t["aes-256-ofb"] = {
                cipher: "AES",
                key: 256,
                iv: 16,
                mode: "OFB",
                type: "stream"
            }, t["aes-128-ctr"] = {
                cipher: "AES",
                key: 128,
                iv: 16,
                mode: "CTR",
                type: "stream"
            }, t["aes-192-ctr"] = {
                cipher: "AES",
                key: 192,
                iv: 16,
                mode: "CTR",
                type: "stream"
            }, t["aes-256-ctr"] = {
                cipher: "AES",
                key: 256,
                iv: 16,
                mode: "CTR",
                type: "stream"
            }, t["aes-128-gcm"] = {
                cipher: "AES",
                key: 128,
                iv: 12,
                mode: "GCM",
                type: "auth"
            }, t["aes-192-gcm"] = {
                cipher: "AES",
                key: 192,
                iv: 12,
                mode: "GCM",
                type: "auth"
            }, t["aes-256-gcm"] = {
                cipher: "AES",
                key: 256,
                iv: 12,
                mode: "GCM",
                type: "auth"
            }
        },
        1008: function(e, t, r) {
            var n = r(2934),
                i = r(2935),
                a = r(2936);
            e.exports = function(e, t) {
                return n(e) || i(e, t) || a()
            }
        },
        1009: function(e, t, r) {
            var Point = r(1672),
                n = r(1674),
                i = r(2939);
            e.exports = {
                Curve: n,
                Point: Point,
                getCurveByName: i
            }
        },
        1084: function(e, t) {
            e.exports = function(e, t, r) {
                var n = "";
                if (n += e.name || "Error", n += ": " + (e.message || ""), r instanceof Array)
                    for (var i in r) {
                        n += "\n   # " + r[i]
                    }
                for (var a in t) {
                    n += "\n   at " + t[a].toString()
                }
                return n
            }
        },
        1662: function(e, t, r) {
            "use strict";
            var n = r(1663),
                i = r(2337),
                a = r(2930),
                o = r(72),
                f = r(488),
                s = r(591),
                u = r(336),
                c = i.Long;

            function h(e, t, r, n, c) {
                if (!(e = s(e))) throw new TypeError("private_key is required");
                if (!(t = f(t))) throw new TypeError("public_key is required");
                if (!(r = d(r))) throw new TypeError("nonce is required");
                if (!Buffer.isBuffer(n)) {
                    if ("string" != typeof n) throw new TypeError("message should be buffer or string");
                    n = new Buffer(n, "binary")
                }
                if (c && "number" != typeof c) throw new TypeError("checksum should be a number");
                var h = e.getSharedSecret(t),
                    l = new i(i.DEFAULT_CAPACITY, i.LITTLE_ENDIAN);
                l.writeUint64(r), l.append(h.toString("binary"), "binary"), l = new Buffer(l.copy(0, l.offset).toBinary(), "binary");
                var p = u.sha512(l),
                    v = p.slice(32, 48),
                    g = p.slice(0, 32),
                    m = u.sha256(p);
                m = m.slice(0, 4);
                var b = i.fromBinary(m.toString("binary"), i.DEFAULT_CAPACITY, i.LITTLE_ENDIAN);
                if (m = b.readUint32(), c) {
                    if (m !== c) throw new Error("Invalid key");
                    n = function(e, t, r) {
                        o(e, "Missing cipher text"), e = y(e);
                        var n = a.createDecipheriv("aes-256-cbc", t, r);
                        return e = Buffer.concat([n.update(e), n.final()])
                    }(n, g, v)
                } else n = function(e, t, r) {
                    o(e, "Missing plain text"), e = y(e);
                    var n = a.createCipheriv("aes-256-cbc", t, r);
                    return e = Buffer.concat([n.update(e), n.final()])
                }(n, g, v);
                return {
                    nonce: r,
                    message: n,
                    checksum: m
                }
            }

            function l() {
                if (null === p) {
                    var e = new Uint8Array(n(2));
                    p = parseInt(e[0] << 8 | e[1], 10)
                }
                var t = c.fromNumber(Date.now()),
                    r = ++p % 65535;
                return (t = t.shiftLeft(16).or(c.fromNumber(r))).toString()
            }
            e.exports = {
                encrypt: function(e, t, r) {
                    var n = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : l();
                    return h(e, t, n, r)
                },
                decrypt: function(e, t, r, n, i) {
                    return h(e, t, r, n, i).message
                }
            };
            var p = null,
                d = function(e) {
                    return e ? c.isLong(e) ? e : c.fromString(e) : e
                },
                y = function(e) {
                    return e ? Buffer.isBuffer(e) ? e : new Buffer(e, "binary") : e
                }
        },
        1663: function(e, t, r) {
            "use strict";
            var n = r(21).Buffer,
                i = global.crypto || global.msCrypto;
            i && i.getRandomValues ? e.exports = function(e, t) {
                if (e > 65536) throw new Error("requested too many random bytes");
                var r = new global.Uint8Array(e);
                e > 0 && i.getRandomValues(r);
                var a = n.from(r.buffer);
                if ("function" == typeof t) return process.nextTick((function() {
                    t(null, a)
                }));
                return a
            } : e.exports = function() {
                throw new Error("secure random number generation not supported by this browser\nuse chrome, FireFox or Internet Explorer 11")
            }
        },
        1664: function(e, t, r) {
            var n = r(587),
                i = r(153);

            function a(e, t, r, o) {
                if (!(this instanceof a)) return new a(e, t, r);
                i.call(this), this._cipher = new n.AES(t), this._prev = new Buffer(r.length), this._cache = new Buffer(""), this._secCache = new Buffer(""), this._decrypt = o, r.copy(this._prev), this._mode = e
            }
            r(18)(a, i), e.exports = a, a.prototype._update = function(e) {
                return this._mode.encrypt(this, e, this._decrypt)
            }, a.prototype._final = function() {
                this._cipher.scrub()
            }
        },
        1665: function(e, t, r) {
            var n = r(587),
                i = r(153),
                a = r(18),
                o = r(2932),
                f = r(236);

            function s(e, t, r, a) {
                if (!(this instanceof s)) return new s(e, t, r);
                i.call(this), this._finID = Buffer.concat([r, new Buffer([0, 0, 0, 1])]), r = Buffer.concat([r, new Buffer([0, 0, 0, 2])]), this._cipher = new n.AES(t), this._prev = new Buffer(r.length), this._cache = new Buffer(""), this._secCache = new Buffer(""), this._decrypt = a, this._alen = 0, this._len = 0, r.copy(this._prev), this._mode = e;
                var f = new Buffer(4);
                f.fill(0), this._ghash = new o(this._cipher.encryptBlock(f)), this._authTag = null, this._called = !1
            }
            a(s, i), e.exports = s, s.prototype._update = function(e) {
                if (!this._called && this._alen) {
                    var t = 16 - this._alen % 16;
                    t < 16 && ((t = new Buffer(t)).fill(0), this._ghash.update(t))
                }
                this._called = !0;
                var r = this._mode.encrypt(this, e);
                return this._decrypt ? this._ghash.update(e) : this._ghash.update(r), this._len += e.length, r
            }, s.prototype._final = function() {
                if (this._decrypt && !this._authTag) throw new Error("Unsupported state or unable to authenticate data");
                var e = f(this._ghash.final(8 * this._alen, 8 * this._len), this._cipher.encryptBlock(this._finID));
                if (this._decrypt) {
                    if (function(e, t) {
                            var r = 0;
                            e.length !== t.length && r++;
                            var n = Math.min(e.length, t.length),
                                i = -1;
                            for (; ++i < n;) r += e[i] ^ t[i];
                            return r
                        }(e, this._authTag)) throw new Error("Unsupported state or unable to authenticate data")
                } else this._authTag = e;
                this._cipher.scrub()
            }, s.prototype.getAuthTag = function() {
                if (!this._decrypt && Buffer.isBuffer(this._authTag)) return this._authTag;
                throw new Error("Attempting to get auth tag in unsupported state")
            }, s.prototype.setAuthTag = function(e) {
                if (!this._decrypt) throw new Error("Attempting to set auth tag in unsupported state");
                this._authTag = e
            }, s.prototype.setAAD = function(e) {
                if (this._called) throw new Error("Attempting to set AAD in unsupported state");
                this._ghash.update(e), this._alen += e.length
            }
        },
        1666: function(e, t) {
            t.encrypt = function(e, t) {
                return e._cipher.encryptBlock(t)
            }, t.decrypt = function(e, t) {
                return e._cipher.decryptBlock(t)
            }
        },
        1667: function(e, t, r) {
            var n = r(236);
            t.encrypt = function(e, t) {
                var r = n(t, e._prev);
                return e._prev = e._cipher.encryptBlock(r), e._prev
            }, t.decrypt = function(e, t) {
                var r = e._prev;
                e._prev = t;
                var i = e._cipher.decryptBlock(t);
                return n(i, r)
            }
        },
        1668: function(e, t, r) {
            var n = r(236);

            function i(e, t, r) {
                var i = t.length,
                    a = n(t, e._cache);
                return e._cache = e._cache.slice(i), e._prev = Buffer.concat([e._prev, r ? t : a]), a
            }
            t.encrypt = function(e, t, r) {
                for (var n, a = new Buffer(""); t.length;) {
                    if (0 === e._cache.length && (e._cache = e._cipher.encryptBlock(e._prev), e._prev = new Buffer("")), !(e._cache.length <= t.length)) {
                        a = Buffer.concat([a, i(e, t, r)]);
                        break
                    }
                    n = e._cache.length, a = Buffer.concat([a, i(e, t.slice(0, n), r)]), t = t.slice(n)
                }
                return a
            }
        },
        1669: function(e, t) {
            function r(e, t, r) {
                var n = e._cipher.encryptBlock(e._prev)[0] ^ t;
                return e._prev = Buffer.concat([e._prev.slice(1), new Buffer([r ? t : n])]), n
            }
            t.encrypt = function(e, t, n) {
                for (var i = t.length, a = new Buffer(i), o = -1; ++o < i;) a[o] = r(e, t[o], n);
                return a
            }
        },
        1670: function(e, t) {
            function r(e, t, r) {
                for (var i, a, o = -1, f = 0; ++o < 8;) i = t & 1 << 7 - o ? 128 : 0, f += (128 & (a = e._cipher.encryptBlock(e._prev)[0] ^ i)) >> o % 8, e._prev = n(e._prev, r ? i : a);
                return f
            }

            function n(e, t) {
                var r = e.length,
                    n = -1,
                    i = new Buffer(e.length);
                for (e = Buffer.concat([e, new Buffer([t])]); ++n < r;) i[n] = e[n] << 1 | e[n + 1] >> 7;
                return i
            }
            t.encrypt = function(e, t, n) {
                for (var i = t.length, a = new Buffer(i), o = -1; ++o < i;) a[o] = r(e, t[o], n);
                return a
            }
        },
        1671: function(e, t, r) {
            var n = r(236);

            function i(e) {
                return e._prev = e._cipher.encryptBlock(e._prev), e._prev
            }
            t.encrypt = function(e, t) {
                for (; e._cache.length < t.length;) e._cache = Buffer.concat([e._cache, i(e)]);
                var r = e._cache.slice(0, t.length);
                return e._cache = e._cache.slice(t.length), n(t, r)
            }
        },
        1672: function(e, t, r) {
            var n = r(72),
                BigInteger = r(109),
                i = BigInteger.valueOf(3);

            function Point(e, t, r, i) {
                n.notStrictEqual(i, void 0, "Missing Z coordinate"), this.curve = e, this.x = t, this.y = r, this.z = i, this._zInv = null, this.compressed = !0
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
            }), Point.fromAffine = function(e, t, r) {
                return new Point(e, t, r, BigInteger.ONE)
            }, Point.prototype.equals = function(e) {
                return e === this || (this.curve.isInfinity(this) ? this.curve.isInfinity(e) : this.curve.isInfinity(e) ? this.curve.isInfinity(this) : 0 === e.y.multiply(this.z).subtract(this.y.multiply(e.z)).mod(this.curve.p).signum() && 0 === e.x.multiply(this.z).subtract(this.x.multiply(e.z)).mod(this.curve.p).signum())
            }, Point.prototype.negate = function() {
                var e = this.curve.p.subtract(this.y);
                return new Point(this.curve, this.x, e, this.z)
            }, Point.prototype.add = function(e) {
                if (this.curve.isInfinity(this)) return e;
                if (this.curve.isInfinity(e)) return this;
                var t = this.x,
                    r = this.y,
                    n = e.x,
                    a = e.y.multiply(this.z).subtract(r.multiply(e.z)).mod(this.curve.p),
                    o = n.multiply(this.z).subtract(t.multiply(e.z)).mod(this.curve.p);
                if (0 === o.signum()) return 0 === a.signum() ? this.twice() : this.curve.infinity;
                var f = o.square(),
                    s = f.multiply(o),
                    u = t.multiply(f),
                    c = a.square().multiply(this.z),
                    h = c.subtract(u.shiftLeft(1)).multiply(e.z).subtract(s).multiply(o).mod(this.curve.p),
                    l = u.multiply(i).multiply(a).subtract(r.multiply(s)).subtract(c.multiply(a)).multiply(e.z).add(a.multiply(s)).mod(this.curve.p),
                    p = s.multiply(this.z).multiply(e.z).mod(this.curve.p);
                return new Point(this.curve, h, l, p)
            }, Point.prototype.twice = function() {
                if (this.curve.isInfinity(this)) return this;
                if (0 === this.y.signum()) return this.curve.infinity;
                var e = this.x,
                    t = this.y,
                    r = t.multiply(this.z).mod(this.curve.p),
                    n = r.multiply(t).mod(this.curve.p),
                    a = this.curve.a,
                    o = e.square().multiply(i);
                0 !== a.signum() && (o = o.add(this.z.square().multiply(a)));
                var f = (o = o.mod(this.curve.p)).square().subtract(e.shiftLeft(3).multiply(n)).shiftLeft(1).multiply(r).mod(this.curve.p),
                    s = o.multiply(i).multiply(e).subtract(n.shiftLeft(1)).shiftLeft(2).multiply(n).subtract(o.pow(3)).mod(this.curve.p),
                    u = r.pow(3).shiftLeft(3).mod(this.curve.p);
                return new Point(this.curve, f, s, u)
            }, Point.prototype.multiply = function(e) {
                if (this.curve.isInfinity(this)) return this;
                if (0 === e.signum()) return this.curve.infinity;
                for (var t = e, r = t.multiply(i), n = this.negate(), a = this, o = r.bitLength() - 2; o > 0; --o) {
                    var f = r.testBit(o),
                        s = t.testBit(o);
                    a = a.twice(), f !== s && (a = a.add(f ? this : n))
                }
                return a
            }, Point.prototype.multiplyTwo = function(e, t, r) {
                for (var n = Math.max(e.bitLength(), r.bitLength()) - 1, i = this.curve.infinity, a = this.add(t); n >= 0;) {
                    var o = e.testBit(n),
                        f = r.testBit(n);
                    i = i.twice(), o ? i = f ? i.add(a) : i.add(this) : f && (i = i.add(t)), --n
                }
                return i
            }, Point.prototype.getEncoded = function(e) {
                if (null == e && (e = this.compressed), this.curve.isInfinity(this)) return new Buffer("00", "hex");
                var t, r = this.affineX,
                    n = this.affineY,
                    i = this.curve.pLength;
                return e ? (t = new Buffer(1 + i)).writeUInt8(n.isEven() ? 2 : 3, 0) : ((t = new Buffer(1 + i + i)).writeUInt8(4, 0), n.toBuffer(i).copy(t, 1 + i)), r.toBuffer(i).copy(t, 1), t
            }, Point.decodeFrom = function(e, t) {
                var r, i = t.readUInt8(0),
                    a = 4 !== i,
                    o = Math.floor((e.p.bitLength() + 7) / 8),
                    f = BigInteger.fromBuffer(t.slice(1, 1 + o));
                if (a) {
                    n.equal(t.length, o + 1, "Invalid sequence length"), n(2 === i || 3 === i, "Invalid sequence tag");
                    var s = 3 === i;
                    r = e.pointFromX(s, f)
                } else {
                    n.equal(t.length, 1 + o + o, "Invalid sequence length");
                    var u = BigInteger.fromBuffer(t.slice(1 + o));
                    r = Point.fromAffine(e, f, u)
                }
                return r.compressed = a, r
            }, Point.prototype.toString = function() {
                return this.curve.isInfinity(this) ? "(INFINITY)" : "(" + this.affineX.toString() + "," + this.affineY.toString() + ")"
            }, e.exports = Point
        },
        1674: function(e, t, r) {
            var n = r(72),
                BigInteger = r(109),
                Point = r(1672);

            function i(e, t, r, n, i, a, o) {
                this.p = e, this.a = t, this.b = r, this.G = Point.fromAffine(this, n, i), this.n = a, this.h = o, this.infinity = new Point(this, null, null, BigInteger.ZERO), this.pOverFour = e.add(BigInteger.ONE).shiftRight(2), this.pLength = Math.floor((this.p.bitLength() + 7) / 8)
            }
            i.prototype.pointFromX = function(e, t) {
                var r = t.pow(3).add(this.a.multiply(t)).add(this.b).mod(this.p).modPow(this.pOverFour, this.p),
                    n = r;
                return r.isEven() ^ !e && (n = this.p.subtract(n)), Point.fromAffine(this, t, n)
            }, i.prototype.isInfinity = function(e) {
                return e === this.infinity || 0 === e.z.signum() && 0 !== e.y.signum()
            }, i.prototype.isOnCurve = function(e) {
                if (this.isInfinity(e)) return !0;
                var t = e.affineX,
                    r = e.affineY,
                    n = this.a,
                    i = this.b,
                    a = this.p;
                if (t.signum() < 0 || t.compareTo(a) >= 0) return !1;
                if (r.signum() < 0 || r.compareTo(a) >= 0) return !1;
                var o = r.square().mod(a),
                    f = t.pow(3).add(n.multiply(t)).add(i).mod(a);
                return o.equals(f)
            }, i.prototype.validate = function(e) {
                n(!this.isInfinity(e), "Point is at infinity"), n(this.isOnCurve(e), "Point is not on the curve");
                var t = e.multiply(this.n);
                return n(this.isInfinity(t), "Point is not a scalar multiple of G"), !0
            }, e.exports = i
        },
        1675: function(e, t, r) {
            "use strict";
            var n = r(18),
                i = r(2941),
                a = r(382),
                o = r(324),
                f = r(153);

            function s(e) {
                f.call(this, "digest"), this._hash = e, this.buffers = []
            }

            function u(e) {
                f.call(this, "digest"), this._hash = e
            }
            n(s, f), s.prototype._update = function(e) {
                this.buffers.push(e)
            }, s.prototype._final = function() {
                var e = Buffer.concat(this.buffers),
                    t = this._hash(e);
                return this.buffers = null, t
            }, n(u, f), u.prototype._update = function(e) {
                this._hash.update(e)
            }, u.prototype._final = function() {
                return this._hash.digest()
            }, e.exports = function(e) {
                return "md5" === (e = e.toLowerCase()) ? new s(i) : new u("rmd160" === e || "ripemd160" === e ? new a : o(e))
            }
        },
        1676: function(e, t, r) {
            "use strict";
            var n = r(589),
                i = n(r(1008)),
                a = n(r(590)),
                o = r(2951),
                f = r(336),
                s = r(1009).getCurveByName("secp256k1"),
                u = r(72),
                BigInteger = r(109),
                c = r(489),
                h = r(488),
                l = r(591);

            function p(e, t, r) {
                function n(e, t) {
                    var r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "utf8";
                    return "string" == typeof e && (e = Buffer.from(e, r)), u(Buffer.isBuffer(e), "data is a required String or Buffer"), i(e = f.sha256(e), t)
                }

                function i(r, n) {
                    var i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "hex";
                    if ("string" == typeof r && (r = Buffer.from(r, i)), 32 !== r.length || !Buffer.isBuffer(r)) throw new Error("dataSha256: 32 bytes required");
                    var a = h(n);
                    return u(a, "pubkey required"), o.verify(s, r, {
                        r: e,
                        s: t
                    }, a.Q)
                }

                function a(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "utf8";
                    return "string" == typeof e && (e = Buffer.from(e, t)), u(Buffer.isBuffer(e), "data is a required String or Buffer"), l(e = f.sha256(e))
                }

                function l(n) {
                    var i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "hex";
                    if ("string" == typeof n && (n = Buffer.from(n, i)), 32 !== n.length || !Buffer.isBuffer(n)) throw new Error("dataSha256: 32 byte String or buffer requred");
                    var a = BigInteger.fromBuffer(n),
                        f = r;
                    f -= 27, f &= 3;
                    var u = o.recoverPubKey(s, a, {
                        r: e,
                        s: t,
                        i: r
                    }, f);
                    return h.fromPoint(u)
                }

                function p() {
                    var n;
                    return (n = new Buffer(65)).writeUInt8(r, 0), e.toBuffer(32).copy(n, 1), t.toBuffer(32).copy(n, 33), n
                }
                var d;
                return u.equal(null != e, !0, "Missing parameter"), u.equal(null != t, !0, "Missing parameter"), u.equal(null != r, !0, "Missing parameter"), {
                    r: e,
                    s: t,
                    i: r,
                    toBuffer: p,
                    verify: n,
                    verifyHash: i,
                    verifyHex: function(e, t) {
                        return console.log('Deprecated: use verify(data, pubkey, "hex")'), n(Buffer.from(e, "hex"), t)
                    },
                    recover: a,
                    recoverHash: l,
                    toHex: function() {
                        return p().toString("hex")
                    },
                    toString: function() {
                        return d || (d = "SIG_K1_" + c.checkEncode(p(), "K1"))
                    },
                    verifyBuffer: function() {
                        return console.log("Deprecated: use signature.verify instead (same arguments)"), n.apply(void 0, arguments)
                    },
                    recoverPublicKey: function() {
                        return console.log("Deprecated: use signature.recover instead (same arguments)"), a.apply(void 0, arguments)
                    },
                    recoverPublicKeyFromBuffer: function() {
                        return console.log("Deprecated: use signature.recoverHash instead (same arguments)"), l.apply(void 0, arguments)
                    }
                }
            }
            e.exports = p, p.sign = function(e, t) {
                var r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "utf8";
                return "string" == typeof e && (e = Buffer.from(e, r)), u(Buffer.isBuffer(e), "data is a required String or Buffer"), e = f.sha256(e), p.signHash(e, t)
            }, p.signHash = function(e, t) {
                var r, n, i, a, f, c, h, d = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "hex";
                if ("string" == typeof e && (e = Buffer.from(e, d)), 32 !== e.length || !Buffer.isBuffer(e)) throw new Error("dataSha256: 32 byte buffer requred");
                for (t = l(t), u(t, "privateKey required"), a = null, h = 0, n = BigInteger.fromBuffer(e);;) {
                    if (c = (r = (i = o.sign(s, e, t.d, h++)).toDER())[5 + (f = r[3])], 32 === f && 32 === c) {
                        a = o.calcPubKeyRecoveryParam(s, n, i, t.toPublic().Q), a += 4, a += 27;
                        break
                    }
                    h % 10 == 0 && console.log("WARN: " + h + " attempts to find canonical signature")
                }
                return p(i.r, i.s, a)
            }, p.fromBuffer = function(e) {
                var t;
                return u(Buffer.isBuffer(e), "Buffer is required"), u.equal(e.length, 65, "Invalid signature length"), t = e.readUInt8(0), u.equal(t - 27, t - 27 & 7, "Invalid signature parameter"), p(BigInteger.fromBuffer(e.slice(1, 33)), BigInteger.fromBuffer(e.slice(33)), t)
            }, p.fromHex = function(e) {
                return p.fromBuffer(Buffer.from(e, "hex"))
            }, p.fromString = function(e) {
                try {
                    return p.fromStringOrThrow(e)
                } catch (e) {
                    return null
                }
            }, p.fromStringOrThrow = function(e) {
                u.equal((0, a.default)(e), "string", "signature");
                var t = e.match(/^SIG_([A-Za-z0-9]+)_([A-Za-z0-9]+)$/);
                u(null != t && 3 === t.length, "Expecting signature like: SIG_K1_base58signature..");
                var r = (0, i.default)(t, 3),
                    n = r[1],
                    o = r[2];
                return u.equal(n, "K1", "K1 signature expected"), p.fromBuffer(c.checkDecode(o, n))
            }, p.from = function(e) {
                var t = e ? e.r && e.s && e.i ? e : "string" == typeof e && 130 === e.length ? p.fromHex(e) : "string" == typeof e && 130 !== e.length ? p.fromStringOrThrow(e) : Buffer.isBuffer(e) ? p.fromBuffer(e) : null : e;
                if (!t) throw new TypeError("signature should be a hex string or buffer");
                return t
            }
        },
        1677: function(e, t, r) {
            "use strict";

            function n(e) {
                var t = e.toString().match(/function (.*?)\(/);
                return t ? t[1] : null
            }
            e.exports = function(e, t) {
                switch (e) {
                    case "Array":
                        if (Array.isArray(t)) return;
                        break;
                    case "Boolean":
                        if ("boolean" == typeof t) return;
                        break;
                    case "Buffer":
                        if (Buffer.isBuffer(t)) return;
                        break;
                    case "Number":
                        if ("number" == typeof t) return;
                        break;
                    case "String":
                        if ("string" == typeof t) return;
                        break;
                    default:
                        if (n(t.constructor) === n(e)) return
                }
                throw new TypeError("Expected " + (n(e) || e) + ", got " + t)
            }
        },
        1678: function(e, t, r) {
            "use strict";
            var n = this && this.__assign || function() {
                    return (n = Object.assign || function(e) {
                        for (var t, r = 1, n = arguments.length; r < n; r++)
                            for (var i in t = arguments[r]) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
                        return e
                    }).apply(this, arguments)
                },
                i = this && this.__read || function(e, t) {
                    var r = "function" == typeof Symbol && e[Symbol.iterator];
                    if (!r) return e;
                    var n, i, a = r.call(e),
                        o = [];
                    try {
                        for (;
                            (void 0 === t || t-- > 0) && !(n = a.next()).done;) o.push(n.value)
                    } catch (e) {
                        i = {
                            error: e
                        }
                    } finally {
                        try {
                            n && !n.done && (r = a.return) && r.call(a)
                        } finally {
                            if (i) throw i.error
                        }
                    }
                    return o
                },
                a = this && this.__spread || function() {
                    for (var e = [], t = 0; t < arguments.length; t++) e = e.concat(i(arguments[t]));
                    return e
                },
                o = this && this.__values || function(e) {
                    var t = "function" == typeof Symbol && e[Symbol.iterator],
                        r = 0;
                    return t ? t.call(e) : {
                        next: function() {
                            return e && r >= e.length && (e = void 0), {
                                value: e && e[r++],
                                done: !e
                            }
                        }
                    }
                };
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var f = r(592),
                s = function(e) {
                    void 0 === e && (e = {}), this.skippedBinaryExtension = !1, this.options = e
                };
            t.SerializerState = s;
            var u = function() {
                function e(e) {
                    var t = void 0 === e ? {} : e,
                        r = t.textEncoder,
                        n = t.textDecoder,
                        i = t.array;
                    this.readPos = 0, this.array = i || new Uint8Array(1024), this.length = i ? i.length : 0, this.textEncoder = r || new TextEncoder, this.textDecoder = n || new TextDecoder("utf-8", {
                        fatal: !0
                    })
                }
                return e.prototype.reserve = function(e) {
                    if (!(this.length + e <= this.array.length)) {
                        for (var t = this.array.length; this.length + e > t;) t = Math.ceil(1.5 * t);
                        var r = new Uint8Array(t);
                        r.set(this.array), this.array = r
                    }
                }, e.prototype.haveReadData = function() {
                    return this.readPos < this.length
                }, e.prototype.restartRead = function() {
                    this.readPos = 0
                }, e.prototype.asUint8Array = function() {
                    return new Uint8Array(this.array.buffer, this.array.byteOffset, this.length)
                }, e.prototype.pushArray = function(e) {
                    this.reserve(e.length), this.array.set(e, this.length), this.length += e.length
                }, e.prototype.push = function() {
                    for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
                    this.pushArray(e)
                }, e.prototype.get = function() {
                    if (this.readPos < this.length) return this.array[this.readPos++];
                    throw new Error("Read past end of buffer")
                }, e.prototype.pushUint8ArrayChecked = function(e, t) {
                    if (e.length !== t) throw new Error("Binary data has incorrect size");
                    this.pushArray(e)
                }, e.prototype.getUint8Array = function(e) {
                    if (this.readPos + e > this.length) throw new Error("Read past end of buffer");
                    var t = new Uint8Array(this.array.buffer, this.array.byteOffset + this.readPos, e);
                    return this.readPos += e, t
                }, e.prototype.pushUint16 = function(e) {
                    this.push(e >> 0 & 255, e >> 8 & 255)
                }, e.prototype.getUint16 = function() {
                    var e = 0;
                    return e |= this.get() << 0, e |= this.get() << 8
                }, e.prototype.pushUint32 = function(e) {
                    this.push(e >> 0 & 255, e >> 8 & 255, e >> 16 & 255, e >> 24 & 255)
                }, e.prototype.getUint32 = function() {
                    var e = 0;
                    return e |= this.get() << 0, e |= this.get() << 8, e |= this.get() << 16, (e |= this.get() << 24) >>> 0
                }, e.prototype.pushNumberAsUint64 = function(e) {
                    this.pushUint32(e >>> 0), this.pushUint32(Math.floor(e / 4294967296) >>> 0)
                }, e.prototype.getUint64AsNumber = function() {
                    var e = this.getUint32();
                    return 4294967296 * (this.getUint32() >>> 0) + (e >>> 0)
                }, e.prototype.pushVaruint32 = function(e) {
                    for (;;) {
                        if (!(e >>> 7)) {
                            this.push(e);
                            break
                        }
                        this.push(128 | 127 & e), e >>>= 7
                    }
                }, e.prototype.getVaruint32 = function() {
                    for (var e = 0, t = 0;;) {
                        var r = this.get();
                        if (e |= (127 & r) << t, t += 7, !(128 & r)) break
                    }
                    return e >>> 0
                }, e.prototype.pushVarint32 = function(e) {
                    this.pushVaruint32(e << 1 ^ e >> 31)
                }, e.prototype.getVarint32 = function() {
                    var e = this.getVaruint32();
                    return 1 & e ? ~e >> 1 | 2147483648 : e >>> 1
                }, e.prototype.pushFloat32 = function(e) {
                    this.pushArray(new Uint8Array(new Float32Array([e]).buffer))
                }, e.prototype.getFloat32 = function() {
                    return new Float32Array(this.getUint8Array(4).slice().buffer)[0]
                }, e.prototype.pushFloat64 = function(e) {
                    this.pushArray(new Uint8Array(new Float64Array([e]).buffer))
                }, e.prototype.getFloat64 = function() {
                    return new Float64Array(this.getUint8Array(8).slice().buffer)[0]
                }, e.prototype.pushName = function(e) {
                    if ("string" != typeof e) throw new Error("Expected string containing name");

                    function t(e) {
                        return e >= "a".charCodeAt(0) && e <= "z".charCodeAt(0) ? e - "a".charCodeAt(0) + 6 : e >= "1".charCodeAt(0) && e <= "5".charCodeAt(0) ? e - "1".charCodeAt(0) + 1 : 0
                    }
                    for (var r = new Uint8Array(8), n = 63, i = 0; i < e.length; ++i) {
                        var a = t(e.charCodeAt(i));
                        n < 5 && (a <<= 1);
                        for (var o = 4; o >= 0; --o) n >= 0 && (r[Math.floor(n / 8)] |= (a >> o & 1) << n % 8, --n)
                    }
                    this.pushArray(r)
                }, e.prototype.getName = function() {
                    for (var e = this.getUint8Array(8), t = "", r = 63; r >= 0;) {
                        for (var n = 0, i = 0; i < 5; ++i) r >= 0 && (n = n << 1 | e[Math.floor(r / 8)] >> r % 8 & 1, --r);
                        t += n >= 6 ? String.fromCharCode(n + "a".charCodeAt(0) - 6) : n >= 1 ? String.fromCharCode(n + "1".charCodeAt(0) - 1) : "."
                    }
                    for (; t.endsWith(".");) t = t.substr(0, t.length - 1);
                    return t
                }, e.prototype.pushBytes = function(e) {
                    this.pushVaruint32(e.length), this.pushArray(e)
                }, e.prototype.getBytes = function() {
                    return this.getUint8Array(this.getVaruint32())
                }, e.prototype.pushString = function(e) {
                    this.pushBytes(this.textEncoder.encode(e))
                }, e.prototype.getString = function() {
                    return this.textDecoder.decode(this.getBytes())
                }, e.prototype.pushSymbolCode = function(e) {
                    if ("string" != typeof e) throw new Error("Expected string containing symbol_code");
                    var t = [];
                    for (t.push.apply(t, a(this.textEncoder.encode(e))); t.length < 8;) t.push(0);
                    this.pushArray(t.slice(0, 8))
                }, e.prototype.getSymbolCode = function() {
                    var e, t = this.getUint8Array(8);
                    for (e = 0; e < t.length && t[e]; ++e);
                    return this.textDecoder.decode(new Uint8Array(t.buffer, t.byteOffset, e))
                }, e.prototype.pushSymbol = function(e) {
                    var t = e.name,
                        r = [255 & e.precision];
                    for (r.push.apply(r, a(this.textEncoder.encode(t))); r.length < 8;) r.push(0);
                    this.pushArray(r.slice(0, 8))
                }, e.prototype.getSymbol = function() {
                    var e, t = this.get(),
                        r = this.getUint8Array(7);
                    for (e = 0; e < r.length && r[e]; ++e);
                    return {
                        name: this.textDecoder.decode(new Uint8Array(r.buffer, r.byteOffset, e)),
                        precision: t
                    }
                }, e.prototype.pushAsset = function(e) {
                    if ("string" != typeof e) throw new Error("Expected string containing asset");
                    var t = 0,
                        r = "",
                        n = 0;
                    "-" === (e = e.trim())[t] && (r += "-", ++t);
                    for (var i = !1; t < e.length && e.charCodeAt(t) >= "0".charCodeAt(0) && e.charCodeAt(t) <= "9".charCodeAt(0);) i = !0, r += e[t], ++t;
                    if (!i) throw new Error("Asset must begin with a number");
                    if ("." === e[t])
                        for (++t; t < e.length && e.charCodeAt(t) >= "0".charCodeAt(0) && e.charCodeAt(t) <= "9".charCodeAt(0);) r += e[t], ++n, ++t;
                    var a = e.substr(t).trim();
                    this.pushArray(f.signedDecimalToBinary(8, r)), this.pushSymbol({
                        name: a,
                        precision: n
                    })
                }, e.prototype.getAsset = function() {
                    var e = this.getUint8Array(8),
                        t = this.getSymbol(),
                        r = t.name,
                        n = t.precision,
                        i = f.signedBinaryToDecimal(e, n + 1);
                    return n && (i = i.substr(0, i.length - n) + "." + i.substr(i.length - n)), i + " " + r
                }, e.prototype.pushPublicKey = function(e) {
                    var t = f.stringToPublicKey(e);
                    this.push(t.type), this.pushArray(t.data)
                }, e.prototype.getPublicKey = function() {
                    var e = this.get(),
                        t = this.getUint8Array(f.publicKeyDataSize);
                    return f.publicKeyToString({
                        type: e,
                        data: t
                    })
                }, e.prototype.pushPrivateKey = function(e) {
                    var t = f.stringToPrivateKey(e);
                    this.push(t.type), this.pushArray(t.data)
                }, e.prototype.getPrivateKey = function() {
                    var e = this.get(),
                        t = this.getUint8Array(f.privateKeyDataSize);
                    return f.privateKeyToString({
                        type: e,
                        data: t
                    })
                }, e.prototype.pushSignature = function(e) {
                    var t = f.stringToSignature(e);
                    this.push(t.type), this.pushArray(t.data)
                }, e.prototype.getSignature = function() {
                    var e = this.get(),
                        t = this.getUint8Array(f.signatureDataSize);
                    return f.signatureToString({
                        type: e,
                        data: t
                    })
                }, e
            }();

            function c(e) {
                var t = Date.parse(e);
                if (Number.isNaN(t)) throw new Error("Invalid time format");
                return t
            }

            function h(e) {
                return Math.round(1e3 * c(e + "Z"))
            }

            function l(e) {
                var t = new Date(e / 1e3).toISOString();
                return t.substr(0, t.length - 1)
            }

            function p(e) {
                return Math.round(c(e + "Z") / 1e3)
            }

            function d(e) {
                var t = new Date(1e3 * e).toISOString();
                return t.substr(0, t.length - 1)
            }

            function y(e) {
                return Math.round((c(e + "Z") - 9466848e5) / 500)
            }

            function v(e) {
                var t = new Date(500 * e + 9466848e5).toISOString();
                return t.substr(0, t.length - 1)
            }

            function g(e) {
                if ("string" != typeof e) throw new Error("Expected string containing symbol");
                var t = e.match(/^([0-9]+),([A-Z]+)$/);
                if (!t) throw new Error("Invalid symbol");
                return {
                    name: t[2],
                    precision: +t[1]
                }
            }

            function m(e) {
                var t = e.name;
                return e.precision + "," + t
            }

            function b(e) {
                var t, r, n = "";
                try {
                    for (var i = o(e), a = i.next(); !a.done; a = i.next()) {
                        n += ("00" + a.value.toString(16)).slice(-2)
                    }
                } catch (e) {
                    t = {
                        error: e
                    }
                } finally {
                    try {
                        a && !a.done && (r = i.return) && r.call(i)
                    } finally {
                        if (t) throw t.error
                    }
                }
                return n.toUpperCase()
            }

            function w(e) {
                if ("string" != typeof e) throw new Error("Expected string containing hex digits");
                if (e.length % 2) throw new Error("Odd number of hex digits");
                for (var t = e.length / 2, r = new Uint8Array(t), n = 0; n < t; ++n) {
                    var i = parseInt(e.substr(2 * n, 2), 16);
                    if (Number.isNaN(i)) throw new Error("Expected hex string");
                    r[n] = i
                }
                return r
            }

            function _(e, t) {
                throw new Error("Don't know how to serialize " + this.name)
            }

            function B(e) {
                throw new Error("Don't know how to deserialize " + this.name)
            }

            function S(e, t, r, n) {
                var i, a;
                if (void 0 === r && (r = new s), void 0 === n && (n = !0), "object" != typeof t) throw new Error("expected object containing data: " + JSON.stringify(t));
                this.base && this.base.serialize(e, t, r, n);
                try {
                    for (var f = o(this.fields), u = f.next(); !u.done; u = f.next()) {
                        var c = u.value;
                        if (c.name in t) {
                            if (r.skippedBinaryExtension) throw new Error("unexpected " + this.name + "." + c.name);
                            c.type.serialize(e, t[c.name], r, n && c === this.fields[this.fields.length - 1])
                        } else {
                            if (!n || !c.type.extensionOf) throw new Error("missing " + this.name + "." + c.name + " (type=" + c.type.name + ")");
                            r.skippedBinaryExtension = !0
                        }
                    }
                } catch (e) {
                    i = {
                        error: e
                    }
                } finally {
                    try {
                        u && !u.done && (a = f.return) && a.call(f)
                    } finally {
                        if (i) throw i.error
                    }
                }
            }

            function x(e, t, r) {
                var n, i, a;
                void 0 === t && (t = new s), void 0 === r && (r = !0), a = this.base ? this.base.deserialize(e, t, r) : {};
                try {
                    for (var f = o(this.fields), u = f.next(); !u.done; u = f.next()) {
                        var c = u.value;
                        r && c.type.extensionOf && !e.haveReadData() ? t.skippedBinaryExtension = !0 : a[c.name] = c.type.deserialize(e, t, r)
                    }
                } catch (e) {
                    n = {
                        error: e
                    }
                } finally {
                    try {
                        u && !u.done && (i = f.return) && i.call(f)
                    } finally {
                        if (n) throw n.error
                    }
                }
                return a
            }

            function k(e, t, r, n) {
                if (!Array.isArray(t) || 2 !== t.length || "string" != typeof t[0]) throw new Error('expected variant: ["type", value]');
                var i = this.fields.findIndex((function(e) {
                    return e.name === t[0]
                }));
                if (i < 0) throw new Error('type "' + t[0] + '" is not valid for variant');
                e.pushVaruint32(i), this.fields[i].type.serialize(e, t[1], r, n)
            }

            function E(e, t, r) {
                var n = e.getVaruint32();
                if (n >= this.fields.length) throw new Error("type index " + n + " is not valid for variant");
                var i = this.fields[n];
                return [i.name, i.type.deserialize(e, t, r)]
            }

            function A(e, t, r, n) {
                var i, a;
                e.pushVaruint32(t.length);
                try {
                    for (var f = o(t), s = f.next(); !s.done; s = f.next()) {
                        var u = s.value;
                        this.arrayOf.serialize(e, u, r, !1)
                    }
                } catch (e) {
                    i = {
                        error: e
                    }
                } finally {
                    try {
                        s && !s.done && (a = f.return) && a.call(f)
                    } finally {
                        if (i) throw i.error
                    }
                }
            }

            function z(e, t, r) {
                for (var n = e.getVaruint32(), i = [], a = 0; a < n; ++a) i.push(this.arrayOf.deserialize(e, t, !1));
                return i
            }

            function T(e, t, r, n) {
                null == t ? e.push(0) : (e.push(1), this.optionalOf.serialize(e, t, r, n))
            }

            function I(e, t, r) {
                return e.get() ? this.optionalOf.deserialize(e, t, r) : null
            }

            function U(e, t, r, n) {
                this.extensionOf.serialize(e, t, r, n)
            }

            function C(e, t, r) {
                return this.extensionOf.deserialize(e, t, r)
            }

            function P(e) {
                return n({
                    name: "<missing name>",
                    aliasOfName: "",
                    arrayOf: null,
                    optionalOf: null,
                    extensionOf: null,
                    baseName: "",
                    base: null,
                    fields: [],
                    serialize: _,
                    deserialize: B
                }, e)
            }

            function O(e, t) {
                if (Number.isNaN(+e) || Number.isNaN(+t) || "number" != typeof e && "string" != typeof e) throw new Error("Expected number");
                if (+e != +t) throw new Error("Number is out of range");
                return +e
            }

            function D(e, t) {
                var r = e.get(t);
                if (r && r.aliasOfName) return D(e, r.aliasOfName);
                if (r) return r;
                if (t.endsWith("[]")) return P({
                    name: t,
                    arrayOf: D(e, t.substr(0, t.length - 2)),
                    serialize: A,
                    deserialize: z
                });
                if (t.endsWith("?")) return P({
                    name: t,
                    optionalOf: D(e, t.substr(0, t.length - 1)),
                    serialize: T,
                    deserialize: I
                });
                if (t.endsWith("$")) return P({
                    name: t,
                    extensionOf: D(e, t.substr(0, t.length - 1)),
                    serialize: U,
                    deserialize: C
                });
                throw new Error("Unknown type: " + t)
            }

            function K(e, t, r, n, i, a) {
                var o = e.actions.get(r);
                if (!o) throw new Error("Unknown action " + r + " in contract " + t);
                var f = new u({
                    textEncoder: i,
                    textDecoder: a
                });
                return o.serialize(f, n), b(f.asUint8Array())
            }

            function N(e, t, r, n, i, a) {
                var o = e.actions.get(r);
                if ("string" == typeof n && (n = w(n)), !o) throw new Error("Unknown action " + r + " in contract " + t);
                var f = new u({
                    textDecoder: a,
                    textEncoder: i
                });
                return f.pushArray(n), o.deserialize(f)
            }
            t.SerialBuffer = u, t.supportedAbiVersion = function(e) {
                return e.startsWith("eosio::abi/1.")
            }, t.dateToTimePoint = h, t.timePointToDate = l, t.dateToTimePointSec = p, t.timePointSecToDate = d, t.dateToBlockTimestamp = y, t.blockTimestampToDate = v, t.stringToSymbol = g, t.symbolToString = m, t.arrayToHex = b, t.hexToUint8Array = w, t.createInitialTypes = function() {
                var e = new Map(Object.entries({
                    bool: P({
                        name: "bool",
                        serialize: function(e, t) {
                            if ("boolean" != typeof t) throw new Error("Expected true or false");
                            e.push(t ? 1 : 0)
                        },
                        deserialize: function(e) {
                            return !!e.get()
                        }
                    }),
                    uint8: P({
                        name: "uint8",
                        serialize: function(e, t) {
                            e.push(O(t, 255 & t))
                        },
                        deserialize: function(e) {
                            return e.get()
                        }
                    }),
                    int8: P({
                        name: "int8",
                        serialize: function(e, t) {
                            e.push(O(t, t << 24 >> 24))
                        },
                        deserialize: function(e) {
                            return e.get() << 24 >> 24
                        }
                    }),
                    uint16: P({
                        name: "uint16",
                        serialize: function(e, t) {
                            e.pushUint16(O(t, 65535 & t))
                        },
                        deserialize: function(e) {
                            return e.getUint16()
                        }
                    }),
                    int16: P({
                        name: "int16",
                        serialize: function(e, t) {
                            e.pushUint16(O(t, t << 16 >> 16))
                        },
                        deserialize: function(e) {
                            return e.getUint16() << 16 >> 16
                        }
                    }),
                    uint32: P({
                        name: "uint32",
                        serialize: function(e, t) {
                            e.pushUint32(O(t, t >>> 0))
                        },
                        deserialize: function(e) {
                            return e.getUint32()
                        }
                    }),
                    uint64: P({
                        name: "uint64",
                        serialize: function(e, t) {
                            e.pushArray(f.decimalToBinary(8, "" + t))
                        },
                        deserialize: function(e) {
                            return f.binaryToDecimal(e.getUint8Array(8))
                        }
                    }),
                    int64: P({
                        name: "int64",
                        serialize: function(e, t) {
                            e.pushArray(f.signedDecimalToBinary(8, "" + t))
                        },
                        deserialize: function(e) {
                            return f.signedBinaryToDecimal(e.getUint8Array(8))
                        }
                    }),
                    int32: P({
                        name: "int32",
                        serialize: function(e, t) {
                            e.pushUint32(O(t, 0 | t))
                        },
                        deserialize: function(e) {
                            return 0 | e.getUint32()
                        }
                    }),
                    varuint32: P({
                        name: "varuint32",
                        serialize: function(e, t) {
                            e.pushVaruint32(O(t, t >>> 0))
                        },
                        deserialize: function(e) {
                            return e.getVaruint32()
                        }
                    }),
                    varint32: P({
                        name: "varint32",
                        serialize: function(e, t) {
                            e.pushVarint32(O(t, 0 | t))
                        },
                        deserialize: function(e) {
                            return e.getVarint32()
                        }
                    }),
                    uint128: P({
                        name: "uint128",
                        serialize: function(e, t) {
                            e.pushArray(f.decimalToBinary(16, "" + t))
                        },
                        deserialize: function(e) {
                            return f.binaryToDecimal(e.getUint8Array(16))
                        }
                    }),
                    int128: P({
                        name: "int128",
                        serialize: function(e, t) {
                            e.pushArray(f.signedDecimalToBinary(16, "" + t))
                        },
                        deserialize: function(e) {
                            return f.signedBinaryToDecimal(e.getUint8Array(16))
                        }
                    }),
                    float32: P({
                        name: "float32",
                        serialize: function(e, t) {
                            e.pushFloat32(t)
                        },
                        deserialize: function(e) {
                            return e.getFloat32()
                        }
                    }),
                    float64: P({
                        name: "float64",
                        serialize: function(e, t) {
                            e.pushFloat64(t)
                        },
                        deserialize: function(e) {
                            return e.getFloat64()
                        }
                    }),
                    float128: P({
                        name: "float128",
                        serialize: function(e, t) {
                            e.pushUint8ArrayChecked(w(t), 16)
                        },
                        deserialize: function(e) {
                            return b(e.getUint8Array(16))
                        }
                    }),
                    bytes: P({
                        name: "bytes",
                        serialize: function(e, t) {
                            t instanceof Uint8Array || Array.isArray(t) ? e.pushBytes(t) : e.pushBytes(w(t))
                        },
                        deserialize: function(e, t) {
                            return t && t.options.bytesAsUint8Array ? e.getBytes() : b(e.getBytes())
                        }
                    }),
                    string: P({
                        name: "string",
                        serialize: function(e, t) {
                            e.pushString(t)
                        },
                        deserialize: function(e) {
                            return e.getString()
                        }
                    }),
                    name: P({
                        name: "name",
                        serialize: function(e, t) {
                            e.pushName(t)
                        },
                        deserialize: function(e) {
                            return e.getName()
                        }
                    }),
                    time_point: P({
                        name: "time_point",
                        serialize: function(e, t) {
                            e.pushNumberAsUint64(h(t))
                        },
                        deserialize: function(e) {
                            return l(e.getUint64AsNumber())
                        }
                    }),
                    time_point_sec: P({
                        name: "time_point_sec",
                        serialize: function(e, t) {
                            e.pushUint32(p(t))
                        },
                        deserialize: function(e) {
                            return d(e.getUint32())
                        }
                    }),
                    block_timestamp_type: P({
                        name: "block_timestamp_type",
                        serialize: function(e, t) {
                            e.pushUint32(y(t))
                        },
                        deserialize: function(e) {
                            return v(e.getUint32())
                        }
                    }),
                    symbol_code: P({
                        name: "symbol_code",
                        serialize: function(e, t) {
                            e.pushSymbolCode(t)
                        },
                        deserialize: function(e) {
                            return e.getSymbolCode()
                        }
                    }),
                    symbol: P({
                        name: "symbol",
                        serialize: function(e, t) {
                            e.pushSymbol(g(t))
                        },
                        deserialize: function(e) {
                            return m(e.getSymbol())
                        }
                    }),
                    asset: P({
                        name: "asset",
                        serialize: function(e, t) {
                            e.pushAsset(t)
                        },
                        deserialize: function(e) {
                            return e.getAsset()
                        }
                    }),
                    checksum160: P({
                        name: "checksum160",
                        serialize: function(e, t) {
                            e.pushUint8ArrayChecked(w(t), 20)
                        },
                        deserialize: function(e) {
                            return b(e.getUint8Array(20))
                        }
                    }),
                    checksum256: P({
                        name: "checksum256",
                        serialize: function(e, t) {
                            e.pushUint8ArrayChecked(w(t), 32)
                        },
                        deserialize: function(e) {
                            return b(e.getUint8Array(32))
                        }
                    }),
                    checksum512: P({
                        name: "checksum512",
                        serialize: function(e, t) {
                            e.pushUint8ArrayChecked(w(t), 64)
                        },
                        deserialize: function(e) {
                            return b(e.getUint8Array(64))
                        }
                    }),
                    public_key: P({
                        name: "public_key",
                        serialize: function(e, t) {
                            e.pushPublicKey(t)
                        },
                        deserialize: function(e) {
                            return e.getPublicKey()
                        }
                    }),
                    private_key: P({
                        name: "private_key",
                        serialize: function(e, t) {
                            e.pushPrivateKey(t)
                        },
                        deserialize: function(e) {
                            return e.getPrivateKey()
                        }
                    }),
                    signature: P({
                        name: "signature",
                        serialize: function(e, t) {
                            e.pushSignature(t)
                        },
                        deserialize: function(e) {
                            return e.getSignature()
                        }
                    })
                }));
                return e.set("extended_asset", P({
                    name: "extended_asset",
                    baseName: "",
                    fields: [{
                        name: "quantity",
                        typeName: "asset",
                        type: e.get("asset")
                    }, {
                        name: "contract",
                        typeName: "name",
                        type: e.get("name")
                    }],
                    serialize: S,
                    deserialize: x
                })), e
            }, t.getType = D, t.getTypesFromAbi = function(e, t) {
                var r, n, a, f, s, u, c, h, l, p, d = new Map(e);
                if (t.types) try {
                    for (var y = o(t.types), v = y.next(); !v.done; v = y.next()) {
                        var g = v.value,
                            m = g.new_type_name,
                            b = g.type;
                        d.set(m, P({
                            name: m,
                            aliasOfName: b
                        }))
                    }
                } catch (e) {
                    r = {
                        error: e
                    }
                } finally {
                    try {
                        v && !v.done && (n = y.return) && n.call(y)
                    } finally {
                        if (r) throw r.error
                    }
                }
                if (t.structs) try {
                    for (var w = o(t.structs), _ = w.next(); !_.done; _ = w.next()) {
                        var B = _.value,
                            A = B.name,
                            z = B.base,
                            T = B.fields;
                        d.set(A, P({
                            name: A,
                            baseName: z,
                            fields: T.map((function(e) {
                                return {
                                    name: e.name,
                                    typeName: e.type,
                                    type: null
                                }
                            })),
                            serialize: S,
                            deserialize: x
                        }))
                    }
                } catch (e) {
                    a = {
                        error: e
                    }
                } finally {
                    try {
                        _ && !_.done && (f = w.return) && f.call(w)
                    } finally {
                        if (a) throw a.error
                    }
                }
                if (t.variants) try {
                    for (var I = o(t.variants), U = I.next(); !U.done; U = I.next()) {
                        var C = U.value,
                            O = C.name,
                            K = C.types;
                        d.set(O, P({
                            name: O,
                            fields: K.map((function(e) {
                                return {
                                    name: e,
                                    typeName: e,
                                    type: null
                                }
                            })),
                            serialize: k,
                            deserialize: E
                        }))
                    }
                } catch (e) {
                    s = {
                        error: e
                    }
                } finally {
                    try {
                        U && !U.done && (u = I.return) && u.call(I)
                    } finally {
                        if (s) throw s.error
                    }
                }
                try {
                    for (var N = o(d), R = N.next(); !R.done; R = N.next()) {
                        var F = i(R.value, 2);
                        F[0];
                        (b = F[1]).baseName && (b.base = D(d, b.baseName));
                        try {
                            for (var M = o(b.fields), q = M.next(); !q.done; q = M.next()) {
                                var j = q.value;
                                j.type = D(d, j.typeName)
                            }
                        } catch (e) {
                            l = {
                                error: e
                            }
                        } finally {
                            try {
                                q && !q.done && (p = M.return) && p.call(M)
                            } finally {
                                if (l) throw l.error
                            }
                        }
                    }
                } catch (e) {
                    c = {
                        error: e
                    }
                } finally {
                    try {
                        R && !R.done && (h = N.return) && h.call(N)
                    } finally {
                        if (c) throw c.error
                    }
                }
                return d
            }, t.transactionHeader = function(e, t) {
                return {
                    expiration: d(p(e.timestamp) + t),
                    ref_block_num: 65535 & e.block_num,
                    ref_block_prefix: e.ref_block_prefix
                }
            }, t.serializeActionData = K, t.serializeAction = function(e, t, r, n, i, a, o) {
                return {
                    account: t,
                    name: r,
                    authorization: n,
                    data: K(e, t, r, i, a, o)
                }
            }, t.deserializeActionData = N, t.deserializeAction = function(e, t, r, n, i, a, o) {
                return {
                    account: t,
                    name: r,
                    authorization: n,
                    data: N(e, t, r, i, a, o)
                }
            }
        },
        1679: function(e, t, r) {
            "use strict";
            var n, i = this && this.__extends || (n = function(e, t) {
                return (n = Object.setPrototypeOf || {
                        __proto__: []
                    }
                    instanceof Array && function(e, t) {
                        e.__proto__ = t
                    } || function(e, t) {
                        for (var r in t) t.hasOwnProperty(r) && (e[r] = t[r])
                    })(e, t)
            }, function(e, t) {
                function r() {
                    this.constructor = e
                }
                n(e, t), e.prototype = null === t ? Object.create(t) : (r.prototype = t.prototype, new r)
            });
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var a = function(e) {
                function t(r) {
                    var n = this;
                    return n = r.error && r.error.details && r.error.details.length && r.error.details[0].message ? e.call(this, r.error.details[0].message) || this : r.processed && r.processed.except && r.processed.except.message ? e.call(this, r.processed.except.message) || this : e.call(this, r.message) || this, Object.setPrototypeOf(n, t.prototype), n.json = r, n
                }
                return i(t, e), t
            }(Error);
            t.RpcError = a
        },
        2359: function(e, t, r) {
            "use strict";
            var n = r(2928),
                i = r(2953),
                a = Object.assign({}, n, i);
            e.exports = a
        },
        2927: function(e, t, r) {
            "use strict";
            var n = this && this.__awaiter || function(e, t, r, n) {
                    return new(r || (r = Promise))((function(i, a) {
                        function o(e) {
                            try {
                                s(n.next(e))
                            } catch (e) {
                                a(e)
                            }
                        }

                        function f(e) {
                            try {
                                s(n.throw(e))
                            } catch (e) {
                                a(e)
                            }
                        }

                        function s(e) {
                            e.done ? i(e.value) : new r((function(t) {
                                t(e.value)
                            })).then(o, f)
                        }
                        s((n = n.apply(e, t || [])).next())
                    }))
                },
                i = this && this.__generator || function(e, t) {
                    var r, n, i, a, o = {
                        label: 0,
                        sent: function() {
                            if (1 & i[0]) throw i[1];
                            return i[1]
                        },
                        trys: [],
                        ops: []
                    };
                    return a = {
                        next: f(0),
                        throw: f(1),
                        return: f(2)
                    }, "function" == typeof Symbol && (a[Symbol.iterator] = function() {
                        return this
                    }), a;

                    function f(a) {
                        return function(f) {
                            return function(a) {
                                if (r) throw new TypeError("Generator is already executing.");
                                for (; o;) try {
                                    if (r = 1, n && (i = 2 & a[0] ? n.return : a[0] ? n.throw || ((i = n.return) && i.call(n), 0) : n.next) && !(i = i.call(n, a[1])).done) return i;
                                    switch (n = 0, i && (a = [2 & a[0], i.value]), a[0]) {
                                        case 0:
                                        case 1:
                                            i = a;
                                            break;
                                        case 4:
                                            return o.label++, {
                                                value: a[1],
                                                done: !1
                                            };
                                        case 5:
                                            o.label++, n = a[1], a = [0];
                                            continue;
                                        case 7:
                                            a = o.ops.pop(), o.trys.pop();
                                            continue;
                                        default:
                                            if (!(i = o.trys, (i = i.length > 0 && i[i.length - 1]) || 6 !== a[0] && 2 !== a[0])) {
                                                o = 0;
                                                continue
                                            }
                                            if (3 === a[0] && (!i || a[1] > i[0] && a[1] < i[3])) {
                                                o.label = a[1];
                                                break
                                            }
                                            if (6 === a[0] && o.label < i[1]) {
                                                o.label = i[1], i = a;
                                                break
                                            }
                                            if (i && o.label < i[2]) {
                                                o.label = i[2], o.ops.push(a);
                                                break
                                            }
                                            i[2] && o.ops.pop(), o.trys.pop();
                                            continue
                                    }
                                    a = t.call(e, o)
                                } catch (e) {
                                    a = [6, e], n = 0
                                } finally {
                                    r = i = 0
                                }
                                if (5 & a[0]) throw a[1];
                                return {
                                    value: a[0] ? a[1] : void 0,
                                    done: !0
                                }
                            }([a, f])
                        }
                    }
                },
                a = this && this.__values || function(e) {
                    var t = "function" == typeof Symbol && e[Symbol.iterator],
                        r = 0;
                    return t ? t.call(e) : {
                        next: function() {
                            return e && r >= e.length && (e = void 0), {
                                value: e && e[r++],
                                done: !e
                            }
                        }
                    }
                };
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var o = r(2359),
                f = r(592),
                s = function() {
                    function e(e) {
                        var t, r;
                        this.keys = new Map, this.availableKeys = [];
                        try {
                            for (var n = a(e), i = n.next(); !i.done; i = n.next()) {
                                var s = i.value,
                                    u = f.convertLegacyPublicKey(o.PrivateKey.fromString(s).toPublic().toString());
                                this.keys.set(u, s), this.availableKeys.push(u)
                            }
                        } catch (e) {
                            t = {
                                error: e
                            }
                        } finally {
                            try {
                                i && !i.done && (r = n.return) && r.call(n)
                            } finally {
                                if (t) throw t.error
                            }
                        }
                    }
                    return e.prototype.getAvailableKeys = function() {
                        return n(this, void 0, void 0, (function() {
                            return i(this, (function(e) {
                                return [2, this.availableKeys]
                            }))
                        }))
                    }, e.prototype.sign = function(e) {
                        var t = e.chainId,
                            r = e.requiredKeys,
                            a = e.serializedTransaction;
                        return n(this, void 0, void 0, (function() {
                            var e, n = this;
                            return i(this, (function(i) {
                                return e = Buffer.concat([new Buffer(t, "hex"), new Buffer(a), new Buffer(new Uint8Array(32))]), [2, {
                                    signatures: r.map((function(t) {
                                        return o.Signature.sign(e, n.keys.get(f.convertLegacyPublicKey(t))).toString()
                                    })),
                                    serializedTransaction: a
                                }]
                            }))
                        }))
                    }, e
                }();
            t.JsSignatureProvider = s
        },
        2928: function(e, t, r) {
            "use strict";
            r(1662);
            var n = r(591),
                i = r(488),
                a = r(1676),
                o = (r(489), r(336)),
                f = {
                    initialize: n.initialize,
                    unsafeRandomKey: function() {
                        return n.unsafeRandomKey().then((function(e) {
                            return e.toString()
                        }))
                    },
                    randomKey: function(e) {
                        return n.randomKey(e).then((function(e) {
                            return e.toString()
                        }))
                    },
                    seedPrivate: function(e) {
                        return n.fromSeed(e).toString()
                    },
                    privateToPublic: function(e) {
                        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "EOS";
                        return n(e).toPublic().toString(t)
                    },
                    isValidPublic: function(e) {
                        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "EOS";
                        return i.isValid(e, t)
                    },
                    isValidPrivate: function(e) {
                        return n.isValid(e)
                    },
                    sign: function(e, t) {
                        var r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "utf8";
                        if (!0 === r) throw new TypeError("API changed, use signHash(..) instead");
                        return !1 === r && console.log("Warning: ecc.sign hashData parameter was removed"), a.sign(e, t, r).toString()
                    },
                    signHash: function(e, t) {
                        var r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "hex";
                        return a.signHash(e, t, r).toString()
                    },
                    verify: function(e, t, r) {
                        var n = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "utf8";
                        if (!0 === n) throw new TypeError("API changed, use verifyHash(..) instead");
                        return !1 === n && console.log("Warning: ecc.verify hashData parameter was removed"), (e = a.from(e)).verify(t, r, n)
                    },
                    verifyHash: function(e, t, r) {
                        var n = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "hex";
                        return (e = a.from(e)).verifyHash(t, r, n)
                    },
                    recover: function(e, t) {
                        var r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "utf8";
                        if (!0 === r) throw new TypeError("API changed, use recoverHash(signature, data) instead");
                        return !1 === r && console.log("Warning: ecc.recover hashData parameter was removed"), (e = a.from(e)).recover(t, r).toString()
                    },
                    recoverHash: function(e, t) {
                        var r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "hex";
                        return (e = a.from(e)).recoverHash(t, r).toString()
                    },
                    sha256: function(e) {
                        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "hex";
                        return o.sha256(e, t)
                    }
                };
            e.exports = f
        },
        2930: function(e, t, r) {
            var n = r(2931);
            t.createCipher = t.Cipher = n.createCipher, t.createCipheriv = t.Cipheriv = n.createCipheriv;
            var i = r(2933);
            t.createDecipher = t.Decipher = i.createDecipher, t.createDecipheriv = t.Decipheriv = i.createDecipheriv;
            var a = r(1007);
            t.listCiphers = t.getCiphers = function() {
                return Object.keys(a)
            }
        },
        2931: function(e, t, r) {
            var n = r(587),
                i = r(153),
                a = r(18),
                o = r(1007),
                f = r(390),
                s = r(1664),
                u = r(1665);

            function c(e, t, r) {
                if (!(this instanceof c)) return new c(e, t, r);
                i.call(this), this._cache = new h, this._cipher = new n.AES(t), this._prev = new Buffer(r.length), r.copy(this._prev), this._mode = e, this._autopadding = !0
            }

            function h() {
                if (!(this instanceof h)) return new h;
                this.cache = new Buffer("")
            }
            a(c, i), c.prototype._update = function(e) {
                var t, r;
                this._cache.add(e);
                for (var n = []; t = this._cache.get();) r = this._mode.encrypt(this, t), n.push(r);
                return Buffer.concat(n)
            }, c.prototype._final = function() {
                var e = this._cache.flush();
                if (this._autopadding) return e = this._mode.encrypt(this, e), this._cipher.scrub(), e;
                if ("10101010101010101010101010101010" !== e.toString("hex")) throw this._cipher.scrub(), new Error("data not multiple of block length")
            }, c.prototype.setAutoPadding = function(e) {
                return this._autopadding = !!e, this
            }, h.prototype.add = function(e) {
                this.cache = Buffer.concat([this.cache, e])
            }, h.prototype.get = function() {
                if (this.cache.length > 15) {
                    var e = this.cache.slice(0, 16);
                    return this.cache = this.cache.slice(16), e
                }
                return null
            }, h.prototype.flush = function() {
                for (var e = 16 - this.cache.length, t = new Buffer(e), r = -1; ++r < e;) t.writeUInt8(e, r);
                return Buffer.concat([this.cache, t])
            };
            var l = {
                ECB: r(1666),
                CBC: r(1667),
                CFB: r(1668),
                CFB8: r(1669),
                CFB1: r(1670),
                OFB: r(1671),
                CTR: r(588),
                GCM: r(588)
            };

            function p(e, t, r) {
                var n = o[e.toLowerCase()];
                if (!n) throw new TypeError("invalid suite type");
                if ("string" == typeof r && (r = new Buffer(r)), "string" == typeof t && (t = new Buffer(t)), t.length !== n.key / 8) throw new TypeError("invalid key length " + t.length);
                if (r.length !== n.iv) throw new TypeError("invalid iv length " + r.length);
                return "stream" === n.type ? new s(l[n.mode], t, r) : "auth" === n.type ? new u(l[n.mode], t, r) : new c(l[n.mode], t, r)
            }
            t.createCipheriv = p, t.createCipher = function(e, t) {
                var r = o[e.toLowerCase()];
                if (!r) throw new TypeError("invalid suite type");
                var n = f(t, !1, r.key, r.iv);
                return p(e, n.key, n.iv)
            }
        },
        2932: function(e, t) {
            var r = new Buffer(16);

            function n(e) {
                this.h = e, this.state = new Buffer(16), this.state.fill(0), this.cache = new Buffer("")
            }

            function i(e) {
                e = e.map(o);
                var t = new Buffer(16);
                return t.writeUInt32BE(e[0], 0), t.writeUInt32BE(e[1], 4), t.writeUInt32BE(e[2], 8), t.writeUInt32BE(e[3], 12), t
            }
            r.fill(0), e.exports = n, n.prototype.ghash = function(e) {
                for (var t = -1; ++t < e.length;) this.state[t] ^= e[t];
                this._multiply()
            }, n.prototype._multiply = function() {
                for (var e, t, r, n, a, o = [(e = this.h).readUInt32BE(0), e.readUInt32BE(4), e.readUInt32BE(8), e.readUInt32BE(12)], f = [0, 0, 0, 0], s = -1; ++s < 128;) {
                    for (0 != (this.state[~~(s / 8)] & 1 << 7 - s % 8) && (a = o, f = [(n = f)[0] ^ a[0], n[1] ^ a[1], n[2] ^ a[2], n[3] ^ a[3]]), r = 0 != (1 & o[3]), t = 3; t > 0; t--) o[t] = o[t] >>> 1 | (1 & o[t - 1]) << 31;
                    o[0] = o[0] >>> 1, r && (o[0] = o[0] ^ 225 << 24)
                }
                this.state = i(f)
            }, n.prototype.update = function(e) {
                var t;
                for (this.cache = Buffer.concat([this.cache, e]); this.cache.length >= 16;) t = this.cache.slice(0, 16), this.cache = this.cache.slice(16), this.ghash(t)
            }, n.prototype.final = function(e, t) {
                return this.cache.length && this.ghash(Buffer.concat([this.cache, r], 16)), this.ghash(i([0, e, 0, t])), this.state
            };
            var a = Math.pow(2, 32);

            function o(e) {
                var t;
                return e > a || e < 0 ? (t = Math.abs(e) % a, e < 0 ? a - t : t) : e
            }
        },
        2933: function(e, t, r) {
            var n = r(587),
                i = r(153),
                a = r(18),
                o = r(1007),
                f = r(1664),
                s = r(1665),
                u = r(390);

            function c(e, t, r) {
                if (!(this instanceof c)) return new c(e, t, r);
                i.call(this), this._cache = new h, this._last = void 0, this._cipher = new n.AES(t), this._prev = new Buffer(r.length), r.copy(this._prev), this._mode = e, this._autopadding = !0
            }

            function h() {
                if (!(this instanceof h)) return new h;
                this.cache = new Buffer("")
            }
            a(c, i), c.prototype._update = function(e) {
                var t, r;
                this._cache.add(e);
                for (var n = []; t = this._cache.get(this._autopadding);) r = this._mode.decrypt(this, t), n.push(r);
                return Buffer.concat(n)
            }, c.prototype._final = function() {
                var e = this._cache.flush();
                if (this._autopadding) return function(e) {
                    var t = e[15],
                        r = -1;
                    for (; ++r < t;)
                        if (e[r + (16 - t)] !== t) throw new Error("unable to decrypt data");
                    if (16 === t) return;
                    return e.slice(0, 16 - t)
                }(this._mode.decrypt(this, e));
                if (e) throw new Error("data not multiple of block length")
            }, c.prototype.setAutoPadding = function(e) {
                return this._autopadding = !!e, this
            }, h.prototype.add = function(e) {
                this.cache = Buffer.concat([this.cache, e])
            }, h.prototype.get = function(e) {
                var t;
                if (e) {
                    if (this.cache.length > 16) return t = this.cache.slice(0, 16), this.cache = this.cache.slice(16), t
                } else if (this.cache.length >= 16) return t = this.cache.slice(0, 16), this.cache = this.cache.slice(16), t;
                return null
            }, h.prototype.flush = function() {
                if (this.cache.length) return this.cache
            };
            var l = {
                ECB: r(1666),
                CBC: r(1667),
                CFB: r(1668),
                CFB8: r(1669),
                CFB1: r(1670),
                OFB: r(1671),
                CTR: r(588),
                GCM: r(588)
            };

            function p(e, t, r) {
                var n = o[e.toLowerCase()];
                if (!n) throw new TypeError("invalid suite type");
                if ("string" == typeof r && (r = new Buffer(r)), "string" == typeof t && (t = new Buffer(t)), t.length !== n.key / 8) throw new TypeError("invalid key length " + t.length);
                if (r.length !== n.iv) throw new TypeError("invalid iv length " + r.length);
                return "stream" === n.type ? new f(l[n.mode], t, r, !0) : "auth" === n.type ? new s(l[n.mode], t, r, !0) : new c(l[n.mode], t, r)
            }
            t.createDecipher = function(e, t) {
                var r = o[e.toLowerCase()];
                if (!r) throw new TypeError("invalid suite type");
                var n = u(t, !1, r.key, r.iv);
                return p(e, n.key, n.iv)
            }, t.createDecipheriv = p
        },
        2934: function(e, t) {
            e.exports = function(e) {
                if (Array.isArray(e)) return e
            }
        },
        2935: function(e, t) {
            e.exports = function(e, t) {
                if (Symbol.iterator in Object(e) || "[object Arguments]" === Object.prototype.toString.call(e)) {
                    var r = [],
                        n = !0,
                        i = !1,
                        a = void 0;
                    try {
                        for (var o, f = e[Symbol.iterator](); !(n = (o = f.next()).done) && (r.push(o.value), !t || r.length !== t); n = !0);
                    } catch (e) {
                        i = !0, a = e
                    } finally {
                        try {
                            n || null == f.return || f.return()
                        } finally {
                            if (i) throw a
                        }
                    }
                    return r
                }
            }
        },
        2936: function(e, t) {
            e.exports = function() {
                throw new TypeError("Invalid attempt to destructure non-iterable instance")
            }
        },
        2939: function(e, t, r) {
            var BigInteger = r(109),
                n = r(2940),
                i = r(1674);
            e.exports = function(e) {
                var t = n[e];
                if (!t) return null;
                var r = new BigInteger(t.p, 16),
                    a = new BigInteger(t.a, 16),
                    o = new BigInteger(t.b, 16),
                    f = new BigInteger(t.n, 16),
                    s = new BigInteger(t.h, 16),
                    u = new BigInteger(t.Gx, 16),
                    c = new BigInteger(t.Gy, 16);
                return new i(r, a, o, u, c, f, s)
            }
        },
        2940: function(e) {
            e.exports = JSON.parse('{"secp128r1":{"p":"fffffffdffffffffffffffffffffffff","a":"fffffffdfffffffffffffffffffffffc","b":"e87579c11079f43dd824993c2cee5ed3","n":"fffffffe0000000075a30d1b9038a115","h":"01","Gx":"161ff7528b899b2d0c28607ca52c5b86","Gy":"cf5ac8395bafeb13c02da292dded7a83"},"secp160k1":{"p":"fffffffffffffffffffffffffffffffeffffac73","a":"00","b":"07","n":"0100000000000000000001b8fa16dfab9aca16b6b3","h":"01","Gx":"3b4c382ce37aa192a4019e763036f4f5dd4d7ebb","Gy":"938cf935318fdced6bc28286531733c3f03c4fee"},"secp160r1":{"p":"ffffffffffffffffffffffffffffffff7fffffff","a":"ffffffffffffffffffffffffffffffff7ffffffc","b":"1c97befc54bd7a8b65acf89f81d4d4adc565fa45","n":"0100000000000000000001f4c8f927aed3ca752257","h":"01","Gx":"4a96b5688ef573284664698968c38bb913cbfc82","Gy":"23a628553168947d59dcc912042351377ac5fb32"},"secp192k1":{"p":"fffffffffffffffffffffffffffffffffffffffeffffee37","a":"00","b":"03","n":"fffffffffffffffffffffffe26f2fc170f69466a74defd8d","h":"01","Gx":"db4ff10ec057e9ae26b07d0280b7f4341da5d1b1eae06c7d","Gy":"9b2f2f6d9c5628a7844163d015be86344082aa88d95e2f9d"},"secp192r1":{"p":"fffffffffffffffffffffffffffffffeffffffffffffffff","a":"fffffffffffffffffffffffffffffffefffffffffffffffc","b":"64210519e59c80e70fa7e9ab72243049feb8deecc146b9b1","n":"ffffffffffffffffffffffff99def836146bc9b1b4d22831","h":"01","Gx":"188da80eb03090f67cbf20eb43a18800f4ff0afd82ff1012","Gy":"07192b95ffc8da78631011ed6b24cdd573f977a11e794811"},"secp256k1":{"p":"fffffffffffffffffffffffffffffffffffffffffffffffffffffffefffffc2f","a":"00","b":"07","n":"fffffffffffffffffffffffffffffffebaaedce6af48a03bbfd25e8cd0364141","h":"01","Gx":"79be667ef9dcbbac55a06295ce870b07029bfcdb2dce28d959f2815b16f81798","Gy":"483ada7726a3c4655da4fbfc0e1108a8fd17b448a68554199c47d08ffb10d4b8"},"secp256r1":{"p":"ffffffff00000001000000000000000000000000ffffffffffffffffffffffff","a":"ffffffff00000001000000000000000000000000fffffffffffffffffffffffc","b":"5ac635d8aa3a93e7b3ebbd55769886bc651d06b0cc53b0f63bce3c3e27d2604b","n":"ffffffff00000000ffffffffffffffffbce6faada7179e84f3b9cac2fc632551","h":"01","Gx":"6b17d1f2e12c4247f8bce6e563a440f277037d812deb33a0f4a13945d898c296","Gy":"4fe342e2fe1a7f9b8ee7eb4a7c0f9e162bce33576b315ececbb6406837bf51f5"}}')
        },
        2941: function(e, t, r) {
            "use strict";
            var n = r(2942);

            function i(e, t) {
                e[t >> 5] |= 128 << t % 32, e[14 + (t + 64 >>> 9 << 4)] = t;
                for (var r = 1732584193, n = -271733879, i = -1732584194, a = 271733878, h = 0; h < e.length; h += 16) {
                    var l = r,
                        p = n,
                        d = i,
                        y = a;
                    r = o(r, n, i, a, e[h + 0], 7, -680876936), a = o(a, r, n, i, e[h + 1], 12, -389564586), i = o(i, a, r, n, e[h + 2], 17, 606105819), n = o(n, i, a, r, e[h + 3], 22, -1044525330), r = o(r, n, i, a, e[h + 4], 7, -176418897), a = o(a, r, n, i, e[h + 5], 12, 1200080426), i = o(i, a, r, n, e[h + 6], 17, -1473231341), n = o(n, i, a, r, e[h + 7], 22, -45705983), r = o(r, n, i, a, e[h + 8], 7, 1770035416), a = o(a, r, n, i, e[h + 9], 12, -1958414417), i = o(i, a, r, n, e[h + 10], 17, -42063), n = o(n, i, a, r, e[h + 11], 22, -1990404162), r = o(r, n, i, a, e[h + 12], 7, 1804603682), a = o(a, r, n, i, e[h + 13], 12, -40341101), i = o(i, a, r, n, e[h + 14], 17, -1502002290), r = f(r, n = o(n, i, a, r, e[h + 15], 22, 1236535329), i, a, e[h + 1], 5, -165796510), a = f(a, r, n, i, e[h + 6], 9, -1069501632), i = f(i, a, r, n, e[h + 11], 14, 643717713), n = f(n, i, a, r, e[h + 0], 20, -373897302), r = f(r, n, i, a, e[h + 5], 5, -701558691), a = f(a, r, n, i, e[h + 10], 9, 38016083), i = f(i, a, r, n, e[h + 15], 14, -660478335), n = f(n, i, a, r, e[h + 4], 20, -405537848), r = f(r, n, i, a, e[h + 9], 5, 568446438), a = f(a, r, n, i, e[h + 14], 9, -1019803690), i = f(i, a, r, n, e[h + 3], 14, -187363961), n = f(n, i, a, r, e[h + 8], 20, 1163531501), r = f(r, n, i, a, e[h + 13], 5, -1444681467), a = f(a, r, n, i, e[h + 2], 9, -51403784), i = f(i, a, r, n, e[h + 7], 14, 1735328473), r = s(r, n = f(n, i, a, r, e[h + 12], 20, -1926607734), i, a, e[h + 5], 4, -378558), a = s(a, r, n, i, e[h + 8], 11, -2022574463), i = s(i, a, r, n, e[h + 11], 16, 1839030562), n = s(n, i, a, r, e[h + 14], 23, -35309556), r = s(r, n, i, a, e[h + 1], 4, -1530992060), a = s(a, r, n, i, e[h + 4], 11, 1272893353), i = s(i, a, r, n, e[h + 7], 16, -155497632), n = s(n, i, a, r, e[h + 10], 23, -1094730640), r = s(r, n, i, a, e[h + 13], 4, 681279174), a = s(a, r, n, i, e[h + 0], 11, -358537222), i = s(i, a, r, n, e[h + 3], 16, -722521979), n = s(n, i, a, r, e[h + 6], 23, 76029189), r = s(r, n, i, a, e[h + 9], 4, -640364487), a = s(a, r, n, i, e[h + 12], 11, -421815835), i = s(i, a, r, n, e[h + 15], 16, 530742520), r = u(r, n = s(n, i, a, r, e[h + 2], 23, -995338651), i, a, e[h + 0], 6, -198630844), a = u(a, r, n, i, e[h + 7], 10, 1126891415), i = u(i, a, r, n, e[h + 14], 15, -1416354905), n = u(n, i, a, r, e[h + 5], 21, -57434055), r = u(r, n, i, a, e[h + 12], 6, 1700485571), a = u(a, r, n, i, e[h + 3], 10, -1894986606), i = u(i, a, r, n, e[h + 10], 15, -1051523), n = u(n, i, a, r, e[h + 1], 21, -2054922799), r = u(r, n, i, a, e[h + 8], 6, 1873313359), a = u(a, r, n, i, e[h + 15], 10, -30611744), i = u(i, a, r, n, e[h + 6], 15, -1560198380), n = u(n, i, a, r, e[h + 13], 21, 1309151649), r = u(r, n, i, a, e[h + 4], 6, -145523070), a = u(a, r, n, i, e[h + 11], 10, -1120210379), i = u(i, a, r, n, e[h + 2], 15, 718787259), n = u(n, i, a, r, e[h + 9], 21, -343485551), r = c(r, l), n = c(n, p), i = c(i, d), a = c(a, y)
                }
                return [r, n, i, a]
            }

            function a(e, t, r, n, i, a) {
                return c((o = c(c(t, e), c(n, a))) << (f = i) | o >>> 32 - f, r);
                var o, f
            }

            function o(e, t, r, n, i, o, f) {
                return a(t & r | ~t & n, e, t, i, o, f)
            }

            function f(e, t, r, n, i, o, f) {
                return a(t & n | r & ~n, e, t, i, o, f)
            }

            function s(e, t, r, n, i, o, f) {
                return a(t ^ r ^ n, e, t, i, o, f)
            }

            function u(e, t, r, n, i, o, f) {
                return a(r ^ (t | ~n), e, t, i, o, f)
            }

            function c(e, t) {
                var r = (65535 & e) + (65535 & t);
                return (e >> 16) + (t >> 16) + (r >> 16) << 16 | 65535 & r
            }
            e.exports = function(e) {
                return n(e, i)
            }
        },
        2942: function(e, t, r) {
            "use strict";
            var n = new Buffer(4);
            n.fill(0);
            e.exports = function(e, t) {
                var r = t(function(e) {
                    if (e.length % 4 != 0) {
                        var t = e.length + (4 - e.length % 4);
                        e = Buffer.concat([e, n], t)
                    }
                    for (var r = new Array(e.length >>> 2), i = 0, a = 0; i < e.length; i += 4, a++) r[a] = e.readInt32LE(i);
                    return r
                }(e), 8 * e.length);
                e = new Buffer(16);
                for (var i = 0; i < r.length; i++) e.writeInt32LE(r[i], i << 2, !0);
                return e
            }
        },
        2943: function(e, t, r) {
            "use strict";
            var n = r(18),
                i = r(2944),
                a = r(153),
                o = r(21).Buffer,
                f = r(2945),
                s = r(382),
                u = r(324),
                c = o.alloc(128);

            function h(e, t) {
                a.call(this, "digest"), "string" == typeof t && (t = o.from(t));
                var r = "sha512" === e || "sha384" === e ? 128 : 64;
                (this._alg = e, this._key = t, t.length > r) ? t = ("rmd160" === e ? new s : u(e)).update(t).digest(): t.length < r && (t = o.concat([t, c], r));
                for (var n = this._ipad = o.allocUnsafe(r), i = this._opad = o.allocUnsafe(r), f = 0; f < r; f++) n[f] = 54 ^ t[f], i[f] = 92 ^ t[f];
                this._hash = "rmd160" === e ? new s : u(e), this._hash.update(n)
            }
            n(h, a), h.prototype._update = function(e) {
                this._hash.update(e)
            }, h.prototype._final = function() {
                var e = this._hash.digest();
                return ("rmd160" === this._alg ? new s : u(this._alg)).update(this._opad).update(e).digest()
            }, e.exports = function(e, t) {
                return "rmd160" === (e = e.toLowerCase()) || "ripemd160" === e ? new h("rmd160", t) : "md5" === e ? new i(f, t) : new h(e, t)
            }
        },
        2944: function(e, t, r) {
            "use strict";
            var n = r(18),
                i = r(21).Buffer,
                a = r(153),
                o = i.alloc(128);

            function f(e, t) {
                a.call(this, "digest"), "string" == typeof t && (t = i.from(t)), this._alg = e, this._key = t, t.length > 64 ? t = e(t) : t.length < 64 && (t = i.concat([t, o], 64));
                for (var r = this._ipad = i.allocUnsafe(64), n = this._opad = i.allocUnsafe(64), f = 0; f < 64; f++) r[f] = 54 ^ t[f], n[f] = 92 ^ t[f];
                this._hash = [r]
            }
            n(f, a), f.prototype._update = function(e) {
                this._hash.push(e)
            }, f.prototype._final = function() {
                var e = this._alg(i.concat(this._hash));
                return this._alg(i.concat([this._opad, e]))
            }, e.exports = f
        },
        2945: function(e, t, r) {
            var n = r(579);
            e.exports = function(e) {
                return (new n).update(e).digest()
            }
        },
        2946: function(e, t, r) {
            var n = r(2947),
                i = r(2948),
                a = r(2949);
            e.exports = function(e) {
                return n(e) || i(e) || a()
            }
        },
        2947: function(e, t) {
            e.exports = function(e) {
                if (Array.isArray(e)) {
                    for (var t = 0, r = new Array(e.length); t < e.length; t++) r[t] = e[t];
                    return r
                }
            }
        },
        2948: function(e, t) {
            e.exports = function(e) {
                if (Symbol.iterator in Object(e) || "[object Arguments]" === Object.prototype.toString.call(e)) return Array.from(e)
            }
        },
        2949: function(e, t) {
            e.exports = function() {
                throw new TypeError("Invalid attempt to spread non-iterable instance")
            }
        },
        2950: function(e, t, r) {
            "use strict";
            e.exports = function(e) {
                return function() {
                    for (var t = arguments.length, r = new Array(t), n = 0; n < t; n++) r[n] = arguments[n];
                    return new Promise((function(t, n) {
                        setTimeout((function() {
                            try {
                                t(e.apply(void 0, r))
                            } catch (e) {
                                n(e)
                            }
                        }))
                    }))
                }
            }
        },
        2951: function(e, t, r) {
            "use strict";
            var n = r(72),
                i = r(336),
                a = r(1677),
                BigInteger = r(109),
                ECSignature = r(2952);

            function o(e, t, r, o, f) {
                a("Buffer", t), a(BigInteger, r), f && (t = i.sha256(Buffer.concat([t, new Buffer(f)]))), n.equal(t.length, 32, "Hash must be 256 bit");
                var s = r.toBuffer(32),
                    u = new Buffer(32),
                    c = new Buffer(32);
                c.fill(1), u.fill(0), u = i.HmacSHA256(Buffer.concat([c, new Buffer([0]), s, t]), u), c = i.HmacSHA256(c, u), u = i.HmacSHA256(Buffer.concat([c, new Buffer([1]), s, t]), u), c = i.HmacSHA256(c, u), c = i.HmacSHA256(c, u);
                for (var h = BigInteger.fromBuffer(c); h.signum() <= 0 || h.compareTo(e.n) >= 0 || !o(h);) u = i.HmacSHA256(Buffer.concat([c, new Buffer([0])]), u), c = i.HmacSHA256(c, u), c = i.HmacSHA256(c, u), h = BigInteger.fromBuffer(c);
                return h
            }

            function f(e, t, r, n) {
                var i = e.n,
                    a = e.G,
                    o = r.r,
                    f = r.s;
                if (o.signum() <= 0 || o.compareTo(i) >= 0) return !1;
                if (f.signum() <= 0 || f.compareTo(i) >= 0) return !1;
                var s = f.modInverse(i),
                    u = t.multiply(s).mod(i),
                    c = o.multiply(s).mod(i),
                    h = a.multiplyTwo(u, n, c);
                return !e.isInfinity(h) && h.affineX.mod(i).equals(o)
            }

            function s(e, t, r, i) {
                n.strictEqual(3 & i, i, "Recovery param is more than two bits");
                var a = e.n,
                    o = e.G,
                    f = r.r,
                    s = r.s;
                n(f.signum() > 0 && f.compareTo(a) < 0, "Invalid r value"), n(s.signum() > 0 && s.compareTo(a) < 0, "Invalid s value");
                var u = 1 & i,
                    c = i >> 1 ? f.add(a) : f,
                    h = e.pointFromX(u, c),
                    l = h.multiply(a);
                n(e.isInfinity(l), "nR is not a valid curve point");
                var p = t.negate().mod(a),
                    d = f.modInverse(a),
                    y = h.multiplyTwo(s, o, p).multiply(d);
                return e.validate(y), y
            }
            e.exports = {
                calcPubKeyRecoveryParam: function(e, t, r, n) {
                    for (var i = 0; i < 4; i++) {
                        if (s(e, t, r, i).equals(n)) return i
                    }
                    throw new Error("Unable to find valid recovery factor")
                },
                deterministicGenerateK: o,
                recoverPubKey: s,
                sign: function(e, t, r, n) {
                    var i, a, f = BigInteger.fromBuffer(t),
                        s = e.n,
                        u = e.G,
                        c = (o(e, t, r, (function(t) {
                            var n = u.multiply(t);
                            return !e.isInfinity(n) && (0 !== (i = n.affineX.mod(s)).signum() && 0 !== (a = t.modInverse(s).multiply(f.add(r.multiply(i))).mod(s)).signum())
                        }), n), s.shiftRight(1));
                    return a.compareTo(c) > 0 && (a = s.subtract(a)), ECSignature(i, a)
                },
                verify: function(e, t, r, n) {
                    return f(e, BigInteger.fromBuffer(t), r, n)
                },
                verifyRaw: f
            }
        },
        2952: function(e, t, r) {
            "use strict";
            var n = r(72),
                i = r(1677),
                BigInteger = r(109);

            function ECSignature(e, t) {
                function r() {
                    var r = e.toDERInteger(),
                        n = t.toDERInteger(),
                        i = [];
                    return i.push(2, r.length), (i = i.concat(r)).push(2, n.length), (i = i.concat(n)).unshift(48, i.length), new Buffer(i)
                }
                return i(BigInteger, e), i(BigInteger, t), {
                    r: e,
                    s: t,
                    toCompact: function(r, n) {
                        n && (r += 4), r += 27;
                        var i = new Buffer(65);
                        return i.writeUInt8(r, 0), e.toBuffer(32).copy(i, 1), t.toBuffer(32).copy(i, 33), i
                    },
                    toDER: r,
                    toScriptSignature: function(e) {
                        var t = new Buffer(1);
                        return t.writeUInt8(e, 0), Buffer.concat([r(), t])
                    }
                }
            }
            ECSignature.parseCompact = function(e) {
                n.equal(e.length, 65, "Invalid signature length");
                var t = e.readUInt8(0) - 27;
                return n.equal(t, 7 & t, "Invalid signature parameter"), {
                    compressed: !!(4 & t),
                    i: t &= 3,
                    signature: ECSignature(BigInteger.fromBuffer(e.slice(1, 33)), BigInteger.fromBuffer(e.slice(33)))
                }
            }, ECSignature.fromDER = function(e) {
                n.equal(e.readUInt8(0), 48, "Not a DER sequence"), n.equal(e.readUInt8(1), e.length - 2, "Invalid sequence length"), n.equal(e.readUInt8(2), 2, "Expected a DER integer");
                var t = e.readUInt8(3);
                n(t > 0, "R length is zero");
                var r = 4 + t;
                n.equal(e.readUInt8(r), 2, "Expected a DER integer (2)");
                var i = e.readUInt8(r + 1);
                n(i > 0, "S length is zero");
                var a = e.slice(4, r),
                    o = e.slice(r + 2);
                r += 2 + i, t > 1 && 0 === a.readUInt8(0) && n(128 & a.readUInt8(1), "R value excessively padded"), i > 1 && 0 === o.readUInt8(0) && n(128 & o.readUInt8(1), "S value excessively padded"), n.equal(r, e.length, "Invalid DER encoding");
                var f = BigInteger.fromDERInteger(a),
                    s = BigInteger.fromDERInteger(o);
                return n(f.signum() >= 0, "R value is negative"), n(s.signum() >= 0, "S value is negative"), ECSignature(f, s)
            }, ECSignature.parseScriptSignature = function(e) {
                var t = e.readUInt8(e.length - 1),
                    r = -129 & t;
                return n(r > 0 && r < 4, "Invalid hashType"), {
                    signature: ECSignature.fromDER(e.slice(0, -1)),
                    hashType: t
                }
            }, e.exports = ECSignature
        },
        2953: function(e, t, r) {
            "use strict";
            var n = r(1662),
                i = r(591),
                a = r(488),
                o = r(1676),
                f = r(489);
            e.exports = {
                Aes: n,
                PrivateKey: i,
                PublicKey: a,
                Signature: o,
                key_utils: f
            }
        },
        2954: function(e, t, r) {
            "use strict";
            var n = function(e, t) {
                    if (Array.isArray(e)) return e;
                    if (Symbol.iterator in Object(e)) return function(e, t) {
                        var r = [],
                            n = !0,
                            i = !1,
                            a = void 0;
                        try {
                            for (var o, f = e[Symbol.iterator](); !(n = (o = f.next()).done) && (r.push(o.value), !t || r.length !== t); n = !0);
                        } catch (e) {
                            i = !0, a = e
                        } finally {
                            try {
                                !n && f.return && f.return()
                            } finally {
                                if (i) throw a
                            }
                        }
                        return r
                    }(e, t);
                    throw new TypeError("Invalid attempt to destructure non-iterable instance")
                },
                i = function() {
                    function e(e, t) {
                        for (var r = 0; r < t.length; r++) {
                            var n = t[r];
                            n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
                        }
                    }
                    return function(t, r, n) {
                        return r && e(t.prototype, r), n && e(t, n), t
                    }
                }();
            var a = function() {
                function e() {
                    ! function(e, t) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                    }(this, e)
                }
                return i(e, null, [{
                    key: "get_n_pad_bytes",
                    value: function(e) {
                        return 64 - (e + 8 & 63)
                    }
                }, {
                    key: "pad",
                    value: function(t) {
                        var r, i, a = t.byteLength,
                            o = e.get_n_pad_bytes(a),
                            f = (r = a, i = 536870912, [Math.floor(r / i), r % i]).map((function(e, t) {
                                return t ? 8 * e : e
                            })),
                            s = n(f, 2),
                            u = s[0],
                            c = s[1],
                            h = new Uint8Array(a + o + 8);
                        h.set(new Uint8Array(t), 0);
                        var l = new DataView(h.buffer);
                        return l.setUint8(a, 128), l.setUint32(a + o, c, !0), l.setUint32(a + o + 4, u, !0), h.buffer
                    }
                }, {
                    key: "f",
                    value: function(e, t, r, n) {
                        return 0 <= e && e <= 15 ? t ^ r ^ n : 16 <= e && e <= 31 ? t & r | ~t & n : 32 <= e && e <= 47 ? (t | ~r) ^ n : 48 <= e && e <= 63 ? t & n | r & ~n : 64 <= e && e <= 79 ? t ^ (r | ~n) : void 0
                    }
                }, {
                    key: "K",
                    value: function(e) {
                        return 0 <= e && e <= 15 ? 0 : 16 <= e && e <= 31 ? 1518500249 : 32 <= e && e <= 47 ? 1859775393 : 48 <= e && e <= 63 ? 2400959708 : 64 <= e && e <= 79 ? 2840853838 : void 0
                    }
                }, {
                    key: "KP",
                    value: function(e) {
                        return 0 <= e && e <= 15 ? 1352829926 : 16 <= e && e <= 31 ? 1548603684 : 32 <= e && e <= 47 ? 1836072691 : 48 <= e && e <= 63 ? 2053994217 : 64 <= e && e <= 79 ? 0 : void 0
                    }
                }, {
                    key: "add_modulo32",
                    value: function() {
                        return 0 | Array.from(arguments).reduce((function(e, t) {
                            return e + t
                        }), 0)
                    }
                }, {
                    key: "rol32",
                    value: function(e, t) {
                        return e << t | e >>> 32 - t
                    }
                }, {
                    key: "hash",
                    value: function(t) {
                        for (var r = e.pad(t), n = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 7, 4, 13, 1, 10, 6, 15, 3, 12, 0, 9, 5, 2, 14, 11, 8, 3, 10, 14, 4, 9, 15, 8, 1, 2, 7, 0, 6, 13, 11, 5, 12, 1, 9, 11, 10, 0, 8, 12, 4, 13, 3, 7, 15, 14, 5, 6, 2, 4, 0, 5, 9, 7, 12, 2, 10, 14, 1, 3, 8, 11, 6, 15, 13], i = [5, 14, 7, 0, 9, 2, 11, 4, 13, 6, 15, 8, 1, 10, 3, 12, 6, 11, 3, 7, 0, 13, 5, 10, 14, 15, 8, 12, 4, 9, 1, 2, 15, 5, 1, 3, 7, 14, 6, 9, 11, 8, 12, 2, 10, 0, 4, 13, 8, 6, 4, 1, 3, 11, 15, 0, 5, 12, 2, 13, 9, 7, 10, 14, 12, 15, 10, 4, 1, 5, 8, 7, 6, 2, 13, 14, 0, 3, 9, 11], a = [11, 14, 15, 12, 5, 8, 7, 9, 11, 13, 14, 15, 6, 7, 9, 8, 7, 6, 8, 13, 11, 9, 7, 15, 7, 12, 15, 9, 11, 7, 13, 12, 11, 13, 6, 7, 14, 9, 13, 15, 14, 8, 13, 6, 5, 12, 7, 5, 11, 12, 14, 15, 14, 15, 9, 8, 9, 14, 5, 6, 8, 6, 5, 12, 9, 15, 5, 11, 6, 8, 13, 12, 5, 12, 13, 14, 11, 8, 5, 6], o = [8, 9, 9, 11, 13, 15, 15, 5, 7, 7, 8, 11, 14, 14, 12, 6, 9, 13, 15, 7, 12, 8, 9, 11, 7, 7, 12, 7, 6, 15, 13, 11, 9, 7, 15, 11, 8, 6, 6, 14, 12, 13, 5, 14, 13, 13, 7, 5, 15, 5, 8, 11, 14, 14, 6, 14, 6, 9, 12, 9, 12, 5, 15, 8, 8, 5, 12, 9, 12, 5, 14, 6, 8, 13, 6, 5, 15, 13, 11, 11], f = r.byteLength / 64, s = new Array(f).fill(void 0).map((function(e, t) {
                                return function(e) {
                                    return new DataView(r, 64 * t, 64).getUint32(4 * e, !0)
                                }
                            })), u = [1732584193, 4023233417, 2562383102, 271733878, 3285377520], c = 0; c < f; ++c) {
                            for (var h = u[0], l = u[1], p = u[2], d = u[3], y = u[4], v = h, g = l, m = p, b = d, w = y, _ = 0; _ < 80; ++_) {
                                var B = e.add_modulo32(e.rol32(e.add_modulo32(h, e.f(_, l, p, d), s[c](n[_]), e.K(_)), a[_]), y);
                                h = y, y = d, d = e.rol32(p, 10), p = l, l = B, B = e.add_modulo32(e.rol32(e.add_modulo32(v, e.f(79 - _, g, m, b), s[c](i[_]), e.KP(_)), o[_]), w), v = w, w = b, b = e.rol32(m, 10), m = g, g = B
                            }
                            var S = e.add_modulo32(u[1], p, b);
                            u[1] = e.add_modulo32(u[2], d, w), u[2] = e.add_modulo32(u[3], y, v), u[3] = e.add_modulo32(u[4], h, g), u[4] = e.add_modulo32(u[0], l, m), u[0] = S
                        }
                        var x = new ArrayBuffer(20),
                            k = new DataView(x);
                        return u.forEach((function(e, t) {
                            return k.setUint32(4 * t, e, !0)
                        })), x
                    }
                }]), e
            }();
            e.exports = {
                RIPEMD160: a
            }
        },
        2955: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var n = r(2956);
            t.Api = n.Api;
            var i = r(2959);
            t.ApiInterfaces = i;
            var a = r(2960);
            t.JsonRpc = a.JsonRpc;
            var o = r(592);
            t.Numeric = o;
            var f = r(2961);
            t.RpcInterfaces = f;
            var s = r(1679);
            t.RpcError = s.RpcError;
            var u = r(1678);
            t.Serialize = u
        },
        2956: function(e, t, r) {
            "use strict";
            var n = this && this.__assign || function() {
                    return (n = Object.assign || function(e) {
                        for (var t, r = 1, n = arguments.length; r < n; r++)
                            for (var i in t = arguments[r]) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
                        return e
                    }).apply(this, arguments)
                },
                i = this && this.__awaiter || function(e, t, r, n) {
                    return new(r || (r = Promise))((function(i, a) {
                        function o(e) {
                            try {
                                s(n.next(e))
                            } catch (e) {
                                a(e)
                            }
                        }

                        function f(e) {
                            try {
                                s(n.throw(e))
                            } catch (e) {
                                a(e)
                            }
                        }

                        function s(e) {
                            e.done ? i(e.value) : new r((function(t) {
                                t(e.value)
                            })).then(o, f)
                        }
                        s((n = n.apply(e, t || [])).next())
                    }))
                },
                a = this && this.__generator || function(e, t) {
                    var r, n, i, a, o = {
                        label: 0,
                        sent: function() {
                            if (1 & i[0]) throw i[1];
                            return i[1]
                        },
                        trys: [],
                        ops: []
                    };
                    return a = {
                        next: f(0),
                        throw: f(1),
                        return: f(2)
                    }, "function" == typeof Symbol && (a[Symbol.iterator] = function() {
                        return this
                    }), a;

                    function f(a) {
                        return function(f) {
                            return function(a) {
                                if (r) throw new TypeError("Generator is already executing.");
                                for (; o;) try {
                                    if (r = 1, n && (i = 2 & a[0] ? n.return : a[0] ? n.throw || ((i = n.return) && i.call(n), 0) : n.next) && !(i = i.call(n, a[1])).done) return i;
                                    switch (n = 0, i && (a = [2 & a[0], i.value]), a[0]) {
                                        case 0:
                                        case 1:
                                            i = a;
                                            break;
                                        case 4:
                                            return o.label++, {
                                                value: a[1],
                                                done: !1
                                            };
                                        case 5:
                                            o.label++, n = a[1], a = [0];
                                            continue;
                                        case 7:
                                            a = o.ops.pop(), o.trys.pop();
                                            continue;
                                        default:
                                            if (!(i = o.trys, (i = i.length > 0 && i[i.length - 1]) || 6 !== a[0] && 2 !== a[0])) {
                                                o = 0;
                                                continue
                                            }
                                            if (3 === a[0] && (!i || a[1] > i[0] && a[1] < i[3])) {
                                                o.label = a[1];
                                                break
                                            }
                                            if (6 === a[0] && o.label < i[1]) {
                                                o.label = i[1], i = a;
                                                break
                                            }
                                            if (i && o.label < i[2]) {
                                                o.label = i[2], o.ops.push(a);
                                                break
                                            }
                                            i[2] && o.ops.pop(), o.trys.pop();
                                            continue
                                    }
                                    a = t.call(e, o)
                                } catch (e) {
                                    a = [6, e], n = 0
                                } finally {
                                    r = i = 0
                                }
                                if (5 & a[0]) throw a[1];
                                return {
                                    value: a[0] ? a[1] : void 0,
                                    done: !0
                                }
                            }([a, f])
                        }
                    }
                },
                o = this && this.__rest || function(e, t) {
                    var r = {};
                    for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
                    if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
                        var i = 0;
                        for (n = Object.getOwnPropertySymbols(e); i < n.length; i++) t.indexOf(n[i]) < 0 && (r[n[i]] = e[n[i]])
                    }
                    return r
                },
                f = this && this.__read || function(e, t) {
                    var r = "function" == typeof Symbol && e[Symbol.iterator];
                    if (!r) return e;
                    var n, i, a = r.call(e),
                        o = [];
                    try {
                        for (;
                            (void 0 === t || t-- > 0) && !(n = a.next()).done;) o.push(n.value)
                    } catch (e) {
                        i = {
                            error: e
                        }
                    } finally {
                        try {
                            n && !n.done && (r = a.return) && r.call(a)
                        } finally {
                            if (i) throw i.error
                        }
                    }
                    return o
                },
                s = this && this.__spread || function() {
                    for (var e = [], t = 0; t < arguments.length; t++) e = e.concat(f(arguments[t]));
                    return e
                },
                u = this && this.__values || function(e) {
                    var t = "function" == typeof Symbol && e[Symbol.iterator],
                        r = 0;
                    return t ? t.call(e) : {
                        next: function() {
                            return e && r >= e.length && (e = void 0), {
                                value: e && e[r++],
                                done: !e
                            }
                        }
                    }
                };
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var c = r(1678),
                h = r(2957),
                l = r(2958),
                p = function() {
                    function e(e) {
                        this.contracts = new Map, this.cachedAbis = new Map, this.rpc = e.rpc, this.authorityProvider = e.authorityProvider || e.rpc, this.abiProvider = e.abiProvider || e.rpc, this.signatureProvider = e.signatureProvider, this.chainId = e.chainId, this.textEncoder = e.textEncoder, this.textDecoder = e.textDecoder, this.abiTypes = c.getTypesFromAbi(c.createInitialTypes(), h), this.transactionTypes = c.getTypesFromAbi(c.createInitialTypes(), l)
                    }
                    return e.prototype.rawAbiToJson = function(e) {
                        var t = new c.SerialBuffer({
                            textEncoder: this.textEncoder,
                            textDecoder: this.textDecoder,
                            array: e
                        });
                        if (!c.supportedAbiVersion(t.getString())) throw new Error("Unsupported abi version");
                        return t.restartRead(), this.abiTypes.get("abi_def").deserialize(t)
                    }, e.prototype.getCachedAbi = function(e, t) {
                        return void 0 === t && (t = !1), i(this, void 0, void 0, (function() {
                            var r, n, i, o;
                            return a(this, (function(a) {
                                switch (a.label) {
                                    case 0:
                                        if (!t && this.cachedAbis.get(e)) return [2, this.cachedAbis.get(e)];
                                        a.label = 1;
                                    case 1:
                                        return a.trys.push([1, 3, , 4]), [4, this.abiProvider.getRawAbi(e)];
                                    case 2:
                                        return n = a.sent().abi, i = this.rawAbiToJson(n), r = {
                                            rawAbi: n,
                                            abi: i
                                        }, [3, 4];
                                    case 3:
                                        throw (o = a.sent()).message = "fetching abi for " + e + ": " + o.message, o;
                                    case 4:
                                        if (!r) throw new Error("Missing abi for " + e);
                                        return this.cachedAbis.set(e, r), [2, r]
                                }
                            }))
                        }))
                    }, e.prototype.getAbi = function(e, t) {
                        return void 0 === t && (t = !1), i(this, void 0, void 0, (function() {
                            return a(this, (function(r) {
                                switch (r.label) {
                                    case 0:
                                        return [4, this.getCachedAbi(e, t)];
                                    case 1:
                                        return [2, r.sent().abi]
                                }
                            }))
                        }))
                    }, e.prototype.getTransactionAbis = function(e, t) {
                        return void 0 === t && (t = !1), i(this, void 0, void 0, (function() {
                            var r, n, o, f = this;
                            return a(this, (function(u) {
                                return r = e.actions.map((function(e) {
                                    return e.account
                                })), n = new Set(r), o = s(n).map((function(e) {
                                    return i(f, void 0, void 0, (function() {
                                        var r;
                                        return a(this, (function(n) {
                                            switch (n.label) {
                                                case 0:
                                                    return r = {
                                                        accountName: e
                                                    }, [4, this.getCachedAbi(e, t)];
                                                case 1:
                                                    return [2, (r.abi = n.sent().rawAbi, r)]
                                            }
                                        }))
                                    }))
                                })), [2, Promise.all(o)]
                            }))
                        }))
                    }, e.prototype.getContract = function(e, t) {
                        return void 0 === t && (t = !1), i(this, void 0, void 0, (function() {
                            var r, n, i, o, f, s, h, l, p, d, y;
                            return a(this, (function(a) {
                                switch (a.label) {
                                    case 0:
                                        return !t && this.contracts.get(e) ? [2, this.contracts.get(e)] : [4, this.getAbi(e, t)];
                                    case 1:
                                        i = a.sent(), o = c.getTypesFromAbi(c.createInitialTypes(), i), f = new Map;
                                        try {
                                            for (s = u(i.actions), h = s.next(); !h.done; h = s.next()) l = h.value, p = l.name, d = l.type, f.set(p, c.getType(o, d))
                                        } catch (e) {
                                            r = {
                                                error: e
                                            }
                                        } finally {
                                            try {
                                                h && !h.done && (n = s.return) && n.call(s)
                                            } finally {
                                                if (r) throw r.error
                                            }
                                        }
                                        return y = {
                                            types: o,
                                            actions: f
                                        }, this.contracts.set(e, y), [2, y]
                                }
                            }))
                        }))
                    }, e.prototype.serialize = function(e, t, r) {
                        this.transactionTypes.get(t).serialize(e, r)
                    }, e.prototype.deserialize = function(e, t) {
                        return this.transactionTypes.get(t).deserialize(e)
                    }, e.prototype.serializeTransaction = function(e) {
                        var t = new c.SerialBuffer({
                            textEncoder: this.textEncoder,
                            textDecoder: this.textDecoder
                        });
                        return this.serialize(t, "transaction", n({
                            max_net_usage_words: 0,
                            max_cpu_usage_ms: 0,
                            delay_sec: 0,
                            context_free_actions: [],
                            actions: [],
                            transaction_extensions: []
                        }, e)), t.asUint8Array()
                    }, e.prototype.deserializeTransaction = function(e) {
                        var t = new c.SerialBuffer({
                            textEncoder: this.textEncoder,
                            textDecoder: this.textDecoder
                        });
                        return t.pushArray(e), this.deserialize(t, "transaction")
                    }, e.prototype.serializeActions = function(e) {
                        return i(this, void 0, void 0, (function() {
                            var t = this;
                            return a(this, (function(r) {
                                switch (r.label) {
                                    case 0:
                                        return [4, Promise.all(e.map((function(e) {
                                            var r = e.account,
                                                n = e.name,
                                                o = e.authorization,
                                                f = e.data;
                                            return i(t, void 0, void 0, (function() {
                                                var e;
                                                return a(this, (function(t) {
                                                    switch (t.label) {
                                                        case 0:
                                                            return [4, this.getContract(r)];
                                                        case 1:
                                                            return e = t.sent(), [2, c.serializeAction(e, r, n, o, f, this.textEncoder, this.textDecoder)]
                                                    }
                                                }))
                                            }))
                                        })))];
                                    case 1:
                                        return [2, r.sent()]
                                }
                            }))
                        }))
                    }, e.prototype.deserializeActions = function(e) {
                        return i(this, void 0, void 0, (function() {
                            var t = this;
                            return a(this, (function(r) {
                                switch (r.label) {
                                    case 0:
                                        return [4, Promise.all(e.map((function(e) {
                                            var r = e.account,
                                                n = e.name,
                                                o = e.authorization,
                                                f = e.data;
                                            return i(t, void 0, void 0, (function() {
                                                var e;
                                                return a(this, (function(t) {
                                                    switch (t.label) {
                                                        case 0:
                                                            return [4, this.getContract(r)];
                                                        case 1:
                                                            return e = t.sent(), [2, c.deserializeAction(e, r, n, o, f, this.textEncoder, this.textDecoder)]
                                                    }
                                                }))
                                            }))
                                        })))];
                                    case 1:
                                        return [2, r.sent()]
                                }
                            }))
                        }))
                    }, e.prototype.deserializeTransactionWithActions = function(e) {
                        return i(this, void 0, void 0, (function() {
                            var t, r;
                            return a(this, (function(i) {
                                switch (i.label) {
                                    case 0:
                                        return "string" == typeof e && (e = c.hexToUint8Array(e)), t = this.deserializeTransaction(e), [4, this.deserializeActions(t.actions)];
                                    case 1:
                                        return r = i.sent(), [2, n({}, t, {
                                            actions: r
                                        })]
                                }
                            }))
                        }))
                    }, e.prototype.transact = function(e, t) {
                        var r = void 0 === t ? {} : t,
                            o = r.broadcast,
                            f = void 0 === o || o,
                            s = r.sign,
                            u = void 0 === s || s,
                            h = r.blocksBehind,
                            l = r.expireSeconds;
                        return i(this, void 0, void 0, (function() {
                            var t, r, i, o, s, p, d, y, v;
                            return a(this, (function(a) {
                                switch (a.label) {
                                    case 0:
                                        return this.chainId ? [3, 2] : [4, this.rpc.get_info()];
                                    case 1:
                                        t = a.sent(), this.chainId = t.chain_id, a.label = 2;
                                    case 2:
                                        return "number" == typeof h && l ? t ? [3, 4] : [4, this.rpc.get_info()] : [3, 6];
                                    case 3:
                                        t = a.sent(), a.label = 4;
                                    case 4:
                                        return [4, this.rpc.get_block(t.head_block_num - h)];
                                    case 5:
                                        r = a.sent(), e = n({}, c.transactionHeader(r, l), e), a.label = 6;
                                    case 6:
                                        if (!this.hasRequiredTaposFields(e)) throw new Error("Required configuration or TAPOS fields are not present");
                                        return [4, this.getTransactionAbis(e)];
                                    case 7:
                                        return i = a.sent(), o = [{}, e], s = {}, [4, this.serializeActions(e.actions)];
                                    case 8:
                                        return e = n.apply(void 0, o.concat([(s.actions = a.sent(), s)])), p = this.serializeTransaction(e), d = {
                                            serializedTransaction: p,
                                            signatures: []
                                        }, u ? [4, this.signatureProvider.getAvailableKeys()] : [3, 12];
                                    case 9:
                                        return y = a.sent(), [4, this.authorityProvider.getRequiredKeys({
                                            transaction: e,
                                            availableKeys: y
                                        })];
                                    case 10:
                                        return v = a.sent(), [4, this.signatureProvider.sign({
                                            chainId: this.chainId,
                                            requiredKeys: v,
                                            serializedTransaction: p,
                                            abis: i
                                        })];
                                    case 11:
                                        d = a.sent(), a.label = 12;
                                    case 12:
                                        return f ? [2, this.pushSignedTransaction(d)] : [2, d]
                                }
                            }))
                        }))
                    }, e.prototype.pushSignedTransaction = function(e) {
                        var t = e.signatures,
                            r = e.serializedTransaction;
                        return i(this, void 0, void 0, (function() {
                            return a(this, (function(e) {
                                return [2, this.rpc.push_transaction({
                                    signatures: t,
                                    serializedTransaction: r
                                })]
                            }))
                        }))
                    }, e.prototype.hasRequiredTaposFields = function(e) {
                        var t = e.expiration,
                            r = e.ref_block_num,
                            n = e.ref_block_prefix;
                        o(e, ["expiration", "ref_block_num", "ref_block_prefix"]);
                        return !!(t && r && n)
                    }, e
                }();
            t.Api = p
        },
        2957: function(e) {
            e.exports = JSON.parse('{"version":"eosio::abi/1.1","structs":[{"name":"extensions_entry","base":"","fields":[{"name":"tag","type":"uint16"},{"name":"value","type":"bytes"}]},{"name":"type_def","base":"","fields":[{"name":"new_type_name","type":"string"},{"name":"type","type":"string"}]},{"name":"field_def","base":"","fields":[{"name":"name","type":"string"},{"name":"type","type":"string"}]},{"name":"struct_def","base":"","fields":[{"name":"name","type":"string"},{"name":"base","type":"string"},{"name":"fields","type":"field_def[]"}]},{"name":"action_def","base":"","fields":[{"name":"name","type":"name"},{"name":"type","type":"string"},{"name":"ricardian_contract","type":"string"}]},{"name":"table_def","base":"","fields":[{"name":"name","type":"name"},{"name":"index_type","type":"string"},{"name":"key_names","type":"string[]"},{"name":"key_types","type":"string[]"},{"name":"type","type":"string"}]},{"name":"clause_pair","base":"","fields":[{"name":"id","type":"string"},{"name":"body","type":"string"}]},{"name":"error_message","base":"","fields":[{"name":"error_code","type":"uint64"},{"name":"error_msg","type":"string"}]},{"name":"variant_def","base":"","fields":[{"name":"name","type":"string"},{"name":"types","type":"string[]"}]},{"name":"abi_def","base":"","fields":[{"name":"version","type":"string"},{"name":"types","type":"type_def[]"},{"name":"structs","type":"struct_def[]"},{"name":"actions","type":"action_def[]"},{"name":"tables","type":"table_def[]"},{"name":"ricardian_clauses","type":"clause_pair[]"},{"name":"error_messages","type":"error_message[]"},{"name":"abi_extensions","type":"extensions_entry[]"},{"name":"variants","type":"variant_def[]$"}]}]}')
        },
        2958: function(e) {
            e.exports = JSON.parse('{"version":"eosio::abi/1.0","types":[{"new_type_name":"account_name","type":"name"},{"new_type_name":"action_name","type":"name"},{"new_type_name":"permission_name","type":"name"}],"structs":[{"name":"permission_level","base":"","fields":[{"name":"actor","type":"account_name"},{"name":"permission","type":"permission_name"}]},{"name":"action","base":"","fields":[{"name":"account","type":"account_name"},{"name":"name","type":"action_name"},{"name":"authorization","type":"permission_level[]"},{"name":"data","type":"bytes"}]},{"name":"extension","base":"","fields":[{"name":"type","type":"uint16"},{"name":"data","type":"bytes"}]},{"name":"transaction_header","base":"","fields":[{"name":"expiration","type":"time_point_sec"},{"name":"ref_block_num","type":"uint16"},{"name":"ref_block_prefix","type":"uint32"},{"name":"max_net_usage_words","type":"varuint32"},{"name":"max_cpu_usage_ms","type":"uint8"},{"name":"delay_sec","type":"varuint32"}]},{"name":"transaction","base":"transaction_header","fields":[{"name":"context_free_actions","type":"action[]"},{"name":"actions","type":"action[]"},{"name":"transaction_extensions","type":"extension[]"}]}]}')
        },
        2959: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            })
        },
        2960: function(e, t, r) {
            "use strict";
            var n = this && this.__awaiter || function(e, t, r, n) {
                    return new(r || (r = Promise))((function(i, a) {
                        function o(e) {
                            try {
                                s(n.next(e))
                            } catch (e) {
                                a(e)
                            }
                        }

                        function f(e) {
                            try {
                                s(n.throw(e))
                            } catch (e) {
                                a(e)
                            }
                        }

                        function s(e) {
                            e.done ? i(e.value) : new r((function(t) {
                                t(e.value)
                            })).then(o, f)
                        }
                        s((n = n.apply(e, t || [])).next())
                    }))
                },
                i = this && this.__generator || function(e, t) {
                    var r, n, i, a, o = {
                        label: 0,
                        sent: function() {
                            if (1 & i[0]) throw i[1];
                            return i[1]
                        },
                        trys: [],
                        ops: []
                    };
                    return a = {
                        next: f(0),
                        throw: f(1),
                        return: f(2)
                    }, "function" == typeof Symbol && (a[Symbol.iterator] = function() {
                        return this
                    }), a;

                    function f(a) {
                        return function(f) {
                            return function(a) {
                                if (r) throw new TypeError("Generator is already executing.");
                                for (; o;) try {
                                    if (r = 1, n && (i = 2 & a[0] ? n.return : a[0] ? n.throw || ((i = n.return) && i.call(n), 0) : n.next) && !(i = i.call(n, a[1])).done) return i;
                                    switch (n = 0, i && (a = [2 & a[0], i.value]), a[0]) {
                                        case 0:
                                        case 1:
                                            i = a;
                                            break;
                                        case 4:
                                            return o.label++, {
                                                value: a[1],
                                                done: !1
                                            };
                                        case 5:
                                            o.label++, n = a[1], a = [0];
                                            continue;
                                        case 7:
                                            a = o.ops.pop(), o.trys.pop();
                                            continue;
                                        default:
                                            if (!(i = o.trys, (i = i.length > 0 && i[i.length - 1]) || 6 !== a[0] && 2 !== a[0])) {
                                                o = 0;
                                                continue
                                            }
                                            if (3 === a[0] && (!i || a[1] > i[0] && a[1] < i[3])) {
                                                o.label = a[1];
                                                break
                                            }
                                            if (6 === a[0] && o.label < i[1]) {
                                                o.label = i[1], i = a;
                                                break
                                            }
                                            if (i && o.label < i[2]) {
                                                o.label = i[2], o.ops.push(a);
                                                break
                                            }
                                            i[2] && o.ops.pop(), o.trys.pop();
                                            continue
                                    }
                                    a = t.call(e, o)
                                } catch (e) {
                                    a = [6, e], n = 0
                                } finally {
                                    r = i = 0
                                }
                                if (5 & a[0]) throw a[1];
                                return {
                                    value: a[0] ? a[1] : void 0,
                                    done: !0
                                }
                            }([a, f])
                        }
                    }
                },
                a = this && this.__values || function(e) {
                    var t = "function" == typeof Symbol && e[Symbol.iterator],
                        r = 0;
                    return t ? t.call(e) : {
                        next: function() {
                            return e && r >= e.length && (e = void 0), {
                                value: e && e[r++],
                                done: !e
                            }
                        }
                    }
                };
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var o = r(592),
                f = r(1679);

            function s(e) {
                var t, r, n = "";
                try {
                    for (var i = a(e), o = i.next(); !o.done; o = i.next()) {
                        n += ("00" + o.value.toString(16)).slice(-2)
                    }
                } catch (e) {
                    t = {
                        error: e
                    }
                } finally {
                    try {
                        o && !o.done && (r = i.return) && r.call(i)
                    } finally {
                        if (t) throw t.error
                    }
                }
                return n
            }
            var u = function() {
                function e(e, t) {
                    void 0 === t && (t = {}), this.endpoint = e, t.fetch ? this.fetchBuiltin = t.fetch : this.fetchBuiltin = global.fetch
                }
                return e.prototype.fetch = function(e, t) {
                    return n(this, void 0, void 0, (function() {
                        var r, n, a;
                        return i(this, (function(i) {
                            switch (i.label) {
                                case 0:
                                    return i.trys.push([0, 3, , 4]), [4, (0, this.fetchBuiltin)(this.endpoint + e, {
                                        body: JSON.stringify(t),
                                        method: "POST"
                                    })];
                                case 1:
                                    return [4, (r = i.sent()).json()];
                                case 2:
                                    if ((n = i.sent()).processed && n.processed.except) throw new f.RpcError(n);
                                    return [3, 4];
                                case 3:
                                    throw (a = i.sent()).isFetchError = !0, a;
                                case 4:
                                    if (!r.ok) throw new f.RpcError(n);
                                    return [2, n]
                            }
                        }))
                    }))
                }, e.prototype.get_abi = function(e) {
                    return n(this, void 0, void 0, (function() {
                        return i(this, (function(t) {
                            switch (t.label) {
                                case 0:
                                    return [4, this.fetch("/v1/chain/get_abi", {
                                        account_name: e
                                    })];
                                case 1:
                                    return [2, t.sent()]
                            }
                        }))
                    }))
                }, e.prototype.get_account = function(e) {
                    return n(this, void 0, void 0, (function() {
                        return i(this, (function(t) {
                            switch (t.label) {
                                case 0:
                                    return [4, this.fetch("/v1/chain/get_account", {
                                        account_name: e
                                    })];
                                case 1:
                                    return [2, t.sent()]
                            }
                        }))
                    }))
                }, e.prototype.get_block_header_state = function(e) {
                    return n(this, void 0, void 0, (function() {
                        return i(this, (function(t) {
                            switch (t.label) {
                                case 0:
                                    return [4, this.fetch("/v1/chain/get_block_header_state", {
                                        block_num_or_id: e
                                    })];
                                case 1:
                                    return [2, t.sent()]
                            }
                        }))
                    }))
                }, e.prototype.get_block = function(e) {
                    return n(this, void 0, void 0, (function() {
                        return i(this, (function(t) {
                            switch (t.label) {
                                case 0:
                                    return [4, this.fetch("/v1/chain/get_block", {
                                        block_num_or_id: e
                                    })];
                                case 1:
                                    return [2, t.sent()]
                            }
                        }))
                    }))
                }, e.prototype.get_code = function(e) {
                    return n(this, void 0, void 0, (function() {
                        return i(this, (function(t) {
                            switch (t.label) {
                                case 0:
                                    return [4, this.fetch("/v1/chain/get_code", {
                                        account_name: e
                                    })];
                                case 1:
                                    return [2, t.sent()]
                            }
                        }))
                    }))
                }, e.prototype.get_currency_balance = function(e, t, r) {
                    return void 0 === r && (r = null), n(this, void 0, void 0, (function() {
                        return i(this, (function(n) {
                            switch (n.label) {
                                case 0:
                                    return [4, this.fetch("/v1/chain/get_currency_balance", {
                                        code: e,
                                        account: t,
                                        symbol: r
                                    })];
                                case 1:
                                    return [2, n.sent()]
                            }
                        }))
                    }))
                }, e.prototype.get_currency_stats = function(e, t) {
                    return n(this, void 0, void 0, (function() {
                        return i(this, (function(r) {
                            switch (r.label) {
                                case 0:
                                    return [4, this.fetch("/v1/chain/get_currency_stats", {
                                        code: e,
                                        symbol: t
                                    })];
                                case 1:
                                    return [2, r.sent()]
                            }
                        }))
                    }))
                }, e.prototype.get_info = function() {
                    return n(this, void 0, void 0, (function() {
                        return i(this, (function(e) {
                            switch (e.label) {
                                case 0:
                                    return [4, this.fetch("/v1/chain/get_info", {})];
                                case 1:
                                    return [2, e.sent()]
                            }
                        }))
                    }))
                }, e.prototype.get_producer_schedule = function() {
                    return n(this, void 0, void 0, (function() {
                        return i(this, (function(e) {
                            switch (e.label) {
                                case 0:
                                    return [4, this.fetch("/v1/chain/get_producer_schedule", {})];
                                case 1:
                                    return [2, e.sent()]
                            }
                        }))
                    }))
                }, e.prototype.get_producers = function(e, t, r) {
                    return void 0 === e && (e = !0), void 0 === t && (t = ""), void 0 === r && (r = 50), n(this, void 0, void 0, (function() {
                        return i(this, (function(n) {
                            switch (n.label) {
                                case 0:
                                    return [4, this.fetch("/v1/chain/get_producers", {
                                        json: e,
                                        lower_bound: t,
                                        limit: r
                                    })];
                                case 1:
                                    return [2, n.sent()]
                            }
                        }))
                    }))
                }, e.prototype.get_raw_code_and_abi = function(e) {
                    return n(this, void 0, void 0, (function() {
                        return i(this, (function(t) {
                            switch (t.label) {
                                case 0:
                                    return [4, this.fetch("/v1/chain/get_raw_code_and_abi", {
                                        account_name: e
                                    })];
                                case 1:
                                    return [2, t.sent()]
                            }
                        }))
                    }))
                }, e.prototype.getRawAbi = function(e) {
                    return n(this, void 0, void 0, (function() {
                        var t, r;
                        return i(this, (function(n) {
                            switch (n.label) {
                                case 0:
                                    return [4, this.get_raw_code_and_abi(e)];
                                case 1:
                                    return t = n.sent(), r = o.base64ToBinary(t.abi), [2, {
                                        accountName: t.account_name,
                                        abi: r
                                    }]
                            }
                        }))
                    }))
                }, e.prototype.get_table_rows = function(e) {
                    var t = e.json,
                        r = void 0 === t || t,
                        a = e.code,
                        o = e.scope,
                        f = e.table,
                        s = e.table_key,
                        u = void 0 === s ? "" : s,
                        c = e.lower_bound,
                        h = void 0 === c ? "" : c,
                        l = e.upper_bound,
                        p = void 0 === l ? "" : l,
                        d = e.index_position,
                        y = void 0 === d ? 1 : d,
                        v = e.key_type,
                        g = void 0 === v ? "" : v,
                        m = e.limit,
                        b = void 0 === m ? 10 : m,
                        w = e.reverse,
                        _ = void 0 !== w && w,
                        B = e.show_payer,
                        S = void 0 !== B && B;
                    return n(this, void 0, void 0, (function() {
                        return i(this, (function(e) {
                            switch (e.label) {
                                case 0:
                                    return [4, this.fetch("/v1/chain/get_table_rows", {
                                        json: r,
                                        code: a,
                                        scope: o,
                                        table: f,
                                        table_key: u,
                                        lower_bound: h,
                                        upper_bound: p,
                                        index_position: y,
                                        key_type: g,
                                        limit: b,
                                        reverse: _,
                                        show_payer: S
                                    })];
                                case 1:
                                    return [2, e.sent()]
                            }
                        }))
                    }))
                }, e.prototype.get_table_by_scope = function(e) {
                    var t = e.code,
                        r = e.table,
                        a = e.lower_bound,
                        o = void 0 === a ? "" : a,
                        f = e.upper_bound,
                        s = void 0 === f ? "" : f,
                        u = e.limit,
                        c = void 0 === u ? 10 : u;
                    return n(this, void 0, void 0, (function() {
                        return i(this, (function(e) {
                            switch (e.label) {
                                case 0:
                                    return [4, this.fetch("/v1/chain/get_table_by_scope", {
                                        code: t,
                                        table: r,
                                        lower_bound: o,
                                        upper_bound: s,
                                        limit: c
                                    })];
                                case 1:
                                    return [2, e.sent()]
                            }
                        }))
                    }))
                }, e.prototype.getRequiredKeys = function(e) {
                    return n(this, void 0, void 0, (function() {
                        var t;
                        return i(this, (function(r) {
                            switch (r.label) {
                                case 0:
                                    return t = o.convertLegacyPublicKeys, [4, this.fetch("/v1/chain/get_required_keys", {
                                        transaction: e.transaction,
                                        available_keys: e.availableKeys
                                    })];
                                case 1:
                                    return [2, t.apply(void 0, [r.sent().required_keys])]
                            }
                        }))
                    }))
                }, e.prototype.push_transaction = function(e) {
                    var t = e.signatures,
                        r = e.serializedTransaction;
                    return n(this, void 0, void 0, (function() {
                        return i(this, (function(e) {
                            switch (e.label) {
                                case 0:
                                    return [4, this.fetch("/v1/chain/push_transaction", {
                                        signatures: t,
                                        compression: 0,
                                        packed_context_free_data: "",
                                        packed_trx: s(r)
                                    })];
                                case 1:
                                    return [2, e.sent()]
                            }
                        }))
                    }))
                }, e.prototype.db_size_get = function() {
                    return n(this, void 0, void 0, (function() {
                        return i(this, (function(e) {
                            switch (e.label) {
                                case 0:
                                    return [4, this.fetch("/v1/db_size/get", {})];
                                case 1:
                                    return [2, e.sent()]
                            }
                        }))
                    }))
                }, e.prototype.history_get_actions = function(e, t, r) {
                    return void 0 === t && (t = null), void 0 === r && (r = null), n(this, void 0, void 0, (function() {
                        return i(this, (function(n) {
                            switch (n.label) {
                                case 0:
                                    return [4, this.fetch("/v1/history/get_actions", {
                                        account_name: e,
                                        pos: t,
                                        offset: r
                                    })];
                                case 1:
                                    return [2, n.sent()]
                            }
                        }))
                    }))
                }, e.prototype.history_get_transaction = function(e, t) {
                    return void 0 === t && (t = null), n(this, void 0, void 0, (function() {
                        return i(this, (function(r) {
                            switch (r.label) {
                                case 0:
                                    return [4, this.fetch("/v1/history/get_transaction", {
                                        id: e,
                                        block_num_hint: t
                                    })];
                                case 1:
                                    return [2, r.sent()]
                            }
                        }))
                    }))
                }, e.prototype.history_get_key_accounts = function(e) {
                    return n(this, void 0, void 0, (function() {
                        return i(this, (function(t) {
                            switch (t.label) {
                                case 0:
                                    return [4, this.fetch("/v1/history/get_key_accounts", {
                                        public_key: e
                                    })];
                                case 1:
                                    return [2, t.sent()]
                            }
                        }))
                    }))
                }, e.prototype.history_get_controlled_accounts = function(e) {
                    return n(this, void 0, void 0, (function() {
                        return i(this, (function(t) {
                            switch (t.label) {
                                case 0:
                                    return [4, this.fetch("/v1/history/get_controlled_accounts", {
                                        controlling_account: e
                                    })];
                                case 1:
                                    return [2, t.sent()]
                            }
                        }))
                    }))
                }, e
            }();
            t.JsonRpc = u
        },
        2961: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            })
        },
        336: function(e, t, r) {
            "use strict";
            var n = r(1675),
                i = r(2943);
            e.exports = {
                sha1: function(e, t) {
                    return n("sha1").update(e).digest(t)
                },
                sha256: function(e, t) {
                    return n("sha256").update(e).digest(t)
                },
                sha512: function(e, t) {
                    return n("sha512").update(e).digest(t)
                },
                HmacSHA256: function(e, t) {
                    return i("sha256", t).update(e).digest()
                },
                ripemd160: function(e) {
                    try {
                        return n("rmd160").update(e).digest()
                    } catch (t) {
                        return n("ripemd160").update(e).digest()
                    }
                }
            }
        },
        3710: function(e, t, r) {
            e.exports = r(3711)
        },
        3711: function(e, t, r) {
            r(1886);
            var n, i = r(1083);
            n = i("Error.captureStackTrace") ? r(3714) : i("Error.prototype.stack") ? r(3715) : r(3725), e.exports = n()
        },
        3714: function(e, t, r) {
            var n = r(1084);
            e.exports = function() {
                return Error.getStackTrace = function(e) {
                    return e.stack
                }, {
                    prepareStackTrace: n
                }
            }
        },
        3715: function(e, t, r) {
            var n = r(3716),
                i = r(3723),
                a = r(510).cache,
                o = r(1084);
            e.exports = function() {
                return Error.captureStackTrace = function e(t, r) {
                    var f = [e];
                    r && f.push(r);
                    var s = n.getInstance().captureFrameStrings(f);
                    Object.defineProperties(t, {
                        stack: {
                            configurable: !0,
                            get: a((function() {
                                var e = i.getInstance().getFrames(s.frameStrings, s.functionValues);
                                return (Error.prepareStackTrace || o)(t, e, void 0)
                            }))
                        },
                        cachedStack: {
                            configurable: !0,
                            writable: !0,
                            enumerable: !1,
                            value: !0
                        }
                    })
                }, Error.getStackTrace = function(e) {
                    if (e.cachedStack) return e.stack;
                    var t, r = n.getInstance().getFrameStrings(e),
                        a = [];
                    r ? a = i.getInstance().getFrames(r, []) : t = ["The stack is not readable by unthrown errors in this environment."];
                    var f = (Error.prepareStackTrace || o)(e, a, t);
                    if (r) try {
                        Object.defineProperties(e, {
                            stack: {
                                configurable: !0,
                                writable: !0,
                                enumerable: !1,
                                value: f
                            },
                            cachedStack: {
                                configurable: !0,
                                writable: !0,
                                enumerable: !1,
                                value: !0
                            }
                        })
                    } catch (e) {}
                    return f
                }, {
                    prepareStackTrace: o
                }
            }
        },
        3716: function(e, t, r) {
            var n = r(509).Class,
                i = r(509).abstractMethod,
                a = r(510).eachCombination,
                o = r(510).cache,
                f = r(1083),
                s = n(Object, {
                    prototype: {
                        captureFrameStrings: function(e) {
                            var t = this.createError();
                            e.unshift(this.captureFrameStrings), e.unshift(this.createError);
                            var r = this.getFrameStrings(t),
                                n = r.slice(e.length),
                                i = [];
                            if (f("arguments.callee.caller")) {
                                var a = [this.createError, this.captureFrameStrings];
                                try {
                                    for (var o = arguments.callee; o = o.caller;) a.push(o)
                                } catch (e) {}
                                i = a.slice(e.length)
                            }
                            return {
                                frameStrings: n,
                                functionValues: i
                            }
                        },
                        getFrameStrings: function(e) {
                            var t = e.message || "",
                                r = e.name || "",
                                n = this.getStackString(e);
                            if (void 0 !== n) {
                                var i = n.split("\n"),
                                    a = 0,
                                    o = i.length;
                                return this.hasHeader && (a += r.split("\n").length + t.split("\n").length - 1), this.hasFooter && (o -= 1), i.slice(a, o)
                            }
                        },
                        createError: i,
                        getStackString: i,
                        hasHeader: void 0,
                        hasFooter: void 0
                    }
                }),
                u = n(Object, {
                    prototype: {
                        calibrateClass: function(e) {
                            return this.calibrateMethods(e) && this.calibrateEnvelope(e)
                        },
                        calibrateMethods: function(e) {
                            try {
                                a([
                                    [function(e) {
                                        return new Error(e)
                                    }, function(e) {
                                        try {
                                            throw new Error(e)
                                        } catch (e) {
                                            return e
                                        }
                                    }],
                                    [function(e) {
                                        return e.stack
                                    }, function(e) {
                                        return e.stacktrace
                                    }]
                                ], (function(e, t) {
                                    if (t(e())) throw {
                                        getStackString: t,
                                        createError: e
                                    }
                                }))
                            } catch (t) {
                                return n.merge.call(e, {
                                    prototype: t
                                }), !0
                            }
                            return !1
                        },
                        calibrateEnvelope: function(e) {
                            var t = (0, e.prototype.getStackString)((0, e.prototype.createError)("marker")).split("\n");
                            return n.merge.call(e, {
                                prototype: {
                                    hasHeader: /marker/.test(t[0]),
                                    hasFooter: "" === t[t.length - 1]
                                }
                            }), !0
                        }
                    }
                });
            e.exports = {
                getClass: o((function() {
                    var e;
                    if (e) return e;
                    if (e = n(s, {}), !(new u).calibrateClass(e)) throw new Error("Cannot read Error.prototype.stack in this environment.");
                    return e
                })),
                getInstance: o((function() {
                    return new(this.getClass())
                }))
            }
        },
        3723: function(e, t, r) {
            var n = r(509).Class,
                i = r(3724),
                a = r(510).cache,
                o = n(Object, {
                    prototype: {
                        stackParser: null,
                        frameParser: null,
                        locationParsers: null,
                        constructor: function(e) {
                            n.prototype.merge.call(this, e)
                        },
                        getFrames: function(e, t) {
                            for (var r = [], n = 0, i = e.length; n < i; ++n) r[n] = this.getFrame(e[n], t[n]);
                            return r
                        },
                        getFrame: function(e, t) {
                            return new i({
                                frameString: e,
                                functionValue: t
                            })
                        }
                    }
                });
            e.exports = {
                getClass: a((function() {
                    return o
                })),
                getInstance: a((function() {
                    return new(this.getClass())
                }))
            }
        },
        3724: function(e, t, r) {
            var n = r(509).Class,
                i = r(509).abstractMethod,
                a = n(Object, {
                    prototype: {
                        init: n.prototype.merge,
                        frameString: void 0,
                        toString: function() {
                            return this.frameString
                        },
                        functionValue: void 0,
                        getThis: i,
                        getTypeName: i,
                        getFunction: function() {
                            return this.functionValue
                        },
                        getFunctionName: i,
                        getMethodName: i,
                        getFileName: i,
                        getLineNumber: i,
                        getColumnNumber: i,
                        getEvalOrigin: i,
                        isTopLevel: i,
                        isEval: i,
                        isNative: i,
                        isConstructor: i
                    }
                });
            e.exports = a
        },
        3725: function(e, t, r) {
            var n = r(510).cache,
                i = r(1084);
            e.exports = function() {
                return Error.captureStackTrace = function(e, t) {
                    Object.defineProperties(e, {
                        stack: {
                            configurable: !0,
                            get: n((function() {
                                return (Error.prepareStackTrace || i)(e, [])
                            }))
                        },
                        cachedStack: {
                            configurable: !0,
                            writable: !0,
                            enumerable: !1,
                            value: !0
                        }
                    })
                }, Error.getStackTrace = function(e) {
                    if (e.cachedStack) return e.stack;
                    var t = (Error.prepareStackTrace || i)(e, []);
                    try {
                        Object.defineProperties(e, {
                            stack: {
                                configurable: !0,
                                writable: !0,
                                enumerable: !1,
                                value: t
                            },
                            cachedStack: {
                                configurable: !0,
                                writable: !0,
                                enumerable: !1,
                                value: !0
                            }
                        })
                    } catch (e) {}
                    return t
                }, {
                    prepareStackTrace: i
                }
            }
        },
        488: function(e, t, r) {
            "use strict";
            var n = r(589),
                i = n(r(1008)),
                a = n(r(590)),
                o = r(72),
                f = r(1009),
                BigInteger = r(109),
                s = f.getCurveByName("secp256k1"),
                u = r(336),
                c = r(489),
                h = s.G,
                l = s.n;

            function p(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "EOS";
                if ("string" == typeof e) {
                    var r = p.fromString(e, t);
                    return o(null != r, "Invalid public key"), r
                }
                if (Buffer.isBuffer(e)) return p.fromBuffer(e);
                if ("object" === (0, a.default)(e) && e.Q) return p(e.Q);

                function n() {
                    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : e.compressed;
                    return e.getEncoded(t)
                }

                function i() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "EOS";
                    return e + c.checkEncode(n())
                }

                function d() {
                    var t = e.getEncoded(!1),
                        r = f.Point.decodeFrom(s, t);
                    return p.fromPoint(r)
                }

                function y(t) {
                    console.error("Deprecated warning: PublicKey.child"), o(Buffer.isBuffer(t), "Buffer required: offset"), o.equal(t.length, 32, "offset length"), t = Buffer.concat([n(), t]), t = u.sha256(t);
                    var r = BigInteger.fromBuffer(t);
                    if (r.compareTo(l) >= 0) throw new Error("Child offset went out of bounds, try again");
                    var i = h.multiply(r),
                        a = e.add(i);
                    if (s.isInfinity(a)) throw new Error("Child offset derived to an invalid key, try again");
                    return p.fromPoint(a)
                }

                function v() {
                    return n().toString("hex")
                }
                return o.equal((0, a.default)(e), "object", "Invalid public key"), o.equal((0, a.default)(e.compressed), "boolean", "Invalid public key"), {
                    Q: e,
                    toString: i,
                    toUncompressed: d,
                    toBuffer: n,
                    child: y,
                    toHex: v
                }
            }
            e.exports = p, p.isValid = function(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "EOS";
                try {
                    return p(e, t), !0
                } catch (e) {
                    return !1
                }
            }, p.fromBinary = function(e) {
                return p.fromBuffer(new Buffer(e, "binary"))
            }, p.fromBuffer = function(e) {
                return p(f.Point.decodeFrom(s, e))
            }, p.fromPoint = function(e) {
                return p(e)
            }, p.fromString = function(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "EOS";
                try {
                    return p.fromStringOrThrow(e, t)
                } catch (e) {
                    return null
                }
            }, p.fromStringOrThrow = function(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "EOS";
                o.equal((0, a.default)(e), "string", "public_key");
                var r = e.match(/^PUB_([A-Za-z0-9]+)_([A-Za-z0-9]+)$/);
                if (null === r) {
                    var n = new RegExp("^" + t);
                    return n.test(e) && (e = e.substring(t.length)), p.fromBuffer(c.checkDecode(e))
                }
                o(3 === r.length, "Expecting public key like: PUB_K1_base58pubkey..");
                var f = (0, i.default)(r, 3),
                    s = f[1],
                    u = f[2];
                return o.equal(s, "K1", "K1 private key expected"), p.fromBuffer(c.checkDecode(u, s))
            }, p.fromHex = function(e) {
                return p.fromBuffer(new Buffer(e, "hex"))
            }, p.fromStringHex = function(e) {
                return p.fromString(new Buffer(e, "hex"))
            }
        },
        489: function(e, t, r) {
            "use strict";
            var n = r(589)(r(590)),
                i = r(84),
                a = r(72),
                o = r(1663),
                f = r(336);
            e.exports = {
                random32ByteBuffer: function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                        t = e.cpuEntropyBits,
                        r = void 0 === t ? 0 : t,
                        i = e.safe,
                        s = void 0 === i || i;
                    a.equal((0, n.default)(r), "number", "cpuEntropyBits"), a.equal((0, n.default)(s), "boolean", "boolean"), s && a(u >= 128, "Call initialize() to add entropy");
                    var l = [];
                    return l.push(o(32)), l.push(Buffer.from(h(r))), l.push(c), l.push(d()), f.sha256(Buffer.concat(l))
                },
                addEntropy: function() {
                    a.equal(c.length, 101, "externalEntropyArray");
                    for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++) t[r] = arguments[r];
                    u += t.length;
                    for (var n = 0, i = t; n < i.length; n++) {
                        var o = i[n],
                            f = s++ % 101,
                            h = c[f] += o;
                        h > 9007199254740991 && (c[f] = 0)
                    }
                },
                cpuEntropy: h,
                entropyCount: function() {
                    return u
                },
                checkDecode: function(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
                    a(null != e, "private key expected");
                    var r, n = new Buffer(i.decode(e)),
                        o = n.slice(-4),
                        s = n.slice(0, -4);
                    if ("sha256x2" === t) r = f.sha256(f.sha256(s)).slice(0, 4);
                    else {
                        var u = [s];
                        t && u.push(Buffer.from(t)), r = f.ripemd160(Buffer.concat(u)).slice(0, 4)
                    }
                    if (o.toString("hex") !== r.toString("hex")) throw new Error("Invalid checksum, " + "".concat(o.toString("hex"), " != ").concat(r.toString("hex")));
                    return s
                },
                checkEncode: function(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
                    if (a(Buffer.isBuffer(e), "expecting keyBuffer<Buffer>"), "sha256x2" === t) {
                        var r = f.sha256(f.sha256(e)).slice(0, 4);
                        return i.encode(Buffer.concat([e, r]))
                    }
                    var n = [e];
                    t && n.push(Buffer.from(t));
                    var o = f.ripemd160(Buffer.concat(n)).slice(0, 4);
                    return i.encode(Buffer.concat([e, o]))
                }
            };
            var s = 0,
                u = 0,
                c = o(101);

            function h() {
                for (var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 128, t = [], r = null, n = 0; t.length < e;) {
                    var i = l();
                    if (null != r) {
                        var a = i - r;
                        if (Math.abs(a) < 1) {
                            n++;
                            continue
                        }
                        var o = Math.floor(p(Math.abs(a)) + 1);
                        if (o < 4) {
                            o < 2 && n++;
                            continue
                        }
                        t.push(a)
                    }
                    r = i
                }
                if (n > 10) {
                    var f = Number(n / e * 100).toFixed(2);
                    console.warn("WARN: ".concat(f, "% low CPU entropy re-sampled"))
                }
                return t
            }

            function l() {
                for (var e = Date.now(), t = 0, r = 0; Date.now() < e + 7 + 1;) r = Math.sin(Math.sqrt(Math.log(++t + r)));
                return t
            }
            var p = function(e) {
                return Math.log(e) / Math.LN2
            };

            function d() {
                var e = Array(o(101)).join();
                try {
                    e += (new Date).toString() + " " + window.screen.height + " " + window.screen.width + " " + window.screen.colorDepth + "  " + window.screen.availHeight + " " + window.screen.availWidth + " " + window.screen.pixelDepth + navigator.language + " " + window.location + " " + window.history.length;
                    for (var t, r = 0; r < navigator.mimeTypes.length; r++) e += (t = navigator.mimeTypes[r]).description + " " + t.type + " " + t.suffixes + " "
                } catch (t) {
                    e += f.sha256((new Date).toString())
                }
                for (var n = e += new Buffer(e).toString("binary") + " " + (new Date).toString(), i = Date.now(); Date.now() - i < 25;) n = f.sha256(n);
                return n
            }
        },
        587: function(e, t) {
            var r = Math.pow(2, 32);

            function n(e) {
                var t;
                return e > r || e < 0 ? (t = Math.abs(e) % r, e < 0 ? r - t : t) : e
            }

            function i(e) {
                for (; 0 < e.length; e++) e[0] = 0;
                return !1
            }

            function a() {
                this.SBOX = [], this.INV_SBOX = [], this.SUB_MIX = [
                    [],
                    [],
                    [],
                    []
                ], this.INV_SUB_MIX = [
                    [],
                    [],
                    [],
                    []
                ], this.init(), this.RCON = [0, 1, 2, 4, 8, 16, 32, 64, 128, 27, 54]
            }
            a.prototype.init = function() {
                var e, t, r, n, i, a, o, f, s, u;
                for (e = function() {
                        var e, r;
                        for (r = [], t = e = 0; e < 256; t = ++e) t < 128 ? r.push(t << 1) : r.push(t << 1 ^ 283);
                        return r
                    }(), i = 0, s = 0, t = u = 0; u < 256; t = ++u) r = (r = s ^ s << 1 ^ s << 2 ^ s << 3 ^ s << 4) >>> 8 ^ 255 & r ^ 99, this.SBOX[i] = r, this.INV_SBOX[r] = i, f = e[o = e[a = e[i]]], n = 257 * e[r] ^ 16843008 * r, this.SUB_MIX[0][i] = n << 24 | n >>> 8, this.SUB_MIX[1][i] = n << 16 | n >>> 16, this.SUB_MIX[2][i] = n << 8 | n >>> 24, this.SUB_MIX[3][i] = n, n = 16843009 * f ^ 65537 * o ^ 257 * a ^ 16843008 * i, this.INV_SUB_MIX[0][r] = n << 24 | n >>> 8, this.INV_SUB_MIX[1][r] = n << 16 | n >>> 16, this.INV_SUB_MIX[2][r] = n << 8 | n >>> 24, this.INV_SUB_MIX[3][r] = n, 0 === i ? i = s = 1 : (i = a ^ e[e[e[f ^ a]]], s ^= e[e[s]]);
                return !0
            };
            var o = new a;

            function f(e) {
                for (var t = e.length / 4, r = new Array(t), n = -1; ++n < t;) r[n] = e.readUInt32BE(4 * n);
                return r
            }

            function s(e) {
                this._key = f(e), this._doReset()
            }
            s.blockSize = 16, s.prototype.blockSize = s.blockSize, s.keySize = 32, s.prototype.keySize = s.keySize, s.prototype._doReset = function() {
                var e, t, r, n, i, a;
                for (t = (r = this._key).length, this._nRounds = t + 6, i = 4 * (this._nRounds + 1), this._keySchedule = [], n = 0; n < i; n++) this._keySchedule[n] = n < t ? r[n] : (a = this._keySchedule[n - 1], n % t == 0 ? (a = a << 8 | a >>> 24, a = o.SBOX[a >>> 24] << 24 | o.SBOX[a >>> 16 & 255] << 16 | o.SBOX[a >>> 8 & 255] << 8 | o.SBOX[255 & a], a ^= o.RCON[n / t | 0] << 24) : t > 6 && n % t == 4 && (a = o.SBOX[a >>> 24] << 24 | o.SBOX[a >>> 16 & 255] << 16 | o.SBOX[a >>> 8 & 255] << 8 | o.SBOX[255 & a]), this._keySchedule[n - t] ^ a);
                for (this._invKeySchedule = [], e = 0; e < i; e++) n = i - e, a = this._keySchedule[n - (e % 4 ? 0 : 4)], this._invKeySchedule[e] = e < 4 || n <= 4 ? a : o.INV_SUB_MIX[0][o.SBOX[a >>> 24]] ^ o.INV_SUB_MIX[1][o.SBOX[a >>> 16 & 255]] ^ o.INV_SUB_MIX[2][o.SBOX[a >>> 8 & 255]] ^ o.INV_SUB_MIX[3][o.SBOX[255 & a]];
                return !0
            }, s.prototype.encryptBlock = function(e) {
                e = f(new Buffer(e));
                var t = this._doCryptBlock(e, this._keySchedule, o.SUB_MIX, o.SBOX),
                    r = new Buffer(16);
                return r.writeUInt32BE(t[0], 0), r.writeUInt32BE(t[1], 4), r.writeUInt32BE(t[2], 8), r.writeUInt32BE(t[3], 12), r
            }, s.prototype.decryptBlock = function(e) {
                var t = [(e = f(new Buffer(e)))[3], e[1]];
                e[1] = t[0], e[3] = t[1];
                var r = this._doCryptBlock(e, this._invKeySchedule, o.INV_SUB_MIX, o.INV_SBOX),
                    n = new Buffer(16);
                return n.writeUInt32BE(r[0], 0), n.writeUInt32BE(r[3], 4), n.writeUInt32BE(r[2], 8), n.writeUInt32BE(r[1], 12), n
            }, s.prototype.scrub = function() {
                i(this._keySchedule), i(this._invKeySchedule), i(this._key)
            }, s.prototype._doCryptBlock = function(e, t, r, i) {
                var a, o, f, s, u, c, h, l, p;
                o = e[0] ^ t[0], f = e[1] ^ t[1], s = e[2] ^ t[2], u = e[3] ^ t[3], a = 4;
                for (var d = 1; d < this._nRounds; d++) c = r[0][o >>> 24] ^ r[1][f >>> 16 & 255] ^ r[2][s >>> 8 & 255] ^ r[3][255 & u] ^ t[a++], h = r[0][f >>> 24] ^ r[1][s >>> 16 & 255] ^ r[2][u >>> 8 & 255] ^ r[3][255 & o] ^ t[a++], l = r[0][s >>> 24] ^ r[1][u >>> 16 & 255] ^ r[2][o >>> 8 & 255] ^ r[3][255 & f] ^ t[a++], p = r[0][u >>> 24] ^ r[1][o >>> 16 & 255] ^ r[2][f >>> 8 & 255] ^ r[3][255 & s] ^ t[a++], o = c, f = h, s = l, u = p;
                return c = (i[o >>> 24] << 24 | i[f >>> 16 & 255] << 16 | i[s >>> 8 & 255] << 8 | i[255 & u]) ^ t[a++], h = (i[f >>> 24] << 24 | i[s >>> 16 & 255] << 16 | i[u >>> 8 & 255] << 8 | i[255 & o]) ^ t[a++], l = (i[s >>> 24] << 24 | i[u >>> 16 & 255] << 16 | i[o >>> 8 & 255] << 8 | i[255 & f]) ^ t[a++], p = (i[u >>> 24] << 24 | i[o >>> 16 & 255] << 16 | i[f >>> 8 & 255] << 8 | i[255 & s]) ^ t[a++], [n(c), n(h), n(l), n(p)]
            }, t.AES = s
        },
        588: function(e, t, r) {
            var n = r(236);

            function i(e) {
                var t = e._cipher.encryptBlock(e._prev);
                return function(e) {
                    for (var t, r = e.length; r--;) {
                        if (255 !== (t = e.readUInt8(r))) {
                            t++, e.writeUInt8(t, r);
                            break
                        }
                        e.writeUInt8(0, r)
                    }
                }(e._prev), t
            }
            t.encrypt = function(e, t) {
                for (; e._cache.length < t.length;) e._cache = Buffer.concat([e._cache, i(e)]);
                var r = e._cache.slice(0, t.length);
                return e._cache = e._cache.slice(t.length), n(t, r)
            }
        },
        589: function(e, t) {
            e.exports = function(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }
        },
        590: function(e, t) {
            function r(e) {
                return (r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                })(e)
            }

            function n(t) {
                return "function" == typeof Symbol && "symbol" === r(Symbol.iterator) ? e.exports = n = function(e) {
                    return r(e)
                } : e.exports = n = function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : r(e)
                }, n(t)
            }
            e.exports = n
        },
        591: function(e, t, r) {
            "use strict";
            var n = r(589),
                i = n(r(2946)),
                a = n(r(1008)),
                o = n(r(590)),
                f = r(1009),
                Point = f.Point,
                s = f.getCurveByName("secp256k1"),
                BigInteger = r(109),
                u = r(72),
                c = r(336),
                h = r(488),
                l = r(489),
                p = r(1675),
                d = r(2950);
            s.G, s.n;

            function y(e) {
                if ("string" == typeof e) return y.fromString(e);
                if (Buffer.isBuffer(e)) return y.fromBuffer(e);
                if ("object" === (0, o.default)(e) && BigInteger.isBigInteger(e.d)) return y(e.d);
                if (!BigInteger.isBigInteger(e)) throw new TypeError("Invalid private key");

                function t() {
                    var e = n();
                    return e = Buffer.concat([new Buffer([128]), e]), l.checkEncode(e, "sha256x2")
                }
                var r;

                function n() {
                    return e.toBuffer(32)
                }
                return {
                    d: e,
                    toWif: t,
                    toString: function() {
                        return t()
                    },
                    toPublic: function() {
                        if (r) return r;
                        var t = s.G.multiply(e);
                        return r = h.fromPoint(t)
                    },
                    toBuffer: n,
                    getSharedSecret: function(e) {
                        var t = (e = h(e)).toUncompressed().toBuffer(),
                            r = Point.fromAffine(s, BigInteger.fromBuffer(t.slice(1, 33)), BigInteger.fromBuffer(t.slice(33, 65))),
                            i = n(),
                            a = r.multiply(BigInteger.fromBuffer(i)).affineX.toBuffer({
                                size: 32
                            });
                        return c.sha512(a)
                    },
                    getChildKey: function(e) {
                        return y(p("sha256").update(n()).update(e).digest())
                    }
                }
            }

            function v(e) {
                u.equal((0, o.default)(e), "string", "privateStr");
                var t = e.match(/^PVT_([A-Za-z0-9]+)_([A-Za-z0-9]+)$/);
                if (null === t) {
                    var r = l.checkDecode(e, "sha256x2"),
                        n = r.readUInt8(0);
                    u.equal(128, n, "Expected version ".concat(128, ", instead got ", n));
                    return {
                        privateKey: y.fromBuffer(r.slice(1)),
                        format: "WIF",
                        keyType: "K1"
                    }
                }
                u(3 === t.length, "Expecting private key like: PVT_K1_base58privateKey..");
                var i = (0, a.default)(t, 3),
                    f = i[1],
                    s = i[2];
                return u.equal(f, "K1", "K1 private key expected"), {
                    privateKey: y.fromBuffer(l.checkDecode(s, f)),
                    format: "PVT",
                    keyType: f
                }
            }
            e.exports = y, y.fromHex = function(e) {
                return y.fromBuffer(new Buffer(e, "hex"))
            }, y.fromBuffer = function(e) {
                if (!Buffer.isBuffer(e)) throw new Error("Expecting parameter to be a Buffer type");
                if (33 === e.length && 1 === e[32] && (e = e.slice(0, -1)), 32 !== e.length) throw new Error("Expecting 32 bytes, instead got ".concat(e.length));
                return y(BigInteger.fromBuffer(e))
            }, y.fromSeed = function(e) {
                if ("string" != typeof e) throw new Error("seed must be of type string");
                return y.fromBuffer(c.sha256(e))
            }, y.isWif = function(e) {
                try {
                    return u("WIF" === v(e).format), !0
                } catch (e) {
                    return !1
                }
            }, y.isValid = function(e) {
                try {
                    return y(e), !0
                } catch (e) {
                    return !1
                }
            }, y.fromWif = function(e) {
                return console.log("PrivateKey.fromWif is deprecated, please use PrivateKey.fromString"), y.fromString(e)
            }, y.fromString = function(e) {
                return v(e).privateKey
            }, y.randomKey = function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
                return y.initialize().then((function() {
                    return y.fromBuffer(l.random32ByteBuffer({
                        cpuEntropyBits: e
                    }))
                }))
            }, y.unsafeRandomKey = function() {
                return Promise.resolve(y.fromBuffer(l.random32ByteBuffer({
                    safe: !1
                })))
            };
            var g = !1;
            y.initialize = d((function() {
                g || (! function() {
                    var e = y(c.sha256("")),
                        t = "key comparison test failed on a known private key";
                    u.equal(e.toWif(), "5KYZdUEo39z3FPrtuX2QbbwGnNP5zTd7yyr2SC1j299sBCnWjss", t), u.equal(e.toString(), "5KYZdUEo39z3FPrtuX2QbbwGnNP5zTd7yyr2SC1j299sBCnWjss", t);
                    var r = e.toPublic();
                    u.equal(r.toString(), "EOS859gxfnXyUriMgUeThh1fWv3oqcpLFyHa3TfFYC4PK2HqhToVM", "pubkey string comparison test failed on a known public key"), m((function() {
                        return y.fromString(e.toWif())
                    }), "converting known wif from string"), m((function() {
                        return y.fromString(e.toString())
                    }), "converting known pvt from string"), m((function() {
                        return h.fromString(r.toString())
                    }), "converting known public key from string"), !0
                }(), l.addEntropy.apply(l, (0, i.default)(l.cpuEntropy())), u(l.entropyCount() >= 128, "insufficient entropy"), g = !0)
            }));
            var m = function(e, t) {
                try {
                    e()
                } catch (e) {
                    throw e.message = "".concat(t, " ==> ").concat(e.message), e
                }
            }
        },
        592: function(e, t, r) {
            "use strict";
            var n = this && this.__read || function(e, t) {
                    var r = "function" == typeof Symbol && e[Symbol.iterator];
                    if (!r) return e;
                    var n, i, a = r.call(e),
                        o = [];
                    try {
                        for (;
                            (void 0 === t || t-- > 0) && !(n = a.next()).done;) o.push(n.value)
                    } catch (e) {
                        i = {
                            error: e
                        }
                    } finally {
                        try {
                            n && !n.done && (r = a.return) && r.call(a)
                        } finally {
                            if (i) throw i.error
                        }
                    }
                    return o
                },
                i = this && this.__spread || function() {
                    for (var e = [], t = 0; t < arguments.length; t++) e = e.concat(n(arguments[t]));
                    return e
                },
                a = this && this.__values || function(e) {
                    var t = "function" == typeof Symbol && e[Symbol.iterator],
                        r = 0;
                    return t ? t.call(e) : {
                        next: function() {
                            return e && r >= e.length && (e = void 0), {
                                value: e && e[r++],
                                done: !e
                            }
                        }
                    }
                };
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var o = r(2954).RIPEMD160.hash,
                f = "123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz",
                s = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
            var u = function() {
                for (var e = Array(256).fill(-1), t = 0; t < f.length; ++t) e[f.charCodeAt(t)] = t;
                return e
            }();
            var c, h = function() {
                for (var e = Array(256).fill(-1), t = 0; t < s.length; ++t) e[s.charCodeAt(t)] = t;
                return e["=".charCodeAt(0)] = 0, e
            }();

            function l(e) {
                return 0 != (128 & e[e.length - 1])
            }

            function p(e) {
                for (var t = 1, r = 0; r < e.length; ++r) {
                    var n = (255 & ~e[r]) + t;
                    e[r] = n, t = n >> 8
                }
            }

            function d(e, t) {
                for (var r = new Uint8Array(e), n = 0; n < t.length; ++n) {
                    var i = t.charCodeAt(n);
                    if (i < "0".charCodeAt(0) || i > "9".charCodeAt(0)) throw new Error("invalid number");
                    for (var a = i - "0".charCodeAt(0), o = 0; o < e; ++o) {
                        var f = 10 * r[o] + a;
                        r[o] = f, a = f >> 8
                    }
                    if (a) throw new Error("number is out of range")
                }
                return r
            }

            function y(e, t) {
                void 0 === t && (t = 1);
                for (var r = Array(t).fill("0".charCodeAt(0)), n = e.length - 1; n >= 0; --n) {
                    for (var a = e[n], o = 0; o < r.length; ++o) {
                        var f = (r[o] - "0".charCodeAt(0) << 8) + a;
                        r[o] = "0".charCodeAt(0) + f % 10, a = f / 10 | 0
                    }
                    for (; a;) r.push("0".charCodeAt(0) + a % 10), a = a / 10 | 0
                }
                return r.reverse(), String.fromCharCode.apply(String, i(r))
            }

            function v(e, t) {
                for (var r = new Uint8Array(e), n = 0; n < t.length; ++n) {
                    var i = u[t.charCodeAt(n)];
                    if (i < 0) throw new Error("invalid base-58 value");
                    for (var a = 0; a < e; ++a) {
                        var o = 58 * r[a] + i;
                        r[a] = o, i = o >> 8
                    }
                    if (i) throw new Error("base-58 value is out of range")
                }
                return r.reverse(), r
            }

            function g(e, t) {
                var r, n, o, s;
                void 0 === t && (t = 1);
                var c = [];
                try {
                    for (var h = a(e), l = h.next(); !l.done; l = h.next()) {
                        for (var p = l.value, d = 0; d < c.length; ++d) {
                            var y = (u[c[d]] << 8) + p;
                            c[d] = f.charCodeAt(y % 58), p = y / 58 | 0
                        }
                        for (; p;) c.push(f.charCodeAt(p % 58)), p = p / 58 | 0
                    }
                } catch (e) {
                    r = {
                        error: e
                    }
                } finally {
                    try {
                        l && !l.done && (n = h.return) && n.call(h)
                    } finally {
                        if (r) throw r.error
                    }
                }
                try {
                    for (var v = a(e), g = v.next(); !g.done; g = v.next()) {
                        if (g.value) break;
                        c.push("1".charCodeAt(0))
                    }
                } catch (e) {
                    o = {
                        error: e
                    }
                } finally {
                    try {
                        g && !g.done && (s = v.return) && s.call(v)
                    } finally {
                        if (o) throw o.error
                    }
                }
                return c.reverse(), String.fromCharCode.apply(String, i(c))
            }

            function m(e, t) {
                for (var r = new Uint8Array(e.length + t.length), n = 0; n < e.length; ++n) r[n] = e[n];
                for (n = 0; n < t.length; ++n) r[e.length + n] = t.charCodeAt(n);
                return o(r)
            }

            function b(e, t, r, n) {
                var i = v(r + 4, e),
                    a = {
                        type: t,
                        data: new Uint8Array(i.buffer, 0, r)
                    },
                    o = new Uint8Array(m(a.data, n));
                if (o[0] !== i[r + 0] || o[1] !== i[r + 1] || o[2] !== i[r + 2] || o[3] !== i[r + 3]) throw new Error("checksum doesn't match");
                return a
            }

            function w(e, t, r) {
                for (var n = new Uint8Array(m(e.data, t)), i = new Uint8Array(e.data.length + 4), a = 0; a < e.data.length; ++a) i[a] = e.data[a];
                for (a = 0; a < 4; ++a) i[a + e.data.length] = n[a];
                return r + g(i)
            }

            function _(e) {
                if ("string" != typeof e) throw new Error("expected string containing public key");
                if ("EOS" === e.substr(0, 3)) {
                    for (var r = v(t.publicKeyDataSize + 4, e.substr(3)), n = {
                            type: c.k1,
                            data: new Uint8Array(t.publicKeyDataSize)
                        }, i = 0; i < t.publicKeyDataSize; ++i) n.data[i] = r[i];
                    var a = new Uint8Array(o(n.data));
                    if (a[0] !== r[t.publicKeyDataSize] || a[1] !== r[34] || a[2] !== r[35] || a[3] !== r[36]) throw new Error("checksum doesn't match");
                    return n
                }
                if ("PUB_K1_" === e.substr(0, 7)) return b(e.substr(7), c.k1, t.publicKeyDataSize, "K1");
                if ("PUB_R1_" === e.substr(0, 7)) return b(e.substr(7), c.r1, t.publicKeyDataSize, "R1");
                throw new Error("unrecognized public key format")
            }

            function B(e) {
                if (e.type === c.k1 && e.data.length === t.publicKeyDataSize) return w(e, "K1", "PUB_K1_");
                if (e.type === c.r1 && e.data.length === t.publicKeyDataSize) return w(e, "R1", "PUB_R1_");
                throw new Error("unrecognized public key format")
            }

            function S(e) {
                return "EOS" === e.substr(0, 3) ? B(_(e)) : e
            }
            t.isNegative = l, t.negate = p, t.decimalToBinary = d, t.signedDecimalToBinary = function(e, t) {
                    var r = "-" === t[0];
                    r && (t = t.substr(1));
                    var n = d(e, t);
                    if (r) {
                        if (p(n), !l(n)) throw new Error("number is out of range")
                    } else if (l(n)) throw new Error("number is out of range");
                    return n
                }, t.binaryToDecimal = y, t.signedBinaryToDecimal = function(e, t) {
                    if (void 0 === t && (t = 1), l(e)) {
                        var r = e.slice();
                        return p(r), "-" + y(r, t)
                    }
                    return y(e, t)
                }, t.base58ToBinary = v, t.binaryToBase58 = g, t.base64ToBinary = function(e) {
                    var t = e.length;
                    if (1 == (3 & t) && "=" === e[t - 1] && (t -= 1), 0 != (3 & t)) throw new Error("base-64 value is not padded correctly");
                    var r = t >> 2,
                        n = 3 * r;
                    t > 0 && "=" === e[t - 1] && ("=" === e[t - 2] ? n -= 2 : n -= 1);
                    for (var i = new Uint8Array(n), a = 0; a < r; ++a) {
                        var o = h[e.charCodeAt(4 * a + 0)],
                            f = h[e.charCodeAt(4 * a + 1)],
                            s = h[e.charCodeAt(4 * a + 2)],
                            u = h[e.charCodeAt(4 * a + 3)];
                        i[3 * a + 0] = o << 2 | f >> 4, 3 * a + 1 < n && (i[3 * a + 1] = (15 & f) << 4 | s >> 2), 3 * a + 2 < n && (i[3 * a + 2] = (3 & s) << 6 | u)
                    }
                    return i
                },
                function(e) {
                    e[e.k1 = 0] = "k1", e[e.r1 = 1] = "r1"
                }(c = t.KeyType || (t.KeyType = {})), t.publicKeyDataSize = 33, t.privateKeyDataSize = 32, t.signatureDataSize = 65, t.stringToPublicKey = _, t.publicKeyToString = B, t.convertLegacyPublicKey = S, t.convertLegacyPublicKeys = function(e) {
                    return e.map(S)
                }, t.stringToPrivateKey = function(e) {
                    if ("string" != typeof e) throw new Error("expected string containing private key");
                    if ("PVT_R1_" === e.substr(0, 7)) return b(e.substr(7), c.r1, t.privateKeyDataSize, "R1");
                    throw new Error("unrecognized private key format")
                }, t.privateKeyToString = function(e) {
                    if (e.type === c.r1) return w(e, "R1", "PVT_R1_");
                    throw new Error("unrecognized private key format")
                }, t.stringToSignature = function(e) {
                    if ("string" != typeof e) throw new Error("expected string containing signature");
                    if ("SIG_K1_" === e.substr(0, 7)) return b(e.substr(7), c.k1, t.signatureDataSize, "K1");
                    if ("SIG_R1_" === e.substr(0, 7)) return b(e.substr(7), c.r1, t.signatureDataSize, "R1");
                    throw new Error("unrecognized signature format")
                }, t.signatureToString = function(e) {
                    if (e.type === c.k1) return w(e, "K1", "SIG_K1_");
                    if (e.type === c.r1) return w(e, "R1", "SIG_R1_");
                    throw new Error("unrecognized signature format")
                }
        }
    }
]);