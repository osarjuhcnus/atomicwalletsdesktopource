(window.webpackJsonp = window.webpackJsonp || []).push([
    [275], {
        5428: function(e, t, r) {
            "use strict";
            var n = r(2);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var i = n(r(9583)),
                o = n(r(461)),
                s = r(29),
                a = r(930);
            class QTUMCoin extends((0, a.BitcoreMixin)((0, a.BitcoinLikeFeeMixin)(o.default))) {
                constructor({
                    alias: e,
                    notify: t,
                    feeData: r,
                    explorers: n,
                    txWebUrl: o,
                    socket: s
                }) {
                    super({
                        alias: e,
                        notify: t,
                        name: "QTUM",
                        ticker: "QTUM",
                        decimal: 8,
                        derivation: "m/44'/2301'/0'/0/0",
                        unspendableBalance: "0",
                        explorers: n,
                        txWebUrl: o,
                        socket: s
                    }), this.derivation = "m/44'/2301'/0'/0/0", this.feePerByte = r.feePerByte, this.coefficient = r.coefficient, this.coreLibrary = i.default, this.network = this.coreLibrary.Networks.livenet
                }
                async validateAddress(e) {
                    return this.coreLibrary.Address.isValid(e, this.network)
                }
                async createTransaction({
                    address: e,
                    amount: t
                }) {
                    const r = await this.getUnspentOutputs(this.address),
                        n = await this.getFee({
                            utxos: r
                        }),
                        o = [],
                        a = new this.BN(t).add(n);
                    let u = new this.BN(0);
                    r.forEach(({
                        txid: e,
                        vout: t,
                        address: r,
                        script: n,
                        value: i
                    }) => {
                        if (u.lt(a)) {
                            const s = new this.BN(i);
                            u = u.add(s), o.push({
                                txId: e,
                                outputIndex: t,
                                address: r,
                                script: n,
                                satoshis: Number(i)
                            })
                        }
                    });
                    if (u.sub(new this.BN(t)).sub(n).lt(0)) throw new s.InsufficientFundsError;
                    return (new i.default.Transaction).from(o).to(e, Number(t)).fee(n.toNumber()).feePerKb(1e3 * this.getFeePerByte().toNumber()).change(this.address).sign(this.privateKey).serialize()
                }
            }
            var u = QTUMCoin;
            t.default = u
        },
        5601: function(e, t, r) {
            "use strict";
            var n = r(5745),
                i = r(5505),
                o = r(5489),
                s = function(e) {
                    for (var t = new Buffer(e.length), r = 0; r < e.length; r++) t[r] = e[e.length - 1 - r];
                    return t
                };
            n.Zero = new n(0), n.One = new n(1), n.Minus1 = new n(-1), n.fromNumber = function(e) {
                return i.checkArgument(o.isNumber(e)), new n(e)
            }, n.fromString = function(e, t) {
                return i.checkArgument(o.isString(e)), new n(e, t)
            }, n.fromBuffer = function(e, t) {
                void 0 !== t && "little" === t.endian && (e = s(e));
                var r = e.toString("hex");
                return new n(r, 16)
            }, n.fromSM = function(e, t) {
                var r;
                if (0 === e.length) return n.fromBuffer(new Buffer([0]));
                var i = "big";
                return t && (i = t.endian), "little" === i && (e = s(e)), 128 & e[0] ? (e[0] = 127 & e[0], (r = n.fromBuffer(e)).neg().copy(r)) : r = n.fromBuffer(e), r
            }, n.prototype.toNumber = function() {
                return parseInt(this.toString(10), 10)
            }, n.prototype.toBuffer = function(e) {
                var t, r;
                if (e && e.size) {
                    var i = (r = this.toString(16, 2)).length / 2;
                    t = new Buffer(r, "hex"), i === e.size ? t = t : i > e.size ? t = n.trim(t, i) : i < e.size && (t = n.pad(t, i, e.size))
                } else r = this.toString(16, 2), t = new Buffer(r, "hex");
                return void 0 !== e && "little" === e.endian && (t = s(t)), t
            }, n.prototype.toSMBigEndian = function() {
                var e;
                return -1 === this.cmp(n.Zero) ? 128 & (e = this.neg().toBuffer())[0] ? e = Buffer.concat([new Buffer([128]), e]) : e[0] = 128 | e[0] : 128 & (e = this.toBuffer())[0] && (e = Buffer.concat([new Buffer([0]), e])), 1 === e.length & 0 === e[0] && (e = new Buffer([])), e
            }, n.prototype.toSM = function(e) {
                var t = e ? e.endian : "big",
                    r = this.toSMBigEndian();
                return "little" === t && (r = s(r)), r
            }, n.fromScriptNumBuffer = function(e, t, r) {
                var o = r || 4;
                if (i.checkArgument(e.length <= o, new Error("script number overflow")), t && e.length > 0 && 0 == (127 & e[e.length - 1]) && (e.length <= 1 || 0 == (128 & e[e.length - 2]))) throw new Error("non-minimally encoded script number");
                return n.fromSM(e, {
                    endian: "little"
                })
            }, n.prototype.toScriptNumBuffer = function() {
                return this.toSM({
                    endian: "little"
                })
            }, n.prototype.gt = function(e) {
                return this.cmp(e) > 0
            }, n.prototype.gte = function(e) {
                return this.cmp(e) >= 0
            }, n.prototype.lt = function(e) {
                return this.cmp(e) < 0
            }, n.trim = function(e, t) {
                return e.slice(t - e.length, e.length)
            }, n.pad = function(e, t, r) {
                for (var n = new Buffer(r), i = 0; i < e.length; i++) n[n.length - 1 - i] = e[e.length - 1 - i];
                for (i = 0; i < r - t; i++) n[i] = 0;
                return n
            }, e.exports = n
        },
        5607: function(e, t, r) {
            "use strict";
            var n = r(24),
                i = r(5516),
                o = r(5505),
                s = e.exports;
            s.sha1 = function(e) {
                return o.checkArgument(i.isBuffer(e)), n.createHash("sha1").update(e).digest()
            }, s.sha1.blocksize = 512, s.sha256 = function(e) {
                return o.checkArgument(i.isBuffer(e)), n.createHash("sha256").update(e).digest()
            }, s.sha256.blocksize = 512, s.sha256sha256 = function(e) {
                return o.checkArgument(i.isBuffer(e)), s.sha256(s.sha256(e))
            }, s.ripemd160 = function(e) {
                return o.checkArgument(i.isBuffer(e)), n.createHash("ripemd160").update(e).digest()
            }, s.sha256ripemd160 = function(e) {
                return o.checkArgument(i.isBuffer(e)), s.ripemd160(s.sha256(e))
            }, s.sha512 = function(e) {
                return o.checkArgument(i.isBuffer(e)), n.createHash("sha512").update(e).digest()
            }, s.sha512.blocksize = 1024, s.hmac = function(e, t, r) {
                o.checkArgument(i.isBuffer(t)), o.checkArgument(i.isBuffer(r)), o.checkArgument(e.blocksize);
                var n = e.blocksize / 8;
                if (r.length > n) r = e(r);
                else if (r < n) {
                    var s = new Buffer(n);
                    s.fill(0), r.copy(s), r = s
                }
                var a = new Buffer(n);
                a.fill(92);
                var u = new Buffer(n);
                u.fill(54);
                for (var f = new Buffer(n), h = new Buffer(n), c = 0; c < n; c++) f[c] = a[c] ^ r[c], h[c] = u[c] ^ r[c];
                return e(Buffer.concat([f, e(Buffer.concat([h, t]))]))
            }, s.sha256hmac = function(e, t) {
                return s.hmac(s.sha256, e, t)
            }, s.sha512hmac = function(e, t) {
                return s.hmac(s.sha512, e, t)
            }
        },
        5669: function(e, t, r) {
            "use strict";
            var n = r(5489);

            function i(e, t) {
                return e.replace("{0}", t[0]).replace("{1}", t[1]).replace("{2}", t[2])
            }
            var o = function(e, t) {
                    var r = function() {
                        if (n.isString(t.message)) this.message = i(t.message, arguments);
                        else {
                            if (!n.isFunction(t.message)) throw new Error("Invalid error definition for " + t.name);
                            this.message = t.message.apply(null, arguments)
                        }
                        this.stack = this.message + "\n" + (new Error).stack
                    };
                    return (r.prototype = Object.create(e.prototype)).name = e.prototype.name + t.name, e[t.name] = r, t.errors && s(r, t.errors), r
                },
                s = function(e, t) {
                    n.each(t, (function(t) {
                        o(e, t)
                    }))
                },
                a = {
                    Error: function() {
                        this.message = "Internal error", this.stack = this.message + "\n" + (new Error).stack
                    }
                };
            a.Error.prototype = Object.create(Error.prototype), a.Error.prototype.name = "bitcore.Error";
            var u, f = r(9585);
            u = a.Error, s(u, f), e.exports = a.Error, e.exports.extend = function(e) {
                return o(a.Error, e)
            }
        },
        5670: function(e, t, r) {
            "use strict";
            var n = r(5601),
                i = r(5489),
                o = r(5505),
                s = r(5516),
                a = r(5583),
                u = function e(t, r) {
                    if (!(this instanceof e)) return new e(t, r);
                    if (t instanceof n) this.set({
                        r: t,
                        s: r
                    });
                    else if (t) {
                        var i = t;
                        this.set(i)
                    }
                };
            u.prototype.set = function(e) {
                return this.r = e.r || this.r || void 0, this.s = e.s || this.s || void 0, this.i = void 0 !== e.i ? e.i : this.i, this.compressed = void 0 !== e.compressed ? e.compressed : this.compressed, this.nhashtype = e.nhashtype || this.nhashtype || void 0, this
            }, u.fromCompact = function(e) {
                o.checkArgument(s.isBuffer(e), "Argument is expected to be a Buffer");
                var t = new u,
                    r = !0,
                    i = e.slice(0, 1)[0] - 27 - 4;
                i < 0 && (r = !1, i += 4);
                var a = e.slice(1, 33),
                    f = e.slice(33, 65);
                return o.checkArgument(0 === i || 1 === i || 2 === i || 3 === i, new Error("i must be 0, 1, 2, or 3")), o.checkArgument(32 === a.length, new Error("r must be 32 bytes")), o.checkArgument(32 === f.length, new Error("s must be 32 bytes")), t.compressed = r, t.i = i, t.r = n.fromBuffer(a), t.s = n.fromBuffer(f), t
            }, u.fromDER = u.fromBuffer = function(e, t) {
                var r = u.parseDER(e, t),
                    n = new u;
                return n.r = r.r, n.s = r.s, n
            }, u.fromTxFormat = function(e) {
                var t = e.readUInt8(e.length - 1),
                    r = e.slice(0, e.length - 1),
                    n = new u.fromDER(r, !1);
                return n.nhashtype = t, n
            }, u.fromString = function(e) {
                var t = new Buffer(e, "hex");
                return u.fromDER(t)
            }, u.parseDER = function(e, t) {
                o.checkArgument(s.isBuffer(e), new Error("DER formatted signature should be a buffer")), i.isUndefined(t) && (t = !0);
                var r = e[0];
                o.checkArgument(48 === r, new Error("Header byte should be 0x30"));
                var a = e[1],
                    u = e.slice(2).length;
                o.checkArgument(!t || a === u, new Error("Length byte should length of what follows")), a = a < u ? a : u;
                var f = e[2];
                o.checkArgument(2 === f, new Error("Integer byte for r should be 0x02"));
                var h = e[3],
                    c = e.slice(4, 4 + h),
                    d = n.fromBuffer(c),
                    p = 0 === e[4];
                o.checkArgument(h === c.length, new Error("Length of r incorrect"));
                var m = e[4 + h + 0];
                o.checkArgument(2 === m, new Error("Integer byte for s should be 0x02"));
                var l = e[4 + h + 1],
                    g = e.slice(4 + h + 2, 4 + h + 2 + l),
                    v = n.fromBuffer(g),
                    y = 0 === e[4 + h + 2 + 2];
                o.checkArgument(l === g.length, new Error("Length of s incorrect"));
                var w = 4 + h + 2 + l;
                return o.checkArgument(a === w - 2, new Error("Length of signature incorrect")), {
                    header: r,
                    length: a,
                    rheader: f,
                    rlength: h,
                    rneg: p,
                    rbuf: c,
                    r: d,
                    sheader: m,
                    slength: l,
                    sneg: y,
                    sbuf: g,
                    s: v
                }
            }, u.prototype.toCompact = function(e, t) {
                if (e = "number" == typeof e ? e : this.i, t = "boolean" == typeof t ? t : this.compressed, 0 !== e && 1 !== e && 2 !== e && 3 !== e) throw new Error("i must be equal to 0, 1, 2, or 3");
                var r = e + 27 + 4;
                !1 === t && (r -= 4);
                var n = new Buffer([r]),
                    i = this.r.toBuffer({
                        size: 32
                    }),
                    o = this.s.toBuffer({
                        size: 32
                    });
                return Buffer.concat([n, i, o])
            }, u.prototype.toBuffer = u.prototype.toDER = function() {
                var e = this.r.toBuffer(),
                    t = this.s.toBuffer(),
                    r = !!(128 & e[0]),
                    n = !!(128 & t[0]),
                    i = r ? Buffer.concat([new Buffer([0]), e]) : e,
                    o = n ? Buffer.concat([new Buffer([0]), t]) : t,
                    s = i.length,
                    a = o.length,
                    u = 2 + s + 2 + a;
                return Buffer.concat([new Buffer([48, u, 2, s]), i, new Buffer([2, a]), o])
            }, u.prototype.toString = function() {
                return this.toDER().toString("hex")
            }, u.isTxDER = function(e) {
                if (e.length < 9) return !1;
                if (e.length > 73) return !1;
                if (48 !== e[0]) return !1;
                if (e[1] !== e.length - 3) return !1;
                var t = e[3];
                if (5 + t >= e.length) return !1;
                var r = e[5 + t];
                if (t + r + 7 !== e.length) return !1;
                var n = e.slice(4);
                if (2 !== e[2]) return !1;
                if (0 === t) return !1;
                if (128 & n[0]) return !1;
                if (t > 1 && 0 === n[0] && !(128 & n[1])) return !1;
                var i = e.slice(6 + t);
                return 2 === e[6 + t - 2] && (0 !== r && (!(128 & i[0]) && !(r > 1 && 0 === i[0] && !(128 & i[1]))))
            }, u.prototype.hasLowS = function() {
                return !this.s.lt(new n(1)) && !this.s.gt(new n("7FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF5D576E7357A4501DDFE92F46681B20A0", "hex"))
            }, u.prototype.hasDefinedHashtype = function() {
                if (!a.isNaturalNumber(this.nhashtype)) return !1;
                var e = this.nhashtype & ~u.SIGHASH_ANYONECANPAY;
                return !(e < u.SIGHASH_ALL || e > u.SIGHASH_SINGLE)
            }, u.prototype.toTxFormat = function() {
                var e = this.toDER(),
                    t = new Buffer(1);
                return t.writeUInt8(this.nhashtype, 0), Buffer.concat([e, t])
            }, u.SIGHASH_ALL = 1, u.SIGHASH_NONE = 2, u.SIGHASH_SINGLE = 3, u.SIGHASH_ANYONECANPAY = 128, e.exports = u
        },
        5698: function(e, t, r) {
            "use strict";
            var n = r(5601),
                Point = r(5934),
                i = r(5607),
                o = r(5583),
                s = r(5849),
                a = r(5489),
                u = r(5505);

            function f(e, t) {
                if (!(this instanceof f)) return new f(e, t);
                if (u.checkArgument(e, "First argument is required, please include public key data."), e instanceof f) return e;
                t = t || {};
                var r = this._classifyArgs(e, t);
                return r.point.validate(), o.defineImmutable(this, {
                    point: r.point,
                    compressed: r.compressed,
                    network: r.network || s.defaultNetwork
                }), this
            }
            f.prototype._classifyArgs = function(e, t) {
                var r = {
                    compressed: a.isUndefined(t.compressed) || t.compressed
                };
                if (e instanceof Point) r.point = e;
                else if (e.x && e.y) r = f._transformObject(e);
                else if ("string" == typeof e) r = f._transformDER(new Buffer(e, "hex"));
                else if (f._isBuffer(e)) r = f._transformDER(e);
                else {
                    if (!f._isPrivateKey(e)) throw new TypeError("First argument is an unrecognized data format.");
                    r = f._transformPrivateKey(e)
                }
                return r.network || (r.network = a.isUndefined(t.network) ? void 0 : s.get(t.network)), r
            }, f._isPrivateKey = function(e) {
                return e instanceof r(6209)
            }, f._isBuffer = function(e) {
                return e instanceof Buffer || e instanceof Uint8Array
            }, f._transformPrivateKey = function(e) {
                u.checkArgument(f._isPrivateKey(e), "Must be an instance of PrivateKey");
                var t = {};
                return t.point = Point.getG().mul(e.bn), t.compressed = e.compressed, t.network = e.network, t
            }, f._transformDER = function(e, t) {
                u.checkArgument(f._isBuffer(e), "Must be a hex buffer of DER encoded public key");
                var r, i, o, s, h = {};
                if (t = !!a.isUndefined(t) || t, 4 !== e[0] && (t || 6 !== e[0] && 7 !== e[0]))
                    if (3 === e[0]) o = e.slice(1), r = new n(o), (h = f._transformX(!0, r)).compressed = !0;
                    else {
                        if (2 !== e[0]) throw new TypeError("Invalid DER format public key");
                        o = e.slice(1), r = new n(o), (h = f._transformX(!1, r)).compressed = !0
                    }
                else {
                    if (o = e.slice(1, 33), s = e.slice(33, 65), 32 !== o.length || 32 !== s.length || 65 !== e.length) throw new TypeError("Length of x and y must be 32 bytes");
                    r = new n(o), i = new n(s), h.point = new Point(r, i), h.compressed = !1
                }
                return h
            }, f._transformX = function(e, t) {
                u.checkArgument("boolean" == typeof e, "Must specify whether y is odd or not (true or false)");
                var r = {};
                return r.point = Point.fromX(e, t), r
            }, f._transformObject = function(e) {
                var t = new n(e.x, "hex"),
                    r = new n(e.y, "hex");
                return new f(new Point(t, r), {
                    compressed: e.compressed
                })
            }, f.fromPrivateKey = function(e) {
                u.checkArgument(f._isPrivateKey(e), "Must be an instance of PrivateKey");
                var t = f._transformPrivateKey(e);
                return new f(t.point, {
                    compressed: t.compressed,
                    network: t.network
                })
            }, f.fromDER = f.fromBuffer = function(e, t) {
                u.checkArgument(f._isBuffer(e), "Must be a hex buffer of DER encoded public key");
                var r = f._transformDER(e, t);
                return new f(r.point, {
                    compressed: r.compressed
                })
            }, f.fromPoint = function(e, t) {
                return u.checkArgument(e instanceof Point, "First argument must be an instance of Point."), new f(e, {
                    compressed: t
                })
            }, f.fromString = function(e, t) {
                var r = new Buffer(e, t || "hex"),
                    n = f._transformDER(r);
                return new f(n.point, {
                    compressed: n.compressed
                })
            }, f.fromX = function(e, t) {
                var r = f._transformX(e, t);
                return new f(r.point, {
                    compressed: r.compressed
                })
            }, f.getValidationError = function(e) {
                var t;
                try {
                    new f(e)
                } catch (e) {
                    t = e
                }
                return t
            }, f.isValid = function(e) {
                return !f.getValidationError(e)
            }, f.prototype.toObject = f.prototype.toJSON = function() {
                return {
                    x: this.point.getX().toString("hex", 2),
                    y: this.point.getY().toString("hex", 2),
                    compressed: this.compressed
                }
            }, f.prototype.toBuffer = f.prototype.toDER = function() {
                var e, t = this.point.getX(),
                    r = this.point.getY(),
                    n = t.toBuffer({
                        size: 32
                    }),
                    i = r.toBuffer({
                        size: 32
                    });
                return this.compressed ? (e = i[i.length - 1] % 2 ? new Buffer([3]) : new Buffer([2]), Buffer.concat([e, n])) : (e = new Buffer([4]), Buffer.concat([e, n, i]))
            }, f.prototype._getID = function() {
                return i.sha256ripemd160(this.toBuffer())
            }, f.prototype.toAddress = function(e) {
                return r(5850).fromPublicKey(this, e || this.network)
            }, f.prototype.toString = function() {
                return this.toDER().toString("hex")
            }, f.prototype.inspect = function() {
                return "<PublicKey: " + this.toString() + (this.compressed ? "" : ", uncompressed") + ">"
            }, e.exports = f
        },
        5699: function(e, t, r) {
            "use strict";
            var n = r(5516),
                i = r(72),
                o = function e(t) {
                    if (!(this instanceof e)) return new e(t);
                    t ? this.set(t) : this.bufs = []
                };
            o.prototype.set = function(e) {
                return this.bufs = e.bufs || this.bufs || [], this
            }, o.prototype.toBuffer = function() {
                return this.concat()
            }, o.prototype.concat = function() {
                return Buffer.concat(this.bufs)
            }, o.prototype.write = function(e) {
                return i(n.isBuffer(e)), this.bufs.push(e), this
            }, o.prototype.writeReverse = function(e) {
                return i(n.isBuffer(e)), this.bufs.push(n.reverse(e)), this
            }, o.prototype.writeUInt8 = function(e) {
                var t = new Buffer(1);
                return t.writeUInt8(e, 0), this.write(t), this
            }, o.prototype.writeUInt16BE = function(e) {
                var t = new Buffer(2);
                return t.writeUInt16BE(e, 0), this.write(t), this
            }, o.prototype.writeUInt16LE = function(e) {
                var t = new Buffer(2);
                return t.writeUInt16LE(e, 0), this.write(t), this
            }, o.prototype.writeUInt32BE = function(e) {
                var t = new Buffer(4);
                return t.writeUInt32BE(e, 0), this.write(t), this
            }, o.prototype.writeInt32LE = function(e) {
                var t = new Buffer(4);
                return t.writeInt32LE(e, 0), this.write(t), this
            }, o.prototype.writeUInt32LE = function(e) {
                var t = new Buffer(4);
                return t.writeUInt32LE(e, 0), this.write(t), this
            }, o.prototype.writeUInt64BEBN = function(e) {
                var t = e.toBuffer({
                    size: 8
                });
                return this.write(t), this
            }, o.prototype.writeUInt64LEBN = function(e) {
                var t = e.toBuffer({
                    size: 8
                });
                return this.writeReverse(t), this
            }, o.prototype.writeVarintNum = function(e) {
                var t = o.varintBufNum(e);
                return this.write(t), this
            }, o.prototype.writeVarintBN = function(e) {
                var t = o.varintBufBN(e);
                return this.write(t), this
            }, o.varintBufNum = function(e) {
                var t = void 0;
                return e < 253 ? (t = new Buffer(1)).writeUInt8(e, 0) : e < 65536 ? ((t = new Buffer(3)).writeUInt8(253, 0), t.writeUInt16LE(e, 1)) : e < 4294967296 ? ((t = new Buffer(5)).writeUInt8(254, 0), t.writeUInt32LE(e, 1)) : ((t = new Buffer(9)).writeUInt8(255, 0), t.writeInt32LE(-1 & e, 1), t.writeUInt32LE(Math.floor(e / 4294967296), 5)), t
            }, o.varintBufBN = function(e) {
                var t = void 0,
                    r = e.toNumber();
                if (r < 253)(t = new Buffer(1)).writeUInt8(r, 0);
                else if (r < 65536)(t = new Buffer(3)).writeUInt8(253, 0), t.writeUInt16LE(r, 1);
                else if (r < 4294967296)(t = new Buffer(5)).writeUInt8(254, 0), t.writeUInt32LE(r, 1);
                else {
                    var n = new o;
                    n.writeUInt8(255), n.writeUInt64LEBN(e);
                    t = n.concat()
                }
                return t
            }, e.exports = o
        },
        5789: function(e, t, r) {
            "use strict";
            var n = r(5489),
                i = r(5505),
                o = r(5516),
                s = r(5601),
                a = function e(t) {
                    if (!(this instanceof e)) return new e(t);
                    if (!n.isUndefined(t))
                        if (Buffer.isBuffer(t)) this.set({
                            buf: t
                        });
                        else if (n.isString(t)) this.set({
                        buf: new Buffer(t, "hex")
                    });
                    else {
                        if (!n.isObject(t)) throw new TypeError("Unrecognized argument for BufferReader");
                        var r = t;
                        this.set(r)
                    }
                };
            a.prototype.set = function(e) {
                return this.buf = e.buf || this.buf || void 0, this.pos = e.pos || this.pos || 0, this
            }, a.prototype.eof = function() {
                return this.pos >= this.buf.length
            }, a.prototype.finished = a.prototype.eof, a.prototype.read = function(e) {
                i.checkArgument(!n.isUndefined(e), "Must specify a length");
                var t = this.buf.slice(this.pos, this.pos + e);
                return this.pos = this.pos + e, t
            }, a.prototype.readAll = function() {
                var e = this.buf.slice(this.pos, this.buf.length);
                return this.pos = this.buf.length, e
            }, a.prototype.readUInt8 = function() {
                var e = this.buf.readUInt8(this.pos);
                return this.pos = this.pos + 1, e
            }, a.prototype.readUInt16BE = function() {
                var e = this.buf.readUInt16BE(this.pos);
                return this.pos = this.pos + 2, e
            }, a.prototype.readUInt16LE = function() {
                var e = this.buf.readUInt16LE(this.pos);
                return this.pos = this.pos + 2, e
            }, a.prototype.readUInt32BE = function() {
                var e = this.buf.readUInt32BE(this.pos);
                return this.pos = this.pos + 4, e
            }, a.prototype.readUInt32LE = function() {
                var e = this.buf.readUInt32LE(this.pos);
                return this.pos = this.pos + 4, e
            }, a.prototype.readInt32LE = function() {
                var e = this.buf.readInt32LE(this.pos);
                return this.pos = this.pos + 4, e
            }, a.prototype.readUInt64BEBN = function() {
                var e = this.buf.slice(this.pos, this.pos + 8),
                    t = s.fromBuffer(e);
                return this.pos = this.pos + 8, t
            }, a.prototype.readUInt64LEBN = function() {
                var e, t = this.buf.readUInt32LE(this.pos),
                    r = 4294967296 * this.buf.readUInt32LE(this.pos + 4) + t;
                if (r <= 9007199254740991) e = new s(r);
                else {
                    var n = Array.prototype.slice.call(this.buf, this.pos, this.pos + 8);
                    e = new s(n, 10, "le")
                }
                return this.pos = this.pos + 8, e
            }, a.prototype.readVarintNum = function() {
                var e = this.readUInt8();
                switch (e) {
                    case 253:
                        return this.readUInt16LE();
                    case 254:
                        return this.readUInt32LE();
                    case 255:
                        var t = this.readUInt64LEBN().toNumber();
                        if (t <= Math.pow(2, 53)) return t;
                        throw new Error("number too large to retain precision - use readVarintBN");
                    default:
                        return e
                }
            }, a.prototype.readVarLengthBuffer = function() {
                var e = this.readVarintNum(),
                    t = this.read(e);
                return i.checkState(t.length === e, "Invalid length while reading varlength buffer. Expected to read: " + e + " and read " + t.length), t
            }, a.prototype.readVarintBuf = function() {
                switch (this.buf.readUInt8(this.pos)) {
                    case 253:
                        return this.read(3);
                    case 254:
                        return this.read(5);
                    case 255:
                        return this.read(9);
                    default:
                        return this.read(1)
                }
            }, a.prototype.readVarintBN = function() {
                var e = this.readUInt8();
                switch (e) {
                    case 253:
                        return new s(this.readUInt16LE());
                    case 254:
                        return new s(this.readUInt32LE());
                    case 255:
                        return this.readUInt64LEBN();
                    default:
                        return new s(e)
                }
            }, a.prototype.reverse = function() {
                for (var e = new Buffer(this.buf.length), t = 0; t < e.length; t++) e[t] = this.buf[this.buf.length - 1 - t];
                return this.buf = e, this
            }, a.prototype.readReverse = function(e) {
                n.isUndefined(e) && (e = this.buf.length);
                var t = this.buf.slice(this.pos, this.pos + e);
                return this.pos = this.pos + e, o.reverse(t)
            }, e.exports = a
        },
        5849: function(e, t, r) {
            "use strict";
            var n = r(5489),
                i = r(5516),
                o = r(5583),
                s = [],
                a = {};

            function u() {}

            function f(e, t) {
                if (~s.indexOf(e)) return e;
                if (!t) return a[e];
                n.isArray(t) || (t = [t]);
                var r = function(t) {
                    return s[i][t] === e
                };
                for (var i in s)
                    if (n.any(t, r)) return s[i]
            }

            function h(e) {
                var t = new u;
                return o.defineImmutable(t, {
                    name: e.name,
                    alias: e.alias,
                    pubkeyhash: e.pubkeyhash,
                    privatekey: e.privatekey,
                    scripthash: e.scripthash,
                    xpubkey: e.xpubkey,
                    xprivkey: e.xprivkey
                }), e.networkMagic && o.defineImmutable(t, {
                    networkMagic: i.integerAsBuffer(e.networkMagic)
                }), e.port && o.defineImmutable(t, {
                    port: e.port
                }), e.dnsSeeds && o.defineImmutable(t, {
                    dnsSeeds: e.dnsSeeds
                }), n.each(t, (function(e) {
                    n.isUndefined(e) || n.isObject(e) || (a[e] = t)
                })), s.push(t), t
            }
            u.prototype.toString = function() {
                return this.name
            }, h({
                name: "livenet",
                alias: "mainnet",
                pubkeyhash: 58,
                privatekey: 128,
                scripthash: 50,
                xpubkey: 76067358,
                xprivkey: 76066276,
                networkMagic: 4190024921,
                port: 8333,
                dnsSeeds: []
            });
            var c = f("livenet");
            h({
                name: "testnet",
                alias: "regtest",
                pubkeyhash: 120,
                privatekey: 239,
                scripthash: 110,
                xpubkey: 70617039,
                xprivkey: 70615956
            });
            var d = f("testnet"),
                p = {
                    PORT: 18333,
                    NETWORK_MAGIC: i.integerAsBuffer(185665799),
                    DNS_SEEDS: []
                };
            for (var m in p) n.isObject(p[m]) || (a[p[m]] = d);
            var l = {
                PORT: 18444,
                NETWORK_MAGIC: i.integerAsBuffer(4206867930),
                DNS_SEEDS: []
            };
            for (var m in l) n.isObject(l[m]) || (a[l[m]] = d);
            Object.defineProperty(d, "port", {
                enumerable: !0,
                configurable: !1,
                get: function() {
                    return this.regtestEnabled ? l.PORT : p.PORT
                }
            }), Object.defineProperty(d, "networkMagic", {
                enumerable: !0,
                configurable: !1,
                get: function() {
                    return this.regtestEnabled ? l.NETWORK_MAGIC : p.NETWORK_MAGIC
                }
            }), Object.defineProperty(d, "dnsSeeds", {
                enumerable: !0,
                configurable: !1,
                get: function() {
                    return this.regtestEnabled ? l.DNS_SEEDS : p.DNS_SEEDS
                }
            }), e.exports = {
                add: h,
                remove: function(e) {
                    for (var t = 0; t < s.length; t++) s[t] === e && s.splice(t, 1);
                    for (var r in a) a[r] === e && delete a[r]
                },
                defaultNetwork: c,
                livenet: c,
                mainnet: c,
                testnet: d,
                get: f,
                enableRegtest: function() {
                    d.regtestEnabled = !0
                },
                disableRegtest: function() {
                    d.regtestEnabled = !1
                }
            }
        },
        5850: function(e, t, r) {
            "use strict";
            var n = r(5489),
                i = r(5505),
                o = r(5669),
                s = r(6060),
                a = r(5849),
                u = r(5607),
                f = r(5583),
                h = r(5698);

            function c(e, t, r) {
                if (!(this instanceof c)) return new c(e, t, r);
                if (n.isArray(e) && n.isNumber(t)) return c.createMultisig(e, t, r);
                if (e instanceof c) return e;
                if (i.checkArgument(e, "First argument is required, please include address data.", "guide/address.html"), t && !a.get(t)) throw new TypeError('Second argument must be "livenet" or "testnet".');
                if (r && r !== c.PayToPublicKeyHash && r !== c.PayToScriptHash) throw new TypeError('Third argument must be "pubkeyhash" or "scripthash".');
                var o = this._classifyArguments(e, t, r);
                return o.network = o.network || a.get(t) || a.defaultNetwork, o.type = o.type || r || c.PayToPublicKeyHash, f.defineImmutable(this, {
                    hashBuffer: o.hashBuffer,
                    network: o.network,
                    type: o.type
                }), this
            }
            c.prototype._classifyArguments = function(e, t, r) {
                if ((e instanceof Buffer || e instanceof Uint8Array) && 20 === e.length) return c._transformHash(e);
                if ((e instanceof Buffer || e instanceof Uint8Array) && 21 === e.length) return c._transformBuffer(e, t, r);
                if (e instanceof h) return c._transformPublicKey(e);
                if (e instanceof d) return c._transformScript(e, t);
                if ("string" == typeof e) return c._transformString(e, t, r);
                if (n.isObject(e)) return c._transformObject(e);
                throw new TypeError("First argument is an unrecognized data format.")
            }, c.PayToPublicKeyHash = "pubkeyhash", c.PayToScriptHash = "scripthash", c._transformHash = function(e) {
                var t = {};
                if (!(e instanceof Buffer || e instanceof Uint8Array)) throw new TypeError("Address supplied is not a buffer.");
                if (20 !== e.length) throw new TypeError("Address hashbuffers must be exactly 20 bytes.");
                return t.hashBuffer = e, t
            }, c._transformObject = function(e) {
                return i.checkArgument(e.hash || e.hashBuffer, "Must provide a `hash` or `hashBuffer` property"), i.checkArgument(e.type, "Must provide a `type` property"), {
                    hashBuffer: e.hash ? new Buffer(e.hash, "hex") : e.hashBuffer,
                    network: a.get(e.network) || a.defaultNetwork,
                    type: e.type
                }
            }, c._classifyFromVersion = function(e) {
                var t = {},
                    r = a.get(e[0], "pubkeyhash"),
                    n = a.get(e[0], "scripthash");
                return r ? (t.network = r, t.type = c.PayToPublicKeyHash) : n && (t.network = n, t.type = c.PayToScriptHash), t
            }, c._transformBuffer = function(e, t, r) {
                var n = {};
                if (!(e instanceof Buffer || e instanceof Uint8Array)) throw new TypeError("Address supplied is not a buffer.");
                if (21 !== e.length) throw new TypeError("Address buffers must be exactly 21 bytes.");
                t = a.get(t);
                var i = c._classifyFromVersion(e);
                if (!i.network || t && t !== i.network) throw new TypeError("Address has mismatched network type.");
                if (!i.type || r && r !== i.type) throw new TypeError("Address has mismatched type.");
                return n.hashBuffer = e.slice(1), n.network = i.network, n.type = i.type, n
            }, c._transformPublicKey = function(e) {
                var t = {};
                if (!(e instanceof h)) throw new TypeError("Address must be an instance of PublicKey.");
                return t.hashBuffer = u.sha256ripemd160(e.toBuffer()), t.type = c.PayToPublicKeyHash, t
            }, c._transformScript = function(e, t) {
                i.checkArgument(e instanceof d, "script must be a Script instance");
                var r = e.getAddressInfo(t);
                if (!r) throw new o.Script.CantDeriveAddress(e);
                return r
            }, c.createMultisig = function(e, t, r) {
                return r = r || e[0].network || a.defaultNetwork, c.payingTo(d.buildMultisigOut(e, t), r)
            }, c._transformString = function(e, t, r) {
                if ("string" != typeof e) throw new TypeError("data parameter supplied is not a string.");
                e = e.trim();
                var n = s.decode(e);
                return c._transformBuffer(n, t, r)
            }, c.fromPublicKey = function(e, t) {
                var r = c._transformPublicKey(e);
                return t = t || a.defaultNetwork, new c(r.hashBuffer, t, r.type)
            }, c.fromPublicKeyHash = function(e, t) {
                var r = c._transformHash(e);
                return new c(r.hashBuffer, t, c.PayToPublicKeyHash)
            }, c.fromScriptHash = function(e, t) {
                i.checkArgument(e, "hash parameter is required");
                var r = c._transformHash(e);
                return new c(r.hashBuffer, t, c.PayToScriptHash)
            }, c.payingTo = function(e, t) {
                return i.checkArgument(e, "script is required"), i.checkArgument(e instanceof d, "script must be instance of Script"), c.fromScriptHash(u.sha256ripemd160(e.toBuffer()), t)
            }, c.fromScript = function(e, t) {
                i.checkArgument(e instanceof d, "script must be a Script instance");
                var r = c._transformScript(e, t);
                return new c(r.hashBuffer, t, r.type)
            }, c.fromBuffer = function(e, t, r) {
                var n = c._transformBuffer(e, t, r);
                return new c(n.hashBuffer, n.network, n.type)
            }, c.fromString = function(e, t, r) {
                var n = c._transformString(e, t, r);
                return new c(n.hashBuffer, n.network, n.type)
            }, c.fromObject = function(e) {
                return i.checkState(f.isHexa(e.hash), 'Unexpected hash property, "' + e.hash + '", expected to be hex.'), new c(new Buffer(e.hash, "hex"), e.network, e.type)
            }, c.getValidationError = function(e, t, r) {
                var n;
                try {
                    new c(e, t, r)
                } catch (e) {
                    n = e
                }
                return n
            }, c.isValid = function(e, t, r) {
                return !c.getValidationError(e, t, r)
            }, c.prototype.isPayToPublicKeyHash = function() {
                return this.type === c.PayToPublicKeyHash
            }, c.prototype.isPayToScriptHash = function() {
                return this.type === c.PayToScriptHash
            }, c.prototype.toBuffer = function() {
                var e = new Buffer([this.network[this.type]]);
                return Buffer.concat([e, this.hashBuffer])
            }, c.prototype.toObject = c.prototype.toJSON = function() {
                return {
                    hash: this.hashBuffer.toString("hex"),
                    type: this.type,
                    network: this.network.toString()
                }
            }, c.prototype.toString = function() {
                return s.encode(this.toBuffer())
            }, c.prototype.inspect = function() {
                return "<Address: " + this.toString() + ", type: " + this.type + ", network: " + this.network + ">"
            }, e.exports = c;
            var d = r(5671)
        },
        5934: function(e, t, r) {
            "use strict";
            var n = r(5601),
                i = r(5516),
                o = r(5697).curves.secp256k1,
                s = o.curve.point.bind(o.curve),
                a = o.curve.pointFromX.bind(o.curve),
                Point = function(e, t, r) {
                    var n = s(e, t, r);
                    return n.validate(), n
                };
            Point.prototype = Object.getPrototypeOf(o.curve.point()), Point.fromX = function(e, t) {
                var r = a(e, t);
                return r.validate(), r
            }, Point.getG = function() {
                return o.curve.g
            }, Point.getN = function() {
                return new n(o.curve.n.toArray())
            }, Point.prototype._getX = Point.prototype.getX, Point.prototype.getX = function() {
                return new n(this._getX().toArray())
            }, Point.prototype._getY = Point.prototype.getY, Point.prototype.getY = function() {
                return new n(this._getY().toArray())
            }, Point.prototype.validate = function() {
                if (this.isInfinity()) throw new Error("Point cannot be equal to Infinity");
                if (0 === this.getX().cmp(n.Zero) || 0 === this.getY().cmp(n.Zero)) throw new Error("Invalid x,y value for curve, cannot equal 0.");
                if (0 !== a(this.getY().isOdd(), this.getX()).y.cmp(this.y)) throw new Error("Invalid y value for curve.");
                var e = this.getX().gt(n.Minus1) && this.getX().lt(Point.getN()),
                    t = this.getY().gt(n.Minus1) && this.getY().lt(Point.getN());
                if (!e || !t) throw new Error("Point does not lie on the curve");
                if (!this.mul(Point.getN()).isInfinity()) throw new Error("Point times N must be infinity");
                return this
            }, Point.pointToCompressed = function(e) {
                var t, r = e.getX().toBuffer({
                        size: 32
                    }),
                    n = e.getY().toBuffer({
                        size: 32
                    });
                return t = n[n.length - 1] % 2 ? new Buffer([3]) : new Buffer([2]), i.concat([t, r])
            }, e.exports = Point
        },
        6060: function(e, t, r) {
            "use strict";
            var n = r(5489),
                i = r(6210),
                o = r(12),
                s = r(5607).sha256sha256,
                a = function e(t) {
                    if (!(this instanceof e)) return new e(t);
                    if (Buffer.isBuffer(t)) {
                        var r = t;
                        this.fromBuffer(r)
                    } else if ("string" == typeof t) {
                        var n = t;
                        this.fromString(n)
                    } else t && this.set(t)
                };
            a.prototype.set = function(e) {
                return this.buf = e.buf || this.buf || void 0, this
            }, a.validChecksum = function(e, t) {
                return n.isString(e) && (e = new o.Buffer(i.decode(e))), n.isString(t) && (t = new o.Buffer(i.decode(t))), t || (t = e.slice(-4), e = e.slice(0, -4)), a.checksum(e).toString("hex") === t.toString("hex")
            }, a.decode = function(e) {
                if ("string" != typeof e) throw new Error("Input must be a string");
                var t = new Buffer(i.decode(e));
                if (t.length < 4) throw new Error("Input string too short");
                var r = t.slice(0, -4),
                    n = t.slice(-4),
                    o = s(r).slice(0, 4);
                if (n.toString("hex") !== o.toString("hex")) throw new Error("Checksum mismatch");
                return r
            }, a.checksum = function(e) {
                return s(e).slice(0, 4)
            }, a.encode = function(e) {
                if (!Buffer.isBuffer(e)) throw new Error("Input must be a buffer");
                var t = new Buffer(e.length + 4),
                    r = a.checksum(e);
                return e.copy(t), r.copy(t, e.length), i.encode(t)
            }, a.prototype.fromBuffer = function(e) {
                return this.buf = e, this
            }, a.prototype.fromString = function(e) {
                var t = a.decode(e);
                return this.buf = t, this
            }, a.prototype.toBuffer = function() {
                return this.buf
            }, a.prototype.toString = function() {
                return a.encode(this.buf)
            }, e.exports = a
        },
        6209: function(e, t, r) {
            "use strict";
            var n = r(5489),
                i = r(5850),
                o = r(6060),
                s = r(5601),
                a = r(5583),
                u = r(5849),
                Point = r(5934),
                f = r(5698),
                h = r(6212),
                c = r(5505);

            function d(e, t) {
                if (!(this instanceof d)) return new d(e, t);
                if (e instanceof d) return e;
                var r = this._classifyArguments(e, t);
                if (!r.bn || 0 === r.bn.cmp(new s(0))) throw new TypeError("Number can not be equal to zero, undefined, null or false");
                if (!r.bn.lt(Point.getN())) throw new TypeError("Number must be less than N");
                if (void 0 === r.network) throw new TypeError('Must specify the network ("livenet" or "testnet")');
                return a.defineImmutable(this, {
                    bn: r.bn,
                    compressed: r.compressed,
                    network: r.network
                }), Object.defineProperty(this, "publicKey", {
                    configurable: !1,
                    enumerable: !0,
                    get: this.toPublicKey.bind(this)
                }), this
            }
            d.prototype._classifyArguments = function(e, t) {
                var r = {
                    compressed: !0,
                    network: t ? u.get(t) : u.defaultNetwork
                };
                if (n.isUndefined(e) || n.isNull(e)) r.bn = d._getRandomBN();
                else if (e instanceof s) r.bn = e;
                else if (e instanceof Buffer || e instanceof Uint8Array) r = d._transformBuffer(e, t);
                else if (e.bn && e.network) r = d._transformObject(e);
                else if (!t && u.get(e)) r.bn = d._getRandomBN(), r.network = u.get(e);
                else {
                    if ("string" != typeof e) throw new TypeError("First argument is an unrecognized data type.");
                    a.isHexa(e) ? r.bn = new s(new Buffer(e, "hex")) : r = d._transformWIF(e, t)
                }
                return r
            }, d._getRandomBN = function() {
                var e, t;
                do {
                    var r = h.getRandomBuffer(32);
                    e = (t = s.fromBuffer(r)).lt(Point.getN())
                } while (!e);
                return t
            }, d._transformBuffer = function(e, t) {
                var r = {};
                if (32 === e.length) return d._transformBNBuffer(e, t);
                if (r.network = u.get(e[0], "privatekey"), !r.network) throw new Error("Invalid network");
                if (t && r.network !== u.get(t)) throw new TypeError("Private key network mismatch");
                if (34 === e.length && 1 === e[33]) r.compressed = !0;
                else {
                    if (33 !== e.length) throw new Error("Length of buffer must be 33 (uncompressed) or 34 (compressed)");
                    r.compressed = !1
                }
                return r.bn = s.fromBuffer(e.slice(1, 33)), r
            }, d._transformBNBuffer = function(e, t) {
                var r = {};
                return r.network = u.get(t) || u.defaultNetwork, r.bn = s.fromBuffer(e), r.compressed = !1, r
            }, d._transformWIF = function(e, t) {
                return d._transformBuffer(o.decode(e), t)
            }, d.fromBuffer = function(e, t) {
                return new d(e, t)
            }, d._transformObject = function(e) {
                return {
                    bn: new s(e.bn, "hex"),
                    network: u.get(e.network),
                    compressed: e.compressed
                }
            }, d.fromString = d.fromWIF = function(e) {
                return c.checkArgument(n.isString(e), "First argument is expected to be a string."), new d(e)
            }, d.fromObject = function(e) {
                return c.checkArgument(n.isObject(e), "First argument is expected to be an object."), new d(e)
            }, d.fromRandom = function(e) {
                var t = d._getRandomBN();
                return new d(t, e)
            }, d.getValidationError = function(e, t) {
                var r;
                try {
                    new d(e, t)
                } catch (e) {
                    r = e
                }
                return r
            }, d.isValid = function(e, t) {
                return !!e && !d.getValidationError(e, t)
            }, d.prototype.toString = function() {
                return this.toBuffer().toString("hex")
            }, d.prototype.toWIF = function() {
                var e, t = this.network;
                return e = this.compressed ? Buffer.concat([new Buffer([t.privatekey]), this.bn.toBuffer({
                    size: 32
                }), new Buffer([1])]) : Buffer.concat([new Buffer([t.privatekey]), this.bn.toBuffer({
                    size: 32
                })]), o.encode(e)
            }, d.prototype.toBigNumber = function() {
                return this.bn
            }, d.prototype.toBuffer = function() {
                return this.bn.toBuffer()
            }, d.prototype.toBufferNoPadding = function() {
                return this.bn.toBuffer()
            }, d.prototype.toPublicKey = function() {
                return this._pubkey || (this._pubkey = f.fromPrivateKey(this)), this._pubkey
            }, d.prototype.toAddress = function(e) {
                var t = this.toPublicKey();
                return i.fromPublicKey(t, e || this.network)
            }, d.prototype.toObject = d.prototype.toJSON = function() {
                return {
                    bn: this.bn.toString("hex"),
                    compressed: this.compressed,
                    network: this.network.toString()
                }
            }, d.prototype.inspect = function() {
                var e = this.compressed ? "" : ", uncompressed";
                return "<PrivateKey: " + this.toString() + ", network: " + this.network + e + ">"
            }, e.exports = d
        },
        6210: function(e, t, r) {
            "use strict";
            var n = r(5489),
                i = r(7296),
                o = r(12),
                s = "123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz".split(""),
                a = function e(t) {
                    if (!(this instanceof e)) return new e(t);
                    if (Buffer.isBuffer(t)) {
                        var r = t;
                        this.fromBuffer(r)
                    } else if ("string" == typeof t) {
                        var n = t;
                        this.fromString(n)
                    } else t && this.set(t)
                };
            a.validCharacters = function(e) {
                return o.Buffer.isBuffer(e) && (e = e.toString()), n.all(n.map(e, (function(e) {
                    return n.contains(s, e)
                })))
            }, a.prototype.set = function(e) {
                return this.buf = e.buf || this.buf || void 0, this
            }, a.encode = function(e) {
                if (!o.Buffer.isBuffer(e)) throw new Error("Input should be a buffer");
                return i.encode(e)
            }, a.decode = function(e) {
                if ("string" != typeof e) throw new Error("Input should be a string");
                return new Buffer(i.decode(e))
            }, a.prototype.fromBuffer = function(e) {
                return this.buf = e, this
            }, a.prototype.fromString = function(e) {
                var t = a.decode(e);
                return this.buf = t, this
            }, a.prototype.toBuffer = function() {
                return this.buf
            }, a.prototype.toString = function() {
                return a.encode(this.buf)
            }, e.exports = a
        },
        6212: function(e, t, r) {
            "use strict";

            function n() {}
            n.getRandomBuffer = function(e) {
                return process.browser ? n.getRandomBufferBrowser(e) : n.getRandomBufferNode(e)
            }, n.getRandomBufferNode = function(e) {
                return r(24).randomBytes(e)
            }, n.getRandomBufferBrowser = function(e) {
                if (!window.crypto && !window.msCrypto) throw new Error("window.crypto not available");
                if (window.crypto && window.crypto.getRandomValues) var t = window.crypto;
                else {
                    if (!window.msCrypto || !window.msCrypto.getRandomValues) throw new Error("window.crypto.getRandomValues not available");
                    t = window.msCrypto
                }
                var r = new Uint8Array(e);
                return t.getRandomValues(r), new Buffer(r)
            }, n.getPseudoRandomBuffer = function(e) {
                for (var t, r = new Buffer(e), n = 0; n <= e; n++) {
                    0 === n - 4 * Math.floor(n / 4) ? (t = 4294967296 * Math.random(), r[n] = 255 & t) : r[n] = 255 & (t >>>= 8)
                }
                return r
            }, e.exports = n
        },
        6213: function(e, t, r) {
            "use strict";
            var n = r(5489),
                i = r(5601),
                o = r(5516),
                s = r(5789),
                a = r(5699),
                u = r(5607),
                f = (r(5583), r(5505)),
                h = function e(t) {
                    if (!(this instanceof e)) return new e(t);
                    var r = e._from(t);
                    return this.version = r.version, this.prevHash = r.prevHash, this.merkleRoot = r.merkleRoot, this.time = r.time, this.timestamp = r.time, this.bits = r.bits, this.nonce = r.nonce, this.hashStateRoot = r.hashStateRoot, this.hashUTXORoot = r.hashUTXORoot, this.prevOutStakeHash = r.prevOutStakeHash, this.prevOutStakeN = r.prevOutStakeN, this.vchBlockSig = r.vchBlockSig, r.hash && f.checkState(this.hash === r.hash, "Argument object hash property does not match block hash."), this
                };
            h._from = function(e) {
                var t = {};
                if (o.isBuffer(e)) t = h._fromBufferReader(s(e));
                else {
                    if (!n.isObject(e)) throw new TypeError("Unrecognized argument for BlockHeader");
                    t = h._fromObject(e)
                }
                return t
            }, h._fromObject = function(e) {
                f.checkArgument(e, "data is required");
                var t = e.prevHash,
                    r = e.merkleRoot,
                    i = e.vchBlockSig,
                    s = e.prevOutStakeHash,
                    a = e.hashStateRoot,
                    u = e.hashUTXORoot;
                return n.isString(e.prevHash) && (t = o.reverse(new Buffer(e.prevHash, "hex"))), n.isString(e.merkleRoot) && (r = o.reverse(new Buffer(e.merkleRoot, "hex"))), n.isString(e.vchBlockSig) && (i = new Buffer(e.vchBlockSig, "hex")), n.isString(e.prevOutStakeHash) && (s = o.reverse(new Buffer(e.prevOutStakeHash, "hex"))), n.isString(e.hashStateRoot) && (a = o.reverse(new Buffer(e.hashStateRoot, "hex"))), n.isString(e.hashUTXORoot) && (u = o.reverse(new Buffer(e.hashUTXORoot, "hex"))), {
                    hash: e.hash,
                    version: e.version,
                    prevHash: t,
                    merkleRoot: r,
                    time: e.time,
                    timestamp: e.time,
                    bits: e.bits,
                    nonce: e.nonce,
                    hashStateRoot: a,
                    hashUTXORoot: u,
                    prevOutStakeHash: s,
                    prevOutStakeN: e.prevOutStakeN,
                    vchBlockSig: i
                }
            }, h.fromObject = function(e) {
                var t = h._fromObject(e);
                return new h(t)
            }, h.fromRawBlock = function(e) {
                o.isBuffer(e) || (e = new Buffer(e, "binary"));
                var t = s(e);
                t.pos = h.Constants.START_OF_HEADER;
                var r = h._fromBufferReader(t);
                return new h(r)
            }, h.fromBuffer = function(e) {
                var t = h._fromBufferReader(s(e));
                return new h(t)
            }, h.fromString = function(e) {
                var t = new Buffer(e, "hex");
                return h.fromBuffer(t)
            }, h._fromBufferReader = function(e) {
                var t = {};
                t.version = e.readInt32LE(), t.prevHash = e.read(32), t.merkleRoot = e.read(32), t.time = e.readUInt32LE(), t.bits = e.readUInt32LE(), t.nonce = e.readUInt32LE(), t.hashStateRoot = e.read(32), t.hashUTXORoot = e.read(32), t.prevOutStakeHash = e.read(32), t.prevOutStakeN = e.readUInt32LE();
                var r = e.readVarintNum();
                return t.vchBlockSig = e.read(r), t
            }, h.fromBufferReader = function(e) {
                var t = h._fromBufferReader(e);
                return new h(t)
            }, h.prototype.toObject = h.prototype.toJSON = function() {
                return {
                    hash: this.hash,
                    version: this.version,
                    prevHash: o.reverse(this.prevHash).toString("hex"),
                    merkleRoot: o.reverse(this.merkleRoot).toString("hex"),
                    time: this.time,
                    bits: this.bits,
                    nonce: this.nonce,
                    hashStateRoot: o.reverse(this.hashStateRoot).toString("hex"),
                    hashUTXORoot: o.reverse(this.hashUTXORoot).toString("hex"),
                    prevOutStakeHash: o.reverse(this.prevOutStakeHash).toString("hex"),
                    prevOutStakeN: this.prevOutStakeN,
                    vchBlockSig: this.vchBlockSig.toString("hex")
                }
            }, h.prototype.toBuffer = function() {
                return this.toBufferWriter().concat()
            }, h.prototype.toString = function() {
                return this.toBuffer().toString("hex")
            }, h.prototype.toBufferWriter = function(e) {
                return e || (e = new a), e.writeInt32LE(this.version), e.write(this.prevHash), e.write(this.merkleRoot), e.writeUInt32LE(this.time), e.writeUInt32LE(this.bits), e.writeUInt32LE(this.nonce), e.write(this.hashStateRoot), e.write(this.hashUTXORoot), e.write(this.prevOutStakeHash), e.writeUInt32LE(this.prevOutStakeN), e.writeVarintNum(this.vchBlockSig.length), e.write(this.vchBlockSig), e
            }, h.prototype.getTargetDifficulty = function(e) {
                e = e || this.bits;
                for (var t = new i(16777215 & e), r = 8 * ((e >>> 24) - 3); r-- > 0;) t = t.mul(new i(2));
                return t
            }, h.prototype.getDifficulty = function() {
                var e = this.getTargetDifficulty(486604799).mul(new i(Math.pow(10, 8))),
                    t = this.getTargetDifficulty(),
                    r = e.div(t).toString(10),
                    n = r.length - 8;
                return r = r.slice(0, n) + "." + r.slice(n), parseFloat(r)
            }, h.prototype._getHash = function() {
                var e = this.toBuffer();
                return u.sha256sha256(e)
            };
            var c = {
                configurable: !1,
                enumerable: !0,
                get: function() {
                    return this._id || (this._id = s(this._getHash()).readReverse().toString("hex")), this._id
                },
                set: n.noop
            };
            Object.defineProperty(h.prototype, "id", c), Object.defineProperty(h.prototype, "hash", c), h.prototype.validTimestamp = function() {
                var e = Math.round((new Date).getTime() / 1e3);
                return !(this.time > e + h.Constants.MAX_TIME_OFFSET)
            }, h.prototype.validProofOfWork = function() {
                var e = new i(this.id, "hex"),
                    t = this.getTargetDifficulty();
                return !(e.cmp(t) > 0)
            }, h.prototype.isProofOfStake = function() {
                return !/^0*$/.test(this.prevOutStakeHash.toString("hex")) && 4294967295 !== this.prevOutStakeN
            }, h.prototype.inspect = function() {
                return "<BlockHeader " + this.id + ">"
            }, h.Constants = {
                START_OF_HEADER: 8,
                MAX_TIME_OFFSET: 7200,
                LARGEST_HASH: new i("10000000000000000000000000000000000000000000000000000000000000000", "hex")
            }, e.exports = h
        },
        6556: function(e, t, r) {
            "use strict";
            var n = r(5489),
                i = r(5505),
                o = r(5516),
                s = r(5583);

            function a(e) {
                if (!(this instanceof a)) return new a(e);
                var t;
                if (n.isNumber(e)) t = e;
                else {
                    if (!n.isString(e)) throw new TypeError('Unrecognized num type: "' + typeof e + '" for Opcode');
                    t = a.map[e]
                }
                return s.defineImmutable(this, {
                    num: t
                }), this
            }
            for (var u in a.fromBuffer = function(e) {
                    return i.checkArgument(o.isBuffer(e)), new a(Number("0x" + e.toString("hex")))
                }, a.fromNumber = function(e) {
                    return i.checkArgument(n.isNumber(e)), new a(e)
                }, a.fromString = function(e) {
                    i.checkArgument(n.isString(e));
                    var t = a.map[e];
                    if (void 0 === t) throw new TypeError("Invalid opcodestr");
                    return new a(t)
                }, a.prototype.toHex = function() {
                    return this.num.toString(16)
                }, a.prototype.toBuffer = function() {
                    return new Buffer(this.toHex(), "hex")
                }, a.prototype.toNumber = function() {
                    return this.num
                }, a.prototype.toString = function() {
                    var e = a.reverseMap[this.num];
                    if (void 0 === e) throw new Error("Opcode does not have a string representation");
                    return e
                }, a.smallInt = function(e) {
                    return i.checkArgument(n.isNumber(e), "Invalid Argument: n should be number"), i.checkArgument(e >= 0 && e <= 16, "Invalid Argument: n must be between 0 and 16"), 0 === e ? a("OP_0") : new a(a.map.OP_1 + e - 1)
                }, a.map = {
                    OP_FALSE: 0,
                    OP_0: 0,
                    OP_PUSHDATA1: 76,
                    OP_PUSHDATA2: 77,
                    OP_PUSHDATA4: 78,
                    OP_1NEGATE: 79,
                    OP_RESERVED: 80,
                    OP_TRUE: 81,
                    OP_1: 81,
                    OP_2: 82,
                    OP_3: 83,
                    OP_4: 84,
                    OP_5: 85,
                    OP_6: 86,
                    OP_7: 87,
                    OP_8: 88,
                    OP_9: 89,
                    OP_10: 90,
                    OP_11: 91,
                    OP_12: 92,
                    OP_13: 93,
                    OP_14: 94,
                    OP_15: 95,
                    OP_16: 96,
                    OP_NOP: 97,
                    OP_VER: 98,
                    OP_IF: 99,
                    OP_NOTIF: 100,
                    OP_VERIF: 101,
                    OP_VERNOTIF: 102,
                    OP_ELSE: 103,
                    OP_ENDIF: 104,
                    OP_VERIFY: 105,
                    OP_RETURN: 106,
                    OP_TOALTSTACK: 107,
                    OP_FROMALTSTACK: 108,
                    OP_2DROP: 109,
                    OP_2DUP: 110,
                    OP_3DUP: 111,
                    OP_2OVER: 112,
                    OP_2ROT: 113,
                    OP_2SWAP: 114,
                    OP_IFDUP: 115,
                    OP_DEPTH: 116,
                    OP_DROP: 117,
                    OP_DUP: 118,
                    OP_NIP: 119,
                    OP_OVER: 120,
                    OP_PICK: 121,
                    OP_ROLL: 122,
                    OP_ROT: 123,
                    OP_SWAP: 124,
                    OP_TUCK: 125,
                    OP_CAT: 126,
                    OP_SUBSTR: 127,
                    OP_LEFT: 128,
                    OP_RIGHT: 129,
                    OP_SIZE: 130,
                    OP_INVERT: 131,
                    OP_AND: 132,
                    OP_OR: 133,
                    OP_XOR: 134,
                    OP_EQUAL: 135,
                    OP_EQUALVERIFY: 136,
                    OP_RESERVED1: 137,
                    OP_RESERVED2: 138,
                    OP_1ADD: 139,
                    OP_1SUB: 140,
                    OP_2MUL: 141,
                    OP_2DIV: 142,
                    OP_NEGATE: 143,
                    OP_ABS: 144,
                    OP_NOT: 145,
                    OP_0NOTEQUAL: 146,
                    OP_ADD: 147,
                    OP_SUB: 148,
                    OP_MUL: 149,
                    OP_DIV: 150,
                    OP_MOD: 151,
                    OP_LSHIFT: 152,
                    OP_RSHIFT: 153,
                    OP_BOOLAND: 154,
                    OP_BOOLOR: 155,
                    OP_NUMEQUAL: 156,
                    OP_NUMEQUALVERIFY: 157,
                    OP_NUMNOTEQUAL: 158,
                    OP_LESSTHAN: 159,
                    OP_GREATERTHAN: 160,
                    OP_LESSTHANOREQUAL: 161,
                    OP_GREATERTHANOREQUAL: 162,
                    OP_MIN: 163,
                    OP_MAX: 164,
                    OP_WITHIN: 165,
                    OP_RIPEMD160: 166,
                    OP_SHA1: 167,
                    OP_SHA256: 168,
                    OP_HASH160: 169,
                    OP_HASH256: 170,
                    OP_CODESEPARATOR: 171,
                    OP_CHECKSIG: 172,
                    OP_CHECKSIGVERIFY: 173,
                    OP_CHECKMULTISIG: 174,
                    OP_CHECKMULTISIGVERIFY: 175,
                    OP_CHECKLOCKTIMEVERIFY: 177,
                    OP_NOP1: 176,
                    OP_NOP2: 177,
                    OP_NOP3: 178,
                    OP_NOP4: 179,
                    OP_NOP5: 180,
                    OP_NOP6: 181,
                    OP_NOP7: 182,
                    OP_NOP8: 183,
                    OP_NOP9: 184,
                    OP_NOP10: 185,
                    OP_PUBKEYHASH: 253,
                    OP_PUBKEY: 254,
                    OP_INVALIDOPCODE: 255
                }, a.reverseMap = [], a.map) a.reverseMap[a.map[u]] = u;
            n.extend(a, a.map), a.isSmallIntOp = function(e) {
                return e instanceof a && (e = e.toNumber()), e === a.map.OP_0 || e >= a.map.OP_1 && e <= a.map.OP_16
            }, a.prototype.inspect = function() {
                return "<Opcode: " + this.toString() + ", hex: " + this.toHex() + ", decimal: " + this.num + ">"
            }, e.exports = a
        },
        7295: function(e, t, r) {
            "use strict";
            var n = r(5601),
                Point = r(5934),
                i = r(5670),
                o = r(5698),
                s = r(6212),
                a = r(5607),
                u = r(5516),
                f = r(5489),
                h = r(5505),
                c = function e(t) {
                    if (!(this instanceof e)) return new e(t);
                    t && this.set(t)
                };
            c.prototype.set = function(e) {
                return this.hashbuf = e.hashbuf || this.hashbuf, this.endian = e.endian || this.endian, this.privkey = e.privkey || this.privkey, this.pubkey = e.pubkey || (this.privkey ? this.privkey.publicKey : this.pubkey), this.sig = e.sig || this.sig, this.k = e.k || this.k, this.verified = e.verified || this.verified, this
            }, c.prototype.privkey2pubkey = function() {
                this.pubkey = this.privkey.toPublicKey()
            }, c.prototype.calci = function() {
                for (var e = 0; e < 4; e++) {
                    var t;
                    this.sig.i = e;
                    try {
                        t = this.toPublicKey()
                    } catch (e) {
                        console.error(e);
                        continue
                    }
                    if (t.point.eq(this.pubkey.point)) return this.sig.compressed = this.pubkey.compressed, this
                }
                throw this.sig.i = void 0, new Error("Unable to find valid recovery factor")
            }, c.fromString = function(e) {
                var t = JSON.parse(e);
                return new c(t)
            }, c.prototype.randomK = function() {
                var e, t = Point.getN();
                do {
                    e = n.fromBuffer(s.getRandomBuffer(32))
                } while (!e.lt(t) || !e.gt(n.Zero));
                return this.k = e, this
            }, c.prototype.deterministicK = function(e) {
                f.isUndefined(e) && (e = 0);
                var t = new Buffer(32);
                t.fill(1);
                var r = new Buffer(32);
                r.fill(0);
                var i = this.privkey.bn.toBuffer({
                        size: 32
                    }),
                    o = "little" === this.endian ? u.reverse(this.hashbuf) : this.hashbuf;
                r = a.sha256hmac(Buffer.concat([t, new Buffer([0]), i, o]), r), t = a.sha256hmac(t, r), r = a.sha256hmac(Buffer.concat([t, new Buffer([1]), i, o]), r), t = a.sha256hmac(t, r), t = a.sha256hmac(t, r);
                for (var s = n.fromBuffer(t), h = Point.getN(), c = 0; c < e || !s.lt(h) || !s.gt(n.Zero); c++) r = a.sha256hmac(Buffer.concat([t, new Buffer([0])]), r), t = a.sha256hmac(t, r), t = a.sha256hmac(t, r), s = n.fromBuffer(t);
                return this.k = s, this
            }, c.prototype.toPublicKey = function() {
                var e = this.sig.i;
                h.checkArgument(0 === e || 1 === e || 2 === e || 3 === e, new Error("i must be equal to 0, 1, 2, or 3"));
                var t = n.fromBuffer(this.hashbuf),
                    r = this.sig.r,
                    i = this.sig.s,
                    s = 1 & e,
                    a = e >> 1,
                    u = Point.getN(),
                    f = Point.getG(),
                    c = a ? r.add(u) : r,
                    d = Point.fromX(s, c);
                if (!d.mul(u).isInfinity()) throw new Error("nR is not a valid curve point");
                var p = t.neg().mod(u),
                    m = r.invm(u),
                    l = d.mul(i).add(f.mul(p)).mul(m);
                return o.fromPoint(l, this.sig.compressed)
            }, c.prototype.sigError = function() {
                if (!u.isBuffer(this.hashbuf) || 32 !== this.hashbuf.length) return "hashbuf must be a 32 byte buffer";
                var e = this.sig.r,
                    t = this.sig.s;
                if (!(e.gt(n.Zero) && e.lt(Point.getN()) && t.gt(n.Zero) && t.lt(Point.getN()))) return "r and s not in range";
                var r = n.fromBuffer(this.hashbuf, this.endian ? {
                        endian: this.endian
                    } : void 0),
                    i = Point.getN(),
                    o = t.invm(i),
                    s = o.mul(r).mod(i),
                    a = o.mul(e).mod(i),
                    f = Point.getG().mulAdd(s, this.pubkey.point, a);
                return f.isInfinity() ? "p is infinity" : 0 !== f.getX().mod(i).cmp(e) && "Invalid signature"
            }, c.toLowS = function(e) {
                return e.gt(n.fromBuffer(new Buffer("7FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF5D576E7357A4501DDFE92F46681B20A0", "hex"))) && (e = Point.getN().sub(e)), e
            }, c.prototype._findSignature = function(e, t) {
                var r, i, o, s = Point.getN(),
                    a = Point.getG(),
                    u = 0;
                do {
                    (!this.k || u > 0) && this.deterministicK(u), u++, r = this.k, i = a.mul(r).x.mod(s), o = r.invm(s).mul(t.add(e.mul(i))).mod(s)
                } while (i.cmp(n.Zero) <= 0 || o.cmp(n.Zero) <= 0);
                return {
                    s: o = c.toLowS(o),
                    r: i
                }
            }, c.prototype.sign = function() {
                var e = this.hashbuf,
                    t = this.privkey,
                    r = t.bn;
                h.checkState(e && t && r, new Error("invalid parameters")), h.checkState(u.isBuffer(e) && 32 === e.length, new Error("hashbuf must be a 32 byte buffer"));
                var o = n.fromBuffer(e, this.endian ? {
                        endian: this.endian
                    } : void 0),
                    s = this._findSignature(r, o);
                return s.compressed = this.pubkey.compressed, this.sig = new i(s), this
            }, c.prototype.signRandomK = function() {
                return this.randomK(), this.sign()
            }, c.prototype.toString = function() {
                var e = {};
                return this.hashbuf && (e.hashbuf = this.hashbuf.toString("hex")), this.privkey && (e.privkey = this.privkey.toString()), this.pubkey && (e.pubkey = this.pubkey.toString()), this.sig && (e.sig = this.sig.toString()), this.k && (e.k = this.k.toString()), JSON.stringify(e)
            }, c.prototype.verify = function() {
                return this.sigError() ? this.verified = !1 : this.verified = !0, this
            }, c.sign = function(e, t, r) {
                return c().set({
                    hashbuf: e,
                    endian: r,
                    privkey: t
                }).sign().sig
            }, c.verify = function(e, t, r, n) {
                return c().set({
                    hashbuf: e,
                    endian: n,
                    sig: t,
                    pubkey: r
                }).verify().verified
            }, e.exports = c
        },
        7299: function(e, t, r) {
            "use strict";
            var n = r(5489),
                i = r(6213),
                o = r(5516),
                s = r(5789),
                a = r(5699),
                u = r(5607),
                f = (r(5583), r(6211)),
                h = r(5505);

            function c(e) {
                if (!(this instanceof c)) return new c(e);
                var t = {};
                if (o.isBuffer(e)) t = c._fromBufferReader(s(e));
                else {
                    if (!n.isObject(e)) throw new TypeError("Unrecognized argument for MerkleBlock");
                    t = {
                        header: e.header instanceof i ? e.header : i.fromObject(e.header),
                        numTransactions: e.numTransactions,
                        hashes: e.hashes,
                        flags: e.flags
                    }
                }
                return n.extend(this, t), this._flagBitsUsed = 0, this._hashesUsed = 0, this
            }
            c.fromBuffer = function(e) {
                return c.fromBufferReader(s(e))
            }, c.fromBufferReader = function(e) {
                return new c(c._fromBufferReader(e))
            }, c.prototype.toBuffer = function() {
                return this.toBufferWriter().concat()
            }, c.prototype.toBufferWriter = function(e) {
                e || (e = new a), e.write(this.header.toBuffer()), e.writeUInt32LE(this.numTransactions), e.writeVarintNum(this.hashes.length);
                for (var t = 0; t < this.hashes.length; t++) e.write(new Buffer(this.hashes[t], "hex"));
                for (e.writeVarintNum(this.flags.length), t = 0; t < this.flags.length; t++) e.writeUInt8(this.flags[t]);
                return e
            }, c.prototype.toObject = c.prototype.toJSON = function() {
                return {
                    header: this.header.toObject(),
                    numTransactions: this.numTransactions,
                    hashes: this.hashes,
                    flags: this.flags
                }
            }, c.prototype.validMerkleTree = function() {
                if (h.checkState(n.isArray(this.flags), "MerkleBlock flags is not an array"), h.checkState(n.isArray(this.hashes), "MerkleBlock hashes is not an array"), this.hashes.length > this.numTransactions) return !1;
                if (8 * this.flags.length < this.hashes.length) return !1;
                var e = this._calcTreeHeight(),
                    t = {
                        hashesUsed: 0,
                        flagBitsUsed: 0
                    },
                    r = this._traverseMerkleTree(e, 0, t);
                return t.hashesUsed === this.hashes.length && o.equals(r, this.header.merkleRoot)
            }, c.prototype._traverseMerkleTree = function(e, t, r) {
                if ((r = r || {}).txs = r.txs || [], r.flagBitsUsed = r.flagBitsUsed || 0, r.hashesUsed = r.hashesUsed || 0, r.flagBitsUsed > 8 * this.flags.length) return null;
                var n = this.flags[r.flagBitsUsed >> 3] >>> (7 & r.flagBitsUsed++) & 1;
                if (0 !== e && n) {
                    var i = this._traverseMerkleTree(e - 1, 2 * t, r),
                        o = i;
                    return 2 * t + 1 < this._calcTreeWidth(e - 1) && (o = this._traverseMerkleTree(e - 1, 2 * t + 1, r)), u.sha256sha256(new Buffer.concat([i, o]))
                }
                if (r.hashesUsed >= this.hashes.length) return null;
                var s = this.hashes[r.hashesUsed++];
                return 0 === e && n && r.txs.push(s), new Buffer(s, "hex")
            }, c.prototype._calcTreeWidth = function(e) {
                return this.numTransactions + (1 << e) - 1 >> e
            }, c.prototype._calcTreeHeight = function() {
                for (var e = 0; this._calcTreeWidth(e) > 1;) e++;
                return e
            }, c.prototype.hasTransaction = function(e) {
                h.checkArgument(!n.isUndefined(e), "tx cannot be undefined"), h.checkArgument(e instanceof f || "string" == typeof e, 'Invalid tx given, tx must be a "string" or "Transaction"');
                var t = e;
                e instanceof f && (t = o.reverse(new Buffer(e.id, "hex")).toString("hex"));
                var r = [],
                    i = this._calcTreeHeight();
                return this._traverseMerkleTree(i, 0, {
                    txs: r
                }), -1 !== r.indexOf(t)
            }, c._fromBufferReader = function(e) {
                h.checkState(!e.finished(), "No merkleblock data received");
                var t = {};
                t.header = i.fromBufferReader(e), t.numTransactions = e.readUInt32LE();
                var r = e.readVarintNum();
                t.hashes = [];
                for (var n = 0; n < r; n++) t.hashes.push(e.read(32).toString("hex"));
                var o = e.readVarintNum();
                for (t.flags = [], n = 0; n < o; n++) t.flags.push(e.readUInt8());
                return t
            }, c.fromObject = function(e) {
                return new c(e)
            }, e.exports = c
        },
        7300: function(e, t, r) {
            "use strict";
            var n = r(72),
                i = r(12),
                o = r(5489),
                s = r(5505),
                a = r(5601),
                u = r(6210),
                f = r(6060),
                h = r(5607),
                c = r(5849),
                Point = r(5934),
                d = r(6209),
                p = r(6212),
                m = r(5669),
                l = m.HDPrivateKey,
                g = r(5516),
                v = r(5583);

            function y(e) {
                if (e instanceof y) return e;
                if (!(this instanceof y)) return new y(e);
                if (!e) return this._generateRandomly();
                if (c.get(e)) return this._generateRandomly(e);
                if (o.isString(e) || g.isBuffer(e))
                    if (y.isValidSerialized(e)) this._buildFromSerialized(e);
                    else if (v.isValidJSON(e)) this._buildFromJSON(e);
                else {
                    if (!g.isBuffer(e) || !y.isValidSerialized(e.toString())) throw y.getSerializedError(e);
                    this._buildFromSerialized(e.toString())
                } else {
                    if (!o.isObject(e)) throw new l.UnrecognizedArgument(e);
                    this._buildFromObject(e)
                }
            }
            y.isValidPath = function(e, t) {
                if (o.isString(e)) {
                    var r = y._getDerivationIndexes(e);
                    return null !== r && o.all(r, y.isValidPath)
                }
                return !!o.isNumber(e) && (e < y.Hardened && !0 === t && (e += y.Hardened), e >= 0 && e < y.MaxIndex)
            }, y._getDerivationIndexes = function(e) {
                var t = e.split("/");
                if (o.contains(y.RootElementAlias, e)) return [];
                if (!o.contains(y.RootElementAlias, t[0])) return null;
                var r = t.slice(1).map((function(e) {
                    var t = "'" === e.slice(-1);
                    if (t && (e = e.slice(0, -1)), !e || "-" === e[0]) return NaN;
                    var r = +e;
                    return t && (r += y.Hardened), r
                }));
                return o.any(r, isNaN) ? null : r
            }, y.prototype.derive = function(e, t) {
                return this.deriveNonCompliantChild(e, t)
            }, y.prototype.deriveChild = function(e, t) {
                if (o.isNumber(e)) return this._deriveWithNumber(e, t);
                if (o.isString(e)) return this._deriveFromString(e);
                throw new l.InvalidDerivationArgument(e)
            }, y.prototype.deriveNonCompliantChild = function(e, t) {
                if (o.isNumber(e)) return this._deriveWithNumber(e, t, !0);
                if (o.isString(e)) return this._deriveFromString(e, !0);
                throw new l.InvalidDerivationArgument(e)
            }, y.prototype._deriveWithNumber = function(e, t, r) {
                if (!y.isValidPath(e, t)) throw new l.InvalidPath(e);
                t = e >= y.Hardened || t, e < y.Hardened && !0 === t && (e += y.Hardened);
                var o, s = g.integerAsBuffer(e);
                if (t && r) {
                    var u = this.privateKey.bn.toBuffer();
                    o = g.concat([new i.Buffer([0]), u, s])
                } else if (t) {
                    var f = this.privateKey.bn.toBuffer({
                        size: 32
                    });
                    n(32 === f.length, "length of private key buffer is expected to be 32 bytes"), o = g.concat([new i.Buffer([0]), f, s])
                } else o = g.concat([this.publicKey.toBuffer(), s]);
                var c = h.sha512hmac(o, this._buffers.chainCode),
                    p = a.fromBuffer(c.slice(0, 32), {
                        size: 32
                    }),
                    m = c.slice(32, 64),
                    v = p.add(this.privateKey.toBigNumber()).mod(Point.getN()).toBuffer({
                        size: 32
                    });
                return d.isValid(v) ? new y({
                    network: this.network,
                    depth: this.depth + 1,
                    parentFingerPrint: this.fingerPrint,
                    childIndex: e,
                    chainCode: m,
                    privateKey: v
                }) : this._deriveWithNumber(e + 1, null, r)
            }, y.prototype._deriveFromString = function(e, t) {
                if (!y.isValidPath(e)) throw new l.InvalidPath(e);
                return y._getDerivationIndexes(e).reduce((function(e, r) {
                    return e._deriveWithNumber(r, null, t)
                }), this)
            }, y.isValidSerialized = function(e, t) {
                return !y.getSerializedError(e, t)
            }, y.getSerializedError = function(e, t) {
                if (!o.isString(e) && !g.isBuffer(e)) return new l.UnrecognizedArgument("Expected string or buffer");
                if (!u.validCharacters(e)) return new m.InvalidB58Char("(unknown)", e);
                try {
                    e = f.decode(e)
                } catch (t) {
                    return new m.InvalidB58Checksum(e)
                }
                if (e.length !== y.DataLength) return new l.InvalidLength(e);
                if (!o.isUndefined(t)) {
                    var r = y._validateNetwork(e, t);
                    if (r) return r
                }
                return null
            }, y._validateNetwork = function(e, t) {
                var r = c.get(t);
                if (!r) return new m.InvalidNetworkArgument(t);
                var n = e.slice(0, 4);
                return g.integerFromBuffer(n) !== r.xprivkey ? new m.InvalidNetwork(n) : null
            }, y.fromString = function(e) {
                return s.checkArgument(o.isString(e), "No valid string was provided"), new y(e)
            }, y.fromObject = function(e) {
                return s.checkArgument(o.isObject(e), "No valid argument was provided"), new y(e)
            }, y.prototype._buildFromJSON = function(e) {
                return this._buildFromObject(JSON.parse(e))
            }, y.prototype._buildFromObject = function(e) {
                var t = {
                    version: e.network ? g.integerAsBuffer(c.get(e.network).xprivkey) : e.version,
                    depth: o.isNumber(e.depth) ? g.integerAsSingleByteBuffer(e.depth) : e.depth,
                    parentFingerPrint: o.isNumber(e.parentFingerPrint) ? g.integerAsBuffer(e.parentFingerPrint) : e.parentFingerPrint,
                    childIndex: o.isNumber(e.childIndex) ? g.integerAsBuffer(e.childIndex) : e.childIndex,
                    chainCode: o.isString(e.chainCode) ? g.hexToBuffer(e.chainCode) : e.chainCode,
                    privateKey: o.isString(e.privateKey) && v.isHexa(e.privateKey) ? g.hexToBuffer(e.privateKey) : e.privateKey,
                    checksum: e.checksum ? e.checksum.length ? e.checksum : g.integerAsBuffer(e.checksum) : void 0
                };
                return this._buildFromBuffers(t)
            }, y.prototype._buildFromSerialized = function(e) {
                var t = f.decode(e),
                    r = {
                        version: t.slice(y.VersionStart, y.VersionEnd),
                        depth: t.slice(y.DepthStart, y.DepthEnd),
                        parentFingerPrint: t.slice(y.ParentFingerPrintStart, y.ParentFingerPrintEnd),
                        childIndex: t.slice(y.ChildIndexStart, y.ChildIndexEnd),
                        chainCode: t.slice(y.ChainCodeStart, y.ChainCodeEnd),
                        privateKey: t.slice(y.PrivateKeyStart, y.PrivateKeyEnd),
                        checksum: t.slice(y.ChecksumStart, y.ChecksumEnd),
                        xprivkey: e
                    };
                return this._buildFromBuffers(r)
            }, y.prototype._generateRandomly = function(e) {
                return y.fromSeed(p.getRandomBuffer(64), e)
            }, y.fromSeed = function(e, t) {
                if (v.isHexaString(e) && (e = g.hexToBuffer(e)), !Buffer.isBuffer(e)) throw new l.InvalidEntropyArgument(e);
                if (e.length < 16) throw new l.InvalidEntropyArgument.NotEnoughEntropy(e);
                if (e.length > 64) throw new l.InvalidEntropyArgument.TooMuchEntropy(e);
                var r = h.sha512hmac(e, new i.Buffer("Bitcoin seed"));
                return new y({
                    network: c.get(t) || c.defaultNetwork,
                    depth: 0,
                    parentFingerPrint: 0,
                    childIndex: 0,
                    privateKey: r.slice(0, 32),
                    chainCode: r.slice(32, 64)
                })
            }, y.prototype._calcHDPublicKey = function() {
                if (!this._hdPublicKey) {
                    var e = r(7301);
                    this._hdPublicKey = new e(this)
                }
            }, y.prototype._buildFromBuffers = function(e) {
                y._validateBufferArguments(e), v.defineImmutable(this, {
                    _buffers: e
                });
                var t = [e.version, e.depth, e.parentFingerPrint, e.childIndex, e.chainCode, g.emptyBuffer(1), e.privateKey],
                    r = i.Buffer.concat(t);
                if (e.checksum && e.checksum.length) {
                    if (e.checksum.toString() !== f.checksum(r).toString()) throw new m.InvalidB58Checksum(r)
                } else e.checksum = f.checksum(r);
                var n, o = c.get(g.integerFromBuffer(e.version));
                n = f.encode(i.Buffer.concat(t)), e.xprivkey = new Buffer(n);
                var s = new d(a.fromBuffer(e.privateKey), o),
                    u = s.toPublicKey(),
                    p = y.ParentFingerPrintSize,
                    l = h.sha256ripemd160(u.toBuffer()).slice(0, p);
                return v.defineImmutable(this, {
                    xprivkey: n,
                    network: o,
                    depth: g.integerFromSingleByteBuffer(e.depth),
                    privateKey: s,
                    publicKey: u,
                    fingerPrint: l
                }), this._hdPublicKey = null, Object.defineProperty(this, "hdPublicKey", {
                    configurable: !1,
                    enumerable: !0,
                    get: function() {
                        return this._calcHDPublicKey(), this._hdPublicKey
                    }
                }), Object.defineProperty(this, "xpubkey", {
                    configurable: !1,
                    enumerable: !0,
                    get: function() {
                        return this._calcHDPublicKey(), this._hdPublicKey.xpubkey
                    }
                }), this
            }, y._validateBufferArguments = function(e) {
                var t = function(t, r) {
                    var i = e[t];
                    n(g.isBuffer(i), t + " argument is not a buffer"), n(i.length === r, t + " has not the expected size: found " + i.length + ", expected " + r)
                };
                t("version", y.VersionSize), t("depth", y.DepthSize), t("parentFingerPrint", y.ParentFingerPrintSize), t("childIndex", y.ChildIndexSize), t("chainCode", y.ChainCodeSize), t("privateKey", y.PrivateKeySize), e.checksum && e.checksum.length && t("checksum", y.CheckSumSize)
            }, y.prototype.toString = function() {
                return this.xprivkey
            }, y.prototype.inspect = function() {
                return "<HDPrivateKey: " + this.xprivkey + ">"
            }, y.prototype.toObject = y.prototype.toJSON = function() {
                return {
                    network: c.get(g.integerFromBuffer(this._buffers.version), "xprivkey").name,
                    depth: g.integerFromSingleByteBuffer(this._buffers.depth),
                    fingerPrint: g.integerFromBuffer(this.fingerPrint),
                    parentFingerPrint: g.integerFromBuffer(this._buffers.parentFingerPrint),
                    childIndex: g.integerFromBuffer(this._buffers.childIndex),
                    chainCode: g.bufferToHex(this._buffers.chainCode),
                    privateKey: this.privateKey.toBuffer().toString("hex"),
                    checksum: g.integerFromBuffer(this._buffers.checksum),
                    xprivkey: this.xprivkey
                }
            }, y.fromBuffer = function(e) {
                return new y(e.toString())
            }, y.prototype.toBuffer = function() {
                return g.copy(this._buffers.xprivkey)
            }, y.DefaultDepth = 0, y.DefaultFingerprint = 0, y.DefaultChildIndex = 0, y.Hardened = 2147483648, y.MaxIndex = 2 * y.Hardened, y.RootElementAlias = ["m", "M", "m'", "M'"], y.VersionSize = 4, y.DepthSize = 1, y.ParentFingerPrintSize = 4, y.ChildIndexSize = 4, y.ChainCodeSize = 32, y.PrivateKeySize = 32, y.CheckSumSize = 4, y.DataLength = 78, y.SerializedByteSize = 82, y.VersionStart = 0, y.VersionEnd = y.VersionStart + y.VersionSize, y.DepthStart = y.VersionEnd, y.DepthEnd = y.DepthStart + y.DepthSize, y.ParentFingerPrintStart = y.DepthEnd, y.ParentFingerPrintEnd = y.ParentFingerPrintStart + y.ParentFingerPrintSize, y.ChildIndexStart = y.ParentFingerPrintEnd, y.ChildIndexEnd = y.ChildIndexStart + y.ChildIndexSize, y.ChainCodeStart = y.ChildIndexEnd, y.ChainCodeEnd = y.ChainCodeStart + y.ChainCodeSize, y.PrivateKeyStart = y.ChainCodeEnd + 1, y.PrivateKeyEnd = y.PrivateKeyStart + y.PrivateKeySize, y.ChecksumStart = y.PrivateKeyEnd, y.ChecksumEnd = y.ChecksumStart + y.CheckSumSize, n(y.ChecksumEnd === y.SerializedByteSize), e.exports = y
        },
        7301: function(e, t, r) {
            "use strict";
            var n = r(5489),
                i = r(5505),
                o = r(5601),
                s = r(6210),
                a = r(6060),
                u = r(5607),
                f = r(7300),
                h = r(5849),
                Point = r(5934),
                c = r(5698),
                d = r(5669),
                p = d,
                m = d.HDPublicKey,
                l = r(72),
                g = r(5583),
                v = r(5516);

            function y(e) {
                if (e instanceof y) return e;
                if (!(this instanceof y)) return new y(e);
                if (e) {
                    if (n.isString(e) || v.isBuffer(e)) {
                        var t = y.getSerializedError(e);
                        if (t) {
                            if (v.isBuffer(e) && !y.getSerializedError(e.toString())) return this._buildFromSerialized(e.toString());
                            if (t instanceof m.ArgumentIsPrivateExtended) return new f(e).hdPublicKey;
                            throw t
                        }
                        return this._buildFromSerialized(e)
                    }
                    if (n.isObject(e)) return e instanceof f ? this._buildFromPrivate(e) : this._buildFromObject(e);
                    throw new m.UnrecognizedArgument(e)
                }
                throw new m.MustSupplyArgument
            }
            y.isValidPath = function(e) {
                if (n.isString(e)) {
                    var t = f._getDerivationIndexes(e);
                    return null !== t && n.all(t, y.isValidPath)
                }
                return !!n.isNumber(e) && (e >= 0 && e < y.Hardened)
            }, y.prototype.derive = function(e, t) {
                return this.deriveChild(e, t)
            }, y.prototype.deriveChild = function(e, t) {
                if (n.isNumber(e)) return this._deriveWithNumber(e, t);
                if (n.isString(e)) return this._deriveFromString(e);
                throw new m.InvalidDerivationArgument(e)
            }, y.prototype._deriveWithNumber = function(e, t) {
                if (e >= y.Hardened || t) throw new m.InvalidIndexCantDeriveHardened;
                if (e < 0) throw new m.InvalidPath(e);
                var r, n = v.integerAsBuffer(e),
                    i = v.concat([this.publicKey.toBuffer(), n]),
                    s = u.sha512hmac(i, this._buffers.chainCode),
                    a = o.fromBuffer(s.slice(0, 32), {
                        size: 32
                    }),
                    f = s.slice(32, 64);
                try {
                    r = c.fromPoint(Point.getG().mul(a).add(this.publicKey.point))
                } catch (t) {
                    return this._deriveWithNumber(e + 1)
                }
                return new y({
                    network: this.network,
                    depth: this.depth + 1,
                    parentFingerPrint: this.fingerPrint,
                    childIndex: e,
                    chainCode: f,
                    publicKey: r
                })
            }, y.prototype._deriveFromString = function(e) {
                if (n.contains(e, "'")) throw new m.InvalidIndexCantDeriveHardened;
                if (!y.isValidPath(e)) throw new m.InvalidPath(e);
                return f._getDerivationIndexes(e).reduce((function(e, t) {
                    return e._deriveWithNumber(t)
                }), this)
            }, y.isValidSerialized = function(e, t) {
                return n.isNull(y.getSerializedError(e, t))
            }, y.getSerializedError = function(e, t) {
                if (!n.isString(e) && !v.isBuffer(e)) return new m.UnrecognizedArgument("expected buffer or string");
                if (!s.validCharacters(e)) return new p.InvalidB58Char("(unknown)", e);
                try {
                    e = a.decode(e)
                } catch (t) {
                    return new p.InvalidB58Checksum(e)
                }
                if (e.length !== y.DataSize) return new m.InvalidLength(e);
                if (!n.isUndefined(t)) {
                    var r = y._validateNetwork(e, t);
                    if (r) return r
                }
                var i = v.integerFromBuffer(e.slice(0, 4));
                return i === h.livenet.xprivkey || i === h.testnet.xprivkey ? new m.ArgumentIsPrivateExtended : null
            }, y._validateNetwork = function(e, t) {
                var r = h.get(t);
                if (!r) return new p.InvalidNetworkArgument(t);
                var n = e.slice(y.VersionStart, y.VersionEnd);
                return v.integerFromBuffer(n) !== r.xpubkey ? new p.InvalidNetwork(n) : null
            }, y.prototype._buildFromPrivate = function(e) {
                var t = n.clone(e._buffers),
                    r = Point.getG().mul(o.fromBuffer(t.privateKey));
                return t.publicKey = Point.pointToCompressed(r), t.version = v.integerAsBuffer(h.get(v.integerFromBuffer(t.version)).xpubkey), t.privateKey = void 0, t.checksum = void 0, t.xprivkey = void 0, this._buildFromBuffers(t)
            }, y.prototype._buildFromObject = function(e) {
                var t = {
                    version: e.network ? v.integerAsBuffer(h.get(e.network).xpubkey) : e.version,
                    depth: n.isNumber(e.depth) ? v.integerAsSingleByteBuffer(e.depth) : e.depth,
                    parentFingerPrint: n.isNumber(e.parentFingerPrint) ? v.integerAsBuffer(e.parentFingerPrint) : e.parentFingerPrint,
                    childIndex: n.isNumber(e.childIndex) ? v.integerAsBuffer(e.childIndex) : e.childIndex,
                    chainCode: n.isString(e.chainCode) ? v.hexToBuffer(e.chainCode) : e.chainCode,
                    publicKey: n.isString(e.publicKey) ? v.hexToBuffer(e.publicKey) : v.isBuffer(e.publicKey) ? e.publicKey : e.publicKey.toBuffer(),
                    checksum: n.isNumber(e.checksum) ? v.integerAsBuffer(e.checksum) : e.checksum
                };
                return this._buildFromBuffers(t)
            }, y.prototype._buildFromSerialized = function(e) {
                var t = a.decode(e),
                    r = {
                        version: t.slice(y.VersionStart, y.VersionEnd),
                        depth: t.slice(y.DepthStart, y.DepthEnd),
                        parentFingerPrint: t.slice(y.ParentFingerPrintStart, y.ParentFingerPrintEnd),
                        childIndex: t.slice(y.ChildIndexStart, y.ChildIndexEnd),
                        chainCode: t.slice(y.ChainCodeStart, y.ChainCodeEnd),
                        publicKey: t.slice(y.PublicKeyStart, y.PublicKeyEnd),
                        checksum: t.slice(y.ChecksumStart, y.ChecksumEnd),
                        xpubkey: e
                    };
                return this._buildFromBuffers(r)
            }, y.prototype._buildFromBuffers = function(e) {
                y._validateBufferArguments(e), g.defineImmutable(this, {
                    _buffers: e
                });
                var t = [e.version, e.depth, e.parentFingerPrint, e.childIndex, e.chainCode, e.publicKey],
                    r = v.concat(t),
                    n = a.checksum(r);
                if (e.checksum && e.checksum.length) {
                    if (e.checksum.toString("hex") !== n.toString("hex")) throw new p.InvalidB58Checksum(r, n)
                } else e.checksum = n;
                var i, o = h.get(v.integerFromBuffer(e.version));
                i = a.encode(v.concat(t)), e.xpubkey = new Buffer(i);
                var s = new c(e.publicKey, {
                        network: o
                    }),
                    f = y.ParentFingerPrintSize,
                    d = u.sha256ripemd160(s.toBuffer()).slice(0, f);
                return g.defineImmutable(this, {
                    xpubkey: i,
                    network: o,
                    depth: v.integerFromSingleByteBuffer(e.depth),
                    publicKey: s,
                    fingerPrint: d
                }), this
            }, y._validateBufferArguments = function(e) {
                var t = function(t, r) {
                    var n = e[t];
                    l(v.isBuffer(n), t + " argument is not a buffer, it's " + typeof n), l(n.length === r, t + " has not the expected size: found " + n.length + ", expected " + r)
                };
                t("version", y.VersionSize), t("depth", y.DepthSize), t("parentFingerPrint", y.ParentFingerPrintSize), t("childIndex", y.ChildIndexSize), t("chainCode", y.ChainCodeSize), t("publicKey", y.PublicKeySize), e.checksum && e.checksum.length && t("checksum", y.CheckSumSize)
            }, y.fromString = function(e) {
                return i.checkArgument(n.isString(e), "No valid string was provided"), new y(e)
            }, y.fromObject = function(e) {
                return i.checkArgument(n.isObject(e), "No valid argument was provided"), new y(e)
            }, y.prototype.toString = function() {
                return this.xpubkey
            }, y.prototype.inspect = function() {
                return "<HDPublicKey: " + this.xpubkey + ">"
            }, y.prototype.toObject = y.prototype.toJSON = function() {
                return {
                    network: h.get(v.integerFromBuffer(this._buffers.version)).name,
                    depth: v.integerFromSingleByteBuffer(this._buffers.depth),
                    fingerPrint: v.integerFromBuffer(this.fingerPrint),
                    parentFingerPrint: v.integerFromBuffer(this._buffers.parentFingerPrint),
                    childIndex: v.integerFromBuffer(this._buffers.childIndex),
                    chainCode: v.bufferToHex(this._buffers.chainCode),
                    publicKey: this.publicKey.toString(),
                    checksum: v.integerFromBuffer(this._buffers.checksum),
                    xpubkey: this.xpubkey
                }
            }, y.fromBuffer = function(e) {
                return new y(e)
            }, y.prototype.toBuffer = function() {
                return v.copy(this._buffers.xpubkey)
            }, y.Hardened = 2147483648, y.RootElementAlias = ["m", "M"], y.VersionSize = 4, y.DepthSize = 1, y.ParentFingerPrintSize = 4, y.ChildIndexSize = 4, y.ChainCodeSize = 32, y.PublicKeySize = 33, y.CheckSumSize = 4, y.DataSize = 78, y.SerializedByteSize = 82, y.VersionStart = 0, y.VersionEnd = y.VersionStart + y.VersionSize, y.DepthStart = y.VersionEnd, y.DepthEnd = y.DepthStart + y.DepthSize, y.ParentFingerPrintStart = y.DepthEnd, y.ParentFingerPrintEnd = y.ParentFingerPrintStart + y.ParentFingerPrintSize, y.ChildIndexStart = y.ParentFingerPrintEnd, y.ChildIndexEnd = y.ChildIndexStart + y.ChildIndexSize, y.ChainCodeStart = y.ChildIndexEnd, y.ChainCodeEnd = y.ChainCodeStart + y.ChainCodeSize, y.PublicKeyStart = y.ChainCodeEnd, y.PublicKeyEnd = y.PublicKeyStart + y.PublicKeySize, y.ChecksumStart = y.PublicKeyEnd, y.ChecksumEnd = y.ChecksumStart + y.CheckSumSize, l(y.PublicKeyEnd === y.DataSize), l(y.ChecksumEnd === y.SerializedByteSize), e.exports = y
        },
        9583: function(e, t, r) {
            "use strict";
            var n = e.exports;
            n.version = "v" + r(9584).version, n.versionGuard = function(e) {
                if (void 0 !== e) {
                    console.log("More than one instance of qtumcore-lib found. Please make sure to require qtumcore-lib and check that submodules do not also include their own qtumcore-lib dependency.")
                }
            }, n.versionGuard(global._qtumcore), global._qtumcore = n.version, n.crypto = {}, n.crypto.BN = r(5601), n.crypto.ECDSA = r(7295), n.crypto.Hash = r(5607), n.crypto.Random = r(6212), n.crypto.Point = r(5934), n.crypto.Signature = r(5670), n.encoding = {}, n.encoding.Base58 = r(6210), n.encoding.Base58Check = r(6060), n.encoding.BufferReader = r(5789), n.encoding.BufferWriter = r(5699), n.encoding.Varint = r(9604), n.util = {}, n.util.buffer = r(5516), n.util.js = r(5583), n.util.preconditions = r(5505), n.errors = r(5669), n.Address = r(5850), n.Block = r(9605), n.MerkleBlock = r(7299), n.BlockHeader = r(6213), n.HDPrivateKey = r(7300), n.HDPublicKey = r(7301), n.Networks = r(5849), n.Opcode = r(6556), n.PrivateKey = r(6209), n.PublicKey = r(5698), n.Script = r(5671), n.Transaction = r(6211), n.URI = r(9607), n.Unit = r(6559), n.deps = {}, n.deps.bnjs = r(5745), n.deps.bs58 = r(7296), n.deps.Buffer = Buffer, n.deps.elliptic = r(5697), n.deps._ = r(5489), n.Transaction.sighash = r(5790)
        },
        9585: function(e, t, r) {
            "use strict";
            e.exports = [{
                name: "InvalidB58Char",
                message: "Invalid Base58 character: {0} in {1}"
            }, {
                name: "InvalidB58Checksum",
                message: "Invalid Base58 checksum for {0}"
            }, {
                name: "InvalidNetwork",
                message: "Invalid version for network: got {0}"
            }, {
                name: "InvalidState",
                message: "Invalid state: {0}"
            }, {
                name: "NotImplemented",
                message: "Function {0} was not implemented yet"
            }, {
                name: "InvalidNetworkArgument",
                message: 'Invalid network: must be "livenet" or "testnet", got {0}'
            }, {
                name: "InvalidArgument",
                message: function() {
                    return "Invalid Argument" + (arguments[0] ? ": " + arguments[0] : "") + (arguments[1] ? " Documentation: http://bitcore.io/" + arguments[1] : "")
                }
            }, {
                name: "AbstractMethodInvoked",
                message: "Abstract Method Invocation: {0}"
            }, {
                name: "InvalidArgumentType",
                message: function() {
                    return "Invalid Argument for " + arguments[2] + ", expected " + arguments[1] + " but got " + typeof arguments[0]
                }
            }, {
                name: "Unit",
                message: "Internal Error on Unit {0}",
                errors: [{
                    name: "UnknownCode",
                    message: "Unrecognized unit code: {0}"
                }, {
                    name: "InvalidRate",
                    message: "Invalid exchange rate: {0}"
                }]
            }, {
                name: "Transaction",
                message: "Internal Error on Transaction {0}",
                errors: [{
                    name: "Input",
                    message: "Internal Error on Input {0}",
                    errors: [{
                        name: "MissingScript",
                        message: "Need a script to create an input"
                    }, {
                        name: "UnsupportedScript",
                        message: "Unsupported input script type: {0}"
                    }, {
                        name: "MissingPreviousOutput",
                        message: "No previous output information."
                    }]
                }, {
                    name: "NeedMoreInfo",
                    message: "{0}"
                }, {
                    name: "InvalidSorting",
                    message: "The sorting function provided did not return the change output as one of the array elements"
                }, {
                    name: "InvalidOutputAmountSum",
                    message: "{0}"
                }, {
                    name: "MissingSignatures",
                    message: "Some inputs have not been fully signed"
                }, {
                    name: "InvalidIndex",
                    message: "Invalid index: {0} is not between 0, {1}"
                }, {
                    name: "UnableToVerifySignature",
                    message: "Unable to verify signature: {0}"
                }, {
                    name: "DustOutputs",
                    message: "Dust amount detected in one output"
                }, {
                    name: "InvalidSatoshis",
                    message: "Output satoshis are invalid"
                }, {
                    name: "FeeError",
                    message: "Internal Error on Fee {0}",
                    errors: [{
                        name: "TooSmall",
                        message: "Fee is too small: {0}"
                    }, {
                        name: "TooLarge",
                        message: "Fee is too large: {0}"
                    }, {
                        name: "Different",
                        message: "Unspent value is different from specified fee: {0}"
                    }]
                }, {
                    name: "ChangeAddressMissing",
                    message: "Change address is missing"
                }, {
                    name: "BlockHeightTooHigh",
                    message: "Block Height can be at most 2^32 -1"
                }, {
                    name: "NLockTimeOutOfRange",
                    message: "Block Height can only be between 0 and 499 999 999"
                }, {
                    name: "LockTimeTooEarly",
                    message: "Lock Time can't be earlier than UNIX date 500 000 000"
                }]
            }, {
                name: "Script",
                message: "Internal Error on Script {0}",
                errors: [{
                    name: "UnrecognizedAddress",
                    message: "Expected argument {0} to be an address"
                }, {
                    name: "CantDeriveAddress",
                    message: "Can't derive address associated with script {0}, needs to be p2pkh in, p2pkh out, p2sh in, or p2sh out."
                }, {
                    name: "InvalidBuffer",
                    message: "Invalid script buffer: can't parse valid script from given buffer {0}"
                }]
            }, {
                name: "HDPrivateKey",
                message: "Internal Error on HDPrivateKey {0}",
                errors: [{
                    name: "InvalidDerivationArgument",
                    message: "Invalid derivation argument {0}, expected string, or number and boolean"
                }, {
                    name: "InvalidEntropyArgument",
                    message: "Invalid entropy: must be an hexa string or binary buffer, got {0}",
                    errors: [{
                        name: "TooMuchEntropy",
                        message: 'Invalid entropy: more than 512 bits is non standard, got "{0}"'
                    }, {
                        name: "NotEnoughEntropy",
                        message: 'Invalid entropy: at least 128 bits needed, got "{0}"'
                    }]
                }, {
                    name: "InvalidLength",
                    message: "Invalid length for xprivkey string in {0}"
                }, {
                    name: "InvalidPath",
                    message: "Invalid derivation path: {0}"
                }, {
                    name: "UnrecognizedArgument",
                    message: 'Invalid argument: creating a HDPrivateKey requires a string, buffer, json or object, got "{0}"'
                }]
            }, {
                name: "HDPublicKey",
                message: "Internal Error on HDPublicKey {0}",
                errors: [{
                    name: "ArgumentIsPrivateExtended",
                    message: "Argument is an extended private key: {0}"
                }, {
                    name: "InvalidDerivationArgument",
                    message: "Invalid derivation argument: got {0}"
                }, {
                    name: "InvalidLength",
                    message: 'Invalid length for xpubkey: got "{0}"'
                }, {
                    name: "InvalidPath",
                    message: 'Invalid derivation path, it should look like: "m/1/100", got "{0}"'
                }, {
                    name: "InvalidIndexCantDeriveHardened",
                    message: "Invalid argument: creating a hardened path requires an HDPrivateKey"
                }, {
                    name: "MustSupplyArgument",
                    message: "Must supply an argument to create a HDPublicKey"
                }, {
                    name: "UnrecognizedArgument",
                    message: "Invalid argument for creation, must be string, json, buffer, or object"
                }]
            }]
        },
        9604: function(e, t, r) {
            "use strict";
            var n = r(5699),
                i = r(5789),
                o = r(5601),
                s = function e(t) {
                    if (!(this instanceof e)) return new e(t);
                    if (Buffer.isBuffer(t)) this.buf = t;
                    else if ("number" == typeof t) {
                        var r = t;
                        this.fromNumber(r)
                    } else if (t instanceof o) {
                        var n = t;
                        this.fromBN(n)
                    } else if (t) {
                        var i = t;
                        this.set(i)
                    }
                };
            s.prototype.set = function(e) {
                return this.buf = e.buf || this.buf, this
            }, s.prototype.fromString = function(e) {
                return this.set({
                    buf: new Buffer(e, "hex")
                }), this
            }, s.prototype.toString = function() {
                return this.buf.toString("hex")
            }, s.prototype.fromBuffer = function(e) {
                return this.buf = e, this
            }, s.prototype.fromBufferReader = function(e) {
                return this.buf = e.readVarintBuf(), this
            }, s.prototype.fromBN = function(e) {
                return this.buf = n().writeVarintBN(e).concat(), this
            }, s.prototype.fromNumber = function(e) {
                return this.buf = n().writeVarintNum(e).concat(), this
            }, s.prototype.toBuffer = function() {
                return this.buf
            }, s.prototype.toBN = function() {
                return i(this.buf).readVarintBN()
            }, s.prototype.toNumber = function() {
                return i(this.buf).readVarintNum()
            }, e.exports = s
        },
        9605: function(e, t, r) {
            e.exports = r(9606), e.exports.BlockHeader = r(6213), e.exports.MerkleBlock = r(7299)
        },
        9606: function(e, t, r) {
            "use strict";
            var n = r(5489),
                i = r(6213),
                o = r(5601),
                s = r(5516),
                a = r(5789),
                u = r(5699),
                f = r(5607),
                h = r(6211),
                c = r(5505);

            function Block(e) {
                return this instanceof Block ? (n.extend(this, Block._from(e)), this) : new Block(e)
            }
            Block.MAX_BLOCK_SIZE = 1e6, Block.PROOF_OF_STAKE = "proof-of-stake", Block.PROOF_OF_WORK = "proof-of-work", Block._from = function(e) {
                var t = {};
                if (s.isBuffer(e)) t = Block._fromBufferReader(a(e));
                else {
                    if (!n.isObject(e)) throw new TypeError("Unrecognized argument for Block");
                    t = Block._fromObject(e)
                }
                return t
            }, Block._fromObject = function(e) {
                var t = [];
                return e.transactions.forEach((function(e) {
                    e instanceof h ? t.push(e) : t.push(h().fromObject(e))
                })), {
                    header: i.fromObject(e.header),
                    transactions: t
                }
            }, Block.fromObject = function(e) {
                var t = Block._fromObject(e);
                return new Block(t)
            }, Block._fromBufferReader = function(e) {
                var t = {};
                c.checkState(!e.finished(), "No block data received"), t.header = i.fromBufferReader(e);
                var r = e.readVarintNum();
                t.transactions = [];
                for (var n = 0; n < r; n++) t.transactions.push(h().fromBufferReader(e));
                return t
            }, Block.fromBufferReader = function(e) {
                c.checkArgument(e, "br is required");
                var t = Block._fromBufferReader(e);
                return new Block(t)
            }, Block.fromBuffer = function(e) {
                return Block.fromBufferReader(new a(e))
            }, Block.fromString = function(e) {
                var t = new Buffer(e, "hex");
                return Block.fromBuffer(t)
            }, Block.fromRawBlock = function(e) {
                s.isBuffer(e) || (e = new Buffer(e, "binary"));
                var t = a(e);
                t.pos = Block.Values.START_OF_BLOCK;
                var r = Block._fromBufferReader(t);
                return new Block(r)
            }, Block.prototype.toObject = Block.prototype.toJSON = function() {
                var e = [];
                return this.transactions.forEach((function(t) {
                    e.push(t.toObject())
                })), {
                    header: this.header.toObject(),
                    transactions: e
                }
            }, Block.prototype.toBuffer = function() {
                return this.toBufferWriter().concat()
            }, Block.prototype.toString = function() {
                return this.toBuffer().toString("hex")
            }, Block.prototype.toBufferWriter = function(e) {
                e || (e = new u), e.write(this.header.toBuffer()), e.writeVarintNum(this.transactions.length);
                for (var t = 0; t < this.transactions.length; t++) this.transactions[t].toBufferWriter(e);
                return e
            }, Block.prototype.getTransactionHashes = function() {
                var e = [];
                if (0 === this.transactions.length) return [Block.Values.NULL_HASH];
                for (var t = 0; t < this.transactions.length; t++) e.push(this.transactions[t]._getHash());
                return e
            }, Block.prototype.getMerkleTree = function() {
                for (var e = this.getTransactionHashes(), t = 0, r = this.transactions.length; r > 1; r = Math.floor((r + 1) / 2)) {
                    for (var n = 0; n < r; n += 2) {
                        var i = Math.min(n + 1, r - 1),
                            o = Buffer.concat([e[t + n], e[t + i]]);
                        e.push(f.sha256sha256(o))
                    }
                    t += r
                }
                return e
            }, Block.prototype.getMerkleRoot = function() {
                var e = this.getMerkleTree();
                return e[e.length - 1]
            }, Block.prototype.validMerkleRoot = function() {
                var e = new o(this.header.merkleRoot.toString("hex"), "hex"),
                    t = new o(this.getMerkleRoot().toString("hex"), "hex");
                return 0 === e.cmp(t)
            }, Block.prototype._getHash = function() {
                return this.header._getHash()
            };
            var d = {
                configurable: !1,
                enumerable: !0,
                get: function() {
                    return this._id || (this._id = this.header.id), this._id
                },
                set: n.noop
            };
            Object.defineProperty(Block.prototype, "id", d), Object.defineProperty(Block.prototype, "hash", d), Block.prototype.inspect = function() {
                return "<Block " + this.id + ">"
            }, Block.Values = {
                START_OF_BLOCK: 8,
                NULL_HASH: new Buffer("0000000000000000000000000000000000000000000000000000000000000000", "hex")
            }, e.exports = Block
        }
    }
]);