(window.webpackJsonp = window.webpackJsonp || []).push([
    [145], {
        1141: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.encodeBech32Pubkey = t.encodeAminoPubkey = t.decodeBech32Pubkey = t.decodeAminoPubkey = t.encodeSecp256k1Pubkey = void 0;
            const n = r(68),
                a = r(149),
                s = r(185),
                o = r(673);
            t.encodeSecp256k1Pubkey = function(e) {
                if (33 !== e.length || 2 !== e[0] && 3 !== e[0]) throw new Error("Public key must be compressed secp256k1, i.e. 33 bytes starting with 0x02 or 0x03");
                return {
                    type: o.pubkeyType.secp256k1,
                    value: n.toBase64(e)
                }
            };
            const i = n.fromHex("eb5ae98721"),
                c = n.fromHex("1624de6420"),
                _ = n.fromHex("0dfb100520"),
                u = n.fromHex("22c1f7e2");

            function p(e) {
                if (s.arrayContentStartsWith(e, i)) {
                    const t = e.slice(i.length);
                    if (33 !== t.length) throw new Error("Invalid rest data length. Expected 33 bytes (compressed secp256k1 pubkey).");
                    return {
                        type: o.pubkeyType.secp256k1,
                        value: n.toBase64(t)
                    }
                }
                if (s.arrayContentStartsWith(e, c)) {
                    const t = e.slice(c.length);
                    if (32 !== t.length) throw new Error("Invalid rest data length. Expected 32 bytes (Ed25519 pubkey).");
                    return {
                        type: o.pubkeyType.ed25519,
                        value: n.toBase64(t)
                    }
                }
                if (s.arrayContentStartsWith(e, _)) {
                    const t = e.slice(_.length);
                    if (32 !== t.length) throw new Error("Invalid rest data length. Expected 32 bytes (Sr25519 pubkey).");
                    return {
                        type: o.pubkeyType.sr25519,
                        value: n.toBase64(t)
                    }
                }
                throw new Error("Unsupported public key type. Amino data starts with: " + n.toHex(e.slice(0, 5)))
            }

            function h(e) {
                const t = a.Uint53.fromString(e.toString()).toNumber();
                if (t > 127) throw new Error("Encoding numbers > 127 is not supported here. Please tell those lazy CosmJS maintainers to port the binary.PutUvarint implementation from the Go standard library and write some tests.");
                return [t]
            }

            function l(e) {
                if (o.isMultisigThresholdPubkey(e)) {
                    const t = Array.from(u);
                    t.push(8), t.push(...h(e.value.threshold));
                    for (const r of e.value.pubkeys.map(e => l(e))) t.push(18), t.push(...h(r.length)), t.push(...r);
                    return new Uint8Array(t)
                }
                if (o.isEd25519Pubkey(e)) return new Uint8Array([...c, ...n.fromBase64(e.value)]);
                if (o.isSecp256k1Pubkey(e)) return new Uint8Array([...i, ...n.fromBase64(e.value)]);
                throw new Error("Unsupported pubkey type")
            }
            t.decodeAminoPubkey = p, t.decodeBech32Pubkey = function(e) {
                const {
                    data: t
                } = n.Bech32.decode(e);
                return p(t)
            }, t.encodeAminoPubkey = l, t.encodeBech32Pubkey = function(e, t) {
                return n.Bech32.encode(t, l(e))
            }
        },
        1142: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.decodeSignature = t.encodeSecp256k1Signature = void 0;
            const n = r(68),
                a = r(1141),
                s = r(673);
            t.encodeSecp256k1Signature = function(e, t) {
                if (64 !== t.length) throw new Error("Signature must be 64 bytes long. Cosmos SDK uses a 2x32 byte fixed length encoding for the secp256k1 signature integers r and s.");
                return {
                    pub_key: a.encodeSecp256k1Pubkey(e),
                    signature: n.toBase64(t)
                }
            }, t.decodeSignature = function(e) {
                switch (e.pub_key.type) {
                    case s.pubkeyType.secp256k1:
                        return {
                            pubkey: n.fromBase64(e.pub_key.value), signature: n.fromBase64(e.signature)
                        };
                    default:
                        throw new Error("Unsupported pubkey type")
                }
            }
        },
        1143: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.serializeSignDoc = t.makeSignDoc = t.sortedJsonStringify = void 0;
            const n = r(68),
                a = r(149);

            function s(e) {
                if ("object" != typeof e || null === e) return e;
                if (Array.isArray(e)) return e.map(s);
                const t = Object.keys(e).sort(),
                    r = {};
                return t.forEach(t => {
                    r[t] = s(e[t])
                }), r
            }

            function o(e) {
                return JSON.stringify(s(e))
            }
            t.sortedJsonStringify = o, t.makeSignDoc = function(e, t, r, n, s, o) {
                return {
                    chain_id: r,
                    account_number: a.Uint53.fromString(s.toString()).toString(),
                    sequence: a.Uint53.fromString(o.toString()).toString(),
                    fee: t,
                    msgs: e,
                    memo: n || ""
                }
            }, t.serializeSignDoc = function(e) {
                return n.toUtf8(o(e))
            }
        },
        1145: function(e, t, r) {
            "use strict";
            var n = this && this.__importDefault || function(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            };
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.makeSignBytes = t.makeSignDoc = t.makeAuthInfoBytes = void 0;
            const a = r(674),
                s = r(435),
                o = n(r(1));

            function i(e, t) {
                return e.map(({
                    pubkey: e,
                    sequence: r
                }) => ({
                    publicKey: e,
                    modeInfo: {
                        single: {
                            mode: t
                        }
                    },
                    sequence: o.default.fromNumber(r)
                }))
            }
            t.makeAuthInfoBytes = function(e, t, r, n = a.SignMode.SIGN_MODE_DIRECT) {
                const c = {
                    signerInfos: i(e, n),
                    fee: {
                        amount: [...t],
                        gasLimit: o.default.fromNumber(r)
                    }
                };
                return s.AuthInfo.encode(s.AuthInfo.fromPartial(c)).finish()
            }, t.makeSignDoc = function(e, t, r, n) {
                return {
                    bodyBytes: e,
                    authInfoBytes: t,
                    chainId: r,
                    accountNumber: o.default.fromNumber(n)
                }
            }, t.makeSignBytes = function({
                accountNumber: e,
                authInfoBytes: t,
                bodyBytes: r,
                chainId: n
            }) {
                const a = s.SignDoc.fromPartial({
                    accountNumber: e,
                    authInfoBytes: t,
                    bodyBytes: r,
                    chainId: n
                });
                return s.SignDoc.encode(a).finish()
            }
        },
        149: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.Uint64 = t.Uint53 = t.Uint32 = t.Int53 = t.Decimal = void 0;
            var n = r(4273);
            Object.defineProperty(t, "Decimal", {
                enumerable: !0,
                get: function() {
                    return n.Decimal
                }
            });
            var a = r(4274);
            Object.defineProperty(t, "Int53", {
                enumerable: !0,
                get: function() {
                    return a.Int53
                }
            }), Object.defineProperty(t, "Uint32", {
                enumerable: !0,
                get: function() {
                    return a.Uint32
                }
            }), Object.defineProperty(t, "Uint53", {
                enumerable: !0,
                get: function() {
                    return a.Uint53
                }
            }), Object.defineProperty(t, "Uint64", {
                enumerable: !0,
                get: function() {
                    return a.Uint64
                }
            })
        },
        184: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.slip10CurveFromString = t.Slip10RawIndex = t.Slip10Curve = t.Slip10 = t.stringToPath = t.pathToString = t.sha512 = t.Sha512 = t.sha256 = t.Sha256 = t.sha1 = t.Sha1 = t.Secp256k1Signature = t.ExtendedSecp256k1Signature = t.Secp256k1 = t.ripemd160 = t.Ripemd160 = t.Random = t.Ed25519Keypair = t.Ed25519 = t.isArgon2idOptions = t.Argon2id = t.xchacha20NonceLength = t.Xchacha20poly1305Ietf = t.keccak256 = t.Keccak256 = t.Hmac = t.EnglishMnemonic = t.Bip39 = void 0;
            var n = r(4254);
            Object.defineProperty(t, "Bip39", {
                enumerable: !0,
                get: function() {
                    return n.Bip39
                }
            });
            var a = r(2023);
            Object.defineProperty(t, "EnglishMnemonic", {
                enumerable: !0,
                get: function() {
                    return a.EnglishMnemonic
                }
            });
            var s = r(2024);
            Object.defineProperty(t, "Hmac", {
                enumerable: !0,
                get: function() {
                    return s.Hmac
                }
            });
            var o = r(4261);
            Object.defineProperty(t, "Keccak256", {
                enumerable: !0,
                get: function() {
                    return o.Keccak256
                }
            }), Object.defineProperty(t, "keccak256", {
                enumerable: !0,
                get: function() {
                    return o.keccak256
                }
            });
            var i = r(4262);
            Object.defineProperty(t, "Xchacha20poly1305Ietf", {
                enumerable: !0,
                get: function() {
                    return i.Xchacha20poly1305Ietf
                }
            }), Object.defineProperty(t, "xchacha20NonceLength", {
                enumerable: !0,
                get: function() {
                    return i.xchacha20NonceLength
                }
            }), Object.defineProperty(t, "Argon2id", {
                enumerable: !0,
                get: function() {
                    return i.Argon2id
                }
            }), Object.defineProperty(t, "isArgon2idOptions", {
                enumerable: !0,
                get: function() {
                    return i.isArgon2idOptions
                }
            }), Object.defineProperty(t, "Ed25519", {
                enumerable: !0,
                get: function() {
                    return i.Ed25519
                }
            }), Object.defineProperty(t, "Ed25519Keypair", {
                enumerable: !0,
                get: function() {
                    return i.Ed25519Keypair
                }
            });
            var c = r(4269);
            Object.defineProperty(t, "Random", {
                enumerable: !0,
                get: function() {
                    return c.Random
                }
            });
            var _ = r(4270);
            Object.defineProperty(t, "Ripemd160", {
                enumerable: !0,
                get: function() {
                    return _.Ripemd160
                }
            }), Object.defineProperty(t, "ripemd160", {
                enumerable: !0,
                get: function() {
                    return _.ripemd160
                }
            });
            var u = r(4271);
            Object.defineProperty(t, "Secp256k1", {
                enumerable: !0,
                get: function() {
                    return u.Secp256k1
                }
            });
            var p = r(2025);
            Object.defineProperty(t, "ExtendedSecp256k1Signature", {
                enumerable: !0,
                get: function() {
                    return p.ExtendedSecp256k1Signature
                }
            }), Object.defineProperty(t, "Secp256k1Signature", {
                enumerable: !0,
                get: function() {
                    return p.Secp256k1Signature
                }
            });
            var h = r(2026);
            Object.defineProperty(t, "Sha1", {
                enumerable: !0,
                get: function() {
                    return h.Sha1
                }
            }), Object.defineProperty(t, "sha1", {
                enumerable: !0,
                get: function() {
                    return h.sha1
                }
            }), Object.defineProperty(t, "Sha256", {
                enumerable: !0,
                get: function() {
                    return h.Sha256
                }
            }), Object.defineProperty(t, "sha256", {
                enumerable: !0,
                get: function() {
                    return h.sha256
                }
            }), Object.defineProperty(t, "Sha512", {
                enumerable: !0,
                get: function() {
                    return h.Sha512
                }
            }), Object.defineProperty(t, "sha512", {
                enumerable: !0,
                get: function() {
                    return h.sha512
                }
            });
            var l = r(4272);
            Object.defineProperty(t, "pathToString", {
                enumerable: !0,
                get: function() {
                    return l.pathToString
                }
            }), Object.defineProperty(t, "stringToPath", {
                enumerable: !0,
                get: function() {
                    return l.stringToPath
                }
            }), Object.defineProperty(t, "Slip10", {
                enumerable: !0,
                get: function() {
                    return l.Slip10
                }
            }), Object.defineProperty(t, "Slip10Curve", {
                enumerable: !0,
                get: function() {
                    return l.Slip10Curve
                }
            }), Object.defineProperty(t, "Slip10RawIndex", {
                enumerable: !0,
                get: function() {
                    return l.Slip10RawIndex
                }
            }), Object.defineProperty(t, "slip10CurveFromString", {
                enumerable: !0,
                get: function() {
                    return l.slip10CurveFromString
                }
            })
        },
        2023: function(e, t, r) {
            "use strict";
            var n = this && this.__createBinding || (Object.create ? function(e, t, r, n) {
                    void 0 === n && (n = r), Object.defineProperty(e, n, {
                        enumerable: !0,
                        get: function() {
                            return t[r]
                        }
                    })
                } : function(e, t, r, n) {
                    void 0 === n && (n = r), e[n] = t[r]
                }),
                a = this && this.__setModuleDefault || (Object.create ? function(e, t) {
                    Object.defineProperty(e, "default", {
                        enumerable: !0,
                        value: t
                    })
                } : function(e, t) {
                    e.default = t
                }),
                s = this && this.__importStar || function(e) {
                    if (e && e.__esModule) return e;
                    var t = {};
                    if (null != e)
                        for (var r in e) "default" !== r && Object.prototype.hasOwnProperty.call(e, r) && n(t, e, r);
                    return a(t, e), t
                };
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.EnglishMnemonic = void 0;
            const o = s(r(555));
            class EnglishMnemonic {
                constructor(e) {
                    if (!EnglishMnemonic.mnemonicMatcher.test(e)) throw new Error("Invalid mnemonic format");
                    const t = e.split(" "),
                        r = [12, 15, 18, 21, 24];
                    if (-1 === r.indexOf(t.length)) throw new Error(`Invalid word count in mnemonic (allowed: ${r} got: ${t.length})`);
                    for (const e of t)
                        if (-1 === EnglishMnemonic.wordlist.indexOf(e)) throw new Error("Mnemonic contains invalid word");
                    o.mnemonicToEntropy(e), this.data = e
                }
                toString() {
                    return this.data
                }
            }
            t.EnglishMnemonic = EnglishMnemonic, EnglishMnemonic.wordlist = o.wordlists.english, EnglishMnemonic.mnemonicMatcher = /^[a-z]+( [a-z]+)*$/
        },
        2024: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.Hmac = void 0;
            t.Hmac = class Hmac {
                constructor(e, t) {
                    const r = (new e).blockSize;
                    this.hash = t => (new e).update(t).digest();
                    let n = t;
                    if (n.length > r && (n = this.hash(n)), n.length < r) {
                        const e = new Uint8Array(r - n.length);
                        n = new Uint8Array([...n, ...e])
                    }
                    this.oKeyPad = n.map(e => 92 ^ e), this.iKeyPad = n.map(e => 54 ^ e), this.messageHasher = new e, this.blockSize = r, this.update(this.iKeyPad)
                }
                update(e) {
                    return this.messageHasher.update(e), this
                }
                digest() {
                    const e = this.messageHasher.digest();
                    return this.hash(new Uint8Array([...this.oKeyPad, ...e]))
                }
            }
        },
        2025: function(e, t, r) {
            "use strict";

            function n(e) {
                let t = 0;
                for (const r of e) {
                    if (0 !== r) break;
                    t++
                }
                return e.slice(t)
            }
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.ExtendedSecp256k1Signature = t.Secp256k1Signature = void 0;
            class Secp256k1Signature {
                constructor(e, t) {
                    if (e.length > 32 || 0 === e.length || 0 === e[0]) throw new Error("Unsigned integer r must be encoded as unpadded big endian.");
                    if (t.length > 32 || 0 === t.length || 0 === t[0]) throw new Error("Unsigned integer s must be encoded as unpadded big endian.");
                    this.data = {
                        r: e,
                        s: t
                    }
                }
                static fromFixedLength(e) {
                    if (64 !== e.length) throw new Error(`Got invalid data length: ${e.length}. Expected 2x 32 bytes for the pair (r, s)`);
                    return new Secp256k1Signature(n(e.slice(0, 32)), n(e.slice(32, 64)))
                }
                static fromDer(e) {
                    let t = 0;
                    if (48 !== e[t++]) throw new Error("Prefix 0x30 expected");
                    const r = e[t++];
                    if (e.length - t !== r) throw new Error("Data length mismatch detected");
                    if (2 !== e[t++]) throw new Error("INTEGER tag expected");
                    const a = e[t++];
                    if (a >= 128) throw new Error("Decoding length values above 127 not supported");
                    const s = e.slice(t, t + a);
                    t += a;
                    if (2 !== e[t++]) throw new Error("INTEGER tag expected");
                    const o = e[t++];
                    if (o >= 128) throw new Error("Decoding length values above 127 not supported");
                    const i = e.slice(t, t + o);
                    return t += o, new Secp256k1Signature(n(s), n(i))
                }
                r(e) {
                    if (void 0 === e) return this.data.r;
                    {
                        const t = e - this.data.r.length;
                        if (t < 0) throw new Error("Length too small to hold parameter r");
                        const r = new Uint8Array(t);
                        return new Uint8Array([...r, ...this.data.r])
                    }
                }
                s(e) {
                    if (void 0 === e) return this.data.s;
                    {
                        const t = e - this.data.s.length;
                        if (t < 0) throw new Error("Length too small to hold parameter s");
                        const r = new Uint8Array(t);
                        return new Uint8Array([...r, ...this.data.s])
                    }
                }
                toFixedLength() {
                    return new Uint8Array([...this.r(32), ...this.s(32)])
                }
                toDer() {
                    const e = this.data.r[0] >= 128 ? new Uint8Array([0, ...this.data.r]) : this.data.r,
                        t = this.data.s[0] >= 128 ? new Uint8Array([0, ...this.data.s]) : this.data.s,
                        r = e.length,
                        n = t.length,
                        a = new Uint8Array([2, r, ...e, 2, n, ...t]);
                    return new Uint8Array([48, a.length, ...a])
                }
            }
            t.Secp256k1Signature = Secp256k1Signature;
            class ExtendedSecp256k1Signature extends Secp256k1Signature {
                constructor(e, t, r) {
                    if (super(e, t), !Number.isInteger(r)) throw new Error("The recovery parameter must be an integer.");
                    if (r < 0 || r > 4) throw new Error("The recovery parameter must be one of 0, 1, 2, 3.");
                    this.recovery = r
                }
                static fromFixedLength(e) {
                    if (65 !== e.length) throw new Error(`Got invalid data length ${e.length}. Expected 32 + 32 + 1`);
                    return new ExtendedSecp256k1Signature(n(e.slice(0, 32)), n(e.slice(32, 64)), e[64])
                }
                toFixedLength() {
                    return new Uint8Array([...this.r(32), ...this.s(32), this.recovery])
                }
            }
            t.ExtendedSecp256k1Signature = ExtendedSecp256k1Signature
        },
        2026: function(e, t, r) {
            "use strict";
            var n = this && this.__importDefault || function(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            };
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.sha512 = t.Sha512 = t.sha256 = t.Sha256 = t.sha1 = t.Sha1 = void 0;
            const a = n(r(324));
            class Sha1 {
                constructor(e) {
                    this.blockSize = 64, this.impl = a.default("sha1"), e && this.update(e)
                }
                update(e) {
                    return this.impl.update(e), this
                }
                digest() {
                    return new Uint8Array(this.impl.digest())
                }
            }
            t.Sha1 = Sha1, t.sha1 = function(e) {
                return new Sha1(e).digest()
            };
            class Sha256 {
                constructor(e) {
                    this.blockSize = 64, this.impl = a.default("sha256"), e && this.update(e)
                }
                update(e) {
                    return this.impl.update(e), this
                }
                digest() {
                    return new Uint8Array(this.impl.digest())
                }
            }
            t.Sha256 = Sha256, t.sha256 = function(e) {
                return new Sha256(e).digest()
            };
            class Sha512 {
                constructor(e) {
                    this.blockSize = 128, this.impl = a.default("sha512"), e && this.update(e)
                }
                update(e) {
                    return this.impl.update(e), this
                }
                digest() {
                    return new Uint8Array(this.impl.digest())
                }
            }
            t.Sha512 = Sha512, t.sha512 = function(e) {
                return new Sha512(e).digest()
            }
        },
        2027: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.makeCosmoshubPath = void 0;
            const n = r(184);
            t.makeCosmoshubPath = function(e) {
                return [n.Slip10RawIndex.hardened(44), n.Slip10RawIndex.hardened(118), n.Slip10RawIndex.hardened(0), n.Slip10RawIndex.normal(0), n.Slip10RawIndex.normal(e)]
            }
        },
        2028: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.decrypt = t.encrypt = t.supportedAlgorithms = t.executeKdf = t.cosmjsSalt = void 0;
            const n = r(184),
                a = r(68);
            t.cosmjsSalt = a.toAscii("The CosmJS salt."), t.executeKdf = async function(e, r) {
                switch (r.algorithm) {
                    case "argon2id": {
                        const a = r.params;
                        if (!n.isArgon2idOptions(a)) throw new Error("Invalid format of argon2id params");
                        return n.Argon2id.execute(e, t.cosmjsSalt, a)
                    }
                    default:
                        throw new Error("Unsupported KDF algorithm")
                }
            }, t.supportedAlgorithms = {
                xchacha20poly1305Ietf: "xchacha20poly1305-ietf"
            }, t.encrypt = async function(e, r, a) {
                switch (a.algorithm) {
                    case t.supportedAlgorithms.xchacha20poly1305Ietf: {
                        const t = n.Random.getBytes(n.xchacha20NonceLength);
                        return new Uint8Array([...t, ...await n.Xchacha20poly1305Ietf.encrypt(e, r, t)])
                    }
                    default:
                        throw new Error(`Unsupported encryption algorithm: '${a.algorithm}'`)
                }
            }, t.decrypt = async function(e, r, a) {
                switch (a.algorithm) {
                    case t.supportedAlgorithms.xchacha20poly1305Ietf: {
                        const t = e.slice(0, n.xchacha20NonceLength);
                        return n.Xchacha20poly1305Ietf.decrypt(e.slice(n.xchacha20NonceLength), r, t)
                    }
                    default:
                        throw new Error(`Unsupported encryption algorithm: '${a.algorithm}'`)
                }
            }
        },
        2031: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.decrypt = t.encrypt = t.supportedAlgorithms = t.executeKdf = t.cosmjsSalt = void 0;
            const n = r(184),
                a = r(68);
            t.cosmjsSalt = a.toAscii("The CosmJS salt."), t.executeKdf = async function(e, r) {
                switch (r.algorithm) {
                    case "argon2id": {
                        const a = r.params;
                        if (!n.isArgon2idOptions(a)) throw new Error("Invalid format of argon2id params");
                        return n.Argon2id.execute(e, t.cosmjsSalt, a)
                    }
                    default:
                        throw new Error("Unsupported KDF algorithm")
                }
            }, t.supportedAlgorithms = {
                xchacha20poly1305Ietf: "xchacha20poly1305-ietf"
            }, t.encrypt = async function(e, r, a) {
                switch (a.algorithm) {
                    case t.supportedAlgorithms.xchacha20poly1305Ietf: {
                        const t = n.Random.getBytes(n.xchacha20NonceLength);
                        return new Uint8Array([...t, ...await n.Xchacha20poly1305Ietf.encrypt(e, r, t)])
                    }
                    default:
                        throw new Error(`Unsupported encryption algorithm: '${a.algorithm}'`)
                }
            }, t.decrypt = async function(e, r, a) {
                switch (a.algorithm) {
                    case t.supportedAlgorithms.xchacha20poly1305Ietf: {
                        const t = e.slice(0, n.xchacha20NonceLength);
                        return n.Xchacha20poly1305Ietf.decrypt(e.slice(n.xchacha20NonceLength), r, t)
                    }
                    default:
                        throw new Error(`Unsupported encryption algorithm: '${a.algorithm}'`)
                }
            }
        },
        2051: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.jsonRpcCode = t.isJsonRpcSuccessResponse = t.isJsonRpcErrorResponse = t.parseJsonRpcSuccessResponse = t.parseJsonRpcErrorResponse = t.parseJsonRpcResponse = t.parseJsonRpcRequest = t.parseJsonRpcId = t.JsonRpcClient = t.makeJsonRpcId = void 0;
            var n = r(4342);
            Object.defineProperty(t, "makeJsonRpcId", {
                enumerable: !0,
                get: function() {
                    return n.makeJsonRpcId
                }
            });
            var a = r(4343);
            Object.defineProperty(t, "JsonRpcClient", {
                enumerable: !0,
                get: function() {
                    return a.JsonRpcClient
                }
            });
            var s = r(4344);
            Object.defineProperty(t, "parseJsonRpcId", {
                enumerable: !0,
                get: function() {
                    return s.parseJsonRpcId
                }
            }), Object.defineProperty(t, "parseJsonRpcRequest", {
                enumerable: !0,
                get: function() {
                    return s.parseJsonRpcRequest
                }
            }), Object.defineProperty(t, "parseJsonRpcResponse", {
                enumerable: !0,
                get: function() {
                    return s.parseJsonRpcResponse
                }
            }), Object.defineProperty(t, "parseJsonRpcErrorResponse", {
                enumerable: !0,
                get: function() {
                    return s.parseJsonRpcErrorResponse
                }
            }), Object.defineProperty(t, "parseJsonRpcSuccessResponse", {
                enumerable: !0,
                get: function() {
                    return s.parseJsonRpcSuccessResponse
                }
            });
            var o = r(2052);
            Object.defineProperty(t, "isJsonRpcErrorResponse", {
                enumerable: !0,
                get: function() {
                    return o.isJsonRpcErrorResponse
                }
            }), Object.defineProperty(t, "isJsonRpcSuccessResponse", {
                enumerable: !0,
                get: function() {
                    return o.isJsonRpcSuccessResponse
                }
            }), Object.defineProperty(t, "jsonRpcCode", {
                enumerable: !0,
                get: function() {
                    return o.jsonRpcCode
                }
            })
        },
        2052: function(e, t, r) {
            "use strict";

            function n(e) {
                return "object" == typeof e.error
            }
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.jsonRpcCode = t.isJsonRpcSuccessResponse = t.isJsonRpcErrorResponse = void 0, t.isJsonRpcErrorResponse = n, t.isJsonRpcSuccessResponse = function(e) {
                return !n(e)
            }, t.jsonRpcCode = {
                parseError: -32700,
                invalidRequest: -32600,
                methodNotFound: -32601,
                invalidParams: -32602,
                internalError: -32603,
                serverError: {
                    default: -32e3
                }
            }
        },
        356: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.executeKdf = t.serializeSignDoc = t.makeSignDoc = t.encodeSecp256k1Signature = t.decodeSignature = t.Secp256k1Wallet = t.Secp256k1HdWallet = t.extractKdfConfiguration = t.makeCosmoshubPath = t.createMultisigThresholdPubkey = t.pubkeyType = t.isSinglePubkey = t.isSecp256k1Pubkey = t.isEd25519Pubkey = t.isMultisigThresholdPubkey = t.encodeSecp256k1Pubkey = t.encodeBech32Pubkey = t.encodeAminoPubkey = t.decodeBech32Pubkey = t.decodeAminoPubkey = t.parseCoins = t.coins = t.coin = t.rawSecp256k1PubkeyToRawAddress = t.rawEd25519PubkeyToRawAddress = t.pubkeyToRawAddress = t.pubkeyToAddress = void 0;
            var n = r(672);
            Object.defineProperty(t, "pubkeyToAddress", {
                enumerable: !0,
                get: function() {
                    return n.pubkeyToAddress
                }
            }), Object.defineProperty(t, "pubkeyToRawAddress", {
                enumerable: !0,
                get: function() {
                    return n.pubkeyToRawAddress
                }
            }), Object.defineProperty(t, "rawEd25519PubkeyToRawAddress", {
                enumerable: !0,
                get: function() {
                    return n.rawEd25519PubkeyToRawAddress
                }
            }), Object.defineProperty(t, "rawSecp256k1PubkeyToRawAddress", {
                enumerable: !0,
                get: function() {
                    return n.rawSecp256k1PubkeyToRawAddress
                }
            });
            var a = r(4275);
            Object.defineProperty(t, "coin", {
                enumerable: !0,
                get: function() {
                    return a.coin
                }
            }), Object.defineProperty(t, "coins", {
                enumerable: !0,
                get: function() {
                    return a.coins
                }
            }), Object.defineProperty(t, "parseCoins", {
                enumerable: !0,
                get: function() {
                    return a.parseCoins
                }
            });
            var s = r(1141);
            Object.defineProperty(t, "decodeAminoPubkey", {
                enumerable: !0,
                get: function() {
                    return s.decodeAminoPubkey
                }
            }), Object.defineProperty(t, "decodeBech32Pubkey", {
                enumerable: !0,
                get: function() {
                    return s.decodeBech32Pubkey
                }
            }), Object.defineProperty(t, "encodeAminoPubkey", {
                enumerable: !0,
                get: function() {
                    return s.encodeAminoPubkey
                }
            }), Object.defineProperty(t, "encodeBech32Pubkey", {
                enumerable: !0,
                get: function() {
                    return s.encodeBech32Pubkey
                }
            }), Object.defineProperty(t, "encodeSecp256k1Pubkey", {
                enumerable: !0,
                get: function() {
                    return s.encodeSecp256k1Pubkey
                }
            });
            var o = r(673);
            Object.defineProperty(t, "isMultisigThresholdPubkey", {
                enumerable: !0,
                get: function() {
                    return o.isMultisigThresholdPubkey
                }
            }), Object.defineProperty(t, "isEd25519Pubkey", {
                enumerable: !0,
                get: function() {
                    return o.isEd25519Pubkey
                }
            }), Object.defineProperty(t, "isSecp256k1Pubkey", {
                enumerable: !0,
                get: function() {
                    return o.isSecp256k1Pubkey
                }
            }), Object.defineProperty(t, "isSinglePubkey", {
                enumerable: !0,
                get: function() {
                    return o.isSinglePubkey
                }
            }), Object.defineProperty(t, "pubkeyType", {
                enumerable: !0,
                get: function() {
                    return o.pubkeyType
                }
            });
            var i = r(4276);
            Object.defineProperty(t, "createMultisigThresholdPubkey", {
                enumerable: !0,
                get: function() {
                    return i.createMultisigThresholdPubkey
                }
            });
            var c = r(2027);
            Object.defineProperty(t, "makeCosmoshubPath", {
                enumerable: !0,
                get: function() {
                    return c.makeCosmoshubPath
                }
            });
            var _ = r(4277);
            Object.defineProperty(t, "extractKdfConfiguration", {
                enumerable: !0,
                get: function() {
                    return _.extractKdfConfiguration
                }
            }), Object.defineProperty(t, "Secp256k1HdWallet", {
                enumerable: !0,
                get: function() {
                    return _.Secp256k1HdWallet
                }
            });
            var u = r(4278);
            Object.defineProperty(t, "Secp256k1Wallet", {
                enumerable: !0,
                get: function() {
                    return u.Secp256k1Wallet
                }
            });
            var p = r(1142);
            Object.defineProperty(t, "decodeSignature", {
                enumerable: !0,
                get: function() {
                    return p.decodeSignature
                }
            }), Object.defineProperty(t, "encodeSecp256k1Signature", {
                enumerable: !0,
                get: function() {
                    return p.encodeSecp256k1Signature
                }
            });
            var h = r(1143);
            Object.defineProperty(t, "makeSignDoc", {
                enumerable: !0,
                get: function() {
                    return h.makeSignDoc
                }
            }), Object.defineProperty(t, "serializeSignDoc", {
                enumerable: !0,
                get: function() {
                    return h.serializeSignDoc
                }
            });
            var l = r(2028);
            Object.defineProperty(t, "executeKdf", {
                enumerable: !0,
                get: function() {
                    return l.executeKdf
                }
            })
        },
        4254: function(e, t, r) {
            "use strict";
            var n = this && this.__createBinding || (Object.create ? function(e, t, r, n) {
                    void 0 === n && (n = r), Object.defineProperty(e, n, {
                        enumerable: !0,
                        get: function() {
                            return t[r]
                        }
                    })
                } : function(e, t, r, n) {
                    void 0 === n && (n = r), e[n] = t[r]
                }),
                a = this && this.__setModuleDefault || (Object.create ? function(e, t) {
                    Object.defineProperty(e, "default", {
                        enumerable: !0,
                        value: t
                    })
                } : function(e, t) {
                    e.default = t
                }),
                s = this && this.__importStar || function(e) {
                    if (e && e.__esModule) return e;
                    var t = {};
                    if (null != e)
                        for (var r in e) "default" !== r && Object.prototype.hasOwnProperty.call(e, r) && n(t, e, r);
                    return a(t, e), t
                };
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.Bip39 = void 0;
            const o = r(68),
                i = s(r(555)),
                c = r(2023);
            t.Bip39 = class Bip39 {
                static encode(e) {
                    if (-1 === [16, 20, 24, 28, 32].indexOf(e.length)) throw new Error("invalid input length");
                    return new c.EnglishMnemonic(i.entropyToMnemonic(o.toHex(e)))
                }
                static decode(e) {
                    return o.fromHex(i.mnemonicToEntropy(e.toString()))
                }
                static async mnemonicToSeed(e, t) {
                    return new Uint8Array(await i.mnemonicToSeed(e.toString(), t))
                }
            }
        },
        4255: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.fromAscii = t.toAscii = void 0, t.toAscii = function(e) {
                return Uint8Array.from(e.split("").map(e => {
                    const t = e.charCodeAt(0);
                    if (t < 32 || t > 126) throw new Error("Cannot encode character that is out of printable ASCII range: " + t);
                    return t
                }))
            }, t.fromAscii = function(e) {
                return (t = Array.from(e), t.map(e => {
                    if (e < 32 || e > 126) throw new Error("Cannot decode character that is out of printable ASCII range: " + e);
                    return String.fromCharCode(e)
                })).join("");
                var t
            }
        },
        4256: function(e, t, r) {
            "use strict";
            var n = this && this.__createBinding || (Object.create ? function(e, t, r, n) {
                    void 0 === n && (n = r), Object.defineProperty(e, n, {
                        enumerable: !0,
                        get: function() {
                            return t[r]
                        }
                    })
                } : function(e, t, r, n) {
                    void 0 === n && (n = r), e[n] = t[r]
                }),
                a = this && this.__setModuleDefault || (Object.create ? function(e, t) {
                    Object.defineProperty(e, "default", {
                        enumerable: !0,
                        value: t
                    })
                } : function(e, t) {
                    e.default = t
                }),
                s = this && this.__importStar || function(e) {
                    if (e && e.__esModule) return e;
                    var t = {};
                    if (null != e)
                        for (var r in e) "default" !== r && Object.prototype.hasOwnProperty.call(e, r) && n(t, e, r);
                    return a(t, e), t
                };
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.fromBase64 = t.toBase64 = void 0;
            const o = s(r(2342));
            t.toBase64 = function(e) {
                return o.fromByteArray(e)
            }, t.fromBase64 = function(e) {
                if (!e.match(/^[a-zA-Z0-9+/]*={0,2}$/)) throw new Error("Invalid base64 string format");
                return o.toByteArray(e)
            }
        },
        4257: function(e, t, r) {
            "use strict";
            var n = this && this.__createBinding || (Object.create ? function(e, t, r, n) {
                    void 0 === n && (n = r), Object.defineProperty(e, n, {
                        enumerable: !0,
                        get: function() {
                            return t[r]
                        }
                    })
                } : function(e, t, r, n) {
                    void 0 === n && (n = r), e[n] = t[r]
                }),
                a = this && this.__setModuleDefault || (Object.create ? function(e, t) {
                    Object.defineProperty(e, "default", {
                        enumerable: !0,
                        value: t
                    })
                } : function(e, t) {
                    e.default = t
                }),
                s = this && this.__importStar || function(e) {
                    if (e && e.__esModule) return e;
                    var t = {};
                    if (null != e)
                        for (var r in e) "default" !== r && Object.prototype.hasOwnProperty.call(e, r) && n(t, e, r);
                    return a(t, e), t
                };
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.Bech32 = void 0;
            const o = s(r(322));
            t.Bech32 = class Bech32 {
                static encode(e, t, r) {
                    return o.encode(e, o.toWords(t), r)
                }
                static decode(e, t = 1 / 0) {
                    const r = o.decode(e, t);
                    return {
                        prefix: r.prefix,
                        data: new Uint8Array(o.fromWords(r.words))
                    }
                }
            }
        },
        4258: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.fromHex = t.toHex = void 0, t.toHex = function(e) {
                let t = "";
                for (const r of e) t += ("0" + r.toString(16)).slice(-2);
                return t
            }, t.fromHex = function(e) {
                if (e.length % 2 != 0) throw new Error("hex string length must be a multiple of 2");
                const t = [];
                for (let r = 0; r < e.length; r += 2) {
                    const n = e.substr(r, 2);
                    if (!n.match(/[0-9a-f]{2}/i)) throw new Error("hex string contains invalid characters");
                    t.push(parseInt(n, 16))
                }
                return new Uint8Array(t)
            }
        },
        4259: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.toRfc3339 = t.fromRfc3339 = void 0;
            const n = /^(\d{4})-(\d{2})-(\d{2})[T ](\d{2}):(\d{2}):(\d{2})(\.\d{1,9})?((?:[+-]\d{2}:\d{2})|Z)$/;

            function a(e, t = 2) {
                const r = "00000" + e.toString();
                return r.substring(r.length - t)
            }
            t.fromRfc3339 = function(e) {
                const t = n.exec(e);
                if (!t) throw new Error("Date string is not in RFC3339 format");
                const r = +t[1],
                    a = +t[2],
                    s = +t[3],
                    o = +t[4],
                    i = +t[5],
                    c = +t[6],
                    _ = t[7] ? Math.floor(1e3 * +t[7]) : 0;
                let u, p, h;
                "Z" === t[8] ? (u = 1, p = 0, h = 0) : (u = "-" === t[8].substring(0, 1) ? -1 : 1, p = +t[8].substring(1, 3), h = +t[8].substring(4, 6));
                const l = u * (60 * p + h) * 60,
                    y = Date.UTC(r, a - 1, s, o, i, c, _) - 1e3 * l;
                return new Date(y)
            }, t.toRfc3339 = function(e) {
                return `${e.getUTCFullYear()}-${a(e.getUTCMonth()+1)}-${a(e.getUTCDate())}T${a(e.getUTCHours())}:${a(e.getUTCMinutes())}:${a(e.getUTCSeconds())}.${a(e.getUTCMilliseconds(),3)}Z`
            }
        },
        4260: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.fromUtf8 = t.toUtf8 = void 0, t.toUtf8 = function(e) {
                return (new TextEncoder).encode(e)
            }, t.fromUtf8 = function(e) {
                return new TextDecoder("utf-8", {
                    fatal: !0
                }).decode(e)
            }
        },
        4261: function(e, t, r) {
            "use strict";
            var n = this && this.__importDefault || function(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            };
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.keccak256 = t.Keccak256 = void 0;
            const a = n(r(465));
            class Keccak256 {
                constructor(e) {
                    this.blockSize = 64, this.impl = a.default.keccak256.create(), e && this.update(e)
                }
                update(e) {
                    return this.impl.update(e), this
                }
                digest() {
                    return new Uint8Array(this.impl.digest())
                }
            }
            t.Keccak256 = Keccak256, t.keccak256 = function(e) {
                return new Keccak256(e).digest()
            }
        },
        4262: function(e, t, r) {
            "use strict";
            var n = this && this.__importDefault || function(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            };
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.Xchacha20poly1305Ietf = t.xchacha20NonceLength = t.Ed25519 = t.Ed25519Keypair = t.Argon2id = t.isArgon2idOptions = void 0;
            const a = r(185),
                s = n(r(4267));
            t.isArgon2idOptions = function(e) {
                return !!a.isNonNullObject(e) && ("number" == typeof e.outputLength && ("number" == typeof e.opsLimit && "number" == typeof e.memLimitKib))
            };
            t.Argon2id = class Argon2id {
                static async execute(e, t, r) {
                    return await s.default.ready, s.default.crypto_pwhash(r.outputLength, e, t, r.opsLimit, 1024 * r.memLimitKib, s.default.crypto_pwhash_ALG_ARGON2ID13)
                }
            };
            class Ed25519Keypair {
                constructor(e, t) {
                    this.privkey = e, this.pubkey = t
                }
                static fromLibsodiumPrivkey(e) {
                    if (64 !== e.length) throw new Error(`Unexpected key length ${e.length}. Must be 64.`);
                    return new Ed25519Keypair(e.slice(0, 32), e.slice(32, 64))
                }
                toLibsodiumPrivkey() {
                    return new Uint8Array([...this.privkey, ...this.pubkey])
                }
            }
            t.Ed25519Keypair = Ed25519Keypair;
            t.Ed25519 = class Ed25519 {
                static async makeKeypair(e) {
                    await s.default.ready;
                    const t = s.default.crypto_sign_seed_keypair(e);
                    return Ed25519Keypair.fromLibsodiumPrivkey(t.privateKey)
                }
                static async createSignature(e, t) {
                    return await s.default.ready, s.default.crypto_sign_detached(e, t.toLibsodiumPrivkey())
                }
                static async verifySignature(e, t, r) {
                    return await s.default.ready, s.default.crypto_sign_verify_detached(e, t, r)
                }
            }, t.xchacha20NonceLength = 24;
            t.Xchacha20poly1305Ietf = class Xchacha20poly1305Ietf {
                static async encrypt(e, t, r) {
                    await s.default.ready;
                    return s.default.crypto_aead_xchacha20poly1305_ietf_encrypt(e, null, null, r, t)
                }
                static async decrypt(e, t, r) {
                    await s.default.ready;
                    return s.default.crypto_aead_xchacha20poly1305_ietf_decrypt(null, e, null, r, t)
                }
            }
        },
        4267: function(e, t, r) {
            var n, a, s, o, i;
            i = "object" == typeof(o = this).sodium && "function" == typeof o.sodium.onload ? o.sodium.onload : null, a = [t, r(4268)], void 0 !== (s = "function" == typeof(n = function(e, t) {
                "use strict";
                var r, n = t.ready.then((function() {
                    function n() {
                        if (0 !== r._sodium_init()) throw new Error("libsodium was not correctly initialized.");
                        for (var t = ["crypto_aead_chacha20poly1305_decrypt", "crypto_aead_chacha20poly1305_decrypt_detached", "crypto_aead_chacha20poly1305_encrypt", "crypto_aead_chacha20poly1305_encrypt_detached", "crypto_aead_chacha20poly1305_ietf_decrypt", "crypto_aead_chacha20poly1305_ietf_decrypt_detached", "crypto_aead_chacha20poly1305_ietf_encrypt", "crypto_aead_chacha20poly1305_ietf_encrypt_detached", "crypto_aead_chacha20poly1305_ietf_keygen", "crypto_aead_chacha20poly1305_keygen", "crypto_aead_xchacha20poly1305_ietf_decrypt", "crypto_aead_xchacha20poly1305_ietf_decrypt_detached", "crypto_aead_xchacha20poly1305_ietf_encrypt", "crypto_aead_xchacha20poly1305_ietf_encrypt_detached", "crypto_aead_xchacha20poly1305_ietf_keygen", "crypto_auth", "crypto_auth_hmacsha256", "crypto_auth_hmacsha256_final", "crypto_auth_hmacsha256_init", "crypto_auth_hmacsha256_keygen", "crypto_auth_hmacsha256_update", "crypto_auth_hmacsha256_verify", "crypto_auth_hmacsha512", "crypto_auth_hmacsha512_final", "crypto_auth_hmacsha512_init", "crypto_auth_hmacsha512_keygen", "crypto_auth_hmacsha512_update", "crypto_auth_hmacsha512_verify", "crypto_auth_keygen", "crypto_auth_verify", "crypto_box_beforenm", "crypto_box_curve25519xchacha20poly1305_keypair", "crypto_box_curve25519xchacha20poly1305_seal", "crypto_box_curve25519xchacha20poly1305_seal_open", "crypto_box_detached", "crypto_box_easy", "crypto_box_easy_afternm", "crypto_box_keypair", "crypto_box_open_detached", "crypto_box_open_easy", "crypto_box_open_easy_afternm", "crypto_box_seal", "crypto_box_seal_open", "crypto_box_seed_keypair", "crypto_core_ed25519_add", "crypto_core_ed25519_from_hash", "crypto_core_ed25519_from_uniform", "crypto_core_ed25519_is_valid_point", "crypto_core_ed25519_random", "crypto_core_ed25519_scalar_add", "crypto_core_ed25519_scalar_complement", "crypto_core_ed25519_scalar_invert", "crypto_core_ed25519_scalar_mul", "crypto_core_ed25519_scalar_negate", "crypto_core_ed25519_scalar_random", "crypto_core_ed25519_scalar_reduce", "crypto_core_ed25519_scalar_sub", "crypto_core_ed25519_sub", "crypto_core_hchacha20", "crypto_core_hsalsa20", "crypto_core_ristretto255_add", "crypto_core_ristretto255_from_hash", "crypto_core_ristretto255_is_valid_point", "crypto_core_ristretto255_random", "crypto_core_ristretto255_scalar_add", "crypto_core_ristretto255_scalar_complement", "crypto_core_ristretto255_scalar_invert", "crypto_core_ristretto255_scalar_mul", "crypto_core_ristretto255_scalar_negate", "crypto_core_ristretto255_scalar_random", "crypto_core_ristretto255_scalar_reduce", "crypto_core_ristretto255_scalar_sub", "crypto_core_ristretto255_sub", "crypto_generichash", "crypto_generichash_blake2b_salt_personal", "crypto_generichash_final", "crypto_generichash_init", "crypto_generichash_keygen", "crypto_generichash_update", "crypto_hash", "crypto_hash_sha256", "crypto_hash_sha256_final", "crypto_hash_sha256_init", "crypto_hash_sha256_update", "crypto_hash_sha512", "crypto_hash_sha512_final", "crypto_hash_sha512_init", "crypto_hash_sha512_update", "crypto_kdf_derive_from_key", "crypto_kdf_keygen", "crypto_kx_client_session_keys", "crypto_kx_keypair", "crypto_kx_seed_keypair", "crypto_kx_server_session_keys", "crypto_onetimeauth", "crypto_onetimeauth_final", "crypto_onetimeauth_init", "crypto_onetimeauth_keygen", "crypto_onetimeauth_update", "crypto_onetimeauth_verify", "crypto_pwhash", "crypto_pwhash_scryptsalsa208sha256", "crypto_pwhash_scryptsalsa208sha256_ll", "crypto_pwhash_scryptsalsa208sha256_str", "crypto_pwhash_scryptsalsa208sha256_str_verify", "crypto_pwhash_str", "crypto_pwhash_str_needs_rehash", "crypto_pwhash_str_verify", "crypto_scalarmult", "crypto_scalarmult_base", "crypto_scalarmult_ed25519", "crypto_scalarmult_ed25519_base", "crypto_scalarmult_ed25519_base_noclamp", "crypto_scalarmult_ed25519_noclamp", "crypto_scalarmult_ristretto255", "crypto_scalarmult_ristretto255_base", "crypto_secretbox_detached", "crypto_secretbox_easy", "crypto_secretbox_keygen", "crypto_secretbox_open_detached", "crypto_secretbox_open_easy", "crypto_secretstream_xchacha20poly1305_init_pull", "crypto_secretstream_xchacha20poly1305_init_push", "crypto_secretstream_xchacha20poly1305_keygen", "crypto_secretstream_xchacha20poly1305_pull", "crypto_secretstream_xchacha20poly1305_push", "crypto_secretstream_xchacha20poly1305_rekey", "crypto_shorthash", "crypto_shorthash_keygen", "crypto_shorthash_siphashx24", "crypto_sign", "crypto_sign_detached", "crypto_sign_ed25519_pk_to_curve25519", "crypto_sign_ed25519_sk_to_curve25519", "crypto_sign_ed25519_sk_to_pk", "crypto_sign_ed25519_sk_to_seed", "crypto_sign_final_create", "crypto_sign_final_verify", "crypto_sign_init", "crypto_sign_keypair", "crypto_sign_open", "crypto_sign_seed_keypair", "crypto_sign_update", "crypto_sign_verify_detached", "crypto_stream_chacha20", "crypto_stream_chacha20_ietf_xor", "crypto_stream_chacha20_ietf_xor_ic", "crypto_stream_chacha20_keygen", "crypto_stream_chacha20_xor", "crypto_stream_chacha20_xor_ic", "crypto_stream_keygen", "crypto_stream_xchacha20_keygen", "crypto_stream_xchacha20_xor", "crypto_stream_xchacha20_xor_ic", "randombytes_buf", "randombytes_buf_deterministic", "randombytes_close", "randombytes_random", "randombytes_set_implementation", "randombytes_stir", "randombytes_uniform", "sodium_version_string"], n = [w, k, S, E, x, T, P, A, B, O, M, I, Y, R, j, K, U, N, C, D, F, L, J, G, H, W, z, X, $, V, q, Z, Q, ee, te, re, ne, ae, se, oe, ie, ce, _e, ue, pe, he, le, ye, de, fe, ge, ve, be, me, we, ke, Se, Ee, xe, Te, Pe, Ae, Be, Oe, Me, Ie, Ye, Re, je, Ke, Ue, Ne, Ce, De, Fe, Le, Je, Ge, He, We, ze, Xe, $e, Ve, qe, Ze, Qe, et, tt, rt, nt, at, st, ot, it, ct, _t, ut, pt, ht, lt, yt, dt, ft, gt, vt, bt, mt, wt, kt, St, Et, xt, Tt, Pt, At, Bt, Ot, Mt, It, Yt, Rt, jt, Kt, Ut, Nt, Ct, Dt, Ft, Lt, Jt, Gt, Ht, Wt, zt, Xt, $t, Vt, qt, Zt, Qt, er, tr, rr, nr, ar, sr, or, ir, cr, _r, ur, pr, hr, lr, yr, dr, fr, gr, vr, br, mr], a = 0; a < n.length; a++) "function" == typeof r["_" + t[a]] && (e[t[a]] = n[a]);
                        var s = ["SODIUM_LIBRARY_VERSION_MAJOR", "SODIUM_LIBRARY_VERSION_MINOR", "crypto_aead_chacha20poly1305_ABYTES", "crypto_aead_chacha20poly1305_IETF_ABYTES", "crypto_aead_chacha20poly1305_IETF_KEYBYTES", "crypto_aead_chacha20poly1305_IETF_MESSAGEBYTES_MAX", "crypto_aead_chacha20poly1305_IETF_NPUBBYTES", "crypto_aead_chacha20poly1305_IETF_NSECBYTES", "crypto_aead_chacha20poly1305_KEYBYTES", "crypto_aead_chacha20poly1305_MESSAGEBYTES_MAX", "crypto_aead_chacha20poly1305_NPUBBYTES", "crypto_aead_chacha20poly1305_NSECBYTES", "crypto_aead_chacha20poly1305_ietf_ABYTES", "crypto_aead_chacha20poly1305_ietf_KEYBYTES", "crypto_aead_chacha20poly1305_ietf_MESSAGEBYTES_MAX", "crypto_aead_chacha20poly1305_ietf_NPUBBYTES", "crypto_aead_chacha20poly1305_ietf_NSECBYTES", "crypto_aead_xchacha20poly1305_IETF_ABYTES", "crypto_aead_xchacha20poly1305_IETF_KEYBYTES", "crypto_aead_xchacha20poly1305_IETF_MESSAGEBYTES_MAX", "crypto_aead_xchacha20poly1305_IETF_NPUBBYTES", "crypto_aead_xchacha20poly1305_IETF_NSECBYTES", "crypto_aead_xchacha20poly1305_ietf_ABYTES", "crypto_aead_xchacha20poly1305_ietf_KEYBYTES", "crypto_aead_xchacha20poly1305_ietf_MESSAGEBYTES_MAX", "crypto_aead_xchacha20poly1305_ietf_NPUBBYTES", "crypto_aead_xchacha20poly1305_ietf_NSECBYTES", "crypto_auth_BYTES", "crypto_auth_KEYBYTES", "crypto_auth_hmacsha256_BYTES", "crypto_auth_hmacsha256_KEYBYTES", "crypto_auth_hmacsha512256_BYTES", "crypto_auth_hmacsha512256_KEYBYTES", "crypto_auth_hmacsha512_BYTES", "crypto_auth_hmacsha512_KEYBYTES", "crypto_box_BEFORENMBYTES", "crypto_box_MACBYTES", "crypto_box_MESSAGEBYTES_MAX", "crypto_box_NONCEBYTES", "crypto_box_PUBLICKEYBYTES", "crypto_box_SEALBYTES", "crypto_box_SECRETKEYBYTES", "crypto_box_SEEDBYTES", "crypto_box_curve25519xchacha20poly1305_BEFORENMBYTES", "crypto_box_curve25519xchacha20poly1305_MACBYTES", "crypto_box_curve25519xchacha20poly1305_MESSAGEBYTES_MAX", "crypto_box_curve25519xchacha20poly1305_NONCEBYTES", "crypto_box_curve25519xchacha20poly1305_PUBLICKEYBYTES", "crypto_box_curve25519xchacha20poly1305_SEALBYTES", "crypto_box_curve25519xchacha20poly1305_SECRETKEYBYTES", "crypto_box_curve25519xchacha20poly1305_SEEDBYTES", "crypto_box_curve25519xsalsa20poly1305_BEFORENMBYTES", "crypto_box_curve25519xsalsa20poly1305_MACBYTES", "crypto_box_curve25519xsalsa20poly1305_MESSAGEBYTES_MAX", "crypto_box_curve25519xsalsa20poly1305_NONCEBYTES", "crypto_box_curve25519xsalsa20poly1305_PUBLICKEYBYTES", "crypto_box_curve25519xsalsa20poly1305_SECRETKEYBYTES", "crypto_box_curve25519xsalsa20poly1305_SEEDBYTES", "crypto_core_ed25519_BYTES", "crypto_core_ed25519_HASHBYTES", "crypto_core_ed25519_NONREDUCEDSCALARBYTES", "crypto_core_ed25519_SCALARBYTES", "crypto_core_ed25519_UNIFORMBYTES", "crypto_core_hchacha20_CONSTBYTES", "crypto_core_hchacha20_INPUTBYTES", "crypto_core_hchacha20_KEYBYTES", "crypto_core_hchacha20_OUTPUTBYTES", "crypto_core_hsalsa20_CONSTBYTES", "crypto_core_hsalsa20_INPUTBYTES", "crypto_core_hsalsa20_KEYBYTES", "crypto_core_hsalsa20_OUTPUTBYTES", "crypto_core_ristretto255_BYTES", "crypto_core_ristretto255_HASHBYTES", "crypto_core_ristretto255_NONREDUCEDSCALARBYTES", "crypto_core_ristretto255_SCALARBYTES", "crypto_core_salsa2012_CONSTBYTES", "crypto_core_salsa2012_INPUTBYTES", "crypto_core_salsa2012_KEYBYTES", "crypto_core_salsa2012_OUTPUTBYTES", "crypto_core_salsa20_CONSTBYTES", "crypto_core_salsa20_INPUTBYTES", "crypto_core_salsa20_KEYBYTES", "crypto_core_salsa20_OUTPUTBYTES", "crypto_generichash_BYTES", "crypto_generichash_BYTES_MAX", "crypto_generichash_BYTES_MIN", "crypto_generichash_KEYBYTES", "crypto_generichash_KEYBYTES_MAX", "crypto_generichash_KEYBYTES_MIN", "crypto_generichash_blake2b_BYTES", "crypto_generichash_blake2b_BYTES_MAX", "crypto_generichash_blake2b_BYTES_MIN", "crypto_generichash_blake2b_KEYBYTES", "crypto_generichash_blake2b_KEYBYTES_MAX", "crypto_generichash_blake2b_KEYBYTES_MIN", "crypto_generichash_blake2b_PERSONALBYTES", "crypto_generichash_blake2b_SALTBYTES", "crypto_hash_BYTES", "crypto_hash_sha256_BYTES", "crypto_hash_sha512_BYTES", "crypto_kdf_BYTES_MAX", "crypto_kdf_BYTES_MIN", "crypto_kdf_CONTEXTBYTES", "crypto_kdf_KEYBYTES", "crypto_kdf_blake2b_BYTES_MAX", "crypto_kdf_blake2b_BYTES_MIN", "crypto_kdf_blake2b_CONTEXTBYTES", "crypto_kdf_blake2b_KEYBYTES", "crypto_kx_PUBLICKEYBYTES", "crypto_kx_SECRETKEYBYTES", "crypto_kx_SEEDBYTES", "crypto_kx_SESSIONKEYBYTES", "crypto_onetimeauth_BYTES", "crypto_onetimeauth_KEYBYTES", "crypto_onetimeauth_poly1305_BYTES", "crypto_onetimeauth_poly1305_KEYBYTES", "crypto_pwhash_ALG_ARGON2I13", "crypto_pwhash_ALG_ARGON2ID13", "crypto_pwhash_ALG_DEFAULT", "crypto_pwhash_BYTES_MAX", "crypto_pwhash_BYTES_MIN", "crypto_pwhash_MEMLIMIT_INTERACTIVE", "crypto_pwhash_MEMLIMIT_MAX", "crypto_pwhash_MEMLIMIT_MIN", "crypto_pwhash_MEMLIMIT_MODERATE", "crypto_pwhash_MEMLIMIT_SENSITIVE", "crypto_pwhash_OPSLIMIT_INTERACTIVE", "crypto_pwhash_OPSLIMIT_MAX", "crypto_pwhash_OPSLIMIT_MIN", "crypto_pwhash_OPSLIMIT_MODERATE", "crypto_pwhash_OPSLIMIT_SENSITIVE", "crypto_pwhash_PASSWD_MAX", "crypto_pwhash_PASSWD_MIN", "crypto_pwhash_SALTBYTES", "crypto_pwhash_STRBYTES", "crypto_pwhash_argon2i_BYTES_MAX", "crypto_pwhash_argon2i_BYTES_MIN", "crypto_pwhash_argon2i_SALTBYTES", "crypto_pwhash_argon2i_STRBYTES", "crypto_pwhash_argon2id_BYTES_MAX", "crypto_pwhash_argon2id_BYTES_MIN", "crypto_pwhash_argon2id_SALTBYTES", "crypto_pwhash_argon2id_STRBYTES", "crypto_pwhash_scryptsalsa208sha256_BYTES_MAX", "crypto_pwhash_scryptsalsa208sha256_BYTES_MIN", "crypto_pwhash_scryptsalsa208sha256_MEMLIMIT_INTERACTIVE", "crypto_pwhash_scryptsalsa208sha256_MEMLIMIT_MAX", "crypto_pwhash_scryptsalsa208sha256_MEMLIMIT_MIN", "crypto_pwhash_scryptsalsa208sha256_MEMLIMIT_SENSITIVE", "crypto_pwhash_scryptsalsa208sha256_OPSLIMIT_INTERACTIVE", "crypto_pwhash_scryptsalsa208sha256_OPSLIMIT_MAX", "crypto_pwhash_scryptsalsa208sha256_OPSLIMIT_MIN", "crypto_pwhash_scryptsalsa208sha256_OPSLIMIT_SENSITIVE", "crypto_pwhash_scryptsalsa208sha256_SALTBYTES", "crypto_pwhash_scryptsalsa208sha256_STRBYTES", "crypto_scalarmult_BYTES", "crypto_scalarmult_SCALARBYTES", "crypto_scalarmult_curve25519_BYTES", "crypto_scalarmult_curve25519_SCALARBYTES", "crypto_scalarmult_ed25519_BYTES", "crypto_scalarmult_ed25519_SCALARBYTES", "crypto_scalarmult_ristretto255_BYTES", "crypto_scalarmult_ristretto255_SCALARBYTES", "crypto_secretbox_KEYBYTES", "crypto_secretbox_MACBYTES", "crypto_secretbox_MESSAGEBYTES_MAX", "crypto_secretbox_NONCEBYTES", "crypto_secretbox_xchacha20poly1305_KEYBYTES", "crypto_secretbox_xchacha20poly1305_MACBYTES", "crypto_secretbox_xchacha20poly1305_MESSAGEBYTES_MAX", "crypto_secretbox_xchacha20poly1305_NONCEBYTES", "crypto_secretbox_xsalsa20poly1305_KEYBYTES", "crypto_secretbox_xsalsa20poly1305_MACBYTES", "crypto_secretbox_xsalsa20poly1305_MESSAGEBYTES_MAX", "crypto_secretbox_xsalsa20poly1305_NONCEBYTES", "crypto_secretstream_xchacha20poly1305_ABYTES", "crypto_secretstream_xchacha20poly1305_HEADERBYTES", "crypto_secretstream_xchacha20poly1305_KEYBYTES", "crypto_secretstream_xchacha20poly1305_MESSAGEBYTES_MAX", "crypto_secretstream_xchacha20poly1305_TAG_FINAL", "crypto_secretstream_xchacha20poly1305_TAG_MESSAGE", "crypto_secretstream_xchacha20poly1305_TAG_PUSH", "crypto_secretstream_xchacha20poly1305_TAG_REKEY", "crypto_shorthash_BYTES", "crypto_shorthash_KEYBYTES", "crypto_shorthash_siphash24_BYTES", "crypto_shorthash_siphash24_KEYBYTES", "crypto_shorthash_siphashx24_BYTES", "crypto_shorthash_siphashx24_KEYBYTES", "crypto_sign_BYTES", "crypto_sign_MESSAGEBYTES_MAX", "crypto_sign_PUBLICKEYBYTES", "crypto_sign_SECRETKEYBYTES", "crypto_sign_SEEDBYTES", "crypto_sign_ed25519_BYTES", "crypto_sign_ed25519_MESSAGEBYTES_MAX", "crypto_sign_ed25519_PUBLICKEYBYTES", "crypto_sign_ed25519_SECRETKEYBYTES", "crypto_sign_ed25519_SEEDBYTES", "crypto_stream_KEYBYTES", "crypto_stream_MESSAGEBYTES_MAX", "crypto_stream_NONCEBYTES", "crypto_stream_chacha20_IETF_KEYBYTES", "crypto_stream_chacha20_IETF_MESSAGEBYTES_MAX", "crypto_stream_chacha20_IETF_NONCEBYTES", "crypto_stream_chacha20_KEYBYTES", "crypto_stream_chacha20_MESSAGEBYTES_MAX", "crypto_stream_chacha20_NONCEBYTES", "crypto_stream_chacha20_ietf_KEYBYTES", "crypto_stream_chacha20_ietf_MESSAGEBYTES_MAX", "crypto_stream_chacha20_ietf_NONCEBYTES", "crypto_stream_salsa2012_KEYBYTES", "crypto_stream_salsa2012_MESSAGEBYTES_MAX", "crypto_stream_salsa2012_NONCEBYTES", "crypto_stream_salsa208_KEYBYTES", "crypto_stream_salsa208_MESSAGEBYTES_MAX", "crypto_stream_salsa208_NONCEBYTES", "crypto_stream_salsa20_KEYBYTES", "crypto_stream_salsa20_MESSAGEBYTES_MAX", "crypto_stream_salsa20_NONCEBYTES", "crypto_stream_xchacha20_KEYBYTES", "crypto_stream_xchacha20_MESSAGEBYTES_MAX", "crypto_stream_xchacha20_NONCEBYTES", "crypto_stream_xsalsa20_KEYBYTES", "crypto_stream_xsalsa20_MESSAGEBYTES_MAX", "crypto_stream_xsalsa20_NONCEBYTES", "crypto_verify_16_BYTES", "crypto_verify_32_BYTES", "crypto_verify_64_BYTES"];
                        for (a = 0; a < s.length; a++) "function" == typeof(i = r["_" + s[a].toLowerCase()]) && (e[s[a]] = i());
                        var o = ["SODIUM_VERSION_STRING", "crypto_pwhash_STRPREFIX", "crypto_pwhash_scryptsalsa208sha256_STRPREFIX"];
                        for (a = 0; a < o.length; a++) {
                            var i;
                            "function" == typeof(i = r["_" + o[a].toLowerCase()]) && (e[o[a]] = r.UTF8ToString(i()))
                        }
                    }
                    r = t;
                    try {
                        n();
                        var a = new Uint8Array([98, 97, 108, 108, 115]),
                            s = e.randombytes_buf(e.crypto_secretbox_NONCEBYTES),
                            o = e.randombytes_buf(e.crypto_secretbox_KEYBYTES),
                            i = e.crypto_secretbox_easy(a, s, o),
                            c = e.crypto_secretbox_open_easy(i, s, o);
                        if (e.memcmp(a, c)) return
                    } catch (e) {
                        if (null == r.useBackupModule) throw new Error("Both wasm and asm failed to load" + e)
                    }
                    r.useBackupModule(), n()
                }));

                function a(e) {
                    if ("function" == typeof TextEncoder) return (new TextEncoder).encode(e);
                    e = unescape(encodeURIComponent(e));
                    for (var t = new Uint8Array(e.length), r = 0, n = e.length; r < n; r++) t[r] = e.charCodeAt(r);
                    return t
                }

                function s(e) {
                    if ("function" == typeof TextDecoder) return new TextDecoder("utf-8", {
                        fatal: !0
                    }).decode(e);
                    var t = 8192,
                        r = Math.ceil(e.length / t);
                    if (r <= 1) try {
                        return decodeURIComponent(escape(String.fromCharCode.apply(null, e)))
                    } catch (e) {
                        throw new TypeError("The encoded data was not valid.")
                    }
                    for (var n = "", a = 0, o = 0; o < r; o++) {
                        var i = Array.prototype.slice.call(e, o * t + a, (o + 1) * t + a);
                        if (0 != i.length) {
                            var c, _ = i.length,
                                u = 0;
                            do {
                                var p = i[--_];
                                p >= 240 ? (u = 4, c = !0) : p >= 224 ? (u = 3, c = !0) : p >= 192 ? (u = 2, c = !0) : p < 128 && (u = 1, c = !0)
                            } while (!c);
                            for (var h = u - (i.length - _), l = 0; l < h; l++) a--, i.pop();
                            n += s(i)
                        }
                    }
                    return n
                }

                function o(e) {
                    e = m(null, e, "input");
                    for (var t, r, n, a = "", s = 0; s < e.length; s++) n = 87 + (r = 15 & e[s]) + (r - 10 >> 8 & -39) << 8 | 87 + (t = e[s] >>> 4) + (t - 10 >> 8 & -39), a += String.fromCharCode(255 & n) + String.fromCharCode(n >>> 8);
                    return a
                }
                var i = {
                    ORIGINAL: 1,
                    ORIGINAL_NO_PADDING: 3,
                    URLSAFE: 5,
                    URLSAFE_NO_PADDING: 7
                };

                function c(e) {
                    if (null == e) return i.URLSAFE_NO_PADDING;
                    if (e !== i.ORIGINAL && e !== i.ORIGINAL_NO_PADDING && e !== i.URLSAFE && e != i.URLSAFE_NO_PADDING) throw new Error("unsupported base64 variant");
                    return e
                }

                function _(e, t) {
                    t = c(t), e = m(a, e, "input");
                    var n, a = [],
                        o = 0 | Math.floor(e.length / 3),
                        i = e.length - 3 * o,
                        _ = 4 * o + (0 !== i ? 0 == (2 & t) ? 4 : 2 + (i >>> 1) : 0),
                        u = new l(_ + 1),
                        p = y(e);
                    return a.push(p), a.push(u.address), 0 === r._sodium_bin2base64(u.address, u.length, p, e.length, t) && g(a, "conversion failed"), u.length = _, n = s(u.to_Uint8Array()), f(a), n
                }

                function u(e, t) {
                    var r = t || "uint8array";
                    if (!p(r)) throw new Error(r + " output format is not available");
                    if (e instanceof l) {
                        if ("uint8array" === r) return e.to_Uint8Array();
                        if ("text" === r) return s(e.to_Uint8Array());
                        if ("hex" === r) return o(e.to_Uint8Array());
                        if ("base64" === r) return _(e.to_Uint8Array(), i.URLSAFE_NO_PADDING);
                        throw new Error('What is output format "' + r + '"?')
                    }
                    if ("object" == typeof e) {
                        for (var n = Object.keys(e), a = {}, c = 0; c < n.length; c++) a[n[c]] = u(e[n[c]], r);
                        return a
                    }
                    if ("string" == typeof e) return e;
                    throw new TypeError("Cannot format output")
                }

                function p(e) {
                    for (var t = ["uint8array", "text", "hex", "base64"], r = 0; r < t.length; r++)
                        if (t[r] === e) return !0;
                    return !1
                }

                function h(e) {
                    if (e) {
                        if ("string" != typeof e) throw new TypeError("When defined, the output format must be a string");
                        if (!p(e)) throw new Error(e + " is not a supported output format")
                    }
                }

                function l(e) {
                    this.length = e, this.address = d(e)
                }

                function y(e) {
                    var t = d(e.length);
                    return r.HEAPU8.set(e, t), t
                }

                function d(e) {
                    var t = r._malloc(e);
                    if (0 === t) throw {
                        message: "_malloc() failed",
                        length: e
                    };
                    return t
                }

                function f(e) {
                    if (e)
                        for (var t = 0; t < e.length; t++) n = e[t], r._free(n);
                    var n
                }

                function g(e, t) {
                    throw f(e), new Error(t)
                }

                function v(e, t) {
                    throw f(e), new TypeError(t)
                }

                function b(e, t, r) {
                    null == t && v(e, r + " cannot be null or undefined")
                }

                function m(e, t, r) {
                    return b(e, t, r), t instanceof Uint8Array ? t : "string" == typeof t ? a(t) : void v(e, "unsupported input type for " + r)
                }

                function w(e, t, n, a, s, o) {
                    var i = [];
                    h(o);
                    var c = null;
                    null != e && (c = y(e = m(i, e, "secret_nonce")), e.length, i.push(c)), t = m(i, t, "ciphertext");
                    var _, p = r._crypto_aead_chacha20poly1305_abytes(),
                        d = t.length;
                    d < p && v(i, "ciphertext is too short"), _ = y(t), i.push(_);
                    var b = null,
                        w = 0;
                    null != n && (b = y(n = m(i, n, "additional_data")), w = n.length, i.push(b)), a = m(i, a, "public_nonce");
                    var k, S = 0 | r._crypto_aead_chacha20poly1305_npubbytes();
                    a.length !== S && v(i, "invalid public_nonce length"), k = y(a), i.push(k), s = m(i, s, "key");
                    var E, x = 0 | r._crypto_aead_chacha20poly1305_keybytes();
                    s.length !== x && v(i, "invalid key length"), E = y(s), i.push(E);
                    var T = new l(d - r._crypto_aead_chacha20poly1305_abytes() | 0),
                        P = T.address;
                    if (i.push(P), 0 === r._crypto_aead_chacha20poly1305_decrypt(P, null, c, _, d, 0, b, w, 0, k, E)) {
                        var A = u(T, o);
                        return f(i), A
                    }
                    g(i, "ciphertext cannot be decrypted using that key")
                }

                function k(e, t, n, a, s, o, i) {
                    var c = [];
                    h(i);
                    var _ = null;
                    null != e && (_ = y(e = m(c, e, "secret_nonce")), e.length, c.push(_));
                    var p = y(t = m(c, t, "ciphertext")),
                        d = t.length;
                    c.push(p), n = m(c, n, "mac");
                    var b, w = 0 | r._crypto_box_macbytes();
                    n.length !== w && v(c, "invalid mac length"), b = y(n), c.push(b);
                    var k = null,
                        S = 0;
                    null != a && (k = y(a = m(c, a, "additional_data")), S = a.length, c.push(k)), s = m(c, s, "public_nonce");
                    var E, x = 0 | r._crypto_aead_chacha20poly1305_npubbytes();
                    s.length !== x && v(c, "invalid public_nonce length"), E = y(s), c.push(E), o = m(c, o, "key");
                    var T, P = 0 | r._crypto_aead_chacha20poly1305_keybytes();
                    o.length !== P && v(c, "invalid key length"), T = y(o), c.push(T);
                    var A = new l(0 | d),
                        B = A.address;
                    if (c.push(B), 0 === r._crypto_aead_chacha20poly1305_decrypt_detached(B, _, p, d, 0, b, k, S, 0, E, T)) {
                        var O = u(A, i);
                        return f(c), O
                    }
                    g(c, "ciphertext cannot be decrypted using that key")
                }

                function S(e, t, n, a, s, o) {
                    var i = [];
                    h(o);
                    var c = y(e = m(i, e, "message")),
                        _ = e.length;
                    i.push(c);
                    var p = null,
                        d = 0;
                    null != t && (p = y(t = m(i, t, "additional_data")), d = t.length, i.push(p));
                    var b = null;
                    null != n && (b = y(n = m(i, n, "secret_nonce")), n.length, i.push(b)), a = m(i, a, "public_nonce");
                    var w, k = 0 | r._crypto_aead_chacha20poly1305_npubbytes();
                    a.length !== k && v(i, "invalid public_nonce length"), w = y(a), i.push(w), s = m(i, s, "key");
                    var S, E = 0 | r._crypto_aead_chacha20poly1305_keybytes();
                    s.length !== E && v(i, "invalid key length"), S = y(s), i.push(S);
                    var x = new l(_ + r._crypto_aead_chacha20poly1305_abytes() | 0),
                        T = x.address;
                    if (i.push(T), 0 === r._crypto_aead_chacha20poly1305_encrypt(T, null, c, _, 0, p, d, 0, b, w, S)) {
                        var P = u(x, o);
                        return f(i), P
                    }
                    g(i, "invalid usage")
                }

                function E(e, t, n, a, s, o) {
                    var i = [];
                    h(o);
                    var c = y(e = m(i, e, "message")),
                        _ = e.length;
                    i.push(c);
                    var p = null,
                        d = 0;
                    null != t && (p = y(t = m(i, t, "additional_data")), d = t.length, i.push(p));
                    var b = null;
                    null != n && (b = y(n = m(i, n, "secret_nonce")), n.length, i.push(b)), a = m(i, a, "public_nonce");
                    var w, k = 0 | r._crypto_aead_chacha20poly1305_npubbytes();
                    a.length !== k && v(i, "invalid public_nonce length"), w = y(a), i.push(w), s = m(i, s, "key");
                    var S, E = 0 | r._crypto_aead_chacha20poly1305_keybytes();
                    s.length !== E && v(i, "invalid key length"), S = y(s), i.push(S);
                    var x = new l(0 | _),
                        T = x.address;
                    i.push(T);
                    var P = new l(0 | r._crypto_aead_chacha20poly1305_abytes()),
                        A = P.address;
                    if (i.push(A), 0 === r._crypto_aead_chacha20poly1305_encrypt_detached(T, A, null, c, _, 0, p, d, 0, b, w, S)) {
                        var B = u({
                            ciphertext: x,
                            mac: P
                        }, o);
                        return f(i), B
                    }
                    g(i, "invalid usage")
                }

                function x(e, t, n, a, s, o) {
                    var i = [];
                    h(o);
                    var c = null;
                    null != e && (c = y(e = m(i, e, "secret_nonce")), e.length, i.push(c)), t = m(i, t, "ciphertext");
                    var _, p = r._crypto_aead_chacha20poly1305_ietf_abytes(),
                        d = t.length;
                    d < p && v(i, "ciphertext is too short"), _ = y(t), i.push(_);
                    var b = null,
                        w = 0;
                    null != n && (b = y(n = m(i, n, "additional_data")), w = n.length, i.push(b)), a = m(i, a, "public_nonce");
                    var k, S = 0 | r._crypto_aead_chacha20poly1305_ietf_npubbytes();
                    a.length !== S && v(i, "invalid public_nonce length"), k = y(a), i.push(k), s = m(i, s, "key");
                    var E, x = 0 | r._crypto_aead_chacha20poly1305_ietf_keybytes();
                    s.length !== x && v(i, "invalid key length"), E = y(s), i.push(E);
                    var T = new l(d - r._crypto_aead_chacha20poly1305_ietf_abytes() | 0),
                        P = T.address;
                    if (i.push(P), 0 === r._crypto_aead_chacha20poly1305_ietf_decrypt(P, null, c, _, d, 0, b, w, 0, k, E)) {
                        var A = u(T, o);
                        return f(i), A
                    }
                    g(i, "ciphertext cannot be decrypted using that key")
                }

                function T(e, t, n, a, s, o, i) {
                    var c = [];
                    h(i);
                    var _ = null;
                    null != e && (_ = y(e = m(c, e, "secret_nonce")), e.length, c.push(_));
                    var p = y(t = m(c, t, "ciphertext")),
                        d = t.length;
                    c.push(p), n = m(c, n, "mac");
                    var b, w = 0 | r._crypto_box_macbytes();
                    n.length !== w && v(c, "invalid mac length"), b = y(n), c.push(b);
                    var k = null,
                        S = 0;
                    null != a && (k = y(a = m(c, a, "additional_data")), S = a.length, c.push(k)), s = m(c, s, "public_nonce");
                    var E, x = 0 | r._crypto_aead_chacha20poly1305_ietf_npubbytes();
                    s.length !== x && v(c, "invalid public_nonce length"), E = y(s), c.push(E), o = m(c, o, "key");
                    var T, P = 0 | r._crypto_aead_chacha20poly1305_ietf_keybytes();
                    o.length !== P && v(c, "invalid key length"), T = y(o), c.push(T);
                    var A = new l(0 | d),
                        B = A.address;
                    if (c.push(B), 0 === r._crypto_aead_chacha20poly1305_ietf_decrypt_detached(B, _, p, d, 0, b, k, S, 0, E, T)) {
                        var O = u(A, i);
                        return f(c), O
                    }
                    g(c, "ciphertext cannot be decrypted using that key")
                }

                function P(e, t, n, a, s, o) {
                    var i = [];
                    h(o);
                    var c = y(e = m(i, e, "message")),
                        _ = e.length;
                    i.push(c);
                    var p = null,
                        d = 0;
                    null != t && (p = y(t = m(i, t, "additional_data")), d = t.length, i.push(p));
                    var b = null;
                    null != n && (b = y(n = m(i, n, "secret_nonce")), n.length, i.push(b)), a = m(i, a, "public_nonce");
                    var w, k = 0 | r._crypto_aead_chacha20poly1305_ietf_npubbytes();
                    a.length !== k && v(i, "invalid public_nonce length"), w = y(a), i.push(w), s = m(i, s, "key");
                    var S, E = 0 | r._crypto_aead_chacha20poly1305_ietf_keybytes();
                    s.length !== E && v(i, "invalid key length"), S = y(s), i.push(S);
                    var x = new l(_ + r._crypto_aead_chacha20poly1305_ietf_abytes() | 0),
                        T = x.address;
                    if (i.push(T), 0 === r._crypto_aead_chacha20poly1305_ietf_encrypt(T, null, c, _, 0, p, d, 0, b, w, S)) {
                        var P = u(x, o);
                        return f(i), P
                    }
                    g(i, "invalid usage")
                }

                function A(e, t, n, a, s, o) {
                    var i = [];
                    h(o);
                    var c = y(e = m(i, e, "message")),
                        _ = e.length;
                    i.push(c);
                    var p = null,
                        d = 0;
                    null != t && (p = y(t = m(i, t, "additional_data")), d = t.length, i.push(p));
                    var b = null;
                    null != n && (b = y(n = m(i, n, "secret_nonce")), n.length, i.push(b)), a = m(i, a, "public_nonce");
                    var w, k = 0 | r._crypto_aead_chacha20poly1305_ietf_npubbytes();
                    a.length !== k && v(i, "invalid public_nonce length"), w = y(a), i.push(w), s = m(i, s, "key");
                    var S, E = 0 | r._crypto_aead_chacha20poly1305_ietf_keybytes();
                    s.length !== E && v(i, "invalid key length"), S = y(s), i.push(S);
                    var x = new l(0 | _),
                        T = x.address;
                    i.push(T);
                    var P = new l(0 | r._crypto_aead_chacha20poly1305_ietf_abytes()),
                        A = P.address;
                    if (i.push(A), 0 === r._crypto_aead_chacha20poly1305_ietf_encrypt_detached(T, A, null, c, _, 0, p, d, 0, b, w, S)) {
                        var B = u({
                            ciphertext: x,
                            mac: P
                        }, o);
                        return f(i), B
                    }
                    g(i, "invalid usage")
                }

                function B(e) {
                    var t = [];
                    h(e);
                    var n = new l(0 | r._crypto_aead_chacha20poly1305_ietf_keybytes()),
                        a = n.address;
                    t.push(a), r._crypto_aead_chacha20poly1305_ietf_keygen(a);
                    var s = u(n, e);
                    return f(t), s
                }

                function O(e) {
                    var t = [];
                    h(e);
                    var n = new l(0 | r._crypto_aead_chacha20poly1305_keybytes()),
                        a = n.address;
                    t.push(a), r._crypto_aead_chacha20poly1305_keygen(a);
                    var s = u(n, e);
                    return f(t), s
                }

                function M(e, t, n, a, s, o) {
                    var i = [];
                    h(o);
                    var c = null;
                    null != e && (c = y(e = m(i, e, "secret_nonce")), e.length, i.push(c)), t = m(i, t, "ciphertext");
                    var _, p = r._crypto_aead_xchacha20poly1305_ietf_abytes(),
                        d = t.length;
                    d < p && v(i, "ciphertext is too short"), _ = y(t), i.push(_);
                    var b = null,
                        w = 0;
                    null != n && (b = y(n = m(i, n, "additional_data")), w = n.length, i.push(b)), a = m(i, a, "public_nonce");
                    var k, S = 0 | r._crypto_aead_xchacha20poly1305_ietf_npubbytes();
                    a.length !== S && v(i, "invalid public_nonce length"), k = y(a), i.push(k), s = m(i, s, "key");
                    var E, x = 0 | r._crypto_aead_xchacha20poly1305_ietf_keybytes();
                    s.length !== x && v(i, "invalid key length"), E = y(s), i.push(E);
                    var T = new l(d - r._crypto_aead_xchacha20poly1305_ietf_abytes() | 0),
                        P = T.address;
                    if (i.push(P), 0 === r._crypto_aead_xchacha20poly1305_ietf_decrypt(P, null, c, _, d, 0, b, w, 0, k, E)) {
                        var A = u(T, o);
                        return f(i), A
                    }
                    g(i, "ciphertext cannot be decrypted using that key")
                }

                function I(e, t, n, a, s, o, i) {
                    var c = [];
                    h(i);
                    var _ = null;
                    null != e && (_ = y(e = m(c, e, "secret_nonce")), e.length, c.push(_));
                    var p = y(t = m(c, t, "ciphertext")),
                        d = t.length;
                    c.push(p), n = m(c, n, "mac");
                    var b, w = 0 | r._crypto_box_macbytes();
                    n.length !== w && v(c, "invalid mac length"), b = y(n), c.push(b);
                    var k = null,
                        S = 0;
                    null != a && (k = y(a = m(c, a, "additional_data")), S = a.length, c.push(k)), s = m(c, s, "public_nonce");
                    var E, x = 0 | r._crypto_aead_xchacha20poly1305_ietf_npubbytes();
                    s.length !== x && v(c, "invalid public_nonce length"), E = y(s), c.push(E), o = m(c, o, "key");
                    var T, P = 0 | r._crypto_aead_xchacha20poly1305_ietf_keybytes();
                    o.length !== P && v(c, "invalid key length"), T = y(o), c.push(T);
                    var A = new l(0 | d),
                        B = A.address;
                    if (c.push(B), 0 === r._crypto_aead_xchacha20poly1305_ietf_decrypt_detached(B, _, p, d, 0, b, k, S, 0, E, T)) {
                        var O = u(A, i);
                        return f(c), O
                    }
                    g(c, "ciphertext cannot be decrypted using that key")
                }

                function Y(e, t, n, a, s, o) {
                    var i = [];
                    h(o);
                    var c = y(e = m(i, e, "message")),
                        _ = e.length;
                    i.push(c);
                    var p = null,
                        d = 0;
                    null != t && (p = y(t = m(i, t, "additional_data")), d = t.length, i.push(p));
                    var b = null;
                    null != n && (b = y(n = m(i, n, "secret_nonce")), n.length, i.push(b)), a = m(i, a, "public_nonce");
                    var w, k = 0 | r._crypto_aead_xchacha20poly1305_ietf_npubbytes();
                    a.length !== k && v(i, "invalid public_nonce length"), w = y(a), i.push(w), s = m(i, s, "key");
                    var S, E = 0 | r._crypto_aead_xchacha20poly1305_ietf_keybytes();
                    s.length !== E && v(i, "invalid key length"), S = y(s), i.push(S);
                    var x = new l(_ + r._crypto_aead_xchacha20poly1305_ietf_abytes() | 0),
                        T = x.address;
                    if (i.push(T), 0 === r._crypto_aead_xchacha20poly1305_ietf_encrypt(T, null, c, _, 0, p, d, 0, b, w, S)) {
                        var P = u(x, o);
                        return f(i), P
                    }
                    g(i, "invalid usage")
                }

                function R(e, t, n, a, s, o) {
                    var i = [];
                    h(o);
                    var c = y(e = m(i, e, "message")),
                        _ = e.length;
                    i.push(c);
                    var p = null,
                        d = 0;
                    null != t && (p = y(t = m(i, t, "additional_data")), d = t.length, i.push(p));
                    var b = null;
                    null != n && (b = y(n = m(i, n, "secret_nonce")), n.length, i.push(b)), a = m(i, a, "public_nonce");
                    var w, k = 0 | r._crypto_aead_xchacha20poly1305_ietf_npubbytes();
                    a.length !== k && v(i, "invalid public_nonce length"), w = y(a), i.push(w), s = m(i, s, "key");
                    var S, E = 0 | r._crypto_aead_xchacha20poly1305_ietf_keybytes();
                    s.length !== E && v(i, "invalid key length"), S = y(s), i.push(S);
                    var x = new l(0 | _),
                        T = x.address;
                    i.push(T);
                    var P = new l(0 | r._crypto_aead_xchacha20poly1305_ietf_abytes()),
                        A = P.address;
                    if (i.push(A), 0 === r._crypto_aead_xchacha20poly1305_ietf_encrypt_detached(T, A, null, c, _, 0, p, d, 0, b, w, S)) {
                        var B = u({
                            ciphertext: x,
                            mac: P
                        }, o);
                        return f(i), B
                    }
                    g(i, "invalid usage")
                }

                function j(e) {
                    var t = [];
                    h(e);
                    var n = new l(0 | r._crypto_aead_xchacha20poly1305_ietf_keybytes()),
                        a = n.address;
                    t.push(a), r._crypto_aead_xchacha20poly1305_ietf_keygen(a);
                    var s = u(n, e);
                    return f(t), s
                }

                function K(e, t, n) {
                    var a = [];
                    h(n);
                    var s = y(e = m(a, e, "message")),
                        o = e.length;
                    a.push(s), t = m(a, t, "key");
                    var i, c = 0 | r._crypto_auth_keybytes();
                    t.length !== c && v(a, "invalid key length"), i = y(t), a.push(i);
                    var _ = new l(0 | r._crypto_auth_bytes()),
                        p = _.address;
                    if (a.push(p), 0 == (0 | r._crypto_auth(p, s, o, 0, i))) {
                        var d = u(_, n);
                        return f(a), d
                    }
                    g(a, "invalid usage")
                }

                function U(e, t, n) {
                    var a = [];
                    h(n);
                    var s = y(e = m(a, e, "message")),
                        o = e.length;
                    a.push(s), t = m(a, t, "key");
                    var i, c = 0 | r._crypto_auth_hmacsha256_keybytes();
                    t.length !== c && v(a, "invalid key length"), i = y(t), a.push(i);
                    var _ = new l(0 | r._crypto_auth_hmacsha256_bytes()),
                        p = _.address;
                    if (a.push(p), 0 == (0 | r._crypto_auth_hmacsha256(p, s, o, 0, i))) {
                        var d = u(_, n);
                        return f(a), d
                    }
                    g(a, "invalid usage")
                }

                function N(e, t) {
                    var n = [];
                    h(t), b(n, e, "state_address");
                    var a = new l(0 | r._crypto_auth_hmacsha256_bytes()),
                        s = a.address;
                    if (n.push(s), 0 == (0 | r._crypto_auth_hmacsha256_final(e, s))) {
                        var o = (r._free(e), u(a, t));
                        return f(n), o
                    }
                    g(n, "invalid usage")
                }

                function C(e, t) {
                    var n = [];
                    h(t);
                    var a = null,
                        s = 0;
                    null != e && (a = y(e = m(n, e, "key")), s = e.length, n.push(a));
                    var o = new l(208).address;
                    if (0 == (0 | r._crypto_auth_hmacsha256_init(o, a, s))) {
                        var i = o;
                        return f(n), i
                    }
                    g(n, "invalid usage")
                }

                function D(e) {
                    var t = [];
                    h(e);
                    var n = new l(0 | r._crypto_auth_hmacsha256_keybytes()),
                        a = n.address;
                    t.push(a), r._crypto_auth_hmacsha256_keygen(a);
                    var s = u(n, e);
                    return f(t), s
                }

                function F(e, t, n) {
                    var a = [];
                    h(n), b(a, e, "state_address");
                    var s = y(t = m(a, t, "message_chunk")),
                        o = t.length;
                    a.push(s), 0 != (0 | r._crypto_auth_hmacsha256_update(e, s, o)) && g(a, "invalid usage"), f(a)
                }

                function L(e, t, n) {
                    var a = [];
                    e = m(a, e, "tag");
                    var s, o = 0 | r._crypto_auth_hmacsha256_bytes();
                    e.length !== o && v(a, "invalid tag length"), s = y(e), a.push(s);
                    var i = y(t = m(a, t, "message")),
                        c = t.length;
                    a.push(i), n = m(a, n, "key");
                    var _, u = 0 | r._crypto_auth_hmacsha256_keybytes();
                    n.length !== u && v(a, "invalid key length"), _ = y(n), a.push(_);
                    var p = 0 == (0 | r._crypto_auth_hmacsha256_verify(s, i, c, 0, _));
                    return f(a), p
                }

                function J(e, t, n) {
                    var a = [];
                    h(n);
                    var s = y(e = m(a, e, "message")),
                        o = e.length;
                    a.push(s), t = m(a, t, "key");
                    var i, c = 0 | r._crypto_auth_hmacsha512_keybytes();
                    t.length !== c && v(a, "invalid key length"), i = y(t), a.push(i);
                    var _ = new l(0 | r._crypto_auth_hmacsha512_bytes()),
                        p = _.address;
                    if (a.push(p), 0 == (0 | r._crypto_auth_hmacsha512(p, s, o, 0, i))) {
                        var d = u(_, n);
                        return f(a), d
                    }
                    g(a, "invalid usage")
                }

                function G(e, t) {
                    var n = [];
                    h(t), b(n, e, "state_address");
                    var a = new l(0 | r._crypto_auth_hmacsha512_bytes()),
                        s = a.address;
                    if (n.push(s), 0 == (0 | r._crypto_auth_hmacsha512_final(e, s))) {
                        var o = (r._free(e), u(a, t));
                        return f(n), o
                    }
                    g(n, "invalid usage")
                }

                function H(e, t) {
                    var n = [];
                    h(t);
                    var a = null,
                        s = 0;
                    null != e && (a = y(e = m(n, e, "key")), s = e.length, n.push(a));
                    var o = new l(416).address;
                    if (0 == (0 | r._crypto_auth_hmacsha512_init(o, a, s))) {
                        var i = o;
                        return f(n), i
                    }
                    g(n, "invalid usage")
                }

                function W(e) {
                    var t = [];
                    h(e);
                    var n = new l(0 | r._crypto_auth_hmacsha512_keybytes()),
                        a = n.address;
                    t.push(a), r._crypto_auth_hmacsha512_keygen(a);
                    var s = u(n, e);
                    return f(t), s
                }

                function z(e, t, n) {
                    var a = [];
                    h(n), b(a, e, "state_address");
                    var s = y(t = m(a, t, "message_chunk")),
                        o = t.length;
                    a.push(s), 0 != (0 | r._crypto_auth_hmacsha512_update(e, s, o)) && g(a, "invalid usage"), f(a)
                }

                function X(e, t, n) {
                    var a = [];
                    e = m(a, e, "tag");
                    var s, o = 0 | r._crypto_auth_hmacsha512_bytes();
                    e.length !== o && v(a, "invalid tag length"), s = y(e), a.push(s);
                    var i = y(t = m(a, t, "message")),
                        c = t.length;
                    a.push(i), n = m(a, n, "key");
                    var _, u = 0 | r._crypto_auth_hmacsha512_keybytes();
                    n.length !== u && v(a, "invalid key length"), _ = y(n), a.push(_);
                    var p = 0 == (0 | r._crypto_auth_hmacsha512_verify(s, i, c, 0, _));
                    return f(a), p
                }

                function $(e) {
                    var t = [];
                    h(e);
                    var n = new l(0 | r._crypto_auth_keybytes()),
                        a = n.address;
                    t.push(a), r._crypto_auth_keygen(a);
                    var s = u(n, e);
                    return f(t), s
                }

                function V(e, t, n) {
                    var a = [];
                    e = m(a, e, "tag");
                    var s, o = 0 | r._crypto_auth_bytes();
                    e.length !== o && v(a, "invalid tag length"), s = y(e), a.push(s);
                    var i = y(t = m(a, t, "message")),
                        c = t.length;
                    a.push(i), n = m(a, n, "key");
                    var _, u = 0 | r._crypto_auth_keybytes();
                    n.length !== u && v(a, "invalid key length"), _ = y(n), a.push(_);
                    var p = 0 == (0 | r._crypto_auth_verify(s, i, c, 0, _));
                    return f(a), p
                }

                function q(e, t, n) {
                    var a = [];
                    h(n), e = m(a, e, "publicKey");
                    var s, o = 0 | r._crypto_box_publickeybytes();
                    e.length !== o && v(a, "invalid publicKey length"), s = y(e), a.push(s), t = m(a, t, "privateKey");
                    var i, c = 0 | r._crypto_box_secretkeybytes();
                    t.length !== c && v(a, "invalid privateKey length"), i = y(t), a.push(i);
                    var _ = new l(0 | r._crypto_box_beforenmbytes()),
                        p = _.address;
                    if (a.push(p), 0 == (0 | r._crypto_box_beforenm(p, s, i))) {
                        var d = u(_, n);
                        return f(a), d
                    }
                    g(a, "invalid usage")
                }

                function Z(e) {
                    var t = [];
                    h(e);
                    var n = new l(0 | r._crypto_box_curve25519xchacha20poly1305_publickeybytes()),
                        a = n.address;
                    t.push(a);
                    var s = new l(0 | r._crypto_box_curve25519xchacha20poly1305_secretkeybytes()),
                        o = s.address;
                    t.push(o), r._crypto_box_curve25519xchacha20poly1305_keypair(a, o);
                    var i = u({
                        publicKey: n,
                        privateKey: s,
                        keyType: "curve25519"
                    }, e);
                    return f(t), i
                }

                function Q(e, t, n) {
                    var a = [];
                    h(n);
                    var s = y(e = m(a, e, "message")),
                        o = e.length;
                    a.push(s), t = m(a, t, "publicKey");
                    var i, c = 0 | r._crypto_box_curve25519xchacha20poly1305_publickeybytes();
                    t.length !== c && v(a, "invalid publicKey length"), i = y(t), a.push(i);
                    var _ = new l(o + r._crypto_box_curve25519xchacha20poly1305_sealbytes() | 0),
                        p = _.address;
                    a.push(p), r._crypto_box_curve25519xchacha20poly1305_seal(p, s, o, 0, i);
                    var d = u(_, n);
                    return f(a), d
                }

                function ee(e, t, n, a) {
                    var s = [];
                    h(a), e = m(s, e, "ciphertext");
                    var o, i = r._crypto_box_curve25519xchacha20poly1305_sealbytes(),
                        c = e.length;
                    c < i && v(s, "ciphertext is too short"), o = y(e), s.push(o), t = m(s, t, "publicKey");
                    var _, p = 0 | r._crypto_box_curve25519xchacha20poly1305_publickeybytes();
                    t.length !== p && v(s, "invalid publicKey length"), _ = y(t), s.push(_), n = m(s, n, "secretKey");
                    var d, g = 0 | r._crypto_box_curve25519xchacha20poly1305_secretkeybytes();
                    n.length !== g && v(s, "invalid secretKey length"), d = y(n), s.push(d);
                    var b = new l(c - r._crypto_box_curve25519xchacha20poly1305_sealbytes() | 0),
                        w = b.address;
                    s.push(w), r._crypto_box_curve25519xchacha20poly1305_seal_open(w, o, c, 0, _, d);
                    var k = u(b, a);
                    return f(s), k
                }

                function te(e, t, n, a, s) {
                    var o = [];
                    h(s);
                    var i = y(e = m(o, e, "message")),
                        c = e.length;
                    o.push(i), t = m(o, t, "nonce");
                    var _, p = 0 | r._crypto_box_noncebytes();
                    t.length !== p && v(o, "invalid nonce length"), _ = y(t), o.push(_), n = m(o, n, "publicKey");
                    var d, b = 0 | r._crypto_box_publickeybytes();
                    n.length !== b && v(o, "invalid publicKey length"), d = y(n), o.push(d), a = m(o, a, "privateKey");
                    var w, k = 0 | r._crypto_box_secretkeybytes();
                    a.length !== k && v(o, "invalid privateKey length"), w = y(a), o.push(w);
                    var S = new l(0 | c),
                        E = S.address;
                    o.push(E);
                    var x = new l(0 | r._crypto_box_macbytes()),
                        T = x.address;
                    if (o.push(T), 0 == (0 | r._crypto_box_detached(E, T, i, c, 0, _, d, w))) {
                        var P = u({
                            ciphertext: S,
                            mac: x
                        }, s);
                        return f(o), P
                    }
                    g(o, "invalid usage")
                }

                function re(e, t, n, a, s) {
                    var o = [];
                    h(s);
                    var i = y(e = m(o, e, "message")),
                        c = e.length;
                    o.push(i), t = m(o, t, "nonce");
                    var _, p = 0 | r._crypto_box_noncebytes();
                    t.length !== p && v(o, "invalid nonce length"), _ = y(t), o.push(_), n = m(o, n, "publicKey");
                    var d, b = 0 | r._crypto_box_publickeybytes();
                    n.length !== b && v(o, "invalid publicKey length"), d = y(n), o.push(d), a = m(o, a, "privateKey");
                    var w, k = 0 | r._crypto_box_secretkeybytes();
                    a.length !== k && v(o, "invalid privateKey length"), w = y(a), o.push(w);
                    var S = new l(c + r._crypto_box_macbytes() | 0),
                        E = S.address;
                    if (o.push(E), 0 == (0 | r._crypto_box_easy(E, i, c, 0, _, d, w))) {
                        var x = u(S, s);
                        return f(o), x
                    }
                    g(o, "invalid usage")
                }

                function ne(e, t, n, a) {
                    var s = [];
                    h(a);
                    var o = y(e = m(s, e, "message")),
                        i = e.length;
                    s.push(o), t = m(s, t, "nonce");
                    var c, _ = 0 | r._crypto_box_noncebytes();
                    t.length !== _ && v(s, "invalid nonce length"), c = y(t), s.push(c), n = m(s, n, "sharedKey");
                    var p, d = 0 | r._crypto_box_beforenmbytes();
                    n.length !== d && v(s, "invalid sharedKey length"), p = y(n), s.push(p);
                    var b = new l(i + r._crypto_box_macbytes() | 0),
                        w = b.address;
                    if (s.push(w), 0 == (0 | r._crypto_box_easy_afternm(w, o, i, 0, c, p))) {
                        var k = u(b, a);
                        return f(s), k
                    }
                    g(s, "invalid usage")
                }

                function ae(e) {
                    var t = [];
                    h(e);
                    var n = new l(0 | r._crypto_box_publickeybytes()),
                        a = n.address;
                    t.push(a);
                    var s = new l(0 | r._crypto_box_secretkeybytes()),
                        o = s.address;
                    if (t.push(o), 0 == (0 | r._crypto_box_keypair(a, o))) {
                        var i = {
                            publicKey: u(n, e),
                            privateKey: u(s, e),
                            keyType: "x25519"
                        };
                        return f(t), i
                    }
                    g(t, "internal error")
                }

                function se(e, t, n, a, s, o) {
                    var i = [];
                    h(o);
                    var c = y(e = m(i, e, "ciphertext")),
                        _ = e.length;
                    i.push(c), t = m(i, t, "mac");
                    var p, d = 0 | r._crypto_box_macbytes();
                    t.length !== d && v(i, "invalid mac length"), p = y(t), i.push(p), n = m(i, n, "nonce");
                    var b, w = 0 | r._crypto_box_noncebytes();
                    n.length !== w && v(i, "invalid nonce length"), b = y(n), i.push(b), a = m(i, a, "publicKey");
                    var k, S = 0 | r._crypto_box_publickeybytes();
                    a.length !== S && v(i, "invalid publicKey length"), k = y(a), i.push(k), s = m(i, s, "privateKey");
                    var E, x = 0 | r._crypto_box_secretkeybytes();
                    s.length !== x && v(i, "invalid privateKey length"), E = y(s), i.push(E);
                    var T = new l(0 | _),
                        P = T.address;
                    if (i.push(P), 0 == (0 | r._crypto_box_open_detached(P, c, p, _, 0, b, k, E))) {
                        var A = u(T, o);
                        return f(i), A
                    }
                    g(i, "incorrect key pair for the given ciphertext")
                }

                function oe(e, t, n, a, s) {
                    var o = [];
                    h(s), e = m(o, e, "ciphertext");
                    var i, c = r._crypto_box_macbytes(),
                        _ = e.length;
                    _ < c && v(o, "ciphertext is too short"), i = y(e), o.push(i), t = m(o, t, "nonce");
                    var p, d = 0 | r._crypto_box_noncebytes();
                    t.length !== d && v(o, "invalid nonce length"), p = y(t), o.push(p), n = m(o, n, "publicKey");
                    var b, w = 0 | r._crypto_box_publickeybytes();
                    n.length !== w && v(o, "invalid publicKey length"), b = y(n), o.push(b), a = m(o, a, "privateKey");
                    var k, S = 0 | r._crypto_box_secretkeybytes();
                    a.length !== S && v(o, "invalid privateKey length"), k = y(a), o.push(k);
                    var E = new l(_ - r._crypto_box_macbytes() | 0),
                        x = E.address;
                    if (o.push(x), 0 == (0 | r._crypto_box_open_easy(x, i, _, 0, p, b, k))) {
                        var T = u(E, s);
                        return f(o), T
                    }
                    g(o, "incorrect key pair for the given ciphertext")
                }

                function ie(e, t, n, a) {
                    var s = [];
                    h(a);
                    var o = y(e = m(s, e, "ciphertext")),
                        i = e.length;
                    s.push(o), t = m(s, t, "nonce");
                    var c, _ = 0 | r._crypto_box_noncebytes();
                    t.length !== _ && v(s, "invalid nonce length"), c = y(t), s.push(c), n = m(s, n, "sharedKey");
                    var p, d = 0 | r._crypto_box_beforenmbytes();
                    n.length !== d && v(s, "invalid sharedKey length"), p = y(n), s.push(p);
                    var b = new l(i - r._crypto_box_macbytes() | 0),
                        w = b.address;
                    if (s.push(w), 0 == (0 | r._crypto_box_open_easy_afternm(w, o, i, 0, c, p))) {
                        var k = u(b, a);
                        return f(s), k
                    }
                    g(s, "incorrect secret key for the given ciphertext")
                }

                function ce(e, t, n) {
                    var a = [];
                    h(n);
                    var s = y(e = m(a, e, "message")),
                        o = e.length;
                    a.push(s), t = m(a, t, "publicKey");
                    var i, c = 0 | r._crypto_box_publickeybytes();
                    t.length !== c && v(a, "invalid publicKey length"), i = y(t), a.push(i);
                    var _ = new l(o + r._crypto_box_sealbytes() | 0),
                        p = _.address;
                    if (a.push(p), 0 == (0 | r._crypto_box_seal(p, s, o, 0, i))) {
                        var d = u(_, n);
                        return f(a), d
                    }
                    g(a, "invalid usage")
                }

                function _e(e, t, n, a) {
                    var s = [];
                    h(a), e = m(s, e, "ciphertext");
                    var o, i = r._crypto_box_sealbytes(),
                        c = e.length;
                    c < i && v(s, "ciphertext is too short"), o = y(e), s.push(o), t = m(s, t, "publicKey");
                    var _, p = 0 | r._crypto_box_publickeybytes();
                    t.length !== p && v(s, "invalid publicKey length"), _ = y(t), s.push(_), n = m(s, n, "privateKey");
                    var d, b = 0 | r._crypto_box_secretkeybytes();
                    n.length !== b && v(s, "invalid privateKey length"), d = y(n), s.push(d);
                    var w = new l(c - r._crypto_box_sealbytes() | 0),
                        k = w.address;
                    if (s.push(k), 0 == (0 | r._crypto_box_seal_open(k, o, c, 0, _, d))) {
                        var S = u(w, a);
                        return f(s), S
                    }
                    g(s, "incorrect key pair for the given ciphertext")
                }

                function ue(e, t) {
                    var n = [];
                    h(t), e = m(n, e, "seed");
                    var a, s = 0 | r._crypto_box_seedbytes();
                    e.length !== s && v(n, "invalid seed length"), a = y(e), n.push(a);
                    var o = new l(0 | r._crypto_box_publickeybytes()),
                        i = o.address;
                    n.push(i);
                    var c = new l(0 | r._crypto_box_secretkeybytes()),
                        _ = c.address;
                    if (n.push(_), 0 == (0 | r._crypto_box_seed_keypair(i, _, a))) {
                        var p = {
                            publicKey: u(o, t),
                            privateKey: u(c, t),
                            keyType: "x25519"
                        };
                        return f(n), p
                    }
                    g(n, "invalid usage")
                }

                function pe(e, t, n) {
                    var a = [];
                    h(n), e = m(a, e, "p");
                    var s, o = 0 | r._crypto_core_ed25519_bytes();
                    e.length !== o && v(a, "invalid p length"), s = y(e), a.push(s), t = m(a, t, "q");
                    var i, c = 0 | r._crypto_core_ed25519_bytes();
                    t.length !== c && v(a, "invalid q length"), i = y(t), a.push(i);
                    var _ = new l(0 | r._crypto_core_ed25519_bytes()),
                        p = _.address;
                    if (a.push(p), 0 == (0 | r._crypto_core_ed25519_add(p, s, i))) {
                        var d = u(_, n);
                        return f(a), d
                    }
                    g(a, "input is an invalid element")
                }

                function he(e, t) {
                    var n = [];
                    h(t);
                    var a = y(e = m(n, e, "r"));
                    e.length, n.push(a);
                    var s = new l(0 | r._crypto_core_ed25519_bytes()),
                        o = s.address;
                    if (n.push(o), 0 == (0 | r._crypto_core_ed25519_from_hash(o, a))) {
                        var i = u(s, t);
                        return f(n), i
                    }
                    g(n, "invalid usage")
                }

                function le(e, t) {
                    var n = [];
                    h(t);
                    var a = y(e = m(n, e, "r"));
                    e.length, n.push(a);
                    var s = new l(0 | r._crypto_core_ed25519_bytes()),
                        o = s.address;
                    if (n.push(o), 0 == (0 | r._crypto_core_ed25519_from_uniform(o, a))) {
                        var i = u(s, t);
                        return f(n), i
                    }
                    g(n, "invalid usage")
                }

                function ye(e, t) {
                    var n = [];
                    h(t), e = m(n, e, "repr");
                    var a, s = 0 | r._crypto_core_ed25519_bytes();
                    e.length !== s && v(n, "invalid repr length"), a = y(e), n.push(a);
                    var o = 1 == (0 | r._crypto_core_ed25519_is_valid_point(a));
                    return f(n), o
                }

                function de(e) {
                    var t = [];
                    h(e);
                    var n = new l(0 | r._crypto_core_ed25519_bytes()),
                        a = n.address;
                    t.push(a), r._crypto_core_ed25519_random(a);
                    var s = u(n, e);
                    return f(t), s
                }

                function fe(e, t, n) {
                    var a = [];
                    h(n), e = m(a, e, "x");
                    var s, o = 0 | r._crypto_core_ed25519_scalarbytes();
                    e.length !== o && v(a, "invalid x length"), s = y(e), a.push(s), t = m(a, t, "y");
                    var i, c = 0 | r._crypto_core_ed25519_scalarbytes();
                    t.length !== c && v(a, "invalid y length"), i = y(t), a.push(i);
                    var _ = new l(0 | r._crypto_core_ed25519_scalarbytes()),
                        p = _.address;
                    a.push(p), r._crypto_core_ed25519_scalar_add(p, s, i);
                    var d = u(_, n);
                    return f(a), d
                }

                function ge(e, t) {
                    var n = [];
                    h(t), e = m(n, e, "s");
                    var a, s = 0 | r._crypto_core_ed25519_scalarbytes();
                    e.length !== s && v(n, "invalid s length"), a = y(e), n.push(a);
                    var o = new l(0 | r._crypto_core_ed25519_scalarbytes()),
                        i = o.address;
                    n.push(i), r._crypto_core_ed25519_scalar_complement(i, a);
                    var c = u(o, t);
                    return f(n), c
                }

                function ve(e, t) {
                    var n = [];
                    h(t), e = m(n, e, "s");
                    var a, s = 0 | r._crypto_core_ed25519_scalarbytes();
                    e.length !== s && v(n, "invalid s length"), a = y(e), n.push(a);
                    var o = new l(0 | r._crypto_core_ed25519_scalarbytes()),
                        i = o.address;
                    if (n.push(i), 0 == (0 | r._crypto_core_ed25519_scalar_invert(i, a))) {
                        var c = u(o, t);
                        return f(n), c
                    }
                    g(n, "invalid reciprocate")
                }

                function be(e, t, n) {
                    var a = [];
                    h(n), e = m(a, e, "x");
                    var s, o = 0 | r._crypto_core_ed25519_scalarbytes();
                    e.length !== o && v(a, "invalid x length"), s = y(e), a.push(s), t = m(a, t, "y");
                    var i, c = 0 | r._crypto_core_ed25519_scalarbytes();
                    t.length !== c && v(a, "invalid y length"), i = y(t), a.push(i);
                    var _ = new l(0 | r._crypto_core_ed25519_scalarbytes()),
                        p = _.address;
                    a.push(p), r._crypto_core_ed25519_scalar_mul(p, s, i);
                    var d = u(_, n);
                    return f(a), d
                }

                function me(e, t) {
                    var n = [];
                    h(t), e = m(n, e, "s");
                    var a, s = 0 | r._crypto_core_ed25519_scalarbytes();
                    e.length !== s && v(n, "invalid s length"), a = y(e), n.push(a);
                    var o = new l(0 | r._crypto_core_ed25519_scalarbytes()),
                        i = o.address;
                    n.push(i), r._crypto_core_ed25519_scalar_negate(i, a);
                    var c = u(o, t);
                    return f(n), c
                }

                function we(e) {
                    var t = [];
                    h(e);
                    var n = new l(0 | r._crypto_core_ed25519_scalarbytes()),
                        a = n.address;
                    t.push(a), r._crypto_core_ed25519_scalar_random(a);
                    var s = u(n, e);
                    return f(t), s
                }

                function ke(e, t) {
                    var n = [];
                    h(t), e = m(n, e, "sample");
                    var a, s = 0 | r._crypto_core_ed25519_nonreducedscalarbytes();
                    e.length !== s && v(n, "invalid sample length"), a = y(e), n.push(a);
                    var o = new l(0 | r._crypto_core_ed25519_scalarbytes()),
                        i = o.address;
                    n.push(i), r._crypto_core_ed25519_scalar_reduce(i, a);
                    var c = u(o, t);
                    return f(n), c
                }

                function Se(e, t, n) {
                    var a = [];
                    h(n), e = m(a, e, "x");
                    var s, o = 0 | r._crypto_core_ed25519_scalarbytes();
                    e.length !== o && v(a, "invalid x length"), s = y(e), a.push(s), t = m(a, t, "y");
                    var i, c = 0 | r._crypto_core_ed25519_scalarbytes();
                    t.length !== c && v(a, "invalid y length"), i = y(t), a.push(i);
                    var _ = new l(0 | r._crypto_core_ed25519_scalarbytes()),
                        p = _.address;
                    a.push(p), r._crypto_core_ed25519_scalar_sub(p, s, i);
                    var d = u(_, n);
                    return f(a), d
                }

                function Ee(e, t, n) {
                    var a = [];
                    h(n), e = m(a, e, "p");
                    var s, o = 0 | r._crypto_core_ed25519_bytes();
                    e.length !== o && v(a, "invalid p length"), s = y(e), a.push(s), t = m(a, t, "q");
                    var i, c = 0 | r._crypto_core_ed25519_bytes();
                    t.length !== c && v(a, "invalid q length"), i = y(t), a.push(i);
                    var _ = new l(0 | r._crypto_core_ed25519_bytes()),
                        p = _.address;
                    if (a.push(p), 0 == (0 | r._crypto_core_ed25519_sub(p, s, i))) {
                        var d = u(_, n);
                        return f(a), d
                    }
                    g(a, "input is an invalid element")
                }

                function xe(e, t, n, a) {
                    var s = [];
                    h(a), e = m(s, e, "input");
                    var o, i = 0 | r._crypto_core_hchacha20_inputbytes();
                    e.length !== i && v(s, "invalid input length"), o = y(e), s.push(o), t = m(s, t, "privateKey");
                    var c, _ = 0 | r._crypto_core_hchacha20_keybytes();
                    t.length !== _ && v(s, "invalid privateKey length"), c = y(t), s.push(c);
                    var p = null;
                    null != n && (p = y(n = m(s, n, "constant")), n.length, s.push(p));
                    var d = new l(0 | r._crypto_core_hchacha20_outputbytes()),
                        b = d.address;
                    if (s.push(b), 0 == (0 | r._crypto_core_hchacha20(b, o, c, p))) {
                        var w = u(d, a);
                        return f(s), w
                    }
                    g(s, "invalid usage")
                }

                function Te(e, t, n, a) {
                    var s = [];
                    h(a), e = m(s, e, "input");
                    var o, i = 0 | r._crypto_core_hsalsa20_inputbytes();
                    e.length !== i && v(s, "invalid input length"), o = y(e), s.push(o), t = m(s, t, "privateKey");
                    var c, _ = 0 | r._crypto_core_hsalsa20_keybytes();
                    t.length !== _ && v(s, "invalid privateKey length"), c = y(t), s.push(c);
                    var p = null;
                    null != n && (p = y(n = m(s, n, "constant")), n.length, s.push(p));
                    var d = new l(0 | r._crypto_core_hsalsa20_outputbytes()),
                        b = d.address;
                    if (s.push(b), 0 == (0 | r._crypto_core_hsalsa20(b, o, c, p))) {
                        var w = u(d, a);
                        return f(s), w
                    }
                    g(s, "invalid usage")
                }

                function Pe(e, t, n) {
                    var a = [];
                    h(n), e = m(a, e, "p");
                    var s, o = 0 | r._crypto_core_ristretto255_bytes();
                    e.length !== o && v(a, "invalid p length"), s = y(e), a.push(s), t = m(a, t, "q");
                    var i, c = 0 | r._crypto_core_ristretto255_bytes();
                    t.length !== c && v(a, "invalid q length"), i = y(t), a.push(i);
                    var _ = new l(0 | r._crypto_core_ristretto255_bytes()),
                        p = _.address;
                    if (a.push(p), 0 == (0 | r._crypto_core_ristretto255_add(p, s, i))) {
                        var d = u(_, n);
                        return f(a), d
                    }
                    g(a, "input is an invalid element")
                }

                function Ae(e, t) {
                    var n = [];
                    h(t);
                    var a = y(e = m(n, e, "r"));
                    e.length, n.push(a);
                    var s = new l(0 | r._crypto_core_ristretto255_bytes()),
                        o = s.address;
                    if (n.push(o), 0 == (0 | r._crypto_core_ristretto255_from_hash(o, a))) {
                        var i = u(s, t);
                        return f(n), i
                    }
                    g(n, "invalid usage")
                }

                function Be(e, t) {
                    var n = [];
                    h(t), e = m(n, e, "repr");
                    var a, s = 0 | r._crypto_core_ristretto255_bytes();
                    e.length !== s && v(n, "invalid repr length"), a = y(e), n.push(a);
                    var o = 1 == (0 | r._crypto_core_ristretto255_is_valid_point(a));
                    return f(n), o
                }

                function Oe(e) {
                    var t = [];
                    h(e);
                    var n = new l(0 | r._crypto_core_ristretto255_bytes()),
                        a = n.address;
                    t.push(a), r._crypto_core_ristretto255_random(a);
                    var s = u(n, e);
                    return f(t), s
                }

                function Me(e, t, n) {
                    var a = [];
                    h(n), e = m(a, e, "x");
                    var s, o = 0 | r._crypto_core_ristretto255_scalarbytes();
                    e.length !== o && v(a, "invalid x length"), s = y(e), a.push(s), t = m(a, t, "y");
                    var i, c = 0 | r._crypto_core_ristretto255_scalarbytes();
                    t.length !== c && v(a, "invalid y length"), i = y(t), a.push(i);
                    var _ = new l(0 | r._crypto_core_ristretto255_scalarbytes()),
                        p = _.address;
                    a.push(p), r._crypto_core_ristretto255_scalar_add(p, s, i);
                    var d = u(_, n);
                    return f(a), d
                }

                function Ie(e, t) {
                    var n = [];
                    h(t), e = m(n, e, "s");
                    var a, s = 0 | r._crypto_core_ristretto255_scalarbytes();
                    e.length !== s && v(n, "invalid s length"), a = y(e), n.push(a);
                    var o = new l(0 | r._crypto_core_ristretto255_scalarbytes()),
                        i = o.address;
                    n.push(i), r._crypto_core_ristretto255_scalar_complement(i, a);
                    var c = u(o, t);
                    return f(n), c
                }

                function Ye(e, t) {
                    var n = [];
                    h(t), e = m(n, e, "s");
                    var a, s = 0 | r._crypto_core_ristretto255_scalarbytes();
                    e.length !== s && v(n, "invalid s length"), a = y(e), n.push(a);
                    var o = new l(0 | r._crypto_core_ristretto255_scalarbytes()),
                        i = o.address;
                    if (n.push(i), 0 == (0 | r._crypto_core_ristretto255_scalar_invert(i, a))) {
                        var c = u(o, t);
                        return f(n), c
                    }
                    g(n, "invalid reciprocate")
                }

                function Re(e, t, n) {
                    var a = [];
                    h(n), e = m(a, e, "x");
                    var s, o = 0 | r._crypto_core_ristretto255_scalarbytes();
                    e.length !== o && v(a, "invalid x length"), s = y(e), a.push(s), t = m(a, t, "y");
                    var i, c = 0 | r._crypto_core_ristretto255_scalarbytes();
                    t.length !== c && v(a, "invalid y length"), i = y(t), a.push(i);
                    var _ = new l(0 | r._crypto_core_ristretto255_scalarbytes()),
                        p = _.address;
                    a.push(p), r._crypto_core_ristretto255_scalar_mul(p, s, i);
                    var d = u(_, n);
                    return f(a), d
                }

                function je(e, t) {
                    var n = [];
                    h(t), e = m(n, e, "s");
                    var a, s = 0 | r._crypto_core_ristretto255_scalarbytes();
                    e.length !== s && v(n, "invalid s length"), a = y(e), n.push(a);
                    var o = new l(0 | r._crypto_core_ristretto255_scalarbytes()),
                        i = o.address;
                    n.push(i), r._crypto_core_ristretto255_scalar_negate(i, a);
                    var c = u(o, t);
                    return f(n), c
                }

                function Ke(e) {
                    var t = [];
                    h(e);
                    var n = new l(0 | r._crypto_core_ristretto255_scalarbytes()),
                        a = n.address;
                    t.push(a), r._crypto_core_ristretto255_scalar_random(a);
                    var s = u(n, e);
                    return f(t), s
                }

                function Ue(e, t) {
                    var n = [];
                    h(t), e = m(n, e, "sample");
                    var a, s = 0 | r._crypto_core_ristretto255_nonreducedscalarbytes();
                    e.length !== s && v(n, "invalid sample length"), a = y(e), n.push(a);
                    var o = new l(0 | r._crypto_core_ristretto255_scalarbytes()),
                        i = o.address;
                    n.push(i), r._crypto_core_ristretto255_scalar_reduce(i, a);
                    var c = u(o, t);
                    return f(n), c
                }

                function Ne(e, t, n) {
                    var a = [];
                    h(n), e = m(a, e, "x");
                    var s, o = 0 | r._crypto_core_ristretto255_scalarbytes();
                    e.length !== o && v(a, "invalid x length"), s = y(e), a.push(s), t = m(a, t, "y");
                    var i, c = 0 | r._crypto_core_ristretto255_scalarbytes();
                    t.length !== c && v(a, "invalid y length"), i = y(t), a.push(i);
                    var _ = new l(0 | r._crypto_core_ristretto255_scalarbytes()),
                        p = _.address;
                    a.push(p), r._crypto_core_ristretto255_scalar_sub(p, s, i);
                    var d = u(_, n);
                    return f(a), d
                }

                function Ce(e, t, n) {
                    var a = [];
                    h(n), e = m(a, e, "p");
                    var s, o = 0 | r._crypto_core_ristretto255_bytes();
                    e.length !== o && v(a, "invalid p length"), s = y(e), a.push(s), t = m(a, t, "q");
                    var i, c = 0 | r._crypto_core_ristretto255_bytes();
                    t.length !== c && v(a, "invalid q length"), i = y(t), a.push(i);
                    var _ = new l(0 | r._crypto_core_ristretto255_bytes()),
                        p = _.address;
                    if (a.push(p), 0 == (0 | r._crypto_core_ristretto255_sub(p, s, i))) {
                        var d = u(_, n);
                        return f(a), d
                    }
                    g(a, "input is an invalid element")
                }

                function De(e, t, n, a) {
                    var s = [];
                    h(a), b(s, e, "hash_length"), ("number" != typeof e || (0 | e) !== e || e < 0) && v(s, "hash_length must be an unsigned integer");
                    var o = y(t = m(s, t, "message")),
                        i = t.length;
                    s.push(o);
                    var c = null,
                        _ = 0;
                    null != n && (c = y(n = m(s, n, "key")), _ = n.length, s.push(c));
                    var p = new l(e |= 0),
                        d = p.address;
                    if (s.push(d), 0 == (0 | r._crypto_generichash(d, e, o, i, 0, c, _))) {
                        var w = u(p, a);
                        return f(s), w
                    }
                    g(s, "invalid usage")
                }

                function Fe(e, t, n, a, s) {
                    var o = [];
                    h(s), b(o, e, "subkey_len"), ("number" != typeof e || (0 | e) !== e || e < 0) && v(o, "subkey_len must be an unsigned integer");
                    var i = null,
                        c = 0;
                    null != t && (i = y(t = m(o, t, "key")), c = t.length, o.push(i));
                    var _ = null,
                        p = 0;
                    null != n && (n = m(o, n, "id"), p = 0 | r._crypto_generichash_blake2b_saltbytes(), n.length !== p && v(o, "invalid id length"), _ = y(n), o.push(_));
                    var d = null,
                        w = 0;
                    null != a && (a = m(o, a, "ctx"), w = 0 | r._crypto_generichash_blake2b_personalbytes(), a.length !== w && v(o, "invalid ctx length"), d = y(a), o.push(d));
                    var k = new l(0 | e),
                        S = k.address;
                    if (o.push(S), 0 == (0 | r._crypto_generichash_blake2b_salt_personal(S, e, null, 0, 0, i, c, _, d))) {
                        var E = u(k, s);
                        return f(o), E
                    }
                    g(o, "invalid usage")
                }

                function Le(e, t, n) {
                    var a = [];
                    h(n), b(a, e, "state_address"), b(a, t, "hash_length"), ("number" != typeof t || (0 | t) !== t || t < 0) && v(a, "hash_length must be an unsigned integer");
                    var s = new l(t |= 0),
                        o = s.address;
                    if (a.push(o), 0 == (0 | r._crypto_generichash_final(e, o, t))) {
                        var i = (r._free(e), u(s, n));
                        return f(a), i
                    }
                    g(a, "invalid usage")
                }

                function Je(e, t, n) {
                    var a = [];
                    h(n);
                    var s = null,
                        o = 0;
                    null != e && (s = y(e = m(a, e, "key")), o = e.length, a.push(s)), b(a, t, "hash_length"), ("number" != typeof t || (0 | t) !== t || t < 0) && v(a, "hash_length must be an unsigned integer");
                    var i = new l(357).address;
                    if (0 == (0 | r._crypto_generichash_init(i, s, o, t))) {
                        var c = i;
                        return f(a), c
                    }
                    g(a, "invalid usage")
                }

                function Ge(e) {
                    var t = [];
                    h(e);
                    var n = new l(0 | r._crypto_generichash_keybytes()),
                        a = n.address;
                    t.push(a), r._crypto_generichash_keygen(a);
                    var s = u(n, e);
                    return f(t), s
                }

                function He(e, t, n) {
                    var a = [];
                    h(n), b(a, e, "state_address");
                    var s = y(t = m(a, t, "message_chunk")),
                        o = t.length;
                    a.push(s), 0 != (0 | r._crypto_generichash_update(e, s, o)) && g(a, "invalid usage"), f(a)
                }

                function We(e, t) {
                    var n = [];
                    h(t);
                    var a = y(e = m(n, e, "message")),
                        s = e.length;
                    n.push(a);
                    var o = new l(0 | r._crypto_hash_bytes()),
                        i = o.address;
                    if (n.push(i), 0 == (0 | r._crypto_hash(i, a, s, 0))) {
                        var c = u(o, t);
                        return f(n), c
                    }
                    g(n, "invalid usage")
                }

                function ze(e, t) {
                    var n = [];
                    h(t);
                    var a = y(e = m(n, e, "message")),
                        s = e.length;
                    n.push(a);
                    var o = new l(0 | r._crypto_hash_sha256_bytes()),
                        i = o.address;
                    if (n.push(i), 0 == (0 | r._crypto_hash_sha256(i, a, s, 0))) {
                        var c = u(o, t);
                        return f(n), c
                    }
                    g(n, "invalid usage")
                }

                function Xe(e, t) {
                    var n = [];
                    h(t), b(n, e, "state_address");
                    var a = new l(0 | r._crypto_hash_sha256_bytes()),
                        s = a.address;
                    if (n.push(s), 0 == (0 | r._crypto_hash_sha256_final(e, s))) {
                        var o = (r._free(e), u(a, t));
                        return f(n), o
                    }
                    g(n, "invalid usage")
                }

                function $e(e) {
                    var t = [];
                    h(e);
                    var n = new l(104).address;
                    if (0 == (0 | r._crypto_hash_sha256_init(n))) {
                        var a = n;
                        return f(t), a
                    }
                    g(t, "invalid usage")
                }

                function Ve(e, t, n) {
                    var a = [];
                    h(n), b(a, e, "state_address");
                    var s = y(t = m(a, t, "message_chunk")),
                        o = t.length;
                    a.push(s), 0 != (0 | r._crypto_hash_sha256_update(e, s, o)) && g(a, "invalid usage"), f(a)
                }

                function qe(e, t) {
                    var n = [];
                    h(t);
                    var a = y(e = m(n, e, "message")),
                        s = e.length;
                    n.push(a);
                    var o = new l(0 | r._crypto_hash_sha512_bytes()),
                        i = o.address;
                    if (n.push(i), 0 == (0 | r._crypto_hash_sha512(i, a, s, 0))) {
                        var c = u(o, t);
                        return f(n), c
                    }
                    g(n, "invalid usage")
                }

                function Ze(e, t) {
                    var n = [];
                    h(t), b(n, e, "state_address");
                    var a = new l(0 | r._crypto_hash_sha512_bytes()),
                        s = a.address;
                    if (n.push(s), 0 == (0 | r._crypto_hash_sha512_final(e, s))) {
                        var o = (r._free(e), u(a, t));
                        return f(n), o
                    }
                    g(n, "invalid usage")
                }

                function Qe(e) {
                    var t = [];
                    h(e);
                    var n = new l(208).address;
                    if (0 == (0 | r._crypto_hash_sha512_init(n))) {
                        var a = n;
                        return f(t), a
                    }
                    g(t, "invalid usage")
                }

                function et(e, t, n) {
                    var a = [];
                    h(n), b(a, e, "state_address");
                    var s = y(t = m(a, t, "message_chunk")),
                        o = t.length;
                    a.push(s), 0 != (0 | r._crypto_hash_sha512_update(e, s, o)) && g(a, "invalid usage"), f(a)
                }

                function tt(e, t, n, s, o) {
                    var i = [];
                    h(o), b(i, e, "subkey_len"), ("number" != typeof e || (0 | e) !== e || e < 0) && v(i, "subkey_len must be an unsigned integer"), b(i, t, "subkey_id"), ("number" != typeof t || (0 | t) !== t || t < 0) && v(i, "subkey_id must be an unsigned integer"), "string" != typeof n && v(i, "ctx must be a string"), n = a(n + "\0"), null != _ && n.length - 1 !== _ && v(i, "invalid ctx length");
                    var c = y(n),
                        _ = n.length - 1;
                    i.push(c), s = m(i, s, "key");
                    var p, d = 0 | r._crypto_kdf_keybytes();
                    s.length !== d && v(i, "invalid key length"), p = y(s), i.push(p);
                    var g = new l(0 | e),
                        w = g.address;
                    i.push(w), r._crypto_kdf_derive_from_key(w, e, t, t >>> 24 >>> 8, c, p);
                    var k = u(g, o);
                    return f(i), k
                }

                function rt(e) {
                    var t = [];
                    h(e);
                    var n = new l(0 | r._crypto_kdf_keybytes()),
                        a = n.address;
                    t.push(a), r._crypto_kdf_keygen(a);
                    var s = u(n, e);
                    return f(t), s
                }

                function nt(e, t, n, a) {
                    var s = [];
                    h(a), e = m(s, e, "clientPublicKey");
                    var o, i = 0 | r._crypto_kx_publickeybytes();
                    e.length !== i && v(s, "invalid clientPublicKey length"), o = y(e), s.push(o), t = m(s, t, "clientSecretKey");
                    var c, _ = 0 | r._crypto_kx_secretkeybytes();
                    t.length !== _ && v(s, "invalid clientSecretKey length"), c = y(t), s.push(c), n = m(s, n, "serverPublicKey");
                    var p, d = 0 | r._crypto_kx_publickeybytes();
                    n.length !== d && v(s, "invalid serverPublicKey length"), p = y(n), s.push(p);
                    var b = new l(0 | r._crypto_kx_sessionkeybytes()),
                        w = b.address;
                    s.push(w);
                    var k = new l(0 | r._crypto_kx_sessionkeybytes()),
                        S = k.address;
                    if (s.push(S), 0 == (0 | r._crypto_kx_client_session_keys(w, S, o, c, p))) {
                        var E = u({
                            sharedRx: b,
                            sharedTx: k
                        }, a);
                        return f(s), E
                    }
                    g(s, "invalid usage")
                }

                function at(e) {
                    var t = [];
                    h(e);
                    var n = new l(0 | r._crypto_kx_publickeybytes()),
                        a = n.address;
                    t.push(a);
                    var s = new l(0 | r._crypto_kx_secretkeybytes()),
                        o = s.address;
                    if (t.push(o), 0 == (0 | r._crypto_kx_keypair(a, o))) {
                        var i = {
                            publicKey: u(n, e),
                            privateKey: u(s, e),
                            keyType: "x25519"
                        };
                        return f(t), i
                    }
                    g(t, "internal error")
                }

                function st(e, t) {
                    var n = [];
                    h(t), e = m(n, e, "seed");
                    var a, s = 0 | r._crypto_kx_seedbytes();
                    e.length !== s && v(n, "invalid seed length"), a = y(e), n.push(a);
                    var o = new l(0 | r._crypto_kx_publickeybytes()),
                        i = o.address;
                    n.push(i);
                    var c = new l(0 | r._crypto_kx_secretkeybytes()),
                        _ = c.address;
                    if (n.push(_), 0 == (0 | r._crypto_kx_seed_keypair(i, _, a))) {
                        var p = {
                            publicKey: u(o, t),
                            privateKey: u(c, t),
                            keyType: "x25519"
                        };
                        return f(n), p
                    }
                    g(n, "internal error")
                }

                function ot(e, t, n, a) {
                    var s = [];
                    h(a), e = m(s, e, "serverPublicKey");
                    var o, i = 0 | r._crypto_kx_publickeybytes();
                    e.length !== i && v(s, "invalid serverPublicKey length"), o = y(e), s.push(o), t = m(s, t, "serverSecretKey");
                    var c, _ = 0 | r._crypto_kx_secretkeybytes();
                    t.length !== _ && v(s, "invalid serverSecretKey length"), c = y(t), s.push(c), n = m(s, n, "clientPublicKey");
                    var p, d = 0 | r._crypto_kx_publickeybytes();
                    n.length !== d && v(s, "invalid clientPublicKey length"), p = y(n), s.push(p);
                    var b = new l(0 | r._crypto_kx_sessionkeybytes()),
                        w = b.address;
                    s.push(w);
                    var k = new l(0 | r._crypto_kx_sessionkeybytes()),
                        S = k.address;
                    if (s.push(S), 0 == (0 | r._crypto_kx_server_session_keys(w, S, o, c, p))) {
                        var E = u({
                            sharedRx: b,
                            sharedTx: k
                        }, a);
                        return f(s), E
                    }
                    g(s, "invalid usage")
                }

                function it(e, t, n) {
                    var a = [];
                    h(n);
                    var s = y(e = m(a, e, "message")),
                        o = e.length;
                    a.push(s), t = m(a, t, "key");
                    var i, c = 0 | r._crypto_onetimeauth_keybytes();
                    t.length !== c && v(a, "invalid key length"), i = y(t), a.push(i);
                    var _ = new l(0 | r._crypto_onetimeauth_bytes()),
                        p = _.address;
                    if (a.push(p), 0 == (0 | r._crypto_onetimeauth(p, s, o, 0, i))) {
                        var d = u(_, n);
                        return f(a), d
                    }
                    g(a, "invalid usage")
                }

                function ct(e, t) {
                    var n = [];
                    h(t), b(n, e, "state_address");
                    var a = new l(0 | r._crypto_onetimeauth_bytes()),
                        s = a.address;
                    if (n.push(s), 0 == (0 | r._crypto_onetimeauth_final(e, s))) {
                        var o = (r._free(e), u(a, t));
                        return f(n), o
                    }
                    g(n, "invalid usage")
                }

                function _t(e, t) {
                    var n = [];
                    h(t);
                    var a = null;
                    null != e && (a = y(e = m(n, e, "key")), e.length, n.push(a));
                    var s = new l(144).address;
                    if (0 == (0 | r._crypto_onetimeauth_init(s, a))) {
                        var o = s;
                        return f(n), o
                    }
                    g(n, "invalid usage")
                }

                function ut(e) {
                    var t = [];
                    h(e);
                    var n = new l(0 | r._crypto_onetimeauth_keybytes()),
                        a = n.address;
                    t.push(a), r._crypto_onetimeauth_keygen(a);
                    var s = u(n, e);
                    return f(t), s
                }

                function pt(e, t, n) {
                    var a = [];
                    h(n), b(a, e, "state_address");
                    var s = y(t = m(a, t, "message_chunk")),
                        o = t.length;
                    a.push(s), 0 != (0 | r._crypto_onetimeauth_update(e, s, o)) && g(a, "invalid usage"), f(a)
                }

                function ht(e, t, n) {
                    var a = [];
                    e = m(a, e, "hash");
                    var s, o = 0 | r._crypto_onetimeauth_bytes();
                    e.length !== o && v(a, "invalid hash length"), s = y(e), a.push(s);
                    var i = y(t = m(a, t, "message")),
                        c = t.length;
                    a.push(i), n = m(a, n, "key");
                    var _, u = 0 | r._crypto_onetimeauth_keybytes();
                    n.length !== u && v(a, "invalid key length"), _ = y(n), a.push(_);
                    var p = 0 == (0 | r._crypto_onetimeauth_verify(s, i, c, 0, _));
                    return f(a), p
                }

                function lt(e, t, n, a, s, o, i) {
                    var c = [];
                    h(i), b(c, e, "keyLength"), ("number" != typeof e || (0 | e) !== e || e < 0) && v(c, "keyLength must be an unsigned integer");
                    var _ = y(t = m(c, t, "password")),
                        p = t.length;
                    c.push(_), n = m(c, n, "salt");
                    var d, w = 0 | r._crypto_pwhash_saltbytes();
                    n.length !== w && v(c, "invalid salt length"), d = y(n), c.push(d), b(c, a, "opsLimit"), ("number" != typeof a || (0 | a) !== a || a < 0) && v(c, "opsLimit must be an unsigned integer"), b(c, s, "memLimit"), ("number" != typeof s || (0 | s) !== s || s < 0) && v(c, "memLimit must be an unsigned integer"), b(c, o, "algorithm"), ("number" != typeof o || (0 | o) !== o || o < 0) && v(c, "algorithm must be an unsigned integer");
                    var k = new l(0 | e),
                        S = k.address;
                    if (c.push(S), 0 == (0 | r._crypto_pwhash(S, e, 0, _, p, 0, d, a, 0, s, o))) {
                        var E = u(k, i);
                        return f(c), E
                    }
                    g(c, "invalid usage")
                }

                function yt(e, t, n, a, s, o) {
                    var i = [];
                    h(o), b(i, e, "keyLength"), ("number" != typeof e || (0 | e) !== e || e < 0) && v(i, "keyLength must be an unsigned integer");
                    var c = y(t = m(i, t, "password")),
                        _ = t.length;
                    i.push(c), n = m(i, n, "salt");
                    var p, d = 0 | r._crypto_pwhash_scryptsalsa208sha256_saltbytes();
                    n.length !== d && v(i, "invalid salt length"), p = y(n), i.push(p), b(i, a, "opsLimit"), ("number" != typeof a || (0 | a) !== a || a < 0) && v(i, "opsLimit must be an unsigned integer"), b(i, s, "memLimit"), ("number" != typeof s || (0 | s) !== s || s < 0) && v(i, "memLimit must be an unsigned integer");
                    var w = new l(0 | e),
                        k = w.address;
                    if (i.push(k), 0 == (0 | r._crypto_pwhash_scryptsalsa208sha256(k, e, 0, c, _, 0, p, a, 0, s))) {
                        var S = u(w, o);
                        return f(i), S
                    }
                    g(i, "invalid usage")
                }

                function dt(e, t, n, a, s, o, i) {
                    var c = [];
                    h(i);
                    var _ = y(e = m(c, e, "password")),
                        p = e.length;
                    c.push(_);
                    var d = y(t = m(c, t, "salt")),
                        w = t.length;
                    c.push(d), b(c, n, "opsLimit"), ("number" != typeof n || (0 | n) !== n || n < 0) && v(c, "opsLimit must be an unsigned integer"), b(c, a, "r"), ("number" != typeof a || (0 | a) !== a || a < 0) && v(c, "r must be an unsigned integer"), b(c, s, "p"), ("number" != typeof s || (0 | s) !== s || s < 0) && v(c, "p must be an unsigned integer"), b(c, o, "keyLength"), ("number" != typeof o || (0 | o) !== o || o < 0) && v(c, "keyLength must be an unsigned integer");
                    var k = new l(0 | o),
                        S = k.address;
                    if (c.push(S), 0 == (0 | r._crypto_pwhash_scryptsalsa208sha256_ll(_, p, d, w, n, 0, a, s, S, o))) {
                        var E = u(k, i);
                        return f(c), E
                    }
                    g(c, "invalid usage")
                }

                function ft(e, t, n, a) {
                    var s = [];
                    h(a);
                    var o = y(e = m(s, e, "password")),
                        i = e.length;
                    s.push(o), b(s, t, "opsLimit"), ("number" != typeof t || (0 | t) !== t || t < 0) && v(s, "opsLimit must be an unsigned integer"), b(s, n, "memLimit"), ("number" != typeof n || (0 | n) !== n || n < 0) && v(s, "memLimit must be an unsigned integer");
                    var c = new l(0 | r._crypto_pwhash_scryptsalsa208sha256_strbytes()).address;
                    if (s.push(c), 0 == (0 | r._crypto_pwhash_scryptsalsa208sha256_str(c, o, i, 0, t, 0, n))) {
                        var _ = r.UTF8ToString(c);
                        return f(s), _
                    }
                    g(s, "invalid usage")
                }

                function gt(e, t, n) {
                    var s = [];
                    h(n), "string" != typeof e && v(s, "hashed_password must be a string"), e = a(e + "\0"), null != i && e.length - 1 !== i && v(s, "invalid hashed_password length");
                    var o = y(e),
                        i = e.length - 1;
                    s.push(o);
                    var c = y(t = m(s, t, "password")),
                        _ = t.length;
                    s.push(c);
                    var u = 0 == (0 | r._crypto_pwhash_scryptsalsa208sha256_str_verify(o, c, _, 0));
                    return f(s), u
                }

                function vt(e, t, n, a) {
                    var s = [];
                    h(a);
                    var o = y(e = m(s, e, "password")),
                        i = e.length;
                    s.push(o), b(s, t, "opsLimit"), ("number" != typeof t || (0 | t) !== t || t < 0) && v(s, "opsLimit must be an unsigned integer"), b(s, n, "memLimit"), ("number" != typeof n || (0 | n) !== n || n < 0) && v(s, "memLimit must be an unsigned integer");
                    var c = new l(0 | r._crypto_pwhash_strbytes()).address;
                    if (s.push(c), 0 == (0 | r._crypto_pwhash_str(c, o, i, 0, t, 0, n))) {
                        var _ = r.UTF8ToString(c);
                        return f(s), _
                    }
                    g(s, "invalid usage")
                }

                function bt(e, t, n, s) {
                    var o = [];
                    h(s), "string" != typeof e && v(o, "hashed_password must be a string"), e = a(e + "\0"), null != c && e.length - 1 !== c && v(o, "invalid hashed_password length");
                    var i = y(e),
                        c = e.length - 1;
                    o.push(i), b(o, t, "opsLimit"), ("number" != typeof t || (0 | t) !== t || t < 0) && v(o, "opsLimit must be an unsigned integer"), b(o, n, "memLimit"), ("number" != typeof n || (0 | n) !== n || n < 0) && v(o, "memLimit must be an unsigned integer");
                    var _ = 0 != (0 | r._crypto_pwhash_str_needs_rehash(i, t, 0, n));
                    return f(o), _
                }

                function mt(e, t, n) {
                    var s = [];
                    h(n), "string" != typeof e && v(s, "hashed_password must be a string"), e = a(e + "\0"), null != i && e.length - 1 !== i && v(s, "invalid hashed_password length");
                    var o = y(e),
                        i = e.length - 1;
                    s.push(o);
                    var c = y(t = m(s, t, "password")),
                        _ = t.length;
                    s.push(c);
                    var u = 0 == (0 | r._crypto_pwhash_str_verify(o, c, _, 0));
                    return f(s), u
                }

                function wt(e, t, n) {
                    var a = [];
                    h(n), e = m(a, e, "privateKey");
                    var s, o = 0 | r._crypto_scalarmult_scalarbytes();
                    e.length !== o && v(a, "invalid privateKey length"), s = y(e), a.push(s), t = m(a, t, "publicKey");
                    var i, c = 0 | r._crypto_scalarmult_bytes();
                    t.length !== c && v(a, "invalid publicKey length"), i = y(t), a.push(i);
                    var _ = new l(0 | r._crypto_scalarmult_bytes()),
                        p = _.address;
                    if (a.push(p), 0 == (0 | r._crypto_scalarmult(p, s, i))) {
                        var d = u(_, n);
                        return f(a), d
                    }
                    g(a, "weak public key")
                }

                function kt(e, t) {
                    var n = [];
                    h(t), e = m(n, e, "privateKey");
                    var a, s = 0 | r._crypto_scalarmult_scalarbytes();
                    e.length !== s && v(n, "invalid privateKey length"), a = y(e), n.push(a);
                    var o = new l(0 | r._crypto_scalarmult_bytes()),
                        i = o.address;
                    if (n.push(i), 0 == (0 | r._crypto_scalarmult_base(i, a))) {
                        var c = u(o, t);
                        return f(n), c
                    }
                    g(n, "unknown error")
                }

                function St(e, t, n) {
                    var a = [];
                    h(n), e = m(a, e, "n");
                    var s, o = 0 | r._crypto_scalarmult_ed25519_scalarbytes();
                    e.length !== o && v(a, "invalid n length"), s = y(e), a.push(s), t = m(a, t, "p");
                    var i, c = 0 | r._crypto_scalarmult_ed25519_bytes();
                    t.length !== c && v(a, "invalid p length"), i = y(t), a.push(i);
                    var _ = new l(0 | r._crypto_scalarmult_ed25519_bytes()),
                        p = _.address;
                    if (a.push(p), 0 == (0 | r._crypto_scalarmult_ed25519(p, s, i))) {
                        var d = u(_, n);
                        return f(a), d
                    }
                    g(a, "invalid point or scalar is 0")
                }

                function Et(e, t) {
                    var n = [];
                    h(t), e = m(n, e, "scalar");
                    var a, s = 0 | r._crypto_scalarmult_ed25519_scalarbytes();
                    e.length !== s && v(n, "invalid scalar length"), a = y(e), n.push(a);
                    var o = new l(0 | r._crypto_scalarmult_ed25519_bytes()),
                        i = o.address;
                    if (n.push(i), 0 == (0 | r._crypto_scalarmult_ed25519_base(i, a))) {
                        var c = u(o, t);
                        return f(n), c
                    }
                    g(n, "scalar is 0")
                }

                function xt(e, t) {
                    var n = [];
                    h(t), e = m(n, e, "scalar");
                    var a, s = 0 | r._crypto_scalarmult_ed25519_scalarbytes();
                    e.length !== s && v(n, "invalid scalar length"), a = y(e), n.push(a);
                    var o = new l(0 | r._crypto_scalarmult_ed25519_bytes()),
                        i = o.address;
                    if (n.push(i), 0 == (0 | r._crypto_scalarmult_ed25519_base_noclamp(i, a))) {
                        var c = u(o, t);
                        return f(n), c
                    }
                    g(n, "scalar is 0")
                }

                function Tt(e, t, n) {
                    var a = [];
                    h(n), e = m(a, e, "n");
                    var s, o = 0 | r._crypto_scalarmult_ed25519_scalarbytes();
                    e.length !== o && v(a, "invalid n length"), s = y(e), a.push(s), t = m(a, t, "p");
                    var i, c = 0 | r._crypto_scalarmult_ed25519_bytes();
                    t.length !== c && v(a, "invalid p length"), i = y(t), a.push(i);
                    var _ = new l(0 | r._crypto_scalarmult_ed25519_bytes()),
                        p = _.address;
                    if (a.push(p), 0 == (0 | r._crypto_scalarmult_ed25519_noclamp(p, s, i))) {
                        var d = u(_, n);
                        return f(a), d
                    }
                    g(a, "invalid point or scalar is 0")
                }

                function Pt(e, t, n) {
                    var a = [];
                    h(n), e = m(a, e, "scalar");
                    var s, o = 0 | r._crypto_scalarmult_ristretto255_scalarbytes();
                    e.length !== o && v(a, "invalid scalar length"), s = y(e), a.push(s), t = m(a, t, "element");
                    var i, c = 0 | r._crypto_scalarmult_ristretto255_bytes();
                    t.length !== c && v(a, "invalid element length"), i = y(t), a.push(i);
                    var _ = new l(0 | r._crypto_scalarmult_ristretto255_bytes()),
                        p = _.address;
                    if (a.push(p), 0 == (0 | r._crypto_scalarmult_ristretto255(p, s, i))) {
                        var d = u(_, n);
                        return f(a), d
                    }
                    g(a, "result is identity element")
                }

                function At(e, t) {
                    var n = [];
                    h(t), e = m(n, e, "scalar");
                    var a, s = 0 | r._crypto_core_ristretto255_scalarbytes();
                    e.length !== s && v(n, "invalid scalar length"), a = y(e), n.push(a);
                    var o = new l(0 | r._crypto_core_ristretto255_bytes()),
                        i = o.address;
                    if (n.push(i), 0 == (0 | r._crypto_scalarmult_ristretto255_base(i, a))) {
                        var c = u(o, t);
                        return f(n), c
                    }
                    g(n, "scalar is 0")
                }

                function Bt(e, t, n, a) {
                    var s = [];
                    h(a);
                    var o = y(e = m(s, e, "message")),
                        i = e.length;
                    s.push(o), t = m(s, t, "nonce");
                    var c, _ = 0 | r._crypto_secretbox_noncebytes();
                    t.length !== _ && v(s, "invalid nonce length"), c = y(t), s.push(c), n = m(s, n, "key");
                    var p, d = 0 | r._crypto_secretbox_keybytes();
                    n.length !== d && v(s, "invalid key length"), p = y(n), s.push(p);
                    var b = new l(0 | i),
                        w = b.address;
                    s.push(w);
                    var k = new l(0 | r._crypto_secretbox_macbytes()),
                        S = k.address;
                    if (s.push(S), 0 == (0 | r._crypto_secretbox_detached(w, S, o, i, 0, c, p))) {
                        var E = u({
                            mac: k,
                            cipher: b
                        }, a);
                        return f(s), E
                    }
                    g(s, "invalid usage")
                }

                function Ot(e, t, n, a) {
                    var s = [];
                    h(a);
                    var o = y(e = m(s, e, "message")),
                        i = e.length;
                    s.push(o), t = m(s, t, "nonce");
                    var c, _ = 0 | r._crypto_secretbox_noncebytes();
                    t.length !== _ && v(s, "invalid nonce length"), c = y(t), s.push(c), n = m(s, n, "key");
                    var p, d = 0 | r._crypto_secretbox_keybytes();
                    n.length !== d && v(s, "invalid key length"), p = y(n), s.push(p);
                    var b = new l(i + r._crypto_secretbox_macbytes() | 0),
                        w = b.address;
                    if (s.push(w), 0 == (0 | r._crypto_secretbox_easy(w, o, i, 0, c, p))) {
                        var k = u(b, a);
                        return f(s), k
                    }
                    g(s, "invalid usage")
                }

                function Mt(e) {
                    var t = [];
                    h(e);
                    var n = new l(0 | r._crypto_secretbox_keybytes()),
                        a = n.address;
                    t.push(a), r._crypto_secretbox_keygen(a);
                    var s = u(n, e);
                    return f(t), s
                }

                function It(e, t, n, a, s) {
                    var o = [];
                    h(s);
                    var i = y(e = m(o, e, "ciphertext")),
                        c = e.length;
                    o.push(i), t = m(o, t, "mac");
                    var _, p = 0 | r._crypto_secretbox_macbytes();
                    t.length !== p && v(o, "invalid mac length"), _ = y(t), o.push(_), n = m(o, n, "nonce");
                    var d, b = 0 | r._crypto_secretbox_noncebytes();
                    n.length !== b && v(o, "invalid nonce length"), d = y(n), o.push(d), a = m(o, a, "key");
                    var w, k = 0 | r._crypto_secretbox_keybytes();
                    a.length !== k && v(o, "invalid key length"), w = y(a), o.push(w);
                    var S = new l(0 | c),
                        E = S.address;
                    if (o.push(E), 0 == (0 | r._crypto_secretbox_open_detached(E, i, _, c, 0, d, w))) {
                        var x = u(S, s);
                        return f(o), x
                    }
                    g(o, "wrong secret key for the given ciphertext")
                }

                function Yt(e, t, n, a) {
                    var s = [];
                    h(a), e = m(s, e, "ciphertext");
                    var o, i = r._crypto_secretbox_macbytes(),
                        c = e.length;
                    c < i && v(s, "ciphertext is too short"), o = y(e), s.push(o), t = m(s, t, "nonce");
                    var _, p = 0 | r._crypto_secretbox_noncebytes();
                    t.length !== p && v(s, "invalid nonce length"), _ = y(t), s.push(_), n = m(s, n, "key");
                    var d, b = 0 | r._crypto_secretbox_keybytes();
                    n.length !== b && v(s, "invalid key length"), d = y(n), s.push(d);
                    var w = new l(c - r._crypto_secretbox_macbytes() | 0),
                        k = w.address;
                    if (s.push(k), 0 == (0 | r._crypto_secretbox_open_easy(k, o, c, 0, _, d))) {
                        var S = u(w, a);
                        return f(s), S
                    }
                    g(s, "wrong secret key for the given ciphertext")
                }

                function Rt(e, t, n) {
                    var a = [];
                    h(n), e = m(a, e, "header");
                    var s, o = 0 | r._crypto_secretstream_xchacha20poly1305_headerbytes();
                    e.length !== o && v(a, "invalid header length"), s = y(e), a.push(s), t = m(a, t, "key");
                    var i, c = 0 | r._crypto_secretstream_xchacha20poly1305_keybytes();
                    t.length !== c && v(a, "invalid key length"), i = y(t), a.push(i);
                    var _ = new l(52).address;
                    if (0 == (0 | r._crypto_secretstream_xchacha20poly1305_init_pull(_, s, i))) {
                        var u = _;
                        return f(a), u
                    }
                    g(a, "invalid usage")
                }

                function jt(e, t) {
                    var n = [];
                    h(t), e = m(n, e, "key");
                    var a, s = 0 | r._crypto_secretstream_xchacha20poly1305_keybytes();
                    e.length !== s && v(n, "invalid key length"), a = y(e), n.push(a);
                    var o = new l(52).address,
                        i = new l(0 | r._crypto_secretstream_xchacha20poly1305_headerbytes()),
                        c = i.address;
                    if (n.push(c), 0 == (0 | r._crypto_secretstream_xchacha20poly1305_init_push(o, c, a))) {
                        var _ = {
                            state: o,
                            header: u(i, t)
                        };
                        return f(n), _
                    }
                    g(n, "invalid usage")
                }

                function Kt(e) {
                    var t = [];
                    h(e);
                    var n = new l(0 | r._crypto_secretstream_xchacha20poly1305_keybytes()),
                        a = n.address;
                    t.push(a), r._crypto_secretstream_xchacha20poly1305_keygen(a);
                    var s = u(n, e);
                    return f(t), s
                }

                function Ut(e, t, n, a) {
                    var s = [];
                    h(a), b(s, e, "state_address"), t = m(s, t, "cipher");
                    var o, i = r._crypto_secretstream_xchacha20poly1305_abytes(),
                        c = t.length;
                    c < i && v(s, "cipher is too short"), o = y(t), s.push(o);
                    var _ = null,
                        p = 0;
                    null != n && (_ = y(n = m(s, n, "ad")), p = n.length, s.push(_));
                    var g = new l(c - r._crypto_secretstream_xchacha20poly1305_abytes() | 0),
                        w = g.address;
                    s.push(w);
                    var k, S = (k = d(1), s.push(k), (S = 0 === r._crypto_secretstream_xchacha20poly1305_pull(e, w, 0, k, o, c, 0, _, p) && {
                        tag: r.HEAPU8[k],
                        message: g
                    }) && {
                        message: u(S.message, a),
                        tag: S.tag
                    });
                    return f(s), S
                }

                function Nt(e, t, n, a, s) {
                    var o = [];
                    h(s), b(o, e, "state_address");
                    var i = y(t = m(o, t, "message_chunk")),
                        c = t.length;
                    o.push(i);
                    var _ = null,
                        p = 0;
                    null != n && (_ = y(n = m(o, n, "ad")), p = n.length, o.push(_)), b(o, a, "tag"), ("number" != typeof a || (0 | a) !== a || a < 0) && v(o, "tag must be an unsigned integer");
                    var d = new l(c + r._crypto_secretstream_xchacha20poly1305_abytes() | 0),
                        w = d.address;
                    if (o.push(w), 0 == (0 | r._crypto_secretstream_xchacha20poly1305_push(e, w, 0, i, c, 0, _, p, 0, a))) {
                        var k = u(d, s);
                        return f(o), k
                    }
                    g(o, "invalid usage")
                }

                function Ct(e, t) {
                    var n = [];
                    return h(t), b(n, e, "state_address"), r._crypto_secretstream_xchacha20poly1305_rekey(e), f(n), !0
                }

                function Dt(e, t, n) {
                    var a = [];
                    h(n);
                    var s = y(e = m(a, e, "message")),
                        o = e.length;
                    a.push(s), t = m(a, t, "key");
                    var i, c = 0 | r._crypto_shorthash_keybytes();
                    t.length !== c && v(a, "invalid key length"), i = y(t), a.push(i);
                    var _ = new l(0 | r._crypto_shorthash_bytes()),
                        p = _.address;
                    if (a.push(p), 0 == (0 | r._crypto_shorthash(p, s, o, 0, i))) {
                        var d = u(_, n);
                        return f(a), d
                    }
                    g(a, "invalid usage")
                }

                function Ft(e) {
                    var t = [];
                    h(e);
                    var n = new l(0 | r._crypto_shorthash_keybytes()),
                        a = n.address;
                    t.push(a), r._crypto_shorthash_keygen(a);
                    var s = u(n, e);
                    return f(t), s
                }

                function Lt(e, t, n) {
                    var a = [];
                    h(n);
                    var s = y(e = m(a, e, "message")),
                        o = e.length;
                    a.push(s), t = m(a, t, "key");
                    var i, c = 0 | r._crypto_shorthash_siphashx24_keybytes();
                    t.length !== c && v(a, "invalid key length"), i = y(t), a.push(i);
                    var _ = new l(0 | r._crypto_shorthash_siphashx24_bytes()),
                        p = _.address;
                    if (a.push(p), 0 == (0 | r._crypto_shorthash_siphashx24(p, s, o, 0, i))) {
                        var d = u(_, n);
                        return f(a), d
                    }
                    g(a, "invalid usage")
                }

                function Jt(e, t, n) {
                    var a = [];
                    h(n);
                    var s = y(e = m(a, e, "message")),
                        o = e.length;
                    a.push(s), t = m(a, t, "privateKey");
                    var i, c = 0 | r._crypto_sign_secretkeybytes();
                    t.length !== c && v(a, "invalid privateKey length"), i = y(t), a.push(i);
                    var _ = new l(e.length + r._crypto_sign_bytes() | 0),
                        p = _.address;
                    if (a.push(p), 0 == (0 | r._crypto_sign(p, null, s, o, 0, i))) {
                        var d = u(_, n);
                        return f(a), d
                    }
                    g(a, "invalid usage")
                }

                function Gt(e, t, n) {
                    var a = [];
                    h(n);
                    var s = y(e = m(a, e, "message")),
                        o = e.length;
                    a.push(s), t = m(a, t, "privateKey");
                    var i, c = 0 | r._crypto_sign_secretkeybytes();
                    t.length !== c && v(a, "invalid privateKey length"), i = y(t), a.push(i);
                    var _ = new l(0 | r._crypto_sign_bytes()),
                        p = _.address;
                    if (a.push(p), 0 == (0 | r._crypto_sign_detached(p, null, s, o, 0, i))) {
                        var d = u(_, n);
                        return f(a), d
                    }
                    g(a, "invalid usage")
                }

                function Ht(e, t) {
                    var n = [];
                    h(t), e = m(n, e, "edPk");
                    var a, s = 0 | r._crypto_sign_publickeybytes();
                    e.length !== s && v(n, "invalid edPk length"), a = y(e), n.push(a);
                    var o = new l(0 | r._crypto_scalarmult_scalarbytes()),
                        i = o.address;
                    if (n.push(i), 0 == (0 | r._crypto_sign_ed25519_pk_to_curve25519(i, a))) {
                        var c = u(o, t);
                        return f(n), c
                    }
                    g(n, "invalid key")
                }

                function Wt(e, t) {
                    var n = [];
                    h(t), e = m(n, e, "edSk");
                    var a, s = 0 | r._crypto_sign_secretkeybytes();
                    e.length !== s && v(n, "invalid edSk length"), a = y(e), n.push(a);
                    var o = new l(0 | r._crypto_scalarmult_scalarbytes()),
                        i = o.address;
                    if (n.push(i), 0 == (0 | r._crypto_sign_ed25519_sk_to_curve25519(i, a))) {
                        var c = u(o, t);
                        return f(n), c
                    }
                    g(n, "invalid key")
                }

                function zt(e, t) {
                    var n = [];
                    h(t), e = m(n, e, "privateKey");
                    var a, s = 0 | r._crypto_sign_secretkeybytes();
                    e.length !== s && v(n, "invalid privateKey length"), a = y(e), n.push(a);
                    var o = new l(0 | r._crypto_sign_publickeybytes()),
                        i = o.address;
                    if (n.push(i), 0 == (0 | r._crypto_sign_ed25519_sk_to_pk(i, a))) {
                        var c = u(o, t);
                        return f(n), c
                    }
                    g(n, "invalid key")
                }

                function Xt(e, t) {
                    var n = [];
                    h(t), e = m(n, e, "privateKey");
                    var a, s = 0 | r._crypto_sign_secretkeybytes();
                    e.length !== s && v(n, "invalid privateKey length"), a = y(e), n.push(a);
                    var o = new l(0 | r._crypto_sign_seedbytes()),
                        i = o.address;
                    if (n.push(i), 0 == (0 | r._crypto_sign_ed25519_sk_to_seed(i, a))) {
                        var c = u(o, t);
                        return f(n), c
                    }
                    g(n, "invalid key")
                }

                function $t(e, t, n) {
                    var a = [];
                    h(n), b(a, e, "state_address"), t = m(a, t, "privateKey");
                    var s, o = 0 | r._crypto_sign_secretkeybytes();
                    t.length !== o && v(a, "invalid privateKey length"), s = y(t), a.push(s);
                    var i = new l(0 | r._crypto_sign_bytes()),
                        c = i.address;
                    if (a.push(c), 0 == (0 | r._crypto_sign_final_create(e, c, null, s))) {
                        var _ = (r._free(e), u(i, n));
                        return f(a), _
                    }
                    g(a, "invalid usage")
                }

                function Vt(e, t, n, a) {
                    var s = [];
                    h(a), b(s, e, "state_address"), t = m(s, t, "signature");
                    var o, i = 0 | r._crypto_sign_bytes();
                    t.length !== i && v(s, "invalid signature length"), o = y(t), s.push(o), n = m(s, n, "publicKey");
                    var c, _ = 0 | r._crypto_sign_publickeybytes();
                    n.length !== _ && v(s, "invalid publicKey length"), c = y(n), s.push(c);
                    var u = 0 == (0 | r._crypto_sign_final_verify(e, o, c));
                    return f(s), u
                }

                function qt(e) {
                    var t = [];
                    h(e);
                    var n = new l(208).address;
                    if (0 == (0 | r._crypto_sign_init(n))) {
                        var a = n;
                        return f(t), a
                    }
                    g(t, "internal error")
                }

                function Zt(e) {
                    var t = [];
                    h(e);
                    var n = new l(0 | r._crypto_sign_publickeybytes()),
                        a = n.address;
                    t.push(a);
                    var s = new l(0 | r._crypto_sign_secretkeybytes()),
                        o = s.address;
                    if (t.push(o), 0 == (0 | r._crypto_sign_keypair(a, o))) {
                        var i = {
                            publicKey: u(n, e),
                            privateKey: u(s, e),
                            keyType: "ed25519"
                        };
                        return f(t), i
                    }
                    g(t, "internal error")
                }

                function Qt(e, t, n) {
                    var a = [];
                    h(n), e = m(a, e, "signedMessage");
                    var s, o = r._crypto_sign_bytes(),
                        i = e.length;
                    i < o && v(a, "signedMessage is too short"), s = y(e), a.push(s), t = m(a, t, "publicKey");
                    var c, _ = 0 | r._crypto_sign_publickeybytes();
                    t.length !== _ && v(a, "invalid publicKey length"), c = y(t), a.push(c);
                    var p = new l(i - r._crypto_sign_bytes() | 0),
                        d = p.address;
                    if (a.push(d), 0 == (0 | r._crypto_sign_open(d, null, s, i, 0, c))) {
                        var b = u(p, n);
                        return f(a), b
                    }
                    g(a, "incorrect signature for the given public key")
                }

                function er(e, t) {
                    var n = [];
                    h(t), e = m(n, e, "seed");
                    var a, s = 0 | r._crypto_sign_seedbytes();
                    e.length !== s && v(n, "invalid seed length"), a = y(e), n.push(a);
                    var o = new l(0 | r._crypto_sign_publickeybytes()),
                        i = o.address;
                    n.push(i);
                    var c = new l(0 | r._crypto_sign_secretkeybytes()),
                        _ = c.address;
                    if (n.push(_), 0 == (0 | r._crypto_sign_seed_keypair(i, _, a))) {
                        var p = {
                            publicKey: u(o, t),
                            privateKey: u(c, t),
                            keyType: "ed25519"
                        };
                        return f(n), p
                    }
                    g(n, "invalid usage")
                }

                function tr(e, t, n) {
                    var a = [];
                    h(n), b(a, e, "state_address");
                    var s = y(t = m(a, t, "message_chunk")),
                        o = t.length;
                    a.push(s), 0 != (0 | r._crypto_sign_update(e, s, o, 0)) && g(a, "invalid usage"), f(a)
                }

                function rr(e, t, n) {
                    var a = [];
                    e = m(a, e, "signature");
                    var s, o = 0 | r._crypto_sign_bytes();
                    e.length !== o && v(a, "invalid signature length"), s = y(e), a.push(s);
                    var i = y(t = m(a, t, "message")),
                        c = t.length;
                    a.push(i), n = m(a, n, "publicKey");
                    var _, u = 0 | r._crypto_sign_publickeybytes();
                    n.length !== u && v(a, "invalid publicKey length"), _ = y(n), a.push(_);
                    var p = 0 == (0 | r._crypto_sign_verify_detached(s, i, c, 0, _));
                    return f(a), p
                }

                function nr(e, t, n, a) {
                    var s = [];
                    h(a), b(s, e, "outLength"), ("number" != typeof e || (0 | e) !== e || e < 0) && v(s, "outLength must be an unsigned integer"), t = m(s, t, "key");
                    var o, i = 0 | r._crypto_stream_chacha20_keybytes();
                    t.length !== i && v(s, "invalid key length"), o = y(t), s.push(o), n = m(s, n, "nonce");
                    var c, _ = 0 | r._crypto_stream_chacha20_noncebytes();
                    n.length !== _ && v(s, "invalid nonce length"), c = y(n), s.push(c);
                    var p = new l(0 | e),
                        d = p.address;
                    s.push(d), r._crypto_stream_chacha20(d, e, 0, c, o);
                    var g = u(p, a);
                    return f(s), g
                }

                function ar(e, t, n, a) {
                    var s = [];
                    h(a);
                    var o = y(e = m(s, e, "input_message")),
                        i = e.length;
                    s.push(o), t = m(s, t, "nonce");
                    var c, _ = 0 | r._crypto_stream_chacha20_ietf_noncebytes();
                    t.length !== _ && v(s, "invalid nonce length"), c = y(t), s.push(c), n = m(s, n, "key");
                    var p, d = 0 | r._crypto_stream_chacha20_ietf_keybytes();
                    n.length !== d && v(s, "invalid key length"), p = y(n), s.push(p);
                    var b = new l(0 | i),
                        w = b.address;
                    if (s.push(w), 0 === r._crypto_stream_chacha20_ietf_xor(w, o, i, 0, c, p)) {
                        var k = u(b, a);
                        return f(s), k
                    }
                    g(s, "invalid usage")
                }

                function sr(e, t, n, a, s) {
                    var o = [];
                    h(s);
                    var i = y(e = m(o, e, "input_message")),
                        c = e.length;
                    o.push(i), t = m(o, t, "nonce");
                    var _, p = 0 | r._crypto_stream_chacha20_ietf_noncebytes();
                    t.length !== p && v(o, "invalid nonce length"), _ = y(t), o.push(_), b(o, n, "nonce_increment"), ("number" != typeof n || (0 | n) !== n || n < 0) && v(o, "nonce_increment must be an unsigned integer"), a = m(o, a, "key");
                    var d, w = 0 | r._crypto_stream_chacha20_ietf_keybytes();
                    a.length !== w && v(o, "invalid key length"), d = y(a), o.push(d);
                    var k = new l(0 | c),
                        S = k.address;
                    if (o.push(S), 0 === r._crypto_stream_chacha20_ietf_xor_ic(S, i, c, 0, _, n, d)) {
                        var E = u(k, s);
                        return f(o), E
                    }
                    g(o, "invalid usage")
                }

                function or(e) {
                    var t = [];
                    h(e);
                    var n = new l(0 | r._crypto_stream_chacha20_keybytes()),
                        a = n.address;
                    t.push(a), r._crypto_stream_chacha20_keygen(a);
                    var s = u(n, e);
                    return f(t), s
                }

                function ir(e, t, n, a) {
                    var s = [];
                    h(a);
                    var o = y(e = m(s, e, "input_message")),
                        i = e.length;
                    s.push(o), t = m(s, t, "nonce");
                    var c, _ = 0 | r._crypto_stream_chacha20_noncebytes();
                    t.length !== _ && v(s, "invalid nonce length"), c = y(t), s.push(c), n = m(s, n, "key");
                    var p, d = 0 | r._crypto_stream_chacha20_keybytes();
                    n.length !== d && v(s, "invalid key length"), p = y(n), s.push(p);
                    var b = new l(0 | i),
                        w = b.address;
                    if (s.push(w), 0 === r._crypto_stream_chacha20_xor(w, o, i, 0, c, p)) {
                        var k = u(b, a);
                        return f(s), k
                    }
                    g(s, "invalid usage")
                }

                function cr(e, t, n, a, s) {
                    var o = [];
                    h(s);
                    var i = y(e = m(o, e, "input_message")),
                        c = e.length;
                    o.push(i), t = m(o, t, "nonce");
                    var _, p = 0 | r._crypto_stream_chacha20_noncebytes();
                    t.length !== p && v(o, "invalid nonce length"), _ = y(t), o.push(_), b(o, n, "nonce_increment"), ("number" != typeof n || (0 | n) !== n || n < 0) && v(o, "nonce_increment must be an unsigned integer"), a = m(o, a, "key");
                    var d, w = 0 | r._crypto_stream_chacha20_keybytes();
                    a.length !== w && v(o, "invalid key length"), d = y(a), o.push(d);
                    var k = new l(0 | c),
                        S = k.address;
                    if (o.push(S), 0 === r._crypto_stream_chacha20_xor_ic(S, i, c, 0, _, n, 0, d)) {
                        var E = u(k, s);
                        return f(o), E
                    }
                    g(o, "invalid usage")
                }

                function _r(e) {
                    var t = [];
                    h(e);
                    var n = new l(0 | r._crypto_stream_keybytes()),
                        a = n.address;
                    t.push(a), r._crypto_stream_keygen(a);
                    var s = u(n, e);
                    return f(t), s
                }

                function ur(e) {
                    var t = [];
                    h(e);
                    var n = new l(0 | r._crypto_stream_xchacha20_keybytes()),
                        a = n.address;
                    t.push(a), r._crypto_stream_xchacha20_keygen(a);
                    var s = u(n, e);
                    return f(t), s
                }

                function pr(e, t, n, a) {
                    var s = [];
                    h(a);
                    var o = y(e = m(s, e, "input_message")),
                        i = e.length;
                    s.push(o), t = m(s, t, "nonce");
                    var c, _ = 0 | r._crypto_stream_xchacha20_noncebytes();
                    t.length !== _ && v(s, "invalid nonce length"), c = y(t), s.push(c), n = m(s, n, "key");
                    var p, d = 0 | r._crypto_stream_xchacha20_keybytes();
                    n.length !== d && v(s, "invalid key length"), p = y(n), s.push(p);
                    var b = new l(0 | i),
                        w = b.address;
                    if (s.push(w), 0 === r._crypto_stream_xchacha20_xor(w, o, i, 0, c, p)) {
                        var k = u(b, a);
                        return f(s), k
                    }
                    g(s, "invalid usage")
                }

                function hr(e, t, n, a, s) {
                    var o = [];
                    h(s);
                    var i = y(e = m(o, e, "input_message")),
                        c = e.length;
                    o.push(i), t = m(o, t, "nonce");
                    var _, p = 0 | r._crypto_stream_xchacha20_noncebytes();
                    t.length !== p && v(o, "invalid nonce length"), _ = y(t), o.push(_), b(o, n, "nonce_increment"), ("number" != typeof n || (0 | n) !== n || n < 0) && v(o, "nonce_increment must be an unsigned integer"), a = m(o, a, "key");
                    var d, w = 0 | r._crypto_stream_xchacha20_keybytes();
                    a.length !== w && v(o, "invalid key length"), d = y(a), o.push(d);
                    var k = new l(0 | c),
                        S = k.address;
                    if (o.push(S), 0 === r._crypto_stream_xchacha20_xor_ic(S, i, c, 0, _, n, 0, d)) {
                        var E = u(k, s);
                        return f(o), E
                    }
                    g(o, "invalid usage")
                }

                function lr(e, t) {
                    var n = [];
                    h(t), b(n, e, "length"), ("number" != typeof e || (0 | e) !== e || e < 0) && v(n, "length must be an unsigned integer");
                    var a = new l(0 | e),
                        s = a.address;
                    n.push(s), r._randombytes_buf(s, e);
                    var o = u(a, t);
                    return f(n), o
                }

                function yr(e, t, n) {
                    var a = [];
                    h(n), b(a, e, "length"), ("number" != typeof e || (0 | e) !== e || e < 0) && v(a, "length must be an unsigned integer"), t = m(a, t, "seed");
                    var s, o = 0 | r._randombytes_seedbytes();
                    t.length !== o && v(a, "invalid seed length"), s = y(t), a.push(s);
                    var i = new l(0 | e),
                        c = i.address;
                    a.push(c), r._randombytes_buf_deterministic(c, e, s);
                    var _ = u(i, n);
                    return f(a), _
                }

                function dr(e) {
                    h(e), r._randombytes_close()
                }

                function fr(e) {
                    h(e);
                    var t = r._randombytes_random() >>> 0;
                    return f([]), t
                }

                function gr(e, t) {
                    var n = [];
                    h(t);
                    for (var a = r._malloc(24), s = 0; s < 6; s++) r.setValue(a + 4 * s, r.Runtime.addFunction(e[["implementation_name", "random", "stir", "uniform", "buf", "close"][s]]), "i32");
                    0 != (0 | r._randombytes_set_implementation(a)) && g(n, "unsupported implementation"), f(n)
                }

                function vr(e) {
                    h(e), r._randombytes_stir()
                }

                function br(e, t) {
                    var n = [];
                    h(t), b(n, e, "upper_bound"), ("number" != typeof e || (0 | e) !== e || e < 0) && v(n, "upper_bound must be an unsigned integer");
                    var a = r._randombytes_uniform(e) >>> 0;
                    return f(n), a
                }

                function mr() {
                    var e = r._sodium_version_string(),
                        t = r.UTF8ToString(e);
                    return f([]), t
                }
                return l.prototype.to_Uint8Array = function() {
                    var e = new Uint8Array(this.length);
                    return e.set(r.HEAPU8.subarray(this.address, this.address + this.length)), e
                }, e.add = function(e, t) {
                    if (!(e instanceof Uint8Array && t instanceof Uint8Array)) throw new TypeError("Only Uint8Array instances can added");
                    var r = e.length,
                        n = 0,
                        a = 0;
                    if (t.length != e.length) throw new TypeError("Arguments must have the same length");
                    for (a = 0; a < r; a++) n >>= 8, n += e[a] + t[a], e[a] = 255 & n
                }, e.base64_variants = i, e.compare = function(e, t) {
                    if (!(e instanceof Uint8Array && t instanceof Uint8Array)) throw new TypeError("Only Uint8Array instances can be compared");
                    if (e.length !== t.length) throw new TypeError("Only instances of identical length can be compared");
                    for (var r = 0, n = 1, a = e.length; a-- > 0;) r |= t[a] - e[a] >> 8 & n, n &= (t[a] ^ e[a]) - 1 >> 8;
                    return r + r + n - 1
                }, e.from_base64 = function(e, t) {
                    t = c(t);
                    var n, a = [],
                        s = new l(3 * (e = m(a, e, "input")).length / 4),
                        o = y(e),
                        i = d(4),
                        _ = d(4);
                    return a.push(o), a.push(s.address), a.push(s.result_bin_len_p), a.push(s.b64_end_p), 0 !== r._sodium_base642bin(s.address, s.length, o, e.length, 0, i, _, t) && g(a, "invalid input"), r.getValue(_, "i32") - o !== e.length && g(a, "incomplete input"), s.length = r.getValue(i, "i32"), n = s.to_Uint8Array(), f(a), n
                }, e.from_hex = function(e) {
                    var t, n = [],
                        a = new l((e = m(n, e, "input")).length / 2),
                        s = y(e),
                        o = d(4);
                    return n.push(s), n.push(a.address), n.push(a.hex_end_p), 0 !== r._sodium_hex2bin(a.address, a.length, s, e.length, 0, 0, o) && g(n, "invalid input"), r.getValue(o, "i32") - s !== e.length && g(n, "incomplete input"), t = a.to_Uint8Array(), f(n), t
                }, e.from_string = a, e.increment = function(e) {
                    if (!(e instanceof Uint8Array)) throw new TypeError("Only Uint8Array instances can be incremented");
                    for (var t = 256, r = 0, n = e.length; r < n; r++) t >>= 8, t += e[r], e[r] = 255 & t
                }, e.is_zero = function(e) {
                    if (!(e instanceof Uint8Array)) throw new TypeError("Only Uint8Array instances can be checked");
                    for (var t = 0, r = 0, n = e.length; r < n; r++) t |= e[r];
                    return 0 === t
                }, e.libsodium = t, e.memcmp = function(e, t) {
                    if (!(e instanceof Uint8Array && t instanceof Uint8Array)) throw new TypeError("Only Uint8Array instances can be compared");
                    if (e.length !== t.length) throw new TypeError("Only instances of identical length can be compared");
                    for (var r = 0, n = 0, a = e.length; n < a; n++) r |= e[n] ^ t[n];
                    return 0 === r
                }, e.memzero = function(e) {
                    if (!(e instanceof Uint8Array)) throw new TypeError("Only Uint8Array instances can be wiped");
                    for (var t = 0, r = e.length; t < r; t++) e[t] = 0
                }, e.output_formats = function() {
                    return ["uint8array", "text", "hex", "base64"]
                }, e.pad = function(e, t) {
                    if (!(e instanceof Uint8Array)) throw new TypeError("buffer must be a Uint8Array");
                    if ((t |= 0) <= 0) throw new Error("block size must be > 0");
                    var n, a = [],
                        s = d(4),
                        o = 1,
                        i = 0,
                        c = 0 | e.length,
                        _ = new l(c + t);
                    a.push(s), a.push(_.address);
                    for (var u = _.address, p = _.address + c + t; u < p; u++) r.HEAPU8[u] = e[i], i += o = 1 & ~((65535 & ((c -= o) >>> 48 | c >>> 32 | c >>> 16 | c)) - 1 >> 16);
                    return 0 !== r._sodium_pad(s, _.address, e.length, t, _.length) && g(a, "internal error"), _.length = r.getValue(s, "i32"), n = _.to_Uint8Array(), f(a), n
                }, e.unpad = function(e, t) {
                    if (!(e instanceof Uint8Array)) throw new TypeError("buffer must be a Uint8Array");
                    if ((t |= 0) <= 0) throw new Error("block size must be > 0");
                    var n = [],
                        a = y(e),
                        s = d(4);
                    return n.push(a), n.push(s), 0 !== r._sodium_unpad(s, a, e.length, t) && g(n, "unsupported/invalid padding"), e = (e = new Uint8Array(e)).subarray(0, r.getValue(s, "i32")), f(n), e
                }, e.ready = n, e.symbols = function() {
                    return Object.keys(e).sort()
                }, e.to_base64 = _, e.to_hex = o, e.to_string = s, e
            }) ? n.apply(t, a) : n) && (e.exports = s), i && o.sodium.ready.then((function() {
                i(o.sodium)
            }))
        },
        4269: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.Random = void 0;
            t.Random = class Random {
                static getBytes(e) {
                    try {
                        const t = "object" == typeof window ? window : self,
                            r = void 0 !== t.crypto ? t.crypto : t.msCrypto,
                            n = new Uint8Array(e);
                        return r.getRandomValues(n), n
                    } catch (t) {
                        try {
                            const t = r(24);
                            return new Uint8Array([...t.randomBytes(e)])
                        } catch (e) {
                            throw new Error("No secure random number generator found")
                        }
                    }
                }
            }
        },
        4270: function(e, t, r) {
            "use strict";
            var n = this && this.__importDefault || function(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            };
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.ripemd160 = t.Ripemd160 = void 0;
            const a = n(r(382));
            class Ripemd160 {
                constructor(e) {
                    this.blockSize = 64, this.impl = new a.default, e && this.update(e)
                }
                update(e) {
                    return this.impl.update(Buffer.from(e)), this
                }
                digest() {
                    return Uint8Array.from(this.impl.digest())
                }
            }
            t.Ripemd160 = Ripemd160, t.ripemd160 = function(e) {
                return new Ripemd160(e).digest()
            }
        },
        4271: function(e, t, r) {
            "use strict";
            var n = this && this.__importDefault || function(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            };
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.Secp256k1 = void 0;
            const a = r(68),
                s = n(r(35)),
                o = n(r(85)),
                i = r(2025),
                c = new o.default.ec("secp256k1"),
                _ = new s.default("FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFEBAAEDCE6AF48A03BBFD25E8CD0364141", "hex");
            t.Secp256k1 = class Secp256k1 {
                static async makeKeypair(e) {
                    if (32 !== e.length) throw new Error("input data is not a valid secp256k1 private key");
                    const t = c.keyFromPrivate(e);
                    if (!0 !== t.validate().result) throw new Error("input data is not a valid secp256k1 private key");
                    if (new s.default(e).gte(_)) throw new Error("input data is not a valid secp256k1 private key");
                    return {
                        privkey: a.fromHex(t.getPrivate("hex")),
                        pubkey: Uint8Array.from(t.getPublic("array"))
                    }
                }
                static async createSignature(e, t) {
                    if (0 === e.length) throw new Error("Message hash must not be empty");
                    if (e.length > 32) throw new Error("Message hash length must not exceed 32 bytes");
                    const r = c.keyFromPrivate(t),
                        {
                            r: n,
                            s: a,
                            recoveryParam: s
                        } = r.sign(e, {
                            canonical: !0
                        });
                    if ("number" != typeof s) throw new Error("Recovery param missing");
                    return new i.ExtendedSecp256k1Signature(Uint8Array.from(n.toArray()), Uint8Array.from(a.toArray()), s)
                }
                static async verifySignature(e, t, r) {
                    if (0 === t.length) throw new Error("Message hash must not be empty");
                    if (t.length > 32) throw new Error("Message hash length must not exceed 32 bytes");
                    const n = c.keyFromPublic(r);
                    try {
                        return n.verify(t, e.toDer())
                    } catch (e) {
                        return !1
                    }
                }
                static recoverPubkey(e, t) {
                    const r = {
                            r: a.toHex(e.r()),
                            s: a.toHex(e.s())
                        },
                        n = c.recoverPubKey(t, r, e.recovery),
                        s = c.keyFromPublic(n);
                    return a.fromHex(s.getPublic(!1, "hex"))
                }
                static compressPubkey(e) {
                    switch (e.length) {
                        case 33:
                            return e;
                        case 65:
                            return Uint8Array.from(c.keyFromPublic(e).getPublic(!0, "array"));
                        default:
                            throw new Error("Invalid pubkey length")
                    }
                }
                static trimRecoveryByte(e) {
                    switch (e.length) {
                        case 64:
                            return e;
                        case 65:
                            return e.slice(0, 64);
                        default:
                            throw new Error("Invalid signature length")
                    }
                }
            }
        },
        4272: function(e, t, r) {
            "use strict";
            var n = this && this.__importDefault || function(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            };
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.stringToPath = t.pathToString = t.Slip10 = t.Slip10RawIndex = t.slip10CurveFromString = t.Slip10Curve = void 0;
            const a = r(68),
                s = r(149),
                o = n(r(35)),
                i = n(r(85)),
                c = r(2024),
                _ = r(2026);
            var u;
            ! function(e) {
                e.Secp256k1 = "Bitcoin seed", e.Ed25519 = "ed25519 seed"
            }(u = t.Slip10Curve || (t.Slip10Curve = {})), t.slip10CurveFromString = function(e) {
                switch (e) {
                    case u.Ed25519:
                        return u.Ed25519;
                    case u.Secp256k1:
                        return u.Secp256k1;
                    default:
                        throw new Error(`Unknown curve string: '${e}'`)
                }
            };
            class Slip10RawIndex extends s.Uint32 {
                static hardened(e) {
                    return new Slip10RawIndex(e + 2 ** 31)
                }
                static normal(e) {
                    return new Slip10RawIndex(e)
                }
                isHardened() {
                    return this.data >= 2 ** 31
                }
            }
            t.Slip10RawIndex = Slip10RawIndex;
            const p = new i.default.ec("secp256k1");
            class Slip10 {
                static derivePath(e, t, r) {
                    let n = this.master(e, t);
                    for (const t of r) n = this.child(e, n.privkey, n.chainCode, t);
                    return n
                }
                static master(e, t) {
                    const r = new c.Hmac(_.Sha512, a.toAscii(e)).update(t).digest(),
                        n = r.slice(0, 32),
                        s = r.slice(32, 64);
                    return e !== u.Ed25519 && (this.isZero(n) || this.isGteN(e, n)) ? this.master(e, r) : {
                        chainCode: s,
                        privkey: n
                    }
                }
                static child(e, t, r, n) {
                    let a;
                    if (n.isHardened()) {
                        const e = new Uint8Array([0, ...t, ...n.toBytesBigEndian()]);
                        a = new c.Hmac(_.Sha512, r).update(e).digest()
                    } else {
                        if (e === u.Ed25519) throw new Error("Normal keys are not allowed with ed25519");
                        {
                            const s = new Uint8Array([...Slip10.serializedPoint(e, new o.default(t)), ...n.toBytesBigEndian()]);
                            a = new c.Hmac(_.Sha512, r).update(s).digest()
                        }
                    }
                    return this.childImpl(e, t, r, n, a)
                }
                static serializedPoint(e, t) {
                    switch (e) {
                        case u.Secp256k1:
                            return a.fromHex(p.g.mul(t).encodeCompressed("hex"));
                        default:
                            throw new Error("curve not supported")
                    }
                }
                static childImpl(e, t, r, n, a) {
                    const s = a.slice(0, 32),
                        i = a.slice(32, 64),
                        p = i;
                    if (e === u.Ed25519) return {
                        chainCode: p,
                        privkey: s
                    };
                    const h = this.n(e),
                        l = new o.default(s).add(new o.default(t)).mod(h),
                        y = Uint8Array.from(l.toArray("be", 32));
                    if (this.isGteN(e, s) || this.isZero(y)) {
                        const a = new c.Hmac(_.Sha512, r).update(new Uint8Array([1, ...i, ...n.toBytesBigEndian()])).digest();
                        return this.childImpl(e, t, r, n, a)
                    }
                    return {
                        chainCode: p,
                        privkey: y
                    }
                }
                static isZero(e) {
                    return e.every(e => 0 === e)
                }
                static isGteN(e, t) {
                    return new o.default(t).gte(this.n(e))
                }
                static n(e) {
                    switch (e) {
                        case u.Secp256k1:
                            return new o.default("FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFEBAAEDCE6AF48A03BBFD25E8CD0364141", 16);
                        default:
                            throw new Error("curve not supported")
                    }
                }
            }
            t.Slip10 = Slip10, t.pathToString = function(e) {
                return e.reduce((e, t) => e + "/" + (t.isHardened() ? t.toNumber() - 2 ** 31 + "'" : t.toString()), "m")
            }, t.stringToPath = function(e) {
                if (!e.startsWith("m")) throw new Error("Path string must start with 'm'");
                let t = e.slice(1);
                const r = new Array;
                for (; t;) {
                    const e = t.match(/^\/([0-9]+)('?)/);
                    if (!e) throw new Error("Syntax error while reading path component");
                    const [n, a, o] = e, i = s.Uint53.fromString(a).toNumber();
                    if (i >= 2 ** 31) throw new Error("Component value too high. Must not exceed 2**31-1.");
                    o ? r.push(Slip10RawIndex.hardened(i)) : r.push(Slip10RawIndex.normal(i)), t = t.slice(n.length)
                }
                return r
            }
        },
        4273: function(e, t, r) {
            "use strict";
            var n = this && this.__importDefault || function(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            };
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.Decimal = void 0;
            const a = n(r(35));
            class Decimal {
                constructor(e, t) {
                    this.data = {
                        atomics: new a.default(e),
                        fractionalDigits: t
                    }
                }
                static fromUserInput(e, t) {
                    Decimal.verifyFractionalDigits(t);
                    const r = e.match(/[^0-9.]/);
                    if (r) throw new Error("Invalid character at position " + (r.index + 1));
                    let n, a;
                    if (-1 === e.search(/\./)) n = e, a = "";
                    else {
                        const t = e.split(".");
                        switch (t.length) {
                            case 0:
                            case 1:
                                throw new Error("Fewer than two elements in split result. This must not happen here.");
                            case 2:
                                if (!t[1]) throw new Error("Fractional part missing");
                                n = t[0], a = t[1].replace(/0+$/, "");
                                break;
                            default:
                                throw new Error("More than one separator found")
                        }
                    }
                    if (a.length > t) throw new Error("Got more fractional digits than supported");
                    const s = `${n}${a.padEnd(t,"0")}`;
                    return new Decimal(s, t)
                }
                static fromAtomics(e, t) {
                    return Decimal.verifyFractionalDigits(t), new Decimal(e, t)
                }
                static verifyFractionalDigits(e) {
                    if (!Number.isInteger(e)) throw new Error("Fractional digits is not an integer");
                    if (e < 0) throw new Error("Fractional digits must not be negative");
                    if (e > 100) throw new Error("Fractional digits must not exceed 100")
                }
                static compare(e, t) {
                    if (e.fractionalDigits !== t.fractionalDigits) throw new Error("Fractional digits do not match");
                    return e.data.atomics.cmp(new a.default(t.atomics))
                }
                get atomics() {
                    return this.data.atomics.toString()
                }
                get fractionalDigits() {
                    return this.data.fractionalDigits
                }
                toString() {
                    const e = new a.default(10).pow(new a.default(this.data.fractionalDigits)),
                        t = this.data.atomics.div(e),
                        r = this.data.atomics.mod(e);
                    if (r.isZero()) return t.toString();
                    {
                        const e = r.toString().padStart(this.data.fractionalDigits, "0").replace(/0+$/, "");
                        return `${t.toString()}.${e}`
                    }
                }
                toFloatApproximation() {
                    const e = Number(this.toString());
                    if (Number.isNaN(e)) throw new Error("Conversion to number failed");
                    return e
                }
                plus(e) {
                    if (this.fractionalDigits !== e.fractionalDigits) throw new Error("Fractional digits do not match");
                    const t = this.data.atomics.add(new a.default(e.atomics));
                    return new Decimal(t.toString(), this.fractionalDigits)
                }
                minus(e) {
                    if (this.fractionalDigits !== e.fractionalDigits) throw new Error("Fractional digits do not match");
                    const t = this.data.atomics.sub(new a.default(e.atomics));
                    if (t.ltn(0)) throw new Error("Difference must not be negative");
                    return new Decimal(t.toString(), this.fractionalDigits)
                }
                multiply(e) {
                    const t = this.data.atomics.mul(new a.default(e.toString()));
                    return new Decimal(t.toString(), this.fractionalDigits)
                }
                equals(e) {
                    return 0 === Decimal.compare(this, e)
                }
                isLessThan(e) {
                    return Decimal.compare(this, e) < 0
                }
                isLessThanOrEqual(e) {
                    return Decimal.compare(this, e) <= 0
                }
                isGreaterThan(e) {
                    return Decimal.compare(this, e) > 0
                }
                isGreaterThanOrEqual(e) {
                    return Decimal.compare(this, e) >= 0
                }
            }
            t.Decimal = Decimal
        },
        4274: function(e, t, r) {
            "use strict";
            var n = this && this.__importDefault || function(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            };
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.Uint64 = t.Uint53 = t.Int53 = t.Uint32 = void 0;
            const a = n(r(35)),
                s = new a.default("18446744073709551615", 10, "be");
            class Uint32 {
                constructor(e) {
                    if (Number.isNaN(e)) throw new Error("Input is not a number");
                    if (!Number.isInteger(e)) throw new Error("Input is not an integer");
                    if (e < 0 || e > 4294967295) throw new Error("Input not in uint32 range: " + e.toString());
                    this.data = e
                }
                static fromBigEndianBytes(e) {
                    return Uint32.fromBytes(e)
                }
                static fromBytes(e, t = "be") {
                    if (4 !== e.length) throw new Error("Invalid input length. Expected 4 bytes.");
                    for (let t = 0; t < e.length; ++t)
                        if (!Number.isInteger(e[t]) || e[t] > 255 || e[t] < 0) throw new Error("Invalid value in byte. Found: " + e[t]);
                    const r = "be" === t ? e : Array.from(e).reverse();
                    return new Uint32(r[0] * 2 ** 24 + 65536 * r[1] + 256 * r[2] + r[3])
                }
                static fromString(e) {
                    if (!e.match(/^[0-9]+$/)) throw new Error("Invalid string format");
                    return new Uint32(Number.parseInt(e, 10))
                }
                toBytesBigEndian() {
                    return new Uint8Array([255 & Math.floor(this.data / 2 ** 24), 255 & Math.floor(this.data / 65536), 255 & Math.floor(this.data / 256), 255 & Math.floor(this.data / 1)])
                }
                toBytesLittleEndian() {
                    return new Uint8Array([255 & Math.floor(this.data / 1), 255 & Math.floor(this.data / 256), 255 & Math.floor(this.data / 65536), 255 & Math.floor(this.data / 2 ** 24)])
                }
                toNumber() {
                    return this.data
                }
                toString() {
                    return this.data.toString()
                }
            }
            t.Uint32 = Uint32;
            class Int53 {
                constructor(e) {
                    if (Number.isNaN(e)) throw new Error("Input is not a number");
                    if (!Number.isInteger(e)) throw new Error("Input is not an integer");
                    if (e < Number.MIN_SAFE_INTEGER || e > Number.MAX_SAFE_INTEGER) throw new Error("Input not in int53 range: " + e.toString());
                    this.data = e
                }
                static fromString(e) {
                    if (!e.match(/^-?[0-9]+$/)) throw new Error("Invalid string format");
                    return new Int53(Number.parseInt(e, 10))
                }
                toNumber() {
                    return this.data
                }
                toString() {
                    return this.data.toString()
                }
            }
            t.Int53 = Int53;
            class Uint53 {
                constructor(e) {
                    const t = new Int53(e);
                    if (t.toNumber() < 0) throw new Error("Input is negative");
                    this.data = t
                }
                static fromString(e) {
                    const t = Int53.fromString(e);
                    return new Uint53(t.toNumber())
                }
                toNumber() {
                    return this.data.toNumber()
                }
                toString() {
                    return this.data.toString()
                }
            }
            t.Uint53 = Uint53;
            class Uint64 {
                constructor(e) {
                    if (e.isNeg()) throw new Error("Input is negative");
                    if (e.gt(s)) throw new Error("Input exceeds uint64 range");
                    this.data = e
                }
                static fromBytesBigEndian(e) {
                    return Uint64.fromBytes(e)
                }
                static fromBytes(e, t = "be") {
                    if (8 !== e.length) throw new Error("Invalid input length. Expected 8 bytes.");
                    for (let t = 0; t < e.length; ++t)
                        if (!Number.isInteger(e[t]) || e[t] > 255 || e[t] < 0) throw new Error("Invalid value in byte. Found: " + e[t]);
                    const r = "be" === t ? Array.from(e) : Array.from(e).reverse();
                    return new Uint64(new a.default(r))
                }
                static fromString(e) {
                    if (!e.match(/^[0-9]+$/)) throw new Error("Invalid string format");
                    return new Uint64(new a.default(e, 10, "be"))
                }
                static fromNumber(e) {
                    if (Number.isNaN(e)) throw new Error("Input is not a number");
                    if (!Number.isInteger(e)) throw new Error("Input is not an integer");
                    let t;
                    try {
                        t = new a.default(e)
                    } catch (e) {
                        throw new Error("Input is not a safe integer")
                    }
                    return new Uint64(t)
                }
                toBytesBigEndian() {
                    return Uint8Array.from(this.data.toArray("be", 8))
                }
                toBytesLittleEndian() {
                    return Uint8Array.from(this.data.toArray("le", 8))
                }
                toString() {
                    return this.data.toString(10)
                }
                toNumber() {
                    return this.data.toNumber()
                }
            }
            t.Uint64 = Uint64
        },
        4275: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.parseCoins = t.coins = t.coin = void 0;
            const n = r(149);

            function a(e, t) {
                return {
                    amount: new n.Uint53(e).toString(),
                    denom: t
                }
            }
            t.coin = a, t.coins = function(e, t) {
                return [a(e, t)]
            }, t.parseCoins = function(e) {
                return e.replace(/\s/g, "").split(",").filter(Boolean).map(e => {
                    const t = e.match(/^([0-9]+)([a-zA-Z]+)/);
                    if (!t) throw new Error("Got an invalid coin string");
                    return {
                        amount: n.Uint64.fromString(t[1]).toString(),
                        denom: t[2]
                    }
                })
            }
        },
        4276: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.createMultisigThresholdPubkey = t.compareArrays = void 0;
            const n = r(68),
                a = r(149),
                s = r(672);

            function o(e, t) {
                const r = n.toHex(e),
                    a = n.toHex(t);
                return r === a ? 0 : r < a ? -1 : 1
            }
            t.compareArrays = o, t.createMultisigThresholdPubkey = function(e, t, r = !1) {
                const n = new a.Uint53(t);
                if (n.toNumber() > e.length) throw new Error(`Threshold k = ${n.toNumber()} exceeds number of keys n = ${e.length}`);
                const i = r ? e : Array.from(e).sort((e, t) => o(s.pubkeyToRawAddress(e), s.pubkeyToRawAddress(t)));
                return {
                    type: "tendermint/PubKeyMultisigThreshold",
                    value: {
                        threshold: n.toString(),
                        pubkeys: i
                    }
                }
            }
        },
        4277: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.Secp256k1HdWallet = t.extractKdfConfiguration = void 0;
            const n = r(184),
                a = r(68),
                s = r(185),
                o = r(672),
                i = r(2027),
                c = r(1142),
                _ = r(1143),
                u = r(2028),
                p = {
                    algorithm: "argon2id",
                    params: {
                        outputLength: 32,
                        opsLimit: 24,
                        memLimitKib: 12288
                    }
                };
            t.extractKdfConfiguration = function(e) {
                const t = JSON.parse(e);
                if (!s.isNonNullObject(t)) throw new Error("Root document is not an object.");
                switch (t.type) {
                    case "secp256k1wallet-v1":
                        return t.kdf;
                    default:
                        throw new Error("Unsupported serialization type")
                }
            };
            const h = {
                bip39Password: "",
                hdPaths: [i.makeCosmoshubPath(0)],
                prefix: "cosmos"
            };
            class Secp256k1HdWallet {
                constructor(e, t) {
                    var r, n;
                    const a = null !== (r = t.hdPaths) && void 0 !== r ? r : h.hdPaths,
                        s = null !== (n = t.prefix) && void 0 !== n ? n : h.prefix;
                    this.secret = e, this.seed = t.seed, this.accounts = a.map(e => ({
                        hdPath: e,
                        prefix: s
                    }))
                }
                static async fromMnemonic(e, t = {}) {
                    const r = new n.EnglishMnemonic(e),
                        a = await n.Bip39.mnemonicToSeed(r, t.bip39Password);
                    return new Secp256k1HdWallet(r, Object.assign(Object.assign({}, t), {
                        seed: a
                    }))
                }
                static async generate(e = 12, t = {}) {
                    const r = 4 * Math.floor(11 * e / 33),
                        a = n.Random.getBytes(r),
                        s = n.Bip39.encode(a);
                    return Secp256k1HdWallet.fromMnemonic(s.toString(), t)
                }
                static async deserialize(e, t) {
                    const r = JSON.parse(e);
                    if (!s.isNonNullObject(r)) throw new Error("Root document is not an object.");
                    switch (r.type) {
                        case "secp256k1wallet-v1":
                            return Secp256k1HdWallet.deserializeTypeV1(e, t);
                        default:
                            throw new Error("Unsupported serialization type")
                    }
                }
                static async deserializeWithEncryptionKey(e, t) {
                    const r = JSON.parse(e);
                    if (!s.isNonNullObject(r)) throw new Error("Root document is not an object.");
                    const o = r;
                    switch (o.type) {
                        case "secp256k1wallet-v1": {
                            const e = await u.decrypt(a.fromBase64(o.data), t, o.encryption),
                                r = JSON.parse(a.fromUtf8(e)),
                                {
                                    mnemonic: i,
                                    accounts: c
                                } = r;
                            if (s.assert("string" == typeof i), !Array.isArray(c)) throw new Error("Property 'accounts' is not an array");
                            if (!c.every(e => {
                                    return t = e, !!s.isNonNullObject(t) && "string" == typeof t.hdPath && "string" == typeof t.prefix;
                                    var t
                                })) throw new Error("Account is not in the correct format.");
                            const _ = c[0].prefix;
                            if (!c.every(({
                                    prefix: e
                                }) => e === _)) throw new Error("Accounts do not all have the same prefix");
                            const p = c.map(({
                                hdPath: e
                            }) => n.stringToPath(e));
                            return Secp256k1HdWallet.fromMnemonic(i, {
                                hdPaths: p,
                                prefix: _
                            })
                        }
                        default:
                            throw new Error("Unsupported serialization type")
                    }
                }
                static async deserializeTypeV1(e, t) {
                    const r = JSON.parse(e);
                    if (!s.isNonNullObject(r)) throw new Error("Root document is not an object.");
                    const n = await u.executeKdf(t, r.kdf);
                    return Secp256k1HdWallet.deserializeWithEncryptionKey(e, n)
                }
                get mnemonic() {
                    return this.secret.toString()
                }
                async getAccounts() {
                    return (await this.getAccountsWithPrivkeys()).map(({
                        algo: e,
                        pubkey: t,
                        address: r
                    }) => ({
                        algo: e,
                        pubkey: t,
                        address: r
                    }))
                }
                async signAmino(e, t) {
                    const r = (await this.getAccountsWithPrivkeys()).find(({
                        address: t
                    }) => t === e);
                    if (void 0 === r) throw new Error(`Address ${e} not found in wallet`);
                    const {
                        privkey: a,
                        pubkey: s
                    } = r, o = n.sha256(_.serializeSignDoc(t)), i = await n.Secp256k1.createSignature(o, a), u = new Uint8Array([...i.r(32), ...i.s(32)]);
                    return {
                        signed: t,
                        signature: c.encodeSecp256k1Signature(s, u)
                    }
                }
                async serialize(e) {
                    const t = p,
                        r = await u.executeKdf(e, t);
                    return this.serializeWithEncryptionKey(r, t)
                }
                async serializeWithEncryptionKey(e, t) {
                    const r = {
                            mnemonic: this.mnemonic,
                            accounts: this.accounts.map(({
                                hdPath: e,
                                prefix: t
                            }) => ({
                                hdPath: n.pathToString(e),
                                prefix: t
                            }))
                        },
                        s = a.toUtf8(JSON.stringify(r)),
                        o = {
                            algorithm: u.supportedAlgorithms.xchacha20poly1305Ietf
                        },
                        i = await u.encrypt(s, e, o),
                        c = {
                            type: "secp256k1wallet-v1",
                            kdf: t,
                            encryption: o,
                            data: a.toBase64(i)
                        };
                    return JSON.stringify(c)
                }
                async getKeyPair(e) {
                    const {
                        privkey: t
                    } = n.Slip10.derivePath(n.Slip10Curve.Secp256k1, this.seed, e), {
                        pubkey: r
                    } = await n.Secp256k1.makeKeypair(t);
                    return {
                        privkey: t,
                        pubkey: n.Secp256k1.compressPubkey(r)
                    }
                }
                async getAccountsWithPrivkeys() {
                    return Promise.all(this.accounts.map(async ({
                        hdPath: e,
                        prefix: t
                    }) => {
                        const {
                            privkey: r,
                            pubkey: n
                        } = await this.getKeyPair(e);
                        return {
                            algo: "secp256k1",
                            privkey: r,
                            pubkey: n,
                            address: a.Bech32.encode(t, o.rawSecp256k1PubkeyToRawAddress(n))
                        }
                    }))
                }
            }
            t.Secp256k1HdWallet = Secp256k1HdWallet
        },
        4278: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.Secp256k1Wallet = void 0;
            const n = r(184),
                a = r(68),
                s = r(672),
                o = r(1142),
                i = r(1143);
            class Secp256k1Wallet {
                constructor(e, t, r) {
                    this.privkey = e, this.pubkey = t, this.prefix = r
                }
                static async fromKey(e, t = "cosmos") {
                    const r = (await n.Secp256k1.makeKeypair(e)).pubkey;
                    return new Secp256k1Wallet(e, n.Secp256k1.compressPubkey(r), t)
                }
                get address() {
                    return a.Bech32.encode(this.prefix, s.rawSecp256k1PubkeyToRawAddress(this.pubkey))
                }
                async getAccounts() {
                    return [{
                        algo: "secp256k1",
                        address: this.address,
                        pubkey: this.pubkey
                    }]
                }
                async signAmino(e, t) {
                    if (e !== this.address) throw new Error(`Address ${e} not found in wallet`);
                    const r = new n.Sha256(i.serializeSignDoc(t)).digest(),
                        a = await n.Secp256k1.createSignature(r, this.privkey),
                        s = new Uint8Array([...a.r(32), ...a.s(32)]);
                    return {
                        signed: t,
                        signature: o.encodeSecp256k1Signature(this.pubkey, s)
                    }
                }
            }
            t.Secp256k1Wallet = Secp256k1Wallet
        },
        4279: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.parseCoins = void 0;
            const n = r(149);
            t.parseCoins = function(e) {
                return e.replace(/\s/g, "").split(",").filter(Boolean).map(e => {
                    const t = e.match(/^([0-9]+)([a-zA-Z][a-zA-Z0-9/]{2,127})$/);
                    if (!t) throw new Error("Got an invalid coin string");
                    return {
                        amount: n.Uint64.fromString(t[1]).toString(),
                        denom: t[2]
                    }
                })
            }
        },
        4280: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.decodeTxRaw = void 0;
            const n = r(435);
            t.decodeTxRaw = function(e) {
                const t = n.TxRaw.decode(e);
                return {
                    authInfo: n.AuthInfo.decode(t.authInfoBytes),
                    body: n.TxBody.decode(t.bodyBytes),
                    signatures: t.signatures
                }
            }
        },
        4281: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.Registry = t.isTxBodyEncodeObject = t.isPbjsGeneratedType = t.isTsProtoGeneratedType = void 0;
            const n = r(2029),
                a = r(160),
                s = r(435),
                o = r(113);

            function i(e) {
                return "function" == typeof e.fromPartial
            }
            t.isTsProtoGeneratedType = i, t.isPbjsGeneratedType = function(e) {
                return !i(e)
            };
            const c = {
                cosmosCoin: "/cosmos.base.v1beta1.Coin",
                cosmosMsgSend: "/cosmos.bank.v1beta1.MsgSend",
                cosmosTxBody: "/cosmos.tx.v1beta1.TxBody",
                googleAny: "/google.protobuf.Any"
            };

            function _(e) {
                return "/cosmos.tx.v1beta1.TxBody" === e.typeUrl
            }
            t.isTxBodyEncodeObject = _;
            t.Registry = class Registry {
                constructor(e = []) {
                    const {
                        cosmosCoin: t,
                        cosmosMsgSend: r
                    } = c;
                    this.types = new Map([
                        [t, a.Coin],
                        [r, n.MsgSend], ...e
                    ])
                }
                register(e, t) {
                    this.types.set(e, t)
                }
                lookupType(e) {
                    return this.types.get(e)
                }
                lookupTypeWithError(e) {
                    const t = this.lookupType(e);
                    if (!t) throw new Error("Unregistered type url: " + e);
                    return t
                }
                encode(e) {
                    const {
                        value: t,
                        typeUrl: r
                    } = e;
                    if (_(e)) return this.encodeTxBody(t);
                    const n = this.lookupTypeWithError(r),
                        a = i(n) ? n.fromPartial(t) : n.create(t);
                    return n.encode(a).finish()
                }
                encodeTxBody(e) {
                    const t = e.messages.map(e => {
                            const t = this.encode(e);
                            return o.Any.fromPartial({
                                typeUrl: e.typeUrl,
                                value: t
                            })
                        }),
                        r = s.TxBody.fromPartial(Object.assign(Object.assign({}, e), {
                            messages: t
                        }));
                    return s.TxBody.encode(r).finish()
                }
                decode({
                    typeUrl: e,
                    value: t
                }) {
                    if (e === c.cosmosTxBody) return this.decodeTxBody(t);
                    const r = this.lookupTypeWithError(e).decode(t);
                    return Object.entries(r).forEach(([e, t]) => {
                        "undefined" != typeof Buffer && void 0 !== Buffer.isBuffer && Buffer.isBuffer(t) && (r[e] = Uint8Array.from(t))
                    }), r
                }
                decodeTxBody(e) {
                    const t = s.TxBody.decode(e);
                    return Object.assign(Object.assign({}, t), {
                        messages: t.messages.map(({
                            typeUrl: e,
                            value: t
                        }) => {
                            if (!e) throw new Error("Missing type_url in Any");
                            if (!t) throw new Error("Missing value in Any");
                            return this.decode({
                                typeUrl: e,
                                value: t
                            })
                        })
                    })
                }
            }
        },
        4282: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.DirectSecp256k1HdWallet = t.extractKdfConfiguration = void 0;
            const n = r(356),
                a = r(184),
                s = r(68),
                o = r(185),
                i = r(1145),
                c = r(2031),
                _ = {
                    algorithm: "argon2id",
                    params: {
                        outputLength: 32,
                        opsLimit: 24,
                        memLimitKib: 12288
                    }
                };
            t.extractKdfConfiguration = function(e) {
                const t = JSON.parse(e);
                if (!o.isNonNullObject(t)) throw new Error("Root document is not an object.");
                switch (t.type) {
                    case "directsecp256k1hdwallet-v1":
                        return t.kdf;
                    default:
                        throw new Error("Unsupported serialization type")
                }
            };
            const u = {
                bip39Password: "",
                hdPaths: [n.makeCosmoshubPath(0)],
                prefix: "cosmos"
            };
            class DirectSecp256k1HdWallet {
                constructor(e, t) {
                    var r, n;
                    const a = null !== (r = t.prefix) && void 0 !== r ? r : u.prefix,
                        s = null !== (n = t.hdPaths) && void 0 !== n ? n : u.hdPaths;
                    this.secret = e, this.seed = t.seed, this.accounts = s.map(e => ({
                        hdPath: e,
                        prefix: a
                    }))
                }
                static async fromMnemonic(e, t = {}) {
                    const r = new a.EnglishMnemonic(e),
                        n = await a.Bip39.mnemonicToSeed(r, t.bip39Password);
                    return new DirectSecp256k1HdWallet(r, Object.assign(Object.assign({}, t), {
                        seed: n
                    }))
                }
                static async generate(e = 12, t = {}) {
                    const r = 4 * Math.floor(11 * e / 33),
                        n = a.Random.getBytes(r),
                        s = a.Bip39.encode(n);
                    return DirectSecp256k1HdWallet.fromMnemonic(s.toString(), t)
                }
                static async deserialize(e, t) {
                    const r = JSON.parse(e);
                    if (!o.isNonNullObject(r)) throw new Error("Root document is not an object.");
                    switch (r.type) {
                        case "directsecp256k1hdwallet-v1":
                            return DirectSecp256k1HdWallet.deserializeTypeV1(e, t);
                        default:
                            throw new Error("Unsupported serialization type")
                    }
                }
                static async deserializeWithEncryptionKey(e, t) {
                    const r = JSON.parse(e);
                    if (!o.isNonNullObject(r)) throw new Error("Root document is not an object.");
                    const n = r;
                    switch (n.type) {
                        case "directsecp256k1hdwallet-v1": {
                            const e = await c.decrypt(s.fromBase64(n.data), t, n.encryption),
                                r = JSON.parse(s.fromUtf8(e)),
                                {
                                    mnemonic: i,
                                    accounts: _
                                } = r;
                            if (o.assert("string" == typeof i), !Array.isArray(_)) throw new Error("Property 'accounts' is not an array");
                            if (!_.every(e => {
                                    return t = e, !!o.isNonNullObject(t) && "string" == typeof t.hdPath && "string" == typeof t.prefix;
                                    var t
                                })) throw new Error("Account is not in the correct format.");
                            const u = _[0].prefix;
                            if (!_.every(({
                                    prefix: e
                                }) => e === u)) throw new Error("Accounts do not all have the same prefix");
                            const p = _.map(({
                                hdPath: e
                            }) => a.stringToPath(e));
                            return DirectSecp256k1HdWallet.fromMnemonic(i, {
                                hdPaths: p,
                                prefix: u
                            })
                        }
                        default:
                            throw new Error("Unsupported serialization type")
                    }
                }
                static async deserializeTypeV1(e, t) {
                    const r = JSON.parse(e);
                    if (!o.isNonNullObject(r)) throw new Error("Root document is not an object.");
                    const n = await c.executeKdf(t, r.kdf);
                    return DirectSecp256k1HdWallet.deserializeWithEncryptionKey(e, n)
                }
                get mnemonic() {
                    return this.secret.toString()
                }
                async getAccounts() {
                    return (await this.getAccountsWithPrivkeys()).map(({
                        algo: e,
                        pubkey: t,
                        address: r
                    }) => ({
                        algo: e,
                        pubkey: t,
                        address: r
                    }))
                }
                async signDirect(e, t) {
                    const r = (await this.getAccountsWithPrivkeys()).find(({
                        address: t
                    }) => t === e);
                    if (void 0 === r) throw new Error(`Address ${e} not found in wallet`);
                    const {
                        privkey: s,
                        pubkey: o
                    } = r, c = i.makeSignBytes(t), _ = a.sha256(c), u = await a.Secp256k1.createSignature(_, s), p = new Uint8Array([...u.r(32), ...u.s(32)]);
                    return {
                        signed: t,
                        signature: n.encodeSecp256k1Signature(o, p)
                    }
                }
                async serialize(e) {
                    const t = _,
                        r = await c.executeKdf(e, t);
                    return this.serializeWithEncryptionKey(r, t)
                }
                async serializeWithEncryptionKey(e, t) {
                    const r = {
                            mnemonic: this.mnemonic,
                            accounts: this.accounts.map(({
                                hdPath: e,
                                prefix: t
                            }) => ({
                                hdPath: a.pathToString(e),
                                prefix: t
                            }))
                        },
                        n = s.toUtf8(JSON.stringify(r)),
                        o = {
                            algorithm: c.supportedAlgorithms.xchacha20poly1305Ietf
                        },
                        i = await c.encrypt(n, e, o),
                        _ = {
                            type: "directsecp256k1hdwallet-v1",
                            kdf: t,
                            encryption: o,
                            data: s.toBase64(i)
                        };
                    return JSON.stringify(_)
                }
                async getKeyPair(e) {
                    const {
                        privkey: t
                    } = a.Slip10.derivePath(a.Slip10Curve.Secp256k1, this.seed, e), {
                        pubkey: r
                    } = await a.Secp256k1.makeKeypair(t);
                    return {
                        privkey: t,
                        pubkey: a.Secp256k1.compressPubkey(r)
                    }
                }
                async getAccountsWithPrivkeys() {
                    return Promise.all(this.accounts.map(async ({
                        hdPath: e,
                        prefix: t
                    }) => {
                        const {
                            privkey: r,
                            pubkey: a
                        } = await this.getKeyPair(e);
                        return {
                            algo: "secp256k1",
                            privkey: r,
                            pubkey: a,
                            address: s.Bech32.encode(t, n.rawSecp256k1PubkeyToRawAddress(a))
                        }
                    }))
                }
            }
            t.DirectSecp256k1HdWallet = DirectSecp256k1HdWallet
        },
        4283: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.DirectSecp256k1Wallet = void 0;
            const n = r(356),
                a = r(184),
                s = r(68),
                o = r(1145);
            class DirectSecp256k1Wallet {
                constructor(e, t, r) {
                    this.privkey = e, this.pubkey = t, this.prefix = r
                }
                static async fromKey(e, t = "cosmos") {
                    const r = (await a.Secp256k1.makeKeypair(e)).pubkey;
                    return new DirectSecp256k1Wallet(e, a.Secp256k1.compressPubkey(r), t)
                }
                get address() {
                    return s.Bech32.encode(this.prefix, n.rawSecp256k1PubkeyToRawAddress(this.pubkey))
                }
                async getAccounts() {
                    return [{
                        algo: "secp256k1",
                        address: this.address,
                        pubkey: this.pubkey
                    }]
                }
                async signDirect(e, t) {
                    const r = o.makeSignBytes(t);
                    if (e !== this.address) throw new Error(`Address ${e} not found in wallet`);
                    const s = a.sha256(r),
                        i = await a.Secp256k1.createSignature(s, this.privkey),
                        c = new Uint8Array([...i.r(32), ...i.s(32)]);
                    return {
                        signed: t,
                        signature: n.encodeSecp256k1Signature(this.pubkey, c)
                    }
                }
            }
            t.DirectSecp256k1Wallet = DirectSecp256k1Wallet
        },
        4284: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.makeCosmoshubPath = void 0;
            const n = r(184);
            t.makeCosmoshubPath = function(e) {
                return [n.Slip10RawIndex.hardened(44), n.Slip10RawIndex.hardened(118), n.Slip10RawIndex.hardened(0), n.Slip10RawIndex.normal(0), n.Slip10RawIndex.normal(e)]
            }
        },
        4285: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.decodePubkey = t.encodePubkey = void 0;
            const n = r(356),
                a = r(68),
                s = r(149),
                o = r(4286),
                i = r(4287),
                c = r(113);

            function _(e) {
                switch (e.typeUrl) {
                    case "/cosmos.crypto.secp256k1.PubKey": {
                        const {
                            key: t
                        } = i.PubKey.decode(e.value);
                        return n.encodeSecp256k1Pubkey(t)
                    }
                    default:
                        throw new Error(`Pubkey type_url ${e.typeUrl} not recognized as single public key type`)
                }
            }
            t.encodePubkey = function e(t) {
                if (n.isSecp256k1Pubkey(t)) {
                    const e = i.PubKey.fromPartial({
                        key: a.fromBase64(t.value)
                    });
                    return c.Any.fromPartial({
                        typeUrl: "/cosmos.crypto.secp256k1.PubKey",
                        value: Uint8Array.from(i.PubKey.encode(e).finish())
                    })
                }
                if (n.isMultisigThresholdPubkey(t)) {
                    const r = o.LegacyAminoPubKey.fromPartial({
                        threshold: s.Uint53.fromString(t.value.threshold).toNumber(),
                        publicKeys: t.value.pubkeys.map(e)
                    });
                    return c.Any.fromPartial({
                        typeUrl: "/cosmos.crypto.multisig.LegacyAminoPubKey",
                        value: Uint8Array.from(o.LegacyAminoPubKey.encode(r).finish())
                    })
                }
                throw new Error(`Pubkey type ${t.type} not recognized`)
            }, t.decodePubkey = function(e) {
                if (!e || !e.value) return null;
                switch (e.typeUrl) {
                    case "/cosmos.crypto.secp256k1.PubKey":
                        return _(e);
                    case "/cosmos.crypto.multisig.LegacyAminoPubKey": {
                        const {
                            threshold: t,
                            publicKeys: r
                        } = o.LegacyAminoPubKey.decode(e.value);
                        return {
                            type: "tendermint/PubKeyMultisigThreshold",
                            value: {
                                threshold: t.toString(),
                                pubkeys: r.map(_)
                            }
                        }
                    }
                    default:
                        throw new Error(`Pubkey type_url ${e.typeUrl} not recognized`)
                }
            }
        },
        4288: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.isOfflineDirectSigner = void 0, t.isOfflineDirectSigner = function(e) {
                return void 0 !== e.signDirect
            }
        },
        434: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.executeKdf = t.makeSignDoc = t.makeSignBytes = t.makeAuthInfoBytes = t.isOfflineDirectSigner = t.encodePubkey = t.decodePubkey = t.makeCosmoshubPath = t.DirectSecp256k1Wallet = t.DirectSecp256k1HdWallet = t.extractKdfConfiguration = t.Registry = t.isTsProtoGeneratedType = t.isPbjsGeneratedType = t.isTxBodyEncodeObject = t.decodeTxRaw = t.parseCoins = t.coins = t.coin = void 0;
            var n = r(356);
            Object.defineProperty(t, "coin", {
                enumerable: !0,
                get: function() {
                    return n.coin
                }
            }), Object.defineProperty(t, "coins", {
                enumerable: !0,
                get: function() {
                    return n.coins
                }
            });
            var a = r(4279);
            Object.defineProperty(t, "parseCoins", {
                enumerable: !0,
                get: function() {
                    return a.parseCoins
                }
            });
            var s = r(4280);
            Object.defineProperty(t, "decodeTxRaw", {
                enumerable: !0,
                get: function() {
                    return s.decodeTxRaw
                }
            });
            var o = r(4281);
            Object.defineProperty(t, "isTxBodyEncodeObject", {
                enumerable: !0,
                get: function() {
                    return o.isTxBodyEncodeObject
                }
            }), Object.defineProperty(t, "isPbjsGeneratedType", {
                enumerable: !0,
                get: function() {
                    return o.isPbjsGeneratedType
                }
            }), Object.defineProperty(t, "isTsProtoGeneratedType", {
                enumerable: !0,
                get: function() {
                    return o.isTsProtoGeneratedType
                }
            }), Object.defineProperty(t, "Registry", {
                enumerable: !0,
                get: function() {
                    return o.Registry
                }
            });
            var i = r(4282);
            Object.defineProperty(t, "extractKdfConfiguration", {
                enumerable: !0,
                get: function() {
                    return i.extractKdfConfiguration
                }
            }), Object.defineProperty(t, "DirectSecp256k1HdWallet", {
                enumerable: !0,
                get: function() {
                    return i.DirectSecp256k1HdWallet
                }
            });
            var c = r(4283);
            Object.defineProperty(t, "DirectSecp256k1Wallet", {
                enumerable: !0,
                get: function() {
                    return c.DirectSecp256k1Wallet
                }
            });
            var _ = r(4284);
            Object.defineProperty(t, "makeCosmoshubPath", {
                enumerable: !0,
                get: function() {
                    return _.makeCosmoshubPath
                }
            });
            var u = r(4285);
            Object.defineProperty(t, "decodePubkey", {
                enumerable: !0,
                get: function() {
                    return u.decodePubkey
                }
            }), Object.defineProperty(t, "encodePubkey", {
                enumerable: !0,
                get: function() {
                    return u.encodePubkey
                }
            });
            var p = r(4288);
            Object.defineProperty(t, "isOfflineDirectSigner", {
                enumerable: !0,
                get: function() {
                    return p.isOfflineDirectSigner
                }
            });
            var h = r(1145);
            Object.defineProperty(t, "makeAuthInfoBytes", {
                enumerable: !0,
                get: function() {
                    return h.makeAuthInfoBytes
                }
            }), Object.defineProperty(t, "makeSignBytes", {
                enumerable: !0,
                get: function() {
                    return h.makeSignBytes
                }
            }), Object.defineProperty(t, "makeSignDoc", {
                enumerable: !0,
                get: function() {
                    return h.makeSignDoc
                }
            });
            var l = r(2031);
            Object.defineProperty(t, "executeKdf", {
                enumerable: !0,
                get: function() {
                    return l.executeKdf
                }
            })
        },
        4342: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.makeJsonRpcId = void 0;
            let n = 1e4;
            t.makeJsonRpcId = function() {
                return n += 1
            }
        },
        4343: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.JsonRpcClient = void 0;
            const n = r(676),
                a = r(2052);
            t.JsonRpcClient = class JsonRpcClient {
                constructor(e) {
                    this.connection = e
                }
                async run(e) {
                    const t = this.connection.responseStream.filter(t => t.id === e.id),
                        r = n.firstEvent(t);
                    this.connection.sendRequest(e);
                    const s = await r;
                    if (a.isJsonRpcErrorResponse(s)) {
                        const e = s.error;
                        throw new Error(`JSON RPC error: code=${e.code}; message='${e.message}'`)
                    }
                    return s
                }
            }
        },
        4344: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.parseJsonRpcResponse = t.parseJsonRpcSuccessResponse = t.parseJsonRpcErrorResponse = t.parseJsonRpcRequest = t.parseJsonRpcId = void 0;
            const n = r(4345);

            function a(e) {
                if (!n.isJsonCompatibleDictionary(e)) throw new Error("Data must be JSON compatible dictionary");
                const t = e.id;
                return "number" != typeof t && "string" != typeof t ? null : t
            }

            function s(e) {
                if ("number" != typeof e.code) throw new Error("Error property 'code' is not a number");
                if ("string" != typeof e.message) throw new Error("Error property 'message' is not a string");
                let t;
                if (void 0 === e.data) t = void 0;
                else {
                    if (!n.isJsonCompatibleValue(e.data)) throw new Error("Error property 'data' is defined but not a JSON compatible value.");
                    t = e.data
                }
                return Object.assign({
                    code: e.code,
                    message: e.message
                }, void 0 !== t ? {
                    data: t
                } : {})
            }

            function o(e) {
                if (!n.isJsonCompatibleDictionary(e)) throw new Error("Data must be JSON compatible dictionary");
                if ("2.0" !== e.jsonrpc) throw new Error("Got unexpected jsonrpc version: " + JSON.stringify(e));
                const t = e.id;
                if ("number" != typeof t && "string" != typeof t && null !== t) throw new Error("Invalid id field");
                if (void 0 === e.error || !n.isJsonCompatibleDictionary(e.error)) throw new Error("Invalid error field");
                return {
                    jsonrpc: "2.0",
                    id: t,
                    error: s(e.error)
                }
            }

            function i(e) {
                if (!n.isJsonCompatibleDictionary(e)) throw new Error("Data must be JSON compatible dictionary");
                if ("2.0" !== e.jsonrpc) throw new Error("Got unexpected jsonrpc version: " + JSON.stringify(e));
                const t = e.id;
                if ("number" != typeof t && "string" != typeof t) throw new Error("Invalid id field");
                if (void 0 === e.result) throw new Error("Invalid result field");
                return {
                    jsonrpc: "2.0",
                    id: t,
                    result: e.result
                }
            }
            t.parseJsonRpcId = a, t.parseJsonRpcRequest = function(e) {
                if (!n.isJsonCompatibleDictionary(e)) throw new Error("Data must be JSON compatible dictionary");
                if ("2.0" !== e.jsonrpc) throw new Error("Got unexpected jsonrpc version: " + e.jsonrpc);
                const t = a(e);
                if (null === t) throw new Error("Invalid id field");
                const r = e.method;
                if ("string" != typeof r) throw new Error("Invalid method field");
                if (!n.isJsonCompatibleArray(e.params) && !n.isJsonCompatibleDictionary(e.params)) throw new Error("Invalid params field");
                return {
                    jsonrpc: "2.0",
                    id: t,
                    method: r,
                    params: e.params
                }
            }, t.parseJsonRpcErrorResponse = o, t.parseJsonRpcSuccessResponse = i, t.parseJsonRpcResponse = function(e) {
                let t;
                try {
                    t = o(e)
                } catch (r) {
                    t = i(e)
                }
                return t
            }
        },
        4345: function(e, t, r) {
            "use strict";

            function n(e) {
                return !("string" != typeof e && "number" != typeof e && "boolean" != typeof e && null !== e && !a(e) && !s(e))
            }

            function a(e) {
                if (!Array.isArray(e)) return !1;
                for (const t of e)
                    if (!n(t)) return !1;
                return !0
            }

            function s(e) {
                if ("object" != typeof e || null === e) return !1;
                if ("[object Object]" !== Object.prototype.toString.call(e)) return !1;
                return Object.getOwnPropertyNames(e).map(t => e[t]).every(n)
            }
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.isJsonCompatibleDictionary = t.isJsonCompatibleArray = t.isJsonCompatibleValue = void 0, t.isJsonCompatibleValue = n, t.isJsonCompatibleArray = a, t.isJsonCompatibleDictionary = s
        },
        672: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.pubkeyToAddress = t.pubkeyToRawAddress = t.rawSecp256k1PubkeyToRawAddress = t.rawEd25519PubkeyToRawAddress = void 0;
            const n = r(184),
                a = r(68),
                s = r(1141),
                o = r(673);

            function i(e) {
                if (32 !== e.length) throw new Error("Invalid Ed25519 pubkey length: " + e.length);
                return n.sha256(e).slice(0, 20)
            }

            function c(e) {
                if (33 !== e.length) throw new Error("Invalid Secp256k1 pubkey length (compressed): " + e.length);
                return n.ripemd160(n.sha256(e))
            }

            function _(e) {
                if (o.isSecp256k1Pubkey(e)) {
                    return c(a.fromBase64(e.value))
                }
                if (o.isEd25519Pubkey(e)) {
                    return i(a.fromBase64(e.value))
                }
                if (o.isMultisigThresholdPubkey(e)) {
                    const t = s.encodeAminoPubkey(e);
                    return n.sha256(t).slice(0, 20)
                }
                throw new Error("Unsupported public key type")
            }
            t.rawEd25519PubkeyToRawAddress = i, t.rawSecp256k1PubkeyToRawAddress = c, t.pubkeyToRawAddress = _, t.pubkeyToAddress = function(e, t) {
                return a.Bech32.encode(t, _(e))
            }
        },
        673: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.isMultisigThresholdPubkey = t.isSinglePubkey = t.pubkeyType = t.isSecp256k1Pubkey = t.isEd25519Pubkey = void 0, t.isEd25519Pubkey = function(e) {
                return "tendermint/PubKeyEd25519" === e.type
            }, t.isSecp256k1Pubkey = function(e) {
                return "tendermint/PubKeySecp256k1" === e.type
            }, t.pubkeyType = {
                secp256k1: "tendermint/PubKeySecp256k1",
                ed25519: "tendermint/PubKeyEd25519",
                sr25519: "tendermint/PubKeySr25519",
                multisigThreshold: "tendermint/PubKeyMultisigThreshold"
            }, t.isSinglePubkey = function(e) {
                return [t.pubkeyType.ed25519, t.pubkeyType.secp256k1, t.pubkeyType.sr25519].includes(e.type)
            }, t.isMultisigThresholdPubkey = function(e) {
                return "tendermint/PubKeyMultisigThreshold" === e.type
            }
        },
        68: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.toUtf8 = t.fromUtf8 = t.toRfc3339 = t.fromRfc3339 = t.toHex = t.fromHex = t.Bech32 = t.toBase64 = t.fromBase64 = t.toAscii = t.fromAscii = void 0;
            var n = r(4255);
            Object.defineProperty(t, "fromAscii", {
                enumerable: !0,
                get: function() {
                    return n.fromAscii
                }
            }), Object.defineProperty(t, "toAscii", {
                enumerable: !0,
                get: function() {
                    return n.toAscii
                }
            });
            var a = r(4256);
            Object.defineProperty(t, "fromBase64", {
                enumerable: !0,
                get: function() {
                    return a.fromBase64
                }
            }), Object.defineProperty(t, "toBase64", {
                enumerable: !0,
                get: function() {
                    return a.toBase64
                }
            });
            var s = r(4257);
            Object.defineProperty(t, "Bech32", {
                enumerable: !0,
                get: function() {
                    return s.Bech32
                }
            });
            var o = r(4258);
            Object.defineProperty(t, "fromHex", {
                enumerable: !0,
                get: function() {
                    return o.fromHex
                }
            }), Object.defineProperty(t, "toHex", {
                enumerable: !0,
                get: function() {
                    return o.toHex
                }
            });
            var i = r(4259);
            Object.defineProperty(t, "fromRfc3339", {
                enumerable: !0,
                get: function() {
                    return i.fromRfc3339
                }
            }), Object.defineProperty(t, "toRfc3339", {
                enumerable: !0,
                get: function() {
                    return i.toRfc3339
                }
            });
            var c = r(4260);
            Object.defineProperty(t, "fromUtf8", {
                enumerable: !0,
                get: function() {
                    return c.fromUtf8
                }
            }), Object.defineProperty(t, "toUtf8", {
                enumerable: !0,
                get: function() {
                    return c.toUtf8
                }
            })
        }
    }
]);