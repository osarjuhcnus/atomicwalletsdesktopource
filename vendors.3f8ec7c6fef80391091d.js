/*! For license information please see vendors.3f8ec7c6fef80391091d.js.LICENSE.txt */
(window.webpackJsonp = window.webpackJsonp || []).push([
    [284], {
        10005: function(t, i, e) {
            "use strict";
            const r = e(5466),
                n = e(5797),
                {
                    countLeft: s,
                    trimLeft: h
                } = e(5658),
                {
                    custom: o
                } = e(5952);
            class DHParams {
                constructor(t, i) {
                    this.p = h(t), this.g = h(i)
                }
                setP(t) {
                    return this.p = h(t), this
                }
                setG(t) {
                    return this.g = h(t), this
                }
                bits() {
                    return s(this.p)
                }
                size() {
                    return this.bits() + 7 >>> 3
                }
                toParams() {
                    return this
                }
                toJSON() {
                    return {
                        kty: "DH",
                        p: n.encodeURL(this.p),
                        g: n.encodeURL(this.g),
                        ext: !0
                    }
                }
                fromJSON(t) {
                    return r(t && "object" == typeof t), r("DH" === t.kty), this.p = n.decodeURL(t.p), this.g = n.decodeURL(t.g), this
                } [o]() {
                    return this.format()
                }
                format() {
                    return {
                        bits: this.bits(),
                        size: this.size(),
                        pbits: s(this.p),
                        gbits: s(this.g),
                        p: this.p.toString("hex"),
                        g: this.g.toString("hex")
                    }
                }
                static fromJSON(t) {
                    return (new this).fromJSON(t)
                }
            }
            class DHKey extends DHParams {
                constructor(t, i, e) {
                    super(t, i), this.y = h(e)
                }
                setParams(t) {
                    return this.fromParams(t)
                }
                setY(t) {
                    return this.y = h(t), this
                }
                toParams() {
                    return new DHParams(this.p, this.g)
                }
                fromParams(t) {
                    return r(t instanceof DHParams), this.p = t.p, this.g = t.g, this
                }
                toPublic() {
                    return this
                }
                toJSON() {
                    return {
                        kty: "DH",
                        p: n.encodeURL(this.p),
                        g: n.encodeURL(this.g),
                        y: n.encodeURL(this.y),
                        ext: !0
                    }
                }
                fromJSON(t) {
                    return r(t && "object" == typeof t), r("DH" === t.kty), this.p = n.decodeURL(t.p), this.g = n.decodeURL(t.g), this.y = n.decodeURL(t.y), this
                }
                static fromParams(t) {
                    return (new this).fromParams(t)
                }
            }
            class DHPublicKey extends DHKey {
                constructor(t, i, e) {
                    super(t, i, e)
                }
                format() {
                    return {
                        bits: this.bits(),
                        size: this.size(),
                        pbits: s(this.p),
                        gbits: s(this.g),
                        ybits: s(this.y),
                        p: this.p.toString("hex"),
                        g: this.g.toString("hex"),
                        y: this.y.toString("hex")
                    }
                }
            }
            i.DEFAULT_BITS = 2048, i.DEFAULT_GEN = 2, i.MIN_BITS = 512, i.MAX_BITS = 1e4, i.MIN_GEN = 2, i.MAX_GEN = 2 ** 31 - 1, i.DHKey = DHKey, i.DHParams = DHParams, i.DHPublicKey = DHPublicKey, i.DHPrivateKey = class DHPrivateKey extends DHKey {
                constructor(t, i, e, r) {
                    super(t, i, e), this.x = h(r)
                }
                setX(t) {
                    return this.x = h(t), this
                }
                toPublic() {
                    const t = new DHPublicKey;
                    return t.p = this.p, t.g = this.g, t.y = this.y, t
                }
                toJSON() {
                    return {
                        kty: "DH",
                        p: n.encodeURL(this.p),
                        g: n.encodeURL(this.g),
                        y: n.encodeURL(this.y),
                        x: n.encodeURL(this.x),
                        ext: !0
                    }
                }
                fromJSON(t) {
                    return r(t && "object" == typeof t), r("DH" === t.kty), this.p = n.decodeURL(t.p), this.g = n.decodeURL(t.g), null != t.y && (this.y = n.decodeURL(t.y)), this.x = n.decodeURL(t.x), this
                }
                format() {
                    return {
                        bits: this.bits(),
                        size: this.size(),
                        pbits: s(this.p),
                        gbits: s(this.g),
                        ybits: s(this.y),
                        xbits: s(this.x),
                        p: this.p.toString("hex"),
                        g: this.g.toString("hex"),
                        y: this.y.toString("hex"),
                        x: this.x.toString("hex")
                    }
                }
            }
        },
        10007: function(t, i, e) {
            "use strict";
            const r = e(5466),
                n = e(5797),
                {
                    countLeft: s,
                    trimLeft: h
                } = e(5658),
                {
                    custom: o
                } = e(5952);
            class DSAParams {
                constructor(t, i, e) {
                    this.p = h(t), this.q = h(i), this.g = h(e)
                }
                setP(t) {
                    return this.p = h(t), this
                }
                setQ(t) {
                    return this.q = h(t), this
                }
                setG(t) {
                    return this.g = h(t), this
                }
                L() {
                    return s(this.p)
                }
                N() {
                    return s(this.q)
                }
                bits() {
                    return this.L()
                }
                size() {
                    return this.N() + 7 >>> 3
                }
                toParams() {
                    return this
                }
                toJSON() {
                    return {
                        kty: "DSA",
                        p: n.encodeURL(this.p),
                        q: n.encodeURL(this.q),
                        g: n.encodeURL(this.g),
                        ext: !0
                    }
                }
                fromJSON(t) {
                    return r(t && "object" == typeof t), r("DSA" === t.kty), this.p = n.decodeURL(t.p), this.q = n.decodeURL(t.q), this.g = n.decodeURL(t.g), this
                } [o]() {
                    return this.format()
                }
                format() {
                    return {
                        bits: this.bits(),
                        size: this.size(),
                        pbits: s(this.p),
                        qbits: s(this.q),
                        gbits: s(this.g),
                        p: this.p.toString("hex"),
                        q: this.q.toString("hex"),
                        g: this.g.toString("hex")
                    }
                }
                static fromJSON(t) {
                    return (new this).fromJSON(t)
                }
            }
            class DSAKey extends DSAParams {
                constructor(t, i, e, r) {
                    super(t, i, e), this.y = h(r)
                }
                setParams(t) {
                    return this.fromParams(t)
                }
                setY(t) {
                    return this.y = h(t), this
                }
                toParams() {
                    return new DSAParams(this.p, this.q, this.g)
                }
                fromParams(t) {
                    return r(t instanceof DSAParams), this.p = t.p, this.q = t.q, this.g = t.g, this
                }
                toPublic() {
                    return this
                }
                toJSON() {
                    return {
                        kty: "DSA",
                        p: n.encodeURL(this.p),
                        q: n.encodeURL(this.q),
                        g: n.encodeURL(this.g),
                        y: n.encodeURL(this.y),
                        ext: !0
                    }
                }
                fromJSON(t) {
                    return r(t && "object" == typeof t), r("DSA" === t.kty), this.p = n.decodeURL(t.p), this.q = n.decodeURL(t.q), this.g = n.decodeURL(t.g), this.y = n.decodeURL(t.y), this
                }
                static fromParams(t) {
                    return (new this).fromParams(t)
                }
            }
            class DSAPublicKey extends DSAKey {
                constructor(t, i, e, r) {
                    super(t, i, e, r)
                }
                format() {
                    return {
                        bits: this.bits(),
                        size: this.size(),
                        pbits: s(this.p),
                        qbits: s(this.q),
                        gbits: s(this.g),
                        ybits: s(this.y),
                        p: this.p.toString("hex"),
                        q: this.q.toString("hex"),
                        g: this.g.toString("hex"),
                        y: this.y.toString("hex")
                    }
                }
            }
            i.DEFAULT_BITS = 2048, i.MIN_BITS = 512, i.MAX_BITS = 1e4, i.DSAKey = DSAKey, i.DSAParams = DSAParams, i.DSAPublicKey = DSAPublicKey, i.DSAPrivateKey = class DSAPrivateKey extends DSAKey {
                constructor(t, i, e, r, n) {
                    super(t, i, e, r), this.x = h(n)
                }
                setX(t) {
                    return this.x = h(t), this
                }
                toPublic() {
                    const t = new DSAPublicKey;
                    return t.p = this.p, t.q = this.q, t.g = this.g, t.y = this.y, t
                }
                toJSON() {
                    return {
                        kty: "DSA",
                        p: n.encodeURL(this.p),
                        q: n.encodeURL(this.q),
                        g: n.encodeURL(this.g),
                        y: n.encodeURL(this.y),
                        x: n.encodeURL(this.x),
                        ext: !0
                    }
                }
                fromJSON(t) {
                    return r(t && "object" == typeof t), r("DSA" === t.kty), this.p = n.decodeURL(t.p), this.q = n.decodeURL(t.q), this.g = n.decodeURL(t.g), null != t.y && (this.y = n.decodeURL(t.y)), this.x = n.decodeURL(t.x), this
                }
                format() {
                    return {
                        bits: this.bits(),
                        size: this.size(),
                        pbits: s(this.p),
                        qbits: s(this.q),
                        gbits: s(this.g),
                        ybits: s(this.y),
                        xbits: s(this.x),
                        p: this.p.toString("hex"),
                        q: this.q.toString("hex"),
                        g: this.g.toString("hex"),
                        y: this.y.toString("hex"),
                        x: this.x.toString("hex")
                    }
                }
            }
        },
        10016: function(t, i, e) {
            "use strict";
            const r = e(5466),
                n = [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, -1, -1, -1, -1, -1, -1, -1, 9, 10, 11, 12, 13, 14, 15, 16, -1, 17, 18, 19, 20, 21, -1, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, -1, -1, -1, -1, -1, -1, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, -1, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, -1, -1, -1, -1, -1];
            i.native = 0, i.encode = function(t) {
                r(Buffer.isBuffer(t));
                let i = 0,
                    e = 0;
                for (; e < t.length && 0 === t[e]; e++) i += 1;
                const n = Buffer.allocUnsafe(1 + (138 * t.length / 100 | 0));
                n.fill(0);
                let s = 0;
                for (; e < t.length; e++) {
                    let i = t[e],
                        h = 0;
                    for (let t = n.length - 1; t >= 0 && !(0 === i && h >= s); t--, h++) i += 256 * n[t], n[t] = i % 58, i = i / 58 | 0;
                    r(0 === i), s = h
                }
                for (e = n.length - s; e < n.length && 0 === n[e];) e += 1;
                let h = "";
                for (let t = 0; t < i; t++) h += "1";
                for (; e < n.length; e++) h += "123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz" [n[e]];
                return h
            }, i.decode = function(t) {
                r("string" == typeof t);
                let i = 0,
                    e = 0;
                for (; e < t.length && "1" === t[e]; e++) i += 1;
                const s = Buffer.allocUnsafe(1 + (733 * t.length / 1e3 | 0));
                s.fill(0);
                let h = 0;
                for (; e < t.length; e++) {
                    const i = t.charCodeAt(e),
                        o = 65408 & i ? -1 : n[i];
                    if (-1 === o) throw new Error("Non-base58 character.");
                    let u = o,
                        l = 0;
                    for (let t = s.length - 1; t >= 0 && !(0 === u && l >= h); t--, l++) u += 58 * s[t], s[t] = 255 & u, u >>>= 8;
                    r(0 === u), h = l
                }
                for (e = 0; e < s.length && 0 === s[e];) e += 1;
                const o = Buffer.allocUnsafe(i + (s.length - e));
                let u;
                for (u = 0; u < i; u++) o[u] = 0;
                for (; e < s.length;) o[u++] = s[e++];
                return o
            }, i.test = function(t) {
                r("string" == typeof t);
                for (let i = 0; i < t.length; i++) {
                    const e = t.charCodeAt(i);
                    if (65408 & e) return !1;
                    if (-1 === n[e]) return !1
                }
                return !0
            }
        },
        10018: function(t, i, e) {
            "use strict";
            const r = e(5466),
                n = Buffer.allocUnsafe(66),
                s = "qpzry9x8gf2tvdw0s3jn54khce6mua7l",
                h = [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 15, -1, 10, 17, 21, 20, 26, 30, 7, 5, -1, -1, -1, -1, -1, -1, -1, 29, -1, 24, 13, 25, 9, 8, 23, -1, 18, 22, 31, 27, 19, -1, 1, 0, 3, 16, 11, 28, 12, 14, 6, 4, 2, -1, -1, -1, -1, -1, -1, 29, -1, 24, 13, 25, 9, 8, 23, -1, 18, 22, 31, 27, 19, -1, 1, 0, 3, 16, 11, 28, 12, 14, 6, 4, 2, -1, -1, -1, -1, -1];

            function o(t) {
                const i = t >>> 25;
                return (33554431 & t) << 5 ^ 996825010 & -(i >>> 0 & 1) ^ 642813549 & -(i >>> 1 & 1) ^ 513874426 & -(i >>> 2 & 1) ^ 1027748829 & -(i >>> 3 & 1) ^ 705979059 & -(i >>> 4 & 1)
            }

            function u(t, i) {
                r("string" == typeof t), r(Buffer.isBuffer(i));
                let e, n = 1;
                for (e = 0; e < t.length; e++) {
                    const i = t.charCodeAt(e);
                    if (65280 & i || i >>> 5 == 0) throw new Error("Invalid bech32 character.");
                    n = o(n) ^ i >>> 5
                }
                if (e + 7 + i.length > 90) throw new Error("Invalid bech32 data length.");
                n = o(n);
                let h = "";
                for (let i = 0; i < t.length; i++) {
                    const e = t.charCodeAt(i);
                    n = o(n) ^ 31 & e, h += t[i]
                }
                h += "1";
                for (let t = 0; t < i.length; t++) {
                    const e = i[t];
                    if (e >>> 5 != 0) throw new Error("Invalid bech32 value.");
                    n = o(n) ^ e, h += s[e]
                }
                for (let t = 0; t < 6; t++) n = o(n);
                n ^= 1;
                for (let t = 0; t < 6; t++) h += s[n >>> 5 * (5 - t) & 31];
                return h
            }

            function l(t) {
                if (r("string" == typeof t), t.length < 8 || t.length > 90) throw new Error("Invalid bech32 string length.");
                let i = 0;
                for (; i < t.length && "1" !== t[t.length - 1 - i];) i += 1;
                const e = t.length - (1 + i);
                if (1 + i >= t.length || i < 6) throw new Error("Invalid bech32 data length.");
                i -= 6;
                const n = Buffer.allocUnsafe(i);
                let s, u = 1,
                    l = !1,
                    a = !1,
                    f = "";
                for (let i = 0; i < e; i++) {
                    let e = t.charCodeAt(i);
                    if (e < 33 || e > 126) throw new Error("Invalid bech32 character.");
                    e >= 97 && e <= 122 ? l = !0 : e >= 65 && e <= 90 && (a = !0, e = e - 65 + 97), f += String.fromCharCode(e), u = o(u) ^ e >>> 5
                }
                for (u = o(u), s = 0; s < e; s++) u = o(u) ^ 31 & t.charCodeAt(s);
                for (s += 1; s < t.length;) {
                    const i = t.charCodeAt(s),
                        r = 65408 & i ? -1 : h[i];
                    if (-1 === r) throw new Error("Invalid bech32 character.");
                    i >= 97 && i <= 122 ? l = !0 : i >= 65 && i <= 90 && (a = !0), u = o(u) ^ r, s + 6 < t.length && (n[s - (1 + e)] = r), s += 1
                }
                if (l && a) throw new Error("Invalid bech32 casing.");
                if (1 !== u) throw new Error("Invalid bech32 checksum.");
                return [f, n.slice(0, i)]
            }

            function a(t, i, e, n, s, h, o) {
                r(Buffer.isBuffer(t)), r(i >>> 0 === i), r(Buffer.isBuffer(e)), r(n >>> 0 === n), r((255 & s) === s), r((255 & h) === h), r("boolean" == typeof o), r(0 !== s), r(0 !== h);
                const u = (1 << h) - 1;
                let l = 0,
                    a = 0;
                for (; i < t.length; i++) {
                    const r = t[i];
                    if (r >>> s != 0) throw new Error("Invalid bits.");
                    for (l = l << s | r, a += s; a >= h;) a -= h, e[n++] = l >>> a & u
                }
                if (o) a && (e[n++] = l << h - a & u);
                else if (a >= s || l << h - a & u) throw new Error("Invalid bits.");
                return r(n <= e.length), e.slice(0, n)
            }
            i.native = 0, i.serialize = u, i.deserialize = l, i.is = function(t) {
                r("string" == typeof t);
                try {
                    l(t)
                } catch (t) {
                    return !1
                }
                return !0
            }, i.convertBits = function(t, i, e, n) {
                r(Buffer.isBuffer(t));
                const s = function(t, i, e, n) {
                    r(t >>> 0 === t), r((255 & i) === i), r((255 & e) === e), r("boolean" == typeof n), r(0 !== i), r(0 !== e);
                    let s = (t * i + (e - 1)) / e;
                    return s >>>= 0, n && (s += 1), s
                }(t.length, i, e, n);
                return a(t, 0, Buffer.allocUnsafe(s), 0, i, e, n)
            }, i.encode = function(t, i, e) {
                if (r("string" == typeof t), r((255 & i) === i), r(Buffer.isBuffer(e)), i < 0 || i > 31) throw new Error("Invalid bech32 version.");
                if (e.length < 2 || e.length > 40) throw new Error("Invalid bech32 data length.");
                const s = n;
                return s[0] = i, u(t, a(e, 0, s, 1, 8, 5, !0))
            }, i.decode = function(t) {
                const [i, e] = l(t);
                if (0 === e.length || e.length > 65) throw new Error("Invalid bech32 data length.");
                const r = e[0];
                if (r > 31) throw new Error("Invalid bech32 version.");
                const n = a(e, 1, e, 0, 5, 8, !1);
                if (n.length < 2 || n.length > 40) throw new Error("Invalid bech32 data length.");
                return [i, r, n]
            }, i.test = function(t) {
                let i;
                r("string" == typeof t);
                try {
                    [, i] = l(t)
                } catch (t) {
                    return !1
                }
                return !(0 === i.length || i.length > 65) && !(i[0] > 31)
            }
        },
        10028: function(t, i, e) {
            "use strict";
            const r = e(5466);
            class HKDF {
                constructor(t, i, e, n) {
                    r(t && "string" == typeof t.id), this.hash = t, this.size = t.size, this.prk = null, this.state = null, this.slab = null, this.save = 0, (i || e || n) && this.init(i, e, n)
                }
                init(t, i, e) {
                    return null == t && (t = Buffer.alloc(0)), null == i && (i = Buffer.alloc(this.size, 0)), this.prk = this.hash.mac(t, i), this.reset(e), this
                }
                set(t, i) {
                    return r(Buffer.isBuffer(t)), r(t.length === this.size), this.prk = t, this.reset(i), this
                }
                reset(t) {
                    null == t && (t = Buffer.alloc(0)), r(Buffer.isBuffer(t));
                    const i = Buffer.allocUnsafe(this.size + t.length + 1);
                    return i.fill(0, 0, this.size), t.copy(i, this.size), i[i.length - 1] = 0, this.state = i, this.slab = Buffer.allocUnsafe(this.size), this.save = 0, this
                }
                generate(t) {
                    if (r(t >>> 0 === t), !this.prk || !this.state || !this.slab) throw new Error("HKDF is not initialized.");
                    const i = (255 - this.state[this.state.length - 1]) * this.size;
                    if (t > this.save + i) throw new Error("Too many bytes requested.");
                    const e = Math.ceil(Math.max(0, t - this.save) / this.size),
                        n = Buffer.allocUnsafe(this.save + e * this.size);
                    this.slab.copy(n, 0, 0, this.save);
                    for (let t = 0; t < e; t++) {
                        let i = this.state;
                        0 === i[i.length - 1] && (i = i.slice(this.size)), r(255 !== i[i.length - 1]), i[i.length - 1] += 1;
                        const e = this.hash.mac(i, this.prk);
                        e.copy(this.state, 0), e.copy(n, this.save + t * this.size)
                    }
                    return this.save = n.copy(this.slab, 0, t), n.slice(0, t)
                }
                randomBytes(t) {
                    return this.generate(t)
                }
                static extract(t, i, e) {
                    return r(t && "string" == typeof t.id), null == i && (i = Buffer.alloc(0)), null == e && (e = Buffer.alloc(t.size, 0)), t.mac(i, e)
                }
                static expand(t, i, e, r) {
                    return new HKDF(t).set(i, e).generate(r)
                }
                static derive(t, i, e, r, n) {
                    return new HKDF(t).init(i, e, r).generate(n)
                }
            }
            HKDF.native = 0, t.exports = HKDF
        },
        10058: function(t, i, e) {
            "use strict";
            const r = e(5466),
                n = e(5797),
                {
                    countLeft: s,
                    trimLeft: h
                } = e(5658),
                {
                    custom: o
                } = e(5952),
                u = Buffer.alloc(1, 0);
            class RSAKey {
                constructor() {
                    this.n = u, this.e = u
                }
                setN(t) {
                    return this.n = h(t), this
                }
                setE(t) {
                    return "number" == typeof t && (t = function(t) {
                        r(Number.isSafeInteger(t) && t >= 0);
                        const i = t * (1 / 4294967296) >>> 0,
                            e = t >>> 0,
                            n = Buffer.allocUnsafe(8);
                        return n[0] = 0, n[1] = 0, n[2] = i >>> 8, n[3] = i, n[4] = e >>> 24, n[5] = e >>> 16, n[6] = e >>> 8, n[7] = e, n
                    }(t)), this.e = h(t), this
                }
                bits() {
                    return s(this.n)
                }
                size() {
                    return this.bits() + 7 >>> 3
                }
                pad(t) {
                    r(Buffer.isBuffer(t));
                    const i = this.bits();
                    if (i < 512 || i > 16384) return t;
                    const e = i + 7 >>> 3;
                    if (t.length >= e) return t;
                    const n = Buffer.allocUnsafe(e),
                        s = e - t.length;
                    return n.fill(0, 0, s), t.copy(n, s), n
                }
                toPublic() {
                    return this
                }
                toJSON() {
                    return {
                        kty: "RSA",
                        n: n.encodeURL(this.n),
                        e: n.encodeURL(this.e),
                        ext: !0
                    }
                }
                fromJSON(t) {
                    return r(t && "object" == typeof t), r("RSA" === t.kty), this.n = n.decodeURL(t.n), this.e = n.decodeURL(t.e), this
                } [o]() {
                    return this.format()
                }
                format() {
                    return {
                        bits: this.bits(),
                        n: this.n.toString("hex"),
                        e: this.e.toString("hex")
                    }
                }
                static fromJSON(t) {
                    return (new this).fromJSON(t)
                }
            }
            class RSAPublicKey extends RSAKey {
                constructor(t, i) {
                    super(), this.n = h(t), this.e = h(i)
                }
            }
            i.DEFAULT_BITS = 2048, i.DEFAULT_EXP = 65537, i.MIN_BITS = 512, i.MAX_BITS = 16384, i.MIN_EXP = 3, i.MAX_EXP = 2 ** 33 - 1, i.MIN_EXP_BITS = 2, i.MAX_EXP_BITS = 33, i.RSAKey = RSAKey, i.RSAPublicKey = RSAPublicKey, i.RSAPrivateKey = class RSAPrivateKey extends RSAKey {
                constructor(t, i, e, r, n, s, o, u) {
                    super(), this.n = h(t), this.e = h(i), this.d = h(e), this.p = h(r), this.q = h(n), this.dp = h(s), this.dq = h(o), this.qi = h(u)
                }
                setD(t) {
                    return this.d = h(t), this
                }
                setP(t) {
                    return this.p = h(t), this
                }
                setQ(t) {
                    return this.q = h(t), this
                }
                setDP(t) {
                    return this.dp = h(t), this
                }
                setDQ(t) {
                    return this.dq = h(t), this
                }
                setQI(t) {
                    return this.qi = h(t), this
                }
                toPublic() {
                    const t = new RSAPublicKey;
                    return t.n = this.n, t.e = this.e, t
                }
                toJSON() {
                    return {
                        kty: "RSA",
                        n: n.encodeURL(this.n),
                        e: n.encodeURL(this.e),
                        d: n.encodeURL(this.d),
                        p: n.encodeURL(this.p),
                        q: n.encodeURL(this.q),
                        dp: n.encodeURL(this.dp),
                        dq: n.encodeURL(this.dq),
                        qi: n.encodeURL(this.qi),
                        ext: !0
                    }
                }
                fromJSON(t) {
                    return r(t && "object" == typeof t), r("RSA" === t.kty), null != t.n && (this.n = n.decodeURL(t.n)), null != t.e && (this.e = n.decodeURL(t.e)), null != t.d && (this.d = n.decodeURL(t.d)), null != t.p && (this.p = n.decodeURL(t.p)), null != t.q && (this.q = n.decodeURL(t.q)), null != t.dp && (this.dp = n.decodeURL(t.dp)), null != t.dq && (this.dq = n.decodeURL(t.dq)), null != t.qi && (this.qi = n.decodeURL(t.qi)), this
                }
                format() {
                    return {
                        bits: this.bits(),
                        n: this.n.toString("hex"),
                        e: this.e.toString("hex"),
                        d: this.d.toString("hex"),
                        p: this.p.toString("hex"),
                        q: this.q.toString("hex"),
                        dp: this.dp.toString("hex"),
                        dq: this.dq.toString("hex"),
                        qi: this.qi.toString("hex")
                    }
                }
            }
        },
        5579: function(t, i, e) {
            "use strict";
            const r = e(5466);
            t.exports = class HMAC {
                constructor(t, i, e = [], n = []) {
                    r("function" == typeof t), r(i >>> 0 === i), r(Array.isArray(e)), r(Array.isArray(n)), this.hash = t, this.size = i, this.x = e, this.y = n, this.inner = new t, this.outer = new t
                }
                init(t) {
                    if (r(Buffer.isBuffer(t)), t.length > this.size) {
                        const i = new(0, this.hash);
                        i.init(...this.x), i.update(t), t = i.final(...this.y), r(t.length <= this.size)
                    }
                    const i = Buffer.allocUnsafe(this.size);
                    for (let e = 0; e < t.length; e++) i[e] = 54 ^ t[e];
                    for (let e = t.length; e < i.length; e++) i[e] = 54;
                    this.inner.init(...this.x), this.inner.update(i);
                    for (let e = 0; e < t.length; e++) i[e] = 92 ^ t[e];
                    for (let e = t.length; e < i.length; e++) i[e] = 92;
                    return this.outer.init(...this.x), this.outer.update(i), this
                }
                update(t) {
                    return this.inner.update(t), this
                }
                final() {
                    return this.outer.update(this.inner.final(...this.y)), this.outer.final(...this.y)
                }
            }
        },
        5952: function(t, i, e) {
            "use strict";
            i.custom = "inspect"
        },
        6657: function(t, i, e) {
            "use strict";
            const {
                custom: r
            } = e(5952), n = ["", "0", "00", "000", "0000", "00000", "000000", "0000000", "00000000", "000000000", "0000000000", "00000000000", "000000000000", "0000000000000", "00000000000000", "000000000000000", "0000000000000000", "00000000000000000", "000000000000000000", "0000000000000000000", "00000000000000000000", "000000000000000000000", "0000000000000000000000", "00000000000000000000000", "000000000000000000000000", "0000000000000000000000000"], s = [0, 25, 16, 12, 11, 10, 9, 8, 8, 7, 7, 7, 7, 6, 6, 6, 6, 6, 6, 6, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5], h = [0, 33554432, 43046721, 16777216, 48828125, 60466176, 40353607, 16777216, 43046721, 1e7, 19487171, 35831808, 62748517, 7529536, 11390625, 16777216, 24137569, 34012224, 47045881, 64e6, 4084101, 5153632, 6436343, 7962624, 9765625, 11881376, 14348907, 17210368, 20511149, 243e5, 28629151, 33554432, 39135393, 45435424, 52521875, 60466176], o = {
                p192: null,
                p224: null,
                p521: null,
                k256: null,
                p25519: null,
                p448: null
            }, u = 0, l = 1, a = 2, f = 3, c = 4, d = 7, m = "function" == typeof BigInt;
            class BN {
                constructor(t, i, e) {
                    this.words = [0], this.length = 1, this.negative = 0, this.red = null, this.from(t, i, e)
                }
                _iadd(t, i) {
                    let e = 0,
                        r = 0;
                    for (t.length < i.length && ([t, i] = [i, t]), t !== this && this._alloc(t.length); r < i.length; r++) {
                        const n = (0 | t.words[r]) + (0 | i.words[r]) + e;
                        this.words[r] = 67108863 & n, e = n >>> 26
                    }
                    for (; 0 !== e && r < t.length; r++) {
                        const i = (0 | t.words[r]) + e;
                        this.words[r] = 67108863 & i, e = i >>> 26
                    }
                    if (this.length = t.length, 0 !== e) this._alloc(this.length + 1), this.words[this.length++] = e;
                    else if (t !== this)
                        for (; r < t.length; r++) this.words[r] = t.words[r];
                    return this
                }
                _iaddn(t) {
                    if (this.words[0] += t, this.words[0] < 67108864) return this;
                    let i = 0;
                    for (this._alloc(this.length + 1), this.words[this.length] = 0; i < this.length && this.words[i] >= 67108864; i++) this.words[i] -= 67108864, this.words[i + 1] += 1;
                    return this.length = Math.max(this.length, i + 1), this
                }
                iadd(t) {
                    if (w(BN.isBN(t), "num", "bignum"), this.negative === t.negative) this._iadd(this, t);
                    else {
                        const i = this.ucmp(t);
                        if (0 === i) return this.words[0] = 0, this.length = 1, this.negative = 0, this;
                        i < 0 ? (this._isub(t, this), this.negative ^= 1) : this._isub(this, t)
                    }
                    return this
                }
                iaddn(t) {
                    w(y(t), "num", "smi");
                    const i = t < 0 | 0;
                    return i && (t = -t), this.negative === i ? this._iaddn(t) : 1 === this.length && this.words[0] < t ? (this.words[0] = t - this.words[0], this.negative ^= 1) : this._isubn(t), this
                }
                add(t) {
                    return w(BN.isBN(t), "num", "bignum"), t.length > this.length ? t.clone().iadd(this) : this.clone().iadd(t)
                }
                addn(t) {
                    return this.clone().iaddn(t)
                }
                _isub(t, i) {
                    let e = 0,
                        r = 0;
                    for (p(t.length >= i.length), t !== this && this._alloc(t.length); r < i.length; r++) {
                        const n = (0 | t.words[r]) - (0 | i.words[r]) + e;
                        e = n >> 26, this.words[r] = 67108863 & n
                    }
                    for (; 0 !== e && r < t.length; r++) {
                        const i = (0 | t.words[r]) + e;
                        e = i >> 26, this.words[r] = 67108863 & i
                    }
                    if (p(0 === e), t !== this)
                        for (; r < t.length; r++) this.words[r] = t.words[r];
                    return this.length = Math.max(this.length, r), this._strip()
                }
                _isubn(t) {
                    if (this.words[0] -= t, this.words[0] >= 0) return this._normalize();
                    p(1 !== this.length), this._alloc(this.length + 1);
                    for (let t = 0; t < this.length && this.words[t] < 0; t++) this.words[t] += 67108864, this.words[t + 1] -= 1;
                    return this.words[this.length] = 0, this._strip()
                }
                isub(t) {
                    if (w(BN.isBN(t), "num", "bignum"), this.negative !== t.negative) this._iadd(this, t);
                    else {
                        const i = this.ucmp(t);
                        if (0 === i) return this.words[0] = 0, this.length = 1, this.negative = 0, this;
                        i < 0 ? (this._isub(t, this), this.negative ^= 1) : this._isub(this, t)
                    }
                    return this
                }
                isubn(t) {
                    w(y(t), "num", "smi");
                    const i = t < 0 | 0;
                    return i && (t = -t), this.negative !== i ? this._iaddn(t) : 1 === this.length && this.words[0] < t ? (this.words[0] = t - this.words[0], this.negative ^= 1) : this._isubn(t), this
                }
                sub(t) {
                    return this.clone().isub(t)
                }
                subn(t) {
                    return this.clone().isubn(t)
                }
                _mul(t, i) {
                    if (w(BN.isBN(t), "num", "bignum"), w(BN.isBN(i), "out", "bignum"), 10 === this.length && 10 === t.length) return P(this, t, i);
                    const e = this.length + t.length;
                    return e < 63 ? K(this, t, i) : e < 1024 ? D(this, t, i) : function(t, i, e) {
                        if (!m || t.length + i.length > 82595519) return D(t, i, e);
                        const r = BigInt(0),
                            n = BigInt(67108863),
                            s = BigInt(26);
                        let h = t.toBigInt() * i.toBigInt();
                        const o = h < r | 0;
                        o && (h = -h);
                        let u = 0;
                        for (; h > r;) e.words[u++] = Number(h & n), h >>= s;
                        0 === u && (e.words[u++] = 0);
                        return e.length = u, e.negative = o, e
                    }(this, t, i)
                }
                imul(t) {
                    return this.mul(t)._move(this)
                }
                imuln(t) {
                    w(y(t), "num", "smi");
                    const i = t < 0 | 0;
                    i && (t = -t);
                    let e = 0;
                    for (let i = 0; i < this.length; i++) {
                        const r = this.words[i] * t,
                            n = (67108863 & r) + (67108863 & e);
                        e >>= 26, e += r / 67108864 | 0, e += n >>> 26, this.words[i] = 67108863 & n
                    }
                    return this.negative ^= i, 0 !== e ? (this._alloc(this.length + 1), this.words[this.length++] = e) : this._strip(), this
                }
                mul(t) {
                    w(BN.isBN(t), "num", "bignum");
                    const i = this.length + t.length,
                        e = new BN;
                    e.words = new Array(i);
                    for (let t = 0; t < i; t++) e.words[t] = 0;
                    return this._mul(t, e)
                }
                muln(t) {
                    return this.clone().imuln(t)
                }
                _div(t, i) {
                    w(BN.isBN(t), "num", "bignum"), p((i & d) === i), p(i !== u);
                    const e = this,
                        r = t;
                    if (S(!r.isZero()), e.isZero()) return [new BN(0), new BN(0)];
                    const n = e.negative,
                        s = r.negative;
                    e.negative = 0, r.negative = 0;
                    let h = null,
                        o = null;
                    return e.ucmp(r) < 0 ? (i & l && (h = new BN(0)), i & a && (o = e.clone())) : 1 === r.length ? (i & l && (h = e.quon(r.words[0])), i & a && (o = e.remn(r.words[0]))) : [h, o] = e._wordDiv(r, i), e.negative = n, r.negative = s, i & l && (h.negative = e.negative ^ r.negative, h._normalize()), i & a && (o.negative = e.negative, o._normalize()), i & c && (i & l && (p(0 != (i & a)), 0 !== o.negative && (0 !== r.negative ? h.iaddn(1) : h.isubn(1))), i & a && 0 !== o.negative && (0 !== r.negative ? o.isub(r) : o.iadd(r))), [h, o]
                }
                _wordDiv(t, i) {
                    let e, r = this.clone(),
                        n = t,
                        s = null;
                    const h = 0 | n.words[n.length - 1],
                        o = 26 - N(h);
                    0 !== o ? (n = n.clone(), r.iushln(o), n.iushln(o), e = 0 | n.words[n.length - 1]) : e = h;
                    const u = r.length - n.length;
                    if (p(u >= 0), i & l) {
                        s = new BN(0), s.length = u + 1, s.words = new Array(s.length);
                        for (let t = 0; t < s.length; t++) s.words[t] = 0
                    }
                    const f = r.clone();
                    f._ishlnsubmul(n, 1, u), 0 === f.negative && (s && (s.words[u] = 1), r = f);
                    for (let t = u - 1; t >= 0; t--) {
                        const i = (67108864 * r.words[n.length + t] + r.words[n.length + t - 1]) / e | 0;
                        let h = Math.min(i, 67108863);
                        for (r._ishlnsubmul(n, h, t); 0 !== r.negative;) h -= 1, r.negative = 0, r._ishlnsubmul(n, 1, t), r.ineg();
                        s && (s.words[t] = h)
                    }
                    return s && s._strip(), i & a && 0 !== o && r.iushrn(o), [s, r]
                }
                _ishlnsubmul(t, i, e) {
                    let r = 0,
                        n = 0;
                    for (this._expand(t.length + e); n < t.length; n++) {
                        const s = (0 | this.words[n + e]) + r,
                            h = t.words[n] * i,
                            o = s - (67108863 & h);
                        r = (o >> 26) - (h / 67108864 | 0), this.words[n + e] = 67108863 & o
                    }
                    for (; n < this.length - e; n++) {
                        const t = (0 | this.words[n + e]) + r;
                        r = t >> 26, this.words[n + e] = 67108863 & t
                    }
                    if (0 === r) return this._strip();
                    p(-1 === r), r = 0;
                    for (let t = 0; t < this.length; t++) {
                        const i = -(0 | this.words[t]) + r;
                        r = i >> 26, this.words[t] = 67108863 & i
                    }
                    return this.negative = 1, this._strip()
                }
                quorem(t) {
                    return this._div(t, f)
                }
                iquo(t) {
                    return this.quo(t)._move(this)
                }
                iquon(t) {
                    w(y(t), "num", "smi"), S(0 !== t);
                    const i = t < 0 | 0;
                    i && (t = -t);
                    let e = 0;
                    for (let i = this.length - 1; i >= 0; i--) {
                        const r = (0 | this.words[i]) + 67108864 * e;
                        this.words[i] = r / t | 0, e = r % t
                    }
                    return this.negative ^= i, this._strip()
                }
                quo(t) {
                    return this._div(t, l)[0]
                }
                quon(t) {
                    return this.clone().iquon(t)
                }
                irem(t) {
                    return this.rem(t)._move(this)
                }
                iremn(t) {
                    let i = this.remrn(t);
                    return i < 0 && (i = -i), this.words[0] = i, this.length = 1, this._normalize()
                }
                rem(t) {
                    return this._div(t, a)[1]
                }
                remn(t) {
                    return this.clone().iremn(t)
                }
                remrn(t) {
                    w(y(t), "num", "smi"), S(0 !== t), t < 0 && (t = -t);
                    const i = (1 << 26) % t;
                    let e = 0;
                    for (let r = this.length - 1; r >= 0; r--) e = (i * e + (0 | this.words[r])) % t;
                    return 0 !== this.negative ? 0 | -e : e
                }
                divmod(t) {
                    return this._div(t, f | c)
                }
                idiv(t) {
                    return this.div(t)._move(this)
                }
                idivn(t) {
                    if (0 === this.negative) return this.iquon(t);
                    const i = this.remrn(t);
                    return this.iquon(t), i < 0 && (t < 0 ? this.iaddn(1) : this.isubn(1)), this
                }
                div(t) {
                    return this._div(t, f | c)[0]
                }
                divn(t) {
                    return this.clone().idivn(t)
                }
                imod(t) {
                    return this.ucmp(t) < 0 ? (0 !== this.negative && (this._isub(t, this), this.negative = 0), this) : this.mod(t)._move(this)
                }
                imodn(t) {
                    return this.words[0] = this.modrn(t), this.length = 1, this.negative = 0, this
                }
                mod(t) {
                    return this._div(t, a | c)[1]
                }
                modn(t) {
                    return this.clone().imodn(t)
                }
                modrn(t) {
                    w(y(t), "num", "smi");
                    let i = this.remrn(t);
                    return i < 0 && (t < 0 ? i -= t : i += t), i
                }
                divRound(t) {
                    const [i, e] = this.quorem(t);
                    if (e.isZero()) return i;
                    const r = 1 & t.words[0];
                    t.iushrn(1);
                    const n = e.ucmp(t);
                    return t.iushln(1), t.words[0] |= r, n < 0 || t.isOdd() && 0 === n ? i : this.negative ^ t.negative ? i.isubn(1) : i.iaddn(1)
                }
                ipow(t) {
                    return this.pow(t)._move(this)
                }
                ipown(t) {
                    return this.pown(t)._move(this)
                }
                pow(t) {
                    w(BN.isBN(t), "num", "bignum");
                    let i = N(t.words[t.length - 1]),
                        e = new BN(1);
                    for (let r = t.length - 1; r >= 0; r--) {
                        const n = t.words[r];
                        for (let t = i - 1; t >= 0; t--) e = e.sqr(), n >> t & 1 && (e = e.mul(this));
                        i = 26
                    }
                    return e
                }
                pown(t) {
                    if (w(y(t), "num", "smi"), t < 0 && (t = -t), 0 === t) return new BN(1);
                    if (1 === t) return this.clone();
                    let i = this;
                    for (let e = N(t) - 2; e >= 0; e--) i = i.sqr(), t >> e & 1 && (i = i.mul(this));
                    return i
                }
                isqr() {
                    return this.imul(this)
                }
                sqr() {
                    return this.mul(this)
                }
                _rootrem(t, i) {
                    if (w(t >>> 0 === t, "num", "uint32"), 0 === t) throw new RangeError("Zeroth root.");
                    if (~t & this.negative) throw new RangeError("Negative with even root.");
                    if (this.ucmpn(1) <= 0) return [this.clone(), new BN(0)];
                    let e, r, n = new BN(0),
                        s = BN.shift(1, this.bitLength() / t + 1 | 0);
                    if (0 !== this.negative && s.ineg(), 2 === t)
                        do {
                            n = s, s = this.quo(n), s.iadd(n), s.iushrn(1)
                        } while (s.ucmp(n) < 0);
                    else
                        do {
                            n = s, s = n.pown(t - 1), s = this.quo(s), e = n.muln(t - 1), s.iadd(e), s = s.quon(t)
                        } while (s.ucmp(n) < 0);
                    return i && (s = n.pown(t), r = this.sub(s)), [n, r]
                }
                rootrem(t) {
                    return this._rootrem(t, 1)
                }
                iroot(t) {
                    return this.root(t)._move(this)
                }
                root(t) {
                    return this._rootrem(t, 0)[0]
                }
                isPower(t) {
                    if (w(t >>> 0 === t, "num", "uint32"), 0 === t || ~t & this.negative) return !1;
                    const [, i] = this.rootrem(t);
                    return 0 === i.sign()
                }
                sqrtrem() {
                    return this.rootrem(2)
                }
                isqrt() {
                    return this.sqrt()._move(this)
                }
                sqrt() {
                    return this.root(2)
                }
                isSquare() {
                    return 0 === this.sign() || this.isPower(2)
                }
                iand(t) {
                    w(BN.isBN(t), "num", "bignum");
                    let i = this,
                        e = t;
                    if (i === e) return i;
                    if (0 == (i.negative | e.negative)) return i.iuand(e);
                    if (1 == (i.negative & e.negative)) return i.iaddn(1), e.iaddn(1), i.iuor(e), i.isubn(1), e.isubn(1), i;
                    0 !== i.negative && ([i, e] = [e.clone(), i]);
                    const r = i.bitLength();
                    return e.iaddn(1), e.inotn(r), i.iuand(e), e.inotn(r), e.isubn(1), i._move(this)
                }
                iandn(t) {
                    return w(y(t), "num", "smi"), 0 != (this.negative | t < 0) ? this.iand(new BN(t)) : (this.words[0] &= t, this.length = 1, this)
                }
                and(t) {
                    return this.clone().iand(t)
                }
                andn(t) {
                    return this.clone().iandn(t)
                }
                andrn(t) {
                    if (w(y(t), "num", "smi"), 0 != (this.negative | t < 0)) {
                        const i = this.iand(new BN(t));
                        if (i.length > 1) throw new RangeError("Number exceeds 26 bits.");
                        return 0 !== i.negative ? -i.words[0] : i.words[0]
                    }
                    return this.words[0] & t
                }
                iuand(t) {
                    w(BN.isBN(t), "num", "bignum"), this.length = Math.min(this.length, t.length);
                    for (let i = 0; i < this.length; i++) this.words[i] &= t.words[i];
                    return this._strip()
                }
                iuandn(t) {
                    return w(y(t), "num", "smi"), this.words[0] &= Math.abs(t), this.length = 1, this._normalize()
                }
                uand(t) {
                    return this.clone().iuand(t)
                }
                uandn(t) {
                    return this.clone().iuandn(t)
                }
                uandrn(t) {
                    w(y(t), "num", "smi");
                    const i = this.words[0] & Math.abs(t);
                    return 0 !== this.negative ? 0 | -i : i
                }
                ior(t) {
                    w(BN.isBN(t), "num", "bignum");
                    let i = this,
                        e = t;
                    return i === e ? i : 0 == (i.negative | e.negative) ? i.iuor(e) : 1 == (i.negative & e.negative) ? (i.iaddn(1), e.iaddn(1), i.iuand(e), i.isubn(1), e.isubn(1), i) : (e = e.clone(), 0 !== i.negative && ([i, e] = [e, i]), e.iaddn(1), i.inotn(e.bitLength()), e.iuand(i), e.isubn(1), e._move(this))
                }
                iorn(t) {
                    return w(y(t), "num", "smi"), 0 != (this.negative | t < 0) ? this.ior(new BN(t)) : (this.words[0] |= t, this)
                }
                or(t) {
                    return this.clone().ior(t)
                }
                orn(t) {
                    return this.clone().iorn(t)
                }
                iuor(t) {
                    w(BN.isBN(t), "num", "bignum"), this._expand(t.length);
                    for (let i = 0; i < t.length; i++) this.words[i] |= t.words[i];
                    return this
                }
                iuorn(t) {
                    return w(y(t), "num", "smi"), this.words[0] |= Math.abs(t), this
                }
                uor(t) {
                    return this.clone().iuor(t)
                }
                uorn(t) {
                    return this.clone().iuorn(t)
                }
                ixor(t) {
                    w(BN.isBN(t), "num", "bignum");
                    let i = this,
                        e = t;
                    return i === e ? (i.words[0] = 0, i.length = 1, i.negative = 0, i) : 0 == (i.negative | e.negative) ? i.iuxor(e) : 1 == (i.negative & e.negative) ? (i.iaddn(1), e.iaddn(1), i.iuxor(e), i.ineg(), e.isubn(1), i) : (0 !== i.negative && ([i, e] = [e.clone(), i]), e.iaddn(1), i.iuxor(e), i.iaddn(1), i.ineg(), e.isubn(1), i._move(this))
                }
                ixorn(t) {
                    return w(y(t), "num", "smi"), 0 != (this.negative | t < 0) ? this.ixor(new BN(t)) : (this.words[0] ^= t, this)
                }
                xor(t) {
                    return this.clone().ixor(t)
                }
                xorn(t) {
                    return this.clone().ixorn(t)
                }
                iuxor(t) {
                    w(BN.isBN(t), "num", "bignum");
                    let i = this,
                        e = t;
                    i.length < e.length && ([i, e] = [e, i]);
                    let r = 0;
                    for (; r < e.length; r++) this.words[r] = i.words[r] ^ e.words[r];
                    if (i !== this)
                        for (this._alloc(i.length); r < i.length; r++) this.words[r] = i.words[r];
                    return this.length = i.length, this._strip()
                }
                iuxorn(t) {
                    return w(y(t), "num", "smi"), this.words[0] ^= Math.abs(t), this._normalize()
                }
                uxor(t) {
                    return this.clone().iuxor(t)
                }
                uxorn(t) {
                    return this.clone().iuxorn(t)
                }
                inot() {
                    return 0 !== this.negative ? this.ineg().isubn(1) : this.iaddn(1).ineg(), this
                }
                not() {
                    return this.clone().inot()
                }
                inotn(t) {
                    w(t >>> 0 === t, "width", "uint32");
                    const i = t % 26;
                    let e = Math.ceil(t / 26),
                        r = 0;
                    for (this._expand(e), i > 0 && (e -= 1); r < e; r++) this.words[r] ^= 67108863;
                    return i > 0 && (this.words[r] ^= (1 << i) - 1), this._strip()
                }
                notn(t) {
                    return this.clone().inotn(t)
                }
                ishl(t) {
                    return w(BN.isBN(t), "bits", "bignum"), w(t.bitLength() <= 32, "bits", "uint32"), this.ishln(t.toNumber())
                }
                ishln(t) {
                    return this.iushln(t)
                }
                shl(t) {
                    return this.clone().ishl(t)
                }
                shln(t) {
                    return this.clone().ishln(t)
                }
                iushl(t) {
                    return w(BN.isBN(t), "bits", "bignum"), w(t.bitLength() <= 32, "bits", "uint32"), this.iushln(t.toNumber())
                }
                iushln(t) {
                    w(t >>> 0 === t, "bits", "uint32");
                    const i = t % 26,
                        e = (t - i) / 26,
                        r = (1 << i) - 1 << 26 - i;
                    if (0 !== i) {
                        let t = 0;
                        for (let e = 0; e < this.length; e++) {
                            const n = this.words[e] & r,
                                s = (0 | this.words[e]) - n << i;
                            this.words[e] = s | t, t = n >>> 26 - i
                        }
                        0 !== t && (this._alloc(this.length + 1), this.words[this.length++] = t)
                    }
                    if (0 !== e) {
                        this._alloc(this.length + e);
                        for (let t = this.length - 1; t >= 0; t--) this.words[t + e] = this.words[t];
                        for (let t = 0; t < e; t++) this.words[t] = 0;
                        this.length += e
                    }
                    return this._strip()
                }
                ushl(t) {
                    return this.clone().iushl(t)
                }
                ushln(t) {
                    return this.clone().iushln(t)
                }
                _split(t, i) {
                    const e = t % 26,
                        r = Math.min((t - e) / 26, this.length),
                        n = (1 << e) - 1;
                    if (i) {
                        i._alloc(r);
                        for (let t = 0; t < r; t++) i.words[t] = this.words[t];
                        i.length = r
                    }
                    if (0 === r);
                    else if (this.length > r) {
                        this.length -= r;
                        for (let t = 0; t < this.length; t++) this.words[t] = this.words[t + r]
                    } else this.words[0] = 0, this.length = 1;
                    let s = 0;
                    for (let t = this.length - 1; t >= 0; t--) {
                        const i = 0 | this.words[t];
                        this.words[t] = s << 26 - e | i >>> e, s = i & n
                    }
                    return i && (0 !== s ? (i._alloc(i.length + 1), i.words[i.length++] = s) : (0 === i.length && (i.words[i.length++] = 0), i._strip())), this._strip()
                }
                ishr(t) {
                    return w(BN.isBN(t), "bits", "bignum"), w(t.bitLength() <= 32, "bits", "uint32"), this.ishrn(t.toNumber())
                }
                ishrn(t) {
                    return w(t >>> 0 === t, "bits", "uint32"), 0 !== this.negative ? (this.iaddn(1), this.iushrn(t), this.isubn(1), this) : this.iushrn(t)
                }
                shr(t) {
                    return this.clone().ishr(t)
                }
                shrn(t) {
                    return this.clone().ishrn(t)
                }
                iushr(t) {
                    return w(BN.isBN(t), "bits", "bignum"), w(t.bitLength() <= 32, "bits", "uint32"), this.iushrn(t.toNumber())
                }
                iushrn(t) {
                    return w(t >>> 0 === t, "bits", "uint32"), this._split(t, null)
                }
                ushr(t) {
                    return this.clone().iushr(t)
                }
                ushrn(t) {
                    return this.clone().iushrn(t)
                }
                setn(t, i) {
                    return w(t >>> 0 === t, "bit", "uint32"), 0 !== this.negative ? (this.iaddn(1), this.usetn(t, !i), this.isubn(1), this) : this.usetn(t, i)
                }
                usetn(t, i) {
                    w(t >>> 0 === t, "bit", "uint32");
                    const e = t % 26,
                        r = (t - e) / 26;
                    return this._expand(r + 1), i ? this.words[r] |= 1 << e : this.words[r] &= ~(1 << e), this._strip()
                }
                testn(t) {
                    w(t >>> 0 === t, "bit", "uint32");
                    const i = t % 26,
                        e = (t - i) / 26;
                    if (this.length <= e) return this.negative;
                    const r = this.words[e],
                        n = r >> i & 1;
                    if (0 !== this.negative) {
                        if (i > 0 && r & (1 << i) - 1) return 1 ^ n;
                        let t = e;
                        for (; t--;)
                            if (this.words[t] > 0) return 1 ^ n
                    }
                    return n
                }
                utestn(t) {
                    w(t >>> 0 === t, "bit", "uint32");
                    const i = t % 26,
                        e = (t - i) / 26;
                    return this.length <= e ? 0 : this.words[e] >> i & 1
                }
                imaskn(t) {
                    return w(t >>> 0 === t, "bits", "uint32"), 0 !== this.negative && (this.iaddn(1), this.inotn(t + 1), this.ineg()), this.iumaskn(t)
                }
                maskn(t) {
                    return this.clone().imaskn(t)
                }
                iumaskn(t) {
                    w(t >>> 0 === t, "bits", "uint32");
                    const i = t % 26;
                    let e = (t - i) / 26;
                    return this.length <= e ? this : (0 !== i && (e += 1), this.length = Math.min(e, this.length), 0 !== i && (this.words[this.length - 1] &= (1 << i) - 1), 0 === this.length && (this.words[this.length++] = 0), this._strip())
                }
                umaskn(t) {
                    return this.clone().iumaskn(t)
                }
                andln(t) {
                    return this.words[0] & t
                }
                ineg() {
                    return this.isZero() || (this.negative ^= 1), this
                }
                neg() {
                    return this.clone().ineg()
                }
                iabs() {
                    return this.negative = 0, this
                }
                abs() {
                    return this.clone().iabs()
                }
                cmp(t) {
                    if (w(BN.isBN(t), "num", "bignum"), this.negative !== t.negative) return t.negative - this.negative;
                    const i = this.ucmp(t);
                    return 0 !== this.negative ? 0 | -i : i
                }
                cmpn(t) {
                    w(y(t), "num", "smi");
                    const i = t < 0 | 0;
                    if (this.negative !== i) return i - this.negative;
                    const e = this.ucmpn(t);
                    return 0 !== this.negative ? 0 | -e : e
                }
                eq(t) {
                    return 0 === this.cmp(t)
                }
                eqn(t) {
                    return 0 === this.cmpn(t)
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
                sign() {
                    return 0 !== this.negative ? -1 : 1 === this.length && 0 === this.words[0] ? 0 : 1
                }
                isZero() {
                    return 1 === this.length && 0 === this.words[0]
                }
                isNeg() {
                    return 0 !== this.negative
                }
                isPos() {
                    return 0 === this.negative
                }
                isOdd() {
                    return 1 == (1 & this.words[0])
                }
                isEven() {
                    return 0 == (1 & this.words[0])
                }
                ucmp(t) {
                    if (w(BN.isBN(t), "num", "bignum"), this.length < t.length) return -1;
                    if (this.length > t.length) return 1;
                    for (let i = this.length - 1; i >= 0; i--) {
                        const e = 0 | this.words[i],
                            r = 0 | t.words[i];
                        if (e !== r) return (e > r) - (e < r)
                    }
                    return 0
                }
                ucmpn(t) {
                    if (w(y(t), "num", "smi"), this.length > 1) return 1;
                    const i = 0 | this.words[0];
                    return t < 0 && (t = -t), (i > t) - (i < t)
                }
                legendre(t) {
                    const i = m ? BN.red(t) : BN.mont(t);
                    return this.toRed(i).redLegendre()
                }
                jacobi(t) {
                    if (w(BN.isBN(t), "num", "bignum"), t.isZero() || t.isEven()) throw new Error("jacobi: `num` must be odd.");
                    let i = this._cloneNormal(),
                        e = t._cloneNormal(),
                        r = 1;
                    for (e.isNeg() && (i.isNeg() && (r = -1), e.ineg());;) {
                        if (0 === e.cmpn(1)) return r;
                        if (i.isZero()) return 0;
                        if (i.imod(e), i.isZero()) return 0;
                        const t = i.zeroBits();
                        if (1 & t) {
                            const t = e.andln(7);
                            3 !== t && 5 !== t || (r = -r)
                        }
                        const n = i.iushrn(t);
                        3 === e.andln(3) && 3 === n.andln(3) && (r = -r), i = e, e = n
                    }
                }
                kronecker(t) {
                    w(BN.isBN(t), "num", "bignum");
                    const i = [0, 1, 0, -1, 0, -1, 0, 1];
                    let e = this._cloneNormal(),
                        r = t._cloneNormal(),
                        n = 1;
                    if (r.isZero()) return 0 === e.ucmpn(1) ? n : 0;
                    if (!e.isOdd() && !r.isOdd()) return 0;
                    const s = r.zeroBits();
                    for (r.iushrn(s), 1 & s && (n = i[e.andln(7)]), r.isNeg() && (e.isNeg() && (n = -n), r.ineg());;) {
                        if (e.isZero()) return 0 === r.cmpn(1) ? n : 0;
                        const t = e.zeroBits();
                        e.iushrn(t), 1 & t && (n *= i[r.andln(7)]);
                        (e.words[0] ^ 67108863 * e.negative) & r.words[0] & 2 && (n = -n), r.imod(e), [e, r] = [r, e], r.negative = 0
                    }
                }
                igcd(t) {
                    return this.gcd(t)._move(this)
                }
                gcd(t) {
                    if (w(BN.isBN(t), "num", "bignum"), this.isZero()) return t.abs();
                    if (t.isZero()) return this.abs();
                    let i = this.clone(),
                        e = t.clone();
                    i.negative = 0, e.negative = 0;
                    const r = i._factor2(e);
                    for (0 !== r && (i.iushrn(r), e.iushrn(r));;) {
                        const t = i.zeroBits(),
                            r = e.zeroBits();
                        0 !== t && i.iushrn(t), 0 !== r && e.iushrn(r);
                        const n = i.ucmp(e);
                        if (n < 0)[i, e] = [e, i];
                        else if (0 === n || 0 === e.ucmpn(1)) break;
                        i._isub(i, e)
                    }
                    return e.iushln(r)
                }
                ilcm(t) {
                    return this.lcm(t)._move(this)
                }
                lcm(t) {
                    return w(BN.isBN(t), "num", "bignum"), this.isZero() || t.isZero() ? new BN(0) : this.quo(this.gcd(t)).mul(t).iabs()
                }
                egcd(t) {
                    if (w(BN.isBN(t), "num", "bignum"), this.isZero()) return [new BN(0), new BN(t.sign()), t.abs()];
                    if (t.isZero()) return [new BN(this.sign()), new BN(0), this.abs()];
                    const i = this.clone(),
                        e = t.clone();
                    i.negative = 0, e.negative = 0;
                    const r = new BN(1),
                        n = new BN(0),
                        s = new BN(0),
                        h = new BN(1),
                        o = i._factor2(e);
                    0 !== o && (i.iushrn(o), e.iushrn(o));
                    const u = e.clone(),
                        l = i.clone();
                    for (; !i.isZero();) {
                        let t = 0;
                        for (let e = 1; 0 == (i.words[0] & e) && t < 26; e <<= 1) t += 1;
                        if (t > 0)
                            for (i.iushrn(t); t > 0;)(r.isOdd() || n.isOdd()) && (r.iadd(u), n.isub(l)), r.iushrn(1), n.iushrn(1), t -= 1;
                        let o = 0;
                        for (let t = 1; 0 == (e.words[0] & t) && o < 26; t <<= 1) o += 1;
                        if (o > 0)
                            for (e.iushrn(o); o > 0;)(s.isOdd() || h.isOdd()) && (s.iadd(u), h.isub(l)), s.iushrn(1), h.iushrn(1), o -= 1;
                        i.cmp(e) >= 0 ? (i.isub(e), r.isub(s), n.isub(h)) : (e.isub(i), s.isub(r), h.isub(n))
                    }
                    return 0 !== this.negative && s.ineg(), 0 !== t.negative && h.ineg(), [s, h, e.iushln(o)]
                }
                iinvert(t) {
                    return this.invert(t)._move(this)
                }
                invert(t) {
                    if (w(BN.isBN(t), "num", "bignum"), M(t.sign() > 0, "invert"), 0 === t.cmpn(1)) throw new RangeError("Not invertible.");
                    const [i, , e] = this.egcd(t);
                    if (0 !== e.cmpn(1)) throw new RangeError("Not invertible.");
                    return i.imod(t)
                }
                ifermat(t) {
                    return this.fermat(t)._move(this)
                }
                fermat(t) {
                    const i = m ? BN.red(t) : BN.mont(t);
                    return this.toRed(i).redFermat().fromRed()
                }
                ipowm(t, i, e, r) {
                    return this.powm(t, i, e, r)._move(this)
                }
                powm(t, i, e, r) {
                    const n = !m && e ? BN.mont(i) : BN.red(i);
                    return this.toRed(n).redPow(t, r).fromRed()
                }
                ipowmn(t, i, e) {
                    return this.powmn(t, i, e)._move(this)
                }
                powmn(t, i, e) {
                    const r = e ? BN.mont(i) : BN.red(i);
                    return this.toRed(r).redPown(t).fromRed()
                }
                isqrtm(t) {
                    return this.sqrtm(t)._move(this)
                }
                sqrtm(t) {
                    let i;
                    return w(BN.isBN(t), "p", "bignum"), i = 3 === t.andln(3) || 5 === t.andln(7) ? BN.red(t) : BN.mont(t), this.toRed(i).redSqrt().fromRed()
                }
                isqrtpq(t, i) {
                    return this.sqrtpq(t, i)._move(this)
                }
                sqrtpq(t, i) {
                    const e = this.sqrtm(t),
                        r = this.sqrtm(i),
                        [n, s] = t.egcd(i),
                        h = r.mul(n).mul(t),
                        o = e.mul(s).mul(i),
                        u = t.mul(i);
                    return h.iadd(o).imod(u)
                }
                isPrime(t, i, e) {
                    return w(i >>> 0 === i, "reps", "uint32"), !!this.isPrimeMR(t, i + 1, !0) && !!this.isPrimeLucas(e)
                }
                isPrimeMR(t, i, e = !1) {
                    w(i >>> 0 === i, "reps", "uint32"), w(i > 0, "reps", "integer"), w("boolean" == typeof e, "force2", "boolean");
                    const r = this;
                    if (r.cmpn(7) < 0) return 0 === r.cmpn(2) || 0 === r.cmpn(3) || 0 === r.cmpn(5);
                    if (r.isEven()) return !1;
                    const n = r.subn(1),
                        s = n.subn(2),
                        h = n.zeroBits(),
                        o = n.ushrn(h),
                        u = BN.red(r),
                        l = n.toRed(u),
                        a = new BN(1).toRed(u);
                    t: for (let r = 0; r < i; r++) {
                        let n;
                        r === i - 1 && e ? n = new BN(2) : (n = BN.random(t, 0, s), n.iaddn(2));
                        let f = n.toRed(u).redPow(o);
                        if (0 !== f.cmp(a) && 0 !== f.cmp(l)) {
                            for (let t = 1; t < h; t++) {
                                if (f = f.redSqr(), 0 === f.cmp(l)) continue t;
                                if (0 === f.cmp(a)) return !1
                            }
                            return !1
                        }
                    }
                    return !0
                }
                isPrimeLucas(t = 0) {
                    w(t >>> 0 === t, "limit", "uint32");
                    const i = this;
                    if (i.cmpn(1) <= 0) return !1;
                    if (i.isEven()) return 0 === i.cmpn(2);
                    let e = 3;
                    for (;;) {
                        if (e > 1e4) throw new Error(`Cannot find (D/n) = -1 for ${i.toString(10)}.`);
                        if (t > 0 && e > t) return !1;
                        const r = new BN(e * e - 4).jacobi(i);
                        if (-1 === r) break;
                        if (0 === r) return 0 === i.cmpn(e + 2);
                        if (40 === e && i.isSquare()) return !1;
                        e += 1
                    }
                    const r = i.addn(1),
                        n = r.zeroBits(),
                        s = i.subn(2);
                    let h = new BN(2),
                        o = new BN(e);
                    r.iushrn(n);
                    for (let t = r.bitLength(); t >= 0; t--) r.utestn(t) ? (h = h.mul(o).iadd(i).isubn(e).imod(i), o = o.sqr().iadd(s).imod(i)) : (o = o.mul(h).iadd(i).isubn(e).imod(i), h = h.sqr().iadd(s).imod(i));
                    if (0 === h.cmpn(2) || 0 === h.cmp(s)) {
                        let t = h.muln(e),
                            r = o.ushln(1);
                        if (t.cmp(r) < 0 && ([t, r] = [r, t]), t.isub(r).imod(i).isZero()) return !0
                    }
                    for (let t = 0; t < n - 1; t++) {
                        if (h.isZero()) return !0;
                        if (0 === h.cmpn(2)) return !1;
                        h = h.sqr().isubn(2).imod(i)
                    }
                    return !1
                }
                toTwos(t) {
                    return 0 !== this.negative ? this.abs().inotn(t).iaddn(1) : this.clone()
                }
                fromTwos(t) {
                    return w(t >>> 0 === t, "width", "uint32"), M(t > 0, "width"), this.testn(t - 1) ? this.notn(t).iaddn(1).ineg() : this.clone()
                }
                toRed(t) {
                    if (w(t instanceof Red, "ctx", "reduction context"), this.red) throw new Error("Already in reduction context.");
                    return t.convertTo(this)._forceRed(t)
                }
                fromRed() {
                    return B(this.red, "fromRed"), this.red.convertFrom(this)
                }
                forceRed(t) {
                    if (this.red) throw new Error("Already in reduction context.");
                    return this._forceRed(t)
                }
                redIAdd(t) {
                    return w(BN.isBN(t), "num", "bignum"), B(this.red, "redIAdd"), this.red.iadd(this, t)
                }
                redAdd(t) {
                    return w(BN.isBN(t), "num", "bignum"), B(this.red, "redAdd"), this.red.add(this, t)
                }
                redIAddn(t) {
                    return w(y(t), "num", "smi"), B(this.red, "redIAddn"), this.red.iaddn(this, t)
                }
                redAddn(t) {
                    return w(y(t), "num", "smi"), B(this.red, "redAddn"), this.red.addn(this, t)
                }
                redISub(t) {
                    return w(BN.isBN(t), "num", "bignum"), B(this.red, "redISub"), this.red.isub(this, t)
                }
                redSub(t) {
                    return w(BN.isBN(t), "num", "bignum"), B(this.red, "redSub"), this.red.sub(this, t)
                }
                redISubn(t) {
                    return w(y(t), "num", "smi"), B(this.red, "redISubn"), this.red.isubn(this, t)
                }
                redSubn(t) {
                    return w(y(t), "num", "smi"), B(this.red, "redSubn"), this.red.subn(this, t)
                }
                redIMul(t) {
                    return w(BN.isBN(t), "num", "bignum"), B(this.red, "redIMul"), this.red.imul(this, t)
                }
                redMul(t) {
                    return w(BN.isBN(t), "num", "bignum"), B(this.red, "redMul"), this.red.mul(this, t)
                }
                redIMuln(t) {
                    return w(y(t), "num", "smi"), B(this.red, "redIMuln"), this.red.imuln(this, t)
                }
                redMuln(t) {
                    return w(y(t), "num", "smi"), B(this.red, "redMuln"), this.red.muln(this, t)
                }
                redISqr() {
                    return B(this.red, "redISqr"), this.red.isqr(this)
                }
                redSqr() {
                    return B(this.red, "redSqr"), this.red.sqr(this)
                }
                redIShl(t) {
                    return w(BN.isBN(t), "num", "bignum"), B(this.red, "redIShl"), b(!t.red, "redIShl"), this.red.ishl(this, t)
                }
                redShl(t) {
                    return w(BN.isBN(t), "num", "bignum"), B(this.red, "redShl"), b(!t.red, "redShl"), this.red.shl(this, t)
                }
                redIShln(t) {
                    return w(t >>> 0 === t, "num", "uint32"), B(this.red, "redIShln"), this.red.ishln(this, t)
                }
                redShln(t) {
                    return w(t >>> 0 === t, "num", "uint32"), B(this.red, "redShln"), this.red.shln(this, t)
                }
                redINeg() {
                    return B(this.red, "redINeg"), this.red.ineg(this)
                }
                redNeg() {
                    return B(this.red, "redNeg"), this.red.neg(this)
                }
                redCmp(t) {
                    return w(BN.isBN(t), "num", "bignum"), B(this.red, "redCmp"), this.red.cmp(this, t)
                }
                redCmpn(t) {
                    return w(y(t), "num", "smi"), B(this.red, "redCmpn"), this.red.cmpn(this, t)
                }
                redIsOdd() {
                    return B(this.red, "redIsOdd"), this.red.isOdd(this)
                }
                redIsEven() {
                    return B(this.red, "redIsEven"), this.red.isEven(this)
                }
                redISqrt() {
                    return B(this.red, "redISqrt"), this.red.isqrt(this)
                }
                redSqrt() {
                    return B(this.red, "redSqrt"), this.red.sqrt(this)
                }
                redIInvert() {
                    return B(this.red, "redIInvert"), this.red.iinvert(this)
                }
                redInvert() {
                    return B(this.red, "redInvert"), this.red.invert(this)
                }
                redIFermat() {
                    return B(this.red, "redIFermat"), this.red.ifermat(this)
                }
                redFermat() {
                    return B(this.red, "redFermat"), this.red.fermat(this)
                }
                redLegendre() {
                    return B(this.red, "redLegendre"), this.red.legendre(this)
                }
                redJacobi() {
                    return B(this.red, "redJacobi"), this.red.jacobi(this)
                }
                redKronecker() {
                    return B(this.red, "redKronecker"), this.red.kronecker(this)
                }
                redIPow(t, i) {
                    return w(BN.isBN(t), "num", "bignum"), B(this.red, "redIPow"), b(!t.red, "redIPow"), this.red.ipow(this, t, i)
                }
                redPow(t, i) {
                    return w(BN.isBN(t), "num", "bignum"), B(this.red, "redPow"), b(!t.red, "redPow"), this.red.pow(this, t, i)
                }
                redIPown(t) {
                    return w(y(t), "num", "smi"), B(this.red, "redIPown"), this.red.ipown(this, t)
                }
                redPown(t) {
                    return w(y(t), "num", "smi"), B(this.red, "redPown"), this.red.pown(this, t)
                }
                _move(t) {
                    return t.words = this.words, t.length = this.length, t.negative = this.negative, t.red = this.red, t
                }
                _alloc(t) {
                    for (; this.words.length < t;) this.words.push(0);
                    return this
                }
                _expand(t) {
                    for (this._alloc(t); this.length < t;) this.words[this.length++] = 0;
                    return this
                }
                _strip() {
                    for (; this.length > 1 && 0 === this.words[this.length - 1];) this.length -= 1;
                    return this._normalize()
                }
                _normalize() {
                    return p(this.length > 0), 1 === this.length && 0 === this.words[0] && (this.negative = 0), this
                }
                _check() {
                    return p(this.length > 0), 1 === this.length ? (0 === this.words[0] && p(0 === this.negative), this) : (p(0 !== this.words[this.length - 1]), this)
                }
                _invertp(t) {
                    if (w(BN.isBN(t), "p", "bignum"), p(0 === this.negative), p(t.sign() > 0), this.isZero() || 0 === t.cmpn(1)) throw new RangeError("Not invertible.");
                    const i = this.clone(),
                        e = t.clone(),
                        r = new BN(1),
                        n = new BN(0),
                        s = e.clone();
                    for (; i.cmpn(1) > 0 && e.cmpn(1) > 0;) {
                        let t = 0;
                        for (let e = 1; 0 == (i.words[0] & e) && t < 26; e <<= 1) t += 1;
                        if (t > 0)
                            for (i.iushrn(t); t > 0;) r.isOdd() && r.iadd(s), r.iushrn(1), t -= 1;
                        let h = 0;
                        for (let t = 1; 0 == (e.words[0] & t) && h < 26; t <<= 1) h += 1;
                        if (h > 0)
                            for (e.iushrn(h); h > 0;) n.isOdd() && n.iadd(s), n.iushrn(1), h -= 1;
                        i.cmp(e) >= 0 ? (i.isub(e), r.isub(n)) : (e.isub(i), n.isub(r))
                    }
                    const h = 0 === i.cmpn(1) ? r : n;
                    return h.ucmp(t) >= 0 && (h._isub(h, t), h.ucmp(t) >= 0 && h._isub(h, t)), h.isNeg() && h.iadd(t), h
                }
                _factor2(t) {
                    if (1 & (this.words[0] | t.words[0])) return 0;
                    const i = Math.min(this.length, t.length);
                    let e = 0;
                    for (let r = 0; r < i; r++) {
                        const i = E(this.words[r] | t.words[r]);
                        if (e += i, 26 !== i) break
                    }
                    return e
                }
                _cloneNormal() {
                    return this.red ? this.fromRed() : this.clone()
                }
                _forceRed(t) {
                    return this.red = t, this
                }
                clone() {
                    const t = new BN;
                    t.words = new Array(this.length);
                    for (let i = 0; i < this.length; i++) t.words[i] = this.words[i];
                    return t.length = this.length, t.negative = this.negative, t.red = this.red, t
                }
                inject(t) {
                    w(BN.isBN(t), "num", "bignum"), this._alloc(t.length);
                    for (let i = 0; i < t.length; i++) this.words[i] = t.words[i];
                    return this.length = t.length, this.negative = t.negative, this.red = t.red, this
                }
                set(t, i) {
                    return this.fromNumber(t, i)
                }
                swap(t) {
                    w(BN.isBN(t), "num", "bignum");
                    const i = this,
                        e = t;
                    return [i.words, e.words] = [e.words, i.words], [i.length, e.length] = [e.length, i.length], [i.negative, e.negative] = [e.negative, i.negative], [i.red, e.red] = [e.red, i.red], i
                }
                reverse() {
                    const t = this.negative;
                    return this.fromBuffer(this.toBuffer("be"), "le"), this.negative = t, this
                }
                byteLength() {
                    return Math.ceil(this.bitLength() / 8)
                }
                bitLength() {
                    const t = N(this.words[this.length - 1]);
                    return 26 * (this.length - 1) + t
                }
                zeroBits() {
                    if (this.isZero()) return 0;
                    if (this.isOdd()) return 0;
                    let t = 0;
                    for (let i = 0; i < this.length; i++) {
                        const e = E(this.words[i]);
                        if (t += e, 26 !== e) break
                    }
                    return t
                }
                isSafe() {
                    return this.length <= 2 || 3 === this.length && 1 === this.words[2]
                }
                word(t) {
                    return w(t >>> 0 === t, "pos", "uint32"), t >= this.length ? 0 : this.words[t]
                } [r]() {
                    let t = "BN";
                    return this.red && (t = "BN-R"), `<${t}: ${this.toString(10)}>`
                }
                csign() {
                    return -2 * this.negative + 1 - this.czero()
                }
                czero() {
                    const t = this.words[0] - 1 >>> 31;
                    return this.length - 2 >>> 31 & t
                }
                cneg() {
                    return this.negative
                }
                cpos() {
                    return 1 ^ this.negative
                }
                ceq(t) {
                    w(BN.isBN(t), "num", "bignum");
                    let i = 0;
                    for (let e = 0; e < t.length; e++) i |= this.words[e % this.length] ^ t.words[e];
                    return i |= this.length ^ t.length, i |= this.negative ^ t.negative, i - 1 >>> 31
                }
                ceqn(t) {
                    const i = t >> 31 & 1,
                        e = (0 | t) * (1 | -i) & 67108863;
                    let r = 0;
                    return r |= this.words[0] ^ e, r |= 1 ^ this.length, r |= this.negative ^ i, r - 1 >>> 31
                }
                cswap(t, i) {
                    w(BN.isBN(t), "num", "bignum");
                    const e = this,
                        r = t,
                        n = 67108863 & -(1 & (i >> 31 | -i >> 31));
                    e._alloc(r.words.length), r._alloc(e.words.length);
                    for (let t = 0; t < e.words.length; t++) {
                        const i = (e.words[t] ^ r.words[t]) & n;
                        e.words[t] ^= i, r.words[t] ^= i
                    }
                    const s = (e.length ^ r.length) & n,
                        h = (e.negative ^ r.negative) & n;
                    return e.length ^= s, r.length ^= s, e.negative ^= h, r.negative ^= h, this
                }
                cinject(t, i) {
                    w(BN.isBN(t), "num", "bignum");
                    const e = this,
                        r = t,
                        n = 1 & (i >> 31 | -i >> 31),
                        s = n - 1 & 67108863,
                        h = 67108863 & ~(n - 1);
                    e._alloc(r.length);
                    for (let t = 0; t < r.length; t++) e.words[t] = e.words[t] & s | r.words[t] & h;
                    return e.length = e.length & s | r.length & h, e.negative = e.negative & s | r.negative & h, this
                }
                cset(t, i) {
                    const e = 1 & (i >> 31 | -i >> 31),
                        r = e - 1 & 67108863,
                        n = 67108863 & ~(e - 1),
                        s = t >> 31 & 1,
                        h = (0 | t) * (1 | -s) & 67108863;
                    return this.words[0] = this.words[0] & r | h & n, this.length = this.length & r | 1 & n, this.negative = this.negative & r | s & n, this
                }
                toNumber() {
                    let t = this.words[0];
                    if (2 === this.length) t += 67108864 * this.words[1];
                    else if (3 === this.length && 1 === this.words[2]) t += 4503599627370496 + 67108864 * this.words[1];
                    else if (this.length > 2) throw new RangeError("Number can only safely store up to 53 bits.");
                    return 0 !== this.negative ? -t : t
                }
                toDouble() {
                    let t = 0;
                    for (let i = this.length - 1; i >= 0; i--) t = 67108864 * t + this.words[i];
                    return 0 !== this.negative ? -t : t
                }
                valueOf() {
                    return this.toDouble()
                }
                toBigInt() {
                    if (!m) throw new Error("BigInt is not supported!");
                    const t = BigInt(52),
                        i = BigInt(26);
                    let e = this.length - 1,
                        r = BigInt(0);
                    for (; e >= 1; e -= 2) {
                        const i = 67108864 * this.words[e],
                            n = this.words[e - 1];
                        r = r << t | BigInt(i + n)
                    }
                    return e >= 0 && (r = r << i | BigInt(this.words[0])), 0 !== this.negative ? -r : r
                }
                toBool() {
                    return !this.isZero()
                }
                toString(t, i) {
                    if (null == i && (i = 0), 0 === i && (i = 1), w((t = v(t)) >>> 0 === t, "base", "uint32"), w(i >>> 0 === i, "padding", "uint32"), t < 2 || t > 36) throw new RangeError("Base ranges between 2 and 36.");
                    if (this._check(), 16 === t) {
                        let t = "",
                            e = 0,
                            r = 0;
                        for (let i = 0; i < this.length; i++) {
                            const s = this.words[i],
                                h = (16777215 & (s << e | r)).toString(16);
                            r = s >>> 24 - e & 16777215, t = 0 !== r || i !== this.length - 1 ? n[6 - h.length] + h + t : h + t, e += 2, e >= 26 && (e -= 26, i -= 1)
                        }
                        for (0 !== r && (t = r.toString(16) + t); t.length % i != 0;) t = "0" + t;
                        return 0 !== this.negative && (t = "-" + t), t
                    }
                    const e = s[t - 1],
                        r = h[t - 1],
                        o = this.clone();
                    let u = "";
                    for (o.negative = 0; !o.isZero();) {
                        const i = o.remrn(r).toString(t);
                        o.iquon(r), u = o.isZero() ? i + u : n[e - i.length] + i + u
                    }
                    for (this.isZero() && (u = "0"); u.length % i != 0;) u = "0" + u;
                    return 0 !== this.negative && (u = "-" + u), u
                }
                toJSON() {
                    return this.toString(16, 2)
                }
                toArray(t, i) {
                    return this.toArrayLike(Array, t, i)
                }
                toBuffer(t, i) {
                    return this.toArrayLike(Buffer, t, i)
                }
                toArrayLike(t, i, e) {
                    null == i && (i = "be"), null == e && (e = 0), w("function" == typeof t, "ArrayType", "function"), w("be" === i || "le" === i, "endian", "endianness"), w(e >>> 0 === e, "length", "uint32"), this._check();
                    const r = this.byteLength(),
                        n = e || Math.max(1, r);
                    if (r > n) throw new RangeError("Byte array longer than desired length.");
                    const s = function(t, i) {
                        return t.allocUnsafe ? t.allocUnsafe(i) : new t(i)
                    }(t, n);
                    if ("be" === i) {
                        let t = s.length - 1,
                            i = 0;
                        for (let e = 0; e < this.length; e++) {
                            const r = (3 & e) << 1,
                                n = this.words[e] << r | i;
                            s[t--] = 255 & n, t >= 0 && (s[t--] = n >>> 8 & 255), t >= 0 && (s[t--] = n >>> 16 & 255), 6 === r ? (t >= 0 && (s[t--] = n >>> 24 & 255), i = 0) : i = n >>> 24
                        }
                        if (t >= 0) {
                            for (s[t--] = i; t >= 0;) s[t--] = 0;
                            i = 0
                        }
                        p(0 === i)
                    } else {
                        let t = 0,
                            i = 0;
                        for (let e = 0; e < this.length; e++) {
                            const r = (3 & e) << 1,
                                n = this.words[e] << r | i;
                            s[t++] = 255 & n, t < s.length && (s[t++] = n >>> 8 & 255), t < s.length && (s[t++] = n >>> 16 & 255), 6 === r ? (t < s.length && (s[t++] = n >>> 24 & 255), i = 0) : i = n >>> 24
                        }
                        if (t < s.length) {
                            for (s[t++] = i; t < s.length;) s[t++] = 0;
                            i = 0
                        }
                        p(0 === i)
                    }
                    return s
                }
                encode(t, i) {
                    return this.toBuffer(t, i)
                }
                of(t, i) {
                    return this.fromNumber(t, i)
                }
                fromNumber(t, i) {
                    null == i && (i = "be"), w(A(t), "num", "integer"), w("be" === i || "le" === i, "endian", "endianness");
                    const e = t < 0 | 0;
                    return e && (t = -t), t < 67108864 ? (this.words[0] = 67108863 & t, this.length = 1) : t < 4503599627370496 ? (this.words = [67108863 & t, t / 67108864 & 67108863], this.length = 2) : (this.words = [67108863 & t, t / 67108864 & 67108863, 1], this.length = 3), this.negative = e, "le" === i && this.reverse(), this
                }
                fromDouble(t, i) {
                    null == i && (i = "be"), w("number" == typeof t, "num", "double"), w("be" === i || "le" === i, "endian", "endianness"), isFinite(t) || (t = 0);
                    const e = t <= -1 | 0;
                    for (t < 0 && (t = -t), t = Math.floor(t), this.words = []; t > 0;) {
                        const i = t % 67108864,
                            e = (t - i) / 67108864;
                        this.words.push(i), t = e
                    }
                    return 0 === this.words.length && this.words.push(0), this.length = this.words.length, this.negative = e, "le" === i && this.reverse(), this
                }
                fromBigInt(t, i) {
                    if (null == i && (i = "be"), w("bigint" == typeof t, "num", "bigint"), w("be" === i || "le" === i, "endian", "endianness"), !m) throw new Error("BigInt is not supported!");
                    const e = t < BigInt(0) | 0;
                    return this._fromHex(t.toString(16), e), this.negative = e, "le" === i && this.reverse(), this
                }
                fromBool(t) {
                    return w("boolean" == typeof t, "value", "boolean"), this.words[0] = 0 | t, this.length = 1, this.negative = 0, this
                }
                fromString(t, i, e) {
                    if ("le" !== i && "be" !== i || ([i, e] = [e, i]), i = v(i), null == e && (e = "be"), w("string" == typeof t, "string", "string"), w(i >>> 0 === i, "base", "uint32"), w("be" === e || "le" === e, "endian", "endianness"), i < 2 || i > 36) throw new Error("Base ranges between 2 and 36.");
                    let r = 0;
                    return (t = t.replace(/[\t\n\r ]/g, "")).length > 0 && 45 === t.charCodeAt(0) && (r = 1), 16 === i ? this._fromHex(t, r) : this._fromBase(t, i, r), this.negative = r, this._normalize(), "le" === e && this.reverse(), this
                }
                _fromHex(t, i) {
                    this.length = Math.max(2, Math.ceil((t.length - i) / 6)), this.words = new Array(this.length);
                    for (let t = 0; t < this.length; t++) this.words[t] = 0;
                    let e = 0,
                        r = t.length - 6,
                        n = 0;
                    for (; r >= i; r -= 6) {
                        const i = _(t, r, r + 6);
                        this.words[n] |= i << e & 67108863, this.words[n + 1] |= i >>> 26 - e & 4194303, e += 24, e >= 26 && (e -= 26, n += 1)
                    }
                    if (r + 6 !== i) {
                        const s = _(t, i, r + 6);
                        this.words[n] |= s << e & 67108863, this.words[n + 1] |= s >>> 26 - e & 4194303
                    }
                    return this._strip()
                }
                _fromBase(t, i, e) {
                    this.words[0] = 0, this.length = 1, this.negative = 0;
                    let r = 0,
                        n = 1;
                    for (; n <= 67108863; n *= i) r += 1;
                    r -= 1, n = n / i | 0;
                    const s = t.length - e,
                        h = s % r,
                        o = Math.min(s, s - h) + e;
                    let u = 0,
                        l = e;
                    for (; l < o; l += r) u = R(t, l, l + r, i), this.imuln(n), this._iaddn(u);
                    if (0 !== h) {
                        let e = 1;
                        for (u = R(t, l, t.length, i), l = 0; l < h; l++) e *= i;
                        this.imuln(e), this._iaddn(u)
                    }
                    return this
                }
                fromJSON(t) {
                    return this.fromString(t, 16)
                }
                fromBN(t) {
                    return this.inject(t)
                }
                fromArray(t, i) {
                    return w(Array.isArray(t), "data", "array"), this.fromArrayLike(t, i)
                }
                fromBuffer(t, i) {
                    return w(Buffer.isBuffer(t), "data", "buffer"), this.fromArrayLike(t, i)
                }
                fromArrayLike(t, i) {
                    if (null == i && (i = "be"), w(t && "number" == typeof t.length, "data", "array-like"), w("be" === i || "le" === i, "endian", "endianness"), t.length <= 0) return this.words[0] = 0, this.length = 1, this.negative = 0, this;
                    this.length = Math.max(2, Math.ceil(t.length / 3)), this.words = new Array(this.length), this.negative = 0;
                    for (let t = 0; t < this.length; t++) this.words[t] = 0;
                    const e = t.length % 3;
                    let r = 0,
                        n = 0,
                        s = 0;
                    if ("be" === i) {
                        for (let i = t.length - 1; i >= 2; i -= 3) {
                            const e = t[i] | t[i - 1] << 8 | t[i - 2] << 16;
                            this.words[n] |= e << r & 67108863, this.words[n + 1] = e >>> 26 - r & 67108863, r += 24, r >= 26 && (r -= 26, n += 1)
                        }
                        switch (e) {
                            case 2:
                                s = t[1] | t[0] << 8;
                                break;
                            case 1:
                                s = t[0]
                        }
                    } else {
                        const i = t.length - e;
                        for (let e = 0; e < i; e += 3) {
                            const i = t[e] | t[e + 1] << 8 | t[e + 2] << 16;
                            this.words[n] |= i << r & 67108863, this.words[n + 1] = i >>> 26 - r & 67108863, r += 24, r >= 26 && (r -= 26, n += 1)
                        }
                        switch (e) {
                            case 2:
                                s = t[i] | t[i + 1] << 8;
                                break;
                            case 1:
                                s = t[i]
                        }
                    }
                    return e > 0 && (this.words[n] |= s << r & 67108863, this.words[n + 1] = s >>> 26 - r & 67108863), this._strip()
                }
                decode(t, i) {
                    return this.fromBuffer(t, i)
                }
                from(t, i, e) {
                    if (null == t) return this;
                    if ("le" !== i && "be" !== i || ([i, e] = [e, i]), "number" == typeof t) return this.fromNumber(t, e);
                    if ("bigint" == typeof t) return this.fromBigInt(t, e);
                    if ("string" == typeof t) return this.fromString(t, i, e);
                    if ("object" == typeof t) {
                        if (BN.isBN(t)) return this.fromBN(t, e);
                        if ("number" == typeof t.length) return this.fromArrayLike(t, e)
                    }
                    if ("boolean" == typeof t) return this.fromBool(t);
                    throw new TypeError("Non-numeric object passed to BN.")
                }
                static min(t, i) {
                    return w(BN.isBN(t), "a", "bignum"), t.cmp(i) < 0 ? t : i
                }
                static max(t, i) {
                    return w(BN.isBN(t), "a", "bignum"), t.cmp(i) > 0 ? t : i
                }
                static cmp(t, i) {
                    return w(BN.isBN(t), "a", "bignum"), t.cmp(i)
                }
                static ucmp(t, i) {
                    return w(BN.isBN(t), "a", "bignum"), t.ucmp(i)
                }
                static red(t) {
                    return new Red(t)
                }
                static mont(t) {
                    return new Mont(t)
                }
                static _prime(t) {
                    if (o[t]) return o[t];
                    let i;
                    if ("p192" === t) i = new P192;
                    else if ("p224" === t) i = new P224;
                    else if ("p521" === t) i = new P521;
                    else if ("k256" === t) i = new K256;
                    else if ("p25519" === t) i = new P25519;
                    else {
                        if ("p448" !== t) throw new Error("Unknown prime " + t);
                        i = new P448
                    }
                    return o[t] = i, i
                }
                static pow(t, i) {
                    return 2 === t ? BN.shift(1, i) : (new BN).fromNumber(t).pown(i)
                }
                static shift(t, i) {
                    return 1 === t ? new BN(0).usetn(i, 1) : (new BN).fromNumber(t).ishln(i)
                }
                static mask(t) {
                    return BN.shift(1, t).isubn(1)
                }
                static randomBits(t, i) {
                    if (w(null != t, "rng", "rng"), w(i >>> 0 === i, "bits", "uint32"), "object" == typeof t) {
                        w("function" == typeof t.randomBytes, "rng", "rng");
                        const e = i + 7 >>> 3,
                            r = 8 * e,
                            n = t.randomBytes(e);
                        if (w(Buffer.isBuffer(n), "bytes", "buffer"), n.length !== e) throw new RangeError("Invalid number of bytes returned from RNG.");
                        const s = BN.fromBuffer(n);
                        return r > i && s.iushrn(r - i), s
                    }
                    w("function" == typeof t, "rng", "rng");
                    const e = t(i);
                    if (w(BN.isBN(e), "num", "bignum"), M(0 === e.negative, "RNG"), b(!e.red, "RNG"), e.bitLength() > i) throw new RangeError("Invalid number of bits returned from RNG.");
                    return e
                }
                static random(t, i, e) {
                    if (i = BN.cast(i, 16), e = BN.cast(e, 16), i.cmp(e) > 0) throw new RangeError("Minimum cannot be greater than maximum.");
                    const r = e.sub(i).iabs(),
                        n = r.bitLength();
                    if (0 === n) return i.clone();
                    for (;;) {
                        const e = BN.randomBits(t, n);
                        if (!(e.cmp(r) >= 0)) return e.iadd(i), e
                    }
                }
                static of (t, i) {
                    return (new BN).of(t, i)
                }
                static fromNumber(t, i) {
                    return (new BN).fromNumber(t, i)
                }
                static fromDouble(t, i) {
                    return (new BN).fromDouble(t, i)
                }
                static fromBigInt(t, i) {
                    return (new BN).fromBigInt(t, i)
                }
                static fromBool(t) {
                    return (new BN).fromBool(t)
                }
                static fromString(t, i, e) {
                    return (new BN).fromString(t, i, e)
                }
                static fromJSON(t) {
                    return (new BN).fromJSON(t)
                }
                static fromBN(t) {
                    return (new BN).fromBN(t)
                }
                static fromArray(t, i) {
                    return (new BN).fromArray(t, i)
                }
                static fromBuffer(t, i) {
                    return (new BN).fromBuffer(t, i)
                }
                static fromArrayLike(t, i) {
                    return (new BN).fromArrayLike(t, i)
                }
                static decode(t, i) {
                    return (new BN).decode(t, i)
                }
                static from(t, i, e) {
                    return (new BN).from(t, i, e)
                }
                static cast(t, i, e) {
                    return BN.isBN(t) ? t : new BN(t, i, e)
                }
                static isBN(t) {
                    return t instanceof BN
                }
            }
            BN.BN = BN, BN.wordSize = 26, BN.native = 0;
            class Prime {
                constructor(t, i) {
                    this.name = t, this.p = new BN(i, 16), this.n = this.p.bitLength(), this.k = BN.shift(1, this.n).isub(this.p), this.lo = this.p.clone(), this.one = this.p.clone()
                }
                ireduce(t) {
                    const i = 0 !== t.negative;
                    let e = t.bitLength();
                    for (p(e <= 2 * this.n), t.negative = 0; e > this.n;) this.split(t, this.lo), this.imulK(t), t._iadd(t, this.lo), e = t.bitLength();
                    const r = e < this.n ? -1 : t.ucmp(this.p);
                    return 0 === r ? (t.words[0] = 0, t.length = 1) : r > 0 && t._isub(t, this.p), i && !t.isZero() && t._isub(this.p, t), t
                }
                split(t, i) {
                    t._split(this.n, i)
                }
                imulK(t) {
                    return t.imul(this.k)
                }
            }
            class P192 extends Prime {
                constructor() {
                    super("p192", "ffffffff ffffffff ffffffff fffffffeffffffff ffffffff")
                }
                imulK(t) {
                    const i = this.one.inject(t);
                    return t.iushln(64)._iadd(t, i)
                }
            }
            class P224 extends Prime {
                constructor() {
                    super("p224", "ffffffff ffffffff ffffffff ffffffff00000000 00000000 00000001")
                }
                imulK(t) {
                    const i = this.one.inject(t);
                    return t.iushln(96)._isub(t, i)
                }
            }
            class P521 extends Prime {
                constructor() {
                    super("p521", "000001ff ffffffff ffffffff ffffffffffffffff ffffffff ffffffff ffffffffffffffff ffffffff ffffffff ffffffffffffffff ffffffff ffffffff ffffffffffffffff")
                }
                imulK(t) {
                    return t
                }
            }
            class K256 extends Prime {
                constructor() {
                    super("k256", "ffffffff ffffffff ffffffff ffffffffffffffff ffffffff fffffffe fffffc2f")
                }
                split(t, i) {
                    const e = Math.min(t.length, 9);
                    i._alloc(e + 1);
                    for (let r = 0; r < e; r++) i.words[r] = t.words[r];
                    if (i.length = e, t.length <= 9) return i._strip(), t.words[0] = 0, void(t.length = 1);
                    let r = t.words[9],
                        n = 10;
                    for (i.words[i.length++] = 4194303 & r, i._strip(); n < t.length; n++) {
                        const i = 0 | t.words[n];
                        t.words[n - 10] = (4194303 & i) << 4 | r >>> 22, r = i
                    }
                    r >>>= 22, t.words[n - 10] = r, 0 === r && t.length > 10 ? t.length -= 10 : t.length -= 9, t._strip()
                }
                imulK(t) {
                    t._expand(t.length + 2);
                    let i = 0;
                    for (let e = 0; e < t.length; e++) {
                        const r = t.words[e];
                        i += 977 * r, t.words[e] = 67108863 & i, i = 64 * r + Math.floor(i / 67108864)
                    }
                    return 0 === t.words[t.length - 1] && (t.length -= 1, 0 === t.words[t.length - 1] && (t.length -= 1)), t
                }
            }
            class P25519 extends Prime {
                constructor() {
                    super("p25519", "7fffffff ffffffff ffffffff ffffffffffffffff ffffffff ffffffff ffffffed")
                }
                imulK(t) {
                    let i = 0;
                    for (let e = 0; e < t.length; e++) {
                        const r = 19 * t.words[e] + i;
                        i = r >>> 26, t.words[e] = 67108863 & r
                    }
                    return 0 !== i && (t._alloc(t.length + 1), t.words[t.length++] = i), t
                }
            }
            class P448 extends Prime {
                constructor() {
                    super("p448", "ffffffff ffffffff ffffffff ffffffffffffffff ffffffff fffffffe ffffffffffffffff ffffffff ffffffff ffffffffffffffff ffffffff")
                }
                imulK(t) {
                    const i = this.one.inject(t);
                    return t.iushln(224)._iadd(t, i)
                }
            }
            class Red {
                constructor(t) {
                    let i = null;
                    "string" == typeof t && (i = BN._prime(t), t = i.p), w(BN.isBN(t), "m", "bignum"), b(!t.red, "reduction"), M(t.sign() > 0, "reduction"), this.m = t, this.mb = null, this.prime = i
                }
                _verify1(t) {
                    M(0 === t.negative, "red"), B(null != t.red, "red")
                }
                _verify2(t, i) {
                    M(0 == (t.negative | i.negative), "red"), B(null != t.red && t.red === i.red, "red")
                }
                convertTo(t) {
                    return t.mod(this.m)
                }
                convertFrom(t) {
                    const i = t.clone();
                    return i.red = null, i
                }
                intTo(t) {
                    return t
                }
                intFrom(t) {
                    return t
                }
                imod(t) {
                    return this.prime ? this.prime.ireduce(t)._forceRed(this) : t.imod(this.m)._forceRed(this)
                }
                iadd(t, i) {
                    return this._verify2(t, i), t._iadd(t, i), t.ucmp(this.m) >= 0 && t._isub(t, this.m), t
                }
                add(t, i) {
                    return t.length < i.length ? this.iadd(i.clone(), t) : this.iadd(t.clone(), i)
                }
                iaddn(t, i) {
                    return this._verify1(t), i < 0 ? this.isubn(t, -i) : (1 === this.m.length && (i %= this.m.words[0]), t._iaddn(i), t.ucmp(this.m) >= 0 && t._isub(t, this.m), t)
                }
                addn(t, i) {
                    return this.iaddn(t.clone(), i)
                }
                isub(t, i) {
                    this._verify2(t, i);
                    const e = t.ucmp(i);
                    return 0 === e ? (t.words[0] = 0, t.length = 1, t) : (e < 0 ? (t._isub(i, t), t._isub(this.m, t)) : t._isub(t, i), t)
                }
                sub(t, i) {
                    return this.isub(t.clone(), i)
                }
                isubn(t, i) {
                    return this._verify1(t), i < 0 ? this.iaddn(t, -i) : (1 === this.m.length && (i %= this.m.words[0]), 1 === t.length && t.words[0] < i ? (t.words[0] = i - t.words[0], t._isub(this.m, t)) : t._isubn(i), t)
                }
                subn(t, i) {
                    return this.isubn(t.clone(), i)
                }
                imul(t, i) {
                    return this._verify2(t, i), this.imod(t.imul(i))
                }
                mul(t, i) {
                    return this._verify2(t, i), this.imod(t.mul(i))
                }
                imuln(t, i) {
                    if (this._verify1(t), t.isZero()) return t;
                    if (0 === i) return t.words[0] = 0, t.length = 1, t;
                    const e = i < 0;
                    if (e && (i = -i), 1 === this.m.length && (i %= this.m.words[0]), t.imuln(i), i <= 16)
                        for (; t.ucmp(this.m) >= 0;) t._isub(t, this.m);
                    else this.imod(t);
                    return e && this.ineg(t), t
                }
                muln(t, i) {
                    return this.imuln(t.clone(), i)
                }
                isqr(t) {
                    return this.imul(t, t)
                }
                sqr(t) {
                    return this.mul(t, t)
                }
                ishl(t, i) {
                    return this._verify1(t), this.imod(t.iushl(i))
                }
                shl(t, i) {
                    return this.ishl(t.clone(), i)
                }
                ishln(t, i) {
                    return this._verify1(t), this.imod(t.iushln(i))
                }
                shln(t, i) {
                    return this._verify1(t), this.imod(t.ushln(i))
                }
                ineg(t) {
                    return this._verify1(t), t.isZero() || t._isub(this.m, t), t
                }
                neg(t) {
                    return this.ineg(t.clone())
                }
                cmp(t, i) {
                    return this._verify2(t, i), t.ucmp(i)
                }
                cmpn(t, i) {
                    if (this._verify1(t), 1 === this.m.length) return (i %= this.m.words[0]) < 0 && (i += this.m.words[0]), t.ucmpn(i);
                    if (i < 0) {
                        this.m._isubn(-i);
                        const e = t.ucmp(this.m);
                        return this.m._iaddn(-i), e
                    }
                    return t.ucmpn(i)
                }
                isOdd(t) {
                    return this._verify1(t), t.isOdd()
                }
                isEven(t) {
                    return this._verify1(t), t.isEven()
                }
                isqrt(t) {
                    return this.sqrt(t)._move(t)
                }
                sqrt(t) {
                    return this._verify1(t), 3 === this.m.andln(3) ? this.sqrt3mod4(t) : 5 === this.m.andln(7) ? this.sqrt5mod8(t) : this.sqrt0(t)
                }
                sqrt3mod4(t) {
                    const i = this.m.addn(1).iushrn(2),
                        e = this.pow(t, i);
                    if (!this.sqr(e).eq(t)) throw new Error("X is not a square mod P.");
                    return e
                }
                sqrt5mod8(t) {
                    const i = new BN(1).toRed(this),
                        e = this.m.ushrn(3),
                        r = this.add(t, t),
                        n = this.pow(r, e);
                    let s = this.sqr(n);
                    if (s = this.mul(s, r), s = this.isub(s, i), s = this.mul(s, t), s = this.mul(s, n), !this.sqr(s).eq(t)) throw new Error("X is not a square mod P.");
                    return s
                }
                sqrt0(t) {
                    switch (this.jacobi(t)) {
                        case -1:
                            throw new Error("X is not a square mod P.");
                        case 0:
                            return new BN(0)._forceRed(this)
                    }
                    const i = new BN(1).toRed(this),
                        e = this.m.subn(1),
                        r = e.zeroBits();
                    e.iushrn(r);
                    const n = new BN(2).toRed(this);
                    for (; - 1 !== this.jacobi(n);) this.iadd(n, i);
                    let s = this.pow(t, e),
                        h = this.pow(n, e),
                        o = this.pow(t, e.iaddn(1).iushrn(1)),
                        u = r;
                    for (;;) {
                        let t = s,
                            e = 0;
                        for (; 0 !== t.cmp(i);) t = this.sqr(t), e += 1;
                        if (0 === e) break;
                        p(e !== u), t = BN.shift(1, u - e - 1), t = this.pow(h, t), h = this.sqr(t), o = this.mul(o, t), s = this.mul(s, h), u = e
                    }
                    return o
                }
                iinvert(t) {
                    return this.invert(t)._move(t)
                }
                invert(t) {
                    return this._verify1(t), this.prime ? this.imod(t._invertp(this.m)) : t.invert(this.m)._forceRed(this)
                }
                ifermat(t) {
                    return this.fermat(t)._move(t)
                }
                fermat(t) {
                    if (this._verify1(t), t.isZero() || 0 === this.m.cmpn(1)) throw new RangeError("Not invertible.");
                    return this.pow(t, this.m.subn(2))
                }
                legendre(t) {
                    if (this._verify1(t), this.m.isEven()) throw new Error("legendre: `num` must be odd.");
                    const i = this.pow(t, this.m.subn(1).iushrn(1)),
                        e = new BN(1).toRed(this),
                        r = i.czero(),
                        n = i.ceq(e),
                        s = i.ceq(this.ineg(e));
                    if (0 == (r | n | s)) throw new Error("Invalid prime.");
                    return p(r + n + s === 1), n + -1 * s
                }
                jacobi(t) {
                    return this._verify1(t), t.jacobi(this.m)
                }
                kronecker(t) {
                    return this._verify1(t), t.kronecker(this.m)
                }
                ipow(t, i, e) {
                    return this.pow(t, i, e)._move(t)
                }
                pow(t, i, e) {
                    return this._verify1(t), i.isNeg() && (t = this.invert(t)), m && !this.prime ? this.powInt(t, i, e) : null != e ? this.climb(t, i, e) : 1 === i.length ? this.pown(t, i.words[0]) : this.slide(t, i)
                }
                slide(t, i) {
                    const e = new Array(16);
                    e[0] = new BN(1).toRed(this), e[1] = t;
                    for (let i = 2; i < e.length; i++) e[i] = this.mul(e[i - 1], t);
                    let r = N(i.words[i.length - 1]),
                        n = e[0],
                        s = 0,
                        h = 0;
                    for (let t = i.length - 1; t >= 0; t--) {
                        const o = i.words[t];
                        for (let i = r - 1; i >= 0; i--) {
                            const r = o >> i & 1;
                            n !== e[0] && (n = this.sqr(n)), 0 !== r || 0 !== s ? (s <<= 1, s |= r, h += 1, 4 !== h && 0 != (t | i) || (n = this.mul(n, e[s]), h = 0, s = 0)) : h = 0
                        }
                        r = 26
                    }
                    return n
                }
                climb(t, i, e) {
                    const r = Math.max(i.bitLength(), e >>> 0),
                        n = r + 7 >>> 3,
                        s = i.toArray("le", n);
                    let h = t.clone(),
                        o = new BN(1).toRed(this),
                        u = 0;
                    for (let t = r - 1; t >= 0; t--) {
                        const i = s[t >> 3] >> (7 & t) & 1;
                        h.cswap(o, u ^ i), h = this.mul(h, o), o = this.mul(o, o), u = i
                    }
                    return h.cswap(o, u), o
                }
                powInt(t, i, e) {
                    null === this.mb && (this.mb = this.m.toBigInt());
                    const r = function(t, i, e, r) {
                            return null != r ? function(t, i, e, r) {
                                const n = Math.max(i.bitLength(), r >>> 0),
                                    s = n + 7 >>> 3,
                                    h = i.toArray("le", s);
                                let o = BigInt(1),
                                    u = 0;
                                for (let i = n - 1; i >= 0; i--) {
                                    const r = h[i >> 3] >> (7 & i) & 1;
                                    [t, o] = L(t, o, u ^ r), t = t * o % e, o = o * o % e, u = r
                                }
                                return [t, o] = L(t, o, u), o
                            }(t, i, e, r) : function(t, i, e) {
                                let r = BigInt(1),
                                    n = N(i.words[i.length - 1]);
                                for (let s = i.length - 1; s >= 0; s--) {
                                    const h = i.words[s];
                                    for (let i = n - 1; i >= 0; i--) r = r * r % e, h >> i & 1 && (r = r * t % e);
                                    n = 26
                                }
                                return r
                            }(t, i, e)
                        }(this.intFrom(t.toBigInt()), i, this.mb, e),
                        n = this.intTo(r);
                    return BN.fromBigInt(n)._forceRed(this)
                }
                ipown(t, i) {
                    return this.pown(t, i)._move(t)
                }
                pown(t, i) {
                    if (this._verify1(t), i < 0 && (t = this.invert(t), i = -i), 0 === i) return new BN(1).toRed(this);
                    if (1 === i) return t.clone();
                    let e = t;
                    for (let r = N(i) - 2; r >= 0; r--) e = this.sqr(e), i >> r & 1 && (e = this.mul(e, t));
                    return e
                } [r]() {
                    return this.prime ? `<Red: ${this.prime.name}>` : `<Red: ${this.m.toString(10)}>`
                }
            }
            class Mont extends Red {
                constructor(t) {
                    super(t), this.prime = null, this.n = this.m.bitLength(), this.n % 26 != 0 && (this.n += 26 - this.n % 26), this.r = BN.shift(1, this.n), this.r2 = BN.shift(1, 2 * this.n).imod(this.m), this.ri = this.r._invertp(this.m).imod(this.m), this.mi = this.r.sub(this.ri.mul(this.r).isubn(1).div(this.m).imod(this.r)), this.rib = null
                }
                convertTo(t) {
                    return this.imod(t.ushln(this.n))
                }
                convertFrom(t) {
                    const i = this.imod(t.mul(this.ri));
                    return i.red = null, i
                }
                intTo(t) {
                    return (t << BigInt(this.n)) % this.mb
                }
                intFrom(t) {
                    return null === this.rib && (this.rib = this.ri.toBigInt()), t * this.rib % this.mb
                }
                iaddn(t, i) {
                    return this.iadd(t, this.convertTo(new BN(i)))
                }
                isubn(t, i) {
                    return this.isub(t, this.convertTo(new BN(i)))
                }
                imul(t, i) {
                    return this.mul(t, i)._move(t)
                }
                mul(t, i) {
                    if (this._verify2(t, i), t.isZero() || i.isZero()) return new BN(0)._forceRed(this);
                    const e = t.mul(i),
                        r = e.umaskn(this.n).mul(this.mi).iumaskn(this.n).mul(this.m),
                        n = e.isub(r).iushrn(this.n);
                    return 0 !== n.negative ? (n._isub(this.m, n), n.negative = 0) : n.ucmp(this.m) >= 0 && n._isub(n, this.m), n._forceRed(this)
                }
                imuln(t, i) {
                    if (this._verify1(t), t.isZero()) return t;
                    if (0 === i) return t.words[0] = 0, t.length = 1, t;
                    const e = i < 0;
                    e && (i = -i);
                    const r = N(i);
                    if (r > 5) this.imul(t, this.convertTo(new BN(i)));
                    else if (0 == (i & i - 1))
                        for (let i = 0; i < r - 1; i++) this.iadd(t, t);
                    else {
                        const e = t.clone();
                        for (let n = r - 2; n >= 0; n--) this.iadd(t, t), i >> n & 1 && this.iadd(t, e)
                    }
                    return e && this.ineg(t), t
                }
                cmpn(t, i) {
                    return this._verify1(t), t.ucmp(this.convertTo(new BN(i)))
                }
                isOdd(t) {
                    return this._verify1(t), this.convertFrom(t).isOdd()
                }
                isEven(t) {
                    return this._verify1(t), this.convertFrom(t).isEven()
                }
                invert(t) {
                    return this._verify1(t), this.imod(t._invertp(this.m).mul(this.r2))
                }
            }

            function g(t, i, e) {
                const r = new t(i);
                return t.captureStackTrace && t.captureStackTrace(r, e), r
            }

            function p(t, i) {
                if (!t) {
                    throw g(Error, i || "Assertion failed.", p)
                }
            }

            function w(t, i, e) {
                if (!t) {
                    throw g(TypeError, `"${i}" must be a(n) ${e}.`, w)
                }
            }

            function M(t, i) {
                if (!t) {
                    throw g(RangeError, `"${i}" only works with positive numbers.`, M)
                }
            }

            function B(t, i) {
                if (!t) {
                    throw g(TypeError, `"${i}" only works with red numbers.`, B)
                }
            }

            function b(t, i) {
                if (!t) {
                    throw g(TypeError, `"${i}" only works with normal numbers.`, b)
                }
            }

            function S(t) {
                if (!t) {
                    throw g(RangeError, "Cannot divide by zero.", S)
                }
            }

            function A(t) {
                return Number.isSafeInteger(t)
            }

            function y(t) {
                return A(t) && t >= -67108863 && t <= 67108863
            }

            function v(t) {
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

            function N(t) {
                if (Math.clz32) return 32 - Math.clz32(t);
                let i = t,
                    e = 0;
                return i >= 4096 && (e += 13, i >>>= 13), i >= 64 && (e += 7, i >>>= 7), i >= 8 && (e += 4, i >>>= 4), i >= 2 && (e += 2, i >>>= 2), e + i
            }

            function E(t) {
                if (0 === t) return 26;
                let i = t,
                    e = 0;
                return 0 == (8191 & i) && (e += 13, i >>>= 13), 0 == (127 & i) && (e += 7, i >>>= 7), 0 == (15 & i) && (e += 4, i >>>= 4), 0 == (3 & i) && (e += 2, i >>>= 2), 0 == (1 & i) && (e += 1), e
            }

            function _(t, i, e) {
                const r = Math.min(t.length, e);
                let n = 0,
                    s = 0;
                for (let e = i; e < r; e++) {
                    const i = t.charCodeAt(e) - 48;
                    let r;
                    n <<= 4, r = i >= 49 && i <= 54 ? i - 49 + 10 : i >= 17 && i <= 22 ? i - 17 + 10 : i, n |= r, s |= r
                }
                if (-16 & s) throw new Error("Invalid string.");
                return n
            }

            function R(t, i, e, r) {
                const n = Math.min(t.length, e);
                let s = 0;
                for (let e = i; e < n; e++) {
                    const i = t.charCodeAt(e) - 48;
                    let n;
                    if (s *= r, n = i >= 49 ? i - 49 + 10 : i >= 17 ? i - 17 + 10 : i, i < 0 || i > 207 || n >= r) throw new Error("Invalid string.");
                    s += n
                }
                return s
            }

            function L(t, i, e) {
                const r = BigInt(1),
                    n = BigInt(e);
                return [t * (n ^ r) | i * n, i * (n ^ r) | t * n]
            }

            function K(t, i, e) {
                const r = t.length + i.length;
                e.negative = t.negative ^ i.negative, e._alloc(r), e.length = r;
                const n = t.words[0] * i.words[0],
                    s = 67108863 & n;
                let h = n / 67108864 | 0,
                    o = 1;
                for (e.words[0] = s; o < e.length - 1; o++) {
                    let r = h >>> 26,
                        n = 67108863 & h;
                    const s = Math.max(0, o - t.length + 1),
                        u = Math.min(o, i.length - 1);
                    for (let e = s; e <= u; e++) {
                        const s = o - e,
                            h = t.words[s] * i.words[e] + n;
                        r += h / 67108864 | 0, n = 67108863 & h
                    }
                    e.words[o] = 0 | n, h = 0 | r
                }
                return 0 !== h ? e.words[o] = 0 | h : e.length -= 1, e._strip()
            }

            function D(t, i, e) {
                const r = t.length + i.length;
                e.negative = t.negative ^ i.negative, e._alloc(r), e.length = r;
                let n = 0,
                    s = 0,
                    h = 0;
                for (; h < e.length - 1; h++) {
                    let r = s;
                    s = 0;
                    let o = 67108863 & n;
                    const u = Math.max(0, h - t.length + 1),
                        l = Math.min(h, i.length - 1);
                    for (let e = u; e <= l; e++) {
                        const n = h - e,
                            u = t.words[n] * i.words[e];
                        let l = 67108863 & u;
                        r = r + (u / 67108864 | 0) | 0, l = l + o | 0, o = 67108863 & l, r = r + (l >>> 26) | 0, s += r >>> 26, r &= 67108863
                    }
                    e.words[h] = o, n = r, r = s
                }
                return 0 !== n ? e.words[h] = n : e.length -= 1, e._strip()
            }

            function P(t, i, e) {
                const r = t.words,
                    n = i.words,
                    s = e.words,
                    h = 0 | r[0],
                    o = 8191 & h,
                    u = h >>> 13,
                    l = 0 | r[1],
                    a = 8191 & l,
                    f = l >>> 13,
                    c = 0 | r[2],
                    d = 8191 & c,
                    m = c >>> 13,
                    g = 0 | r[3],
                    p = 8191 & g,
                    w = g >>> 13,
                    M = 0 | r[4],
                    B = 8191 & M,
                    b = M >>> 13,
                    S = 0 | r[5],
                    A = 8191 & S,
                    y = S >>> 13,
                    v = 0 | r[6],
                    N = 8191 & v,
                    E = v >>> 13,
                    _ = 0 | r[7],
                    R = 8191 & _,
                    L = _ >>> 13,
                    K = 0 | r[8],
                    D = 8191 & K,
                    P = K >>> 13,
                    I = 0 | r[9],
                    x = 8191 & I,
                    H = I >>> 13,
                    q = 0 | n[0],
                    U = 8191 & q,
                    k = q >>> 13,
                    C = 0 | n[1],
                    O = 8191 & C,
                    z = C >>> 13,
                    T = 0 | n[2],
                    F = 8191 & T,
                    J = T >>> 13,
                    Z = 0 | n[3],
                    V = 8191 & Z,
                    j = Z >>> 13,
                    G = 0 | n[4],
                    X = 8191 & G,
                    W = G >>> 13,
                    $ = 0 | n[5],
                    Y = 8191 & $,
                    Q = $ >>> 13,
                    tt = 0 | n[6],
                    it = 8191 & tt,
                    et = tt >>> 13,
                    rt = 0 | n[7],
                    nt = 8191 & rt,
                    st = rt >>> 13,
                    ht = 0 | n[8],
                    ot = 8191 & ht,
                    ut = ht >>> 13,
                    lt = 0 | n[9],
                    at = 8191 & lt,
                    ft = lt >>> 13;
                let ct, dt, mt, gt = 0;
                e.negative = t.negative ^ i.negative, e._alloc(20), e.length = 19, ct = Math.imul(o, U), dt = Math.imul(o, k), dt = dt + Math.imul(u, U) | 0, mt = Math.imul(u, k);
                let pt = (gt + ct | 0) + ((8191 & dt) << 13) | 0;
                gt = (mt + (dt >>> 13) | 0) + (pt >>> 26) | 0, pt &= 67108863, ct = Math.imul(a, U), dt = Math.imul(a, k), dt = dt + Math.imul(f, U) | 0, mt = Math.imul(f, k), ct = ct + Math.imul(o, O) | 0, dt = dt + Math.imul(o, z) | 0, dt = dt + Math.imul(u, O) | 0, mt = mt + Math.imul(u, z) | 0;
                let wt = (gt + ct | 0) + ((8191 & dt) << 13) | 0;
                gt = (mt + (dt >>> 13) | 0) + (wt >>> 26) | 0, wt &= 67108863, ct = Math.imul(d, U), dt = Math.imul(d, k), dt = dt + Math.imul(m, U) | 0, mt = Math.imul(m, k), ct = ct + Math.imul(a, O) | 0, dt = dt + Math.imul(a, z) | 0, dt = dt + Math.imul(f, O) | 0, mt = mt + Math.imul(f, z) | 0, ct = ct + Math.imul(o, F) | 0, dt = dt + Math.imul(o, J) | 0, dt = dt + Math.imul(u, F) | 0, mt = mt + Math.imul(u, J) | 0;
                let Mt = (gt + ct | 0) + ((8191 & dt) << 13) | 0;
                gt = (mt + (dt >>> 13) | 0) + (Mt >>> 26) | 0, Mt &= 67108863, ct = Math.imul(p, U), dt = Math.imul(p, k), dt = dt + Math.imul(w, U) | 0, mt = Math.imul(w, k), ct = ct + Math.imul(d, O) | 0, dt = dt + Math.imul(d, z) | 0, dt = dt + Math.imul(m, O) | 0, mt = mt + Math.imul(m, z) | 0, ct = ct + Math.imul(a, F) | 0, dt = dt + Math.imul(a, J) | 0, dt = dt + Math.imul(f, F) | 0, mt = mt + Math.imul(f, J) | 0, ct = ct + Math.imul(o, V) | 0, dt = dt + Math.imul(o, j) | 0, dt = dt + Math.imul(u, V) | 0, mt = mt + Math.imul(u, j) | 0;
                let Bt = (gt + ct | 0) + ((8191 & dt) << 13) | 0;
                gt = (mt + (dt >>> 13) | 0) + (Bt >>> 26) | 0, Bt &= 67108863, ct = Math.imul(B, U), dt = Math.imul(B, k), dt = dt + Math.imul(b, U) | 0, mt = Math.imul(b, k), ct = ct + Math.imul(p, O) | 0, dt = dt + Math.imul(p, z) | 0, dt = dt + Math.imul(w, O) | 0, mt = mt + Math.imul(w, z) | 0, ct = ct + Math.imul(d, F) | 0, dt = dt + Math.imul(d, J) | 0, dt = dt + Math.imul(m, F) | 0, mt = mt + Math.imul(m, J) | 0, ct = ct + Math.imul(a, V) | 0, dt = dt + Math.imul(a, j) | 0, dt = dt + Math.imul(f, V) | 0, mt = mt + Math.imul(f, j) | 0, ct = ct + Math.imul(o, X) | 0, dt = dt + Math.imul(o, W) | 0, dt = dt + Math.imul(u, X) | 0, mt = mt + Math.imul(u, W) | 0;
                let bt = (gt + ct | 0) + ((8191 & dt) << 13) | 0;
                gt = (mt + (dt >>> 13) | 0) + (bt >>> 26) | 0, bt &= 67108863, ct = Math.imul(A, U), dt = Math.imul(A, k), dt = dt + Math.imul(y, U) | 0, mt = Math.imul(y, k), ct = ct + Math.imul(B, O) | 0, dt = dt + Math.imul(B, z) | 0, dt = dt + Math.imul(b, O) | 0, mt = mt + Math.imul(b, z) | 0, ct = ct + Math.imul(p, F) | 0, dt = dt + Math.imul(p, J) | 0, dt = dt + Math.imul(w, F) | 0, mt = mt + Math.imul(w, J) | 0, ct = ct + Math.imul(d, V) | 0, dt = dt + Math.imul(d, j) | 0, dt = dt + Math.imul(m, V) | 0, mt = mt + Math.imul(m, j) | 0, ct = ct + Math.imul(a, X) | 0, dt = dt + Math.imul(a, W) | 0, dt = dt + Math.imul(f, X) | 0, mt = mt + Math.imul(f, W) | 0, ct = ct + Math.imul(o, Y) | 0, dt = dt + Math.imul(o, Q) | 0, dt = dt + Math.imul(u, Y) | 0, mt = mt + Math.imul(u, Q) | 0;
                let St = (gt + ct | 0) + ((8191 & dt) << 13) | 0;
                gt = (mt + (dt >>> 13) | 0) + (St >>> 26) | 0, St &= 67108863, ct = Math.imul(N, U), dt = Math.imul(N, k), dt = dt + Math.imul(E, U) | 0, mt = Math.imul(E, k), ct = ct + Math.imul(A, O) | 0, dt = dt + Math.imul(A, z) | 0, dt = dt + Math.imul(y, O) | 0, mt = mt + Math.imul(y, z) | 0, ct = ct + Math.imul(B, F) | 0, dt = dt + Math.imul(B, J) | 0, dt = dt + Math.imul(b, F) | 0, mt = mt + Math.imul(b, J) | 0, ct = ct + Math.imul(p, V) | 0, dt = dt + Math.imul(p, j) | 0, dt = dt + Math.imul(w, V) | 0, mt = mt + Math.imul(w, j) | 0, ct = ct + Math.imul(d, X) | 0, dt = dt + Math.imul(d, W) | 0, dt = dt + Math.imul(m, X) | 0, mt = mt + Math.imul(m, W) | 0, ct = ct + Math.imul(a, Y) | 0, dt = dt + Math.imul(a, Q) | 0, dt = dt + Math.imul(f, Y) | 0, mt = mt + Math.imul(f, Q) | 0, ct = ct + Math.imul(o, it) | 0, dt = dt + Math.imul(o, et) | 0, dt = dt + Math.imul(u, it) | 0, mt = mt + Math.imul(u, et) | 0;
                let At = (gt + ct | 0) + ((8191 & dt) << 13) | 0;
                gt = (mt + (dt >>> 13) | 0) + (At >>> 26) | 0, At &= 67108863, ct = Math.imul(R, U), dt = Math.imul(R, k), dt = dt + Math.imul(L, U) | 0, mt = Math.imul(L, k), ct = ct + Math.imul(N, O) | 0, dt = dt + Math.imul(N, z) | 0, dt = dt + Math.imul(E, O) | 0, mt = mt + Math.imul(E, z) | 0, ct = ct + Math.imul(A, F) | 0, dt = dt + Math.imul(A, J) | 0, dt = dt + Math.imul(y, F) | 0, mt = mt + Math.imul(y, J) | 0, ct = ct + Math.imul(B, V) | 0, dt = dt + Math.imul(B, j) | 0, dt = dt + Math.imul(b, V) | 0, mt = mt + Math.imul(b, j) | 0, ct = ct + Math.imul(p, X) | 0, dt = dt + Math.imul(p, W) | 0, dt = dt + Math.imul(w, X) | 0, mt = mt + Math.imul(w, W) | 0, ct = ct + Math.imul(d, Y) | 0, dt = dt + Math.imul(d, Q) | 0, dt = dt + Math.imul(m, Y) | 0, mt = mt + Math.imul(m, Q) | 0, ct = ct + Math.imul(a, it) | 0, dt = dt + Math.imul(a, et) | 0, dt = dt + Math.imul(f, it) | 0, mt = mt + Math.imul(f, et) | 0, ct = ct + Math.imul(o, nt) | 0, dt = dt + Math.imul(o, st) | 0, dt = dt + Math.imul(u, nt) | 0, mt = mt + Math.imul(u, st) | 0;
                let yt = (gt + ct | 0) + ((8191 & dt) << 13) | 0;
                gt = (mt + (dt >>> 13) | 0) + (yt >>> 26) | 0, yt &= 67108863, ct = Math.imul(D, U), dt = Math.imul(D, k), dt = dt + Math.imul(P, U) | 0, mt = Math.imul(P, k), ct = ct + Math.imul(R, O) | 0, dt = dt + Math.imul(R, z) | 0, dt = dt + Math.imul(L, O) | 0, mt = mt + Math.imul(L, z) | 0, ct = ct + Math.imul(N, F) | 0, dt = dt + Math.imul(N, J) | 0, dt = dt + Math.imul(E, F) | 0, mt = mt + Math.imul(E, J) | 0, ct = ct + Math.imul(A, V) | 0, dt = dt + Math.imul(A, j) | 0, dt = dt + Math.imul(y, V) | 0, mt = mt + Math.imul(y, j) | 0, ct = ct + Math.imul(B, X) | 0, dt = dt + Math.imul(B, W) | 0, dt = dt + Math.imul(b, X) | 0, mt = mt + Math.imul(b, W) | 0, ct = ct + Math.imul(p, Y) | 0, dt = dt + Math.imul(p, Q) | 0, dt = dt + Math.imul(w, Y) | 0, mt = mt + Math.imul(w, Q) | 0, ct = ct + Math.imul(d, it) | 0, dt = dt + Math.imul(d, et) | 0, dt = dt + Math.imul(m, it) | 0, mt = mt + Math.imul(m, et) | 0, ct = ct + Math.imul(a, nt) | 0, dt = dt + Math.imul(a, st) | 0, dt = dt + Math.imul(f, nt) | 0, mt = mt + Math.imul(f, st) | 0, ct = ct + Math.imul(o, ot) | 0, dt = dt + Math.imul(o, ut) | 0, dt = dt + Math.imul(u, ot) | 0, mt = mt + Math.imul(u, ut) | 0;
                let vt = (gt + ct | 0) + ((8191 & dt) << 13) | 0;
                gt = (mt + (dt >>> 13) | 0) + (vt >>> 26) | 0, vt &= 67108863, ct = Math.imul(x, U), dt = Math.imul(x, k), dt = dt + Math.imul(H, U) | 0, mt = Math.imul(H, k), ct = ct + Math.imul(D, O) | 0, dt = dt + Math.imul(D, z) | 0, dt = dt + Math.imul(P, O) | 0, mt = mt + Math.imul(P, z) | 0, ct = ct + Math.imul(R, F) | 0, dt = dt + Math.imul(R, J) | 0, dt = dt + Math.imul(L, F) | 0, mt = mt + Math.imul(L, J) | 0, ct = ct + Math.imul(N, V) | 0, dt = dt + Math.imul(N, j) | 0, dt = dt + Math.imul(E, V) | 0, mt = mt + Math.imul(E, j) | 0, ct = ct + Math.imul(A, X) | 0, dt = dt + Math.imul(A, W) | 0, dt = dt + Math.imul(y, X) | 0, mt = mt + Math.imul(y, W) | 0, ct = ct + Math.imul(B, Y) | 0, dt = dt + Math.imul(B, Q) | 0, dt = dt + Math.imul(b, Y) | 0, mt = mt + Math.imul(b, Q) | 0, ct = ct + Math.imul(p, it) | 0, dt = dt + Math.imul(p, et) | 0, dt = dt + Math.imul(w, it) | 0, mt = mt + Math.imul(w, et) | 0, ct = ct + Math.imul(d, nt) | 0, dt = dt + Math.imul(d, st) | 0, dt = dt + Math.imul(m, nt) | 0, mt = mt + Math.imul(m, st) | 0, ct = ct + Math.imul(a, ot) | 0, dt = dt + Math.imul(a, ut) | 0, dt = dt + Math.imul(f, ot) | 0, mt = mt + Math.imul(f, ut) | 0, ct = ct + Math.imul(o, at) | 0, dt = dt + Math.imul(o, ft) | 0, dt = dt + Math.imul(u, at) | 0, mt = mt + Math.imul(u, ft) | 0;
                let Nt = (gt + ct | 0) + ((8191 & dt) << 13) | 0;
                gt = (mt + (dt >>> 13) | 0) + (Nt >>> 26) | 0, Nt &= 67108863, ct = Math.imul(x, O), dt = Math.imul(x, z), dt = dt + Math.imul(H, O) | 0, mt = Math.imul(H, z), ct = ct + Math.imul(D, F) | 0, dt = dt + Math.imul(D, J) | 0, dt = dt + Math.imul(P, F) | 0, mt = mt + Math.imul(P, J) | 0, ct = ct + Math.imul(R, V) | 0, dt = dt + Math.imul(R, j) | 0, dt = dt + Math.imul(L, V) | 0, mt = mt + Math.imul(L, j) | 0, ct = ct + Math.imul(N, X) | 0, dt = dt + Math.imul(N, W) | 0, dt = dt + Math.imul(E, X) | 0, mt = mt + Math.imul(E, W) | 0, ct = ct + Math.imul(A, Y) | 0, dt = dt + Math.imul(A, Q) | 0, dt = dt + Math.imul(y, Y) | 0, mt = mt + Math.imul(y, Q) | 0, ct = ct + Math.imul(B, it) | 0, dt = dt + Math.imul(B, et) | 0, dt = dt + Math.imul(b, it) | 0, mt = mt + Math.imul(b, et) | 0, ct = ct + Math.imul(p, nt) | 0, dt = dt + Math.imul(p, st) | 0, dt = dt + Math.imul(w, nt) | 0, mt = mt + Math.imul(w, st) | 0, ct = ct + Math.imul(d, ot) | 0, dt = dt + Math.imul(d, ut) | 0, dt = dt + Math.imul(m, ot) | 0, mt = mt + Math.imul(m, ut) | 0, ct = ct + Math.imul(a, at) | 0, dt = dt + Math.imul(a, ft) | 0, dt = dt + Math.imul(f, at) | 0, mt = mt + Math.imul(f, ft) | 0;
                let Et = (gt + ct | 0) + ((8191 & dt) << 13) | 0;
                gt = (mt + (dt >>> 13) | 0) + (Et >>> 26) | 0, Et &= 67108863, ct = Math.imul(x, F), dt = Math.imul(x, J), dt = dt + Math.imul(H, F) | 0, mt = Math.imul(H, J), ct = ct + Math.imul(D, V) | 0, dt = dt + Math.imul(D, j) | 0, dt = dt + Math.imul(P, V) | 0, mt = mt + Math.imul(P, j) | 0, ct = ct + Math.imul(R, X) | 0, dt = dt + Math.imul(R, W) | 0, dt = dt + Math.imul(L, X) | 0, mt = mt + Math.imul(L, W) | 0, ct = ct + Math.imul(N, Y) | 0, dt = dt + Math.imul(N, Q) | 0, dt = dt + Math.imul(E, Y) | 0, mt = mt + Math.imul(E, Q) | 0, ct = ct + Math.imul(A, it) | 0, dt = dt + Math.imul(A, et) | 0, dt = dt + Math.imul(y, it) | 0, mt = mt + Math.imul(y, et) | 0, ct = ct + Math.imul(B, nt) | 0, dt = dt + Math.imul(B, st) | 0, dt = dt + Math.imul(b, nt) | 0, mt = mt + Math.imul(b, st) | 0, ct = ct + Math.imul(p, ot) | 0, dt = dt + Math.imul(p, ut) | 0, dt = dt + Math.imul(w, ot) | 0, mt = mt + Math.imul(w, ut) | 0, ct = ct + Math.imul(d, at) | 0, dt = dt + Math.imul(d, ft) | 0, dt = dt + Math.imul(m, at) | 0, mt = mt + Math.imul(m, ft) | 0;
                let _t = (gt + ct | 0) + ((8191 & dt) << 13) | 0;
                gt = (mt + (dt >>> 13) | 0) + (_t >>> 26) | 0, _t &= 67108863, ct = Math.imul(x, V), dt = Math.imul(x, j), dt = dt + Math.imul(H, V) | 0, mt = Math.imul(H, j), ct = ct + Math.imul(D, X) | 0, dt = dt + Math.imul(D, W) | 0, dt = dt + Math.imul(P, X) | 0, mt = mt + Math.imul(P, W) | 0, ct = ct + Math.imul(R, Y) | 0, dt = dt + Math.imul(R, Q) | 0, dt = dt + Math.imul(L, Y) | 0, mt = mt + Math.imul(L, Q) | 0, ct = ct + Math.imul(N, it) | 0, dt = dt + Math.imul(N, et) | 0, dt = dt + Math.imul(E, it) | 0, mt = mt + Math.imul(E, et) | 0, ct = ct + Math.imul(A, nt) | 0, dt = dt + Math.imul(A, st) | 0, dt = dt + Math.imul(y, nt) | 0, mt = mt + Math.imul(y, st) | 0, ct = ct + Math.imul(B, ot) | 0, dt = dt + Math.imul(B, ut) | 0, dt = dt + Math.imul(b, ot) | 0, mt = mt + Math.imul(b, ut) | 0, ct = ct + Math.imul(p, at) | 0, dt = dt + Math.imul(p, ft) | 0, dt = dt + Math.imul(w, at) | 0, mt = mt + Math.imul(w, ft) | 0;
                let Rt = (gt + ct | 0) + ((8191 & dt) << 13) | 0;
                gt = (mt + (dt >>> 13) | 0) + (Rt >>> 26) | 0, Rt &= 67108863, ct = Math.imul(x, X), dt = Math.imul(x, W), dt = dt + Math.imul(H, X) | 0, mt = Math.imul(H, W), ct = ct + Math.imul(D, Y) | 0, dt = dt + Math.imul(D, Q) | 0, dt = dt + Math.imul(P, Y) | 0, mt = mt + Math.imul(P, Q) | 0, ct = ct + Math.imul(R, it) | 0, dt = dt + Math.imul(R, et) | 0, dt = dt + Math.imul(L, it) | 0, mt = mt + Math.imul(L, et) | 0, ct = ct + Math.imul(N, nt) | 0, dt = dt + Math.imul(N, st) | 0, dt = dt + Math.imul(E, nt) | 0, mt = mt + Math.imul(E, st) | 0, ct = ct + Math.imul(A, ot) | 0, dt = dt + Math.imul(A, ut) | 0, dt = dt + Math.imul(y, ot) | 0, mt = mt + Math.imul(y, ut) | 0, ct = ct + Math.imul(B, at) | 0, dt = dt + Math.imul(B, ft) | 0, dt = dt + Math.imul(b, at) | 0, mt = mt + Math.imul(b, ft) | 0;
                let Lt = (gt + ct | 0) + ((8191 & dt) << 13) | 0;
                gt = (mt + (dt >>> 13) | 0) + (Lt >>> 26) | 0, Lt &= 67108863, ct = Math.imul(x, Y), dt = Math.imul(x, Q), dt = dt + Math.imul(H, Y) | 0, mt = Math.imul(H, Q), ct = ct + Math.imul(D, it) | 0, dt = dt + Math.imul(D, et) | 0, dt = dt + Math.imul(P, it) | 0, mt = mt + Math.imul(P, et) | 0, ct = ct + Math.imul(R, nt) | 0, dt = dt + Math.imul(R, st) | 0, dt = dt + Math.imul(L, nt) | 0, mt = mt + Math.imul(L, st) | 0, ct = ct + Math.imul(N, ot) | 0, dt = dt + Math.imul(N, ut) | 0, dt = dt + Math.imul(E, ot) | 0, mt = mt + Math.imul(E, ut) | 0, ct = ct + Math.imul(A, at) | 0, dt = dt + Math.imul(A, ft) | 0, dt = dt + Math.imul(y, at) | 0, mt = mt + Math.imul(y, ft) | 0;
                let Kt = (gt + ct | 0) + ((8191 & dt) << 13) | 0;
                gt = (mt + (dt >>> 13) | 0) + (Kt >>> 26) | 0, Kt &= 67108863, ct = Math.imul(x, it), dt = Math.imul(x, et), dt = dt + Math.imul(H, it) | 0, mt = Math.imul(H, et), ct = ct + Math.imul(D, nt) | 0, dt = dt + Math.imul(D, st) | 0, dt = dt + Math.imul(P, nt) | 0, mt = mt + Math.imul(P, st) | 0, ct = ct + Math.imul(R, ot) | 0, dt = dt + Math.imul(R, ut) | 0, dt = dt + Math.imul(L, ot) | 0, mt = mt + Math.imul(L, ut) | 0, ct = ct + Math.imul(N, at) | 0, dt = dt + Math.imul(N, ft) | 0, dt = dt + Math.imul(E, at) | 0, mt = mt + Math.imul(E, ft) | 0;
                let Dt = (gt + ct | 0) + ((8191 & dt) << 13) | 0;
                gt = (mt + (dt >>> 13) | 0) + (Dt >>> 26) | 0, Dt &= 67108863, ct = Math.imul(x, nt), dt = Math.imul(x, st), dt = dt + Math.imul(H, nt) | 0, mt = Math.imul(H, st), ct = ct + Math.imul(D, ot) | 0, dt = dt + Math.imul(D, ut) | 0, dt = dt + Math.imul(P, ot) | 0, mt = mt + Math.imul(P, ut) | 0, ct = ct + Math.imul(R, at) | 0, dt = dt + Math.imul(R, ft) | 0, dt = dt + Math.imul(L, at) | 0, mt = mt + Math.imul(L, ft) | 0;
                let Pt = (gt + ct | 0) + ((8191 & dt) << 13) | 0;
                gt = (mt + (dt >>> 13) | 0) + (Pt >>> 26) | 0, Pt &= 67108863, ct = Math.imul(x, ot), dt = Math.imul(x, ut), dt = dt + Math.imul(H, ot) | 0, mt = Math.imul(H, ut), ct = ct + Math.imul(D, at) | 0, dt = dt + Math.imul(D, ft) | 0, dt = dt + Math.imul(P, at) | 0, mt = mt + Math.imul(P, ft) | 0;
                let It = (gt + ct | 0) + ((8191 & dt) << 13) | 0;
                gt = (mt + (dt >>> 13) | 0) + (It >>> 26) | 0, It &= 67108863, ct = Math.imul(x, at), dt = Math.imul(x, ft), dt = dt + Math.imul(H, at) | 0, mt = Math.imul(H, ft);
                let xt = (gt + ct | 0) + ((8191 & dt) << 13) | 0;
                return gt = (mt + (dt >>> 13) | 0) + (xt >>> 26) | 0, xt &= 67108863, s[0] = pt, s[1] = wt, s[2] = Mt, s[3] = Bt, s[4] = bt, s[5] = St, s[6] = At, s[7] = yt, s[8] = vt, s[9] = Nt, s[10] = Et, s[11] = _t, s[12] = Rt, s[13] = Lt, s[14] = Kt, s[15] = Dt, s[16] = Pt, s[17] = It, s[18] = xt, 0 !== gt && (s[19] = gt, e.length += 1), e
            }
            Math.imul || (P = K), t.exports = BN
        },
        6658: function(t, i, e) {
            "use strict";
            const r = e(5466),
                n = e(5797),
                {
                    padLeft: s,
                    padRight: h
                } = e(5658);

            function o(t, i) {
                r(t && "function" == typeof t.publicKeyExport);
                const e = t.publicKeyExport(i);
                if ("short" !== t.type) return {
                    kty: "OKP",
                    crv: l(t.id),
                    x: n.encodeURL(e),
                    ext: !0
                };
                const s = e.slice(0, t.size),
                    h = e.slice(t.size, 2 * t.size);
                return {
                    kty: "EC",
                    crv: l(t.id),
                    x: n.encodeURL(s),
                    y: n.encodeURL(h),
                    ext: !0
                }
            }

            function u(t) {
                return "short" === t.type ? "EC" : "OKP"
            }

            function l(t) {
                switch (r("string" == typeof t), t) {
                    case "P192":
                        return "P-192";
                    case "P224":
                        return "P-224";
                    case "P256":
                        return "P-256";
                    case "P384":
                        return "P-384";
                    case "P521":
                        return "P-521";
                    case "SECP256K1":
                        return "P-256K";
                    case "ED25519":
                        return "Ed25519";
                    case "ED448":
                        return "Ed448";
                    default:
                        return t
                }
            }

            function a(t) {
                switch (r("string" == typeof t), t) {
                    case "P-192":
                        return "P192";
                    case "P-224":
                        return "P224";
                    case "P-256":
                        return "P256";
                    case "P-384":
                        return "P384";
                    case "P-521":
                        return "P521";
                    case "P-256K":
                        return "SECP256K1";
                    case "Ed25519":
                        return "ED25519";
                    case "Ed448":
                        return "ED448";
                    default:
                        return t
                }
            }
            i.privateKeyExportJWK = function(t, i) {
                r(t && "function" == typeof t.publicKeyCreate);
                const e = t.publicKeyCreate(i, !1),
                    s = o(t, e);
                return "short" !== t.type ? {
                    kty: "OKP",
                    crv: s.crv,
                    x: s.x,
                    d: n.encodeURL(i),
                    ext: !0
                } : {
                    kty: "EC",
                    crv: s.crv,
                    x: s.x,
                    y: s.y,
                    d: n.encodeURL(i),
                    ext: !0
                }
            }, i.privateKeyImportJWK = function(t, i) {
                if (r(t && "function" == typeof t.privateKeyVerify), r(i && "object" == typeof i), i.kty !== u(t)) throw new Error("Invalid key type.");
                if (null != i.crv && a(i.crv) !== t.id) throw new Error("Invalid curve name.");
                let e = n.decodeURL(i.d);
                if (e = "short" === t.type ? s(e, t.size) : h(e, t.size), !t.privateKeyVerify(e)) throw new Error("Invalid private key.");
                return e
            }, i.publicKeyExportJWK = o, i.publicKeyImportJWK = function(t, i, e) {
                if (r(t && "function" == typeof t.publicKeyImport), r(i && "object" == typeof i), i.kty !== u(t)) throw new Error("Invalid key type.");
                if (null != i.crv && a(i.crv) !== t.id) throw new Error("Invalid curve name.");
                if ("short" !== t.type) {
                    const e = h(n.decodeURL(i.x), t.size);
                    return t.publicKeyImport(e)
                }
                const o = s(n.decodeURL(i.x), t.size),
                    l = s(n.decodeURL(i.y), t.size),
                    f = Buffer.concat([o, l]);
                return t.publicKeyImport(f, e)
            }
        },
        6662: function(t, i, e) {
            "use strict";
            const r = e(5466),
                n = e(5798),
                s = e(5636),
                h = new Uint8Array([3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53]),
                o = new n("16294579238595022365", 10),
                u = new n(4127218095),
                l = new n(3948078067);

            function a(t, i, e = s) {
                if (r(t instanceof n), t.isNeg() || t.isZero()) return !1;
                if (t.cmpn(64) < 0) {
                    const i = t.andln(255);
                    return i > 31 ? 0 != (673221152 & 1 << i - 32) : 0 != (-1601558356 & 1 << i)
                }
                if (!t.isOdd()) return !1;
                const h = t.mod(u).toNumber(),
                    o = t.mod(l).toNumber();
                return h % 3 != 0 && h % 5 != 0 && h % 7 != 0 && h % 11 != 0 && h % 13 != 0 && h % 17 != 0 && h % 19 != 0 && h % 23 != 0 && h % 37 != 0 && o % 29 != 0 && o % 31 != 0 && o % 41 != 0 && o % 43 != 0 && o % 47 != 0 && o % 53 != 0 && !!t.isPrime(e, i)
            }
            i.randomPrime = function(t, i = 20, e = s) {
                r(t >>> 0 === t), r(i >>> 0 === i), r(t >= 2), r(e && "function" == typeof e.randomBytes);
                let u = t % 8;
                0 === u && (u = 8);
                const l = t + 7 >>> 3;
                for (;;) {
                    const r = e.randomBytes(l);
                    r[0] &= (1 << u) - 1, u >= 2 ? r[0] |= 3 << u - 2 : (r[0] |= 1, r.length > 1 && (r[1] |= 128)), r[r.length - 1] |= 1;
                    const s = new n(r),
                        f = s.mod(o);
                    t: for (let i = 0; i < 1 << 20; i += 2) {
                        const e = f.addn(i);
                        for (let i = 0; i < h.length; i++) {
                            const r = h[i];
                            if (0 === e.modrn(r) && (t > 6 || 0 !== e.cmpn(r))) continue t
                        }
                        i > 0 && s.iaddn(i);
                        break
                    }
                    if (s.bitLength() === t && a(s, i, e)) return s
                }
            }, i.probablyPrime = a
        },
        6663: function(t, i, e) {
            "use strict";
            const r = e(5466),
                n = Buffer.from([0]),
                s = Buffer.from([1]);
            class HmacDRBG {
                constructor(t, i, e, n) {
                    r(t && "string" == typeof t.id), this.hash = t, this.minEntropy = "SHA1" === t.id ? 10 : 24, this.K = Buffer.allocUnsafe(t.size), this.V = Buffer.allocUnsafe(t.size), this.rounds = 0, i && this.init(i, e, n)
                }
                init(t, i = null, e = null) {
                    r(Buffer.isBuffer(t)), r(!i || Buffer.isBuffer(i)), r(!e || Buffer.isBuffer(e));
                    for (let t = 0; t < this.V.length; t++) this.K[t] = 0, this.V[t] = 1;
                    const n = h(t, i, e);
                    if (n.length < this.minEntropy) throw new Error("Not enough entropy.");
                    return this.update(n), this.rounds = 1, this
                }
                reseed(t, i = null) {
                    if (r(Buffer.isBuffer(t)), r(!i || Buffer.isBuffer(i)), 0 === this.rounds) throw new Error("DRBG not initialized.");
                    const e = h(t, i);
                    if (e.length < this.minEntropy) throw new Error("Not enough entropy.");
                    return this.update(e), this.rounds = 1, this
                }
                generate(t, i = null) {
                    if (r(t >>> 0 === t), r(!i || Buffer.isBuffer(i)), 0 === this.rounds) throw new Error("DRBG not initialized.");
                    if (this.rounds > 281474976710656) throw new Error("Reseed is required.");
                    i && 0 === i.length && (i = null), i && this.update(i);
                    const e = Math.ceil(t / this.hash.size),
                        n = Buffer.allocUnsafe(e * this.hash.size);
                    for (let t = 0; t < e; t++) this.V = this.mac(this.V), this.V.copy(n, t * this.hash.size);
                    return this.update(i), this.rounds += 1, n.slice(0, t)
                }
                randomBytes(t) {
                    return this.generate(t)
                }
                mac(t) {
                    return this.hash.mac(t, this.K)
                }
                hmac() {
                    return this.hash.hmac().init(this.K)
                }
                update(t = null) {
                    r(!t || Buffer.isBuffer(t));
                    const i = this.hmac();
                    if (i.update(this.V), i.update(n), t && i.update(t), this.K = i.final(), this.V = this.mac(this.V), t) {
                        const i = this.hmac();
                        i.update(this.V), i.update(s), i.update(t), this.K = i.final(), this.V = this.mac(this.V)
                    }
                    return this
                }
            }

            function h(t, i = null, e = null) {
                if (!i && !e) return t;
                let r = t.length,
                    n = 0;
                i && (r += i.length), e && (r += e.length);
                const s = Buffer.allocUnsafe(r);
                return n += t.copy(s, n), i && (n += i.copy(s, n)), e && e.copy(s, n), s
            }
            HmacDRBG.native = 0, t.exports = HmacDRBG
        },
        7480: function(t, i, e) {
            "use strict";
            const r = e(5466),
                n = e(6658),
                s = e(9983);
            t.exports = class Mont {
                constructor(t, i, e, n, s) {
                    r("string" == typeof t), r(i >>> 0 === i), r(e >>> 0 === e), r("string" == typeof n), r(s && "object" == typeof s), this.id = t, this.type = "mont", this.oid = Buffer.from(n, "hex"), this.ed = s, this.bits = i, this.size = e, this.native = s.native
                }
                privateKeyGenerate() {
                    return this.ed.scalarGenerate()
                }
                privateKeyVerify(t) {
                    return r(Buffer.isBuffer(t)), t.length === this.size
                }
                privateKeyExport(t) {
                    if (!this.privateKeyVerify(t)) throw new Error("Invalid private key.");
                    return s.encodeOct(t)
                }
                privateKeyImport(t) {
                    const i = s.decodeOct(t);
                    if (!this.privateKeyVerify(i)) throw new Error("Invalid private key.");
                    return i
                }
                privateKeyExportPKCS8(t) {
                    return s.encodePKCS8({
                        version: 0,
                        algorithm: {
                            oid: this.oid,
                            type: s.NULL,
                            params: null
                        },
                        key: this.privateKeyExport(t)
                    })
                }
                privateKeyImportPKCS8(t) {
                    const i = s.decodePKCS8(t);
                    return r(0 === i.version || 1 === i.version), r(i.algorithm.oid.equals(this.oid)), r(i.algorithm.type === s.NULL), this.privateKeyImport(i.key)
                }
                privateKeyExportJWK(t) {
                    return n.privateKeyExportJWK(this, t)
                }
                privateKeyImportJWK(t) {
                    return n.privateKeyImportJWK(this, t)
                }
                publicKeyCreate(t) {
                    const i = this.ed.scalarClamp(t),
                        e = this.ed.publicKeyFromScalar(i);
                    return this.ed.publicKeyConvert(e)
                }
                publicKeyConvert(t, i = !1) {
                    return this.ed.publicKeyDeconvert(t, i)
                }
                publicKeyDeconvert(t) {
                    return this.ed.publicKeyConvert(t)
                }
                _scalarBaseMul(t) {
                    if (this.ed.x) {
                        const i = this.ed.x.decodeScalar(t),
                            e = this.ed.x.reduce(i);
                        return this.ed.x.g.mul(e).encode()
                    }
                    return this.publicKeyCreate(t)
                }
                publicKeyFromUniform(t) {
                    return this.ed.pointFromUniform(t)
                }
                publicKeyToUniform(t, i = !1) {
                    return this.ed.pointToUniform(t, i)
                }
                publicKeyFromHash(t) {
                    return this.ed.pointFromHash(t)
                }
                publicKeyVerify(t) {
                    return this.ed.pointVerify(t)
                }
                publicKeyExport(t) {
                    if (!this.publicKeyVerify(t)) throw new Error("Invalid public key.");
                    return Buffer.from(t)
                }
                publicKeyImport(t) {
                    if (!this.publicKeyVerify(t)) throw new Error("Invalid public key.");
                    return Buffer.from(t)
                }
                publicKeyExportSPKI(t) {
                    return s.encodeSPKI({
                        algorithm: {
                            oid: this.oid,
                            type: s.NULL,
                            params: null
                        },
                        key: this.publicKeyExport(t)
                    })
                }
                publicKeyImportSPKI(t) {
                    const i = s.decodeSPKI(t);
                    return r(i.algorithm.oid.equals(this.oid)), r(i.algorithm.type === s.NULL), this.publicKeyImport(i.key)
                }
                publicKeyExportJWK(t) {
                    return n.publicKeyExportJWK(this, t)
                }
                publicKeyImportJWK(t) {
                    return n.publicKeyImportJWK(this, t, !1)
                }
                derive(t, i) {
                    return this.ed.exchangeWithScalar(t, i)
                }
            }
        },
        7491: function(t, i, e) {
            "use strict";
            const r = e(5466),
                {
                    trimLeft: n,
                    padLeft: s
                } = e(5658);
            class Signature {
                constructor(t = 0, i, e) {
                    this.r = s(i, t), this.s = s(e, t), this.param = 0
                }
                setR(t, i) {
                    return this.r = s(t, i), this
                }
                setS(t, i) {
                    return this.s = s(t, i), this
                }
                encode(t) {
                    r(t >>> 0 === t), r(t < 125), r(this.r.length === t), r(this.s.length === t);
                    const i = Buffer.allocUnsafe(2 * t);
                    return this.r.copy(i, 0), this.s.copy(i, t), i
                }
                decode(t, i) {
                    return r(Buffer.isBuffer(t)), r(i >>> 0 === i), r(t.length === 2 * i), this.r = t.slice(0, i), this.s = t.slice(i, 2 * i), this
                }
                toDER(t) {
                    r(t >>> 0 === t), r(t < 125), r(this.r.length === t), r(this.s.length === t);
                    const i = h(this.r),
                        e = h(this.s),
                        n = 2 + i.length + 2 + e.length,
                        s = n >= 128 ? 1 : 0,
                        o = 2 + s + n,
                        u = Buffer.allocUnsafe(o);
                    let l = 0;
                    return u[l++] = 48, s && (u[l++] = 129), u[l++] = n, u[l++] = 2, u[l++] = i.length, l += i.copy(u, l), u[l++] = 2, u[l++] = e.length, l += e.copy(u, l), r(l === o), u
                }
                fromDER(t, i) {
                    r(Buffer.isBuffer(t)), r(i >>> 0 === i);
                    let e = 0,
                        n = 0,
                        h = 0,
                        o = 0,
                        u = null,
                        l = null;
                    if (r(n + 1 <= t.length), r(48 === t[n]), n += 1, r(n + 1 <= t.length), e = t[n], n += 1, 128 & e && (e -= 128, r(n + e <= t.length), n += e), r(n + 1 <= t.length), r(2 === t[n]), n += 1, r(n + 1 <= t.length), e = t[n], n += 1, 128 & e) {
                        for (e -= 128, r(n + e <= t.length); e > 0 && 0 === t[n];) e -= 1, n += 1;
                        for (r(e <= 6); e > 0;) h *= 256, h += t[n], e -= 1, n += 1
                    } else h = e;
                    for (r(n + h <= t.length); h > 0 && 0 === t[n];) h -= 1, n += 1;
                    if (u = h > i ? Buffer.alloc(i, 0) : t.slice(n, n + h), n += h, r(n + 1 <= t.length), r(2 === t[n]), n += 1, r(n + 1 <= t.length), e = t[n], n += 1, 128 & e) {
                        for (e -= 128, r(n + e <= t.length); e > 0 && 0 === t[n];) e -= 1, n += 1;
                        for (r(e <= 6); e > 0;) o *= 256, o += t[n], e -= 1, n += 1
                    } else o = e;
                    for (r(n + o <= t.length); o > 0 && 0 === t[n];) o -= 1, n += 1;
                    return l = o > i ? Buffer.alloc(i, 0) : t.slice(n, n + o), n += o, this.r = s(u, i), this.s = s(l, i), this
                }
                static decode(t, i) {
                    return (new this).decode(t, i)
                }
                static fromDER(t, i) {
                    return (new this).fromDER(t, i)
                }
                static toRS(t, i) {
                    return Signature.fromDER(t, i).encode(i)
                }
                static toDER(t, i) {
                    return Signature.decode(t, i).toDER(i)
                }
            }

            function h(t) {
                const i = n(t);
                if (128 & i[0]) {
                    const t = Buffer.allocUnsafe(1 + i.length);
                    return t[0] = 0, i.copy(t, 1), t
                }
                return i
            }
            t.exports = Signature
        },
        9965: function(t, i, e) {
            "use strict";
            const r = e(5466),
                n = e(7470),
                s = e(7471);
            class AEAD {
                constructor() {
                    this.chacha20 = new n, this.poly1305 = new s, this.aadLen = 0, this.cipherLen = 0, this.hasCipher = !1, this.polyKey = null
                }
                init(t, i) {
                    r(Buffer.isBuffer(t)), r(Buffer.isBuffer(i));
                    const e = Buffer.alloc(32, 0);
                    return this.chacha20.init(t, i, 0), this.chacha20.encrypt(e), this.poly1305.init(e), this.chacha20.encrypt(Buffer.alloc(32, 0)), this.polyKey = e, this.aadLen = 0, this.cipherLen = 0, this.hasCipher = !1, this
                }
                aad(t) {
                    return r(!this.hasCipher, "Cannot update aad."), this.poly1305.update(t), this.aadLen += t.length, this
                }
                encrypt(t) {
                    return this.hasCipher || this._pad16(this.aadLen), this.chacha20.encrypt(t), this.poly1305.update(t), this.cipherLen += t.length, this.hasCipher = !0, t
                }
                decrypt(t) {
                    return r(Buffer.isBuffer(t)), this.hasCipher || this._pad16(this.aadLen), this.cipherLen += t.length, this.hasCipher = !0, this.poly1305.update(t), this.chacha20.encrypt(t), t
                }
                auth(t) {
                    return r(Buffer.isBuffer(t)), this.hasCipher || this._pad16(this.aadLen), this.cipherLen += t.length, this.hasCipher = !0, this.poly1305.update(t), t
                }
                final() {
                    const t = Buffer.allocUnsafe(16);
                    let i, e;
                    return i = this.aadLen % 4294967296, e = (this.aadLen - i) / 4294967296, h(t, i, 0), h(t, e, 4), i = this.cipherLen % 4294967296, e = (this.cipherLen - i) / 4294967296, h(t, i, 8), h(t, e, 12), this.hasCipher || this._pad16(this.aadLen), this._pad16(this.cipherLen), this.poly1305.update(t), this.poly1305.final()
                }
                _pad16(t) {
                    if (0 === (t %= 16)) return;
                    const i = Buffer.allocUnsafe(16 - t);
                    i.fill(0), this.poly1305.update(i)
                }
                static encrypt(t, i, e, r) {
                    const n = new AEAD;
                    return n.init(t, i), r && n.aad(r), n.encrypt(e), n.final()
                }
                static decrypt(t, i, e, r, n) {
                    const s = new AEAD;
                    return s.init(t, i), n && s.aad(n), s.decrypt(e), AEAD.verify(s.final(), r)
                }
                static auth(t, i, e, r, n) {
                    const s = new AEAD;
                    return s.init(t, i), n && s.aad(n), s.auth(e), AEAD.verify(s.final(), r)
                }
                static verify(t, i) {
                    return s.verify(t, i)
                }
            }

            function h(t, i, e) {
                return t[e++] = i, i >>>= 8, t[e++] = i, i >>>= 8, t[e++] = i, i >>>= 8, t[e++] = i, e
            }
            AEAD.native = n.native, t.exports = AEAD
        },
        9967: function(t, i, e) {
            "use strict";
            const r = e(7472),
                {
                    CBCCipher: n,
                    CBCDecipher: s
                } = e(7473);

            function h(t, i) {
                const e = Buffer.allocUnsafe(t.length + i.length);
                return t.copy(e, 0), i.copy(e, t.length), e
            }
            i.native = 0, i.encipher = function(t, i, e) {
                const s = new n(new r(256));
                return s.init(i, e), h(s.update(t), s.final())
            }, i.decipher = function(t, i, e) {
                const n = new s(new r(256));
                return n.init(i, e), h(n.update(t), n.final())
            }
        },
        9969: function(t, i, e) {
            "use strict";
            const r = e(5466),
                n = e(5579),
                s = new Uint32Array([4089235720, 1779033703, 2227873595, 3144134277, 4271175723, 1013904242, 1595750129, 2773480762, 2917565137, 1359893119, 725511199, 2600822924, 4215389547, 528734635, 327033209, 1541459225]),
                h = new Uint8Array([0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24, 26, 28, 30, 28, 20, 8, 16, 18, 30, 26, 12, 2, 24, 0, 4, 22, 14, 10, 6, 22, 16, 24, 0, 10, 4, 30, 26, 20, 28, 6, 12, 14, 2, 18, 8, 14, 18, 6, 2, 26, 24, 22, 28, 4, 12, 10, 20, 8, 0, 30, 16, 18, 0, 10, 14, 4, 8, 20, 30, 28, 2, 22, 24, 12, 16, 6, 26, 4, 24, 12, 20, 0, 22, 16, 6, 8, 26, 14, 10, 30, 28, 2, 18, 24, 10, 2, 30, 28, 26, 8, 20, 0, 14, 12, 6, 18, 4, 16, 22, 26, 22, 14, 28, 24, 2, 6, 18, 10, 0, 30, 8, 16, 12, 4, 20, 12, 30, 28, 18, 22, 6, 0, 16, 24, 4, 26, 14, 2, 8, 20, 10, 20, 4, 16, 8, 14, 12, 2, 10, 30, 22, 18, 28, 6, 24, 26, 0, 0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24, 26, 28, 30, 28, 20, 8, 16, 18, 30, 26, 12, 2, 24, 0, 4, 22, 14, 10, 6]);
            class BLAKE2b {
                constructor() {
                    this.state = new Uint32Array(16), this.V = new Uint32Array(32), this.M = new Uint32Array(32), this.block = Buffer.allocUnsafe(128), this.size = 32, this.count = 0, this.pos = 2147483648
                }
                init(t = 32, i = null) {
                    if (r(t >>> 0 === t), r(!i || Buffer.isBuffer(i)), 0 === t || t > 64) throw new Error("Bad output length.");
                    if (i && i.length > 64) throw new Error("Bad key length.");
                    const e = i ? i.length : 0;
                    for (let t = 0; t < 16; t++) this.state[t] = s[t];
                    if (this.size = t, this.count = 0, this.pos = 0, this.state[0] ^= 16842752 ^ e << 8 ^ this.size, e > 0) {
                        const t = Buffer.alloc(128, 0);
                        i.copy(t, 0), this.update(t)
                    }
                    return this
                }
                update(t) {
                    r(Buffer.isBuffer(t)), r(!(2147483648 & this.pos), "Context already finalized.");
                    let i = 0,
                        e = t.length;
                    if (e > 0) {
                        const r = this.pos,
                            n = 128 - r;
                        if (e > n)
                            for (this.pos = 0, t.copy(this.block, r, i, i + n), this.count += 128, this.compress(this.block, 0, !1), i += n, e -= n; e > 128;) this.count += 128, this.compress(t, i, !1), i += 128, e -= 128;
                        t.copy(this.block, this.pos, i, i + e), this.pos += e
                    }
                    return this
                }
                final() {
                    r(!(2147483648 & this.pos), "Context already finalized."), this.count += this.pos, this.block.fill(0, this.pos, 128), this.compress(this.block, 0, !0), this.pos = 2147483648;
                    const t = Buffer.allocUnsafe(this.size);
                    for (let i = 0; i < this.size; i++) t[i] = this.state[i >>> 2] >>> 8 * (3 & i);
                    for (let t = 0; t < 16; t++) this.state[t] = 0;
                    for (let t = 0; t < 32; t++) this.V[t] = 0, this.M[t] = 0;
                    for (let t = 0; t < 128; t++) this.block[t] = 0;
                    return t
                }
                compress(t, i, e) {
                    const {
                        V: r,
                        M: n
                    } = this;
                    for (let t = 0; t < 16; t++) r[t] = this.state[t], r[t + 16] = s[t];
                    r[24] ^= this.count, r[25] ^= this.count * (1 / 4294967296), r[26] ^= 0, r[27] ^= 0, e && (r[28] ^= -1, r[29] ^= -1, r[29] ^= 0, r[30] ^= 0);
                    for (let e = 0; e < 32; e++) n[e] = a(t, i), i += 4;
                    for (let t = 0; t < 12; t++) l(r, n, 0, 8, 16, 24, h[16 * t + 0], h[16 * t + 1]), l(r, n, 2, 10, 18, 26, h[16 * t + 2], h[16 * t + 3]), l(r, n, 4, 12, 20, 28, h[16 * t + 4], h[16 * t + 5]), l(r, n, 6, 14, 22, 30, h[16 * t + 6], h[16 * t + 7]), l(r, n, 0, 10, 20, 30, h[16 * t + 8], h[16 * t + 9]), l(r, n, 2, 12, 22, 24, h[16 * t + 10], h[16 * t + 11]), l(r, n, 4, 14, 16, 26, h[16 * t + 12], h[16 * t + 13]), l(r, n, 6, 8, 18, 28, h[16 * t + 14], h[16 * t + 15]);
                    for (let t = 0; t < 16; t++) this.state[t] ^= r[t] ^ r[t + 16]
                }
                static hash() {
                    return new BLAKE2b
                }
                static hmac(t = 32) {
                    return new n(BLAKE2b, 128, [t])
                }
                static digest(t, i = 32, e = null) {
                    const r = BLAKE2b.ctx;
                    return r.init(i, e), r.update(t), r.final()
                }
                static root(t, i, e = 32) {
                    r(Buffer.isBuffer(t) && t.length === e), r(Buffer.isBuffer(i) && i.length === e);
                    const n = BLAKE2b.ctx;
                    return n.init(e), n.update(t), n.update(i), n.final()
                }
                static multi(t, i, e, r = 32) {
                    const n = BLAKE2b.ctx;
                    return n.init(r), n.update(t), n.update(i), e && n.update(e), n.final()
                }
                static mac(t, i, e = 32) {
                    return BLAKE2b.hmac(e).init(i).update(t).final()
                }
            }

            function o(t, i, e) {
                const r = t[i + 0] + t[e + 0],
                    n = t[i + 1] + t[e + 1],
                    s = r >= 4294967296 | 0;
                t[i + 0] = r, t[i + 1] = n + s
            }

            function u(t, i, e, r) {
                const n = t[i + 0] + e,
                    s = t[i + 1] + r,
                    h = n >= 4294967296 | 0;
                t[i + 0] = n, t[i + 1] = s + h
            }

            function l(t, i, e, r, n, s, h, l) {
                const a = i[h + 0],
                    f = i[h + 1],
                    c = i[l + 0],
                    d = i[l + 1];
                o(t, e, r), u(t, e, a, f);
                const m = t[s + 0] ^ t[e + 0],
                    g = t[s + 1] ^ t[e + 1];
                t[s + 0] = g, t[s + 1] = m, o(t, n, s);
                const p = t[r + 0] ^ t[n + 0],
                    w = t[r + 1] ^ t[n + 1];
                t[r + 0] = p >>> 24 ^ w << 8, t[r + 1] = w >>> 24 ^ p << 8, o(t, e, r), u(t, e, c, d);
                const M = t[s + 0] ^ t[e + 0],
                    B = t[s + 1] ^ t[e + 1];
                t[s + 0] = M >>> 16 ^ B << 16, t[s + 1] = B >>> 16 ^ M << 16, o(t, n, s);
                const b = t[r + 0] ^ t[n + 0],
                    S = t[r + 1] ^ t[n + 1];
                t[r + 0] = S >>> 31 ^ b << 1, t[r + 1] = b >>> 31 ^ S << 1
            }

            function a(t, i) {
                return t[i++] + 256 * t[i++] + 65536 * t[i++] + 16777216 * t[i]
            }
            BLAKE2b.native = 0, BLAKE2b.id = "BLAKE2B256", BLAKE2b.size = 32, BLAKE2b.bits = 256, BLAKE2b.blockSize = 128, BLAKE2b.zero = Buffer.alloc(32, 0), BLAKE2b.ctx = new BLAKE2b, t.exports = BLAKE2b
        },
        9974: function(t, i, e) {
            "use strict";
            const r = e(5466),
                n = e(5579),
                s = new Uint32Array([1779033703, 3144134277, 1013904242, 2773480762, 1359893119, 2600822924, 528734635, 1541459225]),
                h = new Uint8Array([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 14, 10, 4, 8, 9, 15, 13, 6, 1, 12, 0, 2, 11, 7, 5, 3, 11, 8, 12, 0, 5, 2, 15, 13, 10, 14, 3, 6, 7, 1, 9, 4, 7, 9, 3, 1, 13, 12, 11, 14, 2, 6, 5, 10, 4, 0, 15, 8, 9, 0, 5, 7, 2, 4, 10, 15, 14, 1, 11, 12, 6, 8, 3, 13, 2, 12, 6, 10, 0, 11, 8, 3, 4, 13, 7, 5, 15, 14, 1, 9, 12, 5, 1, 15, 14, 13, 4, 10, 0, 7, 6, 3, 9, 2, 8, 11, 13, 11, 7, 14, 12, 1, 3, 9, 5, 0, 15, 4, 8, 6, 2, 10, 6, 15, 14, 9, 11, 3, 0, 8, 12, 2, 13, 7, 1, 4, 10, 5, 10, 2, 8, 4, 7, 6, 1, 5, 15, 11, 9, 14, 3, 12, 13, 0]);
            class BLAKE2s {
                constructor() {
                    this.state = new Uint32Array(8), this.V = new Uint32Array(16), this.M = new Uint32Array(16), this.block = Buffer.allocUnsafe(64), this.size = 32, this.count = 0, this.pos = 2147483648
                }
                init(t = 32, i = null) {
                    if (r(t >>> 0 === t), r(!i || Buffer.isBuffer(i)), 0 === t || t > 32) throw new Error("Bad output length.");
                    if (i && i.length > 32) throw new Error("Bad key length.");
                    const e = i ? i.length : 0;
                    for (let t = 0; t < 8; t++) this.state[t] = s[t];
                    if (this.size = t, this.count = 0, this.pos = 0, this.state[0] ^= 16842752 ^ e << 8 ^ this.size, e > 0) {
                        const t = Buffer.alloc(64, 0);
                        i.copy(t, 0), this.update(t)
                    }
                    return this
                }
                update(t) {
                    r(Buffer.isBuffer(t)), r(!(2147483648 & this.pos), "Context already finalized.");
                    let i = 0,
                        e = t.length;
                    if (e > 0) {
                        const r = this.pos,
                            n = 64 - r;
                        if (e > n)
                            for (this.pos = 0, t.copy(this.block, r, i, i + n), this.count += 64, this.compress(this.block, 0, !1), i += n, e -= n; e > 64;) this.count += 64, this.compress(t, i, !1), i += 64, e -= 64;
                        t.copy(this.block, this.pos, i, i + e), this.pos += e
                    }
                    return this
                }
                final() {
                    r(!(2147483648 & this.pos), "Context already finalized."), this.count += this.pos, this.block.fill(0, this.pos, 64), this.compress(this.block, 0, !0), this.pos = 2147483648;
                    const t = Buffer.allocUnsafe(this.size);
                    for (let i = 0; i < this.size; i++) t[i] = this.state[i >>> 2] >>> 8 * (3 & i);
                    for (let t = 0; t < 8; t++) this.state[t] = 0;
                    for (let t = 0; t < 16; t++) this.V[t] = 0, this.M[t] = 0;
                    for (let t = 0; t < 64; t++) this.block[t] = 0;
                    return t
                }
                compress(t, i, e) {
                    const {
                        V: r,
                        M: n
                    } = this;
                    for (let t = 0; t < 8; t++) r[t] = this.state[t], r[t + 8] = s[t];
                    r[12] ^= this.count, r[13] ^= this.count * (1 / 4294967296), e && (r[14] ^= -1, r[15] ^= 0);
                    for (let e = 0; e < 16; e++) n[e] = l(t, i), i += 4;
                    for (let t = 0; t < 10; t++) u(r, n, 0, 4, 8, 12, h[16 * t + 0], h[16 * t + 1]), u(r, n, 1, 5, 9, 13, h[16 * t + 2], h[16 * t + 3]), u(r, n, 2, 6, 10, 14, h[16 * t + 4], h[16 * t + 5]), u(r, n, 3, 7, 11, 15, h[16 * t + 6], h[16 * t + 7]), u(r, n, 0, 5, 10, 15, h[16 * t + 8], h[16 * t + 9]), u(r, n, 1, 6, 11, 12, h[16 * t + 10], h[16 * t + 11]), u(r, n, 2, 7, 8, 13, h[16 * t + 12], h[16 * t + 13]), u(r, n, 3, 4, 9, 14, h[16 * t + 14], h[16 * t + 15]);
                    for (let t = 0; t < 8; t++) this.state[t] ^= r[t] ^ r[t + 8]
                }
                static hash() {
                    return new BLAKE2s
                }
                static hmac(t = 32) {
                    return new n(BLAKE2s, 64, [t])
                }
                static digest(t, i = 32, e = null) {
                    const r = BLAKE2s.ctx;
                    return r.init(i, e), r.update(t), r.final()
                }
                static root(t, i, e = 32) {
                    r(Buffer.isBuffer(t) && t.length === e), r(Buffer.isBuffer(i) && i.length === e);
                    const n = BLAKE2s.ctx;
                    return n.init(e), n.update(t), n.update(i), n.final()
                }
                static multi(t, i, e, r = 32) {
                    const n = BLAKE2s.ctx;
                    return n.init(r), n.update(t), n.update(i), e && n.update(e), n.final()
                }
                static mac(t, i, e = 32) {
                    return BLAKE2s.hmac(e).init(i).update(t).final()
                }
            }

            function o(t, i) {
                return t >>> i ^ t << 32 - i
            }

            function u(t, i, e, r, n, s, h, u) {
                const l = i[h],
                    a = i[u];
                t[e] = t[e] + t[r] + l, t[s] = o(t[s] ^ t[e], 16), t[n] = t[n] + t[s], t[r] = o(t[r] ^ t[n], 12), t[e] = t[e] + t[r] + a, t[s] = o(t[s] ^ t[e], 8), t[n] = t[n] + t[s], t[r] = o(t[r] ^ t[n], 7)
            }

            function l(t, i) {
                return t[i++] + 256 * t[i++] + 65536 * t[i++] + 16777216 * t[i]
            }
            BLAKE2s.native = 0, BLAKE2s.id = "BLAKE2S256", BLAKE2s.size = 32, BLAKE2s.bits = 256, BLAKE2s.blockSize = 64, BLAKE2s.zero = Buffer.alloc(32, 0), BLAKE2s.ctx = new BLAKE2s, t.exports = BLAKE2s
        },
        9983: function(t, i, e) {
            "use strict";
            const r = e(5466),
                n = Buffer.from("2a8648ce380401", "hex"),
                s = Buffer.from("2a864886f70d010101", "hex"),
                h = Buffer.from("2a8648ce3d0201", "hex"),
                o = Buffer.from("2b06010401da47040c01", "hex"),
                u = Buffer.alloc(0),
                l = Buffer.alloc(1, 0);

            function a(t) {
                r(t && "object" == typeof t);
                let i = u;
                return 5 !== t.type && (i = w(t.params, t.type)), p([g(t.oid), i])
            }

            function f(t) {
                r(Buffer.isBuffer(t)), 0 === t.length && (t = l);
                let i = 0;
                for (; i < t.length && 0 === t[i]; i++);
                return i === t.length ? w(l, 2) : (128 & (t = t.slice(i))[0] && (t = Buffer.concat([l, t])), w(t, 2))
            }

            function c(t) {
                return r((255 & t) === t), f(Buffer.from([t]))
            }

            function d(t) {
                return r(Buffer.isBuffer(t)), w(Buffer.concat([l, t]), 3)
            }

            function m(t) {
                return w(t, 4)
            }

            function g(t) {
                return w(t, 6)
            }

            function p(t) {
                return r(Array.isArray(t)), w(Buffer.concat(t), 48)
            }

            function w(t, i) {
                r(Buffer.isBuffer(t)), r((255 & i) === i);
                let e = 0,
                    n = 0;
                if (e += 1, e += 1, t.length >= 128) {
                    let i = t.length;
                    for (; i;) e += 1, n += 1, i >>>= 8
                }
                e += t.length;
                const s = Buffer.allocUnsafe(e);
                let h = 0;
                if (s[h] = i, h += 1, n) {
                    s[h] = 128 | n, h += 1;
                    let i = t.length;
                    for (let t = n - 1; t >= 0; t--) s[h + t] = i, i >>>= 8;
                    h += n
                } else s[h] = t.length, h += 1;
                return t.copy(s, h), s
            }

            function M(t, i) {
                return r((255 & i) === i), w(t, 160 | i)
            }

            function B(t, i) {
                [t, i] = N(t, i);
                const e = i;
                let n;
                i = 0, [n, i] = v(t, i);
                let s = i < t.length ? t[i] : -1,
                    h = u;
                switch (s) {
                    case -1:
                        s = 5;
                        break;
                    case 5:
                        r((i += 1) < t.length), r(0 === t[i]);
                        break;
                    default:
                        [h] = E(t, i, s)
                }
                return [{
                    oid: n,
                    type: s,
                    params: h
                }, e]
            }

            function b(t, i) {
                [t, i] = E(t, i, 2), r(t.length > 0);
                let e = 0;
                for (; e < t.length && 0 === t[e]; e++);
                if (e === t.length) return [l, i];
                if (0 === e && 128 & t[0]) throw new Error("Integer is negative.");
                return [t.slice(e), i]
            }

            function S(t, i) {
                return [t, i] = b(t, i), r(1 === t.length), [t[0], i]
            }

            function A(t, i) {
                return [t, i] = E(t, i, 3), r(t.length > 0), r(0 === t[0]), [t.slice(1), i]
            }

            function y(t, i) {
                return E(t, i, 4)
            }

            function v(t, i) {
                return E(t, i, 6)
            }

            function N(t, i) {
                return E(t, i, 48)
            }

            function E(t, i, e) {
                let n;
                r(Buffer.isBuffer(t)), r(i >>> 0 === i), r(i < t.length), r((255 & e) === e), r(t[i] === e), i += 1, [n, i] = function(t, i) {
                    r(Buffer.isBuffer(t)), r(i >>> 0 === i), r(i < t.length);
                    const e = t[i],
                        n = 127 & e;
                    if (i += 1, 0 == (128 & e)) return [n, i];
                    if (0 === n) throw new Error("Indefinite length.");
                    let s = 0;
                    for (let e = 0; e < n; e++) {
                        r(i < t.length);
                        const e = t[i];
                        if (i += 1, s >= 1 << 23) throw new Error("Length too large.");
                        if (s *= 256, s += e, 0 === s) throw new Error("Unexpected leading zeroes.")
                    }
                    if (s < 128) throw new Error("Non-minimal length.");
                    return [s, i]
                }(t, i), r(i + n <= t.length);
                return [t.slice(i, i + n), i += n]
            }

            function _(t, i, e) {
                r(Buffer.isBuffer(t)), r(i >>> 0 === i), r(i < t.length), r((255 & e) === e);
                try {
                    return E(t, i, 160 | e)
                } catch (t) {
                    return [null, i]
                }
            }
            i.INT = 2, i.BIT = 3, i.OCT = 4, i.NULL = 5, i.OID = 6, i.SEQ = 48, i.DSA_OID = n, i.RSA_OID = s, i.ECDSA_OID = h, i.EDDSA_OID = o, i.encodeSEC1 = function(t) {
                r(t && "object" == typeof t);
                const i = [c(t.version), m(t.key)];
                return t.oid && i.push(M(g(t.oid), 0)), t.pub && i.push(M(d(t.pub), 1)), p(i)
            }, i.encodePKCS8 = function(t) {
                return r(t && "object" == typeof t), p([c(t.version), a(t.algorithm), m(t.key)])
            }, i.encodeSPKI = function(t) {
                return r(t && "object" == typeof t), p([a(t.algorithm), d(t.key)])
            }, i.encodeAlgorithm = a, i.encodeParams = function(t, i, e) {
                return Buffer.concat([f(t), f(i), f(e)])
            }, i.encodeInt = f, i.encodeOct = m, i.decodeSEC1 = function(t) {
                return function(t, i) {
                    [t, i] = N(t, i);
                    const e = i;
                    let r, n, s, h;
                    i = 0;
                    let o = null,
                        u = null;
                    if ([r, i] = S(t, i), [n, i] = y(t, i), [s, i] = _(t, i, 0), s) try {
                        [o] = v(s, 0)
                    } catch (t) {} [h, i] = _(t, i, 1), h && ([u] = A(h, 0));
                    return [{
                        version: r,
                        key: n,
                        oid: o,
                        pub: u
                    }, e]
                }(t, 0)[0]
            }, i.decodePKCS8 = function(t) {
                return function(t, i) {
                    [t, i] = N(t, i);
                    const e = i;
                    let r, n, s;
                    return i = 0, [r, i] = S(t, i), [n, i] = B(t, i), [s, i] = y(t, i), [{
                        version: r,
                        algorithm: n,
                        key: s
                    }, e]
                }(t, 0)[0]
            }, i.decodeSPKI = function(t) {
                return function(t, i) {
                    [t, i] = N(t, i);
                    const e = i;
                    let r, n;
                    return i = 0, [r, i] = B(t, i), [n, i] = A(t, i), [{
                        algorithm: r,
                        key: n
                    }, e]
                }(t, 0)[0]
            }, i.decodeAlgorithm = function(t) {
                return B(t, 0)[0]
            }, i.decodeParams = function(t) {
                return function(t, i) {
                    let e, r, n;
                    return [e, i] = b(t, i), [r, i] = b(t, i), [n, i] = b(t, i), [
                        [e, r, n], i
                    ]
                }(t, 0)[0]
            }, i.decodeInt = function(t) {
                return b(t, 0)[0]
            }, i.decodeOct = function(t) {
                return y(t, 0)[0]
            }
        },
        9988: function(t, i, e) {
            "use strict";
            const r = {
                    COUNTRY: "2.5.4.6",
                    ORGANIZATION: "2.5.4.10",
                    ORGANIZATIONALUNIT: "2.5.4.11",
                    COMMONNAME: "2.5.4.3",
                    SERIALNUMBER: "2.5.4.5",
                    LOCALITY: "2.5.4.7",
                    PROVINCE: "2.5.4.8",
                    STREETADDRESS: "2.5.4.9",
                    POSTALCODE: "2.5.4.17"
                },
                n = {
                    [r.COUNTRY]: "COUNTRY",
                    [r.ORGANIZATION]: "ORGANIZATION",
                    [r.ORGANIZATIONALUNIT]: "ORGANIZATIONALUNIT",
                    [r.COMMONNAME]: "COMMONNAME",
                    [r.SERIALNUMBER]: "SERIALNUMBER",
                    [r.LOCALITY]: "LOCALITY",
                    [r.PROVINCE]: "PROVINCE",
                    [r.STREETADDRESS]: "STREETADDRESS",
                    [r.POSTALCODE]: "POSTALCODE"
                },
                s = {
                    DH: "1.2.840.113549.1.3.1",
                    DSA: "1.2.840.10040.4.1",
                    DSA_ALT: "1.2.840.10040.4.2",
                    RSA: "1.2.840.113549.1.1.1",
                    ECDSA: "1.2.840.10045.2.1",
                    EDDSA: "1.3.6.1.4.1.11591.4.12.1"
                },
                h = {
                    [s.DH]: "DH",
                    [s.DSA]: "DSA",
                    [s.DSA_ALT]: "DSA",
                    [s.RSA]: "RSA",
                    [s.ECDSA]: "ECDSA",
                    [s.EDDSA]: "EDDSA"
                },
                o = {
                    BLAKE2B160: "1.3.6.1.4.1.1722.12.2.1.5",
                    BLAKE2B256: "1.3.6.1.4.1.1722.12.2.1.8",
                    BLAKE2B384: "1.3.6.1.4.1.1722.12.2.1.12",
                    BLAKE2B512: "1.3.6.1.4.1.1722.12.2.1.16",
                    BLAKE2S128: "1.3.6.1.4.1.1722.12.2.2.4",
                    BLAKE2S160: "1.3.6.1.4.1.1722.12.2.2.5",
                    BLAKE2S224: "1.3.6.1.4.1.1722.12.2.2.7",
                    BLAKE2S256: "1.3.6.1.4.1.1722.12.2.2.8",
                    GOST94: "1.2.643.2.2.20",
                    MD2: "1.2.840.113549.2.2",
                    MD4: "1.2.840.113549.2.4",
                    MD5: "1.2.840.113549.2.5",
                    MDC2: "1.3.14.3.2.19",
                    RIPEMD160: "1.0.10118.3.0.49",
                    RIPEMD160_ALT: "1.3.36.3.2.1",
                    SHA1: "1.3.14.3.2.26",
                    SHA224: "2.16.840.1.101.3.4.2.4",
                    SHA256: "2.16.840.1.101.3.4.2.1",
                    SHA384: "2.16.840.1.101.3.4.2.2",
                    SHA512: "2.16.840.1.101.3.4.2.3",
                    SHA3_224: "2.16.840.1.101.3.4.2.7",
                    SHA3_256: "2.16.840.1.101.3.4.2.8",
                    SHA3_384: "2.16.840.1.101.3.4.2.9",
                    SHA3_512: "2.16.840.1.101.3.4.2.10",
                    SHAKE128: "2.16.840.1.101.3.4.2.11",
                    SHAKE256: "2.16.840.1.101.3.4.2.12",
                    SM3: "1.0.10118.3.0.65",
                    WHIRLPOOL: "1.0.10118.3.0.55"
                },
                u = {
                    [o.BLAKE2B160]: "BLAKE2B160",
                    [o.BLAKE2B256]: "BLAKE2B256",
                    [o.BLAKE2B384]: "BLAKE2B384",
                    [o.BLAKE2B512]: "BLAKE2B512",
                    [o.BLAKE2S128]: "BLAKE2S128",
                    [o.BLAKE2S160]: "BLAKE2S160",
                    [o.BLAKE2S224]: "BLAKE2S224",
                    [o.BLAKE2S256]: "BLAKE2S256",
                    [o.GOST94]: "GOST94",
                    [o.MD2]: "MD2",
                    [o.MD4]: "MD4",
                    [o.MD5]: "MD5",
                    [o.MDC2]: "MDC2",
                    [o.RIPEMD160]: "RIPEMD160",
                    [o.RIPEMD160_ALT]: "RIPEMD160",
                    [o.SHA1]: "SHA1",
                    [o.SHA224]: "SHA224",
                    [o.SHA256]: "SHA256",
                    [o.SHA384]: "SHA384",
                    [o.SHA512]: "SHA512",
                    [o.SHA3_224]: "SHA3_224",
                    [o.SHA3_256]: "SHA3_256",
                    [o.SHA3_384]: "SHA3_384",
                    [o.SHA3_512]: "SHA3_512",
                    [o.SHAKE128]: "SHAKE128",
                    [o.SHAKE256]: "SHAKE256",
                    [o.SM3]: "SM3",
                    [o.WHIRLPOOL]: "WHIRLPOOL"
                },
                l = {
                    P192: "1.2.840.10045.3.1.1",
                    P224: "1.3.132.0.33",
                    P256: "1.2.840.10045.3.1.7",
                    P384: "1.3.132.0.34",
                    P521: "1.3.132.0.35",
                    SECP192K1: "1.3.132.0.31",
                    SECP224K1: "1.3.132.0.32",
                    SECP256K1: "1.3.132.0.10",
                    BRAINPOOLP256: "1.3.36.3.3.2.8.1.1.7",
                    BRAINPOOLP384: "1.3.36.3.3.2.8.1.1.11",
                    BRAINPOOLP512: "1.3.36.3.3.2.8.1.1.13",
                    X25519: "1.3.101.110",
                    X25519_ALT: "1.3.6.1.4.1.11591.7",
                    ED25519: "1.3.101.112",
                    X448: "1.3.101.111",
                    X448_ALT: "1.3.6.1.4.1.11591.8",
                    ED448: "1.3.101.113",
                    ED1174: "1.3.6.1.4.1.9509.5.2.6",
                    ED41417: "1.3.6.1.4.1.9509.5.2.5",
                    M221: "1.3.6.1.4.1.9509.5.1.1",
                    E222: "1.3.6.1.4.1.9509.5.2.1",
                    M383: "1.3.6.1.4.1.9509.5.1.2",
                    E382: "1.3.6.1.4.1.9509.5.2.2",
                    M511: "1.3.6.1.4.1.9509.5.1.3",
                    E521: "1.3.6.1.4.1.9509.5.2.4"
                },
                a = {
                    [l.P192]: "P192",
                    [l.P224]: "P224",
                    [l.P256]: "P256",
                    [l.P384]: "P384",
                    [l.P521]: "P521",
                    [l.SECP192K1]: "SECP192K1",
                    [l.SECP224K1]: "SECP224K1",
                    [l.SECP256K1]: "SECP256K1",
                    [l.BRAINPOOLP256]: "BRAINPOOLP256",
                    [l.BRAINPOOLP384]: "BRAINPOOLP384",
                    [l.BRAINPOOLP512]: "BRAINPOOLP512",
                    [l.X25519]: "X25519",
                    [l.X25519_ALT]: "X25519",
                    [l.ED25519]: "ED25519",
                    [l.X448]: "X448",
                    [l.X448_ALT]: "X448",
                    [l.ED448]: "ED448",
                    [l.ED1174]: "ED1174",
                    [l.ED41417]: "ED41417",
                    [l.M221]: "M221",
                    [l.E222]: "E222",
                    [l.M383]: "M383",
                    [l.E382]: "E382",
                    [l.M511]: "M511",
                    [l.E521]: "E521"
                },
                f = {
                    DSASHA1: "1.2.840.10040.4.3",
                    RSAMD2: "1.2.840.113549.1.1.2",
                    RSAMD4: "1.2.840.113549.1.1.3",
                    RSAMD5: "1.2.840.113549.1.1.4",
                    RSASHA1: "1.2.840.113549.1.1.5",
                    RSASHA1_MS: "1.3.14.3.2.29",
                    RSAPSS: "1.2.840.113549.1.1.10",
                    RSASHA256: "1.2.840.113549.1.1.11",
                    RSASHA384: "1.2.840.113549.1.1.12",
                    RSASHA512: "1.2.840.113549.1.1.13",
                    RSASHA224: "1.2.840.113549.1.1.14",
                    MGF1: "1.2.840.113549.1.1.8",
                    RSASHA3_256: "2.16.840.1.101.3.4.2.8",
                    RSASHA3_384: "2.16.840.1.101.3.4.2.9",
                    RSASHA3_512: "2.16.840.1.101.3.4.2.10",
                    ECDSASHA1: "1.2.840.10045.4.1",
                    ECDSASHA224: "1.2.840.10045.4.3.1",
                    ECDSASHA256: "1.2.840.10045.4.3.2",
                    ECDSASHA384: "1.2.840.10045.4.3.3",
                    ECDSASHA512: "1.2.840.10045.4.3.4",
                    EDDSA: "1.3.6.1.4.1.11591.4.12.2"
                },
                c = {
                    [f.DSASHA1]: "DSASHA1",
                    [f.RSAMD2]: "RSAMD2",
                    [f.RSAMD4]: "RSAMD4",
                    [f.RSAMD5]: "RSAMD5",
                    [f.RSASHA1]: "RSASHA1",
                    [f.RSASHA1_MS]: "RSASHA1",
                    [f.RSAPSS]: "RSAPSS",
                    [f.RSASHA256]: "RSASHA256",
                    [f.RSASHA384]: "RSASHA384",
                    [f.RSASHA512]: "RSASHA512",
                    [f.MGF1]: "MGF1",
                    [f.RSASHA3_256]: "RSASHA3_256",
                    [f.RSASHA3_384]: "RSASHA3_384",
                    [f.RSASHA3_512]: "RSASHA3_512",
                    [f.ECDSASHA1]: "ECDSASHA1",
                    [f.ECDSASHA224]: "ECDSASHA224",
                    [f.ECDSASHA384]: "ECDSASHA384",
                    [f.ECDSASHA512]: "ECDSASHA512",
                    [f.EDDSA]: "EDDSA"
                },
                d = {
                    [f.DSASHA1]: o.SHA1,
                    [f.RSAMD2]: o.MD2,
                    [f.RSAMD4]: o.MD4,
                    [f.RSAMD5]: o.MD5,
                    [f.RSASHA1]: o.SHA1,
                    [f.RSASHA1_MS]: o.SHA1,
                    [f.RSAPSS]: null,
                    [f.RSASHA256]: o.SHA256,
                    [f.RSASHA384]: o.SHA384,
                    [f.RSASHA512]: o.SHA512,
                    [f.MGF1]: null,
                    [f.RSASHA3_256]: o.SHA3_256,
                    [f.RSASHA3_384]: o.SHA3_384,
                    [f.RSASHA3_512]: o.SHA3_512,
                    [f.ECDSASHA1]: o.SHA1,
                    [f.ECDSASHA224]: o.SHA224,
                    [f.ECDSASHA384]: o.SHA384,
                    [f.ECDSASHA512]: o.SHA512,
                    [f.EDDSA]: null
                };
            i.NONE = "0.0", i.attrs = r, i.attrsByVal = n, i.keyAlgs = s, i.keyAlgsByVal = h, i.hashes = o, i.hashesByVal = u, i.curves = l, i.curvesByVal = a, i.sigAlgs = f, i.sigAlgsByVal = c, i.sigToHash = d
        },
        9991: function(t, i, e) {
            "use strict";
            const r = e(5466),
                n = {
                    "AES-128": [16, 16],
                    "AES-192": [16, 24],
                    "AES-256": [16, 32],
                    BF: [8, 16],
                    "CAMELLIA-128": [16, 16],
                    "CAMELLIA-192": [16, 24],
                    "CAMELLIA-256": [16, 32],
                    CAST5: [8, 16],
                    DES: [8, 8],
                    "DES-EDE": [8, 16],
                    "DES-EDE3": [8, 24],
                    IDEA: [8, 16],
                    "RC2-64": [8, 8],
                    "TWOFISH-128": [16, 16],
                    "TWOFISH-192": [16, 24],
                    "TWOFISH-256": [16, 32]
                };
            class CipherInfo {
                constructor(t, i, e, r, n, s) {
                    this.name = t, this.algorithm = i, this.mode = e, this.blockSize = r, this.keySize = n, this.ivSize = s
                }
            }

            function s(t) {
                r("string" == typeof t);
                const i = t.length;
                if (i < 1 || i > 64) throw new Error("Invalid cipher name.");
                let e = null,
                    s = null,
                    h = null;
                switch (i >= 6 && (e = t.substring(i - 4)), e) {
                    case "-ECB":
                        s = "ECB";
                        break;
                    case "-CBC":
                        s = "CBC";
                        break;
                    case "-CTR":
                        s = "CTR";
                        break;
                    case "-CFB":
                        s = "CFB";
                        break;
                    case "-OFB":
                        s = "OFB";
                        break;
                    case "-GCM":
                        s = "GCM";
                        break;
                    default:
                        e = null
                }
                if (h = e ? t.substring(0, i - 4) : t, !n.hasOwnProperty(h)) throw new Error(`Unknown cipher: ${t}.`);
                if ("GCM" === s) {
                    const t = n[h][0];
                    if (16 !== t) throw new Error(`Unsupported mode: ${s}-${8*t}.`)
                }
                return [t, h, s]
            }

            function h(t) {
                const [i, e, r] = s(t), [h, o] = n[e];
                let u = h;
                return r && "ECB" !== r || (u = 0), new CipherInfo(i, e, r, h, o, u)
            }
            i.info = h, i.get = function(t) {
                const i = h(t);
                if (!i.mode) throw new Error("No mode provided for cipher name.");
                return i
            }, i.has = function(t) {
                r("string" == typeof t);
                try {
                    return null != s(t)[2]
                } catch (t) {
                    return !1
                }
            }
        }
    }
]);