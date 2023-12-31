/*! For license information please see vendors.acd6821057ec51b5bd1f.js.LICENSE.txt */
(window.webpackJsonp = window.webpackJsonp || []).push([
    [249], {
        10351: function(e) {
            e.exports = JSON.parse('{"name":"decred-bitcore-lib","version":"0.13.20","description":"Decred Bitcoin library","author":"Community Question <dev@bitpay.com>","main":"index.js","scripts":{"lint":"gulp lint","test":"gulp test","coverage":"gulp coverage","build":"gulp"},"contributors":[{"name":"Daniel Cousens","email":"bitcoin@dcousens.com"},{"name":"Esteban Ordano","email":"eordano@gmail.com"},{"name":"Gordon Hall","email":"gordon@bitpay.com"},{"name":"Jeff Garzik","email":"jgarzik@bitpay.com"},{"name":"Kyle Drake","email":"kyle@kyledrake.net"},{"name":"Manuel Araoz","email":"manuelaraoz@gmail.com"},{"name":"Matias Alejo Garcia","email":"ematiu@gmail.com"},{"name":"Ryan X. Charles","email":"ryanxcharles@gmail.com"},{"name":"Stefan Thomas","email":"moon@justmoon.net"},{"name":"Stephen Pair","email":"stephen@bitpay.com"},{"name":"Wei Lu","email":"luwei.here@gmail.com"}],"keywords":["bitcoin","transaction","address","p2p","ecies","cryptocurrency","blockchain","payment","bip21","bip32","bip37","bip69","bip70","multisig"],"repository":{"type":"git","url":"https://github.com/levakhnazarov/decred-bitcore.git"},"browser":{"request":"browser-request"},"dependencies":{"bs58":"^4.0.1","elliptic":"^3.0.3","lodash":"3.10.0"},"devDependencies":{},"engines":{"npm":">=2.0.0"},"license":"MIT"}')
        },
        10353: function(e) {
            e.exports = JSON.parse('{"_from":"elliptic@3.0.3","_id":"elliptic@3.0.3","_inBundle":false,"_integrity":"sha1-hlybQgv75VAGuflp+XoNLESWZZU=","_location":"/elliptic","_phantomChildren":{},"_requested":{"type":"version","registry":true,"raw":"elliptic@3.0.3","name":"elliptic","escapedName":"elliptic","rawSpec":"3.0.3","saveSpec":null,"fetchSpec":"3.0.3"},"_requiredBy":["#USER","/"],"_resolved":"https://registry.npmjs.org/elliptic/-/elliptic-3.0.3.tgz","_shasum":"865c9b420bfbe55006b9f969f97a0d2c44966595","_spec":"elliptic@3.0.3","_where":"/Users/macbook/crowd/decred-bitcore-lib","author":{"name":"Fedor Indutny","email":"fedor@indutny.com"},"bugs":{"url":"https://github.com/indutny/elliptic/issues"},"bundleDependencies":false,"dependencies":{"bn.js":"^2.0.0","brorand":"^1.0.1","hash.js":"^1.0.0","inherits":"^2.0.1"},"deprecated":false,"description":"EC cryptography","devDependencies":{"browserify":"^3.44.2","jscs":"^1.11.3","jshint":"^2.6.0","mocha":"^2.1.0","uglify-js":"^2.4.13"},"homepage":"https://github.com/indutny/elliptic","keywords":["EC","Elliptic","curve","Cryptography"],"license":"MIT","main":"lib/elliptic.js","name":"elliptic","repository":{"type":"git","url":"git+ssh://git@github.com/indutny/elliptic.git"},"scripts":{"test":"make lint && mocha --reporter=spec test/*-test.js"},"version":"3.0.3"}')
        },
        10354: function(e, t, r) {
            "use strict";
            var n = t;

            function i(e) {
                return 1 === e.length ? "0" + e : e
            }

            function f(e) {
                for (var t = "", r = 0; r < e.length; r++) t += i(e[r].toString(16));
                return t
            }
            n.assert = function(e, t) {
                if (!e) throw new Error(t || "Assertion failed")
            }, n.toArray = function(e, t) {
                if (Array.isArray(e)) return e.slice();
                if (!e) return [];
                var r = [];
                if ("string" != typeof e) {
                    for (var n = 0; n < e.length; n++) r[n] = 0 | e[n];
                    return r
                }
                if (t) {
                    if ("hex" === t) {
                        (e = e.replace(/[^a-z0-9]+/gi, "")).length % 2 != 0 && (e = "0" + e);
                        for (n = 0; n < e.length; n += 2) r.push(parseInt(e[n] + e[n + 1], 16))
                    }
                } else
                    for (var n = 0; n < e.length; n++) {
                        var i = e.charCodeAt(n),
                            f = i >> 8,
                            d = 255 & i;
                        f ? r.push(f, d) : r.push(d)
                    }
                return r
            }, n.zero2 = i, n.toHex = f, n.encode = function(e, t) {
                return "hex" === t ? f(e) : e
            }, n.getNAF = function(e, t) {
                for (var r = [], n = 1 << t + 1, i = e.clone(); i.cmpn(1) >= 0;) {
                    var f;
                    if (i.isOdd()) {
                        var d = i.andln(n - 1);
                        f = d > (n >> 1) - 1 ? (n >> 1) - d : d, i.isubn(f)
                    } else f = 0;
                    r.push(f);
                    for (var s = 0 !== i.cmpn(0) && 0 === i.andln(n - 1) ? t + 1 : 1, c = 1; c < s; c++) r.push(0);
                    i.ishrn(s)
                }
                return r
            }, n.getJSF = function(e, t) {
                var r = [
                    [],
                    []
                ];
                e = e.clone(), t = t.clone();
                for (var n = 0, i = 0; e.cmpn(-n) > 0 || t.cmpn(-i) > 0;) {
                    var f, d, s, c = e.andln(3) + n & 3,
                        a = t.andln(3) + i & 3;
                    if (3 === c && (c = -1), 3 === a && (a = -1), 0 == (1 & c)) f = 0;
                    else f = 3 !== (s = e.andln(7) + n & 7) && 5 !== s || 2 !== a ? c : -c;
                    if (r[0].push(f), 0 == (1 & a)) d = 0;
                    else d = 3 !== (s = t.andln(7) + i & 7) && 5 !== s || 2 !== c ? a : -a;
                    r[1].push(d), 2 * n === f + 1 && (n = 1 - n), 2 * i === d + 1 && (i = 1 - i), e.ishrn(1), t.ishrn(1)
                }
                return r
            }
        },
        10355: function(e, t, r) {
            var n;

            function i(e) {
                this.rand = e
            }
            if (e.exports = function(e) {
                    return n || (n = new i(null)), n.generate(e)
                }, e.exports.Rand = i, i.prototype.generate = function(e) {
                    return this._rand(e)
                }, i.prototype._rand = function(e) {
                    if (this.rand.getBytes) return this.rand.getBytes(e);
                    for (var t = new Uint8Array(e), r = 0; r < t.length; r++) t[r] = this.rand.getByte();
                    return t
                }, "object" == typeof self) self.crypto && self.crypto.getRandomValues ? i.prototype._rand = function(e) {
                var t = new Uint8Array(e);
                return self.crypto.getRandomValues(t), t
            } : self.msCrypto && self.msCrypto.getRandomValues ? i.prototype._rand = function(e) {
                var t = new Uint8Array(e);
                return self.msCrypto.getRandomValues(t), t
            } : "object" == typeof window && (i.prototype._rand = function() {
                throw new Error("Not implemented yet")
            });
            else try {
                var f = r(24);
                if ("function" != typeof f.randomBytes) throw new Error("Not supported");
                i.prototype._rand = function(e) {
                    return f.randomBytes(e)
                }
            } catch (e) {}
        },
        10356: function(e, t, r) {
            "use strict";
            var n = r(7570),
                i = r(5710).utils,
                f = i.assert;

            function d(e) {
                if (!(this instanceof d)) return new d(e);
                this.hash = e.hash, this.predResist = !!e.predResist, this.outLen = this.hash.outSize, this.minEntropy = e.minEntropy || this.hash.hmacStrength, this.reseed = null, this.reseedInterval = null, this.K = null, this.V = null;
                var t = i.toArray(e.entropy, e.entropyEnc),
                    r = i.toArray(e.nonce, e.nonceEnc),
                    n = i.toArray(e.pers, e.persEnc);
                f(t.length >= this.minEntropy / 8, "Not enough entropy. Minimum is: " + this.minEntropy + " bits"), this._init(t, r, n)
            }
            e.exports = d, d.prototype._init = function(e, t, r) {
                var n = e.concat(t).concat(r);
                this.K = new Array(this.outLen / 8), this.V = new Array(this.outLen / 8);
                for (var i = 0; i < this.V.length; i++) this.K[i] = 0, this.V[i] = 1;
                this._update(n), this.reseed = 1, this.reseedInterval = 281474976710656
            }, d.prototype._hmac = function() {
                return new n.hmac(this.hash, this.K)
            }, d.prototype._update = function(e) {
                var t = this._hmac().update(this.V).update([0]);
                e && (t = t.update(e)), this.K = t.digest(), this.V = this._hmac().update(this.V).digest(), e && (this.K = this._hmac().update(this.V).update([1]).update(e).digest(), this.V = this._hmac().update(this.V).digest())
            }, d.prototype.reseed = function(e, t, r, n) {
                "string" != typeof t && (n = r, r = t, t = null), e = i.toBuffer(e, t), r = i.toBuffer(r, n), f(e.length >= this.minEntropy / 8, "Not enough entropy. Minimum is: " + this.minEntropy + " bits"), this._update(e.concat(r || [])), this.reseed = 1
            }, d.prototype.generate = function(e, t, r, n) {
                if (this.reseed > this.reseedInterval) throw new Error("Reseed is required");
                "string" != typeof t && (n = r, r = t, t = null), r && (r = i.toArray(r, n), this._update(r));
                for (var f = []; f.length < e;) this.V = this._hmac().update(this.V).digest(), f = f.concat(this.V);
                var d = f.slice(0, e);
                return this._update(r), this.reseed++, i.encode(d, t)
            }
        },
        10357: function(e, t, r) {
            "use strict";
            t.sha1 = r(10358), t.sha224 = r(10359), t.sha256 = r(7572), t.sha384 = r(10360), t.sha512 = r(7573)
        },
        10358: function(e, t, r) {
            "use strict";
            var n = r(5711),
                i = r(6096),
                f = r(7571),
                d = n.rotl32,
                s = n.sum32,
                c = n.sum32_5,
                a = f.ft_1,
                o = i.BlockHash,
                h = [1518500249, 1859775393, 2400959708, 3395469782];

            function u() {
                if (!(this instanceof u)) return new u;
                o.call(this), this.h = [1732584193, 4023233417, 2562383102, 271733878, 3285377520], this.W = new Array(80)
            }
            n.inherits(u, o), e.exports = u, u.blockSize = 512, u.outSize = 160, u.hmacStrength = 80, u.padLength = 64, u.prototype._update = function(e, t) {
                for (var r = this.W, n = 0; n < 16; n++) r[n] = e[t + n];
                for (; n < r.length; n++) r[n] = d(r[n - 3] ^ r[n - 8] ^ r[n - 14] ^ r[n - 16], 1);
                var i = this.h[0],
                    f = this.h[1],
                    o = this.h[2],
                    u = this.h[3],
                    b = this.h[4];
                for (n = 0; n < r.length; n++) {
                    var p = ~~(n / 20),
                        l = c(d(i, 5), a(p, f, o, u), b, r[n], h[p]);
                    b = u, u = o, o = d(f, 30), f = i, i = l
                }
                this.h[0] = s(this.h[0], i), this.h[1] = s(this.h[1], f), this.h[2] = s(this.h[2], o), this.h[3] = s(this.h[3], u), this.h[4] = s(this.h[4], b)
            }, u.prototype._digest = function(e) {
                return "hex" === e ? n.toHex32(this.h, "big") : n.split32(this.h, "big")
            }
        },
        10359: function(e, t, r) {
            "use strict";
            var n = r(5711),
                i = r(7572);

            function f() {
                if (!(this instanceof f)) return new f;
                i.call(this), this.h = [3238371032, 914150663, 812702999, 4144912697, 4290775857, 1750603025, 1694076839, 3204075428]
            }
            n.inherits(f, i), e.exports = f, f.blockSize = 512, f.outSize = 224, f.hmacStrength = 192, f.padLength = 64, f.prototype._digest = function(e) {
                return "hex" === e ? n.toHex32(this.h.slice(0, 7), "big") : n.split32(this.h.slice(0, 7), "big")
            }
        },
        10360: function(e, t, r) {
            "use strict";
            var n = r(5711),
                i = r(7573);

            function f() {
                if (!(this instanceof f)) return new f;
                i.call(this), this.h = [3418070365, 3238371032, 1654270250, 914150663, 2438529370, 812702999, 355462360, 4144912697, 1731405415, 4290775857, 2394180231, 1750603025, 3675008525, 1694076839, 1203062813, 3204075428]
            }
            n.inherits(f, i), e.exports = f, f.blockSize = 1024, f.outSize = 384, f.hmacStrength = 192, f.padLength = 128, f.prototype._digest = function(e) {
                return "hex" === e ? n.toHex32(this.h.slice(0, 12), "big") : n.split32(this.h.slice(0, 12), "big")
            }
        },
        10361: function(e, t, r) {
            "use strict";
            var n = r(5711),
                i = r(6096),
                f = n.rotl32,
                d = n.sum32,
                s = n.sum32_3,
                c = n.sum32_4,
                a = i.BlockHash;

            function o() {
                if (!(this instanceof o)) return new o;
                a.call(this), this.h = [1732584193, 4023233417, 2562383102, 271733878, 3285377520], this.endian = "little"
            }

            function h(e, t, r, n) {
                return e <= 15 ? t ^ r ^ n : e <= 31 ? t & r | ~t & n : e <= 47 ? (t | ~r) ^ n : e <= 63 ? t & n | r & ~n : t ^ (r | ~n)
            }

            function u(e) {
                return e <= 15 ? 0 : e <= 31 ? 1518500249 : e <= 47 ? 1859775393 : e <= 63 ? 2400959708 : 2840853838
            }

            function b(e) {
                return e <= 15 ? 1352829926 : e <= 31 ? 1548603684 : e <= 47 ? 1836072691 : e <= 63 ? 2053994217 : 0
            }
            n.inherits(o, a), t.ripemd160 = o, o.blockSize = 512, o.outSize = 160, o.hmacStrength = 192, o.padLength = 64, o.prototype._update = function(e, t) {
                for (var r = this.h[0], n = this.h[1], i = this.h[2], a = this.h[3], o = this.h[4], v = r, y = n, w = i, _ = a, S = o, A = 0; A < 80; A++) {
                    var x = d(f(c(r, h(A, n, i, a), e[p[A] + t], u(A)), g[A]), o);
                    r = o, o = a, a = f(i, 10), i = n, n = x, x = d(f(c(v, h(79 - A, y, w, _), e[l[A] + t], b(A)), m[A]), S), v = S, S = _, _ = f(w, 10), w = y, y = x
                }
                x = s(this.h[1], i, _), this.h[1] = s(this.h[2], a, S), this.h[2] = s(this.h[3], o, v), this.h[3] = s(this.h[4], r, y), this.h[4] = s(this.h[0], n, w), this.h[0] = x
            }, o.prototype._digest = function(e) {
                return "hex" === e ? n.toHex32(this.h, "little") : n.split32(this.h, "little")
            };
            var p = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 7, 4, 13, 1, 10, 6, 15, 3, 12, 0, 9, 5, 2, 14, 11, 8, 3, 10, 14, 4, 9, 15, 8, 1, 2, 7, 0, 6, 13, 11, 5, 12, 1, 9, 11, 10, 0, 8, 12, 4, 13, 3, 7, 15, 14, 5, 6, 2, 4, 0, 5, 9, 7, 12, 2, 10, 14, 1, 3, 8, 11, 6, 15, 13],
                l = [5, 14, 7, 0, 9, 2, 11, 4, 13, 6, 15, 8, 1, 10, 3, 12, 6, 11, 3, 7, 0, 13, 5, 10, 14, 15, 8, 12, 4, 9, 1, 2, 15, 5, 1, 3, 7, 14, 6, 9, 11, 8, 12, 2, 10, 0, 4, 13, 8, 6, 4, 1, 3, 11, 15, 0, 5, 12, 2, 13, 9, 7, 10, 14, 12, 15, 10, 4, 1, 5, 8, 7, 6, 2, 13, 14, 0, 3, 9, 11],
                g = [11, 14, 15, 12, 5, 8, 7, 9, 11, 13, 14, 15, 6, 7, 9, 8, 7, 6, 8, 13, 11, 9, 7, 15, 7, 12, 15, 9, 11, 7, 13, 12, 11, 13, 6, 7, 14, 9, 13, 15, 14, 8, 13, 6, 5, 12, 7, 5, 11, 12, 14, 15, 14, 15, 9, 8, 9, 14, 5, 6, 8, 6, 5, 12, 9, 15, 5, 11, 6, 8, 13, 12, 5, 12, 13, 14, 11, 8, 5, 6],
                m = [8, 9, 9, 11, 13, 15, 15, 5, 7, 7, 8, 11, 14, 14, 12, 6, 9, 13, 15, 7, 12, 8, 9, 11, 7, 7, 12, 7, 6, 15, 13, 11, 9, 7, 15, 11, 8, 6, 6, 14, 12, 13, 5, 14, 13, 13, 7, 5, 15, 5, 8, 11, 14, 14, 6, 14, 6, 9, 12, 9, 12, 5, 15, 8, 8, 5, 12, 9, 12, 5, 14, 6, 8, 13, 6, 5, 15, 13, 11, 11]
        },
        10362: function(e, t, r) {
            "use strict";
            var n = r(5711),
                i = r(6095);

            function f(e, t, r) {
                if (!(this instanceof f)) return new f(e, t, r);
                this.Hash = e, this.blockSize = e.blockSize / 8, this.outSize = e.outSize / 8, this.inner = null, this.outer = null, this._init(n.toArray(t, r))
            }
            e.exports = f, f.prototype._init = function(e) {
                e.length > this.blockSize && (e = (new this.Hash).update(e).digest()), i(e.length <= this.blockSize);
                for (var t = e.length; t < this.blockSize; t++) e.push(0);
                for (t = 0; t < e.length; t++) e[t] ^= 54;
                for (this.inner = (new this.Hash).update(e), t = 0; t < e.length; t++) e[t] ^= 106;
                this.outer = (new this.Hash).update(e)
            }, f.prototype.update = function(e, t) {
                return this.inner.update(e, t), this
            }, f.prototype.digest = function(e) {
                return this.outer.update(this.inner.digest()), this.outer.digest(e)
            }
        },
        10363: function(e, t, r) {
            "use strict";
            var n = r(5755),
                i = r(5710),
                f = i.utils.getNAF,
                d = i.utils.getJSF,
                s = i.utils.assert;

            function c(e, t) {
                this.type = e, this.p = new n(t.p, 16), this.red = t.prime ? n.red(t.prime) : n.mont(this.p), this.zero = new n(0).toRed(this.red), this.one = new n(1).toRed(this.red), this.two = new n(2).toRed(this.red), this.n = t.n && new n(t.n, 16), this.g = t.g && this.pointFromJSON(t.g, t.gRed), this._wnafT1 = new Array(4), this._wnafT2 = new Array(4), this._wnafT3 = new Array(4), this._wnafT4 = new Array(4)
            }

            function a(e, t) {
                this.curve = e, this.type = t, this.precomputed = null
            }
            e.exports = c, c.prototype.point = function() {
                throw new Error("Not implemented")
            }, c.prototype.validate = function() {
                throw new Error("Not implemented")
            }, c.prototype._fixedNafMul = function(e, t) {
                var r = e._getDoubles(),
                    n = f(t, 1),
                    i = (1 << r.step + 1) - (r.step % 2 == 0 ? 2 : 1);
                i /= 3;
                for (var d = [], s = 0; s < n.length; s += r.step) {
                    var c = 0;
                    for (t = s + r.step - 1; t >= s; t--) c = (c << 1) + n[t];
                    d.push(c)
                }
                for (var a = this.jpoint(null, null, null), o = this.jpoint(null, null, null), h = i; h > 0; h--) {
                    for (s = 0; s < d.length; s++) {
                        (c = d[s]) === h ? o = o.mixedAdd(r.points[s]) : c === -h && (o = o.mixedAdd(r.points[s].neg()))
                    }
                    a = a.add(o)
                }
                return a.toP()
            }, c.prototype._wnafMul = function(e, t) {
                var r = 4,
                    n = e._getNAFPoints(r);
                r = n.wnd;
                for (var i = n.points, d = f(t, r), c = this.jpoint(null, null, null), a = d.length - 1; a >= 0; a--) {
                    for (t = 0; a >= 0 && 0 === d[a]; a--) t++;
                    if (a >= 0 && t++, c = c.dblp(t), a < 0) break;
                    var o = d[a];
                    s(0 !== o), c = "affine" === e.type ? o > 0 ? c.mixedAdd(i[o - 1 >> 1]) : c.mixedAdd(i[-o - 1 >> 1].neg()) : o > 0 ? c.add(i[o - 1 >> 1]) : c.add(i[-o - 1 >> 1].neg())
                }
                return "affine" === e.type ? c.toP() : c
            }, c.prototype._wnafMulAdd = function(e, t, r, n) {
                for (var i = this._wnafT1, s = this._wnafT2, c = this._wnafT3, a = 0, o = 0; o < n; o++) {
                    var h = (x = t[o])._getNAFPoints(e);
                    i[o] = h.wnd, s[o] = h.points
                }
                for (o = n - 1; o >= 1; o -= 2) {
                    var u = o - 1,
                        b = o;
                    if (1 === i[u] && 1 === i[b]) {
                        var p = [t[u], null, null, t[b]];
                        0 === t[u].y.cmp(t[b].y) ? (p[1] = t[u].add(t[b]), p[2] = t[u].toJ().mixedAdd(t[b].neg())) : 0 === t[u].y.cmp(t[b].y.redNeg()) ? (p[1] = t[u].toJ().mixedAdd(t[b]), p[2] = t[u].add(t[b].neg())) : (p[1] = t[u].toJ().mixedAdd(t[b]), p[2] = t[u].toJ().mixedAdd(t[b].neg()));
                        var l = [-3, -1, -5, -7, 0, 7, 5, 1, 3],
                            g = d(r[u], r[b]);
                        a = Math.max(g[0].length, a), c[u] = new Array(a), c[b] = new Array(a);
                        for (var m = 0; m < a; m++) {
                            var v = 0 | g[0][m],
                                y = 0 | g[1][m];
                            c[u][m] = l[3 * (v + 1) + (y + 1)], c[b][m] = 0, s[u] = p
                        }
                    } else c[u] = f(r[u], i[u]), c[b] = f(r[b], i[b]), a = Math.max(c[u].length, a), a = Math.max(c[b].length, a)
                }
                var w = this.jpoint(null, null, null),
                    _ = this._wnafT4;
                for (o = a; o >= 0; o--) {
                    for (var S = 0; o >= 0;) {
                        var A = !0;
                        for (m = 0; m < n; m++) _[m] = 0 | c[m][o], 0 !== _[m] && (A = !1);
                        if (!A) break;
                        S++, o--
                    }
                    if (o >= 0 && S++, w = w.dblp(S), o < 0) break;
                    for (m = 0; m < n; m++) {
                        var x, M = _[m];
                        0 !== M && (M > 0 ? x = s[m][M - 1 >> 1] : M < 0 && (x = s[m][-M - 1 >> 1].neg()), w = "affine" === x.type ? w.mixedAdd(x) : w.add(x))
                    }
                }
                for (o = 0; o < n; o++) s[o] = null;
                return w.toP()
            }, c.BasePoint = a, a.prototype.validate = function() {
                return this.curve.validate(this)
            }, a.prototype.precompute = function(e) {
                if (this.precomputed) return this;
                var t = {
                    doubles: null,
                    naf: null,
                    beta: null
                };
                return t.naf = this._getNAFPoints(8), t.doubles = this._getDoubles(4, e), t.beta = this._getBeta(), this.precomputed = t, this
            }, a.prototype._getDoubles = function(e, t) {
                if (this.precomputed && this.precomputed.doubles) return this.precomputed.doubles;
                for (var r = [this], n = this, i = 0; i < t; i += e) {
                    for (var f = 0; f < e; f++) n = n.dbl();
                    r.push(n)
                }
                return {
                    step: e,
                    points: r
                }
            }, a.prototype._getNAFPoints = function(e) {
                if (this.precomputed && this.precomputed.naf) return this.precomputed.naf;
                for (var t = [this], r = (1 << e) - 1, n = 1 === r ? null : this.dbl(), i = 1; i < r; i++) t[i] = t[i - 1].add(n);
                return {
                    wnd: e,
                    points: t
                }
            }, a.prototype._getBeta = function() {
                return null
            }, a.prototype.dblp = function(e) {
                for (var t = this, r = 0; r < e; r++) t = t.dbl();
                return t
            }
        },
        10364: function(e, t, r) {
            "use strict";
            var n = r(6279),
                i = r(5710),
                f = r(5755),
                d = r(5756),
                s = n.base,
                c = i.utils.assert;

            function a(e) {
                s.call(this, "short", e), this.a = new f(e.a, 16).toRed(this.red), this.b = new f(e.b, 16).toRed(this.red), this.tinv = this.two.redInvm(), this.zeroA = 0 === this.a.fromRed().cmpn(0), this.threeA = 0 === this.a.fromRed().sub(this.p).cmpn(-3), this.endo = this._getEndomorphism(e), this._endoWnafT1 = new Array(4), this._endoWnafT2 = new Array(4)
            }

            function Point(e, t, r, n) {
                s.BasePoint.call(this, e, "affine"), null === t && null === r ? (this.x = null, this.y = null, this.inf = !0) : (this.x = new f(t, 16), this.y = new f(r, 16), n && (this.x.forceRed(this.curve.red), this.y.forceRed(this.curve.red)), this.x.red || (this.x = this.x.toRed(this.curve.red)), this.y.red || (this.y = this.y.toRed(this.curve.red)), this.inf = !1)
            }

            function o(e, t, r, n) {
                s.BasePoint.call(this, e, "jacobian"), null === t && null === r && null === n ? (this.x = this.curve.one, this.y = this.curve.one, this.z = new f(0)) : (this.x = new f(t, 16), this.y = new f(r, 16), this.z = new f(n, 16)), this.x.red || (this.x = this.x.toRed(this.curve.red)), this.y.red || (this.y = this.y.toRed(this.curve.red)), this.z.red || (this.z = this.z.toRed(this.curve.red)), this.zOne = this.z === this.curve.one
            }
            d(a, s), e.exports = a, a.prototype._getEndomorphism = function(e) {
                if (this.zeroA && this.g && this.n && 1 === this.p.modn(3)) {
                    var t, r;
                    if (e.beta) t = new f(e.beta, 16).toRed(this.red);
                    else {
                        var n = this._getEndoRoots(this.p);
                        t = (t = n[0].cmp(n[1]) < 0 ? n[0] : n[1]).toRed(this.red)
                    }
                    if (e.lambda) r = new f(e.lambda, 16);
                    else {
                        var i = this._getEndoRoots(this.n);
                        0 === this.g.mul(i[0]).x.cmp(this.g.x.redMul(t)) ? r = i[0] : (r = i[1], c(0 === this.g.mul(r).x.cmp(this.g.x.redMul(t))))
                    }
                    return {
                        beta: t,
                        lambda: r,
                        basis: e.basis ? e.basis.map((function(e) {
                            return {
                                a: new f(e.a, 16),
                                b: new f(e.b, 16)
                            }
                        })) : this._getEndoBasis(r)
                    }
                }
            }, a.prototype._getEndoRoots = function(e) {
                var t = e === this.p ? this.red : f.mont(e),
                    r = new f(2).toRed(t).redInvm(),
                    n = r.redNeg(),
                    i = new f(3).toRed(t).redNeg().redSqrt().redMul(r);
                return [n.redAdd(i).fromRed(), n.redSub(i).fromRed()]
            }, a.prototype._getEndoBasis = function(e) {
                for (var t, r, n, i, d, s, c, a, o, h = this.n.shrn(Math.floor(this.n.bitLength() / 2)), u = e, b = this.n.clone(), p = new f(1), l = new f(0), g = new f(0), m = new f(1), v = 0; 0 !== u.cmpn(0);) {
                    var y = b.div(u);
                    a = b.sub(y.mul(u)), o = g.sub(y.mul(p));
                    var w = m.sub(y.mul(l));
                    if (!n && a.cmp(h) < 0) t = c.neg(), r = p, n = a.neg(), i = o;
                    else if (n && 2 == ++v) break;
                    c = a, b = u, u = a, g = p, p = o, m = l, l = w
                }
                d = a.neg(), s = o;
                var _ = n.sqr().add(i.sqr());
                return d.sqr().add(s.sqr()).cmp(_) >= 0 && (d = t, s = r), n.sign && (n = n.neg(), i = i.neg()), d.sign && (d = d.neg(), s = s.neg()), [{
                    a: n,
                    b: i
                }, {
                    a: d,
                    b: s
                }]
            }, a.prototype._endoSplit = function(e) {
                var t = this.endo.basis,
                    r = t[0],
                    n = t[1],
                    i = n.b.mul(e).divRound(this.n),
                    f = r.b.neg().mul(e).divRound(this.n),
                    d = i.mul(r.a),
                    s = f.mul(n.a),
                    c = i.mul(r.b),
                    a = f.mul(n.b);
                return {
                    k1: e.sub(d).sub(s),
                    k2: c.add(a).neg()
                }
            }, a.prototype.pointFromX = function(e, t) {
                (t = new f(t, 16)).red || (t = t.toRed(this.red));
                var r = t.redSqr().redMul(t).redIAdd(t.redMul(this.a)).redIAdd(this.b).redSqrt(),
                    n = r.fromRed().isOdd();
                return (e && !n || !e && n) && (r = r.redNeg()), this.point(t, r)
            }, a.prototype.validate = function(e) {
                if (e.inf) return !0;
                var t = e.x,
                    r = e.y,
                    n = this.a.redMul(t),
                    i = t.redSqr().redMul(t).redIAdd(n).redIAdd(this.b);
                return 0 === r.redSqr().redISub(i).cmpn(0)
            }, a.prototype._endoWnafMulAdd = function(e, t) {
                for (var r = this._endoWnafT1, n = this._endoWnafT2, i = 0; i < e.length; i++) {
                    var f = this._endoSplit(t[i]),
                        d = e[i],
                        s = d._getBeta();
                    f.k1.sign && (f.k1.sign = !f.k1.sign, d = d.neg(!0)), f.k2.sign && (f.k2.sign = !f.k2.sign, s = s.neg(!0)), r[2 * i] = d, r[2 * i + 1] = s, n[2 * i] = f.k1, n[2 * i + 1] = f.k2
                }
                for (var c = this._wnafMulAdd(1, r, n, 2 * i), a = 0; a < 2 * i; a++) r[a] = null, n[a] = null;
                return c
            }, d(Point, s.BasePoint), a.prototype.point = function(e, t, r) {
                return new Point(this, e, t, r)
            }, a.prototype.pointFromJSON = function(e, t) {
                return Point.fromJSON(this, e, t)
            }, Point.prototype._getBeta = function() {
                if (this.curve.endo) {
                    var e = this.precomputed;
                    if (e && e.beta) return e.beta;
                    var t = this.curve.point(this.x.redMul(this.curve.endo.beta), this.y);
                    if (e) {
                        var r = this.curve,
                            n = function(e) {
                                return r.point(e.x.redMul(r.endo.beta), e.y)
                            };
                        e.beta = t, t.precomputed = {
                            beta: null,
                            naf: e.naf && {
                                wnd: e.naf.wnd,
                                points: e.naf.points.map(n)
                            },
                            doubles: e.doubles && {
                                step: e.doubles.step,
                                points: e.doubles.points.map(n)
                            }
                        }
                    }
                    return t
                }
            }, Point.prototype.toJSON = function() {
                return this.precomputed ? [this.x, this.y, this.precomputed && {
                    doubles: this.precomputed.doubles && {
                        step: this.precomputed.doubles.step,
                        points: this.precomputed.doubles.points.slice(1)
                    },
                    naf: this.precomputed.naf && {
                        wnd: this.precomputed.naf.wnd,
                        points: this.precomputed.naf.points.slice(1)
                    }
                }] : [this.x, this.y]
            }, Point.fromJSON = function(e, t, r) {
                "string" == typeof t && (t = JSON.parse(t));
                var n = e.point(t[0], t[1], r);
                if (!t[2]) return n;

                function i(t) {
                    return e.point(t[0], t[1], r)
                }
                var f = t[2];
                return n.precomputed = {
                    beta: null,
                    doubles: f.doubles && {
                        step: f.doubles.step,
                        points: [n].concat(f.doubles.points.map(i))
                    },
                    naf: f.naf && {
                        wnd: f.naf.wnd,
                        points: [n].concat(f.naf.points.map(i))
                    }
                }, n
            }, Point.prototype.inspect = function() {
                return this.isInfinity() ? "<EC Point Infinity>" : "<EC Point x: " + this.x.fromRed().toString(16, 2) + " y: " + this.y.fromRed().toString(16, 2) + ">"
            }, Point.prototype.isInfinity = function() {
                return this.inf
            }, Point.prototype.add = function(e) {
                if (this.inf) return e;
                if (e.inf) return this;
                if (this.eq(e)) return this.dbl();
                if (this.neg().eq(e)) return this.curve.point(null, null);
                if (0 === this.x.cmp(e.x)) return this.curve.point(null, null);
                var t = this.y.redSub(e.y);
                0 !== t.cmpn(0) && (t = t.redMul(this.x.redSub(e.x).redInvm()));
                var r = t.redSqr().redISub(this.x).redISub(e.x),
                    n = t.redMul(this.x.redSub(r)).redISub(this.y);
                return this.curve.point(r, n)
            }, Point.prototype.dbl = function() {
                if (this.inf) return this;
                var e = this.y.redAdd(this.y);
                if (0 === e.cmpn(0)) return this.curve.point(null, null);
                var t = this.curve.a,
                    r = this.x.redSqr(),
                    n = e.redInvm(),
                    i = r.redAdd(r).redIAdd(r).redIAdd(t).redMul(n),
                    f = i.redSqr().redISub(this.x.redAdd(this.x)),
                    d = i.redMul(this.x.redSub(f)).redISub(this.y);
                return this.curve.point(f, d)
            }, Point.prototype.getX = function() {
                return this.x.fromRed()
            }, Point.prototype.getY = function() {
                return this.y.fromRed()
            }, Point.prototype.mul = function(e) {
                return e = new f(e, 16), this.precomputed && this.precomputed.doubles ? this.curve._fixedNafMul(this, e) : this.curve.endo ? this.curve._endoWnafMulAdd([this], [e]) : this.curve._wnafMul(this, e)
            }, Point.prototype.mulAdd = function(e, t, r) {
                var n = [this, t],
                    i = [e, r];
                return this.curve.endo ? this.curve._endoWnafMulAdd(n, i) : this.curve._wnafMulAdd(1, n, i, 2)
            }, Point.prototype.eq = function(e) {
                return this === e || this.inf === e.inf && (this.inf || 0 === this.x.cmp(e.x) && 0 === this.y.cmp(e.y))
            }, Point.prototype.neg = function(e) {
                if (this.inf) return this;
                var t = this.curve.point(this.x, this.y.redNeg());
                if (e && this.precomputed) {
                    var r = this.precomputed,
                        n = function(e) {
                            return e.neg()
                        };
                    t.precomputed = {
                        naf: r.naf && {
                            wnd: r.naf.wnd,
                            points: r.naf.points.map(n)
                        },
                        doubles: r.doubles && {
                            step: r.doubles.step,
                            points: r.doubles.points.map(n)
                        }
                    }
                }
                return t
            }, Point.prototype.toJ = function() {
                return this.inf ? this.curve.jpoint(null, null, null) : this.curve.jpoint(this.x, this.y, this.curve.one)
            }, d(o, s.BasePoint), a.prototype.jpoint = function(e, t, r) {
                return new o(this, e, t, r)
            }, o.prototype.toP = function() {
                if (this.isInfinity()) return this.curve.point(null, null);
                var e = this.z.redInvm(),
                    t = e.redSqr(),
                    r = this.x.redMul(t),
                    n = this.y.redMul(t).redMul(e);
                return this.curve.point(r, n)
            }, o.prototype.neg = function() {
                return this.curve.jpoint(this.x, this.y.redNeg(), this.z)
            }, o.prototype.add = function(e) {
                if (this.isInfinity()) return e;
                if (e.isInfinity()) return this;
                var t = e.z.redSqr(),
                    r = this.z.redSqr(),
                    n = this.x.redMul(t),
                    i = e.x.redMul(r),
                    f = this.y.redMul(t.redMul(e.z)),
                    d = e.y.redMul(r.redMul(this.z)),
                    s = n.redSub(i),
                    c = f.redSub(d);
                if (0 === s.cmpn(0)) return 0 !== c.cmpn(0) ? this.curve.jpoint(null, null, null) : this.dbl();
                var a = s.redSqr(),
                    o = a.redMul(s),
                    h = n.redMul(a),
                    u = c.redSqr().redIAdd(o).redISub(h).redISub(h),
                    b = c.redMul(h.redISub(u)).redISub(f.redMul(o)),
                    p = this.z.redMul(e.z).redMul(s);
                return this.curve.jpoint(u, b, p)
            }, o.prototype.mixedAdd = function(e) {
                if (this.isInfinity()) return e.toJ();
                if (e.isInfinity()) return this;
                var t = this.z.redSqr(),
                    r = this.x,
                    n = e.x.redMul(t),
                    i = this.y,
                    f = e.y.redMul(t).redMul(this.z),
                    d = r.redSub(n),
                    s = i.redSub(f);
                if (0 === d.cmpn(0)) return 0 !== s.cmpn(0) ? this.curve.jpoint(null, null, null) : this.dbl();
                var c = d.redSqr(),
                    a = c.redMul(d),
                    o = r.redMul(c),
                    h = s.redSqr().redIAdd(a).redISub(o).redISub(o),
                    u = s.redMul(o.redISub(h)).redISub(i.redMul(a)),
                    b = this.z.redMul(d);
                return this.curve.jpoint(h, u, b)
            }, o.prototype.dblp = function(e) {
                if (0 === e) return this;
                if (this.isInfinity()) return this;
                if (!e) return this.dbl();
                if (this.curve.zeroA || this.curve.threeA) {
                    for (var t = this, r = 0; r < e; r++) t = t.dbl();
                    return t
                }
                var n = this.curve.a,
                    i = this.curve.tinv,
                    f = this.x,
                    d = this.y,
                    s = this.z,
                    c = s.redSqr().redSqr(),
                    a = d.redAdd(d);
                for (r = 0; r < e; r++) {
                    var o = f.redSqr(),
                        h = a.redSqr(),
                        u = h.redSqr(),
                        b = o.redAdd(o).redIAdd(o).redIAdd(n.redMul(c)),
                        p = f.redMul(h),
                        l = b.redSqr().redISub(p.redAdd(p)),
                        g = p.redISub(l),
                        m = b.redMul(g);
                    m = m.redIAdd(m).redISub(u);
                    var v = a.redMul(s);
                    r + 1 < e && (c = c.redMul(u)), f = l, s = v, a = m
                }
                return this.curve.jpoint(f, a.redMul(i), s)
            }, o.prototype.dbl = function() {
                return this.isInfinity() ? this : this.curve.zeroA ? this._zeroDbl() : this.curve.threeA ? this._threeDbl() : this._dbl()
            }, o.prototype._zeroDbl = function() {
                var e, t, r;
                if (this.zOne) {
                    var n = this.x.redSqr(),
                        i = this.y.redSqr(),
                        f = i.redSqr(),
                        d = this.x.redAdd(i).redSqr().redISub(n).redISub(f);
                    d = d.redIAdd(d);
                    var s = n.redAdd(n).redIAdd(n),
                        c = s.redSqr().redISub(d).redISub(d),
                        a = f.redIAdd(f);
                    a = (a = a.redIAdd(a)).redIAdd(a), e = c, t = s.redMul(d.redISub(c)).redISub(a), r = this.y.redAdd(this.y)
                } else {
                    var o = this.x.redSqr(),
                        h = this.y.redSqr(),
                        u = h.redSqr(),
                        b = this.x.redAdd(h).redSqr().redISub(o).redISub(u);
                    b = b.redIAdd(b);
                    var p = o.redAdd(o).redIAdd(o),
                        l = p.redSqr(),
                        g = u.redIAdd(u);
                    g = (g = g.redIAdd(g)).redIAdd(g), e = l.redISub(b).redISub(b), t = p.redMul(b.redISub(e)).redISub(g), r = (r = this.y.redMul(this.z)).redIAdd(r)
                }
                return this.curve.jpoint(e, t, r)
            }, o.prototype._threeDbl = function() {
                var e, t, r;
                if (this.zOne) {
                    var n = this.x.redSqr(),
                        i = this.y.redSqr(),
                        f = i.redSqr(),
                        d = this.x.redAdd(i).redSqr().redISub(n).redISub(f);
                    d = d.redIAdd(d);
                    var s = n.redAdd(n).redIAdd(n).redIAdd(this.curve.a),
                        c = s.redSqr().redISub(d).redISub(d);
                    e = c;
                    var a = f.redIAdd(f);
                    a = (a = a.redIAdd(a)).redIAdd(a), t = s.redMul(d.redISub(c)).redISub(a), r = this.y.redAdd(this.y)
                } else {
                    var o = this.z.redSqr(),
                        h = this.y.redSqr(),
                        u = this.x.redMul(h),
                        b = this.x.redSub(o).redMul(this.x.redAdd(o));
                    b = b.redAdd(b).redIAdd(b);
                    var p = u.redIAdd(u),
                        l = (p = p.redIAdd(p)).redAdd(p);
                    e = b.redSqr().redISub(l), r = this.y.redAdd(this.z).redSqr().redISub(h).redISub(o);
                    var g = h.redSqr();
                    g = (g = (g = g.redIAdd(g)).redIAdd(g)).redIAdd(g), t = b.redMul(p.redISub(e)).redISub(g)
                }
                return this.curve.jpoint(e, t, r)
            }, o.prototype._dbl = function() {
                var e = this.curve.a,
                    t = this.x,
                    r = this.y,
                    n = this.z,
                    i = n.redSqr().redSqr(),
                    f = t.redSqr(),
                    d = r.redSqr(),
                    s = f.redAdd(f).redIAdd(f).redIAdd(e.redMul(i)),
                    c = t.redAdd(t),
                    a = (c = c.redIAdd(c)).redMul(d),
                    o = s.redSqr().redISub(a.redAdd(a)),
                    h = a.redISub(o),
                    u = d.redSqr();
                u = (u = (u = u.redIAdd(u)).redIAdd(u)).redIAdd(u);
                var b = s.redMul(h).redISub(u),
                    p = r.redAdd(r).redMul(n);
                return this.curve.jpoint(o, b, p)
            }, o.prototype.trpl = function() {
                if (!this.curve.zeroA) return this.dbl().add(this);
                var e = this.x.redSqr(),
                    t = this.y.redSqr(),
                    r = this.z.redSqr(),
                    n = t.redSqr(),
                    i = e.redAdd(e).redIAdd(e),
                    f = i.redSqr(),
                    d = this.x.redAdd(t).redSqr().redISub(e).redISub(n),
                    s = (d = (d = (d = d.redIAdd(d)).redAdd(d).redIAdd(d)).redISub(f)).redSqr(),
                    c = n.redIAdd(n);
                c = (c = (c = c.redIAdd(c)).redIAdd(c)).redIAdd(c);
                var a = i.redIAdd(d).redSqr().redISub(f).redISub(s).redISub(c),
                    o = t.redMul(a);
                o = (o = o.redIAdd(o)).redIAdd(o);
                var h = this.x.redMul(s).redISub(o);
                h = (h = h.redIAdd(h)).redIAdd(h);
                var u = this.y.redMul(a.redMul(c.redISub(a)).redISub(d.redMul(s)));
                u = (u = (u = u.redIAdd(u)).redIAdd(u)).redIAdd(u);
                var b = this.z.redAdd(d).redSqr().redISub(r).redISub(s);
                return this.curve.jpoint(h, u, b)
            }, o.prototype.mul = function(e, t) {
                return e = new f(e, t), this.curve._wnafMul(this, e)
            }, o.prototype.eq = function(e) {
                if ("affine" === e.type) return this.eq(e.toJ());
                if (this === e) return !0;
                var t = this.z.redSqr(),
                    r = e.z.redSqr();
                if (0 !== this.x.redMul(r).redISub(e.x.redMul(t)).cmpn(0)) return !1;
                var n = t.redMul(this.z),
                    i = r.redMul(e.z);
                return 0 === this.y.redMul(i).redISub(e.y.redMul(n)).cmpn(0)
            }, o.prototype.inspect = function() {
                return this.isInfinity() ? "<EC JPoint Infinity>" : "<EC JPoint x: " + this.x.toString(16, 2) + " y: " + this.y.toString(16, 2) + " z: " + this.z.toString(16, 2) + ">"
            }, o.prototype.isInfinity = function() {
                return 0 === this.z.cmpn(0)
            }
        },
        10365: function(e, t, r) {
            "use strict";
            var n = r(6279),
                i = r(5755),
                f = r(5756),
                d = n.base;

            function s(e) {
                d.call(this, "mont", e), this.a = new i(e.a, 16).toRed(this.red), this.b = new i(e.b, 16).toRed(this.red), this.i4 = new i(4).toRed(this.red).redInvm(), this.two = new i(2).toRed(this.red), this.a24 = this.i4.redMul(this.a.redAdd(this.two))
            }

            function Point(e, t, r) {
                d.BasePoint.call(this, e, "projective"), null === t && null === r ? (this.x = this.curve.one, this.z = this.curve.zero) : (this.x = new i(t, 16), this.z = new i(r, 16), this.x.red || (this.x = this.x.toRed(this.curve.red)), this.z.red || (this.z = this.z.toRed(this.curve.red)))
            }
            f(s, d), e.exports = s, s.prototype.validate = function(e) {
                var t = e.normalize().x,
                    r = t.redSqr(),
                    n = r.redMul(t).redAdd(r.redMul(this.a)).redAdd(t);
                return 0 === n.redSqrt().redSqr().cmp(n)
            }, f(Point, d.BasePoint), s.prototype.point = function(e, t) {
                return new Point(this, e, t)
            }, s.prototype.pointFromJSON = function(e) {
                return Point.fromJSON(this, e)
            }, Point.prototype.precompute = function() {}, Point.fromJSON = function(e, t) {
                return new Point(e, t[0], t[1] || e.one)
            }, Point.prototype.inspect = function() {
                return this.isInfinity() ? "<EC Point Infinity>" : "<EC Point x: " + this.x.fromRed().toString(16, 2) + " z: " + this.z.fromRed().toString(16, 2) + ">"
            }, Point.prototype.isInfinity = function() {
                return 0 === this.z.cmpn(0)
            }, Point.prototype.dbl = function() {
                var e = this.x.redAdd(this.z).redSqr(),
                    t = this.x.redSub(this.z).redSqr(),
                    r = e.redSub(t),
                    n = e.redMul(t),
                    i = r.redMul(t.redAdd(this.curve.a24.redMul(r)));
                return this.curve.point(n, i)
            }, Point.prototype.add = function() {
                throw new Error("Not supported on Montgomery curve")
            }, Point.prototype.diffAdd = function(e, t) {
                var r = this.x.redAdd(this.z),
                    n = this.x.redSub(this.z),
                    i = e.x.redAdd(e.z),
                    f = e.x.redSub(e.z).redMul(r),
                    d = i.redMul(n),
                    s = t.z.redMul(f.redAdd(d).redSqr()),
                    c = t.x.redMul(f.redISub(d).redSqr());
                return this.curve.point(s, c)
            }, Point.prototype.mul = function(e) {
                for (var t = e.clone(), r = this, n = this.curve.point(null, null), i = []; 0 !== t.cmpn(0); t.ishrn(1)) i.push(t.andln(1));
                for (var f = i.length - 1; f >= 0; f--) 0 === i[f] ? (r = r.diffAdd(n, this), n = n.dbl()) : (n = r.diffAdd(n, this), r = r.dbl());
                return n
            }, Point.prototype.mulAdd = function() {
                throw new Error("Not supported on Montgomery curve")
            }, Point.prototype.normalize = function() {
                return this.x = this.x.redMul(this.z.redInvm()), this.z = this.curve.one, this
            }, Point.prototype.getX = function() {
                return this.normalize(), this.x.fromRed()
            }
        },
        10366: function(e, t, r) {
            "use strict";
            var n = r(6279),
                i = r(5710),
                f = r(5755),
                d = r(5756),
                s = n.base,
                c = i.utils.assert;

            function a(e) {
                this.twisted = 1 != (0 | e.a), this.mOneA = this.twisted && -1 == (0 | e.a), this.extended = this.mOneA, s.call(this, "edwards", e), this.a = new f(e.a, 16).mod(this.red.m).toRed(this.red), this.c = new f(e.c, 16).toRed(this.red), this.c2 = this.c.redSqr(), this.d = new f(e.d, 16).toRed(this.red), this.dd = this.d.redAdd(this.d), c(!this.twisted || 0 === this.c.fromRed().cmpn(1)), this.oneC = 1 == (0 | e.c)
            }

            function Point(e, t, r, n, i) {
                s.BasePoint.call(this, e, "projective"), null === t && null === r && null === n ? (this.x = this.curve.zero, this.y = this.curve.one, this.z = this.curve.one, this.t = this.curve.zero, this.zOne = !0) : (this.x = new f(t, 16), this.y = new f(r, 16), this.z = n ? new f(n, 16) : this.curve.one, this.t = i && new f(i, 16), this.x.red || (this.x = this.x.toRed(this.curve.red)), this.y.red || (this.y = this.y.toRed(this.curve.red)), this.z.red || (this.z = this.z.toRed(this.curve.red)), this.t && !this.t.red && (this.t = this.t.toRed(this.curve.red)), this.zOne = this.z === this.curve.one, this.curve.extended && !this.t && (this.t = this.x.redMul(this.y), this.zOne || (this.t = this.t.redMul(this.z.redInvm()))))
            }
            d(a, s), e.exports = a, a.prototype._mulA = function(e) {
                return this.mOneA ? e.redNeg() : this.a.redMul(e)
            }, a.prototype._mulC = function(e) {
                return this.oneC ? e : this.c.redMul(e)
            }, a.prototype.jpoint = function(e, t, r, n) {
                return this.point(e, t, r, n)
            }, a.prototype.pointFromX = function(e, t) {
                (t = new f(t, 16)).red || (t = t.toRed(this.red));
                var r = t.redSqr(),
                    i = this.c2.redSub(this.a.redMul(r)),
                    d = this.one.redSub(this.c2.redMul(this.d).redMul(r)),
                    s = i.redMul(d.redInvm()).redSqrt(),
                    c = s.fromRed().isOdd();
                return (e && !c || !e && c) && (s = s.redNeg()), this.point(t, s, n.one)
            }, a.prototype.validate = function(e) {
                if (e.isInfinity()) return !0;
                e.normalize();
                var t = e.x.redSqr(),
                    r = e.y.redSqr(),
                    n = t.redMul(this.a).redAdd(r),
                    i = this.c2.redMul(this.one.redAdd(this.d.redMul(t).redMul(r)));
                return 0 === n.cmp(i)
            }, d(Point, s.BasePoint), a.prototype.pointFromJSON = function(e) {
                return Point.fromJSON(this, e)
            }, a.prototype.point = function(e, t, r, n) {
                return new Point(this, e, t, r, n)
            }, Point.fromJSON = function(e, t) {
                return new Point(e, t[0], t[1], t[2])
            }, Point.prototype.inspect = function() {
                return this.isInfinity() ? "<EC Point Infinity>" : "<EC Point x: " + this.x.fromRed().toString(16, 2) + " y: " + this.y.fromRed().toString(16, 2) + " z: " + this.z.fromRed().toString(16, 2) + ">"
            }, Point.prototype.isInfinity = function() {
                return 0 === this.x.cmpn(0) && 0 === this.y.cmp(this.z)
            }, Point.prototype._extDbl = function() {
                var e = this.x.redSqr(),
                    t = this.y.redSqr(),
                    r = this.z.redSqr();
                r = r.redIAdd(r);
                var n = this.curve._mulA(e),
                    i = this.x.redAdd(this.y).redSqr().redISub(e).redISub(t),
                    f = n.redAdd(t),
                    d = f.redSub(r),
                    s = n.redSub(t),
                    c = i.redMul(d),
                    a = f.redMul(s),
                    o = i.redMul(s),
                    h = d.redMul(f);
                return this.curve.point(c, a, h, o)
            }, Point.prototype._projDbl = function() {
                var e, t, r, n = this.x.redAdd(this.y).redSqr(),
                    i = this.x.redSqr(),
                    f = this.y.redSqr();
                if (this.curve.twisted) {
                    var d = (a = this.curve._mulA(i)).redAdd(f);
                    if (this.zOne) e = n.redSub(i).redSub(f).redMul(d.redSub(this.curve.two)), t = d.redMul(a.redSub(f)), r = d.redSqr().redSub(d).redSub(d);
                    else {
                        var s = this.z.redSqr(),
                            c = d.redSub(s).redISub(s);
                        e = n.redSub(i).redISub(f).redMul(c), t = d.redMul(a.redSub(f)), r = d.redMul(c)
                    }
                } else {
                    var a = i.redAdd(f);
                    s = this.curve._mulC(this.c.redMul(this.z)).redSqr(), c = a.redSub(s).redSub(s);
                    e = this.curve._mulC(n.redISub(a)).redMul(c), t = this.curve._mulC(a).redMul(i.redISub(f)), r = a.redMul(c)
                }
                return this.curve.point(e, t, r)
            }, Point.prototype.dbl = function() {
                return this.isInfinity() ? this : this.curve.extended ? this._extDbl() : this._projDbl()
            }, Point.prototype._extAdd = function(e) {
                var t = this.y.redSub(this.x).redMul(e.y.redSub(e.x)),
                    r = this.y.redAdd(this.x).redMul(e.y.redAdd(e.x)),
                    n = this.t.redMul(this.curve.dd).redMul(e.t),
                    i = this.z.redMul(e.z.redAdd(e.z)),
                    f = r.redSub(t),
                    d = i.redSub(n),
                    s = i.redAdd(n),
                    c = r.redAdd(t),
                    a = f.redMul(d),
                    o = s.redMul(c),
                    h = f.redMul(c),
                    u = d.redMul(s);
                return this.curve.point(a, o, u, h)
            }, Point.prototype._projAdd = function(e) {
                var t, r, n = this.z.redMul(e.z),
                    i = n.redSqr(),
                    f = this.x.redMul(e.x),
                    d = this.y.redMul(e.y),
                    s = this.curve.d.redMul(f).redMul(d),
                    c = i.redSub(s),
                    a = i.redAdd(s),
                    o = this.x.redAdd(this.y).redMul(e.x.redAdd(e.y)).redISub(f).redISub(d),
                    h = n.redMul(c).redMul(o);
                return this.curve.twisted ? (t = n.redMul(a).redMul(d.redSub(this.curve._mulA(f))), r = c.redMul(a)) : (t = n.redMul(a).redMul(d.redSub(f)), r = this.curve._mulC(c).redMul(a)), this.curve.point(h, t, r)
            }, Point.prototype.add = function(e) {
                return this.isInfinity() ? e : e.isInfinity() ? this : this.curve.extended ? this._extAdd(e) : this._projAdd(e)
            }, Point.prototype.mul = function(e) {
                return this.precomputed && this.precomputed.doubles ? this.curve._fixedNafMul(this, e) : this.curve._wnafMul(this, e)
            }, Point.prototype.mulAdd = function(e, t, r) {
                return this.curve._wnafMulAdd(1, [this, t], [e, r], 2)
            }, Point.prototype.normalize = function() {
                if (this.zOne) return this;
                var e = this.z.redInvm();
                return this.x = this.x.redMul(e), this.y = this.y.redMul(e), this.t && (this.t = this.t.redMul(e)), this.z = this.curve.one, this.zOne = !0, this
            }, Point.prototype.neg = function() {
                return this.curve.point(this.x.redNeg(), this.y, this.z, this.t && this.t.redNeg())
            }, Point.prototype.getX = function() {
                return this.normalize(), this.x.fromRed()
            }, Point.prototype.getY = function() {
                return this.normalize(), this.y.fromRed()
            }, Point.prototype.toP = Point.prototype.normalize, Point.prototype.mixedAdd = Point.prototype.add
        },
        10367: function(e, t, r) {
            "use strict";
            var n, i = t,
                f = r(7570),
                d = r(5710),
                s = d.utils.assert;

            function c(e) {
                "short" === e.type ? this.curve = new d.curve.short(e) : "edwards" === e.type ? this.curve = new d.curve.edwards(e) : this.curve = new d.curve.mont(e), this.g = this.curve.g, this.n = this.curve.n, this.hash = e.hash, s(this.g.validate(), "Invalid curve"), s(this.g.mul(this.n).isInfinity(), "Invalid curve, G*N != O")
            }

            function a(e, t) {
                Object.defineProperty(i, e, {
                    configurable: !0,
                    enumerable: !0,
                    get: function() {
                        var r = new c(t);
                        return Object.defineProperty(i, e, {
                            configurable: !0,
                            enumerable: !0,
                            value: r
                        }), r
                    }
                })
            }
            i.PresetCurve = c, a("p192", {
                type: "short",
                prime: "p192",
                p: "ffffffff ffffffff ffffffff fffffffe ffffffff ffffffff",
                a: "ffffffff ffffffff ffffffff fffffffe ffffffff fffffffc",
                b: "64210519 e59c80e7 0fa7e9ab 72243049 feb8deec c146b9b1",
                n: "ffffffff ffffffff ffffffff 99def836 146bc9b1 b4d22831",
                hash: f.sha256,
                gRed: !1,
                g: ["188da80e b03090f6 7cbf20eb 43a18800 f4ff0afd 82ff1012", "07192b95 ffc8da78 631011ed 6b24cdd5 73f977a1 1e794811"]
            }), a("p224", {
                type: "short",
                prime: "p224",
                p: "ffffffff ffffffff ffffffff ffffffff 00000000 00000000 00000001",
                a: "ffffffff ffffffff ffffffff fffffffe ffffffff ffffffff fffffffe",
                b: "b4050a85 0c04b3ab f5413256 5044b0b7 d7bfd8ba 270b3943 2355ffb4",
                n: "ffffffff ffffffff ffffffff ffff16a2 e0b8f03e 13dd2945 5c5c2a3d",
                hash: f.sha256,
                gRed: !1,
                g: ["b70e0cbd 6bb4bf7f 321390b9 4a03c1d3 56c21122 343280d6 115c1d21", "bd376388 b5f723fb 4c22dfe6 cd4375a0 5a074764 44d58199 85007e34"]
            }), a("p256", {
                type: "short",
                prime: null,
                p: "ffffffff 00000001 00000000 00000000 00000000 ffffffff ffffffff ffffffff",
                a: "ffffffff 00000001 00000000 00000000 00000000 ffffffff ffffffff fffffffc",
                b: "5ac635d8 aa3a93e7 b3ebbd55 769886bc 651d06b0 cc53b0f6 3bce3c3e 27d2604b",
                n: "ffffffff 00000000 ffffffff ffffffff bce6faad a7179e84 f3b9cac2 fc632551",
                hash: f.sha256,
                gRed: !1,
                g: ["6b17d1f2 e12c4247 f8bce6e5 63a440f2 77037d81 2deb33a0 f4a13945 d898c296", "4fe342e2 fe1a7f9b 8ee7eb4a 7c0f9e16 2bce3357 6b315ece cbb64068 37bf51f5"]
            }), a("curve25519", {
                type: "mont",
                prime: "p25519",
                p: "7fffffffffffffff ffffffffffffffff ffffffffffffffff ffffffffffffffed",
                a: "76d06",
                b: "0",
                n: "1000000000000000 0000000000000000 14def9dea2f79cd6 5812631a5cf5d3ed",
                hash: f.sha256,
                gRed: !1,
                g: ["9"]
            }), a("ed25519", {
                type: "edwards",
                prime: "p25519",
                p: "7fffffffffffffff ffffffffffffffff ffffffffffffffff ffffffffffffffed",
                a: "-1",
                c: "1",
                d: "52036cee2b6ffe73 8cc740797779e898 00700a4d4141d8ab 75eb4dca135978a3",
                n: "1000000000000000 0000000000000000 14def9dea2f79cd6 5812631a5cf5d3ed",
                hash: f.sha256,
                gRed: !1,
                g: ["216936d3cd6e53fec0a4e231fdd6dc5c692cc7609525a7b2c9562d608f25d51a", "6666666666666666666666666666666666666666666666666666666666666658"]
            });
            try {
                n = r(10368)
            } catch (e) {
                n = void 0
            }
            a("secp256k1", {
                type: "short",
                prime: "k256",
                p: "ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffe fffffc2f",
                a: "0",
                b: "7",
                n: "ffffffff ffffffff ffffffff fffffffe baaedce6 af48a03b bfd25e8c d0364141",
                h: "1",
                hash: f.sha256,
                beta: "7ae96a2b657c07106e64479eac3434e99cf0497512f58995c1396c28719501ee",
                lambda: "5363ad4cc05c30e0a5261c028812645a122e22ea20816678df02967c1b23bd72",
                basis: [{
                    a: "3086d221a7d46bcde86c90e49284eb15",
                    b: "-e4437ed6010e88286f547fa90abfe4c3"
                }, {
                    a: "114ca50f7a8e2f3f657c1108d9d44cfd8",
                    b: "3086d221a7d46bcde86c90e49284eb15"
                }],
                gRed: !1,
                g: ["79be667ef9dcbbac55a06295ce870b07029bfcdb2dce28d959f2815b16f81798", "483ada7726a3c4655da4fbfc0e1108a8fd17b448a68554199c47d08ffb10d4b8", n]
            })
        },
        10368: function(e, t) {
            e.exports = {
                doubles: {
                    step: 4,
                    points: [
                        ["e60fce93b59e9ec53011aabc21c23e97b2a31369b87a5ae9c44ee89e2a6dec0a", "f7e3507399e595929db99f34f57937101296891e44d23f0be1f32cce69616821"],
                        ["8282263212c609d9ea2a6e3e172de238d8c39cabd5ac1ca10646e23fd5f51508", "11f8a8098557dfe45e8256e830b60ace62d613ac2f7b17bed31b6eaff6e26caf"],
                        ["175e159f728b865a72f99cc6c6fc846de0b93833fd2222ed73fce5b551e5b739", "d3506e0d9e3c79eba4ef97a51ff71f5eacb5955add24345c6efa6ffee9fed695"],
                        ["363d90d447b00c9c99ceac05b6262ee053441c7e55552ffe526bad8f83ff4640", "4e273adfc732221953b445397f3363145b9a89008199ecb62003c7f3bee9de9"],
                        ["8b4b5f165df3c2be8c6244b5b745638843e4a781a15bcd1b69f79a55dffdf80c", "4aad0a6f68d308b4b3fbd7813ab0da04f9e336546162ee56b3eff0c65fd4fd36"],
                        ["723cbaa6e5db996d6bf771c00bd548c7b700dbffa6c0e77bcb6115925232fcda", "96e867b5595cc498a921137488824d6e2660a0653779494801dc069d9eb39f5f"],
                        ["eebfa4d493bebf98ba5feec812c2d3b50947961237a919839a533eca0e7dd7fa", "5d9a8ca3970ef0f269ee7edaf178089d9ae4cdc3a711f712ddfd4fdae1de8999"],
                        ["100f44da696e71672791d0a09b7bde459f1215a29b3c03bfefd7835b39a48db0", "cdd9e13192a00b772ec8f3300c090666b7ff4a18ff5195ac0fbd5cd62bc65a09"],
                        ["e1031be262c7ed1b1dc9227a4a04c017a77f8d4464f3b3852c8acde6e534fd2d", "9d7061928940405e6bb6a4176597535af292dd419e1ced79a44f18f29456a00d"],
                        ["feea6cae46d55b530ac2839f143bd7ec5cf8b266a41d6af52d5e688d9094696d", "e57c6b6c97dce1bab06e4e12bf3ecd5c981c8957cc41442d3155debf18090088"],
                        ["da67a91d91049cdcb367be4be6ffca3cfeed657d808583de33fa978bc1ec6cb1", "9bacaa35481642bc41f463f7ec9780e5dec7adc508f740a17e9ea8e27a68be1d"],
                        ["53904faa0b334cdda6e000935ef22151ec08d0f7bb11069f57545ccc1a37b7c0", "5bc087d0bc80106d88c9eccac20d3c1c13999981e14434699dcb096b022771c8"],
                        ["8e7bcd0bd35983a7719cca7764ca906779b53a043a9b8bcaeff959f43ad86047", "10b7770b2a3da4b3940310420ca9514579e88e2e47fd68b3ea10047e8460372a"],
                        ["385eed34c1cdff21e6d0818689b81bde71a7f4f18397e6690a841e1599c43862", "283bebc3e8ea23f56701de19e9ebf4576b304eec2086dc8cc0458fe5542e5453"],
                        ["6f9d9b803ecf191637c73a4413dfa180fddf84a5947fbc9c606ed86c3fac3a7", "7c80c68e603059ba69b8e2a30e45c4d47ea4dd2f5c281002d86890603a842160"],
                        ["3322d401243c4e2582a2147c104d6ecbf774d163db0f5e5313b7e0e742d0e6bd", "56e70797e9664ef5bfb019bc4ddaf9b72805f63ea2873af624f3a2e96c28b2a0"],
                        ["85672c7d2de0b7da2bd1770d89665868741b3f9af7643397721d74d28134ab83", "7c481b9b5b43b2eb6374049bfa62c2e5e77f17fcc5298f44c8e3094f790313a6"],
                        ["948bf809b1988a46b06c9f1919413b10f9226c60f668832ffd959af60c82a0a", "53a562856dcb6646dc6b74c5d1c3418c6d4dff08c97cd2bed4cb7f88d8c8e589"],
                        ["6260ce7f461801c34f067ce0f02873a8f1b0e44dfc69752accecd819f38fd8e8", "bc2da82b6fa5b571a7f09049776a1ef7ecd292238051c198c1a84e95b2b4ae17"],
                        ["e5037de0afc1d8d43d8348414bbf4103043ec8f575bfdc432953cc8d2037fa2d", "4571534baa94d3b5f9f98d09fb990bddbd5f5b03ec481f10e0e5dc841d755bda"],
                        ["e06372b0f4a207adf5ea905e8f1771b4e7e8dbd1c6a6c5b725866a0ae4fce725", "7a908974bce18cfe12a27bb2ad5a488cd7484a7787104870b27034f94eee31dd"],
                        ["213c7a715cd5d45358d0bbf9dc0ce02204b10bdde2a3f58540ad6908d0559754", "4b6dad0b5ae462507013ad06245ba190bb4850f5f36a7eeddff2c27534b458f2"],
                        ["4e7c272a7af4b34e8dbb9352a5419a87e2838c70adc62cddf0cc3a3b08fbd53c", "17749c766c9d0b18e16fd09f6def681b530b9614bff7dd33e0b3941817dcaae6"],
                        ["fea74e3dbe778b1b10f238ad61686aa5c76e3db2be43057632427e2840fb27b6", "6e0568db9b0b13297cf674deccb6af93126b596b973f7b77701d3db7f23cb96f"],
                        ["76e64113f677cf0e10a2570d599968d31544e179b760432952c02a4417bdde39", "c90ddf8dee4e95cf577066d70681f0d35e2a33d2b56d2032b4b1752d1901ac01"],
                        ["c738c56b03b2abe1e8281baa743f8f9a8f7cc643df26cbee3ab150242bcbb891", "893fb578951ad2537f718f2eacbfbbbb82314eef7880cfe917e735d9699a84c3"],
                        ["d895626548b65b81e264c7637c972877d1d72e5f3a925014372e9f6588f6c14b", "febfaa38f2bc7eae728ec60818c340eb03428d632bb067e179363ed75d7d991f"],
                        ["b8da94032a957518eb0f6433571e8761ceffc73693e84edd49150a564f676e03", "2804dfa44805a1e4d7c99cc9762808b092cc584d95ff3b511488e4e74efdf6e7"],
                        ["e80fea14441fb33a7d8adab9475d7fab2019effb5156a792f1a11778e3c0df5d", "eed1de7f638e00771e89768ca3ca94472d155e80af322ea9fcb4291b6ac9ec78"],
                        ["a301697bdfcd704313ba48e51d567543f2a182031efd6915ddc07bbcc4e16070", "7370f91cfb67e4f5081809fa25d40f9b1735dbf7c0a11a130c0d1a041e177ea1"],
                        ["90ad85b389d6b936463f9d0512678de208cc330b11307fffab7ac63e3fb04ed4", "e507a3620a38261affdcbd9427222b839aefabe1582894d991d4d48cb6ef150"],
                        ["8f68b9d2f63b5f339239c1ad981f162ee88c5678723ea3351b7b444c9ec4c0da", "662a9f2dba063986de1d90c2b6be215dbbea2cfe95510bfdf23cbf79501fff82"],
                        ["e4f3fb0176af85d65ff99ff9198c36091f48e86503681e3e6686fd5053231e11", "1e63633ad0ef4f1c1661a6d0ea02b7286cc7e74ec951d1c9822c38576feb73bc"],
                        ["8c00fa9b18ebf331eb961537a45a4266c7034f2f0d4e1d0716fb6eae20eae29e", "efa47267fea521a1a9dc343a3736c974c2fadafa81e36c54e7d2a4c66702414b"],
                        ["e7a26ce69dd4829f3e10cec0a9e98ed3143d084f308b92c0997fddfc60cb3e41", "2a758e300fa7984b471b006a1aafbb18d0a6b2c0420e83e20e8a9421cf2cfd51"],
                        ["b6459e0ee3662ec8d23540c223bcbdc571cbcb967d79424f3cf29eb3de6b80ef", "67c876d06f3e06de1dadf16e5661db3c4b3ae6d48e35b2ff30bf0b61a71ba45"],
                        ["d68a80c8280bb840793234aa118f06231d6f1fc67e73c5a5deda0f5b496943e8", "db8ba9fff4b586d00c4b1f9177b0e28b5b0e7b8f7845295a294c84266b133120"],
                        ["324aed7df65c804252dc0270907a30b09612aeb973449cea4095980fc28d3d5d", "648a365774b61f2ff130c0c35aec1f4f19213b0c7e332843967224af96ab7c84"],
                        ["4df9c14919cde61f6d51dfdbe5fee5dceec4143ba8d1ca888e8bd373fd054c96", "35ec51092d8728050974c23a1d85d4b5d506cdc288490192ebac06cad10d5d"],
                        ["9c3919a84a474870faed8a9c1cc66021523489054d7f0308cbfc99c8ac1f98cd", "ddb84f0f4a4ddd57584f044bf260e641905326f76c64c8e6be7e5e03d4fc599d"],
                        ["6057170b1dd12fdf8de05f281d8e06bb91e1493a8b91d4cc5a21382120a959e5", "9a1af0b26a6a4807add9a2daf71df262465152bc3ee24c65e899be932385a2a8"],
                        ["a576df8e23a08411421439a4518da31880cef0fba7d4df12b1a6973eecb94266", "40a6bf20e76640b2c92b97afe58cd82c432e10a7f514d9f3ee8be11ae1b28ec8"],
                        ["7778a78c28dec3e30a05fe9629de8c38bb30d1f5cf9a3a208f763889be58ad71", "34626d9ab5a5b22ff7098e12f2ff580087b38411ff24ac563b513fc1fd9f43ac"],
                        ["928955ee637a84463729fd30e7afd2ed5f96274e5ad7e5cb09eda9c06d903ac", "c25621003d3f42a827b78a13093a95eeac3d26efa8a8d83fc5180e935bcd091f"],
                        ["85d0fef3ec6db109399064f3a0e3b2855645b4a907ad354527aae75163d82751", "1f03648413a38c0be29d496e582cf5663e8751e96877331582c237a24eb1f962"],
                        ["ff2b0dce97eece97c1c9b6041798b85dfdfb6d8882da20308f5404824526087e", "493d13fef524ba188af4c4dc54d07936c7b7ed6fb90e2ceb2c951e01f0c29907"],
                        ["827fbbe4b1e880ea9ed2b2e6301b212b57f1ee148cd6dd28780e5e2cf856e241", "c60f9c923c727b0b71bef2c67d1d12687ff7a63186903166d605b68baec293ec"],
                        ["eaa649f21f51bdbae7be4ae34ce6e5217a58fdce7f47f9aa7f3b58fa2120e2b3", "be3279ed5bbbb03ac69a80f89879aa5a01a6b965f13f7e59d47a5305ba5ad93d"],
                        ["e4a42d43c5cf169d9391df6decf42ee541b6d8f0c9a137401e23632dda34d24f", "4d9f92e716d1c73526fc99ccfb8ad34ce886eedfa8d8e4f13a7f7131deba9414"],
                        ["1ec80fef360cbdd954160fadab352b6b92b53576a88fea4947173b9d4300bf19", "aeefe93756b5340d2f3a4958a7abbf5e0146e77f6295a07b671cdc1cc107cefd"],
                        ["146a778c04670c2f91b00af4680dfa8bce3490717d58ba889ddb5928366642be", "b318e0ec3354028add669827f9d4b2870aaa971d2f7e5ed1d0b297483d83efd0"],
                        ["fa50c0f61d22e5f07e3acebb1aa07b128d0012209a28b9776d76a8793180eef9", "6b84c6922397eba9b72cd2872281a68a5e683293a57a213b38cd8d7d3f4f2811"],
                        ["da1d61d0ca721a11b1a5bf6b7d88e8421a288ab5d5bba5220e53d32b5f067ec2", "8157f55a7c99306c79c0766161c91e2966a73899d279b48a655fba0f1ad836f1"],
                        ["a8e282ff0c9706907215ff98e8fd416615311de0446f1e062a73b0610d064e13", "7f97355b8db81c09abfb7f3c5b2515888b679a3e50dd6bd6cef7c73111f4cc0c"],
                        ["174a53b9c9a285872d39e56e6913cab15d59b1fa512508c022f382de8319497c", "ccc9dc37abfc9c1657b4155f2c47f9e6646b3a1d8cb9854383da13ac079afa73"],
                        ["959396981943785c3d3e57edf5018cdbe039e730e4918b3d884fdff09475b7ba", "2e7e552888c331dd8ba0386a4b9cd6849c653f64c8709385e9b8abf87524f2fd"],
                        ["d2a63a50ae401e56d645a1153b109a8fcca0a43d561fba2dbb51340c9d82b151", "e82d86fb6443fcb7565aee58b2948220a70f750af484ca52d4142174dcf89405"],
                        ["64587e2335471eb890ee7896d7cfdc866bacbdbd3839317b3436f9b45617e073", "d99fcdd5bf6902e2ae96dd6447c299a185b90a39133aeab358299e5e9faf6589"],
                        ["8481bde0e4e4d885b3a546d3e549de042f0aa6cea250e7fd358d6c86dd45e458", "38ee7b8cba5404dd84a25bf39cecb2ca900a79c42b262e556d64b1b59779057e"],
                        ["13464a57a78102aa62b6979ae817f4637ffcfed3c4b1ce30bcd6303f6caf666b", "69be159004614580ef7e433453ccb0ca48f300a81d0942e13f495a907f6ecc27"],
                        ["bc4a9df5b713fe2e9aef430bcc1dc97a0cd9ccede2f28588cada3a0d2d83f366", "d3a81ca6e785c06383937adf4b798caa6e8a9fbfa547b16d758d666581f33c1"],
                        ["8c28a97bf8298bc0d23d8c749452a32e694b65e30a9472a3954ab30fe5324caa", "40a30463a3305193378fedf31f7cc0eb7ae784f0451cb9459e71dc73cbef9482"],
                        ["8ea9666139527a8c1dd94ce4f071fd23c8b350c5a4bb33748c4ba111faccae0", "620efabbc8ee2782e24e7c0cfb95c5d735b783be9cf0f8e955af34a30e62b945"],
                        ["dd3625faef5ba06074669716bbd3788d89bdde815959968092f76cc4eb9a9787", "7a188fa3520e30d461da2501045731ca941461982883395937f68d00c644a573"],
                        ["f710d79d9eb962297e4f6232b40e8f7feb2bc63814614d692c12de752408221e", "ea98e67232d3b3295d3b535532115ccac8612c721851617526ae47a9c77bfc82"]
                    ]
                },
                naf: {
                    wnd: 7,
                    points: [
                        ["f9308a019258c31049344f85f89d5229b531c845836f99b08601f113bce036f9", "388f7b0f632de8140fe337e62a37f3566500a99934c2231b6cb9fd7584b8e672"],
                        ["2f8bde4d1a07209355b4a7250a5c5128e88b84bddc619ab7cba8d569b240efe4", "d8ac222636e5e3d6d4dba9dda6c9c426f788271bab0d6840dca87d3aa6ac62d6"],
                        ["5cbdf0646e5db4eaa398f365f2ea7a0e3d419b7e0330e39ce92bddedcac4f9bc", "6aebca40ba255960a3178d6d861a54dba813d0b813fde7b5a5082628087264da"],
                        ["acd484e2f0c7f65309ad178a9f559abde09796974c57e714c35f110dfc27ccbe", "cc338921b0a7d9fd64380971763b61e9add888a4375f8e0f05cc262ac64f9c37"],
                        ["774ae7f858a9411e5ef4246b70c65aac5649980be5c17891bbec17895da008cb", "d984a032eb6b5e190243dd56d7b7b365372db1e2dff9d6a8301d74c9c953c61b"],
                        ["f28773c2d975288bc7d1d205c3748651b075fbc6610e58cddeeddf8f19405aa8", "ab0902e8d880a89758212eb65cdaf473a1a06da521fa91f29b5cb52db03ed81"],
                        ["d7924d4f7d43ea965a465ae3095ff41131e5946f3c85f79e44adbcf8e27e080e", "581e2872a86c72a683842ec228cc6defea40af2bd896d3a5c504dc9ff6a26b58"],
                        ["defdea4cdb677750a420fee807eacf21eb9898ae79b9768766e4faa04a2d4a34", "4211ab0694635168e997b0ead2a93daeced1f4a04a95c0f6cfb199f69e56eb77"],
                        ["2b4ea0a797a443d293ef5cff444f4979f06acfebd7e86d277475656138385b6c", "85e89bc037945d93b343083b5a1c86131a01f60c50269763b570c854e5c09b7a"],
                        ["352bbf4a4cdd12564f93fa332ce333301d9ad40271f8107181340aef25be59d5", "321eb4075348f534d59c18259dda3e1f4a1b3b2e71b1039c67bd3d8bcf81998c"],
                        ["2fa2104d6b38d11b0230010559879124e42ab8dfeff5ff29dc9cdadd4ecacc3f", "2de1068295dd865b64569335bd5dd80181d70ecfc882648423ba76b532b7d67"],
                        ["9248279b09b4d68dab21a9b066edda83263c3d84e09572e269ca0cd7f5453714", "73016f7bf234aade5d1aa71bdea2b1ff3fc0de2a887912ffe54a32ce97cb3402"],
                        ["daed4f2be3a8bf278e70132fb0beb7522f570e144bf615c07e996d443dee8729", "a69dce4a7d6c98e8d4a1aca87ef8d7003f83c230f3afa726ab40e52290be1c55"],
                        ["c44d12c7065d812e8acf28d7cbb19f9011ecd9e9fdf281b0e6a3b5e87d22e7db", "2119a460ce326cdc76c45926c982fdac0e106e861edf61c5a039063f0e0e6482"],
                        ["6a245bf6dc698504c89a20cfded60853152b695336c28063b61c65cbd269e6b4", "e022cf42c2bd4a708b3f5126f16a24ad8b33ba48d0423b6efd5e6348100d8a82"],
                        ["1697ffa6fd9de627c077e3d2fe541084ce13300b0bec1146f95ae57f0d0bd6a5", "b9c398f186806f5d27561506e4557433a2cf15009e498ae7adee9d63d01b2396"],
                        ["605bdb019981718b986d0f07e834cb0d9deb8360ffb7f61df982345ef27a7479", "2972d2de4f8d20681a78d93ec96fe23c26bfae84fb14db43b01e1e9056b8c49"],
                        ["62d14dab4150bf497402fdc45a215e10dcb01c354959b10cfe31c7e9d87ff33d", "80fc06bd8cc5b01098088a1950eed0db01aa132967ab472235f5642483b25eaf"],
                        ["80c60ad0040f27dade5b4b06c408e56b2c50e9f56b9b8b425e555c2f86308b6f", "1c38303f1cc5c30f26e66bad7fe72f70a65eed4cbe7024eb1aa01f56430bd57a"],
                        ["7a9375ad6167ad54aa74c6348cc54d344cc5dc9487d847049d5eabb0fa03c8fb", "d0e3fa9eca8726909559e0d79269046bdc59ea10c70ce2b02d499ec224dc7f7"],
                        ["d528ecd9b696b54c907a9ed045447a79bb408ec39b68df504bb51f459bc3ffc9", "eecf41253136e5f99966f21881fd656ebc4345405c520dbc063465b521409933"],
                        ["49370a4b5f43412ea25f514e8ecdad05266115e4a7ecb1387231808f8b45963", "758f3f41afd6ed428b3081b0512fd62a54c3f3afbb5b6764b653052a12949c9a"],
                        ["77f230936ee88cbbd73df930d64702ef881d811e0e1498e2f1c13eb1fc345d74", "958ef42a7886b6400a08266e9ba1b37896c95330d97077cbbe8eb3c7671c60d6"],
                        ["f2dac991cc4ce4b9ea44887e5c7c0bce58c80074ab9d4dbaeb28531b7739f530", "e0dedc9b3b2f8dad4da1f32dec2531df9eb5fbeb0598e4fd1a117dba703a3c37"],
                        ["463b3d9f662621fb1b4be8fbbe2520125a216cdfc9dae3debcba4850c690d45b", "5ed430d78c296c3543114306dd8622d7c622e27c970a1de31cb377b01af7307e"],
                        ["f16f804244e46e2a09232d4aff3b59976b98fac14328a2d1a32496b49998f247", "cedabd9b82203f7e13d206fcdf4e33d92a6c53c26e5cce26d6579962c4e31df6"],
                        ["caf754272dc84563b0352b7a14311af55d245315ace27c65369e15f7151d41d1", "cb474660ef35f5f2a41b643fa5e460575f4fa9b7962232a5c32f908318a04476"],
                        ["2600ca4b282cb986f85d0f1709979d8b44a09c07cb86d7c124497bc86f082120", "4119b88753c15bd6a693b03fcddbb45d5ac6be74ab5f0ef44b0be9475a7e4b40"],
                        ["7635ca72d7e8432c338ec53cd12220bc01c48685e24f7dc8c602a7746998e435", "91b649609489d613d1d5e590f78e6d74ecfc061d57048bad9e76f302c5b9c61"],
                        ["754e3239f325570cdbbf4a87deee8a66b7f2b33479d468fbc1a50743bf56cc18", "673fb86e5bda30fb3cd0ed304ea49a023ee33d0197a695d0c5d98093c536683"],
                        ["e3e6bd1071a1e96aff57859c82d570f0330800661d1c952f9fe2694691d9b9e8", "59c9e0bba394e76f40c0aa58379a3cb6a5a2283993e90c4167002af4920e37f5"],
                        ["186b483d056a033826ae73d88f732985c4ccb1f32ba35f4b4cc47fdcf04aa6eb", "3b952d32c67cf77e2e17446e204180ab21fb8090895138b4a4a797f86e80888b"],
                        ["df9d70a6b9876ce544c98561f4be4f725442e6d2b737d9c91a8321724ce0963f", "55eb2dafd84d6ccd5f862b785dc39d4ab157222720ef9da217b8c45cf2ba2417"],
                        ["5edd5cc23c51e87a497ca815d5dce0f8ab52554f849ed8995de64c5f34ce7143", "efae9c8dbc14130661e8cec030c89ad0c13c66c0d17a2905cdc706ab7399a868"],
                        ["290798c2b6476830da12fe02287e9e777aa3fba1c355b17a722d362f84614fba", "e38da76dcd440621988d00bcf79af25d5b29c094db2a23146d003afd41943e7a"],
                        ["af3c423a95d9f5b3054754efa150ac39cd29552fe360257362dfdecef4053b45", "f98a3fd831eb2b749a93b0e6f35cfb40c8cd5aa667a15581bc2feded498fd9c6"],
                        ["766dbb24d134e745cccaa28c99bf274906bb66b26dcf98df8d2fed50d884249a", "744b1152eacbe5e38dcc887980da38b897584a65fa06cedd2c924f97cbac5996"],
                        ["59dbf46f8c94759ba21277c33784f41645f7b44f6c596a58ce92e666191abe3e", "c534ad44175fbc300f4ea6ce648309a042ce739a7919798cd85e216c4a307f6e"],
                        ["f13ada95103c4537305e691e74e9a4a8dd647e711a95e73cb62dc6018cfd87b8", "e13817b44ee14de663bf4bc808341f326949e21a6a75c2570778419bdaf5733d"],
                        ["7754b4fa0e8aced06d4167a2c59cca4cda1869c06ebadfb6488550015a88522c", "30e93e864e669d82224b967c3020b8fa8d1e4e350b6cbcc537a48b57841163a2"],
                        ["948dcadf5990e048aa3874d46abef9d701858f95de8041d2a6828c99e2262519", "e491a42537f6e597d5d28a3224b1bc25df9154efbd2ef1d2cbba2cae5347d57e"],
                        ["7962414450c76c1689c7b48f8202ec37fb224cf5ac0bfa1570328a8a3d7c77ab", "100b610ec4ffb4760d5c1fc133ef6f6b12507a051f04ac5760afa5b29db83437"],
                        ["3514087834964b54b15b160644d915485a16977225b8847bb0dd085137ec47ca", "ef0afbb2056205448e1652c48e8127fc6039e77c15c2378b7e7d15a0de293311"],
                        ["d3cc30ad6b483e4bc79ce2c9dd8bc54993e947eb8df787b442943d3f7b527eaf", "8b378a22d827278d89c5e9be8f9508ae3c2ad46290358630afb34db04eede0a4"],
                        ["1624d84780732860ce1c78fcbfefe08b2b29823db913f6493975ba0ff4847610", "68651cf9b6da903e0914448c6cd9d4ca896878f5282be4c8cc06e2a404078575"],
                        ["733ce80da955a8a26902c95633e62a985192474b5af207da6df7b4fd5fc61cd4", "f5435a2bd2badf7d485a4d8b8db9fcce3e1ef8e0201e4578c54673bc1dc5ea1d"],
                        ["15d9441254945064cf1a1c33bbd3b49f8966c5092171e699ef258dfab81c045c", "d56eb30b69463e7234f5137b73b84177434800bacebfc685fc37bbe9efe4070d"],
                        ["a1d0fcf2ec9de675b612136e5ce70d271c21417c9d2b8aaaac138599d0717940", "edd77f50bcb5a3cab2e90737309667f2641462a54070f3d519212d39c197a629"],
                        ["e22fbe15c0af8ccc5780c0735f84dbe9a790badee8245c06c7ca37331cb36980", "a855babad5cd60c88b430a69f53a1a7a38289154964799be43d06d77d31da06"],
                        ["311091dd9860e8e20ee13473c1155f5f69635e394704eaa74009452246cfa9b3", "66db656f87d1f04fffd1f04788c06830871ec5a64feee685bd80f0b1286d8374"],
                        ["34c1fd04d301be89b31c0442d3e6ac24883928b45a9340781867d4232ec2dbdf", "9414685e97b1b5954bd46f730174136d57f1ceeb487443dc5321857ba73abee"],
                        ["f219ea5d6b54701c1c14de5b557eb42a8d13f3abbcd08affcc2a5e6b049b8d63", "4cb95957e83d40b0f73af4544cccf6b1f4b08d3c07b27fb8d8c2962a400766d1"],
                        ["d7b8740f74a8fbaab1f683db8f45de26543a5490bca627087236912469a0b448", "fa77968128d9c92ee1010f337ad4717eff15db5ed3c049b3411e0315eaa4593b"],
                        ["32d31c222f8f6f0ef86f7c98d3a3335ead5bcd32abdd94289fe4d3091aa824bf", "5f3032f5892156e39ccd3d7915b9e1da2e6dac9e6f26e961118d14b8462e1661"],
                        ["7461f371914ab32671045a155d9831ea8793d77cd59592c4340f86cbc18347b5", "8ec0ba238b96bec0cbdddcae0aa442542eee1ff50c986ea6b39847b3cc092ff6"],
                        ["ee079adb1df1860074356a25aa38206a6d716b2c3e67453d287698bad7b2b2d6", "8dc2412aafe3be5c4c5f37e0ecc5f9f6a446989af04c4e25ebaac479ec1c8c1e"],
                        ["16ec93e447ec83f0467b18302ee620f7e65de331874c9dc72bfd8616ba9da6b5", "5e4631150e62fb40d0e8c2a7ca5804a39d58186a50e497139626778e25b0674d"],
                        ["eaa5f980c245f6f038978290afa70b6bd8855897f98b6aa485b96065d537bd99", "f65f5d3e292c2e0819a528391c994624d784869d7e6ea67fb18041024edc07dc"],
                        ["78c9407544ac132692ee1910a02439958ae04877151342ea96c4b6b35a49f51", "f3e0319169eb9b85d5404795539a5e68fa1fbd583c064d2462b675f194a3ddb4"],
                        ["494f4be219a1a77016dcd838431aea0001cdc8ae7a6fc688726578d9702857a5", "42242a969283a5f339ba7f075e36ba2af925ce30d767ed6e55f4b031880d562c"],
                        ["a598a8030da6d86c6bc7f2f5144ea549d28211ea58faa70ebf4c1e665c1fe9b5", "204b5d6f84822c307e4b4a7140737aec23fc63b65b35f86a10026dbd2d864e6b"],
                        ["c41916365abb2b5d09192f5f2dbeafec208f020f12570a184dbadc3e58595997", "4f14351d0087efa49d245b328984989d5caf9450f34bfc0ed16e96b58fa9913"],
                        ["841d6063a586fa475a724604da03bc5b92a2e0d2e0a36acfe4c73a5514742881", "73867f59c0659e81904f9a1c7543698e62562d6744c169ce7a36de01a8d6154"],
                        ["5e95bb399a6971d376026947f89bde2f282b33810928be4ded112ac4d70e20d5", "39f23f366809085beebfc71181313775a99c9aed7d8ba38b161384c746012865"],
                        ["36e4641a53948fd476c39f8a99fd974e5ec07564b5315d8bf99471bca0ef2f66", "d2424b1b1abe4eb8164227b085c9aa9456ea13493fd563e06fd51cf5694c78fc"],
                        ["336581ea7bfbbb290c191a2f507a41cf5643842170e914faeab27c2c579f726", "ead12168595fe1be99252129b6e56b3391f7ab1410cd1e0ef3dcdcabd2fda224"],
                        ["8ab89816dadfd6b6a1f2634fcf00ec8403781025ed6890c4849742706bd43ede", "6fdcef09f2f6d0a044e654aef624136f503d459c3e89845858a47a9129cdd24e"],
                        ["1e33f1a746c9c5778133344d9299fcaa20b0938e8acff2544bb40284b8c5fb94", "60660257dd11b3aa9c8ed618d24edff2306d320f1d03010e33a7d2057f3b3b6"],
                        ["85b7c1dcb3cec1b7ee7f30ded79dd20a0ed1f4cc18cbcfcfa410361fd8f08f31", "3d98a9cdd026dd43f39048f25a8847f4fcafad1895d7a633c6fed3c35e999511"],
                        ["29df9fbd8d9e46509275f4b125d6d45d7fbe9a3b878a7af872a2800661ac5f51", "b4c4fe99c775a606e2d8862179139ffda61dc861c019e55cd2876eb2a27d84b"],
                        ["a0b1cae06b0a847a3fea6e671aaf8adfdfe58ca2f768105c8082b2e449fce252", "ae434102edde0958ec4b19d917a6a28e6b72da1834aff0e650f049503a296cf2"],
                        ["4e8ceafb9b3e9a136dc7ff67e840295b499dfb3b2133e4ba113f2e4c0e121e5", "cf2174118c8b6d7a4b48f6d534ce5c79422c086a63460502b827ce62a326683c"],
                        ["d24a44e047e19b6f5afb81c7ca2f69080a5076689a010919f42725c2b789a33b", "6fb8d5591b466f8fc63db50f1c0f1c69013f996887b8244d2cdec417afea8fa3"],
                        ["ea01606a7a6c9cdd249fdfcfacb99584001edd28abbab77b5104e98e8e3b35d4", "322af4908c7312b0cfbfe369f7a7b3cdb7d4494bc2823700cfd652188a3ea98d"],
                        ["af8addbf2b661c8a6c6328655eb96651252007d8c5ea31be4ad196de8ce2131f", "6749e67c029b85f52a034eafd096836b2520818680e26ac8f3dfbcdb71749700"],
                        ["e3ae1974566ca06cc516d47e0fb165a674a3dabcfca15e722f0e3450f45889", "2aeabe7e4531510116217f07bf4d07300de97e4874f81f533420a72eeb0bd6a4"],
                        ["591ee355313d99721cf6993ffed1e3e301993ff3ed258802075ea8ced397e246", "b0ea558a113c30bea60fc4775460c7901ff0b053d25ca2bdeee98f1a4be5d196"],
                        ["11396d55fda54c49f19aa97318d8da61fa8584e47b084945077cf03255b52984", "998c74a8cd45ac01289d5833a7beb4744ff536b01b257be4c5767bea93ea57a4"],
                        ["3c5d2a1ba39c5a1790000738c9e0c40b8dcdfd5468754b6405540157e017aa7a", "b2284279995a34e2f9d4de7396fc18b80f9b8b9fdd270f6661f79ca4c81bd257"],
                        ["cc8704b8a60a0defa3a99a7299f2e9c3fbc395afb04ac078425ef8a1793cc030", "bdd46039feed17881d1e0862db347f8cf395b74fc4bcdc4e940b74e3ac1f1b13"],
                        ["c533e4f7ea8555aacd9777ac5cad29b97dd4defccc53ee7ea204119b2889b197", "6f0a256bc5efdf429a2fb6242f1a43a2d9b925bb4a4b3a26bb8e0f45eb596096"],
                        ["c14f8f2ccb27d6f109f6d08d03cc96a69ba8c34eec07bbcf566d48e33da6593", "c359d6923bb398f7fd4473e16fe1c28475b740dd098075e6c0e8649113dc3a38"],
                        ["a6cbc3046bc6a450bac24789fa17115a4c9739ed75f8f21ce441f72e0b90e6ef", "21ae7f4680e889bb130619e2c0f95a360ceb573c70603139862afd617fa9b9f"],
                        ["347d6d9a02c48927ebfb86c1359b1caf130a3c0267d11ce6344b39f99d43cc38", "60ea7f61a353524d1c987f6ecec92f086d565ab687870cb12689ff1e31c74448"],
                        ["da6545d2181db8d983f7dcb375ef5866d47c67b1bf31c8cf855ef7437b72656a", "49b96715ab6878a79e78f07ce5680c5d6673051b4935bd897fea824b77dc208a"],
                        ["c40747cc9d012cb1a13b8148309c6de7ec25d6945d657146b9d5994b8feb1111", "5ca560753be2a12fc6de6caf2cb489565db936156b9514e1bb5e83037e0fa2d4"],
                        ["4e42c8ec82c99798ccf3a610be870e78338c7f713348bd34c8203ef4037f3502", "7571d74ee5e0fb92a7a8b33a07783341a5492144cc54bcc40a94473693606437"],
                        ["3775ab7089bc6af823aba2e1af70b236d251cadb0c86743287522a1b3b0dedea", "be52d107bcfa09d8bcb9736a828cfa7fac8db17bf7a76a2c42ad961409018cf7"],
                        ["cee31cbf7e34ec379d94fb814d3d775ad954595d1314ba8846959e3e82f74e26", "8fd64a14c06b589c26b947ae2bcf6bfa0149ef0be14ed4d80f448a01c43b1c6d"],
                        ["b4f9eaea09b6917619f6ea6a4eb5464efddb58fd45b1ebefcdc1a01d08b47986", "39e5c9925b5a54b07433a4f18c61726f8bb131c012ca542eb24a8ac07200682a"],
                        ["d4263dfc3d2df923a0179a48966d30ce84e2515afc3dccc1b77907792ebcc60e", "62dfaf07a0f78feb30e30d6295853ce189e127760ad6cf7fae164e122a208d54"],
                        ["48457524820fa65a4f8d35eb6930857c0032acc0a4a2de422233eeda897612c4", "25a748ab367979d98733c38a1fa1c2e7dc6cc07db2d60a9ae7a76aaa49bd0f77"],
                        ["dfeeef1881101f2cb11644f3a2afdfc2045e19919152923f367a1767c11cceda", "ecfb7056cf1de042f9420bab396793c0c390bde74b4bbdff16a83ae09a9a7517"],
                        ["6d7ef6b17543f8373c573f44e1f389835d89bcbc6062ced36c82df83b8fae859", "cd450ec335438986dfefa10c57fea9bcc521a0959b2d80bbf74b190dca712d10"],
                        ["e75605d59102a5a2684500d3b991f2e3f3c88b93225547035af25af66e04541f", "f5c54754a8f71ee540b9b48728473e314f729ac5308b06938360990e2bfad125"],
                        ["eb98660f4c4dfaa06a2be453d5020bc99a0c2e60abe388457dd43fefb1ed620c", "6cb9a8876d9cb8520609af3add26cd20a0a7cd8a9411131ce85f44100099223e"],
                        ["13e87b027d8514d35939f2e6892b19922154596941888336dc3563e3b8dba942", "fef5a3c68059a6dec5d624114bf1e91aac2b9da568d6abeb2570d55646b8adf1"],
                        ["ee163026e9fd6fe017c38f06a5be6fc125424b371ce2708e7bf4491691e5764a", "1acb250f255dd61c43d94ccc670d0f58f49ae3fa15b96623e5430da0ad6c62b2"],
                        ["b268f5ef9ad51e4d78de3a750c2dc89b1e626d43505867999932e5db33af3d80", "5f310d4b3c99b9ebb19f77d41c1dee018cf0d34fd4191614003e945a1216e423"],
                        ["ff07f3118a9df035e9fad85eb6c7bfe42b02f01ca99ceea3bf7ffdba93c4750d", "438136d603e858a3a5c440c38eccbaddc1d2942114e2eddd4740d098ced1f0d8"],
                        ["8d8b9855c7c052a34146fd20ffb658bea4b9f69e0d825ebec16e8c3ce2b526a1", "cdb559eedc2d79f926baf44fb84ea4d44bcf50fee51d7ceb30e2e7f463036758"],
                        ["52db0b5384dfbf05bfa9d472d7ae26dfe4b851ceca91b1eba54263180da32b63", "c3b997d050ee5d423ebaf66a6db9f57b3180c902875679de924b69d84a7b375"],
                        ["e62f9490d3d51da6395efd24e80919cc7d0f29c3f3fa48c6fff543becbd43352", "6d89ad7ba4876b0b22c2ca280c682862f342c8591f1daf5170e07bfd9ccafa7d"],
                        ["7f30ea2476b399b4957509c88f77d0191afa2ff5cb7b14fd6d8e7d65aaab1193", "ca5ef7d4b231c94c3b15389a5f6311e9daff7bb67b103e9880ef4bff637acaec"],
                        ["5098ff1e1d9f14fb46a210fada6c903fef0fb7b4a1dd1d9ac60a0361800b7a00", "9731141d81fc8f8084d37c6e7542006b3ee1b40d60dfe5362a5b132fd17ddc0"],
                        ["32b78c7de9ee512a72895be6b9cbefa6e2f3c4ccce445c96b9f2c81e2778ad58", "ee1849f513df71e32efc3896ee28260c73bb80547ae2275ba497237794c8753c"],
                        ["e2cb74fddc8e9fbcd076eef2a7c72b0ce37d50f08269dfc074b581550547a4f7", "d3aa2ed71c9dd2247a62df062736eb0baddea9e36122d2be8641abcb005cc4a4"],
                        ["8438447566d4d7bedadc299496ab357426009a35f235cb141be0d99cd10ae3a8", "c4e1020916980a4da5d01ac5e6ad330734ef0d7906631c4f2390426b2edd791f"],
                        ["4162d488b89402039b584c6fc6c308870587d9c46f660b878ab65c82c711d67e", "67163e903236289f776f22c25fb8a3afc1732f2b84b4e95dbda47ae5a0852649"],
                        ["3fad3fa84caf0f34f0f89bfd2dcf54fc175d767aec3e50684f3ba4a4bf5f683d", "cd1bc7cb6cc407bb2f0ca647c718a730cf71872e7d0d2a53fa20efcdfe61826"],
                        ["674f2600a3007a00568c1a7ce05d0816c1fb84bf1370798f1c69532faeb1a86b", "299d21f9413f33b3edf43b257004580b70db57da0b182259e09eecc69e0d38a5"],
                        ["d32f4da54ade74abb81b815ad1fb3b263d82d6c692714bcff87d29bd5ee9f08f", "f9429e738b8e53b968e99016c059707782e14f4535359d582fc416910b3eea87"],
                        ["30e4e670435385556e593657135845d36fbb6931f72b08cb1ed954f1e3ce3ff6", "462f9bce619898638499350113bbc9b10a878d35da70740dc695a559eb88db7b"],
                        ["be2062003c51cc3004682904330e4dee7f3dcd10b01e580bf1971b04d4cad297", "62188bc49d61e5428573d48a74e1c655b1c61090905682a0d5558ed72dccb9bc"],
                        ["93144423ace3451ed29e0fb9ac2af211cb6e84a601df5993c419859fff5df04a", "7c10dfb164c3425f5c71a3f9d7992038f1065224f72bb9d1d902a6d13037b47c"],
                        ["b015f8044f5fcbdcf21ca26d6c34fb8197829205c7b7d2a7cb66418c157b112c", "ab8c1e086d04e813744a655b2df8d5f83b3cdc6faa3088c1d3aea1454e3a1d5f"],
                        ["d5e9e1da649d97d89e4868117a465a3a4f8a18de57a140d36b3f2af341a21b52", "4cb04437f391ed73111a13cc1d4dd0db1693465c2240480d8955e8592f27447a"],
                        ["d3ae41047dd7ca065dbf8ed77b992439983005cd72e16d6f996a5316d36966bb", "bd1aeb21ad22ebb22a10f0303417c6d964f8cdd7df0aca614b10dc14d125ac46"],
                        ["463e2763d885f958fc66cdd22800f0a487197d0a82e377b49f80af87c897b065", "bfefacdb0e5d0fd7df3a311a94de062b26b80c61fbc97508b79992671ef7ca7f"],
                        ["7985fdfd127c0567c6f53ec1bb63ec3158e597c40bfe747c83cddfc910641917", "603c12daf3d9862ef2b25fe1de289aed24ed291e0ec6708703a5bd567f32ed03"],
                        ["74a1ad6b5f76e39db2dd249410eac7f99e74c59cb83d2d0ed5ff1543da7703e9", "cc6157ef18c9c63cd6193d83631bbea0093e0968942e8c33d5737fd790e0db08"],
                        ["30682a50703375f602d416664ba19b7fc9bab42c72747463a71d0896b22f6da3", "553e04f6b018b4fa6c8f39e7f311d3176290d0e0f19ca73f17714d9977a22ff8"],
                        ["9e2158f0d7c0d5f26c3791efefa79597654e7a2b2464f52b1ee6c1347769ef57", "712fcdd1b9053f09003a3481fa7762e9ffd7c8ef35a38509e2fbf2629008373"],
                        ["176e26989a43c9cfeba4029c202538c28172e566e3c4fce7322857f3be327d66", "ed8cc9d04b29eb877d270b4878dc43c19aefd31f4eee09ee7b47834c1fa4b1c3"],
                        ["75d46efea3771e6e68abb89a13ad747ecf1892393dfc4f1b7004788c50374da8", "9852390a99507679fd0b86fd2b39a868d7efc22151346e1a3ca4726586a6bed8"],
                        ["809a20c67d64900ffb698c4c825f6d5f2310fb0451c869345b7319f645605721", "9e994980d9917e22b76b061927fa04143d096ccc54963e6a5ebfa5f3f8e286c1"],
                        ["1b38903a43f7f114ed4500b4eac7083fdefece1cf29c63528d563446f972c180", "4036edc931a60ae889353f77fd53de4a2708b26b6f5da72ad3394119daf408f9"]
                    ]
                }
            }
        },
        10369: function(e, t, r) {
            "use strict";
            var n = r(5755),
                i = r(5710),
                f = i.utils.assert,
                d = r(10370),
                s = r(10371);

            function c(e) {
                if (!(this instanceof c)) return new c(e);
                "string" == typeof e && (f(i.curves.hasOwnProperty(e), "Unknown curve " + e), e = i.curves[e]), e instanceof i.curves.PresetCurve && (e = {
                    curve: e
                }), this.curve = e.curve.curve, this.n = this.curve.n, this.nh = this.n.shrn(1), this.g = this.curve.g, this.g = e.curve.g, this.g.precompute(e.curve.n.bitLength() + 1), this.hash = e.hash || e.curve.hash
            }
            e.exports = c, c.prototype.keyPair = function(e) {
                return new d(this, e)
            }, c.prototype.keyFromPrivate = function(e, t) {
                return d.fromPrivate(this, e, t)
            }, c.prototype.keyFromPublic = function(e, t) {
                return d.fromPublic(this, e, t)
            }, c.prototype.genKeyPair = function(e) {
                e || (e = {});
                for (var t = new i.hmacDRBG({
                        hash: this.hash,
                        pers: e.pers,
                        entropy: e.entropy || i.rand(this.hash.hmacStrength),
                        nonce: this.n.toArray()
                    }), r = this.n.byteLength(), f = this.n.sub(new n(2));;) {
                    var d = new n(t.generate(r));
                    if (!(d.cmp(f) > 0)) return d.iaddn(1), this.keyFromPrivate(d)
                }
            }, c.prototype._truncateToN = function(e, t) {
                var r = 8 * e.byteLength() - this.n.bitLength();
                return r > 0 && (e = e.shrn(r)), !t && e.cmp(this.n) >= 0 ? e.sub(this.n) : e
            }, c.prototype.sign = function(e, t, r, f) {
                "object" == typeof r && (f = r, r = null), f || (f = {}), t = this.keyFromPrivate(t, r), e = this._truncateToN(new n(e, 16));
                for (var d = this.n.byteLength(), c = t.getPrivate().toArray(), a = c.length; a < 21; a++) c.unshift(0);
                var o = e.toArray();
                for (a = o.length; a < d; a++) o.unshift(0);
                for (var h = new i.hmacDRBG({
                        hash: this.hash,
                        entropy: c,
                        nonce: o
                    }), u = this.n.sub(new n(1));;) {
                    var b = new n(h.generate(this.n.byteLength()));
                    if (!((b = this._truncateToN(b, !0)).cmpn(1) <= 0 || b.cmp(u) >= 0)) {
                        var p = this.g.mul(b);
                        if (!p.isInfinity()) {
                            var l = p.getX().mod(this.n);
                            if (0 !== l.cmpn(0)) {
                                var g = b.invm(this.n).mul(l.mul(t.getPrivate()).iadd(e)).mod(this.n);
                                if (0 !== g.cmpn(0)) return f.canonical && g.cmp(this.nh) > 0 && (g = this.n.sub(g)), new s({
                                    r: l,
                                    s: g
                                })
                            }
                        }
                    }
                }
            }, c.prototype.verify = function(e, t, r, i) {
                e = this._truncateToN(new n(e, 16)), r = this.keyFromPublic(r, i);
                var f = (t = new s(t, "hex")).r,
                    d = t.s;
                if (f.cmpn(1) < 0 || f.cmp(this.n) >= 0) return !1;
                if (d.cmpn(1) < 0 || d.cmp(this.n) >= 0) return !1;
                var c = d.invm(this.n),
                    a = c.mul(e).mod(this.n),
                    o = c.mul(f).mod(this.n),
                    h = this.g.mulAdd(a, r.getPublic(), o);
                return !h.isInfinity() && 0 === h.getX().mod(this.n).cmp(f)
            }
        },
        10370: function(e, t, r) {
            "use strict";
            var n = r(5755),
                i = r(5710).utils;

            function f(e, t) {
                this.ec = e, this.priv = null, this.pub = null, t.priv && this._importPrivate(t.priv, t.privEnc), t.pub && this._importPublic(t.pub, t.pubEnc)
            }
            e.exports = f, f.fromPublic = function(e, t, r) {
                return t instanceof f ? t : new f(e, {
                    pub: t,
                    pubEnc: r
                })
            }, f.fromPrivate = function(e, t, r) {
                return t instanceof f ? t : new f(e, {
                    priv: t,
                    privEnc: r
                })
            }, f.prototype.validate = function() {
                var e = this.getPublic();
                return e.isInfinity() ? {
                    result: !1,
                    reason: "Invalid public key"
                } : e.validate() ? e.mul(this.ec.curve.n).isInfinity() ? {
                    result: !0,
                    reason: null
                } : {
                    result: !1,
                    reason: "Public key * N != O"
                } : {
                    result: !1,
                    reason: "Public key is not a point"
                }
            }, f.prototype.getPublic = function(e, t) {
                if (this.pub || (this.pub = this.ec.g.mul(this.priv)), "string" == typeof e && (t = e, e = null), !t) return this.pub;
                for (var r = this.ec.curve.p.byteLength(), n = this.pub.getX().toArray(), f = n.length; f < r; f++) n.unshift(0);
                if ("mont" !== this.ec.curve.type)
                    if (e) s = [this.pub.getY().isEven() ? 2 : 3].concat(n);
                    else {
                        var d = this.pub.getY().toArray();
                        for (f = d.length; f < r; f++) d.unshift(0);
                        var s = [4].concat(n, d)
                    }
                else s = n;
                return i.encode(s, t)
            }, f.prototype.getPrivate = function(e) {
                return "hex" === e ? this.priv.toString(16, 2) : this.priv
            }, f.prototype._importPrivate = function(e, t) {
                this.priv = new n(e, t || 16), this.priv = this.priv.mod(this.ec.curve.n)
            }, f.prototype._importPublic = function(e, t) {
                if (!e.x && !e.y) return e = i.toArray(e, t), "mont" !== this.ec.curve.type ? this._importPublicShort(e) : this._importPublicMont(e);
                this.pub = this.ec.curve.point(e.x, e.y)
            }, f.prototype._importPublicShort = function(e) {
                var t = this.ec.curve.p.byteLength();
                4 === e[0] && e.length - 1 == 2 * t ? this.pub = this.ec.curve.point(e.slice(1, 1 + t), e.slice(1 + t, 1 + 2 * t)) : 2 !== e[0] && 3 !== e[0] || e.length - 1 !== t || (this.pub = this.ec.curve.pointFromX(3 === e[0], e.slice(1, 1 + t)))
            }, f.prototype._importPublicMont = function(e) {
                this.pub = this.ec.curve.point(e, 1)
            }, f.prototype.derive = function(e) {
                return e.mul(this.priv).getX()
            }, f.prototype.sign = function(e) {
                return this.ec.sign(e, this)
            }, f.prototype.verify = function(e, t) {
                return this.ec.verify(e, t, this)
            }, f.prototype.inspect = function() {
                return "<Key priv: " + (this.priv && this.priv.toString(16, 2)) + " pub: " + (this.pub && this.pub.inspect()) + " >"
            }
        },
        10371: function(e, t, r) {
            "use strict";
            var n = r(5755),
                i = r(5710).utils,
                f = i.assert;

            function d(e, t) {
                if (e instanceof d) return e;
                this._importDER(e, t) || (f(e.r && e.s, "Signature without r or s"), this.r = new n(e.r, 16), this.s = new n(e.s, 16))
            }
            e.exports = d, d.prototype._importDER = function(e, t) {
                if ((e = i.toArray(e, t)).length < 6 || 48 !== e[0] || 2 !== e[2]) return !1;
                if (1 + e[1] > e.length) return !1;
                var r = e[3];
                if (r >= 128) return !1;
                if (4 + r + 2 >= e.length) return !1;
                if (2 !== e[4 + r]) return !1;
                var f = e[5 + r];
                return !(f >= 128) && (!(4 + r + 2 + f > e.length) && (this.r = new n(e.slice(4, 4 + r)), this.s = new n(e.slice(4 + r + 2, 4 + r + 2 + f)), !0))
            }, d.prototype.toDER = function(e) {
                var t = this.r.toArray(),
                    r = this.s.toArray();
                128 & t[0] && (t = [0].concat(t)), 128 & r[0] && (r = [0].concat(r));
                var n = [48, t.length + r.length + 4, 2, t.length];
                return n = n.concat(t, [2, r.length], r), i.encode(n, e)
            }
        },
        10372: function(e, t, r) {
            var n = r(12).Buffer,
                i = r(10373),
                f = r(10374),
                d = r(10375),
                s = {
                    sha1: i,
                    sha256: f,
                    md5: r(10376),
                    blake256: r(10377),
                    rmd160: r(10378)
                },
                c = new n(64);

            function a(e, t) {
                var r = s[e = e || "sha1"],
                    i = [];
                return r || o("algorithm:", e, "is not yet supported"), {
                    update: function(e) {
                        return n.isBuffer(e) || (e = new n(e)), i.push(e), e.length, this
                    },
                    digest: function(e) {
                        var f = n.concat(i),
                            d = t ? function(e, t, r) {
                                n.isBuffer(t) || (t = new n(t)), n.isBuffer(r) || (r = new n(r)), t.length > 64 ? t = e(t) : t.length < 64 && (t = n.concat([t, c], 64));
                                for (var i = new n(64), f = new n(64), d = 0; d < 64; d++) i[d] = 54 ^ t[d], f[d] = 92 ^ t[d];
                                var s = e(n.concat([i, r]));
                                return e(n.concat([f, s]))
                            }(r, t, f) : r(f);
                        return i = null, e ? d.toString(e) : d
                    }
                }
            }

            function o() {
                var e = [].slice.call(arguments).join(" ");
                throw new Error([e, "we accept pull requests", "http://github.com/dominictarr/crypto-browserify"].join("\n"))
            }
            c.fill(0), t.createHash = function(e) {
                    return a(e)
                }, t.createHmac = function(e, t) {
                    return a(e, t)
                }, t.randomBytes = function(e, t) {
                    if (!t || !t.call) return new n(d(e));
                    try {
                        t.call(this, void 0, new n(d(e)))
                    } catch (e) {
                        t(e)
                    }
                },
                function(e, t) {
                    for (var r in e) t(e[r], r)
                }(["createCredentials", "createCipher", "createCipheriv", "createDecipher", "createDecipheriv", "createSign", "createVerify", "createDiffieHellman", "pbkdf2"], (function(e) {
                    t[e] = function() {
                        o("sorry,", e, "is not implemented yet")
                    }
                }))
        },
        10373: function(e, t, r) {
            var n = r(6097);

            function i(e, t) {
                e[t >> 5] |= 128 << 24 - t % 32, e[15 + (t + 64 >> 9 << 4)] = t;
                for (var r = Array(80), n = 1732584193, i = -271733879, a = -1732584194, o = 271733878, h = -1009589776, u = 0; u < e.length; u += 16) {
                    for (var b = n, p = i, l = a, g = o, m = h, v = 0; v < 80; v++) {
                        r[v] = v < 16 ? e[u + v] : c(r[v - 3] ^ r[v - 8] ^ r[v - 14] ^ r[v - 16], 1);
                        var y = s(s(c(n, 5), f(v, i, a, o)), s(s(h, r[v]), d(v)));
                        h = o, o = a, a = c(i, 30), i = n, n = y
                    }
                    n = s(n, b), i = s(i, p), a = s(a, l), o = s(o, g), h = s(h, m)
                }
                return Array(n, i, a, o, h)
            }

            function f(e, t, r, n) {
                return e < 20 ? t & r | ~t & n : e < 40 ? t ^ r ^ n : e < 60 ? t & r | t & n | r & n : t ^ r ^ n
            }

            function d(e) {
                return e < 20 ? 1518500249 : e < 40 ? 1859775393 : e < 60 ? -1894007588 : -899497514
            }

            function s(e, t) {
                var r = (65535 & e) + (65535 & t);
                return (e >> 16) + (t >> 16) + (r >> 16) << 16 | 65535 & r
            }

            function c(e, t) {
                return e << t | e >>> 32 - t
            }
            e.exports = function(e) {
                return n.hash(e, i, 20, !0)
            }
        },
        10374: function(e, t, r) {
            var n = r(6097),
                i = function(e, t) {
                    var r = (65535 & e) + (65535 & t);
                    return (e >> 16) + (t >> 16) + (r >> 16) << 16 | 65535 & r
                },
                f = function(e, t) {
                    return e >>> t | e << 32 - t
                },
                d = function(e, t) {
                    return e >>> t
                },
                s = function(e, t, r) {
                    return e & t ^ ~e & r
                },
                c = function(e, t, r) {
                    return e & t ^ e & r ^ t & r
                },
                a = function(e) {
                    return f(e, 2) ^ f(e, 13) ^ f(e, 22)
                },
                o = function(e) {
                    return f(e, 6) ^ f(e, 11) ^ f(e, 25)
                },
                h = function(e) {
                    return f(e, 7) ^ f(e, 18) ^ d(e, 3)
                },
                u = function(e, t) {
                    var r, n, u, b, p, l, g, m, v, y, w, _ = new Array(1116352408, 1899447441, 3049323471, 3921009573, 961987163, 1508970993, 2453635748, 2870763221, 3624381080, 310598401, 607225278, 1426881987, 1925078388, 2162078206, 2614888103, 3248222580, 3835390401, 4022224774, 264347078, 604807628, 770255983, 1249150122, 1555081692, 1996064986, 2554220882, 2821834349, 2952996808, 3210313671, 3336571891, 3584528711, 113926993, 338241895, 666307205, 773529912, 1294757372, 1396182291, 1695183700, 1986661051, 2177026350, 2456956037, 2730485921, 2820302411, 3259730800, 3345764771, 3516065817, 3600352804, 4094571909, 275423344, 430227734, 506948616, 659060556, 883997877, 958139571, 1322822218, 1537002063, 1747873779, 1955562222, 2024104815, 2227730452, 2361852424, 2428436474, 2756734187, 3204031479, 3329325298),
                        S = new Array(1779033703, 3144134277, 1013904242, 2773480762, 1359893119, 2600822924, 528734635, 1541459225),
                        A = new Array(64);
                    e[t >> 5] |= 128 << 24 - t % 32, e[15 + (t + 64 >> 9 << 4)] = t;
                    for (var x = 0; x < e.length; x += 16) {
                        r = S[0], n = S[1], u = S[2], b = S[3], p = S[4], l = S[5], g = S[6], m = S[7];
                        for (var M = 0; M < 64; M++) A[M] = M < 16 ? e[M + x] : i(i(i((w = A[M - 2], f(w, 17) ^ f(w, 19) ^ d(w, 10)), A[M - 7]), h(A[M - 15])), A[M - 16]), v = i(i(i(i(m, o(p)), s(p, l, g)), _[M]), A[M]), y = i(a(r), c(r, n, u)), m = g, g = l, l = p, p = i(b, v), b = u, u = n, n = r, r = i(v, y);
                        S[0] = i(r, S[0]), S[1] = i(n, S[1]), S[2] = i(u, S[2]), S[3] = i(b, S[3]), S[4] = i(p, S[4]), S[5] = i(l, S[5]), S[6] = i(g, S[6]), S[7] = i(m, S[7])
                    }
                    return S
                };
            e.exports = function(e) {
                return n.hash(e, u, 32, !0)
            }
        },
        10375: function(e, t) {
            ! function() {
                var t, r;
                t = function(e) {
                    for (var t, r = new Array(e), n = 0; n < e; n++) 0 == (3 & n) && (t = 4294967296 * Math.random()), r[n] = t >>> ((3 & n) << 3) & 255;
                    return r
                }, this.crypto && crypto.getRandomValues && (r = function(e) {
                    var t = new Uint8Array(e);
                    return crypto.getRandomValues(t), t
                }), e.exports = r || t
            }()
        },
        10376: function(e, t, r) {
            var n = r(6097);

            function i(e, t) {
                e[t >> 5] |= 128 << t % 32, e[14 + (t + 64 >>> 9 << 4)] = t;
                for (var r = 1732584193, n = -271733879, i = -1732584194, f = 271733878, h = 0; h < e.length; h += 16) {
                    var u = r,
                        b = n,
                        p = i,
                        l = f;
                    r = d(r, n, i, f, e[h + 0], 7, -680876936), f = d(f, r, n, i, e[h + 1], 12, -389564586), i = d(i, f, r, n, e[h + 2], 17, 606105819), n = d(n, i, f, r, e[h + 3], 22, -1044525330), r = d(r, n, i, f, e[h + 4], 7, -176418897), f = d(f, r, n, i, e[h + 5], 12, 1200080426), i = d(i, f, r, n, e[h + 6], 17, -1473231341), n = d(n, i, f, r, e[h + 7], 22, -45705983), r = d(r, n, i, f, e[h + 8], 7, 1770035416), f = d(f, r, n, i, e[h + 9], 12, -1958414417), i = d(i, f, r, n, e[h + 10], 17, -42063), n = d(n, i, f, r, e[h + 11], 22, -1990404162), r = d(r, n, i, f, e[h + 12], 7, 1804603682), f = d(f, r, n, i, e[h + 13], 12, -40341101), i = d(i, f, r, n, e[h + 14], 17, -1502002290), r = s(r, n = d(n, i, f, r, e[h + 15], 22, 1236535329), i, f, e[h + 1], 5, -165796510), f = s(f, r, n, i, e[h + 6], 9, -1069501632), i = s(i, f, r, n, e[h + 11], 14, 643717713), n = s(n, i, f, r, e[h + 0], 20, -373897302), r = s(r, n, i, f, e[h + 5], 5, -701558691), f = s(f, r, n, i, e[h + 10], 9, 38016083), i = s(i, f, r, n, e[h + 15], 14, -660478335), n = s(n, i, f, r, e[h + 4], 20, -405537848), r = s(r, n, i, f, e[h + 9], 5, 568446438), f = s(f, r, n, i, e[h + 14], 9, -1019803690), i = s(i, f, r, n, e[h + 3], 14, -187363961), n = s(n, i, f, r, e[h + 8], 20, 1163531501), r = s(r, n, i, f, e[h + 13], 5, -1444681467), f = s(f, r, n, i, e[h + 2], 9, -51403784), i = s(i, f, r, n, e[h + 7], 14, 1735328473), r = c(r, n = s(n, i, f, r, e[h + 12], 20, -1926607734), i, f, e[h + 5], 4, -378558), f = c(f, r, n, i, e[h + 8], 11, -2022574463), i = c(i, f, r, n, e[h + 11], 16, 1839030562), n = c(n, i, f, r, e[h + 14], 23, -35309556), r = c(r, n, i, f, e[h + 1], 4, -1530992060), f = c(f, r, n, i, e[h + 4], 11, 1272893353), i = c(i, f, r, n, e[h + 7], 16, -155497632), n = c(n, i, f, r, e[h + 10], 23, -1094730640), r = c(r, n, i, f, e[h + 13], 4, 681279174), f = c(f, r, n, i, e[h + 0], 11, -358537222), i = c(i, f, r, n, e[h + 3], 16, -722521979), n = c(n, i, f, r, e[h + 6], 23, 76029189), r = c(r, n, i, f, e[h + 9], 4, -640364487), f = c(f, r, n, i, e[h + 12], 11, -421815835), i = c(i, f, r, n, e[h + 15], 16, 530742520), r = a(r, n = c(n, i, f, r, e[h + 2], 23, -995338651), i, f, e[h + 0], 6, -198630844), f = a(f, r, n, i, e[h + 7], 10, 1126891415), i = a(i, f, r, n, e[h + 14], 15, -1416354905), n = a(n, i, f, r, e[h + 5], 21, -57434055), r = a(r, n, i, f, e[h + 12], 6, 1700485571), f = a(f, r, n, i, e[h + 3], 10, -1894986606), i = a(i, f, r, n, e[h + 10], 15, -1051523), n = a(n, i, f, r, e[h + 1], 21, -2054922799), r = a(r, n, i, f, e[h + 8], 6, 1873313359), f = a(f, r, n, i, e[h + 15], 10, -30611744), i = a(i, f, r, n, e[h + 6], 15, -1560198380), n = a(n, i, f, r, e[h + 13], 21, 1309151649), r = a(r, n, i, f, e[h + 4], 6, -145523070), f = a(f, r, n, i, e[h + 11], 10, -1120210379), i = a(i, f, r, n, e[h + 2], 15, 718787259), n = a(n, i, f, r, e[h + 9], 21, -343485551), r = o(r, u), n = o(n, b), i = o(i, p), f = o(f, l)
                }
                return Array(r, n, i, f)
            }

            function f(e, t, r, n, i, f) {
                return o((d = o(o(t, e), o(n, f))) << (s = i) | d >>> 32 - s, r);
                var d, s
            }

            function d(e, t, r, n, i, d, s) {
                return f(t & r | ~t & n, e, t, i, d, s)
            }

            function s(e, t, r, n, i, d, s) {
                return f(t & n | r & ~n, e, t, i, d, s)
            }

            function c(e, t, r, n, i, d, s) {
                return f(t ^ r ^ n, e, t, i, d, s)
            }

            function a(e, t, r, n, i, d, s) {
                return f(r ^ (t | ~n), e, t, i, d, s)
            }

            function o(e, t) {
                var r = (65535 & e) + (65535 & t);
                return (e >> 16) + (t >> 16) + (r >> 16) << 16 | 65535 & r
            }
            e.exports = function(e) {
                return n.hash(e, i, 16)
            }
        },
        10377: function(e, t, r) {
            var n = r(6097),
                i = function() {
                    var e = {},
                        t = e.lib = {},
                        r = t.Base = function() {
                            function e() {}
                            return {
                                extend: function(t) {
                                    e.prototype = this;
                                    var r = new e;
                                    return t && r.mixIn(t), r.$super = this, r
                                },
                                mixIn: function(e) {
                                    for (var t in e) e.hasOwnProperty(t) && (this[t] = e[t]);
                                    e.hasOwnProperty("toString") && (this.toString = e.toString)
                                },
                                create: function() {
                                    var e = this.extend();
                                    return e.init.apply(e, arguments), e
                                },
                                init: function() {},
                                isA: function(e) {
                                    for (var t = this; t;) {
                                        if (t == e) return !0;
                                        t = t.$super
                                    }
                                    return !1
                                },
                                clone: function() {
                                    return this.$super.extend(this)
                                }
                            }
                        }(),
                        n = t.WordArray = r.extend({
                            init: function(e, t) {
                                e = this.words = e || [], this.sigBytes = void 0 !== t ? t : 4 * e.length
                            },
                            toString: function(e) {
                                return (e || this.encoder).toString(this)
                            },
                            concat: function(e) {
                                var t = this.words,
                                    r = e.words,
                                    n = this.sigBytes,
                                    i = e.sigBytes;
                                this.clamp();
                                for (var f = 0; f < i; f++) {
                                    var d = r[f >>> 2] >>> 24 - f % 4 * 8 & 255;
                                    t[n >>> 2] |= d << 24 - n % 4 * 8, n++
                                }
                                return this.sigBytes = n, this
                            },
                            clamp: function() {
                                var e = this.words,
                                    t = this.sigBytes;
                                e[t >>> 2] &= 4294967295 << 32 - t % 4 * 8, e.length = Math.ceil(t / 4)
                            },
                            clone: function() {
                                var e = n.$super.clone.call(this);
                                return e.words = this.words.slice(0), e
                            },
                            random: function(e) {
                                for (var t = [], r = 0; r < e; r += 4) t.push(Math.floor(4294967296 * Math.random()));
                                return this.create(t, e)
                            }
                        }),
                        i = (t.Hash = r.extend({
                            _cfg: r.extend(),
                            init: function(e) {
                                this._cfg = this._cfg.extend(e), this.reset()
                            },
                            reset: function() {
                                var e = this._hash = n.create();
                                this._message = n.create(), this._length = 0, this._doReset(), e.sigBytes = 4 * e.words.length
                            },
                            update: function(e) {
                                return "string" == typeof e && (e = s.fromString(e)), this._message.concat(e), this._length += e.sigBytes, this._hashBlocks(!1), this
                            },
                            _hashBlocks: function(e) {
                                var t = this._message,
                                    r = t.sigBytes,
                                    n = this._blockSize,
                                    i = Math.floor(r / (4 * n));
                                if (i)
                                    for (var f = i * n, d = 0; d < f; d += n) {
                                        var s = !1;
                                        t.words.length == n && e && (s = !0), this._doHashBlock(0, s), t.words.splice(0, n), t.sigBytes = r - 4 * f
                                    }
                            },
                            compute: function(e) {
                                e && this.update(e), this._doCompute();
                                var t = this._hash;
                                return this.reset(), t
                            },
                            _blockSize: 16,
                            _createHelper: function(e) {
                                return function(t, r) {
                                    return e.create(r).compute(t)
                                }
                            },
                            _createHmacHelper: function(e) {
                                return function(t, r) {
                                    return c.HMAC.create(e, r).compute(t)
                                }
                            }
                        }), e.enc = {}),
                        f = i.Hex = {
                            toString: function(e) {
                                for (var t = e.words, r = e.sigBytes, n = [], i = 0; i < r; i++) {
                                    var f = t[i >>> 2] >>> 24 - i % 4 * 8 & 255;
                                    n.push((f >>> 4).toString(16)), n.push((15 & f).toString(16))
                                }
                                return n.join("")
                            },
                            fromString: function(e) {
                                for (var t = e.length, r = [], i = 0; i < t; i += 2) r[i >>> 3] |= parseInt(e.substr(i, 2), 16) << 24 - i % 8 * 4;
                                return n.create(r, t / 2)
                            }
                        },
                        d = i.Latin1 = {
                            toString: function(e) {
                                for (var t = e.words, r = e.sigBytes, n = [], i = 0; i < r; i++) {
                                    var f = t[i >>> 2] >>> 24 - i % 4 * 8 & 255;
                                    n.push(String.fromCharCode(f))
                                }
                                return n.join("")
                            },
                            fromString: function(e) {
                                for (var t = e.length, r = [], i = 0; i < t; i++) r[i >>> 2] |= e.charCodeAt(i) << 24 - i % 4 * 8;
                                return n.create(r, t)
                            }
                        },
                        s = i.Utf8 = {
                            toString: function(e) {
                                return decodeURIComponent(escape(d.toString(e)))
                            },
                            fromString: function(e) {
                                return d.fromString(unescape(encodeURIComponent(e)))
                            }
                        };
                    n.encoder = f;
                    var c = e.algo = {};
                    return e
                }(),
                f = i,
                d = f.lib,
                s = d.WordArray,
                c = d.Hash,
                a = f.algo,
                o = [608135816, -2052912941, 320440878, 57701188, -1542899678, 698298832, 137296536, -330404727, 1160258022, 953160567, -1101764913, 887688300, -1062458953, -914599715, 1065670069, -1253635817],
                h = [
                    [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15],
                    [14, 10, 4, 8, 9, 15, 13, 6, 1, 12, 0, 2, 11, 7, 5, 3],
                    [11, 8, 12, 0, 5, 2, 15, 13, 10, 14, 3, 6, 7, 1, 9, 4],
                    [7, 9, 3, 1, 13, 12, 11, 14, 2, 6, 5, 10, 4, 0, 15, 8],
                    [9, 0, 5, 7, 2, 4, 10, 15, 14, 1, 11, 12, 6, 8, 3, 13],
                    [2, 12, 6, 10, 0, 11, 8, 3, 4, 13, 7, 5, 15, 14, 1, 9],
                    [12, 5, 1, 15, 14, 13, 4, 10, 0, 7, 6, 3, 9, 2, 8, 11],
                    [13, 11, 7, 14, 12, 1, 3, 9, 5, 0, 15, 4, 8, 6, 2, 10],
                    [6, 15, 14, 9, 11, 3, 0, 8, 12, 2, 13, 7, 1, 4, 10, 5],
                    [10, 2, 8, 4, 7, 6, 1, 5, 15, 11, 9, 14, 3, 12, 13, 0]
                ],
                u = a.BLAKE256 = c.extend({
                    _cfg: c._cfg.extend({
                        salt: s.create([0, 0, 0, 0])
                    }),
                    _doReset: function() {
                        var e = this._hash.words;
                        e[0] = 1779033703, e[1] = -1150833019, e[2] = 1013904242, e[3] = -1521486534, e[4] = 1359893119, e[5] = -1694144372, e[6] = 528734635, e[7] = 1541459225, this._t = 0
                    },
                    _doHashBlock: function(e, t) {
                        var r = this._message.words,
                            n = this._hash.words,
                            i = this._cfg.salt.words,
                            f = this._t += 512,
                            d = [n[0], n[1], n[2], n[3], n[4], n[5], n[6], n[7], 608135816 ^ i[0], -2052912941 ^ i[1], 320440878 ^ i[2], 57701188 ^ i[3], -1542899678, 698298832, 137296536, -330404727];
                        t || (d[12] = d[12] ^ f, d[13] = d[13] ^ f);
                        for (var s = 0; s < r.length; s++) r[s] || (r[s] = 0);
                        for (var c = 0; c < 14; c++) {
                            var a = c % 10;
                            b(r, e, d, a, 0, 4, 8, 12, 0), b(r, e, d, a, 1, 5, 9, 13, 2), b(r, e, d, a, 2, 6, 10, 14, 4), b(r, e, d, a, 3, 7, 11, 15, 6), b(r, e, d, a, 0, 5, 10, 15, 8), b(r, e, d, a, 1, 6, 11, 12, 10), b(r, e, d, a, 2, 7, 8, 13, 12), b(r, e, d, a, 3, 4, 9, 14, 14)
                        }
                        for (s = 0; s < 8; s++) n[s] ^= i[s % 4] ^ d[s] ^ d[s + 8]
                    },
                    _doCompute: function() {
                        var e = this._message,
                            t = e.words;
                        lenMessage = e.toString().length / 2;
                        var r = !1;
                        0 == lenMessage && (r = !0), lenMessage > 55 && (r = !0);
                        var n = 8 * this._length,
                            i = 8 * e.sigBytes;
                        i ? this._t -= 512 - i : this._t = -512, t[i >>> 5] |= 128 << 24 - i % 32, t[13 + (i + 64 >>> 9 << 4)] |= 1, t[t.length + 1] = n, e.sigBytes = 4 * t.length, this._hashBlocks(r)
                    }
                });

            function b(e, t, r, n, i, f, d, s, c) {
                var a = h[n][c],
                    u = h[n][c + 1];
                r[i] = r[i] + r[f] + (e[t + a] ^ o[u]) | 0;
                var b = r[s] ^ r[i];
                r[s] = b << 16 | b >>> 16, r[d] = r[d] + r[s] | 0;
                b = r[f] ^ r[d];
                r[f] = b << 20 | b >>> 12, r[i] = r[i] + r[f] + (e[t + u] ^ o[a]) | 0;
                b = r[s] ^ r[i];
                r[s] = b << 24 | b >>> 8, r[d] = r[d] + r[s] | 0;
                b = r[f] ^ r[d];
                r[f] = b << 25 | b >>> 7
            }

            function p(e, t) {
                return f.BLAKE256(i.enc.Hex.fromString(e.toString("hex"))).words
            }
            f.BLAKE256 = c._createHelper(u), f.HMAC_BLAKE256 = c._createHmacHelper(u), e.exports = function(e) {
                return n.hash2(e, p, 32, !0)
            }
        },
        10378: function(e, t, r) {
            var n = r(6097),
                i = function() {
                    var e = {},
                        t = e.lib = {},
                        r = t.Base = function() {
                            function e() {}
                            return {
                                extend: function(t) {
                                    e.prototype = this;
                                    var r = new e;
                                    return t && r.mixIn(t), r.$super = this, r
                                },
                                mixIn: function(e) {
                                    for (var t in e) e.hasOwnProperty(t) && (this[t] = e[t]);
                                    e.hasOwnProperty("toString") && (this.toString = e.toString)
                                },
                                create: function() {
                                    var e = this.extend();
                                    return e.init.apply(e, arguments), e
                                },
                                init: function() {},
                                isA: function(e) {
                                    for (var t = this; t;) {
                                        if (t == e) return !0;
                                        t = t.$super
                                    }
                                    return !1
                                },
                                clone: function() {
                                    return this.$super.extend(this)
                                }
                            }
                        }(),
                        n = t.WordArray = r.extend({
                            init: function(e, t) {
                                e = this.words = e || [], this.sigBytes = void 0 !== t ? t : 4 * e.length
                            },
                            toString: function(e) {
                                return (e || this.encoder).toString(this)
                            },
                            concat: function(e) {
                                var t = this.words,
                                    r = e.words,
                                    n = this.sigBytes,
                                    i = e.sigBytes;
                                this.clamp();
                                for (var f = 0; f < i; f++) {
                                    var d = r[f >>> 2] >>> 24 - f % 4 * 8 & 255;
                                    t[n >>> 2] |= d << 24 - n % 4 * 8, n++
                                }
                                return this.sigBytes = n, this
                            },
                            clamp: function() {
                                var e = this.words,
                                    t = this.sigBytes;
                                e[t >>> 2] &= 4294967295 << 32 - t % 4 * 8, e.length = Math.ceil(t / 4)
                            },
                            clone: function() {
                                var e = n.$super.clone.call(this);
                                return e.words = this.words.slice(0), e
                            },
                            random: function(e) {
                                for (var t = [], r = 0; r < e; r += 4) t.push(Math.floor(4294967296 * Math.random()));
                                return this.create(t, e)
                            }
                        }),
                        i = (t.Hash = r.extend({
                            _cfg: r.extend(),
                            init: function(e) {
                                this._cfg = this._cfg.extend(e), this.reset()
                            },
                            reset: function() {
                                var e = this._hash = n.create();
                                this._message = n.create(), this._length = 0, this._doReset(), e.sigBytes = 4 * e.words.length
                            },
                            update: function(e) {
                                return "string" == typeof e && (e = s.fromString(e)), this._message.concat(e), this._length += e.sigBytes, this._hashBlocks(!1), this
                            },
                            _hashBlocks: function(e) {
                                var t = this._message,
                                    r = t.sigBytes,
                                    n = this._blockSize,
                                    i = Math.floor(r / (4 * n));
                                if (i)
                                    for (var f = i * n, d = 0; d < f; d += n) {
                                        var s = !1;
                                        t.words.length == n && e && (s = !0), this._doHashBlock(0, s), t.words.splice(0, n), t.sigBytes = r - 4 * f
                                    }
                            },
                            compute: function(e) {
                                e && this.update(e), this._doCompute();
                                var t = this._hash;
                                return this.reset(), t
                            },
                            _blockSize: 16,
                            _createHelper: function(e) {
                                return function(t, r) {
                                    return e.create(r).compute(t)
                                }
                            },
                            _createHmacHelper: function(e) {
                                return function(t, r) {
                                    return c.HMAC.create(e, r).compute(t)
                                }
                            }
                        }), e.enc = {}),
                        f = i.Hex = {
                            toString: function(e) {
                                for (var t = e.words, r = e.sigBytes, n = [], i = 0; i < r; i++) {
                                    var f = t[i >>> 2] >>> 24 - i % 4 * 8 & 255;
                                    n.push((f >>> 4).toString(16)), n.push((15 & f).toString(16))
                                }
                                return n.join("")
                            },
                            fromString: function(e) {
                                for (var t = e.length, r = [], i = 0; i < t; i += 2) r[i >>> 3] |= parseInt(e.substr(i, 2), 16) << 24 - i % 8 * 4;
                                return n.create(r, t / 2)
                            }
                        },
                        d = i.Latin1 = {
                            toString: function(e) {
                                for (var t = e.words, r = e.sigBytes, n = [], i = 0; i < r; i++) {
                                    var f = t[i >>> 2] >>> 24 - i % 4 * 8 & 255;
                                    n.push(String.fromCharCode(f))
                                }
                                return n.join("")
                            },
                            fromString: function(e) {
                                for (var t = e.length, r = [], i = 0; i < t; i++) r[i >>> 2] |= e.charCodeAt(i) << 24 - i % 4 * 8;
                                return n.create(r, t)
                            }
                        },
                        s = i.Utf8 = {
                            toString: function(e) {
                                return decodeURIComponent(escape(d.toString(e)))
                            },
                            fromString: function(e) {
                                return d.fromString(unescape(encodeURIComponent(e)))
                            }
                        };
                    n.encoder = f;
                    var c = e.algo = {};
                    return e
                }(),
                f = i,
                d = f.lib,
                s = d.WordArray,
                c = d.Hash,
                a = f.algo,
                o = s.create([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 7, 4, 13, 1, 10, 6, 15, 3, 12, 0, 9, 5, 2, 14, 11, 8, 3, 10, 14, 4, 9, 15, 8, 1, 2, 7, 0, 6, 13, 11, 5, 12, 1, 9, 11, 10, 0, 8, 12, 4, 13, 3, 7, 15, 14, 5, 6, 2, 4, 0, 5, 9, 7, 12, 2, 10, 14, 1, 3, 8, 11, 6, 15, 13]),
                h = s.create([5, 14, 7, 0, 9, 2, 11, 4, 13, 6, 15, 8, 1, 10, 3, 12, 6, 11, 3, 7, 0, 13, 5, 10, 14, 15, 8, 12, 4, 9, 1, 2, 15, 5, 1, 3, 7, 14, 6, 9, 11, 8, 12, 2, 10, 0, 4, 13, 8, 6, 4, 1, 3, 11, 15, 0, 5, 12, 2, 13, 9, 7, 10, 14, 12, 15, 10, 4, 1, 5, 8, 7, 6, 2, 13, 14, 0, 3, 9, 11]),
                u = s.create([11, 14, 15, 12, 5, 8, 7, 9, 11, 13, 14, 15, 6, 7, 9, 8, 7, 6, 8, 13, 11, 9, 7, 15, 7, 12, 15, 9, 11, 7, 13, 12, 11, 13, 6, 7, 14, 9, 13, 15, 14, 8, 13, 6, 5, 12, 7, 5, 11, 12, 14, 15, 14, 15, 9, 8, 9, 14, 5, 6, 8, 6, 5, 12, 9, 15, 5, 11, 6, 8, 13, 12, 5, 12, 13, 14, 11, 8, 5, 6]),
                b = s.create([8, 9, 9, 11, 13, 15, 15, 5, 7, 7, 8, 11, 14, 14, 12, 6, 9, 13, 15, 7, 12, 8, 9, 11, 7, 7, 12, 7, 6, 15, 13, 11, 9, 7, 15, 11, 8, 6, 6, 14, 12, 13, 5, 14, 13, 13, 7, 5, 15, 5, 8, 11, 14, 14, 6, 14, 6, 9, 12, 9, 12, 5, 15, 8, 8, 5, 12, 9, 12, 5, 14, 6, 8, 13, 6, 5, 15, 13, 11, 11]),
                p = s.create([0, 1518500249, 1859775393, 2400959708, 2840853838]),
                l = s.create([1352829926, 1548603684, 1836072691, 2053994217, 0]),
                g = a.RIPEMD160 = c.extend({
                    _doReset: function() {
                        this._hash = s.create([1732584193, 4023233417, 2562383102, 271733878, 3285377520])
                    },
                    _doProcessBlock: function(e, t) {
                        for (var r = 0; r < 16; r++) {
                            var n = t + r,
                                i = e[n];
                            e[n] = 16711935 & (i << 8 | i >>> 24) | 4278255360 & (i << 24 | i >>> 8)
                        }
                        var f, d, s, c, a, g, A, x, M, I, B, k = this._hash.words,
                            z = p.words,
                            R = l.words,
                            q = o.words,
                            E = h.words,
                            C = u.words,
                            P = b.words;
                        g = f = k[0], A = d = k[1], x = s = k[2], M = c = k[3], I = a = k[4];
                        for (r = 0; r < 80; r += 1) B = f + e[t + q[r]] | 0, B += r < 16 ? m(d, s, c) + z[0] : r < 32 ? v(d, s, c) + z[1] : r < 48 ? y(d, s, c) + z[2] : r < 64 ? w(d, s, c) + z[3] : _(d, s, c) + z[4], B = (B = S(B |= 0, C[r])) + a | 0, f = a, a = c, c = S(s, 10), s = d, d = B, B = g + e[t + E[r]] | 0, B += r < 16 ? _(A, x, M) + R[0] : r < 32 ? w(A, x, M) + R[1] : r < 48 ? y(A, x, M) + R[2] : r < 64 ? v(A, x, M) + R[3] : m(A, x, M) + R[4], B = (B = S(B |= 0, P[r])) + I | 0, g = I, I = M, M = S(x, 10), x = A, A = B;
                        B = k[1] + s + M | 0, k[1] = k[2] + c + I | 0, k[2] = k[3] + a + g | 0, k[3] = k[4] + f + A | 0, k[4] = k[0] + d + x | 0, k[0] = B
                    },
                    _doFinalize: function() {
                        var e = this._data,
                            t = e.words,
                            r = 8 * this._nDataBytes,
                            n = 8 * e.sigBytes;
                        t[n >>> 5] |= 128 << 24 - n % 32, t[14 + (n + 64 >>> 9 << 4)] = 16711935 & (r << 8 | r >>> 24) | 4278255360 & (r << 24 | r >>> 8), e.sigBytes = 4 * (t.length + 1), this._process();
                        for (var i = this._hash, f = i.words, d = 0; d < 5; d++) {
                            var s = f[d];
                            f[d] = 16711935 & (s << 8 | s >>> 24) | 4278255360 & (s << 24 | s >>> 8)
                        }
                        return i
                    },
                    clone: function() {
                        var e = c.clone.call(this);
                        return e._hash = this._hash.clone(), e
                    }
                });

            function m(e, t, r) {
                return e ^ t ^ r
            }

            function v(e, t, r) {
                return e & t | ~e & r
            }

            function y(e, t, r) {
                return (e | ~t) ^ r
            }

            function w(e, t, r) {
                return e & r | t & ~r
            }

            function _(e, t, r) {
                return e ^ (t | ~r)
            }

            function S(e, t) {
                return e << t | e >>> 32 - t
            }

            function A(e, t) {
                return f.RIPEMD160(i.enc.Hex.fromString(e.toString("hex"))).words
            }
            f.RIPEMD160 = c._createHelper(g), f.HmacRIPEMD160 = c._createHmacHelper(g), e.exports = function(e) {
                return n.hash(e, A, 20, !0)
            }
        },
        10379: function(e, t, r) {
            const n = r(10380).Buffer;
            e.exports = function(e) {
                if (e.length >= 255) throw new TypeError("Alphabet too long");
                const t = new Uint8Array(256);
                t.fill(255);
                for (let r = 0; r < e.length; r++) {
                    const n = e.charAt(r),
                        i = n.charCodeAt(0);
                    if (255 !== t[i]) throw new TypeError(n + " is ambiguous");
                    t[i] = r
                }
                const r = e.length,
                    i = e.charAt(0),
                    f = Math.log(r) / Math.log(256),
                    d = Math.log(256) / Math.log(r);

                function s(e) {
                    if ("string" != typeof e) throw new TypeError("Expected String");
                    if (0 === e.length) return n.alloc(0);
                    let d = 0;
                    if (" " === e[d]) return;
                    let s = 0,
                        c = 0;
                    for (; e[d] === i;) s++, d++;
                    const a = (e.length - d) * f + 1 >>> 0,
                        o = new Uint8Array(a);
                    for (; e[d];) {
                        let n = t[e.charCodeAt(d)];
                        if (255 === n) return;
                        let i = 0;
                        for (let e = a - 1;
                            (0 !== n || i < c) && -1 !== e; e--, i++) n += r * o[e] >>> 0, o[e] = n % 256 >>> 0, n = n / 256 >>> 0;
                        if (0 !== n) throw new Error("Non-zero carry");
                        c = i, d++
                    }
                    if (" " === e[d]) return;
                    let h = a - c;
                    for (; h !== a && 0 === o[h];) h++;
                    const u = n.allocUnsafe(s + (a - h));
                    u.fill(0, 0, s);
                    let b = s;
                    for (; h !== a;) u[b++] = o[h++];
                    return u
                }
                return {
                    encode: function(t) {
                        if (!n.isBuffer(t)) throw new TypeError("Expected Buffer");
                        if (0 === t.length) return "";
                        let f = 0,
                            s = 0,
                            c = 0;
                        const a = t.length;
                        for (; c !== a && 0 === t[c];) c++, f++;
                        const o = (a - c) * d + 1 >>> 0,
                            h = new Uint8Array(o);
                        for (; c !== a;) {
                            let e = t[c],
                                n = 0;
                            for (let t = o - 1;
                                (0 !== e || n < s) && -1 !== t; t--, n++) e += 256 * h[t] >>> 0, h[t] = e % r >>> 0, e = e / r >>> 0;
                            if (0 !== e) throw new Error("Non-zero carry");
                            s = n, c++
                        }
                        let u = o - s;
                        for (; u !== o && 0 === h[u];) u++;
                        let b = i.repeat(f);
                        for (; u < o; ++u) b += e.charAt(h[u]);
                        return b
                    },
                    decodeUnsafe: s,
                    decode: function(e) {
                        const t = s(e);
                        if (t) return t;
                        throw new Error("Non-base" + r + " character")
                    }
                }
            }
        },
        10380: function(e, t, r) {
            var n = r(12),
                i = n.Buffer;

            function f(e, t) {
                for (var r in e) t[r] = e[r]
            }

            function d(e, t, r) {
                return i(e, t, r)
            }
            i.from && i.alloc && i.allocUnsafe && i.allocUnsafeSlow ? e.exports = n : (f(n, t), t.Buffer = d), f(i, d), d.from = function(e, t, r) {
                if ("number" == typeof e) throw new TypeError("Argument must not be a number");
                return i(e, t, r)
            }, d.alloc = function(e, t, r) {
                if ("number" != typeof e) throw new TypeError("Argument must be a number");
                var n = i(e);
                return void 0 !== t ? "string" == typeof r ? n.fill(t, r) : n.fill(t) : n.fill(0), n
            }, d.allocUnsafe = function(e) {
                if ("number" != typeof e) throw new TypeError("Argument must be a number");
                return i(e)
            }, d.allocUnsafeSlow = function(e) {
                if ("number" != typeof e) throw new TypeError("Argument must be a number");
                return n.SlowBuffer(e)
            }
        },
        10386: function(e, t) {
            var r = function() {
                    var e = {},
                        t = e.lib = {},
                        r = t.Base = function() {
                            function e() {}
                            return {
                                extend: function(t) {
                                    e.prototype = this;
                                    var r = new e;
                                    return t && r.mixIn(t), r.$super = this, r
                                },
                                mixIn: function(e) {
                                    for (var t in e) e.hasOwnProperty(t) && (this[t] = e[t]);
                                    e.hasOwnProperty("toString") && (this.toString = e.toString)
                                },
                                create: function() {
                                    var e = this.extend();
                                    return e.init.apply(e, arguments), e
                                },
                                init: function() {},
                                isA: function(e) {
                                    for (var t = this; t;) {
                                        if (t == e) return !0;
                                        t = t.$super
                                    }
                                    return !1
                                },
                                clone: function() {
                                    return this.$super.extend(this)
                                }
                            }
                        }(),
                        n = t.WordArray = r.extend({
                            init: function(e, t) {
                                e = this.words = e || [], this.sigBytes = void 0 !== t ? t : 4 * e.length
                            },
                            toString: function(e) {
                                return (e || this.encoder).toString(this)
                            },
                            concat: function(e) {
                                var t = this.words,
                                    r = e.words,
                                    n = this.sigBytes,
                                    i = e.sigBytes;
                                this.clamp();
                                for (var f = 0; f < i; f++) {
                                    var d = r[f >>> 2] >>> 24 - f % 4 * 8 & 255;
                                    t[n >>> 2] |= d << 24 - n % 4 * 8, n++
                                }
                                return this.sigBytes = n, this
                            },
                            clamp: function() {
                                var e = this.words,
                                    t = this.sigBytes;
                                e[t >>> 2] &= 4294967295 << 32 - t % 4 * 8, e.length = Math.ceil(t / 4)
                            },
                            clone: function() {
                                var e = n.$super.clone.call(this);
                                return e.words = this.words.slice(0), e
                            },
                            random: function(e) {
                                for (var t = [], r = 0; r < e; r += 4) t.push(Math.floor(4294967296 * Math.random()));
                                return this.create(t, e)
                            }
                        }),
                        i = (t.Hash = r.extend({
                            _cfg: r.extend(),
                            init: function(e) {
                                this._cfg = this._cfg.extend(e), this.reset()
                            },
                            reset: function() {
                                var e = this._hash = n.create();
                                this._message = n.create(), this._length = 0, this._doReset(), e.sigBytes = 4 * e.words.length
                            },
                            update: function(e) {
                                return "string" == typeof e && (e = s.fromString(e)), this._message.concat(e), this._length += e.sigBytes, this._hashBlocks(), this
                            },
                            _hashBlocks: function() {
                                var e = this._message,
                                    t = e.sigBytes,
                                    r = this._blockSize,
                                    n = Math.floor(t / (4 * r));
                                if (n) {
                                    for (var i = n * r, f = 0; f < i; f += r) this._doHashBlock(f);
                                    e.words.splice(0, i), e.sigBytes = t - 4 * i
                                }
                            },
                            compute: function(e) {
                                e && this.update(e), this._doCompute();
                                var t = this._hash;
                                return this.reset(), t
                            },
                            _blockSize: 16,
                            _createHelper: function(e) {
                                return function(t, r) {
                                    return e.create(r).compute(t)
                                }
                            },
                            _createHmacHelper: function(e) {
                                return function(t, r) {
                                    return c.HMAC.create(e, r).compute(t)
                                }
                            }
                        }), e.enc = {}),
                        f = i.Hex = {
                            toString: function(e) {
                                for (var t = e.words, r = e.sigBytes, n = [], i = 0; i < r; i++) {
                                    var f = t[i >>> 2] >>> 24 - i % 4 * 8 & 255;
                                    n.push((f >>> 4).toString(16)), n.push((15 & f).toString(16))
                                }
                                return n.join("")
                            },
                            fromString: function(e) {
                                for (var t = e.length, r = [], i = 0; i < t; i += 2) r[i >>> 3] |= parseInt(e.substr(i, 2), 16) << 24 - i % 8 * 4;
                                return n.create(r, t / 2)
                            }
                        },
                        d = i.Latin1 = {
                            toString: function(e) {
                                for (var t = e.words, r = e.sigBytes, n = [], i = 0; i < r; i++) {
                                    var f = t[i >>> 2] >>> 24 - i % 4 * 8 & 255;
                                    n.push(String.fromCharCode(f))
                                }
                                return n.join("")
                            },
                            fromString: function(e) {
                                for (var t = e.length, r = [], i = 0; i < t; i++) r[i >>> 2] |= e.charCodeAt(i) << 24 - i % 4 * 8;
                                return n.create(r, t)
                            }
                        },
                        s = i.Utf8 = {
                            toString: function(e) {
                                return decodeURIComponent(escape(d.toString(e)))
                            },
                            fromString: function(e) {
                                return d.fromString(unescape(encodeURIComponent(e)))
                            }
                        };
                    n.encoder = f;
                    var c = e.algo = {};
                    return e
                }(),
                n = r.lib,
                i = n.WordArray,
                f = n.Hash,
                d = r.algo,
                s = [608135816, 2242054355, 320440878, 57701188, 2752067618, 698298832, 137296536, 3964562569, 1160258022, 953160567, 3193202383, 887688300, 3232508343, 3380367581, 1065670069, 3041331479],
                c = [
                    [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15],
                    [14, 10, 4, 8, 9, 15, 13, 6, 1, 12, 0, 2, 11, 7, 5, 3],
                    [11, 8, 12, 0, 5, 2, 15, 13, 10, 14, 3, 6, 7, 1, 9, 4],
                    [7, 9, 3, 1, 13, 12, 11, 14, 2, 6, 5, 10, 4, 0, 15, 8],
                    [9, 0, 5, 7, 2, 4, 10, 15, 14, 1, 11, 12, 6, 8, 3, 13],
                    [2, 12, 6, 10, 0, 11, 8, 3, 4, 13, 7, 5, 15, 14, 1, 9],
                    [12, 5, 1, 15, 14, 13, 4, 10, 0, 7, 6, 3, 9, 2, 8, 11],
                    [13, 11, 7, 14, 12, 1, 3, 9, 5, 0, 15, 4, 8, 6, 2, 10],
                    [6, 15, 14, 9, 11, 3, 0, 8, 12, 2, 13, 7, 1, 4, 10, 5],
                    [10, 2, 8, 4, 7, 6, 1, 5, 15, 11, 9, 14, 3, 12, 13, 0]
                ],
                a = d.BLAKE256 = f.extend({
                    _cfg: f._cfg.extend({
                        salt: i.create([0, 0, 0, 0])
                    }),
                    _doReset: function() {
                        var e = this._hash.words;
                        e[0] = 1779033703, e[1] = 3144134277, e[2] = 1013904242, e[3] = 2773480762, e[4] = 1359893119, e[5] = 2600822924, e[6] = 528734635, e[7] = 1541459225, this._t = 0
                    },
                    _doHashBlock: function(e) {
                        for (var t = this._message.words, r = this._hash.words, n = this._cfg.salt.words, i = this._t += 512, f = [r[0], r[1], r[2], r[3], r[4], r[5], r[6], r[7], 608135816 ^ n[0], 2242054355 ^ n[1], 320440878 ^ n[2], 57701188 ^ n[3], 2752067618 ^ i, 698298832 ^ i, 137296536, 3964562569], d = 0; d < 14; d++) {
                            var s = d % 10;
                            o(t, e, f, s, 0, 4, 8, 12, 0), o(t, e, f, s, 1, 5, 9, 13, 2), o(t, e, f, s, 2, 6, 10, 14, 4), o(t, e, f, s, 3, 7, 11, 15, 6), o(t, e, f, s, 0, 5, 10, 15, 8), o(t, e, f, s, 1, 6, 11, 12, 10), o(t, e, f, s, 2, 7, 8, 13, 12), o(t, e, f, s, 3, 4, 9, 14, 14)
                        }
                        for (var c = 0; c < 8; c++) r[c] ^= n[c % 4] ^ f[c] ^ f[c + 8]
                    },
                    _doCompute: function() {
                        var e = this._message,
                            t = e.words,
                            r = 8 * this._length,
                            n = 8 * e.sigBytes;
                        n ? this._t -= 512 - n : this._t = -512, t[n >>> 5] |= 128 << 24 - n % 32, t[13 + (n + 64 >>> 9 << 4)] |= 1, t[t.length + 1] = r, e.sigBytes = 4 * t.length, this._hashBlocks()
                    }
                });

            function o(e, t, r, n, i, f, d, a, o) {
                var h = c[n][o],
                    u = c[n][o + 1];
                r[i] = r[i] + r[f] + (e[t + h] ^ s[u]) | 0;
                var b = r[a] ^ r[i];
                r[a] = b << 16 | b >>> 16, r[d] = r[d] + r[a] | 0;
                b = r[f] ^ r[d];
                r[f] = b << 20 | b >>> 12, r[i] = r[i] + r[f] + (e[t + u] ^ s[h]) | 0;
                b = r[a] ^ r[i];
                r[a] = b << 24 | b >>> 8, r[d] = r[d] + r[a] | 0;
                b = r[f] ^ r[d];
                r[f] = b << 25 | b >>> 7
            }
            r.BLAKE256 = f._createHelper(a), r.HMAC_BLAKE256 = f._createHmacHelper(a), t.CryptoJS = r, t.BLAKE256 = r.BLAKE256
        },
        10390: function(e, t, r) {
            "use strict";
            var n = r(5491),
                i = r(102),
                f = r(5873),
                d = r(6711),
                s = function(e, t) {
                    if (!(this instanceof s)) return new s(e, t);
                    if (this.extras = {}, this.knownParams = t || [], this.address = this.network = this.amount = this.message = null, "string" == typeof e) {
                        var r = s.parse(e);
                        r.amount && (r.amount = this._parseAmount(r.amount)), this._fromObject(r)
                    } else {
                        if ("object" != typeof e) throw new TypeError("Unrecognized data format.");
                        this._fromObject(e)
                    }
                };
            s.fromString = function(e) {
                if ("string" != typeof e) throw new TypeError("Expected a string");
                return new s(e)
            }, s.fromObject = function(e) {
                return new s(e)
            }, s.isValid = function(e, t) {
                try {
                    new s(e, t)
                } catch (e) {
                    return !1
                }
                return !0
            }, s.parse = function(e) {
                var t = i.parse(e, !0);
                if ("decred:" !== t.protocol) throw new TypeError("Invalid decred URI");
                var r = /[^:]*:\/?\/?([^?]*)/.exec(e);
                return t.query.address = r && r[1] || void 0, t.query
            }, s.Members = ["address", "amount", "message", "label", "r"], s.prototype._fromObject = function(e) {
                if (!f.isValid(e.address)) throw new TypeError("Invalid bitcoin address");
                for (var t in this.address = new f(e.address), this.network = this.address.network, this.amount = e.amount, e)
                    if ("address" !== t && "amount" !== t) {
                        if (/^req-/.exec(t) && -1 === this.knownParams.indexOf(t)) throw Error("Unknown required argument " + t);
                        (s.Members.indexOf(t) > -1 ? this : this.extras)[t] = e[t]
                    }
            }, s.prototype._parseAmount = function(e) {
                if (e = Number(e), isNaN(e)) throw new TypeError("Invalid amount");
                return d.fromDCR(e).toAtoms()
            }, s.prototype.toObject = s.prototype.toJSON = function() {
                for (var e = {}, t = 0; t < s.Members.length; t++) {
                    var r = s.Members[t];
                    this.hasOwnProperty(r) && void 0 !== this[r] && (e[r] = this[r].toString())
                }
                return n.extend(e, this.extras), e
            }, s.prototype.toString = function() {
                var e = {};
                return this.amount && (e.amount = d.fromAtoms(this.amount).toDCR()), this.message && (e.message = this.message), this.label && (e.label = this.label), this.r && (e.r = this.r), n.extend(e, this.extras), i.format({
                    protocol: "decred:",
                    host: this.address,
                    query: e
                })
            }, s.prototype.inspect = function() {
                return "<URI: " + this.toString() + ">"
            }, e.exports = s
        },
        5506: function(e, t, r) {
            "use strict";
            var n = r(5677),
                i = r(5491);
            e.exports = {
                checkState: function(e, t) {
                    if (!e) throw new n.InvalidState(t)
                },
                checkArgument: function(e, t, r, i) {
                    if (!e) throw new n.InvalidArgument(t, r, i)
                },
                checkArgumentType: function(e, t, f) {
                    if (f = f || "(unknown name)", i.isString(t)) {
                        if ("Buffer" === t) {
                            if (!r(5519).isBuffer(e)) throw new n.InvalidArgumentType(e, t, f)
                        } else if (typeof e !== t) throw new n.InvalidArgumentType(e, t, f)
                    } else if (!(e instanceof t)) throw new n.InvalidArgumentType(e, t.name, f)
                }
            }
        },
        5519: function(e, t, r) {
            "use strict";
            var n = r(12),
                i = r(72),
                f = r(5588),
                d = r(5506);

            function s(e, t) {
                if (e.length !== t.length) return !1;
                for (var r = e.length, n = 0; n < r; n++)
                    if (e[n] !== t[n]) return !1;
                return !0
            }
            e.exports = {
                fill: function(e, t) {
                    d.checkArgumentType(e, "Buffer", "buffer"), d.checkArgumentType(t, "number", "value");
                    for (var r = e.length, n = 0; n < r; n++) e[n] = t;
                    return e
                },
                copy: function(e) {
                    var t = new Buffer(e.length);
                    return e.copy(t), t
                },
                isBuffer: function(e) {
                    return n.Buffer.isBuffer(e) || e instanceof Uint8Array
                },
                emptyBuffer: function(e) {
                    d.checkArgumentType(e, "number", "bytes");
                    for (var t = new n.Buffer(e), r = 0; r < e; r++) t.write("\0", r);
                    return t
                },
                concat: n.Buffer.concat,
                equals: s,
                equal: s,
                integerAsSingleByteBuffer: function(e) {
                    return d.checkArgumentType(e, "number", "integer"), new n.Buffer([255 & e])
                },
                integerAsBuffer: function(e) {
                    d.checkArgumentType(e, "number", "integer");
                    var t = [];
                    return t.push(e >> 24 & 255), t.push(e >> 16 & 255), t.push(e >> 8 & 255), t.push(255 & e), new Buffer(t)
                },
                integerFromBuffer: function(e) {
                    return d.checkArgumentType(e, "Buffer", "buffer"), e[0] << 24 | e[1] << 16 | e[2] << 8 | e[3]
                },
                integerFromSingleByteBuffer: function(e) {
                    return d.checkArgumentType(e, "Buffer", "buffer"), e[0]
                },
                bufferToHex: function(e) {
                    return d.checkArgumentType(e, "Buffer", "buffer"), e.toString("hex")
                },
                reverse: function(e) {
                    for (var t = new n.Buffer(e.length), r = 0; r < e.length; r++) t[r] = e[e.length - r - 1];
                    return t
                },
                hexToBuffer: function(e) {
                    return i(f.isHexa(e)), new n.Buffer(e, "hex")
                }
            }, e.exports.NULL_HASH = e.exports.fill(new Buffer(32), 0), e.exports.EMPTY_BUFFER = new Buffer(0)
        },
        5588: function(e, t, r) {
            "use strict";
            var n = r(5491),
                i = function(e) {
                    return !!n.isString(e) && /^[0-9a-fA-F]+$/.test(e)
                };
            e.exports = {
                isValidJSON: function(e) {
                    var t;
                    if (!n.isString(e)) return !1;
                    try {
                        t = JSON.parse(e)
                    } catch (e) {
                        return !1
                    }
                    return "object" == typeof t
                },
                isHexa: i,
                isHexaString: i,
                cloneArray: function(e) {
                    return [].concat(e)
                },
                defineImmutable: function(e, t) {
                    return Object.keys(t).forEach((function(r) {
                        Object.defineProperty(e, r, {
                            configurable: !1,
                            enumerable: !0,
                            value: t[r]
                        })
                    })), e
                },
                isNaturalNumber: function(e) {
                    return "number" == typeof e && isFinite(e) && Math.floor(e) === e && e >= 0
                }
            }
        },
        5710: function(e, t, r) {
            "use strict";
            var n = t;
            n.version = r(10353).version, n.utils = r(10354), n.rand = r(10355), n.hmacDRBG = r(10356), n.curve = r(6279), n.curves = r(10367), n.ec = r(10369)
        },
        5711: function(e, t, r) {
            "use strict";
            var n = r(6095),
                i = r(5756);

            function f(e, t) {
                return 55296 == (64512 & e.charCodeAt(t)) && (!(t < 0 || t + 1 >= e.length) && 56320 == (64512 & e.charCodeAt(t + 1)))
            }

            function d(e) {
                return (e >>> 24 | e >>> 8 & 65280 | e << 8 & 16711680 | (255 & e) << 24) >>> 0
            }

            function s(e) {
                return 1 === e.length ? "0" + e : e
            }

            function c(e) {
                return 7 === e.length ? "0" + e : 6 === e.length ? "00" + e : 5 === e.length ? "000" + e : 4 === e.length ? "0000" + e : 3 === e.length ? "00000" + e : 2 === e.length ? "000000" + e : 1 === e.length ? "0000000" + e : e
            }
            t.inherits = i, t.toArray = function(e, t) {
                if (Array.isArray(e)) return e.slice();
                if (!e) return [];
                var r = [];
                if ("string" == typeof e)
                    if (t) {
                        if ("hex" === t)
                            for ((e = e.replace(/[^a-z0-9]+/gi, "")).length % 2 != 0 && (e = "0" + e), i = 0; i < e.length; i += 2) r.push(parseInt(e[i] + e[i + 1], 16))
                    } else
                        for (var n = 0, i = 0; i < e.length; i++) {
                            var d = e.charCodeAt(i);
                            d < 128 ? r[n++] = d : d < 2048 ? (r[n++] = d >> 6 | 192, r[n++] = 63 & d | 128) : f(e, i) ? (d = 65536 + ((1023 & d) << 10) + (1023 & e.charCodeAt(++i)), r[n++] = d >> 18 | 240, r[n++] = d >> 12 & 63 | 128, r[n++] = d >> 6 & 63 | 128, r[n++] = 63 & d | 128) : (r[n++] = d >> 12 | 224, r[n++] = d >> 6 & 63 | 128, r[n++] = 63 & d | 128)
                        } else
                            for (i = 0; i < e.length; i++) r[i] = 0 | e[i];
                return r
            }, t.toHex = function(e) {
                for (var t = "", r = 0; r < e.length; r++) t += s(e[r].toString(16));
                return t
            }, t.htonl = d, t.toHex32 = function(e, t) {
                for (var r = "", n = 0; n < e.length; n++) {
                    var i = e[n];
                    "little" === t && (i = d(i)), r += c(i.toString(16))
                }
                return r
            }, t.zero2 = s, t.zero8 = c, t.join32 = function(e, t, r, i) {
                var f = r - t;
                n(f % 4 == 0);
                for (var d = new Array(f / 4), s = 0, c = t; s < d.length; s++, c += 4) {
                    var a;
                    a = "big" === i ? e[c] << 24 | e[c + 1] << 16 | e[c + 2] << 8 | e[c + 3] : e[c + 3] << 24 | e[c + 2] << 16 | e[c + 1] << 8 | e[c], d[s] = a >>> 0
                }
                return d
            }, t.split32 = function(e, t) {
                for (var r = new Array(4 * e.length), n = 0, i = 0; n < e.length; n++, i += 4) {
                    var f = e[n];
                    "big" === t ? (r[i] = f >>> 24, r[i + 1] = f >>> 16 & 255, r[i + 2] = f >>> 8 & 255, r[i + 3] = 255 & f) : (r[i + 3] = f >>> 24, r[i + 2] = f >>> 16 & 255, r[i + 1] = f >>> 8 & 255, r[i] = 255 & f)
                }
                return r
            }, t.rotr32 = function(e, t) {
                return e >>> t | e << 32 - t
            }, t.rotl32 = function(e, t) {
                return e << t | e >>> 32 - t
            }, t.sum32 = function(e, t) {
                return e + t >>> 0
            }, t.sum32_3 = function(e, t, r) {
                return e + t + r >>> 0
            }, t.sum32_4 = function(e, t, r, n) {
                return e + t + r + n >>> 0
            }, t.sum32_5 = function(e, t, r, n, i) {
                return e + t + r + n + i >>> 0
            }, t.sum64 = function(e, t, r, n) {
                var i = e[t],
                    f = n + e[t + 1] >>> 0,
                    d = (f < n ? 1 : 0) + r + i;
                e[t] = d >>> 0, e[t + 1] = f
            }, t.sum64_hi = function(e, t, r, n) {
                return (t + n >>> 0 < t ? 1 : 0) + e + r >>> 0
            }, t.sum64_lo = function(e, t, r, n) {
                return t + n >>> 0
            }, t.sum64_4_hi = function(e, t, r, n, i, f, d, s) {
                var c = 0,
                    a = t;
                return c += (a = a + n >>> 0) < t ? 1 : 0, c += (a = a + f >>> 0) < f ? 1 : 0, e + r + i + d + (c += (a = a + s >>> 0) < s ? 1 : 0) >>> 0
            }, t.sum64_4_lo = function(e, t, r, n, i, f, d, s) {
                return t + n + f + s >>> 0
            }, t.sum64_5_hi = function(e, t, r, n, i, f, d, s, c, a) {
                var o = 0,
                    h = t;
                return o += (h = h + n >>> 0) < t ? 1 : 0, o += (h = h + f >>> 0) < f ? 1 : 0, o += (h = h + s >>> 0) < s ? 1 : 0, e + r + i + d + c + (o += (h = h + a >>> 0) < a ? 1 : 0) >>> 0
            }, t.sum64_5_lo = function(e, t, r, n, i, f, d, s, c, a) {
                return t + n + f + s + a >>> 0
            }, t.rotr64_hi = function(e, t, r) {
                return (t << 32 - r | e >>> r) >>> 0
            }, t.rotr64_lo = function(e, t, r) {
                return (e << 32 - r | t >>> r) >>> 0
            }, t.shr64_hi = function(e, t, r) {
                return e >>> r
            }, t.shr64_lo = function(e, t, r) {
                return (e << 32 - r | t >>> r) >>> 0
            }
        },
        5755: function(e, t, r) {
            (function(e) {
                ! function(e, t) {
                    "use strict";

                    function r(e, t) {
                        if (!e) throw new Error(t || "Assertion failed")
                    }

                    function n(e, t) {
                        e.super_ = t;
                        var r = function() {};
                        r.prototype = t.prototype, e.prototype = new r, e.prototype.constructor = e
                    }

                    function i(e, t, r) {
                        if (null !== e && "object" == typeof e && Array.isArray(e.words)) return e;
                        this.sign = !1, this.words = null, this.length = 0, this.red = null, "le" !== t && "be" !== t || (r = t, t = 10), null !== e && this._init(e || 0, t || 10, r || "be")
                    }

                    function f(e, t, r) {
                        for (var n = 0, i = Math.min(e.length, r), f = t; f < i; f++) {
                            var d = e.charCodeAt(f) - 48;
                            n <<= 4, n |= d >= 49 && d <= 54 ? d - 49 + 10 : d >= 17 && d <= 22 ? d - 17 + 10 : 15 & d
                        }
                        return n
                    }

                    function d(e, t, r, n) {
                        for (var i = 0, f = Math.min(e.length, r), d = t; d < f; d++) {
                            var s = e.charCodeAt(d) - 48;
                            i *= n, i += s >= 49 ? s - 49 + 10 : s >= 17 ? s - 17 + 10 : s
                        }
                        return i
                    }
                    "object" == typeof e ? e.exports = i : t.BN = i, i.BN = i, i.wordSize = 26, i.prototype._init = function(e, t, n) {
                        if ("number" == typeof e) return this._initNumber(e, t, n);
                        if ("object" == typeof e) return this._initArray(e, t, n);
                        "hex" === t && (t = 16), r(t === (0 | t) && t >= 2 && t <= 36);
                        var i = 0;
                        "-" === (e = e.toString().replace(/\s+/g, ""))[0] && i++, 16 === t ? this._parseHex(e, i) : this._parseBase(e, t, i), "-" === e[0] && (this.sign = !0), this.strip(), "le" === n && this._initArray(this.toArray(), t, n)
                    }, i.prototype._initNumber = function(e, t, n) {
                        e < 0 && (this.sign = !0, e = -e), e < 67108864 ? (this.words = [67108863 & e], this.length = 1) : e < 4503599627370496 ? (this.words = [67108863 & e, e / 67108864 & 67108863], this.length = 2) : (r(e < 9007199254740992), this.words = [67108863 & e, e / 67108864 & 67108863, 1], this.length = 3), "le" === n && this._initArray(this.toArray(), t, n)
                    }, i.prototype._initArray = function(e, t, n) {
                        if (r("number" == typeof e.length), e.length <= 0) return this.words = [0], this.length = 1, this;
                        this.length = Math.ceil(e.length / 3), this.words = new Array(this.length);
                        for (var i = 0; i < this.length; i++) this.words[i] = 0;
                        var f = 0;
                        if ("be" === n) {
                            i = e.length - 1;
                            for (var d = 0; i >= 0; i -= 3) {
                                var s = e[i] | e[i - 1] << 8 | e[i - 2] << 16;
                                this.words[d] |= s << f & 67108863, this.words[d + 1] = s >>> 26 - f & 67108863, (f += 24) >= 26 && (f -= 26, d++)
                            }
                        } else if ("le" === n)
                            for (i = 0, d = 0; i < e.length; i += 3) {
                                s = e[i] | e[i + 1] << 8 | e[i + 2] << 16;
                                this.words[d] |= s << f & 67108863, this.words[d + 1] = s >>> 26 - f & 67108863, (f += 24) >= 26 && (f -= 26, d++)
                            }
                        return this.strip()
                    }, i.prototype._parseHex = function(e, t) {
                        this.length = Math.ceil((e.length - t) / 6), this.words = new Array(this.length);
                        for (var r = 0; r < this.length; r++) this.words[r] = 0;
                        for (var n = 0, i = (r = e.length - 6, 0); r >= t; r -= 6) {
                            var d = f(e, r, r + 6);
                            this.words[i] |= d << n & 67108863, this.words[i + 1] |= d >>> 26 - n & 4194303, (n += 24) >= 26 && (n -= 26, i++)
                        }
                        if (r + 6 !== t) {
                            d = f(e, t, r + 6);
                            this.words[i] |= d << n & 67108863, this.words[i + 1] |= d >>> 26 - n & 4194303
                        }
                        this.strip()
                    }, i.prototype._parseBase = function(e, t, r) {
                        this.words = [0], this.length = 1;
                        for (var n = 0, i = 1; i <= 67108863; i *= t) n++;
                        n--, i = i / t | 0;
                        for (var f = e.length - r, s = f % n, c = Math.min(f, f - s) + r, a = 0, o = r; o < c; o += n) a = d(e, o, o + n, t), this.imuln(i), this.words[0] + a < 67108864 ? this.words[0] += a : this._iaddn(a);
                        if (0 !== s) {
                            var h = 1;
                            for (a = d(e, o, e.length, t), o = 0; o < s; o++) h *= t;
                            this.imuln(h), this.words[0] + a < 67108864 ? this.words[0] += a : this._iaddn(a)
                        }
                    }, i.prototype.copy = function(e) {
                        e.words = new Array(this.length);
                        for (var t = 0; t < this.length; t++) e.words[t] = this.words[t];
                        e.length = this.length, e.sign = this.sign, e.red = this.red
                    }, i.prototype.clone = function() {
                        var e = new i(null);
                        return this.copy(e), e
                    }, i.prototype.strip = function() {
                        for (; this.length > 1 && 0 === this.words[this.length - 1];) this.length--;
                        return this._normSign()
                    }, i.prototype._normSign = function() {
                        return 1 === this.length && 0 === this.words[0] && (this.sign = !1), this
                    }, i.prototype.inspect = function() {
                        return (this.red ? "<BN-R: " : "<BN: ") + this.toString(16) + ">"
                    };
                    var s = ["", "0", "00", "000", "0000", "00000", "000000", "0000000", "00000000", "000000000", "0000000000", "00000000000", "000000000000", "0000000000000", "00000000000000", "000000000000000", "0000000000000000", "00000000000000000", "000000000000000000", "0000000000000000000", "00000000000000000000", "000000000000000000000", "0000000000000000000000", "00000000000000000000000", "000000000000000000000000", "0000000000000000000000000"],
                        c = [0, 0, 25, 16, 12, 11, 10, 9, 8, 8, 7, 7, 7, 7, 6, 6, 6, 6, 6, 6, 6, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5],
                        a = [0, 0, 33554432, 43046721, 16777216, 48828125, 60466176, 40353607, 16777216, 43046721, 1e7, 19487171, 35831808, 62748517, 7529536, 11390625, 16777216, 24137569, 34012224, 47045881, 64e6, 4084101, 5153632, 6436343, 7962624, 9765625, 11881376, 14348907, 17210368, 20511149, 243e5, 28629151, 33554432, 39135393, 45435424, 52521875, 60466176];
                    i.prototype.toString = function(e, t) {
                        if (16 === (e = e || 10) || "hex" === e) {
                            for (var n = "", i = 0, f = (t = 0 | t || 1, 0), d = 0; d < this.length; d++) {
                                var o = this.words[d],
                                    h = (16777215 & (o << i | f)).toString(16);
                                n = 0 !== (f = o >>> 24 - i & 16777215) || d !== this.length - 1 ? s[6 - h.length] + h + n : h + n, (i += 2) >= 26 && (i -= 26, d--)
                            }
                            for (0 !== f && (n = f.toString(16) + n); n.length % t != 0;) n = "0" + n;
                            return this.sign && (n = "-" + n), n
                        }
                        if (e === (0 | e) && e >= 2 && e <= 36) {
                            var u = c[e],
                                b = a[e],
                                p = (n = "", this.clone());
                            for (p.sign = !1; 0 !== p.cmpn(0);) {
                                var l = p.modn(b).toString(e);
                                n = 0 !== (p = p.idivn(b)).cmpn(0) ? s[u - l.length] + l + n : l + n
                            }
                            return 0 === this.cmpn(0) && (n = "0" + n), this.sign && (n = "-" + n), n
                        }
                        r(!1, "Base should be between 2 and 36")
                    }, i.prototype.toJSON = function() {
                        return this.toString(16)
                    }, i.prototype.toArray = function(e) {
                        this.strip();
                        var t = new Array(this.byteLength());
                        t[0] = 0;
                        var r = this.clone();
                        if ("le" !== e)
                            for (var n = 0; 0 !== r.cmpn(0); n++) {
                                var i = r.andln(255);
                                r.ishrn(8), t[t.length - n - 1] = i
                            } else
                                for (n = 0; 0 !== r.cmpn(0); n++) {
                                    i = r.andln(255);
                                    r.ishrn(8), t[n] = i
                                }
                        return t
                    }, Math.clz32 ? i.prototype._countBits = function(e) {
                        return 32 - Math.clz32(e)
                    } : i.prototype._countBits = function(e) {
                        var t = e,
                            r = 0;
                        return t >= 4096 && (r += 13, t >>>= 13), t >= 64 && (r += 7, t >>>= 7), t >= 8 && (r += 4, t >>>= 4), t >= 2 && (r += 2, t >>>= 2), r + t
                    }, i.prototype._zeroBits = function(e) {
                        if (0 === e) return 26;
                        var t = e,
                            r = 0;
                        return 0 == (8191 & t) && (r += 13, t >>>= 13), 0 == (127 & t) && (r += 7, t >>>= 7), 0 == (15 & t) && (r += 4, t >>>= 4), 0 == (3 & t) && (r += 2, t >>>= 2), 0 == (1 & t) && r++, r
                    }, i.prototype.bitLength = function() {
                        var e = this.words[this.length - 1],
                            t = this._countBits(e);
                        return 26 * (this.length - 1) + t
                    }, i.prototype.zeroBits = function() {
                        if (0 === this.cmpn(0)) return 0;
                        for (var e = 0, t = 0; t < this.length; t++) {
                            var r = this._zeroBits(this.words[t]);
                            if (e += r, 26 !== r) break
                        }
                        return e
                    }, i.prototype.byteLength = function() {
                        return Math.ceil(this.bitLength() / 8)
                    }, i.prototype.neg = function() {
                        if (0 === this.cmpn(0)) return this.clone();
                        var e = this.clone();
                        return e.sign = !this.sign, e
                    }, i.prototype.ior = function(e) {
                        for (this.sign = this.sign || e.sign; this.length < e.length;) this.words[this.length++] = 0;
                        for (var t = 0; t < e.length; t++) this.words[t] = this.words[t] | e.words[t];
                        return this.strip()
                    }, i.prototype.or = function(e) {
                        return this.length > e.length ? this.clone().ior(e) : e.clone().ior(this)
                    }, i.prototype.iand = function(e) {
                        var t;
                        this.sign = this.sign && e.sign, t = this.length > e.length ? e : this;
                        for (var r = 0; r < t.length; r++) this.words[r] = this.words[r] & e.words[r];
                        return this.length = t.length, this.strip()
                    }, i.prototype.and = function(e) {
                        return this.length > e.length ? this.clone().iand(e) : e.clone().iand(this)
                    }, i.prototype.ixor = function(e) {
                        var t, r;
                        this.sign = this.sign || e.sign, this.length > e.length ? (t = this, r = e) : (t = e, r = this);
                        for (var n = 0; n < r.length; n++) this.words[n] = t.words[n] ^ r.words[n];
                        if (this !== t)
                            for (; n < t.length; n++) this.words[n] = t.words[n];
                        return this.length = t.length, this.strip()
                    }, i.prototype.xor = function(e) {
                        return this.length > e.length ? this.clone().ixor(e) : e.clone().ixor(this)
                    }, i.prototype.setn = function(e, t) {
                        r("number" == typeof e && e >= 0);
                        for (var n = e / 26 | 0, i = e % 26; this.length <= n;) this.words[this.length++] = 0;
                        return this.words[n] = t ? this.words[n] | 1 << i : this.words[n] & ~(1 << i), this.strip()
                    }, i.prototype.iadd = function(e) {
                        if (this.sign && !e.sign) {
                            this.sign = !1;
                            var t = this.isub(e);
                            return this.sign = !this.sign, this._normSign()
                        }
                        if (!this.sign && e.sign) {
                            e.sign = !1;
                            t = this.isub(e);
                            return e.sign = !0, t._normSign()
                        }
                        var r, n;
                        this.length > e.length ? (r = this, n = e) : (r = e, n = this);
                        for (var i = 0, f = 0; f < n.length; f++) {
                            t = r.words[f] + n.words[f] + i;
                            this.words[f] = 67108863 & t, i = t >>> 26
                        }
                        for (; 0 !== i && f < r.length; f++) {
                            t = r.words[f] + i;
                            this.words[f] = 67108863 & t, i = t >>> 26
                        }
                        if (this.length = r.length, 0 !== i) this.words[this.length] = i, this.length++;
                        else if (r !== this)
                            for (; f < r.length; f++) this.words[f] = r.words[f];
                        return this
                    }, i.prototype.add = function(e) {
                        if (e.sign && !this.sign) {
                            e.sign = !1;
                            var t = this.sub(e);
                            return e.sign = !0, t
                        }
                        if (!e.sign && this.sign) {
                            this.sign = !1;
                            t = e.sub(this);
                            return this.sign = !0, t
                        }
                        return this.length > e.length ? this.clone().iadd(e) : e.clone().iadd(this)
                    }, i.prototype.isub = function(e) {
                        if (e.sign) {
                            e.sign = !1;
                            var t = this.iadd(e);
                            return e.sign = !0, t._normSign()
                        }
                        if (this.sign) return this.sign = !1, this.iadd(e), this.sign = !0, this._normSign();
                        var r, n, i = this.cmp(e);
                        if (0 === i) return this.sign = !1, this.length = 1, this.words[0] = 0, this;
                        i > 0 ? (r = this, n = e) : (r = e, n = this);
                        for (var f = 0, d = 0; d < n.length; d++) {
                            f = (t = r.words[d] - n.words[d] + f) >> 26, this.words[d] = 67108863 & t
                        }
                        for (; 0 !== f && d < r.length; d++) {
                            f = (t = r.words[d] + f) >> 26, this.words[d] = 67108863 & t
                        }
                        if (0 === f && d < r.length && r !== this)
                            for (; d < r.length; d++) this.words[d] = r.words[d];
                        return this.length = Math.max(this.length, d), r !== this && (this.sign = !0), this.strip()
                    }, i.prototype.sub = function(e) {
                        return this.clone().isub(e)
                    }, i.prototype._smallMulTo = function(e, t) {
                        t.sign = e.sign !== this.sign, t.length = this.length + e.length;
                        for (var r = 0, n = 0; n < t.length - 1; n++) {
                            for (var i = r >>> 26, f = 67108863 & r, d = Math.min(n, e.length - 1), s = Math.max(0, n - this.length + 1); s <= d; s++) {
                                var c = n - s,
                                    a = (0 | this.words[c]) * (0 | e.words[s]),
                                    o = 67108863 & a;
                                f = 67108863 & (o = o + f | 0), i = (i = i + (a / 67108864 | 0) | 0) + (o >>> 26) | 0
                            }
                            t.words[n] = f, r = i
                        }
                        return 0 !== r ? t.words[n] = r : t.length--, t.strip()
                    }, i.prototype._bigMulTo = function(e, t) {
                        t.sign = e.sign !== this.sign, t.length = this.length + e.length;
                        for (var r = 0, n = 0, i = 0; i < t.length - 1; i++) {
                            var f = n;
                            n = 0;
                            for (var d = 67108863 & r, s = Math.min(i, e.length - 1), c = Math.max(0, i - this.length + 1); c <= s; c++) {
                                var a = i - c,
                                    o = (0 | this.words[a]) * (0 | e.words[c]),
                                    h = 67108863 & o;
                                d = 67108863 & (h = h + d | 0), n += (f = (f = f + (o / 67108864 | 0) | 0) + (h >>> 26) | 0) >>> 26, f &= 67108863
                            }
                            t.words[i] = d, r = f, f = n
                        }
                        return 0 !== r ? t.words[i] = r : t.length--, t.strip()
                    }, i.prototype.mulTo = function(e, t) {
                        return this.length + e.length < 63 ? this._smallMulTo(e, t) : this._bigMulTo(e, t)
                    }, i.prototype.mul = function(e) {
                        var t = new i(null);
                        return t.words = new Array(this.length + e.length), this.mulTo(e, t)
                    }, i.prototype.imul = function(e) {
                        if (0 === this.cmpn(0) || 0 === e.cmpn(0)) return this.words[0] = 0, this.length = 1, this;
                        var t = this.length,
                            r = e.length;
                        this.sign = e.sign !== this.sign, this.length = this.length + e.length, this.words[this.length - 1] = 0;
                        for (var n = this.length - 2; n >= 0; n--) {
                            for (var i = 0, f = 0, d = Math.min(n, r - 1), s = Math.max(0, n - t + 1); s <= d; s++) {
                                var c = n - s,
                                    a = this.words[c] * e.words[s],
                                    o = 67108863 & a;
                                i += a / 67108864 | 0, f = 67108863 & (o += f), i += o >>> 26
                            }
                            this.words[n] = f, this.words[n + 1] += i, i = 0
                        }
                        for (i = 0, c = 1; c < this.length; c++) {
                            var h = this.words[c] + i;
                            this.words[c] = 67108863 & h, i = h >>> 26
                        }
                        return this.strip()
                    }, i.prototype.imuln = function(e) {
                        r("number" == typeof e);
                        for (var t = 0, n = 0; n < this.length; n++) {
                            var i = this.words[n] * e,
                                f = (67108863 & i) + (67108863 & t);
                            t >>= 26, t += i / 67108864 | 0, t += f >>> 26, this.words[n] = 67108863 & f
                        }
                        return 0 !== t && (this.words[n] = t, this.length++), this
                    }, i.prototype.muln = function(e) {
                        return this.clone().imuln(e)
                    }, i.prototype.sqr = function() {
                        return this.mul(this)
                    }, i.prototype.isqr = function() {
                        return this.mul(this)
                    }, i.prototype.ishln = function(e) {
                        r("number" == typeof e && e >= 0);
                        var t = e % 26,
                            n = (e - t) / 26,
                            i = 67108863 >>> 26 - t << 26 - t;
                        if (0 !== t) {
                            for (var f = 0, d = 0; d < this.length; d++) {
                                var s = this.words[d] & i,
                                    c = this.words[d] - s << t;
                                this.words[d] = c | f, f = s >>> 26 - t
                            }
                            f && (this.words[d] = f, this.length++)
                        }
                        if (0 !== n) {
                            for (d = this.length - 1; d >= 0; d--) this.words[d + n] = this.words[d];
                            for (d = 0; d < n; d++) this.words[d] = 0;
                            this.length += n
                        }
                        return this.strip()
                    }, i.prototype.ishrn = function(e, t, n) {
                        var i;
                        r("number" == typeof e && e >= 0), i = t ? (t - t % 26) / 26 : 0;
                        var f = e % 26,
                            d = Math.min((e - f) / 26, this.length),
                            s = 67108863 ^ 67108863 >>> f << f,
                            c = n;
                        if (i -= d, i = Math.max(0, i), c) {
                            for (var a = 0; a < d; a++) c.words[a] = this.words[a];
                            c.length = d
                        }
                        if (0 === d);
                        else if (this.length > d) {
                            this.length -= d;
                            for (a = 0; a < this.length; a++) this.words[a] = this.words[a + d]
                        } else this.words[0] = 0, this.length = 1;
                        var o = 0;
                        for (a = this.length - 1; a >= 0 && (0 !== o || a >= i); a--) {
                            var h = this.words[a];
                            this.words[a] = o << 26 - f | h >>> f, o = h & s
                        }
                        return c && 0 !== o && (c.words[c.length++] = o), 0 === this.length && (this.words[0] = 0, this.length = 1), this.strip(), this
                    }, i.prototype.shln = function(e) {
                        return this.clone().ishln(e)
                    }, i.prototype.shrn = function(e) {
                        return this.clone().ishrn(e)
                    }, i.prototype.testn = function(e) {
                        r("number" == typeof e && e >= 0);
                        var t = e % 26,
                            n = (e - t) / 26,
                            i = 1 << t;
                        return !(this.length <= n) && !!(this.words[n] & i)
                    }, i.prototype.imaskn = function(e) {
                        r("number" == typeof e && e >= 0);
                        var t = e % 26,
                            n = (e - t) / 26;
                        if (r(!this.sign, "imaskn works only with positive numbers"), 0 !== t && n++, this.length = Math.min(n, this.length), 0 !== t) {
                            var i = 67108863 ^ 67108863 >>> t << t;
                            this.words[this.length - 1] &= i
                        }
                        return this.strip()
                    }, i.prototype.maskn = function(e) {
                        return this.clone().imaskn(e)
                    }, i.prototype.iaddn = function(e) {
                        return r("number" == typeof e), e < 0 ? this.isubn(-e) : this.sign ? 1 === this.length && this.words[0] < e ? (this.words[0] = e - this.words[0], this.sign = !1, this) : (this.sign = !1, this.isubn(e), this.sign = !0, this) : this._iaddn(e)
                    }, i.prototype._iaddn = function(e) {
                        this.words[0] += e;
                        for (var t = 0; t < this.length && this.words[t] >= 67108864; t++) this.words[t] -= 67108864, t === this.length - 1 ? this.words[t + 1] = 1 : this.words[t + 1]++;
                        return this.length = Math.max(this.length, t + 1), this
                    }, i.prototype.isubn = function(e) {
                        if (r("number" == typeof e), e < 0) return this.iaddn(-e);
                        if (this.sign) return this.sign = !1, this.iaddn(e), this.sign = !0, this;
                        this.words[0] -= e;
                        for (var t = 0; t < this.length && this.words[t] < 0; t++) this.words[t] += 67108864, this.words[t + 1] -= 1;
                        return this.strip()
                    }, i.prototype.addn = function(e) {
                        return this.clone().iaddn(e)
                    }, i.prototype.subn = function(e) {
                        return this.clone().isubn(e)
                    }, i.prototype.iabs = function() {
                        return this.sign = !1, this
                    }, i.prototype.abs = function() {
                        return this.clone().iabs()
                    }, i.prototype._ishlnsubmul = function(e, t, n) {
                        var i = e.length + n;
                        if (this.words.length < i) {
                            for (var f = new Array(i), d = 0; d < this.length; d++) f[d] = this.words[d];
                            this.words = f
                        } else d = this.length;
                        for (this.length = Math.max(this.length, i); d < this.length; d++) this.words[d] = 0;
                        var s = 0;
                        for (d = 0; d < e.length; d++) {
                            var c = this.words[d + n] + s,
                                a = e.words[d] * t;
                            s = ((c -= 67108863 & a) >> 26) - (a / 67108864 | 0), this.words[d + n] = 67108863 & c
                        }
                        for (; d < this.length - n; d++) {
                            s = (c = this.words[d + n] + s) >> 26, this.words[d + n] = 67108863 & c
                        }
                        if (0 === s) return this.strip();
                        r(-1 === s), s = 0;
                        for (d = 0; d < this.length; d++) {
                            s = (c = -this.words[d] + s) >> 26, this.words[d] = 67108863 & c
                        }
                        return this.sign = !0, this.strip()
                    }, i.prototype._wordDiv = function(e, t) {
                        var r = (this.length, e.length),
                            n = this.clone(),
                            f = e,
                            d = f.words[f.length - 1];
                        0 !== (r = 26 - this._countBits(d)) && (f = f.shln(r), n.ishln(r), d = f.words[f.length - 1]);
                        var s, c = n.length - f.length;
                        if ("mod" !== t) {
                            (s = new i(null)).length = c + 1, s.words = new Array(s.length);
                            for (var a = 0; a < s.length; a++) s.words[a] = 0
                        }
                        var o = n.clone()._ishlnsubmul(f, 1, c);
                        o.sign || (n = o, s && (s.words[c] = 1));
                        for (var h = c - 1; h >= 0; h--) {
                            var u = 67108864 * n.words[f.length + h] + n.words[f.length + h - 1];
                            for (u = Math.min(u / d | 0, 67108863), n._ishlnsubmul(f, u, h); n.sign;) u--, n.sign = !1, n._ishlnsubmul(f, 1, h), 0 !== n.cmpn(0) && (n.sign = !n.sign);
                            s && (s.words[h] = u)
                        }
                        return s && s.strip(), n.strip(), "div" !== t && 0 !== r && n.ishrn(r), {
                            div: s || null,
                            mod: n
                        }
                    }, i.prototype.divmod = function(e, t) {
                        if (r(0 !== e.cmpn(0)), this.sign && !e.sign) {
                            var n, f = this.neg().divmod(e, t);
                            return "mod" !== t && (d = f.div.neg()), "div" !== t && (n = 0 === f.mod.cmpn(0) ? f.mod : e.sub(f.mod)), {
                                div: d,
                                mod: n
                            }
                        }
                        if (!this.sign && e.sign) {
                            var d;
                            f = this.divmod(e.neg(), t);
                            return "mod" !== t && (d = f.div.neg()), {
                                div: d,
                                mod: f.mod
                            }
                        }
                        return this.sign && e.sign ? this.neg().divmod(e.neg(), t) : e.length > this.length || this.cmp(e) < 0 ? {
                            div: new i(0),
                            mod: this
                        } : 1 === e.length ? "div" === t ? {
                            div: this.divn(e.words[0]),
                            mod: null
                        } : "mod" === t ? {
                            div: null,
                            mod: new i(this.modn(e.words[0]))
                        } : {
                            div: this.divn(e.words[0]),
                            mod: new i(this.modn(e.words[0]))
                        } : this._wordDiv(e, t)
                    }, i.prototype.div = function(e) {
                        return this.divmod(e, "div").div
                    }, i.prototype.mod = function(e) {
                        return this.divmod(e, "mod").mod
                    }, i.prototype.divRound = function(e) {
                        var t = this.divmod(e);
                        if (0 === t.mod.cmpn(0)) return t.div;
                        var r = t.div.sign ? t.mod.isub(e) : t.mod,
                            n = e.shrn(1),
                            i = e.andln(1),
                            f = r.cmp(n);
                        return f < 0 || 1 === i && 0 === f ? t.div : t.div.sign ? t.div.isubn(1) : t.div.iaddn(1)
                    }, i.prototype.modn = function(e) {
                        r(e <= 67108863);
                        for (var t = (1 << 26) % e, n = 0, i = this.length - 1; i >= 0; i--) n = (t * n + this.words[i]) % e;
                        return n
                    }, i.prototype.idivn = function(e) {
                        r(e <= 67108863);
                        for (var t = 0, n = this.length - 1; n >= 0; n--) {
                            var i = this.words[n] + 67108864 * t;
                            this.words[n] = i / e | 0, t = i % e
                        }
                        return this.strip()
                    }, i.prototype.divn = function(e) {
                        return this.clone().idivn(e)
                    }, i.prototype.egcd = function(e) {
                        r(!e.sign), r(0 !== e.cmpn(0));
                        var t = this,
                            n = e.clone();
                        t = t.sign ? t.mod(e) : t.clone();
                        for (var f = new i(1), d = new i(0), s = new i(0), c = new i(1), a = 0; t.isEven() && n.isEven();) t.ishrn(1), n.ishrn(1), ++a;
                        for (var o = n.clone(), h = t.clone(); 0 !== t.cmpn(0);) {
                            for (; t.isEven();) t.ishrn(1), f.isEven() && d.isEven() ? (f.ishrn(1), d.ishrn(1)) : (f.iadd(o).ishrn(1), d.isub(h).ishrn(1));
                            for (; n.isEven();) n.ishrn(1), s.isEven() && c.isEven() ? (s.ishrn(1), c.ishrn(1)) : (s.iadd(o).ishrn(1), c.isub(h).ishrn(1));
                            t.cmp(n) >= 0 ? (t.isub(n), f.isub(s), d.isub(c)) : (n.isub(t), s.isub(f), c.isub(d))
                        }
                        return {
                            a: s,
                            b: c,
                            gcd: n.ishln(a)
                        }
                    }, i.prototype._invmp = function(e) {
                        r(!e.sign), r(0 !== e.cmpn(0));
                        var t = this,
                            n = e.clone();
                        t = t.sign ? t.mod(e) : t.clone();
                        for (var f = new i(1), d = new i(0), s = n.clone(); t.cmpn(1) > 0 && n.cmpn(1) > 0;) {
                            for (; t.isEven();) t.ishrn(1), f.isEven() ? f.ishrn(1) : f.iadd(s).ishrn(1);
                            for (; n.isEven();) n.ishrn(1), d.isEven() ? d.ishrn(1) : d.iadd(s).ishrn(1);
                            t.cmp(n) >= 0 ? (t.isub(n), f.isub(d)) : (n.isub(t), d.isub(f))
                        }
                        return 0 === t.cmpn(1) ? f : d
                    }, i.prototype.gcd = function(e) {
                        if (0 === this.cmpn(0)) return e.clone();
                        if (0 === e.cmpn(0)) return this.clone();
                        var t = this.clone(),
                            r = e.clone();
                        t.sign = !1, r.sign = !1;
                        for (var n = 0; t.isEven() && r.isEven(); n++) t.ishrn(1), r.ishrn(1);
                        for (;;) {
                            for (; t.isEven();) t.ishrn(1);
                            for (; r.isEven();) r.ishrn(1);
                            var i = t.cmp(r);
                            if (i < 0) {
                                var f = t;
                                t = r, r = f
                            } else if (0 === i || 0 === r.cmpn(1)) break;
                            t.isub(r)
                        }
                        return r.ishln(n)
                    }, i.prototype.invm = function(e) {
                        return this.egcd(e).a.mod(e)
                    }, i.prototype.isEven = function() {
                        return 0 == (1 & this.words[0])
                    }, i.prototype.isOdd = function() {
                        return 1 == (1 & this.words[0])
                    }, i.prototype.andln = function(e) {
                        return this.words[0] & e
                    }, i.prototype.bincn = function(e) {
                        r("number" == typeof e);
                        var t = e % 26,
                            n = (e - t) / 26,
                            i = 1 << t;
                        if (this.length <= n) {
                            for (var f = this.length; f < n + 1; f++) this.words[f] = 0;
                            return this.words[n] |= i, this.length = n + 1, this
                        }
                        var d = i;
                        for (f = n; 0 !== d && f < this.length; f++) {
                            var s = this.words[f];
                            d = (s += d) >>> 26, s &= 67108863, this.words[f] = s
                        }
                        return 0 !== d && (this.words[f] = d, this.length++), this
                    }, i.prototype.cmpn = function(e) {
                        var t, r = e < 0;
                        if (r && (e = -e), this.sign && !r) return -1;
                        if (!this.sign && r) return 1;
                        if (e &= 67108863, this.strip(), this.length > 1) t = 1;
                        else {
                            var n = this.words[0];
                            t = n === e ? 0 : n < e ? -1 : 1
                        }
                        return this.sign && (t = -t), t
                    }, i.prototype.cmp = function(e) {
                        if (this.sign && !e.sign) return -1;
                        if (!this.sign && e.sign) return 1;
                        var t = this.ucmp(e);
                        return this.sign ? -t : t
                    }, i.prototype.ucmp = function(e) {
                        if (this.length > e.length) return 1;
                        if (this.length < e.length) return -1;
                        for (var t = 0, r = this.length - 1; r >= 0; r--) {
                            var n = this.words[r],
                                i = e.words[r];
                            if (n !== i) {
                                n < i ? t = -1 : n > i && (t = 1);
                                break
                            }
                        }
                        return t
                    }, i.red = function(e) {
                        return new g(e)
                    }, i.prototype.toRed = function(e) {
                        return r(!this.red, "Already a number in reduction context"), r(!this.sign, "red works only with positives"), e.convertTo(this)._forceRed(e)
                    }, i.prototype.fromRed = function() {
                        return r(this.red, "fromRed works only with numbers in reduction context"), this.red.convertFrom(this)
                    }, i.prototype._forceRed = function(e) {
                        return this.red = e, this
                    }, i.prototype.forceRed = function(e) {
                        return r(!this.red, "Already a number in reduction context"), this._forceRed(e)
                    }, i.prototype.redAdd = function(e) {
                        return r(this.red, "redAdd works only with red numbers"), this.red.add(this, e)
                    }, i.prototype.redIAdd = function(e) {
                        return r(this.red, "redIAdd works only with red numbers"), this.red.iadd(this, e)
                    }, i.prototype.redSub = function(e) {
                        return r(this.red, "redSub works only with red numbers"), this.red.sub(this, e)
                    }, i.prototype.redISub = function(e) {
                        return r(this.red, "redISub works only with red numbers"), this.red.isub(this, e)
                    }, i.prototype.redShl = function(e) {
                        return r(this.red, "redShl works only with red numbers"), this.red.shl(this, e)
                    }, i.prototype.redMul = function(e) {
                        return r(this.red, "redMul works only with red numbers"), this.red._verify2(this, e), this.red.mul(this, e)
                    }, i.prototype.redIMul = function(e) {
                        return r(this.red, "redMul works only with red numbers"), this.red._verify2(this, e), this.red.imul(this, e)
                    }, i.prototype.redSqr = function() {
                        return r(this.red, "redSqr works only with red numbers"), this.red._verify1(this), this.red.sqr(this)
                    }, i.prototype.redISqr = function() {
                        return r(this.red, "redISqr works only with red numbers"), this.red._verify1(this), this.red.isqr(this)
                    }, i.prototype.redSqrt = function() {
                        return r(this.red, "redSqrt works only with red numbers"), this.red._verify1(this), this.red.sqrt(this)
                    }, i.prototype.redInvm = function() {
                        return r(this.red, "redInvm works only with red numbers"), this.red._verify1(this), this.red.invm(this)
                    }, i.prototype.redNeg = function() {
                        return r(this.red, "redNeg works only with red numbers"), this.red._verify1(this), this.red.neg(this)
                    }, i.prototype.redPow = function(e) {
                        return r(this.red && !e.red, "redPow(normalNum)"), this.red._verify1(this), this.red.pow(this, e)
                    };
                    var o = {
                        k256: null,
                        p224: null,
                        p192: null,
                        p25519: null
                    };

                    function h(e, t) {
                        this.name = e, this.p = new i(t, 16), this.n = this.p.bitLength(), this.k = new i(1).ishln(this.n).isub(this.p), this.tmp = this._tmp()
                    }

                    function u() {
                        h.call(this, "k256", "ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffe fffffc2f")
                    }

                    function b() {
                        h.call(this, "p224", "ffffffff ffffffff ffffffff ffffffff 00000000 00000000 00000001")
                    }

                    function p() {
                        h.call(this, "p192", "ffffffff ffffffff ffffffff fffffffe ffffffff ffffffff")
                    }

                    function l() {
                        h.call(this, "25519", "7fffffffffffffff ffffffffffffffff ffffffffffffffff ffffffffffffffed")
                    }

                    function g(e) {
                        if ("string" == typeof e) {
                            var t = i._prime(e);
                            this.m = t.p, this.prime = t
                        } else this.m = e, this.prime = null
                    }

                    function m(e) {
                        g.call(this, e), this.shift = this.m.bitLength(), this.shift % 26 != 0 && (this.shift += 26 - this.shift % 26), this.r = new i(1).ishln(this.shift), this.r2 = this.imod(this.r.sqr()), this.rinv = this.r._invmp(this.m), this.minv = this.rinv.mul(this.r).isubn(1).div(this.m), this.minv.sign = !0, this.minv = this.minv.mod(this.r)
                    }
                    h.prototype._tmp = function() {
                        var e = new i(null);
                        return e.words = new Array(Math.ceil(this.n / 13)), e
                    }, h.prototype.ireduce = function(e) {
                        var t, r = e;
                        do {
                            this.split(r, this.tmp), t = (r = (r = this.imulK(r)).iadd(this.tmp)).bitLength()
                        } while (t > this.n);
                        var n = t < this.n ? -1 : r.ucmp(this.p);
                        return 0 === n ? (r.words[0] = 0, r.length = 1) : n > 0 ? r.isub(this.p) : r.strip(), r
                    }, h.prototype.split = function(e, t) {
                        e.ishrn(this.n, 0, t)
                    }, h.prototype.imulK = function(e) {
                        return e.imul(this.k)
                    }, n(u, h), u.prototype.split = function(e, t) {
                        for (var r = Math.min(e.length, 9), n = 0; n < r; n++) t.words[n] = e.words[n];
                        if (t.length = r, e.length <= 9) return e.words[0] = 0, void(e.length = 1);
                        var i = e.words[9];
                        t.words[t.length++] = 4194303 & i;
                        for (n = 10; n < e.length; n++) {
                            var f = e.words[n];
                            e.words[n - 10] = (4194303 & f) << 4 | i >>> 22, i = f
                        }
                        e.words[n - 10] = i >>> 22, e.length -= 9
                    }, u.prototype.imulK = function(e) {
                        var t;
                        e.words[e.length] = 0, e.words[e.length + 1] = 0, e.length += 2;
                        for (var r = 0, n = 0; n < e.length; n++) {
                            var i = e.words[n];
                            t = 64 * i, t += (r += 977 * i) / 67108864 | 0, r &= 67108863, e.words[n] = r, r = t
                        }
                        return 0 === e.words[e.length - 1] && (e.length--, 0 === e.words[e.length - 1] && e.length--), e
                    }, n(b, h), n(p, h), n(l, h), l.prototype.imulK = function(e) {
                        for (var t = 0, r = 0; r < e.length; r++) {
                            var n = 19 * e.words[r] + t,
                                i = 67108863 & n;
                            n >>>= 26, e.words[r] = i, t = n
                        }
                        return 0 !== t && (e.words[e.length++] = t), e
                    }, i._prime = function(e) {
                        if (o[e]) return o[e];
                        var t;
                        if ("k256" === e) t = new u;
                        else if ("p224" === e) t = new b;
                        else if ("p192" === e) t = new p;
                        else {
                            if ("p25519" !== e) throw new Error("Unknown prime " + e);
                            t = new l
                        }
                        return o[e] = t, t
                    }, g.prototype._verify1 = function(e) {
                        r(!e.sign, "red works only with positives"), r(e.red, "red works only with red numbers")
                    }, g.prototype._verify2 = function(e, t) {
                        r(!e.sign && !t.sign, "red works only with positives"), r(e.red && e.red === t.red, "red works only with red numbers")
                    }, g.prototype.imod = function(e) {
                        return this.prime ? this.prime.ireduce(e)._forceRed(this) : e.mod(this.m)._forceRed(this)
                    }, g.prototype.neg = function(e) {
                        var t = e.clone();
                        return t.sign = !t.sign, t.iadd(this.m)._forceRed(this)
                    }, g.prototype.add = function(e, t) {
                        this._verify2(e, t);
                        var r = e.add(t);
                        return r.cmp(this.m) >= 0 && r.isub(this.m), r._forceRed(this)
                    }, g.prototype.iadd = function(e, t) {
                        this._verify2(e, t);
                        var r = e.iadd(t);
                        return r.cmp(this.m) >= 0 && r.isub(this.m), r
                    }, g.prototype.sub = function(e, t) {
                        this._verify2(e, t);
                        var r = e.sub(t);
                        return r.cmpn(0) < 0 && r.iadd(this.m), r._forceRed(this)
                    }, g.prototype.isub = function(e, t) {
                        this._verify2(e, t);
                        var r = e.isub(t);
                        return r.cmpn(0) < 0 && r.iadd(this.m), r
                    }, g.prototype.shl = function(e, t) {
                        return this._verify1(e), this.imod(e.shln(t))
                    }, g.prototype.imul = function(e, t) {
                        return this._verify2(e, t), this.imod(e.imul(t))
                    }, g.prototype.mul = function(e, t) {
                        return this._verify2(e, t), this.imod(e.mul(t))
                    }, g.prototype.isqr = function(e) {
                        return this.imul(e, e)
                    }, g.prototype.sqr = function(e) {
                        return this.mul(e, e)
                    }, g.prototype.sqrt = function(e) {
                        if (0 === e.cmpn(0)) return e.clone();
                        var t = this.m.andln(3);
                        if (r(t % 2 == 1), 3 === t) {
                            var n = this.m.add(new i(1)).ishrn(2);
                            return u = this.pow(e, n)
                        }
                        for (var f = this.m.subn(1), d = 0; 0 !== f.cmpn(0) && 0 === f.andln(1);) d++, f.ishrn(1);
                        r(0 !== f.cmpn(0));
                        var s = new i(1).toRed(this),
                            c = s.redNeg(),
                            a = this.m.subn(1).ishrn(1),
                            o = this.m.bitLength();
                        for (o = new i(2 * o * o).toRed(this); 0 !== this.pow(o, a).cmp(c);) o.redIAdd(c);
                        for (var h = this.pow(o, f), u = this.pow(e, f.addn(1).ishrn(1)), b = this.pow(e, f), p = d; 0 !== b.cmp(s);) {
                            for (var l = b, g = 0; 0 !== l.cmp(s); g++) l = l.redSqr();
                            r(g < p);
                            var m = this.pow(h, new i(1).ishln(p - g - 1));
                            u = u.redMul(m), h = m.redSqr(), b = b.redMul(h), p = g
                        }
                        return u
                    }, g.prototype.invm = function(e) {
                        var t = e._invmp(this.m);
                        return t.sign ? (t.sign = !1, this.imod(t).redNeg()) : this.imod(t)
                    }, g.prototype.pow = function(e, t) {
                        var r = [];
                        if (0 === t.cmpn(0)) return new i(1);
                        for (var n = t.clone(); 0 !== n.cmpn(0);) r.push(n.andln(1)), n.ishrn(1);
                        for (var f = e, d = 0; d < r.length && 0 === r[d]; d++, f = this.sqr(f));
                        if (++d < r.length)
                            for (n = this.sqr(f); d < r.length; d++, n = this.sqr(n)) 0 !== r[d] && (f = this.mul(f, n));
                        return f
                    }, g.prototype.convertTo = function(e) {
                        var t = e.mod(this.m);
                        return t === e ? t.clone() : t
                    }, g.prototype.convertFrom = function(e) {
                        var t = e.clone();
                        return t.red = null, t
                    }, i.mont = function(e) {
                        return new m(e)
                    }, n(m, g), m.prototype.convertTo = function(e) {
                        return this.imod(e.shln(this.shift))
                    }, m.prototype.convertFrom = function(e) {
                        var t = this.imod(e.mul(this.rinv));
                        return t.red = null, t
                    }, m.prototype.imul = function(e, t) {
                        if (0 === e.cmpn(0) || 0 === t.cmpn(0)) return e.words[0] = 0, e.length = 1, e;
                        var r = e.imul(t),
                            n = r.maskn(this.shift).mul(this.minv).imaskn(this.shift).mul(this.m),
                            i = r.isub(n).ishrn(this.shift),
                            f = i;
                        return i.cmp(this.m) >= 0 ? f = i.isub(this.m) : i.cmpn(0) < 0 && (f = i.iadd(this.m)), f._forceRed(this)
                    }, m.prototype.mul = function(e, t) {
                        if (0 === e.cmpn(0) || 0 === t.cmpn(0)) return new i(0)._forceRed(this);
                        var r = e.mul(t),
                            n = r.maskn(this.shift).mul(this.minv).imaskn(this.shift).mul(this.m),
                            f = r.isub(n).ishrn(this.shift),
                            d = f;
                        return f.cmp(this.m) >= 0 ? d = f.isub(this.m) : f.cmpn(0) < 0 && (d = f.iadd(this.m)), d._forceRed(this)
                    }, m.prototype.invm = function(e) {
                        return this.imod(e._invmp(this.m).mul(this.r2))._forceRed(this)
                    }
                }(e, this)
            }).call(this, r(81)(e))
        },
        5756: function(e, t) {
            "function" == typeof Object.create ? e.exports = function(e, t) {
                e.super_ = t, e.prototype = Object.create(t.prototype, {
                    constructor: {
                        value: e,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                })
            } : e.exports = function(e, t) {
                e.super_ = t;
                var r = function() {};
                r.prototype = t.prototype, e.prototype = new r, e.prototype.constructor = e
            }
        },
        6095: function(e, t) {
            function r(e, t) {
                if (!e) throw new Error(t || "Assertion failed")
            }
            e.exports = r, r.equal = function(e, t, r) {
                if (e != t) throw new Error(r || "Assertion failed: " + e + " != " + t)
            }
        },
        6096: function(e, t, r) {
            "use strict";
            var n = r(5711),
                i = r(6095);

            function f() {
                this.pending = null, this.pendingTotal = 0, this.blockSize = this.constructor.blockSize, this.outSize = this.constructor.outSize, this.hmacStrength = this.constructor.hmacStrength, this.padLength = this.constructor.padLength / 8, this.endian = "big", this._delta8 = this.blockSize / 8, this._delta32 = this.blockSize / 32
            }
            t.BlockHash = f, f.prototype.update = function(e, t) {
                if (e = n.toArray(e, t), this.pending ? this.pending = this.pending.concat(e) : this.pending = e, this.pendingTotal += e.length, this.pending.length >= this._delta8) {
                    var r = (e = this.pending).length % this._delta8;
                    this.pending = e.slice(e.length - r, e.length), 0 === this.pending.length && (this.pending = null), e = n.join32(e, 0, e.length - r, this.endian);
                    for (var i = 0; i < e.length; i += this._delta32) this._update(e, i, i + this._delta32)
                }
                return this
            }, f.prototype.digest = function(e) {
                return this.update(this._pad()), i(null === this.pending), this._digest(e)
            }, f.prototype._pad = function() {
                var e = this.pendingTotal,
                    t = this._delta8,
                    r = t - (e + this.padLength) % t,
                    n = new Array(r + this.padLength);
                n[0] = 128;
                for (var i = 1; i < r; i++) n[i] = 0;
                if (e <<= 3, "big" === this.endian) {
                    for (var f = 8; f < this.padLength; f++) n[i++] = 0;
                    n[i++] = 0, n[i++] = 0, n[i++] = 0, n[i++] = 0, n[i++] = e >>> 24 & 255, n[i++] = e >>> 16 & 255, n[i++] = e >>> 8 & 255, n[i++] = 255 & e
                } else
                    for (n[i++] = 255 & e, n[i++] = e >>> 8 & 255, n[i++] = e >>> 16 & 255, n[i++] = e >>> 24 & 255, n[i++] = 0, n[i++] = 0, n[i++] = 0, n[i++] = 0, f = 8; f < this.padLength; f++) n[i++] = 0;
                return n
            }
        },
        6097: function(e, t, r) {
            var n = r(12).Buffer,
                i = new n(4);
            i.fill(0);

            function f(e, t, r) {
                for (var i = new n(t), f = r ? i.writeInt32BE : i.writeInt32LE, d = 0; d < e.length; d++) f.call(i, e[d], 4 * d, !0);
                return i
            }
            e.exports = {
                hash: function(e, t, r, d) {
                    return n.isBuffer(e) || (e = new n(e)), f(t(function(e, t) {
                        if (e.length % 4 != 0) {
                            var r = e.length + (4 - e.length % 4);
                            e = n.concat([e, i], r)
                        }
                        for (var f = [], d = t ? e.readInt32BE : e.readInt32LE, s = 0; s < e.length; s += 4) f.push(d.call(e, s));
                        return f
                    }(e, d), 8 * e.length), r, d)
                },
                hash2: function(e, t, r, i) {
                    return n.isBuffer(e) || (e = new n(e)), f(t(e, 8 * e.length), r, i)
                }
            }
        },
        6279: function(e, t, r) {
            "use strict";
            var n = t;
            n.base = r(10363), n.short = r(10364), n.mont = r(10365), n.edwards = r(10366)
        },
        6711: function(e, t, r) {
            "use strict";
            var n = r(5491),
                i = r(5677),
                f = r(5506),
                d = {
                    DCR: [1e8, 8],
                    mDCR: [1e5, 5],
                    uDCR: [100, 2],
                    bits: [100, 2],
                    dbits: [100, 2],
                    atoms: [1, 0]
                };

            function s(e, t) {
                if (!(this instanceof s)) return new s(e, t);
                if (n.isNumber(t)) {
                    if (t <= 0) throw new i.Unit.InvalidRate(t);
                    e /= t, t = s.DCR
                }
                this._value = this._from(e, t);
                var r = this;
                Object.keys(d).forEach((function(e) {
                    Object.defineProperty(r, e, {
                        get: function() {
                            return r.to(e)
                        },
                        enumerable: !0
                    })
                }))
            }
            Object.keys(d).forEach((function(e) {
                s[e] = e
            })), s.fromObject = function(e) {
                return f.checkArgument(n.isObject(e), "Argument is expected to be an object"), new s(e.amount, e.code)
            }, s.fromDCR = function(e) {
                return new s(e, s.DCR)
            }, s.fromMillis = s.fromMilis = function(e) {
                return new s(e, s.mDCR)
            }, s.fromMicros = s.fromDbits = function(e) {
                return new s(e, s.dbits)
            }, s.fromAtoms = function(e) {
                return new s(e, s.atoms)
            }, s.fromFiat = function(e, t) {
                return new s(e, t)
            }, s.prototype._from = function(e, t) {
                if (!d[t]) throw new i.Unit.UnknownCode(t);
                return parseInt((e * d[t][0]).toFixed())
            }, s.prototype.to = function(e) {
                if (n.isNumber(e)) {
                    if (e <= 0) throw new i.Unit.InvalidRate(e);
                    return parseFloat((this.DCR * e).toFixed(2))
                }
                if (!d[e]) throw new i.Unit.UnknownCode(e);
                var t = this._value / d[e][0];
                return parseFloat(t.toFixed(d[e][1]))
            }, s.prototype.toDCR = function() {
                return this.to(s.DCR)
            }, s.prototype.toMillis = s.prototype.toMilis = function() {
                return this.to(s.mDCR)
            }, s.prototype.toMicros = s.prototype.toDbits = function() {
                return this.to(s.dbits)
            }, s.prototype.toAtoms = function() {
                return this.to(s.atoms)
            }, s.prototype.atRate = function(e) {
                return this.to(e)
            }, s.prototype.toString = function() {
                return this.atoms + " atoms"
            }, s.prototype.toObject = s.prototype.toJSON = function() {
                return {
                    amount: this.DCR,
                    code: s.DCR
                }
            }, s.prototype.inspect = function() {
                return "<Unit: " + this.toString() + ">"
            }, e.exports = s
        },
        7570: function(e, t, r) {
            var n = t;
            n.utils = r(5711), n.common = r(6096), n.sha = r(10357), n.ripemd = r(10361), n.hmac = r(10362), n.sha1 = n.sha.sha1, n.sha256 = n.sha.sha256, n.sha224 = n.sha.sha224, n.sha384 = n.sha.sha384, n.sha512 = n.sha.sha512, n.ripemd160 = n.ripemd.ripemd160
        },
        7571: function(e, t, r) {
            "use strict";
            var n = r(5711).rotr32;

            function i(e, t, r) {
                return e & t ^ ~e & r
            }

            function f(e, t, r) {
                return e & t ^ e & r ^ t & r
            }

            function d(e, t, r) {
                return e ^ t ^ r
            }
            t.ft_1 = function(e, t, r, n) {
                return 0 === e ? i(t, r, n) : 1 === e || 3 === e ? d(t, r, n) : 2 === e ? f(t, r, n) : void 0
            }, t.ch32 = i, t.maj32 = f, t.p32 = d, t.s0_256 = function(e) {
                return n(e, 2) ^ n(e, 13) ^ n(e, 22)
            }, t.s1_256 = function(e) {
                return n(e, 6) ^ n(e, 11) ^ n(e, 25)
            }, t.g0_256 = function(e) {
                return n(e, 7) ^ n(e, 18) ^ e >>> 3
            }, t.g1_256 = function(e) {
                return n(e, 17) ^ n(e, 19) ^ e >>> 10
            }
        },
        7572: function(e, t, r) {
            "use strict";
            var n = r(5711),
                i = r(6096),
                f = r(7571),
                d = r(6095),
                s = n.sum32,
                c = n.sum32_4,
                a = n.sum32_5,
                o = f.ch32,
                h = f.maj32,
                u = f.s0_256,
                b = f.s1_256,
                p = f.g0_256,
                l = f.g1_256,
                g = i.BlockHash,
                m = [1116352408, 1899447441, 3049323471, 3921009573, 961987163, 1508970993, 2453635748, 2870763221, 3624381080, 310598401, 607225278, 1426881987, 1925078388, 2162078206, 2614888103, 3248222580, 3835390401, 4022224774, 264347078, 604807628, 770255983, 1249150122, 1555081692, 1996064986, 2554220882, 2821834349, 2952996808, 3210313671, 3336571891, 3584528711, 113926993, 338241895, 666307205, 773529912, 1294757372, 1396182291, 1695183700, 1986661051, 2177026350, 2456956037, 2730485921, 2820302411, 3259730800, 3345764771, 3516065817, 3600352804, 4094571909, 275423344, 430227734, 506948616, 659060556, 883997877, 958139571, 1322822218, 1537002063, 1747873779, 1955562222, 2024104815, 2227730452, 2361852424, 2428436474, 2756734187, 3204031479, 3329325298];

            function v() {
                if (!(this instanceof v)) return new v;
                g.call(this), this.h = [1779033703, 3144134277, 1013904242, 2773480762, 1359893119, 2600822924, 528734635, 1541459225], this.k = m, this.W = new Array(64)
            }
            n.inherits(v, g), e.exports = v, v.blockSize = 512, v.outSize = 256, v.hmacStrength = 192, v.padLength = 64, v.prototype._update = function(e, t) {
                for (var r = this.W, n = 0; n < 16; n++) r[n] = e[t + n];
                for (; n < r.length; n++) r[n] = c(l(r[n - 2]), r[n - 7], p(r[n - 15]), r[n - 16]);
                var i = this.h[0],
                    f = this.h[1],
                    g = this.h[2],
                    m = this.h[3],
                    v = this.h[4],
                    y = this.h[5],
                    w = this.h[6],
                    _ = this.h[7];
                for (d(this.k.length === r.length), n = 0; n < r.length; n++) {
                    var S = a(_, b(v), o(v, y, w), this.k[n], r[n]),
                        A = s(u(i), h(i, f, g));
                    _ = w, w = y, y = v, v = s(m, S), m = g, g = f, f = i, i = s(S, A)
                }
                this.h[0] = s(this.h[0], i), this.h[1] = s(this.h[1], f), this.h[2] = s(this.h[2], g), this.h[3] = s(this.h[3], m), this.h[4] = s(this.h[4], v), this.h[5] = s(this.h[5], y), this.h[6] = s(this.h[6], w), this.h[7] = s(this.h[7], _)
            }, v.prototype._digest = function(e) {
                return "hex" === e ? n.toHex32(this.h, "big") : n.split32(this.h, "big")
            }
        },
        7573: function(e, t, r) {
            "use strict";
            var n = r(5711),
                i = r(6096),
                f = r(6095),
                d = n.rotr64_hi,
                s = n.rotr64_lo,
                c = n.shr64_hi,
                a = n.shr64_lo,
                o = n.sum64,
                h = n.sum64_hi,
                u = n.sum64_lo,
                b = n.sum64_4_hi,
                p = n.sum64_4_lo,
                l = n.sum64_5_hi,
                g = n.sum64_5_lo,
                m = i.BlockHash,
                v = [1116352408, 3609767458, 1899447441, 602891725, 3049323471, 3964484399, 3921009573, 2173295548, 961987163, 4081628472, 1508970993, 3053834265, 2453635748, 2937671579, 2870763221, 3664609560, 3624381080, 2734883394, 310598401, 1164996542, 607225278, 1323610764, 1426881987, 3590304994, 1925078388, 4068182383, 2162078206, 991336113, 2614888103, 633803317, 3248222580, 3479774868, 3835390401, 2666613458, 4022224774, 944711139, 264347078, 2341262773, 604807628, 2007800933, 770255983, 1495990901, 1249150122, 1856431235, 1555081692, 3175218132, 1996064986, 2198950837, 2554220882, 3999719339, 2821834349, 766784016, 2952996808, 2566594879, 3210313671, 3203337956, 3336571891, 1034457026, 3584528711, 2466948901, 113926993, 3758326383, 338241895, 168717936, 666307205, 1188179964, 773529912, 1546045734, 1294757372, 1522805485, 1396182291, 2643833823, 1695183700, 2343527390, 1986661051, 1014477480, 2177026350, 1206759142, 2456956037, 344077627, 2730485921, 1290863460, 2820302411, 3158454273, 3259730800, 3505952657, 3345764771, 106217008, 3516065817, 3606008344, 3600352804, 1432725776, 4094571909, 1467031594, 275423344, 851169720, 430227734, 3100823752, 506948616, 1363258195, 659060556, 3750685593, 883997877, 3785050280, 958139571, 3318307427, 1322822218, 3812723403, 1537002063, 2003034995, 1747873779, 3602036899, 1955562222, 1575990012, 2024104815, 1125592928, 2227730452, 2716904306, 2361852424, 442776044, 2428436474, 593698344, 2756734187, 3733110249, 3204031479, 2999351573, 3329325298, 3815920427, 3391569614, 3928383900, 3515267271, 566280711, 3940187606, 3454069534, 4118630271, 4000239992, 116418474, 1914138554, 174292421, 2731055270, 289380356, 3203993006, 460393269, 320620315, 685471733, 587496836, 852142971, 1086792851, 1017036298, 365543100, 1126000580, 2618297676, 1288033470, 3409855158, 1501505948, 4234509866, 1607167915, 987167468, 1816402316, 1246189591];

            function y() {
                if (!(this instanceof y)) return new y;
                m.call(this), this.h = [1779033703, 4089235720, 3144134277, 2227873595, 1013904242, 4271175723, 2773480762, 1595750129, 1359893119, 2917565137, 2600822924, 725511199, 528734635, 4215389547, 1541459225, 327033209], this.k = v, this.W = new Array(160)
            }

            function w(e, t, r, n, i) {
                var f = e & r ^ ~e & i;
                return f < 0 && (f += 4294967296), f
            }

            function _(e, t, r, n, i, f) {
                var d = t & n ^ ~t & f;
                return d < 0 && (d += 4294967296), d
            }

            function S(e, t, r, n, i) {
                var f = e & r ^ e & i ^ r & i;
                return f < 0 && (f += 4294967296), f
            }

            function A(e, t, r, n, i, f) {
                var d = t & n ^ t & f ^ n & f;
                return d < 0 && (d += 4294967296), d
            }

            function x(e, t) {
                var r = d(e, t, 28) ^ d(t, e, 2) ^ d(t, e, 7);
                return r < 0 && (r += 4294967296), r
            }

            function M(e, t) {
                var r = s(e, t, 28) ^ s(t, e, 2) ^ s(t, e, 7);
                return r < 0 && (r += 4294967296), r
            }

            function I(e, t) {
                var r = d(e, t, 14) ^ d(e, t, 18) ^ d(t, e, 9);
                return r < 0 && (r += 4294967296), r
            }

            function B(e, t) {
                var r = s(e, t, 14) ^ s(e, t, 18) ^ s(t, e, 9);
                return r < 0 && (r += 4294967296), r
            }

            function k(e, t) {
                var r = d(e, t, 1) ^ d(e, t, 8) ^ c(e, t, 7);
                return r < 0 && (r += 4294967296), r
            }

            function z(e, t) {
                var r = s(e, t, 1) ^ s(e, t, 8) ^ a(e, t, 7);
                return r < 0 && (r += 4294967296), r
            }

            function R(e, t) {
                var r = d(e, t, 19) ^ d(t, e, 29) ^ c(e, t, 6);
                return r < 0 && (r += 4294967296), r
            }

            function q(e, t) {
                var r = s(e, t, 19) ^ s(t, e, 29) ^ a(e, t, 6);
                return r < 0 && (r += 4294967296), r
            }
            n.inherits(y, m), e.exports = y, y.blockSize = 1024, y.outSize = 512, y.hmacStrength = 192, y.padLength = 128, y.prototype._prepareBlock = function(e, t) {
                for (var r = this.W, n = 0; n < 32; n++) r[n] = e[t + n];
                for (; n < r.length; n += 2) {
                    var i = R(r[n - 4], r[n - 3]),
                        f = q(r[n - 4], r[n - 3]),
                        d = r[n - 14],
                        s = r[n - 13],
                        c = k(r[n - 30], r[n - 29]),
                        a = z(r[n - 30], r[n - 29]),
                        o = r[n - 32],
                        h = r[n - 31];
                    r[n] = b(i, f, d, s, c, a, o, h), r[n + 1] = p(i, f, d, s, c, a, o, h)
                }
            }, y.prototype._update = function(e, t) {
                this._prepareBlock(e, t);
                var r = this.W,
                    n = this.h[0],
                    i = this.h[1],
                    d = this.h[2],
                    s = this.h[3],
                    c = this.h[4],
                    a = this.h[5],
                    b = this.h[6],
                    p = this.h[7],
                    m = this.h[8],
                    v = this.h[9],
                    y = this.h[10],
                    k = this.h[11],
                    z = this.h[12],
                    R = this.h[13],
                    q = this.h[14],
                    E = this.h[15];
                f(this.k.length === r.length);
                for (var C = 0; C < r.length; C += 2) {
                    var P = q,
                        N = E,
                        j = I(m, v),
                        H = B(m, v),
                        O = w(m, v, y, k, z),
                        T = _(m, v, y, k, z, R),
                        D = this.k[C],
                        L = this.k[C + 1],
                        U = r[C],
                        F = r[C + 1],
                        J = l(P, N, j, H, O, T, D, L, U, F),
                        V = g(P, N, j, H, O, T, D, L, U, F);
                    P = x(n, i), N = M(n, i), j = S(n, i, d, s, c), H = A(n, i, d, s, c, a);
                    var K = h(P, N, j, H),
                        W = u(P, N, j, H);
                    q = z, E = R, z = y, R = k, y = m, k = v, m = h(b, p, J, V), v = u(p, p, J, V), b = c, p = a, c = d, a = s, d = n, s = i, n = h(J, V, K, W), i = u(J, V, K, W)
                }
                o(this.h, 0, n, i), o(this.h, 2, d, s), o(this.h, 4, c, a), o(this.h, 6, b, p), o(this.h, 8, m, v), o(this.h, 10, y, k), o(this.h, 12, z, R), o(this.h, 14, q, E)
            }, y.prototype._digest = function(e) {
                return "hex" === e ? n.toHex32(this.h, "big") : n.split32(this.h, "big")
            }
        },
        7574: function(e, t, r) {
            var n = r(10379);
            e.exports = n("123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz")
        }
    }
]);