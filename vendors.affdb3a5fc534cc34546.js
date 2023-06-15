/*! For license information please see vendors.affdb3a5fc534cc34546.js.LICENSE.txt */
(window.webpackJsonp = window.webpackJsonp || []).push([
    [269], {
        10899: function(t, e, r) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), r(10900);
            var n = r(10979);
            Object.keys(n).forEach((function(t) {
                "default" !== t && "__esModule" !== t && (t in e && e[t] === n[t] || Object.defineProperty(e, t, {
                    enumerable: !0,
                    get: function() {
                        return n[t]
                    }
                }))
            }))
        },
        10900: function(t, e, r) {
            "use strict";
            var n = r(2),
                i = r(5458),
                s = n(r(10977)),
                o = r(7780);
            (0, i.detectPackage)(o.packageInfo, null, s.default)
        },
        10977: function(t, e, r) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.default = void 0;
            var n = r(10978),
                i = r(5763),
                s = r(5976),
                o = [n.packageInfo, i.packageInfo, s.packageInfo];
            e.default = o
        },
        10978: function(t, e, r) {
            function n(t) {
                const e = r.p;
                let n = "";
                return (!e || e.indexOf("://") < 0) && (n += window.location.protocol + "//" + window.location.host), n += e || "/", n + t
            }
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.packageInfo = void 0;
            const i = {
                name: "@polkadot/api-base",
                path: (n("node_modules/@polkadot/api-base/packageInfo.js"), n("node_modules/@polkadot/api-base/packageInfo.js") ? new URL(n("node_modules/@polkadot/api-base/packageInfo.js")).pathname.substring(0, new URL(n("node_modules/@polkadot/api-base/packageInfo.js")).pathname.lastIndexOf("/") + 1) : "auto"),
                type: "esm",
                version: "7.15.1"
            };
            e.packageInfo = i
        },
        10979: function(t, e, r) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), Object.defineProperty(e, "packageInfo", {
                enumerable: !0,
                get: function() {
                    return n.packageInfo
                }
            }), r(10980);
            var n = r(7780)
        },
        10980: function(t, e, r) {
            "use strict";
            r(10981), r(10999), r(11e3), r(11001), r(11002), r(11003), r(11005)
        },
        10981: function(t, e, r) {
            "use strict";
            r(7781), r(10987)
        },
        10999: function(t, e, r) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            })
        },
        11e3: function(t, e, r) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            })
        },
        11001: function(t, e, r) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            })
        },
        11002: function(t, e, r) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            })
        },
        11003: function(t, e, r) {
            "use strict";
            r(11004)
        },
        11005: function(t, e, r) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            })
        },
        11473: function(t, e, r) {
            "use strict";
            var n = r(2),
                i = r(5458),
                s = n(r(11474)),
                o = r(7899);
            (0, i.detectPackage)(o.packageInfo, null, s.default)
        },
        11474: function(t, e, r) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.default = void 0;
            var n = r(5971),
                i = r(6880),
                s = [n.packageInfo, i.packageInfo];
            e.default = s
        },
        11475: function(t, e, r) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            });
            var n = {
                Keyring: !0,
                decodeAddress: !0,
                encodeAddress: !0,
                setSS58Format: !0,
                createPair: !0,
                packageInfo: !0,
                createTestKeyring: !0,
                createTestPairs: !0
            };
            Object.defineProperty(e, "Keyring", {
                enumerable: !0,
                get: function() {
                    return i.Keyring
                }
            }), Object.defineProperty(e, "createPair", {
                enumerable: !0,
                get: function() {
                    return a.createPair
                }
            }), Object.defineProperty(e, "createTestKeyring", {
                enumerable: !0,
                get: function() {
                    return h.createTestKeyring
                }
            }), Object.defineProperty(e, "createTestPairs", {
                enumerable: !0,
                get: function() {
                    return u.createTestPairs
                }
            }), Object.defineProperty(e, "decodeAddress", {
                enumerable: !0,
                get: function() {
                    return s.decodeAddress
                }
            }), Object.defineProperty(e, "encodeAddress", {
                enumerable: !0,
                get: function() {
                    return s.encodeAddress
                }
            }), Object.defineProperty(e, "packageInfo", {
                enumerable: !0,
                get: function() {
                    return c.packageInfo
                }
            }), Object.defineProperty(e, "setSS58Format", {
                enumerable: !0,
                get: function() {
                    return s.setSS58Format
                }
            });
            var i = r(7900),
                s = r(5820),
                o = r(7938);
            Object.keys(o).forEach((function(t) {
                "default" !== t && "__esModule" !== t && (Object.prototype.hasOwnProperty.call(n, t) || t in e && e[t] === o[t] || Object.defineProperty(e, t, {
                    enumerable: !0,
                    get: function() {
                        return o[t]
                    }
                }))
            }));
            var a = r(6900),
                c = r(7899),
                h = r(7940),
                u = r(11580)
        },
        11483: function(t, e, r) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.crypto = void 0, e.crypto = {
                node: void 0,
                web: "object" == typeof self && "crypto" in self ? self.crypto : void 0
            }
        },
        11500: function(t, e, r) {
            "use strict";
            var n = this && this.__createBinding || (Object.create ? function(t, e, r, n) {
                    void 0 === n && (n = r), Object.defineProperty(t, n, {
                        enumerable: !0,
                        get: function() {
                            return e[r]
                        }
                    })
                } : function(t, e, r, n) {
                    void 0 === n && (n = r), t[n] = e[r]
                }),
                i = this && this.__setModuleDefault || (Object.create ? function(t, e) {
                    Object.defineProperty(t, "default", {
                        enumerable: !0,
                        value: e
                    })
                } : function(t, e) {
                    t.default = e
                }),
                s = this && this.__importStar || function(t) {
                    if (t && t.__esModule) return t;
                    var e = {};
                    if (null != t)
                        for (var r in t) "default" !== r && Object.prototype.hasOwnProperty.call(t, r) && n(e, t, r);
                    return i(e, t), e
                };
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.blake2b = void 0;
            const o = s(r(11501)),
                a = s(r(6884)),
                c = r(5768),
                h = new Uint32Array([4089235720, 1779033703, 2227873595, 3144134277, 4271175723, 1013904242, 1595750129, 2773480762, 2917565137, 1359893119, 725511199, 2600822924, 4215389547, 528734635, 327033209, 1541459225]),
                u = new Uint32Array(32);

            function d(t, e, r, n, i, s) {
                const o = i[s],
                    c = i[s + 1];
                let h = u[2 * t],
                    d = u[2 * t + 1],
                    f = u[2 * e],
                    l = u[2 * e + 1],
                    y = u[2 * r],
                    p = u[2 * r + 1],
                    b = u[2 * n],
                    w = u[2 * n + 1],
                    g = a.add3L(h, f, o);
                d = a.add3H(g, d, l, c), h = 0 | g, ({
                    Dh: w,
                    Dl: b
                } = {
                    Dh: w ^ d,
                    Dl: b ^ h
                }), ({
                    Dh: w,
                    Dl: b
                } = {
                    Dh: a.rotr32H(w, b),
                    Dl: a.rotr32L(w, b)
                }), ({
                    h: p,
                    l: y
                } = a.add(p, y, w, b)), ({
                    Bh: l,
                    Bl: f
                } = {
                    Bh: l ^ p,
                    Bl: f ^ y
                }), ({
                    Bh: l,
                    Bl: f
                } = {
                    Bh: a.rotrSH(l, f, 24),
                    Bl: a.rotrSL(l, f, 24)
                }), u[2 * t] = h, u[2 * t + 1] = d, u[2 * e] = f, u[2 * e + 1] = l, u[2 * r] = y, u[2 * r + 1] = p, u[2 * n] = b, u[2 * n + 1] = w
            }

            function f(t, e, r, n, i, s) {
                const o = i[s],
                    c = i[s + 1];
                let h = u[2 * t],
                    d = u[2 * t + 1],
                    f = u[2 * e],
                    l = u[2 * e + 1],
                    y = u[2 * r],
                    p = u[2 * r + 1],
                    b = u[2 * n],
                    w = u[2 * n + 1],
                    g = a.add3L(h, f, o);
                d = a.add3H(g, d, l, c), h = 0 | g, ({
                    Dh: w,
                    Dl: b
                } = {
                    Dh: w ^ d,
                    Dl: b ^ h
                }), ({
                    Dh: w,
                    Dl: b
                } = {
                    Dh: a.rotrSH(w, b, 16),
                    Dl: a.rotrSL(w, b, 16)
                }), ({
                    h: p,
                    l: y
                } = a.add(p, y, w, b)), ({
                    Bh: l,
                    Bl: f
                } = {
                    Bh: l ^ p,
                    Bl: f ^ y
                }), ({
                    Bh: l,
                    Bl: f
                } = {
                    Bh: a.rotrBH(l, f, 63),
                    Bl: a.rotrBL(l, f, 63)
                }), u[2 * t] = h, u[2 * t + 1] = d, u[2 * e] = f, u[2 * e + 1] = l, u[2 * r] = y, u[2 * r + 1] = p, u[2 * n] = b, u[2 * n + 1] = w
            }
            class BLAKE2b extends o.BLAKE2 {
                constructor(t = {}) {
                    super(128, void 0 === t.dkLen ? 64 : t.dkLen, t, 64, 16, 16), this.v0l = 0 | h[0], this.v0h = 0 | h[1], this.v1l = 0 | h[2], this.v1h = 0 | h[3], this.v2l = 0 | h[4], this.v2h = 0 | h[5], this.v3l = 0 | h[6], this.v3h = 0 | h[7], this.v4l = 0 | h[8], this.v4h = 0 | h[9], this.v5l = 0 | h[10], this.v5h = 0 | h[11], this.v6l = 0 | h[12], this.v6h = 0 | h[13], this.v7l = 0 | h[14], this.v7h = 0 | h[15];
                    const e = t.key ? t.key.length : 0;
                    if (this.v0l ^= this.outputLen | e << 8 | 65536 | 1 << 24, t.salt) {
                        const e = (0, c.u32)((0, c.toBytes)(t.salt));
                        this.v4l ^= e[0], this.v4h ^= e[1], this.v5l ^= e[2], this.v5h ^= e[3]
                    }
                    if (t.personalization) {
                        const e = (0, c.u32)((0, c.toBytes)(t.personalization));
                        this.v6l ^= e[0], this.v6h ^= e[1], this.v7l ^= e[2], this.v7h ^= e[3]
                    }
                    if (t.key) {
                        const e = new Uint8Array(this.blockLen);
                        e.set((0, c.toBytes)(t.key)), this.update(e)
                    }
                }
                get() {
                    let {
                        v0l: t,
                        v0h: e,
                        v1l: r,
                        v1h: n,
                        v2l: i,
                        v2h: s,
                        v3l: o,
                        v3h: a,
                        v4l: c,
                        v4h: h,
                        v5l: u,
                        v5h: d,
                        v6l: f,
                        v6h: l,
                        v7l: y,
                        v7h: p
                    } = this;
                    return [t, e, r, n, i, s, o, a, c, h, u, d, f, l, y, p]
                }
                set(t, e, r, n, i, s, o, a, c, h, u, d, f, l, y, p) {
                    this.v0l = 0 | t, this.v0h = 0 | e, this.v1l = 0 | r, this.v1h = 0 | n, this.v2l = 0 | i, this.v2h = 0 | s, this.v3l = 0 | o, this.v3h = 0 | a, this.v4l = 0 | c, this.v4h = 0 | h, this.v5l = 0 | u, this.v5h = 0 | d, this.v6l = 0 | f, this.v6h = 0 | l, this.v7l = 0 | y, this.v7h = 0 | p
                }
                compress(t, e, r) {
                    this.get().forEach((t, e) => u[e] = t), u.set(h, 16);
                    let {
                        h: n,
                        l: i
                    } = a.fromBig(BigInt(this.length));
                    u[24] = h[8] ^ i, u[25] = h[9] ^ n, r && (u[28] = ~u[28], u[29] = ~u[29]);
                    let s = 0;
                    const c = o.SIGMA;
                    for (let r = 0; r < 12; r++) d(0, 4, 8, 12, t, e + 2 * c[s++]), f(0, 4, 8, 12, t, e + 2 * c[s++]), d(1, 5, 9, 13, t, e + 2 * c[s++]), f(1, 5, 9, 13, t, e + 2 * c[s++]), d(2, 6, 10, 14, t, e + 2 * c[s++]), f(2, 6, 10, 14, t, e + 2 * c[s++]), d(3, 7, 11, 15, t, e + 2 * c[s++]), f(3, 7, 11, 15, t, e + 2 * c[s++]), d(0, 5, 10, 15, t, e + 2 * c[s++]), f(0, 5, 10, 15, t, e + 2 * c[s++]), d(1, 6, 11, 12, t, e + 2 * c[s++]), f(1, 6, 11, 12, t, e + 2 * c[s++]), d(2, 7, 8, 13, t, e + 2 * c[s++]), f(2, 7, 8, 13, t, e + 2 * c[s++]), d(3, 4, 9, 14, t, e + 2 * c[s++]), f(3, 4, 9, 14, t, e + 2 * c[s++]);
                    this.v0l ^= u[0] ^ u[16], this.v0h ^= u[1] ^ u[17], this.v1l ^= u[2] ^ u[18], this.v1h ^= u[3] ^ u[19], this.v2l ^= u[4] ^ u[20], this.v2h ^= u[5] ^ u[21], this.v3l ^= u[6] ^ u[22], this.v3h ^= u[7] ^ u[23], this.v4l ^= u[8] ^ u[24], this.v4h ^= u[9] ^ u[25], this.v5l ^= u[10] ^ u[26], this.v5h ^= u[11] ^ u[27], this.v6l ^= u[12] ^ u[28], this.v6h ^= u[13] ^ u[29], this.v7l ^= u[14] ^ u[30], this.v7h ^= u[15] ^ u[31], u.fill(0)
                }
                destroy() {
                    this.destroyed = !0, this.buffer32.fill(0), this.set(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0)
                }
            }
            e.blake2b = (0, c.wrapConstructorWithOpts)(t => new BLAKE2b(t))
        },
        11501: function(t, e, r) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.BLAKE2 = e.SIGMA = void 0;
            const n = r(5768);
            e.SIGMA = new Uint8Array([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 14, 10, 4, 8, 9, 15, 13, 6, 1, 12, 0, 2, 11, 7, 5, 3, 11, 8, 12, 0, 5, 2, 15, 13, 10, 14, 3, 6, 7, 1, 9, 4, 7, 9, 3, 1, 13, 12, 11, 14, 2, 6, 5, 10, 4, 0, 15, 8, 9, 0, 5, 7, 2, 4, 10, 15, 14, 1, 11, 12, 6, 8, 3, 13, 2, 12, 6, 10, 0, 11, 8, 3, 4, 13, 7, 5, 15, 14, 1, 9, 12, 5, 1, 15, 14, 13, 4, 10, 0, 7, 6, 3, 9, 2, 8, 11, 13, 11, 7, 14, 12, 1, 3, 9, 5, 0, 15, 4, 8, 6, 2, 10, 6, 15, 14, 9, 11, 3, 0, 8, 12, 2, 13, 7, 1, 4, 10, 5, 10, 2, 8, 4, 7, 6, 1, 5, 15, 11, 9, 14, 3, 12, 13, 0, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 14, 10, 4, 8, 9, 15, 13, 6, 1, 12, 0, 2, 11, 7, 5, 3]);
            class BLAKE2 extends n.Hash {
                constructor(t, e, r = {}, i, s, o) {
                    if (super(), this.blockLen = t, this.outputLen = e, this.length = 0, this.pos = 0, this.finished = !1, this.destroyed = !1, (0, n.assertNumber)(t), (0, n.assertNumber)(e), (0, n.assertNumber)(i), e < 0 || e > i) throw new Error("Blake2: outputLen bigger than keyLen");
                    if (void 0 !== r.key && (r.key.length < 1 || r.key.length > i)) throw new Error(`Key should be up 1..${i} byte long or undefined`);
                    if (void 0 !== r.salt && r.salt.length !== s) throw new Error(`Salt should be ${s} byte long or undefined`);
                    if (void 0 !== r.personalization && r.personalization.length !== o) throw new Error(`Personalization should be ${o} byte long or undefined`);
                    this.buffer32 = (0, n.u32)(this.buffer = new Uint8Array(t))
                }
                update(t) {
                    if (this.destroyed) throw new Error("instance is destroyed");
                    const {
                        finished: e,
                        blockLen: r,
                        buffer: i,
                        buffer32: s
                    } = this;
                    if (e) throw new Error("digest() was already called");
                    const o = (t = (0, n.toBytes)(t)).length;
                    for (let e = 0; e < o;) {
                        this.pos === r && (this.compress(s, 0, !1), this.pos = 0);
                        const n = Math.min(r - this.pos, o - e),
                            a = t.byteOffset + e;
                        if (n !== r || a % 4 || !(e + n < o)) i.set(t.subarray(e, e + n), this.pos), this.pos += n, this.length += n, e += n;
                        else {
                            const n = new Uint32Array(t.buffer, a, Math.floor((o - e) / 4));
                            for (let t = 0; e + r < o; t += s.length, e += r) this.length += r, this.compress(n, t, !1)
                        }
                    }
                    return this
                }
                digestInto(t) {
                    if (this.destroyed) throw new Error("instance is destroyed");
                    if (!(t instanceof Uint8Array) || t.length < this.outputLen) throw new Error("_Blake2: Invalid output buffer");
                    const {
                        finished: e,
                        pos: r,
                        buffer32: i
                    } = this;
                    if (e) throw new Error("digest() was already called");
                    this.finished = !0, this.buffer.subarray(r).fill(0), this.compress(i, 0, !0);
                    const s = (0, n.u32)(t);
                    this.get().forEach((t, e) => s[e] = t)
                }
                digest() {
                    const {
                        buffer: t,
                        outputLen: e
                    } = this;
                    this.digestInto(t);
                    const r = t.slice(0, e);
                    return this.destroy(), r
                }
                _cloneInto(t) {
                    const {
                        buffer: e,
                        length: r,
                        finished: n,
                        destroyed: i,
                        outputLen: s,
                        pos: o
                    } = this;
                    return t || (t = new this.constructor({
                        dkLen: s
                    })), t.set(...this.get()), t.length = r, t.finished = n, t.destroyed = i, t.outputLen = s, t.buffer.set(e), t.pos = o, t
                }
            }
            e.BLAKE2 = BLAKE2
        },
        11532: function(t, e, r) {
            "use strict";
            var n = this && this.__createBinding || (Object.create ? function(t, e, r, n) {
                    void 0 === n && (n = r), Object.defineProperty(t, n, {
                        enumerable: !0,
                        get: function() {
                            return e[r]
                        }
                    })
                } : function(t, e, r, n) {
                    void 0 === n && (n = r), t[n] = e[r]
                }),
                i = this && this.__setModuleDefault || (Object.create ? function(t, e) {
                    Object.defineProperty(t, "default", {
                        enumerable: !0,
                        value: e
                    })
                } : function(t, e) {
                    t.default = e
                }),
                s = this && this.__importStar || function(t) {
                    if (t && t.__esModule) return t;
                    var e = {};
                    if (null != t)
                        for (var r in t) "default" !== r && Object.prototype.hasOwnProperty.call(t, r) && n(e, t, r);
                    return i(e, t), e
                };
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.shake256 = e.shake128 = e.keccak_512 = e.keccak_384 = e.keccak_256 = e.keccak_224 = e.sha3_512 = e.sha3_384 = e.sha3_256 = e.sha3_224 = e.Keccak = e.keccakP = void 0;
            const o = s(r(6884)),
                a = r(5768),
                [c, h, u] = [
                    [],
                    [],
                    []
                ],
                d = BigInt(0),
                f = BigInt(1),
                l = BigInt(2),
                y = BigInt(7),
                p = BigInt(256),
                b = BigInt(113);
            for (let t = 0, e = f, r = 1, n = 0; t < 24; t++) {
                [r, n] = [n, (2 * r + 3 * n) % 5], c.push(2 * (5 * n + r)), h.push((t + 1) * (t + 2) / 2 % 64);
                let i = d;
                for (let t = 0; t < 7; t++) e = (e << f ^ (e >> y) * b) % p, e & l && (i ^= f << (f << BigInt(t)) - f);
                u.push(i)
            }
            const [w, g] = o.split(u, !0), m = (t, e, r) => r > 32 ? o.rotlBH(t, e, r) : o.rotlSH(t, e, r), v = (t, e, r) => r > 32 ? o.rotlBL(t, e, r) : o.rotlSL(t, e, r);

            function x(t, e = 24) {
                const r = new Uint32Array(10);
                for (let n = 24 - e; n < 24; n++) {
                    for (let e = 0; e < 10; e++) r[e] = t[e] ^ t[e + 10] ^ t[e + 20] ^ t[e + 30] ^ t[e + 40];
                    for (let e = 0; e < 10; e += 2) {
                        const n = (e + 8) % 10,
                            i = (e + 2) % 10,
                            s = r[i],
                            o = r[i + 1],
                            a = m(s, o, 1) ^ r[n],
                            c = v(s, o, 1) ^ r[n + 1];
                        for (let r = 0; r < 50; r += 10) t[e + r] ^= a, t[e + r + 1] ^= c
                    }
                    let e = t[2],
                        i = t[3];
                    for (let r = 0; r < 24; r++) {
                        const n = h[r],
                            s = m(e, i, n),
                            o = v(e, i, n),
                            a = c[r];
                        e = t[a], i = t[a + 1], t[a] = s, t[a + 1] = o
                    }
                    for (let e = 0; e < 50; e += 10) {
                        for (let n = 0; n < 10; n++) r[n] = t[e + n];
                        for (let n = 0; n < 10; n++) t[e + n] ^= ~r[(n + 2) % 10] & r[(n + 4) % 10]
                    }
                    t[0] ^= w[n], t[1] ^= g[n]
                }
                r.fill(0)
            }
            e.keccakP = x;
            class Keccak extends a.Hash {
                constructor(t, e, r, n = !1, i = 24) {
                    if (super(), this.blockLen = t, this.suffix = e, this.outputLen = r, this.enableXOF = n, this.rounds = i, this.pos = 0, this.posOut = 0, this.finished = !1, this.destroyed = !1, (0, a.assertNumber)(r), 0 >= this.blockLen || this.blockLen >= 200) throw new Error("Sha3 supports only keccak-f1600 function");
                    this.state = new Uint8Array(200), this.state32 = (0, a.u32)(this.state)
                }
                keccak() {
                    x(this.state32, this.rounds), this.posOut = 0, this.pos = 0
                }
                update(t) {
                    if (this.destroyed) throw new Error("instance is destroyed");
                    if (this.finished) throw new Error("digest() was already called");
                    const {
                        blockLen: e,
                        state: r
                    } = this, n = (t = (0, a.toBytes)(t)).length;
                    for (let i = 0; i < n;) {
                        const s = Math.min(e - this.pos, n - i);
                        for (let e = 0; e < s; e++) r[this.pos++] ^= t[i++];
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
                        pos: r,
                        blockLen: n
                    } = this;
                    t[r] ^= e, 0 != (128 & e) && r === n - 1 && this.keccak(), t[n - 1] ^= 128, this.keccak()
                }
                writeInto(t) {
                    if (this.destroyed) throw new Error("instance is destroyed");
                    if (!(t instanceof Uint8Array)) throw new Error("Keccak: invalid output buffer");
                    this.finish();
                    for (let e = 0, r = t.length; e < r;) {
                        this.posOut >= this.blockLen && this.keccak();
                        const n = Math.min(this.blockLen - this.posOut, r - e);
                        t.set(this.state.subarray(this.posOut, this.posOut + n), e), this.posOut += n, e += n
                    }
                    return t
                }
                xofInto(t) {
                    if (!this.enableXOF) throw new Error("XOF is not possible for this instance");
                    return this.writeInto(t)
                }
                xof(t) {
                    return (0, a.assertNumber)(t), this.xofInto(new Uint8Array(t))
                }
                digestInto(t) {
                    if (t.length < this.outputLen) throw new Error("Keccak: invalid output buffer");
                    if (this.finished) throw new Error("digest() was already called");
                    return this.finish(), this.writeInto(t), this.destroy(), t
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
                        suffix: r,
                        outputLen: n,
                        rounds: i,
                        enableXOF: s
                    } = this;
                    return t || (t = new Keccak(e, r, n, s, i)), t.state32.set(this.state32), t.pos = this.pos, t.posOut = this.posOut, t.finished = this.finished, t.rounds = i, t.suffix = r, t.outputLen = n, t.enableXOF = s, t.destroyed = this.destroyed, t
                }
            }
            e.Keccak = Keccak;
            const E = (t, e, r) => (0, a.wrapConstructor)(() => new Keccak(e, t, r));
            e.sha3_224 = E(6, 144, 28), e.sha3_256 = E(6, 136, 32), e.sha3_384 = E(6, 104, 48), e.sha3_512 = E(6, 72, 64), e.keccak_224 = E(1, 144, 28), e.keccak_256 = E(1, 136, 32), e.keccak_384 = E(1, 104, 48), e.keccak_512 = E(1, 72, 64);
            const k = (t, e, r) => (0, a.wrapConstructorWithOpts)((n = {}) => new Keccak(e, t, void 0 !== n.dkLen ? n.dkLen : r, !0));
            e.shake128 = k(31, 168, 16), e.shake256 = k(31, 136, 32)
        },
        11567: function(t, e, r) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.scryptAsync = e.scrypt = void 0;
            const n = r(6882),
                i = r(7931),
                s = r(5768),
                o = (t, e) => t << e | t >>> 32 - e;

            function a(t, e, r, n, i, s) {
                let a = t[e++] ^ r[n++],
                    c = t[e++] ^ r[n++],
                    h = t[e++] ^ r[n++],
                    u = t[e++] ^ r[n++],
                    d = t[e++] ^ r[n++],
                    f = t[e++] ^ r[n++],
                    l = t[e++] ^ r[n++],
                    y = t[e++] ^ r[n++],
                    p = t[e++] ^ r[n++],
                    b = t[e++] ^ r[n++],
                    w = t[e++] ^ r[n++],
                    g = t[e++] ^ r[n++],
                    m = t[e++] ^ r[n++],
                    v = t[e++] ^ r[n++],
                    x = t[e++] ^ r[n++],
                    E = t[e++] ^ r[n++],
                    k = a,
                    A = c,
                    S = h,
                    P = u,
                    B = d,
                    H = f,
                    L = l,
                    I = y,
                    _ = p,
                    O = b,
                    U = w,
                    j = g,
                    D = m,
                    T = v,
                    M = x,
                    C = E;
                for (let t = 0; t < 8; t += 2) B ^= o(k + D | 0, 7), _ ^= o(B + k | 0, 9), D ^= o(_ + B | 0, 13), k ^= o(D + _ | 0, 18), O ^= o(H + A | 0, 7), T ^= o(O + H | 0, 9), A ^= o(T + O | 0, 13), H ^= o(A + T | 0, 18), M ^= o(U + L | 0, 7), S ^= o(M + U | 0, 9), L ^= o(S + M | 0, 13), U ^= o(L + S | 0, 18), P ^= o(C + j | 0, 7), I ^= o(P + C | 0, 9), j ^= o(I + P | 0, 13), C ^= o(j + I | 0, 18), A ^= o(k + P | 0, 7), S ^= o(A + k | 0, 9), P ^= o(S + A | 0, 13), k ^= o(P + S | 0, 18), L ^= o(H + B | 0, 7), I ^= o(L + H | 0, 9), B ^= o(I + L | 0, 13), H ^= o(B + I | 0, 18), j ^= o(U + O | 0, 7), _ ^= o(j + U | 0, 9), O ^= o(_ + j | 0, 13), U ^= o(O + _ | 0, 18), D ^= o(C + M | 0, 7), T ^= o(D + C | 0, 9), M ^= o(T + D | 0, 13), C ^= o(M + T | 0, 18);
                i[s++] = a + k | 0, i[s++] = c + A | 0, i[s++] = h + S | 0, i[s++] = u + P | 0, i[s++] = d + B | 0, i[s++] = f + H | 0, i[s++] = l + L | 0, i[s++] = y + I | 0, i[s++] = p + _ | 0, i[s++] = b + O | 0, i[s++] = w + U | 0, i[s++] = g + j | 0, i[s++] = m + D | 0, i[s++] = v + T | 0, i[s++] = x + M | 0, i[s++] = E + C | 0
            }

            function c(t, e, r, n, i) {
                let s = n + 0,
                    o = n + 16 * i;
                for (let n = 0; n < 16; n++) r[o + n] = t[e + 16 * (2 * i - 1) + n];
                for (let n = 0; n < i; n++, s += 16, e += 16) a(r, o, t, e, r, s), n > 0 && (o += 16), a(r, s, t, e += 16, r, o)
            }

            function h(t, e, r) {
                const o = (0, s.checkOpts)({
                        dkLen: 32,
                        asyncTick: 10,
                        maxmem: 1073742848
                    }, r),
                    {
                        N: a,
                        r: c,
                        p: h,
                        dkLen: u,
                        asyncTick: d,
                        maxmem: f,
                        onProgress: l
                    } = o;
                if ((0, s.assertNumber)(a), (0, s.assertNumber)(c), (0, s.assertNumber)(h), (0, s.assertNumber)(u), (0, s.assertNumber)(d), (0, s.assertNumber)(f), void 0 !== l && "function" != typeof l) throw new Error("progressCb should be function");
                const y = 128 * c,
                    p = y / 4;
                if (a <= 1 || 0 != (a & a - 1) || a >= 2 ** (y / 8) || a > 2 ** 32) throw new Error("Scrypt: N must be larger than 1, a power of 2, less than 2^(128 * r / 8) and less than 2^32");
                if (h < 0 || h > 137438953440 / y) throw new Error("Scrypt: p must be a positive integer less than or equal to ((2^32 - 1) * 32) / (128 * r)");
                if (u < 0 || u > 137438953440) throw new Error("Scrypt: dkLen should be positive integer less than or equal to (2^32 - 1) * 32");
                const b = y * (a + h);
                if (b > f) throw new Error(`Scrypt: parameters too large, ${b} (128 * r * (N + p)) > ${f} (maxmem)`);
                const w = (0, i.pbkdf2)(n.sha256, t, e, {
                        c: 1,
                        dkLen: y * h
                    }),
                    g = (0, s.u32)(w),
                    m = (0, s.u32)(new Uint8Array(y * a)),
                    v = (0, s.u32)(new Uint8Array(y));
                let x = () => {};
                if (l) {
                    const t = 2 * a * h,
                        e = Math.max(Math.floor(t / 1e4), 1);
                    let r = 0;
                    x = () => {
                        r++, !l || r % e && r !== t || l(r / t)
                    }
                }
                return {
                    N: a,
                    r: c,
                    p: h,
                    dkLen: u,
                    blockSize32: p,
                    V: m,
                    B32: g,
                    B: w,
                    tmp: v,
                    blockMixCb: x,
                    asyncTick: d
                }
            }

            function u(t, e, r, s, o) {
                const a = (0, i.pbkdf2)(n.sha256, t, r, {
                    c: 1,
                    dkLen: e
                });
                return r.fill(0), s.fill(0), o.fill(0), a
            }
            e.scrypt = function(t, e, r) {
                const {
                    N: n,
                    r: i,
                    p: s,
                    dkLen: o,
                    blockSize32: a,
                    V: d,
                    B32: f,
                    B: l,
                    tmp: y,
                    blockMixCb: p
                } = h(t, e, r);
                for (let t = 0; t < s; t++) {
                    const e = a * t;
                    for (let t = 0; t < a; t++) d[t] = f[e + t];
                    for (let t = 0, e = 0; t < n - 1; t++) c(d, e, d, e += a, i), p();
                    c(d, (n - 1) * a, f, e, i), p();
                    for (let t = 0; t < n; t++) {
                        const t = f[e + a - 16] % n;
                        for (let r = 0; r < a; r++) y[r] = f[e + r] ^ d[t * a + r];
                        c(y, 0, f, e, i), p()
                    }
                }
                return u(t, o, l, d, y)
            }, e.scryptAsync = async function(t, e, r) {
                const {
                    N: n,
                    r: i,
                    p: o,
                    dkLen: a,
                    blockSize32: d,
                    V: f,
                    B32: l,
                    B: y,
                    tmp: p,
                    blockMixCb: b,
                    asyncTick: w
                } = h(t, e, r);
                for (let t = 0; t < o; t++) {
                    const e = d * t;
                    for (let t = 0; t < d; t++) f[t] = l[e + t];
                    let r = 0;
                    await (0, s.asyncLoop)(n - 1, w, t => {
                        c(f, r, f, r += d, i), b()
                    }), c(f, (n - 1) * d, l, e, i), b(), await (0, s.asyncLoop)(n, w, t => {
                        const r = l[e + d - 16] % n;
                        for (let t = 0; t < d; t++) p[t] = l[e + t] ^ f[r * d + t];
                        c(p, 0, l, e, i), b()
                    })
                }
                return u(t, a, y, f, p)
            }
        },
        5591: function(t, e, r) {
            "use strict";
            r.r(e), r.d(e, "CURVE", (function() {
                return d
            })), r.d(e, "Point", (function() {
                return Point
            })), r.d(e, "Signature", (function() {
                return Signature
            })), r.d(e, "getPublicKey", (function() {
                return N
            })), r.d(e, "recoverPublicKey", (function() {
                return J
            })), r.d(e, "getSharedSecret", (function() {
                return z
            })), r.d(e, "sign", (function() {
                return q
            })), r.d(e, "signSync", (function() {
                return Q
            })), r.d(e, "verify", (function() {
                return tt
            })), r.d(e, "schnorr", (function() {
                return st
            })), r.d(e, "utils", (function() {
                return at
            }));
            var n = r(24),
                i = r.n(n);
            const s = BigInt(0),
                o = BigInt(1),
                a = BigInt(2),
                c = BigInt(3),
                h = BigInt(8),
                u = a ** BigInt(256),
                d = {
                    a: s,
                    b: BigInt(7),
                    P: u - a ** BigInt(32) - BigInt(977),
                    n: u - BigInt("432420386565659656852420866394968145599"),
                    h: o,
                    Gx: BigInt("55066263022277343669578718895168534326250603453777594175500187360389116729240"),
                    Gy: BigInt("32670510020758816978083085130507043184471273380659243275938904335757337482424"),
                    beta: BigInt("0x7ae96a2b657c07106e64479eac3434e99cf0497512f58995c1396c28719501ee")
                };

            function f(t) {
                const {
                    a: e,
                    b: r
                } = d, n = L(t * t), i = L(n * t);
                return L(i + e * t + r)
            }
            const l = d.a === s;
            class JacobianPoint {
                constructor(t, e, r) {
                    this.x = t, this.y = e, this.z = r
                }
                static fromAffine(t) {
                    if (!(t instanceof Point)) throw new TypeError("JacobianPoint#fromAffine: expected Point");
                    return new JacobianPoint(t.x, t.y, o)
                }
                static toAffineBatch(t) {
                    const e = function(t, e = d.P) {
                        const r = new Array(t.length),
                            n = _(t.reduce((t, n, i) => n === s ? t : (r[i] = t, L(t * n, e)), o), e);
                        return t.reduceRight((t, n, i) => n === s ? t : (r[i] = L(t * r[i], e), L(t * n, e)), n), r
                    }(t.map(t => t.z));
                    return t.map((t, r) => t.toAffine(e[r]))
                }
                static normalizeZ(t) {
                    return JacobianPoint.toAffineBatch(t).map(JacobianPoint.fromAffine)
                }
                equals(t) {
                    if (!(t instanceof JacobianPoint)) throw new TypeError("JacobianPoint expected");
                    const {
                        x: e,
                        y: r,
                        z: n
                    } = this, {
                        x: i,
                        y: s,
                        z: o
                    } = t, c = L(n ** a), h = L(o ** a), u = L(e * h), d = L(i * c), f = L(L(r * o) * h), l = L(L(s * n) * c);
                    return u === d && f === l
                }
                negate() {
                    return new JacobianPoint(this.x, L(-this.y), this.z)
                }
                double() {
                    const {
                        x: t,
                        y: e,
                        z: r
                    } = this, n = L(t ** a), i = L(e ** a), s = L(i ** a), o = L(a * (L((t + i) ** a) - n - s)), u = L(c * n), d = L(u ** a), f = L(d - a * o), l = L(u * (o - f) - h * s), y = L(a * e * r);
                    return new JacobianPoint(f, l, y)
                }
                add(t) {
                    if (!(t instanceof JacobianPoint)) throw new TypeError("JacobianPoint expected");
                    const {
                        x: e,
                        y: r,
                        z: n
                    } = this, {
                        x: i,
                        y: o,
                        z: c
                    } = t;
                    if (i === s || o === s) return this;
                    if (e === s || r === s) return t;
                    const h = L(n ** a),
                        u = L(c ** a),
                        d = L(e * u),
                        f = L(i * h),
                        l = L(L(r * c) * u),
                        y = L(L(o * n) * h),
                        p = L(f - d),
                        b = L(y - l);
                    if (p === s) return b === s ? this.double() : JacobianPoint.ZERO;
                    const w = L(p ** a),
                        g = L(p * w),
                        m = L(d * w),
                        v = L(b ** a - g - a * m),
                        x = L(b * (m - v) - l * g),
                        E = L(n * c * p);
                    return new JacobianPoint(v, x, E)
                }
                subtract(t) {
                    return this.add(t.negate())
                }
                multiplyUnsafe(t) {
                    let e = H(t);
                    JacobianPoint.BASE;
                    const r = JacobianPoint.ZERO;
                    if (e === s) return r;
                    if (e === o) return this;
                    if (!l) {
                        let t = r,
                            n = this;
                        for (; e > s;) e & o && (t = t.add(n)), n = n.double(), e >>= o;
                        return t
                    }
                    let {
                        k1neg: n,
                        k1: i,
                        k2neg: a,
                        k2: c
                    } = j(e), h = r, u = r, f = this;
                    for (; i > s || c > s;) i & o && (h = h.add(f)), c & o && (u = u.add(f)), f = f.double(), i >>= o, c >>= o;
                    return n && (h = h.negate()), a && (u = u.negate()), u = new JacobianPoint(L(u.x * d.beta), u.y, u.z), h.add(u)
                }
                precomputeWindow(t) {
                    const e = l ? 128 / t + 1 : 256 / t + 1,
                        r = [];
                    let n = this,
                        i = n;
                    for (let s = 0; s < e; s++) {
                        i = n, r.push(i);
                        for (let e = 1; e < 2 ** (t - 1); e++) i = i.add(n), r.push(i);
                        n = i.double()
                    }
                    return r
                }
                wNAF(t, e) {
                    !e && this.equals(JacobianPoint.BASE) && (e = Point.BASE);
                    const r = e && e._WINDOW_SIZE || 1;
                    if (256 % r) throw new Error("Point#wNAF: Invalid precomputation window, must be power of 2");
                    let n = e && y.get(e);
                    n || (n = this.precomputeWindow(r), e && 1 !== r && (n = JacobianPoint.normalizeZ(n), y.set(e, n)));
                    let i = JacobianPoint.ZERO,
                        s = JacobianPoint.ZERO;
                    const a = 1 + (l ? 128 / r : 256 / r),
                        c = 2 ** (r - 1),
                        h = BigInt(2 ** r - 1),
                        u = 2 ** r,
                        d = BigInt(r);
                    for (let e = 0; e < a; e++) {
                        const r = e * c;
                        let a = Number(t & h);
                        if (t >>= d, a > c && (a -= u, t += o), 0 === a) {
                            let t = n[r];
                            e % 2 && (t = t.negate()), s = s.add(t)
                        } else {
                            let t = n[r + Math.abs(a) - 1];
                            a < 0 && (t = t.negate()), i = i.add(t)
                        }
                    }
                    return {
                        p: i,
                        f: s
                    }
                }
                multiply(t, e) {
                    let r, n, i = H(t);
                    if (l) {
                        const {
                            k1neg: t,
                            k1: s,
                            k2neg: o,
                            k2: a
                        } = j(i);
                        let {
                            p: c,
                            f: h
                        } = this.wNAF(s, e), {
                            p: u,
                            f: f
                        } = this.wNAF(a, e);
                        t && (c = c.negate()), o && (u = u.negate()), u = new JacobianPoint(L(u.x * d.beta), u.y, u.z), r = c.add(u), n = h.add(f)
                    } else {
                        const {
                            p: t,
                            f: s
                        } = this.wNAF(i, e);
                        r = t, n = s
                    }
                    return JacobianPoint.normalizeZ([r, n])[0]
                }
                toAffine(t = _(this.z)) {
                    const {
                        x: e,
                        y: r,
                        z: n
                    } = this, i = t, s = L(i * i), a = L(s * i), c = L(e * s), h = L(r * a);
                    if (L(n * i) !== o) throw new Error("invZ was invalid");
                    return new Point(c, h)
                }
            }
            JacobianPoint.BASE = new JacobianPoint(d.Gx, d.Gy, o), JacobianPoint.ZERO = new JacobianPoint(s, o, s);
            const y = new WeakMap;
            class Point {
                constructor(t, e) {
                    this.x = t, this.y = e
                }
                _setWindowSize(t) {
                    this._WINDOW_SIZE = t, y.delete(this)
                }
                static fromCompressedHex(t) {
                    const e = 32 === t.length,
                        r = P(e ? t : t.subarray(1));
                    if (!M(r)) throw new Error("Point is not on curve");
                    let n = function(t) {
                        const {
                            P: e
                        } = d, r = BigInt(6), n = BigInt(11), i = BigInt(22), s = BigInt(23), o = BigInt(44), h = BigInt(88), u = t * t * t % e, f = u * u * t % e, l = I(f, c) * f % e, y = I(l, c) * f % e, p = I(y, a) * u % e, b = I(p, n) * p % e, w = I(b, i) * b % e, g = I(w, o) * w % e, m = I(g, h) * g % e, v = I(m, o) * w % e, x = I(v, c) * f % e, E = I(x, s) * b % e, k = I(E, r) * u % e;
                        return I(k, a)
                    }(f(r));
                    const i = (n & o) === o;
                    if (e) i && (n = L(-n));
                    else {
                        1 == (1 & t[0]) !== i && (n = L(-n))
                    }
                    const s = new Point(r, n);
                    return s.assertValidity(), s
                }
                static fromUncompressedHex(t) {
                    const e = P(t.subarray(1, 33)),
                        r = P(t.subarray(33, 65)),
                        n = new Point(e, r);
                    return n.assertValidity(), n
                }
                static fromHex(t) {
                    const e = B(t),
                        r = e.length,
                        n = e[0];
                    if (32 === r || 33 === r && (2 === n || 3 === n)) return this.fromCompressedHex(e);
                    if (65 === r && 4 === n) return this.fromUncompressedHex(e);
                    throw new Error("Point.fromHex: received invalid point. Expected 32-33 compressed bytes or 65 uncompressed bytes, not " + r)
                }
                static fromPrivateKey(t) {
                    return Point.BASE.multiply(F(t))
                }
                static fromSignature(t, e, r) {
                    const n = D(t = B(t)),
                        {
                            r: i,
                            s: o
                        } = R(e);
                    if (0 !== r && 1 !== r) throw new Error("Cannot recover signature: invalid recovery bit");
                    if (n === s) throw new Error("Cannot recover signature: msgHash cannot be 0");
                    const a = 1 & r ? "03" : "02",
                        c = Point.fromHex(a + x(i)),
                        {
                            n: h
                        } = d,
                        u = _(i, h),
                        f = L(-n * u, h),
                        l = L(o * u, h),
                        y = Point.BASE.multiplyAndAddUnsafe(c, f, l);
                    if (!y) throw new Error("Cannot recover signature: point at infinify");
                    return y.assertValidity(), y
                }
                toRawBytes(t = !1) {
                    return S(this.toHex(t))
                }
                toHex(t = !1) {
                    const e = x(this.x);
                    if (t) {
                        return `${this.y&o?"03":"02"}${e}`
                    }
                    return `04${e}${x(this.y)}`
                }
                toHexX() {
                    return this.toHex(!0).slice(2)
                }
                toRawX() {
                    return this.toRawBytes(!0).slice(1)
                }
                assertValidity() {
                    const t = "Point is not on elliptic curve",
                        {
                            x: e,
                            y: r
                        } = this;
                    if (!M(e) || !M(r)) throw new Error(t);
                    const n = L(r * r);
                    if (L(n - f(e)) !== s) throw new Error(t)
                }
                equals(t) {
                    return this.x === t.x && this.y === t.y
                }
                negate() {
                    return new Point(this.x, L(-this.y))
                }
                double() {
                    return JacobianPoint.fromAffine(this).double().toAffine()
                }
                add(t) {
                    return JacobianPoint.fromAffine(this).add(JacobianPoint.fromAffine(t)).toAffine()
                }
                subtract(t) {
                    return this.add(t.negate())
                }
                multiply(t) {
                    return JacobianPoint.fromAffine(this).multiply(t, this).toAffine()
                }
                multiplyAndAddUnsafe(t, e, r) {
                    const n = JacobianPoint.fromAffine(this).multiply(e),
                        i = JacobianPoint.fromAffine(t).multiplyUnsafe(r),
                        s = n.add(i);
                    return s.equals(JacobianPoint.ZERO) ? void 0 : s.toAffine()
                }
            }

            function p(t) {
                return Number.parseInt(t[0], 16) >= 8 ? "00" + t : t
            }

            function b(t) {
                if (t.length < 2 || 2 !== t[0]) throw new Error("Invalid signature integer tag: " + v(t));
                const e = t[1],
                    r = t.subarray(2, e + 2);
                if (!e || r.length !== e) throw new Error("Invalid signature integer: wrong length");
                if (0 === r[0] && r[1] <= 127) throw new Error("Invalid signature integer: trailing length");
                return {
                    data: P(r),
                    left: t.subarray(e + 2)
                }
            }
            Point.BASE = new Point(d.Gx, d.Gy), Point.ZERO = new Point(s, s);
            class Signature {
                constructor(t, e) {
                    this.r = t, this.s = e, this.assertValidity()
                }
                static fromCompact(t) {
                    const e = g(t),
                        r = "Signature.fromCompact";
                    if ("string" != typeof t && !e) throw new TypeError(r + ": Expected string or Uint8Array");
                    const n = e ? v(t) : t;
                    if (128 !== n.length) throw new Error(r + ": Expected 64-byte hex");
                    return new Signature(A(n.slice(0, 64)), A(n.slice(64, 128)))
                }
                static fromDER(t) {
                    const e = g(t);
                    if ("string" != typeof t && !e) throw new TypeError("Signature.fromDER: Expected string or Uint8Array");
                    const {
                        r: r,
                        s: n
                    } = function(t) {
                        if (t.length < 2 || 48 != t[0]) throw new Error("Invalid signature tag: " + v(t));
                        if (t[1] !== t.length - 2) throw new Error("Invalid signature: incorrect length");
                        const {
                            data: e,
                            left: r
                        } = b(t.subarray(2)), {
                            data: n,
                            left: i
                        } = b(r);
                        if (i.length) throw new Error("Invalid signature: left bytes after parsing: " + v(i));
                        return {
                            r: e,
                            s: n
                        }
                    }(e ? t : S(t));
                    return new Signature(r, n)
                }
                static fromHex(t) {
                    return this.fromDER(t)
                }
                assertValidity() {
                    const {
                        r: t,
                        s: e
                    } = this;
                    if (!T(t)) throw new Error("Invalid Signature: r must be 0 < r < n");
                    if (!T(e)) throw new Error("Invalid Signature: s must be 0 < s < n")
                }
                hasHighS() {
                    const t = d.n >> o;
                    return this.s > t
                }
                normalizeS() {
                    return this.hasHighS() ? new Signature(this.r, d.n - this.s) : this
                }
                toDERRawBytes(t = !1) {
                    return S(this.toDERHex(t))
                }
                toDERHex(t = !1) {
                    const e = p(k(this.s));
                    if (t) return e;
                    const r = p(k(this.r)),
                        n = k(r.length / 2),
                        i = k(e.length / 2);
                    return `30${k(r.length/2+e.length/2+4)}02${n}${r}02${i}${e}`
                }
                toRawBytes() {
                    return this.toDERRawBytes()
                }
                toHex() {
                    return this.toDERHex()
                }
                toCompactRawBytes() {
                    return S(this.toCompactHex())
                }
                toCompactHex() {
                    return x(this.r) + x(this.s)
                }
            }

            function w(...t) {
                if (!t.every(g)) throw new Error("Uint8Array list expected");
                if (1 === t.length) return t[0];
                const e = t.reduce((t, e) => t + e.length, 0),
                    r = new Uint8Array(e);
                for (let e = 0, n = 0; e < t.length; e++) {
                    const i = t[e];
                    r.set(i, n), n += i.length
                }
                return r
            }

            function g(t) {
                return t instanceof Uint8Array
            }
            const m = Array.from({
                length: 256
            }, (t, e) => e.toString(16).padStart(2, "0"));

            function v(t) {
                if (!(t instanceof Uint8Array)) throw new Error("Expected Uint8Array");
                let e = "";
                for (let r = 0; r < t.length; r++) e += m[t[r]];
                return e
            }

            function x(t) {
                if (t > u) throw new Error("Expected number < 2^256");
                return t.toString(16).padStart(64, "0")
            }

            function E(t) {
                return S(x(t))
            }

            function k(t) {
                const e = t.toString(16);
                return 1 & e.length ? "0" + e : e
            }

            function A(t) {
                if ("string" != typeof t) throw new TypeError("hexToNumber: expected string, got " + typeof t);
                return BigInt("0x" + t)
            }

            function S(t) {
                if ("string" != typeof t) throw new TypeError("hexToBytes: expected string, got " + typeof t);
                if (t.length % 2) throw new Error("hexToBytes: received invalid unpadded hex" + t.length);
                const e = new Uint8Array(t.length / 2);
                for (let r = 0; r < e.length; r++) {
                    const n = 2 * r,
                        i = t.slice(n, n + 2),
                        s = Number.parseInt(i, 16);
                    if (Number.isNaN(s) || s < 0) throw new Error("Invalid byte sequence");
                    e[r] = s
                }
                return e
            }

            function P(t) {
                return A(v(t))
            }

            function B(t) {
                return t instanceof Uint8Array ? Uint8Array.from(t) : S(t)
            }

            function H(t) {
                if ("number" == typeof t && Number.isSafeInteger(t) && t > 0) return BigInt(t);
                if ("bigint" == typeof t && T(t)) return t;
                throw new TypeError("Expected valid private scalar: 0 < scalar < curve.n")
            }

            function L(t, e = d.P) {
                const r = t % e;
                return r >= s ? r : e + r
            }

            function I(t, e) {
                const {
                    P: r
                } = d;
                let n = t;
                for (; e-- > s;) n *= n, n %= r;
                return n
            }

            function _(t, e = d.P) {
                if (t === s || e <= s) throw new Error(`invert: expected positive integers, got n=${t} mod=${e}`);
                let r = L(t, e),
                    n = e,
                    i = s,
                    a = o,
                    c = o,
                    h = s;
                for (; r !== s;) {
                    const t = n / r,
                        e = n % r,
                        s = i - c * t,
                        o = a - h * t;
                    n = r, r = e, i = c, a = h, c = s, h = o
                }
                if (n !== o) throw new Error("invert: does not exist");
                return L(i, e)
            }
            const O = (t, e) => (t + e / a) / e,
                U = a ** BigInt(128);

            function j(t) {
                const {
                    n: e
                } = d, r = BigInt("0x3086d221a7d46bcde86c90e49284eb15"), n = -o * BigInt("0xe4437ed6010e88286f547fa90abfe4c3"), i = BigInt("0x114ca50f7a8e2f3f657c1108d9d44cfd8"), s = r, a = O(s * t, e), c = O(-n * t, e);
                let h = L(t - a * r - c * i, e),
                    u = L(-a * n - c * s, e);
                const f = h > U,
                    l = u > U;
                if (f && (h = e - h), l && (u = e - u), h > U || u > U) throw new Error("splitScalarEndo: Endomorphism failed, k=" + t);
                return {
                    k1neg: f,
                    k1: h,
                    k2neg: l,
                    k2: u
                }
            }

            function D(t) {
                const {
                    n: e
                } = d, r = 8 * t.length - 256;
                let n = P(t);
                return r > 0 && (n >>= BigInt(r)), n >= e && (n -= e), n
            }
            class HmacDrbg {
                constructor() {
                    this.v = new Uint8Array(32).fill(1), this.k = new Uint8Array(32).fill(0), this.counter = 0
                }
                hmac(...t) {
                    return at.hmacSha256(this.k, ...t)
                }
                hmacSync(...t) {
                    if ("function" != typeof at.hmacSha256Sync) throw new Error("utils.hmacSha256Sync is undefined, you need to set it");
                    const e = at.hmacSha256Sync(this.k, ...t);
                    if (e instanceof Promise) throw new Error("To use sync sign(), ensure utils.hmacSha256 is sync");
                    return e
                }
                incr() {
                    if (this.counter >= 1e3) throw new Error("Tried 1,000 k values for sign(), all were invalid");
                    this.counter += 1
                }
                async reseed(t = new Uint8Array) {
                    this.k = await this.hmac(this.v, Uint8Array.from([0]), t), this.v = await this.hmac(this.v), 0 !== t.length && (this.k = await this.hmac(this.v, Uint8Array.from([1]), t), this.v = await this.hmac(this.v))
                }
                reseedSync(t = new Uint8Array) {
                    this.k = this.hmacSync(this.v, Uint8Array.from([0]), t), this.v = this.hmacSync(this.v), 0 !== t.length && (this.k = this.hmacSync(this.v, Uint8Array.from([1]), t), this.v = this.hmacSync(this.v))
                }
                async generate() {
                    return this.incr(), this.v = await this.hmac(this.v), this.v
                }
                generateSync() {
                    return this.incr(), this.v = this.hmacSync(this.v), this.v
                }
            }

            function T(t) {
                return s < t && t < d.n
            }

            function M(t) {
                return s < t && t < d.P
            }

            function C(t, e, r) {
                const n = P(t);
                if (!T(n)) return;
                const {
                    n: i
                } = d, a = Point.BASE.multiply(n), c = L(a.x, i);
                if (c === s) return;
                const h = L(_(n, i) * L(e + r * c, i), i);
                if (h === s) return;
                const u = new Signature(c, h);
                return {
                    sig: u,
                    recovery: (a.x === u.r ? 0 : 2) | Number(a.y & o)
                }
            }

            function F(t) {
                let e;
                if ("bigint" == typeof t) e = t;
                else if ("number" == typeof t && Number.isSafeInteger(t) && t > 0) e = BigInt(t);
                else if ("string" == typeof t) {
                    if (64 !== t.length) throw new Error("Expected 32 bytes of private key");
                    e = A(t)
                } else {
                    if (!g(t)) throw new TypeError("Expected valid private key");
                    if (32 !== t.length) throw new Error("Expected 32 bytes of private key");
                    e = P(t)
                }
                if (!T(e)) throw new Error("Expected private key: 0 < key < n");
                return e
            }

            function K(t) {
                return t instanceof Point ? (t.assertValidity(), t) : Point.fromHex(t)
            }

            function R(t) {
                if (t instanceof Signature) return t.assertValidity(), t;
                try {
                    return Signature.fromDER(t)
                } catch (e) {
                    return Signature.fromCompact(t)
                }
            }

            function N(t, e = !1) {
                return Point.fromPrivateKey(t).toRawBytes(e)
            }

            function J(t, e, r, n = !1) {
                return Point.fromSignature(t, e, r).toRawBytes(n)
            }

            function V(t) {
                const e = g(t),
                    r = "string" == typeof t,
                    n = (e || r) && t.length;
                return e ? 33 === n || 65 === n : r ? 66 === n || 130 === n : t instanceof Point
            }

            function z(t, e, r = !1) {
                if (V(t)) throw new TypeError("getSharedSecret: first arg must be private key");
                if (!V(e)) throw new TypeError("getSharedSecret: second arg must be public key");
                const n = K(e);
                return n.assertValidity(), n.multiply(F(t)).toRawBytes(r)
            }

            function G(t) {
                return P(t.length > 32 ? t.slice(0, 32) : t)
            }

            function $(t) {
                const e = G(t),
                    r = L(e, d.n);
                return W(r < s ? e : r)
            }

            function W(t) {
                if ("bigint" != typeof t) throw new Error("Expected bigint");
                return S(x(t))
            }

            function Z(t, e, r) {
                if (null == t) throw new Error(`sign: expected valid message hash, not "${t}"`);
                const n = B(t),
                    i = F(e),
                    s = [W(i), $(n)];
                if (null != r) {
                    !0 === r && (r = at.randomBytes(32));
                    const t = B(r);
                    if (32 !== t.length) throw new Error("sign: Expected 32 bytes of extra data");
                    s.push(t)
                }
                return {
                    seed: w(...s),
                    m: G(n),
                    d: i
                }
            }

            function X(t, e) {
                let {
                    sig: r,
                    recovery: n
                } = t;
                const {
                    canonical: i,
                    der: s,
                    recovered: o
                } = Object.assign({
                    canonical: !0,
                    der: !0
                }, e);
                i && r.hasHighS() && (r = r.normalizeS(), n ^= 1);
                const a = s ? r.toDERRawBytes() : r.toCompactRawBytes();
                return o ? [a, n] : a
            }
            async function q(t, e, r = {}) {
                const {
                    seed: n,
                    m: i,
                    d: s
                } = Z(t, e, r.extraEntropy);
                let o;
                const a = new HmacDrbg;
                for (await a.reseed(n); !(o = C(await a.generate(), i, s));) await a.reseed();
                return X(o, r)
            }

            function Q(t, e, r = {}) {
                const {
                    seed: n,
                    m: i,
                    d: s
                } = Z(t, e, r.extraEntropy);
                let o;
                const a = new HmacDrbg;
                for (a.reseedSync(n); !(o = C(a.generateSync(), i, s));) a.reseedSync();
                return X(o, r)
            }
            const Y = {
                strict: !0
            };

            function tt(t, e, r, n = Y) {
                let i;
                try {
                    i = R(t), e = B(e)
                } catch (t) {
                    return !1
                }
                const {
                    r: o,
                    s: a
                } = i;
                if (n.strict && i.hasHighS()) return !1;
                const c = D(e);
                if (c === s) return !1;
                let h;
                try {
                    h = K(r)
                } catch (t) {
                    return !1
                }
                const {
                    n: u
                } = d, f = _(a, u), l = L(c * f, u), y = L(o * f, u), p = Point.BASE.multiplyAndAddUnsafe(h, l, y);
                if (!p) return !1;
                return L(p.x, u) === o
            }
            async function et(t, ...e) {
                const r = new Uint8Array(t.split("").map(t => t.charCodeAt(0))),
                    n = await at.sha256(r);
                return P(await at.sha256(w(n, n, ...e)))
            }
            async function rt(t, e, r) {
                const n = E(t);
                return L(await et("BIP0340/challenge", n, e.toRawX(), r), d.n)
            }

            function nt(t) {
                return (t.y & o) === s
            }
            class SchnorrSignature {
                constructor(t, e) {
                    this.r = t, this.s = e, this.assertValidity()
                }
                static fromHex(t) {
                    const e = B(t);
                    if (64 !== e.length) throw new TypeError("SchnorrSignature.fromHex: expected 64 bytes, not " + e.length);
                    const r = P(e.subarray(0, 32)),
                        n = P(e.subarray(32, 64));
                    return new SchnorrSignature(r, n)
                }
                assertValidity() {
                    const {
                        r: t,
                        s: e
                    } = this;
                    if (!M(t) || !T(e)) throw new Error("Invalid signature")
                }
                toHex() {
                    return x(this.r) + x(this.s)
                }
                toRawBytes() {
                    return S(this.toHex())
                }
            }
            async function it(t, e, r) {
                const n = t instanceof SchnorrSignature;
                let i;
                try {
                    i = n ? t : SchnorrSignature.fromHex(t), n && i.assertValidity()
                } catch (t) {
                    return !1
                }
                const {
                    r: s,
                    s: o
                } = i, a = B(e);
                let c;
                try {
                    c = K(r)
                } catch (t) {
                    return !1
                }
                const h = await rt(s, c, a),
                    u = Point.BASE.multiplyAndAddUnsafe(c, F(o), L(-h, d.n));
                return !(!u || !nt(u) || u.x !== s)
            }
            const st = {
                Signature: SchnorrSignature,
                getPublicKey: function(t) {
                    return Point.fromPrivateKey(t).toRawX()
                },
                sign: async function(t, e, r = at.randomBytes()) {
                    if (null == t) throw new TypeError(`sign: Expected valid message, not "${t}"`);
                    const {
                        n: n
                    } = d, i = B(t), o = F(e), a = B(r);
                    if (32 !== a.length) throw new TypeError("sign: Expected 32 bytes of aux randomness");
                    const c = Point.fromPrivateKey(o),
                        h = nt(c) ? o : n - o,
                        u = h ^ await et("BIP0340/aux", a),
                        f = L(await et("BIP0340/nonce", E(u), c.toRawX(), i), n);
                    if (f === s) throw new Error("sign: Creation of signature failed. k is zero");
                    const l = Point.fromPrivateKey(f),
                        y = nt(l) ? f : n - f,
                        p = await rt(l.x, c, i),
                        b = new SchnorrSignature(l.x, L(y + p * h, n)).toRawBytes();
                    if (!await it(b, i, c.toRawX())) throw new Error("sign: Invalid signature produced");
                    return b
                },
                verify: it
            };
            Point.BASE._setWindowSize(8);
            const ot = {
                    node: i.a,
                    web: "object" == typeof self && "crypto" in self ? self.crypto : void 0
                },
                at = {
                    isValidPrivateKey(t) {
                        try {
                            return F(t), !0
                        } catch (t) {
                            return !1
                        }
                    },
                    hashToPrivateKey: t => {
                        if ((t = B(t)).length < 40 || t.length > 1024) throw new Error("Expected 40-1024 bytes of private key as per FIPS 186");
                        const e = L(P(t), d.n);
                        if (e === s || e === o) throw new Error("Invalid private key");
                        return E(e)
                    },
                    randomBytes: (t = 32) => {
                        if (ot.web) return ot.web.getRandomValues(new Uint8Array(t));
                        if (ot.node) {
                            const {
                                randomBytes: e
                            } = ot.node;
                            return Uint8Array.from(e(t))
                        }
                        throw new Error("The environment doesn't have randomBytes function")
                    },
                    randomPrivateKey: () => at.hashToPrivateKey(at.randomBytes(40)),
                    bytesToHex: v,
                    mod: L,
                    sha256: async t => {
                        if (ot.web) {
                            const e = await ot.web.subtle.digest("SHA-256", t.buffer);
                            return new Uint8Array(e)
                        }
                        if (ot.node) {
                            const {
                                createHash: e
                            } = ot.node;
                            return Uint8Array.from(e("sha256").update(t).digest())
                        }
                        throw new Error("The environment doesn't have sha256 function")
                    },
                    hmacSha256: async (t, ...e) => {
                        if (ot.web) {
                            const r = await ot.web.subtle.importKey("raw", t, {
                                    name: "HMAC",
                                    hash: {
                                        name: "SHA-256"
                                    }
                                }, !1, ["sign"]),
                                n = w(...e),
                                i = await ot.web.subtle.sign("HMAC", r, n);
                            return new Uint8Array(i)
                        }
                        if (ot.node) {
                            const {
                                createHmac: r
                            } = ot.node, n = r("sha256", t);
                            return e.forEach(t => n.update(t)), Uint8Array.from(n.digest())
                        }
                        throw new Error("The environment doesn't have hmac-sha256 function")
                    },
                    sha256Sync: void 0,
                    hmacSha256Sync: void 0,
                    precompute(t = 8, e = Point.BASE) {
                        const r = e === Point.BASE ? e : new Point(e.x, e.y);
                        return r._setWindowSize(t), r.multiply(c), r
                    }
                }
        },
        5768: function(t, e, r) {
            "use strict";
            (function(t) {
                Object.defineProperty(e, "__esModule", {
                    value: !0
                }), e.randomBytes = e.wrapConstructorWithOpts = e.wrapConstructor = e.checkOpts = e.Hash = e.assertHash = e.assertBytes = e.assertBool = e.assertNumber = e.concatBytes = e.toBytes = e.utf8ToBytes = e.asyncLoop = e.nextTick = e.hexToBytes = e.bytesToHex = e.isLE = e.rotr = e.createView = e.u32 = e.u8 = void 0;
                const n = r(11483);
                e.u8 = t => new Uint8Array(t.buffer, t.byteOffset, t.byteLength);
                e.u32 = t => new Uint32Array(t.buffer, t.byteOffset, Math.floor(t.byteLength / 4));
                e.createView = t => new DataView(t.buffer, t.byteOffset, t.byteLength);
                if (e.rotr = (t, e) => t << 32 - e | t >>> e, e.isLE = 68 === new Uint8Array(new Uint32Array([287454020]).buffer)[0], !e.isLE) throw new Error("Non little-endian hardware is not supported");
                const i = Array.from({
                    length: 256
                }, (t, e) => e.toString(16).padStart(2, "0"));

                function s(t) {
                    if ("string" != typeof t) throw new TypeError("utf8ToBytes expected string, got " + typeof t);
                    return (new TextEncoder).encode(t)
                }

                function o(t) {
                    if ("string" == typeof t && (t = s(t)), !(t instanceof Uint8Array)) throw new TypeError(`Expected input type is Uint8Array (got ${typeof t})`);
                    return t
                }

                function a(t) {
                    if (!Number.isSafeInteger(t) || t < 0) throw new Error("Wrong positive integer: " + t)
                }
                e.bytesToHex = function(t) {
                    let e = "";
                    for (let r = 0; r < t.length; r++) e += i[t[r]];
                    return e
                }, e.hexToBytes = function(t) {
                    if ("string" != typeof t) throw new TypeError("hexToBytes: expected string, got " + typeof t);
                    if (t.length % 2) throw new Error("hexToBytes: received invalid unpadded hex");
                    const e = new Uint8Array(t.length / 2);
                    for (let r = 0; r < e.length; r++) {
                        const n = 2 * r,
                            i = t.slice(n, n + 2),
                            s = Number.parseInt(i, 16);
                        if (Number.isNaN(s)) throw new Error("Invalid byte sequence");
                        e[r] = s
                    }
                    return e
                }, e.nextTick = (() => {
                    const e = "function" == typeof t.require && t.require.bind(t);
                    try {
                        if (e) {
                            const {
                                setImmediate: t
                            } = e("timers");
                            return () => new Promise(e => t(e))
                        }
                    } catch (t) {}
                    return () => new Promise(t => setTimeout(t, 0))
                })(), e.asyncLoop = async function(t, r, n) {
                    let i = Date.now();
                    for (let s = 0; s < t; s++) {
                        n(s);
                        const t = Date.now() - i;
                        t >= 0 && t < r || (await (0, e.nextTick)(), i += t)
                    }
                }, e.utf8ToBytes = s, e.toBytes = o, e.concatBytes = function(...t) {
                    if (!t.every(t => t instanceof Uint8Array)) throw new Error("Uint8Array list expected");
                    if (1 === t.length) return t[0];
                    const e = t.reduce((t, e) => t + e.length, 0),
                        r = new Uint8Array(e);
                    for (let e = 0, n = 0; e < t.length; e++) {
                        const i = t[e];
                        r.set(i, n), n += i.length
                    }
                    return r
                }, e.assertNumber = a, e.assertBool = function(t) {
                    if ("boolean" != typeof t) throw new Error("Expected boolean, not " + t)
                }, e.assertBytes = function(t, ...e) {
                    if (!(t instanceof Uint8Array) || e.length && !e.includes(t.length)) throw new TypeError(`Expected ${e} bytes, not ${typeof t} with length=${t.length}`)
                }, e.assertHash = function(t) {
                    if ("function" != typeof t || "function" != typeof t.create) throw new Error("Hash should be wrapped by utils.wrapConstructor");
                    a(t.outputLen), a(t.blockLen)
                };
                e.Hash = class Hash {
                    clone() {
                        return this._cloneInto()
                    }
                };
                e.checkOpts = function(t, e) {
                    if (void 0 !== e && ("object" != typeof e || (r = e, "[object Object]" !== Object.prototype.toString.call(r) || r.constructor !== Object))) throw new TypeError("Options should be object or undefined");
                    var r;
                    return Object.assign(t, e)
                }, e.wrapConstructor = function(t) {
                    const e = e => t().update(o(e)).digest(),
                        r = t();
                    return e.outputLen = r.outputLen, e.blockLen = r.blockLen, e.create = () => t(), e
                }, e.wrapConstructorWithOpts = function(t) {
                    const e = (e, r) => t(r).update(o(e)).digest(),
                        r = t({});
                    return e.outputLen = r.outputLen, e.blockLen = r.blockLen, e.create = e => t(e), e
                }, e.randomBytes = function(t = 32) {
                    if (n.crypto.web) return n.crypto.web.getRandomValues(new Uint8Array(t));
                    if (n.crypto.node) return new Uint8Array(n.crypto.node.randomBytes(t).buffer);
                    throw new Error("The environment doesn't have randomBytes function")
                }
            }).call(this, r(81)(t))
        },
        6879: function(t, e, r) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            });
            var n = {};
            e.default = void 0, r(11473);
            var i = r(11475);
            Object.keys(i).forEach((function(t) {
                "default" !== t && "__esModule" !== t && (Object.prototype.hasOwnProperty.call(n, t) || t in e && e[t] === i[t] || Object.defineProperty(e, t, {
                    enumerable: !0,
                    get: function() {
                        return i[t]
                    }
                }))
            }));
            var s = i.Keyring;
            e.default = s
        },
        6882: function(t, e, r) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.sha256 = void 0;
            const n = r(7902),
                i = r(5768),
                s = (t, e, r) => t & e ^ t & r ^ e & r,
                o = new Uint32Array([1116352408, 1899447441, 3049323471, 3921009573, 961987163, 1508970993, 2453635748, 2870763221, 3624381080, 310598401, 607225278, 1426881987, 1925078388, 2162078206, 2614888103, 3248222580, 3835390401, 4022224774, 264347078, 604807628, 770255983, 1249150122, 1555081692, 1996064986, 2554220882, 2821834349, 2952996808, 3210313671, 3336571891, 3584528711, 113926993, 338241895, 666307205, 773529912, 1294757372, 1396182291, 1695183700, 1986661051, 2177026350, 2456956037, 2730485921, 2820302411, 3259730800, 3345764771, 3516065817, 3600352804, 4094571909, 275423344, 430227734, 506948616, 659060556, 883997877, 958139571, 1322822218, 1537002063, 1747873779, 1955562222, 2024104815, 2227730452, 2361852424, 2428436474, 2756734187, 3204031479, 3329325298]),
                a = new Uint32Array([1779033703, 3144134277, 1013904242, 2773480762, 1359893119, 2600822924, 528734635, 1541459225]),
                c = new Uint32Array(64);
            class SHA256 extends n.SHA2 {
                constructor() {
                    super(64, 32, 8, !1), this.A = 0 | a[0], this.B = 0 | a[1], this.C = 0 | a[2], this.D = 0 | a[3], this.E = 0 | a[4], this.F = 0 | a[5], this.G = 0 | a[6], this.H = 0 | a[7]
                }
                get() {
                    const {
                        A: t,
                        B: e,
                        C: r,
                        D: n,
                        E: i,
                        F: s,
                        G: o,
                        H: a
                    } = this;
                    return [t, e, r, n, i, s, o, a]
                }
                set(t, e, r, n, i, s, o, a) {
                    this.A = 0 | t, this.B = 0 | e, this.C = 0 | r, this.D = 0 | n, this.E = 0 | i, this.F = 0 | s, this.G = 0 | o, this.H = 0 | a
                }
                process(t, e) {
                    for (let r = 0; r < 16; r++, e += 4) c[r] = t.getUint32(e, !1);
                    for (let t = 16; t < 64; t++) {
                        const e = c[t - 15],
                            r = c[t - 2],
                            n = (0, i.rotr)(e, 7) ^ (0, i.rotr)(e, 18) ^ e >>> 3,
                            s = (0, i.rotr)(r, 17) ^ (0, i.rotr)(r, 19) ^ r >>> 10;
                        c[t] = s + c[t - 7] + n + c[t - 16] | 0
                    }
                    let {
                        A: r,
                        B: n,
                        C: a,
                        D: h,
                        E: u,
                        F: d,
                        G: f,
                        H: l
                    } = this;
                    for (let t = 0; t < 64; t++) {
                        const e = l + ((0, i.rotr)(u, 6) ^ (0, i.rotr)(u, 11) ^ (0, i.rotr)(u, 25)) + ((y = u) & d ^ ~y & f) + o[t] + c[t] | 0,
                            p = ((0, i.rotr)(r, 2) ^ (0, i.rotr)(r, 13) ^ (0, i.rotr)(r, 22)) + s(r, n, a) | 0;
                        l = f, f = d, d = u, u = h + e | 0, h = a, a = n, n = r, r = e + p | 0
                    }
                    var y;
                    r = r + this.A | 0, n = n + this.B | 0, a = a + this.C | 0, h = h + this.D | 0, u = u + this.E | 0, d = d + this.F | 0, f = f + this.G | 0, l = l + this.H | 0, this.set(r, n, a, h, u, d, f, l)
                }
                roundClean() {
                    c.fill(0)
                }
                destroy() {
                    this.set(0, 0, 0, 0, 0, 0, 0, 0), this.buffer.fill(0)
                }
            }
            e.sha256 = (0, i.wrapConstructor)(() => new SHA256)
        },
        6883: function(t, e, r) {
            "use strict";
            var n = this && this.__createBinding || (Object.create ? function(t, e, r, n) {
                    void 0 === n && (n = r), Object.defineProperty(t, n, {
                        enumerable: !0,
                        get: function() {
                            return e[r]
                        }
                    })
                } : function(t, e, r, n) {
                    void 0 === n && (n = r), t[n] = e[r]
                }),
                i = this && this.__setModuleDefault || (Object.create ? function(t, e) {
                    Object.defineProperty(t, "default", {
                        enumerable: !0,
                        value: e
                    })
                } : function(t, e) {
                    t.default = e
                }),
                s = this && this.__importStar || function(t) {
                    if (t && t.__esModule) return t;
                    var e = {};
                    if (null != t)
                        for (var r in t) "default" !== r && Object.prototype.hasOwnProperty.call(t, r) && n(e, t, r);
                    return i(e, t), e
                };
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.sha384 = e.sha512_256 = e.sha512 = e.SHA512 = void 0;
            const o = r(7902),
                a = s(r(6884)),
                c = r(5768),
                [h, u] = a.split(["0x428a2f98d728ae22", "0x7137449123ef65cd", "0xb5c0fbcfec4d3b2f", "0xe9b5dba58189dbbc", "0x3956c25bf348b538", "0x59f111f1b605d019", "0x923f82a4af194f9b", "0xab1c5ed5da6d8118", "0xd807aa98a3030242", "0x12835b0145706fbe", "0x243185be4ee4b28c", "0x550c7dc3d5ffb4e2", "0x72be5d74f27b896f", "0x80deb1fe3b1696b1", "0x9bdc06a725c71235", "0xc19bf174cf692694", "0xe49b69c19ef14ad2", "0xefbe4786384f25e3", "0x0fc19dc68b8cd5b5", "0x240ca1cc77ac9c65", "0x2de92c6f592b0275", "0x4a7484aa6ea6e483", "0x5cb0a9dcbd41fbd4", "0x76f988da831153b5", "0x983e5152ee66dfab", "0xa831c66d2db43210", "0xb00327c898fb213f", "0xbf597fc7beef0ee4", "0xc6e00bf33da88fc2", "0xd5a79147930aa725", "0x06ca6351e003826f", "0x142929670a0e6e70", "0x27b70a8546d22ffc", "0x2e1b21385c26c926", "0x4d2c6dfc5ac42aed", "0x53380d139d95b3df", "0x650a73548baf63de", "0x766a0abb3c77b2a8", "0x81c2c92e47edaee6", "0x92722c851482353b", "0xa2bfe8a14cf10364", "0xa81a664bbc423001", "0xc24b8b70d0f89791", "0xc76c51a30654be30", "0xd192e819d6ef5218", "0xd69906245565a910", "0xf40e35855771202a", "0x106aa07032bbd1b8", "0x19a4c116b8d2d0c8", "0x1e376c085141ab53", "0x2748774cdf8eeb99", "0x34b0bcb5e19b48a8", "0x391c0cb3c5c95a63", "0x4ed8aa4ae3418acb", "0x5b9cca4f7763e373", "0x682e6ff3d6b2b8a3", "0x748f82ee5defb2fc", "0x78a5636f43172f60", "0x84c87814a1f0ab72", "0x8cc702081a6439ec", "0x90befffa23631e28", "0xa4506cebde82bde9", "0xbef9a3f7b2c67915", "0xc67178f2e372532b", "0xca273eceea26619c", "0xd186b8c721c0c207", "0xeada7dd6cde0eb1e", "0xf57d4f7fee6ed178", "0x06f067aa72176fba", "0x0a637dc5a2c898a6", "0x113f9804bef90dae", "0x1b710b35131c471b", "0x28db77f523047d84", "0x32caab7b40c72493", "0x3c9ebe0a15c9bebc", "0x431d67c49c100d4c", "0x4cc5d4becb3e42b6", "0x597f299cfc657e2a", "0x5fcb6fab3ad6faec", "0x6c44198c4a475817"].map(t => BigInt(t))),
                d = new Uint32Array(80),
                f = new Uint32Array(80);
            class SHA512 extends o.SHA2 {
                constructor() {
                    super(128, 64, 16, !1), this.Ah = 1779033703, this.Al = -205731576, this.Bh = -1150833019, this.Bl = -2067093701, this.Ch = 1013904242, this.Cl = -23791573, this.Dh = -1521486534, this.Dl = 1595750129, this.Eh = 1359893119, this.El = -1377402159, this.Fh = -1694144372, this.Fl = 725511199, this.Gh = 528734635, this.Gl = -79577749, this.Hh = 1541459225, this.Hl = 327033209
                }
                get() {
                    const {
                        Ah: t,
                        Al: e,
                        Bh: r,
                        Bl: n,
                        Ch: i,
                        Cl: s,
                        Dh: o,
                        Dl: a,
                        Eh: c,
                        El: h,
                        Fh: u,
                        Fl: d,
                        Gh: f,
                        Gl: l,
                        Hh: y,
                        Hl: p
                    } = this;
                    return [t, e, r, n, i, s, o, a, c, h, u, d, f, l, y, p]
                }
                set(t, e, r, n, i, s, o, a, c, h, u, d, f, l, y, p) {
                    this.Ah = 0 | t, this.Al = 0 | e, this.Bh = 0 | r, this.Bl = 0 | n, this.Ch = 0 | i, this.Cl = 0 | s, this.Dh = 0 | o, this.Dl = 0 | a, this.Eh = 0 | c, this.El = 0 | h, this.Fh = 0 | u, this.Fl = 0 | d, this.Gh = 0 | f, this.Gl = 0 | l, this.Hh = 0 | y, this.Hl = 0 | p
                }
                process(t, e) {
                    for (let r = 0; r < 16; r++, e += 4) d[r] = t.getUint32(e), f[r] = t.getUint32(e += 4);
                    for (let t = 16; t < 80; t++) {
                        const e = 0 | d[t - 15],
                            r = 0 | f[t - 15],
                            n = a.rotrSH(e, r, 1) ^ a.rotrSH(e, r, 8) ^ a.shrSH(e, r, 7),
                            i = a.rotrSL(e, r, 1) ^ a.rotrSL(e, r, 8) ^ a.shrSL(e, r, 7),
                            s = 0 | d[t - 2],
                            o = 0 | f[t - 2],
                            c = a.rotrSH(s, o, 19) ^ a.rotrBH(s, o, 61) ^ a.shrSH(s, o, 6),
                            h = a.rotrSL(s, o, 19) ^ a.rotrBL(s, o, 61) ^ a.shrSL(s, o, 6),
                            u = a.add4L(i, h, f[t - 7], f[t - 16]),
                            l = a.add4H(u, n, c, d[t - 7], d[t - 16]);
                        d[t] = 0 | l, f[t] = 0 | u
                    }
                    let {
                        Ah: r,
                        Al: n,
                        Bh: i,
                        Bl: s,
                        Ch: o,
                        Cl: c,
                        Dh: l,
                        Dl: y,
                        Eh: p,
                        El: b,
                        Fh: w,
                        Fl: g,
                        Gh: m,
                        Gl: v,
                        Hh: x,
                        Hl: E
                    } = this;
                    for (let t = 0; t < 80; t++) {
                        const e = a.rotrSH(p, b, 14) ^ a.rotrSH(p, b, 18) ^ a.rotrBH(p, b, 41),
                            k = a.rotrSL(p, b, 14) ^ a.rotrSL(p, b, 18) ^ a.rotrBL(p, b, 41),
                            A = p & w ^ ~p & m,
                            S = b & g ^ ~b & v,
                            P = a.add5L(E, k, S, u[t], f[t]),
                            B = a.add5H(P, x, e, A, h[t], d[t]),
                            H = 0 | P,
                            L = a.rotrSH(r, n, 28) ^ a.rotrBH(r, n, 34) ^ a.rotrBH(r, n, 39),
                            I = a.rotrSL(r, n, 28) ^ a.rotrBL(r, n, 34) ^ a.rotrBL(r, n, 39),
                            _ = r & i ^ r & o ^ i & o,
                            O = n & s ^ n & c ^ s & c;
                        x = 0 | m, E = 0 | v, m = 0 | w, v = 0 | g, w = 0 | p, g = 0 | b, ({
                            h: p,
                            l: b
                        } = a.add(0 | l, 0 | y, 0 | B, 0 | H)), l = 0 | o, y = 0 | c, o = 0 | i, c = 0 | s, i = 0 | r, s = 0 | n;
                        const U = a.add3L(H, I, O);
                        r = a.add3H(U, B, L, _), n = 0 | U
                    }({
                        h: r,
                        l: n
                    } = a.add(0 | this.Ah, 0 | this.Al, 0 | r, 0 | n)), ({
                        h: i,
                        l: s
                    } = a.add(0 | this.Bh, 0 | this.Bl, 0 | i, 0 | s)), ({
                        h: o,
                        l: c
                    } = a.add(0 | this.Ch, 0 | this.Cl, 0 | o, 0 | c)), ({
                        h: l,
                        l: y
                    } = a.add(0 | this.Dh, 0 | this.Dl, 0 | l, 0 | y)), ({
                        h: p,
                        l: b
                    } = a.add(0 | this.Eh, 0 | this.El, 0 | p, 0 | b)), ({
                        h: w,
                        l: g
                    } = a.add(0 | this.Fh, 0 | this.Fl, 0 | w, 0 | g)), ({
                        h: m,
                        l: v
                    } = a.add(0 | this.Gh, 0 | this.Gl, 0 | m, 0 | v)), ({
                        h: x,
                        l: E
                    } = a.add(0 | this.Hh, 0 | this.Hl, 0 | x, 0 | E)), this.set(r, n, i, s, o, c, l, y, p, b, w, g, m, v, x, E)
                }
                roundClean() {
                    d.fill(0), f.fill(0)
                }
                destroy() {
                    this.buffer.fill(0), this.set(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0)
                }
            }
            e.SHA512 = SHA512;
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
            e.sha512 = (0, c.wrapConstructor)(() => new SHA512), e.sha512_256 = (0, c.wrapConstructor)(() => new SHA512_256), e.sha384 = (0, c.wrapConstructor)(() => new SHA384)
        },
        6884: function(t, e, r) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.add5H = e.add5L = e.add4H = e.add4L = e.add3H = e.add3L = e.add = e.rotlBL = e.rotlBH = e.rotlSL = e.rotlSH = e.rotr32L = e.rotr32H = e.rotrBL = e.rotrBH = e.rotrSL = e.rotrSH = e.shrSL = e.shrSH = e.toBig = e.split = e.fromBig = void 0;
            const n = BigInt(2 ** 32 - 1),
                i = BigInt(32);

            function s(t, e = !1) {
                return e ? {
                    h: Number(t & n),
                    l: Number(t >> i & n)
                } : {
                    h: 0 | Number(t >> i & n),
                    l: 0 | Number(t & n)
                }
            }
            e.fromBig = s, e.split = function(t, e = !1) {
                let r = new Uint32Array(t.length),
                    n = new Uint32Array(t.length);
                for (let i = 0; i < t.length; i++) {
                    const {
                        h: o,
                        l: a
                    } = s(t[i], e);
                    [r[i], n[i]] = [o, a]
                }
                return [r, n]
            };
            e.toBig = (t, e) => BigInt(t >>> 0) << i | BigInt(e >>> 0);
            e.shrSH = (t, e, r) => t >>> r;
            e.shrSL = (t, e, r) => t << 32 - r | e >>> r;
            e.rotrSH = (t, e, r) => t >>> r | e << 32 - r;
            e.rotrSL = (t, e, r) => t << 32 - r | e >>> r;
            e.rotrBH = (t, e, r) => t << 64 - r | e >>> r - 32;
            e.rotrBL = (t, e, r) => t >>> r - 32 | e << 64 - r;
            e.rotr32H = (t, e) => e;
            e.rotr32L = (t, e) => t;
            e.rotlSH = (t, e, r) => t << r | e >>> 32 - r;
            e.rotlSL = (t, e, r) => e << r | t >>> 32 - r;
            e.rotlBH = (t, e, r) => e << r - 32 | t >>> 64 - r;
            e.rotlBL = (t, e, r) => t << r - 32 | e >>> 64 - r, e.add = function(t, e, r, n) {
                const i = (e >>> 0) + (n >>> 0);
                return {
                    h: t + r + (i / 2 ** 32 | 0) | 0,
                    l: 0 | i
                }
            };
            e.add3L = (t, e, r) => (t >>> 0) + (e >>> 0) + (r >>> 0);
            e.add3H = (t, e, r, n) => e + r + n + (t / 2 ** 32 | 0) | 0;
            e.add4L = (t, e, r, n) => (t >>> 0) + (e >>> 0) + (r >>> 0) + (n >>> 0);
            e.add4H = (t, e, r, n, i) => e + r + n + i + (t / 2 ** 32 | 0) | 0;
            e.add5L = (t, e, r, n, i) => (t >>> 0) + (e >>> 0) + (r >>> 0) + (n >>> 0) + (i >>> 0);
            e.add5H = (t, e, r, n, i, s) => e + r + n + i + s + (t / 2 ** 32 | 0) | 0
        },
        7780: function(t, e, r) {
            function n(t) {
                const e = r.p;
                let n = "";
                return (!e || e.indexOf("://") < 0) && (n += window.location.protocol + "//" + window.location.host), n += e || "/", n + t
            }
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.packageInfo = void 0;
            const i = {
                name: "@polkadot/api-augment",
                path: (n("node_modules/@polkadot/api-augment/packageInfo.js"), n("node_modules/@polkadot/api-augment/packageInfo.js") ? new URL(n("node_modules/@polkadot/api-augment/packageInfo.js")).pathname.substring(0, new URL(n("node_modules/@polkadot/api-augment/packageInfo.js")).pathname.lastIndexOf("/") + 1) : "auto"),
                type: "esm",
                version: "7.15.1"
            };
            e.packageInfo = i
        },
        7900: function(t, e, r) {
            "use strict";
            var n = r(2);
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.Keyring = void 0;
            var i = n(r(151)),
                s = n(r(207)),
                o = n(r(208)),
                a = r(5458),
                c = r(5820),
                h = r(7938),
                u = r(6900),
                d = r(11579);

            function f(t, e, r) {
                ! function(t, e) {
                    if (e.has(t)) throw new TypeError("Cannot initialize the same private elements twice on an object")
                }(t, e), e.set(t, r)
            }
            const l = {
                ecdsa: t => (0, c.secp256k1PairFromSeed)(t),
                ed25519: t => (0, c.ed25519PairFromSeed)(t),
                ethereum: t => (0, c.secp256k1PairFromSeed)(t),
                sr25519: t => (0, c.sr25519PairFromSeed)(t)
            };

            function y({
                publicKey: t
            }) {
                return t
            }
            var p = new WeakMap,
                b = new WeakMap,
                w = new WeakMap;
            e.Keyring = class Keyring {
                constructor(t = {}) {
                    f(this, p, {
                        writable: !0,
                        value: void 0
                    }), f(this, b, {
                        writable: !0,
                        value: void 0
                    }), f(this, w, {
                        writable: !0,
                        value: void 0
                    }), (0, i.default)(this, "decodeAddress", c.decodeAddress), (0, i.default)(this, "encodeAddress", (t, e) => "ethereum" === this.type ? (0, c.ethereumEncode)(t) : (0, c.encodeAddress)(t, (0, a.isUndefined)(e) ? (0, s.default)(this, w) : e)), t.type = t.type || "ed25519", (0, a.assert)(["ecdsa", "ethereum", "ed25519", "sr25519"].includes(t.type || "undefined"), () => "Expected a keyring type of either 'ed25519', 'sr25519', 'ethereum' or 'ecdsa', found '" + (t.type || "unknown")), (0, o.default)(this, p, new d.Pairs), (0, o.default)(this, w, t.ss58Format), (0, o.default)(this, b, t.type)
                }
                get pairs() {
                    return this.getPairs()
                }
                get publicKeys() {
                    return this.getPublicKeys()
                }
                get type() {
                    return (0, s.default)(this, b)
                }
                addPair(t) {
                    return (0, s.default)(this, p).add(t)
                }
                addFromAddress(t, e = {}, r = null, n = this.type, i, s) {
                    const o = this.decodeAddress(t, i);
                    return this.addPair((0, u.createPair)({
                        toSS58: this.encodeAddress,
                        type: n
                    }, {
                        publicKey: o,
                        secretKey: new Uint8Array
                    }, e, r, s))
                }
                addFromJson(t, e) {
                    return this.addPair(this.createFromJson(t, e))
                }
                addFromMnemonic(t, e = {}, r = this.type) {
                    return this.addFromUri(t, e, r)
                }
                addFromPair(t, e = {}, r = this.type) {
                    return this.addPair(this.createFromPair(t, e, r))
                }
                addFromSeed(t, e = {}, r = this.type) {
                    return this.addPair((0, u.createPair)({
                        toSS58: this.encodeAddress,
                        type: r
                    }, l[r](t), e, null))
                }
                addFromUri(t, e = {}, r = this.type) {
                    return this.addPair(this.createFromUri(t, e, r))
                }
                createFromJson({
                    address: t,
                    encoded: e,
                    encoding: {
                        content: r,
                        type: n,
                        version: i
                    },
                    meta: s
                }, o) {
                    (0, a.assert)("3" !== i || "pkcs8" === r[0], () => `Unable to decode non-pkcs8 type, [${r.join(",")}] found}`);
                    const h = "0" !== i && Array.isArray(r) ? r[1] : this.type,
                        d = Array.isArray(n) ? n : [n];
                    (0, a.assert)(["ed25519", "sr25519", "ecdsa", "ethereum"].includes(h), () => "Unknown crypto type " + h);
                    const f = (0, a.isHex)(t) ? (0, a.hexToU8a)(t) : this.decodeAddress(t, o),
                        l = (0, a.isHex)(e) ? (0, a.hexToU8a)(e) : (0, c.base64Decode)(e);
                    return (0, u.createPair)({
                        toSS58: this.encodeAddress,
                        type: h
                    }, {
                        publicKey: f,
                        secretKey: new Uint8Array
                    }, s, l, d)
                }
                createFromPair(t, e = {}, r = this.type) {
                    return (0, u.createPair)({
                        toSS58: this.encodeAddress,
                        type: r
                    }, t, e, null)
                }
                createFromUri(t, e = {}, r = this.type) {
                    const n = t.startsWith("//") ? `${h.DEV_PHRASE}${t}` : t,
                        {
                            derivePath: i,
                            password: s,
                            path: o,
                            phrase: d
                        } = (0, c.keyExtractSuri)(n);
                    let f;
                    const y = (0, a.isHex)(d, 256);
                    if (y) f = (0, a.hexToU8a)(d);
                    else {
                        const t = d.split(" ");
                        [12, 15, 18, 21, 24].includes(t.length) ? f = "ethereum" === r ? (0, c.mnemonicToLegacySeed)(d, "", !1, 64) : (0, c.mnemonicToMiniSecret)(d, s) : ((0, a.assert)(d.length <= 32, "specified phrase is not a valid mnemonic and is invalid as a raw seed at > 32 bytes"), f = (0, a.stringToU8a)(d.padEnd(32)))
                    }
                    const p = "ethereum" === r ? y ? l[r](f) : (0, c.hdEthereum)(f, i.substring(1)) : (0, c.keyFromPath)(l[r](f), o, r);
                    return (0, u.createPair)({
                        toSS58: this.encodeAddress,
                        type: r
                    }, p, e, null)
                }
                getPair(t) {
                    return (0, s.default)(this, p).get(t)
                }
                getPairs() {
                    return (0, s.default)(this, p).all()
                }
                getPublicKeys() {
                    return (0, s.default)(this, p).all().map(y)
                }
                removePair(t) {
                    (0, s.default)(this, p).remove(t)
                }
                setSS58Format(t) {
                    (0, o.default)(this, w, t)
                }
                toJson(t, e) {
                    return (0, s.default)(this, p).get(t).toJson(e)
                }
            }
        },
        7901: function(t, e, r) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.hmac = void 0;
            const n = r(5768);
            class HMAC extends n.Hash {
                constructor(t, e) {
                    super(), this.finished = !1, this.destroyed = !1, (0, n.assertHash)(t);
                    const r = (0, n.toBytes)(e);
                    if (this.iHash = t.create(), !(this.iHash instanceof n.Hash)) throw new TypeError("Expected instance of class which extends utils.Hash");
                    const i = this.blockLen = this.iHash.blockLen;
                    this.outputLen = this.iHash.outputLen;
                    const s = new Uint8Array(i);
                    s.set(r.length > this.iHash.blockLen ? t.create().update(r).digest() : r);
                    for (let t = 0; t < s.length; t++) s[t] ^= 54;
                    this.iHash.update(s), this.oHash = t.create();
                    for (let t = 0; t < s.length; t++) s[t] ^= 106;
                    this.oHash.update(s), s.fill(0)
                }
                update(t) {
                    if (this.destroyed) throw new Error("instance is destroyed");
                    return this.iHash.update(t), this
                }
                digestInto(t) {
                    if (this.destroyed) throw new Error("instance is destroyed");
                    if (!(t instanceof Uint8Array) || t.length !== this.outputLen) throw new Error("HMAC: Invalid output buffer");
                    if (this.finished) throw new Error("digest() was already called");
                    this.finished = !0, this.iHash.digestInto(t), this.oHash.update(t), this.oHash.digestInto(t), this.destroy()
                }
                digest() {
                    const t = new Uint8Array(this.oHash.outputLen);
                    return this.digestInto(t), t
                }
                _cloneInto(t) {
                    t || (t = Object.create(Object.getPrototypeOf(this), {}));
                    const {
                        oHash: e,
                        iHash: r,
                        finished: n,
                        destroyed: i,
                        blockLen: s,
                        outputLen: o
                    } = this;
                    return (t = t).finished = n, t.destroyed = i, t.blockLen = s, t.outputLen = o, t.oHash = e._cloneInto(t.oHash), t.iHash = r._cloneInto(t.iHash), t
                }
                destroy() {
                    this.destroyed = !0, this.oHash.destroy(), this.iHash.destroy()
                }
            }
            e.hmac = (t, e, r) => new HMAC(t, e).update(r).digest(), e.hmac.create = (t, e) => new HMAC(t, e)
        },
        7902: function(t, e, r) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.SHA2 = void 0;
            const n = r(5768);
            class SHA2 extends n.Hash {
                constructor(t, e, r, i) {
                    super(), this.blockLen = t, this.outputLen = e, this.padOffset = r, this.isLE = i, this.finished = !1, this.length = 0, this.pos = 0, this.destroyed = !1, this.buffer = new Uint8Array(t), this.view = (0, n.createView)(this.buffer)
                }
                update(t) {
                    if (this.destroyed) throw new Error("instance is destroyed");
                    const {
                        view: e,
                        buffer: r,
                        blockLen: i,
                        finished: s
                    } = this;
                    if (s) throw new Error("digest() was already called");
                    const o = (t = (0, n.toBytes)(t)).length;
                    for (let s = 0; s < o;) {
                        const a = Math.min(i - this.pos, o - s);
                        if (a !== i) r.set(t.subarray(s, s + a), this.pos), this.pos += a, s += a, this.pos === i && (this.process(e, 0), this.pos = 0);
                        else {
                            const e = (0, n.createView)(t);
                            for (; i <= o - s; s += i) this.process(e, s)
                        }
                    }
                    return this.length += t.length, this.roundClean(), this
                }
                digestInto(t) {
                    if (this.destroyed) throw new Error("instance is destroyed");
                    if (!(t instanceof Uint8Array) || t.length < this.outputLen) throw new Error("_Sha2: Invalid output buffer");
                    if (this.finished) throw new Error("digest() was already called");
                    this.finished = !0;
                    const {
                        buffer: e,
                        view: r,
                        blockLen: i,
                        isLE: s
                    } = this;
                    let {
                        pos: o
                    } = this;
                    e[o++] = 128, this.buffer.subarray(o).fill(0), this.padOffset > i - o && (this.process(r, 0), o = 0);
                    for (let t = o; t < i; t++) e[t] = 0;
                    ! function(t, e, r, n) {
                        if ("function" == typeof t.setBigUint64) return t.setBigUint64(e, r, n);
                        const i = BigInt(32),
                            s = BigInt(4294967295),
                            o = Number(r >> i & s),
                            a = Number(r & s),
                            c = n ? 4 : 0,
                            h = n ? 0 : 4;
                        t.setUint32(e + c, o, n), t.setUint32(e + h, a, n)
                    }(r, i - 8, BigInt(8 * this.length), s), this.process(r, 0);
                    const a = (0, n.createView)(t);
                    this.get().forEach((t, e) => a.setUint32(4 * e, t, s))
                }
                digest() {
                    const {
                        buffer: t,
                        outputLen: e
                    } = this;
                    this.digestInto(t);
                    const r = t.slice(0, e);
                    return this.destroy(), r
                }
                _cloneInto(t) {
                    t || (t = new this.constructor), t.set(...this.get());
                    const {
                        blockLen: e,
                        buffer: r,
                        length: n,
                        finished: i,
                        destroyed: s,
                        pos: o
                    } = this;
                    return t.length = n, t.pos = o, t.finished = i, t.destroyed = s, n % e && t.buffer.set(r), t
                }
            }
            e.SHA2 = SHA2
        },
        7931: function(t, e, r) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.pbkdf2Async = e.pbkdf2 = void 0;
            const n = r(7901),
                i = r(5768);

            function s(t, e, r, s) {
                (0, i.assertHash)(t);
                const o = (0, i.checkOpts)({
                        dkLen: 32,
                        asyncTick: 10
                    }, s),
                    {
                        c: a,
                        dkLen: c,
                        asyncTick: h
                    } = o;
                if ((0, i.assertNumber)(a), (0, i.assertNumber)(c), (0, i.assertNumber)(h), a < 1) throw new Error("PBKDF2: iterations (c) should be >= 1");
                const u = (0, i.toBytes)(e),
                    d = (0, i.toBytes)(r),
                    f = new Uint8Array(c),
                    l = n.hmac.create(t, u),
                    y = l._cloneInto().update(d);
                return {
                    c: a,
                    dkLen: c,
                    asyncTick: h,
                    DK: f,
                    PRF: l,
                    PRFSalt: y
                }
            }

            function o(t, e, r, n, i) {
                return t.destroy(), e.destroy(), n && n.destroy(), i.fill(0), r
            }
            e.pbkdf2 = function(t, e, r, n) {
                const {
                    c: a,
                    dkLen: c,
                    DK: h,
                    PRF: u,
                    PRFSalt: d
                } = s(t, e, r, n);
                let f;
                const l = new Uint8Array(4),
                    y = (0, i.createView)(l),
                    p = new Uint8Array(u.outputLen);
                for (let t = 1, e = 0; e < c; t++, e += u.outputLen) {
                    const r = h.subarray(e, e + u.outputLen);
                    y.setInt32(0, t, !1), (f = d._cloneInto(f)).update(l).digestInto(p), r.set(p.subarray(0, r.length));
                    for (let t = 1; t < a; t++) {
                        u._cloneInto(f).update(p).digestInto(p);
                        for (let t = 0; t < r.length; t++) r[t] ^= p[t]
                    }
                }
                return o(u, d, h, f, p)
            }, e.pbkdf2Async = async function(t, e, r, n) {
                const {
                    c: a,
                    dkLen: c,
                    asyncTick: h,
                    DK: u,
                    PRF: d,
                    PRFSalt: f
                } = s(t, e, r, n);
                let l;
                const y = new Uint8Array(4),
                    p = (0, i.createView)(y),
                    b = new Uint8Array(d.outputLen);
                for (let t = 1, e = 0; e < c; t++, e += d.outputLen) {
                    const r = u.subarray(e, e + d.outputLen);
                    p.setInt32(0, t, !1), (l = f._cloneInto(l)).update(y).digestInto(b), r.set(b.subarray(0, r.length)), await (0, i.asyncLoop)(a - 1, h, t => {
                        d._cloneInto(l).update(b).digestInto(b);
                        for (let t = 0; t < r.length; t++) r[t] ^= b[t]
                    })
                }
                return o(d, f, u, l, b)
            }
        },
        7938: function(t, e, r) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.DEV_SEED = e.DEV_PHRASE = void 0;
            e.DEV_PHRASE = "bottom drive obey lake curtain smoke basket hold race lonely fit walk";
            e.DEV_SEED = "0xfac7959dbfe72f052e5a0c3c8d6530f202b02fd8f9f5ca3580ec8deb7797479e"
        }
    }
]);