/*! For license information please see vendors.88d4750d7a7014ea0ae8.js.LICENSE.txt */
(window.webpackJsonp = window.webpackJsonp || []).push([
    [315], {
        10009: function(e, t, r) {
            "use strict";
            const i = r(5466),
                n = r(5579),
                s = Buffer.alloc(8, 0),
                d = Buffer.alloc(64, 0);
            d[0] = 128;
            const f = new Uint32Array([3614090360, 3905402710, 606105819, 3250441966, 4118548399, 1200080426, 2821735955, 4249261313, 1770035416, 2336552879, 4294925233, 2304563134, 1804603682, 4254626195, 2792965006, 1236535329, 4129170786, 3225465664, 643717713, 3921069994, 3593408605, 38016083, 3634488961, 3889429448, 568446438, 3275163606, 4107603335, 1163531501, 2850285829, 4243563512, 1735328473, 2368359562, 4294588738, 2272392833, 1839030562, 4259657740, 2763975236, 1272893353, 4139469664, 3200236656, 681279174, 3936430074, 3572445317, 76029189, 3654602809, 3873151461, 530742520, 3299628645, 4096336452, 1126891415, 2878612391, 4237533241, 1700485571, 2399980690, 4293915773, 2240044497, 1873313359, 4264355552, 2734768916, 1309151649, 4149444226, 3174756917, 718787259, 3951481745]),
                o = new Uint8Array([7, 12, 17, 22, 7, 12, 17, 22, 7, 12, 17, 22, 7, 12, 17, 22, 5, 9, 14, 20, 5, 9, 14, 20, 5, 9, 14, 20, 5, 9, 14, 20, 4, 11, 16, 23, 4, 11, 16, 23, 4, 11, 16, 23, 4, 11, 16, 23, 6, 10, 15, 21, 6, 10, 15, 21, 6, 10, 15, 21, 6, 10, 15, 21]);
            class MD5 {
                constructor() {
                    this.state = new Uint32Array(4), this.msg = new Uint32Array(16), this.block = Buffer.allocUnsafe(64), this.size = -1
                }
                init() {
                    return this.state[0] = 1732584193, this.state[1] = 4023233417, this.state[2] = 2562383102, this.state[3] = 271733878, this.size = 0, this
                }
                update(e) {
                    return i(Buffer.isBuffer(e)), this._update(e, e.length), this
                }
                final() {
                    return this._final(Buffer.allocUnsafe(16))
                }
                _update(e, t) {
                    i(-1 !== this.size, "Context already finalized.");
                    let r = 63 & this.size,
                        n = 0;
                    if (this.size += t, r > 0) {
                        let i = 64 - r;
                        if (i > t && (i = t), e.copy(this.block, r, n, n + i), r += i, t -= i, n += i, r < 64) return;
                        this.transform(this.block, 0)
                    }
                    for (; t >= 64;) this.transform(e, n), n += 64, t -= 64;
                    t > 0 && e.copy(this.block, 0, n, n + t)
                }
                _final(e) {
                    i(-1 !== this.size, "Context already finalized.");
                    const t = this.size % 64,
                        r = 8 * this.size;
                    u(s, r, 0), u(s, r * (1 / 4294967296), 4), this._update(d, 1 + (119 - t) % 64), this._update(s, 8);
                    for (let t = 0; t < 4; t++) u(e, this.state[t], 4 * t), this.state[t] = 0;
                    for (let e = 0; e < 16; e++) this.msg[e] = 0;
                    for (let e = 0; e < 64; e++) this.block[e] = 0;
                    return this.size = -1, e
                }
                transform(e, t) {
                    const r = this.msg;
                    let i = this.state[0],
                        n = this.state[1],
                        s = this.state[2],
                        d = this.state[3],
                        u = 0;
                    for (; u < 16; u++) r[u] = (l = t + 4 * u, (c = e)[l++] + 256 * c[l++] + 65536 * c[l++] + 16777216 * c[l]);
                    var c, l;
                    for (u = 0; u < 64; u++) {
                        let e, t;
                        u < 16 ? (e = n & s | ~n & d, t = u) : u < 32 ? (e = d & n | ~d & s, t = 5 * u + 1 & 15) : u < 48 ? (e = n ^ s ^ d, t = 3 * u + 5 & 15) : (e = s ^ (n | ~d), t = 7 * u & 15), e >>>= 0, e = e + i + f[u] + r[t], e >>>= 0, i = d, d = s, s = n, n += h(e, o[u]), n >>>= 0
                    }
                    this.state[0] += i, this.state[1] += n, this.state[2] += s, this.state[3] += d
                }
                static hash() {
                    return new MD5
                }
                static hmac() {
                    return new n(MD5, 64)
                }
                static digest(e) {
                    return MD5.ctx.init().update(e).final()
                }
                static root(e, t) {
                    return i(Buffer.isBuffer(e) && 16 === e.length), i(Buffer.isBuffer(t) && 16 === t.length), MD5.ctx.init().update(e).update(t).final()
                }
                static multi(e, t, r) {
                    const i = MD5.ctx;
                    return i.init(), i.update(e), i.update(t), r && i.update(r), i.final()
                }
                static mac(e, t) {
                    return MD5.hmac().init(t).update(e).final()
                }
            }

            function h(e, t) {
                return e << t | e >>> 32 - t
            }

            function u(e, t, r) {
                return e[r++] = t, t >>>= 8, e[r++] = t, t >>>= 8, e[r++] = t, t >>>= 8, e[r++] = t, r
            }
            MD5.native = 0, MD5.id = "MD5", MD5.size = 16, MD5.bits = 128, MD5.blockSize = 64, MD5.zero = Buffer.alloc(16, 0), MD5.ctx = new MD5, e.exports = MD5
        },
        10024: function(e, t, r) {
            "use strict";
            const i = r(5466),
                n = r(6262),
                s = r(7497),
                d = r(5579),
                f = new s;
            class Hash160 {
                constructor() {
                    this.ctx = new n
                }
                init() {
                    return this.ctx.init(), this
                }
                update(e) {
                    return this.ctx.update(e), this
                }
                final() {
                    const e = Buffer.allocUnsafe(32);
                    return this.ctx._final(e), f.init(), f.update(e), f._final(e), e.slice(0, 20)
                }
                static hash() {
                    return new Hash160
                }
                static hmac() {
                    return new d(Hash160, 64)
                }
                static digest(e) {
                    return Hash160.ctx.init().update(e).final()
                }
                static root(e, t) {
                    return i(Buffer.isBuffer(e) && 20 === e.length), i(Buffer.isBuffer(t) && 20 === t.length), Hash160.ctx.init().update(e).update(t).final()
                }
                static multi(e, t, r) {
                    const i = Hash160.ctx;
                    return i.init(), i.update(e), i.update(t), r && i.update(r), i.final()
                }
                static mac(e, t) {
                    return Hash160.hmac().init(t).update(e).final()
                }
            }
            Hash160.native = 0, Hash160.id = "HASH160", Hash160.size = 20, Hash160.bits = 160, Hash160.blockSize = 64, Hash160.zero = Buffer.alloc(20, 0), Hash160.ctx = new Hash160, e.exports = Hash160
        },
        10026: function(e, t, r) {
            "use strict";
            const i = r(5466),
                n = r(6262),
                s = r(5579);
            class Hash256 {
                constructor() {
                    this.ctx = new n
                }
                init() {
                    return this.ctx.init(), this
                }
                update(e) {
                    return this.ctx.update(e), this
                }
                final() {
                    const e = Buffer.allocUnsafe(32);
                    return this.ctx._final(e), this.ctx.init(), this.ctx.update(e), this.ctx._final(e), e
                }
                static hash() {
                    return new Hash256
                }
                static hmac() {
                    return new s(Hash256, 64)
                }
                static digest(e) {
                    return Hash256.ctx.init().update(e).final()
                }
                static root(e, t) {
                    return i(Buffer.isBuffer(e) && 32 === e.length), i(Buffer.isBuffer(t) && 32 === t.length), Hash256.ctx.init().update(e).update(t).final()
                }
                static multi(e, t, r) {
                    const i = Hash256.ctx;
                    return i.init(), i.update(e), i.update(t), r && i.update(r), i.final()
                }
                static mac(e, t) {
                    return Hash256.hmac().init(t).update(e).final()
                }
            }
            Hash256.native = 0, Hash256.id = "HASH256", Hash256.size = 32, Hash256.bits = 256, Hash256.blockSize = 64, Hash256.zero = Buffer.alloc(32, 0), Hash256.ctx = new Hash256, e.exports = Hash256
        },
        10037: function(e, t, r) {
            "use strict";
            const i = r(5466),
                n = r(5579),
                s = Buffer.alloc(8, 0),
                d = Buffer.alloc(64, 0);
            d[0] = 128;
            const f = new Uint32Array([1732584193, 4023233417, 2562383102, 271733878]);
            class MD4 {
                constructor() {
                    this.state = new Uint32Array(4), this.msg = new Uint32Array(16), this.block = Buffer.allocUnsafe(64), this.size = -1
                }
                init() {
                    return this.state[0] = f[0], this.state[1] = f[1], this.state[2] = f[2], this.state[3] = f[3], this.size = 0, this
                }
                update(e) {
                    return i(Buffer.isBuffer(e)), this._update(e, e.length), this
                }
                final() {
                    return this._final(Buffer.allocUnsafe(16))
                }
                _update(e, t) {
                    i(-1 !== this.size, "Context already finalized.");
                    let r = 63 & this.size,
                        n = 0;
                    if (this.size += t, r > 0) {
                        let i = 64 - r;
                        if (i > t && (i = t), e.copy(this.block, r, n, n + i), r += i, t -= i, n += i, r < 64) return;
                        this.transform(this.block, 0)
                    }
                    for (; t >= 64;) this.transform(e, n), n += 64, t -= 64;
                    t > 0 && e.copy(this.block, 0, n, n + t)
                }
                _final(e) {
                    i(-1 !== this.size, "Context already finalized.");
                    const t = 63 & this.size,
                        r = 8 * this.size;
                    l(s, r, 0), l(s, r * (1 / 4294967296), 4), this._update(d, 1 + (119 - t & 63)), this._update(s, 8);
                    for (let t = 0; t < 4; t++) l(e, this.state[t], 4 * t), this.state[t] = 0;
                    for (let e = 0; e < 16; e++) this.msg[e] = 0;
                    for (let e = 0; e < 64; e++) this.block[e] = 0;
                    return this.size = -1, e
                }
                transform(e, t) {
                    const r = this.msg;
                    let i = this.state[0],
                        n = this.state[1],
                        s = this.state[2],
                        d = this.state[3];
                    for (let i = 0; i < 16; i++) r[i] = (c = t + 4 * i, (f = e)[c++] + 256 * f[c++] + 65536 * f[c++] + 16777216 * f[c]);
                    var f, c;
                    for (const e of [0, 4, 8, 12]) i = o(i, n, s, d, r[e], 3), d = o(d, i, n, s, r[e + 1], 7), s = o(s, d, i, n, r[e + 2], 11), n = o(n, s, d, i, r[e + 3], 19);
                    for (let e = 0; e < 4; e++) i = h(i, n, s, d, r[e], 3), d = h(d, i, n, s, r[e + 4], 5), s = h(s, d, i, n, r[e + 8], 9), n = h(n, s, d, i, r[e + 12], 13);
                    for (const e of [0, 2, 1, 3]) i = u(i, n, s, d, r[e], 3), d = u(d, i, n, s, r[e + 8], 9), s = u(s, d, i, n, r[e + 4], 11), n = u(n, s, d, i, r[e + 12], 15);
                    this.state[0] += i, this.state[1] += n, this.state[2] += s, this.state[3] += d
                }
                static hash() {
                    return new MD4
                }
                static hmac() {
                    return new n(MD4, 64)
                }
                static digest(e) {
                    return MD4.ctx.init().update(e).final()
                }
                static root(e, t) {
                    return i(Buffer.isBuffer(e) && 16 === e.length), i(Buffer.isBuffer(t) && 16 === t.length), MD4.ctx.init().update(e).update(t).final()
                }
                static multi(e, t, r) {
                    const i = MD4.ctx;
                    return i.init(), i.update(e), i.update(t), r && i.update(r), i.final()
                }
                static mac(e, t) {
                    return MD4.hmac().init(t).update(e).final()
                }
            }

            function o(e, t, r, i, n, s) {
                return c(e + ((d = t) & r | ~d & i) + n, s);
                var d
            }

            function h(e, t, r, i, n, s) {
                return c(e + ((d = t) & (f = r) | d & (o = i) | f & o) + n + 1518500249, s);
                var d, f, o
            }

            function u(e, t, r, i, n, s) {
                return c(e + (t ^ r ^ i) + n + 1859775393, s)
            }

            function c(e, t) {
                return e << t | e >>> 32 - t
            }

            function l(e, t, r) {
                return e[r++] = t, t >>>= 8, e[r++] = t, t >>>= 8, e[r++] = t, t >>>= 8, e[r++] = t, r
            }
            MD4.native = 0, MD4.id = "MD4", MD4.size = 16, MD4.bits = 128, MD4.blockSize = 64, MD4.zero = Buffer.alloc(16, 0), MD4.ctx = new MD4, e.exports = MD4
        },
        10043: function(e, t, r) {
            "use strict";
            const i = r(5466);

            function n(e, t) {
                i(Buffer.isBuffer(e)), i("number" == typeof t);
                const r = e.length - e.length % 4,
                    n = 3432918353,
                    o = 461845907;
                let h = 0 | t;
                for (let t = 0; t < r; t += 4) {
                    let r = f(e, t);
                    r = s(r, n), r = d(r, 15), r = s(r, o), h ^= r, h = d(h, 13), h = s(h, 5) + 3864292196 | 0
                }
                let u = 0;
                switch (3 & e.length) {
                    case 3:
                        u ^= e[r + 2] << 16;
                    case 2:
                        u ^= e[r + 1] << 8;
                    case 1:
                        u ^= e[r + 0], u = s(u, n), u = d(u, 15), u = s(u, o), h ^= u
                }
                return h ^= e.length, h ^= h >>> 16, h = s(h, 2246822507), h ^= h >>> 13, h = s(h, 3266489909), h ^= h >>> 16, h >>> 0
            }

            function s(e, t) {
                const r = 65535 & e,
                    i = 65535 & t,
                    n = r * i;
                return (e >>> 16) * i + (t >>> 16) * r + (n >>> 16) << 16 | 65535 & n
            }

            function d(e, t) {
                return e << t | e >>> 32 - t
            }

            function f(e, t) {
                return e[t++] + 256 * e[t++] + 65536 * e[t++] + 16777216 * e[t]
            }
            t.native = 0, t.sum = n, t.tweak = function(e, t, r) {
                return i("number" == typeof t), i("number" == typeof r), n(e, s(t, 4221880213) + (0 | r))
            }
        },
        7482: function(e, t, r) {
            "use strict";
            const {
                custom: i
            } = r(5952), n = r(5798), s = 0, d = 1, f = 2, o = [-3, -1, -5, -7, 0, 7, 5, 1, 3];
            class Curve {
                constructor(e, t) {
                    this.id = null, this.ossl = null, this.type = "base", this.endian = "be", this.hash = null, this.prefix = null, this.context = !1, this.iso4 = !1, this.prime = null, this.p = null, this.red = null, this.fieldSize = 0, this.fieldBits = 0, this.signBit = 0, this.n = null, this.h = null, this.q = null, this.z = null, this.g = null, this.nh = null, this.scalarSize = 0, this.scalarBits = 0, this.mask = null, this.maxwellTrick = !1, this.redN = null, this.zero = null, this.one = null, this.two = null, this.three = null, this.blinding = null, this.endo = null, this.exp = null, this.inv = null, this._init(e, t)
                }
                _init(e, t) {
                    return c("string" == typeof e), c(t && "object" == typeof t), c(null != t.p, "Must pass a prime."), c(null == t.id || "string" == typeof t.id), c(null == t.ossl || "string" == typeof t.ossl), c(null == t.endian || "string" == typeof t.endian), c(null == t.hash || "string" == typeof t.hash), c(null == t.prefix || "string" == typeof t.prefix), c(null == t.context || "boolean" == typeof t.context), c(null == t.iso4 || "boolean" == typeof t.iso4), c(null == t.prime || "string" == typeof t.prime), this.id = t.id || null, this.ossl = t.ossl || null, this.type = e, this.endian = t.endian || ("short" === e ? "be" : "le"), this.hash = t.hash || null, this.prefix = t.prefix ? Buffer.from(t.prefix, "binary") : null, this.context = t.context || !1, this.iso4 = t.iso4 || !1, this.prime = t.prime || null, this.p = n.fromJSON(t.p), this.red = t.prime ? n.red(t.prime) : n.mont(this.p), this.fieldSize = this.p.byteLength(), this.fieldBits = this.p.bitLength(), this.signBit = 8 * this.fieldSize - 1, this.p.testn(this.signBit) && ("edwards" === this.type && (this.fieldSize += 1), "mont" !== this.type && "edwards" !== this.type || (this.signBit += 8)), this.n = n.fromJSON(t.n || "0"), this.h = n.fromJSON(t.h || "1"), this.q = this.n.mul(this.h), this.z = n.fromJSON(t.z || "0").toRed(this.red), this.g = null, this.nh = this.n.ushrn(1), this.scalarSize = Math.max(this.n.byteLength(), this.p.byteLength()), this.scalarBits = this.n.bitLength(), this.mask = null, this.maxwellTrick = !this.n.isZero() && this.p.div(this.n).cmpn(100) <= 0, this.redN = this.n.toRed(this.red), this.zero = new n(0).toRed(this.red), this.one = new n(1).toRed(this.red), this.two = new n(2).toRed(this.red), this.three = new n(3).toRed(this.red), this.blinding = null, this.endo = null, this.exp = null, this.inv = null, this
                }
                _finalize(e) {
                    return c(e && "object" == typeof e), this.mask = new Mask(this), this.g = e.g ? this.pointFromJSON(e.g) : this.point(), this
                }
                _scalarBlinding(e) {
                    if (!e) return null;
                    if (this.n.isZero()) return null;
                    for (;;) {
                        const t = this.randomScalar(e);
                        try {
                            return [t, t.invert(this.n)]
                        } catch (e) {
                            continue
                        }
                    }
                }
                _simpleMul(e, t) {
                    c(e instanceof Point), c(t instanceof n), c(!t.red);
                    const r = t.bitLength();
                    t.isNeg() && (e = e.neg());
                    let i = this.jpoint();
                    for (let n = r - 1; n >= 0; n--) {
                        const r = t.utestn(n);
                        i = i.dbl(), 1 === r && (i = i.add(e))
                    }
                    return i
                }
                _simpleMulAdd(e, t) {
                    c(Array.isArray(e)), c(Array.isArray(t)), c(e.length === t.length);
                    const r = e.length,
                        i = new Array(r),
                        s = t;
                    let d = 0;
                    for (let s = 0; s < r; s++) {
                        const r = e[s],
                            f = t[s];
                        if (c(r instanceof Point), c(f instanceof n), c(!f.red), s > 0 && r.type !== e[s - 1].type) throw new Error("Cannot mix points.");
                        i[s] = f.isNeg() ? r.neg() : r, d = Math.max(d, f.bitLength())
                    }
                    let f = this.jpoint();
                    for (let e = d - 1; e >= 0; e--) {
                        f = f.dbl();
                        for (let t = 0; t < r; t++) {
                            const r = i[t];
                            1 === s[t].utestn(e) && (f = f.add(r))
                        }
                    }
                    return f
                }
                _constMul(e, t) {
                    return c(e instanceof Point), this.n.isZero() ? this._simpleMul(e, t) : "short" === this.type ? this._coZLadderMul(e, t) : this._ladderMul(e, t)
                }
                _ladderMul(e, t) {
                    c(e instanceof Point), c(t instanceof n), c(!t.red);
                    const [r, i, s] = function(e, t) {
                        c(e instanceof n), c(t instanceof n);
                        const r = e.abs().add(t),
                            i = r.add(t),
                            s = r.bitLength(),
                            d = t.bitLength();
                        r.cinject(i, s - d - 1 >>> 31);
                        const f = 1 & e.isNeg(),
                            o = r.bitLength(),
                            h = r.toArray("le");
                        return [f, o, h]
                    }(t, this.q);
                    let d = e.toJ().clone(),
                        f = this.jpoint().clone(),
                        o = 0;
                    for (let e = i - 1; e >= 0; e--) {
                        const t = s[e >> 3] >> (7 & e) & 1;
                        d.swap(f, o ^ t), d = d.uadd(f), f = f.udbl(), o = t
                    }
                    return d.swap(f, o), f.swap(f.neg(), r), f
                }
                _coZLadderMul(e, t) {
                    c(e instanceof Point), c(t instanceof n), c(!t.red);
                    const [r, i, s] = function(e, t) {
                        c(e instanceof n), c(t instanceof n);
                        const r = e.abs().imod(t),
                            i = t.sub(r),
                            s = t.bitLength(),
                            d = r.bitLength(),
                            f = i.bitLength(),
                            o = d - s >>> 31 & d - f >>> 31 & ((1 ^ d) - 1 >>> 31 ^ 1) | (1 ^ f) - 1 >>> 31;
                        r.cinject(i, o);
                        const h = e.isNeg() ^ o,
                            u = r.bitLength(),
                            l = r.toArray("le");
                        return [h, u, l]
                    }(t, this.q);
                    let [d, f] = e.toJ().zdblu(), o = 0;
                    for (let e = i - 2; e >= 0; e--) {
                        const t = s[e >> 3] >> (7 & e) & 1;
                        d.swap(f, o ^ t), [d, f] = f.zaddc(d), [f, d] = d.zaddu(f), o = t
                    }
                    return d.swap(f, o), f.swap(f.neg(), r), f
                }
                _fixedNafMul(e, t) {
                    c(e instanceof Point), c(t instanceof n), c(e.pre);
                    const {
                        step: r,
                        points: i
                    } = e._getDoubles(0, 0), s = function(e, t, r, i) {
                        c(i >>> 0 === i);
                        const n = h(e, t, r),
                            s = Math.ceil(n.length / i),
                            d = new Array(s);
                        let f = 0;
                        for (let e = 0; e < n.length; e += i) {
                            let t = 0;
                            for (let r = e + i - 1; r >= e; r--) t = (t << 1) + n[r];
                            d[f++] = t
                        }
                        return c(f === s), d
                    }(t, 1, t.bitLength() + 1, r), d = ((1 << r + 1) - (r % 2 == 0 ? 2 : 1)) / 3;
                    let f = this.jpoint(),
                        o = this.jpoint();
                    for (let e = d; e > 0; e--) {
                        for (let t = 0; t < s.length; t++) {
                            const r = s[t];
                            r === e ? o = o.add(i[t]) : r === -e && (o = o.add(i[t].neg()))
                        }
                        f = f.add(o)
                    }
                    return f
                }
                _wnafMul(e, t, r) {
                    c(t instanceof Point), c(r instanceof n);
                    const {
                        width: i,
                        points: s
                    } = t._safeNAF(e), d = h(r, i, r.bitLength() + 1);
                    let f = this.jpoint();
                    for (let e = d.length - 1; e >= 0; e--) {
                        let t = 0;
                        for (; e >= 0 && 0 === d[e]; e--) t += 1;
                        if (e >= 0 && (t += 1), f = f.dblp(t), e < 0) break;
                        const r = d[e];
                        c(0 !== r), f = r > 0 ? f.add(s[r - 1 >> 1]) : f.add(s[-r - 1 >> 1].neg())
                    }
                    return f
                }
                _wnafMulAdd(e, t, r) {
                    c(e >>> 0 === e), c(Array.isArray(t)), c(Array.isArray(r)), c(t.length === r.length);
                    const i = t.length,
                        s = new Array(i),
                        d = new Array(i),
                        f = new Array(i);
                    let o = 0;
                    for (let e = 0; e < i; e++) {
                        const i = t[e],
                            h = r[e];
                        if (c(i instanceof Point), c(h instanceof n), e > 0 && i.type !== t[e - 1].type) throw new Error("Cannot mix points.");
                        s[e] = null, d[e] = null, f[e] = 0, o = Math.max(o, h.bitLength() + 1)
                    }
                    let l = null,
                        a = null,
                        b = 0;
                    for (let e = 0; e < i; e++) {
                        const i = t[e],
                            n = r[e],
                            f = i._getNAF(0);
                        f ? (s[b] = f.points, d[b] = h(n, f.width, o), b += 1) : l ? (s[b] = l._getJNAF(i), d[b] = u(a, n, o), l = null, a = null, b += 1) : (l = i, a = n)
                    }
                    if (l) {
                        const t = l._safeNAF(e);
                        s[b] = t.points, d[b] = h(a, t.width, o), b += 1
                    }
                    let p = this.jpoint();
                    for (let e = o - 1; e >= 0; e--) {
                        let t = 0;
                        for (; e >= 0;) {
                            let r = !0;
                            for (let t = 0; t < b; t++) f[t] = d[t][e], 0 !== f[t] && (r = !1);
                            if (!r) break;
                            t += 1, e -= 1
                        }
                        if (e >= 0 && (t += 1), p = p.dblp(t), e < 0) break;
                        for (let e = 0; e < b; e++) {
                            const t = f[e];
                            0 !== t && (p = t > 0 ? p.add(s[e][t - 1 >> 1]) : p.add(s[e][-t - 1 >> 1].neg()))
                        }
                    }
                    return p
                }
                _endoWnafMulAdd(e, t) {
                    throw new Error("Not implemented.")
                }
                _isqrt(e, t) {
                    if (c(e instanceof n), c(t instanceof n), t.isZero()) throw new RangeError("Not invertible.");
                    return 3 === this.p.andln(3) ? this._isqrt3mod4(e, t) : 5 === this.p.andln(7) ? this._isqrt5mod8(e, t) : e.redMul(t.redInvert()).redSqrt()
                }
                _isqrt3mod4(e, t) {
                    this.exp || (this.exp = this.p.subn(3).iushrn(2));
                    const r = e.redSqr(),
                        i = r.redMul(e),
                        n = i.redMul(r),
                        s = t.redSqr().redMul(t),
                        d = n.redMul(s).redPow(this.exp),
                        f = i.redMul(t).redMul(d);
                    if (0 === t.redMul(f.redSqr()).cmp(e)) return f;
                    throw new Error("X is not a square mod P.")
                }
                _isqrt5mod8(e, t) {
                    this.exp || (this.exp = this.p.subn(5).iushrn(3), this.inv = this.two.redPow(this.p.subn(1).iushrn(2)));
                    const r = t.redSqr().redMul(t),
                        i = r.redSqr().redMul(t),
                        n = e.redMul(i).redPow(this.exp),
                        s = e.redMul(r).redMul(n),
                        d = t.redMul(s.redSqr());
                    if (0 === d.cmp(e)) return s;
                    if (0 === d.redINeg().cmp(e)) return s.redMul(this.inv);
                    throw new Error("X is not a square mod P.")
                }
                precompute(e) {
                    return c(!this.g.isInfinity(), "Must have base point."), c(!this.n.isZero(), "Must have order."), this.g.precompute(this.n.bitLength() + 1, e), this.blinding = this._scalarBlinding(e), this
                }
                getBlinding() {
                    return this.blinding ? this.blinding : [new n(1), new n(1)]
                }
                point(e, t) {
                    throw new Error("Not implemented.")
                }
                jpoint(e, t, r) {
                    throw new Error("Not implemented.")
                }
                solveX2(e) {
                    throw new Error("Not implemented.")
                }
                solveX(e) {
                    return this.solveX2(e).redSqrt()
                }
                solveY2(e) {
                    throw new Error("Not implemented.")
                }
                solveY(e) {
                    return this.solveY2(e).redSqrt()
                }
                validate(e) {
                    throw new Error("Not implemented.")
                }
                pointFromX(e, t) {
                    throw new Error("Not implemented.")
                }
                pointFromY(e, t) {
                    throw new Error("Not implemented.")
                }
                pointFromR(e) {
                    throw new Error("Not implemented.")
                }
                pointFromShort(e) {
                    throw new Error("Not implemented.")
                }
                pointFromMont(e, t) {
                    throw new Error("Not implemented.")
                }
                pointFromEdwards(e) {
                    throw new Error("Not implemented.")
                }
                pointFromUniform(e) {
                    throw new Error("Not implemented.")
                }
                pointToUniform(e) {
                    throw new Error("Not implemented.")
                }
                pointFromHash(e) {
                    throw new Error("Not implemented.")
                }
                randomScalar(e) {
                    const t = this.n.isZero() ? this.p : this.n;
                    return n.random(e, 1, t)
                }
                randomField(e) {
                    return n.random(e, 1, this.p).toRed(this.red)
                }
                randomPoint(e) {
                    throw new Error("Not implemented.")
                }
                mulAll(e, t) {
                    return this.jmulAll(e, t)
                }
                mulAllSimple(e, t) {
                    return this.jmulAllSimple(e, t)
                }
                jmulAll(e, t) {
                    return c(Array.isArray(e)), c(0 === e.length || e[0] instanceof Point), this.endo && e.length > 0 && e[0].type === s ? this._endoWnafMulAdd(e, t) : this._wnafMulAdd(1, e, t)
                }
                jmulAllSimple(e, t) {
                    return this._simpleMulAdd(e, t)
                }
                reduce(e) {
                    return this.mask.reduce(e)
                }
                splitHash(e) {
                    return this.mask.splitHash(e)
                }
                clamp(e) {
                    return this.mask.clamp(e)
                }
                isClamped(e) {
                    return this.mask.isClamped(e)
                }
                encodeField(e) {
                    return c(e instanceof n), c(!e.red), e.encode(this.endian, this.fieldSize)
                }
                decodeField(e) {
                    if (c(Buffer.isBuffer(e)), e.length !== this.fieldSize) throw new Error("Invalid field element size.");
                    return n.decode(e, this.endian)
                }
                encodeScalar(e) {
                    return c(e instanceof n), c(!e.red), e.encode(this.endian, this.scalarSize)
                }
                decodeScalar(e) {
                    if (c(Buffer.isBuffer(e)), e.length !== this.scalarSize) throw new Error("Invalid scalar size.");
                    return n.decode(e, this.endian)
                }
                encodeUniform(e, t) {
                    c(e instanceof n);
                    const r = this.fieldBits,
                        i = r + 7 >>> 3,
                        s = 8 * i - r,
                        d = e.fromRed();
                    if (null != t && 0 !== s) {
                        const e = n.randomBits(t, s);
                        d.iuor(e.iushln(r))
                    }
                    return d.encode(this.endian, i)
                }
                decodeUniform(e) {
                    c(Buffer.isBuffer(e));
                    const t = this.fieldBits,
                        r = t + 7 >>> 3;
                    if (e.length !== r) throw new Error("Invalid field size.");
                    return n.decode(e, this.endian).iumaskn(t).toRed(this.red)
                }
                encodePoint(e, t) {
                    return c(e instanceof Point), e.encode(t)
                }
                decodePoint(e) {
                    throw new Error("Not implemented.")
                }
                encodeX(e) {
                    throw new Error("Not implemented.")
                }
                decodeX(e) {
                    throw new Error("Not implemented.")
                }
                pointToJSON(e, t) {
                    return c(e instanceof Point), e.toJSON(t)
                }
                pointFromJSON(e) {
                    throw new Error("Not implemented.")
                }
                toJSON(e) {
                    return {
                        id: this.id,
                        ossl: this.ossl,
                        type: this.type,
                        endian: this.endian,
                        hash: this.hash,
                        prefix: this.prefix ? this.prefix.toString() : null,
                        context: this.context,
                        iso4: this.iso4,
                        prime: this.prime,
                        p: this.p.toJSON(),
                        a: void 0,
                        b: void 0,
                        c: void 0,
                        d: void 0,
                        n: this.n.toJSON(),
                        h: this.h.toString(16),
                        s: void 0,
                        z: this.z.fromRed().toString(16),
                        g: this.g.toJSON(e),
                        endo: this.endo ? this.endo.toJSON() : void 0
                    }
                }
                static fromJSON(e) {
                    return new this(e)
                }
            }
            class Point {
                constructor(e, t) {
                    c(e instanceof Curve), c(t >>> 0 === t), this.curve = e, this.type = t, this.pre = null
                }
                _init() {
                    throw new Error("Not implemented.")
                }
                _getNAF(e) {
                    if (c(e >>> 0 === e), this.pre && this.pre.naf) return this.pre.naf;
                    if (0 === e) return null;
                    const t = (1 << e) - 1,
                        r = new Array(t),
                        i = 1 === t ? null : this.dbl();
                    r[0] = this;
                    for (let e = 1; e < t; e++) r[e] = r[e - 1].add(i);
                    return new NAF(e, r)
                }
                _safeNAF(e) {
                    return this._getNAF(e)
                }
                _getDoubles(e, t) {
                    if (c(e >>> 0 === e), c(t >>> 0 === t), this.pre && this.pre.doubles) return this.pre.doubles;
                    if (0 === e) return null;
                    const r = Math.ceil(t / e) + 1,
                        i = new Array(r);
                    let n = this,
                        s = 0;
                    i[s++] = n;
                    for (let r = 0; r < t; r += e) {
                        for (let t = 0; t < e; t++) n = n.dbl();
                        i[s++] = n
                    }
                    return c(s === r), new Doubles(e, i)
                }
                _getBeta() {
                    return null
                }
                _getBlinding(e) {
                    if (this.pre && this.pre.blinding) return this.pre.blinding;
                    if (!e) return null;
                    if (this.curve.n.isZero()) return null;
                    for (;;) {
                        const t = this.curve.randomScalar(e),
                            r = this.mul(t);
                        if (!r.isInfinity()) return new Blinding(t, r)
                    }
                }
                _hasDoubles(e) {
                    if (c(e instanceof n), !this.pre || !this.pre.doubles) return !1;
                    const {
                        step: t,
                        points: r
                    } = this.pre.doubles, i = e.bitLength() + 1;
                    return r.length >= Math.ceil(i / t) + 1
                }
                _getJNAF(e) {
                    return c(e instanceof Point), c(e.type === this.type), [this, this.add(e), this.add(e.neg()), e]
                }
                _blind(e, t) {
                    if (c(e instanceof n), c(!e.red), this.pre && this.pre.blinding) {
                        const {
                            blind: t,
                            unblind: r
                        } = this.pre.blinding;
                        return [this, e.sub(t), r]
                    }
                    if (!t) return [this, e, null];
                    if (this.pre) {
                        if (this.curve.n.isZero()) return [this, e, null];
                        return [this, this.curve.randomScalar(t).mul(this.curve.n).iadd(e), null]
                    }
                    return [this.randomize(t), e, null]
                }
                clone() {
                    throw new Error("Not implemented.")
                }
                swap(e, t) {
                    throw new Error("Not implemented.")
                }
                precompute(e, t) {
                    return c(e >>> 0 === e), this.pre || (this.pre = new Precomp), this.pre.naf || (this.pre.naf = this._getNAF(8)), this.pre.doubles || (this.pre.doubles = this._getDoubles(4, e)), this.pre.beta || (this.pre.beta = this._getBeta()), this.pre.blinding || (this.pre.blinding = this._getBlinding(t)), this
                }
                validate() {
                    return this.curve.validate(this)
                }
                normalize() {
                    return this
                }
                scale(e) {
                    throw new Error("Not implemented.")
                }
                randomize(e) {
                    const t = this.curve.randomField(e);
                    return this.scale(t)
                }
                neg() {
                    throw new Error("Not implemented.")
                }
                add(e) {
                    throw new Error("Not implemented.")
                }
                dbl() {
                    throw new Error("Not implemented.")
                }
                dblp(e) {
                    c(e >>> 0 === e);
                    let t = this;
                    for (let r = 0; r < e; r++) t = t.dbl();
                    return t
                }
                trpl() {
                    throw new Error("Not implemented.")
                }
                uadd(e) {
                    throw new Error("Not implemented.")
                }
                udbl() {
                    throw new Error("Not implemented.")
                }
                zaddu(e) {
                    throw new Error("Not implemented.")
                }
                zaddc(e) {
                    throw new Error("Not implemented.")
                }
                zdblu() {
                    throw new Error("Not implemented.")
                }
                ztrplu() {
                    throw new Error("Not implemented.")
                }
                diffAdd(e, t) {
                    throw new Error("Not implemented.")
                }
                diffAddDbl(e, t) {
                    throw new Error("Not implemented.")
                }
                diffTrpl(e) {
                    throw new Error("Not implemented.")
                }
                recover() {
                    throw new Error("Not implemented.")
                }
                getX() {
                    throw new Error("Not implemented.")
                }
                getY() {
                    throw new Error("Not implemented.")
                }
                eq(e) {
                    throw new Error("Not implemented.")
                }
                isInfinity() {
                    throw new Error("Not implemented.")
                }
                hasQuadY() {
                    throw new Error("Not implemented.")
                }
                eqX(e) {
                    throw new Error("Not implemented.")
                }
                eqXToP(e) {
                    throw new Error("Not implemented.")
                }
                isSmall() {
                    return !this.isInfinity() && this.jmulH().isInfinity()
                }
                hasTorsion() {
                    return !this.isInfinity() && !this.jmul(this.curve.n).isInfinity()
                }
                mul(e) {
                    return this.jmul(e)
                }
                mulSimple(e) {
                    return this.jmulSimple(e)
                }
                mulBlind(e, t) {
                    return this.jmulBlind(e, t)
                }
                mulConst(e, t) {
                    return this.jmulConst(e, t)
                }
                mulAdd(e, t, r) {
                    return this.jmulAdd(e, t, r)
                }
                mulAddSimple(e, t, r) {
                    return this.jmulAddSimple(e, t, r)
                }
                mulH() {
                    return this.jmulH()
                }
                divH() {
                    return this.jdivH()
                }
                jmul(e) {
                    return this._hasDoubles(e) ? this.curve._fixedNafMul(this, e) : this.curve.endo && this.type === s ? this.curve._endoWnafMulAdd([this], [e]) : this.curve._wnafMul(4, this, e)
                }
                jmulSimple(e) {
                    return this.curve._simpleMul(this, e)
                }
                jmulBlind(e, t = null) {
                    const [r, i, n] = this._blind(e, t), s = r.jmul(i);
                    return n ? s.add(n) : s
                }
                jmulConst(e, t = null) {
                    const [r, i, n] = this._blind(e, t), s = this.curve._constMul(r, i);
                    return n ? s.uadd(n) : s
                }
                jmulAdd(e, t, r) {
                    return this.curve.endo && this.type === s ? this.curve._endoWnafMulAdd([this, t], [e, r]) : this.curve._wnafMulAdd(1, [this, t], [e, r])
                }
                jmulAddSimple(e, t, r) {
                    return this.curve._simpleMulAdd([this, t], [e, r])
                }
                jmulH() {
                    const e = this.curve.h.bitLength(),
                        t = this.curve.h.andln(-1);
                    return e <= 26 && 0 == (t & t - 1) ? this.toJ().dblp(e - 1) : this.jmulSimple(this.curve.h)
                }
                jdivH() {
                    return this.curve.n.isZero() || 0 === this.curve.h.cmpn(1) ? this : this.jmul(this.curve.h.invert(this.curve.n))
                }
                toP() {
                    return this.normalize()
                }
                toJ() {
                    return this
                }
                toR() {
                    return this
                }
                encode(e) {
                    throw new Error("Not implemented.")
                }
                static decode(e, t) {
                    throw new Error("Not implemented.")
                }
                encodeX() {
                    throw new Error("Not implemented.")
                }
                static decodeX(e, t) {
                    throw new Error("Not implemented.")
                }
                toJSON(e) {
                    throw new Error("Not implemented.")
                }
                static fromJSON(e, t) {
                    throw new Error("Not implemented.")
                } [i]() {
                    return "<Point>"
                }
            }
            class ShortCurve extends Curve {
                constructor(e) {
                    super("short", e), this.a = n.fromJSON(e.a).toRed(this.red), this.b = n.fromJSON(e.b).toRed(this.red), this.i2 = this.two.redInvert(), this.zeroA = 0 === this.a.sign(), this.threeA = 0 === this.a.cmp(this.three.redNeg()), this._finalize(e)
                }
                _finalize(e) {
                    return super._finalize(e), null != e.endo ? this.endo = Endo.fromJSON(this, e.endo) : this.endo = this._getEndomorphism(), this
                }
                _getEndomorphism() {
                    if (this.n.isZero() || this.g.isInfinity()) return null;
                    if (!this.zeroA || 1 !== this.p.modrn(3) || 1 !== this.n.modrn(3)) return null;
                    const [e, t] = this._getEndoRoots(this.p), r = n.min(e, t).toRed(this.red), [i, s] = this._getEndoRoots(this.n), d = this.g.x.redMul(r);
                    let f;
                    0 === this.g.mul(i).x.cmp(d) ? f = i : (c(0 === this.g.mul(s).x.cmp(d)), f = s);
                    const o = this._getEndoBasis(f);
                    return new Endo(r, f, o)
                }
                _getEndoRoots(e) {
                    const t = e === this.p ? this.red : n.mont(e),
                        r = new n(2).toRed(t),
                        i = new n(3).toRed(t),
                        s = r.redInvert(),
                        d = s.redNeg(),
                        f = i.redINeg().redSqrt().redMul(s);
                    return [d.redAdd(f).fromRed(), d.redISub(f).fromRed()]
                }
                _getEndoBasis(e) {
                    const [t, r, i, n, s, d] = this._egcdSqrt(e), f = i, o = n.neg(), h = t.sqr().iadd(r.sqr()), u = s.sqr().iadd(d.sqr());
                    let c, l;
                    return h.cmp(u) <= 0 ? (c = t, l = r.neg()) : (c = s, l = d.neg()), [new Vector(f, o), new Vector(c, l)]
                }
                _egcdSqrt(e) {
                    c(e instanceof n), c(!e.red), c(e.sign() > 0), c(this.n.sign() > 0);
                    const t = this.n.ushrn(this.n.bitLength() >>> 1);
                    let r, i, s, d, f, o = e,
                        h = this.n.clone(),
                        u = new n(1),
                        l = new n(0),
                        a = new n(0),
                        b = new n(1),
                        p = 0,
                        m = 0;
                    for (; !o.isZero() && p < 2;) {
                        const e = h.quo(o),
                            n = h.sub(e.mul(o)),
                            c = a.sub(e.mul(u)),
                            S = b.sub(e.mul(l));
                        0 === m && n.cmp(t) < 0 && (r = f, i = u, s = n, d = c, m = 1), f = n, h = o, o = n, a = u, u = c, b = l, l = S, p += m
                    }
                    c(0 !== m, "Could not find r < sqrt(n).");
                    return [r, i, s, d, a, u]
                }
                _endoSplit(e) {
                    c(e instanceof n), c(!e.red), c(!this.n.isZero());
                    const [t, r] = this.endo.basis, i = r.b.mul(e).divRound(this.n), s = t.b.neg().mul(e).divRound(this.n), d = i.mul(t.a), f = s.mul(r.a), o = i.ineg().mul(t.b), h = s.mul(r.b);
                    return [e.sub(d).isub(f), o.isub(h)]
                }
                _endoBeta(e) {
                    return c(e instanceof ShortPoint), [e, e._getBeta()]
                }
                _endoWnafMulAdd(e, t) {
                    c(Array.isArray(e)), c(Array.isArray(t)), c(e.length === t.length), c(null != this.endo);
                    const r = e.length,
                        i = new Array(2 * r),
                        n = new Array(2 * r);
                    for (let s = 0; s < r; s++) {
                        const [r, d] = this._endoBeta(e[s]), [f, o] = this._endoSplit(t[s]);
                        i[2 * s + 0] = r, n[2 * s + 0] = f, i[2 * s + 1] = d, n[2 * s + 1] = o
                    }
                    return this._wnafMulAdd(1, i, n)
                }
                _icart(e) {
                    const t = e.clone();
                    t.cinject(this.one, t.czero());
                    const r = t.redSqr(),
                        i = r.redSqr(),
                        n = i.redMul(r),
                        s = t.redMuln(6).redFermat(),
                        d = this.a.redMuln(3).redISub(i).redMul(s),
                        f = this.p.ushln(1).isubn(1).idivn(3),
                        o = d.redSqr(),
                        h = n.redMul(this.three.redMuln(9).redInvert()),
                        u = r.redMul(this.three.redInvert()),
                        c = o.redISub(this.b).redISub(h).redPow(f).redIAdd(u),
                        l = t.redMul(c).redIAdd(d);
                    return this.point(c, l)
                }
                _sswu(e) {
                    const t = this.p.subn(2),
                        r = this.a.redInvert(),
                        i = this.b.redNeg(),
                        n = this.z.redSqr(),
                        s = this.z.redMul(this.a).redInvert(),
                        d = e.redSqr(),
                        f = d.redSqr(),
                        o = n.redMul(f).redIAdd(this.z.redMul(d)).redPow(t),
                        h = i.redMul(r).redMul(this.one.redAdd(o));
                    h.cinject(this.b.redMul(s), o.czero());
                    const u = this.z.redMul(d).redMul(h),
                        c = this.solveY2(h),
                        l = this.solveY2(u),
                        a = c.redLegendre() >>> 31,
                        b = [h, u][a],
                        p = [c, l][a].redSqrt();
                    return p.cinject(p.redNeg(), p.redIsOdd() ^ e.redIsOdd()), this.point(b, p)
                }
                _svdw(e) {
                    const t = this.p.subn(2),
                        r = this.z.redSqr(),
                        i = this.three.redNeg().redMul(r).redSqrt(),
                        n = r.redMuln(3).redInvert(),
                        s = e.redSqr(),
                        d = s.redSqr(),
                        f = this.solveY2(this.z),
                        o = s.redAdd(f),
                        h = s.redMul(o).redPow(t),
                        u = d.redMul(h).redMul(i),
                        c = o.redSqr().redMul(o),
                        l = i.redSub(this.z).redMul(this.i2).redISub(u),
                        a = u.redSub(i.redAdd(this.z).redMul(this.i2)),
                        b = this.z.redSub(c.redMul(h).redMul(n)),
                        p = this.solveY2(l),
                        m = this.solveY2(a),
                        S = this.solveY2(b),
                        M = function(e, t) {
                            const r = e % t,
                                i = r >>> 31;
                            return i - 1 & r | ~(i - 1) & r + t
                        }((p.redLegendre() - 1) * m.redLegendre(), 3),
                        v = [l, a, b][M],
                        I = [p, m, S][M].redSqrt();
                    return I.cinject(I.redNeg(), I.redIsOdd() ^ e.redIsOdd()), this.point(v, I)
                }
                point(e, t) {
                    return new ShortPoint(this, e, t)
                }
                jpoint(e, t, r) {
                    return new JPoint(this, e, t, r)
                }
                solveY2(e) {
                    c(e instanceof n);
                    const t = e.redSqr().redMul(e).redIAdd(this.b);
                    return this.zeroA || (this.threeA ? t.redIAdd(e.redMuln(-3)) : t.redIAdd(this.a.redMul(e))), t
                }
                validate(e) {
                    if (c(e instanceof ShortPoint), e.inf) return !0;
                    const {
                        x: t,
                        y: r
                    } = e, i = this.solveY2(t);
                    return 0 === r.redSqr().cmp(i)
                }
                pointFromX(e, t) {
                    c(e instanceof n), c("boolean" == typeof t), e.red || (e = e.toRed(this.red));
                    const r = this.solveY2(e).redSqrt();
                    return r.redIsOdd() !== t && r.redINeg(), this.point(e, r)
                }
                pointFromR(e) {
                    c(e instanceof n), e.red || (e = e.toRed(this.red));
                    const t = this.solveY2(e).redSqrt();
                    return this.point(e, t)
                }
                pointFromShort(e) {
                    return c(e instanceof Point), c(e.curve === this), e.toP()
                }
                pointFromMont(e, t) {
                    if (c(e instanceof MontPoint), c("boolean" == typeof t), c(e.curve.p.eq(this.p)), e.normalize(), e.isInfinity()) {
                        if (t) throw new Error("Invalid point.");
                        return this.point()
                    }
                    const r = e.curve.three.redInvert(),
                        i = e.curve.a.redMul(r),
                        n = e.x.redAdd(i),
                        s = e.getY(t);
                    return this.point(n.fromRed(), s)
                }
                pointFromEdwards(e) {
                    if (c(e instanceof EdwardsPoint), c(e.curve.p.eq(this.p)), c(e.curve.twisted), e.normalize(), e.isInfinity()) return this.point();
                    const t = e.curve.three.redInvert(),
                        r = e.curve._montA(),
                        i = r.redMul(t),
                        n = r.redAdd(e.curve.two).redINeg().redSqrt(),
                        s = e.z.redAdd(e.y),
                        d = e.z.redSub(e.y),
                        f = s.redMul(d.redInvert()).redIAdd(i),
                        o = n.redMul(s).redMul(d.redMul(e.x).redInvert());
                    return this.point(f.fromRed(), o.fromRed())
                }
                pointFromUniform(e) {
                    if (c(e instanceof n), 2 === this.p.modrn(3)) return this._icart(e);
                    if (this.z.isZero()) throw new Error("Not implemented.");
                    if (!this.a.isZero() && !this.b.isZero()) return this._sswu(e);
                    if (1 === this.p.modrn(3) && !this.b.isZero()) return this._svdw(e);
                    throw new Error("Not implemented.")
                }
                pointFromHash(e) {
                    if (c(Buffer.isBuffer(e)), e.length !== 2 * this.fieldSize) throw new Error("Invalid hash size.");
                    const t = e.slice(0, this.fieldSize),
                        r = e.slice(this.fieldSize),
                        i = this.decodeUniform(t),
                        n = this.decodeUniform(r),
                        s = this.pointFromUniform(i),
                        d = this.pointFromUniform(n);
                    return s.add(d)
                }
                randomPoint(e) {
                    let t;
                    for (;;) {
                        const r = this.randomField(e),
                            i = n.random(e, 0, 2);
                        try {
                            t = this.pointFromX(r, i.isOdd())
                        } catch (e) {
                            continue
                        }
                        return t
                    }
                }
                mulAll(e, t) {
                    return super.mulAll(e, t).toP()
                }
                mulAllSimple(e, t) {
                    return super.mulAllSimple(e, t).toP()
                }
                decodePoint(e) {
                    return ShortPoint.decode(this, e)
                }
                encodeX(e) {
                    return c(e instanceof Point), e.encodeX()
                }
                decodeX(e) {
                    return ShortPoint.decodeX(this, e)
                }
                pointFromJSON(e) {
                    return ShortPoint.fromJSON(this, e)
                }
                toJSON(e) {
                    const t = super.toJSON(e);
                    return t.a = this.a.fromRed().toJSON(), t.b = this.b.fromRed().toJSON(), t
                }
            }
            class ShortPoint extends Point {
                constructor(e, t, r) {
                    c(e instanceof ShortCurve), super(e, s), this.x = null, this.y = null, this.inf = 1, null != t && this._init(t, r)
                }
                _init(e, t) {
                    c(e instanceof n), c(t instanceof n), this.x = e, this.y = t, this.x.red || (this.x = this.x.toRed(this.curve.red)), this.y.red || (this.y = this.y.toRed(this.curve.red)), this.inf = 0
                }
                _safeNAF(e) {
                    return c(e >>> 0 === e), this.pre && this.pre.naf ? this.pre.naf : e > 1 ? this.toJ()._getNAF(e) : this._getNAF(e)
                }
                _getBeta() {
                    if (!this.curve.endo) return null;
                    if (this.pre && this.pre.beta) return this.pre.beta;
                    const e = this.x.redMul(this.curve.endo.beta),
                        t = this.curve.point(e, this.y);
                    return this.pre && (t.pre = this.pre.map(e => {
                        const t = e.x.redMul(this.curve.endo.beta);
                        return this.curve.point(t, e.y)
                    }), this.pre.beta = t), t
                }
                _getJNAF(e) {
                    if (c(e instanceof ShortPoint), this.inf | e.inf) return super._getJNAF(e);
                    const t = [this, null, null, e];
                    return 0 === this.y.cmp(e.y) ? (t[1] = this.add(e), t[2] = this.toJ().add(e.neg())) : 0 === this.y.cmp(e.y.redNeg()) ? (t[1] = this.toJ().add(e), t[2] = this.add(e.neg())) : (t[1] = this.toJ().add(e), t[2] = this.toJ().add(e.neg())), t
                }
                clone() {
                    return this.inf ? this.curve.point() : this.curve.point(this.x.clone(), this.y.clone())
                }
                scale(e) {
                    return this.toJ().scale(e)
                }
                neg() {
                    return this.inf ? this : this.curve.point(this.x, this.y.redNeg())
                }
                add(e) {
                    if (c(e instanceof ShortPoint), this.inf) return e;
                    if (e.inf) return this;
                    if (0 === this.x.cmp(e.x)) return 0 !== this.y.cmp(e.y) ? this.curve.point() : this.dbl();
                    if (0 === this.y.cmp(e.y)) {
                        const t = this.x.redNeg().redISub(e.x),
                            r = this.y.redNeg();
                        return this.curve.point(t, r)
                    }
                    const t = this.x.redSub(e.x),
                        r = this.y.redSub(e.y).redMul(t.redInvert()),
                        i = r.redSqr().redISub(this.x).redISub(e.x),
                        n = r.redMul(this.x.redSub(i)).redISub(this.y);
                    return this.curve.point(i, n)
                }
                dbl() {
                    if (this.inf) return this;
                    if (0 === this.y.sign()) return this.curve.point();
                    const e = this.x.redSqr().redIMuln(3).redIAdd(this.curve.a);
                    if (0 === e.sign()) {
                        const e = this.x.redNeg().redISub(this.x),
                            t = this.y.redNeg();
                        return this.curve.point(e, t)
                    }
                    const t = this.y.redMuln(2),
                        r = e.redMul(t.redInvert()),
                        i = r.redSqr().redISub(this.x).redISub(this.x),
                        n = r.redMul(this.x.redSub(i)).redISub(this.y);
                    return this.curve.point(i, n)
                }
                trpl() {
                    if (this.inf) return this;
                    if (0 === this.y.sign()) return this;
                    const e = this.x.redSqr(),
                        t = e.redMuln(3).redIAdd(this.curve.a),
                        r = this.y.redSqr().redIMuln(2),
                        i = this.y.redMul(r).redIMuln(4),
                        n = r.redSqr(),
                        s = r.redIAdd(this.x).redSqr().redISub(e).redISub(n),
                        d = t.redSqr().redISub(s).redISub(s),
                        f = d.redMul(this.y).redIMuln(2),
                        o = t.redMul(s.redISub(d)).redISub(n).redISub(n),
                        h = this.y.redMul(i).redISub(o),
                        u = h.redSqr(),
                        c = this.x.redMul(i).redISub(f),
                        l = c.redSqr(),
                        a = l.redMul(c),
                        b = l.redMul(f),
                        p = u.redMul(i).redISub(a).redISub(b).redISub(b),
                        m = a.redMul(i).redInvert(),
                        S = m.redMul(c).redMul(p),
                        M = m.redMul(h.redMul(b.redISub(p)).redISub(a.redMul(o)));
                    return this.curve.point(S, M)
                }
                uadd(e) {
                    if (c(e instanceof ShortPoint), this.inf) return e;
                    if (e.inf) return this;
                    const t = this.y.redAdd(e.y),
                        r = this.x.redAdd(e.x).redSqr(),
                        i = this.x.redMul(e.x),
                        n = r.redISub(i).redIAdd(this.curve.a);
                    if (0 === t.sign() && 0 === n.sign() && (t.inject(this.x.redSub(e.x)), n.inject(this.y.redSub(e.y)), c(t.sign() > 0)), 0 === t.sign()) return this.curve.point();
                    if (0 === n.sign()) {
                        c(0 !== this.x.cmp(e.x)), c(0 === this.y.cmp(e.y));
                        const t = this.x.redNeg().redISub(e.x),
                            r = this.y.redNeg();
                        return this.curve.point(t, r)
                    }
                    const s = n.redMul(t.redInvert()),
                        d = s.redSqr().redISub(this.x).redISub(e.x),
                        f = s.redMul(this.x.redSub(d)).redISub(this.y);
                    return this.curve.point(d, f)
                }
                udbl() {
                    return this.dbl()
                }
                recover(e, t) {
                    if (c(e instanceof n), c(t instanceof n), this.inf) return this;
                    if (0 === this.y.sign()) return this.curve.point();
                    const r = this.curve.b.redMuln(2),
                        i = this.x.redMul(e).redIAdd(this.curve.a),
                        s = this.x.redAdd(e),
                        d = r.redIAdd(i.redMul(s)),
                        f = t.redMul(this.x.redSub(e).redSqr()),
                        o = d.redISub(f),
                        h = this.y.redMuln(2).redInvert(),
                        u = e,
                        l = o.redMul(h);
                    return this.curve.point(u, l)
                }
                getX() {
                    if (this.inf) throw new Error("Invalid point.");
                    return this.x.fromRed()
                }
                getY() {
                    if (this.inf) throw new Error("Invalid point.");
                    return this.y.fromRed()
                }
                eq(e) {
                    return c(e instanceof ShortPoint), this === e || (this.inf ? 0 !== e.inf : !e.inf && (0 === this.x.cmp(e.x) && 0 === this.y.cmp(e.y)))
                }
                isInfinity() {
                    return 0 !== this.inf
                }
                hasQuadY() {
                    return !this.inf && 1 === this.y.redJacobi()
                }
                eqX(e) {
                    return c(e instanceof n), c(!e.red), !this.inf && 0 === this.getX().cmp(e)
                }
                eqXToP(e) {
                    return c(e instanceof n), c(!e.red), c(!this.curve.n.isZero()), !this.inf && 0 === this.getX().imod(this.curve.n).cmp(e)
                }
                mul(e) {
                    return super.mul(e).toP()
                }
                mulSimple(e) {
                    return super.mulSimple(e).toP()
                }
                mulBlind(e, t) {
                    return super.mulBlind(e, t).toP()
                }
                mulConst(e, t) {
                    return super.mulConst(e, t).toP()
                }
                mulAdd(e, t, r) {
                    return super.mulAdd(e, t, r).toP()
                }
                mulAddSimple(e, t, r) {
                    return super.mulAddSimple(e, t, r).toP()
                }
                mulH() {
                    return super.mulH().toP()
                }
                divH() {
                    return super.divH().toP()
                }
                toP() {
                    return this
                }
                toJ() {
                    return this.inf ? this.curve.jpoint() : this.curve.jpoint(this.x, this.y, this.curve.one)
                }
                toR() {
                    return this.inf || this.hasQuadY() ? this : this.neg()
                }
                encode(e) {
                    null == e && (e = !0), c("boolean" == typeof e);
                    const {
                        fieldSize: t
                    } = this.curve;
                    if (this.inf) throw new Error("Invalid point.");
                    if (e) {
                        const e = Buffer.allocUnsafe(1 + t),
                            r = this.curve.encodeField(this.getX());
                        return e[0] = 2 | this.y.redIsOdd(), r.copy(e, 1), e
                    }
                    const r = Buffer.allocUnsafe(1 + 2 * t),
                        i = this.curve.encodeField(this.getX()),
                        n = this.curve.encodeField(this.getY());
                    return r[0] = 4, i.copy(r, 1), n.copy(r, 1 + t), r
                }
                static decode(e, t) {
                    c(e instanceof ShortCurve), c(Buffer.isBuffer(t));
                    const r = e.fieldSize;
                    if (t.length < 1 + r) throw new Error("Not a point.");
                    const i = t[0];
                    switch (i) {
                        case 2:
                        case 3: {
                            if (t.length !== 1 + r) throw new Error("Invalid point size for compressed.");
                            const n = e.decodeField(t.slice(1, 1 + r));
                            if (n.cmp(e.p) >= 0) throw new Error("Invalid point.");
                            const s = e.pointFromX(n, 3 === i);
                            return c(!s.isInfinity()), s
                        }
                        case 4:
                        case 6:
                        case 7: {
                            if (t.length !== 1 + 2 * r) throw new Error("Invalid point size for uncompressed.");
                            const n = e.decodeField(t.slice(1, 1 + r)),
                                s = e.decodeField(t.slice(1 + r, 1 + 2 * r));
                            if (n.cmp(e.p) >= 0 || s.cmp(e.p) >= 0) throw new Error("Invalid point.");
                            if (4 !== i && i !== (6 | s.isOdd())) throw new Error("Invalid hybrid encoding.");
                            const d = e.point(n, s);
                            if (!d.validate()) throw new Error("Invalid point.");
                            return c(!d.isInfinity()), d
                        }
                        default:
                            throw new Error("Unknown point format.")
                    }
                }
                encodeX() {
                    return this.curve.encodeField(this.getX())
                }
                static decodeX(e, t) {
                    c(e instanceof ShortCurve);
                    const r = e.decodeField(t);
                    if (r.cmp(e.p) >= 0) throw new Error("Invalid point.");
                    return e.pointFromR(r)
                }
                toJSON(e) {
                    if (this.inf) return [];
                    const t = this.getX().toJSON(),
                        r = this.getY().toJSON();
                    return !0 === e && this.pre ? [t, r, this.pre.toJSON()] : [t, r]
                }
                static fromJSON(e, t) {
                    if (c(e instanceof ShortCurve), c(Array.isArray(t)), c(0 === t.length || 2 === t.length || 3 === t.length), 0 === t.length) return e.point();
                    const r = n.fromJSON(t[0]),
                        i = n.fromJSON(t[1]),
                        s = e.point(r, i);
                    return t.length > 2 && null != t[2] && (s.pre = Precomp.fromJSON(s, t[2])), s
                } [i]() {
                    return this.inf ? "<ShortPoint: Infinity>" : "<ShortPoint: x=" + this.x.fromRed().toString(16, 2) + " y=" + this.y.fromRed().toString(16, 2) + ">"
                }
            }
            class JPoint extends Point {
                constructor(e, t, r, i) {
                    c(e instanceof ShortCurve), super(e, d), this.x = this.curve.one, this.y = this.curve.one, this.z = this.curve.zero, this.zOne = 0, null != t && this._init(t, r, i)
                }
                _init(e, t, r) {
                    c(e instanceof n), c(t instanceof n), c(null == r || r instanceof n), this.x = e, this.y = t, this.z = r || this.curve.one, this.x.red || (this.x = this.x.toRed(this.curve.red)), this.y.red || (this.y = this.y.toRed(this.curve.red)), this.z.red || (this.z = this.z.toRed(this.curve.red)), this.zOne = 0 | this.z.eq(this.curve.one)
                }
                clone() {
                    return this.curve.jpoint(this.x.clone(), this.y.clone(), this.z.clone())
                }
                swap(e, t) {
                    c(e instanceof JPoint);
                    const r = 1 & (t >> 31 | -t >> 31),
                        i = this.zOne,
                        n = e.zOne;
                    return this.x.cswap(e.x, t), this.y.cswap(e.y, t), this.z.cswap(e.z, t), this.zOne = i & (1 ^ r) | n & r, e.zOne = n & (1 ^ r) | i & r, this
                }
                validate() {
                    const {
                        a: e,
                        b: t
                    } = this.curve;
                    if (this.isInfinity()) return !0;
                    if (this.zOne) return this.curve.validate(this.toP());
                    const r = this.y.redSqr(),
                        i = this.x.redSqr().redMul(this.x),
                        n = this.z.redSqr(),
                        s = n.redSqr(),
                        d = s.redMul(n),
                        f = i.redIAdd(t.redMul(d));
                    return this.curve.zeroA || (this.curve.threeA ? f.redIAdd(s.redIMuln(-3).redMul(this.x)) : f.redIAdd(e.redMul(s).redMul(this.x))), 0 === r.cmp(f)
                }
                normalize() {
                    if (this.zOne) return this;
                    if (this.isInfinity()) return this;
                    const e = this.z.redInvert(),
                        t = e.redSqr();
                    return this.x = this.x.redMul(t), this.y = this.y.redMul(t).redMul(e), this.z = this.curve.one, this.zOne = 1, this
                }
                scale(e) {
                    if (c(e instanceof n), this.isInfinity()) return this.curve.jpoint();
                    const t = e.redSqr(),
                        r = this.x.redMul(t),
                        i = this.y.redMul(t).redMul(e),
                        s = this.z.redMul(e);
                    return this.curve.jpoint(r, i, s)
                }
                neg() {
                    return this.curve.jpoint(this.x, this.y.redNeg(), this.z)
                }
                add(e) {
                    return c(e instanceof Point), e.type === s ? this._mixedAdd(e) : this._add(e)
                }
                _add(e) {
                    return c(e instanceof JPoint), this.isInfinity() ? e : e.isInfinity() ? this : this.zOne && e.zOne ? this._addAA(e) : this.zOne ? e._addJA(this) : e.zOne ? this._addJA(e) : this._addJJ(e)
                }
                _mixedAdd(e) {
                    return c(e instanceof ShortPoint), this.isInfinity() ? e.toJ() : e.isInfinity() ? this : this.zOne ? this._addAA(e) : this._addJA(e)
                }
                _addJJ(e) {
                    const t = this.z.redSqr(),
                        r = e.z.redSqr(),
                        i = this.x.redMul(r),
                        n = e.x.redMul(t),
                        s = this.y.redMul(e.z).redMul(r),
                        d = e.y.redMul(this.z).redMul(t),
                        f = n.redISub(i),
                        o = d.redISub(s);
                    if (0 === f.sign()) return 0 !== o.sign() ? this.curve.jpoint() : this.dbl();
                    const h = f.redSqr(),
                        u = f.redMul(h),
                        c = i.redMul(h),
                        l = o.redSqr().redISub(u).redISub(c).redISub(c),
                        a = o.redMul(c.redISub(l)).redISub(s.redMul(u)),
                        b = this.z.redMul(e.z).redMul(f);
                    return this.curve.jpoint(l, a, b)
                }
                _addJA(e) {
                    const t = this.z.redSqr(),
                        r = e.x.redMul(t),
                        i = e.y.redMul(this.z).redMul(t),
                        n = r.redISub(this.x),
                        s = i.redISub(this.y).redIMuln(2);
                    if (0 === n.sign()) return 0 !== s.sign() ? this.curve.jpoint() : this.dbl();
                    const d = n.redMuln(2).redSqr(),
                        f = n.redMul(d),
                        o = this.x.redMul(d),
                        h = s.redSqr().redISub(f).redISub(o).redISub(o),
                        u = s.redMul(o.redISub(h)).redISub(this.y.redMul(f).redIMuln(2)),
                        c = this.z.redMul(n).redIMuln(2);
                    return this.curve.jpoint(h, u, c)
                }
                _addAA(e) {
                    const t = e.x.redSub(this.x),
                        r = e.y.redSub(this.y).redIMuln(2);
                    if (0 === t.sign()) return 0 !== r.sign() ? this.curve.jpoint() : this.dbl();
                    const i = t.redSqr().redIMuln(4),
                        n = t.redMul(i),
                        s = this.x.redMul(i),
                        d = r.redSqr().redISub(n).redISub(s).redISub(s),
                        f = r.redMul(s.redISub(d)).redISub(this.y.redMul(n).redIMuln(2)),
                        o = t.redIMuln(2);
                    return this.curve.jpoint(d, f, o)
                }
                dbl() {
                    return this.isInfinity() ? this : 0 === this.y.sign() ? this.curve.jpoint() : this.zOne ? this._dblA() : this.curve.zeroA ? this._dbl0() : this.curve.threeA ? this._dbl3() : this._dblJ()
                }
                _dblJ() {
                    const e = this.x.redSqr(),
                        t = this.y.redSqr(),
                        r = this.z.redSqr(),
                        i = this.x.redMul(t).redIMuln(4),
                        n = e.redIMuln(3).redIAdd(this.curve.a.redMul(r.redSqr())),
                        s = n.redSqr().redISub(i).redISub(i),
                        d = s,
                        f = n.redMul(i.redISub(s)).redISub(t.redSqr().redIMuln(8)),
                        o = this.y.redMul(this.z).redIMuln(2);
                    return this.curve.jpoint(d, f, o)
                }
                _dblA() {
                    const e = this.x.redSqr(),
                        t = this.y.redSqr(),
                        r = t.redSqr(),
                        i = t.redIAdd(this.x).redSqr().redISub(e).redISub(r).redIMuln(2),
                        n = e.redIMuln(3).redIAdd(this.curve.a),
                        s = n.redSqr().redISub(i).redISub(i),
                        d = s,
                        f = n.redMul(i.redISub(s)).redISub(r.redIMuln(8)),
                        o = this.y.redMuln(2);
                    return this.curve.jpoint(d, f, o)
                }
                _dbl0() {
                    const e = this.x.redSqr(),
                        t = this.y.redSqr(),
                        r = t.redSqr(),
                        i = t.redIAdd(this.x).redSqr().redISub(e).redISub(r).redIMuln(2),
                        n = e.redIMuln(3),
                        s = n.redSqr().redISub(i).redISub(i),
                        d = n.redMul(i.redISub(s)).redISub(r.redIMuln(8)),
                        f = this.y.redMul(this.z).redIMuln(2);
                    return this.curve.jpoint(s, d, f)
                }
                _dbl3() {
                    const e = this.z.redSqr(),
                        t = this.y.redSqr(),
                        r = this.x.redMul(t),
                        i = this.x.redSub(e),
                        n = this.x.redAdd(e),
                        s = i.redMul(n).redIMuln(3),
                        d = r.redIMuln(4),
                        f = d.redMuln(2),
                        o = t.redSqr().redIMuln(8),
                        h = s.redSqr().redISub(f),
                        u = this.y.redAdd(this.z).redSqr().redISub(t).redISub(e),
                        c = s.redMul(d.redISub(h)).redISub(o);
                    return this.curve.jpoint(h, c, u)
                }
                dblp(e) {
                    return c(e >>> 0 === e), this.curve.zeroA || this.curve.threeA ? super.dblp(e) : 0 === e || this.isInfinity() ? this : this._dblp(e)
                }
                _dblp(e) {
                    const {
                        a: t,
                        i2: r
                    } = this.curve;
                    let i = this.x,
                        n = this.z,
                        s = this.y.redMuln(2),
                        d = n.redPown(4);
                    for (let r = 0; r < e; r++) {
                        if (0 === s.sign()) return this.curve.jpoint();
                        const f = i.redSqr(),
                            o = s.redSqr(),
                            h = o.redSqr(),
                            u = f.redIMuln(3).redIAdd(t.redMul(d)),
                            c = i.redMul(o),
                            l = u.redSqr().redISub(c).redISub(c),
                            a = l,
                            b = u.redMul(c.redISub(l)).redIMuln(2).redISub(h),
                            p = s.redMul(n);
                        r + 1 < e && (d = d.redMul(h)), i = a, s = b, n = p
                    }
                    return this.curve.jpoint(i, s.redMul(r), n)
                }
                trpl() {
                    return this.isInfinity() || 0 === this.y.sign() ? this : this._trpl()
                }
                _trpl() {
                    const e = this.x.redSqr(),
                        t = this.y.redSqr(),
                        r = this.z.redSqr(),
                        i = t.redSqr(),
                        n = e.redMuln(3);
                    if (!this.curve.zeroA) {
                        const e = r.redSqr();
                        this.curve.threeA ? n.redIAdd(e.redIMuln(-3)) : n.redIAdd(this.curve.a.redMul(e))
                    }
                    const s = n.redSqr(),
                        d = this.x.redAdd(t).redSqr().redISub(e).redISub(i).redIMuln(6).redISub(s),
                        f = d.redSqr(),
                        o = i.redIMuln(16),
                        h = n.redIAdd(d).redSqr().redISub(s).redISub(f).redISub(o),
                        u = t.redMul(h).redIMuln(4),
                        c = h.redMul(o.redISub(h)),
                        l = d.redMul(f),
                        a = this.x.redMul(f).redISub(u).redIMuln(4),
                        b = this.y.redMul(c.redISub(l)).redIMuln(8),
                        p = d.redIAdd(this.z).redSqr().redISub(r).redISub(f);
                    return this.curve.jpoint(a, b, p)
                }
                uadd(e) {
                    return c(e instanceof Point), e.type === s ? this._uadd(e.toJ()) : this._uadd(e)
                }
                _uadd(e) {
                    c(e instanceof JPoint);
                    const {
                        zero: t,
                        one: r
                    } = this.curve, i = this.z.redSqr(), n = e.z.redSqr(), s = this.x.redMul(n), d = e.x.redMul(i), f = this.y.redMul(n).redMul(e.z), o = e.y.redMul(i).redMul(this.z), h = this.z.redMul(e.z), u = s.redAdd(d), l = f.redAdd(o), a = u.redSqr().redISub(s.redMul(d));
                    if (!this.curve.zeroA) {
                        const e = h.redPown(4);
                        this.curve.threeA ? a.redIAdd(e.redIMuln(-3)) : a.redIAdd(this.curve.a.redMul(e))
                    }
                    const b = l.czero() & a.czero();
                    l.cinject(s.redSub(d), b), a.cinject(f.redSub(o), b);
                    const p = l.redSqr(),
                        m = u.redMul(p),
                        S = p.redSqr();
                    S.cinject(t, b);
                    const M = a.redSqr(),
                        v = h.redMul(l),
                        I = m.redMuln(3).redISub(M.redMuln(2)),
                        w = M.redISub(m).redIMuln(4),
                        z = a.redMul(I).redISub(S).redIMuln(4),
                        y = v.redIMuln(2),
                        x = this.z.czero(),
                        g = e.z.czero(),
                        A = v.czero() & (1 ^ x) & (1 ^ g);
                    return w.cinject(this.x, g), z.cinject(this.y, g), y.cinject(this.z, g), w.cinject(e.x, x), z.cinject(e.y, x), y.cinject(e.z, x), w.cinject(r, A), z.cinject(r, A), y.cinject(t, A), c(x & g ^ 1 | y.czero()), this.curve.jpoint(w, z, y)
                }
                udbl() {
                    const e = this._udbl(),
                        t = this.y.czero() | this.z.czero();
                    return e.x.cinject(this.curve.one, t), e.y.cinject(this.curve.one, t), e.z.cinject(this.curve.zero, t), e
                }
                _udbl() {
                    return this.curve.zeroA ? this._dbl0() : this.curve.threeA ? this._dbl3() : this._dblJ()
                }
                zaddu(e) {
                    c(e instanceof JPoint);
                    const t = this.x.redSub(e.x),
                        r = this.y.redSub(e.y),
                        i = t.redSqr(),
                        n = this.x.redMul(i),
                        s = e.x.redMul(i),
                        d = n,
                        f = r.redSqr().redISub(n).redISub(s),
                        o = this.y.redMul(n.redSub(s)),
                        h = r.redMul(d.redSub(f)).redISub(o),
                        u = this.z.redMul(t),
                        l = u;
                    return [this.curve.jpoint(f, h, l), this.curve.jpoint(d, o, u)]
                }
                zaddc(e) {
                    c(e instanceof JPoint);
                    const t = this.x.redSub(e.x),
                        r = this.y.redSub(e.y),
                        i = this.y.redAdd(e.y),
                        n = t.redSqr(),
                        s = this.x.redMul(n),
                        d = e.x.redMul(n),
                        f = i.redSqr().redISub(s).redISub(d),
                        o = r.redSqr().redISub(s).redISub(d),
                        h = this.y.redMul(d.redISub(s)),
                        u = e.y.redMuln(2).redIAdd(r),
                        l = s.redISub(f),
                        a = f.redAdd(l).redISub(o),
                        b = u.redMul(l).redIAdd(h),
                        p = r.redMul(a).redIAdd(h),
                        m = this.z.redMul(t),
                        S = m;
                    return [this.curve.jpoint(o, p, S), this.curve.jpoint(f, b, m)]
                }
                zdblu() {
                    const e = this.x.redSqr(),
                        t = this.y.redSqr(),
                        r = t.redSqr(),
                        i = this.x.redAdd(t).redSqr(),
                        n = e.redMuln(3);
                    if (!this.curve.zeroA) {
                        const e = this.z.redPown(4);
                        this.curve.threeA ? n.redIAdd(e.redIMuln(-3)) : n.redIAdd(this.curve.a.redMul(e))
                    }
                    const s = i.redISub(e).redISub(r).redIMuln(2),
                        d = n.redSqr().redISub(s).redISub(s),
                        f = r.redIMuln(8),
                        o = s.redSub(d).redMul(n).redISub(f),
                        h = this.y.redMul(this.z).redIMuln(2),
                        u = h;
                    return [this.curve.jpoint(d, o, u), this.curve.jpoint(s, f, h)]
                }
                ztrplu() {
                    const [e, t] = this.zdblu();
                    return t.zaddu(e)
                }
                recover(e, t) {
                    return c(e instanceof n), c(t instanceof n), this.isInfinity() || 0 === this.y.sign() ? this.curve.jpoint() : this.zOne ? this._recoverA(e, t) : this._recoverJ(e, t)
                }
                _recoverJ(e, t) {
                    const r = this.z.redSqr(),
                        i = r.redMul(this.z),
                        n = i.redMul(this.z),
                        s = e.redMul(r),
                        d = t.redMul(r),
                        f = this.curve.b.redMul(n).redMul(r).redIMuln(2),
                        o = this.x.redMul(s);
                    this.curve.zeroA || (this.curve.threeA ? o.redIAdd(n.redIMuln(-3)) : o.redIAdd(this.curve.a.redMul(n)));
                    const h = this.x.redAdd(s),
                        u = f.redIAdd(o.redMul(h)),
                        c = d.redMul(this.x.redSub(s).redSqr()),
                        l = u.redISub(c),
                        a = this.y.redMul(i).redIMuln(2),
                        b = a.redSqr(),
                        p = e.redMul(b),
                        m = l.redMul(b),
                        S = a;
                    return this.curve.jpoint(p, m, S)
                }
                _recoverA(e, t) {
                    const r = this.curve.b.redMuln(2),
                        i = this.x.redMul(e).redIAdd(this.curve.a),
                        n = this.x.redAdd(e),
                        s = r.redIAdd(i.redMul(n)),
                        d = t.redMul(this.x.redSub(e).redSqr()),
                        f = s.redISub(d),
                        o = this.y.redMuln(2),
                        h = o.redSqr(),
                        u = e.redMul(h),
                        c = f.redMul(h),
                        l = o;
                    return this.curve.jpoint(u, c, l)
                }
                getX() {
                    if (this.isInfinity()) throw new Error("Invalid point.");
                    return this.normalize(), this.x.fromRed()
                }
                getY() {
                    if (this.isInfinity()) throw new Error("Invalid point.");
                    return this.normalize(), this.y.fromRed()
                }
                eq(e) {
                    if (c(e instanceof JPoint), this === e) return !0;
                    if (this.isInfinity()) return e.isInfinity();
                    if (e.isInfinity()) return !1;
                    if (0 === this.z.cmp(e.z)) return 0 === this.x.cmp(e.x) && 0 === this.y.cmp(e.y);
                    const t = this.z.redSqr(),
                        r = e.z.redSqr(),
                        i = this.x.redMul(r),
                        n = e.x.redMul(t);
                    if (0 !== i.cmp(n)) return !1;
                    const s = t.redMul(this.z),
                        d = r.redMul(e.z),
                        f = this.y.redMul(d),
                        o = e.y.redMul(s);
                    return 0 === f.cmp(o)
                }
                isInfinity() {
                    return 0 === this.z.sign()
                }
                hasQuadY() {
                    return 1 === this.y.redMul(this.z).redJacobi()
                }
                eqX(e) {
                    if (c(e instanceof n), this.isInfinity()) return !1;
                    const t = this.z.redSqr(),
                        r = e.toRed(this.curve.red).redMul(t);
                    return 0 === this.x.cmp(r)
                }
                eqXToP(e) {
                    if (c(e instanceof n), c(this.curve.maxwellTrick), this.isInfinity()) return !1;
                    const t = this.z.redSqr(),
                        r = e.toRed(this.curve.red).redMul(t);
                    if (0 === this.x.cmp(r)) return !0;
                    const i = e.clone(),
                        s = this.curve.redN.redMul(t);
                    for (;;) {
                        if (i.iadd(this.curve.n), i.cmp(this.curve.p) >= 0) return !1;
                        if (r.redIAdd(s), 0 === this.x.cmp(r)) break
                    }
                    return !0
                }
                toP() {
                    return this.isInfinity() ? this.curve.point() : (this.normalize(), this.curve.point(this.x, this.y))
                }
                toJ() {
                    return this
                }
                toR() {
                    return this.isInfinity() || this.hasQuadY() ? this : this.neg()
                }
                encode(e) {
                    return this.toP().encode(e)
                }
                static decode(e, t) {
                    return ShortPoint.decode(e, t).toJ()
                }
                encodeX() {
                    return this.toP().encodeX()
                }
                static decodeX(e, t) {
                    return ShortPoint.decodeX(e, t).toJ()
                }
                toJSON(e) {
                    return this.toP().toJSON(e)
                }
                static fromJSON(e, t) {
                    return ShortPoint.fromJSON(e, t).toJ()
                } [i]() {
                    return this.isInfinity() ? "<JPoint: Infinity>" : "<JPoint: x=" + this.x.fromRed().toString(16, 2) + " y=" + this.y.fromRed().toString(16, 2) + " z=" + this.z.fromRed().toString(16, 2) + ">"
                }
            }
            class MontCurve extends Curve {
                constructor(e) {
                    super("mont", e), this.a = n.fromJSON(e.a).toRed(this.red), this.b = n.fromJSON(e.b).toRed(this.red), this.bi = this.b.redInvert(), this.i4 = new n(4).toRed(this.red).redInvert(), this.a2 = this.a.redAdd(this.two), this.a24 = this.a2.redMul(this.i4), this.ladder = 0 === this.a2.cmp(this.a24.redMuln(4)), this._finalize(e)
                }
                _edwardsD() {
                    const e = this.one.redNeg(),
                        t = this.a.redAdd(this.two).redMul(e.redInvert());
                    return this.a.redSub(this.two).redMul(t.redInvert())
                }
                _elligator2(e) {
                    const t = this.a.redNeg(),
                        r = this.one.redAdd(this.z.redMul(e.redSqr()));
                    r.cinject(this.one, r.czero());
                    const i = t.redMul(r.redFermat()),
                        n = i.redNeg().redISub(this.a),
                        s = [i, n][this.solveY2(i).redLegendre() >>> 31];
                    return [this.point(s), e.redIsOdd()]
                }
                _invert2(e, t) {
                    const r = this.p.ushrn(1),
                        i = e.normalize().x,
                        s = e.getY(t),
                        d = i.clone(),
                        f = i.redAdd(this.a),
                        o = function(e, t, r) {
                            c(e instanceof n), c(t instanceof n);
                            const i = e.encode("le", r),
                                s = t.encode("le", r);
                            let d = -1,
                                f = 0;
                            for (let e = i.length - 1; e >= 0; e--) {
                                const t = i[e],
                                    r = s[e];
                                f = ~d & f | d & t - r >> 31, d &= (t ^ r) - 1 >> 31
                            }
                            return ~d & f & 1
                        }(s, r, this.fieldSize);
                    d.cswap(f, 1 ^ o);
                    const h = d.redINeg(),
                        u = f.redMul(this.z),
                        l = this._isqrt(h, u);
                    return l.cinject(l.redNeg(), l.redIsOdd() ^ t), l
                }
                precompute(e) {
                    return this
                }
                point(e, t) {
                    return new MontPoint(this, e, t)
                }
                jpoint(e, t, r) {
                    return c(null == e && null == t && null == r), this.point()
                }
                solveY2(e) {
                    c(e instanceof n);
                    const t = e.redSqr();
                    return t.redMul(e).redIAdd(this.a.redMul(t)).redIAdd(e).redMul(this.bi)
                }
                validate(e) {
                    if (c(e instanceof MontPoint), e.isInfinity()) return !0;
                    const t = e.normalize().x;
                    return -1 !== this.solveY2(t).redJacobi()
                }
                pointFromX(e, t) {
                    return c(e instanceof n), c(null == t || "boolean" == typeof t), e.red || (e = e.toRed(this.red)), this.point(e, this.one)
                }
                pointFromShort(e) {
                    if (c(e instanceof Point), c(e.curve instanceof ShortCurve), c(e.curve.p.eq(this.p)), e.normalize(), e.isInfinity()) return this.point();
                    const t = this.a.redMul(this.three.redInvert()),
                        r = e.x.fromRed().toRed(this.red).redISub(t);
                    return this.point(r)
                }
                pointFromMont(e, t) {
                    return c(e instanceof MontPoint), c(null == t || "boolean" == typeof t), c(e.curve === this), e
                }
                pointFromEdwards(e) {
                    if (c(e instanceof EdwardsPoint), c(e.curve.p.eq(this.p)), e.isInfinity()) return this.point();
                    let t, r;
                    if (e.curve.twisted) {
                        if (e.y.eq(e.z)) return this.point();
                        if (e.x.isZero()) return this.point(this.curve.zero);
                        t = e.z.redAdd(e.y), r = e.z.redSub(e.y)
                    } else if (e.curve.iso4) t = e.y.redSqr(), r = e.x.redSqr();
                    else {
                        if (e.y.eq(e.z)) return this.point();
                        if (e.x.isZero()) return this.point(this.curve.zero);
                        t = e.y.redNeg().redISub(e.z), r = e.y.redNeg().redIAdd(e.z)
                    }
                    return this.point(t.fromRed(), r.fromRed())
                }
                pointFromUniform(e) {
                    if (c(e instanceof n), this.z.isZero() || this.a.isZero()) throw new Error("Not implemented.");
                    if (0 !== this.b.cmp(this.one)) throw new Error("Not implemented.");
                    return this._elligator2(e)
                }
                pointToUniform(e, t) {
                    if (c(e instanceof MontPoint), c("boolean" == typeof t), this.z.isZero() || this.a.isZero()) throw new Error("Not implemented.");
                    if (0 !== this.b.cmp(this.one)) throw new Error("Not implemented.");
                    return this._invert2(e, t)
                }
                pointFromHash(e, t) {
                    c(e instanceof EdwardsCurve);
                    const r = e.pointFromHash(this, t);
                    return this.pointFromEdwards(r)
                }
                randomPoint(e) {
                    for (;;) {
                        const t = this.randomField(e),
                            r = this.point(t, this.one);
                        if (r.validate()) return r
                    }
                }
                jmulAll(e, t) {
                    throw new Error("Not implemented.")
                }
                jmulAllSimple(e, t) {
                    throw new Error("Not implemented.")
                }
                decodePoint(e) {
                    return MontPoint.decode(this, e)
                }
                pointFromJSON(e) {
                    return MontPoint.fromJSON(this, e)
                }
                toJSON(e) {
                    const t = super.toJSON(e);
                    return t.a = this.a.fromRed().toJSON(), t.b = this.b.fromRed().toJSON(), t
                }
            }
            class MontPoint extends Point {
                constructor(e, t, r) {
                    c(e instanceof MontCurve), super(e, f), this.x = this.curve.one, this.z = this.curve.zero, null != t && this._init(t, r)
                }
                _init(e, t) {
                    c(e instanceof n), c(null == t || t instanceof n), this.x = e, this.z = t || this.curve.one, this.x.red || (this.x = this.x.toRed(this.curve.red)), this.z.red || (this.z = this.z.toRed(this.curve.red))
                }
                clone() {
                    return this.curve.point(this.x.clone(), this.z.clone())
                }
                swap(e, t) {
                    return c(e instanceof MontPoint), this.x.cswap(e.x, t), this.z.cswap(e.z, t), this
                }
                precompute(e, t) {
                    return this
                }
                normalize() {
                    return this.isInfinity() || 0 === this.z.cmp(this.curve.one) || (this.x = this.x.redMul(this.z.redInvert()), this.z = this.curve.one), this
                }
                scale(e) {
                    if (c(e instanceof n), this.isInfinity()) return this.curve.point();
                    const t = this.x.redMul(e),
                        r = this.z.redMul(e);
                    return this.curve.point(t, r)
                }
                neg() {
                    return this
                }
                dbl() {
                    const e = this.x.redAdd(this.z).redSqr(),
                        t = this.x.redSub(this.z).redSqr(),
                        r = e.redSub(t),
                        i = e.redMul(t),
                        n = r.redMul(t.redIAdd(this.curve.a24.redMul(r)));
                    return this.curve.point(i, n)
                }
                diffAdd(e, t) {
                    c(e instanceof MontPoint), c(t instanceof MontPoint);
                    const r = e.x.redAdd(e.z),
                        i = e.x.redSub(e.z),
                        n = t.x.redAdd(t.z),
                        s = t.x.redSub(t.z).redMul(r),
                        d = n.redMul(i),
                        f = this.z.redMul(s.redAdd(d).redSqr()),
                        o = this.x.redMul(s.redISub(d).redSqr());
                    return this.curve.point(f, o)
                }
                diffAddDbl(e, t) {
                    if (c(e instanceof MontPoint), c(t instanceof MontPoint), !this.curve.ladder) return [this.diffAdd(e, t), t.dbl()];
                    const r = t.x.redAdd(t.z),
                        i = r.redSqr(),
                        n = t.x.redSub(t.z),
                        s = n.redSqr(),
                        d = i.redSub(s),
                        f = e.x.redAdd(e.z),
                        o = e.x.redSub(e.z).redMul(r),
                        h = f.redMul(n),
                        u = this.z.redMul(o.redAdd(h).redSqr()),
                        l = this.x.redMul(o.redISub(h).redSqr()),
                        a = i.redMul(s),
                        b = d.redMul(s.redIAdd(this.curve.a24.redMul(d)));
                    return [this.curve.point(u, l), this.curve.point(a, b)]
                }
                diffTrpl(e) {
                    c(e instanceof MontPoint);
                    const t = e.x.redSqr(),
                        r = e.z.redSqr(),
                        i = t.redSub(r).redSqr(),
                        n = this.curve.a.redMul(e.x.redMul(e.z)),
                        s = r.redMuln(4),
                        d = t.redMuln(4),
                        f = t.redIAdd(r).redIAdd(n),
                        o = f.redMul(s),
                        h = f.redMul(d),
                        u = i.redSub(o).redSqr(),
                        l = i.redISub(h).redSqr(),
                        a = this.x.redMul(u),
                        b = this.z.redMul(l);
                    return this.curve.point(a, b)
                }
                recover(e, t, r) {
                    if (c(e instanceof MontPoint), c(t instanceof MontPoint), c("boolean" == typeof r), this.isInfinity()) throw new Error("Invalid point.");
                    const i = this.curve.a.redMuln(2),
                        n = this.curve.b.redMuln(2),
                        s = this.normalize().x,
                        d = this.getY(r).toRed(this.curve.red),
                        f = e.x,
                        o = e.z,
                        h = t.x,
                        u = t.z,
                        l = s.redMul(o),
                        a = f.redAdd(l),
                        b = f.redSub(l).redSqr().redMul(h),
                        p = i.redMul(o),
                        m = a.redIAdd(p),
                        S = s.redMul(f).redIAdd(o),
                        M = m.redMul(S),
                        v = p.redMul(o),
                        I = M.redISub(v).redMul(u),
                        w = n.redMul(d).redMul(o).redMul(u),
                        z = w.redMul(f),
                        y = I.redISub(b),
                        x = w.redMul(o);
                    if (0 === x.sign()) throw new Error("Invalid point.");
                    const g = x.redInvert(),
                        A = z.redMul(g),
                        N = y.redMul(g);
                    if (!A.redMul(e.z).eq(e.x)) throw new Error("Invalid point.");
                    return [A, N]
                }
                getX() {
                    if (this.isInfinity()) throw new Error("Invalid point.");
                    return this.normalize(), this.x.fromRed()
                }
                getY(e) {
                    if (c("boolean" == typeof e), this.isInfinity()) throw new Error("Invalid point.");
                    const t = this.normalize().x,
                        r = this.curve.solveY2(t).redSqrt();
                    return r.redIsOdd() !== e && r.redINeg(), r.fromRed()
                }
                eq(e) {
                    if (c(e instanceof MontPoint), this === e) return !0;
                    if (this.isInfinity()) return e.isInfinity();
                    if (e.isInfinity()) return !1;
                    if (0 === this.z.cmp(e.z)) return 0 === this.x.cmp(e.x);
                    const t = this.x.redMul(e.z),
                        r = e.x.redMul(this.z);
                    return 0 === t.cmp(r)
                }
                isInfinity() {
                    return 0 === this.z.sign()
                }
                eqX(e) {
                    if (c(e instanceof n), this.isInfinity()) return !1;
                    const t = e.toRed(this.curve.red).redMul(this.z);
                    return 0 === this.x.cmp(t)
                }
                jmul(e) {
                    c(e instanceof n), c(!e.red);
                    const t = e.bitLength();
                    let r = this,
                        i = this.curve.point();
                    for (let n = t - 1; n >= 0; n--) {
                        0 === e.utestn(n) ? [r, i] = this.diffAddDbl(r, i) : [i, r] = this.diffAddDbl(i, r)
                    }
                    return i
                }
                jmulSimple(e) {
                    c(e instanceof n), c(!e.red);
                    const t = e.bitLength();
                    let r = this,
                        i = this.curve.point();
                    for (let n = t - 1; n >= 0; n--) {
                        0 === e.utestn(n) ? (r = this.diffAdd(r, i), i = i.dbl()) : (i = this.diffAdd(i, r), r = r.dbl())
                    }
                    return i
                }
                jmulBlind(e, t) {
                    return t ? this.randomize(t).jmul(e) : this.jmul(e)
                }
                jmulConst(e, t) {
                    c(e instanceof n), c(!e.red);
                    const r = Math.max(e.bitLength(), this.curve.p.bitLength()),
                        i = r + 7 >>> 3,
                        s = e.toArray("le", i),
                        d = t ? this.randomize(t) : this;
                    let f = d.clone(),
                        o = this.curve.point().clone(),
                        h = 0;
                    for (let e = r - 1; e >= 0; e--) {
                        const t = s[e >> 3] >> (7 & e) & 1;
                        f.swap(o, h ^ t), [f, o] = d.diffAddDbl(f, o), h = t
                    }
                    return f.swap(o, h), o
                }
                jmulAdd(e, t, r) {
                    throw new Error("Not implemented.")
                }
                jmulAddSimple(e, t, r) {
                    throw new Error("Not implemented.")
                }
                toP() {
                    return this.normalize()
                }
                toJ() {
                    return this
                }
                encode() {
                    return this.curve.encodeField(this.getX())
                }
                static decode(e, t) {
                    c(e instanceof MontCurve);
                    const r = e.decodeField(t);
                    r.iumaskn(e.fieldBits);
                    const i = e.point(r, e.one);
                    return c(!i.isInfinity()), i
                }
                toJSON(e) {
                    return this.isInfinity() ? [] : [this.getX().toJSON()]
                }
                static fromJSON(e, t) {
                    if (c(e instanceof MontCurve), c(Array.isArray(t)), c(0 === t.length || 1 === t.length || 2 === t.length), 0 === t.length) return e.point();
                    const r = n.fromJSON(t[0]),
                        i = e.point(r, e.one);
                    if (t.length > 1) {
                        const e = n.fromJSON(t[1]),
                            r = i.getY(e.isOdd());
                        if (0 !== e.cmp(r)) throw new Error("Invalid point.")
                    }
                    return i
                } [i]() {
                    return this.isInfinity() ? "<MontPoint: Infinity>" : "<MontPoint: x=" + this.x.fromRed().toString(16, 2) + " z=" + this.z.fromRed().toString(16, 2) + ">"
                }
            }
            class EdwardsCurve extends Curve {
                constructor(e) {
                    super("edwards", e), this.a = n.fromJSON(e.a).toRed(this.red), this.c = n.fromJSON(e.c).toRed(this.red), this.d = n.fromJSON(e.d).toRed(this.red), this.s = n.fromJSON(e.s || "0").toRed(this.red), this.c2 = this.c.redMuln(2), this.cc = this.c.redSqr(), this.cc2 = this.cc.redMuln(2), this.ccd = this.cc.redMul(this.d), this.k = this.d.redMuln(2), this.smi = -this.d.redNeg().andln(-1), this.twisted = 0 !== this.a.cmp(this.one), this.extended = 0 === this.a.cmp(this.one.redNeg()), this.oneA = 0 === this.a.cmp(this.one), this.mOneA = 0 === this.a.cmp(this.one.redNeg()), this.oneC = 0 === this.c.cmp(this.one), this.smallD = null != this.prime && this.d.redNeg().bitLength() <= 26, c(!this.twisted || 0 === this.c.cmp(this.one)), this._finalize(e)
                }
                _montA() {
                    c(this.twisted);
                    const e = this.a.redAdd(this.d),
                        t = this.a.redSub(this.d);
                    return e.redMul(t.redInvert()).redIMuln(2)
                }
                _mulA(e) {
                    return c(e instanceof n), this.oneA ? e.clone() : this.mOneA ? e.redNeg() : this.a.redMul(e)
                }
                _mulC(e) {
                    return c(e instanceof n), this.oneC ? e : this.c.redMul(e)
                }
                _mulCC(e) {
                    return c(e instanceof n), this.oneC ? e : this.cc.redMul(e)
                }
                _mulD(e) {
                    return c(e instanceof n), this.smallD ? e.redMuln(this.smi) : this.d.redMul(e)
                }
                _mulCCD(e) {
                    return this.oneC ? this._mulD(e) : this.ccd.redMul(e)
                }
                _elligator1(e) {
                    c(e instanceof n), c(3 === this.p.andln(3)), c(!this.s.isZero());
                    const {
                        one: t,
                        two: r,
                        s: i
                    } = this, s = i.redSqr(), d = this.two.redMul(s.redInvert()), f = d.redAdd(d.redInvert()), o = d.redSqr(), h = f.redSqr(), u = this.p.subn(2), l = this.p.subn(1).iushrn(1), a = this.p.addn(1).iushrn(2), b = t.redSub(e), p = t.redAdd(e), m = b.redMul(p.redPow(u)), S = m.redSqr(), M = S.redMul(m), v = M.redMul(S).redAdd(h.redSub(r).redMul(M)).redIAdd(m), I = v.redPow(l), w = S.redAdd(o.redPow(u)).redPow(l), z = I.redMul(m), y = I.redMul(v).redPow(a).redMul(I).redMul(w), x = t.redAdd(z), g = x.redSqr(), A = d.redSub(t).redMul(i).redMul(z).redMul(x).redMul(y.redPow(u)), N = f.redMul(z), q = N.redSub(g).redMul(N.redAdd(g).redPow(u));
                    return this.point(A, q)
                }
                _invert1(e) {
                    c(e instanceof EdwardsPoint), c(3 === this.p.andln(3)), c(!this.s.isZero());
                    const {
                        one: t,
                        two: r,
                        s: i
                    } = this, n = i.redSqr(), s = this.two.redMul(n.redInvert()), d = s.redAdd(s.redInvert()), f = s.redSqr(), o = this.p.subn(2), h = this.p.subn(1).iushrn(1), u = this.p.addn(1).iushrn(2), {
                        x: l,
                        y: a
                    } = e.normalize().clone(), b = a.redSub(t).redMul(a.redAdd(t).redIMuln(2).redPow(o)), p = i.redMul(s.redSub(t)).redIMuln(2), m = s.redPow(h), S = p.redMul(m).redMul(d.redPow(o)), M = b.redMul(d);
                    l.cinject(S, M.ceq(r.redNeg()));
                    const v = t.redAdd(M),
                        I = v.redSqr().redISub(t),
                        w = v.redNeg(),
                        z = I.redPow(u),
                        y = w.redAdd(z),
                        x = s.redSub(t),
                        g = t.redAdd(y),
                        A = y.redSqr().redIAdd(f.redPow(o)),
                        N = x.redMul(i).redMul(y).redMul(g).redMul(l).redMul(A).redPow(h).redMul(y),
                        q = t.redSub(N).redMul(t.redAdd(N).redPow(o));
                    if (!z.redSqr().ceq(I)) throw new Error("X is not a square mod P.");
                    return q
                }
                point(e, t, r, i) {
                    return new EdwardsPoint(this, e, t, r, i)
                }
                jpoint(e, t, r) {
                    return c(null == e && null == t && null == r), this.point()
                }
                solveX2(e) {
                    c(e instanceof n);
                    const t = e.redSqr(),
                        r = this._mulCCD(t).redISub(this.a);
                    return t.redISub(this.cc).redMul(r.redInvert())
                }
                solveX(e) {
                    const t = e.redSqr(),
                        r = this._mulCCD(t).redISub(this.a),
                        i = t.redISub(this.cc);
                    return this._isqrt(i, r)
                }
                solveY2(e) {
                    c(e instanceof n);
                    const t = e.redSqr(),
                        r = this.cc.redSub(this._mulA(t)),
                        i = this.one.redSub(this._mulCCD(t));
                    return r.redMul(i.redInvert())
                }
                solveY(e) {
                    const t = e.redSqr(),
                        r = this.cc.redSub(this._mulA(t)),
                        i = this.one.redSub(this._mulCCD(t));
                    return this._isqrt(r, i)
                }
                validate(e) {
                    if (c(e instanceof EdwardsPoint), e.isInfinity()) return !0;
                    if (this.extended) {
                        const t = e.zOne ? e.t : e.t.redMul(e.z),
                            r = e.x.redMul(e.y);
                        if (0 !== t.cmp(r)) return !1
                    }
                    if (e.zOne) {
                        const t = e.x.redSqr(),
                            r = e.y.redSqr(),
                            i = this._mulD(t).redMul(r),
                            n = this._mulA(t).redIAdd(r),
                            s = this._mulCC(this.one.redAdd(i));
                        return 0 === n.cmp(s)
                    }
                    const t = e.x.redSqr(),
                        r = e.y.redSqr(),
                        i = e.z.redSqr(),
                        n = i.redSqr(),
                        s = this._mulD(t).redMul(r),
                        d = this._mulA(t).redIAdd(r).redMul(i),
                        f = this._mulCC(n.redIAdd(s));
                    return 0 === d.cmp(f)
                }
                pointFromX(e, t) {
                    c(e instanceof n), c("boolean" == typeof t), e.red || (e = e.toRed(this.red));
                    const r = this.solveY(e);
                    if (r.isZero() && t) throw new Error("Invalid point.");
                    return r.redIsOdd() !== t && r.redINeg(), this.point(e, r)
                }
                pointFromY(e, t) {
                    c(e instanceof n), c("boolean" == typeof t), e.red || (e = e.toRed(this.red));
                    const r = this.solveX(e);
                    if (r.isZero() && t) throw new Error("Invalid point.");
                    return r.redIsOdd() !== t && r.redINeg(), this.point(r, e)
                }
                pointFromShort(e) {
                    if (c(e instanceof Point), c(e.curve instanceof ShortCurve), c(e.curve.p.eq(this.p)), c(this.twisted), e.normalize(), e.isInfinity()) return this.point();
                    const t = e.x.fromRed().toRed(this.red),
                        r = e.y.fromRed().toRed(this.red),
                        i = this._montA(),
                        n = i.redAdd(this.two).redINeg().redSqrt(),
                        s = t.redMuln(3).redISub(i),
                        d = s.redSub(this.three),
                        f = s.redAdd(this.three),
                        o = n.redMul(s).redMul(r.redMuln(3).redInvert()),
                        h = d.redMul(f.redInvert());
                    return this.point(o, h)
                }
                pointFromMont(e, t) {
                    if (c(e instanceof MontPoint), c("boolean" == typeof t), c(e.curve.p.eq(this.p)), e.isInfinity()) {
                        if (t) throw new Error("Invalid point.");
                        return this.point()
                    }
                    let r;
                    if (this.twisted) {
                        if (e.x.eq(e.z.redNeg())) return this.point();
                        const t = e.x.redSub(e.z),
                            i = e.x.redAdd(e.z);
                        r = t.redMul(i.redInvert())
                    } else if (this.iso4) {
                        const t = e.divH().normalize(),
                            i = t.x,
                            n = t.curve.solveY(i),
                            s = i.redSqr(),
                            d = s.redMul(i),
                            f = d.redMul(s),
                            o = n.redSqr(),
                            h = d.redIMuln(2),
                            u = i.redMul(o).redIMuln(4),
                            c = s.redMul(o).redIMuln(2),
                            l = o.redIMuln(2),
                            a = f.redSub(h).redISub(u).redIAdd(i).redINeg(),
                            b = f.redISub(c).redISub(h).redISub(l).redIAdd(i);
                        r = a.redMul(b.redInvert())
                    } else {
                        if (e.x.eq(e.z)) return this.point();
                        const t = e.z.redAdd(e.x).redINeg(),
                            i = e.z.redSub(e.x);
                        r = t.redMul(i.redInvert())
                    }
                    return this.pointFromY(r.fromRed(), t)
                }
                pointFromEdwards(e) {
                    return c(e instanceof EdwardsPoint), c(e.curve === this), e
                }
                pointFromUniform(e, t) {
                    c(e instanceof MontCurve), c(t instanceof n), c(t.red === this.red);
                    const r = t.fromRed().toRed(e.red),
                        [i, s] = e.pointFromUniform(r);
                    return this.pointFromMont(i, s)
                }
                pointToUniform(e, t) {
                    c(e instanceof MontCurve);
                    const r = e.pointFromEdwards(t),
                        i = t.getX().isOdd();
                    return e.pointToUniform(r, i).fromRed().toRed(this.red)
                }
                pointFromHash(e, t) {
                    c(e instanceof MontCurve), c(Buffer.isBuffer(t));
                    const r = this.fieldBits + 7 >>> 3;
                    if (t.length !== 2 * r) throw new Error("Invalid hash size.");
                    const i = t.slice(0, r),
                        n = t.slice(r),
                        s = this.decodeUniform(i),
                        d = this.decodeUniform(n),
                        f = this.pointFromUniform(e, s),
                        o = this.pointFromUniform(e, d);
                    return f.add(o).mulH()
                }
                randomPoint(e) {
                    let t;
                    for (;;) {
                        const r = this.randomField(e),
                            i = n.random(e, 0, 2);
                        try {
                            t = this.pointFromY(r, i.isOdd())
                        } catch (e) {
                            continue
                        }
                        return t
                    }
                }
                decodePoint(e) {
                    return EdwardsPoint.decode(this, e)
                }
                pointFromJSON(e) {
                    return EdwardsPoint.fromJSON(this, e)
                }
                toJSON(e) {
                    const t = super.toJSON(e);
                    return t.a = this.a.fromRed().toJSON(), t.c = this.c.fromRed().toJSON(), t.d = this.d.fromRed().toJSON(), t.s = this.s.fromRed().toJSON(), t
                }
            }
            class EdwardsPoint extends Point {
                constructor(e, t, r, i, n) {
                    c(e instanceof EdwardsCurve), super(e, f), this.x = this.curve.zero, this.y = this.curve.c, this.z = this.curve.one, this.t = this.curve.extended ? this.curve.zero : null, this.zOne = 1, null != t && this._init(t, r, i, n)
                }
                _init(e, t, r, i) {
                    c(e instanceof n), c(t instanceof n), c(null == r || r instanceof n), c(null == i || i instanceof n), c(this.curve.extended || null == i), this.x = e, this.y = t, this.z = r || this.curve.one, this.t = i || null, this.x.red || (this.x = this.x.toRed(this.curve.red)), this.y.red || (this.y = this.y.toRed(this.curve.red)), this.z.red || (this.z = this.z.toRed(this.curve.red)), this.t && !this.t.red && (this.t = this.t.toRed(this.curve.red)), this.zOne = 0 | this.z.eq(this.curve.one), this.curve.extended && !this.t && (this.t = this.x.redMul(this.y), this.zOne || (this.t = this.t.redMul(this.z.redInvert())))
                }
                clone() {
                    const e = this.x.clone(),
                        t = this.y.clone(),
                        r = this.z.clone(),
                        i = this.t ? this.t.clone() : null;
                    return this.curve.point(e, t, r, i)
                }
                swap(e, t) {
                    c(e instanceof EdwardsPoint);
                    const r = 1 & (t >> 31 | -t >> 31),
                        i = this.zOne,
                        n = e.zOne;
                    return this.x.cswap(e.x, t), this.y.cswap(e.y, t), this.z.cswap(e.z, t), this.curve.extended && this.t.cswap(e.t, t), this.zOne = i & (1 ^ r) | n & r, e.zOne = n & (1 ^ r) | i & r, this
                }
                normalize() {
                    if (this.zOne) return this;
                    const e = this.z.redInvert();
                    return this.x = this.x.redMul(e), this.y = this.y.redMul(e), this.t && (this.t = this.t.redMul(e)), this.z = this.curve.one, this.zOne = 1, this
                }
                scale(e) {
                    c(e instanceof n);
                    const t = this.x.redMul(e),
                        r = this.y.redMul(e),
                        i = this.z.redMul(e),
                        s = this.t ? this.t.redMul(e) : null;
                    return this.curve.point(t, r, i, s)
                }
                neg() {
                    const e = this.x.redNeg(),
                        t = this.y,
                        r = this.z,
                        i = this.t ? this.t.redNeg() : null;
                    return this.curve.point(e, t, r, i)
                }
                add(e) {
                    return c(e instanceof EdwardsPoint), this.isInfinity() ? e : e.isInfinity() ? this : this.curve.extended ? this.zOne ? e._addExt(this, 0) : this._addExt(e, 0) : this.zOne ? e._addProj(this, 0) : this._addProj(e, 0)
                }
                _addExt(e, t) {
                    const r = e.zOne & (1 ^ t),
                        i = this.y.redSub(this.x).redMul(e.y.redSub(e.x)),
                        n = this.y.redAdd(this.x).redMul(e.y.redAdd(e.x)),
                        s = this.t.redMul(this.curve.k).redMul(e.t),
                        d = r ? this.z.redAdd(this.z) : this.z.redMul(e.z).redIMuln(2),
                        f = n.redSub(i),
                        o = d.redSub(s),
                        h = d.redIAdd(s),
                        u = n.redIAdd(i),
                        c = f.redMul(o),
                        l = h.redMul(u),
                        a = f.redMul(u),
                        b = o.redMul(h);
                    return this.curve.point(c, l, b, a)
                }
                _addProj(e, t) {
                    const r = e.zOne & (1 ^ t) ? this.z : this.z.redMul(e.z),
                        i = r.redSqr(),
                        n = this.x.redMul(e.x),
                        s = this.y.redMul(e.y),
                        d = this.curve._mulD(n).redMul(s),
                        f = i.redSub(d),
                        o = i.redIAdd(d),
                        h = this.x.redAdd(this.y).redMul(e.x.redAdd(e.y)).redISub(n).redISub(s).redMul(r).redMul(f);
                    let u, c;
                    return this.curve.twisted ? (u = r.redMul(o).redMul(s.redISub(this.curve._mulA(n))), c = f.redMul(o)) : (u = r.redMul(o).redMul(s.redISub(n)), c = this.curve._mulC(f).redMul(o)), this.curve.point(h, u, c)
                }
                dbl() {
                    return this.isInfinity() ? this : this.curve.extended ? this._dblExt(0) : this._dblProj(0)
                }
                _dblExt(e) {
                    const t = this.zOne & (1 ^ e),
                        r = this.x.redSqr(),
                        i = this.y.redSqr(),
                        n = t ? this.curve.two : this.z.redSqr().redIMuln(2),
                        s = this.curve._mulA(r),
                        d = this.x.redAdd(this.y).redSqr().redISub(r).redISub(i),
                        f = s.redAdd(i),
                        o = f.redSub(n),
                        h = s.redISub(i),
                        u = d.redMul(o),
                        c = f.redMul(h),
                        l = d.redMul(h),
                        a = o.redMul(f);
                    return this.curve.point(u, c, a, l)
                }
                _dblProj(e) {
                    const t = this.zOne & (1 ^ e),
                        r = this.x.redAdd(this.y).redSqr(),
                        i = this.x.redSqr(),
                        n = this.y.redSqr();
                    let s, d, f;
                    if (this.curve.twisted) {
                        const e = this.curve._mulA(i),
                            o = e.redAdd(n);
                        if (t) s = r.redSub(i).redISub(n).redMul(o.redSub(this.curve.two)), d = o.redMul(e.redISub(n)), f = o.redSqr().redISub(o).redISub(o);
                        else {
                            const t = this.z.redSqr(),
                                h = o.redSub(t).redISub(t);
                            s = r.redISub(i).redISub(n).redMul(h), d = o.redMul(e.redISub(n)), f = o.redMul(h)
                        }
                    } else {
                        const e = i.redAdd(n);
                        let o;
                        if (t) o = e.redSub(this.curve.cc2);
                        else {
                            const t = this.curve._mulC(this.z).redSqr();
                            o = e.redSub(t).redISub(t)
                        }
                        s = this.curve._mulC(r.redISub(e)).redMul(o), d = this.curve._mulC(e).redMul(i.redISub(n)), f = e.redMul(o)
                    }
                    return this.curve.point(s, d, f)
                }
                trpl() {
                    return this.isInfinity() ? this : this.curve.extended ? this._trplExt(0) : this._trplProj(0)
                }
                _trplExt(e) {
                    const t = this.zOne & (1 ^ e),
                        r = this.y.redSqr(),
                        i = this.curve._mulA(this.x.redSqr()),
                        n = r.redAdd(i);
                    let s;
                    s = t ? this.curve.two.redSub(n).redIMuln(2) : this.z.redSqr().redIMuln(2).redISub(n).redIMuln(2);
                    const d = i.redMul(s),
                        f = r.redMul(s),
                        o = n.redMul(r.redISub(i)),
                        h = o.redSub(f),
                        u = o.redAdd(d),
                        c = this.x.redMul(f.redIAdd(o)),
                        l = this.y.redMul(d.redISub(o)),
                        a = t ? h : this.z.redMul(h),
                        b = t ? u : this.z.redMul(u),
                        p = c.redMul(a),
                        m = l.redMul(b),
                        S = a.redMul(b),
                        M = c.redMul(l);
                    return this.curve.point(p, m, S, M)
                }
                _trplProj(e) {
                    const t = this.zOne & (1 ^ e),
                        r = this.x.redSqr(),
                        i = this.y.redSqr();
                    let n, s, d;
                    if (this.curve.twisted) {
                        const e = this.curve._mulA(r),
                            f = i.redAdd(e);
                        let o;
                        o = t ? this.curve.two.redSub(f).redIMuln(2) : this.z.redSqr().redIMuln(2).redISub(f).redIMuln(2);
                        const h = e.redMul(o),
                            u = i.redMul(o),
                            c = f.redMul(i.redISub(e)),
                            l = c.redSub(u),
                            a = c.redAdd(h);
                        n = this.x.redMul(u.redIAdd(c)).redMul(l), s = this.y.redMul(h.redISub(c)).redMul(a), d = t ? l.redMul(a) : this.z.redMul(l).redMul(a)
                    } else {
                        let e;
                        e = t ? this.curve.c2.redSqr() : this.curve.c2.redMul(this.z).redSqr();
                        const f = r.redAdd(i),
                            o = f.redSqr(),
                            h = f.redMul(r.redSub(i)).redIMuln(2),
                            u = o.redSub(i.redMul(e)),
                            c = o.redSub(r.redMul(e)),
                            l = h.redAdd(c),
                            a = h.redISub(u);
                        n = u.redMul(a).redMul(this.x), s = c.redMul(l).redMul(this.y), d = t ? l.redMul(a) : l.redMul(a).redMul(this.z)
                    }
                    return this.curve.point(n, s, d)
                }
                uadd(e) {
                    return c(e instanceof EdwardsPoint), this.curve.extended ? this._addExt(e, 1) : this._addProj(e, 1)
                }
                udbl() {
                    return this.curve.extended ? this._dblExt(1) : this._dblProj(1)
                }
                getX() {
                    return this.normalize(), this.x.fromRed()
                }
                getY() {
                    return this.normalize(), this.y.fromRed()
                }
                eq(e) {
                    if (c(e instanceof EdwardsPoint), c(0 !== this.z.sign()), c(0 !== e.z.sign()), this === e) return !0;
                    if (0 === this.z.cmp(e.z)) return 0 === this.x.cmp(e.x) && 0 === this.y.cmp(e.y);
                    const t = this.x.redMul(e.z),
                        r = e.x.redMul(this.z);
                    if (0 !== t.cmp(r)) return !1;
                    const i = this.y.redMul(e.z),
                        n = e.y.redMul(this.z);
                    return 0 === i.cmp(n)
                }
                isInfinity() {
                    return c(0 !== this.z.sign()), 0 === this.x.sign() && (this.curve.oneC ? 0 === this.y.cmp(this.z) : this.zOne ? 0 === this.y.cmp(this.curve.c) : 0 === this.y.cmp(this.curve.c.redMul(this.z)))
                }
                hasQuadY() {
                    return 1 === this.y.redMul(this.z).redJacobi()
                }
                eqX(e) {
                    c(e instanceof n), c(0 !== this.z.sign());
                    const t = e.toRed(this.curve.red).redMul(this.z);
                    return 0 === this.x.cmp(t)
                }
                toP() {
                    return this.normalize()
                }
                toJ() {
                    return this
                }
                encode() {
                    if (this.isInfinity()) throw new Error("Invalid point.");
                    const e = this.getY();
                    return e.setn(this.curve.signBit, this.x.redIsOdd()), this.curve.encodeField(e)
                }
                static decode(e, t) {
                    c(e instanceof EdwardsCurve);
                    const r = e.decodeField(t),
                        i = 0 !== r.testn(e.signBit);
                    if (r.setn(e.signBit, 0), r.cmp(e.p) >= 0) throw new Error("Invalid point.");
                    const n = e.pointFromY(r, i);
                    if (n.isInfinity()) throw new Error("Invalid point.");
                    if (e.iso4 && (n.y.eq(n.z) || n.y.eq(n.z.redNeg()))) throw new Error("Invalid point.");
                    return n
                }
                toJSON(e) {
                    if (this.isInfinity()) return [];
                    const t = this.getX().toJSON(),
                        r = this.getY().toJSON();
                    return !0 === e && this.pre ? [t, r, this.pre.toJSON()] : [t, r]
                }
                static fromJSON(e, t) {
                    if (c(e instanceof EdwardsCurve), c(Array.isArray(t)), c(0 === t.length || 2 === t.length || 3 === t.length), 0 === t.length) return e.point();
                    const r = n.fromJSON(t[0]),
                        i = n.fromJSON(t[1]),
                        s = e.point(r, i);
                    return t.length > 2 && null != t[2] && (s.pre = Precomp.fromJSON(s, t[2])), s
                } [i]() {
                    return this.isInfinity() ? "<EdwardsPoint: Infinity>" : "<EdwardsPoint: x=" + this.x.fromRed().toString(16, 2) + " y=" + this.y.fromRed().toString(16, 2) + " z=" + this.z.fromRed().toString(16, 2) + ">"
                }
            }
            class Mask {
                constructor(e) {
                    c(e instanceof Curve);
                    const t = e.p.byteLength(),
                        r = Math.max(8, 8 * (t - 1));
                    this.curve = e, this.h = 255 & -e.h.toNumber(), this.n = e.p.ushrn(r).toNumber(), this.b = this.n + 1 >>> 1, this.and = n.shift(this.n + 1, r - 8).isubn(1), this.and.iushln(8).iuorn(this.h), this.or = n.shift(this.b, r), "ed25519" === e.id || "x25519" === e.id ? (c(248 === this.h), c(127 === this.n), c(64 === this.b)) : "ed448" !== e.id && "x448" !== e.id || (c(252 === this.h), c(255 === this.n), c(128 === this.b))
                }
                reduce(e) {
                    return c(e instanceof n), c(!e.red), e.iuand(this.and), e.iuor(this.or), e
                }
                splitHash(e) {
                    c(Buffer.isBuffer(e)), c(e.length === 2 * this.curve.fieldSize);
                    const t = e.slice(0, this.curve.scalarSize),
                        r = e.slice(this.curve.fieldSize);
                    return this.clamp(t), [t, r]
                }
                clamp(e) {
                    c(Buffer.isBuffer(e)), c(e.length === this.curve.scalarSize);
                    let t = 0,
                        r = this.curve.scalarSize - 1;
                    return "be" === this.curve.endian && ([t, r] = [r, t]), e[t] &= this.h, e[r] &= this.n, e[r] |= this.b, e
                }
                isClamped(e) {
                    if (c(Buffer.isBuffer(e)), e.length !== this.curve.scalarSize) return !1;
                    let t = 0,
                        r = this.curve.scalarSize - 1;
                    return "be" === this.curve.endian && ([t, r] = [r, t]), !(e[t] & ~this.h) && (!(e[r] & ~this.n) && !!(e[r] & this.b))
                }
            }
            class Precomp {
                constructor() {
                    this.naf = null, this.doubles = null, this.blinding = null, this.beta = null
                }
                map(e) {
                    c("function" == typeof e);
                    const t = new this.constructor;
                    return this.naf && (t.naf = this.naf.map(e)), this.doubles && (t.doubles = this.doubles.map(e)), t
                }
                toJSON() {
                    return {
                        naf: this.naf ? this.naf.toJSON() : null,
                        doubles: this.doubles ? this.doubles.toJSON() : null,
                        blinding: this.blinding ? this.blinding.toJSON() : void 0
                    }
                }
                fromJSON(e, t) {
                    return c(e instanceof Point), c(t && "object" == typeof t), null != t.naf && (this.naf = NAF.fromJSON(e, t.naf)), null != t.doubles && (this.doubles = Doubles.fromJSON(e, t.doubles)), null != t.blinding && (this.blinding = Blinding.fromJSON(e, t.blinding)), this
                }
                static fromJSON(e, t) {
                    return (new this).fromJSON(e, t)
                }
            }
            class NAF {
                constructor(e, t) {
                    this.width = e, this.points = t
                }
                map(e) {
                    c("function" == typeof e);
                    const {
                        width: t
                    } = this, r = [];
                    for (const t of this.points) r.push(e(t));
                    return new this.constructor(t, r)
                }
                toJSON() {
                    return {
                        width: this.width,
                        points: this.points.slice(1).map(e => e.toJSON())
                    }
                }
                static fromJSON(e, t) {
                    c(e instanceof Point), c(t && "object" == typeof t), c(t.width >>> 0 === t.width), c(Array.isArray(t.points));
                    const {
                        curve: r
                    } = e, {
                        width: i
                    } = t, n = [e];
                    for (const e of t.points) n.push(r.pointFromJSON(e));
                    return new this(i, n)
                }
            }
            class Doubles {
                constructor(e, t) {
                    this.step = e, this.points = t
                }
                map(e) {
                    c("function" == typeof e);
                    const {
                        step: t
                    } = this, r = [];
                    for (const t of this.points) r.push(e(t));
                    return new this.constructor(t, r)
                }
                toJSON() {
                    return {
                        step: this.step,
                        points: this.points.slice(1).map(e => e.toJSON())
                    }
                }
                static fromJSON(e, t) {
                    c(e instanceof Point), c(t && "object" == typeof t), c(t.step >>> 0 === t.step), c(Array.isArray(t.points));
                    const {
                        curve: r
                    } = e, {
                        step: i
                    } = t, n = [e];
                    for (const e of t.points) n.push(r.pointFromJSON(e));
                    return new this(i, n)
                }
            }
            class Blinding {
                constructor(e, t) {
                    this.blind = e, this.unblind = t
                }
                toJSON() {
                    return {
                        blind: this.blind.toJSON(),
                        unblind: this.unblind.toJSON()
                    }
                }
                static fromJSON(e, t) {
                    c(e instanceof Point), c(t && "object" == typeof t);
                    const {
                        curve: r
                    } = e;
                    return new this(n.fromJSON(t.blind), r.pointFromJSON(t.unblind))
                }
            }
            class Endo {
                constructor(e, t, r) {
                    this.beta = e, this.lambda = t, this.basis = r
                }
                toJSON() {
                    return {
                        beta: this.beta.fromRed().toJSON(),
                        lambda: this.lambda.toJSON(),
                        basis: [this.basis[0].toJSON(), this.basis[1].toJSON()]
                    }
                }
                static fromJSON(e, t) {
                    c(e instanceof Curve), c(t && "object" == typeof t), c(Array.isArray(t.basis)), c(2 === t.basis.length);
                    return new this(n.fromJSON(t.beta).toRed(e.red), n.fromJSON(t.lambda), [Vector.fromJSON(t.basis[0]), Vector.fromJSON(t.basis[1])])
                }
            }
            class Vector {
                constructor(e, t) {
                    this.a = e, this.b = t
                }
                toJSON() {
                    return {
                        a: this.a.toJSON(),
                        b: this.b.toJSON()
                    }
                }
                static fromJSON(e) {
                    c(e && "object" == typeof e);
                    return new this(n.fromJSON(e.a), n.fromJSON(e.b))
                }
            }

            function h(e, t, r) {
                c(e instanceof n), c(!e.red), c(t >>> 0 === t), c(r >>> 0 === r);
                const i = new Array(r),
                    s = 1 << t + 1,
                    d = e.abs(),
                    f = 1 | e.sign();
                let o = 0;
                for (; !d.isZero();) {
                    let e = 0;
                    if (d.isOdd()) {
                        const t = d.andln(s - 1);
                        e = t > (s >> 1) - 1 ? (s >> 1) - t : t, d.isubn(e)
                    }
                    i[o++] = e * f;
                    let r = 1;
                    d.isZero() || 0 !== d.andln(s - 1) || (r = t + 1);
                    for (let e = 1; e < r; e++) i[o++] = 0;
                    d.iushrn(r)
                }
                for (c(o <= r); o < r; o++) i[o] = 0;
                return i
            }

            function u(e, t, r) {
                const i = function(e, t, r) {
                        c(e instanceof n), c(t instanceof n), c(!e.red), c(!t.red), c(r >>> 0 === r);
                        const i = [new Array(r), new Array(r)],
                            s = e.abs(),
                            d = t.abs(),
                            f = 1 | e.sign(),
                            o = 1 | t.sign();
                        let h = 0,
                            u = 0,
                            l = 0;
                        for (; s.cmpn(-u) > 0 || d.cmpn(-l) > 0;) {
                            let e = s.andln(3) + u & 3,
                                t = d.andln(3) + l & 3,
                                r = 0,
                                n = 0;
                            if (3 === e && (e = -1), 3 === t && (t = -1), 1 & e) {
                                const i = s.andln(7) + u & 7;
                                r = 3 !== i && 5 !== i || 2 !== t ? e : -e
                            }
                            if (1 & t) {
                                const r = d.andln(7) + l & 7;
                                n = 3 !== r && 5 !== r || 2 !== e ? t : -t
                            }
                            i[0][h] = r * f, i[1][h] = n * o, 2 * u === r + 1 && (u = 1 - u), 2 * l === n + 1 && (l = 1 - l), s.iushrn(1), d.iushrn(1), h += 1
                        }
                        for (c(h <= r); h < r; h++) i[0][h] = 0, i[1][h] = 0;
                        return i
                    }(e, t, r),
                    s = new Array(r);
                for (let e = 0; e < r; e++) {
                    const t = i[0][e],
                        r = i[1][e];
                    s[e] = o[3 * (t + 1) + (r + 1)]
                }
                return s
            }

            function c(e, t) {
                if (!e) {
                    const e = new Error(t || "Assertion failed");
                    throw Error.captureStackTrace && Error.captureStackTrace(e, c), e
                }
            }
            t.Curve = Curve, t.Point = Point, t.ShortCurve = ShortCurve, t.ShortPoint = ShortPoint, t.JPoint = JPoint, t.MontCurve = MontCurve, t.MontPoint = MontPoint, t.EdwardsCurve = EdwardsCurve, t.EdwardsPoint = EdwardsPoint, t.curves = {
                P192: class P192 extends ShortCurve {
                    constructor(e) {
                        super({
                            id: "P192",
                            ossl: "prime192v1",
                            type: "short",
                            endian: "be",
                            hash: "SHA256",
                            prefix: null,
                            context: !1,
                            iso4: !1,
                            prime: "p192",
                            s: "3045ae6f c8422f64 ed579528 d38120eae12196d5",
                            c: "3099d2bb bfcb2538 542dcd5f b078b6ef5f3d6fe2 c745de65",
                            p: "ffffffff ffffffff ffffffff fffffffeffffffff ffffffff",
                            a: "ffffffff ffffffff ffffffff fffffffeffffffff fffffffc",
                            b: "64210519 e59c80e7 0fa7e9ab 72243049feb8deec c146b9b1",
                            n: "ffffffff ffffffff ffffffff 99def836146bc9b1 b4d22831",
                            h: "1",
                            z: "-1",
                            g: [
                                ["188da80e b03090f6 7cbf20eb 43a18800", "f4ff0afd 82ff1012"].join(""), ["07192b95 ffc8da78 631011ed 6b24cdd5", "73f977a1 1e794811"].join(""), e
                            ]
                        })
                    }
                },
                P224: class P224 extends ShortCurve {
                    constructor(e) {
                        super({
                            id: "P224",
                            ossl: "secp224r1",
                            type: "short",
                            endian: "be",
                            hash: "SHA256",
                            prefix: null,
                            context: !1,
                            iso4: !1,
                            prime: "p224",
                            s: "bd713447 99d5c7fc dc45b59f a3b9ab8f6a948bc5",
                            c: "5b056c7e 11dd68f4 0469ee7f 3c7a7d74f7d12111 6506d031 218291fb",
                            p: "ffffffff ffffffff ffffffff ffffffff00000000 00000000 00000001",
                            a: "ffffffff ffffffff ffffffff fffffffeffffffff ffffffff fffffffe",
                            b: "b4050a85 0c04b3ab f5413256 5044b0b7d7bfd8ba 270b3943 2355ffb4",
                            n: "ffffffff ffffffff ffffffff ffff16a2e0b8f03e 13dd2945 5c5c2a3d",
                            h: "1",
                            z: "-b",
                            g: [
                                ["b70e0cbd 6bb4bf7f 321390b9 4a03c1d3", "56c21122 343280d6 115c1d21"].join(""), ["bd376388 b5f723fb 4c22dfe6 cd4375a0", "5a074764 44d58199 85007e34"].join(""), e
                            ]
                        })
                    }
                },
                P256: class P256 extends ShortCurve {
                    constructor(e) {
                        super({
                            id: "P256",
                            ossl: "prime256v1",
                            type: "short",
                            endian: "be",
                            hash: "SHA256",
                            prefix: null,
                            context: !1,
                            iso4: !1,
                            prime: null,
                            s: "c49d3608 86e70493 6a6678e1 139d26b7819f7e90",
                            c: "7efba166 2985be94 03cb055c 75d4f7e0ce8d84a9 c5114abc af317768 0104fa0d",
                            p: "ffffffff 00000001 00000000 0000000000000000 ffffffff ffffffff ffffffff",
                            a: "ffffffff 00000001 00000000 0000000000000000 ffffffff ffffffff fffffffc",
                            b: "5ac635d8 aa3a93e7 b3ebbd55 769886bc651d06b0 cc53b0f6 3bce3c3e 27d2604b",
                            n: "ffffffff 00000000 ffffffff ffffffffbce6faad a7179e84 f3b9cac2 fc632551",
                            h: "1",
                            z: "-2",
                            g: [
                                ["6b17d1f2 e12c4247 f8bce6e5 63a440f2", "77037d81 2deb33a0 f4a13945 d898c296"].join(""), ["4fe342e2 fe1a7f9b 8ee7eb4a 7c0f9e16", "2bce3357 6b315ece cbb64068 37bf51f5"].join(""), e
                            ]
                        })
                    }
                },
                P384: class P384 extends ShortCurve {
                    constructor(e) {
                        super({
                            id: "P384",
                            ossl: "secp384r1",
                            type: "short",
                            endian: "be",
                            hash: "SHA384",
                            prefix: null,
                            context: !1,
                            iso4: !1,
                            prime: null,
                            s: "a335926a a319a27a 1d00896a 6773a4827acdac73",
                            c: "79d1e655 f868f02f ff48dcde e14151ddb80643c1 406d0ca1 0dfe6fc5 2009540a495e8042 ea5f744f 6e184667 cc722483",
                            p: "ffffffff ffffffff ffffffff ffffffffffffffff ffffffff ffffffff fffffffeffffffff 00000000 00000000 ffffffff",
                            a: "ffffffff ffffffff ffffffff ffffffffffffffff ffffffff ffffffff fffffffeffffffff 00000000 00000000 fffffffc",
                            b: "b3312fa7 e23ee7e4 988e056b e3f82d19181d9c6e fe814112 0314088f 5013875ac656398d 8a2ed19d 2a85c8ed d3ec2aef",
                            n: "ffffffff ffffffff ffffffff ffffffffffffffff ffffffff c7634d81 f4372ddf581a0db2 48b0a77a ecec196a ccc52973",
                            h: "1",
                            z: "-1",
                            g: [
                                ["aa87ca22 be8b0537 8eb1c71e f320ad74", "6e1d3b62 8ba79b98 59f741e0 82542a38", "5502f25d bf55296c 3a545e38 72760ab7"].join(""), ["3617de4a 96262c6f 5d9e98bf 9292dc29", "f8f41dbd 289a147c e9da3113 b5f0b8c0", "0a60b1ce 1d7e819d 7a431d7c 90ea0e5f"].join(""), e
                            ]
                        })
                    }
                },
                P521: class P521 extends ShortCurve {
                    constructor(e) {
                        super({
                            id: "P521",
                            ossl: "secp521r1",
                            type: "short",
                            endian: "be",
                            hash: "SHA512",
                            prefix: null,
                            context: !1,
                            iso4: !1,
                            prime: "p521",
                            s: "d09e8800 291cb853 96cc6717 393284aaa0da64ba",
                            c: "000000b4 8bfa5f42 0a349495 39d2bdfc264eeeeb 077688e4 4fbf0ad8 f6d0edb37bd6b533 28100051 8e19f1b9 ffbe0fe9ed8a3c22 00b8f875 e523868c 70c1e5bf55bad637",
                            p: "000001ff ffffffff ffffffff ffffffffffffffff ffffffff ffffffff ffffffffffffffff ffffffff ffffffff ffffffffffffffff ffffffff ffffffff ffffffffffffffff",
                            a: "000001ff ffffffff ffffffff ffffffffffffffff ffffffff ffffffff ffffffffffffffff ffffffff ffffffff ffffffffffffffff ffffffff ffffffff fffffffffffffffc",
                            b: "00000051 953eb961 8e1c9a1f 929a21a0b68540ee a2da725b 99b315f3 b8b489918ef109e1 56193951 ec7e937b 1652c0bd3bb1bf07 3573df88 3d2c34f1 ef451fd46b503f00",
                            n: "000001ff ffffffff ffffffff ffffffffffffffff ffffffff ffffffff fffffffffffffffa 51868783 bf2f966b 7fcc0148f709a5d0 3bb5c9b8 899c47ae bb6fb71e91386409",
                            h: "1",
                            z: "-2",
                            g: [
                                ["000000c6 858e06b7 0404e9cd 9e3ecb66", "2395b442 9c648139 053fb521 f828af60", "6b4d3dba a14b5e77 efe75928 fe1dc127", "a2ffa8de 3348b3c1 856a429b f97e7e31", "c2e5bd66"].join(""), ["00000118 39296a78 9a3bc004 5c8a5fb4", "2c7d1bd9 98f54449 579b4468 17afbd17", "273e662c 97ee7299 5ef42640 c550b901", "3fad0761 353c7086 a272c240 88be9476", "9fd16650"].join(""), e
                            ]
                        })
                    }
                },
                SECP256K1: class SECP256K1 extends ShortCurve {
                    constructor(e) {
                        super({
                            id: "SECP256K1",
                            ossl: "secp256k1",
                            type: "short",
                            endian: "be",
                            hash: "SHA256",
                            prefix: null,
                            context: !1,
                            iso4: !1,
                            prime: "k256",
                            p: "ffffffff ffffffff ffffffff ffffffffffffffff ffffffff fffffffe fffffc2f",
                            a: "0",
                            b: "7",
                            n: "ffffffff ffffffff ffffffff fffffffebaaedce6 af48a03b bfd25e8c d0364141",
                            h: "1",
                            z: "1",
                            g: [
                                ["79be667e f9dcbbac 55a06295 ce870b07", "029bfcdb 2dce28d9 59f2815b 16f81798"].join(""), ["483ada77 26a3c465 5da4fbfc 0e1108a8", "fd17b448 a6855419 9c47d08f fb10d4b8"].join(""), e
                            ],
                            endo: {
                                beta: "7ae96a2b 657c0710 6e64479e ac3434e99cf04975 12f58995 c1396c28 719501ee",
                                lambda: "5363ad4c c05c30e0 a5261c02 8812645a122e22ea 20816678 df02967c 1b23bd72",
                                basis: [{
                                    a: "3086d221a7d46bcde86c90e49284eb15",
                                    b: "-e4437ed6010e88286f547fa90abfe4c3"
                                }, {
                                    a: "114ca50f7a8e2f3f657c1108d9d44cfd8",
                                    b: "3086d221a7d46bcde86c90e49284eb15"
                                }]
                            }
                        })
                    }
                },
                BRAINPOOLP256: class BRAINPOOLP256 extends ShortCurve {
                    constructor(e) {
                        super({
                            id: "BRAINPOOLP256",
                            ossl: "brainpoolP256r1",
                            type: "short",
                            endian: "be",
                            hash: "SHA256",
                            prefix: null,
                            context: !1,
                            iso4: !1,
                            prime: null,
                            s: "757f5958 490cfd47 d7c19bb4 2158d9554f7b46bc",
                            p: "a9fb57db a1eea9bc 3e660a90 9d838d726e3bf623 d5262028 2013481d 1f6e5377",
                            a: "7d5a0975 fc2c3057 eef67530 417affe7fb8055c1 26dc5c6c e94a4b44 f330b5d9",
                            b: "26dc5c6c e94a4b44 f330b5d9 bbd77cbf95841629 5cf7e1ce 6bccdc18 ff8c07b6",
                            n: "a9fb57db a1eea9bc 3e660a90 9d838d718c397aa3 b561a6f7 901e0e82 974856a7",
                            h: "1",
                            z: "-2",
                            g: [
                                ["8bd2aeb9 cb7e57cb 2c4b482f fc81b7af", "b9de27e1 e3bd23c2 3a4453bd 9ace3262"].join(""), ["547ef835 c3dac4fd 97f8461a 14611dc9", "c2774513 2ded8e54 5c1d54c7 2f046997"].join(""), e
                            ]
                        })
                    }
                },
                BRAINPOOLP384: class BRAINPOOLP384 extends ShortCurve {
                    constructor(e) {
                        super({
                            id: "BRAINPOOLP384",
                            ossl: "brainpoolP384r1",
                            type: "short",
                            endian: "be",
                            hash: "SHA384",
                            prefix: null,
                            context: !1,
                            iso4: !1,
                            prime: null,
                            s: "bcfbfa1c 877c5628 4dab79cd 4c2b3293d20e9e5e",
                            p: "8cb91e82 a3386d28 0f5d6f7e 50e641df152f7109 ed5456b4 12b1da19 7fb71123acd3a729 901d1a71 87470013 3107ec53",
                            a: "7bc382c6 3d8c150c 3c72080a ce05afa0c2bea28e 4fb22787 139165ef ba91f90f8aa5814a 503ad4eb 04a8c7dd 22ce2826",
                            b: "04a8c7dd 22ce2826 8b39b554 16f0447c2fb77de1 07dcd2a6 2e880ea5 3eeb62d57cb43902 95dbc994 3ab78696 fa504c11",
                            n: "8cb91e82 a3386d28 0f5d6f7e 50e641df152f7109 ed5456b3 1f166e6c ac0425a7cf3ab6af 6b7fc310 3b883202 e9046565",
                            h: "1",
                            z: "-1",
                            g: [
                                ["1d1c64f0 68cf45ff a2a63a81 b7c13f6b", "8847a3e7 7ef14fe3 db7fcafe 0cbd10e8", "e826e034 36d646aa ef87b2e2 47d4af1e"].join(""), ["8abe1d75 20f9c2a4 5cb1eb8e 95cfd552", "62b70b29 feec5864 e19c054f f9912928", "0e464621 77918111 42820341 263c5315"].join(""), e
                            ]
                        })
                    }
                },
                BRAINPOOLP512: class BRAINPOOLP512 extends ShortCurve {
                    constructor(e) {
                        super({
                            id: "BRAINPOOLP512",
                            ossl: "brainpoolP512r1",
                            type: "short",
                            endian: "be",
                            hash: "SHA512",
                            prefix: null,
                            context: !1,
                            iso4: !1,
                            prime: null,
                            s: "af02ac60 acc93ed8 74422a52 ecb238feee5ab6ad",
                            p: "aadd9db8 dbe9c48b 3fd4e6ae 33c9fc07cb308db3 b3c9d20e d6639cca 703308717d4d9b00 9bc66842 aecda12a e6a380e62881ff2f 2d82c685 28aa6056 583a48f3",
                            a: "7830a331 8b603b89 e2327145 ac234cc594cbdd8d 3df91610 a83441ca ea9863bc2ded5d5a a8253aa1 0a2ef1c9 8b9ac8b57f1117a7 2bf2c7b9 e7c1ac4d 77fc94ca",
                            b: "3df91610 a83441ca ea9863bc 2ded5d5aa8253aa1 0a2ef1c9 8b9ac8b5 7f1117a72bf2c7b9 e7c1ac4d 77fc94ca dc083e67984050b7 5ebae5dd 2809bd63 8016f723",
                            n: "aadd9db8 dbe9c48b 3fd4e6ae 33c9fc07cb308db3 b3c9d20e d6639cca 70330870553e5c41 4ca92619 41866119 7fac10471db1d381 085ddadd b5879682 9ca90069",
                            h: "1",
                            z: "2",
                            g: [
                                ["81aee4bd d82ed964 5a21322e 9c4c6a93", "85ed9f70 b5d916c1 b43b62ee f4d0098e", "ff3b1f78 e2d0d48d 50d1687b 93b97d5f", "7c6d5047 406a5e68 8b352209 bcb9f822"].join(""), ["7dde385d 566332ec c0eabfa9 cf7822fd", "f209f700 24a57b1a a000c55b 881f8111", "b2dcde49 4a5f485e 5bca4bd8 8a2763ae", "d1ca2b2f a8f05406 78cd1e0f 3ad80892"].join(""), e
                            ]
                        })
                    }
                },
                X25519: class X25519 extends MontCurve {
                    constructor() {
                        super({
                            id: "X25519",
                            ossl: "X25519",
                            type: "mont",
                            endian: "le",
                            hash: "SHA512",
                            prefix: null,
                            context: !1,
                            iso4: !1,
                            prime: "p25519",
                            p: "7fffffff ffffffff ffffffff ffffffffffffffff ffffffff ffffffff ffffffed",
                            a: "76d06",
                            b: "1",
                            n: "10000000 00000000 00000000 0000000014def9de a2f79cd6 5812631a 5cf5d3ed",
                            h: "8",
                            z: "2",
                            g: [
                                ["00000000 00000000 00000000 00000000", "00000000 00000000 00000000 00000009"].join(""), ["20ae19a1 b8a086b4 e01edd2c 7748d14c", "923d4d7e 6d7c61b2 29e9c5a2 7eced3d9"].join("")
                            ]
                        })
                    }
                },
                ED25519: class ED25519 extends EdwardsCurve {
                    constructor(e) {
                        super({
                            id: "ED25519",
                            ossl: "ED25519",
                            type: "edwards",
                            endian: "le",
                            hash: "SHA512",
                            prefix: "SigEd25519 no Ed25519 collisions",
                            context: !1,
                            iso4: !1,
                            prime: "p25519",
                            p: "7fffffff ffffffff ffffffff ffffffffffffffff ffffffff ffffffff ffffffed",
                            a: "-1",
                            c: "1",
                            d: "52036cee 2b6ffe73 8cc74079 7779e89800700a4d 4141d8ab 75eb4dca 135978a3",
                            n: "10000000 00000000 00000000 0000000014def9de a2f79cd6 5812631a 5cf5d3ed",
                            h: "8",
                            z: "2",
                            g: [
                                ["216936d3 cd6e53fe c0a4e231 fdd6dc5c", "692cc760 9525a7b2 c9562d60 8f25d51a"].join(""), ["66666666 66666666 66666666 66666666", "66666666 66666666 66666666 66666658"].join(""), e
                            ]
                        })
                    }
                },
                X448: class X448 extends MontCurve {
                    constructor() {
                        super({
                            id: "X448",
                            ossl: "X448",
                            type: "mont",
                            endian: "le",
                            hash: "SHAKE256",
                            prefix: null,
                            context: !1,
                            iso4: !1,
                            prime: "p448",
                            p: "ffffffff ffffffff ffffffff ffffffffffffffff ffffffff fffffffe ffffffffffffffff ffffffff ffffffff ffffffffffffffff ffffffff",
                            a: "262a6",
                            b: "1",
                            n: "3fffffff ffffffff ffffffff ffffffffffffffff ffffffff ffffffff 7cca23e9c44edb49 aed63690 216cc272 8dc58f552378c292 ab5844f3",
                            h: "4",
                            z: "-1",
                            g: [
                                ["00000000 00000000 00000000 00000000", "00000000 00000000 00000000 00000000", "00000000 00000000 00000000 00000000", "00000000 00000005"].join(""), ["7d235d12 95f5b1f6 6c98ab6e 58326fce", "cbae5d34 f55545d0 60f75dc2 8df3f6ed", "b8027e23 46430d21 1312c4b1 50677af7", "6fd7223d 457b5b1a"].join("")
                            ]
                        })
                    }
                },
                ED448: class ED448 extends EdwardsCurve {
                    constructor(e) {
                        super({
                            id: "ED448",
                            ossl: "ED448",
                            type: "edwards",
                            endian: "le",
                            hash: "SHAKE256",
                            prefix: "SigEd448",
                            context: !0,
                            iso4: !0,
                            prime: "p448",
                            p: "ffffffff ffffffff ffffffff ffffffffffffffff ffffffff fffffffe ffffffffffffffff ffffffff ffffffff ffffffffffffffff ffffffff",
                            a: "1",
                            c: "1",
                            d: "ffffffff ffffffff ffffffff ffffffffffffffff ffffffff fffffffe ffffffffffffffff ffffffff ffffffff ffffffffffffffff ffff6756",
                            n: "3fffffff ffffffff ffffffff ffffffffffffffff ffffffff ffffffff 7cca23e9c44edb49 aed63690 216cc272 8dc58f552378c292 ab5844f3",
                            h: "4",
                            z: "-1",
                            g: [
                                ["4f1970c6 6bed0ded 221d15a6 22bf36da", "9e146570 470f1767 ea6de324 a3d3a464", "12ae1af7 2ab66511 433b80e1 8b00938e", "2626a82b c70cc05e"].join(""), ["693f4671 6eb6bc24 88762037 56c9c762", "4bea7373 6ca39840 87789c1e 05a0c2d7", "3ad3ff1c e67c39c4 fdbd132c 4ed7c8ad", "9808795b f230fa14"].join(""), e
                            ]
                        })
                    }
                }
            }
        },
        7488: function(e, t, r) {
            "use strict";
            const i = r(5466),
                n = r(5579),
                s = new Uint32Array([1, 0, 32898, 0, 32906, 2147483648, 2147516416, 2147483648, 32907, 0, 2147483649, 0, 2147516545, 2147483648, 32777, 2147483648, 138, 0, 136, 0, 2147516425, 0, 2147483658, 0, 2147516555, 0, 139, 2147483648, 32905, 2147483648, 32771, 2147483648, 32770, 2147483648, 128, 2147483648, 32778, 0, 2147483658, 2147483648, 2147516545, 2147483648, 32896, 2147483648, 2147483649, 0, 2147516424, 2147483648]);
            class Keccak {
                constructor() {
                    this.state = new Uint32Array(50), this.block = Buffer.allocUnsafe(168), this.bs = 136, this.pos = 2147483648
                }
                init(e = 256) {
                    i((65535 & e) === e), i(e >= 128), i(e <= 512);
                    const t = 1600 - 2 * e;
                    return i(t >= 0 && 0 == (63 & t)), this.bs = t / 8, this.pos = 0, this
                }
                update(e) {
                    i(Buffer.isBuffer(e)), i(!(2147483648 & this.pos), "Context already finalized.");
                    let t = e.length,
                        r = this.pos,
                        n = 0;
                    if (this.pos = (this.pos + t) % this.bs, r > 0) {
                        let i = this.bs - r;
                        if (i > t && (i = t), e.copy(this.block, r, n, n + i), r += i, t -= i, n += i, r < this.bs) return this;
                        this.transform(this.block, 0)
                    }
                    for (; t >= this.bs;) this.transform(e, n), n += this.bs, t -= this.bs;
                    return t > 0 && e.copy(this.block, 0, n, n + t), this
                }
                final(e = 1, t) {
                    null == t && (t = 0), 0 === t && (t = 100 - this.bs / 2), i((255 & e) === e), i(t >>> 0 === t), i(!(2147483648 & this.pos), "Context already finalized."), this.block.fill(0, this.pos, this.bs), this.block[this.pos] |= e, this.block[this.bs - 1] |= 128, this.transform(this.block, 0), this.pos = 2147483648, i(t < this.bs);
                    const r = Buffer.allocUnsafe(t);
                    for (let e = 0; e < t; e++) r[e] = this.state[e >>> 2] >>> 8 * (3 & e);
                    for (let e = 0; e < 50; e++) this.state[e] = 0;
                    for (let e = 0; e < this.bs; e++) this.block[e] = 0;
                    return r
                }
                transform(e, t) {
                    const r = this.bs / 4,
                        i = this.state;
                    for (let n = 0; n < r; n++) i[n] ^= d(e, t + 4 * n);
                    for (let e = 0; e < 48; e += 2) {
                        const t = i[0] ^ i[10] ^ i[20] ^ i[30] ^ i[40],
                            r = i[1] ^ i[11] ^ i[21] ^ i[31] ^ i[41],
                            n = i[2] ^ i[12] ^ i[22] ^ i[32] ^ i[42],
                            d = i[3] ^ i[13] ^ i[23] ^ i[33] ^ i[43],
                            f = i[4] ^ i[14] ^ i[24] ^ i[34] ^ i[44],
                            o = i[5] ^ i[15] ^ i[25] ^ i[35] ^ i[45],
                            h = i[6] ^ i[16] ^ i[26] ^ i[36] ^ i[46],
                            u = i[7] ^ i[17] ^ i[27] ^ i[37] ^ i[47],
                            c = i[8] ^ i[18] ^ i[28] ^ i[38] ^ i[48],
                            l = i[9] ^ i[19] ^ i[29] ^ i[39] ^ i[49],
                            a = c ^ (n << 1 | d >>> 31),
                            b = l ^ (d << 1 | n >>> 31),
                            p = t ^ (f << 1 | o >>> 31),
                            m = r ^ (o << 1 | f >>> 31),
                            S = n ^ (h << 1 | u >>> 31),
                            M = d ^ (u << 1 | h >>> 31),
                            v = f ^ (c << 1 | l >>> 31),
                            I = o ^ (l << 1 | c >>> 31),
                            w = h ^ (t << 1 | r >>> 31),
                            z = u ^ (r << 1 | t >>> 31);
                        i[0] ^= a, i[1] ^= b, i[10] ^= a, i[11] ^= b, i[20] ^= a, i[21] ^= b, i[30] ^= a, i[31] ^= b, i[40] ^= a, i[41] ^= b, i[2] ^= p, i[3] ^= m, i[12] ^= p, i[13] ^= m, i[22] ^= p, i[23] ^= m, i[32] ^= p, i[33] ^= m, i[42] ^= p, i[43] ^= m, i[4] ^= S, i[5] ^= M, i[14] ^= S, i[15] ^= M, i[24] ^= S, i[25] ^= M, i[34] ^= S, i[35] ^= M, i[44] ^= S, i[45] ^= M, i[6] ^= v, i[7] ^= I, i[16] ^= v, i[17] ^= I, i[26] ^= v, i[27] ^= I, i[36] ^= v, i[37] ^= I, i[46] ^= v, i[47] ^= I, i[8] ^= w, i[9] ^= z, i[18] ^= w, i[19] ^= z, i[28] ^= w, i[29] ^= z, i[38] ^= w, i[39] ^= z, i[48] ^= w, i[49] ^= z;
                        const y = i[0],
                            x = i[1],
                            g = i[11] << 4 | i[10] >>> 28,
                            A = i[10] << 4 | i[11] >>> 28,
                            N = i[20] << 3 | i[21] >>> 29,
                            q = i[21] << 3 | i[20] >>> 29,
                            P = i[31] << 9 | i[30] >>> 23,
                            _ = i[30] << 9 | i[31] >>> 23,
                            O = i[40] << 18 | i[41] >>> 14,
                            E = i[41] << 18 | i[40] >>> 14,
                            J = i[2] << 1 | i[3] >>> 31,
                            j = i[3] << 1 | i[2] >>> 31,
                            B = i[13] << 12 | i[12] >>> 20,
                            R = i[12] << 12 | i[13] >>> 20,
                            C = i[22] << 10 | i[23] >>> 22,
                            F = i[23] << 10 | i[22] >>> 22,
                            H = i[33] << 13 | i[32] >>> 19,
                            k = i[32] << 13 | i[33] >>> 19,
                            D = i[42] << 2 | i[43] >>> 30,
                            X = i[43] << 2 | i[42] >>> 30,
                            Y = i[5] << 30 | i[4] >>> 2,
                            L = i[4] << 30 | i[5] >>> 2,
                            U = i[14] << 6 | i[15] >>> 26,
                            Z = i[15] << 6 | i[14] >>> 26,
                            K = i[25] << 11 | i[24] >>> 21,
                            T = i[24] << 11 | i[25] >>> 21,
                            Q = i[34] << 15 | i[35] >>> 17,
                            V = i[35] << 15 | i[34] >>> 17,
                            W = i[45] << 29 | i[44] >>> 3,
                            G = i[44] << 29 | i[45] >>> 3,
                            $ = i[6] << 28 | i[7] >>> 4,
                            ee = i[7] << 28 | i[6] >>> 4,
                            te = i[17] << 23 | i[16] >>> 9,
                            re = i[16] << 23 | i[17] >>> 9,
                            ie = i[26] << 25 | i[27] >>> 7,
                            ne = i[27] << 25 | i[26] >>> 7,
                            se = i[36] << 21 | i[37] >>> 11,
                            de = i[37] << 21 | i[36] >>> 11,
                            fe = i[47] << 24 | i[46] >>> 8,
                            oe = i[46] << 24 | i[47] >>> 8,
                            he = i[8] << 27 | i[9] >>> 5,
                            ue = i[9] << 27 | i[8] >>> 5,
                            ce = i[18] << 20 | i[19] >>> 12,
                            le = i[19] << 20 | i[18] >>> 12,
                            ae = i[29] << 7 | i[28] >>> 25,
                            be = i[28] << 7 | i[29] >>> 25,
                            pe = i[38] << 8 | i[39] >>> 24,
                            me = i[39] << 8 | i[38] >>> 24,
                            Se = i[48] << 14 | i[49] >>> 18,
                            Me = i[49] << 14 | i[48] >>> 18;
                        i[0] = y ^ ~B & K, i[1] = x ^ ~R & T, i[10] = $ ^ ~ce & N, i[11] = ee ^ ~le & q, i[20] = J ^ ~U & ie, i[21] = j ^ ~Z & ne, i[30] = he ^ ~g & C, i[31] = ue ^ ~A & F, i[40] = Y ^ ~te & ae, i[41] = L ^ ~re & be, i[2] = B ^ ~K & se, i[3] = R ^ ~T & de, i[12] = ce ^ ~N & H, i[13] = le ^ ~q & k, i[22] = U ^ ~ie & pe, i[23] = Z ^ ~ne & me, i[32] = g ^ ~C & Q, i[33] = A ^ ~F & V, i[42] = te ^ ~ae & P, i[43] = re ^ ~be & _, i[4] = K ^ ~se & Se, i[5] = T ^ ~de & Me, i[14] = N ^ ~H & W, i[15] = q ^ ~k & G, i[24] = ie ^ ~pe & O, i[25] = ne ^ ~me & E, i[34] = C ^ ~Q & fe, i[35] = F ^ ~V & oe, i[44] = ae ^ ~P & D, i[45] = be ^ ~_ & X, i[6] = se ^ ~Se & y, i[7] = de ^ ~Me & x, i[16] = H ^ ~W & $, i[17] = k ^ ~G & ee, i[26] = pe ^ ~O & J, i[27] = me ^ ~E & j, i[36] = Q ^ ~fe & he, i[37] = V ^ ~oe & ue, i[46] = P ^ ~D & Y, i[47] = _ ^ ~X & L, i[8] = Se ^ ~y & B, i[9] = Me ^ ~x & R, i[18] = W ^ ~$ & ce, i[19] = G ^ ~ee & le, i[28] = O ^ ~J & U, i[29] = E ^ ~j & Z, i[38] = fe ^ ~he & g, i[39] = oe ^ ~ue & A, i[48] = D ^ ~Y & te, i[49] = X ^ ~L & re, i[0] ^= s[e + 0], i[1] ^= s[e + 1]
                    }
                }
                static hash() {
                    return new Keccak
                }
                static hmac(e = 256, t = 1, r) {
                    i(e >>> 0 === e);
                    return new n(Keccak, (1600 - 2 * e) / 8, [e], [t, r])
                }
                static digest(e, t = 256, r = 1, i) {
                    return Keccak.ctx.init(t).update(e).final(r, i)
                }
                static root(e, t, r = 256, n = 1, s) {
                    return null == s && (s = 0), 0 === s && (i(r >>> 0 === r), s = r >>> 3), i(s >>> 0 === s), i(Buffer.isBuffer(e) && e.length === s), i(Buffer.isBuffer(t) && t.length === s), Keccak.ctx.init(r).update(e).update(t).final(n, s)
                }
                static multi(e, t, r, i = 256, n = 1, s) {
                    const d = Keccak.ctx;
                    return d.init(i), d.update(e), d.update(t), r && d.update(r), d.final(n, s)
                }
                static mac(e, t, r = 256, i = 1, n) {
                    return Keccak.hmac(r, i, n).init(t).update(e).final()
                }
            }

            function d(e, t) {
                return e[t++] + 256 * e[t++] + 65536 * e[t++] + 16777216 * e[t]
            }
            Keccak.native = 0, Keccak.id = "KECCAK256", Keccak.size = 32, Keccak.bits = 256, Keccak.blockSize = 136, Keccak.zero = Buffer.alloc(32, 0), Keccak.ctx = new Keccak, e.exports = Keccak
        }
    }
]);