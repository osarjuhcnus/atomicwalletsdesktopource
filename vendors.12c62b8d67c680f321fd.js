(window.webpackJsonp = window.webpackJsonp || []).push([
    [200], {
        1128: function(e, t, r) {
            var n = r(21).Buffer,
                i = r(431),
                s = r(123),
                o = r(2009),
                u = r(139),
                a = r(47),
                c = r(148),
                p = r(369);

            function h(e) {
                var t = e.length;
                return p.encodingLength(t) + t
            }

            function f() {
                this.version = 1, this.locktime = 0, this.ins = [], this.outs = []
            }
            f.DEFAULT_SEQUENCE = 4294967295, f.SIGHASH_ALL = 1, f.SIGHASH_NONE = 2, f.SIGHASH_SINGLE = 3, f.SIGHASH_ANYONECANPAY = 128, f.ADVANCED_TRANSACTION_MARKER = 0, f.ADVANCED_TRANSACTION_FLAG = 1;
            var l = n.allocUnsafe(0),
                d = [],
                w = n.from("0000000000000000000000000000000000000000000000000000000000000000", "hex"),
                y = n.from("0000000000000000000000000000000000000000000000000000000000000001", "hex"),
                m = n.from("ffffffffffffffff", "hex"),
                g = {
                    script: l,
                    valueBuffer: m
                };
            f.fromBuffer = function(e, t) {
                var r = 0;

                function n(t) {
                    return r += t, e.slice(r - t, r)
                }

                function i() {
                    var t = e.readUInt32LE(r);
                    return r += 4, t
                }

                function s() {
                    var t = o.readUInt64LE(e, r);
                    return r += 8, t
                }

                function u() {
                    var t = p.decode(e, r);
                    return r += p.decode.bytes, t
                }

                function a() {
                    return n(u())
                }

                function c() {
                    for (var e = u(), t = [], r = 0; r < e; r++) t.push(a());
                    return t
                }
                var h = new f;
                h.version = function() {
                    var t = e.readInt32LE(r);
                    return r += 4, t
                }();
                var l = e.readUInt8(r),
                    w = e.readUInt8(r + 1),
                    y = !1;
                l === f.ADVANCED_TRANSACTION_MARKER && w === f.ADVANCED_TRANSACTION_FLAG && (r += 2, y = !0);
                for (var m = u(), g = 0; g < m; ++g) h.ins.push({
                    hash: n(32),
                    index: i(),
                    script: a(),
                    sequence: i(),
                    witness: d
                });
                var S = u();
                for (g = 0; g < S; ++g) h.outs.push({
                    value: s(),
                    script: a()
                });
                if (y) {
                    for (g = 0; g < m; ++g) h.ins[g].witness = c();
                    if (!h.hasWitnesses()) throw new Error("Transaction has superfluous witness data")
                }
                if (h.locktime = i(), t) return h;
                if (r !== e.length) throw new Error("Transaction has unexpected data");
                return h
            }, f.fromHex = function(e) {
                return f.fromBuffer(n.from(e, "hex"))
            }, f.isCoinbaseHash = function(e) {
                a(c.Hash256bit, e);
                for (var t = 0; t < 32; ++t)
                    if (0 !== e[t]) return !1;
                return !0
            }, f.prototype.isCoinbase = function() {
                return 1 === this.ins.length && f.isCoinbaseHash(this.ins[0].hash)
            }, f.prototype.addInput = function(e, t, r, n) {
                return a(c.tuple(c.Hash256bit, c.UInt32, c.maybe(c.UInt32), c.maybe(c.Buffer)), arguments), c.Null(r) && (r = f.DEFAULT_SEQUENCE), this.ins.push({
                    hash: e,
                    index: t,
                    script: n || l,
                    sequence: r,
                    witness: d
                }) - 1
            }, f.prototype.addOutput = function(e, t) {
                return a(c.tuple(c.Buffer, c.Satoshi), arguments), this.outs.push({
                    script: e,
                    value: t
                }) - 1
            }, f.prototype.hasWitnesses = function() {
                return this.ins.some((function(e) {
                    return 0 !== e.witness.length
                }))
            }, f.prototype.weight = function() {
                return 3 * this.__byteLength(!1) + this.__byteLength(!0)
            }, f.prototype.virtualSize = function() {
                return Math.ceil(this.weight() / 4)
            }, f.prototype.byteLength = function() {
                return this.__byteLength(!0)
            }, f.prototype.__byteLength = function(e) {
                var t = e && this.hasWitnesses();
                return (t ? 10 : 8) + p.encodingLength(this.ins.length) + p.encodingLength(this.outs.length) + this.ins.reduce((function(e, t) {
                    return e + 40 + h(t.script)
                }), 0) + this.outs.reduce((function(e, t) {
                    return e + 8 + h(t.script)
                }), 0) + (t ? this.ins.reduce((function(e, t) {
                    return e + (r = t.witness, n = r.length, p.encodingLength(n) + r.reduce((function(e, t) {
                        return e + h(t)
                    }), 0));
                    var r, n
                }), 0) : 0)
            }, f.prototype.clone = function() {
                var e = new f;
                return e.version = this.version, e.locktime = this.locktime, e.ins = this.ins.map((function(e) {
                    return {
                        hash: e.hash,
                        index: e.index,
                        script: e.script,
                        sequence: e.sequence,
                        witness: e.witness
                    }
                })), e.outs = this.outs.map((function(e) {
                    return {
                        script: e.script,
                        value: e.value
                    }
                })), e
            }, f.prototype.hashForSignature = function(e, t, r) {
                if (a(c.tuple(c.UInt32, c.Buffer, c.Number), arguments), e >= this.ins.length) return y;
                var o = s.compile(s.decompile(t).filter((function(e) {
                        return e !== u.OP_CODESEPARATOR
                    }))),
                    p = this.clone();
                if ((31 & r) === f.SIGHASH_NONE) p.outs = [], p.ins.forEach((function(t, r) {
                    r !== e && (t.sequence = 0)
                }));
                else if ((31 & r) === f.SIGHASH_SINGLE) {
                    if (e >= this.outs.length) return y;
                    p.outs.length = e + 1;
                    for (var h = 0; h < e; h++) p.outs[h] = g;
                    p.ins.forEach((function(t, r) {
                        r !== e && (t.sequence = 0)
                    }))
                }
                r & f.SIGHASH_ANYONECANPAY ? (p.ins = [p.ins[e]], p.ins[0].script = o) : (p.ins.forEach((function(e) {
                    e.script = l
                })), p.ins[e].script = o);
                var d = n.allocUnsafe(p.__byteLength(!1) + 4);
                return d.writeInt32LE(r, d.length - 4), p.__toBuffer(d, 0, !1), i.hash256(d)
            }, f.prototype.hashForWitnessV0 = function(e, t, r, s) {
                var u, l;

                function d(e) {
                    l += e.copy(u, l)
                }

                function y(e) {
                    l = u.writeUInt32LE(e, l)
                }

                function m(e) {
                    l = o.writeUInt64LE(u, e, l)
                }

                function g(e) {
                    p.encode(e, u, l), l += p.encode.bytes
                }

                function S(e) {
                    g(e.length), d(e)
                }
                a(c.tuple(c.UInt32, c.Buffer, c.Satoshi, c.UInt32), arguments);
                var v = w,
                    _ = w,
                    b = w;
                if (s & f.SIGHASH_ANYONECANPAY || (u = n.allocUnsafe(36 * this.ins.length), l = 0, this.ins.forEach((function(e) {
                        d(e.hash), y(e.index)
                    })), _ = i.hash256(u)), s & f.SIGHASH_ANYONECANPAY || (31 & s) === f.SIGHASH_SINGLE || (31 & s) === f.SIGHASH_NONE || (u = n.allocUnsafe(4 * this.ins.length), l = 0, this.ins.forEach((function(e) {
                        y(e.sequence)
                    })), b = i.hash256(u)), (31 & s) !== f.SIGHASH_SINGLE && (31 & s) !== f.SIGHASH_NONE) {
                    var E = this.outs.reduce((function(e, t) {
                        return e + 8 + h(t.script)
                    }), 0);
                    u = n.allocUnsafe(E), l = 0, this.outs.forEach((function(e) {
                        m(e.value), S(e.script)
                    })), v = i.hash256(u)
                } else if ((31 & s) === f.SIGHASH_SINGLE && e < this.outs.length) {
                    var P = this.outs[e];
                    u = n.allocUnsafe(8 + h(P.script)), l = 0, m(P.value), S(P.script), v = i.hash256(u)
                }
                u = n.allocUnsafe(156 + h(t)), l = 0;
                var O = this.ins[e];
                return y(this.version), d(_), d(b), d(O.hash), y(O.index), S(t), m(r), y(O.sequence), d(v), y(this.locktime), y(s), i.hash256(u)
            }, f.prototype.getHash = function() {
                return i.hash256(this.__toBuffer(void 0, void 0, !1))
            }, f.prototype.getId = function() {
                return this.getHash().reverse().toString("hex")
            }, f.prototype.toBuffer = function(e, t) {
                return this.__toBuffer(e, t, !0)
            }, f.prototype.__toBuffer = function(e, t, r) {
                e || (e = n.allocUnsafe(this.__byteLength(r)));
                var i, s = t || 0;

                function u(t) {
                    s += t.copy(e, s)
                }

                function a(t) {
                    s = e.writeUInt8(t, s)
                }

                function c(t) {
                    s = e.writeUInt32LE(t, s)
                }

                function h(t) {
                    p.encode(t, e, s), s += p.encode.bytes
                }

                function l(e) {
                    h(e.length), u(e)
                }
                i = this.version, s = e.writeInt32LE(i, s);
                var d = r && this.hasWitnesses();
                return d && (a(f.ADVANCED_TRANSACTION_MARKER), a(f.ADVANCED_TRANSACTION_FLAG)), h(this.ins.length), this.ins.forEach((function(e) {
                    u(e.hash), c(e.index), l(e.script), c(e.sequence)
                })), h(this.outs.length), this.outs.forEach((function(t) {
                    t.valueBuffer ? u(t.valueBuffer) : function(t) {
                        s = o.writeUInt64LE(e, t, s)
                    }(t.value), l(t.script)
                })), d && this.ins.forEach((function(e) {
                    var t;
                    h((t = e.witness).length), t.forEach(l)
                })), c(this.locktime), void 0 !== t ? e.slice(t, s) : e
            }, f.prototype.toHex = function() {
                return this.toBuffer().toString("hex")
            }, f.prototype.setInputScript = function(e, t) {
                a(c.tuple(c.Number, c.Buffer), arguments), this.ins[e].script = t
            }, f.prototype.setWitness = function(e, t) {
                a(c.tuple(c.Number, [c.Buffer]), arguments), this.ins[e].witness = t
            }, e.exports = f
        },
        1129: function(e, t, r) {
            var n = r(1130),
                i = r(431),
                s = r(4148),
                o = r(125),
                u = r(47),
                a = r(148),
                c = r(281),
                p = r(523),
                BigInteger = r(109),
                h = r(280),
                f = s.__curve;

            function ECPair(e, t, r) {
                if (r && u({
                        compressed: a.maybe(a.Boolean),
                        network: a.maybe(a.Network)
                    }, r), r = r || {}, e) {
                    if (e.signum() <= 0) throw new Error("Private key must be greater than 0");
                    if (e.compareTo(f.n) >= 0) throw new Error("Private key must be less than the curve order");
                    if (t) throw new TypeError("Unexpected publicKey parameter");
                    this.d = e
                } else u(a.ECPoint, t), this.__Q = t;
                this.compressed = void 0 === r.compressed || r.compressed, this.network = r.network || p.bitcoin
            }
            Object.defineProperty(ECPair.prototype, "Q", {
                get: function() {
                    return !this.__Q && this.d && (this.__Q = f.G.multiply(this.d)), this.__Q
                }
            }), ECPair.fromPublicKeyBuffer = function(e, t) {
                var r = h.Point.decodeFrom(f, e);
                return new ECPair(null, r, {
                    compressed: r.compressed,
                    network: t
                })
            }, ECPair.fromWIF = function(e, t) {
                var r = c.decode(e),
                    n = r.version;
                if (a.Array(t)) {
                    if (!(t = t.filter((function(e) {
                            return n === e.wif
                        })).pop())) throw new Error("Unknown network version")
                } else if (t = t || p.bitcoin, n !== t.wif) throw new Error("Invalid network version");
                return new ECPair(BigInteger.fromBuffer(r.privateKey), null, {
                    compressed: r.compressed,
                    network: t
                })
            }, ECPair.makeRandom = function(e) {
                var t, r = (e = e || {}).rng || o;
                do {
                    var n = r(32);
                    u(a.Buffer256bit, n), t = BigInteger.fromBuffer(n)
                } while (t.signum() <= 0 || t.compareTo(f.n) >= 0);
                return new ECPair(t, null, e)
            }, ECPair.prototype.getAddress = function() {
                return n.toBase58Check(i.hash160(this.getPublicKeyBuffer()), this.getNetwork().pubKeyHash)
            }, ECPair.prototype.getNetwork = function() {
                return this.network
            }, ECPair.prototype.getPublicKeyBuffer = function() {
                return this.Q.getEncoded(this.compressed)
            }, ECPair.prototype.sign = function(e) {
                if (!this.d) throw new Error("Missing private key");
                return s.sign(e, this.d)
            }, ECPair.prototype.toWIF = function() {
                if (!this.d) throw new Error("Missing private key");
                return c.encode(this.network.wif, this.d.toBuffer(32), this.compressed)
            }, ECPair.prototype.verify = function(e, t) {
                return s.verify(e, t, this.Q)
            }, e.exports = ECPair
        },
        1130: function(e, t, r) {
            var n = r(21).Buffer,
                i = r(4147),
                s = r(172),
                o = r(123),
                u = r(523),
                a = r(47),
                c = r(148);

            function p(e) {
                var t = s.decode(e);
                if (t.length < 21) throw new TypeError(e + " is too short");
                if (t.length > 21) throw new TypeError(e + " is too long");
                return {
                    version: t.readUInt8(0),
                    hash: t.slice(1)
                }
            }

            function h(e) {
                var t = i.decode(e),
                    r = i.fromWords(t.words.slice(1));
                return {
                    version: t.words[0],
                    prefix: t.prefix,
                    data: n.from(r)
                }
            }

            function f(e, t) {
                a(c.tuple(c.Hash160bit, c.UInt8), arguments);
                var r = n.allocUnsafe(21);
                return r.writeUInt8(t, 0), e.copy(r, 1), s.encode(r)
            }

            function l(e, t, r) {
                var n = i.toWords(e);
                return n.unshift(t), i.encode(r, n)
            }
            e.exports = {
                fromBase58Check: p,
                fromBech32: h,
                fromOutputScript: function(e, t) {
                    if (t = t || u.bitcoin, o.pubKeyHash.output.check(e)) return f(o.compile(e).slice(3, 23), t.pubKeyHash);
                    if (o.scriptHash.output.check(e)) return f(o.compile(e).slice(2, 22), t.scriptHash);
                    if (o.witnessPubKeyHash.output.check(e)) return l(o.compile(e).slice(2, 22), 0, t.bech32);
                    if (o.witnessScriptHash.output.check(e)) return l(o.compile(e).slice(2, 34), 0, t.bech32);
                    throw new Error(o.toASM(e) + " has no matching Address")
                },
                toBase58Check: f,
                toBech32: l,
                toOutputScript: function(e, t) {
                    var r;
                    t = t || u.bitcoin;
                    try {
                        r = p(e)
                    } catch (e) {}
                    if (r) {
                        if (r.version === t.pubKeyHash) return o.pubKeyHash.output.encode(r.hash);
                        if (r.version === t.scriptHash) return o.scriptHash.output.encode(r.hash)
                    } else {
                        try {
                            r = h(e)
                        } catch (e) {}
                        if (r) {
                            if (r.prefix !== t.bech32) throw new Error(e + " has an invalid prefix");
                            if (0 === r.version) {
                                if (20 === r.data.length) return o.witnessPubKeyHash.output.encode(r.data);
                                if (32 === r.data.length) return o.witnessScriptHash.output.encode(r.data)
                            }
                        }
                    }
                    throw new Error(e + " has no matching Script")
                }
            }
        },
        1131: function(e, t, r) {
            var n = r(370),
                i = r(47),
                s = r(148),
                BigInteger = r(109);

            function ECSignature(e, t) {
                i(s.tuple(s.BigInt, s.BigInt), arguments), this.r = e, this.s = t
            }
            ECSignature.parseCompact = function(e) {
                if (65 !== e.length) throw new Error("Invalid signature length");
                var t = e.readUInt8(0) - 27;
                if (t !== (7 & t)) throw new Error("Invalid signature parameter");
                return {
                    compressed: !!(4 & t),
                    i: 3 & t,
                    signature: new ECSignature(BigInteger.fromBuffer(e.slice(1, 33)), BigInteger.fromBuffer(e.slice(33)))
                }
            }, ECSignature.fromDER = function(e) {
                var t = n.decode(e);
                return new ECSignature(BigInteger.fromDERInteger(t.r), BigInteger.fromDERInteger(t.s))
            }, ECSignature.parseScriptSignature = function(e) {
                var t = e.readUInt8(e.length - 1),
                    r = -129 & t;
                if (r <= 0 || r >= 4) throw new Error("Invalid hashType " + t);
                return {
                    signature: ECSignature.fromDER(e.slice(0, -1)),
                    hashType: t
                }
            }, ECSignature.prototype.toCompact = function(e, t) {
                t && (e += 4), e += 27;
                var r = Buffer.alloc(65);
                return r.writeUInt8(e, 0), this.r.toBuffer(32).copy(r, 1), this.s.toBuffer(32).copy(r, 33), r
            }, ECSignature.prototype.toDER = function() {
                var e = Buffer.from(this.r.toDERInteger()),
                    t = Buffer.from(this.s.toDERInteger());
                return n.encode(e, t)
            }, ECSignature.prototype.toScriptSignature = function(e) {
                var t = -129 & e;
                if (t <= 0 || t >= 4) throw new Error("Invalid hashType " + e);
                var r = Buffer.alloc(1);
                return r.writeUInt8(e, 0), Buffer.concat([this.toDER(), r])
            }, e.exports = ECSignature
        },
        1132: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            const n = r(203),
                i = r(667),
                s = r(54),
                o = r(245),
                u = r(322),
                a = r(172),
                c = r(47);

            function p(e) {
                const t = a.decode(e);
                if (t.length < 21) throw new TypeError(e + " is too short");
                if (t.length > 21) throw new TypeError(e + " is too long");
                return {
                    version: t.readUInt8(0),
                    hash: t.slice(1)
                }
            }

            function h(e) {
                const t = u.decode(e),
                    r = u.fromWords(t.words.slice(1));
                return {
                    version: t.words[0],
                    prefix: t.prefix,
                    data: Buffer.from(r)
                }
            }
            t.fromBase58Check = p, t.fromBech32 = h, t.toBase58Check = function(e, t) {
                c(o.tuple(o.Hash160bit, o.UInt8), arguments);
                const r = Buffer.allocUnsafe(21);
                return r.writeUInt8(t, 0), e.copy(r, 1), a.encode(r)
            }, t.toBech32 = function(e, t, r) {
                const n = u.toWords(e);
                return n.unshift(t), u.encode(r, n)
            }, t.fromOutputScript = function(e, t) {
                t = t || n.bitcoin;
                try {
                    return i.p2pkh({
                        output: e,
                        network: t
                    }).address
                } catch (e) {}
                try {
                    return i.p2sh({
                        output: e,
                        network: t
                    }).address
                } catch (e) {}
                try {
                    return i.p2wpkh({
                        output: e,
                        network: t
                    }).address
                } catch (e) {}
                try {
                    return i.p2wsh({
                        output: e,
                        network: t
                    }).address
                } catch (e) {}
                throw new Error(s.toASM(e) + " has no matching Address")
            }, t.toOutputScript = function(e, t) {
                let r, s;
                t = t || n.bitcoin;
                try {
                    r = p(e)
                } catch (e) {}
                if (r) {
                    if (r.version === t.pubKeyHash) return i.p2pkh({
                        hash: r.hash
                    }).output;
                    if (r.version === t.scriptHash) return i.p2sh({
                        hash: r.hash
                    }).output
                } else {
                    try {
                        s = h(e)
                    } catch (e) {}
                    if (s) {
                        if (s.prefix !== t.bech32) throw new Error(e + " has an invalid prefix");
                        if (0 === s.version) {
                            if (20 === s.data.length) return i.p2wpkh({
                                hash: s.data
                            }).output;
                            if (32 === s.data.length) return i.p2wsh({
                                hash: s.data
                            }).output
                        }
                    }
                }
                throw new Error(e + " has no matching Script")
            }
        },
        1133: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            const n = r(203),
                i = r(245),
                s = r(253),
                o = r(125),
                u = r(47),
                a = r(281),
                c = u.maybe(u.compile({
                    compressed: i.maybe(i.Boolean),
                    network: i.maybe(i.Network)
                }));
            class ECPair {
                constructor(e, t, r) {
                    this.__D = e, this.__Q = t, this.lowR = !1, void 0 === r && (r = {}), this.compressed = void 0 === r.compressed || r.compressed, this.network = r.network || n.bitcoin, void 0 !== t && (this.__Q = s.pointCompress(t, this.compressed))
                }
                get privateKey() {
                    return this.__D
                }
                get publicKey() {
                    return this.__Q || (this.__Q = s.pointFromScalar(this.__D, this.compressed)), this.__Q
                }
                toWIF() {
                    if (!this.__D) throw new Error("Missing private key");
                    return a.encode(this.network.wif, this.__D, this.compressed)
                }
                sign(e, t) {
                    if (!this.__D) throw new Error("Missing private key");
                    if (void 0 === t && (t = this.lowR), !1 === t) return s.sign(e, this.__D);
                    {
                        let t = s.sign(e, this.__D);
                        const r = Buffer.alloc(32, 0);
                        let n = 0;
                        for (; t[0] > 127;) n++, r.writeUIntLE(n, 0, 6), t = s.signWithEntropy(e, this.__D, r);
                        return t
                    }
                }
                verify(e, t) {
                    return s.verify(e, this.publicKey, t)
                }
            }

            function p(e, t) {
                if (u(i.Buffer256bit, e), !s.isPrivate(e)) throw new TypeError("Private key not in range [1, n)");
                return u(c, t), new ECPair(e, void 0, t)
            }
            t.fromPrivateKey = p, t.fromPublicKey = function(e, t) {
                return u(s.isPoint, e), u(c, t), new ECPair(void 0, e, t)
            }, t.fromWIF = function(e, t) {
                const r = a.decode(e),
                    s = r.version;
                if (i.Array(t)) {
                    if (!(t = t.filter(e => s === e.wif).pop())) throw new Error("Unknown network version")
                } else if (t = t || n.bitcoin, s !== t.wif) throw new Error("Invalid network version");
                return p(r.privateKey, {
                    compressed: r.compressed,
                    network: t
                })
            }, t.makeRandom = function(e) {
                u(c, e), void 0 === e && (e = {});
                const t = e.rng || o;
                let r;
                do {
                    r = t(32), u(i.Buffer256bit, r)
                } while (!s.isPrivate(r));
                return p(r, e)
            }
        },
        1136: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            const n = r(4198);
            t.input = n;
            const i = r(4199);
            t.output = i
        },
        1137: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            const n = r(4201);
            t.input = n;
            const i = r(4202);
            t.output = i
        },
        1138: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            const n = r(4203);
            t.input = n;
            const i = r(4204);
            t.output = i
        },
        123: function(e, t, r) {
            var n = r(21).Buffer,
                i = r(370),
                s = r(931),
                o = r(47),
                u = r(148),
                a = r(2007),
                c = r(139),
                p = r(1392),
                h = c.OP_RESERVED;

            function f(e) {
                return u.Buffer(e) || function(e) {
                    return u.Number(e) && (e === c.OP_0 || e >= c.OP_1 && e <= c.OP_16 || e === c.OP_1NEGATE)
                }(e)
            }

            function l(e) {
                return u.Array(e) && e.every(f)
            }

            function d(e) {
                return 0 === e.length ? c.OP_0 : 1 === e.length ? e[0] >= 1 && e[0] <= 16 ? h + e[0] : 129 === e[0] ? c.OP_1NEGATE : void 0 : void 0
            }

            function w(e) {
                if (n.isBuffer(e)) return e;
                o(u.Array, e);
                var t = e.reduce((function(e, t) {
                        return n.isBuffer(t) ? 1 === t.length && void 0 !== d(t) ? e + 1 : e + s.encodingLength(t.length) + t.length : e + 1
                    }), 0),
                    r = n.allocUnsafe(t),
                    i = 0;
                if (e.forEach((function(e) {
                        if (n.isBuffer(e)) {
                            var t = d(e);
                            if (void 0 !== t) return r.writeUInt8(t, i), void(i += 1);
                            i += s.encode(r, e.length, i), e.copy(r, i), i += e.length
                        } else r.writeUInt8(e, i), i += 1
                    })), i !== r.length) throw new Error("Could not decode chunks");
                return r
            }

            function y(e) {
                if (u.Array(e)) return e;
                o(u.Buffer, e);
                for (var t = [], r = 0; r < e.length;) {
                    var n = e[r];
                    if (n > c.OP_0 && n <= c.OP_PUSHDATA4) {
                        var i = s.decode(e, r);
                        if (null === i) return [];
                        if ((r += i.size) + i.number > e.length) return [];
                        var a = e.slice(r, r + i.number);
                        r += i.number;
                        var p = d(a);
                        void 0 !== p ? t.push(p) : t.push(a)
                    } else t.push(n), r += 1
                }
                return t
            }

            function m(e) {
                var t = -129 & e;
                return t > 0 && t < 4
            }
            e.exports = {
                compile: w,
                decompile: y,
                fromASM: function(e) {
                    return o(u.String, e), w(e.split(" ").map((function(e) {
                        return void 0 !== c[e] ? c[e] : (o(u.Hex, e), n.from(e, "hex"))
                    })))
                },
                toASM: function(e) {
                    return n.isBuffer(e) && (e = y(e)), e.map((function(e) {
                        if (n.isBuffer(e)) {
                            var t = d(e);
                            if (void 0 === t) return e.toString("hex");
                            e = t
                        }
                        return p[e]
                    })).join(" ")
                },
                toStack: function(e) {
                    return e = y(e), o(l, e), e.map((function(e) {
                        return n.isBuffer(e) ? e : e === c.OP_0 ? n.allocUnsafe(0) : a.encode(e - h)
                    }))
                },
                number: r(2007),
                isCanonicalPubKey: function(e) {
                    if (!n.isBuffer(e)) return !1;
                    if (e.length < 33) return !1;
                    switch (e[0]) {
                        case 2:
                        case 3:
                            return 33 === e.length;
                        case 4:
                            return 65 === e.length
                    }
                    return !1
                },
                isCanonicalSignature: function(e) {
                    return !!n.isBuffer(e) && (!!m(e[e.length - 1]) && i.check(e.slice(0, -1)))
                },
                isPushOnly: l,
                isDefinedHashType: m
            };
            var g = r(4126);
            for (var S in g) e.exports[S] = g[S]
        },
        139: function(e) {
            e.exports = JSON.parse('{"OP_FALSE":0,"OP_0":0,"OP_PUSHDATA1":76,"OP_PUSHDATA2":77,"OP_PUSHDATA4":78,"OP_1NEGATE":79,"OP_RESERVED":80,"OP_TRUE":81,"OP_1":81,"OP_2":82,"OP_3":83,"OP_4":84,"OP_5":85,"OP_6":86,"OP_7":87,"OP_8":88,"OP_9":89,"OP_10":90,"OP_11":91,"OP_12":92,"OP_13":93,"OP_14":94,"OP_15":95,"OP_16":96,"OP_NOP":97,"OP_VER":98,"OP_IF":99,"OP_NOTIF":100,"OP_VERIF":101,"OP_VERNOTIF":102,"OP_ELSE":103,"OP_ENDIF":104,"OP_VERIFY":105,"OP_RETURN":106,"OP_TOALTSTACK":107,"OP_FROMALTSTACK":108,"OP_2DROP":109,"OP_2DUP":110,"OP_3DUP":111,"OP_2OVER":112,"OP_2ROT":113,"OP_2SWAP":114,"OP_IFDUP":115,"OP_DEPTH":116,"OP_DROP":117,"OP_DUP":118,"OP_NIP":119,"OP_OVER":120,"OP_PICK":121,"OP_ROLL":122,"OP_ROT":123,"OP_SWAP":124,"OP_TUCK":125,"OP_CAT":126,"OP_SUBSTR":127,"OP_LEFT":128,"OP_RIGHT":129,"OP_SIZE":130,"OP_INVERT":131,"OP_AND":132,"OP_OR":133,"OP_XOR":134,"OP_EQUAL":135,"OP_EQUALVERIFY":136,"OP_RESERVED1":137,"OP_RESERVED2":138,"OP_1ADD":139,"OP_1SUB":140,"OP_2MUL":141,"OP_2DIV":142,"OP_NEGATE":143,"OP_ABS":144,"OP_NOT":145,"OP_0NOTEQUAL":146,"OP_ADD":147,"OP_SUB":148,"OP_MUL":149,"OP_DIV":150,"OP_MOD":151,"OP_LSHIFT":152,"OP_RSHIFT":153,"OP_BOOLAND":154,"OP_BOOLOR":155,"OP_NUMEQUAL":156,"OP_NUMEQUALVERIFY":157,"OP_NUMNOTEQUAL":158,"OP_LESSTHAN":159,"OP_GREATERTHAN":160,"OP_LESSTHANOREQUAL":161,"OP_GREATERTHANOREQUAL":162,"OP_MIN":163,"OP_MAX":164,"OP_WITHIN":165,"OP_RIPEMD160":166,"OP_SHA1":167,"OP_SHA256":168,"OP_HASH160":169,"OP_HASH256":170,"OP_CODESEPARATOR":171,"OP_CHECKSIG":172,"OP_CHECKSIGVERIFY":173,"OP_CHECKMULTISIG":174,"OP_CHECKMULTISIGVERIFY":175,"OP_NOP1":176,"OP_NOP2":177,"OP_CHECKLOCKTIMEVERIFY":177,"OP_NOP3":178,"OP_CHECKSEQUENCEVERIFY":178,"OP_NOP4":179,"OP_NOP5":180,"OP_NOP6":181,"OP_NOP7":182,"OP_NOP8":183,"OP_NOP9":184,"OP_NOP10":185,"OP_PUBKEYHASH":253,"OP_PUBKEY":254,"OP_INVALIDOPCODE":255}')
        },
        1390: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            const n = r(1410);
            t.bip32 = n;
            const i = r(1132);
            t.address = i;
            const s = r(271);
            t.crypto = s;
            const ECPair = r(1133);
            t.ECPair = ECPair;
            const o = r(203);
            t.networks = o;
            const u = r(667);
            t.payments = u;
            const a = r(54);
            t.script = a;
            var c = r(4171);
            t.Block = c.Block;
            var p = r(4172);
            t.Psbt = p.Psbt;
            var h = r(54);
            t.opcodes = h.OPS;
            var f = r(669);
            t.Transaction = f.Transaction;
            var l = r(4196);
            t.TransactionBuilder = l.TransactionBuilder
        },
        1392: function(e, t, r) {
            var n = r(139),
                i = {};
            for (var s in n) {
                i[n[s]] = s
            }
            e.exports = i
        },
        148: function(e, t, r) {
            var n = r(47),
                i = Math.pow(2, 31) - 1;

            function s(e) {
                return n.String(e) && e.match(/^(m\/)?(\d+'?\/)*\d+'?$/)
            }
            s.toJSON = function() {
                return "BIP32 derivation path"
            };
            var o = n.quacksLike("BigInteger"),
                u = n.quacksLike("Point"),
                ECSignature = n.compile({
                    r: o,
                    s: o
                }),
                a = n.compile({
                    messagePrefix: n.oneOf(n.Buffer, n.String),
                    bip32: {
                        public: n.UInt32,
                        private: n.UInt32
                    },
                    pubKeyHash: n.UInt8,
                    scriptHash: n.UInt8,
                    wif: n.UInt8
                }),
                c = {
                    BigInt: o,
                    BIP32Path: s,
                    Buffer256bit: n.BufferN(32),
                    ECPoint: u,
                    ECSignature: ECSignature,
                    Hash160bit: n.BufferN(20),
                    Hash256bit: n.BufferN(32),
                    Network: a,
                    Satoshi: function(e) {
                        return n.UInt53(e) && e <= 21e14
                    },
                    UInt31: function(e) {
                        return n.UInt32(e) && e <= i
                    }
                };
            for (var p in n) c[p] = n[p];
            e.exports = c
        },
        2007: function(e, t, r) {
            var n = r(21).Buffer;
            e.exports = {
                decode: function(e, t, r) {
                    t = t || 4, r = void 0 === r || r;
                    var n = e.length;
                    if (0 === n) return 0;
                    if (n > t) throw new TypeError("Script number overflow");
                    if (r && 0 == (127 & e[n - 1]) && (n <= 1 || 0 == (128 & e[n - 2]))) throw new Error("Non-minimally encoded script number");
                    if (5 === n) {
                        var i = e.readUInt32LE(0),
                            s = e.readUInt8(4);
                        return 128 & s ? -(4294967296 * (-129 & s) + i) : 4294967296 * s + i
                    }
                    for (var o = 0, u = 0; u < n; ++u) o |= e[u] << 8 * u;
                    return 128 & e[n - 1] ? -(o & ~(128 << 8 * (n - 1))) : o
                },
                encode: function(e) {
                    for (var t = Math.abs(e), r = function(e) {
                            return e > 2147483647 ? 5 : e > 8388607 ? 4 : e > 32767 ? 3 : e > 127 ? 2 : e > 0 ? 1 : 0
                        }(t), i = n.allocUnsafe(r), s = e < 0, o = 0; o < r; ++o) i.writeUInt8(255 & t, o), t >>= 8;
                    return 128 & i[r - 1] ? i.writeUInt8(s ? 128 : 0, r - 1) : s && (i[r - 1] |= 128), i
                }
            }
        },
        2008: function(e, t, r) {
            var n = r(21).Buffer,
                i = r(123),
                s = r(47);

            function o(e, t) {
                var r = i.decompile(e);
                if (r.length < 1) return !1;
                var s = r[r.length - 1];
                if (!n.isBuffer(s)) return !1;
                var o = i.decompile(i.compile(r.slice(0, -1))),
                    u = i.decompile(s);
                if (0 === u.length) return !1;
                if (!i.isPushOnly(o)) return !1;
                var a = i.classifyInput(o, t),
                    c = i.classifyOutput(u);
                return 1 === r.length ? c === i.types.P2WSH || c === i.types.P2WPKH : a === c
            }

            function u(e, t) {
                var r = i.compile(t);
                return [].concat(e, r)
            }

            function a(e) {
                return s(o, e), {
                    redeemScriptStack: e.slice(0, -1),
                    redeemScript: e[e.length - 1]
                }
            }
            o.toJSON = function() {
                return "scriptHash input"
            }, e.exports = {
                check: o,
                decode: function(e) {
                    var t = a(i.decompile(e));
                    return t.redeemScriptSig = i.compile(t.redeemScriptStack), delete t.redeemScriptStack, t
                },
                decodeStack: a,
                encode: function(e, t) {
                    var r = i.decompile(e);
                    return i.compile(u(r, t))
                },
                encodeStack: u
            }
        },
        2009: function(e, t, r) {
            var n = r(931),
                i = r(369);

            function s(e, t) {
                if ("number" != typeof e) throw new Error("cannot write a non-number as a number");
                if (e < 0) throw new Error("specified a negative value for writing an unsigned value");
                if (e > t) throw new Error("RangeError: value out of range");
                if (Math.floor(e) !== e) throw new Error("value has a fractional component")
            }
            e.exports = {
                pushDataSize: n.encodingLength,
                readPushDataInt: n.decode,
                readUInt64LE: function(e, t) {
                    var r = e.readUInt32LE(t),
                        n = e.readUInt32LE(t + 4);
                    return s((n *= 4294967296) + r, 9007199254740991), n + r
                },
                readVarInt: function(e, t) {
                    return {
                        number: i.decode(e, t),
                        size: i.decode.bytes
                    }
                },
                varIntBuffer: i.encode,
                varIntSize: i.encodingLength,
                writePushDataInt: n.encode,
                writeUInt64LE: function(e, t, r) {
                    return s(t, 9007199254740991), e.writeInt32LE(-1 & t, r), e.writeUInt32LE(Math.floor(t / 4294967296), r + 4), r + 8
                },
                writeVarInt: function(e, t, r) {
                    return i.encode(t, e, r), i.encode.bytes
                }
            }
        },
        2013: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            const n = r(54),
                i = r(54);

            function s(e) {
                const t = n.compile(e);
                return 22 === t.length && t[0] === i.OPS.OP_0 && 20 === t[1]
            }
            t.check = s, s.toJSON = () => "Witness pubKeyHash output"
        },
        2014: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            const n = r(54),
                i = r(54);

            function s(e) {
                const t = n.compile(e);
                return 34 === t.length && t[0] === i.OPS.OP_0 && 32 === t[1]
            }
            t.check = s, s.toJSON = () => "Witness scriptHash output"
        },
        203: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.bitcoin = {
                messagePrefix: "Bitcoin Signed Message:\n",
                bech32: "bc",
                bip32: {
                    public: 76067358,
                    private: 76066276
                },
                pubKeyHash: 0,
                scriptHash: 5,
                wif: 128
            }, t.regtest = {
                messagePrefix: "Bitcoin Signed Message:\n",
                bech32: "bcrt",
                bip32: {
                    public: 70617039,
                    private: 70615956
                },
                pubKeyHash: 111,
                scriptHash: 196,
                wif: 239
            }, t.testnet = {
                messagePrefix: "Bitcoin Signed Message:\n",
                bech32: "tb",
                bip32: {
                    public: 70617039,
                    private: 70615956
                },
                pubKeyHash: 111,
                scriptHash: 196,
                wif: 239
            }
        },
        245: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            const n = r(47),
                i = Math.pow(2, 31) - 1;

            function s(e) {
                return n.String(e) && !!e.match(/^(m\/)?(\d+'?\/)*\d+'?$/)
            }
            t.UInt31 = function(e) {
                return n.UInt32(e) && e <= i
            }, t.BIP32Path = s, s.toJSON = () => "BIP32 derivation path", t.Signer = function(e) {
                return (n.Buffer(e.publicKey) || "function" == typeof e.getPublicKey) && "function" == typeof e.sign
            };
            t.Satoshi = function(e) {
                return n.UInt53(e) && e <= 21e14
            }, t.ECPoint = n.quacksLike("Point"), t.Network = n.compile({
                messagePrefix: n.oneOf(n.Buffer, n.String),
                bip32: {
                    public: n.UInt32,
                    private: n.UInt32
                },
                pubKeyHash: n.UInt8,
                scriptHash: n.UInt8,
                wif: n.UInt8
            }), t.Buffer256bit = n.BufferN(32), t.Hash160bit = n.BufferN(20), t.Hash256bit = n.BufferN(32), t.Number = n.Number, t.Array = n.Array, t.Boolean = n.Boolean, t.String = n.String, t.Buffer = n.Buffer, t.Hex = n.Hex, t.maybe = n.maybe, t.tuple = n.tuple, t.UInt8 = n.UInt8, t.UInt32 = n.UInt32, t.Function = n.Function, t.BufferN = n.BufferN, t.Null = n.Null, t.oneOf = n.oneOf
        },
        271: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            const n = r(101);

            function i(e) {
                try {
                    return n("rmd160").update(e).digest()
                } catch (t) {
                    return n("ripemd160").update(e).digest()
                }
            }

            function s(e) {
                return n("sha256").update(e).digest()
            }
            t.ripemd160 = i, t.sha1 = function(e) {
                return n("sha1").update(e).digest()
            }, t.sha256 = s, t.hash160 = function(e) {
                return i(s(e))
            }, t.hash256 = function(e) {
                return s(s(e))
            }
        },
        354: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.prop = function(e, t, r) {
                Object.defineProperty(e, t, {
                    configurable: !0,
                    enumerable: !0,
                    get() {
                        const e = r.call(this);
                        return this[t] = e, e
                    },
                    set(e) {
                        Object.defineProperty(this, t, {
                            configurable: !0,
                            enumerable: !0,
                            value: e,
                            writable: !0
                        })
                    }
                })
            }, t.value = function(e) {
                let t;
                return () => (void 0 !== t || (t = e()), t)
            }
        },
        4124: function(e, t, r) {
            e.exports = {
                Block: r(4125),
                ECPair: r(1129),
                ECSignature: r(1131),
                HDNode: r(4149),
                Transaction: r(1128),
                TransactionBuilder: r(4150),
                address: r(1130),
                bufferutils: r(2009),
                crypto: r(431),
                networks: r(523),
                opcodes: r(139),
                script: r(123)
            }
        },
        4125: function(e, t, r) {
            var n = r(21).Buffer,
                i = r(431),
                s = r(1391),
                o = r(47),
                u = r(148),
                a = r(369),
                c = r(1128);

            function Block() {
                this.version = 1, this.prevHash = null, this.merkleRoot = null, this.timestamp = 0, this.bits = 0, this.nonce = 0
            }
            Block.fromBuffer = function(e) {
                if (e.length < 80) throw new Error("Buffer too small (< 80 bytes)");
                var t = 0;

                function r(r) {
                    return t += r, e.slice(t - r, t)
                }

                function n() {
                    var r = e.readUInt32LE(t);
                    return t += 4, r
                }
                var i = new Block;
                if (i.version = function() {
                        var r = e.readInt32LE(t);
                        return t += 4, r
                    }(), i.prevHash = r(32), i.merkleRoot = r(32), i.timestamp = n(), i.bits = n(), i.nonce = n(), 80 === e.length) return i;

                function s() {
                    var r = c.fromBuffer(e.slice(t), !0);
                    return t += r.byteLength(), r
                }
                var o, u = (o = a.decode(e, t), t += a.decode.bytes, o);
                i.transactions = [];
                for (var p = 0; p < u; ++p) {
                    var h = s();
                    i.transactions.push(h)
                }
                return i
            }, Block.prototype.byteLength = function(e) {
                return e || !this.transactions ? 80 : 80 + a.encodingLength(this.transactions.length) + this.transactions.reduce((function(e, t) {
                    return e + t.byteLength()
                }), 0)
            }, Block.fromHex = function(e) {
                return Block.fromBuffer(n.from(e, "hex"))
            }, Block.prototype.getHash = function() {
                return i.hash256(this.toBuffer(!0))
            }, Block.prototype.getId = function() {
                return this.getHash().reverse().toString("hex")
            }, Block.prototype.getUTCDate = function() {
                var e = new Date(0);
                return e.setUTCSeconds(this.timestamp), e
            }, Block.prototype.toBuffer = function(e) {
                var t, r = n.allocUnsafe(this.byteLength(e)),
                    i = 0;

                function s(e) {
                    e.copy(r, i), i += e.length
                }

                function o(e) {
                    r.writeUInt32LE(e, i), i += 4
                }
                return t = this.version, r.writeInt32LE(t, i), i += 4, s(this.prevHash), s(this.merkleRoot), o(this.timestamp), o(this.bits), o(this.nonce), e || !this.transactions || (a.encode(this.transactions.length, r, i), i += a.encode.bytes, this.transactions.forEach((function(e) {
                    var t = e.byteLength();
                    e.toBuffer(r, i), i += t
                }))), r
            }, Block.prototype.toHex = function(e) {
                return this.toBuffer(e).toString("hex")
            }, Block.calculateTarget = function(e) {
                var t = ((4278190080 & e) >> 24) - 3,
                    r = 8388607 & e,
                    i = n.alloc(32, 0);
                return i.writeUInt32BE(r, 28 - t), i
            }, Block.calculateMerkleRoot = function(e) {
                if (o([{
                        getHash: u.Function
                    }], e), 0 === e.length) throw TypeError("Cannot compute merkle root for zero transactions");
                var t = e.map((function(e) {
                    return e.getHash()
                }));
                return s(t, i.hash256)
            }, Block.prototype.checkMerkleRoot = function() {
                if (!this.transactions) return !1;
                var e = Block.calculateMerkleRoot(this.transactions);
                return 0 === this.merkleRoot.compare(e)
            }, Block.prototype.checkProofOfWork = function() {
                var e = this.getHash().reverse(),
                    t = Block.calculateTarget(this.bits);
                return e.compare(t) <= 0
            }, e.exports = Block
        },
        4126: function(e, t, r) {
            var n = r(123).decompile,
                i = r(4127),
                s = r(4130),
                o = r(4131),
                u = r(4134),
                a = r(4137),
                c = r(4139),
                p = r(4142),
                h = r(4145),
                f = {
                    MULTISIG: "multisig",
                    NONSTANDARD: "nonstandard",
                    NULLDATA: "nulldata",
                    P2PK: "pubkey",
                    P2PKH: "pubkeyhash",
                    P2SH: "scripthash",
                    P2WPKH: "witnesspubkeyhash",
                    P2WSH: "witnessscripthash",
                    WITNESS_COMMITMENT: "witnesscommitment"
                };
            e.exports = {
                classifyInput: function(e, t) {
                    var r = n(e);
                    return u.input.check(r) ? f.P2PKH : a.input.check(r, t) ? f.P2SH : i.input.check(r, t) ? f.MULTISIG : o.input.check(r) ? f.P2PK : f.NONSTANDARD
                },
                classifyOutput: function(e) {
                    if (c.output.check(e)) return f.P2WPKH;
                    if (p.output.check(e)) return f.P2WSH;
                    if (u.output.check(e)) return f.P2PKH;
                    if (a.output.check(e)) return f.P2SH;
                    var t = n(e);
                    return i.output.check(t) ? f.MULTISIG : o.output.check(t) ? f.P2PK : h.output.check(t) ? f.WITNESS_COMMITMENT : s.output.check(t) ? f.NULLDATA : f.NONSTANDARD
                },
                classifyWitness: function(e, t) {
                    var r = n(e);
                    return c.input.check(r) ? f.P2WPKH : p.input.check(r, t) ? f.P2WSH : f.NONSTANDARD
                },
                multisig: i,
                nullData: s,
                pubKey: o,
                pubKeyHash: u,
                scriptHash: a,
                witnessPubKeyHash: c,
                witnessScriptHash: p,
                witnessCommitment: h,
                types: f
            }
        },
        4127: function(e, t, r) {
            e.exports = {
                input: r(4128),
                output: r(4129)
            }
        },
        4128: function(e, t, r) {
            var n = r(21).Buffer,
                i = r(123),
                s = r(47),
                o = r(139);

            function u(e) {
                return e === o.OP_0 || i.isCanonicalSignature(e)
            }

            function a(e, t) {
                var r = i.decompile(e);
                return !(r.length < 2) && (r[0] === o.OP_0 && (t ? r.slice(1).every(u) : r.slice(1).every(i.isCanonicalSignature)))
            }
            a.toJSON = function() {
                return "multisig input"
            };
            var c = n.allocUnsafe(0);

            function p(e, t) {
                if (s([u], e), t) {
                    var r = i.multisig.output.decode(t);
                    if (e.length < r.m) throw new TypeError("Not enough signatures provided");
                    if (e.length > r.pubKeys.length) throw new TypeError("Too many signatures provided")
                }
                return [].concat(c, e.map((function(e) {
                    return e === o.OP_0 ? c : e
                })))
            }

            function h(e, t) {
                return s(a, e, t), e.slice(1)
            }
            e.exports = {
                check: a,
                decode: function(e, t) {
                    return h(i.decompile(e), t)
                },
                decodeStack: h,
                encode: function(e, t) {
                    return i.compile(p(e, t))
                },
                encodeStack: p
            }
        },
        4129: function(e, t, r) {
            var n = r(123),
                i = r(148),
                s = r(47),
                o = r(139),
                u = o.OP_RESERVED;

            function a(e, t) {
                var r = n.decompile(e);
                if (r.length < 4) return !1;
                if (r[r.length - 1] !== o.OP_CHECKMULTISIG) return !1;
                if (!i.Number(r[0])) return !1;
                if (!i.Number(r[r.length - 2])) return !1;
                var s = r[0] - u,
                    a = r[r.length - 2] - u;
                return !(s <= 0) && (!(a > 16) && (!(s > a) && (a === r.length - 3 && (!!t || r.slice(1, -2).every(n.isCanonicalPubKey)))))
            }
            a.toJSON = function() {
                return "multi-sig output"
            }, e.exports = {
                check: a,
                decode: function(e, t) {
                    var r = n.decompile(e);
                    return s(a, r, t), {
                        m: r[0] - u,
                        pubKeys: r.slice(1, -2)
                    }
                },
                encode: function(e, t) {
                    s({
                        m: i.Number,
                        pubKeys: [n.isCanonicalPubKey]
                    }, {
                        m: e,
                        pubKeys: t
                    });
                    var r = t.length;
                    if (r < e) throw new TypeError("Not enough pubKeys provided");
                    return n.compile([].concat(u + e, t, u + r, o.OP_CHECKMULTISIG))
                }
            }
        },
        4130: function(e, t, r) {
            var n = r(123),
                i = r(148),
                s = r(47),
                o = r(139);

            function u(e) {
                var t = n.compile(e);
                return t.length > 1 && t[0] === o.OP_RETURN
            }
            u.toJSON = function() {
                return "null data output"
            }, e.exports = {
                output: {
                    check: u,
                    decode: function(e) {
                        return s(u, e), e.slice(2)
                    },
                    encode: function(e) {
                        return s(i.Buffer, e), n.compile([o.OP_RETURN, e])
                    }
                }
            }
        },
        4131: function(e, t, r) {
            e.exports = {
                input: r(4132),
                output: r(4133)
            }
        },
        4132: function(e, t, r) {
            var n = r(123),
                i = r(47);

            function s(e) {
                var t = n.decompile(e);
                return 1 === t.length && n.isCanonicalSignature(t[0])
            }

            function o(e) {
                return i(n.isCanonicalSignature, e), [e]
            }

            function u(e) {
                return i(s, e), e[0]
            }
            s.toJSON = function() {
                return "pubKey input"
            }, e.exports = {
                check: s,
                decode: function(e) {
                    return u(n.decompile(e))
                },
                decodeStack: u,
                encode: function(e) {
                    return n.compile(o(e))
                },
                encodeStack: o
            }
        },
        4133: function(e, t, r) {
            var n = r(123),
                i = r(47),
                s = r(139);

            function o(e) {
                var t = n.decompile(e);
                return 2 === t.length && n.isCanonicalPubKey(t[0]) && t[1] === s.OP_CHECKSIG
            }
            o.toJSON = function() {
                return "pubKey output"
            }, e.exports = {
                check: o,
                decode: function(e) {
                    var t = n.decompile(e);
                    return i(o, t), t[0]
                },
                encode: function(e) {
                    return i(n.isCanonicalPubKey, e), n.compile([e, s.OP_CHECKSIG])
                }
            }
        },
        4134: function(e, t, r) {
            e.exports = {
                input: r(4135),
                output: r(4136)
            }
        },
        4135: function(e, t, r) {
            var n = r(123),
                i = r(47);

            function s(e) {
                var t = n.decompile(e);
                return 2 === t.length && n.isCanonicalSignature(t[0]) && n.isCanonicalPubKey(t[1])
            }

            function o(e, t) {
                return i({
                    signature: n.isCanonicalSignature,
                    pubKey: n.isCanonicalPubKey
                }, {
                    signature: e,
                    pubKey: t
                }), [e, t]
            }

            function u(e) {
                return i(s, e), {
                    signature: e[0],
                    pubKey: e[1]
                }
            }
            s.toJSON = function() {
                return "pubKeyHash input"
            }, e.exports = {
                check: s,
                decode: function(e) {
                    return u(n.decompile(e))
                },
                decodeStack: u,
                encode: function(e, t) {
                    return n.compile(o(e, t))
                },
                encodeStack: o
            }
        },
        4136: function(e, t, r) {
            var n = r(123),
                i = r(148),
                s = r(47),
                o = r(139);

            function u(e) {
                var t = n.compile(e);
                return 25 === t.length && t[0] === o.OP_DUP && t[1] === o.OP_HASH160 && 20 === t[2] && t[23] === o.OP_EQUALVERIFY && t[24] === o.OP_CHECKSIG
            }
            u.toJSON = function() {
                return "pubKeyHash output"
            }, e.exports = {
                check: u,
                decode: function(e) {
                    return s(u, e), e.slice(3, 23)
                },
                encode: function(e) {
                    return s(i.Hash160bit, e), n.compile([o.OP_DUP, o.OP_HASH160, e, o.OP_EQUALVERIFY, o.OP_CHECKSIG])
                }
            }
        },
        4137: function(e, t, r) {
            e.exports = {
                input: r(2008),
                output: r(4138)
            }
        },
        4138: function(e, t, r) {
            var n = r(123),
                i = r(148),
                s = r(47),
                o = r(139);

            function u(e) {
                var t = n.compile(e);
                return 23 === t.length && t[0] === o.OP_HASH160 && 20 === t[1] && t[22] === o.OP_EQUAL
            }
            u.toJSON = function() {
                return "scriptHash output"
            }, e.exports = {
                check: u,
                decode: function(e) {
                    return s(u, e), e.slice(2, 22)
                },
                encode: function(e) {
                    return s(i.Hash160bit, e), n.compile([o.OP_HASH160, e, o.OP_EQUAL])
                }
            }
        },
        4139: function(e, t, r) {
            e.exports = {
                input: r(4140),
                output: r(4141)
            }
        },
        4140: function(e, t, r) {
            var n = r(123),
                i = r(47);

            function s(e) {
                return n.isCanonicalPubKey(e) && 33 === e.length
            }

            function o(e) {
                var t = n.decompile(e);
                return 2 === t.length && n.isCanonicalSignature(t[0]) && s(t[1])
            }
            o.toJSON = function() {
                return "witnessPubKeyHash input"
            }, e.exports = {
                check: o,
                decodeStack: function(e) {
                    return i(o, e), {
                        signature: e[0],
                        pubKey: e[1]
                    }
                },
                encodeStack: function(e, t) {
                    return i({
                        signature: n.isCanonicalSignature,
                        pubKey: s
                    }, {
                        signature: e,
                        pubKey: t
                    }), [e, t]
                }
            }
        },
        4141: function(e, t, r) {
            var n = r(123),
                i = r(148),
                s = r(47),
                o = r(139);

            function u(e) {
                var t = n.compile(e);
                return 22 === t.length && t[0] === o.OP_0 && 20 === t[1]
            }
            u.toJSON = function() {
                return "Witness pubKeyHash output"
            }, e.exports = {
                check: u,
                decode: function(e) {
                    return s(u, e), e.slice(2)
                },
                encode: function(e) {
                    return s(i.Hash160bit, e), n.compile([o.OP_0, e])
                }
            }
        },
        4142: function(e, t, r) {
            e.exports = {
                input: r(4143),
                output: r(4144)
            }
        },
        4143: function(e, t, r) {
            var n = r(2008);
            e.exports = {
                check: n.check,
                decodeStack: n.decodeStack,
                encodeStack: n.encodeStack
            }
        },
        4144: function(e, t, r) {
            var n = r(123),
                i = r(148),
                s = r(47),
                o = r(139);

            function u(e) {
                var t = n.compile(e);
                return 34 === t.length && t[0] === o.OP_0 && 32 === t[1]
            }
            u.toJSON = function() {
                return "Witness scriptHash output"
            }, e.exports = {
                check: u,
                decode: function(e) {
                    return s(u, e), e.slice(2)
                },
                encode: function(e) {
                    return s(i.Hash256bit, e), n.compile([o.OP_0, e])
                }
            }
        },
        4145: function(e, t, r) {
            e.exports = {
                output: r(4146)
            }
        },
        4146: function(e, t, r) {
            var n = r(21).Buffer,
                i = r(123),
                s = r(148),
                o = r(47),
                u = r(139),
                a = n.from("aa21a9ed", "hex");

            function c(e) {
                var t = i.compile(e);
                return t.length > 37 && t[0] === u.OP_RETURN && 36 === t[1] && t.slice(2, 6).equals(a)
            }
            c.toJSON = function() {
                return "Witness commitment output"
            }, e.exports = {
                check: c,
                decode: function(e) {
                    return o(c, e), i.decompile(e)[1].slice(4, 36)
                },
                encode: function(e) {
                    o(s.Hash256bit, e);
                    var t = n.allocUnsafe(36);
                    return a.copy(t, 0), e.copy(t, 4), i.compile([u.OP_RETURN, t])
                }
            }
        },
        4147: function(e, t, r) {
            "use strict";
            let n = "qpzry9x8gf2tvdw0s3jn54khce6mua7l",
                i = {};
            for (let e = 0; e < n.length; e++) {
                let t = n.charAt(e);
                if (void 0 !== i[t]) throw new TypeError(t + " is ambiguous");
                i[t] = e
            }

            function s(e) {
                let t = e >> 25;
                return (33554431 & e) << 5 ^ 996825010 & -(t >> 0 & 1) ^ 642813549 & -(t >> 1 & 1) ^ 513874426 & -(t >> 2 & 1) ^ 1027748829 & -(t >> 3 & 1) ^ 705979059 & -(t >> 4 & 1)
            }

            function o(e) {
                let t = 1;
                for (let r = 0; r < e.length; ++r) {
                    let n = e.charCodeAt(r);
                    if (n < 33 || n > 126) throw new Error("Invalid prefix (" + e + ")");
                    t = s(t) ^ n >> 5
                }
                t = s(t);
                for (let r = 0; r < e.length; ++r) {
                    let n = e.charCodeAt(r);
                    t = s(t) ^ 31 & n
                }
                return t
            }

            function u(e, t, r, n) {
                let i = 0,
                    s = 0,
                    o = (1 << r) - 1,
                    u = [];
                for (let n = 0; n < e.length; ++n)
                    for (i = i << t | e[n], s += t; s >= r;) s -= r, u.push(i >> s & o);
                if (n) s > 0 && u.push(i << r - s & o);
                else {
                    if (s >= t) throw new Error("Excess padding");
                    if (i << r - s & o) throw new Error("Non-zero padding")
                }
                return u
            }
            e.exports = {
                decode: function(e) {
                    if (e.length < 8) throw new TypeError(e + " too short");
                    if (e.length > 90) throw new TypeError(e + " too long");
                    let t = e.toLowerCase(),
                        r = e.toUpperCase();
                    if (e !== t && e !== r) throw new Error("Mixed-case string " + e);
                    let n = (e = t).lastIndexOf("1");
                    if (0 === n) throw new Error("Missing prefix for " + e);
                    let u = e.slice(0, n),
                        a = e.slice(n + 1);
                    if (a.length < 6) throw new Error("Data too short");
                    let c = o(u),
                        p = [];
                    for (let e = 0; e < a.length; ++e) {
                        let t = a.charAt(e),
                            r = i[t];
                        if (void 0 === r) throw new Error("Unknown character " + t);
                        c = s(c) ^ r, e + 6 >= a.length || p.push(r)
                    }
                    if (1 !== c) throw new Error("Invalid checksum for " + e);
                    return {
                        prefix: u,
                        words: p
                    }
                },
                encode: function(e, t) {
                    if (e.length + 7 + t.length > 90) throw new TypeError("Exceeds Bech32 maximum length");
                    let r = o(e = e.toLowerCase()),
                        i = e + "1";
                    for (let e = 0; e < t.length; ++e) {
                        let o = t[e];
                        if (o >> 5 != 0) throw new Error("Non 5-bit word");
                        r = s(r) ^ o, i += n.charAt(o)
                    }
                    for (let e = 0; e < 6; ++e) r = s(r);
                    r ^= 1;
                    for (let e = 0; e < 6; ++e) {
                        i += n.charAt(r >> 5 * (5 - e) & 31)
                    }
                    return i
                },
                toWords: function(e) {
                    return u(e, 8, 5, !0)
                },
                fromWords: function(e) {
                    return u(e, 5, 8, !1)
                }
            }
        },
        4148: function(e, t, r) {
            var n = r(21).Buffer,
                i = r(320),
                s = r(47),
                o = r(148),
                BigInteger = r(109),
                ECSignature = r(1131),
                u = n.alloc(1, 0),
                a = n.alloc(1, 1),
                c = r(280).getCurveByName("secp256r1");

            function p(e, t, r) {
                s(o.tuple(o.Hash256bit, o.Buffer256bit, o.Function), arguments);
                var p = n.alloc(32, 0),
                    h = n.alloc(32, 1);
                p = i("sha256", p).update(h).update(u).update(t).update(e).digest(), h = i("sha256", p).update(h).digest(), p = i("sha256", p).update(h).update(a).update(t).update(e).digest(), h = i("sha256", p).update(h).digest(), h = i("sha256", p).update(h).digest();
                for (var f = BigInteger.fromBuffer(h); f.signum() <= 0 || f.compareTo(c.n) >= 0 || !r(f);) p = i("sha256", p).update(h).update(u).digest(), h = i("sha256", p).update(h).digest(), h = i("sha256", p).update(h).digest(), f = BigInteger.fromBuffer(h);
                return f
            }
            var h = c.n.shiftRight(1);
            e.exports = {
                deterministicGenerateK: p,
                sign: function(e, t) {
                    s(o.tuple(o.Hash256bit, o.BigInt), arguments);
                    var r, n, i = t.toBuffer(32),
                        u = BigInteger.fromBuffer(e),
                        a = c.n,
                        f = c.G;
                    return p(e, i, (function(e) {
                        var i = f.multiply(e);
                        return !c.isInfinity(i) && (0 !== (r = i.affineX.mod(a)).signum() && 0 !== (n = e.modInverse(a).multiply(u.add(t.multiply(r))).mod(a)).signum())
                    })), n.compareTo(h) > 0 && (n = a.subtract(n)), new ECSignature(r, n)
                },
                verify: function(e, t, r) {
                    s(o.tuple(o.Hash256bit, o.ECSignature, o.ECPoint), arguments);
                    var n = c.n,
                        i = c.G,
                        u = t.r,
                        a = t.s;
                    if (u.signum() <= 0 || u.compareTo(n) >= 0) return !1;
                    if (a.signum() <= 0 || a.compareTo(n) >= 0) return !1;
                    var p = BigInteger.fromBuffer(e),
                        h = a.modInverse(n),
                        f = p.multiply(h).mod(n),
                        l = u.multiply(h).mod(n),
                        d = i.multiplyTwo(f, r, l);
                    if (c.isInfinity(d)) return !1;
                    var w = d.affineX,
                        y = w.mod(n);
                    return y.equals(u)
                },
                __curve: c
            }
        },
        4149: function(e, t, r) {
            var n = r(21).Buffer,
                i = r(172),
                s = r(431),
                o = r(320),
                u = r(47),
                a = r(148),
                c = r(523),
                BigInteger = r(109),
                ECPair = r(1129),
                p = r(280),
                h = p.getCurveByName("secp256r1");

            function HDNode(e, t) {
                if (u(a.tuple("ECPair", a.Buffer256bit), arguments), !e.compressed) throw new TypeError("BIP32 only allows compressed keyPairs");
                this.keyPair = e, this.chainCode = t, this.depth = 0, this.index = 0, this.parentFingerprint = 0
            }
            HDNode.HIGHEST_BIT = 2147483648, HDNode.LENGTH = 78, HDNode.MASTER_SECRET = n.from("Nist256p1 seed", "utf8"), HDNode.fromSeedBuffer = function(e, t) {
                if (u(a.tuple(a.Buffer, a.maybe(a.Network)), arguments), e.length < 16) throw new TypeError("Seed should be at least 128 bits");
                if (e.length > 64) throw new TypeError("Seed should be at most 512 bits");
                var r = o("sha512", HDNode.MASTER_SECRET).update(e).digest(),
                    n = r.slice(0, 32),
                    i = r.slice(32),
                    s = BigInteger.fromBuffer(n),
                    c = new ECPair(s, null, {
                        network: t
                    });
                return new HDNode(c, i)
            }, HDNode.fromSeedHex = function(e, t) {
                return HDNode.fromSeedBuffer(n.from(e, "hex"), t)
            }, HDNode.fromBase58 = function(e, t) {
                var r = i.decode(e);
                if (78 !== r.length) throw new Error("Invalid buffer length");
                var n, s = r.readUInt32BE(0);
                if (Array.isArray(t)) {
                    if (!(n = t.filter((function(e) {
                            return s === e.bip32.private || s === e.bip32.public
                        })).pop())) throw new Error("Unknown network version")
                } else n = t || c.bitcoin;
                if (s !== n.bip32.private && s !== n.bip32.public) throw new Error("Invalid network version");
                var o = r[4],
                    u = r.readUInt32BE(5);
                if (0 === o && 0 !== u) throw new Error("Invalid parent fingerprint");
                var a = r.readUInt32BE(9);
                if (0 === o && 0 !== a) throw new Error("Invalid index");
                var f, l = r.slice(13, 45);
                if (s === n.bip32.private) {
                    if (0 !== r.readUInt8(45)) throw new Error("Invalid private key");
                    var d = BigInteger.fromBuffer(r.slice(46, 78));
                    f = new ECPair(d, null, {
                        network: n
                    })
                } else {
                    var w = p.Point.decodeFrom(h, r.slice(45, 78));
                    h.validate(w), f = new ECPair(null, w, {
                        network: n
                    })
                }
                var y = new HDNode(f, l);
                return y.depth = o, y.index = a, y.parentFingerprint = u, y
            }, HDNode.prototype.getAddress = function() {
                return this.keyPair.getAddress()
            }, HDNode.prototype.getIdentifier = function() {
                return s.hash160(this.keyPair.getPublicKeyBuffer())
            }, HDNode.prototype.getFingerprint = function() {
                return this.getIdentifier().slice(0, 4)
            }, HDNode.prototype.getNetwork = function() {
                return this.keyPair.getNetwork()
            }, HDNode.prototype.getPublicKeyBuffer = function() {
                return this.keyPair.getPublicKeyBuffer()
            }, HDNode.prototype.neutered = function() {
                var e = new HDNode(new ECPair(null, this.keyPair.Q, {
                    network: this.keyPair.network
                }), this.chainCode);
                return e.depth = this.depth, e.index = this.index, e.parentFingerprint = this.parentFingerprint, e
            }, HDNode.prototype.sign = function(e) {
                return this.keyPair.sign(e)
            }, HDNode.prototype.verify = function(e, t) {
                return this.keyPair.verify(e, t)
            }, HDNode.prototype.toBase58 = function(e) {
                if (void 0 !== e) throw new TypeError("Unsupported argument in 2.0.0");
                var t = this.keyPair.network,
                    r = this.isNeutered() ? t.bip32.public : t.bip32.private,
                    s = n.allocUnsafe(78);
                return s.writeUInt32BE(r, 0), s.writeUInt8(this.depth, 4), s.writeUInt32BE(this.parentFingerprint, 5), s.writeUInt32BE(this.index, 9), this.chainCode.copy(s, 13), this.isNeutered() ? this.keyPair.getPublicKeyBuffer().copy(s, 45) : (s.writeUInt8(0, 45), this.keyPair.d.toBuffer(32).copy(s, 46)), i.encode(s)
            }, HDNode.prototype.derive = function(e) {
                u(a.UInt32, e);
                var t = e >= HDNode.HIGHEST_BIT,
                    r = n.allocUnsafe(37);
                if (t) {
                    if (this.isNeutered()) throw new TypeError("Could not derive hardened child key");
                    r[0] = 0, this.keyPair.d.toBuffer(32).copy(r, 1), r.writeUInt32BE(e, 33)
                } else this.keyPair.getPublicKeyBuffer().copy(r, 0), r.writeUInt32BE(e, 33);
                var i, s = o("sha512", this.chainCode).update(r).digest(),
                    c = s.slice(0, 32),
                    p = s.slice(32),
                    f = BigInteger.fromBuffer(c);
                if (f.compareTo(h.n) >= 0) return this.derive(e + 1);
                if (this.isNeutered()) {
                    var l = h.G.multiply(f).add(this.keyPair.Q);
                    if (h.isInfinity(l)) return this.derive(e + 1);
                    i = new ECPair(null, l, {
                        network: this.keyPair.network
                    })
                } else {
                    var d = f.add(this.keyPair.d).mod(h.n);
                    if (0 === d.signum()) return this.derive(e + 1);
                    i = new ECPair(d, null, {
                        network: this.keyPair.network
                    })
                }
                var w = new HDNode(i, p);
                return w.depth = this.depth + 1, w.index = e, w.parentFingerprint = this.getFingerprint().readUInt32BE(0), w
            }, HDNode.prototype.deriveHardened = function(e) {
                return u(a.UInt31, e), this.derive(e + HDNode.HIGHEST_BIT)
            }, HDNode.prototype.isNeutered = function() {
                return !this.keyPair.d
            }, HDNode.prototype.derivePath = function(e) {
                u(a.BIP32Path, e);
                var t = e.split("/");
                if ("m" === t[0]) {
                    if (this.parentFingerprint) throw new Error("Not a master node");
                    t = t.slice(1)
                }
                return t.reduce((function(e, t) {
                    var r;
                    return "'" === t.slice(-1) ? (r = parseInt(t.slice(0, -1), 10), e.deriveHardened(r)) : (r = parseInt(t, 10), e.derive(r))
                }), this)
            }, e.exports = HDNode
        },
        4150: function(e, t, r) {
            var n = r(21).Buffer,
                i = r(1130),
                s = r(431),
                o = r(123),
                u = r(523),
                a = r(139),
                c = r(47),
                p = r(148),
                h = o.types,
                f = [o.types.P2PKH, o.types.P2PK, o.types.MULTISIG],
                l = f.concat([o.types.P2WPKH, o.types.P2WSH]),
                ECPair = r(1129),
                ECSignature = r(1131),
                d = r(1128);

            function w(e) {
                return -1 !== f.indexOf(e)
            }

            function y(e) {
                return -1 !== l.indexOf(e)
            }

            function m(e, t) {
                if (0 === e.length && 0 === t.length) return {};
                var r, n, i, u, a, c, p, f, l, d, m = !1,
                    g = !1,
                    S = !1,
                    v = o.decompile(e);
                o.classifyInput(v, !0) === h.P2SH && (S = !0, a = v[v.length - 1], f = o.classifyOutput(a), r = o.scriptHash.output.encode(s.hash160(a)), n = h.P2SH, u = a);
                var _ = o.classifyWitness(t, !0);
                if (_ === h.P2WSH) {
                    if (c = t[t.length - 1], p = o.classifyOutput(c), g = !0, m = !0, 0 === e.length) {
                        if (r = o.witnessScriptHash.output.encode(s.sha256(c)), n = h.P2WSH, void 0 !== a) throw new Error("Redeem script given when unnecessary")
                    } else {
                        if (!a) throw new Error("No redeemScript provided for P2WSH, but scriptSig non-empty");
                        if (l = o.witnessScriptHash.output.encode(s.sha256(c)), !a.equals(l)) throw new Error("Redeem script didn't match witnessScript")
                    }
                    if (!w(o.classifyOutput(c))) throw new Error("unsupported witness script");
                    u = c, i = p, d = t.slice(0, -1)
                } else if (_ === h.P2WPKH) {
                    m = !0;
                    var b = t[t.length - 1],
                        E = s.hash160(b);
                    if (0 === e.length) {
                        if (r = o.witnessPubKeyHash.output.encode(E), n = h.P2WPKH, void 0 !== a) throw new Error("Redeem script given when unnecessary")
                    } else {
                        if (!a) throw new Error("No redeemScript provided for P2WPKH, but scriptSig wasn't empty");
                        if (l = o.witnessPubKeyHash.output.encode(E), !a.equals(l)) throw new Error("Redeem script did not have the right witness program")
                    }
                    i = h.P2PKH, d = t
                } else if (a) {
                    if (!y(f)) throw new Error("Bad redeemscript!");
                    u = a, i = f, d = v.slice(0, -1)
                } else n = i = o.classifyInput(e), d = v;
                var P = function(e, t, r) {
                        var n = [],
                            i = [];
                        switch (e) {
                            case h.P2PKH:
                                n = t.slice(1), i = t.slice(0, 1);
                                break;
                            case h.P2PK:
                                n[0] = r ? o.pubKey.output.decode(r) : void 0, i = t.slice(0, 1);
                                break;
                            case h.MULTISIG:
                                if (r) n = o.multisig.output.decode(r).pubKeys;
                                i = t.slice(1).map((function(e) {
                                    return 0 === e.length ? void 0 : e
                                }))
                        }
                        return {
                            pubKeys: n,
                            signatures: i
                        }
                    }(i, d, u),
                    O = {
                        pubKeys: P.pubKeys,
                        signatures: P.signatures,
                        prevOutScript: r,
                        prevOutType: n,
                        signType: i,
                        signScript: u,
                        witness: Boolean(m)
                    };
                return S && (O.redeemScript = a, O.redeemScriptType = f), g && (O.witnessScript = c, O.witnessScriptType = p), O
            }

            function g(e, t, r) {
                c(p.Buffer, e);
                var n = o.decompile(e);
                t || (t = o.classifyOutput(e));
                var i = [];
                switch (t) {
                    case h.P2PKH:
                        if (!r) break;
                        var u = n[2],
                            a = s.hash160(r);
                        u.equals(a) && (i = [r]);
                        break;
                    case h.P2WPKH:
                        if (!r) break;
                        var f = n[1],
                            l = s.hash160(r);
                        f.equals(l) && (i = [r]);
                        break;
                    case h.P2PK:
                        i = n.slice(0, 1);
                        break;
                    case h.MULTISIG:
                        i = n.slice(1, -2);
                        break;
                    default:
                        return {
                            scriptType: t
                        }
                }
                return {
                    pubKeys: i,
                    scriptType: t,
                    signatures: i.map((function() {}))
                }
            }

            function S(e, t) {
                if (e.prevOutType) {
                    if (e.prevOutType !== h.P2SH) throw new Error("PrevOutScript must be P2SH");
                    if (!o.decompile(e.prevOutScript)[1].equals(t)) throw new Error("Inconsistent hash160(RedeemScript)")
                }
            }

            function v(e, t, r, n, i) {
                var u, a, f, l, d, w, y, m, v, _ = !1,
                    b = !1,
                    E = !1;
                if (r && i) {
                    if (d = s.hash160(r), y = s.sha256(i), S(e, d), !r.equals(o.witnessScriptHash.output.encode(y))) throw new Error("Witness script inconsistent with redeem script");
                    if (!(u = g(i, void 0, t)).pubKeys) throw new Error('WitnessScript not supported "' + o.toASM(r) + '"');
                    a = o.types.P2SH, f = o.scriptHash.output.encode(d), _ = b = E = !0, l = o.types.P2WSH, m = w = u.scriptType, v = i
                } else if (r) {
                    if (S(e, d = s.hash160(r)), !(u = g(r, void 0, t)).pubKeys) throw new Error('RedeemScript not supported "' + o.toASM(r) + '"');
                    a = o.types.P2SH, f = o.scriptHash.output.encode(d), _ = !0, v = r, b = (m = l = u.scriptType) === o.types.P2WPKH
                } else if (i) {
                    if (function(e, t) {
                            if (e.prevOutType) {
                                if (e.prevOutType !== h.P2WSH) throw new Error("PrevOutScript must be P2WSH");
                                if (!o.decompile(e.prevOutScript)[1].equals(t)) throw new Error("Inconsistent sha25(WitnessScript)")
                            }
                        }(e, y = s.sha256(i)), !(u = g(i, void 0, t)).pubKeys) throw new Error('WitnessScript not supported "' + o.toASM(r) + '"');
                    a = o.types.P2WSH, f = o.witnessScriptHash.output.encode(y), b = E = !0, m = w = u.scriptType, v = i
                } else if (e.prevOutType) {
                    if (e.prevOutType === h.P2SH || e.prevOutType === h.P2WSH) throw new Error("PrevOutScript is " + e.prevOutType + ", requires redeemScript");
                    if (a = e.prevOutType, f = e.prevOutScript, !(u = g(e.prevOutScript, e.prevOutType, t)).pubKeys) return;
                    b = e.prevOutType === h.P2WPKH, m = a, v = f
                } else u = g(f = o.pubKeyHash.output.encode(s.hash160(t)), h.P2PKH, t), b = !1, m = a = h.P2PKH, v = f;
                if (void 0 !== n || b) {
                    if (c(p.Satoshi, n), void 0 !== e.value && e.value !== n) throw new Error("Input didn't match witnessValue");
                    e.value = n
                }
                m === h.P2WPKH && (v = o.pubKeyHash.output.encode(o.witnessPubKeyHash.output.decode(v))), _ && (e.redeemScript = r, e.redeemScriptType = l), E && (e.witnessScript = i, e.witnessScriptType = w), e.pubKeys = u.pubKeys, e.signatures = u.signatures, e.signScript = v, e.signType = m, e.prevOutScript = f, e.prevOutType = a, e.witness = b
            }

            function _(e, t, r, i) {
                if (e === h.P2PKH) {
                    if (1 === t.length && n.isBuffer(t[0]) && 1 === r.length) return o.pubKeyHash.input.encodeStack(t[0], r[0])
                } else if (e === h.P2PK) {
                    if (1 === t.length && n.isBuffer(t[0])) return o.pubKey.input.encodeStack(t[0])
                } else {
                    if (e !== h.MULTISIG) throw new Error("Not yet supported");
                    if (t.length > 0) return t = t.map((function(e) {
                        return e || a.OP_0
                    })), i || (t = t.filter((function(e) {
                        return e !== a.OP_0
                    }))), o.multisig.input.encodeStack(t)
                }
                if (!i) throw new Error("Not enough signatures provided");
                return []
            }

            function b(e, t) {
                this.prevTxMap = {}, this.network = e || u.bitcoin, this.maximumFeeRate = t || 1e3, this.inputs = [], this.tx = new d
            }

            function E(e) {
                return void 0 !== e.prevOutScript && void 0 !== e.signScript && void 0 !== e.pubKeys && void 0 !== e.signatures && e.signatures.length === e.pubKeys.length && e.pubKeys.length > 0 && void 0 !== e.witness
            }

            function P(e) {
                return e.readUInt8(e.length - 1)
            }
            b.prototype.setLockTime = function(e) {
                if (c(p.UInt32, e), this.inputs.some((function(e) {
                        return !!e.signatures && e.signatures.some((function(e) {
                            return e
                        }))
                    }))) throw new Error("No, this would invalidate signatures");
                this.tx.locktime = e
            }, b.prototype.setVersion = function(e) {
                c(p.UInt32, e), this.tx.version = e
            }, b.fromTransaction = function(e, t) {
                var r = new b(t);
                return r.setVersion(e.version), r.setLockTime(e.locktime), e.outs.forEach((function(e) {
                    r.addOutput(e.script, e.value)
                })), e.ins.forEach((function(e) {
                    r.__addInputUnsafe(e.hash, e.index, {
                        sequence: e.sequence,
                        script: e.script,
                        witness: e.witness
                    })
                })), r.inputs.forEach((function(t, r) {
                    ! function(e, t, r) {
                        if (e.redeemScriptType === h.MULTISIG && e.redeemScript && e.pubKeys.length !== e.signatures.length) {
                            var n = e.signatures.concat();
                            e.signatures = e.pubKeys.map((function(i) {
                                var s, o = ECPair.fromPublicKeyBuffer(i);
                                return n.some((function(i, u) {
                                    if (!i) return !1;
                                    var a = ECSignature.parseScriptSignature(i),
                                        c = t.hashForSignature(r, e.redeemScript, a.hashType);
                                    return !!o.verify(c, a.signature) && (n[u] = void 0, s = i, !0)
                                })), s
                            }))
                        }
                    }(t, e, r)
                })), r
            }, b.prototype.addInput = function(e, t, r, i) {
                if (!this.__canModifyInputs()) throw new Error("No, this would invalidate signatures");
                var s;
                if ("string" == typeof e) e = n.from(e, "hex").reverse();
                else if (e instanceof d) {
                    var o = e.outs[t];
                    i = o.script, s = o.value, e = e.getHash()
                }
                return this.__addInputUnsafe(e, t, {
                    sequence: r,
                    prevOutScript: i,
                    value: s
                })
            }, b.prototype.__addInputUnsafe = function(e, t, r) {
                if (d.isCoinbaseHash(e)) throw new Error("coinbase inputs not supported");
                var n = e.toString("hex") + ":" + t;
                if (void 0 !== this.prevTxMap[n]) throw new Error("Duplicate TxOut: " + n);
                var i = {};
                if (void 0 !== r.script && (i = m(r.script, r.witness || [])), void 0 !== r.value && (i.value = r.value), !i.prevOutScript && r.prevOutScript) {
                    var s;
                    if (!i.pubKeys && !i.signatures) {
                        var u = g(r.prevOutScript);
                        u.pubKeys && (i.pubKeys = u.pubKeys, i.signatures = u.signatures), s = u.scriptType
                    }
                    i.prevOutScript = r.prevOutScript, i.prevOutType = s || o.classifyOutput(r.prevOutScript)
                }
                var a = this.tx.addInput(e, t, r.sequence, r.scriptSig);
                return this.inputs[a] = i, this.prevTxMap[n] = a, a
            }, b.prototype.addOutput = function(e, t) {
                if (!this.__canModifyOutputs()) throw new Error("No, this would invalidate signatures");
                return "string" == typeof e && (e = i.toOutputScript(e, this.network)), this.tx.addOutput(e, t)
            }, b.prototype.build = function() {
                return this.__build(!1)
            }, b.prototype.buildIncomplete = function() {
                return this.__build(!0)
            }, b.prototype.__build = function(e) {
                if (!e) {
                    if (!this.tx.ins.length) throw new Error("Transaction has no inputs");
                    if (!this.tx.outs.length) throw new Error("Transaction has no outputs")
                }
                var t = this.tx.clone();
                if (this.inputs.forEach((function(r, n) {
                        if (!(r.witnessScriptType || r.redeemScriptType || r.prevOutType) && !e) throw new Error("Transaction is not complete");
                        var i = function(e, t) {
                            var r = e.prevOutType,
                                n = [],
                                i = [];
                            w(r) && (n = _(r, e.signatures, e.pubKeys, t));
                            var s = !1;
                            if (r === o.types.P2SH) {
                                if (!t && !y(e.redeemScriptType)) throw new Error("Impossible to sign this type");
                                w(e.redeemScriptType) && (n = _(e.redeemScriptType, e.signatures, e.pubKeys, t)), e.redeemScriptType && (s = !0, r = e.redeemScriptType)
                            }
                            switch (r) {
                                case o.types.P2WPKH:
                                    i = _(o.types.P2PKH, e.signatures, e.pubKeys, t);
                                    break;
                                case o.types.P2WSH:
                                    if (!t && !w(e.witnessScriptType)) throw new Error("Impossible to sign this type");
                                    w(e.witnessScriptType) && ((i = _(e.witnessScriptType, e.signatures, e.pubKeys, t)).push(e.witnessScript), r = e.witnessScriptType)
                            }
                            return s && n.push(e.redeemScript), {
                                type: r,
                                script: o.compile(n),
                                witness: i
                            }
                        }(r, e);
                        if (!e && !w(i.type) && i.type !== o.types.P2WPKH) throw new Error(i.type + " not supported");
                        t.setInputScript(n, i.script), t.setWitness(n, i.witness)
                    })), !e && this.__overMaximumFees(t.virtualSize())) throw new Error("Transaction has absurd fees");
                return t
            }, b.prototype.sign = function(e, t, r, n, i, s) {
                if (t.network !== this.network) throw new Error("Inconsistent network");
                if (!this.inputs[e]) throw new Error("No input at index: " + e);
                n = n || d.SIGHASH_ALL;
                var o = this.inputs[e];
                if (void 0 !== o.redeemScript && r && !o.redeemScript.equals(r)) throw new Error("Inconsistent redeemScript");
                var u, a = t.getPublicKeyBuffer();
                if (!E(o) && (v(o, a, r, i, s), !E(o))) throw Error(o.prevOutType + " not supported");
                if (u = o.witness ? this.tx.hashForWitnessV0(e, o.signScript, o.value, n) : this.tx.hashForSignature(e, o.signScript, n), !o.pubKeys.some((function(e, r) {
                        if (!a.equals(e)) return !1;
                        if (o.signatures[r]) throw new Error("Signature already exists");
                        if (!t.compressed && o.signType === h.P2WPKH) throw new Error("BIP143 rejects uncompressed public keys in P2WPKH or P2WSH");
                        return o.signatures[r] = t.sign(u).toScriptSignature(n), !0
                    }))) throw new Error("Key pair cannot sign for this input")
            }, b.prototype.__canModifyInputs = function() {
                return this.inputs.every((function(e) {
                    return void 0 === e.signatures || e.signatures.every((function(e) {
                        return !e || P(e) & d.SIGHASH_ANYONECANPAY
                    }))
                }))
            }, b.prototype.__canModifyOutputs = function() {
                var e = this.tx.ins.length,
                    t = this.tx.outs.length;
                return this.inputs.every((function(r) {
                    return void 0 === r.signatures || r.signatures.every((function(r) {
                        if (!r) return !0;
                        var n = 31 & P(r);
                        return n === d.SIGHASH_NONE || (n === d.SIGHASH_SINGLE ? e <= t : void 0)
                    }))
                }))
            }, b.prototype.__overMaximumFees = function(e) {
                return (this.inputs.reduce((function(e, t) {
                    return e + (t.value >>> 0)
                }), 0) - this.tx.outs.reduce((function(e, t) {
                    return e + t.value
                }), 0)) / e > this.maximumFeeRate
            }, e.exports = b
        },
        4162: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            const n = r(203),
                i = r(54),
                s = r(354),
                o = r(47),
                u = i.OPS;
            t.p2data = function(e, t) {
                if (!e.data && !e.output) throw new TypeError("Not enough data");
                t = Object.assign({
                    validate: !0
                }, t || {}), o({
                    network: o.maybe(o.Object),
                    output: o.maybe(o.Buffer),
                    data: o.maybe(o.arrayOf(o.Buffer))
                }, e);
                const r = {
                    name: "embed",
                    network: e.network || n.bitcoin
                };
                if (s.prop(r, "output", () => {
                        if (e.data) return i.compile([u.OP_RETURN].concat(e.data))
                    }), s.prop(r, "data", () => {
                        if (e.output) return i.decompile(e.output).slice(1)
                    }), t.validate && e.output) {
                    const t = i.decompile(e.output);
                    if (t[0] !== u.OP_RETURN) throw new TypeError("Output is invalid");
                    if (!t.slice(1).every(o.Buffer)) throw new TypeError("Output is invalid");
                    if (e.data && ! function(e, t) {
                            return e.length === t.length && e.every((e, r) => e.equals(t[r]))
                        }(e.data, r.data)) throw new TypeError("Data mismatch")
                }
                return Object.assign(r, e)
            }
        },
        4163: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.decode = function(e, t, r) {
                t = t || 4, r = void 0 === r || r;
                const n = e.length;
                if (0 === n) return 0;
                if (n > t) throw new TypeError("Script number overflow");
                if (r && 0 == (127 & e[n - 1]) && (n <= 1 || 0 == (128 & e[n - 2]))) throw new Error("Non-minimally encoded script number");
                if (5 === n) {
                    const t = e.readUInt32LE(0),
                        r = e.readUInt8(4);
                    return 128 & r ? -(4294967296 * (-129 & r) + t) : 4294967296 * r + t
                }
                let i = 0;
                for (let t = 0; t < n; ++t) i |= e[t] << 8 * t;
                return 128 & e[n - 1] ? -(i & ~(128 << 8 * (n - 1))) : i
            }, t.encode = function(e) {
                let t = Math.abs(e);
                const r = (n = t) > 2147483647 ? 5 : n > 8388607 ? 4 : n > 32767 ? 3 : n > 127 ? 2 : n > 0 ? 1 : 0;
                var n;
                const i = Buffer.allocUnsafe(r),
                    s = e < 0;
                for (let e = 0; e < r; ++e) i.writeUInt8(255 & t, e), t >>= 8;
                return 128 & i[r - 1] ? i.writeUInt8(s ? 128 : 0, r - 1) : s && (i[r - 1] |= 128), i
            }
        },
        4164: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            const n = r(245),
                i = r(370),
                s = r(47),
                o = Buffer.alloc(1, 0);

            function u(e) {
                let t = 0;
                for (; 0 === e[t];) ++t;
                return t === e.length ? o : 128 & (e = e.slice(t))[0] ? Buffer.concat([o, e], 1 + e.length) : e
            }

            function a(e) {
                0 === e[0] && (e = e.slice(1));
                const t = Buffer.alloc(32, 0),
                    r = Math.max(0, 32 - e.length);
                return e.copy(t, r), t
            }
            t.decode = function(e) {
                const t = e.readUInt8(e.length - 1),
                    r = -129 & t;
                if (r <= 0 || r >= 4) throw new Error("Invalid hashType " + t);
                const n = i.decode(e.slice(0, -1)),
                    s = a(n.r),
                    o = a(n.s);
                return {
                    signature: Buffer.concat([s, o], 64),
                    hashType: t
                }
            }, t.encode = function(e, t) {
                s({
                    signature: n.BufferN(64),
                    hashType: n.UInt8
                }, {
                    signature: e,
                    hashType: t
                });
                const r = -129 & t;
                if (r <= 0 || r >= 4) throw new Error("Invalid hashType " + t);
                const o = Buffer.allocUnsafe(1);
                o.writeUInt8(t, 0);
                const a = u(e.slice(0, 32)),
                    c = u(e.slice(32, 64));
                return Buffer.concat([i.encode(a, c), o])
            }
        },
        4165: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            const n = r(203),
                i = r(54),
                s = r(354),
                o = i.OPS,
                u = r(47),
                a = r(253),
                c = o.OP_RESERVED;

            function p(e, t) {
                return e.length === t.length && e.every((e, r) => e.equals(t[r]))
            }
            t.p2ms = function(e, t) {
                if (!(e.input || e.output || e.pubkeys && void 0 !== e.m || e.signatures)) throw new TypeError("Not enough data");

                function r(e) {
                    return i.isCanonicalScriptSignature(e) || void 0 !== (t.allowIncomplete && e === o.OP_0)
                }
                t = Object.assign({
                    validate: !0
                }, t || {}), u({
                    network: u.maybe(u.Object),
                    m: u.maybe(u.Number),
                    n: u.maybe(u.Number),
                    output: u.maybe(u.Buffer),
                    pubkeys: u.maybe(u.arrayOf(a.isPoint)),
                    signatures: u.maybe(u.arrayOf(r)),
                    input: u.maybe(u.Buffer)
                }, e);
                const h = {
                    network: e.network || n.bitcoin
                };
                let f = [],
                    l = !1;

                function d(e) {
                    l || (l = !0, f = i.decompile(e), h.m = f[0] - c, h.n = f[f.length - 2] - c, h.pubkeys = f.slice(1, -2))
                }
                if (s.prop(h, "output", () => {
                        if (e.m && h.n && e.pubkeys) return i.compile([].concat(c + e.m, e.pubkeys, c + h.n, o.OP_CHECKMULTISIG))
                    }), s.prop(h, "m", () => {
                        if (h.output) return d(h.output), h.m
                    }), s.prop(h, "n", () => {
                        if (h.pubkeys) return h.pubkeys.length
                    }), s.prop(h, "pubkeys", () => {
                        if (e.output) return d(e.output), h.pubkeys
                    }), s.prop(h, "signatures", () => {
                        if (e.input) return i.decompile(e.input).slice(1)
                    }), s.prop(h, "input", () => {
                        if (e.signatures) return i.compile([o.OP_0].concat(e.signatures))
                    }), s.prop(h, "witness", () => {
                        if (h.input) return []
                    }), s.prop(h, "name", () => {
                        if (h.m && h.n) return `p2ms(${h.m} of ${h.n})`
                    }), t.validate) {
                    if (e.output) {
                        if (d(e.output), !u.Number(f[0])) throw new TypeError("Output is invalid");
                        if (!u.Number(f[f.length - 2])) throw new TypeError("Output is invalid");
                        if (f[f.length - 1] !== o.OP_CHECKMULTISIG) throw new TypeError("Output is invalid");
                        if (h.m <= 0 || h.n > 16 || h.m > h.n || h.n !== f.length - 3) throw new TypeError("Output is invalid");
                        if (!h.pubkeys.every(e => a.isPoint(e))) throw new TypeError("Output is invalid");
                        if (void 0 !== e.m && e.m !== h.m) throw new TypeError("m mismatch");
                        if (void 0 !== e.n && e.n !== h.n) throw new TypeError("n mismatch");
                        if (e.pubkeys && !p(e.pubkeys, h.pubkeys)) throw new TypeError("Pubkeys mismatch")
                    }
                    if (e.pubkeys) {
                        if (void 0 !== e.n && e.n !== e.pubkeys.length) throw new TypeError("Pubkey count mismatch");
                        if (h.n = e.pubkeys.length, h.n < h.m) throw new TypeError("Pubkey count cannot be less than m")
                    }
                    if (e.signatures) {
                        if (e.signatures.length < h.m) throw new TypeError("Not enough signatures provided");
                        if (e.signatures.length > h.m) throw new TypeError("Too many signatures provided")
                    }
                    if (e.input) {
                        if (e.input[0] !== o.OP_0) throw new TypeError("Input is invalid");
                        if (0 === h.signatures.length || !h.signatures.every(r)) throw new TypeError("Input has invalid signature(s)");
                        if (e.signatures && !p(e.signatures, h.signatures)) throw new TypeError("Signature mismatch");
                        if (void 0 !== e.m && e.m !== e.signatures.length) throw new TypeError("Signature count mismatch")
                    }
                }
                return Object.assign(h, e)
            }
        },
        4166: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            const n = r(203),
                i = r(54),
                s = r(354),
                o = r(47),
                u = i.OPS,
                a = r(253);
            t.p2pk = function(e, t) {
                if (!(e.input || e.output || e.pubkey || e.input || e.signature)) throw new TypeError("Not enough data");
                t = Object.assign({
                    validate: !0
                }, t || {}), o({
                    network: o.maybe(o.Object),
                    output: o.maybe(o.Buffer),
                    pubkey: o.maybe(a.isPoint),
                    signature: o.maybe(i.isCanonicalScriptSignature),
                    input: o.maybe(o.Buffer)
                }, e);
                const r = s.value(() => i.decompile(e.input)),
                    c = {
                        name: "p2pk",
                        network: e.network || n.bitcoin
                    };
                if (s.prop(c, "output", () => {
                        if (e.pubkey) return i.compile([e.pubkey, u.OP_CHECKSIG])
                    }), s.prop(c, "pubkey", () => {
                        if (e.output) return e.output.slice(1, -1)
                    }), s.prop(c, "signature", () => {
                        if (e.input) return r()[0]
                    }), s.prop(c, "input", () => {
                        if (e.signature) return i.compile([e.signature])
                    }), s.prop(c, "witness", () => {
                        if (c.input) return []
                    }), t.validate) {
                    if (e.output) {
                        if (e.output[e.output.length - 1] !== u.OP_CHECKSIG) throw new TypeError("Output is invalid");
                        if (!a.isPoint(c.pubkey)) throw new TypeError("Output pubkey is invalid");
                        if (e.pubkey && !e.pubkey.equals(c.pubkey)) throw new TypeError("Pubkey mismatch")
                    }
                    if (e.signature && e.input && !e.input.equals(c.input)) throw new TypeError("Signature mismatch");
                    if (e.input) {
                        if (1 !== r().length) throw new TypeError("Input is invalid");
                        if (!i.isCanonicalScriptSignature(c.signature)) throw new TypeError("Input has invalid signature")
                    }
                }
                return Object.assign(c, e)
            }
        },
        4167: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            const n = r(271),
                i = r(203),
                s = r(54),
                o = r(354),
                u = r(47),
                a = s.OPS,
                c = r(253),
                p = r(172);
            t.p2pkh = function(e, t) {
                if (!(e.address || e.hash || e.output || e.pubkey || e.input)) throw new TypeError("Not enough data");
                t = Object.assign({
                    validate: !0
                }, t || {}), u({
                    network: u.maybe(u.Object),
                    address: u.maybe(u.String),
                    hash: u.maybe(u.BufferN(20)),
                    output: u.maybe(u.BufferN(25)),
                    pubkey: u.maybe(c.isPoint),
                    signature: u.maybe(s.isCanonicalScriptSignature),
                    input: u.maybe(u.Buffer)
                }, e);
                const r = o.value(() => {
                        const t = p.decode(e.address);
                        return {
                            version: t.readUInt8(0),
                            hash: t.slice(1)
                        }
                    }),
                    h = o.value(() => s.decompile(e.input)),
                    f = e.network || i.bitcoin,
                    l = {
                        name: "p2pkh",
                        network: f
                    };
                if (o.prop(l, "address", () => {
                        if (!l.hash) return;
                        const e = Buffer.allocUnsafe(21);
                        return e.writeUInt8(f.pubKeyHash, 0), l.hash.copy(e, 1), p.encode(e)
                    }), o.prop(l, "hash", () => e.output ? e.output.slice(3, 23) : e.address ? r().hash : e.pubkey || l.pubkey ? n.hash160(e.pubkey || l.pubkey) : void 0), o.prop(l, "output", () => {
                        if (l.hash) return s.compile([a.OP_DUP, a.OP_HASH160, l.hash, a.OP_EQUALVERIFY, a.OP_CHECKSIG])
                    }), o.prop(l, "pubkey", () => {
                        if (e.input) return h()[1]
                    }), o.prop(l, "signature", () => {
                        if (e.input) return h()[0]
                    }), o.prop(l, "input", () => {
                        if (e.pubkey && e.signature) return s.compile([e.signature, e.pubkey])
                    }), o.prop(l, "witness", () => {
                        if (l.input) return []
                    }), t.validate) {
                    let t = Buffer.from([]);
                    if (e.address) {
                        if (r().version !== f.pubKeyHash) throw new TypeError("Invalid version or Network mismatch");
                        if (20 !== r().hash.length) throw new TypeError("Invalid address");
                        t = r().hash
                    }
                    if (e.hash) {
                        if (t.length > 0 && !t.equals(e.hash)) throw new TypeError("Hash mismatch");
                        t = e.hash
                    }
                    if (e.output) {
                        if (25 !== e.output.length || e.output[0] !== a.OP_DUP || e.output[1] !== a.OP_HASH160 || 20 !== e.output[2] || e.output[23] !== a.OP_EQUALVERIFY || e.output[24] !== a.OP_CHECKSIG) throw new TypeError("Output is invalid");
                        const r = e.output.slice(3, 23);
                        if (t.length > 0 && !t.equals(r)) throw new TypeError("Hash mismatch");
                        t = r
                    }
                    if (e.pubkey) {
                        const r = n.hash160(e.pubkey);
                        if (t.length > 0 && !t.equals(r)) throw new TypeError("Hash mismatch");
                        t = r
                    }
                    if (e.input) {
                        const r = h();
                        if (2 !== r.length) throw new TypeError("Input is invalid");
                        if (!s.isCanonicalScriptSignature(r[0])) throw new TypeError("Input has invalid signature");
                        if (!c.isPoint(r[1])) throw new TypeError("Input has invalid pubkey");
                        if (e.signature && !e.signature.equals(r[0])) throw new TypeError("Signature mismatch");
                        if (e.pubkey && !e.pubkey.equals(r[1])) throw new TypeError("Pubkey mismatch");
                        const i = n.hash160(r[1]);
                        if (t.length > 0 && !t.equals(i)) throw new TypeError("Hash mismatch")
                    }
                }
                return Object.assign(l, e)
            }
        },
        4168: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            const n = r(271),
                i = r(203),
                s = r(54),
                o = r(354),
                u = r(47),
                a = s.OPS,
                c = r(172);
            t.p2sh = function(e, t) {
                if (!(e.address || e.hash || e.output || e.redeem || e.input)) throw new TypeError("Not enough data");
                t = Object.assign({
                    validate: !0
                }, t || {}), u({
                    network: u.maybe(u.Object),
                    address: u.maybe(u.String),
                    hash: u.maybe(u.BufferN(20)),
                    output: u.maybe(u.BufferN(23)),
                    redeem: u.maybe({
                        network: u.maybe(u.Object),
                        output: u.maybe(u.Buffer),
                        input: u.maybe(u.Buffer),
                        witness: u.maybe(u.arrayOf(u.Buffer))
                    }),
                    input: u.maybe(u.Buffer),
                    witness: u.maybe(u.arrayOf(u.Buffer))
                }, e);
                let r = e.network;
                r || (r = e.redeem && e.redeem.network || i.bitcoin);
                const p = {
                        network: r
                    },
                    h = o.value(() => {
                        const t = c.decode(e.address);
                        return {
                            version: t.readUInt8(0),
                            hash: t.slice(1)
                        }
                    }),
                    f = o.value(() => s.decompile(e.input)),
                    l = o.value(() => {
                        const t = f();
                        return {
                            network: r,
                            output: t[t.length - 1],
                            input: s.compile(t.slice(0, -1)),
                            witness: e.witness || []
                        }
                    });
                if (o.prop(p, "address", () => {
                        if (!p.hash) return;
                        const e = Buffer.allocUnsafe(21);
                        return e.writeUInt8(p.network.scriptHash, 0), p.hash.copy(e, 1), c.encode(e)
                    }), o.prop(p, "hash", () => e.output ? e.output.slice(2, 22) : e.address ? h().hash : p.redeem && p.redeem.output ? n.hash160(p.redeem.output) : void 0), o.prop(p, "output", () => {
                        if (p.hash) return s.compile([a.OP_HASH160, p.hash, a.OP_EQUAL])
                    }), o.prop(p, "redeem", () => {
                        if (e.input) return l()
                    }), o.prop(p, "input", () => {
                        if (e.redeem && e.redeem.input && e.redeem.output) return s.compile([].concat(s.decompile(e.redeem.input), e.redeem.output))
                    }), o.prop(p, "witness", () => p.redeem && p.redeem.witness ? p.redeem.witness : p.input ? [] : void 0), o.prop(p, "name", () => {
                        const e = ["p2sh"];
                        return void 0 !== p.redeem && e.push(p.redeem.name), e.join("-")
                    }), t.validate) {
                    let t = Buffer.from([]);
                    if (e.address) {
                        if (h().version !== r.scriptHash) throw new TypeError("Invalid version or Network mismatch");
                        if (20 !== h().hash.length) throw new TypeError("Invalid address");
                        t = h().hash
                    }
                    if (e.hash) {
                        if (t.length > 0 && !t.equals(e.hash)) throw new TypeError("Hash mismatch");
                        t = e.hash
                    }
                    if (e.output) {
                        if (23 !== e.output.length || e.output[0] !== a.OP_HASH160 || 20 !== e.output[1] || e.output[22] !== a.OP_EQUAL) throw new TypeError("Output is invalid");
                        const r = e.output.slice(2, 22);
                        if (t.length > 0 && !t.equals(r)) throw new TypeError("Hash mismatch");
                        t = r
                    }
                    const i = e => {
                        if (e.output) {
                            const r = s.decompile(e.output);
                            if (!r || r.length < 1) throw new TypeError("Redeem.output too short");
                            const i = n.hash160(e.output);
                            if (t.length > 0 && !t.equals(i)) throw new TypeError("Hash mismatch");
                            t = i
                        }
                        if (e.input) {
                            const t = e.input.length > 0,
                                r = e.witness && e.witness.length > 0;
                            if (!t && !r) throw new TypeError("Empty input");
                            if (t && r) throw new TypeError("Input and witness provided");
                            if (t) {
                                const t = s.decompile(e.input);
                                if (!s.isPushOnly(t)) throw new TypeError("Non push-only scriptSig")
                            }
                        }
                    };
                    if (e.input) {
                        const e = f();
                        if (!e || e.length < 1) throw new TypeError("Input too short");
                        if (!Buffer.isBuffer(l().output)) throw new TypeError("Input is invalid");
                        i(l())
                    }
                    if (e.redeem) {
                        if (e.redeem.network && e.redeem.network !== r) throw new TypeError("Network mismatch");
                        if (e.input) {
                            const t = l();
                            if (e.redeem.output && !e.redeem.output.equals(t.output)) throw new TypeError("Redeem.output mismatch");
                            if (e.redeem.input && !e.redeem.input.equals(t.input)) throw new TypeError("Redeem.input mismatch")
                        }
                        i(e.redeem)
                    }
                    if (e.witness && e.redeem && e.redeem.witness && ! function(e, t) {
                            return e.length === t.length && e.every((e, r) => e.equals(t[r]))
                        }(e.redeem.witness, e.witness)) throw new TypeError("Witness and redeem.witness mismatch")
                }
                return Object.assign(p, e)
            }
        },
        4169: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            const n = r(271),
                i = r(203),
                s = r(54),
                o = r(354),
                u = r(47),
                a = s.OPS,
                c = r(253),
                p = r(322),
                h = Buffer.alloc(0);
            t.p2wpkh = function(e, t) {
                if (!(e.address || e.hash || e.output || e.pubkey || e.witness)) throw new TypeError("Not enough data");
                t = Object.assign({
                    validate: !0
                }, t || {}), u({
                    address: u.maybe(u.String),
                    hash: u.maybe(u.BufferN(20)),
                    input: u.maybe(u.BufferN(0)),
                    network: u.maybe(u.Object),
                    output: u.maybe(u.BufferN(22)),
                    pubkey: u.maybe(c.isPoint),
                    signature: u.maybe(s.isCanonicalScriptSignature),
                    witness: u.maybe(u.arrayOf(u.Buffer))
                }, e);
                const r = o.value(() => {
                        const t = p.decode(e.address),
                            r = t.words.shift(),
                            n = p.fromWords(t.words);
                        return {
                            version: r,
                            prefix: t.prefix,
                            data: Buffer.from(n)
                        }
                    }),
                    f = e.network || i.bitcoin,
                    l = {
                        name: "p2wpkh",
                        network: f
                    };
                if (o.prop(l, "address", () => {
                        if (!l.hash) return;
                        const e = p.toWords(l.hash);
                        return e.unshift(0), p.encode(f.bech32, e)
                    }), o.prop(l, "hash", () => e.output ? e.output.slice(2, 22) : e.address ? r().data : e.pubkey || l.pubkey ? n.hash160(e.pubkey || l.pubkey) : void 0), o.prop(l, "output", () => {
                        if (l.hash) return s.compile([a.OP_0, l.hash])
                    }), o.prop(l, "pubkey", () => e.pubkey ? e.pubkey : e.witness ? e.witness[1] : void 0), o.prop(l, "signature", () => {
                        if (e.witness) return e.witness[0]
                    }), o.prop(l, "input", () => {
                        if (l.witness) return h
                    }), o.prop(l, "witness", () => {
                        if (e.pubkey && e.signature) return [e.signature, e.pubkey]
                    }), t.validate) {
                    let t = Buffer.from([]);
                    if (e.address) {
                        if (f && f.bech32 !== r().prefix) throw new TypeError("Invalid prefix or Network mismatch");
                        if (0 !== r().version) throw new TypeError("Invalid address version");
                        if (20 !== r().data.length) throw new TypeError("Invalid address data");
                        t = r().data
                    }
                    if (e.hash) {
                        if (t.length > 0 && !t.equals(e.hash)) throw new TypeError("Hash mismatch");
                        t = e.hash
                    }
                    if (e.output) {
                        if (22 !== e.output.length || e.output[0] !== a.OP_0 || 20 !== e.output[1]) throw new TypeError("Output is invalid");
                        if (t.length > 0 && !t.equals(e.output.slice(2))) throw new TypeError("Hash mismatch");
                        t = e.output.slice(2)
                    }
                    if (e.pubkey) {
                        const r = n.hash160(e.pubkey);
                        if (t.length > 0 && !t.equals(r)) throw new TypeError("Hash mismatch");
                        if (t = r, !c.isPoint(e.pubkey) || 33 !== e.pubkey.length) throw new TypeError("Invalid pubkey for p2wpkh")
                    }
                    if (e.witness) {
                        if (2 !== e.witness.length) throw new TypeError("Witness is invalid");
                        if (!s.isCanonicalScriptSignature(e.witness[0])) throw new TypeError("Witness has invalid signature");
                        if (!c.isPoint(e.witness[1]) || 33 !== e.witness[1].length) throw new TypeError("Witness has invalid pubkey");
                        if (e.signature && !e.signature.equals(e.witness[0])) throw new TypeError("Signature mismatch");
                        if (e.pubkey && !e.pubkey.equals(e.witness[1])) throw new TypeError("Pubkey mismatch");
                        const r = n.hash160(e.witness[1]);
                        if (t.length > 0 && !t.equals(r)) throw new TypeError("Hash mismatch")
                    }
                }
                return Object.assign(l, e)
            }
        },
        4170: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            const n = r(271),
                i = r(203),
                s = r(54),
                o = r(354),
                u = r(47),
                a = s.OPS,
                c = r(253),
                p = r(322),
                h = Buffer.alloc(0);

            function f(e) {
                return !(!Buffer.isBuffer(e) || 65 !== e.length || 4 !== e[0] || !c.isPoint(e))
            }
            t.p2wsh = function(e, t) {
                if (!(e.address || e.hash || e.output || e.redeem || e.witness)) throw new TypeError("Not enough data");
                t = Object.assign({
                    validate: !0
                }, t || {}), u({
                    network: u.maybe(u.Object),
                    address: u.maybe(u.String),
                    hash: u.maybe(u.BufferN(32)),
                    output: u.maybe(u.BufferN(34)),
                    redeem: u.maybe({
                        input: u.maybe(u.Buffer),
                        network: u.maybe(u.Object),
                        output: u.maybe(u.Buffer),
                        witness: u.maybe(u.arrayOf(u.Buffer))
                    }),
                    input: u.maybe(u.BufferN(0)),
                    witness: u.maybe(u.arrayOf(u.Buffer))
                }, e);
                const r = o.value(() => {
                        const t = p.decode(e.address),
                            r = t.words.shift(),
                            n = p.fromWords(t.words);
                        return {
                            version: r,
                            prefix: t.prefix,
                            data: Buffer.from(n)
                        }
                    }),
                    c = o.value(() => s.decompile(e.redeem.input));
                let l = e.network;
                l || (l = e.redeem && e.redeem.network || i.bitcoin);
                const d = {
                    network: l
                };
                if (o.prop(d, "address", () => {
                        if (!d.hash) return;
                        const e = p.toWords(d.hash);
                        return e.unshift(0), p.encode(l.bech32, e)
                    }), o.prop(d, "hash", () => e.output ? e.output.slice(2) : e.address ? r().data : d.redeem && d.redeem.output ? n.sha256(d.redeem.output) : void 0), o.prop(d, "output", () => {
                        if (d.hash) return s.compile([a.OP_0, d.hash])
                    }), o.prop(d, "redeem", () => {
                        if (e.witness) return {
                            output: e.witness[e.witness.length - 1],
                            input: h,
                            witness: e.witness.slice(0, -1)
                        }
                    }), o.prop(d, "input", () => {
                        if (d.witness) return h
                    }), o.prop(d, "witness", () => {
                        if (e.redeem && e.redeem.input && e.redeem.input.length > 0 && e.redeem.output && e.redeem.output.length > 0) {
                            const t = s.toStack(c());
                            return d.redeem = Object.assign({
                                witness: t
                            }, e.redeem), d.redeem.input = h, [].concat(t, e.redeem.output)
                        }
                        if (e.redeem && e.redeem.output && e.redeem.witness) return [].concat(e.redeem.witness, e.redeem.output)
                    }), o.prop(d, "name", () => {
                        const e = ["p2wsh"];
                        return void 0 !== d.redeem && e.push(d.redeem.name), e.join("-")
                    }), t.validate) {
                    let t = Buffer.from([]);
                    if (e.address) {
                        if (r().prefix !== l.bech32) throw new TypeError("Invalid prefix or Network mismatch");
                        if (0 !== r().version) throw new TypeError("Invalid address version");
                        if (32 !== r().data.length) throw new TypeError("Invalid address data");
                        t = r().data
                    }
                    if (e.hash) {
                        if (t.length > 0 && !t.equals(e.hash)) throw new TypeError("Hash mismatch");
                        t = e.hash
                    }
                    if (e.output) {
                        if (34 !== e.output.length || e.output[0] !== a.OP_0 || 32 !== e.output[1]) throw new TypeError("Output is invalid");
                        const r = e.output.slice(2);
                        if (t.length > 0 && !t.equals(r)) throw new TypeError("Hash mismatch");
                        t = r
                    }
                    if (e.redeem) {
                        if (e.redeem.network && e.redeem.network !== l) throw new TypeError("Network mismatch");
                        if (e.redeem.input && e.redeem.input.length > 0 && e.redeem.witness && e.redeem.witness.length > 0) throw new TypeError("Ambiguous witness source");
                        if (e.redeem.output) {
                            if (0 === s.decompile(e.redeem.output).length) throw new TypeError("Redeem.output is invalid");
                            const r = n.sha256(e.redeem.output);
                            if (t.length > 0 && !t.equals(r)) throw new TypeError("Hash mismatch");
                            t = r
                        }
                        if (e.redeem.input && !s.isPushOnly(c())) throw new TypeError("Non push-only scriptSig");
                        if (e.witness && e.redeem.witness && ! function(e, t) {
                                return e.length === t.length && e.every((e, r) => e.equals(t[r]))
                            }(e.witness, e.redeem.witness)) throw new TypeError("Witness and redeem.witness mismatch");
                        if (e.redeem.input && c().some(f) || e.redeem.output && (s.decompile(e.redeem.output) || []).some(f)) throw new TypeError("redeem.input or redeem.output contains uncompressed pubkey")
                    }
                    if (e.witness && e.witness.length > 0) {
                        const t = e.witness[e.witness.length - 1];
                        if (e.redeem && e.redeem.output && !e.redeem.output.equals(t)) throw new TypeError("Witness and redeem.output mismatch");
                        if (e.witness.some(f) || (s.decompile(t) || []).some(f)) throw new TypeError("Witness contains uncompressed pubkey")
                    }
                }
                return Object.assign(d, e)
            }
        },
        4171: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            const n = r(668),
                i = r(271),
                s = r(669),
                o = r(245),
                u = r(1391),
                a = r(47),
                c = r(369),
                p = new TypeError("Cannot compute merkle root for zero transactions"),
                h = new TypeError("Cannot compute witness commit for non-segwit block");
            class Block {
                constructor() {
                    this.version = 1, this.prevHash = void 0, this.merkleRoot = void 0, this.timestamp = 0, this.witnessCommit = void 0, this.bits = 0, this.nonce = 0, this.transactions = void 0
                }
                static fromBuffer(e) {
                    if (e.length < 80) throw new Error("Buffer too small (< 80 bytes)");
                    const t = new n.BufferReader(e),
                        r = new Block;
                    if (r.version = t.readInt32(), r.prevHash = t.readSlice(32), r.merkleRoot = t.readSlice(32), r.timestamp = t.readUInt32(), r.bits = t.readUInt32(), r.nonce = t.readUInt32(), 80 === e.length) return r;
                    const i = () => {
                            const e = s.Transaction.fromBuffer(t.buffer.slice(t.offset), !0);
                            return t.offset += e.byteLength(), e
                        },
                        o = t.readVarInt();
                    r.transactions = [];
                    for (let e = 0; e < o; ++e) {
                        const e = i();
                        r.transactions.push(e)
                    }
                    const u = r.getWitnessCommit();
                    return u && (r.witnessCommit = u), r
                }
                static fromHex(e) {
                    return Block.fromBuffer(Buffer.from(e, "hex"))
                }
                static calculateTarget(e) {
                    const t = ((4278190080 & e) >> 24) - 3,
                        r = 8388607 & e,
                        n = Buffer.alloc(32, 0);
                    return n.writeUIntBE(r, 29 - t, 3), n
                }
                static calculateMerkleRoot(e, t) {
                    if (a([{
                            getHash: o.Function
                        }], e), 0 === e.length) throw p;
                    if (t && !f(e)) throw h;
                    const r = e.map(e => e.getHash(t)),
                        n = u(r, i.hash256);
                    return t ? i.hash256(Buffer.concat([n, e[0].ins[0].witness[0]])) : n
                }
                getWitnessCommit() {
                    if (!f(this.transactions)) return null;
                    const e = this.transactions[0].outs.filter(e => e.script.slice(0, 6).equals(Buffer.from("6a24aa21a9ed", "hex"))).map(e => e.script.slice(6, 38));
                    if (0 === e.length) return null;
                    const t = e[e.length - 1];
                    return t instanceof Buffer && 32 === t.length ? t : null
                }
                hasWitnessCommit() {
                    return this.witnessCommit instanceof Buffer && 32 === this.witnessCommit.length || null !== this.getWitnessCommit()
                }
                hasWitness() {
                    return (e = this.transactions) instanceof Array && e.some(e => "object" == typeof e && e.ins instanceof Array && e.ins.some(e => "object" == typeof e && e.witness instanceof Array && e.witness.length > 0));
                    var e
                }
                weight() {
                    return 3 * this.byteLength(!1, !1) + this.byteLength(!1, !0)
                }
                byteLength(e, t = !0) {
                    return e || !this.transactions ? 80 : 80 + c.encodingLength(this.transactions.length) + this.transactions.reduce((e, r) => e + r.byteLength(t), 0)
                }
                getHash() {
                    return i.hash256(this.toBuffer(!0))
                }
                getId() {
                    return n.reverseBuffer(this.getHash()).toString("hex")
                }
                getUTCDate() {
                    const e = new Date(0);
                    return e.setUTCSeconds(this.timestamp), e
                }
                toBuffer(e) {
                    const t = Buffer.allocUnsafe(this.byteLength(e)),
                        r = new n.BufferWriter(t);
                    return r.writeInt32(this.version), r.writeSlice(this.prevHash), r.writeSlice(this.merkleRoot), r.writeUInt32(this.timestamp), r.writeUInt32(this.bits), r.writeUInt32(this.nonce), e || !this.transactions || (c.encode(this.transactions.length, t, r.offset), r.offset += c.encode.bytes, this.transactions.forEach(e => {
                        const n = e.byteLength();
                        e.toBuffer(t, r.offset), r.offset += n
                    })), t
                }
                toHex(e) {
                    return this.toBuffer(e).toString("hex")
                }
                checkTxRoots() {
                    const e = this.hasWitnessCommit();
                    return !(!e && this.hasWitness()) && (this.__checkMerkleRoot() && (!e || this.__checkWitnessCommit()))
                }
                checkProofOfWork() {
                    const e = n.reverseBuffer(this.getHash()),
                        t = Block.calculateTarget(this.bits);
                    return e.compare(t) <= 0
                }
                __checkMerkleRoot() {
                    if (!this.transactions) throw p;
                    const e = Block.calculateMerkleRoot(this.transactions);
                    return 0 === this.merkleRoot.compare(e)
                }
                __checkWitnessCommit() {
                    if (!this.transactions) throw p;
                    if (!this.hasWitnessCommit()) throw h;
                    const e = Block.calculateMerkleRoot(this.transactions, !0);
                    return 0 === this.witnessCommit.compare(e)
                }
            }

            function f(e) {
                return e instanceof Array && e[0] && e[0].ins && e[0].ins instanceof Array && e[0].ins[0] && e[0].ins[0].witness && e[0].ins[0].witness instanceof Array && e[0].ins[0].witness.length > 0
            }
            t.Block = Block
        },
        4172: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            const n = r(4173),
                i = r(432),
                s = r(2012),
                o = r(1132),
                u = r(668),
                a = r(271),
                c = r(1133),
                p = r(203),
                h = r(667),
                f = r(54),
                l = r(669),
                d = {
                    network: p.bitcoin,
                    maximumFeeRate: 5e3
                };
            class Psbt {
                constructor(e = {}, t = new n.Psbt(new PsbtTransaction)) {
                    this.data = t, this.opts = Object.assign({}, d, e), this.__CACHE = {
                        __NON_WITNESS_UTXO_TX_CACHE: [],
                        __NON_WITNESS_UTXO_BUF_CACHE: [],
                        __TX_IN_CACHE: {},
                        __TX: this.data.globalMap.unsignedTx.tx,
                        __UNSAFE_SIGN_NONSEGWIT: !1
                    }, 0 === this.data.inputs.length && this.setVersion(2);
                    const r = (e, t, r, n) => Object.defineProperty(e, t, {
                        enumerable: r,
                        writable: n
                    });
                    r(this, "__CACHE", !1, !0), r(this, "opts", !1, !0)
                }
                static fromBase64(e, t = {}) {
                    const r = Buffer.from(e, "base64");
                    return this.fromBuffer(r, t)
                }
                static fromHex(e, t = {}) {
                    const r = Buffer.from(e, "hex");
                    return this.fromBuffer(r, t)
                }
                static fromBuffer(e, t = {}) {
                    const r = n.Psbt.fromBuffer(e, w),
                        i = new Psbt(t, r);
                    var s, o;
                    return s = i.__CACHE.__TX, o = i.__CACHE, s.ins.forEach(e => {
                        N(o, e)
                    }), i
                }
                get inputCount() {
                    return this.data.inputs.length
                }
                get version() {
                    return this.__CACHE.__TX.version
                }
                set version(e) {
                    this.setVersion(e)
                }
                get locktime() {
                    return this.__CACHE.__TX.locktime
                }
                set locktime(e) {
                    this.setLocktime(e)
                }
                get txInputs() {
                    return this.__CACHE.__TX.ins.map(e => ({
                        hash: u.cloneBuffer(e.hash),
                        index: e.index,
                        sequence: e.sequence
                    }))
                }
                get txOutputs() {
                    return this.__CACHE.__TX.outs.map(e => {
                        let t;
                        try {
                            t = o.fromOutputScript(e.script, this.opts.network)
                        } catch (e) {}
                        return {
                            script: u.cloneBuffer(e.script),
                            value: e.value,
                            address: t
                        }
                    })
                }
                combine(...e) {
                    return this.data.combine(...e.map(e => e.data)), this
                }
                clone() {
                    const e = Psbt.fromBuffer(this.data.toBuffer());
                    return e.opts = JSON.parse(JSON.stringify(this.opts)), e
                }
                setMaximumFeeRate(e) {
                    k(e), this.opts.maximumFeeRate = e
                }
                setVersion(e) {
                    k(e), I(this.data.inputs, "setVersion");
                    const t = this.__CACHE;
                    return t.__TX.version = e, t.__EXTRACTED_TX = void 0, this
                }
                setLocktime(e) {
                    k(e), I(this.data.inputs, "setLocktime");
                    const t = this.__CACHE;
                    return t.__TX.locktime = e, t.__EXTRACTED_TX = void 0, this
                }
                setInputSequence(e, t) {
                    k(t), I(this.data.inputs, "setInputSequence");
                    const r = this.__CACHE;
                    if (r.__TX.ins.length <= e) throw new Error("Input index too high");
                    return r.__TX.ins[e].sequence = t, r.__EXTRACTED_TX = void 0, this
                }
                addInputs(e) {
                    return e.forEach(e => this.addInput(e)), this
                }
                addInput(e) {
                    if (arguments.length > 1 || !e || void 0 === e.hash || void 0 === e.index) throw new Error("Invalid arguments for Psbt.addInput. Requires single object with at least [hash] and [index]");
                    I(this.data.inputs, "addInput"), e.witnessScript && X(e.witnessScript);
                    const t = this.__CACHE;
                    this.data.addInput(e);
                    N(t, t.__TX.ins[t.__TX.ins.length - 1]);
                    const r = this.data.inputs.length - 1,
                        n = this.data.inputs[r];
                    return n.nonWitnessUtxo && M(this.__CACHE, n, r), t.__FEE = void 0, t.__FEE_RATE = void 0, t.__EXTRACTED_TX = void 0, this
                }
                addOutputs(e) {
                    return e.forEach(e => this.addOutput(e)), this
                }
                addOutput(e) {
                    if (arguments.length > 1 || !e || void 0 === e.value || void 0 === e.address && void 0 === e.script) throw new Error("Invalid arguments for Psbt.addOutput. Requires single object with at least [script or address] and [value]");
                    I(this.data.inputs, "addOutput");
                    const {
                        address: t
                    } = e;
                    if ("string" == typeof t) {
                        const {
                            network: r
                        } = this.opts, n = o.toOutputScript(t, r);
                        e = Object.assign(e, {
                            script: n
                        })
                    }
                    const r = this.__CACHE;
                    return this.data.addOutput(e), r.__FEE = void 0, r.__FEE_RATE = void 0, r.__EXTRACTED_TX = void 0, this
                }
                extractTransaction(e) {
                    if (!this.data.inputs.every(g)) throw new Error("Not finalized");
                    const t = this.__CACHE;
                    if (e || function(e, t, r) {
                            const n = t.__FEE_RATE || e.getFeeRate(),
                                i = t.__EXTRACTED_TX.virtualSize(),
                                s = n * i;
                            if (n >= r.maximumFeeRate) throw new Error(`Warning: You are paying around ${(s/1e8).toFixed(8)} in fees, which is ${n} satoshi per byte for a transaction with a VSize of ${i} bytes (segwit counted as 0.25 byte per byte). Use setMaximumFeeRate method to raise your threshold, or pass true to the first arg of extractTransaction.`)
                        }(this, t, this.opts), t.__EXTRACTED_TX) return t.__EXTRACTED_TX;
                    const r = t.__TX.clone();
                    return G(this.data.inputs, r, t, !0), r
                }
                getFeeRate() {
                    return C("__FEE_RATE", "fee rate", this.data.inputs, this.__CACHE)
                }
                getFee() {
                    return C("__FEE", "fee", this.data.inputs, this.__CACHE)
                }
                finalizeAllInputs() {
                    return s.checkForInput(this.data.inputs, 0), J(this.data.inputs.length).forEach(e => this.finalizeInput(e)), this
                }
                finalizeInput(e, t = x) {
                    const r = s.checkForInput(this.data.inputs, e),
                        {
                            script: n,
                            isP2SH: i,
                            isP2WSH: o,
                            isSegwit: u
                        } = function(e, t, r) {
                            const n = r.__TX,
                                i = {
                                    script: null,
                                    isSegwit: !1,
                                    isP2SH: !1,
                                    isP2WSH: !1
                                };
                            if (i.isP2SH = !!t.redeemScript, i.isP2WSH = !!t.witnessScript, t.witnessScript) i.script = t.witnessScript;
                            else if (t.redeemScript) i.script = t.redeemScript;
                            else if (t.nonWitnessUtxo) {
                                const s = F(r, t, e),
                                    o = n.ins[e].index;
                                i.script = s.outs[o].script
                            } else t.witnessUtxo && (i.script = t.witnessUtxo.script);
                            (t.witnessScript || E(i.script)) && (i.isSegwit = !0);
                            return i
                        }(e, r, this.__CACHE);
                    if (!n) throw new Error("No script found for input #" + e);
                    ! function(e) {
                        if (!e.sighashType || !e.partialSig) return;
                        const {
                            partialSig: t,
                            sighashType: r
                        } = e;
                        t.forEach(e => {
                            const {
                                hashType: t
                            } = f.signature.decode(e.signature);
                            if (r !== t) throw new Error("Signature sighash does not match input sighash type")
                        })
                    }(r);
                    const {
                        finalScriptSig: a,
                        finalScriptWitness: c
                    } = t(e, r, n, u, i, o);
                    if (a && this.data.updateInput(e, {
                            finalScriptSig: a
                        }), c && this.data.updateInput(e, {
                            finalScriptWitness: c
                        }), !a && !c) throw new Error("Unknown error finalizing input #" + e);
                    return this.data.clearFinalizedInput(e), this
                }
                getInputType(e) {
                    const t = s.checkForInput(this.data.inputs, e),
                        r = j(q(e, t, this.__CACHE), e, "input", t.redeemScript || function(e) {
                            if (!e) return;
                            const t = f.decompile(e);
                            if (!t) return;
                            const r = t[t.length - 1];
                            if (!Buffer.isBuffer(r) || V(r) || (n = r, f.isCanonicalScriptSignature(n))) return;
                            var n;
                            if (!f.decompile(r)) return;
                            return r
                        }(t.finalScriptSig), t.witnessScript || function(e) {
                            if (!e) return;
                            const t = W(e),
                                r = t[t.length - 1];
                            if (V(r)) return;
                            if (!f.decompile(r)) return;
                            return r
                        }(t.finalScriptWitness));
                    return ("raw" === r.type ? "" : r.type + "-") + Q(r.meaningfulScript)
                }
                inputHasPubkey(e, t) {
                    return function(e, t, r, n) {
                        const i = q(r, t, n),
                            {
                                meaningfulScript: s
                            } = j(i, r, "input", t.redeemScript, t.witnessScript);
                        return Y(e, s)
                    }(t, s.checkForInput(this.data.inputs, e), e, this.__CACHE)
                }
                inputHasHDKey(e, t) {
                    const r = s.checkForInput(this.data.inputs, e),
                        n = T(t);
                    return !!r.bip32Derivation && r.bip32Derivation.some(n)
                }
                outputHasPubkey(e, t) {
                    return function(e, t, r, n) {
                        const i = n.__TX.outs[r].script,
                            {
                                meaningfulScript: s
                            } = j(i, r, "output", t.redeemScript, t.witnessScript);
                        return Y(e, s)
                    }(t, s.checkForOutput(this.data.outputs, e), e, this.__CACHE)
                }
                outputHasHDKey(e, t) {
                    const r = s.checkForOutput(this.data.outputs, e),
                        n = T(t);
                    return !!r.bip32Derivation && r.bip32Derivation.some(n)
                }
                validateSignaturesOfAllInputs() {
                    s.checkForInput(this.data.inputs, 0);
                    return J(this.data.inputs.length).map(e => this.validateSignaturesOfInput(e)).reduce((e, t) => !0 === t && e, !0)
                }
                validateSignaturesOfInput(e, t) {
                    const r = this.data.inputs[e],
                        n = (r || {}).partialSig;
                    if (!r || !n || n.length < 1) throw new Error("No signatures to validate");
                    const i = t ? n.filter(e => e.pubkey.equals(t)) : n;
                    if (i.length < 1) throw new Error("No signatures for this pubkey");
                    const s = [];
                    let o, u, a;
                    for (const t of i) {
                        const n = f.signature.decode(t.signature),
                            {
                                hash: i,
                                script: p
                            } = a !== n.hashType ? R(e, Object.assign({}, r, {
                                sighashType: n.hashType
                            }), this.__CACHE, !0) : {
                                hash: o,
                                script: u
                            };
                        a = n.hashType, o = i, u = p, H(t.pubkey, p, "verify");
                        const h = c.fromPublicKey(t.pubkey);
                        s.push(h.verify(i, n.signature))
                    }
                    return s.every(e => !0 === e)
                }
                signAllInputsHD(e, t = [l.Transaction.SIGHASH_ALL]) {
                    if (!e || !e.publicKey || !e.fingerprint) throw new Error("Need HDSigner to sign input");
                    const r = [];
                    for (const n of J(this.data.inputs.length)) try {
                        this.signInputHD(n, e, t), r.push(!0)
                    } catch (e) {
                        r.push(!1)
                    }
                    if (r.every(e => !1 === e)) throw new Error("No inputs were signed");
                    return this
                }
                signAllInputsHDAsync(e, t = [l.Transaction.SIGHASH_ALL]) {
                    return new Promise((r, n) => {
                        if (!e || !e.publicKey || !e.fingerprint) return n(new Error("Need HDSigner to sign input"));
                        const i = [],
                            s = [];
                        for (const r of J(this.data.inputs.length)) s.push(this.signInputHDAsync(r, e, t).then(() => {
                            i.push(!0)
                        }, () => {
                            i.push(!1)
                        }));
                        return Promise.all(s).then(() => {
                            if (i.every(e => !1 === e)) return n(new Error("No inputs were signed"));
                            r()
                        })
                    })
                }
                signInputHD(e, t, r = [l.Transaction.SIGHASH_ALL]) {
                    if (!t || !t.publicKey || !t.fingerprint) throw new Error("Need HDSigner to sign input");
                    return L(e, this.data.inputs, t).forEach(t => this.signInput(e, t, r)), this
                }
                signInputHDAsync(e, t, r = [l.Transaction.SIGHASH_ALL]) {
                    return new Promise((n, i) => {
                        if (!t || !t.publicKey || !t.fingerprint) return i(new Error("Need HDSigner to sign input"));
                        const s = L(e, this.data.inputs, t).map(t => this.signInputAsync(e, t, r));
                        return Promise.all(s).then(() => {
                            n()
                        }).catch(i)
                    })
                }
                signAllInputs(e, t = [l.Transaction.SIGHASH_ALL]) {
                    if (!e || !e.publicKey) throw new Error("Need Signer to sign input");
                    const r = [];
                    for (const n of J(this.data.inputs.length)) try {
                        this.signInput(n, e, t), r.push(!0)
                    } catch (e) {
                        r.push(!1)
                    }
                    if (r.every(e => !1 === e)) throw new Error("No inputs were signed");
                    return this
                }
                signAllInputsAsync(e, t = [l.Transaction.SIGHASH_ALL]) {
                    return new Promise((r, n) => {
                        if (!e || !e.publicKey) return n(new Error("Need Signer to sign input"));
                        const i = [],
                            s = [];
                        for (const [r] of this.data.inputs.entries()) s.push(this.signInputAsync(r, e, t).then(() => {
                            i.push(!0)
                        }, () => {
                            i.push(!1)
                        }));
                        return Promise.all(s).then(() => {
                            if (i.every(e => !1 === e)) return n(new Error("No inputs were signed"));
                            r()
                        })
                    })
                }
                signInput(e, t, r = [l.Transaction.SIGHASH_ALL]) {
                    if (!t || !t.publicKey) throw new Error("Need Signer to sign input");
                    const {
                        hash: n,
                        sighashType: i
                    } = K(this.data.inputs, e, t.publicKey, this.__CACHE, r), s = [{
                        pubkey: t.publicKey,
                        signature: f.signature.encode(t.sign(n), i)
                    }];
                    return this.data.updateInput(e, {
                        partialSig: s
                    }), this
                }
                signInputAsync(e, t, r = [l.Transaction.SIGHASH_ALL]) {
                    return Promise.resolve().then(() => {
                        if (!t || !t.publicKey) throw new Error("Need Signer to sign input");
                        const {
                            hash: n,
                            sighashType: i
                        } = K(this.data.inputs, e, t.publicKey, this.__CACHE, r);
                        return Promise.resolve(t.sign(n)).then(r => {
                            const n = [{
                                pubkey: t.publicKey,
                                signature: f.signature.encode(r, i)
                            }];
                            this.data.updateInput(e, {
                                partialSig: n
                            })
                        })
                    })
                }
                toBuffer() {
                    return y(this.__CACHE), this.data.toBuffer()
                }
                toHex() {
                    return y(this.__CACHE), this.data.toHex()
                }
                toBase64() {
                    return y(this.__CACHE), this.data.toBase64()
                }
                updateGlobal(e) {
                    return this.data.updateGlobal(e), this
                }
                updateInput(e, t) {
                    return t.witnessScript && X(t.witnessScript), this.data.updateInput(e, t), t.nonWitnessUtxo && M(this.__CACHE, this.data.inputs[e], e), this
                }
                updateOutput(e, t) {
                    return this.data.updateOutput(e, t), this
                }
                addUnknownKeyValToGlobal(e) {
                    return this.data.addUnknownKeyValToGlobal(e), this
                }
                addUnknownKeyValToInput(e, t) {
                    return this.data.addUnknownKeyValToInput(e, t), this
                }
                addUnknownKeyValToOutput(e, t) {
                    return this.data.addUnknownKeyValToOutput(e, t), this
                }
                clearFinalizedInput(e) {
                    return this.data.clearFinalizedInput(e), this
                }
            }
            t.Psbt = Psbt;
            const w = e => new PsbtTransaction(e);
            class PsbtTransaction {
                constructor(e = Buffer.from([2, 0, 0, 0, 0, 0, 0, 0, 0, 0])) {
                    this.tx = l.Transaction.fromBuffer(e),
                        function(e) {
                            if (!e.ins.every(e => e.script && 0 === e.script.length && e.witness && 0 === e.witness.length)) throw new Error("Format Error: Transaction ScriptSigs are not empty")
                        }(this.tx), Object.defineProperty(this, "tx", {
                            enumerable: !1,
                            writable: !0
                        })
                }
                getInputOutputCounts() {
                    return {
                        inputCount: this.tx.ins.length,
                        outputCount: this.tx.outs.length
                    }
                }
                addInput(e) {
                    if (void 0 === e.hash || void 0 === e.index || !Buffer.isBuffer(e.hash) && "string" != typeof e.hash || "number" != typeof e.index) throw new Error("Error adding input.");
                    const t = "string" == typeof e.hash ? u.reverseBuffer(Buffer.from(e.hash, "hex")) : e.hash;
                    this.tx.addInput(t, e.index, e.sequence)
                }
                addOutput(e) {
                    if (void 0 === e.script || void 0 === e.value || !Buffer.isBuffer(e.script) || "number" != typeof e.value) throw new Error("Error adding output.");
                    this.tx.addOutput(e.script, e.value)
                }
                toBuffer() {
                    return this.tx.toBuffer()
                }
            }

            function y(e) {
                if (!1 !== e.__UNSAFE_SIGN_NONSEGWIT) throw new Error("Not BIP174 compliant, can not export")
            }

            function m(e, t, r) {
                if (!t) return !1;
                let n;
                if (n = r ? r.map(e => {
                        const r = c.fromPublicKey(e, {
                            compressed: !0
                        }).publicKey;
                        return t.find(e => e.pubkey.equals(r))
                    }).filter(e => !!e) : t, n.length > e) throw new Error("Too many signatures");
                return n.length === e
            }

            function g(e) {
                return !!e.finalScriptSig || !!e.finalScriptWitness
            }

            function S(e) {
                return t => {
                    try {
                        return e({
                            output: t
                        }), !0
                    } catch (e) {
                        return !1
                    }
                }
            }
            const v = S(h.p2ms),
                _ = S(h.p2pk),
                b = S(h.p2pkh),
                E = S(h.p2wpkh),
                P = S(h.p2wsh),
                O = S(h.p2sh);

            function T(e) {
                return t => !!t.masterFingerprint.equals(e.fingerprint) && !!e.derivePath(t.path).publicKey.equals(t.pubkey)
            }

            function k(e) {
                if ("number" != typeof e || e !== Math.floor(e) || e > 4294967295 || e < 0) throw new Error("Invalid 32 bit integer")
            }

            function I(e, t) {
                e.forEach(e => {
                    let r = !1,
                        n = [];
                    if (0 === (e.partialSig || []).length) {
                        if (!e.finalScriptSig && !e.finalScriptWitness) return;
                        n = function(e) {
                            const t = e.finalScriptSig && f.decompile(e.finalScriptSig) || [],
                                r = e.finalScriptWitness && f.decompile(e.finalScriptWitness) || [];
                            return t.concat(r).filter(e => Buffer.isBuffer(e) && f.isCanonicalScriptSignature(e)).map(e => ({
                                signature: e
                            }))
                        }(e)
                    } else n = e.partialSig;
                    if (n.forEach(e => {
                            const {
                                hashType: n
                            } = f.signature.decode(e.signature), i = [];
                            n & l.Transaction.SIGHASH_ANYONECANPAY && i.push("addInput");
                            switch (31 & n) {
                                case l.Transaction.SIGHASH_ALL:
                                    break;
                                case l.Transaction.SIGHASH_SINGLE:
                                case l.Transaction.SIGHASH_NONE:
                                    i.push("addOutput"), i.push("setInputSequence")
                            } - 1 === i.indexOf(t) && (r = !0)
                        }), r) throw new Error("Can not modify transaction, signatures exist.")
                })
            }

            function H(e, t, r) {
                if (!Y(e, t)) throw new Error(`Can not ${r} for this input with the key ${e.toString("hex")}`)
            }

            function N(e, t) {
                const r = u.reverseBuffer(Buffer.from(t.hash)).toString("hex") + ":" + t.index;
                if (e.__TX_IN_CACHE[r]) throw new Error("Duplicate input detected.");
                e.__TX_IN_CACHE[r] = 1
            }

            function A(e, t) {
                return (r, n, i, s) => {
                    const o = e({
                        redeem: {
                            output: i
                        }
                    }).output;
                    if (!n.equals(o)) throw new Error(`${t} for ${s} #${r} doesn't match the scriptPubKey in the prevout`)
                }
            }
            const B = A(h.p2sh, "Redeem script"),
                U = A(h.p2wsh, "Witness script");

            function C(e, t, r, n) {
                if (!r.every(g)) throw new Error("PSBT must be finalized to calculate " + t);
                if ("__FEE_RATE" === e && n.__FEE_RATE) return n.__FEE_RATE;
                if ("__FEE" === e && n.__FEE) return n.__FEE;
                let i, s = !0;
                return n.__EXTRACTED_TX ? (i = n.__EXTRACTED_TX, s = !1) : i = n.__TX.clone(), G(r, i, n, s), "__FEE_RATE" === e ? n.__FEE_RATE : "__FEE" === e ? n.__FEE : void 0
            }

            function x(e, t, r, n, i, s) {
                const o = Q(r);
                if (! function(e, t, r) {
                        switch (r) {
                            case "pubkey":
                            case "pubkeyhash":
                            case "witnesspubkeyhash":
                                return m(1, e.partialSig);
                            case "multisig":
                                const r = h.p2ms({
                                    output: t
                                });
                                return m(r.m, e.partialSig, r.pubkeys);
                            default:
                                return !1
                        }
                    }(t, r, o)) throw new Error("Can not finalize input #" + e);
                return function(e, t, r, n, i, s) {
                    let o, u;
                    const a = function(e, t, r) {
                            let n;
                            switch (t) {
                                case "multisig":
                                    const t = function(e, t) {
                                        return h.p2ms({
                                            output: e
                                        }).pubkeys.map(e => (t.filter(t => t.pubkey.equals(e))[0] || {}).signature).filter(e => !!e)
                                    }(e, r);
                                    n = h.p2ms({
                                        output: e,
                                        signatures: t
                                    });
                                    break;
                                case "pubkey":
                                    n = h.p2pk({
                                        output: e,
                                        signature: r[0].signature
                                    });
                                    break;
                                case "pubkeyhash":
                                    n = h.p2pkh({
                                        output: e,
                                        pubkey: r[0].pubkey,
                                        signature: r[0].signature
                                    });
                                    break;
                                case "witnesspubkeyhash":
                                    n = h.p2wpkh({
                                        output: e,
                                        pubkey: r[0].pubkey,
                                        signature: r[0].signature
                                    })
                            }
                            return n
                        }(e, t, r),
                        c = s ? h.p2wsh({
                            redeem: a
                        }) : null,
                        p = i ? h.p2sh({
                            redeem: c || a
                        }) : null;
                    n ? (u = D(c ? c.witness : a.witness), p && (o = p.input)) : o = p ? p.input : a.input;
                    return {
                        finalScriptSig: o,
                        finalScriptWitness: u
                    }
                }(r, o, t.partialSig, n, i, s)
            }

            function K(e, t, r, n, i) {
                const o = s.checkForInput(e, t),
                    {
                        hash: u,
                        sighashType: a,
                        script: c
                    } = R(t, o, n, !1, i);
                return H(r, c, "sign"), {
                    hash: u,
                    sighashType: a
                }
            }

            function R(e, t, r, n, i) {
                const s = r.__TX,
                    o = t.sighashType || l.Transaction.SIGHASH_ALL;
                if (i && i.indexOf(o) < 0) {
                    const e = function(e) {
                        let t = e & l.Transaction.SIGHASH_ANYONECANPAY ? "SIGHASH_ANYONECANPAY | " : "";
                        switch (31 & e) {
                            case l.Transaction.SIGHASH_ALL:
                                t += "SIGHASH_ALL";
                                break;
                            case l.Transaction.SIGHASH_SINGLE:
                                t += "SIGHASH_SINGLE";
                                break;
                            case l.Transaction.SIGHASH_NONE:
                                t += "SIGHASH_NONE"
                        }
                        return t
                    }(o);
                    throw new Error("Sighash type is not allowed. Retry the sign method passing the sighashTypes array of whitelisted types. Sighash type: " + e)
                }
                let u, a;
                if (t.nonWitnessUtxo) {
                    const n = F(r, t, e),
                        i = s.ins[e].hash,
                        o = n.getHash();
                    if (!i.equals(o)) throw new Error(`Non-witness UTXO hash for input #${e} doesn't match the hash specified in the prevout`);
                    const u = s.ins[e].index;
                    a = n.outs[u]
                } else {
                    if (!t.witnessUtxo) throw new Error("Need a Utxo input item for signing");
                    a = t.witnessUtxo
                }
                const {
                    meaningfulScript: c,
                    type: p
                } = j(a.script, e, "input", t.redeemScript, t.witnessScript);
                if (["p2sh-p2wsh", "p2wsh"].indexOf(p) >= 0) u = s.hashForWitnessV0(e, c, a.value, o);
                else if (E(c)) {
                    const t = h.p2pkh({
                        hash: c.slice(2)
                    }).output;
                    u = s.hashForWitnessV0(e, t, a.value, o)
                } else {
                    if (void 0 === t.nonWitnessUtxo && !1 === r.__UNSAFE_SIGN_NONSEGWIT) throw new Error(`Input #${e} has witnessUtxo but non-segwit script: ` + c.toString("hex"));
                    n || !1 === r.__UNSAFE_SIGN_NONSEGWIT || console.warn("Warning: Signing non-segwit inputs without the full parent transaction means there is a chance that a miner could feed you incorrect information to trick you into paying large fees. This behavior is the same as the old TransactionBuilder class when signing non-segwit scripts. You are not able to export this Psbt with toBuffer|toBase64|toHex since it is not BIP174 compliant.\n*********************\nPROCEED WITH CAUTION!\n*********************"), u = s.hashForSignature(e, c, o)
                }
                return {
                    script: c,
                    sighashType: o,
                    hash: u
                }
            }

            function L(e, t, r) {
                const n = s.checkForInput(t, e);
                if (!n.bip32Derivation || 0 === n.bip32Derivation.length) throw new Error("Need bip32Derivation to sign with HD");
                const i = n.bip32Derivation.map(e => e.masterFingerprint.equals(r.fingerprint) ? e : void 0).filter(e => !!e);
                if (0 === i.length) throw new Error("Need one bip32Derivation masterFingerprint to match the HDSigner fingerprint");
                return i.map(e => {
                    const t = r.derivePath(e.path);
                    if (!e.pubkey.equals(t.publicKey)) throw new Error("pubkey did not match bip32Derivation");
                    return t
                })
            }

            function W(e) {
                let t = 0;

                function r() {
                    const r = i.decode(e, t);
                    return t += i.decode.bytes, r
                }

                function n() {
                    return n = r(), t += n, e.slice(t - n, t);
                    var n
                }
                return function() {
                    const e = r(),
                        t = [];
                    for (let r = 0; r < e; r++) t.push(n());
                    return t
                }()
            }

            function D(e) {
                let t = Buffer.allocUnsafe(0);

                function r(e) {
                    const r = t.length,
                        n = i.encodingLength(e);
                    t = Buffer.concat([t, Buffer.allocUnsafe(n)]), i.encode(e, t, r)
                }

                function n(e) {
                    r(e.length),
                        function(e) {
                            t = Buffer.concat([t, Buffer.from(e)])
                        }(e)
                }
                var s;
                return r((s = e).length), s.forEach(n), t
            }

            function M(e, t, r) {
                e.__NON_WITNESS_UTXO_BUF_CACHE[r] = t.nonWitnessUtxo;
                const n = l.Transaction.fromBuffer(t.nonWitnessUtxo);
                e.__NON_WITNESS_UTXO_TX_CACHE[r] = n;
                const i = e,
                    s = r;
                delete t.nonWitnessUtxo, Object.defineProperty(t, "nonWitnessUtxo", {
                    enumerable: !0,
                    get() {
                        const e = i.__NON_WITNESS_UTXO_BUF_CACHE[s],
                            t = i.__NON_WITNESS_UTXO_TX_CACHE[s];
                        if (void 0 !== e) return e;
                        {
                            const e = t.toBuffer();
                            return i.__NON_WITNESS_UTXO_BUF_CACHE[s] = e, e
                        }
                    },
                    set(e) {
                        i.__NON_WITNESS_UTXO_BUF_CACHE[s] = e
                    }
                })
            }

            function G(e, t, r, n) {
                let i = 0;
                e.forEach((e, s) => {
                    if (n && e.finalScriptSig && (t.ins[s].script = e.finalScriptSig), n && e.finalScriptWitness && (t.ins[s].witness = W(e.finalScriptWitness)), e.witnessUtxo) i += e.witnessUtxo.value;
                    else if (e.nonWitnessUtxo) {
                        const n = F(r, e, s),
                            o = t.ins[s].index,
                            u = n.outs[o];
                        i += u.value
                    }
                });
                const s = t.outs.reduce((e, t) => e + t.value, 0),
                    o = i - s;
                if (o < 0) throw new Error("Outputs are spending more than Inputs");
                const u = t.virtualSize();
                r.__FEE = o, r.__EXTRACTED_TX = t, r.__FEE_RATE = Math.floor(o / u)
            }

            function F(e, t, r) {
                const n = e.__NON_WITNESS_UTXO_TX_CACHE;
                return n[r] || M(e, t, r), n[r]
            }

            function q(e, t, r) {
                if (void 0 !== t.witnessUtxo) return t.witnessUtxo.script;
                if (void 0 !== t.nonWitnessUtxo) {
                    return F(r, t, e).outs[r.__TX.ins[e].index].script
                }
                throw new Error("Can't find pubkey in input without Utxo data")
            }

            function V(e) {
                return 33 === e.length && f.isCanonicalPubKey(e)
            }

            function j(e, t, r, n, i) {
                const s = O(e),
                    o = s && n && P(n),
                    u = P(e);
                if (s && void 0 === n) throw new Error("scriptPubkey is P2SH but redeemScript missing");
                if ((u || o) && void 0 === i) throw new Error("scriptPubkey or redeemScript is P2WSH but witnessScript missing");
                let a;
                return o ? (a = i, B(t, e, n, r), U(t, n, i, r), X(a)) : u ? (a = i, U(t, e, i, r), X(a)) : s ? (a = n, B(t, e, n, r)) : a = e, {
                    meaningfulScript: a,
                    type: o ? "p2sh-p2wsh" : s ? "p2sh" : u ? "p2wsh" : "raw"
                }
            }

            function X(e) {
                if (E(e) || O(e)) throw new Error("P2WPKH or P2SH can not be contained within P2WSH")
            }

            function Y(e, t) {
                const r = a.hash160(e),
                    n = f.decompile(t);
                if (null === n) throw new Error("Unknown script error");
                return n.some(t => "number" != typeof t && (t.equals(e) || t.equals(r)))
            }

            function Q(e) {
                return E(e) ? "witnesspubkeyhash" : b(e) ? "pubkeyhash" : v(e) ? "multisig" : _(e) ? "pubkey" : "nonstandard"
            }

            function J(e) {
                return [...Array(e).keys()]
            }
        },
        4196: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            const n = r(1132),
                i = r(668),
                s = r(4197),
                o = r(271),
                ECPair = r(1133),
                u = r(203),
                a = r(667),
                c = r(54),
                p = r(54),
                h = r(669),
                f = r(245),
                l = r(47),
                d = s.types,
                w = new Set(["p2pkh", "p2pk", "p2wpkh", "p2ms", "p2sh-p2pkh", "p2sh-p2pk", "p2sh-p2wpkh", "p2sh-p2ms", "p2wsh-p2pkh", "p2wsh-p2pk", "p2wsh-p2ms", "p2sh-p2wsh-p2pkh", "p2sh-p2wsh-p2pk", "p2sh-p2wsh-p2ms"]);

            function y(e, t, r) {
                try {
                    l(e, t)
                } catch (e) {
                    throw new Error(r)
                }
            }
            class TransactionBuilder {
                constructor(e = u.bitcoin, t = 2500) {
                    this.network = e, this.maximumFeeRate = t, this.__PREV_TX_SET = {}, this.__INPUTS = [], this.__TX = new h.Transaction, this.__TX.version = 2, this.__USE_LOW_R = !1, console.warn("Deprecation Warning: TransactionBuilder will be removed in the future. (v6.x.x or later) Please use the Psbt class instead. Examples of usage are available in the transactions-psbt.js integration test file on our Github. A high level explanation is available in the psbt.ts and psbt.js files as well.")
                }
                static fromTransaction(e, t) {
                    const r = new TransactionBuilder(t);
                    return r.setVersion(e.version), r.setLockTime(e.locktime), e.outs.forEach(e => {
                        r.addOutput(e.script, e.value)
                    }), e.ins.forEach(e => {
                        r.__addInputUnsafe(e.hash, e.index, {
                            sequence: e.sequence,
                            script: e.script,
                            witness: e.witness
                        })
                    }), r.__INPUTS.forEach((t, r) => {
                        ! function(e, t, r) {
                            if (e.redeemScriptType !== d.P2MS || !e.redeemScript) return;
                            if (e.pubkeys.length === e.signatures.length) return;
                            const n = e.signatures.concat();
                            e.signatures = e.pubkeys.map(i => {
                                const s = ECPair.fromPublicKey(i);
                                let o;
                                return n.some((i, u) => {
                                    if (!i) return !1;
                                    const a = c.signature.decode(i),
                                        p = t.hashForSignature(r, e.redeemScript, a.hashType);
                                    return !!s.verify(p, a.signature) && (n[u] = void 0, o = i, !0)
                                }), o
                            })
                        }(t, e, r)
                    }), r
                }
                setLowR(e) {
                    return l(l.maybe(l.Boolean), e), void 0 === e && (e = !0), this.__USE_LOW_R = e, e
                }
                setLockTime(e) {
                    if (l(f.UInt32, e), this.__INPUTS.some(e => !!e.signatures && e.signatures.some(e => void 0 !== e))) throw new Error("No, this would invalidate signatures");
                    this.__TX.locktime = e
                }
                setVersion(e) {
                    l(f.UInt32, e), this.__TX.version = e
                }
                addInput(e, t, r, n) {
                    if (!this.__canModifyInputs()) throw new Error("No, this would invalidate signatures");
                    let s;
                    if ("string" == typeof(o = e) || o instanceof String) e = i.reverseBuffer(Buffer.from(e, "hex"));
                    else if (function(e) {
                            return e instanceof h.Transaction
                        }(e)) {
                        const r = e.outs[t];
                        n = r.script, s = r.value, e = e.getHash(!1)
                    }
                    var o;
                    return this.__addInputUnsafe(e, t, {
                        sequence: r,
                        prevOutScript: n,
                        value: s
                    })
                }
                addOutput(e, t) {
                    if (!this.__canModifyOutputs()) throw new Error("No, this would invalidate signatures");
                    return "string" == typeof e && (e = n.toOutputScript(e, this.network)), this.__TX.addOutput(e, t)
                }
                build() {
                    return this.__build(!1)
                }
                buildIncomplete() {
                    return this.__build(!0)
                }
                sign(e, t, r, n, i, s) {
                    ! function({
                        input: e,
                        ourPubKey: t,
                        keyPair: r,
                        signatureHash: n,
                        hashType: i,
                        useLowR: s
                    }) {
                        let o = !1;
                        for (const [u, a] of e.pubkeys.entries()) {
                            if (!t.equals(a)) continue;
                            if (e.signatures[u]) throw new Error("Signature already exists");
                            if (33 !== t.length && e.hasWitness) throw new Error("BIP143 rejects uncompressed public keys in P2WPKH or P2WSH");
                            const p = r.sign(n, s);
                            e.signatures[u] = c.signature.encode(p, i), o = !0
                        }
                        if (!o) throw new Error("Key pair cannot sign for this input")
                    }(function(e, t, r, n, i, s, o, u, p, S, v) {
                        let _;
                        if ("number" == typeof i) console.warn("DEPRECATED: TransactionBuilder sign method arguments will change in v6, please use the TxbSignArg interface"), _ = i;
                        else {
                            if ("object" != typeof i) throw new TypeError("TransactionBuilder sign first arg must be TxbSignArg or number");
                            ! function(e, t) {
                                if (!w.has(t.prevOutScriptType)) throw new TypeError(`Unknown prevOutScriptType "${t.prevOutScriptType}"`);
                                y(l.Number, t.vin, "sign must include vin parameter as Number (input index)"), y(f.Signer, t.keyPair, "sign must include keyPair parameter as Signer interface"), y(l.maybe(l.Number), t.hashType, "sign hashType parameter must be a number");
                                const r = (e[t.vin] || []).prevOutType,
                                    n = t.prevOutScriptType;
                                switch (n) {
                                    case "p2pkh":
                                        if (r && "pubkeyhash" !== r) throw new TypeError(`input #${t.vin} is not of type p2pkh: ${r}`);
                                        y(l.value(void 0), t.witnessScript, n + " requires NO witnessScript"), y(l.value(void 0), t.redeemScript, n + " requires NO redeemScript"), y(l.value(void 0), t.witnessValue, n + " requires NO witnessValue");
                                        break;
                                    case "p2pk":
                                        if (r && "pubkey" !== r) throw new TypeError(`input #${t.vin} is not of type p2pk: ${r}`);
                                        y(l.value(void 0), t.witnessScript, n + " requires NO witnessScript"), y(l.value(void 0), t.redeemScript, n + " requires NO redeemScript"), y(l.value(void 0), t.witnessValue, n + " requires NO witnessValue");
                                        break;
                                    case "p2wpkh":
                                        if (r && "witnesspubkeyhash" !== r) throw new TypeError(`input #${t.vin} is not of type p2wpkh: ${r}`);
                                        y(l.value(void 0), t.witnessScript, n + " requires NO witnessScript"), y(l.value(void 0), t.redeemScript, n + " requires NO redeemScript"), y(f.Satoshi, t.witnessValue, n + " requires witnessValue");
                                        break;
                                    case "p2ms":
                                        if (r && "multisig" !== r) throw new TypeError(`input #${t.vin} is not of type p2ms: ${r}`);
                                        y(l.value(void 0), t.witnessScript, n + " requires NO witnessScript"), y(l.value(void 0), t.redeemScript, n + " requires NO redeemScript"), y(l.value(void 0), t.witnessValue, n + " requires NO witnessValue");
                                        break;
                                    case "p2sh-p2wpkh":
                                        if (r && "scripthash" !== r) throw new TypeError(`input #${t.vin} is not of type p2sh-p2wpkh: ${r}`);
                                        y(l.value(void 0), t.witnessScript, n + " requires NO witnessScript"), y(l.Buffer, t.redeemScript, n + " requires redeemScript"), y(f.Satoshi, t.witnessValue, n + " requires witnessValue");
                                        break;
                                    case "p2sh-p2ms":
                                    case "p2sh-p2pk":
                                    case "p2sh-p2pkh":
                                        if (r && "scripthash" !== r) throw new TypeError(`input #${t.vin} is not of type ${n}: ${r}`);
                                        y(l.value(void 0), t.witnessScript, n + " requires NO witnessScript"), y(l.Buffer, t.redeemScript, n + " requires redeemScript"), y(l.value(void 0), t.witnessValue, n + " requires NO witnessValue");
                                        break;
                                    case "p2wsh-p2ms":
                                    case "p2wsh-p2pk":
                                    case "p2wsh-p2pkh":
                                        if (r && "witnessscripthash" !== r) throw new TypeError(`input #${t.vin} is not of type ${n}: ${r}`);
                                        y(l.Buffer, t.witnessScript, n + " requires witnessScript"), y(l.value(void 0), t.redeemScript, n + " requires NO redeemScript"), y(f.Satoshi, t.witnessValue, n + " requires witnessValue");
                                        break;
                                    case "p2sh-p2wsh-p2ms":
                                    case "p2sh-p2wsh-p2pk":
                                    case "p2sh-p2wsh-p2pkh":
                                        if (r && "scripthash" !== r) throw new TypeError(`input #${t.vin} is not of type ${n}: ${r}`);
                                        y(l.Buffer, t.witnessScript, n + " requires witnessScript"), y(l.Buffer, t.redeemScript, n + " requires witnessScript"), y(f.Satoshi, t.witnessValue, n + " requires witnessScript")
                                }
                            }(t, i), ({
                                vin: _,
                                keyPair: s,
                                redeemScript: o,
                                hashType: u,
                                witnessValue: p,
                                witnessScript: S
                            } = i)
                        }
                        if (void 0 === s) throw new Error("sign requires keypair");
                        if (s.network && s.network !== e) throw new TypeError("Inconsistent network");
                        if (!t[_]) throw new Error("No input at index: " + _);
                        if (u = u || h.Transaction.SIGHASH_ALL, r(u)) throw new Error("Transaction needs outputs");
                        const b = t[_];
                        if (void 0 !== b.redeemScript && o && !b.redeemScript.equals(o)) throw new Error("Inconsistent redeemScript");
                        const E = s.publicKey || s.getPublicKey && s.getPublicKey();
                        if (!g(b)) {
                            if (void 0 !== p) {
                                if (void 0 !== b.value && b.value !== p) throw new Error("Input did not match witnessValue");
                                l(f.Satoshi, p), b.value = p
                            }
                            if (!g(b)) {
                                const e = function(e, t, r, n) {
                                    if (r && n) {
                                        const i = a.p2wsh({
                                                redeem: {
                                                    output: n
                                                }
                                            }),
                                            s = a.p2wsh({
                                                output: r
                                            }),
                                            o = a.p2sh({
                                                redeem: {
                                                    output: r
                                                }
                                            }),
                                            u = a.p2sh({
                                                redeem: i
                                            });
                                        if (!i.hash.equals(s.hash)) throw new Error("Witness script inconsistent with prevOutScript");
                                        if (!o.hash.equals(u.hash)) throw new Error("Redeem script inconsistent with prevOutScript");
                                        const p = m(i.redeem.output, t);
                                        if (!p.pubkeys) throw new Error(p.type + " not supported as witnessScript (" + c.toASM(n) + ")");
                                        e.signatures && e.signatures.some(e => void 0 !== e) && (p.signatures = e.signatures);
                                        const h = n;
                                        if (p.type === d.P2WPKH) throw new Error("P2SH(P2WSH(P2WPKH)) is a consensus failure");
                                        return {
                                            redeemScript: r,
                                            redeemScriptType: d.P2WSH,
                                            witnessScript: n,
                                            witnessScriptType: p.type,
                                            prevOutType: d.P2SH,
                                            prevOutScript: o.output,
                                            hasWitness: !0,
                                            signScript: h,
                                            signType: p.type,
                                            pubkeys: p.pubkeys,
                                            signatures: p.signatures,
                                            maxSignatures: p.maxSignatures
                                        }
                                    }
                                    if (r) {
                                        const n = a.p2sh({
                                            redeem: {
                                                output: r
                                            }
                                        });
                                        if (e.prevOutScript) {
                                            let t;
                                            try {
                                                t = a.p2sh({
                                                    output: e.prevOutScript
                                                })
                                            } catch (e) {
                                                throw new Error("PrevOutScript must be P2SH")
                                            }
                                            if (!n.hash.equals(t.hash)) throw new Error("Redeem script inconsistent with prevOutScript")
                                        }
                                        const i = m(n.redeem.output, t);
                                        if (!i.pubkeys) throw new Error(i.type + " not supported as redeemScript (" + c.toASM(r) + ")");
                                        e.signatures && e.signatures.some(e => void 0 !== e) && (i.signatures = e.signatures);
                                        let s = r;
                                        return i.type === d.P2WPKH && (s = a.p2pkh({
                                            pubkey: i.pubkeys[0]
                                        }).output), {
                                            redeemScript: r,
                                            redeemScriptType: i.type,
                                            prevOutType: d.P2SH,
                                            prevOutScript: n.output,
                                            hasWitness: i.type === d.P2WPKH,
                                            signScript: s,
                                            signType: i.type,
                                            pubkeys: i.pubkeys,
                                            signatures: i.signatures,
                                            maxSignatures: i.maxSignatures
                                        }
                                    }
                                    if (n) {
                                        const r = a.p2wsh({
                                            redeem: {
                                                output: n
                                            }
                                        });
                                        if (e.prevOutScript) {
                                            const t = a.p2wsh({
                                                output: e.prevOutScript
                                            });
                                            if (!r.hash.equals(t.hash)) throw new Error("Witness script inconsistent with prevOutScript")
                                        }
                                        const i = m(r.redeem.output, t);
                                        if (!i.pubkeys) throw new Error(i.type + " not supported as witnessScript (" + c.toASM(n) + ")");
                                        e.signatures && e.signatures.some(e => void 0 !== e) && (i.signatures = e.signatures);
                                        const s = n;
                                        if (i.type === d.P2WPKH) throw new Error("P2WSH(P2WPKH) is a consensus failure");
                                        return {
                                            witnessScript: n,
                                            witnessScriptType: i.type,
                                            prevOutType: d.P2WSH,
                                            prevOutScript: r.output,
                                            hasWitness: !0,
                                            signScript: s,
                                            signType: i.type,
                                            pubkeys: i.pubkeys,
                                            signatures: i.signatures,
                                            maxSignatures: i.maxSignatures
                                        }
                                    }
                                    if (e.prevOutType && e.prevOutScript) {
                                        if (e.prevOutType === d.P2SH) throw new Error("PrevOutScript is " + e.prevOutType + ", requires redeemScript");
                                        if (e.prevOutType === d.P2WSH) throw new Error("PrevOutScript is " + e.prevOutType + ", requires witnessScript");
                                        if (!e.prevOutScript) throw new Error("PrevOutScript is missing");
                                        const r = m(e.prevOutScript, t);
                                        if (!r.pubkeys) throw new Error(r.type + " not supported (" + c.toASM(e.prevOutScript) + ")");
                                        e.signatures && e.signatures.some(e => void 0 !== e) && (r.signatures = e.signatures);
                                        let n = e.prevOutScript;
                                        return r.type === d.P2WPKH && (n = a.p2pkh({
                                            pubkey: r.pubkeys[0]
                                        }).output), {
                                            prevOutType: r.type,
                                            prevOutScript: e.prevOutScript,
                                            hasWitness: r.type === d.P2WPKH,
                                            signScript: n,
                                            signType: r.type,
                                            pubkeys: r.pubkeys,
                                            signatures: r.signatures,
                                            maxSignatures: r.maxSignatures
                                        }
                                    }
                                    const i = a.p2pkh({
                                        pubkey: t
                                    }).output;
                                    return {
                                        prevOutType: d.P2PKH,
                                        prevOutScript: i,
                                        hasWitness: !1,
                                        signScript: i,
                                        signType: d.P2PKH,
                                        pubkeys: [t],
                                        signatures: [void 0]
                                    }
                                }(b, E, o, S);
                                Object.assign(b, e)
                            }
                            if (!g(b)) throw Error(b.prevOutType + " not supported")
                        }
                        let P;
                        P = b.hasWitness ? n.hashForWitnessV0(_, b.signScript, b.value, u) : n.hashForSignature(_, b.signScript, u);
                        return {
                            input: b,
                            ourPubKey: E,
                            keyPair: s,
                            signatureHash: P,
                            hashType: u,
                            useLowR: !!v
                        }
                    }(this.network, this.__INPUTS, this.__needsOutputs.bind(this), this.__TX, e, t, r, n, i, s, this.__USE_LOW_R))
                }
                __addInputUnsafe(e, t, r) {
                    if (h.Transaction.isCoinbaseHash(e)) throw new Error("coinbase inputs not supported");
                    const n = e.toString("hex") + ":" + t;
                    if (void 0 !== this.__PREV_TX_SET[n]) throw new Error("Duplicate TxOut: " + n);
                    let i = {};
                    if (void 0 !== r.script && (i = function e(t, r, n, i) {
                            if (0 === t.length && 0 === r.length) return {};
                            if (!n) {
                                let e = s.input(t, !0),
                                    i = s.witness(r, !0);
                                e === d.NONSTANDARD && (e = void 0), i === d.NONSTANDARD && (i = void 0), n = e || i
                            }
                            switch (n) {
                                case d.P2WPKH: {
                                    const {
                                        output: e,
                                        pubkey: t,
                                        signature: n
                                    } = a.p2wpkh({
                                        witness: r
                                    });
                                    return {
                                        prevOutScript: e,
                                        prevOutType: d.P2WPKH,
                                        pubkeys: [t],
                                        signatures: [n]
                                    }
                                }
                                case d.P2PKH: {
                                    const {
                                        output: e,
                                        pubkey: r,
                                        signature: n
                                    } = a.p2pkh({
                                        input: t
                                    });
                                    return {
                                        prevOutScript: e,
                                        prevOutType: d.P2PKH,
                                        pubkeys: [r],
                                        signatures: [n]
                                    }
                                }
                                case d.P2PK: {
                                    const {
                                        signature: e
                                    } = a.p2pk({
                                        input: t
                                    });
                                    return {
                                        prevOutType: d.P2PK,
                                        pubkeys: [void 0],
                                        signatures: [e]
                                    }
                                }
                                case d.P2MS: {
                                    const {
                                        m: e,
                                        pubkeys: r,
                                        signatures: n
                                    } = a.p2ms({
                                        input: t,
                                        output: i
                                    }, {
                                        allowIncomplete: !0
                                    });
                                    return {
                                        prevOutType: d.P2MS,
                                        pubkeys: r,
                                        signatures: n,
                                        maxSignatures: e
                                    }
                                }
                            }
                            if (n === d.P2SH) {
                                const {
                                    output: n,
                                    redeem: i
                                } = a.p2sh({
                                    input: t,
                                    witness: r
                                }), o = s.output(i.output), u = e(i.input, i.witness, o, i.output);
                                return u.prevOutType ? {
                                    prevOutScript: n,
                                    prevOutType: d.P2SH,
                                    redeemScript: i.output,
                                    redeemScriptType: u.prevOutType,
                                    witnessScript: u.witnessScript,
                                    witnessScriptType: u.witnessScriptType,
                                    pubkeys: u.pubkeys,
                                    signatures: u.signatures
                                } : {}
                            }
                            if (n === d.P2WSH) {
                                const {
                                    output: n,
                                    redeem: i
                                } = a.p2wsh({
                                    input: t,
                                    witness: r
                                }), o = s.output(i.output);
                                let u;
                                return u = o === d.P2WPKH ? e(i.input, i.witness, o) : e(c.compile(i.witness), [], o, i.output), u.prevOutType ? {
                                    prevOutScript: n,
                                    prevOutType: d.P2WSH,
                                    witnessScript: i.output,
                                    witnessScriptType: u.prevOutType,
                                    pubkeys: u.pubkeys,
                                    signatures: u.signatures
                                } : {}
                            }
                            return {
                                prevOutType: d.NONSTANDARD,
                                prevOutScript: t
                            }
                        }(r.script, r.witness || [])), void 0 !== r.value && (i.value = r.value), !i.prevOutScript && r.prevOutScript) {
                        let e;
                        if (!i.pubkeys && !i.signatures) {
                            const t = m(r.prevOutScript);
                            t.pubkeys && (i.pubkeys = t.pubkeys, i.signatures = t.signatures), e = t.type
                        }
                        i.prevOutScript = r.prevOutScript, i.prevOutType = e || s.output(r.prevOutScript)
                    }
                    const o = this.__TX.addInput(e, t, r.sequence, r.scriptSig);
                    return this.__INPUTS[o] = i, this.__PREV_TX_SET[n] = !0, o
                }
                __build(e) {
                    if (!e) {
                        if (!this.__TX.ins.length) throw new Error("Transaction has no inputs");
                        if (!this.__TX.outs.length) throw new Error("Transaction has no outputs")
                    }
                    const t = this.__TX.clone();
                    if (this.__INPUTS.forEach((r, n) => {
                            if (!r.prevOutType && !e) throw new Error("Transaction is not complete");
                            const i = function e(t, r, n) {
                                const i = r.pubkeys || [];
                                let s = r.signatures || [];
                                switch (t) {
                                    case d.P2PKH:
                                        if (0 === i.length) break;
                                        if (0 === s.length) break;
                                        return a.p2pkh({
                                            pubkey: i[0],
                                            signature: s[0]
                                        });
                                    case d.P2WPKH:
                                        if (0 === i.length) break;
                                        if (0 === s.length) break;
                                        return a.p2wpkh({
                                            pubkey: i[0],
                                            signature: s[0]
                                        });
                                    case d.P2PK:
                                        if (0 === i.length) break;
                                        if (0 === s.length) break;
                                        return a.p2pk({
                                            signature: s[0]
                                        });
                                    case d.P2MS: {
                                        const e = r.maxSignatures;
                                        s = n ? s.map(e => e || p.OPS.OP_0) : s.filter(e => e);
                                        const t = !n || e === s.length;
                                        return a.p2ms({
                                            m: e,
                                            pubkeys: i,
                                            signatures: s
                                        }, {
                                            allowIncomplete: n,
                                            validate: t
                                        })
                                    }
                                    case d.P2SH: {
                                        const t = e(r.redeemScriptType, r, n);
                                        if (!t) return;
                                        return a.p2sh({
                                            redeem: {
                                                output: t.output || r.redeemScript,
                                                input: t.input,
                                                witness: t.witness
                                            }
                                        })
                                    }
                                    case d.P2WSH: {
                                        const t = e(r.witnessScriptType, r, n);
                                        if (!t) return;
                                        return a.p2wsh({
                                            redeem: {
                                                output: r.witnessScript,
                                                input: t.input,
                                                witness: t.witness
                                            }
                                        })
                                    }
                                }
                            }(r.prevOutType, r, e);
                            if (i) t.setInputScript(n, i.input), t.setWitness(n, i.witness);
                            else {
                                if (!e && r.prevOutType === d.NONSTANDARD) throw new Error("Unknown input type");
                                if (!e) throw new Error("Not enough information")
                            }
                        }), !e && this.__overMaximumFees(t.virtualSize())) throw new Error("Transaction has absurd fees");
                    return t
                }
                __canModifyInputs() {
                    return this.__INPUTS.every(e => !e.signatures || e.signatures.every(e => {
                        if (!e) return !0;
                        return 0 != (S(e) & h.Transaction.SIGHASH_ANYONECANPAY)
                    }))
                }
                __needsOutputs(e) {
                    return e === h.Transaction.SIGHASH_ALL ? 0 === this.__TX.outs.length : 0 === this.__TX.outs.length && this.__INPUTS.some(e => !!e.signatures && e.signatures.some(e => {
                        if (!e) return !1;
                        return !(S(e) & h.Transaction.SIGHASH_NONE)
                    }))
                }
                __canModifyOutputs() {
                    const e = this.__TX.ins.length,
                        t = this.__TX.outs.length;
                    return this.__INPUTS.every(r => void 0 === r.signatures || r.signatures.every(r => {
                        if (!r) return !0;
                        const n = 31 & S(r);
                        return n === h.Transaction.SIGHASH_NONE || n === h.Transaction.SIGHASH_SINGLE && e <= t
                    }))
                }
                __overMaximumFees(e) {
                    return (this.__INPUTS.reduce((e, t) => e + (t.value >>> 0), 0) - this.__TX.outs.reduce((e, t) => e + t.value, 0)) / e > this.maximumFeeRate
                }
            }

            function m(e, t) {
                l(f.Buffer, e);
                const r = s.output(e);
                switch (r) {
                    case d.P2PKH: {
                        if (!t) return {
                            type: r
                        };
                        const n = a.p2pkh({
                                output: e
                            }).hash,
                            i = o.hash160(t);
                        return n.equals(i) ? {
                            type: r,
                            pubkeys: [t],
                            signatures: [void 0]
                        } : {
                            type: r
                        }
                    }
                    case d.P2WPKH: {
                        if (!t) return {
                            type: r
                        };
                        const n = a.p2wpkh({
                                output: e
                            }).hash,
                            i = o.hash160(t);
                        return n.equals(i) ? {
                            type: r,
                            pubkeys: [t],
                            signatures: [void 0]
                        } : {
                            type: r
                        }
                    }
                    case d.P2PK:
                        return {
                            type: r, pubkeys: [a.p2pk({
                                output: e
                            }).pubkey], signatures: [void 0]
                        };
                    case d.P2MS: {
                        const t = a.p2ms({
                            output: e
                        });
                        return {
                            type: r,
                            pubkeys: t.pubkeys,
                            signatures: t.pubkeys.map(() => {}),
                            maxSignatures: t.m
                        }
                    }
                }
                return {
                    type: r
                }
            }

            function g(e) {
                return void 0 !== e.signScript && void 0 !== e.signType && void 0 !== e.pubkeys && void 0 !== e.signatures && e.signatures.length === e.pubkeys.length && e.pubkeys.length > 0 && (!1 === e.hasWitness || void 0 !== e.value)
            }

            function S(e) {
                return e.readUInt8(e.length - 1)
            }
            t.TransactionBuilder = TransactionBuilder
        },
        4197: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            const n = r(54),
                i = r(1136),
                s = r(4200),
                o = r(1137),
                u = r(1138),
                a = r(4205),
                c = r(4208),
                p = r(4210),
                h = r(4212),
                f = {
                    P2MS: "multisig",
                    NONSTANDARD: "nonstandard",
                    NULLDATA: "nulldata",
                    P2PK: "pubkey",
                    P2PKH: "pubkeyhash",
                    P2SH: "scripthash",
                    P2WPKH: "witnesspubkeyhash",
                    P2WSH: "witnessscripthash",
                    WITNESS_COMMITMENT: "witnesscommitment"
                };
            t.types = f, t.output = function(e) {
                if (p.output.check(e)) return f.P2WPKH;
                if (h.output.check(e)) return f.P2WSH;
                if (u.output.check(e)) return f.P2PKH;
                if (a.output.check(e)) return f.P2SH;
                const t = n.decompile(e);
                if (!t) throw new TypeError("Invalid script");
                return i.output.check(t) ? f.P2MS : o.output.check(t) ? f.P2PK : c.output.check(t) ? f.WITNESS_COMMITMENT : s.output.check(t) ? f.NULLDATA : f.NONSTANDARD
            }, t.input = function(e, t) {
                const r = n.decompile(e);
                if (!r) throw new TypeError("Invalid script");
                return u.input.check(r) ? f.P2PKH : a.input.check(r, t) ? f.P2SH : i.input.check(r, t) ? f.P2MS : o.input.check(r) ? f.P2PK : f.NONSTANDARD
            }, t.witness = function(e, t) {
                const r = n.decompile(e);
                if (!r) throw new TypeError("Invalid script");
                return p.input.check(r) ? f.P2WPKH : h.input.check(r, t) ? f.P2WSH : f.NONSTANDARD
            }
        },
        4198: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            const n = r(54),
                i = r(54);

            function s(e) {
                return e === i.OPS.OP_0 || n.isCanonicalScriptSignature(e)
            }

            function o(e, t) {
                const r = n.decompile(e);
                return !(r.length < 2) && (r[0] === i.OPS.OP_0 && (t ? r.slice(1).every(s) : r.slice(1).every(n.isCanonicalScriptSignature)))
            }
            t.check = o, o.toJSON = () => "multisig input"
        },
        4199: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            const n = r(54),
                i = r(54),
                s = r(245),
                o = i.OPS.OP_RESERVED;

            function u(e, t) {
                const r = n.decompile(e);
                if (r.length < 4) return !1;
                if (r[r.length - 1] !== i.OPS.OP_CHECKMULTISIG) return !1;
                if (!s.Number(r[0])) return !1;
                if (!s.Number(r[r.length - 2])) return !1;
                const u = r[0] - o,
                    a = r[r.length - 2] - o;
                if (u <= 0) return !1;
                if (a > 16) return !1;
                if (u > a) return !1;
                if (a !== r.length - 3) return !1;
                if (t) return !0;
                return r.slice(1, -2).every(n.isCanonicalPubKey)
            }
            t.check = u, u.toJSON = () => "multi-sig output"
        },
        4200: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            const n = r(54),
                i = n.OPS;

            function s(e) {
                const t = n.compile(e);
                return t.length > 1 && t[0] === i.OP_RETURN
            }
            t.check = s, s.toJSON = () => "null data output";
            const o = {
                check: s
            };
            t.output = o
        },
        4201: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            const n = r(54);

            function i(e) {
                const t = n.decompile(e);
                return 1 === t.length && n.isCanonicalScriptSignature(t[0])
            }
            t.check = i, i.toJSON = () => "pubKey input"
        },
        4202: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            const n = r(54),
                i = r(54);

            function s(e) {
                const t = n.decompile(e);
                return 2 === t.length && n.isCanonicalPubKey(t[0]) && t[1] === i.OPS.OP_CHECKSIG
            }
            t.check = s, s.toJSON = () => "pubKey output"
        },
        4203: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            const n = r(54);

            function i(e) {
                const t = n.decompile(e);
                return 2 === t.length && n.isCanonicalScriptSignature(t[0]) && n.isCanonicalPubKey(t[1])
            }
            t.check = i, i.toJSON = () => "pubKeyHash input"
        },
        4204: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            const n = r(54),
                i = r(54);

            function s(e) {
                const t = n.compile(e);
                return 25 === t.length && t[0] === i.OPS.OP_DUP && t[1] === i.OPS.OP_HASH160 && 20 === t[2] && t[23] === i.OPS.OP_EQUALVERIFY && t[24] === i.OPS.OP_CHECKSIG
            }
            t.check = s, s.toJSON = () => "pubKeyHash output"
        },
        4205: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            const n = r(4206);
            t.input = n;
            const i = r(4207);
            t.output = i
        },
        4206: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            const n = r(54),
                i = r(1136),
                s = r(1137),
                o = r(1138),
                u = r(2013),
                a = r(2014);

            function c(e, t) {
                const r = n.decompile(e);
                if (r.length < 1) return !1;
                const c = r[r.length - 1];
                if (!Buffer.isBuffer(c)) return !1;
                const p = n.decompile(n.compile(r.slice(0, -1))),
                    h = n.decompile(c);
                return !!h && (!!n.isPushOnly(p) && (1 === r.length ? a.check(h) || u.check(h) : !(!o.input.check(p) || !o.output.check(h)) || (!(!i.input.check(p, t) || !i.output.check(h)) || !(!s.input.check(p) || !s.output.check(h)))))
            }
            t.check = c, c.toJSON = () => "scriptHash input"
        },
        4207: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            const n = r(54),
                i = r(54);

            function s(e) {
                const t = n.compile(e);
                return 23 === t.length && t[0] === i.OPS.OP_HASH160 && 20 === t[1] && t[22] === i.OPS.OP_EQUAL
            }
            t.check = s, s.toJSON = () => "scriptHash output"
        },
        4208: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            const n = r(4209);
            t.output = n
        },
        4209: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            const n = r(54),
                i = r(54),
                s = r(245),
                o = r(47),
                u = Buffer.from("aa21a9ed", "hex");

            function a(e) {
                const t = n.compile(e);
                return t.length > 37 && t[0] === i.OPS.OP_RETURN && 36 === t[1] && t.slice(2, 6).equals(u)
            }
            t.check = a, a.toJSON = () => "Witness commitment output", t.encode = function(e) {
                o(s.Hash256bit, e);
                const t = Buffer.allocUnsafe(36);
                return u.copy(t, 0), e.copy(t, 4), n.compile([i.OPS.OP_RETURN, t])
            }, t.decode = function(e) {
                return o(a, e), n.decompile(e)[1].slice(4, 36)
            }
        },
        4210: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            const n = r(4211);
            t.input = n;
            const i = r(2013);
            t.output = i
        },
        4211: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            const n = r(54);

            function i(e) {
                const t = n.decompile(e);
                return 2 === t.length && n.isCanonicalScriptSignature(t[0]) && (r = t[1], n.isCanonicalPubKey(r) && 33 === r.length);
                var r
            }
            t.check = i, i.toJSON = () => "witnessPubKeyHash input"
        },
        4212: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            const n = r(4213);
            t.input = n;
            const i = r(2014);
            t.output = i
        },
        4213: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            const n = r(54),
                i = r(47),
                s = r(1136),
                o = r(1137),
                u = r(1138);

            function a(e, t) {
                if (i(i.Array, e), e.length < 1) return !1;
                const r = e[e.length - 1];
                if (!Buffer.isBuffer(r)) return !1;
                const a = n.decompile(r);
                if (!a || 0 === a.length) return !1;
                const c = n.compile(e.slice(0, -1));
                return !(!u.input.check(c) || !u.output.check(a)) || (!(!s.input.check(c, t) || !s.output.check(a)) || !(!o.input.check(c) || !o.output.check(a)))
            }
            t.check = a, a.toJSON = () => "witnessScriptHash input"
        },
        431: function(e, t, r) {
            var n = r(101);

            function i(e) {
                return n("rmd160").update(e).digest()
            }

            function s(e) {
                return n("sha256").update(e).digest()
            }
            e.exports = {
                hash160: function(e) {
                    return i(s(e))
                },
                hash256: function(e) {
                    return s(s(e))
                },
                ripemd160: i,
                sha1: function(e) {
                    return n("sha1").update(e).digest()
                },
                sha256: s
            }
        },
        523: function(e, t) {
            e.exports = {
                bitcoin: {
                    messagePrefix: "Bitcoin Signed Message:\n",
                    bech32: "bc",
                    bip32: {
                        public: 76067358,
                        private: 76066276
                    },
                    pubKeyHash: 0,
                    scriptHash: 5,
                    wif: 128
                },
                testnet: {
                    messagePrefix: "Bitcoin Signed Message:\n",
                    bech32: "tb",
                    bip32: {
                        public: 70617039,
                        private: 70615956
                    },
                    pubKeyHash: 111,
                    scriptHash: 196,
                    wif: 239
                },
                litecoin: {
                    messagePrefix: "Litecoin Signed Message:\n",
                    bip32: {
                        public: 27108450,
                        private: 27106558
                    },
                    pubKeyHash: 48,
                    scriptHash: 50,
                    wif: 176
                }
            }
        },
        54: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            const n = r(4163),
                i = r(4164),
                s = r(245),
                o = r(370),
                u = r(253),
                a = r(931),
                c = r(47);
            t.OPS = r(139);
            const p = r(1392),
                h = t.OPS.OP_RESERVED;

            function f(e) {
                return s.Buffer(e) || function(e) {
                    return s.Number(e) && (e === t.OPS.OP_0 || e >= t.OPS.OP_1 && e <= t.OPS.OP_16 || e === t.OPS.OP_1NEGATE)
                }(e)
            }

            function l(e) {
                return s.Array(e) && e.every(f)
            }

            function d(e) {
                return 0 === e.length ? t.OPS.OP_0 : 1 === e.length ? e[0] >= 1 && e[0] <= 16 ? h + e[0] : 129 === e[0] ? t.OPS.OP_1NEGATE : void 0 : void 0
            }

            function w(e) {
                return Buffer.isBuffer(e)
            }

            function y(e) {
                return Buffer.isBuffer(e)
            }

            function m(e) {
                if (w(e)) return e;
                c(s.Array, e);
                const t = e.reduce((e, t) => y(t) ? 1 === t.length && void 0 !== d(t) ? e + 1 : e + a.encodingLength(t.length) + t.length : e + 1, 0),
                    r = Buffer.allocUnsafe(t);
                let n = 0;
                if (e.forEach(e => {
                        if (y(e)) {
                            const t = d(e);
                            if (void 0 !== t) return r.writeUInt8(t, n), void(n += 1);
                            n += a.encode(r, e.length, n), e.copy(r, n), n += e.length
                        } else r.writeUInt8(e, n), n += 1
                    }), n !== r.length) throw new Error("Could not decode chunks");
                return r
            }

            function g(e) {
                if (r = e, s.Array(r)) return e;
                var r;
                c(s.Buffer, e);
                const n = [];
                let i = 0;
                for (; i < e.length;) {
                    const r = e[i];
                    if (r > t.OPS.OP_0 && r <= t.OPS.OP_PUSHDATA4) {
                        const t = a.decode(e, i);
                        if (null === t) return null;
                        if (i += t.size, i + t.number > e.length) return null;
                        const r = e.slice(i, i + t.number);
                        i += t.number;
                        const s = d(r);
                        void 0 !== s ? n.push(s) : n.push(r)
                    } else n.push(r), i += 1
                }
                return n
            }

            function S(e) {
                const t = -129 & e;
                return t > 0 && t < 4
            }
            t.isPushOnly = l, t.compile = m, t.decompile = g, t.toASM = function(e) {
                return w(e) && (e = g(e)), e.map(e => {
                    if (y(e)) {
                        const t = d(e);
                        if (void 0 === t) return e.toString("hex");
                        e = t
                    }
                    return p[e]
                }).join(" ")
            }, t.fromASM = function(e) {
                return c(s.String, e), m(e.split(" ").map(e => void 0 !== t.OPS[e] ? t.OPS[e] : (c(s.Hex, e), Buffer.from(e, "hex"))))
            }, t.toStack = function(e) {
                return e = g(e), c(l, e), e.map(e => y(e) ? e : e === t.OPS.OP_0 ? Buffer.allocUnsafe(0) : n.encode(e - h))
            }, t.isCanonicalPubKey = function(e) {
                return u.isPoint(e)
            }, t.isDefinedHashType = S, t.isCanonicalScriptSignature = function(e) {
                return !!Buffer.isBuffer(e) && (!!S(e[e.length - 1]) && o.check(e.slice(0, -1)))
            }, t.number = n, t.signature = i
        },
        667: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            const n = r(4162);
            t.embed = n.p2data;
            const i = r(4165);
            t.p2ms = i.p2ms;
            const s = r(4166);
            t.p2pk = s.p2pk;
            const o = r(4167);
            t.p2pkh = o.p2pkh;
            const u = r(4168);
            t.p2sh = u.p2sh;
            const a = r(4169);
            t.p2wpkh = a.p2wpkh;
            const c = r(4170);
            t.p2wsh = c.p2wsh
        },
        668: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            const n = r(245),
                i = r(47),
                s = r(369);

            function o(e, t) {
                if ("number" != typeof e) throw new Error("cannot write a non-number as a number");
                if (e < 0) throw new Error("specified a negative value for writing an unsigned value");
                if (e > t) throw new Error("RangeError: value out of range");
                if (Math.floor(e) !== e) throw new Error("value has a fractional component")
            }

            function u(e, t) {
                const r = e.readUInt32LE(t);
                let n = e.readUInt32LE(t + 4);
                return n *= 4294967296, o(n + r, 9007199254740991), n + r
            }

            function a(e, t, r) {
                return o(t, 9007199254740991), e.writeInt32LE(-1 & t, r), e.writeUInt32LE(Math.floor(t / 4294967296), r + 4), r + 8
            }
            t.readUInt64LE = u, t.writeUInt64LE = a, t.reverseBuffer = function(e) {
                if (e.length < 1) return e;
                let t = e.length - 1,
                    r = 0;
                for (let n = 0; n < e.length / 2; n++) r = e[n], e[n] = e[t], e[t] = r, t--;
                return e
            }, t.cloneBuffer = function(e) {
                const t = Buffer.allocUnsafe(e.length);
                return e.copy(t), t
            };
            t.BufferWriter = class BufferWriter {
                constructor(e, t = 0) {
                    this.buffer = e, this.offset = t, i(n.tuple(n.Buffer, n.UInt32), [e, t])
                }
                writeUInt8(e) {
                    this.offset = this.buffer.writeUInt8(e, this.offset)
                }
                writeInt32(e) {
                    this.offset = this.buffer.writeInt32LE(e, this.offset)
                }
                writeUInt32(e) {
                    this.offset = this.buffer.writeUInt32LE(e, this.offset)
                }
                writeUInt64(e) {
                    this.offset = a(this.buffer, e, this.offset)
                }
                writeVarInt(e) {
                    s.encode(e, this.buffer, this.offset), this.offset += s.encode.bytes
                }
                writeSlice(e) {
                    if (this.buffer.length < this.offset + e.length) throw new Error("Cannot write slice out of bounds");
                    this.offset += e.copy(this.buffer, this.offset)
                }
                writeVarSlice(e) {
                    this.writeVarInt(e.length), this.writeSlice(e)
                }
                writeVector(e) {
                    this.writeVarInt(e.length), e.forEach(e => this.writeVarSlice(e))
                }
            };
            t.BufferReader = class BufferReader {
                constructor(e, t = 0) {
                    this.buffer = e, this.offset = t, i(n.tuple(n.Buffer, n.UInt32), [e, t])
                }
                readUInt8() {
                    const e = this.buffer.readUInt8(this.offset);
                    return this.offset++, e
                }
                readInt32() {
                    const e = this.buffer.readInt32LE(this.offset);
                    return this.offset += 4, e
                }
                readUInt32() {
                    const e = this.buffer.readUInt32LE(this.offset);
                    return this.offset += 4, e
                }
                readUInt64() {
                    const e = u(this.buffer, this.offset);
                    return this.offset += 8, e
                }
                readVarInt() {
                    const e = s.decode(this.buffer, this.offset);
                    return this.offset += s.decode.bytes, e
                }
                readSlice(e) {
                    if (this.buffer.length < this.offset + e) throw new Error("Cannot read slice out of bounds");
                    const t = this.buffer.slice(this.offset, this.offset + e);
                    return this.offset += e, t
                }
                readVarSlice() {
                    return this.readSlice(this.readVarInt())
                }
                readVector() {
                    const e = this.readVarInt(),
                        t = [];
                    for (let r = 0; r < e; r++) t.push(this.readVarSlice());
                    return t
                }
            }
        },
        669: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            const n = r(668),
                i = r(271),
                s = r(54),
                o = r(54),
                u = r(245),
                a = r(47),
                c = r(369);

            function p(e) {
                const t = e.length;
                return c.encodingLength(t) + t
            }
            const h = Buffer.allocUnsafe(0),
                f = [],
                l = Buffer.from("0000000000000000000000000000000000000000000000000000000000000000", "hex"),
                d = Buffer.from("0000000000000000000000000000000000000000000000000000000000000001", "hex"),
                w = Buffer.from("ffffffffffffffff", "hex"),
                y = {
                    script: h,
                    valueBuffer: w
                };
            class Transaction {
                constructor() {
                    this.version = 1, this.locktime = 0, this.ins = [], this.outs = []
                }
                static fromBuffer(e, t) {
                    const r = new n.BufferReader(e),
                        i = new Transaction;
                    i.version = r.readInt32();
                    const s = r.readUInt8(),
                        o = r.readUInt8();
                    let u = !1;
                    s === Transaction.ADVANCED_TRANSACTION_MARKER && o === Transaction.ADVANCED_TRANSACTION_FLAG ? u = !0 : r.offset -= 2;
                    const a = r.readVarInt();
                    for (let e = 0; e < a; ++e) i.ins.push({
                        hash: r.readSlice(32),
                        index: r.readUInt32(),
                        script: r.readVarSlice(),
                        sequence: r.readUInt32(),
                        witness: f
                    });
                    const c = r.readVarInt();
                    for (let e = 0; e < c; ++e) i.outs.push({
                        value: r.readUInt64(),
                        script: r.readVarSlice()
                    });
                    if (u) {
                        for (let e = 0; e < a; ++e) i.ins[e].witness = r.readVector();
                        if (!i.hasWitnesses()) throw new Error("Transaction has superfluous witness data")
                    }
                    if (i.locktime = r.readUInt32(), t) return i;
                    if (r.offset !== e.length) throw new Error("Transaction has unexpected data");
                    return i
                }
                static fromHex(e) {
                    return Transaction.fromBuffer(Buffer.from(e, "hex"), !1)
                }
                static isCoinbaseHash(e) {
                    a(u.Hash256bit, e);
                    for (let t = 0; t < 32; ++t)
                        if (0 !== e[t]) return !1;
                    return !0
                }
                isCoinbase() {
                    return 1 === this.ins.length && Transaction.isCoinbaseHash(this.ins[0].hash)
                }
                addInput(e, t, r, n) {
                    return a(u.tuple(u.Hash256bit, u.UInt32, u.maybe(u.UInt32), u.maybe(u.Buffer)), arguments), u.Null(r) && (r = Transaction.DEFAULT_SEQUENCE), this.ins.push({
                        hash: e,
                        index: t,
                        script: n || h,
                        sequence: r,
                        witness: f
                    }) - 1
                }
                addOutput(e, t) {
                    return a(u.tuple(u.Buffer, u.Satoshi), arguments), this.outs.push({
                        script: e,
                        value: t
                    }) - 1
                }
                hasWitnesses() {
                    return this.ins.some(e => 0 !== e.witness.length)
                }
                weight() {
                    return 3 * this.byteLength(!1) + this.byteLength(!0)
                }
                virtualSize() {
                    return Math.ceil(this.weight() / 4)
                }
                byteLength(e = !0) {
                    const t = e && this.hasWitnesses();
                    return (t ? 10 : 8) + c.encodingLength(this.ins.length) + c.encodingLength(this.outs.length) + this.ins.reduce((e, t) => e + 40 + p(t.script), 0) + this.outs.reduce((e, t) => e + 8 + p(t.script), 0) + (t ? this.ins.reduce((e, t) => e + function(e) {
                        const t = e.length;
                        return c.encodingLength(t) + e.reduce((e, t) => e + p(t), 0)
                    }(t.witness), 0) : 0)
                }
                clone() {
                    const e = new Transaction;
                    return e.version = this.version, e.locktime = this.locktime, e.ins = this.ins.map(e => ({
                        hash: e.hash,
                        index: e.index,
                        script: e.script,
                        sequence: e.sequence,
                        witness: e.witness
                    })), e.outs = this.outs.map(e => ({
                        script: e.script,
                        value: e.value
                    })), e
                }
                hashForSignature(e, t, r) {
                    if (a(u.tuple(u.UInt32, u.Buffer, u.Number), arguments), e >= this.ins.length) return d;
                    const n = s.compile(s.decompile(t).filter(e => e !== o.OPS.OP_CODESEPARATOR)),
                        c = this.clone();
                    if ((31 & r) === Transaction.SIGHASH_NONE) c.outs = [], c.ins.forEach((t, r) => {
                        r !== e && (t.sequence = 0)
                    });
                    else if ((31 & r) === Transaction.SIGHASH_SINGLE) {
                        if (e >= this.outs.length) return d;
                        c.outs.length = e + 1;
                        for (let t = 0; t < e; t++) c.outs[t] = y;
                        c.ins.forEach((t, r) => {
                            r !== e && (t.sequence = 0)
                        })
                    }
                    r & Transaction.SIGHASH_ANYONECANPAY ? (c.ins = [c.ins[e]], c.ins[0].script = n) : (c.ins.forEach(e => {
                        e.script = h
                    }), c.ins[e].script = n);
                    const p = Buffer.allocUnsafe(c.byteLength(!1) + 4);
                    return p.writeInt32LE(r, p.length - 4), c.__toBuffer(p, 0, !1), i.hash256(p)
                }
                hashForWitnessV0(e, t, r, s) {
                    a(u.tuple(u.UInt32, u.Buffer, u.Satoshi, u.UInt32), arguments);
                    let o, c = Buffer.from([]),
                        h = l,
                        f = l,
                        d = l;
                    if (s & Transaction.SIGHASH_ANYONECANPAY || (c = Buffer.allocUnsafe(36 * this.ins.length), o = new n.BufferWriter(c, 0), this.ins.forEach(e => {
                            o.writeSlice(e.hash), o.writeUInt32(e.index)
                        }), f = i.hash256(c)), s & Transaction.SIGHASH_ANYONECANPAY || (31 & s) === Transaction.SIGHASH_SINGLE || (31 & s) === Transaction.SIGHASH_NONE || (c = Buffer.allocUnsafe(4 * this.ins.length), o = new n.BufferWriter(c, 0), this.ins.forEach(e => {
                            o.writeUInt32(e.sequence)
                        }), d = i.hash256(c)), (31 & s) !== Transaction.SIGHASH_SINGLE && (31 & s) !== Transaction.SIGHASH_NONE) {
                        const e = this.outs.reduce((e, t) => e + 8 + p(t.script), 0);
                        c = Buffer.allocUnsafe(e), o = new n.BufferWriter(c, 0), this.outs.forEach(e => {
                            o.writeUInt64(e.value), o.writeVarSlice(e.script)
                        }), h = i.hash256(c)
                    } else if ((31 & s) === Transaction.SIGHASH_SINGLE && e < this.outs.length) {
                        const t = this.outs[e];
                        c = Buffer.allocUnsafe(8 + p(t.script)), o = new n.BufferWriter(c, 0), o.writeUInt64(t.value), o.writeVarSlice(t.script), h = i.hash256(c)
                    }
                    c = Buffer.allocUnsafe(156 + p(t)), o = new n.BufferWriter(c, 0);
                    const w = this.ins[e];
                    return o.writeUInt32(this.version), o.writeSlice(f), o.writeSlice(d), o.writeSlice(w.hash), o.writeUInt32(w.index), o.writeVarSlice(t), o.writeUInt64(r), o.writeUInt32(w.sequence), o.writeSlice(h), o.writeUInt32(this.locktime), o.writeUInt32(s), i.hash256(c)
                }
                getHash(e) {
                    return e && this.isCoinbase() ? Buffer.alloc(32, 0) : i.hash256(this.__toBuffer(void 0, void 0, e))
                }
                getId() {
                    return n.reverseBuffer(this.getHash(!1)).toString("hex")
                }
                toBuffer(e, t) {
                    return this.__toBuffer(e, t, !0)
                }
                toHex() {
                    return this.toBuffer(void 0, void 0).toString("hex")
                }
                setInputScript(e, t) {
                    a(u.tuple(u.Number, u.Buffer), arguments), this.ins[e].script = t
                }
                setWitness(e, t) {
                    a(u.tuple(u.Number, [u.Buffer]), arguments), this.ins[e].witness = t
                }
                __toBuffer(e, t, r = !1) {
                    e || (e = Buffer.allocUnsafe(this.byteLength(r)));
                    const i = new n.BufferWriter(e, t || 0);
                    i.writeInt32(this.version);
                    const s = r && this.hasWitnesses();
                    return s && (i.writeUInt8(Transaction.ADVANCED_TRANSACTION_MARKER), i.writeUInt8(Transaction.ADVANCED_TRANSACTION_FLAG)), i.writeVarInt(this.ins.length), this.ins.forEach(e => {
                        i.writeSlice(e.hash), i.writeUInt32(e.index), i.writeVarSlice(e.script), i.writeUInt32(e.sequence)
                    }), i.writeVarInt(this.outs.length), this.outs.forEach(e => {
                        void 0 !== e.value ? i.writeUInt64(e.value) : i.writeSlice(e.valueBuffer), i.writeVarSlice(e.script)
                    }), s && this.ins.forEach(e => {
                        i.writeVector(e.witness)
                    }), i.writeUInt32(this.locktime), void 0 !== t ? e.slice(t, i.offset) : e
                }
            }
            Transaction.DEFAULT_SEQUENCE = 4294967295, Transaction.SIGHASH_ALL = 1, Transaction.SIGHASH_NONE = 2, Transaction.SIGHASH_SINGLE = 3, Transaction.SIGHASH_ANYONECANPAY = 128, Transaction.ADVANCED_TRANSACTION_MARKER = 0, Transaction.ADVANCED_TRANSACTION_FLAG = 1, t.Transaction = Transaction
        }
    }
]);