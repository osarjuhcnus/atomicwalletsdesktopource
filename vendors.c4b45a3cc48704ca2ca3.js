/*! For license information please see vendors.c4b45a3cc48704ca2ca3.js.LICENSE.txt */
(window.webpackJsonp = window.webpackJsonp || []).push([
    [255], {
        10042: function(t, e, r) {
            "use strict";
            t.exports = r(10043)
        },
        10044: function(t, e, r) {
            "use strict";
            t.exports = r(10045)
        },
        10047: function(t, e, r) {
            "use strict";
            t.exports = r(10048)
        },
        10054: function(t, e, r) {
            "use strict";
            const i = r(5466),
                s = r(6660),
                {
                    PEMBlock: n
                } = r(5676),
                {
                    countLeft: o
                } = r(5658),
                a = r(6089),
                h = r(6263),
                c = r(6669),
                u = r(7502),
                f = r(7503),
                l = r(5799),
                d = r(6670),
                p = r(6084),
                w = {
                    NONE: 0,
                    PUBKEY_ENC: 1,
                    SIGNATURE: 2,
                    SYMKEY_ENC: 3,
                    ONEPASS_SIG: 4,
                    PRIVATE_KEY: 5,
                    PUBLIC_KEY: 6,
                    PRIVATE_SUBKEY: 7,
                    COMPRESSED: 8,
                    ENCRYPTED: 9,
                    MARKER: 10,
                    PLAINTEXT: 11,
                    RING_TRUST: 12,
                    USER_ID: 13,
                    PUBLIC_SUBKEY: 14,
                    OLD_COMMENT: 16,
                    ATTRIBUTE: 17,
                    ENCRYPTED_MDC: 18,
                    MDC: 19,
                    ENCRYPTED_AEAD: 20
                },
                m = {
                    0: "NONE",
                    1: "PUBKEY_ENC",
                    2: "SIGNATURE",
                    3: "SYMKEY_ENC",
                    4: "ONEPASS_SIG",
                    5: "PRIVATE_KEY",
                    6: "PUBLIC_KEY",
                    7: "PRIVATE_SUBKEY",
                    8: "COMPRESSED",
                    9: "ENCRYPTED",
                    10: "MARKER",
                    11: "PLAINTEXT",
                    12: "RING_TRUST",
                    13: "USER_ID",
                    14: "PUBLIC_SUBKEY",
                    16: "OLD_COMMENT",
                    17: "ATTRIBUTE",
                    18: "ENCRYPTED_MDC",
                    19: "MDC",
                    20: "ENCRYPTED_AEAD"
                },
                g = {
                    RSA: 1,
                    RSA_ENCRYPT_ONLY: 2,
                    RSA_SIGN_ONLY: 3,
                    ELGAMAL: 16,
                    DSA: 17,
                    ECDH: 18,
                    ECDSA: 19,
                    ELGAMAL_LEGACY: 20,
                    EDDSA: 22
                },
                S = {
                    1: "RSA",
                    2: "RSA_ENCRYPT_ONLY",
                    3: "RSA_SIGN_ONLY",
                    16: "ELGAMAL",
                    17: "DSA",
                    18: "ECDH",
                    19: "ECDSA",
                    20: "ELGAMAL_LEGACY",
                    22: "EDDSA"
                },
                y = {
                    NONE: 0,
                    IDEA: 1,
                    DES3: 2,
                    CAST5: 3,
                    BLOWFISH: 4,
                    AES128: 7,
                    AES192: 8,
                    AES256: 9,
                    TWOFISH: 10,
                    CAMELLIA128: 11,
                    CAMELLIA192: 12,
                    CAMELLIA256: 13
                },
                E = {
                    0: "NONE",
                    1: "IDEA",
                    2: "DES3",
                    3: "CAST5",
                    4: "BLOWFISH",
                    7: "AES128",
                    8: "AES192",
                    9: "AES256",
                    10: "TWOFISH",
                    11: "CAMELLIA128",
                    12: "CAMELLIA192",
                    13: "CAMELLIA256"
                },
                A = {
                    1: "MD5",
                    2: "SHA1",
                    3: "RIPEMD160",
                    8: "SHA256",
                    9: "SHA384",
                    10: "SHA512",
                    11: "SHA224"
                },
                b = {
                    1: h,
                    2: c,
                    3: u,
                    8: l,
                    9: d,
                    10: p,
                    11: f
                },
                P = {
                    NONE: 0,
                    P256: 1,
                    P384: 2,
                    P521: 3,
                    SECP256K1: 4,
                    X25519: 5,
                    BRAINPOOLP256: 6,
                    BRAINPOOLP384: 7,
                    BRAINPOOLP512: 8,
                    ED25519: 9
                },
                B = {
                    0: "NONE",
                    1: "P256",
                    2: "P384",
                    3: "P521",
                    4: "SECP256K1",
                    5: "X25519",
                    6: "BRAINPOOLP256",
                    7: "BRAINPOOLP384",
                    8: "BRAINPOOLP512",
                    9: "ED25519"
                },
                k = {
                    P256: Buffer.from("2a8648ce3d030107", "hex"),
                    P384: Buffer.from("2b81040022", "hex"),
                    P521: Buffer.from("2b81040023", "hex"),
                    SECP256K1: Buffer.from("2b8104000a", "hex"),
                    X25519: Buffer.from("2b060104019755010501", "hex"),
                    BRAINPOOLP256: Buffer.from("2b2403030208010107", "hex"),
                    BRAINPOOLP384: Buffer.from("2b240303020801010b", "hex"),
                    BRAINPOOLP512: Buffer.from("2b240303020801010d", "hex"),
                    ED25519: Buffer.from("2b06010401da470f01", "hex")
                },
                N = Buffer.alloc(0),
                v = Buffer.alloc(1);
            class PGPMessage extends s.Struct {
                constructor() {
                    super(), this.packets = []
                }
                getSize() {
                    let t = 0;
                    for (const e of this.packets) t += e.getSize();
                    return t
                }
                write(t) {
                    for (const e of this.packets) e.write(t);
                    return t
                }
                read(t) {
                    for (; t.left();) {
                        const e = PGPPacket.read(t);
                        this.packets.push(e)
                    }
                    return this
                }
                toString(t = "PGP MESSAGE") {
                    i("string" == typeof t);
                    const e = new n;
                    return e.type = t, e.data = this.encode(), e.toString(!0)
                }
                fromString(t) {
                    const e = n.fromString(t, !0);
                    if ("PGP " !== e.type.substring(0, 4)) throw new Error("PEM type mismatch.");
                    return this.decode(e.data)
                }
                format() {
                    return {
                        packets: this.packets
                    }
                }
            }
            class PGPPacket extends s.Struct {
                constructor() {
                    super(), this.type = 0, this.body = new PGPUnknown
                }
                getSize() {
                    const t = this.body.getSize();
                    let e = 0;
                    return e += 1, e += t < 192 ? 1 : t < 8384 ? 2 : 5, e += t, e
                }
                write(t) {
                    let e = this.body.getSize();
                    return t.writeU8(192 | this.type), e < 192 ? t.writeU8(e) : e < 8384 ? (e -= 192, t.writeU8(192 + (e >>> 8)), t.writeU8(255 & e)) : (t.writeU8(255), t.writeU32BE(e)), this.body.write(t), t
                }
                read(t) {
                    const e = t.readU8();
                    if (0 == (128 & e)) throw new Error("Hi bit unset in PGP packet header.");
                    let r = 0,
                        i = null;
                    if (0 == (64 & e)) {
                        const s = (63 & e) >>> 2;
                        let n = 0;
                        switch (1 << (3 & e)) {
                            case 1:
                                n = t.readU8();
                                break;
                            case 2:
                                n = t.readU16BE();
                                break;
                            case 4:
                                n = t.readU32BE();
                                break;
                            case 8:
                                n = t.left()
                        }
                        r = s, i = t.readChild(n)
                    } else {
                        const s = 63 & e,
                            n = t.readU8();
                        let o = 0;
                        if (n < 192) o = n;
                        else if (n < 224) o = 256 * (n - 192), o += t.readU8() + 192;
                        else {
                            if (n < 255) throw new Error("Cannot handle PGP partial length.");
                            o = t.readU32BE()
                        }
                        r = s, i = t.readChild(o)
                    }
                    switch (this.type = r, this.type) {
                        case w.PUBKEY_ENC:
                        case w.SIGNATURE:
                        case w.SYMKEY_ENC:
                        case w.ONEPASS_SIG:
                            this.body = PGPUnknown.read(i);
                            break;
                        case w.PRIVATE_KEY:
                            this.body = PGPPrivateKey.read(i);
                            break;
                        case w.PUBLIC_KEY:
                            this.body = PGPPublicKey.read(i);
                            break;
                        case w.PRIVATE_SUBKEY:
                            this.body = PGPPrivateKey.read(i);
                            break;
                        case w.COMPRESSED:
                        case w.ENCRYPTED:
                        case w.MARKER:
                        case w.PLAINTEXT:
                        case w.RING_TRUST:
                            this.body = PGPUnknown.read(i);
                            break;
                        case w.USER_ID:
                            this.body = PGPUserID.read(i);
                            break;
                        case w.PUBLIC_SUBKEY:
                        case w.OLD_COMMENT:
                            this.body = PGPPublicKey.read(i);
                            break;
                        case w.ATTRIBUTE:
                        case w.ENCRYPTED_MDC:
                        case w.MDC:
                        case w.ENCRYPTED_AEAD:
                        default:
                            this.body = PGPUnknown.read(i)
                    }
                    return this
                }
                format() {
                    return {
                        type: m[this.type] || "UNKNOWN",
                        body: this.body
                    }
                }
            }
            class PGPBody extends s.Struct {
                constructor() {
                    super()
                }
            }
            class PGPUnknown extends PGPBody {
                constructor() {
                    super(), this.data = N
                }
                getSize() {
                    return this.data.length
                }
                write(t) {
                    return t.writeBytes(this.data), t
                }
                read(t) {
                    return this.data = t.readBytes(t.left()), this
                }
                format() {
                    return {
                        data: this.data.toString("hex")
                    }
                }
            }
            class PGPPublicKey extends PGPBody {
                constructor() {
                    super(), this.version = 4, this.algorithm = 0, this.expires = 0, this.timestamp = 0, this.n = new MPI, this.e = new MPI, this.p = new MPI, this.g = new MPI, this.y = new MPI, this.q = new MPI, this.oid = N, this.point = new MPI, this.kdfHash = 0, this.kdfAlg = 0, this.data = N
                }
                get curve() {
                    return this.oid.equals(k.P256) ? P.P256 : this.oid.equals(k.P384) ? P.P384 : this.oid.equals(k.P521) ? P.P521 : this.oid.equals(k.SECP256K1) ? P.SECP256K1 : this.oid.equals(k.X25519) ? P.X25519 : this.oid.equals(k.BRAINPOOLP256) ? P.BRAINPOOLP256 : this.oid.equals(k.BRAINPOOLP384) ? P.BRAINPOOLP384 : this.oid.equals(k.BRAINPOOLP512) ? P.BRAINPOOLP512 : this.oid.equals(k.ED25519) ? P.ED25519 : 0
                }
                set curve(t) {
                    switch (t) {
                        case P.P256:
                            this.oid = k.P256;
                            break;
                        case P.P384:
                            this.oid = k.P384;
                            break;
                        case P.P521:
                            this.oid = k.P521;
                            break;
                        case P.SECP256K1:
                            this.oid = k.SECP256K1;
                            break;
                        case P.X25519:
                            this.oid = k.X25519;
                            break;
                        case P.BRAINPOOLP256:
                            this.oid = k.BRAINPOOLP256;
                            break;
                        case P.BRAINPOOLP384:
                            this.oid = k.BRAINPOOLP384;
                            break;
                        case P.BRAINPOOLP512:
                            this.oid = k.BRAINPOOLP512;
                            break;
                        case P.ED25519:
                            this.oid = k.ED25519
                    }
                }
                isRSA() {
                    switch (this.algorithm) {
                        case g.RSA:
                        case g.RSA_ENCRYPT_ONLY:
                        case g.RSA_SIGN_ONLY:
                            return !0
                    }
                    return !1
                }
                isElgamal() {
                    switch (this.algorithm) {
                        case g.ELGAMAL:
                        case g.ELGAMAL_LEGACY:
                            return !0
                    }
                    return !1
                }
                getSize() {
                    let t = 0;
                    switch (t += 1, this.version) {
                        case 2:
                        case 3:
                            t += 4, t += 2, t += 1;
                            break;
                        case 4:
                            t += 4, t += 1;
                            break;
                        default:
                            throw new Error("Unknown PGP key version.")
                    }
                    switch (this.algorithm) {
                        case g.RSA:
                        case g.RSA_ENCRYPT_ONLY:
                        case g.RSA_SIGN_ONLY:
                            t += this.n.getSize(), t += this.e.getSize();
                            break;
                        case g.ELGAMAL:
                        case g.ELGAMAL_LEGACY:
                            t += this.p.getSize(), t += this.g.getSize(), t += this.y.getSize();
                            break;
                        case g.DSA:
                            t += this.p.getSize(), t += this.q.getSize(), t += this.g.getSize(), t += this.y.getSize();
                            break;
                        case g.ECDH:
                            t += 1, t += this.oid.length, t += this.point.getSize(), t += 4;
                            break;
                        case g.ECDSA:
                        case g.EDDSA:
                            t += 1, t += this.oid.length, t += this.point.getSize();
                            break;
                        default:
                            t += this.data.length
                    }
                    return t
                }
                write(t) {
                    switch (t.writeU8(this.version), this.version) {
                        case 2:
                        case 3:
                            if (!this.isRSA()) throw new Error("Unknown PGP key algorithm.");
                            t.writeU32BE(this.timestamp), t.writeU16BE(this.expires), t.writeU8(this.algorithm);
                            break;
                        case 4:
                            t.writeU32BE(this.timestamp), t.writeU8(this.algorithm);
                            break;
                        default:
                            throw new Error("Unknown PGP key version.")
                    }
                    switch (this.algorithm) {
                        case g.RSA:
                        case g.RSA_ENCRYPT_ONLY:
                        case g.RSA_SIGN_ONLY:
                            this.n.write(t), this.e.write(t);
                            break;
                        case g.ELGAMAL:
                        case g.ELGAMAL_LEGACY:
                            this.p.write(t), this.g.write(t), this.y.write(t);
                            break;
                        case g.DSA:
                            this.p.write(t), this.q.write(t), this.g.write(t), this.y.write(t);
                            break;
                        case g.ECDH:
                            t.writeU8(this.oid.length), t.writeBytes(this.oid), this.point.write(t), t.writeU8(3), t.writeU8(1), t.writeU8(this.kdfHash), t.writeU8(this.kdfAlg);
                            break;
                        case g.ECDSA:
                        case g.EDDSA:
                            t.writeU8(this.oid.length), t.writeBytes(this.oid), this.point.write(t);
                            break;
                        default:
                            t.writeBytes(this.data)
                    }
                    return t
                }
                read(t) {
                    switch (this.version = t.readU8(), this.version) {
                        case 2:
                        case 3:
                            if (this.timestamp = t.readU32BE(), this.expires = t.readU16BE(), this.algorithm = t.readU8(), !this.isRSA()) {
                                if (3 !== this.version || !this.isElgamal()) throw new Error("Unknown PGP key algorithm.");
                                this.expires = 0, this.version = 4
                            }
                            break;
                        case 4:
                            this.timestamp = t.readU32BE(), this.algorithm = t.readU8();
                            break;
                        default:
                            throw new Error("Unknown PGP key version.")
                    }
                    switch (this.algorithm) {
                        case g.RSA:
                        case g.RSA_ENCRYPT_ONLY:
                        case g.RSA_SIGN_ONLY:
                            this.n.read(t), this.e.read(t);
                            break;
                        case g.ELGAMAL:
                        case g.ELGAMAL_LEGACY:
                            this.p.read(t), this.g.read(t), this.y.read(t);
                            break;
                        case g.DSA:
                            this.p.read(t), this.q.read(t), this.g.read(t), this.y.read(t);
                            break;
                        case g.ECDH: {
                            this.oid = t.readBytes(t.readU8()), this.point.read(t);
                            const e = t.readU8();
                            if (e < 3 || e > t.left()) throw new Error("Invalid ECDH params.");
                            if (1 !== t.readU8()) throw new Error("Invalid ECDH reserved byte.");
                            this.kdfHash = t.readU8(), this.kdfAlg = t.readU8();
                            break
                        }
                        case g.ECDSA:
                        case g.EDDSA:
                            this.oid = t.readBytes(t.readU8()), this.point.read(t);
                            break;
                        default:
                            this.data = t.readBytes(t.left())
                    }
                    return this
                }
                fingerprint() {
                    switch (this.version) {
                        case 2:
                        case 3: {
                            if (!this.isRSA()) throw new Error("Unknown PGP key algorithm.");
                            const t = s.concat(this.n.data, this.e.data);
                            return h.digest(t)
                        }
                        case 4: {
                            const t = this.getSize(),
                                e = s.write(3 + t);
                            return e.writeU8(153), e.writeU16BE(t), this.write(e), c.digest(e.render())
                        }
                        default:
                            throw new Error("Unknown PGP key version.")
                    }
                }
                id() {
                    switch (this.version) {
                        case 2:
                        case 3:
                            if (!this.isRSA()) throw new Error("Unknown PGP key algorithm.");
                            if (this.n.data.length < 8) throw new Error("Unknown PGP key algorithm.");
                            return this.n.data.slice(this.n.data.length - 8);
                        case 4:
                            return this.fingerprint().slice(12, 20);
                        default:
                            throw new Error("Unknown PGP key version.")
                    }
                }
                long() {
                    return this.id()
                }
                short() {
                    return this.id().slice(4, 8)
                }
                matches(t) {
                    switch ("string" == typeof t && (t = I(t)), t.length) {
                        case 4:
                            return this.short().equals(t);
                        case 8:
                            return this.long().equals(t);
                        case 16:
                        case 20:
                            return this.fingerprint().equals(t);
                        default:
                            return !1
                    }
                }
                keyHash() {
                    let t = 6;
                    4 !== this.version && (t += 2);
                    const e = this.encode().slice(t - 1);
                    return e[0] = this.algorithm, l.digest(e)
                }
                format() {
                    const t = S[this.algorithm] || "UNKNOWN",
                        e = this.version,
                        r = this.timestamp,
                        i = this.expires;
                    switch (this.algorithm) {
                        case g.RSA:
                        case g.RSA_ENCRYPT_ONLY:
                        case g.RSA_SIGN_ONLY:
                            return {
                                version: e, algorithm: t, timestamp: r, expires: i, n: this.n.data.toString("hex"), e: this.e.data.toString("hex")
                            };
                        case g.ELGAMAL:
                        case g.ELGAMAL_LEGACY:
                            return {
                                version: e, algorithm: t, timestamp: r, expires: i, p: this.p.data.toString("hex"), g: this.g.data.toString("hex"), y: this.y.data.toString("hex")
                            };
                        case g.DSA:
                            return {
                                version: e, algorithm: t, timestamp: r, expires: i, p: this.p.data.toString("hex"), q: this.q.data.toString("hex"), g: this.g.data.toString("hex"), y: this.y.data.toString("hex")
                            };
                        case g.ECDH:
                            return {
                                version: e, algorithm: t, timestamp: r, expires: i, curve: B[this.curve] || "UNKNOWN", point: this.point.data.toString("hex"), kdfHash: this.kdfHash, kdfAlg: this.kdfAlg
                            };
                        case g.ECDSA:
                        case g.EDDSA:
                            return {
                                version: e, algorithm: t, timestamp: r, expires: i, curve: B[this.curve] || "UNKNOWN", point: this.point.data.toString("hex")
                            };
                        default:
                            return {
                                version: e, algorithm: t, timestamp: r, expires: i, data: this.data.toString("hex")
                            }
                    }
                }
            }
            class PGPPrivateKey extends PGPBody {
                constructor() {
                    super(), this.key = new PGPPublicKey, this.params = new CipherParams, this.data = N
                }
                secret(t) {
                    let e = this.data;
                    if (this.params.encrypted) {
                        if (null == t) throw new Error("Key requires a passphrase.");
                        e = this.params.decrypt(e, t)
                    }
                    return SecretKey.decode(e, this.key.algorithm)
                }
                getSize() {
                    let t = 0;
                    return t += this.key.getSize(), t += this.params.getSize(), t += this.data.length, t
                }
                write(t) {
                    return this.key.write(t), this.params.write(t), t.writeBytes(this.data), t
                }
                read(t) {
                    return this.key.read(t), this.params.read(t), this.data = t.readBytes(t.left()), this
                }
                format() {
                    let t = null,
                        e = null;
                    return this.params.encrypted ? (t = this.params, e = this.data.toString("hex")) : (t = null, e = this.secret()), {
                        key: this.key,
                        params: t,
                        data: e
                    }
                }
            }
            class CipherParams extends s.Struct {
                constructor() {
                    super(), this.encrypted = !1, this.checksum = !1, this.cipher = 0, this.s2k = new S2K, this.iv = N
                }
                blockSize() {
                    switch (this.cipher) {
                        case y.IDEA:
                        case y.DES3:
                        case y.CAST5:
                        case y.BLOWFISH:
                            return 8;
                        case y.AES128:
                        case y.AES192:
                        case y.AES256:
                        case y.TWOFISH:
                        case y.CAMELLIA128:
                        case y.CAMELLIA192:
                        case y.CAMELLIA256:
                            return 16;
                        default:
                            throw new Error("Unknown cipher type.")
                    }
                }
                keySize() {
                    switch (this.cipher) {
                        case y.IDEA:
                            return 16;
                        case y.DES3:
                            return 24;
                        case y.CAST5:
                        case y.BLOWFISH:
                        case y.AES128:
                            return 16;
                        case y.AES192:
                            return 24;
                        case y.AES256:
                        case y.TWOFISH:
                            return 32;
                        case y.CAMELLIA128:
                            return 16;
                        case y.CAMELLIA192:
                            return 24;
                        case y.CAMELLIA256:
                            return 32;
                        default:
                            throw new Error("Unknown cipher type.")
                    }
                }
                algName() {
                    switch (this.cipher) {
                        case y.IDEA:
                            return "IDEA-CFB";
                        case y.DES3:
                            return "DES-EDE3-CFB";
                        case y.CAST5:
                            return "CAST5-CFB";
                        case y.BLOWFISH:
                            return "BF-CFB";
                        case y.AES128:
                            return "AES-128-CFB";
                        case y.AES192:
                            return "AES-192-CFB";
                        case y.AES256:
                            return "AES-256-CFB";
                        case y.TWOFISH:
                            return "TWOFISH-256-CFB";
                        case y.CAMELLIA128:
                            return "CAMELLIA-128-CFB";
                        case y.CAMELLIA192:
                            return "CAMELLIA-192-CFB";
                        case y.CAMELLIA256:
                            return "CAMELLIA-256-CFB";
                        default:
                            throw new Error("Unknown cipher type.")
                    }
                }
                derive(t) {
                    if (!this.encrypted) throw new Error("Cannot derive passphrase.");
                    return this.s2k.derive(t, this.keySize())
                }
                encipher(t, e) {
                    i(Buffer.isBuffer(t));
                    const r = this.algName(),
                        n = this.checksum ? 20 : 2,
                        o = Buffer.allocUnsafe(t.length + n);
                    if (t.copy(o, 0), this.checksum) c.digest(t).copy(o, t.length);
                    else {
                        let e = 0;
                        for (let r = 0; r < t.length; r++) e += t[r], e &= 65535;
                        s.writeU16BE(o, e, t.length)
                    }
                    return a.encrypt(r, e, this.iv, o)
                }
                decipher(t, e) {
                    const r = this.algName(),
                        i = a.decrypt(r, e, this.iv, t);
                    if (this.checksum) {
                        if (i.length < 20) throw new Error("Truncated data.");
                        const t = i.slice(0, -20),
                            e = i.slice(-20);
                        if (!c.digest(t).equals(e)) throw new Error("Invalid checksum.");
                        return t
                    }
                    if (i.length < 2) throw new Error("Truncated data.");
                    const n = i.slice(0, -2),
                        o = s.readU16BE(i, i.length - 2);
                    let h = 0;
                    for (let t = 0; t < n.length; t++) h += n[t], h &= 65535;
                    if (h !== o) throw new Error("Invalid checksum.");
                    return n
                }
                encrypt(t, e) {
                    const r = this.derive(e);
                    return this.encipher(t, r)
                }
                decrypt(t, e) {
                    const r = this.derive(e);
                    return this.decipher(t, r)
                }
                getSize() {
                    let t = 0;
                    return this.encrypted ? (t += 1, t += 1, t += this.s2k.getSize(), t += this.iv.length) : t += 1, t
                }
                write(t) {
                    return this.encrypted ? (i(this.iv.length === this.blockSize()), t.writeU8(this.checksum ? 254 : 255), t.writeU8(this.cipher), this.s2k.write(t), t.writeBytes(this.iv)) : t.writeU8(0), t
                }
                read(t) {
                    const e = t.readU8();
                    switch (e) {
                        case 0:
                            break;
                        case 254:
                        case 255:
                            this.encrypted = !0, this.checksum = 254 === e, this.cipher = t.readU8(), this.s2k.read(t), this.iv = t.readBytes(this.blockSize());
                            break;
                        default:
                            throw new Error("Unknown S2K type.")
                    }
                    return this
                }
                format() {
                    return {
                        encrypted: this.encrypted,
                        checksum: this.checksum,
                        cipher: E[this.cipher] || "UNKNOWN",
                        s2k: this.s2k,
                        iv: this.iv.toString("hex")
                    }
                }
            }
            class S2K extends s.Struct {
                constructor() {
                    super(), this.mode = 0, this.hash = 0, this.count = 0, this.salt = N
                }
                derive(t, e) {
                    i("string" == typeof t), i(e >>> 0 === e);
                    const r = Buffer.from(t, "binary"),
                        s = b[this.hash];
                    if (!s) throw new Error("Unknown hash.");
                    switch (this.mode) {
                        case 0:
                            return this._simple(s, r, e);
                        case 1:
                            return this._salted(s, r, e);
                        case 3:
                            return this._iterated(s, r, e);
                        default:
                            throw new Error("Unknown S2K mode.")
                    }
                }
                _simple(t, e, r) {
                    return this._hash(t, e, N, r)
                }
                _salted(t, e, r) {
                    return this._hash(t, e, this.salt, r)
                }
                _hash(t, e, r, s) {
                    i(t && "string" == typeof t.id), i(Buffer.isBuffer(e)), i(Buffer.isBuffer(r)), i(s >>> 0 === s);
                    const n = t.ctx,
                        o = Buffer.alloc(s);
                    let a = 0,
                        h = 0;
                    for (; h < s;) {
                        n.init();
                        for (let t = 0; t < a; t++) n.update(v);
                        n.update(r), n.update(e), h += n.final().copy(o, h), a += 1
                    }
                    return o
                }
                _iterated(t, e, r) {
                    i(t && "string" == typeof t.id), i(Buffer.isBuffer(e)), i(r >>> 0 === r);
                    const n = this.salt,
                        o = t.ctx,
                        a = Buffer.alloc(r),
                        h = s.concat(n, e);
                    let c = this.count;
                    c < h.length && (c = h.length);
                    let u = 0,
                        f = 0;
                    for (; f < r;) {
                        o.init();
                        for (let t = 0; t < u; t++) o.update(v);
                        let t = 0;
                        for (; t < c;)
                            if (t + h.length > c) {
                                const e = c - t;
                                o.update(h.slice(0, e)), t = c
                            } else o.update(h), t += h.length;
                        f += o.final().copy(a, f), u += 1
                    }
                    return a
                }
                getSize() {
                    let t = 2;
                    switch (this.mode) {
                        case 0:
                            break;
                        case 1:
                            t += 8;
                            break;
                        case 3:
                            t += 8, t += 1;
                            break;
                        default:
                            throw new Error("Unknown S2K function.")
                    }
                    return t
                }
                write(t) {
                    switch (t.writeU8(this.mode), t.writeU8(this.hash), this.mode) {
                        case 0:
                            break;
                        case 1:
                            t.writeBytes(this.salt);
                            break;
                        case 3:
                            t.writeBytes(this.salt), t.writeU8(function(t) {
                                if (i(t >>> 0 === t), t < 1024 || t > 65011712) throw new RangeError("Invalid iteration count.");
                                for (let e = 0; e < 256; e++) {
                                    if (x(e) >= t) return e
                                }
                                return 255
                            }(this.count));
                            break;
                        default:
                            throw new Error("Unknown S2K function.")
                    }
                    return t
                }
                read(t) {
                    switch (this.mode = t.readU8(), this.hash = t.readU8(), this.mode) {
                        case 0:
                            break;
                        case 1:
                            this.salt = t.readBytes(8);
                            break;
                        case 3:
                            this.salt = t.readBytes(8), this.count = x(t.readU8());
                            break;
                        default:
                            throw new Error("Unknown S2K function.")
                    }
                    return this
                }
                format() {
                    return {
                        mode: this.mode,
                        hash: A[this.hash] || "UNKNOWN",
                        count: this.count,
                        salt: this.salt.toString("hex")
                    }
                }
            }
            class SecretKey extends s.Struct {
                constructor() {
                    super(), this.d = new MPI, this.q = new MPI, this.p = new MPI, this.qi = new MPI, this.x = new MPI
                }
                getSize(t) {
                    i((255 & t) === t);
                    let e = 0;
                    switch (t) {
                        case g.RSA:
                        case g.RSA_ENCRYPT_ONLY:
                        case g.RSA_SIGN_ONLY:
                            e += this.d.getSize(), e += this.q.getSize(), e += this.p.getSize(), e += this.qi.getSize();
                            break;
                        case g.ELGAMAL:
                        case g.ELGAMAL_LEGACY:
                        case g.DSA:
                            e += this.x.getSize();
                            break;
                        case g.ECDSA:
                        case g.EDDSA:
                            e += this.d.getSize();
                            break;
                        default:
                            throw new Error("Unknown key type.")
                    }
                    return e
                }
                write(t, e) {
                    switch (i((255 & e) === e), e) {
                        case g.RSA:
                        case g.RSA_ENCRYPT_ONLY:
                        case g.RSA_SIGN_ONLY:
                            this.d.write(t), this.q.write(t), this.p.write(t), this.qi.write(t);
                            break;
                        case g.ELGAMAL:
                        case g.ELGAMAL_LEGACY:
                        case g.DSA:
                            this.x.write(t);
                            break;
                        case g.ECDSA:
                        case g.EDDSA:
                            this.d.write(t);
                            break;
                        default:
                            throw new Error("Unknown key type.")
                    }
                    return t
                }
                read(t, e) {
                    switch (i((255 & e) === e), e) {
                        case g.RSA:
                        case g.RSA_ENCRYPT_ONLY:
                        case g.RSA_SIGN_ONLY:
                            this.d.read(t), this.q.read(t), this.p.read(t), this.qi.read(t);
                            break;
                        case g.ELGAMAL:
                        case g.ELGAMAL_LEGACY:
                        case g.DSA:
                            this.x.read(t);
                            break;
                        case g.ECDSA:
                        case g.EDDSA:
                            this.d.read(t);
                            break;
                        default:
                            throw new Error("Unknown key type.")
                    }
                    return this
                }
                format() {
                    return this.p.data.length > 0 ? {
                        d: this.d.data.toString("hex"),
                        q: this.q.data.toString("hex"),
                        p: this.p.data.toString("hex"),
                        qi: this.qi.data.toString("hex")
                    } : this.x.data.length > 0 ? {
                        x: this.x.data.toString("hex")
                    } : this.d.data.length > 0 ? {
                        d: this.d.data.toString("hex")
                    } : {
                        d: this.d.data.toString("hex"),
                        q: this.q.data.toString("hex"),
                        p: this.p.data.toString("hex"),
                        qi: this.qi.data.toString("hex"),
                        x: this.x.data.toString("hex")
                    }
                }
            }
            class PGPUserID extends PGPBody {
                constructor() {
                    super(), this.id = ""
                }
                getSize() {
                    return Buffer.byteLength(this.id, "utf8")
                }
                write(t) {
                    return t.writeString(this.id, "utf8"), t
                }
                read(t) {
                    return this.id = t.readString(t.left(), "utf8"), this
                }
                format() {
                    return {
                        id: this.id
                    }
                }
            }
            class MPI extends s.Struct {
                constructor(t) {
                    super(), this.bits = 0, this.data = N, null != t && this.fromOptions(t)
                }
                get() {
                    return this.data
                }
                set(t) {
                    return this.fromOptions(t)
                }
                fromOptions(t) {
                    return i(Buffer.isBuffer(t)), this.bits = o(t), this.data = t, this
                }
                getSize() {
                    return 2 + this.data.length
                }
                write(t) {
                    return t.writeU16BE(this.bits), t.writeBytes(this.data), t
                }
                read(t) {
                    if (0 === t.left()) return this;
                    const e = t.readU16BE(),
                        r = e + 7 >>> 3,
                        i = Math.min(r, t.left()),
                        s = t.readBytes(i);
                    return this.bits = e, this.data = s, this
                }
            }

            function I(t) {
                if (i("string" == typeof t), (t = t.replace(/[\t ]/g, "")).length >= 2 && 48 === t.charCodeAt(0) && 120 == (32 | t.charCodeAt(1)) && (t = t.substring(2)), t.length > 40) throw new Error("Invalid PGP key id/fingerprint.");
                const e = Buffer.from(t, "hex");
                if (e.length !== t.length >>> 1) throw new Error("Invalid PGP key id/fingerprint.");
                switch (e.length) {
                    case 4:
                    case 8:
                    case 16:
                    case 20:
                        break;
                    default:
                        throw new Error("Invalid PGP key id/fingerprint.")
                }
                return e
            }

            function x(t) {
                return i((255 & t) === t), 16 + (15 & t) << 6 + (t >>> 4)
            }
            e.packetTypes = w, e.packetTypesByVal = m, e.sigTypes = {
                BINARY: 0,
                TEXT: 1,
                GENERIC_CERT: 16,
                PERSONA_CERT: 17,
                CASUAL_CERT: 18,
                POSITIVE_CERT: 19,
                SUBKEY_BINDING: 24,
                PRIMARY_KEY_BINDING: 25,
                DIRECT_SIGNATURE: 31,
                KEY_REVOCATION: 32,
                SUBKEY_REVOCATION: 40
            }, e.sigTypesByVal = {
                0: "BINARY",
                1: "TEXT",
                16: "GENERIC_CERT",
                17: "PERSONA_CERT",
                18: "CASUAL_CERT",
                19: "POSITIVE_CERT",
                24: "SUBKEY_BINDING",
                25: "PRIMARY_KEY_BINDING",
                31: "DIRECT_SIGNATURE",
                32: "KEY_REVOCATION",
                40: "SUBKEY_REVOCATION"
            }, e.keyTypes = g, e.keyTypesByVal = S, e.cipherTypes = y, e.cipherTypesByVal = E, e.hashTypes = {
                MD5: 1,
                SHA1: 2,
                RIPEMD160: 3,
                SHA256: 8,
                SHA384: 9,
                SHA512: 10,
                SHA224: 11
            }, e.hashTypesByVal = A, e.compressTypes = {
                NONE: 0,
                ZIP: 1,
                ZLIB: 2,
                BZIP2: 3
            }, e.compressTypesByVal = {
                0: "NONE",
                1: "ZIP",
                2: "ZLIB",
                3: "BZIP2"
            }, e.curveTypes = P, e.curveTypesByVal = B, e.oids = k, e.PGPMessage = PGPMessage, e.PGPPacket = PGPPacket, e.PGPBody = PGPBody, e.PGPUnknown = PGPUnknown, e.PGPPublicKey = PGPPublicKey, e.PGPPrivateKey = PGPPrivateKey, e.CipherParams = CipherParams, e.S2K = S2K, e.SecretKey = SecretKey, e.PGPUserID = PGPUserID, e.MPI = MPI, e.encodeID = function(t) {
                switch (i(Buffer.isBuffer(t)), t.length) {
                    case 4:
                    case 8:
                    case 16:
                    case 20:
                        break;
                    default:
                        throw new Error("Invalid PGP key id/fingerprint.")
                }
                return "0x" + t.toString("hex").toUpperCase()
            }, e.decodeID = I
        },
        10056: function(t, e, r) {
            "use strict";
            const i = r(5466);
            class RC4 {
                constructor() {
                    this.s = new Uint32Array(256), this.i = 0, this.j = 0
                }
                init(t) {
                    i(Buffer.isBuffer(t));
                    const e = t.length;
                    if (e < 1 || e > 256) throw new Error("Invalid key size.");
                    const r = this.s;
                    for (let t = 0; t < 256; t++) r[t] = t;
                    let s = 0;
                    for (let i = 0; i < 256; i++) s += r[i] + t[i % e], s &= 255, [r[i], r[s]] = [r[s], r[i]];
                    return this
                }
                encrypt(t) {
                    return this.crypt(t, t)
                }
                crypt(t, e) {
                    if (i(Buffer.isBuffer(t)), i(Buffer.isBuffer(e)), e.length < t.length) throw new Error("Invalid output size.");
                    const r = this.s;
                    let s, n, {
                        i: o,
                        j: a
                    } = this;
                    for (let i = 0; i < t.length; i++) o += 1, o &= 255, s = r[o], a += s, a &= 255, n = r[a], r[o] = n, r[a] = s, e[i] = t[i] ^ r[s + n & 255];
                    return this.i = o, this.j = a, e
                }
                destroy() {
                    for (let t = 0; t < 256; t++) this.s[t] = 0;
                    return this
                }
            }
            RC4.native = 0, t.exports = RC4
        },
        10059: function(t, e, r) {
            "use strict";
            const i = r(5466),
                s = r(6671),
                n = r(5636),
                o = r(6087),
                a = {
                    encrypt(t, e, r, a = null, h = null) {
                        i(t && "string" == typeof t.id), i(Buffer.isBuffer(e));
                        const c = n.randomBytes(32);
                        let u = s.encryptOAEP(t, c, r, h);
                        null != a && (u = s.veil(u, a, r));
                        const f = n.randomBytes(24),
                            l = o.seal(e, c, f);
                        return Buffer.concat([u, f, l])
                    },
                    decrypt(t, e, r, n = null, a = null) {
                        i(t && "string" == typeof t.id), i(Buffer.isBuffer(e)), i(r instanceof s.RSAPrivateKey), null == n && (n = r.bits()), i(n >>> 0 === n);
                        const h = n + 7 >>> 3;
                        if (e.length < h + 24) throw new Error("Invalid ciphertext.");
                        const c = s.unveil(e.slice(0, h), n, r),
                            u = s.decryptOAEP(t, c, r, a),
                            f = e.slice(h, h + 24),
                            l = e.slice(h + 24);
                        return o.open(l, u, f)
                    }
                };
            t.exports = a
        },
        10060: function(t, e, r) {
            "use strict";
            t.exports = r(10061)
        },
        10062: function(t, e, r) {
            "use strict";
            t.exports = r(10063)
        },
        10065: function(t, e, r) {
            "use strict";
            const i = r(5466),
                s = r(6660),
                n = r(5797),
                {
                    padLeft: o,
                    padRight: a
                } = r(5658),
                h = r(7474),
                c = r(6089),
                u = r(5636),
                f = r(6664),
                {
                    PEMBlock: l
                } = r(5676),
                d = r(7496),
                p = r(6666),
                w = r(6667),
                m = r(7498),
                g = r(7499),
                S = r(7500),
                y = r(6659),
                E = r(6671),
                A = {
                    DSA: "ssh-dss",
                    RSA: "ssh-rsa",
                    P256: "ecdsa-sha2-nistp256",
                    P384: "ecdsa-sha2-nistp384",
                    P521: "ecdsa-sha2-nistp521",
                    ED25519: "ssh-ed25519"
                },
                b = {
                    [A.DSA]: "DSA",
                    [A.RSA]: "RSA",
                    [A.P256]: "P256",
                    [A.P384]: "P384",
                    [A.P521]: "P521",
                    [A.ED25519]: "ED25519"
                },
                P = {
                    [A.P256]: "nistp256",
                    [A.P384]: "nistp384",
                    [A.P521]: "nistp521"
                },
                B = {
                    "3des-cbc": "DES-EDE3-CBC",
                    "aes128-cbc": "AES-128-CBC",
                    "aes192-cbc": "AES-192-CBC",
                    "aes256-cbc": "AES-256-CBC",
                    "rijndael-cbc@lysator.liu.se": "AES-256-CBC",
                    "aes128-ctr": "AES-128-CTR",
                    "aes192-ctr": "AES-192-CTR",
                    "aes256-ctr": "AES-256-CTR"
                },
                k = Buffer.alloc(0),
                N = Buffer.alloc(32, 0);
            class SSHPublicKey extends s.Struct {
                constructor() {
                    super(), this.type = A.ED25519, this.p = k, this.q = k, this.g = k, this.y = k, this.n = k, this.e = k, this.point = N, this.comment = ""
                }
                getCurve() {
                    if (!P.hasOwnProperty(this.type)) throw new Error("No curve available.");
                    return P[this.type]
                }
                getSize() {
                    let t = 0;
                    switch (t += _(this.type), this.type) {
                        case A.DSA:
                            t += L(this.p), t += L(this.q), t += L(this.g), t += L(this.y);
                            break;
                        case A.RSA:
                            t += L(this.e), t += L(this.n);
                            break;
                        case A.P256:
                        case A.P384:
                        case A.P521:
                            t += L(this.getCurve()), t += L(this.point);
                            break;
                        case A.ED25519:
                            t += L(this.point);
                            break;
                        default:
                            throw new i.AssertionError("Invalid key.")
                    }
                    return t
                }
                write(t) {
                    switch (U(t, this.type), this.type) {
                        case A.DSA:
                            D(t, this.p), D(t, this.q), D(t, this.g), D(t, this.y);
                            break;
                        case A.RSA:
                            D(t, this.e), D(t, this.n);
                            break;
                        case A.P256:
                        case A.P384:
                        case A.P521:
                            U(t, this.getCurve()), D(t, this.point);
                            break;
                        case A.ED25519:
                            D(t, this.point);
                            break;
                        default:
                            throw new i.AssertionError("Invalid key.")
                    }
                    return t
                }
                read(t) {
                    switch (this.type = x(t), this.type) {
                        case A.DSA:
                            this.p = R(t), this.q = R(t), this.g = R(t), this.y = R(t);
                            break;
                        case A.RSA:
                            this.e = R(t), this.n = R(t);
                            break;
                        case A.P256:
                        case A.P384:
                        case A.P521:
                            if (x(t) !== this.getCurve()) throw new Error("Invalid curve prefix.");
                            this.point = R(t);
                            break;
                        case A.ED25519:
                            this.point = R(t);
                            break;
                        default:
                            throw new Error("Invalid key type.")
                    }
                    return this
                }
                toString() {
                    const t = this.encode();
                    let e = this.comment;
                    return e.length > 0 && (e = " " + e), `${this.type} ${n.encode(t)}${e}`
                }
                fromString(t) {
                    i("string" == typeof t);
                    const e = t.split(" ", 3);
                    if (e.length < 2) throw new Error("Invalid SSH key text.");
                    const [r, s] = e;
                    if (!b.hasOwnProperty(r)) throw new Error(`Unknown SSH public key type: ${r}.`);
                    const o = n.decode(s);
                    if (this.decode(o), this.type !== r) throw new Error("Key type mismatch.");
                    return e.length > 2 && (this.comment = e[2].trim()), this
                }
                format() {
                    switch (this.type) {
                        case A.DSA:
                            return {
                                type: this.type, p: this.p.toString("hex"), q: this.q.toString("hex"), g: this.g.toString("hex"), y: this.y.toString("hex"), comment: this.comment
                            };
                        case A.RSA:
                            return {
                                type: this.type, n: this.n.toString("hex"), e: this.e.toString("hex"), comment: this.comment
                            };
                        case A.P256:
                        case A.P384:
                        case A.P521:
                        case A.ED25519:
                            return {
                                type: this.type, point: this.point.toString("hex"), comment: this.comment
                            };
                        default:
                            return this
                    }
                }
            }
            class SSHPrivateKey extends s.Struct {
                constructor() {
                    super(), this.type = A.ED25519, this.p = k, this.q = k, this.g = k, this.y = k, this.x = k, this.n = k, this.e = k, this.d = k, this.p = k, this.q = k, this.dp = k, this.dq = k, this.qi = k, this.key = N, this.comment = "", this.modern = !1
                }
                getCurve() {
                    if (!P.hasOwnProperty(this.type)) throw new Error("No curve available.");
                    return P[this.type]
                }
                encodeSSH(t) {
                    i(null == t || "string" == typeof t);
                    const e = new KDFOptions,
                        r = new SSHPublicKey,
                        n = new RawPrivateKey,
                        o = s.write(8192);
                    switch (o.writeString("openssh-key-v1"), o.writeU8(0), null != t ? (e.name = "bcrypt", e.salt = u.randomBytes(16), e.rounds = 16, U(o, "aes256-ctr")) : U(o, "none"), e.write(o), O(o, 1), r.type = this.type, D(o, r.encode()), n.type = this.type, this.type) {
                        case A.DSA:
                            n.p = this.p, n.q = this.q, n.g = this.g, n.y = this.y, n.x = this.x;
                            break;
                        case A.RSA:
                            n.n = this.n, n.e = this.e, n.d = this.d, n.p = this.p, n.q = this.q, n.qi = this.qi;
                            break;
                        case A.P256:
                            n.point = m.publicKeyCreate(this.key, !1), n.key = this.key;
                            break;
                        case A.P384:
                            n.point = g.publicKeyCreate(this.key, !1), n.key = this.key;
                            break;
                        case A.P521:
                            n.point = S.publicKeyCreate(this.key, !1), n.key = this.key;
                            break;
                        case A.ED25519:
                            n.point = y.publicKeyCreate(this.key), n.key = this.key;
                            break;
                        default:
                            throw new i.AssertionError("Invalid key.")
                    }
                    n.comment = this.comment;
                    let a = n.encode(null != t);
                    return null != t && (a = function(t, e, r, i, s) {
                        const [n, o, a] = v(e, r, i, s);
                        return c.encrypt(n, o, a, t)
                    }(a, "aes256-ctr", t, e.salt, e.rounds)), D(o, a), o.slice()
                }
                decodeSSH(t, e) {
                    const r = s.read(t);
                    if ("openssh-key-v1" !== r.readString(14, "binary") || 0 !== r.readU8()) throw new Error("Invalid magic prefix for SSH key.");
                    const n = x(r),
                        o = KDFOptions.read(r);
                    if (1 !== C(r)) throw new Error("Too many SSH keys.");
                    const a = R(r),
                        h = SSHPublicKey.decode(a);
                    let c = R(r);
                    if ("none" !== n) {
                        if (null == e) throw new Error("Cannot decrypt without passphrase.");
                        if ("bcrypt" !== o.name) throw new Error("Invalid KDF.");
                        c = I(c, n, e, o.salt, o.rounds)
                    }
                    const u = RawPrivateKey.decode(c);
                    if (u.type !== h.type) throw new Error("Public/private mismatch.");
                    switch (this.type = h.type, this.type) {
                        case A.DSA:
                            this.p = u.p, this.q = u.q, this.g = u.g, this.y = u.y, this.x = u.x;
                            break;
                        case A.RSA:
                            this.n = u.n, this.e = u.e, this.d = u.d, this.p = u.p, this.q = u.q, this.qi = u.qi;
                            break;
                        case A.P256:
                        case A.P384:
                        case A.P521:
                        case A.ED25519:
                            this.key = u.key;
                            break;
                        default:
                            throw new i.AssertionError("Invalid key.")
                    }
                    if (this.type === A.RSA) {
                        const t = new E.RSAPrivateKey(this.n, this.e, this.d, this.p, this.q, null, null, this.qi);
                        if (E.privateKeyCompute(t), !E.privateKeyVerify(t)) throw new Error("Invalid RSA private key.");
                        this.dp = t.dp, this.dq = t.dq
                    }
                    return this.comment = u.comment, this.modern = !0, this
                }
                encode(t) {
                    if (this.modern || this.type === A.ED25519) return this.encodeSSH(t);
                    switch (this.type) {
                        case A.DSA:
                            return new f.DSAPrivateKey(0, this.p, this.q, this.g, this.y, this.x).encode();
                        case A.RSA:
                            return new p.RSAPrivateKey(0, this.n, this.e, this.d, this.p, this.q, this.dp, this.dq, this.qi).encode();
                        case A.P256:
                        case A.P384:
                        case A.P521: {
                            let t = null,
                                e = null;
                            switch (this.type) {
                                case A.P256:
                                    t = "P256", e = m.publicKeyCreate(this.key, !1);
                                    break;
                                case A.P384:
                                    t = "P384", e = g.publicKeyCreate(this.key, !1);
                                    break;
                                case A.P521:
                                    t = "P521", e = S.publicKeyCreate(this.key, !1)
                            }
                            return new w.ECPrivateKey(1, this.key, t, e).encode()
                        }
                        default:
                            throw new i.AssertionError("Invalid key.")
                    }
                }
                toString(t) {
                    const e = new l;
                    if (this.modern || this.type === A.ED25519) return e.type = "OPENSSH PRIVATE KEY", e.data = this.encode(t), e.toString();
                    switch (this.type) {
                        case A.DSA:
                            e.type = "DSA PRIVATE KEY";
                            break;
                        case A.RSA:
                            e.type = "RSA PRIVATE KEY";
                            break;
                        case A.P256:
                        case A.P384:
                        case A.P521:
                            e.type = "EC PRIVATE KEY";
                            break;
                        default:
                            throw new i.AssertionError("Invalid key.")
                    }
                    return e.data = this.encode(null), null != t && d.encrypt(e, "AES-128-CBC", t), e.toString()
                }
                fromString(t, e) {
                    const r = l.fromString(t);
                    if (r.isEncrypted()) {
                        if (null == e) throw new Error("Private key requires a passphrase.");
                        d.decrypt(r, e)
                    }
                    switch (r.type) {
                        case "DSA PRIVATE KEY": {
                            const t = f.DSAPrivateKey.decode(r.data);
                            return this.type = A.DSA, this.p = t.p.value, this.q = t.q.value, this.g = t.g.value, this.y = t.y.value, this.x = t.x.value, this
                        }
                        case "RSA PRIVATE KEY": {
                            const t = p.RSAPrivateKey.decode(r.data);
                            return this.type = A.RSA, this.n = t.n.value, this.e = t.e.value, this.d = t.d.value, this.p = t.p.value, this.q = t.q.value, this.dp = t.dp.value, this.dq = t.dq.value, this.qi = t.qi.value, this
                        }
                        case "EC PRIVATE KEY": {
                            const t = w.ECPrivateKey.decode(r.data),
                                e = t.namedCurveOID.getCurveName();
                            if (!e) throw new Error(`Unknown curve: ${t.namedCurveOID.toString()}.`);
                            let i = null,
                                s = 0;
                            switch (e) {
                                case "P256":
                                    i = A.P256, s = 32;
                                    break;
                                case "P384":
                                    i = A.P384, s = 48;
                                    break;
                                case "P521":
                                    i = A.P521, s = 66;
                                    break;
                                case "ED25519":
                                    i = A.ED25519, s = 32;
                                    break;
                                default:
                                    throw new Error(`Unsupported curve: ${e}.`)
                            }
                            return this.type = i, this.key = "ED25519" === e ? a(t.privateKey.value, s) : o(t.privateKey.value, s), this
                        }
                        case "OPENSSH PRIVATE KEY":
                            return this.decodeSSH(r.data, e);
                        default:
                            throw new Error(`Unknown private key type: ${r.type}.`)
                    }
                }
                format() {
                    switch (this.type) {
                        case A.DSA:
                            return {
                                type: this.type, p: this.p.toString("hex"), q: this.q.toString("hex"), g: this.g.toString("hex"), y: this.y.toString("hex"), x: this.x.toString("hex"), comment: this.comment, modern: this.modern
                            };
                        case A.RSA:
                            return {
                                type: this.type, n: this.n.toString("hex"), e: this.q.toString("hex"), d: this.d.toString("hex"), p: this.p.toString("hex"), q: this.q.toString("hex"), dp: this.dp.toString("hex"), dq: this.dq.toString("hex"), qi: this.qi.toString("hex"), comment: this.comment, modern: this.modern
                            };
                        case A.P256:
                        case A.P384:
                        case A.P521:
                        case A.ED25519:
                            return {
                                type: this.type, key: this.key.toString("hex"), comment: this.comment, modern: this.modern
                            };
                        default:
                            return this
                    }
                }
            }
            class KDFOptions extends s.Struct {
                constructor() {
                    super(), this.name = "none", this.salt = k, this.rounds = 0
                }
                getBodySize() {
                    let t = 0;
                    switch (this.name) {
                        case "none":
                            break;
                        case "bcrypt":
                            t += L(this.salt), t += (this.rounds, 4);
                            break;
                        default:
                            throw new Error(`Unknown KDF: ${this.name}.`)
                    }
                    return t
                }
                getSize() {
                    let t = 0;
                    return t += _(this.name), t += 4, t += this.getBodySize(), t
                }
                write(t) {
                    switch (U(t, this.name), O(t, this.getBodySize()), this.name) {
                        case "none":
                            break;
                        case "bcrypt":
                            D(t, this.salt), O(t, this.rounds);
                            break;
                        default:
                            throw new Error(`Unknown KDF: ${this.name}.`)
                    }
                    return t
                }
                read(t) {
                    this.name = x(t);
                    const e = function(t) {
                        return t.readChild(t.readU32BE())
                    }(t);
                    switch (this.name) {
                        case "none":
                            break;
                        case "bcrypt":
                            this.salt = R(e), this.rounds = C(e);
                            break;
                        default:
                            throw new Error(`Unknown KDF: ${this.name}.`)
                    }
                    return this
                }
            }
            class RawPrivateKey extends s.Struct {
                constructor() {
                    super(), this.type = A.ED25519, this.p = k, this.q = k, this.g = k, this.y = k, this.x = k, this.n = k, this.e = k, this.d = k, this.p = k, this.q = k, this.qi = k, this.point = N, this.key = N, this.comment = ""
                }
                getSize(t) {
                    let e = 0;
                    switch (e += 4, e += 4, e += _(this.type), this.type) {
                        case A.DSA:
                            e += L(this.p), e += L(this.q), e += L(this.g), e += L(this.y), e += L(this.x);
                            break;
                        case A.RSA:
                            e += L(this.n), e += L(this.e), e += L(this.d), e += L(this.qi), e += L(this.p), e += L(this.q);
                            break;
                        case A.P256:
                        case A.P384:
                        case A.P521:
                            e += _(P[this.type]), e += L(this.point), e += L(this.key);
                            break;
                        case A.ED25519:
                            e += L(this.point), e += 4, e += this.key.length, e += this.point.length;
                            break;
                        default:
                            throw new Error("Invalid key.")
                    }
                    return e += _(this.comment), e += 8 - (7 & e), e
                }
                write(t, e) {
                    const r = t.offset;
                    let i = 0;
                    switch (e && (i = 4294967296 * Math.random() >>> 0), O(t, i), O(t, i), U(t, this.type), this.type) {
                        case A.DSA:
                            D(t, this.p), D(t, this.q), D(t, this.g), D(t, this.y), D(t, this.x);
                            break;
                        case A.RSA:
                            D(t, this.n), D(t, this.e), D(t, this.d), D(t, this.qi), D(t, this.p), D(t, this.q);
                            break;
                        case A.P256:
                        case A.P384:
                        case A.P521:
                            U(t, P[this.type]), D(t, this.point), D(t, this.key);
                            break;
                        case A.ED25519:
                            D(t, this.point), D(t, s.concat(this.key, this.point));
                            break;
                        default:
                            throw new Error("Invalid key.")
                    }
                    U(t, this.comment);
                    let n = t.offset - r,
                        o = 1;
                    for (; 7 & n;) t.writeU8(o), n += 1, o += 1;
                    return t
                }
                read(t) {
                    if (0 != (7 & t.left())) throw new Error("Invalid padding.");
                    if (C(t) != C(t)) throw new Error("Decryption failed.");
                    switch (this.type = x(t), this.type) {
                        case A.DSA:
                            this.p = R(t), this.q = R(t), this.g = R(t), this.y = R(t), this.x = R(t);
                            break;
                        case A.RSA:
                            this.n = R(t), this.e = R(t), this.d = R(t), this.qi = R(t), this.p = R(t), this.q = R(t);
                            break;
                        case A.P256:
                        case A.P384:
                        case A.P521:
                            if (x(t) !== P[this.type]) throw new Error("Invalid curve.");
                            this.point = R(t), this.key = R(t), this.type === A.P256 ? this.key = o(this.key, 32) : this.type === A.P384 ? this.key = o(this.key, 48) : this.key = o(this.key, 66);
                            break;
                        case A.ED25519: {
                            const e = R(t),
                                r = R(t);
                            if (64 !== r.length) throw new Error("Invalid key pair.");
                            const i = r.slice(0, 32),
                                s = r.slice(32, 64);
                            if (!e.equals(s)) throw new Error("Public key mismatch.");
                            this.point = e, this.key = i;
                            break
                        }
                        default:
                            throw new Error("Invalid key.")
                    }
                    this.comment = x(t);
                    const e = t.readBytes(t.left(), !0);
                    for (let t = 0; t < e.length; t++)
                        if (e[t] !== t + 1) throw new Error("Invalid padding.");
                    return this
                }
            }

            function v(t, e, r, s) {
                if (i("string" == typeof t), i("string" == typeof e), i(Buffer.isBuffer(r)), i(s >>> 0 === s), !B.hasOwnProperty(t)) throw new Error(`Unknown cipher: ${t}.`);
                const n = B[t],
                    {
                        keySize: o,
                        ivSize: a
                    } = c.get(n),
                    u = o + a,
                    f = h.pbkdf(e, r, s, u);
                return [n, f.slice(0, o), f.slice(o, o + a)]
            }

            function I(t, e, r, i, s) {
                const [n, o, a] = v(e, r, i, s);
                return c.decrypt(n, o, a, t)
            }

            function x(t) {
                return t.readString(t.readU32BE(), "binary")
            }

            function R(t) {
                return t.readBytes(t.readU32BE())
            }

            function C(t) {
                return t.readU32BE()
            }

            function _(t) {
                return 4 + t.length
            }

            function U(t, e) {
                return t.writeU32BE(e.length), t.writeString(e, "binary"), t
            }

            function L(t) {
                return 4 + t.length
            }

            function D(t, e) {
                return t.writeU32BE(e.length), t.writeBytes(e), t
            }

            function O(t, e) {
                return t.writeU32BE(e), t
            }
            e.keyTypes = A, e.keyTypesByVal = b, e.SSHPublicKey = SSHPublicKey, e.SSHPrivateKey = SSHPrivateKey, e.KDFOptions = KDFOptions, e.RawPrivateKey = RawPrivateKey
        },
        10067: function(t, e, r) {
            "use strict";
            const i = r(6090);
            class SHA3_224 extends i {
                constructor() {
                    super()
                }
                init() {
                    return super.init(224)
                }
                static hash() {
                    return new SHA3_224
                }
                static hmac() {
                    return super.hmac(224)
                }
                static digest(t) {
                    return super.digest(t, 224)
                }
                static root(t, e) {
                    return super.root(t, e, 224)
                }
                static multi(t, e, r) {
                    return super.multi(t, e, r, 224)
                }
                static mac(t, e) {
                    return super.mac(t, e, 224)
                }
            }
            SHA3_224.native = i.native, SHA3_224.id = "SHA3_224", SHA3_224.size = 28, SHA3_224.bits = 224, SHA3_224.blockSize = 144, SHA3_224.zero = Buffer.alloc(28, 0), SHA3_224.ctx = new SHA3_224, t.exports = SHA3_224
        },
        10068: function(t, e, r) {
            "use strict";
            const i = r(6090);
            class SHA3_256 extends i {
                constructor() {
                    super()
                }
                init() {
                    return super.init(256)
                }
                static hash() {
                    return new SHA3_256
                }
                static hmac() {
                    return super.hmac(256)
                }
                static digest(t) {
                    return super.digest(t, 256)
                }
                static root(t, e) {
                    return super.root(t, e, 256)
                }
                static multi(t, e, r) {
                    return super.multi(t, e, r, 256)
                }
                static mac(t, e) {
                    return super.mac(t, e, 256)
                }
            }
            SHA3_256.native = i.native, SHA3_256.id = "SHA3_256", SHA3_256.size = 32, SHA3_256.bits = 256, SHA3_256.blockSize = 136, SHA3_256.zero = Buffer.alloc(32, 0), SHA3_256.ctx = new SHA3_256, t.exports = SHA3_256
        },
        10069: function(t, e, r) {
            "use strict";
            const i = r(6090);
            class SHA3_384 extends i {
                constructor() {
                    super()
                }
                init() {
                    return super.init(384)
                }
                static hash() {
                    return new SHA3_384
                }
                static hmac() {
                    return super.hmac(384)
                }
                static digest(t) {
                    return super.digest(t, 384)
                }
                static root(t, e) {
                    return super.root(t, e, 384)
                }
                static multi(t, e, r) {
                    return super.multi(t, e, r, 384)
                }
                static mac(t, e) {
                    return super.mac(t, e, 384)
                }
            }
            SHA3_384.native = i.native, SHA3_384.id = "SHA3_384", SHA3_384.size = 48, SHA3_384.bits = 384, SHA3_384.blockSize = 104, SHA3_384.zero = Buffer.alloc(48, 0), SHA3_384.ctx = new SHA3_384, t.exports = SHA3_384
        },
        10070: function(t, e, r) {
            "use strict";
            const i = r(6090);
            class SHA3_512 extends i {
                constructor() {
                    super()
                }
                init() {
                    return super.init(512)
                }
                static hash() {
                    return new SHA3_512
                }
                static hmac() {
                    return super.hmac(512)
                }
                static digest(t) {
                    return super.digest(t, 512)
                }
                static root(t, e) {
                    return super.root(t, e, 512)
                }
                static multi(t, e, r) {
                    return super.multi(t, e, r, 512)
                }
                static mac(t, e) {
                    return super.mac(t, e, 512)
                }
            }
            SHA3_512.native = i.native, SHA3_512.id = "SHA3_512", SHA3_512.size = 64, SHA3_512.bits = 512, SHA3_512.blockSize = 72, SHA3_512.zero = Buffer.alloc(64, 0), SHA3_512.ctx = new SHA3_512, t.exports = SHA3_512
        },
        10071: function(t, e, r) {
            "use strict";
            const i = r(6665);
            class SHAKE128 extends i {
                constructor() {
                    super()
                }
                init() {
                    return super.init(128)
                }
                static hash() {
                    return new SHAKE128
                }
                static hmac(t) {
                    return super.hmac(128, t)
                }
                static digest(t, e) {
                    return super.digest(t, 128, e)
                }
                static root(t, e, r) {
                    return super.root(t, e, 128, r)
                }
                static multi(t, e, r, i) {
                    return super.multi(t, e, r, 128, i)
                }
                static mac(t, e, r) {
                    return super.mac(t, e, 128, r)
                }
            }
            SHAKE128.native = i.native, SHAKE128.id = "SHAKE128", SHAKE128.size = 16, SHAKE128.bits = 128, SHAKE128.blockSize = 168, SHAKE128.zero = Buffer.alloc(16, 0), SHAKE128.ctx = new SHAKE128, t.exports = SHAKE128
        },
        10072: function(t, e, r) {
            "use strict";
            t.exports = r(10073)
        },
        10074: function(t, e, r) {
            "use strict";
            t.exports = r(10075)
        },
        10076: function(t, e, r) {
            "use strict";
            const i = r(7480),
                s = r(7494);
            t.exports = new i("X448", 446, 56, "2b656f", s)
        },
        10101: function(t, e, r) {
            "use strict";
            const i = r(5466),
                s = [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, -1, -1, -1, -1, -1, -1, -1, 9, 10, 11, 12, 13, 14, 15, 16, -1, 17, 18, 19, 20, 21, -1, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, -1, -1, -1, -1, -1, -1, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, -1, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, -1, -1, -1, -1, -1];
            e.encode = function(t) {
                i(Buffer.isBuffer(t));
                let e = 0,
                    r = 0;
                for (; r < t.length && 0 === t[r]; r++) e += 1;
                const s = Buffer.allocUnsafe(1 + (138 * t.length / 100 | 0));
                s.fill(0);
                let n = 0;
                for (; r < t.length; r++) {
                    let e = t[r],
                        o = 0;
                    for (let t = s.length - 1; t >= 0 && !(0 === e && o >= n); t--, o++) e += 256 * s[t], s[t] = e % 58, e = e / 58 | 0;
                    i(0 === e), n = o
                }
                for (r = s.length - n; r < s.length && 0 === s[r];) r += 1;
                let o = "";
                for (let t = 0; t < e; t++) o += "1";
                for (; r < s.length; r++) o += "123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz" [s[r]];
                return o
            }, e.decode = function(t) {
                i("string" == typeof t);
                let e = 0,
                    r = 0;
                for (; r < t.length && "1" === t[r]; r++) e += 1;
                const n = Buffer.allocUnsafe(1 + (733 * t.length / 1e3 | 0));
                n.fill(0);
                let o = 0;
                for (; r < t.length; r++) {
                    const e = t.charCodeAt(r),
                        a = 65408 & e ? -1 : s[e];
                    if (-1 === a) throw new Error("Non-base58 character.");
                    let h = a,
                        c = 0;
                    for (let t = n.length - 1; t >= 0 && !(0 === h && c >= o); t--, c++) h += 58 * n[t], n[t] = 255 & h, h >>>= 8;
                    i(0 === h), o = c
                }
                for (r = 0; r < n.length && 0 === n[r];) r += 1;
                const a = Buffer.allocUnsafe(e + (n.length - r));
                let h;
                for (h = 0; h < e; h++) a[h] = 0;
                for (; r < n.length;) a[h++] = n[r++];
                return a
            }, e.test = function(t) {
                if ("string" != typeof t) return !1;
                for (let e = 0; e < t.length; e++) {
                    const r = t.charCodeAt(e);
                    if (65408 & r) return !1;
                    if (-1 === s[r]) return !1
                }
                return !0
            }
        },
        10102: function(t, e, r) {
            "use strict";
            const i = r(5466),
                s = Buffer.allocUnsafe(66),
                n = "qpzry9x8gf2tvdw0s3jn54khce6mua7l",
                o = [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 15, -1, 10, 17, 21, 20, 26, 30, 7, 5, -1, -1, -1, -1, -1, -1, -1, 29, -1, 24, 13, 25, 9, 8, 23, -1, 18, 22, 31, 27, 19, -1, 1, 0, 3, 16, 11, 28, 12, 14, 6, 4, 2, -1, -1, -1, -1, -1, -1, 29, -1, 24, 13, 25, 9, 8, 23, -1, 18, 22, 31, 27, 19, -1, 1, 0, 3, 16, 11, 28, 12, 14, 6, 4, 2, -1, -1, -1, -1, -1];

            function a(t) {
                const e = t >>> 25;
                return (33554431 & t) << 5 ^ 996825010 & -(e >>> 0 & 1) ^ 642813549 & -(e >>> 1 & 1) ^ 513874426 & -(e >>> 2 & 1) ^ 1027748829 & -(e >>> 3 & 1) ^ 705979059 & -(e >>> 4 & 1)
            }

            function h(t, e) {
                i("string" == typeof t), i(Buffer.isBuffer(e));
                let r, s = 1;
                for (r = 0; r < t.length; r++) {
                    const e = t.charCodeAt(r);
                    if (65280 & e || e >>> 5 == 0) throw new Error("Invalid bech32 character.");
                    s = a(s) ^ e >>> 5
                }
                if (r + 7 + e.length > 90) throw new Error("Invalid bech32 data length.");
                s = a(s);
                let o = "";
                for (let e = 0; e < t.length; e++) {
                    const r = t.charCodeAt(e);
                    s = a(s) ^ 31 & r, o += t[e]
                }
                o += "1";
                for (let t = 0; t < e.length; t++) {
                    const r = e[t];
                    if (r >>> 5 != 0) throw new Error("Invalid bech32 value.");
                    s = a(s) ^ r, o += n[r]
                }
                for (let t = 0; t < 6; t++) s = a(s);
                s ^= 1;
                for (let t = 0; t < 6; t++) o += n[s >>> 5 * (5 - t) & 31];
                return o
            }

            function c(t) {
                if (i("string" == typeof t), t.length < 8 || t.length > 90) throw new Error("Invalid bech32 string length.");
                let e = 0;
                for (; e < t.length && "1" !== t[t.length - 1 - e];) e += 1;
                const r = t.length - (1 + e);
                if (1 + e >= t.length || e < 6) throw new Error("Invalid bech32 data length.");
                e -= 6;
                const s = Buffer.allocUnsafe(e);
                let n, h = 1,
                    c = !1,
                    u = !1,
                    f = "";
                for (let e = 0; e < r; e++) {
                    let r = t.charCodeAt(e);
                    if (r < 33 || r > 126) throw new Error("Invalid bech32 character.");
                    r >= 97 && r <= 122 ? c = !0 : r >= 65 && r <= 90 && (u = !0, r = r - 65 + 97), f += String.fromCharCode(r), h = a(h) ^ r >>> 5
                }
                for (h = a(h), n = 0; n < r; n++) h = a(h) ^ 31 & t.charCodeAt(n);
                for (n += 1; n < t.length;) {
                    const e = t.charCodeAt(n),
                        i = 65408 & e ? -1 : o[e];
                    if (-1 === i) throw new Error("Invalid bech32 character.");
                    e >= 97 && e <= 122 ? c = !0 : e >= 65 && e <= 90 && (u = !0), h = a(h) ^ i, n + 6 < t.length && (s[n - (1 + r)] = i), n += 1
                }
                if (c && u) throw new Error("Invalid bech32 casing.");
                if (1 !== h) throw new Error("Invalid bech32 checksum.");
                return [f, s.slice(0, e)]
            }

            function u(t, e, r, s, n, o, a) {
                i(Buffer.isBuffer(t)), i(e >>> 0 === e), i(Buffer.isBuffer(r)), i(s >>> 0 === s), i((255 & n) === n), i((255 & o) === o), i("boolean" == typeof a);
                const h = (1 << o) - 1;
                let c = 0,
                    u = 0;
                for (; e < t.length; e++) {
                    const i = t[e];
                    if (i >>> n != 0) throw new Error("Invalid bits.");
                    for (c = c << n | i, u += n; u >= o;) u -= o, r[s++] = c >>> u & h
                }
                if (a) u && (r[s++] = c << o - u & h);
                else if (u >= n || c << o - u & h) throw new Error("Invalid bits.");
                return i(s <= r.length), r.slice(0, s)
            }
            class AddrResult {
                constructor(t, e, r) {
                    this.hrp = t, this.version = e, this.hash = r
                }
            }
            e.serialize = h, e.deserialize = c, e.is = function(t) {
                if ("string" != typeof t) return !1;
                try {
                    c(t)
                } catch (t) {
                    return !1
                }
                return !0
            }, e.convertBits = function(t, e, r, s) {
                i(Buffer.isBuffer(t)), i((255 & e) === e), i((255 & r) === r), i("boolean" == typeof s);
                const n = function(t, e, r, s) {
                    i(t >>> 0 === t), i((255 & e) === e), i((255 & r) === r), i("boolean" == typeof s), i(0 !== r);
                    let n = (t * e + (r - 1)) / r;
                    return n >>>= 0, s && (n += 1), n
                }(t.length, e, r, s);
                return u(t, 0, Buffer.allocUnsafe(n), 0, e, r, s)
            }, e.encode = function(t, e, r) {
                if (i("string" == typeof t), i((255 & e) === e), i(Buffer.isBuffer(r)), e < 0 || e > 31) throw new Error("Invalid bech32 version.");
                if (r.length < 2 || r.length > 40) throw new Error("Invalid bech32 data length.");
                const n = s;
                return n[0] = e, h(t, u(r, 0, n, 1, 8, 5, !0))
            }, e.decode = function(t) {
                i("string" == typeof t);
                const [e, r] = c(t);
                if (0 === r.length || r.length > 65) throw new Error("Invalid bech32 data length.");
                const s = r[0];
                if (s > 31) throw new Error("Invalid bech32 version.");
                const n = u(r, 1, r, 0, 5, 8, !1);
                if (n.length < 2 || n.length > 40) throw new Error("Invalid bech32 data length.");
                return new AddrResult(e, s, n)
            }, e.test = function(t) {
                if ("string" != typeof t) return !1;
                let e;
                try {
                    [, e] = c(t)
                } catch (t) {
                    return !1
                }
                return !(0 === e.length || e.length > 65) && !(e[0] > 31)
            }
        },
        10103: function(t, e, r) {
            "use strict";
            const i = r(5466);
            class U64 {
                constructor(t, e) {
                    this.hi = 0 | t, this.lo = 0 | e
                }
                ushrn32(t) {
                    t &= 63;
                    let e = this.lo;
                    return 0 === t || (t < 32 ? (e >>>= t, e |= this.hi << 32 - t) : e = this.hi >>> t - 32), e
                }
            }
            const s = Buffer.allocUnsafe(105),
                n = "qpzry9x8gf2tvdw0s3jn54khce6mua7l",
                o = [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 15, -1, 10, 17, 21, 20, 26, 30, 7, 5, -1, -1, -1, -1, -1, -1, -1, 29, -1, 24, 13, 25, 9, 8, 23, -1, 18, 22, 31, 27, 19, -1, 1, 0, 3, 16, 11, 28, 12, 14, 6, 4, 2, -1, -1, -1, -1, -1, -1, 29, -1, 24, 13, 25, 9, 8, 23, -1, 18, 22, 31, 27, 19, -1, 1, 0, 3, 16, 11, 28, 12, 14, 6, 4, 2, -1, -1, -1, -1, -1],
                a = new U64(7, 4294967295),
                h = [new U64(152, 4072443489), new U64(121, 3077413346), new U64(243, 1046459332), new U64(174, 783016616), new U64(30, 1329849456)];

            function c(t, e) {
                const r = t,
                    i = r.hi >>> 3;
                r.hi &= a.hi, r.lo &= a.lo, r.hi <<= 5, r.hi |= r.lo >>> 27, r.lo <<= 5;
                for (let t = 0; t < h.length; t++) i >>> t & 1 && (r.hi ^= h[t].hi, r.lo ^= h[t].lo);
                return r.lo ^= e, r
            }

            function u(t, e, r, s, n, o, a) {
                i(Buffer.isBuffer(t)), i(e >>> 0 === e), i(Buffer.isBuffer(r)), i(s >>> 0 === s), i((255 & n) === n), i((255 & o) === o), i("boolean" == typeof a);
                const h = (1 << o) - 1;
                let c = 0,
                    u = 0;
                for (; e < t.length; e++) {
                    const i = t[e];
                    if (i >>> n != 0) throw new Error("Invalid bits.");
                    for (c = c << n | i, u += n; u >= o;) u -= o, r[s++] = c >>> u & h
                }
                if (a) u && (r[s++] = c << o - u & h);
                else if (u >= n || c << o - u & h) throw new Error("Invalid bits.");
                return i(s <= r.length), r.slice(0, s)
            }

            function f(t, e = "bitcoincash") {
                i("string" == typeof t), i("string" == typeof e);
                const [r, s] = function(t, e) {
                    if (i("string" == typeof t), t.length < 8 || t.length > 196) throw new Error("Invalid cashaddr data length.");
                    let r = !1,
                        s = !1,
                        n = !1,
                        a = 0;
                    for (let e = 0; e < t.length; e++) {
                        const i = t.charCodeAt(e);
                        if (i >= 97 && i <= 122) r = !0;
                        else if (i >= 65 && i <= 90) s = !0;
                        else if (i >= 48 && i <= 57) n = !0;
                        else {
                            if (58 !== i) throw new Error("Invalid cashaddr character.");
                            if (n || 0 === e || e > 83) throw new Error("Invalid cashaddr prefix.");
                            if (0 !== a) throw new Error("Invalid cashaddr separators.");
                            a = e
                        }
                    }
                    if (s && r) throw new Error("Invalid cashaddr casing.");
                    const h = new U64(0, 1);
                    let u;
                    0 === a ? u = e.toLowerCase() : (u = t.substring(0, a).toLowerCase(), a += 1);
                    for (let t = 0; t < u.length; t++) {
                        c(h, 31 & (32 | u.charCodeAt(t)))
                    }
                    c(h, 0);
                    const f = t.length - a;
                    if (f <= 8 || f > 112) throw new Error("Invalid cashaddr data length.");
                    const l = Buffer.allocUnsafe(f);
                    for (let e = a; e < t.length; e++) {
                        const r = t.charCodeAt(e),
                            i = 65408 & r ? -1 : o[r];
                        if (-1 === i) throw new Error("Invalid cashaddr character.");
                        c(h, i), e + 8 < t.length && (l[e - a] = i)
                    }
                    if (!(0 === h.hi && 1 === h.lo && u === e)) throw new Error("Invalid cashaddr checksum.");
                    return [u, l.slice(0, -8)]
                }(t, e), n = 5 * s.length & 7;
                if (n >= 5) throw new Error("Invalid padding in data.");
                if (s[s.length - 1] & (1 << n) - 1) throw new Error("Non zero padding.");
                const a = u(s, 0, s, 0, 5, 8, !1),
                    h = a[0] >>> 3 & 31,
                    f = a.slice(1);
                let l = 20 + 4 * (3 & a[0]);
                if (4 & a[0] && (l *= 2), l !== f.length) throw new Error("Invalid cashaddr data length.");
                return new AddrResult(r, h, f)
            }
            class AddrResult {
                constructor(t, e, r) {
                    this.prefix = t, this.type = e, this.hash = r
                }
            }
            e.encode = function(t, e, r) {
                if (i("string" == typeof t), i((15 & e) === e, "Invalid cashaddr type."), i(Buffer.isBuffer(r)), 0 === t.length || t.length > 83) throw new Error("Invalid cashaddr prefix.");
                const o = function(t) {
                        switch (i(t >>> 0 === t), t) {
                            case 20:
                                return 0;
                            case 24:
                                return 1;
                            case 28:
                                return 2;
                            case 32:
                                return 3;
                            case 40:
                                return 4;
                            case 48:
                                return 5;
                            case 56:
                                return 6;
                            case 64:
                                return 7;
                            default:
                                throw new Error("Non standard length.")
                        }
                    }(r.length),
                    a = Buffer.allocUnsafe(r.length + 1);
                return a[0] = e << 3 | o, r.copy(a, 1),
                    function(t, e) {
                        i("string" == typeof t), i(Buffer.isBuffer(e));
                        const r = new U64(0, 1);
                        let s = "",
                            o = !1,
                            a = !1;
                        for (let e = 0; e < t.length; e++) {
                            let i = t.charCodeAt(e);
                            if (65280 & i || i >>> 5 == 0) throw new Error("Invalid cashaddr character.");
                            if (i >= 97 && i <= 122) a = !0;
                            else if (i >= 65 && i <= 90) o = !0, i = i - 65 + 97;
                            else if (i >= 48 && i <= 57) throw new Error("Invalid cashaddr prefix.");
                            c(r, 31 & i), s += String.fromCharCode(i)
                        }
                        if (a && o) throw new Error("Invalid cashaddr prefix.");
                        c(r, 0), s += ":";
                        for (let t = 0; t < e.length; t++) {
                            const i = e[t];
                            if (i >>> 5 != 0) throw new Error("Invalid cashaddr value.");
                            c(r, i), s += n[i]
                        }
                        for (let t = 0; t < 8; t++) c(r, 0);
                        r.lo ^= 1;
                        for (let t = 0; t < 8; t++) {
                            const e = 31 & r.ushrn32(5 * (7 - t));
                            s += n[e]
                        }
                        return s
                    }(t, u(a, 0, s, 0, 8, 5, !0))
            }, e.decode = f, e.test = function(t, e = "bitcoincash") {
                try {
                    f(t, e)
                } catch (t) {
                    return !1
                }
                return !0
            }
        },
        5466: function(t, e, r) {
            "use strict";
            class AssertionError extends Error {
                constructor(t) {
                    "string" == typeof t && (t = {
                        message: t
                    }), null !== t && "object" == typeof t || (t = {});
                    let e = null,
                        r = "fail",
                        i = Boolean(t.generatedMessage);
                    var s;
                    if (null != t.message && (e = "string" == typeof(s = t.message) ? s : E(s) ? d(s) : l(s)), "string" == typeof t.operator && (r = t.operator), null == e) {
                        if ("fail" === r) e = "Assertion failed.";
                        else {
                            e = `${l(t.actual)} ${r} ${l(t.expected)}`
                        }
                        i = !0
                    }
                    super(e);
                    let n = this.constructor;
                    "function" == typeof t.stackStartFunction ? n = t.stackStartFunction : "function" == typeof t.stackStartFn && (n = t.stackStartFn), this.type = "AssertionError", this.name = "AssertionError [ERR_ASSERTION]", this.code = "ERR_ASSERTION", this.generatedMessage = i, this.actual = t.actual, this.expected = t.expected, this.operator = r, Error.captureStackTrace && Error.captureStackTrace(this, n)
                }
            }

            function i(t, e) {
                if (!t) {
                    let r = !1;
                    if (0 === arguments.length) e = "No value argument passed to `assert()`.", r = !0;
                    else if (null == e) e = "Assertion failed.", r = !0;
                    else if (E(e)) throw e;
                    throw new AssertionError({
                        message: e,
                        actual: t,
                        expected: !0,
                        operator: "==",
                        generatedMessage: r,
                        stackStartFn: i
                    })
                }
            }

            function s(t, e, r) {
                if (!Object.is(t, e)) {
                    if (E(r)) throw r;
                    throw new AssertionError({
                        message: r,
                        actual: t,
                        expected: e,
                        operator: "strictEqual",
                        stackStartFn: s
                    })
                }
            }

            function n(t, e, r) {
                if (Object.is(t, e)) {
                    if (E(r)) throw r;
                    throw new AssertionError({
                        message: r,
                        actual: t,
                        expected: e,
                        operator: "notStrictEqual",
                        stackStartFn: n
                    })
                }
            }

            function o(t, e, r) {
                "string" == typeof e && (r = e, e = void 0);
                let i = !1,
                    s = null;
                f("function" == typeof t, "func", "function");
                try {
                    t()
                } catch (t) {
                    i = !0, s = t
                }
                if (i) {
                    if (p(s, e, r, o)) {
                        let t = !1;
                        throw null == r && (r = "Got unwanted exception.", t = !0), new AssertionError({
                            message: r,
                            actual: s,
                            expected: e,
                            operator: "doesNotThrow",
                            generatedMessage: t,
                            stackStartFn: o
                        })
                    }
                    throw s
                }
            }
            async function a(t, e, r) {
                "string" == typeof e && (r = e, e = void 0);
                let i = !1,
                    s = null;
                "function" != typeof t && f(b(t), "func", "promise");
                try {
                    b(t) ? await t : await t()
                } catch (t) {
                    i = !0, s = t
                }
                if (!i) {
                    let t = !1;
                    throw null == r && (r = "Missing expected rejection.", t = !0), new AssertionError({
                        message: r,
                        actual: void 0,
                        expected: e,
                        operator: "rejects",
                        generatedMessage: t,
                        stackStartFn: a
                    })
                }
                if (!p(s, e, r, a)) throw s
            }
            async function h(t, e, r) {
                "string" == typeof e && (r = e, e = void 0);
                let i = !1,
                    s = null;
                "function" != typeof t && f(b(t), "func", "promise");
                try {
                    b(t) ? await t : await t()
                } catch (t) {
                    i = !0, s = t
                }
                if (i) {
                    if (p(s, e, r, h)) {
                        let t = !1;
                        throw null == r && (r = "Got unwanted rejection.", t = !0), new AssertionError({
                            message: r,
                            actual: void 0,
                            expected: e,
                            operator: "doesNotReject",
                            generatedMessage: t,
                            stackStartFn: h
                        })
                    }
                    throw s
                }
            }

            function c(t, e, r) {
                if (!w(t, e, !1)) {
                    if (E(r)) throw r;
                    throw new AssertionError({
                        message: r,
                        actual: t,
                        expected: e,
                        operator: "deepStrictEqual",
                        stackStartFn: c
                    })
                }
            }

            function u(t, e, r) {
                if (w(t, e, !0)) {
                    if (E(r)) throw r;
                    throw new AssertionError({
                        message: r,
                        actual: t,
                        expected: e,
                        operator: "notDeepStrictEqual",
                        stackStartFn: u
                    })
                }
            }

            function f(t, e, r) {
                if (!t) {
                    let t;
                    t = null == e ? "Invalid type for parameter." : null == r ? `Invalid type for "${e}".` : `"${e}" must be a(n) ${r}.`;
                    const i = new TypeError(t);
                    throw Error.captureStackTrace && Error.captureStackTrace(i, f), i
                }
            }

            function l(t) {
                switch (typeof t) {
                    case "undefined":
                        return "undefined";
                    case "object":
                        return null === t ? "null" : `[${function(t){const e=function(t){return S(t).slice(8,-1)}(t);if(null==t)return e;if("Object"!==e&&"Error"!==e)return e;let r,i;try{r=t.constructor}catch(t){}if(null==r)return e;try{i=r.name}catch(t){return e}return"string"!=typeof i||0===i.length?e:i}(t)}]`;
                    case "boolean":
                    case "number":
                        return "" + t;
                    case "string":
                        return t.length > 80 && (t = t.substring(0, 77) + "..."), JSON.stringify(t);
                    case "symbol":
                        return d(t);
                    case "function":
                        return `[${function(t){let e;try{e=t.name}catch(t){}return"string"!=typeof e||0===e.length?"Function":"Function: "+e}(t)}]`;
                    case "bigint":
                        return t + "n";
                    default:
                        return `[${typeof t}]`
                }
            }

            function d(t) {
                try {
                    return String(t)
                } catch (t) {
                    return "Object"
                }
            }

            function p(t, e, r, i) {
                if (null == e) return !0;
                if (P(e)) return e.test(t);
                if ("function" != typeof e) {
                    if (i === o || i === h) throw new TypeError('"expected" must not be an object.');
                    if ("object" != typeof e) throw new TypeError('"expected" must be an object.');
                    let s = !1;
                    if (null == r) {
                        r = `Missing expected ${i===a?"rejection":"exception"}.`, s = !0
                    }
                    if (null == t || "object" != typeof t) throw new AssertionError({
                        actual: t,
                        expected: e,
                        message: r,
                        operator: i.name,
                        generatedMessage: s,
                        stackStartFn: i
                    });
                    const n = Object.keys(e);
                    if (E(e) && n.push("name", "message"), 0 === n.length) throw new TypeError('"expected" may not be an empty object.');
                    for (const o of n) {
                        const n = e[o],
                            a = t[o];
                        if (("string" != typeof a || !P(n) || !n.test(a)) && (!(o in t) || !w(a, n, !1))) throw new AssertionError({
                            actual: t,
                            expected: e,
                            message: r,
                            operator: i.name,
                            generatedMessage: s,
                            stackStartFn: i
                        })
                    }
                    return !0
                }
                return void 0 !== e.prototype && t instanceof e || !Error.isPrototypeOf(e) && !0 === e.call({}, t)
            }

            function w(t, e, r) {
                try {
                    return m(t, e, null)
                } catch (t) {
                    return r
                }
            }

            function m(t, e, r) {
                if (Object.is(t, e)) return !0;
                if (!A(t) || !A(e)) return !1;
                if (S(t) !== S(e)) return !1;
                if (Object.getPrototypeOf(t) !== Object.getPrototypeOf(e)) return !1;
                if (y(t) && y(e)) return t.equals(e);
                if (t instanceof Date) return Object.is(t.getTime(), e.getTime());
                if (P(t)) return t.source === e.source && t.global === e.global && t.multiline === e.multiline && t.lastIndex === e.lastIndex && t.ignoreCase === e.ignoreCase;
                if (E(t) && t.message !== e.message) return !1;
                if (function(t) {
                        return t instanceof ArrayBuffer
                    }(t) && (t = new Uint8Array(t), e = new Uint8Array(e)), function(t) {
                        return ArrayBuffer.isView(t)
                    }(t) && !y(t)) {
                    if (y(e)) return !1;
                    const r = new Uint8Array(t.buffer),
                        i = new Uint8Array(e.buffer);
                    if (r.length !== i.length) return !1;
                    for (let t = 0; t < r.length; t++)
                        if (r[t] !== i[t]) return !1;
                    return !0
                }
                if (function(t) {
                        return t instanceof Set
                    }(t)) {
                    if (t.size !== e.size) return !1;
                    return new Set([...t, ...e]).size === t.size
                }
                if (r) {
                    const i = r.a.get(t);
                    if (null != i) {
                        const t = r.b.get(e);
                        if (null != t) return i === t
                    }
                    r.p += 1
                } else r = {
                    a: new Map,
                    b: new Map,
                    p: 0
                };
                r.a.set(t, r.p), r.b.set(e, r.p);
                const i = function(t, e, r) {
                    if (function(t) {
                            return t instanceof Map
                        }(t)) {
                        if (t.size !== e.size) return !1;
                        const i = new Set([...t.keys(), ...e.keys()]);
                        if (i.size !== t.size) return !1;
                        for (const s of i)
                            if (!m(t.get(s), e.get(s), r)) return !1;
                        return !0
                    }
                    if (function(t) {
                            return Array.isArray(t)
                        }(t)) {
                        if (t.length !== e.length) return !1;
                        for (let i = 0; i < t.length; i++)
                            if (!m(t[i], e[i], r)) return !1;
                        return !0
                    }
                    const i = g(t),
                        s = g(e);
                    if (i.length !== s.length) return !1;
                    const n = new Set([...i, ...s]);
                    if (n.size !== i.length) return !1;
                    for (const i of n)
                        if (!m(t[i], e[i], r)) return !1;
                    return !0
                }(t, e, r);
                return r.a.delete(t), r.b.delete(e), i
            }

            function g(t) {
                const e = Object.keys(t);
                if (!Object.getOwnPropertySymbols) return e;
                if (!Object.getOwnPropertyDescriptor) return e;
                const r = Object.getOwnPropertySymbols(t);
                for (const i of r) {
                    const r = Object.getOwnPropertyDescriptor(t, i);
                    r && r.enumerable && e.push(i)
                }
                return e
            }

            function S(t) {
                if (void 0 === t) return "[object Undefined]";
                if (null === t) return "[object Null]";
                try {
                    return Object.prototype.toString.call(t)
                } catch (t) {
                    return "[object Object]"
                }
            }

            function y(t) {
                return A(t) && "function" == typeof t.writeUInt32LE && "function" == typeof t.equals
            }

            function E(t) {
                return t instanceof Error
            }

            function A(t) {
                return t && "object" == typeof t
            }

            function b(t) {
                return t instanceof Promise
            }

            function P(t) {
                return t instanceof RegExp
            }

            function B(t) {
                if ("string" != typeof t) return !1;
                switch (t) {
                    case "ascii":
                    case "binary":
                    case "base64":
                    case "hex":
                    case "latin1":
                    case "ucs2":
                    case "utf8":
                    case "utf16le":
                        return !0
                }
                return !1
            }

            function k(t, e, r) {
                if ("string" == typeof e) {
                    if (!y(t)) return null;
                    const {
                        constructor: i
                    } = t;
                    if (!i || "function" != typeof i.from) return null;
                    if (!B(r)) return null;
                    if ("hex" === r && 1 & e.length) return null;
                    const s = i.from(e, r);
                    return "hex" === r && s.length !== e.length >>> 1 ? null : s
                }
                return e
            }
            i.AssertionError = AssertionError, i.assert = i, i.strict = i, i.ok = i, i.equal = s, i.notEqual = n, i.strictEqual = s, i.notStrictEqual = n, i.fail = function t(e) {
                let r = !1;
                if (E(e)) throw e;
                throw null == e && (e = "Assertion failed.", r = !0), new AssertionError({
                    message: e,
                    actual: !1,
                    expected: !0,
                    operator: "fail",
                    generatedMessage: r,
                    stackStartFn: t
                })
            }, i.throws = function t(e, r, i) {
                "string" == typeof r && (i = r, r = void 0);
                let s = !1,
                    n = null;
                f("function" == typeof e, "func", "function");
                try {
                    e()
                } catch (t) {
                    s = !0, n = t
                }
                if (!s) {
                    let e = !1;
                    throw null == i && (i = "Missing expected exception.", e = !0), new AssertionError({
                        message: i,
                        actual: void 0,
                        expected: r,
                        operator: "throws",
                        generatedMessage: e,
                        stackStartFn: t
                    })
                }
                if (!p(n, r, i, t)) throw n
            }, i.doesNotThrow = o, i.rejects = a, i.doesNotReject = h, i.ifError = function t(e) {
                if (null != e) {
                    let r = "ifError got unwanted exception: ";
                    throw "object" == typeof e && "string" == typeof e.message ? 0 === e.message.length && e.constructor ? r += e.constructor.name : r += e.message : r += l(e), new AssertionError({
                        message: r,
                        actual: e,
                        expected: null,
                        operator: "ifError",
                        generatedMessage: !0,
                        stackStartFn: t
                    })
                }
            }, i.deepEqual = c, i.notDeepEqual = u, i.deepStrictEqual = c, i.notDeepStrictEqual = u, i.bufferEqual = function t(e, r, i, s) {
                if (B(i) || (s = i, i = null), null == i && (i = "hex"), r = k(e, r, i), f(y(e), "actual", "buffer"), f(y(r), "expected", "buffer"), e !== r && !e.equals(r)) {
                    if (E(s)) throw s;
                    throw new AssertionError({
                        message: s,
                        actual: e.toString(i),
                        expected: r.toString(i),
                        operator: "bufferEqual",
                        stackStartFn: t
                    })
                }
            }, i.notBufferEqual = function t(e, r, i, s) {
                if (B(i) || (s = i, i = null), null == i && (i = "hex"), r = k(e, r, i), f(y(e), "actual", "buffer"), f(y(r), "expected", "buffer"), e === r || e.equals(r)) {
                    if (E(s)) throw s;
                    throw new AssertionError({
                        message: s,
                        actual: e.toString(i),
                        expected: r.toString(i),
                        operator: "notBufferEqual",
                        stackStartFn: t
                    })
                }
            }, i.enforce = f, i.range = function t(e, r) {
                if (!e) {
                    const e = new RangeError(null != r ? `"${r}" is out of range.` : "Parameter is out of range.");
                    throw Error.captureStackTrace && Error.captureStackTrace(e, t), e
                }
            }, t.exports = i
        },
        5636: function(t, e, r) {
            "use strict";
            t.exports = r(9982)
        },
        5799: function(t, e, r) {
            "use strict";
            t.exports = r(6262)
        },
        6084: function(t, e, r) {
            "use strict";
            t.exports = r(7475)
        },
        6087: function(t, e, r) {
            "use strict";
            const i = r(5466),
                s = r(7477),
                n = r(7478),
                o = Buffer.alloc(16, 0);
            e.native = 0, e.seal = function(t, e, r) {
                i(Buffer.isBuffer(t)), i(Buffer.isBuffer(e)), i(Buffer.isBuffer(r)), i(32 === e.length), i(24 === r.length);
                const o = Buffer.alloc(16 + t.length, 0),
                    a = o.slice(16, 48),
                    h = o.slice(48),
                    c = new s,
                    u = new n,
                    f = Buffer.alloc(64, 0),
                    l = f.slice(0, 32),
                    d = f.slice(32);
                c.init(e, r), c.encrypt(f), t.copy(o, 16);
                for (let t = 0; t < a.length; t++) a[t] ^= d[t];
                return h.length > 0 && (c.init(e, r, 1), c.encrypt(h)), u.init(l), u.update(a), u.update(h), u.final().copy(o, 0), o
            }, e.open = function(t, e, r) {
                if (i(Buffer.isBuffer(t)), i(Buffer.isBuffer(e)), i(Buffer.isBuffer(r)), i(32 === e.length), i(24 === r.length), t.length < 16) throw new Error("Invalid secret box size.");
                const o = Buffer.from(t),
                    a = o.slice(0, 16),
                    h = o.slice(16, 48),
                    c = o.slice(48),
                    u = o.slice(16),
                    f = new s,
                    l = new n,
                    d = Buffer.alloc(64, 0),
                    p = d.slice(0, 32),
                    w = d.slice(32, 64);
                if (f.init(e, r), f.encrypt(d), l.init(p), l.update(h), l.update(c), !n.verify(l.final(), a)) throw new Error("Invalid secret box tag.");
                for (let t = 0; t < h.length; t++) h[t] ^= w[t];
                return c.length > 0 && (f.init(e, r, 1), f.encrypt(c)), u
            }, e.derive = function(t, e) {
                const r = function(t, e) {
                    if (i(Buffer.isBuffer(t)), null == e) {
                        if (32 !== t.length) throw new Error("Invalid secret size for secret box.");
                        return t
                    }
                    if ("function" == typeof e.digest) {
                        if (e.size < 32) throw new Error("Hash is too small for secret box.");
                        return e.digest(t).slice(0, 32)
                    }
                    i("function" == typeof e);
                    const r = e(t);
                    if (i(Buffer.isBuffer(r)), r.length < 32) throw new Error("Key is too small for secret box.");
                    return r.slice(0, 32)
                }(t, e);
                return s.derive(r, o)
            }
        },
        6090: function(t, e, r) {
            "use strict";
            t.exports = r(10066)
        },
        6665: function(t, e, r) {
            "use strict";
            const i = r(5867);
            class SHAKE extends i {
                constructor() {
                    super()
                }
                final(t) {
                    return super.final(31, t)
                }
                static hash() {
                    return new SHAKE
                }
                static hmac(t = 256, e) {
                    return super.hmac(t, 31, e)
                }
                static digest(t, e = 256, r) {
                    return super.digest(t, e, 31, r)
                }
                static root(t, e, r = 256, i) {
                    return super.root(t, e, r, 31, i)
                }
                static multi(t, e, r, i = 256, s) {
                    return super.multi(t, e, r, i, 31, s)
                }
                static mac(t, e, r = 256, i) {
                    return super.mac(t, e, r, 31, i)
                }
            }
            SHAKE.native = i.native, SHAKE.id = "SHAKE256", SHAKE.size = 32, SHAKE.bits = 256, SHAKE.blockSize = 136, SHAKE.zero = Buffer.alloc(32, 0), SHAKE.ctx = new SHAKE, t.exports = SHAKE
        },
        6669: function(t, e, r) {
            "use strict";
            t.exports = r(10039)
        },
        6670: function(t, e, r) {
            "use strict";
            t.exports = r(10051)
        },
        6671: function(t, e, r) {
            "use strict";
            t.exports = r(10057)
        },
        7477: function(t, e, r) {
            "use strict";
            t.exports = r(9981)
        },
        7478: function(t, e, r) {
            "use strict";
            t.exports = r(7471)
        },
        7479: function(t, e, r) {
            "use strict";
            const i = r(7480),
                s = r(6659);
            t.exports = new i("X25519", 253, 32, "2b656e", s)
        },
        7495: function(t, e, r) {
            "use strict";
            const i = r(6665);
            class SHAKE256 extends i {
                constructor() {
                    super()
                }
                init() {
                    return super.init(256)
                }
                static hash() {
                    return new SHAKE256
                }
                static hmac(t) {
                    return super.hmac(256, t)
                }
                static digest(t, e) {
                    return super.digest(t, 256, e)
                }
                static root(t, e, r) {
                    return super.root(t, e, 256, r)
                }
                static multi(t, e, r, i) {
                    return super.multi(t, e, r, 256, i)
                }
                static mac(t, e, r) {
                    return super.mac(t, e, 256, r)
                }
            }
            SHAKE256.native = i.native, SHAKE256.id = "SHAKE256", SHAKE256.size = 32, SHAKE256.bits = 256, SHAKE256.blockSize = 136, SHAKE256.zero = Buffer.alloc(32, 0), SHAKE256.ctx = new SHAKE256, t.exports = SHAKE256
        },
        7498: function(t, e, r) {
            "use strict";
            t.exports = r(10049)
        },
        7499: function(t, e, r) {
            "use strict";
            t.exports = r(10050)
        },
        7500: function(t, e, r) {
            "use strict";
            t.exports = r(10052)
        },
        7501: function(t, e, r) {
            "use strict";
            t.exports = r(10053)
        },
        7502: function(t, e, r) {
            "use strict";
            t.exports = r(7497)
        },
        7503: function(t, e, r) {
            "use strict";
            t.exports = r(10055)
        },
        7504: function(t, e, r) {
            "use strict";
            const i = r(5466);

            function s(t, e) {
                return (t ^ e) - 1 >>> 31
            }

            function n(t, e, r) {
                return ~(t - 1) & e | t - 1 & r
            }

            function o(t, e) {
                return t - e >>> 31
            }

            function a(t, e) {
                return e - t >>> 31
            }
            e.safeCompare = function(t, e) {
                if (i(Buffer.isBuffer(t)), i(Buffer.isBuffer(e)), s(t.length, 0)) return s(e.length, 0);
                let r = t.length ^ e.length;
                for (let i = 0; i < e.length; i++) r |= t[i % t.length] ^ e[i];
                return r - 1 >>> 31
            }, e.safeEqual = function(t, e) {
                if (i(Buffer.isBuffer(t)), i(Buffer.isBuffer(e)), !s(t.length, e.length)) return 0;
                let r = 0;
                for (let i = 0; i < t.length; i++) r |= t[i] ^ e[i];
                return r - 1 >>> 31
            }, e.safeEqualByte = function(t, e) {
                return s(255 & t, 255 & e)
            }, e.safeEqualInt = s, e.safeSelect = n, e.safeLT = o, e.safeLTE = function(t, e) {
                return t - e - 1 >>> 31
            }, e.safeGT = a, e.safeGTE = function(t, e) {
                return e - t - 1 >>> 31
            }, e.safeMin = function(t, e) {
                return n(o(t, e), t, e)
            }, e.safeMax = function(t, e) {
                return n(a(t, e), t, e)
            }, e.safeAbs = function(t) {
                return (0 | t) * (t >> 31 | 1)
            }, e.safeBool = function(t) {
                return 1 & (t >> 31 | -t >> 31)
            }, e.safeCopy = function(t, e, r) {
                i(Buffer.isBuffer(e)), i(Buffer.isBuffer(r)), i(s(e.length, r.length));
                const n = t - 1 & 255,
                    o = 255 & ~(t - 1);
                for (let t = 0; t < e.length; t++) e[t] = e[t] & n | r[t] & o
            }
        },
        7507: function(t, e, r) {
            "use strict";
            e.base58 = r(10101), e.bech32 = r(10102), e.cashaddr = r(10103)
        },
        9985: function(t, e, r) {
            "use strict";
            const {
                custom: i
            } = r(5952), s = r(9986)("bcrypto", __dirname).BN;
            if (!s) throw new Error("GMP backend not supported.");
            const n = {
                p192: null,
                p224: null,
                p521: null,
                k256: null,
                p25519: null,
                p448: null
            };
            class BN extends s {
                constructor(t, e, r) {
                    super(), this.red = null, this.from(t, e, r)
                }
                get negative() {
                    return this.isNeg() ? 1 : 0
                }
                set negative(t) {
                    (1 & t) !== this.negative && this.ineg()
                }
                get length() {
                    return Math.floor((this.bitLength() + 25) / 26)
                }
                add(t) {
                    return this.clone().iadd(t)
                }
                addn(t) {
                    return this.clone().iaddn(t)
                }
                sub(t) {
                    return this.clone().isub(t)
                }
                subn(t) {
                    return this.clone().isubn(t)
                }
                mul(t) {
                    return this.clone().imul(t)
                }
                muln(t) {
                    return this.clone().imuln(t)
                }
                quorem(t) {
                    const e = new BN,
                        r = new BN;
                    return super.quorem(e, r, t), [e, r]
                }
                quo(t) {
                    return this.clone().iquo(t)
                }
                quon(t) {
                    return this.clone().iquon(t)
                }
                rem(t) {
                    return this.clone().irem(t)
                }
                remn(t) {
                    return this.clone().iremn(t)
                }
                divmod(t) {
                    const e = new BN,
                        r = new BN;
                    return super.divmod(e, r, t), [e, r]
                }
                div(t) {
                    return this.clone().idiv(t)
                }
                divn(t) {
                    return this.clone().idivn(t)
                }
                mod(t) {
                    return this.clone().imod(t)
                }
                modn(t) {
                    return this.clone().imodn(t)
                }
                divRound(t) {
                    return this.clone().idivRound(t)
                }
                pow(t) {
                    return this.clone().ipow(t)
                }
                pown(t) {
                    return this.clone().ipown(t)
                }
                sqr() {
                    return this.clone().isqr()
                }
                rootrem(t) {
                    const e = new BN,
                        r = new BN;
                    return super.rootrem(e, r, t), [e, r]
                }
                root(t) {
                    return this.clone().iroot(t)
                }
                sqrtrem() {
                    const t = new BN,
                        e = new BN;
                    return super.sqrtrem(t, e), [t, e]
                }
                sqrt() {
                    return this.clone().isqrt()
                }
                and(t) {
                    return this.clone().iand(t)
                }
                andn(t) {
                    return this.clone().iandn(t)
                }
                uand(t) {
                    return this.clone().iuand(t)
                }
                uandn(t) {
                    return this.clone().iuandn(t)
                }
                or(t) {
                    return this.clone().ior(t)
                }
                orn(t) {
                    return this.clone().iorn(t)
                }
                uor(t) {
                    return this.clone().iuor(t)
                }
                uorn(t) {
                    return this.clone().iuorn(t)
                }
                xor(t) {
                    return this.clone().ixor(t)
                }
                xorn(t) {
                    return this.clone().ixorn(t)
                }
                uxor(t) {
                    return this.clone().ixor(t)
                }
                uxorn(t) {
                    return this.clone().iuxorn(t)
                }
                not() {
                    return this.clone().inot()
                }
                notn(t) {
                    return this.clone().inotn(t)
                }
                ishl(t) {
                    return a(BN.isBN(t), "bits", "bignum"), a(t.bitLength() <= 32, "bits", "uint32"), this.ishln(t.toNumber())
                }
                shl(t) {
                    return this.clone().ishl(t)
                }
                shln(t) {
                    return this.clone().ishln(t)
                }
                iushl(t) {
                    return a(BN.isBN(t), "bits", "bignum"), a(t.bitLength() <= 32, "bits", "uint32"), this.iushln(t.toNumber())
                }
                ushl(t) {
                    return this.clone().iushl(t)
                }
                ushln(t) {
                    return this.clone().iushln(t)
                }
                ishr(t) {
                    return a(BN.isBN(t), "bits", "bignum"), a(t.bitLength() <= 32, "bits", "uint32"), this.ishrn(t.toNumber())
                }
                shr(t) {
                    return this.clone().ishr(t)
                }
                shrn(t) {
                    return this.clone().ishrn(t)
                }
                iushr(t) {
                    return a(BN.isBN(t), "bits", "bignum"), a(t.bitLength() <= 32, "bits", "uint32"), this.iushrn(t.toNumber())
                }
                ushr(t) {
                    return this.clone().iushr(t)
                }
                ushrn(t) {
                    return this.clone().iushrn(t)
                }
                maskn(t) {
                    return this.clone().imaskn(t)
                }
                umaskn(t) {
                    return this.clone().iumaskn(t)
                }
                andln(t) {
                    return super.andln(67108863 & t)
                }
                neg() {
                    return this.clone().ineg()
                }
                abs() {
                    return this.clone().iabs()
                }
                gt(t) {
                    return this.cmp(t) > 0
                }
                gtn(t) {
                    return this.cmpn(t) > 0
                }
                gte(t) {
                    return this.cmp(t) >= 0
                }
                gten(t) {
                    return this.cmpn(t) >= 0
                }
                lt(t) {
                    return this.cmp(t) < 0
                }
                ltn(t) {
                    return this.cmpn(t) < 0
                }
                lte(t) {
                    return this.cmp(t) <= 0
                }
                lten(t) {
                    return this.cmpn(t) <= 0
                }
                gcd(t) {
                    return this.clone().igcd(t)
                }
                lcm(t) {
                    return this.clone().ilcm(t)
                }
                egcd(t) {
                    const e = new BN,
                        r = new BN,
                        i = new BN;
                    return super.egcd(e, r, i, t), [e, r, i]
                }
                invert(t) {
                    return this.clone().iinvert(t)
                }
                fermat(t) {
                    return this.clone().ifermat(t)
                }
                ipowm(t, e, r, i) {
                    return null != i && (i >>>= 0), super.ipowm(t, e, r, i)
                }
                powm(t, e, r, i) {
                    return this.clone().ipowm(t, e, r, i)
                }
                powmn(t, e, r) {
                    return this.clone().ipowmn(t, e, r)
                }
                sqrtm(t) {
                    return this.clone().isqrtm(t)
                }
                sqrtpq(t, e) {
                    return this.clone().isqrtpq(t, e)
                }
                isPrime(t, e, r) {
                    return a(e >>> 0 === e, "reps", "uint32"), !!this.isPrimeMR(t, e + 1, !0) && !!this.isPrimeLucas(r)
                }
                isPrimeMR(t, e, r) {
                    return null == r && (r = !1), super.isPrimeMR(t, e, r)
                }
                isPrimeLucas(t) {
                    return null == t && (t = 0), super.isPrimeLucas(t)
                }
                toRed(t) {
                    if (a(t instanceof Red, "ctx", "reduction context"), this.red) throw new Error("Already in reduction context.");
                    return t.convertTo(this)._forceRed(t)
                }
                fromRed() {
                    return c(this.red, "fromRed"), this.red.convertFrom(this)
                }
                forceRed(t) {
                    if (this.red) throw new Error("Already in reduction context.");
                    return this._forceRed(t)
                }
                redIAdd(t) {
                    return a(BN.isBN(t), "num", "bignum"), c(this.red, "redIAdd"), this.red.iadd(this, t)
                }
                redAdd(t) {
                    return a(BN.isBN(t), "num", "bignum"), c(this.red, "redAdd"), this.red.add(this, t)
                }
                redIAddn(t) {
                    return a(f(t), "num", "smi"), c(this.red, "redIAddn"), this.red.iaddn(this, t)
                }
                redAddn(t) {
                    return a(f(t), "num", "smi"), c(this.red, "redAddn"), this.red.addn(this, t)
                }
                redISub(t) {
                    return a(BN.isBN(t), "num", "bignum"), c(this.red, "redISub"), this.red.isub(this, t)
                }
                redSub(t) {
                    return a(BN.isBN(t), "num", "bignum"), c(this.red, "redSub"), this.red.sub(this, t)
                }
                redISubn(t) {
                    return a(f(t), "num", "smi"), c(this.red, "redISubn"), this.red.isubn(this, t)
                }
                redSubn(t) {
                    return a(f(t), "num", "smi"), c(this.red, "redSubn"), this.red.subn(this, t)
                }
                redIMul(t) {
                    return a(BN.isBN(t), "num", "bignum"), c(this.red, "redIMul"), this.red.imul(this, t)
                }
                redMul(t) {
                    return a(BN.isBN(t), "num", "bignum"), c(this.red, "redMul"), this.red.mul(this, t)
                }
                redIMuln(t) {
                    return a(f(t), "num", "smi"), c(this.red, "redIMuln"), this.red.imuln(this, t)
                }
                redMuln(t) {
                    return a(f(t), "num", "smi"), c(this.red, "redMuln"), this.red.muln(this, t)
                }
                redISqr() {
                    return c(this.red, "redISqr"), this.red.isqr(this)
                }
                redSqr() {
                    return c(this.red, "redSqr"), this.red.sqr(this)
                }
                redIShl(t) {
                    return a(BN.isBN(t), "num", "bignum"), c(this.red, "redIShl"), u(!t.red, "redIShl"), this.red.ishl(this, t)
                }
                redShl(t) {
                    return a(BN.isBN(t), "num", "bignum"), c(this.red, "redShl"), u(!t.red, "redShl"), this.red.shl(this, t)
                }
                redIShln(t) {
                    return a(t >>> 0 === t, "num", "uint32"), c(this.red, "redIShln"), this.red.ishln(this, t)
                }
                redShln(t) {
                    return a(t >>> 0 === t, "num", "uint32"), c(this.red, "redShln"), this.red.shln(this, t)
                }
                redINeg() {
                    return c(this.red, "redINeg"), this.red.ineg(this)
                }
                redNeg() {
                    return c(this.red, "redNeg"), this.red.neg(this)
                }
                redCmp(t) {
                    return a(BN.isBN(t), "num", "bignum"), c(this.red, "redCmp"), this.red.cmp(this, t)
                }
                redCmpn(t) {
                    return a(f(t), "num", "smi"), c(this.red, "redCmpn"), this.red.cmpn(this, t)
                }
                redIsOdd() {
                    return c(this.red, "redIsOdd"), this.red.isOdd(this)
                }
                redIsEven() {
                    return c(this.red, "redIsEven"), this.red.isEven(this)
                }
                redISqrt() {
                    return c(this.red, "redISqrt"), this.red.isqrt(this)
                }
                redSqrt() {
                    return c(this.red, "redSqrt"), this.red.sqrt(this)
                }
                redIInvert() {
                    return c(this.red, "redIInvert"), this.red.iinvert(this)
                }
                redInvert() {
                    return c(this.red, "redInvert"), this.red.invert(this)
                }
                redIFermat() {
                    return c(this.red, "redIFermat"), this.red.ifermat(this)
                }
                redFermat() {
                    return c(this.red, "redFermat"), this.red.fermat(this)
                }
                redLegendre() {
                    return c(this.red, "redLegendre"), this.red.legendre(this)
                }
                redJacobi() {
                    return c(this.red, "redJacobi"), this.red.jacobi(this)
                }
                redKronecker() {
                    return c(this.red, "redKronecker"), this.red.kronecker(this)
                }
                redIPow(t, e) {
                    return a(BN.isBN(t), "num", "bignum"), c(this.red, "redIPow"), u(!t.red, "redIPow"), this.red.ipow(this, t, e)
                }
                redPow(t, e) {
                    return a(BN.isBN(t), "num", "bignum"), c(this.red, "redPow"), u(!t.red, "redPow"), this.red.pow(this, t, e)
                }
                redIPown(t) {
                    return c(this.red, "redIPown"), this.red.ipown(this, t)
                }
                redPown(t) {
                    return c(this.red, "redPown"), this.red.pown(this, t)
                }
                _forceRed(t) {
                    return this.red = t, this
                }
                clone() {
                    return (new BN).inject(this)
                }
                inject(t) {
                    return super.inject(t), this.red = t.red, this
                }
                set(t, e) {
                    return this.fromNumber(t, e)
                }
                swap(t) {
                    return super.swap(t), [this.red, t.red] = [t.red, this.red], this
                }
                reverse() {
                    const t = this.negative;
                    return this.fromBuffer(this.toBuffer("le"), "be"), this.negative = t, this
                }
                word(t) {
                    return a(t >>> 0 === t, "pos", "uint32"), 0 === t ? this.andln(-1) : this.ushrn(26 * t).andln(-1)
                } [i]() {
                    let t = "BN";
                    return this.red && (t = "BN-R"), `<${t}: ${this.toString(10)}>`
                }
                csign() {
                    return this.sign()
                }
                czero() {
                    const t = this.sign();
                    return 1 - (1 & (t >> 31 | -t >> 31))
                }
                cneg() {
                    return 0 | this.isNeg()
                }
                cpos() {
                    return 0 | this.isPos()
                }
                ceq(t) {
                    return this.xor(t).czero()
                }
                ceqn(t) {
                    const e = t >> 31 | 1,
                        r = ((0 | t) * e & 67108863) * e;
                    return this.xorn(r).czero()
                }
                cswap(t, e) {
                    a(BN.isBN(t), "num", "bignum");
                    const r = 1 & (e >> 31 | -e >> 31),
                        i = this.muln(1 ^ r).iadd(t.muln(r)),
                        s = t.muln(1 ^ r).iadd(this.muln(r));
                    return this.inject(i), t.inject(s), this
                }
                cinject(t, e) {
                    a(BN.isBN(t), "num", "bignum");
                    const r = 1 & (e >> 31 | -e >> 31),
                        i = t.muln(r);
                    return this.imuln(1 ^ r).iadd(i), this
                }
                cset(t, e) {
                    const r = 1 & (e >> 31 | -e >> 31),
                        i = t >> 31 | 1,
                        s = ((0 | t) * i & 67108863) * i;
                    return this.imuln(1 ^ r).iaddn(s * r), this
                }
                valueOf() {
                    return this.toDouble()
                }
                toBigInt() {
                    const t = super.toString(16);
                    let e = BigInt("0x" + t);
                    return this.isNeg() && (e = -e), e
                }
                toString(t, e) {
                    let r = super.toString(l(t));
                    for (null == e && (e = 0), 0 === e && (e = 1), a(e >>> 0 === e, "padding", "uint32"); r.length % e;) r = "0" + r;
                    return this.isNeg() && (r = "-" + r), r
                }
                toJSON() {
                    return this.toString(16, 2)
                }
                toArray(t, e) {
                    const r = this.toBuffer(t, e);
                    return Array.from ? Array.from(r) : Array.prototype.slice.call(r)
                }
                toBuffer(t, e) {
                    return null == t && (t = "be"), null == e && (e = 0), super.toBuffer(t, e)
                }
                toArrayLike(t, e, r) {
                    if (t === Buffer) return this.toBuffer(e, r);
                    if (t === Array) return this.toArray(e, r);
                    if (t === Int8Array || t === Uint8Array || t === Uint8ClampedArray) {
                        const i = this.toBuffer(e, r);
                        return new t(i.buffer, i.byteOffset, i.byteLength)
                    }
                    a("function" == typeof t, "ArrayType", "function");
                    const i = this.toBuffer(e, r),
                        s = function(t, e) {
                            return t.allocUnsafe ? t.allocUnsafe(e) : new t(e)
                        }(t, i.length);
                    for (let t = 0; t < i.length; t++) s[t] = i[t];
                    return s
                }
                encode(t, e) {
                    return this.toBuffer(t, e)
                }
                of(t, e) {
                    return this.fromNumber(t, e)
                }
                fromNumber(t, e) {
                    return null == e && (e = "be"), a("be" === e || "le" === e, "endian", "endianness"), super.fromNumber(t), "le" === e && this.reverse(), this
                }
                fromDouble(t, e) {
                    return null == e && (e = "be"), a("number" == typeof t, "num", "double"), a("be" === e || "le" === e, "endian", "endianness"), isFinite(t) || (t = 0), super.fromDouble(t), "le" === e && this.reverse(), this
                }
                fromBigInt(t, e) {
                    return a("bigint" == typeof t, "num", "bigint"), this.fromString(t.toString(16), 16, e)
                }
                fromString(t, e, r) {
                    return "le" !== e && "be" !== e || ([e, r] = [r, e]), null == r && (r = "be"), super.fromString(t, l(e)), "le" === r && this.reverse(), this
                }
                fromJSON(t) {
                    return this.fromString(t, 16)
                }
                fromBN(t) {
                    return this.inject(t)
                }
                fromArray(t, e) {
                    return a(Array.isArray(t), "data", "array"), this.fromBuffer(Buffer.from(t), e)
                }
                fromBuffer(t, e) {
                    return null == e && (e = "be"), super.fromBuffer(t, e)
                }
                fromArrayLike(t, e) {
                    if (Buffer.isBuffer(t)) return this.fromBuffer(t, e);
                    if (Array.isArray(t)) return this.fromArray(t, e);
                    if (t instanceof Int8Array || t instanceof Uint8Array || t instanceof Uint8ClampedArray) {
                        const r = Buffer.from(t.buffer, t.byteOffset, t.byteLength);
                        return this.fromBuffer(r, e)
                    }
                    return this.fromBuffer(Buffer.from(t), e)
                }
                decode(t, e) {
                    return this.fromBuffer(t, e)
                }
                from(t, e, r) {
                    if (null == t) return this;
                    if ("le" !== e && "be" !== e || ([e, r] = [r, e]), "number" == typeof t) return this.fromNumber(t, r);
                    if ("bigint" == typeof t) return this.fromBigInt(t, r);
                    if ("string" == typeof t) return this.fromString(t, e, r);
                    if ("object" == typeof t) {
                        if (BN.isBN(t)) return this.fromBN(t, r);
                        if (Buffer.isBuffer(t)) return this.fromBuffer(t, r);
                        if ("number" == typeof t.length) return this.fromArrayLike(t, r)
                    }
                    if ("boolean" == typeof t) return this.fromBool(t);
                    throw new TypeError("Non-numeric object passed to BN.")
                }
                static min(t, e) {
                    return a(BN.isBN(t), "a", "bignum"), t.cmp(e) < 0 ? t : e
                }
                static max(t, e) {
                    return a(BN.isBN(t), "a", "bignum"), t.cmp(e) > 0 ? t : e
                }
                static cmp(t, e) {
                    return a(BN.isBN(t), "a", "bignum"), t.cmp(e)
                }
                static ucmp(t, e) {
                    return a(BN.isBN(t), "a", "bignum"), t.ucmp(e)
                }
                static red(t) {
                    return new Red(t)
                }
                static mont(t) {
                    return new Red(t)
                }
                static _prime(t) {
                    if (n[t]) return n[t];
                    let e;
                    if ("p192" === t) e = new P192;
                    else if ("p224" === t) e = new P224;
                    else if ("p521" === t) e = new P521;
                    else if ("k256" === t) e = new K256;
                    else if ("p25519" === t) e = new P25519;
                    else {
                        if ("p448" !== t) throw new Error("Unknown prime " + t);
                        e = new P448
                    }
                    return n[t] = e, e
                }
                static pow(t, e) {
                    return 2 === t ? BN.shift(1, e) : (new BN).fromNumber(t).ipown(e)
                }
                static shift(t, e) {
                    return (new BN).fromNumber(t).ishln(e)
                }
                static mask(t) {
                    return BN.shift(1, t).isubn(1)
                }
                static randomBits(t, e) {
                    return super.randomBits(t, new BN, e)
                }
                static random(t, e, r) {
                    const i = new BN,
                        s = BN.cast(e, 16),
                        n = BN.cast(r, 16);
                    return super.random(t, i, s, n)
                }
                static of (t, e) {
                    return (new BN).of(t, e)
                }
                static fromNumber(t, e) {
                    return (new BN).fromNumber(t, e)
                }
                static fromDouble(t, e) {
                    return (new BN).fromDouble(t, e)
                }
                static fromBigInt(t, e) {
                    return (new BN).fromBigInt(t, e)
                }
                static fromBool(t) {
                    return (new BN).fromBool(t)
                }
                static fromString(t, e, r) {
                    return (new BN).fromString(t, e, r)
                }
                static fromJSON(t) {
                    return (new BN).fromJSON(t)
                }
                static fromBN(t) {
                    return (new BN).fromBN(t)
                }
                static fromArray(t, e) {
                    return (new BN).fromArray(t, e)
                }
                static fromBuffer(t, e) {
                    return (new BN).fromBuffer(t, e)
                }
                static fromArrayLike(t, e) {
                    return (new BN).fromArrayLike(t, e)
                }
                static decode(t, e) {
                    return (new BN).decode(t, e)
                }
                static from(t, e, r) {
                    return (new BN).from(t, e, r)
                }
                static cast(t, e, r) {
                    return BN.isBN(t) ? t : new BN(t, e, r)
                }
                static isBN(t) {
                    return t instanceof BN
                }
            }
            BN.BN = BN, BN.wordSize = 26, BN.native = 2;
            class Prime {
                constructor(t, e) {
                    this.name = t, this.p = new BN(e, 16)
                }
            }
            class P192 extends Prime {
                constructor() {
                    super("p192", "ffffffff ffffffff ffffffff fffffffeffffffff ffffffff")
                }
            }
            class P224 extends Prime {
                constructor() {
                    super("p224", "ffffffff ffffffff ffffffff ffffffff00000000 00000000 00000001")
                }
            }
            class P521 extends Prime {
                constructor() {
                    super("p521", "000001ff ffffffff ffffffff ffffffffffffffff ffffffff ffffffff ffffffffffffffff ffffffff ffffffff ffffffffffffffff ffffffff ffffffff ffffffffffffffff")
                }
            }
            class K256 extends Prime {
                constructor() {
                    super("k256", "ffffffff ffffffff ffffffff ffffffffffffffff ffffffff fffffffe fffffc2f")
                }
            }
            class P25519 extends Prime {
                constructor() {
                    super("p25519", "7fffffff ffffffff ffffffff ffffffffffffffff ffffffff ffffffff ffffffed")
                }
            }
            class P448 extends Prime {
                constructor() {
                    super("p448", "ffffffff ffffffff ffffffff ffffffffffffffff ffffffff fffffffe ffffffffffffffff ffffffff ffffffff ffffffffffffffff ffffffff")
                }
            }
            class Red {
                constructor(t) {
                    let e = null;
                    "string" == typeof t && (e = BN._prime(t), t = e.p), a(BN.isBN(t), "m", "bignum"), u(!t.red, "reduction"), h(t.sign() > 0, "reduction"), this.m = t, this.prime = e, this.smi = t.bitLength() <= 26 ? t.andln(-1) : 0
                }
                _verify1(t) {
                    h(0 === t.negative, "red"), c(null != t.red, "red")
                }
                _verify2(t, e) {
                    h(0 == (t.negative | e.negative), "red"), c(null != t.red && t.red === e.red, "red")
                }
                convertTo(t) {
                    const e = t.mod(this.m);
                    return e.red = this, e
                }
                convertFrom(t) {
                    const e = t.clone();
                    return e.red = null, e
                }
                iadd(t, e) {
                    return this._verify2(t, e), t.iadd(e), t.cmp(this.m) >= 0 && t.isub(this.m), t
                }
                add(t, e) {
                    return this.iadd(t.clone(), e)
                }
                iaddn(t, e) {
                    return this._verify1(t), e < 0 ? this.isubn(t, -e) : (this.smi && (e %= this.smi), t.iaddn(e), t.cmp(this.m) >= 0 && t.isub(this.m), t)
                }
                addn(t, e) {
                    return this.iaddn(t.clone(), e)
                }
                isub(t, e) {
                    return this._verify2(t, e), t.isub(e), t.isNeg() && t.iadd(this.m), t
                }
                sub(t, e) {
                    return this.isub(t.clone(), e)
                }
                isubn(t, e) {
                    return this._verify1(t), e < 0 ? this.iaddn(t, -e) : (this.smi && (e %= this.smi), t.isubn(e), t.isNeg() && t.iadd(this.m), t)
                }
                subn(t, e) {
                    return this.isubn(t.clone(), e)
                }
                imul(t, e) {
                    return this._verify2(t, e), t.imul(e).imod(this.m)
                }
                mul(t, e) {
                    return this._verify2(t, e), this.imul(t.clone(), e)
                }
                imuln(t, e) {
                    return this._verify1(t), t.imuln(e).imod(this.m)
                }
                muln(t, e) {
                    return this.imuln(t.clone(), e)
                }
                isqr(t) {
                    return this._verify1(t), t.isqr().imod(this.m)
                }
                sqr(t) {
                    return this.isqr(t.clone())
                }
                ishl(t, e) {
                    return this._verify1(t), t.iushl(e).imod(this.m)
                }
                shl(t, e) {
                    return this.ishl(t.clone(), e)
                }
                ishln(t, e) {
                    return this._verify1(t), t.iushln(e).imod(this.m)
                }
                shln(t, e) {
                    return this.ishln(t.clone(), e)
                }
                ineg(t) {
                    return this._verify1(t), t.isZero() || (t.isub(this.m), t.ineg()), t
                }
                neg(t) {
                    return this.ineg(t.clone())
                }
                cmp(t, e) {
                    return this._verify2(t, e), t.ucmp(e)
                }
                cmpn(t, e) {
                    if (this._verify1(t), this.smi) return (e %= this.smi) < 0 && (e += this.smi), t.ucmpn(e);
                    if (e < 0) {
                        this.m.iaddn(e);
                        const r = t.ucmp(this.m);
                        return this.m.isubn(e), r
                    }
                    return t.ucmpn(e)
                }
                isOdd(t) {
                    return this._verify1(t), t.isOdd()
                }
                isEven(t) {
                    return this._verify1(t), t.isEven()
                }
                isqrt(t) {
                    return this._verify1(t), t.isqrtm(this.m)
                }
                sqrt(t) {
                    return this.isqrt(t.clone())
                }
                iinvert(t) {
                    return this._verify1(t), t.iinvert(this.m)
                }
                invert(t) {
                    return this.iinvert(t.clone())
                }
                ifermat(t) {
                    return this._verify1(t), t.ifermat(this.m)
                }
                fermat(t) {
                    return this.ifermat(t.clone())
                }
                legendre(t) {
                    return this._verify1(t), t.legendre(this.m)
                }
                jacobi(t) {
                    return this._verify1(t), t.jacobi(this.m)
                }
                kronecker(t) {
                    return this._verify1(t), t.kronecker(this.m)
                }
                ipow(t, e, r) {
                    return this._verify1(t), t.ipowm(e, this.m, !1, r)
                }
                pow(t, e, r) {
                    return this.ipow(t.clone(), e, r)
                }
                ipown(t, e) {
                    return this._verify1(t), t.ipowmn(e, this.m, !1)
                }
                pown(t, e) {
                    return this.ipown(t.clone(), e)
                } [i]() {
                    return this.prime ? `<Red: ${this.prime.name}>` : `<Red: ${this.m.toString(10)}>`
                }
            }

            function o(t, e, r) {
                const i = new t(e);
                return t.captureStackTrace && t.captureStackTrace(i, r), i
            }

            function a(t, e, r) {
                if (!t) {
                    throw o(TypeError, `"${e}" must be a(n) ${r}.`, a)
                }
            }

            function h(t, e) {
                if (!t) {
                    throw o(RangeError, `"${e}" only works with positive numbers.`, h)
                }
            }

            function c(t, e) {
                if (!t) {
                    throw o(TypeError, `"${e}" only works with red numbers.`, c)
                }
            }

            function u(t, e) {
                if (!t) {
                    throw o(TypeError, `"${e}" only works with normal numbers.`, u)
                }
            }

            function f(t) {
                return function(t) {
                    return Number.isSafeInteger(t)
                }(t) && t >= -67108863 && t <= 67108863
            }

            function l(t) {
                if (null == t) return 10;
                if ("number" == typeof t) return t;
                switch (t) {
                    case "bin":
                        return 2;
                    case "oct":
                        return 8;
                    case "dec":
                        return 10;
                    case "hex":
                        return 16
                }
                return 0
            }
            t.exports = BN
        }
    }
]);