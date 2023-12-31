(window.webpackJsonp = window.webpackJsonp || []).push([
    [312], {
        5429: function(r, n, e) {
            "use strict";
            var t = e(2);
            Object.defineProperty(n, "__esModule", {
                value: !0
            }), n.default = void 0;
            var o = function(r, n) {
                    if (!n && r && r.__esModule) return r;
                    if (null === r || "object" != typeof r && "function" != typeof r) return {
                        default: r
                    };
                    var e = w(n);
                    if (e && e.has(r)) return e.get(r);
                    var t = {},
                        o = Object.defineProperty && Object.getOwnPropertyDescriptor;
                    for (var i in r)
                        if ("default" !== i && Object.prototype.hasOwnProperty.call(r, i)) {
                            var a = o ? Object.getOwnPropertyDescriptor(r, i) : null;
                            a && (a.get || a.set) ? Object.defineProperty(t, i, a) : t[i] = r[i]
                        } t.default = r, e && e.set(r, t);
                    return t
                }(e(9608)),
                i = t(e(2373)),
                a = t(e(7303)),
                c = e(9611),
                s = t(e(9612)),
                f = t(e(461)),
                u = e(29),
                l = e(26),
                h = e(930);

            function w(r) {
                if ("function" != typeof WeakMap) return null;
                var n = new WeakMap,
                    e = new WeakMap;
                return (w = function(r) {
                    return r ? e : n
                })(r)
            }
            const y = {
                frontier: "0000000000000000000000000000000000000000000000000000000000000000",
                representative: "nano_35btiz1mgfwp95c3ckazmzbp5gepduxtijuijd9xebeau8u1gsbea41smjca"
            };
            class NANOCoin extends((0, h.HasProviders)(f.default)) {
                constructor({
                    alias: r,
                    notify: n,
                    feeData: e,
                    explorers: t,
                    txWebUrl: o,
                    socket: i
                }) {
                    super({
                        alias: r,
                        notify: n,
                        name: "Nano",
                        ticker: "NANO",
                        decimal: 30,
                        derivation: "m/44'/165'/0'/0/0",
                        unspendableBalance: "0",
                        explorers: t,
                        txWebUrl: o,
                        socket: i
                    }), this.fee = e.fee, this.transactions = [], this.eventEmmiter.on(`${this.id}-${this.id}::mine-txs`, () => {
                        this.confirmAllPendingBlocks()
                    }), this.eventEmmiter.on(`${this.id}-${this.id}::new-socket-tx`, () => this.getInfo()), this.account_state = {}
                }
                connectSocket() {
                    this.getProvider("socket").connectSocket(this.address)
                }
                getPublicKeyHexAndAccountKeyPair(r) {
                    const n = this.generateAccountKeyPair(r);
                    return {
                        accountKeyPair: n,
                        publicKeyHex: Buffer.from(n.publicKey).toString("hex")
                    }
                }
                async loadWallet(r, n) {
                    try {
                        const r = i.default.mnemonicToEntropy(n),
                            e = 0,
                            t = this.hexToUint8(r),
                            o = this.generateAccountSecretKeyBytes(t, e),
                            {
                                accountKeyPair: a,
                                publicKeyHex: s
                            } = this.getPublicKeyHexAndAccountKeyPair(o);
                        return this.address = (0, c.accountFromKey)(s).replace("xrb", "nano"), this.privateKey = Buffer.from(a.secretKey).toString("hex"), this
                    } catch (r) {
                        throw new u.WalletError({
                            type: l.WALLET_ERROR,
                            error: r,
                            instance: this
                        })
                    }
                }
                getAddress() {
                    if (this.privateKey) {
                        const r = this.hexToUint8(this.privateKey),
                            {
                                publicKeyHex: n
                            } = this.getPublicKeyHexAndAccountKeyPair(r);
                        return (0, c.accountFromKey)(n).replace("xrb", "nano")
                    }
                    return new u.WalletError({
                        type: l.WALLET_ERROR,
                        error: new Error("privateKey is empty!"),
                        instance: this
                    })
                }
                validateAddress(r) {
                    return (0, s.default)(r)
                }
                async createTransaction({
                    address: r,
                    amount: n
                }) {
                    await this.getInfo();
                    const e = await this.getWork(this.account_state.frontier),
                        t = this.getAccountPublicKey(r),
                        o = new this.BN(this.balance).sub(new this.BN(n)),
                        i = this.hexToUint8(this.getAccountPublicKey(r)),
                        a = this.signSendBlock(i, o);
                    return {
                        block: {
                            type: "state",
                            account: this.address,
                            previous: this.account_state.frontier,
                            representative: this.account_state.representative,
                            balance: o.toString(),
                            link: t,
                            work: e,
                            signature: a
                        },
                        subtype: "send"
                    }
                }
                async createReceiveTransaction(r) {
                    let n = !0;
                    try {
                        await this.getInfo(), n = !1
                    } catch (r) {
                        console.warn("NANO: getInfo throws an error, probably trying to receive first tx for a given acc")
                    }
                    const e = await this.getProvider("tx").getBlockInfo(r),
                        t = this.getAccountPublicKey(this.address),
                        o = n ? t : this.account_state.frontier,
                        i = await this.getWork(o);
                    if (!i) throw new u.WalletError({
                        type: l.WALLET_ERROR,
                        error: new Error("[NANO] could not get work for " + o),
                        instance: this
                    });
                    const a = n ? new this.BN(e.amount) : new this.BN(this.balance).add(new this.BN(e.amount)),
                        c = this.hexToUint8(r),
                        s = this.signSendBlock(c, a);
                    return {
                        block: {
                            type: "state",
                            account: this.address,
                            previous: this.account_state.frontier,
                            representative: this.account_state.representative,
                            balance: a.toString(),
                            link: r,
                            work: i,
                            signature: s
                        },
                        subtype: "receive"
                    }
                }
                generateAccountSecretKeyBytes(r, n) {
                    const e = this.hexToUint8(this.decToHex(n, 4)),
                        t = o.blake2bInit(32);
                    return o.blake2bUpdate(t, r), o.blake2bUpdate(t, e), o.blake2bFinal(t)
                }
                getAccountPublicKey(r) {
                    return (0, c.keyFromAccount)(r.replace("nano", "xrb"))
                }
                generateAccountKeyPair(r) {
                    return a.default.sign.keyPair.fromSecretKey(r)
                }
                hexToUint8(r) {
                    const n = Math.floor(r.length / 2),
                        e = new Uint8Array(n);
                    for (let t = 0; t < n; t += 1) e[t] = parseInt(r.substr(2 * t, 2), 16);
                    return e
                }
                decToHex(r, n = null) {
                    let e = Number(r).toString(16);
                    if (e.length % 2 != 0 && (e = "0" + e), n > e.length / 2) {
                        const r = n - e.length / 2;
                        for (let n = 0; n < r; n += 1) e = "00" + e
                    }
                    return e
                }
                signSendBlock(r, n) {
                    const e = o.blake2bInit(32, null);
                    let t = n.toString(16);
                    for (; t.length < 32;) t = "0" + t;
                    o.blake2bUpdate(e, this.hexToUint8("0000000000000000000000000000000000000000000000000000000000000006")), o.blake2bUpdate(e, this.hexToUint8(this.getAccountPublicKey(this.address))), o.blake2bUpdate(e, this.hexToUint8(this.account_state.frontier)), o.blake2bUpdate(e, this.hexToUint8(this.getAccountPublicKey(this.account_state.representative))), o.blake2bUpdate(e, this.hexToUint8(t)), o.blake2bUpdate(e, r);
                    const i = o.blake2bFinal(e),
                        c = this.hexToUint8(this.privateKey),
                        s = a.default.sign.detached(i, c);
                    return Buffer.from(s).toString("hex")
                }
                async getWork(r) {
                    return this.getProvider("workGenerate").workGenerate(r)
                }
                async confirmAllPendingBlocks() {
                    const r = await this.getProvider("history").getPendingTransactions(this.address);
                    if (Array.isArray(r.blocks))
                        for (const n of r.blocks) await this.confirmPendingBlock(n)
                }
                async confirmPendingBlock(r) {
                    if ("string" != typeof r || 64 !== r.length) throw new Error("[NANO] confirmPendingBlock error: incorrect block hash: " + r);
                    const n = await this.createReceiveTransaction(r);
                    await this.sendTransaction(n), await new Promise((r, n) => setTimeout(async () => {
                        r(!0)
                    }, 5e3))
                }
                async getTransactions() {
                    this.confirmAllPendingBlocks();
                    const r = this.account_state.pending ? this.account_state.pending.blocks : [];
                    return this.getProvider("history").getTransactions({
                        address: this.address,
                        pending: r
                    })
                }
                async getInfo() {
                    try {
                        const r = await this.explorer.getInfo(this.address);
                        return this.balance = r.balance, this.account_state = r, r
                    } catch (r) {
                        throw "Account not found" === r.message && (this.balance = "0", this.account_state = y), r
                    }
                }
                async pushTx(r) {
                    if ("pending" === r.txid) return this.transactions = [r, ...this.transactions], void(r.direction && this.bus.$emit("socket::newtx", {
                        id: this.id,
                        ticker: this.ticker,
                        amount: r.amount
                    }));
                    if (!this.transactions.find(n => n.txid === r.txid)) {
                        const n = this.transactions.find(n => "pending" === n.txid && n.otherSideAddress === r.otherSideAddress);
                        n ? (n.txid = r.txid, this.transactions = [...this.transactions]) : (this.transactions = [r, ...this.transactions], r.direction && this.bus.$emit("socket::newtx", {
                            id: this.id,
                            ticker: this.ticker,
                            amount: r.amount
                        }))
                    }
                }
            }
            var b = NANOCoin;
            n.default = b
        },
        7302: function(r, n) {
            function e(r) {
                return (4294967296 + r).toString(16).substring(1)
            }
            r.exports = {
                normalizeInput: function(r) {
                    let n;
                    if (r instanceof Uint8Array) n = r;
                    else if (r instanceof Buffer) n = new Uint8Array(r);
                    else {
                        if ("string" != typeof r) throw new Error("Input must be an string, Buffer or Uint8Array");
                        n = new Uint8Array(Buffer.from(r, "utf8"))
                    }
                    return n
                },
                toHex: function(r) {
                    return Array.prototype.map.call(r, (function(r) {
                        return (r < 16 ? "0" : "") + r.toString(16)
                    })).join("")
                },
                debugPrint: function(r, n, t) {
                    let o = "\n" + r + " = ";
                    for (let i = 0; i < n.length; i += 2) {
                        if (32 === t) o += e(n[i]).toUpperCase(), o += " ", o += e(n[i + 1]).toUpperCase();
                        else {
                            if (64 !== t) throw new Error("Invalid size " + t);
                            o += e(n[i + 1]).toUpperCase(), o += e(n[i]).toUpperCase()
                        }
                        i % 6 == 4 ? o += "\n" + new Array(r.length + 4).join(" ") : i < n.length - 2 && (o += " ")
                    }
                    console.log(o)
                },
                testSpeed: function(r, n, e) {
                    let t = (new Date).getTime();
                    const o = new Uint8Array(n);
                    for (let r = 0; r < n; r++) o[r] = r % 256;
                    const i = (new Date).getTime();
                    console.log("Generated random input in " + (i - t) + "ms"), t = i;
                    for (let i = 0; i < e; i++) {
                        const e = r(o),
                            i = (new Date).getTime(),
                            a = i - t;
                        t = i, console.log("Hashed in " + a + "ms: " + e.substring(0, 20) + "..."), console.log(Math.round(n / (1 << 20) / (a / 1e3) * 100) / 100 + " MB PER SECOND")
                    }
                }
            }
        },
        7303: function(r, n, e) {
            const {
                blake2bInit: t,
                blake2bUpdate: o,
                blake2bFinal: i
            } = e(7304), a = {};
            var c = function(r, n) {
                    this.hi = 0 | r, this.lo = 0 | n
                },
                s = function(r) {
                    var n, e = new Float64Array(16);
                    if (r)
                        for (n = 0; n < r.length; n++) e[n] = r[n];
                    return e
                },
                f = function() {
                    throw new Error("no PRNG")
                },
                u = new Uint8Array(16),
                l = new Uint8Array(32);
            l[0] = 9;
            var h = s(),
                w = s([1]),
                y = s([56129, 1]),
                b = s([30883, 4953, 19914, 30187, 55467, 16705, 2637, 112, 59544, 30585, 16505, 36039, 65139, 11119, 27886, 20995]),
                g = s([61785, 9906, 39828, 60374, 45398, 33411, 5274, 224, 53552, 61171, 33010, 6542, 64743, 22239, 55772, 9222]),
                p = s([54554, 36645, 11616, 51542, 42930, 38181, 51040, 26924, 56412, 64982, 57905, 49316, 21502, 52590, 14035, 8553]),
                d = s([26200, 26214, 26214, 26214, 26214, 26214, 26214, 26214, 26214, 26214, 26214, 26214, 26214, 26214, 26214, 26214]),
                v = s([41136, 18958, 6951, 50414, 58488, 44335, 6150, 12099, 55207, 15867, 153, 11085, 57099, 20417, 9344, 11139]);

            function A(r, n) {
                return r << n | r >>> 32 - n
            }

            function U(r, n) {
                var e = 255 & r[n + 3];
                return (e = (e = e << 8 | 255 & r[n + 2]) << 8 | 255 & r[n + 1]) << 8 | 255 & r[n + 0]
            }

            function x(r, n) {
                var e = r[n] << 24 | r[n + 1] << 16 | r[n + 2] << 8 | r[n + 3],
                    t = r[n + 4] << 24 | r[n + 5] << 16 | r[n + 6] << 8 | r[n + 7];
                return new c(e, t)
            }

            function k(r, n, e) {
                var t;
                for (t = 0; t < 4; t++) r[n + t] = 255 & e, e >>>= 8
            }

            function _(r, n, e) {
                r[n] = e.hi >> 24 & 255, r[n + 1] = e.hi >> 16 & 255, r[n + 2] = e.hi >> 8 & 255, r[n + 3] = 255 & e.hi, r[n + 4] = e.lo >> 24 & 255, r[n + 5] = e.lo >> 16 & 255, r[n + 6] = e.lo >> 8 & 255, r[n + 7] = 255 & e.lo
            }

            function m(r, n, e, t, o) {
                var i, a = 0;
                for (i = 0; i < o; i++) a |= r[n + i] ^ e[t + i];
                return (1 & a - 1 >>> 8) - 1
            }

            function E(r, n, e, t) {
                return m(r, n, e, t, 16)
            }

            function K(r, n, e, t) {
                return m(r, n, e, t, 32)
            }

            function B(r, n, e, t, o) {
                var i, a, c, s = new Uint32Array(16),
                    f = new Uint32Array(16),
                    u = new Uint32Array(16),
                    l = new Uint32Array(4);
                for (i = 0; i < 4; i++) f[5 * i] = U(t, 4 * i), f[1 + i] = U(e, 4 * i), f[6 + i] = U(n, 4 * i), f[11 + i] = U(e, 16 + 4 * i);
                for (i = 0; i < 16; i++) u[i] = f[i];
                for (i = 0; i < 20; i++) {
                    for (a = 0; a < 4; a++) {
                        for (c = 0; c < 4; c++) l[c] = f[(5 * a + 4 * c) % 16];
                        for (l[1] ^= A(l[0] + l[3] | 0, 7), l[2] ^= A(l[1] + l[0] | 0, 9), l[3] ^= A(l[2] + l[1] | 0, 13), l[0] ^= A(l[3] + l[2] | 0, 18), c = 0; c < 4; c++) s[4 * a + (a + c) % 4] = l[c]
                    }
                    for (c = 0; c < 16; c++) f[c] = s[c]
                }
                if (o) {
                    for (i = 0; i < 16; i++) f[i] = f[i] + u[i] | 0;
                    for (i = 0; i < 4; i++) f[5 * i] = f[5 * i] - U(t, 4 * i) | 0, f[6 + i] = f[6 + i] - U(n, 4 * i) | 0;
                    for (i = 0; i < 4; i++) k(r, 4 * i, f[5 * i]), k(r, 16 + 4 * i, f[6 + i])
                } else
                    for (i = 0; i < 16; i++) k(r, 4 * i, f[i] + u[i] | 0)
            }

            function P(r, n, e, t) {
                return B(r, n, e, t, !1), 0
            }

            function T(r, n, e, t) {
                return B(r, n, e, t, !0), 0
            }
            var S = new Uint8Array([101, 120, 112, 97, 110, 100, 32, 51, 50, 45, 98, 121, 116, 101, 32, 107]);

            function I(r, n, e, t, o, i, a) {
                var c, s, f = new Uint8Array(16),
                    u = new Uint8Array(64);
                if (!o) return 0;
                for (s = 0; s < 16; s++) f[s] = 0;
                for (s = 0; s < 8; s++) f[s] = i[s];
                for (; o >= 64;) {
                    for (P(u, f, a, S), s = 0; s < 64; s++) r[n + s] = (e ? e[t + s] : 0) ^ u[s];
                    for (c = 1, s = 8; s < 16; s++) c = c + (255 & f[s]) | 0, f[s] = 255 & c, c >>>= 8;
                    o -= 64, n += 64, e && (t += 64)
                }
                if (o > 0)
                    for (P(u, f, a, S), s = 0; s < o; s++) r[n + s] = (e ? e[t + s] : 0) ^ u[s];
                return 0
            }

            function O(r, n, e, t, o) {
                return I(r, n, null, 0, e, t, o)
            }

            function N(r, n, e, t, o) {
                var i = new Uint8Array(32);
                return T(i, t, o, S), O(r, n, e, t.subarray(16), i)
            }

            function R(r, n, e, t, o, i, a) {
                var c = new Uint8Array(32);
                return T(c, i, a, S), I(r, n, e, t, o, i.subarray(16), c)
            }

            function z(r, n) {
                var e, t = 0;
                for (e = 0; e < 17; e++) t = t + (r[e] + n[e] | 0) | 0, r[e] = 255 & t, t >>>= 8
            }
            var F = new Uint32Array([5, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 252]);

            function L(r, n, e, t, o, i) {
                var a, c, s, f, u = new Uint32Array(17),
                    l = new Uint32Array(17),
                    h = new Uint32Array(17),
                    w = new Uint32Array(17),
                    y = new Uint32Array(17);
                for (s = 0; s < 17; s++) l[s] = h[s] = 0;
                for (s = 0; s < 16; s++) l[s] = i[s];
                for (l[3] &= 15, l[4] &= 252, l[7] &= 15, l[8] &= 252, l[11] &= 15, l[12] &= 252, l[15] &= 15; o > 0;) {
                    for (s = 0; s < 17; s++) w[s] = 0;
                    for (s = 0; s < 16 && s < o; ++s) w[s] = e[t + s];
                    for (w[s] = 1, t += s, o -= s, z(h, w), c = 0; c < 17; c++)
                        for (u[c] = 0, s = 0; s < 17; s++) u[c] = 0 | u[c] + h[s] * (s <= c ? l[c - s] : 320 * l[c + 17 - s] | 0);
                    for (c = 0; c < 17; c++) h[c] = u[c];
                    for (f = 0, s = 0; s < 16; s++) f = f + h[s] | 0, h[s] = 255 & f, f >>>= 8;
                    for (f = f + h[16] | 0, h[16] = 3 & f, f = 5 * (f >>> 2) | 0, s = 0; s < 16; s++) f = f + h[s] | 0, h[s] = 255 & f, f >>>= 8;
                    f = f + h[16] | 0, h[16] = f
                }
                for (s = 0; s < 17; s++) y[s] = h[s];
                for (z(h, F), a = 0 | -(h[16] >>> 7), s = 0; s < 17; s++) h[s] ^= a & (y[s] ^ h[s]);
                for (s = 0; s < 16; s++) w[s] = i[s + 16];
                for (w[16] = 0, z(h, w), s = 0; s < 16; s++) r[n + s] = h[s];
                return 0
            }

            function Y(r, n, e, t, o, i) {
                var a = new Uint8Array(16);
                return L(a, 0, e, t, o, i), E(r, n, a, 0)
            }

            function H(r, n, e, t, o) {
                var i;
                if (e < 32) return -1;
                for (R(r, 0, n, 0, e, t, o), L(r, 16, r, 32, e - 32, r), i = 0; i < 16; i++) r[i] = 0;
                return 0
            }

            function j(r, n, e, t, o) {
                var i, a = new Uint8Array(32);
                if (e < 32) return -1;
                if (N(a, 0, 32, t, o), 0 !== Y(n, 16, n, 32, e - 32, a)) return -1;
                for (R(r, 0, n, 0, e, t, o), i = 0; i < 32; i++) r[i] = 0;
                return 0
            }

            function M(r, n) {
                var e;
                for (e = 0; e < 16; e++) r[e] = 0 | n[e]
            }

            function C(r) {
                var n, e;
                for (e = 0; e < 16; e++) r[e] += 65536, n = Math.floor(r[e] / 65536), r[(e + 1) * (e < 15 ? 1 : 0)] += n - 1 + 37 * (n - 1) * (15 === e ? 1 : 0), r[e] -= 65536 * n
            }

            function W(r, n, e) {
                for (var t, o = ~(e - 1), i = 0; i < 16; i++) t = o & (r[i] ^ n[i]), r[i] ^= t, n[i] ^= t
            }

            function $(r, n) {
                var e, t, o, i = s(),
                    a = s();
                for (e = 0; e < 16; e++) a[e] = n[e];
                for (C(a), C(a), C(a), t = 0; t < 2; t++) {
                    for (i[0] = a[0] - 65517, e = 1; e < 15; e++) i[e] = a[e] - 65535 - (i[e - 1] >> 16 & 1), i[e - 1] &= 65535;
                    i[15] = a[15] - 32767 - (i[14] >> 16 & 1), o = i[15] >> 16 & 1, i[14] &= 65535, W(a, i, 1 - o)
                }
                for (e = 0; e < 16; e++) r[2 * e] = 255 & a[e], r[2 * e + 1] = a[e] >> 8
            }

            function D(r, n) {
                var e = new Uint8Array(32),
                    t = new Uint8Array(32);
                return $(e, r), $(t, n), K(e, 0, t, 0)
            }

            function G(r) {
                var n = new Uint8Array(32);
                return $(n, r), 1 & n[0]
            }

            function q(r, n) {
                var e;
                for (e = 0; e < 16; e++) r[e] = n[2 * e] + (n[2 * e + 1] << 8);
                r[15] &= 32767
            }

            function Z(r, n, e) {
                var t;
                for (t = 0; t < 16; t++) r[t] = n[t] + e[t] | 0
            }

            function V(r, n, e) {
                var t;
                for (t = 0; t < 16; t++) r[t] = n[t] - e[t] | 0
            }

            function J(r, n, e) {
                var t, o, i = new Float64Array(31);
                for (t = 0; t < 31; t++) i[t] = 0;
                for (t = 0; t < 16; t++)
                    for (o = 0; o < 16; o++) i[t + o] += n[t] * e[o];
                for (t = 0; t < 15; t++) i[t] += 38 * i[t + 16];
                for (t = 0; t < 16; t++) r[t] = i[t];
                C(r), C(r)
            }

            function X(r, n) {
                J(r, n, n)
            }

            function Q(r, n) {
                var e, t = s();
                for (e = 0; e < 16; e++) t[e] = n[e];
                for (e = 253; e >= 0; e--) X(t, t), 2 !== e && 4 !== e && J(t, t, n);
                for (e = 0; e < 16; e++) r[e] = t[e]
            }

            function rr(r, n, e) {
                var t, o, i = new Uint8Array(32),
                    a = new Float64Array(80),
                    c = s(),
                    f = s(),
                    u = s(),
                    l = s(),
                    h = s(),
                    w = s();
                for (o = 0; o < 31; o++) i[o] = n[o];
                for (i[31] = 127 & n[31] | 64, i[0] &= 248, q(a, e), o = 0; o < 16; o++) f[o] = a[o], l[o] = c[o] = u[o] = 0;
                for (c[0] = l[0] = 1, o = 254; o >= 0; --o) W(c, f, t = i[o >>> 3] >>> (7 & o) & 1), W(u, l, t), Z(h, c, u), V(c, c, u), Z(u, f, l), V(f, f, l), X(l, h), X(w, c), J(c, u, c), J(u, f, h), Z(h, c, u), V(c, c, u), X(f, c), V(u, l, w), J(c, u, y), Z(c, c, l), J(u, u, c), J(c, l, w), J(l, f, a), X(f, h), W(c, f, t), W(u, l, t);
                for (o = 0; o < 16; o++) a[o + 16] = c[o], a[o + 32] = u[o], a[o + 48] = f[o], a[o + 64] = l[o];
                var b = a.subarray(32),
                    g = a.subarray(16);
                return Q(b, b), J(g, g, b), $(r, g), 0
            }

            function nr(r, n) {
                return rr(r, n, l)
            }

            function er(r, n) {
                return f(n, 32), nr(r, n)
            }

            function tr(r, n, e) {
                var t = new Uint8Array(32);
                return rr(t, e, n), T(r, u, t, S)
            }
            var or = H,
                ir = j;

            function ar() {
                var r, n, e, t = 0,
                    o = 0,
                    i = 0,
                    a = 0,
                    s = 65535;
                for (e = 0; e < arguments.length; e++) t += (r = arguments[e].lo) & s, o += r >>> 16, i += (n = arguments[e].hi) & s, a += n >>> 16;
                return new c((i += (o += t >>> 16) >>> 16) & s | (a += i >>> 16) << 16, t & s | o << 16)
            }

            function cr(r, n) {
                return new c(r.hi >>> n, r.lo >>> n | r.hi << 32 - n)
            }

            function sr() {
                var r, n = 0,
                    e = 0;
                for (r = 0; r < arguments.length; r++) n ^= arguments[r].lo, e ^= arguments[r].hi;
                return new c(e, n)
            }

            function fr(r, n) {
                var e, t, o = 32 - n;
                return n < 32 ? (e = r.hi >>> n | r.lo << o, t = r.lo >>> n | r.hi << o) : n < 64 && (e = r.lo >>> n | r.hi << o, t = r.hi >>> n | r.lo << o), new c(e, t)
            }

            function ur(r, n, e) {
                var t = r.hi & n.hi ^ ~r.hi & e.hi,
                    o = r.lo & n.lo ^ ~r.lo & e.lo;
                return new c(t, o)
            }

            function lr(r, n, e) {
                var t = r.hi & n.hi ^ r.hi & e.hi ^ n.hi & e.hi,
                    o = r.lo & n.lo ^ r.lo & e.lo ^ n.lo & e.lo;
                return new c(t, o)
            }

            function hr(r) {
                return sr(fr(r, 28), fr(r, 34), fr(r, 39))
            }

            function wr(r) {
                return sr(fr(r, 14), fr(r, 18), fr(r, 41))
            }

            function yr(r) {
                return sr(fr(r, 1), fr(r, 8), cr(r, 7))
            }

            function br(r) {
                return sr(fr(r, 19), fr(r, 61), cr(r, 6))
            }
            var gr = [new c(1116352408, 3609767458), new c(1899447441, 602891725), new c(3049323471, 3964484399), new c(3921009573, 2173295548), new c(961987163, 4081628472), new c(1508970993, 3053834265), new c(2453635748, 2937671579), new c(2870763221, 3664609560), new c(3624381080, 2734883394), new c(310598401, 1164996542), new c(607225278, 1323610764), new c(1426881987, 3590304994), new c(1925078388, 4068182383), new c(2162078206, 991336113), new c(2614888103, 633803317), new c(3248222580, 3479774868), new c(3835390401, 2666613458), new c(4022224774, 944711139), new c(264347078, 2341262773), new c(604807628, 2007800933), new c(770255983, 1495990901), new c(1249150122, 1856431235), new c(1555081692, 3175218132), new c(1996064986, 2198950837), new c(2554220882, 3999719339), new c(2821834349, 766784016), new c(2952996808, 2566594879), new c(3210313671, 3203337956), new c(3336571891, 1034457026), new c(3584528711, 2466948901), new c(113926993, 3758326383), new c(338241895, 168717936), new c(666307205, 1188179964), new c(773529912, 1546045734), new c(1294757372, 1522805485), new c(1396182291, 2643833823), new c(1695183700, 2343527390), new c(1986661051, 1014477480), new c(2177026350, 1206759142), new c(2456956037, 344077627), new c(2730485921, 1290863460), new c(2820302411, 3158454273), new c(3259730800, 3505952657), new c(3345764771, 106217008), new c(3516065817, 3606008344), new c(3600352804, 1432725776), new c(4094571909, 1467031594), new c(275423344, 851169720), new c(430227734, 3100823752), new c(506948616, 1363258195), new c(659060556, 3750685593), new c(883997877, 3785050280), new c(958139571, 3318307427), new c(1322822218, 3812723403), new c(1537002063, 2003034995), new c(1747873779, 3602036899), new c(1955562222, 1575990012), new c(2024104815, 1125592928), new c(2227730452, 2716904306), new c(2361852424, 442776044), new c(2428436474, 593698344), new c(2756734187, 3733110249), new c(3204031479, 2999351573), new c(3329325298, 3815920427), new c(3391569614, 3928383900), new c(3515267271, 566280711), new c(3940187606, 3454069534), new c(4118630271, 4000239992), new c(116418474, 1914138554), new c(174292421, 2731055270), new c(289380356, 3203993006), new c(460393269, 320620315), new c(685471733, 587496836), new c(852142971, 1086792851), new c(1017036298, 365543100), new c(1126000580, 2618297676), new c(1288033470, 3409855158), new c(1501505948, 4234509866), new c(1607167915, 987167468), new c(1816402316, 1246189591)];

            function pr(r, n, e) {
                var t, o, i, a = [],
                    c = [],
                    s = [],
                    f = [];
                for (o = 0; o < 8; o++) a[o] = s[o] = x(r, 8 * o);
                for (var u = 0; e >= 128;) {
                    for (o = 0; o < 16; o++) f[o] = x(n, 8 * o + u);
                    for (o = 0; o < 80; o++) {
                        for (i = 0; i < 8; i++) c[i] = s[i];
                        for (t = ar(s[7], wr(s[4]), ur(s[4], s[5], s[6]), gr[o], f[o % 16]), c[7] = ar(t, hr(s[0]), lr(s[0], s[1], s[2])), c[3] = ar(c[3], t), i = 0; i < 8; i++) s[(i + 1) % 8] = c[i];
                        if (o % 16 == 15)
                            for (i = 0; i < 16; i++) f[i] = ar(f[i], f[(i + 9) % 16], yr(f[(i + 1) % 16]), br(f[(i + 14) % 16]))
                    }
                    for (o = 0; o < 8; o++) s[o] = ar(s[o], a[o]), a[o] = s[o];
                    u += 128, e -= 128
                }
                for (o = 0; o < 8; o++) _(r, 8 * o, a[o]);
                return e
            }
            var dr = new Uint8Array([106, 9, 230, 103, 243, 188, 201, 8, 187, 103, 174, 133, 132, 202, 167, 59, 60, 110, 243, 114, 254, 148, 248, 43, 165, 79, 245, 58, 95, 29, 54, 241, 81, 14, 82, 127, 173, 230, 130, 209, 155, 5, 104, 140, 43, 62, 108, 31, 31, 131, 217, 171, 251, 65, 189, 107, 91, 224, 205, 25, 19, 126, 33, 121]);

            function vr(r, n, e) {
                var t, o = new Uint8Array(64),
                    i = new Uint8Array(256),
                    a = e;
                for (t = 0; t < 64; t++) o[t] = dr[t];
                for (pr(o, n, e), e %= 128, t = 0; t < 256; t++) i[t] = 0;
                for (t = 0; t < e; t++) i[t] = n[a - e + t];
                for (i[e] = 128, i[(e = 256 - 128 * (e < 112 ? 1 : 0)) - 9] = 0, _(i, e - 8, new c(a / 536870912 | 0, a << 3)), pr(o, i, e), t = 0; t < 64; t++) r[t] = o[t];
                return 0
            }

            function Ar(r, n) {
                var e = s(),
                    t = s(),
                    o = s(),
                    i = s(),
                    a = s(),
                    c = s(),
                    f = s(),
                    u = s(),
                    l = s();
                V(e, r[1], r[0]), V(l, n[1], n[0]), J(e, e, l), Z(t, r[0], r[1]), Z(l, n[0], n[1]), J(t, t, l), J(o, r[3], n[3]), J(o, o, g), J(i, r[2], n[2]), Z(i, i, i), V(a, t, e), V(c, i, o), Z(f, i, o), Z(u, t, e), J(r[0], a, c), J(r[1], u, f), J(r[2], f, c), J(r[3], a, u)
            }

            function Ur(r, n, e) {
                var t;
                for (t = 0; t < 4; t++) W(r[t], n[t], e)
            }

            function xr(r, n) {
                var e = s(),
                    t = s(),
                    o = s();
                Q(o, n[2]), J(e, n[0], o), J(t, n[1], o), $(r, t), r[31] ^= G(e) << 7
            }

            function kr(r, n, e) {
                var t, o;
                for (M(r[0], h), M(r[1], w), M(r[2], w), M(r[3], h), o = 255; o >= 0; --o) Ur(r, n, t = e[o / 8 | 0] >> (7 & o) & 1), Ar(n, r), Ar(r, r), Ur(r, n, t)
            }

            function _r(r, n) {
                var e = [s(), s(), s(), s()];
                M(e[0], p), M(e[1], d), M(e[2], w), J(e[3], p, d), kr(r, e, n)
            }

            function mr(r, n, e) {
                var a = new Uint8Array(64),
                    c = [s(), s(), s(), s()];
                e || f(n, 32);
                var u = t(64);
                return o(u, n), (a = i(u))[0] &= 248, a[31] &= 127, a[31] |= 64, _r(c, a), xr(r, c), 0
            }

            function Er(r) {
                var n = new Uint8Array(64),
                    e = [s(), s(), s(), s()],
                    a = new Uint8Array(32),
                    c = t(64);
                return o(c, r), (n = i(c))[0] &= 248, n[31] &= 127, n[31] |= 64, _r(e, n), xr(a, e), a
            }
            var Kr = new Float64Array([237, 211, 245, 92, 26, 99, 18, 88, 214, 156, 247, 162, 222, 249, 222, 20, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 16]);

            function Br(r, n) {
                var e, t, o, i;
                for (t = 63; t >= 32; --t) {
                    for (e = 0, o = t - 32, i = t - 12; o < i; ++o) n[o] += e - 16 * n[t] * Kr[o - (t - 32)], e = n[o] + 128 >> 8, n[o] -= 256 * e;
                    n[o] += e, n[t] = 0
                }
                for (e = 0, o = 0; o < 32; o++) n[o] += e - (n[31] >> 4) * Kr[o], e = n[o] >> 8, n[o] &= 255;
                for (o = 0; o < 32; o++) n[o] -= e * Kr[o];
                for (t = 0; t < 32; t++) n[t + 1] += n[t] >> 8, r[t] = 255 & n[t]
            }

            function Pr(r) {
                var n, e = new Float64Array(64);
                for (n = 0; n < 64; n++) e[n] = r[n];
                for (n = 0; n < 64; n++) r[n] = 0;
                Br(r, e)
            }

            function Tr(r, n, e, a) {
                var c, f, u = new Uint8Array(64),
                    l = new Uint8Array(64),
                    h = new Uint8Array(64),
                    w = new Float64Array(64),
                    y = [s(), s(), s(), s()],
                    b = Er(a),
                    g = t(64, null);
                o(g, a), (u = i(g))[0] &= 248, u[31] &= 127, u[31] |= 64;
                var p = e + 64;
                for (c = 0; c < e; c++) r[64 + c] = n[c];
                for (c = 0; c < 32; c++) r[32 + c] = u[32 + c];
                for (g = t(64, null), o(g, r.subarray(32)), Pr(h = i(g)), _r(y, h), xr(r, y), c = 32; c < 64; c++) r[c] = b[c - 32];
                for (g = t(64, null), o(g, r), Pr(l = i(g)), c = 0; c < 64; c++) w[c] = 0;
                for (c = 0; c < 32; c++) w[c] = h[c];
                for (c = 0; c < 32; c++)
                    for (f = 0; f < 32; f++) w[c + f] += l[c] * u[f];
                return Br(r.subarray(32), w), p
            }

            function Sr(r, n) {
                var e = s(),
                    t = s(),
                    o = s(),
                    i = s(),
                    a = s(),
                    c = s(),
                    f = s();
                return M(r[2], w), q(r[1], n), X(o, r[1]), J(i, o, b), V(o, o, r[2]), Z(i, r[2], i), X(a, i), X(c, a), J(f, c, a), J(e, f, o), J(e, e, i),
                    function(r, n) {
                        var e, t = s();
                        for (e = 0; e < 16; e++) t[e] = n[e];
                        for (e = 250; e >= 0; e--) X(t, t), 1 !== e && J(t, t, n);
                        for (e = 0; e < 16; e++) r[e] = t[e]
                    }(e, e), J(e, e, o), J(e, e, i), J(e, e, i), J(r[0], e, i), X(t, r[0]), J(t, t, i), D(t, o) && J(r[0], r[0], v), X(t, r[0]), J(t, t, i), D(t, o) ? -1 : (G(r[0]) === n[31] >> 7 && V(r[0], h, r[0]), J(r[3], r[0], r[1]), 0)
            }

            function Ir(r, n, e, a) {
                var c, f = new Uint8Array(32),
                    u = new Uint8Array(64),
                    l = [s(), s(), s(), s()],
                    h = [s(), s(), s(), s()];
                if (-1, e < 64) return -1;
                if (Sr(h, a)) return -1;
                for (c = 0; c < e; c++) r[c] = n[c];
                for (c = 0; c < 32; c++) r[c + 32] = a[c];
                if (context = t(64, null), o(context, r), Pr(u = i(context)), kr(l, h, u), _r(h, n.subarray(32)), Ar(l, h), xr(f, l), e -= 64, K(n, 0, f, 0)) {
                    for (c = 0; c < e; c++) r[c] = 0;
                    return -1
                }
                for (c = 0; c < e; c++) r[c] = n[c + 64];
                return e
            }

            function Or(r, n) {
                if (32 !== r.length) throw new Error("bad key size");
                if (24 !== n.length) throw new Error("bad nonce size")
            }

            function Nr() {
                for (var r = 0; r < arguments.length; r++)
                    if (!(arguments[r] instanceof Uint8Array)) throw new TypeError("unexpected type, use Uint8Array")
            }

            function Rr(r) {
                for (var n = 0; n < r.length; n++) r[n] = 0
            }
            a.lowlevel = {
                    crypto_core_hsalsa20: T,
                    crypto_stream_xor: R,
                    crypto_stream: N,
                    crypto_stream_salsa20_xor: I,
                    crypto_stream_salsa20: O,
                    crypto_onetimeauth: L,
                    crypto_onetimeauth_verify: Y,
                    crypto_verify_16: E,
                    crypto_verify_32: K,
                    crypto_secretbox: H,
                    crypto_secretbox_open: j,
                    crypto_scalarmult: rr,
                    crypto_scalarmult_base: nr,
                    crypto_box_beforenm: tr,
                    crypto_box_afternm: or,
                    crypto_box: function(r, n, e, t, o, i) {
                        var a = new Uint8Array(32);
                        return tr(a, o, i), or(r, n, e, t, a)
                    },
                    crypto_box_open: function(r, n, e, t, o, i) {
                        var a = new Uint8Array(32);
                        return tr(a, o, i), ir(r, n, e, t, a)
                    },
                    crypto_box_keypair: er,
                    crypto_hash: vr,
                    crypto_sign: Tr,
                    crypto_sign_keypair: mr,
                    crypto_sign_open: Ir,
                    crypto_secretbox_KEYBYTES: 32,
                    crypto_secretbox_NONCEBYTES: 24,
                    crypto_secretbox_ZEROBYTES: 32,
                    crypto_secretbox_BOXZEROBYTES: 16,
                    crypto_scalarmult_BYTES: 32,
                    crypto_scalarmult_SCALARBYTES: 32,
                    crypto_box_PUBLICKEYBYTES: 32,
                    crypto_box_SECRETKEYBYTES: 32,
                    crypto_box_BEFORENMBYTES: 32,
                    crypto_box_NONCEBYTES: 24,
                    crypto_box_ZEROBYTES: 32,
                    crypto_box_BOXZEROBYTES: 16,
                    crypto_sign_BYTES: 64,
                    crypto_sign_PUBLICKEYBYTES: 32,
                    crypto_sign_SECRETKEYBYTES: 32,
                    crypto_sign_SEEDBYTES: 32,
                    crypto_hash_BYTES: 64
                }, a.randomBytes = function(r) {
                    var n = new Uint8Array(r);
                    return f(n, r), n
                }, a.secretbox = function(r, n, e) {
                    Nr(r, n, e), Or(e, n);
                    for (var t = new Uint8Array(32 + r.length), o = new Uint8Array(t.length), i = 0; i < r.length; i++) t[i + 32] = r[i];
                    return H(o, t, t.length, n, e), o.subarray(16)
                }, a.secretbox.open = function(r, n, e) {
                    Nr(r, n, e), Or(e, n);
                    for (var t = new Uint8Array(16 + r.length), o = new Uint8Array(t.length), i = 0; i < r.length; i++) t[i + 16] = r[i];
                    return t.length < 32 || 0 !== j(o, t, t.length, n, e) ? null : o.subarray(32)
                }, a.secretbox.keyLength = 32, a.secretbox.nonceLength = 24, a.secretbox.overheadLength = 16, a.scalarMult = function(r, n) {
                    if (Nr(r, n), 32 !== r.length) throw new Error("bad n size");
                    if (32 !== n.length) throw new Error("bad p size");
                    var e = new Uint8Array(32);
                    return rr(e, r, n), e
                }, a.scalarMult.base = function(r) {
                    if (Nr(r), 32 !== r.length) throw new Error("bad n size");
                    var n = new Uint8Array(32);
                    return nr(n, r), n
                }, a.scalarMult.scalarLength = 32, a.scalarMult.groupElementLength = 32, a.box = function(r, n, e, t) {
                    var o = a.box.before(e, t);
                    return a.secretbox(r, n, o)
                }, a.box.before = function(r, n) {
                    Nr(r, n),
                        function(r, n) {
                            if (32 !== r.length) throw new Error("bad public key size");
                            if (32 !== n.length) throw new Error("bad secret key size")
                        }(r, n);
                    var e = new Uint8Array(32);
                    return tr(e, r, n), e
                }, a.box.after = a.secretbox, a.box.open = function(r, n, e, t) {
                    var o = a.box.before(e, t);
                    return a.secretbox.open(r, n, o)
                }, a.box.open.after = a.secretbox.open, a.box.keyPair = function() {
                    var r = new Uint8Array(32),
                        n = new Uint8Array(32);
                    return er(r, n), {
                        publicKey: r,
                        secretKey: n
                    }
                }, a.box.keyPair.fromSecretKey = function(r) {
                    if (Nr(r), 32 !== r.length) throw new Error("bad secret key size");
                    var n = new Uint8Array(32);
                    return nr(n, r), {
                        publicKey: n,
                        secretKey: new Uint8Array(r)
                    }
                }, a.box.publicKeyLength = 32, a.box.secretKeyLength = 32, a.box.sharedKeyLength = 32, a.box.nonceLength = 24, a.box.overheadLength = a.secretbox.overheadLength, a.sign = function(r, n) {
                    if (Nr(r, n), 32 !== n.length) throw new Error("bad secret key size");
                    var e = new Uint8Array(64 + r.length);
                    return Tr(e, r, r.length, n), e
                }, a.sign.open = function(r, n) {
                    if (Nr(r, n), 32 !== n.length) throw new Error("bad public key size");
                    var e = new Uint8Array(r.length),
                        t = Ir(e, r, r.length, n);
                    if (t < 0) return null;
                    for (var o = new Uint8Array(t), i = 0; i < o.length; i++) o[i] = e[i];
                    return o
                }, a.sign.detached = function(r, n) {
                    for (var e = a.sign(r, n), t = new Uint8Array(64), o = 0; o < t.length; o++) t[o] = e[o];
                    return t
                }, a.sign.detached.verify = function(r, n, e) {
                    if (Nr(r, n, e), 64 !== n.length) throw new Error("bad signature size");
                    if (32 !== e.length) throw new Error("bad public key size");
                    var t, o = new Uint8Array(64 + r.length),
                        i = new Uint8Array(64 + r.length);
                    for (t = 0; t < 64; t++) o[t] = n[t];
                    for (t = 0; t < r.length; t++) o[t + 64] = r[t];
                    return Ir(i, o, o.length, e) >= 0
                }, a.sign.keyPair = function() {
                    var r = new Uint8Array(32),
                        n = new Uint8Array(32);
                    return mr(r, n), {
                        publicKey: r,
                        secretKey: n
                    }
                }, a.sign.keyPair.fromSecretKey = function(r) {
                    if (Nr(r), 32 !== r.length) throw new Error("bad secret key size");
                    new Uint8Array(32);
                    return {
                        publicKey: Er(r),
                        secretKey: new Uint8Array(r)
                    }
                }, a.sign.keyPair.fromSeed = function(r) {
                    if (Nr(r), 32 !== r.length) throw new Error("bad seed size");
                    for (var n = new Uint8Array(32), e = new Uint8Array(32), t = 0; t < 32; t++) e[t] = r[t];
                    return mr(n, e, !0), {
                        publicKey: n,
                        secretKey: e
                    }
                }, a.sign.publicKeyLength = 32, a.sign.secretKeyLength = 32, a.sign.seedLength = 32, a.sign.signatureLength = 64, a.hash = function(r) {
                    Nr(r);
                    var n = new Uint8Array(64);
                    return vr(n, r, r.length), n
                }, a.hash.hashLength = 64, a.verify = function(r, n) {
                    return Nr(r, n), 0 !== r.length && 0 !== n.length && (r.length === n.length && 0 === m(r, 0, n, 0, r.length))
                }, a.setPRNG = function(r) {
                    f = r
                },
                function() {
                    var r = "undefined" != typeof self ? self.crypto || self.msCrypto : null;
                    if (r && r.getRandomValues) {
                        a.setPRNG((function(n, e) {
                            var t, o = new Uint8Array(e);
                            for (t = 0; t < e; t += 65536) r.getRandomValues(o.subarray(t, t + Math.min(e - t, 65536)));
                            for (t = 0; t < e; t++) n[t] = o[t];
                            Rr(o)
                        }))
                    } else(r = e(24)) && r.randomBytes && a.setPRNG((function(n, e) {
                        var t, o = r.randomBytes(e);
                        for (t = 0; t < e; t++) n[t] = o[t];
                        Rr(o)
                    }))
                }(), r.exports = a
        },
        7304: function(r, n) {
            function e(r, n, e) {
                var t = r[n] + r[e],
                    o = r[n + 1] + r[e + 1];
                t >= 4294967296 && o++, r[n] = t, r[n + 1] = o
            }

            function t(r, n, e, t) {
                var o = r[n] + e;
                e < 0 && (o += 4294967296);
                var i = r[n + 1] + t;
                o >= 4294967296 && i++, r[n] = o, r[n + 1] = i
            }

            function o(r, n) {
                return r[n] ^ r[n + 1] << 8 ^ r[n + 2] << 16 ^ r[n + 3] << 24
            }

            function i(r, n, o, i, a, c) {
                var u = f[a],
                    l = f[a + 1],
                    h = f[c],
                    w = f[c + 1];
                e(s, r, n), t(s, r, u, l);
                var y = s[i] ^ s[r],
                    b = s[i + 1] ^ s[r + 1];
                s[i] = b, s[i + 1] = y, e(s, o, i), y = s[n] ^ s[o], b = s[n + 1] ^ s[o + 1], s[n] = y >>> 24 ^ b << 8, s[n + 1] = b >>> 24 ^ y << 8, e(s, r, n), t(s, r, h, w), y = s[i] ^ s[r], b = s[i + 1] ^ s[r + 1], s[i] = y >>> 16 ^ b << 16, s[i + 1] = b >>> 16 ^ y << 16, e(s, o, i), y = s[n] ^ s[o], b = s[n + 1] ^ s[o + 1], s[n] = b >>> 31 ^ y << 1, s[n + 1] = y >>> 31 ^ b << 1
            }
            var a = new Uint32Array([4089235720, 1779033703, 2227873595, 3144134277, 4271175723, 1013904242, 1595750129, 2773480762, 2917565137, 1359893119, 725511199, 2600822924, 4215389547, 528734635, 327033209, 1541459225]),
                c = new Uint8Array([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 14, 10, 4, 8, 9, 15, 13, 6, 1, 12, 0, 2, 11, 7, 5, 3, 11, 8, 12, 0, 5, 2, 15, 13, 10, 14, 3, 6, 7, 1, 9, 4, 7, 9, 3, 1, 13, 12, 11, 14, 2, 6, 5, 10, 4, 0, 15, 8, 9, 0, 5, 7, 2, 4, 10, 15, 14, 1, 11, 12, 6, 8, 3, 13, 2, 12, 6, 10, 0, 11, 8, 3, 4, 13, 7, 5, 15, 14, 1, 9, 12, 5, 1, 15, 14, 13, 4, 10, 0, 7, 6, 3, 9, 2, 8, 11, 13, 11, 7, 14, 12, 1, 3, 9, 5, 0, 15, 4, 8, 6, 2, 10, 6, 15, 14, 9, 11, 3, 0, 8, 12, 2, 13, 7, 1, 4, 10, 5, 10, 2, 8, 4, 7, 6, 1, 5, 15, 11, 9, 14, 3, 12, 13, 0, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 14, 10, 4, 8, 9, 15, 13, 6, 1, 12, 0, 2, 11, 7, 5, 3].map((function(r) {
                    return 2 * r
                }))),
                s = new Uint32Array(32),
                f = new Uint32Array(32);

            function u(r, n) {
                var e = 0;
                for (e = 0; e < 16; e++) s[e] = r.h[e], s[e + 16] = a[e];
                for (s[24] = s[24] ^ r.t, s[25] = s[25] ^ r.t / 4294967296, n && (s[28] = ~s[28], s[29] = ~s[29]), e = 0; e < 32; e++) f[e] = o(r.b, 4 * e);
                for (e = 0; e < 12; e++) i(0, 8, 16, 24, c[16 * e + 0], c[16 * e + 1]), i(2, 10, 18, 26, c[16 * e + 2], c[16 * e + 3]), i(4, 12, 20, 28, c[16 * e + 4], c[16 * e + 5]), i(6, 14, 22, 30, c[16 * e + 6], c[16 * e + 7]), i(0, 10, 20, 30, c[16 * e + 8], c[16 * e + 9]), i(2, 12, 22, 24, c[16 * e + 10], c[16 * e + 11]), i(4, 14, 16, 26, c[16 * e + 12], c[16 * e + 13]), i(6, 8, 18, 28, c[16 * e + 14], c[16 * e + 15]);
                for (e = 0; e < 16; e++) r.h[e] = r.h[e] ^ s[e] ^ s[e + 16]
            }

            function l(r, n) {
                if (0 === r || r > 64) throw new Error("Illegal output length, expected 0 < length <= 64");
                if (n && n.length > 64) throw new Error("Illegal key, expected Uint8Array with 0 < length <= 64");
                for (var e = {
                        b: new Uint8Array(128),
                        h: new Uint32Array(16),
                        t: 0,
                        c: 0,
                        outlen: r
                    }, t = 0; t < 16; t++) e.h[t] = a[t];
                var o = n ? n.length : 0;
                return e.h[0] ^= 16842752 ^ o << 8 ^ r, n && (h(e, n), e.c = 128), e
            }

            function h(r, n) {
                for (var e = 0; e < n.length; e++) 128 === r.c && (r.t += r.c, u(r, !1), r.c = 0), r.b[r.c++] = n[e]
            }

            function w(r) {
                for (r.t += r.c; r.c < 128;) r.b[r.c++] = 0;
                u(r, !0);
                for (var n = new Uint8Array(r.outlen), e = 0; e < r.outlen; e++) n[e] = r.h[e >> 2] >> 8 * (3 & e);
                return n
            }

            function y(r, n, e) {
                e = e || 64, r = function(r) {
                    if (!(r instanceof Uint8Array)) throw new Error("Input must be an string, Buffer or Uint8Array");
                    return r
                }(r);
                var t = l(e, n);
                return h(t, r), w(t)
            }
            r.exports = {
                blake2b: y,
                blake2bInit: l,
                blake2bUpdate: h,
                blake2bFinal: w
            }
        },
        9608: function(r, n, e) {
            const t = e(9609),
                o = e(9610);
            r.exports = {
                blake2b: t.blake2b,
                blake2bHex: t.blake2bHex,
                blake2bInit: t.blake2bInit,
                blake2bUpdate: t.blake2bUpdate,
                blake2bFinal: t.blake2bFinal,
                blake2s: o.blake2s,
                blake2sHex: o.blake2sHex,
                blake2sInit: o.blake2sInit,
                blake2sUpdate: o.blake2sUpdate,
                blake2sFinal: o.blake2sFinal
            }
        },
        9609: function(r, n, e) {
            const t = e(7302);

            function o(r, n, e) {
                const t = r[n] + r[e];
                let o = r[n + 1] + r[e + 1];
                t >= 4294967296 && o++, r[n] = t, r[n + 1] = o
            }

            function i(r, n, e, t) {
                let o = r[n] + e;
                e < 0 && (o += 4294967296);
                let i = r[n + 1] + t;
                o >= 4294967296 && i++, r[n] = o, r[n + 1] = i
            }

            function a(r, n) {
                return r[n] ^ r[n + 1] << 8 ^ r[n + 2] << 16 ^ r[n + 3] << 24
            }

            function c(r, n, e, t, a, c) {
                const s = l[a],
                    f = l[a + 1],
                    h = l[c],
                    w = l[c + 1];
                o(u, r, n), i(u, r, s, f);
                let y = u[t] ^ u[r],
                    b = u[t + 1] ^ u[r + 1];
                u[t] = b, u[t + 1] = y, o(u, e, t), y = u[n] ^ u[e], b = u[n + 1] ^ u[e + 1], u[n] = y >>> 24 ^ b << 8, u[n + 1] = b >>> 24 ^ y << 8, o(u, r, n), i(u, r, h, w), y = u[t] ^ u[r], b = u[t + 1] ^ u[r + 1], u[t] = y >>> 16 ^ b << 16, u[t + 1] = b >>> 16 ^ y << 16, o(u, e, t), y = u[n] ^ u[e], b = u[n + 1] ^ u[e + 1], u[n] = b >>> 31 ^ y << 1, u[n + 1] = y >>> 31 ^ b << 1
            }
            const s = new Uint32Array([4089235720, 1779033703, 2227873595, 3144134277, 4271175723, 1013904242, 1595750129, 2773480762, 2917565137, 1359893119, 725511199, 2600822924, 4215389547, 528734635, 327033209, 1541459225]),
                f = new Uint8Array([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 14, 10, 4, 8, 9, 15, 13, 6, 1, 12, 0, 2, 11, 7, 5, 3, 11, 8, 12, 0, 5, 2, 15, 13, 10, 14, 3, 6, 7, 1, 9, 4, 7, 9, 3, 1, 13, 12, 11, 14, 2, 6, 5, 10, 4, 0, 15, 8, 9, 0, 5, 7, 2, 4, 10, 15, 14, 1, 11, 12, 6, 8, 3, 13, 2, 12, 6, 10, 0, 11, 8, 3, 4, 13, 7, 5, 15, 14, 1, 9, 12, 5, 1, 15, 14, 13, 4, 10, 0, 7, 6, 3, 9, 2, 8, 11, 13, 11, 7, 14, 12, 1, 3, 9, 5, 0, 15, 4, 8, 6, 2, 10, 6, 15, 14, 9, 11, 3, 0, 8, 12, 2, 13, 7, 1, 4, 10, 5, 10, 2, 8, 4, 7, 6, 1, 5, 15, 11, 9, 14, 3, 12, 13, 0, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 14, 10, 4, 8, 9, 15, 13, 6, 1, 12, 0, 2, 11, 7, 5, 3].map((function(r) {
                    return 2 * r
                }))),
                u = new Uint32Array(32),
                l = new Uint32Array(32);

            function h(r, n) {
                let e = 0;
                for (e = 0; e < 16; e++) u[e] = r.h[e], u[e + 16] = s[e];
                for (u[24] = u[24] ^ r.t, u[25] = u[25] ^ r.t / 4294967296, n && (u[28] = ~u[28], u[29] = ~u[29]), e = 0; e < 32; e++) l[e] = a(r.b, 4 * e);
                for (e = 0; e < 12; e++) c(0, 8, 16, 24, f[16 * e + 0], f[16 * e + 1]), c(2, 10, 18, 26, f[16 * e + 2], f[16 * e + 3]), c(4, 12, 20, 28, f[16 * e + 4], f[16 * e + 5]), c(6, 14, 22, 30, f[16 * e + 6], f[16 * e + 7]), c(0, 10, 20, 30, f[16 * e + 8], f[16 * e + 9]), c(2, 12, 22, 24, f[16 * e + 10], f[16 * e + 11]), c(4, 14, 16, 26, f[16 * e + 12], f[16 * e + 13]), c(6, 8, 18, 28, f[16 * e + 14], f[16 * e + 15]);
                for (e = 0; e < 16; e++) r.h[e] = r.h[e] ^ u[e] ^ u[e + 16]
            }

            function w(r, n) {
                if (0 === r || r > 64) throw new Error("Illegal output length, expected 0 < length <= 64");
                if (n && n.length > 64) throw new Error("Illegal key, expected Uint8Array with 0 < length <= 64");
                const e = {
                    b: new Uint8Array(128),
                    h: new Uint32Array(16),
                    t: 0,
                    c: 0,
                    outlen: r
                };
                for (let r = 0; r < 16; r++) e.h[r] = s[r];
                const t = n ? n.length : 0;
                return e.h[0] ^= 16842752 ^ t << 8 ^ r, n && (y(e, n), e.c = 128), e
            }

            function y(r, n) {
                for (let e = 0; e < n.length; e++) 128 === r.c && (r.t += r.c, h(r, !1), r.c = 0), r.b[r.c++] = n[e]
            }

            function b(r) {
                for (r.t += r.c; r.c < 128;) r.b[r.c++] = 0;
                h(r, !0);
                const n = new Uint8Array(r.outlen);
                for (let e = 0; e < r.outlen; e++) n[e] = r.h[e >> 2] >> 8 * (3 & e);
                return n
            }

            function g(r, n, e) {
                e = e || 64, r = t.normalizeInput(r);
                const o = w(e, n);
                return y(o, r), b(o)
            }
            r.exports = {
                blake2b: g,
                blake2bHex: function(r, n, e) {
                    const o = g(r, n, e);
                    return t.toHex(o)
                },
                blake2bInit: w,
                blake2bUpdate: y,
                blake2bFinal: b
            }
        },
        9610: function(r, n, e) {
            const t = e(7302);

            function o(r, n) {
                return r[n] ^ r[n + 1] << 8 ^ r[n + 2] << 16 ^ r[n + 3] << 24
            }

            function i(r, n, e, t, o, i) {
                f[r] = f[r] + f[n] + o, f[t] = a(f[t] ^ f[r], 16), f[e] = f[e] + f[t], f[n] = a(f[n] ^ f[e], 12), f[r] = f[r] + f[n] + i, f[t] = a(f[t] ^ f[r], 8), f[e] = f[e] + f[t], f[n] = a(f[n] ^ f[e], 7)
            }

            function a(r, n) {
                return r >>> n ^ r << 32 - n
            }
            const c = new Uint32Array([1779033703, 3144134277, 1013904242, 2773480762, 1359893119, 2600822924, 528734635, 1541459225]),
                s = new Uint8Array([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 14, 10, 4, 8, 9, 15, 13, 6, 1, 12, 0, 2, 11, 7, 5, 3, 11, 8, 12, 0, 5, 2, 15, 13, 10, 14, 3, 6, 7, 1, 9, 4, 7, 9, 3, 1, 13, 12, 11, 14, 2, 6, 5, 10, 4, 0, 15, 8, 9, 0, 5, 7, 2, 4, 10, 15, 14, 1, 11, 12, 6, 8, 3, 13, 2, 12, 6, 10, 0, 11, 8, 3, 4, 13, 7, 5, 15, 14, 1, 9, 12, 5, 1, 15, 14, 13, 4, 10, 0, 7, 6, 3, 9, 2, 8, 11, 13, 11, 7, 14, 12, 1, 3, 9, 5, 0, 15, 4, 8, 6, 2, 10, 6, 15, 14, 9, 11, 3, 0, 8, 12, 2, 13, 7, 1, 4, 10, 5, 10, 2, 8, 4, 7, 6, 1, 5, 15, 11, 9, 14, 3, 12, 13, 0]),
                f = new Uint32Array(16),
                u = new Uint32Array(16);

            function l(r, n) {
                let e = 0;
                for (e = 0; e < 8; e++) f[e] = r.h[e], f[e + 8] = c[e];
                for (f[12] ^= r.t, f[13] ^= r.t / 4294967296, n && (f[14] = ~f[14]), e = 0; e < 16; e++) u[e] = o(r.b, 4 * e);
                for (e = 0; e < 10; e++) i(0, 4, 8, 12, u[s[16 * e + 0]], u[s[16 * e + 1]]), i(1, 5, 9, 13, u[s[16 * e + 2]], u[s[16 * e + 3]]), i(2, 6, 10, 14, u[s[16 * e + 4]], u[s[16 * e + 5]]), i(3, 7, 11, 15, u[s[16 * e + 6]], u[s[16 * e + 7]]), i(0, 5, 10, 15, u[s[16 * e + 8]], u[s[16 * e + 9]]), i(1, 6, 11, 12, u[s[16 * e + 10]], u[s[16 * e + 11]]), i(2, 7, 8, 13, u[s[16 * e + 12]], u[s[16 * e + 13]]), i(3, 4, 9, 14, u[s[16 * e + 14]], u[s[16 * e + 15]]);
                for (e = 0; e < 8; e++) r.h[e] ^= f[e] ^ f[e + 8]
            }

            function h(r, n) {
                if (!(r > 0 && r <= 32)) throw new Error("Incorrect output length, should be in [1, 32]");
                const e = n ? n.length : 0;
                if (n && !(e > 0 && e <= 32)) throw new Error("Incorrect key length, should be in [1, 32]");
                const t = {
                    h: new Uint32Array(c),
                    b: new Uint8Array(64),
                    c: 0,
                    t: 0,
                    outlen: r
                };
                return t.h[0] ^= 16842752 ^ e << 8 ^ r, e > 0 && (w(t, n), t.c = 64), t
            }

            function w(r, n) {
                for (let e = 0; e < n.length; e++) 64 === r.c && (r.t += r.c, l(r, !1), r.c = 0), r.b[r.c++] = n[e]
            }

            function y(r) {
                for (r.t += r.c; r.c < 64;) r.b[r.c++] = 0;
                l(r, !0);
                const n = new Uint8Array(r.outlen);
                for (let e = 0; e < r.outlen; e++) n[e] = r.h[e >> 2] >> 8 * (3 & e) & 255;
                return n
            }

            function b(r, n, e) {
                e = e || 32, r = t.normalizeInput(r);
                const o = h(e, n);
                return w(o, r), y(o)
            }
            r.exports = {
                blake2s: b,
                blake2sHex: function(r, n, e) {
                    const o = b(r, n, e);
                    return t.toHex(o)
                },
                blake2sInit: h,
                blake2sUpdate: w,
                blake2sFinal: y
            }
        },
        9611: function(r, n, e) {
            const {
                blake2b: t,
                blake2bInit: o,
                blake2bUpdate: i,
                blake2bFinal: a
            } = e(7304), c = e(7303);

            function s(r) {
                var n = r.length,
                    e = new Uint8Array(2 * n);
                for (let t = 0; t < n; t++) e[2 * t] = r[t] / 16 | 0, e[2 * t + 1] = r[t] % 16;
                return e
            }

            function f(r) {
                var n = r.length / 2,
                    e = new Uint8Array(n);
                for (let t = 0; t < n; t++) e[t] = 16 * r[2 * t] + r[2 * t + 1];
                return e
            }

            function u(r) {
                var n = r.length / 5 * 4,
                    e = new Uint8Array(n);
                for (let t = 1; t <= n; t++) {
                    let o, i = t - 1,
                        a = t % 4,
                        c = i + (t - a) / 4,
                        s = r[c] << a;
                    o = (n - t) % 4 == 0 ? r[c - 1] << 4 : r[c + 1] >> 4 - a, e[i] = (o + s) % 32
                }
                return e
            }

            function l(r) {
                var n = r.length / 4 * 5,
                    e = new Uint8Array(n);
                for (let t = 1; t <= n; t++) {
                    let n = t - 1,
                        o = t % 5,
                        i = n - (t - o) / 5,
                        a = r[i - 1] << 5 - o,
                        c = r[i] >> o;
                    e[n] = (c + a) % 16
                }
                return e
            }

            function h(r) {
                var n = n = "13456789abcdefghijkmnopqrstuwxyz".split(""),
                    e = r.length,
                    t = r.split(""),
                    o = new Uint8Array(e);
                for (let r = 0; r < e; r++) o[r] = n.indexOf(t[r]);
                return o
            }

            function w(r) {
                var n = n = "13456789abcdefghijkmnopqrstuwxyz".split(""),
                    e = "";
                for (let t = 0; t < r.length; t++) e += n[r[t]];
                return e
            }

            function y(r) {
                var n = r.length,
                    e = new Uint8Array(n);
                for (let t = 0; t < n; t++) e[t] = parseInt(r.substr(t, 1), 16);
                return e
            }
            n.keyFromAccount = function(r) {
                if (/^xrb_[13][13456789abcdefghijkmnopqrstuwxyz]{59}$/.test(r)) {
                    var n = r.substring(4, 64),
                        e = function(r) {
                            var n = r.length - 1,
                                e = new Uint8Array(n);
                            for (let t = 0; t < n; t++) e[t] = r[t + 1];
                            return e
                        }(l(h(n.substring(0, 52)))),
                        o = l(h(n.substring(52, 60))),
                        i = f(e);
                    if (function(r, n) {
                            for (let e = 0; e < r.length; e++)
                                if (r[e] !== n[e]) return !1;
                            return !0
                        }(o, s(t(i, null, 5).reverse()))) return function(r) {
                        var n = "";
                        for (let e = 0; e < r.length; e++) n += r[e].toString(16);
                        return n
                    }(e);
                    throw new Error("invalid_checksum")
                }
                throw new Error("invalid_account")
            }, n.accountFromKey = function(r) {
                var n = f(y(r)),
                    e = w(u(s(t(n, null, 5).reverse())));
                return "xrb_" + w(u(y("0" + r))) + e
            }, n.accountPair = function(r, e) {
                const t = o(32),
                    s = Buffer.alloc(4);
                if (s.writeInt32BE(e), "string" == typeof r && /^[A-Fa-f0-9]{64}$/.test(r)) r = Buffer.from(r, "hex");
                else if (!(r instanceof Buffer)) throw new Error("invalid_seed");
                i(t, r), i(t, s);
                const f = Buffer.from(a(t)),
                    u = Buffer.from(c.sign.keyPair.fromSecretKey(f).publicKey).toString("hex");
                return {
                    privateKey: f.toString("hex"),
                    publicKey: u,
                    address: n.accountFromKey(u)
                }
            }
        },
        9612: function(r, n, e) {
            "use strict";
            e.r(n);
            var t = e(2351),
                o = e.n(t),
                i = e(9613),
                a = e.n(i);
            n.default = function(r, n) {
                if (void 0 === n && (n = ["nano", "xrb"]), void 0 === r) throw Error("Address must be defined.");
                if ("string" != typeof r) throw TypeError("Address must be a string.");
                var e;
                if (Array.isArray(n)) {
                    if (n.some((function(r) {
                            return "string" != typeof r
                        }))) throw TypeError("Prefix must be a string or an array of strings.");
                    e = n
                } else {
                    if ("string" != typeof n) throw TypeError("Prefix must be a string or an array of strings.");
                    e = [n]
                }
                if (!new RegExp("^(" + e.join("|") + ")_[13]{1}[13456789abcdefghijkmnopqrstuwxyz]{59}$").test(r)) return !1;
                var t = r.slice(-8),
                    i = r.slice(r.indexOf("_") + 1, -8),
                    c = a.a.decode(i),
                    s = o.a.blake2b(c, null, 5).reverse();
                return t === a.a.encode(s)
            }
        },
        9613: function(r, n) {
            const e = "13456789abcdefghijkmnopqrstuwxyz";

            function t(r) {
                var n = e.indexOf(r);
                if (-1 === n) throw new Error("Invalid character found: " + r);
                return n
            }
            r.exports = {
                encode: function(r) {
                    if (r.constructor !== Uint8Array) throw new Error("View must be a Uint8Array!");
                    const n = r.length,
                        t = 8 * n % 5,
                        o = 0 === t ? 0 : 5 - t;
                    let i = 0,
                        a = "",
                        c = 0;
                    for (var s = 0; s < n; s++)
                        for (i = i << 8 | r[s], c += 8; c >= 5;) a += e[i >>> c + o - 5 & 31], c -= 5;
                    return c > 0 && (a += e[i << 5 - (c + o) & 31]), a
                },
                decode: function(r) {
                    if ("string" != typeof r) throw new Error("Input must be a string!");
                    var n = r.length;
                    const e = 5 * n % 8,
                        o = 0 === e ? 0 : 8 - e;
                    for (var i = 0, a = 0, c = 0, s = new Uint8Array(Math.ceil(5 * n / 8)), f = 0; f < n; f++) a = a << 5 | t(r[f]), (i += 5) >= 8 && (s[c++] = a >>> i + o - 8 & 255, i -= 8);
                    return i > 0 && (s[c++] = a << i + o - 8 & 255), 0 !== e && (s = s.slice(1)), s
                }
            }
        }
    }
]);