/*! For license information please see vendors.ebf4430a2942c9ed8fc6.js.LICENSE.txt */
(window.webpackJsonp = window.webpackJsonp || []).push([
    [274], {
        10029: function(t, e, r) {
            "use strict";
            const i = r(5867);
            class Keccak224 extends i {
                constructor() {
                    super()
                }
                init() {
                    return super.init(224)
                }
                final() {
                    return super.final(1, null)
                }
                static hash() {
                    return new Keccak224
                }
                static hmac() {
                    return super.hmac(224, 1, null)
                }
                static digest(t) {
                    return super.digest(t, 224, 1, null)
                }
                static root(t, e) {
                    return super.root(t, e, 224, 1, null)
                }
                static multi(t, e, r) {
                    return super.multi(t, e, r, 224, 1, null)
                }
                static mac(t, e) {
                    return super.mac(t, e, 224, 1, null)
                }
            }
            Keccak224.native = i.native, Keccak224.id = "KECCAK224", Keccak224.size = 28, Keccak224.bits = 224, Keccak224.blockSize = 144, Keccak224.zero = Buffer.alloc(28, 0), Keccak224.ctx = new Keccak224, t.exports = Keccak224
        },
        10030: function(t, e, r) {
            "use strict";
            const i = r(5867);
            class Keccak256 extends i {
                constructor() {
                    super()
                }
                init() {
                    return super.init(256)
                }
                final() {
                    return super.final(1, null)
                }
                static hash() {
                    return new Keccak256
                }
                static hmac() {
                    return super.hmac(256, 1, null)
                }
                static digest(t) {
                    return super.digest(t, 256, 1, null)
                }
                static root(t, e) {
                    return super.root(t, e, 256, 1, null)
                }
                static multi(t, e, r) {
                    return super.multi(t, e, r, 256, 1, null)
                }
                static mac(t, e) {
                    return super.mac(t, e, 256, 1, null)
                }
            }
            Keccak256.native = i.native, Keccak256.id = "KECCAK256", Keccak256.size = 32, Keccak256.bits = 256, Keccak256.blockSize = 136, Keccak256.zero = Buffer.alloc(32, 0), Keccak256.ctx = new Keccak256, t.exports = Keccak256
        },
        10031: function(t, e, r) {
            "use strict";
            const i = r(5867);
            class Keccak384 extends i {
                constructor() {
                    super()
                }
                init() {
                    return super.init(384)
                }
                final() {
                    return super.final(1, null)
                }
                static hash() {
                    return new Keccak384
                }
                static hmac() {
                    return super.hmac(384, 1, null)
                }
                static digest(t) {
                    return super.digest(t, 384, 1, null)
                }
                static root(t, e) {
                    return super.root(t, e, 384, 1, null)
                }
                static multi(t, e, r) {
                    return super.multi(t, e, r, 384, 1, null)
                }
                static mac(t, e) {
                    return super.mac(t, e, 384, 1, null)
                }
            }
            Keccak384.native = i.native, Keccak384.id = "KECCAK384", Keccak384.size = 48, Keccak384.bits = 384, Keccak384.blockSize = 104, Keccak384.zero = Buffer.alloc(48, 0), Keccak384.ctx = new Keccak384, t.exports = Keccak384
        },
        10032: function(t, e, r) {
            "use strict";
            const i = r(5867);
            class Keccak512 extends i {
                constructor() {
                    super()
                }
                init() {
                    return super.init(512)
                }
                final() {
                    return super.final(1, null)
                }
                static hash() {
                    return new Keccak512
                }
                static hmac() {
                    return super.hmac(512, 1, null)
                }
                static digest(t) {
                    return super.digest(t, 512, 1, null)
                }
                static root(t, e) {
                    return super.root(t, e, 512, 1, null)
                }
                static multi(t, e, r) {
                    return super.multi(t, e, r, 512, 1, null)
                }
                static mac(t, e) {
                    return super.mac(t, e, 512, 1, null)
                }
            }
            Keccak512.native = i.native, Keccak512.id = "KECCAK512", Keccak512.size = 32, Keccak512.bits = 512, Keccak512.blockSize = 72, Keccak512.zero = Buffer.alloc(32, 0), Keccak512.ctx = new Keccak512, t.exports = Keccak512
        },
        10033: function(t, e, r) {
            "use strict";
            const i = r(6668);
            class KMAC128 extends i {
                constructor() {
                    super()
                }
                init(t, e) {
                    return super.init(128, t, e)
                }
                static hash() {
                    return new KMAC128
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
            KMAC128.native = i.native, KMAC128.id = "KMAC128", KMAC128.size = 16, KMAC128.bits = 128, KMAC128.blockSize = 168, KMAC128.zero = Buffer.alloc(16, 0), KMAC128.ctx = new KMAC128, t.exports = KMAC128
        },
        10034: function(t, e, r) {
            "use strict";
            const i = r(6668);
            class KMAC256 extends i {
                constructor() {
                    super()
                }
                init(t, e) {
                    return super.init(256, t, e)
                }
                static hash() {
                    return new KMAC256
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
            KMAC256.native = i.native, KMAC256.id = "KMAC256", KMAC256.size = 32, KMAC256.bits = 256, KMAC256.blockSize = 136, KMAC256.zero = Buffer.alloc(32, 0), KMAC256.ctx = new KMAC256, t.exports = KMAC256
        },
        10035: function(t, e, r) {
            "use strict";
            const i = r(5466),
                n = r(5579),
                s = new Uint8Array([41, 46, 67, 201, 162, 216, 124, 1, 61, 54, 84, 161, 236, 240, 6, 19, 98, 167, 5, 243, 192, 199, 115, 140, 152, 147, 43, 217, 188, 76, 130, 202, 30, 155, 87, 60, 253, 212, 224, 22, 103, 66, 111, 24, 138, 23, 229, 18, 190, 78, 196, 214, 218, 158, 222, 73, 160, 251, 245, 142, 187, 47, 238, 122, 169, 104, 121, 145, 21, 178, 7, 63, 148, 194, 16, 137, 11, 34, 95, 33, 128, 127, 93, 154, 90, 144, 50, 39, 53, 62, 204, 231, 191, 247, 151, 3, 255, 25, 48, 179, 72, 165, 181, 209, 215, 94, 146, 42, 172, 86, 170, 198, 79, 184, 56, 210, 150, 164, 125, 182, 118, 252, 107, 226, 156, 116, 4, 241, 69, 157, 112, 89, 100, 113, 135, 32, 134, 91, 207, 101, 230, 45, 168, 2, 27, 96, 37, 173, 174, 176, 185, 246, 28, 70, 97, 105, 52, 64, 126, 15, 85, 71, 163, 35, 221, 81, 175, 58, 195, 92, 249, 206, 186, 197, 234, 38, 44, 83, 13, 110, 133, 40, 132, 9, 211, 223, 205, 244, 65, 129, 77, 82, 106, 220, 55, 200, 108, 193, 171, 250, 36, 225, 123, 8, 12, 189, 177, 74, 120, 136, 149, 139, 227, 99, 232, 109, 233, 203, 213, 254, 59, 0, 29, 57, 242, 239, 183, 14, 102, 88, 208, 228, 166, 119, 114, 248, 235, 117, 75, 10, 49, 68, 80, 180, 143, 237, 31, 26, 219, 153, 141, 51, 159, 17, 131, 20]);
            class MD2 {
                constructor() {
                    this.state = Buffer.allocUnsafe(48), this.checksum = Buffer.allocUnsafe(16), this.block = Buffer.allocUnsafe(16), this.size = -1
                }
                init() {
                    return this.state.fill(0), this.checksum.fill(0), this.size = 0, this
                }
                update(t) {
                    return i(Buffer.isBuffer(t)), this._update(t, t.length), this
                }
                final() {
                    return this._final(Buffer.allocUnsafe(16))
                }
                _update(t, e) {
                    i(-1 !== this.size, "Context already finalized.");
                    let r = 15 & this.size,
                        n = 0;
                    if (this.size += e, r > 0) {
                        let i = 16 - r;
                        if (i > e && (i = e), t.copy(this.block, r, n, n + i), r += i, e -= i, n += i, r < 16) return;
                        this.transform(this.block, 0)
                    }
                    for (; e >= 16;) this.transform(t, n), n += 16, e -= 16;
                    e > 0 && t.copy(this.block, 0, n, n + e)
                }
                _final(t) {
                    i(-1 !== this.size, "Context already finalized.");
                    const e = 16 - (15 & this.size),
                        r = Buffer.allocUnsafe(e);
                    for (let t = 0; t < r.length; t++) r[t] = e;
                    return this._update(r, e), this._update(this.checksum, 16), this.state.copy(t, 0, 0, 16), this.state.fill(0), this.checksum.fill(0), this.block.fill(0), this.size = -1, t
                }
                transform(t, e) {
                    for (let r = 0; r < 16; r++) this.state[16 + r] = t[e + r], this.state[32 + r] = this.state[16 + r] ^ this.state[r];
                    let r = 0;
                    for (let t = 0; t < 18; t++) {
                        for (let t = 0; t < 48; t++) this.state[t] ^= s[r], r = this.state[t];
                        r = r + t & 255
                    }
                    let i = this.checksum[15];
                    for (let r = 0; r < 16; r++) this.checksum[r] ^= s[t[e + r] ^ i], i = this.checksum[r]
                }
                static hash() {
                    return new MD2
                }
                static hmac() {
                    return new n(MD2, 16)
                }
                static digest(t) {
                    return MD2.ctx.init().update(t).final()
                }
                static root(t, e) {
                    return i(Buffer.isBuffer(t) && 16 === t.length), i(Buffer.isBuffer(e) && 16 === e.length), MD2.ctx.init().update(t).update(e).final()
                }
                static multi(t, e, r) {
                    const i = MD2.ctx;
                    return i.init(), i.update(t), i.update(e), r && i.update(r), i.final()
                }
                static mac(t, e) {
                    return MD2.hmac().init(e).update(t).final()
                }
            }
            MD2.native = 0, MD2.id = "MD2", MD2.size = 16, MD2.bits = 128, MD2.blockSize = 16, MD2.zero = Buffer.alloc(16, 0), MD2.ctx = new MD2, t.exports = MD2
        },
        10036: function(t, e, r) {
            "use strict";
            t.exports = r(10037)
        },
        10038: function(t, e, r) {
            "use strict";
            const i = r(5466),
                n = r(6263),
                s = r(6669),
                o = r(5579);
            class MD5SHA1 {
                constructor() {
                    this.md5 = new n, this.sha1 = new s
                }
                init() {
                    return this.md5.init(), this.sha1.init(), this
                }
                update(t) {
                    return this.md5.update(t), this.sha1.update(t), this
                }
                final() {
                    const t = Buffer.allocUnsafe(36);
                    return this.md5.final().copy(t, 0), this.sha1.final().copy(t, 16), t
                }
                static hash() {
                    return new MD5SHA1
                }
                static hmac() {
                    return new o(MD5SHA1, 64)
                }
                static digest(t) {
                    return MD5SHA1.ctx.init().update(t).final()
                }
                static root(t, e) {
                    return i(Buffer.isBuffer(t) && 36 === t.length), i(Buffer.isBuffer(e) && 36 === e.length), MD5SHA1.ctx.init().update(t).update(e).final()
                }
                static multi(t, e, r) {
                    const i = MD5SHA1.ctx;
                    return i.init(), i.update(t), i.update(e), r && i.update(r), i.final()
                }
                static mac(t, e) {
                    return MD5SHA1.hmac().init(e).update(t).final()
                }
            }
            MD5SHA1.native = n.native, MD5SHA1.id = "MD5SHA1", MD5SHA1.size = 36, MD5SHA1.bits = 288, MD5SHA1.blockSize = 64, MD5SHA1.zero = Buffer.alloc(36, 0), MD5SHA1.ctx = new MD5SHA1, t.exports = MD5SHA1
        },
        10039: function(t, e, r) {
            "use strict";
            const i = r(5466),
                n = r(5579),
                s = Buffer.alloc(8, 0),
                o = Buffer.alloc(64, 0);
            o[0] = 128;
            const c = new Uint32Array([1518500249, 1859775393, 2400959708, 3395469782]);
            class SHA1 {
                constructor() {
                    this.state = new Uint32Array(5), this.msg = new Uint32Array(80), this.block = Buffer.allocUnsafe(64), this.size = -1
                }
                init() {
                    return this.state[0] = 1732584193, this.state[1] = 4023233417, this.state[2] = 2562383102, this.state[3] = 271733878, this.state[4] = 3285377520, this.size = 0, this
                }
                update(t) {
                    return i(Buffer.isBuffer(t)), this._update(t, t.length), this
                }
                final() {
                    return this._final(Buffer.allocUnsafe(20))
                }
                _update(t, e) {
                    i(-1 !== this.size, "Context already finalized.");
                    let r = 63 & this.size,
                        n = 0;
                    if (this.size += e, r > 0) {
                        let i = 64 - r;
                        if (i > e && (i = e), t.copy(this.block, r, n, n + i), r += i, e -= i, n += i, r < 64) return;
                        this.transform(this.block, 0)
                    }
                    for (; e >= 64;) this.transform(t, n), n += 64, e -= 64;
                    e > 0 && t.copy(this.block, 0, n, n + e)
                }
                _final(t) {
                    i(-1 !== this.size, "Context already finalized.");
                    const e = this.size % 64,
                        r = 8 * this.size;
                    a(s, r * (1 / 4294967296), 0), a(s, r, 4), this._update(o, 1 + (119 - e) % 64), this._update(s, 8);
                    for (let e = 0; e < 5; e++) a(t, this.state[e], 4 * e), this.state[e] = 0;
                    for (let t = 0; t < 80; t++) this.msg[t] = 0;
                    for (let t = 0; t < 64; t++) this.block[t] = 0;
                    return this.size = -1, t
                }
                transform(t, e) {
                    const r = this.msg;
                    let i = this.state[0],
                        n = this.state[1],
                        s = this.state[2],
                        o = this.state[3],
                        a = this.state[4],
                        l = 0;
                    for (; l < 16; l++) r[l] = (d = e + 4 * l, 16777216 * (h = t)[d++] + 65536 * h[d++] + 256 * h[d++] + h[d]);
                    for (var h, d; l < 80; l++) r[l] = f(r[l - 3] ^ r[l - 8] ^ r[l - 14] ^ r[l - 16], 1);
                    for (l = 0; l < 80; l++) {
                        const t = l / 20 | 0;
                        let e = f(i, 5);
                        e += u(t, n, s, o), e += a, e += r[l], e += c[t], a = o, o = s, s = f(n, 30), n = i, i = e >>> 0
                    }
                    this.state[0] += i, this.state[1] += n, this.state[2] += s, this.state[3] += o, this.state[4] += a
                }
                static hash() {
                    return new SHA1
                }
                static hmac() {
                    return new n(SHA1, 64)
                }
                static digest(t) {
                    return SHA1.ctx.init().update(t).final()
                }
                static root(t, e) {
                    return i(Buffer.isBuffer(t) && 20 === t.length), i(Buffer.isBuffer(e) && 20 === e.length), SHA1.ctx.init().update(t).update(e).final()
                }
                static multi(t, e, r) {
                    const i = SHA1.ctx;
                    return i.init(), i.update(t), i.update(e), r && i.update(r), i.final()
                }
                static mac(t, e) {
                    return SHA1.hmac().init(e).update(t).final()
                }
            }

            function f(t, e) {
                return t << e | t >>> 32 - e
            }

            function u(t, e, r, i) {
                return 0 === t ? function(t, e, r) {
                    return t & e ^ ~t & r
                }(e, r, i) : 1 === t || 3 === t ? function(t, e, r) {
                    return t ^ e ^ r
                }(e, r, i) : 2 === t ? function(t, e, r) {
                    return t & e ^ t & r ^ e & r
                }(e, r, i) : 0
            }

            function a(t, e, r) {
                return t[r++] = e >>> 24, t[r++] = e >>> 16, t[r++] = e >>> 8, t[r++] = e, r
            }
            SHA1.native = 0, SHA1.id = "SHA1", SHA1.size = 20, SHA1.bits = 160, SHA1.blockSize = 64, SHA1.zero = Buffer.alloc(20, 0), SHA1.ctx = new SHA1, t.exports = SHA1
        },
        10040: function(t, e, r) {
            "use strict";
            const i = r(5466);

            function n(t, e) {
                i(t && "function" == typeof t.root), i(Array.isArray(e));
                const r = new Array(e.length);
                for (let t = 0; t < e.length; t++) r[t] = e[t];
                let n = r.length,
                    s = !1,
                    o = 0;
                if (0 === n) return r.push(t.zero), [r, s];
                for (; n > 1;) {
                    for (let e = 0; e < n; e += 2) {
                        const i = Math.min(e + 1, n - 1),
                            c = r[o + e],
                            f = r[o + i];
                        i === e + 1 && i + 1 === n && c.equals(f) && (s = !0);
                        const u = t.root(c, f);
                        r.push(u)
                    }
                    o += n, n = n + 1 >>> 1
                }
                return [r, s]
            }
            e.createTree = n, e.createRoot = function(t, e) {
                i(t && "function" == typeof t.root), i(Array.isArray(e));
                const [r, s] = n(t, e);
                return [r[r.length - 1], s]
            }, e.createBranch = function(t, e, r) {
                i(t && "function" == typeof t.root), i(e >>> 0 === e), i(Array.isArray(r)), i(e < r.length);
                let s = r.length;
                const [o] = n(t, r), c = [];
                let f = 0;
                for (; s > 1;) {
                    const t = Math.min(1 ^ e, s - 1);
                    c.push(o[f + t]), e >>>= 1, f += s, s = s + 1 >>> 1
                }
                return c
            }, e.deriveRoot = function(t, e, r, n) {
                i(t && "function" == typeof t.root), i(Buffer.isBuffer(e)), i(Array.isArray(r)), i(n >>> 0 === n);
                let s = e;
                for (const e of r) {
                    if (1 & n && e.equals(s)) return t.zero;
                    s = 1 & n ? t.root(e, s) : t.root(s, e), n >>>= 1
                }
                return s
            }
        },
        10041: function(t, e, r) {
            "use strict";
            const i = r(5466),
                n = Buffer.alloc(0),
                s = Buffer.from([1]),
                o = Buffer.from([0]);

            function c(t, e) {
                i(t && "function" == typeof t.multi), i(Array.isArray(e));
                const r = [],
                    n = f(t);
                for (const i of e) {
                    const e = u(t, i);
                    r.push(e)
                }
                let s = r.length,
                    o = 0;
                if (0 === s) return r.push(n), r;
                for (; s > 1;) {
                    for (let e = 0; e < s; e += 2) {
                        const i = e + 1,
                            c = r[o + e];
                        let f;
                        f = i < s ? r[o + i] : n;
                        const u = a(t, c, f);
                        r.push(u)
                    }
                    o += s, s = s + 1 >>> 1
                }
                return r
            }

            function f(t) {
                return t.digest(n)
            }

            function u(t, e) {
                return t.multi(o, e)
            }

            function a(t, e, r) {
                return i(null != r), t.multi(s, e, r)
            }
            e.createTree = c, e.createRoot = function(t, e) {
                const r = c(t, e);
                return r[r.length - 1]
            }, e.createBranch = function(t, e, r) {
                i(e >>> 0 === e);
                const n = c(t, r),
                    s = f(t),
                    o = [];
                let u = r.length,
                    a = 0;
                for (i(e < r.length); u > 1;) {
                    const t = 1 ^ e;
                    t < u ? o.push(n[a + t]) : o.push(s), e >>>= 1, a += u, u = u + 1 >>> 1
                }
                return o
            }, e.deriveRoot = function(t, e, r, n) {
                i(t && "function" == typeof t.multi), i(Buffer.isBuffer(e)), i(Array.isArray(r)), i(n >>> 0 === n);
                let s = u(t, e);
                for (const e of r) s = 1 & n ? a(t, e, s) : a(t, s, e), n >>>= 1;
                return s
            }, e.hashEmpty = f, e.hashLeaf = u, e.hashInternal = a
        },
        10046: function(t, e, r) {
            "use strict";
            const i = r(5466),
                n = r(5798),
                s = r(6661);
            class RNG {
                constructor(t) {
                    this.curve = t.curve, this.hash = t.hash, this.encode = t.encode.bind(t), this.chacha = new s, this.key = Buffer.alloc(32, 0), this.iv = Buffer.alloc(8, 0), this.cache = [new n(1), new n(1)]
                }
                init(t) {
                    i(Array.isArray(t));
                    const e = new this.hash;
                    e.init();
                    for (const [r, i, n] of t) e.update(i), e.update(r), e.update(this.encode(n));
                    let r = e.final();
                    return r.length > 32 && (r = r.slice(0, 32)), i(32 === r.length), this.key = r, this.cache[0] = new n(1), this.cache[1] = new n(1), this
                }
                encrypt(t) {
                    i(t >>> 0 === t);
                    const e = 2 * this.curve.scalarSize + 3 & -4,
                        r = Buffer.alloc(e, 0),
                        n = r.slice(0, this.curve.scalarSize),
                        s = r.slice(this.curve.scalarSize);
                    this.chacha.init(this.key, this.iv, t), this.chacha.encrypt(r);
                    for (let t = 0; t < e; t += 4)[r[t + 0], r[t + 3]] = [r[t + 3], r[t + 0]], [r[t + 1], r[t + 2]] = [r[t + 2], r[t + 1]];
                    return [this.curve.decodeScalar(n), this.curve.decodeScalar(s)]
                }
                refresh(t) {
                    let e = 0;
                    for (;;) {
                        this.iv[4] = e, this.iv[5] = e >>> 8, this.iv[6] = e >>> 16, this.iv[7] = e >>> 24, e += 1;
                        const [r, i] = this.encrypt(t);
                        if (!(r.isZero() || r.cmp(this.curve.n) >= 0) && !(i.isZero() || i.cmp(this.curve.n) >= 0)) {
                            this.cache[0] = r, this.cache[1] = i;
                            break
                        }
                    }
                }
                generate(t) {
                    return i(t >>> 0 === t), 1 & t && this.refresh(t >>> 1), this.cache[1 & t]
                }
            }
            t.exports = class Schnorr {
                constructor(t, e) {
                    this.curve = t, this.hash = e, this.msgSize = 32, this.sigSize = this.curve.fieldSize + this.curve.scalarSize, this.supported = this.support(), this.rng = new RNG(this)
                }
                support() {
                    return -1 === this.curve.one.redNeg().redJacobi() && 3 === this.curve.p.andln(3)
                }
                check() {
                    if (!this.supported) throw new Error(`Schnorr is not supported for ${this.curve.id}.`)
                }
                encode(t) {
                    i(Buffer.isBuffer(t));
                    const {
                        fieldSize: e
                    } = this.curve;
                    if (t.length === 1 + e) return t;
                    if (t.length !== 1 + 2 * e) throw new Error("Invalid point.");
                    const r = Buffer.allocUnsafe(1 + e);
                    return r[0] = 2 | 1 & t[t.length - 1], t.copy(r, 1, 1, 1 + e), r
                }
                hashInt(t, e, r) {
                    const i = this.hash.multi(t, e, r);
                    return n.decode(i, this.curve.endian).imod(this.curve.n)
                }
                sign(t, e) {
                    i(Buffer.isBuffer(t)), i(t.length === this.msgSize), this.check();
                    const r = this.curve.n,
                        n = this.curve.g,
                        s = this.curve.decodeScalar(e);
                    if (s.isZero() || s.cmp(r) >= 0) throw new Error("Invalid private key.");
                    const o = this.hashInt(e, t);
                    if (o.isZero()) throw new Error("Signing failed (k' = 0).");
                    const c = n.mulBlind(o),
                        f = this.curve.encodeField(c.getX()),
                        u = n.mulBlind(s).encode(),
                        a = this.hashInt(f, u, t),
                        [l, h] = this.curve.getBlinding();
                    s.imul(l).imod(r), o.imul(l).imod(r), o.cinject(o.neg().imod(r), c.y.redLegendre() >>> 31);
                    const d = o.iadd(a.imul(s)).imod(r);
                    return d.imul(h).imod(r), Buffer.concat([f, this.curve.encodeScalar(d)])
                }
                verify(t, e, r) {
                    if (i(Buffer.isBuffer(t)), i(Buffer.isBuffer(e)), i(Buffer.isBuffer(r)), this.check(), t.length !== this.msgSize) return !1;
                    if (e.length !== this.sigSize) return !1;
                    try {
                        return this._verify(t, e, r)
                    } catch (t) {
                        return !1
                    }
                }
                _verify(t, e, r) {
                    i(Buffer.isBuffer(t)), i(Buffer.isBuffer(e)), i(Buffer.isBuffer(r));
                    const n = this.curve.p,
                        s = this.curve.n,
                        o = this.curve.g,
                        c = e.slice(0, this.curve.fieldSize),
                        f = e.slice(this.curve.fieldSize),
                        u = this.curve.decodeField(c),
                        a = this.curve.decodeScalar(f),
                        l = this.curve.decodePoint(r);
                    if (u.cmp(n) >= 0 || a.cmp(s) >= 0) return !1;
                    const h = this.hashInt(c, this.encode(r), t),
                        d = o.jmulAdd(a, l, h.ineg().imod(s));
                    return !d.isInfinity() && (!!d.hasQuadY() && !!d.eqX(u))
                }
                verifyBatch(t) {
                    i(Array.isArray(t)), this.check();
                    for (const e of t) {
                        i(Array.isArray(e) && 3 === e.length);
                        const [t, r, n] = e;
                        if (i(Buffer.isBuffer(t)), i(Buffer.isBuffer(r)), i(Buffer.isBuffer(n)), t.length !== this.msgSize) return !1;
                        if (r.length !== this.sigSize) return !1
                    }
                    try {
                        return this._verifyBatch(t)
                    } catch (t) {
                        return !1
                    }
                }
                _verifyBatch(t) {
                    const e = this.curve.p,
                        r = this.curve.n,
                        i = this.curve.g,
                        s = new Array(1 + 2 * t.length),
                        o = new Array(1 + 2 * t.length),
                        c = new n(0);
                    this.rng.init(t), s[0] = i, o[0] = c;
                    for (let i = 0; i < t.length; i++) {
                        const [n, f, u] = t[i], a = f.slice(0, this.curve.fieldSize), l = f.slice(this.curve.fieldSize), h = this.curve.decodeField(a), d = this.curve.decodeScalar(l), p = this.curve.decodePoint(u);
                        if (h.cmp(e) >= 0 || d.cmp(r) >= 0) return !1;
                        const m = this.hashInt(a, this.encode(u), n),
                            A = this.curve.pointFromR(h),
                            B = this.rng.generate(i),
                            w = m.imul(B).imod(r);
                        c.iadd(d.imul(B)).imod(r), s[1 + 2 * i + 0] = A, o[1 + 2 * i + 0] = B, s[1 + 2 * i + 1] = p, o[1 + 2 * i + 1] = w
                    }
                    return c.ineg().imod(r), this.curve.jmulAll(s, o).isInfinity()
                }
            }
        },
        10051: function(t, e, r) {
            "use strict";
            const i = r(5466),
                n = r(7475),
                s = r(5579);
            class SHA384 extends n {
                constructor() {
                    super()
                }
                init() {
                    return this.state[0] = 3418070365, this.state[1] = 3238371032, this.state[2] = 1654270250, this.state[3] = 914150663, this.state[4] = 2438529370, this.state[5] = 812702999, this.state[6] = 355462360, this.state[7] = 4144912697, this.state[8] = 1731405415, this.state[9] = 4290775857, this.state[10] = 2394180231, this.state[11] = 1750603025, this.state[12] = 3675008525, this.state[13] = 1694076839, this.state[14] = 1203062813, this.state[15] = 3204075428, this.size = 0, this
                }
                final() {
                    return super.final().slice(0, 48)
                }
                static hash() {
                    return new SHA384
                }
                static hmac() {
                    return new s(SHA384, 128)
                }
                static digest(t) {
                    return SHA384.ctx.init().update(t).final()
                }
                static root(t, e) {
                    return i(Buffer.isBuffer(t) && 48 === t.length), i(Buffer.isBuffer(e) && 48 === e.length), SHA384.ctx.init().update(t).update(e).final()
                }
                static multi(t, e, r) {
                    const i = SHA384.ctx;
                    return i.init(), i.update(t), i.update(e), r && i.update(r), i.final()
                }
                static mac(t, e) {
                    return SHA384.hmac().init(e).update(t).final()
                }
            }
            SHA384.native = 0, SHA384.id = "SHA384", SHA384.size = 48, SHA384.bits = 384, SHA384.blockSize = 128, SHA384.zero = Buffer.alloc(48, 0), SHA384.ctx = new SHA384, t.exports = SHA384
        },
        10055: function(t, e, r) {
            "use strict";
            const i = r(5466),
                n = r(6262),
                s = r(5579);
            class SHA224 extends n {
                constructor() {
                    super()
                }
                init() {
                    return this.state[0] = 3238371032, this.state[1] = 914150663, this.state[2] = 812702999, this.state[3] = 4144912697, this.state[4] = 4290775857, this.state[5] = 1750603025, this.state[6] = 1694076839, this.state[7] = 3204075428, this.size = 0, this
                }
                final() {
                    return super.final().slice(0, 28)
                }
                static hash() {
                    return new SHA224
                }
                static hmac() {
                    return new s(SHA224, 64)
                }
                static digest(t) {
                    return SHA224.ctx.init().update(t).final()
                }
                static root(t, e) {
                    return i(Buffer.isBuffer(t) && 28 === t.length), i(Buffer.isBuffer(e) && 28 === e.length), SHA224.ctx.init().update(t).update(e).final()
                }
                static multi(t, e, r) {
                    const i = SHA224.ctx;
                    return i.init(), i.update(t), i.update(e), r && i.update(r), i.final()
                }
                static mac(t, e) {
                    return SHA224.hmac().init(e).update(t).final()
                }
            }
            SHA224.native = 0, SHA224.id = "SHA224", SHA224.size = 28, SHA224.bits = 224, SHA224.blockSize = 64, SHA224.zero = Buffer.alloc(28, 0), SHA224.ctx = new SHA224, t.exports = SHA224
        },
        10057: function(t, e, r) {
            "use strict";
            const i = r(5466),
                n = r(5798),
                s = r(10058),
                o = r(5636),
                {
                    randomPrime: c
                } = r(6662),
                {
                    countLeft: f
                } = r(5658),
                u = r(5797),
                a = r(5637),
                l = r(6666),
                h = r(5954),
                d = r(5866),
                p = r(7504),
                {
                    DEFAULT_BITS: m,
                    DEFAULT_EXP: A,
                    MIN_BITS: B,
                    MAX_BITS: w,
                    MIN_EXP: S,
                    MAX_EXP: g,
                    MIN_EXP_BITS: y,
                    MAX_EXP_BITS: v,
                    RSAKey: b,
                    RSAPrivateKey: x,
                    RSAPublicKey: K
                } = s,
                {
                    safeEqual: z,
                    safeEqualByte: k,
                    safeSelect: H,
                    safeLTE: E
                } = p,
                U = Buffer.alloc(0),
                M = Buffer.alloc(8, 0),
                I = {
                    BLAKE2B160: Buffer.from("3027300f060b2b060104018d3a0c02010505000414", "hex"),
                    BLAKE2B256: Buffer.from("3033300f060b2b060104018d3a0c02010805000420", "hex"),
                    BLAKE2B384: Buffer.from("3043300f060b2b060104018d3a0c02010c05000430", "hex"),
                    BLAKE2B512: Buffer.from("3053300f060b2b060104018d3a0c02011005000440", "hex"),
                    BLAKE2S128: Buffer.from("3023300f060b2b060104018d3a0c02020405000410", "hex"),
                    BLAKE2S160: Buffer.from("3027300f060b2b060104018d3a0c02020505000414", "hex"),
                    BLAKE2S224: Buffer.from("302f300f060b2b060104018d3a0c0202070500041c", "hex"),
                    BLAKE2S256: Buffer.from("3033300f060b2b060104018d3a0c02020805000420", "hex"),
                    GOST94: Buffer.from("302e300a06062a850302021405000420", "hex"),
                    KECCAK224: Buffer.from("302d300d06096086480165030402070500041c", "hex"),
                    KECCAK256: Buffer.from("3031300d060960864801650304020805000420", "hex"),
                    KECCAK384: Buffer.from("3041300d060960864801650304020905000430", "hex"),
                    KECCAK512: Buffer.from("3051300d060960864801650304020a05000440", "hex"),
                    MD2: Buffer.from("3020300c06082a864886f70d020205000410", "hex"),
                    MD4: Buffer.from("3020300c06082a864886f70d020405000410", "hex"),
                    MD5: Buffer.from("3020300c06082a864886f70d020505000410", "hex"),
                    MD5SHA1: Buffer.alloc(0),
                    RIPEMD160: Buffer.from("3022300a060628cf0603003105000414", "hex"),
                    SHA1: Buffer.from("3021300906052b0e03021a05000414", "hex"),
                    SHA224: Buffer.from("302d300d06096086480165030402040500041c", "hex"),
                    SHA256: Buffer.from("3031300d060960864801650304020105000420", "hex"),
                    SHA384: Buffer.from("3041300d060960864801650304020205000430", "hex"),
                    SHA512: Buffer.from("3051300d060960864801650304020305000440", "hex"),
                    SHA3_224: Buffer.from("302d300d06096086480165030402070500041c", "hex"),
                    SHA3_256: Buffer.from("3031300d060960864801650304020805000420", "hex"),
                    SHA3_384: Buffer.from("3041300d060960864801650304020905000430", "hex"),
                    SHA3_512: Buffer.from("3051300d060960864801650304020a05000440", "hex"),
                    SHAKE128: Buffer.from("3021300d060960864801650304020b05000410", "hex"),
                    SHAKE256: Buffer.from("3031300d060960864801650304020c05000420", "hex"),
                    WHIRLPOOL: Buffer.from("304e300a060628cf0603003705000440", "hex")
                };

            function R(t, e) {
                if (null == t && (t = m), null == e && (e = A), i(t >>> 0 === t), i(Number.isSafeInteger(e) && e >= 0), t < B || t > w) throw new RangeError(`"bits" ranges from ${B} to ${w}.`);
                if (e < S || e > g) throw new RangeError(`"exponent" ranges from ${S} to ${g}.`);
                if (1 === e || e % 2 == 0) throw new RangeError('"exponent" must be odd.');
                const [r] = function(t, e, r) {
                    if (i(t >>> 0 === t), i(e >>> 0 === e), i(Number.isSafeInteger(r) && r >= 0), i(e >= 4), i(r >= 3 && r % 2 != 0), t < 2) throw new Error("RSA key requires at least 2 primes.");
                    if (e < 64) {
                        let r = 2 ** Math.floor(e / t);
                        if (r /= Math.log(r) - 1, r /= 4, r /= 2, r <= t) throw new Error("Too few primes for RSA key.")
                    }
                    t: for (;;) {
                        const i = [];
                        let s = e;
                        t >= 7 && (s += Math.floor((t - 2) / 5));
                        for (let e = 0; e < t; e++) {
                            const r = Math.floor(s / (t - e)),
                                n = c(r);
                            i.push(n), s -= n.bitLength()
                        }
                        for (let e = 0; e < t; e++) {
                            const t = i[e];
                            for (let r = 0; r < e; r++)
                                if (0 === t.cmp(i[r])) continue t
                        }
                        const o = new n(1),
                            f = new n(1);
                        for (const t of i) o.imul(t), f.imul(t.subn(1));
                        if (o.bitLength() !== e) continue;
                        const u = new n(r);
                        let a = null;
                        try {
                            a = u.invert(f)
                        } catch (t) {
                            continue
                        }
                        const [l, h] = i, d = a.mod(l.subn(1)), p = a.mod(h.subn(1)), m = h.invert(l), A = new x;
                        A.n = o.encode(), A.e = u.encode(), A.d = a.encode(), A.p = l.encode(), A.q = h.encode(), A.dp = d.encode(), A.dq = p.encode(), A.qi = m.encode();
                        const B = [];
                        for (let t = 2; t < i.length; t++) {
                            const e = i[t].encode();
                            B.push(e)
                        }
                        return [A, B]
                    }
                }(2, t, e);
                return r
            }

            function C(t) {
                if (i(t instanceof x), ! function(t) {
                        i(t instanceof x);
                        const e = f(t.n),
                            r = f(t.e),
                            n = f(t.d),
                            s = f(t.p),
                            o = f(t.q),
                            c = f(t.dp),
                            u = f(t.dq),
                            a = f(t.qi);
                        if (0 === s || 0 === o) return !1;
                        if (0 === r && 0 === n) return !1;
                        if (0 !== e) {
                            if (e < B || e > w) return !1;
                            if (e > s + o) return !1
                        }
                        if (0 !== r) {
                            if (r < y || r > v) return !1;
                            if (0 == (1 & t.e[t.e.length - 1])) return !1
                        }
                        if (0 !== n && n > s + o) return !1;
                        if (0 !== c && c > s) return !1;
                        if (0 !== u && u > o) return !1;
                        if (0 !== a && a > s) return !1;
                        return !0
                    }(t)) throw new Error("Invalid RSA private key.");
                if (!$(t)) return t;
                const e = n.decode(t.p),
                    r = n.decode(t.q);
                let s = n.decode(t.n),
                    o = n.decode(t.e),
                    c = n.decode(t.d),
                    u = n.decode(t.dp),
                    a = n.decode(t.dq),
                    l = n.decode(t.qi);
                if (0 === s.bitLength() && (s = e.mul(r), t.n = s.encode()), 0 === o.bitLength()) {
                    const i = e.subn(1).imul(r.subn(1));
                    o = c.invert(i), t.e = o.encode()
                }
                if (0 === c.bitLength()) {
                    const i = e.subn(1).imul(r.subn(1));
                    c = o.invert(i), t.d = c.encode()
                }
                return 0 === u.bitLength() && (u = c.mod(e.subn(1)), t.dp = u.encode()), 0 === a.bitLength() && (a = c.mod(r.subn(1)), t.dq = a.encode()), 0 === l.bitLength() && (l = r.invert(e), t.qi = l.encode()), t
            }

            function L(t) {
                if (i(t instanceof x), !X(t)) throw new Error("Invalid RSA private key.");
                return new l.RSAPrivateKey(0, t.n, t.e, t.d, t.p, t.q, t.dp, t.dq, t.qi).encode()
            }

            function _(t) {
                const e = l.RSAPrivateKey.decode(t);
                return i(0 === e.version.toNumber()), new x(e.n.value, e.e.value, e.d.value, e.p.value, e.q.value, e.dp.value, e.dq.value, e.qi.value)
            }

            function q(t) {
                if (i(t instanceof b), !j(t)) throw new Error("Invalid RSA public key.");
                return new l.RSAPublicKey(t.n, t.e).encode()
            }

            function D(t) {
                const e = l.RSAPublicKey.decode(t);
                return new K(e.n.value, e.e.value)
            }

            function P(t, e, r, n, s = O) {
                t && "string" == typeof t.id && (t = t.id), i(null == t || "string" == typeof t), i(Buffer.isBuffer(e)), i(Buffer.isBuffer(r)), i(n instanceof b), i("function" == typeof s);
                try {
                    return function(t, e, r, n, s) {
                        t && "string" == typeof t.id && (t = t.id);
                        i(null == t || "string" == typeof t), i(Buffer.isBuffer(e)), i(Buffer.isBuffer(r)), i(n instanceof b), i("function" == typeof s);
                        const [o, c] = V(t, e);
                        if (!o) return !1;
                        if (e.length !== c) return !1;
                        const f = n.size();
                        if (r.length !== f) return !1;
                        if (!j(n)) return !1;
                        const u = o.length + c;
                        if (f < u + 11) return !1;
                        const a = s(r, n);
                        let l = 1;
                        l &= k(a[0], 0), l &= k(a[1], 1);
                        for (let t = 2; t < f - u - 1; t++) l &= k(a[t], 255);
                        return l &= k(a[f - u - 1], 0), l &= z(a.slice(f - u, f - c), o), l &= z(a.slice(f - c, f), e), 1 === l
                    }(t, e, r, n, s)
                } catch (t) {
                    return !1
                }
            }

            function N(t, e, r = T) {
                i(Buffer.isBuffer(t)), i(e instanceof x), i("function" == typeof r);
                const n = e.size();
                if (t.length !== n) throw new Error("Invalid RSA message size.");
                if (!X(e)) throw new Error("Invalid RSA private key.");
                if (n < 11) throw new Error("Invalid RSA private key.");
                const s = r(t, e),
                    o = k(s[0], 0),
                    c = k(s[1], 2);
                let f = 0,
                    u = 1;
                for (let t = 2; t < s.length; t++) {
                    const e = k(s[t], 0);
                    f = H(u & e, t, f), u = H(e, 0, u)
                }
                const a = o & c & 1 & ~u & E(10, f);
                if (f = H(a, f + 1, 0), 0 === a) throw new Error("Invalid ciphertext.");
                return s.slice(f)
            }

            function W(t, e, r, n, s = T) {
                null == n && (n = U), i(t && "string" == typeof t.id), i(Buffer.isBuffer(e)), i(Buffer.isBuffer(n)), i(r instanceof x), i("function" == typeof s);
                const o = r.size(),
                    c = e.length,
                    f = t.size;
                if (c !== o) throw new Error("Invalid RSA message size.");
                if (!X(r)) throw new Error("Invalid RSA private key.");
                if (o < 2 * f + 2) throw new Error("Invalid RSA private key size.");
                const u = s(e, r),
                    a = t.digest(n),
                    l = k(u[0], 0),
                    h = u.slice(1, f + 1),
                    d = u.slice(f + 1);
                G(t, d, h), G(t, h, d);
                const p = d.slice(0, f),
                    m = z(p, a);
                let A = 1,
                    B = 0,
                    w = 0;
                const S = d.slice(f);
                for (let t = 0; t < S.length; t++) {
                    const e = k(S[t], 0),
                        r = k(S[t], 1);
                    B = H(A & r, t, B), A = H(r, 0, A), w = H(A & ~e, 1, w)
                }
                if (1 != (l & m & ~w & ~A)) throw new Error("Invalid RSA ciphertext.");
                return S.slice(B + 1)
            }

            function Z(t, e, r, n, s = -1, o = O) {
                i(t && "string" == typeof t.id), i(Buffer.isBuffer(e)), i(Buffer.isBuffer(r)), i(n instanceof b), i(-1 === s || s >>> 0 === s), i("function" == typeof o);
                try {
                    return function(t, e, r, n, s = -1, o) {
                        if (i(t && "string" == typeof t.id), i(Buffer.isBuffer(e)), i(Buffer.isBuffer(r)), i(n instanceof b), i(-1 === s || s >>> 0 === s), i("function" == typeof o), e.length !== t.size) return !1;
                        if (r.length !== n.size()) return !1;
                        if (!j(n)) return !1;
                        const c = o(r, n),
                            f = n.bits(); - 1 === s && (s = t.size);
                        return function(t, e, r, n, s) {
                            i(t && "string" == typeof t.id), i(Buffer.isBuffer(e)), i(Buffer.isBuffer(r)), i(n >>> 0 === n), i(s >>> 0 === s);
                            const o = t.size;
                            if (e.length !== o) return !1;
                            const c = n + 7 >>> 3;
                            if (c < o + s + 2) return !1;
                            if (188 !== r[r.length - 1]) return !1;
                            const f = r.slice(0, c - o - 1),
                                u = r.slice(c - o - 1, r.length - 1),
                                a = 255 << 8 - (8 * c - n) & 255;
                            if (0 != (r[0] & a)) return !1;
                            if (G(t, u, f), f[0] &= 255 >>> 8 * c - n, 0 === s) {
                                s = c - (o + 2);
                                t: for (; s >= 0; s--) {
                                    switch (f[c - o - s - 2]) {
                                        case 1:
                                            break t;
                                        case 0:
                                            continue;
                                        default:
                                            return !1
                                    }
                                }
                                if (s < 0) return !1
                            } else {
                                const t = c - o - s - 2;
                                for (let e = 0; e < t; e++)
                                    if (0 !== f[e]) return !1;
                                if (1 !== f[t]) return !1
                            }
                            const l = f.slice(f.length - s);
                            return t.multi(M, e, l).equals(u)
                        }(t, e, c, f - 1, s)
                    }(t, e, r, n, s, o)
                } catch (t) {
                    return !1
                }
            }

            function O(t, e) {
                if (i(Buffer.isBuffer(t)), i(e instanceof b), t.length !== e.size()) throw new Error("Invalid RSA message size.");
                const r = n.decode(e.n),
                    s = n.decode(e.e);
                if (r.isZero() || s.isZero()) throw new Error("Invalid RSA public key.");
                const o = n.decode(t);
                if (o.cmp(r) >= 0) throw new Error("Invalid RSA message size.");
                return o.powm(s, r).encode("be", r.byteLength())
            }

            function T(t, e) {
                i(Buffer.isBuffer(t)), i(e instanceof x);
                let r = n.decode(e.n),
                    s = n.decode(e.e);
                if (r.isZero()) {
                    const t = n.decode(e.p),
                        i = n.decode(e.q);
                    if (t.isZero() || i.isZero()) throw new Error("Invalid RSA private key.");
                    r = t.imul(i)
                }
                if (s.isZero()) {
                    const t = n.decode(e.d),
                        r = n.decode(e.p),
                        i = n.decode(e.q);
                    if (t.isZero() || r.isZero() || i.isZero()) throw new Error("Invalid RSA private key.");
                    const o = r.isubn(1).imul(i.isubn(1));
                    try {
                        s = t.invert(o)
                    } catch (s) {
                        throw new Error("Invalid RSA private key.")
                    }
                }
                const c = n.decode(t);
                if (c.cmp(r) >= 0 || r.isZero()) throw new Error("Invalid RSA message size.");
                const [f, u] = function(t, e) {
                    i(t instanceof n), i(e instanceof n);
                    let r = null,
                        s = null;
                    for (;;) {
                        const i = n.random(o, 1, t);
                        try {
                            s = i.invert(t)
                        } catch (e) {
                            continue
                        }
                        r = i.powm(e, t);
                        break
                    }
                    return [r, s]
                }(r, s);
                c.imul(f).imod(r);
                let a = null;
                if ($(e)) {
                    let t = n.decode(e.d);
                    if (t.isZero()) {
                        const r = n.decode(e.p),
                            i = n.decode(e.q);
                        if (r.isZero() || i.isZero()) throw new Error("Invalid RSA private key.");
                        const o = r.isubn(1).imul(i.isubn(1));
                        try {
                            t = s.invert(o)
                        } catch (s) {
                            throw new Error("Invalid RSA private key.")
                        }
                    }
                    a = c.powm(t, r)
                } else {
                    const t = n.decode(e.p),
                        i = n.decode(e.q),
                        o = n.decode(e.dp),
                        f = n.decode(e.dq),
                        u = n.decode(e.qi),
                        l = c.powm(o, t, !0),
                        h = c.powm(f, i, !0);
                    a = l.isub(h).imul(u).imod(t).imul(i).iadd(h).imod(r);
                    if (!a.powm(s, r).isub(c).imod(r).isZero()) {
                        const t = n.decode(e.d);
                        a = c.powm(t, r)
                    }
                }
                return a.imul(u).imod(r), a.encode("be", r.byteLength())
            }

            function F(t, e, r) {
                if (i(Buffer.isBuffer(t)), i(e >>> 0 === e), i(r instanceof b), !j(r)) throw new Error("Invalid RSA public key.");
                if (t.length !== r.size()) throw new Error("Invalid RSA ciphertext.");
                if (e < r.bits()) throw new Error("Cannot make ciphertext smaller.");
                const s = n.decode(t),
                    c = n.decode(r.n);
                if (s.cmp(c) >= 0) throw new Error("Invalid ciphertext.");
                const f = new n(1).iushln(e),
                    u = f.sub(s).iadd(c).isubn(1).div(c);
                let a = f;
                for (; a.cmp(f) >= 0;) {
                    const t = n.random(o, 0, u);
                    u.cmpn(1) > 0 && t.isZero() || (a = s.add(t.imul(c)))
                }
                return i(0 === a.mod(c).cmp(s)), i(a.bitLength() <= e), a.encode("be", e + 7 >>> 3)
            }

            function J(t, e, r) {
                if (i(Buffer.isBuffer(t)), i(e >>> 0 === e), i(r instanceof b), !j(r)) throw new Error("Invalid RSA public key.");
                const s = r.size();
                if (t.length < s) throw new Error("Invalid RSA ciphertext.");
                if (f(t) > e) throw new Error("Invalid RSA ciphertext.");
                const o = n.decode(t),
                    c = n.decode(r.n);
                return o.imod(c).encode("be", s)
            }

            function j(t) {
                i(t instanceof b);
                const e = f(t.n);
                if (e < B || e > w) return !1;
                const r = f(t.e);
                return !(r < y || r > v) && 0 != (1 & t.e[t.e.length - 1])
            }

            function X(t) {
                if (i(t instanceof x), !j(t)) return !1;
                const e = f(t.n),
                    r = f(t.d);
                if (0 === r || r > e) return !1;
                const n = f(t.p),
                    s = f(t.q);
                if (e > n + s) return !1;
                const o = f(t.dp);
                if (0 === o || o > n) return !1;
                const c = f(t.dq);
                if (0 === c || c > s) return !1;
                const u = f(t.qi);
                return !(0 === u || u > n)
            }

            function $(t) {
                return i(t instanceof x), 0 === f(t.n) || 0 === f(t.e) || 0 === f(t.d) || 0 === f(t.dp) || 0 === f(t.dq) || 0 === f(t.qi)
            }

            function G(t, e, r) {
                i(t && "string" == typeof t.id), i(Buffer.isBuffer(e)), i(Buffer.isBuffer(r));
                const n = Buffer.allocUnsafe(4);
                n.fill(0);
                let s = 0;
                for (; s < r.length;) {
                    const i = t.multi(e, n);
                    for (let t = 0; t < i.length && s < r.length; t++) r[s] ^= i[t], s += 1;
                    for (let t = 3; t >= 0; t--) {
                        if (255 !== n[t]) {
                            n[t] += 1;
                            break
                        }
                        n[t] = 0
                    }
                }
            }

            function V(t, e) {
                if (i(null == t || "string" == typeof t), i(Buffer.isBuffer(e)), null == t) return [U, e.length];
                const r = I[t];
                return Buffer.isBuffer(r) ? [r, r.length > 0 ? r[r.length - 1] : 36] : [null, 0]
            }
            e.native = 0, e.RSAKey = b, e.RSAPublicKey = K, e.RSAPrivateKey = x, e.privateKeyGenerate = R, e.privateKeyGenerateAsync = async function(t, e) {
                if (null == t && (t = m), null == e && (e = A), i(t >>> 0 === t), i(Number.isSafeInteger(e) && e >= 0), t < B || t > w) throw new RangeError(`"bits" ranges from ${B} to ${w}.`);
                if (e < S || e > g) throw new RangeError(`"exponent" ranges from ${S} to ${g}.`);
                if (1 === e || e % 2 == 0) throw new RangeError('"exponent" must be odd.');
                try {
                    return await async function(t, e) {
                        i(t >>> 0 === t), i(Number.isSafeInteger(e) && e >= 0), i(t >= 4), i(e >= 3 && e % 2 != 0);
                        const r = global.crypto || global.msCrypto;
                        if (!r) throw new Error("Crypto API not available.");
                        const n = r.subtle;
                        if (!n) throw new Error("Subtle API not available.");
                        if (!n.generateKey || !n.exportKey) throw new Error("Subtle key generation not available.");
                        const s = e * (1 / 4294967296) >>> 0,
                            o = e >>> 0,
                            c = new Uint8Array(8);
                        c[0] = 0, c[1] = 0, c[2] = s >>> 8, c[3] = s, c[4] = o >>> 24, c[5] = o >>> 16, c[6] = o >>> 8, c[7] = o;
                        const f = {
                                name: "RSASSA-PKCS1-v1_5",
                                modulusLength: t,
                                publicExponent: c,
                                hash: {
                                    name: "SHA-256"
                                }
                            },
                            a = await n.generateKey(f, !0, ["sign"]),
                            l = await n.exportKey("jwk", a.privateKey),
                            h = new x;
                        return h.n = u.decodeURL(l.n), h.e = u.decodeURL(l.e), h.d = u.decodeURL(l.d), h.p = u.decodeURL(l.p), h.q = u.decodeURL(l.q), h.dp = u.decodeURL(l.dp), h.dq = u.decodeURL(l.dq), h.qi = u.decodeURL(l.qi), h
                    }(t, e)
                } catch (r) {
                    return R(t, e)
                }
            }, e.privateKeyCompute = C, e.privateKeyVerify = function(t) {
                if (i(t instanceof x), !X(t)) return !1;
                const e = new n(1),
                    r = [n.decode(t.p), n.decode(t.q)];
                for (const t of r) {
                    if (t.cmpn(1) <= 0) return !1;
                    e.imul(t)
                }
                const s = n.decode(t.n);
                if (0 !== e.cmp(s)) return !1;
                const o = n.decode(t.d),
                    c = n.decode(t.e).imul(o);
                for (const t of r) {
                    if (0 !== c.mod(t.subn(1)).cmpn(1)) return !1
                }
                return !0
            }, e.privateKeyExport = L, e.privateKeyImport = _, e.privateKeyExportPKCS8 = function(t) {
                return i(t instanceof x), new h.PrivateKeyInfo(0, a.objects.keyAlgs.RSA, new a.Null, L(t)).encode()
            }, e.privateKeyImportPKCS8 = function(t) {
                const e = h.PrivateKeyInfo.decode(t),
                    {
                        algorithm: r,
                        parameters: n
                    } = e.algorithm;
                return i(0 === e.version.toNumber()), i(r.toString() === a.objects.keyAlgs.RSA), i(n.node.type === a.types.NULL), _(e.privateKey.value)
            }, e.privateKeyExportJWK = function(t) {
                return i(t instanceof x), t.toJSON()
            }, e.privateKeyImportJWK = function(t) {
                const e = x.fromJSON(t);
                return C(e), e
            }, e.publicKeyCreate = function(t) {
                i(t instanceof x);
                const e = new K;
                return e.n = t.n, e.e = t.e, e
            }, e.publicKeyVerify = function(t) {
                return i(t instanceof b), j(t)
            }, e.publicKeyExport = q, e.publicKeyImport = D, e.publicKeyExportSPKI = function(t) {
                return new d.SubjectPublicKeyInfo(a.objects.keyAlgs.RSA, new a.Null, q(t)).encode()
            }, e.publicKeyImportSPKI = function(t) {
                const e = d.SubjectPublicKeyInfo.decode(t),
                    {
                        algorithm: r,
                        parameters: n
                    } = e.algorithm;
                return i(r.toString() === a.objects.keyAlgs.RSA), i(n.node.type === a.types.NULL), D(e.publicKey.rightAlign())
            }, e.publicKeyExportJWK = function(t) {
                return i(t instanceof b), t.toPublic().toJSON()
            }, e.publicKeyImportJWK = function(t) {
                return K.fromJSON(t)
            }, e.sign = function(t, e, r, n = T) {
                t && "string" == typeof t.id && (t = t.id), i(null == t || "string" == typeof t), i(Buffer.isBuffer(e)), i(r instanceof x), i("function" == typeof n);
                const [s, o] = V(t, e);
                if (!s) throw new Error("Unknown RSA hash function.");
                if (e.length !== o) throw new Error("Invalid RSA message size.");
                if (!X(r)) throw new Error("Invalid RSA private key.");
                const c = s.length + o,
                    f = r.size();
                if (f < c + 11) throw new Error("Message too long.");
                const u = Buffer.allocUnsafe(f);
                u[0] = 0, u[1] = 1;
                for (let t = 2; t < f - c - 1; t++) u[t] = 255;
                return u[f - c - 1] = 0, s.copy(u, f - c), e.copy(u, f - o), n(u, r)
            }, e.verify = P, e.verifyLax = function(t, e, r, n, s) {
                return i(n instanceof b), P(t, e, n.pad(r), n, s)
            }, e.encrypt = function(t, e, r = O) {
                if (i(Buffer.isBuffer(t)), i(e instanceof b), i("function" == typeof r), !j(e)) throw new Error("Invalid RSA public key.");
                const n = e.size();
                if (t.length > n - 11) throw new Error("Invalid RSA message size.");
                const s = Buffer.allocUnsafe(n),
                    c = t.length,
                    f = n - c - 3;
                return s[0] = 0, s[1] = 2,
                    function(t, e, r) {
                        i(Buffer.isBuffer(t)), i(e >>> 0 === e), i(r >>> 0 === r), o.randomFill(t, e, r);
                        const n = e + r;
                        for (let r = e; r < n; r++)
                            for (; 0 === t[r];) o.randomFill(t, r, 1)
                    }(s, 2, f), s[n - c - 1] = 0, t.copy(s, n - c), r(s, e)
            }, e.decrypt = N, e.decryptLax = function(t, e, r) {
                return i(e instanceof b), N(e.pad(t), e, r)
            }, e.encryptOAEP = function(t, e, r, n, s = O) {
                if (null == n && (n = U), i(t && "string" == typeof t.id), i(Buffer.isBuffer(e)), i(Buffer.isBuffer(n)), i(r instanceof b), i("function" == typeof s), !j(r)) throw new Error("Invalid RSA public key.");
                const c = r.size(),
                    f = e.length,
                    u = t.size;
                if (f > c - 2 * u - 2) throw new Error("Invalid RSA message size.");
                const a = Buffer.allocUnsafe(c),
                    l = a.slice(1, 1 + u),
                    h = a.slice(1 + u),
                    d = h.length;
                return a[0] = 0, o.randomFill(l, 0, l.length), t.digest(n).copy(h, 0), h.fill(0, u, d - f - 1), h[d - f - 1] = 1, e.copy(h, d - f), G(t, l, h), G(t, h, l), s(a, r)
            }, e.decryptOAEP = W, e.decryptOAEPLax = function(t, e, r, n, s) {
                return i(r instanceof b), W(t, r.pad(e), r, n, s)
            }, e.signPSS = function(t, e, r, n = -1, s = T) {
                if (i(t && "string" == typeof t.id), i(Buffer.isBuffer(e)), i(r instanceof x), i(-1 === n || n >>> 0 === n), i("function" == typeof s), e.length !== t.size) throw new Error("Invalid RSA message size.");
                if (!X(r)) throw new Error("Invalid RSA private key.");
                0 === n ? n = r.size() - 2 - t.size : -1 === n && (n = t.size);
                const c = o.randomBytes(n);
                return s(function(t, e, r, n) {
                    i(t && "string" == typeof t.id), i(Buffer.isBuffer(e)), i(r >>> 0 === r), i(Buffer.isBuffer(n));
                    const s = t.size,
                        o = n.length,
                        c = r + 7 >>> 3;
                    if (e.length !== s) throw new Error("RSA input must be hashed message.");
                    if (c < s + o + 2) throw new Error("RSA key size too small for PSS signature.");
                    const f = Buffer.allocUnsafe(c);
                    f.fill(0);
                    const u = f.slice(0, c - o - s - 2 + 1 + o),
                        a = f.slice(c - o - s - 2 + 1 + o, c - 1);
                    return t.multi(M, e, n).copy(a, 0), u[c - o - s - 2] = 1, n.copy(u, c - o - s - 1), G(t, a, u), u[0] &= 255 >>> 8 * c - r, f[c - 1] = 188, f
                }(t, e, r.bits() - 1, c), r)
            }, e.verifyPSS = Z, e.verifyPSSLax = function(t, e, r, n, s, o) {
                return i(n instanceof b), Z(t, e, n.pad(r), n, s, o)
            }, e.encryptRaw = O, e.decryptRaw = T, e.veil = F, e.veilLax = function(t, e, r) {
                return i(r instanceof b), F(r.pad(t), e, r)
            }, e.unveil = J, e.unveilLax = function(t, e, r) {
                return i(r instanceof b), J(r.pad(t), e, r)
            }
        },
        10061: function(t, e, r) {
            "use strict";
            const i = r(5466),
                n = r(7501),
                s = r(5799),
                o = new Uint32Array(16),
                c = new Uint32Array(16);

            function f(t) {
                for (let e = 0; e < 16; e++) o[e] = B(t, 4 * e);
                for (let t = 0; t < 16; t++) c[t] = o[t];
                for (let t = 0; t < 8; t += 2) c[4] ^= u(c[0] + c[12], 7), c[8] ^= u(c[4] + c[0], 9), c[12] ^= u(c[8] + c[4], 13), c[0] ^= u(c[12] + c[8], 18), c[9] ^= u(c[5] + c[1], 7), c[13] ^= u(c[9] + c[5], 9), c[1] ^= u(c[13] + c[9], 13), c[5] ^= u(c[1] + c[13], 18), c[14] ^= u(c[10] + c[6], 7), c[2] ^= u(c[14] + c[10], 9), c[6] ^= u(c[2] + c[14], 13), c[10] ^= u(c[6] + c[2], 18), c[3] ^= u(c[15] + c[11], 7), c[7] ^= u(c[3] + c[15], 9), c[11] ^= u(c[7] + c[3], 13), c[15] ^= u(c[11] + c[7], 18), c[1] ^= u(c[0] + c[3], 7), c[2] ^= u(c[1] + c[0], 9), c[3] ^= u(c[2] + c[1], 13), c[0] ^= u(c[3] + c[2], 18), c[6] ^= u(c[5] + c[4], 7), c[7] ^= u(c[6] + c[5], 9), c[4] ^= u(c[7] + c[6], 13), c[5] ^= u(c[4] + c[7], 18), c[11] ^= u(c[10] + c[9], 7), c[8] ^= u(c[11] + c[10], 9), c[9] ^= u(c[8] + c[11], 13), c[10] ^= u(c[9] + c[8], 18), c[12] ^= u(c[15] + c[14], 7), c[13] ^= u(c[12] + c[15], 9), c[14] ^= u(c[13] + c[12], 13), c[15] ^= u(c[14] + c[13], 18);
                for (let t = 0; t < 16; t++) o[t] += c[t];
                for (let e = 0; e < 16; e++) w(t, o[e], 4 * e)
            }

            function u(t, e) {
                return t << e | t >>> 32 - e
            }

            function a(t, e, r, i) {
                const n = Buffer.allocUnsafe(64);
                p(n, t, 0, 64 * (2 * i - 1), 64);
                for (let s = 0; s < 2 * i; s++) m(n, t, 0, 64 * s, 64), f(n), p(e, n, r + 64 * s, 0, 64);
                for (let n = 0; n < i; n++) p(t, e, 64 * n, r + 2 * n * 64, 64);
                for (let n = 0; n < i; n++) p(t, e, 64 * (n + i), r + 64 * (2 * n + 1), 64)
            }

            function l(t, e) {
                return B(t, 64 * (2 * e - 1))
            }

            function h(t, e, r, i, n, s) {
                const o = s,
                    c = s;
                p(o, t, 0, e, 128 * r);
                for (let t = 0; t < i; t++) p(n, o, t * (128 * r), 0, 128 * r), a(o, c, 128 * r, r);
                for (let t = 0; t < i; t++) {
                    m(o, n, 0, (l(o, r) & i - 1) * (128 * r), 128 * r), a(o, c, 128 * r, r)
                }
                p(t, o, e, 0, 128 * r)
            }
            async function d(t, e, r, i, n, s) {
                const o = s,
                    c = s;
                p(o, t, 0, e, 128 * r);
                for (let t = 0; t < i; t++) p(n, o, t * (128 * r), 0, 128 * r), a(o, c, 128 * r, r), await A();
                for (let t = 0; t < i; t++) {
                    m(o, n, 0, (l(o, r) & i - 1) * (128 * r), 128 * r), a(o, c, 128 * r, r), await A()
                }
                p(t, o, e, 0, 128 * r)
            }

            function p(t, e, r, i, n) {
                e.copy(t, r, i, i + n)
            }

            function m(t, e, r, i, n) {
                for (let s = 0; s < n; s++) t[r + s] ^= e[i + s]
            }

            function A() {
                return new Promise(t => setImmediate(t))
            }

            function B(t, e) {
                return t[e++] + 256 * t[e++] + 65536 * t[e++] + 16777216 * t[e]
            }

            function w(t, e, r) {
                return t[r++] = e, e >>>= 8, t[r++] = e, e >>>= 8, t[r++] = e, e >>>= 8, t[r++] = e, r
            }
            e.native = 0, e.derive = function(t, e, r, o, c, f) {
                if ("string" == typeof t && (t = Buffer.from(t, "utf8")), "string" == typeof e && (e = Buffer.from(e, "utf8")), null == e && (e = Buffer.alloc(0)), i(Buffer.isBuffer(t)), i(Buffer.isBuffer(e)), i(r >>> 0 === r), i(o >>> 0 === o), i(c >>> 0 === c), i(f >>> 0 === f), o * c >= 1 << 30) throw new Error("EFBIG");
                if (0 != (r & r - 1) || 0 === r) throw new Error("EINVAL");
                if (r > 4294967295) throw new Error("EINVAL");
                const u = Buffer.allocUnsafe(256 * o),
                    a = Buffer.allocUnsafe(128 * o * r),
                    l = n.derive(s, t, e, 1, 128 * c * o);
                for (let t = 0; t < c; t++) h(l, 128 * t * o, o, r, a, u);
                return n.derive(s, t, l, 1, f)
            }, e.deriveAsync = async function(t, e, r, o, c, f) {
                if ("string" == typeof t && (t = Buffer.from(t, "utf8")), "string" == typeof e && (e = Buffer.from(e, "utf8")), null == e && (e = Buffer.alloc(0)), i(Buffer.isBuffer(t)), i(Buffer.isBuffer(e)), i(r >>> 0 === r), i(o >>> 0 === o), i(c >>> 0 === c), i(f >>> 0 === f), o * c >= 1 << 30) throw new Error("EFBIG");
                if (0 != (r & r - 1) || 0 === r) throw new Error("EINVAL");
                if (r > 4294967295) throw new Error("EINVAL");
                const u = Buffer.allocUnsafe(256 * o),
                    a = Buffer.allocUnsafe(128 * o * r),
                    l = await n.deriveAsync(s, t, e, 1, 128 * c * o);
                for (let t = 0; t < c; t++) await d(l, 128 * t * o, o, r, a, u);
                return n.deriveAsync(s, t, l, 1, f)
            }
        },
        10063: function(t, e, r) {
            "use strict";
            const i = r(5955),
                n = r(5799),
                s = r(10064);
            t.exports = new i("SECP256K1", n, s)
        },
        10066: function(t, e, r) {
            "use strict";
            const i = r(7488);
            class SHA3 extends i {
                constructor() {
                    super()
                }
                final() {
                    return super.final(6, null)
                }
                static hash() {
                    return new SHA3
                }
                static hmac(t = 256) {
                    return super.hmac(t, 6, null)
                }
                static digest(t, e = 256) {
                    return super.digest(t, e, 6, null)
                }
                static root(t, e, r = 256) {
                    return super.root(t, e, r, 6, null)
                }
                static multi(t, e, r, i = 256) {
                    return super.multi(t, e, r, i, 6, null)
                }
                static mac(t, e, r = 256) {
                    return super.mac(t, e, r, 6, null)
                }
            }
            SHA3.native = 0, SHA3.id = "SHA3_256", SHA3.size = 32, SHA3.bits = 256, SHA3.blockSize = 136, SHA3.zero = Buffer.alloc(32, 0), SHA3.ctx = new SHA3, t.exports = SHA3
        },
        10073: function(t, e, r) {
            "use strict";
            const i = r(5466),
                n = 1 / 4294967296;

            function s(t, e) {
                i(Buffer.isBuffer(t)), i(Buffer.isBuffer(e) && e.length >= 16);
                const r = t.length >>> 3,
                    n = new U64(1936682341, 1886610805),
                    s = new U64(1685025377, 1852075885),
                    o = new U64(1819895653, 1852142177),
                    c = new U64(1952801890, 2037671283),
                    u = new U64(t.length << 24, 0),
                    a = new U64(0, 255),
                    l = U64.decode(e, 0),
                    h = U64.decode(e, 8),
                    d = n.ixor(l),
                    p = s.ixor(h),
                    m = o.ixor(l),
                    A = c.ixor(h);
                let B = 0;
                for (let e = 0; e < r; e++) {
                    const e = U64.decode(t, B);
                    A.ixor(e), f(d, p, m, A), f(d, p, m, A), d.ixor(e), B += 8
                }
                switch (7 & t.length) {
                    case 7:
                        u.hi |= t[B + 6] << 16;
                    case 6:
                        u.hi |= t[B + 5] << 8;
                    case 5:
                        u.hi |= t[B + 4];
                    case 4:
                        u.lo |= t[B + 3] << 24;
                    case 3:
                        u.lo |= t[B + 2] << 16;
                    case 2:
                        u.lo |= t[B + 1] << 8;
                    case 1:
                        u.lo |= t[B]
                }
                return A.ixor(u), f(d, p, m, A), f(d, p, m, A), d.ixor(u), m.ixor(a), f(d, p, m, A), f(d, p, m, A), f(d, p, m, A), f(d, p, m, A), d.ixor(p), d.ixor(m), d.ixor(A), [d.hi, d.lo]
            }

            function o(t, e, r) {
                i("number" == typeof t), i("number" == typeof e), i(Buffer.isBuffer(r) && r.length >= 16);
                const n = new U64(1936682341, 1886610805),
                    s = new U64(1685025377, 1852075885),
                    o = new U64(1819895653, 1852142177),
                    c = new U64(1952801890, 2037671283),
                    u = new U64(t, e),
                    a = new U64(0, 255),
                    l = U64.decode(r, 0),
                    h = U64.decode(r, 8),
                    d = n.ixor(l),
                    p = s.ixor(h),
                    m = o.ixor(l),
                    A = c.ixor(h);
                return A.ixor(u), f(d, p, m, A), f(d, p, m, A), d.ixor(u), m.ixor(a), f(d, p, m, A), f(d, p, m, A), f(d, p, m, A), f(d, p, m, A), d.ixor(p), d.ixor(m), d.ixor(A), [d.hi, d.lo]
            }

            function c(t, e, r) {
                i("number" == typeof t), i("number" == typeof e), i(Buffer.isBuffer(r) && r.length >= 32);
                const n = new U64(t, e),
                    s = new U64(0, 255),
                    o = U64.decode(r, 0),
                    c = U64.decode(r, 8),
                    u = U64.decode(r, 16),
                    a = U64.decode(r, 24);
                return a.ixor(n), f(o, c, u, a), f(o, c, u, a), o.ixor(n), u.ixor(s), f(o, c, u, a), f(o, c, u, a), f(o, c, u, a), f(o, c, u, a), o.ixor(c), o.ixor(u), o.ixor(a), [o.hi, o.lo]
            }
            class U64 {
                constructor(t, e) {
                    this.hi = 0 | t, this.lo = 0 | e
                }
                isum(t, e) {
                    const r = this,
                        i = r.lo + e | 0,
                        n = i >> 31,
                        s = r.lo >> 31,
                        o = e >> 31,
                        c = 1 & (s & o | ~n & (s ^ o)),
                        f = (r.hi + t | 0) + c;
                    return r.hi = 0 | f, r.lo = i, r
                }
                iadd(t) {
                    return this.isum(t.hi, t.lo)
                }
                ixor(t) {
                    return this.hi ^= t.hi, this.lo ^= t.lo, this
                }
                irotl(t) {
                    let e = this.hi,
                        r = this.lo,
                        i = this.hi,
                        n = this.lo;
                    return t < 32 ? (e <<= t, e |= r >>> 32 - t, r <<= t) : (e = r << t - 32, r = 0), (t = 64 - t) < 32 ? (n >>>= t, n |= i << 32 - t, i >>>= t) : (n = i >>> t - 32, i = 0), this.hi = e | i, this.lo = r | n, this
                }
                static mul(t, e) {
                    const r = t >>> 16,
                        i = 65535 & t,
                        n = e >>> 16,
                        s = 65535 & e;
                    let o = 0,
                        c = 0,
                        f = 0,
                        u = 0;
                    u += i * s, f += u >>> 16, u &= 65535, f += r * s, c += f >>> 16, f &= 65535, f += i * n, c += f >>> 16, f &= 65535, o += c >>> 16, c &= 65535, c += r * n, o += c >>> 16, c &= 65535, o += c >>> 16, o &= 65535;
                    return new U64(o << 16 | c, f << 16 | u)
                }
                static decode(t, e) {
                    const r = u(t, e),
                        i = u(t, e + 4);
                    return new U64(i, r)
                }
            }

            function f(t, e, r, i) {
                t.iadd(e), e.irotl(13), e.ixor(t), t.irotl(32), r.iadd(i), i.irotl(16), i.ixor(r), t.iadd(i), i.irotl(21), i.ixor(t), r.iadd(e), e.irotl(17), e.ixor(r), r.irotl(32)
            }

            function u(t, e) {
                return t[e++] + 256 * t[e++] + 65536 * t[e++] + 16777216 * t[e]
            }
            e.native = 0, e.siphash = function(t, e) {
                return s(t, e)
            }, e.siphash32 = function(t, e) {
                return o(0, t, e)[1]
            }, e.siphash64 = function(t, e, r) {
                return o(t, e, r)
            }, e.siphash32k256 = function(t, e) {
                return c(0, t, e)[1]
            }, e.siphash64k256 = function(t, e, r) {
                return c(t, e, r)
            }, e.sipmod = function(t, e, r, i) {
                const [o, c] = s(t, e);
                return function(t, e, r, i) {
                    const s = U64.mul(t, r),
                        o = U64.mul(t, i),
                        c = U64.mul(r, e),
                        f = U64.mul(e, i),
                        u = (o.lo >>> 0) + (c.lo >>> 0) + (f.hi >>> 0),
                        a = (o.hi >>> 0) + (c.hi >>> 0) + (u * n >>> 0),
                        {
                            hi: l,
                            lo: h
                        } = s.isum(a * n | 0, 0 | a);
                    return [l, h]
                }(o, c, r, i)
            }
        },
        10075: function(t, e, r) {
            "use strict";
            const i = r(5466),
                n = r(5579),
                s = Buffer.alloc(32, 0),
                o = Buffer.alloc(64, 0);
            o[0] = 128;
            const c = new Uint32Array([0, 0, 404997864, 2276983119, 916902645, 2037354834, 1622973326, 2735504181, 501274562, 776732247, 360134629, 2683325146, 1489578250, 2980080517, 3176993012, 3409839463, 3827777931, 2810025432, 4226710630, 3709290398, 3391995655, 2908390195]),
                f = new Uint32Array([404250648, 3229102296, 589532195, 95372838, 3334881222, 2130284984, 3907553256, 326094331, 2273781383, 1285624779, 3099122360, 2841799953, 16843777, 134545929, 1330585935, 1114545677, 909563958, 2918083739, 2795938470, 1493455359, 3537006546, 3736975628, 4126536693, 4211537678, 2038036857, 4018205334, 1869586799, 1607392816, 2442231441, 4243537773, 1381127506, 2852627704, 1616944480, 670941255, 3166489276, 2306237749, 2610648731, 2899127095, 2391671438, 76284298, 2745415331, 1897225170, 202125324, 1614551148, 2071720315, 4287297156, 892720181, 3051448960, 488469533, 3899210485, 3772819424, 1397218739, 3621223383, 4138513185, 3267506114, 1592629660, 774813742, 1838570563, 1263219019, 1652201001, 4278116350, 2736906589, 1465336151, 2182524629, 353719317, 2822843069, 2004337015, 2679566056, 926407735, 2783669906, 3857036261, 2069288862, 2678015647, 2363040531, 4042319856, 3541564707, 1246377290, 1786745888, 3671740378, 2660608324, 1482194264, 4196774050, 3385394121, 113938383, 690594857, 1435325052, 168437770, 1344410714, 2981232305, 3780083536, 2694888096, 1763335625, 1802219883, 2145048084, 2240097925, 1554716633, 3183333053, 2171823932, 1566402909, 3526670991, 269500432, 2152734864, 4109694964, 4077122823, 3419081675, 381717469, 1044314174, 3989208275, 84218885, 672205357, 1734836583, 535219832, 3840194532, 1934874007, 656907303, 633032194, 1094785345, 844661363, 2341148299, 748489639, 2812782247, 1359041526, 2105403773, 3482647218, 2509598357, 3707451209, 3638052824, 2392829270, 4227582971, 2335239024, 4008615918, 594657741, 2088562044, 3348232379, 1717994854, 400804977, 3722269661, 2794366843, 387406871, 3091934895, 1195835719, 38178373, 2661171870, 2229018906, 3402239946, 516262356, 757969965, 1972984408, 3217016511, 2440651566, 117906439, 941297215, 2913832621, 19089324, 1515877722, 3928994992, 2206414467, 1823808495, 859032627, 2248107702, 1667469667, 1072875100, 33687554, 269091858, 2863305386, 959990163, 1903286641, 2947080926, 3368552392, 248483270, 421094425, 3363648209, 1229535561, 1919980091, 3654894553, 2258284383, 4076007410, 3273521457, 3823348707, 1263066024, 1532719451, 3794450105, 2290621064, 881987004, 2593804954, 2764581182, 640063526, 767446027, 842188850, 2381997247, 2964388528, 3913973081, 3924394985, 459984882, 252656655, 2016616055, 3587535829, 3869685555, 2155887232, 1958354420, 3200172734, 2575065383, 3452769229, 652117995, 875876404, 3185862793, 1212693832, 2054524978, 4294958079, 2871321428, 2054878586, 4153406605, 2425387664, 4108991844, 1600086367, 3258891933, 539000864, 497041469, 1751694696, 1742065679, 437938202, 3497145546, 2930672302, 422330807, 3031755444, 3378410877, 1414810964, 2585372878, 2475914899, 3974445951, 572688418, 229262383, 1684311396, 132761699, 4059161585, 3675455274, 1936970099, 3215124172, 303187986, 2421826690, 1077943616, 979206266, 134750216, 1076367432, 3284347843, 1458084757, 3974928364, 863749599, 3688582107, 2526063437, 2711731873, 1629446080, 2374831757, 478349201, 1027470397, 4123622088, 2543281815, 3438359387, 0, 0, 3486456783, 919897081, 724282411, 1166497390, 1987495286, 2545151201, 2189570690, 1689262566, 3604381654, 4272533800, 454781979, 3631691459, 3048599221, 3243997044, 2947516079, 287916990, 1785378154, 2011157533, 1347444048, 3121455338, 1162152261, 307006039, 4092849139, 3407412024, 808501296, 2649776301, 4025457647, 729072580, 1061157951, 3854794458, 1431652693, 2451352263, 2728571554, 2031114715, 3941240810, 57002473, 1701153125, 267176554, 3132805818, 3110627587, 791657519, 1704156746, 3233818560, 1323801998, 3739115486, 3196166496, 471625756, 3765188860, 4261270525, 3140413254, 1296902477, 1382324767, 2459071122, 3839900022, 1970653557, 2411522810, 101062662, 807275574, 2324304522, 613943726, 2998071986, 4181752139, 3873882086, 1666830725, 235812878, 1882594430, 522157087, 4167253735, 1650627938, 938984533, 3570694100, 4003706170, 2829621928, 691162497, 2526438038, 3304337746, 4193895417, 2604330850, 3318035397, 1727436707, 623219749, 900811280, 1499035993, 4062229163, 2223254148, 1420694992, 1920128370, 3081233605, 960095289, 3588059884, 1280060748, 1516345366, 1583244638, 3392912532, 2021195128, 3884314783, 943251512, 3721949413, 2357987980, 344327576, 3520160721, 3333603095, 2779098789, 1091262436, 3806506978, 1129175457, 1633786209, 804831822, 3014915763, 4047862594, 555844641, 363151924, 2627488412, 2497062152, 505313310, 4033232110, 1128468803, 575833697, 3351722951, 1996264369, 4244428796, 3005998415, 67375108, 538183716, 1364285777, 2986910435, 2576965273, 3167170341, 1835903341, 1338300962, 218969101, 1748572773, 4210741242, 2201348473, 3755957215, 3062145897, 2122245502, 3617324201, 606375972, 1035225113, 993782843, 3319232254, 2880149163, 826100634, 3469615054, 1053917680, 286344209, 2287280793, 2408515215, 210305923, 1313744206, 1248566276, 3082282679, 3511776102, 3958082539, 190893024, 1010626620, 4258035905, 2172731009, 2092900349, 2492754580, 3573429568, 4160224247, 3943494428, 3115966137, 2707910424, 320031763, 2556372619, 741126188, 2107398225, 3553848275, 3602430725, 3890723815, 1801245580, 1852745070, 1472977977, 3301193668, 1861457322, 50531331, 403637787, 1448494422, 2316545244, 1145310532, 441026654, 2139087231, 3751739040, 2846465705, 557272968, 707438634, 1300386919, 3149649595, 2976738058, 3250660289, 1189257095, 1397969235, 2718082801, 3705427932, 2928387442, 185281547, 1478956627, 2644332189, 2631083777, 1819061612, 1203886123, 825345073, 2515886756, 1953811828, 2277107955, 4143382518, 3809079573, 1178993990, 172198988, 2896988844, 153503141, 2307464841, 1016532917, 336875540, 2688821428, 3789661153, 1531109306, 370563094, 2957913254, 976939066, 3453121783, 1768536425, 1875956230, 151593993, 1210913345, 1886444912, 2813190359, 3065438902, 3646189935, 3503318992, 3468147998, 3991770093, 998164438, 3435927500, 786138594, 1111627074, 710378600, 2560121496, 3032624428, 2762255012, 1225676269, 673751080, 1569214581, 1549561180, 3660691590, 4177053688, 2470440299, 2256937606, 1151603138]),
                u = new Uint32Array([3625457760, 415266864, 639837068, 587575110, 3100034623, 3330210193, 4226345095, 3893587917, 3414656806, 2269946131, 297318618, 3098108525, 151060740, 17302786, 223301409, 1329753758, 2604021464, 917368428, 4289111714, 2790851665, 215143023, 3537812921, 251000307, 4126869239, 2524543481, 2045739250, 812609441, 1868549854, 1838256510, 2449272639, 4166144597, 1386874788, 1197498525, 1613233600, 901561546, 3163125349, 932944726, 2611793195, 2324598274, 2382662657, 3533939638, 2742097243, 1812728880, 207633432, 2222685169, 2080344822, 2150970836, 901112170, 4112326004, 501770554, 3017859239, 3763554269, 567793531, 3623267507, 2630009391, 3261001113, 1127100088, 778933852, 692800305, 1264745110, 1576992479, 4272103905, 3579270977, 1468143278, 3172275540, 363348266, 3900143553, 2006955758, 2453092316, 933620590, 2665866675, 3850065623, 329228102, 2676807971, 602992871, 4040366077, 541739573, 1248493460, 1155193423, 3667826089, 2723698813, 1492788656, 3486107907, 3372665487, 2083072420, 693472594, 1510607400, 173023764, 1353822718, 2984333183, 3382747322, 2691242589, 342584241, 1803541206, 3649406254, 2237442839, 1019067854, 3179377511, 2405260649, 1574057146, 2416971840, 276844576, 133494007, 4109566965, 3721120523, 3407265931, 3544071928, 1055770236, 755303700, 86511882, 2020042625, 1730143950, 2548360375, 3832763349, 36120476, 656784206, 1933656345, 1093818498, 2810940182, 2334956811, 4138182566, 2807103827, 2994568681, 2110756090, 1234539886, 2514287415, 1457051719, 3633225645, 1895562187, 4220203243, 3454987935, 3995300289, 3145497837, 2093453816, 1902536325, 1712841676, 2078137683, 3718680231, 2937526108, 397953838, 1162299137, 1191331470, 446602818, 2659507233, 3570059791, 3391014281, 1479355828, 762681690, 784318406, 3213982051, 1057425180, 121117454, 2897063310, 2902532935, 2958711413, 1525297076, 4018373430, 2204939547, 3056808908, 864419686, 1550017425, 1665135302, 302121480, 34605572, 2477435538, 2855876681, 3731976665, 1907337442, 3335047175, 3356413837, 3508083044, 432569650, 994658617, 1232236690, 1608112451, 3649477295, 838005487, 4072873465, 2833507243, 3813361883, 3109772145, 1541548726, 3163064346, 2285146637, 1050319442, 2594490409, 187049624, 640532044, 3207738056, 848165476, 1504751866, 2968078973, 4075415939, 3910888143, 1997475644, 259535646, 869651827, 3588662967, 4102062138, 2155133469, 666812098, 3197729889, 3956133139, 3441876615, 2301899984, 884860008, 843597885, 1215985040, 1426063323, 4289406179, 2373614325, 2063044596, 1687195770, 2431969853, 2640273249, 1606565566, 1025515648, 538812480, 258500797, 1751635408, 3390708328, 449868340, 3081678466, 2920885313, 2108994794, 3033095797, 3461633101, 1419385256, 2140377974, 2481775931, 790766216, 571320900, 1667523725, 1678240200, 720499171, 4057666303, 3430118353, 1941938918, 2182222408, 311450148, 2051031069, 1077566848, 1208485920, 138422288, 2512634667, 3277252763, 3756846231, 3962796997, 1306254155, 3684077739, 3231818174, 2707496799, 2441973006, 2367456007, 3359456756, 1039518074, 1536661350, 2546790707, 0, 0, 4191145755, 3476477059, 1848322988, 725976918, 3782637253, 1989653484, 3867312690, 2187636761, 685168255, 3607013809, 3273333612, 467171126, 1958065646, 3049347959, 3199184774, 2937137475, 493513397, 1786240980, 3931131997, 1354370464, 1464157449, 1158827146, 955511787, 4090173691, 2905616576, 815657056, 3304058779, 4012602563, 3661578236, 1072022398, 3344258377, 1435638954, 3684868786, 2725843033, 3924486799, 3926091209, 1785030025, 1695542474, 62569170, 3132713065, 1244606396, 795186014, 2394996775, 3226396573, 1625218655, 3737026977, 4229700720, 484469816, 1191050707, 4256902887, 525159721, 1297245338, 1989317234, 2464473145, 4202001865, 1972354282, 906364440, 103816716, 2928314898, 2317654025, 1270002418, 3002679417, 2246502079, 3865270737, 2114850360, 242234908, 3877576572, 536372030, 1432511125, 1647835076, 987026551, 3572409269, 2175314074, 2821272141, 1385600610, 2529489969, 1660549571, 4187699951, 2747647283, 3311859351, 270869908, 624275786, 2874759545, 1509040306, 3498345514, 2220142101, 3312612053, 1924638692, 3963173348, 970317170, 374098989, 1280991640, 2489212517, 1590311868, 2675472637, 2028439024, 3845667040, 954062960, 2559347722, 2350155269, 399626595, 3519460031, 3836061102, 2772503383, 2716000943, 3796061657, 1315004825, 1630533826, 1119073270, 3018933627, 874586500, 555066690, 144481354, 2626999845, 3994951288, 519071292, 1631798033, 1126322822, 2982659899, 3346463891, 1341979863, 4239600613, 604242960, 69211144, 3813757273, 1370622114, 630823262, 2579285807, 577596841, 1833944282, 1695354164, 224934170, 2046491343, 4202903017, 1776279387, 3753280675, 2843639525, 2128059388, 421799056, 608023624, 4265294828, 1002821494, 2594941846, 2872130891, 4040085023, 3460223361, 2568032580, 294147362, 2207223558, 2399963395, 72240677, 1313500060, 1723316198, 3083948403, 3773557643, 3943391435, 3241950448, 1023265912, 4253122878, 2172436255, 1083479146, 2496986677, 486012923, 4159376627, 414824926, 3114362735, 2333283148, 328752934, 1361849520, 746429528, 97768299, 3554064571, 2364008379, 3882573011, 963538597, 1851247580, 2865022007, 3295605653, 453182220, 51908358, 3696645701, 1451889580, 1581532173, 1142573448, 2692710369, 2145361662, 2292820382, 2837526351, 1730816680, 709722708, 180075478, 3148967275, 2277622051, 3242648223, 4048769873, 1403126438, 1927076951, 3702426533, 1393232684, 190326550, 27106638, 2644300583, 728525997, 1816642008, 2754687428, 831911266, 4084495565, 1955052008, 368506623, 4142074353, 1279673861, 1175077772, 2779557002, 2886280773, 3045689630, 2302449423, 3021214800, 346047528, 3135365539, 3780854495, 2786465368, 380653100, 4147788520, 986567284, 107571641, 1768935634, 1091111204, 155725074, 3614470365, 1890037216, 1874245346, 3067696241, 517001319, 3503208381, 3605917075, 3980099271, 3805072407, 3425622917, 1749172757, 1110071172, 748197978, 2561983021, 3986990250, 2756251221, 1965566112, 677218384, 2254199917, 1557803448, 1811478727, 4170399725, 3263596066, 2252645393]),
                a = new Uint32Array([819468312, 1612234872, 1176904483, 2351105455, 2444805830, 1069973241, 3455838440, 2280133487, 332105607, 646401185, 1829877944, 3669535074, 34144513, 67176453, 2651672399, 558842478, 1822111286, 3627462126, 1375708838, 2728810756, 3104625362, 1876090557, 4144952821, 4092984070, 4069947769, 4185517952, 3727716207, 2708430798, 1064145297, 2123496687, 2767737426, 1431480839, 3225903200, 2640324605, 1698020540, 3401353590, 725064603, 1453042893, 25857678, 42861708, 1540531107, 3064164629, 409734156, 806117436, 4135877499, 4051435402, 1786787125, 3560289761, 989142301, 1948117097, 3719553248, 2816496455, 3005339607, 2077750956, 2577187522, 801267437, 1547906606, 3090050454, 2519288651, 827023994, 3781033726, 3758007073, 2933217111, 1096253974, 717034773, 1410705473, 4008212343, 3245842358, 1855076151, 3694634475, 3617514981, 3018160982, 588488607, 1184861401, 4246991088, 3891319575, 2485144138, 894069375, 2839861978, 1339727509, 2963429464, 2102983205, 2412759497, 63506122, 1383868713, 2754172301, 341445130, 671764514, 2135994801, 4273070415, 1573494944, 3131074842, 3591662443, 2976612314, 400131461, 780491947, 1732033981, 3468525939, 3129957725, 1767756340, 546312208, 1074823248, 4110939380, 4160025347, 2346568651, 197859008, 2094218814, 4164873670, 170722565, 335882257, 3463997287, 2171019238, 3583501540, 3085202259, 1308763943, 2619811259, 2188591425, 423703128, 195529611, 378219677, 1408673703, 2795983105, 4206001533, 3917336468, 927569301, 1855315195, 2908149976, 1205374623, 3950050299, 3422260016, 3251498734, 2683183985, 4173036668, 3984377745, 3429983846, 2238060515, 2809912797, 1407035022, 783226647, 1545058379, 2386904903, 21430854, 555392670, 1117684956, 2312424138, 264904389, 1515728173, 3022878105, 1664008127, 3334443385, 239011591, 470235163, 1202498989, 2393702691, 3031456346, 1968892463, 468681603, 914582709, 1723216691, 3425928703, 3327943523, 2439200754, 68289026, 134352906, 1234414250, 2460629304, 3806228849, 3648106408, 2378614984, 130551503, 852564249, 1679411325, 2453358921, 961114736, 2942294489, 1138329242, 4180800242, 4025664285, 3685278691, 2883799880, 3065600859, 1901847082, 230459528, 445133970, 691968666, 1385866440, 1275799078, 2552638910, 1690251826, 3358756346, 2103029936, 4205898058, 3488803305, 2213092202, 511119119, 1007646771, 3073627605, 1943398054, 502562944, 981497018, 1629994686, 3267271036, 2280377805, 332211934, 1753822260, 3493117412, 2419214408, 1028160117, 3813998591, 3690965796, 4102912634, 4118476687, 1030000784, 2056320234, 3197984607, 1633665598, 1077747744, 2149588384, 3490670696, 3177736149, 885660186, 1746587762, 1102556846, 2192447788, 1971172532, 3937716574, 2832094292, 1297390105, 998216595, 1989405925, 1143939618, 2283933098, 3361956964, 2372143081, 4281004529, 3824278290, 3872158579, 3514023842, 612504082, 1209176154, 2155495488, 490748509, 273156104, 537411624, 2610283459, 734222056, 3319786732, 2548839291, 2874006491, 1272682128, 1606459809, 3198247199, 126979469, 244128899, 2059943229, 4097701321, 861640599, 1721224433, 0, 0, 2214186959, 466564820, 1450060587, 2888516999, 3974198902, 3312883635, 434537090, 847406256, 2972243670, 2144796329, 918756123, 1813764215, 2004137397, 4004888923, 1136570287, 2259620137, 3558697578, 3043653599, 2699710544, 1565571597, 2320975173, 155521612, 4214813683, 3958623e3, 1621962800, 3224411632, 3284463599, 2616142708, 2128232255, 4232046019, 2865190229, 1230344732, 1507566242, 2996992272, 3387550442, 2414478181, 3395970405, 2305101804, 1761852090, 3535452520, 1581920047, 3157222803, 2643378368, 666914535, 2707480286, 1608433281, 956046364, 1880940652, 3880189437, 3556621102, 2585742669, 692933220, 964072082, 1922229472, 3942282613, 3379924924, 204867078, 403058718, 162433674, 311043224, 2035004082, 4071815488, 3515213542, 3219546969, 478023182, 940470326, 1055334175, 2082469987, 3293930082, 2506242039, 3040531668, 2010443427, 1300342952, 2594711858, 827496086, 1654047988, 4016241145, 3287915322, 2544092613, 868574966, 1242572069, 2485466545, 2997573977, 2035937824, 365986948, 713315502, 3838145138, 3581065127, 1928083769, 3828995549, 2551598156, 759978593, 3163840094, 1700710971, 4036982904, 4252559237, 1894070328, 3761823192, 93883532, 176952454, 3206009297, 1674692274, 1474602405, 2930065675, 3651265250, 2950841165, 3259916641, 2573283320, 2067968947, 4138987845, 1110712609, 2216760741, 621321372, 1251775702, 1022238238, 2015293542, 2254521155, 289612370, 2477901767, 1002927868, 3847224572, 3623662379, 136578052, 268705812, 2732806481, 1498526216, 790993305, 1587133639, 3659689325, 2842513348, 442830093, 873293881, 3917085434, 3489301301, 2741624799, 1541387908, 4238966398, 3850295195, 1209607204, 2418294196, 1996372795, 3963340247, 1268427691, 2527801661, 2180042446, 533610193, 580456721, 1141999701, 58953615, 110038153, 2617527886, 625887851, 1936111543, 3870806353, 3420515307, 2347436896, 2025929788, 4030528972, 536707457, 1048673471, 893424788, 1788138750, 4078761975, 4227328780, 1863891385, 3736707431, 646648595, 1276352607, 1481714732, 2955705756, 3137721299, 1809045176, 3549226983, 3152505692, 3694751342, 2775472075, 2510996676, 935620339, 102433539, 201529359, 2900121174, 1163299347, 2287879236, 222566985, 4271931263, 3783253918, 1334356393, 2661884215, 1416047146, 2821344642, 1795865531, 3602624877, 2676474305, 599869154, 2800833363, 1364435458, 2775768284, 1474080395, 374541067, 738940967, 654417309, 1318952147, 3626724460, 2909554625, 1654927665, 3291583989, 3908269172, 3446966201, 4044748534, 4294370057, 2353808966, 88476227, 1168485548, 2326530342, 263555465, 512310423, 682890260, 1343529028, 3753566689, 2749455170, 749082134, 1477881934, 1962359354, 3896167890, 3523635561, 3110694864, 306252041, 604588077, 3772215408, 3715147693, 1903146678, 3803634004, 3172913360, 1741737655, 3352751597, 2481798014, 2246233292, 399257307, 2221425218, 356657751, 757897368, 1519957186, 1441637540, 2862893326, 1349855272, 2686999944, 3095813212, 1834801713, 3983276280, 3354956607, 297961094, 579224740]),
                l = new Uint32Array([2016466968, 408950976, 2940610083, 596386565, 4187076806, 3326068350, 1875770344, 3901220883, 2702429063, 2267449164, 1651315128, 3101341865, 84019457, 17039624, 1855851855, 1327583042, 4000095030, 920139437, 72482726, 2795677273, 3183021266, 3530543838, 116854517, 4126406139, 2163381881, 2046392815, 3470667887, 1872850783, 4013911441, 2440991228, 128251986, 1381323434, 4257236832, 1620926503, 1986344380, 3167403145, 3442161563, 2606144428, 2348911246, 2382532100, 358339235, 2746655601, 1008233484, 204475488, 2331411579, 2079423487, 3781853237, 903099829, 1765471517, 494149096, 1205711840, 3769098323, 2897420759, 3615217654, 3986267330, 3257909854, 2522628910, 783822445, 2056661323, 1261521762, 568417790, 4276092579, 380556631, 1463900034, 1093319957, 357832104, 3069110391, 2009167775, 3949892151, 937179045, 1456971493, 3853772155, 3642954655, 2672205708, 402465776, 4041732307, 2140414026, 1245006442, 2510898394, 3662666398, 632332888, 1484609786, 3398422473, 3372468486, 2370993193, 698624341, 571759114, 170396240, 1333743793, 2986258913, 442354080, 2696585321, 3671463019, 1806789503, 2870466949, 2234418524, 1936145597, 3184442753, 884641629, 1567186386, 1344311312, 272633984, 66390004, 4109890803, 3230391755, 3406547734, 3330069310, 1056456429, 285879557, 85198120, 3872290919, 1736533791, 1406506980, 3837256819, 3142451751, 664545061, 1484944193, 1092174130, 2634786699, 2333510444, 22279847, 2812716881, 2499457661, 2112454095, 4214704533, 2507052508, 2678937304, 3628587150, 820736251, 4224449419, 1908526574, 4003458595, 2448997244, 2095938759, 3821826406, 1720018455, 2393340893, 3713260966, 1261350679, 391911352, 1183728967, 1191266050, 3693157022, 2655166084, 3314144458, 3390032414, 2572834861, 766782837, 2036543167, 3217473425, 453918471, 119277368, 591899821, 2911808769, 800370778, 1517640426, 3038506883, 2201387884, 4284921395, 869020549, 4073086051, 1670472511, 168038914, 34079248, 944346026, 2861738553, 2833440369, 1910075823, 3482175176, 3355953166, 2100482329, 425990600, 1888631625, 1228491122, 2595184601, 3645102470, 502870514, 4075811523, 1222355171, 3819692875, 716618075, 1534155746, 2450373768, 2283440180, 3358146202, 2589104804, 3192654630, 647505453, 4200906546, 851980941, 1249728944, 2969219305, 1792013033, 3917736219, 857634575, 255594360, 2797024213, 3581138406, 3122525312, 2151317620, 2086741950, 3200433817, 3733449677, 3440626982, 3832056116, 886060221, 1972384328, 1211975802, 618878207, 4292607915, 2415168890, 2062908151, 3929891984, 2423951604, 1052679519, 1600217026, 2688564512, 545267741, 3587182440, 1757243495, 1916062234, 443030224, 742504366, 2927799833, 1584758196, 3035280585, 430493268, 1414354074, 3845881747, 2474021868, 2856595234, 579346957, 3922223972, 1686987783, 318712561, 4058247643, 2733034611, 1943106495, 1512342034, 306713232, 1568700992, 1075658810, 672155656, 136316992, 3902510531, 3274425174, 2076565484, 3969379379, 2427145691, 3679181718, 526368929, 2713624929, 2198311309, 2366541084, 3380267069, 1039416821, 4046674839, 2540083148, 0, 0, 3565418959, 3474706230, 2270588459, 732703557, 3018645878, 1992652439, 2954487426, 2184348260, 2846959830, 3598702334, 2000077595, 460069848, 1534555317, 3052320193, 692305583, 2944839441, 3755220330, 1790274167, 228649552, 1348292794, 1284134725, 1158235410, 419117299, 4092326859, 4032867632, 817901725, 1958986991, 4019973931, 3279870527, 1073496037, 480954197, 1430869394, 274324386, 2729615993, 1707731434, 3935300099, 3972688485, 1703503119, 1751712698, 3134372537, 2472430127, 800862053, 3885862592, 3223830606, 2174836958, 3730824894, 1815673884, 477109472, 786908925, 4258528699, 1687822157, 1294552402, 3761862290, 2456982244, 3169516149, 1976137103, 504116742, 102237744, 2550771338, 2316470820, 1081691058, 3002249977, 1506903526, 3871336035, 907836942, 238554736, 1665066783, 528228344, 4156839266, 1653957175, 2746563284, 3564623086, 843940264, 2828707881, 4096873110, 2523043524, 988766969, 4190370203, 4137132997, 3308504422, 2974421029, 630465845, 548580185, 1501125106, 2920665220, 2217378900, 2816787826, 1926591159, 3715296313, 971258325, 1637357132, 1278037082, 1002214494, 1583701706, 2247139192, 2029877479, 3631277368, 954218717, 2248513676, 2349501460, 2998867921, 3512979910, 190309541, 2779686209, 1306108386, 3803177539, 4173483617, 1637441839, 1165705907, 3019289585, 2772579361, 562307349, 3592751260, 2622135444, 1715269150, 511188720, 1384538435, 1125204770, 4237537735, 3342583670, 736448508, 4242013363, 336077828, 68158496, 144892753, 1364808114, 3341755801, 2573113788, 3302629997, 1839820111, 958031117, 221515112, 904493562, 4207934083, 2225301983, 3747340214, 2617026942, 2128969431, 3024623908, 613426237, 3614899771, 1005337541, 1028364971, 2878778161, 3514953934, 3458190910, 1428330769, 289673608, 2298708879, 2399571724, 1805386830, 1311067722, 1366517431, 3085350865, 1623974123, 3951815435, 3430465852, 1022377213, 3206544769, 2168357244, 4264902804, 2490012884, 217259255, 4160485355, 1735334073, 3118381473, 1596361491, 323752856, 2623033644, 749743229, 3099264467, 3547059158, 1557368039, 3887851371, 3420207470, 1856335447, 4086672068, 3291989102, 252058371, 51118872, 330095702, 1447384714, 1233673796, 1141720090, 2667487359, 2145484767, 927959209, 2845747489, 2186569514, 715663949, 1835731643, 3151412145, 3802105793, 3240345926, 44495187, 1397838754, 2342875868, 3696745646, 655774475, 187435864, 3542548893, 2639175068, 3252169580, 1823304775, 4116882481, 834941333, 3119051636, 1959621767, 166794742, 4143970019, 1133268038, 1174750730, 642098604, 2894769161, 2534389129, 2300479804, 1143518228, 340792480, 1121958625, 3785613659, 1311548950, 374871728, 3530880826, 988297933, 3503425129, 1773758831, 756171017, 153356616, 2917193584, 1893560487, 1416720310, 3068311257, 3082624720, 3496464590, 2127025901, 3985894715, 3682984652, 3424111662, 1468295234, 1108689450, 3257740440, 2556074164, 240512420, 2762646601, 2286974248, 681584733, 834176604, 1550671066, 1072524280, 4173854867, 2752627334, 2250409540]),
                h = new Uint32Array([3229102296, 404250648, 95372838, 589532195, 2130284984, 3334881222, 326094331, 3907553256, 1285624779, 2273781383, 2841799953, 3099122360, 134545929, 16843777, 1114545677, 1330585935, 2918083739, 909563958, 1493455359, 2795938470, 3736975628, 3537006546, 4211537678, 4126536693, 4018205334, 2038036857, 1607392816, 1869586799, 4243537773, 2442231441, 2852627704, 1381127506, 670941255, 1616944480, 2306237749, 3166489276, 2899127095, 2610648731, 76284298, 2391671438, 1897225170, 2745415331, 1614551148, 202125324, 4287297156, 2071720315, 3051448960, 892720181, 3899210485, 488469533, 1397218739, 3772819424, 4138513185, 3621223383, 1592629660, 3267506114, 1838570563, 774813742, 1652201001, 1263219019, 2736906589, 4278116350, 2182524629, 1465336151, 2822843069, 353719317, 2679566056, 2004337015, 2783669906, 926407735, 2069288862, 3857036261, 2363040531, 2678015647, 3541564707, 4042319856, 1786745888, 1246377290, 2660608324, 3671740378, 4196774050, 1482194264, 113938383, 3385394121, 1435325052, 690594857, 1344410714, 168437770, 3780083536, 2981232305, 1763335625, 2694888096, 2145048084, 1802219883, 1554716633, 2240097925, 2171823932, 3183333053, 3526670991, 1566402909, 2152734864, 269500432, 4077122823, 4109694964, 381717469, 3419081675, 3989208275, 1044314174, 672205357, 84218885, 535219832, 1734836583, 1934874007, 3840194532, 633032194, 656907303, 844661363, 1094785345, 748489639, 2341148299, 1359041526, 2812782247, 3482647218, 2105403773, 3707451209, 2509598357, 2392829270, 3638052824, 2335239024, 4227582971, 594657741, 4008615918, 3348232379, 2088562044, 400804977, 1717994854, 2794366843, 3722269661, 3091934895, 387406871, 38178373, 1195835719, 2229018906, 2661171870, 516262356, 3402239946, 1972984408, 757969965, 2440651566, 3217016511, 941297215, 117906439, 19089324, 2913832621, 3928994992, 1515877722, 1823808495, 2206414467, 2248107702, 859032627, 1072875100, 1667469667, 269091858, 33687554, 959990163, 2863305386, 2947080926, 1903286641, 248483270, 3368552392, 3363648209, 421094425, 1919980091, 1229535561, 2258284383, 3654894553, 3273521457, 4076007410, 1263066024, 3823348707, 3794450105, 1532719451, 881987004, 2290621064, 2764581182, 2593804954, 767446027, 640063526, 2381997247, 842188850, 3913973081, 2964388528, 459984882, 3924394985, 2016616055, 252656655, 3869685555, 3587535829, 1958354420, 2155887232, 2575065383, 3200172734, 652117995, 3452769229, 3185862793, 875876404, 2054524978, 1212693832, 2871321428, 4294958079, 4153406605, 2054878586, 4108991844, 2425387664, 3258891933, 1600086367, 497041469, 539000864, 1742065679, 1751694696, 3497145546, 437938202, 422330807, 2930672302, 3378410877, 3031755444, 2585372878, 1414810964, 3974445951, 2475914899, 229262383, 572688418, 132761699, 1684311396, 3675455274, 4059161585, 3215124172, 1936970099, 2421826690, 303187986, 979206266, 1077943616, 1076367432, 134750216, 1458084757, 3284347843, 863749599, 3974928364, 2526063437, 3688582107, 1629446080, 2711731873, 478349201, 2374831757, 4123622088, 1027470397, 3438359387, 2543281815, 0, 0, 919897081, 3486456783, 1166497390, 724282411, 2545151201, 1987495286, 1689262566, 2189570690, 4272533800, 3604381654, 3631691459, 454781979, 3243997044, 3048599221, 287916990, 2947516079, 2011157533, 1785378154, 3121455338, 1347444048, 307006039, 1162152261, 3407412024, 4092849139, 2649776301, 808501296, 729072580, 4025457647, 3854794458, 1061157951, 2451352263, 1431652693, 2031114715, 2728571554, 57002473, 3941240810, 267176554, 1701153125, 3110627587, 3132805818, 1704156746, 791657519, 1323801998, 3233818560, 3196166496, 3739115486, 3765188860, 471625756, 3140413254, 4261270525, 1382324767, 1296902477, 3839900022, 2459071122, 2411522810, 1970653557, 807275574, 101062662, 613943726, 2324304522, 4181752139, 2998071986, 1666830725, 3873882086, 1882594430, 235812878, 4167253735, 522157087, 938984533, 1650627938, 4003706170, 3570694100, 691162497, 2829621928, 3304337746, 2526438038, 2604330850, 4193895417, 1727436707, 3318035397, 900811280, 623219749, 4062229163, 1499035993, 1420694992, 2223254148, 3081233605, 1920128370, 3588059884, 960095289, 1516345366, 1280060748, 3392912532, 1583244638, 3884314783, 2021195128, 3721949413, 943251512, 344327576, 2357987980, 3333603095, 3520160721, 1091262436, 2779098789, 1129175457, 3806506978, 804831822, 1633786209, 4047862594, 3014915763, 363151924, 555844641, 2497062152, 2627488412, 4033232110, 505313310, 575833697, 1128468803, 1996264369, 3351722951, 3005998415, 4244428796, 538183716, 67375108, 2986910435, 1364285777, 3167170341, 2576965273, 1338300962, 1835903341, 1748572773, 218969101, 2201348473, 4210741242, 3062145897, 3755957215, 3617324201, 2122245502, 1035225113, 606375972, 3319232254, 993782843, 826100634, 2880149163, 1053917680, 3469615054, 2287280793, 286344209, 210305923, 2408515215, 1248566276, 1313744206, 3511776102, 3082282679, 190893024, 3958082539, 4258035905, 1010626620, 2092900349, 2172731009, 3573429568, 2492754580, 3943494428, 4160224247, 2707910424, 3115966137, 2556372619, 320031763, 2107398225, 741126188, 3602430725, 3553848275, 1801245580, 3890723815, 1472977977, 1852745070, 1861457322, 3301193668, 403637787, 50531331, 2316545244, 1448494422, 441026654, 1145310532, 3751739040, 2139087231, 557272968, 2846465705, 1300386919, 707438634, 2976738058, 3149649595, 1189257095, 3250660289, 2718082801, 1397969235, 2928387442, 3705427932, 1478956627, 185281547, 2631083777, 2644332189, 1203886123, 1819061612, 2515886756, 825345073, 2277107955, 1953811828, 3809079573, 4143382518, 172198988, 1178993990, 153503141, 2896988844, 1016532917, 2307464841, 2688821428, 336875540, 1531109306, 3789661153, 2957913254, 370563094, 3453121783, 976939066, 1875956230, 1768536425, 1210913345, 151593993, 2813190359, 1886444912, 3646189935, 3065438902, 3468147998, 3503318992, 998164438, 3991770093, 786138594, 3435927500, 710378600, 1111627074, 3032624428, 2560121496, 1225676269, 2762255012, 1569214581, 673751080, 3660691590, 1549561180, 2470440299, 4177053688, 1151603138, 2256937606]),
                d = new Uint32Array([415266864, 3625457760, 587575110, 639837068, 3330210193, 3100034623, 3893587917, 4226345095, 2269946131, 3414656806, 3098108525, 297318618, 17302786, 151060740, 1329753758, 223301409, 917368428, 2604021464, 2790851665, 4289111714, 3537812921, 215143023, 4126869239, 251000307, 2045739250, 2524543481, 1868549854, 812609441, 2449272639, 1838256510, 1386874788, 4166144597, 1613233600, 1197498525, 3163125349, 901561546, 2611793195, 932944726, 2382662657, 2324598274, 2742097243, 3533939638, 207633432, 1812728880, 2080344822, 2222685169, 901112170, 2150970836, 501770554, 4112326004, 3763554269, 3017859239, 3623267507, 567793531, 3261001113, 2630009391, 778933852, 1127100088, 1264745110, 692800305, 4272103905, 1576992479, 1468143278, 3579270977, 363348266, 3172275540, 2006955758, 3900143553, 933620590, 2453092316, 3850065623, 2665866675, 2676807971, 329228102, 4040366077, 602992871, 1248493460, 541739573, 3667826089, 1155193423, 1492788656, 2723698813, 3372665487, 3486107907, 693472594, 2083072420, 173023764, 1510607400, 2984333183, 1353822718, 2691242589, 3382747322, 1803541206, 342584241, 2237442839, 3649406254, 3179377511, 1019067854, 1574057146, 2405260649, 276844576, 2416971840, 4109566965, 133494007, 3407265931, 3721120523, 1055770236, 3544071928, 86511882, 755303700, 1730143950, 2020042625, 3832763349, 2548360375, 656784206, 36120476, 1093818498, 1933656345, 2334956811, 2810940182, 2807103827, 4138182566, 2110756090, 2994568681, 2514287415, 1234539886, 3633225645, 1457051719, 4220203243, 1895562187, 3995300289, 3454987935, 2093453816, 3145497837, 1712841676, 1902536325, 3718680231, 2078137683, 397953838, 2937526108, 1191331470, 1162299137, 2659507233, 446602818, 3391014281, 3570059791, 762681690, 1479355828, 3213982051, 784318406, 121117454, 1057425180, 2902532935, 2897063310, 1525297076, 2958711413, 2204939547, 4018373430, 864419686, 3056808908, 1665135302, 1550017425, 34605572, 302121480, 2855876681, 2477435538, 1907337442, 3731976665, 3356413837, 3335047175, 432569650, 3508083044, 1232236690, 994658617, 3649477295, 1608112451, 4072873465, 838005487, 3813361883, 2833507243, 1541548726, 3109772145, 2285146637, 3163064346, 2594490409, 1050319442, 640532044, 187049624, 848165476, 3207738056, 2968078973, 1504751866, 3910888143, 4075415939, 259535646, 1997475644, 3588662967, 869651827, 2155133469, 4102062138, 3197729889, 666812098, 3441876615, 3956133139, 884860008, 2301899984, 1215985040, 843597885, 4289406179, 1426063323, 2063044596, 2373614325, 2431969853, 1687195770, 1606565566, 2640273249, 538812480, 1025515648, 1751635408, 258500797, 449868340, 3390708328, 2920885313, 3081678466, 3033095797, 2108994794, 1419385256, 3461633101, 2481775931, 2140377974, 571320900, 790766216, 1678240200, 1667523725, 4057666303, 720499171, 1941938918, 3430118353, 311450148, 2182222408, 1077566848, 2051031069, 138422288, 1208485920, 3277252763, 2512634667, 3962796997, 3756846231, 3684077739, 1306254155, 2707496799, 3231818174, 2367456007, 2441973006, 1039518074, 3359456756, 2546790707, 1536661350, 0, 0, 3476477059, 4191145755, 725976918, 1848322988, 1989653484, 3782637253, 2187636761, 3867312690, 3607013809, 685168255, 467171126, 3273333612, 3049347959, 1958065646, 2937137475, 3199184774, 1786240980, 493513397, 1354370464, 3931131997, 1158827146, 1464157449, 4090173691, 955511787, 815657056, 2905616576, 4012602563, 3304058779, 1072022398, 3661578236, 1435638954, 3344258377, 2725843033, 3684868786, 3926091209, 3924486799, 1695542474, 1785030025, 3132713065, 62569170, 795186014, 1244606396, 3226396573, 2394996775, 3737026977, 1625218655, 484469816, 4229700720, 4256902887, 1191050707, 1297245338, 525159721, 2464473145, 1989317234, 1972354282, 4202001865, 103816716, 906364440, 2317654025, 2928314898, 3002679417, 1270002418, 3865270737, 2246502079, 242234908, 2114850360, 536372030, 3877576572, 1647835076, 1432511125, 3572409269, 987026551, 2821272141, 2175314074, 2529489969, 1385600610, 4187699951, 1660549571, 3311859351, 2747647283, 624275786, 270869908, 1509040306, 2874759545, 2220142101, 3498345514, 1924638692, 3312612053, 970317170, 3963173348, 1280991640, 374098989, 1590311868, 2489212517, 2028439024, 2675472637, 954062960, 3845667040, 2350155269, 2559347722, 3519460031, 399626595, 2772503383, 3836061102, 3796061657, 2716000943, 1630533826, 1315004825, 3018933627, 1119073270, 555066690, 874586500, 2626999845, 144481354, 519071292, 3994951288, 1126322822, 1631798033, 3346463891, 2982659899, 4239600613, 1341979863, 69211144, 604242960, 1370622114, 3813757273, 2579285807, 630823262, 1833944282, 577596841, 224934170, 1695354164, 4202903017, 2046491343, 3753280675, 1776279387, 2128059388, 2843639525, 608023624, 421799056, 1002821494, 4265294828, 2872130891, 2594941846, 3460223361, 4040085023, 294147362, 2568032580, 2399963395, 2207223558, 1313500060, 72240677, 3083948403, 1723316198, 3943391435, 3773557643, 1023265912, 3241950448, 2172436255, 4253122878, 2496986677, 1083479146, 4159376627, 486012923, 3114362735, 414824926, 328752934, 2333283148, 746429528, 1361849520, 3554064571, 97768299, 3882573011, 2364008379, 1851247580, 963538597, 3295605653, 2865022007, 51908358, 453182220, 1451889580, 3696645701, 1142573448, 1581532173, 2145361662, 2692710369, 2837526351, 2292820382, 709722708, 1730816680, 3148967275, 180075478, 3242648223, 2277622051, 1403126438, 4048769873, 3702426533, 1927076951, 190326550, 1393232684, 2644300583, 27106638, 1816642008, 728525997, 831911266, 2754687428, 1955052008, 4084495565, 4142074353, 368506623, 1175077772, 1279673861, 2886280773, 2779557002, 2302449423, 3045689630, 346047528, 3021214800, 3780854495, 3135365539, 380653100, 2786465368, 986567284, 4147788520, 1768935634, 107571641, 155725074, 1091111204, 1890037216, 3614470365, 3067696241, 1874245346, 3503208381, 517001319, 3980099271, 3605917075, 3425622917, 3805072407, 1110071172, 1749172757, 2561983021, 748197978, 2756251221, 3986990250, 677218384, 1965566112, 1557803448, 2254199917, 4170399725, 1811478727, 2252645393, 3263596066]),
                p = new Uint32Array([1612234872, 819468312, 2351105455, 1176904483, 1069973241, 2444805830, 2280133487, 3455838440, 646401185, 332105607, 3669535074, 1829877944, 67176453, 34144513, 558842478, 2651672399, 3627462126, 1822111286, 2728810756, 1375708838, 1876090557, 3104625362, 4092984070, 4144952821, 4185517952, 4069947769, 2708430798, 3727716207, 2123496687, 1064145297, 1431480839, 2767737426, 2640324605, 3225903200, 3401353590, 1698020540, 1453042893, 725064603, 42861708, 25857678, 3064164629, 1540531107, 806117436, 409734156, 4051435402, 4135877499, 3560289761, 1786787125, 1948117097, 989142301, 2816496455, 3719553248, 2077750956, 3005339607, 801267437, 2577187522, 3090050454, 1547906606, 827023994, 2519288651, 3758007073, 3781033726, 1096253974, 2933217111, 1410705473, 717034773, 3245842358, 4008212343, 3694634475, 1855076151, 3018160982, 3617514981, 1184861401, 588488607, 3891319575, 4246991088, 894069375, 2485144138, 1339727509, 2839861978, 2102983205, 2963429464, 63506122, 2412759497, 2754172301, 1383868713, 671764514, 341445130, 4273070415, 2135994801, 3131074842, 1573494944, 2976612314, 3591662443, 780491947, 400131461, 3468525939, 1732033981, 1767756340, 3129957725, 1074823248, 546312208, 4160025347, 4110939380, 197859008, 2346568651, 4164873670, 2094218814, 335882257, 170722565, 2171019238, 3463997287, 3085202259, 3583501540, 2619811259, 1308763943, 423703128, 2188591425, 378219677, 195529611, 2795983105, 1408673703, 3917336468, 4206001533, 1855315195, 927569301, 1205374623, 2908149976, 3422260016, 3950050299, 2683183985, 3251498734, 3984377745, 4173036668, 2238060515, 3429983846, 1407035022, 2809912797, 1545058379, 783226647, 21430854, 2386904903, 1117684956, 555392670, 264904389, 2312424138, 3022878105, 1515728173, 3334443385, 1664008127, 470235163, 239011591, 2393702691, 1202498989, 1968892463, 3031456346, 914582709, 468681603, 3425928703, 1723216691, 2439200754, 3327943523, 134352906, 68289026, 2460629304, 1234414250, 3648106408, 3806228849, 130551503, 2378614984, 1679411325, 852564249, 961114736, 2453358921, 1138329242, 2942294489, 4025664285, 4180800242, 2883799880, 3685278691, 1901847082, 3065600859, 445133970, 230459528, 1385866440, 691968666, 2552638910, 1275799078, 3358756346, 1690251826, 4205898058, 2103029936, 2213092202, 3488803305, 1007646771, 511119119, 1943398054, 3073627605, 981497018, 502562944, 3267271036, 1629994686, 332211934, 2280377805, 3493117412, 1753822260, 1028160117, 2419214408, 3690965796, 3813998591, 4118476687, 4102912634, 2056320234, 1030000784, 1633665598, 3197984607, 2149588384, 1077747744, 3177736149, 3490670696, 1746587762, 885660186, 2192447788, 1102556846, 3937716574, 1971172532, 1297390105, 2832094292, 1989405925, 998216595, 2283933098, 1143939618, 2372143081, 3361956964, 3824278290, 4281004529, 3514023842, 3872158579, 1209176154, 612504082, 490748509, 2155495488, 537411624, 273156104, 734222056, 2610283459, 2548839291, 3319786732, 1272682128, 2874006491, 3198247199, 1606459809, 244128899, 126979469, 4097701321, 2059943229, 1721224433, 861640599, 0, 0, 466564820, 2214186959, 2888516999, 1450060587, 3312883635, 3974198902, 847406256, 434537090, 2144796329, 2972243670, 1813764215, 918756123, 4004888923, 2004137397, 2259620137, 1136570287, 3043653599, 3558697578, 1565571597, 2699710544, 155521612, 2320975173, 3958623e3, 4214813683, 3224411632, 1621962800, 2616142708, 3284463599, 4232046019, 2128232255, 1230344732, 2865190229, 2996992272, 1507566242, 2414478181, 3387550442, 2305101804, 3395970405, 3535452520, 1761852090, 3157222803, 1581920047, 666914535, 2643378368, 1608433281, 2707480286, 1880940652, 956046364, 3556621102, 3880189437, 692933220, 2585742669, 1922229472, 964072082, 3379924924, 3942282613, 403058718, 204867078, 311043224, 162433674, 4071815488, 2035004082, 3219546969, 3515213542, 940470326, 478023182, 2082469987, 1055334175, 2506242039, 3293930082, 2010443427, 3040531668, 2594711858, 1300342952, 1654047988, 827496086, 3287915322, 4016241145, 868574966, 2544092613, 2485466545, 1242572069, 2035937824, 2997573977, 713315502, 365986948, 3581065127, 3838145138, 3828995549, 1928083769, 759978593, 2551598156, 1700710971, 3163840094, 4252559237, 4036982904, 3761823192, 1894070328, 176952454, 93883532, 1674692274, 3206009297, 2930065675, 1474602405, 2950841165, 3651265250, 2573283320, 3259916641, 4138987845, 2067968947, 2216760741, 1110712609, 1251775702, 621321372, 2015293542, 1022238238, 289612370, 2254521155, 1002927868, 2477901767, 3623662379, 3847224572, 268705812, 136578052, 1498526216, 2732806481, 1587133639, 790993305, 2842513348, 3659689325, 873293881, 442830093, 3489301301, 3917085434, 1541387908, 2741624799, 3850295195, 4238966398, 2418294196, 1209607204, 3963340247, 1996372795, 2527801661, 1268427691, 533610193, 2180042446, 1141999701, 580456721, 110038153, 58953615, 625887851, 2617527886, 3870806353, 1936111543, 2347436896, 3420515307, 4030528972, 2025929788, 1048673471, 536707457, 1788138750, 893424788, 4227328780, 4078761975, 3736707431, 1863891385, 1276352607, 646648595, 2955705756, 1481714732, 1809045176, 3137721299, 3152505692, 3549226983, 2775472075, 3694751342, 935620339, 2510996676, 201529359, 102433539, 1163299347, 2900121174, 222566985, 2287879236, 3783253918, 4271931263, 2661884215, 1334356393, 2821344642, 1416047146, 3602624877, 1795865531, 599869154, 2676474305, 1364435458, 2800833363, 1474080395, 2775768284, 738940967, 374541067, 1318952147, 654417309, 2909554625, 3626724460, 3291583989, 1654927665, 3446966201, 3908269172, 4294370057, 4044748534, 88476227, 2353808966, 2326530342, 1168485548, 512310423, 263555465, 1343529028, 682890260, 2749455170, 3753566689, 1477881934, 749082134, 3896167890, 1962359354, 3110694864, 3523635561, 604588077, 306252041, 3715147693, 3772215408, 3803634004, 1903146678, 1741737655, 3172913360, 2481798014, 3352751597, 399257307, 2246233292, 356657751, 2221425218, 1519957186, 757897368, 2862893326, 1441637540, 2686999944, 1349855272, 1834801713, 3095813212, 3354956607, 3983276280, 579224740, 297961094]),
                m = new Uint32Array([408950976, 2016466968, 596386565, 2940610083, 3326068350, 4187076806, 3901220883, 1875770344, 2267449164, 2702429063, 3101341865, 1651315128, 17039624, 84019457, 1327583042, 1855851855, 920139437, 4000095030, 2795677273, 72482726, 3530543838, 3183021266, 4126406139, 116854517, 2046392815, 2163381881, 1872850783, 3470667887, 2440991228, 4013911441, 1381323434, 128251986, 1620926503, 4257236832, 3167403145, 1986344380, 2606144428, 3442161563, 2382532100, 2348911246, 2746655601, 358339235, 204475488, 1008233484, 2079423487, 2331411579, 903099829, 3781853237, 494149096, 1765471517, 3769098323, 1205711840, 3615217654, 2897420759, 3257909854, 3986267330, 783822445, 2522628910, 1261521762, 2056661323, 4276092579, 568417790, 1463900034, 380556631, 357832104, 1093319957, 2009167775, 3069110391, 937179045, 3949892151, 3853772155, 1456971493, 2672205708, 3642954655, 4041732307, 402465776, 1245006442, 2140414026, 3662666398, 2510898394, 1484609786, 632332888, 3372468486, 3398422473, 698624341, 2370993193, 170396240, 571759114, 2986258913, 1333743793, 2696585321, 442354080, 1806789503, 3671463019, 2234418524, 2870466949, 3184442753, 1936145597, 1567186386, 884641629, 272633984, 1344311312, 4109890803, 66390004, 3406547734, 3230391755, 1056456429, 3330069310, 85198120, 285879557, 1736533791, 3872290919, 3837256819, 1406506980, 664545061, 3142451751, 1092174130, 1484944193, 2333510444, 2634786699, 2812716881, 22279847, 2112454095, 2499457661, 2507052508, 4214704533, 3628587150, 2678937304, 4224449419, 820736251, 4003458595, 1908526574, 2095938759, 2448997244, 1720018455, 3821826406, 3713260966, 2393340893, 391911352, 1261350679, 1191266050, 1183728967, 2655166084, 3693157022, 3390032414, 3314144458, 766782837, 2572834861, 3217473425, 2036543167, 119277368, 453918471, 2911808769, 591899821, 1517640426, 800370778, 2201387884, 3038506883, 869020549, 4284921395, 1670472511, 4073086051, 34079248, 168038914, 2861738553, 944346026, 1910075823, 2833440369, 3355953166, 3482175176, 425990600, 2100482329, 1228491122, 1888631625, 3645102470, 2595184601, 4075811523, 502870514, 3819692875, 1222355171, 1534155746, 716618075, 2283440180, 2450373768, 2589104804, 3358146202, 647505453, 3192654630, 851980941, 4200906546, 2969219305, 1249728944, 3917736219, 1792013033, 255594360, 857634575, 3581138406, 2797024213, 2151317620, 3122525312, 3200433817, 2086741950, 3440626982, 3733449677, 886060221, 3832056116, 1211975802, 1972384328, 4292607915, 618878207, 2062908151, 2415168890, 2423951604, 3929891984, 1600217026, 1052679519, 545267741, 2688564512, 1757243495, 3587182440, 443030224, 1916062234, 2927799833, 742504366, 3035280585, 1584758196, 1414354074, 430493268, 2474021868, 3845881747, 579346957, 2856595234, 1686987783, 3922223972, 4058247643, 318712561, 1943106495, 2733034611, 306713232, 1512342034, 1075658810, 1568700992, 136316992, 672155656, 3274425174, 3902510531, 3969379379, 2076565484, 3679181718, 2427145691, 2713624929, 526368929, 2366541084, 2198311309, 1039416821, 3380267069, 2540083148, 4046674839, 0, 0, 3474706230, 3565418959, 732703557, 2270588459, 1992652439, 3018645878, 2184348260, 2954487426, 3598702334, 2846959830, 460069848, 2000077595, 3052320193, 1534555317, 2944839441, 692305583, 1790274167, 3755220330, 1348292794, 228649552, 1158235410, 1284134725, 4092326859, 419117299, 817901725, 4032867632, 4019973931, 1958986991, 1073496037, 3279870527, 1430869394, 480954197, 2729615993, 274324386, 3935300099, 1707731434, 1703503119, 3972688485, 3134372537, 1751712698, 800862053, 2472430127, 3223830606, 3885862592, 3730824894, 2174836958, 477109472, 1815673884, 4258528699, 786908925, 1294552402, 1687822157, 2456982244, 3761862290, 1976137103, 3169516149, 102237744, 504116742, 2316470820, 2550771338, 3002249977, 1081691058, 3871336035, 1506903526, 238554736, 907836942, 528228344, 1665066783, 1653957175, 4156839266, 3564623086, 2746563284, 2828707881, 843940264, 2523043524, 4096873110, 4190370203, 988766969, 3308504422, 4137132997, 630465845, 2974421029, 1501125106, 548580185, 2217378900, 2920665220, 1926591159, 2816787826, 971258325, 3715296313, 1278037082, 1637357132, 1583701706, 1002214494, 2029877479, 2247139192, 954218717, 3631277368, 2349501460, 2248513676, 3512979910, 2998867921, 2779686209, 190309541, 3803177539, 1306108386, 1637441839, 4173483617, 3019289585, 1165705907, 562307349, 2772579361, 2622135444, 3592751260, 511188720, 1715269150, 1125204770, 1384538435, 3342583670, 4237537735, 4242013363, 736448508, 68158496, 336077828, 1364808114, 144892753, 2573113788, 3341755801, 1839820111, 3302629997, 221515112, 958031117, 4207934083, 904493562, 3747340214, 2225301983, 2128969431, 2617026942, 613426237, 3024623908, 1005337541, 3614899771, 2878778161, 1028364971, 3458190910, 3514953934, 289673608, 1428330769, 2399571724, 2298708879, 1311067722, 1805386830, 3085350865, 1366517431, 3951815435, 1623974123, 1022377213, 3430465852, 2168357244, 3206544769, 2490012884, 4264902804, 4160485355, 217259255, 3118381473, 1735334073, 323752856, 1596361491, 749743229, 2623033644, 3547059158, 3099264467, 3887851371, 1557368039, 1856335447, 3420207470, 3291989102, 4086672068, 51118872, 252058371, 1447384714, 330095702, 1141720090, 1233673796, 2145484767, 2667487359, 2845747489, 927959209, 715663949, 2186569514, 3151412145, 1835731643, 3240345926, 3802105793, 1397838754, 44495187, 3696745646, 2342875868, 187435864, 655774475, 2639175068, 3542548893, 1823304775, 3252169580, 834941333, 4116882481, 1959621767, 3119051636, 4143970019, 166794742, 1174750730, 1133268038, 2894769161, 642098604, 2300479804, 2534389129, 340792480, 1143518228, 3785613659, 1121958625, 374871728, 1311548950, 988297933, 3530880826, 1773758831, 3503425129, 153356616, 756171017, 1893560487, 2917193584, 3068311257, 1416720310, 3496464590, 3082624720, 3985894715, 2127025901, 3424111662, 3682984652, 1108689450, 1468295234, 2556074164, 3257740440, 2762646601, 240512420, 681584733, 2286974248, 1550671066, 834176604, 4173854867, 1072524280, 2250409540, 2752627334]);
            class Whirlpool {
                constructor() {
                    this.state = new Uint32Array(16), this.msg = new Uint32Array(16), this.block = Buffer.allocUnsafe(64), this.size = -1
                }
                init() {
                    for (let t = 0; t < 16; t++) this.state[t] = 0;
                    return this.size = 0, this
                }
                update(t) {
                    return i(Buffer.isBuffer(t)), this._update(t, t.length), this
                }
                final() {
                    return this._final(Buffer.allocUnsafe(64))
                }
                _update(t, e) {
                    i(-1 !== this.size, "Context already finalized.");
                    let r = 63 & this.size,
                        n = 0;
                    if (this.size += e, r > 0) {
                        let i = 64 - r;
                        if (i > e && (i = e), t.copy(this.block, r, n, n + i), r += i, e -= i, n += i, r < 64) return;
                        this.transform(this.block, 0)
                    }
                    for (; e >= 64;) this.transform(t, n), n += 64, e -= 64;
                    e > 0 && t.copy(this.block, 0, n, n + e)
                }
                _final(t) {
                    i(-1 !== this.size, "Context already finalized.");
                    const e = 63 & this.size,
                        r = 8 * this.size;
                    A(s, r * (1 / 4294967296), 24), A(s, r, 28), this._update(o, 1 + (95 - e & 63)), this._update(s, 32);
                    for (let e = 0; e < 16; e++) A(t, this.state[e], 4 * e), this.state[e] = 0;
                    for (let t = 0; t < 16; t++) this.msg[t] = 0;
                    for (let t = 0; t < 64; t++) this.block[t] = 0;
                    return this.size = -1, t
                }
                transform(t, e) {
                    const r = this.msg;
                    for (let s = 0; s < 16; s++) r[s] = (n = e + 4 * s, 16777216 * (i = t)[n++] + 65536 * i[n++] + 256 * i[n++] + i[n]);
                    var i, n;
                    const s = new Uint32Array(16),
                        o = new Uint32Array(16),
                        A = new Uint32Array(16);
                    for (let t = 0; t < 16; t++) s[t] = this.state[t], A[t] = r[t] ^ s[t];
                    for (let t = 1; t < 11; t++) {
                        for (let e = 0; e < 8; e++) o[2 * e + 0] = 0 ^ f[2 * (s[(0 + e) % 8 * 2 + 0] >>> 24 & 255) + 0] ^ u[2 * (s[(7 + e) % 8 * 2 + 0] >>> 16 & 255) + 0] ^ a[2 * (s[(6 + e) % 8 * 2 + 0] >>> 8 & 255) + 0] ^ l[2 * (s[(5 + e) % 8 * 2 + 0] >>> 0 & 255) + 0] ^ h[2 * (s[(4 + e) % 8 * 2 + 1] >>> 24 & 255) + 0] ^ d[2 * (s[(3 + e) % 8 * 2 + 1] >>> 16 & 255) + 0] ^ p[2 * (s[(2 + e) % 8 * 2 + 1] >>> 8 & 255) + 0] ^ m[2 * (s[(1 + e) % 8 * 2 + 1] >>> 0 & 255) + 0] ^ (0 === e ? c[2 * t + 0] : 0), o[2 * e + 1] = 0 ^ f[2 * (s[(0 + e) % 8 * 2 + 0] >>> 24 & 255) + 1] ^ u[2 * (s[(7 + e) % 8 * 2 + 0] >>> 16 & 255) + 1] ^ a[2 * (s[(6 + e) % 8 * 2 + 0] >>> 8 & 255) + 1] ^ l[2 * (s[(5 + e) % 8 * 2 + 0] >>> 0 & 255) + 1] ^ h[2 * (s[(4 + e) % 8 * 2 + 1] >>> 24 & 255) + 1] ^ d[2 * (s[(3 + e) % 8 * 2 + 1] >>> 16 & 255) + 1] ^ p[2 * (s[(2 + e) % 8 * 2 + 1] >>> 8 & 255) + 1] ^ m[2 * (s[(1 + e) % 8 * 2 + 1] >>> 0 & 255) + 1] ^ (0 === e ? c[2 * t + 1] : 0);
                        for (let t = 0; t < 16; t++) s[t] = o[t];
                        for (let t = 0; t < 8; t++) o[2 * t + 0] = 0 ^ f[2 * (A[(0 + t) % 8 * 2 + 0] >>> 24 & 255) + 0] ^ u[2 * (A[(7 + t) % 8 * 2 + 0] >>> 16 & 255) + 0] ^ a[2 * (A[(6 + t) % 8 * 2 + 0] >>> 8 & 255) + 0] ^ l[2 * (A[(5 + t) % 8 * 2 + 0] >>> 0 & 255) + 0] ^ h[2 * (A[(4 + t) % 8 * 2 + 1] >>> 24 & 255) + 0] ^ d[2 * (A[(3 + t) % 8 * 2 + 1] >>> 16 & 255) + 0] ^ p[2 * (A[(2 + t) % 8 * 2 + 1] >>> 8 & 255) + 0] ^ m[2 * (A[(1 + t) % 8 * 2 + 1] >>> 0 & 255) + 0] ^ s[2 * t + 0], o[2 * t + 1] = 0 ^ f[2 * (A[(0 + t) % 8 * 2 + 0] >>> 24 & 255) + 1] ^ u[2 * (A[(7 + t) % 8 * 2 + 0] >>> 16 & 255) + 1] ^ a[2 * (A[(6 + t) % 8 * 2 + 0] >>> 8 & 255) + 1] ^ l[2 * (A[(5 + t) % 8 * 2 + 0] >>> 0 & 255) + 1] ^ h[2 * (A[(4 + t) % 8 * 2 + 1] >>> 24 & 255) + 1] ^ d[2 * (A[(3 + t) % 8 * 2 + 1] >>> 16 & 255) + 1] ^ p[2 * (A[(2 + t) % 8 * 2 + 1] >>> 8 & 255) + 1] ^ m[2 * (A[(1 + t) % 8 * 2 + 1] >>> 0 & 255) + 1] ^ s[2 * t + 1];
                        for (let t = 0; t < 16; t++) A[t] = o[t]
                    }
                    for (let t = 0; t < 16; t++) this.state[t] ^= A[t] ^ r[t]
                }
                static hash() {
                    return new Whirlpool
                }
                static hmac() {
                    return new n(Whirlpool, 64)
                }
                static digest(t) {
                    return Whirlpool.ctx.init().update(t).final()
                }
                static root(t, e) {
                    return i(Buffer.isBuffer(t) && 64 === t.length), i(Buffer.isBuffer(e) && 64 === e.length), Whirlpool.ctx.init().update(t).update(e).final()
                }
                static multi(t, e, r) {
                    const i = Whirlpool.ctx;
                    return i.init(), i.update(t), i.update(e), r && i.update(r), i.final()
                }
                static mac(t, e) {
                    return Whirlpool.hmac().init(e).update(t).final()
                }
            }

            function A(t, e, r) {
                return t[r++] = e >>> 24, t[r++] = e >>> 16, t[r++] = e >>> 8, t[r++] = e, r
            }
            Whirlpool.native = 0, Whirlpool.id = "WHIRLPOOL", Whirlpool.size = 64, Whirlpool.bits = 512, Whirlpool.blockSize = 64, Whirlpool.zero = Buffer.alloc(64, 0), Whirlpool.ctx = new Whirlpool, t.exports = Whirlpool
        },
        5867: function(t, e, r) {
            "use strict";
            t.exports = r(7488)
        },
        6262: function(t, e, r) {
            "use strict";
            const i = r(5466),
                n = r(5579),
                s = Buffer.alloc(8, 0),
                o = Buffer.alloc(64, 0);
            o[0] = 128;
            const c = new Uint32Array([1116352408, 1899447441, 3049323471, 3921009573, 961987163, 1508970993, 2453635748, 2870763221, 3624381080, 310598401, 607225278, 1426881987, 1925078388, 2162078206, 2614888103, 3248222580, 3835390401, 4022224774, 264347078, 604807628, 770255983, 1249150122, 1555081692, 1996064986, 2554220882, 2821834349, 2952996808, 3210313671, 3336571891, 3584528711, 113926993, 338241895, 666307205, 773529912, 1294757372, 1396182291, 1695183700, 1986661051, 2177026350, 2456956037, 2730485921, 2820302411, 3259730800, 3345764771, 3516065817, 3600352804, 4094571909, 275423344, 430227734, 506948616, 659060556, 883997877, 958139571, 1322822218, 1537002063, 1747873779, 1955562222, 2024104815, 2227730452, 2361852424, 2428436474, 2756734187, 3204031479, 3329325298]);
            class SHA256 {
                constructor() {
                    this.state = new Uint32Array(8), this.msg = new Uint32Array(64), this.block = Buffer.allocUnsafe(64), this.size = -1
                }
                init() {
                    return this.state[0] = 1779033703, this.state[1] = 3144134277, this.state[2] = 1013904242, this.state[3] = 2773480762, this.state[4] = 1359893119, this.state[5] = 2600822924, this.state[6] = 528734635, this.state[7] = 1541459225, this.size = 0, this
                }
                update(t) {
                    return i(Buffer.isBuffer(t)), this._update(t, t.length), this
                }
                final() {
                    return this._final(Buffer.allocUnsafe(32))
                }
                _update(t, e) {
                    i(-1 !== this.size, "Context already finalized.");
                    let r = 63 & this.size,
                        n = 0;
                    if (this.size += e, r > 0) {
                        let i = 64 - r;
                        if (i > e && (i = e), t.copy(this.block, r, n, n + i), r += i, e -= i, n += i, r < 64) return;
                        this.transform(this.block, 0)
                    }
                    for (; e >= 64;) this.transform(t, n), n += 64, e -= 64;
                    e > 0 && t.copy(this.block, 0, n, n + e)
                }
                _final(t) {
                    i(-1 !== this.size, "Context already finalized.");
                    const e = this.size % 64,
                        r = 8 * this.size;
                    d(s, r * (1 / 4294967296), 0), d(s, r, 4), this._update(o, 1 + (119 - e) % 64), this._update(s, 8);
                    for (let e = 0; e < 8; e++) d(t, this.state[e], 4 * e), this.state[e] = 0;
                    for (let t = 0; t < 64; t++) this.msg[t] = 0;
                    for (let t = 0; t < 64; t++) this.block[t] = 0;
                    return this.size = -1, t
                }
                transform(t, e) {
                    const r = this.msg;
                    let i = this.state[0],
                        n = this.state[1],
                        s = this.state[2],
                        o = this.state[3],
                        d = this.state[4],
                        p = this.state[5],
                        m = this.state[6],
                        A = this.state[7],
                        B = 0;
                    for (; B < 16; B++) r[B] = (S = e + 4 * B, 16777216 * (w = t)[S++] + 65536 * w[S++] + 256 * w[S++] + w[S]);
                    for (var w, S, g; B < 64; B++) r[B] = (((g = r[B - 2]) >>> 17 | g << 15) ^ (g >>> 19 | g << 13) ^ g >>> 10) + r[B - 7] + a(r[B - 15]) + r[B - 16];
                    for (B = 0; B < 64; B++) {
                        let t = A + u(d);
                        t += l(d, p, m), t += c[B] + r[B];
                        let e = f(i);
                        e += h(i, n, s), A = m, m = p, p = d, d = o + t >>> 0, o = s, s = n, n = i, i = t + e >>> 0
                    }
                    this.state[0] += i, this.state[1] += n, this.state[2] += s, this.state[3] += o, this.state[4] += d, this.state[5] += p, this.state[6] += m, this.state[7] += A
                }
                static hash() {
                    return new SHA256
                }
                static hmac() {
                    return new n(SHA256, 64)
                }
                static digest(t) {
                    return SHA256.ctx.init().update(t).final()
                }
                static root(t, e) {
                    return i(Buffer.isBuffer(t) && 32 === t.length), i(Buffer.isBuffer(e) && 32 === e.length), SHA256.ctx.init().update(t).update(e).final()
                }
                static multi(t, e, r) {
                    const i = SHA256.ctx;
                    return i.init(), i.update(t), i.update(e), r && i.update(r), i.final()
                }
                static mac(t, e) {
                    return SHA256.hmac().init(e).update(t).final()
                }
            }

            function f(t) {
                return (t >>> 2 | t << 30) ^ (t >>> 13 | t << 19) ^ (t >>> 22 | t << 10)
            }

            function u(t) {
                return (t >>> 6 | t << 26) ^ (t >>> 11 | t << 21) ^ (t >>> 25 | t << 7)
            }

            function a(t) {
                return (t >>> 7 | t << 25) ^ (t >>> 18 | t << 14) ^ t >>> 3
            }

            function l(t, e, r) {
                return r ^ t & (e ^ r)
            }

            function h(t, e, r) {
                return t & e | r & (t | e)
            }

            function d(t, e, r) {
                return t[r++] = e >>> 24, t[r++] = e >>> 16, t[r++] = e >>> 8, t[r++] = e, r
            }
            SHA256.native = 0, SHA256.id = "SHA256", SHA256.size = 32, SHA256.bits = 256, SHA256.blockSize = 64, SHA256.zero = Buffer.alloc(32, 0), SHA256.ctx = new SHA256, t.exports = SHA256
        },
        6263: function(t, e, r) {
            "use strict";
            t.exports = r(10009)
        },
        6668: function(t, e, r) {
            "use strict";
            const i = r(5466),
                n = r(6261),
                s = r(5579),
                o = Buffer.from("KMAC", "binary"),
                c = Buffer.alloc(0);
            class KMAC extends n {
                constructor() {
                    super()
                }
                init(t, e, r) {
                    return null == e && (e = c), i(Buffer.isBuffer(e)), super.init(t, o, r), super.bytePad([e], this.rate / 8), this
                }
                final(t) {
                    if (null == t) {
                        t = 100 - this.rate / 8 / 2
                    }
                    return super.rightEncode(8 * t), super.final(t)
                }
                static hash() {
                    return new KMAC
                }
                static hmac(t = 256, e, r, n) {
                    i(t >>> 0 === t), i(128 === t || 256 === t);
                    return new s(KMAC, (1600 - 2 * t) / 8, [t, e, r], [n])
                }
                static digest(t, e = 256, r, i, n) {
                    return KMAC.ctx.init(e, r, i).update(t).final(n)
                }
                static root(t, e, r = 256, n, s, o) {
                    null == o && (o = 0), 0 === o && (i(r >>> 0 === r), o = r >>> 3), i(o >>> 0 === o), i(Buffer.isBuffer(t) && t.length === o), i(Buffer.isBuffer(e) && e.length === o);
                    const c = KMAC.ctx;
                    return c.init(r, n, s), c.update(t), c.update(e), c.final(o)
                }
                static multi(t, e, r, i = 256, n, s, o) {
                    const c = KMAC.ctx;
                    return c.init(i, n, s), c.update(t), c.update(e), r && c.update(r), c.final(o)
                }
                static mac(t, e, r = 256, i, n, s) {
                    return KMAC.hmac(r, i, n, s).init(e).update(t).final()
                }
            }
            KMAC.native = n.native, KMAC.id = "KMAC256", KMAC.size = 32, KMAC.bits = 256, KMAC.blockSize = 136, KMAC.zero = Buffer.alloc(32, 0), KMAC.ctx = new KMAC, t.exports = KMAC
        },
        7475: function(t, e, r) {
            "use strict";
            const i = r(5466),
                n = r(5579),
                s = Buffer.alloc(16, 0),
                o = Buffer.alloc(128, 0);
            o[0] = 128;
            const c = new Uint32Array([1116352408, 3609767458, 1899447441, 602891725, 3049323471, 3964484399, 3921009573, 2173295548, 961987163, 4081628472, 1508970993, 3053834265, 2453635748, 2937671579, 2870763221, 3664609560, 3624381080, 2734883394, 310598401, 1164996542, 607225278, 1323610764, 1426881987, 3590304994, 1925078388, 4068182383, 2162078206, 991336113, 2614888103, 633803317, 3248222580, 3479774868, 3835390401, 2666613458, 4022224774, 944711139, 264347078, 2341262773, 604807628, 2007800933, 770255983, 1495990901, 1249150122, 1856431235, 1555081692, 3175218132, 1996064986, 2198950837, 2554220882, 3999719339, 2821834349, 766784016, 2952996808, 2566594879, 3210313671, 3203337956, 3336571891, 1034457026, 3584528711, 2466948901, 113926993, 3758326383, 338241895, 168717936, 666307205, 1188179964, 773529912, 1546045734, 1294757372, 1522805485, 1396182291, 2643833823, 1695183700, 2343527390, 1986661051, 1014477480, 2177026350, 1206759142, 2456956037, 344077627, 2730485921, 1290863460, 2820302411, 3158454273, 3259730800, 3505952657, 3345764771, 106217008, 3516065817, 3606008344, 3600352804, 1432725776, 4094571909, 1467031594, 275423344, 851169720, 430227734, 3100823752, 506948616, 1363258195, 659060556, 3750685593, 883997877, 3785050280, 958139571, 3318307427, 1322822218, 3812723403, 1537002063, 2003034995, 1747873779, 3602036899, 1955562222, 1575990012, 2024104815, 1125592928, 2227730452, 2716904306, 2361852424, 442776044, 2428436474, 593698344, 2756734187, 3733110249, 3204031479, 2999351573, 3329325298, 3815920427, 3391569614, 3928383900, 3515267271, 566280711, 3940187606, 3454069534, 4118630271, 4000239992, 116418474, 1914138554, 174292421, 2731055270, 289380356, 3203993006, 460393269, 320620315, 685471733, 587496836, 852142971, 1086792851, 1017036298, 365543100, 1126000580, 2618297676, 1288033470, 3409855158, 1501505948, 4234509866, 1607167915, 987167468, 1816402316, 1246189591]);
            class SHA512 {
                constructor() {
                    this.state = new Uint32Array(16), this.msg = new Uint32Array(160), this.block = Buffer.allocUnsafe(128), this.size = -1
                }
                init() {
                    return this.state[0] = 1779033703, this.state[1] = 4089235720, this.state[2] = 3144134277, this.state[3] = 2227873595, this.state[4] = 1013904242, this.state[5] = 4271175723, this.state[6] = 2773480762, this.state[7] = 1595750129, this.state[8] = 1359893119, this.state[9] = 2917565137, this.state[10] = 2600822924, this.state[11] = 725511199, this.state[12] = 528734635, this.state[13] = 4215389547, this.state[14] = 1541459225, this.state[15] = 327033209, this.size = 0, this
                }
                update(t) {
                    return i(Buffer.isBuffer(t)), this._update(t, t.length), this
                }
                final() {
                    return this._final(Buffer.allocUnsafe(64))
                }
                _update(t, e) {
                    i(-1 !== this.size, "Context already finalized.");
                    let r = 127 & this.size,
                        n = 0;
                    if (this.size += e, r > 0) {
                        let i = 128 - r;
                        if (i > e && (i = e), t.copy(this.block, r, n, n + i), r += i, e -= i, n += i, r < 128) return;
                        this.transform(this.block, 0)
                    }
                    for (; e >= 128;) this.transform(t, n), n += 128, e -= 128;
                    e > 0 && t.copy(this.block, 0, n, n + e)
                }
                _final(t) {
                    i(-1 !== this.size, "Context already finalized.");
                    const e = this.size % 128,
                        r = 8 * this.size;
                    M(s, r * (1 / 4294967296), 8), M(s, r, 12), this._update(o, 1 + (239 - e) % 128), this._update(s, 16);
                    for (let e = 0; e < 16; e++) M(t, this.state[e], 4 * e), this.state[e] = 0;
                    for (let t = 0; t < 160; t++) this.msg[t] = 0;
                    for (let t = 0; t < 128; t++) this.block[t] = 0;
                    return this.size = -1, t
                }
                prepare(t, e) {
                    const r = this.msg;
                    let i = 0;
                    for (; i < 32; i++) r[i] = (s = e + 4 * i, 16777216 * (n = t)[s++] + 65536 * n[s++] + 256 * n[s++] + n[s]);
                    for (var n, s; i < 160; i += 2) {
                        const t = E(r[i - 4], r[i - 3]),
                            e = U(r[i - 4], r[i - 3]),
                            n = r[i - 14],
                            s = r[i - 13],
                            o = k(r[i - 30], r[i - 29]),
                            c = H(r[i - 30], r[i - 29]),
                            f = r[i - 32],
                            u = r[i - 31];
                        r[i + 0] = l(t, e, n, s, o, c, f, u), r[i + 1] = h(t, e, n, s, o, c, f, u)
                    }
                }
                transform(t, e) {
                    const r = this.msg;
                    this.prepare(t, e);
                    let i = this.state[0],
                        n = this.state[1],
                        s = this.state[2],
                        o = this.state[3],
                        l = this.state[4],
                        h = this.state[5],
                        m = this.state[6],
                        A = this.state[7],
                        B = this.state[8],
                        w = this.state[9],
                        k = this.state[10],
                        H = this.state[11],
                        E = this.state[12],
                        U = this.state[13],
                        M = this.state[14],
                        I = this.state[15];
                    for (let t = 0; t < r.length; t += 2) {
                        let e = M,
                            f = I,
                            R = K(B, w),
                            C = z(B, w);
                        const L = S(B, w, k, H, E, U),
                            _ = g(B, w, k, H, E, U),
                            q = c[t + 0],
                            D = c[t + 1],
                            P = r[t + 0],
                            N = r[t + 1],
                            W = d(e, f, R, C, L, _, q, D, P, N),
                            Z = p(e, f, R, C, L, _, q, D, P, N);
                        e = b(i, n), f = x(i, n), R = y(i, n, s, o, l, h), C = v(i, n, s, o, l, h);
                        const O = u(e, f, R, C),
                            T = a(e, f, R, C);
                        M = E, I = U, E = k, U = H, k = B, H = w, B = u(m, A, W, Z), w = a(A, A, W, Z), m = l, A = h, l = s, h = o, s = i, o = n, i = u(W, Z, O, T), n = a(W, Z, O, T)
                    }
                    f(this.state, 0, i, n), f(this.state, 2, s, o), f(this.state, 4, l, h), f(this.state, 6, m, A), f(this.state, 8, B, w), f(this.state, 10, k, H), f(this.state, 12, E, U), f(this.state, 14, M, I)
                }
                static hash() {
                    return new SHA512
                }
                static hmac() {
                    return new n(SHA512, 128)
                }
                static digest(t) {
                    return SHA512.ctx.init().update(t).final()
                }
                static root(t, e) {
                    return i(Buffer.isBuffer(t) && 64 === t.length), i(Buffer.isBuffer(e) && 64 === e.length), SHA512.ctx.init().update(t).update(e).final()
                }
                static multi(t, e, r) {
                    const i = SHA512.ctx;
                    return i.init(), i.update(t), i.update(e), r && i.update(r), i.final()
                }
                static mac(t, e) {
                    return SHA512.hmac().init(e).update(t).final()
                }
            }

            function f(t, e, r, i) {
                const n = t[e + 0],
                    s = i + t[e + 1] >>> 0,
                    o = (s < i) + r + n;
                t[e + 0] = o >>> 0, t[e + 1] = s
            }

            function u(t, e, r, i) {
                return (e + i >>> 0 < e) + t + r >>> 0
            }

            function a(t, e, r, i) {
                return e + i >>> 0
            }

            function l(t, e, r, i, n, s, o, c) {
                let f = 0,
                    u = e;
                u = u + i >>> 0, f += u < e, u = u + s >>> 0, f += u < s, u = u + c >>> 0, f += u < c;
                return t + r + n + o + f >>> 0
            }

            function h(t, e, r, i, n, s, o, c) {
                return e + i + s + c >>> 0
            }

            function d(t, e, r, i, n, s, o, c, f, u) {
                let a = 0,
                    l = e;
                l = l + i >>> 0, a += l < e, l = l + s >>> 0, a += l < s, l = l + c >>> 0, a += l < c, l = l + u >>> 0, a += l < u;
                return t + r + n + o + f + a >>> 0
            }

            function p(t, e, r, i, n, s, o, c, f, u) {
                return e + i + s + c + u >>> 0
            }

            function m(t, e, r) {
                return (e << 32 - r | t >>> r) >>> 0
            }

            function A(t, e, r) {
                return (t << 32 - r | e >>> r) >>> 0
            }

            function B(t, e, r) {
                return t >>> r
            }

            function w(t, e, r) {
                return (t << 32 - r | e >>> r) >>> 0
            }

            function S(t, e, r, i, n, s) {
                return (t & r ^ ~t & n) >>> 0
            }

            function g(t, e, r, i, n, s) {
                return (e & i ^ ~e & s) >>> 0
            }

            function y(t, e, r, i, n, s) {
                return (t & r ^ t & n ^ r & n) >>> 0
            }

            function v(t, e, r, i, n, s) {
                return (e & i ^ e & s ^ i & s) >>> 0
            }

            function b(t, e) {
                return (m(t, e, 28) ^ m(e, t, 2) ^ m(e, t, 7)) >>> 0
            }

            function x(t, e) {
                return (A(t, e, 28) ^ A(e, t, 2) ^ A(e, t, 7)) >>> 0
            }

            function K(t, e) {
                return (m(t, e, 14) ^ m(t, e, 18) ^ m(e, t, 9)) >>> 0
            }

            function z(t, e) {
                return (A(t, e, 14) ^ A(t, e, 18) ^ A(e, t, 9)) >>> 0
            }

            function k(t, e) {
                return (m(t, e, 1) ^ m(t, e, 8) ^ B(t, 0, 7)) >>> 0
            }

            function H(t, e) {
                return (A(t, e, 1) ^ A(t, e, 8) ^ w(t, e, 7)) >>> 0
            }

            function E(t, e) {
                return (m(t, e, 19) ^ m(e, t, 29) ^ B(t, 0, 6)) >>> 0
            }

            function U(t, e) {
                return (A(t, e, 19) ^ A(e, t, 29) ^ w(t, e, 6)) >>> 0
            }

            function M(t, e, r) {
                return t[r++] = e >>> 24, t[r++] = e >>> 16, t[r++] = e >>> 8, t[r++] = e, r
            }
            SHA512.native = 0, SHA512.id = "SHA512", SHA512.size = 64, SHA512.bits = 512, SHA512.blockSize = 128, SHA512.zero = Buffer.alloc(64, 0), SHA512.ctx = new SHA512, t.exports = SHA512
        },
        9981: function(t, e, r) {
            "use strict";
            const i = r(5466),
                n = 0 === new Int8Array(new Int16Array([1]).buffer)[0];
            class Salsa20 {
                constructor() {
                    this.state = new Uint32Array(16), this.stream = new Uint32Array(16), this.bytes = new Uint8Array(this.stream.buffer), this.pos = 0, n && (this.bytes = Buffer.allocUnsafe(64))
                }
                init(t, e, r) {
                    if (null == r && (r = 0), i(Buffer.isBuffer(t)), i(Buffer.isBuffer(e)), i(Number.isSafeInteger(r)), 16 !== t.length && 32 !== t.length) throw new RangeError("Invalid key size.");
                    if (e.length >= 24 && (t = Salsa20.derive(t, e.slice(0, 16)), e = e.slice(16)), this.state[0] = 1634760805, this.state[1] = c(t, 0), this.state[2] = c(t, 4), this.state[3] = c(t, 8), this.state[4] = c(t, 12), this.state[5] = t.length < 32 ? 824206446 : 857760878, 8 === e.length) this.state[6] = c(e, 0), this.state[7] = c(e, 4), this.state[8] = r >>> 0, this.state[9] = r / 4294967296 >>> 0;
                    else if (12 === e.length) this.state[6] = c(e, 0), this.state[7] = c(e, 4), this.state[8] = c(e, 8), this.state[9] = r >>> 0;
                    else {
                        if (16 !== e.length) throw new RangeError("Invalid nonce size.");
                        this.state[6] = c(e, 0), this.state[7] = c(e, 4), this.state[8] = c(e, 8), this.state[9] = c(e, 12)
                    }
                    return this.state[10] = t.length < 32 ? 2036477238 : 2036477234, this.state[11] = c(t, 16 % t.length), this.state[12] = c(t, 20 % t.length), this.state[13] = c(t, 24 % t.length), this.state[14] = c(t, 28 % t.length), this.state[15] = 1797285236, this.pos = 0, this
                }
                encrypt(t) {
                    return this.crypt(t, t)
                }
                crypt(t, e) {
                    if (i(Buffer.isBuffer(t)), i(Buffer.isBuffer(e)), e.length < t.length) throw new Error("Invalid output size.");
                    for (let r = 0; r < t.length; r++) 0 == (63 & this.pos) && (this._block(), this.pos = 0), e[r] = t[r] ^ this.bytes[this.pos++];
                    return e
                }
                _block() {
                    for (let t = 0; t < 16; t++) this.stream[t] = this.state[t];
                    for (let t = 0; t < 10; t++) s(this.stream, 0, 4, 8, 12), s(this.stream, 5, 9, 13, 1), s(this.stream, 10, 14, 2, 6), s(this.stream, 15, 3, 7, 11), s(this.stream, 0, 1, 2, 3), s(this.stream, 5, 6, 7, 4), s(this.stream, 10, 11, 8, 9), s(this.stream, 15, 12, 13, 14);
                    for (let t = 0; t < 16; t++) this.stream[t] += this.state[t];
                    if (n)
                        for (let t = 0; t < 16; t++) f(this.bytes, this.stream[t], 4 * t);
                    this.state[8] += 1, 0 === this.state[8] && (this.state[9] += 1)
                }
                destroy() {
                    for (let t = 0; t < 16; t++) this.state[t] = 0, this.stream[t] = 0;
                    if (n)
                        for (let t = 0; t < 64; t++) this.bytes[t] = 0;
                    return this.pos = 0, this
                }
                static derive(t, e) {
                    if (i(Buffer.isBuffer(t)), i(Buffer.isBuffer(e)), 16 !== t.length && 32 !== t.length) throw new RangeError("Invalid key size.");
                    if (16 !== e.length) throw new RangeError("Invalid nonce size.");
                    const r = new Uint32Array(16);
                    r[0] = 1634760805, r[1] = c(t, 0), r[2] = c(t, 4), r[3] = c(t, 8), r[4] = c(t, 12), r[5] = t.length < 32 ? 824206446 : 857760878, r[6] = c(e, 0), r[7] = c(e, 4), r[8] = c(e, 8), r[9] = c(e, 12), r[10] = t.length < 32 ? 2036477238 : 2036477234, r[11] = c(t, 16 % t.length), r[12] = c(t, 20 % t.length), r[13] = c(t, 24 % t.length), r[14] = c(t, 28 % t.length), r[15] = 1797285236;
                    for (let t = 0; t < 10; t++) s(r, 0, 4, 8, 12), s(r, 5, 9, 13, 1), s(r, 10, 14, 2, 6), s(r, 15, 3, 7, 11), s(r, 0, 1, 2, 3), s(r, 5, 6, 7, 4), s(r, 10, 11, 8, 9), s(r, 15, 12, 13, 14);
                    const n = Buffer.alloc(32);
                    return f(n, r[0], 0), f(n, r[5], 4), f(n, r[10], 8), f(n, r[15], 12), f(n, r[6], 16), f(n, r[7], 20), f(n, r[8], 24), f(n, r[9], 28), n
                }
            }

            function s(t, e, r, i, n) {
                t[r] ^= o(t[e] + t[n], 7), t[i] ^= o(t[r] + t[e], 9), t[n] ^= o(t[i] + t[r], 13), t[e] ^= o(t[n] + t[i], 18)
            }

            function o(t, e) {
                return t << e | t >>> 32 - e
            }

            function c(t, e) {
                return t[e++] + 256 * t[e++] + 65536 * t[e++] + 16777216 * t[e]
            }

            function f(t, e, r) {
                return t[r++] = e, e >>>= 8, t[r++] = e, e >>>= 8, t[r++] = e, e >>>= 8, t[r++] = e, r
            }
            Salsa20.native = 0, t.exports = Salsa20
        }
    }
]);