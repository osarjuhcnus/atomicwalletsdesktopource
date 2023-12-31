(window.webpackJsonp = window.webpackJsonp || []).push([
    [166], {
        134: function(e, t, r) {
            "use strict";
            var n = r(35),
                i = r(70),
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
            }, n.trim = function(e, t) {
                return e.slice(t - e.length, e.length)
            }, n.pad = function(e, t, r) {
                for (var n = Buffer.alloc(r), i = 0; i < e.length; i++) n[n.length - 1 - i] = e[e.length - 1 - i];
                for (i = 0; i < r - t; i++) n[i] = 0;
                return n
            }, e.exports = n
        },
        135: function(e, t, r) {
            "use strict";
            var n = r(24),
                i = r(87),
                o = r(70),
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
                    var s = Buffer.alloc(n);
                    s.fill(0), r.copy(s), r = s
                }
                var a = Buffer.alloc(n);
                a.fill(92);
                var u = Buffer.alloc(n);
                u.fill(54);
                for (var f = Buffer.alloc(n), h = Buffer.alloc(n), c = 0; c < n; c++) f[c] = a[c] ^ r[c], h[c] = u[c] ^ r[c];
                return e(Buffer.concat([f, e(Buffer.concat([h, t]))]))
            }, s.sha256hmac = function(e, t) {
                return s.hmac(s.sha256, e, t)
            }, s.sha512hmac = function(e, t) {
                return s.hmac(s.sha512, e, t)
            }
        },
        1389: function(e, t, r) {
            "use strict";
            var n = e.exports;
            n.version = "v" + r(4068).version, n.versionGuard = function(e) {
                if (void 0 !== e) {
                    throw new Error("More than one instance of bitcore-lib found. Please make sure to require bitcore-lib and check that submodules do not also include their own bitcore-lib dependency.")
                }
            }, n.versionGuard(global._bitcore), global._bitcore = n.version, n.crypto = {}, n.crypto.BN = r(134), n.crypto.ECDSA = r(658), n.crypto.Hash = r(135), n.crypto.Random = r(664), n.crypto.Point = r(430), n.crypto.Signature = r(182), n.encoding = {}, n.encoding.Base58 = r(659), n.encoding.Base58Check = r(518), n.encoding.BufferReader = r(269), n.encoding.BufferWriter = r(167), n.encoding.Varint = r(4083), n.util = {}, n.util.buffer = r(87), n.util.js = r(112), n.util.preconditions = r(70), n.errors = r(202), n.Address = r(244), n.Block = r(4084), n.MerkleBlock = r(2e3), n.BlockHeader = r(665), n.HDPrivateKey = r(2001), n.HDPublicKey = r(2002), n.Message = r(4086), n.Networks = r(352), n.Opcode = r(1122), n.PrivateKey = r(517), n.PublicKey = r(243), n.Script = r(183), n.Transaction = r(660), n.URI = r(4087), n.Unit = r(1125), n.deps = {}, n.deps.bnjs = r(35), n.deps.bs58 = r(84), n.deps.Buffer = Buffer, n.deps.elliptic = r(85), n.deps._ = r(53), n.Transaction.sighash = r(294)
        },
        167: function(e, t, r) {
            "use strict";
            var n = r(87),
                i = r(72),
                o = function e(t) {
                    if (!(this instanceof e)) return new e(t);
                    this.bufLen = 0, t ? this.set(t) : this.bufs = []
                };
            o.prototype.set = function(e) {
                return this.bufs = e.bufs || this.bufs || [], this.bufLen = this.bufs.reduce((function(e, t) {
                    return e + t.length
                }), 0), this
            }, o.prototype.toBuffer = function() {
                return this.concat()
            }, o.prototype.concat = function() {
                return Buffer.concat(this.bufs, this.bufLen)
            }, o.prototype.write = function(e) {
                return i(n.isBuffer(e)), this.bufs.push(e), this.bufLen += e.length, this
            }, o.prototype.writeReverse = function(e) {
                return i(n.isBuffer(e)), this.bufs.push(n.reverse(e)), this.bufLen += e.length, this
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
        182: function(e, t, r) {
            "use strict";
            var n = r(134),
                i = r(53),
                o = r(70),
                s = r(87),
                a = r(112),
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
                var t = Buffer.from(e, "hex");
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
                var l = e[4 + h + 0];
                o.checkArgument(2 === l, new Error("Integer byte for s should be 0x02"));
                var m = e[4 + h + 1],
                    g = e.slice(4 + h + 2, 4 + h + 2 + m),
                    y = n.fromBuffer(g),
                    v = 0 === e[4 + h + 2 + 2];
                o.checkArgument(m === g.length, new Error("Length of s incorrect"));
                var b = 4 + h + 2 + m;
                return o.checkArgument(a === b - 2, new Error("Length of signature incorrect")), {
                    header: r,
                    length: a,
                    rheader: f,
                    rlength: h,
                    rneg: p,
                    rbuf: c,
                    r: d,
                    sheader: l,
                    slength: m,
                    sneg: v,
                    sbuf: g,
                    s: y
                }
            }, u.prototype.toCompact = function(e, t) {
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
            }, u.prototype.toBuffer = u.prototype.toDER = function() {
                var e = this.r.toBuffer(),
                    t = this.s.toBuffer(),
                    r = !!(128 & e[0]),
                    n = !!(128 & t[0]),
                    i = r ? Buffer.concat([Buffer.from([0]), e]) : e,
                    o = n ? Buffer.concat([Buffer.from([0]), t]) : t,
                    s = i.length,
                    a = o.length,
                    u = 2 + s + 2 + a;
                return Buffer.concat([Buffer.from([48, u, 2, s]), i, Buffer.from([2, a]), o])
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
                    t = Buffer.alloc(1);
                return t.writeUInt8(this.nhashtype, 0), Buffer.concat([e, t])
            }, u.SIGHASH_ALL = 1, u.SIGHASH_NONE = 2, u.SIGHASH_SINGLE = 3, u.SIGHASH_ANYONECANPAY = 128, e.exports = u
        },
        2e3: function(e, t, r) {
            "use strict";
            var n = r(53),
                i = r(665),
                o = r(87),
                s = r(269),
                a = r(167),
                u = r(135),
                f = (r(112), r(660)),
                h = r(202),
                c = r(70);

            function d(e) {
                if (!(this instanceof d)) return new d(e);
                var t = {};
                if (o.isBuffer(e)) t = d._fromBufferReader(s(e));
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
            d.fromBuffer = function(e) {
                return d.fromBufferReader(s(e))
            }, d.fromBufferReader = function(e) {
                return new d(d._fromBufferReader(e))
            }, d.prototype.toBuffer = function() {
                return this.toBufferWriter().concat()
            }, d.prototype.toBufferWriter = function(e) {
                e || (e = new a), e.write(this.header.toBuffer()), e.writeUInt32LE(this.numTransactions), e.writeVarintNum(this.hashes.length);
                for (var t = 0; t < this.hashes.length; t++) e.write(Buffer.from(this.hashes[t], "hex"));
                for (e.writeVarintNum(this.flags.length), t = 0; t < this.flags.length; t++) e.writeUInt8(this.flags[t]);
                return e
            }, d.prototype.toObject = d.prototype.toJSON = function() {
                return {
                    header: this.header.toObject(),
                    numTransactions: this.numTransactions,
                    hashes: this.hashes,
                    flags: this.flags
                }
            }, d.prototype.validMerkleTree = function() {
                if (c.checkState(n.isArray(this.flags), "MerkleBlock flags is not an array"), c.checkState(n.isArray(this.hashes), "MerkleBlock hashes is not an array"), this.hashes.length > this.numTransactions) return !1;
                if (8 * this.flags.length < this.hashes.length) return !1;
                var e = this._calcTreeHeight(),
                    t = {
                        hashesUsed: 0,
                        flagBitsUsed: 0
                    },
                    r = this._traverseMerkleTree(e, 0, t);
                return t.hashesUsed === this.hashes.length && o.equals(r, this.header.merkleRoot)
            }, d.prototype.filterdTxsHash = function() {
                if (c.checkState(n.isArray(this.flags), "MerkleBlock flags is not an array"), c.checkState(n.isArray(this.hashes), "MerkleBlock hashes is not an array"), this.hashes.length > this.numTransactions) throw new h.MerkleBlock.InvalidMerkleTree;
                if (8 * this.flags.length < this.hashes.length) throw new h.MerkleBlock.InvalidMerkleTree;
                if (1 === this.hashes.length) return [];
                var e = this._calcTreeHeight(),
                    t = {
                        hashesUsed: 0,
                        flagBitsUsed: 0
                    },
                    r = this._traverseMerkleTree(e, 0, t, !0);
                if (t.hashesUsed !== this.hashes.length) throw new h.MerkleBlock.InvalidMerkleTree;
                return r
            }, d.prototype._traverseMerkleTree = function(e, t, r, n) {
                (r = r || {}).txs = r.txs || [], r.flagBitsUsed = r.flagBitsUsed || 0, r.hashesUsed = r.hashesUsed || 0;
                n = n || !1;
                if (r.flagBitsUsed > 8 * this.flags.length) return null;
                var i = this.flags[r.flagBitsUsed >> 3] >>> (7 & r.flagBitsUsed++) & 1;
                if (0 !== e && i) {
                    var o = this._traverseMerkleTree(e - 1, 2 * t, r),
                        s = o;
                    return 2 * t + 1 < this._calcTreeWidth(e - 1) && (s = this._traverseMerkleTree(e - 1, 2 * t + 1, r)), n ? r.txs : u.sha256sha256(new Buffer.concat([o, s]))
                }
                if (r.hashesUsed >= this.hashes.length) return null;
                var a = this.hashes[r.hashesUsed++];
                return 0 === e && i && r.txs.push(a), Buffer.from(a, "hex")
            }, d.prototype._calcTreeWidth = function(e) {
                return this.numTransactions + (1 << e) - 1 >> e
            }, d.prototype._calcTreeHeight = function() {
                for (var e = 0; this._calcTreeWidth(e) > 1;) e++;
                return e
            }, d.prototype.hasTransaction = function(e) {
                c.checkArgument(!n.isUndefined(e), "tx cannot be undefined"), c.checkArgument(e instanceof f || "string" == typeof e, 'Invalid tx given, tx must be a "string" or "Transaction"');
                var t = e;
                e instanceof f && (t = o.reverse(Buffer.from(e.id, "hex")).toString("hex"));
                var r = [],
                    i = this._calcTreeHeight();
                return this._traverseMerkleTree(i, 0, {
                    txs: r
                }), -1 !== r.indexOf(t)
            }, d._fromBufferReader = function(e) {
                c.checkState(!e.finished(), "No merkleblock data received");
                var t = {};
                t.header = i.fromBufferReader(e), t.numTransactions = e.readUInt32LE();
                var r = e.readVarintNum();
                t.hashes = [];
                for (var n = 0; n < r; n++) t.hashes.push(e.read(32).toString("hex"));
                var o = e.readVarintNum();
                for (t.flags = [], n = 0; n < o; n++) t.flags.push(e.readUInt8());
                return t
            }, d.fromObject = function(e) {
                return new d(e)
            }, e.exports = d
        },
        2001: function(e, t, r) {
            "use strict";
            var n = r(72),
                i = r(12),
                o = r(53),
                s = r(70),
                a = r(134),
                u = r(659),
                f = r(518),
                h = r(135),
                c = r(352),
                Point = r(430),
                d = r(517),
                p = r(664),
                l = r(202),
                m = l.HDPrivateKey,
                g = r(87),
                y = r(112);

            function v(e) {
                if (e instanceof v) return e;
                if (!(this instanceof v)) return new v(e);
                if (!e) return this._generateRandomly();
                if (c.get(e)) return this._generateRandomly(e);
                if (o.isString(e) || g.isBuffer(e))
                    if (v.isValidSerialized(e)) this._buildFromSerialized(e);
                    else if (y.isValidJSON(e)) this._buildFromJSON(e);
                else {
                    if (!g.isBuffer(e) || !v.isValidSerialized(e.toString())) throw v.getSerializedError(e);
                    this._buildFromSerialized(e.toString())
                } else {
                    if (!o.isObject(e)) throw new m.UnrecognizedArgument(e);
                    this._buildFromObject(e)
                }
            }
            v.isValidPath = function(e, t) {
                if (o.isString(e)) {
                    var r = v._getDerivationIndexes(e);
                    return null !== r && o.every(r, v.isValidPath)
                }
                return !!o.isNumber(e) && (e < v.Hardened && !0 === t && (e += v.Hardened), e >= 0 && e < v.MaxIndex)
            }, v._getDerivationIndexes = function(e) {
                var t = e.split("/");
                if (o.includes(v.RootElementAlias, e)) return [];
                if (!o.includes(v.RootElementAlias, t[0])) return null;
                var r = t.slice(1).map((function(e) {
                    var t = "'" === e.slice(-1);
                    if (t && (e = e.slice(0, -1)), !e || "-" === e[0]) return NaN;
                    var r = +e;
                    return t && (r += v.Hardened), r
                }));
                return o.some(r, isNaN) ? null : r
            }, v.prototype.derive = function(e, t) {
                return this.deriveNonCompliantChild(e, t)
            }, v.prototype.deriveChild = function(e, t) {
                if (o.isNumber(e)) return this._deriveWithNumber(e, t);
                if (o.isString(e)) return this._deriveFromString(e);
                throw new m.InvalidDerivationArgument(e)
            }, v.prototype.deriveNonCompliantChild = function(e, t) {
                if (o.isNumber(e)) return this._deriveWithNumber(e, t, !0);
                if (o.isString(e)) return this._deriveFromString(e, !0);
                throw new m.InvalidDerivationArgument(e)
            }, v.prototype._deriveWithNumber = function(e, t, r) {
                if (!v.isValidPath(e, t)) throw new m.InvalidPath(e);
                t = e >= v.Hardened || t, e < v.Hardened && !0 === t && (e += v.Hardened);
                var i, o = g.integerAsBuffer(e);
                if (t && r) {
                    var s = this.privateKey.bn.toBuffer();
                    i = g.concat([Buffer.from([0]), s, o])
                } else if (t) {
                    var u = this.privateKey.bn.toBuffer({
                        size: 32
                    });
                    n(32 === u.length, "length of private key buffer is expected to be 32 bytes"), i = g.concat([Buffer.from([0]), u, o])
                } else i = g.concat([this.publicKey.toBuffer(), o]);
                var f = h.sha512hmac(i, this._buffers.chainCode),
                    c = a.fromBuffer(f.slice(0, 32), {
                        size: 32
                    }),
                    p = f.slice(32, 64),
                    l = c.add(this.privateKey.toBigNumber()).umod(Point.getN()).toBuffer({
                        size: 32
                    });
                return d.isValid(l) ? new v({
                    network: this.network,
                    depth: this.depth + 1,
                    parentFingerPrint: this.fingerPrint,
                    childIndex: e,
                    chainCode: p,
                    privateKey: l
                }) : this._deriveWithNumber(e + 1, null, r)
            }, v.prototype._deriveFromString = function(e, t) {
                if (!v.isValidPath(e)) throw new m.InvalidPath(e);
                return v._getDerivationIndexes(e).reduce((function(e, r) {
                    return e._deriveWithNumber(r, null, t)
                }), this)
            }, v.isValidSerialized = function(e, t) {
                return !v.getSerializedError(e, t)
            }, v.getSerializedError = function(e, t) {
                if (!o.isString(e) && !g.isBuffer(e)) return new m.UnrecognizedArgument("Expected string or buffer");
                if (!u.validCharacters(e)) return new l.InvalidB58Char("(unknown)", e);
                try {
                    e = f.decode(e)
                } catch (t) {
                    return new l.InvalidB58Checksum(e)
                }
                if (e.length !== v.DataLength) return new m.InvalidLength(e);
                if (!o.isUndefined(t)) {
                    var r = v._validateNetwork(e, t);
                    if (r) return r
                }
                return null
            }, v._validateNetwork = function(e, t) {
                var r = c.get(t);
                if (!r) return new l.InvalidNetworkArgument(t);
                var n = e.slice(0, 4);
                return g.integerFromBuffer(n) !== r.xprivkey ? new l.InvalidNetwork(n) : null
            }, v.fromString = function(e) {
                return s.checkArgument(o.isString(e), "No valid string was provided"), new v(e)
            }, v.fromObject = function(e) {
                return s.checkArgument(o.isObject(e), "No valid argument was provided"), new v(e)
            }, v.prototype._buildFromJSON = function(e) {
                return this._buildFromObject(JSON.parse(e))
            }, v.prototype._buildFromObject = function(e) {
                var t = {
                    version: e.network ? g.integerAsBuffer(c.get(e.network).xprivkey) : e.version,
                    depth: o.isNumber(e.depth) ? g.integerAsSingleByteBuffer(e.depth) : e.depth,
                    parentFingerPrint: o.isNumber(e.parentFingerPrint) ? g.integerAsBuffer(e.parentFingerPrint) : e.parentFingerPrint,
                    childIndex: o.isNumber(e.childIndex) ? g.integerAsBuffer(e.childIndex) : e.childIndex,
                    chainCode: o.isString(e.chainCode) ? Buffer.from(e.chainCode, "hex") : e.chainCode,
                    privateKey: o.isString(e.privateKey) && y.isHexa(e.privateKey) ? Buffer.from(e.privateKey, "hex") : e.privateKey,
                    checksum: e.checksum ? e.checksum.length ? e.checksum : g.integerAsBuffer(e.checksum) : void 0
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
                if (y.isHexaString(e) && (e = Buffer.from(e, "hex")), !Buffer.isBuffer(e)) throw new m.InvalidEntropyArgument(e);
                if (e.length < 16) throw new m.InvalidEntropyArgument.NotEnoughEntropy(e);
                if (e.length > 64) throw new m.InvalidEntropyArgument.TooMuchEntropy(e);
                var r = h.sha512hmac(e, Buffer.from("Bitcoin seed"));
                return new v({
                    network: c.get(t) || c.defaultNetwork,
                    depth: 0,
                    parentFingerPrint: 0,
                    childIndex: 0,
                    privateKey: r.slice(0, 32),
                    chainCode: r.slice(32, 64)
                })
            }, v.prototype._calcHDPublicKey = function() {
                if (!this._hdPublicKey) {
                    var e = r(2002);
                    this._hdPublicKey = new e(this)
                }
            }, v.prototype._buildFromBuffers = function(e) {
                v._validateBufferArguments(e), y.defineImmutable(this, {
                    _buffers: e
                });
                var t = [e.version, e.depth, e.parentFingerPrint, e.childIndex, e.chainCode, g.emptyBuffer(1), e.privateKey],
                    r = i.Buffer.concat(t);
                if (e.checksum && e.checksum.length) {
                    if (e.checksum.toString() !== f.checksum(r).toString()) throw new l.InvalidB58Checksum(r)
                } else e.checksum = f.checksum(r);
                var n, o = c.get(g.integerFromBuffer(e.version));
                n = f.encode(i.Buffer.concat(t)), e.xprivkey = Buffer.from(n);
                var s = new d(a.fromBuffer(e.privateKey), o),
                    u = s.toPublicKey(),
                    p = v.ParentFingerPrintSize,
                    m = h.sha256ripemd160(u.toBuffer()).slice(0, p);
                return y.defineImmutable(this, {
                    xprivkey: n,
                    network: o,
                    depth: g.integerFromSingleByteBuffer(e.depth),
                    privateKey: s,
                    publicKey: u,
                    fingerPrint: m
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
                    n(g.isBuffer(i), t + " argument is not a buffer"), n(i.length === r, t + " has not the expected size: found " + i.length + ", expected " + r)
                };
                t("version", v.VersionSize), t("depth", v.DepthSize), t("parentFingerPrint", v.ParentFingerPrintSize), t("childIndex", v.ChildIndexSize), t("chainCode", v.ChainCodeSize), t("privateKey", v.PrivateKeySize), e.checksum && e.checksum.length && t("checksum", v.CheckSumSize)
            }, v.prototype.toString = function() {
                return this.xprivkey
            }, v.prototype.inspect = function() {
                return "<HDPrivateKey: " + this.xprivkey + ">"
            }, v.prototype.toObject = v.prototype.toJSON = function() {
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
            }, v.fromBuffer = function(e) {
                return new v(e.toString())
            }, v.prototype.toBuffer = function() {
                return g.copy(this._buffers.xprivkey)
            }, v.DefaultDepth = 0, v.DefaultFingerprint = 0, v.DefaultChildIndex = 0, v.Hardened = 2147483648, v.MaxIndex = 2 * v.Hardened, v.RootElementAlias = ["m", "M", "m'", "M'"], v.VersionSize = 4, v.DepthSize = 1, v.ParentFingerPrintSize = 4, v.ChildIndexSize = 4, v.ChainCodeSize = 32, v.PrivateKeySize = 32, v.CheckSumSize = 4, v.DataLength = 78, v.SerializedByteSize = 82, v.VersionStart = 0, v.VersionEnd = v.VersionStart + v.VersionSize, v.DepthStart = v.VersionEnd, v.DepthEnd = v.DepthStart + v.DepthSize, v.ParentFingerPrintStart = v.DepthEnd, v.ParentFingerPrintEnd = v.ParentFingerPrintStart + v.ParentFingerPrintSize, v.ChildIndexStart = v.ParentFingerPrintEnd, v.ChildIndexEnd = v.ChildIndexStart + v.ChildIndexSize, v.ChainCodeStart = v.ChildIndexEnd, v.ChainCodeEnd = v.ChainCodeStart + v.ChainCodeSize, v.PrivateKeyStart = v.ChainCodeEnd + 1, v.PrivateKeyEnd = v.PrivateKeyStart + v.PrivateKeySize, v.ChecksumStart = v.PrivateKeyEnd, v.ChecksumEnd = v.ChecksumStart + v.CheckSumSize, n(v.ChecksumEnd === v.SerializedByteSize), e.exports = v
        },
        2002: function(e, t, r) {
            "use strict";
            var n = r(53),
                i = r(70),
                o = r(134),
                s = r(659),
                a = r(518),
                u = r(135),
                f = r(2001),
                h = r(352),
                Point = r(430),
                c = r(243),
                d = r(202),
                p = d,
                l = d.HDPublicKey,
                m = r(72),
                g = r(112),
                y = r(87);

            function v(e) {
                if (e instanceof v) return e;
                if (!(this instanceof v)) return new v(e);
                if (e) {
                    if (n.isString(e) || y.isBuffer(e)) {
                        var t = v.getSerializedError(e);
                        if (t) {
                            if (y.isBuffer(e) && !v.getSerializedError(e.toString())) return this._buildFromSerialized(e.toString());
                            if (t instanceof l.ArgumentIsPrivateExtended) return new f(e).hdPublicKey;
                            throw t
                        }
                        return this._buildFromSerialized(e)
                    }
                    if (n.isObject(e)) return e instanceof f ? this._buildFromPrivate(e) : this._buildFromObject(e);
                    throw new l.UnrecognizedArgument(e)
                }
                throw new l.MustSupplyArgument
            }
            v.isValidPath = function(e) {
                if (n.isString(e)) {
                    var t = f._getDerivationIndexes(e);
                    return null !== t && n.every(t, v.isValidPath)
                }
                return !!n.isNumber(e) && (e >= 0 && e < v.Hardened)
            }, v.prototype.derive = function(e, t) {
                return this.deriveChild(e, t)
            }, v.prototype.deriveChild = function(e, t) {
                if (n.isNumber(e)) return this._deriveWithNumber(e, t);
                if (n.isString(e)) return this._deriveFromString(e);
                throw new l.InvalidDerivationArgument(e)
            }, v.prototype._deriveWithNumber = function(e, t) {
                if (e >= v.Hardened || t) throw new l.InvalidIndexCantDeriveHardened;
                if (e < 0) throw new l.InvalidPath(e);
                var r, n = y.integerAsBuffer(e),
                    i = y.concat([this.publicKey.toBuffer(), n]),
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
                return new v({
                    network: this.network,
                    depth: this.depth + 1,
                    parentFingerPrint: this.fingerPrint,
                    childIndex: e,
                    chainCode: f,
                    publicKey: r
                })
            }, v.prototype._deriveFromString = function(e) {
                if (n.includes(e, "'")) throw new l.InvalidIndexCantDeriveHardened;
                if (!v.isValidPath(e)) throw new l.InvalidPath(e);
                return f._getDerivationIndexes(e).reduce((function(e, t) {
                    return e._deriveWithNumber(t)
                }), this)
            }, v.isValidSerialized = function(e, t) {
                return n.isNull(v.getSerializedError(e, t))
            }, v.getSerializedError = function(e, t) {
                if (!n.isString(e) && !y.isBuffer(e)) return new l.UnrecognizedArgument("expected buffer or string");
                if (!s.validCharacters(e)) return new p.InvalidB58Char("(unknown)", e);
                try {
                    e = a.decode(e)
                } catch (t) {
                    return new p.InvalidB58Checksum(e)
                }
                if (e.length !== v.DataSize) return new l.InvalidLength(e);
                if (!n.isUndefined(t)) {
                    var r = v._validateNetwork(e, t);
                    if (r) return r
                }
                var i = y.integerFromBuffer(e.slice(0, 4));
                return i === h.livenet.xprivkey || i === h.testnet.xprivkey ? new l.ArgumentIsPrivateExtended : null
            }, v._validateNetwork = function(e, t) {
                var r = h.get(t);
                if (!r) return new p.InvalidNetworkArgument(t);
                var n = e.slice(v.VersionStart, v.VersionEnd);
                return y.integerFromBuffer(n) !== r.xpubkey ? new p.InvalidNetwork(n) : null
            }, v.prototype._buildFromPrivate = function(e) {
                var t = n.clone(e._buffers),
                    r = Point.getG().mul(o.fromBuffer(t.privateKey));
                return t.publicKey = Point.pointToCompressed(r), t.version = y.integerAsBuffer(h.get(y.integerFromBuffer(t.version)).xpubkey), t.privateKey = void 0, t.checksum = void 0, t.xprivkey = void 0, this._buildFromBuffers(t)
            }, v.prototype._buildFromObject = function(e) {
                var t = {
                    version: e.network ? y.integerAsBuffer(h.get(e.network).xpubkey) : e.version,
                    depth: n.isNumber(e.depth) ? y.integerAsSingleByteBuffer(e.depth) : e.depth,
                    parentFingerPrint: n.isNumber(e.parentFingerPrint) ? y.integerAsBuffer(e.parentFingerPrint) : e.parentFingerPrint,
                    childIndex: n.isNumber(e.childIndex) ? y.integerAsBuffer(e.childIndex) : e.childIndex,
                    chainCode: n.isString(e.chainCode) ? Buffer.from(e.chainCode, "hex") : e.chainCode,
                    publicKey: n.isString(e.publicKey) ? Buffer.from(e.publicKey, "hex") : y.isBuffer(e.publicKey) ? e.publicKey : e.publicKey.toBuffer(),
                    checksum: n.isNumber(e.checksum) ? y.integerAsBuffer(e.checksum) : e.checksum
                };
                return this._buildFromBuffers(t)
            }, v.prototype._buildFromSerialized = function(e) {
                var t = a.decode(e),
                    r = {
                        version: t.slice(v.VersionStart, v.VersionEnd),
                        depth: t.slice(v.DepthStart, v.DepthEnd),
                        parentFingerPrint: t.slice(v.ParentFingerPrintStart, v.ParentFingerPrintEnd),
                        childIndex: t.slice(v.ChildIndexStart, v.ChildIndexEnd),
                        chainCode: t.slice(v.ChainCodeStart, v.ChainCodeEnd),
                        publicKey: t.slice(v.PublicKeyStart, v.PublicKeyEnd),
                        checksum: t.slice(v.ChecksumStart, v.ChecksumEnd),
                        xpubkey: e
                    };
                return this._buildFromBuffers(r)
            }, v.prototype._buildFromBuffers = function(e) {
                v._validateBufferArguments(e), g.defineImmutable(this, {
                    _buffers: e
                });
                var t = [e.version, e.depth, e.parentFingerPrint, e.childIndex, e.chainCode, e.publicKey],
                    r = y.concat(t),
                    n = a.checksum(r);
                if (e.checksum && e.checksum.length) {
                    if (e.checksum.toString("hex") !== n.toString("hex")) throw new p.InvalidB58Checksum(r, n)
                } else e.checksum = n;
                var i, o = h.get(y.integerFromBuffer(e.version));
                i = a.encode(y.concat(t)), e.xpubkey = Buffer.from(i);
                var s = new c(e.publicKey, {
                        network: o
                    }),
                    f = v.ParentFingerPrintSize,
                    d = u.sha256ripemd160(s.toBuffer()).slice(0, f);
                return g.defineImmutable(this, {
                    xpubkey: i,
                    network: o,
                    depth: y.integerFromSingleByteBuffer(e.depth),
                    publicKey: s,
                    fingerPrint: d
                }), this
            }, v._validateBufferArguments = function(e) {
                var t = function(t, r) {
                    var n = e[t];
                    m(y.isBuffer(n), t + " argument is not a buffer, it's " + typeof n), m(n.length === r, t + " has not the expected size: found " + n.length + ", expected " + r)
                };
                t("version", v.VersionSize), t("depth", v.DepthSize), t("parentFingerPrint", v.ParentFingerPrintSize), t("childIndex", v.ChildIndexSize), t("chainCode", v.ChainCodeSize), t("publicKey", v.PublicKeySize), e.checksum && e.checksum.length && t("checksum", v.CheckSumSize)
            }, v.fromString = function(e) {
                return i.checkArgument(n.isString(e), "No valid string was provided"), new v(e)
            }, v.fromObject = function(e) {
                return i.checkArgument(n.isObject(e), "No valid argument was provided"), new v(e)
            }, v.prototype.toString = function() {
                return this.xpubkey
            }, v.prototype.inspect = function() {
                return "<HDPublicKey: " + this.xpubkey + ">"
            }, v.prototype.toObject = v.prototype.toJSON = function() {
                return {
                    network: h.get(y.integerFromBuffer(this._buffers.version)).name,
                    depth: y.integerFromSingleByteBuffer(this._buffers.depth),
                    fingerPrint: y.integerFromBuffer(this.fingerPrint),
                    parentFingerPrint: y.integerFromBuffer(this._buffers.parentFingerPrint),
                    childIndex: y.integerFromBuffer(this._buffers.childIndex),
                    chainCode: y.bufferToHex(this._buffers.chainCode),
                    publicKey: this.publicKey.toString(),
                    checksum: y.integerFromBuffer(this._buffers.checksum),
                    xpubkey: this.xpubkey
                }
            }, v.fromBuffer = function(e) {
                return new v(e)
            }, v.prototype.toBuffer = function() {
                return y.copy(this._buffers.xpubkey)
            }, v.Hardened = 2147483648, v.RootElementAlias = ["m", "M"], v.VersionSize = 4, v.DepthSize = 1, v.ParentFingerPrintSize = 4, v.ChildIndexSize = 4, v.ChainCodeSize = 32, v.PublicKeySize = 33, v.CheckSumSize = 4, v.DataSize = 78, v.SerializedByteSize = 82, v.VersionStart = 0, v.VersionEnd = v.VersionStart + v.VersionSize, v.DepthStart = v.VersionEnd, v.DepthEnd = v.DepthStart + v.DepthSize, v.ParentFingerPrintStart = v.DepthEnd, v.ParentFingerPrintEnd = v.ParentFingerPrintStart + v.ParentFingerPrintSize, v.ChildIndexStart = v.ParentFingerPrintEnd, v.ChildIndexEnd = v.ChildIndexStart + v.ChildIndexSize, v.ChainCodeStart = v.ChildIndexEnd, v.ChainCodeEnd = v.ChainCodeStart + v.ChainCodeSize, v.PublicKeyStart = v.ChainCodeEnd, v.PublicKeyEnd = v.PublicKeyStart + v.PublicKeySize, v.ChecksumStart = v.PublicKeyEnd, v.ChecksumEnd = v.ChecksumStart + v.CheckSumSize, m(v.PublicKeyEnd === v.DataSize), m(v.ChecksumEnd === v.SerializedByteSize), e.exports = v
        },
        202: function(e, t, r) {
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
            var u, f = r(4069);
            u = a.Error, s(u, f), e.exports = a.Error, e.exports.extend = function(e) {
                return o(a.Error, e)
            }
        },
        244: function(e, t, r) {
            "use strict";
            var n = r(53),
                i = r(70),
                o = r(202),
                s = r(518),
                a = r(4070),
                u = r(352),
                f = r(135),
                h = r(112),
                c = r(243);

            function d(e, t, r, o) {
                if (!(this instanceof d)) return new d(e, t, r);
                if (n.isArray(e) && n.isNumber(t)) return d.createMultisig(e, t, r, !1, o);
                if (e instanceof d) return e;
                if (i.checkArgument(e, "First argument is required, please include address data.", "guide/address.html"), t && !u.get(t)) throw new TypeError('Second argument must be "livenet" or "testnet".');
                if (r && r !== d.PayToPublicKeyHash && r !== d.PayToScriptHash && r !== d.PayToWitnessPublicKeyHash && r !== d.PayToWitnessScriptHash && r !== d.PayToTaproot) throw new TypeError('Third argument must be "pubkeyhash", "scripthash", "witnesspubkeyhash", "witnessscripthash", or "taproot".');
                var s = this._classifyArguments(e, t, r);
                return s.network = s.network || u.get(t) || u.defaultNetwork, s.type = s.type || r || d.PayToPublicKeyHash, h.defineImmutable(this, {
                    hashBuffer: s.hashBuffer,
                    network: s.network,
                    type: s.type
                }), this
            }
            d.prototype._classifyArguments = function(e, t, r) {
                if (!(e instanceof Buffer || e instanceof Uint8Array) || 20 !== e.length && 32 !== e.length) {
                    if ((e instanceof Buffer || e instanceof Uint8Array) && e.length >= 21) return d._transformBuffer(e, t, r);
                    if (e instanceof c) return d._transformPublicKey(e, t, r);
                    if (e instanceof p) return d._transformScript(e, t);
                    if ("string" == typeof e) return d._transformString(e, t, r);
                    if (n.isObject(e)) return d._transformObject(e);
                    throw new TypeError("First argument is an unrecognized data format.")
                }
                return d._transformHash(e, t, r)
            }, d.PayToPublicKeyHash = "pubkeyhash", d.PayToScriptHash = "scripthash", d.PayToWitnessPublicKeyHash = "witnesspubkeyhash", d.PayToWitnessScriptHash = "witnessscripthash", d.PayToTaproot = "taproot", d._transformHash = function(e, t, r) {
                var n = {};
                if (!(e instanceof Buffer || e instanceof Uint8Array)) throw new TypeError("Address supplied is not a buffer.");
                if (20 !== e.length && 32 !== e.length) throw new TypeError("Address hashbuffers must be either 20 or 32 bytes.");
                return n.hashBuffer = e, n.network = u.get(t) || u.defaultNetwork, n.type = r, n
            }, d._transformObject = function(e) {
                return i.checkArgument(e.hash || e.hashBuffer, "Must provide a `hash` or `hashBuffer` property"), i.checkArgument(e.type, "Must provide a `type` property"), {
                    hashBuffer: e.hash ? Buffer.from(e.hash, "hex") : e.hashBuffer,
                    network: u.get(e.network) || u.defaultNetwork,
                    type: e.type
                }
            }, d._classifyFromVersion = function(e) {
                var t = {};
                if (e.length > 21) {
                    var r = a.decode(e.toString("utf8"));
                    if (0 !== r.version && 1 !== r.version) throw new TypeError("Only witness v0 and v1 addresses are supported.");
                    if (0 === r.version)
                        if (20 === r.data.length) t.type = d.PayToWitnessPublicKeyHash;
                        else {
                            if (32 !== r.data.length) throw new TypeError("Witness data must be either 20 or 32 bytes.");
                            t.type = d.PayToWitnessScriptHash
                        }
                    else if (1 === r.version) {
                        if (32 !== r.data.length) throw new TypeError("Witness data must be 32 bytes for v1");
                        t.type = d.PayToTaproot
                    }
                    t.network = u.get(r.prefix, "bech32prefix")
                } else {
                    var n = u.get(e[0], "pubkeyhash"),
                        i = u.get(e[0], "scripthash");
                    n ? (t.network = n, t.type = d.PayToPublicKeyHash) : i && (t.network = i, t.type = d.PayToScriptHash)
                }
                return t
            }, d._transformBuffer = function(e, t, r) {
                var n = {};
                if (!(e instanceof Buffer || e instanceof Uint8Array)) throw new TypeError("Address supplied is not a buffer.");
                if (e.length < 21) throw new TypeError("Address buffer is incorrect length.");
                var i = u.get(t),
                    o = d._classifyFromVersion(e);
                if (t && !i) throw new TypeError("Unknown network");
                if (!o.network || i && i.xpubkey !== o.network.xpubkey) throw new TypeError("Address has mismatched network type.");
                if (!o.type || r && r !== o.type) throw new TypeError("Address has mismatched type.");
                return e.length > 21 ? n.hashBuffer = a.decode(e.toString("utf8")).data : n.hashBuffer = e.slice(1), n.network = o.network, n.type = o.type, n
            }, d._transformPublicKey = function(e, t, r) {
                var n = {};
                if (!(e instanceof c)) throw new TypeError("Address must be an instance of PublicKey.");
                if (r && r !== d.PayToScriptHash && r !== d.PayToWitnessPublicKeyHash && r !== d.PayToPublicKeyHash && r !== d.PayToTaproot) throw new TypeError("Type must be either pubkeyhash, witnesspubkeyhash, scripthash, or taproot to transform public key.");
                if (!e.compressed && (r === d.PayToScriptHash || r === d.PayToWitnessPublicKeyHash)) throw new TypeError("Witness addresses must use compressed public keys.");
                return r === d.PayToScriptHash ? n.hashBuffer = f.sha256ripemd160(p.buildWitnessV0Out(e).toBuffer()) : r === d.PayToTaproot ? n.hashBuffer = f.sha256ripemd160(p.buildWitnessV1Out(e).toBuffer()) : n.hashBuffer = f.sha256ripemd160(e.toBuffer()), n.type = r || d.PayToPublicKeyHash, n
            }, d._transformScript = function(e, t) {
                i.checkArgument(e instanceof p, "script must be a Script instance");
                var r = e.getAddressInfo(t);
                if (!r) throw new o.Script.CantDeriveAddress(e);
                return r
            }, d.createMultisig = function(e, t, r, i, o) {
                if (r = r || e[0].network || u.defaultNetwork, o && o !== d.PayToScriptHash && o !== d.PayToWitnessScriptHash) throw new TypeError("Type must be either scripthash or witnessscripthash to create multisig.");
                if (i || o === d.PayToWitnessScriptHash) {
                    e = n.map(e, c);
                    for (var s = 0; s < e.length; s++)
                        if (!e[s].compressed) throw new TypeError("Witness addresses must use compressed public keys.")
                }
                var a = p.buildMultisigOut(e, t);
                return i ? d.payingTo(p.buildWitnessMultisigOutFromScript(a), r) : d.payingTo(a, r, o)
            }, d._transformString = function(e, t, r) {
                if ("string" != typeof e) throw new TypeError("data parameter supplied is not a string.");
                if (e.length > 100) throw new TypeError("address string is too long");
                if (t && !u.get(t)) throw new TypeError("Unknown network");
                e = e.trim();
                try {
                    return d._transformBuffer(Buffer.from(e, "utf8"), t, r)
                } catch (e) {
                    if (r === d.PayToWitnessPublicKeyHash || r === d.PayToWitnessScriptHash || r === d.PayToTaproot) throw e
                }
                var n = s.decode(e);
                return d._transformBuffer(n, t, r)
            }, d.fromPublicKey = function(e, t, r) {
                var n = d._transformPublicKey(e, t, r);
                return t = t || u.defaultNetwork, new d(n.hashBuffer, t, n.type)
            }, d.fromPublicKeyHash = function(e, t) {
                var r = d._transformHash(e);
                return new d(r.hashBuffer, t, d.PayToPublicKeyHash)
            }, d.fromScriptHash = function(e, t, r) {
                i.checkArgument(e, "hash parameter is required");
                var n = d._transformHash(e);
                if (r === d.PayToWitnessScriptHash && 32 !== e.length) throw new TypeError("Address hashbuffer must be exactly 32 bytes for v0 witness script hash.");
                r = r || d.PayToScriptHash;
                return new d(n.hashBuffer, t, r)
            }, d.payingTo = function(e, t, r) {
                var n;
                i.checkArgument(e, "script is required"), i.checkArgument(e instanceof p, "script must be instance of Script"), n = r === d.PayToWitnessScriptHash ? f.sha256(e.toBuffer()) : f.sha256ripemd160(e.toBuffer());
                r = r || d.PayToScriptHash;
                return d.fromScriptHash(n, t, r)
            }, d.fromScript = function(e, t) {
                i.checkArgument(e instanceof p, "script must be a Script instance");
                var r = d._transformScript(e, t);
                return new d(r.hashBuffer, t, r.type)
            }, d.fromBuffer = function(e, t, r) {
                var n = d._transformBuffer(e, t, r);
                return new d(n.hashBuffer, n.network, n.type)
            }, d.fromString = function(e, t, r) {
                var n = d._transformString(e, t, r);
                return new d(n.hashBuffer, n.network, n.type)
            }, d.fromObject = function(e) {
                return i.checkState(h.isHexa(e.hash), 'Unexpected hash property, "' + e.hash + '", expected to be hex.'), new d(Buffer.from(e.hash, "hex"), e.network, e.type)
            }, d.getValidationError = function(e, t, r) {
                var n;
                try {
                    new d(e, t, r)
                } catch (e) {
                    n = e
                }
                return n
            }, d.isValid = function(e, t, r) {
                return !d.getValidationError(e, t, r)
            }, d.prototype.isPayToPublicKeyHash = function() {
                return this.type === d.PayToPublicKeyHash
            }, d.prototype.isPayToScriptHash = function() {
                return this.type === d.PayToScriptHash
            }, d.prototype.isPayToWitnessPublicKeyHash = function() {
                return this.type === d.PayToWitnessPublicKeyHash
            }, d.prototype.isPayToWitnessScriptHash = function() {
                return this.type === d.PayToWitnessScriptHash
            }, d.prototype.isPayToTaproot = function() {
                return this.type === d.PayToTaproot
            }, d.prototype.toBuffer = function() {
                if (this.isPayToWitnessPublicKeyHash() || this.isPayToWitnessScriptHash()) return Buffer.from(this.toString(), "utf8");
                var e = Buffer.from([this.network[this.type]]);
                return Buffer.concat([e, this.hashBuffer])
            }, d.prototype.toObject = d.prototype.toJSON = function() {
                return {
                    hash: this.hashBuffer.toString("hex"),
                    type: this.type,
                    network: this.network.toString()
                }
            }, d.prototype.toString = function() {
                if (this.isPayToWitnessPublicKeyHash() || this.isPayToWitnessScriptHash() || this.isPayToTaproot()) {
                    let e = this.network.bech32prefix,
                        t = 0,
                        r = a.encodings.BECH32;
                    return this.isPayToTaproot() && (t = 1, r = a.encodings.BECH32M), a.encode(e, t, this.hashBuffer, r)
                }
                return s.encode(this.toBuffer())
            }, d.prototype.inspect = function() {
                return "<Address: " + this.toString() + ", type: " + this.type + ", network: " + this.network + ">"
            }, e.exports = d;
            var p = r(183)
        },
        269: function(e, t, r) {
            "use strict";
            var n = r(53),
                i = r(70),
                o = r(87),
                s = r(134),
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
                return !this.buf || this.pos >= this.buf.length
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
        352: function(e, t, r) {
            "use strict";
            var n = r(53),
                i = r(87),
                o = r(112),
                s = [],
                a = {};

            function u() {}

            function f(e, t) {
                if (~s.indexOf(e)) return e;
                if (!t) return a[e] && a[e].length >= 1 ? a[e][0] : a[e];
                n.isArray(t) || (t = [t]);
                var r = function(t) {
                    return s[i][t] === e
                };
                for (var i in s)
                    if (n.some(t, r)) return s[i]
            }

            function h(e) {
                var t = new u;
                return o.defineImmutable(t, {
                    name: e.name,
                    alias: e.alias,
                    pubkeyhash: e.pubkeyhash,
                    privatekey: e.privatekey,
                    scripthash: e.scripthash,
                    bech32prefix: e.bech32prefix,
                    xpubkey: e.xpubkey,
                    xprivkey: e.xprivkey
                }), e.networkMagic && o.defineImmutable(t, {
                    networkMagic: i.integerAsBuffer(e.networkMagic)
                }), e.port && o.defineImmutable(t, {
                    port: e.port
                }), e.dnsSeeds && o.defineImmutable(t, {
                    dnsSeeds: e.dnsSeeds
                }), n.each(t, (function(e) {
                    n.isUndefined(e) || n.isObject(e) || (a[e] || (a[e] = []), a[e].push(t))
                })), s.push(t), t
            }
            u.prototype.toString = function() {
                return this.name
            }, h({
                name: "livenet",
                alias: "mainnet",
                pubkeyhash: 0,
                privatekey: 128,
                scripthash: 5,
                bech32prefix: "bc",
                xpubkey: 76067358,
                xprivkey: 76066276,
                networkMagic: 4190024921,
                port: 8333,
                dnsSeeds: ["seed.bitcoin.sipa.be", "dnsseed.bluematt.me", "dnsseed.bitcoin.dashjr.org", "seed.bitcoinstats.com", "seed.bitnodes.io", "bitseed.xf2.org"]
            });
            var c = f("livenet");
            h({
                name: "testnet",
                alias: "test",
                pubkeyhash: 111,
                privatekey: 239,
                scripthash: 196,
                bech32prefix: "tb",
                xpubkey: 70617039,
                xprivkey: 70615956,
                networkMagic: 185665799,
                port: 18333,
                dnsSeeds: ["testnet-seed.bitcoin.petertodd.org", "testnet-seed.bluematt.me", "testnet-seed.alexykot.me", "testnet-seed.bitcoin.schildbach.de"]
            });
            var d = f("testnet");
            h({
                name: "regtest",
                alias: "dev",
                pubkeyhash: 111,
                privatekey: 239,
                scripthash: 196,
                bech32prefix: "bcrt",
                xpubkey: 70617039,
                xprivkey: 70615956,
                networkMagic: 4206867930,
                port: 18444,
                dnsSeeds: []
            });
            var p = f("regtest");
            e.exports = {
                add: h,
                remove: function(e) {
                    "object" != typeof e && (e = f(e));
                    for (var t = 0; t < s.length; t++) s[t] === e && s.splice(t, 1);
                    for (var r in a)
                        if (a[r].length) {
                            const t = a[r].indexOf(e);
                            t >= 0 && a[r].splice(t, 1), 0 === a[r].length && delete a[r]
                        } else a[r] === e && delete a[r]
                },
                defaultNetwork: c,
                livenet: c,
                mainnet: c,
                testnet: d,
                regtest: p,
                get: f,
                enableRegtest: function() {
                    d.regtestEnabled = !0
                },
                disableRegtest: function() {
                    d.regtestEnabled = !1
                }
            }
        },
        4069: function(e, t, r) {
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
                name: "MerkleBlock",
                message: "Internal Error on MerkleBlock {0}",
                errors: [{
                    name: "InvalidMerkleTree",
                    message: "This MerkleBlock contain an invalid Merkle Tree"
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
                    }, {
                        name: "BlockHeightOutOfRange",
                        message: "Block Height can only be between 0 and 65535"
                    }, {
                        name: "LockTimeRange",
                        message: "Seconds needs to be more that 0 and less that 33553920"
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
        4070: function(e, t, r) {
            "use strict";
            var n = r(4071);
            const i = {
                BECH32: 1,
                BECH32M: 2
            };
            e.exports = {
                decode: function(e) {
                    if ("string" != typeof e) throw new Error("Input should be a string");
                    var t;
                    let r = n.bech32.fromWords,
                        o = i.BECH32;
                    try {
                        t = n.bech32.decode(e)
                    } catch (s) {
                        if (!(s.message.indexOf("Invalid checksum") > -1)) throw s;
                        t = n.bech32m.decode(e), o = i.BECH32M, r = n.bech32m.fromWords
                    }
                    const s = t.words[0];
                    if (s >= 1 && o !== i.BECH32M) throw new Error("Version 1+ witness address must use Bech32m checksum");
                    return {
                        prefix: t.prefix,
                        data: Buffer.from(r(t.words.slice(1))),
                        version: s
                    }
                },
                encode: function(e, t, r, o) {
                    if ("string" != typeof e) throw new Error("Prefix should be a string");
                    if ("number" != typeof t) throw new Error("version should be a number");
                    if (o && "string" == typeof o && (o = i[o.toUpperCase()] || -1), o && o != i.BECH32 && o != i.BECH32M) throw new Error("Invalid encoding specified");
                    let s = o == i.BECH32M ? n.bech32m : n.bech32,
                        a = s.toWords(r);
                    return a.unshift(t), s.encode(e, a)
                },
                encodings: i
            }
        },
        4083: function(e, t, r) {
            "use strict";
            var n = r(167),
                i = r(269),
                o = r(134),
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
        4084: function(e, t, r) {
            e.exports = r(4085), e.exports.BlockHeader = r(665), e.exports.MerkleBlock = r(2e3)
        },
        4085: function(e, t, r) {
            "use strict";
            var n = r(53),
                i = r(665),
                o = r(134),
                s = r(87),
                a = r(269),
                u = r(167),
                f = r(135),
                h = r(660),
                c = r(70);

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
                NULL_HASH: Buffer.from("0000000000000000000000000000000000000000000000000000000000000000", "hex")
            }, e.exports = Block
        },
        4086: function(e, t, r) {
            "use strict";
            var n = r(53),
                i = r(517),
                o = r(243),
                s = r(244),
                a = r(167),
                u = r(658),
                f = r(182),
                h = r(135).sha256sha256,
                c = r(112),
                d = r(70);

            function p(e) {
                return this instanceof p ? (d.checkArgument(n.isString(e), "First argument should be a string"), this.message = e, this) : new p(e)
            }
            p.MAGIC_BYTES = Buffer.from("Bitcoin Signed Message:\n"), p.prototype.magicHash = function() {
                var e = a.varintBufNum(p.MAGIC_BYTES.length),
                    t = Buffer.from(this.message),
                    r = a.varintBufNum(t.length),
                    n = Buffer.concat([e, p.MAGIC_BYTES, r, t]);
                return h(n)
            }, p.prototype._sign = function(e) {
                d.checkArgument(e instanceof i, "First argument should be an instance of PrivateKey");
                var t = this.magicHash(),
                    r = new u;
                return r.hashbuf = t, r.privkey = e, r.pubkey = e.toPublicKey(), r.signRandomK(), r.calci(), r.sig
            }, p.prototype.sign = function(e) {
                return this._sign(e).toCompact().toString("base64")
            }, p.prototype._verify = function(e, t) {
                d.checkArgument(e instanceof o, "First argument should be an instance of PublicKey"), d.checkArgument(t instanceof f, "Second argument should be an instance of Signature");
                var r = this.magicHash(),
                    n = u.verify(r, t, e);
                return n || (this.error = "The signature was invalid"), n
            }, p.prototype.verify = function(e, t) {
                d.checkArgument(e), d.checkArgument(t && n.isString(t)), n.isString(e) && (e = s.fromString(e));
                var r = f.fromCompact(Buffer.from(t, "base64")),
                    i = new u;
                i.hashbuf = this.magicHash(), i.sig = r;
                var o = i.toPublicKey(),
                    a = s.fromPublicKey(o, e.network);
                return e.toString() !== a.toString() ? (this.error = "The signature did not match the message digest", !1) : this._verify(o, r)
            }, p.prototype.recoverPublicKey = function(e, t) {
                d.checkArgument(e), d.checkArgument(t && n.isString(t)), n.isString(e) && (e = s.fromString(e));
                var r = f.fromCompact(Buffer.from(t, "base64")),
                    i = new u;
                i.hashbuf = this.magicHash(), i.sig = r;
                var o = i.toPublicKey(),
                    a = s.fromPublicKey(o, e.network);
                return e.toString() !== a.toString() && (this.error = "The signature did not match the message digest"), o.toString()
            }, p.fromString = function(e) {
                return new p(e)
            }, p.fromJSON = function(e) {
                return c.isValidJSON(e) && (e = JSON.parse(e)), new p(e.message)
            }, p.prototype.toObject = function() {
                return {
                    message: this.message
                }
            }, p.prototype.toJSON = function() {
                return JSON.stringify(this.toObject())
            }, p.prototype.toString = function() {
                return this.message
            }, p.prototype.inspect = function() {
                return "<Message: " + this.toString() + ">"
            }, e.exports = p;
            r(183)
        },
        430: function(e, t, r) {
            "use strict";
            var n = r(134),
                i = r(87),
                o = new(0, r(85).ec)("secp256k1"),
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
            }, Point.prototype._getX = Point.prototype.getX, Point.prototype.getX = function() {
                return new n(this._getX().toArray())
            }, Point.prototype._getY = Point.prototype.getY, Point.prototype.getY = function() {
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
        518: function(e, t, r) {
            "use strict";
            var n = r(53),
                i = r(659),
                o = (r(12), r(135).sha256sha256),
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
        658: function(e, t, r) {
            "use strict";
            var n = r(134),
                Point = r(430),
                i = r(182),
                o = r(243),
                s = r(664),
                a = r(135),
                u = r(87),
                f = r(53),
                h = r(70),
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
                var t = Buffer.alloc(32);
                t.fill(1);
                var r = Buffer.alloc(32);
                r.fill(0);
                var i = this.privkey.bn.toBuffer({
                        size: 32
                    }),
                    o = "little" === this.endian ? u.reverse(this.hashbuf) : this.hashbuf;
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
                    u = Point.getN(),
                    f = Point.getG(),
                    c = a ? r.add(u) : r,
                    d = Point.fromX(s, c);
                if (!d.mul(u).isInfinity()) throw new Error("nR is not a valid curve point");
                var p = t.neg().umod(u),
                    l = r.invm(u),
                    m = d.mul(i).add(f.mul(p)).mul(l);
                return o.fromPoint(m, this.sig.compressed)
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
                    s = o.mul(r).umod(i),
                    a = o.mul(e).umod(i),
                    f = Point.getG().mulAdd(s, this.pubkey.point, a);
                return f.isInfinity() ? "p is infinity" : 0 !== f.getX().umod(i).cmp(e) && "Invalid signature"
            }, c.toLowS = function(e) {
                return e.gt(n.fromBuffer(Buffer.from("7FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF5D576E7357A4501DDFE92F46681B20A0", "hex"))) && (e = Point.getN().sub(e)), e
            }, c.prototype._findSignature = function(e, t) {
                var r, i, o, s = Point.getN(),
                    a = Point.getG(),
                    u = 0;
                do {
                    (!this.k || u > 0) && this.deterministicK(u), u++, r = this.k, i = a.mul(r).x.umod(s), o = r.invm(s).mul(t.add(e.mul(i))).umod(s)
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
        659: function(e, t, r) {
            "use strict";
            var n = r(53),
                i = r(84),
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
                return o.Buffer.isBuffer(e) && (e = e.toString()), n.every(n.map(e, (function(e) {
                    return n.includes(s, e)
                })))
            }, a.prototype.set = function(e) {
                return this.buf = e.buf || this.buf || void 0, this
            }, a.encode = function(e) {
                if (!o.Buffer.isBuffer(e)) throw new Error("Input should be a buffer");
                return i.encode(e)
            }, a.decode = function(e) {
                if ("string" != typeof e) throw new Error("Input should be a string");
                return Buffer.from(i.decode(e))
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
        664: function(e, t, r) {
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
        665: function(e, t, r) {
            "use strict";
            var n = r(53),
                i = r(134),
                o = r(87),
                s = r(269),
                a = r(167),
                u = r(135),
                f = (r(112), r(70)),
                h = function e(t) {
                    if (!(this instanceof e)) return new e(t);
                    var r = e._from(t);
                    return this.version = r.version, this.prevHash = r.prevHash, this.merkleRoot = r.merkleRoot, this.time = r.time, this.timestamp = r.time, this.bits = r.bits, this.nonce = r.nonce, r.hash && f.checkState(this.hash === r.hash, "Argument object hash property does not match block hash."), this
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
            }, h.prototype.inspect = function() {
                return "<BlockHeader " + this.id + ">"
            }, h.Constants = {
                START_OF_HEADER: 8,
                MAX_TIME_OFFSET: 7200,
                LARGEST_HASH: new i("10000000000000000000000000000000000000000000000000000000000000000", "hex")
            }, e.exports = h
        }
    }
]);