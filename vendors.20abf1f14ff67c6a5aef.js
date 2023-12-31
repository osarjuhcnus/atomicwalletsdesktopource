/*! For license information please see vendors.20abf1f14ff67c6a5aef.js.LICENSE.txt */
(window.webpackJsonp = window.webpackJsonp || []).push([
    [118], {
        1061: function(t, e, n) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.SHA2 = void 0;
            const r = n(619),
                i = n(290);
            class SHA2 extends i.Hash {
                constructor(t, e, n, r) {
                    super(), this.blockLen = t, this.outputLen = e, this.padOffset = n, this.isLE = r, this.finished = !1, this.length = 0, this.pos = 0, this.destroyed = !1, this.buffer = new Uint8Array(t), this.view = (0, i.createView)(this.buffer)
                }
                update(t) {
                    r.default.exists(this);
                    const {
                        view: e,
                        buffer: n,
                        blockLen: o
                    } = this, s = (t = (0, i.toBytes)(t)).length;
                    for (let r = 0; r < s;) {
                        const a = Math.min(o - this.pos, s - r);
                        if (a !== o) n.set(t.subarray(r, r + a), this.pos), this.pos += a, r += a, this.pos === o && (this.process(e, 0), this.pos = 0);
                        else {
                            const e = (0, i.createView)(t);
                            for (; o <= s - r; r += o) this.process(e, r)
                        }
                    }
                    return this.length += t.length, this.roundClean(), this
                }
                digestInto(t) {
                    r.default.exists(this), r.default.output(t, this), this.finished = !0;
                    const {
                        buffer: e,
                        view: n,
                        blockLen: o,
                        isLE: s
                    } = this;
                    let {
                        pos: a
                    } = this;
                    e[a++] = 128, this.buffer.subarray(a).fill(0), this.padOffset > o - a && (this.process(n, 0), a = 0);
                    for (let t = a; t < o; t++) e[t] = 0;
                    ! function(t, e, n, r) {
                        if ("function" == typeof t.setBigUint64) return t.setBigUint64(e, n, r);
                        const i = BigInt(32),
                            o = BigInt(4294967295),
                            s = Number(n >> i & o),
                            a = Number(n & o),
                            u = r ? 4 : 0,
                            c = r ? 0 : 4;
                        t.setUint32(e + u, s, r), t.setUint32(e + c, a, r)
                    }(n, o - 8, BigInt(8 * this.length), s), this.process(n, 0);
                    const u = (0, i.createView)(t),
                        c = this.outputLen;
                    if (c % 4) throw new Error("_sha2: outputLen should be aligned to 32bit");
                    const l = c / 4,
                        f = this.get();
                    if (l > f.length) throw new Error("_sha2: outputLen bigger than state");
                    for (let t = 0; t < l; t++) u.setUint32(4 * t, f[t], s)
                }
                digest() {
                    const {
                        buffer: t,
                        outputLen: e
                    } = this;
                    this.digestInto(t);
                    const n = t.slice(0, e);
                    return this.destroy(), n
                }
                _cloneInto(t) {
                    t || (t = new this.constructor), t.set(...this.get());
                    const {
                        blockLen: e,
                        buffer: n,
                        length: r,
                        finished: i,
                        destroyed: o,
                        pos: s
                    } = this;
                    return t.length = r, t.pos = s, t.finished = i, t.destroyed = o, r % e && t.buffer.set(n), t
                }
            }
            e.SHA2 = SHA2
        },
        1804: function(t, e, n) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.add = e.toBig = e.split = e.fromBig = void 0;
            const r = BigInt(2 ** 32 - 1),
                i = BigInt(32);

            function o(t, e = !1) {
                return e ? {
                    h: Number(t & r),
                    l: Number(t >> i & r)
                } : {
                    h: 0 | Number(t >> i & r),
                    l: 0 | Number(t & r)
                }
            }

            function s(t, e = !1) {
                let n = new Uint32Array(t.length),
                    r = new Uint32Array(t.length);
                for (let i = 0; i < t.length; i++) {
                    const {
                        h: s,
                        l: a
                    } = o(t[i], e);
                    [n[i], r[i]] = [s, a]
                }
                return [n, r]
            }
            e.fromBig = o, e.split = s;
            e.toBig = (t, e) => BigInt(t >>> 0) << i | BigInt(e >>> 0);

            function a(t, e, n, r) {
                const i = (e >>> 0) + (r >>> 0);
                return {
                    h: t + n + (i / 2 ** 32 | 0) | 0,
                    l: 0 | i
                }
            }
            e.add = a;
            const u = {
                fromBig: o,
                split: s,
                toBig: e.toBig,
                shrSH: (t, e, n) => t >>> n,
                shrSL: (t, e, n) => t << 32 - n | e >>> n,
                rotrSH: (t, e, n) => t >>> n | e << 32 - n,
                rotrSL: (t, e, n) => t << 32 - n | e >>> n,
                rotrBH: (t, e, n) => t << 64 - n | e >>> n - 32,
                rotrBL: (t, e, n) => t >>> n - 32 | e << 64 - n,
                rotr32H: (t, e) => e,
                rotr32L: (t, e) => t,
                rotlSH: (t, e, n) => t << n | e >>> 32 - n,
                rotlSL: (t, e, n) => e << n | t >>> 32 - n,
                rotlBH: (t, e, n) => e << n - 32 | t >>> 64 - n,
                rotlBL: (t, e, n) => t << n - 32 | e >>> 64 - n,
                add: a,
                add3L: (t, e, n) => (t >>> 0) + (e >>> 0) + (n >>> 0),
                add3H: (t, e, n, r) => e + n + r + (t / 2 ** 32 | 0) | 0,
                add4L: (t, e, n, r) => (t >>> 0) + (e >>> 0) + (n >>> 0) + (r >>> 0),
                add4H: (t, e, n, r, i) => e + n + r + i + (t / 2 ** 32 | 0) | 0,
                add5H: (t, e, n, r, i, o) => e + n + r + i + o + (t / 2 ** 32 | 0) | 0,
                add5L: (t, e, n, r, i) => (t >>> 0) + (e >>> 0) + (n >>> 0) + (r >>> 0) + (i >>> 0)
            };
            e.default = u
        },
        1867: function(t, e, n) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.decodeTokenMetadata = e.getSolanaMetadataAddress = e.createConnectionConfig = e.isValidSolanaAddress = e.resolveToWalletAddress = e.getParsedAccountByMint = e.getParsedNftAccountsByUpdateAuthority = e.getParsedNftAccountsByOwner = void 0;
            var r = n(3645);
            Object.defineProperty(e, "getParsedNftAccountsByOwner", {
                enumerable: !0,
                get: function() {
                    return r.getParsedNftAccountsByOwner
                }
            });
            var i = n(3650);
            Object.defineProperty(e, "getParsedNftAccountsByUpdateAuthority", {
                enumerable: !0,
                get: function() {
                    return i.getParsedNftAccountsByUpdateAuthority
                }
            });
            var o = n(3651);
            Object.defineProperty(e, "getParsedAccountByMint", {
                enumerable: !0,
                get: function() {
                    return o.getParsedAccountByMint
                }
            });
            var s = n(3652);
            Object.defineProperty(e, "resolveToWalletAddress", {
                enumerable: !0,
                get: function() {
                    return s.resolveToWalletAddress
                }
            });
            var a = n(505);
            Object.defineProperty(e, "isValidSolanaAddress", {
                enumerable: !0,
                get: function() {
                    return a.isValidSolanaAddress
                }
            }), Object.defineProperty(e, "createConnectionConfig", {
                enumerable: !0,
                get: function() {
                    return a.createConnectionConfig
                }
            }), Object.defineProperty(e, "getSolanaMetadataAddress", {
                enumerable: !0,
                get: function() {
                    return a.getSolanaMetadataAddress
                }
            }), Object.defineProperty(e, "decodeTokenMetadata", {
                enumerable: !0,
                get: function() {
                    return a.decodeTokenMetadata
                }
            })
        },
        1868: function(t, e, n) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.Metadata = e.METADATA_PROGRAM = e.METADATA_PREFIX = e.METADATA_SCHEMA = e.Data = e.Creator = e.MetadataKey = void 0;
            e.METADATA_PREFIX = "metadata";
            var r;
            e.METADATA_PROGRAM = "metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s",
                function(t) {
                    t[t.Uninitialized = 0] = "Uninitialized", t[t.MetadataV1 = 4] = "MetadataV1", t[t.EditionV1 = 1] = "EditionV1", t[t.MasterEditionV1 = 2] = "MasterEditionV1", t[t.MasterEditionV2 = 6] = "MasterEditionV2", t[t.EditionMarker = 7] = "EditionMarker"
                }(r = e.MetadataKey || (e.MetadataKey = {}));
            var i = function(t) {
                this.address = t.address, this.verified = t.verified, this.share = t.share
            };
            e.Creator = i;
            var o = function(t) {
                var e;
                this.key = r.MetadataV1, this.updateAuthority = t.updateAuthority, this.mint = t.mint, this.data = t.data, this.primarySaleHappened = t.primarySaleHappened, this.isMutable = t.isMutable, this.editionNonce = null !== (e = t.editionNonce) && void 0 !== e ? e : null
            };
            e.Metadata = o;
            var s = function(t) {
                this.name = t.name, this.symbol = t.symbol, this.uri = t.uri, this.sellerFeeBasisPoints = t.sellerFeeBasisPoints, this.creators = t.creators
            };
            e.Data = s;
            var a = new Map([
                [s, {
                    kind: "struct",
                    fields: [
                        ["name", "string"],
                        ["symbol", "string"],
                        ["uri", "string"],
                        ["sellerFeeBasisPoints", "u16"],
                        ["creators", {
                            kind: "option",
                            type: [i]
                        }]
                    ]
                }],
                [o, {
                    kind: "struct",
                    fields: [
                        ["key", "u8"],
                        ["updateAuthority", "pubkey"],
                        ["mint", "pubkey"],
                        ["data", s],
                        ["primarySaleHappened", "u8"],
                        ["isMutable", "u8"]
                    ]
                }],
                [i, {
                    kind: "struct",
                    fields: [
                        ["address", "pubkey"],
                        ["verified", "u8"],
                        ["share", "u8"]
                    ]
                }]
            ]);
            e.METADATA_SCHEMA = a
        },
        1869: function(t, e, n) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.TOKEN_PROGRAM = void 0, e.TOKEN_PROGRAM = "TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA"
        },
        251: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, "CURVE", (function() {
                return c
            })), n.d(e, "ExtendedPoint", (function() {
                return ExtendedPoint
            })), n.d(e, "RistrettoPoint", (function() {
                return RistrettoPoint
            })), n.d(e, "Point", (function() {
                return Point
            })), n.d(e, "Signature", (function() {
                return Signature
            })), n.d(e, "getPublicKey", (function() {
                return z
            })), n.d(e, "sign", (function() {
                return W
            })), n.d(e, "verify", (function() {
                return J
            })), n.d(e, "sync", (function() {
                return $
            })), n.d(e, "getSharedSecret", (function() {
                return Q
            })), n.d(e, "curve25519", (function() {
                return et
            })), n.d(e, "utils", (function() {
                return rt
            }));
            var r = n(24);
            const i = BigInt(0),
                o = BigInt(1),
                s = BigInt(2),
                a = BigInt(8),
                u = BigInt("7237005577332262213973186563042994240857116359379907606001950938285454250989"),
                c = Object.freeze({
                    a: BigInt(-1),
                    d: BigInt("37095705934669439343138083508754565189542113879843219016388785533085940283555"),
                    P: BigInt("57896044618658097711785492504343953926634992332820282019728792003956564819949"),
                    l: u,
                    n: u,
                    h: BigInt(8),
                    Gx: BigInt("15112221349535400772501151409588531511454012693041857206046113283949847762202"),
                    Gy: BigInt("46316835694926478169428394003475163141307993866256225615783033603165251855960")
                }),
                l = BigInt("0x10000000000000000000000000000000000000000000000000000000000000000"),
                f = BigInt("19681161376707505956807079304988542015446066515923890162744021073123829784752"),
                d = (BigInt("6853475219497561581579357271197624642482790079785650197046958215289687604742"), BigInt("25063068953384623474111414158702152701244531502492656460079210482610430750235")),
                h = BigInt("54469307008909316920995813868745141605393597292927456921205312896311721017578"),
                p = BigInt("1159843021668779879193775521855586647937357759715417654439879720876111806838"),
                y = BigInt("40440834346308536858101042469323190826248399146238708352240133220865137265952");
            class ExtendedPoint {
                constructor(t, e, n, r) {
                    this.x = t, this.y = e, this.z = n, this.t = r
                }
                static fromAffine(t) {
                    if (!(t instanceof Point)) throw new TypeError("ExtendedPoint#fromAffine: expected Point");
                    return t.equals(Point.ZERO) ? ExtendedPoint.ZERO : new ExtendedPoint(t.x, t.y, o, C(t.x * t.y))
                }
                static toAffineBatch(t) {
                    const e = function(t, e = c.P) {
                        const n = new Array(t.length),
                            r = T(t.reduce((t, r, o) => r === i ? t : (n[o] = t, C(t * r, e)), o), e);
                        return t.reduceRight((t, r, o) => r === i ? t : (n[o] = C(t * n[o], e), C(t * r, e)), r), n
                    }(t.map(t => t.z));
                    return t.map((t, n) => t.toAffine(e[n]))
                }
                static normalizeZ(t) {
                    return this.toAffineBatch(t).map(this.fromAffine)
                }
                equals(t) {
                    v(t);
                    const {
                        x: e,
                        y: n,
                        z: r
                    } = this, {
                        x: i,
                        y: o,
                        z: s
                    } = t, a = C(e * s), u = C(i * r), c = C(n * s), l = C(o * r);
                    return a === u && c === l
                }
                negate() {
                    return new ExtendedPoint(C(-this.x), this.y, this.z, C(-this.t))
                }
                double() {
                    const {
                        x: t,
                        y: e,
                        z: n
                    } = this, {
                        a: r
                    } = c, i = C(t * t), o = C(e * e), a = C(s * C(n * n)), u = C(r * i), l = t + e, f = C(C(l * l) - i - o), d = u + o, h = d - a, p = u - o, y = C(f * h), b = C(d * p), v = C(f * p), w = C(h * d);
                    return new ExtendedPoint(y, b, w, v)
                }
                add(t) {
                    v(t);
                    const {
                        x: e,
                        y: n,
                        z: r,
                        t: o
                    } = this, {
                        x: a,
                        y: u,
                        z: c,
                        t: l
                    } = t, f = C((n - e) * (u + a)), d = C((n + e) * (u - a)), h = C(d - f);
                    if (h === i) return this.double();
                    const p = C(r * s * l),
                        y = C(o * s * c),
                        b = y + p,
                        w = d + f,
                        E = y - p,
                        A = C(b * h),
                        g = C(w * E),
                        _ = C(b * E),
                        m = C(h * w);
                    return new ExtendedPoint(A, g, m, _)
                }
                subtract(t) {
                    return this.add(t.negate())
                }
                precomputeWindow(t) {
                    const e = 1 + 256 / t,
                        n = [];
                    let r = this,
                        i = r;
                    for (let o = 0; o < e; o++) {
                        i = r, n.push(i);
                        for (let e = 1; e < 2 ** (t - 1); e++) i = i.add(r), n.push(i);
                        r = i.double()
                    }
                    return n
                }
                wNAF(t, e) {
                    !e && this.equals(ExtendedPoint.BASE) && (e = Point.BASE);
                    const n = e && e._WINDOW_SIZE || 1;
                    if (256 % n) throw new Error("Point#wNAF: Invalid precomputation window, must be power of 2");
                    let r = e && A.get(e);
                    r || (r = this.precomputeWindow(n), e && 1 !== n && (r = ExtendedPoint.normalizeZ(r), A.set(e, r)));
                    let i = ExtendedPoint.ZERO,
                        s = ExtendedPoint.BASE;
                    const a = 1 + 256 / n,
                        u = 2 ** (n - 1),
                        c = BigInt(2 ** n - 1),
                        l = 2 ** n,
                        f = BigInt(n);
                    for (let e = 0; e < a; e++) {
                        const n = e * u;
                        let a = Number(t & c);
                        t >>= f, a > u && (a -= l, t += o);
                        const d = n,
                            h = n + Math.abs(a) - 1,
                            p = e % 2 != 0,
                            y = a < 0;
                        0 === a ? s = s.add(b(p, r[d])) : i = i.add(b(y, r[h]))
                    }
                    return ExtendedPoint.normalizeZ([i, s])[0]
                }
                multiply(t, e) {
                    return this.wNAF(D(t, c.l), e)
                }
                multiplyUnsafe(t) {
                    let e = D(t, c.l, !1);
                    const n = ExtendedPoint.BASE,
                        r = ExtendedPoint.ZERO;
                    if (e === i) return r;
                    if (this.equals(r) || e === o) return this;
                    if (this.equals(n)) return this.wNAF(e);
                    let s = r,
                        a = this;
                    for (; e > i;) e & o && (s = s.add(a)), a = a.double(), e >>= o;
                    return s
                }
                isSmallOrder() {
                    return this.multiplyUnsafe(c.h).equals(ExtendedPoint.ZERO)
                }
                isTorsionFree() {
                    let t = this.multiplyUnsafe(c.l / s).double();
                    return c.l % s && (t = t.add(this)), t.equals(ExtendedPoint.ZERO)
                }
                toAffine(t) {
                    const {
                        x: e,
                        y: n,
                        z: r
                    } = this, i = this.equals(ExtendedPoint.ZERO);
                    null == t && (t = i ? a : T(r));
                    const s = C(e * t),
                        u = C(n * t),
                        c = C(r * t);
                    if (i) return Point.ZERO;
                    if (c !== o) throw new Error("invZ was invalid");
                    return new Point(s, u)
                }
                fromRistrettoBytes() {
                    E()
                }
                toRistrettoBytes() {
                    E()
                }
                fromRistrettoHash() {
                    E()
                }
            }

            function b(t, e) {
                const n = e.negate();
                return t ? n : e
            }

            function v(t) {
                if (!(t instanceof ExtendedPoint)) throw new TypeError("ExtendedPoint expected")
            }

            function w(t) {
                if (!(t instanceof RistrettoPoint)) throw new TypeError("RistrettoPoint expected")
            }

            function E() {
                throw new Error("Legacy method: switch to RistrettoPoint")
            }
            ExtendedPoint.BASE = new ExtendedPoint(c.Gx, c.Gy, o, C(c.Gx * c.Gy)), ExtendedPoint.ZERO = new ExtendedPoint(i, o, o, i);
            class RistrettoPoint {
                constructor(t) {
                    this.ep = t
                }
                static calcElligatorRistrettoMap(t) {
                    const {
                        d: e
                    } = c, n = C(f * t * t), r = C((n + o) * p);
                    let i = BigInt(-1);
                    const s = C((i - e * n) * C(n + e));
                    let {
                        isValid: a,
                        value: u
                    } = O(r, s), l = C(u * t);
                    B(l) || (l = C(-l)), a || (u = l), a || (i = n);
                    const h = C(i * (n - o) * y - s),
                        b = u * u,
                        v = C((u + u) * s),
                        w = C(h * d),
                        E = C(o - b),
                        A = C(o + b);
                    return new ExtendedPoint(C(v * A), C(E * w), C(w * A), C(v * E))
                }
                static hashToCurve(t) {
                    const e = k((t = M(t, 64)).slice(0, 32)),
                        n = this.calcElligatorRistrettoMap(e),
                        r = k(t.slice(32, 64)),
                        i = this.calcElligatorRistrettoMap(r);
                    return new RistrettoPoint(n.add(i))
                }
                static fromHex(t) {
                    t = M(t, 32);
                    const {
                        a: e,
                        d: n
                    } = c, r = "RistrettoPoint.fromHex: the hex is not valid encoding of RistrettoPoint", s = k(t);
                    if (! function(t, e) {
                            if (t.length !== e.length) return !1;
                            for (let n = 0; n < t.length; n++)
                                if (t[n] !== e[n]) return !1;
                            return !0
                        }(I(s), t) || B(s)) throw new Error(r);
                    const a = C(s * s),
                        u = C(o + e * a),
                        l = C(o - e * a),
                        f = C(u * u),
                        d = C(l * l),
                        h = C(e * n * f - d),
                        {
                            isValid: p,
                            value: y
                        } = U(C(h * d)),
                        b = C(y * l),
                        v = C(y * b * h);
                    let w = C((s + s) * b);
                    B(w) && (w = C(-w));
                    const E = C(u * v),
                        A = C(w * E);
                    if (!p || B(A) || E === i) throw new Error(r);
                    return new RistrettoPoint(new ExtendedPoint(w, E, o, A))
                }
                toRawBytes() {
                    let {
                        x: t,
                        y: e,
                        z: n,
                        t: r
                    } = this.ep;
                    const i = C(C(n + e) * C(n - e)),
                        o = C(t * e),
                        s = C(o * o),
                        {
                            value: a
                        } = U(C(i * s)),
                        u = C(a * i),
                        c = C(a * o),
                        l = C(u * c * r);
                    let d;
                    if (B(r * l)) {
                        let n = C(e * f),
                            r = C(t * f);
                        t = n, e = r, d = C(u * h)
                    } else d = c;
                    B(t * l) && (e = C(-e));
                    let p = C((n - e) * d);
                    return B(p) && (p = C(-p)), I(p)
                }
                toHex() {
                    return m(this.toRawBytes())
                }
                toString() {
                    return this.toHex()
                }
                equals(t) {
                    w(t);
                    const e = this.ep,
                        n = t.ep,
                        r = C(e.x * n.y) === C(e.y * n.x),
                        i = C(e.y * n.y) === C(e.x * n.x);
                    return r || i
                }
                add(t) {
                    return w(t), new RistrettoPoint(this.ep.add(t.ep))
                }
                subtract(t) {
                    return w(t), new RistrettoPoint(this.ep.subtract(t.ep))
                }
                multiply(t) {
                    return new RistrettoPoint(this.ep.multiply(t))
                }
                multiplyUnsafe(t) {
                    return new RistrettoPoint(this.ep.multiplyUnsafe(t))
                }
            }
            RistrettoPoint.BASE = new RistrettoPoint(ExtendedPoint.BASE), RistrettoPoint.ZERO = new RistrettoPoint(ExtendedPoint.ZERO);
            const A = new WeakMap;
            class Point {
                constructor(t, e) {
                    this.x = t, this.y = e
                }
                _setWindowSize(t) {
                    this._WINDOW_SIZE = t, A.delete(this)
                }
                static fromHex(t, e = !0) {
                    const {
                        d: n,
                        P: r
                    } = c, i = (t = M(t, 32)).slice();
                    i[31] = -129 & t[31];
                    const s = S(i);
                    if (e && s >= r) throw new Error("Expected 0 < hex < P");
                    if (!e && s >= l) throw new Error("Expected 0 < hex < 2**256");
                    const a = C(s * s),
                        u = C(a - o),
                        f = C(n * a + o);
                    let {
                        isValid: d,
                        value: h
                    } = O(u, f);
                    if (!d) throw new Error("Point.fromHex: invalid y coordinate");
                    const p = (h & o) === o;
                    return 0 != (128 & t[31]) !== p && (h = C(-h)), new Point(h, s)
                }
                static async fromPrivateKey(t) {
                    return (await Y(t)).point
                }
                toRawBytes() {
                    const t = I(this.y);
                    return t[31] |= this.x & o ? 128 : 0, t
                }
                toHex() {
                    return m(this.toRawBytes())
                }
                toX25519() {
                    const {
                        y: t
                    } = this;
                    return I(C((o + t) * T(o - t)))
                }
                isTorsionFree() {
                    return ExtendedPoint.fromAffine(this).isTorsionFree()
                }
                equals(t) {
                    return this.x === t.x && this.y === t.y
                }
                negate() {
                    return new Point(C(-this.x), this.y)
                }
                add(t) {
                    return ExtendedPoint.fromAffine(this).add(ExtendedPoint.fromAffine(t)).toAffine()
                }
                subtract(t) {
                    return this.add(t.negate())
                }
                multiply(t) {
                    return ExtendedPoint.fromAffine(this).multiply(t, this).toAffine()
                }
            }
            Point.BASE = new Point(c.Gx, c.Gy), Point.ZERO = new Point(i, o);
            class Signature {
                constructor(t, e) {
                    this.r = t, this.s = e, this.assertValidity()
                }
                static fromHex(t) {
                    const e = M(t, 64),
                        n = Point.fromHex(e.slice(0, 32), !1),
                        r = S(e.slice(32, 64));
                    return new Signature(n, r)
                }
                assertValidity() {
                    const {
                        r: t,
                        s: e
                    } = this;
                    if (!(t instanceof Point)) throw new Error("Expected Point instance");
                    return D(e, c.l, !1), this
                }
                toRawBytes() {
                    const t = new Uint8Array(64);
                    return t.set(this.r.toRawBytes()), t.set(I(this.s), 32), t
                }
                toHex() {
                    return m(this.toRawBytes())
                }
            }

            function g(...t) {
                if (!t.every(t => t instanceof Uint8Array)) throw new Error("Expected Uint8Array list");
                if (1 === t.length) return t[0];
                const e = t.reduce((t, e) => t + e.length, 0),
                    n = new Uint8Array(e);
                for (let e = 0, r = 0; e < t.length; e++) {
                    const i = t[e];
                    n.set(i, r), r += i.length
                }
                return n
            }
            const _ = Array.from({
                length: 256
            }, (t, e) => e.toString(16).padStart(2, "0"));

            function m(t) {
                if (!(t instanceof Uint8Array)) throw new Error("Uint8Array expected");
                let e = "";
                for (let n = 0; n < t.length; n++) e += _[t[n]];
                return e
            }

            function x(t) {
                if ("string" != typeof t) throw new TypeError("hexToBytes: expected string, got " + typeof t);
                if (t.length % 2) throw new Error("hexToBytes: received invalid unpadded hex");
                const e = new Uint8Array(t.length / 2);
                for (let n = 0; n < e.length; n++) {
                    const r = 2 * n,
                        i = t.slice(r, r + 2),
                        o = Number.parseInt(i, 16);
                    if (Number.isNaN(o) || o < 0) throw new Error("Invalid byte sequence");
                    e[n] = o
                }
                return e
            }

            function P(t) {
                return x(t.toString(16).padStart(64, "0"))
            }

            function I(t) {
                return P(t).reverse()
            }

            function B(t) {
                return (C(t) & o) === o
            }

            function S(t) {
                if (!(t instanceof Uint8Array)) throw new Error("Expected Uint8Array");
                return BigInt("0x" + m(Uint8Array.from(t).reverse()))
            }
            const L = BigInt("0x7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff");

            function k(t) {
                return C(S(t) & L)
            }

            function C(t, e = c.P) {
                const n = t % e;
                return n >= i ? n : e + n
            }

            function T(t, e = c.P) {
                if (t === i || e <= i) throw new Error(`invert: expected positive integers, got n=${t} mod=${e}`);
                let n = C(t, e),
                    r = e,
                    s = i,
                    a = o,
                    u = o,
                    l = i;
                for (; n !== i;) {
                    const t = r / n,
                        e = r % n,
                        i = s - u * t,
                        o = a - l * t;
                    r = n, n = e, s = u, a = l, u = i, l = o
                }
                if (r !== o) throw new Error("invert: does not exist");
                return C(s, e)
            }

            function R(t, e) {
                const {
                    P: n
                } = c;
                let r = t;
                for (; e-- > i;) r *= r, r %= n;
                return r
            }

            function H(t) {
                const {
                    P: e
                } = c, n = BigInt(5), r = BigInt(10), i = BigInt(20), a = BigInt(40), u = BigInt(80), l = t * t % e * t % e, f = R(l, s) * l % e, d = R(f, o) * t % e, h = R(d, n) * d % e, p = R(h, r) * h % e, y = R(p, i) * p % e, b = R(y, a) * y % e, v = R(b, u) * b % e, w = R(v, u) * b % e, E = R(w, r) * h % e;
                return {
                    pow_p_5_8: R(E, s) * t % e,
                    b2: l
                }
            }

            function O(t, e) {
                const n = C(e * e * e),
                    r = C(n * n * e);
                let i = C(t * n * H(t * r).pow_p_5_8);
                const o = C(e * i * i),
                    s = i,
                    a = C(i * f),
                    u = o === t,
                    c = o === C(-t),
                    l = o === C(-t * f);
                return u && (i = s), (c || l) && (i = a), B(i) && (i = C(-i)), {
                    isValid: u || c,
                    value: i
                }
            }

            function U(t) {
                return O(o, t)
            }

            function K(t) {
                return C(S(t), c.l)
            }

            function M(t, e) {
                const n = t instanceof Uint8Array ? Uint8Array.from(t) : x(t);
                if ("number" == typeof e && n.length !== e) throw new Error(`Expected ${e} bytes`);
                return n
            }

            function D(t, e, n = !0) {
                if (!e) throw new TypeError("Specify max value");
                if ("number" == typeof t && Number.isSafeInteger(t) && (t = BigInt(t)), "bigint" == typeof t && t < e)
                    if (n) {
                        if (i < t) return t
                    } else if (i <= t) return t;
                throw new TypeError("Expected valid scalar: 0 < scalar < max")
            }

            function N(t) {
                return t[0] &= 248, t[31] &= 127, t[31] |= 64, t
            }

            function F(t) {
                if (32 !== (t = "bigint" == typeof t || "number" == typeof t ? P(D(t, l)) : M(t)).length) throw new Error("Expected 32 bytes");
                return t
            }

            function V(t) {
                const e = N(t.slice(0, 32)),
                    n = t.slice(32, 64),
                    r = K(e),
                    i = Point.BASE.multiply(r),
                    o = i.toRawBytes();
                return {
                    head: e,
                    prefix: n,
                    scalar: r,
                    point: i,
                    pointBytes: o
                }
            }
            let G;

            function j(...t) {
                if ("function" != typeof G) throw new Error("utils.sha512Sync must be set to use sync methods");
                return G(...t)
            }
            async function Y(t) {
                return V(await rt.sha512(F(t)))
            }

            function Z(t) {
                return V(j(F(t)))
            }
            async function z(t) {
                return (await Y(t)).pointBytes
            }
            async function W(t, e) {
                t = M(t);
                const {
                    prefix: n,
                    scalar: r,
                    pointBytes: i
                } = await Y(e), o = K(await rt.sha512(n, t)), s = Point.BASE.multiply(o), a = C(o + K(await rt.sha512(s.toRawBytes(), i, t)) * r, c.l);
                return new Signature(s, a).toRawBytes()
            }

            function q(t, e, n) {
                e = M(e), n instanceof Point || (n = Point.fromHex(n, !1));
                const {
                    r: r,
                    s: i
                } = t instanceof Signature ? t.assertValidity() : Signature.fromHex(t);
                return {
                    r: r,
                    s: i,
                    SB: ExtendedPoint.BASE.multiplyUnsafe(i),
                    pub: n,
                    msg: e
                }
            }

            function X(t, e, n, r) {
                const i = K(r),
                    o = ExtendedPoint.fromAffine(t).multiplyUnsafe(i);
                return ExtendedPoint.fromAffine(e).add(o).subtract(n).multiplyUnsafe(c.h).equals(ExtendedPoint.ZERO)
            }
            async function J(t, e, n) {
                const {
                    r: r,
                    SB: i,
                    msg: o,
                    pub: s
                } = q(t, e, n), a = await rt.sha512(r.toRawBytes(), s.toRawBytes(), o);
                return X(s, r, i, a)
            }
            const $ = {
                getExtendedPublicKey: Z,
                getPublicKey: function(t) {
                    return Z(t).pointBytes
                },
                sign: function(t, e) {
                    t = M(t);
                    const {
                        prefix: n,
                        scalar: r,
                        pointBytes: i
                    } = Z(e), o = K(j(n, t)), s = Point.BASE.multiply(o), a = C(o + K(j(s.toRawBytes(), i, t)) * r, c.l);
                    return new Signature(s, a).toRawBytes()
                },
                verify: function(t, e, n) {
                    const {
                        r: r,
                        SB: i,
                        msg: o,
                        pub: s
                    } = q(t, e, n), a = j(r.toRawBytes(), s.toRawBytes(), o);
                    return X(s, r, i, a)
                }
            };
            async function Q(t, e) {
                const {
                    head: n
                } = await Y(t), r = Point.fromHex(e).toX25519();
                return et.scalarMult(n, r)
            }

            function tt(t, e, n) {
                const r = C(t * (e - n));
                return [e = C(e - r), n = C(n + r)]
            }
            Point.BASE._setWindowSize(8);
            const et = {
                    BASE_POINT_U: "0900000000000000000000000000000000000000000000000000000000000000",
                    scalarMult(t, e) {
                        const n = function(t, e) {
                            const {
                                P: n
                            } = c, r = D(t, n), s = D(e, n), a = BigInt(121665), u = r;
                            let l, f = o,
                                d = i,
                                h = r,
                                p = o,
                                y = i;
                            for (let t = BigInt(254); t >= i; t--) {
                                const e = s >> t & o;
                                y ^= e, l = tt(y, f, h), f = l[0], h = l[1], l = tt(y, d, p), d = l[0], p = l[1], y = e;
                                const n = f + d,
                                    r = C(n * n),
                                    i = f - d,
                                    c = C(i * i),
                                    b = r - c,
                                    v = h + p,
                                    w = C((h - p) * n),
                                    E = C(v * i),
                                    A = w + E,
                                    g = w - E;
                                h = C(A * A), p = C(u * C(g * g)), f = C(r * c), d = C(b * (r + C(a * b)))
                            }
                            l = tt(y, f, h), f = l[0], h = l[1], l = tt(y, d, p), d = l[0], p = l[1];
                            const {
                                pow_p_5_8: b,
                                b2: v
                            } = H(d), w = C(R(b, BigInt(3)) * v);
                            return C(f * w)
                        }(function(t) {
                            const e = M(t, 32);
                            return e[31] &= 127, S(e)
                        }(e), S(N(M(t, 32))));
                        if (n === i) throw new Error("Invalid private or public key received");
                        return function(t) {
                            return I(C(t, c.P))
                        }(n)
                    },
                    scalarMultBase: t => et.scalarMult(t, et.BASE_POINT_U)
                },
                nt = {
                    node: r,
                    web: "object" == typeof self && "crypto" in self ? self.crypto : void 0
                },
                rt = {
                    bytesToHex: m,
                    hexToBytes: x,
                    concatBytes: g,
                    getExtendedPublicKey: Y,
                    mod: C,
                    invert: T,
                    TORSION_SUBGROUP: ["0100000000000000000000000000000000000000000000000000000000000000", "c7176a703d4dd84fba3c0b760d10670f2a2053fa2c39ccc64ec7fd7792ac037a", "0000000000000000000000000000000000000000000000000000000000000080", "26e8958fc2b227b045c3f489f2ef98f0d5dfac05d3c63339b13802886d53fc05", "ecffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f", "26e8958fc2b227b045c3f489f2ef98f0d5dfac05d3c63339b13802886d53fc85", "0000000000000000000000000000000000000000000000000000000000000000", "c7176a703d4dd84fba3c0b760d10670f2a2053fa2c39ccc64ec7fd7792ac03fa"],
                    hashToPrivateScalar: t => {
                        if ((t = M(t)).length < 40 || t.length > 1024) throw new Error("Expected 40-1024 bytes of private key as per FIPS 186");
                        return C(S(t), c.l - o) + o
                    },
                    randomBytes: (t = 32) => {
                        if (nt.web) return nt.web.getRandomValues(new Uint8Array(t));
                        if (nt.node) {
                            const {
                                randomBytes: e
                            } = nt.node;
                            return new Uint8Array(e(t).buffer)
                        }
                        throw new Error("The environment doesn't have randomBytes function")
                    },
                    randomPrivateKey: () => rt.randomBytes(32),
                    sha512: async (...t) => {
                        const e = g(...t);
                        if (nt.web) {
                            const t = await nt.web.subtle.digest("SHA-512", e.buffer);
                            return new Uint8Array(t)
                        }
                        if (nt.node) return Uint8Array.from(nt.node.createHash("sha512").update(e).digest());
                        throw new Error("The environment doesn't have sha512 function")
                    },
                    precompute(t = 8, e = Point.BASE) {
                        const n = e.equals(Point.BASE) ? e : new Point(e.x, e.y);
                        return n._setWindowSize(t), n.multiply(s), n
                    },
                    sha512Sync: void 0
                };
            Object.defineProperties(rt, {
                sha512Sync: {
                    configurable: !1,
                    get: () => G,
                    set(t) {
                        G || (G = t)
                    }
                }
            })
        },
        2572: function(t, e, n) {
            "use strict";
            t.exports = function(t, e) {
                var n = new Array(arguments.length - 1),
                    r = 0,
                    i = 2,
                    o = !0;
                for (; i < arguments.length;) n[r++] = arguments[i++];
                return new Promise((function(i, s) {
                    n[r] = function(t) {
                        if (o)
                            if (o = !1, t) s(t);
                            else {
                                for (var e = new Array(arguments.length - 1), n = 0; n < e.length;) e[n++] = arguments[n];
                                i.apply(null, e)
                            }
                    };
                    try {
                        t.apply(e || null, n)
                    } catch (t) {
                        o && (o = !1, s(t))
                    }
                }))
            }
        },
        2573: function(t, e, n) {
            "use strict";
            var r = e;
            r.length = function(t) {
                var e = t.length;
                if (!e) return 0;
                for (var n = 0; --e % 4 > 1 && "=" === t.charAt(e);) ++n;
                return Math.ceil(3 * t.length) / 4 - n
            };
            for (var i = new Array(64), o = new Array(123), s = 0; s < 64;) o[i[s] = s < 26 ? s + 65 : s < 52 ? s + 71 : s < 62 ? s - 4 : s - 59 | 43] = s++;
            r.encode = function(t, e, n) {
                for (var r, o = null, s = [], a = 0, u = 0; e < n;) {
                    var c = t[e++];
                    switch (u) {
                        case 0:
                            s[a++] = i[c >> 2], r = (3 & c) << 4, u = 1;
                            break;
                        case 1:
                            s[a++] = i[r | c >> 4], r = (15 & c) << 2, u = 2;
                            break;
                        case 2:
                            s[a++] = i[r | c >> 6], s[a++] = i[63 & c], u = 0
                    }
                    a > 8191 && ((o || (o = [])).push(String.fromCharCode.apply(String, s)), a = 0)
                }
                return u && (s[a++] = i[r], s[a++] = 61, 1 === u && (s[a++] = 61)), o ? (a && o.push(String.fromCharCode.apply(String, s.slice(0, a))), o.join("")) : String.fromCharCode.apply(String, s.slice(0, a))
            };
            r.decode = function(t, e, n) {
                for (var r, i = n, s = 0, a = 0; a < t.length;) {
                    var u = t.charCodeAt(a++);
                    if (61 === u && s > 1) break;
                    if (void 0 === (u = o[u])) throw Error("invalid encoding");
                    switch (s) {
                        case 0:
                            r = u, s = 1;
                            break;
                        case 1:
                            e[n++] = r << 2 | (48 & u) >> 4, r = u, s = 2;
                            break;
                        case 2:
                            e[n++] = (15 & r) << 4 | (60 & u) >> 2, r = u, s = 3;
                            break;
                        case 3:
                            e[n++] = (3 & r) << 6 | u, s = 0
                    }
                }
                if (1 === s) throw Error("invalid encoding");
                return n - i
            }, r.test = function(t) {
                return /^(?:[A-Za-z0-9+/]{4})*(?:[A-Za-z0-9+/]{2}==|[A-Za-z0-9+/]{3}=)?$/.test(t)
            }
        },
        2574: function(t, e, n) {
            "use strict";

            function r() {
                this._listeners = {}
            }
            t.exports = r, r.prototype.on = function(t, e, n) {
                return (this._listeners[t] || (this._listeners[t] = [])).push({
                    fn: e,
                    ctx: n || this
                }), this
            }, r.prototype.off = function(t, e) {
                if (void 0 === t) this._listeners = {};
                else if (void 0 === e) this._listeners[t] = [];
                else
                    for (var n = this._listeners[t], r = 0; r < n.length;) n[r].fn === e ? n.splice(r, 1) : ++r;
                return this
            }, r.prototype.emit = function(t) {
                var e = this._listeners[t];
                if (e) {
                    for (var n = [], r = 1; r < arguments.length;) n.push(arguments[r++]);
                    for (r = 0; r < e.length;) e[r].fn.apply(e[r++].ctx, n)
                }
                return this
            }
        },
        2575: function(t, e, n) {
            "use strict";

            function r(t) {
                return "undefined" != typeof Float32Array ? function() {
                    var e = new Float32Array([-0]),
                        n = new Uint8Array(e.buffer),
                        r = 128 === n[3];

                    function i(t, r, i) {
                        e[0] = t, r[i] = n[0], r[i + 1] = n[1], r[i + 2] = n[2], r[i + 3] = n[3]
                    }

                    function o(t, r, i) {
                        e[0] = t, r[i] = n[3], r[i + 1] = n[2], r[i + 2] = n[1], r[i + 3] = n[0]
                    }

                    function s(t, r) {
                        return n[0] = t[r], n[1] = t[r + 1], n[2] = t[r + 2], n[3] = t[r + 3], e[0]
                    }

                    function a(t, r) {
                        return n[3] = t[r], n[2] = t[r + 1], n[1] = t[r + 2], n[0] = t[r + 3], e[0]
                    }
                    t.writeFloatLE = r ? i : o, t.writeFloatBE = r ? o : i, t.readFloatLE = r ? s : a, t.readFloatBE = r ? a : s
                }() : function() {
                    function e(t, e, n, r) {
                        var i = e < 0 ? 1 : 0;
                        if (i && (e = -e), 0 === e) t(1 / e > 0 ? 0 : 2147483648, n, r);
                        else if (isNaN(e)) t(2143289344, n, r);
                        else if (e > 34028234663852886e22) t((i << 31 | 2139095040) >>> 0, n, r);
                        else if (e < 11754943508222875e-54) t((i << 31 | Math.round(e / 1401298464324817e-60)) >>> 0, n, r);
                        else {
                            var o = Math.floor(Math.log(e) / Math.LN2);
                            t((i << 31 | o + 127 << 23 | 8388607 & Math.round(e * Math.pow(2, -o) * 8388608)) >>> 0, n, r)
                        }
                    }

                    function n(t, e, n) {
                        var r = t(e, n),
                            i = 2 * (r >> 31) + 1,
                            o = r >>> 23 & 255,
                            s = 8388607 & r;
                        return 255 === o ? s ? NaN : i * (1 / 0) : 0 === o ? 1401298464324817e-60 * i * s : i * Math.pow(2, o - 150) * (s + 8388608)
                    }
                    t.writeFloatLE = e.bind(null, i), t.writeFloatBE = e.bind(null, o), t.readFloatLE = n.bind(null, s), t.readFloatBE = n.bind(null, a)
                }(), "undefined" != typeof Float64Array ? function() {
                    var e = new Float64Array([-0]),
                        n = new Uint8Array(e.buffer),
                        r = 128 === n[7];

                    function i(t, r, i) {
                        e[0] = t, r[i] = n[0], r[i + 1] = n[1], r[i + 2] = n[2], r[i + 3] = n[3], r[i + 4] = n[4], r[i + 5] = n[5], r[i + 6] = n[6], r[i + 7] = n[7]
                    }

                    function o(t, r, i) {
                        e[0] = t, r[i] = n[7], r[i + 1] = n[6], r[i + 2] = n[5], r[i + 3] = n[4], r[i + 4] = n[3], r[i + 5] = n[2], r[i + 6] = n[1], r[i + 7] = n[0]
                    }

                    function s(t, r) {
                        return n[0] = t[r], n[1] = t[r + 1], n[2] = t[r + 2], n[3] = t[r + 3], n[4] = t[r + 4], n[5] = t[r + 5], n[6] = t[r + 6], n[7] = t[r + 7], e[0]
                    }

                    function a(t, r) {
                        return n[7] = t[r], n[6] = t[r + 1], n[5] = t[r + 2], n[4] = t[r + 3], n[3] = t[r + 4], n[2] = t[r + 5], n[1] = t[r + 6], n[0] = t[r + 7], e[0]
                    }
                    t.writeDoubleLE = r ? i : o, t.writeDoubleBE = r ? o : i, t.readDoubleLE = r ? s : a, t.readDoubleBE = r ? a : s
                }() : function() {
                    function e(t, e, n, r, i, o) {
                        var s = r < 0 ? 1 : 0;
                        if (s && (r = -r), 0 === r) t(0, i, o + e), t(1 / r > 0 ? 0 : 2147483648, i, o + n);
                        else if (isNaN(r)) t(0, i, o + e), t(2146959360, i, o + n);
                        else if (r > 17976931348623157e292) t(0, i, o + e), t((s << 31 | 2146435072) >>> 0, i, o + n);
                        else {
                            var a;
                            if (r < 22250738585072014e-324) t((a = r / 5e-324) >>> 0, i, o + e), t((s << 31 | a / 4294967296) >>> 0, i, o + n);
                            else {
                                var u = Math.floor(Math.log(r) / Math.LN2);
                                1024 === u && (u = 1023), t(4503599627370496 * (a = r * Math.pow(2, -u)) >>> 0, i, o + e), t((s << 31 | u + 1023 << 20 | 1048576 * a & 1048575) >>> 0, i, o + n)
                            }
                        }
                    }

                    function n(t, e, n, r, i) {
                        var o = t(r, i + e),
                            s = t(r, i + n),
                            a = 2 * (s >> 31) + 1,
                            u = s >>> 20 & 2047,
                            c = 4294967296 * (1048575 & s) + o;
                        return 2047 === u ? c ? NaN : a * (1 / 0) : 0 === u ? 5e-324 * a * c : a * Math.pow(2, u - 1075) * (c + 4503599627370496)
                    }
                    t.writeDoubleLE = e.bind(null, i, 0, 4), t.writeDoubleBE = e.bind(null, o, 4, 0), t.readDoubleLE = n.bind(null, s, 0, 4), t.readDoubleBE = n.bind(null, a, 4, 0)
                }(), t
            }

            function i(t, e, n) {
                e[n] = 255 & t, e[n + 1] = t >>> 8 & 255, e[n + 2] = t >>> 16 & 255, e[n + 3] = t >>> 24
            }

            function o(t, e, n) {
                e[n] = t >>> 24, e[n + 1] = t >>> 16 & 255, e[n + 2] = t >>> 8 & 255, e[n + 3] = 255 & t
            }

            function s(t, e) {
                return (t[e] | t[e + 1] << 8 | t[e + 2] << 16 | t[e + 3] << 24) >>> 0
            }

            function a(t, e) {
                return (t[e] << 24 | t[e + 1] << 16 | t[e + 2] << 8 | t[e + 3]) >>> 0
            }
            t.exports = r(r)
        },
        2576: function(module, exports, __webpack_require__) {
            "use strict";

            function inquire(moduleName) {
                try {
                    var mod = eval("quire".replace(/^/, "re"))(moduleName);
                    if (mod && (mod.length || Object.keys(mod).length)) return mod
                } catch (t) {}
                return null
            }
            module.exports = inquire
        },
        2577: function(t, e, n) {
            "use strict";
            var r = e;
            r.length = function(t) {
                for (var e = 0, n = 0, r = 0; r < t.length; ++r)(n = t.charCodeAt(r)) < 128 ? e += 1 : n < 2048 ? e += 2 : 55296 == (64512 & n) && 56320 == (64512 & t.charCodeAt(r + 1)) ? (++r, e += 4) : e += 3;
                return e
            }, r.read = function(t, e, n) {
                if (n - e < 1) return "";
                for (var r, i = null, o = [], s = 0; e < n;)(r = t[e++]) < 128 ? o[s++] = r : r > 191 && r < 224 ? o[s++] = (31 & r) << 6 | 63 & t[e++] : r > 239 && r < 365 ? (r = ((7 & r) << 18 | (63 & t[e++]) << 12 | (63 & t[e++]) << 6 | 63 & t[e++]) - 65536, o[s++] = 55296 + (r >> 10), o[s++] = 56320 + (1023 & r)) : o[s++] = (15 & r) << 12 | (63 & t[e++]) << 6 | 63 & t[e++], s > 8191 && ((i || (i = [])).push(String.fromCharCode.apply(String, o)), s = 0);
                return i ? (s && i.push(String.fromCharCode.apply(String, o.slice(0, s))), i.join("")) : String.fromCharCode.apply(String, o.slice(0, s))
            }, r.write = function(t, e, n) {
                for (var r, i, o = n, s = 0; s < t.length; ++s)(r = t.charCodeAt(s)) < 128 ? e[n++] = r : r < 2048 ? (e[n++] = r >> 6 | 192, e[n++] = 63 & r | 128) : 55296 == (64512 & r) && 56320 == (64512 & (i = t.charCodeAt(s + 1))) ? (r = 65536 + ((1023 & r) << 10) + (1023 & i), ++s, e[n++] = r >> 18 | 240, e[n++] = r >> 12 & 63 | 128, e[n++] = r >> 6 & 63 | 128, e[n++] = 63 & r | 128) : (e[n++] = r >> 12 | 224, e[n++] = r >> 6 & 63 | 128, e[n++] = 63 & r | 128);
                return n - o
            }
        },
        2578: function(t, e, n) {
            "use strict";
            t.exports = function(t, e, n) {
                var r = n || 8192,
                    i = r >>> 1,
                    o = null,
                    s = r;
                return function(n) {
                    if (n < 1 || n > i) return t(n);
                    s + n > r && (o = t(r), s = 0);
                    var a = e.call(o, s, s += n);
                    return 7 & s && (s = 1 + (7 | s)), a
                }
            }
        },
        2726: function(t, e, n) {
            var r = n(72),
                i = n(21).Buffer,
                o = n(24),
                s = n(2727),
                a = n(2729),
                u = i.from("Nist256p1 seed", "utf8"),
                c = {
                    private: 76066276,
                    public: 76067358
                };

            function l(t) {
                this.versions = t || c, this.depth = 0, this.index = 0, this._privateKey = null, this._publicKey = null, this.chainCode = null, this._fingerprint = 0, this.parentFingerprint = 0
            }

            function f(t, e, n) {
                var r = i.allocUnsafe(78);
                r.writeUInt32BE(e, 0), r.writeUInt8(t.depth, 4);
                var o = t.depth ? t.parentFingerprint : 0;
                return r.writeUInt32BE(o, 5), r.writeUInt32BE(t.index, 9), t.chainCode.copy(r, 13), n.copy(r, 45), r
            }

            function d(t) {
                var e = o.createHash("sha256").update(t).digest();
                return o.createHash("ripemd160").update(e).digest()
            }
            Object.defineProperty(l.prototype, "fingerprint", {
                get: function() {
                    return this._fingerprint
                }
            }), Object.defineProperty(l.prototype, "identifier", {
                get: function() {
                    return this._identifier
                }
            }), Object.defineProperty(l.prototype, "pubKeyHash", {
                get: function() {
                    return this.identifier
                }
            }), Object.defineProperty(l.prototype, "privateKey", {
                get: function() {
                    return this._privateKey
                },
                set: function(t) {
                    r.equal(t.length, 32, "Private key must be 32 bytes."), r(!0 === a.privateKeyVerify(t), "Invalid private key"), this._privateKey = t, this._publicKey = a.publicKeyCreate(t, !0), this._identifier = d(this.publicKey), this._fingerprint = this._identifier.slice(0, 4).readUInt32BE(0)
                }
            }), Object.defineProperty(l.prototype, "publicKey", {
                get: function() {
                    return this._publicKey
                },
                set: function(t) {
                    r(33 === t.length || 65 === t.length, "Public key must be 33 or 65 bytes."), r(!0 === a.publicKeyVerify(t), "Invalid public key"), this._publicKey = a.publicKeyConvert(t, !0), this._identifier = d(this.publicKey), this._fingerprint = this._identifier.slice(0, 4).readUInt32BE(0), this._privateKey = null
                }
            }), Object.defineProperty(l.prototype, "privateExtendedKey", {
                get: function() {
                    return this._privateKey ? s.encode(f(this, this.versions.private, i.concat([i.alloc(1, 0), this.privateKey]))) : null
                }
            }), Object.defineProperty(l.prototype, "publicExtendedKey", {
                get: function() {
                    return s.encode(f(this, this.versions.public, this.publicKey))
                }
            }), l.prototype.derive = function(t) {
                if ("m" === t || "M" === t || "m'" === t || "M'" === t) return this;
                var e = t.split("/"),
                    n = this;
                return e.forEach((function(t, e) {
                    if (0 !== e) {
                        var i = t.length > 1 && "'" === t[t.length - 1],
                            o = parseInt(t, 10);
                        r(o < 2147483648, "Invalid index"), i && (o += 2147483648), n = n.deriveChild(o)
                    } else r(/^[mM]{1}/.test(t), 'Path must start with "m" or "M"')
                })), n
            }, l.prototype.deriveChild = function(t) {
                var e, n = t >= 2147483648,
                    s = i.allocUnsafe(4);
                if (s.writeUInt32BE(t, 0), n) {
                    r(this.privateKey, "Could not derive hardened child key");
                    var u = this.privateKey,
                        c = i.alloc(1, 0);
                    u = i.concat([c, u]), e = i.concat([u, s])
                } else e = i.concat([this.publicKey, s]);
                var f = o.createHmac("sha512", this.chainCode).update(e).digest(),
                    d = f.slice(0, 32),
                    h = f.slice(32),
                    p = new l(this.versions);
                if (this.privateKey) try {
                    p.privateKey = a.privateKeyTweakAdd(this.privateKey, d)
                } catch (e) {
                    return this.derive(t + 1)
                } else try {
                    p.publicKey = a.publicKeyTweakAdd(this.publicKey, d, !0)
                } catch (e) {
                    return this.derive(t + 1, n)
                }
                return p.chainCode = h, p.depth = this.depth + 1, p.parentFingerprint = this.fingerprint, p.index = t, p
            }, l.prototype.sign = function(t) {
                return a.sign(t, this.privateKey).signature
            }, l.prototype.verify = function(t, e) {
                return a.verify(t, e, this.publicKey)
            }, l.prototype.toJSON = function() {
                return {
                    xpriv: this.privateExtendedKey,
                    xpub: this.publicExtendedKey
                }
            }, l.fromMasterSeed = function(t, e) {
                var n = o.createHmac("sha512", u).update(t).digest(),
                    r = n.slice(0, 32),
                    i = n.slice(32),
                    s = new l(e);
                return s.chainCode = i, s.privateKey = r, s
            }, l.fromExtendedKey = function(t, e) {
                var n = new l(e = e || c),
                    i = s.decode(t),
                    o = i.readUInt32BE(0);
                r(o === e.private || o === e.public, "Version mismatch: does not match private or public"), n.depth = i.readUInt8(4), n.parentFingerprint = i.readUInt32BE(5), n.index = i.readUInt32BE(9), n.chainCode = i.slice(13, 45);
                var a = i.slice(45);
                return 0 === a.readUInt8(0) ? (r(o === e.private, "Version mismatch: version does not match private"), n.privateKey = a.slice(1)) : (r(o === e.public, "Version mismatch: version does not match public"), n.publicKey = a), n
            }, l.fromJSON = function(t) {
                return l.fromExtendedKey(t.xpriv)
            }, l.HARDENED_OFFSET = 2147483648, t.exports = l
        },
        2729: function(t, e, n) {
            "use strict";
            var r = n(21).Buffer,
                i = n(101),
                o = n(35),
                s = n(85).ec,
                a = n(2730),
                u = new s("p256"),
                c = u.curve;

            function l(t) {
                return u.keyFromPublic(t)
            }
            e.privateKeyVerify = function(t) {
                var e = new o(t);
                return e.cmp(c.n) < 0 && !e.isZero()
            }, e.privateKeyExport = function(t, e) {
                var n = new o(t);
                if (n.cmp(c.n) >= 0 || n.isZero()) throw new Error(a.EC_PRIVATE_KEY_EXPORT_DER_FAIL);
                return r.from(u.keyFromPrivate(t).getPublic(e, !0))
            }, e.privateKeyNegate = function(t) {
                var e = new o(t);
                return e.isZero() ? r.alloc(32) : c.n.sub(e).umod(c.n).toArrayLike(r, "be", 32)
            }, e.privateKeyModInverse = function(t) {
                var e = new o(t);
                if (e.cmp(c.n) >= 0 || e.isZero()) throw new Error(a.EC_PRIVATE_KEY_RANGE_INVALID);
                return e.invm(c.n).toArrayLike(r, "be", 32)
            }, e.privateKeyTweakAdd = function(t, e) {
                var n = new o(e);
                if (n.cmp(c.n) >= 0) throw new Error(a.EC_PRIVATE_KEY_TWEAK_ADD_FAIL);
                if (n.iadd(new o(t)), n.cmp(c.n) >= 0 && n.isub(c.n), n.isZero()) throw new Error(a.EC_PRIVATE_KEY_TWEAK_ADD_FAIL);
                return n.toArrayLike(r, "be", 32)
            }, e.privateKeyTweakMul = function(t, e) {
                var n = new o(e);
                if (n.cmp(c.n) >= 0 || n.isZero()) throw new Error(a.EC_PRIVATE_KEY_TWEAK_MUL_FAIL);
                return n.imul(new o(t)), n.cmp(c.n) && (n = n.umod(c.n)), n.toArrayLike(r, "be", 32)
            }, e.publicKeyCreate = function(t, e) {
                var n = new o(t);
                if (n.cmp(c.n) >= 0 || n.isZero()) throw new Error(a.EC_PUBLIC_KEY_CREATE_FAIL);
                return r.from(u.keyFromPrivate(t).getPublic(e, !0))
            }, e.publicKeyConvert = function(t, e) {
                var n = l(t);
                if (null === n) throw new Error(a.EC_PUBLIC_KEY_PARSE_FAIL);
                return r.from(n.getPublic(e, !0))
            }, e.publicKeyVerify = function(t) {
                return null !== l(t)
            }, e.publicKeyTweakAdd = function(t, e, n) {
                var i = l(t);
                if (null === i) throw new Error(a.EC_PUBLIC_KEY_PARSE_FAIL);
                if ((e = new o(e)).cmp(c.n) >= 0) throw new Error(a.EC_PUBLIC_KEY_TWEAK_ADD_FAIL);
                return r.from(c.g.mul(e).add(i.pub).encode(!0, n))
            }, e.publicKeyTweakMul = function(t, e, n) {
                var i = l(t);
                if (null === i) throw new Error(a.EC_PUBLIC_KEY_PARSE_FAIL);
                if ((e = new o(e)).cmp(c.n) >= 0 || e.isZero()) throw new Error(a.EC_PUBLIC_KEY_TWEAK_MUL_FAIL);
                return r.from(i.pub.mul(e).encode(!0, n))
            }, e.publicKeyCombine = function(t, e) {
                for (var n = new Array(t.length), i = 0; i < t.length; ++i)
                    if (n[i] = l(t[i]), null === n[i]) throw new Error(a.EC_PUBLIC_KEY_PARSE_FAIL);
                for (var o = n[0].pub, s = 1; s < n.length; ++s) o = o.add(n[s].pub);
                if (o.isInfinity()) throw new Error(a.EC_PUBLIC_KEY_COMBINE_FAIL);
                return r.from(o.encode(!0, e))
            }, e.signatureNormalize = function(t) {
                var e = new o(t.slice(0, 32)),
                    n = new o(t.slice(32, 64));
                if (e.cmp(c.n) >= 0 || n.cmp(c.n) >= 0) throw new Error(a.ECDSA_SIGNATURE_PARSE_FAIL);
                var i = r.from(t);
                return 1 === n.cmp(u.nh) && c.n.sub(n).toArrayLike(r, "be", 32).copy(i, 32), i
            }, e.signatureExport = function(t) {
                var e = t.slice(0, 32),
                    n = t.slice(32, 64);
                if (new o(e).cmp(c.n) >= 0 || new o(n).cmp(c.n) >= 0) throw new Error(a.ECDSA_SIGNATURE_PARSE_FAIL);
                return {
                    r: e,
                    s: n
                }
            }, e.signatureImport = function(t) {
                var e = new o(t.r);
                e.cmp(c.n) >= 0 && (e = new o(0));
                var n = new o(t.s);
                return n.cmp(c.n) >= 0 && (n = new o(0)), r.concat([e.toArrayLike(r, "be", 32), n.toArrayLike(r, "be", 32)])
            }, e.sign = function(t, e, n, i) {
                if ("function" == typeof n) {
                    var s = n;
                    n = function(n) {
                        var u = s(t, e, null, i, n);
                        if (!r.isBuffer(u) || 32 !== u.length) throw new Error(a.ECDSA_SIGN_FAIL);
                        return new o(u)
                    }
                }
                var l = new o(e);
                if (l.cmp(c.n) >= 0 || l.isZero()) throw new Error(a.ECDSA_SIGN_FAIL);
                var f = u.sign(t, e, {
                    canonical: !0,
                    k: n,
                    pers: i
                });
                return {
                    signature: r.concat([f.r.toArrayLike(r, "be", 32), f.s.toArrayLike(r, "be", 32)]),
                    recovery: f.recoveryParam
                }
            }, e.verify = function(t, e, n) {
                var r = {
                        r: e.slice(0, 32),
                        s: e.slice(32, 64)
                    },
                    i = new o(r.r),
                    s = new o(r.s);
                if (i.cmp(c.n) >= 0 || s.cmp(c.n) >= 0) throw new Error(a.ECDSA_SIGNATURE_PARSE_FAIL);
                if (1 === s.cmp(u.nh) || i.isZero() || s.isZero()) return !1;
                var f = l(n);
                if (null === f) throw new Error(a.EC_PUBLIC_KEY_PARSE_FAIL);
                return u.verify(t, r, {
                    x: f.pub.x,
                    y: f.pub.y
                })
            }, e.recover = function(t, e, n, i) {
                var s = {
                        r: e.slice(0, 32),
                        s: e.slice(32, 64)
                    },
                    l = new o(s.r),
                    f = new o(s.s);
                if (l.cmp(c.n) >= 0 || f.cmp(c.n) >= 0) throw new Error(a.ECDSA_SIGNATURE_PARSE_FAIL);
                try {
                    if (l.isZero() || f.isZero()) throw new Error;
                    var d = u.recoverPubKey(t, s, n);
                    return r.from(d.encode(!0, i))
                } catch (t) {
                    throw new Error(a.ECDSA_RECOVER_FAIL)
                }
            }, e.ecdh = function(t, n) {
                var r = e.ecdhUnsafe(t, n, !0);
                return i("sha256").update(r).digest()
            }, e.ecdhUnsafe = function(t, e, n) {
                var i = l(t);
                if (null === i) throw new Error(a.EC_PUBLIC_KEY_PARSE_FAIL);
                var s = new o(e);
                if (s.cmp(c.n) >= 0 || s.isZero()) throw new Error(a.ECDH_FAIL);
                return r.from(i.pub.mul(s).encode(!0, n))
            }
        },
        2730: function(t) {
            t.exports = JSON.parse('{"COMPRESSED_TYPE_INVALID":"compressed should be a boolean","EC_PRIVATE_KEY_TYPE_INVALID":"private key should be a Buffer","EC_PRIVATE_KEY_LENGTH_INVALID":"private key length is invalid","EC_PRIVATE_KEY_RANGE_INVALID":"private key range is invalid","EC_PRIVATE_KEY_TWEAK_ADD_FAIL":"tweak out of range or resulting private key is invalid","EC_PRIVATE_KEY_TWEAK_MUL_FAIL":"tweak out of range","EC_PRIVATE_KEY_EXPORT_DER_FAIL":"couldn\'t export to DER format","EC_PRIVATE_KEY_IMPORT_DER_FAIL":"couldn\'t import from DER format","EC_PUBLIC_KEYS_TYPE_INVALID":"public keys should be an Array","EC_PUBLIC_KEYS_LENGTH_INVALID":"public keys Array should have at least 1 element","EC_PUBLIC_KEY_TYPE_INVALID":"public key should be a Buffer","EC_PUBLIC_KEY_LENGTH_INVALID":"public key length is invalid","EC_PUBLIC_KEY_PARSE_FAIL":"the public key could not be parsed or is invalid","EC_PUBLIC_KEY_CREATE_FAIL":"private was invalid, try again","EC_PUBLIC_KEY_TWEAK_ADD_FAIL":"tweak out of range or resulting public key is invalid","EC_PUBLIC_KEY_TWEAK_MUL_FAIL":"tweak out of range","EC_PUBLIC_KEY_COMBINE_FAIL":"the sum of the public keys is not valid","ECDH_FAIL":"scalar was invalid (zero or overflow)","ECDSA_SIGNATURE_TYPE_INVALID":"signature should be a Buffer","ECDSA_SIGNATURE_LENGTH_INVALID":"signature length is invalid","ECDSA_SIGNATURE_PARSE_FAIL":"couldn\'t parse signature","ECDSA_SIGNATURE_PARSE_DER_FAIL":"couldn\'t parse DER signature","ECDSA_SIGNATURE_SERIALIZE_DER_FAIL":"couldn\'t serialize signature to DER format","ECDSA_SIGN_FAIL":"nonce generation function failed or private key is invalid","ECDSA_RECOVER_FAIL":"couldn\'t recover public key from signature","MSG32_TYPE_INVALID":"message should be a Buffer","MSG32_LENGTH_INVALID":"message length is invalid","OPTIONS_TYPE_INVALID":"options should be an Object","OPTIONS_DATA_TYPE_INVALID":"options.data should be a Buffer","OPTIONS_DATA_LENGTH_INVALID":"options.data length is invalid","OPTIONS_NONCEFN_TYPE_INVALID":"options.noncefn should be a Function","RECOVERY_ID_TYPE_INVALID":"recovery should be a Number","RECOVERY_ID_VALUE_INVALID":"recovery should have value between -1 and 4","TWEAK_TYPE_INVALID":"tweak should be a Buffer","TWEAK_LENGTH_INVALID":"tweak length is invalid"}')
        },
        2736: function(t, e) {
            t.exports = WebSocket
        },
        290: function(t, e, n) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.randomBytes = e.wrapConstructorWithOpts = e.wrapConstructor = e.checkOpts = e.Hash = e.concatBytes = e.toBytes = e.utf8ToBytes = e.asyncLoop = e.nextTick = e.hexToBytes = e.bytesToHex = e.isLE = e.rotr = e.createView = e.u32 = e.u8 = void 0;
            const r = n(3299);
            e.u8 = t => new Uint8Array(t.buffer, t.byteOffset, t.byteLength);
            e.u32 = t => new Uint32Array(t.buffer, t.byteOffset, Math.floor(t.byteLength / 4));
            e.createView = t => new DataView(t.buffer, t.byteOffset, t.byteLength);
            if (e.rotr = (t, e) => t << 32 - e | t >>> e, e.isLE = 68 === new Uint8Array(new Uint32Array([287454020]).buffer)[0], !e.isLE) throw new Error("Non little-endian hardware is not supported");
            const i = Array.from({
                length: 256
            }, (t, e) => e.toString(16).padStart(2, "0"));
            e.bytesToHex = function(t) {
                if (!(t instanceof Uint8Array)) throw new Error("Uint8Array expected");
                let e = "";
                for (let n = 0; n < t.length; n++) e += i[t[n]];
                return e
            }, e.hexToBytes = function(t) {
                if ("string" != typeof t) throw new TypeError("hexToBytes: expected string, got " + typeof t);
                if (t.length % 2) throw new Error("hexToBytes: received invalid unpadded hex");
                const e = new Uint8Array(t.length / 2);
                for (let n = 0; n < e.length; n++) {
                    const r = 2 * n,
                        i = t.slice(r, r + 2),
                        o = Number.parseInt(i, 16);
                    if (Number.isNaN(o) || o < 0) throw new Error("Invalid byte sequence");
                    e[n] = o
                }
                return e
            };

            function o(t) {
                if ("string" != typeof t) throw new TypeError("utf8ToBytes expected string, got " + typeof t);
                return (new TextEncoder).encode(t)
            }

            function s(t) {
                if ("string" == typeof t && (t = o(t)), !(t instanceof Uint8Array)) throw new TypeError(`Expected input type is Uint8Array (got ${typeof t})`);
                return t
            }
            e.nextTick = async () => {}, e.asyncLoop = async function(t, n, r) {
                let i = Date.now();
                for (let o = 0; o < t; o++) {
                    r(o);
                    const t = Date.now() - i;
                    t >= 0 && t < n || (await (0, e.nextTick)(), i += t)
                }
            }, e.utf8ToBytes = o, e.toBytes = s, e.concatBytes = function(...t) {
                if (!t.every(t => t instanceof Uint8Array)) throw new Error("Uint8Array list expected");
                if (1 === t.length) return t[0];
                const e = t.reduce((t, e) => t + e.length, 0),
                    n = new Uint8Array(e);
                for (let e = 0, r = 0; e < t.length; e++) {
                    const i = t[e];
                    n.set(i, r), r += i.length
                }
                return n
            };
            e.Hash = class Hash {
                clone() {
                    return this._cloneInto()
                }
            };
            e.checkOpts = function(t, e) {
                if (void 0 !== e && ("object" != typeof e || (n = e, "[object Object]" !== Object.prototype.toString.call(n) || n.constructor !== Object))) throw new TypeError("Options should be object or undefined");
                var n;
                return Object.assign(t, e)
            }, e.wrapConstructor = function(t) {
                const e = e => t().update(s(e)).digest(),
                    n = t();
                return e.outputLen = n.outputLen, e.blockLen = n.blockLen, e.create = () => t(), e
            }, e.wrapConstructorWithOpts = function(t) {
                const e = (e, n) => t(n).update(s(e)).digest(),
                    n = t({});
                return e.outputLen = n.outputLen, e.blockLen = n.blockLen, e.create = e => t(e), e
            }, e.randomBytes = function(t = 32) {
                if (r.crypto && "function" == typeof r.crypto.getRandomValues) return r.crypto.getRandomValues(new Uint8Array(t));
                throw new Error("crypto.getRandomValues must be defined")
            }
        },
        3299: function(t, e, n) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.crypto = void 0, e.crypto = "object" == typeof globalThis && "crypto" in globalThis ? globalThis.crypto : void 0
        },
        3300: function(t, e, n) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.pbkdf2Async = e.pbkdf2 = void 0;
            const r = n(619),
                i = n(718),
                o = n(290);

            function s(t, e, n, s) {
                r.default.hash(t);
                const a = (0, o.checkOpts)({
                        dkLen: 32,
                        asyncTick: 10
                    }, s),
                    {
                        c: u,
                        dkLen: c,
                        asyncTick: l
                    } = a;
                if (r.default.number(u), r.default.number(c), r.default.number(l), u < 1) throw new Error("PBKDF2: iterations (c) should be >= 1");
                const f = (0, o.toBytes)(e),
                    d = (0, o.toBytes)(n),
                    h = new Uint8Array(c),
                    p = i.hmac.create(t, f),
                    y = p._cloneInto().update(d);
                return {
                    c: u,
                    dkLen: c,
                    asyncTick: l,
                    DK: h,
                    PRF: p,
                    PRFSalt: y
                }
            }

            function a(t, e, n, r, i) {
                return t.destroy(), e.destroy(), r && r.destroy(), i.fill(0), n
            }
            e.pbkdf2 = function(t, e, n, r) {
                const {
                    c: i,
                    dkLen: u,
                    DK: c,
                    PRF: l,
                    PRFSalt: f
                } = s(t, e, n, r);
                let d;
                const h = new Uint8Array(4),
                    p = (0, o.createView)(h),
                    y = new Uint8Array(l.outputLen);
                for (let t = 1, e = 0; e < u; t++, e += l.outputLen) {
                    const n = c.subarray(e, e + l.outputLen);
                    p.setInt32(0, t, !1), (d = f._cloneInto(d)).update(h).digestInto(y), n.set(y.subarray(0, n.length));
                    for (let t = 1; t < i; t++) {
                        l._cloneInto(d).update(y).digestInto(y);
                        for (let t = 0; t < n.length; t++) n[t] ^= y[t]
                    }
                }
                return a(l, f, c, d, y)
            }, e.pbkdf2Async = async function(t, e, n, r) {
                const {
                    c: i,
                    dkLen: u,
                    asyncTick: c,
                    DK: l,
                    PRF: f,
                    PRFSalt: d
                } = s(t, e, n, r);
                let h;
                const p = new Uint8Array(4),
                    y = (0, o.createView)(p),
                    b = new Uint8Array(f.outputLen);
                for (let t = 1, e = 0; e < u; t++, e += f.outputLen) {
                    const n = l.subarray(e, e + f.outputLen);
                    y.setInt32(0, t, !1), (h = d._cloneInto(h)).update(p).digestInto(b), n.set(b.subarray(0, n.length)), await (0, o.asyncLoop)(i - 1, c, t => {
                        f._cloneInto(h).update(b).digestInto(b);
                        for (let t = 0; t < n.length; t++) n[t] ^= b[t]
                    })
                }
                return a(f, d, l, h, b)
            }
        },
        3645: function(t, e, n) {
            "use strict";
            var r = this && this.__assign || function() {
                    return (r = Object.assign || function(t) {
                        for (var e, n = 1, r = arguments.length; n < r; n++)
                            for (var i in e = arguments[n]) Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i]);
                        return t
                    }).apply(this, arguments)
                },
                i = this && this.__awaiter || function(t, e, n, r) {
                    return new(n || (n = Promise))((function(i, o) {
                        function s(t) {
                            try {
                                u(r.next(t))
                            } catch (t) {
                                o(t)
                            }
                        }

                        function a(t) {
                            try {
                                u(r.throw(t))
                            } catch (t) {
                                o(t)
                            }
                        }

                        function u(t) {
                            var e;
                            t.done ? i(t.value) : (e = t.value, e instanceof n ? e : new n((function(t) {
                                t(e)
                            }))).then(s, a)
                        }
                        u((r = r.apply(t, e || [])).next())
                    }))
                },
                o = this && this.__generator || function(t, e) {
                    var n, r, i, o, s = {
                        label: 0,
                        sent: function() {
                            if (1 & i[0]) throw i[1];
                            return i[1]
                        },
                        trys: [],
                        ops: []
                    };
                    return o = {
                        next: a(0),
                        throw: a(1),
                        return: a(2)
                    }, "function" == typeof Symbol && (o[Symbol.iterator] = function() {
                        return this
                    }), o;

                    function a(o) {
                        return function(a) {
                            return function(o) {
                                if (n) throw new TypeError("Generator is already executing.");
                                for (; s;) try {
                                    if (n = 1, r && (i = 2 & o[0] ? r.return : o[0] ? r.throw || ((i = r.return) && i.call(r), 0) : r.next) && !(i = i.call(r, o[1])).done) return i;
                                    switch (r = 0, i && (o = [2 & o[0], i.value]), o[0]) {
                                        case 0:
                                        case 1:
                                            i = o;
                                            break;
                                        case 4:
                                            return s.label++, {
                                                value: o[1],
                                                done: !1
                                            };
                                        case 5:
                                            s.label++, r = o[1], o = [0];
                                            continue;
                                        case 7:
                                            o = s.ops.pop(), s.trys.pop();
                                            continue;
                                        default:
                                            if (!(i = s.trys, (i = i.length > 0 && i[i.length - 1]) || 6 !== o[0] && 2 !== o[0])) {
                                                s = 0;
                                                continue
                                            }
                                            if (3 === o[0] && (!i || o[1] > i[0] && o[1] < i[3])) {
                                                s.label = o[1];
                                                break
                                            }
                                            if (6 === o[0] && s.label < i[1]) {
                                                s.label = i[1], i = o;
                                                break
                                            }
                                            if (i && s.label < i[2]) {
                                                s.label = i[2], s.ops.push(o);
                                                break
                                            }
                                            i[2] && s.ops.pop(), s.trys.pop();
                                            continue
                                    }
                                    o = e.call(t, s)
                                } catch (t) {
                                    o = [6, t], r = 0
                                } finally {
                                    n = i = 0
                                }
                                if (5 & o[0]) throw o[1];
                                return {
                                    value: o[0] ? o[1] : void 0,
                                    done: !0
                                }
                            }([o, a])
                        }
                    }
                },
                s = this && this.__importDefault || function(t) {
                    return t && t.__esModule ? t : {
                        default: t
                    }
                };
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.sanitizeMetaStrings = e.getParsedNftAccountsByOwner = void 0;
            var a, u = n(162),
                c = s(n(3646)),
                l = s(n(3647)),
                f = n(505),
                d = n(1869);
            ! function(t) {
                t.updateAuthority = "updateAuthority"
            }(a || (a = {}));
            e.getParsedNftAccountsByOwner = function(t) {
                var e = t.publicAddress,
                    n = t.connection,
                    r = void 0 === n ? (0, f.createConnectionConfig)() : n,
                    s = t.sanitize,
                    v = void 0 === s || s,
                    w = t.stringifyPubKeys,
                    E = void 0 === w || w,
                    A = t.sort,
                    g = void 0 === A || A,
                    _ = t.limit,
                    m = void 0 === _ ? 5e3 : _;
                return i(void 0, void 0, void 0, (function() {
                    var t, n, i, s, w, A, _, x, P;
                    return o(this, (function(o) {
                        switch (o.label) {
                            case 0:
                                return (0, f.isValidSolanaAddress)(e) ? [4, r.getParsedTokenAccountsByOwner(new u.PublicKey(e), {
                                    programId: new u.PublicKey(d.TOKEN_PROGRAM)
                                })] : [2, []];
                            case 1:
                                return t = o.sent().value, n = t.filter((function(t) {
                                    var e, n, r, i, o, s, a, u, c, l, f = null === (o = null === (i = null === (r = null === (n = null === (e = t.account) || void 0 === e ? void 0 : e.data) || void 0 === n ? void 0 : n.parsed) || void 0 === r ? void 0 : r.info) || void 0 === i ? void 0 : i.tokenAmount) || void 0 === o ? void 0 : o.uiAmount;
                                    return 0 === (null === (l = null === (c = null === (u = null === (a = null === (s = t.account) || void 0 === s ? void 0 : s.data) || void 0 === a ? void 0 : a.parsed) || void 0 === u ? void 0 : u.info) || void 0 === c ? void 0 : c.tokenAmount) || void 0 === l ? void 0 : l.decimals) && f >= 1
                                })).map((function(t) {
                                    var e, n, r, i, o = null === (i = null === (r = null === (n = null === (e = t.account) || void 0 === e ? void 0 : e.data) || void 0 === n ? void 0 : n.parsed) || void 0 === r ? void 0 : r.info) || void 0 === i ? void 0 : i.mint;
                                    return new u.PublicKey(o)
                                })), i = null == n ? void 0 : n.slice(0, m), [4, Promise.allSettled(i.map(f.getSolanaMetadataAddress))];
                            case 2:
                                return s = o.sent(), w = s.filter(y).map((function(t) {
                                    return t.value
                                })), [4, Promise.allSettled((0, c.default)(w, 99).map((function(t) {
                                    return r.getMultipleAccountsInfo(t)
                                })))];
                            case 3:
                                return A = o.sent(), (null == (_ = A.filter((function(t) {
                                    return "fulfilled" === t.status
                                })).flatMap((function(t) {
                                    return t.value
                                }))) ? void 0 : _.length) && 0 !== (null == _ ? void 0 : _.length) ? [4, Promise.allSettled(_.map((function(t) {
                                    var e;
                                    return (0, f.decodeTokenMetadata)(null === (e = t) || void 0 === e ? void 0 : e.data)
                                })))] : [2, []];
                            case 4:
                                return x = o.sent(), P = x.filter(y).filter(b).map((function(t) {
                                    var e = t.value;
                                    return v ? h(e) : e
                                })).map((function(t) {
                                    return E ? p(t) : t
                                })), E && g ? [2, (0, l.default)(P, [a.updateAuthority], ["asc"])] : [2, P]
                        }
                    }))
                }))
            };
            var h = function(t) {
                    var n, i, o;
                    return r(r({}, t), {
                        data: r(r({}, null == t ? void 0 : t.data), {
                            name: (0, e.sanitizeMetaStrings)(null === (n = null == t ? void 0 : t.data) || void 0 === n ? void 0 : n.name),
                            symbol: (0, e.sanitizeMetaStrings)(null === (i = null == t ? void 0 : t.data) || void 0 === i ? void 0 : i.symbol),
                            uri: (0, e.sanitizeMetaStrings)(null === (o = null == t ? void 0 : t.data) || void 0 === o ? void 0 : o.uri)
                        })
                    })
                },
                p = function(t) {
                    var e, n, i, o, s, a;
                    return r(r({}, t), {
                        mint: null === (n = null === (e = null == t ? void 0 : t.mint) || void 0 === e ? void 0 : e.toString) || void 0 === n ? void 0 : n.call(e),
                        updateAuthority: null === (o = null === (i = null == t ? void 0 : t.updateAuthority) || void 0 === i ? void 0 : i.toString) || void 0 === o ? void 0 : o.call(i),
                        data: r(r({}, null == t ? void 0 : t.data), {
                            creators: null === (a = null === (s = null == t ? void 0 : t.data) || void 0 === s ? void 0 : s.creators) || void 0 === a ? void 0 : a.map((function(t) {
                                var e, n;
                                return r(r({}, t), {
                                    address: null === (n = null === (e = new u.PublicKey(null == t ? void 0 : t.address)) || void 0 === e ? void 0 : e.toString) || void 0 === n ? void 0 : n.call(e)
                                })
                            }))
                        })
                    })
                };
            e.sanitizeMetaStrings = function(t) {
                return t.replace(/\0/g, "")
            };
            var y = function(t) {
                    return t && "fulfilled" === t.status
                },
                b = function(t) {
                    var e, n, r, i = null === (r = null === (n = null === (e = t.value.data) || void 0 === e ? void 0 : e.uri) || void 0 === n ? void 0 : n.replace) || void 0 === r ? void 0 : r.call(n, /\0/g, "");
                    return "" !== i && void 0 !== i
                }
        },
        3649: function(t, e, n) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.extendBorsh = void 0;
            var r = n(162),
                i = n(291);
            e.extendBorsh = function() {
                i.BinaryReader.prototype.readPubkey = function() {
                    var t = this.readFixedArray(32);
                    return new r.PublicKey(t)
                }, i.BinaryWriter.prototype.writePubkey = function(t) {
                    this.writeFixedArray(t.toBuffer())
                }
            }, (0, e.extendBorsh)()
        },
        3650: function(t, e, n) {
            "use strict";
            var r = this && this.__awaiter || function(t, e, n, r) {
                    return new(n || (n = Promise))((function(i, o) {
                        function s(t) {
                            try {
                                u(r.next(t))
                            } catch (t) {
                                o(t)
                            }
                        }

                        function a(t) {
                            try {
                                u(r.throw(t))
                            } catch (t) {
                                o(t)
                            }
                        }

                        function u(t) {
                            var e;
                            t.done ? i(t.value) : (e = t.value, e instanceof n ? e : new n((function(t) {
                                t(e)
                            }))).then(s, a)
                        }
                        u((r = r.apply(t, e || [])).next())
                    }))
                },
                i = this && this.__generator || function(t, e) {
                    var n, r, i, o, s = {
                        label: 0,
                        sent: function() {
                            if (1 & i[0]) throw i[1];
                            return i[1]
                        },
                        trys: [],
                        ops: []
                    };
                    return o = {
                        next: a(0),
                        throw: a(1),
                        return: a(2)
                    }, "function" == typeof Symbol && (o[Symbol.iterator] = function() {
                        return this
                    }), o;

                    function a(o) {
                        return function(a) {
                            return function(o) {
                                if (n) throw new TypeError("Generator is already executing.");
                                for (; s;) try {
                                    if (n = 1, r && (i = 2 & o[0] ? r.return : o[0] ? r.throw || ((i = r.return) && i.call(r), 0) : r.next) && !(i = i.call(r, o[1])).done) return i;
                                    switch (r = 0, i && (o = [2 & o[0], i.value]), o[0]) {
                                        case 0:
                                        case 1:
                                            i = o;
                                            break;
                                        case 4:
                                            return s.label++, {
                                                value: o[1],
                                                done: !1
                                            };
                                        case 5:
                                            s.label++, r = o[1], o = [0];
                                            continue;
                                        case 7:
                                            o = s.ops.pop(), s.trys.pop();
                                            continue;
                                        default:
                                            if (!(i = s.trys, (i = i.length > 0 && i[i.length - 1]) || 6 !== o[0] && 2 !== o[0])) {
                                                s = 0;
                                                continue
                                            }
                                            if (3 === o[0] && (!i || o[1] > i[0] && o[1] < i[3])) {
                                                s.label = o[1];
                                                break
                                            }
                                            if (6 === o[0] && s.label < i[1]) {
                                                s.label = i[1], i = o;
                                                break
                                            }
                                            if (i && s.label < i[2]) {
                                                s.label = i[2], s.ops.push(o);
                                                break
                                            }
                                            i[2] && s.ops.pop(), s.trys.pop();
                                            continue
                                    }
                                    o = e.call(t, s)
                                } catch (t) {
                                    o = [6, t], r = 0
                                } finally {
                                    n = i = 0
                                }
                                if (5 & o[0]) throw o[1];
                                return {
                                    value: o[0] ? o[1] : void 0,
                                    done: !0
                                }
                            }([o, a])
                        }
                    }
                };
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.getParsedNftAccountsByUpdateAuthority = e.createConnectionConfig = void 0;
            var o = n(162),
                s = n(1868),
                a = n(505);
            e.createConnectionConfig = function(t, e) {
                return void 0 === t && (t = (0, o.clusterApiUrl)("mainnet-beta")), void 0 === e && (e = "confirmed"), new o.Connection(t, e)
            };
            e.getParsedNftAccountsByUpdateAuthority = function(t) {
                var n = t.updateAuthority,
                    u = t.connection,
                    c = void 0 === u ? (0, e.createConnectionConfig)() : u;
                return r(void 0, void 0, void 0, (function() {
                    var t, e;
                    return i(this, (function(r) {
                        switch (r.label) {
                            case 0:
                                return r.trys.push([0, 3, , 4]), [4, c.getProgramAccounts(new o.PublicKey(s.METADATA_PROGRAM), {
                                    encoding: "base64",
                                    filters: [{
                                        memcmp: {
                                            offset: 1,
                                            bytes: n
                                        }
                                    }]
                                })];
                            case 1:
                                return t = r.sent(), [4, Promise.all(t.map((function(t) {
                                    return (0, a.decodeTokenMetadata)(t.account.data)
                                })))];
                            case 2:
                                return [2, r.sent()];
                            case 3:
                                return e = r.sent(), console.error(e), [2, []];
                            case 4:
                                return [2]
                        }
                    }))
                }))
            }
        },
        3651: function(t, e, n) {
            "use strict";
            var r = this && this.__assign || function() {
                    return (r = Object.assign || function(t) {
                        for (var e, n = 1, r = arguments.length; n < r; n++)
                            for (var i in e = arguments[n]) Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i]);
                        return t
                    }).apply(this, arguments)
                },
                i = this && this.__awaiter || function(t, e, n, r) {
                    return new(n || (n = Promise))((function(i, o) {
                        function s(t) {
                            try {
                                u(r.next(t))
                            } catch (t) {
                                o(t)
                            }
                        }

                        function a(t) {
                            try {
                                u(r.throw(t))
                            } catch (t) {
                                o(t)
                            }
                        }

                        function u(t) {
                            var e;
                            t.done ? i(t.value) : (e = t.value, e instanceof n ? e : new n((function(t) {
                                t(e)
                            }))).then(s, a)
                        }
                        u((r = r.apply(t, e || [])).next())
                    }))
                },
                o = this && this.__generator || function(t, e) {
                    var n, r, i, o, s = {
                        label: 0,
                        sent: function() {
                            if (1 & i[0]) throw i[1];
                            return i[1]
                        },
                        trys: [],
                        ops: []
                    };
                    return o = {
                        next: a(0),
                        throw: a(1),
                        return: a(2)
                    }, "function" == typeof Symbol && (o[Symbol.iterator] = function() {
                        return this
                    }), o;

                    function a(o) {
                        return function(a) {
                            return function(o) {
                                if (n) throw new TypeError("Generator is already executing.");
                                for (; s;) try {
                                    if (n = 1, r && (i = 2 & o[0] ? r.return : o[0] ? r.throw || ((i = r.return) && i.call(r), 0) : r.next) && !(i = i.call(r, o[1])).done) return i;
                                    switch (r = 0, i && (o = [2 & o[0], i.value]), o[0]) {
                                        case 0:
                                        case 1:
                                            i = o;
                                            break;
                                        case 4:
                                            return s.label++, {
                                                value: o[1],
                                                done: !1
                                            };
                                        case 5:
                                            s.label++, r = o[1], o = [0];
                                            continue;
                                        case 7:
                                            o = s.ops.pop(), s.trys.pop();
                                            continue;
                                        default:
                                            if (!(i = s.trys, (i = i.length > 0 && i[i.length - 1]) || 6 !== o[0] && 2 !== o[0])) {
                                                s = 0;
                                                continue
                                            }
                                            if (3 === o[0] && (!i || o[1] > i[0] && o[1] < i[3])) {
                                                s.label = o[1];
                                                break
                                            }
                                            if (6 === o[0] && s.label < i[1]) {
                                                s.label = i[1], i = o;
                                                break
                                            }
                                            if (i && s.label < i[2]) {
                                                s.label = i[2], s.ops.push(o);
                                                break
                                            }
                                            i[2] && s.ops.pop(), s.trys.pop();
                                            continue
                                    }
                                    o = e.call(t, s)
                                } catch (t) {
                                    o = [6, t], r = 0
                                } finally {
                                    n = i = 0
                                }
                                if (5 & o[0]) throw o[1];
                                return {
                                    value: o[0] ? o[1] : void 0,
                                    done: !0
                                }
                            }([o, a])
                        }
                    }
                };
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.getParsedAccountByMint = void 0;
            var s = n(162),
                a = n(1869),
                u = n(505);
            e.getParsedAccountByMint = function(t) {
                var e = t.mintAddress,
                    n = t.connection,
                    r = void 0 === n ? (0, u.createConnectionConfig)() : n,
                    l = t.stringifyPubKeys,
                    f = void 0 === l || l;
                return i(void 0, void 0, void 0, (function() {
                    var t, n;
                    return o(this, (function(i) {
                        switch (i.label) {
                            case 0:
                                return [4, r.getParsedProgramAccounts(new s.PublicKey(a.TOKEN_PROGRAM), {
                                    filters: [{
                                        dataSize: 165
                                    }, {
                                        memcmp: {
                                            offset: 0,
                                            bytes: e
                                        }
                                    }]
                                })];
                            case 1:
                                return (null == (t = i.sent()) ? void 0 : t.length) ? (n = null == t ? void 0 : t.find((function(t) {
                                    var e, n, r, i, o = t.account.data;
                                    return void 0 !== (null == (i = o) ? void 0 : i.parsed) && +(null === (r = null === (n = null === (e = null == o ? void 0 : o.parsed) || void 0 === e ? void 0 : e.info) || void 0 === n ? void 0 : n.tokenAmount) || void 0 === r ? void 0 : r.amount)
                                })), [2, f ? c(n) : n]) : [2, void 0]
                        }
                    }))
                }))
            };
            var c = function(t) {
                var e, n, i, o;
                return r(r({}, t), {
                    account: r(r({}, null == t ? void 0 : t.account), {
                        owner: null === (n = null === (e = new s.PublicKey(null == t ? void 0 : t.account.owner)) || void 0 === e ? void 0 : e.toString) || void 0 === n ? void 0 : n.call(e)
                    }),
                    pubkey: null === (o = null === (i = new s.PublicKey(null == t ? void 0 : t.pubkey)) || void 0 === i ? void 0 : i.toString) || void 0 === o ? void 0 : o.call(i)
                })
            }
        },
        3652: function(t, e, n) {
            "use strict";
            var r = this && this.__awaiter || function(t, e, n, r) {
                    return new(n || (n = Promise))((function(i, o) {
                        function s(t) {
                            try {
                                u(r.next(t))
                            } catch (t) {
                                o(t)
                            }
                        }

                        function a(t) {
                            try {
                                u(r.throw(t))
                            } catch (t) {
                                o(t)
                            }
                        }

                        function u(t) {
                            var e;
                            t.done ? i(t.value) : (e = t.value, e instanceof n ? e : new n((function(t) {
                                t(e)
                            }))).then(s, a)
                        }
                        u((r = r.apply(t, e || [])).next())
                    }))
                },
                i = this && this.__generator || function(t, e) {
                    var n, r, i, o, s = {
                        label: 0,
                        sent: function() {
                            if (1 & i[0]) throw i[1];
                            return i[1]
                        },
                        trys: [],
                        ops: []
                    };
                    return o = {
                        next: a(0),
                        throw: a(1),
                        return: a(2)
                    }, "function" == typeof Symbol && (o[Symbol.iterator] = function() {
                        return this
                    }), o;

                    function a(o) {
                        return function(a) {
                            return function(o) {
                                if (n) throw new TypeError("Generator is already executing.");
                                for (; s;) try {
                                    if (n = 1, r && (i = 2 & o[0] ? r.return : o[0] ? r.throw || ((i = r.return) && i.call(r), 0) : r.next) && !(i = i.call(r, o[1])).done) return i;
                                    switch (r = 0, i && (o = [2 & o[0], i.value]), o[0]) {
                                        case 0:
                                        case 1:
                                            i = o;
                                            break;
                                        case 4:
                                            return s.label++, {
                                                value: o[1],
                                                done: !1
                                            };
                                        case 5:
                                            s.label++, r = o[1], o = [0];
                                            continue;
                                        case 7:
                                            o = s.ops.pop(), s.trys.pop();
                                            continue;
                                        default:
                                            if (!(i = s.trys, (i = i.length > 0 && i[i.length - 1]) || 6 !== o[0] && 2 !== o[0])) {
                                                s = 0;
                                                continue
                                            }
                                            if (3 === o[0] && (!i || o[1] > i[0] && o[1] < i[3])) {
                                                s.label = o[1];
                                                break
                                            }
                                            if (6 === o[0] && s.label < i[1]) {
                                                s.label = i[1], i = o;
                                                break
                                            }
                                            if (i && s.label < i[2]) {
                                                s.label = i[2], s.ops.push(o);
                                                break
                                            }
                                            i[2] && s.ops.pop(), s.trys.pop();
                                            continue
                                    }
                                    o = e.call(t, s)
                                } catch (t) {
                                    o = [6, t], r = 0
                                } finally {
                                    n = i = 0
                                }
                                if (5 & o[0]) throw o[1];
                                return {
                                    value: o[0] ? o[1] : void 0,
                                    done: !0
                                }
                            }([o, a])
                        }
                    }
                };
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.resolveToWalletAddress = e.getInputKey = e.SOL_TLD_AUTHORITY = void 0;
            var o = n(162),
                s = n(3653),
                a = n(505);
            e.SOL_TLD_AUTHORITY = new o.PublicKey("58PwtjSDuFHuUkYjH9BYnnQKHfwo9reZhC2zMJv9JPkx");
            e.getInputKey = function(t) {
                return r(void 0, void 0, void 0, (function() {
                    var n;
                    return i(this, (function(r) {
                        switch (r.label) {
                            case 0:
                                return [4, (0, s.getHashedName)(t)];
                            case 1:
                                return n = r.sent(), [4, (0, s.getNameAccountKey)(n, void 0, e.SOL_TLD_AUTHORITY)];
                            case 2:
                                return [2, {
                                    inputDomainKey: r.sent(),
                                    hashedInputName: n
                                }]
                        }
                    }))
                }))
            };
            var u = new Error("Can't resolve provided name into valid Solana address =(");
            e.resolveToWalletAddress = function(t) {
                var n = t.text,
                    o = t.connection,
                    c = void 0 === o ? (0, a.createConnectionConfig)() : o;
                return r(void 0, void 0, void 0, (function() {
                    var t, r, o, l, f, d, h, p, y, b;
                    return i(this, (function(i) {
                        switch (i.label) {
                            case 0:
                                return (t = null === (h = null == n ? void 0 : n.trim) || void 0 === h ? void 0 : h.call(n)) ? (0, a.isValidSolanaAddress)(t) ? [2, Promise.resolve(t)] : (r = null == t ? void 0 : t.toLowerCase(), (null === (p = null == r ? void 0 : r.endsWith) || void 0 === p ? void 0 : p.call(r, ".sol")) ? (o = r.split(".sol")[0], [4, (0, e.getInputKey)(o)]) : [3, 3]) : [2, Promise.reject(u)];
                            case 1:
                                return l = i.sent().inputDomainKey, [4, s.NameRegistryState.retrieve(c, l)];
                            case 2:
                                if (f = i.sent(), d = null === (b = null === (y = null == f ? void 0 : f.owner) || void 0 === y ? void 0 : y.toBase58) || void 0 === b ? void 0 : b.call(y)) return [2, Promise.resolve(d)];
                                i.label = 3;
                            case 3:
                                return [2, Promise.reject(u)]
                        }
                    }))
                }))
            }
        },
        367: function(t, e, n) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.sha224 = e.sha256 = void 0;
            const r = n(1061),
                i = n(290),
                o = (t, e, n) => t & e ^ t & n ^ e & n,
                s = new Uint32Array([1116352408, 1899447441, 3049323471, 3921009573, 961987163, 1508970993, 2453635748, 2870763221, 3624381080, 310598401, 607225278, 1426881987, 1925078388, 2162078206, 2614888103, 3248222580, 3835390401, 4022224774, 264347078, 604807628, 770255983, 1249150122, 1555081692, 1996064986, 2554220882, 2821834349, 2952996808, 3210313671, 3336571891, 3584528711, 113926993, 338241895, 666307205, 773529912, 1294757372, 1396182291, 1695183700, 1986661051, 2177026350, 2456956037, 2730485921, 2820302411, 3259730800, 3345764771, 3516065817, 3600352804, 4094571909, 275423344, 430227734, 506948616, 659060556, 883997877, 958139571, 1322822218, 1537002063, 1747873779, 1955562222, 2024104815, 2227730452, 2361852424, 2428436474, 2756734187, 3204031479, 3329325298]),
                a = new Uint32Array([1779033703, 3144134277, 1013904242, 2773480762, 1359893119, 2600822924, 528734635, 1541459225]),
                u = new Uint32Array(64);
            class SHA256 extends r.SHA2 {
                constructor() {
                    super(64, 32, 8, !1), this.A = 0 | a[0], this.B = 0 | a[1], this.C = 0 | a[2], this.D = 0 | a[3], this.E = 0 | a[4], this.F = 0 | a[5], this.G = 0 | a[6], this.H = 0 | a[7]
                }
                get() {
                    const {
                        A: t,
                        B: e,
                        C: n,
                        D: r,
                        E: i,
                        F: o,
                        G: s,
                        H: a
                    } = this;
                    return [t, e, n, r, i, o, s, a]
                }
                set(t, e, n, r, i, o, s, a) {
                    this.A = 0 | t, this.B = 0 | e, this.C = 0 | n, this.D = 0 | r, this.E = 0 | i, this.F = 0 | o, this.G = 0 | s, this.H = 0 | a
                }
                process(t, e) {
                    for (let n = 0; n < 16; n++, e += 4) u[n] = t.getUint32(e, !1);
                    for (let t = 16; t < 64; t++) {
                        const e = u[t - 15],
                            n = u[t - 2],
                            r = (0, i.rotr)(e, 7) ^ (0, i.rotr)(e, 18) ^ e >>> 3,
                            o = (0, i.rotr)(n, 17) ^ (0, i.rotr)(n, 19) ^ n >>> 10;
                        u[t] = o + u[t - 7] + r + u[t - 16] | 0
                    }
                    let {
                        A: n,
                        B: r,
                        C: a,
                        D: c,
                        E: l,
                        F: f,
                        G: d,
                        H: h
                    } = this;
                    for (let t = 0; t < 64; t++) {
                        const e = h + ((0, i.rotr)(l, 6) ^ (0, i.rotr)(l, 11) ^ (0, i.rotr)(l, 25)) + ((p = l) & f ^ ~p & d) + s[t] + u[t] | 0,
                            y = ((0, i.rotr)(n, 2) ^ (0, i.rotr)(n, 13) ^ (0, i.rotr)(n, 22)) + o(n, r, a) | 0;
                        h = d, d = f, f = l, l = c + e | 0, c = a, a = r, r = n, n = e + y | 0
                    }
                    var p;
                    n = n + this.A | 0, r = r + this.B | 0, a = a + this.C | 0, c = c + this.D | 0, l = l + this.E | 0, f = f + this.F | 0, d = d + this.G | 0, h = h + this.H | 0, this.set(n, r, a, c, l, f, d, h)
                }
                roundClean() {
                    u.fill(0)
                }
                destroy() {
                    this.set(0, 0, 0, 0, 0, 0, 0, 0), this.buffer.fill(0)
                }
            }
            class SHA224 extends SHA256 {
                constructor() {
                    super(), this.A = -1056596264, this.B = 914150663, this.C = 812702999, this.D = -150054599, this.E = -4191439, this.F = 1750603025, this.G = 1694076839, this.H = -1090891868, this.outputLen = 28
                }
            }
            e.sha256 = (0, i.wrapConstructor)(() => new SHA256), e.sha224 = (0, i.wrapConstructor)(() => new SHA224)
        },
        4301: function(t, e, n) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.ripemd160 = e.RIPEMD160 = void 0;
            const r = n(1061),
                i = n(290),
                o = new Uint8Array([7, 4, 13, 1, 10, 6, 15, 3, 12, 0, 9, 5, 2, 14, 11, 8]),
                s = Uint8Array.from({
                    length: 16
                }, (t, e) => e),
                a = s.map(t => (9 * t + 5) % 16);
            let u = [s],
                c = [a];
            for (let t = 0; t < 4; t++)
                for (let e of [u, c]) e.push(e[t].map(t => o[t]));
            const l = [
                    [11, 14, 15, 12, 5, 8, 7, 9, 11, 13, 14, 15, 6, 7, 9, 8],
                    [12, 13, 11, 15, 6, 9, 9, 7, 12, 15, 11, 13, 7, 8, 7, 7],
                    [13, 15, 14, 11, 7, 7, 6, 8, 13, 14, 13, 12, 5, 5, 6, 9],
                    [14, 11, 12, 14, 8, 6, 5, 5, 15, 12, 15, 14, 9, 9, 8, 6],
                    [15, 12, 13, 13, 9, 5, 8, 6, 14, 11, 12, 11, 8, 6, 5, 5]
                ].map(t => new Uint8Array(t)),
                f = u.map((t, e) => t.map(t => l[e][t])),
                d = c.map((t, e) => t.map(t => l[e][t])),
                h = new Uint32Array([0, 1518500249, 1859775393, 2400959708, 2840853838]),
                p = new Uint32Array([1352829926, 1548603684, 1836072691, 2053994217, 0]),
                y = (t, e) => t << e | t >>> 32 - e;

            function b(t, e, n, r) {
                return 0 === t ? e ^ n ^ r : 1 === t ? e & n | ~e & r : 2 === t ? (e | ~n) ^ r : 3 === t ? e & r | n & ~r : e ^ (n | ~r)
            }
            const v = new Uint32Array(16);
            class RIPEMD160 extends r.SHA2 {
                constructor() {
                    super(64, 20, 8, !0), this.h0 = 1732584193, this.h1 = -271733879, this.h2 = -1732584194, this.h3 = 271733878, this.h4 = -1009589776
                }
                get() {
                    const {
                        h0: t,
                        h1: e,
                        h2: n,
                        h3: r,
                        h4: i
                    } = this;
                    return [t, e, n, r, i]
                }
                set(t, e, n, r, i) {
                    this.h0 = 0 | t, this.h1 = 0 | e, this.h2 = 0 | n, this.h3 = 0 | r, this.h4 = 0 | i
                }
                process(t, e) {
                    for (let n = 0; n < 16; n++, e += 4) v[n] = t.getUint32(e, !0);
                    let n = 0 | this.h0,
                        r = n,
                        i = 0 | this.h1,
                        o = i,
                        s = 0 | this.h2,
                        a = s,
                        l = 0 | this.h3,
                        w = l,
                        E = 0 | this.h4,
                        A = E;
                    for (let t = 0; t < 5; t++) {
                        const e = 4 - t,
                            g = h[t],
                            _ = p[t],
                            m = u[t],
                            x = c[t],
                            P = f[t],
                            I = d[t];
                        for (let e = 0; e < 16; e++) {
                            const r = y(n + b(t, i, s, l) + v[m[e]] + g, P[e]) + E | 0;
                            n = E, E = l, l = 0 | y(s, 10), s = i, i = r
                        }
                        for (let t = 0; t < 16; t++) {
                            const n = y(r + b(e, o, a, w) + v[x[t]] + _, I[t]) + A | 0;
                            r = A, A = w, w = 0 | y(a, 10), a = o, o = n
                        }
                    }
                    this.set(this.h1 + s + w | 0, this.h2 + l + A | 0, this.h3 + E + r | 0, this.h4 + n + o | 0, this.h0 + i + a | 0)
                }
                roundClean() {
                    v.fill(0)
                }
                destroy() {
                    this.destroyed = !0, this.buffer.fill(0), this.set(0, 0, 0, 0, 0)
                }
            }
            e.RIPEMD160 = RIPEMD160, e.ripemd160 = (0, i.wrapConstructor)(() => new RIPEMD160)
        },
        505: function(t, e, n) {
            "use strict";
            var r = this && this.__awaiter || function(t, e, n, r) {
                    return new(n || (n = Promise))((function(i, o) {
                        function s(t) {
                            try {
                                u(r.next(t))
                            } catch (t) {
                                o(t)
                            }
                        }

                        function a(t) {
                            try {
                                u(r.throw(t))
                            } catch (t) {
                                o(t)
                            }
                        }

                        function u(t) {
                            var e;
                            t.done ? i(t.value) : (e = t.value, e instanceof n ? e : new n((function(t) {
                                t(e)
                            }))).then(s, a)
                        }
                        u((r = r.apply(t, e || [])).next())
                    }))
                },
                i = this && this.__generator || function(t, e) {
                    var n, r, i, o, s = {
                        label: 0,
                        sent: function() {
                            if (1 & i[0]) throw i[1];
                            return i[1]
                        },
                        trys: [],
                        ops: []
                    };
                    return o = {
                        next: a(0),
                        throw: a(1),
                        return: a(2)
                    }, "function" == typeof Symbol && (o[Symbol.iterator] = function() {
                        return this
                    }), o;

                    function a(o) {
                        return function(a) {
                            return function(o) {
                                if (n) throw new TypeError("Generator is already executing.");
                                for (; s;) try {
                                    if (n = 1, r && (i = 2 & o[0] ? r.return : o[0] ? r.throw || ((i = r.return) && i.call(r), 0) : r.next) && !(i = i.call(r, o[1])).done) return i;
                                    switch (r = 0, i && (o = [2 & o[0], i.value]), o[0]) {
                                        case 0:
                                        case 1:
                                            i = o;
                                            break;
                                        case 4:
                                            return s.label++, {
                                                value: o[1],
                                                done: !1
                                            };
                                        case 5:
                                            s.label++, r = o[1], o = [0];
                                            continue;
                                        case 7:
                                            o = s.ops.pop(), s.trys.pop();
                                            continue;
                                        default:
                                            if (!(i = s.trys, (i = i.length > 0 && i[i.length - 1]) || 6 !== o[0] && 2 !== o[0])) {
                                                s = 0;
                                                continue
                                            }
                                            if (3 === o[0] && (!i || o[1] > i[0] && o[1] < i[3])) {
                                                s.label = o[1];
                                                break
                                            }
                                            if (6 === o[0] && s.label < i[1]) {
                                                s.label = i[1], i = o;
                                                break
                                            }
                                            if (i && s.label < i[2]) {
                                                s.label = i[2], s.ops.push(o);
                                                break
                                            }
                                            i[2] && s.ops.pop(), s.trys.pop();
                                            continue
                                    }
                                    o = e.call(t, s)
                                } catch (t) {
                                    o = [6, t], r = 0
                                } finally {
                                    n = i = 0
                                }
                                if (5 & o[0]) throw o[1];
                                return {
                                    value: o[0] ? o[1] : void 0,
                                    done: !0
                                }
                            }([o, a])
                        }
                    }
                };
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.createConnectionConfig = e.isValidSolanaAddress = e.getSolanaMetadataAddress = e.decodeTokenMetadata = void 0;
            var o = n(291),
                s = n(162),
                a = n(1868);
            (0, n(3649).extendBorsh)();
            var u = new s.PublicKey(a.METADATA_PROGRAM).toBuffer(),
                c = (new TextEncoder).encode(a.METADATA_PREFIX);
            e.decodeTokenMetadata = function(t) {
                return r(void 0, void 0, void 0, (function() {
                    return i(this, (function(e) {
                        return [2, (0, o.deserializeUnchecked)(a.METADATA_SCHEMA, a.Metadata, t)]
                    }))
                }))
            }, e.getSolanaMetadataAddress = function(t) {
                return r(this, void 0, void 0, (function() {
                    var e;
                    return i(this, (function(n) {
                        switch (n.label) {
                            case 0:
                                return e = new s.PublicKey(a.METADATA_PROGRAM), [4, s.PublicKey.findProgramAddress([c, u, t.toBuffer()], e)];
                            case 1:
                                return [2, n.sent()[0]]
                        }
                    }))
                }))
            };
            e.isValidSolanaAddress = function(t) {
                try {
                    return new s.PublicKey(t), !0
                } catch (t) {
                    return !1
                }
            };
            e.createConnectionConfig = function(t, e) {
                return void 0 === t && (t = (0, s.clusterApiUrl)("mainnet-beta")), void 0 === e && (e = "confirmed"), new s.Connection(t, e)
            }
        },
        533: function(t, e, n) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.sha384 = e.sha512_256 = e.sha512_224 = e.sha512 = e.SHA512 = void 0;
            const r = n(1061),
                i = n(1804),
                o = n(290),
                [s, a] = i.default.split(["0x428a2f98d728ae22", "0x7137449123ef65cd", "0xb5c0fbcfec4d3b2f", "0xe9b5dba58189dbbc", "0x3956c25bf348b538", "0x59f111f1b605d019", "0x923f82a4af194f9b", "0xab1c5ed5da6d8118", "0xd807aa98a3030242", "0x12835b0145706fbe", "0x243185be4ee4b28c", "0x550c7dc3d5ffb4e2", "0x72be5d74f27b896f", "0x80deb1fe3b1696b1", "0x9bdc06a725c71235", "0xc19bf174cf692694", "0xe49b69c19ef14ad2", "0xefbe4786384f25e3", "0x0fc19dc68b8cd5b5", "0x240ca1cc77ac9c65", "0x2de92c6f592b0275", "0x4a7484aa6ea6e483", "0x5cb0a9dcbd41fbd4", "0x76f988da831153b5", "0x983e5152ee66dfab", "0xa831c66d2db43210", "0xb00327c898fb213f", "0xbf597fc7beef0ee4", "0xc6e00bf33da88fc2", "0xd5a79147930aa725", "0x06ca6351e003826f", "0x142929670a0e6e70", "0x27b70a8546d22ffc", "0x2e1b21385c26c926", "0x4d2c6dfc5ac42aed", "0x53380d139d95b3df", "0x650a73548baf63de", "0x766a0abb3c77b2a8", "0x81c2c92e47edaee6", "0x92722c851482353b", "0xa2bfe8a14cf10364", "0xa81a664bbc423001", "0xc24b8b70d0f89791", "0xc76c51a30654be30", "0xd192e819d6ef5218", "0xd69906245565a910", "0xf40e35855771202a", "0x106aa07032bbd1b8", "0x19a4c116b8d2d0c8", "0x1e376c085141ab53", "0x2748774cdf8eeb99", "0x34b0bcb5e19b48a8", "0x391c0cb3c5c95a63", "0x4ed8aa4ae3418acb", "0x5b9cca4f7763e373", "0x682e6ff3d6b2b8a3", "0x748f82ee5defb2fc", "0x78a5636f43172f60", "0x84c87814a1f0ab72", "0x8cc702081a6439ec", "0x90befffa23631e28", "0xa4506cebde82bde9", "0xbef9a3f7b2c67915", "0xc67178f2e372532b", "0xca273eceea26619c", "0xd186b8c721c0c207", "0xeada7dd6cde0eb1e", "0xf57d4f7fee6ed178", "0x06f067aa72176fba", "0x0a637dc5a2c898a6", "0x113f9804bef90dae", "0x1b710b35131c471b", "0x28db77f523047d84", "0x32caab7b40c72493", "0x3c9ebe0a15c9bebc", "0x431d67c49c100d4c", "0x4cc5d4becb3e42b6", "0x597f299cfc657e2a", "0x5fcb6fab3ad6faec", "0x6c44198c4a475817"].map(t => BigInt(t))),
                u = new Uint32Array(80),
                c = new Uint32Array(80);
            class SHA512 extends r.SHA2 {
                constructor() {
                    super(128, 64, 16, !1), this.Ah = 1779033703, this.Al = -205731576, this.Bh = -1150833019, this.Bl = -2067093701, this.Ch = 1013904242, this.Cl = -23791573, this.Dh = -1521486534, this.Dl = 1595750129, this.Eh = 1359893119, this.El = -1377402159, this.Fh = -1694144372, this.Fl = 725511199, this.Gh = 528734635, this.Gl = -79577749, this.Hh = 1541459225, this.Hl = 327033209
                }
                get() {
                    const {
                        Ah: t,
                        Al: e,
                        Bh: n,
                        Bl: r,
                        Ch: i,
                        Cl: o,
                        Dh: s,
                        Dl: a,
                        Eh: u,
                        El: c,
                        Fh: l,
                        Fl: f,
                        Gh: d,
                        Gl: h,
                        Hh: p,
                        Hl: y
                    } = this;
                    return [t, e, n, r, i, o, s, a, u, c, l, f, d, h, p, y]
                }
                set(t, e, n, r, i, o, s, a, u, c, l, f, d, h, p, y) {
                    this.Ah = 0 | t, this.Al = 0 | e, this.Bh = 0 | n, this.Bl = 0 | r, this.Ch = 0 | i, this.Cl = 0 | o, this.Dh = 0 | s, this.Dl = 0 | a, this.Eh = 0 | u, this.El = 0 | c, this.Fh = 0 | l, this.Fl = 0 | f, this.Gh = 0 | d, this.Gl = 0 | h, this.Hh = 0 | p, this.Hl = 0 | y
                }
                process(t, e) {
                    for (let n = 0; n < 16; n++, e += 4) u[n] = t.getUint32(e), c[n] = t.getUint32(e += 4);
                    for (let t = 16; t < 80; t++) {
                        const e = 0 | u[t - 15],
                            n = 0 | c[t - 15],
                            r = i.default.rotrSH(e, n, 1) ^ i.default.rotrSH(e, n, 8) ^ i.default.shrSH(e, n, 7),
                            o = i.default.rotrSL(e, n, 1) ^ i.default.rotrSL(e, n, 8) ^ i.default.shrSL(e, n, 7),
                            s = 0 | u[t - 2],
                            a = 0 | c[t - 2],
                            l = i.default.rotrSH(s, a, 19) ^ i.default.rotrBH(s, a, 61) ^ i.default.shrSH(s, a, 6),
                            f = i.default.rotrSL(s, a, 19) ^ i.default.rotrBL(s, a, 61) ^ i.default.shrSL(s, a, 6),
                            d = i.default.add4L(o, f, c[t - 7], c[t - 16]),
                            h = i.default.add4H(d, r, l, u[t - 7], u[t - 16]);
                        u[t] = 0 | h, c[t] = 0 | d
                    }
                    let {
                        Ah: n,
                        Al: r,
                        Bh: o,
                        Bl: l,
                        Ch: f,
                        Cl: d,
                        Dh: h,
                        Dl: p,
                        Eh: y,
                        El: b,
                        Fh: v,
                        Fl: w,
                        Gh: E,
                        Gl: A,
                        Hh: g,
                        Hl: _
                    } = this;
                    for (let t = 0; t < 80; t++) {
                        const e = i.default.rotrSH(y, b, 14) ^ i.default.rotrSH(y, b, 18) ^ i.default.rotrBH(y, b, 41),
                            m = i.default.rotrSL(y, b, 14) ^ i.default.rotrSL(y, b, 18) ^ i.default.rotrBL(y, b, 41),
                            x = y & v ^ ~y & E,
                            P = b & w ^ ~b & A,
                            I = i.default.add5L(_, m, P, a[t], c[t]),
                            B = i.default.add5H(I, g, e, x, s[t], u[t]),
                            S = 0 | I,
                            L = i.default.rotrSH(n, r, 28) ^ i.default.rotrBH(n, r, 34) ^ i.default.rotrBH(n, r, 39),
                            k = i.default.rotrSL(n, r, 28) ^ i.default.rotrBL(n, r, 34) ^ i.default.rotrBL(n, r, 39),
                            C = n & o ^ n & f ^ o & f,
                            T = r & l ^ r & d ^ l & d;
                        g = 0 | E, _ = 0 | A, E = 0 | v, A = 0 | w, v = 0 | y, w = 0 | b, ({
                            h: y,
                            l: b
                        } = i.default.add(0 | h, 0 | p, 0 | B, 0 | S)), h = 0 | f, p = 0 | d, f = 0 | o, d = 0 | l, o = 0 | n, l = 0 | r;
                        const R = i.default.add3L(S, k, T);
                        n = i.default.add3H(R, B, L, C), r = 0 | R
                    }({
                        h: n,
                        l: r
                    } = i.default.add(0 | this.Ah, 0 | this.Al, 0 | n, 0 | r)), ({
                        h: o,
                        l: l
                    } = i.default.add(0 | this.Bh, 0 | this.Bl, 0 | o, 0 | l)), ({
                        h: f,
                        l: d
                    } = i.default.add(0 | this.Ch, 0 | this.Cl, 0 | f, 0 | d)), ({
                        h: h,
                        l: p
                    } = i.default.add(0 | this.Dh, 0 | this.Dl, 0 | h, 0 | p)), ({
                        h: y,
                        l: b
                    } = i.default.add(0 | this.Eh, 0 | this.El, 0 | y, 0 | b)), ({
                        h: v,
                        l: w
                    } = i.default.add(0 | this.Fh, 0 | this.Fl, 0 | v, 0 | w)), ({
                        h: E,
                        l: A
                    } = i.default.add(0 | this.Gh, 0 | this.Gl, 0 | E, 0 | A)), ({
                        h: g,
                        l: _
                    } = i.default.add(0 | this.Hh, 0 | this.Hl, 0 | g, 0 | _)), this.set(n, r, o, l, f, d, h, p, y, b, v, w, E, A, g, _)
                }
                roundClean() {
                    u.fill(0), c.fill(0)
                }
                destroy() {
                    this.buffer.fill(0), this.set(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0)
                }
            }
            e.SHA512 = SHA512;
            class SHA512_224 extends SHA512 {
                constructor() {
                    super(), this.Ah = -1942145080, this.Al = 424955298, this.Bh = 1944164710, this.Bl = -1982016298, this.Ch = 502970286, this.Cl = 855612546, this.Dh = 1738396948, this.Dl = 1479516111, this.Eh = 258812777, this.El = 2077511080, this.Fh = 2011393907, this.Fl = 79989058, this.Gh = 1067287976, this.Gl = 1780299464, this.Hh = 286451373, this.Hl = -1848208735, this.outputLen = 28
                }
            }
            class SHA512_256 extends SHA512 {
                constructor() {
                    super(), this.Ah = 573645204, this.Al = -64227540, this.Bh = -1621794909, this.Bl = -934517566, this.Ch = 596883563, this.Cl = 1867755857, this.Dh = -1774684391, this.Dl = 1497426621, this.Eh = -1775747358, this.El = -1467023389, this.Fh = -1101128155, this.Fl = 1401305490, this.Gh = 721525244, this.Gl = 746961066, this.Hh = 246885852, this.Hl = -2117784414, this.outputLen = 32
                }
            }
            class SHA384 extends SHA512 {
                constructor() {
                    super(), this.Ah = -876896931, this.Al = -1056596264, this.Bh = 1654270250, this.Bl = 914150663, this.Ch = -1856437926, this.Cl = 812702999, this.Dh = 355462360, this.Dl = -150054599, this.Eh = 1731405415, this.El = -4191439, this.Fh = -1900787065, this.Fl = 1750603025, this.Gh = -619958771, this.Gl = 1694076839, this.Hh = 1203062813, this.Hl = -1090891868, this.outputLen = 48
                }
            }
            e.sha512 = (0, o.wrapConstructor)(() => new SHA512), e.sha512_224 = (0, o.wrapConstructor)(() => new SHA512_224), e.sha512_256 = (0, o.wrapConstructor)(() => new SHA512_256), e.sha384 = (0, o.wrapConstructor)(() => new SHA384)
        },
        619: function(t, e, n) {
            "use strict";

            function r(t) {
                if (!Number.isSafeInteger(t) || t < 0) throw new Error("Wrong positive integer: " + t)
            }

            function i(t) {
                if ("boolean" != typeof t) throw new Error("Expected boolean, not " + t)
            }

            function o(t, ...e) {
                if (!(t instanceof Uint8Array)) throw new TypeError("Expected Uint8Array");
                if (e.length > 0 && !e.includes(t.length)) throw new TypeError(`Expected Uint8Array of length ${e}, not of length=${t.length}`)
            }

            function s(t) {
                if ("function" != typeof t || "function" != typeof t.create) throw new Error("Hash should be wrapped by utils.wrapConstructor");
                r(t.outputLen), r(t.blockLen)
            }

            function a(t, e = !0) {
                if (t.destroyed) throw new Error("Hash instance has been destroyed");
                if (e && t.finished) throw new Error("Hash#digest() has already been called")
            }

            function u(t, e) {
                o(t);
                const n = e.outputLen;
                if (t.length < n) throw new Error("digestInto() expects output buffer of length at least " + n)
            }
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.output = e.exists = e.hash = e.bytes = e.bool = e.number = void 0, e.number = r, e.bool = i, e.bytes = o, e.hash = s, e.exists = a, e.output = u;
            const c = {
                number: r,
                bool: i,
                bytes: o,
                hash: s,
                exists: a,
                output: u
            };
            e.default = c
        },
        718: function(t, e, n) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.hmac = void 0;
            const r = n(619),
                i = n(290);
            class HMAC extends i.Hash {
                constructor(t, e) {
                    super(), this.finished = !1, this.destroyed = !1, r.default.hash(t);
                    const n = (0, i.toBytes)(e);
                    if (this.iHash = t.create(), "function" != typeof this.iHash.update) throw new TypeError("Expected instance of class which extends utils.Hash");
                    this.blockLen = this.iHash.blockLen, this.outputLen = this.iHash.outputLen;
                    const o = this.blockLen,
                        s = new Uint8Array(o);
                    s.set(n.length > o ? t.create().update(n).digest() : n);
                    for (let t = 0; t < s.length; t++) s[t] ^= 54;
                    this.iHash.update(s), this.oHash = t.create();
                    for (let t = 0; t < s.length; t++) s[t] ^= 106;
                    this.oHash.update(s), s.fill(0)
                }
                update(t) {
                    return r.default.exists(this), this.iHash.update(t), this
                }
                digestInto(t) {
                    r.default.exists(this), r.default.bytes(t, this.outputLen), this.finished = !0, this.iHash.digestInto(t), this.oHash.update(t), this.oHash.digestInto(t), this.destroy()
                }
                digest() {
                    const t = new Uint8Array(this.oHash.outputLen);
                    return this.digestInto(t), t
                }
                _cloneInto(t) {
                    t || (t = Object.create(Object.getPrototypeOf(this), {}));
                    const {
                        oHash: e,
                        iHash: n,
                        finished: r,
                        destroyed: i,
                        blockLen: o,
                        outputLen: s
                    } = this;
                    return (t = t).finished = r, t.destroyed = i, t.blockLen = o, t.outputLen = s, t.oHash = e._cloneInto(t.oHash), t.iHash = n._cloneInto(t.iHash), t
                }
                destroy() {
                    this.destroyed = !0, this.oHash.destroy(), this.iHash.destroy()
                }
            }
            e.hmac = (t, e, n) => new HMAC(t, e).update(n).digest(), e.hmac.create = (t, e) => new HMAC(t, e)
        },
        921: function(t, e, n) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.shake256 = e.shake128 = e.keccak_512 = e.keccak_384 = e.keccak_256 = e.keccak_224 = e.sha3_512 = e.sha3_384 = e.sha3_256 = e.sha3_224 = e.Keccak = e.keccakP = void 0;
            const r = n(619),
                i = n(1804),
                o = n(290),
                [s, a, u] = [
                    [],
                    [],
                    []
                ],
                c = BigInt(0),
                l = BigInt(1),
                f = BigInt(2),
                d = BigInt(7),
                h = BigInt(256),
                p = BigInt(113);
            for (let t = 0, e = l, n = 1, r = 0; t < 24; t++) {
                [n, r] = [r, (2 * n + 3 * r) % 5], s.push(2 * (5 * r + n)), a.push((t + 1) * (t + 2) / 2 % 64);
                let i = c;
                for (let t = 0; t < 7; t++) e = (e << l ^ (e >> d) * p) % h, e & f && (i ^= l << (l << BigInt(t)) - l);
                u.push(i)
            }
            const [y, b] = i.default.split(u, !0), v = (t, e, n) => n > 32 ? i.default.rotlBH(t, e, n) : i.default.rotlSH(t, e, n), w = (t, e, n) => n > 32 ? i.default.rotlBL(t, e, n) : i.default.rotlSL(t, e, n);

            function E(t, e = 24) {
                const n = new Uint32Array(10);
                for (let r = 24 - e; r < 24; r++) {
                    for (let e = 0; e < 10; e++) n[e] = t[e] ^ t[e + 10] ^ t[e + 20] ^ t[e + 30] ^ t[e + 40];
                    for (let e = 0; e < 10; e += 2) {
                        const r = (e + 8) % 10,
                            i = (e + 2) % 10,
                            o = n[i],
                            s = n[i + 1],
                            a = v(o, s, 1) ^ n[r],
                            u = w(o, s, 1) ^ n[r + 1];
                        for (let n = 0; n < 50; n += 10) t[e + n] ^= a, t[e + n + 1] ^= u
                    }
                    let e = t[2],
                        i = t[3];
                    for (let n = 0; n < 24; n++) {
                        const r = a[n],
                            o = v(e, i, r),
                            u = w(e, i, r),
                            c = s[n];
                        e = t[c], i = t[c + 1], t[c] = o, t[c + 1] = u
                    }
                    for (let e = 0; e < 50; e += 10) {
                        for (let r = 0; r < 10; r++) n[r] = t[e + r];
                        for (let r = 0; r < 10; r++) t[e + r] ^= ~n[(r + 2) % 10] & n[(r + 4) % 10]
                    }
                    t[0] ^= y[r], t[1] ^= b[r]
                }
                n.fill(0)
            }
            e.keccakP = E;
            class Keccak extends o.Hash {
                constructor(t, e, n, i = !1, s = 24) {
                    if (super(), this.blockLen = t, this.suffix = e, this.outputLen = n, this.enableXOF = i, this.rounds = s, this.pos = 0, this.posOut = 0, this.finished = !1, this.destroyed = !1, r.default.number(n), 0 >= this.blockLen || this.blockLen >= 200) throw new Error("Sha3 supports only keccak-f1600 function");
                    this.state = new Uint8Array(200), this.state32 = (0, o.u32)(this.state)
                }
                keccak() {
                    E(this.state32, this.rounds), this.posOut = 0, this.pos = 0
                }
                update(t) {
                    r.default.exists(this);
                    const {
                        blockLen: e,
                        state: n
                    } = this, i = (t = (0, o.toBytes)(t)).length;
                    for (let r = 0; r < i;) {
                        const o = Math.min(e - this.pos, i - r);
                        for (let e = 0; e < o; e++) n[this.pos++] ^= t[r++];
                        this.pos === e && this.keccak()
                    }
                    return this
                }
                finish() {
                    if (this.finished) return;
                    this.finished = !0;
                    const {
                        state: t,
                        suffix: e,
                        pos: n,
                        blockLen: r
                    } = this;
                    t[n] ^= e, 0 != (128 & e) && n === r - 1 && this.keccak(), t[r - 1] ^= 128, this.keccak()
                }
                writeInto(t) {
                    r.default.exists(this, !1), r.default.bytes(t), this.finish();
                    const e = this.state,
                        {
                            blockLen: n
                        } = this;
                    for (let r = 0, i = t.length; r < i;) {
                        this.posOut >= n && this.keccak();
                        const o = Math.min(n - this.posOut, i - r);
                        t.set(e.subarray(this.posOut, this.posOut + o), r), this.posOut += o, r += o
                    }
                    return t
                }
                xofInto(t) {
                    if (!this.enableXOF) throw new Error("XOF is not possible for this instance");
                    return this.writeInto(t)
                }
                xof(t) {
                    return r.default.number(t), this.xofInto(new Uint8Array(t))
                }
                digestInto(t) {
                    if (r.default.output(t, this), this.finished) throw new Error("digest() was already called");
                    return this.writeInto(t), this.destroy(), t
                }
                digest() {
                    return this.digestInto(new Uint8Array(this.outputLen))
                }
                destroy() {
                    this.destroyed = !0, this.state.fill(0)
                }
                _cloneInto(t) {
                    const {
                        blockLen: e,
                        suffix: n,
                        outputLen: r,
                        rounds: i,
                        enableXOF: o
                    } = this;
                    return t || (t = new Keccak(e, n, r, o, i)), t.state32.set(this.state32), t.pos = this.pos, t.posOut = this.posOut, t.finished = this.finished, t.rounds = i, t.suffix = n, t.outputLen = r, t.enableXOF = o, t.destroyed = this.destroyed, t
                }
            }
            e.Keccak = Keccak;
            const A = (t, e, n) => (0, o.wrapConstructor)(() => new Keccak(e, t, n));
            e.sha3_224 = A(6, 144, 28), e.sha3_256 = A(6, 136, 32), e.sha3_384 = A(6, 104, 48), e.sha3_512 = A(6, 72, 64), e.keccak_224 = A(1, 144, 28), e.keccak_256 = A(1, 136, 32), e.keccak_384 = A(1, 104, 48), e.keccak_512 = A(1, 72, 64);
            const g = (t, e, n) => (0, o.wrapConstructorWithOpts)((r = {}) => new Keccak(e, t, void 0 === r.dkLen ? n : r.dkLen, !0));
            e.shake128 = g(31, 168, 16), e.shake256 = g(31, 136, 32)
        }
    }
]);