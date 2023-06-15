/*! For license information please see vendors.ce409b63bbe62f97c79e.js.LICENSE.txt */
(window.webpackJsonp = window.webpackJsonp || []).push([
    [144], {
        1836: function(t, e, o) {
            "use strict";
            var r;
            ! function(s) {
                function n(t, e, o) {
                    var r, s, n, a, g, f, h, y, A, C = 0,
                        B = [],
                        b = 0,
                        F = !1,
                        w = [],
                        U = [],
                        O = !1;
                    if (r = (o = o || {}).encoding || "UTF8", (A = o.numRounds || 1) !== parseInt(A, 10) || 1 > A) throw Error("numRounds must a integer >= 1");
                    if (0 !== t.lastIndexOf("SHA-", 0)) throw Error("Chosen SHA variant is not supported");
                    if (f = function(e, o) {
                            return m(e, o, t)
                        }, h = function(e, o, r, s) {
                            var n, a;
                            if ("SHA-224" !== t && "SHA-256" !== t) throw Error("Unexpected error in SHA-2 implementation");
                            for (n = 15 + (o + 65 >>> 9 << 4), a = 16; e.length <= n;) e.push(0);
                            for (e[o >>> 5] |= 128 << 24 - o % 32, o += r, e[n] = 4294967295 & o, e[n - 1] = o / 4294967296 | 0, r = e.length, o = 0; o < r; o += a) s = m(e.slice(o, o + a), s, t);
                            if ("SHA-224" === t) e = [s[0], s[1], s[2], s[3], s[4], s[5], s[6]];
                            else {
                                if ("SHA-256" !== t) throw Error("Unexpected error in SHA-2 implementation");
                                e = s
                            }
                            return e
                        }, y = function(t) {
                            return t.slice()
                        }, "SHA-224" === t) g = 512, a = 224;
                    else {
                        if ("SHA-256" !== t) throw Error("Chosen SHA variant is not supported");
                        g = 512, a = 256
                    }
                    n = d(e, r), s = M(t), this.setHMACKey = function(e, o, n) {
                        var a;
                        if (!0 === F) throw Error("HMAC key already set");
                        if (!0 === O) throw Error("Cannot set HMAC key after calling update");
                        if (e = (o = d(o, r = (n || {}).encoding || "UTF8")(e)).binLen, o = o.value, n = (a = g >>> 3) / 4 - 1, a < e / 8) {
                            for (o = h(o, e, 0, M(t)); o.length <= n;) o.push(0);
                            o[n] &= 4294967040
                        } else if (a > e / 8) {
                            for (; o.length <= n;) o.push(0);
                            o[n] &= 4294967040
                        }
                        for (e = 0; e <= n; e += 1) w[e] = 909522486 ^ o[e], U[e] = 1549556828 ^ o[e];
                        s = f(w, s), C = g, F = !0
                    }, this.update = function(t) {
                        var e, o, r, a = 0,
                            i = g >>> 5;
                        for (t = (e = n(t, B, b)).binLen, o = e.value, e = t >>> 5, r = 0; r < e; r += i) a + g <= t && (s = f(o.slice(r, r + i), s), a += g);
                        C += a, B = o.slice(a >>> 5), b = t % g, O = !0
                    }, this.getHash = function(e, o) {
                        var r, n, d, g;
                        if (!0 === F) throw Error("Cannot call getHash after setting HMAC key");
                        switch (d = u(o), e) {
                            case "HEX":
                                r = function(t) {
                                    return i(t, a, d)
                                };
                                break;
                            case "B64":
                                r = function(t) {
                                    return p(t, a, d)
                                };
                                break;
                            case "BYTES":
                                r = function(t) {
                                    return c(t, a)
                                };
                                break;
                            case "ARRAYBUFFER":
                                try {
                                    n = new ArrayBuffer(0)
                                } catch (t) {
                                    throw Error("ARRAYBUFFER not supported by this environment")
                                }
                                r = function(t) {
                                    return l(t, a)
                                };
                                break;
                            default:
                                throw Error("format must be HEX, B64, BYTES, or ARRAYBUFFER")
                        }
                        for (g = h(B.slice(), b, C, y(s)), n = 1; n < A; n += 1) g = h(g, a, 0, M(t));
                        return r(g)
                    }, this.getHMAC = function(e, o) {
                        var r, n, d, A;
                        if (!1 === F) throw Error("Cannot call getHMAC without first setting HMAC key");
                        switch (d = u(o), e) {
                            case "HEX":
                                r = function(t) {
                                    return i(t, a, d)
                                };
                                break;
                            case "B64":
                                r = function(t) {
                                    return p(t, a, d)
                                };
                                break;
                            case "BYTES":
                                r = function(t) {
                                    return c(t, a)
                                };
                                break;
                            case "ARRAYBUFFER":
                                try {
                                    r = new ArrayBuffer(0)
                                } catch (t) {
                                    throw Error("ARRAYBUFFER not supported by this environment")
                                }
                                r = function(t) {
                                    return l(t, a)
                                };
                                break;
                            default:
                                throw Error("outputFormat must be HEX, B64, BYTES, or ARRAYBUFFER")
                        }
                        return n = h(B.slice(), b, C, y(s)), A = f(U, M(t)), r(A = h(n, a, g, A))
                    }
                }

                function a() {}

                function i(t, e, o) {
                    var r, s, n = "";
                    for (e /= 8, r = 0; r < e; r += 1) s = t[r >>> 2] >>> 8 * (3 + r % 4 * -1), n += "0123456789abcdef".charAt(s >>> 4 & 15) + "0123456789abcdef".charAt(15 & s);
                    return o.outputUpper ? n.toUpperCase() : n
                }

                function p(t, e, o) {
                    var r, s, n, a = "",
                        i = e / 8;
                    for (r = 0; r < i; r += 3)
                        for (s = r + 1 < i ? t[r + 1 >>> 2] : 0, n = r + 2 < i ? t[r + 2 >>> 2] : 0, n = (t[r >>> 2] >>> 8 * (3 + r % 4 * -1) & 255) << 16 | (s >>> 8 * (3 + (r + 1) % 4 * -1) & 255) << 8 | n >>> 8 * (3 + (r + 2) % 4 * -1) & 255, s = 0; 4 > s; s += 1) a += 8 * r + 6 * s <= e ? "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".charAt(n >>> 6 * (3 - s) & 63) : o.b64Pad;
                    return a
                }

                function c(t, e) {
                    var o, r, s = "",
                        n = e / 8;
                    for (o = 0; o < n; o += 1) r = t[o >>> 2] >>> 8 * (3 + o % 4 * -1) & 255, s += String.fromCharCode(r);
                    return s
                }

                function l(t, e) {
                    var o, r, s = e / 8,
                        n = new ArrayBuffer(s);
                    for (r = new Uint8Array(n), o = 0; o < s; o += 1) r[o] = t[o >>> 2] >>> 8 * (3 + o % 4 * -1) & 255;
                    return n
                }

                function u(t) {
                    var e = {
                        outputUpper: !1,
                        b64Pad: "=",
                        shakeLen: -1
                    };
                    if (t = t || {}, e.outputUpper = t.outputUpper || !1, !0 === t.hasOwnProperty("b64Pad") && (e.b64Pad = t.b64Pad), "boolean" != typeof e.outputUpper) throw Error("Invalid outputUpper formatting option");
                    if ("string" != typeof e.b64Pad) throw Error("Invalid b64Pad formatting option");
                    return e
                }

                function d(t, e) {
                    var o;
                    switch (e) {
                        case "UTF8":
                        case "UTF16BE":
                        case "UTF16LE":
                            break;
                        default:
                            throw Error("encoding must be UTF8, UTF16BE, or UTF16LE")
                    }
                    switch (t) {
                        case "HEX":
                            o = function(t, e, o) {
                                var r, s, n, a, i, p = t.length;
                                if (0 != p % 2) throw Error("String of HEX type must be in byte increments");
                                for (e = e || [0], i = (o = o || 0) >>> 3, r = 0; r < p; r += 2) {
                                    if (s = parseInt(t.substr(r, 2), 16), isNaN(s)) throw Error("String of HEX type contains invalid characters");
                                    for (n = (a = (r >>> 1) + i) >>> 2; e.length <= n;) e.push(0);
                                    e[n] |= s << 8 * (3 + a % 4 * -1)
                                }
                                return {
                                    value: e,
                                    binLen: 4 * p + o
                                }
                            };
                            break;
                        case "TEXT":
                            o = function(t, o, r) {
                                var s, n, a, i, p, c, l, u, d = 0;
                                if (o = o || [0], p = (r = r || 0) >>> 3, "UTF8" === e)
                                    for (u = 3, a = 0; a < t.length; a += 1)
                                        for (n = [], 128 > (s = t.charCodeAt(a)) ? n.push(s) : 2048 > s ? (n.push(192 | s >>> 6), n.push(128 | 63 & s)) : 55296 > s || 57344 <= s ? n.push(224 | s >>> 12, 128 | s >>> 6 & 63, 128 | 63 & s) : (a += 1, s = 65536 + ((1023 & s) << 10 | 1023 & t.charCodeAt(a)), n.push(240 | s >>> 18, 128 | s >>> 12 & 63, 128 | s >>> 6 & 63, 128 | 63 & s)), i = 0; i < n.length; i += 1) {
                                            for (c = (l = d + p) >>> 2; o.length <= c;) o.push(0);
                                            o[c] |= n[i] << 8 * (u + l % 4 * -1), d += 1
                                        } else if ("UTF16BE" === e || "UTF16LE" === e)
                                            for (u = 2, n = "UTF16LE" === e || "UTF16LE" !== e && !1, a = 0; a < t.length; a += 1) {
                                                for (s = t.charCodeAt(a), !0 === n && (s = (i = 255 & s) << 8 | s >>> 8), c = (l = d + p) >>> 2; o.length <= c;) o.push(0);
                                                o[c] |= s << 8 * (u + l % 4 * -1), d += 2
                                            }
                                return {
                                    value: o,
                                    binLen: 8 * d + r
                                }
                            };
                            break;
                        case "B64":
                            o = function(t, e, o) {
                                var r, s, n, a, i, p, c, l = 0;
                                if (-1 === t.search(/^[a-zA-Z0-9=+\/]+$/)) throw Error("Invalid character in base-64 string");
                                if (s = t.indexOf("="), t = t.replace(/\=/g, ""), -1 !== s && s < t.length) throw Error("Invalid '=' found in base-64 string");
                                for (e = e || [0], p = (o = o || 0) >>> 3, s = 0; s < t.length; s += 4) {
                                    for (i = t.substr(s, 4), n = a = 0; n < i.length; n += 1) a |= (r = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".indexOf(i[n])) << 18 - 6 * n;
                                    for (n = 0; n < i.length - 1; n += 1) {
                                        for (r = (c = l + p) >>> 2; e.length <= r;) e.push(0);
                                        e[r] |= (a >>> 16 - 8 * n & 255) << 8 * (3 + c % 4 * -1), l += 1
                                    }
                                }
                                return {
                                    value: e,
                                    binLen: 8 * l + o
                                }
                            };
                            break;
                        case "BYTES":
                            o = function(t, e, o) {
                                var r, s, n, a, i;
                                for (e = e || [0], n = (o = o || 0) >>> 3, s = 0; s < t.length; s += 1) r = t.charCodeAt(s), a = (i = s + n) >>> 2, e.length <= a && e.push(0), e[a] |= r << 8 * (3 + i % 4 * -1);
                                return {
                                    value: e,
                                    binLen: 8 * t.length + o
                                }
                            };
                            break;
                        case "ARRAYBUFFER":
                            try {
                                o = new ArrayBuffer(0)
                            } catch (t) {
                                throw Error("ARRAYBUFFER not supported by this environment")
                            }
                            o = function(t, e, o) {
                                var r, s, n, a, i;
                                for (e = e || [0], s = (o = o || 0) >>> 3, i = new Uint8Array(t), r = 0; r < t.byteLength; r += 1) n = (a = r + s) >>> 2, e.length <= n && e.push(0), e[n] |= i[r] << 8 * (3 + a % 4 * -1);
                                return {
                                    value: e,
                                    binLen: 8 * t.byteLength + o
                                }
                            };
                            break;
                        default:
                            throw Error("format must be HEX, TEXT, B64, BYTES, or ARRAYBUFFER")
                    }
                    return o
                }

                function g(t, e) {
                    return t >>> e | t << 32 - e
                }

                function f(t, e, o) {
                    return t & e ^ ~t & o
                }

                function h(t, e, o) {
                    return t & e ^ t & o ^ e & o
                }

                function y(t) {
                    return g(t, 2) ^ g(t, 13) ^ g(t, 22)
                }

                function A(t) {
                    return g(t, 6) ^ g(t, 11) ^ g(t, 25)
                }

                function C(t) {
                    return g(t, 7) ^ g(t, 18) ^ t >>> 3
                }

                function B(t) {
                    return g(t, 17) ^ g(t, 19) ^ t >>> 10
                }

                function b(t, e) {
                    var o = (65535 & t) + (65535 & e);
                    return ((t >>> 16) + (e >>> 16) + (o >>> 16) & 65535) << 16 | 65535 & o
                }

                function F(t, e, o, r) {
                    var s = (65535 & t) + (65535 & e) + (65535 & o) + (65535 & r);
                    return ((t >>> 16) + (e >>> 16) + (o >>> 16) + (r >>> 16) + (s >>> 16) & 65535) << 16 | 65535 & s
                }

                function w(t, e, o, r, s) {
                    var n = (65535 & t) + (65535 & e) + (65535 & o) + (65535 & r) + (65535 & s);
                    return ((t >>> 16) + (e >>> 16) + (o >>> 16) + (r >>> 16) + (s >>> 16) + (n >>> 16) & 65535) << 16 | 65535 & n
                }

                function M(t) {
                    var e, o = [];
                    if (0 !== t.lastIndexOf("SHA-", 0)) throw Error("No SHA variants supported");
                    switch (o = [3238371032, 914150663, 812702999, 4144912697, 4290775857, 1750603025, 1694076839, 3204075428], e = [1779033703, 3144134277, 1013904242, 2773480762, 1359893119, 2600822924, 528734635, 1541459225], t) {
                        case "SHA-224":
                            break;
                        case "SHA-256":
                            o = e;
                            break;
                        case "SHA-384":
                        case "SHA-512":
                            o = [new a, new a, new a, new a, new a, new a, new a, new a];
                            break;
                        default:
                            throw Error("Unknown SHA variant")
                    }
                    return o
                }

                function m(t, e, o) {
                    var r, s, n, a, i, p, c, l, u, d, g, M, m, O, T, W, z, E, v, I, N, _, D, P = [];
                    if ("SHA-224" !== o && "SHA-256" !== o) throw Error("Unexpected error in SHA-2 implementation");
                    for (d = 64, M = 1, _ = Number, m = b, O = F, T = w, W = C, z = B, E = y, v = A, N = h, I = f, D = U, o = e[0], r = e[1], s = e[2], n = e[3], a = e[4], i = e[5], p = e[6], c = e[7], g = 0; g < d; g += 1) 16 > g ? (u = g * M, l = t.length <= u ? 0 : t[u], u = t.length <= u + 1 ? 0 : t[u + 1], P[g] = new _(l, u)) : P[g] = O(z(P[g - 2]), P[g - 7], W(P[g - 15]), P[g - 16]), l = T(c, v(a), I(a, i, p), D[g], P[g]), u = m(E(o), N(o, r, s)), c = p, p = i, i = a, a = m(n, l), n = s, s = r, r = o, o = m(l, u);
                    return e[0] = m(o, e[0]), e[1] = m(r, e[1]), e[2] = m(s, e[2]), e[3] = m(n, e[3]), e[4] = m(a, e[4]), e[5] = m(i, e[5]), e[6] = m(p, e[6]), e[7] = m(c, e[7]), e
                }
                var U;
                U = [1116352408, 1899447441, 3049323471, 3921009573, 961987163, 1508970993, 2453635748, 2870763221, 3624381080, 310598401, 607225278, 1426881987, 1925078388, 2162078206, 2614888103, 3248222580, 3835390401, 4022224774, 264347078, 604807628, 770255983, 1249150122, 1555081692, 1996064986, 2554220882, 2821834349, 2952996808, 3210313671, 3336571891, 3584528711, 113926993, 338241895, 666307205, 773529912, 1294757372, 1396182291, 1695183700, 1986661051, 2177026350, 2456956037, 2730485921, 2820302411, 3259730800, 3345764771, 3516065817, 3600352804, 4094571909, 275423344, 430227734, 506948616, 659060556, 883997877, 958139571, 1322822218, 1537002063, 1747873779, 1955562222, 2024104815, 2227730452, 2361852424, 2428436474, 2756734187, 3204031479, 3329325298], void 0 === (r = function() {
                    return n
                }.call(e, o, e, t)) || (t.exports = r)
            }()
        },
        3417: function(t, e, o) {
            const r = o(3418),
                s = o(1834),
                n = o(1836),
                a = o(1837),
                i = o(411);
            t.exports = {
                Client: r,
                transactionBuilder: s,
                sha256: n,
                bytes: a,
                code: i
            }
        },
        3418: function(t, e, o) {
            const r = o(556),
                {
                    buildTransferTransaction: s,
                    buildVote: n,
                    buildAssetParticipate: a,
                    buildFreezeBalance: i,
                    buildAssetIssue: p,
                    buildUnfreezeBalance: c,
                    buildAccountUpdate: l,
                    buildWitnessUpdate: u,
                    buildWithdrawBalance: d,
                    buildWitnessCreate: g,
                    buildUnfreezeAsset: f
                } = o(1834),
                {
                    hexStr2byteArray: h
                } = o(411),
                y = o(3442),
                A = o(411).encodeString,
                C = o(1067).pkToAddress;
            t.exports = class ApiClient {
                constructor() {
                    this.apiUrl = process.env.API_URL, this.signer = null
                }
                setSigner(t) {
                    this.signer = t
                }
                send(t, e, o, r) {
                    let n = s(t, e, o, r);
                    return t => this.sendTransaction(t, n)
                }
                sendWithNote(t, e, o, r, n) {
                    let a = s(t, e, o, r);
                    if (n.length > 0) {
                        let t = a.getRawData();
                        t.setData(A(encodeURIComponent(n))), a.setRawData(t)
                    }
                    return t => this.sendTransaction(t, a)
                }
                async addRef(t) {
                    let e = await this.getLatestBlock(),
                        o = e.hash,
                        r = function(t) {
                            for (var e = [0, 0, 0, 0, 0, 0, 0, 0], o = 0; o < e.length; o++) {
                                var r = 255 & t;
                                e[o] = r, t = (t - r) / 256
                            }
                            return e
                        }(e.number);
                    r.reverse();
                    let s = h(o),
                        n = [...r.slice(0, 8), ...s.slice(8, s.length - 1)],
                        a = t.getRawData();
                    return a.setRefBlockHash(Uint8Array.from(n.slice(8, 16))), a.setRefBlockBytes(Uint8Array.from(r.slice(6, 8))), a.setExpiration(e.timestamp + 3e5), t.setRawData(a), t
                }
                getSigner(t) {
                    return this.signer || new y(t)
                }
                async sendTransaction(t, e) {
                    e = await this.addRef(e);
                    let o = this.getSigner(t),
                        {
                            hex: s
                        } = await o.signTransaction(e),
                        {
                            data: n
                        } = await r.post(this.apiUrl + "/api/transaction", {
                            transaction: s
                        });
                    return n
                }
                async sendTransactionRaw(t) {
                    let {
                        data: e
                    } = await r.post(this.apiUrl + "/api/transaction", {
                        transaction: t
                    });
                    return e
                }
                async auth(t) {
                    let e = u(C(t), "UPDATE_SR"),
                        o = this.getSigner(t),
                        {
                            hex: s
                        } = await o.signTransaction(e),
                        {
                            data: n
                        } = await r.post(this.apiUrl + "/api/auth", {
                            transaction: s
                        });
                    return n.key
                }
                async updateSuperRepresentative(t, e) {
                    await r.post(`${this.apiUrl}/api/account/${e.address}/sr`, e, {
                        headers: {
                            "X-Key": t
                        }
                    })
                }
                async getSuperRepresentative(t) {
                    let {
                        data: e
                    } = await r.get(`${this.apiUrl}/api/account/${t}/sr`);
                    return e
                }
                updateAccountName(t, e) {
                    let o = l(t, e);
                    return t => this.sendTransaction(t, o)
                }
                updateWitnessUrl(t, e) {
                    let o = u(t, e);
                    return t => this.sendTransaction(t, o)
                }
                withdrawBalance(t) {
                    let e = d(t);
                    return t => this.sendTransaction(t, e)
                }
                freezeBalance(t, e, o) {
                    let r = i(t, e, o);
                    return t => this.sendTransaction(t, r)
                }
                unfreezeBalance(t) {
                    let e = c(t);
                    return t => this.sendTransaction(t, e)
                }
                unfreezeAssets(t) {
                    let e = f(t);
                    return t => this.sendTransaction(t, e)
                }
                applyForDelegate(t, e) {
                    let o = g(t, e);
                    return t => this.sendTransaction(t, o)
                }
                voteForWitnesses(t, e) {
                    let o = n(t, e);
                    return t => this.sendTransaction(t, o)
                }
                participateAsset(t, e, o, r) {
                    let s = a(t, e, o, r);
                    return t => this.sendTransaction(t, s)
                }
                createToken(t) {
                    console.log("create token", t);
                    let e = p(t);
                    return t => this.sendTransaction(t, e)
                }
                async getBlocks(t = {}) {
                    let {
                        data: e
                    } = await r.get(this.apiUrl + "/api/block", {
                        params: Object.assign({
                            sort: "-number",
                            limit: 50,
                            count: !0
                        }, t)
                    });
                    return {
                        blocks: e.data,
                        total: e.total
                    }
                }
                async getLatestBlock() {
                    let {
                        data: t
                    } = await r.get(this.apiUrl + "/api/block/latest");
                    return t
                }
                async getTransactions(t = {}) {
                    let {
                        data: e
                    } = await r.get(this.apiUrl + "/api/transaction", {
                        params: Object.assign({
                            sort: "-timestamp",
                            count: !0,
                            limit: 50
                        }, t)
                    });
                    return {
                        transactions: e.data,
                        total: e.total
                    }
                }
                async getTransfers(t = {}) {
                    let {
                        data: e
                    } = await r.get(this.apiUrl + "/api/transfer", {
                        params: Object.assign({
                            sort: "-timestamp",
                            count: !0,
                            limit: 50
                        }, t)
                    });
                    return {
                        transfers: e.data,
                        total: e.total
                    }
                }
                async getBlockByNumber(t) {
                    let {
                        blocks: e
                    } = await this.getBlocks({
                        limit: 1,
                        number: t
                    });
                    return e[0]
                }
                async getBlockByHash(t) {
                    let {
                        blocks: e
                    } = await this.getBlocks({
                        limit: 1,
                        hash: t
                    });
                    return e[0]
                }
                async getTransactionByHash(t) {
                    let {
                        data: e
                    } = await r.get(`${this.apiUrl}/api/transaction/${t}`);
                    return e
                }
                async getIssuedAsset(t) {
                    let {
                        data: e
                    } = await r.get(this.apiUrl + "/api/token", {
                        params: {
                            owner: t
                        }
                    });
                    return {
                        token: e.data[0],
                        data: e
                    }
                }
                async getAccounts(t = {}) {
                    let {
                        data: e
                    } = await r.get(this.apiUrl + "/api/account", {
                        params: Object.assign({
                            sort: "-balance",
                            limit: 50
                        }, t)
                    });
                    return {
                        accounts: e.data,
                        total: e.total
                    }
                }
                async getVotes(t = {}) {
                    let {
                        data: e
                    } = await r.get(this.apiUrl + "/api/vote", {
                        params: Object.assign({
                            sort: "-timestamp",
                            limit: 50
                        }, t)
                    });
                    return {
                        votes: e.data,
                        total: e.total,
                        totalVotes: e.totalVotes
                    }
                }
                async secondsUntilNextCycle() {
                    let {
                        data: t
                    } = await r.get(this.apiUrl + "/api/vote/next-cycle");
                    return t.nextCycle / 1e3
                }
                async getAccountByAddress(t) {
                    let {
                        data: e
                    } = await r.get(`${this.apiUrl}/api/account/${t}`);
                    return e
                }
                async getRichList() {
                    let {
                        data: t
                    } = await r.get(this.apiUrl + "/api/account/richlist");
                    return t
                }
                async getVotesForCurrentCycle() {
                    let {
                        data: t
                    } = await r.get(this.apiUrl + "/api/vote/current-cycle");
                    return t
                }
                async getLiveVotes() {
                    let {
                        data: t
                    } = await r.get(this.apiUrl + "/api/vote/live");
                    return t.data
                }
                async getTransferStats(t = {}) {
                    let {
                        data: e
                    } = await r.get(this.apiUrl + "/api/transfer/stats", {
                        params: Object.assign({}, t)
                    });
                    return {
                        stats: e
                    }
                }
                async getBlockStats(t = {}) {
                    let {
                        data: e
                    } = await r.get(this.apiUrl + "/api/block/stats", {
                        params: Object.assign({}, t)
                    });
                    return {
                        stats: e
                    }
                }
                async getAddress(t) {
                    let {
                        data: e
                    } = await r.get(`${this.apiUrl}/api/account/${t}`);
                    return e
                }
                async getAddressMedia(t) {
                    let {
                        data: e
                    } = await r.get(`${this.apiUrl}/api/account/${t}/media`);
                    return e
                }
                async getAddressStats(t) {
                    let {
                        data: e
                    } = await r.get(`${this.apiUrl}/api/account/${t}/stats`);
                    return e
                }
                async getTokens(t = {}) {
                    let {
                        data: e
                    } = await r.get(this.apiUrl + "/api/token", {
                        params: Object.assign({
                            sort: "-name",
                            limit: 50
                        }, t)
                    });
                    return {
                        tokens: e.data,
                        total: e.total
                    }
                }
                async getAccountVotes(t) {
                    let {
                        data: e
                    } = await r.get(`${this.apiUrl}/api/account/${t}/votes`);
                    return e
                }
                async getToken(t) {
                    let {
                        data: e
                    } = await r.get(`${this.apiUrl}/api/token/${t}`);
                    return e
                }
                async getTokenHolders(t, e = {}) {
                    let {
                        data: o
                    } = await r.get(`${this.apiUrl}/api/token/${t}/address`, {
                        params: Object.assign({
                            sort: "-balance",
                            limit: 50
                        }, e)
                    });
                    return {
                        addresses: o.data,
                        total: o.total
                    }
                }
                async getWitnesses() {
                    let {
                        data: t
                    } = await r.get(this.apiUrl + "/api/witness");
                    return {
                        witnesses: t,
                        total: t.length
                    }
                }
                async getNodeLocations() {
                    let {
                        data: t
                    } = await r.get(this.apiUrl + "/api/nodemap");
                    return {
                        nodes: t,
                        total: t.length
                    }
                }
                async getNodes() {
                    let {
                        data: t
                    } = await r.get(this.apiUrl + "/api/node");
                    return {
                        nodes: t.nodes,
                        total: t.nodes.length,
                        status: t.status
                    }
                }
                async getAccountBalances(t) {
                    let {
                        data: e
                    } = await r.get(`${this.apiUrl}/api/account/${t}/balance`);
                    return e
                }
                async getSystemStatus() {
                    let {
                        data: t
                    } = await r.get(this.apiUrl + "/api/system/status");
                    return t
                }
                async getMarkets() {
                    let {
                        data: t
                    } = await r.get(this.apiUrl + "/api/market/markets");
                    return t
                }
                async readTransaction(t) {
                    let {
                        data: e
                    } = await r.post(this.apiUrl + "/api/transaction?dry-run", {
                        transaction: t
                    });
                    return e
                }
                async getVoteStats() {
                    let {
                        data: t
                    } = await r.get(this.apiUrl + "/api/vote/stats");
                    return t.results
                }
                async getTxOverviewStats() {
                    let {
                        data: t
                    } = await r.get(this.apiUrl + "/api/stats/overview");
                    return {
                        txOverviewStats: t.data
                    }
                }
                async getStatisticData() {
                    let {
                        data: t
                    } = await r.get(this.apiUrl + "/api/witness/maintenance-statistic");
                    return {
                        statisticData: t
                    }
                }
            }
        },
        3437: function(t, e) {
            for (var o = "123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz", r = {}, s = 0; s < o.length; s++) r[o.charAt(s)] = s;
            t.exports = {
                encode58: function(t) {
                    if (0 === t.length) return "";
                    var e, r, s = [0];
                    for (e = 0; e < t.length; e++) {
                        for (r = 0; r < s.length; r++) s[r] <<= 8;
                        s[0] += t[e];
                        var n = 0;
                        for (r = 0; r < s.length; ++r) s[r] += n, n = s[r] / 58 | 0, s[r] %= 58;
                        for (; n;) s.push(n % 58), n = n / 58 | 0
                    }
                    for (e = 0; 0 === t[e] && e < t.length - 1; e++) s.push(0);
                    return s.reverse().map((function(t) {
                        return o[t]
                    })).join("")
                },
                decode58: function(t) {
                    if (0 === t.length) return [];
                    var e, o, s = [0];
                    for (e = 0; e < t.length; e++) {
                        var n = t[e];
                        if (!(n in r)) throw new Error("Non-base58 character");
                        for (o = 0; o < s.length; o++) s[o] *= 58;
                        s[0] += r[n];
                        var a = 0;
                        for (o = 0; o < s.length; ++o) s[o] += a, a = s[o] >> 8, s[o] &= 255;
                        for (; a;) s.push(255 & a), a >>= 8
                    }
                    for (e = 0;
                        "1" === t[e] && e < t.length - 1; e++) s.push(0);
                    return s.reverse()
                }
            }
        },
        3438: function(t, e, o) {
            var r;
            ! function() {
                "use strict";
                var s = "input is invalid type",
                    n = "object" == typeof window,
                    a = n ? window : {};
                a.JS_SHA3_NO_WINDOW && (n = !1);
                var i = !n && "object" == typeof self;
                !a.JS_SHA3_NO_NODE_JS && "object" == typeof process && process.versions && process.versions.node ? a = global : i && (a = self);
                var p = !a.JS_SHA3_NO_COMMON_JS && "object" == typeof t && t.exports,
                    c = o(384),
                    l = !a.JS_SHA3_NO_ARRAY_BUFFER && "undefined" != typeof ArrayBuffer,
                    u = "0123456789abcdef".split(""),
                    d = [4, 1024, 262144, 67108864],
                    g = [0, 8, 16, 24],
                    f = [1, 0, 32898, 0, 32906, 2147483648, 2147516416, 2147483648, 32907, 0, 2147483649, 0, 2147516545, 2147483648, 32777, 2147483648, 138, 0, 136, 0, 2147516425, 0, 2147483658, 0, 2147516555, 0, 139, 2147483648, 32905, 2147483648, 32771, 2147483648, 32770, 2147483648, 128, 2147483648, 32778, 0, 2147483658, 2147483648, 2147516545, 2147483648, 32896, 2147483648, 2147483649, 0, 2147516424, 2147483648],
                    h = [224, 256, 384, 512],
                    y = [128, 256],
                    A = ["hex", "buffer", "arrayBuffer", "array", "digest"],
                    C = {
                        128: 168,
                        256: 136
                    };
                !a.JS_SHA3_NO_NODE_JS && Array.isArray || (Array.isArray = function(t) {
                    return "[object Array]" === Object.prototype.toString.call(t)
                }), !l || !a.JS_SHA3_NO_ARRAY_BUFFER_IS_VIEW && ArrayBuffer.isView || (ArrayBuffer.isView = function(t) {
                    return "object" == typeof t && t.buffer && t.buffer.constructor === ArrayBuffer
                });
                for (var B = function(t, e, o) {
                        return function(r) {
                            return new _(t, e, t).update(r)[o]()
                        }
                    }, b = function(t, e, o) {
                        return function(r, s) {
                            return new _(t, e, s).update(r)[o]()
                        }
                    }, F = function(t, e, o) {
                        return function(e, r, s, n) {
                            return O["cshake" + t].update(e, r, s, n)[o]()
                        }
                    }, w = function(t, e, o) {
                        return function(e, r, s, n) {
                            return O["kmac" + t].update(e, r, s, n)[o]()
                        }
                    }, M = function(t, e, o, r) {
                        for (var s = 0; s < A.length; ++s) {
                            var n = A[s];
                            t[n] = e(o, r, n)
                        }
                        return t
                    }, m = function(t, e) {
                        var o = B(t, e, "hex");
                        return o.create = function() {
                            return new _(t, e, t)
                        }, o.update = function(t) {
                            return o.create().update(t)
                        }, M(o, B, t, e)
                    }, U = [{
                        name: "keccak",
                        padding: [1, 256, 65536, 16777216],
                        bits: h,
                        createMethod: m
                    }, {
                        name: "sha3",
                        padding: [6, 1536, 393216, 100663296],
                        bits: h,
                        createMethod: m
                    }, {
                        name: "shake",
                        padding: [31, 7936, 2031616, 520093696],
                        bits: y,
                        createMethod: function(t, e) {
                            var o = b(t, e, "hex");
                            return o.create = function(o) {
                                return new _(t, e, o)
                            }, o.update = function(t, e) {
                                return o.create(e).update(t)
                            }, M(o, b, t, e)
                        }
                    }, {
                        name: "cshake",
                        padding: d,
                        bits: y,
                        createMethod: function(t, e) {
                            var o = C[t],
                                r = F(t, 0, "hex");
                            return r.create = function(r, s, n) {
                                return s || n ? new _(t, e, r).bytepad([s, n], o) : O["shake" + t].create(r)
                            }, r.update = function(t, e, o, s) {
                                return r.create(e, o, s).update(t)
                            }, M(r, F, t, e)
                        }
                    }, {
                        name: "kmac",
                        padding: d,
                        bits: y,
                        createMethod: function(t, e) {
                            var o = C[t],
                                r = w(t, 0, "hex");
                            return r.create = function(r, s, n) {
                                return new D(t, e, s).bytepad(["KMAC", n], o).bytepad([r], o)
                            }, r.update = function(t, e, o, s) {
                                return r.create(t, o, s).update(e)
                            }, M(r, w, t, e)
                        }
                    }], O = {}, T = [], W = 0; W < U.length; ++W)
                    for (var z = U[W], E = z.bits, v = 0; v < E.length; ++v) {
                        var I = z.name + "_" + E[v];
                        if (T.push(I), O[I] = z.createMethod(E[v], z.padding), "sha3" !== z.name) {
                            var N = z.name + E[v];
                            T.push(N), O[N] = O[I]
                        }
                    }

                function _(t, e, o) {
                    this.blocks = [], this.s = [], this.padding = e, this.outputBits = o, this.reset = !0, this.finalized = !1, this.block = 0, this.start = 0, this.blockCount = 1600 - (t << 1) >> 5, this.byteCount = this.blockCount << 2, this.outputBlocks = o >> 5, this.extraBytes = (31 & o) >> 3;
                    for (var r = 0; r < 50; ++r) this.s[r] = 0
                }

                function D(t, e, o) {
                    _.call(this, t, e, o)
                }
                _.prototype.update = function(t) {
                    if (!this.finalized) {
                        var e, o = typeof t;
                        if ("string" !== o) {
                            if ("object" !== o) throw s;
                            if (null === t) throw s;
                            if (l && t.constructor === ArrayBuffer) t = new Uint8Array(t);
                            else if (!(Array.isArray(t) || l && ArrayBuffer.isView(t))) throw s;
                            e = !0
                        }
                        for (var r, n, a = this.blocks, i = this.byteCount, p = t.length, c = this.blockCount, u = 0, d = this.s; u < p;) {
                            if (this.reset)
                                for (this.reset = !1, a[0] = this.block, r = 1; r < c + 1; ++r) a[r] = 0;
                            if (e)
                                for (r = this.start; u < p && r < i; ++u) a[r >> 2] |= t[u] << g[3 & r++];
                            else
                                for (r = this.start; u < p && r < i; ++u)(n = t.charCodeAt(u)) < 128 ? a[r >> 2] |= n << g[3 & r++] : n < 2048 ? (a[r >> 2] |= (192 | n >> 6) << g[3 & r++], a[r >> 2] |= (128 | 63 & n) << g[3 & r++]) : n < 55296 || n >= 57344 ? (a[r >> 2] |= (224 | n >> 12) << g[3 & r++], a[r >> 2] |= (128 | n >> 6 & 63) << g[3 & r++], a[r >> 2] |= (128 | 63 & n) << g[3 & r++]) : (n = 65536 + ((1023 & n) << 10 | 1023 & t.charCodeAt(++u)), a[r >> 2] |= (240 | n >> 18) << g[3 & r++], a[r >> 2] |= (128 | n >> 12 & 63) << g[3 & r++], a[r >> 2] |= (128 | n >> 6 & 63) << g[3 & r++], a[r >> 2] |= (128 | 63 & n) << g[3 & r++]);
                            if (this.lastByteIndex = r, r >= i) {
                                for (this.start = r - i, this.block = a[c], r = 0; r < c; ++r) d[r] ^= a[r];
                                P(d), this.reset = !0
                            } else this.start = r
                        }
                        return this
                    }
                }, _.prototype.encode = function(t, e) {
                    var o = 255 & t,
                        r = 1,
                        s = [o];
                    for (o = 255 & (t >>= 8); o > 0;) s.unshift(o), o = 255 & (t >>= 8), ++r;
                    return e ? s.push(r) : s.unshift(r), this.update(s), s.length
                }, _.prototype.encodeString = function(t) {
                    var e, o = typeof t;
                    if ("string" !== o) {
                        if ("object" !== o) throw s;
                        if (null === t) throw s;
                        if (l && t.constructor === ArrayBuffer) t = new Uint8Array(t);
                        else if (!(Array.isArray(t) || l && ArrayBuffer.isView(t))) throw s;
                        e = !0
                    }
                    var r = 0,
                        n = t.length;
                    if (e) r = n;
                    else
                        for (var a = 0; a < t.length; ++a) {
                            var i = t.charCodeAt(a);
                            i < 128 ? r += 1 : i < 2048 ? r += 2 : i < 55296 || i >= 57344 ? r += 3 : (i = 65536 + ((1023 & i) << 10 | 1023 & t.charCodeAt(++a)), r += 4)
                        }
                    return r += this.encode(8 * r), this.update(t), r
                }, _.prototype.bytepad = function(t, e) {
                    for (var o = this.encode(e), r = 0; r < t.length; ++r) o += this.encodeString(t[r]);
                    var s = e - o % e,
                        n = [];
                    return n.length = s, this.update(n), this
                }, _.prototype.finalize = function() {
                    if (!this.finalized) {
                        this.finalized = !0;
                        var t = this.blocks,
                            e = this.lastByteIndex,
                            o = this.blockCount,
                            r = this.s;
                        if (t[e >> 2] |= this.padding[3 & e], this.lastByteIndex === this.byteCount)
                            for (t[0] = t[o], e = 1; e < o + 1; ++e) t[e] = 0;
                        for (t[o - 1] |= 2147483648, e = 0; e < o; ++e) r[e] ^= t[e];
                        P(r)
                    }
                }, _.prototype.toString = _.prototype.hex = function() {
                    this.finalize();
                    for (var t, e = this.blockCount, o = this.s, r = this.outputBlocks, s = this.extraBytes, n = 0, a = 0, i = ""; a < r;) {
                        for (n = 0; n < e && a < r; ++n, ++a) t = o[n], i += u[t >> 4 & 15] + u[15 & t] + u[t >> 12 & 15] + u[t >> 8 & 15] + u[t >> 20 & 15] + u[t >> 16 & 15] + u[t >> 28 & 15] + u[t >> 24 & 15];
                        a % e == 0 && (P(o), n = 0)
                    }
                    return s && (t = o[n], i += u[t >> 4 & 15] + u[15 & t], s > 1 && (i += u[t >> 12 & 15] + u[t >> 8 & 15]), s > 2 && (i += u[t >> 20 & 15] + u[t >> 16 & 15])), i
                }, _.prototype.arrayBuffer = function() {
                    this.finalize();
                    var t, e = this.blockCount,
                        o = this.s,
                        r = this.outputBlocks,
                        s = this.extraBytes,
                        n = 0,
                        a = 0,
                        i = this.outputBits >> 3;
                    t = s ? new ArrayBuffer(r + 1 << 2) : new ArrayBuffer(i);
                    for (var p = new Uint32Array(t); a < r;) {
                        for (n = 0; n < e && a < r; ++n, ++a) p[a] = o[n];
                        a % e == 0 && P(o)
                    }
                    return s && (p[n] = o[n], t = t.slice(0, i)), t
                }, _.prototype.buffer = _.prototype.arrayBuffer, _.prototype.digest = _.prototype.array = function() {
                    this.finalize();
                    for (var t, e, o = this.blockCount, r = this.s, s = this.outputBlocks, n = this.extraBytes, a = 0, i = 0, p = []; i < s;) {
                        for (a = 0; a < o && i < s; ++a, ++i) t = i << 2, e = r[a], p[t] = 255 & e, p[t + 1] = e >> 8 & 255, p[t + 2] = e >> 16 & 255, p[t + 3] = e >> 24 & 255;
                        i % o == 0 && P(r)
                    }
                    return n && (t = i << 2, e = r[a], p[t] = 255 & e, n > 1 && (p[t + 1] = e >> 8 & 255), n > 2 && (p[t + 2] = e >> 16 & 255)), p
                }, D.prototype = new _, D.prototype.finalize = function() {
                    return this.encode(this.outputBits, !0), _.prototype.finalize.call(this)
                };
                var P = function(t) {
                    var e, o, r, s, n, a, i, p, c, l, u, d, g, h, y, A, C, B, b, F, w, M, m, U, O, T, W, z, E, v, I, N, _, D, P, R, k, S, V, j, L, x, G, H, $, J, Y, X, K, Z, q, Q, tt, et, ot, rt, st, nt, at, it, pt, ct, lt;
                    for (r = 0; r < 48; r += 2) s = t[0] ^ t[10] ^ t[20] ^ t[30] ^ t[40], n = t[1] ^ t[11] ^ t[21] ^ t[31] ^ t[41], a = t[2] ^ t[12] ^ t[22] ^ t[32] ^ t[42], i = t[3] ^ t[13] ^ t[23] ^ t[33] ^ t[43], p = t[4] ^ t[14] ^ t[24] ^ t[34] ^ t[44], c = t[5] ^ t[15] ^ t[25] ^ t[35] ^ t[45], l = t[6] ^ t[16] ^ t[26] ^ t[36] ^ t[46], u = t[7] ^ t[17] ^ t[27] ^ t[37] ^ t[47], e = (d = t[8] ^ t[18] ^ t[28] ^ t[38] ^ t[48]) ^ (a << 1 | i >>> 31), o = (g = t[9] ^ t[19] ^ t[29] ^ t[39] ^ t[49]) ^ (i << 1 | a >>> 31), t[0] ^= e, t[1] ^= o, t[10] ^= e, t[11] ^= o, t[20] ^= e, t[21] ^= o, t[30] ^= e, t[31] ^= o, t[40] ^= e, t[41] ^= o, e = s ^ (p << 1 | c >>> 31), o = n ^ (c << 1 | p >>> 31), t[2] ^= e, t[3] ^= o, t[12] ^= e, t[13] ^= o, t[22] ^= e, t[23] ^= o, t[32] ^= e, t[33] ^= o, t[42] ^= e, t[43] ^= o, e = a ^ (l << 1 | u >>> 31), o = i ^ (u << 1 | l >>> 31), t[4] ^= e, t[5] ^= o, t[14] ^= e, t[15] ^= o, t[24] ^= e, t[25] ^= o, t[34] ^= e, t[35] ^= o, t[44] ^= e, t[45] ^= o, e = p ^ (d << 1 | g >>> 31), o = c ^ (g << 1 | d >>> 31), t[6] ^= e, t[7] ^= o, t[16] ^= e, t[17] ^= o, t[26] ^= e, t[27] ^= o, t[36] ^= e, t[37] ^= o, t[46] ^= e, t[47] ^= o, e = l ^ (s << 1 | n >>> 31), o = u ^ (n << 1 | s >>> 31), t[8] ^= e, t[9] ^= o, t[18] ^= e, t[19] ^= o, t[28] ^= e, t[29] ^= o, t[38] ^= e, t[39] ^= o, t[48] ^= e, t[49] ^= o, h = t[0], y = t[1], J = t[11] << 4 | t[10] >>> 28, Y = t[10] << 4 | t[11] >>> 28, z = t[20] << 3 | t[21] >>> 29, E = t[21] << 3 | t[20] >>> 29, it = t[31] << 9 | t[30] >>> 23, pt = t[30] << 9 | t[31] >>> 23, x = t[40] << 18 | t[41] >>> 14, G = t[41] << 18 | t[40] >>> 14, D = t[2] << 1 | t[3] >>> 31, P = t[3] << 1 | t[2] >>> 31, A = t[13] << 12 | t[12] >>> 20, C = t[12] << 12 | t[13] >>> 20, X = t[22] << 10 | t[23] >>> 22, K = t[23] << 10 | t[22] >>> 22, v = t[33] << 13 | t[32] >>> 19, I = t[32] << 13 | t[33] >>> 19, ct = t[42] << 2 | t[43] >>> 30, lt = t[43] << 2 | t[42] >>> 30, et = t[5] << 30 | t[4] >>> 2, ot = t[4] << 30 | t[5] >>> 2, R = t[14] << 6 | t[15] >>> 26, k = t[15] << 6 | t[14] >>> 26, B = t[25] << 11 | t[24] >>> 21, b = t[24] << 11 | t[25] >>> 21, Z = t[34] << 15 | t[35] >>> 17, q = t[35] << 15 | t[34] >>> 17, N = t[45] << 29 | t[44] >>> 3, _ = t[44] << 29 | t[45] >>> 3, U = t[6] << 28 | t[7] >>> 4, O = t[7] << 28 | t[6] >>> 4, rt = t[17] << 23 | t[16] >>> 9, st = t[16] << 23 | t[17] >>> 9, S = t[26] << 25 | t[27] >>> 7, V = t[27] << 25 | t[26] >>> 7, F = t[36] << 21 | t[37] >>> 11, w = t[37] << 21 | t[36] >>> 11, Q = t[47] << 24 | t[46] >>> 8, tt = t[46] << 24 | t[47] >>> 8, H = t[8] << 27 | t[9] >>> 5, $ = t[9] << 27 | t[8] >>> 5, T = t[18] << 20 | t[19] >>> 12, W = t[19] << 20 | t[18] >>> 12, nt = t[29] << 7 | t[28] >>> 25, at = t[28] << 7 | t[29] >>> 25, j = t[38] << 8 | t[39] >>> 24, L = t[39] << 8 | t[38] >>> 24, M = t[48] << 14 | t[49] >>> 18, m = t[49] << 14 | t[48] >>> 18, t[0] = h ^ ~A & B, t[1] = y ^ ~C & b, t[10] = U ^ ~T & z, t[11] = O ^ ~W & E, t[20] = D ^ ~R & S, t[21] = P ^ ~k & V, t[30] = H ^ ~J & X, t[31] = $ ^ ~Y & K, t[40] = et ^ ~rt & nt, t[41] = ot ^ ~st & at, t[2] = A ^ ~B & F, t[3] = C ^ ~b & w, t[12] = T ^ ~z & v, t[13] = W ^ ~E & I, t[22] = R ^ ~S & j, t[23] = k ^ ~V & L, t[32] = J ^ ~X & Z, t[33] = Y ^ ~K & q, t[42] = rt ^ ~nt & it, t[43] = st ^ ~at & pt, t[4] = B ^ ~F & M, t[5] = b ^ ~w & m, t[14] = z ^ ~v & N, t[15] = E ^ ~I & _, t[24] = S ^ ~j & x, t[25] = V ^ ~L & G, t[34] = X ^ ~Z & Q, t[35] = K ^ ~q & tt, t[44] = nt ^ ~it & ct, t[45] = at ^ ~pt & lt, t[6] = F ^ ~M & h, t[7] = w ^ ~m & y, t[16] = v ^ ~N & U, t[17] = I ^ ~_ & O, t[26] = j ^ ~x & D, t[27] = L ^ ~G & P, t[36] = Z ^ ~Q & H, t[37] = q ^ ~tt & $, t[46] = it ^ ~ct & et, t[47] = pt ^ ~lt & ot, t[8] = M ^ ~h & A, t[9] = m ^ ~y & C, t[18] = N ^ ~U & T, t[19] = _ ^ ~O & W, t[28] = x ^ ~D & R, t[29] = G ^ ~P & k, t[38] = Q ^ ~H & J, t[39] = tt ^ ~$ & Y, t[48] = ct ^ ~et & rt, t[49] = lt ^ ~ot & st, t[0] ^= f[r], t[1] ^= f[r + 1]
                };
                if (p) t.exports = O;
                else {
                    for (W = 0; W < T.length; ++W) a[T[W]] = O[T[W]];
                    c && (void 0 === (r = function() {
                        return O
                    }.call(e, o, e, t)) || (t.exports = r))
                }
            }()
        },
        3440: function(t, e, o) {
            var r = o(28),
                s = r,
                n = Function("return this")();
            s.exportSymbol("proto.protocol.Endpoint", null, n), s.exportSymbol("proto.protocol.FindNeighbours", null, n), s.exportSymbol("proto.protocol.Neighbours", null, n), s.exportSymbol("proto.protocol.PingMessage", null, n), s.exportSymbol("proto.protocol.PongMessage", null, n), proto.protocol.Endpoint = function(t) {
                r.Message.initialize(this, t, 0, -1, null, null)
            }, s.inherits(proto.protocol.Endpoint, r.Message), s.DEBUG && !COMPILED && (proto.protocol.Endpoint.displayName = "proto.protocol.Endpoint"), r.Message.GENERATE_TO_OBJECT && (proto.protocol.Endpoint.prototype.toObject = function(t) {
                return proto.protocol.Endpoint.toObject(t, this)
            }, proto.protocol.Endpoint.toObject = function(t, e) {
                var o = {
                    address: e.getAddress_asB64(),
                    port: r.Message.getFieldWithDefault(e, 2, 0),
                    nodeid: e.getNodeid_asB64()
                };
                return t && (o.$jspbMessageInstance = e), o
            }), proto.protocol.Endpoint.deserializeBinary = function(t) {
                var e = new r.BinaryReader(t),
                    o = new proto.protocol.Endpoint;
                return proto.protocol.Endpoint.deserializeBinaryFromReader(o, e)
            }, proto.protocol.Endpoint.deserializeBinaryFromReader = function(t, e) {
                for (; e.nextField() && !e.isEndGroup();) {
                    switch (e.getFieldNumber()) {
                        case 1:
                            var o = e.readBytes();
                            t.setAddress(o);
                            break;
                        case 2:
                            o = e.readInt32();
                            t.setPort(o);
                            break;
                        case 3:
                            o = e.readBytes();
                            t.setNodeid(o);
                            break;
                        default:
                            e.skipField()
                    }
                }
                return t
            }, proto.protocol.Endpoint.prototype.serializeBinary = function() {
                var t = new r.BinaryWriter;
                return proto.protocol.Endpoint.serializeBinaryToWriter(this, t), t.getResultBuffer()
            }, proto.protocol.Endpoint.serializeBinaryToWriter = function(t, e) {
                var o = void 0;
                (o = t.getAddress_asU8()).length > 0 && e.writeBytes(1, o), 0 !== (o = t.getPort()) && e.writeInt32(2, o), (o = t.getNodeid_asU8()).length > 0 && e.writeBytes(3, o)
            }, proto.protocol.Endpoint.prototype.getAddress = function() {
                return r.Message.getFieldWithDefault(this, 1, "")
            }, proto.protocol.Endpoint.prototype.getAddress_asB64 = function() {
                return r.Message.bytesAsB64(this.getAddress())
            }, proto.protocol.Endpoint.prototype.getAddress_asU8 = function() {
                return r.Message.bytesAsU8(this.getAddress())
            }, proto.protocol.Endpoint.prototype.setAddress = function(t) {
                r.Message.setProto3BytesField(this, 1, t)
            }, proto.protocol.Endpoint.prototype.getPort = function() {
                return r.Message.getFieldWithDefault(this, 2, 0)
            }, proto.protocol.Endpoint.prototype.setPort = function(t) {
                r.Message.setProto3IntField(this, 2, t)
            }, proto.protocol.Endpoint.prototype.getNodeid = function() {
                return r.Message.getFieldWithDefault(this, 3, "")
            }, proto.protocol.Endpoint.prototype.getNodeid_asB64 = function() {
                return r.Message.bytesAsB64(this.getNodeid())
            }, proto.protocol.Endpoint.prototype.getNodeid_asU8 = function() {
                return r.Message.bytesAsU8(this.getNodeid())
            }, proto.protocol.Endpoint.prototype.setNodeid = function(t) {
                r.Message.setProto3BytesField(this, 3, t)
            }, proto.protocol.PingMessage = function(t) {
                r.Message.initialize(this, t, 0, -1, null, null)
            }, s.inherits(proto.protocol.PingMessage, r.Message), s.DEBUG && !COMPILED && (proto.protocol.PingMessage.displayName = "proto.protocol.PingMessage"), r.Message.GENERATE_TO_OBJECT && (proto.protocol.PingMessage.prototype.toObject = function(t) {
                return proto.protocol.PingMessage.toObject(t, this)
            }, proto.protocol.PingMessage.toObject = function(t, e) {
                var o, s = {
                    from: (o = e.getFrom()) && proto.protocol.Endpoint.toObject(t, o),
                    to: (o = e.getTo()) && proto.protocol.Endpoint.toObject(t, o),
                    version: r.Message.getFieldWithDefault(e, 3, 0),
                    timestamp: r.Message.getFieldWithDefault(e, 4, 0)
                };
                return t && (s.$jspbMessageInstance = e), s
            }), proto.protocol.PingMessage.deserializeBinary = function(t) {
                var e = new r.BinaryReader(t),
                    o = new proto.protocol.PingMessage;
                return proto.protocol.PingMessage.deserializeBinaryFromReader(o, e)
            }, proto.protocol.PingMessage.deserializeBinaryFromReader = function(t, e) {
                for (; e.nextField() && !e.isEndGroup();) {
                    switch (e.getFieldNumber()) {
                        case 1:
                            var o = new proto.protocol.Endpoint;
                            e.readMessage(o, proto.protocol.Endpoint.deserializeBinaryFromReader), t.setFrom(o);
                            break;
                        case 2:
                            o = new proto.protocol.Endpoint;
                            e.readMessage(o, proto.protocol.Endpoint.deserializeBinaryFromReader), t.setTo(o);
                            break;
                        case 3:
                            o = e.readInt32();
                            t.setVersion(o);
                            break;
                        case 4:
                            o = e.readInt64();
                            t.setTimestamp(o);
                            break;
                        default:
                            e.skipField()
                    }
                }
                return t
            }, proto.protocol.PingMessage.prototype.serializeBinary = function() {
                var t = new r.BinaryWriter;
                return proto.protocol.PingMessage.serializeBinaryToWriter(this, t), t.getResultBuffer()
            }, proto.protocol.PingMessage.serializeBinaryToWriter = function(t, e) {
                var o = void 0;
                null != (o = t.getFrom()) && e.writeMessage(1, o, proto.protocol.Endpoint.serializeBinaryToWriter), null != (o = t.getTo()) && e.writeMessage(2, o, proto.protocol.Endpoint.serializeBinaryToWriter), 0 !== (o = t.getVersion()) && e.writeInt32(3, o), 0 !== (o = t.getTimestamp()) && e.writeInt64(4, o)
            }, proto.protocol.PingMessage.prototype.getFrom = function() {
                return r.Message.getWrapperField(this, proto.protocol.Endpoint, 1)
            }, proto.protocol.PingMessage.prototype.setFrom = function(t) {
                r.Message.setWrapperField(this, 1, t)
            }, proto.protocol.PingMessage.prototype.clearFrom = function() {
                this.setFrom(void 0)
            }, proto.protocol.PingMessage.prototype.hasFrom = function() {
                return null != r.Message.getField(this, 1)
            }, proto.protocol.PingMessage.prototype.getTo = function() {
                return r.Message.getWrapperField(this, proto.protocol.Endpoint, 2)
            }, proto.protocol.PingMessage.prototype.setTo = function(t) {
                r.Message.setWrapperField(this, 2, t)
            }, proto.protocol.PingMessage.prototype.clearTo = function() {
                this.setTo(void 0)
            }, proto.protocol.PingMessage.prototype.hasTo = function() {
                return null != r.Message.getField(this, 2)
            }, proto.protocol.PingMessage.prototype.getVersion = function() {
                return r.Message.getFieldWithDefault(this, 3, 0)
            }, proto.protocol.PingMessage.prototype.setVersion = function(t) {
                r.Message.setProto3IntField(this, 3, t)
            }, proto.protocol.PingMessage.prototype.getTimestamp = function() {
                return r.Message.getFieldWithDefault(this, 4, 0)
            }, proto.protocol.PingMessage.prototype.setTimestamp = function(t) {
                r.Message.setProto3IntField(this, 4, t)
            }, proto.protocol.PongMessage = function(t) {
                r.Message.initialize(this, t, 0, -1, null, null)
            }, s.inherits(proto.protocol.PongMessage, r.Message), s.DEBUG && !COMPILED && (proto.protocol.PongMessage.displayName = "proto.protocol.PongMessage"), r.Message.GENERATE_TO_OBJECT && (proto.protocol.PongMessage.prototype.toObject = function(t) {
                return proto.protocol.PongMessage.toObject(t, this)
            }, proto.protocol.PongMessage.toObject = function(t, e) {
                var o, s = {
                    from: (o = e.getFrom()) && proto.protocol.Endpoint.toObject(t, o),
                    echo: r.Message.getFieldWithDefault(e, 2, 0),
                    timestamp: r.Message.getFieldWithDefault(e, 3, 0)
                };
                return t && (s.$jspbMessageInstance = e), s
            }), proto.protocol.PongMessage.deserializeBinary = function(t) {
                var e = new r.BinaryReader(t),
                    o = new proto.protocol.PongMessage;
                return proto.protocol.PongMessage.deserializeBinaryFromReader(o, e)
            }, proto.protocol.PongMessage.deserializeBinaryFromReader = function(t, e) {
                for (; e.nextField() && !e.isEndGroup();) {
                    switch (e.getFieldNumber()) {
                        case 1:
                            var o = new proto.protocol.Endpoint;
                            e.readMessage(o, proto.protocol.Endpoint.deserializeBinaryFromReader), t.setFrom(o);
                            break;
                        case 2:
                            o = e.readInt32();
                            t.setEcho(o);
                            break;
                        case 3:
                            o = e.readInt64();
                            t.setTimestamp(o);
                            break;
                        default:
                            e.skipField()
                    }
                }
                return t
            }, proto.protocol.PongMessage.prototype.serializeBinary = function() {
                var t = new r.BinaryWriter;
                return proto.protocol.PongMessage.serializeBinaryToWriter(this, t), t.getResultBuffer()
            }, proto.protocol.PongMessage.serializeBinaryToWriter = function(t, e) {
                var o = void 0;
                null != (o = t.getFrom()) && e.writeMessage(1, o, proto.protocol.Endpoint.serializeBinaryToWriter), 0 !== (o = t.getEcho()) && e.writeInt32(2, o), 0 !== (o = t.getTimestamp()) && e.writeInt64(3, o)
            }, proto.protocol.PongMessage.prototype.getFrom = function() {
                return r.Message.getWrapperField(this, proto.protocol.Endpoint, 1)
            }, proto.protocol.PongMessage.prototype.setFrom = function(t) {
                r.Message.setWrapperField(this, 1, t)
            }, proto.protocol.PongMessage.prototype.clearFrom = function() {
                this.setFrom(void 0)
            }, proto.protocol.PongMessage.prototype.hasFrom = function() {
                return null != r.Message.getField(this, 1)
            }, proto.protocol.PongMessage.prototype.getEcho = function() {
                return r.Message.getFieldWithDefault(this, 2, 0)
            }, proto.protocol.PongMessage.prototype.setEcho = function(t) {
                r.Message.setProto3IntField(this, 2, t)
            }, proto.protocol.PongMessage.prototype.getTimestamp = function() {
                return r.Message.getFieldWithDefault(this, 3, 0)
            }, proto.protocol.PongMessage.prototype.setTimestamp = function(t) {
                r.Message.setProto3IntField(this, 3, t)
            }, proto.protocol.FindNeighbours = function(t) {
                r.Message.initialize(this, t, 0, -1, null, null)
            }, s.inherits(proto.protocol.FindNeighbours, r.Message), s.DEBUG && !COMPILED && (proto.protocol.FindNeighbours.displayName = "proto.protocol.FindNeighbours"), r.Message.GENERATE_TO_OBJECT && (proto.protocol.FindNeighbours.prototype.toObject = function(t) {
                return proto.protocol.FindNeighbours.toObject(t, this)
            }, proto.protocol.FindNeighbours.toObject = function(t, e) {
                var o, s = {
                    from: (o = e.getFrom()) && proto.protocol.Endpoint.toObject(t, o),
                    targetid: e.getTargetid_asB64(),
                    timestamp: r.Message.getFieldWithDefault(e, 3, 0)
                };
                return t && (s.$jspbMessageInstance = e), s
            }), proto.protocol.FindNeighbours.deserializeBinary = function(t) {
                var e = new r.BinaryReader(t),
                    o = new proto.protocol.FindNeighbours;
                return proto.protocol.FindNeighbours.deserializeBinaryFromReader(o, e)
            }, proto.protocol.FindNeighbours.deserializeBinaryFromReader = function(t, e) {
                for (; e.nextField() && !e.isEndGroup();) {
                    switch (e.getFieldNumber()) {
                        case 1:
                            var o = new proto.protocol.Endpoint;
                            e.readMessage(o, proto.protocol.Endpoint.deserializeBinaryFromReader), t.setFrom(o);
                            break;
                        case 2:
                            o = e.readBytes();
                            t.setTargetid(o);
                            break;
                        case 3:
                            o = e.readInt64();
                            t.setTimestamp(o);
                            break;
                        default:
                            e.skipField()
                    }
                }
                return t
            }, proto.protocol.FindNeighbours.prototype.serializeBinary = function() {
                var t = new r.BinaryWriter;
                return proto.protocol.FindNeighbours.serializeBinaryToWriter(this, t), t.getResultBuffer()
            }, proto.protocol.FindNeighbours.serializeBinaryToWriter = function(t, e) {
                var o = void 0;
                null != (o = t.getFrom()) && e.writeMessage(1, o, proto.protocol.Endpoint.serializeBinaryToWriter), (o = t.getTargetid_asU8()).length > 0 && e.writeBytes(2, o), 0 !== (o = t.getTimestamp()) && e.writeInt64(3, o)
            }, proto.protocol.FindNeighbours.prototype.getFrom = function() {
                return r.Message.getWrapperField(this, proto.protocol.Endpoint, 1)
            }, proto.protocol.FindNeighbours.prototype.setFrom = function(t) {
                r.Message.setWrapperField(this, 1, t)
            }, proto.protocol.FindNeighbours.prototype.clearFrom = function() {
                this.setFrom(void 0)
            }, proto.protocol.FindNeighbours.prototype.hasFrom = function() {
                return null != r.Message.getField(this, 1)
            }, proto.protocol.FindNeighbours.prototype.getTargetid = function() {
                return r.Message.getFieldWithDefault(this, 2, "")
            }, proto.protocol.FindNeighbours.prototype.getTargetid_asB64 = function() {
                return r.Message.bytesAsB64(this.getTargetid())
            }, proto.protocol.FindNeighbours.prototype.getTargetid_asU8 = function() {
                return r.Message.bytesAsU8(this.getTargetid())
            }, proto.protocol.FindNeighbours.prototype.setTargetid = function(t) {
                r.Message.setProto3BytesField(this, 2, t)
            }, proto.protocol.FindNeighbours.prototype.getTimestamp = function() {
                return r.Message.getFieldWithDefault(this, 3, 0)
            }, proto.protocol.FindNeighbours.prototype.setTimestamp = function(t) {
                r.Message.setProto3IntField(this, 3, t)
            }, proto.protocol.Neighbours = function(t) {
                r.Message.initialize(this, t, 0, -1, proto.protocol.Neighbours.repeatedFields_, null)
            }, s.inherits(proto.protocol.Neighbours, r.Message), s.DEBUG && !COMPILED && (proto.protocol.Neighbours.displayName = "proto.protocol.Neighbours"), proto.protocol.Neighbours.repeatedFields_ = [2], r.Message.GENERATE_TO_OBJECT && (proto.protocol.Neighbours.prototype.toObject = function(t) {
                return proto.protocol.Neighbours.toObject(t, this)
            }, proto.protocol.Neighbours.toObject = function(t, e) {
                var o, s = {
                    from: (o = e.getFrom()) && proto.protocol.Endpoint.toObject(t, o),
                    neighboursList: r.Message.toObjectList(e.getNeighboursList(), proto.protocol.Endpoint.toObject, t),
                    timestamp: r.Message.getFieldWithDefault(e, 3, 0)
                };
                return t && (s.$jspbMessageInstance = e), s
            }), proto.protocol.Neighbours.deserializeBinary = function(t) {
                var e = new r.BinaryReader(t),
                    o = new proto.protocol.Neighbours;
                return proto.protocol.Neighbours.deserializeBinaryFromReader(o, e)
            }, proto.protocol.Neighbours.deserializeBinaryFromReader = function(t, e) {
                for (; e.nextField() && !e.isEndGroup();) {
                    switch (e.getFieldNumber()) {
                        case 1:
                            var o = new proto.protocol.Endpoint;
                            e.readMessage(o, proto.protocol.Endpoint.deserializeBinaryFromReader), t.setFrom(o);
                            break;
                        case 2:
                            o = new proto.protocol.Endpoint;
                            e.readMessage(o, proto.protocol.Endpoint.deserializeBinaryFromReader), t.addNeighbours(o);
                            break;
                        case 3:
                            o = e.readInt64();
                            t.setTimestamp(o);
                            break;
                        default:
                            e.skipField()
                    }
                }
                return t
            }, proto.protocol.Neighbours.prototype.serializeBinary = function() {
                var t = new r.BinaryWriter;
                return proto.protocol.Neighbours.serializeBinaryToWriter(this, t), t.getResultBuffer()
            }, proto.protocol.Neighbours.serializeBinaryToWriter = function(t, e) {
                var o = void 0;
                null != (o = t.getFrom()) && e.writeMessage(1, o, proto.protocol.Endpoint.serializeBinaryToWriter), (o = t.getNeighboursList()).length > 0 && e.writeRepeatedMessage(2, o, proto.protocol.Endpoint.serializeBinaryToWriter), 0 !== (o = t.getTimestamp()) && e.writeInt64(3, o)
            }, proto.protocol.Neighbours.prototype.getFrom = function() {
                return r.Message.getWrapperField(this, proto.protocol.Endpoint, 1)
            }, proto.protocol.Neighbours.prototype.setFrom = function(t) {
                r.Message.setWrapperField(this, 1, t)
            }, proto.protocol.Neighbours.prototype.clearFrom = function() {
                this.setFrom(void 0)
            }, proto.protocol.Neighbours.prototype.hasFrom = function() {
                return null != r.Message.getField(this, 1)
            }, proto.protocol.Neighbours.prototype.getNeighboursList = function() {
                return r.Message.getRepeatedWrapperField(this, proto.protocol.Endpoint, 2)
            }, proto.protocol.Neighbours.prototype.setNeighboursList = function(t) {
                r.Message.setRepeatedWrapperField(this, 2, t)
            }, proto.protocol.Neighbours.prototype.addNeighbours = function(t, e) {
                return r.Message.addToRepeatedWrapperField(this, 2, t, proto.protocol.Endpoint, e)
            }, proto.protocol.Neighbours.prototype.clearNeighboursList = function() {
                this.setNeighboursList([])
            }, proto.protocol.Neighbours.prototype.getTimestamp = function() {
                return r.Message.getFieldWithDefault(this, 3, 0)
            }, proto.protocol.Neighbours.prototype.setTimestamp = function(t) {
                r.Message.setProto3IntField(this, 3, t)
            }, s.object.extend(e, proto.protocol)
        },
        3441: function(t, e, o) {
            var r = o(28),
                s = r,
                n = Function("return this")();
            o(1838);
            s.exportSymbol("proto.protocol.AccountCreateContract", null, n), s.exportSymbol("proto.protocol.AccountUpdateContract", null, n), s.exportSymbol("proto.protocol.AssetIssueContract", null, n), s.exportSymbol("proto.protocol.AssetIssueContract.FrozenSupply", null, n), s.exportSymbol("proto.protocol.DeployContract", null, n), s.exportSymbol("proto.protocol.FreezeBalanceContract", null, n), s.exportSymbol("proto.protocol.ParticipateAssetIssueContract", null, n), s.exportSymbol("proto.protocol.TransferAssetContract", null, n), s.exportSymbol("proto.protocol.TransferContract", null, n), s.exportSymbol("proto.protocol.UnfreezeAssetContract", null, n), s.exportSymbol("proto.protocol.UnfreezeBalanceContract", null, n), s.exportSymbol("proto.protocol.UpdateAssetContract", null, n), s.exportSymbol("proto.protocol.VoteAssetContract", null, n), s.exportSymbol("proto.protocol.VoteWitnessContract", null, n), s.exportSymbol("proto.protocol.VoteWitnessContract.Vote", null, n), s.exportSymbol("proto.protocol.WithdrawBalanceContract", null, n), s.exportSymbol("proto.protocol.WitnessCreateContract", null, n), s.exportSymbol("proto.protocol.WitnessUpdateContract", null, n), proto.protocol.AccountCreateContract = function(t) {
                r.Message.initialize(this, t, 0, -1, null, null)
            }, s.inherits(proto.protocol.AccountCreateContract, r.Message), s.DEBUG && !COMPILED && (proto.protocol.AccountCreateContract.displayName = "proto.protocol.AccountCreateContract"), r.Message.GENERATE_TO_OBJECT && (proto.protocol.AccountCreateContract.prototype.toObject = function(t) {
                return proto.protocol.AccountCreateContract.toObject(t, this)
            }, proto.protocol.AccountCreateContract.toObject = function(t, e) {
                var o = {
                    type: r.Message.getFieldWithDefault(e, 1, 0),
                    accountName: e.getAccountName_asB64(),
                    ownerAddress: e.getOwnerAddress_asB64()
                };
                return t && (o.$jspbMessageInstance = e), o
            }), proto.protocol.AccountCreateContract.deserializeBinary = function(t) {
                var e = new r.BinaryReader(t),
                    o = new proto.protocol.AccountCreateContract;
                return proto.protocol.AccountCreateContract.deserializeBinaryFromReader(o, e)
            }, proto.protocol.AccountCreateContract.deserializeBinaryFromReader = function(t, e) {
                for (; e.nextField() && !e.isEndGroup();) {
                    switch (e.getFieldNumber()) {
                        case 1:
                            var o = e.readEnum();
                            t.setType(o);
                            break;
                        case 2:
                            o = e.readBytes();
                            t.setAccountName(o);
                            break;
                        case 3:
                            o = e.readBytes();
                            t.setOwnerAddress(o);
                            break;
                        default:
                            e.skipField()
                    }
                }
                return t
            }, proto.protocol.AccountCreateContract.prototype.serializeBinary = function() {
                var t = new r.BinaryWriter;
                return proto.protocol.AccountCreateContract.serializeBinaryToWriter(this, t), t.getResultBuffer()
            }, proto.protocol.AccountCreateContract.serializeBinaryToWriter = function(t, e) {
                var o = void 0;
                0 !== (o = t.getType()) && e.writeEnum(1, o), (o = t.getAccountName_asU8()).length > 0 && e.writeBytes(2, o), (o = t.getOwnerAddress_asU8()).length > 0 && e.writeBytes(3, o)
            }, proto.protocol.AccountCreateContract.prototype.getType = function() {
                return r.Message.getFieldWithDefault(this, 1, 0)
            }, proto.protocol.AccountCreateContract.prototype.setType = function(t) {
                r.Message.setProto3EnumField(this, 1, t)
            }, proto.protocol.AccountCreateContract.prototype.getAccountName = function() {
                return r.Message.getFieldWithDefault(this, 2, "")
            }, proto.protocol.AccountCreateContract.prototype.getAccountName_asB64 = function() {
                return r.Message.bytesAsB64(this.getAccountName())
            }, proto.protocol.AccountCreateContract.prototype.getAccountName_asU8 = function() {
                return r.Message.bytesAsU8(this.getAccountName())
            }, proto.protocol.AccountCreateContract.prototype.setAccountName = function(t) {
                r.Message.setProto3BytesField(this, 2, t)
            }, proto.protocol.AccountCreateContract.prototype.getOwnerAddress = function() {
                return r.Message.getFieldWithDefault(this, 3, "")
            }, proto.protocol.AccountCreateContract.prototype.getOwnerAddress_asB64 = function() {
                return r.Message.bytesAsB64(this.getOwnerAddress())
            }, proto.protocol.AccountCreateContract.prototype.getOwnerAddress_asU8 = function() {
                return r.Message.bytesAsU8(this.getOwnerAddress())
            }, proto.protocol.AccountCreateContract.prototype.setOwnerAddress = function(t) {
                r.Message.setProto3BytesField(this, 3, t)
            }, proto.protocol.AccountUpdateContract = function(t) {
                r.Message.initialize(this, t, 0, -1, null, null)
            }, s.inherits(proto.protocol.AccountUpdateContract, r.Message), s.DEBUG && !COMPILED && (proto.protocol.AccountUpdateContract.displayName = "proto.protocol.AccountUpdateContract"), r.Message.GENERATE_TO_OBJECT && (proto.protocol.AccountUpdateContract.prototype.toObject = function(t) {
                return proto.protocol.AccountUpdateContract.toObject(t, this)
            }, proto.protocol.AccountUpdateContract.toObject = function(t, e) {
                var o = {
                    accountName: e.getAccountName_asB64(),
                    ownerAddress: e.getOwnerAddress_asB64()
                };
                return t && (o.$jspbMessageInstance = e), o
            }), proto.protocol.AccountUpdateContract.deserializeBinary = function(t) {
                var e = new r.BinaryReader(t),
                    o = new proto.protocol.AccountUpdateContract;
                return proto.protocol.AccountUpdateContract.deserializeBinaryFromReader(o, e)
            }, proto.protocol.AccountUpdateContract.deserializeBinaryFromReader = function(t, e) {
                for (; e.nextField() && !e.isEndGroup();) {
                    switch (e.getFieldNumber()) {
                        case 1:
                            var o = e.readBytes();
                            t.setAccountName(o);
                            break;
                        case 2:
                            o = e.readBytes();
                            t.setOwnerAddress(o);
                            break;
                        default:
                            e.skipField()
                    }
                }
                return t
            }, proto.protocol.AccountUpdateContract.prototype.serializeBinary = function() {
                var t = new r.BinaryWriter;
                return proto.protocol.AccountUpdateContract.serializeBinaryToWriter(this, t), t.getResultBuffer()
            }, proto.protocol.AccountUpdateContract.serializeBinaryToWriter = function(t, e) {
                var o = void 0;
                (o = t.getAccountName_asU8()).length > 0 && e.writeBytes(1, o), (o = t.getOwnerAddress_asU8()).length > 0 && e.writeBytes(2, o)
            }, proto.protocol.AccountUpdateContract.prototype.getAccountName = function() {
                return r.Message.getFieldWithDefault(this, 1, "")
            }, proto.protocol.AccountUpdateContract.prototype.getAccountName_asB64 = function() {
                return r.Message.bytesAsB64(this.getAccountName())
            }, proto.protocol.AccountUpdateContract.prototype.getAccountName_asU8 = function() {
                return r.Message.bytesAsU8(this.getAccountName())
            }, proto.protocol.AccountUpdateContract.prototype.setAccountName = function(t) {
                r.Message.setProto3BytesField(this, 1, t)
            }, proto.protocol.AccountUpdateContract.prototype.getOwnerAddress = function() {
                return r.Message.getFieldWithDefault(this, 2, "")
            }, proto.protocol.AccountUpdateContract.prototype.getOwnerAddress_asB64 = function() {
                return r.Message.bytesAsB64(this.getOwnerAddress())
            }, proto.protocol.AccountUpdateContract.prototype.getOwnerAddress_asU8 = function() {
                return r.Message.bytesAsU8(this.getOwnerAddress())
            }, proto.protocol.AccountUpdateContract.prototype.setOwnerAddress = function(t) {
                r.Message.setProto3BytesField(this, 2, t)
            }, proto.protocol.TransferContract = function(t) {
                r.Message.initialize(this, t, 0, -1, null, null)
            }, s.inherits(proto.protocol.TransferContract, r.Message), s.DEBUG && !COMPILED && (proto.protocol.TransferContract.displayName = "proto.protocol.TransferContract"), r.Message.GENERATE_TO_OBJECT && (proto.protocol.TransferContract.prototype.toObject = function(t) {
                return proto.protocol.TransferContract.toObject(t, this)
            }, proto.protocol.TransferContract.toObject = function(t, e) {
                var o = {
                    ownerAddress: e.getOwnerAddress_asB64(),
                    toAddress: e.getToAddress_asB64(),
                    amount: r.Message.getFieldWithDefault(e, 3, 0)
                };
                return t && (o.$jspbMessageInstance = e), o
            }), proto.protocol.TransferContract.deserializeBinary = function(t) {
                var e = new r.BinaryReader(t),
                    o = new proto.protocol.TransferContract;
                return proto.protocol.TransferContract.deserializeBinaryFromReader(o, e)
            }, proto.protocol.TransferContract.deserializeBinaryFromReader = function(t, e) {
                for (; e.nextField() && !e.isEndGroup();) {
                    switch (e.getFieldNumber()) {
                        case 1:
                            var o = e.readBytes();
                            t.setOwnerAddress(o);
                            break;
                        case 2:
                            o = e.readBytes();
                            t.setToAddress(o);
                            break;
                        case 3:
                            o = e.readInt64();
                            t.setAmount(o);
                            break;
                        default:
                            e.skipField()
                    }
                }
                return t
            }, proto.protocol.TransferContract.prototype.serializeBinary = function() {
                var t = new r.BinaryWriter;
                return proto.protocol.TransferContract.serializeBinaryToWriter(this, t), t.getResultBuffer()
            }, proto.protocol.TransferContract.serializeBinaryToWriter = function(t, e) {
                var o = void 0;
                (o = t.getOwnerAddress_asU8()).length > 0 && e.writeBytes(1, o), (o = t.getToAddress_asU8()).length > 0 && e.writeBytes(2, o), 0 !== (o = t.getAmount()) && e.writeInt64(3, o)
            }, proto.protocol.TransferContract.prototype.getOwnerAddress = function() {
                return r.Message.getFieldWithDefault(this, 1, "")
            }, proto.protocol.TransferContract.prototype.getOwnerAddress_asB64 = function() {
                return r.Message.bytesAsB64(this.getOwnerAddress())
            }, proto.protocol.TransferContract.prototype.getOwnerAddress_asU8 = function() {
                return r.Message.bytesAsU8(this.getOwnerAddress())
            }, proto.protocol.TransferContract.prototype.setOwnerAddress = function(t) {
                r.Message.setProto3BytesField(this, 1, t)
            }, proto.protocol.TransferContract.prototype.getToAddress = function() {
                return r.Message.getFieldWithDefault(this, 2, "")
            }, proto.protocol.TransferContract.prototype.getToAddress_asB64 = function() {
                return r.Message.bytesAsB64(this.getToAddress())
            }, proto.protocol.TransferContract.prototype.getToAddress_asU8 = function() {
                return r.Message.bytesAsU8(this.getToAddress())
            }, proto.protocol.TransferContract.prototype.setToAddress = function(t) {
                r.Message.setProto3BytesField(this, 2, t)
            }, proto.protocol.TransferContract.prototype.getAmount = function() {
                return r.Message.getFieldWithDefault(this, 3, 0)
            }, proto.protocol.TransferContract.prototype.setAmount = function(t) {
                r.Message.setProto3IntField(this, 3, t)
            }, proto.protocol.TransferAssetContract = function(t) {
                r.Message.initialize(this, t, 0, -1, null, null)
            }, s.inherits(proto.protocol.TransferAssetContract, r.Message), s.DEBUG && !COMPILED && (proto.protocol.TransferAssetContract.displayName = "proto.protocol.TransferAssetContract"), r.Message.GENERATE_TO_OBJECT && (proto.protocol.TransferAssetContract.prototype.toObject = function(t) {
                return proto.protocol.TransferAssetContract.toObject(t, this)
            }, proto.protocol.TransferAssetContract.toObject = function(t, e) {
                var o = {
                    assetName: e.getAssetName_asB64(),
                    ownerAddress: e.getOwnerAddress_asB64(),
                    toAddress: e.getToAddress_asB64(),
                    amount: r.Message.getFieldWithDefault(e, 4, 0)
                };
                return t && (o.$jspbMessageInstance = e), o
            }), proto.protocol.TransferAssetContract.deserializeBinary = function(t) {
                var e = new r.BinaryReader(t),
                    o = new proto.protocol.TransferAssetContract;
                return proto.protocol.TransferAssetContract.deserializeBinaryFromReader(o, e)
            }, proto.protocol.TransferAssetContract.deserializeBinaryFromReader = function(t, e) {
                for (; e.nextField() && !e.isEndGroup();) {
                    switch (e.getFieldNumber()) {
                        case 1:
                            var o = e.readBytes();
                            t.setAssetName(o);
                            break;
                        case 2:
                            o = e.readBytes();
                            t.setOwnerAddress(o);
                            break;
                        case 3:
                            o = e.readBytes();
                            t.setToAddress(o);
                            break;
                        case 4:
                            o = e.readInt64();
                            t.setAmount(o);
                            break;
                        default:
                            e.skipField()
                    }
                }
                return t
            }, proto.protocol.TransferAssetContract.prototype.serializeBinary = function() {
                var t = new r.BinaryWriter;
                return proto.protocol.TransferAssetContract.serializeBinaryToWriter(this, t), t.getResultBuffer()
            }, proto.protocol.TransferAssetContract.serializeBinaryToWriter = function(t, e) {
                var o = void 0;
                (o = t.getAssetName_asU8()).length > 0 && e.writeBytes(1, o), (o = t.getOwnerAddress_asU8()).length > 0 && e.writeBytes(2, o), (o = t.getToAddress_asU8()).length > 0 && e.writeBytes(3, o), 0 !== (o = t.getAmount()) && e.writeInt64(4, o)
            }, proto.protocol.TransferAssetContract.prototype.getAssetName = function() {
                return r.Message.getFieldWithDefault(this, 1, "")
            }, proto.protocol.TransferAssetContract.prototype.getAssetName_asB64 = function() {
                return r.Message.bytesAsB64(this.getAssetName())
            }, proto.protocol.TransferAssetContract.prototype.getAssetName_asU8 = function() {
                return r.Message.bytesAsU8(this.getAssetName())
            }, proto.protocol.TransferAssetContract.prototype.setAssetName = function(t) {
                r.Message.setProto3BytesField(this, 1, t)
            }, proto.protocol.TransferAssetContract.prototype.getOwnerAddress = function() {
                return r.Message.getFieldWithDefault(this, 2, "")
            }, proto.protocol.TransferAssetContract.prototype.getOwnerAddress_asB64 = function() {
                return r.Message.bytesAsB64(this.getOwnerAddress())
            }, proto.protocol.TransferAssetContract.prototype.getOwnerAddress_asU8 = function() {
                return r.Message.bytesAsU8(this.getOwnerAddress())
            }, proto.protocol.TransferAssetContract.prototype.setOwnerAddress = function(t) {
                r.Message.setProto3BytesField(this, 2, t)
            }, proto.protocol.TransferAssetContract.prototype.getToAddress = function() {
                return r.Message.getFieldWithDefault(this, 3, "")
            }, proto.protocol.TransferAssetContract.prototype.getToAddress_asB64 = function() {
                return r.Message.bytesAsB64(this.getToAddress())
            }, proto.protocol.TransferAssetContract.prototype.getToAddress_asU8 = function() {
                return r.Message.bytesAsU8(this.getToAddress())
            }, proto.protocol.TransferAssetContract.prototype.setToAddress = function(t) {
                r.Message.setProto3BytesField(this, 3, t)
            }, proto.protocol.TransferAssetContract.prototype.getAmount = function() {
                return r.Message.getFieldWithDefault(this, 4, 0)
            }, proto.protocol.TransferAssetContract.prototype.setAmount = function(t) {
                r.Message.setProto3IntField(this, 4, t)
            }, proto.protocol.VoteAssetContract = function(t) {
                r.Message.initialize(this, t, 0, -1, proto.protocol.VoteAssetContract.repeatedFields_, null)
            }, s.inherits(proto.protocol.VoteAssetContract, r.Message), s.DEBUG && !COMPILED && (proto.protocol.VoteAssetContract.displayName = "proto.protocol.VoteAssetContract"), proto.protocol.VoteAssetContract.repeatedFields_ = [2], r.Message.GENERATE_TO_OBJECT && (proto.protocol.VoteAssetContract.prototype.toObject = function(t) {
                return proto.protocol.VoteAssetContract.toObject(t, this)
            }, proto.protocol.VoteAssetContract.toObject = function(t, e) {
                var o = {
                    ownerAddress: e.getOwnerAddress_asB64(),
                    voteAddressList: e.getVoteAddressList_asB64(),
                    support: r.Message.getFieldWithDefault(e, 3, !1),
                    count: r.Message.getFieldWithDefault(e, 5, 0)
                };
                return t && (o.$jspbMessageInstance = e), o
            }), proto.protocol.VoteAssetContract.deserializeBinary = function(t) {
                var e = new r.BinaryReader(t),
                    o = new proto.protocol.VoteAssetContract;
                return proto.protocol.VoteAssetContract.deserializeBinaryFromReader(o, e)
            }, proto.protocol.VoteAssetContract.deserializeBinaryFromReader = function(t, e) {
                for (; e.nextField() && !e.isEndGroup();) {
                    switch (e.getFieldNumber()) {
                        case 1:
                            var o = e.readBytes();
                            t.setOwnerAddress(o);
                            break;
                        case 2:
                            o = e.readBytes();
                            t.addVoteAddress(o);
                            break;
                        case 3:
                            o = e.readBool();
                            t.setSupport(o);
                            break;
                        case 5:
                            o = e.readInt32();
                            t.setCount(o);
                            break;
                        default:
                            e.skipField()
                    }
                }
                return t
            }, proto.protocol.VoteAssetContract.prototype.serializeBinary = function() {
                var t = new r.BinaryWriter;
                return proto.protocol.VoteAssetContract.serializeBinaryToWriter(this, t), t.getResultBuffer()
            }, proto.protocol.VoteAssetContract.serializeBinaryToWriter = function(t, e) {
                var o = void 0;
                (o = t.getOwnerAddress_asU8()).length > 0 && e.writeBytes(1, o), (o = t.getVoteAddressList_asU8()).length > 0 && e.writeRepeatedBytes(2, o), (o = t.getSupport()) && e.writeBool(3, o), 0 !== (o = t.getCount()) && e.writeInt32(5, o)
            }, proto.protocol.VoteAssetContract.prototype.getOwnerAddress = function() {
                return r.Message.getFieldWithDefault(this, 1, "")
            }, proto.protocol.VoteAssetContract.prototype.getOwnerAddress_asB64 = function() {
                return r.Message.bytesAsB64(this.getOwnerAddress())
            }, proto.protocol.VoteAssetContract.prototype.getOwnerAddress_asU8 = function() {
                return r.Message.bytesAsU8(this.getOwnerAddress())
            }, proto.protocol.VoteAssetContract.prototype.setOwnerAddress = function(t) {
                r.Message.setProto3BytesField(this, 1, t)
            }, proto.protocol.VoteAssetContract.prototype.getVoteAddressList = function() {
                return r.Message.getRepeatedField(this, 2)
            }, proto.protocol.VoteAssetContract.prototype.getVoteAddressList_asB64 = function() {
                return r.Message.bytesListAsB64(this.getVoteAddressList())
            }, proto.protocol.VoteAssetContract.prototype.getVoteAddressList_asU8 = function() {
                return r.Message.bytesListAsU8(this.getVoteAddressList())
            }, proto.protocol.VoteAssetContract.prototype.setVoteAddressList = function(t) {
                r.Message.setField(this, 2, t || [])
            }, proto.protocol.VoteAssetContract.prototype.addVoteAddress = function(t, e) {
                r.Message.addToRepeatedField(this, 2, t, e)
            }, proto.protocol.VoteAssetContract.prototype.clearVoteAddressList = function() {
                this.setVoteAddressList([])
            }, proto.protocol.VoteAssetContract.prototype.getSupport = function() {
                return r.Message.getFieldWithDefault(this, 3, !1)
            }, proto.protocol.VoteAssetContract.prototype.setSupport = function(t) {
                r.Message.setProto3BooleanField(this, 3, t)
            }, proto.protocol.VoteAssetContract.prototype.getCount = function() {
                return r.Message.getFieldWithDefault(this, 5, 0)
            }, proto.protocol.VoteAssetContract.prototype.setCount = function(t) {
                r.Message.setProto3IntField(this, 5, t)
            }, proto.protocol.VoteWitnessContract = function(t) {
                r.Message.initialize(this, t, 0, -1, proto.protocol.VoteWitnessContract.repeatedFields_, null)
            }, s.inherits(proto.protocol.VoteWitnessContract, r.Message), s.DEBUG && !COMPILED && (proto.protocol.VoteWitnessContract.displayName = "proto.protocol.VoteWitnessContract"), proto.protocol.VoteWitnessContract.repeatedFields_ = [2], r.Message.GENERATE_TO_OBJECT && (proto.protocol.VoteWitnessContract.prototype.toObject = function(t) {
                return proto.protocol.VoteWitnessContract.toObject(t, this)
            }, proto.protocol.VoteWitnessContract.toObject = function(t, e) {
                var o = {
                    ownerAddress: e.getOwnerAddress_asB64(),
                    votesList: r.Message.toObjectList(e.getVotesList(), proto.protocol.VoteWitnessContract.Vote.toObject, t),
                    support: r.Message.getFieldWithDefault(e, 3, !1)
                };
                return t && (o.$jspbMessageInstance = e), o
            }), proto.protocol.VoteWitnessContract.deserializeBinary = function(t) {
                var e = new r.BinaryReader(t),
                    o = new proto.protocol.VoteWitnessContract;
                return proto.protocol.VoteWitnessContract.deserializeBinaryFromReader(o, e)
            }, proto.protocol.VoteWitnessContract.deserializeBinaryFromReader = function(t, e) {
                for (; e.nextField() && !e.isEndGroup();) {
                    switch (e.getFieldNumber()) {
                        case 1:
                            var o = e.readBytes();
                            t.setOwnerAddress(o);
                            break;
                        case 2:
                            o = new proto.protocol.VoteWitnessContract.Vote;
                            e.readMessage(o, proto.protocol.VoteWitnessContract.Vote.deserializeBinaryFromReader), t.addVotes(o);
                            break;
                        case 3:
                            o = e.readBool();
                            t.setSupport(o);
                            break;
                        default:
                            e.skipField()
                    }
                }
                return t
            }, proto.protocol.VoteWitnessContract.prototype.serializeBinary = function() {
                var t = new r.BinaryWriter;
                return proto.protocol.VoteWitnessContract.serializeBinaryToWriter(this, t), t.getResultBuffer()
            }, proto.protocol.VoteWitnessContract.serializeBinaryToWriter = function(t, e) {
                var o = void 0;
                (o = t.getOwnerAddress_asU8()).length > 0 && e.writeBytes(1, o), (o = t.getVotesList()).length > 0 && e.writeRepeatedMessage(2, o, proto.protocol.VoteWitnessContract.Vote.serializeBinaryToWriter), (o = t.getSupport()) && e.writeBool(3, o)
            }, proto.protocol.VoteWitnessContract.Vote = function(t) {
                r.Message.initialize(this, t, 0, -1, null, null)
            }, s.inherits(proto.protocol.VoteWitnessContract.Vote, r.Message), s.DEBUG && !COMPILED && (proto.protocol.VoteWitnessContract.Vote.displayName = "proto.protocol.VoteWitnessContract.Vote"), r.Message.GENERATE_TO_OBJECT && (proto.protocol.VoteWitnessContract.Vote.prototype.toObject = function(t) {
                return proto.protocol.VoteWitnessContract.Vote.toObject(t, this)
            }, proto.protocol.VoteWitnessContract.Vote.toObject = function(t, e) {
                var o = {
                    voteAddress: e.getVoteAddress_asB64(),
                    voteCount: r.Message.getFieldWithDefault(e, 2, 0)
                };
                return t && (o.$jspbMessageInstance = e), o
            }), proto.protocol.VoteWitnessContract.Vote.deserializeBinary = function(t) {
                var e = new r.BinaryReader(t),
                    o = new proto.protocol.VoteWitnessContract.Vote;
                return proto.protocol.VoteWitnessContract.Vote.deserializeBinaryFromReader(o, e)
            }, proto.protocol.VoteWitnessContract.Vote.deserializeBinaryFromReader = function(t, e) {
                for (; e.nextField() && !e.isEndGroup();) {
                    switch (e.getFieldNumber()) {
                        case 1:
                            var o = e.readBytes();
                            t.setVoteAddress(o);
                            break;
                        case 2:
                            o = e.readInt64();
                            t.setVoteCount(o);
                            break;
                        default:
                            e.skipField()
                    }
                }
                return t
            }, proto.protocol.VoteWitnessContract.Vote.prototype.serializeBinary = function() {
                var t = new r.BinaryWriter;
                return proto.protocol.VoteWitnessContract.Vote.serializeBinaryToWriter(this, t), t.getResultBuffer()
            }, proto.protocol.VoteWitnessContract.Vote.serializeBinaryToWriter = function(t, e) {
                var o = void 0;
                (o = t.getVoteAddress_asU8()).length > 0 && e.writeBytes(1, o), 0 !== (o = t.getVoteCount()) && e.writeInt64(2, o)
            }, proto.protocol.VoteWitnessContract.Vote.prototype.getVoteAddress = function() {
                return r.Message.getFieldWithDefault(this, 1, "")
            }, proto.protocol.VoteWitnessContract.Vote.prototype.getVoteAddress_asB64 = function() {
                return r.Message.bytesAsB64(this.getVoteAddress())
            }, proto.protocol.VoteWitnessContract.Vote.prototype.getVoteAddress_asU8 = function() {
                return r.Message.bytesAsU8(this.getVoteAddress())
            }, proto.protocol.VoteWitnessContract.Vote.prototype.setVoteAddress = function(t) {
                r.Message.setProto3BytesField(this, 1, t)
            }, proto.protocol.VoteWitnessContract.Vote.prototype.getVoteCount = function() {
                return r.Message.getFieldWithDefault(this, 2, 0)
            }, proto.protocol.VoteWitnessContract.Vote.prototype.setVoteCount = function(t) {
                r.Message.setProto3IntField(this, 2, t)
            }, proto.protocol.VoteWitnessContract.prototype.getOwnerAddress = function() {
                return r.Message.getFieldWithDefault(this, 1, "")
            }, proto.protocol.VoteWitnessContract.prototype.getOwnerAddress_asB64 = function() {
                return r.Message.bytesAsB64(this.getOwnerAddress())
            }, proto.protocol.VoteWitnessContract.prototype.getOwnerAddress_asU8 = function() {
                return r.Message.bytesAsU8(this.getOwnerAddress())
            }, proto.protocol.VoteWitnessContract.prototype.setOwnerAddress = function(t) {
                r.Message.setProto3BytesField(this, 1, t)
            }, proto.protocol.VoteWitnessContract.prototype.getVotesList = function() {
                return r.Message.getRepeatedWrapperField(this, proto.protocol.VoteWitnessContract.Vote, 2)
            }, proto.protocol.VoteWitnessContract.prototype.setVotesList = function(t) {
                r.Message.setRepeatedWrapperField(this, 2, t)
            }, proto.protocol.VoteWitnessContract.prototype.addVotes = function(t, e) {
                return r.Message.addToRepeatedWrapperField(this, 2, t, proto.protocol.VoteWitnessContract.Vote, e)
            }, proto.protocol.VoteWitnessContract.prototype.clearVotesList = function() {
                this.setVotesList([])
            }, proto.protocol.VoteWitnessContract.prototype.getSupport = function() {
                return r.Message.getFieldWithDefault(this, 3, !1)
            }, proto.protocol.VoteWitnessContract.prototype.setSupport = function(t) {
                r.Message.setProto3BooleanField(this, 3, t)
            }, proto.protocol.WitnessCreateContract = function(t) {
                r.Message.initialize(this, t, 0, -1, null, null)
            }, s.inherits(proto.protocol.WitnessCreateContract, r.Message), s.DEBUG && !COMPILED && (proto.protocol.WitnessCreateContract.displayName = "proto.protocol.WitnessCreateContract"), r.Message.GENERATE_TO_OBJECT && (proto.protocol.WitnessCreateContract.prototype.toObject = function(t) {
                return proto.protocol.WitnessCreateContract.toObject(t, this)
            }, proto.protocol.WitnessCreateContract.toObject = function(t, e) {
                var o = {
                    ownerAddress: e.getOwnerAddress_asB64(),
                    url: e.getUrl_asB64()
                };
                return t && (o.$jspbMessageInstance = e), o
            }), proto.protocol.WitnessCreateContract.deserializeBinary = function(t) {
                var e = new r.BinaryReader(t),
                    o = new proto.protocol.WitnessCreateContract;
                return proto.protocol.WitnessCreateContract.deserializeBinaryFromReader(o, e)
            }, proto.protocol.WitnessCreateContract.deserializeBinaryFromReader = function(t, e) {
                for (; e.nextField() && !e.isEndGroup();) {
                    switch (e.getFieldNumber()) {
                        case 1:
                            var o = e.readBytes();
                            t.setOwnerAddress(o);
                            break;
                        case 2:
                            o = e.readBytes();
                            t.setUrl(o);
                            break;
                        default:
                            e.skipField()
                    }
                }
                return t
            }, proto.protocol.WitnessCreateContract.prototype.serializeBinary = function() {
                var t = new r.BinaryWriter;
                return proto.protocol.WitnessCreateContract.serializeBinaryToWriter(this, t), t.getResultBuffer()
            }, proto.protocol.WitnessCreateContract.serializeBinaryToWriter = function(t, e) {
                var o = void 0;
                (o = t.getOwnerAddress_asU8()).length > 0 && e.writeBytes(1, o), (o = t.getUrl_asU8()).length > 0 && e.writeBytes(2, o)
            }, proto.protocol.WitnessCreateContract.prototype.getOwnerAddress = function() {
                return r.Message.getFieldWithDefault(this, 1, "")
            }, proto.protocol.WitnessCreateContract.prototype.getOwnerAddress_asB64 = function() {
                return r.Message.bytesAsB64(this.getOwnerAddress())
            }, proto.protocol.WitnessCreateContract.prototype.getOwnerAddress_asU8 = function() {
                return r.Message.bytesAsU8(this.getOwnerAddress())
            }, proto.protocol.WitnessCreateContract.prototype.setOwnerAddress = function(t) {
                r.Message.setProto3BytesField(this, 1, t)
            }, proto.protocol.WitnessCreateContract.prototype.getUrl = function() {
                return r.Message.getFieldWithDefault(this, 2, "")
            }, proto.protocol.WitnessCreateContract.prototype.getUrl_asB64 = function() {
                return r.Message.bytesAsB64(this.getUrl())
            }, proto.protocol.WitnessCreateContract.prototype.getUrl_asU8 = function() {
                return r.Message.bytesAsU8(this.getUrl())
            }, proto.protocol.WitnessCreateContract.prototype.setUrl = function(t) {
                r.Message.setProto3BytesField(this, 2, t)
            }, proto.protocol.WitnessUpdateContract = function(t) {
                r.Message.initialize(this, t, 0, -1, null, null)
            }, s.inherits(proto.protocol.WitnessUpdateContract, r.Message), s.DEBUG && !COMPILED && (proto.protocol.WitnessUpdateContract.displayName = "proto.protocol.WitnessUpdateContract"), r.Message.GENERATE_TO_OBJECT && (proto.protocol.WitnessUpdateContract.prototype.toObject = function(t) {
                return proto.protocol.WitnessUpdateContract.toObject(t, this)
            }, proto.protocol.WitnessUpdateContract.toObject = function(t, e) {
                var o = {
                    ownerAddress: e.getOwnerAddress_asB64(),
                    updateUrl: e.getUpdateUrl_asB64()
                };
                return t && (o.$jspbMessageInstance = e), o
            }), proto.protocol.WitnessUpdateContract.deserializeBinary = function(t) {
                var e = new r.BinaryReader(t),
                    o = new proto.protocol.WitnessUpdateContract;
                return proto.protocol.WitnessUpdateContract.deserializeBinaryFromReader(o, e)
            }, proto.protocol.WitnessUpdateContract.deserializeBinaryFromReader = function(t, e) {
                for (; e.nextField() && !e.isEndGroup();) {
                    switch (e.getFieldNumber()) {
                        case 1:
                            var o = e.readBytes();
                            t.setOwnerAddress(o);
                            break;
                        case 12:
                            o = e.readBytes();
                            t.setUpdateUrl(o);
                            break;
                        default:
                            e.skipField()
                    }
                }
                return t
            }, proto.protocol.WitnessUpdateContract.prototype.serializeBinary = function() {
                var t = new r.BinaryWriter;
                return proto.protocol.WitnessUpdateContract.serializeBinaryToWriter(this, t), t.getResultBuffer()
            }, proto.protocol.WitnessUpdateContract.serializeBinaryToWriter = function(t, e) {
                var o = void 0;
                (o = t.getOwnerAddress_asU8()).length > 0 && e.writeBytes(1, o), (o = t.getUpdateUrl_asU8()).length > 0 && e.writeBytes(12, o)
            }, proto.protocol.WitnessUpdateContract.prototype.getOwnerAddress = function() {
                return r.Message.getFieldWithDefault(this, 1, "")
            }, proto.protocol.WitnessUpdateContract.prototype.getOwnerAddress_asB64 = function() {
                return r.Message.bytesAsB64(this.getOwnerAddress())
            }, proto.protocol.WitnessUpdateContract.prototype.getOwnerAddress_asU8 = function() {
                return r.Message.bytesAsU8(this.getOwnerAddress())
            }, proto.protocol.WitnessUpdateContract.prototype.setOwnerAddress = function(t) {
                r.Message.setProto3BytesField(this, 1, t)
            }, proto.protocol.WitnessUpdateContract.prototype.getUpdateUrl = function() {
                return r.Message.getFieldWithDefault(this, 12, "")
            }, proto.protocol.WitnessUpdateContract.prototype.getUpdateUrl_asB64 = function() {
                return r.Message.bytesAsB64(this.getUpdateUrl())
            }, proto.protocol.WitnessUpdateContract.prototype.getUpdateUrl_asU8 = function() {
                return r.Message.bytesAsU8(this.getUpdateUrl())
            }, proto.protocol.WitnessUpdateContract.prototype.setUpdateUrl = function(t) {
                r.Message.setProto3BytesField(this, 12, t)
            }, proto.protocol.AssetIssueContract = function(t) {
                r.Message.initialize(this, t, 0, -1, proto.protocol.AssetIssueContract.repeatedFields_, null)
            }, s.inherits(proto.protocol.AssetIssueContract, r.Message), s.DEBUG && !COMPILED && (proto.protocol.AssetIssueContract.displayName = "proto.protocol.AssetIssueContract"), proto.protocol.AssetIssueContract.repeatedFields_ = [5], r.Message.GENERATE_TO_OBJECT && (proto.protocol.AssetIssueContract.prototype.toObject = function(t) {
                return proto.protocol.AssetIssueContract.toObject(t, this)
            }, proto.protocol.AssetIssueContract.toObject = function(t, e) {
                var o = {
                    ownerAddress: e.getOwnerAddress_asB64(),
                    name: e.getName_asB64(),
                    abbr: e.getAbbr_asB64(),
                    totalSupply: r.Message.getFieldWithDefault(e, 4, 0),
                    frozenSupplyList: r.Message.toObjectList(e.getFrozenSupplyList(), proto.protocol.AssetIssueContract.FrozenSupply.toObject, t),
                    trxNum: r.Message.getFieldWithDefault(e, 6, 0),
                    num: r.Message.getFieldWithDefault(e, 8, 0),
                    startTime: r.Message.getFieldWithDefault(e, 9, 0),
                    endTime: r.Message.getFieldWithDefault(e, 10, 0),
                    voteScore: r.Message.getFieldWithDefault(e, 16, 0),
                    description: e.getDescription_asB64(),
                    url: e.getUrl_asB64(),
                    freeAssetNetLimit: r.Message.getFieldWithDefault(e, 22, 0),
                    publicFreeAssetNetLimit: r.Message.getFieldWithDefault(e, 23, 0),
                    publicFreeAssetNetUsage: r.Message.getFieldWithDefault(e, 24, 0),
                    publicLatestFreeNetTime: r.Message.getFieldWithDefault(e, 25, 0)
                };
                return t && (o.$jspbMessageInstance = e), o
            }), proto.protocol.AssetIssueContract.deserializeBinary = function(t) {
                var e = new r.BinaryReader(t),
                    o = new proto.protocol.AssetIssueContract;
                return proto.protocol.AssetIssueContract.deserializeBinaryFromReader(o, e)
            }, proto.protocol.AssetIssueContract.deserializeBinaryFromReader = function(t, e) {
                for (; e.nextField() && !e.isEndGroup();) {
                    switch (e.getFieldNumber()) {
                        case 1:
                            var o = e.readBytes();
                            t.setOwnerAddress(o);
                            break;
                        case 2:
                            o = e.readBytes();
                            t.setName(o);
                            break;
                        case 3:
                            o = e.readBytes();
                            t.setAbbr(o);
                            break;
                        case 4:
                            o = e.readInt64();
                            t.setTotalSupply(o);
                            break;
                        case 5:
                            o = new proto.protocol.AssetIssueContract.FrozenSupply;
                            e.readMessage(o, proto.protocol.AssetIssueContract.FrozenSupply.deserializeBinaryFromReader), t.addFrozenSupply(o);
                            break;
                        case 6:
                            o = e.readInt32();
                            t.setTrxNum(o);
                            break;
                        case 8:
                            o = e.readInt32();
                            t.setNum(o);
                            break;
                        case 9:
                            o = e.readInt64();
                            t.setStartTime(o);
                            break;
                        case 10:
                            o = e.readInt64();
                            t.setEndTime(o);
                            break;
                        case 16:
                            o = e.readInt32();
                            t.setVoteScore(o);
                            break;
                        case 20:
                            o = e.readBytes();
                            t.setDescription(o);
                            break;
                        case 21:
                            o = e.readBytes();
                            t.setUrl(o);
                            break;
                        case 22:
                            o = e.readInt64();
                            t.setFreeAssetNetLimit(o);
                            break;
                        case 23:
                            o = e.readInt64();
                            t.setPublicFreeAssetNetLimit(o);
                            break;
                        case 24:
                            o = e.readInt64();
                            t.setPublicFreeAssetNetUsage(o);
                            break;
                        case 25:
                            o = e.readInt64();
                            t.setPublicLatestFreeNetTime(o);
                            break;
                        default:
                            e.skipField()
                    }
                }
                return t
            }, proto.protocol.AssetIssueContract.prototype.serializeBinary = function() {
                var t = new r.BinaryWriter;
                return proto.protocol.AssetIssueContract.serializeBinaryToWriter(this, t), t.getResultBuffer()
            }, proto.protocol.AssetIssueContract.serializeBinaryToWriter = function(t, e) {
                var o = void 0;
                (o = t.getOwnerAddress_asU8()).length > 0 && e.writeBytes(1, o), (o = t.getName_asU8()).length > 0 && e.writeBytes(2, o), (o = t.getAbbr_asU8()).length > 0 && e.writeBytes(3, o), 0 !== (o = t.getTotalSupply()) && e.writeInt64(4, o), (o = t.getFrozenSupplyList()).length > 0 && e.writeRepeatedMessage(5, o, proto.protocol.AssetIssueContract.FrozenSupply.serializeBinaryToWriter), 0 !== (o = t.getTrxNum()) && e.writeInt32(6, o), 0 !== (o = t.getNum()) && e.writeInt32(8, o), 0 !== (o = t.getStartTime()) && e.writeInt64(9, o), 0 !== (o = t.getEndTime()) && e.writeInt64(10, o), 0 !== (o = t.getVoteScore()) && e.writeInt32(16, o), (o = t.getDescription_asU8()).length > 0 && e.writeBytes(20, o), (o = t.getUrl_asU8()).length > 0 && e.writeBytes(21, o), 0 !== (o = t.getFreeAssetNetLimit()) && e.writeInt64(22, o), 0 !== (o = t.getPublicFreeAssetNetLimit()) && e.writeInt64(23, o), 0 !== (o = t.getPublicFreeAssetNetUsage()) && e.writeInt64(24, o), 0 !== (o = t.getPublicLatestFreeNetTime()) && e.writeInt64(25, o)
            }, proto.protocol.AssetIssueContract.FrozenSupply = function(t) {
                r.Message.initialize(this, t, 0, -1, null, null)
            }, s.inherits(proto.protocol.AssetIssueContract.FrozenSupply, r.Message), s.DEBUG && !COMPILED && (proto.protocol.AssetIssueContract.FrozenSupply.displayName = "proto.protocol.AssetIssueContract.FrozenSupply"), r.Message.GENERATE_TO_OBJECT && (proto.protocol.AssetIssueContract.FrozenSupply.prototype.toObject = function(t) {
                return proto.protocol.AssetIssueContract.FrozenSupply.toObject(t, this)
            }, proto.protocol.AssetIssueContract.FrozenSupply.toObject = function(t, e) {
                var o = {
                    frozenAmount: r.Message.getFieldWithDefault(e, 1, 0),
                    frozenDays: r.Message.getFieldWithDefault(e, 2, 0)
                };
                return t && (o.$jspbMessageInstance = e), o
            }), proto.protocol.AssetIssueContract.FrozenSupply.deserializeBinary = function(t) {
                var e = new r.BinaryReader(t),
                    o = new proto.protocol.AssetIssueContract.FrozenSupply;
                return proto.protocol.AssetIssueContract.FrozenSupply.deserializeBinaryFromReader(o, e)
            }, proto.protocol.AssetIssueContract.FrozenSupply.deserializeBinaryFromReader = function(t, e) {
                for (; e.nextField() && !e.isEndGroup();) {
                    switch (e.getFieldNumber()) {
                        case 1:
                            var o = e.readInt64();
                            t.setFrozenAmount(o);
                            break;
                        case 2:
                            o = e.readInt64();
                            t.setFrozenDays(o);
                            break;
                        default:
                            e.skipField()
                    }
                }
                return t
            }, proto.protocol.AssetIssueContract.FrozenSupply.prototype.serializeBinary = function() {
                var t = new r.BinaryWriter;
                return proto.protocol.AssetIssueContract.FrozenSupply.serializeBinaryToWriter(this, t), t.getResultBuffer()
            }, proto.protocol.AssetIssueContract.FrozenSupply.serializeBinaryToWriter = function(t, e) {
                var o = void 0;
                0 !== (o = t.getFrozenAmount()) && e.writeInt64(1, o), 0 !== (o = t.getFrozenDays()) && e.writeInt64(2, o)
            }, proto.protocol.AssetIssueContract.FrozenSupply.prototype.getFrozenAmount = function() {
                return r.Message.getFieldWithDefault(this, 1, 0)
            }, proto.protocol.AssetIssueContract.FrozenSupply.prototype.setFrozenAmount = function(t) {
                r.Message.setProto3IntField(this, 1, t)
            }, proto.protocol.AssetIssueContract.FrozenSupply.prototype.getFrozenDays = function() {
                return r.Message.getFieldWithDefault(this, 2, 0)
            }, proto.protocol.AssetIssueContract.FrozenSupply.prototype.setFrozenDays = function(t) {
                r.Message.setProto3IntField(this, 2, t)
            }, proto.protocol.AssetIssueContract.prototype.getOwnerAddress = function() {
                return r.Message.getFieldWithDefault(this, 1, "")
            }, proto.protocol.AssetIssueContract.prototype.getOwnerAddress_asB64 = function() {
                return r.Message.bytesAsB64(this.getOwnerAddress())
            }, proto.protocol.AssetIssueContract.prototype.getOwnerAddress_asU8 = function() {
                return r.Message.bytesAsU8(this.getOwnerAddress())
            }, proto.protocol.AssetIssueContract.prototype.setOwnerAddress = function(t) {
                r.Message.setProto3BytesField(this, 1, t)
            }, proto.protocol.AssetIssueContract.prototype.getName = function() {
                return r.Message.getFieldWithDefault(this, 2, "")
            }, proto.protocol.AssetIssueContract.prototype.getName_asB64 = function() {
                return r.Message.bytesAsB64(this.getName())
            }, proto.protocol.AssetIssueContract.prototype.getName_asU8 = function() {
                return r.Message.bytesAsU8(this.getName())
            }, proto.protocol.AssetIssueContract.prototype.setName = function(t) {
                r.Message.setProto3BytesField(this, 2, t)
            }, proto.protocol.AssetIssueContract.prototype.getAbbr = function() {
                return r.Message.getFieldWithDefault(this, 3, "")
            }, proto.protocol.AssetIssueContract.prototype.getAbbr_asB64 = function() {
                return r.Message.bytesAsB64(this.getAbbr())
            }, proto.protocol.AssetIssueContract.prototype.getAbbr_asU8 = function() {
                return r.Message.bytesAsU8(this.getAbbr())
            }, proto.protocol.AssetIssueContract.prototype.setAbbr = function(t) {
                r.Message.setProto3BytesField(this, 3, t)
            }, proto.protocol.AssetIssueContract.prototype.getTotalSupply = function() {
                return r.Message.getFieldWithDefault(this, 4, 0)
            }, proto.protocol.AssetIssueContract.prototype.setTotalSupply = function(t) {
                r.Message.setProto3IntField(this, 4, t)
            }, proto.protocol.AssetIssueContract.prototype.getFrozenSupplyList = function() {
                return r.Message.getRepeatedWrapperField(this, proto.protocol.AssetIssueContract.FrozenSupply, 5)
            }, proto.protocol.AssetIssueContract.prototype.setFrozenSupplyList = function(t) {
                r.Message.setRepeatedWrapperField(this, 5, t)
            }, proto.protocol.AssetIssueContract.prototype.addFrozenSupply = function(t, e) {
                return r.Message.addToRepeatedWrapperField(this, 5, t, proto.protocol.AssetIssueContract.FrozenSupply, e)
            }, proto.protocol.AssetIssueContract.prototype.clearFrozenSupplyList = function() {
                this.setFrozenSupplyList([])
            }, proto.protocol.AssetIssueContract.prototype.getTrxNum = function() {
                return r.Message.getFieldWithDefault(this, 6, 0)
            }, proto.protocol.AssetIssueContract.prototype.setTrxNum = function(t) {
                r.Message.setProto3IntField(this, 6, t)
            }, proto.protocol.AssetIssueContract.prototype.getNum = function() {
                return r.Message.getFieldWithDefault(this, 8, 0)
            }, proto.protocol.AssetIssueContract.prototype.setNum = function(t) {
                r.Message.setProto3IntField(this, 8, t)
            }, proto.protocol.AssetIssueContract.prototype.getStartTime = function() {
                return r.Message.getFieldWithDefault(this, 9, 0)
            }, proto.protocol.AssetIssueContract.prototype.setStartTime = function(t) {
                r.Message.setProto3IntField(this, 9, t)
            }, proto.protocol.AssetIssueContract.prototype.getEndTime = function() {
                return r.Message.getFieldWithDefault(this, 10, 0)
            }, proto.protocol.AssetIssueContract.prototype.setEndTime = function(t) {
                r.Message.setProto3IntField(this, 10, t)
            }, proto.protocol.AssetIssueContract.prototype.getVoteScore = function() {
                return r.Message.getFieldWithDefault(this, 16, 0)
            }, proto.protocol.AssetIssueContract.prototype.setVoteScore = function(t) {
                r.Message.setProto3IntField(this, 16, t)
            }, proto.protocol.AssetIssueContract.prototype.getDescription = function() {
                return r.Message.getFieldWithDefault(this, 20, "")
            }, proto.protocol.AssetIssueContract.prototype.getDescription_asB64 = function() {
                return r.Message.bytesAsB64(this.getDescription())
            }, proto.protocol.AssetIssueContract.prototype.getDescription_asU8 = function() {
                return r.Message.bytesAsU8(this.getDescription())
            }, proto.protocol.AssetIssueContract.prototype.setDescription = function(t) {
                r.Message.setProto3BytesField(this, 20, t)
            }, proto.protocol.AssetIssueContract.prototype.getUrl = function() {
                return r.Message.getFieldWithDefault(this, 21, "")
            }, proto.protocol.AssetIssueContract.prototype.getUrl_asB64 = function() {
                return r.Message.bytesAsB64(this.getUrl())
            }, proto.protocol.AssetIssueContract.prototype.getUrl_asU8 = function() {
                return r.Message.bytesAsU8(this.getUrl())
            }, proto.protocol.AssetIssueContract.prototype.setUrl = function(t) {
                r.Message.setProto3BytesField(this, 21, t)
            }, proto.protocol.AssetIssueContract.prototype.getFreeAssetNetLimit = function() {
                return r.Message.getFieldWithDefault(this, 22, 0)
            }, proto.protocol.AssetIssueContract.prototype.setFreeAssetNetLimit = function(t) {
                r.Message.setProto3IntField(this, 22, t)
            }, proto.protocol.AssetIssueContract.prototype.getPublicFreeAssetNetLimit = function() {
                return r.Message.getFieldWithDefault(this, 23, 0)
            }, proto.protocol.AssetIssueContract.prototype.setPublicFreeAssetNetLimit = function(t) {
                r.Message.setProto3IntField(this, 23, t)
            }, proto.protocol.AssetIssueContract.prototype.getPublicFreeAssetNetUsage = function() {
                return r.Message.getFieldWithDefault(this, 24, 0)
            }, proto.protocol.AssetIssueContract.prototype.setPublicFreeAssetNetUsage = function(t) {
                r.Message.setProto3IntField(this, 24, t)
            }, proto.protocol.AssetIssueContract.prototype.getPublicLatestFreeNetTime = function() {
                return r.Message.getFieldWithDefault(this, 25, 0)
            }, proto.protocol.AssetIssueContract.prototype.setPublicLatestFreeNetTime = function(t) {
                r.Message.setProto3IntField(this, 25, t)
            }, proto.protocol.ParticipateAssetIssueContract = function(t) {
                r.Message.initialize(this, t, 0, -1, null, null)
            }, s.inherits(proto.protocol.ParticipateAssetIssueContract, r.Message), s.DEBUG && !COMPILED && (proto.protocol.ParticipateAssetIssueContract.displayName = "proto.protocol.ParticipateAssetIssueContract"), r.Message.GENERATE_TO_OBJECT && (proto.protocol.ParticipateAssetIssueContract.prototype.toObject = function(t) {
                return proto.protocol.ParticipateAssetIssueContract.toObject(t, this)
            }, proto.protocol.ParticipateAssetIssueContract.toObject = function(t, e) {
                var o = {
                    ownerAddress: e.getOwnerAddress_asB64(),
                    toAddress: e.getToAddress_asB64(),
                    assetName: e.getAssetName_asB64(),
                    amount: r.Message.getFieldWithDefault(e, 4, 0)
                };
                return t && (o.$jspbMessageInstance = e), o
            }), proto.protocol.ParticipateAssetIssueContract.deserializeBinary = function(t) {
                var e = new r.BinaryReader(t),
                    o = new proto.protocol.ParticipateAssetIssueContract;
                return proto.protocol.ParticipateAssetIssueContract.deserializeBinaryFromReader(o, e)
            }, proto.protocol.ParticipateAssetIssueContract.deserializeBinaryFromReader = function(t, e) {
                for (; e.nextField() && !e.isEndGroup();) {
                    switch (e.getFieldNumber()) {
                        case 1:
                            var o = e.readBytes();
                            t.setOwnerAddress(o);
                            break;
                        case 2:
                            o = e.readBytes();
                            t.setToAddress(o);
                            break;
                        case 3:
                            o = e.readBytes();
                            t.setAssetName(o);
                            break;
                        case 4:
                            o = e.readInt64();
                            t.setAmount(o);
                            break;
                        default:
                            e.skipField()
                    }
                }
                return t
            }, proto.protocol.ParticipateAssetIssueContract.prototype.serializeBinary = function() {
                var t = new r.BinaryWriter;
                return proto.protocol.ParticipateAssetIssueContract.serializeBinaryToWriter(this, t), t.getResultBuffer()
            }, proto.protocol.ParticipateAssetIssueContract.serializeBinaryToWriter = function(t, e) {
                var o = void 0;
                (o = t.getOwnerAddress_asU8()).length > 0 && e.writeBytes(1, o), (o = t.getToAddress_asU8()).length > 0 && e.writeBytes(2, o), (o = t.getAssetName_asU8()).length > 0 && e.writeBytes(3, o), 0 !== (o = t.getAmount()) && e.writeInt64(4, o)
            }, proto.protocol.ParticipateAssetIssueContract.prototype.getOwnerAddress = function() {
                return r.Message.getFieldWithDefault(this, 1, "")
            }, proto.protocol.ParticipateAssetIssueContract.prototype.getOwnerAddress_asB64 = function() {
                return r.Message.bytesAsB64(this.getOwnerAddress())
            }, proto.protocol.ParticipateAssetIssueContract.prototype.getOwnerAddress_asU8 = function() {
                return r.Message.bytesAsU8(this.getOwnerAddress())
            }, proto.protocol.ParticipateAssetIssueContract.prototype.setOwnerAddress = function(t) {
                r.Message.setProto3BytesField(this, 1, t)
            }, proto.protocol.ParticipateAssetIssueContract.prototype.getToAddress = function() {
                return r.Message.getFieldWithDefault(this, 2, "")
            }, proto.protocol.ParticipateAssetIssueContract.prototype.getToAddress_asB64 = function() {
                return r.Message.bytesAsB64(this.getToAddress())
            }, proto.protocol.ParticipateAssetIssueContract.prototype.getToAddress_asU8 = function() {
                return r.Message.bytesAsU8(this.getToAddress())
            }, proto.protocol.ParticipateAssetIssueContract.prototype.setToAddress = function(t) {
                r.Message.setProto3BytesField(this, 2, t)
            }, proto.protocol.ParticipateAssetIssueContract.prototype.getAssetName = function() {
                return r.Message.getFieldWithDefault(this, 3, "")
            }, proto.protocol.ParticipateAssetIssueContract.prototype.getAssetName_asB64 = function() {
                return r.Message.bytesAsB64(this.getAssetName())
            }, proto.protocol.ParticipateAssetIssueContract.prototype.getAssetName_asU8 = function() {
                return r.Message.bytesAsU8(this.getAssetName())
            }, proto.protocol.ParticipateAssetIssueContract.prototype.setAssetName = function(t) {
                r.Message.setProto3BytesField(this, 3, t)
            }, proto.protocol.ParticipateAssetIssueContract.prototype.getAmount = function() {
                return r.Message.getFieldWithDefault(this, 4, 0)
            }, proto.protocol.ParticipateAssetIssueContract.prototype.setAmount = function(t) {
                r.Message.setProto3IntField(this, 4, t)
            }, proto.protocol.DeployContract = function(t) {
                r.Message.initialize(this, t, 0, -1, null, null)
            }, s.inherits(proto.protocol.DeployContract, r.Message), s.DEBUG && !COMPILED && (proto.protocol.DeployContract.displayName = "proto.protocol.DeployContract"), r.Message.GENERATE_TO_OBJECT && (proto.protocol.DeployContract.prototype.toObject = function(t) {
                return proto.protocol.DeployContract.toObject(t, this)
            }, proto.protocol.DeployContract.toObject = function(t, e) {
                var o = {
                    ownerAddress: e.getOwnerAddress_asB64(),
                    script: e.getScript_asB64()
                };
                return t && (o.$jspbMessageInstance = e), o
            }), proto.protocol.DeployContract.deserializeBinary = function(t) {
                var e = new r.BinaryReader(t),
                    o = new proto.protocol.DeployContract;
                return proto.protocol.DeployContract.deserializeBinaryFromReader(o, e)
            }, proto.protocol.DeployContract.deserializeBinaryFromReader = function(t, e) {
                for (; e.nextField() && !e.isEndGroup();) {
                    switch (e.getFieldNumber()) {
                        case 1:
                            var o = e.readBytes();
                            t.setOwnerAddress(o);
                            break;
                        case 2:
                            o = e.readBytes();
                            t.setScript(o);
                            break;
                        default:
                            e.skipField()
                    }
                }
                return t
            }, proto.protocol.DeployContract.prototype.serializeBinary = function() {
                var t = new r.BinaryWriter;
                return proto.protocol.DeployContract.serializeBinaryToWriter(this, t), t.getResultBuffer()
            }, proto.protocol.DeployContract.serializeBinaryToWriter = function(t, e) {
                var o = void 0;
                (o = t.getOwnerAddress_asU8()).length > 0 && e.writeBytes(1, o), (o = t.getScript_asU8()).length > 0 && e.writeBytes(2, o)
            }, proto.protocol.DeployContract.prototype.getOwnerAddress = function() {
                return r.Message.getFieldWithDefault(this, 1, "")
            }, proto.protocol.DeployContract.prototype.getOwnerAddress_asB64 = function() {
                return r.Message.bytesAsB64(this.getOwnerAddress())
            }, proto.protocol.DeployContract.prototype.getOwnerAddress_asU8 = function() {
                return r.Message.bytesAsU8(this.getOwnerAddress())
            }, proto.protocol.DeployContract.prototype.setOwnerAddress = function(t) {
                r.Message.setProto3BytesField(this, 1, t)
            }, proto.protocol.DeployContract.prototype.getScript = function() {
                return r.Message.getFieldWithDefault(this, 2, "")
            }, proto.protocol.DeployContract.prototype.getScript_asB64 = function() {
                return r.Message.bytesAsB64(this.getScript())
            }, proto.protocol.DeployContract.prototype.getScript_asU8 = function() {
                return r.Message.bytesAsU8(this.getScript())
            }, proto.protocol.DeployContract.prototype.setScript = function(t) {
                r.Message.setProto3BytesField(this, 2, t)
            }, proto.protocol.FreezeBalanceContract = function(t) {
                r.Message.initialize(this, t, 0, -1, null, null)
            }, s.inherits(proto.protocol.FreezeBalanceContract, r.Message), s.DEBUG && !COMPILED && (proto.protocol.FreezeBalanceContract.displayName = "proto.protocol.FreezeBalanceContract"), r.Message.GENERATE_TO_OBJECT && (proto.protocol.FreezeBalanceContract.prototype.toObject = function(t) {
                return proto.protocol.FreezeBalanceContract.toObject(t, this)
            }, proto.protocol.FreezeBalanceContract.toObject = function(t, e) {
                var o = {
                    ownerAddress: e.getOwnerAddress_asB64(),
                    frozenBalance: r.Message.getFieldWithDefault(e, 2, 0),
                    frozenDuration: r.Message.getFieldWithDefault(e, 3, 0)
                };
                return t && (o.$jspbMessageInstance = e), o
            }), proto.protocol.FreezeBalanceContract.deserializeBinary = function(t) {
                var e = new r.BinaryReader(t),
                    o = new proto.protocol.FreezeBalanceContract;
                return proto.protocol.FreezeBalanceContract.deserializeBinaryFromReader(o, e)
            }, proto.protocol.FreezeBalanceContract.deserializeBinaryFromReader = function(t, e) {
                for (; e.nextField() && !e.isEndGroup();) {
                    switch (e.getFieldNumber()) {
                        case 1:
                            var o = e.readBytes();
                            t.setOwnerAddress(o);
                            break;
                        case 2:
                            o = e.readInt64();
                            t.setFrozenBalance(o);
                            break;
                        case 3:
                            o = e.readInt64();
                            t.setFrozenDuration(o);
                            break;
                        default:
                            e.skipField()
                    }
                }
                return t
            }, proto.protocol.FreezeBalanceContract.prototype.serializeBinary = function() {
                var t = new r.BinaryWriter;
                return proto.protocol.FreezeBalanceContract.serializeBinaryToWriter(this, t), t.getResultBuffer()
            }, proto.protocol.FreezeBalanceContract.serializeBinaryToWriter = function(t, e) {
                var o = void 0;
                (o = t.getOwnerAddress_asU8()).length > 0 && e.writeBytes(1, o), 0 !== (o = t.getFrozenBalance()) && e.writeInt64(2, o), 0 !== (o = t.getFrozenDuration()) && e.writeInt64(3, o)
            }, proto.protocol.FreezeBalanceContract.prototype.getOwnerAddress = function() {
                return r.Message.getFieldWithDefault(this, 1, "")
            }, proto.protocol.FreezeBalanceContract.prototype.getOwnerAddress_asB64 = function() {
                return r.Message.bytesAsB64(this.getOwnerAddress())
            }, proto.protocol.FreezeBalanceContract.prototype.getOwnerAddress_asU8 = function() {
                return r.Message.bytesAsU8(this.getOwnerAddress())
            }, proto.protocol.FreezeBalanceContract.prototype.setOwnerAddress = function(t) {
                r.Message.setProto3BytesField(this, 1, t)
            }, proto.protocol.FreezeBalanceContract.prototype.getFrozenBalance = function() {
                return r.Message.getFieldWithDefault(this, 2, 0)
            }, proto.protocol.FreezeBalanceContract.prototype.setFrozenBalance = function(t) {
                r.Message.setProto3IntField(this, 2, t)
            }, proto.protocol.FreezeBalanceContract.prototype.getFrozenDuration = function() {
                return r.Message.getFieldWithDefault(this, 3, 0)
            }, proto.protocol.FreezeBalanceContract.prototype.setFrozenDuration = function(t) {
                r.Message.setProto3IntField(this, 3, t)
            }, proto.protocol.UnfreezeBalanceContract = function(t) {
                r.Message.initialize(this, t, 0, -1, null, null)
            }, s.inherits(proto.protocol.UnfreezeBalanceContract, r.Message), s.DEBUG && !COMPILED && (proto.protocol.UnfreezeBalanceContract.displayName = "proto.protocol.UnfreezeBalanceContract"), r.Message.GENERATE_TO_OBJECT && (proto.protocol.UnfreezeBalanceContract.prototype.toObject = function(t) {
                return proto.protocol.UnfreezeBalanceContract.toObject(t, this)
            }, proto.protocol.UnfreezeBalanceContract.toObject = function(t, e) {
                var o = {
                    ownerAddress: e.getOwnerAddress_asB64()
                };
                return t && (o.$jspbMessageInstance = e), o
            }), proto.protocol.UnfreezeBalanceContract.deserializeBinary = function(t) {
                var e = new r.BinaryReader(t),
                    o = new proto.protocol.UnfreezeBalanceContract;
                return proto.protocol.UnfreezeBalanceContract.deserializeBinaryFromReader(o, e)
            }, proto.protocol.UnfreezeBalanceContract.deserializeBinaryFromReader = function(t, e) {
                for (; e.nextField() && !e.isEndGroup();) {
                    switch (e.getFieldNumber()) {
                        case 1:
                            var o = e.readBytes();
                            t.setOwnerAddress(o);
                            break;
                        default:
                            e.skipField()
                    }
                }
                return t
            }, proto.protocol.UnfreezeBalanceContract.prototype.serializeBinary = function() {
                var t = new r.BinaryWriter;
                return proto.protocol.UnfreezeBalanceContract.serializeBinaryToWriter(this, t), t.getResultBuffer()
            }, proto.protocol.UnfreezeBalanceContract.serializeBinaryToWriter = function(t, e) {
                var o;
                (o = t.getOwnerAddress_asU8()).length > 0 && e.writeBytes(1, o)
            }, proto.protocol.UnfreezeBalanceContract.prototype.getOwnerAddress = function() {
                return r.Message.getFieldWithDefault(this, 1, "")
            }, proto.protocol.UnfreezeBalanceContract.prototype.getOwnerAddress_asB64 = function() {
                return r.Message.bytesAsB64(this.getOwnerAddress())
            }, proto.protocol.UnfreezeBalanceContract.prototype.getOwnerAddress_asU8 = function() {
                return r.Message.bytesAsU8(this.getOwnerAddress())
            }, proto.protocol.UnfreezeBalanceContract.prototype.setOwnerAddress = function(t) {
                r.Message.setProto3BytesField(this, 1, t)
            }, proto.protocol.UnfreezeAssetContract = function(t) {
                r.Message.initialize(this, t, 0, -1, null, null)
            }, s.inherits(proto.protocol.UnfreezeAssetContract, r.Message), s.DEBUG && !COMPILED && (proto.protocol.UnfreezeAssetContract.displayName = "proto.protocol.UnfreezeAssetContract"), r.Message.GENERATE_TO_OBJECT && (proto.protocol.UnfreezeAssetContract.prototype.toObject = function(t) {
                return proto.protocol.UnfreezeAssetContract.toObject(t, this)
            }, proto.protocol.UnfreezeAssetContract.toObject = function(t, e) {
                var o = {
                    ownerAddress: e.getOwnerAddress_asB64()
                };
                return t && (o.$jspbMessageInstance = e), o
            }), proto.protocol.UnfreezeAssetContract.deserializeBinary = function(t) {
                var e = new r.BinaryReader(t),
                    o = new proto.protocol.UnfreezeAssetContract;
                return proto.protocol.UnfreezeAssetContract.deserializeBinaryFromReader(o, e)
            }, proto.protocol.UnfreezeAssetContract.deserializeBinaryFromReader = function(t, e) {
                for (; e.nextField() && !e.isEndGroup();) {
                    switch (e.getFieldNumber()) {
                        case 1:
                            var o = e.readBytes();
                            t.setOwnerAddress(o);
                            break;
                        default:
                            e.skipField()
                    }
                }
                return t
            }, proto.protocol.UnfreezeAssetContract.prototype.serializeBinary = function() {
                var t = new r.BinaryWriter;
                return proto.protocol.UnfreezeAssetContract.serializeBinaryToWriter(this, t), t.getResultBuffer()
            }, proto.protocol.UnfreezeAssetContract.serializeBinaryToWriter = function(t, e) {
                var o;
                (o = t.getOwnerAddress_asU8()).length > 0 && e.writeBytes(1, o)
            }, proto.protocol.UnfreezeAssetContract.prototype.getOwnerAddress = function() {
                return r.Message.getFieldWithDefault(this, 1, "")
            }, proto.protocol.UnfreezeAssetContract.prototype.getOwnerAddress_asB64 = function() {
                return r.Message.bytesAsB64(this.getOwnerAddress())
            }, proto.protocol.UnfreezeAssetContract.prototype.getOwnerAddress_asU8 = function() {
                return r.Message.bytesAsU8(this.getOwnerAddress())
            }, proto.protocol.UnfreezeAssetContract.prototype.setOwnerAddress = function(t) {
                r.Message.setProto3BytesField(this, 1, t)
            }, proto.protocol.WithdrawBalanceContract = function(t) {
                r.Message.initialize(this, t, 0, -1, null, null)
            }, s.inherits(proto.protocol.WithdrawBalanceContract, r.Message), s.DEBUG && !COMPILED && (proto.protocol.WithdrawBalanceContract.displayName = "proto.protocol.WithdrawBalanceContract"), r.Message.GENERATE_TO_OBJECT && (proto.protocol.WithdrawBalanceContract.prototype.toObject = function(t) {
                return proto.protocol.WithdrawBalanceContract.toObject(t, this)
            }, proto.protocol.WithdrawBalanceContract.toObject = function(t, e) {
                var o = {
                    ownerAddress: e.getOwnerAddress_asB64()
                };
                return t && (o.$jspbMessageInstance = e), o
            }), proto.protocol.WithdrawBalanceContract.deserializeBinary = function(t) {
                var e = new r.BinaryReader(t),
                    o = new proto.protocol.WithdrawBalanceContract;
                return proto.protocol.WithdrawBalanceContract.deserializeBinaryFromReader(o, e)
            }, proto.protocol.WithdrawBalanceContract.deserializeBinaryFromReader = function(t, e) {
                for (; e.nextField() && !e.isEndGroup();) {
                    switch (e.getFieldNumber()) {
                        case 1:
                            var o = e.readBytes();
                            t.setOwnerAddress(o);
                            break;
                        default:
                            e.skipField()
                    }
                }
                return t
            }, proto.protocol.WithdrawBalanceContract.prototype.serializeBinary = function() {
                var t = new r.BinaryWriter;
                return proto.protocol.WithdrawBalanceContract.serializeBinaryToWriter(this, t), t.getResultBuffer()
            }, proto.protocol.WithdrawBalanceContract.serializeBinaryToWriter = function(t, e) {
                var o;
                (o = t.getOwnerAddress_asU8()).length > 0 && e.writeBytes(1, o)
            }, proto.protocol.WithdrawBalanceContract.prototype.getOwnerAddress = function() {
                return r.Message.getFieldWithDefault(this, 1, "")
            }, proto.protocol.WithdrawBalanceContract.prototype.getOwnerAddress_asB64 = function() {
                return r.Message.bytesAsB64(this.getOwnerAddress())
            }, proto.protocol.WithdrawBalanceContract.prototype.getOwnerAddress_asU8 = function() {
                return r.Message.bytesAsU8(this.getOwnerAddress())
            }, proto.protocol.WithdrawBalanceContract.prototype.setOwnerAddress = function(t) {
                r.Message.setProto3BytesField(this, 1, t)
            }, proto.protocol.UpdateAssetContract = function(t) {
                r.Message.initialize(this, t, 0, -1, null, null)
            }, s.inherits(proto.protocol.UpdateAssetContract, r.Message), s.DEBUG && !COMPILED && (proto.protocol.UpdateAssetContract.displayName = "proto.protocol.UpdateAssetContract"), r.Message.GENERATE_TO_OBJECT && (proto.protocol.UpdateAssetContract.prototype.toObject = function(t) {
                return proto.protocol.UpdateAssetContract.toObject(t, this)
            }, proto.protocol.UpdateAssetContract.toObject = function(t, e) {
                var o = {
                    ownerAddress: e.getOwnerAddress_asB64(),
                    description: e.getDescription_asB64(),
                    url: e.getUrl_asB64(),
                    newLimit: r.Message.getFieldWithDefault(e, 4, 0),
                    newPublicLimit: r.Message.getFieldWithDefault(e, 5, 0)
                };
                return t && (o.$jspbMessageInstance = e), o
            }), proto.protocol.UpdateAssetContract.deserializeBinary = function(t) {
                var e = new r.BinaryReader(t),
                    o = new proto.protocol.UpdateAssetContract;
                return proto.protocol.UpdateAssetContract.deserializeBinaryFromReader(o, e)
            }, proto.protocol.UpdateAssetContract.deserializeBinaryFromReader = function(t, e) {
                for (; e.nextField() && !e.isEndGroup();) {
                    switch (e.getFieldNumber()) {
                        case 1:
                            var o = e.readBytes();
                            t.setOwnerAddress(o);
                            break;
                        case 2:
                            o = e.readBytes();
                            t.setDescription(o);
                            break;
                        case 3:
                            o = e.readBytes();
                            t.setUrl(o);
                            break;
                        case 4:
                            o = e.readInt64();
                            t.setNewLimit(o);
                            break;
                        case 5:
                            o = e.readInt64();
                            t.setNewPublicLimit(o);
                            break;
                        default:
                            e.skipField()
                    }
                }
                return t
            }, proto.protocol.UpdateAssetContract.prototype.serializeBinary = function() {
                var t = new r.BinaryWriter;
                return proto.protocol.UpdateAssetContract.serializeBinaryToWriter(this, t), t.getResultBuffer()
            }, proto.protocol.UpdateAssetContract.serializeBinaryToWriter = function(t, e) {
                var o = void 0;
                (o = t.getOwnerAddress_asU8()).length > 0 && e.writeBytes(1, o), (o = t.getDescription_asU8()).length > 0 && e.writeBytes(2, o), (o = t.getUrl_asU8()).length > 0 && e.writeBytes(3, o), 0 !== (o = t.getNewLimit()) && e.writeInt64(4, o), 0 !== (o = t.getNewPublicLimit()) && e.writeInt64(5, o)
            }, proto.protocol.UpdateAssetContract.prototype.getOwnerAddress = function() {
                return r.Message.getFieldWithDefault(this, 1, "")
            }, proto.protocol.UpdateAssetContract.prototype.getOwnerAddress_asB64 = function() {
                return r.Message.bytesAsB64(this.getOwnerAddress())
            }, proto.protocol.UpdateAssetContract.prototype.getOwnerAddress_asU8 = function() {
                return r.Message.bytesAsU8(this.getOwnerAddress())
            }, proto.protocol.UpdateAssetContract.prototype.setOwnerAddress = function(t) {
                r.Message.setProto3BytesField(this, 1, t)
            }, proto.protocol.UpdateAssetContract.prototype.getDescription = function() {
                return r.Message.getFieldWithDefault(this, 2, "")
            }, proto.protocol.UpdateAssetContract.prototype.getDescription_asB64 = function() {
                return r.Message.bytesAsB64(this.getDescription())
            }, proto.protocol.UpdateAssetContract.prototype.getDescription_asU8 = function() {
                return r.Message.bytesAsU8(this.getDescription())
            }, proto.protocol.UpdateAssetContract.prototype.setDescription = function(t) {
                r.Message.setProto3BytesField(this, 2, t)
            }, proto.protocol.UpdateAssetContract.prototype.getUrl = function() {
                return r.Message.getFieldWithDefault(this, 3, "")
            }, proto.protocol.UpdateAssetContract.prototype.getUrl_asB64 = function() {
                return r.Message.bytesAsB64(this.getUrl())
            }, proto.protocol.UpdateAssetContract.prototype.getUrl_asU8 = function() {
                return r.Message.bytesAsU8(this.getUrl())
            }, proto.protocol.UpdateAssetContract.prototype.setUrl = function(t) {
                r.Message.setProto3BytesField(this, 3, t)
            }, proto.protocol.UpdateAssetContract.prototype.getNewLimit = function() {
                return r.Message.getFieldWithDefault(this, 4, 0)
            }, proto.protocol.UpdateAssetContract.prototype.setNewLimit = function(t) {
                r.Message.setProto3IntField(this, 4, t)
            }, proto.protocol.UpdateAssetContract.prototype.getNewPublicLimit = function() {
                return r.Message.getFieldWithDefault(this, 5, 0)
            }, proto.protocol.UpdateAssetContract.prototype.setNewPublicLimit = function(t) {
                r.Message.setProto3IntField(this, 5, t)
            }, s.object.extend(e, proto.protocol)
        },
        411: function(t, e, o) {
            const r = o(3436);

            function s(t) {
                var e = 0;
                return t >= "A" && t <= "F" ? e = t.charCodeAt(0) - "A".charCodeAt(0) + 10 : t >= "a" && t <= "f" ? e = t.charCodeAt(0) - "a".charCodeAt(0) + 10 : t >= "0" && t <= "9" && (e = t.charCodeAt(0) - "0".charCodeAt(0)), e
            }

            function n(t) {
                return t >= "A" && t <= "F" || t >= "a" && t <= "f" || t >= "0" && t <= "9" ? 1 : 0
            }

            function a(t) {
                return (new i).decodeToByteArray(t)
            }

            function i() {
                let t = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
                this.encode = function(e) {
                    for (var o, r, s, n, a, i, p, c = "", l = 0; l < e.length;) n = (o = e.charCodeAt(l++)) >> 2, a = (3 & o) << 4 | (r = e.charCodeAt(l++)) >> 4, i = (15 & r) << 2 | (s = e.charCodeAt(l++)) >> 6, p = 63 & s, isNaN(r) ? i = p = 64 : isNaN(s) && (p = 64), c = c + t.charAt(n) + t.charAt(a) + t.charAt(i) + t.charAt(p);
                    return c
                }, this.encodeIgnoreUtf8 = function(e) {
                    for (var o, r, s, n, a, i, p, c = "", l = 0; l < e.length;) n = (o = e[l++]) >> 2, a = (3 & o) << 4 | (r = e[l++]) >> 4, i = (15 & r) << 2 | (s = e[l++]) >> 6, p = 63 & s, isNaN(r) ? i = p = 64 : isNaN(s) && (p = 64), c = c + t.charAt(n) + t.charAt(a) + t.charAt(i) + t.charAt(p);
                    return c
                }, this.decode = function(e) {
                    var o, r, s, n, a, i, p = "",
                        c = 0;
                    for (e = e.replace(/[^A-Za-z0-9\+\/\=]/g, ""); c < e.length;) o = t.indexOf(e.charAt(c++)) << 2 | (n = t.indexOf(e.charAt(c++))) >> 4, r = (15 & n) << 4 | (a = t.indexOf(e.charAt(c++))) >> 2, s = (3 & a) << 6 | (i = t.indexOf(e.charAt(c++))), p += String.fromCharCode(o), 64 != a && (p += String.fromCharCode(r)), 64 != i && (p += String.fromCharCode(s));
                    return p = this._utf8_decode(p)
                }, this.decodeToByteArray = function(e) {
                    var o, r, s, n, a, i, p = "",
                        c = 0;
                    for (e = e.replace(/[^A-Za-z0-9\+\/\=]/g, ""); c < e.length;) o = t.indexOf(e.charAt(c++)) << 2 | (n = t.indexOf(e.charAt(c++))) >> 4, r = (15 & n) << 4 | (a = t.indexOf(e.charAt(c++))) >> 2, s = (3 & a) << 6 | (i = t.indexOf(e.charAt(c++))), p += String.fromCharCode(o), 64 != a && (p += String.fromCharCode(r)), 64 != i && (p += String.fromCharCode(s));
                    return this._out2ByteArray(p)
                }, this._out2ByteArray = function(t) {
                    let e = new Array(t.length),
                        o = 0,
                        r = 0;
                    for (; o < t.length;) r = t.charCodeAt(o), e[o] = r, o++;
                    return e
                }, this._utf8_encode = function(t) {
                    t = t.replace(/\r\n/g, "\n");
                    for (var e = "", o = 0; o < t.length; o++) {
                        var r = t.charCodeAt(o);
                        r < 128 ? e += String.fromCharCode(r) : r > 127 && r < 2048 ? (e += String.fromCharCode(r >> 6 | 192), e += String.fromCharCode(63 & r | 128)) : (e += String.fromCharCode(r >> 12 | 224), e += String.fromCharCode(r >> 6 & 63 | 128), e += String.fromCharCode(63 & r | 128))
                    }
                    return e
                }, this._utf8_decode = function(t) {
                    for (var e = "", o = 0, r = c1 = c2 = 0; o < t.length;)(r = t.charCodeAt(o)) < 128 ? (e += String.fromCharCode(r), o++) : r > 191 && r < 224 ? (c2 = t.charCodeAt(o + 1), e += String.fromCharCode((31 & r) << 6 | 63 & c2), o += 2) : (c2 = t.charCodeAt(o + 1), c3 = t.charCodeAt(o + 2), e += String.fromCharCode((15 & r) << 12 | (63 & c2) << 6 | 63 & c3), o += 3);
                    return e
                }
            }
            t.exports = {
                base64EncodeToString: function(t) {
                    return (new i).encodeIgnoreUtf8(t)
                },
                base64DecodeFromString: a,
                hexStr2byteArray: function(t) {
                    var e = Array(),
                        o = 0,
                        r = 0,
                        a = 0;
                    for (let p = 0; p < t.length; p++) {
                        var i = t.charAt(p);
                        n(i) && (o <<= 4, o += s(i), 0 == ++r % 2 && (e[a++] = o, o = 0))
                    }
                    return e
                },
                stringToBytes: function(t) {
                    var e, o, r = new Array;
                    e = t.length;
                    for (var s = 0; s < e; s++)(o = t.charCodeAt(s)) >= 65536 && o <= 1114111 ? (r.push(o >> 18 & 7 | 240), r.push(o >> 12 & 63 | 128), r.push(o >> 6 & 63 | 128), r.push(63 & o | 128)) : o >= 2048 && o <= 65535 ? (r.push(o >> 12 & 15 | 224), r.push(o >> 6 & 63 | 128), r.push(63 & o | 128)) : o >= 128 && o <= 2047 ? (r.push(o >> 6 & 31 | 192), r.push(63 & o | 128)) : r.push(255 & o);
                    return r
                },
                encodeString: function(t) {
                    return Uint8Array.from(a(r(t)))
                }
            }
        }
    }
]);