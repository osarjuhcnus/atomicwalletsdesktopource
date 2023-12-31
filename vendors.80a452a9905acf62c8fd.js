(window.webpackJsonp = window.webpackJsonp || []).push([
    [246], {
        5424: function(e, t, i) {
            "use strict";
            var r = i(2);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var n = r(i(9496)),
                o = r(i(461)),
                s = i(29),
                u = r(i(9524)),
                h = i(930);
            const a = {
                messagePrefix: "",
                bip32: {
                    public: 76067358,
                    private: 76066276
                },
                pubKeyHash: 60,
                scriptHash: 5,
                wif: 188,
                coin: "zec",
                consensusBranchId: {
                    1: 0,
                    2: 0,
                    3: 1537743641,
                    4: 1991772603
                }
            };
            class KMDCoin extends((0, h.HasProviders)((0, h.BitgoMixin)((0, h.BitcoinLikeFeeMixin)(o.default)))) {
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
                        name: "Komodo",
                        ticker: "KMD",
                        decimal: 8,
                        derivation: "m/44'/141'/0'/0/0",
                        unspendableBalance: "0",
                        explorers: r,
                        txWebUrl: o,
                        socket: s
                    }), this.feePerByte = i.feePerByte, this.coefficient = i.coefficient, this.coreLibrary = n.default, this.transactions = [], this.network = a, this.balance = null, this.balances = null
                }
                getTransactionBuilder() {
                    const e = new this.coreLibrary.TransactionBuilder(this.network);
                    return e.setVersion(4), e.setLockTime(parseInt(Date.now() / 1e3, 10)), e.setVersionGroupId(parseInt("0x892F2085", 16)), e.setExpiryHeight(499999999), e
                }
                signInput(e, t, i, r) {
                    e.sign(i, t, null, this.coreLibrary.Transaction.SIGHASH_ALL, r.satoshis)
                }
                async calculateReward(e) {
                    const t = await this.getUnspentOutputs(e),
                        i = await Promise.all(t.map(({
                            txid: e
                        }) => this.getTransaction(e))),
                        {
                            blockHash: r
                        } = await this.getProvider("utxo").getLatestBlock(),
                        n = await this.getProvider("utxo").getBlock(r);
                    t.forEach(e => {
                        const t = i.find(t => t.txid === e.txid);
                        e.locktime = t && t.locktime, e.tiptime = n.time, e.satoshis = Number(e.satoshis)
                    });
                    const {
                        inputs: o,
                        reward: s
                    } = (0, u.default)(t);
                    return {
                        inputs: o,
                        reward: s
                    }
                }
                async createClaimTransaction(e) {
                    const {
                        inputs: t = [],
                        reward: i
                    } = e || await this.calculateReward(this.address);
                    if (0 === t.length) throw new Error("Claim is unavailable, please try again later.");
                    if (i.toNumber() < 1e6) throw new Error("Current reward is too low. Minimal amount is 0.01 KMD.");
                    const r = t.reduce((e, {
                        value: t
                    }) => e.add(new this.BN(t)), new this.BN(0));
                    return await this.buildTx(t, this.address, r.add(i).toNumber(), new this.BN(0))
                }
                async getInfo() {
                    const {
                        balance: e,
                        balances: t
                    } = await this.getProvider("balance").getInfo(this.address);
                    if (this.balance = e, t) this.balances = {
                        rewards: t.interest > 0 ? String(t.interest) : "0"
                    };
                    else {
                        const {
                            reward: e
                        } = await this.calculateReward(this.address);
                        let t = e && this.toCurrencyUnit(e);
                        t || (t = await this.getProvider("rewards").getRewards(this.address).catch(e => console.warn(e))), this.balances = {
                            rewards: String(t)
                        }
                    }
                    return {
                        balance: this.balance,
                        balances: this.balances
                    }
                }
                async claim() {
                    try {
                        const e = await this.createClaimTransaction();
                        return await this.sendTransaction(e)
                    } catch (e) {
                        throw new s.WalletError({
                            type: "claimError",
                            error: e,
                            instance: this
                        })
                    }
                }
            }
            var c = KMDCoin;
            t.default = c
        },
        5574: function(e, t, i) {
            var r = i(21).Buffer,
                n = i(370),
                o = i(931),
                s = i(47),
                u = i(5582),
                h = i(7269),
                a = i(139),
                c = i(1392),
                A = a.OP_RESERVED;

            function f(e) {
                return u.Buffer(e) || function(e) {
                    return u.Number(e) && (e === a.OP_0 || e >= a.OP_1 && e <= a.OP_16 || e === a.OP_1NEGATE)
                }(e)
            }

            function I(e) {
                return u.Array(e) && e.every(f)
            }

            function p(e) {
                return 0 === e.length ? a.OP_0 : 1 === e.length ? e[0] >= 1 && e[0] <= 16 ? A + e[0] : 129 === e[0] ? a.OP_1NEGATE : void 0 : void 0
            }

            function g(e) {
                if (r.isBuffer(e)) return e;
                s(u.Array, e);
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
                if (u.Array(e)) return e;
                s(u.Buffer, e);
                for (var t = [], i = 0; i < e.length;) {
                    var r = e[i];
                    if (r > a.OP_0 && r <= a.OP_PUSHDATA4) {
                        var n = o.decode(e, i);
                        if (null === n) return [];
                        if ((i += n.size) + n.number > e.length) return [];
                        var h = e.slice(i, i + n.number);
                        i += n.number;
                        var c = p(h);
                        void 0 !== c ? t.push(c) : t.push(h)
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
                    return s(u.String, e), g(e.split(" ").map((function(e) {
                        return void 0 !== a[e] ? a[e] : (s(u.Hex, e), r.from(e, "hex"))
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
                        return r.isBuffer(e) ? e : e === a.OP_0 ? r.allocUnsafe(0) : h.encode(e - A)
                    }))
                },
                number: i(7269),
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
        5582: function(e, t, i) {
            var r = i(47),
                n = Math.pow(2, 31) - 1;

            function o(e) {
                return r.String(e) && e.match(/^(m\/)?(\d+'?\/)*\d+'?$/)
            }
            o.toJSON = function() {
                return "BIP32 derivation path"
            };
            var s = r.quacksLike("BigInteger"),
                u = r.quacksLike("Point"),
                ECSignature = r.compile({
                    r: s,
                    s: s
                }),
                h = r.oneOf(r.UInt8, r.UInt16),
                a = r.compile({
                    messagePrefix: r.oneOf(r.Buffer, r.String),
                    bip32: {
                        public: r.UInt32,
                        private: r.UInt32
                    },
                    pubKeyHash: h,
                    scriptHash: h,
                    wif: r.UInt8
                }),
                c = {
                    BigInt: s,
                    BIP32Path: o,
                    Buffer256bit: r.BufferN(32),
                    ECPoint: u,
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
                    NetworkVersion: h
                };
            for (var A in r) c[A] = r[A];
            e.exports = c
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
        5847: function(e, t, i) {
            var r = i(6053);
            e.exports = {
                dash: {
                    messagePrefix: "DarkCoin Signed Message:\n",
                    bip32: {
                        public: 76067358,
                        private: 76066276
                    },
                    pubKeyHash: 76,
                    scriptHash: 16,
                    wif: 204,
                    coin: r.DASH
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
                    coin: r.DASH
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
                    coin: r.BCH,
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
                    coin: r.BCH
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
                    coin: r.BSV,
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
                    coin: r.BSV
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
                        4: 733220448
                    },
                    coin: r.ZEC
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
                        4: 733220448
                    },
                    coin: r.ZEC
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
                    coin: r.BTG,
                    forkId: 79
                },
                litecoin: {
                    messagePrefix: "Litecoin Signed Message:\n",
                    bech32: "ltc",
                    bip32: {
                        public: 27108450,
                        private: 27106558
                    },
                    pubKeyHash: 48,
                    scriptHash: 50,
                    wif: 176,
                    coin: r.LTC
                },
                litecoinTest: {
                    messagePrefix: "Litecoin Signed Message:\n",
                    bech32: "tltc",
                    bip32: {
                        public: 76067358,
                        private: 76066276
                    },
                    pubKeyHash: 111,
                    scriptHash: 58,
                    wif: 176,
                    coin: r.LTC
                },
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
                    coin: r.BTC
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
                    coin: r.BTC
                }
            }
        },
        5931: function(e, t, i) {
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
        6053: function(e, t, i) {
            const r = i(47),
                n = {
                    BCH: "bch",
                    BSV: "bsv",
                    BTC: "btc",
                    BTG: "btg",
                    LTC: "ltc",
                    ZEC: "zec",
                    DASH: "dash",
                    isBitcoin: function(e) {
                        return r.value(n.BTC)(e.coin)
                    },
                    isBitcoinCash: function(e) {
                        return r.value(n.BCH)(e.coin)
                    },
                    isBitcoinSV: function(e) {
                        return r.value(n.BSV)(e.coin)
                    },
                    isBitcoinGold: function(e) {
                        return r.value(n.BTG)(e.coin)
                    },
                    isDash: function(e) {
                        return r.value(n.DASH)(e.coin)
                    },
                    isLitecoin: function(e) {
                        return r.value(n.LTC)(e.coin)
                    },
                    isZcash: function(e) {
                        return r.value(n.ZEC)(e.coin)
                    }
                };
            n.isValidCoin = r.oneOf(n.isBitcoin, n.isBitcoinCash, n.isBitcoinSV, n.isBitcoinGold, n.isLitecoin, n.isZcash), e.exports = n
        },
        6202: function(e, t, i) {
            var r = i(6545),
                n = i(5931),
                o = i(9514),
                s = i(125),
                u = i(47),
                h = i(5582),
                a = i(281),
                c = i(5847),
                BigInteger = i(109),
                A = i(280),
                f = A.getCurveByName("secp256k1"),
                I = o.__curve,
                p = i(7273);

            function ECPair(e, t, i) {
                if (i && u({
                        compressed: h.maybe(h.Boolean),
                        network: h.maybe(h.Network)
                    }, i), i = i || {}, e) {
                    if (e.signum() <= 0) throw new Error("Private key must be greater than 0");
                    if (e.compareTo(I.n) >= 0) throw new Error("Private key must be less than the curve order");
                    if (t) throw new TypeError("Unexpected publicKey parameter");
                    this.d = e
                } else u(h.ECPoint, t), this.__Q = t;
                this.compressed = void 0 === i.compressed || i.compressed, this.network = i.network || c.bitcoin
            }
            Object.defineProperty(ECPair.prototype, "Q", {
                get: function() {
                    if (!this.__Q && this.d) {
                        const e = p.publicKeyCreate(this.d.toBuffer(32), !1);
                        this.__Q = e ? A.Point.decodeFrom(f, e) : I.G.multiply(this.d)
                    }
                    return this.__Q
                }
            }), ECPair.fromPublicKeyBuffer = function(e, t) {
                var i = A.Point.decodeFrom(I, e);
                return new ECPair(null, i, {
                    compressed: i.compressed,
                    network: t
                })
            }, ECPair.fromWIF = function(e, t) {
                var i = a.decode(e),
                    r = i.version;
                if (h.Array(t)) {
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
                    u(h.Buffer256bit, r), t = BigInteger.fromBuffer(r)
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
                return i(6544).privateKeyBufferToECPair(e, t)
            }, ECPair.prototype.getPrivateKeyBuffer = function() {
                return i(6544).privateKeyBufferFromECPair(this)
            }, e.exports = ECPair
        },
        6203: function(e, t, i) {
            var r = i(370),
                n = i(47),
                o = i(5582),
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
        6540: function(e, t, i) {
            var r = i(5574).decompile,
                n = i(6541),
                o = i(9498),
                s = i(6542),
                u = i(6543),
                h = i(9503),
                a = i(9506),
                c = i(9508),
                A = i(9510),
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
                    var i = r(e);
                    return u.input.check(i) ? f.P2PKH : h.input.check(i, t) ? f.P2SH : n.input.check(i, t) ? f.MULTISIG : s.input.check(i) ? f.P2PK : f.NONSTANDARD
                },
                classifyOutput: function(e) {
                    if (a.output.check(e)) return f.P2WPKH;
                    if (c.output.check(e)) return f.P2WSH;
                    if (u.output.check(e)) return f.P2PKH;
                    if (h.output.check(e)) return f.P2SH;
                    var t = r(e);
                    return n.output.check(t) ? f.MULTISIG : s.output.check(t) ? f.P2PK : A.output.check(t) ? f.WITNESS_COMMITMENT : o.output.check(t) ? f.NULLDATA : f.NONSTANDARD
                },
                classifyWitness: function(e, t) {
                    var i = r(e);
                    return a.input.check(i) ? f.P2WPKH : c.input.check(i, t) ? f.P2WSH : f.NONSTANDARD
                },
                multisig: n,
                nullData: o,
                pubKey: s,
                pubKeyHash: u,
                scriptHash: h,
                witnessPubKeyHash: a,
                witnessScriptHash: c,
                witnessCommitment: A,
                types: f
            }
        },
        6541: function(e, t, i) {
            e.exports = {
                input: i(9497),
                output: i(7270)
            }
        },
        6542: function(e, t, i) {
            e.exports = {
                input: i(9499),
                output: i(9500)
            }
        },
        6543: function(e, t, i) {
            e.exports = {
                input: i(9501),
                output: i(9502)
            }
        },
        6544: function(e, t, i) {
            const BigInteger = i(109),
                ECPair = i(6202);
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
        6545: function(e, t, i) {
            var r = i(21).Buffer,
                n = i(9513),
                o = i(172),
                s = i(5574),
                u = i(6540),
                h = i(5847),
                a = i(47),
                c = i(5582);

            function A(e) {
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

            function f(e) {
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
                    u = r.allocUnsafe(n);
                return i ? u.writeUInt16BE(t, 0) : u.writeUInt8(t, 0), e.copy(u, s), o.encode(u)
            }

            function p(e, t, i) {
                var r = n.toWords(e);
                return r.unshift(t), n.encode(i, r)
            }
            e.exports = {
                fromBase58Check: A,
                fromBech32: f,
                fromOutputScript: function(e, t) {
                    if (t = t || h.bitcoin, u.pubKeyHash.output.check(e)) return I(s.compile(e).slice(3, 23), t.pubKeyHash);
                    if (u.scriptHash.output.check(e)) return I(s.compile(e).slice(2, 22), t.scriptHash);
                    if (u.witnessPubKeyHash.output.check(e)) return p(s.compile(e).slice(2, 22), 0, t.bech32);
                    if (u.witnessScriptHash.output.check(e)) return p(s.compile(e).slice(2, 34), 0, t.bech32);
                    throw new Error(s.toASM(e) + " has no matching Address")
                },
                toBase58Check: I,
                toBech32: p,
                toOutputScript: function(e, t) {
                    var i;
                    t = t || h.bitcoin;
                    try {
                        i = A(e)
                    } catch (e) {}
                    if (i) {
                        if (i.version === t.pubKeyHash) return u.pubKeyHash.output.encode(i.hash);
                        if (i.version === t.scriptHash) return u.scriptHash.output.encode(i.hash)
                    } else {
                        try {
                            i = f(e)
                        } catch (e) {}
                        if (i) {
                            if (i.prefix !== t.bech32) throw new Error(e + " has an invalid prefix");
                            if (0 === i.version) {
                                if (20 === i.data.length) return u.witnessPubKeyHash.output.encode(i.data);
                                if (32 === i.data.length) return u.witnessScriptHash.output.encode(i.data)
                            }
                        }
                    }
                    throw new Error(e + " has no matching Script")
                }
            }
        },
        6546: function(e, t, i) {
            var r = i(931),
                n = i(369);

            function o(e, t) {
                if ("number" != typeof e) throw new Error("cannot write a non-number as a number");
                if (e < 0) throw new Error("specified a negative value for writing an unsigned value");
                if (e > t) throw new Error("RangeError: value out of range");
                if (Math.floor(e) !== e) throw new Error("value has a fractional component")
            }
            e.exports = {
                pushDataSize: r.encodingLength,
                readPushDataInt: r.decode,
                readUInt64LE: function(e, t) {
                    var i = e.readUInt32LE(t),
                        r = e.readUInt32LE(t + 4);
                    return o((r *= 4294967296) + i, 9007199254740991), r + i
                },
                readInt64LE: function(e, t) {
                    var i = e.readUInt32LE(t),
                        r = e.readInt32LE(t + 4);
                    return (r *= 4294967296) + i
                },
                readVarInt: function(e, t) {
                    return {
                        number: n.decode(e, t),
                        size: n.decode.bytes
                    }
                },
                varIntBuffer: n.encode,
                varIntSize: n.encodingLength,
                writePushDataInt: r.encode,
                writeUInt64LE: function(e, t, i) {
                    return o(t, 9007199254740991), e.writeInt32LE(-1 & t, i), e.writeUInt32LE(Math.floor(t / 4294967296), i + 4), i + 8
                },
                writeVarInt: function(e, t, i) {
                    return n.encode(t, e, i), n.encode.bytes
                }
            }
        },
        6547: function(e, t, i) {
            var r = i(21).Buffer,
                n = i(9516),
                o = i(5931),
                s = i(5574),
                u = i(6546),
                h = i(6053),
                a = i(139),
                c = i(5847),
                A = i(47),
                f = i(5582),
                I = i(369),
                p = i(9517);

            function g(e) {
                var t = e.length;
                return I.encodingLength(t) + t
            }

            function l(e = c.bitcoin) {
                this.version = 1, this.locktime = 0, this.ins = [], this.outs = [], this.network = e, h.isZcash(e) && (this.joinsplits = [], this.joinsplitPubkey = [], this.joinsplitSig = [], this.overwintered = 0, this.versionGroupId = 0, this.expiryHeight = 0, this.valueBalance = 0, this.vShieldedSpend = [], this.vShieldedOutput = [], this.bindingSig = 0), h.isDash(e) && (this.type = 0, this.extraPayload = r.alloc(0))
            }
            l.DEFAULT_SEQUENCE = 4294967295, l.SIGHASH_ALL = 1, l.SIGHASH_NONE = 2, l.SIGHASH_SINGLE = 3, l.SIGHASH_ANYONECANPAY = 128, l.SIGHASH_BITCOINCASHBIP143 = 64, l.ADVANCED_TRANSACTION_MARKER = 0, l.ADVANCED_TRANSACTION_FLAG = 1;
            var C = r.allocUnsafe(0),
                d = [],
                E = r.from("0000000000000000000000000000000000000000000000000000000000000000", "hex"),
                w = r.from("0000000000000000000000000000000000000000000000000000000000000001", "hex"),
                y = r.from("ffffffffffffffff", "hex"),
                S = {
                    script: C,
                    valueBuffer: y
                };
            l.ZCASH_OVERWINTER_VERSION = 3, l.ZCASH_SAPLING_VERSION = 4, l.ZCASH_JOINSPLITS_SUPPORT_VERSION = 2, l.ZCASH_NUM_JOINSPLITS_INPUTS = 2, l.ZCASH_NUM_JOINSPLITS_OUTPUTS = 2, l.ZCASH_NOTECIPHERTEXT_SIZE = 601, l.ZCASH_G1_PREFIX_MASK = 2, l.ZCASH_G2_PREFIX_MASK = 10, l.DASH_NORMAL = 0, l.DASH_PROVIDER_REGISTER = 1, l.DASH_PROVIDER_UPDATE_SERVICE = 2, l.DASH_PROVIDER_UPDATE_REGISTRAR = 3, l.DASH_PROVIDER_UPDATE_REVOKE = 4, l.DASH_COINBASE = 5, l.DASH_QUORUM_COMMITMENT = 6, l.fromBuffer = function(e, t = c.bitcoin, i) {
                var r = 0;

                function n(t) {
                    return r += t, e.slice(r - t, r)
                }

                function o() {
                    var t = e.readUInt8(r);
                    return r += 1, t
                }

                function s() {
                    var t = e.readUInt32LE(r);
                    return r += 4, t
                }

                function a() {
                    var t = u.readUInt64LE(e, r);
                    return r += 8, t
                }

                function A() {
                    var t = I.decode(e, r);
                    return r += I.decode.bytes, t
                }

                function f() {
                    return n(A())
                }

                function p() {
                    for (var e = A(), t = [], i = 0; i < e; i++) t.push(f());
                    return t
                }

                function g() {
                    var e = 1 & o();
                    return {
                        x: n(32),
                        yLsb: e
                    }
                }

                function C() {
                    var e;
                    return w.isSaplingCompatible() ? {
                        sA: n(48),
                        sB: n(96),
                        sC: n(48)
                    } : {
                        gA: g(),
                        gAPrime: g(),
                        gB: (e = 1 & o(), {
                            x: n(64),
                            yLsb: e
                        }),
                        gBPrime: g(),
                        gC: g(),
                        gCPrime: g(),
                        gK: g(),
                        gH: g()
                    }
                }

                function E() {
                    for (var e = a(), t = a(), i = n(32), r = [], o = 0; o < l.ZCASH_NUM_JOINSPLITS_INPUTS; o++) r.push(n(32));
                    var s = [];
                    for (o = 0; o < l.ZCASH_NUM_JOINSPLITS_OUTPUTS; o++) s.push(n(32));
                    var u = n(32),
                        h = n(32),
                        c = [];
                    for (o = 0; o < l.ZCASH_NUM_JOINSPLITS_INPUTS; o++) c.push(n(32));
                    var A = C(),
                        f = [];
                    for (o = 0; o < l.ZCASH_NUM_JOINSPLITS_OUTPUTS; o++) f.push(n(l.ZCASH_NOTECIPHERTEXT_SIZE));
                    return {
                        vpubOld: e,
                        vpubNew: t,
                        anchor: i,
                        nullifiers: r,
                        commitments: s,
                        ephemeralKey: u,
                        randomSeed: h,
                        macs: c,
                        zkproof: A,
                        ciphertexts: f
                    }
                }
                var w = new l(t);
                if (w.version = function() {
                        var t = e.readInt32LE(r);
                        return r += 4, t
                    }(), h.isZcash(t) && (w.overwintered = w.version >>> 31, w.version = 2147483647 & w.version, !t.consensusBranchId.hasOwnProperty(w.version))) throw new Error("Unsupported Zcash transaction");
                if (h.isDash(t) && (w.type = w.version >> 16, w.version = 65535 & w.version, 3 === w.version && (w.type < l.DASH_NORMAL || w.type > l.DASH_QUORUM_COMMITMENT))) throw new Error("Unsupported Dash transaction type");
                var y = e.readUInt8(r),
                    S = e.readUInt8(r + 1),
                    B = !1;
                y !== l.ADVANCED_TRANSACTION_MARKER || S !== l.ADVANCED_TRANSACTION_FLAG || h.isZcash(t) || (r += 2, B = !0), w.isOverwinterCompatible() && (w.versionGroupId = s());
                for (var v = A(), m = 0; m < v; ++m) w.ins.push({
                    hash: n(32),
                    index: s(),
                    script: f(),
                    sequence: s(),
                    witness: d
                });
                var Q = A();
                for (m = 0; m < Q; ++m) w.outs.push({
                    value: a(),
                    script: f()
                });
                if (B) {
                    for (m = 0; m < v; ++m) w.ins[m].witness = p();
                    if (!w.hasWitnesses()) throw new Error("Transaction has superfluous witness data")
                }
                if (w.locktime = s(), h.isZcash(t)) {
                    if (w.isOverwinterCompatible() && (w.expiryHeight = s()), w.isSaplingCompatible()) {
                        w.valueBalance = function() {
                            var t = u.readInt64LE(e, r);
                            return r += 8, t
                        }();
                        var b = A();
                        for (m = 0; m < b; ++m) w.vShieldedSpend.push({
                            cv: n(32),
                            anchor: n(32),
                            nullifier: n(32),
                            rk: n(32),
                            zkproof: C(),
                            spendAuthSig: n(64)
                        });
                        var H = A();
                        for (m = 0; m < H; ++m) w.vShieldedOutput.push({
                            cv: n(32),
                            cmu: n(32),
                            ephemeralKey: n(32),
                            encCiphertext: n(580),
                            outCiphertext: n(80),
                            zkproof: C()
                        })
                    }
                    if (w.supportsJoinSplits()) {
                        var P = A();
                        for (m = 0; m < P; ++m) w.joinsplits.push(E());
                        P > 0 && (w.joinsplitPubkey = n(32), w.joinsplitSig = n(64))
                    }
                    w.isSaplingCompatible() && w.vShieldedSpend.length + w.vShieldedOutput.length > 0 && (w.bindingSig = n(64))
                }
                if (w.isDashSpecialTransaction() && (w.extraPayload = f()), w.network = t, i) return w;
                if (r !== e.length) throw new Error("Transaction has unexpected data");
                return w
            }, l.fromHex = function(e, t) {
                return l.fromBuffer(r.from(e, "hex"), t)
            }, l.isCoinbaseHash = function(e) {
                A(f.Hash256bit, e);
                for (var t = 0; t < 32; ++t)
                    if (0 !== e[t]) return !1;
                return !0
            }, l.prototype.isSaplingCompatible = function() {
                return h.isZcash(this.network) && this.version >= l.ZCASH_SAPLING_VERSION
            }, l.prototype.isOverwinterCompatible = function() {
                return h.isZcash(this.network) && this.version >= l.ZCASH_OVERWINTER_VERSION
            }, l.prototype.supportsJoinSplits = function() {
                return h.isZcash(this.network) && this.version >= l.ZCASH_JOINSPLITS_SUPPORT_VERSION
            }, l.prototype.versionSupportsDashSpecialTransactions = function() {
                return h.isDash(this.network) && this.version >= 3
            }, l.prototype.isDashSpecialTransaction = function() {
                return this.versionSupportsDashSpecialTransactions() && this.type !== l.DASH_NORMAL
            }, l.prototype.isCoinbase = function() {
                return 1 === this.ins.length && l.isCoinbaseHash(this.ins[0].hash)
            }, l.prototype.addInput = function(e, t, i, r) {
                return A(f.tuple(f.Hash256bit, f.UInt32, f.maybe(f.UInt32), f.maybe(f.Buffer)), arguments), f.Null(i) && (i = l.DEFAULT_SEQUENCE), this.ins.push({
                    hash: e,
                    index: t,
                    script: r || C,
                    sequence: i,
                    witness: d
                }) - 1
            }, l.prototype.addOutput = function(e, t) {
                return A(f.tuple(f.Buffer, f.Satoshi), arguments), this.outs.push({
                    script: e,
                    value: t
                }) - 1
            }, l.prototype.hasWitnesses = function() {
                return this.ins.some((function(e) {
                    return 0 !== e.witness.length
                }))
            }, l.prototype.weight = function() {
                return 3 * this.__byteLength(!1) + this.__byteLength(!0)
            }, l.prototype.virtualSize = function() {
                return Math.ceil(this.weight() / 4)
            }, l.prototype.byteLength = function() {
                return this.__byteLength(!0)
            }, l.prototype.getShieldedSpendByteLength = function() {
                if (!this.isSaplingCompatible()) return 0;
                var e = 0;
                return e += I.encodingLength(this.vShieldedSpend.length), e += 384 * this.vShieldedSpend.length
            }, l.prototype.getShieldedOutputByteLength = function() {
                if (!this.isSaplingCompatible()) return 0;
                var e = 0;
                return e += I.encodingLength(this.vShieldedOutput.length), e += 948 * this.vShieldedOutput.length
            }, l.prototype.getJoinSplitByteLength = function() {
                if (!this.supportsJoinSplits()) return 0;
                var e = this.joinsplits.length,
                    t = 0;
                return t += u.varIntSize(e), e > 0 && (this.isSaplingCompatible() ? t += 1698 * e : t += 1802 * e, t += 32, t += 64), t
            }, l.prototype.zcashTransactionByteLength = function() {
                if (!h.isZcash(this.network)) throw new Error("zcashTransactionByteLength can only be called when using Zcash network");
                var e = 0;
                return e += 4, this.isOverwinterCompatible() && (e += 4), e += I.encodingLength(this.ins.length), e += this.ins.reduce((function(e, t) {
                    return e + 40 + g(t.script)
                }), 0), e += I.encodingLength(this.outs.length), e += this.outs.reduce((function(e, t) {
                    return e + 8 + g(t.script)
                }), 0), e += 4, this.isOverwinterCompatible() && (e += 4), this.isSaplingCompatible() && (e += 8, e += this.getShieldedSpendByteLength(), e += this.getShieldedOutputByteLength()), this.supportsJoinSplits() && (e += this.getJoinSplitByteLength()), this.isSaplingCompatible() && this.vShieldedSpend.length + this.vShieldedOutput.length > 0 && (e += 64), e
            }, l.prototype.__byteLength = function(e) {
                var t = e && this.hasWitnesses();
                return h.isZcash(this.network) ? this.zcashTransactionByteLength() : (t ? 10 : 8) + I.encodingLength(this.ins.length) + I.encodingLength(this.outs.length) + this.ins.reduce((function(e, t) {
                    return e + 40 + g(t.script)
                }), 0) + this.outs.reduce((function(e, t) {
                    return e + 8 + g(t.script)
                }), 0) + (this.isDashSpecialTransaction() ? g(this.extraPayload) : 0) + (t ? this.ins.reduce((function(e, t) {
                    return e + (i = t.witness, r = i.length, I.encodingLength(r) + i.reduce((function(e, t) {
                        return e + g(t)
                    }), 0));
                    var i, r
                }), 0) : 0)
            }, l.prototype.clone = function() {
                var e = new l(this.network);
                return e.version = this.version, e.locktime = this.locktime, e.network = this.network, h.isDash(this.network) && (e.type = this.type, e.extraPayload = this.extraPayload), this.isOverwinterCompatible() && (e.overwintered = this.overwintered, e.versionGroupId = this.versionGroupId, e.expiryHeight = this.expiryHeight), this.isSaplingCompatible() && (e.valueBalance = this.valueBalance), e.ins = this.ins.map((function(e) {
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
            }, l.prototype.getHeader = function() {
                var e = this.overwintered ? 1 : 0;
                return this.version | e << 31
            }, l.prototype.hashForSignature = function(e, t, i) {
                if (A(f.tuple(f.UInt32, f.Buffer, f.Number), arguments), e >= this.ins.length) return w;
                var n = s.compile(s.decompile(t).filter((function(e) {
                        return e !== a.OP_CODESEPARATOR
                    }))),
                    u = this.clone();
                if ((31 & i) === l.SIGHASH_NONE) u.outs = [], u.ins.forEach((function(t, i) {
                    i !== e && (t.sequence = 0)
                }));
                else if ((31 & i) === l.SIGHASH_SINGLE) {
                    if (e >= this.outs.length) return w;
                    u.outs.length = e + 1;
                    for (var h = 0; h < e; h++) u.outs[h] = S;
                    u.ins.forEach((function(t, i) {
                        i !== e && (t.sequence = 0)
                    }))
                }
                i & l.SIGHASH_ANYONECANPAY ? (u.ins = [u.ins[e]], u.ins[0].script = n) : (u.ins.forEach((function(e) {
                    e.script = C
                })), u.ins[e].script = n);
                var c = r.allocUnsafe(u.__byteLength(!1) + 4);
                return c.writeInt32LE(i, c.length - 4), u.__toBuffer(c, 0, !1), o.hash256(c)
            }, l.prototype.getBlake2bHash = function(e, t) {
                var i = r.allocUnsafe(32);
                return p(i.length, null, null, r.from(t)).update(e).digest(i)
            }, l.prototype.getPrevoutHash = function(e) {
                if (!(e & l.SIGHASH_ANYONECANPAY)) {
                    var t = new n(36 * this.ins.length);
                    return this.ins.forEach((function(e) {
                        t.writeSlice(e.hash), t.writeUInt32(e.index)
                    })), h.isZcash(this.network) ? this.getBlake2bHash(t.getBuffer(), "ZcashPrevoutHash") : o.hash256(t.getBuffer())
                }
                return E
            }, l.prototype.getSequenceHash = function(e) {
                if (!(e & l.SIGHASH_ANYONECANPAY) && (31 & e) !== l.SIGHASH_SINGLE && (31 & e) !== l.SIGHASH_NONE) {
                    var t = new n(4 * this.ins.length);
                    return this.ins.forEach((function(e) {
                        t.writeUInt32(e.sequence)
                    })), h.isZcash(this.network) ? this.getBlake2bHash(t.getBuffer(), "ZcashSequencHash") : o.hash256(t.getBuffer())
                }
                return E
            }, l.prototype.getOutputsHash = function(e, t) {
                var i;
                if ((31 & e) !== l.SIGHASH_SINGLE && (31 & e) !== l.SIGHASH_NONE) {
                    var r = this.outs.reduce((function(e, t) {
                        return e + 8 + g(t.script)
                    }), 0);
                    return i = new n(r), this.outs.forEach((function(e) {
                        i.writeUInt64(e.value), i.writeVarSlice(e.script)
                    })), h.isZcash(this.network) ? this.getBlake2bHash(i.getBuffer(), "ZcashOutputsHash") : o.hash256(i.getBuffer())
                }
                if ((31 & e) === l.SIGHASH_SINGLE && t < this.outs.length) {
                    var s = this.outs[t];
                    return (i = new n(8 + g(s.script))).writeUInt64(s.value), i.writeVarSlice(s.script), h.isZcash(this.network) ? this.getBlake2bHash(i.getBuffer(), "ZcashOutputsHash") : o.hash256(i.getBuffer())
                }
                return E
            }, l.prototype.hashForZcashSignature = function(e, t, i, o) {
                if (A(f.tuple(f.UInt32, f.Buffer, f.Satoshi, f.UInt32), arguments), !h.isZcash(this.network)) throw new Error("hashForZcashSignature can only be called when using Zcash network");
                if (this.joinsplits.length > 0) throw new Error("Hash signature for Zcash protected transactions is not supported");
                if (e >= this.ins.length && e !== y) throw new Error("Input index is out of range");
                if (this.isOverwinterCompatible()) {
                    var s, u = this.getPrevoutHash(o),
                        a = this.getSequenceHash(o),
                        c = this.getOutputsHash(o, e),
                        I = E,
                        p = E,
                        l = E,
                        C = 0;
                    if (C += 20, C += 128, e !== y && (C += 8, C += 8, C += 32, C += g(t)), this.isSaplingCompatible() && (C += 64, C += 8), (s = new n(C)).writeInt32(this.getHeader()), s.writeUInt32(this.versionGroupId), s.writeSlice(u), s.writeSlice(a), s.writeSlice(c), s.writeSlice(I), this.isSaplingCompatible() && (s.writeSlice(p), s.writeSlice(l)), s.writeUInt32(this.locktime), s.writeUInt32(this.expiryHeight), this.isSaplingCompatible() && s.writeUInt64(this.valueBalance), s.writeUInt32(o), e !== y) {
                        var d = this.ins[e];
                        s.writeSlice(d.hash), s.writeUInt32(d.index), s.writeVarSlice(t), s.writeUInt64(i), s.writeUInt32(d.sequence)
                    }
                    var w = r.alloc(16),
                        S = "ZcashSigHash";
                    return w.write(S), w.writeUInt32LE(this.network.consensusBranchId[this.version], S.length), this.getBlake2bHash(s.getBuffer(), w)
                }
            }, l.prototype.hashForWitnessV0 = function(e, t, i, r) {
                A(f.tuple(f.UInt32, f.Buffer, f.Satoshi, f.UInt32), arguments);
                var s = this.getPrevoutHash(r),
                    u = this.getSequenceHash(r),
                    h = this.getOutputsHash(r, e),
                    a = new n(156 + g(t)),
                    c = this.ins[e];
                return a.writeUInt32(this.version), a.writeSlice(s), a.writeSlice(u), a.writeSlice(c.hash), a.writeUInt32(c.index), a.writeVarSlice(t), a.writeUInt64(i), a.writeUInt32(c.sequence), a.writeSlice(h), a.writeUInt32(this.locktime), a.writeUInt32(r), o.hash256(a.getBuffer())
            }, l.prototype.hashForCashSignature = function(e, t, i, r) {
                if (A(f.tuple(f.UInt32, f.Buffer, f.Number, f.maybe(f.UInt53)), arguments), r & l.SIGHASH_BITCOINCASHBIP143) {
                    if (f.Null(i)) throw new Error("Bitcoin Cash sighash requires value of input to be signed.");
                    return this.hashForWitnessV0(e, t, i, r)
                }
                return this.hashForSignature(e, t, r)
            }, l.prototype.hashForGoldSignature = function(e, t, i, r, n) {
                A(f.tuple(f.UInt32, f.Buffer, f.Number, f.maybe(f.UInt53)), arguments);
                var o = r,
                    s = (r & l.SIGHASH_BITCOINCASHBIP143) > 0;
                if (s && (o |= this.network.forkId << 8), n || s) {
                    if (f.Null(i)) throw new Error("Bitcoin Cash sighash requires value of input to be signed.");
                    return this.hashForWitnessV0(e, t, i, o)
                }
                return this.hashForSignature(e, t, o)
            }, l.prototype.getHash = function() {
                return o.hash256(this.__toBuffer(void 0, void 0, !1))
            }, l.prototype.getId = function() {
                return this.getHash().reverse().toString("hex")
            }, l.prototype.toBuffer = function(e, t) {
                return this.__toBuffer(e, t, !0)
            }, l.prototype.__toBuffer = function(e, t, i) {
                e || (e = r.allocUnsafe(this.__byteLength(i)));
                var n = t || 0;

                function o(t) {
                    n += t.copy(e, n)
                }

                function s(t) {
                    n = e.writeUInt8(t, n)
                }

                function h(t) {
                    n = e.writeUInt16LE(t, n)
                }

                function a(t) {
                    n = e.writeUInt32LE(t, n)
                }

                function c(t) {
                    n = e.writeInt32LE(t, n)
                }

                function A(t) {
                    n = u.writeUInt64LE(e, t, n)
                }

                function f(t) {
                    I.encode(t, e, n), n += I.encode.bytes
                }

                function p(e) {
                    f(e.length), o(e)
                }

                function g(e) {
                    s(l.ZCASH_G1_PREFIX_MASK | e.yLsb), o(e.x)
                }
                if (this.isOverwinterCompatible()) {
                    var C = this.overwintered ? 1 : 0;
                    c(this.version | C << 31), a(this.versionGroupId)
                } else this.isDashSpecialTransaction() ? (h(this.version), h(this.type)) : c(this.version);
                var d = i && this.hasWitnesses();
                return d && (s(l.ADVANCED_TRANSACTION_MARKER), s(l.ADVANCED_TRANSACTION_FLAG)), f(this.ins.length), this.ins.forEach((function(e) {
                    o(e.hash), a(e.index), p(e.script), a(e.sequence)
                })), f(this.outs.length), this.outs.forEach((function(e) {
                    e.valueBuffer ? o(e.valueBuffer) : A(e.value), p(e.script)
                })), d && this.ins.forEach((function(e) {
                    var t;
                    f((t = e.witness).length), t.forEach(p)
                })), a(this.locktime), this.isOverwinterCompatible() && a(this.expiryHeight), this.isSaplingCompatible() && (A(this.valueBalance), f(this.vShieldedSpend.length), this.vShieldedSpend.forEach((function(e) {
                    o(e.cv), o(e.anchor), o(e.nullifier), o(e.rk), o(e.zkproof.sA), o(e.zkproof.sB), o(e.zkproof.sC), o(e.spendAuthSig)
                })), f(this.vShieldedOutput.length), this.vShieldedOutput.forEach((function(e) {
                    o(e.cv), o(e.cmu), o(e.ephemeralKey), o(e.encCiphertext), o(e.outCiphertext), o(e.zkproof.sA), o(e.zkproof.sB), o(e.zkproof.sC)
                }))), this.supportsJoinSplits() && (f(this.joinsplits.length), this.joinsplits.forEach((function(e) {
                    var t;
                    A(e.vpubOld), A(e.vpubNew), o(e.anchor), e.nullifiers.forEach((function(e) {
                        o(e)
                    })), e.commitments.forEach((function(e) {
                        o(e)
                    })), o(e.ephemeralKey), o(e.randomSeed), e.macs.forEach((function(e) {
                        o(e)
                    })), this.isSaplingCompatible() ? (o(e.zkproof.sA), o(e.zkproof.sB), o(e.zkproof.sC)) : (g(e.zkproof.gA), g(e.zkproof.gAPrime), t = e.zkproof.gB, s(l.ZCASH_G2_PREFIX_MASK | t.yLsb), o(t.x), g(e.zkproof.gBPrime), g(e.zkproof.gC), g(e.zkproof.gCPrime), g(e.zkproof.gK), g(e.zkproof.gH)), e.ciphertexts.forEach((function(e) {
                        o(e)
                    }))
                }), this), this.joinsplits.length > 0 && (o(this.joinsplitPubkey), o(this.joinsplitSig))), this.isSaplingCompatible() && this.vShieldedSpend.length + this.vShieldedOutput.length > 0 && o(this.bindingSig), this.isDashSpecialTransaction() && p(this.extraPayload), void 0 !== t ? e.slice(t, n) : e.slice(0, n)
            }, l.prototype.toHex = function() {
                return this.toBuffer().toString("hex")
            }, l.prototype.setInputScript = function(e, t) {
                A(f.tuple(f.Number, f.Buffer), arguments), this.ins[e].script = t
            }, l.prototype.setWitness = function(e, t) {
                A(f.tuple(f.Number, [f.Buffer]), arguments), this.ins[e].witness = t
            }, e.exports = l
        },
        7269: function(e, t, i) {
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
                    for (var s = 0, u = 0; u < r; ++u) s |= e[u] << 8 * u;
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
        7270: function(e, t, i) {
            var r = i(5574),
                n = i(5582),
                o = i(47),
                s = i(139),
                u = s.OP_RESERVED;

            function h(e, t) {
                var i = r.decompile(e);
                if (i.length < 4) return !1;
                if (i[i.length - 1] !== s.OP_CHECKMULTISIG) return !1;
                if (!n.Number(i[0])) return !1;
                if (!n.Number(i[i.length - 2])) return !1;
                var o = i[0] - u,
                    h = i[i.length - 2] - u;
                return !(o <= 0) && (!(h > 16) && (!(o > h) && (h === i.length - 3 && (!!t || i.slice(1, -2).every(r.isCanonicalPubKey)))))
            }
            h.toJSON = function() {
                return "multi-sig output"
            }, e.exports = {
                check: h,
                decode: function(e, t) {
                    var i = r.decompile(e);
                    return o(h, i, t), {
                        m: i[0] - u,
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
                    return r.compile([].concat(u + e, t, u + i, s.OP_CHECKMULTISIG))
                }
            }
        },
        7271: function(e, t, i) {
            var r = i(5574),
                n = i(5582),
                o = i(47),
                s = i(139);

            function u(e) {
                var t = r.compile(e);
                return 22 === t.length && t[0] === s.OP_0 && 20 === t[1]
            }
            u.toJSON = function() {
                return "Witness pubKeyHash output"
            }, e.exports = {
                check: u,
                decode: function(e) {
                    return o(u, e), e.slice(2)
                },
                encode: function(e) {
                    return o(n.Hash160bit, e), r.compile([s.OP_0, e])
                }
            }
        },
        7272: function(e, t, i) {
            var r = i(5574),
                n = i(5582),
                o = i(47),
                s = i(139);

            function u(e) {
                var t = r.compile(e);
                return 34 === t.length && t[0] === s.OP_0 && 32 === t[1]
            }
            u.toJSON = function() {
                return "Witness scriptHash output"
            }, e.exports = {
                check: u,
                decode: function(e) {
                    return o(u, e), e.slice(2)
                },
                encode: function(e) {
                    return o(n.Hash256bit, e), r.compile([s.OP_0, e])
                }
            }
        },
        7273: function(e, t, i) {
            var r, n = i(47),
                ECSignature = i(6203),
                o = i(5582),
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
        9496: function(e, t, i) {
            var r = i(5574),
                n = i(6540);
            for (var o in n) r[o] = n[o];
            e.exports = {
                bitgo: i(9512),
                bufferutils: i(6546),
                Block: i(9515),
                ECPair: i(6202),
                ECSignature: i(6203),
                HDNode: i(9520),
                Transaction: i(6547),
                TransactionBuilder: i(9521),
                address: i(6545),
                coins: i(6053),
                crypto: i(5931),
                networks: i(5847),
                opcodes: i(139),
                script: r
            }
        },
        9497: function(e, t, i) {
            var r = i(21).Buffer,
                n = i(5574),
                o = i(7270),
                s = i(47),
                u = i(139);

            function h(e) {
                return e === u.OP_0 || n.isCanonicalSignature(e)
            }

            function a(e, t) {
                var i = n.decompile(e);
                return !(i.length < 2) && (i[0] === u.OP_0 && (t ? i.slice(1).every(h) : i.slice(1).every(n.isCanonicalSignature)))
            }
            a.toJSON = function() {
                return "multisig input"
            };
            var c = r.allocUnsafe(0);

            function A(e, t) {
                if (s([h], e), t) {
                    var i = o.decode(t);
                    if (e.length < i.m) throw new TypeError("Not enough signatures provided");
                    if (e.length > i.pubKeys.length) throw new TypeError("Too many signatures provided")
                }
                return [].concat(c, e.map((function(e) {
                    return e === u.OP_0 ? c : e
                })))
            }

            function f(e, t) {
                return s(a, e, t), e.slice(1)
            }
            e.exports = {
                check: a,
                decode: function(e, t) {
                    return f(n.decompile(e), t)
                },
                decodeStack: f,
                encode: function(e, t) {
                    return n.compile(A(e, t))
                },
                encodeStack: A
            }
        },
        9498: function(e, t, i) {
            var r = i(5574),
                n = i(5582),
                o = i(47),
                s = i(139);

            function u(e) {
                var t = r.compile(e);
                return t.length > 1 && t[0] === s.OP_RETURN
            }
            u.toJSON = function() {
                return "null data output"
            }, e.exports = {
                output: {
                    check: u,
                    decode: function(e) {
                        o(u, e);
                        var t = r.decompile(e);
                        return t.shift(), 1 === t.length ? t[0] : t
                    },
                    encode: function(e) {
                        return o(o.oneOf(n.Buffer, n.Array), e), r.compile([s.OP_RETURN].concat(e))
                    }
                }
            }
        },
        9499: function(e, t, i) {
            var r = i(5574),
                n = i(47);

            function o(e) {
                var t = r.decompile(e);
                return 1 === t.length && r.isCanonicalSignature(t[0])
            }

            function s(e) {
                return n(r.isCanonicalSignature, e), [e]
            }

            function u(e) {
                return n(o, e), e[0]
            }
            o.toJSON = function() {
                return "pubKey input"
            }, e.exports = {
                check: o,
                decode: function(e) {
                    return u(r.decompile(e))
                },
                decodeStack: u,
                encode: function(e) {
                    return r.compile(s(e))
                },
                encodeStack: s
            }
        },
        9500: function(e, t, i) {
            var r = i(5574),
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
        9501: function(e, t, i) {
            var r = i(5574),
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

            function u(e) {
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
                    return u(r.decompile(e))
                },
                decodeStack: u,
                encode: function(e, t) {
                    return r.compile(s(e, t))
                },
                encodeStack: s
            }
        },
        9502: function(e, t, i) {
            var r = i(5574),
                n = i(5582),
                o = i(47),
                s = i(139);

            function u(e) {
                var t = r.compile(e);
                return 25 === t.length && t[0] === s.OP_DUP && t[1] === s.OP_HASH160 && 20 === t[2] && t[23] === s.OP_EQUALVERIFY && t[24] === s.OP_CHECKSIG
            }
            u.toJSON = function() {
                return "pubKeyHash output"
            }, e.exports = {
                check: u,
                decode: function(e) {
                    return o(u, e), e.slice(3, 23)
                },
                encode: function(e) {
                    return o(n.Hash160bit, e), r.compile([s.OP_DUP, s.OP_HASH160, e, s.OP_EQUALVERIFY, s.OP_CHECKSIG])
                }
            }
        },
        9503: function(e, t, i) {
            e.exports = {
                input: i(9504),
                output: i(9505)
            }
        },
        9504: function(e, t, i) {
            var r = i(21).Buffer,
                n = i(5574),
                o = i(47),
                s = i(6541),
                u = i(6542),
                h = i(6543),
                a = i(7271),
                c = i(7272);

            function A(e, t) {
                var i = n.decompile(e);
                if (i.length < 1) return !1;
                var o = i[i.length - 1];
                if (!r.isBuffer(o)) return !1;
                var A = n.decompile(n.compile(i.slice(0, -1))),
                    f = n.decompile(o);
                return 0 !== f.length && (!!n.isPushOnly(A) && (1 === i.length ? c.check(f) || a.check(f) : !(!h.input.check(A) || !h.output.check(f)) || (!(!s.input.check(A, t) || !s.output.check(f)) || !(!u.input.check(A) || !u.output.check(f)))))
            }

            function f(e, t) {
                var i = n.compile(t);
                return [].concat(e, i)
            }

            function I(e) {
                return o(A, e), {
                    redeemScriptStack: e.slice(0, -1),
                    redeemScript: e[e.length - 1]
                }
            }
            A.toJSON = function() {
                return "scriptHash input"
            }, e.exports = {
                check: A,
                decode: function(e) {
                    var t = I(n.decompile(e));
                    return t.redeemScriptSig = n.compile(t.redeemScriptStack), delete t.redeemScriptStack, t
                },
                decodeStack: I,
                encode: function(e, t) {
                    var i = n.decompile(e);
                    return n.compile(f(i, t))
                },
                encodeStack: f
            }
        },
        9505: function(e, t, i) {
            var r = i(5574),
                n = i(5582),
                o = i(47),
                s = i(139);

            function u(e) {
                var t = r.compile(e);
                return 23 === t.length && t[0] === s.OP_HASH160 && 20 === t[1] && t[22] === s.OP_EQUAL
            }
            u.toJSON = function() {
                return "scriptHash output"
            }, e.exports = {
                check: u,
                decode: function(e) {
                    return o(u, e), e.slice(2, 22)
                },
                encode: function(e) {
                    return o(n.Hash160bit, e), r.compile([s.OP_HASH160, e, s.OP_EQUAL])
                }
            }
        },
        9506: function(e, t, i) {
            e.exports = {
                input: i(9507),
                output: i(7271)
            }
        },
        9507: function(e, t, i) {
            var r = i(5574),
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
        9508: function(e, t, i) {
            e.exports = {
                input: i(9509),
                output: i(7272)
            }
        },
        9509: function(e, t, i) {
            var r = i(5574),
                n = i(5582),
                o = i(47),
                s = i(6541),
                u = i(6542),
                h = i(6543);

            function a(e, t) {
                if (o(n.Array, e), e.length < 1) return !1;
                var i = e[e.length - 1];
                if (!Buffer.isBuffer(i)) return !1;
                var a = r.decompile(i);
                if (0 === a.length) return !1;
                var c = r.compile(e.slice(0, -1));
                return !(!h.input.check(c) || !h.output.check(a)) || (!(!s.input.check(c, t) || !s.output.check(a)) || !(!u.input.check(c) || !u.output.check(a)))
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
        9510: function(e, t, i) {
            e.exports = {
                output: i(9511)
            }
        },
        9511: function(e, t, i) {
            var r = i(21).Buffer,
                n = i(5574),
                o = i(5582),
                s = i(47),
                u = i(139),
                h = r.from("aa21a9ed", "hex");

            function a(e) {
                var t = n.compile(e);
                return t.length > 37 && t[0] === u.OP_RETURN && 36 === t[1] && t.slice(2, 6).equals(h)
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
                    return h.copy(t, 0), e.copy(t, 4), n.compile([u.OP_RETURN, t])
                }
            }
        },
        9512: function(e, t, i) {
            e.exports = {
                keyutil: i(6544)
            }
        },
        9513: function(e, t, i) {
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

            function u(e, t, i, r) {
                let n = 0,
                    o = 0,
                    s = (1 << i) - 1,
                    u = [];
                for (let r = 0; r < e.length; ++r)
                    for (n = n << t | e[r], o += t; o >= i;) o -= i, u.push(n >> o & s);
                if (r) o > 0 && u.push(n << i - o & s);
                else {
                    if (o >= t) throw new Error("Excess padding");
                    if (n << i - o & s) throw new Error("Non-zero padding")
                }
                return u
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
                    let u = e.slice(0, r),
                        h = e.slice(r + 1);
                    if (h.length < 6) throw new Error("Data too short");
                    let a = s(u),
                        c = [];
                    for (let e = 0; e < h.length; ++e) {
                        let t = h.charAt(e),
                            i = n[t];
                        if (void 0 === i) throw new Error("Unknown character " + t);
                        a = o(a) ^ i, e + 6 >= h.length || c.push(i)
                    }
                    if (1 !== a) throw new Error("Invalid checksum for " + e);
                    return {
                        prefix: u,
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
                    return u(e, 8, 5, !0)
                },
                fromWords: function(e) {
                    return u(e, 5, 8, !1)
                }
            }
        },
        9514: function(e, t, i) {
            var r = i(21).Buffer,
                n = i(320),
                o = i(47),
                s = i(5582),
                BigInteger = i(109),
                ECSignature = i(6203),
                u = r.alloc(1, 0),
                h = r.alloc(1, 1),
                a = i(280).getCurveByName("secp256k1");

            function c(e, t, i) {
                o(s.tuple(s.Hash256bit, s.Buffer256bit, s.Function), arguments);
                var c = r.alloc(32, 0),
                    A = r.alloc(32, 1);
                c = n("sha256", c).update(A).update(u).update(t).update(e).digest(), A = n("sha256", c).update(A).digest(), c = n("sha256", c).update(A).update(h).update(t).update(e).digest(), A = n("sha256", c).update(A).digest(), A = n("sha256", c).update(A).digest();
                for (var f = BigInteger.fromBuffer(A); f.signum() <= 0 || f.compareTo(a.n) >= 0 || !i(f);) c = n("sha256", c).update(A).update(u).digest(), A = n("sha256", c).update(A).digest(), A = n("sha256", c).update(A).digest(), f = BigInteger.fromBuffer(A);
                return f
            }
            var A = a.n.shiftRight(1);
            e.exports = {
                deterministicGenerateK: c,
                sign: function(e, t) {
                    o(s.tuple(s.Hash256bit, s.BigInt), arguments);
                    var i, r, n = t.toBuffer(32),
                        u = BigInteger.fromBuffer(e),
                        h = a.n,
                        f = a.G;
                    return c(e, n, (function(e) {
                        var n = f.multiply(e);
                        return !a.isInfinity(n) && (0 !== (i = n.affineX.mod(h)).signum() && 0 !== (r = e.modInverse(h).multiply(u.add(t.multiply(i))).mod(h)).signum())
                    })), r.compareTo(A) > 0 && (r = h.subtract(r)), new ECSignature(i, r)
                },
                verify: function(e, t, i) {
                    o(s.tuple(s.Hash256bit, s.ECSignature, s.ECPoint), arguments);
                    var r = a.n,
                        n = a.G,
                        u = t.r,
                        h = t.s;
                    if (u.signum() <= 0 || u.compareTo(r) >= 0) return !1;
                    if (h.signum() <= 0 || h.compareTo(r) >= 0) return !1;
                    var c = BigInteger.fromBuffer(e),
                        A = h.modInverse(r),
                        f = c.multiply(A).mod(r),
                        I = u.multiply(A).mod(r),
                        p = n.multiplyTwo(f, i, I);
                    if (a.isInfinity(p)) return !1;
                    var g = p.affineX,
                        l = g.mod(r);
                    return l.equals(u)
                },
                __curve: a
            }
        },
        9515: function(e, t, i) {
            var r = i(21).Buffer,
                n = i(5931),
                o = i(1391),
                s = i(47),
                u = i(5582),
                h = i(369),
                a = i(5847),
                c = i(6053),
                A = i(6547);

            function Block(e) {
                s(u.maybe(u.Network), e), e = e || a.bitcoin, this.version = 1, this.prevHash = null, this.merkleRoot = null, this.timestamp = 0, this.bits = 0, this.nonce = 0, this.network = e, c.isZcash(e) && (this.finalSaplingRoot = null, this.solutionSize = 0, this.solution = null)
            }
            Block.HEADER_BYTE_SIZE = 80, Block.ZCASH_HEADER_BYTE_SIZE = 1487, Block.fromBuffer = function(e, t) {
                if (e.length < 80) throw new Error("Buffer too small (< 80 bytes)");
                t = t || a.bitcoin;
                var i = 0;

                function r(t) {
                    return i += t, e.slice(i - t, i)
                }

                function n() {
                    var t = e.readUInt32LE(i);
                    return i += 4, t
                }

                function o() {
                    var t = h.decode(e, i);
                    return i += h.decode.bytes, t
                }
                var s = new Block(t);
                if (s.version = function() {
                        var t = e.readInt32LE(i);
                        return i += 4, t
                    }(), s.prevHash = r(32), s.merkleRoot = r(32), c.isZcash(t) && (s.finalSaplingRoot = r(32)), s.timestamp = n(), s.bits = n(), c.isZcash(t) ? (s.nonce = r(32), s.solutionSize = o(), s.solution = r(1344)) : s.nonce = n(), 80 === e.length) return s;

                function u() {
                    var r = A.fromBuffer(e.slice(i), t, !0);
                    return i += r.byteLength(), r
                }
                var f = o();
                s.transactions = [];
                for (var I = 0; I < f; ++I) {
                    var p = u();
                    s.transactions.push(p)
                }
                return s
            }, Block.prototype.byteLength = function(e) {
                return c.isZcash(this.network) ? e ? Block.ZCASH_HEADER_BYTE_SIZE : Block.ZCASH_HEADER_BYTE_SIZE + h.encodingLength(this.transactions.length) + this.transactions.reduce((function(e, t) {
                    return e + t.byteLength()
                }), 0) : e || !this.transactions ? Block.HEADER_BYTE_SIZE : Block.HEADER_BYTE_SIZE + h.encodingLength(this.transactions.length) + this.transactions.reduce((function(e, t) {
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
                var t, i = r.allocUnsafe(this.byteLength(e)),
                    n = 0;

                function o(e) {
                    e.copy(i, n), n += e.length
                }

                function s(e) {
                    i.writeUInt32LE(e, n), n += 4
                }
                return t = this.version, i.writeInt32LE(t, n), n += 4, o(this.prevHash), o(this.merkleRoot), c.isZcash(this.network) && o(this.finalSaplingRoot), s(this.timestamp), s(this.bits), c.isZcash(this.network) ? (o(this.nonce), h.encode(this.solutionSize, i, n), n += h.encode.bytes, o(this.solution)) : s(this.nonce), e || !this.transactions || (h.encode(this.transactions.length, i, n), n += h.encode.bytes, this.transactions.forEach((function(e) {
                    var t = e.byteLength();
                    e.toBuffer(i, n), n += t
                }))), i
            }, Block.prototype.toHex = function(e) {
                return this.toBuffer(e).toString("hex")
            }, Block.calculateTarget = function(e) {
                var t = ((4278190080 & e) >> 24) - 3,
                    i = 8388607 & e,
                    n = r.alloc(32, 0);
                return t < 0 ? (i >>= 8 * Math.abs(t), n.writeUInt32BE(i, 28)) : t > 28 ? (i <<= 8 * (t - 28), n.writeUInt32BE(i, 0)) : n.writeUInt32BE(i, 28 - t), n
            }, Block.calculateMerkleRoot = function(e) {
                if (s([{
                        getHash: u.Function
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
        9516: function(e, t, i) {
            var r = i(21).Buffer,
                n = i(6546),
                o = i(369);

            function s(e) {
                this.buffer = r.allocUnsafe(e), this.offset = 0
            }
            s.prototype.getBuffer = function() {
                return this.buffer
            }, s.prototype.writeSlice = function(e) {
                this.offset += e.copy(this.buffer, this.offset)
            }, s.prototype.writeInt32 = function(e) {
                this.offset = this.buffer.writeInt32LE(e, this.offset)
            }, s.prototype.writeUInt32 = function(e) {
                this.offset = this.buffer.writeUInt32LE(e, this.offset)
            }, s.prototype.writeUInt64 = function(e) {
                this.offset = n.writeUInt64LE(this.buffer, e, this.offset)
            }, s.prototype.writeVarInt = function(e) {
                o.encode(e, this.buffer, this.offset), this.offset += o.encode.bytes
            }, s.prototype.writeVarSlice = function(e) {
                this.writeVarInt(e.length), this.writeSlice(e)
            }, e.exports = s
        },
        9517: function(e, t, i) {
            var r = i(5781),
                n = i(9518);

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

            function u(e, t) {
                return e[t] ^ e[t + 1] << 8 ^ e[t + 2] << 16 ^ e[t + 3] << 24
            }

            function h(e, t, i, r, n, u) {
                var h = f[n],
                    a = f[n + 1],
                    c = f[u],
                    I = f[u + 1];
                o(A, e, t), s(A, e, h, a);
                var p = A[r] ^ A[e],
                    g = A[r + 1] ^ A[e + 1];
                A[r] = g, A[r + 1] = p, o(A, i, r), p = A[t] ^ A[i], g = A[t + 1] ^ A[i + 1], A[t] = p >>> 24 ^ g << 8, A[t + 1] = g >>> 24 ^ p << 8, o(A, e, t), s(A, e, c, I), p = A[r] ^ A[e], g = A[r + 1] ^ A[e + 1], A[r] = p >>> 16 ^ g << 16, A[r + 1] = g >>> 16 ^ p << 16, o(A, i, r), p = A[t] ^ A[i], g = A[t + 1] ^ A[i + 1], A[t] = g >>> 31 ^ p << 1, A[t + 1] = p >>> 31 ^ g << 1
            }
            var a = new Uint32Array([4089235720, 1779033703, 2227873595, 3144134277, 4271175723, 1013904242, 1595750129, 2773480762, 2917565137, 1359893119, 725511199, 2600822924, 4215389547, 528734635, 327033209, 1541459225]),
                c = new Uint8Array([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 14, 10, 4, 8, 9, 15, 13, 6, 1, 12, 0, 2, 11, 7, 5, 3, 11, 8, 12, 0, 5, 2, 15, 13, 10, 14, 3, 6, 7, 1, 9, 4, 7, 9, 3, 1, 13, 12, 11, 14, 2, 6, 5, 10, 4, 0, 15, 8, 9, 0, 5, 7, 2, 4, 10, 15, 14, 1, 11, 12, 6, 8, 3, 13, 2, 12, 6, 10, 0, 11, 8, 3, 4, 13, 7, 5, 15, 14, 1, 9, 12, 5, 1, 15, 14, 13, 4, 10, 0, 7, 6, 3, 9, 2, 8, 11, 13, 11, 7, 14, 12, 1, 3, 9, 5, 0, 15, 4, 8, 6, 2, 10, 6, 15, 14, 9, 11, 3, 0, 8, 12, 2, 13, 7, 1, 4, 10, 5, 10, 2, 8, 4, 7, 6, 1, 5, 15, 11, 9, 14, 3, 12, 13, 0, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 14, 10, 4, 8, 9, 15, 13, 6, 1, 12, 0, 2, 11, 7, 5, 3].map((function(e) {
                    return 2 * e
                }))),
                A = new Uint32Array(32),
                f = new Uint32Array(32);

            function I(e, t) {
                var i = 0;
                for (i = 0; i < 16; i++) A[i] = e.h[i], A[i + 16] = a[i];
                for (A[24] = A[24] ^ e.t, A[25] = A[25] ^ e.t / 4294967296, t && (A[28] = ~A[28], A[29] = ~A[29]), i = 0; i < 32; i++) f[i] = u(e.b, 4 * i);
                for (i = 0; i < 12; i++) h(0, 8, 16, 24, c[16 * i + 0], c[16 * i + 1]), h(2, 10, 18, 26, c[16 * i + 2], c[16 * i + 3]), h(4, 12, 20, 28, c[16 * i + 4], c[16 * i + 5]), h(6, 14, 22, 30, c[16 * i + 6], c[16 * i + 7]), h(0, 10, 20, 30, c[16 * i + 8], c[16 * i + 9]), h(2, 12, 22, 24, c[16 * i + 10], c[16 * i + 11]), h(4, 14, 16, 26, c[16 * i + 12], c[16 * i + 13]), h(6, 8, 18, 28, c[16 * i + 14], c[16 * i + 15]);
                for (i = 0; i < 16; i++) e.h[i] = e.h[i] ^ A[i] ^ A[i + 16]
            }
            var p = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);

            function g(e, t, i, r) {
                p.fill(0), this.b = new Uint8Array(128), this.h = new Uint32Array(16), this.t = 0, this.c = 0, this.outlen = e, p[0] = e, t && (p[1] = t.length), p[2] = 1, p[3] = 1, i && p.set(i, 32), r && p.set(r, 48);
                for (var n = 0; n < 16; n++) this.h[n] = a[n] ^ u(p, 4 * n);
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
                return !0 !== o && (r(e >= E, "outlen must be at least " + E + ", was given " + e), r(e <= w, "outlen must be at most " + w + ", was given " + e), null != t && r(t.length >= y, "key must be at least " + y + ", was given " + t.length), null != t && r(t.length <= S, "key must be at most " + S + ", was given " + t.length), null != i && r(i.length === B, "salt must be exactly " + B + ", was given " + i.length), null != n && r(n.length === v, "personal must be exactly " + v + ", was given " + n.length)), new d(e, t, i, n)
            }, e.exports.ready = function(e) {
                n.ready((function() {
                    e()
                }))
            }, e.exports.WASM_SUPPORTED = n.SUPPORTED, e.exports.WASM_LOADED = !1;
            var E = e.exports.BYTES_MIN = 16,
                w = e.exports.BYTES_MAX = 64,
                y = (e.exports.BYTES = 32, e.exports.KEYBYTES_MIN = 16),
                S = e.exports.KEYBYTES_MAX = 64,
                B = (e.exports.KEYBYTES = 32, e.exports.SALTBYTES = 16),
                v = e.exports.PERSONALBYTES = 16;
            n.ready((function(t) {
                t || (e.exports.WASM_LOADED = !0, d = n)
            }))
        },
        9518: function(e, t, i) {
            var r = i(5781),
                n = i(9519)(),
                o = 64,
                s = [];
            e.exports = I;
            var u = e.exports.BYTES_MIN = 16,
                h = e.exports.BYTES_MAX = 64,
                a = (e.exports.BYTES = 32, e.exports.KEYBYTES_MIN = 16),
                c = e.exports.KEYBYTES_MAX = 64,
                A = (e.exports.KEYBYTES = 32, e.exports.SALTBYTES = 16),
                f = e.exports.PERSONALBYTES = 16;

            function I(e, t, i, p, g) {
                if (!(this instanceof I)) return new I(e, t, i, p, g);
                if (!n || !n.exports) throw new Error("WASM not loaded. Wait for Blake2b.ready(cb)");
                e || (e = 32), !0 !== g && (r(e >= u, "digestLength must be at least " + u + ", was given " + e), r(e <= h, "digestLength must be at most " + h + ", was given " + e), null != t && r(t.length >= a, "key must be at least " + a + ", was given " + t.length), null != t && r(t.length <= c, "key must be at least " + c + ", was given " + t.length), null != i && r(i.length === A, "salt must be exactly " + A + ", was given " + i.length), null != p && r(p.length === f, "personal must be exactly " + f + ", was given " + p.length)), s.length || (s.push(o), o += 216), this.digestLength = e, this.finalized = !1, this.pointer = s.pop(), n.memory.fill(0, 0, 64), n.memory[0] = this.digestLength, n.memory[1] = t ? t.length : 0, n.memory[2] = 1, n.memory[3] = 1, i && n.memory.set(i, 32), p && n.memory.set(p, 48), this.pointer + 216 > n.memory.length && n.realloc(this.pointer + 216), n.exports.blake2b_init(this.pointer, this.digestLength), t && (this.update(t), n.memory.fill(0, o, o + t.length), n.memory[this.pointer + 200] = 128)
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
        9519: function(e, t, i) {
            function r(e) {
                if (!r.supported) return null;
                var t, o = e && e.imports,
                    s = (t = "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", "function" == typeof atob ? new Uint8Array(atob(t).split("").map(n)) : new(i(12).Buffer)(t, "base64")),
                    u = null,
                    h = {
                        buffer: s,
                        memory: null,
                        exports: null,
                        realloc: function(e) {
                            h.exports.memory.grow(Math.ceil(Math.abs(e - h.memory.length) / 65536)), h.memory = new Uint8Array(h.exports.memory.buffer)
                        },
                        onload: a
                    };
                return a((function() {})), h;

                function a(t) {
                    if (h.exports) return t();
                    if (u) u.then(t.bind(null, null)).catch(t);
                    else {
                        try {
                            if (e && e.async) throw new Error("async");
                            c({
                                instance: new WebAssembly.Instance(new WebAssembly.Module(s), o)
                            })
                        } catch (e) {
                            u = WebAssembly.instantiate(s, o).then(c)
                        }
                        a(t)
                    }
                }

                function c(e) {
                    h.exports = e.instance.exports, h.memory = h.exports.memory && h.exports.memory.buffer && new Uint8Array(h.exports.memory.buffer)
                }
            }

            function n(e) {
                return e.charCodeAt(0)
            }
            e.exports = r, r.supported = !1
        },
        9520: function(e, t, i) {
            var r = i(21).Buffer,
                n = i(172),
                o = i(5931),
                s = i(320),
                u = i(47),
                h = i(5582),
                a = i(5847),
                BigInteger = i(109),
                ECPair = i(6202),
                c = i(280),
                A = c.getCurveByName("secp256k1"),
                f = i(7273);

            function HDNode(e, t) {
                if (u(h.tuple("ECPair", h.Buffer256bit), arguments), !e.compressed) throw new TypeError("BIP32 only allows compressed keyPairs");
                this.keyPair = e, this.chainCode = t, this.depth = 0, this.index = 0, this.parentFingerprint = 0, this.derivationCache = {}
            }
            HDNode.HIGHEST_BIT = 2147483648, HDNode.LENGTH = 78, HDNode.MASTER_SECRET = r.from("Bitcoin seed", "utf8"), HDNode.fromSeedBuffer = function(e, t) {
                if (u(h.tuple(h.Buffer, h.maybe(h.Network)), arguments), e.length < 16) throw new TypeError("Seed should be at least 128 bits");
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
                    u = i.readUInt32BE(5);
                if (0 === s && 0 !== u) throw new Error("Invalid parent fingerprint");
                var h = i.readUInt32BE(9);
                if (0 === s && 0 !== h) throw new Error("Invalid index");
                var f, I = i.slice(13, 45);
                if (o === r.bip32.private) {
                    if (0 !== i.readUInt8(45)) throw new Error("Invalid private key");
                    var p = BigInteger.fromBuffer(i.slice(46, 78));
                    f = new ECPair(p, null, {
                        network: r
                    })
                } else {
                    var g = c.Point.decodeFrom(A, i.slice(45, 78));
                    A.validate(g), f = new ECPair(null, g, {
                        network: r
                    })
                }
                var l = new HDNode(f, I);
                return l.depth = s, l.index = h, l.parentFingerprint = u, l
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
                u(h.UInt32, e);
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
                if (p.compareTo(A.n) >= 0) return this.derive(e + 1);
                if (this.isNeutered()) {
                    var g = f.publicKeyCreate(a, !1),
                        l = void 0 !== g ? c.Point.decodeFrom(A, g).add(this.keyPair.Q) : A.G.multiply(p).add(this.keyPair.Q);
                    if (A.isInfinity(l)) return this.derive(e + 1);
                    n = new ECPair(null, l, {
                        network: this.keyPair.network
                    })
                } else {
                    var C = p.add(this.keyPair.d).mod(A.n);
                    if (0 === C.signum()) return this.derive(e + 1);
                    n = new ECPair(C, null, {
                        network: this.keyPair.network
                    })
                }
                var d = new HDNode(n, I);
                return d.depth = this.depth + 1, d.index = e, d.parentFingerprint = this.getFingerprint().readUInt32BE(0), d
            }, HDNode.prototype.deriveHardened = function(e) {
                return u(h.UInt31, e), this.derive(e + HDNode.HIGHEST_BIT)
            }, HDNode.prototype.isNeutered = function() {
                return !this.keyPair.d
            }, HDNode.prototype.derivePath = function(e, t) {
                u(h.BIP32Path, e), u(h.maybe(h.Object), t), t = t || this.derivationCache;
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
                    var i = f.publicKeyCreate(e.d.toBuffer(32), !1);
                    void 0 !== i && (t.__Q = c.Point.decodeFrom(A, i))
                }
                return t
            }, e.exports = HDNode
        },
        9521: function(e, t, i) {
            var r = i(21).Buffer,
                n = i(6545),
                o = i(5931),
                s = i(5574),
                u = i(6540),
                h = i(6053),
                a = i(5847),
                c = i(139),
                A = i(47),
                f = i(5582),
                I = u.types,
                p = [u.types.P2PKH, u.types.P2PK, u.types.MULTISIG],
                g = p.concat([u.types.P2WPKH, u.types.P2WSH]),
                ECPair = i(6202),
                ECSignature = i(6203),
                l = i(6547),
                C = i(9522)("bitgo:utxolib:txbuilder");

            function d(e) {
                return -1 !== p.indexOf(e)
            }

            function E(e) {
                return -1 !== g.indexOf(e)
            }

            function w(e, t) {
                if (0 === e.length && 0 === t.length) return {};
                var i, r, n, h, a, c, A, f, p, g, l = !1,
                    C = !1,
                    w = !1,
                    y = s.decompile(e);
                u.classifyInput(y, !0) === I.P2SH && (w = !0, a = y[y.length - 1], f = u.classifyOutput(a), i = u.scriptHash.output.encode(o.hash160(a)), r = I.P2SH, h = a);
                var S = u.classifyWitness(t, !0);
                if (S === I.P2WSH) {
                    if (c = t[t.length - 1], A = u.classifyOutput(c), C = !0, l = !0, 0 === e.length) {
                        if (i = u.witnessScriptHash.output.encode(o.sha256(c)), r = I.P2WSH, void 0 !== a) throw new Error("Redeem script given when unnecessary")
                    } else {
                        if (!a) throw new Error("No redeemScript provided for P2WSH, but scriptSig non-empty");
                        if (p = u.witnessScriptHash.output.encode(o.sha256(c)), !a.equals(p)) throw new Error("Redeem script didn't match witnessScript")
                    }
                    if (!d(u.classifyOutput(c))) throw new Error("unsupported witness script");
                    h = c, n = A, g = t.slice(0, -1)
                } else if (S === I.P2WPKH) {
                    l = !0;
                    var B = t[t.length - 1],
                        v = o.hash160(B);
                    if (0 === e.length) {
                        if (i = u.witnessPubKeyHash.output.encode(v), r = I.P2WPKH, void 0 !== a) throw new Error("Redeem script given when unnecessary")
                    } else {
                        if (!a) throw new Error("No redeemScript provided for P2WPKH, but scriptSig wasn't empty");
                        if (p = u.witnessPubKeyHash.output.encode(v), !a.equals(p)) throw new Error("Redeem script did not have the right witness program")
                    }
                    n = I.P2PKH, g = t
                } else if (a) {
                    if (!E(f)) throw new Error("Bad redeemscript!");
                    h = a, n = f, g = y.slice(0, -1)
                } else r = n = u.classifyInput(e), g = y;
                var m = function(e, t, i) {
                        var r = [],
                            n = [];
                        switch (e) {
                            case I.P2PKH:
                                r = t.slice(1), n = t.slice(0, 1);
                                break;
                            case I.P2PK:
                                r[0] = i ? u.pubKey.output.decode(i) : void 0, n = t.slice(0, 1);
                                break;
                            case I.MULTISIG:
                                if (i) r = u.multisig.output.decode(i).pubKeys;
                                n = t.slice(1).map((function(e) {
                                    return 0 === e.length ? void 0 : e
                                }))
                        }
                        return {
                            pubKeys: r,
                            signatures: n
                        }
                    }(n, g, h),
                    Q = {
                        pubKeys: m.pubKeys,
                        signatures: m.signatures,
                        prevOutScript: i,
                        prevOutType: r,
                        signType: n,
                        signScript: h,
                        witness: Boolean(l)
                    };
                return w && (Q.redeemScript = a, Q.redeemScriptType = f), C && (Q.witnessScript = c, Q.witnessScriptType = A), Q
            }

            function y(e, t, i) {
                A(f.Buffer, e);
                var r = s.decompile(e);
                t || (t = u.classifyOutput(e));
                var n = [];
                switch (t) {
                    case I.P2PKH:
                        if (!i) break;
                        var h = r[2],
                            a = o.hash160(i);
                        h.equals(a) && (n = [i]);
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

            function S(e, t) {
                if (e.prevOutType) {
                    if (e.prevOutType !== I.P2SH) throw new Error("PrevOutScript must be P2SH");
                    if (!s.decompile(e.prevOutScript)[1].equals(t)) throw new Error("Inconsistent hash160(RedeemScript)")
                }
            }

            function B(e, t, i, r, n) {
                var h, a, c, A, f, p, g, l, C, d = !1,
                    E = !1,
                    w = !1;
                if (i && n) {
                    if (f = o.hash160(i), g = o.sha256(n), S(e, f), !i.equals(u.witnessScriptHash.output.encode(g))) throw new Error("Witness script inconsistent with redeem script");
                    if (!(h = y(n, void 0, t)).pubKeys) throw new Error('WitnessScript not supported "' + s.toASM(i) + '"');
                    a = u.types.P2SH, c = u.scriptHash.output.encode(f), d = E = w = !0, A = u.types.P2WSH, l = p = h.scriptType, C = n
                } else if (i) {
                    if (S(e, f = o.hash160(i)), !(h = y(i, void 0, t)).pubKeys) throw new Error('RedeemScript not supported "' + s.toASM(i) + '"');
                    a = u.types.P2SH, c = u.scriptHash.output.encode(f), d = !0, C = i, E = (l = A = h.scriptType) === u.types.P2WPKH
                } else if (n) {
                    if (function(e, t) {
                            if (e.prevOutType) {
                                if (e.prevOutType !== I.P2WSH) throw new Error("PrevOutScript must be P2WSH");
                                if (!s.decompile(e.prevOutScript)[1].equals(t)) throw new Error("Inconsistent sha25(WitnessScript)")
                            }
                        }(e, g = o.sha256(n)), !(h = y(n, void 0, t)).pubKeys) throw new Error('WitnessScript not supported "' + s.toASM(i) + '"');
                    a = u.types.P2WSH, c = u.witnessScriptHash.output.encode(g), E = w = !0, l = p = h.scriptType, C = n
                } else if (e.prevOutType) {
                    if (e.prevOutType === I.P2SH || e.prevOutType === I.P2WSH) throw new Error("PrevOutScript is " + e.prevOutType + ", requires redeemScript");
                    if (a = e.prevOutType, c = e.prevOutScript, !(h = y(e.prevOutScript, e.prevOutType, t)).pubKeys) return;
                    E = e.prevOutType === I.P2WPKH, l = a, C = c
                } else h = y(c = u.pubKeyHash.output.encode(o.hash160(t)), I.P2PKH, t), E = !1, l = a = I.P2PKH, C = c;
                l === I.P2WPKH && (C = u.pubKeyHash.output.encode(u.witnessPubKeyHash.output.decode(C))), d && (e.redeemScript = i, e.redeemScriptType = A), w && (e.witnessScript = n, e.witnessScriptType = p), e.pubKeys = h.pubKeys, e.signatures = h.signatures, e.signScript = C, e.signType = l, e.prevOutScript = c, e.prevOutType = a, e.witness = E
            }

            function v(e, t, i, n) {
                if (e === I.P2PKH) {
                    if (1 === t.length && r.isBuffer(t[0]) && 1 === i.length) return u.pubKeyHash.input.encodeStack(t[0], i[0])
                } else if (e === I.P2PK) {
                    if (1 === t.length && r.isBuffer(t[0])) return u.pubKey.input.encodeStack(t[0])
                } else {
                    if (e !== I.MULTISIG) throw new Error("Not yet supported");
                    if (t.length > 0) return t = t.map((function(e) {
                        return e || c.OP_0
                    })), n || (t = t.filter((function(e) {
                        return e !== c.OP_0
                    }))), u.multisig.input.encodeStack(t)
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
                if (A(f.UInt32, e), this.inputs.some((function(e) {
                        return !!e.signatures && e.signatures.some((function(e) {
                            return e
                        }))
                    }))) throw new Error("No, this would invalidate signatures");
                this.tx.locktime = e
            }, m.prototype.setVersion = function(e, t = !0) {
                if (A(f.UInt32, e), h.isZcash(this.network)) {
                    if (!this.network.consensusBranchId.hasOwnProperty(this.tx.version)) throw new Error("Unsupported Zcash transaction");
                    this.tx.overwintered = t ? 1 : 0
                }
                this.tx.version = e
            }, m.prototype.setVersionGroupId = function(e) {
                if (!h.isZcash(this.network) || !this.tx.isOverwinterCompatible()) throw new Error("expiryHeight can only be set for Zcash starting at overwinter version. Current network coin: " + this.network.coin + ", version: " + this.tx.version);
                A(f.UInt32, e), this.tx.versionGroupId = e
            }, m.prototype.setExpiryHeight = function(e) {
                if (!h.isZcash(this.network) || !this.tx.isOverwinterCompatible()) throw new Error("expiryHeight can only be set for Zcash starting at overwinter version. Current network coin: " + this.network.coin + ", version: " + this.tx.version);
                A(f.UInt32, e), this.tx.expiryHeight = e
            }, m.prototype.setJoinSplits = function(e) {
                if (!h.isZcash(this.network) || !this.tx.supportsJoinSplits()) throw new Error("joinsplits can only be set for Zcash starting at version 2. Current network coin: " + this.network.coin + ", version: " + this.tx.version);
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
                return r.setVersion(e.version, e.overwintered), r.setLockTime(e.locktime), h.isZcash(i) && (r.tx.isOverwinterCompatible() && (r.setVersionGroupId(e.versionGroupId), r.setExpiryHeight(e.expiryHeight)), r.tx.supportsJoinSplits() && r.setJoinSplits(e)), h.isDash(i) && (A(f.UInt16, e.type), r.tx.type = e.type, r.tx.versionSupportsDashSpecialTransactions() && (A(f.Buffer, e.extraPayload), r.tx.extraPayload = e.extraPayload)), e.outs.forEach((function(e) {
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
                                var u, a = ECPair.fromPublicKeyBuffer(s);
                                return o.some((function(s, c) {
                                    if (!s) return !1;
                                    var A, f = ECSignature.parseScriptSignature(s);
                                    switch (n.coin) {
                                        case h.BSV:
                                        case h.BCH:
                                            A = t.hashForCashSignature(i, e.signScript, r, f.hashType);
                                            break;
                                        case h.BTG:
                                            A = t.hashForGoldSignature(i, e.signScript, r, f.hashType);
                                            break;
                                        case h.ZEC:
                                            if (void 0 === r) return !1;
                                            A = t.hashForZcashSignature(i, e.signScript, r, f.hashType);
                                            break;
                                        default:
                                            A = e.witness ? t.hashForWitnessV0(i, e.signScript, r, f.hashType) : t.hashForSignature(i, e.signScript, f.hashType)
                                    }
                                    return !!a.verify(A, f.signature) && (o[c] = void 0, u = s, !0)
                                })), u
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
                if (void 0 !== i.script && (n = w(i.script, i.witness || [])), void 0 !== i.value && (n.value = i.value), !n.prevOutScript && i.prevOutScript) {
                    var o;
                    if (!n.pubKeys && !n.signatures) {
                        var s = y(i.prevOutScript);
                        s.pubKeys && (n.pubKeys = s.pubKeys, n.signatures = s.signatures), o = s.scriptType
                    }
                    n.prevOutScript = i.prevOutScript, n.prevOutType = o || u.classifyOutput(i.prevOutScript)
                }
                var h = this.tx.addInput(e, t, i.sequence, i.scriptSig);
                return this.inputs[h] = n, this.prevTxMap[r] = h, h
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
                            if (i === u.types.P2SH) {
                                if (!t && !E(e.redeemScriptType)) throw new Error("Impossible to sign this type");
                                d(e.redeemScriptType) && (r = v(e.redeemScriptType, e.signatures, e.pubKeys, t)), e.redeemScriptType && (o = !0, i = e.redeemScriptType)
                            }
                            switch (i) {
                                case u.types.P2WPKH:
                                    n = v(u.types.P2PKH, e.signatures, e.pubKeys, t);
                                    break;
                                case u.types.P2WSH:
                                    if (!t && !d(e.witnessScriptType)) throw new Error("Impossible to sign this type");
                                    d(e.witnessScriptType) && ((n = v(e.witnessScriptType, e.signatures, e.pubKeys, t)).push(e.witnessScript), i = e.witnessScriptType)
                            }
                            return o && r.push(e.redeemScript), {
                                type: i,
                                script: s.compile(r),
                                witness: n
                            }
                        }(i, e);
                        if (!e && !d(n.type) && n.type !== u.types.P2WPKH) throw new Error(n.type + " not supported");
                        t.setInputScript(r, n.script), t.setWitness(r, n.witness)
                    })), !e && this.__overMaximumFees(t.virtualSize())) throw new Error("Transaction has absurd fees");
                return t
            }, m.prototype.sign = function(e, t, i, n, o, s) {
                if (C("Signing transaction: (input: %d, hashType: %d, witnessVal: %s, witnessScript: %j)", e, n, o, s), C("Transaction Builder network: %j", this.network), t.network && t.network !== this.network) throw new TypeError("Inconsistent network");
                if (!this.inputs[e]) throw new Error("No input at index: " + e);
                n = n || l.SIGHASH_ALL;
                var u = this.inputs[e];
                if (void 0 !== u.redeemScript && i && !u.redeemScript.equals(i)) throw new Error("Inconsistent redeemScript");
                var a, c = t.publicKey || t.getPublicKeyBuffer();
                if (!Q(u)) {
                    if (void 0 !== o) {
                        if (void 0 !== u.value && u.value !== o) throw new Error("Input didn't match witnessValue");
                        A(f.Satoshi, o), u.value = o
                    }
                    if (C("Preparing input %d for signing", e), Q(u) || B(u, c, i, 0, s), !Q(u)) throw Error(u.prevOutType + " not supported")
                }
                if (h.isBitcoinGold(this.network) ? (a = this.tx.hashForGoldSignature(e, u.signScript, o, n, u.witness), C("Calculated BTG sighash (%s)", a.toString("hex"))) : h.isBitcoinCash(this.network) || h.isBitcoinSV(this.network) ? (a = this.tx.hashForCashSignature(e, u.signScript, o, n), C("Calculated BCH sighash (%s)", a.toString("hex"))) : h.isZcash(this.network) ? (a = this.tx.hashForZcashSignature(e, u.signScript, o, n), C("Calculated ZEC sighash (%s)", a.toString("hex"))) : u.witness ? (a = this.tx.hashForWitnessV0(e, u.signScript, o, n), C("Calculated witnessv0 sighash (%s)", a.toString("hex"))) : (a = this.tx.hashForSignature(e, u.signScript, n), C("Calculated sighash (%s)", a.toString("hex"))), !u.pubKeys.some((function(e, i) {
                        if (!c.equals(e)) return !1;
                        if (u.signatures[i]) throw new Error("Signature already exists");
                        if (33 !== c.length && u.signType === I.P2WPKH) throw new Error("BIP143 rejects uncompressed public keys in P2WPKH or P2WSH");
                        var o = t.sign(a);
                        return r.isBuffer(o) && (o = ECSignature.fromRSBuffer(o)), C("Produced signature (r: %s, s: %s)", o.r, o.s), u.signatures[i] = o.toScriptSignature(n), !0
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
        9522: function(e, t, i) {
            function r() {
                var e;
                try {
                    e = t.storage.debug
                } catch (e) {}
                return !e && "undefined" != typeof process && "env" in process && (e = process.env.DEBUG), e
            }(t = e.exports = i(9523)).log = function() {
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
        9523: function(e, t, i) {
            function r(e) {
                var i;

                function r() {
                    if (r.enabled) {
                        var e = r,
                            n = +new Date,
                            o = n - (i || n);
                        e.diff = o, e.prev = i, e.curr = n, i = n;
                        for (var s = new Array(arguments.length), u = 0; u < s.length; u++) s[u] = arguments[u];
                        s[0] = t.coerce(s[0]), "string" != typeof s[0] && s.unshift("%O");
                        var h = 0;
                        s[0] = s[0].replace(/%([a-zA-Z%])/g, (function(i, r) {
                            if ("%%" === i) return i;
                            h++;
                            var n = t.formatters[r];
                            if ("function" == typeof n) {
                                var o = s[h];
                                i = n.call(e, o), s.splice(h, 1), h--
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
        },
        9524: function(e, t, i) {
            "use strict";
            var r = i(2);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var n = r(i(35));
            var o = e => {
                const t = [],
                    i = e.reduce((e, i) => {
                        const {
                            tiptime: r,
                            locktime: o,
                            height: s,
                            satoshis: u
                        } = i, h = Math.floor((r - o) / 60);
                        if (s >= 7777777 || o < 5e8 || u < 1e9 || h < 60 || !s) return e;
                        const a = s >= 1e6 ? 44640 : 525600;
                        let c = Math.min(h, a);
                        c -= 59;
                        const A = new n.default(Math.floor(u / 10512e3) * c);
                        return A.lt(new n.default(0)) || (e = e.add(A), t.push(i)), e
                    }, new n.default(0));
                return {
                    inputs: t,
                    reward: i
                }
            };
            t.default = o
        }
    }
]);