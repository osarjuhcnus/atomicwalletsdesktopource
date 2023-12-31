/*! For license information please see vendors.ffa48ac00e568f39f85a.js.LICENSE.txt */
(window.webpackJsonp = window.webpackJsonp || []).push([
    [288], {
        10004: function(t, e, r) {
            "use strict";
            const i = r(5466),
                n = r(5798),
                s = r(5636),
                {
                    countLeft: c,
                    compareLeft: o
                } = r(5658),
                {
                    probablyPrime: h
                } = r(6662),
                a = r(10005),
                u = r(5637),
                l = r(7489),
                f = r(5954),
                d = r(5866),
                {
                    DEFAULT_BITS: p,
                    DEFAULT_GEN: y,
                    MIN_BITS: v,
                    MAX_BITS: w,
                    MIN_GEN: g,
                    MAX_GEN: m,
                    DHKey: b,
                    DHParams: k,
                    DHPublicKey: S,
                    DHPrivateKey: B
                } = a;

            function K(t, e) {
                if (null == t && (t = p), null == e && (e = y), i(t >>> 0 === t), i(e >>> 0 === e), t < v || t > w) throw new RangeError(`"bits" ranges from ${v} to ${w}.`);
                if (e < g || e > m) throw new RangeError(`"gen" ranges from ${g} to ${m}.`);
                const r = new n(e);
                let c;
                for (; c = n.randomBits(s, t), c.setn(t - 1, 1), c.iuorn(1), !h(c, 64););
                return new k(c.encode(), r.encode())
            }
            async function A(t, e) {
                return K(t, e)
            }

            function E(t) {
                if (i(t instanceof k), !T(t)) return !1;
                const e = n.decode(t.p);
                return h(e, 64)
            }

            function C(t) {
                if (i(t instanceof k), !T(t)) throw new Error("Invalid DH parameters.");
                const e = n.decode(t.p),
                    r = n.decode(t.g),
                    c = n.random(s, 1, e),
                    o = r.powm(c, e),
                    h = new B;
                return h.setParams(t), h.x = c.encode(), h.y = o.encode(), h
            }

            function x(t) {
                if (i(t instanceof B), ! function(t) {
                        i(t instanceof B);
                        const e = c(t.p),
                            r = c(t.g),
                            n = c(t.y),
                            s = c(t.x);
                        return !(e < v || e > w) && (!(r < 2 || r > e) && (0 != (1 & t.p[t.p.length - 1]) && (!(n > e) && (!(0 === s || s + 7 >>> 3 > e + 7 >>> 3) && (!(o(t.g, t.p) >= 0) && !(o(t.y, t.p) >= 0))))))
                    }(t)) throw new Error("Invalid DH private key.");
                if (! function(t) {
                        return i(t instanceof B), 0 === c(t.y)
                    }(t)) return t;
                const e = n.decode(t.p),
                    r = n.decode(t.g),
                    s = n.decode(t.x),
                    h = r.powm(s, e);
                return t.y = h.encode(), t
            }

            function I(t) {
                if (i(t instanceof B), !R(t)) throw new Error("Invalid DH private key.");
                return new f.PrivateKeyInfo(0, u.objects.keyAlgs.DH, new l.DHParams(t.p, t.g), new u.Unsigned(t.x).encode()).encode()
            }

            function U(t) {
                const e = f.PrivateKeyInfo.decode(t),
                    {
                        algorithm: r,
                        parameters: n
                    } = e.algorithm;
                i(0 === e.version.toNumber()), i(r.toString() === u.objects.keyAlgs.DH), i(n.node.type === u.types.SEQUENCE);
                const {
                    p: s,
                    g: c
                } = l.DHParams.decodeBody(n.node.value), o = u.Unsigned.decode(e.privateKey.value), h = new B(s.value, c.value, null, o.value);
                return x(h), h
            }

            function D(t) {
                return i(t instanceof b), !!E(t) && F(t)
            }

            function z(t) {
                if (i(t instanceof b), !F(t)) throw new Error("Invalid DH public key.");
                return new d.SubjectPublicKeyInfo(u.objects.keyAlgs.DH, new l.DHParams(t.p, t.g), new u.Unsigned(t.y).encode()).encode()
            }

            function P(t) {
                const e = d.SubjectPublicKeyInfo.decode(t),
                    {
                        algorithm: r,
                        parameters: n
                    } = e.algorithm;
                i(r.toString() === u.objects.keyAlgs.DH), i(n.node.type === u.types.SEQUENCE);
                const {
                    p: s,
                    g: c
                } = l.DHParams.decodeBody(n.node.value), o = u.Unsigned.decode(e.publicKey.rightAlign());
                return new S(s.value, c.value, o.value)
            }

            function _(t, e) {
                if (i(t instanceof b), i(e instanceof B), !F(t)) throw new Error("Invalid DH public key.");
                if (!R(e)) throw new Error("Invalid DH private key.");
                const r = n.decode(t.p),
                    s = n.decode(t.g),
                    c = n.decode(e.p),
                    o = n.decode(e.g);
                if (!r.eq(c) || !s.eq(o)) throw new Error("Incompatible DH parameters.");
                const h = n.decode(e.x),
                    a = n.decode(t.y).powm(h, c, c.bitLength());
                if (a.isZero()) throw new Error("Invalid secret.");
                return a.encode("be", c.byteLength())
            }

            function T(t) {
                i(t instanceof k);
                const e = c(t.p),
                    r = c(t.g);
                return !(e < v || e > w) && (!(r < 2 || r > e) && (0 != (1 & t.p[t.p.length - 1]) && !(o(t.g, t.p) >= 0)))
            }

            function F(t) {
                if (i(t instanceof b), !T(t)) return !1;
                const e = c(t.p),
                    r = c(t.y);
                return !(0 === r || r > e) && !(o(t.y, t.p) >= 0)
            }

            function R(t) {
                if (i(t instanceof B), !F(t)) return !1;
                const e = c(t.p),
                    r = c(t.x);
                return !(0 === r || r + 7 >>> 3 > e + 7 >>> 3)
            }
            e.native = 0, e.DHParams = k, e.DHKey = b, e.DHPublicKey = S, e.DHPrivateKey = B, e.paramsGenerate = K, e.paramsGenerateAsync = A, e.paramsVerify = E, e.paramsExport = function(t) {
                if (i(t instanceof k), !T(t)) throw new Error("Invalid DH parameters.");
                return new l.DHParams(t.p, t.g).encode()
            }, e.paramsImport = function(t) {
                const e = l.DHParams.decode(t);
                return new k(e.p.value, e.g.value)
            }, e.paramsExportJWK = function(t) {
                return i(t instanceof k), t.toParams().toJSON()
            }, e.paramsImportJWK = function(t) {
                return k.fromJSON(t)
            }, e.privateKeyCreate = C, e.privateKeyGenerate = function(t, e) {
                return C(K(t, e))
            }, e.privateKeyGenerateAsync = async function(t) {
                return C(await A(t))
            }, e.privateKeyCompute = x, e.privateKeyVerify = function(t) {
                if (i(t instanceof B), !R(t)) return !1;
                if (!D(t)) return !1;
                const e = n.decode(t.p),
                    r = n.decode(t.g),
                    s = n.decode(t.x),
                    c = r.powm(s, e);
                return n.decode(t.y).eq(c)
            }, e.privateKeyExport = function(t) {
                return I(t)
            }, e.privateKeyImport = function(t) {
                return U(t)
            }, e.privateKeyExportPKCS8 = I, e.privateKeyImportPKCS8 = U, e.privateKeyExportJWK = function(t) {
                return i(t instanceof B), t.toJSON()
            }, e.privateKeyImportJWK = function(t) {
                const e = B.fromJSON(t);
                return x(e), e
            }, e.publicKeyCreate = function(t) {
                i(t instanceof B);
                const e = new S;
                return e.p = t.p, e.g = t.g, e.y = t.y, e
            }, e.publicKeyVerify = D, e.publicKeyExport = function(t) {
                return z(t)
            }, e.publicKeyImport = function(t) {
                return P(t)
            }, e.publicKeyExportSPKI = z, e.publicKeyImportSPKI = P, e.publicKeyExportJWK = function(t) {
                return i(t instanceof b), t.toPublic().toJSON()
            }, e.publicKeyImportJWK = function(t) {
                return S.fromJSON(t)
            }, e.derive = _, e.exchange = function(t, e) {
                return i(e instanceof B), _(new S(e.p, e.g, t), e)
            }
        },
        10006: function(t, e, r) {
            "use strict";
            const i = r(5466),
                n = r(5798),
                s = r(5636),
                c = r(6663),
                o = r(5799),
                {
                    countLeft: h,
                    compareLeft: a
                } = r(5658),
                {
                    probablyPrime: u
                } = r(6662),
                l = r(10007),
                f = r(7491),
                d = r(5637),
                p = r(6664),
                y = r(5954),
                v = r(7492),
                w = r(5866),
                {
                    DEFAULT_BITS: g,
                    MIN_BITS: m,
                    MAX_BITS: b,
                    DSAKey: k,
                    DSAParams: S,
                    DSAPublicKey: B,
                    DSAPrivateKey: K
                } = l;

            function A(t) {
                if (null == t && (t = g), i(t >>> 0 === t), t < m || t > b) throw new RangeError(`"bits" ranges from ${m} to ${b}.`);
                return function(t, e) {
                    if (i(t >>> 0 === t), i(e >>> 0 === e), !(1024 === t && 160 === e || 2048 === t && 224 === e || 2048 === t && 256 === e || 3072 === t && 256 === e)) throw new Error("Invalid parameter sizes.");
                    if (t < m || t > b || 0 != (7 & e)) throw new Error("Invalid parameter sizes.");
                    const r = Buffer.alloc(e >>> 3),
                        c = Buffer.alloc(t + 7 >>> 3);
                    let o = null,
                        h = null;
                    t: for (;;)
                        if (s.randomFill(r, 0, r.length), r[0] |= 128, r[r.length - 1] |= 1, o = n.decode(r), u(o, 64))
                            for (let e = 0; e < 4 * t; e++) {
                                s.randomFill(c, 0, c.length), c[0] |= 128, c[c.length - 1] |= 1, h = n.decode(c);
                                const e = h.mod(o);
                                e.isubn(1), h.isub(e);
                                const r = h.bitLength();
                                if (!(r < t || r > b) && u(h, 64)) break t
                            }
                    const a = new n(2),
                        l = h.subn(1).div(o);
                    for (;;) {
                        const t = a.powm(l, h);
                        if (0 === t.cmpn(1)) {
                            a.iaddn(1);
                            continue
                        }
                        const e = new S;
                        return e.p = h.encode(), e.q = o.encode(), e.g = t.encode(), e
                    }
                }(t, t < 2048 ? 160 : 256)
            }
            async function E(t) {
                return A(t)
            }

            function C(t) {
                if (i(t instanceof S), !_(t)) return !1;
                const e = n.decode(t.p),
                    r = n.decode(t.q);
                return 0 === n.decode(t.g).powm(r, e).cmpn(1)
            }

            function x(t) {
                if (i(t instanceof S), !_(t)) throw new Error("Invalid DSA parameters.");
                const e = n.decode(t.q),
                    r = n.decode(t.p),
                    c = n.decode(t.g),
                    o = n.random(s, 1, e),
                    h = c.powm(o, r),
                    a = new K;
                return a.setParams(t), a.x = o.encode(), a.y = h.encode(), a
            }

            function I(t) {
                if (i(t instanceof K), ! function(t) {
                        i(t instanceof K);
                        const e = h(t.p),
                            r = h(t.q),
                            n = h(t.g),
                            s = h(t.y),
                            c = h(t.x);
                        return !(e < m || e > b) && ((160 === r || 224 === r || 256 === r) && (!(n < 2 || n > e) && (0 != (1 & t.p[t.p.length - 1]) && (0 != (1 & t.q[t.q.length - 1]) && (!(s > e) && (!(0 === c || c > r) && (!(a(t.g, t.p) >= 0) && (!(a(t.y, t.p) >= 0) && !(a(t.x, t.q) >= 0)))))))))
                    }(t)) throw new Error("Invalid DSA private key.");
                if (! function(t) {
                        return i(t instanceof K), 0 === h(t.y)
                    }(t)) return t;
                const e = n.decode(t.p),
                    r = n.decode(t.g),
                    s = n.decode(t.x),
                    c = r.powm(s, e);
                return t.y = c.encode(), t
            }

            function U(t) {
                if (i(t instanceof k), !C(t)) return !1;
                if (!T(t)) return !1;
                const e = n.decode(t.p),
                    r = n.decode(t.q);
                return 0 === n.decode(t.y).powm(r, e).cmpn(1)
            }

            function D(t, e) {
                if (i(Buffer.isBuffer(t)), i(e instanceof K), !F(e)) throw new Error("Invalid DSA private key.");
                const r = n.decode(e.p),
                    s = n.decode(e.q),
                    h = n.decode(e.g),
                    a = n.decode(e.x),
                    u = s.byteLength(),
                    l = N(t, s),
                    d = a.encode("be", u),
                    p = l.encode("be", u),
                    y = new c(o, d, p);
                for (;;) {
                    const t = R(y.generate(u), s);
                    if (t.isZero() || t.cmp(s) >= 0) continue;
                    const e = G(h, t, r, s).imod(s);
                    if (e.isZero()) continue;
                    const i = t.fermat(s),
                        [n, c] = L(s),
                        o = a.mul(n).imod(s),
                        d = l.mul(n).imod(s),
                        p = e.mul(o).imod(s).iadd(d).imod(s).imul(i).imod(s);
                    if (p.imul(c).imod(s), p.isZero()) continue;
                    const v = new f;
                    return v.r = e.encode("be", u), v.s = p.encode("be", u), v
                }
            }

            function z(t, e, r) {
                i(Buffer.isBuffer(t)), i(e instanceof f), i(r instanceof k);
                const s = r.size();
                if (e.r.length !== s) return !1;
                if (e.s.length !== s) return !1;
                if (!T(r)) return !1;
                const c = n.decode(r.p),
                    o = n.decode(r.q),
                    h = n.decode(r.g),
                    a = n.decode(r.y),
                    u = n.decode(e.r),
                    l = n.decode(e.s);
                if (u.isZero() || u.cmp(o) >= 0) return !1;
                if (l.isZero() || l.cmp(o) >= 0) return !1;
                const d = N(t, o),
                    p = l.invert(o),
                    y = d.imul(p).imod(o),
                    v = u.mul(p).imod(o);
                return 0 === h.powm(y, c).imul(a.powm(v, c)).imod(c).imod(o).cmp(u)
            }

            function P(t, e) {
                if (i(t instanceof k), i(e instanceof K), !T(t)) throw new Error("Invalid DSA public key.");
                if (!F(e)) throw new Error("Invalid DSA private key.");
                const r = n.decode(t.p),
                    s = n.decode(t.q),
                    c = n.decode(t.g),
                    o = n.decode(e.p),
                    h = n.decode(e.q),
                    a = n.decode(e.g);
                if (!r.eq(o) || !s.eq(h) || !c.eq(a)) throw new Error("Incompatible DSA parameters.");
                const u = n.decode(e.x),
                    l = n.decode(t.y);
                if (0 !== l.powm(h, o).cmpn(1)) throw new Error("Invalid DSA public key.");
                const f = function(t, e, r, s) {
                    return i(s instanceof n), G(t, e, r, s, s.bitLength())
                }(l, u, o, h);
                if (f.isZero()) throw new Error("Invalid secret.");
                return f.encode("be", o.byteLength())
            }

            function _(t) {
                i(t instanceof S);
                const e = h(t.p),
                    r = h(t.q),
                    n = h(t.g);
                return !(e < m || e > b) && ((160 === r || 224 === r || 256 === r) && (!(n < 2 || n > e) && (0 != (1 & t.p[t.p.length - 1]) && (0 != (1 & t.q[t.q.length - 1]) && !(a(t.g, t.p) >= 0)))))
            }

            function T(t) {
                if (i(t instanceof k), !_(t)) return !1;
                const e = h(t.p),
                    r = h(t.y);
                return !(0 === r || r > e) && !(a(t.y, t.p) >= 0)
            }

            function F(t) {
                if (i(t instanceof K), !T(t)) return !1;
                const e = h(t.q),
                    r = h(t.x);
                return !(0 === r || r > e) && !(a(t.x, t.q) >= 0)
            }

            function R(t, e) {
                i(Buffer.isBuffer(t)), i(e instanceof n);
                const r = e.bitLength();
                i(0 == (7 & r));
                const s = r >>> 3;
                return t.length > s && (t = t.slice(0, s)), n.decode(t)
            }

            function N(t, e) {
                return R(t, e).imod(e)
            }

            function G(t, e, r, c, o) {
                i(t instanceof n), i(e instanceof n), i(r instanceof n), i(c instanceof n);
                const h = n.random(s, 1, c),
                    a = t.powm(h.neg().imod(c), r, 0, o),
                    u = e.add(h).imod(c);
                return t.powm(u, r, 0, o).imul(a).imod(r)
            }

            function L(t) {
                i(t instanceof n);
                const e = n.random(s, 1, t),
                    r = e.fermat(t);
                return [e, r]
            }
            e.native = 0, e.DSAParams = S, e.DSAKey = k, e.DSAPublicKey = B, e.DSAPrivateKey = K, e.paramsGenerate = A, e.paramsGenerateAsync = E, e.paramsVerify = C, e.paramsExport = function(t) {
                if (i(t instanceof S), !_(t)) throw new Error("Invalid DSA parameters.");
                return new p.DSAParams(t.p, t.q, t.g).encode()
            }, e.paramsImport = function(t) {
                const e = p.DSAParams.decode(t);
                return new S(e.p.value, e.q.value, e.g.value)
            }, e.paramsExportJWK = function(t) {
                return i(t instanceof S), t.toParams().toJSON()
            }, e.paramsImportJWK = function(t) {
                return S.fromJSON(t)
            }, e.privateKeyCreate = x, e.privateKeyGenerate = function(t) {
                return x(A(t))
            }, e.privateKeyGenerateAsync = async function(t) {
                return x(await E(t))
            }, e.privateKeyCompute = I, e.privateKeyVerify = function(t) {
                if (i(t instanceof K), !F(t)) return !1;
                if (!U(t)) return !1;
                const e = n.decode(t.p),
                    r = n.decode(t.g),
                    s = n.decode(t.x),
                    c = r.powm(s, e);
                return n.decode(t.y).eq(c)
            }, e.privateKeyExport = function(t) {
                if (i(t instanceof K), !F(t)) throw new Error("Invalid DSA private key.");
                return new p.DSAPrivateKey(0, t.p, t.q, t.g, t.y, t.x).encode()
            }, e.privateKeyImport = function(t) {
                const e = p.DSAPrivateKey.decode(t);
                return i(0 === e.version.toNumber()), new K(e.p.value, e.q.value, e.g.value, e.y.value, e.x.value)
            }, e.privateKeyExportPKCS8 = function(t) {
                if (i(t instanceof K), !F(t)) throw new Error("Invalid DSA private key.");
                return new y.PrivateKeyInfo(0, d.objects.keyAlgs.DSA, new v.DSAParams(t.p, t.q, t.g), new d.Unsigned(t.x).encode()).encode()
            }, e.privateKeyImportPKCS8 = function(t) {
                const e = y.PrivateKeyInfo.decode(t),
                    {
                        algorithm: r,
                        parameters: n
                    } = e.algorithm;
                i(0 === e.version.toNumber()), i(r.toString() === d.objects.keyAlgs.DSA), i(n.node.type === d.types.SEQUENCE);
                const {
                    p: s,
                    q: c,
                    g: o
                } = v.DSAParams.decodeBody(n.node.value), h = d.Unsigned.decode(e.privateKey.value), a = new K(s.value, c.value, o.value, null, h.value);
                return I(a), a
            }, e.privateKeyExportJWK = function(t) {
                return i(t instanceof K), t.toJSON()
            }, e.privateKeyImportJWK = function(t) {
                const e = K.fromJSON(t);
                return I(e), e
            }, e.publicKeyCreate = function(t) {
                i(t instanceof K);
                const e = new B;
                return e.p = t.p, e.q = t.q, e.g = t.g, e.y = t.y, e
            }, e.publicKeyVerify = U, e.publicKeyExport = function(t) {
                if (i(t instanceof k), !T(t)) throw new Error("Invalid DSA public key.");
                return new p.DSAPublicKey(t.y, t.p, t.q, t.g).encode()
            }, e.publicKeyImport = function(t) {
                const e = p.DSAPublicKey.decode(t);
                return new B(e.p.value, e.q.value, e.g.value, e.y.value)
            }, e.publicKeyExportSPKI = function(t) {
                if (i(t instanceof k), !T(t)) throw new Error("Invalid DSA public key.");
                return new w.SubjectPublicKeyInfo(d.objects.keyAlgs.DSA, new v.DSAParams(t.p, t.q, t.g), new d.Unsigned(t.y).encode()).encode()
            }, e.publicKeyImportSPKI = function(t) {
                const e = w.SubjectPublicKeyInfo.decode(t),
                    {
                        algorithm: r,
                        parameters: n
                    } = e.algorithm;
                i(r.toString() === d.objects.keyAlgs.DSA), i(n.node.type === d.types.SEQUENCE);
                const {
                    p: s,
                    q: c,
                    g: o
                } = v.DSAParams.decodeBody(n.node.value), h = d.Unsigned.decode(e.publicKey.rightAlign());
                return new B(s.value, c.value, o.value, h.value)
            }, e.publicKeyExportJWK = function(t) {
                return i(t instanceof k), t.toPublic().toJSON()
            }, e.publicKeyImportJWK = function(t) {
                return B.fromJSON(t)
            }, e.signatureExport = function(t, e) {
                return null == e && (i(Buffer.isBuffer(t)), i(0 == (1 & t.length)), e = t.length >>> 1), f.toDER(t, e)
            }, e.signatureImport = function(t, e) {
                return f.toRS(t, e)
            }, e.sign = function(t, e) {
                return D(t, e).encode(e.size())
            }, e.signDER = function(t, e) {
                return D(t, e).toDER(e.size())
            }, e.verify = function(t, e, r) {
                if (i(Buffer.isBuffer(t)), i(Buffer.isBuffer(e)), i(r instanceof k), e.length !== 2 * r.size()) return !1;
                const n = f.decode(e, r.size());
                try {
                    return z(t, n, r)
                } catch (t) {
                    return !1
                }
            }, e.verifyDER = function(t, e, r) {
                let n;
                i(Buffer.isBuffer(t)), i(Buffer.isBuffer(e)), i(r instanceof k);
                try {
                    n = f.fromDER(e, r.size())
                } catch (t) {
                    return !1
                }
                return z(t, n, r)
            }, e.derive = P, e.exchange = function(t, e) {
                return i(e instanceof K), P(new B(e.p, e.q, e.g, t), e)
            }
        },
        10011: function(t, e, r) {
            "use strict";
            const i = r(7481),
                n = r(7495);
            t.exports = new i("ED448", "X448", n)
        },
        10020: function(t, e, r) {
            "use strict";
            const i = r(5466),
                n = Buffer.allocUnsafe(105),
                s = "qpzry9x8gf2tvdw0s3jn54khce6mua7l",
                c = [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 15, -1, 10, 17, 21, 20, 26, 30, 7, 5, -1, -1, -1, -1, -1, -1, -1, 29, -1, 24, 13, 25, 9, 8, 23, -1, 18, 22, 31, 27, 19, -1, 1, 0, 3, 16, 11, 28, 12, 14, 6, 4, 2, -1, -1, -1, -1, -1, -1, 29, -1, 24, 13, 25, 9, 8, 23, -1, 18, 22, 31, 27, 19, -1, 1, 0, 3, 16, 11, 28, 12, 14, 6, 4, 2, -1, -1, -1, -1, -1],
                o = [7, 4294967295],
                h = [152, 4072443489, 121, 3077413346, 243, 1046459332, 174, 783016616, 30, 1329849456];

            function a(t, e) {
                const r = t,
                    i = r[0] >>> 3;
                r[0] &= o[0], r[1] &= o[1], r[0] <<= 5, r[0] |= r[1] >>> 27, r[1] <<= 5;
                for (let t = 0; t < 5; t++) i >>> t & 1 && (r[0] ^= h[2 * t + 0], r[1] ^= h[2 * t + 1]);
                return r[1] ^= e, r
            }

            function u(t, e) {
                i("string" == typeof t), i(Buffer.isBuffer(e));
                const r = [0, 1];
                let n = !1,
                    c = !1,
                    o = "";
                for (let e = 0; e < t.length; e++) {
                    let i = t.charCodeAt(e);
                    if (65280 & i || i >>> 5 == 0) throw new Error("Invalid cash32 character.");
                    if (i >= 97 && i <= 122) c = !0;
                    else if (i >= 65 && i <= 90) n = !0, i = i - 65 + 97;
                    else if (i >= 48 && i <= 57) throw new Error("Invalid cash32 prefix.");
                    a(r, 31 & i), o += String.fromCharCode(i)
                }
                if (c && n) throw new Error("Invalid cash32 prefix.");
                a(r, 0), o += ":";
                for (let t = 0; t < e.length; t++) {
                    const i = e[t];
                    if (i >>> 5 != 0) throw new Error("Invalid cash32 value.");
                    a(r, i), o += s[i]
                }
                for (let t = 0; t < 8; t++) a(r, 0);
                r[1] ^= 1, o += s[r[0] >>> 3 & 31];
                for (let t = 1; t < 7; t++) {
                    const e = 5 * (7 - t),
                        i = r[1] >>> e | r[0] << 32 - e;
                    o += s[31 & i]
                }
                return o += s[31 & r[1]], o
            }

            function l(t, e) {
                if (i("string" == typeof t), i("string" == typeof e), t.length < 8 || t.length > 196) throw new Error("Invalid cash32 data length.");
                let r = !1,
                    n = !1,
                    s = !1,
                    o = 0;
                for (let e = 0; e < t.length; e++) {
                    const i = t.charCodeAt(e);
                    if (i >= 97 && i <= 122) r = !0;
                    else if (i >= 65 && i <= 90) n = !0;
                    else if (i >= 48 && i <= 57) s = !0;
                    else {
                        if (58 !== i) throw new Error("Invalid cash32 character.");
                        if (s || 0 === e || e > 83) throw new Error("Invalid cash32 prefix.");
                        if (0 !== o) throw new Error("Invalid cash32 separators.");
                        o = e
                    }
                }
                if (n && r) throw new Error("Invalid cash32 casing.");
                const h = [0, 1];
                let u;
                0 === o ? u = e.toLowerCase() : (u = t.substring(0, o).toLowerCase(), o += 1);
                for (let t = 0; t < u.length; t++) {
                    a(h, 31 & (32 | u.charCodeAt(t)))
                }
                a(h, 0);
                const l = t.length - o;
                if (l <= 8 || l > 112) throw new Error("Invalid cash32 data length.");
                const f = Buffer.allocUnsafe(l);
                for (let e = o; e < t.length; e++) {
                    const r = t.charCodeAt(e),
                        i = 65408 & r ? -1 : c[r];
                    if (-1 === i) throw new Error("Invalid cash32 character.");
                    a(h, i), e + 8 < t.length && (f[e - o] = i)
                }
                if (!(0 === h[0] && 1 === h[1] && u === e)) throw new Error("Invalid cash32 checksum.");
                return [u, f.slice(0, -8)]
            }

            function f(t, e, r, n, s, c, o) {
                i(Buffer.isBuffer(t)), i(e >>> 0 === e), i(Buffer.isBuffer(r)), i(n >>> 0 === n), i((255 & s) === s), i((255 & c) === c), i("boolean" == typeof o), i(0 !== s), i(0 !== c);
                const h = (1 << c) - 1;
                let a = 0,
                    u = 0;
                for (; e < t.length; e++) {
                    const i = t[e];
                    if (i >>> s != 0) throw new Error("Invalid bits.");
                    for (a = a << s | i, u += s; u >= c;) u -= c, r[n++] = a >>> u & h
                }
                if (o) u && (r[n++] = a << c - u & h);
                else if (u >= s || a << c - u & h) throw new Error("Invalid bits.");
                return i(n <= r.length), r.slice(0, n)
            }

            function d(t, e = "bitcoincash") {
                const [r, i] = l(t, e), n = 5 * i.length & 7;
                if (n >= 5) throw new Error("Invalid padding in data.");
                if (i[i.length - 1] & (1 << n) - 1) throw new Error("Non zero padding.");
                const s = f(i, 0, i, 0, 5, 8, !1),
                    c = s[0] >>> 3 & 31,
                    o = s.slice(1);
                let h = 20 + 4 * (3 & s[0]);
                if (4 & s[0] && (h *= 2), h !== o.length) throw new Error("Invalid cash32 data length.");
                return [r, c, o]
            }
            e.native = 0, e.serialize = u, e.deserialize = l, e.is = function(t, e) {
                i("string" == typeof t), i("string" == typeof e);
                try {
                    l(t, e)
                } catch (t) {
                    return !1
                }
                return !0
            }, e.convertBits = function(t, e, r, n) {
                i(Buffer.isBuffer(t));
                const s = function(t, e, r, n) {
                    i(t >>> 0 === t), i((255 & e) === e), i((255 & r) === r), i("boolean" == typeof n), i(0 !== e), i(0 !== r);
                    let s = (t * e + (r - 1)) / r;
                    return s >>>= 0, n && (s += 1), s
                }(t.length, e, r, n);
                return f(t, 0, Buffer.allocUnsafe(s), 0, e, r, n)
            }, e.encode = function(t, e, r) {
                if (i("string" == typeof t), i((15 & e) === e, "Invalid cash32 type."), i(Buffer.isBuffer(r)), 0 === t.length || t.length > 83) throw new Error("Invalid cash32 prefix.");
                const s = function(t) {
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
                    c = Buffer.allocUnsafe(r.length + 1);
                return c[0] = e << 3 | s, r.copy(c, 1), u(t, f(c, 0, n, 0, 8, 5, !0))
            }, e.decode = d, e.test = function(t, e = "bitcoincash") {
                i("string" == typeof t), i("string" == typeof e);
                try {
                    d(t, e)
                } catch (t) {
                    return !1
                }
                return !0
            }
        },
        5955: function(t, e, r) {
            "use strict";
            const i = r(5466),
                n = r(5798),
                s = r(6658),
                c = r(7491),
                o = r(5637),
                h = r(6667),
                a = r(5954),
                u = r(5866),
                l = r(5636),
                f = r(10046),
                d = r(6663),
                {
                    curves: p
                } = r(7482);
            t.exports = class ECDSA {
                constructor(t, e, r) {
                    i("string" == typeof t), i(e), this.id = t, this.type = "short", this.hash = e, this.native = 0, this._pre = r || null, this._curve = null, this._schnorr = null
                }
                get curve() {
                    return this._curve || (this._curve = new p[this.id](this._pre), this._curve.precompute(l), this._pre = null), this._curve
                }
                get schnorr() {
                    return this._schnorr || (this._schnorr = new f(this.curve, this.hash)), this._schnorr
                }
                get size() {
                    return this.curve.fieldSize
                }
                get bits() {
                    return this.curve.fieldBits
                }
                privateKeyGenerate() {
                    const t = this.curve.randomScalar(l);
                    return this.curve.encodeScalar(t)
                }
                privateKeyVerify(t) {
                    i(Buffer.isBuffer(t));
                    let e = null;
                    try {
                        e = this.curve.decodeScalar(t)
                    } catch (t) {
                        return !1
                    }
                    return !(e.isZero() || e.cmp(this.curve.n) >= 0)
                }
                privateKeyExport(t, e) {
                    const r = this.publicKeyCreate(t, e);
                    return new h.ECPrivateKey(1, t, this.id, r).encode()
                }
                privateKeyImport(t) {
                    const e = h.ECPrivateKey.decode(t),
                        r = e.namedCurveOID.toString();
                    i(1 === e.version.toNumber()), i(r === o.objects.curves[this.id] || r === o.objects.NONE);
                    const {
                        value: s
                    } = e.privateKey;
                    if (s.length > this.curve.scalarSize) throw new Error("Invalid private key.");
                    const c = n.decode(s, this.curve.endian);
                    if (c.isZero() || c.cmp(this.curve.n) >= 0) throw new Error("Invalid private key.");
                    return this.curve.encodeScalar(c)
                }
                privateKeyExportPKCS8(t, e) {
                    const r = this.publicKeyCreate(t, e),
                        i = o.objects.NONE;
                    return new a.PrivateKeyInfo(0, o.objects.keyAlgs.ECDSA, new o.OID(o.objects.curves[this.id]), new h.ECPrivateKey(1, t, i, r).encode()).encode()
                }
                privateKeyImportPKCS8(t) {
                    const e = a.PrivateKeyInfo.decode(t),
                        {
                            algorithm: r,
                            parameters: n
                        } = e.algorithm;
                    return i(0 === e.version.toNumber()), i(r.toString() === o.objects.keyAlgs.ECDSA), i(n.node.type === o.types.OID), i(n.node.toString() === o.objects.curves[this.id]), this.privateKeyImport(e.privateKey.value)
                }
                privateKeyExportJWK(t) {
                    return s.privateKeyExportJWK(this, t)
                }
                privateKeyImportJWK(t) {
                    return s.privateKeyImportJWK(this, t)
                }
                privateKeyTweakAdd(t, e) {
                    const r = this.curve.decodeScalar(e);
                    if (r.cmp(this.curve.n) >= 0) throw new Error("Invalid scalar.");
                    const i = this.curve.decodeScalar(t);
                    if (i.isZero() || i.cmp(this.curve.n) >= 0) throw new Error("Invalid private key.");
                    const n = i.iadd(r).imod(this.curve.n);
                    if (n.isZero()) throw new Error("Invalid private key.");
                    return this.curve.encodeScalar(n)
                }
                privateKeyTweakMul(t, e) {
                    const r = this.curve.decodeScalar(e);
                    if (r.isZero() || r.cmp(this.curve.n) >= 0) throw new Error("Invalid scalar.");
                    const i = this.curve.decodeScalar(t);
                    if (i.isZero() || i.cmp(this.curve.n) >= 0) throw new Error("Invalid private key.");
                    const n = i.imul(r).imod(this.curve.n);
                    if (n.isZero()) throw new Error("Invalid private key.");
                    return this.curve.encodeScalar(n)
                }
                privateKeyReduce(t) {
                    i(Buffer.isBuffer(t)), t.length > this.curve.scalarSize && (t = t.slice(0, this.curve.scalarSize));
                    const e = n.decode(t, this.curve.endian).imod(this.curve.n);
                    return this.curve.encodeScalar(e)
                }
                privateKeyNegate(t) {
                    const e = this.curve.decodeScalar(t);
                    if (e.cmp(this.curve.n) >= 0) throw new Error("Invalid private key.");
                    const r = e.ineg().imod(this.curve.n);
                    return this.curve.encodeScalar(r)
                }
                privateKeyInvert(t) {
                    const e = this.curve.decodeScalar(t);
                    if (e.isZero() || e.cmp(this.curve.n) >= 0) throw new Error("Invalid private key.");
                    const r = e.invert(this.curve.n);
                    return this.curve.encodeScalar(r)
                }
                publicKeyCreate(t, e) {
                    const r = this.curve.decodeScalar(t);
                    if (r.isZero() || r.cmp(this.curve.n) >= 0) throw new Error("Invalid private key.");
                    return this.curve.g.mulBlind(r).encode(e)
                }
                publicKeyConvert(t, e) {
                    return this.curve.decodePoint(t).encode(e)
                }
                publicKeyFromUniform(t, e) {
                    const r = this.curve.decodeUniform(t);
                    return this.curve.pointFromUniform(r).encode(e)
                }
                publicKeyFromHash(t, e) {
                    return this.curve.pointFromHash(t).encode(e)
                }
                publicKeyVerify(t) {
                    i(Buffer.isBuffer(t));
                    try {
                        this.curve.decodePoint(t)
                    } catch (t) {
                        return !1
                    }
                    return !0
                }
                publicKeyExport(t) {
                    return this.publicKeyConvert(t, !1).slice(1)
                }
                publicKeyImport(t, e) {
                    i(Buffer.isBuffer(t)), i(t.length === 2 * this.curve.fieldSize);
                    const r = Buffer.allocUnsafe(1 + t.length);
                    return r[0] = 4, t.copy(r, 1), this.publicKeyConvert(r, e)
                }
                publicKeyExportSPKI(t, e) {
                    return new u.SubjectPublicKeyInfo(o.objects.keyAlgs.ECDSA, new o.OID(o.objects.curves[this.id]), this.publicKeyConvert(t, e)).encode()
                }
                publicKeyImportSPKI(t, e) {
                    const r = u.SubjectPublicKeyInfo.decode(t),
                        {
                            algorithm: n,
                            parameters: s
                        } = r.algorithm;
                    return i(n.toString() === o.objects.keyAlgs.ECDSA), i(s.node.type === o.types.OID), i(s.node.toString() === o.objects.curves[this.id]), this.publicKeyConvert(r.publicKey.rightAlign(), e)
                }
                publicKeyExportJWK(t) {
                    return s.publicKeyExportJWK(this, t)
                }
                publicKeyImportJWK(t, e) {
                    return s.publicKeyImportJWK(this, t, e)
                }
                publicKeyTweakAdd(t, e, r) {
                    const i = this.curve.decodeScalar(e);
                    if (i.cmp(this.curve.n) >= 0) throw new Error("Invalid scalar.");
                    const n = this.curve.decodePoint(t);
                    return this.curve.g.mul(i).add(n).encode(r)
                }
                publicKeyTweakMul(t, e, r) {
                    const i = this.curve.decodeScalar(e);
                    if (i.isZero() || i.cmp(this.curve.n) >= 0) throw new Error("Invalid scalar.");
                    return this.curve.decodePoint(t).mul(i).encode(r)
                }
                publicKeyAdd(t, e, r) {
                    const i = this.curve.decodePoint(t),
                        n = this.curve.decodePoint(e);
                    return i.add(n).encode(r)
                }
                publicKeyCombine(t, e) {
                    i(Array.isArray(t));
                    let r = this.curve.jpoint();
                    for (const e of t) {
                        const t = this.curve.decodePoint(e);
                        r = r.add(t)
                    }
                    return r.encode(e)
                }
                publicKeyNegate(t, e) {
                    return this.curve.decodePoint(t).neg().encode(e)
                }
                _signatureNormalize(t) {
                    const e = this.curve.decodeScalar(t.r),
                        r = this.curve.decodeScalar(t.s);
                    if (e.isZero() || e.cmp(this.curve.n) >= 0) throw new Error("Invalid R value.");
                    if (r.isZero() || r.cmp(this.curve.n) >= 0) throw new Error("Invalid S value.");
                    return r.cmp(this.curve.nh) > 0 && (t.s = this.curve.encodeScalar(r.ineg().imod(this.curve.n))), t
                }
                signatureNormalize(t) {
                    const e = c.decode(t, this.curve.scalarSize);
                    return this._signatureNormalize(e), e.encode(this.curve.scalarSize)
                }
                signatureNormalizeDER(t) {
                    const e = c.fromDER(t, this.curve.scalarSize);
                    return this._signatureNormalize(e), e.toDER(this.curve.scalarSize)
                }
                signatureExport(t) {
                    return c.toDER(t, this.curve.scalarSize)
                }
                signatureImport(t) {
                    return c.toRS(t, this.curve.scalarSize)
                }
                _isLowS(t) {
                    const e = this.curve.decodeScalar(t.r),
                        r = this.curve.decodeScalar(t.s);
                    return !(e.isZero() || e.cmp(this.curve.n) >= 0) && (!(r.isZero() || r.cmp(this.curve.n) >= 0) && r.cmp(this.curve.nh) <= 0)
                }
                isLowS(t) {
                    if (i(Buffer.isBuffer(t)), t.length !== 2 * this.curve.scalarSize) return !1;
                    const e = c.decode(t, this.curve.scalarSize);
                    return this._isLowS(e)
                }
                isLowDER(t) {
                    let e;
                    i(Buffer.isBuffer(t));
                    try {
                        e = c.fromDER(t, this.curve.scalarSize)
                    } catch (t) {
                        return !1
                    }
                    return this._isLowS(e)
                }
                _sign(t, e) {
                    i(Buffer.isBuffer(t));
                    const r = this.curve.n,
                        n = this.curve.nh,
                        s = this.curve.g,
                        o = this.curve.decodeScalar(e);
                    if (o.isZero() || o.cmp(r) >= 0) throw new Error("Invalid private key.");
                    const h = this._reduce(t),
                        a = this.curve.encodeScalar(h),
                        u = new d(this.hash, e, a);
                    for (;;) {
                        const t = u.generate(this.curve.scalarSize),
                            e = this._truncate(t);
                        if (e.isZero() || e.cmp(r) >= 0) continue;
                        const i = s.mulBlind(e);
                        if (i.isInfinity()) continue;
                        const a = i.getX(),
                            l = a.mod(r);
                        if (l.isZero()) continue;
                        const f = e.fermat(r),
                            [d, p] = this.curve.getBlinding(),
                            y = o.mul(d).imod(r),
                            v = h.mul(d).imod(r),
                            w = l.mul(y).imod(r).iadd(v).imod(r).imul(f).imod(r);
                        if (w.imul(p).imod(r), w.isZero()) continue;
                        let g = (i.getY().isOdd() ? 1 : 0) | (0 !== a.cmp(l) ? 2 : 0);
                        w.cmp(n) > 0 && (w.ineg().imod(r), g ^= 1);
                        const m = new c;
                        return m.r = this.curve.encodeScalar(l), m.s = this.curve.encodeScalar(w), m.param = g, m
                    }
                }
                sign(t, e) {
                    return this._sign(t, e).encode(this.curve.scalarSize)
                }
                signRecoverable(t, e) {
                    const r = this._sign(t, e);
                    return [r.encode(this.curve.scalarSize), r.param]
                }
                signDER(t, e) {
                    return this._sign(t, e).toDER(this.curve.scalarSize)
                }
                signRecoverableDER(t, e) {
                    const r = this._sign(t, e);
                    return [r.toDER(this.curve.scalarSize), r.param]
                }
                _verify(t, e, r) {
                    const i = this.curve.n,
                        n = this.curve.g,
                        s = this._reduce(t),
                        c = this.curve.decodePoint(r),
                        o = this.curve.decodeScalar(e.r),
                        h = this.curve.decodeScalar(e.s);
                    if (o.isZero() || o.cmp(i) >= 0) return !1;
                    if (h.isZero() || h.cmp(i) >= 0) return !1;
                    const a = h.invert(i),
                        u = s.imul(a).imod(i),
                        l = o.mul(a).imod(i);
                    if (this.curve.maxwellTrick) {
                        const t = n.jmulAdd(u, c, l);
                        return !t.isInfinity() && t.eqXToP(o)
                    }
                    const f = n.mulAdd(u, c, l);
                    return !f.isInfinity() && 0 === f.getX().mod(i).cmp(o)
                }
                verify(t, e, r) {
                    if (i(Buffer.isBuffer(t)), i(Buffer.isBuffer(e)), i(Buffer.isBuffer(r)), e.length !== 2 * this.curve.scalarSize) return !1;
                    const n = c.decode(e, this.curve.scalarSize);
                    try {
                        return this._verify(t, n, r)
                    } catch (t) {
                        return !1
                    }
                }
                verifyDER(t, e, r) {
                    let n;
                    i(Buffer.isBuffer(t)), i(Buffer.isBuffer(e)), i(Buffer.isBuffer(r));
                    try {
                        n = c.fromDER(e, this.curve.scalarSize)
                    } catch (t) {
                        return !1
                    }
                    try {
                        return this._verify(t, n, r)
                    } catch (t) {
                        return !1
                    }
                }
                _recover(t, e, r) {
                    const i = this.curve.p,
                        n = this.curve.n,
                        s = this.curve.g,
                        c = this._reduce(t),
                        o = this.curve.decodeScalar(e.r),
                        h = this.curve.decodeScalar(e.s);
                    if (o.isZero() || o.cmp(n) >= 0) throw new Error("Invalid R value.");
                    if (h.isZero() || h.cmp(n) >= 0) throw new Error("Invalid S value.");
                    const a = 0 != (1 & r);
                    let u = o;
                    if (r >>> 1) {
                        if (u.cmp(i.mod(n)) >= 0) throw new Error("Invalid R value.");
                        u = u.add(n)
                    }
                    const l = this.curve.pointFromX(u, a),
                        f = o.invert(n),
                        d = c.imul(f).ineg().imod(n),
                        p = h.imul(f).imod(n),
                        y = s.mulAdd(d, l, p);
                    if (y.isInfinity()) throw new Error("Invalid point.");
                    return y
                }
                recover(t, e, r, n) {
                    if (i(Buffer.isBuffer(t)), i(Buffer.isBuffer(e)), i(r >>> 0 === r), i((3 & r) === r, "The recovery param is more than two bits."), e.length !== 2 * this.curve.scalarSize) return null;
                    const s = c.decode(e, this.curve.scalarSize);
                    let o;
                    try {
                        o = this._recover(t, s, r)
                    } catch (t) {
                        return null
                    }
                    return o.encode(n)
                }
                recoverDER(t, e, r, n) {
                    let s, o;
                    i(Buffer.isBuffer(t)), i(Buffer.isBuffer(e)), i(r >>> 0 === r), i((3 & r) === r, "The recovery param is more than two bits.");
                    try {
                        s = c.fromDER(e, this.curve.scalarSize)
                    } catch (t) {
                        return null
                    }
                    try {
                        o = this._recover(t, s, r)
                    } catch (t) {
                        return null
                    }
                    return o.encode(n)
                }
                derive(t, e, r) {
                    const i = this.curve.decodeScalar(e);
                    if (i.isZero() || i.cmp(this.curve.n) >= 0) throw new Error("Invalid private key.");
                    const n = this.curve.decodePoint(t);
                    if (this.curve.h.cmpn(1) > 0 && n.isSmall()) throw new Error("Invalid point.");
                    return n.mulConst(i, l).encode(r)
                }
                schnorrSign(t, e) {
                    return this.schnorr.sign(t, e)
                }
                schnorrVerify(t, e, r) {
                    return this.schnorr.verify(t, e, r)
                }
                schnorrVerifyBatch(t) {
                    return this.schnorr.verifyBatch(t)
                }
                _truncate(t) {
                    i(Buffer.isBuffer(t));
                    const e = this.curve.n.bitLength(),
                        r = e + 7 >>> 3;
                    t.length > r && (t = t.slice(0, r));
                    const s = n.decode(t, this.curve.endian),
                        c = 8 * t.length - e;
                    return c > 0 && s.iushrn(c), s
                }
                _reduce(t) {
                    return this._truncate(t).imod(this.curve.n)
                }
            }
        },
        7470: function(t, e, r) {
            "use strict";
            const i = r(5466),
                n = 0 === new Int8Array(new Int16Array([1]).buffer)[0];
            class ChaCha20 {
                constructor() {
                    this.state = new Uint32Array(16), this.stream = new Uint32Array(16), this.bytes = new Uint8Array(this.stream.buffer), this.pos = 0, n && (this.bytes = Buffer.allocUnsafe(64))
                }
                init(t, e, r) {
                    if (null == r && (r = 0), i(Buffer.isBuffer(t)), i(Buffer.isBuffer(e)), i(Number.isSafeInteger(r)), 16 !== t.length && 32 !== t.length) throw new RangeError("Invalid key size.");
                    if (e.length >= 24 && (t = ChaCha20.derive(t, e.slice(0, 16)), e = e.slice(16)), this.state[0] = 1634760805, this.state[1] = t.length < 32 ? 824206446 : 857760878, this.state[2] = t.length < 32 ? 2036477238 : 2036477234, this.state[3] = 1797285236, this.state[4] = o(t, 0), this.state[5] = o(t, 4), this.state[6] = o(t, 8), this.state[7] = o(t, 12), this.state[8] = o(t, 16 % t.length), this.state[9] = o(t, 20 % t.length), this.state[10] = o(t, 24 % t.length), this.state[11] = o(t, 28 % t.length), this.state[12] = r >>> 0, 8 === e.length) this.state[13] = r / 4294967296 >>> 0, this.state[14] = o(e, 0), this.state[15] = o(e, 4);
                    else if (12 === e.length) this.state[13] = o(e, 0), this.state[14] = o(e, 4), this.state[15] = o(e, 8);
                    else {
                        if (16 !== e.length) throw new RangeError("Invalid nonce size.");
                        this.state[12] = o(e, 0), this.state[13] = o(e, 4), this.state[14] = o(e, 8), this.state[15] = o(e, 12)
                    }
                    return this.pos = 0, this
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
                    for (let t = 0; t < 10; t++) s(this.stream, 0, 4, 8, 12), s(this.stream, 1, 5, 9, 13), s(this.stream, 2, 6, 10, 14), s(this.stream, 3, 7, 11, 15), s(this.stream, 0, 5, 10, 15), s(this.stream, 1, 6, 11, 12), s(this.stream, 2, 7, 8, 13), s(this.stream, 3, 4, 9, 14);
                    for (let t = 0; t < 16; t++) this.stream[t] += this.state[t];
                    if (n)
                        for (let t = 0; t < 16; t++) h(this.bytes, this.stream[t], 4 * t);
                    this.state[12] += 1, 0 === this.state[12] && (this.state[13] += 1)
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
                    r[0] = 1634760805, r[1] = t.length < 32 ? 824206446 : 857760878, r[2] = t.length < 32 ? 2036477238 : 2036477234, r[3] = 1797285236, r[4] = o(t, 0), r[5] = o(t, 4), r[6] = o(t, 8), r[7] = o(t, 12), r[8] = o(t, 16 % t.length), r[9] = o(t, 20 % t.length), r[10] = o(t, 24 % t.length), r[11] = o(t, 28 % t.length), r[12] = o(e, 0), r[13] = o(e, 4), r[14] = o(e, 8), r[15] = o(e, 12);
                    for (let t = 0; t < 10; t++) s(r, 0, 4, 8, 12), s(r, 1, 5, 9, 13), s(r, 2, 6, 10, 14), s(r, 3, 7, 11, 15), s(r, 0, 5, 10, 15), s(r, 1, 6, 11, 12), s(r, 2, 7, 8, 13), s(r, 3, 4, 9, 14);
                    const n = Buffer.alloc(32);
                    return h(n, r[0], 0), h(n, r[1], 4), h(n, r[2], 8), h(n, r[3], 12), h(n, r[12], 16), h(n, r[13], 20), h(n, r[14], 24), h(n, r[15], 28), n
                }
            }

            function s(t, e, r, i, n) {
                t[e] += t[r], t[n] = c(t[n] ^ t[e], 16), t[i] += t[n], t[r] = c(t[r] ^ t[i], 12), t[e] += t[r], t[n] = c(t[n] ^ t[e], 8), t[i] += t[n], t[r] = c(t[r] ^ t[i], 7)
            }

            function c(t, e) {
                return t << e | t >>> 32 - e
            }

            function o(t, e) {
                return t[e++] + 256 * t[e++] + 65536 * t[e++] + 16777216 * t[e]
            }

            function h(t, e, r) {
                return t[r++] = e, e >>>= 8, t[r++] = e, e >>>= 8, t[r++] = e, e >>>= 8, t[r++] = e, r
            }
            ChaCha20.native = 0, t.exports = ChaCha20
        },
        7472: function(t, e, r) {
            "use strict";
            const i = r(5466),
                n = new Uint32Array([3328402341, 4168907908, 4000806809, 4135287693, 4294111757, 3597364157, 3731845041, 2445657428, 1613770832, 33620227, 3462883241, 1445669757, 3892248089, 3050821474, 1303096294, 3967186586, 2412431941, 528646813, 2311702848, 4202528135, 4026202645, 2992200171, 2387036105, 4226871307, 1101901292, 3017069671, 1604494077, 1169141738, 597466303, 1403299063, 3832705686, 2613100635, 1974974402, 3791519004, 1033081774, 1277568618, 1815492186, 2118074177, 4126668546, 2211236943, 1748251740, 1369810420, 3521504564, 4193382664, 3799085459, 2883115123, 1647391059, 706024767, 134480908, 2512897874, 1176707941, 2646852446, 806885416, 932615841, 168101135, 798661301, 235341577, 605164086, 461406363, 3756188221, 3454790438, 1311188841, 2142417613, 3933566367, 302582043, 495158174, 1479289972, 874125870, 907746093, 3698224818, 3025820398, 1537253627, 2756858614, 1983593293, 3084310113, 2108928974, 1378429307, 3722699582, 1580150641, 327451799, 2790478837, 3117535592, 0, 3253595436, 1075847264, 3825007647, 2041688520, 3059440621, 3563743934, 2378943302, 1740553945, 1916352843, 2487896798, 2555137236, 2958579944, 2244988746, 3151024235, 3320835882, 1336584933, 3992714006, 2252555205, 2588757463, 1714631509, 293963156, 2319795663, 3925473552, 67240454, 4269768577, 2689618160, 2017213508, 631218106, 1269344483, 2723238387, 1571005438, 2151694528, 93294474, 1066570413, 563977660, 1882732616, 4059428100, 1673313503, 2008463041, 2950355573, 1109467491, 537923632, 3858759450, 4260623118, 3218264685, 2177748300, 403442708, 638784309, 3287084079, 3193921505, 899127202, 2286175436, 773265209, 2479146071, 1437050866, 4236148354, 2050833735, 3362022572, 3126681063, 840505643, 3866325909, 3227541664, 427917720, 2655997905, 2749160575, 1143087718, 1412049534, 999329963, 193497219, 2353415882, 3354324521, 1807268051, 672404540, 2816401017, 3160301282, 369822493, 2916866934, 3688947771, 1681011286, 1949973070, 336202270, 2454276571, 201721354, 1210328172, 3093060836, 2680341085, 3184776046, 1135389935, 3294782118, 965841320, 831886756, 3554993207, 4068047243, 3588745010, 2345191491, 1849112409, 3664604599, 26054028, 2983581028, 2622377682, 1235855840, 3630984372, 2891339514, 4092916743, 3488279077, 3395642799, 4101667470, 1202630377, 268961816, 1874508501, 4034427016, 1243948399, 1546530418, 941366308, 1470539505, 1941222599, 2546386513, 3421038627, 2715671932, 3899946140, 1042226977, 2521517021, 1639824860, 227249030, 260737669, 3765465232, 2084453954, 1907733956, 3429263018, 2420656344, 100860677, 4160157185, 470683154, 3261161891, 1781871967, 2924959737, 1773779408, 394692241, 2579611992, 974986535, 664706745, 3655459128, 3958962195, 731420851, 571543859, 3530123707, 2849626480, 126783113, 865375399, 765172662, 1008606754, 361203602, 3387549984, 2278477385, 2857719295, 1344809080, 2782912378, 59542671, 1503764984, 160008576, 437062935, 1707065306, 3622233649, 2218934982, 3496503480, 2185314755, 697932208, 1512910199, 504303377, 2075177163, 2824099068, 1841019862, 739644986]),
                s = new Uint32Array([2781242211, 2230877308, 2582542199, 2381740923, 234877682, 3184946027, 2984144751, 1418839493, 1348481072, 50462977, 2848876391, 2102799147, 434634494, 1656084439, 3863849899, 2599188086, 1167051466, 2636087938, 1082771913, 2281340285, 368048890, 3954334041, 3381544775, 201060592, 3963727277, 1739838676, 4250903202, 3930435503, 3206782108, 4149453988, 2531553906, 1536934080, 3262494647, 484572669, 2923271059, 1783375398, 1517041206, 1098792767, 49674231, 1334037708, 1550332980, 4098991525, 886171109, 150598129, 2481090929, 1940642008, 1398944049, 1059722517, 201851908, 1385547719, 1699095331, 1587397571, 674240536, 2704774806, 252314885, 3039795866, 151914247, 908333586, 2602270848, 1038082786, 651029483, 1766729511, 3447698098, 2682942837, 454166793, 2652734339, 1951935532, 775166490, 758520603, 3000790638, 4004797018, 4217086112, 4137964114, 1299594043, 1639438038, 3464344499, 2068982057, 1054729187, 1901997871, 2534638724, 4121318227, 1757008337, 0, 750906861, 1614815264, 535035132, 3363418545, 3988151131, 3201591914, 1183697867, 3647454910, 1265776953, 3734260298, 3566750796, 3903871064, 1250283471, 1807470800, 717615087, 3847203498, 384695291, 3313910595, 3617213773, 1432761139, 2484176261, 3481945413, 283769337, 100925954, 2180939647, 4037038160, 1148730428, 3123027871, 3813386408, 4087501137, 4267549603, 3229630528, 2315620239, 2906624658, 3156319645, 1215313976, 82966005, 3747855548, 3245848246, 1974459098, 1665278241, 807407632, 451280895, 251524083, 1841287890, 1283575245, 337120268, 891687699, 801369324, 3787349855, 2721421207, 3431482436, 959321879, 1469301956, 4065699751, 2197585534, 1199193405, 2898814052, 3887750493, 724703513, 2514908019, 2696962144, 2551808385, 3516813135, 2141445340, 1715741218, 2119445034, 2872807568, 2198571144, 3398190662, 700968686, 3547052216, 1009259540, 2041044702, 3803995742, 487983883, 1991105499, 1004265696, 1449407026, 1316239930, 504629770, 3683797321, 168560134, 1816667172, 3837287516, 1570751170, 1857934291, 4014189740, 2797888098, 2822345105, 2754712981, 936633572, 2347923833, 852879335, 1133234376, 1500395319, 3084545389, 2348912013, 1689376213, 3533459022, 3762923945, 3034082412, 4205598294, 133428468, 634383082, 2949277029, 2398386810, 3913789102, 403703816, 3580869306, 2297460856, 1867130149, 1918643758, 607656988, 4049053350, 3346248884, 1368901318, 600565992, 2090982877, 2632479860, 557719327, 3717614411, 3697393085, 2249034635, 2232388234, 2430627952, 1115438654, 3295786421, 2865522278, 3633334344, 84280067, 33027830, 303828494, 2747425121, 1600795957, 4188952407, 3496589753, 2434238086, 1486471617, 658119965, 3106381470, 953803233, 334231800, 3005978776, 857870609, 3151128937, 1890179545, 2298973838, 2805175444, 3056442267, 574365214, 2450884487, 550103529, 1233637070, 4289353045, 2018519080, 2057691103, 2399374476, 4166623649, 2148108681, 387583245, 3664101311, 836232934, 3330556482, 3100665960, 3280093505, 2955516313, 2002398509, 287182607, 3413881008, 4238890068, 3597515707, 975967766]),
                c = new Uint32Array([1671808611, 2089089148, 2006576759, 2072901243, 4061003762, 1807603307, 1873927791, 3310653893, 810573872, 16974337, 1739181671, 729634347, 4263110654, 3613570519, 2883997099, 1989864566, 3393556426, 2191335298, 3376449993, 2106063485, 4195741690, 1508618841, 1204391495, 4027317232, 2917941677, 3563566036, 2734514082, 2951366063, 2629772188, 2767672228, 1922491506, 3227229120, 3082974647, 4246528509, 2477669779, 644500518, 911895606, 1061256767, 4144166391, 3427763148, 878471220, 2784252325, 3845444069, 4043897329, 1905517169, 3631459288, 827548209, 356461077, 67897348, 3344078279, 593839651, 3277757891, 405286936, 2527147926, 84871685, 2595565466, 118033927, 305538066, 2157648768, 3795705826, 3945188843, 661212711, 2999812018, 1973414517, 152769033, 2208177539, 745822252, 439235610, 455947803, 1857215598, 1525593178, 2700827552, 1391895634, 994932283, 3596728278, 3016654259, 695947817, 3812548067, 795958831, 2224493444, 1408607827, 3513301457, 0, 3979133421, 543178784, 4229948412, 2982705585, 1542305371, 1790891114, 3410398667, 3201918910, 961245753, 1256100938, 1289001036, 1491644504, 3477767631, 3496721360, 4012557807, 2867154858, 4212583931, 1137018435, 1305975373, 861234739, 2241073541, 1171229253, 4178635257, 33948674, 2139225727, 1357946960, 1011120188, 2679776671, 2833468328, 1374921297, 2751356323, 1086357568, 2408187279, 2460827538, 2646352285, 944271416, 4110742005, 3168756668, 3066132406, 3665145818, 560153121, 271589392, 4279952895, 4077846003, 3530407890, 3444343245, 202643468, 322250259, 3962553324, 1608629855, 2543990167, 1154254916, 389623319, 3294073796, 2817676711, 2122513534, 1028094525, 1689045092, 1575467613, 422261273, 1939203699, 1621147744, 2174228865, 1339137615, 3699352540, 577127458, 712922154, 2427141008, 2290289544, 1187679302, 3995715566, 3100863416, 339486740, 3732514782, 1591917662, 186455563, 3681988059, 3762019296, 844522546, 978220090, 169743370, 1239126601, 101321734, 611076132, 1558493276, 3260915650, 3547250131, 2901361580, 1655096418, 2443721105, 2510565781, 3828863972, 2039214713, 3878868455, 3359869896, 928607799, 1840765549, 2374762893, 3580146133, 1322425422, 2850048425, 1823791212, 1459268694, 4094161908, 3928346602, 1706019429, 2056189050, 2934523822, 135794696, 3134549946, 2022240376, 628050469, 779246638, 472135708, 2800834470, 3032970164, 3327236038, 3894660072, 3715932637, 1956440180, 522272287, 1272813131, 3185336765, 2340818315, 2323976074, 1888542832, 1044544574, 3049550261, 1722469478, 1222152264, 50660867, 4127324150, 236067854, 1638122081, 895445557, 1475980887, 3117443513, 2257655686, 3243809217, 489110045, 2662934430, 3778599393, 4162055160, 2561878936, 288563729, 1773916777, 3648039385, 2391345038, 2493985684, 2612407707, 505560094, 2274497927, 3911240169, 3460925390, 1442818645, 678973480, 3749357023, 2358182796, 2717407649, 2306869641, 219617805, 3218761151, 3862026214, 1120306242, 1756942440, 1103331905, 2578459033, 762796589, 252780047, 2966125488, 1425844308, 3151392187, 372911126]),
                o = new Uint32Array([1667474886, 2088535288, 2004326894, 2071694838, 4075949567, 1802223062, 1869591006, 3318043793, 808472672, 16843522, 1734846926, 724270422, 4278065639, 3621216949, 2880169549, 1987484396, 3402253711, 2189597983, 3385409673, 2105378810, 4210693615, 1499065266, 1195886990, 4042263547, 2913856577, 3570689971, 2728590687, 2947541573, 2627518243, 2762274643, 1920112356, 3233831835, 3082273397, 4261223649, 2475929149, 640051788, 909531756, 1061110142, 4160160501, 3435941763, 875846760, 2779116625, 3857003729, 4059105529, 1903268834, 3638064043, 825316194, 353713962, 67374088, 3351728789, 589522246, 3284360861, 404236336, 2526454071, 84217610, 2593830191, 117901582, 303183396, 2155911963, 3806477791, 3958056653, 656894286, 2998062463, 1970642922, 151591698, 2206440989, 741110872, 437923380, 454765878, 1852748508, 1515908788, 2694904667, 1381168804, 993742198, 3604373943, 3014905469, 690584402, 3823320797, 791638366, 2223281939, 1398011302, 3520161977, 0, 3991743681, 538992704, 4244381667, 2981218425, 1532751286, 1785380564, 3419096717, 3200178535, 960056178, 1246420628, 1280103576, 1482221744, 3486468741, 3503319995, 4025428677, 2863326543, 4227536621, 1128514950, 1296947098, 859002214, 2240123921, 1162203018, 4193849577, 33687044, 2139062782, 1347481760, 1010582648, 2678045221, 2829640523, 1364325282, 2745433693, 1077985408, 2408548869, 2459086143, 2644360225, 943212656, 4126475505, 3166494563, 3065430391, 3671750063, 555836226, 269496352, 4294908645, 4092792573, 3537006015, 3452783745, 202118168, 320025894, 3974901699, 1600119230, 2543297077, 1145359496, 387397934, 3301201811, 2812801621, 2122220284, 1027426170, 1684319432, 1566435258, 421079858, 1936954854, 1616945344, 2172753945, 1330631070, 3705438115, 572679748, 707427924, 2425400123, 2290647819, 1179044492, 4008585671, 3099120491, 336870440, 3739122087, 1583276732, 185277718, 3688593069, 3772791771, 842159716, 976899700, 168435220, 1229577106, 101059084, 606366792, 1549591736, 3267517855, 3553849021, 2897014595, 1650632388, 2442242105, 2509612081, 3840161747, 2038008818, 3890688725, 3368567691, 926374254, 1835907034, 2374863873, 3587531953, 1313788572, 2846482505, 1819063512, 1448540844, 4109633523, 3941213647, 1701162954, 2054852340, 2930698567, 134748176, 3132806511, 2021165296, 623210314, 774795868, 471606328, 2795958615, 3031746419, 3334885783, 3907527627, 3722280097, 1953799400, 522133822, 1263263126, 3183336545, 2341176845, 2324333839, 1886425312, 1044267644, 3048588401, 1718004428, 1212733584, 50529542, 4143317495, 235803164, 1633788866, 892690282, 1465383342, 3115962473, 2256965911, 3250673817, 488449850, 2661202215, 3789633753, 4177007595, 2560144171, 286339874, 1768537042, 3654906025, 2391705863, 2492770099, 2610673197, 505291324, 2273808917, 3924369609, 3469625735, 1431699370, 673740880, 3755965093, 2358021891, 2711746649, 2307489801, 218961690, 3217021541, 3873845719, 1111672452, 1751693520, 1094828930, 2576986153, 757954394, 252645662, 2964376443, 1414855848, 3149649517, 370555436]),
                h = new Uint32Array([1374988112, 2118214995, 437757123, 975658646, 1001089995, 530400753, 2902087851, 1273168787, 540080725, 2910219766, 2295101073, 4110568485, 1340463100, 3307916247, 641025152, 3043140495, 3736164937, 632953703, 1172967064, 1576976609, 3274667266, 2169303058, 2370213795, 1809054150, 59727847, 361929877, 3211623147, 2505202138, 3569255213, 1484005843, 1239443753, 2395588676, 1975683434, 4102977912, 2572697195, 666464733, 3202437046, 4035489047, 3374361702, 2110667444, 1675577880, 3843699074, 2538681184, 1649639237, 2976151520, 3144396420, 4269907996, 4178062228, 1883793496, 2403728665, 2497604743, 1383856311, 2876494627, 1917518562, 3810496343, 1716890410, 3001755655, 800440835, 2261089178, 3543599269, 807962610, 599762354, 33778362, 3977675356, 2328828971, 2809771154, 4077384432, 1315562145, 1708848333, 101039829, 3509871135, 3299278474, 875451293, 2733856160, 92987698, 2767645557, 193195065, 1080094634, 1584504582, 3178106961, 1042385657, 2531067453, 3711829422, 1306967366, 2438237621, 1908694277, 67556463, 1615861247, 429456164, 3602770327, 2302690252, 1742315127, 2968011453, 126454664, 3877198648, 2043211483, 2709260871, 2084704233, 4169408201, 0, 159417987, 841739592, 504459436, 1817866830, 4245618683, 260388950, 1034867998, 908933415, 168810852, 1750902305, 2606453969, 607530554, 202008497, 2472011535, 3035535058, 463180190, 2160117071, 1641816226, 1517767529, 470948374, 3801332234, 3231722213, 1008918595, 303765277, 235474187, 4069246893, 766945465, 337553864, 1475418501, 2943682380, 4003061179, 2743034109, 4144047775, 1551037884, 1147550661, 1543208500, 2336434550, 3408119516, 3069049960, 3102011747, 3610369226, 1113818384, 328671808, 2227573024, 2236228733, 3535486456, 2935566865, 3341394285, 496906059, 3702665459, 226906860, 2009195472, 733156972, 2842737049, 294930682, 1206477858, 2835123396, 2700099354, 1451044056, 573804783, 2269728455, 3644379585, 2362090238, 2564033334, 2801107407, 2776292904, 3669462566, 1068351396, 742039012, 1350078989, 1784663195, 1417561698, 4136440770, 2430122216, 775550814, 2193862645, 2673705150, 1775276924, 1876241833, 3475313331, 3366754619, 270040487, 3902563182, 3678124923, 3441850377, 1851332852, 3969562369, 2203032232, 3868552805, 2868897406, 566021896, 4011190502, 3135740889, 1248802510, 3936291284, 699432150, 832877231, 708780849, 3332740144, 899835584, 1951317047, 4236429990, 3767586992, 866637845, 4043610186, 1106041591, 2144161806, 395441711, 1984812685, 1139781709, 3433712980, 3835036895, 2664543715, 1282050075, 3240894392, 1181045119, 2640243204, 25965917, 4203181171, 4211818798, 3009879386, 2463879762, 3910161971, 1842759443, 2597806476, 933301370, 1509430414, 3943906441, 3467192302, 3076639029, 3776767469, 2051518780, 2631065433, 1441952575, 404016761, 1942435775, 1408749034, 1610459739, 3745345300, 2017778566, 3400528769, 3110650942, 941896748, 3265478751, 371049330, 3168937228, 675039627, 4279080257, 967311729, 135050206, 3635733660, 1683407248, 2076935265, 3576870512, 1215061108, 3501741890]),
                a = new Uint32Array([1347548327, 1400783205, 3273267108, 2520393566, 3409685355, 4045380933, 2880240216, 2471224067, 1428173050, 4138563181, 2441661558, 636813900, 4233094615, 3620022987, 2149987652, 2411029155, 1239331162, 1730525723, 2554718734, 3781033664, 46346101, 310463728, 2743944855, 3328955385, 3875770207, 2501218972, 3955191162, 3667219033, 768917123, 3545789473, 692707433, 1150208456, 1786102409, 2029293177, 1805211710, 3710368113, 3065962831, 401639597, 1724457132, 3028143674, 409198410, 2196052529, 1620529459, 1164071807, 3769721975, 2226875310, 486441376, 2499348523, 1483753576, 428819965, 2274680428, 3075636216, 598438867, 3799141122, 1474502543, 711349675, 129166120, 53458370, 2592523643, 2782082824, 4063242375, 2988687269, 3120694122, 1559041666, 730517276, 2460449204, 4042459122, 2706270690, 3446004468, 3573941694, 533804130, 2328143614, 2637442643, 2695033685, 839224033, 1973745387, 957055980, 2856345839, 106852767, 1371368976, 4181598602, 1033297158, 2933734917, 1179510461, 3046200461, 91341917, 1862534868, 4284502037, 605657339, 2547432937, 3431546947, 2003294622, 3182487618, 2282195339, 954669403, 3682191598, 1201765386, 3917234703, 3388507166, 0, 2198438022, 1211247597, 2887651696, 1315723890, 4227665663, 1443857720, 507358933, 657861945, 1678381017, 560487590, 3516619604, 975451694, 2970356327, 261314535, 3535072918, 2652609425, 1333838021, 2724322336, 1767536459, 370938394, 182621114, 3854606378, 1128014560, 487725847, 185469197, 2918353863, 3106780840, 3356761769, 2237133081, 1286567175, 3152976349, 4255350624, 2683765030, 3160175349, 3309594171, 878443390, 1988838185, 3704300486, 1756818940, 1673061617, 3403100636, 272786309, 1075025698, 545572369, 2105887268, 4174560061, 296679730, 1841768865, 1260232239, 4091327024, 3960309330, 3497509347, 1814803222, 2578018489, 4195456072, 575138148, 3299409036, 446754879, 3629546796, 4011996048, 3347532110, 3252238545, 4270639778, 915985419, 3483825537, 681933534, 651868046, 2755636671, 3828103837, 223377554, 2607439820, 1649704518, 3270937875, 3901806776, 1580087799, 4118987695, 3198115200, 2087309459, 2842678573, 3016697106, 1003007129, 2802849917, 1860738147, 2077965243, 164439672, 4100872472, 32283319, 2827177882, 1709610350, 2125135846, 136428751, 3874428392, 3652904859, 3460984630, 3572145929, 3593056380, 2939266226, 824852259, 818324884, 3224740454, 930369212, 2801566410, 2967507152, 355706840, 1257309336, 4148292826, 243256656, 790073846, 2373340630, 1296297904, 1422699085, 3756299780, 3818836405, 457992840, 3099667487, 2135319889, 77422314, 1560382517, 1945798516, 788204353, 1521706781, 1385356242, 870912086, 325965383, 2358957921, 2050466060, 2388260884, 2313884476, 4006521127, 901210569, 3990953189, 1014646705, 1503449823, 1062597235, 2031621326, 3212035895, 3931371469, 1533017514, 350174575, 2256028891, 2177544179, 1052338372, 741876788, 1606591296, 1914052035, 213705253, 2334669897, 1107234197, 1899603969, 3725069491, 2631447780, 2422494913, 1635502980, 1893020342, 1950903388, 1120974935]),
                u = new Uint32Array([2807058932, 1699970625, 2764249623, 1586903591, 1808481195, 1173430173, 1487645946, 59984867, 4199882800, 1844882806, 1989249228, 1277555970, 3623636965, 3419915562, 1149249077, 2744104290, 1514790577, 459744698, 244860394, 3235995134, 1963115311, 4027744588, 2544078150, 4190530515, 1608975247, 2627016082, 2062270317, 1507497298, 2200818878, 567498868, 1764313568, 3359936201, 2305455554, 2037970062, 1047239e3, 1910319033, 1337376481, 2904027272, 2892417312, 984907214, 1243112415, 830661914, 861968209, 2135253587, 2011214180, 2927934315, 2686254721, 731183368, 1750626376, 4246310725, 1820824798, 4172763771, 3542330227, 48394827, 2404901663, 2871682645, 671593195, 3254988725, 2073724613, 145085239, 2280796200, 2779915199, 1790575107, 2187128086, 472615631, 3029510009, 4075877127, 3802222185, 4107101658, 3201631749, 1646252340, 4270507174, 1402811438, 1436590835, 3778151818, 3950355702, 3963161475, 4020912224, 2667994737, 273792366, 2331590177, 104699613, 95345982, 3175501286, 2377486676, 1560637892, 3564045318, 369057872, 4213447064, 3919042237, 1137477952, 2658625497, 1119727848, 2340947849, 1530455833, 4007360968, 172466556, 266959938, 516552836, 0, 2256734592, 3980931627, 1890328081, 1917742170, 4294704398, 945164165, 3575528878, 958871085, 3647212047, 2787207260, 1423022939, 775562294, 1739656202, 3876557655, 2530391278, 2443058075, 3310321856, 547512796, 1265195639, 437656594, 3121275539, 719700128, 3762502690, 387781147, 218828297, 3350065803, 2830708150, 2848461854, 428169201, 122466165, 3720081049, 1627235199, 648017665, 4122762354, 1002783846, 2117360635, 695634755, 3336358691, 4234721005, 4049844452, 3704280881, 2232435299, 574624663, 287343814, 612205898, 1039717051, 840019705, 2708326185, 793451934, 821288114, 1391201670, 3822090177, 376187827, 3113855344, 1224348052, 1679968233, 2361698556, 1058709744, 752375421, 2431590963, 1321699145, 3519142200, 2734591178, 188127444, 2177869557, 3727205754, 2384911031, 3215212461, 2648976442, 2450346104, 3432737375, 1180849278, 331544205, 3102249176, 4150144569, 2952102595, 2159976285, 2474404304, 766078933, 313773861, 2570832044, 2108100632, 1668212892, 3145456443, 2013908262, 418672217, 3070356634, 2594734927, 1852171925, 3867060991, 3473416636, 3907448597, 2614737639, 919489135, 164948639, 2094410160, 2997825956, 590424639, 2486224549, 1723872674, 3157750862, 3399941250, 3501252752, 3625268135, 2555048196, 3673637356, 1343127501, 4130281361, 3599595085, 2957853679, 1297403050, 81781910, 3051593425, 2283490410, 532201772, 1367295589, 3926170974, 895287692, 1953757831, 1093597963, 492483431, 3528626907, 1446242576, 1192455638, 1636604631, 209336225, 344873464, 1015671571, 669961897, 3375740769, 3857572124, 2973530695, 3747192018, 1933530610, 3464042516, 935293895, 3454686199, 2858115069, 1863638845, 3683022916, 4085369519, 3292445032, 875313188, 1080017571, 3279033885, 621591778, 1233856572, 2504130317, 24197544, 3017672716, 3835484340, 3247465558, 2220981195, 3060847922, 1551124588, 1463996600]),
                l = new Uint32Array([4104605777, 1097159550, 396673818, 660510266, 2875968315, 2638606623, 4200115116, 3808662347, 821712160, 1986918061, 3430322568, 38544885, 3856137295, 718002117, 893681702, 1654886325, 2975484382, 3122358053, 3926825029, 4274053469, 796197571, 1290801793, 1184342925, 3556361835, 2405426947, 2459735317, 1836772287, 1381620373, 3196267988, 1948373848, 3764988233, 3385345166, 3263785589, 2390325492, 1480485785, 3111247143, 3780097726, 2293045232, 548169417, 3459953789, 3746175075, 439452389, 1362321559, 1400849762, 1685577905, 1806599355, 2174754046, 137073913, 1214797936, 1174215055, 3731654548, 2079897426, 1943217067, 1258480242, 529487843, 1437280870, 3945269170, 3049390895, 3313212038, 923313619, 679998e3, 3215307299, 57326082, 377642221, 3474729866, 2041877159, 133361907, 1776460110, 3673476453, 96392454, 878845905, 2801699524, 777231668, 4082475170, 2330014213, 4142626212, 2213296395, 1626319424, 1906247262, 1846563261, 562755902, 3708173718, 1040559837, 3871163981, 1418573201, 3294430577, 114585348, 1343618912, 2566595609, 3186202582, 1078185097, 3651041127, 3896688048, 2307622919, 425408743, 3371096953, 2081048481, 1108339068, 2216610296, 0, 2156299017, 736970802, 292596766, 1517440620, 251657213, 2235061775, 2933202493, 758720310, 265905162, 1554391400, 1532285339, 908999204, 174567692, 1474760595, 4002861748, 2610011675, 3234156416, 3693126241, 2001430874, 303699484, 2478443234, 2687165888, 585122620, 454499602, 151849742, 2345119218, 3064510765, 514443284, 4044981591, 1963412655, 2581445614, 2137062819, 19308535, 1928707164, 1715193156, 4219352155, 1126790795, 600235211, 3992742070, 3841024952, 836553431, 1669664834, 2535604243, 3323011204, 1243905413, 3141400786, 4180808110, 698445255, 2653899549, 2989552604, 2253581325, 3252932727, 3004591147, 1891211689, 2487810577, 3915653703, 4237083816, 4030667424, 2100090966, 865136418, 1229899655, 953270745, 3399679628, 3557504664, 4118925222, 2061379749, 3079546586, 2915017791, 983426092, 2022837584, 1607244650, 2118541908, 2366882550, 3635996816, 972512814, 3283088770, 1568718495, 3499326569, 3576539503, 621982671, 2895723464, 410887952, 2623762152, 1002142683, 645401037, 1494807662, 2595684844, 1335535747, 2507040230, 4293295786, 3167684641, 367585007, 3885750714, 1865862730, 2668221674, 2960971305, 2763173681, 1059270954, 2777952454, 2724642869, 1320957812, 2194319100, 2429595872, 2815956275, 77089521, 3973773121, 3444575871, 2448830231, 1305906550, 4021308739, 2857194700, 2516901860, 3518358430, 1787304780, 740276417, 1699839814, 1592394909, 2352307457, 2272556026, 188821243, 1729977011, 3687994002, 274084841, 3594982253, 3613494426, 2701949495, 4162096729, 322734571, 2837966542, 1640576439, 484830689, 1202797690, 3537852828, 4067639125, 349075736, 3342319475, 4157467219, 4255800159, 1030690015, 1155237496, 2951971274, 1757691577, 607398968, 2738905026, 499347990, 3794078908, 1011452712, 227885567, 2818666809, 213114376, 3034881240, 1455525988, 3414450555, 850817237, 1817998408, 3092726480]),
                f = new Uint8Array([82, 9, 106, 213, 48, 54, 165, 56, 191, 64, 163, 158, 129, 243, 215, 251, 124, 227, 57, 130, 155, 47, 255, 135, 52, 142, 67, 68, 196, 222, 233, 203, 84, 123, 148, 50, 166, 194, 35, 61, 238, 76, 149, 11, 66, 250, 195, 78, 8, 46, 161, 102, 40, 217, 36, 178, 118, 91, 162, 73, 109, 139, 209, 37, 114, 248, 246, 100, 134, 104, 152, 22, 212, 164, 92, 204, 93, 101, 182, 146, 108, 112, 72, 80, 253, 237, 185, 218, 94, 21, 70, 87, 167, 141, 157, 132, 144, 216, 171, 0, 140, 188, 211, 10, 247, 228, 88, 5, 184, 179, 69, 6, 208, 44, 30, 143, 202, 63, 15, 2, 193, 175, 189, 3, 1, 19, 138, 107, 58, 145, 17, 65, 79, 103, 220, 234, 151, 242, 207, 206, 240, 180, 230, 115, 150, 172, 116, 34, 231, 173, 53, 133, 226, 249, 55, 232, 28, 117, 223, 110, 71, 241, 26, 113, 29, 41, 197, 137, 111, 183, 98, 14, 170, 24, 190, 27, 252, 86, 62, 75, 198, 210, 121, 32, 154, 219, 192, 254, 120, 205, 90, 244, 31, 221, 168, 51, 136, 7, 199, 49, 177, 18, 16, 89, 39, 128, 236, 95, 96, 81, 127, 169, 25, 181, 74, 13, 45, 229, 122, 159, 147, 201, 156, 239, 160, 224, 59, 77, 174, 42, 245, 176, 200, 235, 187, 60, 131, 83, 153, 97, 23, 43, 4, 126, 186, 119, 214, 38, 225, 105, 20, 99, 85, 33, 12, 125]),
                d = new Uint32Array([16777216, 33554432, 67108864, 134217728, 268435456, 536870912, 1073741824, 2147483648, 452984832, 905969664]);

            function p(t, e) {
                return 16777216 * t[e++] + 65536 * t[e++] + 256 * t[e++] + t[e]
            }

            function y(t, e, r) {
                return t[r++] = e >>> 24, t[r++] = e >>> 16, t[r++] = e >>> 8, t[r++] = e, r
            }
            t.exports = class AES {
                constructor(t = 256) {
                    i(t >>> 0 === t), this.bits = t, this.rounds = function(t) {
                        switch (t) {
                            case 128:
                                return 10;
                            case 192:
                                return 12;
                            case 256:
                                return 14;
                            default:
                                throw new Error("Bad key size.")
                        }
                    }(t), this.key = null, this.encKey = null, this.decKey = null
                }
                get blockSize() {
                    return 16
                }
                init(t) {
                    if (i(Buffer.isBuffer(t)), t.length !== this.bits >>> 3) throw new Error("Invalid key size.");
                    return this.destroy(), this.key = Buffer.from(t), this.encKey = null, this.decKey = null, this
                }
                createEncryptKey() {
                    if (!this.key) throw new Error("Cipher is not initialized.");
                    const t = this.key;
                    if (t.length !== this.bits >>> 3) throw new Error("Invalid key size.");
                    const e = new Uint32Array(60);
                    e[0] = p(t, 0), e[1] = p(t, 4), e[2] = p(t, 8), e[3] = p(t, 12);
                    let r, i = 0,
                        h = 0;
                    if (128 === this.bits) {
                        for (;;) {
                            const t = e[i + 3];
                            if (r = e[i], r ^= 4278190080 & c[t >>> 16 & 255], r ^= 16711680 & o[t >>> 8 & 255], r ^= 65280 & n[t >>> 0 & 255], r ^= 255 & s[t >>> 24 & 255], r ^= d[h], e[i + 4] = r, e[i + 5] = e[i + 1] ^ e[i + 4], e[i + 6] = e[i + 2] ^ e[i + 5], e[i + 7] = e[i + 3] ^ e[i + 6], h += 1, 10 === h) break;
                            i += 4
                        }
                        return e
                    }
                    if (e[i + 4] = p(t, 16), e[i + 5] = p(t, 20), 192 === this.bits) {
                        for (;;) {
                            const t = e[i + 5];
                            if (r = e[i], r ^= 4278190080 & c[t >>> 16 & 255], r ^= 16711680 & o[t >>> 8 & 255], r ^= 65280 & n[t >>> 0 & 255], r ^= 255 & s[t >>> 24 & 255], r ^= d[h], e[i + 6] = r, e[i + 7] = e[i + 1] ^ e[i + 6], e[i + 8] = e[i + 2] ^ e[i + 7], e[i + 9] = e[i + 3] ^ e[i + 8], h += 1, 8 === h) break;
                            e[i + 10] = e[i + 4] ^ e[i + 9], e[i + 11] = e[i + 5] ^ e[i + 10], i += 6
                        }
                        return e
                    }
                    if (e[i + 6] = p(t, 24), e[i + 7] = p(t, 28), 256 === this.bits) {
                        for (;;) {
                            let t = e[i + 7];
                            if (r = e[i], r ^= 4278190080 & c[t >>> 16 & 255], r ^= 16711680 & o[t >>> 8 & 255], r ^= 65280 & n[t >>> 0 & 255], r ^= 255 & s[t >>> 24 & 255], r ^= d[h], e[i + 8] = r, e[i + 9] = e[i + 1] ^ e[i + 8], e[i + 10] = e[i + 2] ^ e[i + 9], e[i + 11] = e[i + 3] ^ e[i + 10], h += 1, 7 === h) break;
                            t = e[i + 11], r = e[i + 4], r ^= 4278190080 & c[t >>> 24 & 255], r ^= 16711680 & o[t >>> 16 & 255], r ^= 65280 & n[t >>> 8 & 255], r ^= 255 & s[t >>> 0 & 255], e[i + 12] = r, e[i + 13] = e[i + 5] ^ e[i + 12], e[i + 14] = e[i + 6] ^ e[i + 13], e[i + 15] = e[i + 7] ^ e[i + 14], i += 8
                        }
                        return e
                    }
                    throw new Error("Bad key size.")
                }
                createDecryptKey() {
                    const t = this.createEncryptKey();
                    let e = 0;
                    for (let r = 0, i = 4 * this.rounds; r < i; r += 4, i -= 4) {
                        let n = t[e + r + 0];
                        t[e + r + 0] = t[e + i + 0], t[e + i + 0] = n, n = t[e + r + 1], t[e + r + 1] = t[e + i + 1], t[e + i + 1] = n, n = t[e + r + 2], t[e + r + 2] = t[e + i + 2], t[e + i + 2] = n, n = t[e + r + 3], t[e + r + 3] = t[e + i + 3], t[e + i + 3] = n
                    }
                    for (let r = 1; r < this.rounds; r++) {
                        let r, i, n, c;
                        e += 4, r = h[255 & s[t[e + 0] >>> 24 & 255]], r ^= a[255 & s[t[e + 0] >>> 16 & 255]], r ^= u[255 & s[t[e + 0] >>> 8 & 255]], r ^= l[255 & s[t[e + 0] >>> 0 & 255]], i = h[255 & s[t[e + 1] >>> 24 & 255]], i ^= a[255 & s[t[e + 1] >>> 16 & 255]], i ^= u[255 & s[t[e + 1] >>> 8 & 255]], i ^= l[255 & s[t[e + 1] >>> 0 & 255]], n = h[255 & s[t[e + 2] >>> 24 & 255]], n ^= a[255 & s[t[e + 2] >>> 16 & 255]], n ^= u[255 & s[t[e + 2] >>> 8 & 255]], n ^= l[255 & s[t[e + 2] >>> 0 & 255]], c = h[255 & s[t[e + 3] >>> 24 & 255]], c ^= a[255 & s[t[e + 3] >>> 16 & 255]], c ^= u[255 & s[t[e + 3] >>> 8 & 255]], c ^= l[255 & s[t[e + 3] >>> 0 & 255]], t[e + 0] = r, t[e + 1] = i, t[e + 2] = n, t[e + 3] = c
                    }
                    return t
                }
                getEncryptKey() {
                    return this.encKey || (this.encKey = this.createEncryptKey()), this.encKey
                }
                getDecryptKey() {
                    return this.decKey || (this.decKey = this.createDecryptKey()), this.decKey
                }
                encrypt(t, e, r, i) {
                    const h = this.getEncryptKey();
                    let a, u, l, f, d = p(t, e + 0) ^ h[0],
                        v = p(t, e + 4) ^ h[1],
                        w = p(t, e + 8) ^ h[2],
                        g = p(t, e + 12) ^ h[3],
                        m = this.rounds >>> 1,
                        b = 0;
                    for (; a = n[d >>> 24 & 255], a ^= s[v >>> 16 & 255], a ^= c[w >>> 8 & 255], a ^= o[g >>> 0 & 255], a ^= h[b + 4], u = n[v >>> 24 & 255], u ^= s[w >>> 16 & 255], u ^= c[g >>> 8 & 255], u ^= o[d >>> 0 & 255], u ^= h[b + 5], l = n[w >>> 24 & 255], l ^= s[g >>> 16 & 255], l ^= c[d >>> 8 & 255], l ^= o[v >>> 0 & 255], l ^= h[b + 6], f = n[g >>> 24 & 255], f ^= s[d >>> 16 & 255], f ^= c[v >>> 8 & 255], f ^= o[w >>> 0 & 255], f ^= h[b + 7], b += 8, m -= 1, 0 !== m;) d = n[a >>> 24 & 255], d ^= s[u >>> 16 & 255], d ^= c[l >>> 8 & 255], d ^= o[f >>> 0 & 255], d ^= h[b + 0], v = n[u >>> 24 & 255], v ^= s[l >>> 16 & 255], v ^= c[f >>> 8 & 255], v ^= o[a >>> 0 & 255], v ^= h[b + 1], w = n[l >>> 24 & 255], w ^= s[f >>> 16 & 255], w ^= c[a >>> 8 & 255], w ^= o[u >>> 0 & 255], w ^= h[b + 2], g = n[f >>> 24 & 255], g ^= s[a >>> 16 & 255], g ^= c[u >>> 8 & 255], g ^= o[l >>> 0 & 255], g ^= h[b + 3];
                    return d = 4278190080 & c[a >>> 24 & 255], d ^= 16711680 & o[u >>> 16 & 255], d ^= 65280 & n[l >>> 8 & 255], d ^= 255 & s[f >>> 0 & 255], d ^= h[b + 0], v = 4278190080 & c[u >>> 24 & 255], v ^= 16711680 & o[l >>> 16 & 255], v ^= 65280 & n[f >>> 8 & 255], v ^= 255 & s[a >>> 0 & 255], v ^= h[b + 1], w = 4278190080 & c[l >>> 24 & 255], w ^= 16711680 & o[f >>> 16 & 255], w ^= 65280 & n[a >>> 8 & 255], w ^= 255 & s[u >>> 0 & 255], w ^= h[b + 2], g = 4278190080 & c[f >>> 24 & 255], g ^= 16711680 & o[a >>> 16 & 255], g ^= 65280 & n[u >>> 8 & 255], g ^= 255 & s[l >>> 0 & 255], g ^= h[b + 3], y(r, d, i + 0), y(r, v, i + 4), y(r, w, i + 8), y(r, g, i + 12), this
                }
                decrypt(t, e, r, i) {
                    const n = this.getDecryptKey();
                    let s, c, o, d, v = p(t, e + 0) ^ n[0],
                        w = p(t, e + 4) ^ n[1],
                        g = p(t, e + 8) ^ n[2],
                        m = p(t, e + 12) ^ n[3],
                        b = this.rounds >>> 1,
                        k = 0;
                    for (; s = h[v >>> 24 & 255], s ^= a[m >>> 16 & 255], s ^= u[g >>> 8 & 255], s ^= l[w >>> 0 & 255], s ^= n[k + 4], c = h[w >>> 24 & 255], c ^= a[v >>> 16 & 255], c ^= u[m >>> 8 & 255], c ^= l[g >>> 0 & 255], c ^= n[k + 5], o = h[g >>> 24 & 255], o ^= a[w >>> 16 & 255], o ^= u[v >>> 8 & 255], o ^= l[m >>> 0 & 255], o ^= n[k + 6], d = h[m >>> 24 & 255], d ^= a[g >>> 16 & 255], d ^= u[w >>> 8 & 255], d ^= l[v >>> 0 & 255], d ^= n[k + 7], k += 8, b -= 1, 0 !== b;) v = h[s >>> 24 & 255], v ^= a[d >>> 16 & 255], v ^= u[o >>> 8 & 255], v ^= l[c >>> 0 & 255], v ^= n[k + 0], w = h[c >>> 24 & 255], w ^= a[s >>> 16 & 255], w ^= u[d >>> 8 & 255], w ^= l[o >>> 0 & 255], w ^= n[k + 1], g = h[o >>> 24 & 255], g ^= a[c >>> 16 & 255], g ^= u[s >>> 8 & 255], g ^= l[d >>> 0 & 255], g ^= n[k + 2], m = h[d >>> 24 & 255], m ^= a[o >>> 16 & 255], m ^= u[c >>> 8 & 255], m ^= l[s >>> 0 & 255], m ^= n[k + 3];
                    return v = f[s >>> 24 & 255] << 24, v ^= f[d >>> 16 & 255] << 16, v ^= f[o >>> 8 & 255] << 8, v ^= f[c >>> 0 & 255] << 0, v ^= n[k + 0], w = f[c >>> 24 & 255] << 24, w ^= f[s >>> 16 & 255] << 16, w ^= f[d >>> 8 & 255] << 8, w ^= f[o >>> 0 & 255] << 0, w ^= n[k + 1], g = f[o >>> 24 & 255] << 24, g ^= f[c >>> 16 & 255] << 16, g ^= f[s >>> 8 & 255] << 8, g ^= f[d >>> 0 & 255] << 0, g ^= n[k + 2], m = f[d >>> 24 & 255] << 24, m ^= f[o >>> 16 & 255] << 16, m ^= f[c >>> 8 & 255] << 8, m ^= f[s >>> 0 & 255] << 0, m ^= n[k + 3], y(r, v, i + 0), y(r, w, i + 4), y(r, g, i + 8), y(r, m, i + 12), this
                }
                destroy() {
                    if (this.key)
                        for (let t = 0; t < this.key.length; t++) this.key[t] = 0;
                    if (this.encKey)
                        for (let t = 0; t < 60; t++) this.encKey[t] = 0;
                    if (this.decKey)
                        for (let t = 0; t < 60; t++) this.decKey[t] = 0;
                    return this.key = null, this.encKey = null, this.decKey = null, this
                }
            }
        },
        7473: function(t, e, r) {
            "use strict";
            const i = r(5466),
                n = r(9968),
                s = Buffer.alloc(0),
                c = Buffer.alloc(16, 0);
            class Cipher {
                constructor(t, e = !1) {
                    i(t && "function" == typeof t.encrypt), i("number" == typeof t.blockSize), i("boolean" == typeof e), this.ctx = t, this.padding = e, this.block = Buffer.allocUnsafe(t.blockSize), this.bpos = -1, this.lsize = 0, this.last = s, e && (this.last = Buffer.alloc(t.blockSize, 0))
                }
                get blockSize() {
                    return this.block.length
                }
                init(t, e) {
                    return null == e && (e = s), i(Buffer.isBuffer(t)), i(Buffer.isBuffer(e)), this.ctx.init(t), this.bpos = 0, this.lsize = 0, this.last.fill(0), this._init(t, e), this
                }
                update(t) {
                    if (i(Buffer.isBuffer(t)), -1 === this.bpos) throw new Error("Cipher not initialized.");
                    const e = this.block.length;
                    let r = this.bpos,
                        n = t.length,
                        c = n - n % e,
                        o = 0,
                        h = 0;
                    if (this.bpos = (this.bpos + n) % e, r > 0) {
                        let i = e - r;
                        if (i > n && (i = n), t.copy(this.block, r, o, o + i), r += i, n -= i, o += i, r < e) return s;
                        c += e
                    }
                    c += this.lsize;
                    const a = Buffer.allocUnsafe(c);
                    for (this.lsize > 0 && (h += this.last.copy(a, h, 0, this.lsize)), o && (this._update(this.block, 0, a, h), h += e); n >= e;) this._update(t, o, a, h), h += e, o += e, n -= e;
                    if (n > 0 && t.copy(this.block, 0, o, o + n), this.padding) {
                        if (c > 0) return this.lsize = a.copy(this.last, 0, c - e, c), a.slice(0, c - e);
                        this.lsize = 0, this.last.fill(0)
                    }
                    return a
                }
                final() {
                    if (-1 === this.bpos) throw new Error("Cipher not initialized.");
                    let t;
                    try {
                        t = this._final()
                    } finally {
                        this.ctx.destroy(), this.block.fill(0), this.bpos = -1, this.lsize = 0, this.last.fill(0)
                    }
                    return t
                }
                setAAD(t) {
                    throw new Error("Not authenticated.")
                }
                getAuthTag() {
                    throw new Error("Not authenticated.")
                }
                setAuthTag(t) {
                    throw new Error("Not authenticated.")
                }
                _init() {
                    return this
                }
                _update() {
                    throw new Error("Unimplemented.")
                }
                _final() {
                    return s
                }
            }
            class BlockCipher extends Cipher {
                constructor(t, e = !1) {
                    i("boolean" == typeof e), super(t, !1), this.chain = e, this.prev = s
                }
                _init(t, e) {
                    return i(Buffer.isBuffer(e)), this.chain ? i(e.length === this.blockSize) : i(0 === e.length), this.prev = Buffer.from(e), this
                }
                _update(t, e, r, i) {
                    if (this.chain) {
                        const n = this.blockSize;
                        for (let s = 0; s < n; s++) r[i + s] = t[e + s] ^ this.prev[s];
                        this.ctx.encrypt(r, i, r, i), r.copy(this.prev, 0, i, i + n)
                    } else this.ctx.encrypt(t, e, r, i);
                    return this
                }
                _final() {
                    const t = this.blockSize,
                        e = t - this.bpos,
                        r = Buffer.from(this.block);
                    return r.fill(e, this.bpos, t), this._update(r, 0, r, 0), this.prev.fill(0), this.prev = s, r
                }
            }
            class BlockDecipher extends Cipher {
                constructor(t, e = !1) {
                    i("boolean" == typeof e), super(t, !0), this.chain = e, this.prev = s
                }
                _init(t, e) {
                    return i(Buffer.isBuffer(e)), this.chain ? i(e.length === this.blockSize) : i(0 === e.length), this.prev = Buffer.from(e), this
                }
                _update(t, e, r, i) {
                    if (this.chain) {
                        const n = this.blockSize;
                        this.ctx.decrypt(t, e, r, i);
                        for (let t = 0; t < n; t++) r[i + t] = r[i + t] ^ this.prev[t];
                        t.copy(this.prev, 0, e, e + n)
                    } else this.ctx.decrypt(t, e, r, i);
                    return this
                }
                _final() {
                    const t = this.blockSize,
                        e = Buffer.from(this.last);
                    if (this.prev.fill(0), this.prev = s, 0 !== this.bpos) throw new Error("Bad decrypt (trailing bytes).");
                    const r = e[e.length - 1];
                    if (0 === r || r > t) throw new Error("Bad decrypt (padding).");
                    const i = t - r;
                    for (let t = i; t < e.length; t++)
                        if (e[t] !== r) throw new Error("Bad decrypt (padding).");
                    return e.slice(0, i)
                }
            }
            class ECBCipher extends BlockCipher {
                constructor(t) {
                    super(t, !1)
                }
            }
            class ECBDecipher extends BlockDecipher {
                constructor(t) {
                    super(t, !1)
                }
            }
            class CBCCipher extends BlockCipher {
                constructor(t) {
                    super(t, !0)
                }
            }
            class CBCDecipher extends BlockDecipher {
                constructor(t) {
                    super(t, !0)
                }
            }
            class CTR extends Cipher {
                constructor(t) {
                    super(t, !1), this.state = s, this.ctr = s
                }
                _init(t, e) {
                    return i(Buffer.isBuffer(e)), i(e.length === this.blockSize), this.state = Buffer.allocUnsafe(this.blockSize), this.ctr = Buffer.from(e), this
                }
                _increment() {
                    for (let t = this.ctr.length - 1; t >= 0 && (this.ctr[t] += 1, 0 === this.ctr[t]); t--);
                }
                _update(t, e, r, i) {
                    const n = this.blockSize;
                    this.ctx.encrypt(this.ctr, 0, this.state, 0), this._increment();
                    for (let s = 0; s < n; s++) r[i + s] = t[e + s] ^ this.state[s];
                    return this
                }
                _final() {
                    this.ctx.encrypt(this.ctr, 0, this.state, 0);
                    const t = Buffer.allocUnsafe(this.bpos);
                    for (let e = 0; e < this.bpos; e++) t[e] = this.block[e] ^ this.state[e];
                    return this.state.fill(0), this.ctr.fill(0), this.state = s, this.ctr = s, t
                }
            }
            class CTRCipher extends CTR {
                constructor(t) {
                    super(t)
                }
            }
            class CTRDecipher extends CTR {
                constructor(t) {
                    super(t)
                }
            }
            class CFB extends Cipher {
                constructor(t, e = !0) {
                    i("boolean" == typeof e), super(t, !1), this.encrypt = e, this.state = s, this.prev = s
                }
                _init(t, e) {
                    return i(Buffer.isBuffer(e)), i(e.length === this.blockSize), this.state = Buffer.allocUnsafe(this.blockSize), this.prev = Buffer.from(e), this
                }
                _update(t, e, r, i) {
                    const n = this.blockSize;
                    this.ctx.encrypt(this.prev, 0, this.state, 0);
                    for (let s = 0; s < n; s++) r[i + s] = t[e + s] ^ this.state[s];
                    return this.encrypt ? r.copy(this.prev, 0, i, i + n) : t.copy(this.prev, 0, e, e + n), this
                }
                _final() {
                    this.ctx.encrypt(this.prev, 0, this.state, 0);
                    const t = Buffer.allocUnsafe(this.bpos);
                    for (let e = 0; e < this.bpos; e++) t[e] = this.block[e] ^ this.state[e];
                    return this.state.fill(0), this.state = s, this.prev.fill(0), this.prev = s, t
                }
            }
            class CFBCipher extends CFB {
                constructor(t) {
                    super(t, !0)
                }
            }
            class CFBDecipher extends CFB {
                constructor(t) {
                    super(t, !1)
                }
            }
            class OFB extends Cipher {
                constructor(t) {
                    super(t, !1), this.state = s
                }
                _init(t, e) {
                    return i(Buffer.isBuffer(e)), i(e.length === this.blockSize), this.state = Buffer.from(e), this
                }
                _update(t, e, r, i) {
                    const n = this.blockSize;
                    this.ctx.encrypt(this.state, 0, this.state, 0);
                    for (let s = 0; s < n; s++) r[i + s] = t[e + s] ^ this.state[s];
                    return this
                }
                _final() {
                    this.ctx.encrypt(this.state, 0, this.state, 0);
                    const t = Buffer.allocUnsafe(this.bpos);
                    for (let e = 0; e < this.bpos; e++) t[e] = this.block[e] ^ this.state[e];
                    return this.state.fill(0), this.state = s, t
                }
            }
            class OFBCipher extends OFB {
                constructor(t) {
                    super(t)
                }
            }
            class OFBDecipher extends OFB {
                constructor(t) {
                    super(t)
                }
            }
            class GCM {
                constructor(t, e) {
                    this.aead = new n.GCM(t), this.encrypt = e, this.tag = c, this.mac = c
                }
                get blockSize() {
                    return 16
                }
                init(t, e) {
                    return this.aead.init(t, e), this.tag = c, this.mac = c, this
                }
                update(t) {
                    i(Buffer.isBuffer(t));
                    const e = Buffer.allocUnsafe(t.length);
                    return t.copy(e, 0), this.encrypt ? this.aead.encrypt(e) : this.aead.decrypt(e), e
                }
                final() {
                    if (this.mac = this.aead.final(this.tag.length), !this.encrypt && !n.GCM.verify(this.tag, this.mac)) throw new Error("Invalid decryption tag.");
                    return s
                }
                setAAD(t) {
                    return this.aead.aad(t), this
                }
                getAuthTag() {
                    return i(this.encrypt), this.mac
                }
                setAuthTag(t) {
                    i(!this.encrypt), i(Buffer.isBuffer(t));
                    const e = t.length;
                    return i(4 === e || 8 === e || e >= 12 && e <= 16), this.tag = t, this
                }
            }
            class GCMCipher extends GCM {
                constructor(t) {
                    super(t, !0)
                }
            }
            class GCMDecipher extends GCM {
                constructor(t) {
                    super(t, !1)
                }
            }
            e.Cipher = Cipher, e.BlockCipher = BlockCipher, e.BlockDecipher = BlockDecipher, e.ECBCipher = ECBCipher, e.ECBDecipher = ECBDecipher, e.CBCCipher = CBCCipher, e.CBCDecipher = CBCDecipher, e.CTR = CTR, e.CTRCipher = CTRCipher, e.CTRDecipher = CTRDecipher, e.CFB = CFB, e.CFBCipher = CFBCipher, e.CFBDecipher = CFBDecipher, e.OFB = OFB, e.OFBCipher = OFBCipher, e.OFBDecipher = OFBDecipher, e.GCM = GCM, e.GCMCipher = GCMCipher, e.GCMDecipher = GCMDecipher, e.get = function(t, e = !0) {
                switch (i("string" == typeof t), i("boolean" == typeof e), t) {
                    case "ECB":
                        return e ? ECBCipher : ECBDecipher;
                    case "CBC":
                        return e ? CBCCipher : CBCDecipher;
                    case "CTR":
                        return e ? CTRCipher : CTRDecipher;
                    case "CFB":
                        return e ? CFBCipher : CFBDecipher;
                    case "OFB":
                        return e ? OFBCipher : OFBDecipher;
                    case "GCM":
                        return e ? GCMCipher : GCMDecipher;
                    default:
                        throw new Error(`Unknown mode: ${t}.`)
                }
            }
        },
        7476: function(t, e, r) {
            "use strict";
            const i = r(5466),
                n = new Uint32Array([3509652390, 2564797868, 805139163, 3491422135, 3101798381, 1780907670, 3128725573, 4046225305, 614570311, 3012652279, 134345442, 2240740374, 1667834072, 1901547113, 2757295779, 4103290238, 227898511, 1921955416, 1904987480, 2182433518, 2069144605, 3260701109, 2620446009, 720527379, 3318853667, 677414384, 3393288472, 3101374703, 2390351024, 1614419982, 1822297739, 2954791486, 3608508353, 3174124327, 2024746970, 1432378464, 3864339955, 2857741204, 1464375394, 1676153920, 1439316330, 715854006, 3033291828, 289532110, 2706671279, 2087905683, 3018724369, 1668267050, 732546397, 1947742710, 3462151702, 2609353502, 2950085171, 1814351708, 2050118529, 680887927, 999245976, 1800124847, 3300911131, 1713906067, 1641548236, 4213287313, 1216130144, 1575780402, 4018429277, 3917837745, 3693486850, 3949271944, 596196993, 3549867205, 258830323, 2213823033, 772490370, 2760122372, 1774776394, 2652871518, 566650946, 4142492826, 1728879713, 2882767088, 1783734482, 3629395816, 2517608232, 2874225571, 1861159788, 326777828, 3124490320, 2130389656, 2716951837, 967770486, 1724537150, 2185432712, 2364442137, 1164943284, 2105845187, 998989502, 3765401048, 2244026483, 1075463327, 1455516326, 1322494562, 910128902, 469688178, 1117454909, 936433444, 3490320968, 3675253459, 1240580251, 122909385, 2157517691, 634681816, 4142456567, 3825094682, 3061402683, 2540495037, 79693498, 3249098678, 1084186820, 1583128258, 426386531, 1761308591, 1047286709, 322548459, 995290223, 1845252383, 2603652396, 3431023940, 2942221577, 3202600964, 3727903485, 1712269319, 422464435, 3234572375, 1170764815, 3523960633, 3117677531, 1434042557, 442511882, 3600875718, 1076654713, 1738483198, 4213154764, 2393238008, 3677496056, 1014306527, 4251020053, 793779912, 2902807211, 842905082, 4246964064, 1395751752, 1040244610, 2656851899, 3396308128, 445077038, 3742853595, 3577915638, 679411651, 2892444358, 2354009459, 1767581616, 3150600392, 3791627101, 3102740896, 284835224, 4246832056, 1258075500, 768725851, 2589189241, 3069724005, 3532540348, 1274779536, 3789419226, 2764799539, 1660621633, 3471099624, 4011903706, 913787905, 3497959166, 737222580, 2514213453, 2928710040, 3937242737, 1804850592, 3499020752, 2949064160, 2386320175, 2390070455, 2415321851, 4061277028, 2290661394, 2416832540, 1336762016, 1754252060, 3520065937, 3014181293, 791618072, 3188594551, 3933548030, 2332172193, 3852520463, 3043980520, 413987798, 3465142937, 3030929376, 4245938359, 2093235073, 3534596313, 375366246, 2157278981, 2479649556, 555357303, 3870105701, 2008414854, 3344188149, 4221384143, 3956125452, 2067696032, 3594591187, 2921233993, 2428461, 544322398, 577241275, 1471733935, 610547355, 4027169054, 1432588573, 1507829418, 2025931657, 3646575487, 545086370, 48609733, 2200306550, 1653985193, 298326376, 1316178497, 3007786442, 2064951626, 458293330, 2589141269, 3591329599, 3164325604, 727753846, 2179363840, 146436021, 1461446943, 4069977195, 705550613, 3059967265, 3887724982, 4281599278, 3313849956, 1404054877, 2845806497, 146425753, 1854211946]),
                s = new Uint32Array([1266315497, 3048417604, 3681880366, 3289982499, 290971e4, 1235738493, 2632868024, 2414719590, 3970600049, 1771706367, 1449415276, 3266420449, 422970021, 1963543593, 2690192192, 3826793022, 1062508698, 1531092325, 1804592342, 2583117782, 2714934279, 4024971509, 1294809318, 4028980673, 1289560198, 2221992742, 1669523910, 35572830, 157838143, 1052438473, 1016535060, 1802137761, 1753167236, 1386275462, 3080475397, 2857371447, 1040679964, 2145300060, 2390574316, 1461121720, 2956646967, 4031777805, 4028374788, 33600511, 2920084762, 1018524850, 629373528, 3691585981, 3515945977, 2091462646, 2486323059, 586499841, 988145025, 935516892, 3367335476, 2599673255, 2839830854, 265290510, 3972581182, 2759138881, 3795373465, 1005194799, 847297441, 406762289, 1314163512, 1332590856, 1866599683, 4127851711, 750260880, 613907577, 1450815602, 3165620655, 3734664991, 3650291728, 3012275730, 3704569646, 1427272223, 778793252, 1343938022, 2676280711, 2052605720, 1946737175, 3164576444, 3914038668, 3967478842, 3682934266, 1661551462, 3294938066, 4011595847, 840292616, 3712170807, 616741398, 312560963, 711312465, 1351876610, 322626781, 1910503582, 271666773, 2175563734, 1594956187, 70604529, 3617834859, 1007753275, 1495573769, 4069517037, 2549218298, 2663038764, 504708206, 2263041392, 3941167025, 2249088522, 1514023603, 1998579484, 1312622330, 694541497, 2582060303, 2151582166, 1382467621, 776784248, 2618340202, 3323268794, 2497899128, 2784771155, 503983604, 4076293799, 907881277, 423175695, 432175456, 1378068232, 4145222326, 3954048622, 3938656102, 3820766613, 2793130115, 2977904593, 26017576, 3274890735, 3194772133, 1700274565, 1756076034, 4006520079, 3677328699, 720338349, 1533947780, 354530856, 688349552, 3973924725, 1637815568, 332179504, 3949051286, 53804574, 2852348879, 3044236432, 1282449977, 3583942155, 3416972820, 4006381244, 1617046695, 2628476075, 3002303598, 1686838959, 431878346, 2686675385, 1700445008, 1080580658, 1009431731, 832498133, 3223435511, 2605976345, 2271191193, 2516031870, 1648197032, 4164389018, 2548247927, 300782431, 375919233, 238389289, 3353747414, 2531188641, 2019080857, 1475708069, 455242339, 2609103871, 448939670, 3451063019, 1395535956, 2413381860, 1841049896, 1491858159, 885456874, 4264095073, 4001119347, 1565136089, 3898914787, 1108368660, 540939232, 1173283510, 2745871338, 3681308437, 4207628240, 3343053890, 4016749493, 1699691293, 1103962373, 3625875870, 2256883143, 3830138730, 1031889488, 3479347698, 1535977030, 4236805024, 3251091107, 2132092099, 1774941330, 1199868427, 1452454533, 157007616, 2904115357, 342012276, 595725824, 1480756522, 206960106, 497939518, 591360097, 863170706, 2375253569, 3596610801, 1814182875, 2094937945, 3421402208, 1082520231, 3463918190, 2785509508, 435703966, 3908032597, 1641649973, 2842273706, 3305899714, 1510255612, 2148256476, 2655287854, 3276092548, 4258621189, 236887753, 3681803219, 274041037, 1734335097, 3815195456, 3317970021, 1899903192, 1026095262, 4050517792, 356393447, 2410691914, 3873677099, 3682840055]),
                c = new Uint32Array([3913112168, 2491498743, 4132185628, 2489919796, 1091903735, 1979897079, 3170134830, 3567386728, 3557303409, 857797738, 1136121015, 1342202287, 507115054, 2535736646, 337727348, 3213592640, 1301675037, 2528481711, 1895095763, 1721773893, 3216771564, 62756741, 2142006736, 835421444, 2531993523, 1442658625, 3659876326, 2882144922, 676362277, 1392781812, 170690266, 3921047035, 1759253602, 3611846912, 1745797284, 664899054, 1329594018, 3901205900, 3045908486, 2062866102, 2865634940, 3543621612, 3464012697, 1080764994, 553557557, 3656615353, 3996768171, 991055499, 499776247, 1265440854, 648242737, 3940784050, 980351604, 3713745714, 1749149687, 3396870395, 4211799374, 3640570775, 1161844396, 3125318951, 1431517754, 545492359, 4268468663, 3499529547, 1437099964, 2702547544, 3433638243, 2581715763, 2787789398, 1060185593, 1593081372, 2418618748, 4260947970, 69676912, 2159744348, 86519011, 2512459080, 3838209314, 1220612927, 3339683548, 133810670, 1090789135, 1078426020, 1569222167, 845107691, 3583754449, 4072456591, 1091646820, 628848692, 1613405280, 3757631651, 526609435, 236106946, 48312990, 2942717905, 3402727701, 1797494240, 859738849, 992217954, 4005476642, 2243076622, 3870952857, 3732016268, 765654824, 3490871365, 2511836413, 1685915746, 3888969200, 1414112111, 2273134842, 3281911079, 4080962846, 172450625, 2569994100, 980381355, 4109958455, 2819808352, 2716589560, 2568741196, 3681446669, 3329971472, 1835478071, 660984891, 3704678404, 4045999559, 3422617507, 3040415634, 1762651403, 1719377915, 3470491036, 2693910283, 3642056355, 3138596744, 1364962596, 2073328063, 1983633131, 926494387, 3423689081, 2150032023, 4096667949, 1749200295, 3328846651, 309677260, 2016342300, 1779581495, 3079819751, 111262694, 1274766160, 443224088, 298511866, 1025883608, 3806446537, 1145181785, 168956806, 3641502830, 3584813610, 1689216846, 3666258015, 3200248200, 1692713982, 2646376535, 4042768518, 1618508792, 1610833997, 3523052358, 4130873264, 2001055236, 3610705100, 2202168115, 4028541809, 2961195399, 1006657119, 2006996926, 3186142756, 1430667929, 3210227297, 1314452623, 4074634658, 4101304120, 2273951170, 1399257539, 3367210612, 3027628629, 1190975929, 2062231137, 2333990788, 2221543033, 2438960610, 1181637006, 548689776, 2362791313, 3372408396, 3104550113, 3145860560, 296247880, 1970579870, 3078560182, 3769228297, 1714227617, 3291629107, 3898220290, 166772364, 1251581989, 493813264, 448347421, 195405023, 2709975567, 677966185, 3703036547, 1463355134, 2715995803, 1338867538, 1343315457, 2802222074, 2684532164, 233230375, 2599980071, 2000651841, 3277868038, 1638401717, 4028070440, 3237316320, 6314154, 819756386, 300326615, 590932579, 1405279636, 3267499572, 3150704214, 2428286686, 3959192993, 3461946742, 1862657033, 1266418056, 963775037, 2089974820, 2263052895, 1917689273, 448879540, 3550394620, 3981727096, 150775221, 3627908307, 1303187396, 508620638, 2975983352, 2726630617, 1817252668, 1876281319, 1457606340, 908771278, 3720792119, 3617206836, 2455994898, 1729034894, 1080033504]),
                o = new Uint32Array([976866871, 3556439503, 2881648439, 1522871579, 1555064734, 1336096578, 3548522304, 2579274686, 3574697629, 3205460757, 3593280638, 3338716283, 3079412587, 564236357, 2993598910, 1781952180, 1464380207, 3163844217, 3332601554, 1699332808, 1393555694, 1183702653, 3581086237, 1288719814, 691649499, 2847557200, 2895455976, 3193889540, 2717570544, 1781354906, 1676643554, 2592534050, 3230253752, 1126444790, 2770207658, 2633158820, 2210423226, 2615765581, 2414155088, 3127139286, 673620729, 2805611233, 1269405062, 4015350505, 3341807571, 4149409754, 1057255273, 2012875353, 2162469141, 2276492801, 2601117357, 993977747, 3918593370, 2654263191, 753973209, 36408145, 2530585658, 25011837, 3520020182, 2088578344, 530523599, 2918365339, 1524020338, 1518925132, 3760827505, 3759777254, 1202760957, 3985898139, 3906192525, 674977740, 4174734889, 2031300136, 2019492241, 3983892565, 4153806404, 3822280332, 352677332, 2297720250, 60907813, 90501309, 3286998549, 1016092578, 2535922412, 2839152426, 457141659, 509813237, 4120667899, 652014361, 1966332200, 2975202805, 55981186, 2327461051, 676427537, 3255491064, 2882294119, 3433927263, 1307055953, 942726286, 933058658, 2468411793, 3933900994, 4215176142, 1361170020, 2001714738, 2830558078, 3274259782, 1222529897, 1679025792, 2729314320, 3714953764, 1770335741, 151462246, 3013232138, 1682292957, 1483529935, 471910574, 1539241949, 458788160, 3436315007, 1807016891, 3718408830, 978976581, 1043663428, 3165965781, 1927990952, 4200891579, 2372276910, 3208408903, 3533431907, 1412390302, 2931980059, 4132332400, 1947078029, 3881505623, 4168226417, 2941484381, 1077988104, 1320477388, 886195818, 18198404, 3786409e3, 2509781533, 112762804, 3463356488, 1866414978, 891333506, 18488651, 661792760, 1628790961, 3885187036, 3141171499, 876946877, 2693282273, 1372485963, 791857591, 2686433993, 3759982718, 3167212022, 3472953795, 2716379847, 445679433, 3561995674, 3504004811, 3574258232, 54117162, 3331405415, 2381918588, 3769707343, 4154350007, 1140177722, 4074052095, 668550556, 3214352940, 367459370, 261225585, 2610173221, 4209349473, 3468074219, 3265815641, 314222801, 3066103646, 3808782860, 282218597, 3406013506, 3773591054, 379116347, 1285071038, 846784868, 2669647154, 3771962079, 3550491691, 2305946142, 453669953, 1268987020, 3317592352, 3279303384, 3744833421, 2610507566, 3859509063, 266596637, 3847019092, 517658769, 3462560207, 3443424879, 370717030, 4247526661, 2224018117, 4143653529, 4112773975, 2788324899, 2477274417, 1456262402, 2901442914, 1517677493, 1846949527, 2295493580, 3734397586, 2176403920, 1280348187, 1908823572, 3871786941, 846861322, 1172426758, 3287448474, 3383383037, 1655181056, 3139813346, 901632758, 1897031941, 2986607138, 3066810236, 3447102507, 1393639104, 373351379, 950779232, 625454576, 3124240540, 4148612726, 2007998917, 544563296, 2244738638, 2330496472, 2058025392, 1291430526, 424198748, 50039436, 29584100, 3605783033, 2429876329, 2791104160, 1057563949, 3255363231, 3075367218, 3463963227, 1469046755, 985887462]),
                h = new Uint32Array([608135816, 2242054355, 320440878, 57701188, 2752067618, 698298832, 137296536, 3964562569, 1160258022, 953160567, 3193202383, 887688300, 3232508343, 3380367581, 1065670069, 3041331479, 2450970073, 2306472731]);

            function a(t, e) {
                for (let r = 0; r < e.length; r++) t[r] = e[r]
            }

            function u(t) {
                for (let e = 0; e < t.length; e++) t[e] = 0
            }

            function l(t, e) {
                return 16777216 * t[e++] + 65536 * t[e++] + 256 * t[e++] + t[e]
            }

            function f(t, e, r) {
                return t[r++] = e >>> 24, t[r++] = e >>> 16, t[r++] = e >>> 8, t[r++] = e, r
            }
            t.exports = class Blowfish {
                constructor() {
                    this.S = [new Uint32Array(n.length), new Uint32Array(s.length), new Uint32Array(c.length), new Uint32Array(o.length)], this.P = new Uint32Array(h.length), this.block = new Uint32Array(2), this.off = 0
                }
                get blockSize() {
                    return 8
                }
                init(t, e) {
                    return i(Buffer.isBuffer(t)), i(t.length >= 1 && t.length <= 72), null != e && (i(Buffer.isBuffer(e)), i(e.length >= 0 && e.length <= 1096)), a(this.S[0], n), a(this.S[1], s), a(this.S[2], c), a(this.S[3], o), a(this.P, h), this.off = 0, e && e.length > 0 ? this.expandstate(t, e) : this.expand0state(t), this
                }
                encrypt(t, e, r, i) {
                    const n = this.block;
                    return n[0] = l(t, e), n[1] = l(t, e + 4), this.encipher(n, 0), f(r, n[0], i), f(r, n[1], i + 4), this
                }
                decrypt(t, e, r, i) {
                    const n = this.block;
                    return n[0] = l(t, e), n[1] = l(t, e + 4), this.decipher(n, 0), f(r, n[0], i), f(r, n[1], i + 4), this
                }
                destroy() {
                    return u(this.S[0]), u(this.S[1]), u(this.S[2]), u(this.S[3]), u(this.P), u(this.block), this.off = 0, this
                }
                encipher(t, e) {
                    const r = this.P,
                        i = this.S;
                    let n = t[e] ^ r[0],
                        s = t[e + 1],
                        c = 0;
                    for (; c <= 14;) s ^= (i[0][n >>> 24 & 255] + i[1][n >>> 16 & 255] ^ i[2][n >>> 8 & 255]) + i[3][255 & n] ^ r[++c], n ^= (i[0][s >>> 24 & 255] + i[1][s >>> 16 & 255] ^ i[2][s >>> 8 & 255]) + i[3][255 & s] ^ r[++c];
                    t[e] = s ^ r[17], t[e + 1] = n
                }
                decipher(t, e) {
                    const r = this.P,
                        i = this.S;
                    let n = t[e] ^ r[17],
                        s = t[e + 1],
                        c = 17;
                    for (; c >= 3;) s ^= (i[0][n >>> 24 & 255] + i[1][n >>> 16 & 255] ^ i[2][n >>> 8 & 255]) + i[3][255 & n] ^ r[--c], n ^= (i[0][s >>> 24 & 255] + i[1][s >>> 16 & 255] ^ i[2][s >>> 8 & 255]) + i[3][255 & s] ^ r[--c];
                    t[e] = s ^ r[0], t[e + 1] = n
                }
                stream2word(t) {
                    let e = 0;
                    if (0 === t.length) return this.off = 0, e;
                    for (let r = 0; r < 4; r++) this.off >= t.length && (this.off = 0), e *= 256, e += t[this.off], this.off += 1;
                    return e
                }
                expand0state(t) {
                    const e = new Uint32Array(2);
                    this.off = 0;
                    for (let e = 0; e < 18; e++) this.P[e] ^= this.stream2word(t);
                    this.off = 0;
                    for (let t = 0; t < 18; t += 2) this.encipher(e, 0), this.P[t] = e[0], this.P[t + 1] = e[1];
                    for (let t = 0; t < 4; t++)
                        for (let r = 0; r < 256; r += 2) this.encipher(e, 0), this.S[t][r] = e[0], this.S[t][r + 1] = e[1]
                }
                expandstate(t, e) {
                    const r = new Uint32Array(2);
                    this.off = 0;
                    for (let e = 0; e < 18; e++) this.P[e] ^= this.stream2word(t);
                    this.off = 0;
                    for (let t = 0; t < 18; t += 2) r[0] ^= this.stream2word(e), r[1] ^= this.stream2word(e), this.encipher(r, 0), this.P[t] = r[0], this.P[t + 1] = r[1];
                    for (let t = 0; t < 4; t++)
                        for (let i = 0; i < 256; i += 2) r[0] ^= this.stream2word(e), r[1] ^= this.stream2word(e), this.encipher(r, 0), this.S[t][i] = r[0], this.S[t][i + 1] = r[1];
                    this.off = 0
                }
                enc(t) {
                    const e = t.byteLength >>> 3;
                    for (let r = 0; r < e; r++) this.encipher(t, 2 * r)
                }
                dec(t) {
                    const e = t.byteLength >>> 3;
                    for (let r = 0; r < e; r++) this.decipher(t, 2 * r)
                }
            }
        },
        7481: function(t, e, r) {
            "use strict";
            const i = r(5466),
                {
                    curves: n
                } = r(7482),
                s = r(6658),
                c = r(5637),
                o = r(5954),
                h = r(5866),
                a = r(5798),
                u = r(6661),
                l = r(5636),
                f = Buffer.alloc(1);
            class RNG {
                constructor(t) {
                    this.curve = t.curve, this.hash = t.hash, this.chacha = new u, this.iv = Buffer.from("EDDSARNG")
                }
                init(t) {
                    i(Array.isArray(t));
                    const e = new this.hash;
                    e.init();
                    for (const [r, i, n] of t) e.update(this.hash.digest(r)), e.update(i), e.update(n);
                    let r = e.final(32);
                    return r.length > 32 && (r = r.slice(0, 32)), this.chacha.init(r, this.iv, 0), this
                }
                randomBytes(t) {
                    return this.chacha.encrypt(Buffer.alloc(t, 0))
                }
                generate() {
                    return a.random(this, 1, this.curve.n)
                }
            }
            t.exports = class EDDSA {
                constructor(t, e, r, n) {
                    i("string" == typeof t), i(!e || "string" == typeof e), i(r), this.id = t, this.type = "edwards", this.xid = e || null, this.hash = r, this._pre = n || null, this._curve = null, this._x = null, this.native = 0
                }
                get curve() {
                    return this._curve || (this._curve = new n[this.id](this._pre), this._curve.precompute(l), this._pre = null), this._curve
                }
                get x() {
                    if (!this.xid) throw new Error("No equivalent montgomery curve.");
                    return this._x || (this._x = new n[this.xid], this._x.precompute(l)), this._x
                }
                get size() {
                    return this.curve.fieldSize
                }
                get bits() {
                    return this.curve.fieldBits
                }
                hashInt(t, e, ...r) {
                    i(null == t || "boolean" == typeof t), i(null == e || Buffer.isBuffer(e)), i(!e || e.length <= 255);
                    const n = new this.hash;
                    n.init(), this.curve.context || null != t ? (n.update(this.curve.prefix), f[0] = 255 & t, n.update(f), e ? (f[0] = e.length, n.update(f), n.update(e)) : (f[0] = 0, n.update(f))) : i(null == e, "Must pass pre-hash flag with context.");
                    for (const t of r) n.update(t);
                    const s = n.final(2 * this.curve.fieldSize);
                    return a.decode(s, this.curve.endian).imod(this.curve.n)
                }
                privateKeyGenerate() {
                    return l.randomBytes(this.curve.fieldSize)
                }
                scalarGenerate() {
                    const t = l.randomBytes(this.curve.scalarSize);
                    return this.curve.clamp(t)
                }
                privateKeyExpand(t) {
                    i(Buffer.isBuffer(t)), i(t.length === this.curve.fieldSize);
                    const e = this.hash.digest(t, 2 * this.curve.fieldSize);
                    return this.curve.splitHash(e)
                }
                privateKeyConvert(t) {
                    const [e] = this.privateKeyExpand(t);
                    return e
                }
                privateKeyVerify(t) {
                    return i(Buffer.isBuffer(t)), t.length === this.curve.fieldSize
                }
                scalarVerify(t) {
                    return this.curve.isClamped(t)
                }
                scalarClamp(t) {
                    return i(Buffer.isBuffer(t)), i(t.length === this.curve.scalarSize), this.curve.clamp(Buffer.from(t))
                }
                privateKeyExport(t) {
                    if (!this.privateKeyVerify(t)) throw new Error("Invalid private key.");
                    return new c.OctString(t).encode()
                }
                privateKeyImport(t) {
                    const e = c.OctString.decode(t);
                    if (!this.privateKeyVerify(e.value)) throw new Error("Invalid private key.");
                    return e.value
                }
                privateKeyExportPKCS8(t) {
                    return new o.PrivateKeyInfo(0, c.objects.curves[this.id], new c.Null, this.privateKeyExport(t)).encode()
                }
                privateKeyImportPKCS8(t) {
                    const e = o.PrivateKeyInfo.decode(t),
                        r = e.version.toNumber(),
                        {
                            algorithm: n,
                            parameters: s
                        } = e.algorithm;
                    return i(0 === r || 1 === r), i(n.toString() === c.objects.curves[this.id]), i(s.node.type === c.types.NULL), this.privateKeyImport(e.privateKey.value)
                }
                privateKeyExportJWK(t) {
                    return s.privateKeyExportJWK(this, t)
                }
                privateKeyImportJWK(t) {
                    return s.privateKeyImportJWK(this, t)
                }
                scalarTweakAdd(t, e) {
                    const r = this.curve.decodeScalar(t),
                        i = this.curve.decodeScalar(e),
                        n = r.iadd(i).imod(this.curve.n);
                    if (n.isZero()) throw new Error("Invalid scalar.");
                    return this.curve.encodeScalar(n)
                }
                scalarTweakMul(t, e) {
                    const r = this.curve.decodeScalar(t),
                        i = this.curve.decodeScalar(e),
                        n = r.imul(i).imod(this.curve.n);
                    if (n.isZero()) throw new Error("Invalid scalar.");
                    return this.curve.encodeScalar(n)
                }
                scalarReduce(t) {
                    i(Buffer.isBuffer(t)), t.length > this.curve.scalarSize && (t = t.slice(0, this.curve.scalarSize));
                    const e = a.decode(t, this.curve.endian).imod(this.curve.n);
                    return this.curve.encodeScalar(e)
                }
                scalarNegate(t) {
                    const e = this.curve.decodeScalar(t).imod(this.curve.n).ineg().imod(this.curve.n);
                    return this.curve.encodeScalar(e)
                }
                scalarInvert(t) {
                    const e = this.curve.decodeScalar(t).imod(this.curve.n);
                    if (e.isZero()) throw new Error("Invalid scalar.");
                    const r = e.invert(this.curve.n);
                    return this.curve.encodeScalar(r)
                }
                publicKeyCreate(t) {
                    const e = this.privateKeyConvert(t);
                    return this.publicKeyFromScalar(e)
                }
                publicKeyFromScalar(t) {
                    const e = this.curve.decodeScalar(t).imod(this.curve.n);
                    return this.curve.g.mulBlind(e).encode()
                }
                publicKeyConvert(t) {
                    const e = this.curve.decodePoint(t);
                    return this.x.pointFromEdwards(e).encode()
                }
                publicKeyDeconvert(t, e) {
                    const r = this.x.decodePoint(t);
                    if (!r.validate()) throw new Error("Invalid point.");
                    return this.curve.pointFromMont(r, e).encode()
                }
                publicKeyFromUniform(t) {
                    const e = this.curve.decodeUniform(t);
                    return this.curve.pointFromUniform(this.x, e).encode()
                }
                pointFromUniform(t) {
                    const e = this.x.decodeUniform(t),
                        [r] = this.x.pointFromUniform(e);
                    return r.encode()
                }
                publicKeyToUniform(t) {
                    const e = this.curve.decodePoint(t),
                        r = this.curve.pointToUniform(this.x, e);
                    return this.curve.encodeUniform(r, l)
                }
                pointToUniform(t, e) {
                    const r = this.x.decodePoint(t),
                        i = this.x.pointToUniform(r, e);
                    return this.x.encodeUniform(i, l)
                }
                publicKeyFromHash(t) {
                    return this.curve.pointFromHash(this.x, t).encode()
                }
                pointFromHash(t) {
                    return this.x.pointFromHash(this.curve, t).encode()
                }
                publicKeyVerify(t) {
                    i(Buffer.isBuffer(t));
                    try {
                        this.curve.decodePoint(t)
                    } catch (t) {
                        return !1
                    }
                    return !0
                }
                pointVerify(t) {
                    let e;
                    i(Buffer.isBuffer(t));
                    try {
                        e = this.x.decodePoint(t)
                    } catch (t) {
                        return !1
                    }
                    return e.validate()
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
                    return new h.SubjectPublicKeyInfo(c.objects.curves[this.id], new c.Null, this.publicKeyExport(t)).encode()
                }
                publicKeyImportSPKI(t) {
                    const e = h.SubjectPublicKeyInfo.decode(t),
                        {
                            algorithm: r,
                            parameters: n
                        } = e.algorithm;
                    return i(r.toString() === c.objects.curves[this.id]), i(n.node.type === c.types.NULL), this.publicKeyImport(e.publicKey.rightAlign())
                }
                publicKeyExportJWK(t) {
                    return s.publicKeyExportJWK(this, t)
                }
                publicKeyImportJWK(t) {
                    return s.publicKeyImportJWK(this, t, !1)
                }
                publicKeyTweakAdd(t, e) {
                    const r = this.curve.decodeScalar(e).imod(this.curve.n),
                        i = this.curve.decodePoint(t);
                    return this.curve.g.mul(r).add(i).encode()
                }
                publicKeyTweakMul(t, e) {
                    const r = this.curve.decodeScalar(e);
                    return this.curve.decodePoint(t).mul(r).encode()
                }
                publicKeyAdd(t, e) {
                    const r = this.curve.decodePoint(t),
                        i = this.curve.decodePoint(e);
                    return r.add(i).encode()
                }
                publicKeyCombine(t) {
                    i(Array.isArray(t));
                    let e = this.curve.point();
                    for (const r of t) {
                        const t = this.curve.decodePoint(r);
                        e = e.add(t)
                    }
                    return e.encode()
                }
                publicKeyNegate(t) {
                    return this.curve.decodePoint(t).neg().encode()
                }
                sign(t, e, r, i) {
                    const [n, s] = this.privateKeyExpand(e);
                    return this.signWithScalar(t, n, s, r, i)
                }
                signWithScalar(t, e, r, n, s) {
                    i(Buffer.isBuffer(t)), i(Buffer.isBuffer(r)), i(r.length === this.curve.fieldSize);
                    const c = this.curve.n,
                        o = this.curve.g,
                        h = this.hashInt(n, s, r, t),
                        a = o.mulBlind(h).encode(),
                        u = this.curve.decodeScalar(e),
                        l = o.mulBlind(u).encode(),
                        f = this.hashInt(n, s, a, l, t),
                        [d, p] = this.curve.getBlinding();
                    u.imul(d).imod(c), h.imul(d).imod(c);
                    const y = h.iadd(f.imul(u)).imod(c);
                    return y.imul(p).imod(c), Buffer.concat([a, this.curve.encodeField(y)])
                }
                signTweakAdd(t, e, r, i, n) {
                    const [s, c] = this.privateKeyExpand(e), o = this.scalarTweakAdd(s, r), h = this.hash.multi(c, r, null, 2 * this.curve.fieldSize).slice(0, this.curve.fieldSize);
                    return this.signWithScalar(t, o, h, i, n)
                }
                signTweakMul(t, e, r, i, n) {
                    const [s, c] = this.privateKeyExpand(e), o = this.scalarTweakMul(s, r), h = this.hash.multi(c, r, null, 2 * this.curve.fieldSize).slice(0, this.curve.fieldSize);
                    return this.signWithScalar(t, o, h, i, n)
                }
                verify(t, e, r, n, s) {
                    if (i(Buffer.isBuffer(t)), i(Buffer.isBuffer(e)), i(Buffer.isBuffer(r)), i(null == n || "boolean" == typeof n), i(null == s || Buffer.isBuffer(s)), i(!s || s.length <= 255), this.curve.context || null == s || i(null != n, "Must pass pre-hash flag with context."), e.length !== 2 * this.curve.fieldSize) return !1;
                    if (r.length !== this.curve.fieldSize) return !1;
                    try {
                        return this.curve.context ? this._verifySingle(t, e, r, n, s) : this._verify(t, e, r, n, s)
                    } catch (t) {
                        return !1
                    }
                }
                _verify(t, e, r, i, n) {
                    const s = this.curve.n,
                        c = this.curve.g,
                        o = e.slice(0, this.curve.fieldSize),
                        h = e.slice(this.curve.fieldSize),
                        a = this.curve.decodePoint(o),
                        u = this.curve.decodeField(h),
                        l = this.curve.decodePoint(r);
                    if (u.cmp(s) >= 0) return !1;
                    const f = this.hashInt(i, n, o, r, t);
                    return c.mulAdd(u, l.neg(), f).eq(a)
                }
                verifySingle(t, e, r, n, s) {
                    if (i(Buffer.isBuffer(t)), i(Buffer.isBuffer(e)), i(Buffer.isBuffer(r)), i(null == n || "boolean" == typeof n), i(null == s || Buffer.isBuffer(s)), i(!s || s.length <= 255), this.curve.context || null == s || i(null != n, "Must pass pre-hash flag with context."), e.length !== 2 * this.curve.fieldSize) return !1;
                    if (r.length !== this.curve.fieldSize) return !1;
                    try {
                        return this._verifySingle(t, e, r, n, s)
                    } catch (t) {
                        return !1
                    }
                }
                _verifySingle(t, e, r, i, n) {
                    const s = this.curve.n,
                        c = this.curve.h.toNumber(),
                        o = this.curve.g,
                        h = e.slice(0, this.curve.fieldSize),
                        a = e.slice(this.curve.fieldSize),
                        u = this.curve.decodePoint(h),
                        l = this.curve.decodeField(a),
                        f = this.curve.decodePoint(r);
                    if (l.cmp(s) >= 0) return !1;
                    const d = this.hashInt(i, n, h, r, t),
                        p = l.imuln(c),
                        y = d.imuln(c),
                        v = u.mulH();
                    return o.mulAdd(p, f.neg(), y).eq(v)
                }
                verifyBatch(t, e, r) {
                    i(Array.isArray(t)), i(null == e || "boolean" == typeof e), i(null == r || Buffer.isBuffer(r)), i(!r || r.length <= 255), this.curve.context || null == r || i(null != e, "Must pass pre-hash flag with context.");
                    for (const e of t) {
                        i(Array.isArray(e) && 3 === e.length);
                        const [t, r, n] = e;
                        if (i(Buffer.isBuffer(t)), i(Buffer.isBuffer(r)), i(Buffer.isBuffer(n)), r.length !== 2 * this.curve.fieldSize) return !1;
                        if (n.length !== this.curve.fieldSize) return !1
                    }
                    try {
                        return this._verifyBatch(t, e, r)
                    } catch (t) {
                        return !1
                    }
                }
                _verifyBatch(t, e, r) {
                    const i = this.curve.n,
                        n = this.curve.h.toNumber(),
                        s = this.curve.g,
                        c = new RNG(this),
                        o = new Array(1 + 2 * t.length),
                        h = new Array(1 + 2 * t.length),
                        u = new a(0);
                    c.init(t), o[0] = s, h[0] = u;
                    for (let s = 0; s < t.length; s++) {
                        const [l, f, d] = t[s], p = f.slice(0, this.curve.fieldSize), y = f.slice(this.curve.fieldSize), v = this.curve.decodePoint(p), w = this.curve.decodeField(y), g = this.curve.decodePoint(d);
                        if (w.cmp(i) >= 0) return !1;
                        const m = this.hashInt(e, r, p, d, l),
                            b = 0 === s ? new a(1) : c.generate(),
                            k = m.imul(b).imod(i);
                        u.iadd(w.imul(b)).imod(i), o[1 + 2 * s + 0] = v, h[1 + 2 * s + 0] = b.imuln(n), o[1 + 2 * s + 1] = g, h[1 + 2 * s + 1] = k.imuln(n)
                    }
                    return u.ineg().imod(i), u.imuln(n), this.curve.mulAll(o, h).isInfinity()
                }
                derive(t, e) {
                    const r = this.privateKeyConvert(e);
                    return this.deriveWithScalar(t, r)
                }
                deriveWithScalar(t, e) {
                    const r = this.curve.decodeScalar(e),
                        i = this.curve.decodePoint(t),
                        n = this.curve.reduce(r);
                    return i.mulConst(n, l).encode()
                }
                exchange(t, e) {
                    const r = this.privateKeyConvert(e);
                    return this.exchangeWithScalar(t, r)
                }
                exchangeWithScalar(t, e) {
                    const r = this.x.decodeScalar(e),
                        i = this.x.decodePoint(t),
                        n = this.x.reduce(r);
                    return i.mulConst(n, l).encode()
                }
            }
        },
        9968: function(t, e, r) {
            "use strict";
            const i = r(5466),
                n = Buffer.alloc(16, 0),
                s = new Uint16Array([0, 7200, 14400, 9312, 28800, 27808, 18624, 21728, 57600, 64800, 55616, 50528, 37248, 36256, 43456, 46560]);
            class GHASH {
                constructor() {
                    this.state = new Uint32Array(4), this.block = Buffer.allocUnsafe(16), this.size = -1, this.adLen = 0, this.ctLen = 0, this.table = [];
                    for (let t = 0; t < 16; t++) this.table.push(new Uint32Array(4))
                }
                init(t) {
                    i(Buffer.isBuffer(t)), i(16 === t.length);
                    for (let t = 0; t < 4; t++) this.state[t] = 0;
                    this.block.fill(0), this.size = 0, this.adLen = 0, this.ctLen = 0;
                    for (let t = 0; t < 16; t++)
                        for (let e = 0; e < 4; e++) this.table[t][e] = 0;
                    const e = new Uint32Array(4);
                    e[1] = a(t, 0), e[0] = a(t, 4), e[3] = a(t, 8), e[2] = a(t, 12), this.table[h(1)] = e;
                    for (let t = 2; t < 16; t += 2) this.table[h(t)] = this.double(this.table[h(t >>> 1)]), this.table[h(t + 1)] = this.add(this.table[h(t)], e);
                    return this
                }
                absorb(t) {
                    return this._absorb(t, t.length), this
                }
                _absorb(t, e) {
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
                transform(t, e) {
                    this.state[1] ^= a(t, e + 0), this.state[0] ^= a(t, e + 4), this.state[3] ^= a(t, e + 8), this.state[2] ^= a(t, e + 12), this.mul(this.state)
                }
                pad() {
                    const t = 15 & this.size;
                    0 !== t && this._absorb(n, 16 - t)
                }
                aad(t) {
                    return i(Buffer.isBuffer(t)), i(0 === this.ctLen), this.adLen += t.length, this.absorb(t)
                }
                update(t) {
                    return i(Buffer.isBuffer(t)), 0 === t.length ? this : (0 === this.ctLen && this.pad(), this.ctLen += t.length, this.absorb(t))
                }
                final() {
                    const t = Buffer.allocUnsafe(16);
                    this.pad();
                    const e = 8 * this.adLen,
                        r = 8 * this.ctLen;
                    this.state[1] ^= c(e), this.state[0] ^= o(e), this.state[3] ^= c(r), this.state[2] ^= o(r), this.mul(this.state), u(t, this.state[1], 0), u(t, this.state[0], 4), u(t, this.state[3], 8), u(t, this.state[2], 12);
                    for (let t = 0; t < 4; t++) this.state[t] = 0;
                    this.block.fill(0), this.size = -1, this.adLen = 0, this.ctLen = 0;
                    for (let t = 0; t < 16; t++)
                        for (let e = 0; e < 4; e++) this.table[t][e] = 0;
                    return t
                }
                add(t, e) {
                    i(t instanceof Uint32Array), i(4 === t.length), i(e instanceof Uint32Array), i(4 === e.length);
                    const r = new Uint32Array(4);
                    return r[0] = t[0] ^ e[0], r[1] = t[1] ^ e[1], r[2] = t[2] ^ e[2], r[3] = t[3] ^ e[3], r
                }
                double(t) {
                    i(t instanceof Uint32Array), i(4 === t.length);
                    const e = new Uint32Array(4),
                        r = 1 == (1 & t[2]);
                    let n;
                    return e[3] = t[3], e[2] = t[2], n = 1 & e[3], e[3] >>>= 1, e[2] >>>= 1, e[2] |= n << 31, e[3] |= (1 & t[0]) << 31, e[1] = t[1], e[0] = t[0], n = 1 & e[1], e[1] >>>= 1, e[0] >>>= 1, e[0] |= n << 31, r && (e[1] ^= 3774873600, e[0] ^= 0), e
                }
                mul(t) {
                    i(t instanceof Uint32Array), i(4 === t.length);
                    const e = new Uint32Array(4),
                        r = new Uint32Array(2);
                    let n, c;
                    for (let i = 0; i < 2; i++) {
                        r[0] = t[2], r[1] = t[3], 1 === i && (r[0] = t[0], r[1] = t[1]);
                        for (let t = 0; t < 64; t += 4) {
                            const t = 15 & e[2];
                            n = 15 & e[3], e[3] >>>= 4, e[2] >>>= 4, e[2] |= n << 28, e[3] |= e[0] << 28, n = 15 & e[1], e[1] >>>= 4, e[0] >>>= 4, e[0] |= n << 28, e[1] ^= s[t] << 16, c = this.table[15 & r[0]], e[0] ^= c[0], e[1] ^= c[1], e[2] ^= c[2], e[3] ^= c[3], n = 15 & r[1], r[1] >>>= 4, r[0] >>>= 4, r[0] |= n << 28
                        }
                    }
                    t[0] = e[0], t[1] = e[1], t[2] = e[2], t[3] = e[3]
                }
            }
            class CTR {
                constructor(t) {
                    if (i(t && "object" == typeof t), i("number" == typeof t.blockSize), 16 !== t.blockSize) throw new Error("GCM only available with a 128 bit block size.");
                    this.ctx = t, this.state = Buffer.alloc(16, 0), this.block = Buffer.alloc(16, 0), this.pos = 0
                }
                get blockSize() {
                    return 16
                }
                init(t, e, r) {
                    return this.initKey(t), this.initIV(e, r), this
                }
                initKey(t) {
                    return this.ctx.init(t), this.state.fill(0), this.pos = 0, this
                }
                initIV(t, e) {
                    return i(Buffer.isBuffer(t)), i(12 === t.length || 16 === t.length), t.copy(this.state, 0), 16 !== t.length && this.setCounter(e), this
                }
                encrypt(t) {
                    return this.crypt(t, t)
                }
                crypt(t, e) {
                    if (i(Buffer.isBuffer(t)), i(Buffer.isBuffer(e)), e.length < t.length) throw new Error("Invalid output size.");
                    for (let r = 0; r < t.length; r++) 0 == (15 & this.pos) && (this._block(), this.pos = 0), e[r] = t[r] ^ this.block[this.pos++];
                    return e
                }
                _block() {
                    this.ctx.encrypt(this.state, 0, this.block, 0);
                    for (let t = 15; t >= 12 && (this.state[t] += 1, 0 === this.state[t]); t--);
                }
                setCounter(t) {
                    return null == t && (t = 0), i(t >>> 0 === t), u(this.state, t, 12), this
                }
                getCounter() {
                    return a(this.state, 12)
                }
                destroy() {
                    return this.ctx.destroy(), this.state.fill(0), this.block.fill(0), this.pos = 0, this
                }
            }
            class GCM {
                constructor(t) {
                    this.cipher = new CTR(t), this.mac = new GHASH, this.mask = Buffer.alloc(16, 0)
                }
                init(t, e) {
                    const r = Buffer.alloc(16, 0);
                    return this.cipher.initKey(t), this.cipher.encrypt(r), this.mac.init(r), 12 !== e.length && (this.mac.update(e), e = this.mac.final(), this.mac.init(r)), this.cipher.initIV(e, 1), 16 !== e.length && i(1 === this.cipher.getCounter()), this.cipher.encrypt(this.mask), this
                }
                aad(t) {
                    return this.mac.aad(t), this
                }
                encrypt(t) {
                    return this.cipher.encrypt(t), this.mac.update(t), t
                }
                decrypt(t) {
                    return this.mac.update(t), this.cipher.encrypt(t), t
                }
                auth(t) {
                    return this.mac.update(t), t
                }
                final(t = 16) {
                    i(t >>> 0 === t), i(4 === t || 8 === t || t >= 12 && t <= 16);
                    const e = this.mac.final();
                    for (let t = 0; t < 16; t++) e[t] ^= this.mask[t];
                    return e.slice(0, t)
                }
                static encrypt(t, e, r, i) {
                    const n = new GCM;
                    return n.init(t, e), i && n.aad(i), n.encrypt(r), n.final()
                }
                static decrypt(t, e, r, i, n) {
                    const s = new GCM;
                    return s.init(t, e), n && s.aad(n), s.decrypt(r), GCM.verify(s.final(), i)
                }
                static auth(t, e, r, i, n) {
                    const s = new GCM;
                    return s.init(t, e), n && s.aad(n), s.auth(r), GCM.verify(s.final(), i)
                }
                static verify(t, e) {
                    i(Buffer.isBuffer(t)), i(Buffer.isBuffer(e)), i(t.length === e.length);
                    let r = 0;
                    for (let i = 0; i < t.length; i++) r |= t[i] ^ e[i];
                    return r = r - 1 >>> 31, 0 != (1 & r)
                }
            }

            function c(t) {
                return t * (1 / 4294967296) >>> 0
            }

            function o(t) {
                return t >>> 0
            }

            function h(t) {
                return t = (t &= 15) << 2 & 12 | t >>> 2 & 3, t = (t &= 15) << 1 & 10 | t >>> 1 & 5, t &= 15
            }

            function a(t, e) {
                return 16777216 * t[e++] + 65536 * t[e++] + 256 * t[e++] + t[e++]
            }

            function u(t, e, r) {
                return t[r++] = e >>> 24, t[r++] = e >>> 16, t[r++] = e >>> 8, t[r++] = e, r
            }
            e.GHASH = GHASH, e.CTR = CTR, e.GCM = GCM
        },
        9984: function(t, e, r) {
            "use strict";
            const i = r(7481),
                n = r(6084),
                s = r(9989);
            t.exports = new i("ED25519", "X25519", n, s)
        },
        9990: function(t, e, r) {
            "use strict";
            const i = r(5466),
                n = r(9991),
                s = r(7473),
                c = r(7472),
                o = r(7476),
                h = r(9992),
                a = r(9993),
                {
                    DES: u,
                    EDE: l,
                    EDE3: f
                } = r(9994),
                d = r(9995),
                p = r(9996),
                y = r(9997);
            class CipherBase {
                constructor(t, e) {
                    i("string" == typeof t), i("boolean" == typeof e), this.encrypt = e, this.ctx = null, this._init(t)
                }
                _init(t) {
                    i("string" == typeof t);
                    const e = n.get(t),
                        r = s.get(e.mode, this.encrypt);
                    switch (e.algorithm) {
                        case "AES-128":
                        case "AES-192":
                        case "AES-256": {
                            const t = 8 * e.keySize;
                            this.ctx = new r(new c(t));
                            break
                        }
                        case "BF":
                            this.ctx = new r(new o);
                            break;
                        case "CAMELLIA-128":
                        case "CAMELLIA-192":
                        case "CAMELLIA-256": {
                            const t = 8 * e.keySize;
                            this.ctx = new r(new h(t));
                            break
                        }
                        case "CAST5":
                            this.ctx = new r(new a);
                            break;
                        case "DES":
                            this.ctx = new r(new u);
                            break;
                        case "DES-EDE":
                            this.ctx = new r(new l);
                            break;
                        case "DES-EDE3":
                            this.ctx = new r(new f);
                            break;
                        case "IDEA":
                            this.ctx = new r(new d);
                            break;
                        case "RC2-64":
                            this.ctx = new r(new p);
                            break;
                        case "TWOFISH-128":
                        case "TWOFISH-192":
                        case "TWOFISH-256": {
                            const t = 8 * e.keySize;
                            this.ctx = new r(new y(t));
                            break
                        }
                        default:
                            throw new Error(`Unsupported cipher: ${e.name}.`)
                    }
                    return this
                }
                init(t, e) {
                    return this.ctx.init(t, e), this
                }
                update(t) {
                    return this.ctx.update(t)
                }
                final() {
                    return this.ctx.final()
                }
                setAAD(t) {
                    return i(this.ctx), this.ctx.setAAD(t), this
                }
                getAuthTag() {
                    return i(this.ctx), i(this.encrypt), this.ctx.getAuthTag()
                }
                setAuthTag(t) {
                    return i(this.ctx), i(!this.encrypt), this.ctx.setAuthTag(t), this
                }
            }
            class Cipher extends CipherBase {
                constructor(t) {
                    super(t, !0)
                }
            }
            class Decipher extends CipherBase {
                constructor(t) {
                    super(t, !1)
                }
            }
            e.native = 0, e._CipherBase = CipherBase, e.Cipher = Cipher, e.Decipher = Decipher, e.info = n.info, e.get = n.get, e.has = n.has, e.encrypt = function(t, e, r, i) {
                const n = new Cipher(t);
                return n.init(e, r), Buffer.concat([n.update(i), n.final()])
            }, e.decrypt = function(t, e, r, i) {
                const n = new Decipher(t);
                return n.init(e, r), Buffer.concat([n.update(i), n.final()])
            }
        },
        9992: function(t, e, r) {
            "use strict";
            const i = r(5466),
                n = new Uint32Array([2694735487, 1003262091, 3061508184, 1286239154, 3337565999, 3914302142, 1426019237, 4057165596, 283453434, 3731369245, 2958461122, 3018244605]),
                s = new Uint32Array([1886416896, 2189591040, 741092352, 3974949888, 3014898432, 656877312, 3233857536, 3857048832, 3840205824, 2240120064, 1465341696, 892679424, 3941263872, 202116096, 2930683392, 1094795520, 589505280, 4025478912, 1802201856, 2475922176, 1162167552, 421075200, 2779096320, 555819264, 3991792896, 235802112, 1330597632, 1313754624, 488447232, 1701143808, 2459079168, 3183328512, 2256963072, 3099113472, 2947526400, 2408550144, 2088532992, 3958106880, 522133248, 3469659648, 1044266496, 808464384, 3705461760, 1600085760, 1583242752, 3318072576, 185273088, 437918208, 2795939328, 3789676800, 960051456, 3402287616, 3587560704, 1195853568, 1566399744, 1027423488, 3654932736, 16843008, 1515870720, 3604403712, 1364283648, 1448498688, 1819044864, 1296911616, 2341178112, 218959104, 2593823232, 1717986816, 4227595008, 3435973632, 2964369408, 757935360, 1953788928, 303174144, 724249344, 538976256, 4042321920, 2981212416, 2223277056, 2576980224, 3755990784, 1280068608, 3419130624, 3267543552, 875836416, 2122219008, 1987474944, 84215040, 1835887872, 3082270464, 2846468352, 825307392, 3520188672, 387389184, 67372032, 3621246720, 336860160, 1482184704, 976894464, 1633771776, 3739147776, 454761216, 286331136, 471604224, 842150400, 252645120, 2627509248, 370546176, 1397969664, 404232192, 4076007936, 572662272, 4278124032, 1145324544, 3486502656, 2998055424, 3284386560, 3048584448, 2054846976, 2442236160, 606348288, 134744064, 3907577856, 2829625344, 1616928768, 4244438016, 1768515840, 1347440640, 2863311360, 3503345664, 2694881280, 2105376e3, 2711724288, 2307492096, 1650614784, 2543294208, 1414812672, 1532713728, 505290240, 2509608192, 3772833792, 4294967040, 1684300800, 3537031680, 269488128, 3301229568, 0, 1212696576, 2745410304, 4160222976, 1970631936, 3688618752, 2324335104, 50529024, 3873891840, 3671775744, 151587072, 1061109504, 3722304768, 2492765184, 2273806080, 1549556736, 2206434048, 33686016, 3452816640, 1246382592, 2425393152, 858993408, 1936945920, 1734829824, 4143379968, 4092850944, 2644352256, 2139062016, 3217014528, 3806519808, 1381126656, 2610666240, 3638089728, 640034304, 3368601600, 926365440, 3334915584, 993737472, 2172748032, 2526451200, 1869573888, 1263225600, 320017152, 3200171520, 1667457792, 774778368, 3924420864, 2038003968, 2812782336, 2358021120, 2678038272, 1852730880, 3166485504, 2391707136, 690563328, 4126536960, 4193908992, 3065427456, 791621376, 4261281024, 3031741440, 1499027712, 2021160960, 2560137216, 101058048, 1785358848, 3890734848, 1179010560, 1903259904, 3132799488, 3570717696, 623191296, 2880154368, 1111638528, 2290649088, 2728567296, 2374864128, 4210752e3, 1920102912, 117901056, 3115956480, 1431655680, 4177065984, 4008635904, 2896997376, 168430080, 909522432, 1229539584, 707406336, 1751672832, 1010580480, 943208448, 4059164928, 2762253312, 1077952512, 673720320, 3553874688, 2071689984, 3149642496, 3385444608, 1128481536, 3250700544, 353703168, 3823362816, 2913840384, 4109693952, 2004317952, 3351758592, 2155905024, 2661195264]),
                c = new Uint32Array([14737632, 328965, 5789784, 14277081, 6776679, 5131854, 8487297, 13355979, 13224393, 723723, 11447982, 6974058, 14013909, 1579032, 6118749, 8553090, 4605510, 14671839, 14079702, 2565927, 9079434, 3289650, 4934475, 4342338, 14408667, 1842204, 10395294, 10263708, 3815994, 13290186, 2434341, 8092539, 855309, 7434609, 6250335, 2039583, 16316664, 14145495, 4079166, 10329501, 8158332, 6316128, 12171705, 12500670, 12369084, 9145227, 1447446, 3421236, 5066061, 12829635, 7500402, 9803157, 11250603, 9342606, 12237498, 8026746, 11776947, 131586, 11842740, 11382189, 10658466, 11316396, 14211288, 10132122, 1513239, 1710618, 3487029, 13421772, 16250871, 10066329, 6381921, 5921370, 15263976, 2368548, 5658198, 4210752, 14803425, 6513507, 592137, 3355443, 12566463, 10000536, 9934743, 8750469, 6842472, 16579836, 15527148, 657930, 14342874, 7303023, 5460819, 6447714, 10724259, 3026478, 526344, 11513775, 2631720, 11579568, 7631988, 12763842, 12434877, 3552822, 2236962, 3684408, 6579300, 1973790, 3750201, 2894892, 10921638, 3158064, 15066597, 4473924, 16645629, 8947848, 10461087, 6645093, 8882055, 7039851, 16053492, 2302755, 4737096, 1052688, 13750737, 5329233, 12632256, 16382457, 13816530, 10526880, 5592405, 10592673, 4276545, 16448250, 4408131, 1250067, 12895428, 3092271, 11053224, 11974326, 3947580, 2829099, 12698049, 16777215, 13158600, 10855845, 2105376, 9013641, 0, 9474192, 4671303, 15724527, 15395562, 12040119, 1381653, 394758, 13487565, 11908533, 1184274, 8289918, 12303291, 2697513, 986895, 12105912, 460551, 263172, 10197915, 9737364, 2171169, 6710886, 15132390, 13553358, 15592941, 15198183, 3881787, 16711422, 8355711, 12961221, 10790052, 3618615, 11645361, 5000268, 9539985, 7237230, 9276813, 7763574, 197379, 2960685, 14606046, 9868950, 2500134, 8224125, 13027014, 6052956, 13882323, 15921906, 5197647, 1644825, 4144959, 14474460, 7960953, 1907997, 5395026, 15461355, 15987699, 7171437, 6184542, 16514043, 6908265, 11711154, 15790320, 3223857, 789516, 13948116, 13619151, 9211020, 14869218, 7697781, 11119017, 4868682, 5723991, 8684676, 1118481, 4539717, 1776411, 16119285, 15000804, 921102, 7566195, 11184810, 15856113, 14540253, 5855577, 1315860, 7105644, 9605778, 5526612, 13684944, 7895160, 7368816, 14935011, 4802889, 8421504, 5263440, 10987431, 16185078, 7829367, 9671571, 8816262, 8618883, 2763306, 13092807, 5987163, 15329769, 15658734, 9408399, 65793, 4013373]),
                o = new Uint32Array([939538488, 1090535745, 369104406, 1979741814, 3640711641, 2466288531, 1610637408, 4060148466, 1912631922, 3254829762, 2868947883, 2583730842, 1962964341, 100664838, 1459640151, 2684395680, 2432733585, 4144035831, 3036722613, 3372272073, 2717950626, 2348846220, 3523269330, 2415956112, 4127258358, 117442311, 2801837991, 654321447, 2382401166, 2986390194, 1224755529, 3724599006, 1124090691, 1543527516, 3607156695, 3338717127, 1040203326, 4110480885, 2399178639, 1728079719, 520101663, 402659352, 1845522030, 2936057775, 788541231, 3791708898, 2231403909, 218107149, 1392530259, 4026593520, 2617285788, 1694524773, 3925928682, 2734728099, 2919280302, 2650840734, 3959483628, 2147516544, 754986285, 1795189611, 2818615464, 721431339, 905983542, 2785060518, 3305162181, 2248181382, 1291865421, 855651123, 4244700669, 1711302246, 1476417624, 2516620950, 973093434, 150997257, 2499843477, 268439568, 2013296760, 3623934168, 1107313218, 3422604492, 4009816047, 637543974, 3842041317, 1627414881, 436214298, 1056980799, 989870907, 2181071490, 3053500086, 3674266587, 3556824276, 2550175896, 3892373736, 2332068747, 33554946, 3942706155, 167774730, 738208812, 486546717, 2952835248, 1862299503, 2365623693, 2281736328, 234884622, 419436825, 2264958855, 1308642894, 184552203, 2835392937, 201329676, 2030074233, 285217041, 2130739071, 570434082, 3875596263, 1493195097, 3774931425, 3657489114, 1023425853, 3355494600, 301994514, 67109892, 1946186868, 1409307732, 805318704, 2113961598, 3019945140, 671098920, 1426085205, 1744857192, 1342197840, 3187719870, 3489714384, 3288384708, 822096177, 3405827019, 704653866, 2902502829, 251662095, 3389049546, 1879076976, 4278255615, 838873650, 1761634665, 134219784, 1644192354, 0, 603989028, 3506491857, 4211145723, 3120609978, 3976261101, 1157645637, 2164294017, 1929409395, 1828744557, 2214626436, 2667618207, 3993038574, 1241533002, 3271607235, 771763758, 3238052289, 16777473, 3858818790, 620766501, 1207978056, 2566953369, 3103832505, 3003167667, 2063629179, 4177590777, 3456159438, 3204497343, 3741376479, 1895854449, 687876393, 3439381965, 1811967084, 318771987, 1677747300, 2600508315, 1660969827, 2634063261, 3221274816, 1258310475, 3070277559, 2768283045, 2298513801, 1593859935, 2969612721, 385881879, 4093703412, 3154164924, 3540046803, 1174423110, 3472936911, 922761015, 1577082462, 1191200583, 2483066004, 4194368250, 4227923196, 1526750043, 2533398423, 4261478142, 1509972570, 2885725356, 1006648380, 1275087948, 50332419, 889206069, 4076925939, 587211555, 3087055032, 1560304989, 1778412138, 2449511058, 3573601749, 553656609, 1140868164, 1358975313, 3321939654, 2097184125, 956315961, 2197848963, 3691044060, 2852170410, 2080406652, 1996519287, 1442862678, 83887365, 452991771, 2751505572, 352326933, 872428596, 503324190, 469769244, 4160813304, 1375752786, 536879136, 335549460, 3909151209, 3170942397, 3707821533, 3825263844, 2701173153, 3758153952, 2315291274, 4043370993, 3590379222, 2046851706, 3137387451, 3808486371, 1073758272, 1325420367]),
                h = new Uint32Array([1886388336, 741081132, 3014852787, 3233808576, 3840147684, 1465319511, 3941204202, 2930639022, 589496355, 1802174571, 1162149957, 2779054245, 3991732461, 1330577487, 488439837, 2459041938, 2256928902, 2947481775, 2088501372, 522125343, 1044250686, 3705405660, 1583218782, 185270283, 2795896998, 960036921, 3587506389, 1566376029, 3654877401, 1515847770, 1364262993, 1819017324, 2341142667, 2593783962, 4227531003, 2964324528, 1953759348, 724238379, 4042260720, 2223243396, 3755933919, 3419078859, 875823156, 1987444854, 1835860077, 2846425257, 3520135377, 67371012, 336855060, 976879674, 3739091166, 286326801, 842137650, 2627469468, 1397948499, 4075946226, 4278059262, 3486449871, 3284336835, 2054815866, 606339108, 3907518696, 1616904288, 1768489065, 2863268010, 2694840480, 2711683233, 1650589794, 1414791252, 505282590, 3772776672, 1684275300, 269484048, 0, 2745368739, 1970602101, 2324299914, 3873833190, 151584777, 3722248413, 2273771655, 2206400643, 3452764365, 2425356432, 1936916595, 4143317238, 2644312221, 3216965823, 1381105746, 3638034648, 3368550600, 3334865094, 2172715137, 1869545583, 320012307, 1667432547, 3924361449, 2812739751, 2677997727, 3166437564, 690552873, 4193845497, 791609391, 3031695540, 2021130360, 101056518, 3890675943, 1903231089, 3570663636, 2880110763, 2290614408, 2374828173, 1920073842, 3115909305, 4177002744, 2896953516, 909508662, 707395626, 1010565180, 4059103473, 1077936192, 3553820883, 3149594811, 1128464451, 353697813, 2913796269, 2004287607, 2155872384, 2189557890, 3974889708, 656867367, 3856990437, 2240086149, 892665909, 202113036, 1094778945, 4025417967, 2475884691, 421068825, 555810849, 235798542, 1313734734, 1701118053, 3183280317, 3099066552, 2408513679, 3958046955, 3469607118, 808452144, 1600061535, 3318022341, 437911578, 3789619425, 3402236106, 1195835463, 1027407933, 16842753, 3604349142, 1448476758, 1296891981, 218955789, 1717960806, 3435921612, 757923885, 303169554, 538968096, 2981167281, 2576941209, 1280049228, 3267494082, 2122186878, 84213765, 3082223799, 825294897, 387383319, 3621191895, 1482162264, 1633747041, 454754331, 471597084, 252641295, 370540566, 404226072, 572653602, 1145307204, 2998010034, 3048538293, 2442199185, 134742024, 2829582504, 4244373756, 1347420240, 3503292624, 2105344125, 2307457161, 2543255703, 1532690523, 2509570197, 4294902015, 3536978130, 3301179588, 1212678216, 4160159991, 3688562907, 50528259, 3671720154, 1061093439, 2492727444, 1549533276, 33685506, 1246363722, 858980403, 1734803559, 4092788979, 2139029631, 3806462178, 2610626715, 640024614, 926351415, 993722427, 2526412950, 1263206475, 3200123070, 774766638, 2037973113, 2357985420, 1852702830, 2391670926, 4126474485, 3065381046, 4261216509, 1499005017, 2560098456, 1785331818, 1178992710, 3132752058, 623181861, 1111621698, 2728525986, 4210688250, 117899271, 1431634005, 4008575214, 168427530, 1229520969, 1751646312, 943194168, 2762211492, 673710120, 2071658619, 3385393353, 3250651329, 3823304931, 4109631732, 3351707847, 2661154974]);
            class Camellia128 {
                constructor() {
                    this.key = new Uint32Array(52), this.block = new Uint32Array(4)
                }
                get blockSize() {
                    return 16
                }
                init(t) {
                    return i(Buffer.isBuffer(t)), i(16 === t.length), this.keySchedule(t), this
                }
                keySchedule(t) {
                    const e = this.block,
                        r = this.key;
                    return e[0] = p(t, 0), e[1] = p(t, 4), e[2] = p(t, 8), e[3] = p(t, 12), f(r, 0, 1, 2, 3, e, 0, 1, 2, 3), a(e, 0, 1, 2, 3, n[0], n[1]), a(e, 2, 3, 0, 1, n[2], n[3]), d(e, 0, 1, 2, 3, r, 0, 1, 2, 3), a(e, 0, 1, 2, 3, n[4], n[5]), a(e, 2, 3, 0, 1, n[6], n[7]), f(r, 4, 5, 6, 7, e, 0, 1, 2, 3), u(e, 0, 1, 2, 3, 15), f(r, 12, 13, 14, 15, e, 0, 1, 2, 3), u(e, 0, 1, 2, 3, 15), f(r, 16, 17, 18, 19, e, 0, 1, 2, 3), u(e, 0, 1, 2, 3, 15), l(r, 24, 25, e, 0, 1), u(e, 0, 1, 2, 3, 15), f(r, 28, 29, 30, 31, e, 0, 1, 2, 3), u(e, 1, 2, 3, 0, 2), f(r, 40, 41, 42, 43, e, 1, 2, 3, 0), u(e, 1, 2, 3, 0, 17), f(r, 48, 49, 50, 51, e, 1, 2, 3, 0), f(e, 0, 1, 2, 3, r, 0, 1, 2, 3), u(e, 0, 1, 2, 3, 15), f(r, 8, 9, 10, 11, e, 0, 1, 2, 3), u(e, 0, 1, 2, 3, 30), f(r, 20, 21, 22, 23, e, 0, 1, 2, 3), u(e, 0, 1, 2, 3, 15), l(r, 26, 27, e, 2, 3), u(e, 0, 1, 2, 3, 17), f(r, 32, 33, 34, 35, e, 0, 1, 2, 3), u(e, 0, 1, 2, 3, 17), f(r, 36, 37, 38, 39, e, 0, 1, 2, 3), u(e, 0, 1, 2, 3, 17), f(r, 44, 45, 46, 47, e, 0, 1, 2, 3), this
                }
                encrypt(t, e, r, i) {
                    const n = this.block,
                        s = this.key;
                    n[0] = p(t, e + 0), n[1] = p(t, e + 4), n[2] = p(t, e + 8), n[3] = p(t, e + 12), d(n, 0, 1, 2, 3, s, 0, 1, 2, 3), a(n, 0, 1, 2, 3, s[4], s[5]), a(n, 2, 3, 0, 1, s[6], s[7]), a(n, 0, 1, 2, 3, s[8], s[9]), a(n, 2, 3, 0, 1, s[10], s[11]), a(n, 0, 1, 2, 3, s[12], s[13]), a(n, 2, 3, 0, 1, s[14], s[15]);
                    let c = n[0] & s[16];
                    n[1] ^= c << 1 | c >>> 31, n[2] ^= n[3] | s[19], n[0] ^= n[1] | s[17], c = n[2] & s[18], n[3] ^= c << 1 | c >>> 31, a(n, 0, 1, 2, 3, s[20], s[21]), a(n, 2, 3, 0, 1, s[22], s[23]), a(n, 0, 1, 2, 3, s[24], s[25]), a(n, 2, 3, 0, 1, s[26], s[27]), a(n, 0, 1, 2, 3, s[28], s[29]), a(n, 2, 3, 0, 1, s[30], s[31]), c = n[0] & s[32], n[1] ^= c << 1 | c >>> 31, n[2] ^= n[3] | s[35], n[0] ^= n[1] | s[33], c = n[2] & s[34], n[3] ^= c << 1 | c >>> 31, a(n, 0, 1, 2, 3, s[36], s[37]), a(n, 2, 3, 0, 1, s[38], s[39]), a(n, 0, 1, 2, 3, s[40], s[41]), a(n, 2, 3, 0, 1, s[42], s[43]), a(n, 0, 1, 2, 3, s[44], s[45]), a(n, 2, 3, 0, 1, s[46], s[47]), d(n, 2, 3, 0, 1, s, 48, 49, 50, 51), y(r, n[2], i + 0), y(r, n[3], i + 4), y(r, n[0], i + 8), y(r, n[1], i + 12)
                }
                decrypt(t, e, r, i) {
                    const n = this.block,
                        s = this.key;
                    n[0] = p(t, e + 0), n[1] = p(t, e + 4), n[2] = p(t, e + 8), n[3] = p(t, e + 12), d(n, 3, 2, 1, 0, s, 51, 50, 49, 48), a(n, 0, 1, 2, 3, s[46], s[47]), a(n, 2, 3, 0, 1, s[44], s[45]), a(n, 0, 1, 2, 3, s[42], s[43]), a(n, 2, 3, 0, 1, s[40], s[41]), a(n, 0, 1, 2, 3, s[38], s[39]), a(n, 2, 3, 0, 1, s[36], s[37]);
                    let c = n[0] & s[34];
                    return n[1] ^= c << 1 | c >>> 31, n[2] ^= n[3] | s[33], n[0] ^= n[1] | s[35], c = n[2] & s[32], n[3] ^= c << 1 | c >>> 31, a(n, 0, 1, 2, 3, s[30], s[31]), a(n, 2, 3, 0, 1, s[28], s[29]), a(n, 0, 1, 2, 3, s[26], s[27]), a(n, 2, 3, 0, 1, s[24], s[25]), a(n, 0, 1, 2, 3, s[22], s[23]), a(n, 2, 3, 0, 1, s[20], s[21]), c = n[0] & s[18], n[1] ^= c << 1 | c >>> 31, n[2] ^= n[3] | s[17], n[0] ^= n[1] | s[19], c = n[2] & s[16], n[3] ^= c << 1 | c >>> 31, a(n, 0, 1, 2, 3, s[14], s[15]), a(n, 2, 3, 0, 1, s[12], s[13]), a(n, 0, 1, 2, 3, s[10], s[11]), a(n, 2, 3, 0, 1, s[8], s[9]), a(n, 0, 1, 2, 3, s[6], s[7]), a(n, 2, 3, 0, 1, s[4], s[5]), d(n, 1, 0, 3, 2, s, 3, 2, 1, 0), y(r, n[2], i + 0), y(r, n[3], i + 4), y(r, n[0], i + 8), y(r, n[1], i + 12), this
                }
                destroy() {
                    for (let t = 0; t < 52; t++) this.key[t] = 0;
                    for (let t = 0; t < 4; t++) this.block[t] = 0;
                    return this
                }
            }
            class Camellia256 {
                constructor() {
                    this.key = new Uint32Array(68), this.block = new Uint32Array(4)
                }
                get blockSize() {
                    return 16
                }
                init(t) {
                    return i(Buffer.isBuffer(t)), i(24 === t.length || 32 === t.length), this.keySchedule(t), this
                }
                keySchedule(t) {
                    const e = this.block,
                        r = this.key;
                    return r[0] = p(t, 0), r[1] = p(t, 4), r[2] = p(t, 8), r[3] = p(t, 12), r[8] = p(t, 16), r[9] = p(t, 20), 24 === t.length ? (r[10] = ~r[8], r[11] = ~r[9]) : (r[10] = p(t, 24), r[11] = p(t, 28)), e[0] = r[8] ^ r[0], e[1] = r[9] ^ r[1], e[2] = r[10] ^ r[2], e[3] = r[11] ^ r[3], a(e, 0, 1, 2, 3, n[0], n[1]), a(e, 2, 3, 0, 1, n[2], n[3]), d(e, 0, 1, 2, 3, r, 0, 1, 2, 3), a(e, 0, 1, 2, 3, n[4], n[5]), a(e, 2, 3, 0, 1, n[6], n[7]), f(r, 12, 13, 14, 15, e, 0, 1, 2, 3), d(e, 0, 1, 2, 3, r, 8, 9, 10, 11), a(e, 0, 1, 2, 3, n[8], n[9]), a(e, 2, 3, 0, 1, n[10], n[11]), f(r, 4, 5, 6, 7, e, 0, 1, 2, 3), u(e, 0, 1, 2, 3, 30), f(r, 20, 21, 22, 23, e, 0, 1, 2, 3), u(e, 0, 1, 2, 3, 30), f(r, 40, 41, 42, 43, e, 0, 1, 2, 3), u(e, 1, 2, 3, 0, 19), f(r, 64, 65, 66, 67, e, 1, 2, 3, 0), f(e, 0, 1, 2, 3, r, 8, 9, 10, 11), u(e, 0, 1, 2, 3, 15), f(r, 8, 9, 10, 11, e, 0, 1, 2, 3), u(e, 0, 1, 2, 3, 15), f(r, 16, 17, 18, 19, e, 0, 1, 2, 3), u(e, 0, 1, 2, 3, 30), f(r, 36, 37, 38, 39, e, 0, 1, 2, 3), u(e, 1, 2, 3, 0, 2), f(r, 52, 53, 54, 55, e, 1, 2, 3, 0), f(e, 0, 1, 2, 3, r, 12, 13, 14, 15), u(e, 0, 1, 2, 3, 15), f(r, 12, 13, 14, 15, e, 0, 1, 2, 3), u(e, 0, 1, 2, 3, 30), f(r, 28, 29, 30, 31, e, 0, 1, 2, 3), f(r, 48, 49, 50, 51, e, 1, 2, 3, 0), u(e, 1, 2, 3, 0, 17), f(r, 56, 57, 58, 59, e, 1, 2, 3, 0), f(e, 0, 1, 2, 3, r, 0, 1, 2, 3), u(e, 1, 2, 3, 0, 13), f(r, 24, 25, 26, 27, e, 1, 2, 3, 0), u(e, 1, 2, 3, 0, 15), f(r, 32, 33, 34, 35, e, 1, 2, 3, 0), u(e, 1, 2, 3, 0, 17), f(r, 44, 45, 46, 47, e, 1, 2, 3, 0), u(e, 2, 3, 0, 1, 2), f(r, 60, 61, 62, 63, e, 2, 3, 0, 1), this
                }
                encrypt(t, e, r, i) {
                    const n = this.block,
                        s = this.key;
                    n[0] = p(t, e + 0), n[1] = p(t, e + 4), n[2] = p(t, e + 8), n[3] = p(t, e + 12), d(n, 0, 1, 2, 3, s, 0, 1, 2, 3), a(n, 0, 1, 2, 3, s[4], s[5]), a(n, 2, 3, 0, 1, s[6], s[7]), a(n, 0, 1, 2, 3, s[8], s[9]), a(n, 2, 3, 0, 1, s[10], s[11]), a(n, 0, 1, 2, 3, s[12], s[13]), a(n, 2, 3, 0, 1, s[14], s[15]);
                    let c = n[0] & s[16];
                    return n[1] ^= c << 1 | c >>> 31, n[2] ^= n[3] | s[19], n[0] ^= n[1] | s[17], c = n[2] & s[18], n[3] ^= c << 1 | c >>> 31, a(n, 0, 1, 2, 3, s[20], s[21]), a(n, 2, 3, 0, 1, s[22], s[23]), a(n, 0, 1, 2, 3, s[24], s[25]), a(n, 2, 3, 0, 1, s[26], s[27]), a(n, 0, 1, 2, 3, s[28], s[29]), a(n, 2, 3, 0, 1, s[30], s[31]), c = n[0] & s[32], n[1] ^= c << 1 | c >>> 31, n[2] ^= n[3] | s[35], n[0] ^= n[1] | s[33], c = n[2] & s[34], n[3] ^= c << 1 | c >>> 31, a(n, 0, 1, 2, 3, s[36], s[37]), a(n, 2, 3, 0, 1, s[38], s[39]), a(n, 0, 1, 2, 3, s[40], s[41]), a(n, 2, 3, 0, 1, s[42], s[43]), a(n, 0, 1, 2, 3, s[44], s[45]), a(n, 2, 3, 0, 1, s[46], s[47]), c = n[0] & s[48], n[1] ^= c << 1 | c >>> 31, n[2] ^= n[3] | s[51], n[0] ^= n[1] | s[49], c = n[2] & s[50], n[3] ^= c << 1 | c >>> 31, a(n, 0, 1, 2, 3, s[52], s[53]), a(n, 2, 3, 0, 1, s[54], s[55]), a(n, 0, 1, 2, 3, s[56], s[57]), a(n, 2, 3, 0, 1, s[58], s[59]), a(n, 0, 1, 2, 3, s[60], s[61]), a(n, 2, 3, 0, 1, s[62], s[63]), d(n, 2, 3, 0, 1, s, 64, 65, 66, 67), y(r, n[2], i + 0), y(r, n[3], i + 4), y(r, n[0], i + 8), y(r, n[1], i + 12), this
                }
                decrypt(t, e, r, i) {
                    const n = this.block,
                        s = this.key;
                    n[0] = p(t, e + 0), n[1] = p(t, e + 4), n[2] = p(t, e + 8), n[3] = p(t, e + 12), d(n, 3, 2, 1, 0, s, 67, 66, 65, 64), a(n, 0, 1, 2, 3, s[62], s[63]), a(n, 2, 3, 0, 1, s[60], s[61]), a(n, 0, 1, 2, 3, s[58], s[59]), a(n, 2, 3, 0, 1, s[56], s[57]), a(n, 0, 1, 2, 3, s[54], s[55]), a(n, 2, 3, 0, 1, s[52], s[53]);
                    let c = n[0] & s[50];
                    return n[1] ^= c << 1 | c >>> 31, n[2] ^= n[3] | s[49], n[0] ^= n[1] | s[51], c = n[2] & s[48], n[3] ^= c << 1 | c >>> 31, a(n, 0, 1, 2, 3, s[46], s[47]), a(n, 2, 3, 0, 1, s[44], s[45]), a(n, 0, 1, 2, 3, s[42], s[43]), a(n, 2, 3, 0, 1, s[40], s[41]), a(n, 0, 1, 2, 3, s[38], s[39]), a(n, 2, 3, 0, 1, s[36], s[37]), c = n[0] & s[34], n[1] ^= c << 1 | c >>> 31, n[2] ^= n[3] | s[33], n[0] ^= n[1] | s[35], c = n[2] & s[32], n[3] ^= c << 1 | c >>> 31, a(n, 0, 1, 2, 3, s[30], s[31]), a(n, 2, 3, 0, 1, s[28], s[29]), a(n, 0, 1, 2, 3, s[26], s[27]), a(n, 2, 3, 0, 1, s[24], s[25]), a(n, 0, 1, 2, 3, s[22], s[23]), a(n, 2, 3, 0, 1, s[20], s[21]), c = n[0] & s[18], n[1] ^= c << 1 | c >>> 31, n[2] ^= n[3] | s[17], n[0] ^= n[1] | s[19], c = n[2] & s[16], n[3] ^= c << 1 | c >>> 31, a(n, 0, 1, 2, 3, s[14], s[15]), a(n, 2, 3, 0, 1, s[12], s[13]), a(n, 0, 1, 2, 3, s[10], s[11]), a(n, 2, 3, 0, 1, s[8], s[9]), a(n, 0, 1, 2, 3, s[6], s[7]), a(n, 2, 3, 0, 1, s[4], s[5]), d(n, 1, 0, 3, 2, s, 3, 2, 1, 0), y(r, n[2], i + 0), y(r, n[3], i + 4), y(r, n[0], i + 8), y(r, n[1], i + 12), this
                }
                destroy() {
                    for (let t = 0; t < 68; t++) this.key[t] = 0;
                    for (let t = 0; t < 4; t++) this.block[t] = 0;
                    return this
                }
            }

            function a(t, e, r, i, n, a, u) {
                a ^= t[e], u ^= t[r];
                let l = 0;
                l = h[255 & a], l ^= o[a >>> 8 & 255], l ^= c[a >>> 16 & 255], l ^= s[a >>> 24 & 255], t[n] ^= l >>> 8 | l << 24, a = l, a ^= s[255 & u], a ^= h[u >>> 8 & 255], a ^= o[u >>> 16 & 255], a ^= c[u >>> 24 & 255], t[i] ^= a, t[n] ^= a
            }

            function u(t, e, r, i, n, s) {
                const c = t[e] >>> 32 - s;
                t[e] = t[e] << s | t[r] >>> 32 - s, t[r] = t[r] << s | t[i] >>> 32 - s, t[i] = t[i] << s | t[n] >>> 32 - s, t[n] = t[n] << s | c
            }

            function l(t, e, r, i, n, s) {
                t[e] = i[n], t[r] = i[s]
            }

            function f(t, e, r, i, n, s, c, o, h, a) {
                t[e] = s[c], t[r] = s[o], t[i] = s[h], t[n] = s[a]
            }

            function d(t, e, r, i, n, s, c, o, h, a) {
                t[e] ^= s[c], t[r] ^= s[o], t[i] ^= s[h], t[n] ^= s[a]
            }

            function p(t, e) {
                return 16777216 * t[e++] + 65536 * t[e++] + 256 * t[e++] + t[e]
            }

            function y(t, e, r) {
                return t[r++] = e >>> 24, t[r++] = e >>> 16, t[r++] = e >>> 8, t[r++] = e >>> 0, r
            }
            t.exports = class Camellia {
                constructor(t) {
                    switch (i(t >>> 0 === t), this.bits = t, this.ctx = null, t) {
                        case 128:
                            this.ctx = new Camellia128;
                            break;
                        case 192:
                        case 256:
                            this.ctx = new Camellia256;
                            break;
                        default:
                            throw new Error("Invalid key size.")
                    }
                }
                get blockSize() {
                    return this.ctx.blockSize
                }
                init(t) {
                    return i(Buffer.isBuffer(t)), i(t.length === this.bits >>> 3), this.ctx.init(t), this
                }
                encrypt(t, e, r, i) {
                    return this.ctx.encrypt(t, e, r, i), this
                }
                decrypt(t, e, r, i) {
                    return this.ctx.decrypt(t, e, r, i), this
                }
                destroy() {
                    return this.ctx.destroy(), this
                }
            }
        },
        9993: function(t, e, r) {
            "use strict";
            const i = r(5466),
                n = [new Uint32Array([821772500, 2678128395, 1810681135, 1059425402, 505495343, 2617265619, 1610868032, 3483355465, 3218386727, 2294005173, 3791863952, 2563806837, 1852023008, 365126098, 3269944861, 584384398, 677919599, 3229601881, 4280515016, 2002735330, 1136869587, 3744433750, 2289869850, 2731719981, 2714362070, 879511577, 1639411079, 575934255, 717107937, 2857637483, 576097850, 2731753936, 1725645e3, 2810460463, 5111599, 767152862, 2543075244, 1251459544, 1383482551, 3052681127, 3089939183, 3612463449, 1878520045, 1510570527, 2189125840, 2431448366, 582008916, 3163445557, 1265446783, 1354458274, 3529918736, 3202711853, 3073581712, 3912963487, 3029263377, 1275016285, 4249207360, 2905708351, 3304509486, 1442611557, 3585198765, 2712415662, 2731849581, 3248163920, 2283946226, 208555832, 2766454743, 1331405426, 1447828783, 3315356441, 3108627284, 2957404670, 2981538698, 3339933917, 1669711173, 286233437, 1465092821, 1782121619, 3862771680, 710211251, 980974943, 1651941557, 430374111, 2051154026, 704238805, 4128970897, 3144820574, 2857402727, 948965521, 3333752299, 2227686284, 718756367, 2269778983, 2731643755, 718440111, 2857816721, 3616097120, 1113355533, 2478022182, 410092745, 1811985197, 1944238868, 2696854588, 1415722873, 1682284203, 1060277122, 1998114690, 1503841958, 82706478, 2315155686, 1068173648, 845149890, 2167947013, 1768146376, 1993038550, 3566826697, 3390574031, 940016341, 3355073782, 2328040721, 904371731, 1205506512, 4094660742, 2816623006, 825647681, 85914773, 2857843460, 1249926541, 1417871568, 3287612, 3211054559, 3126306446, 1975924523, 1353700161, 2814456437, 2438597621, 1800716203, 722146342, 2873936343, 1151126914, 4160483941, 2877670899, 458611604, 2866078500, 3483680063, 770352098, 2652916994, 3367839148, 3940505011, 3585973912, 3809620402, 718646636, 2504206814, 2914927912, 3631288169, 2857486607, 2860018678, 575749918, 2857478043, 718488780, 2069512688, 3548183469, 453416197, 1106044049, 3032691430, 52586708, 3378514636, 3459808877, 3211506028, 1785789304, 218356169, 3571399134, 3759170522, 1194783844, 1523787992, 3007827094, 1975193539, 2555452411, 1341901877, 3045838698, 3776907964, 3217423946, 2802510864, 2889438986, 1057244207, 1636348243, 3761863214, 1462225785, 2632663439, 481089165, 718503062, 24497053, 3332243209, 3344655856, 3655024856, 3960371065, 1195698900, 2971415156, 3710176158, 2115785917, 4027663609, 3525578417, 2524296189, 2745972565, 3564906415, 1372086093, 1452307862, 2780501478, 1476592880, 3389271281, 18495466, 2378148571, 901398090, 891748256, 3279637769, 3157290713, 2560960102, 1447622437, 4284372637, 216884176, 2086908623, 1879786977, 3588903153, 2242455666, 2938092967, 3559082096, 2810645491, 758861177, 1121993112, 215018983, 642190776, 4169236812, 1196255959, 2081185372, 3508738393, 941322904, 4124243163, 2877523539, 1848581667, 2205260958, 3180453958, 2589345134, 3694731276, 550028657, 2519456284, 3789985535, 2973870856, 2093648313, 443148163, 46942275, 2734146937, 1117713533, 1115362972, 1523183689, 3717140224, 1551984063]), new Uint32Array([522195092, 4010518363, 1776537470, 960447360, 4267822970, 4005896314, 1435016340, 1929119313, 2913464185, 1310552629, 3579470798, 3724818106, 2579771631, 1594623892, 417127293, 2715217907, 2696228731, 1508390405, 3994398868, 3925858569, 3695444102, 4019471449, 3129199795, 3770928635, 3520741761, 990456497, 4187484609, 2783367035, 21106139, 3840405339, 631373633, 3783325702, 532942976, 396095098, 3548038825, 4267192484, 2564721535, 2011709262, 2039648873, 620404603, 3776170075, 2898526339, 3612357925, 4159332703, 1645490516, 223693667, 1567101217, 3362177881, 1029951347, 3470931136, 3570957959, 1550265121, 119497089, 972513919, 907948164, 3840628539, 1613718692, 3594177948, 465323573, 2659255085, 654439692, 2575596212, 2699288441, 3127702412, 277098644, 624404830, 4100943870, 2717858591, 546110314, 2403699828, 3655377447, 1321679412, 4236791657, 1045293279, 4010672264, 895050893, 2319792268, 494945126, 1914543101, 2777056443, 3894764339, 2219737618, 311263384, 4275257268, 3458730721, 669096869, 3584475730, 3835122877, 3319158237, 3949359204, 2005142349, 2713102337, 2228954793, 3769984788, 569394103, 3855636576, 1425027204, 108000370, 2736431443, 3671869269, 3043122623, 1750473702, 2211081108, 762237499, 3972989403, 2798899386, 3061857628, 2943854345, 867476300, 964413654, 1591880597, 1594774276, 2179821409, 552026980, 3026064248, 3726140315, 2283577634, 3110545105, 2152310760, 582474363, 1582640421, 1383256631, 2043843868, 3322775884, 1217180674, 463797851, 2763038571, 480777679, 2718707717, 2289164131, 3118346187, 214354409, 200212307, 3810608407, 3025414197, 2674075964, 3997296425, 1847405948, 1342460550, 510035443, 4080271814, 815934613, 833030224, 1620250387, 1945732119, 2703661145, 3966000196, 1388869545, 3456054182, 2687178561, 2092620194, 562037615, 1356438536, 3409922145, 3261847397, 1688467115, 2150901366, 631725691, 3840332284, 549916902, 3455104640, 394546491, 837744717, 2114462948, 751520235, 2221554606, 2415360136, 3999097078, 2063029875, 803036379, 2702586305, 821456707, 3019566164, 360699898, 4018502092, 3511869016, 3677355358, 2402471449, 812317050, 49299192, 2570164949, 3259169295, 2816732080, 3331213574, 3101303564, 2156015656, 3705598920, 3546263921, 143268808, 3200304480, 1638124008, 3165189453, 3341807610, 578956953, 2193977524, 3638120073, 2333881532, 807278310, 658237817, 2969561766, 1641658566, 11683945, 3086995007, 148645947, 1138423386, 4158756760, 1981396783, 2401016740, 3699783584, 380097457, 2680394679, 2803068651, 3334260286, 441530178, 4016580796, 1375954390, 761952171, 891809099, 2183123478, 157052462, 3683840763, 1592404427, 341349109, 2438483839, 1417898363, 644327628, 2233032776, 2353769706, 2201510100, 220455161, 1815641738, 182899273, 2995019788, 3627381533, 3702638151, 2890684138, 1052606899, 588164016, 1681439879, 4038439418, 2405343923, 4229449282, 167996282, 1336969661, 1688053129, 2739224926, 1543734051, 1046297529, 1138201970, 2121126012, 115334942, 1819067631, 1902159161, 1941945968, 2206692869, 1159982321]), new Uint32Array([2381300288, 637164959, 3952098751, 3893414151, 1197506559, 916448331, 2350892612, 2932787856, 3199334847, 4009478890, 3905886544, 1373570990, 2450425862, 4037870920, 3778841987, 2456817877, 286293407, 124026297, 3001279700, 1028597854, 3115296800, 4208886496, 2691114635, 2188540206, 1430237888, 1218109995, 3572471700, 308166588, 570424558, 2187009021, 2455094765, 307733056, 1310360322, 3135275007, 1384269543, 2388071438, 863238079, 2359263624, 2801553128, 3380786597, 2831162807, 1470087780, 1728663345, 4072488799, 1090516929, 532123132, 2389430977, 1132193179, 2578464191, 3051079243, 1670234342, 1434557849, 2711078940, 1241591150, 3314043432, 3435360113, 3091448339, 1812415473, 2198440252, 267246943, 796911696, 3619716990, 38830015, 1526438404, 2806502096, 374413614, 2943401790, 1489179520, 1603809326, 1920779204, 168801282, 260042626, 2358705581, 1563175598, 2397674057, 1356499128, 2217211040, 514611088, 2037363785, 2186468373, 4022173083, 2792511869, 2913485016, 1173701892, 4200428547, 3896427269, 1334932762, 2455136706, 602925377, 2835607854, 1613172210, 41346230, 2499634548, 2457437618, 2188827595, 41386358, 4172255629, 1313404830, 2405527007, 3801973774, 2217704835, 873260488, 2528884354, 2478092616, 4012915883, 2555359016, 2006953883, 2463913485, 575479328, 2218240648, 2099895446, 660001756, 2341502190, 3038761536, 3888151779, 3848713377, 3286851934, 1022894237, 1620365795, 3449594689, 1551255054, 15374395, 3570825345, 4249311020, 4151111129, 3181912732, 310226346, 1133119310, 530038928, 136043402, 2476768958, 3107506709, 2544909567, 1036173560, 2367337196, 1681395281, 1758231547, 3641649032, 306774401, 1575354324, 3716085866, 1990386196, 3114533736, 2455606671, 1262092282, 3124342505, 2768229131, 4210529083, 1833535011, 423410938, 660763973, 2187129978, 1639812e3, 3508421329, 3467445492, 310289298, 272797111, 2188552562, 2456863912, 310240523, 677093832, 1013118031, 901835429, 3892695601, 1116285435, 3036471170, 1337354835, 243122523, 520626091, 277223598, 4244441197, 4194248841, 1766575121, 594173102, 316590669, 742362309, 3536858622, 4176435350, 3838792410, 2501204839, 1229605004, 3115755532, 1552908988, 2312334149, 979407927, 3959474601, 1148277331, 176638793, 3614686272, 2083809052, 40992502, 1340822838, 2731552767, 3535757508, 3560899520, 1354035053, 122129617, 7215240, 2732932949, 3118912700, 2718203926, 2539075635, 3609230695, 3725561661, 1928887091, 2882293555, 1988674909, 2063640240, 2491088897, 1459647954, 4189817080, 2302804382, 1113892351, 2237858528, 1927010603, 4002880361, 1856122846, 1594404395, 2944033133, 3855189863, 3474975698, 1643104450, 4054590833, 3431086530, 1730235576, 2984608721, 3084664418, 2131803598, 4178205752, 267404349, 1617849798, 1616132681, 1462223176, 736725533, 2327058232, 551665188, 2945899023, 1749386277, 2575514597, 1611482493, 674206544, 2201269090, 3642560800, 728599968, 1680547377, 2620414464, 1388111496, 453204106, 4156223445, 1094905244, 2754698257, 2201108165, 3757000246, 2704524545, 3922940700, 3996465027]), new Uint32Array([2645754912, 532081118, 2814278639, 3530793624, 1246723035, 1689095255, 2236679235, 4194438865, 2116582143, 3859789411, 157234593, 2045505824, 4245003587, 1687664561, 4083425123, 605965023, 672431967, 1336064205, 3376611392, 214114848, 4258466608, 3232053071, 489488601, 605322005, 3998028058, 264917351, 1912574028, 756637694, 436560991, 202637054, 135989450, 85393697, 2152923392, 3896401662, 2895836408, 2145855233, 3535335007, 115294817, 3147733898, 1922296357, 3464822751, 4117858305, 1037454084, 2725193275, 2127856640, 1417604070, 1148013728, 1827919605, 642362335, 2929772533, 909348033, 1346338451, 3547799649, 297154785, 1917849091, 4161712827, 2883604526, 3968694238, 1469521537, 3780077382, 3375584256, 1763717519, 136166297, 4290970789, 1295325189, 2134727907, 2798151366, 1566297257, 3672928234, 2677174161, 2672173615, 965822077, 2780786062, 289653839, 1133871874, 3491843819, 35685304, 1068898316, 418943774, 672553190, 642281022, 2346158704, 1954014401, 3037126780, 4079815205, 2030668546, 3840588673, 672283427, 1776201016, 359975446, 3750173538, 555499703, 2769985273, 1324923, 69110472, 152125443, 3176785106, 3822147285, 1340634837, 798073664, 1434183902, 15393959, 216384236, 1303690150, 3881221631, 3711134124, 3960975413, 106373927, 2578434224, 1455997841, 1801814300, 1578393881, 1854262133, 3188178946, 3258078583, 2302670060, 1539295533, 3505142565, 3078625975, 2372746020, 549938159, 3278284284, 2620926080, 181285381, 2865321098, 3970029511, 68876850, 488006234, 1728155692, 2608167508, 836007927, 2435231793, 919367643, 3339422534, 3655756360, 1457871481, 40520939, 1380155135, 797931188, 234455205, 2255801827, 3990488299, 397000196, 739833055, 3077865373, 2871719860, 4022553888, 772369276, 390177364, 3853951029, 557662966, 740064294, 1640166671, 1699928825, 3535942136, 622006121, 3625353122, 68743880, 1742502, 219489963, 1664179233, 1577743084, 1236991741, 410585305, 2366487942, 823226535, 1050371084, 3426619607, 3586839478, 212779912, 4147118561, 1819446015, 1911218849, 530248558, 3486241071, 3252585495, 2886188651, 3410272728, 2342195030, 20547779, 2982490058, 3032363469, 3631753222, 312714466, 1870521650, 1493008054, 3491686656, 615382978, 4103671749, 2534517445, 1932181, 2196105170, 278426614, 6369430, 3274544417, 2913018367, 697336853, 2143000447, 2946413531, 701099306, 1558357093, 2805003052, 3500818408, 2321334417, 3567135975, 216290473, 3591032198, 23009561, 1996984579, 3735042806, 2024298078, 3739440863, 569400510, 2339758983, 3016033873, 3097871343, 3639523026, 3844324983, 3256173865, 795471839, 2951117563, 4101031090, 4091603803, 3603732598, 971261452, 534414648, 428311343, 3389027175, 2844869880, 694888862, 1227866773, 2456207019, 3043454569, 2614353370, 3749578031, 3676663836, 459166190, 4132644070, 1794958188, 51825668, 2252611902, 3084671440, 2036672799, 3436641603, 1099053433, 2469121526, 3059204941, 1323291266, 2061838604, 1018778475, 2233344254, 2553501054, 334295216, 3556750194, 1065731521, 183467730]), new Uint32Array([2127105028, 745436345, 2601412319, 2788391185, 3093987327, 500390133, 1155374404, 389092991, 150729210, 3891597772, 3523549952, 1935325696, 716645080, 946045387, 2901812282, 1774124410, 3869435775, 4039581901, 3293136918, 3438657920, 948246080, 363898952, 3867875531, 1286266623, 1598556673, 68334250, 630723836, 1104211938, 1312863373, 613332731, 2377784574, 1101634306, 441780740, 3129959883, 1917973735, 2510624549, 3238456535, 2544211978, 3308894634, 1299840618, 4076074851, 1756332096, 3977027158, 297047435, 3790297736, 2265573040, 3621810518, 1311375015, 1667687725, 47300608, 3299642885, 2474112369, 201668394, 1468347890, 576830978, 3594690761, 3742605952, 1958042578, 1747032512, 3558991340, 1408974056, 3366841779, 682131401, 1033214337, 1545599232, 4265137049, 206503691, 103024618, 2855227313, 1337551222, 2428998917, 2963842932, 4015366655, 3852247746, 2796956967, 3865723491, 3747938335, 247794022, 3755824572, 702416469, 2434691994, 397379957, 851939612, 2314769512, 218229120, 1380406772, 62274761, 214451378, 3170103466, 2276210409, 3845813286, 28563499, 446592073, 1693330814, 3453727194, 29968656, 3093872512, 220656637, 2470637031, 77972100, 1667708854, 1358280214, 4064765667, 2395616961, 325977563, 4277240721, 4220025399, 3605526484, 3355147721, 811859167, 3069544926, 3962126810, 652502677, 3075892249, 4132761541, 3498924215, 1217549313, 3250244479, 3858715919, 3053989961, 1538642152, 2279026266, 2875879137, 574252750, 3324769229, 2651358713, 1758150215, 141295887, 2719868960, 3515574750, 4093007735, 4194485238, 1082055363, 3417560400, 395511885, 2966884026, 179534037, 3646028556, 3738688086, 1092926436, 2496269142, 257381841, 3772900718, 1636087230, 1477059743, 2499234752, 3811018894, 2675660129, 3285975680, 90732309, 1684827095, 1150307763, 1723134115, 3237045386, 1769919919, 1240018934, 815675215, 750138730, 2239792499, 1234303040, 1995484674, 138143821, 675421338, 1145607174, 1936608440, 3238603024, 2345230278, 2105974004, 323969391, 779555213, 3004902369, 2861610098, 1017501463, 2098600890, 2628620304, 2940611490, 2682542546, 1171473753, 3656571411, 3687208071, 4091869518, 393037935, 159126506, 1662887367, 1147106178, 391545844, 3452332695, 1891500680, 3016609650, 1851642611, 546529401, 1167818917, 3194020571, 2848076033, 3953471836, 575554290, 475796850, 4134673196, 450035699, 2351251534, 844027695, 1080539133, 86184846, 1554234488, 3692025454, 1972511363, 2018339607, 1491841390, 1141460869, 1061690759, 4244549243, 2008416118, 2351104703, 2868147542, 1598468138, 722020353, 1027143159, 212344630, 1387219594, 1725294528, 3745187956, 2500153616, 458938280, 4129215917, 1828119673, 544571780, 3503225445, 2297937496, 1241802790, 267843827, 2694610800, 1397140384, 1558801448, 3782667683, 1806446719, 929573330, 2234912681, 400817706, 616011623, 4121520928, 3603768725, 1761550015, 1968522284, 4053731006, 4192232858, 4005120285, 872482584, 3140537016, 3894607381, 2287405443, 1963876937, 3663887957, 1584857e3, 2975024454, 1833426440, 4025083860]), new Uint32Array([4143615901, 749497569, 1285769319, 3795025788, 2514159847, 23610292, 3974978748, 844452780, 3214870880, 3751928557, 2213566365, 1676510905, 448177848, 3730751033, 4086298418, 2307502392, 871450977, 3222878141, 4110862042, 3831651966, 2735270553, 1310974780, 2043402188, 1218528103, 2736035353, 4274605013, 2702448458, 3936360550, 2693061421, 162023535, 2827510090, 687910808, 23484817, 3784910947, 3371371616, 779677500, 3503626546, 3473927188, 4157212626, 3500679282, 4248902014, 2466621104, 3899384794, 1958663117, 925738300, 1283408968, 3669349440, 1840910019, 137959847, 2679828185, 1239142320, 1315376211, 1547541505, 1690155329, 739140458, 3128809933, 3933172616, 3876308834, 905091803, 1548541325, 4040461708, 3095483362, 144808038, 451078856, 676114313, 2861728291, 2469707347, 993665471, 373509091, 2599041286, 4025009006, 4170239449, 2149739950, 3275793571, 3749616649, 2794760199, 1534877388, 572371878, 2590613551, 1753320020, 3467782511, 1405125690, 4270405205, 633333386, 3026356924, 3475123903, 632057672, 2846462855, 1404951397, 3882875879, 3915906424, 195638627, 2385783745, 3902872553, 1233155085, 3355999740, 2380578713, 2702246304, 2144565621, 3663341248, 3894384975, 2502479241, 4248018925, 3094885567, 1594115437, 572884632, 3385116731, 767645374, 1331858858, 1475698373, 3793881790, 3532746431, 1321687957, 619889600, 1121017241, 3440213920, 2070816767, 2833025776, 1933951238, 4095615791, 890643334, 3874130214, 859025556, 360630002, 925594799, 1764062180, 3920222280, 4078305929, 979562269, 2810700344, 4087740022, 1949714515, 546639971, 1165388173, 3069891591, 1495988560, 922170659, 1291546247, 2107952832, 1813327274, 3406010024, 3306028637, 4241950635, 153207855, 2313154747, 1608695416, 1150242611, 1967526857, 721801357, 1220138373, 3691287617, 3356069787, 2112743302, 3281662835, 1111556101, 1778980689, 250857638, 2298507990, 673216130, 2846488510, 3207751581, 3562756981, 3008625920, 3417367384, 2198807050, 529510932, 3547516680, 3426503187, 2364944742, 102533054, 2294910856, 1617093527, 1204784762, 3066581635, 1019391227, 1069574518, 1317995090, 1691889997, 3661132003, 510022745, 3238594800, 1362108837, 1817929911, 2184153760, 805817662, 1953603311, 3699844737, 120799444, 2118332377, 207536705, 2282301548, 4120041617, 145305846, 2508124933, 3086745533, 3261524335, 1877257368, 2977164480, 3160454186, 2503252186, 4221677074, 759945014, 254147243, 2767453419, 3801518371, 629083197, 2471014217, 907280572, 3900796746, 940896768, 2751021123, 2625262786, 3161476951, 3661752313, 3260732218, 1425318020, 2977912069, 1496677566, 3988592072, 2140652971, 3126511541, 3069632175, 977771578, 1392695845, 1698528874, 1411812681, 1369733098, 1343739227, 3620887944, 1142123638, 67414216, 3102056737, 3088749194, 1626167401, 2546293654, 3941374235, 697522451, 33404913, 143560186, 2595682037, 994885535, 1247667115, 3859094837, 2699155541, 3547024625, 4114935275, 2968073508, 3199963069, 2732024527, 1237921620, 951448369, 1898488916, 1211705605, 2790989240, 2233243581, 3598044975]), new Uint32Array([2246066201, 858518887, 1714274303, 3485882003, 713916271, 2879113490, 3730835617, 539548191, 36158695, 1298409750, 419087104, 1358007170, 749914897, 2989680476, 1261868530, 2995193822, 2690628854, 3443622377, 3780124940, 3796824509, 2976433025, 4259637129, 1551479e3, 512490819, 1296650241, 951993153, 2436689437, 2460458047, 144139966, 3136204276, 310820559, 3068840729, 643875328, 1969602020, 1680088954, 2185813161, 3283332454, 672358534, 198762408, 896343282, 276269502, 3014846926, 84060815, 197145886, 376173866, 3943890818, 3813173521, 3545068822, 1316698879, 1598252827, 2633424951, 1233235075, 859989710, 2358460855, 3503838400, 3409603720, 1203513385, 1193654839, 2792018475, 2060853022, 207403770, 1144516871, 3068631394, 1121114134, 177607304, 3785736302, 326409831, 1929119770, 2983279095, 4183308101, 3474579288, 3200513878, 3228482096, 119610148, 1170376745, 3378393471, 3163473169, 951863017, 3337026068, 3135789130, 2907618374, 1183797387, 2015970143, 4045674555, 2182986399, 2952138740, 3928772205, 384012900, 2454997643, 10178499, 2879818989, 2596892536, 111523738, 2995089006, 451689641, 3196290696, 235406569, 1441906262, 3890558523, 3013735005, 4158569349, 1644036924, 376726067, 1006849064, 3664579700, 2041234796, 1021632941, 1374734338, 2566452058, 371631263, 4007144233, 490221539, 206551450, 3140638584, 1053219195, 1853335209, 3412429660, 3562156231, 735133835, 1623211703, 3104214392, 2738312436, 4096837757, 3366392578, 3110964274, 3956598718, 3196820781, 2038037254, 3877786376, 2339753847, 300912036, 3766732888, 2372630639, 1516443558, 4200396704, 1574567987, 4069441456, 4122592016, 2699739776, 146372218, 2748961456, 2043888151, 35287437, 2596680554, 655490400, 1132482787, 110692520, 1031794116, 2188192751, 1324057718, 1217253157, 919197030, 686247489, 3261139658, 1028237775, 3135486431, 3059715558, 2460921700, 986174950, 2661811465, 4062904701, 2752986992, 3709736643, 367056889, 1353824391, 731860949, 1650113154, 1778481506, 784341916, 357075625, 3608602432, 1074092588, 2480052770, 3811426202, 92751289, 877911070, 3600361838, 1231880047, 480201094, 3756190983, 3094495953, 434011822, 87971354, 363687820, 1717726236, 1901380172, 3926403882, 2481662265, 400339184, 1490350766, 2661455099, 1389319756, 2558787174, 784598401, 1983468483, 30828846, 3550527752, 2716276238, 3841122214, 1765724805, 1955612312, 1277890269, 1333098070, 1564029816, 2704417615, 1026694237, 3287671188, 1260819201, 3349086767, 1016692350, 1582273796, 1073413053, 1995943182, 694588404, 1025494639, 3323872702, 3551898420, 4146854327, 453260480, 1316140391, 1435673405, 3038941953, 3486689407, 1622062951, 403978347, 817677117, 950059133, 4246079218, 3278066075, 1486738320, 1417279718, 481875527, 2549965225, 3933690356, 760697757, 1452955855, 3897451437, 1177426808, 1702951038, 4085348628, 2447005172, 1084371187, 3516436277, 3068336338, 1073369276, 1027665953, 3284188590, 1230553676, 1368340146, 2226246512, 267243139, 2274220762, 4070734279, 2497715176, 2423353163, 2504755875]), new Uint32Array([3793104909, 3151888380, 2817252029, 895778965, 2005530807, 3871412763, 237245952, 86829237, 296341424, 3851759377, 3974600970, 2475086196, 709006108, 1994621201, 2972577594, 937287164, 3734691505, 168608556, 3189338153, 2225080640, 3139713551, 3033610191, 3025041904, 77524477, 185966941, 1208824168, 2344345178, 1721625922, 3354191921, 1066374631, 1927223579, 1971335949, 2483503697, 1551748602, 2881383779, 2856329572, 3003241482, 48746954, 1398218158, 2050065058, 313056748, 4255789917, 393167848, 1912293076, 940740642, 3465845460, 3091687853, 2522601570, 2197016661, 1727764327, 364383054, 492521376, 1291706479, 3264136376, 1474851438, 1685747964, 2575719748, 1619776915, 1814040067, 970743798, 1561002147, 2925768690, 2123093554, 1880132620, 3151188041, 697884420, 2550985770, 2607674513, 2659114323, 110200136, 1489731079, 997519150, 1378877361, 3527870668, 478029773, 2766872923, 1022481122, 431258168, 1112503832, 897933369, 2635587303, 669726182, 3383752315, 918222264, 163866573, 3246985393, 3776823163, 114105080, 1903216136, 761148244, 3571337562, 1690750982, 3166750252, 1037045171, 1888456500, 2010454850, 642736655, 616092351, 365016990, 1185228132, 4174898510, 1043824992, 2023083429, 2241598885, 3863320456, 3279669087, 3674716684, 108438443, 2132974366, 830746235, 606445527, 4173263986, 2204105912, 1844756978, 2532684181, 4245352700, 2969441100, 3796921661, 1335562986, 4061524517, 2720232303, 2679424040, 634407289, 885462008, 3294724487, 3933892248, 2094100220, 339117932, 4048830727, 3202280980, 1458155303, 2689246273, 1022871705, 2464987878, 3714515309, 353796843, 2822958815, 4256850100, 4052777845, 551748367, 618185374, 3778635579, 4020649912, 1904685140, 3069366075, 2670879810, 3407193292, 2954511620, 4058283405, 2219449317, 3135758300, 1120655984, 3447565834, 1474845562, 3577699062, 550456716, 3466908712, 2043752612, 881257467, 869518812, 2005220179, 938474677, 3305539448, 3850417126, 1315485940, 3318264702, 226533026, 965733244, 321539988, 1136104718, 804158748, 573969341, 3708209826, 937399083, 3290727049, 2901666755, 1461057207, 4013193437, 4066861423, 3242773476, 2421326174, 1581322155, 3028952165, 786071460, 3900391652, 3918438532, 1485433313, 4023619836, 3708277595, 3678951060, 953673138, 1467089153, 1930354364, 1533292819, 2492563023, 1346121658, 1685000834, 1965281866, 3765933717, 4190206607, 2052792609, 3515332758, 690371149, 3125873887, 2180283551, 2903598061, 3933952357, 436236910, 289419410, 14314871, 1242357089, 2904507907, 1616633776, 2666382180, 585885352, 3471299210, 2699507360, 1432659641, 277164553, 3354103607, 770115018, 2303809295, 3741942315, 3177781868, 2853364978, 2269453327, 3774259834, 987383833, 1290892879, 225909803, 1741533526, 890078084, 1496906255, 1111072499, 916028167, 243534141, 1252605537, 2204162171, 531204876, 290011180, 3916834213, 102027703, 237315147, 209093447, 1486785922, 220223953, 2758195998, 4175039106, 82940208, 3127791296, 2569425252, 518464269, 1353887104, 3941492737, 2377294467, 3935040926])],
                s = [{
                    a: [new Uint8Array([4, 0, 13, 15, 12, 14, 8]), new Uint8Array([5, 2, 16, 18, 17, 19, 10]), new Uint8Array([6, 3, 23, 22, 21, 20, 9]), new Uint8Array([7, 1, 26, 25, 27, 24, 11])],
                    b: [new Uint8Array([24, 25, 23, 22, 18]), new Uint8Array([26, 27, 21, 20, 22]), new Uint8Array([28, 29, 19, 18, 25]), new Uint8Array([30, 31, 17, 16, 28])]
                }, {
                    a: [new Uint8Array([0, 6, 21, 23, 20, 22, 16]), new Uint8Array([1, 4, 0, 2, 1, 3, 18]), new Uint8Array([2, 5, 7, 6, 5, 4, 17]), new Uint8Array([3, 7, 10, 9, 11, 8, 19])],
                    b: [new Uint8Array([3, 2, 12, 13, 8]), new Uint8Array([1, 0, 14, 15, 13]), new Uint8Array([7, 6, 8, 9, 3]), new Uint8Array([5, 4, 10, 11, 7])]
                }, {
                    a: [new Uint8Array([4, 0, 13, 15, 12, 14, 8]), new Uint8Array([5, 2, 16, 18, 17, 19, 10]), new Uint8Array([6, 3, 23, 22, 21, 20, 9]), new Uint8Array([7, 1, 26, 25, 27, 24, 11])],
                    b: [new Uint8Array([19, 18, 28, 29, 25]), new Uint8Array([17, 16, 30, 31, 28]), new Uint8Array([23, 22, 24, 25, 18]), new Uint8Array([21, 20, 26, 27, 22])]
                }, {
                    a: [new Uint8Array([0, 6, 21, 23, 20, 22, 16]), new Uint8Array([1, 4, 0, 2, 1, 3, 18]), new Uint8Array([2, 5, 7, 6, 5, 4, 17]), new Uint8Array([3, 7, 10, 9, 11, 8, 19])],
                    b: [new Uint8Array([8, 9, 7, 6, 3]), new Uint8Array([10, 11, 5, 4, 7]), new Uint8Array([12, 13, 3, 2, 8]), new Uint8Array([14, 15, 1, 0, 13])]
                }],
                c = new Uint8Array([6, 7, 4, 5]);

            function o(t, e, r) {
                const i = e + t,
                    s = i << r | i >>> 32 - r;
                return (n[0][s >>> 24] ^ n[1][s >>> 16 & 255]) - n[2][s >>> 8 & 255] + n[3][255 & s]
            }

            function h(t, e, r) {
                const i = e ^ t,
                    s = i << r | i >>> 32 - r;
                return n[0][s >>> 24] - n[1][s >>> 16 & 255] + n[2][s >>> 8 & 255] ^ n[3][255 & s]
            }

            function a(t, e, r) {
                const i = e - t,
                    s = i << r | i >>> 32 - r;
                return (n[0][s >>> 24] + n[1][s >>> 16 & 255] ^ n[2][s >>> 8 & 255]) - n[3][255 & s]
            }

            function u(t, e) {
                return 16777216 * t[e++] + 65536 * t[e++] + 256 * t[e++] + t[e]
            }

            function l(t, e, r) {
                return t[r++] = e >>> 24, t[r++] = e >>> 16, t[r++] = e >>> 8, t[r++] = e, r
            }
            t.exports = class CAST5 {
                constructor() {
                    this.masking = new Uint32Array(16), this.rotate = new Uint8Array(16)
                }
                get blockSize() {
                    return 8
                }
                init(t) {
                    return i(Buffer.isBuffer(t)), i(16 === t.length), this.keySchedule(t), this
                }
                destroy() {
                    for (let t = 0; t < 16; t++) this.masking[t] = 0;
                    for (let t = 0; t < 16; t++) this.rotate[t] = 0;
                    return this
                }
                keySchedule(t) {
                    const e = new Uint32Array(8),
                        r = new Uint32Array(32);
                    for (let r = 0; r < 4; r++) e[r] = u(t, 4 * r);
                    let i, o = 0;
                    for (let t = 0; t < 2; t++)
                        for (const t of s) {
                            for (let r = 0; r < 4; r++) {
                                const s = t.a[r];
                                i = e[s[1]], i ^= n[4][e[s[2] >>> 2] >>> 24 - 8 * (3 & s[2]) & 255], i ^= n[5][e[s[3] >>> 2] >>> 24 - 8 * (3 & s[3]) & 255], i ^= n[6][e[s[4] >>> 2] >>> 24 - 8 * (3 & s[4]) & 255], i ^= n[7][e[s[5] >>> 2] >>> 24 - 8 * (3 & s[5]) & 255], i ^= n[c[r]][e[s[6] >>> 2] >>> 24 - 8 * (3 & s[6]) & 255], e[s[0]] = i
                            }
                            for (let s = 0; s < 4; s++) {
                                const c = t.b[s];
                                i = n[4][e[c[0] >>> 2] >>> 24 - 8 * (3 & c[0]) & 255], i ^= n[5][e[c[1] >>> 2] >>> 24 - 8 * (3 & c[1]) & 255], i ^= n[6][e[c[2] >>> 2] >>> 24 - 8 * (3 & c[2]) & 255], i ^= n[7][e[c[3] >>> 2] >>> 24 - 8 * (3 & c[3]) & 255], i ^= n[4 + s][e[c[4] >>> 2] >>> 24 - 8 * (3 & c[4]) & 255], r[o] = i, o += 1
                            }
                        }
                    for (let t = 0; t < 16; t++) this.masking[t] = r[t], this.rotate[t] = 31 & r[16 + t];
                    return this
                }
                encrypt(t, e, r, i) {
                    let n = u(t, e),
                        s = u(t, e + 4);
                    return [n, s] = [s, n ^ o(s, this.masking[0], this.rotate[0])], [n, s] = [s, n ^ h(s, this.masking[1], this.rotate[1])], [n, s] = [s, n ^ a(s, this.masking[2], this.rotate[2])], [n, s] = [s, n ^ o(s, this.masking[3], this.rotate[3])], [n, s] = [s, n ^ h(s, this.masking[4], this.rotate[4])], [n, s] = [s, n ^ a(s, this.masking[5], this.rotate[5])], [n, s] = [s, n ^ o(s, this.masking[6], this.rotate[6])], [n, s] = [s, n ^ h(s, this.masking[7], this.rotate[7])], [n, s] = [s, n ^ a(s, this.masking[8], this.rotate[8])], [n, s] = [s, n ^ o(s, this.masking[9], this.rotate[9])], [n, s] = [s, n ^ h(s, this.masking[10], this.rotate[10])], [n, s] = [s, n ^ a(s, this.masking[11], this.rotate[11])], [n, s] = [s, n ^ o(s, this.masking[12], this.rotate[12])], [n, s] = [s, n ^ h(s, this.masking[13], this.rotate[13])], [n, s] = [s, n ^ a(s, this.masking[14], this.rotate[14])], [n, s] = [s, n ^ o(s, this.masking[15], this.rotate[15])], l(r, s, i), l(r, n, i + 4), this
                }
                decrypt(t, e, r, i) {
                    let n = u(t, e),
                        s = u(t, e + 4);
                    return [n, s] = [s, n ^ o(s, this.masking[15], this.rotate[15])], [n, s] = [s, n ^ a(s, this.masking[14], this.rotate[14])], [n, s] = [s, n ^ h(s, this.masking[13], this.rotate[13])], [n, s] = [s, n ^ o(s, this.masking[12], this.rotate[12])], [n, s] = [s, n ^ a(s, this.masking[11], this.rotate[11])], [n, s] = [s, n ^ h(s, this.masking[10], this.rotate[10])], [n, s] = [s, n ^ o(s, this.masking[9], this.rotate[9])], [n, s] = [s, n ^ a(s, this.masking[8], this.rotate[8])], [n, s] = [s, n ^ h(s, this.masking[7], this.rotate[7])], [n, s] = [s, n ^ o(s, this.masking[6], this.rotate[6])], [n, s] = [s, n ^ a(s, this.masking[5], this.rotate[5])], [n, s] = [s, n ^ h(s, this.masking[4], this.rotate[4])], [n, s] = [s, n ^ o(s, this.masking[3], this.rotate[3])], [n, s] = [s, n ^ a(s, this.masking[2], this.rotate[2])], [n, s] = [s, n ^ h(s, this.masking[1], this.rotate[1])], [n, s] = [s, n ^ o(s, this.masking[0], this.rotate[0])], l(r, s, i), l(r, n, i + 4), this
                }
            }
        },
        9994: function(t, e, r) {
            "use strict";
            const i = r(5466),
                n = new Uint8Array([14, 11, 17, 4, 27, 23, 25, 0, 13, 22, 7, 18, 5, 9, 16, 24, 2, 20, 12, 21, 1, 8, 15, 26, 15, 4, 25, 19, 9, 1, 26, 16, 5, 11, 23, 8, 12, 7, 17, 0, 22, 3, 10, 14, 6, 20, 27, 24]),
                s = new Uint8Array([14, 0, 4, 15, 13, 7, 1, 4, 2, 14, 15, 2, 11, 13, 8, 1, 3, 10, 10, 6, 6, 12, 12, 11, 5, 9, 9, 5, 0, 3, 7, 8, 4, 15, 1, 12, 14, 8, 8, 2, 13, 4, 6, 9, 2, 1, 11, 7, 15, 5, 12, 11, 9, 3, 7, 14, 3, 10, 10, 0, 5, 6, 0, 13, 15, 3, 1, 13, 8, 4, 14, 7, 6, 15, 11, 2, 3, 8, 4, 14, 9, 12, 7, 0, 2, 1, 13, 10, 12, 6, 0, 9, 5, 11, 10, 5, 0, 13, 14, 8, 7, 10, 11, 1, 10, 3, 4, 15, 13, 4, 1, 2, 5, 11, 8, 6, 12, 7, 6, 12, 9, 0, 3, 5, 2, 14, 15, 9, 10, 13, 0, 7, 9, 0, 14, 9, 6, 3, 3, 4, 15, 6, 5, 10, 1, 2, 13, 8, 12, 5, 7, 14, 11, 12, 4, 11, 2, 15, 8, 1, 13, 1, 6, 10, 4, 13, 9, 0, 8, 6, 15, 9, 3, 8, 0, 7, 11, 4, 1, 15, 2, 14, 12, 3, 5, 11, 10, 5, 14, 2, 7, 12, 7, 13, 13, 8, 14, 11, 3, 5, 0, 6, 6, 15, 9, 0, 10, 3, 1, 4, 2, 7, 8, 2, 5, 12, 11, 1, 12, 10, 4, 14, 15, 9, 10, 3, 6, 15, 9, 0, 0, 6, 12, 10, 11, 1, 7, 13, 13, 8, 15, 9, 1, 4, 3, 5, 14, 11, 5, 12, 2, 7, 8, 2, 4, 14, 2, 14, 12, 11, 4, 2, 1, 12, 7, 4, 10, 7, 11, 13, 6, 1, 8, 5, 5, 0, 3, 15, 15, 10, 13, 3, 0, 9, 14, 8, 9, 6, 4, 11, 2, 8, 1, 12, 11, 7, 10, 1, 13, 14, 7, 2, 8, 13, 15, 6, 9, 15, 12, 0, 5, 9, 6, 10, 3, 4, 0, 5, 14, 3, 12, 10, 1, 15, 10, 4, 15, 2, 9, 7, 2, 12, 6, 9, 8, 5, 0, 6, 13, 1, 3, 13, 4, 14, 14, 0, 7, 11, 5, 3, 11, 8, 9, 4, 14, 3, 15, 2, 5, 12, 2, 9, 8, 5, 12, 15, 3, 10, 7, 11, 0, 14, 4, 1, 10, 7, 1, 6, 13, 0, 11, 8, 6, 13, 4, 13, 11, 0, 2, 11, 14, 7, 15, 4, 0, 9, 8, 1, 13, 10, 3, 14, 12, 3, 9, 5, 7, 12, 5, 2, 10, 15, 6, 8, 1, 6, 1, 6, 4, 11, 11, 13, 13, 8, 12, 1, 3, 4, 7, 10, 14, 7, 10, 9, 15, 5, 6, 0, 8, 15, 0, 14, 5, 2, 9, 3, 2, 12, 13, 1, 2, 15, 8, 13, 4, 8, 6, 10, 15, 3, 11, 7, 1, 4, 10, 12, 9, 5, 3, 6, 14, 11, 5, 0, 0, 14, 12, 9, 7, 2, 7, 2, 11, 1, 4, 14, 1, 7, 9, 4, 12, 10, 14, 8, 2, 13, 0, 15, 6, 12, 10, 9, 13, 0, 15, 3, 3, 5, 5, 6, 8, 11]),
                c = new Uint8Array([16, 25, 12, 11, 3, 20, 4, 15, 31, 17, 9, 6, 27, 14, 1, 22, 30, 24, 8, 18, 0, 5, 29, 23, 13, 19, 2, 26, 10, 21, 28, 7]),
                o = new Uint8Array([1, 1, 2, 2, 2, 2, 2, 2, 1, 2, 2, 2, 2, 2, 2, 1]);
            class DES {
                constructor() {
                    this.block = new Uint32Array(2), this.keys = new Uint32Array(32)
                }
                get blockSize() {
                    return 8
                }
                init(t) {
                    return i(Buffer.isBuffer(t)), i(8 === t.length), this.derive(t)
                }
                encrypt(t, e, r, i) {
                    return this.crypt(t, e, r, i, !0)
                }
                decrypt(t, e, r, i) {
                    return this.crypt(t, e, r, i, !1)
                }
                destroy() {
                    for (let t = 0; t < 2; t++) this.block[t] = 0;
                    for (let t = 0; t < 32; t++) this.keys[t] = 0;
                    return this
                }
                derive(t) {
                    let e = p(t, 0),
                        r = p(t, 4);
                    ! function(t, e, r, i) {
                        let n = 0,
                            s = 0;
                        for (let r = 7; r >= 5; r--) {
                            for (let t = 0; t <= 24; t += 8) n <<= 1, n |= e >> t + r & 1;
                            for (let e = 0; e <= 24; e += 8) n <<= 1, n |= t >> e + r & 1
                        }
                        for (let t = 0; t <= 24; t += 8) n <<= 1, n |= e >> t + 4 & 1;
                        for (let r = 1; r <= 3; r++) {
                            for (let t = 0; t <= 24; t += 8) s <<= 1, s |= e >> t + r & 1;
                            for (let e = 0; e <= 24; e += 8) s <<= 1, s |= t >> e + r & 1
                        }
                        for (let e = 0; e <= 24; e += 8) s <<= 1, s |= t >> e + 4 & 1;
                        r[i + 0] = n >>> 0, r[i + 1] = s >>> 0
                    }(e, r, this.block, 0), e = this.block[0], r = this.block[1];
                    for (let t = 0; t < this.keys.length; t += 2) {
                        const i = o[t >>> 1];
                        e = a(e, i), r = a(r, i), u(e, r, this.keys, t)
                    }
                    return this
                }
                crypt(t, e, r, i, n) {
                    let s = p(t, e),
                        c = p(t, e + 4);
                    return function(t, e, r, i) {
                        let n = 0,
                            s = 0;
                        for (let r = 6; r >= 0; r -= 2) {
                            for (let t = 0; t <= 24; t += 8) n <<= 1, n |= e >>> t + r & 1;
                            for (let e = 0; e <= 24; e += 8) n <<= 1, n |= t >>> e + r & 1
                        }
                        for (let r = 6; r >= 0; r -= 2) {
                            for (let t = 1; t <= 25; t += 8) s <<= 1, s |= e >>> t + r & 1;
                            for (let e = 1; e <= 25; e += 8) s <<= 1, s |= t >>> e + r & 1
                        }
                        r[i + 0] = n >>> 0, r[i + 1] = s >>> 0
                    }(s, c, this.block, 0), s = this.block[0], c = this.block[1], n ? this.encipher(s, c, this.block, 0) : this.decipher(s, c, this.block, 0), s = this.block[0], c = this.block[1], y(r, s, i), y(r, c, i + 4), this
                }
                encipher(t, e, r, i) {
                    let n = t,
                        s = e;
                    for (let t = 0; t < this.keys.length; t += 2) {
                        let e = this.keys[t],
                            r = this.keys[t + 1];
                        l(s, this.block, 0), e ^= this.block[0], r ^= this.block[1];
                        const i = s;
                        s = (n ^ d(f(e, r))) >>> 0, n = i
                    }
                    return h(s, n, r, i), this
                }
                decipher(t, e, r, i) {
                    let n = e,
                        s = t;
                    for (let t = this.keys.length - 2; t >= 0; t -= 2) {
                        let e = this.keys[t],
                            r = this.keys[t + 1];
                        l(n, this.block, 0), e ^= this.block[0], r ^= this.block[1];
                        const i = n;
                        n = (s ^ d(f(e, r))) >>> 0, s = i
                    }
                    return h(n, s, r, i), this
                }
            }

            function h(t, e, r, i) {
                let n = 0,
                    s = 0;
                for (let r = 0; r < 4; r++)
                    for (let i = 24; i >= 0; i -= 8) n <<= 1, n |= e >>> i + r & 1, n <<= 1, n |= t >>> i + r & 1;
                for (let r = 4; r < 8; r++)
                    for (let i = 24; i >= 0; i -= 8) s <<= 1, s |= e >>> i + r & 1, s <<= 1, s |= t >>> i + r & 1;
                r[i + 0] = n >>> 0, r[i + 1] = s >>> 0
            }

            function a(t, e) {
                return t << e & 268435455 | t >>> 28 - e
            }

            function u(t, e, r, i) {
                let s = 0,
                    c = 0;
                const o = n.length >>> 1;
                for (let e = 0; e < o; e++) s <<= 1, s |= t >>> n[e] & 1;
                for (let t = o; t < n.length; t++) c <<= 1, c |= e >>> n[t] & 1;
                r[i + 0] = s >>> 0, r[i + 1] = c >>> 0
            }

            function l(t, e, r) {
                let i = 0,
                    n = 0;
                i = (1 & t) << 5 | t >>> 27;
                for (let e = 23; e >= 15; e -= 4) i <<= 6, i |= t >>> e & 63;
                for (let e = 11; e >= 3; e -= 4) n |= t >>> e & 63, n <<= 6;
                n |= (31 & t) << 1 | t >>> 31, e[r + 0] = i >>> 0, e[r + 1] = n >>> 0
            }

            function f(t, e) {
                let r = 0;
                for (let e = 0; e < 4; e++) {
                    r <<= 4, r |= s[64 * e + (t >>> 18 - 6 * e & 63)]
                }
                for (let t = 0; t < 4; t++) {
                    r <<= 4, r |= s[256 + 64 * t + (e >>> 18 - 6 * t & 63)]
                }
                return r >>> 0
            }

            function d(t) {
                let e = 0;
                for (let r = 0; r < c.length; r++) e <<= 1, e |= t >>> c[r] & 1;
                return e >>> 0
            }

            function p(t, e) {
                return 16777216 * t[e++] + 65536 * t[e++] + 256 * t[e++] + t[e]
            }

            function y(t, e, r) {
                return t[r++] = e >>> 24, t[r++] = e >>> 16, t[r++] = e >>> 8, t[r++] = e, r
            }
            e.DES = DES, e.EDE = class EDE {
                constructor() {
                    this.x = new DES, this.y = new DES
                }
                get blockSize() {
                    return 8
                }
                init(t) {
                    i(Buffer.isBuffer(t)), i(16 === t.length);
                    const e = t.slice(0, 8),
                        r = t.slice(8, 16);
                    return this.x.init(e), this.y.init(r), this
                }
                encrypt(t, e, r, i) {
                    return this.x.encrypt(t, e, r, i), this.y.decrypt(r, i, r, i), this.x.encrypt(r, i, r, i), this
                }
                decrypt(t, e, r, i) {
                    return this.x.decrypt(t, e, r, i), this.y.encrypt(r, i, r, i), this.x.decrypt(r, i, r, i), this
                }
                destroy() {
                    return this.x.destroy(), this.y.destroy(), this
                }
            }, e.EDE3 = class EDE3 {
                constructor() {
                    this.x = new DES, this.y = new DES, this.z = new DES
                }
                get blockSize() {
                    return 8
                }
                init(t) {
                    i(Buffer.isBuffer(t)), i(24 === t.length);
                    const e = t.slice(0, 8),
                        r = t.slice(8, 16),
                        n = t.slice(16, 24);
                    return this.x.init(e), this.y.init(r), this.z.init(n), this
                }
                encrypt(t, e, r, i) {
                    return this.x.encrypt(t, e, r, i), this.y.decrypt(r, i, r, i), this.z.encrypt(r, i, r, i), this
                }
                decrypt(t, e, r, i) {
                    return this.z.decrypt(t, e, r, i), this.y.encrypt(r, i, r, i), this.x.decrypt(r, i, r, i), this
                }
                destroy() {
                    return this.x.destroy(), this.y.destroy(), this.z.destroy(), this
                }
            }
        },
        9995: function(t, e, r) {
            "use strict";
            const i = r(5466),
                n = Buffer.alloc(16, 0);

            function s(t) {
                if ((t &= 65535) <= 1) return t;
                let e = 65537 / t & 65535,
                    r = 65537 % t;
                if (1 === r) return 1 - e & 65535;
                let i = 1,
                    n = 0;
                for (; 1 !== r;) {
                    if (n = t / r & 65535, i += n * e, i &= 65535, 1 === (t %= r)) return i;
                    n = r / t & 65535, r %= t, e += n * i, e &= 65535
                }
                return 1 - e & 65535
            }

            function c(t, e) {
                if (t &= 65535, 0 === (e &= 65535)) return 1 - t & 65535;
                if (0 === t) return 1 - e & 65535;
                const r = t * e >>> 0;
                return (t = 65535 & r) < (e = r >>> 16) ? t - e + 1 & 65535 : t - e & 65535
            }

            function o(t, e) {
                return 256 * t[e++] + t[e]
            }

            function h(t, e, r) {
                return t[r++] = e >>> 8, t[r++] = e, r
            }
            t.exports = class IDEA {
                constructor() {
                    this.key = n, this.encryptKey = null, this.decryptKey = null
                }
                get blockSize() {
                    return 8
                }
                init(t) {
                    return i(Buffer.isBuffer(t)), i(16 === t.length), this.destroy(), this.key = Buffer.from(t), this
                }
                getEncryptKey() {
                    return this.encryptKey || (this.encryptKey = this.expandKey(this.key)), this.encryptKey
                }
                getDecryptKey() {
                    return this.decryptKey || (this.decryptKey = this.invertKey(this.getEncryptKey())), this.decryptKey
                }
                encrypt(t, e, r, i) {
                    const n = this.getEncryptKey();
                    return this.crypt(t, e, r, i, n)
                }
                decrypt(t, e, r, i) {
                    const n = this.getDecryptKey();
                    return this.crypt(t, e, r, i, n)
                }
                destroy() {
                    for (let t = 0; t < 16; t++) this.key[t] = 0;
                    if (this.encryptKey)
                        for (let t = 0; t < 52; t++) this.encryptKey[t] = 0;
                    if (this.decryptKey)
                        for (let t = 0; t < 52; t++) this.decryptKey[t] = 0;
                    return this.key = n, this.encryptKey = null, this.decryptKey = null, this
                }
                expandKey(t) {
                    const e = new Uint16Array(52);
                    let r = 0,
                        i = 0,
                        n = 0;
                    for (; i < 8; i++) e[i] = o(t, r), r += 2;
                    for (r = 0; i < 52; i++) n += 1, e[r + (n + 7)] = e[r + (7 & n)] << 9 | e[r + (n + 1 & 7)] >>> 7, r += 8 & n, n &= 7;
                    return e
                }
                invertKey(t) {
                    const e = new Uint16Array(52);
                    let r, i, n, c = 52,
                        o = 0;
                    r = s(t[o]), o += 1, i = -t[o], o += 1, n = -t[o], o += 1, c -= 1, e[c] = s(t[o]), o += 1, c -= 1, e[c] = n, c -= 1, e[c] = i, c -= 1, e[c] = r;
                    for (let h = 0; h < 7; h++) r = t[o], o += 1, c -= 1, e[c] = t[o], o += 1, c -= 1, e[c] = r, r = s(t[o]), o += 1, i = -t[o], o += 1, n = -t[o], o += 1, c -= 1, e[c] = s(t[o]), o += 1, c -= 1, e[c] = i, c -= 1, e[c] = n, c -= 1, e[c] = r;
                    return r = t[o], o += 1, c -= 1, e[c] = t[o], o += 1, c -= 1, e[c] = r, r = s(t[o]), o += 1, i = -t[o], o += 1, n = -t[o], o += 1, c -= 1, e[c] = s(t[o]), c -= 1, e[c] = n, c -= 1, e[c] = i, c -= 1, e[c] = r, e
                }
                crypt(t, e, r, i, n) {
                    let s = o(t, e + 0),
                        a = o(t, e + 2),
                        u = o(t, e + 4),
                        l = o(t, e + 6),
                        f = 0,
                        d = 0,
                        p = 0;
                    for (let t = 8; t > 0; t--) s = c(s, n[p]), p += 1, a += n[p], p += 1, u += n[p], p += 1, l = c(l, n[p]), p += 1, d = u, u ^= s, u = c(u, n[p]), p += 1, f = a, a ^= l, a += u, a = c(a, n[p]), p += 1, u += a, s ^= a, l ^= u, a ^= d, u ^= f;
                    s = c(s, n[p]), p += 1, u += n[p], p += 1, a += n[p], p += 1, l = c(l, n[p]), h(r, s, i + 0), h(r, u, i + 2), h(r, a, i + 4), h(r, l, i + 6)
                }
            }
        },
        9996: function(t, e, r) {
            "use strict";
            const i = r(5466),
                n = new Uint8Array([217, 120, 249, 196, 25, 221, 181, 237, 40, 233, 253, 121, 74, 160, 216, 157, 198, 126, 55, 131, 43, 118, 83, 142, 98, 76, 100, 136, 68, 139, 251, 162, 23, 154, 89, 245, 135, 179, 79, 19, 97, 69, 109, 141, 9, 129, 125, 50, 189, 143, 64, 235, 134, 183, 123, 11, 240, 149, 33, 34, 92, 107, 78, 130, 84, 214, 101, 147, 206, 96, 178, 28, 115, 86, 192, 20, 167, 140, 241, 220, 18, 117, 202, 31, 59, 190, 228, 209, 66, 61, 212, 48, 163, 60, 182, 38, 111, 191, 14, 218, 70, 105, 7, 87, 39, 242, 29, 155, 188, 148, 67, 3, 248, 17, 199, 246, 144, 239, 62, 231, 6, 195, 213, 47, 200, 102, 30, 215, 8, 232, 234, 222, 128, 82, 238, 247, 132, 170, 114, 172, 53, 77, 106, 42, 150, 26, 210, 113, 90, 21, 73, 116, 75, 159, 208, 94, 4, 24, 164, 236, 194, 224, 65, 110, 15, 81, 203, 204, 36, 145, 175, 80, 161, 244, 112, 57, 153, 124, 58, 133, 35, 184, 180, 122, 252, 2, 54, 91, 37, 85, 151, 49, 45, 93, 250, 152, 227, 138, 146, 174, 5, 223, 41, 16, 103, 108, 186, 201, 211, 0, 230, 207, 225, 158, 168, 44, 99, 22, 1, 63, 88, 226, 137, 169, 13, 56, 52, 27, 171, 51, 255, 176, 187, 72, 12, 95, 185, 177, 205, 46, 197, 243, 219, 71, 229, 165, 156, 119, 10, 166, 32, 104, 254, 127, 193, 173]);

            function s(t, e) {
                return t >>> 16 - e | t << e
            }

            function c(t, e) {
                return t[e++] + 256 * t[e]
            }

            function o(t, e, r) {
                return t[r++] = e, t[r++] = e >>> 8, r
            }
            t.exports = class RC2 {
                constructor() {
                    this.k = new Uint16Array(64), this.r = new Uint16Array(4)
                }
                get blockSize() {
                    return 8
                }
                init(t) {
                    return i(Buffer.isBuffer(t)), i(t.length >= 1 && t.length <= 128), this.expandKey(t, 8 * t.length), this
                }
                expandKey(t, e) {
                    const r = Buffer.alloc(128, 0);
                    t.copy(r, 0);
                    const i = t.length,
                        s = e + 7 >>> 3,
                        c = 255 % (1 << 8 + e - 8 * s);
                    for (let e = t.length; e < 128; e++) r[e] = n[r[e - 1] + r[e - i & 255] & 255];
                    r[128 - s] = n[r[128 - s] & c];
                    for (let t = 127 - s; t >= 0; t--) r[t] = n[r[t + 1] ^ r[t + s]];
                    for (let t = 0; t < 64; t++) this.k[t] = r[2 * t] + 256 * r[2 * t + 1];
                    return this
                }
                encrypt(t, e, r, i) {
                    const n = this.r;
                    n[0] = c(t, e + 0), n[1] = c(t, e + 2), n[2] = c(t, e + 4), n[3] = c(t, e + 6);
                    let h = 0;
                    for (; h <= 16;) n[0] += this.k[h], n[0] += n[3] & n[2], n[0] += ~n[3] & n[1], n[0] = s(n[0], 1), h += 1, n[1] += this.k[h], n[1] += n[0] & n[3], n[1] += ~n[0] & n[2], n[1] = s(n[1], 2), h += 1, n[2] += this.k[h], n[2] += n[1] & n[0], n[2] += ~n[1] & n[3], n[2] = s(n[2], 3), h += 1, n[3] += this.k[h], n[3] += n[2] & n[1], n[3] += ~n[2] & n[0], n[3] = s(n[3], 5), h += 1;
                    for (n[0] += this.k[63 & n[3]], n[1] += this.k[63 & n[0]], n[2] += this.k[63 & n[1]], n[3] += this.k[63 & n[2]]; h <= 40;) n[0] += this.k[h], n[0] += n[3] & n[2], n[0] += ~n[3] & n[1], n[0] = s(n[0], 1), h += 1, n[1] += this.k[h], n[1] += n[0] & n[3], n[1] += ~n[0] & n[2], n[1] = s(n[1], 2), h += 1, n[2] += this.k[h], n[2] += n[1] & n[0], n[2] += ~n[1] & n[3], n[2] = s(n[2], 3), h += 1, n[3] += this.k[h], n[3] += n[2] & n[1], n[3] += ~n[2] & n[0], n[3] = s(n[3], 5), h += 1;
                    for (n[0] += this.k[63 & n[3]], n[1] += this.k[63 & n[0]], n[2] += this.k[63 & n[1]], n[3] += this.k[63 & n[2]]; h <= 60;) n[0] += this.k[h], n[0] += n[3] & n[2], n[0] += ~n[3] & n[1], n[0] = s(n[0], 1), h += 1, n[1] += this.k[h], n[1] += n[0] & n[3], n[1] += ~n[0] & n[2], n[1] = s(n[1], 2), h += 1, n[2] += this.k[h], n[2] += n[1] & n[0], n[2] += ~n[1] & n[3], n[2] = s(n[2], 3), h += 1, n[3] += this.k[h], n[3] += n[2] & n[1], n[3] += ~n[2] & n[0], n[3] = s(n[3], 5), h += 1;
                    o(r, n[0], i + 0), o(r, n[1], i + 2), o(r, n[2], i + 4), o(r, n[3], i + 6)
                }
                decrypt(t, e, r, i) {
                    const n = this.r;
                    n[0] = c(t, e + 0), n[1] = c(t, e + 2), n[2] = c(t, e + 4), n[3] = c(t, e + 6);
                    let h = 63;
                    for (; h >= 44;) n[3] = s(n[3], 11), n[3] -= this.k[h], n[3] -= n[2] & n[1], n[3] -= ~n[2] & n[0], h -= 1, n[2] = s(n[2], 13), n[2] -= this.k[h], n[2] -= n[1] & n[0], n[2] -= ~n[1] & n[3], h -= 1, n[1] = s(n[1], 14), n[1] -= this.k[h], n[1] -= n[0] & n[3], n[1] -= ~n[0] & n[2], h -= 1, n[0] = s(n[0], 15), n[0] -= this.k[h], n[0] -= n[3] & n[2], n[0] -= ~n[3] & n[1], h -= 1;
                    for (n[3] -= this.k[63 & n[2]], n[2] -= this.k[63 & n[1]], n[1] -= this.k[63 & n[0]], n[0] -= this.k[63 & n[3]]; h >= 20;) n[3] = s(n[3], 11), n[3] -= this.k[h], n[3] -= n[2] & n[1], n[3] -= ~n[2] & n[0], h -= 1, n[2] = s(n[2], 13), n[2] -= this.k[h], n[2] -= n[1] & n[0], n[2] -= ~n[1] & n[3], h -= 1, n[1] = s(n[1], 14), n[1] -= this.k[h], n[1] -= n[0] & n[3], n[1] -= ~n[0] & n[2], h -= 1, n[0] = s(n[0], 15), n[0] -= this.k[h], n[0] -= n[3] & n[2], n[0] -= ~n[3] & n[1], h -= 1;
                    for (n[3] -= this.k[63 & n[2]], n[2] -= this.k[63 & n[1]], n[1] -= this.k[63 & n[0]], n[0] -= this.k[63 & n[3]]; h >= 0;) n[3] = s(n[3], 11), n[3] -= this.k[h], n[3] -= n[2] & n[1], n[3] -= ~n[2] & n[0], h -= 1, n[2] = s(n[2], 13), n[2] -= this.k[h], n[2] -= n[1] & n[0], n[2] -= ~n[1] & n[3], h -= 1, n[1] = s(n[1], 14), n[1] -= this.k[h], n[1] -= n[0] & n[3], n[1] -= ~n[0] & n[2], h -= 1, n[0] = s(n[0], 15), n[0] -= this.k[h], n[0] -= n[3] & n[2], n[0] -= ~n[3] & n[1], h -= 1;
                    o(r, n[0], i + 0), o(r, n[1], i + 2), o(r, n[2], i + 4), o(r, n[3], i + 6)
                }
                destroy() {
                    for (let t = 0; t < 64; t++) this.k[t] = 0;
                    for (let t = 0; t < 4; t++) this.r[t] = 0;
                    return this
                }
            }
        },
        9997: function(t, e, r) {
            "use strict";
            const i = r(5466),
                n = [new Uint8Array([1, 164, 85, 135, 90, 88, 219, 158]), new Uint8Array([164, 86, 130, 243, 30, 198, 104, 229]), new Uint8Array([2, 161, 252, 193, 71, 174, 61, 25]), new Uint8Array([164, 85, 135, 90, 88, 219, 158, 3])],
                s = new Uint8Array([169, 103, 179, 232, 4, 253, 163, 118, 154, 146, 128, 120, 228, 221, 209, 56, 13, 198, 53, 152, 24, 247, 236, 108, 67, 117, 55, 38, 250, 19, 148, 72, 242, 208, 139, 48, 132, 84, 223, 35, 25, 91, 61, 89, 243, 174, 162, 130, 99, 1, 131, 46, 217, 81, 155, 124, 166, 235, 165, 190, 22, 12, 227, 97, 192, 140, 58, 245, 115, 44, 37, 11, 187, 78, 137, 107, 83, 106, 180, 241, 225, 230, 189, 69, 226, 244, 182, 102, 204, 149, 3, 86, 212, 28, 30, 215, 251, 195, 142, 181, 233, 207, 191, 186, 234, 119, 57, 175, 51, 201, 98, 113, 129, 121, 9, 173, 36, 205, 249, 216, 229, 197, 185, 77, 68, 8, 134, 231, 161, 29, 170, 237, 6, 112, 178, 210, 65, 123, 160, 17, 49, 194, 39, 144, 32, 246, 96, 255, 150, 92, 177, 171, 158, 156, 82, 27, 95, 147, 10, 239, 145, 133, 73, 238, 45, 79, 143, 59, 71, 135, 109, 70, 214, 62, 105, 100, 42, 206, 203, 47, 252, 151, 5, 122, 172, 127, 213, 26, 75, 14, 167, 90, 40, 20, 63, 41, 136, 60, 76, 2, 184, 218, 176, 23, 85, 31, 138, 125, 87, 199, 141, 116, 183, 196, 159, 114, 126, 21, 34, 18, 88, 7, 153, 52, 110, 80, 222, 104, 101, 188, 219, 248, 200, 168, 43, 64, 220, 254, 50, 164, 202, 16, 33, 240, 211, 93, 15, 0, 111, 157, 54, 66, 74, 94, 193, 224]),
                c = new Uint8Array([117, 243, 198, 244, 219, 123, 251, 200, 74, 211, 230, 107, 69, 125, 232, 75, 214, 50, 216, 253, 55, 113, 241, 225, 48, 15, 248, 27, 135, 250, 6, 63, 94, 186, 174, 91, 138, 0, 188, 157, 109, 193, 177, 14, 128, 93, 210, 213, 160, 132, 7, 20, 181, 144, 44, 163, 178, 115, 76, 84, 146, 116, 54, 81, 56, 176, 189, 90, 252, 96, 98, 150, 108, 66, 247, 16, 124, 40, 39, 140, 19, 149, 156, 199, 36, 70, 59, 112, 202, 227, 133, 203, 17, 208, 147, 184, 166, 131, 32, 255, 159, 119, 195, 204, 3, 111, 8, 191, 64, 231, 43, 226, 121, 12, 170, 130, 65, 58, 234, 185, 228, 154, 164, 151, 126, 218, 122, 23, 102, 148, 161, 29, 61, 240, 222, 179, 11, 114, 167, 28, 239, 209, 83, 62, 143, 51, 38, 95, 236, 118, 42, 73, 129, 136, 238, 33, 196, 26, 235, 217, 197, 57, 153, 205, 173, 49, 139, 1, 24, 35, 221, 31, 78, 45, 249, 72, 79, 242, 101, 142, 120, 92, 88, 25, 141, 229, 152, 87, 103, 127, 5, 100, 175, 99, 182, 254, 245, 183, 60, 165, 206, 233, 104, 68, 224, 77, 67, 105, 41, 46, 172, 21, 89, 168, 10, 158, 110, 71, 223, 52, 53, 106, 207, 220, 34, 201, 192, 155, 137, 212, 237, 171, 18, 162, 13, 82, 187, 2, 47, 169, 215, 97, 30, 180, 80, 4, 246, 194, 22, 37, 134, 86, 85, 9, 190, 145]);

            function o(t, e, r) {
                const i = new Uint32Array([0, 255 & e]),
                    n = new Uint32Array([0, r >>> 0]);
                let s = 0;
                for (let e = 0; e < 7; e++) s ^= i[1 & t], t >>>= 1, i[1] = n[i[1] >>> 7] ^ i[1] << 1;
                return s ^= i[1 & t], 255 & s
            }

            function h(t, e) {
                const r = 255 & t,
                    i = o(t, 91, 361),
                    n = o(t, 239, 361);
                switch (e) {
                    case 0:
                        return r | i << 8 | n << 16 | n << 24;
                    case 1:
                        return n | n << 8 | i << 16 | r << 24;
                    case 2:
                        return i | n << 8 | r << 16 | n << 24;
                    case 3:
                        return i | r << 8 | n << 16 | i << 24
                }
                throw new Error("unreachable")
            }

            function a(t, e, r) {
                const i = new Uint8Array(4);
                for (let e = 0; e < 4; e++) i[e] = t[e];
                switch (e.length >>> 3) {
                    case 4:
                        i[0] = c[i[0]] ^ e[4 * (6 + r) + 0], i[1] = s[i[1]] ^ e[4 * (6 + r) + 1], i[2] = s[i[2]] ^ e[4 * (6 + r) + 2], i[3] = c[i[3]] ^ e[4 * (6 + r) + 3];
                    case 3:
                        i[0] = c[i[0]] ^ e[4 * (4 + r) + 0], i[1] = c[i[1]] ^ e[4 * (4 + r) + 1], i[2] = s[i[2]] ^ e[4 * (4 + r) + 2], i[3] = s[i[3]] ^ e[4 * (4 + r) + 3];
                    case 2:
                        i[0] = c[s[s[i[0]] ^ e[4 * (2 + r) + 0]] ^ e[4 * (0 + r) + 0]], i[1] = s[s[c[i[1]] ^ e[4 * (2 + r) + 1]] ^ e[4 * (0 + r) + 1]], i[2] = c[c[s[i[2]] ^ e[4 * (2 + r) + 2]] ^ e[4 * (0 + r) + 2]], i[3] = s[c[c[i[3]] ^ e[4 * (2 + r) + 3]] ^ e[4 * (0 + r) + 3]];
                        break;
                    default:
                        throw new Error("Invalid key size.")
                }
                let n = 0;
                for (let t = 0; t < 4; t++) n ^= h(i[t], t);
                return n >>> 0
            }

            function u(t, e) {
                return t << (31 & e) | t >>> 32 - (31 & e)
            }

            function l(t, e) {
                return t >>> (31 & e) | t << 32 - (31 & e)
            }

            function f(t) {
                for (let e = 0; e < t.length; e++) t[e] = 0
            }

            function d(t, e) {
                return t[e++] + 256 * t[e++] + 65536 * t[e++] + 16777216 * t[e++]
            }

            function p(t, e, r) {
                return t[r++] = e, e >>>= 8, t[r++] = e, e >>>= 8, t[r++] = e, e >>>= 8, t[r++] = e, r
            }
            t.exports = class Twofish {
                constructor(t = 256) {
                    i(t >>> 0 === t), i(128 === t || 192 === t || 256 === t), this.bits = t, this.S = [new Uint32Array(256), new Uint32Array(256), new Uint32Array(256), new Uint32Array(256)], this.k = new Uint32Array(40)
                }
                get blockSize() {
                    return 16
                }
                init(t) {
                    i(Buffer.isBuffer(t));
                    const e = t.length;
                    if (16 !== e && 24 !== e && 32 !== e) throw new Error("Invalid key size.");
                    if (e !== this.bits >>> 3) throw new Error("Invalid key size.");
                    const r = e >>> 3,
                        l = new Uint8Array(16);
                    for (let e = 0; e < r; e++)
                        for (let r = 0; r < 4; r++) {
                            const i = n[r];
                            for (let n = 0; n < 8; n++) l[4 * e + r] ^= o(t[8 * e + n], i[n], 333)
                        }
                    const f = new Uint8Array(4);
                    for (let e = 0; e < 20; e++) {
                        for (let t = 0; t < 4; t++) f[t] = 2 * e;
                        const r = a(f, t, 0);
                        for (let t = 0; t < 4; t++) f[t] = 2 * e + 1;
                        const i = u(a(f, t, 1), 8);
                        this.k[2 * e] = r + i, this.k[2 * e + 1] = u(2 * i + r, 9)
                    }
                    switch (r) {
                        case 2:
                            for (let t = 0; t < 256; t++) this.S[0][t] = h(c[s[s[t] ^ l[0]] ^ l[4]], 0), this.S[1][t] = h(s[s[c[t] ^ l[1]] ^ l[5]], 1), this.S[2][t] = h(c[c[s[t] ^ l[2]] ^ l[6]], 2), this.S[3][t] = h(s[c[c[t] ^ l[3]] ^ l[7]], 3);
                            break;
                        case 3:
                            for (let t = 0; t < 256; t++) this.S[0][t] = h(c[s[s[c[t] ^ l[0]] ^ l[4]] ^ l[8]], 0), this.S[1][t] = h(s[s[c[c[t] ^ l[1]] ^ l[5]] ^ l[9]], 1), this.S[2][t] = h(c[c[s[s[t] ^ l[2]] ^ l[6]] ^ l[10]], 2), this.S[3][t] = h(s[c[c[s[t] ^ l[3]] ^ l[7]] ^ l[11]], 3);
                            break;
                        case 4:
                            for (let t = 0; t < 256; t++) this.S[0][t] = h(c[s[s[c[c[t] ^ l[0]] ^ l[4]] ^ l[8]] ^ l[12]], 0), this.S[1][t] = h(s[s[c[c[s[t] ^ l[1]] ^ l[5]] ^ l[9]] ^ l[13]], 1), this.S[2][t] = h(c[c[s[s[s[t] ^ l[2]] ^ l[6]] ^ l[10]] ^ l[14]], 2), this.S[3][t] = h(s[c[c[s[c[t] ^ l[3]] ^ l[7]] ^ l[11]] ^ l[15]], 3);
                            break;
                        default:
                            throw new Error("unreachable")
                    }
                    return this
                }
                encrypt(t, e, r, i) {
                    const n = this.S[0],
                        s = this.S[1],
                        c = this.S[2],
                        o = this.S[3];
                    let h, a, f = d(t, e + 0),
                        y = d(t, e + 4),
                        v = d(t, e + 8),
                        w = d(t, e + 12);
                    f ^= this.k[0], y ^= this.k[1], v ^= this.k[2], w ^= this.k[3];
                    for (let t = 0; t < 8; t++) {
                        const e = this.k.subarray(8 + 4 * t, 12 + 4 * t);
                        a = s[255 & y] ^ c[y >>> 8 & 255] ^ o[y >>> 16 & 255] ^ n[y >>> 24 & 255], h = (n[255 & f] ^ s[f >>> 8 & 255] ^ c[f >>> 16 & 255] ^ o[f >>> 24 & 255]) + a, v = l(v ^ h + e[0], 1), w = u(w, 1) ^ a + h + e[1], a = s[255 & w] ^ c[w >>> 8 & 255] ^ o[w >>> 16 & 255] ^ n[w >>> 24 & 255], h = (n[255 & v] ^ s[v >>> 8 & 255] ^ c[v >>> 16 & 255] ^ o[v >>> 24 & 255]) + a, f = l(f ^ h + e[2], 1), y = u(y, 1) ^ a + h + e[3]
                    }
                    const g = v ^ this.k[4],
                        m = w ^ this.k[5],
                        b = f ^ this.k[6],
                        k = y ^ this.k[7];
                    return p(r, g, i + 0), p(r, m, i + 4), p(r, b, i + 8), p(r, k, i + 12), this
                }
                decrypt(t, e, r, i) {
                    const n = this.S[0],
                        s = this.S[1],
                        c = this.S[2],
                        o = this.S[3],
                        h = d(t, e + 0),
                        a = d(t, e + 4),
                        f = d(t, e + 8),
                        y = d(t, e + 12);
                    let v, w, g = f ^ this.k[6],
                        m = y ^ this.k[7],
                        b = h ^ this.k[4],
                        k = a ^ this.k[5];
                    for (let t = 8; t > 0; t--) {
                        const e = this.k.subarray(4 + 4 * t, 8 + 4 * t);
                        w = s[255 & k] ^ c[k >>> 8 & 255] ^ o[k >>> 16 & 255] ^ n[k >>> 24 & 255], v = (n[255 & b] ^ s[b >>> 8 & 255] ^ c[b >>> 16 & 255] ^ o[b >>> 24 & 255]) + w, g = u(g, 1) ^ v + e[2], m = l(m ^ w + v + e[3], 1), w = s[255 & m] ^ c[m >>> 8 & 255] ^ o[m >>> 16 & 255] ^ n[m >>> 24 & 255], v = (n[255 & g] ^ s[g >>> 8 & 255] ^ c[g >>> 16 & 255] ^ o[g >>> 24 & 255]) + w, b = u(b, 1) ^ v + e[0], k = l(k ^ w + v + e[1], 1)
                    }
                    return g ^= this.k[0], m ^= this.k[1], b ^= this.k[2], k ^= this.k[3], p(r, g, i + 0), p(r, m, i + 4), p(r, b, i + 8), p(r, k, i + 12), this
                }
                destroy() {
                    return f(this.S[0]), f(this.S[1]), f(this.S[2]), f(this.S[3]), f(this.k), this
                }
            }
        },
        9999: function(t, e, r) {
            "use strict";
            const i = r(5466);
            let n = 0;

            function s(t) {
                i(Buffer.isBuffer(t));
                let e = n;
                for (let r = 0; r < t.length; r++) t[r] = 255 & e, e += r;
                n = e >>> 0
            }
            s.native = 0, t.exports = s
        }
    }
]);