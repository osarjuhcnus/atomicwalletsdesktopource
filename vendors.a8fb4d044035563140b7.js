/*! For license information please see vendors.a8fb4d044035563140b7.js.LICENSE.txt */
(window.webpackJsonp = window.webpackJsonp || []).push([
    [243], {
        1e4: function(t, e, r) {
            "use strict";
            const i = r(6261);
            class CSHAKE128 extends i {
                constructor() {
                    super()
                }
                init(t, e) {
                    return super.init(128, t, e)
                }
                static hash() {
                    return new CSHAKE128
                }
                static hmac(t, e, r) {
                    return super.hmac(128, t, e, r)
                }
                static digest(t, e, r, i) {
                    return super.digest(t, 128, e, r, i)
                }
                static root(t, e, r, i, n) {
                    return super.root(t, e, 128, r, i, n)
                }
                static multi(t, e, r, i, n, s) {
                    return super.multi(t, e, r, 128, i, n, s)
                }
                static mac(t, e, r, i, n) {
                    return super.mac(t, e, 128, r, i, n)
                }
            }
            CSHAKE128.native = i.native, CSHAKE128.id = "CSHAKE128", CSHAKE128.size = 16, CSHAKE128.bits = 128, CSHAKE128.blockSize = 168, CSHAKE128.zero = Buffer.alloc(16, 0), CSHAKE128.ctx = new CSHAKE128, t.exports = CSHAKE128
        },
        10001: function(t, e, r) {
            "use strict";
            const i = r(6261);
            class CSHAKE256 extends i {
                constructor() {
                    super()
                }
                init(t, e) {
                    return super.init(256, t, e)
                }
                static hash() {
                    return new CSHAKE256
                }
                static hmac(t, e, r) {
                    return super.hmac(256, t, e, r)
                }
                static digest(t, e, r, i) {
                    return super.digest(t, 256, e, r, i)
                }
                static root(t, e, r, i, n) {
                    return super.root(t, e, 256, r, i, n)
                }
                static multi(t, e, r, i, n, s) {
                    return super.multi(t, e, r, 256, i, n, s)
                }
                static mac(t, e, r, i, n) {
                    return super.mac(t, e, 256, r, i, n)
                }
            }
            CSHAKE256.native = i.native, CSHAKE256.id = "CSHAKE256", CSHAKE256.size = 32, CSHAKE256.bits = 256, CSHAKE256.blockSize = 136, CSHAKE256.zero = Buffer.alloc(32, 0), CSHAKE256.ctx = new CSHAKE256, t.exports = CSHAKE256
        },
        10002: function(t, e, r) {
            "use strict";
            const i = r(5466),
                n = r(6089),
                {
                    Cipher: s
                } = n;
            class CtrDRBG {
                constructor(t, e, r, n, s = !0) {
                    i(null == s || "boolean" == typeof s);
                    const [o, u, a] = function(t) {
                        switch (i("string" == typeof t), t) {
                            case "AES-128":
                                return ["AES-128-ECB", 16, 16];
                            case "AES-192":
                                return ["AES-192-ECB", 24, 16];
                            case "AES-256":
                                return ["AES-256-ECB", 32, 16];
                            default:
                                throw new Error(`Unsupported cipher: ${t}.`)
                        }
                    }(t);
                    this.id = o, this.ctr = new CTR(o), this.keySize = u, this.blkSize = a, this.entSize = u + a, this.slab = Buffer.alloc(this.entSize), this.K = this.slab.slice(0, this.keySize), this.V = this.slab.slice(this.keySize), this.derivation = Boolean(s), this.rounds = 0, e && this.init(e, r, n)
                }
                init(t, e = null, r = null) {
                    let n;
                    if (null == e && (e = Buffer.alloc(0)), null == r && (r = Buffer.alloc(0)), i(Buffer.isBuffer(t)), i(Buffer.isBuffer(e)), i(Buffer.isBuffer(r)), this.derivation) n = this.derive(t, e, r);
                    else {
                        if (t.length + e.length > this.entSize) throw new Error("Entropy is too long.");
                        if (r.length > this.entSize) throw new Error("Personalization string is too long.");
                        n = Buffer.alloc(this.entSize, 0), t.copy(n, 0), e.copy(n, t.length);
                        for (let t = 0; t < r.length; t++) n[t] ^= r[t]
                    }
                    return this.slab.fill(0), this.ctr.init(this.K, this.V), this.update(n), this.rounds = 1, this
                }
                reseed(t, e = null) {
                    if (null == e && (e = Buffer.alloc(0)), i(Buffer.isBuffer(t)), i(Buffer.isBuffer(e)), 0 === this.rounds) throw new Error("DRBG not initialized.");
                    let r;
                    if (this.derivation) r = this.derive(t, e);
                    else {
                        if (e.length > this.entSize) throw new Error("Additional data is too long.");
                        r = Buffer.alloc(this.entSize, 0), t.copy(r, 0);
                        for (let t = 0; t < e.length; t++) r[t] ^= e[t]
                    }
                    return this.update(r), this.rounds = 1, this
                }
                generate(t, e = null) {
                    if (i(t >>> 0 === t), i(!e || Buffer.isBuffer(e)), 0 === this.rounds) throw new Error("DRBG not initialized.");
                    if (this.rounds > 281474976710656) throw new Error("Reseed is required.");
                    if (t > 65536) throw new Error("Requested length is too long.");
                    e && 0 !== e.length && (this.derivation && (e = this.derive(e)), this.update(e));
                    const r = Math.ceil(t / this.blkSize),
                        n = Buffer.allocUnsafe(r * this.blkSize);
                    for (let t = 0; t < r; t++) this.ctr.encrypt(n, t * this.blkSize);
                    return this.update(e), this.rounds += 1, n.slice(0, t)
                }
                randomBytes(t) {
                    return this.generate(t)
                }
                update(t = null) {
                    if (null == t && (t = Buffer.alloc(0)), i(Buffer.isBuffer(t)), t.length > this.entSize) throw new Error("Seed is too long.");
                    this.slab.fill(0);
                    for (let t = 0; t < this.entSize; t += this.blkSize) this.ctr.encrypt(this.slab, t);
                    for (let e = 0; e < t.length; e++) this.slab[e] ^= t[e];
                    return this.ctr.init(this.K, this.V), this
                }
                serialize(...t) {
                    const e = this.entSize;
                    let r = 0;
                    for (const e of t) r += e.length;
                    let n = this.blkSize + 4 + 4 + r + 1;
                    n % this.blkSize && (n += this.blkSize - n % this.blkSize), i(n % this.blkSize == 0);
                    const s = Buffer.alloc(n, 0);
                    let o = this.blkSize;
                    s[o++] = r >>> 24, s[o++] = r >>> 16, s[o++] = r >>> 8, s[o++] = r, s[o++] = e >>> 24, s[o++] = e >>> 16, s[o++] = e >>> 8, s[o++] = e;
                    for (const e of t) o += e.copy(s, o);
                    return s[o++] = 128, i(o === this.blkSize + 4 + 4 + r + 1), s
                }
                derive(...t) {
                    const e = this.serialize(...t),
                        r = e.length / this.blkSize,
                        i = Buffer.alloc(this.keySize),
                        n = Math.ceil(this.entSize / this.blkSize),
                        o = Buffer.alloc(n * this.blkSize);
                    for (let t = 0; t < i.length; t++) i[t] = t;
                    const u = new s(this.id).init(i);
                    for (let t = 0; t < n; t++) {
                        let i = Buffer.alloc(this.blkSize, 0);
                        e[0] = t >>> 24, e[1] = t >>> 16, e[2] = t >>> 8, e[3] = t;
                        for (let t = 0; t < r; t++) {
                            for (let r = 0; r < i.length; r++) i[r] ^= e[t * this.blkSize + r];
                            i = u.update(i)
                        }
                        i.copy(o, t * this.blkSize)
                    }
                    const a = o.slice(0, this.keySize);
                    u.init(a);
                    let h = o.slice(this.keySize, this.entSize);
                    for (let t = 0; t < n; t++) h = u.update(h), h.copy(o, t * this.blkSize);
                    return o.slice(0, this.entSize)
                }
            }
            CtrDRBG.native = 0;
            class CTR {
                constructor(t) {
                    this.ctx = new s(t), this.ctr = null
                }
                init(t, e) {
                    return this.ctx.init(t), this.ctr = Buffer.from(e), this
                }
                increment() {
                    for (let t = this.ctr.length - 1; t >= 0 && (this.ctr[t] += 1, 0 === this.ctr[t]); t--);
                }
                encrypt(t, e) {
                    return this.increment(), this.ctx.update(this.ctr).copy(t, e), this
                }
            }
            t.exports = CtrDRBG
        },
        10003: function(t, e, r) {
            "use strict";
            t.exports = r(10004)
        },
        10008: function(t, e, r) {
            "use strict";
            const i = r(5466),
                n = r(7490),
                s = r(5636),
                o = r(6087),
                {
                    padLeft: u
                } = r(5658),
                a = {
                    encrypt(t, e, r, a = null) {
                        i(null != t), i(Buffer.isBuffer(e)), i(r instanceof n.DSAKey), i(null == a || a instanceof n.DSAPrivateKey), null == a && (a = n.privateKeyCreate(r));
                        const h = r.bits() + 7 >>> 3,
                            c = n.publicKeyCreate(a),
                            l = n.derive(r, a),
                            f = o.derive(l, t),
                            d = s.randomBytes(24),
                            g = u(c.y, h),
                            p = o.seal(e, f, d);
                        return Buffer.concat([g, d, p])
                    },
                    decrypt(t, e, r) {
                        i(null != t), i(Buffer.isBuffer(e)), i(r instanceof n.DSAPrivateKey);
                        const s = r.bits() + 7 >>> 3;
                        if (e.length < s + 24) throw new Error("Invalid ciphertext.");
                        const u = e.slice(0, s),
                            a = new n.DSAPublicKey(r.p, r.q, r.g, u),
                            h = e.slice(s, s + 24),
                            c = e.slice(s + 24),
                            l = n.derive(a, r),
                            f = o.derive(l, t);
                        return o.open(c, f, h)
                    }
                };
            t.exports = a
        },
        10010: function(t, e, r) {
            "use strict";
            const i = r(5466),
                n = r(6087),
                s = r(5636),
                o = {
                    encrypt(t, e, r, o, u = null) {
                        i(t && "string" == typeof t.id), null == u && (u = t.privateKeyGenerate());
                        const a = t.publicKeyCreate(u),
                            h = t.derive(o, u),
                            c = n.derive(h, e),
                            l = s.randomBytes(24),
                            f = n.seal(r, c, l);
                        return Buffer.concat([a, l, f])
                    },
                    decrypt(t, e, r, s) {
                        i(t && "string" == typeof t.id), i(Buffer.isBuffer(r));
                        const o = "short" === t.type ? 1 + t.size : t.size;
                        if (r.length < o + 24) throw new Error("Invalid ciphertext.");
                        const u = r.slice(0, o),
                            a = r.slice(o, o + 24),
                            h = r.slice(o + 24),
                            c = t.derive(u, s),
                            l = n.derive(c, e);
                        return n.open(h, l, a)
                    }
                };
            t.exports = o
        },
        10012: function(t, e, r) {
            "use strict";
            e.asn1 = r(5637), e.base16 = r(10013), e.base32 = r(10014), e.base58 = r(10015), e.base64 = r(5797), e.bech32 = r(10017), e.cash32 = r(10019), e.lines = r(7487), e.openssl = r(6664), e.pem = r(5676), e.pemcrypt = r(7496), e.pkcs1 = r(6666), e.pkcs3 = r(7489), e.pkcs5 = r(10021), e.pkcs8 = r(5954), e.rfc3279 = r(7492), e.sec1 = r(6667), e.util = r(5658), e.x509 = r(5866)
        },
        10013: function(t, e, r) {
            "use strict";
            const i = r(5466),
                n = !0 === Buffer.alloc(0)._isBuffer;

            function s(t, e) {
                i(Buffer.isBuffer(t)), i(null == e || e >>> 0 === e);
                let r = t.toString("hex");
                if (null != e) {
                    if (e *= 2, r.length > e) throw new RangeError("Data length exceeds requested size.");
                    for (; r.length < e;) r = "00" + r
                }
                return r
            }

            function o(t, e) {
                if (i("string" == typeof t), i(null == e || e >>> 0 === e), 1 & t.length) throw new Error("Invalid hex string.");
                if (null != e && t.length !== 2 * e) throw new RangeError("String length differs from expected size.");
                const r = Buffer.from(t, "hex");
                if (t.length !== 2 * r.length) throw new Error("Invalid hex string.");
                if (n && r.length > 0 && r[r.length - 1] >>> 4 == 0 && !/[0-9a-f]$/i.test(t)) throw new Error("Invalid hex string.");
                return r
            }
            e.encode = s, e.encodeLE = function(t, e) {
                const r = s(t, e);
                let i = "";
                for (let t = r.length - 2; t >= 0; t -= 2) i += r[t] + r[t + 1];
                return i
            }, e.decode = o, e.decodeLE = function(t, e) {
                const r = o(t, e);
                for (let t = r.length - 1, e = 0; t > e; t--, e++)[r[t], r[e]] = [r[e], r[t]];
                return r
            }, e.test = function(t, e) {
                return i("string" == typeof t), i(null == e || e >>> 0 === e), !(1 & t.length) && ((null == e || t.length === 2 * e) && /^[0-9a-f]*$/i.test(t))
            }
        },
        10014: function(t, e, r) {
            "use strict";
            const i = r(5466),
                n = [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 26, 27, 28, 29, 30, 31, -1, -1, -1, -1, -1, -1, -1, -1, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, -1, -1, -1, -1, -1, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, -1, -1, -1, -1, -1],
                s = [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, -1, -1, -1, -1, -1, -1, -1, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, -1, -1, -1, -1, -1, -1, -1, -1, -1],
                o = [0, 6, 4, 3, 1];

            function u(t, e, r) {
                i(Buffer.isBuffer(t)), i("boolean" == typeof r);
                let n = "",
                    s = 0,
                    u = 0;
                for (let r = 0; r < t.length; r++) {
                    const i = t[r];
                    switch (s) {
                        case 0:
                            n += e[i >>> 3], u = (7 & i) << 2, s = 1;
                            break;
                        case 1:
                            n += e[u | i >>> 6], n += e[i >>> 1 & 31], u = (1 & i) << 4, s = 2;
                            break;
                        case 2:
                            n += e[u | i >>> 4], u = (15 & i) << 1, s = 3;
                            break;
                        case 3:
                            n += e[u | i >>> 7], n += e[i >>> 2 & 31], u = (3 & i) << 3, s = 4;
                            break;
                        case 4:
                            n += e[u | i >>> 5], n += e[31 & i], s = 0
                    }
                }
                if (s > 0 && (n += e[u], r))
                    for (let t = 0; t < o[s]; t++) n += "=";
                return n
            }

            function a(t, e = !1) {
                return c(t, n, e)
            }

            function h(t, e = !1) {
                return c(t, s, e)
            }

            function c(t, e, r) {
                i("string" == typeof t), i("boolean" == typeof r);
                const n = Buffer.allocUnsafe((5 * t.length + 7) / 8 | 0);
                let s = 0,
                    o = 0,
                    u = 0,
                    a = 0;
                for (; a < t.length; a++) {
                    const r = t.charCodeAt(a),
                        i = 65408 & r ? -1 : e[r];
                    if (-1 === i) break;
                    switch (s) {
                        case 0:
                            o = i, s = 1;
                            break;
                        case 1:
                            n[u++] = o << 3 | i >>> 2, o = 3 & i, s = 2;
                            break;
                        case 2:
                            o = o << 5 | i, s = 3;
                            break;
                        case 3:
                            n[u++] = o << 1 | i >>> 4, o = 15 & i, s = 4;
                            break;
                        case 4:
                            n[u++] = o << 4 | i >>> 1, o = 1 & i, s = 5;
                            break;
                        case 5:
                            o = o << 5 | i, s = 6;
                            break;
                        case 6:
                            n[u++] = o << 2 | i >>> 3, o = 7 & i, s = 7;
                            break;
                        case 7:
                            n[u++] = o << 5 | i, o = 0, s = 0
                    }
                }
                if (1 === s || 3 === s || 6 === s) throw new Error("Invalid base32 string.");
                if (o > 0) throw new Error("Invalid base32 string.");
                if (t.length !== a + (7 & -s) * r) throw new Error("Invalid base32 string.");
                for (; a < t.length; a++) {
                    if (61 !== t.charCodeAt(a)) throw new Error("Invalid base32 string.")
                }
                return n.slice(0, u)
            }
            e.encode = function(t, e = !1) {
                return u(t, "abcdefghijklmnopqrstuvwxyz234567", e)
            }, e.encodeHex = function(t, e = !1) {
                return u(t, "0123456789abcdefghijklmnopqrstuv", e)
            }, e.decode = a, e.decodeHex = h, e.test = function(t, e = !1) {
                i("string" == typeof t), i("boolean" == typeof e);
                try {
                    return a(t, e), !0
                } catch (t) {
                    return !1
                }
            }, e.testHex = function(t, e = !1) {
                i("string" == typeof t), i("boolean" == typeof e);
                try {
                    return h(t, e), !0
                } catch (t) {
                    return !1
                }
            }
        },
        10015: function(t, e, r) {
            "use strict";
            t.exports = r(10016)
        },
        10017: function(t, e, r) {
            "use strict";
            t.exports = r(10018)
        },
        10019: function(t, e, r) {
            "use strict";
            t.exports = r(10020)
        },
        10021: function(t, e, r) {
            "use strict";
            const i = r(5466),
                n = {
                    pad(t, e) {
                        i(Buffer.isBuffer(t)), i(e >>> 0 === e), i(e > 0 && e < 256);
                        const r = e - t.length % e,
                            n = Buffer.allocUnsafe(t.length + r);
                        t.copy(n, 0);
                        for (let e = t.length; e < n.length; e++) n[e] = r;
                        return n
                    },
                    unpad(t, e) {
                        if (i(Buffer.isBuffer(t)), i(e >>> 0 === e), i(e > 0 && e < 256), t.length < e || t.length % e != 0) throw new Error("Invalid padding.");
                        const r = t[t.length - 1];
                        if (0 === r || r > e) throw new Error("Invalid padding.");
                        for (let e = t.length - r; e < t.length; e++)
                            if (t[e] !== r) throw new Error("Invalid padding.");
                        return t.slice(0, -r)
                    }
                };
            t.exports = n
        },
        10022: function(t, e, r) {
            "use strict";
            const i = r(5466),
                n = r(5579),
                s = Buffer.alloc(32, 0),
                o = Buffer.alloc(32, 0),
                u = Buffer.from([0, 255, 0, 255, 0, 255, 0, 255, 255, 0, 255, 0, 255, 0, 255, 0, 0, 255, 255, 0, 255, 0, 0, 255, 255, 0, 0, 0, 255, 255, 0, 255]),
                a = [Buffer.from([10, 4, 5, 6, 8, 1, 3, 7, 13, 12, 14, 0, 9, 2, 11, 15]), Buffer.from([5, 15, 4, 0, 2, 13, 11, 9, 1, 7, 6, 3, 12, 14, 10, 8]), Buffer.from([7, 15, 12, 14, 9, 4, 1, 0, 3, 11, 5, 2, 6, 10, 8, 13]), Buffer.from([4, 10, 7, 12, 0, 15, 2, 8, 14, 1, 6, 5, 13, 11, 9, 3]), Buffer.from([7, 6, 4, 11, 9, 12, 2, 10, 1, 8, 0, 14, 15, 13, 3, 5]), Buffer.from([7, 6, 2, 4, 13, 9, 15, 0, 10, 1, 5, 11, 8, 14, 12, 3]), Buffer.from([13, 14, 4, 1, 7, 0, 5, 10, 3, 12, 8, 15, 6, 2, 9, 11]), Buffer.from([1, 3, 10, 9, 5, 11, 4, 15, 8, 6, 7, 14, 13, 0, 2, 12])],
                h = [Buffer.from([4, 10, 9, 2, 13, 8, 0, 14, 6, 11, 1, 12, 7, 15, 5, 3]), Buffer.from([14, 11, 4, 12, 6, 13, 15, 10, 2, 3, 8, 1, 0, 7, 5, 9]), Buffer.from([5, 8, 1, 13, 10, 3, 4, 2, 14, 15, 12, 7, 6, 0, 9, 11]), Buffer.from([7, 13, 10, 1, 0, 8, 9, 15, 14, 4, 6, 12, 11, 2, 5, 3]), Buffer.from([6, 12, 7, 1, 5, 15, 13, 8, 4, 10, 9, 14, 0, 3, 11, 2]), Buffer.from([4, 11, 10, 0, 7, 2, 1, 13, 3, 6, 8, 5, 9, 12, 15, 14]), Buffer.from([13, 11, 4, 1, 3, 15, 5, 9, 0, 10, 14, 7, 6, 8, 2, 12]), Buffer.from([1, 15, 13, 0, 5, 7, 10, 4, 9, 2, 3, 14, 6, 11, 8, 12])],
                c = [Buffer.from([12, 4, 6, 2, 10, 5, 11, 9, 14, 8, 13, 7, 0, 3, 15, 1]), Buffer.from([6, 8, 2, 3, 9, 10, 5, 12, 1, 14, 4, 7, 11, 13, 0, 15]), Buffer.from([11, 3, 5, 8, 2, 15, 10, 13, 14, 1, 7, 4, 12, 9, 6, 0]), Buffer.from([12, 8, 2, 1, 13, 4, 15, 6, 7, 0, 10, 5, 3, 14, 9, 11]), Buffer.from([7, 15, 5, 10, 8, 1, 6, 13, 0, 9, 3, 14, 11, 4, 2, 12]), Buffer.from([5, 13, 15, 6, 9, 2, 12, 10, 11, 7, 8, 1, 4, 3, 14, 0]), Buffer.from([8, 14, 2, 5, 6, 9, 1, 12, 15, 4, 11, 0, 13, 10, 3, 7]), Buffer.from([1, 7, 14, 13, 0, 5, 8, 3, 4, 15, 10, 6, 9, 12, 11, 2])];
            class GOST94 {
                constructor() {
                    this.S = a, this.state = Buffer.allocUnsafe(32), this.sigma = Buffer.allocUnsafe(32), this.block = Buffer.allocUnsafe(32), this.size = -1
                }
                init(t) {
                    return null == t && (t = a), i(Array.isArray(t) && 8 === t.length), this.S = t, this.state.fill(0), this.sigma.fill(0), this.size = 0, this
                }
                update(t) {
                    return i(Buffer.isBuffer(t)), this._update(t, t.length), this
                }
                final() {
                    return this._final(Buffer.allocUnsafe(32))
                }
                _update(t, e) {
                    i(-1 !== this.size, "Context already finalized.");
                    let r = 31 & this.size,
                        n = 0;
                    if (this.size += e, r > 0) {
                        let i = 32 - r;
                        if (i > e && (i = e), t.copy(this.block, r, n, n + i), r += i, e -= i, n += i, r < 32) return;
                        this.transform(this.block, 0)
                    }
                    for (; e >= 32;) this.transform(t, n), n += 32, e -= 32;
                    e > 0 && t.copy(this.block, 0, n, n + e)
                }
                _final(t) {
                    i(-1 !== this.size, "Context already finalized.");
                    const e = 8 * this.size,
                        r = 31 & this.size;
                    0 !== r && this._update(s, 32 - r);
                    const n = e * (1 / 4294967296) >>> 0;
                    return w(o, e >>> 0, 0), w(o, n, 4), this.F(o), this.F(this.sigma), this.state.copy(t, 0), this.state.fill(0), this.sigma.fill(0), this.block.fill(0), o.fill(0, 0, 8), this.size = -1, t
                }
                transform(t, e) {
                    const r = t.slice(e, e + 32);
                    this.F(r), this.sum(r)
                }
                shuffle(t, e) {
                    const r = Buffer.allocUnsafe(32);
                    e.copy(r, 0);
                    for (let t = 0; t < 12; t++) B(r);
                    g(r, t), B(r), g(this.state, r);
                    for (let t = 0; t < 61; t++) B(this.state)
                }
                F(t) {
                    const e = Buffer.allocUnsafe(32);
                    let r, i, n;
                    this.state.copy(e, 0), r = y(d(this.state, t)), f(e, 0, r, this.S), i = p(this.state), n = p(p(t)), r = y(d(i, n)), f(e, 8, r, this.S), i = p(i), g(i, u), n = p(p(n)), r = y(d(i, n)), f(e, 16, r, this.S), i = p(i), n = p(p(n)), r = y(d(i, n)), f(e, 24, r, this.S), this.shuffle(t, e)
                }
                sum(t) {
                    let e = 0;
                    for (let r = 0; r < 32; r++) e += this.sigma[r] + t[r], this.sigma[r] = e, e >>>= 8
                }
                static hash() {
                    return new GOST94
                }
                static hmac(t) {
                    return new n(GOST94, 32, [t])
                }
                static digest(t, e) {
                    return GOST94.ctx.init(e).update(t).final()
                }
                static root(t, e, r) {
                    return i(Buffer.isBuffer(t) && 32 === t.length), i(Buffer.isBuffer(e) && 32 === e.length), GOST94.ctx.init(r).update(t).update(e).final()
                }
                static multi(t, e, r, i) {
                    const n = GOST94.ctx;
                    return n.init(i), n.update(t), n.update(e), r && n.update(r), n.final()
                }
                static mac(t, e, r) {
                    return GOST94.hmac(r).init(e).update(t).final()
                }
            }

            function l(t, e, r) {
                return (i = function(t, e) {
                    let r = 0;
                    for (let i = 0; i < 8; i++) {
                        const n = 4 * i,
                            s = (t & 15 << n) >>> n;
                        r += e[i][s] << n
                    }
                    return r >>> 0
                }(t + e >>> 0, r)) << (n = 11) | i >>> 32 - n;
                var i, n
            }

            function f(t, e, r, i) {
                const n = new Uint32Array(8);
                let s = E(t, e + 0),
                    o = E(t, e + 4);
                for (let t = 0; t < 8; t++) n[t] = E(r, 4 * t);
                for (let t = 0; t < 3; t++)
                    for (let t = 0; t < 8; t++) {
                        const e = o ^ l(s, n[t], i);
                        o = s, s = e
                    }
                for (let t = 7; t >= 0; t--) {
                    const e = o ^ l(s, n[t], i);
                    o = s, s = e
                }
                w(t, o, e + 0), w(t, s, e + 4)
            }

            function d(t, e) {
                const r = Buffer.allocUnsafe(32);
                for (let i = 0; i < 32; i++) r[i] = t[i] ^ e[i];
                return r
            }

            function g(t, e) {
                for (let r = 0; r < 32; r++) t[r] ^= e[r]
            }

            function p(t) {
                const e = Buffer.allocUnsafe(32);
                t.copy(e, 0, 8, 32);
                for (let r = 0; r < 8; r++) e[24 + r] = t[r] ^ t[r + 8];
                return e
            }

            function y(t) {
                const e = Buffer.allocUnsafe(32);
                for (let r = 0; r < 4; r++)
                    for (let i = 0; i < 8; i++) e[r + 4 * i] = t[8 * r + i];
                return e
            }

            function B(t) {
                const e = Buffer.allocUnsafe(32);
                t.copy(e, 0, 2, 32), t.copy(e, 30, 0, 2), e[30] ^= t[2], e[31] ^= t[3], e[30] ^= t[4], e[31] ^= t[5], e[30] ^= t[6], e[31] ^= t[7], e[30] ^= t[24], e[31] ^= t[25], e[30] ^= t[30], e[31] ^= t[31], e.copy(t, 0)
            }

            function E(t, e) {
                return t[e++] + 256 * t[e++] + 65536 * t[e++] + 16777216 * t[e]
            }

            function w(t, e, r) {
                return t[r++] = e, e >>>= 8, t[r++] = e, e >>>= 8, t[r++] = e, e >>>= 8, t[r++] = e, r
            }
            GOST94.native = 0, GOST94.id = "GOST94", GOST94.size = 32, GOST94.bits = 256, GOST94.blockSize = 32, GOST94.zero = Buffer.alloc(32, 0), GOST94.ctx = new GOST94, GOST94.CRYPTOPRO = a, GOST94.TEST = h, GOST94.S2015 = c, t.exports = GOST94
        },
        10023: function(t, e, r) {
            "use strict";
            t.exports = r(10024)
        },
        10025: function(t, e, r) {
            "use strict";
            t.exports = r(10026)
        },
        10027: function(t, e, r) {
            "use strict";
            const i = r(5466),
                n = Buffer.from([1]),
                s = Buffer.from([2]),
                o = Buffer.from([3]);
            class HashDRBG {
                constructor(t, e, r, n) {
                    i(t && "string" == typeof t.id), this.hash = t, this.minEntropy = "SHA1" === t.id ? 10 : 24, this.seedLen = t.size <= 32 ? 55 : 111, this.V = Buffer.allocUnsafe(this.seedLen), this.C = Buffer.allocUnsafe(this.seedLen), this.len = Buffer.allocUnsafe(8), this.rounds = 0, e && this.init(e, r, n)
                }
                init(t, e = null, r = null) {
                    i(Buffer.isBuffer(t)), i(!e || Buffer.isBuffer(e)), i(!r || Buffer.isBuffer(r));
                    const n = u(t, e, r);
                    if (n.length < this.minEntropy) throw new Error("Not enough entropy.");
                    return this.V = this.derive(n, this.seedLen, null), this.C = this.derive(this.V, this.seedLen, 0), this.rounds = 1, this
                }
                reseed(t, e = null) {
                    if (i(Buffer.isBuffer(t)), i(!e || Buffer.isBuffer(e)), 0 === this.rounds) throw new Error("DRBG not initialized.");
                    const r = u(this.V, t, e);
                    if (r.length < this.minEntropy) throw new Error("Not enough entropy.");
                    return this.V = this.derive(r, this.seedLen, 1), this.C = this.derive(this.V, this.seedLen, 0), this.rounds = 1, this
                }
                generate(t, e = null) {
                    if (i(t >>> 0 === t), i(!e || Buffer.isBuffer(e)), 0 === this.rounds) throw new Error("DRBG not initialized.");
                    if (this.rounds > 281474976710656) throw new Error("Reseed is required.");
                    e && 0 !== e.length && this.sum(this.V, this.hash.multi(s, this.V, e));
                    const r = Buffer.from(this.V),
                        o = Math.ceil(t / this.hash.size),
                        u = Buffer.allocUnsafe(o * this.hash.size);
                    for (let t = 0; t < o; t++) this.hash.digest(r).copy(u, t * this.hash.size), this.sum(r, n);
                    return this.update(), this.rounds += 1, u.slice(0, t)
                }
                randomBytes(t) {
                    return this.generate(t)
                }
                update() {
                    const t = this.hash.multi(o, this.V),
                        e = this.rounds / 4294967296 >>> 0,
                        r = this.rounds >>> 0;
                    return this.len[0] = e >>> 24, this.len[1] = e >>> 16, this.len[2] = e >>> 8, this.len[3] = e, this.len[4] = r >>> 24, this.len[5] = r >>> 16, this.len[6] = r >>> 8, this.len[7] = r, this.sum(this.V, t, this.C, this.len), this
                }
                derive(t, e, r = null) {
                    i(Buffer.isBuffer(t)), i(e >>> 0 === e);
                    const n = null != r ? 1 : 0,
                        s = Buffer.allocUnsafe(5 + n + t.length);
                    s[0] = 1, s[1] = e >>> 21, s[2] = e >>> 13, s[3] = e >>> 5, s[4] = (31 & e) << 3, n && (s[5] = r), t.copy(s, 5 + n);
                    const o = Math.ceil(e / this.hash.size),
                        u = Buffer.allocUnsafe(o * this.hash.size);
                    for (let t = 0; t < o; t++) this.hash.digest(s).copy(u, t * this.hash.size), s[0] += 1;
                    return u.slice(0, e)
                }
                sum(t, ...e) {
                    for (const r of e) {
                        let e = r.length - 1,
                            i = t.length - 1,
                            n = 0;
                        for (; e >= 0;) n += r[e] + t[i], t[i] = 255 & n, n >>>= 8, e -= 1, i -= 1;
                        for (; n > 0 && i >= 0;) n += t[i], t[i] = 255 & n, n >>>= 8, i -= 1
                    }
                    return t
                }
            }

            function u(t, e = null, r = null) {
                if (!e && !r) return t;
                let i = t.length,
                    n = 0;
                e && (i += e.length), r && (i += r.length);
                const s = Buffer.allocUnsafe(i);
                return n += t.copy(s, n), e && (n += e.copy(s, n)), r && r.copy(s, n), s
            }
            HashDRBG.native = 0, t.exports = HashDRBG
        },
        5431: function(t, e, r) {
            "use strict";
            var i = r(2);
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.default = void 0;
            var n = r(6656),
                s = i(r(461)),
                o = r(29),
                u = r(26);
            class ARKCoin extends s.default {
                constructor({
                    alias: t,
                    notify: e,
                    feeData: r,
                    explorers: i,
                    txWebUrl: s,
                    socket: o
                }) {
                    super({
                        alias: t,
                        notify: e,
                        name: "Ark",
                        ticker: "ARK",
                        decimal: 8,
                        derivation: "m/44'/111'/0'/0/0",
                        unspendableBalance: "0",
                        explorers: i,
                        txWebUrl: s,
                        socket: o,
                        feeData: r
                    }), n.Managers.configManager.setFromPreset("mainnet"), n.Managers.configManager.setHeight(11273e3), this.network = n.Managers.configManager.all().network, this.fee = r.fee, this.transactions = []
                }
                loadWallet(t, e) {
                    return new Promise((t, r) => {
                        const i = n.Crypto.HDWallet.fromMnemonic(e).derivePath(this.derivation);
                        i.privateKey || r(new o.WalletError({
                            type: u.WALLET_ERROR,
                            error: new Error("can't get a privateKey!"),
                            instance: this
                        })), this.privateKey = i.toWIF(), this.address = n.Identities.Address.fromPublicKey(i.publicKey.toString("hex"), this.network.pubKeyHash), t(this)
                    })
                }
                getAddress() {
                    if (this.privateKey) {
                        const t = n.Identities.Keys.fromWIF(this.privateKey);
                        return n.Identities.Address.fromPublicKey(t.publicKey, this.network.pubKeyHash)
                    }
                    return new o.WalletError({
                        type: u.WALLET_ERROR,
                        error: new Error("privateKey is empty!"),
                        instance: this
                    })
                }
                async validateAddress(t) {
                    return n.Identities.Address.validate(t, this.network.pubKeyHash)
                }
                async createTransaction({
                    address: t,
                    amount: e
                }) {
                    const {
                        nonce: r
                    } = await this.getInfo(), i = new this.BN(r).addn(1);
                    return n.Transactions.BuilderFactory.transfer().version(2).nonce(i.toString()).recipientId(t).amount(e).fee(this.fee).signWithWif(this.privateKey).getStruct()
                }
            }
            var a = ARKCoin;
            e.default = a
        },
        5637: function(t, e, r) {
            "use strict";
            const i = r(5466),
                n = r(6660),
                s = r(9988),
                o = Buffer.alloc(0),
                u = Buffer.alloc(1, 0),
                a = new Uint32Array(2),
                h = {
                    BOOLEAN: 1,
                    INTEGER: 2,
                    BITSTRING: 3,
                    OCTSTRING: 4,
                    NULL: 5,
                    OID: 6,
                    ENUM: 10,
                    UTF8STRING: 12,
                    SEQUENCE: 16,
                    SET: 17,
                    NUMSTRING: 18,
                    PRINTSTRING: 19,
                    T61STRING: 20,
                    IA5STRING: 22,
                    UTCTIME: 23,
                    GENTIME: 24,
                    GENSTRING: 27
                },
                c = {
                    UNIVERSAL: 0,
                    APPLICATION: 1,
                    CONTEXT: 2,
                    PRIVATE: 3
                };
            class Node extends n.Struct {
                constructor() {
                    super(), this.flags = 0
                }
                get mode() {
                    return 130560 & this.flags
                }
                set mode(t) {
                    this.flags &= -130561, this.flags |= t
                }
                get opt() {
                    return 0 != (256 & this.flags)
                }
                set opt(t) {
                    t ? this.flags |= 256 : this.flags &= -257
                }
                get target() {
                    return 255 & this.flags
                }
                set target(t) {
                    this.flags &= -256, this.flags |= t
                }
                get isRaw() {
                    return !1
                }
                explicit(t) {
                    return i(t >>> 0 === t), this.mode = 512, this.target = t, this
                }
                implicit(t) {
                    return i(t >>> 0 === t), this.mode = 1024, this.target = t, this
                }
                optional(t = !0) {
                    return i("boolean" == typeof t), this.opt = t, this
                }
                clean() {
                    return !1
                }
                getBodySize(t) {
                    return 0
                }
                writeBody(t, e) {
                    return t
                }
                readBody(t, e) {
                    return this
                }
                encodeBody(t) {
                    const e = this.getBodySize(),
                        r = n.write(e);
                    return this.writeBody(r, t), r.render()
                }
                decodeBody(t, e) {
                    const r = n.read(t);
                    return this.readBody(r, e)
                }
                set() {
                    return this
                }
                from(t, ...e) {
                    return null == t ? this : this.set(t, ...e)
                }
                error(t) {
                    if (this.opt) return this;
                    const e = new Error(t);
                    throw Error.captureStackTrace && Error.captureStackTrace(e, this.error), e
                }
                getSize(t) {
                    if (this.opt && this.clean()) return 0;
                    const e = this.getBodySize(t);
                    let r = 0;
                    return r += g(e), r += e, 512 === this.mode && (r += g(r)), r
                }
                write(t, e) {
                    if (this.opt && this.clean()) return t;
                    const r = this.getBodySize();
                    switch (this.mode) {
                        case 512: {
                            const e = g(r) + r;
                            p(t, this.target, c.CONTEXT, !1, e)
                        }
                        case 0: {
                            const e = this.type !== h.SEQUENCE && this.type !== h.SET;
                            p(t, this.type, c.UNIVERSAL, e, r);
                            break
                        }
                        case 1024: {
                            const e = this.type !== h.SEQUENCE && this.type !== h.SET;
                            p(t, this.target, c.CONTEXT, e, r);
                            break
                        }
                        default:
                            throw new i.AssertionError("Invalid mode.")
                    }
                    return this.writeBody(t, e)
                }
                read(t, e) {
                    switch (this.mode) {
                        case 512: {
                            const e = B(t, this.opt);
                            if (!e) return this;
                            if (e.cls !== c.CONTEXT) return this.error(`Unexpected class: ${e.cls}.`);
                            if (e.primitive) return this.error("Unexpected primitive flag.");
                            if (e.type !== this.target) return this.error(`Unexpected type: ${e.type}.`);
                            t.seek(e.len), t = t.readChild(e.size)
                        }
                        case 0: {
                            const r = B(t, this.opt);
                            if (!r) return this;
                            if (r.cls !== c.UNIVERSAL) return this.error(`Unexpected class: ${r.cls}.`);
                            const i = this.type !== h.SEQUENCE && this.type !== h.SET;
                            if (r.primitive !== i) return this.error("Unexpected primitive flag.");
                            if (r.type !== this.type) return this.error(`Unexpected type: ${r.type}.`);
                            if (this.isRaw) {
                                const e = r.len + r.size;
                                this.raw = t.readBytes(e), t.seek(-e)
                            }
                            t.seek(r.len);
                            const n = t.readChild(r.size);
                            return this.readBody(n, e)
                        }
                        case 1024: {
                            const r = B(t, this.opt);
                            if (!r) return this;
                            if (r.cls !== c.CONTEXT) return this.error(`Unexpected class: ${r.cls}.`);
                            const i = this.type !== h.SEQUENCE && this.type !== h.SET;
                            if (r.primitive !== i) return this.error("Unexpected primitive flag.");
                            if (r.type !== this.target) return this.error(`Unexpected type: ${r.type}.`);
                            t.seek(r.len);
                            const n = t.readChild(r.size);
                            return this.readBody(n, e)
                        }
                        default:
                            throw new i.AssertionError("Invalid mode.")
                    }
                }
                fromArray(t) {
                    return this
                }
                fromNumber(t) {
                    return this
                }
                fromPEM(t) {
                    return this
                }
                static decodeBody(t) {
                    return (new this).decodeBody(t)
                }
                static fromArray(t) {
                    return (new this).fromArray(t)
                }
                static fromNumber(t) {
                    return (new this).fromNumber(t)
                }
                static fromPEM(t) {
                    return (new this).fromPEM(t)
                }
            }
            class Any extends Node {
                constructor(...t) {
                    super(), this.node = new Null, this.raw = null, this.from(...t)
                }
                get isRaw() {
                    return !0
                }
                explicit(t) {
                    throw new Error("Cannot set explicit on any.")
                }
                implicit(t) {
                    throw new Error("Cannot set implicit on any.")
                }
                get type() {
                    return this.node.type
                }
                getSize(t) {
                    return this.node.flags = this.flags, this.node.getSize(t)
                }
                write(t, e) {
                    return i(t), i(0 === this.mode), this.node.flags = this.flags, this.node.write(t, e), t
                }
                read(t, e) {
                    i(t), i(0 === this.mode);
                    const r = B(t, this.opt);
                    if (!r) return this.node.flags = this.flags, this;
                    const n = d(r.type);
                    return this.node = new n, this.node.flags = this.flags, this.node.read(t, e), this
                }
                getBodySize(t) {
                    return this.node.flags = this.flags, this.node.getBodySize(t)
                }
                writeBody(t, e) {
                    return this.node.flags = this.flags, this.node.writeBody(t, e), t
                }
                readBody(t, e) {
                    return this.node.flags = this.flags, this.node.readBody(t, e), this
                }
                set(t) {
                    return null == t && (t = new Null), i(t instanceof Node), this.node = t, this.node.flags = this.flags, this
                }
                clean() {
                    return this.node.type === h.NULL
                }
                format() {
                    return {
                        type: this.constructor.name,
                        node: this.node
                    }
                }
            }
            const l = class String extends Node {
                    constructor(...t) {
                        super(), this.value = "", this.from(...t)
                    }
                    get encoding() {
                        return "binary"
                    }
                    getBodySize() {
                        return Buffer.byteLength(this.value, this.encoding)
                    }
                    writeBody(t) {
                        return t.writeString(this.value, this.encoding), t
                    }
                    readBody(t) {
                        const e = t.readString(t.left(), this.encoding);
                        switch (this.type) {
                            case h.NUMSTRING:
                                if (! function(t) {
                                        i("string" == typeof t);
                                        for (let e = 0; e < t.length; e++) {
                                            const r = t.charCodeAt(e);
                                            if (!(r >= 48 && r <= 57) && 32 !== r) return !1
                                        }
                                        return !0
                                    }(e)) throw new Error("Invalid num string.");
                                break;
                            case h.PRINTSTRING:
                                if (! function(t) {
                                        i("string" == typeof t);
                                        for (let e = 0; e < t.length; e++) {
                                            const r = t.charCodeAt(e);
                                            if (!(r >= 48 && r <= 57) && !(r >= 65 && r <= 90 || r >= 97 && r <= 122)) {
                                                switch (r) {
                                                    case 32:
                                                    case 38:
                                                    case 39:
                                                    case 40:
                                                    case 41:
                                                    case 42:
                                                    case 43:
                                                    case 44:
                                                    case 45:
                                                    case 46:
                                                    case 47:
                                                    case 58:
                                                    case 61:
                                                    case 63:
                                                        continue
                                                }
                                                return !1
                                            }
                                        }
                                        return !0
                                    }(e)) throw new Error("Invalid print string.");
                                break;
                            case h.IA5STRING:
                                if (! function(t) {
                                        i("string" == typeof t);
                                        for (let e = 0; e < t.length; e++) {
                                            if (t.charCodeAt(e) >= 128) return !1
                                        }
                                        return !0
                                    }(e)) throw new Error("Invalid print string.")
                        }
                        return this.value = e, this
                    }
                    set(t) {
                        return null == t && (t = ""), i("string" == typeof t), this.value = t, this
                    }
                    clean() {
                        return 0 === this.value.length
                    }
                    format() {
                        return `<${this.constructor.name}: ${this.value}>`
                    }
                },
                f = class Boolean extends Node {
                    constructor(...t) {
                        super(), this.value = !1, this.from(...t)
                    }
                    get type() {
                        return h.BOOLEAN
                    }
                    getBodySize() {
                        return 1
                    }
                    writeBody(t) {
                        return t.writeU8(this.value ? 255 : 0), t
                    }
                    readBody(t) {
                        if (1 !== t.left()) throw new Error("Non-minimal boolean.");
                        const e = t.readU8();
                        if (0 !== e && 255 !== e) throw new Error("Invalid boolean.");
                        return this.value = 255 === e, this
                    }
                    set(t) {
                        return null == t && (t = !1), i("boolean" == typeof t), this.value = t, this
                    }
                    clean() {
                        return !1 === this.value
                    }
                    format() {
                        return `<${this.constructor.name}: ${this.value}>`
                    }
                };
            class Integer extends Node {
                constructor(...t) {
                    super(), this.value = u, this.negative = !1, this.from(...t)
                }
                get type() {
                    return h.INTEGER
                }
                getBodySize() {
                    const t = this.value;
                    if (0 === t.length) return 1;
                    let e = 0,
                        r = 0;
                    if (!this.negative && t[0] > 127) e = 1;
                    else if (this.negative)
                        if (t[0] > 128) e = 1;
                        else if (128 === t[0]) {
                        e = 0;
                        for (let r = 1; r < t.length; r++) e |= t[r];
                        e = e ? 1 : 0
                    }
                    return r += e, r += t.length, r
                }
                writeBody(t) {
                    const e = this.value;
                    if (0 === e.length) return t.writeU8(0), t;
                    let r = 0,
                        i = 0;
                    if (!this.negative && e[0] > 127) r = 1, i = 0;
                    else if (this.negative)
                        if (i = 255, e[0] > 128) r = 1;
                        else if (128 === e[0]) {
                        r = 0;
                        for (let t = 1; t < e.length; t++) r |= e[t];
                        i = 0 !== r ? 255 : 0, r = 1 & i
                    }
                    r && t.writeU8(i);
                    const n = t.offset;
                    return t.writeBytes(e), i && K(t.data, n, t.offset), this
                }
                readBody(t, e = !1) {
                    let r = t.readBytes(t.left());
                    if (0 === r.length) throw new Error("Zero length integer.");
                    if (e) {
                        if (0 === r[0] && 0 == (128 & r[1])) throw new Error("Non-minimal integer.");
                        if (255 === r[0] && 128 == (128 & r[1])) throw new Error("Non-minimal integer.")
                    }
                    const i = 128 & r[0];
                    if (1 === r.length) return i && (r[0] = 1 + (255 ^ r[0])), this.negative = 0 !== i, this.value = r, this;
                    let n = 0;
                    if (0 === r[0]) n = 1;
                    else if (255 === r[0]) {
                        for (let t = 1; t < r.length; t++) n |= r[t];
                        n = 0 !== n ? 1 : 0
                    }
                    if (n && i === (128 & r[1])) throw new Error("Invalid integer padding.");
                    return n && (r = r.slice(1)), i && K(r, 0, r.length), this.negative = 0 !== i, this.value = v(r), this
                }
                set(t, e) {
                    return "number" == typeof t ? this.fromNumber(t) : (null == t && (t = u), i(Buffer.isBuffer(t)), this.value = v(t), this.negative = !1, null != e && (i("boolean" == typeof e), this.negative = e), this)
                }
                clean() {
                    return !this.negative && this.value.equals(u)
                }
                formatValue() {
                    return this.value.toString("hex")
                }
                toNumber() {
                    let t = n.readUBE(this.value, 0, this.value.length);
                    return this.negative && (t = -t), t
                }
                fromNumber(t) {
                    i(Number.isSafeInteger(t));
                    const e = Buffer.allocUnsafe(8);
                    let r = !1;
                    return t < 0 && (r = !0, t = -t), n.writeU64BE(e, t, 0), this.value = v(e), this.negative = r, this
                }
                format() {
                    const t = this.constructor.name;
                    if (this.value.length <= 6) return `<${t}: ${this.toNumber()}>`;
                    return `<${t}: ${this.negative?"-":""}0x${this.value.toString("hex")}>`
                }
            }
            class BitString extends Node {
                constructor(...t) {
                    super(), this.bits = 0, this.value = o, this.from(...t)
                }
                get type() {
                    return h.BITSTRING
                }
                getBodySize() {
                    return 1 + this.value.length
                }
                writeBody(t) {
                    const e = 8 - (7 & this.bits) & 7;
                    return t.writeU8(e), t.writeBytes(this.value), t
                }
                readBody(t) {
                    const e = t.readBytes(t.left());
                    if (0 === e.length) throw new Error("Zero length bit string.");
                    const r = e[0];
                    if (r > 7 || 1 === e.length && r > 0 || 0 != (e[e.length - 1] & (1 << r) - 1)) throw new Error("Invalid padding bits.");
                    return this.bits = 8 * (e.length - 1) - r, this.value = e.slice(1), this
                }
                rightAlign() {
                    const t = this.value,
                        e = 8 - (7 & this.bits);
                    if (8 === e || 0 === t.length) return t;
                    const r = Buffer.allocUnsafe(t.length);
                    r[0] = t[0] >>> e;
                    for (let i = 1; i < t.length; i++) r[i] = t[i - 1] << 8 - e, r[i] |= t[i] >>> e;
                    return r
                }
                getBit(t) {
                    if (i(t >>> 0 === t), t < 0 || t > this.bits) return 0;
                    const e = t >>> 3,
                        r = 7 - (7 & t);
                    return this.value[e] >>> r & 1
                }
                setBit(t, e) {
                    if (i(t >>> 0 === t), t < 0 || t > this.bits) return this;
                    const r = t >>> 3,
                        n = 7 - (7 & t);
                    return e ? this.value[r] |= 1 << n : this.value[r] &= ~(1 << n), this
                }
                set(t) {
                    return null == t && (t = o), "number" == typeof t ? (i(t >>> 0 === t), this.bits = t, this.value = Buffer.alloc(t + 7 >>> 3)) : (i(Buffer.isBuffer(t)), this.bits = 8 * t.length, this.value = t), this
                }
                clean() {
                    return 0 === this.bits && 0 === this.value.length
                }
                format() {
                    let t = this.rightAlign();
                    return t.length > 32 && (t = t.slice(0, 32)), `<${this.constructor.name}: ${this.bits}:${t.toString("hex")}>`
                }
            }
            class OctString extends Node {
                constructor(...t) {
                    super(), this.value = o, this.from(...t)
                }
                get type() {
                    return h.OCTSTRING
                }
                getBodySize() {
                    return this.value.length
                }
                writeBody(t) {
                    return t.writeBytes(this.value), t
                }
                readBody(t) {
                    return this.value = t.readBytes(t.left()), this
                }
                set(t) {
                    return null == t && (t = o), i(Buffer.isBuffer(t)), this.value = t, this
                }
                clean() {
                    return 0 === this.value.length
                }
                format() {
                    let t = this.value;
                    return t.length > 32 && (t = t.slice(0, 32)), `<${this.constructor.name}: ${t.toString("hex")}>`
                }
            }
            class Null extends Node {
                constructor(...t) {
                    super(), this.from(...t)
                }
                get type() {
                    return h.NULL
                }
                getBodySize() {
                    return 0
                }
                writeBody(t) {
                    return t
                }
                readBody(t) {
                    if (0 !== t.left()) throw new Error("Non-minimal NULL.");
                    return this
                }
                clean() {
                    return !0
                }
                format() {
                    return `<${this.constructor.name}>`
                }
            }
            class OID extends Node {
                constructor(...t) {
                    super(), this.value = a, this.from(...t)
                }
                get type() {
                    return h.OID
                }
                getBodySize() {
                    const t = this.value;
                    if (t.length < 2 || t[0] > 2 || t[0] < 2 && t[1] >= 40) throw new Error("Invalid OID.");
                    let e = E(40 * t[0] + t[1]);
                    for (let r = 2; r < t.length; r++) e += E(t[r]);
                    return e
                }
                writeBody(t) {
                    const e = this.value,
                        r = t.data;
                    if (e.length < 2 || e[0] > 2 || e[0] < 2 && e[1] >= 40) throw new Error("Invalid OID.");
                    let i = t.offset;
                    i = w(r, 40 * e[0] + e[1], i);
                    for (let t = 2; t < e.length; t++) i = w(r, e[t], i);
                    return t.offset = i, t
                }
                readBody(t) {
                    const e = t.readBytes(t.left(), !0);
                    if (0 === e.length) throw new Error("Zero length OID.");
                    const r = new Uint32Array(e.length + 1);
                    let [i, n] = S(e, 0);
                    i < 80 ? (r[0] = i / 40 >>> 0, r[1] = i % 40) : (r[0] = 2, r[1] = i - 80);
                    let s = 2;
                    for (; n < e.length; s++)[i, n] = S(e, n), r[s] = i;
                    return this.value = r.subarray(0, s), this
                }
                equals(t) {
                    return i(t instanceof OID), b(this.value, t.value)
                }
                set(t) {
                    return null == t && (t = a), "string" == typeof t ? this.fromString(t) : Array.isArray(t) ? this.fromArray(t) : (i(t instanceof Uint32Array), this.value = t, this)
                }
                clean() {
                    return b(this.value, a)
                }
                toArray() {
                    const t = [];
                    for (let e = 0; e < this.value.length; e++) t.push(this.value[e]);
                    return t
                }
                fromArray(t) {
                    i(Array.isArray(t));
                    const e = new Uint32Array(t.length);
                    for (let r = 0; r < t.length; r++) {
                        const n = t[r];
                        i(n >>> 0 === n), e[r] = n
                    }
                    return this.value = e, this
                }
                toString() {
                    let t = "";
                    for (let e = 0; e < this.value.length; e++) e > 0 && (t += "."), t += this.value[e].toString(10);
                    return t
                }
                fromString(t) {
                    i("string" == typeof t), s.attrs.hasOwnProperty(t) ? t = s.attrs[t] : s.keyAlgs.hasOwnProperty(t) ? t = s.keyAlgs[t] : s.hashes.hasOwnProperty(t) ? t = s.hashes[t] : s.curves.hasOwnProperty(t) && (t = s.curves[t]);
                    const e = t.split("."),
                        r = new Uint32Array(e.length);
                    for (let t = 0; t < e.length; t++) {
                        const i = e[t];
                        r[t] = A(i)
                    }
                    return this.value = r, this
                }
                getAttributeName() {
                    return s.attrsByVal[this.toString()] || null
                }
                getSignatureAlgorithmName() {
                    return s.sigAlgsByVal[this.toString()] || null
                }
                getSignatureHash() {
                    return s.sigToHash[this.toString()] || null
                }
                getSignatureHashName() {
                    const t = this.getSignatureHash();
                    return t && s.hashesByVal[t] || null
                }
                getKeyAlgorithmName() {
                    return s.keyAlgsByVal[this.toString()] || null
                }
                getHashName() {
                    return s.hashesByVal[this.toString()] || null
                }
                getCurveName() {
                    return s.curvesByVal[this.toString()] || null
                }
                format() {
                    const t = this.toString(),
                        e = `${t} (${s.attrsByVal[t]||s.sigAlgsByVal[t]||s.keyAlgsByVal[t]||s.hashesByVal[t]||s.curvesByVal[t]||"UNKNOWN"})`;
                    return `<${this.constructor.name}: ${e}>`
                }
            }
            class Enum extends Integer {
                constructor(...t) {
                    super(...t)
                }
                get type() {
                    return h.ENUM
                }
            }
            class Utf8String extends l {
                constructor(...t) {
                    super(...t)
                }
                get type() {
                    return h.UTF8STRING
                }
                get encoding() {
                    return "utf8"
                }
            }
            class RawSequence extends Node {
                constructor(...t) {
                    super(), this.value = o, this.from(...t)
                }
                get type() {
                    return h.SEQUENCE
                }
                getBodySize() {
                    return this.value.length
                }
                writeBody(t) {
                    return t.writeBytes(this.value), t
                }
                readBody(t) {
                    return this.value = t.readBytes(t.left()), this
                }
                set(t) {
                    return null == t && (t = o), Array.isArray(t) ? this.fromArray(t) : (i(Buffer.isBuffer(t)), this.value = t, this)
                }
                clean() {
                    return 0 === this.value.length
                }* children() {
                    const t = n.read(this.value);
                    for (; t.left();) yield Any.read(t).node
                }
                toArray() {
                    const t = [];
                    for (const e of this.children()) t.push(e);
                    return t
                }
                fromArray(t) {
                    i(Array.isArray(t));
                    let e = 0;
                    for (const r of t) i(r instanceof Node), e += r.getSize();
                    const r = n.write(e);
                    for (const e of t) e.write(r);
                    return this.value = r.render(), this
                }
                format() {
                    return this.toArray()
                }
            }
            class RawSet extends RawSequence {
                constructor(...t) {
                    super(...t)
                }
                get type() {
                    return h.SET
                }
            }
            class NumString extends l {
                constructor(...t) {
                    super(...t)
                }
                get type() {
                    return h.NUMSTRING
                }
            }
            class PrintString extends l {
                constructor(...t) {
                    super(...t)
                }
                get type() {
                    return h.PRINTSTRING
                }
            }
            class T61String extends l {
                constructor(...t) {
                    super(...t)
                }
                get type() {
                    return h.T61STRING
                }
            }
            class IA5String extends l {
                constructor(...t) {
                    super(...t)
                }
                get type() {
                    return h.IA5STRING
                }
            }
            class Time extends Node {
                constructor(...t) {
                    super(), this.value = 0, this.offset = 0, this.from(...t)
                }
                set(t, e) {
                    return null == t && (t = 0), null == e && (e = 0), "string" == typeof t ? this.fromString(t) : (i(I(t)), i(T(e)), this.value = t, this.offset = e, this)
                }
                clean() {
                    return 0 === this.value && 0 === this.offset
                }
                unix() {
                    return this.value - this.offset
                }
                toString() {
                    return new Date(1e3 * this.value).toISOString().slice(0, -5) + P(this.offset)
                }
                fromString(t) {
                    i("string" == typeof t);
                    const e = Date.parse(t);
                    if (e != e) throw new Error("Invalid date string.");
                    const r = Math.floor(e / 1e3);
                    if (!I(r)) throw new Error("Invalid time.");
                    return this.value = r, this.offset = 0, this
                }
                format() {
                    const t = this.constructor.name,
                        e = this.value;
                    let r = this.offset.toString(10);
                    return this.offset >= 0 && (r = "+" + r), `<${t}: ${e}${r} (${this.toString()})>`
                }
            }
            class UTCTime extends Time {
                constructor(...t) {
                    super(...t)
                }
                get type() {
                    return h.UTCTIME
                }
                getBodySize() {
                    return 0 === this.offset ? 13 : 17
                }
                writeBody(t) {
                    i(I(this.value));
                    const e = new Date(1e3 * this.value);
                    let r = "";
                    return r += m(e.getUTCFullYear() % 100), r += m(e.getUTCMonth() + 1), r += m(e.getUTCDate()), r += m(e.getUTCHours()), r += m(e.getUTCMinutes()), r += m(e.getUTCSeconds()), r += P(this.offset), t.writeString(r, "binary"), t
                }
                readBody(t) {
                    const e = t.left();
                    if (13 !== e && 17 !== e) throw new Error("Invalid UTCTIME.");
                    const r = t.readString(e, "binary"),
                        i = A(r.substring(0, 2)),
                        n = A(r.substring(2, 4)),
                        s = A(r.substring(4, 6)),
                        o = A(r.substring(6, 8)),
                        u = A(r.substring(8, 10)),
                        a = A(r.substring(10, 12));
                    return this.value = z(i, n, s, o, u, a, !0), this.offset = x(r.substring(12)), this
                }
            }
            class GenTime extends Time {
                constructor(...t) {
                    super(...t)
                }
                get type() {
                    return h.GENTIME
                }
                getBodySize() {
                    return 0 === this.offset ? 15 : 19
                }
                writeBody(t) {
                    i(I(this.value));
                    const e = new Date(1e3 * this.value);
                    let r = "";
                    return r += e.getUTCFullYear().toString(10), r += m(e.getUTCMonth() + 1), r += m(e.getUTCDate()), r += m(e.getUTCHours()), r += m(e.getUTCMinutes()), r += m(e.getUTCSeconds()), r += P(this.offset), t.writeString(r, "binary"), t
                }
                readBody(t) {
                    const e = t.left();
                    if (15 !== e && 19 !== e) throw new Error("Invalid GENTIME.");
                    const r = t.readString(e, "binary"),
                        i = A(r.substring(0, 4)),
                        n = A(r.substring(4, 6)),
                        s = A(r.substring(6, 8)),
                        o = A(r.substring(8, 10)),
                        u = A(r.substring(10, 12)),
                        a = A(r.substring(12, 14));
                    return this.value = z(i, n, s, o, u, a, !1), this.offset = x(r.substring(14)), this
                }
            }
            class GenString extends l {
                constructor(...t) {
                    super(...t)
                }
                get type() {
                    return h.GENSTRING
                }
            }

            function d(t) {
                switch (i(t >>> 0 === t), t) {
                    case h.BOOLEAN:
                        return f;
                    case h.INTEGER:
                        return Integer;
                    case h.BITSTRING:
                        return BitString;
                    case h.OCTSTRING:
                        return OctString;
                    case h.NULL:
                        return Null;
                    case h.OID:
                        return OID;
                    case h.ENUM:
                        return Enum;
                    case h.UTF8STRING:
                        return Utf8String;
                    case h.SEQUENCE:
                        return RawSequence;
                    case h.SET:
                        return RawSet;
                    case h.NUMSTRING:
                        return NumString;
                    case h.PRINTSTRING:
                        return PrintString;
                    case h.T61STRING:
                        return T61String;
                    case h.IA5STRING:
                        return IA5String;
                    case h.UTCTIME:
                        return UTCTime;
                    case h.GENTIME:
                        return GenTime;
                    case h.GENSTRING:
                        return GenString;
                    default:
                        throw new Error(`Unknown type: ${t}.`)
                }
            }

            function g(t) {
                return i(t >>> 0 === t), t <= 127 ? 2 : t <= 255 ? 3 : t <= 65535 ? 4 : (i(t <= 16777215), 5)
            }

            function p(t, e, r, n, s) {
                return i(t), i(e >>> 0 === e), i(r >>> 0 === r), i("boolean" == typeof n), i(s >>> 0 === s), n || (e |= 32), e |= r << 6, s <= 127 ? (t.writeU8(e), t.writeU8(s), t) : s <= 255 ? (t.writeU8(e), t.writeU8(129), t.writeU8(s), t) : s <= 65535 ? (t.writeU8(e), t.writeU8(130), t.writeU16BE(s), t) : (i(s <= 16777215), t.writeU8(e), t.writeU8(131), t.writeU24BE(s), t)
            }

            function y(t) {
                const e = t.offset,
                    r = t.readU8(),
                    i = r >>> 6,
                    n = 0 == (32 & r);
                let s = 31 & r;
                if (31 === s && ([s, t.offset] = S(t.data, t.offset), s < 31)) throw new Error("Non-minimal type.");
                switch (i) {
                    case c.UNIVERSAL:
                    case c.CONTEXT:
                        break;
                    default:
                        throw new Error("Unknown class.")
                }
                const o = function(t) {
                    const e = t.readU8(),
                        r = 127 & e;
                    if (0 == (128 & e)) return r;
                    if (0 === r) throw new Error("Indefinite length.");
                    let i = 0;
                    for (let e = 0; e < r; e++) {
                        const e = t.readU8();
                        if (i >= 1 << 23) throw new Error("Length too large.");
                        if (i *= 256, i += e, 0 === i) throw new Error("Unexpected leading zeroes.")
                    }
                    if (i < 128) throw new Error("Non-minimal length.");
                    return i
                }(t);
                return {
                    type: s,
                    cls: i,
                    primitive: n,
                    size: o,
                    len: t.offset - e
                }
            }

            function B(t, e) {
                const r = t.offset;
                let i = null,
                    n = null;
                try {
                    i = y(t)
                } catch (t) {
                    n = t
                }
                if (t.offset = r, !e && !i) throw n;
                return i
            }

            function E(t) {
                if (i(t >>> 0 === t), 0 === t) return 1;
                let e = 0;
                for (; t > 0;) e += 1, t >>>= 7;
                return e
            }

            function w(t, e, r) {
                i(Buffer.isBuffer(t)), i(e >>> 0 === e), i(r >>> 0 === r);
                for (let i = E(e) - 1; i >= 0; i--) {
                    let s = e >>> 7 * i;
                    if (s &= 127, 0 !== i && (s |= 128), r >= t.length) throw new n.EncodingError(r, "Out of bounds write");
                    t[r] = s, r += 1
                }
                return r
            }

            function S(t, e) {
                i(Buffer.isBuffer(t)), i(e >>> 0 === e);
                let r = 0,
                    n = 0;
                for (; e < t.length; r++) {
                    if (5 === r) throw new Error("Base128 integer too large.");
                    const i = t[e];
                    if (n *= 128, n += 127 & i, e += 1, 0 == (128 & i)) {
                        if (n > 4294967295) throw new Error("Base128 integer too large.");
                        return [n, e]
                    }
                }
                throw new Error("Base128 integer too short.")
            }

            function m(t) {
                return t < 10 ? "0" + t.toString(10) : t.toString(10)
            }

            function A(t) {
                i("string" == typeof t);
                let e = 0;
                if (0 === t.length || t.length > 10) throw new Error("Invalid integer.");
                for (let r = 0; r < t.length; r++) {
                    const i = t.charCodeAt(r) - 48;
                    if (i < 0 || i > 9) throw new Error("Invalid integer.");
                    if (e *= 10, e += i, e > 4294967295) throw new Error("Invalid integer.")
                }
                return e
            }

            function b(t, e) {
                if (i(t instanceof Uint32Array), i(e instanceof Uint32Array), t.length !== e.length) return !1;
                for (let r = 0; r < t.length; r++)
                    if (t[r] !== e[r]) return !1;
                return !0
            }

            function v(t) {
                if (i(Buffer.isBuffer(t)), 0 === t.length) return Buffer.from([0]);
                if (0 !== t[0]) return t;
                for (let e = 1; e < t.length; e++)
                    if (0 !== t[e]) return t.slice(e);
                return t.slice(-1)
            }

            function K(t, e, r) {
                i(Buffer.isBuffer(t)), i(e >>> 0 === e), i(r >>> 0 === r), i(e <= r);
                let n = 1;
                for (let i = r - 1; i >= e; i--) n += 255 ^ t[i], t[i] = 255 & n, n >>>= 8;
                return t
            }

            function I(t) {
                return !!Number.isSafeInteger(t) && !(t < -62167219200 || t > 253402300799)
            }

            function z(t, e, r, n, s, o, u) {
                if (i(t >>> 0 === t), i(e >>> 0 === e), i(r >>> 0 === r), i(n >>> 0 === n), i(s >>> 0 === s), i(o >>> 0 === o), i("boolean" == typeof u), u && (t = t < 70 ? 2e3 + t : 1900 + t), t > 275760) throw new Error("Invalid year.");
                if (e < 1 || e > 12 || r < 1 || r > 32) throw new Error("Invalid month or day.");
                if (n > 23 || s > 59 || o > 59) throw new Error("Invalid hours, minutes, or seconds.");
                const a = Date.UTC(t, e - 1, r, n, s, o, 0);
                i(a == a);
                const h = a / 1e3;
                return i(I(h)), h
            }

            function T(t) {
                return !!Number.isSafeInteger(t) && !(t < -43200 || t > 50400)
            }

            function P(t) {
                if (i(T(t)), 0 === t) return "Z";
                let e = "";
                t < 0 ? (e += "-", t = -t) : e += "+";
                const r = t / 60 >>> 0,
                    n = r % 60;
                return e += m(r / 60 >>> 0), e += m(n), e
            }

            function x(t) {
                if (i("string" == typeof t), 0 === t.length) throw new Error("Invalid time offset.");
                const e = t[0];
                switch (e) {
                    case "Z":
                        if (1 !== t.length) throw new Error("Non-minimal time offset.");
                        return 0;
                    case "+":
                    case "-": {
                        if (5 !== t.length) throw new Error("Non-minimal time offset.");
                        let r = 60 * (60 * A(t.substring(1, 3)) + A(t.substring(3, 5)));
                        if ("-" === e && (r = -r), !T(r)) throw new Error("Not a time zone.");
                        return r
                    }
                }
                throw new Error("Invalid time offset.")
            }
            e.EMPTY = o, e.ZERO = u, e.EMPTY_OID = a, e.types = h, e.typesByVal = {
                1: "BOOLEAN",
                2: "INTEGER",
                3: "BITSTRING",
                4: "OCTSTRING",
                5: "NULL",
                6: "OID",
                10: "ENUM",
                12: "UTF8STRING",
                16: "SEQUENCE",
                17: "SET",
                18: "NUMSTRING",
                19: "PRINTSTRING",
                20: "T61STRING",
                22: "IA5STRING",
                23: "UTCTIME",
                24: "GENTIME",
                27: "GENSTRING"
            }, e.classes = c, e.classesByVal = {
                0: "UNIVERSAL",
                1: "APPLICATION",
                2: "CONTEXT",
                3: "PRIVATE"
            }, e.objects = s, e.TARGET = 255, e.OPTIONAL = 256, e.MODE = 130560, e.NORMAL = 0, e.EXPLICIT = 512, e.IMPLICIT = 1024, e.Node = Node, e.Sequence = class Sequence extends Node {
                constructor(...t) {
                    super(), this.raw = null, this.from(...t)
                }
                get type() {
                    return h.SEQUENCE
                }
            }, e.Set = class Set extends Node {
                constructor(...t) {
                    super(), this.raw = null, this.from(...t)
                }
                get type() {
                    return h.SET
                }
            }, e.Any = Any, e.Choice = class Choice extends Node {
                constructor(t, ...e) {
                    super(), i(t instanceof Node), this.node = t, this.from(...e)
                }
                get type() {
                    return this.node.type
                }
                choices() {
                    throw new Error("Unimplemented.")
                }
                getSize(t) {
                    return this.node.getSize(t)
                }
                write(t, e) {
                    return i(t), this.node.flags = this.flags, this.node.write(t, e), t
                }
                read(t, e) {
                    i(t);
                    const r = this.choices();
                    i(Array.isArray(r)), i(r.length >= 1);
                    const n = B(t, this.opt);
                    if (!n) return this;
                    if (-1 === r.indexOf(n.type)) throw new Error(`Could not satisfy choice for: ${n.type}.`);
                    const s = new(d(n.type));
                    return s.flags = this.flags, this.node = s.read(t, e), this
                }
                getBodySize(t) {
                    return this.node.getBodySize(t)
                }
                writeBody(t, e) {
                    return this.node.writeBody(t, e), t
                }
                readBody(t, e) {
                    return this.node.readBody(t, e), this
                }
                set(...t) {
                    return this.node.set(...t)
                }
                clean() {
                    return this.node.clean()
                }
                format() {
                    return {
                        type: this.constructor.name,
                        node: this.node
                    }
                }
            }, e.Str = l, e.String = l, e.Bool = f, e.Boolean = f, e.Integer = Integer, e.Unsigned = class Unsigned extends Integer {
                constructor(...t) {
                    super(...t)
                }
                getBodySize() {
                    return i(!this.negative), super.getBodySize()
                }
                writeBody(t) {
                    return i(!this.negative), super.writeBody(t)
                }
                readBody(t, e = !1) {
                    return super.readBody(t, e), i(!this.negative), this
                }
                set(t) {
                    return super.set(t)
                }
                toNumber() {
                    return i(!this.negative), super.toNumber()
                }
                fromNumber(t) {
                    return super.fromNumber(t), i(!this.negative), this
                }
            }, e.BitString = BitString, e.OctString = OctString, e.Null = Null, e.OID = OID, e.Enum = Enum, e.Utf8String = Utf8String, e.RawSequence = RawSequence, e.RawSet = RawSet, e.NumString = NumString, e.PrintString = PrintString, e.T61String = T61String, e.IA5String = IA5String, e.Time = Time, e.UTCTime = UTCTime, e.GenTime = GenTime, e.GenString = GenString, e.typeToClass = d
        },
        5658: function(t, e, r) {
            "use strict";
            const i = r(5466),
                n = Buffer.alloc(1, 0),
                s = [];

            function o(t) {
                if (null == t) return n;
                i(Buffer.isBuffer(t));
                let e = 0;
                for (; e < t.length && 0 === t[e]; e++);
                return 0 !== e && (t = t.slice(e)), 0 === t.length ? n : t
            }

            function u(t) {
                if (null == t) return n;
                i(Buffer.isBuffer(t));
                let e = t.length - 1;
                for (; e >= 0 && 0 === t[e]; e--);
                return e + 1 !== t.length && (t = t.slice(0, e + 1)), 0 === t.length ? n : t
            }

            function a(t) {
                for (i(t >>> 0 === t), i(t <= 128); s.length <= t;) s.push(null);
                let e = s[t];
                return e || (e = Buffer.alloc(t, 0), s[t] = e), e
            }
            e.countLeft = function(t) {
                i(Buffer.isBuffer(t));
                let e = 0;
                for (; e < t.length && 0 === t[e]; e++);
                let r = 8 * (t.length - e);
                if (0 === r) return 0;
                r -= 8;
                let n = t[e];
                for (; n;) r += 1, n >>>= 1;
                return r
            }, e.countRight = function(t) {
                i(Buffer.isBuffer(t));
                let e = t.length - 1;
                for (; e >= 0 && 0 === t[e]; e--);
                let r = 8 * (e + 1);
                if (0 === r) return 0;
                r -= 8;
                let n = t[e];
                for (; n;) r += 1, n >>>= 1;
                return r
            }, e.compareLeft = function(t, e) {
                i(Buffer.isBuffer(t)), i(Buffer.isBuffer(e));
                let r = 0,
                    n = t.length,
                    s = 0,
                    o = e.length;
                for (; n > 0 && 0 === t[r];) r++, n--;
                for (; o > 0 && 0 === e[s];) s++, o--;
                if (n < o) return -1;
                if (n > o) return 1;
                for (let i = 0; i < n; i++) {
                    if (t[r + i] < e[s + i]) return -1;
                    if (t[r + i] > e[s + i]) return 1
                }
                return 0
            }, e.compareRight = function(t, e) {
                i(Buffer.isBuffer(t)), i(Buffer.isBuffer(e));
                let r = t.length,
                    n = e.length;
                for (; r > 0 && 0 === t[r - 1];) r--;
                for (; n > 0 && 0 === e[n - 1];) n--;
                if (r < n) return -1;
                if (r > n) return 1;
                for (let i = r - 1; i >= 0; i--) {
                    if (t[i] < e[i]) return -1;
                    if (t[i] > e[i]) return 1
                }
                return 0
            }, e.trimLeft = o, e.trimRight = u, e.padLeft = function(t, e) {
                if (null == t) return a(e);
                if (i(Buffer.isBuffer(t)), i(e >>> 0 === e), t.length > e && (t = o(t)), t.length > e) throw new RangeError(`Buffer expected to be ${e} bytes in size.`);
                if (t.length === e) return t;
                const r = Buffer.allocUnsafe(e),
                    n = e - t.length;
                return r.fill(0, 0, n), t.copy(r, n), r
            }, e.padRight = function(t, e) {
                if (null == t) return a(e);
                if (i(Buffer.isBuffer(t)), i(e >>> 0 === e), t.length > e && (t = u(t)), t.length > e) throw new RangeError(`Buffer expected to be ${e} bytes in size.`);
                if (t.length === e) return t;
                const r = Buffer.allocUnsafe(e);
                return t.copy(r, 0), r.fill(0, t.length, e), r
            }
        },
        5676: function(t, e, r) {
            "use strict";
            const i = r(5466),
                n = r(5797),
                s = r(7487),
                o = Buffer.alloc(0);
            class PEMBlock {
                constructor(t, e) {
                    null == t && (t = "PRIVACY-ENHANCED MESSAGE"), null == e && (e = o), i("string" == typeof t), i(Buffer.isBuffer(e)), this.type = t, this.headers = new Map, this.data = e
                }
                toString(t) {
                    return u(this.type, this.headers, this.data, t)
                }
                fromString(t, e) {
                    const r = a(t, e).next();
                    if (r.done) throw new Error("No PEM data found.");
                    const i = r.value;
                    return this.type = i.type, this.headers = i.headers, this.data = i.data, this
                }
                getProcType() {
                    const t = this.headers.get("Proc-Type");
                    return t ? ProcType.fromString(t) : null
                }
                setProcType(t, e) {
                    i(null != t && e);
                    const r = new ProcType(t, e);
                    return this.headers.set("Proc-Type", r.toString()), this
                }
                unsetProcType() {
                    return this.headers.delete("Proc-Type"), this
                }
                getDEKInfo() {
                    const t = this.headers.get("DEK-Info");
                    return t ? DEKInfo.fromString(t) : null
                }
                setDEKInfo(t, e) {
                    i(t);
                    const r = new DEKInfo(t, e);
                    return this.headers.set("DEK-Info", r.toString()), this
                }
                unsetDEKInfo() {
                    return this.headers.delete("DEK-Info"), this
                }
                isEncrypted() {
                    let t;
                    try {
                        t = this.getProcType()
                    } catch (t) {
                        return !1
                    }
                    return !!t && (4 === t.version && "ENCRYPTED" === t.state)
                }
                static fromString(t, e) {
                    return (new this).fromString(t, e)
                }
            }
            class ProcType {
                constructor(t, e) {
                    null == t && (t = 0), null == e && (e = "NONE"), i(t >>> 0 === t), i("string" == typeof e), this.version = t, this.state = e.toUpperCase()
                }
                toString() {
                    return `${this.version},${this.state}`
                }
                fromString(t) {
                    i("string" == typeof t);
                    const e = t.split(",", 3);
                    if (2 !== e.length) throw new Error("Invalid Proc-Type.");
                    return this.version = function(t) {
                        if (i("string" == typeof t), t.length < 1 || t.length > 10) throw new Error("Invalid integer.");
                        let e = 0;
                        for (let r = 0; r < t.length; r++) {
                            const i = t.charCodeAt(r);
                            if (i < 48 || i > 57) throw new Error("Invalid integer.");
                            if (e *= 10, e += i - 48, r > 0 && 0 === e) throw new Error("Invalid integer.");
                            if (e > 4294967295) throw new Error("Invalid integer.")
                        }
                        return e
                    }(e[0]), this.state = e[1].toUpperCase(), this
                }
                static fromString(t) {
                    return (new this).fromString(t)
                }
            }
            class DEKInfo {
                constructor(t, e) {
                    null == t && (t = "AES-128-ECB"), null == e && (e = o), i("string" == typeof t), i(Buffer.isBuffer(e)), this.name = t.toUpperCase(), this.iv = e
                }
                toString() {
                    const t = this.name;
                    if (0 === this.iv.length) return t;
                    return `${t},${this.iv.toString("hex").toUpperCase()}`
                }
                fromString(t) {
                    i("string" == typeof t);
                    const e = t.split(",", 3);
                    if (e.length < 1 || e.length > 2) throw new Error("Invalid DEK-Info.");
                    const r = e[0];
                    if (0 === r.length) throw new Error("Invalid DEK-Info name.");
                    if (this.name = r.toUpperCase(), this.iv = o, e.length > 1) {
                        const t = e[1],
                            r = Buffer.from(t, "hex");
                        if (r.length !== t.length >>> 1) throw new Error("Invalid DEK-Info IV.");
                        this.iv = r
                    }
                    return this
                }
                static fromString(t) {
                    return (new this).fromString(t)
                }
            }

            function u(t, e, r, s = !1) {
                i("string" == typeof t), i(e instanceof Map), i(Buffer.isBuffer(r)), i("boolean" == typeof s);
                let o = "";
                if (o += `-----BEGIN ${t}-----\n`, e.size > 0) {
                    for (const [t, r] of e) o += `${t}: ${r}\n`;
                    o += "\n"
                }
                const u = n.encode(r);
                for (let t = 0; t < u.length; t += 64) o += u.substring(t, t + 64) + "\n";
                if (s) {
                    const t = h(r);
                    o += `=${n.encode(t)}\n`
                }
                return o += `-----END ${t}-----\n`, o
            }

            function* a(t, e = !1) {
                i("string" == typeof t), i("boolean" == typeof e);
                let r = "",
                    o = null,
                    u = null;
                for (const [, i] of s(t)) {
                    const t = i.indexOf(":");
                    if (-1 === t) {
                        if (i.length >= 15 && "-----" === i.substring(0, 5)) {
                            if ("-----" !== i.slice(-5)) throw new Error("PEM parse error (invalid preamble).");
                            const t = i.slice(5, -5);
                            if ("BEGIN " === t.substring(0, 6)) {
                                if (o) throw new Error("PEM parse error (un-ended block).");
                                const e = t.substring(6).trim();
                                o = new PEMBlock, o.type = e;
                                continue
                            }
                            if ("END " === t.substring(0, 4)) {
                                if (!o) throw new Error("PEM parse error (unexpected end).");
                                const e = t.substring(4).trim();
                                if (o.type !== e) throw new Error("PEM parse error (type mismatch).");
                                if (o.data = n.decode(r), u && !h(o.data).equals(u)) throw new Error("PEM parse error (invalid armor checksum).");
                                yield o, r = "", o = null, u = null;
                                continue
                            }
                            throw new Error("PEM parse error (unknown preamble).")
                        }
                        if (!o) throw new Error("PEM parse error (unexpected data).");
                        if (5 !== i.length || 61 !== i.charCodeAt(0)) {
                            if (i.length > 96) throw new Error("PEM parse error (line too long).");
                            r += i.replace(/[\t\v ]/g, "")
                        } else {
                            if (!e) continue;
                            if (u) throw new Error("PEM parse error (unexpected armor checksum).");
                            u = n.decode(i.substring(1))
                        }
                    } else {
                        if (!o) throw new Error("PEM parse error (misplaced header).");
                        const e = i.substring(0, t).trim(),
                            r = i.substring(t + 1).trim();
                        o.headers.set(e, r)
                    }
                }
                if (o || u) throw new Error("PEM parse error (un-ended block).");
                if (0 !== r.length) throw new Error("PEM parse error (trailing data).")
            }

            function h(t) {
                i(Buffer.isBuffer(t));
                let e = 11994318;
                for (let r = 0; r < t.length; r++) {
                    e ^= t[r] << 16;
                    for (let t = 0; t < 8; t++) e <<= 1, 16777216 & e && (e ^= 25578747)
                }
                e &= 16777215;
                const r = Buffer.allocUnsafe(3);
                return r[2] = e, e >>>= 8, r[1] = e, e >>>= 8, r[0] = e, r
            }
            e.PEMBlock = PEMBlock, e.ProcType = ProcType, e.DEKInfo = DEKInfo, e.encode = u, e.decode = a, e.toPEM = function(t, e, r) {
                i(Buffer.isBuffer(t)), i("string" == typeof e);
                const n = new PEMBlock;
                return n.type = e, n.data = t, n.toString(r)
            }, e.fromPEM = function(t, e, r) {
                i("string" == typeof t), i("string" == typeof e);
                const n = PEMBlock.fromString(t, r);
                if (n.type !== e) throw new Error("PEM type mismatch.");
                return n.data
            }
        },
        5797: function(t, e, r) {
            "use strict";
            const i = r(5466);

            function n(t) {
                return i(Buffer.isBuffer(t)), t.toString("base64")
            }

            function s(t) {
                if (i("string" == typeof t), /[\-_]/.test(t)) throw new Error("Invalid base64 string.");
                const e = Buffer.from(t, "base64");
                if (t.length !== (4 * e.length / 3 + 3 & -4) >>> 0) throw new Error("Invalid base64 string.");
                return e
            }

            function o(t) {
                if (i("string" == typeof t), /[=\+\/]/.test(t)) throw new Error("Invalid base64-url string.");
                return s(function(t) {
                    switch (3 & t.length) {
                        case 2:
                            t += "==";
                            break;
                        case 3:
                            t += "="
                    }
                    return t
                }(t).replace(/\-/g, "+").replace(/_/g, "/"))
            }
            e.encode = n, e.decode = s, e.test = function(t) {
                i("string" == typeof t);
                try {
                    return s(t), !0
                } catch (t) {
                    return !1
                }
            }, e.encodeURL = function(t) {
                return n(t).replace(/=/g, "").replace(/\+/g, "-").replace(/\//g, "_")
            }, e.decodeURL = o, e.testURL = function(t) {
                i("string" == typeof t);
                try {
                    return o(t), !0
                } catch (t) {
                    return !1
                }
            }
        },
        5798: function(t, e, r) {
            "use strict";
            let i = process.env.NODE_BACKEND || "native";
            switch (process.env.BCRYPTO_FORCE_GMP ? i = "native" : process.env.BCRYPTO_FORCE_BIGINT && (i = "node"), i) {
                case "native":
                    try {
                        t.exports = r(9985);
                        break
                    } catch (t) {}
                case "node":
                    try {
                        t.exports = r(6657);
                        break
                    } catch (t) {}
                default:
                    t.exports = r(6657)
            }
        },
        5866: function(t, e, r) {
            "use strict";
            const i = r(5466),
                n = r(5637),
                s = r(5676),
                {
                    types: o
                } = n;
            class Certificate extends n.Sequence {
                constructor() {
                    super(), this.tbsCertificate = new TBSCertificate, this.signatureAlgorithm = new AlgorithmIdentifier, this.signature = new n.BitString
                }
                get isRaw() {
                    return !0
                }
                getBodySize() {
                    let t = 0;
                    return t += this.tbsCertificate.getSize(), t += this.signatureAlgorithm.getSize(), t += this.signature.getSize(), t
                }
                writeBody(t) {
                    return this.tbsCertificate.write(t), this.signatureAlgorithm.write(t), this.signature.write(t), t
                }
                readBody(t) {
                    return this.tbsCertificate.read(t), this.signatureAlgorithm.read(t), this.signature.read(t), this
                }
                clean() {
                    return this.tbsCertificate.clean() && this.signatureAlgorithm.clean() && this.signature.clean()
                }
                toPEM() {
                    return s.toPEM(this.encode(), "CERTIFICATE")
                }
                fromPEM(t) {
                    const e = s.fromPEM(t, "CERTIFICATE");
                    return this.decode(e)
                }
                format() {
                    return {
                        type: this.constructor.name,
                        tbsCertificate: this.tbsCertificate,
                        signatureAlgorithm: this.signatureAlgorithm,
                        signature: this.signature
                    }
                }
            }
            class TBSCertificate extends n.Sequence {
                constructor() {
                    super(), this.version = (new n.Unsigned).explicit(0).optional(), this.serialNumber = new n.Integer, this.signature = new AlgorithmIdentifier, this.issuer = new RDNSequence, this.validity = new Validity, this.subject = new RDNSequence, this.subjectPublicKeyInfo = new SubjectPublicKeyInfo, this.issuerUniqueID = (new n.BitString).implicit(1).optional(), this.subjectUniqueID = (new n.BitString).implicit(2).optional(), this.extensions = (new Extensions).explicit(3).optional()
                }
                get isRaw() {
                    return !0
                }
                getBodySize() {
                    let t = 0;
                    return t += this.version.getSize(), t += this.serialNumber.getSize(), t += this.signature.getSize(), t += this.issuer.getSize(), t += this.validity.getSize(), t += this.subject.getSize(), t += this.subjectPublicKeyInfo.getSize(), t += this.issuerUniqueID.getSize(), t += this.subjectUniqueID.getSize(), t += this.extensions.getSize(), t
                }
                writeBody(t) {
                    return this.version.write(t), this.serialNumber.write(t), this.signature.write(t), this.issuer.write(t), this.validity.write(t), this.subject.write(t), this.subjectPublicKeyInfo.write(t), this.issuerUniqueID.write(t), this.subjectUniqueID.write(t), this.extensions.write(t), t
                }
                readBody(t) {
                    return this.version.read(t), this.serialNumber.read(t), this.signature.read(t), this.issuer.read(t), this.validity.read(t), this.subject.read(t), this.subjectPublicKeyInfo.read(t), this.issuerUniqueID.read(t), this.subjectUniqueID.read(t), this.extensions.read(t), this
                }
                clean() {
                    return this.version.clean() && this.serialNumber.clean() && this.signature.clean() && this.issuer.clean() && this.validity.clean() && this.subject.clean() && this.subjectPublicKeyInfo.clean() && this.issuerUniqueID.clean() && this.subjectUniqueID.clean() && this.extensions.clean()
                }
                toPEM() {
                    return s.toPEM(this.encode(), "TBS CERTIFICATE")
                }
                fromPEM(t) {
                    const e = s.fromPEM(t, "TBS CERTIFICATE");
                    return this.decode(e)
                }
                format() {
                    return {
                        type: this.constructor.name,
                        version: this.version,
                        serialNumber: this.serialNumber,
                        signature: this.signature,
                        issuer: this.issuer,
                        validity: this.validity,
                        subject: this.subject,
                        subjectPublicKeyInfo: this.subjectPublicKeyInfo,
                        issuerUniqueID: this.issuerUniqueID,
                        subjectUniqueID: this.subjectUniqueID,
                        extensions: this.extensions
                    }
                }
            }
            class AlgorithmIdentifier extends n.Sequence {
                constructor(t, e) {
                    super(), this.algorithm = new n.OID(t), this.parameters = new n.Any(e).optional()
                }
                getBodySize() {
                    let t = 0;
                    return t += this.algorithm.getSize(), t += this.parameters.getSize(), t
                }
                writeBody(t) {
                    return this.algorithm.write(t), this.parameters.write(t), t
                }
                readBody(t) {
                    return this.algorithm.read(t), this.parameters.read(t), this
                }
                clean() {
                    return this.algorithm.clean() && this.parameters.clean()
                }
                format() {
                    return {
                        type: this.constructor.name,
                        algorithm: this.algorithm,
                        parameters: this.parameters
                    }
                }
            }
            class RDNSequence extends n.Sequence {
                constructor() {
                    super(), this.names = []
                }
                getBodySize() {
                    let t = 0;
                    for (const e of this.names) t += e.getSize();
                    return t
                }
                writeBody(t) {
                    for (const e of this.names) e.write(t);
                    return t
                }
                readBody(t) {
                    for (; t.left();) {
                        const e = RDN.read(t);
                        this.names.push(e)
                    }
                    return this
                }
                clean() {
                    return 0 === this.names.length
                }
                format() {
                    return {
                        type: this.constructor.name,
                        names: this.names
                    }
                }
            }
            class RDN extends n.Set {
                constructor(t, e) {
                    super(), this.attributes = [new Attribute(t, e)]
                }
                getBodySize() {
                    let t = 0;
                    i(this.attributes.length >= 1);
                    for (const e of this.attributes) t += e.getSize();
                    return t
                }
                writeBody(t) {
                    i(this.attributes.length >= 1);
                    for (const e of this.attributes) e.write(t);
                    return t
                }
                readBody(t) {
                    for (this.attributes[0].read(t); t.left();) {
                        const e = Attribute.read(t);
                        this.attributes.push(e)
                    }
                    return this
                }
                clean() {
                    return 1 === this.attributes.length && this.attributes[0].clean()
                }
                format() {
                    return {
                        type: this.constructor.name,
                        attributes: this.attributes
                    }
                }
            }
            class Attribute extends n.Sequence {
                constructor(t, e) {
                    super(), this.id = new n.OID(t), this.value = new n.Any(e)
                }
                getBodySize() {
                    let t = 0;
                    return t += this.id.getSize(), t += this.value.getSize(), t
                }
                writeBody(t) {
                    return this.id.write(t), this.value.write(t), t
                }
                readBody(t) {
                    return this.id.read(t), this.value.read(t), this
                }
                clean() {
                    return this.id.clean() && this.value.clean()
                }
                format() {
                    return {
                        type: this.constructor.name,
                        id: this.id,
                        value: this.value
                    }
                }
            }
            class Validity extends n.Sequence {
                constructor() {
                    super(), this.notBefore = new Time, this.notAfter = new Time
                }
                getBodySize() {
                    let t = 0;
                    return t += this.notBefore.getSize(), t += this.notAfter.getSize(), t
                }
                writeBody(t) {
                    return this.notBefore.write(t), this.notAfter.write(t), t
                }
                readBody(t) {
                    return this.notBefore.read(t), this.notAfter.read(t), this
                }
                clean() {
                    return this.notBefore.clean() && this.notAfter.clean()
                }
                format() {
                    return {
                        type: this.constructor.name,
                        notBefore: this.notBefore,
                        notAfter: this.notAfter
                    }
                }
            }
            class Time extends n.Choice {
                constructor(t) {
                    super(new n.UTCTime, t)
                }
                choices() {
                    return [o.UTCTIME, o.GENTIME]
                }
            }
            class SubjectPublicKeyInfo extends n.Sequence {
                constructor(t, e, r) {
                    super(), this.algorithm = new AlgorithmIdentifier(t, e), this.publicKey = new n.BitString(r)
                }
                get isRaw() {
                    return !0
                }
                getBodySize() {
                    let t = 0;
                    return t += this.algorithm.getSize(), t += this.publicKey.getSize(), t
                }
                writeBody(t) {
                    return this.algorithm.write(t), this.publicKey.write(t), t
                }
                readBody(t) {
                    return this.algorithm.read(t), this.publicKey.read(t), this
                }
                clean() {
                    return this.algorithm.clean() && this.publicKey.clean()
                }
                toPEM() {
                    return s.toPEM(this.encode(), "PUBLIC KEY")
                }
                fromPEM(t) {
                    const e = s.fromPEM(t, "PUBLIC KEY");
                    return this.decode(e)
                }
                format() {
                    return {
                        type: this.constructor.name,
                        algorithm: this.algorithm,
                        publicKey: this.publicKey
                    }
                }
            }
            class Extensions extends n.Sequence {
                constructor() {
                    super(), this.extensions = []
                }
                getBodySize() {
                    let t = 0;
                    for (const e of this.extensions) t += e.getSize();
                    return t
                }
                writeBody(t) {
                    for (const e of this.extensions) e.write(t);
                    return t
                }
                readBody(t) {
                    for (const e of this.extensions) e.read(t);
                    return this
                }
                clean() {
                    return 0 === this.extensions.length
                }
                format() {
                    return {
                        type: this.constructor.name,
                        extensions: this.extensions
                    }
                }
            }
            class Extension extends n.Sequence {
                constructor() {
                    super(), this.extnID = new n.OID, this.critical = (new n.Bool).optional(), this.extnValue = new n.OctString
                }
                getBodySize() {
                    let t = 0;
                    return t += this.extnID.getSize(), t += this.critical.getSize(), t += this.extnValue.getSize(), t
                }
                writeBody(t) {
                    return this.extnID.write(t), this.critical.write(t), this.extnValue.write(t), t
                }
                readBody(t) {
                    return this.extnID.read(t), this.critical.read(t), this.extnValue.read(t), this
                }
                clean() {
                    return this.extnID.clean() && this.critical.clean() && this.extnValue.clean()
                }
                format() {
                    return {
                        type: this.constructor.name,
                        extnID: this.extnID,
                        critical: this.critical,
                        extnValue: this.extnValue
                    }
                }
            }
            class DigestInfo extends n.Sequence {
                constructor(t, e) {
                    super(), this.algorithm = new AlgorithmIdentifier(t), this.algorithm.parameters.optional(!1), this.digest = new n.OctString(e)
                }
                getBodySize() {
                    let t = 0;
                    return t += this.algorithm.getSize(), t += this.digest.getSize(), t
                }
                writeBody(t) {
                    return this.algorithm.write(t), this.digest.write(t), t
                }
                readBody(t) {
                    return this.algorithm.read(t), this.digest.read(t), this
                }
                clean() {
                    return this.algorithm.clean() && this.digest.clean()
                }
                format() {
                    return {
                        type: this.constructor.name,
                        algorithm: this.algorithm,
                        digest: this.digest
                    }
                }
            }
            e.Certificate = Certificate, e.TBSCertificate = TBSCertificate, e.AlgorithmIdentifier = AlgorithmIdentifier, e.RDNSequence = RDNSequence, e.RDN = RDN, e.Attribute = Attribute, e.Validity = Validity, e.Time = Time, e.SubjectPublicKeyInfo = SubjectPublicKeyInfo, e.Extensions = Extensions, e.Extension = Extension, e.DigestInfo = DigestInfo
        },
        5954: function(t, e, r) {
            "use strict";
            const i = r(5637),
                n = r(5676),
                s = r(5866);
            class PublicKeyInfo extends i.Sequence {
                constructor(t, e, r) {
                    super(), this.algorithm = new s.AlgorithmIdentifier(t, e), this.publicKey = new i.BitString(r)
                }
                getBodySize() {
                    let t = 0;
                    return t += this.algorithm.getSize(), t += this.publicKey.getSize(), t
                }
                writeBody(t) {
                    return this.algorithm.write(t), this.publicKey.write(t), t
                }
                readBody(t) {
                    return this.algorithm.read(t), this.publicKey.read(t), this
                }
                clean() {
                    return this.algorithm.clean() && this.publicKey.clean()
                }
                toPEM() {
                    return n.toPEM(this.encode(), "PUBLIC KEY")
                }
                fromPEM(t) {
                    const e = n.fromPEM(t, "PUBLIC KEY");
                    return this.decode(e)
                }
                format() {
                    return {
                        type: this.constructor.name,
                        algorithm: this.algorithm,
                        publicKey: this.publicKey
                    }
                }
            }
            class PrivateKeyInfo extends i.Sequence {
                constructor(t, e, r, n) {
                    super(), this.version = new i.Unsigned(t), this.algorithm = new s.AlgorithmIdentifier(e, r), this.privateKey = new i.OctString(n)
                }
                get isRaw() {
                    return !0
                }
                getBodySize() {
                    let t = 0;
                    return t += this.version.getSize(), t += this.algorithm.getSize(), t += this.privateKey.getSize(), t
                }
                writeBody(t) {
                    return this.version.write(t), this.algorithm.write(t), this.privateKey.write(t), t
                }
                readBody(t) {
                    return this.version.read(t), this.algorithm.read(t), this.privateKey.read(t), this
                }
                clean() {
                    return this.version.clean() && this.algorithm.clean() && this.privateKey.clean()
                }
                toPEM() {
                    return n.toPEM(this.encode(), "PRIVATE KEY")
                }
                fromPEM(t) {
                    const e = n.fromPEM(t, "PRIVATE KEY");
                    return this.decode(e)
                }
                format() {
                    return {
                        type: this.constructor.name,
                        version: this.version,
                        algorithm: this.algorithm,
                        privateKey: this.privateKey
                    }
                }
            }
            class EncryptedPrivateKeyInfo extends i.Sequence {
                constructor(t, e, r) {
                    super(), this.algorithm = new s.AlgorithmIdentifier(t, e), this.data = new i.OctString(r)
                }
                getBodySize() {
                    let t = 0;
                    return t += this.algorithm.getSize(), t += this.data.getSize(), t
                }
                writeBody(t) {
                    return this.algorithm.write(t), this.data.write(t), t
                }
                readBody(t) {
                    return this.algorithm.read(t), this.data.read(t), this
                }
                clean() {
                    return this.algorithm.clean() && this.data.clean()
                }
                toPEM() {
                    return n.toPEM(this.encode(), "ENCRYPTED PRIVATE KEY")
                }
                fromPEM(t) {
                    const e = n.fromPEM(t, "ENCRYPTED PRIVATE KEY");
                    return this.decode(e)
                }
                format() {
                    return {
                        type: this.constructor.name,
                        algorithm: this.algorithm,
                        data: this.data
                    }
                }
            }
            e.PublicKeyInfo = PublicKeyInfo, e.PrivateKeyInfo = PrivateKeyInfo, e.EncryptedPrivateKeyInfo = EncryptedPrivateKeyInfo
        },
        6083: function(t, e, r) {
            "use strict";
            e.AEAD = r(9964), e.aes = r(9966), e.bcrypt = r(7474), e.BLAKE2b = r(6085), e.BLAKE2b160 = r(9970), e.BLAKE2b256 = r(9971), e.BLAKE2b384 = r(9972), e.BLAKE2b512 = r(9973), e.BLAKE2s = r(6086), e.BLAKE2s128 = r(9975), e.BLAKE2s160 = r(9976), e.BLAKE2s224 = r(9977), e.BLAKE2s256 = r(9978), e.BN = r(9979), e.box = r(9980), e.ChaCha20 = r(6661), e.cipher = r(6089), e.cleanse = r(9998), e.CSHAKE = r(6261), e.CSHAKE128 = r(1e4), e.CSHAKE256 = r(10001), e.CtrDRBG = r(10002), e.dh = r(10003), e.dsa = r(7490), e.dsaies = r(10008), e.eb2k = r(7493), e.ecies = r(10010), e.ed25519 = r(6659), e.ed448 = r(7494), e.encoding = r(10012), e.GOST94 = r(10022), e.Hash160 = r(10023), e.Hash256 = r(10025), e.HashDRBG = r(10027), e.HKDF = r(10028), e.HmacDRBG = r(6663), e.Keccak = r(5867), e.Keccak224 = r(10029), e.Keccak256 = r(10030), e.Keccak384 = r(10031), e.Keccak512 = r(10032), e.KMAC = r(6668), e.KMAC128 = r(10033), e.KMAC256 = r(10034), e.MD2 = r(10035), e.MD4 = r(10036), e.MD5 = r(6263), e.MD5SHA1 = r(10038), e.merkle = r(10040), e.mrkl = r(10041), e.murmur3 = r(10042), e.p192 = r(10044), e.p224 = r(10047), e.p256 = r(7498), e.p384 = r(7499), e.p521 = r(7500), e.pbkdf2 = r(7501), e.pgp = r(10054), e.Poly1305 = r(7478), e.random = r(5636), e.RC4 = r(10056), e.RIPEMD160 = r(7502), e.rsa = r(6671), e.rsaies = r(10059), e.safe = r(7504), e.Salsa20 = r(7477), e.scrypt = r(10060), e.secp256k1 = r(10062), e.secretbox = r(6087), e.ssh = r(10065), e.SHA1 = r(6669), e.SHA224 = r(7503), e.SHA256 = r(5799), e.SHA384 = r(6670), e.SHA512 = r(6084), e.SHA3 = r(6090), e.SHA3_224 = r(10067), e.SHA3_256 = r(10068), e.SHA3_384 = r(10069), e.SHA3_512 = r(10070), e.SHAKE = r(6665), e.SHAKE128 = r(10071), e.SHAKE256 = r(7495), e.siphash = r(10072), e.Whirlpool = r(10074), e.x25519 = r(7479), e.x448 = r(10076), e.version = "4.1.0", e.native = e.SHA256.native
        },
        6085: function(t, e, r) {
            "use strict";
            t.exports = r(9969)
        },
        6086: function(t, e, r) {
            "use strict";
            t.exports = r(9974)
        },
        6089: function(t, e, r) {
            "use strict";
            t.exports = r(9990)
        },
        6261: function(t, e, r) {
            "use strict";
            const i = r(5466),
                n = r(5867),
                s = r(5579),
                o = Buffer.alloc(0),
                u = Buffer.alloc(200, 0);
            class CSHAKE extends n {
                constructor() {
                    super(), this.pad = 4, this.rate = 1088
                }
                init(t = 256, e = null, r = null) {
                    if (null == e && (e = o), null == r && (r = o), i(t >>> 0 === t), i(128 === t || 256 === t), i(Buffer.isBuffer(e)), i(Buffer.isBuffer(r)), super.init(t), 0 === e.length && 0 === r.length) this.pad = 31;
                    else {
                        const i = 1600 - 2 * t,
                            n = i / 8;
                        this.bytePad([e, r], n), this.rate = i, this.pad = 4
                    }
                    return this
                }
                final(t) {
                    return super.final(this.pad, t)
                }
                bytePad(t, e) {
                    i(Array.isArray(t)), i(e >>> 0 === e), i(e > 0);
                    let r = this.leftEncode(e);
                    for (const e of t) r += this.encodeString(e);
                    const n = e - r % e;
                    return n === e || (r += this.zeroPad(n)), r
                }
                encodeString(t) {
                    i(Buffer.isBuffer(t));
                    const e = this.leftEncode(8 * t.length);
                    return this.update(t), e + t.length
                }
                zeroPad(t) {
                    i(t >>> 0 === t), i(t <= 200);
                    const e = u.slice(0, t);
                    return this.update(e), e.length
                }
                leftEncode(t) {
                    i(t >>> 0 === t), i(t >= 0 && t < 22040);
                    let e = t,
                        r = 0;
                    for (; e && r < 4;) r += 1, e >>>= 8;
                    0 === r && (r = 1);
                    const n = Buffer.allocUnsafe(r + 1);
                    for (let e = 1; e <= r; e++) n[e] = t >>> 8 * (r - e);
                    return n[0] = r, this.update(n), n.length
                }
                rightEncode(t) {
                    i(t >>> 0 === t), i(t >= 0 && t < 22040);
                    let e = t,
                        r = 0;
                    for (; e && r < 4;) r += 1, e >>>= 8;
                    0 === r && (r = 1);
                    const n = Buffer.allocUnsafe(r + 1);
                    for (let e = 1; e <= r; e++) n[e - 1] = t >>> 8 * (r - e);
                    return n[r] = r, this.update(n), n.length
                }
                static hash() {
                    return new CSHAKE
                }
                static hmac(t = 256, e, r, n) {
                    i(t >>> 0 === t), i(128 === t || 256 === t);
                    return new s(CSHAKE, (1600 - 2 * t) / 8, [t, e, r], [n])
                }
                static digest(t, e = 256, r, i, n) {
                    return CSHAKE.ctx.init(e, r, i).update(t).final(n)
                }
                static root(t, e, r = 256, n, s, o) {
                    null == o && (o = 0), 0 === o && (i(r >>> 0 === r), o = r >>> 3), i(o >>> 0 === o), i(Buffer.isBuffer(t) && t.length === o), i(Buffer.isBuffer(e) && e.length === o);
                    const u = CSHAKE.ctx;
                    return u.init(r, n, s), u.update(t), u.update(e), u.final(o)
                }
                static multi(t, e, r, i = 256, n, s, o) {
                    const u = CSHAKE.ctx;
                    return u.init(i, n, s), u.update(t), u.update(e), r && u.update(r), u.final(o)
                }
                static mac(t, e, r = 256, i, n, s) {
                    return CSHAKE.hmac(r, i, n, s).init(e).update(t).final()
                }
            }
            CSHAKE.native = n.native, CSHAKE.id = "CSHAKE256", CSHAKE.size = 32, CSHAKE.bits = 256, CSHAKE.blockSize = 136, CSHAKE.zero = Buffer.alloc(32, 0), CSHAKE.ctx = new CSHAKE, t.exports = CSHAKE
        },
        6659: function(t, e, r) {
            "use strict";
            t.exports = r(9984)
        },
        6661: function(t, e, r) {
            "use strict";
            t.exports = r(7470)
        },
        6664: function(t, e, r) {
            "use strict";
            const i = r(5637),
                n = r(5676);
            class DSAParams extends i.Sequence {
                constructor(t, e, r) {
                    super(), this.p = new i.Unsigned(t), this.q = new i.Unsigned(e), this.g = new i.Unsigned(r)
                }
                getBodySize() {
                    let t = 0;
                    return t += this.p.getSize(), t += this.q.getSize(), t += this.g.getSize(), t
                }
                writeBody(t) {
                    return this.p.write(t), this.q.write(t), this.g.write(t), t
                }
                readBody(t) {
                    return this.p.read(t), this.q.read(t), this.g.read(t), this
                }
                clean() {
                    return this.p.clean() && this.q.clean() && this.g.clean()
                }
                toPEM() {
                    return n.toPEM(this.encode(), "DSA PARAMETERS")
                }
                fromPEM(t) {
                    const e = n.fromPEM(t, "DSA PARAMETERS");
                    return this.decode(e)
                }
                format() {
                    return {
                        type: this.constructor.name,
                        p: this.p,
                        q: this.q,
                        g: this.g
                    }
                }
            }
            class DSAPublicKey extends i.Sequence {
                constructor(t, e, r, n) {
                    super(), this.y = new i.Unsigned(t), this.p = new i.Unsigned(e), this.q = new i.Unsigned(r), this.g = new i.Unsigned(n)
                }
                getBodySize() {
                    let t = 0;
                    return t += this.y.getSize(), t += this.p.getSize(), t += this.q.getSize(), t += this.g.getSize(), t
                }
                writeBody(t) {
                    return this.y.write(t), this.p.write(t), this.q.write(t), this.g.write(t), t
                }
                readBody(t) {
                    return this.y.read(t), this.p.read(t), this.q.read(t), this.g.read(t), this
                }
                clean() {
                    return this.y.clean() && this.p.clean() && this.q.clean() && this.g.clean()
                }
                toPEM() {
                    return n.toPEM(this.encode(), "DSA PUBLIC KEY")
                }
                fromPEM(t) {
                    const e = n.fromPEM(t, "DSA PUBLIC KEY");
                    return this.decode(e)
                }
                format() {
                    return {
                        type: this.constructor.name,
                        y: this.y,
                        p: this.p,
                        q: this.q,
                        g: this.g
                    }
                }
            }
            class DSAPrivateKey extends i.Sequence {
                constructor(t, e, r, n, s, o) {
                    super(), this.version = new i.Unsigned(t), this.p = new i.Unsigned(e), this.q = new i.Unsigned(r), this.g = new i.Unsigned(n), this.y = new i.Unsigned(s), this.x = new i.Unsigned(o)
                }
                getBodySize() {
                    let t = 0;
                    return t += this.version.getSize(), t += this.p.getSize(), t += this.q.getSize(), t += this.g.getSize(), t += this.y.getSize(), t += this.x.getSize(), t
                }
                writeBody(t) {
                    return this.version.write(t), this.p.write(t), this.q.write(t), this.g.write(t), this.y.write(t), this.x.write(t), t
                }
                readBody(t) {
                    return this.version.read(t), this.p.read(t), this.q.read(t), this.g.read(t), this.y.read(t), this.x.read(t), this
                }
                clean() {
                    return this.p.clean() && this.q.clean() && this.g.clean() && this.y.clean() && this.x.clean()
                }
                toPEM() {
                    return n.toPEM(this.encode(), "DSA PRIVATE KEY")
                }
                fromPEM(t) {
                    const e = n.fromPEM(t, "DSA PRIVATE KEY");
                    return this.decode(e)
                }
                format() {
                    return {
                        type: this.constructor.name,
                        version: this.version,
                        p: this.p,
                        q: this.q,
                        g: this.g,
                        y: this.y,
                        x: this.x
                    }
                }
            }
            e.DSAParams = DSAParams, e.DSAPublicKey = DSAPublicKey, e.DSAPrivateKey = DSAPrivateKey
        },
        6666: function(t, e, r) {
            "use strict";
            const i = r(5637),
                n = r(5676);
            class RSAPublicKey extends i.Sequence {
                constructor(t, e) {
                    super(), this.n = new i.Unsigned(t), this.e = new i.Unsigned(e)
                }
                getBodySize() {
                    let t = 0;
                    return t += this.n.getSize(), t += this.e.getSize(), t
                }
                writeBody(t) {
                    return this.n.write(t), this.e.write(t), t
                }
                readBody(t) {
                    return this.n.read(t), this.e.read(t), this
                }
                clean() {
                    return this.n.clean() && this.e.clean()
                }
                toPEM() {
                    return n.toPEM(this.encode(), "RSA PUBLIC KEY")
                }
                fromPEM(t) {
                    const e = n.fromPEM(t, "RSA PUBLIC KEY");
                    return this.decode(e)
                }
                format() {
                    return {
                        type: this.constructor.name,
                        n: this.n,
                        e: this.e
                    }
                }
            }
            class RSAPrivateKey extends i.Sequence {
                constructor(t, e, r, n, s, o, u, a, h) {
                    super(), this.version = new i.Unsigned(t), this.n = new i.Unsigned(e), this.e = new i.Unsigned(r), this.d = new i.Unsigned(n), this.p = new i.Unsigned(s), this.q = new i.Unsigned(o), this.dp = new i.Unsigned(u), this.dq = new i.Unsigned(a), this.qi = new i.Unsigned(h)
                }
                getBodySize() {
                    let t = 0;
                    return t += this.version.getSize(), t += this.n.getSize(), t += this.e.getSize(), t += this.d.getSize(), t += this.p.getSize(), t += this.q.getSize(), t += this.dp.getSize(), t += this.dq.getSize(), t += this.qi.getSize(), t
                }
                writeBody(t) {
                    return this.version.write(t), this.n.write(t), this.e.write(t), this.d.write(t), this.p.write(t), this.q.write(t), this.dp.write(t), this.dq.write(t), this.qi.write(t), t
                }
                readBody(t) {
                    return this.version.read(t), this.n.read(t), this.e.read(t), this.d.read(t), this.p.read(t), this.q.read(t), this.dp.read(t), this.dq.read(t), this.qi.read(t), this
                }
                clean() {
                    return this.n.clean() && this.e.clean() && this.d.clean() && this.p.clean() && this.q.clean() && this.dp.clean() && this.dq.clean() && this.qi.clean()
                }
                toPEM() {
                    return n.toPEM(this.encode(), "RSA PRIVATE KEY")
                }
                fromPEM(t) {
                    const e = n.fromPEM(t, "RSA PRIVATE KEY");
                    return this.decode(e)
                }
                format() {
                    return {
                        type: this.constructor.name,
                        version: this.version,
                        n: this.n,
                        e: this.e,
                        d: this.d,
                        p: this.p,
                        q: this.q,
                        dp: this.dp,
                        dq: this.dq,
                        qi: this.qi
                    }
                }
            }
            e.RSAPublicKey = RSAPublicKey, e.RSAPrivateKey = RSAPrivateKey
        },
        6667: function(t, e, r) {
            "use strict";
            const i = r(5637),
                n = r(5676);
            class ECPrivateKey extends i.Sequence {
                constructor(t, e, r, n) {
                    super(), this.version = new i.Unsigned(t), this.privateKey = new i.OctString(e), this.namedCurveOID = new i.OID(r).explicit(0).optional(), this.publicKey = new i.BitString(n).explicit(1).optional()
                }
                getBodySize() {
                    let t = 0;
                    return t += this.version.getSize(), t += this.privateKey.getSize(), t += this.namedCurveOID.getSize(), t += this.publicKey.getSize(), t
                }
                writeBody(t) {
                    return this.version.write(t), this.privateKey.write(t), this.namedCurveOID.write(t), this.publicKey.write(t), t
                }
                readBody(t) {
                    return this.version.read(t), this.privateKey.read(t), this.namedCurveOID.read(t), this.publicKey.read(t), this
                }
                clean() {
                    return this.version.clean() && this.privateKey.clean() && this.namedCurveOID.clean() && this.publicKey.clean()
                }
                toPEM() {
                    return n.toPEM(this.encode(), "EC PRIVATE KEY")
                }
                fromPEM(t) {
                    const e = n.fromPEM(t, "EC PRIVATE KEY");
                    return this.decode(e)
                }
                format() {
                    return {
                        type: this.constructor.name,
                        version: this.version,
                        privateKey: this.privateKey,
                        namedCurveOID: this.namedCurveOID,
                        publicKey: this.publicKey
                    }
                }
            }
            class ECDSASignature extends i.Sequence {
                constructor(t, e) {
                    super(), this.r = new i.Unsigned(t), this.s = new i.Unsigned(e)
                }
                getBodySize() {
                    let t = 0;
                    return t += this.r.getSize(), t += this.s.getSize(), t
                }
                writeBody(t) {
                    return this.r.write(t), this.s.write(t), t
                }
                readBody(t) {
                    return this.r.read(t), this.s.read(t), this
                }
                clean() {
                    return this.r.clean() && this.s.clean()
                }
                toPEM() {
                    return n.toPEM(this.encode(), "EC SIGNATURE")
                }
                fromPEM(t) {
                    const e = n.fromPEM(t, "EC SIGNATURE");
                    return this.decode(e)
                }
                format() {
                    return {
                        type: this.constructor.name,
                        r: this.r,
                        s: this.s
                    }
                }
            }
            e.ECPrivateKey = ECPrivateKey, e.ECDSASignature = ECDSASignature
        },
        7474: function(t, e, r) {
            "use strict";
            const i = r(5466),
                n = r(6084),
                s = r(7476),
                o = Buffer.from("OrpheanBeholderScryDoubt", "binary"),
                u = Buffer.from("OxychromaticBlowfishSwatDynamite", "binary"),
                a = Buffer.alloc(1, 0);

            function h(t, e, r) {
                if ("string" == typeof t && (t = Buffer.from(t, "utf8")), "string" == typeof e && (e = Buffer.from(e, "utf8")), null == e && (e = Buffer.alloc(0)), i(Buffer.isBuffer(t)), i(Buffer.isBuffer(e)), i(r >>> 0 === r), r < 4 || r > 31) throw new RangeError("Invalid rounds.");
                return function(t, e, r, i) {
                    const n = new s,
                        u = new Uint32Array(6);
                    n.init(t, e);
                    const a = 2 ** r;
                    for (let r = 0; r < a; r++) n.expand0state(t), n.expand0state(e);
                    for (let t = 0; t < 6; t++) u[t] = n.stream2word(o);
                    for (let t = 0; t < 64; t++) n.enc(u);
                    for (let t = 0; t < 6; t++) i[4 * t + 0] = u[t] >>> 24, i[4 * t + 1] = u[t] >>> 16, i[4 * t + 2] = u[t] >>> 8, i[4 * t + 3] = u[t];
                    return i
                }(t, e, r, Buffer.alloc(24))
            }

            function c(t, e, r, n = "b") {
                if ("string" == typeof t && (t = Buffer.from(t, "utf8")), "string" == typeof e && (e = Buffer.from(e, "utf8")), i(Buffer.isBuffer(t)), i(Buffer.isBuffer(e)), i(r >>> 0 === r), i("string" == typeof n), 16 !== e.length) throw new RangeError("Invalid salt length.");
                switch (n) {
                    case "a":
                        t = (t = Buffer.concat([t, a])).slice(0, 255 & t.length);
                        break;
                    case "b":
                        t = t.length > 72 ? t.slice(0, 73) : Buffer.concat([t, a]);
                        break;
                    default:
                        throw new Error("Invalid minor version.")
                }
                return h(t, e, r).slice(0, 23)
            }

            function l(t, e, r, i) {
                const n = new s,
                    o = new Uint32Array(8);
                n.init(t, e);
                const a = 2 ** r;
                for (let r = 0; r < a; r++) n.expand0state(e), n.expand0state(t);
                for (let t = 0; t < 8; t++) o[t] = n.stream2word(u);
                for (let t = 0; t < 64; t++) n.enc(o);
                for (let t = 0; t < 8; t++) i[4 * t + 3] = o[t] >>> 24, i[4 * t + 2] = o[t] >>> 16, i[4 * t + 1] = o[t] >>> 8, i[4 * t + 0] = o[t];
                return i
            }
            const f = "./ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",
                d = [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 0, 1, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, -1, -1, -1, -1, -1, -1, -1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, -1, -1, -1, -1, -1, -1, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, -1, -1, -1, -1, -1];

            function g(t) {
                i(Buffer.isBuffer(t));
                let e, r, n = 0,
                    s = "";
                for (; n < t.length;) {
                    if (e = t[n++], s += f[e >>> 2], e = (3 & e) << 4, n >= t.length) {
                        s += f[e];
                        break
                    }
                    if (r = t[n++], e |= r >>> 4 & 15, s += f[e], e = (15 & r) << 2, n >= t.length) {
                        s += f[e];
                        break
                    }
                    r = t[n++], e |= r >>> 6 & 3, s += f[e], s += f[63 & r]
                }
                return s
            }

            function p(t, e, r) {
                i("string" == typeof t), i(e >>> 0 === e), i(r >>> 0 === r);
                const n = Buffer.alloc(r);
                let s, o, u, a, h = 0;
                for (; h < r;) {
                    if (s = y(t, e++), -1 === s) return [e, null];
                    if (o = y(t, e++), -1 === o) return [e, null];
                    if (n[h++] = s << 2 | (48 & o) >>> 4, h >= r) break;
                    if (u = y(t, e++), -1 === u) return [e, null];
                    if (n[h++] = (15 & o) << 4 | (60 & u) >>> 2, h >= r) break;
                    if (a = y(t, e++), -1 === a) return [e, null];
                    n[h++] = (3 & u) << 6 | a
                }
                return [e, n]
            }

            function y(t, e) {
                if (e >= t.length) return -1;
                const r = t.charCodeAt(e);
                return 65408 & r ? -1 : d[r]
            }
            e.native = 0, e.hash192 = h, e.derive = c, e.generate = function(t, e, r, n = "b") {
                if ("string" == typeof e) {
                    const [t, r] = p(e, 0, 16);
                    if (t !== e.length || null == r) throw new Error("Invalid salt string.");
                    e = r
                }
                return function(t, e, r, n) {
                    i("string" == typeof t), i(e >>> 0 === e), i(Buffer.isBuffer(r)), i(Buffer.isBuffer(n)), i("a" === t || "b" === t), i(e >= 4 && e <= 31), i(16 === r.length), i(23 === n.length);
                    let s = e.toString(10);
                    e < 10 && (s = "0" + s);
                    return `$2${t}$${s}$${g(r)}${g(n)}`
                }(n, r, e, c(t, e, r, n))
            }, e.verify = function(t, e) {
                const [r, n, s, o] = function(t) {
                    if (i("string" == typeof t), t.length < 46) throw new Error("Invalid bcrypt string.");
                    if ("$" !== t[0] || "2" !== t[1]) throw new Error("Invalid major version.");
                    const e = t[2];
                    switch (e) {
                        case "a":
                        case "b":
                            break;
                        default:
                            throw new Error("Invalid minor version.")
                    }
                    if ("$" !== t[3]) throw new Error("Invalid bcrypt string.");
                    const r = t.charCodeAt(4) - 48,
                        n = t.charCodeAt(5) - 48;
                    if (r < 0 || r > 9 || n < 0 || n > 9) throw new Error("Invalid bcrypt string.");
                    const s = 10 * r + n;
                    if (s < 4 || s > 31) throw new Error("Invalid log rounds.");
                    if ("$" !== t[6]) throw new Error("Invalid bcrypt string.");
                    let o, u, a = 7;
                    if ([a, o] = p(t, a, 16), null == o) throw new Error("Invalid salt.");
                    if ([a, u] = p(t, a, 23), null == u) throw new Error("Invalid hash.");
                    if (a !== t.length) throw new Error("Invalid bcrypt string.");
                    return [e, s, o, u]
                }(e), u = c(t, s, n, r);
                let a = 0;
                for (let t = 0; t < 23; t++) a |= u[t] ^ o[t];
                return a - 1 >>> 31 != 0
            }, e.hash256 = function(t, e, r) {
                if ("string" == typeof t && (t = Buffer.from(t, "utf8")), "string" == typeof e && (e = Buffer.from(e, "utf8")), null == e && (e = Buffer.alloc(0)), i(Buffer.isBuffer(t)), i(Buffer.isBuffer(e)), i(r >>> 0 === r), r < 4 || r > 31) throw new RangeError("Invalid rounds.");
                return l(t, e, r, Buffer.alloc(32))
            }, e.pbkdf = function(t, e, r, s) {
                "string" == typeof t && (t = Buffer.from(t, "utf8")), "string" == typeof e && (e = Buffer.from(e, "utf8")), null == e && (e = Buffer.alloc(0)), i(Buffer.isBuffer(t)), i(Buffer.isBuffer(e)), i(r >>> 0 === r), i(s >>> 0 === s);
                const o = Buffer.alloc(32),
                    u = Buffer.alloc(32),
                    a = Buffer.alloc(e.length + 4),
                    h = Buffer.alloc(s);
                if (r < 1 || 0 === t.length || 0 === e.length || 0 === s || s > o.length ** 2 || e.length > 1 << 20) throw new Error("Invalid bcrypt parameters.");
                const c = (s + o.length - 1) / o.length >>> 0,
                    f = (s + c - 1) / c >>> 0;
                e.copy(a, 0);
                const d = n.digest(t);
                let g = Buffer.alloc(0),
                    p = s,
                    y = f;
                for (let t = 1; p > 0; t++) {
                    a[e.length + 0] = t >>> 24, a[e.length + 1] = t >>> 16, a[e.length + 2] = t >>> 8, a[e.length + 3] = t, g = n.digest(a), l(d, g, 6, u), u.copy(o, 0);
                    for (let t = 1; t < r; t++) {
                        g = n.digest(u), l(d, g, 6, u);
                        for (let t = 0; t < o.length; t++) o[t] ^= u[t]
                    }
                    y = Math.min(y, p);
                    let i = 0;
                    for (; i < y; i++) {
                        const e = i * c + (t - 1);
                        if (e >= s) break;
                        h[e] = o[i]
                    }
                    p -= i
                }
                return h
            }
        },
        7487: function(t, e, r) {
            "use strict";
            const i = r(5466);

            function n(t) {
                i("string" == typeof t);
                for (let e = t.length - 1; e >= 0; e--) {
                    switch (t.charCodeAt(e)) {
                        case 9:
                        case 11:
                        case 12:
                        case 32:
                        case 160:
                            continue
                    }
                    return t.substring(0, e + 1)
                }
                return t
            }
            t.exports = function*(t) {
                i("string" == typeof t);
                let e = 0,
                    r = 0,
                    s = 0;
                for (t.length > 0 && 65279 === t.charCodeAt(0) && (e += 1, r += 1); e < t.length; e++) {
                    const i = t.charCodeAt(e);
                    switch (i) {
                        case 13:
                        case 10:
                        case 133:
                            if (r !== e) {
                                const i = n(t.substring(r, e));
                                i.length > 0 && (yield [s, i])
                            }
                            13 === i && e + 1 < t.length && 10 === t.charCodeAt(e + 1) && (e += 1), r = e + 1, s += 1
                    }
                }
                if (r !== e) {
                    const i = n(t.substring(r, e));
                    i.length > 0 && (yield [s, i])
                }
            }
        },
        7489: function(t, e, r) {
            "use strict";
            const i = r(5637),
                n = r(5676);
            class DHParams extends i.Sequence {
                constructor(t, e) {
                    super(), this.p = new i.Unsigned(t), this.g = new i.Unsigned(e)
                }
                getBodySize() {
                    let t = 0;
                    return t += this.p.getSize(), t += this.g.getSize(), t
                }
                writeBody(t) {
                    return this.p.write(t), this.g.write(t), t
                }
                readBody(t) {
                    return this.p.read(t), this.g.read(t), this
                }
                clean() {
                    return this.p.clean() && this.g.clean()
                }
                toPEM() {
                    return n.toPEM(this.encode(), "DH PARAMETERS")
                }
                fromPEM(t) {
                    const e = n.fromPEM(t, "DH PARAMETERS");
                    return this.decode(e)
                }
                format() {
                    return {
                        type: this.constructor.name,
                        p: this.p,
                        g: this.g
                    }
                }
            }
            e.DHParams = DHParams
        },
        7490: function(t, e, r) {
            "use strict";
            t.exports = r(10006)
        },
        7492: function(t, e, r) {
            "use strict";
            const i = r(5637),
                n = r(5676);
            class DSAParams extends i.Sequence {
                constructor(t, e, r) {
                    super(), this.p = new i.Unsigned(t), this.q = new i.Unsigned(e), this.g = new i.Unsigned(r)
                }
                getBodySize() {
                    let t = 0;
                    return t += this.p.getSize(), t += this.q.getSize(), t += this.g.getSize(), t
                }
                writeBody(t) {
                    return this.p.write(t), this.q.write(t), this.g.write(t), t
                }
                readBody(t) {
                    return this.p.read(t), this.q.read(t), this.g.read(t), this
                }
                clean() {
                    return this.p.clean() && this.q.clean() && this.g.clean()
                }
                toPEM() {
                    return n.toPEM(this.encode(), "DSA PARAMETERS")
                }
                fromPEM(t) {
                    const e = n.fromPEM(t, "DSA PARAMETERS");
                    return this.decode(e)
                }
                format() {
                    return {
                        type: this.constructor.name,
                        p: this.p,
                        q: this.q,
                        g: this.g
                    }
                }
            }
            class DSAPublicKey extends i.Unsigned {
                constructor(t) {
                    super(t)
                }
                get y() {
                    return this.value
                }
                set y(t) {
                    this.value = t
                }
                toPEM() {
                    return n.toPEM(this.encode(), "DSA PUBLIC KEY")
                }
                fromPEM(t) {
                    const e = n.fromPEM(t, "DSA PUBLIC KEY");
                    return this.decode(e)
                }
            }
            class DSASignature extends i.Sequence {
                constructor(t, e) {
                    super(), this.r = new i.Unsigned(t), this.s = new i.Unsigned(e)
                }
                getBodySize() {
                    let t = 0;
                    return t += this.r.getSize(), t += this.s.getSize(), t
                }
                writeBody(t) {
                    return this.r.write(t), this.s.write(t), t
                }
                readBody(t) {
                    return this.r.read(t), this.s.read(t), this
                }
                clean() {
                    return this.r.clean() && this.s.clean()
                }
                toPEM() {
                    return n.toPEM(this.encode(), "DSA SIGNATURE")
                }
                fromPEM(t) {
                    const e = n.fromPEM(t, "DSA SIGNATURE");
                    return this.decode(e)
                }
                format() {
                    return {
                        type: this.constructor.name,
                        r: this.r,
                        s: this.s
                    }
                }
            }
            e.DSAParams = DSAParams, e.DSAPublicKey = DSAPublicKey, e.DSASignature = DSASignature
        },
        7493: function(t, e, r) {
            "use strict";
            const i = r(5466),
                n = r(6263);
            e.native = 0, e.derive = function(t, e, r, s) {
                if ("string" == typeof t && (t = Buffer.from(t, "utf8")), "string" == typeof e && (e = Buffer.from(e, "utf8")), null == e && (e = Buffer.alloc(0)), null == s && (s = 0), i(Buffer.isBuffer(t)), i(Buffer.isBuffer(e)), i(r >>> 0 === r), i(s >>> 0 === s), e.length > 8 && (e = e.slice(0, 8)), 0 !== e.length && 8 !== e.length) throw new RangeError("Salt must be at least 8 bytes.");
                const o = Buffer.alloc(r),
                    u = Buffer.alloc(s);
                let a = Buffer.alloc(0);
                for (; r > 0 || s > 0;) {
                    let i = 0;
                    if (a = n.multi(a, t, e), r > 0) {
                        const t = o.length - r;
                        i = Math.min(r, a.length), a.copy(o, t, 0, i), r -= i
                    }
                    if (i < a.length && s > 0) {
                        const t = u.length - s,
                            e = Math.min(s, a.length - i);
                        a.copy(u, t, i, i + e), s -= e
                    }
                }
                return a.fill(0), [o, u]
            }
        },
        7494: function(t, e, r) {
            "use strict";
            t.exports = r(10011)
        },
        7496: function(t, e, r) {
            "use strict";
            const i = r(5466),
                {
                    PEMBlock: n
                } = r(5676),
                s = r(6089),
                o = r(5636),
                u = r(7493);
            e.encrypt = function(t, e, r) {
                if (i(t instanceof n), i("string" == typeof e), i("string" == typeof r), t.isEncrypted()) throw new Error("PEM block is already encrypted.");
                const {
                    keySize: a,
                    ivSize: h
                } = s.get(e), c = o.randomBytes(h), [l] = u.derive(r, c, a, h);
                return t.data = s.encrypt(e, l, c, t.data), t.setProcType(4, "ENCRYPTED"), t.setDEKInfo(e, c), t
            }, e.decrypt = function(t, e) {
                if (i(t instanceof n), i("string" == typeof e), !t.isEncrypted()) throw new Error("PEM block is not encrypted.");
                const r = t.getDEKInfo();
                if (!r) throw new Error("DEK-Info not found.");
                const {
                    keySize: o,
                    ivSize: a
                } = s.get(r.name), [h] = u.derive(e, r.iv, o, a);
                return t.data = s.decrypt(r.name, h, r.iv, t.data), t.unsetProcType(), t.unsetDEKInfo(), t
            }
        },
        9964: function(t, e, r) {
            "use strict";
            t.exports = r(9965)
        },
        9966: function(t, e, r) {
            "use strict";
            t.exports = r(9967)
        },
        9970: function(t, e, r) {
            "use strict";
            const i = r(6085);
            class BLAKE2b160 extends i {
                constructor() {
                    super()
                }
                init(t = null) {
                    return super.init(20, t)
                }
                static hash() {
                    return new BLAKE2b160
                }
                static hmac() {
                    return super.hmac(20)
                }
                static digest(t, e = null) {
                    return super.digest(t, 20, e)
                }
                static root(t, e) {
                    return super.root(t, e, 20)
                }
                static multi(t, e, r) {
                    return super.multi(t, e, r, 20)
                }
                static mac(t, e) {
                    return super.mac(t, e, 20)
                }
            }
            BLAKE2b160.native = i.native, BLAKE2b160.id = "BLAKE2B160", BLAKE2b160.size = 20, BLAKE2b160.bits = 160, BLAKE2b160.blockSize = 128, BLAKE2b160.zero = Buffer.alloc(20, 0), BLAKE2b160.ctx = new BLAKE2b160, t.exports = BLAKE2b160
        },
        9971: function(t, e, r) {
            "use strict";
            const i = r(6085);
            class BLAKE2b256 extends i {
                constructor() {
                    super()
                }
                init(t = null) {
                    return super.init(32, t)
                }
                static hash() {
                    return new BLAKE2b256
                }
                static hmac() {
                    return super.hmac(32)
                }
                static digest(t, e = null) {
                    return super.digest(t, 32, e)
                }
                static root(t, e) {
                    return super.root(t, e, 32)
                }
                static multi(t, e, r) {
                    return super.multi(t, e, r, 32)
                }
                static mac(t, e) {
                    return super.mac(t, e, 32)
                }
            }
            BLAKE2b256.native = i.native, BLAKE2b256.id = "BLAKE2B256", BLAKE2b256.size = 32, BLAKE2b256.bits = 256, BLAKE2b256.blockSize = 128, BLAKE2b256.zero = Buffer.alloc(32, 0), BLAKE2b256.ctx = new BLAKE2b256, t.exports = BLAKE2b256
        },
        9972: function(t, e, r) {
            "use strict";
            const i = r(6085);
            class BLAKE2b384 extends i {
                constructor() {
                    super()
                }
                init(t = null) {
                    return super.init(48, t)
                }
                static hash() {
                    return new BLAKE2b384
                }
                static hmac() {
                    return super.hmac(48)
                }
                static digest(t, e = null) {
                    return super.digest(t, 48, e)
                }
                static root(t, e) {
                    return super.root(t, e, 48)
                }
                static multi(t, e, r) {
                    return super.multi(t, e, r, 48)
                }
                static mac(t, e) {
                    return super.mac(t, e, 48)
                }
            }
            BLAKE2b384.native = i.native, BLAKE2b384.id = "BLAKE2B384", BLAKE2b384.size = 48, BLAKE2b384.bits = 384, BLAKE2b384.blockSize = 128, BLAKE2b384.zero = Buffer.alloc(48, 0), BLAKE2b384.ctx = new BLAKE2b384, t.exports = BLAKE2b384
        },
        9973: function(t, e, r) {
            "use strict";
            const i = r(6085);
            class BLAKE2b512 extends i {
                constructor() {
                    super()
                }
                init(t = null) {
                    return super.init(64, t)
                }
                static hash() {
                    return new BLAKE2b512
                }
                static hmac() {
                    return super.hmac(64)
                }
                static digest(t, e = null) {
                    return super.digest(t, 64, e)
                }
                static root(t, e) {
                    return super.root(t, e, 64)
                }
                static multi(t, e, r) {
                    return super.multi(t, e, r, 64)
                }
                static mac(t, e) {
                    return super.mac(t, e, 64)
                }
            }
            BLAKE2b512.native = i.native, BLAKE2b512.id = "BLAKE2B512", BLAKE2b512.size = 64, BLAKE2b512.bits = 512, BLAKE2b512.blockSize = 128, BLAKE2b512.zero = Buffer.alloc(64, 0), BLAKE2b512.ctx = new BLAKE2b512, t.exports = BLAKE2b512
        },
        9975: function(t, e, r) {
            "use strict";
            const i = r(6086);
            class BLAKE2s128 extends i {
                constructor() {
                    super()
                }
                init(t = null) {
                    return super.init(16, t)
                }
                static hash() {
                    return new BLAKE2s128
                }
                static hmac() {
                    return super.hmac(16)
                }
                static digest(t, e = null) {
                    return super.digest(t, 16, e)
                }
                static root(t, e) {
                    return super.root(t, e, 16)
                }
                static multi(t, e, r) {
                    return super.multi(t, e, r, 16)
                }
                static mac(t, e) {
                    return super.mac(t, e, 16)
                }
            }
            BLAKE2s128.native = i.native, BLAKE2s128.id = "BLAKE2S128", BLAKE2s128.size = 16, BLAKE2s128.bits = 128, BLAKE2s128.blockSize = 64, BLAKE2s128.zero = Buffer.alloc(16, 0), BLAKE2s128.ctx = new BLAKE2s128, t.exports = BLAKE2s128
        },
        9976: function(t, e, r) {
            "use strict";
            const i = r(6086);
            class BLAKE2s160 extends i {
                constructor() {
                    super()
                }
                init(t = null) {
                    return super.init(20, t)
                }
                static hash() {
                    return new BLAKE2s160
                }
                static hmac() {
                    return super.hmac(20)
                }
                static digest(t, e = null) {
                    return super.digest(t, 20, e)
                }
                static root(t, e) {
                    return super.root(t, e, 20)
                }
                static multi(t, e, r) {
                    return super.multi(t, e, r, 20)
                }
                static mac(t, e) {
                    return super.mac(t, e, 20)
                }
            }
            BLAKE2s160.native = i.native, BLAKE2s160.id = "BLAKE2S160", BLAKE2s160.size = 20, BLAKE2s160.bits = 160, BLAKE2s160.blockSize = 64, BLAKE2s160.zero = Buffer.alloc(20, 0), BLAKE2s160.ctx = new BLAKE2s160, t.exports = BLAKE2s160
        },
        9977: function(t, e, r) {
            "use strict";
            const i = r(6086);
            class BLAKE2s224 extends i {
                constructor() {
                    super()
                }
                init(t = null) {
                    return super.init(28, t)
                }
                static hash() {
                    return new BLAKE2s224
                }
                static hmac() {
                    return super.hmac(28)
                }
                static digest(t, e = null) {
                    return super.digest(t, 28, e)
                }
                static root(t, e) {
                    return super.root(t, e, 28)
                }
                static multi(t, e, r) {
                    return super.multi(t, e, r, 28)
                }
                static mac(t, e) {
                    return super.mac(t, e, 28)
                }
            }
            BLAKE2s224.native = i.native, BLAKE2s224.id = "BLAKE2S224", BLAKE2s224.size = 28, BLAKE2s224.bits = 224, BLAKE2s224.blockSize = 64, BLAKE2s224.zero = Buffer.alloc(28, 0), BLAKE2s224.ctx = new BLAKE2s224, t.exports = BLAKE2s224
        },
        9978: function(t, e, r) {
            "use strict";
            const i = r(6086);
            class BLAKE2s256 extends i {
                constructor() {
                    super()
                }
                init(t = null) {
                    return super.init(32, t)
                }
                static hash() {
                    return new BLAKE2s256
                }
                static hmac() {
                    return super.hmac(32)
                }
                static digest(t, e = null) {
                    return super.digest(t, 32, e)
                }
                static root(t, e) {
                    return super.root(t, e, 32)
                }
                static multi(t, e, r) {
                    return super.multi(t, e, r, 32)
                }
                static mac(t, e) {
                    return super.mac(t, e, 32)
                }
            }
            BLAKE2s256.native = i.native, BLAKE2s256.id = "BLAKE2S256", BLAKE2s256.size = 32, BLAKE2s256.bits = 256, BLAKE2s256.blockSize = 64, BLAKE2s256.zero = Buffer.alloc(32, 0), BLAKE2s256.ctx = new BLAKE2s256, t.exports = BLAKE2s256
        },
        9979: function(t, e, r) {
            "use strict";
            t.exports = r(6657)
        },
        9980: function(t, e, r) {
            "use strict";
            const i = r(72),
                n = r(6087),
                s = r(5636),
                o = r(7479);
            e.native = 0, e.seal = function(t, e, r = null) {
                null == r && (r = o.privateKeyGenerate());
                const i = o.publicKeyCreate(r),
                    u = o.derive(e, r),
                    a = n.derive(u),
                    h = s.randomBytes(24),
                    c = n.seal(t, a, h);
                return Buffer.concat([i, h, c])
            }, e.open = function(t, e) {
                if (i(Buffer.isBuffer(t)), t.length < 56) throw new Error("Invalid secret box size.");
                const r = t.slice(0, 32),
                    s = t.slice(32, 56),
                    u = t.slice(56),
                    a = o.derive(r, e),
                    h = n.derive(a);
                return n.open(u, h, s)
            }
        },
        9998: function(t, e, r) {
            "use strict";
            t.exports = r(9999)
        }
    }
]);