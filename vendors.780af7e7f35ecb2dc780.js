/*! For license information please see vendors.780af7e7f35ecb2dc780.js.LICENSE.txt */
(window.webpackJsonp = window.webpackJsonp || []).push([
    [177], {
        1396: function(t, e, r) {
            "use strict";
            t.exports = r(3247)(r(3250))
        },
        1578: function(t, e, r) {
            var n = r(18),
                i = r(383),
                o = r(21).Buffer,
                s = [1116352408, 1899447441, 3049323471, 3921009573, 961987163, 1508970993, 2453635748, 2870763221, 3624381080, 310598401, 607225278, 1426881987, 1925078388, 2162078206, 2614888103, 3248222580, 3835390401, 4022224774, 264347078, 604807628, 770255983, 1249150122, 1555081692, 1996064986, 2554220882, 2821834349, 2952996808, 3210313671, 3336571891, 3584528711, 113926993, 338241895, 666307205, 773529912, 1294757372, 1396182291, 1695183700, 1986661051, 2177026350, 2456956037, 2730485921, 2820302411, 3259730800, 3345764771, 3516065817, 3600352804, 4094571909, 275423344, 430227734, 506948616, 659060556, 883997877, 958139571, 1322822218, 1537002063, 1747873779, 1955562222, 2024104815, 2227730452, 2361852424, 2428436474, 2756734187, 3204031479, 3329325298],
                a = new Array(64);

            function c() {
                this.init(), this._w = a, i.call(this, 64, 56)
            }

            function h(t, e, r) {
                return r ^ t & (e ^ r)
            }

            function f(t, e, r) {
                return t & e | r & (t | e)
            }

            function u(t) {
                return (t >>> 2 | t << 30) ^ (t >>> 13 | t << 19) ^ (t >>> 22 | t << 10)
            }

            function l(t) {
                return (t >>> 6 | t << 26) ^ (t >>> 11 | t << 21) ^ (t >>> 25 | t << 7)
            }

            function _(t) {
                return (t >>> 7 | t << 25) ^ (t >>> 18 | t << 14) ^ t >>> 3
            }
            n(c, i), c.prototype.init = function() {
                return this._a = 1779033703, this._b = 3144134277, this._c = 1013904242, this._d = 2773480762, this._e = 1359893119, this._f = 2600822924, this._g = 528734635, this._h = 1541459225, this
            }, c.prototype._update = function(t) {
                for (var e, r = this._w, n = 0 | this._a, i = 0 | this._b, o = 0 | this._c, a = 0 | this._d, c = 0 | this._e, p = 0 | this._f, d = 0 | this._g, E = 0 | this._h, y = 0; y < 16; ++y) r[y] = t.readInt32BE(4 * y);
                for (; y < 64; ++y) r[y] = 0 | (((e = r[y - 2]) >>> 17 | e << 15) ^ (e >>> 19 | e << 13) ^ e >>> 10) + r[y - 7] + _(r[y - 15]) + r[y - 16];
                for (var w = 0; w < 64; ++w) {
                    var I = E + l(c) + h(c, p, d) + s[w] + r[w] | 0,
                        g = u(n) + f(n, i, o) | 0;
                    E = d, d = p, p = c, c = a + I | 0, a = o, o = i, i = n, n = I + g | 0
                }
                this._a = n + this._a | 0, this._b = i + this._b | 0, this._c = o + this._c | 0, this._d = a + this._d | 0, this._e = c + this._e | 0, this._f = p + this._f | 0, this._g = d + this._g | 0, this._h = E + this._h | 0
            }, c.prototype._hash = function() {
                var t = o.allocUnsafe(32);
                return t.writeInt32BE(this._a, 0), t.writeInt32BE(this._b, 4), t.writeInt32BE(this._c, 8), t.writeInt32BE(this._d, 12), t.writeInt32BE(this._e, 16), t.writeInt32BE(this._f, 20), t.writeInt32BE(this._g, 24), t.writeInt32BE(this._h, 28), t
            }, t.exports = c
        },
        1579: function(t, e, r) {
            var n = r(18),
                i = r(383),
                o = r(21).Buffer,
                s = [1116352408, 3609767458, 1899447441, 602891725, 3049323471, 3964484399, 3921009573, 2173295548, 961987163, 4081628472, 1508970993, 3053834265, 2453635748, 2937671579, 2870763221, 3664609560, 3624381080, 2734883394, 310598401, 1164996542, 607225278, 1323610764, 1426881987, 3590304994, 1925078388, 4068182383, 2162078206, 991336113, 2614888103, 633803317, 3248222580, 3479774868, 3835390401, 2666613458, 4022224774, 944711139, 264347078, 2341262773, 604807628, 2007800933, 770255983, 1495990901, 1249150122, 1856431235, 1555081692, 3175218132, 1996064986, 2198950837, 2554220882, 3999719339, 2821834349, 766784016, 2952996808, 2566594879, 3210313671, 3203337956, 3336571891, 1034457026, 3584528711, 2466948901, 113926993, 3758326383, 338241895, 168717936, 666307205, 1188179964, 773529912, 1546045734, 1294757372, 1522805485, 1396182291, 2643833823, 1695183700, 2343527390, 1986661051, 1014477480, 2177026350, 1206759142, 2456956037, 344077627, 2730485921, 1290863460, 2820302411, 3158454273, 3259730800, 3505952657, 3345764771, 106217008, 3516065817, 3606008344, 3600352804, 1432725776, 4094571909, 1467031594, 275423344, 851169720, 430227734, 3100823752, 506948616, 1363258195, 659060556, 3750685593, 883997877, 3785050280, 958139571, 3318307427, 1322822218, 3812723403, 1537002063, 2003034995, 1747873779, 3602036899, 1955562222, 1575990012, 2024104815, 1125592928, 2227730452, 2716904306, 2361852424, 442776044, 2428436474, 593698344, 2756734187, 3733110249, 3204031479, 2999351573, 3329325298, 3815920427, 3391569614, 3928383900, 3515267271, 566280711, 3940187606, 3454069534, 4118630271, 4000239992, 116418474, 1914138554, 174292421, 2731055270, 289380356, 3203993006, 460393269, 320620315, 685471733, 587496836, 852142971, 1086792851, 1017036298, 365543100, 1126000580, 2618297676, 1288033470, 3409855158, 1501505948, 4234509866, 1607167915, 987167468, 1816402316, 1246189591],
                a = new Array(160);

            function c() {
                this.init(), this._w = a, i.call(this, 128, 112)
            }

            function h(t, e, r) {
                return r ^ t & (e ^ r)
            }

            function f(t, e, r) {
                return t & e | r & (t | e)
            }

            function u(t, e) {
                return (t >>> 28 | e << 4) ^ (e >>> 2 | t << 30) ^ (e >>> 7 | t << 25)
            }

            function l(t, e) {
                return (t >>> 14 | e << 18) ^ (t >>> 18 | e << 14) ^ (e >>> 9 | t << 23)
            }

            function _(t, e) {
                return (t >>> 1 | e << 31) ^ (t >>> 8 | e << 24) ^ t >>> 7
            }

            function p(t, e) {
                return (t >>> 1 | e << 31) ^ (t >>> 8 | e << 24) ^ (t >>> 7 | e << 25)
            }

            function d(t, e) {
                return (t >>> 19 | e << 13) ^ (e >>> 29 | t << 3) ^ t >>> 6
            }

            function E(t, e) {
                return (t >>> 19 | e << 13) ^ (e >>> 29 | t << 3) ^ (t >>> 6 | e << 26)
            }

            function y(t, e) {
                return t >>> 0 < e >>> 0 ? 1 : 0
            }
            n(c, i), c.prototype.init = function() {
                return this._ah = 1779033703, this._bh = 3144134277, this._ch = 1013904242, this._dh = 2773480762, this._eh = 1359893119, this._fh = 2600822924, this._gh = 528734635, this._hh = 1541459225, this._al = 4089235720, this._bl = 2227873595, this._cl = 4271175723, this._dl = 1595750129, this._el = 2917565137, this._fl = 725511199, this._gl = 4215389547, this._hl = 327033209, this
            }, c.prototype._update = function(t) {
                for (var e = this._w, r = 0 | this._ah, n = 0 | this._bh, i = 0 | this._ch, o = 0 | this._dh, a = 0 | this._eh, c = 0 | this._fh, w = 0 | this._gh, I = 0 | this._hh, g = 0 | this._al, A = 0 | this._bl, m = 0 | this._cl, v = 0 | this._dl, b = 0 | this._el, L = 0 | this._fl, B = 0 | this._gl, T = 0 | this._hl, N = 0; N < 32; N += 2) e[N] = t.readInt32BE(4 * N), e[N + 1] = t.readInt32BE(4 * N + 4);
                for (; N < 160; N += 2) {
                    var C = e[N - 30],
                        P = e[N - 30 + 1],
                        D = _(C, P),
                        S = p(P, C),
                        V = d(C = e[N - 4], P = e[N - 4 + 1]),
                        R = E(P, C),
                        K = e[N - 14],
                        Y = e[N - 14 + 1],
                        k = e[N - 32],
                        U = e[N - 32 + 1],
                        G = S + Y | 0,
                        x = D + K + y(G, S) | 0;
                    x = (x = x + V + y(G = G + R | 0, R) | 0) + k + y(G = G + U | 0, U) | 0, e[N] = x, e[N + 1] = G
                }
                for (var O = 0; O < 160; O += 2) {
                    x = e[O], G = e[O + 1];
                    var M = f(r, n, i),
                        F = f(g, A, m),
                        H = u(r, g),
                        j = u(g, r),
                        z = l(a, b),
                        W = l(b, a),
                        Z = s[O],
                        q = s[O + 1],
                        X = h(a, c, w),
                        J = h(b, L, B),
                        $ = T + W | 0,
                        Q = I + z + y($, T) | 0;
                    Q = (Q = (Q = Q + X + y($ = $ + J | 0, J) | 0) + Z + y($ = $ + q | 0, q) | 0) + x + y($ = $ + G | 0, G) | 0;
                    var tt = j + F | 0,
                        et = H + M + y(tt, j) | 0;
                    I = w, T = B, w = c, B = L, c = a, L = b, a = o + Q + y(b = v + $ | 0, v) | 0, o = i, v = m, i = n, m = A, n = r, A = g, r = Q + et + y(g = $ + tt | 0, $) | 0
                }
                this._al = this._al + g | 0, this._bl = this._bl + A | 0, this._cl = this._cl + m | 0, this._dl = this._dl + v | 0, this._el = this._el + b | 0, this._fl = this._fl + L | 0, this._gl = this._gl + B | 0, this._hl = this._hl + T | 0, this._ah = this._ah + r + y(this._al, g) | 0, this._bh = this._bh + n + y(this._bl, A) | 0, this._ch = this._ch + i + y(this._cl, m) | 0, this._dh = this._dh + o + y(this._dl, v) | 0, this._eh = this._eh + a + y(this._el, b) | 0, this._fh = this._fh + c + y(this._fl, L) | 0, this._gh = this._gh + w + y(this._gl, B) | 0, this._hh = this._hh + I + y(this._hl, T) | 0
            }, c.prototype._hash = function() {
                var t = o.allocUnsafe(64);

                function e(e, r, n) {
                    t.writeInt32BE(e, n), t.writeInt32BE(r, n + 4)
                }
                return e(this._ah, this._al, 0), e(this._bh, this._bl, 8), e(this._ch, this._cl, 16), e(this._dh, this._dl, 24), e(this._eh, this._el, 32), e(this._fh, this._fl, 40), e(this._gh, this._gl, 48), e(this._hh, this._hl, 56), t
            }, t.exports = c
        },
        1770: function(t) {
            t.exports = JSON.parse('{"COMPRESSED_TYPE_INVALID":"compressed should be a boolean","EC_PRIVATE_KEY_TYPE_INVALID":"private key should be a Buffer","EC_PRIVATE_KEY_LENGTH_INVALID":"private key length is invalid","EC_PRIVATE_KEY_RANGE_INVALID":"private key range is invalid","EC_PRIVATE_KEY_TWEAK_ADD_FAIL":"tweak out of range or resulting private key is invalid","EC_PRIVATE_KEY_TWEAK_MUL_FAIL":"tweak out of range","EC_PRIVATE_KEY_EXPORT_DER_FAIL":"couldn\'t export to DER format","EC_PRIVATE_KEY_IMPORT_DER_FAIL":"couldn\'t import from DER format","EC_PUBLIC_KEYS_TYPE_INVALID":"public keys should be an Array","EC_PUBLIC_KEYS_LENGTH_INVALID":"public keys Array should have at least 1 element","EC_PUBLIC_KEY_TYPE_INVALID":"public key should be a Buffer","EC_PUBLIC_KEY_LENGTH_INVALID":"public key length is invalid","EC_PUBLIC_KEY_PARSE_FAIL":"the public key could not be parsed or is invalid","EC_PUBLIC_KEY_CREATE_FAIL":"private was invalid, try again","EC_PUBLIC_KEY_TWEAK_ADD_FAIL":"tweak out of range or resulting public key is invalid","EC_PUBLIC_KEY_TWEAK_MUL_FAIL":"tweak out of range","EC_PUBLIC_KEY_COMBINE_FAIL":"the sum of the public keys is not valid","ECDH_FAIL":"scalar was invalid (zero or overflow)","ECDSA_SIGNATURE_TYPE_INVALID":"signature should be a Buffer","ECDSA_SIGNATURE_LENGTH_INVALID":"signature length is invalid","ECDSA_SIGNATURE_PARSE_FAIL":"couldn\'t parse signature","ECDSA_SIGNATURE_PARSE_DER_FAIL":"couldn\'t parse DER signature","ECDSA_SIGNATURE_SERIALIZE_DER_FAIL":"couldn\'t serialize signature to DER format","ECDSA_SIGN_FAIL":"nonce generation function failed or private key is invalid","ECDSA_RECOVER_FAIL":"couldn\'t recover public key from signature","MSG32_TYPE_INVALID":"message should be a Buffer","MSG32_LENGTH_INVALID":"message length is invalid","OPTIONS_TYPE_INVALID":"options should be an Object","OPTIONS_DATA_TYPE_INVALID":"options.data should be a Buffer","OPTIONS_DATA_LENGTH_INVALID":"options.data length is invalid","OPTIONS_NONCEFN_TYPE_INVALID":"options.noncefn should be a Function","RECOVERY_ID_TYPE_INVALID":"recovery should be a Number","RECOVERY_ID_VALUE_INVALID":"recovery should have value between -1 and 4","TWEAK_TYPE_INVALID":"tweak should be a Buffer","TWEAK_LENGTH_INVALID":"tweak length is invalid"}')
        },
        21: function(t, e, r) {
            var n = r(12),
                i = n.Buffer;

            function o(t, e) {
                for (var r in t) e[r] = t[r]
            }

            function s(t, e, r) {
                return i(t, e, r)
            }
            i.from && i.alloc && i.allocUnsafe && i.allocUnsafeSlow ? t.exports = n : (o(n, e), e.Buffer = s), s.prototype = Object.create(i.prototype), o(i, s), s.from = function(t, e, r) {
                if ("number" == typeof t) throw new TypeError("Argument must not be a number");
                return i(t, e, r)
            }, s.alloc = function(t, e, r) {
                if ("number" != typeof t) throw new TypeError("Argument must be a number");
                var n = i(t);
                return void 0 !== e ? "string" == typeof r ? n.fill(e, r) : n.fill(e) : n.fill(0), n
            }, s.allocUnsafe = function(t) {
                if ("number" != typeof t) throw new TypeError("Argument must be a number");
                return i(t)
            }, s.allocUnsafeSlow = function(t) {
                if ("number" != typeof t) throw new TypeError("Argument must be a number");
                return n.SlowBuffer(t)
            }
        },
        2354: function(t, e, r) {
            var n;
            ! function(i) {
                "use strict";

                function o(t, e) {
                    if (e = e || {
                            type: "Array"
                        }, "undefined" != typeof process && "number" == typeof process.pid && process.versions && process.versions.node) return function(t, e) {
                        var n = r(24).randomBytes(t);
                        switch (e.type) {
                            case "Array":
                                return [].slice.call(n);
                            case "Buffer":
                                return n;
                            case "Uint8Array":
                                for (var i = new Uint8Array(t), o = 0; o < t; ++o) i[o] = n.readUInt8(o);
                                return i;
                            default:
                                throw new Error(e.type + " is unsupported.")
                        }
                    }(t, e);
                    if (!(window.crypto || window.msCrypto)) throw new Error("Your browser does not support window.crypto.");
                    return function(t, e) {
                        var r = new Uint8Array(t);
                        switch ((window.crypto || window.msCrypto).getRandomValues(r), e.type) {
                            case "Array":
                                return [].slice.call(r);
                            case "Buffer":
                                try {
                                    new Buffer(1)
                                } catch (t) {
                                    throw new Error("Buffer not supported in this environment. Use Node.js or Browserify for browser support.")
                                }
                                return new Buffer(r);
                            case "Uint8Array":
                                return r;
                            default:
                                throw new Error(e.type + " is unsupported.")
                        }
                    }(t, e)
                }
                void 0 === (n = function() {
                    return o
                }.apply(e, [])) || (t.exports = n), o.randomArray = function(t) {
                    return o(t, {
                        type: "Array"
                    })
                }, o.randomUint8Array = function(t) {
                    return o(t, {
                        type: "Uint8Array"
                    })
                }, o.randomBuffer = function(t) {
                    return o(t, {
                        type: "Buffer"
                    })
                }
            }()
        },
        2695: function(t, e, r) {
            var n = r(18),
                i = r(383),
                o = r(21).Buffer,
                s = [1518500249, 1859775393, -1894007588, -899497514],
                a = new Array(80);

            function c() {
                this.init(), this._w = a, i.call(this, 64, 56)
            }

            function h(t) {
                return t << 30 | t >>> 2
            }

            function f(t, e, r, n) {
                return 0 === t ? e & r | ~e & n : 2 === t ? e & r | e & n | r & n : e ^ r ^ n
            }
            n(c, i), c.prototype.init = function() {
                return this._a = 1732584193, this._b = 4023233417, this._c = 2562383102, this._d = 271733878, this._e = 3285377520, this
            }, c.prototype._update = function(t) {
                for (var e, r = this._w, n = 0 | this._a, i = 0 | this._b, o = 0 | this._c, a = 0 | this._d, c = 0 | this._e, u = 0; u < 16; ++u) r[u] = t.readInt32BE(4 * u);
                for (; u < 80; ++u) r[u] = r[u - 3] ^ r[u - 8] ^ r[u - 14] ^ r[u - 16];
                for (var l = 0; l < 80; ++l) {
                    var _ = ~~(l / 20),
                        p = 0 | ((e = n) << 5 | e >>> 27) + f(_, i, o, a) + c + r[l] + s[_];
                    c = a, a = o, o = h(i), i = n, n = p
                }
                this._a = n + this._a | 0, this._b = i + this._b | 0, this._c = o + this._c | 0, this._d = a + this._d | 0, this._e = c + this._e | 0
            }, c.prototype._hash = function() {
                var t = o.allocUnsafe(20);
                return t.writeInt32BE(0 | this._a, 0), t.writeInt32BE(0 | this._b, 4), t.writeInt32BE(0 | this._c, 8), t.writeInt32BE(0 | this._d, 12), t.writeInt32BE(0 | this._e, 16), t
            }, t.exports = c
        },
        2696: function(t, e, r) {
            var n = r(18),
                i = r(383),
                o = r(21).Buffer,
                s = [1518500249, 1859775393, -1894007588, -899497514],
                a = new Array(80);

            function c() {
                this.init(), this._w = a, i.call(this, 64, 56)
            }

            function h(t) {
                return t << 5 | t >>> 27
            }

            function f(t) {
                return t << 30 | t >>> 2
            }

            function u(t, e, r, n) {
                return 0 === t ? e & r | ~e & n : 2 === t ? e & r | e & n | r & n : e ^ r ^ n
            }
            n(c, i), c.prototype.init = function() {
                return this._a = 1732584193, this._b = 4023233417, this._c = 2562383102, this._d = 271733878, this._e = 3285377520, this
            }, c.prototype._update = function(t) {
                for (var e, r = this._w, n = 0 | this._a, i = 0 | this._b, o = 0 | this._c, a = 0 | this._d, c = 0 | this._e, l = 0; l < 16; ++l) r[l] = t.readInt32BE(4 * l);
                for (; l < 80; ++l) r[l] = (e = r[l - 3] ^ r[l - 8] ^ r[l - 14] ^ r[l - 16]) << 1 | e >>> 31;
                for (var _ = 0; _ < 80; ++_) {
                    var p = ~~(_ / 20),
                        d = h(n) + u(p, i, o, a) + c + r[_] + s[p] | 0;
                    c = a, a = o, o = f(i), i = n, n = d
                }
                this._a = n + this._a | 0, this._b = i + this._b | 0, this._c = o + this._c | 0, this._d = a + this._d | 0, this._e = c + this._e | 0
            }, c.prototype._hash = function() {
                var t = o.allocUnsafe(20);
                return t.writeInt32BE(0 | this._a, 0), t.writeInt32BE(0 | this._b, 4), t.writeInt32BE(0 | this._c, 8), t.writeInt32BE(0 | this._d, 12), t.writeInt32BE(0 | this._e, 16), t
            }, t.exports = c
        },
        2697: function(t, e, r) {
            var n = r(18),
                i = r(1578),
                o = r(383),
                s = r(21).Buffer,
                a = new Array(64);

            function c() {
                this.init(), this._w = a, o.call(this, 64, 56)
            }
            n(c, i), c.prototype.init = function() {
                return this._a = 3238371032, this._b = 914150663, this._c = 812702999, this._d = 4144912697, this._e = 4290775857, this._f = 1750603025, this._g = 1694076839, this._h = 3204075428, this
            }, c.prototype._hash = function() {
                var t = s.allocUnsafe(28);
                return t.writeInt32BE(this._a, 0), t.writeInt32BE(this._b, 4), t.writeInt32BE(this._c, 8), t.writeInt32BE(this._d, 12), t.writeInt32BE(this._e, 16), t.writeInt32BE(this._f, 20), t.writeInt32BE(this._g, 24), t
            }, t.exports = c
        },
        2698: function(t, e, r) {
            var n = r(18),
                i = r(1579),
                o = r(383),
                s = r(21).Buffer,
                a = new Array(160);

            function c() {
                this.init(), this._w = a, o.call(this, 128, 112)
            }
            n(c, i), c.prototype.init = function() {
                return this._ah = 3418070365, this._bh = 1654270250, this._ch = 2438529370, this._dh = 355462360, this._eh = 1731405415, this._fh = 2394180231, this._gh = 3675008525, this._hh = 1203062813, this._al = 3238371032, this._bl = 914150663, this._cl = 812702999, this._dl = 4144912697, this._el = 4290775857, this._fl = 1750603025, this._gl = 1694076839, this._hl = 3204075428, this
            }, c.prototype._hash = function() {
                var t = s.allocUnsafe(48);

                function e(e, r, n) {
                    t.writeInt32BE(e, n), t.writeInt32BE(r, n + 4)
                }
                return e(this._ah, this._al, 0), e(this._bh, this._bl, 8), e(this._ch, this._cl, 16), e(this._dh, this._dl, 24), e(this._eh, this._el, 32), e(this._fh, this._fl, 40), t
            }, t.exports = c
        },
        2739: function(t, e, r) {
            t.exports = function(t, e, r, n, i, o, s, a) {
                "use strict";

                function c(t) {
                    var e = [1116352408, 1899447441, 3049323471, 3921009573, 961987163, 1508970993, 2453635748, 2870763221, 3624381080, 310598401, 607225278, 1426881987, 1925078388, 2162078206, 2614888103, 3248222580, 3835390401, 4022224774, 264347078, 604807628, 770255983, 1249150122, 1555081692, 1996064986, 2554220882, 2821834349, 2952996808, 3210313671, 3336571891, 3584528711, 113926993, 338241895, 666307205, 773529912, 1294757372, 1396182291, 1695183700, 1986661051, 2177026350, 2456956037, 2730485921, 2820302411, 3259730800, 3345764771, 3516065817, 3600352804, 4094571909, 275423344, 430227734, 506948616, 659060556, 883997877, 958139571, 1322822218, 1537002063, 1747873779, 1955562222, 2024104815, 2227730452, 2361852424, 2428436474, 2756734187, 3204031479, 3329325298],
                        r = 1779033703,
                        n = 3144134277,
                        i = 1013904242,
                        o = 2773480762,
                        s = 1359893119,
                        a = 2600822924,
                        c = 528734635,
                        h = 1541459225,
                        f = new Array(64);

                    function u(t) {
                        for (var u = 0, l = t.length; l >= 64;) {
                            var _, p, d, E, y, w = r,
                                I = n,
                                g = i,
                                A = o,
                                m = s,
                                v = a,
                                b = c,
                                L = h;
                            for (p = 0; p < 16; p++) d = u + 4 * p, f[p] = (255 & t[d]) << 24 | (255 & t[d + 1]) << 16 | (255 & t[d + 2]) << 8 | 255 & t[d + 3];
                            for (p = 16; p < 64; p++) E = ((_ = f[p - 2]) >>> 17 | _ << 15) ^ (_ >>> 19 | _ << 13) ^ _ >>> 10, y = ((_ = f[p - 15]) >>> 7 | _ << 25) ^ (_ >>> 18 | _ << 14) ^ _ >>> 3, f[p] = (E + f[p - 7] | 0) + (y + f[p - 16] | 0) | 0;
                            for (p = 0; p < 64; p++) E = (((m >>> 6 | m << 26) ^ (m >>> 11 | m << 21) ^ (m >>> 25 | m << 7)) + (m & v ^ ~m & b) | 0) + (L + (e[p] + f[p] | 0) | 0) | 0, y = ((w >>> 2 | w << 30) ^ (w >>> 13 | w << 19) ^ (w >>> 22 | w << 10)) + (w & I ^ w & g ^ I & g) | 0, L = b, b = v, v = m, m = A + E | 0, A = g, g = I, I = w, w = E + y | 0;
                            r = r + w | 0, n = n + I | 0, i = i + g | 0, o = o + A | 0, s = s + m | 0, a = a + v | 0, c = c + b | 0, h = h + L | 0, u += 64, l -= 64
                        }
                    }
                    u(t);
                    var l, _ = t.length % 64,
                        p = t.length / 536870912 | 0,
                        d = t.length << 3,
                        E = _ < 56 ? 56 : 120,
                        y = t.slice(t.length - _, t.length);
                    for (y.push(128), l = _ + 1; l < E; l++) y.push(0);
                    return y.push(p >>> 24 & 255), y.push(p >>> 16 & 255), y.push(p >>> 8 & 255), y.push(p >>> 0 & 255), y.push(d >>> 24 & 255), y.push(d >>> 16 & 255), y.push(d >>> 8 & 255), y.push(d >>> 0 & 255), u(y), [r >>> 24 & 255, r >>> 16 & 255, r >>> 8 & 255, r >>> 0 & 255, n >>> 24 & 255, n >>> 16 & 255, n >>> 8 & 255, n >>> 0 & 255, i >>> 24 & 255, i >>> 16 & 255, i >>> 8 & 255, i >>> 0 & 255, o >>> 24 & 255, o >>> 16 & 255, o >>> 8 & 255, o >>> 0 & 255, s >>> 24 & 255, s >>> 16 & 255, s >>> 8 & 255, s >>> 0 & 255, a >>> 24 & 255, a >>> 16 & 255, a >>> 8 & 255, a >>> 0 & 255, c >>> 24 & 255, c >>> 16 & 255, c >>> 8 & 255, c >>> 0 & 255, h >>> 24 & 255, h >>> 16 & 255, h >>> 8 & 255, h >>> 0 & 255]
                }

                function h(t, e, r) {
                    t.length > 64 && (t = c(t.push ? t : Array.prototype.slice.call(t, 0)));
                    var n, i = 64 + e.length + 4,
                        o = new Array(i),
                        s = new Array(64),
                        a = [];
                    for (n = 0; n < 64; n++) o[n] = 54;
                    for (n = 0; n < t.length; n++) o[n] ^= t[n];
                    for (n = 0; n < e.length; n++) o[64 + n] = e[n];
                    for (n = i - 4; n < i; n++) o[n] = 0;
                    for (n = 0; n < 64; n++) s[n] = 92;
                    for (n = 0; n < t.length; n++) s[n] ^= t[n];

                    function h() {
                        for (var t = i - 1; t >= i - 4; t--) {
                            if (o[t]++, o[t] <= 255) return;
                            o[t] = 0
                        }
                    }
                    for (; r >= 32;) h(), a = a.concat(c(s.concat(c(o)))), r -= 32;
                    return r > 0 && (h(), a = a.concat(c(s.concat(c(o))).slice(0, r))), a
                }

                function f(t, e, r, n) {
                    var i, o, s = t[0] ^ e[r++],
                        a = t[1] ^ e[r++],
                        c = t[2] ^ e[r++],
                        h = t[3] ^ e[r++],
                        f = t[4] ^ e[r++],
                        u = t[5] ^ e[r++],
                        l = t[6] ^ e[r++],
                        _ = t[7] ^ e[r++],
                        p = t[8] ^ e[r++],
                        d = t[9] ^ e[r++],
                        E = t[10] ^ e[r++],
                        y = t[11] ^ e[r++],
                        w = t[12] ^ e[r++],
                        I = t[13] ^ e[r++],
                        g = t[14] ^ e[r++],
                        A = t[15] ^ e[r++],
                        m = s,
                        v = a,
                        b = c,
                        L = h,
                        B = f,
                        T = u,
                        N = l,
                        C = _,
                        P = p,
                        D = d,
                        S = E,
                        V = y,
                        R = w,
                        K = I,
                        Y = g,
                        k = A;
                    for (o = 0; o < 8; o += 2) m ^= (i = (R ^= (i = (P ^= (i = (B ^= (i = m + R) << 7 | i >>> 25) + m) << 9 | i >>> 23) + B) << 13 | i >>> 19) + P) << 18 | i >>> 14, T ^= (i = (v ^= (i = (K ^= (i = (D ^= (i = T + v) << 7 | i >>> 25) + T) << 9 | i >>> 23) + D) << 13 | i >>> 19) + K) << 18 | i >>> 14, S ^= (i = (N ^= (i = (b ^= (i = (Y ^= (i = S + N) << 7 | i >>> 25) + S) << 9 | i >>> 23) + Y) << 13 | i >>> 19) + b) << 18 | i >>> 14, k ^= (i = (V ^= (i = (C ^= (i = (L ^= (i = k + V) << 7 | i >>> 25) + k) << 9 | i >>> 23) + L) << 13 | i >>> 19) + C) << 18 | i >>> 14, m ^= (i = (L ^= (i = (b ^= (i = (v ^= (i = m + L) << 7 | i >>> 25) + m) << 9 | i >>> 23) + v) << 13 | i >>> 19) + b) << 18 | i >>> 14, T ^= (i = (B ^= (i = (C ^= (i = (N ^= (i = T + B) << 7 | i >>> 25) + T) << 9 | i >>> 23) + N) << 13 | i >>> 19) + C) << 18 | i >>> 14, S ^= (i = (D ^= (i = (P ^= (i = (V ^= (i = S + D) << 7 | i >>> 25) + S) << 9 | i >>> 23) + V) << 13 | i >>> 19) + P) << 18 | i >>> 14, k ^= (i = (Y ^= (i = (K ^= (i = (R ^= (i = k + Y) << 7 | i >>> 25) + k) << 9 | i >>> 23) + R) << 13 | i >>> 19) + K) << 18 | i >>> 14;
                    e[n++] = t[0] = m + s | 0, e[n++] = t[1] = v + a | 0, e[n++] = t[2] = b + c | 0, e[n++] = t[3] = L + h | 0, e[n++] = t[4] = B + f | 0, e[n++] = t[5] = T + u | 0, e[n++] = t[6] = N + l | 0, e[n++] = t[7] = C + _ | 0, e[n++] = t[8] = P + p | 0, e[n++] = t[9] = D + d | 0, e[n++] = t[10] = S + E | 0, e[n++] = t[11] = V + y | 0, e[n++] = t[12] = R + w | 0, e[n++] = t[13] = K + I | 0, e[n++] = t[14] = Y + g | 0, e[n++] = t[15] = k + A | 0
                }

                function u(t, e, r, n, i) {
                    for (; i--;) t[e++] = r[n++]
                }

                function l(t, e, r, n, i) {
                    for (; i--;) t[e++] ^= r[n++]
                }

                function _(t, e, r, n, i) {
                    u(t, 0, e, r + 16 * (2 * i - 1), 16);
                    for (var o = 0; o < 2 * i; o += 2) f(t, e, r + 16 * o, n + 8 * o), f(t, e, r + 16 * o + 16, n + 8 * o + 16 * i)
                }

                function p(t, e, r) {
                    return t[e + 16 * (2 * r - 1)]
                }

                function d(t) {
                    for (var e = [], r = 0; r < t.length; r++) {
                        var n = t.charCodeAt(r);
                        if (n < 128) e.push(n);
                        else if (n < 2048) e.push(192 | n >> 6), e.push(128 | 63 & n);
                        else if (n < 55296) e.push(224 | n >> 12), e.push(128 | n >> 6 & 63), e.push(128 | 63 & n);
                        else {
                            if (r >= t.length - 1) throw new Error("invalid string");
                            r++, n = (1023 & n) << 10, n |= 1023 & t.charCodeAt(r), n += 65536, e.push(240 | n >> 18), e.push(128 | n >> 12 & 63), e.push(128 | n >> 6 & 63), e.push(128 | 63 & n)
                        }
                    }
                    return e
                }

                function E(t) {
                    for (var e = "0123456789abcdef".split(""), r = t.length, n = [], i = 0; i < r; i++) n.push(e[t[i] >>> 4 & 15]), n.push(e[t[i] >>> 0 & 15]);
                    return n.join("")
                }

                function y(t) {
                    for (var e, r = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".split(""), n = t.length, i = [], o = 0; o < n;) e = ((o < n ? t[o++] : 0) << 16) + ((o < n ? t[o++] : 0) << 8) + (o < n ? t[o++] : 0), i.push(r[e >>> 18 & 63]), i.push(r[e >>> 12 & 63]), i.push(r[e >>> 6 & 63]), i.push(r[e >>> 0 & 63]);
                    return n % 3 > 0 && (i[i.length - 1] = "=", n % 3 == 1 && (i[i.length - 2] = "=")), i.join("")
                }
                var w = -1 >>> 0,
                    I = 1;
                if ("object" == typeof r) {
                    if (arguments.length > 4) throw new Error("scrypt: incorrect number of arguments");
                    var g = r;
                    if (s = n, void 0 === (r = g.logN)) {
                        if (void 0 === g.N) throw new Error("scrypt: missing N parameter");
                        if (g.N < 2 || g.N > w) throw new Error("scrypt: N is out of range");
                        if (0 != (g.N & g.N - 1)) throw new Error("scrypt: N is not a power of 2");
                        r = Math.log(g.N) / Math.LN2
                    }
                    I = g.p || 1, n = g.r, i = g.dkLen || 32, o = g.interruptStep || 0, a = g.encoding
                }
                if (I < 1) throw new Error("scrypt: invalid p");
                if (n <= 0) throw new Error("scrypt: invalid r");
                if (r < 1 || r > 31) throw new Error("scrypt: logN must be between 1 and 31");
                var A, m, v, b, L = 1 << r >>> 0;
                if (n * I >= 1 << 30 || n > w / 128 / I || n > w / 256 || L > w / 128 / n) throw new Error("scrypt: parameters are too large");
                "string" == typeof t && (t = d(t)), "string" == typeof e && (e = d(e)), "undefined" != typeof Int32Array ? (A = new Int32Array(64 * n), m = new Int32Array(32 * L * n), b = new Int32Array(16)) : (A = [], m = [], b = new Array(16)), v = h(t, e, 128 * I * n);
                var B = 0,
                    T = 32 * n;

                function N(t) {
                    for (var e = 0; e < 32 * n; e++) {
                        var r = t + 4 * e;
                        A[B + e] = (255 & v[r + 3]) << 24 | (255 & v[r + 2]) << 16 | (255 & v[r + 1]) << 8 | (255 & v[r + 0]) << 0
                    }
                }

                function C(t, e) {
                    for (var r = t; r < e; r += 2) u(m, r * (32 * n), A, B, 32 * n), _(b, A, B, T, n), u(m, (r + 1) * (32 * n), A, T, 32 * n), _(b, A, T, B, n)
                }

                function P(t, e) {
                    for (var r = t; r < e; r += 2) {
                        var i = p(A, B, n) & L - 1;
                        l(A, B, m, i * (32 * n), 32 * n), _(b, A, B, T, n), i = p(A, T, n) & L - 1, l(A, T, m, i * (32 * n), 32 * n), _(b, A, T, B, n)
                    }
                }

                function D(t) {
                    for (var e = 0; e < 32 * n; e++) {
                        var r = A[B + e];
                        v[t + 4 * e + 0] = r >>> 0 & 255, v[t + 4 * e + 1] = r >>> 8 & 255, v[t + 4 * e + 2] = r >>> 16 & 255, v[t + 4 * e + 3] = r >>> 24 & 255
                    }
                }
                var S = "undefined" != typeof setImmediate ? setImmediate : setTimeout;

                function V(t, e, r, n, i) {
                    ! function o() {
                        S((function() {
                            n(t, t + r < e ? t + r : e), (t += r) < e ? o() : i()
                        }))
                    }()
                }

                function R(e) {
                    var r = h(t, v, i);
                    return "base64" === e ? y(r) : "hex" === e ? E(r) : "binary" === e ? new Uint8Array(r) : r
                }

                function K() {
                    for (var t = 0; t < I; t++) N(128 * t * n), C(0, L), P(0, L), D(128 * t * n);
                    s(R(a))
                }

                function Y(t) {
                    N(128 * t * n), V(0, L, 2 * o, C, (function() {
                        V(0, L, 2 * o, P, (function() {
                            D(128 * t * n), t + 1 < I ? S((function() {
                                Y(t + 1)
                            })) : s(R(a))
                        }))
                    }))
                }
                "function" == typeof o && (a = s, s = o, o = 1e3), o <= 0 ? K() : Y(0)
            }
        },
        3189: function(t, e, r) {
            "use strict";
            var n, i = {
                cipher: {},
                hash: {},
                keyexchange: {},
                mode: {},
                misc: {},
                codec: {},
                exception: {
                    corrupt: function(t) {
                        this.toString = function() {
                            return "CORRUPT: " + this.message
                        }, this.message = t
                    },
                    invalid: function(t) {
                        this.toString = function() {
                            return "INVALID: " + this.message
                        }, this.message = t
                    },
                    bug: function(t) {
                        this.toString = function() {
                            return "BUG: " + this.message
                        }, this.message = t
                    },
                    notReady: function(t) {
                        this.toString = function() {
                            return "NOT READY: " + this.message
                        }, this.message = t
                    }
                }
            };

            function o(t, e, r) {
                if (4 !== e.length) throw new i.exception.invalid("invalid aes block size");
                var n = t.b[r],
                    o = e[0] ^ n[0],
                    s = e[r ? 3 : 1] ^ n[1],
                    a = e[2] ^ n[2];
                e = e[r ? 1 : 3] ^ n[3];
                var c, h, f, u, l = n.length / 4 - 2,
                    _ = 4,
                    p = [0, 0, 0, 0];
                t = (c = t.s[r])[0];
                var d = c[1],
                    E = c[2],
                    y = c[3],
                    w = c[4];
                for (u = 0; u < l; u++) c = t[o >>> 24] ^ d[s >> 16 & 255] ^ E[a >> 8 & 255] ^ y[255 & e] ^ n[_], h = t[s >>> 24] ^ d[a >> 16 & 255] ^ E[e >> 8 & 255] ^ y[255 & o] ^ n[_ + 1], f = t[a >>> 24] ^ d[e >> 16 & 255] ^ E[o >> 8 & 255] ^ y[255 & s] ^ n[_ + 2], e = t[e >>> 24] ^ d[o >> 16 & 255] ^ E[s >> 8 & 255] ^ y[255 & a] ^ n[_ + 3], _ += 4, o = c, s = h, a = f;
                for (u = 0; 4 > u; u++) p[r ? 3 & -u : u] = w[o >>> 24] << 24 ^ w[s >> 16 & 255] << 16 ^ w[a >> 8 & 255] << 8 ^ w[255 & e] ^ n[_++], c = o, o = s, s = a, a = e, e = c;
                return p
            }

            function s(t, e) {
                var r, n, i, o = t.F,
                    s = t.b,
                    a = o[0],
                    c = o[1],
                    h = o[2],
                    f = o[3],
                    u = o[4],
                    l = o[5],
                    _ = o[6],
                    p = o[7];
                for (r = 0; 64 > r; r++) 16 > r ? n = e[r] : (n = e[r + 1 & 15], i = e[r + 14 & 15], n = e[15 & r] = (n >>> 7 ^ n >>> 18 ^ n >>> 3 ^ n << 25 ^ n << 14) + (i >>> 17 ^ i >>> 19 ^ i >>> 10 ^ i << 15 ^ i << 13) + e[15 & r] + e[r + 9 & 15] | 0), n = n + p + (u >>> 6 ^ u >>> 11 ^ u >>> 25 ^ u << 26 ^ u << 21 ^ u << 7) + (_ ^ u & (l ^ _)) + s[r], p = _, _ = l, l = u, u = f + n | 0, f = h, h = c, a = n + ((c = a) & h ^ f & (c ^ h)) + (c >>> 2 ^ c >>> 13 ^ c >>> 22 ^ c << 30 ^ c << 19 ^ c << 10) | 0;
                o[0] = o[0] + a | 0, o[1] = o[1] + c | 0, o[2] = o[2] + h | 0, o[3] = o[3] + f | 0, o[4] = o[4] + u | 0, o[5] = o[5] + l | 0, o[6] = o[6] + _ | 0, o[7] = o[7] + p | 0
            }

            function a(t, e) {
                var r, n = i.random.K[t],
                    o = [];
                for (r in n) n.hasOwnProperty(r) && o.push(n[r]);
                for (r = 0; r < o.length; r++) o[r](e)
            }

            function c(t, e) {
                "undefined" != typeof window && window.performance && "function" == typeof window.performance.now ? t.addEntropy(window.performance.now(), e, "loadtime") : t.addEntropy((new Date).valueOf(), e, "loadtime")
            }

            function h(t) {
                t.b = f(t).concat(f(t)), t.L = new i.cipher.aes(t.b)
            }

            function f(t) {
                for (var e = 0; 4 > e && (t.h[e] = t.h[e] + 1 | 0, !t.h[e]); e++);
                return t.L.encrypt(t.h)
            }

            function u(t, e) {
                return function() {
                    e.apply(t, arguments)
                }
            }
            i.cipher.aes = function(t) {
                this.s[0][0][0] || this.O();
                var e, r, n, o, s = this.s[0][4],
                    a = this.s[1],
                    c = 1;
                if (4 !== (e = t.length) && 6 !== e && 8 !== e) throw new i.exception.invalid("invalid aes key size");
                for (this.b = [n = t.slice(0), o = []], t = e; t < 4 * e + 28; t++) r = n[t - 1], (0 == t % e || 8 === e && 4 == t % e) && (r = s[r >>> 24] << 24 ^ s[r >> 16 & 255] << 16 ^ s[r >> 8 & 255] << 8 ^ s[255 & r], 0 == t % e && (r = r << 8 ^ r >>> 24 ^ c << 24, c = c << 1 ^ 283 * (c >> 7))), n[t] = n[t - e] ^ r;
                for (e = 0; t; e++, t--) r = n[3 & e ? t : t - 4], o[e] = 4 >= t || 4 > e ? r : a[0][s[r >>> 24]] ^ a[1][s[r >> 16 & 255]] ^ a[2][s[r >> 8 & 255]] ^ a[3][s[255 & r]]
            }, i.cipher.aes.prototype = {
                encrypt: function(t) {
                    return o(this, t, 0)
                },
                decrypt: function(t) {
                    return o(this, t, 1)
                },
                s: [
                    [
                        [],
                        [],
                        [],
                        [],
                        []
                    ],
                    [
                        [],
                        [],
                        [],
                        [],
                        []
                    ]
                ],
                O: function() {
                    var t, e, r, n, i, o, s, a = this.s[0],
                        c = this.s[1],
                        h = a[4],
                        f = c[4],
                        u = [],
                        l = [];
                    for (t = 0; 256 > t; t++) l[(u[t] = t << 1 ^ 283 * (t >> 7)) ^ t] = t;
                    for (e = r = 0; !h[e]; e ^= n || 1, r = l[r] || 1)
                        for (o = (o = r ^ r << 1 ^ r << 2 ^ r << 3 ^ r << 4) >> 8 ^ 255 & o ^ 99, h[e] = o, f[o] = e, s = 16843009 * (i = u[t = u[n = u[e]]]) ^ 65537 * t ^ 257 * n ^ 16843008 * e, i = 257 * u[o] ^ 16843008 * o, t = 0; 4 > t; t++) a[t][e] = i = i << 24 ^ i >>> 8, c[t][o] = s = s << 24 ^ s >>> 8;
                    for (t = 0; 5 > t; t++) a[t] = a[t].slice(0), c[t] = c[t].slice(0)
                }
            }, i.bitArray = {
                bitSlice: function(t, e, r) {
                    return t = i.bitArray.$(t.slice(e / 32), 32 - (31 & e)).slice(1), void 0 === r ? t : i.bitArray.clamp(t, r - e)
                },
                extract: function(t, e, r) {
                    var n = Math.floor(-e - r & 31);
                    return (-32 & (e + r - 1 ^ e) ? t[e / 32 | 0] << 32 - n ^ t[e / 32 + 1 | 0] >>> n : t[e / 32 | 0] >>> n) & (1 << r) - 1
                },
                concat: function(t, e) {
                    if (0 === t.length || 0 === e.length) return t.concat(e);
                    var r = t[t.length - 1],
                        n = i.bitArray.getPartial(r);
                    return 32 === n ? t.concat(e) : i.bitArray.$(e, n, 0 | r, t.slice(0, t.length - 1))
                },
                bitLength: function(t) {
                    var e = t.length;
                    return 0 === e ? 0 : 32 * (e - 1) + i.bitArray.getPartial(t[e - 1])
                },
                clamp: function(t, e) {
                    if (32 * t.length < e) return t;
                    var r = (t = t.slice(0, Math.ceil(e / 32))).length;
                    return e &= 31, 0 < r && e && (t[r - 1] = i.bitArray.partial(e, t[r - 1] & 2147483648 >> e - 1, 1)), t
                },
                partial: function(t, e, r) {
                    return 32 === t ? e : (r ? 0 | e : e << 32 - t) + 1099511627776 * t
                },
                getPartial: function(t) {
                    return Math.round(t / 1099511627776) || 32
                },
                equal: function(t, e) {
                    if (i.bitArray.bitLength(t) !== i.bitArray.bitLength(e)) return !1;
                    var r, n = 0;
                    for (r = 0; r < t.length; r++) n |= t[r] ^ e[r];
                    return 0 === n
                },
                $: function(t, e, r, n) {
                    var o;
                    for (o = 0, void 0 === n && (n = []); 32 <= e; e -= 32) n.push(r), r = 0;
                    if (0 === e) return n.concat(t);
                    for (o = 0; o < t.length; o++) n.push(r | t[o] >>> e), r = t[o] << 32 - e;
                    return o = t.length ? t[t.length - 1] : 0, t = i.bitArray.getPartial(o), n.push(i.bitArray.partial(e + t & 31, 32 < e + t ? r : n.pop(), 1)), n
                },
                i: function(t, e) {
                    return [t[0] ^ e[0], t[1] ^ e[1], t[2] ^ e[2], t[3] ^ e[3]]
                },
                byteswapM: function(t) {
                    var e, r;
                    for (e = 0; e < t.length; ++e) r = t[e], t[e] = r >>> 24 | r >>> 8 & 65280 | (65280 & r) << 8 | r << 24;
                    return t
                }
            }, i.codec.utf8String = {
                fromBits: function(t) {
                    var e, r, n = "",
                        o = i.bitArray.bitLength(t);
                    for (e = 0; e < o / 8; e++) 0 == (3 & e) && (r = t[e / 4]), n += String.fromCharCode(r >>> 24), r <<= 8;
                    return decodeURIComponent(escape(n))
                },
                toBits: function(t) {
                    t = unescape(encodeURIComponent(t));
                    var e, r = [],
                        n = 0;
                    for (e = 0; e < t.length; e++) n = n << 8 | t.charCodeAt(e), 3 == (3 & e) && (r.push(n), n = 0);
                    return 3 & e && r.push(i.bitArray.partial(8 * (3 & e), n)), r
                }
            }, i.codec.hex = {
                fromBits: function(t) {
                    var e, r = "";
                    for (e = 0; e < t.length; e++) r += (0xf00000000000 + (0 | t[e])).toString(16).substr(4);
                    return r.substr(0, i.bitArray.bitLength(t) / 4)
                },
                toBits: function(t) {
                    var e, r, n = [];
                    for (r = (t = t.replace(/\s|0x/g, "")).length, t += "00000000", e = 0; e < t.length; e += 8) n.push(0 ^ parseInt(t.substr(e, 8), 16));
                    return i.bitArray.clamp(n, 4 * r)
                }
            }, i.codec.base32 = {
                B: "ABCDEFGHIJKLMNOPQRSTUVWXYZ234567",
                X: "0123456789ABCDEFGHIJKLMNOPQRSTUV",
                BITS: 32,
                BASE: 5,
                REMAINING: 27,
                fromBits: function(t, e, r) {
                    var n = i.codec.base32.BASE,
                        o = i.codec.base32.REMAINING,
                        s = "",
                        a = 0,
                        c = i.codec.base32.B,
                        h = 0,
                        f = i.bitArray.bitLength(t);
                    for (r && (c = i.codec.base32.X), r = 0; s.length * n < f;) s += c.charAt((h ^ t[r] >>> a) >>> o), a < n ? (h = t[r] << n - a, a += o, r++) : (h <<= n, a -= n);
                    for (; 7 & s.length && !e;) s += "=";
                    return s
                },
                toBits: function(t, e) {
                    t = t.replace(/\s|=/g, "").toUpperCase();
                    var r, n, o = i.codec.base32.BITS,
                        s = i.codec.base32.BASE,
                        a = i.codec.base32.REMAINING,
                        c = [],
                        h = 0,
                        f = i.codec.base32.B,
                        u = 0,
                        l = "base32";
                    for (e && (f = i.codec.base32.X, l = "base32hex"), r = 0; r < t.length; r++) {
                        if (0 > (n = f.indexOf(t.charAt(r)))) {
                            if (!e) try {
                                return i.codec.base32hex.toBits(t)
                            } catch (t) {}
                            throw new i.exception.invalid("this isn't " + l + "!")
                        }
                        h > a ? (h -= a, c.push(u ^ n >>> h), u = n << o - h) : u ^= n << o - (h += s)
                    }
                    return 56 & h && c.push(i.bitArray.partial(56 & h, u, 1)), c
                }
            }, i.codec.base32hex = {
                fromBits: function(t, e) {
                    return i.codec.base32.fromBits(t, e, 1)
                },
                toBits: function(t) {
                    return i.codec.base32.toBits(t, 1)
                }
            }, i.codec.base64 = {
                B: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
                fromBits: function(t, e, r) {
                    var n = "",
                        o = 0,
                        s = i.codec.base64.B,
                        a = 0,
                        c = i.bitArray.bitLength(t);
                    for (r && (s = s.substr(0, 62) + "-_"), r = 0; 6 * n.length < c;) n += s.charAt((a ^ t[r] >>> o) >>> 26), 6 > o ? (a = t[r] << 6 - o, o += 26, r++) : (a <<= 6, o -= 6);
                    for (; 3 & n.length && !e;) n += "=";
                    return n
                },
                toBits: function(t, e) {
                    t = t.replace(/\s|=/g, "");
                    var r, n, o = [],
                        s = 0,
                        a = i.codec.base64.B,
                        c = 0;
                    for (e && (a = a.substr(0, 62) + "-_"), r = 0; r < t.length; r++) {
                        if (0 > (n = a.indexOf(t.charAt(r)))) throw new i.exception.invalid("this isn't base64!");
                        26 < s ? (s -= 26, o.push(c ^ n >>> s), c = n << 32 - s) : c ^= n << 32 - (s += 6)
                    }
                    return 56 & s && o.push(i.bitArray.partial(56 & s, c, 1)), o
                }
            }, i.codec.base64url = {
                fromBits: function(t) {
                    return i.codec.base64.fromBits(t, 1, 1)
                },
                toBits: function(t) {
                    return i.codec.base64.toBits(t, 1)
                }
            }, i.hash.sha256 = function(t) {
                this.b[0] || this.O(), t ? (this.F = t.F.slice(0), this.A = t.A.slice(0), this.l = t.l) : this.reset()
            }, i.hash.sha256.hash = function(t) {
                return (new i.hash.sha256).update(t).finalize()
            }, i.hash.sha256.prototype = {
                blockSize: 512,
                reset: function() {
                    return this.F = this.Y.slice(0), this.A = [], this.l = 0, this
                },
                update: function(t) {
                    "string" == typeof t && (t = i.codec.utf8String.toBits(t));
                    var e, r = this.A = i.bitArray.concat(this.A, t);
                    if (e = this.l, 9007199254740991 < (t = this.l = e + i.bitArray.bitLength(t))) throw new i.exception.invalid("Cannot hash more than 2^53 - 1 bits");
                    if ("undefined" != typeof Uint32Array) {
                        var n = new Uint32Array(r),
                            o = 0;
                        for (e = 512 + e - (512 + e & 511); e <= t; e += 512) s(this, n.subarray(16 * o, 16 * (o + 1))), o += 1;
                        r.splice(0, 16 * o)
                    } else
                        for (e = 512 + e - (512 + e & 511); e <= t; e += 512) s(this, r.splice(0, 16));
                    return this
                },
                finalize: function() {
                    var t, e = this.A,
                        r = this.F;
                    for (t = (e = i.bitArray.concat(e, [i.bitArray.partial(1, 1)])).length + 2; 15 & t; t++) e.push(0);
                    for (e.push(Math.floor(this.l / 4294967296)), e.push(0 | this.l); e.length;) s(this, e.splice(0, 16));
                    return this.reset(), r
                },
                Y: [],
                b: [],
                O: function() {
                    function t(t) {
                        return 4294967296 * (t - Math.floor(t)) | 0
                    }
                    for (var e, r, n = 0, i = 2; 64 > n; i++) {
                        for (r = !0, e = 2; e * e <= i; e++)
                            if (0 == i % e) {
                                r = !1;
                                break
                            } r && (8 > n && (this.Y[n] = t(Math.pow(i, .5))), this.b[n] = t(Math.pow(i, 1 / 3)), n++)
                    }
                }
            }, i.mode.ccm = {
                name: "ccm",
                G: [],
                listenProgress: function(t) {
                    i.mode.ccm.G.push(t)
                },
                unListenProgress: function(t) {
                    -1 < (t = i.mode.ccm.G.indexOf(t)) && i.mode.ccm.G.splice(t, 1)
                },
                fa: function(t) {
                    var e, r = i.mode.ccm.G.slice();
                    for (e = 0; e < r.length; e += 1) r[e](t)
                },
                encrypt: function(t, e, r, n, o) {
                    var s, a = e.slice(0),
                        c = i.bitArray,
                        h = c.bitLength(r) / 8,
                        f = c.bitLength(a) / 8;
                    if (o = o || 64, n = n || [], 7 > h) throw new i.exception.invalid("ccm: iv must be at least 7 bytes");
                    for (s = 2; 4 > s && f >>> 8 * s; s++);
                    return s < 15 - h && (s = 15 - h), r = c.clamp(r, 8 * (15 - s)), e = i.mode.ccm.V(t, e, r, n, o, s), a = i.mode.ccm.C(t, a, r, e, o, s), c.concat(a.data, a.tag)
                },
                decrypt: function(t, e, r, n, o) {
                    o = o || 64, n = n || [];
                    var s = i.bitArray,
                        a = s.bitLength(r) / 8,
                        c = s.bitLength(e),
                        h = s.clamp(e, c - o),
                        f = s.bitSlice(e, c - o);
                    c = (c - o) / 8;
                    if (7 > a) throw new i.exception.invalid("ccm: iv must be at least 7 bytes");
                    for (e = 2; 4 > e && c >>> 8 * e; e++);
                    if (e < 15 - a && (e = 15 - a), r = s.clamp(r, 8 * (15 - e)), h = i.mode.ccm.C(t, h, r, f, o, e), t = i.mode.ccm.V(t, h.data, r, n, o, e), !s.equal(h.tag, t)) throw new i.exception.corrupt("ccm: tag doesn't match");
                    return h.data
                },
                na: function(t, e, r, n, o, s) {
                    var a = [],
                        c = i.bitArray,
                        h = c.i;
                    if (n = [c.partial(8, (e.length ? 64 : 0) | n - 2 << 2 | s - 1)], (n = c.concat(n, r))[3] |= o, n = t.encrypt(n), e.length)
                        for (65279 >= (r = c.bitLength(e) / 8) ? a = [c.partial(16, r)] : 4294967295 >= r && (a = c.concat([c.partial(16, 65534)], [r])), a = c.concat(a, e), e = 0; e < a.length; e += 4) n = t.encrypt(h(n, a.slice(e, e + 4).concat([0, 0, 0])));
                    return n
                },
                V: function(t, e, r, n, o, s) {
                    var a = i.bitArray,
                        c = a.i;
                    if ((o /= 8) % 2 || 4 > o || 16 < o) throw new i.exception.invalid("ccm: invalid tag length");
                    if (4294967295 < n.length || 4294967295 < e.length) throw new i.exception.bug("ccm: can't deal with 4GiB or more data");
                    for (r = i.mode.ccm.na(t, n, r, o, a.bitLength(e) / 8, s), n = 0; n < e.length; n += 4) r = t.encrypt(c(r, e.slice(n, n + 4).concat([0, 0, 0])));
                    return a.clamp(r, 8 * o)
                },
                C: function(t, e, r, n, o, s) {
                    var a, c = i.bitArray;
                    a = c.i;
                    var h = e.length,
                        f = c.bitLength(e),
                        u = h / 50,
                        l = u;
                    if (r = c.concat([c.partial(8, s - 1)], r).concat([0, 0, 0]).slice(0, 4), n = c.bitSlice(a(n, t.encrypt(r)), 0, o), !h) return {
                        tag: n,
                        data: []
                    };
                    for (a = 0; a < h; a += 4) a > u && (i.mode.ccm.fa(a / h), u += l), r[3]++, o = t.encrypt(r), e[a] ^= o[0], e[a + 1] ^= o[1], e[a + 2] ^= o[2], e[a + 3] ^= o[3];
                    return {
                        tag: n,
                        data: c.clamp(e, f)
                    }
                }
            }, i.mode.ocb2 = {
                name: "ocb2",
                encrypt: function(t, e, r, n, o, s) {
                    if (128 !== i.bitArray.bitLength(r)) throw new i.exception.invalid("ocb iv must be 128 bits");
                    var a, c = i.mode.ocb2.S,
                        h = i.bitArray,
                        f = h.i,
                        u = [0, 0, 0, 0];
                    r = c(t.encrypt(r));
                    var l, _ = [];
                    for (n = n || [], o = o || 64, a = 0; a + 4 < e.length; a += 4) u = f(u, l = e.slice(a, a + 4)), _ = _.concat(f(r, t.encrypt(f(r, l)))), r = c(r);
                    return l = e.slice(a), e = h.bitLength(l), a = t.encrypt(f(r, [0, 0, 0, e])), l = h.clamp(f(l.concat([0, 0, 0]), a), e), u = f(u, f(l.concat([0, 0, 0]), a)), u = t.encrypt(f(u, f(r, c(r)))), n.length && (u = f(u, s ? n : i.mode.ocb2.pmac(t, n))), _.concat(h.concat(l, h.clamp(u, o)))
                },
                decrypt: function(t, e, r, n, o, s) {
                    if (128 !== i.bitArray.bitLength(r)) throw new i.exception.invalid("ocb iv must be 128 bits");
                    o = o || 64;
                    var a, c, h = i.mode.ocb2.S,
                        f = i.bitArray,
                        u = f.i,
                        l = [0, 0, 0, 0],
                        _ = h(t.encrypt(r)),
                        p = i.bitArray.bitLength(e) - o,
                        d = [];
                    for (n = n || [], r = 0; r + 4 < p / 32; r += 4) a = u(_, t.decrypt(u(_, e.slice(r, r + 4)))), l = u(l, a), d = d.concat(a), _ = h(_);
                    if (c = p - 32 * r, a = t.encrypt(u(_, [0, 0, 0, c])), a = u(a, f.clamp(e.slice(r), c).concat([0, 0, 0])), l = u(l, a), l = t.encrypt(u(l, u(_, h(_)))), n.length && (l = u(l, s ? n : i.mode.ocb2.pmac(t, n))), !f.equal(f.clamp(l, o), f.bitSlice(e, p))) throw new i.exception.corrupt("ocb: tag doesn't match");
                    return d.concat(f.clamp(a, c))
                },
                pmac: function(t, e) {
                    var r, n = i.mode.ocb2.S,
                        o = i.bitArray,
                        s = o.i,
                        a = [0, 0, 0, 0],
                        c = s(c = t.encrypt([0, 0, 0, 0]), n(n(c)));
                    for (r = 0; r + 4 < e.length; r += 4) c = n(c), a = s(a, t.encrypt(s(c, e.slice(r, r + 4))));
                    return r = e.slice(r), 128 > o.bitLength(r) && (c = s(c, n(c)), r = o.concat(r, [-2147483648, 0, 0, 0])), a = s(a, r), t.encrypt(s(n(s(c, n(c))), a))
                },
                S: function(t) {
                    return [t[0] << 1 ^ t[1] >>> 31, t[1] << 1 ^ t[2] >>> 31, t[2] << 1 ^ t[3] >>> 31, t[3] << 1 ^ 135 * (t[0] >>> 31)]
                }
            }, i.mode.gcm = {
                name: "gcm",
                encrypt: function(t, e, r, n, o) {
                    var s = e.slice(0);
                    return e = i.bitArray, n = n || [], t = i.mode.gcm.C(!0, t, s, n, r, o || 128), e.concat(t.data, t.tag)
                },
                decrypt: function(t, e, r, n, o) {
                    var s = e.slice(0),
                        a = i.bitArray,
                        c = a.bitLength(s);
                    if (n = n || [], (o = o || 128) <= c ? (e = a.bitSlice(s, c - o), s = a.bitSlice(s, 0, c - o)) : (e = s, s = []), t = i.mode.gcm.C(!1, t, s, n, r, o), !a.equal(t.tag, e)) throw new i.exception.corrupt("gcm: tag doesn't match");
                    return t.data
                },
                ka: function(t, e) {
                    var r, n, o, s, a, c = i.bitArray.i;
                    for (o = [0, 0, 0, 0], s = e.slice(0), r = 0; 128 > r; r++) {
                        for ((n = 0 != (t[Math.floor(r / 32)] & 1 << 31 - r % 32)) && (o = c(o, s)), a = 0 != (1 & s[3]), n = 3; 0 < n; n--) s[n] = s[n] >>> 1 | (1 & s[n - 1]) << 31;
                        s[0] >>>= 1, a && (s[0] ^= -520093696)
                    }
                    return o
                },
                j: function(t, e, r) {
                    var n, o = r.length;
                    for (e = e.slice(0), n = 0; n < o; n += 4) e[0] ^= 4294967295 & r[n], e[1] ^= 4294967295 & r[n + 1], e[2] ^= 4294967295 & r[n + 2], e[3] ^= 4294967295 & r[n + 3], e = i.mode.gcm.ka(e, t);
                    return e
                },
                C: function(t, e, r, n, o, s) {
                    var a, c, h, f, u, l, _, p, d = i.bitArray;
                    for (l = r.length, _ = d.bitLength(r), p = d.bitLength(n), c = d.bitLength(o), a = e.encrypt([0, 0, 0, 0]), 96 === c ? (o = o.slice(0), o = d.concat(o, [1])) : (o = i.mode.gcm.j(a, [0, 0, 0, 0], o), o = i.mode.gcm.j(a, o, [0, 0, Math.floor(c / 4294967296), 4294967295 & c])), c = i.mode.gcm.j(a, [0, 0, 0, 0], n), u = o.slice(0), n = c.slice(0), t || (n = i.mode.gcm.j(a, c, r)), f = 0; f < l; f += 4) u[3]++, h = e.encrypt(u), r[f] ^= h[0], r[f + 1] ^= h[1], r[f + 2] ^= h[2], r[f + 3] ^= h[3];
                    return r = d.clamp(r, _), t && (n = i.mode.gcm.j(a, c, r)), t = [Math.floor(p / 4294967296), 4294967295 & p, Math.floor(_ / 4294967296), 4294967295 & _], n = i.mode.gcm.j(a, n, t), h = e.encrypt(o), n[0] ^= h[0], n[1] ^= h[1], n[2] ^= h[2], n[3] ^= h[3], {
                        tag: d.bitSlice(n, 0, s),
                        data: r
                    }
                }
            }, i.misc.hmac = function(t, e) {
                this.W = e = e || i.hash.sha256;
                var r, n = [
                        [],
                        []
                    ],
                    o = e.prototype.blockSize / 32;
                for (this.w = [new e, new e], t.length > o && (t = e.hash(t)), r = 0; r < o; r++) n[0][r] = 909522486 ^ t[r], n[1][r] = 1549556828 ^ t[r];
                this.w[0].update(n[0]), this.w[1].update(n[1]), this.R = new e(this.w[0])
            }, i.misc.hmac.prototype.encrypt = i.misc.hmac.prototype.mac = function(t) {
                if (this.aa) throw new i.exception.invalid("encrypt on already updated hmac called!");
                return this.update(t), this.digest(t)
            }, i.misc.hmac.prototype.reset = function() {
                this.R = new this.W(this.w[0]), this.aa = !1
            }, i.misc.hmac.prototype.update = function(t) {
                this.aa = !0, this.R.update(t)
            }, i.misc.hmac.prototype.digest = function() {
                var t = this.R.finalize();
                t = new this.W(this.w[1]).update(t).finalize();
                return this.reset(), t
            }, i.misc.pbkdf2 = function(t, e, r, n, o) {
                if (r = r || 1e4, 0 > n || 0 > r) throw new i.exception.invalid("invalid params to pbkdf2");
                "string" == typeof t && (t = i.codec.utf8String.toBits(t)), "string" == typeof e && (e = i.codec.utf8String.toBits(e)), t = new(o = o || i.misc.hmac)(t);
                var s, a, c, h, f = [],
                    u = i.bitArray;
                for (h = 1; 32 * f.length < (n || 1); h++) {
                    for (o = s = t.encrypt(u.concat(e, [h])), a = 1; a < r; a++)
                        for (s = t.encrypt(s), c = 0; c < s.length; c++) o[c] ^= s[c];
                    f = f.concat(o)
                }
                return n && (f = u.clamp(f, n)), f
            }, i.prng = function(t) {
                this.c = [new i.hash.sha256], this.m = [0], this.P = 0, this.H = {}, this.N = 0, this.U = {}, this.Z = this.f = this.o = this.ha = 0, this.b = [0, 0, 0, 0, 0, 0, 0, 0], this.h = [0, 0, 0, 0], this.L = void 0, this.M = t, this.D = !1, this.K = {
                    progress: {},
                    seeded: {}
                }, this.u = this.ga = 0, this.I = 1, this.J = 2, this.ca = 65536, this.T = [0, 48, 64, 96, 128, 192, 256, 384, 512, 768, 1024], this.da = 3e4, this.ba = 80
            }, i.prng.prototype = {
                randomWords: function(t, e) {
                    var r, n, o = [];
                    if ((r = this.isReady(e)) === this.u) throw new i.exception.notReady("generator isn't seeded");
                    if (r & this.J) {
                        r = !(r & this.I), n = [];
                        var s, a = 0;
                        for (this.Z = n[0] = (new Date).valueOf() + this.da, s = 0; 16 > s; s++) n.push(4294967296 * Math.random() | 0);
                        for (s = 0; s < this.c.length && (n = n.concat(this.c[s].finalize()), a += this.m[s], this.m[s] = 0, r || !(this.P & 1 << s)); s++);
                        for (this.P >= 1 << this.c.length && (this.c.push(new i.hash.sha256), this.m.push(0)), this.f -= a, a > this.o && (this.o = a), this.P++, this.b = i.hash.sha256.hash(this.b.concat(n)), this.L = new i.cipher.aes(this.b), r = 0; 4 > r && (this.h[r] = this.h[r] + 1 | 0, !this.h[r]); r++);
                    }
                    for (r = 0; r < t; r += 4) 0 == (r + 1) % this.ca && h(this), n = f(this), o.push(n[0], n[1], n[2], n[3]);
                    return h(this), o.slice(0, t)
                },
                setDefaultParanoia: function(t, e) {
                    if (0 === t && "Setting paranoia=0 will ruin your security; use it only for testing" !== e) throw new i.exception.invalid("Setting paranoia=0 will ruin your security; use it only for testing");
                    this.M = t
                },
                addEntropy: function(t, e, r) {
                    r = r || "user";
                    var n, o, s = (new Date).valueOf(),
                        c = this.H[r],
                        h = this.isReady(),
                        f = 0;
                    switch (void 0 === (n = this.U[r]) && (n = this.U[r] = this.ha++), void 0 === c && (c = this.H[r] = 0), this.H[r] = (this.H[r] + 1) % this.c.length, typeof t) {
                        case "number":
                            void 0 === e && (e = 1), this.c[c].update([n, this.N++, 1, e, s, 1, 0 | t]);
                            break;
                        case "object":
                            if ("[object Uint32Array]" === (r = Object.prototype.toString.call(t))) {
                                for (o = [], r = 0; r < t.length; r++) o.push(t[r]);
                                t = o
                            } else
                                for ("[object Array]" !== r && (f = 1), r = 0; r < t.length && !f; r++) "number" != typeof t[r] && (f = 1);
                            if (!f) {
                                if (void 0 === e)
                                    for (r = e = 0; r < t.length; r++)
                                        for (o = t[r]; 0 < o;) e++, o >>>= 1;
                                this.c[c].update([n, this.N++, 2, e, s, t.length].concat(t))
                            }
                            break;
                        case "string":
                            void 0 === e && (e = t.length), this.c[c].update([n, this.N++, 3, e, s, t.length]), this.c[c].update(t);
                            break;
                        default:
                            f = 1
                    }
                    if (f) throw new i.exception.bug("random: addEntropy only supports number, array of numbers or string");
                    this.m[c] += e, this.f += e, h === this.u && (this.isReady() !== this.u && a("seeded", Math.max(this.o, this.f)), a("progress", this.getProgress()))
                },
                isReady: function(t) {
                    return t = this.T[void 0 !== t ? t : this.M], this.o && this.o >= t ? this.m[0] > this.ba && (new Date).valueOf() > this.Z ? this.J | this.I : this.I : this.f >= t ? this.J | this.u : this.u
                },
                getProgress: function(t) {
                    return t = this.T[t || this.M], this.o >= t || this.f > t ? 1 : this.f / t
                },
                startCollectors: function() {
                    if (!this.D) {
                        if (this.a = {
                                loadTimeCollector: u(this, this.ma),
                                mouseCollector: u(this, this.oa),
                                keyboardCollector: u(this, this.la),
                                accelerometerCollector: u(this, this.ea),
                                touchCollector: u(this, this.qa)
                            }, window.addEventListener) window.addEventListener("load", this.a.loadTimeCollector, !1), window.addEventListener("mousemove", this.a.mouseCollector, !1), window.addEventListener("keypress", this.a.keyboardCollector, !1), window.addEventListener("devicemotion", this.a.accelerometerCollector, !1), window.addEventListener("touchmove", this.a.touchCollector, !1);
                        else {
                            if (!document.attachEvent) throw new i.exception.bug("can't attach event");
                            document.attachEvent("onload", this.a.loadTimeCollector), document.attachEvent("onmousemove", this.a.mouseCollector), document.attachEvent("keypress", this.a.keyboardCollector)
                        }
                        this.D = !0
                    }
                },
                stopCollectors: function() {
                    this.D && (window.removeEventListener ? (window.removeEventListener("load", this.a.loadTimeCollector, !1), window.removeEventListener("mousemove", this.a.mouseCollector, !1), window.removeEventListener("keypress", this.a.keyboardCollector, !1), window.removeEventListener("devicemotion", this.a.accelerometerCollector, !1), window.removeEventListener("touchmove", this.a.touchCollector, !1)) : document.detachEvent && (document.detachEvent("onload", this.a.loadTimeCollector), document.detachEvent("onmousemove", this.a.mouseCollector), document.detachEvent("keypress", this.a.keyboardCollector)), this.D = !1)
                },
                addEventListener: function(t, e) {
                    this.K[t][this.ga++] = e
                },
                removeEventListener: function(t, e) {
                    var r, n, i = this.K[t],
                        o = [];
                    for (n in i) i.hasOwnProperty(n) && i[n] === e && o.push(n);
                    for (r = 0; r < o.length; r++) delete i[n = o[r]]
                },
                la: function() {
                    c(this, 1)
                },
                oa: function(t) {
                    var e, r;
                    try {
                        e = t.x || t.clientX || t.offsetX || 0, r = t.y || t.clientY || t.offsetY || 0
                    } catch (t) {
                        r = e = 0
                    }
                    0 != e && 0 != r && this.addEntropy([e, r], 2, "mouse"), c(this, 0)
                },
                qa: function(t) {
                    t = t.touches[0] || t.changedTouches[0], this.addEntropy([t.pageX || t.clientX, t.pageY || t.clientY], 1, "touch"), c(this, 0)
                },
                ma: function() {
                    c(this, 2)
                },
                ea: function(t) {
                    if (t = t.accelerationIncludingGravity.x || t.accelerationIncludingGravity.y || t.accelerationIncludingGravity.z, window.orientation) {
                        var e = window.orientation;
                        "number" == typeof e && this.addEntropy(e, 1, "accelerometer")
                    }
                    t && this.addEntropy(t, 2, "accelerometer"), c(this, 0)
                }
            }, i.random = new i.prng(6);
            t: try {
                var l, _, p, d;
                if (d = t.exports) {
                    var E;
                    try {
                        E = r(24)
                    } catch (t) {
                        E = null
                    }
                    d = _ = E
                }
                if (d && _.randomBytes) l = _.randomBytes(128), l = new Uint32Array(new Uint8Array(l).buffer), i.random.addEntropy(l, 1024, "crypto['randomBytes']");
                else if ("undefined" != typeof window && "undefined" != typeof Uint32Array) {
                    if (p = new Uint32Array(32), window.crypto && window.crypto.getRandomValues) window.crypto.getRandomValues(p);
                    else {
                        if (!window.msCrypto || !window.msCrypto.getRandomValues) break t;
                        window.msCrypto.getRandomValues(p)
                    }
                    i.random.addEntropy(p, 1024, "crypto['getRandomValues']")
                }
            } catch (t) {
                "undefined" != typeof window && window.console && (console.log("There was an error collecting entropy from the browser:"), console.log(t))
            }
            i.json = {
                defaults: {
                    v: 1,
                    iter: 1e4,
                    ks: 128,
                    ts: 64,
                    mode: "ccm",
                    adata: "",
                    cipher: "aes"
                },
                ja: function(t, e, r, n) {
                    r = r || {}, n = n || {};
                    var o, s = i.json,
                        a = s.g({
                            iv: i.random.randomWords(4, 0)
                        }, s.defaults);
                    if (s.g(a, r), r = a.adata, "string" == typeof a.salt && (a.salt = i.codec.base64.toBits(a.salt)), "string" == typeof a.iv && (a.iv = i.codec.base64.toBits(a.iv)), !i.mode[a.mode] || !i.cipher[a.cipher] || "string" == typeof t && 100 >= a.iter || 64 !== a.ts && 96 !== a.ts && 128 !== a.ts || 128 !== a.ks && 192 !== a.ks && 256 !== a.ks || 2 > a.iv.length || 4 < a.iv.length) throw new i.exception.invalid("json encrypt: invalid parameters");
                    return "string" == typeof t ? (t = (o = i.misc.cachedPbkdf2(t, a)).key.slice(0, a.ks / 32), a.salt = o.salt) : i.ecc && t instanceof i.ecc.elGamal.publicKey && (o = t.kem(), a.kemtag = o.tag, t = o.key.slice(0, a.ks / 32)), "string" == typeof e && (e = i.codec.utf8String.toBits(e)), "string" == typeof r && (a.adata = r = i.codec.utf8String.toBits(r)), o = new i.cipher[a.cipher](t), s.g(n, a), n.key = t, a.ct = "ccm" === a.mode && i.arrayBuffer && i.arrayBuffer.ccm && e instanceof ArrayBuffer ? i.arrayBuffer.ccm.encrypt(o, e, a.iv, r, a.ts) : i.mode[a.mode].encrypt(o, e, a.iv, r, a.ts), a
                },
                encrypt: function(t, e, r, n) {
                    var o = i.json,
                        s = o.ja.apply(o, arguments);
                    return o.encode(s)
                },
                ia: function(t, e, r, n) {
                    r = r || {}, n = n || {};
                    var o, s, a = i.json;
                    if (o = (e = a.g(a.g(a.g({}, a.defaults), e), r, !0)).adata, "string" == typeof e.salt && (e.salt = i.codec.base64.toBits(e.salt)), "string" == typeof e.iv && (e.iv = i.codec.base64.toBits(e.iv)), !i.mode[e.mode] || !i.cipher[e.cipher] || "string" == typeof t && 100 >= e.iter || 64 !== e.ts && 96 !== e.ts && 128 !== e.ts || 128 !== e.ks && 192 !== e.ks && 256 !== e.ks || !e.iv || 2 > e.iv.length || 4 < e.iv.length) throw new i.exception.invalid("json decrypt: invalid parameters");
                    return "string" == typeof t ? (t = (s = i.misc.cachedPbkdf2(t, e)).key.slice(0, e.ks / 32), e.salt = s.salt) : i.ecc && t instanceof i.ecc.elGamal.secretKey && (t = t.unkem(i.codec.base64.toBits(e.kemtag)).slice(0, e.ks / 32)), "string" == typeof o && (o = i.codec.utf8String.toBits(o)), s = new i.cipher[e.cipher](t), o = "ccm" === e.mode && i.arrayBuffer && i.arrayBuffer.ccm && e.ct instanceof ArrayBuffer ? i.arrayBuffer.ccm.decrypt(s, e.ct, e.iv, e.tag, o, e.ts) : i.mode[e.mode].decrypt(s, e.ct, e.iv, o, e.ts), a.g(n, e), n.key = t, 1 === r.raw ? o : i.codec.utf8String.fromBits(o)
                },
                decrypt: function(t, e, r, n) {
                    var o = i.json;
                    return o.ia(t, o.decode(e), r, n)
                },
                encode: function(t) {
                    var e, r = "{",
                        n = "";
                    for (e in t)
                        if (t.hasOwnProperty(e)) {
                            if (!e.match(/^[a-z0-9]+$/i)) throw new i.exception.invalid("json encode: invalid property name");
                            switch (r += n + '"' + e + '":', n = ",", typeof t[e]) {
                                case "number":
                                case "boolean":
                                    r += t[e];
                                    break;
                                case "string":
                                    r += '"' + escape(t[e]) + '"';
                                    break;
                                case "object":
                                    r += '"' + i.codec.base64.fromBits(t[e], 0) + '"';
                                    break;
                                default:
                                    throw new i.exception.bug("json encode: unsupported type")
                            }
                        } return r + "}"
                },
                decode: function(t) {
                    if (!(t = t.replace(/\s/g, "")).match(/^\{.*\}$/)) throw new i.exception.invalid("json decode: this isn't json!");
                    t = t.replace(/^\{|\}$/g, "").split(/,/);
                    var e, r, n = {};
                    for (e = 0; e < t.length; e++) {
                        if (!(r = t[e].match(/^\s*(?:(["']?)([a-z][a-z0-9]*)\1)\s*:\s*(?:(-?\d+)|"([a-z0-9+\/%*_.@=\-]*)"|(true|false))$/i))) throw new i.exception.invalid("json decode: this isn't json!");
                        null != r[3] ? n[r[2]] = parseInt(r[3], 10) : null != r[4] ? n[r[2]] = r[2].match(/^(ct|adata|salt|iv)$/) ? i.codec.base64.toBits(r[4]) : unescape(r[4]) : null != r[5] && (n[r[2]] = "true" === r[5])
                    }
                    return n
                },
                g: function(t, e, r) {
                    if (void 0 === t && (t = {}), void 0 === e) return t;
                    for (var n in e)
                        if (e.hasOwnProperty(n)) {
                            if (r && void 0 !== t[n] && t[n] !== e[n]) throw new i.exception.invalid("required parameter overridden");
                            t[n] = e[n]
                        } return t
                },
                sa: function(t, e) {
                    var r, n = {};
                    for (r in t) t.hasOwnProperty(r) && t[r] !== e[r] && (n[r] = t[r]);
                    return n
                },
                ra: function(t, e) {
                    var r, n = {};
                    for (r = 0; r < e.length; r++) void 0 !== t[e[r]] && (n[e[r]] = t[e[r]]);
                    return n
                }
            }, i.encrypt = i.json.encrypt, i.decrypt = i.json.decrypt, i.misc.pa = {}, i.misc.cachedPbkdf2 = function(t, e) {
                var r, n = i.misc.pa;
                return r = (e = e || {}).iter || 1e3, (r = (n = n[t] = n[t] || {})[r] = n[r] || {
                    firstSalt: e.salt && e.salt.length ? e.salt.slice(0) : i.random.randomWords(2, 0)
                })[n = void 0 === e.salt ? r.firstSalt : e.salt] = r[n] || i.misc.pbkdf2(t, n, e.iter), {
                    key: r[n].slice(0),
                    salt: n.slice(0)
                }
            }, t.exports && (t.exports = i), void 0 === (n = function() {
                return i
            }.apply(e, [])) || (t.exports = n)
        },
        324: function(t, e, r) {
            (e = t.exports = function(t) {
                t = t.toLowerCase();
                var r = e[t];
                if (!r) throw new Error(t + " is not supported (we accept pull requests)");
                return new r
            }).sha = r(2695), e.sha1 = r(2696), e.sha224 = r(2697), e.sha256 = r(1578), e.sha384 = r(2698), e.sha512 = r(1579)
        },
        3247: function(t, e, r) {
            "use strict";
            var n = r(3248),
                i = r(3249),
                o = r(1770);

            function s(t, e) {
                return void 0 === t ? e : (n.isBoolean(t, o.COMPRESSED_TYPE_INVALID), t)
            }
            t.exports = function(t) {
                return {
                    privateKeyVerify: function(e) {
                        return n.isBuffer(e, o.EC_PRIVATE_KEY_TYPE_INVALID), 32 === e.length && t.privateKeyVerify(e)
                    },
                    privateKeyExport: function(e, r) {
                        n.isBuffer(e, o.EC_PRIVATE_KEY_TYPE_INVALID), n.isBufferLength(e, 32, o.EC_PRIVATE_KEY_LENGTH_INVALID), r = s(r, !0);
                        var a = t.privateKeyExport(e, r);
                        return i.privateKeyExport(e, a, r)
                    },
                    privateKeyImport: function(e) {
                        if (n.isBuffer(e, o.EC_PRIVATE_KEY_TYPE_INVALID), (e = i.privateKeyImport(e)) && 32 === e.length && t.privateKeyVerify(e)) return e;
                        throw new Error(o.EC_PRIVATE_KEY_IMPORT_DER_FAIL)
                    },
                    privateKeyNegate: function(e) {
                        return n.isBuffer(e, o.EC_PRIVATE_KEY_TYPE_INVALID), n.isBufferLength(e, 32, o.EC_PRIVATE_KEY_LENGTH_INVALID), t.privateKeyNegate(e)
                    },
                    privateKeyModInverse: function(e) {
                        return n.isBuffer(e, o.EC_PRIVATE_KEY_TYPE_INVALID), n.isBufferLength(e, 32, o.EC_PRIVATE_KEY_LENGTH_INVALID), t.privateKeyModInverse(e)
                    },
                    privateKeyTweakAdd: function(e, r) {
                        return n.isBuffer(e, o.EC_PRIVATE_KEY_TYPE_INVALID), n.isBufferLength(e, 32, o.EC_PRIVATE_KEY_LENGTH_INVALID), n.isBuffer(r, o.TWEAK_TYPE_INVALID), n.isBufferLength(r, 32, o.TWEAK_LENGTH_INVALID), t.privateKeyTweakAdd(e, r)
                    },
                    privateKeyTweakMul: function(e, r) {
                        return n.isBuffer(e, o.EC_PRIVATE_KEY_TYPE_INVALID), n.isBufferLength(e, 32, o.EC_PRIVATE_KEY_LENGTH_INVALID), n.isBuffer(r, o.TWEAK_TYPE_INVALID), n.isBufferLength(r, 32, o.TWEAK_LENGTH_INVALID), t.privateKeyTweakMul(e, r)
                    },
                    publicKeyCreate: function(e, r) {
                        return n.isBuffer(e, o.EC_PRIVATE_KEY_TYPE_INVALID), n.isBufferLength(e, 32, o.EC_PRIVATE_KEY_LENGTH_INVALID), r = s(r, !0), t.publicKeyCreate(e, r)
                    },
                    publicKeyConvert: function(e, r) {
                        return n.isBuffer(e, o.EC_PUBLIC_KEY_TYPE_INVALID), n.isBufferLength2(e, 33, 65, o.EC_PUBLIC_KEY_LENGTH_INVALID), r = s(r, !0), t.publicKeyConvert(e, r)
                    },
                    publicKeyVerify: function(e) {
                        return n.isBuffer(e, o.EC_PUBLIC_KEY_TYPE_INVALID), t.publicKeyVerify(e)
                    },
                    publicKeyTweakAdd: function(e, r, i) {
                        return n.isBuffer(e, o.EC_PUBLIC_KEY_TYPE_INVALID), n.isBufferLength2(e, 33, 65, o.EC_PUBLIC_KEY_LENGTH_INVALID), n.isBuffer(r, o.TWEAK_TYPE_INVALID), n.isBufferLength(r, 32, o.TWEAK_LENGTH_INVALID), i = s(i, !0), t.publicKeyTweakAdd(e, r, i)
                    },
                    publicKeyTweakMul: function(e, r, i) {
                        return n.isBuffer(e, o.EC_PUBLIC_KEY_TYPE_INVALID), n.isBufferLength2(e, 33, 65, o.EC_PUBLIC_KEY_LENGTH_INVALID), n.isBuffer(r, o.TWEAK_TYPE_INVALID), n.isBufferLength(r, 32, o.TWEAK_LENGTH_INVALID), i = s(i, !0), t.publicKeyTweakMul(e, r, i)
                    },
                    publicKeyCombine: function(e, r) {
                        n.isArray(e, o.EC_PUBLIC_KEYS_TYPE_INVALID), n.isLengthGTZero(e, o.EC_PUBLIC_KEYS_LENGTH_INVALID);
                        for (var i = 0; i < e.length; ++i) n.isBuffer(e[i], o.EC_PUBLIC_KEY_TYPE_INVALID), n.isBufferLength2(e[i], 33, 65, o.EC_PUBLIC_KEY_LENGTH_INVALID);
                        return r = s(r, !0), t.publicKeyCombine(e, r)
                    },
                    signatureNormalize: function(e) {
                        return n.isBuffer(e, o.ECDSA_SIGNATURE_TYPE_INVALID), n.isBufferLength(e, 64, o.ECDSA_SIGNATURE_LENGTH_INVALID), t.signatureNormalize(e)
                    },
                    signatureExport: function(e) {
                        n.isBuffer(e, o.ECDSA_SIGNATURE_TYPE_INVALID), n.isBufferLength(e, 64, o.ECDSA_SIGNATURE_LENGTH_INVALID);
                        var r = t.signatureExport(e);
                        return i.signatureExport(r)
                    },
                    signatureImport: function(e) {
                        n.isBuffer(e, o.ECDSA_SIGNATURE_TYPE_INVALID), n.isLengthGTZero(e, o.ECDSA_SIGNATURE_LENGTH_INVALID);
                        var r = i.signatureImport(e);
                        if (r) return t.signatureImport(r);
                        throw new Error(o.ECDSA_SIGNATURE_PARSE_DER_FAIL)
                    },
                    signatureImportLax: function(e) {
                        n.isBuffer(e, o.ECDSA_SIGNATURE_TYPE_INVALID), n.isLengthGTZero(e, o.ECDSA_SIGNATURE_LENGTH_INVALID);
                        var r = i.signatureImportLax(e);
                        if (r) return t.signatureImport(r);
                        throw new Error(o.ECDSA_SIGNATURE_PARSE_DER_FAIL)
                    },
                    sign: function(e, r, i) {
                        n.isBuffer(e, o.MSG32_TYPE_INVALID), n.isBufferLength(e, 32, o.MSG32_LENGTH_INVALID), n.isBuffer(r, o.EC_PRIVATE_KEY_TYPE_INVALID), n.isBufferLength(r, 32, o.EC_PRIVATE_KEY_LENGTH_INVALID);
                        var s = null,
                            a = null;
                        return void 0 !== i && (n.isObject(i, o.OPTIONS_TYPE_INVALID), void 0 !== i.data && (n.isBuffer(i.data, o.OPTIONS_DATA_TYPE_INVALID), n.isBufferLength(i.data, 32, o.OPTIONS_DATA_LENGTH_INVALID), s = i.data), void 0 !== i.noncefn && (n.isFunction(i.noncefn, o.OPTIONS_NONCEFN_TYPE_INVALID), a = i.noncefn)), t.sign(e, r, a, s)
                    },
                    verify: function(e, r, i) {
                        return n.isBuffer(e, o.MSG32_TYPE_INVALID), n.isBufferLength(e, 32, o.MSG32_LENGTH_INVALID), n.isBuffer(r, o.ECDSA_SIGNATURE_TYPE_INVALID), n.isBufferLength(r, 64, o.ECDSA_SIGNATURE_LENGTH_INVALID), n.isBuffer(i, o.EC_PUBLIC_KEY_TYPE_INVALID), n.isBufferLength2(i, 33, 65, o.EC_PUBLIC_KEY_LENGTH_INVALID), t.verify(e, r, i)
                    },
                    recover: function(e, r, i, a) {
                        return n.isBuffer(e, o.MSG32_TYPE_INVALID), n.isBufferLength(e, 32, o.MSG32_LENGTH_INVALID), n.isBuffer(r, o.ECDSA_SIGNATURE_TYPE_INVALID), n.isBufferLength(r, 64, o.ECDSA_SIGNATURE_LENGTH_INVALID), n.isNumber(i, o.RECOVERY_ID_TYPE_INVALID), n.isNumberInInterval(i, -1, 4, o.RECOVERY_ID_VALUE_INVALID), a = s(a, !0), t.recover(e, r, i, a)
                    },
                    ecdh: function(e, r) {
                        return n.isBuffer(e, o.EC_PUBLIC_KEY_TYPE_INVALID), n.isBufferLength2(e, 33, 65, o.EC_PUBLIC_KEY_LENGTH_INVALID), n.isBuffer(r, o.EC_PRIVATE_KEY_TYPE_INVALID), n.isBufferLength(r, 32, o.EC_PRIVATE_KEY_LENGTH_INVALID), t.ecdh(e, r)
                    },
                    ecdhUnsafe: function(e, r, i) {
                        return n.isBuffer(e, o.EC_PUBLIC_KEY_TYPE_INVALID), n.isBufferLength2(e, 33, 65, o.EC_PUBLIC_KEY_LENGTH_INVALID), n.isBuffer(r, o.EC_PRIVATE_KEY_TYPE_INVALID), n.isBufferLength(r, 32, o.EC_PRIVATE_KEY_LENGTH_INVALID), i = s(i, !0), t.ecdhUnsafe(e, r, i)
                    }
                }
            }
        },
        3248: function(t, e, r) {
            "use strict";
            var n = Object.prototype.toString;
            e.isArray = function(t, e) {
                if (!Array.isArray(t)) throw TypeError(e)
            }, e.isBoolean = function(t, e) {
                if ("[object Boolean]" !== n.call(t)) throw TypeError(e)
            }, e.isBuffer = function(t, e) {
                if (!Buffer.isBuffer(t)) throw TypeError(e)
            }, e.isFunction = function(t, e) {
                if ("[object Function]" !== n.call(t)) throw TypeError(e)
            }, e.isNumber = function(t, e) {
                if ("[object Number]" !== n.call(t)) throw TypeError(e)
            }, e.isObject = function(t, e) {
                if ("[object Object]" !== n.call(t)) throw TypeError(e)
            }, e.isBufferLength = function(t, e, r) {
                if (t.length !== e) throw RangeError(r)
            }, e.isBufferLength2 = function(t, e, r, n) {
                if (t.length !== e && t.length !== r) throw RangeError(n)
            }, e.isLengthGTZero = function(t, e) {
                if (0 === t.length) throw RangeError(e)
            }, e.isNumberInInterval = function(t, e, r, n) {
                if (t <= e || t >= r) throw RangeError(n)
            }
        },
        3249: function(t, e, r) {
            "use strict";
            var n = r(21).Buffer,
                i = r(370),
                o = n.from([48, 129, 211, 2, 1, 1, 4, 32, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 160, 129, 133, 48, 129, 130, 2, 1, 1, 48, 44, 6, 7, 42, 134, 72, 206, 61, 1, 1, 2, 33, 0, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 254, 255, 255, 252, 47, 48, 6, 4, 1, 0, 4, 1, 7, 4, 33, 2, 121, 190, 102, 126, 249, 220, 187, 172, 85, 160, 98, 149, 206, 135, 11, 7, 2, 155, 252, 219, 45, 206, 40, 217, 89, 242, 129, 91, 22, 248, 23, 152, 2, 33, 0, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 254, 186, 174, 220, 230, 175, 72, 160, 59, 191, 210, 94, 140, 208, 54, 65, 65, 2, 1, 1, 161, 36, 3, 34, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]),
                s = n.from([48, 130, 1, 19, 2, 1, 1, 4, 32, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 160, 129, 165, 48, 129, 162, 2, 1, 1, 48, 44, 6, 7, 42, 134, 72, 206, 61, 1, 1, 2, 33, 0, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 254, 255, 255, 252, 47, 48, 6, 4, 1, 0, 4, 1, 7, 4, 65, 4, 121, 190, 102, 126, 249, 220, 187, 172, 85, 160, 98, 149, 206, 135, 11, 7, 2, 155, 252, 219, 45, 206, 40, 217, 89, 242, 129, 91, 22, 248, 23, 152, 72, 58, 218, 119, 38, 163, 196, 101, 93, 164, 251, 252, 14, 17, 8, 168, 253, 23, 180, 72, 166, 133, 84, 25, 156, 71, 208, 143, 251, 16, 212, 184, 2, 33, 0, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 254, 186, 174, 220, 230, 175, 72, 160, 59, 191, 210, 94, 140, 208, 54, 65, 65, 2, 1, 1, 161, 68, 3, 66, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
            e.privateKeyExport = function(t, e, r) {
                var i = n.from(r ? o : s);
                return t.copy(i, r ? 8 : 9), e.copy(i, r ? 181 : 214), i
            }, e.privateKeyImport = function(t) {
                var e = t.length,
                    r = 0;
                if (!(e < r + 1 || 48 !== t[r]) && !(e < (r += 1) + 1) && 128 & t[r]) {
                    var n = 127 & t[r];
                    if (r += 1, !(n < 1 || n > 2 || e < r + n)) {
                        var i = t[r + n - 1] | (n > 1 ? t[r + n - 2] << 8 : 0);
                        if (!(e < (r += n) + i || e < r + 3 || 2 !== t[r] || 1 !== t[r + 1] || 1 !== t[r + 2] || e < (r += 3) + 2 || 4 !== t[r] || t[r + 1] > 32 || e < r + 2 + t[r + 1])) return t.slice(r + 2, r + 2 + t[r + 1])
                    }
                }
            }, e.signatureExport = function(t) {
                for (var e = n.concat([n.from([0]), t.r]), r = 33, o = 0; r > 1 && 0 === e[o] && !(128 & e[o + 1]); --r, ++o);
                for (var s = n.concat([n.from([0]), t.s]), a = 33, c = 0; a > 1 && 0 === s[c] && !(128 & s[c + 1]); --a, ++c);
                return i.encode(e.slice(o), s.slice(c))
            }, e.signatureImport = function(t) {
                var e = n.alloc(32, 0),
                    r = n.alloc(32, 0);
                try {
                    var o = i.decode(t);
                    if (33 === o.r.length && 0 === o.r[0] && (o.r = o.r.slice(1)), o.r.length > 32) throw new Error("R length is too long");
                    if (33 === o.s.length && 0 === o.s[0] && (o.s = o.s.slice(1)), o.s.length > 32) throw new Error("S length is too long")
                } catch (t) {
                    return
                }
                return o.r.copy(e, 32 - o.r.length), o.s.copy(r, 32 - o.s.length), {
                    r: e,
                    s: r
                }
            }, e.signatureImportLax = function(t) {
                var e = n.alloc(32, 0),
                    r = n.alloc(32, 0),
                    i = t.length,
                    o = 0;
                if (48 === t[o++]) {
                    var s = t[o++];
                    if (!(128 & s && (o += s - 128) > i) && 2 === t[o++]) {
                        var a = t[o++];
                        if (128 & a) {
                            if (o + (s = a - 128) > i) return;
                            for (; s > 0 && 0 === t[o]; o += 1, s -= 1);
                            for (a = 0; s > 0; o += 1, s -= 1) a = (a << 8) + t[o]
                        }
                        if (!(a > i - o)) {
                            var c = o;
                            if (o += a, 2 === t[o++]) {
                                var h = t[o++];
                                if (128 & h) {
                                    if (o + (s = h - 128) > i) return;
                                    for (; s > 0 && 0 === t[o]; o += 1, s -= 1);
                                    for (h = 0; s > 0; o += 1, s -= 1) h = (h << 8) + t[o]
                                }
                                if (!(h > i - o)) {
                                    var f = o;
                                    for (o += h; a > 0 && 0 === t[c]; a -= 1, c += 1);
                                    if (!(a > 32)) {
                                        var u = t.slice(c, c + a);
                                        for (u.copy(e, 32 - u.length); h > 0 && 0 === t[f]; h -= 1, f += 1);
                                        if (!(h > 32)) {
                                            var l = t.slice(f, f + h);
                                            return l.copy(r, 32 - l.length), {
                                                r: e,
                                                s: r
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        },
        3250: function(t, e, r) {
            "use strict";
            var n = r(21).Buffer,
                i = r(101),
                o = r(35),
                s = r(85).ec,
                a = r(1770),
                c = new s("secp256k1"),
                h = c.curve;

            function f(t) {
                var e = t[0];
                switch (e) {
                    case 2:
                    case 3:
                        return 33 !== t.length ? null : function(t, e) {
                            var r = new o(e);
                            if (r.cmp(h.p) >= 0) return null;
                            var n = (r = r.toRed(h.red)).redSqr().redIMul(r).redIAdd(h.b).redSqrt();
                            return 3 === t !== n.isOdd() && (n = n.redNeg()), c.keyPair({
                                pub: {
                                    x: r,
                                    y: n
                                }
                            })
                        }(e, t.slice(1, 33));
                    case 4:
                    case 6:
                    case 7:
                        return 65 !== t.length ? null : function(t, e, r) {
                            var n = new o(e),
                                i = new o(r);
                            if (n.cmp(h.p) >= 0 || i.cmp(h.p) >= 0) return null;
                            if (n = n.toRed(h.red), i = i.toRed(h.red), (6 === t || 7 === t) && i.isOdd() !== (7 === t)) return null;
                            var s = n.redSqr().redIMul(n);
                            return i.redSqr().redISub(s.redIAdd(h.b)).isZero() ? c.keyPair({
                                pub: {
                                    x: n,
                                    y: i
                                }
                            }) : null
                        }(e, t.slice(1, 33), t.slice(33, 65));
                    default:
                        return null
                }
            }
            e.privateKeyVerify = function(t) {
                var e = new o(t);
                return e.cmp(h.n) < 0 && !e.isZero()
            }, e.privateKeyExport = function(t, e) {
                var r = new o(t);
                if (r.cmp(h.n) >= 0 || r.isZero()) throw new Error(a.EC_PRIVATE_KEY_EXPORT_DER_FAIL);
                return n.from(c.keyFromPrivate(t).getPublic(e, !0))
            }, e.privateKeyNegate = function(t) {
                var e = new o(t);
                return e.isZero() ? n.alloc(32) : h.n.sub(e).umod(h.n).toArrayLike(n, "be", 32)
            }, e.privateKeyModInverse = function(t) {
                var e = new o(t);
                if (e.cmp(h.n) >= 0 || e.isZero()) throw new Error(a.EC_PRIVATE_KEY_RANGE_INVALID);
                return e.invm(h.n).toArrayLike(n, "be", 32)
            }, e.privateKeyTweakAdd = function(t, e) {
                var r = new o(e);
                if (r.cmp(h.n) >= 0) throw new Error(a.EC_PRIVATE_KEY_TWEAK_ADD_FAIL);
                if (r.iadd(new o(t)), r.cmp(h.n) >= 0 && r.isub(h.n), r.isZero()) throw new Error(a.EC_PRIVATE_KEY_TWEAK_ADD_FAIL);
                return r.toArrayLike(n, "be", 32)
            }, e.privateKeyTweakMul = function(t, e) {
                var r = new o(e);
                if (r.cmp(h.n) >= 0 || r.isZero()) throw new Error(a.EC_PRIVATE_KEY_TWEAK_MUL_FAIL);
                return r.imul(new o(t)), r.cmp(h.n) && (r = r.umod(h.n)), r.toArrayLike(n, "be", 32)
            }, e.publicKeyCreate = function(t, e) {
                var r = new o(t);
                if (r.cmp(h.n) >= 0 || r.isZero()) throw new Error(a.EC_PUBLIC_KEY_CREATE_FAIL);
                return n.from(c.keyFromPrivate(t).getPublic(e, !0))
            }, e.publicKeyConvert = function(t, e) {
                var r = f(t);
                if (null === r) throw new Error(a.EC_PUBLIC_KEY_PARSE_FAIL);
                return n.from(r.getPublic(e, !0))
            }, e.publicKeyVerify = function(t) {
                return null !== f(t)
            }, e.publicKeyTweakAdd = function(t, e, r) {
                var i = f(t);
                if (null === i) throw new Error(a.EC_PUBLIC_KEY_PARSE_FAIL);
                if ((e = new o(e)).cmp(h.n) >= 0) throw new Error(a.EC_PUBLIC_KEY_TWEAK_ADD_FAIL);
                var s = h.g.mul(e).add(i.pub);
                if (s.isInfinity()) throw new Error(a.EC_PUBLIC_KEY_TWEAK_ADD_FAIL);
                return n.from(s.encode(!0, r))
            }, e.publicKeyTweakMul = function(t, e, r) {
                var i = f(t);
                if (null === i) throw new Error(a.EC_PUBLIC_KEY_PARSE_FAIL);
                if ((e = new o(e)).cmp(h.n) >= 0 || e.isZero()) throw new Error(a.EC_PUBLIC_KEY_TWEAK_MUL_FAIL);
                return n.from(i.pub.mul(e).encode(!0, r))
            }, e.publicKeyCombine = function(t, e) {
                for (var r = new Array(t.length), i = 0; i < t.length; ++i)
                    if (r[i] = f(t[i]), null === r[i]) throw new Error(a.EC_PUBLIC_KEY_PARSE_FAIL);
                for (var o = r[0].pub, s = 1; s < r.length; ++s) o = o.add(r[s].pub);
                if (o.isInfinity()) throw new Error(a.EC_PUBLIC_KEY_COMBINE_FAIL);
                return n.from(o.encode(!0, e))
            }, e.signatureNormalize = function(t) {
                var e = new o(t.slice(0, 32)),
                    r = new o(t.slice(32, 64));
                if (e.cmp(h.n) >= 0 || r.cmp(h.n) >= 0) throw new Error(a.ECDSA_SIGNATURE_PARSE_FAIL);
                var i = n.from(t);
                return 1 === r.cmp(c.nh) && h.n.sub(r).toArrayLike(n, "be", 32).copy(i, 32), i
            }, e.signatureExport = function(t) {
                var e = t.slice(0, 32),
                    r = t.slice(32, 64);
                if (new o(e).cmp(h.n) >= 0 || new o(r).cmp(h.n) >= 0) throw new Error(a.ECDSA_SIGNATURE_PARSE_FAIL);
                return {
                    r: e,
                    s: r
                }
            }, e.signatureImport = function(t) {
                var e = new o(t.r);
                e.cmp(h.n) >= 0 && (e = new o(0));
                var r = new o(t.s);
                return r.cmp(h.n) >= 0 && (r = new o(0)), n.concat([e.toArrayLike(n, "be", 32), r.toArrayLike(n, "be", 32)])
            }, e.sign = function(t, e, r, i) {
                if ("function" == typeof r) {
                    var s = r;
                    r = function(r) {
                        var c = s(t, e, null, i, r);
                        if (!n.isBuffer(c) || 32 !== c.length) throw new Error(a.ECDSA_SIGN_FAIL);
                        return new o(c)
                    }
                }
                var f = new o(e);
                if (f.cmp(h.n) >= 0 || f.isZero()) throw new Error(a.ECDSA_SIGN_FAIL);
                var u = c.sign(t, e, {
                    canonical: !0,
                    k: r,
                    pers: i
                });
                return {
                    signature: n.concat([u.r.toArrayLike(n, "be", 32), u.s.toArrayLike(n, "be", 32)]),
                    recovery: u.recoveryParam
                }
            }, e.verify = function(t, e, r) {
                var n = {
                        r: e.slice(0, 32),
                        s: e.slice(32, 64)
                    },
                    i = new o(n.r),
                    s = new o(n.s);
                if (i.cmp(h.n) >= 0 || s.cmp(h.n) >= 0) throw new Error(a.ECDSA_SIGNATURE_PARSE_FAIL);
                if (1 === s.cmp(c.nh) || i.isZero() || s.isZero()) return !1;
                var u = f(r);
                if (null === u) throw new Error(a.EC_PUBLIC_KEY_PARSE_FAIL);
                return c.verify(t, n, {
                    x: u.pub.x,
                    y: u.pub.y
                })
            }, e.recover = function(t, e, r, i) {
                var s = {
                        r: e.slice(0, 32),
                        s: e.slice(32, 64)
                    },
                    f = new o(s.r),
                    u = new o(s.s);
                if (f.cmp(h.n) >= 0 || u.cmp(h.n) >= 0) throw new Error(a.ECDSA_SIGNATURE_PARSE_FAIL);
                try {
                    if (f.isZero() || u.isZero()) throw new Error;
                    var l = c.recoverPubKey(t, s, r);
                    return n.from(l.encode(!0, i))
                } catch (t) {
                    throw new Error(a.ECDSA_RECOVER_FAIL)
                }
            }, e.ecdh = function(t, r) {
                var n = e.ecdhUnsafe(t, r, !0);
                return i("sha256").update(n).digest()
            }, e.ecdhUnsafe = function(t, e, r) {
                var i = f(t);
                if (null === i) throw new Error(a.EC_PUBLIC_KEY_PARSE_FAIL);
                var s = new o(e);
                if (s.cmp(h.n) >= 0 || s.isZero()) throw new Error(a.ECDH_FAIL);
                return n.from(i.pub.mul(s).encode(!0, r))
            }
        },
        3698: function(t, e, r) {
            "use strict";
            t.exports = Object.setPrototypeOf || ({
                    __proto__: []
                }
                instanceof Array ? function(t, e) {
                    return t.__proto__ = e, t
                } : function(t, e) {
                    for (var r in e) Object.prototype.hasOwnProperty.call(t, r) || (t[r] = e[r]);
                    return t
                })
        },
        383: function(t, e, r) {
            var n = r(21).Buffer;

            function i(t, e) {
                this._block = n.alloc(t), this._finalSize = e, this._blockSize = t, this._len = 0
            }
            i.prototype.update = function(t, e) {
                "string" == typeof t && (e = e || "utf8", t = n.from(t, e));
                for (var r = this._block, i = this._blockSize, o = t.length, s = this._len, a = 0; a < o;) {
                    for (var c = s % i, h = Math.min(o - a, i - c), f = 0; f < h; f++) r[c + f] = t[a + f];
                    a += h, (s += h) % i == 0 && this._update(r)
                }
                return this._len += o, this
            }, i.prototype.digest = function(t) {
                var e = this._len % this._blockSize;
                this._block[e] = 128, this._block.fill(0, e + 1), e >= this._finalSize && (this._update(this._block), this._block.fill(0));
                var r = 8 * this._len;
                if (r <= 4294967295) this._block.writeUInt32BE(r, this._blockSize - 4);
                else {
                    var n = (4294967295 & r) >>> 0,
                        i = (r - n) / 4294967296;
                    this._block.writeUInt32BE(i, this._blockSize - 8), this._block.writeUInt32BE(n, this._blockSize - 4)
                }
                this._update(this._block);
                var o = this._hash();
                return t ? o.toString(t) : o
            }, i.prototype._update = function() {
                throw new Error("_update must be implemented by subclass")
            }, t.exports = i
        },
        77: function(t, e, r) {
            "use strict";
            var n, i = r(12),
                o = i.Buffer,
                s = {};
            for (n in i) i.hasOwnProperty(n) && "SlowBuffer" !== n && "Buffer" !== n && (s[n] = i[n]);
            var a = s.Buffer = {};
            for (n in o) o.hasOwnProperty(n) && "allocUnsafe" !== n && "allocUnsafeSlow" !== n && (a[n] = o[n]);
            if (s.Buffer.prototype = o.prototype, a.from && a.from !== Uint8Array.from || (a.from = function(t, e, r) {
                    if ("number" == typeof t) throw new TypeError('The "value" argument must not be of type number. Received type ' + typeof t);
                    if (t && void 0 === t.length) throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof t);
                    return o(t, e, r)
                }), a.alloc || (a.alloc = function(t, e, r) {
                    if ("number" != typeof t) throw new TypeError('The "size" argument must be of type number. Received type ' + typeof t);
                    if (t < 0 || t >= 2 * (1 << 30)) throw new RangeError('The value "' + t + '" is invalid for option "size"');
                    var n = o(t);
                    return e && 0 !== e.length ? "string" == typeof r ? n.fill(e, r) : n.fill(e) : n.fill(0), n
                }), !s.kStringMaxLength) try {
                s.kStringMaxLength = process.binding("buffer").kStringMaxLength
            } catch (t) {}
            s.constants || (s.constants = {
                MAX_LENGTH: s.kMaxLength
            }, s.kStringMaxLength && (s.constants.MAX_STRING_LENGTH = s.kStringMaxLength)), t.exports = s
        },
        940: function(t, e, r) {
            "use strict";
            ! function(e) {
                function r(t) {
                    const e = new Uint32Array([1116352408, 1899447441, 3049323471, 3921009573, 961987163, 1508970993, 2453635748, 2870763221, 3624381080, 310598401, 607225278, 1426881987, 1925078388, 2162078206, 2614888103, 3248222580, 3835390401, 4022224774, 264347078, 604807628, 770255983, 1249150122, 1555081692, 1996064986, 2554220882, 2821834349, 2952996808, 3210313671, 3336571891, 3584528711, 113926993, 338241895, 666307205, 773529912, 1294757372, 1396182291, 1695183700, 1986661051, 2177026350, 2456956037, 2730485921, 2820302411, 3259730800, 3345764771, 3516065817, 3600352804, 4094571909, 275423344, 430227734, 506948616, 659060556, 883997877, 958139571, 1322822218, 1537002063, 1747873779, 1955562222, 2024104815, 2227730452, 2361852424, 2428436474, 2756734187, 3204031479, 3329325298]);
                    let r = 1779033703,
                        n = 3144134277,
                        i = 1013904242,
                        o = 2773480762,
                        s = 1359893119,
                        a = 2600822924,
                        c = 528734635,
                        h = 1541459225;
                    const f = new Uint32Array(64);

                    function u(t) {
                        let u = 0,
                            l = t.length;
                        for (; l >= 64;) {
                            let _, p, d, E, y, w = r,
                                I = n,
                                g = i,
                                A = o,
                                m = s,
                                v = a,
                                b = c,
                                L = h;
                            for (p = 0; p < 16; p++) d = u + 4 * p, f[p] = (255 & t[d]) << 24 | (255 & t[d + 1]) << 16 | (255 & t[d + 2]) << 8 | 255 & t[d + 3];
                            for (p = 16; p < 64; p++) _ = f[p - 2], E = (_ >>> 17 | _ << 15) ^ (_ >>> 19 | _ << 13) ^ _ >>> 10, _ = f[p - 15], y = (_ >>> 7 | _ << 25) ^ (_ >>> 18 | _ << 14) ^ _ >>> 3, f[p] = (E + f[p - 7] | 0) + (y + f[p - 16] | 0) | 0;
                            for (p = 0; p < 64; p++) E = (((m >>> 6 | m << 26) ^ (m >>> 11 | m << 21) ^ (m >>> 25 | m << 7)) + (m & v ^ ~m & b) | 0) + (L + (e[p] + f[p] | 0) | 0) | 0, y = ((w >>> 2 | w << 30) ^ (w >>> 13 | w << 19) ^ (w >>> 22 | w << 10)) + (w & I ^ w & g ^ I & g) | 0, L = b, b = v, v = m, m = A + E | 0, A = g, g = I, I = w, w = E + y | 0;
                            r = r + w | 0, n = n + I | 0, i = i + g | 0, o = o + A | 0, s = s + m | 0, a = a + v | 0, c = c + b | 0, h = h + L | 0, u += 64, l -= 64
                        }
                    }
                    u(t);
                    let l, _ = t.length % 64,
                        p = t.length / 536870912 | 0,
                        d = t.length << 3,
                        E = _ < 56 ? 56 : 120,
                        y = t.slice(t.length - _, t.length);
                    for (y.push(128), l = _ + 1; l < E; l++) y.push(0);
                    return y.push(p >>> 24 & 255), y.push(p >>> 16 & 255), y.push(p >>> 8 & 255), y.push(p >>> 0 & 255), y.push(d >>> 24 & 255), y.push(d >>> 16 & 255), y.push(d >>> 8 & 255), y.push(d >>> 0 & 255), u(y), [r >>> 24 & 255, r >>> 16 & 255, r >>> 8 & 255, r >>> 0 & 255, n >>> 24 & 255, n >>> 16 & 255, n >>> 8 & 255, n >>> 0 & 255, i >>> 24 & 255, i >>> 16 & 255, i >>> 8 & 255, i >>> 0 & 255, o >>> 24 & 255, o >>> 16 & 255, o >>> 8 & 255, o >>> 0 & 255, s >>> 24 & 255, s >>> 16 & 255, s >>> 8 & 255, s >>> 0 & 255, a >>> 24 & 255, a >>> 16 & 255, a >>> 8 & 255, a >>> 0 & 255, c >>> 24 & 255, c >>> 16 & 255, c >>> 8 & 255, c >>> 0 & 255, h >>> 24 & 255, h >>> 16 & 255, h >>> 8 & 255, h >>> 0 & 255]
                }

                function n(t, e, n) {
                    t = t.length <= 64 ? t : r(t);
                    const i = 64 + e.length + 4,
                        o = new Array(i),
                        s = new Array(64);
                    let a, c = [];
                    for (a = 0; a < 64; a++) o[a] = 54;
                    for (a = 0; a < t.length; a++) o[a] ^= t[a];
                    for (a = 0; a < e.length; a++) o[64 + a] = e[a];
                    for (a = i - 4; a < i; a++) o[a] = 0;
                    for (a = 0; a < 64; a++) s[a] = 92;
                    for (a = 0; a < t.length; a++) s[a] ^= t[a];

                    function h() {
                        for (let t = i - 1; t >= i - 4; t--) {
                            if (o[t]++, o[t] <= 255) return;
                            o[t] = 0
                        }
                    }
                    for (; n >= 32;) h(), c = c.concat(r(s.concat(r(o)))), n -= 32;
                    return n > 0 && (h(), c = c.concat(r(s.concat(r(o))).slice(0, n))), c
                }

                function i(t, e, r, n, i) {
                    let o;
                    for (c(t, 16 * (2 * r - 1), i, 0, 16), o = 0; o < 2 * r; o++) a(t, 16 * o, i, 16), s(i, n), c(i, 0, t, e + 16 * o, 16);
                    for (o = 0; o < r; o++) c(t, e + 2 * o * 16, t, 16 * o, 16);
                    for (o = 0; o < r; o++) c(t, e + 16 * (2 * o + 1), t, 16 * (o + r), 16)
                }

                function o(t, e) {
                    return t << e | t >>> 32 - e
                }

                function s(t, e) {
                    c(t, 0, e, 0, 16);
                    for (let t = 8; t > 0; t -= 2) e[4] ^= o(e[0] + e[12], 7), e[8] ^= o(e[4] + e[0], 9), e[12] ^= o(e[8] + e[4], 13), e[0] ^= o(e[12] + e[8], 18), e[9] ^= o(e[5] + e[1], 7), e[13] ^= o(e[9] + e[5], 9), e[1] ^= o(e[13] + e[9], 13), e[5] ^= o(e[1] + e[13], 18), e[14] ^= o(e[10] + e[6], 7), e[2] ^= o(e[14] + e[10], 9), e[6] ^= o(e[2] + e[14], 13), e[10] ^= o(e[6] + e[2], 18), e[3] ^= o(e[15] + e[11], 7), e[7] ^= o(e[3] + e[15], 9), e[11] ^= o(e[7] + e[3], 13), e[15] ^= o(e[11] + e[7], 18), e[1] ^= o(e[0] + e[3], 7), e[2] ^= o(e[1] + e[0], 9), e[3] ^= o(e[2] + e[1], 13), e[0] ^= o(e[3] + e[2], 18), e[6] ^= o(e[5] + e[4], 7), e[7] ^= o(e[6] + e[5], 9), e[4] ^= o(e[7] + e[6], 13), e[5] ^= o(e[4] + e[7], 18), e[11] ^= o(e[10] + e[9], 7), e[8] ^= o(e[11] + e[10], 9), e[9] ^= o(e[8] + e[11], 13), e[10] ^= o(e[9] + e[8], 18), e[12] ^= o(e[15] + e[14], 7), e[13] ^= o(e[12] + e[15], 9), e[14] ^= o(e[13] + e[12], 13), e[15] ^= o(e[14] + e[13], 18);
                    for (let r = 0; r < 16; ++r) t[r] += e[r]
                }

                function a(t, e, r, n) {
                    for (let i = 0; i < n; i++) r[i] ^= t[e + i]
                }

                function c(t, e, r, n, i) {
                    for (; i--;) r[n++] = t[e++]
                }

                function h(t) {
                    if (!t || "number" != typeof t.length) return !1;
                    for (let e = 0; e < t.length; e++) {
                        const r = t[e];
                        if ("number" != typeof r || r % 1 || r < 0 || r >= 256) return !1
                    }
                    return !0
                }

                function f(t, e) {
                    if ("number" != typeof t || t % 1) throw new Error("invalid " + e);
                    return t
                }

                function u(t, e, r, o, s, u, l) {
                    if (r = f(r, "N"), o = f(o, "r"), s = f(s, "p"), u = f(u, "dkLen"), 0 === r || 0 != (r & r - 1)) throw new Error("N must be power of 2");
                    if (r > 2147483647 / 128 / o) throw new Error("N too large");
                    if (o > 2147483647 / 128 / s) throw new Error("r too large");
                    if (!h(t)) throw new Error("password must be an array or buffer");
                    if (t = Array.prototype.slice.call(t), !h(e)) throw new Error("salt must be an array or buffer");
                    e = Array.prototype.slice.call(e);
                    let _ = n(t, e, 128 * s * o);
                    const p = new Uint32Array(32 * s * o);
                    for (let t = 0; t < p.length; t++) {
                        const e = 4 * t;
                        p[t] = (255 & _[e + 3]) << 24 | (255 & _[e + 2]) << 16 | (255 & _[e + 1]) << 8 | (255 & _[e + 0]) << 0
                    }
                    const d = new Uint32Array(64 * o),
                        E = new Uint32Array(32 * o * r),
                        y = 32 * o,
                        w = new Uint32Array(16),
                        I = new Uint32Array(16),
                        g = s * r * 2;
                    let A, m, v = 0,
                        b = null,
                        L = !1,
                        B = 0,
                        T = 0;
                    const N = l ? parseInt(1e3 / o) : 4294967295,
                        C = "undefined" != typeof setImmediate ? setImmediate : setTimeout,
                        P = function() {
                            if (L) return l(new Error("cancelled"), v / g);
                            let e;
                            switch (B) {
                                case 0:
                                    m = 32 * T * o, c(p, m, d, 0, y), B = 1, A = 0;
                                case 1:
                                    e = r - A, e > N && (e = N);
                                    for (let t = 0; t < e; t++) c(d, 0, E, (A + t) * y, y), i(d, y, o, w, I);
                                    if (A += e, v += e, l) {
                                        const t = parseInt(1e3 * v / g);
                                        if (t !== b) {
                                            if (L = l(null, v / g), L) break;
                                            b = t
                                        }
                                    }
                                    if (A < r) break;
                                    A = 0, B = 2;
                                case 2:
                                    e = r - A, e > N && (e = N);
                                    for (let t = 0; t < e; t++) {
                                        const t = d[16 * (2 * o - 1)] & r - 1;
                                        a(E, t * y, d, y), i(d, y, o, w, I)
                                    }
                                    if (A += e, v += e, l) {
                                        const t = parseInt(1e3 * v / g);
                                        if (t !== b) {
                                            if (L = l(null, v / g), L) break;
                                            b = t
                                        }
                                    }
                                    if (A < r) break;
                                    if (c(d, 0, p, m, y), T++, T < s) {
                                        B = 0;
                                        break
                                    }
                                    _ = [];
                                    for (let t = 0; t < p.length; t++) _.push(p[t] >> 0 & 255), _.push(p[t] >> 8 & 255), _.push(p[t] >> 16 & 255), _.push(p[t] >> 24 & 255);
                                    const h = n(t, _, u);
                                    return l && l(null, 1, h), h
                            }
                            l && C(P)
                        };
                    if (!l)
                        for (;;) {
                            const t = P();
                            if (null != t) return t
                        }
                    P()
                }
                const l = {
                    scrypt: function(t, e, r, n, i, o, s) {
                        return new Promise((function(a, c) {
                            let h = 0;
                            s && s(0), u(t, e, r, n, i, o, (function(t, e, r) {
                                if (t) c(t);
                                else if (r) s && 1 !== h && s(1), a(new Uint8Array(r));
                                else if (s && e !== h) return h = e, s(e)
                            }))
                        }))
                    },
                    syncScrypt: function(t, e, r, n, i, o) {
                        return new Uint8Array(u(t, e, r, n, i, o))
                    }
                };
                t.exports = l
            }()
        }
    }
]);