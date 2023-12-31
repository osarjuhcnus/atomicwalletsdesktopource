(window.webpackJsonp = window.webpackJsonp || []).push([
    [272], {
        5507: function(e, t, r) {
            "use strict";
            var n = r(5503),
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
                var t = Buffer.alloc(1);
                return t.writeUInt8(e, 0), this.write(t), this
            }, o.prototype.writeUInt16BE = function(e) {
                var t = Buffer.alloc(2);
                return t.writeUInt16BE(e, 0), this.write(t), this
            }, o.prototype.writeUInt16LE = function(e) {
                var t = Buffer.alloc(2);
                return t.writeUInt16LE(e, 0), this.write(t), this
            }, o.prototype.writeUInt32BE = function(e) {
                var t = Buffer.alloc(4);
                return t.writeUInt32BE(e, 0), this.write(t), this
            }, o.prototype.writeInt32LE = function(e) {
                var t = Buffer.alloc(4);
                return t.writeInt32LE(e, 0), this.write(t), this
            }, o.prototype.writeUInt32LE = function(e) {
                var t = Buffer.alloc(4);
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
                return e < 253 ? (t = Buffer.alloc(1)).writeUInt8(e, 0) : e < 65536 ? ((t = Buffer.alloc(3)).writeUInt8(253, 0), t.writeUInt16LE(e, 1)) : e < 4294967296 ? ((t = Buffer.alloc(5)).writeUInt8(254, 0), t.writeUInt32LE(e, 1)) : ((t = Buffer.alloc(9)).writeUInt8(255, 0), t.writeInt32LE(-1 & e, 1), t.writeUInt32LE(Math.floor(e / 4294967296), 5)), t
            }, o.varintBufBN = function(e) {
                var t = void 0,
                    r = e.toNumber();
                if (r < 253)(t = Buffer.alloc(1)).writeUInt8(r, 0);
                else if (r < 65536)(t = Buffer.alloc(3)).writeUInt8(253, 0), t.writeUInt16LE(r, 1);
                else if (r < 4294967296)(t = Buffer.alloc(5)).writeUInt8(254, 0), t.writeUInt32LE(r, 1);
                else {
                    var n = new o;
                    n.writeUInt8(255), n.writeUInt64LEBN(e);
                    t = n.concat()
                }
                return t
            }, e.exports = o
        },
        5515: function(e, t, r) {
            "use strict";
            var n = r(53),
                i = r(5478),
                o = r(5503),
                s = r(5593),
                a = function e(t) {
                    if (!(this instanceof e)) return new e(t);
                    if (!n.isUndefined(t))
                        if (Buffer.isBuffer(t)) this.set({
                            buf: t
                        });
                        else if (n.isString(t)) this.set({
                        buf: Buffer.from(t, "hex")
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
                for (var e = Buffer.alloc(this.buf.length), t = 0; t < e.length; t++) e[t] = this.buf[this.buf.length - 1 - t];
                return this.buf = e, this
            }, a.prototype.readReverse = function(e) {
                n.isUndefined(e) && (e = this.buf.length);
                var t = this.buf.slice(this.pos, this.pos + e);
                return this.pos = this.pos + e, o.reverse(t)
            }, e.exports = a
        },
        5540: function(e, t) {
            e.exports = {
                PUBKEY_ID_SIZE: 20,
                COMPACT_SIGNATURE_SIZE: 65,
                SHA256_HASH_SIZE: 32,
                BLS_PUBLIC_KEY_SIZE: 48,
                BLS_SIGNATURE_SIZE: 96,
                registeredTransactionTypes: {
                    TRANSACTION_NORMAL: 0,
                    TRANSACTION_PROVIDER_REGISTER: 1,
                    TRANSACTION_PROVIDER_UPDATE_SERVICE: 2,
                    TRANSACTION_PROVIDER_UPDATE_REGISTRAR: 3,
                    TRANSACTION_PROVIDER_UPDATE_REVOKE: 4,
                    TRANSACTION_COINBASE: 5,
                    TRANSACTION_QUORUM_COMMITMENT: 6,
                    TRANSACTION_SUBTX_REGISTER: 8,
                    TRANSACTION_SUBTX_TOPUP: 9,
                    TRANSACTION_SUBTX_RESETKEY: 10,
                    TRANSACTION_SUBTX_CLOSEACCOUNT: 11,
                    TRANSACTION_SUBTX_TRANSITION: 12
                },
                EMPTY_SIGNATURE_SIZE: 0,
                primitives: {
                    BOOLEAN: 1
                },
                ipAddresses: {
                    IPV4MAPPEDHOST: 16,
                    PORT: 2
                },
                IP_ADDRESS_SIZE: 16,
                EMPTY_IPV6_ADDRESS: "[0:0:0:0:0:0:0:0]:0",
                EMPTY_IPV4_ADDRESS: "0.0.0.0:0",
                CURRENT_PROTOCOL_VERSION: 70211,
                SML_ENTRY_SIZE: 151,
                NULL_HASH: "0000000000000000000000000000000000000000000000000000000000000000",
                INSTANTSEND_FEE_PER_INPUT: 1e4
            }
        },
        5541: function(e, t, r) {
            "use strict";
            var n = r(9543),
                i = r(24),
                o = r(5503),
                s = r(5478),
                a = e.exports;
            a.sha1 = function(e) {
                return s.checkArgument(o.isBuffer(e)), i.createHash("sha1").update(e).digest()
            }, a.sha1.blocksize = 512, a.sha256 = function(e) {
                return s.checkArgument(o.isBuffer(e)), i.createHash("sha256").update(e).digest()
            }, a.sha256.blocksize = 512, a.sha256sha256 = function(e) {
                return s.checkArgument(o.isBuffer(e)), a.sha256(a.sha256(e))
            }, a.x11 = function(e) {
                return s.checkArgument(o.isBuffer(e)), Buffer.from(n.digest(e, 1, 1))
            }, a.ripemd160 = function(e) {
                return s.checkArgument(o.isBuffer(e)), i.createHash("ripemd160").update(e).digest()
            }, a.sha256ripemd160 = function(e) {
                return s.checkArgument(o.isBuffer(e)), a.ripemd160(a.sha256(e))
            }, a.sha512 = function(e) {
                return s.checkArgument(o.isBuffer(e)), i.createHash("sha512").update(e).digest()
            }, a.sha512.blocksize = 1024, a.hmac = function(e, t, r) {
                s.checkArgument(o.isBuffer(t)), s.checkArgument(o.isBuffer(r)), s.checkArgument(e.blocksize);
                var n = e.blocksize / 8;
                if (r.length > n) r = e(r);
                else if (r < n) {
                    var i = Buffer.alloc(n);
                    i.fill(0), r.copy(i), r = i
                }
                var a = Buffer.alloc(n);
                a.fill(92);
                var f = Buffer.alloc(n);
                f.fill(54);
                for (var u = Buffer.alloc(n), h = Buffer.alloc(n), c = 0; c < n; c++) u[c] = a[c] ^ r[c], h[c] = f[c] ^ r[c];
                return e(Buffer.concat([u, e(Buffer.concat([h, t]))]))
            }, a.sha256hmac = function(e, t) {
                return a.hmac(a.sha256, e, t)
            }, a.sha512hmac = function(e, t) {
                return a.hmac(a.sha512, e, t)
            }
        },
        5593: function(e, t, r) {
            "use strict";
            var n = r(6054),
                i = r(5478),
                o = r(53),
                s = function(e) {
                    for (var t = Buffer.alloc(e.length), r = 0; r < e.length; r++) t[r] = e[e.length - 1 - r];
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
                if (0 === e.length) return n.fromBuffer(Buffer.from([0]));
                var i = "big";
                return t && (i = t.endian), "little" === i && (e = s(e)), 128 & e[0] ? (e[0] = 127 & e[0], (r = n.fromBuffer(e)).neg().copy(r)) : r = n.fromBuffer(e), r
            }, n.prototype.toNumber = function() {
                return parseInt(this.toString(10), 10)
            }, n.prototype.toBuffer = function(e) {
                var t, r;
                if (e && e.size) {
                    var i = (r = this.toString(16, 2)).length / 2;
                    t = Buffer.from(r, "hex"), i === e.size ? t = t : i > e.size ? t = n.trim(t, i) : i < e.size && (t = n.pad(t, i, e.size))
                } else r = this.toString(16, 2), t = Buffer.from(r, "hex");
                return void 0 !== e && "little" === e.endian && (t = s(t)), t
            }, n.prototype.toSMBigEndian = function() {
                var e;
                return -1 === this.cmp(n.Zero) ? 128 & (e = this.neg().toBuffer())[0] ? e = Buffer.concat([Buffer.from([128]), e]) : e[0] = 128 | e[0] : 128 & (e = this.toBuffer())[0] && (e = Buffer.concat([Buffer.from([0]), e])), 1 === e.length & 0 === e[0] && (e = Buffer.from([])), e
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
                for (var n = Buffer.alloc(r), i = 0; i < e.length; i++) n[n.length - 1 - i] = e[e.length - 1 - i];
                for (i = 0; i < r - t; i++) n[i] = 0;
                return n
            }, e.exports = n
        },
        5615: function(e, t, r) {
            "use strict";
            var n = r(53);

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
            var f, u = r(9528);
            f = a.Error, s(f, u), e.exports = a.Error, e.exports.extend = function(e) {
                return o(a.Error, e)
            }
        },
        5630: function(e, t, r) {
            "use strict";
            var n = r(5593),
                i = r(53),
                o = r(5478),
                s = r(5503),
                a = r(5484),
                f = function e(t, r) {
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
            f.prototype.set = function(e) {
                return this.r = e.r || this.r || void 0, this.s = e.s || this.s || void 0, this.i = void 0 !== e.i ? e.i : this.i, this.compressed = void 0 !== e.compressed ? e.compressed : this.compressed, this.nhashtype = e.nhashtype || this.nhashtype || void 0, this
            }, f.fromCompact = function(e) {
                o.checkArgument(s.isBuffer(e), "Argument is expected to be a Buffer");
                var t = new f,
                    r = !0,
                    i = e.slice(0, 1)[0] - 27 - 4;
                i < 0 && (r = !1, i += 4);
                var a = e.slice(1, 33),
                    u = e.slice(33, 65);
                return o.checkArgument(0 === i || 1 === i || 2 === i || 3 === i, new Error("i must be 0, 1, 2, or 3")), o.checkArgument(32 === a.length, new Error("r must be 32 bytes")), o.checkArgument(32 === u.length, new Error("s must be 32 bytes")), t.compressed = r, t.i = i, t.r = n.fromBuffer(a), t.s = n.fromBuffer(u), t
            }, f.fromDER = f.fromBuffer = function(e, t) {
                var r = f.parseDER(e, t),
                    n = new f;
                return n.r = r.r, n.s = r.s, n
            }, f.fromTxFormat = function(e) {
                var t = e.readUInt8(e.length - 1),
                    r = e.slice(0, e.length - 1),
                    n = new f.fromDER(r, !1);
                return n.nhashtype = t, n
            }, f.fromString = function(e) {
                var t = Buffer.from(e, "hex");
                return f.fromDER(t)
            }, f.parseDER = function(e, t) {
                o.checkArgument(s.isBuffer(e), new Error("DER formatted signature should be a buffer")), i.isUndefined(t) && (t = !0);
                var r = e[0];
                o.checkArgument(48 === r, new Error("Header byte should be 0x30"));
                var a = e[1],
                    f = e.slice(2).length;
                o.checkArgument(!t || a === f, new Error("Length byte should length of what follows")), a = a < f ? a : f;
                var u = e[2];
                o.checkArgument(2 === u, new Error("Integer byte for r should be 0x02"));
                var h = e[3],
                    c = e.slice(4, 4 + h),
                    p = n.fromBuffer(c),
                    d = 0 === e[4];
                o.checkArgument(h === c.length, new Error("Length of r incorrect"));
                var l = e[4 + h + 0];
                o.checkArgument(2 === l, new Error("Integer byte for s should be 0x02"));
                var m = e[4 + h + 1],
                    g = e.slice(4 + h + 2, 4 + h + 2 + m),
                    v = n.fromBuffer(g),
                    y = 0 === e[4 + h + 2 + 2];
                o.checkArgument(m === g.length, new Error("Length of s incorrect"));
                var b = 4 + h + 2 + m;
                return o.checkArgument(a === b - 2, new Error("Length of signature incorrect")), {
                    header: r,
                    length: a,
                    rheader: u,
                    rlength: h,
                    rneg: d,
                    rbuf: c,
                    r: p,
                    sheader: l,
                    slength: m,
                    sneg: y,
                    sbuf: g,
                    s: v
                }
            }, f.prototype.toCompact = function(e, t) {
                if (e = "number" == typeof e ? e : this.i, t = "boolean" == typeof t ? t : this.compressed, 0 !== e && 1 !== e && 2 !== e && 3 !== e) throw new Error("i must be equal to 0, 1, 2, or 3");
                var r = e + 27 + 4;
                !1 === t && (r -= 4);
                var n = Buffer.from([r]),
                    i = this.r.toBuffer({
                        size: 32
                    }),
                    o = this.s.toBuffer({
                        size: 32
                    });
                return Buffer.concat([n, i, o])
            }, f.prototype.toBuffer = f.prototype.toDER = function() {
                var e = this.r.toBuffer(),
                    t = this.s.toBuffer(),
                    r = !!(128 & e[0]),
                    n = !!(128 & t[0]),
                    i = r ? Buffer.concat([Buffer.from([0]), e]) : e,
                    o = n ? Buffer.concat([Buffer.from([0]), t]) : t,
                    s = i.length,
                    a = o.length,
                    f = 2 + s + 2 + a;
                return Buffer.concat([Buffer.from([48, f, 2, s]), i, Buffer.from([2, a]), o])
            }, f.prototype.toString = function() {
                return this.toDER().toString("hex")
            }, f.isTxDER = function(e) {
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
            }, f.prototype.hasLowS = function() {
                return !this.s.lt(new n(1)) && !this.s.gt(new n("7FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF5D576E7357A4501DDFE92F46681B20A0", "hex"))
            }, f.prototype.hasDefinedHashtype = function() {
                if (!a.isNaturalNumber(this.nhashtype)) return !1;
                var e = this.nhashtype & ~f.SIGHASH_ANYONECANPAY;
                return !(e < f.SIGHASH_ALL || e > f.SIGHASH_SINGLE)
            }, f.prototype.toTxFormat = function() {
                var e = this.toDER(),
                    t = Buffer.alloc(1);
                return t.writeUInt8(this.nhashtype, 0), Buffer.concat([e, t])
            }, f.SIGHASH_ALL = 1, f.SIGHASH_NONE = 2, f.SIGHASH_SINGLE = 3, f.SIGHASH_ANYONECANPAY = 128, e.exports = f
        },
        5744: function(e, t, r) {
            "use strict";
            var n = r(53),
                i = r(5478),
                o = r(5615),
                s = r(6055),
                a = r(5848),
                f = r(5541),
                u = r(5484),
                h = r(5668);

            function c(e, t, r) {
                if (!(this instanceof c)) return new c(e, t, r);
                if (n.isArray(e) && n.isNumber(t)) return c.createMultisig(e, t, r);
                if (e instanceof c) return e;
                if (i.checkArgument(e, "First argument is required, please include address data.", "guide/address.html"), t && !a.get(t)) throw new TypeError('Second argument must be "livenet" or "testnet".');
                if (r && r !== c.PayToPublicKeyHash && r !== c.PayToScriptHash) throw new TypeError('Third argument must be "pubkeyhash" or "scripthash".');
                var o = this._classifyArguments(e, t, r);
                return o.network = o.network || a.get(t) || a.defaultNetwork, o.type = o.type || r || c.PayToPublicKeyHash, u.defineImmutable(this, {
                    hashBuffer: o.hashBuffer,
                    network: o.network,
                    type: o.type
                }), this
            }
            c.prototype._classifyArguments = function(e, t, r) {
                if ((e instanceof Buffer || e instanceof Uint8Array) && 20 === e.length) return c._transformHash(e);
                if ((e instanceof Buffer || e instanceof Uint8Array) && 21 === e.length) return c._transformBuffer(e, t, r);
                if (e instanceof h) return c._transformPublicKey(e);
                if (e instanceof p) return c._transformScript(e, t);
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
                    hashBuffer: e.hash ? Buffer.from(e.hash, "hex") : e.hashBuffer,
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
                return t.hashBuffer = f.sha256ripemd160(e.toBuffer()), t.type = c.PayToPublicKeyHash, t
            }, c._transformScript = function(e, t) {
                i.checkArgument(e instanceof p, "script must be a Script instance");
                var r = e.getAddressInfo(t);
                if (!r) throw new o.Script.CantDeriveAddress(e);
                return r
            }, c.createMultisig = function(e, t, r) {
                return r = r || e[0].network || a.defaultNetwork, c.payingTo(p.buildMultisigOut(e, t), r)
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
                return i.checkArgument(e, "script is required"), i.checkArgument(e instanceof p, "script must be instance of Script"), c.fromScriptHash(f.sha256ripemd160(e.toBuffer()), t)
            }, c.fromScript = function(e, t) {
                i.checkArgument(e instanceof p, "script must be a Script instance");
                var r = c._transformScript(e, t);
                return new c(r.hashBuffer, t, r.type)
            }, c.fromBuffer = function(e, t, r) {
                var n = c._transformBuffer(e, t, r);
                return new c(n.hashBuffer, n.network, n.type)
            }, c.fromString = function(e, t, r) {
                var n = c._transformString(e, t, r);
                return new c(n.hashBuffer, n.network, n.type)
            }, c.fromObject = function(e) {
                return i.checkState(u.isHexa(e.hash), 'Unexpected hash property, "' + e.hash + '", expected to be hex.'), new c(Buffer.from(e.hash, "hex"), e.network, e.type)
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
                var e = Buffer.from([this.network[this.type]]);
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
            var p = r(5606)
        },
        5932: function(e, t, r) {
            "use strict";
            var n = r(5593),
                i = r(5503),
                o = new(0, r(5629).ec)("secp256k1"),
                s = o.curve.point.bind(o.curve),
                a = o.curve.pointFromX.bind(o.curve),
                Point = function(e, t, r) {
                    try {
                        var n = s(e, t, r)
                    } catch (e) {
                        throw new Error("Invalid Point")
                    }
                    return n.validate(), n
                };
            Point.prototype = Object.getPrototypeOf(o.curve.point()), Point.fromX = function(e, t) {
                try {
                    var r = a(t, e)
                } catch (e) {
                    throw new Error("Invalid X")
                }
                return r.validate(), r
            }, Point.getG = function() {
                return o.curve.g
            }, Point.getN = function() {
                return new n(o.curve.n.toArray())
            }, Point.prototype._getX || (Point.prototype._getX = Point.prototype.getX), Point.prototype.getX = function() {
                return new n(this._getX().toArray())
            }, Point.prototype._getY || (Point.prototype._getY = Point.prototype.getY), Point.prototype.getY = function() {
                return new n(this._getY().toArray())
            }, Point.prototype.validate = function() {
                if (this.isInfinity()) throw new Error("Point cannot be equal to Infinity");
                var e;
                try {
                    e = a(this.getX(), this.getY().isOdd())
                } catch (e) {
                    throw new Error("Point does not lie on the curve")
                }
                if (0 !== e.y.cmp(this.y)) throw new Error("Invalid y value for curve.");
                if (!this.mul(Point.getN()).isInfinity()) throw new Error("Point times N must be infinity");
                return this
            }, Point.pointToCompressed = function(e) {
                var t, r = e.getX().toBuffer({
                        size: 32
                    }),
                    n = e.getY().toBuffer({
                        size: 32
                    });
                return t = n[n.length - 1] % 2 ? Buffer.from([3]) : Buffer.from([2]), i.concat([t, r])
            }, e.exports = Point
        },
        6055: function(e, t, r) {
            "use strict";
            var n = r(53),
                i = r(6206),
                o = r(5541).sha256sha256,
                s = function e(t) {
                    if (!(this instanceof e)) return new e(t);
                    if (Buffer.isBuffer(t)) {
                        var r = t;
                        this.fromBuffer(r)
                    } else if ("string" == typeof t) {
                        var n = t;
                        this.fromString(n)
                    } else t && this.set(t)
                };
            s.prototype.set = function(e) {
                return this.buf = e.buf || this.buf || void 0, this
            }, s.validChecksum = function(e, t) {
                return n.isString(e) && (e = Buffer.from(i.decode(e))), n.isString(t) && (t = Buffer.from(i.decode(t))), t || (t = e.slice(-4), e = e.slice(0, -4)), s.checksum(e).toString("hex") === t.toString("hex")
            }, s.decode = function(e) {
                if ("string" != typeof e) throw new Error("Input must be a string");
                var t = Buffer.from(i.decode(e));
                if (t.length < 4) throw new Error("Input string too short");
                var r = t.slice(0, -4),
                    n = t.slice(-4),
                    s = o(r).slice(0, 4);
                if (n.toString("hex") !== s.toString("hex")) throw new Error("Checksum mismatch");
                return r
            }, s.checksum = function(e) {
                return o(e).slice(0, 4)
            }, s.encode = function(e) {
                if (!Buffer.isBuffer(e)) throw new Error("Input must be a buffer");
                var t = Buffer.alloc(e.length + 4),
                    r = s.checksum(e);
                return e.copy(t), r.copy(t, e.length), i.encode(t)
            }, s.prototype.fromBuffer = function(e) {
                return this.buf = e, this
            }, s.prototype.fromString = function(e) {
                var t = s.decode(e);
                return this.buf = t, this
            }, s.prototype.toBuffer = function() {
                return this.buf
            }, s.prototype.toString = function() {
                return s.encode(this.buf)
            }, e.exports = s
        },
        6059: function(e, t, r) {
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
                return t.getRandomValues(r), Buffer.from(r)
            }, n.getPseudoRandomBuffer = function(e) {
                for (var t, r = Buffer.alloc(e), n = 0; n <= e; n++) {
                    0 === n - 4 * Math.floor(n / 4) ? (t = 4294967296 * Math.random(), r[n] = 255 & t) : r[n] = 255 & (t >>>= 8)
                }
                return r
            }, e.exports = n
        },
        6204: function(e, t, r) {
            "use strict";
            var n = r(5593),
                Point = r(5932),
                i = r(5630),
                o = r(5668),
                s = r(6059),
                a = r(5541),
                f = r(5503),
                u = r(53),
                h = r(5478),
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
                u.isUndefined(e) && (e = 0);
                var t = Buffer.alloc(32);
                t.fill(1);
                var r = Buffer.alloc(32);
                r.fill(0);
                var i = this.privkey.bn.toBuffer({
                        size: 32
                    }),
                    o = "little" === this.endian ? f.reverse(this.hashbuf) : this.hashbuf;
                r = a.sha256hmac(Buffer.concat([t, Buffer.from([0]), i, o]), r), t = a.sha256hmac(t, r), r = a.sha256hmac(Buffer.concat([t, Buffer.from([1]), i, o]), r), t = a.sha256hmac(t, r), t = a.sha256hmac(t, r);
                for (var s = n.fromBuffer(t), h = Point.getN(), c = 0; c < e || !s.lt(h) || !s.gt(n.Zero); c++) r = a.sha256hmac(Buffer.concat([t, Buffer.from([0])]), r), t = a.sha256hmac(t, r), t = a.sha256hmac(t, r), s = n.fromBuffer(t);
                return this.k = s, this
            }, c.prototype.toPublicKey = function() {
                var e = this.sig.i;
                h.checkArgument(0 === e || 1 === e || 2 === e || 3 === e, new Error("i must be equal to 0, 1, 2, or 3"));
                var t = n.fromBuffer(this.hashbuf),
                    r = this.sig.r,
                    i = this.sig.s,
                    s = 1 & e,
                    a = e >> 1,
                    f = Point.getN(),
                    u = Point.getG(),
                    c = a ? r.add(f) : r,
                    p = Point.fromX(s, c);
                if (!p.mul(f).isInfinity()) throw new Error("nR is not a valid curve point");
                var d = t.neg().umod(f),
                    l = r.invm(f),
                    m = p.mul(i).add(u.mul(d)).mul(l);
                return o.fromPoint(m, this.sig.compressed)
            }, c.prototype.sigError = function() {
                if (!f.isBuffer(this.hashbuf) || 32 !== this.hashbuf.length) return "hashbuf must be a 32 byte buffer";
                var e = this.sig.r,
                    t = this.sig.s;
                if (!(e.gt(n.Zero) && e.lt(Point.getN()) && t.gt(n.Zero) && t.lt(Point.getN()))) return "r and s not in range";
                var r = n.fromBuffer(this.hashbuf, this.endian ? {
                        endian: this.endian
                    } : void 0),
                    i = Point.getN(),
                    o = t.invm(i),
                    s = o.mul(r).umod(i),
                    a = o.mul(e).umod(i),
                    u = Point.getG().mulAdd(s, this.pubkey.point, a);
                return u.isInfinity() ? "p is infinity" : 0 !== u.getX().mod(i).cmp(e) && "Invalid signature"
            }, c.toLowS = function(e) {
                return e.gt(n.fromBuffer(Buffer.from("7FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF5D576E7357A4501DDFE92F46681B20A0", "hex"))) && (e = Point.getN().sub(e)), e
            }, c.prototype._findSignature = function(e, t) {
                var r, i, o, s = Point.getN(),
                    a = Point.getG(),
                    f = 0;
                do {
                    (!this.k || f > 0) && this.deterministicK(f), f++, r = this.k, i = a.mul(r).x.umod(s), o = r.invm(s).mul(t.add(e.mul(i))).umod(s)
                } while (i.cmp(n.Zero) <= 0 || o.cmp(n.Zero) <= 0);
                return {
                    s: o = c.toLowS(o),
                    r: i
                }
            }, c.prototype.sign = function() {
                var e = this.hashbuf,
                    t = this.privkey,
                    r = t.bn;
                h.checkState(e && t && r, new Error("invalid parameters")), h.checkState(f.isBuffer(e) && 32 === e.length, new Error("hashbuf must be a 32 byte buffer"));
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
        6206: function(e, t, r) {
            "use strict";
            var n = r(53),
                i = r(84),
                o = "123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz".split(""),
                s = function e(t) {
                    if (!(this instanceof e)) return new e(t);
                    if (Buffer.isBuffer(t)) {
                        var r = t;
                        this.fromBuffer(r)
                    } else if ("string" == typeof t) {
                        var n = t;
                        this.fromString(n)
                    } else t && this.set(t)
                };
            s.validCharacters = function(e) {
                return Buffer.isBuffer(e) && (e = e.toString()), n.every(n.map(e, (function(e) {
                    return n.includes(o, e)
                })))
            }, s.prototype.set = function(e) {
                return this.buf = e.buf || this.buf || void 0, this
            }, s.encode = function(e) {
                if (!Buffer.isBuffer(e)) throw new Error("Input should be a buffer");
                return i.encode(e)
            }, s.decode = function(e) {
                if ("string" != typeof e) throw new Error("Input should be a string");
                return Buffer.from(i.decode(e))
            }, s.prototype.fromBuffer = function(e) {
                return this.buf = e, this
            }, s.prototype.fromString = function(e) {
                var t = s.decode(e);
                return this.buf = t, this
            }, s.prototype.toBuffer = function() {
                return this.buf
            }, s.prototype.toString = function() {
                return s.encode(this.buf)
            }, e.exports = s
        },
        6207: function(e, t, r) {
            "use strict";
            var n = r(53),
                i = r(5593),
                o = r(5503),
                s = r(5515),
                a = r(5507),
                f = r(5541),
                u = (r(5484), r(5478)),
                h = function e(t) {
                    if (!(this instanceof e)) return new e(t);
                    var r = e._from(t);
                    return this.version = r.version, this.prevHash = r.prevHash, this.merkleRoot = r.merkleRoot, this.time = r.time, this.timestamp = r.time, this.bits = r.bits, this.nonce = r.nonce, r.hash && u.checkState(this.hash === r.hash, "Argument object hash property does not match block hash."), this
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
                u.checkArgument(e, "data is required");
                var t = e.prevHash,
                    r = e.merkleRoot;
                return n.isString(e.prevHash) && (t = o.reverse(Buffer.from(e.prevHash, "hex"))), n.isString(e.merkleRoot) && (r = o.reverse(Buffer.from(e.merkleRoot, "hex"))), {
                    hash: e.hash,
                    version: e.version,
                    prevHash: t,
                    merkleRoot: r,
                    time: e.time,
                    timestamp: e.time,
                    bits: e.bits,
                    nonce: e.nonce
                }
            }, h.fromObject = function(e) {
                var t = h._fromObject(e);
                return new h(t)
            }, h.fromRawBlock = function(e) {
                o.isBuffer(e) || (e = Buffer.from(e, "binary"));
                var t = s(e);
                t.pos = h.Constants.START_OF_HEADER;
                var r = h._fromBufferReader(t);
                return new h(r)
            }, h.fromBuffer = function(e) {
                var t = h._fromBufferReader(s(e));
                return new h(t)
            }, h.fromString = function(e) {
                var t = Buffer.from(e, "hex");
                return h.fromBuffer(t)
            }, h._fromBufferReader = function(e) {
                var t = {};
                return t.version = e.readInt32LE(), t.prevHash = e.read(32), t.merkleRoot = e.read(32), t.time = e.readUInt32LE(), t.bits = e.readUInt32LE(), t.nonce = e.readUInt32LE(), t
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
                    nonce: this.nonce
                }
            }, h.prototype.toBuffer = function() {
                return this.toBufferWriter().concat()
            }, h.prototype.toString = function() {
                return this.toBuffer().toString("hex")
            }, h.prototype.toBufferWriter = function(e) {
                return e || (e = new a), e.writeInt32LE(this.version), e.write(this.prevHash), e.write(this.merkleRoot), e.writeUInt32LE(this.time), e.writeUInt32LE(this.bits), e.writeUInt32LE(this.nonce), e
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
                return f.x11(e)
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
            }, h.prototype.inspect = function() {
                return "<BlockHeader " + this.id + ">"
            }, h.Constants = {
                START_OF_HEADER: 8,
                MAX_TIME_OFFSET: 7200,
                LARGEST_HASH: new i("10000000000000000000000000000000000000000000000000000000000000000", "hex")
            }, e.exports = h
        },
        6554: function(e, t, r) {
            "use strict";
            var n = r(72),
                i = r(53),
                o = r(5478),
                s = r(5593),
                a = r(6206),
                f = r(6055),
                u = r(5541),
                h = r(5848),
                Point = r(5932),
                c = r(5743),
                p = r(6059),
                d = r(5615),
                l = d.HDPrivateKey,
                m = r(5503),
                g = r(5484);

            function v(e) {
                if (e instanceof v) return e;
                if (!(this instanceof v)) return new v(e);
                if (!e) return this._generateRandomly();
                if (h.get(e)) return this._generateRandomly(e);
                if (i.isString(e) || m.isBuffer(e))
                    if (v.isValidSerialized(e)) this._buildFromSerialized(e);
                    else if (g.isValidJSON(e)) this._buildFromJSON(e);
                else {
                    if (!m.isBuffer(e) || !v.isValidSerialized(e.toString())) throw v.getSerializedError(e);
                    this._buildFromSerialized(e.toString())
                } else {
                    if (!i.isObject(e)) throw new l.UnrecognizedArgument(e);
                    this._buildFromObject(e)
                }
            }
            v.isValidPath = function(e, t) {
                if (i.isString(e)) {
                    var r = v._getDerivationIndexes(e);
                    return null !== r && i.every(r, v.isValidPath)
                }
                return !!i.isNumber(e) && (e < v.Hardened && !0 === t && (e += v.Hardened), e >= 0 && e < v.MaxIndex)
            }, v._getDerivationIndexes = function(e) {
                var t = e.split("/");
                if (i.includes(v.RootElementAlias, e)) return [];
                if (!i.includes(v.RootElementAlias, t[0])) return null;
                var r = t.slice(1).map((function(e) {
                    var t = "'" === e.slice(-1);
                    if (t && (e = e.slice(0, -1)), !e || "-" === e[0]) return NaN;
                    var r = +e;
                    return t && (r += v.Hardened), r
                }));
                return i.some(r, isNaN) ? null : r
            }, v.prototype.derive = function(e, t) {
                return this.deriveNonCompliantChild(e, t)
            }, v.prototype.deriveChild = function(e, t) {
                if (i.isNumber(e)) return this._deriveWithNumber(e, t);
                if (i.isString(e)) return this._deriveFromString(e);
                throw new l.InvalidDerivationArgument(e)
            }, v.prototype.deriveNonCompliantChild = function(e, t) {
                if (i.isNumber(e)) return this._deriveWithNumber(e, t, !0);
                if (i.isString(e)) return this._deriveFromString(e, !0);
                throw new l.InvalidDerivationArgument(e)
            }, v.prototype._deriveWithNumber = function(e, t, r) {
                if (!v.isValidPath(e, t)) throw new l.InvalidPath(e);
                t = e >= v.Hardened || t, e < v.Hardened && !0 === t && (e += v.Hardened);
                var i, o = m.integerAsBuffer(e);
                if (t && r) {
                    var a = this.privateKey.bn.toBuffer();
                    i = m.concat([Buffer.from([0]), a, o])
                } else if (t) {
                    var f = this.privateKey.bn.toBuffer({
                        size: 32
                    });
                    n(32 === f.length, "length of private key buffer is expected to be 32 bytes"), i = m.concat([Buffer.from([0]), f, o])
                } else i = m.concat([this.publicKey.toBuffer(), o]);
                var h = u.sha512hmac(i, this._buffers.chainCode),
                    p = s.fromBuffer(h.slice(0, 32), {
                        size: 32
                    }),
                    d = h.slice(32, 64),
                    g = p.add(this.privateKey.toBigNumber()).umod(Point.getN()).toBuffer({
                        size: 32
                    });
                return c.isValid(g) ? new v({
                    network: this.network,
                    depth: this.depth + 1,
                    parentFingerPrint: this.fingerPrint,
                    childIndex: e,
                    chainCode: d,
                    privateKey: g
                }) : this._deriveWithNumber(e + 1, null, r)
            }, v.prototype._deriveFromString = function(e, t) {
                if (!v.isValidPath(e)) throw new l.InvalidPath(e);
                return v._getDerivationIndexes(e).reduce((function(e, r) {
                    return e._deriveWithNumber(r, null, t)
                }), this)
            }, v.isValidSerialized = function(e, t) {
                return !v.getSerializedError(e, t)
            }, v.getSerializedError = function(e, t) {
                if (!i.isString(e) && !m.isBuffer(e)) return new l.UnrecognizedArgument("Expected string or buffer");
                if (!a.validCharacters(e)) return new d.InvalidB58Char("(unknown)", e);
                try {
                    e = f.decode(e)
                } catch (t) {
                    return new d.InvalidB58Checksum(e)
                }
                if (e.length !== v.DataLength) return new l.InvalidLength(e);
                if (!i.isUndefined(t)) {
                    var r = v._validateNetwork(e, t);
                    if (r) return r
                }
                return null
            }, v._validateNetwork = function(e, t) {
                var r = h.get(t);
                if (!r) return new d.InvalidNetworkArgument(t);
                var n = e.slice(0, 4);
                return m.integerFromBuffer(n) !== r.xprivkey ? new d.InvalidNetwork(n) : null
            }, v.fromString = function(e) {
                return o.checkArgument(i.isString(e), "No valid string was provided"), new v(e)
            }, v.fromObject = function(e) {
                return o.checkArgument(i.isObject(e), "No valid argument was provided"), new v(e)
            }, v.prototype._buildFromJSON = function(e) {
                return this._buildFromObject(JSON.parse(e))
            }, v.prototype._buildFromObject = function(e) {
                var t = {
                    version: e.network ? m.integerAsBuffer(h.get(e.network).xprivkey) : e.version,
                    depth: i.isNumber(e.depth) ? m.integerAsSingleByteBuffer(e.depth) : e.depth,
                    parentFingerPrint: i.isNumber(e.parentFingerPrint) ? m.integerAsBuffer(e.parentFingerPrint) : e.parentFingerPrint,
                    childIndex: i.isNumber(e.childIndex) ? m.integerAsBuffer(e.childIndex) : e.childIndex,
                    chainCode: i.isString(e.chainCode) ? m.hexToBuffer(e.chainCode) : e.chainCode,
                    privateKey: i.isString(e.privateKey) && g.isHexa(e.privateKey) ? m.hexToBuffer(e.privateKey) : e.privateKey,
                    checksum: e.checksum ? e.checksum.length ? e.checksum : m.integerAsBuffer(e.checksum) : void 0
                };
                return this._buildFromBuffers(t)
            }, v.prototype._buildFromSerialized = function(e) {
                var t = f.decode(e),
                    r = {
                        version: t.slice(v.VersionStart, v.VersionEnd),
                        depth: t.slice(v.DepthStart, v.DepthEnd),
                        parentFingerPrint: t.slice(v.ParentFingerPrintStart, v.ParentFingerPrintEnd),
                        childIndex: t.slice(v.ChildIndexStart, v.ChildIndexEnd),
                        chainCode: t.slice(v.ChainCodeStart, v.ChainCodeEnd),
                        privateKey: t.slice(v.PrivateKeyStart, v.PrivateKeyEnd),
                        checksum: t.slice(v.ChecksumStart, v.ChecksumEnd),
                        xprivkey: e
                    };
                return this._buildFromBuffers(r)
            }, v.prototype._generateRandomly = function(e) {
                return v.fromSeed(p.getRandomBuffer(64), e)
            }, v.fromSeed = function(e, t) {
                if (g.isHexaString(e) && (e = m.hexToBuffer(e)), !Buffer.isBuffer(e)) throw new l.InvalidEntropyArgument(e);
                if (e.length < 16) throw new l.InvalidEntropyArgument.NotEnoughEntropy(e);
                if (e.length > 64) throw new l.InvalidEntropyArgument.TooMuchEntropy(e);
                var r = u.sha512hmac(e, Buffer.from("Bitcoin seed"));
                return new v({
                    network: h.get(t) || h.defaultNetwork,
                    depth: 0,
                    parentFingerPrint: 0,
                    childIndex: 0,
                    privateKey: r.slice(0, 32),
                    chainCode: r.slice(32, 64)
                })
            }, v.prototype._calcHDPublicKey = function() {
                if (!this._hdPublicKey) {
                    var e = r(7293);
                    this._hdPublicKey = new e(this)
                }
            }, v.prototype._buildFromBuffers = function(e) {
                v._validateBufferArguments(e), g.defineImmutable(this, {
                    _buffers: e
                });
                var t = [e.version, e.depth, e.parentFingerPrint, e.childIndex, e.chainCode, m.emptyBuffer(1), e.privateKey],
                    r = Buffer.concat(t);
                if (e.checksum && e.checksum.length) {
                    if (e.checksum.toString() !== f.checksum(r).toString()) throw new d.InvalidB58Checksum(r)
                } else e.checksum = f.checksum(r);
                var n, i = h.get(m.integerFromBuffer(e.version));
                n = f.encode(Buffer.concat(t)), e.xprivkey = Buffer.from(n);
                var o = new c(s.fromBuffer(e.privateKey), i),
                    a = o.toPublicKey(),
                    p = v.ParentFingerPrintSize,
                    l = u.sha256ripemd160(a.toBuffer()).slice(0, p);
                return g.defineImmutable(this, {
                    xprivkey: n,
                    network: i,
                    depth: m.integerFromSingleByteBuffer(e.depth),
                    privateKey: o,
                    publicKey: a,
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
            }, v._validateBufferArguments = function(e) {
                var t = function(t, r) {
                    var i = e[t];
                    n(m.isBuffer(i), t + " argument is not a buffer"), n(i.length === r, t + " has not the expected size: found " + i.length + ", expected " + r)
                };
                t("version", v.VersionSize), t("depth", v.DepthSize), t("parentFingerPrint", v.ParentFingerPrintSize), t("childIndex", v.ChildIndexSize), t("chainCode", v.ChainCodeSize), t("privateKey", v.PrivateKeySize), e.checksum && e.checksum.length && t("checksum", v.CheckSumSize)
            }, v.prototype.toString = function() {
                return this.xprivkey
            }, v.prototype.inspect = function() {
                return "<HDPrivateKey: " + this.xprivkey + ">"
            }, v.prototype.toObject = v.prototype.toJSON = function() {
                return {
                    network: h.get(m.integerFromBuffer(this._buffers.version), "xprivkey").name,
                    depth: m.integerFromSingleByteBuffer(this._buffers.depth),
                    fingerPrint: m.integerFromBuffer(this.fingerPrint),
                    parentFingerPrint: m.integerFromBuffer(this._buffers.parentFingerPrint),
                    childIndex: m.integerFromBuffer(this._buffers.childIndex),
                    chainCode: m.bufferToHex(this._buffers.chainCode),
                    privateKey: this.privateKey.toBuffer().toString("hex"),
                    checksum: m.integerFromBuffer(this._buffers.checksum),
                    xprivkey: this.xprivkey
                }
            }, v.fromBuffer = function(e) {
                return new v(e.toString())
            }, v.prototype.toBuffer = function() {
                return m.copy(this._buffers.xprivkey)
            }, v.DefaultDepth = 0, v.DefaultFingerprint = 0, v.DefaultChildIndex = 0, v.Hardened = 2147483648, v.MaxIndex = 2 * v.Hardened, v.RootElementAlias = ["m", "M", "m'", "M'"], v.VersionSize = 4, v.DepthSize = 1, v.ParentFingerPrintSize = 4, v.ChildIndexSize = 4, v.ChainCodeSize = 32, v.PrivateKeySize = 32, v.CheckSumSize = 4, v.DataLength = 78, v.SerializedByteSize = 82, v.VersionStart = 0, v.VersionEnd = v.VersionStart + v.VersionSize, v.DepthStart = v.VersionEnd, v.DepthEnd = v.DepthStart + v.DepthSize, v.ParentFingerPrintStart = v.DepthEnd, v.ParentFingerPrintEnd = v.ParentFingerPrintStart + v.ParentFingerPrintSize, v.ChildIndexStart = v.ParentFingerPrintEnd, v.ChildIndexEnd = v.ChildIndexStart + v.ChildIndexSize, v.ChainCodeStart = v.ChildIndexEnd, v.ChainCodeEnd = v.ChainCodeStart + v.ChainCodeSize, v.PrivateKeyStart = v.ChainCodeEnd + 1, v.PrivateKeyEnd = v.PrivateKeyStart + v.PrivateKeySize, v.ChecksumStart = v.PrivateKeyEnd, v.ChecksumEnd = v.ChecksumStart + v.CheckSumSize, n(v.ChecksumEnd === v.SerializedByteSize), e.exports = v
        },
        7290: function(e, t, r) {
            "use strict";
            var n = r(53),
                i = r(6207),
                o = r(5503),
                s = r(5515),
                a = r(5507),
                f = r(5541),
                u = (r(5484), r(5933)),
                h = r(5478);

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
                for (var t = 0; t < this.hashes.length; t++) e.write(Buffer.from(this.hashes[t], "hex"));
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
                    return 2 * t + 1 < this._calcTreeWidth(e - 1) && (o = this._traverseMerkleTree(e - 1, 2 * t + 1, r)), f.sha256sha256(Buffer.concat([i, o]))
                }
                if (r.hashesUsed >= this.hashes.length) return null;
                var s = this.hashes[r.hashesUsed++];
                return 0 === e && n && r.txs.push(s), Buffer.from(s, "hex")
            }, c.prototype._calcTreeWidth = function(e) {
                return this.numTransactions + (1 << e) - 1 >> e
            }, c.prototype._calcTreeHeight = function() {
                for (var e = 0; this._calcTreeWidth(e) > 1;) e++;
                return e
            }, c.prototype.hasTransaction = function(e) {
                h.checkArgument(!n.isUndefined(e), "tx cannot be undefined"), h.checkArgument(e instanceof u || "string" == typeof e, 'Invalid tx given, tx must be a "string" or "Transaction"');
                var t = e;
                e instanceof u && (t = o.reverse(Buffer.from(e.id, "hex")).toString("hex"));
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
        7291: function(e, t, r) {
            "use strict";
            var n = r(5515),
                i = r(5507),
                o = r(5503),
                s = r(53),
                a = r(5484).isHexa,
                f = r(7292),
                u = r(9567),
                h = r(5933),
                c = r(5540);

            function p(e) {
                if (e) {
                    if (e instanceof p) return e.copy();
                    if (o.isBuffer(e)) return p.fromBuffer(e);
                    if (s.isObject(e)) return p.fromObject(e);
                    if (a(e)) return p.fromHexString(e);
                    throw new TypeError("Unrecognized argument passed to SimplifiedMNListDiff constructor")
                }
            }
            p.fromBuffer = function(e) {
                var t = new n(Buffer.from(e)),
                    r = {};
                r.baseBlockHash = t.read(c.SHA256_HASH_SIZE).reverse().toString("hex"), r.blockHash = t.read(c.SHA256_HASH_SIZE).reverse().toString("hex"), r.cbTxMerkleTree = u.fromBufferReader(t), r.cbTx = (new h).fromBufferReader(t);
                var i = t.readVarintNum();
                r.deletedMNs = [];
                for (var o = 0; o < i; o++) r.deletedMNs.push(t.read(c.SHA256_HASH_SIZE).reverse().toString("hex"));
                var s = t.readVarintNum();
                r.mnList = [];
                for (o = 0; o < s; o++) r.mnList.push(f.fromBuffer(t.read(c.SML_ENTRY_SIZE)));
                return r.merkleRootMNList = r.cbTx.extraPayload.merkleRootMNList, this.fromObject(r)
            }, p.fromHexString = function(e) {
                return p.fromBuffer(Buffer.from(e, "hex"))
            }, p.prototype.toBuffer = function() {
                var e = new i;
                return e.write(Buffer.from(this.baseBlockHash, "hex").reverse()), e.write(Buffer.from(this.blockHash, "hex").reverse()), e.write(this.cbTxMerkleTree.toBuffer()), e.write(this.cbTx.toBuffer()), e.writeVarintNum(this.deletedMNs.length), this.deletedMNs.forEach((function(t) {
                    e.write(Buffer.from(t, "hex").reverse())
                })), e.writeVarintNum(this.mnList.length), this.mnList.forEach((function(t) {
                    e.write(t.toBuffer())
                })), e.toBuffer()
            }, p.fromObject = function(e) {
                var t = new p;
                return t.baseBlockHash = e.baseBlockHash, t.blockHash = e.blockHash, t.cbTxMerkleTree = new u(e.cbTxMerkleTree), t.cbTx = new h(e.cbTx), t.deletedMNs = e.deletedMNs.slice(), t.mnList = e.mnList.map((function(e) {
                    return new f(e)
                })), t.merkleRootMNList = e.merkleRootMNList, t
            }, p.prototype.toObject = function() {
                var e = {};
                return e.baseBlockHash = this.baseBlockHash, e.blockHash = this.blockHash, e.cbTxMerkleTree = this.cbTxMerkleTree.toString(), e.cbTx = this.cbTx.serialize(!0), e.deletedMNs = this.deletedMNs.slice(), e.mnList = this.mnList.map((function(e) {
                    return e.toObject()
                })), e.merkleRootMNList = this.merkleRootMNList, e
            }, p.prototype.copy = function() {
                return p.fromBuffer(this.toBuffer())
            }, e.exports = p
        },
        7292: function(e, t, r) {
            "use strict";
            var n = r(53),
                i = r(5515),
                o = r(5507),
                s = r(5503),
                a = r(5478),
                f = r(5541),
                u = r(5540),
                h = r(5484),
                c = r(6553),
                p = h.isSha256HexString,
                d = h.isHexStringOfSize,
                l = h.isHexaString,
                m = c.bufferToIPAndPort,
                g = c.ipAndPortToBuffer,
                v = u.SHA256_HASH_SIZE,
                y = u.PUBKEY_ID_SIZE,
                b = u.BLS_PUBLIC_KEY_SIZE;

            function B(e) {
                if (e) {
                    if (e instanceof B) return e.copy();
                    if (s.isBuffer(e)) return B.fromBuffer(e);
                    if (n.isObject(e)) return B.fromObject(e);
                    if (e instanceof B) return e.copy();
                    if (l(e)) return B.fromHexString(e);
                    throw new TypeError("Unrecognized argument for SimplifiedMNListEntry")
                }
            }
            B.fromBuffer = function(e) {
                var t = new i(e);
                return B.fromObject({
                    proRegTxHash: t.read(v).reverse().toString("hex"),
                    confirmedHash: t.read(v).reverse().toString("hex"),
                    service: m(t.read(c.IP_AND_PORT_SIZE)),
                    pubKeyOperator: t.read(b).toString("hex"),
                    keyIDVoting: t.read(y).reverse().toString("hex"),
                    isValid: Boolean(t.readUInt8())
                })
            }, B.fromHexString = function(e) {
                return B.fromBuffer(Buffer.from(e, "hex"))
            }, B.prototype.toBuffer = function() {
                this.validate();
                var e = new o;
                return e.write(Buffer.from(this.proRegTxHash, "hex").reverse()), e.write(Buffer.from(this.confirmedHash, "hex").reverse()), e.write(g(this.service)), e.write(Buffer.from(this.pubKeyOperator, "hex")), e.write(Buffer.from(this.keyIDVoting, "hex").reverse()), e.writeUInt8(Number(this.isValid)), e.toBuffer()
            }, B.fromObject = function(e) {
                var t = new B;
                return t.proRegTxHash = e.proRegTxHash, t.confirmedHash = e.confirmedHash, t.service = e.service, t.pubKeyOperator = e.pubKeyOperator, t.keyIDVoting = e.keyIDVoting, t.isValid = e.isValid, t.validate(), t
            }, B.prototype.validate = function() {
                a.checkArgument(p(this.proRegTxHash), "Expected proRegTxHash to be a sha256 hex string"), a.checkArgument(p(this.confirmedHash), "Expected confirmedHash to be a sha256 hex string"), c.isZeroAddress(this.service) || a.checkArgument(c.isIPV4(this.service), "Expected service to be a string with ip address and port"), d(this.keyIDVoting, 2 * y) || console.log(this.keyIDVoting), a.checkArgument(d(this.pubKeyOperator, 2 * b), "Expected pubKeyOperator to be a pubkey id"), a.checkArgument(d(this.keyIDVoting, 2 * y), "Expected keyIDVoting to be a pubkey id"), a.checkArgument("boolean" == typeof this.isValid, "Expected isValid to be a boolean")
            }, B.prototype.toObject = function() {
                return {
                    proRegTxHash: this.proRegTxHash,
                    confirmedHash: this.confirmedHash,
                    service: this.service,
                    pubKeyOperator: this.pubKeyOperator,
                    keyIDVoting: this.keyIDVoting,
                    isValid: this.isValid
                }
            }, B.prototype.calculateHash = function() {
                return f.sha256sha256(this.toBuffer())
            }, B.prototype.copy = function() {
                return B.fromBuffer(this.toBuffer())
            }, e.exports = B
        },
        7293: function(e, t, r) {
            "use strict";
            var n = r(53),
                i = r(5478),
                o = r(5593),
                s = r(6206),
                a = r(6055),
                f = r(5541),
                u = r(6554),
                h = r(5848),
                Point = r(5932),
                c = r(5668),
                p = r(5615),
                d = p,
                l = p.HDPublicKey,
                m = r(72),
                g = r(5484),
                v = r(5503);

            function y(e) {
                if (e instanceof y) return e;
                if (!(this instanceof y)) return new y(e);
                if (e) {
                    if (n.isString(e) || v.isBuffer(e)) {
                        var t = y.getSerializedError(e);
                        if (t) {
                            if (v.isBuffer(e) && !y.getSerializedError(e.toString())) return this._buildFromSerialized(e.toString());
                            if (t instanceof l.ArgumentIsPrivateExtended) return new u(e).hdPublicKey;
                            throw t
                        }
                        return this._buildFromSerialized(e)
                    }
                    if (n.isObject(e)) return e instanceof u ? this._buildFromPrivate(e) : this._buildFromObject(e);
                    throw new l.UnrecognizedArgument(e)
                }
                throw new l.MustSupplyArgument
            }
            y.isValidPath = function(e) {
                if (n.isString(e)) {
                    var t = u._getDerivationIndexes(e);
                    return null !== t && n.every(t, y.isValidPath)
                }
                return !!n.isNumber(e) && (e >= 0 && e < y.Hardened)
            }, y.prototype.derive = function(e, t) {
                return this.deriveChild(e, t)
            }, y.prototype.deriveChild = function(e, t) {
                if (n.isNumber(e)) return this._deriveWithNumber(e, t);
                if (n.isString(e)) return this._deriveFromString(e);
                throw new l.InvalidDerivationArgument(e)
            }, y.prototype._deriveWithNumber = function(e, t) {
                if (e >= y.Hardened || t) throw new l.InvalidIndexCantDeriveHardened;
                if (e < 0) throw new l.InvalidPath(e);
                var r, n = v.integerAsBuffer(e),
                    i = v.concat([this.publicKey.toBuffer(), n]),
                    s = f.sha512hmac(i, this._buffers.chainCode),
                    a = o.fromBuffer(s.slice(0, 32), {
                        size: 32
                    }),
                    u = s.slice(32, 64);
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
                    chainCode: u,
                    publicKey: r
                })
            }, y.prototype._deriveFromString = function(e) {
                if (n.includes(e, "'")) throw new l.InvalidIndexCantDeriveHardened;
                if (!y.isValidPath(e)) throw new l.InvalidPath(e);
                return u._getDerivationIndexes(e).reduce((function(e, t) {
                    return e._deriveWithNumber(t)
                }), this)
            }, y.isValidSerialized = function(e, t) {
                return n.isNull(y.getSerializedError(e, t))
            }, y.getSerializedError = function(e, t) {
                if (!n.isString(e) && !v.isBuffer(e)) return new l.UnrecognizedArgument("expected buffer or string");
                if (!s.validCharacters(e)) return new d.InvalidB58Char("(unknown)", e);
                try {
                    e = a.decode(e)
                } catch (t) {
                    return new d.InvalidB58Checksum(e)
                }
                if (e.length !== y.DataSize) return new l.InvalidLength(e);
                if (!n.isUndefined(t)) {
                    var r = y._validateNetwork(e, t);
                    if (r) return r
                }
                var i = v.integerFromBuffer(e.slice(0, 4));
                return i === h.livenet.xprivkey || i === h.testnet.xprivkey ? new l.ArgumentIsPrivateExtended : null
            }, y._validateNetwork = function(e, t) {
                var r = h.get(t);
                if (!r) return new d.InvalidNetworkArgument(t);
                var n = e.slice(y.VersionStart, y.VersionEnd);
                return v.integerFromBuffer(n) !== r.xpubkey ? new d.InvalidNetwork(n) : null
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
                    if (e.checksum.toString("hex") !== n.toString("hex")) throw new d.InvalidB58Checksum(r, n)
                } else e.checksum = n;
                var i, o = h.get(v.integerFromBuffer(e.version));
                i = a.encode(v.concat(t)), e.xpubkey = Buffer.from(i);
                var s = new c(e.publicKey, {
                        network: o
                    }),
                    u = y.ParentFingerPrintSize,
                    p = f.sha256ripemd160(s.toBuffer()).slice(0, u);
                return g.defineImmutable(this, {
                    xpubkey: i,
                    network: o,
                    depth: v.integerFromSingleByteBuffer(e.depth),
                    publicKey: s,
                    fingerPrint: p
                }), this
            }, y._validateBufferArguments = function(e) {
                var t = function(t, r) {
                    var n = e[t];
                    m(v.isBuffer(n), t + " argument is not a buffer, it's " + typeof n), m(n.length === r, t + " has not the expected size: found " + n.length + ", expected " + r)
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
            }, y.Hardened = 2147483648, y.RootElementAlias = ["m", "M"], y.VersionSize = 4, y.DepthSize = 1, y.ParentFingerPrintSize = 4, y.ChildIndexSize = 4, y.ChainCodeSize = 32, y.PublicKeySize = 33, y.CheckSumSize = 4, y.DataSize = 78, y.SerializedByteSize = 82, y.VersionStart = 0, y.VersionEnd = y.VersionStart + y.VersionSize, y.DepthStart = y.VersionEnd, y.DepthEnd = y.DepthStart + y.DepthSize, y.ParentFingerPrintStart = y.DepthEnd, y.ParentFingerPrintEnd = y.ParentFingerPrintStart + y.ParentFingerPrintSize, y.ChildIndexStart = y.ParentFingerPrintEnd, y.ChildIndexEnd = y.ChildIndexStart + y.ChildIndexSize, y.ChainCodeStart = y.ChildIndexEnd, y.ChainCodeEnd = y.ChainCodeStart + y.ChainCodeSize, y.PublicKeyStart = y.ChainCodeEnd, y.PublicKeyEnd = y.PublicKeyStart + y.PublicKeySize, y.ChecksumStart = y.PublicKeyEnd, y.ChecksumEnd = y.ChecksumStart + y.CheckSumSize, m(y.PublicKeyEnd === y.DataSize), m(y.ChecksumEnd === y.SerializedByteSize), e.exports = y
        },
        7294: function(e, t, r) {
            "use strict";
            var n = r(53),
                i = r(5478),
                o = r(5615),
                s = r(5503),
                a = r(5484),
                f = r(5515),
                u = r(5507),
                h = r(5744);

            function c(e) {
                if (e) {
                    if (e instanceof c) return c.shallowCopy(e);
                    if (a.isHexa(e)) return this.fromString(e);
                    if (s.isBuffer(e)) return this.fromBuffer(e);
                    if (n.isObject(e)) return this.fromObject(e);
                    throw new o.InvalidArgument("Must provide an object or string to deserialize a transaction")
                }
                this._newGovObject()
            }
            c.prototype.dataHex = function() {
                return null
            }, c.prototype._newGovObject = function() {
                return null
            }, c.prototype.fromObject = function(e) {
                var t;
                if (!(n.isObject(e) || e instanceof c)) {
                    try {
                        var r = JSON.parse(e)
                    } catch (e) {
                        throw new Error("Must be a valid stringified JSON")
                    }
                    return this.fromObject(r)
                }
                switch (t = e, n.each([
                        ["type", "number"]
                    ], (function(e) {
                        var r = e[0],
                            n = e[1];
                        if (!t.hasOwnProperty(r)) throw new Error("Must be a valid JSON - Property " + r + " missing");
                        var i = typeof t[r];
                        if (i !== n) throw new Error("Must be a valid JSON - Expected property " + r + " to be a " + n + " received:" + i)
                    })), t.type) {
                    case 1:
                        var i = new c.Proposal;
                        return i = i.fromObject(t);
                    default:
                        throw new Error("Unhandled GovObject type")
                }
            }, c.prototype.fromString = function(e) {
                return this.fromBuffer(Buffer.from(e, "hex"))
            }, c.prototype.checkedSerialize = function(e) {
                var t = this.getSerializationError(e);
                if (t) throw t;
                return this.uncheckedSerialize()
            }, c.prototype.serialize = function(e) {
                return !0 === e || e && e.disableAll ? this.uncheckedSerialize() : this.checkedSerialize(e)
            }, c.prototype.uncheckedSerialize = c.prototype.toString = function() {
                return this.toBuffer().toString("hex")
            }, c.prototype.inspect = function() {
                return "<GovObject: " + this.uncheckedSerialize() + ">"
            }, c.prototype.toBuffer = function() {
                var e = new u;
                return this.toBufferWriter(e).toBuffer()
            }, c.prototype.toBufferWriter = function(e) {
                return e.write(Buffer.from(this.dataHex())), e
            }, c.prototype.fromBuffer = function(e) {
                var t = new f(e);
                return this.fromBufferReader(t)
            }, c.prototype.fromBufferReader = function(e) {
                i.checkArgument(!e.finished(), "No data received");
                var t, r = e.read(e.buf.length),
                    n = JSON.parse(r.toString("utf8"));
                if ("Object" === n.constructor.name) t = n;
                else {
                    if ("Array" !== n.constructor.name) throw new Error("Data is invalid GovObject");
                    t = n[0][1]
                }
                return this.fromObject(t)
            }, c.prototype._verifyDateFormat = function(e) {
                return new Date(1e3 * e)
            }, c.prototype._verifyPayment = function(e) {
                var t = parseFloat(e);
                return !!isNaN(t) || Boolean(t <= 0)
            }, c.prototype._verifyAddress = function(e, t) {
                return h.isValid(e, t)
            }, c.prototype._verifyPayToScriptHash = function(e, t) {
                return new h(e, t).isPayToScriptHash()
            }, c.prototype._verifyUrl = function(e) {
                return /^(http|https):\/\/[^ "]{1,255}$/.test(e)
            }, c.prototype._verifyName = function(e) {
                return /^[-_a-zA-Z0-9]{1,40}$/.test(e)
            }, c.shallowCopy = function(e) {
                return new c(e.toBuffer())
            }, e.exports = c
        },
        9526: function(e, t, r) {
            "use strict";
            var n = e.exports;
            n.version = "v" + r(9527).version, n.versionGuard = function(e) {
                if (void 0 !== e) {
                    console.warn("More than one instance of dashcore-lib found. Please make sure that you are not mixing instances of classes of the different versions of dashcore.")
                }
            }, n.versionGuard(global._dashcore), global._dashcore = n.version, n.crypto = {}, n.crypto.BN = r(5593), n.crypto.ECDSA = r(6204), n.crypto.Hash = r(5541), n.crypto.Random = r(6059), n.crypto.Point = r(5932), n.crypto.Signature = r(5630), n.encoding = {}, n.encoding.Base58 = r(6206), n.encoding.Base58Check = r(6055), n.encoding.BufferReader = r(5515), n.encoding.BufferWriter = r(5507), n.encoding.Varint = r(9562), n.util = {}, n.util.buffer = r(5503), n.util.js = r(5484), n.util.preconditions = r(5478), n.util.hashUtil = r(9563), n.util.merkleTree = r(7289), n.errors = r(5615), n.Address = r(5744), n.Block = r(9564), n.MerkleBlock = r(7290), n.SimplifiedMNList = r(9566), n.SimplifiedMNListDiff = r(7291), n.SimplifiedMNListEntry = r(7292), n.BlockHeader = r(6207), n.HDPrivateKey = r(6554), n.HDPublicKey = r(7293), n.Networks = r(5848), n.Opcode = r(6549), n.PrivateKey = r(5743), n.PublicKey = r(5668), n.Script = r(5606), n.Transaction = r(5933), n.GovObject = r(9568), n.URI = r(9570), n.Unit = r(6552), n.Message = r(9571), n.Mnemonic = r(9572), n.deps = {}, n.deps.bnjs = r(6054), n.deps.bs58 = r(84), n.deps.Buffer = Buffer, n.deps.elliptic = r(5629), n.deps._ = r(53), n.Transaction.sighash = r(5787)
        },
        9528: function(e, t, r) {
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
                name: "GovObject",
                message: "Internal Error on GovObject {0}",
                errors: [{
                    name: "Proposal",
                    message: "Internal Error on Proposal {0}",
                    errors: [{
                        name: "invalidDate",
                        message: "Invalid Date"
                    }, {
                        name: "invalidDateWindow",
                        message: "Invalid Timespan"
                    }, {
                        name: "invalidAddress",
                        message: "Invalid Address"
                    }, {
                        name: "invalidP2SHAddress",
                        message: "Invalid P2SHAddress"
                    }, {
                        name: "invalidPayment",
                        message: "Invalid Payment Amount"
                    }, {
                        name: "invalidUrl",
                        message: "Invalid URL"
                    }, {
                        name: "invalidName",
                        message: "Invalid Name"
                    }]
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
                    name: "InvalidPayloadSize",
                    message: "Transaction payload size is invalid"
                }, {
                    name: "SpecialTransactionTypeIsNotSet",
                    message: "Special transaction type is not set"
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
                    message: "Invalid entropy: must be a hex string or binary buffer, got {0}",
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
        9561: function(e, t, r) {
            var n = r(5630),
                i = r(6204),
                o = r(5743),
                s = {
                    signHash: function(e, t) {
                        "string" == typeof t && (t = new o(t));
                        var r = new i;
                        return r.hashbuf = e, r.privkey = t, r.pubkey = t.toPublicKey(), r.signRandomK(), r.calci(), r.sig.toCompact()
                    },
                    verifySignature: function(e, t, r) {
                        var o = n.fromCompact(t),
                            s = new i({
                                hashbuf: e,
                                sig: o
                            }).toPublicKey()._getID(),
                            a = Buffer.from(r, "hex");
                        return s.equals(a)
                    }
                };
            e.exports = s
        },
        9562: function(e, t, r) {
            "use strict";
            var n = r(5507),
                i = r(5515),
                o = r(5593),
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
                    buf: Buffer.from(e, "hex")
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
        9564: function(e, t, r) {
            e.exports = r(9565), e.exports.BlockHeader = r(6207), e.exports.MerkleBlock = r(7290)
        },
        9565: function(e, t, r) {
            "use strict";
            var n = r(53),
                i = r(6207),
                o = r(5593),
                s = r(5503),
                a = r(5515),
                f = r(5507),
                u = r(5541),
                h = r(5933),
                c = r(5478);

            function Block(e) {
                return this instanceof Block ? (n.extend(this, Block._from(e)), this) : new Block(e)
            }
            Block.MAX_BLOCK_SIZE = 1e6, Block._from = function(e) {
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
                var t = Buffer.from(e, "hex");
                return Block.fromBuffer(t)
            }, Block.fromRawBlock = function(e) {
                s.isBuffer(e) || (e = Buffer.from(e, "binary"));
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
                e || (e = new f), e.write(this.header.toBuffer()), e.writeVarintNum(this.transactions.length);
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
                        e.push(u.sha256sha256(o))
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
            var p = {
                configurable: !1,
                enumerable: !0,
                get: function() {
                    return this._id || (this._id = this.header.id), this._id
                },
                set: n.noop
            };
            Object.defineProperty(Block.prototype, "id", p), Object.defineProperty(Block.prototype, "hash", p), Block.prototype.inspect = function() {
                return "<Block " + this.id + ">"
            }, Block.Values = {
                START_OF_BLOCK: 8,
                NULL_HASH: Buffer.from("0000000000000000000000000000000000000000000000000000000000000000", "hex")
            }, e.exports = Block
        },
        9566: function(e, t, r) {
            var n = r(7289),
                i = r(7291),
                o = r(5540),
                s = r(5933),
                a = n.getMerkleTree,
                f = n.getMerkleRoot;

            function u(e) {
                this.baseBlockHash = o.NULL_HASH, this.blockHash = o.NULL_HASH, this.mnList = [], this.validMNs = [], this.merkleRootMNList = o.NULL_HASH, this.lastDiffMerkleRootMNList = o.NULL_HASH, this.cbTx = null, this.cbTxMerkleTree = null, e && this.applyDiff(e)
            }
            u.prototype.applyDiff = function(e) {
                var t = new i(e);
                if (this.baseBlockHash === o.NULL_HASH && (this.baseBlockHash = t.baseBlockHash), this.blockHash = t.blockHash, this.deleteMNs(t.deletedMNs), this.addOrUpdateMNs(t.mnList), this.lastDiffMerkleRootMNList = t.merkleRootMNList || o.NULL_HASH, this.merkleRootMNList = this.calculateMerkleRoot(), !this.verify()) throw new Error("Merkle root from the diff doesn't match calculated merkle root after diff is applied");
                this.cbTx = new s(t.cbTx), this.cbTxMerkleTree = t.cbTxMerkleTree.copy(), this.validMNs = this.mnList.filter((function(e) {
                    return e.isValid
                }))
            }, u.prototype.addOrUpdateMNs = function(e) {
                e.map((function(e) {
                    return e.copy()
                })).forEach((function(e) {
                    var t = this.mnList.findIndex((function(t) {
                        return t.proRegTxHash === e.proRegTxHash
                    }));
                    if (!(t > -1)) return this.mnList.push(e);
                    this.mnList[t] = e
                }), this)
            }, u.prototype.deleteMNs = function(e) {
                e.forEach((function(e) {
                    var t = this.mnList.findIndex((function(t) {
                        return t.proRegTxHash === e
                    }));
                    t > -1 && this.mnList.splice(t, 1)
                }), this)
            }, u.prototype.verify = function() {
                return this.calculateMerkleRoot() === this.lastDiffMerkleRootMNList
            }, u.prototype.sort = function() {
                this.mnList.sort((function(e, t) {
                    return Buffer.compare(Buffer.from(e.proRegTxHash, "hex").reverse(), Buffer.from(t.proRegTxHash, "hex").reverse())
                }))
            }, u.prototype.calculateMerkleRoot = function() {
                if (this.mnList.length < 1) return o.NULL_HASH;
                this.sort();
                var e = this.mnList.map((function(e) {
                    return e.calculateHash()
                }));
                return f(a(e)).reverse().toString("hex")
            }, u.prototype.getValidMasternodesList = function() {
                return this.validMNs
            }, u.prototype.toSimplifiedMNListDiff = function() {
                if (!this.cbTx || !this.cbTxMerkleTree) throw new Error("Can't convert MN list to diff - cbTx is missing");
                return i.fromObject({
                    baseBlockHash: this.baseBlockHash,
                    blockHash: this.blockHash,
                    cbTx: new s(this.cbTx),
                    cbTxMerkleTree: this.cbTxMerkleTree,
                    deletedMNs: [],
                    mnList: this.mnList,
                    merkleRootMNList: this.merkleRootMNList
                })
            }, e.exports = u
        },
        9567: function(e, t, r) {
            var n = r(5515),
                i = r(5507),
                o = r(5503),
                s = r(231),
                a = r(5484).isHexa,
                f = r(5540);

            function u(e) {
                if (e) {
                    if (e instanceof u) return e.copy();
                    if (o.isBuffer(e)) return u.fromBuffer(e);
                    if (s(e)) return u.fromObject(e);
                    if (a(e)) return u.fromHexString(e);
                    throw new Error("Invalid argument passed to PartialMerkleTree - expected hex string, object or buffer")
                }
            }
            u.fromBufferReader = function(e) {
                var t = new u;
                t.totalTransactions = e.readUInt32LE();
                var r = e.readVarintNum();
                t.merkleHashes = [];
                for (var n = 0; n < r; n++) t.merkleHashes.push(e.read(f.SHA256_HASH_SIZE).toString("hex"));
                var i = e.readVarintNum();
                for (t.merkleFlags = [], n = 0; n < i; n++) t.merkleFlags.push(e.readUInt8());
                return t
            }, u.fromBuffer = function(e) {
                return u.fromBufferReader(new n(e))
            }, u.fromHexString = function(e) {
                return u.fromBuffer(Buffer.from(e, "hex"))
            }, u.prototype.toBuffer = function() {
                var e = new i;
                return e.writeUInt32LE(this.totalTransactions), e.writeVarintNum(this.merkleHashes.length), this.merkleHashes.forEach((function(t) {
                    e.write(Buffer.from(t, "hex"))
                })), e.writeVarintNum(this.merkleFlags.length), this.merkleFlags.forEach((function(t) {
                    e.writeUInt8(t)
                })), e.toBuffer()
            }, u.prototype.copy = function() {
                return u.fromBuffer(this.toBuffer())
            }, u.prototype.toString = function() {
                return this.toBuffer().toString("hex")
            }, e.exports = u
        },
        9568: function(e, t, r) {
            e.exports = r(7294), e.exports.Proposal = r(9569)
        },
        9569: function(e, t, r) {
            "use strict";
            var n = r(53),
                i = r(5478),
                o = r(7294),
                s = r(5615);

            function a(e) {
                o.call(this, e)
            }(0, r(43).inherits)(a, o), a.prototype.dataHex = function() {
                var e = {
                    end_epoch: this.end_epoch,
                    name: this.name,
                    payment_address: this.payment_address,
                    payment_amount: this.payment_amount,
                    start_epoch: this.start_epoch,
                    type: this.type,
                    url: this.url
                };
                return JSON.stringify(e)
            }, a.prototype._newGovObject = function() {
                this.end_epoch = "", this.name = "", this.payment_address = "", this.payment_amount = "", this.start_epoch = "", this.type = "", this.url = ""
            }, a.prototype.fromObject = function(e) {
                if (!(n.isObject(e) || e instanceof o)) {
                    try {
                        var t = JSON.parse(e)
                    } catch (e) {
                        throw new Error("Must be a valid stringified JSON")
                    }
                    return this.fromObject(t)
                }
                var r = e,
                    i = this;
                if (n.each([
                        ["end_epoch", "number"],
                        ["name", "string"],
                        ["payment_address", "string"],
                        ["payment_amount", "number"],
                        ["start_epoch", "number"],
                        ["type", "number"],
                        ["url", "string"]
                    ], (function(e) {
                        var t = e[0],
                            n = e[1];
                        if (!r.hasOwnProperty(t)) throw new Error("Must be a valid JSON - Property " + t + " missing");
                        var o = typeof r[t];
                        if (o !== n) throw new Error("Must be a valid JSON - Expected property " + t + " to be a " + n + " received:" + o);
                        var s = r[t];
                        if ("number" === o && isNaN(s)) throw new Error("Must be a valid JSON - Expected property " + t + " to be a number");
                        i[t] = r[t]
                    })), r.type && 1 !== r.type) throw new Error("Must be a valid proposal type.");
                return this
            }, a.prototype.fromBufferReader = function(e) {
                i.checkArgument(!e.finished(), "No data received");
                var t = e.read(e.buf.length),
                    r = JSON.parse(t.toString("utf8"));
                if ("Array" === r.constructor.name) n.merge(this, r[0][1]);
                else {
                    if ("Object" !== r.constructor.name) throw new Error("Invalid proposal");
                    n.merge(this, r)
                }
                return this
            }, a.prototype.getSerializationError = function(e) {
                if (e = e || {}, isNaN(this._verifyDateFormat(this.start_epoch))) return new s.GovObject.Proposal.invalidDate;
                if (isNaN(this._verifyDateFormat(this.end_epoch))) return new s.GovObject.Proposal.invalidDate;
                if (this.start_epoch >= this.end_epoch) return new s.GovObject.Proposal.invalidDateWindow;
                var t = Math.round((new Date).getTime() / 1e3);
                return this.end_epoch < t ? new s.GovObject.Proposal.invalidDateWindow : this._verifyAddress(this.payment_address, this.network) ? this._verifyPayToScriptHash(this.payment_address, this.network) ? new s.GovObject.Proposal.invalidP2SHAddress : this._verifyPayment(this.payment_amount) ? new s.GovObject.Proposal.invalidPayment : this._verifyUrl(this.url) ? this._verifyName(this.name) ? void 0 : new s.GovObject.Proposal.invalidName : new s.GovObject.Proposal.invalidUrl : new s.GovObject.Proposal.invalidAddress
            }, e.exports = a
        },
        9571: function(e, t, r) {
            "use strict";
            var n = r(53),
                i = r(5743),
                o = r(5668),
                s = r(5744),
                a = r(5507),
                f = r(6204),
                u = r(5630),
                h = r(5541).sha256sha256,
                c = r(5484),
                p = r(5478),
                d = function e(t) {
                    return this instanceof e ? (p.checkArgument(n.isString(t), "First argument should be a string"), this.message = t, this) : new e(t)
                };
            d.MAGIC_BYTES = Buffer.from("DarkCoin Signed Message:\n"), d.prototype.magicHash = function() {
                var e = a.varintBufNum(d.MAGIC_BYTES.length),
                    t = Buffer.from(this.message),
                    r = a.varintBufNum(t.length),
                    n = Buffer.concat([e, d.MAGIC_BYTES, r, t]);
                return h(n)
            }, d.prototype._sign = function(e) {
                p.checkArgument(e instanceof i, "First argument should be an instance of PrivateKey");
                var t = this.magicHash(),
                    r = new f;
                return r.hashbuf = t, r.privkey = e, r.pubkey = e.toPublicKey(), r.signRandomK(), r.calci(), r.sig
            }, d.prototype.sign = function(e) {
                return this._sign(e).toCompact().toString("base64")
            }, d.prototype._verify = function(e, t) {
                p.checkArgument(e instanceof o, "First argument should be an instance of PublicKey"), p.checkArgument(t instanceof u, "Second argument should be an instance of Signature");
                var r = this.magicHash(),
                    n = f.verify(r, t, e);
                return n || (this.error = "The signature was invalid"), n
            }, d.prototype.verify = function(e, t) {
                p.checkArgument(e), p.checkArgument(t && n.isString(t)), n.isString(e) && (e = s.fromString(e));
                var r = u.fromCompact(Buffer.from(t, "base64")),
                    i = new f;
                i.hashbuf = this.magicHash(), i.sig = r;
                var o = i.toPublicKey(),
                    a = s.fromPublicKey(o, e.network);
                return e.toString() !== a.toString() ? (this.error = "The signature did not match the message digest", !1) : this._verify(o, r)
            }, d.fromString = function(e) {
                return new d(e)
            }, d.fromJSON = function(e) {
                return c.isValidJSON(e) && (e = JSON.parse(e)), new d(e.message)
            }, d.prototype.toObject = function() {
                return {
                    message: this.message
                }
            }, d.prototype.toJSON = function() {
                return JSON.stringify(this.toObject())
            }, d.prototype.toString = function() {
                return this.message
            }, d.prototype.inspect = function() {
                return "<Message: " + this.toString() + ">"
            }, e.exports = d
        }
    }
]);