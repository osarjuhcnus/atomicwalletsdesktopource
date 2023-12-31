(window.webpackJsonp = window.webpackJsonp || []).push([
    [247], {
        5421: function(e, t, i) {
            "use strict";
            var r = i(2);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var n = r(i(9468)),
                o = r(i(461)),
                s = i(930);
            const h = Number("0xc2d6d0b4");
            class ZECCoin extends((0, s.BitgoMixin)((0, s.BitcoinLikeFeeMixin)(o.default))) {
                constructor({
                    alias: e,
                    notify: t,
                    feeData: i,
                    explorers: r,
                    txWebUrl: o,
                    socket: s
                }) {
                    super({
                        alias: e,
                        notify: t,
                        name: "ZCash",
                        ticker: "ZEC",
                        decimal: 8,
                        derivation: "m/44'/133'/0'/0/0",
                        unspendableBalance: "0",
                        explorers: r,
                        txWebUrl: o,
                        socket: s
                    }), this.feePerByte = i.feePerByte, this.coefficient = i.coefficient, this.coreLibrary = n.default, this.transactions = [], this.network = this.coreLibrary.networks.zcash, this.branchId = h
                }
                get branchId() {
                    return this.network.consensusBranchId[4]
                }
                set branchId(e) {
                    this.network.consensusBranchId[4] = e
                }
                getTransactionBuilder() {
                    const e = new this.coreLibrary.TransactionBuilder(this.network);
                    return e.setVersion(4), e.setLockTime(0), e.setVersionGroupId(parseInt("0x892F2085", 16)), e.setExpiryHeight(499999999), e
                }
                signInput(e, t, i, r) {
                    e.sign(i, t, null, this.coreLibrary.Transaction.SIGHASH_ALL, r.satoshis, void 0, !0)
                }
            }
            var u = ZECCoin;
            t.default = u
        },
        5545: function(e, t, i) {
            var r = i(47),
                n = Math.pow(2, 31) - 1;

            function o(e) {
                return r.String(e) && e.match(/^(m\/)?(\d+'?\/)*\d+'?$/)
            }
            o.toJSON = function() {
                return "BIP32 derivation path"
            };
            var s = r.quacksLike("BigInteger"),
                h = r.quacksLike("Point"),
                ECSignature = r.compile({
                    r: s,
                    s: s
                }),
                u = r.oneOf(r.UInt8, r.UInt16),
                a = r.compile({
                    messagePrefix: r.oneOf(r.Buffer, r.String),
                    bip32: {
                        public: r.UInt32,
                        private: r.UInt32
                    },
                    pubKeyHash: u,
                    scriptHash: u,
                    wif: r.UInt8
                }),
                c = {
                    BigInt: s,
                    BIP32Path: o,
                    Buffer256bit: r.BufferN(32),
                    ECPoint: h,
                    ECSignature: ECSignature,
                    Hash160bit: r.BufferN(20),
                    Hash256bit: r.BufferN(32),
                    Network: a,
                    Satoshi: function(e) {
                        return r.UInt53(e) && e <= 21e14
                    },
                    UInt31: function(e) {
                        return r.UInt32(e) && e <= n
                    },
                    NetworkVersion: u
                };
            for (var f in r) c[f] = r[f];
            e.exports = c
        },
        5573: function(e, t, i) {
            var r = i(21).Buffer,
                n = i(370),
                o = i(931),
                s = i(47),
                h = i(5545),
                u = i(7263),
                a = i(139),
                c = i(1392),
                f = a.OP_RESERVED;

            function A(e) {
                return h.Buffer(e) || function(e) {
                    return h.Number(e) && (e === a.OP_0 || e >= a.OP_1 && e <= a.OP_16 || e === a.OP_1NEGATE)
                }(e)
            }

            function I(e) {
                return h.Array(e) && e.every(A)
            }

            function p(e) {
                return 0 === e.length ? a.OP_0 : 1 === e.length ? e[0] >= 1 && e[0] <= 16 ? f + e[0] : 129 === e[0] ? a.OP_1NEGATE : void 0 : void 0
            }

            function g(e) {
                if (r.isBuffer(e)) return e;
                s(h.Array, e);
                var t = e.reduce((function(e, t) {
                        return r.isBuffer(t) ? 1 === t.length && void 0 !== p(t) ? e + 1 : e + o.encodingLength(t.length) + t.length : e + 1
                    }), 0),
                    i = r.allocUnsafe(t),
                    n = 0;
                if (e.forEach((function(e) {
                        if (r.isBuffer(e)) {
                            var t = p(e);
                            if (void 0 !== t) return i.writeUInt8(t, n), void(n += 1);
                            n += o.encode(i, e.length, n), e.copy(i, n), n += e.length
                        } else i.writeUInt8(e, n), n += 1
                    })), n !== i.length) throw new Error("Could not decode chunks");
                return i
            }

            function l(e) {
                if (h.Array(e)) return e;
                s(h.Buffer, e);
                for (var t = [], i = 0; i < e.length;) {
                    var r = e[i];
                    if (r > a.OP_0 && r <= a.OP_PUSHDATA4) {
                        var n = o.decode(e, i);
                        if (null === n) return [];
                        if ((i += n.size) + n.number > e.length) return [];
                        var u = e.slice(i, i + n.number);
                        i += n.number;
                        var c = p(u);
                        void 0 !== c ? t.push(c) : t.push(u)
                    } else t.push(r), i += 1
                }
                return t
            }

            function C(e) {
                var t = -193 & e;
                return t > 0 && t < 4
            }
            e.exports = {
                compile: g,
                decompile: l,
                fromASM: function(e) {
                    return s(h.String, e), g(e.split(" ").map((function(e) {
                        return void 0 !== a[e] ? a[e] : (s(h.Hex, e), r.from(e, "hex"))
                    })))
                },
                toASM: function(e) {
                    return r.isBuffer(e) && (e = l(e)), e.map((function(e) {
                        if (r.isBuffer(e)) {
                            var t = p(e);
                            if (void 0 === t) return e.toString("hex");
                            e = t
                        }
                        return c[e]
                    })).join(" ")
                },
                toStack: function(e) {
                    return e = l(e), s(I, e), e.map((function(e) {
                        return r.isBuffer(e) ? e : e === a.OP_0 ? r.allocUnsafe(0) : u.encode(e - f)
                    }))
                },
                number: i(7263),
                isCanonicalPubKey: function(e) {
                    if (!r.isBuffer(e)) return !1;
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
                    return !!r.isBuffer(e) && (!!C(e[e.length - 1]) && n.check(e.slice(0, -1)))
                },
                isPushOnly: I,
                isDefinedHashType: C
            }
        },
        5781: function(e, t) {
            function i(e, t) {
                if (!e) throw new Error(t || "AssertionError")
            }
            i.notEqual = function(e, t, r) {
                i(e != t, r)
            }, i.notOk = function(e, t) {
                i(!e, t)
            }, i.equal = function(e, t, r) {
                i(e == t, r)
            }, i.ok = i, e.exports = i
        },
        5786: function(e, t) {
            const i = "bch",
                r = "bsv",
                n = "btc",
                o = "btg",
                s = "ltc",
                h = "zec",
                u = "dash";
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
                    wif: 128,
                    coin: n
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
                    wif: 239,
                    coin: n
                },
                bitcoincash: {
                    messagePrefix: "Bitcoin Signed Message:\n",
                    bip32: {
                        public: 76067358,
                        private: 76066276
                    },
                    pubKeyHash: 0,
                    scriptHash: 5,
                    wif: 128,
                    coin: i,
                    forkId: 0
                },
                bitcoincashTestnet: {
                    messagePrefix: "Bitcoin Signed Message:\n",
                    bip32: {
                        public: 70617039,
                        private: 70615956
                    },
                    pubKeyHash: 111,
                    scriptHash: 196,
                    wif: 239,
                    coin: i
                },
                bitcoingold: {
                    messagePrefix: "Bitcoin Gold Signed Message:\n",
                    bech32: "btg",
                    bip32: {
                        public: 76067358,
                        private: 76066276
                    },
                    pubKeyHash: 38,
                    scriptHash: 23,
                    wif: 128,
                    coin: o,
                    forkId: 79
                },
                bitcoinsv: {
                    messagePrefix: "Bitcoin Signed Message:\n",
                    bip32: {
                        public: 76067358,
                        private: 76066276
                    },
                    pubKeyHash: 0,
                    scriptHash: 5,
                    wif: 128,
                    coin: r,
                    forkId: 0
                },
                bitcoinsvTestnet: {
                    messagePrefix: "Bitcoin Signed Message:\n",
                    bip32: {
                        public: 70617039,
                        private: 70615956
                    },
                    pubKeyHash: 111,
                    scriptHash: 196,
                    wif: 239,
                    coin: r
                },
                dash: {
                    messagePrefix: "DarkCoin Signed Message:\n",
                    bip32: {
                        public: 76067358,
                        private: 76066276
                    },
                    pubKeyHash: 76,
                    scriptHash: 16,
                    wif: 204,
                    coin: u
                },
                dashTest: {
                    messagePrefix: "DarkCoin Signed Message:\n",
                    bip32: {
                        public: 70617039,
                        private: 70615956
                    },
                    pubKeyHash: 140,
                    scriptHash: 19,
                    wif: 239,
                    coin: u
                },
                litecoin: {
                    messagePrefix: "Litecoin Signed Message:\n",
                    bech32: "ltc",
                    bip32: {
                        public: 76067358,
                        private: 76066276
                    },
                    pubKeyHash: 48,
                    scriptHash: 50,
                    wif: 176,
                    coin: s
                },
                litecoinTest: {
                    messagePrefix: "Litecoin Signed Message:\n",
                    bech32: "tltc",
                    bip32: {
                        public: 70617039,
                        private: 70615956
                    },
                    pubKeyHash: 111,
                    scriptHash: 58,
                    wif: 239,
                    coin: s
                },
                zcash: {
                    messagePrefix: "ZCash Signed Message:\n",
                    bip32: {
                        public: 76067358,
                        private: 76066276
                    },
                    pubKeyHash: 7352,
                    scriptHash: 7357,
                    wif: 128,
                    consensusBranchId: {
                        1: 0,
                        2: 0,
                        3: 1537743641,
                        4: 4122551051
                    },
                    coin: h
                },
                zcashTest: {
                    messagePrefix: "ZCash Signed Message:\n",
                    bip32: {
                        public: 70617039,
                        private: 70615956
                    },
                    pubKeyHash: 7461,
                    scriptHash: 7354,
                    wif: 239,
                    consensusBranchId: {
                        1: 0,
                        2: 0,
                        3: 1537743641,
                        4: 4122551051
                    },
                    coin: h
                }
            }
        },
        5930: function(e, t, i) {
            var r = i(101),
                n = i(24);

            function o(e) {
                var t = "rmd160",
                    i = n.getHashes();
                return -1 === i.indexOf(t) && -1 !== i.indexOf("ripemd160") && (t = "ripemd160"), r(t).update(e).digest()
            }

            function s(e) {
                return r("sha256").update(e).digest()
            }
            e.exports = {
                hash160: function(e) {
                    return o(s(e))
                },
                hash256: function(e) {
                    return s(s(e))
                },
                ripemd160: o,
                sha1: function(e) {
                    return r("sha1").update(e).digest()
                },
                sha256: s
            }
        },
        6198: function(e, t, i) {
            var r = i(6538),
                n = i(5930),
                o = i(9486),
                s = i(125),
                h = i(47),
                u = i(5545),
                a = i(281),
                c = i(5786),
                BigInteger = i(109),
                f = i(280),
                A = f.getCurveByName("secp256k1"),
                I = o.__curve,
                p = i(7267);

            function ECPair(e, t, i) {
                if (i && h({
                        compressed: u.maybe(u.Boolean),
                        network: u.maybe(u.Network)
                    }, i), i = i || {}, e) {
                    if (e.signum() <= 0) throw new Error("Private key must be greater than 0");
                    if (e.compareTo(I.n) >= 0) throw new Error("Private key must be less than the curve order");
                    if (t) throw new TypeError("Unexpected publicKey parameter");
                    this.d = e
                } else h(u.ECPoint, t), this.__Q = t;
                this.compressed = void 0 === i.compressed || i.compressed, this.network = i.network || c.bitcoin
            }
            Object.defineProperty(ECPair.prototype, "Q", {
                get: function() {
                    if (!this.__Q && this.d) {
                        const e = p.publicKeyCreate(this.d.toBuffer(32), !1);
                        this.__Q = e ? f.Point.decodeFrom(A, e) : I.G.multiply(this.d)
                    }
                    return this.__Q
                }
            }), ECPair.fromPublicKeyBuffer = function(e, t) {
                var i = f.Point.decodeFrom(I, e);
                return new ECPair(null, i, {
                    compressed: i.compressed,
                    network: t
                })
            }, ECPair.fromWIF = function(e, t) {
                var i = a.decode(e),
                    r = i.version;
                if (u.Array(t)) {
                    if (!(t = t.filter((function(e) {
                            return r === e.wif
                        })).pop())) throw new Error("Unknown network version")
                } else if (t = t || c.bitcoin, r !== t.wif) throw new Error("Invalid network version");
                return new ECPair(BigInteger.fromBuffer(i.privateKey), null, {
                    compressed: i.compressed,
                    network: t
                })
            }, ECPair.makeRandom = function(e) {
                var t, i = (e = e || {}).rng || s;
                do {
                    var r = i(32);
                    h(u.Buffer256bit, r), t = BigInteger.fromBuffer(r)
                } while (t.signum() <= 0 || t.compareTo(I.n) >= 0);
                return new ECPair(t, null, e)
            }, ECPair.prototype.getAddress = function() {
                return r.toBase58Check(n.hash160(this.getPublicKeyBuffer()), this.getNetwork().pubKeyHash)
            }, ECPair.prototype.getNetwork = function() {
                return this.network
            }, ECPair.prototype.getPublicKeyBuffer = function() {
                return this.Q.getEncoded(this.compressed)
            }, ECPair.prototype.sign = function(e) {
                if (!this.d) throw new Error("Missing private key");
                var t = p.sign(e, this.d);
                return void 0 !== t ? t : o.sign(e, this.d)
            }, ECPair.prototype.toWIF = function() {
                if (!this.d) throw new Error("Missing private key");
                return a.encode(this.network.wif, this.d.toBuffer(32), this.compressed)
            }, ECPair.prototype.verify = function(e, t) {
                var i = p.verify(e, t, this.getPublicKeyBuffer());
                return void 0 !== i ? i : o.verify(e, t, this.Q)
            }, ECPair.fromPrivateKeyBuffer = function(e, t) {
                return i(6537).privateKeyBufferToECPair(e, t)
            }, ECPair.prototype.getPrivateKeyBuffer = function() {
                return i(6537).privateKeyBufferFromECPair(this)
            }, e.exports = ECPair
        },
        6199: function(e, t, i) {
            var r = i(370),
                n = i(47),
                o = i(5545),
                BigInteger = i(109);

            function ECSignature(e, t) {
                n(o.tuple(o.BigInt, o.BigInt), arguments), this.r = e, this.s = t
            }
            ECSignature.parseCompact = function(e) {
                n(o.BufferN(65), e);
                var t = e.readUInt8(0) - 27;
                if (t !== (7 & t)) throw new Error("Invalid signature parameter");
                return {
                    compressed: !!(4 & t),
                    i: 3 & t,
                    signature: ECSignature.fromRSBuffer(e.slice(1))
                }
            }, ECSignature.fromRSBuffer = function(e) {
                return n(o.BufferN(64), e), new ECSignature(BigInteger.fromBuffer(e.slice(0, 32)), BigInteger.fromBuffer(e.slice(32, 64)))
            }, ECSignature.fromDER = function(e) {
                var t = r.decode(e);
                return new ECSignature(BigInteger.fromDERInteger(t.r), BigInteger.fromDERInteger(t.s))
            }, ECSignature.parseScriptSignature = function(e) {
                var t = e.readUInt8(e.length - 1),
                    i = -193 & t;
                if (i <= 0 || i >= 4) throw new Error("Invalid hashType " + t);
                return {
                    signature: ECSignature.fromDER(e.slice(0, -1)),
                    hashType: t
                }
            }, ECSignature.prototype.toCompact = function(e, t) {
                t && (e += 4), e += 27;
                var i = Buffer.alloc(65);
                return i.writeUInt8(e, 0), this.toRSBuffer(i, 1), i
            }, ECSignature.prototype.toDER = function() {
                var e = Buffer.from(this.r.toDERInteger()),
                    t = Buffer.from(this.s.toDERInteger());
                return r.encode(e, t)
            }, ECSignature.prototype.toRSBuffer = function(e, t) {
                return e = e || Buffer.alloc(64), this.r.toBuffer(32).copy(e, t), this.s.toBuffer(32).copy(e, t + 32), e
            }, ECSignature.prototype.toScriptSignature = function(e) {
                var t = -193 & e;
                if (t <= 0 || t >= 4) throw new Error("Invalid hashType " + e);
                var i = Buffer.alloc(1);
                return i.writeUInt8(e, 0), Buffer.concat([this.toDER(), i])
            }, e.exports = ECSignature
        },
        6200: function(e, t, i) {
            const r = i(5545),
                n = i(47),
                o = i(369);

            function s(e, t) {
                if ("number" != typeof e) throw new Error("cannot write a non-number as a number");
                if (e < 0) throw new Error("specified a negative value for writing an unsigned value");
                if (e > t) throw new Error("RangeError: value out of range");
                if (Math.floor(e) !== e) throw new Error("value has a fractional component")
            }

            function h(e, t) {
                const i = e.readUInt32LE(t);
                let r = e.readUInt32LE(t + 4);
                return r *= 4294967296, s(r + i, 9007199254740991), r + i
            }

            function u(e, t, i) {
                return s(t, 9007199254740991), e.writeInt32LE(-1 & t, i), e.writeUInt32LE(Math.floor(t / 4294967296), i + 4), i + 8
            }
            e.exports = {
                readUInt64LE: h,
                writeUInt64LE: u,
                reverseBuffer: function(e) {
                    if (e.length < 1) return e;
                    let t = e.length - 1,
                        i = 0;
                    for (let r = 0; r < e.length / 2; r++) i = e[r], e[r] = e[t], e[t] = i, t--;
                    return e
                },
                BufferWriter: class BufferWriter {
                    constructor(e, t = 0) {
                        this.buffer = e, this.offset = t, n(r.tuple(r.Buffer, r.UInt32), [e, t])
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
                        this.offset = u(this.buffer, e, this.offset)
                    }
                    writeVarInt(e) {
                        o.encode(e, this.buffer, this.offset), this.offset += o.encode.bytes
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
                },
                BufferReader: class BufferReader {
                    constructor(e, t = 0) {
                        this.buffer = e, this.offset = t, n(r.tuple(r.Buffer, r.UInt32), [e, t])
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
                        const e = h(this.buffer, this.offset);
                        return this.offset += 8, e
                    }
                    readVarInt() {
                        const e = o.decode(this.buffer, this.offset);
                        return this.offset += o.decode.bytes, e
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
                        for (let i = 0; i < e; i++) t.push(this.readVarSlice());
                        return t
                    }
                }
            }
        },
        6201: function(e, t, i) {
            const r = i(47),
                n = i(5786);

            function o() {
                return Object.keys(n).map(e => n[e])
            }

            function s(e) {
                return Object.keys(n).find(t => n[t] === e)
            }

            function h(e) {
                switch (e) {
                    case n.bitcoin:
                    case n.testnet:
                        return n.bitcoin;
                    case n.bitcoincash:
                    case n.bitcoincashTestnet:
                        return n.bitcoincash;
                    case n.bitcoingold:
                        return n.bitcoingold;
                    case n.bitcoinsv:
                    case n.bitcoinsvTestnet:
                        return n.bitcoinsv;
                    case n.dash:
                    case n.dashTest:
                        return n.dash;
                    case n.litecoin:
                    case n.litecoinTest:
                        return n.litecoin;
                    case n.zcash:
                    case n.zcashTest:
                        return n.zcash
                }
                throw new TypeError("invalid network")
            }

            function u(e) {
                return h(e) === e
            }

            function a(e) {
                return h(e) !== e
            }
            const c = o().filter(u),
                f = o().filter(a),
                A = new Map(c.map(e => [e, f.filter(t => h(t) === e)]));

            function I(e) {
                return h(e) === n.bitcoin
            }

            function p(e) {
                return h(e) === n.bitcoincash
            }

            function g(e) {
                return h(e) === n.bitcoingold
            }

            function l(e) {
                return h(e) === n.bitcoinsv
            }

            function C(e) {
                return h(e) === n.dash
            }

            function d(e) {
                return h(e) === n.litecoin
            }

            function w(e) {
                return h(e) === n.zcash
            }
            const E = r.oneOf(I, p, g, l, C, d, w);
            e.exports = {
                BTC: n.bitcoin.coin,
                BCH: n.bitcoincash.coin,
                BSV: n.bitcoinsv.coin,
                BTG: n.bitcoingold.coin,
                DASH: n.dash.coin,
                LTC: n.litecoin.coin,
                ZEC: n.zcash.coin,
                getNetworkList: o,
                getNetworkName: s,
                getMainnet: h,
                isMainnet: u,
                getTestnet: function(e) {
                    if (a(e)) return e;
                    const t = A.get(e);
                    if (void 0 === t) throw new Error("invalid argument");
                    if (0 !== t.length) {
                        if (1 === t.length) return t[0];
                        throw new Error("more than one testnet for " + s(e))
                    }
                },
                isTestnet: a,
                isSameCoin: function(e, t) {
                    return h(e) === h(t)
                },
                isBitcoin: I,
                isBitcoinCash: p,
                isBitcoinGold: g,
                isBitcoinSV: l,
                isDash: C,
                isLitecoin: d,
                isZcash: w,
                isValidNetwork: E,
                isValidCoin: E
            }
        },
        6533: function(e, t, i) {
            var r = i(5573).decompile,
                n = i(6534),
                o = i(9470),
                s = i(6535),
                h = i(6536),
                u = i(9475),
                a = i(9478),
                c = i(9480),
                f = i(9482),
                A = {
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
                    var i = r(e);
                    return h.input.check(i) ? A.P2PKH : u.input.check(i, t) ? A.P2SH : n.input.check(i, t) ? A.MULTISIG : s.input.check(i) ? A.P2PK : A.NONSTANDARD
                },
                classifyOutput: function(e) {
                    if (a.output.check(e)) return A.P2WPKH;
                    if (c.output.check(e)) return A.P2WSH;
                    if (h.output.check(e)) return A.P2PKH;
                    if (u.output.check(e)) return A.P2SH;
                    var t = r(e);
                    return n.output.check(t) ? A.MULTISIG : s.output.check(t) ? A.P2PK : f.output.check(t) ? A.WITNESS_COMMITMENT : o.output.check(t) ? A.NULLDATA : A.NONSTANDARD
                },
                classifyWitness: function(e, t) {
                    var i = r(e);
                    return a.input.check(i) ? A.P2WPKH : c.input.check(i, t) ? A.P2WSH : A.NONSTANDARD
                },
                multisig: n,
                nullData: o,
                pubKey: s,
                pubKeyHash: h,
                scriptHash: u,
                witnessPubKeyHash: a,
                witnessScriptHash: c,
                witnessCommitment: f,
                types: A
            }
        },
        6534: function(e, t, i) {
            e.exports = {
                input: i(9469),
                output: i(7264)
            }
        },
        6535: function(e, t, i) {
            e.exports = {
                input: i(9471),
                output: i(9472)
            }
        },
        6536: function(e, t, i) {
            e.exports = {
                input: i(9473),
                output: i(9474)
            }
        },
        6537: function(e, t, i) {
            const BigInteger = i(109),
                ECPair = i(6198);
            e.exports = {
                privateKeyBufferToECPair: function(e, t) {
                    if (!Buffer.isBuffer(e) || 32 !== e.length) throw new Error("invalid private key buffer");
                    const i = BigInteger.fromBuffer(e);
                    return new ECPair(i, null, {
                        network: t
                    })
                },
                privateKeyBufferFromECPair: function(e) {
                    if (!(e instanceof ECPair)) throw new TypeError("invalid argument ecpair");
                    if (!e.d) throw new Error("Missing private key");
                    return e.d.toBuffer(32)
                }
            }
        },
        6538: function(e, t, i) {
            var r = i(21).Buffer,
                n = i(9485),
                o = i(172),
                s = i(5573),
                h = i(6533),
                u = i(5786),
                a = i(47),
                c = i(5545);

            function f(e) {
                var t = o.decode(e);
                if (t.length < 21) throw new TypeError(e + " is too short");
                if (t.length > 22) throw new TypeError(e + " is too long");
                var i = 22 === t.length,
                    r = i ? 2 : 1;
                return {
                    version: i ? t.readUInt16BE(0) : t[0],
                    hash: t.slice(r)
                }
            }

            function A(e) {
                var t = n.decode(e),
                    i = n.fromWords(t.words.slice(1));
                return {
                    version: t.words[0],
                    prefix: t.prefix,
                    data: r.from(i)
                }
            }

            function I(e, t) {
                a(c.tuple(c.Hash160bit, c.UInt16), arguments);
                var i = t > 255,
                    n = i ? 22 : 21,
                    s = i ? 2 : 1,
                    h = r.allocUnsafe(n);
                return i ? h.writeUInt16BE(t, 0) : h.writeUInt8(t, 0), e.copy(h, s), o.encode(h)
            }

            function p(e, t, i) {
                var r = n.toWords(e);
                return r.unshift(t), n.encode(i, r)
            }
            e.exports = {
                fromBase58Check: f,
                fromBech32: A,
                fromOutputScript: function(e, t) {
                    if (t = t || u.bitcoin, h.pubKeyHash.output.check(e)) return I(s.compile(e).slice(3, 23), t.pubKeyHash);
                    if (h.scriptHash.output.check(e)) return I(s.compile(e).slice(2, 22), t.scriptHash);
                    if (h.witnessPubKeyHash.output.check(e)) return p(s.compile(e).slice(2, 22), 0, t.bech32);
                    if (h.witnessScriptHash.output.check(e)) return p(s.compile(e).slice(2, 34), 0, t.bech32);
                    throw new Error(s.toASM(e) + " has no matching Address")
                },
                toBase58Check: I,
                toBech32: p,
                toOutputScript: function(e, t) {
                    var i;
                    t = t || u.bitcoin;
                    try {
                        i = f(e)
                    } catch (e) {}
                    if (i) {
                        if (i.version === t.pubKeyHash) return h.pubKeyHash.output.encode(i.hash);
                        if (i.version === t.scriptHash) return h.scriptHash.output.encode(i.hash)
                    } else {
                        try {
                            i = A(e)
                        } catch (e) {}
                        if (i) {
                            if (i.prefix !== t.bech32) throw new Error(e + " has an invalid prefix");
                            if (0 === i.version) {
                                if (20 === i.data.length) return h.witnessPubKeyHash.output.encode(i.data);
                                if (32 === i.data.length) return h.witnessScriptHash.output.encode(i.data)
                            }
                        }
                    }
                    throw new Error(e + " has no matching Script")
                }
            }
        },
        6539: function(e, t, i) {
            var r = i(21).Buffer,
                n = i(5930),
                o = i(5573),
                {
                    BufferReader: s,
                    BufferWriter: h
                } = i(6200),
                {
                    ZcashBufferReader: u,
                    ZcashBufferWriter: a
                } = i(9488),
                c = i(6201),
                f = i(139),
                A = i(5786),
                I = i(47),
                p = i(5545),
                g = i(369),
                l = i(9489),
                C = i(7268);

            function d(e) {
                var t = e.length;
                return g.encodingLength(t) + t
            }

            function w(e = A.bitcoin) {
                this.version = 1, this.locktime = 0, this.ins = [], this.outs = [], this.network = e, c.isZcash(e) && (this.joinsplits = [], this.joinsplitPubkey = [], this.joinsplitSig = [], this.overwintered = 0, this.versionGroupId = 0, this.expiryHeight = 0, this.valueBalance = 0, this.vShieldedSpend = [], this.vShieldedOutput = [], this.bindingSig = 0), c.isDash(e) && (this.type = 0, this.extraPayload = r.alloc(0))
            }
            w.DEFAULT_SEQUENCE = 4294967295, w.SIGHASH_ALL = 1, w.SIGHASH_NONE = 2, w.SIGHASH_SINGLE = 3, w.SIGHASH_ANYONECANPAY = 128, w.SIGHASH_BITCOINCASHBIP143 = 64, w.ADVANCED_TRANSACTION_MARKER = 0, w.ADVANCED_TRANSACTION_FLAG = 1;
            var E = r.allocUnsafe(0),
                S = [],
                y = r.from("0000000000000000000000000000000000000000000000000000000000000000", "hex"),
                B = r.from("0000000000000000000000000000000000000000000000000000000000000001", "hex"),
                v = r.from("ffffffffffffffff", "hex"),
                m = {
                    script: E,
                    valueBuffer: v
                };
            w.DASH_NORMAL = 0, w.DASH_PROVIDER_REGISTER = 1, w.DASH_PROVIDER_UPDATE_SERVICE = 2, w.DASH_PROVIDER_UPDATE_REGISTRAR = 3, w.DASH_PROVIDER_UPDATE_REVOKE = 4, w.DASH_COINBASE = 5, w.DASH_QUORUM_COMMITMENT = 6, w.fromBuffer = function(e, t = A.bitcoin, i) {
                let r = new s(e),
                    n = new w(t);
                if (n.version = r.readInt32(), c.isZcash(t)) {
                    if (n.overwintered = n.version >>> 31, n.version = 2147483647 & n.version, !t.consensusBranchId.hasOwnProperty(n.version)) throw new Error("Unsupported Zcash transaction");
                    r = new u(r.buffer, r.offset, n.version)
                }
                if (c.isDash(t) && (n.type = n.version >> 16, n.version = 65535 & n.version, 3 === n.version && (n.type < w.DASH_NORMAL || n.type > w.DASH_QUORUM_COMMITMENT))) throw new Error("Unsupported Dash transaction type");
                var o = r.readUInt8(),
                    h = r.readUInt8(),
                    a = !1;
                o !== w.ADVANCED_TRANSACTION_MARKER || h !== w.ADVANCED_TRANSACTION_FLAG || c.isZcash(t) ? r.offset -= 2 : a = !0, n.isOverwinterCompatible() && (n.versionGroupId = r.readUInt32());
                for (var f = r.readVarInt(), I = 0; I < f; ++I) n.ins.push({
                    hash: r.readSlice(32),
                    index: r.readUInt32(),
                    script: r.readVarSlice(),
                    sequence: r.readUInt32(),
                    witness: S
                });
                var p = r.readVarInt();
                for (I = 0; I < p; ++I) n.outs.push({
                    value: r.readUInt64(),
                    script: r.readVarSlice()
                });
                if (a) {
                    for (I = 0; I < f; ++I) n.ins[I].witness = r.readVector();
                    if (!n.hasWitnesses()) throw new Error("Transaction has superfluous witness data")
                }
                if (n.locktime = r.readUInt32(), c.isZcash(t)) {
                    if (n.isOverwinterCompatible() && (n.expiryHeight = r.readUInt32()), n.isSaplingCompatible()) {
                        n.valueBalance = r.readInt64();
                        var g = r.readVarInt();
                        for (I = 0; I < g; ++I) n.vShieldedSpend.push(r.readShieldedSpend());
                        var l = r.readVarInt();
                        for (I = 0; I < l; ++I) n.vShieldedOutput.push(r.readShieldedOutput())
                    }
                    if (n.supportsJoinSplits()) {
                        var C = r.readVarInt();
                        for (I = 0; I < C; ++I) n.joinsplits.push(r.readJoinSplit());
                        C > 0 && (n.joinsplitPubkey = r.readSlice(32), n.joinsplitSig = r.readSlice(64))
                    }
                    n.isSaplingCompatible() && n.vShieldedSpend.length + n.vShieldedOutput.length > 0 && (n.bindingSig = r.readSlice(64))
                }
                if (n.isDashSpecialTransaction() && (n.extraPayload = r.readVarSlice()), n.network = t, i) return n;
                if (r.offset !== e.length) throw new Error("Transaction has unexpected data");
                return n
            }, w.fromHex = function(e, t) {
                return w.fromBuffer(r.from(e, "hex"), t)
            }, w.isCoinbaseHash = function(e) {
                I(p.Hash256bit, e);
                for (var t = 0; t < 32; ++t)
                    if (0 !== e[t]) return !1;
                return !0
            }, w.prototype.isSaplingCompatible = function() {
                return c.isZcash(this.network) && this.version >= C.SAPLING
            }, w.prototype.isOverwinterCompatible = function() {
                return c.isZcash(this.network) && this.version >= C.OVERWINTER
            }, w.prototype.supportsJoinSplits = function() {
                return c.isZcash(this.network) && this.version >= C.JOINSPLITS_SUPPORT
            }, w.prototype.versionSupportsDashSpecialTransactions = function() {
                return c.isDash(this.network) && this.version >= 3
            }, w.prototype.isDashSpecialTransaction = function() {
                return this.versionSupportsDashSpecialTransactions() && this.type !== w.DASH_NORMAL
            }, w.prototype.isCoinbase = function() {
                return 1 === this.ins.length && w.isCoinbaseHash(this.ins[0].hash)
            }, w.prototype.addInput = function(e, t, i, r) {
                return I(p.tuple(p.Hash256bit, p.UInt32, p.maybe(p.UInt32), p.maybe(p.Buffer)), arguments), p.Null(i) && (i = w.DEFAULT_SEQUENCE), this.ins.push({
                    hash: e,
                    index: t,
                    script: r || E,
                    sequence: i,
                    witness: S
                }) - 1
            }, w.prototype.addOutput = function(e, t) {
                return I(p.tuple(p.Buffer, p.Satoshi), arguments), this.outs.push({
                    script: e,
                    value: t
                }) - 1
            }, w.prototype.hasWitnesses = function() {
                return this.ins.some((function(e) {
                    return 0 !== e.witness.length
                }))
            }, w.prototype.weight = function() {
                return 3 * this.__byteLength(!1) + this.__byteLength(!0)
            }, w.prototype.virtualSize = function() {
                return Math.ceil(this.weight() / 4)
            }, w.prototype.byteLength = function() {
                return this.__byteLength(!0)
            }, w.prototype.getShieldedSpendByteLength = function() {
                if (!this.isSaplingCompatible()) return 0;
                var e = 0;
                return e += g.encodingLength(this.vShieldedSpend.length), e += 384 * this.vShieldedSpend.length
            }, w.prototype.getShieldedOutputByteLength = function() {
                if (!this.isSaplingCompatible()) return 0;
                var e = 0;
                return e += g.encodingLength(this.vShieldedOutput.length), e += 948 * this.vShieldedOutput.length
            }, w.prototype.getJoinSplitByteLength = function() {
                if (!this.supportsJoinSplits()) return 0;
                var e = this.joinsplits.length,
                    t = 0;
                return t += g.encodingLength(e), e > 0 && (this.isSaplingCompatible() ? t += 1698 * e : t += 1802 * e, t += 32, t += 64), t
            }, w.prototype.zcashTransactionByteLength = function() {
                if (!c.isZcash(this.network)) throw new Error("zcashTransactionByteLength can only be called when using Zcash network");
                var e = 0;
                return e += 4, this.isOverwinterCompatible() && (e += 4), e += g.encodingLength(this.ins.length), e += this.ins.reduce((function(e, t) {
                    return e + 40 + d(t.script)
                }), 0), e += g.encodingLength(this.outs.length), e += this.outs.reduce((function(e, t) {
                    return e + 8 + d(t.script)
                }), 0), e += 4, this.isOverwinterCompatible() && (e += 4), this.isSaplingCompatible() && (e += 8, e += this.getShieldedSpendByteLength(), e += this.getShieldedOutputByteLength()), this.supportsJoinSplits() && (e += this.getJoinSplitByteLength()), this.isSaplingCompatible() && this.vShieldedSpend.length + this.vShieldedOutput.length > 0 && (e += 64), e
            }, w.prototype.__byteLength = function(e) {
                var t = e && this.hasWitnesses();
                return c.isZcash(this.network) ? this.zcashTransactionByteLength() : (t ? 10 : 8) + g.encodingLength(this.ins.length) + g.encodingLength(this.outs.length) + this.ins.reduce((function(e, t) {
                    return e + 40 + d(t.script)
                }), 0) + this.outs.reduce((function(e, t) {
                    return e + 8 + d(t.script)
                }), 0) + (this.isDashSpecialTransaction() ? d(this.extraPayload) : 0) + (t ? this.ins.reduce((function(e, t) {
                    return e + (i = t.witness, r = i.length, g.encodingLength(r) + i.reduce((function(e, t) {
                        return e + d(t)
                    }), 0));
                    var i, r
                }), 0) : 0)
            }, w.prototype.clone = function() {
                var e = new w(this.network);
                return e.version = this.version, e.locktime = this.locktime, e.network = this.network, c.isDash(this.network) && (e.type = this.type, e.extraPayload = this.extraPayload), this.isOverwinterCompatible() && (e.overwintered = this.overwintered, e.versionGroupId = this.versionGroupId, e.expiryHeight = this.expiryHeight), this.isSaplingCompatible() && (e.valueBalance = this.valueBalance), e.ins = this.ins.map((function(e) {
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
                })), this.isSaplingCompatible() && (e.vShieldedSpend = this.vShieldedSpend.map((function(e) {
                    return {
                        cv: e.cv,
                        anchor: e.anchor,
                        nullifier: e.nullifier,
                        rk: e.rk,
                        zkproof: e.zkproof,
                        spendAuthSig: e.spendAuthSig
                    }
                })), e.vShieldedOutput = this.vShieldedOutput.map((function(e) {
                    return {
                        cv: e.cv,
                        cmu: e.cmu,
                        ephemeralKey: e.ephemeralKey,
                        encCiphertext: e.encCiphertext,
                        outCiphertext: e.outCiphertext,
                        zkproof: e.zkproof
                    }
                }))), this.supportsJoinSplits() && (e.joinsplits = this.joinsplits.map((function(e) {
                    return {
                        vpubOld: e.vpubOld,
                        vpubNew: e.vpubNew,
                        anchor: e.anchor,
                        nullifiers: e.nullifiers,
                        commitments: e.commitments,
                        ephemeralKey: e.ephemeralKey,
                        randomSeed: e.randomSeed,
                        macs: e.macs,
                        zkproof: e.zkproof,
                        ciphertexts: e.ciphertexts
                    }
                })), e.joinsplitPubkey = this.joinsplitPubkey, e.joinsplitSig = this.joinsplitSig), this.isSaplingCompatible() && this.vShieldedSpend.length + this.vShieldedOutput.length > 0 && (e.bindingSig = this.bindingSig), e
            }, w.prototype.getHeader = function() {
                var e = this.overwintered ? 1 : 0;
                return this.version | e << 31
            }, w.prototype.hashForSignature = function(e, t, i) {
                if (I(p.tuple(p.UInt32, p.Buffer, p.Number), arguments), e >= this.ins.length) return B;
                var s = o.compile(o.decompile(t).filter((function(e) {
                        return e !== f.OP_CODESEPARATOR
                    }))),
                    h = this.clone();
                if ((31 & i) === w.SIGHASH_NONE) h.outs = [], h.ins.forEach((function(t, i) {
                    i !== e && (t.sequence = 0)
                }));
                else if ((31 & i) === w.SIGHASH_SINGLE) {
                    if (e >= this.outs.length) return B;
                    h.outs.length = e + 1;
                    for (var u = 0; u < e; u++) h.outs[u] = m;
                    h.ins.forEach((function(t, i) {
                        i !== e && (t.sequence = 0)
                    }))
                }
                i & w.SIGHASH_ANYONECANPAY ? (h.ins = [h.ins[e]], h.ins[0].script = s) : (h.ins.forEach((function(e) {
                    e.script = E
                })), h.ins[e].script = s);
                var a = r.allocUnsafe(h.__byteLength(!1) + 4);
                return a.writeInt32LE(i, a.length - 4), h.__toBuffer(a, 0, !1), n.hash256(a)
            }, w.prototype.getBlake2bHash = function(e, t) {
                var i = r.allocUnsafe(32);
                return l(i.length, null, null, r.from(t)).update(e).digest(i)
            }, w.prototype.getPrevoutHash = function(e) {
                if (!(e & w.SIGHASH_ANYONECANPAY)) {
                    var t = new h(r.allocUnsafe(36 * this.ins.length));
                    return this.ins.forEach((function(e) {
                        t.writeSlice(e.hash), t.writeUInt32(e.index)
                    })), c.isZcash(this.network) ? this.getBlake2bHash(t.buffer, "ZcashPrevoutHash") : n.hash256(t.buffer)
                }
                return y
            }, w.prototype.getSequenceHash = function(e) {
                if (!(e & w.SIGHASH_ANYONECANPAY) && (31 & e) !== w.SIGHASH_SINGLE && (31 & e) !== w.SIGHASH_NONE) {
                    var t = new h(r.allocUnsafe(4 * this.ins.length));
                    return this.ins.forEach((function(e) {
                        t.writeUInt32(e.sequence)
                    })), c.isZcash(this.network) ? this.getBlake2bHash(t.buffer, "ZcashSequencHash") : n.hash256(t.buffer)
                }
                return y
            }, w.prototype.getOutputsHash = function(e, t) {
                var i;
                if ((31 & e) !== w.SIGHASH_SINGLE && (31 & e) !== w.SIGHASH_NONE) {
                    var o = this.outs.reduce((function(e, t) {
                        return e + 8 + d(t.script)
                    }), 0);
                    return i = new h(r.allocUnsafe(o)), this.outs.forEach((function(e) {
                        i.writeUInt64(e.value), i.writeVarSlice(e.script)
                    })), c.isZcash(this.network) ? this.getBlake2bHash(i.buffer, "ZcashOutputsHash") : n.hash256(i.buffer)
                }
                if ((31 & e) === w.SIGHASH_SINGLE && t < this.outs.length) {
                    var s = this.outs[t];
                    return (i = new h(r.allocUnsafe(8 + d(s.script)))).writeUInt64(s.value), i.writeVarSlice(s.script), c.isZcash(this.network) ? this.getBlake2bHash(i.buffer, "ZcashOutputsHash") : n.hash256(i.buffer)
                }
                return y
            }, w.prototype.hashForZcashSignature = function(e, t, i, n) {
                if (I(p.tuple(p.UInt32, p.Buffer, p.Satoshi, p.UInt32), arguments), !c.isZcash(this.network)) throw new Error("hashForZcashSignature can only be called when using Zcash network");
                if (this.joinsplits.length > 0) throw new Error("Hash signature for Zcash protected transactions is not supported");
                if (e >= this.ins.length && e !== v) throw new Error("Input index is out of range");
                if (this.isOverwinterCompatible()) {
                    var o, s = this.getPrevoutHash(n),
                        u = this.getSequenceHash(n),
                        a = this.getOutputsHash(n, e),
                        f = y,
                        A = y,
                        g = y,
                        l = 0;
                    if (l += 20, l += 128, e !== v && (l += 8, l += 8, l += 32, l += d(t)), this.isSaplingCompatible() && (l += 64, l += 8), (o = new h(r.alloc(l))).writeInt32(this.getHeader()), o.writeUInt32(this.versionGroupId), o.writeSlice(s), o.writeSlice(u), o.writeSlice(a), o.writeSlice(f), this.isSaplingCompatible() && (o.writeSlice(A), o.writeSlice(g)), o.writeUInt32(this.locktime), o.writeUInt32(this.expiryHeight), this.isSaplingCompatible() && o.writeUInt64(this.valueBalance), o.writeUInt32(n), e !== v) {
                        var C = this.ins[e];
                        o.writeSlice(C.hash), o.writeUInt32(C.index), o.writeVarSlice(t), o.writeUInt64(i), o.writeUInt32(C.sequence)
                    }
                    var w = r.alloc(16),
                        E = "ZcashSigHash";
                    return w.write(E), w.writeUInt32LE(this.network.consensusBranchId[this.version], E.length), this.getBlake2bHash(o.buffer, w)
                }
            }, w.prototype.hashForWitnessV0 = function(e, t, i, o) {
                I(p.tuple(p.UInt32, p.Buffer, p.Satoshi, p.UInt32), arguments);
                var s = this.getPrevoutHash(o),
                    u = this.getSequenceHash(o),
                    a = this.getOutputsHash(o, e),
                    c = new h(r.allocUnsafe(156 + d(t))),
                    f = this.ins[e];
                return c.writeUInt32(this.version), c.writeSlice(s), c.writeSlice(u), c.writeSlice(f.hash), c.writeUInt32(f.index), c.writeVarSlice(t), c.writeUInt64(i), c.writeUInt32(f.sequence), c.writeSlice(a), c.writeUInt32(this.locktime), c.writeUInt32(o), n.hash256(c.buffer)
            }, w.prototype.hashForCashSignature = function(e, t, i, r) {
                if (I(p.tuple(p.UInt32, p.Buffer, p.Number, p.maybe(p.UInt53)), arguments), r & w.SIGHASH_BITCOINCASHBIP143) {
                    if (p.Null(i)) throw new Error("Bitcoin Cash sighash requires value of input to be signed.");
                    return this.hashForWitnessV0(e, t, i, r)
                }
                return this.hashForSignature(e, t, r)
            }, w.prototype.hashForGoldSignature = function(e, t, i, r, n) {
                I(p.tuple(p.UInt32, p.Buffer, p.Number, p.maybe(p.UInt53)), arguments);
                var o = r,
                    s = (r & w.SIGHASH_BITCOINCASHBIP143) > 0;
                if (s && (o |= this.network.forkId << 8), n || s) {
                    if (p.Null(i)) throw new Error("Bitcoin Cash sighash requires value of input to be signed.");
                    return this.hashForWitnessV0(e, t, i, o)
                }
                return this.hashForSignature(e, t, o)
            }, w.prototype.getHash = function() {
                return n.hash256(this.__toBuffer(void 0, void 0, !1))
            }, w.prototype.getId = function() {
                return this.getHash().reverse().toString("hex")
            }, w.prototype.toBuffer = function(e, t) {
                return this.__toBuffer(e, t, !0)
            }, w.prototype.__toBuffer = function(e, t, i) {
                e || (e = r.allocUnsafe(this.__byteLength(i)));
                const n = c.isZcash(this.network) ? new a(e, t || 0) : new h(e, t || 0);

                function o(e) {
                    n.offset = n.buffer.writeUInt16LE(e, n.offset)
                }
                if (this.isOverwinterCompatible()) {
                    var s = this.overwintered ? 1 : 0;
                    n.writeInt32(this.version | s << 31), n.writeUInt32(this.versionGroupId)
                } else this.isDashSpecialTransaction() ? (o(this.version), o(this.type)) : n.writeInt32(this.version);
                var u = i && this.hasWitnesses();
                return u && (n.writeUInt8(w.ADVANCED_TRANSACTION_MARKER), n.writeUInt8(w.ADVANCED_TRANSACTION_FLAG)), n.writeVarInt(this.ins.length), this.ins.forEach((function(e) {
                    n.writeSlice(e.hash), n.writeUInt32(e.index), n.writeVarSlice(e.script), n.writeUInt32(e.sequence)
                })), n.writeVarInt(this.outs.length), this.outs.forEach((function(e) {
                    e.valueBuffer ? n.writeSlice(e.valueBuffer) : n.writeUInt64(e.value), n.writeVarSlice(e.script)
                })), u && this.ins.forEach((function(e) {
                    n.writeVector(e.witness)
                })), n.writeUInt32(this.locktime), this.isOverwinterCompatible() && n.writeUInt32(this.expiryHeight), this.isSaplingCompatible() && (n.writeUInt64(this.valueBalance), n.writeVarInt(this.vShieldedSpend.length), this.vShieldedSpend.forEach((function(e) {
                    n.writeSlice(e.cv), n.writeSlice(e.anchor), n.writeSlice(e.nullifier), n.writeSlice(e.rk), n.writeSlice(e.zkproof.sA), n.writeSlice(e.zkproof.sB), n.writeSlice(e.zkproof.sC), n.writeSlice(e.spendAuthSig)
                })), n.writeVarInt(this.vShieldedOutput.length), this.vShieldedOutput.forEach((function(e) {
                    n.writeSlice(e.cv), n.writeSlice(e.cmu), n.writeSlice(e.ephemeralKey), n.writeSlice(e.encCiphertext), n.writeSlice(e.outCiphertext), n.writeSlice(e.zkproof.sA), n.writeSlice(e.zkproof.sB), n.writeSlice(e.zkproof.sC)
                }))), this.supportsJoinSplits() && (n.writeVarInt(this.joinsplits.length), this.joinsplits.forEach((function(e) {
                    n.writeUInt64(e.vpubOld), n.writeUInt64(e.vpubNew), n.writeSlice(e.anchor), e.nullifiers.forEach((function(e) {
                        n.writeSlice(e)
                    })), e.commitments.forEach((function(e) {
                        n.writeSlice(e)
                    })), n.writeSlice(e.ephemeralKey), n.writeSlice(e.randomSeed), e.macs.forEach((function(e) {
                        n.writeSlice(e)
                    })), this.isSaplingCompatible() ? (n.writeSlice(e.zkproof.sA), n.writeSlice(e.zkproof.sB), n.writeSlice(e.zkproof.sC)) : (n.writeCompressedG1(e.zkproof.gA), n.writeCompressedG1(e.zkproof.gAPrime), n.writeCompressedG2(e.zkproof.gB), n.writeCompressedG1(e.zkproof.gBPrime), n.writeCompressedG1(e.zkproof.gC), n.writeCompressedG1(e.zkproof.gCPrime), n.writeCompressedG1(e.zkproof.gK), n.writeCompressedG1(e.zkproof.gH)), e.ciphertexts.forEach((function(e) {
                        n.writeSlice(e)
                    }))
                }), this), this.joinsplits.length > 0 && (n.writeSlice(this.joinsplitPubkey), n.writeSlice(this.joinsplitSig))), this.isSaplingCompatible() && this.vShieldedSpend.length + this.vShieldedOutput.length > 0 && n.writeSlice(this.bindingSig), this.isDashSpecialTransaction() && n.writeVarSlice(this.extraPayload), void 0 !== t ? e.slice(t, n.offset) : e.slice(0, n.offset)
            }, w.prototype.toHex = function() {
                return this.toBuffer().toString("hex")
            }, w.prototype.setInputScript = function(e, t) {
                I(p.tuple(p.Number, p.Buffer), arguments), this.ins[e].script = t
            }, w.prototype.setWitness = function(e, t) {
                I(p.tuple(p.Number, [p.Buffer]), arguments), this.ins[e].witness = t
            }, e.exports = w
        },
        7263: function(e, t, i) {
            var r = i(21).Buffer;
            e.exports = {
                decode: function(e, t, i) {
                    t = t || 4, i = void 0 === i || i;
                    var r = e.length;
                    if (0 === r) return 0;
                    if (r > t) throw new TypeError("Script number overflow");
                    if (i && 0 == (127 & e[r - 1]) && (r <= 1 || 0 == (128 & e[r - 2]))) throw new Error("Non-minimally encoded script number");
                    if (5 === r) {
                        var n = e.readUInt32LE(0),
                            o = e.readUInt8(4);
                        return 128 & o ? -(4294967296 * (-129 & o) + n) : 4294967296 * o + n
                    }
                    for (var s = 0, h = 0; h < r; ++h) s |= e[h] << 8 * h;
                    return 128 & e[r - 1] ? -(s & ~(128 << 8 * (r - 1))) : s
                },
                encode: function(e) {
                    for (var t = Math.abs(e), i = function(e) {
                            return e > 2147483647 ? 5 : e > 8388607 ? 4 : e > 32767 ? 3 : e > 127 ? 2 : e > 0 ? 1 : 0
                        }(t), n = r.allocUnsafe(i), o = e < 0, s = 0; s < i; ++s) n.writeUInt8(255 & t, s), t >>= 8;
                    return 128 & n[i - 1] ? n.writeUInt8(o ? 128 : 0, i - 1) : o && (n[i - 1] |= 128), n
                }
            }
        },
        7264: function(e, t, i) {
            var r = i(5573),
                n = i(5545),
                o = i(47),
                s = i(139),
                h = s.OP_RESERVED;

            function u(e, t) {
                var i = r.decompile(e);
                if (i.length < 4) return !1;
                if (i[i.length - 1] !== s.OP_CHECKMULTISIG) return !1;
                if (!n.Number(i[0])) return !1;
                if (!n.Number(i[i.length - 2])) return !1;
                var o = i[0] - h,
                    u = i[i.length - 2] - h;
                return !(o <= 0) && (!(u > 16) && (!(o > u) && (u === i.length - 3 && (!!t || i.slice(1, -2).every(r.isCanonicalPubKey)))))
            }
            u.toJSON = function() {
                return "multi-sig output"
            }, e.exports = {
                check: u,
                decode: function(e, t) {
                    var i = r.decompile(e);
                    return o(u, i, t), {
                        m: i[0] - h,
                        pubKeys: i.slice(1, -2)
                    }
                },
                encode: function(e, t) {
                    o({
                        m: n.Number,
                        pubKeys: [r.isCanonicalPubKey]
                    }, {
                        m: e,
                        pubKeys: t
                    });
                    var i = t.length;
                    if (i < e) throw new TypeError("Not enough pubKeys provided");
                    return r.compile([].concat(h + e, t, h + i, s.OP_CHECKMULTISIG))
                }
            }
        },
        7265: function(e, t, i) {
            var r = i(5573),
                n = i(5545),
                o = i(47),
                s = i(139);

            function h(e) {
                var t = r.compile(e);
                return 22 === t.length && t[0] === s.OP_0 && 20 === t[1]
            }
            h.toJSON = function() {
                return "Witness pubKeyHash output"
            }, e.exports = {
                check: h,
                decode: function(e) {
                    return o(h, e), e.slice(2)
                },
                encode: function(e) {
                    return o(n.Hash160bit, e), r.compile([s.OP_0, e])
                }
            }
        },
        7266: function(e, t, i) {
            var r = i(5573),
                n = i(5545),
                o = i(47),
                s = i(139);

            function h(e) {
                var t = r.compile(e);
                return 34 === t.length && t[0] === s.OP_0 && 32 === t[1]
            }
            h.toJSON = function() {
                return "Witness scriptHash output"
            }, e.exports = {
                check: h,
                decode: function(e) {
                    return o(h, e), e.slice(2)
                },
                encode: function(e) {
                    return o(n.Hash256bit, e), r.compile([s.OP_0, e])
                }
            }
        },
        7267: function(e, t, i) {
            var r, n = i(47),
                ECSignature = i(6199),
                o = i(5545),
                s = !1;
            try {
                r = i(1396), s = !0
            } catch (e) {}
            e.exports = {
                available: s,
                publicKeyCreate: function(e, t) {
                    if (n(o.tuple(o.Buffer256bit, o.Boolean), arguments), s) return r.publicKeyCreate(e, t)
                },
                sign: function(e, t) {
                    if (n(o.tuple(o.Buffer256bit, o.BigInt), arguments), s) {
                        var i = r.sign(e, t.toBuffer(32)).signature;
                        return ECSignature.fromDER(r.signatureExport(i))
                    }
                },
                verify: function(e, t, i) {
                    if (n(o.tuple(o.Hash256bit, o.ECSignature, o.oneOf(o.BufferN(33), o.BufferN(65))), arguments), s) return t = new ECSignature(t.r, t.s), t = r.signatureNormalize(r.signatureImport(t.toDER())), r.verify(e, t, i)
                }
            }
        },
        7268: function(e, t) {
            e.exports = {
                JOINSPLITS_SUPPORT: 2,
                OVERWINTER: 3,
                SAPLING: 4
            }
        },
        9468: function(e, t, i) {
            var r = i(5573),
                n = i(6533);
            for (var o in n) r[o] = n[o];
            e.exports = {
                bitgo: i(9484),
                bufferutils: i(6200),
                Block: i(9487),
                ECPair: i(6198),
                ECSignature: i(6199),
                HDNode: i(9492),
                Transaction: i(6539),
                TransactionBuilder: i(9493),
                address: i(6538),
                coins: i(6201),
                crypto: i(5930),
                networks: i(5786),
                opcodes: i(139),
                script: r
            }
        },
        9469: function(e, t, i) {
            var r = i(21).Buffer,
                n = i(5573),
                o = i(7264),
                s = i(47),
                h = i(139);

            function u(e) {
                return e === h.OP_0 || n.isCanonicalSignature(e)
            }

            function a(e, t) {
                var i = n.decompile(e);
                return !(i.length < 2) && (i[0] === h.OP_0 && (t ? i.slice(1).every(u) : i.slice(1).every(n.isCanonicalSignature)))
            }
            a.toJSON = function() {
                return "multisig input"
            };
            var c = r.allocUnsafe(0);

            function f(e, t) {
                if (s([u], e), t) {
                    var i = o.decode(t);
                    if (e.length < i.m) throw new TypeError("Not enough signatures provided");
                    if (e.length > i.pubKeys.length) throw new TypeError("Too many signatures provided")
                }
                return [].concat(c, e.map((function(e) {
                    return e === h.OP_0 ? c : e
                })))
            }

            function A(e, t) {
                return s(a, e, t), e.slice(1)
            }
            e.exports = {
                check: a,
                decode: function(e, t) {
                    return A(n.decompile(e), t)
                },
                decodeStack: A,
                encode: function(e, t) {
                    return n.compile(f(e, t))
                },
                encodeStack: f
            }
        },
        9470: function(e, t, i) {
            var r = i(5573),
                n = i(5545),
                o = i(47),
                s = i(139);

            function h(e) {
                var t = r.compile(e);
                return t.length > 1 && t[0] === s.OP_RETURN
            }
            h.toJSON = function() {
                return "null data output"
            }, e.exports = {
                output: {
                    check: h,
                    decode: function(e) {
                        o(h, e);
                        var t = r.decompile(e);
                        return t.shift(), 1 === t.length ? t[0] : t
                    },
                    encode: function(e) {
                        return o(o.oneOf(n.Buffer, n.Array), e), r.compile([s.OP_RETURN].concat(e))
                    }
                }
            }
        },
        9471: function(e, t, i) {
            var r = i(5573),
                n = i(47);

            function o(e) {
                var t = r.decompile(e);
                return 1 === t.length && r.isCanonicalSignature(t[0])
            }

            function s(e) {
                return n(r.isCanonicalSignature, e), [e]
            }

            function h(e) {
                return n(o, e), e[0]
            }
            o.toJSON = function() {
                return "pubKey input"
            }, e.exports = {
                check: o,
                decode: function(e) {
                    return h(r.decompile(e))
                },
                decodeStack: h,
                encode: function(e) {
                    return r.compile(s(e))
                },
                encodeStack: s
            }
        },
        9472: function(e, t, i) {
            var r = i(5573),
                n = i(47),
                o = i(139);

            function s(e) {
                var t = r.decompile(e);
                return 2 === t.length && r.isCanonicalPubKey(t[0]) && t[1] === o.OP_CHECKSIG
            }
            s.toJSON = function() {
                return "pubKey output"
            }, e.exports = {
                check: s,
                decode: function(e) {
                    var t = r.decompile(e);
                    return n(s, t), t[0]
                },
                encode: function(e) {
                    return n(r.isCanonicalPubKey, e), r.compile([e, o.OP_CHECKSIG])
                }
            }
        },
        9473: function(e, t, i) {
            var r = i(5573),
                n = i(47);

            function o(e) {
                var t = r.decompile(e);
                return 2 === t.length && r.isCanonicalSignature(t[0]) && r.isCanonicalPubKey(t[1])
            }

            function s(e, t) {
                return n({
                    signature: r.isCanonicalSignature,
                    pubKey: r.isCanonicalPubKey
                }, {
                    signature: e,
                    pubKey: t
                }), [e, t]
            }

            function h(e) {
                return n(o, e), {
                    signature: e[0],
                    pubKey: e[1]
                }
            }
            o.toJSON = function() {
                return "pubKeyHash input"
            }, e.exports = {
                check: o,
                decode: function(e) {
                    return h(r.decompile(e))
                },
                decodeStack: h,
                encode: function(e, t) {
                    return r.compile(s(e, t))
                },
                encodeStack: s
            }
        },
        9474: function(e, t, i) {
            var r = i(5573),
                n = i(5545),
                o = i(47),
                s = i(139);

            function h(e) {
                var t = r.compile(e);
                return 25 === t.length && t[0] === s.OP_DUP && t[1] === s.OP_HASH160 && 20 === t[2] && t[23] === s.OP_EQUALVERIFY && t[24] === s.OP_CHECKSIG
            }
            h.toJSON = function() {
                return "pubKeyHash output"
            }, e.exports = {
                check: h,
                decode: function(e) {
                    return o(h, e), e.slice(3, 23)
                },
                encode: function(e) {
                    return o(n.Hash160bit, e), r.compile([s.OP_DUP, s.OP_HASH160, e, s.OP_EQUALVERIFY, s.OP_CHECKSIG])
                }
            }
        },
        9475: function(e, t, i) {
            e.exports = {
                input: i(9476),
                output: i(9477)
            }
        },
        9476: function(e, t, i) {
            var r = i(21).Buffer,
                n = i(5573),
                o = i(47),
                s = i(6534),
                h = i(6535),
                u = i(6536),
                a = i(7265),
                c = i(7266);

            function f(e, t) {
                var i = n.decompile(e);
                if (i.length < 1) return !1;
                var o = i[i.length - 1];
                if (!r.isBuffer(o)) return !1;
                var f = n.decompile(n.compile(i.slice(0, -1))),
                    A = n.decompile(o);
                return 0 !== A.length && (!!n.isPushOnly(f) && (1 === i.length ? c.check(A) || a.check(A) : !(!u.input.check(f) || !u.output.check(A)) || (!(!s.input.check(f, t) || !s.output.check(A)) || !(!h.input.check(f) || !h.output.check(A)))))
            }

            function A(e, t) {
                var i = n.compile(t);
                return [].concat(e, i)
            }

            function I(e) {
                return o(f, e), {
                    redeemScriptStack: e.slice(0, -1),
                    redeemScript: e[e.length - 1]
                }
            }
            f.toJSON = function() {
                return "scriptHash input"
            }, e.exports = {
                check: f,
                decode: function(e) {
                    var t = I(n.decompile(e));
                    return t.redeemScriptSig = n.compile(t.redeemScriptStack), delete t.redeemScriptStack, t
                },
                decodeStack: I,
                encode: function(e, t) {
                    var i = n.decompile(e);
                    return n.compile(A(i, t))
                },
                encodeStack: A
            }
        },
        9477: function(e, t, i) {
            var r = i(5573),
                n = i(5545),
                o = i(47),
                s = i(139);

            function h(e) {
                var t = r.compile(e);
                return 23 === t.length && t[0] === s.OP_HASH160 && 20 === t[1] && t[22] === s.OP_EQUAL
            }
            h.toJSON = function() {
                return "scriptHash output"
            }, e.exports = {
                check: h,
                decode: function(e) {
                    return o(h, e), e.slice(2, 22)
                },
                encode: function(e) {
                    return o(n.Hash160bit, e), r.compile([s.OP_HASH160, e, s.OP_EQUAL])
                }
            }
        },
        9478: function(e, t, i) {
            e.exports = {
                input: i(9479),
                output: i(7265)
            }
        },
        9479: function(e, t, i) {
            var r = i(5573),
                n = i(47);

            function o(e) {
                return r.isCanonicalPubKey(e) && 33 === e.length
            }

            function s(e) {
                var t = r.decompile(e);
                return 2 === t.length && r.isCanonicalSignature(t[0]) && o(t[1])
            }
            s.toJSON = function() {
                return "witnessPubKeyHash input"
            }, e.exports = {
                check: s,
                decodeStack: function(e) {
                    return n(s, e), {
                        signature: e[0],
                        pubKey: e[1]
                    }
                },
                encodeStack: function(e, t) {
                    return n({
                        signature: r.isCanonicalSignature,
                        pubKey: o
                    }, {
                        signature: e,
                        pubKey: t
                    }), [e, t]
                }
            }
        },
        9480: function(e, t, i) {
            e.exports = {
                input: i(9481),
                output: i(7266)
            }
        },
        9481: function(e, t, i) {
            var r = i(5573),
                n = i(5545),
                o = i(47),
                s = i(6534),
                h = i(6535),
                u = i(6536);

            function a(e, t) {
                if (o(n.Array, e), e.length < 1) return !1;
                var i = e[e.length - 1];
                if (!Buffer.isBuffer(i)) return !1;
                var a = r.decompile(i);
                if (0 === a.length) return !1;
                var c = r.compile(e.slice(0, -1));
                return !(!u.input.check(c) || !u.output.check(a)) || (!(!s.input.check(c, t) || !s.output.check(a)) || !(!h.input.check(c) || !h.output.check(a)))
            }
            a.toJSON = function() {
                return "witnessScriptHash input"
            }, e.exports = {
                check: a,
                decodeStack: function(e) {
                    return o(a, e), {
                        witnessData: e.slice(0, -1),
                        witnessScript: e[e.length - 1]
                    }
                },
                encodeStack: function(e, t) {
                    return o({
                        witnessData: [n.Buffer],
                        witnessScript: n.Buffer
                    }, {
                        witnessData: e,
                        witnessScript: t
                    }), [].concat(e, t)
                }
            }
        },
        9482: function(e, t, i) {
            e.exports = {
                output: i(9483)
            }
        },
        9483: function(e, t, i) {
            var r = i(21).Buffer,
                n = i(5573),
                o = i(5545),
                s = i(47),
                h = i(139),
                u = r.from("aa21a9ed", "hex");

            function a(e) {
                var t = n.compile(e);
                return t.length > 37 && t[0] === h.OP_RETURN && 36 === t[1] && t.slice(2, 6).equals(u)
            }
            a.toJSON = function() {
                return "Witness commitment output"
            }, e.exports = {
                check: a,
                decode: function(e) {
                    return s(a, e), n.decompile(e)[1].slice(4, 36)
                },
                encode: function(e) {
                    s(o.Hash256bit, e);
                    var t = r.allocUnsafe(36);
                    return u.copy(t, 0), e.copy(t, 4), n.compile([h.OP_RETURN, t])
                }
            }
        },
        9484: function(e, t, i) {
            e.exports = {
                keyutil: i(6537)
            }
        },
        9485: function(e, t, i) {
            "use strict";
            let r = "qpzry9x8gf2tvdw0s3jn54khce6mua7l",
                n = {};
            for (let e = 0; e < r.length; e++) {
                let t = r.charAt(e);
                if (void 0 !== n[t]) throw new TypeError(t + " is ambiguous");
                n[t] = e
            }

            function o(e) {
                let t = e >> 25;
                return (33554431 & e) << 5 ^ 996825010 & -(t >> 0 & 1) ^ 642813549 & -(t >> 1 & 1) ^ 513874426 & -(t >> 2 & 1) ^ 1027748829 & -(t >> 3 & 1) ^ 705979059 & -(t >> 4 & 1)
            }

            function s(e) {
                let t = 1;
                for (let i = 0; i < e.length; ++i) {
                    let r = e.charCodeAt(i);
                    if (r < 33 || r > 126) throw new Error("Invalid prefix (" + e + ")");
                    t = o(t) ^ r >> 5
                }
                t = o(t);
                for (let i = 0; i < e.length; ++i) {
                    let r = e.charCodeAt(i);
                    t = o(t) ^ 31 & r
                }
                return t
            }

            function h(e, t, i, r) {
                let n = 0,
                    o = 0,
                    s = (1 << i) - 1,
                    h = [];
                for (let r = 0; r < e.length; ++r)
                    for (n = n << t | e[r], o += t; o >= i;) o -= i, h.push(n >> o & s);
                if (r) o > 0 && h.push(n << i - o & s);
                else {
                    if (o >= t) throw new Error("Excess padding");
                    if (n << i - o & s) throw new Error("Non-zero padding")
                }
                return h
            }
            e.exports = {
                decode: function(e) {
                    if (e.length < 8) throw new TypeError(e + " too short");
                    if (e.length > 90) throw new TypeError(e + " too long");
                    let t = e.toLowerCase(),
                        i = e.toUpperCase();
                    if (e !== t && e !== i) throw new Error("Mixed-case string " + e);
                    let r = (e = t).lastIndexOf("1");
                    if (0 === r) throw new Error("Missing prefix for " + e);
                    let h = e.slice(0, r),
                        u = e.slice(r + 1);
                    if (u.length < 6) throw new Error("Data too short");
                    let a = s(h),
                        c = [];
                    for (let e = 0; e < u.length; ++e) {
                        let t = u.charAt(e),
                            i = n[t];
                        if (void 0 === i) throw new Error("Unknown character " + t);
                        a = o(a) ^ i, e + 6 >= u.length || c.push(i)
                    }
                    if (1 !== a) throw new Error("Invalid checksum for " + e);
                    return {
                        prefix: h,
                        words: c
                    }
                },
                encode: function(e, t) {
                    if (e.length + 7 + t.length > 90) throw new TypeError("Exceeds Bech32 maximum length");
                    let i = s(e = e.toLowerCase()),
                        n = e + "1";
                    for (let e = 0; e < t.length; ++e) {
                        let s = t[e];
                        if (s >> 5 != 0) throw new Error("Non 5-bit word");
                        i = o(i) ^ s, n += r.charAt(s)
                    }
                    for (let e = 0; e < 6; ++e) i = o(i);
                    i ^= 1;
                    for (let e = 0; e < 6; ++e) {
                        n += r.charAt(i >> 5 * (5 - e) & 31)
                    }
                    return n
                },
                toWords: function(e) {
                    return h(e, 8, 5, !0)
                },
                fromWords: function(e) {
                    return h(e, 5, 8, !1)
                }
            }
        },
        9486: function(e, t, i) {
            var r = i(21).Buffer,
                n = i(320),
                o = i(47),
                s = i(5545),
                BigInteger = i(109),
                ECSignature = i(6199),
                h = r.alloc(1, 0),
                u = r.alloc(1, 1),
                a = i(280).getCurveByName("secp256k1");

            function c(e, t, i) {
                o(s.tuple(s.Hash256bit, s.Buffer256bit, s.Function), arguments);
                var c = r.alloc(32, 0),
                    f = r.alloc(32, 1);
                c = n("sha256", c).update(f).update(h).update(t).update(e).digest(), f = n("sha256", c).update(f).digest(), c = n("sha256", c).update(f).update(u).update(t).update(e).digest(), f = n("sha256", c).update(f).digest(), f = n("sha256", c).update(f).digest();
                for (var A = BigInteger.fromBuffer(f); A.signum() <= 0 || A.compareTo(a.n) >= 0 || !i(A);) c = n("sha256", c).update(f).update(h).digest(), f = n("sha256", c).update(f).digest(), f = n("sha256", c).update(f).digest(), A = BigInteger.fromBuffer(f);
                return A
            }
            var f = a.n.shiftRight(1);
            e.exports = {
                deterministicGenerateK: c,
                sign: function(e, t) {
                    o(s.tuple(s.Hash256bit, s.BigInt), arguments);
                    var i, r, n = t.toBuffer(32),
                        h = BigInteger.fromBuffer(e),
                        u = a.n,
                        A = a.G;
                    return c(e, n, (function(e) {
                        var n = A.multiply(e);
                        return !a.isInfinity(n) && (0 !== (i = n.affineX.mod(u)).signum() && 0 !== (r = e.modInverse(u).multiply(h.add(t.multiply(i))).mod(u)).signum())
                    })), r.compareTo(f) > 0 && (r = u.subtract(r)), new ECSignature(i, r)
                },
                verify: function(e, t, i) {
                    o(s.tuple(s.Hash256bit, s.ECSignature, s.ECPoint), arguments);
                    var r = a.n,
                        n = a.G,
                        h = t.r,
                        u = t.s;
                    if (h.signum() <= 0 || h.compareTo(r) >= 0) return !1;
                    if (u.signum() <= 0 || u.compareTo(r) >= 0) return !1;
                    var c = BigInteger.fromBuffer(e),
                        f = u.modInverse(r),
                        A = c.multiply(f).mod(r),
                        I = h.multiply(f).mod(r),
                        p = n.multiplyTwo(A, i, I);
                    if (a.isInfinity(p)) return !1;
                    var g = p.affineX,
                        l = g.mod(r);
                    return l.equals(h)
                },
                __curve: a
            }
        },
        9487: function(e, t, i) {
            var r = i(21).Buffer,
                n = i(5930),
                o = i(1391),
                s = i(47),
                h = i(5545),
                u = i(6200),
                a = i(369),
                c = i(5786),
                f = i(6201),
                A = i(6539);

            function Block(e) {
                s(h.maybe(h.Network), e), e = e || c.bitcoin, this.version = 1, this.prevHash = null, this.merkleRoot = null, this.timestamp = 0, this.bits = 0, this.nonce = 0, this.network = e, f.isZcash(e) && (this.finalSaplingRoot = null, this.solutionSize = 0, this.solution = null)
            }
            Block.HEADER_BYTE_SIZE = 80, Block.ZCASH_HEADER_BYTE_SIZE = 1487, Block.fromBuffer = function(e, t) {
                if (e.length < 80) throw new Error("Buffer too small (< 80 bytes)");
                t = t || c.bitcoin;
                const i = new u.BufferReader(e);
                var r = new Block(t);
                if (r.version = i.readInt32(), r.prevHash = i.readSlice(32), r.merkleRoot = i.readSlice(32), f.isZcash(t) && (r.finalSaplingRoot = i.readSlice(32)), r.timestamp = i.readUInt32(), r.bits = i.readUInt32(), f.isZcash(t) ? (r.nonce = i.readSlice(32), r.solutionSize = i.readVarInt(), r.solution = i.readSlice(1344)) : r.nonce = i.readUInt32(), 80 === i.buffer.length) return r;

                function n() {
                    var r = A.fromBuffer(e.slice(i.offset), t, !0);
                    return i.offset += r.byteLength(), r
                }
                var o = i.readVarInt();
                r.transactions = [];
                for (var s = 0; s < o; ++s) {
                    var h = n();
                    r.transactions.push(h)
                }
                return r
            }, Block.prototype.byteLength = function(e) {
                return f.isZcash(this.network) ? e ? Block.ZCASH_HEADER_BYTE_SIZE : Block.ZCASH_HEADER_BYTE_SIZE + a.encodingLength(this.transactions.length) + this.transactions.reduce((function(e, t) {
                    return e + t.byteLength()
                }), 0) : e || !this.transactions ? Block.HEADER_BYTE_SIZE : Block.HEADER_BYTE_SIZE + a.encodingLength(this.transactions.length) + this.transactions.reduce((function(e, t) {
                    return e + t.byteLength()
                }), 0)
            }, Block.fromHex = function(e, t) {
                return Block.fromBuffer(r.from(e, "hex"), t)
            }, Block.prototype.getHash = function() {
                return n.hash256(this.toBuffer(!0))
            }, Block.prototype.getId = function() {
                return this.getHash().reverse().toString("hex")
            }, Block.prototype.getUTCDate = function() {
                var e = new Date(0);
                return e.setUTCSeconds(this.timestamp), e
            }, Block.prototype.toBuffer = function(e) {
                var t = r.allocUnsafe(this.byteLength(e)),
                    i = new u.BufferWriter(t);
                return i.writeInt32(this.version), i.writeSlice(this.prevHash), i.writeSlice(this.merkleRoot), f.isZcash(this.network) && i.writeSlice(this.finalSaplingRoot), i.writeUInt32(this.timestamp), i.writeUInt32(this.bits), f.isZcash(this.network) ? (i.writeSlice(this.nonce), a.encode(this.solutionSize, i.buffer, i.offset), i.offset += a.encode.bytes, i.writeSlice(this.solution)) : i.writeUInt32(this.nonce), e || !this.transactions || (a.encode(this.transactions.length, i.buffer, i.offset), i.offset += a.encode.bytes, this.transactions.forEach((function(e) {
                    var t = e.byteLength();
                    e.toBuffer(i.buffer, i.offset), i.offset += t
                }))), t
            }, Block.prototype.toHex = function(e) {
                return this.toBuffer(e).toString("hex")
            }, Block.calculateTarget = function(e) {
                var t = ((4278190080 & e) >> 24) - 3,
                    i = 8388607 & e,
                    n = r.alloc(32, 0);
                return t < 0 ? (i >>= 8 * Math.abs(t), n.writeUInt32BE(i, 28)) : t > 28 ? (i <<= 8 * (t - 28), n.writeUInt32BE(i, 0)) : n.writeUInt32BE(i, 28 - t), n
            }, Block.calculateMerkleRoot = function(e) {
                if (s([{
                        getHash: h.Function
                    }], e), 0 === e.length) throw TypeError("Cannot compute merkle root for zero transactions");
                var t = e.map((function(e) {
                    return e.getHash()
                }));
                return o(t, n.hash256)
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
        9488: function(e, t, i) {
            const r = i(47),
                n = i(5545),
                o = i(7268),
                {
                    BufferReader: s,
                    BufferWriter: h
                } = i(6200);
            e.exports = {
                ZcashBufferReader: class ZcashBufferReader extends s {
                    constructor(e, t, i) {
                        super(e, t), r(n.maybe(n.Int32), i), this.txVersion = i
                    }
                    readInt64() {
                        const e = this.buffer.readUInt32LE(this.offset);
                        let t = this.buffer.readInt32LE(this.offset + 4);
                        return t *= 4294967296, this.offset += 8, t + e
                    }
                    readCompressedG1() {
                        var e = 1 & this.readUInt8();
                        return {
                            x: this.readSlice(32),
                            yLsb: e
                        }
                    }
                    readCompressedG2() {
                        var e = 1 & this.readUInt8();
                        return {
                            x: this.readSlice(64),
                            yLsb: e
                        }
                    }
                    readZKProof() {
                        return this.txVersion >= o.SAPLING ? {
                            sA: this.readSlice(48),
                            sB: this.readSlice(96),
                            sC: this.readSlice(48)
                        } : {
                            gA: this.readCompressedG1(),
                            gAPrime: this.readCompressedG1(),
                            gB: this.readCompressedG2(),
                            gBPrime: this.readCompressedG1(),
                            gC: this.readCompressedG1(),
                            gCPrime: this.readCompressedG1(),
                            gK: this.readCompressedG1(),
                            gH: this.readCompressedG1()
                        }
                    }
                    readJoinSplit() {
                        for (var e = this.readUInt64(), t = this.readUInt64(), i = this.readSlice(32), r = [], n = 0; n < 2; n++) r.push(this.readSlice(32));
                        var o = [];
                        for (n = 0; n < 2; n++) o.push(this.readSlice(32));
                        var s = this.readSlice(32),
                            h = this.readSlice(32),
                            u = [];
                        for (n = 0; n < 2; n++) u.push(this.readSlice(32));
                        var a = this.readZKProof(),
                            c = [];
                        for (n = 0; n < 2; n++) c.push(this.readSlice(601));
                        return {
                            vpubOld: e,
                            vpubNew: t,
                            anchor: i,
                            nullifiers: r,
                            commitments: o,
                            ephemeralKey: s,
                            randomSeed: h,
                            macs: u,
                            zkproof: a,
                            ciphertexts: c
                        }
                    }
                    readShieldedSpend() {
                        return {
                            cv: this.readSlice(32),
                            anchor: this.readSlice(32),
                            nullifier: this.readSlice(32),
                            rk: this.readSlice(32),
                            zkproof: this.readZKProof(),
                            spendAuthSig: this.readSlice(64)
                        }
                    }
                    readShieldedOutput() {
                        return {
                            cv: this.readSlice(32),
                            cmu: this.readSlice(32),
                            ephemeralKey: this.readSlice(32),
                            encCiphertext: this.readSlice(580),
                            outCiphertext: this.readSlice(80),
                            zkproof: this.readZKProof()
                        }
                    }
                },
                ZcashBufferWriter: class ZcashBufferWriter extends h {
                    writeCompressedG1(e) {
                        this.writeUInt8(2 | e.yLsb), this.writeSlice(e.x)
                    }
                    writeCompressedG2(e) {
                        this.writeUInt8(10 | e.yLsb), this.writeSlice(e.x)
                    }
                }
            }
        },
        9489: function(e, t, i) {
            var r = i(5781),
                n = i(9490);

            function o(e, t, i) {
                var r = e[t] + e[i],
                    n = e[t + 1] + e[i + 1];
                r >= 4294967296 && n++, e[t] = r, e[t + 1] = n
            }

            function s(e, t, i, r) {
                var n = e[t] + i;
                i < 0 && (n += 4294967296);
                var o = e[t + 1] + r;
                n >= 4294967296 && o++, e[t] = n, e[t + 1] = o
            }

            function h(e, t) {
                return e[t] ^ e[t + 1] << 8 ^ e[t + 2] << 16 ^ e[t + 3] << 24
            }

            function u(e, t, i, r, n, h) {
                var u = A[n],
                    a = A[n + 1],
                    c = A[h],
                    I = A[h + 1];
                o(f, e, t), s(f, e, u, a);
                var p = f[r] ^ f[e],
                    g = f[r + 1] ^ f[e + 1];
                f[r] = g, f[r + 1] = p, o(f, i, r), p = f[t] ^ f[i], g = f[t + 1] ^ f[i + 1], f[t] = p >>> 24 ^ g << 8, f[t + 1] = g >>> 24 ^ p << 8, o(f, e, t), s(f, e, c, I), p = f[r] ^ f[e], g = f[r + 1] ^ f[e + 1], f[r] = p >>> 16 ^ g << 16, f[r + 1] = g >>> 16 ^ p << 16, o(f, i, r), p = f[t] ^ f[i], g = f[t + 1] ^ f[i + 1], f[t] = g >>> 31 ^ p << 1, f[t + 1] = p >>> 31 ^ g << 1
            }
            var a = new Uint32Array([4089235720, 1779033703, 2227873595, 3144134277, 4271175723, 1013904242, 1595750129, 2773480762, 2917565137, 1359893119, 725511199, 2600822924, 4215389547, 528734635, 327033209, 1541459225]),
                c = new Uint8Array([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 14, 10, 4, 8, 9, 15, 13, 6, 1, 12, 0, 2, 11, 7, 5, 3, 11, 8, 12, 0, 5, 2, 15, 13, 10, 14, 3, 6, 7, 1, 9, 4, 7, 9, 3, 1, 13, 12, 11, 14, 2, 6, 5, 10, 4, 0, 15, 8, 9, 0, 5, 7, 2, 4, 10, 15, 14, 1, 11, 12, 6, 8, 3, 13, 2, 12, 6, 10, 0, 11, 8, 3, 4, 13, 7, 5, 15, 14, 1, 9, 12, 5, 1, 15, 14, 13, 4, 10, 0, 7, 6, 3, 9, 2, 8, 11, 13, 11, 7, 14, 12, 1, 3, 9, 5, 0, 15, 4, 8, 6, 2, 10, 6, 15, 14, 9, 11, 3, 0, 8, 12, 2, 13, 7, 1, 4, 10, 5, 10, 2, 8, 4, 7, 6, 1, 5, 15, 11, 9, 14, 3, 12, 13, 0, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 14, 10, 4, 8, 9, 15, 13, 6, 1, 12, 0, 2, 11, 7, 5, 3].map((function(e) {
                    return 2 * e
                }))),
                f = new Uint32Array(32),
                A = new Uint32Array(32);

            function I(e, t) {
                var i = 0;
                for (i = 0; i < 16; i++) f[i] = e.h[i], f[i + 16] = a[i];
                for (f[24] = f[24] ^ e.t, f[25] = f[25] ^ e.t / 4294967296, t && (f[28] = ~f[28], f[29] = ~f[29]), i = 0; i < 32; i++) A[i] = h(e.b, 4 * i);
                for (i = 0; i < 12; i++) u(0, 8, 16, 24, c[16 * i + 0], c[16 * i + 1]), u(2, 10, 18, 26, c[16 * i + 2], c[16 * i + 3]), u(4, 12, 20, 28, c[16 * i + 4], c[16 * i + 5]), u(6, 14, 22, 30, c[16 * i + 6], c[16 * i + 7]), u(0, 10, 20, 30, c[16 * i + 8], c[16 * i + 9]), u(2, 12, 22, 24, c[16 * i + 10], c[16 * i + 11]), u(4, 14, 16, 26, c[16 * i + 12], c[16 * i + 13]), u(6, 8, 18, 28, c[16 * i + 14], c[16 * i + 15]);
                for (i = 0; i < 16; i++) e.h[i] = e.h[i] ^ f[i] ^ f[i + 16]
            }
            var p = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);

            function g(e, t, i, r) {
                p.fill(0), this.b = new Uint8Array(128), this.h = new Uint32Array(16), this.t = 0, this.c = 0, this.outlen = e, p[0] = e, t && (p[1] = t.length), p[2] = 1, p[3] = 1, i && p.set(i, 32), r && p.set(r, 48);
                for (var n = 0; n < 16; n++) this.h[n] = a[n] ^ h(p, 4 * n);
                t && (l(this, t), this.c = 128)
            }

            function l(e, t) {
                for (var i = 0; i < t.length; i++) 128 === e.c && (e.t += e.c, I(e, !1), e.c = 0), e.b[e.c++] = t[i]
            }

            function C(e) {
                return e < 16 ? "0" + e.toString(16) : e.toString(16)
            }
            g.prototype.update = function(e) {
                return r(null != e, "input must be Uint8Array or Buffer"), l(this, e), this
            }, g.prototype.digest = function(e) {
                var t = e && "binary" !== e && "hex" !== e ? e : new Uint8Array(this.outlen);
                return r(t.length >= this.outlen, "out must have at least outlen bytes of space"),
                    function(e, t) {
                        e.t += e.c;
                        for (; e.c < 128;) e.b[e.c++] = 0;
                        I(e, !0);
                        for (var i = 0; i < e.outlen; i++) t[i] = e.h[i >> 2] >> 8 * (3 & i)
                    }(this, t), "hex" === e ? function(e) {
                        for (var t = "", i = 0; i < e.length; i++) t += C(e[i]);
                        return t
                    }(t) : t
            }, g.prototype.final = g.prototype.digest, g.ready = function(e) {
                n.ready((function() {
                    e()
                }))
            };
            var d = g;
            e.exports = function(e, t, i, n, o) {
                return !0 !== o && (r(e >= w, "outlen must be at least " + w + ", was given " + e), r(e <= E, "outlen must be at most " + E + ", was given " + e), null != t && r(t.length >= S, "key must be at least " + S + ", was given " + t.length), null != t && r(t.length <= y, "key must be at most " + y + ", was given " + t.length), null != i && r(i.length === B, "salt must be exactly " + B + ", was given " + i.length), null != n && r(n.length === v, "personal must be exactly " + v + ", was given " + n.length)), new d(e, t, i, n)
            }, e.exports.ready = function(e) {
                n.ready((function() {
                    e()
                }))
            }, e.exports.WASM_SUPPORTED = n.SUPPORTED, e.exports.WASM_LOADED = !1;
            var w = e.exports.BYTES_MIN = 16,
                E = e.exports.BYTES_MAX = 64,
                S = (e.exports.BYTES = 32, e.exports.KEYBYTES_MIN = 16),
                y = e.exports.KEYBYTES_MAX = 64,
                B = (e.exports.KEYBYTES = 32, e.exports.SALTBYTES = 16),
                v = e.exports.PERSONALBYTES = 16;
            n.ready((function(t) {
                t || (e.exports.WASM_LOADED = !0, d = n)
            }))
        },
        9490: function(e, t, i) {
            var r = i(5781),
                n = i(9491)(),
                o = 64,
                s = [];
            e.exports = I;
            var h = e.exports.BYTES_MIN = 16,
                u = e.exports.BYTES_MAX = 64,
                a = (e.exports.BYTES = 32, e.exports.KEYBYTES_MIN = 16),
                c = e.exports.KEYBYTES_MAX = 64,
                f = (e.exports.KEYBYTES = 32, e.exports.SALTBYTES = 16),
                A = e.exports.PERSONALBYTES = 16;

            function I(e, t, i, p, g) {
                if (!(this instanceof I)) return new I(e, t, i, p, g);
                if (!n || !n.exports) throw new Error("WASM not loaded. Wait for Blake2b.ready(cb)");
                e || (e = 32), !0 !== g && (r(e >= h, "digestLength must be at least " + h + ", was given " + e), r(e <= u, "digestLength must be at most " + u + ", was given " + e), null != t && r(t.length >= a, "key must be at least " + a + ", was given " + t.length), null != t && r(t.length <= c, "key must be at least " + c + ", was given " + t.length), null != i && r(i.length === f, "salt must be exactly " + f + ", was given " + i.length), null != p && r(p.length === A, "personal must be exactly " + A + ", was given " + p.length)), s.length || (s.push(o), o += 216), this.digestLength = e, this.finalized = !1, this.pointer = s.pop(), n.memory.fill(0, 0, 64), n.memory[0] = this.digestLength, n.memory[1] = t ? t.length : 0, n.memory[2] = 1, n.memory[3] = 1, i && n.memory.set(i, 32), p && n.memory.set(p, 48), this.pointer + 216 > n.memory.length && n.realloc(this.pointer + 216), n.exports.blake2b_init(this.pointer, this.digestLength), t && (this.update(t), n.memory.fill(0, o, o + t.length), n.memory[this.pointer + 200] = 128)
            }

            function p() {}

            function g(e) {
                return e < 16 ? "0" + e.toString(16) : e.toString(16)
            }
            I.prototype.update = function(e) {
                return r(!1 === this.finalized, "Hash instance finalized"), r(e, "input must be TypedArray or Buffer"), o + e.length > n.memory.length && n.realloc(o + e.length), n.memory.set(e, o), n.exports.blake2b_update(this.pointer, o, o + e.length), this
            }, I.prototype.digest = function(e) {
                if (r(!1 === this.finalized, "Hash instance finalized"), this.finalized = !0, s.push(this.pointer), n.exports.blake2b_final(this.pointer), !e || "binary" === e) return n.memory.slice(this.pointer + 128, this.pointer + 128 + this.digestLength);
                if ("hex" === e) return function(e, t, i) {
                    for (var r = "", n = 0; n < i; n++) r += g(e[t + n]);
                    return r
                }(n.memory, this.pointer + 128, this.digestLength);
                r(e.length >= this.digestLength, "input must be TypedArray or Buffer");
                for (var t = 0; t < this.digestLength; t++) e[t] = n.memory[this.pointer + 128 + t];
                return e
            }, I.prototype.final = I.prototype.digest, I.WASM = n && n.buffer, I.SUPPORTED = "undefined" != typeof WebAssembly, I.ready = function(e) {
                return e || (e = p), n ? new Promise((function(t, i) {
                    n.onload((function(r) {
                        r ? i() : t(), e(r)
                    }))
                })) : e(new Error("WebAssembly not supported"))
            }, I.prototype.ready = I.ready
        },
        9491: function(e, t, i) {
            function r(e) {
                if (!r.supported) return null;
                var t, o = e && e.imports,
                    s = (t = "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", "function" == typeof atob ? new Uint8Array(atob(t).split("").map(n)) : new(i(12).Buffer)(t, "base64")),
                    h = null,
                    u = {
                        buffer: s,
                        memory: null,
                        exports: null,
                        realloc: function(e) {
                            u.exports.memory.grow(Math.ceil(Math.abs(e - u.memory.length) / 65536)), u.memory = new Uint8Array(u.exports.memory.buffer)
                        },
                        onload: a
                    };
                return a((function() {})), u;

                function a(t) {
                    if (u.exports) return t();
                    if (h) h.then(t.bind(null, null)).catch(t);
                    else {
                        try {
                            if (e && e.async) throw new Error("async");
                            c({
                                instance: new WebAssembly.Instance(new WebAssembly.Module(s), o)
                            })
                        } catch (e) {
                            h = WebAssembly.instantiate(s, o).then(c)
                        }
                        a(t)
                    }
                }

                function c(e) {
                    u.exports = e.instance.exports, u.memory = u.exports.memory && u.exports.memory.buffer && new Uint8Array(u.exports.memory.buffer)
                }
            }

            function n(e) {
                return e.charCodeAt(0)
            }
            e.exports = r, r.supported = !1
        },
        9492: function(e, t, i) {
            var r = i(21).Buffer,
                n = i(172),
                o = i(5930),
                s = i(320),
                h = i(47),
                u = i(5545),
                a = i(5786),
                BigInteger = i(109),
                ECPair = i(6198),
                c = i(280),
                f = c.getCurveByName("secp256k1"),
                A = i(7267);

            function HDNode(e, t) {
                if (h(u.tuple("ECPair", u.Buffer256bit), arguments), !e.compressed) throw new TypeError("BIP32 only allows compressed keyPairs");
                this.keyPair = e, this.chainCode = t, this.depth = 0, this.index = 0, this.parentFingerprint = 0, this.derivationCache = {}
            }
            HDNode.HIGHEST_BIT = 2147483648, HDNode.LENGTH = 78, HDNode.MASTER_SECRET = r.from("Bitcoin seed", "utf8"), HDNode.fromSeedBuffer = function(e, t) {
                if (h(u.tuple(u.Buffer, u.maybe(u.Network)), arguments), e.length < 16) throw new TypeError("Seed should be at least 128 bits");
                if (e.length > 64) throw new TypeError("Seed should be at most 512 bits");
                var i = s("sha512", HDNode.MASTER_SECRET).update(e).digest(),
                    r = i.slice(0, 32),
                    n = i.slice(32),
                    o = BigInteger.fromBuffer(r),
                    a = new ECPair(o, null, {
                        network: t
                    });
                return new HDNode(a, n)
            }, HDNode.fromSeedHex = function(e, t) {
                return HDNode.fromSeedBuffer(r.from(e, "hex"), t)
            }, HDNode.fromBase58 = function(e, t) {
                var i = n.decode(e);
                if (78 !== i.length) throw new Error("Invalid buffer length");
                var r, o = i.readUInt32BE(0);
                if (Array.isArray(t)) {
                    if (!(r = t.filter((function(e) {
                            return o === e.bip32.private || o === e.bip32.public
                        })).pop())) throw new Error("Unknown network version")
                } else r = t || a.bitcoin;
                if (o !== r.bip32.private && o !== r.bip32.public) throw new Error("Invalid network version");
                var s = i[4],
                    h = i.readUInt32BE(5);
                if (0 === s && 0 !== h) throw new Error("Invalid parent fingerprint");
                var u = i.readUInt32BE(9);
                if (0 === s && 0 !== u) throw new Error("Invalid index");
                var A, I = i.slice(13, 45);
                if (o === r.bip32.private) {
                    if (0 !== i.readUInt8(45)) throw new Error("Invalid private key");
                    var p = BigInteger.fromBuffer(i.slice(46, 78));
                    A = new ECPair(p, null, {
                        network: r
                    })
                } else {
                    var g = c.Point.decodeFrom(f, i.slice(45, 78));
                    f.validate(g), A = new ECPair(null, g, {
                        network: r
                    })
                }
                var l = new HDNode(A, I);
                return l.depth = s, l.index = u, l.parentFingerprint = h, l
            }, HDNode.prototype.getAddress = function() {
                return this.keyPair.getAddress()
            }, HDNode.prototype.getIdentifier = function() {
                return o.hash160(this.keyPair.getPublicKeyBuffer())
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
                    i = this.isNeutered() ? t.bip32.public : t.bip32.private,
                    o = r.allocUnsafe(78);
                return o.writeUInt32BE(i, 0), o.writeUInt8(this.depth, 4), o.writeUInt32BE(this.parentFingerprint, 5), o.writeUInt32BE(this.index, 9), this.chainCode.copy(o, 13), this.isNeutered() ? this.keyPair.getPublicKeyBuffer().copy(o, 45) : (o.writeUInt8(0, 45), this.keyPair.d.toBuffer(32).copy(o, 46)), n.encode(o)
            }, HDNode.prototype.derive = function(e) {
                h(u.UInt32, e);
                var t = e >= HDNode.HIGHEST_BIT,
                    i = r.allocUnsafe(37);
                if (t) {
                    if (this.isNeutered()) throw new TypeError("Could not derive hardened child key");
                    i[0] = 0, this.keyPair.d.toBuffer(32).copy(i, 1), i.writeUInt32BE(e, 33)
                } else this.keyPair.getPublicKeyBuffer().copy(i, 0), i.writeUInt32BE(e, 33);
                var n, o = s("sha512", this.chainCode).update(i).digest(),
                    a = o.slice(0, 32),
                    I = o.slice(32),
                    p = BigInteger.fromBuffer(a);
                if (p.compareTo(f.n) >= 0) return this.derive(e + 1);
                if (this.isNeutered()) {
                    var g = A.publicKeyCreate(a, !1),
                        l = void 0 !== g ? c.Point.decodeFrom(f, g).add(this.keyPair.Q) : f.G.multiply(p).add(this.keyPair.Q);
                    if (f.isInfinity(l)) return this.derive(e + 1);
                    n = new ECPair(null, l, {
                        network: this.keyPair.network
                    })
                } else {
                    var C = p.add(this.keyPair.d).mod(f.n);
                    if (0 === C.signum()) return this.derive(e + 1);
                    n = new ECPair(C, null, {
                        network: this.keyPair.network
                    })
                }
                var d = new HDNode(n, I);
                return d.depth = this.depth + 1, d.index = e, d.parentFingerprint = this.getFingerprint().readUInt32BE(0), d
            }, HDNode.prototype.deriveHardened = function(e) {
                return h(u.UInt31, e), this.derive(e + HDNode.HIGHEST_BIT)
            }, HDNode.prototype.isNeutered = function() {
                return !this.keyPair.d
            }, HDNode.prototype.derivePath = function(e, t) {
                h(u.BIP32Path, e), h(u.maybe(u.Object), t), t = t || this.derivationCache;
                var i = e.split("/");
                if ("m" === i[0]) {
                    if (this.parentFingerprint) throw new Error("Not a master node");
                    i = i.slice(1)
                }
                return i.reduce((function(e, i) {
                    var r, n = t[i] || {};
                    return n.node ? (t = n.next, n.node) : ("'" === i.slice(-1) ? (r = parseInt(i.slice(0, -1), 10), n.node = e.deriveHardened(r)) : (r = parseInt(i, 10), n.node = e.derive(r)), t[i] = n, n.next = {}, t = n.next, n.node)
                }), this)
            }, HDNode.prototype.cloneKeypair = function() {
                var e = this.keyPair,
                    t = new ECPair(e.d, e.d ? null : e.Q, {
                        network: e.network,
                        compressed: e.compressed
                    });
                if (!t.__Q) {
                    var i = A.publicKeyCreate(e.d.toBuffer(32), !1);
                    void 0 !== i && (t.__Q = c.Point.decodeFrom(f, i))
                }
                return t
            }, e.exports = HDNode
        },
        9493: function(e, t, i) {
            var r = i(21).Buffer,
                n = i(6538),
                o = i(5930),
                s = i(5573),
                h = i(6533),
                u = i(6201),
                a = i(5786),
                c = i(139),
                f = i(47),
                A = i(5545),
                I = h.types,
                p = [h.types.P2PKH, h.types.P2PK, h.types.MULTISIG],
                g = p.concat([h.types.P2WPKH, h.types.P2WSH]),
                ECPair = i(6198),
                ECSignature = i(6199),
                l = i(6539),
                C = i(9494)("bitgo:utxolib:txbuilder");

            function d(e) {
                return -1 !== p.indexOf(e)
            }

            function w(e) {
                return -1 !== g.indexOf(e)
            }

            function E(e, t) {
                if (0 === e.length && 0 === t.length) return {};
                var i, r, n, u, a, c, f, A, p, g, l = !1,
                    C = !1,
                    E = !1,
                    S = s.decompile(e);
                h.classifyInput(S, !0) === I.P2SH && (E = !0, a = S[S.length - 1], A = h.classifyOutput(a), i = h.scriptHash.output.encode(o.hash160(a)), r = I.P2SH, u = a);
                var y = h.classifyWitness(t, !0);
                if (y === I.P2WSH) {
                    if (c = t[t.length - 1], f = h.classifyOutput(c), C = !0, l = !0, 0 === e.length) {
                        if (i = h.witnessScriptHash.output.encode(o.sha256(c)), r = I.P2WSH, void 0 !== a) throw new Error("Redeem script given when unnecessary")
                    } else {
                        if (!a) throw new Error("No redeemScript provided for P2WSH, but scriptSig non-empty");
                        if (p = h.witnessScriptHash.output.encode(o.sha256(c)), !a.equals(p)) throw new Error("Redeem script didn't match witnessScript")
                    }
                    if (!d(h.classifyOutput(c))) throw new Error("unsupported witness script");
                    u = c, n = f, g = t.slice(0, -1)
                } else if (y === I.P2WPKH) {
                    l = !0;
                    var B = t[t.length - 1],
                        v = o.hash160(B);
                    if (0 === e.length) {
                        if (i = h.witnessPubKeyHash.output.encode(v), r = I.P2WPKH, void 0 !== a) throw new Error("Redeem script given when unnecessary")
                    } else {
                        if (!a) throw new Error("No redeemScript provided for P2WPKH, but scriptSig wasn't empty");
                        if (p = h.witnessPubKeyHash.output.encode(v), !a.equals(p)) throw new Error("Redeem script did not have the right witness program")
                    }
                    n = I.P2PKH, g = t
                } else if (a) {
                    if (!w(A)) throw new Error("Bad redeemscript!");
                    u = a, n = A, g = S.slice(0, -1)
                } else r = n = h.classifyInput(e), g = S;
                var m = function(e, t, i) {
                        var r = [],
                            n = [];
                        switch (e) {
                            case I.P2PKH:
                                r = t.slice(1), n = t.slice(0, 1);
                                break;
                            case I.P2PK:
                                r[0] = i ? h.pubKey.output.decode(i) : void 0, n = t.slice(0, 1);
                                break;
                            case I.MULTISIG:
                                if (i) r = h.multisig.output.decode(i).pubKeys;
                                n = t.slice(1).map((function(e) {
                                    return 0 === e.length ? void 0 : e
                                }))
                        }
                        return {
                            pubKeys: r,
                            signatures: n
                        }
                    }(n, g, u),
                    Q = {
                        pubKeys: m.pubKeys,
                        signatures: m.signatures,
                        prevOutScript: i,
                        prevOutType: r,
                        signType: n,
                        signScript: u,
                        witness: Boolean(l)
                    };
                return E && (Q.redeemScript = a, Q.redeemScriptType = A), C && (Q.witnessScript = c, Q.witnessScriptType = f), Q
            }

            function S(e, t, i) {
                f(A.Buffer, e);
                var r = s.decompile(e);
                t || (t = h.classifyOutput(e));
                var n = [];
                switch (t) {
                    case I.P2PKH:
                        if (!i) break;
                        var u = r[2],
                            a = o.hash160(i);
                        u.equals(a) && (n = [i]);
                        break;
                    case I.P2WPKH:
                        if (!i) break;
                        var c = r[1],
                            p = o.hash160(i);
                        c.equals(p) && (n = [i]);
                        break;
                    case I.P2PK:
                        n = r.slice(0, 1);
                        break;
                    case I.MULTISIG:
                        n = r.slice(1, -2);
                        break;
                    default:
                        return {
                            scriptType: t
                        }
                }
                return {
                    pubKeys: n,
                    scriptType: t,
                    signatures: n.map((function() {}))
                }
            }

            function y(e, t) {
                if (e.prevOutType) {
                    if (e.prevOutType !== I.P2SH) throw new Error("PrevOutScript must be P2SH");
                    if (!s.decompile(e.prevOutScript)[1].equals(t)) throw new Error("Inconsistent hash160(RedeemScript)")
                }
            }

            function B(e, t, i, r, n) {
                var u, a, c, f, A, p, g, l, C, d = !1,
                    w = !1,
                    E = !1;
                if (i && n) {
                    if (A = o.hash160(i), g = o.sha256(n), y(e, A), !i.equals(h.witnessScriptHash.output.encode(g))) throw new Error("Witness script inconsistent with redeem script");
                    if (!(u = S(n, void 0, t)).pubKeys) throw new Error('WitnessScript not supported "' + s.toASM(i) + '"');
                    a = h.types.P2SH, c = h.scriptHash.output.encode(A), d = w = E = !0, f = h.types.P2WSH, l = p = u.scriptType, C = n
                } else if (i) {
                    if (y(e, A = o.hash160(i)), !(u = S(i, void 0, t)).pubKeys) throw new Error('RedeemScript not supported "' + s.toASM(i) + '"');
                    a = h.types.P2SH, c = h.scriptHash.output.encode(A), d = !0, C = i, w = (l = f = u.scriptType) === h.types.P2WPKH
                } else if (n) {
                    if (function(e, t) {
                            if (e.prevOutType) {
                                if (e.prevOutType !== I.P2WSH) throw new Error("PrevOutScript must be P2WSH");
                                if (!s.decompile(e.prevOutScript)[1].equals(t)) throw new Error("Inconsistent sha25(WitnessScript)")
                            }
                        }(e, g = o.sha256(n)), !(u = S(n, void 0, t)).pubKeys) throw new Error('WitnessScript not supported "' + s.toASM(i) + '"');
                    a = h.types.P2WSH, c = h.witnessScriptHash.output.encode(g), w = E = !0, l = p = u.scriptType, C = n
                } else if (e.prevOutType) {
                    if (e.prevOutType === I.P2SH || e.prevOutType === I.P2WSH) throw new Error("PrevOutScript is " + e.prevOutType + ", requires redeemScript");
                    if (a = e.prevOutType, c = e.prevOutScript, !(u = S(e.prevOutScript, e.prevOutType, t)).pubKeys) return;
                    w = e.prevOutType === I.P2WPKH, l = a, C = c
                } else u = S(c = h.pubKeyHash.output.encode(o.hash160(t)), I.P2PKH, t), w = !1, l = a = I.P2PKH, C = c;
                l === I.P2WPKH && (C = h.pubKeyHash.output.encode(h.witnessPubKeyHash.output.decode(C))), d && (e.redeemScript = i, e.redeemScriptType = f), E && (e.witnessScript = n, e.witnessScriptType = p), e.pubKeys = u.pubKeys, e.signatures = u.signatures, e.signScript = C, e.signType = l, e.prevOutScript = c, e.prevOutType = a, e.witness = w
            }

            function v(e, t, i, n) {
                if (e === I.P2PKH) {
                    if (1 === t.length && r.isBuffer(t[0]) && 1 === i.length) return h.pubKeyHash.input.encodeStack(t[0], i[0])
                } else if (e === I.P2PK) {
                    if (1 === t.length && r.isBuffer(t[0])) return h.pubKey.input.encodeStack(t[0])
                } else {
                    if (e !== I.MULTISIG) throw new Error("Not yet supported");
                    if (t.length > 0) return t = t.map((function(e) {
                        return e || c.OP_0
                    })), n || (t = t.filter((function(e) {
                        return e !== c.OP_0
                    }))), h.multisig.input.encodeStack(t)
                }
                if (!n) throw new Error("Not enough signatures provided");
                return []
            }

            function m(e, t) {
                this.prevTxMap = {}, this.network = e || a.bitcoin, this.maximumFeeRate = t || 2500, this.inputs = [], this.tx = new l(this.network)
            }

            function Q(e) {
                return void 0 !== e.prevOutScript && void 0 !== e.signScript && void 0 !== e.pubKeys && void 0 !== e.signatures && e.signatures.length === e.pubKeys.length && e.pubKeys.length > 0 && (!1 === e.witness || !0 === e.witness && void 0 !== e.value)
            }

            function b(e) {
                return e.readUInt8(e.length - 1)
            }
            m.prototype.setLockTime = function(e) {
                if (f(A.UInt32, e), this.inputs.some((function(e) {
                        return !!e.signatures && e.signatures.some((function(e) {
                            return e
                        }))
                    }))) throw new Error("No, this would invalidate signatures");
                this.tx.locktime = e
            }, m.prototype.setVersion = function(e, t = !0) {
                if (f(A.UInt32, e), u.isZcash(this.network)) {
                    if (!this.network.consensusBranchId.hasOwnProperty(this.tx.version)) throw new Error("Unsupported Zcash transaction");
                    this.tx.overwintered = t ? 1 : 0
                }
                this.tx.version = e
            }, m.prototype.setVersionGroupId = function(e) {
                if (!u.isZcash(this.network) || !this.tx.isOverwinterCompatible()) throw new Error("expiryHeight can only be set for Zcash starting at overwinter version. Current network coin: " + this.network.coin + ", version: " + this.tx.version);
                f(A.UInt32, e), this.tx.versionGroupId = e
            }, m.prototype.setExpiryHeight = function(e) {
                if (!u.isZcash(this.network) || !this.tx.isOverwinterCompatible()) throw new Error("expiryHeight can only be set for Zcash starting at overwinter version. Current network coin: " + this.network.coin + ", version: " + this.tx.version);
                f(A.UInt32, e), this.tx.expiryHeight = e
            }, m.prototype.setJoinSplits = function(e) {
                if (!u.isZcash(this.network) || !this.tx.supportsJoinSplits()) throw new Error("joinsplits can only be set for Zcash starting at version 2. Current network coin: " + this.network.coin + ", version: " + this.tx.version);
                if (e && e.joinsplits) return this.tx.joinsplits = e.joinsplits.map((function(e) {
                    return {
                        vpubOld: e.vpubOld,
                        vpubNew: e.vpubNew,
                        anchor: e.anchor,
                        nullifiers: e.nullifiers,
                        commitments: e.commitments,
                        ephemeralKey: e.ephemeralKey,
                        randomSeed: e.randomSeed,
                        macs: e.macs,
                        zproof: e.zproof,
                        ciphertexts: e.ciphertexts
                    }
                })), this.tx.joinsplitPubkey = e.joinsplitPubkey, void(this.tx.joinsplitSig = e.joinsplitSig);
                throw new Error("Invalid transaction with joinsplits")
            }, m.fromTransaction = function(e, t) {
                var i = t || a.bitcoin,
                    r = new m(i);
                if (r.network.coin !== e.network.coin) throw new Error("This transaction is incompatible with the transaction builder");
                return r.setVersion(e.version, e.overwintered), r.setLockTime(e.locktime), u.isZcash(i) && (r.tx.isOverwinterCompatible() && (r.setVersionGroupId(e.versionGroupId), r.setExpiryHeight(e.expiryHeight)), r.tx.supportsJoinSplits() && r.setJoinSplits(e)), u.isDash(i) && (f(A.UInt16, e.type), r.tx.type = e.type, r.tx.versionSupportsDashSpecialTransactions() && (f(A.Buffer, e.extraPayload), r.tx.extraPayload = e.extraPayload)), e.outs.forEach((function(e) {
                    r.addOutput(e.script, e.value)
                })), e.ins.forEach((function(e) {
                    r.__addInputUnsafe(e.hash, e.index, {
                        sequence: e.sequence,
                        script: e.script,
                        witness: e.witness,
                        value: e.value
                    })
                })), r.inputs.forEach((function(t, r) {
                    ! function(e, t, i, r, n) {
                        if (e.redeemScriptType === I.MULTISIG && e.redeemScript && e.pubKeys.length !== e.signatures.length) {
                            n = n || a.bitcoin;
                            var o = e.signatures.concat();
                            e.signatures = e.pubKeys.map((function(s) {
                                var h, a = ECPair.fromPublicKeyBuffer(s);
                                return o.some((function(s, c) {
                                    if (!s) return !1;
                                    var f, A = ECSignature.parseScriptSignature(s);
                                    switch (n.coin) {
                                        case u.BSV:
                                        case u.BCH:
                                            f = t.hashForCashSignature(i, e.signScript, r, A.hashType);
                                            break;
                                        case u.BTG:
                                            f = t.hashForGoldSignature(i, e.signScript, r, A.hashType);
                                            break;
                                        case u.ZEC:
                                            if (void 0 === r) return !1;
                                            f = t.hashForZcashSignature(i, e.signScript, r, A.hashType);
                                            break;
                                        default:
                                            f = e.witness ? t.hashForWitnessV0(i, e.signScript, r, A.hashType) : t.hashForSignature(i, e.signScript, A.hashType)
                                    }
                                    return !!a.verify(f, A.signature) && (o[c] = void 0, h = s, !0)
                                })), h
                            }))
                        }
                    }(t, e, r, t.value, i)
                })), r
            }, m.prototype.addInput = function(e, t, i, n) {
                if (!this.__canModifyInputs()) throw new Error("No, this would invalidate signatures");
                var o;
                if ("string" == typeof e) e = r.from(e, "hex").reverse();
                else if (e instanceof l) {
                    var s = e.outs[t];
                    n = s.script, o = s.value, e = e.getHash()
                }
                return this.__addInputUnsafe(e, t, {
                    sequence: i,
                    prevOutScript: n,
                    value: o
                })
            }, m.prototype.__addInputUnsafe = function(e, t, i) {
                if (l.isCoinbaseHash(e)) throw new Error("coinbase inputs not supported");
                var r = e.toString("hex") + ":" + t;
                if (void 0 !== this.prevTxMap[r]) throw new Error("Duplicate TxOut: " + r);
                var n = {};
                if (void 0 !== i.script && (n = E(i.script, i.witness || [])), void 0 !== i.value && (n.value = i.value), !n.prevOutScript && i.prevOutScript) {
                    var o;
                    if (!n.pubKeys && !n.signatures) {
                        var s = S(i.prevOutScript);
                        s.pubKeys && (n.pubKeys = s.pubKeys, n.signatures = s.signatures), o = s.scriptType
                    }
                    n.prevOutScript = i.prevOutScript, n.prevOutType = o || h.classifyOutput(i.prevOutScript)
                }
                var u = this.tx.addInput(e, t, i.sequence, i.scriptSig);
                return this.inputs[u] = n, this.prevTxMap[r] = u, u
            }, m.prototype.addOutput = function(e, t) {
                if (!this.__canModifyOutputs()) throw new Error("No, this would invalidate signatures");
                return "string" == typeof e && (e = n.toOutputScript(e, this.network)), this.tx.addOutput(e, t)
            }, m.prototype.build = function() {
                return this.__build(!1)
            }, m.prototype.buildIncomplete = function() {
                return this.__build(!0)
            }, m.prototype.__build = function(e) {
                if (!e) {
                    if (!this.tx.ins.length) throw new Error("Transaction has no inputs");
                    if (!this.tx.outs.length) throw new Error("Transaction has no outputs")
                }
                var t = this.tx.clone();
                if (this.inputs.forEach((function(i, r) {
                        if (!(i.witnessScriptType || i.redeemScriptType || i.prevOutType) && !e) throw new Error("Transaction is not complete");
                        var n = function(e, t) {
                            var i = e.prevOutType,
                                r = [],
                                n = [];
                            d(i) && (r = v(i, e.signatures, e.pubKeys, t));
                            var o = !1;
                            if (i === h.types.P2SH) {
                                if (!t && !w(e.redeemScriptType)) throw new Error("Impossible to sign this type");
                                d(e.redeemScriptType) && (r = v(e.redeemScriptType, e.signatures, e.pubKeys, t)), e.redeemScriptType && (o = !0, i = e.redeemScriptType)
                            }
                            switch (i) {
                                case h.types.P2WPKH:
                                    n = v(h.types.P2PKH, e.signatures, e.pubKeys, t);
                                    break;
                                case h.types.P2WSH:
                                    if (!t && !d(e.witnessScriptType)) throw new Error("Impossible to sign this type");
                                    d(e.witnessScriptType) && ((n = v(e.witnessScriptType, e.signatures, e.pubKeys, t)).push(e.witnessScript), i = e.witnessScriptType)
                            }
                            return o && r.push(e.redeemScript), {
                                type: i,
                                script: s.compile(r),
                                witness: n
                            }
                        }(i, e);
                        if (!e && !d(n.type) && n.type !== h.types.P2WPKH) throw new Error(n.type + " not supported");
                        t.setInputScript(r, n.script), t.setWitness(r, n.witness)
                    })), !e && this.__overMaximumFees(t.virtualSize())) throw new Error("Transaction has absurd fees");
                return t
            }, m.prototype.sign = function(e, t, i, n, o, s) {
                if (C("Signing transaction: (input: %d, hashType: %d, witnessVal: %s, witnessScript: %j)", e, n, o, s), C("Transaction Builder network: %j", this.network), t.network && t.network !== this.network) throw new TypeError("Inconsistent network");
                if (!this.inputs[e]) throw new Error("No input at index: " + e);
                n = n || l.SIGHASH_ALL;
                var h = this.inputs[e];
                if (void 0 !== h.redeemScript && i && !h.redeemScript.equals(i)) throw new Error("Inconsistent redeemScript");
                var a, c = t.publicKey || t.getPublicKeyBuffer();
                if (!Q(h)) {
                    if (void 0 !== o) {
                        if (void 0 !== h.value && h.value !== o) throw new Error("Input didn't match witnessValue");
                        f(A.Satoshi, o), h.value = o
                    }
                    if (C("Preparing input %d for signing", e), Q(h) || B(h, c, i, 0, s), !Q(h)) throw Error(h.prevOutType + " not supported")
                }
                if (u.isBitcoinGold(this.network) ? (a = this.tx.hashForGoldSignature(e, h.signScript, o, n, h.witness), C("Calculated BTG sighash (%s)", a.toString("hex"))) : u.isBitcoinCash(this.network) || u.isBitcoinSV(this.network) ? (a = this.tx.hashForCashSignature(e, h.signScript, o, n), C("Calculated BCH sighash (%s)", a.toString("hex"))) : u.isZcash(this.network) ? (a = this.tx.hashForZcashSignature(e, h.signScript, o, n), C("Calculated ZEC sighash (%s)", a.toString("hex"))) : h.witness ? (a = this.tx.hashForWitnessV0(e, h.signScript, o, n), C("Calculated witnessv0 sighash (%s)", a.toString("hex"))) : (a = this.tx.hashForSignature(e, h.signScript, n), C("Calculated sighash (%s)", a.toString("hex"))), !h.pubKeys.some((function(e, i) {
                        if (!c.equals(e)) return !1;
                        if (h.signatures[i]) throw new Error("Signature already exists");
                        if (33 !== c.length && h.signType === I.P2WPKH) throw new Error("BIP143 rejects uncompressed public keys in P2WPKH or P2WSH");
                        var o = t.sign(a);
                        return r.isBuffer(o) && (o = ECSignature.fromRSBuffer(o)), C("Produced signature (r: %s, s: %s)", o.r, o.s), h.signatures[i] = o.toScriptSignature(n), !0
                    }))) throw new Error("Key pair cannot sign for this input")
            }, m.prototype.__canModifyInputs = function() {
                return this.inputs.every((function(e) {
                    return void 0 === e.signatures || e.signatures.every((function(e) {
                        return !e || b(e) & l.SIGHASH_ANYONECANPAY
                    }))
                }))
            }, m.prototype.__canModifyOutputs = function() {
                var e = this.tx.ins.length,
                    t = this.tx.outs.length;
                return this.inputs.every((function(i) {
                    return void 0 === i.signatures || i.signatures.every((function(i) {
                        if (!i) return !0;
                        var r = 31 & b(i);
                        return r === l.SIGHASH_NONE || (r === l.SIGHASH_SINGLE ? e <= t : void 0)
                    }))
                }))
            }, m.prototype.__overMaximumFees = function(e) {
                return (this.inputs.reduce((function(e, t) {
                    return e + (t.value >>> 0)
                }), 0) - this.tx.outs.reduce((function(e, t) {
                    return e + t.value
                }), 0)) / e > this.maximumFeeRate
            }, e.exports = m
        },
        9494: function(e, t, i) {
            function r() {
                var e;
                try {
                    e = t.storage.debug
                } catch (e) {}
                return !e && "undefined" != typeof process && "env" in process && (e = process.env.DEBUG), e
            }(t = e.exports = i(9495)).log = function() {
                return "object" == typeof console && console.log && Function.prototype.apply.call(console.log, console, arguments)
            }, t.formatArgs = function(e) {
                var i = this.useColors;
                if (e[0] = (i ? "%c" : "") + this.namespace + (i ? " %c" : " ") + e[0] + (i ? "%c " : " ") + "+" + t.humanize(this.diff), !i) return;
                var r = "color: " + this.color;
                e.splice(1, 0, r, "color: inherit");
                var n = 0,
                    o = 0;
                e[0].replace(/%[a-zA-Z%]/g, (function(e) {
                    "%%" !== e && (n++, "%c" === e && (o = n))
                })), e.splice(o, 0, r)
            }, t.save = function(e) {
                try {
                    null == e ? t.storage.removeItem("debug") : t.storage.debug = e
                } catch (e) {}
            }, t.load = r, t.useColors = function() {
                if ("undefined" != typeof window && window.process && "renderer" === window.process.type) return !0;
                if ("undefined" != typeof navigator && navigator.userAgent && navigator.userAgent.toLowerCase().match(/(edge|trident)\/(\d+)/)) return !1;
                return "undefined" != typeof document && document.documentElement && document.documentElement.style && document.documentElement.style.WebkitAppearance || "undefined" != typeof window && window.console && (window.console.firebug || window.console.exception && window.console.table) || "undefined" != typeof navigator && navigator.userAgent && navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/) && parseInt(RegExp.$1, 10) >= 31 || "undefined" != typeof navigator && navigator.userAgent && navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/)
            }, t.storage = "undefined" != typeof chrome && void 0 !== chrome.storage ? chrome.storage.local : function() {
                try {
                    return window.localStorage
                } catch (e) {}
            }(), t.colors = ["#0000CC", "#0000FF", "#0033CC", "#0033FF", "#0066CC", "#0066FF", "#0099CC", "#0099FF", "#00CC00", "#00CC33", "#00CC66", "#00CC99", "#00CCCC", "#00CCFF", "#3300CC", "#3300FF", "#3333CC", "#3333FF", "#3366CC", "#3366FF", "#3399CC", "#3399FF", "#33CC00", "#33CC33", "#33CC66", "#33CC99", "#33CCCC", "#33CCFF", "#6600CC", "#6600FF", "#6633CC", "#6633FF", "#66CC00", "#66CC33", "#9900CC", "#9900FF", "#9933CC", "#9933FF", "#99CC00", "#99CC33", "#CC0000", "#CC0033", "#CC0066", "#CC0099", "#CC00CC", "#CC00FF", "#CC3300", "#CC3333", "#CC3366", "#CC3399", "#CC33CC", "#CC33FF", "#CC6600", "#CC6633", "#CC9900", "#CC9933", "#CCCC00", "#CCCC33", "#FF0000", "#FF0033", "#FF0066", "#FF0099", "#FF00CC", "#FF00FF", "#FF3300", "#FF3333", "#FF3366", "#FF3399", "#FF33CC", "#FF33FF", "#FF6600", "#FF6633", "#FF9900", "#FF9933", "#FFCC00", "#FFCC33"], t.formatters.j = function(e) {
                try {
                    return JSON.stringify(e)
                } catch (e) {
                    return "[UnexpectedJSONParseError]: " + e.message
                }
            }, t.enable(r())
        },
        9495: function(e, t, i) {
            function r(e) {
                var i;

                function r() {
                    if (r.enabled) {
                        var e = r,
                            n = +new Date,
                            o = n - (i || n);
                        e.diff = o, e.prev = i, e.curr = n, i = n;
                        for (var s = new Array(arguments.length), h = 0; h < s.length; h++) s[h] = arguments[h];
                        s[0] = t.coerce(s[0]), "string" != typeof s[0] && s.unshift("%O");
                        var u = 0;
                        s[0] = s[0].replace(/%([a-zA-Z%])/g, (function(i, r) {
                            if ("%%" === i) return i;
                            u++;
                            var n = t.formatters[r];
                            if ("function" == typeof n) {
                                var o = s[u];
                                i = n.call(e, o), s.splice(u, 1), u--
                            }
                            return i
                        })), t.formatArgs.call(e, s);
                        var a = r.log || t.log || console.log.bind(console);
                        a.apply(e, s)
                    }
                }
                return r.namespace = e, r.enabled = t.enabled(e), r.useColors = t.useColors(), r.color = function(e) {
                    var i, r = 0;
                    for (i in e) r = (r << 5) - r + e.charCodeAt(i), r |= 0;
                    return t.colors[Math.abs(r) % t.colors.length]
                }(e), r.destroy = n, "function" == typeof t.init && t.init(r), t.instances.push(r), r
            }

            function n() {
                var e = t.instances.indexOf(this);
                return -1 !== e && (t.instances.splice(e, 1), !0)
            }(t = e.exports = r.debug = r.default = r).coerce = function(e) {
                return e instanceof Error ? e.stack || e.message : e
            }, t.disable = function() {
                t.enable("")
            }, t.enable = function(e) {
                var i;
                t.save(e), t.names = [], t.skips = [];
                var r = ("string" == typeof e ? e : "").split(/[\s,]+/),
                    n = r.length;
                for (i = 0; i < n; i++) r[i] && ("-" === (e = r[i].replace(/\*/g, ".*?"))[0] ? t.skips.push(new RegExp("^" + e.substr(1) + "$")) : t.names.push(new RegExp("^" + e + "$")));
                for (i = 0; i < t.instances.length; i++) {
                    var o = t.instances[i];
                    o.enabled = t.enabled(o.namespace)
                }
            }, t.enabled = function(e) {
                if ("*" === e[e.length - 1]) return !0;
                var i, r;
                for (i = 0, r = t.skips.length; i < r; i++)
                    if (t.skips[i].test(e)) return !1;
                for (i = 0, r = t.names.length; i < r; i++)
                    if (t.names[i].test(e)) return !0;
                return !1
            }, t.humanize = i(934), t.instances = [], t.names = [], t.skips = [], t.formatters = {}
        }
    }
]);