(window.webpackJsonp = window.webpackJsonp || []).push([
    [64], {
        1112: function(t, e, i) {
            const {
                BN: r,
                bytesToHex: n
            } = i(79);
            class BitString {
                constructor(t) {
                    this.array = Uint8Array.from({
                        length: Math.ceil(t / 8)
                    }, () => 0), this.cursor = 0, this.length = t
                }
                getFreeBits() {
                    return this.length - this.cursor
                }
                getUsedBits() {
                    return this.cursor
                }
                getUsedBytes() {
                    return Math.ceil(this.cursor / 8)
                }
                get(t) {
                    return (this.array[t / 8 | 0] & 1 << 7 - t % 8) > 0
                }
                checkRange(t) {
                    if (t > this.length) throw Error("BitString overflow")
                }
                on(t) {
                    this.checkRange(t), this.array[t / 8 | 0] |= 1 << 7 - t % 8
                }
                off(t) {
                    this.checkRange(t), this.array[t / 8 | 0] &= ~(1 << 7 - t % 8)
                }
                toggle(t) {
                    this.checkRange(t), this.array[t / 8 | 0] ^= 1 << 7 - t % 8
                }
                forEach(t) {
                    const e = this.cursor;
                    for (let i = 0; i < e; i++) t(this.get(i))
                }
                writeBit(t) {
                    t && t > 0 ? this.on(this.cursor) : this.off(this.cursor), this.cursor = this.cursor + 1
                }
                writeBitArray(t) {
                    for (let e = 0; e < t.length; e++) this.writeBit(t[e])
                }
                writeUint(t, e) {
                    if (t = new r(t), 0 == e || t.toString(2).length > e) {
                        if (0 == t) return;
                        throw Error("bitLength is too small for number, got number=" + t + ",bitLength=" + e)
                    }
                    const i = t.toString(2, e);
                    for (let t = 0; t < e; t++) this.writeBit(1 == i[t])
                }
                writeInt(t, e) {
                    if (t = new r(t), 1 == e) {
                        if (-1 == t) return void this.writeBit(!0);
                        if (0 == t) return void this.writeBit(!1);
                        throw Error("Bitlength is too small for number")
                    }
                    if (t.isNeg()) {
                        this.writeBit(!0);
                        const i = new r(2).pow(new r(e - 1));
                        this.writeUint(i.add(t), e - 1)
                    } else this.writeBit(!1), this.writeUint(t, e - 1)
                }
                writeUint8(t) {
                    this.writeUint(t, 8)
                }
                writeBytes(t) {
                    for (let e = 0; e < t.length; e++) this.writeUint8(t[e])
                }
                writeString(t) {
                    this.writeBytes((new TextEncoder).encode(t))
                }
                writeGrams(t) {
                    if (0 == t) this.writeUint(0, 4);
                    else {
                        t = new r(t);
                        const e = Math.ceil(t.toString(16).length / 2);
                        this.writeUint(e, 4), this.writeUint(t, 8 * e)
                    }
                }
                writeCoins(t) {
                    this.writeGrams(t)
                }
                writeAddress(t) {
                    null == t ? this.writeUint(0, 2) : (this.writeUint(2, 2), this.writeUint(0, 1), this.writeInt(t.wc, 8), this.writeBytes(t.hashPart))
                }
                writeBitString(t) {
                    t.forEach(t => {
                        this.writeBit(t)
                    })
                }
                clone() {
                    const t = new BitString(0);
                    return t.array = this.array.slice(0), t.length = this.length, t.cursor = this.cursor, t
                }
                toString() {
                    return this.toHex()
                }
                getTopUppedArray() {
                    const t = this.clone();
                    let e = 8 * Math.ceil(t.cursor / 8) - t.cursor;
                    if (e > 0)
                        for (e -= 1, t.writeBit(!0); e > 0;) e -= 1, t.writeBit(!1);
                    return t.array = t.array.slice(0, Math.ceil(t.cursor / 8)), t.array
                }
                toHex() {
                    if (this.cursor % 4 == 0) {
                        const t = n(this.array.slice(0, Math.ceil(this.cursor / 8))).toUpperCase();
                        return this.cursor % 8 == 0 ? t : t.substr(0, t.length - 1)
                    } {
                        const t = this.clone();
                        for (t.writeBit(1); t.cursor % 4 != 0;) t.writeBit(0);
                        return t.toHex().toUpperCase() + "_"
                    }
                }
                setTopUppedArray(t, e = !0) {
                    if (this.length = 8 * t.length, this.array = t, this.cursor = this.length, !e && this.length) {
                        let i = !1;
                        for (let t = 0; t < 7; t++)
                            if (this.cursor -= 1, this.get(this.cursor)) {
                                i = !0, this.off(this.cursor);
                                break
                            } if (!i) throw console.log(t, e), new Error("Incorrect TopUppedArray")
                    }
                }
            }
            t.exports = {
                BitString: BitString
            }
        },
        1113: function(t, e, i) {
            const {
                BN: r
            } = i(79);

            function n(t) {
                t.loadBits(512);
                if (698983191 !== t.loadUint(32).toNumber()) throw new Error("invalid walletId");
                const e = t.loadUint(32).toNumber(),
                    i = t.loadUint(32).toNumber();
                if (3 !== t.loadUint(8).toNumber()) throw new Error("invalid sendMode");
                let n = t.loadRef();
                if (n.loadBit()) throw Error("invalid internal header");
                if (!n.loadBit()) throw Error("invalid ihrDisabled");
                const s = n.loadBit();
                if (n.loadBit()) throw Error("invalid bounced");
                if (null !== n.loadAddress()) throw Error("invalid externalSourceAddress");
                const o = n.loadAddress(),
                    a = n.loadCoins();
                if (n.loadBit()) throw Error("invalid currencyCollection");
                if (!n.loadCoins().eq(new r(0))) throw new Error("invalid ihrFees");
                if (!n.loadCoins().eq(new r(0))) throw new Error("invalid fwdFees");
                if (!n.loadUint(64).eq(new r(0))) throw new Error("invalid createdLt");
                if (!n.loadUint(32).eq(new r(0))) throw new Error("invalid createdAt");
                n.loadBit() && n.loadRef();
                let l = null;
                if (n.getFreeBits() > 0 && (n.loadBit() && (n = n.loadRef()), n.getFreeBits() > 32)) {
                    const t = n.loadUint(32),
                        e = n.loadBits(n.getFreeBits());
                    l = t.eq(new r(0)) ? (new TextDecoder).decode(e) : ""
                }
                return {
                    toAddress: o,
                    value: a,
                    bounce: s,
                    seqno: i,
                    expireAt: e,
                    payload: l
                }
            }
            t.exports = {
                parseWalletV3TransferQuery: function(t) {
                    const e = t.beginParse();
                    if (2 !== e.loadUint(2).toNumber()) throw Error("invalid header");
                    if (null !== e.loadAddress()) throw Error("invalid externalSourceAddress");
                    const i = e.loadAddress();
                    if (!e.loadCoins().eq(new r(0))) throw new Error("invalid externalImportFee");
                    return e.loadBit() && e.loadBit() && e.loadRef(), {
                        fromAddress: i,
                        ...n(e.loadBit() ? e.loadRef() : e)
                    }
                },
                parseWalletV3TransferBody: n
            }
        },
        1120: function(t, e, i) {
            const {
                parseAddress: r
            } = i(181), {
                AdnlAddress: n,
                StorageBagId: s,
                BN: o,
                sha256: a,
                bytesToHex: l,
                bytesToBase64: h
            } = i(79), {
                Cell: c
            } = i(80), u = async t => {
                if (!t) return new o(0);
                const e = (new TextEncoder).encode(t),
                    i = new Uint8Array(await a(e));
                return new o(l(i), 16)
            }, d = (t, e, i) => {
                if (t.bits.array[0] !== e || t.bits.array[1] !== i) throw new Error("Invalid dns record value prefix");
                return t.bits.array = t.bits.array.slice(2), r(t)
            }, C = t => d(t, 159, 211), f = t => d(t, 186, 147), B = t => {
                if (173 !== t.bits.array[0] || 1 !== t.bits.array[1]) throw new Error("Invalid dns record value prefix");
                const e = t.bits.array.slice(2, 34);
                return new n(e)
            }, F = t => {
                if (116 !== t.bits.array[0] || 115 !== t.bits.array[1]) throw new Error("Invalid dns record value prefix");
                const e = t.bits.array.slice(2, 34);
                return new s(e)
            }, w = t => t ? 173 === t.bits.array[0] || 1 === t.bits.array[1] ? B(t) : F(t) : null, m = async (t, e, i, r, n) => {
                const s = 8 * i.length,
                    o = new c;
                o.bits.writeBytes(i);
                const a = await u(r),
                    l = await t.call2(e, "dnsresolve", [
                        ["tvm.Slice", h(await o.toBoc(!1))],
                        ["num", a.toString()]
                    ]);
                if (2 !== l.length) throw new Error("Invalid dnsresolve response");
                const d = l[0].toNumber();
                let B = l[1];
                if (B instanceof Array && 0 === B.length && (B = null), B && !B.bits) throw new Error("Invalid dnsresolve response");
                if (0 === d) return null;
                if (d % 8 != 0) throw new Error("domain split not at a component boundary");
                if (d > s) throw new Error("invalid response " + d + "/" + s);
                if (d === s) return "dns_next_resolver" === r ? B ? f(B) : null : "wallet" === r ? B ? C(B) : null : "site" === r ? B ? w(B) : null : "storage" === r ? B ? F(B) : null : B;
                if (B) {
                    const e = f(B);
                    return n ? "dns_next_resolver" === r ? e : null : await m(t, e.toString(), i.slice(d / 8), r, !1)
                }
                return null
            }, p = t => {
                if (!t || !t.length) throw new Error("empty domain");
                if ("." === t) return new Uint8Array([0]);
                t = t.toLowerCase();
                for (let e = 0; e < t.length; e++)
                    if (t.charCodeAt(e) <= 32) throw new Error("bytes in range 0..32 are not allowed in domain names");
                for (let e = 0; e < t.length; e++) {
                    const i = t.substring(e, e + 1);
                    for (let t = 127; t <= 159; t++)
                        if (i === String.fromCharCode(t)) throw new Error("bytes in range 127..159 are not allowed in domain names")
                }
                const e = t.split(".");
                e.forEach(t => {
                    if (!t.length) throw new Error("domain name cannot have an empty component")
                });
                let i = e.reverse().join("\0") + "\0";
                return i.length < 126 && (i = "\0" + i), (new TextEncoder).encode(i)
            };
            t.exports = {
                DNS_CATEGORY_NEXT_RESOLVER: "dns_next_resolver",
                DNS_CATEGORY_SITE: "site",
                DNS_CATEGORY_WALLET: "wallet",
                DNS_CATEGORY_STORAGE: "storage",
                categoryToBN: u,
                domainToBytes: p,
                createSmartContractAddressRecord: t => {
                    const e = new c;
                    return e.bits.writeUint(40915, 16), e.bits.writeAddress(t), e.bits.writeUint(0, 8), e
                },
                createAdnlAddressRecord: t => {
                    const e = new c;
                    return e.bits.writeUint(44289, 16), e.bits.writeBytes(t.bytes), e.bits.writeUint(0, 8), e
                },
                createNextResolverRecord: t => {
                    const e = new c;
                    return e.bits.writeUint(47763, 16), e.bits.writeAddress(t), e
                },
                parseSmartContractAddressRecord: C,
                parseAdnlAddressRecord: B,
                parseStorageBagIdRecord: F,
                parseSiteRecord: w,
                parseNextResolverRecord: f,
                createStorageBagIdRecord: t => {
                    const e = new c;
                    return e.bits.writeUint(29811, 16), e.bits.writeBytes(t.bytes), e
                },
                dnsResolve: async (t, e, i, r, n) => {
                    const s = p(i);
                    return m(t, e, s, r, n)
                }
            }
        },
        133: function(t, e, i) {
            const {
                Cell: r
            } = i(80), {
                Address: n,
                bytesToBase64: s,
                bytesToHex: o
            } = i(79);
            class Contract {
                constructor(t, e) {
                    this.provider = t, this.options = e, this.address = e.address ? new n(e.address) : null, e.wc || (e.wc = this.address ? this.address.wc : 0), this.methods = {}
                }
                async getAddress() {
                    return this.address || (this.address = (await this.createStateInit()).address), this.address
                }
                createCodeCell() {
                    if (!this.options.code) throw new Error("Contract: options.code is not defined");
                    return this.options.code
                }
                createDataCell() {
                    return new r
                }
                async createStateInit() {
                    const t = this.createCodeCell(),
                        e = this.createDataCell(),
                        i = Contract.createStateInit(t, e),
                        r = await i.hash();
                    return {
                        stateInit: i,
                        address: new n(this.options.wc + ":" + o(r)),
                        code: t,
                        data: e
                    }
                }
                static createStateInit(t, e, i = null, n = null, s = null) {
                    if (i) throw "Library in state init is not implemented";
                    if (n) throw "Split depth in state init is not implemented";
                    if (s) throw "Ticktock in state init is not implemented";
                    const o = new r;
                    return o.bits.writeBitArray([Boolean(n), Boolean(s), Boolean(t), Boolean(e), Boolean(i)]), t && o.refs.push(t), e && o.refs.push(e), i && o.refs.push(i), o
                }
                static createInternalMessageHeader(t, e = 0, i = !0, s = null, o = !1, a = null, l = null, h = 0, c = 0, u = 0, d = 0) {
                    const C = new r;
                    if (C.bits.writeBit(!1), C.bits.writeBit(i), null !== s ? C.bits.writeBit(s) : C.bits.writeBit(new n(t).isBounceable), C.bits.writeBit(o), C.bits.writeAddress(a ? new n(a) : null), C.bits.writeAddress(new n(t)), C.bits.writeGrams(e), l) throw "Currency collections are not implemented yet";
                    return C.bits.writeBit(Boolean(l)), C.bits.writeGrams(h), C.bits.writeGrams(c), C.bits.writeUint(u, 64), C.bits.writeUint(d, 32), C
                }
                static createExternalMessageHeader(t, e = null, i = 0) {
                    const s = new r;
                    return s.bits.writeUint(2, 2), s.bits.writeAddress(e ? new n(e) : null), s.bits.writeAddress(new n(t)), s.bits.writeGrams(i), s
                }
                static createCommonMsgInfo(t, e = null, i = null) {
                    const n = new r;
                    return n.writeCell(t), e ? (n.bits.writeBit(!0), n.bits.writeBit(!0), n.refs.push(e)) : n.bits.writeBit(!1), i ? n.bits.getFreeBits() >= i.bits.getUsedBits() ? (n.bits.writeBit(!1), n.writeCell(i)) : (n.bits.writeBit(!0), n.refs.push(i)) : n.bits.writeBit(!1), n
                }
                static createMethod(t, e) {
                    return {
                        getQuery: async () => (await e).message,
                        send: async () => {
                            const i = await e,
                                r = s(await i.message.toBoc(!1));
                            return t.sendBoc(r)
                        },
                        estimateFee: async () => {
                            const i = await e,
                                r = i.code ? {
                                    address: i.address.toString(!0, !0, !1),
                                    body: s(await i.body.toBoc(!1)),
                                    init_code: s(await i.code.toBoc(!1)),
                                    init_data: s(await i.data.toBoc(!1))
                                } : {
                                    address: i.address.toString(!0, !0, !0),
                                    body: s(await i.body.toBoc(!1))
                                };
                            return t.getEstimateFee(r)
                        }
                    }
                }
            }
            t.exports = {
                Contract: Contract
            }
        },
        181: function(t, e, i) {
            const {
                Address: r
            } = i(79), {
                Cell: n
            } = i(80), s = t => (new TextEncoder).encode(encodeURI(t)), o = t => (new TextDecoder).decode(t), a = (t, e, i) => {
                let r = BigInt(0);
                for (let n = 0; n < i; n++) r *= BigInt(2), r += BigInt(t.get(e + n));
                return r
            }, l = t => {
                let e = a(t.bits, 3, 8);
                e > BigInt(127) && (e -= BigInt(256));
                const i = a(t.bits, 11, 256);
                if (e.toString(10) + ":" + i.toString(16) == "0:0") return null;
                const n = e.toString(10) + ":" + i.toString(16).padStart(64, "0");
                return new r(n)
            };
            t.exports = {
                SNAKE_DATA_PREFIX: 0,
                CHUNK_DATA_PREFIX: 1,
                ONCHAIN_CONTENT_PREFIX: 0,
                OFFCHAIN_CONTENT_PREFIX: 1,
                parseAddress: l,
                serializeUri: s,
                parseUri: o,
                createOffchainUriCell: t => {
                    const e = new n;
                    return e.bits.writeUint(1, 8), e.bits.writeBytes(s(t)), e
                },
                parseOffchainUriCell: t => {
                    if (1 !== t.bits.array[0]) throw new Error("no OFFCHAIN_CONTENT_PREFIX");
                    let e = 0,
                        i = t;
                    for (; i;) e += i.bits.array.length, i = i.refs[0];
                    const r = new Uint8Array(e);
                    for (e = 0, i = t; i;) r.set(i.bits.array, e), e += i.bits.array.length, i = i.refs[0];
                    return o(r.slice(1))
                },
                getRoyaltyParams: async (t, e) => {
                    const i = await t.call2(e, "royalty_params"),
                        r = i[0].toNumber(),
                        n = i[1].toNumber();
                    return {
                        royalty: r / n,
                        royaltyBase: n,
                        royaltyFactor: r,
                        royaltyAddress: l(i[2])
                    }
                }
            }
        },
        1987: function(t, e, i) {
            const {
                BN: r,
                Address: n,
                bytesToHex: s
            } = i(79), {
                BitString: o
            } = i(1112);
            t.exports = {
                Slice: class Slice {
                    constructor(t, e, i) {
                        this.array = t, this.length = e, this.readCursor = 0, this.refs = i, this.refCursor = 0
                    }
                    getFreeBits() {
                        return this.length - this.readCursor
                    }
                    checkRange(t) {
                        if (t > this.length) throw Error("BitString overflow")
                    }
                    get(t) {
                        return this.checkRange(t), (this.array[t / 8 | 0] & 1 << 7 - t % 8) > 0
                    }
                    loadBit() {
                        const t = this.get(this.readCursor);
                        return this.readCursor++, t
                    }
                    loadBits(t) {
                        const e = new o(t);
                        for (let i = 0; i < t; i++) e.writeBit(this.loadBit());
                        return e.array
                    }
                    loadUint(t) {
                        if (t < 1) throw "Incorrect bitLength";
                        let e = "";
                        for (let i = 0; i < t; i++) e += this.loadBit() ? "1" : "0";
                        return new r(e, 2)
                    }
                    loadInt(t) {
                        if (t < 1) throw "Incorrect bitLength";
                        const e = this.loadBit();
                        if (1 === t) return new r(e ? -1 : 0);
                        let i = this.loadUint(t - 1);
                        if (e) {
                            i -= new r(2).pow(new r(t - 1))
                        }
                        return i
                    }
                    loadVarUint(t) {
                        const e = this.loadUint(new r(t).toString(2).length - 1);
                        return 0 === e.toNumber() ? new r(0) : this.loadUint(8 * e)
                    }
                    loadCoins() {
                        return this.loadVarUint(16)
                    }
                    loadAddress() {
                        const t = this.loadUint(2);
                        if (0 === t.toNumber()) return null;
                        if (2 !== t.toNumber()) throw new Error("unsupported address type");
                        if (this.loadBit()) throw new Error("unsupported address type");
                        const e = this.loadInt(8).toNumber(),
                            i = this.loadBits(256);
                        return new n(e + ":" + s(i))
                    }
                    loadRef() {
                        if (this.refCursor >= 4) throw new Error("refs overflow");
                        const t = this.refs[this.refCursor];
                        return this.refCursor++, t
                    }
                }
            }
        },
        2369: function(t, e, i) {
            const r = i(79),
                n = r.Address,
                s = i(80),
                o = i(4003),
                a = i(4004).default,
                {
                    Contract: l
                } = i(133),
                h = i(4007).default,
                c = i(4013).default,
                u = i(4014).default,
                d = i(4019).default,
                {
                    BlockSubscription: C,
                    InMemoryBlockStorage: f
                } = i(4022),
                {
                    SubscriptionContract: B
                } = i(4025),
                {
                    Payments: F,
                    PaymentChannel: w
                } = i(4026),
                m = i(5391).default,
                p = i(4055).default,
                g = i(5387).default,
                {
                    Dns: A,
                    DnsCollection: y,
                    DnsItem: E
                } = i(4056).default;
            class TonWeb {
                constructor(t) {
                    this.version = "0.0.59", this.utils = r, this.Address = n, this.boc = s, this.Contract = l, this.BlockSubscription = C, this.InMemoryBlockStorage = f, this.provider = t || new a, this.dns = new A(this.provider), this.wallet = new h(this.provider), this.payments = new F(this.provider), this.lockupWallet = c
                }
                async getTransactions(t, e = 20, i, r, n) {
                    return this.provider.getTransactions(t.toString(), e, i, r, n)
                }
                async getBalance(t) {
                    return this.provider.getBalance(t.toString())
                }
                async sendBoc(t) {
                    return this.provider.sendBoc(r.bytesToBase64(t))
                }
                async call(t, e, i = []) {
                    return this.provider.call(t.toString(), e, i)
                }
            }
            TonWeb.version = "0.0.59", TonWeb.utils = r, TonWeb.Address = n, TonWeb.boc = s, TonWeb.HttpProvider = a, TonWeb.Contract = l, TonWeb.Wallets = h, TonWeb.LockupWallets = c, TonWeb.SubscriptionContract = B, TonWeb.BlockSubscription = C, TonWeb.InMemoryBlockStorage = f, TonWeb.ledger = {
                TransportWebUSB: m,
                TransportWebHID: p,
                BluetoothTransport: g,
                AppTon: o
            }, TonWeb.token = {
                nft: u,
                ft: d,
                jetton: d
            }, TonWeb.dns = A, TonWeb.dns.DnsCollection = y, TonWeb.dns.DnsItem = E, TonWeb.payments = F, TonWeb.payments.PaymentChannel = w, t.exports = TonWeb
        },
        3995: function(t, e, i) {
            (function(t) {
                ! function(t, e) {
                    "use strict";

                    function r(t, e) {
                        if (!t) throw new Error(e || "Assertion failed")
                    }

                    function n(t, e) {
                        t.super_ = e;
                        var i = function() {};
                        i.prototype = e.prototype, t.prototype = new i, t.prototype.constructor = t
                    }

                    function s(t, e, i) {
                        if (s.isBN(t)) return t;
                        this.negative = 0, this.words = null, this.length = 0, this.red = null, null !== t && ("le" !== e && "be" !== e || (i = e, e = 10), this._init(t || 0, e || 10, i || "be"))
                    }
                    var o;
                    "object" == typeof t ? t.exports = s : e.BN = s, s.BN = s, s.wordSize = 26;
                    try {
                        o = i(12).Buffer
                    } catch (t) {}

                    function a(t, e, i) {
                        for (var n = 0, s = Math.min(t.length, i), o = 0, a = e; a < s; a++) {
                            var l, h = t.charCodeAt(a) - 48;
                            n <<= 4, n |= l = h >= 49 && h <= 54 ? h - 49 + 10 : h >= 17 && h <= 22 ? h - 17 + 10 : h, o |= l
                        }
                        return r(!(240 & o), "Invalid character in " + t), n
                    }

                    function l(t, e, i, n) {
                        for (var s = 0, o = 0, a = Math.min(t.length, i), l = e; l < a; l++) {
                            var h = t.charCodeAt(l) - 48;
                            s *= n, o = h >= 49 ? h - 49 + 10 : h >= 17 ? h - 17 + 10 : h, r(h >= 0 && o < n, "Invalid character"), s += o
                        }
                        return s
                    }

                    function h(t, e) {
                        t.words = e.words, t.length = e.length, t.negative = e.negative, t.red = e.red
                    }

                    function c() {
                        return (this.red ? "<BN-R: " : "<BN: ") + this.toString(16) + ">"
                    }
                    s.isBN = function(t) {
                        return t instanceof s || null !== t && "object" == typeof t && t.constructor.wordSize === s.wordSize && Array.isArray(t.words)
                    }, s.max = function(t, e) {
                        return t.cmp(e) > 0 ? t : e
                    }, s.min = function(t, e) {
                        return t.cmp(e) < 0 ? t : e
                    }, s.prototype._init = function(t, e, i) {
                        if ("number" == typeof t) return this._initNumber(t, e, i);
                        if ("object" == typeof t) return this._initArray(t, e, i);
                        "hex" === e && (e = 16), r(e === (0 | e) && e >= 2 && e <= 36);
                        var n = 0;
                        "-" === (t = t.toString().replace(/\s+/g, ""))[0] && n++, 16 === e ? this._parseHex(t, n) : this._parseBase(t, e, n), "-" === t[0] && (this.negative = 1), this._strip(), "le" === i && this._initArray(this.toArray(), e, i)
                    }, s.prototype._initNumber = function(t, e, i) {
                        t < 0 && (this.negative = 1, t = -t), t < 67108864 ? (this.words = [67108863 & t], this.length = 1) : t < 4503599627370496 ? (this.words = [67108863 & t, t / 67108864 & 67108863], this.length = 2) : (r(t < 9007199254740992), this.words = [67108863 & t, t / 67108864 & 67108863, 1], this.length = 3), "le" === i && this._initArray(this.toArray(), e, i)
                    }, s.prototype._initArray = function(t, e, i) {
                        if (r("number" == typeof t.length), t.length <= 0) return this.words = [0], this.length = 1, this;
                        this.length = Math.ceil(t.length / 3), this.words = new Array(this.length);
                        for (var n = 0; n < this.length; n++) this.words[n] = 0;
                        var s, o, a = 0;
                        if ("be" === i)
                            for (n = t.length - 1, s = 0; n >= 0; n -= 3) o = t[n] | t[n - 1] << 8 | t[n - 2] << 16, this.words[s] |= o << a & 67108863, this.words[s + 1] = o >>> 26 - a & 67108863, (a += 24) >= 26 && (a -= 26, s++);
                        else if ("le" === i)
                            for (n = 0, s = 0; n < t.length; n += 3) o = t[n] | t[n + 1] << 8 | t[n + 2] << 16, this.words[s] |= o << a & 67108863, this.words[s + 1] = o >>> 26 - a & 67108863, (a += 24) >= 26 && (a -= 26, s++);
                        return this._strip()
                    }, s.prototype._parseHex = function(t, e) {
                        this.length = Math.ceil((t.length - e) / 6), this.words = new Array(this.length);
                        for (var i = 0; i < this.length; i++) this.words[i] = 0;
                        var r, n, s = 0;
                        for (i = t.length - 6, r = 0; i >= e; i -= 6) n = a(t, i, i + 6), this.words[r] |= n << s & 67108863, this.words[r + 1] |= n >>> 26 - s & 4194303, (s += 24) >= 26 && (s -= 26, r++);
                        i + 6 !== e && (n = a(t, e, i + 6), this.words[r] |= n << s & 67108863, this.words[r + 1] |= n >>> 26 - s & 4194303), this._strip()
                    }, s.prototype._parseBase = function(t, e, i) {
                        this.words = [0], this.length = 1;
                        for (var r = 0, n = 1; n <= 67108863; n *= e) r++;
                        r--, n = n / e | 0;
                        for (var s = t.length - i, o = s % r, a = Math.min(s, s - o) + i, h = 0, c = i; c < a; c += r) h = l(t, c, c + r, e), this.imuln(n), this.words[0] + h < 67108864 ? this.words[0] += h : this._iaddn(h);
                        if (0 !== o) {
                            var u = 1;
                            for (h = l(t, c, t.length, e), c = 0; c < o; c++) u *= e;
                            this.imuln(u), this.words[0] + h < 67108864 ? this.words[0] += h : this._iaddn(h)
                        }
                    }, s.prototype.copy = function(t) {
                        t.words = new Array(this.length);
                        for (var e = 0; e < this.length; e++) t.words[e] = this.words[e];
                        t.length = this.length, t.negative = this.negative, t.red = this.red
                    }, s.prototype._move = function(t) {
                        h(t, this)
                    }, s.prototype.clone = function() {
                        var t = new s(null);
                        return this.copy(t), t
                    }, s.prototype._expand = function(t) {
                        for (; this.length < t;) this.words[this.length++] = 0;
                        return this
                    }, s.prototype._strip = function() {
                        for (; this.length > 1 && 0 === this.words[this.length - 1];) this.length--;
                        return this._normSign()
                    }, s.prototype._normSign = function() {
                        return 1 === this.length && 0 === this.words[0] && (this.negative = 0), this
                    }, "undefined" != typeof Symbol && "function" == typeof Symbol.for ? s.prototype[Symbol.for("nodejs.util.inspect.custom")] = c : s.prototype.inspect = c;
                    var u = ["", "0", "00", "000", "0000", "00000", "000000", "0000000", "00000000", "000000000", "0000000000", "00000000000", "000000000000", "0000000000000", "00000000000000", "000000000000000", "0000000000000000", "00000000000000000", "000000000000000000", "0000000000000000000", "00000000000000000000", "000000000000000000000", "0000000000000000000000", "00000000000000000000000", "000000000000000000000000", "0000000000000000000000000"],
                        d = [0, 0, 25, 16, 12, 11, 10, 9, 8, 8, 7, 7, 7, 7, 6, 6, 6, 6, 6, 6, 6, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5],
                        C = [0, 0, 33554432, 43046721, 16777216, 48828125, 60466176, 40353607, 16777216, 43046721, 1e7, 19487171, 35831808, 62748517, 7529536, 11390625, 16777216, 24137569, 34012224, 47045881, 64e6, 4084101, 5153632, 6436343, 7962624, 9765625, 11881376, 14348907, 17210368, 20511149, 243e5, 28629151, 33554432, 39135393, 45435424, 52521875, 60466176];
                    s.prototype.toString = function(t, e) {
                        var i;
                        if (e = 0 | e || 1, 16 === (t = t || 10) || "hex" === t) {
                            i = "";
                            for (var n = 0, s = 0, o = 0; o < this.length; o++) {
                                var a = this.words[o],
                                    l = (16777215 & (a << n | s)).toString(16);
                                i = 0 !== (s = a >>> 24 - n & 16777215) || o !== this.length - 1 ? u[6 - l.length] + l + i : l + i, (n += 2) >= 26 && (n -= 26, o--)
                            }
                            for (0 !== s && (i = s.toString(16) + i); i.length % e != 0;) i = "0" + i;
                            return 0 !== this.negative && (i = "-" + i), i
                        }
                        if (t === (0 | t) && t >= 2 && t <= 36) {
                            var h = d[t],
                                c = C[t];
                            i = "";
                            var f = this.clone();
                            for (f.negative = 0; !f.isZero();) {
                                var B = f.modrn(c).toString(t);
                                i = (f = f.idivn(c)).isZero() ? B + i : u[h - B.length] + B + i
                            }
                            for (this.isZero() && (i = "0" + i); i.length % e != 0;) i = "0" + i;
                            return 0 !== this.negative && (i = "-" + i), i
                        }
                        r(!1, "Base should be between 2 and 36")
                    }, s.prototype.toNumber = function() {
                        var t = this.words[0];
                        return 2 === this.length ? t += 67108864 * this.words[1] : 3 === this.length && 1 === this.words[2] ? t += 4503599627370496 + 67108864 * this.words[1] : this.length > 2 && r(!1, "Number can only safely store up to 53 bits"), 0 !== this.negative ? -t : t
                    }, s.prototype.toJSON = function() {
                        return this.toString(16, 2)
                    }, o && (s.prototype.toBuffer = function(t, e) {
                        return this.toArrayLike(o, t, e)
                    }), s.prototype.toArray = function(t, e) {
                        return this.toArrayLike(Array, t, e)
                    };

                    function f(t, e, i) {
                        i.negative = e.negative ^ t.negative;
                        var r = t.length + e.length | 0;
                        i.length = r, r = r - 1 | 0;
                        var n = 0 | t.words[0],
                            s = 0 | e.words[0],
                            o = n * s,
                            a = 67108863 & o,
                            l = o / 67108864 | 0;
                        i.words[0] = a;
                        for (var h = 1; h < r; h++) {
                            for (var c = l >>> 26, u = 67108863 & l, d = Math.min(h, e.length - 1), C = Math.max(0, h - t.length + 1); C <= d; C++) {
                                var f = h - C | 0;
                                c += (o = (n = 0 | t.words[f]) * (s = 0 | e.words[C]) + u) / 67108864 | 0, u = 67108863 & o
                            }
                            i.words[h] = 0 | u, l = 0 | c
                        }
                        return 0 !== l ? i.words[h] = 0 | l : i.length--, i._strip()
                    }
                    s.prototype.toArrayLike = function(t, e, i) {
                        this._strip();
                        var n = this.byteLength(),
                            s = i || Math.max(1, n);
                        r(n <= s, "byte array longer than desired length"), r(s > 0, "Requested array length <= 0");
                        var o = function(t, e) {
                            return t.allocUnsafe ? t.allocUnsafe(e) : new t(e)
                        }(t, s);
                        return this["_toArrayLike" + ("le" === e ? "LE" : "BE")](o, n), o
                    }, s.prototype._toArrayLikeLE = function(t, e) {
                        for (var i = 0, r = 0, n = 0, s = 0; n < this.length; n++) {
                            var o = this.words[n] << s | r;
                            t[i++] = 255 & o, i < t.length && (t[i++] = o >> 8 & 255), i < t.length && (t[i++] = o >> 16 & 255), 6 === s ? (i < t.length && (t[i++] = o >> 24 & 255), r = 0, s = 0) : (r = o >>> 24, s += 2)
                        }
                        if (i < t.length)
                            for (t[i++] = r; i < t.length;) t[i++] = 0
                    }, s.prototype._toArrayLikeBE = function(t, e) {
                        for (var i = t.length - 1, r = 0, n = 0, s = 0; n < this.length; n++) {
                            var o = this.words[n] << s | r;
                            t[i--] = 255 & o, i >= 0 && (t[i--] = o >> 8 & 255), i >= 0 && (t[i--] = o >> 16 & 255), 6 === s ? (i >= 0 && (t[i--] = o >> 24 & 255), r = 0, s = 0) : (r = o >>> 24, s += 2)
                        }
                        if (i >= 0)
                            for (t[i--] = r; i >= 0;) t[i--] = 0
                    }, Math.clz32 ? s.prototype._countBits = function(t) {
                        return 32 - Math.clz32(t)
                    } : s.prototype._countBits = function(t) {
                        var e = t,
                            i = 0;
                        return e >= 4096 && (i += 13, e >>>= 13), e >= 64 && (i += 7, e >>>= 7), e >= 8 && (i += 4, e >>>= 4), e >= 2 && (i += 2, e >>>= 2), i + e
                    }, s.prototype._zeroBits = function(t) {
                        if (0 === t) return 26;
                        var e = t,
                            i = 0;
                        return 0 == (8191 & e) && (i += 13, e >>>= 13), 0 == (127 & e) && (i += 7, e >>>= 7), 0 == (15 & e) && (i += 4, e >>>= 4), 0 == (3 & e) && (i += 2, e >>>= 2), 0 == (1 & e) && i++, i
                    }, s.prototype.bitLength = function() {
                        var t = this.words[this.length - 1],
                            e = this._countBits(t);
                        return 26 * (this.length - 1) + e
                    }, s.prototype.zeroBits = function() {
                        if (this.isZero()) return 0;
                        for (var t = 0, e = 0; e < this.length; e++) {
                            var i = this._zeroBits(this.words[e]);
                            if (t += i, 26 !== i) break
                        }
                        return t
                    }, s.prototype.byteLength = function() {
                        return Math.ceil(this.bitLength() / 8)
                    }, s.prototype.toTwos = function(t) {
                        return 0 !== this.negative ? this.abs().inotn(t).iaddn(1) : this.clone()
                    }, s.prototype.fromTwos = function(t) {
                        return this.testn(t - 1) ? this.notn(t).iaddn(1).ineg() : this.clone()
                    }, s.prototype.isNeg = function() {
                        return 0 !== this.negative
                    }, s.prototype.neg = function() {
                        return this.clone().ineg()
                    }, s.prototype.ineg = function() {
                        return this.isZero() || (this.negative ^= 1), this
                    }, s.prototype.iuor = function(t) {
                        for (; this.length < t.length;) this.words[this.length++] = 0;
                        for (var e = 0; e < t.length; e++) this.words[e] = this.words[e] | t.words[e];
                        return this._strip()
                    }, s.prototype.ior = function(t) {
                        return r(0 == (this.negative | t.negative)), this.iuor(t)
                    }, s.prototype.or = function(t) {
                        return this.length > t.length ? this.clone().ior(t) : t.clone().ior(this)
                    }, s.prototype.uor = function(t) {
                        return this.length > t.length ? this.clone().iuor(t) : t.clone().iuor(this)
                    }, s.prototype.iuand = function(t) {
                        var e;
                        e = this.length > t.length ? t : this;
                        for (var i = 0; i < e.length; i++) this.words[i] = this.words[i] & t.words[i];
                        return this.length = e.length, this._strip()
                    }, s.prototype.iand = function(t) {
                        return r(0 == (this.negative | t.negative)), this.iuand(t)
                    }, s.prototype.and = function(t) {
                        return this.length > t.length ? this.clone().iand(t) : t.clone().iand(this)
                    }, s.prototype.uand = function(t) {
                        return this.length > t.length ? this.clone().iuand(t) : t.clone().iuand(this)
                    }, s.prototype.iuxor = function(t) {
                        var e, i;
                        this.length > t.length ? (e = this, i = t) : (e = t, i = this);
                        for (var r = 0; r < i.length; r++) this.words[r] = e.words[r] ^ i.words[r];
                        if (this !== e)
                            for (; r < e.length; r++) this.words[r] = e.words[r];
                        return this.length = e.length, this._strip()
                    }, s.prototype.ixor = function(t) {
                        return r(0 == (this.negative | t.negative)), this.iuxor(t)
                    }, s.prototype.xor = function(t) {
                        return this.length > t.length ? this.clone().ixor(t) : t.clone().ixor(this)
                    }, s.prototype.uxor = function(t) {
                        return this.length > t.length ? this.clone().iuxor(t) : t.clone().iuxor(this)
                    }, s.prototype.inotn = function(t) {
                        r("number" == typeof t && t >= 0);
                        var e = 0 | Math.ceil(t / 26),
                            i = t % 26;
                        this._expand(e), i > 0 && e--;
                        for (var n = 0; n < e; n++) this.words[n] = 67108863 & ~this.words[n];
                        return i > 0 && (this.words[n] = ~this.words[n] & 67108863 >> 26 - i), this._strip()
                    }, s.prototype.notn = function(t) {
                        return this.clone().inotn(t)
                    }, s.prototype.setn = function(t, e) {
                        r("number" == typeof t && t >= 0);
                        var i = t / 26 | 0,
                            n = t % 26;
                        return this._expand(i + 1), this.words[i] = e ? this.words[i] | 1 << n : this.words[i] & ~(1 << n), this._strip()
                    }, s.prototype.iadd = function(t) {
                        var e, i, r;
                        if (0 !== this.negative && 0 === t.negative) return this.negative = 0, e = this.isub(t), this.negative ^= 1, this._normSign();
                        if (0 === this.negative && 0 !== t.negative) return t.negative = 0, e = this.isub(t), t.negative = 1, e._normSign();
                        this.length > t.length ? (i = this, r = t) : (i = t, r = this);
                        for (var n = 0, s = 0; s < r.length; s++) e = (0 | i.words[s]) + (0 | r.words[s]) + n, this.words[s] = 67108863 & e, n = e >>> 26;
                        for (; 0 !== n && s < i.length; s++) e = (0 | i.words[s]) + n, this.words[s] = 67108863 & e, n = e >>> 26;
                        if (this.length = i.length, 0 !== n) this.words[this.length] = n, this.length++;
                        else if (i !== this)
                            for (; s < i.length; s++) this.words[s] = i.words[s];
                        return this
                    }, s.prototype.add = function(t) {
                        var e;
                        return 0 !== t.negative && 0 === this.negative ? (t.negative = 0, e = this.sub(t), t.negative ^= 1, e) : 0 === t.negative && 0 !== this.negative ? (this.negative = 0, e = t.sub(this), this.negative = 1, e) : this.length > t.length ? this.clone().iadd(t) : t.clone().iadd(this)
                    }, s.prototype.isub = function(t) {
                        if (0 !== t.negative) {
                            t.negative = 0;
                            var e = this.iadd(t);
                            return t.negative = 1, e._normSign()
                        }
                        if (0 !== this.negative) return this.negative = 0, this.iadd(t), this.negative = 1, this._normSign();
                        var i, r, n = this.cmp(t);
                        if (0 === n) return this.negative = 0, this.length = 1, this.words[0] = 0, this;
                        n > 0 ? (i = this, r = t) : (i = t, r = this);
                        for (var s = 0, o = 0; o < r.length; o++) s = (e = (0 | i.words[o]) - (0 | r.words[o]) + s) >> 26, this.words[o] = 67108863 & e;
                        for (; 0 !== s && o < i.length; o++) s = (e = (0 | i.words[o]) + s) >> 26, this.words[o] = 67108863 & e;
                        if (0 === s && o < i.length && i !== this)
                            for (; o < i.length; o++) this.words[o] = i.words[o];
                        return this.length = Math.max(this.length, o), i !== this && (this.negative = 1), this._strip()
                    }, s.prototype.sub = function(t) {
                        return this.clone().isub(t)
                    };
                    var B = function(t, e, i) {
                        var r, n, s, o = t.words,
                            a = e.words,
                            l = i.words,
                            h = 0,
                            c = 0 | o[0],
                            u = 8191 & c,
                            d = c >>> 13,
                            C = 0 | o[1],
                            f = 8191 & C,
                            B = C >>> 13,
                            F = 0 | o[2],
                            w = 8191 & F,
                            m = F >>> 13,
                            p = 0 | o[3],
                            g = 8191 & p,
                            A = p >>> 13,
                            y = 0 | o[4],
                            E = 8191 & y,
                            D = y >>> 13,
                            b = 0 | o[5],
                            v = 8191 & b,
                            M = b >>> 13,
                            S = 0 | o[6],
                            _ = 8191 & S,
                            I = S >>> 13,
                            U = 0 | o[7],
                            x = 8191 & U,
                            T = U >>> 13,
                            N = 0 | o[8],
                            R = 8191 & N,
                            k = N >>> 13,
                            P = 0 | o[9],
                            W = 8191 & P,
                            q = P >>> 13,
                            O = 0 | a[0],
                            L = 8191 & O,
                            K = O >>> 13,
                            H = 0 | a[1],
                            V = 8191 & H,
                            j = H >>> 13,
                            G = 0 | a[2],
                            z = 8191 & G,
                            Z = G >>> 13,
                            J = 0 | a[3],
                            Q = 8191 & J,
                            Y = J >>> 13,
                            X = 0 | a[4],
                            $ = 8191 & X,
                            tt = X >>> 13,
                            et = 0 | a[5],
                            it = 8191 & et,
                            rt = et >>> 13,
                            nt = 0 | a[6],
                            st = 8191 & nt,
                            ot = nt >>> 13,
                            at = 0 | a[7],
                            lt = 8191 & at,
                            ht = at >>> 13,
                            ct = 0 | a[8],
                            ut = 8191 & ct,
                            dt = ct >>> 13,
                            Ct = 0 | a[9],
                            ft = 8191 & Ct,
                            Bt = Ct >>> 13;
                        i.negative = t.negative ^ e.negative, i.length = 19;
                        var Ft = (h + (r = Math.imul(u, L)) | 0) + ((8191 & (n = (n = Math.imul(u, K)) + Math.imul(d, L) | 0)) << 13) | 0;
                        h = ((s = Math.imul(d, K)) + (n >>> 13) | 0) + (Ft >>> 26) | 0, Ft &= 67108863, r = Math.imul(f, L), n = (n = Math.imul(f, K)) + Math.imul(B, L) | 0, s = Math.imul(B, K);
                        var wt = (h + (r = r + Math.imul(u, V) | 0) | 0) + ((8191 & (n = (n = n + Math.imul(u, j) | 0) + Math.imul(d, V) | 0)) << 13) | 0;
                        h = ((s = s + Math.imul(d, j) | 0) + (n >>> 13) | 0) + (wt >>> 26) | 0, wt &= 67108863, r = Math.imul(w, L), n = (n = Math.imul(w, K)) + Math.imul(m, L) | 0, s = Math.imul(m, K), r = r + Math.imul(f, V) | 0, n = (n = n + Math.imul(f, j) | 0) + Math.imul(B, V) | 0, s = s + Math.imul(B, j) | 0;
                        var mt = (h + (r = r + Math.imul(u, z) | 0) | 0) + ((8191 & (n = (n = n + Math.imul(u, Z) | 0) + Math.imul(d, z) | 0)) << 13) | 0;
                        h = ((s = s + Math.imul(d, Z) | 0) + (n >>> 13) | 0) + (mt >>> 26) | 0, mt &= 67108863, r = Math.imul(g, L), n = (n = Math.imul(g, K)) + Math.imul(A, L) | 0, s = Math.imul(A, K), r = r + Math.imul(w, V) | 0, n = (n = n + Math.imul(w, j) | 0) + Math.imul(m, V) | 0, s = s + Math.imul(m, j) | 0, r = r + Math.imul(f, z) | 0, n = (n = n + Math.imul(f, Z) | 0) + Math.imul(B, z) | 0, s = s + Math.imul(B, Z) | 0;
                        var pt = (h + (r = r + Math.imul(u, Q) | 0) | 0) + ((8191 & (n = (n = n + Math.imul(u, Y) | 0) + Math.imul(d, Q) | 0)) << 13) | 0;
                        h = ((s = s + Math.imul(d, Y) | 0) + (n >>> 13) | 0) + (pt >>> 26) | 0, pt &= 67108863, r = Math.imul(E, L), n = (n = Math.imul(E, K)) + Math.imul(D, L) | 0, s = Math.imul(D, K), r = r + Math.imul(g, V) | 0, n = (n = n + Math.imul(g, j) | 0) + Math.imul(A, V) | 0, s = s + Math.imul(A, j) | 0, r = r + Math.imul(w, z) | 0, n = (n = n + Math.imul(w, Z) | 0) + Math.imul(m, z) | 0, s = s + Math.imul(m, Z) | 0, r = r + Math.imul(f, Q) | 0, n = (n = n + Math.imul(f, Y) | 0) + Math.imul(B, Q) | 0, s = s + Math.imul(B, Y) | 0;
                        var gt = (h + (r = r + Math.imul(u, $) | 0) | 0) + ((8191 & (n = (n = n + Math.imul(u, tt) | 0) + Math.imul(d, $) | 0)) << 13) | 0;
                        h = ((s = s + Math.imul(d, tt) | 0) + (n >>> 13) | 0) + (gt >>> 26) | 0, gt &= 67108863, r = Math.imul(v, L), n = (n = Math.imul(v, K)) + Math.imul(M, L) | 0, s = Math.imul(M, K), r = r + Math.imul(E, V) | 0, n = (n = n + Math.imul(E, j) | 0) + Math.imul(D, V) | 0, s = s + Math.imul(D, j) | 0, r = r + Math.imul(g, z) | 0, n = (n = n + Math.imul(g, Z) | 0) + Math.imul(A, z) | 0, s = s + Math.imul(A, Z) | 0, r = r + Math.imul(w, Q) | 0, n = (n = n + Math.imul(w, Y) | 0) + Math.imul(m, Q) | 0, s = s + Math.imul(m, Y) | 0, r = r + Math.imul(f, $) | 0, n = (n = n + Math.imul(f, tt) | 0) + Math.imul(B, $) | 0, s = s + Math.imul(B, tt) | 0;
                        var At = (h + (r = r + Math.imul(u, it) | 0) | 0) + ((8191 & (n = (n = n + Math.imul(u, rt) | 0) + Math.imul(d, it) | 0)) << 13) | 0;
                        h = ((s = s + Math.imul(d, rt) | 0) + (n >>> 13) | 0) + (At >>> 26) | 0, At &= 67108863, r = Math.imul(_, L), n = (n = Math.imul(_, K)) + Math.imul(I, L) | 0, s = Math.imul(I, K), r = r + Math.imul(v, V) | 0, n = (n = n + Math.imul(v, j) | 0) + Math.imul(M, V) | 0, s = s + Math.imul(M, j) | 0, r = r + Math.imul(E, z) | 0, n = (n = n + Math.imul(E, Z) | 0) + Math.imul(D, z) | 0, s = s + Math.imul(D, Z) | 0, r = r + Math.imul(g, Q) | 0, n = (n = n + Math.imul(g, Y) | 0) + Math.imul(A, Q) | 0, s = s + Math.imul(A, Y) | 0, r = r + Math.imul(w, $) | 0, n = (n = n + Math.imul(w, tt) | 0) + Math.imul(m, $) | 0, s = s + Math.imul(m, tt) | 0, r = r + Math.imul(f, it) | 0, n = (n = n + Math.imul(f, rt) | 0) + Math.imul(B, it) | 0, s = s + Math.imul(B, rt) | 0;
                        var yt = (h + (r = r + Math.imul(u, st) | 0) | 0) + ((8191 & (n = (n = n + Math.imul(u, ot) | 0) + Math.imul(d, st) | 0)) << 13) | 0;
                        h = ((s = s + Math.imul(d, ot) | 0) + (n >>> 13) | 0) + (yt >>> 26) | 0, yt &= 67108863, r = Math.imul(x, L), n = (n = Math.imul(x, K)) + Math.imul(T, L) | 0, s = Math.imul(T, K), r = r + Math.imul(_, V) | 0, n = (n = n + Math.imul(_, j) | 0) + Math.imul(I, V) | 0, s = s + Math.imul(I, j) | 0, r = r + Math.imul(v, z) | 0, n = (n = n + Math.imul(v, Z) | 0) + Math.imul(M, z) | 0, s = s + Math.imul(M, Z) | 0, r = r + Math.imul(E, Q) | 0, n = (n = n + Math.imul(E, Y) | 0) + Math.imul(D, Q) | 0, s = s + Math.imul(D, Y) | 0, r = r + Math.imul(g, $) | 0, n = (n = n + Math.imul(g, tt) | 0) + Math.imul(A, $) | 0, s = s + Math.imul(A, tt) | 0, r = r + Math.imul(w, it) | 0, n = (n = n + Math.imul(w, rt) | 0) + Math.imul(m, it) | 0, s = s + Math.imul(m, rt) | 0, r = r + Math.imul(f, st) | 0, n = (n = n + Math.imul(f, ot) | 0) + Math.imul(B, st) | 0, s = s + Math.imul(B, ot) | 0;
                        var Et = (h + (r = r + Math.imul(u, lt) | 0) | 0) + ((8191 & (n = (n = n + Math.imul(u, ht) | 0) + Math.imul(d, lt) | 0)) << 13) | 0;
                        h = ((s = s + Math.imul(d, ht) | 0) + (n >>> 13) | 0) + (Et >>> 26) | 0, Et &= 67108863, r = Math.imul(R, L), n = (n = Math.imul(R, K)) + Math.imul(k, L) | 0, s = Math.imul(k, K), r = r + Math.imul(x, V) | 0, n = (n = n + Math.imul(x, j) | 0) + Math.imul(T, V) | 0, s = s + Math.imul(T, j) | 0, r = r + Math.imul(_, z) | 0, n = (n = n + Math.imul(_, Z) | 0) + Math.imul(I, z) | 0, s = s + Math.imul(I, Z) | 0, r = r + Math.imul(v, Q) | 0, n = (n = n + Math.imul(v, Y) | 0) + Math.imul(M, Q) | 0, s = s + Math.imul(M, Y) | 0, r = r + Math.imul(E, $) | 0, n = (n = n + Math.imul(E, tt) | 0) + Math.imul(D, $) | 0, s = s + Math.imul(D, tt) | 0, r = r + Math.imul(g, it) | 0, n = (n = n + Math.imul(g, rt) | 0) + Math.imul(A, it) | 0, s = s + Math.imul(A, rt) | 0, r = r + Math.imul(w, st) | 0, n = (n = n + Math.imul(w, ot) | 0) + Math.imul(m, st) | 0, s = s + Math.imul(m, ot) | 0, r = r + Math.imul(f, lt) | 0, n = (n = n + Math.imul(f, ht) | 0) + Math.imul(B, lt) | 0, s = s + Math.imul(B, ht) | 0;
                        var Dt = (h + (r = r + Math.imul(u, ut) | 0) | 0) + ((8191 & (n = (n = n + Math.imul(u, dt) | 0) + Math.imul(d, ut) | 0)) << 13) | 0;
                        h = ((s = s + Math.imul(d, dt) | 0) + (n >>> 13) | 0) + (Dt >>> 26) | 0, Dt &= 67108863, r = Math.imul(W, L), n = (n = Math.imul(W, K)) + Math.imul(q, L) | 0, s = Math.imul(q, K), r = r + Math.imul(R, V) | 0, n = (n = n + Math.imul(R, j) | 0) + Math.imul(k, V) | 0, s = s + Math.imul(k, j) | 0, r = r + Math.imul(x, z) | 0, n = (n = n + Math.imul(x, Z) | 0) + Math.imul(T, z) | 0, s = s + Math.imul(T, Z) | 0, r = r + Math.imul(_, Q) | 0, n = (n = n + Math.imul(_, Y) | 0) + Math.imul(I, Q) | 0, s = s + Math.imul(I, Y) | 0, r = r + Math.imul(v, $) | 0, n = (n = n + Math.imul(v, tt) | 0) + Math.imul(M, $) | 0, s = s + Math.imul(M, tt) | 0, r = r + Math.imul(E, it) | 0, n = (n = n + Math.imul(E, rt) | 0) + Math.imul(D, it) | 0, s = s + Math.imul(D, rt) | 0, r = r + Math.imul(g, st) | 0, n = (n = n + Math.imul(g, ot) | 0) + Math.imul(A, st) | 0, s = s + Math.imul(A, ot) | 0, r = r + Math.imul(w, lt) | 0, n = (n = n + Math.imul(w, ht) | 0) + Math.imul(m, lt) | 0, s = s + Math.imul(m, ht) | 0, r = r + Math.imul(f, ut) | 0, n = (n = n + Math.imul(f, dt) | 0) + Math.imul(B, ut) | 0, s = s + Math.imul(B, dt) | 0;
                        var bt = (h + (r = r + Math.imul(u, ft) | 0) | 0) + ((8191 & (n = (n = n + Math.imul(u, Bt) | 0) + Math.imul(d, ft) | 0)) << 13) | 0;
                        h = ((s = s + Math.imul(d, Bt) | 0) + (n >>> 13) | 0) + (bt >>> 26) | 0, bt &= 67108863, r = Math.imul(W, V), n = (n = Math.imul(W, j)) + Math.imul(q, V) | 0, s = Math.imul(q, j), r = r + Math.imul(R, z) | 0, n = (n = n + Math.imul(R, Z) | 0) + Math.imul(k, z) | 0, s = s + Math.imul(k, Z) | 0, r = r + Math.imul(x, Q) | 0, n = (n = n + Math.imul(x, Y) | 0) + Math.imul(T, Q) | 0, s = s + Math.imul(T, Y) | 0, r = r + Math.imul(_, $) | 0, n = (n = n + Math.imul(_, tt) | 0) + Math.imul(I, $) | 0, s = s + Math.imul(I, tt) | 0, r = r + Math.imul(v, it) | 0, n = (n = n + Math.imul(v, rt) | 0) + Math.imul(M, it) | 0, s = s + Math.imul(M, rt) | 0, r = r + Math.imul(E, st) | 0, n = (n = n + Math.imul(E, ot) | 0) + Math.imul(D, st) | 0, s = s + Math.imul(D, ot) | 0, r = r + Math.imul(g, lt) | 0, n = (n = n + Math.imul(g, ht) | 0) + Math.imul(A, lt) | 0, s = s + Math.imul(A, ht) | 0, r = r + Math.imul(w, ut) | 0, n = (n = n + Math.imul(w, dt) | 0) + Math.imul(m, ut) | 0, s = s + Math.imul(m, dt) | 0;
                        var vt = (h + (r = r + Math.imul(f, ft) | 0) | 0) + ((8191 & (n = (n = n + Math.imul(f, Bt) | 0) + Math.imul(B, ft) | 0)) << 13) | 0;
                        h = ((s = s + Math.imul(B, Bt) | 0) + (n >>> 13) | 0) + (vt >>> 26) | 0, vt &= 67108863, r = Math.imul(W, z), n = (n = Math.imul(W, Z)) + Math.imul(q, z) | 0, s = Math.imul(q, Z), r = r + Math.imul(R, Q) | 0, n = (n = n + Math.imul(R, Y) | 0) + Math.imul(k, Q) | 0, s = s + Math.imul(k, Y) | 0, r = r + Math.imul(x, $) | 0, n = (n = n + Math.imul(x, tt) | 0) + Math.imul(T, $) | 0, s = s + Math.imul(T, tt) | 0, r = r + Math.imul(_, it) | 0, n = (n = n + Math.imul(_, rt) | 0) + Math.imul(I, it) | 0, s = s + Math.imul(I, rt) | 0, r = r + Math.imul(v, st) | 0, n = (n = n + Math.imul(v, ot) | 0) + Math.imul(M, st) | 0, s = s + Math.imul(M, ot) | 0, r = r + Math.imul(E, lt) | 0, n = (n = n + Math.imul(E, ht) | 0) + Math.imul(D, lt) | 0, s = s + Math.imul(D, ht) | 0, r = r + Math.imul(g, ut) | 0, n = (n = n + Math.imul(g, dt) | 0) + Math.imul(A, ut) | 0, s = s + Math.imul(A, dt) | 0;
                        var Mt = (h + (r = r + Math.imul(w, ft) | 0) | 0) + ((8191 & (n = (n = n + Math.imul(w, Bt) | 0) + Math.imul(m, ft) | 0)) << 13) | 0;
                        h = ((s = s + Math.imul(m, Bt) | 0) + (n >>> 13) | 0) + (Mt >>> 26) | 0, Mt &= 67108863, r = Math.imul(W, Q), n = (n = Math.imul(W, Y)) + Math.imul(q, Q) | 0, s = Math.imul(q, Y), r = r + Math.imul(R, $) | 0, n = (n = n + Math.imul(R, tt) | 0) + Math.imul(k, $) | 0, s = s + Math.imul(k, tt) | 0, r = r + Math.imul(x, it) | 0, n = (n = n + Math.imul(x, rt) | 0) + Math.imul(T, it) | 0, s = s + Math.imul(T, rt) | 0, r = r + Math.imul(_, st) | 0, n = (n = n + Math.imul(_, ot) | 0) + Math.imul(I, st) | 0, s = s + Math.imul(I, ot) | 0, r = r + Math.imul(v, lt) | 0, n = (n = n + Math.imul(v, ht) | 0) + Math.imul(M, lt) | 0, s = s + Math.imul(M, ht) | 0, r = r + Math.imul(E, ut) | 0, n = (n = n + Math.imul(E, dt) | 0) + Math.imul(D, ut) | 0, s = s + Math.imul(D, dt) | 0;
                        var St = (h + (r = r + Math.imul(g, ft) | 0) | 0) + ((8191 & (n = (n = n + Math.imul(g, Bt) | 0) + Math.imul(A, ft) | 0)) << 13) | 0;
                        h = ((s = s + Math.imul(A, Bt) | 0) + (n >>> 13) | 0) + (St >>> 26) | 0, St &= 67108863, r = Math.imul(W, $), n = (n = Math.imul(W, tt)) + Math.imul(q, $) | 0, s = Math.imul(q, tt), r = r + Math.imul(R, it) | 0, n = (n = n + Math.imul(R, rt) | 0) + Math.imul(k, it) | 0, s = s + Math.imul(k, rt) | 0, r = r + Math.imul(x, st) | 0, n = (n = n + Math.imul(x, ot) | 0) + Math.imul(T, st) | 0, s = s + Math.imul(T, ot) | 0, r = r + Math.imul(_, lt) | 0, n = (n = n + Math.imul(_, ht) | 0) + Math.imul(I, lt) | 0, s = s + Math.imul(I, ht) | 0, r = r + Math.imul(v, ut) | 0, n = (n = n + Math.imul(v, dt) | 0) + Math.imul(M, ut) | 0, s = s + Math.imul(M, dt) | 0;
                        var _t = (h + (r = r + Math.imul(E, ft) | 0) | 0) + ((8191 & (n = (n = n + Math.imul(E, Bt) | 0) + Math.imul(D, ft) | 0)) << 13) | 0;
                        h = ((s = s + Math.imul(D, Bt) | 0) + (n >>> 13) | 0) + (_t >>> 26) | 0, _t &= 67108863, r = Math.imul(W, it), n = (n = Math.imul(W, rt)) + Math.imul(q, it) | 0, s = Math.imul(q, rt), r = r + Math.imul(R, st) | 0, n = (n = n + Math.imul(R, ot) | 0) + Math.imul(k, st) | 0, s = s + Math.imul(k, ot) | 0, r = r + Math.imul(x, lt) | 0, n = (n = n + Math.imul(x, ht) | 0) + Math.imul(T, lt) | 0, s = s + Math.imul(T, ht) | 0, r = r + Math.imul(_, ut) | 0, n = (n = n + Math.imul(_, dt) | 0) + Math.imul(I, ut) | 0, s = s + Math.imul(I, dt) | 0;
                        var It = (h + (r = r + Math.imul(v, ft) | 0) | 0) + ((8191 & (n = (n = n + Math.imul(v, Bt) | 0) + Math.imul(M, ft) | 0)) << 13) | 0;
                        h = ((s = s + Math.imul(M, Bt) | 0) + (n >>> 13) | 0) + (It >>> 26) | 0, It &= 67108863, r = Math.imul(W, st), n = (n = Math.imul(W, ot)) + Math.imul(q, st) | 0, s = Math.imul(q, ot), r = r + Math.imul(R, lt) | 0, n = (n = n + Math.imul(R, ht) | 0) + Math.imul(k, lt) | 0, s = s + Math.imul(k, ht) | 0, r = r + Math.imul(x, ut) | 0, n = (n = n + Math.imul(x, dt) | 0) + Math.imul(T, ut) | 0, s = s + Math.imul(T, dt) | 0;
                        var Ut = (h + (r = r + Math.imul(_, ft) | 0) | 0) + ((8191 & (n = (n = n + Math.imul(_, Bt) | 0) + Math.imul(I, ft) | 0)) << 13) | 0;
                        h = ((s = s + Math.imul(I, Bt) | 0) + (n >>> 13) | 0) + (Ut >>> 26) | 0, Ut &= 67108863, r = Math.imul(W, lt), n = (n = Math.imul(W, ht)) + Math.imul(q, lt) | 0, s = Math.imul(q, ht), r = r + Math.imul(R, ut) | 0, n = (n = n + Math.imul(R, dt) | 0) + Math.imul(k, ut) | 0, s = s + Math.imul(k, dt) | 0;
                        var xt = (h + (r = r + Math.imul(x, ft) | 0) | 0) + ((8191 & (n = (n = n + Math.imul(x, Bt) | 0) + Math.imul(T, ft) | 0)) << 13) | 0;
                        h = ((s = s + Math.imul(T, Bt) | 0) + (n >>> 13) | 0) + (xt >>> 26) | 0, xt &= 67108863, r = Math.imul(W, ut), n = (n = Math.imul(W, dt)) + Math.imul(q, ut) | 0, s = Math.imul(q, dt);
                        var Tt = (h + (r = r + Math.imul(R, ft) | 0) | 0) + ((8191 & (n = (n = n + Math.imul(R, Bt) | 0) + Math.imul(k, ft) | 0)) << 13) | 0;
                        h = ((s = s + Math.imul(k, Bt) | 0) + (n >>> 13) | 0) + (Tt >>> 26) | 0, Tt &= 67108863;
                        var Nt = (h + (r = Math.imul(W, ft)) | 0) + ((8191 & (n = (n = Math.imul(W, Bt)) + Math.imul(q, ft) | 0)) << 13) | 0;
                        return h = ((s = Math.imul(q, Bt)) + (n >>> 13) | 0) + (Nt >>> 26) | 0, Nt &= 67108863, l[0] = Ft, l[1] = wt, l[2] = mt, l[3] = pt, l[4] = gt, l[5] = At, l[6] = yt, l[7] = Et, l[8] = Dt, l[9] = bt, l[10] = vt, l[11] = Mt, l[12] = St, l[13] = _t, l[14] = It, l[15] = Ut, l[16] = xt, l[17] = Tt, l[18] = Nt, 0 !== h && (l[19] = h, i.length++), i
                    };

                    function F(t, e, i) {
                        i.negative = e.negative ^ t.negative, i.length = t.length + e.length;
                        for (var r = 0, n = 0, s = 0; s < i.length - 1; s++) {
                            var o = n;
                            n = 0;
                            for (var a = 67108863 & r, l = Math.min(s, e.length - 1), h = Math.max(0, s - t.length + 1); h <= l; h++) {
                                var c = s - h,
                                    u = (0 | t.words[c]) * (0 | e.words[h]),
                                    d = 67108863 & u;
                                a = 67108863 & (d = d + a | 0), n += (o = (o = o + (u / 67108864 | 0) | 0) + (d >>> 26) | 0) >>> 26, o &= 67108863
                            }
                            i.words[s] = a, r = o, o = n
                        }
                        return 0 !== r ? i.words[s] = r : i.length--, i._strip()
                    }

                    function w(t, e, i) {
                        return F(t, e, i)
                    }

                    function m(t, e) {
                        this.x = t, this.y = e
                    }
                    Math.imul || (B = f), s.prototype.mulTo = function(t, e) {
                        var i = this.length + t.length;
                        return 10 === this.length && 10 === t.length ? B(this, t, e) : i < 63 ? f(this, t, e) : i < 1024 ? F(this, t, e) : w(this, t, e)
                    }, m.prototype.makeRBT = function(t) {
                        for (var e = new Array(t), i = s.prototype._countBits(t) - 1, r = 0; r < t; r++) e[r] = this.revBin(r, i, t);
                        return e
                    }, m.prototype.revBin = function(t, e, i) {
                        if (0 === t || t === i - 1) return t;
                        for (var r = 0, n = 0; n < e; n++) r |= (1 & t) << e - n - 1, t >>= 1;
                        return r
                    }, m.prototype.permute = function(t, e, i, r, n, s) {
                        for (var o = 0; o < s; o++) r[o] = e[t[o]], n[o] = i[t[o]]
                    }, m.prototype.transform = function(t, e, i, r, n, s) {
                        this.permute(s, t, e, i, r, n);
                        for (var o = 1; o < n; o <<= 1)
                            for (var a = o << 1, l = Math.cos(2 * Math.PI / a), h = Math.sin(2 * Math.PI / a), c = 0; c < n; c += a)
                                for (var u = l, d = h, C = 0; C < o; C++) {
                                    var f = i[c + C],
                                        B = r[c + C],
                                        F = i[c + C + o],
                                        w = r[c + C + o],
                                        m = u * F - d * w;
                                    w = u * w + d * F, F = m, i[c + C] = f + F, r[c + C] = B + w, i[c + C + o] = f - F, r[c + C + o] = B - w, C !== a && (m = l * u - h * d, d = l * d + h * u, u = m)
                                }
                    }, m.prototype.guessLen13b = function(t, e) {
                        var i = 1 | Math.max(e, t),
                            r = 1 & i,
                            n = 0;
                        for (i = i / 2 | 0; i; i >>>= 1) n++;
                        return 1 << n + 1 + r
                    }, m.prototype.conjugate = function(t, e, i) {
                        if (!(i <= 1))
                            for (var r = 0; r < i / 2; r++) {
                                var n = t[r];
                                t[r] = t[i - r - 1], t[i - r - 1] = n, n = e[r], e[r] = -e[i - r - 1], e[i - r - 1] = -n
                            }
                    }, m.prototype.normalize13b = function(t, e) {
                        for (var i = 0, r = 0; r < e / 2; r++) {
                            var n = 8192 * Math.round(t[2 * r + 1] / e) + Math.round(t[2 * r] / e) + i;
                            t[r] = 67108863 & n, i = n < 67108864 ? 0 : n / 67108864 | 0
                        }
                        return t
                    }, m.prototype.convert13b = function(t, e, i, n) {
                        for (var s = 0, o = 0; o < e; o++) s += 0 | t[o], i[2 * o] = 8191 & s, s >>>= 13, i[2 * o + 1] = 8191 & s, s >>>= 13;
                        for (o = 2 * e; o < n; ++o) i[o] = 0;
                        r(0 === s), r(0 == (-8192 & s))
                    }, m.prototype.stub = function(t) {
                        for (var e = new Array(t), i = 0; i < t; i++) e[i] = 0;
                        return e
                    }, m.prototype.mulp = function(t, e, i) {
                        var r = 2 * this.guessLen13b(t.length, e.length),
                            n = this.makeRBT(r),
                            s = this.stub(r),
                            o = new Array(r),
                            a = new Array(r),
                            l = new Array(r),
                            h = new Array(r),
                            c = new Array(r),
                            u = new Array(r),
                            d = i.words;
                        d.length = r, this.convert13b(t.words, t.length, o, r), this.convert13b(e.words, e.length, h, r), this.transform(o, s, a, l, r, n), this.transform(h, s, c, u, r, n);
                        for (var C = 0; C < r; C++) {
                            var f = a[C] * c[C] - l[C] * u[C];
                            l[C] = a[C] * u[C] + l[C] * c[C], a[C] = f
                        }
                        return this.conjugate(a, l, r), this.transform(a, l, d, s, r, n), this.conjugate(d, s, r), this.normalize13b(d, r), i.negative = t.negative ^ e.negative, i.length = t.length + e.length, i._strip()
                    }, s.prototype.mul = function(t) {
                        var e = new s(null);
                        return e.words = new Array(this.length + t.length), this.mulTo(t, e)
                    }, s.prototype.mulf = function(t) {
                        var e = new s(null);
                        return e.words = new Array(this.length + t.length), w(this, t, e)
                    }, s.prototype.imul = function(t) {
                        return this.clone().mulTo(t, this)
                    }, s.prototype.imuln = function(t) {
                        var e = t < 0;
                        e && (t = -t), r("number" == typeof t), r(t < 67108864);
                        for (var i = 0, n = 0; n < this.length; n++) {
                            var s = (0 | this.words[n]) * t,
                                o = (67108863 & s) + (67108863 & i);
                            i >>= 26, i += s / 67108864 | 0, i += o >>> 26, this.words[n] = 67108863 & o
                        }
                        return 0 !== i && (this.words[n] = i, this.length++), e ? this.ineg() : this
                    }, s.prototype.muln = function(t) {
                        return this.clone().imuln(t)
                    }, s.prototype.sqr = function() {
                        return this.mul(this)
                    }, s.prototype.isqr = function() {
                        return this.imul(this.clone())
                    }, s.prototype.pow = function(t) {
                        var e = function(t) {
                            for (var e = new Array(t.bitLength()), i = 0; i < e.length; i++) {
                                var r = i / 26 | 0,
                                    n = i % 26;
                                e[i] = t.words[r] >>> n & 1
                            }
                            return e
                        }(t);
                        if (0 === e.length) return new s(1);
                        for (var i = this, r = 0; r < e.length && 0 === e[r]; r++, i = i.sqr());
                        if (++r < e.length)
                            for (var n = i.sqr(); r < e.length; r++, n = n.sqr()) 0 !== e[r] && (i = i.mul(n));
                        return i
                    }, s.prototype.iushln = function(t) {
                        r("number" == typeof t && t >= 0);
                        var e, i = t % 26,
                            n = (t - i) / 26,
                            s = 67108863 >>> 26 - i << 26 - i;
                        if (0 !== i) {
                            var o = 0;
                            for (e = 0; e < this.length; e++) {
                                var a = this.words[e] & s,
                                    l = (0 | this.words[e]) - a << i;
                                this.words[e] = l | o, o = a >>> 26 - i
                            }
                            o && (this.words[e] = o, this.length++)
                        }
                        if (0 !== n) {
                            for (e = this.length - 1; e >= 0; e--) this.words[e + n] = this.words[e];
                            for (e = 0; e < n; e++) this.words[e] = 0;
                            this.length += n
                        }
                        return this._strip()
                    }, s.prototype.ishln = function(t) {
                        return r(0 === this.negative), this.iushln(t)
                    }, s.prototype.iushrn = function(t, e, i) {
                        var n;
                        r("number" == typeof t && t >= 0), n = e ? (e - e % 26) / 26 : 0;
                        var s = t % 26,
                            o = Math.min((t - s) / 26, this.length),
                            a = 67108863 ^ 67108863 >>> s << s,
                            l = i;
                        if (n -= o, n = Math.max(0, n), l) {
                            for (var h = 0; h < o; h++) l.words[h] = this.words[h];
                            l.length = o
                        }
                        if (0 === o);
                        else if (this.length > o)
                            for (this.length -= o, h = 0; h < this.length; h++) this.words[h] = this.words[h + o];
                        else this.words[0] = 0, this.length = 1;
                        var c = 0;
                        for (h = this.length - 1; h >= 0 && (0 !== c || h >= n); h--) {
                            var u = 0 | this.words[h];
                            this.words[h] = c << 26 - s | u >>> s, c = u & a
                        }
                        return l && 0 !== c && (l.words[l.length++] = c), 0 === this.length && (this.words[0] = 0, this.length = 1), this._strip()
                    }, s.prototype.ishrn = function(t, e, i) {
                        return r(0 === this.negative), this.iushrn(t, e, i)
                    }, s.prototype.shln = function(t) {
                        return this.clone().ishln(t)
                    }, s.prototype.ushln = function(t) {
                        return this.clone().iushln(t)
                    }, s.prototype.shrn = function(t) {
                        return this.clone().ishrn(t)
                    }, s.prototype.ushrn = function(t) {
                        return this.clone().iushrn(t)
                    }, s.prototype.testn = function(t) {
                        r("number" == typeof t && t >= 0);
                        var e = t % 26,
                            i = (t - e) / 26,
                            n = 1 << e;
                        return !(this.length <= i) && !!(this.words[i] & n)
                    }, s.prototype.imaskn = function(t) {
                        r("number" == typeof t && t >= 0);
                        var e = t % 26,
                            i = (t - e) / 26;
                        if (r(0 === this.negative, "imaskn works only with positive numbers"), this.length <= i) return this;
                        if (0 !== e && i++, this.length = Math.min(i, this.length), 0 !== e) {
                            var n = 67108863 ^ 67108863 >>> e << e;
                            this.words[this.length - 1] &= n
                        }
                        return this._strip()
                    }, s.prototype.maskn = function(t) {
                        return this.clone().imaskn(t)
                    }, s.prototype.iaddn = function(t) {
                        return r("number" == typeof t), r(t < 67108864), t < 0 ? this.isubn(-t) : 0 !== this.negative ? 1 === this.length && (0 | this.words[0]) <= t ? (this.words[0] = t - (0 | this.words[0]), this.negative = 0, this) : (this.negative = 0, this.isubn(t), this.negative = 1, this) : this._iaddn(t)
                    }, s.prototype._iaddn = function(t) {
                        this.words[0] += t;
                        for (var e = 0; e < this.length && this.words[e] >= 67108864; e++) this.words[e] -= 67108864, e === this.length - 1 ? this.words[e + 1] = 1 : this.words[e + 1]++;
                        return this.length = Math.max(this.length, e + 1), this
                    }, s.prototype.isubn = function(t) {
                        if (r("number" == typeof t), r(t < 67108864), t < 0) return this.iaddn(-t);
                        if (0 !== this.negative) return this.negative = 0, this.iaddn(t), this.negative = 1, this;
                        if (this.words[0] -= t, 1 === this.length && this.words[0] < 0) this.words[0] = -this.words[0], this.negative = 1;
                        else
                            for (var e = 0; e < this.length && this.words[e] < 0; e++) this.words[e] += 67108864, this.words[e + 1] -= 1;
                        return this._strip()
                    }, s.prototype.addn = function(t) {
                        return this.clone().iaddn(t)
                    }, s.prototype.subn = function(t) {
                        return this.clone().isubn(t)
                    }, s.prototype.iabs = function() {
                        return this.negative = 0, this
                    }, s.prototype.abs = function() {
                        return this.clone().iabs()
                    }, s.prototype._ishlnsubmul = function(t, e, i) {
                        var n, s, o = t.length + i;
                        this._expand(o);
                        var a = 0;
                        for (n = 0; n < t.length; n++) {
                            s = (0 | this.words[n + i]) + a;
                            var l = (0 | t.words[n]) * e;
                            a = ((s -= 67108863 & l) >> 26) - (l / 67108864 | 0), this.words[n + i] = 67108863 & s
                        }
                        for (; n < this.length - i; n++) a = (s = (0 | this.words[n + i]) + a) >> 26, this.words[n + i] = 67108863 & s;
                        if (0 === a) return this._strip();
                        for (r(-1 === a), a = 0, n = 0; n < this.length; n++) a = (s = -(0 | this.words[n]) + a) >> 26, this.words[n] = 67108863 & s;
                        return this.negative = 1, this._strip()
                    }, s.prototype._wordDiv = function(t, e) {
                        var i = (this.length, t.length),
                            r = this.clone(),
                            n = t,
                            o = 0 | n.words[n.length - 1];
                        0 !== (i = 26 - this._countBits(o)) && (n = n.ushln(i), r.iushln(i), o = 0 | n.words[n.length - 1]);
                        var a, l = r.length - n.length;
                        if ("mod" !== e) {
                            (a = new s(null)).length = l + 1, a.words = new Array(a.length);
                            for (var h = 0; h < a.length; h++) a.words[h] = 0
                        }
                        var c = r.clone()._ishlnsubmul(n, 1, l);
                        0 === c.negative && (r = c, a && (a.words[l] = 1));
                        for (var u = l - 1; u >= 0; u--) {
                            var d = 67108864 * (0 | r.words[n.length + u]) + (0 | r.words[n.length + u - 1]);
                            for (d = Math.min(d / o | 0, 67108863), r._ishlnsubmul(n, d, u); 0 !== r.negative;) d--, r.negative = 0, r._ishlnsubmul(n, 1, u), r.isZero() || (r.negative ^= 1);
                            a && (a.words[u] = d)
                        }
                        return a && a._strip(), r._strip(), "div" !== e && 0 !== i && r.iushrn(i), {
                            div: a || null,
                            mod: r
                        }
                    }, s.prototype.divmod = function(t, e, i) {
                        return r(!t.isZero()), this.isZero() ? {
                            div: new s(0),
                            mod: new s(0)
                        } : 0 !== this.negative && 0 === t.negative ? (a = this.neg().divmod(t, e), "mod" !== e && (n = a.div.neg()), "div" !== e && (o = a.mod.neg(), i && 0 !== o.negative && o.iadd(t)), {
                            div: n,
                            mod: o
                        }) : 0 === this.negative && 0 !== t.negative ? (a = this.divmod(t.neg(), e), "mod" !== e && (n = a.div.neg()), {
                            div: n,
                            mod: a.mod
                        }) : 0 != (this.negative & t.negative) ? (a = this.neg().divmod(t.neg(), e), "div" !== e && (o = a.mod.neg(), i && 0 !== o.negative && o.isub(t)), {
                            div: a.div,
                            mod: o
                        }) : t.length > this.length || this.cmp(t) < 0 ? {
                            div: new s(0),
                            mod: this
                        } : 1 === t.length ? "div" === e ? {
                            div: this.divn(t.words[0]),
                            mod: null
                        } : "mod" === e ? {
                            div: null,
                            mod: new s(this.modrn(t.words[0]))
                        } : {
                            div: this.divn(t.words[0]),
                            mod: new s(this.modrn(t.words[0]))
                        } : this._wordDiv(t, e);
                        var n, o, a
                    }, s.prototype.div = function(t) {
                        return this.divmod(t, "div", !1).div
                    }, s.prototype.mod = function(t) {
                        return this.divmod(t, "mod", !1).mod
                    }, s.prototype.umod = function(t) {
                        return this.divmod(t, "mod", !0).mod
                    }, s.prototype.divRound = function(t) {
                        var e = this.divmod(t);
                        if (e.mod.isZero()) return e.div;
                        var i = 0 !== e.div.negative ? e.mod.isub(t) : e.mod,
                            r = t.ushrn(1),
                            n = t.andln(1),
                            s = i.cmp(r);
                        return s < 0 || 1 === n && 0 === s ? e.div : 0 !== e.div.negative ? e.div.isubn(1) : e.div.iaddn(1)
                    }, s.prototype.modrn = function(t) {
                        var e = t < 0;
                        e && (t = -t), r(t <= 67108863);
                        for (var i = (1 << 26) % t, n = 0, s = this.length - 1; s >= 0; s--) n = (i * n + (0 | this.words[s])) % t;
                        return e ? -n : n
                    }, s.prototype.modn = function(t) {
                        return this.modrn(t)
                    }, s.prototype.idivn = function(t) {
                        var e = t < 0;
                        e && (t = -t), r(t <= 67108863);
                        for (var i = 0, n = this.length - 1; n >= 0; n--) {
                            var s = (0 | this.words[n]) + 67108864 * i;
                            this.words[n] = s / t | 0, i = s % t
                        }
                        return this._strip(), e ? this.ineg() : this
                    }, s.prototype.divn = function(t) {
                        return this.clone().idivn(t)
                    }, s.prototype.egcd = function(t) {
                        r(0 === t.negative), r(!t.isZero());
                        var e = this,
                            i = t.clone();
                        e = 0 !== e.negative ? e.umod(t) : e.clone();
                        for (var n = new s(1), o = new s(0), a = new s(0), l = new s(1), h = 0; e.isEven() && i.isEven();) e.iushrn(1), i.iushrn(1), ++h;
                        for (var c = i.clone(), u = e.clone(); !e.isZero();) {
                            for (var d = 0, C = 1; 0 == (e.words[0] & C) && d < 26; ++d, C <<= 1);
                            if (d > 0)
                                for (e.iushrn(d); d-- > 0;)(n.isOdd() || o.isOdd()) && (n.iadd(c), o.isub(u)), n.iushrn(1), o.iushrn(1);
                            for (var f = 0, B = 1; 0 == (i.words[0] & B) && f < 26; ++f, B <<= 1);
                            if (f > 0)
                                for (i.iushrn(f); f-- > 0;)(a.isOdd() || l.isOdd()) && (a.iadd(c), l.isub(u)), a.iushrn(1), l.iushrn(1);
                            e.cmp(i) >= 0 ? (e.isub(i), n.isub(a), o.isub(l)) : (i.isub(e), a.isub(n), l.isub(o))
                        }
                        return {
                            a: a,
                            b: l,
                            gcd: i.iushln(h)
                        }
                    }, s.prototype._invmp = function(t) {
                        r(0 === t.negative), r(!t.isZero());
                        var e = this,
                            i = t.clone();
                        e = 0 !== e.negative ? e.umod(t) : e.clone();
                        for (var n, o = new s(1), a = new s(0), l = i.clone(); e.cmpn(1) > 0 && i.cmpn(1) > 0;) {
                            for (var h = 0, c = 1; 0 == (e.words[0] & c) && h < 26; ++h, c <<= 1);
                            if (h > 0)
                                for (e.iushrn(h); h-- > 0;) o.isOdd() && o.iadd(l), o.iushrn(1);
                            for (var u = 0, d = 1; 0 == (i.words[0] & d) && u < 26; ++u, d <<= 1);
                            if (u > 0)
                                for (i.iushrn(u); u-- > 0;) a.isOdd() && a.iadd(l), a.iushrn(1);
                            e.cmp(i) >= 0 ? (e.isub(i), o.isub(a)) : (i.isub(e), a.isub(o))
                        }
                        return (n = 0 === e.cmpn(1) ? o : a).cmpn(0) < 0 && n.iadd(t), n
                    }, s.prototype.gcd = function(t) {
                        if (this.isZero()) return t.abs();
                        if (t.isZero()) return this.abs();
                        var e = this.clone(),
                            i = t.clone();
                        e.negative = 0, i.negative = 0;
                        for (var r = 0; e.isEven() && i.isEven(); r++) e.iushrn(1), i.iushrn(1);
                        for (;;) {
                            for (; e.isEven();) e.iushrn(1);
                            for (; i.isEven();) i.iushrn(1);
                            var n = e.cmp(i);
                            if (n < 0) {
                                var s = e;
                                e = i, i = s
                            } else if (0 === n || 0 === i.cmpn(1)) break;
                            e.isub(i)
                        }
                        return i.iushln(r)
                    }, s.prototype.invm = function(t) {
                        return this.egcd(t).a.umod(t)
                    }, s.prototype.isEven = function() {
                        return 0 == (1 & this.words[0])
                    }, s.prototype.isOdd = function() {
                        return 1 == (1 & this.words[0])
                    }, s.prototype.andln = function(t) {
                        return this.words[0] & t
                    }, s.prototype.bincn = function(t) {
                        r("number" == typeof t);
                        var e = t % 26,
                            i = (t - e) / 26,
                            n = 1 << e;
                        if (this.length <= i) return this._expand(i + 1), this.words[i] |= n, this;
                        for (var s = n, o = i; 0 !== s && o < this.length; o++) {
                            var a = 0 | this.words[o];
                            s = (a += s) >>> 26, a &= 67108863, this.words[o] = a
                        }
                        return 0 !== s && (this.words[o] = s, this.length++), this
                    }, s.prototype.isZero = function() {
                        return 1 === this.length && 0 === this.words[0]
                    }, s.prototype.cmpn = function(t) {
                        var e, i = t < 0;
                        if (0 !== this.negative && !i) return -1;
                        if (0 === this.negative && i) return 1;
                        if (this._strip(), this.length > 1) e = 1;
                        else {
                            i && (t = -t), r(t <= 67108863, "Number is too big");
                            var n = 0 | this.words[0];
                            e = n === t ? 0 : n < t ? -1 : 1
                        }
                        return 0 !== this.negative ? 0 | -e : e
                    }, s.prototype.cmp = function(t) {
                        if (0 !== this.negative && 0 === t.negative) return -1;
                        if (0 === this.negative && 0 !== t.negative) return 1;
                        var e = this.ucmp(t);
                        return 0 !== this.negative ? 0 | -e : e
                    }, s.prototype.ucmp = function(t) {
                        if (this.length > t.length) return 1;
                        if (this.length < t.length) return -1;
                        for (var e = 0, i = this.length - 1; i >= 0; i--) {
                            var r = 0 | this.words[i],
                                n = 0 | t.words[i];
                            if (r !== n) {
                                r < n ? e = -1 : r > n && (e = 1);
                                break
                            }
                        }
                        return e
                    }, s.prototype.gtn = function(t) {
                        return 1 === this.cmpn(t)
                    }, s.prototype.gt = function(t) {
                        return 1 === this.cmp(t)
                    }, s.prototype.gten = function(t) {
                        return this.cmpn(t) >= 0
                    }, s.prototype.gte = function(t) {
                        return this.cmp(t) >= 0
                    }, s.prototype.ltn = function(t) {
                        return -1 === this.cmpn(t)
                    }, s.prototype.lt = function(t) {
                        return -1 === this.cmp(t)
                    }, s.prototype.lten = function(t) {
                        return this.cmpn(t) <= 0
                    }, s.prototype.lte = function(t) {
                        return this.cmp(t) <= 0
                    }, s.prototype.eqn = function(t) {
                        return 0 === this.cmpn(t)
                    }, s.prototype.eq = function(t) {
                        return 0 === this.cmp(t)
                    }, s.red = function(t) {
                        return new b(t)
                    }, s.prototype.toRed = function(t) {
                        return r(!this.red, "Already a number in reduction context"), r(0 === this.negative, "red works only with positives"), t.convertTo(this)._forceRed(t)
                    }, s.prototype.fromRed = function() {
                        return r(this.red, "fromRed works only with numbers in reduction context"), this.red.convertFrom(this)
                    }, s.prototype._forceRed = function(t) {
                        return this.red = t, this
                    }, s.prototype.forceRed = function(t) {
                        return r(!this.red, "Already a number in reduction context"), this._forceRed(t)
                    }, s.prototype.redAdd = function(t) {
                        return r(this.red, "redAdd works only with red numbers"), this.red.add(this, t)
                    }, s.prototype.redIAdd = function(t) {
                        return r(this.red, "redIAdd works only with red numbers"), this.red.iadd(this, t)
                    }, s.prototype.redSub = function(t) {
                        return r(this.red, "redSub works only with red numbers"), this.red.sub(this, t)
                    }, s.prototype.redISub = function(t) {
                        return r(this.red, "redISub works only with red numbers"), this.red.isub(this, t)
                    }, s.prototype.redShl = function(t) {
                        return r(this.red, "redShl works only with red numbers"), this.red.shl(this, t)
                    }, s.prototype.redMul = function(t) {
                        return r(this.red, "redMul works only with red numbers"), this.red._verify2(this, t), this.red.mul(this, t)
                    }, s.prototype.redIMul = function(t) {
                        return r(this.red, "redMul works only with red numbers"), this.red._verify2(this, t), this.red.imul(this, t)
                    }, s.prototype.redSqr = function() {
                        return r(this.red, "redSqr works only with red numbers"), this.red._verify1(this), this.red.sqr(this)
                    }, s.prototype.redISqr = function() {
                        return r(this.red, "redISqr works only with red numbers"), this.red._verify1(this), this.red.isqr(this)
                    }, s.prototype.redSqrt = function() {
                        return r(this.red, "redSqrt works only with red numbers"), this.red._verify1(this), this.red.sqrt(this)
                    }, s.prototype.redInvm = function() {
                        return r(this.red, "redInvm works only with red numbers"), this.red._verify1(this), this.red.invm(this)
                    }, s.prototype.redNeg = function() {
                        return r(this.red, "redNeg works only with red numbers"), this.red._verify1(this), this.red.neg(this)
                    }, s.prototype.redPow = function(t) {
                        return r(this.red && !t.red, "redPow(normalNum)"), this.red._verify1(this), this.red.pow(this, t)
                    };
                    var p = {
                        k256: null,
                        p224: null,
                        p192: null,
                        p25519: null
                    };

                    function g(t, e) {
                        this.name = t, this.p = new s(e, 16), this.n = this.p.bitLength(), this.k = new s(1).iushln(this.n).isub(this.p), this.tmp = this._tmp()
                    }

                    function A() {
                        g.call(this, "k256", "ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffe fffffc2f")
                    }

                    function y() {
                        g.call(this, "p224", "ffffffff ffffffff ffffffff ffffffff 00000000 00000000 00000001")
                    }

                    function E() {
                        g.call(this, "p192", "ffffffff ffffffff ffffffff fffffffe ffffffff ffffffff")
                    }

                    function D() {
                        g.call(this, "25519", "7fffffffffffffff ffffffffffffffff ffffffffffffffff ffffffffffffffed")
                    }

                    function b(t) {
                        if ("string" == typeof t) {
                            var e = s._prime(t);
                            this.m = e.p, this.prime = e
                        } else r(t.gtn(1), "modulus must be greater than 1"), this.m = t, this.prime = null
                    }

                    function v(t) {
                        b.call(this, t), this.shift = this.m.bitLength(), this.shift % 26 != 0 && (this.shift += 26 - this.shift % 26), this.r = new s(1).iushln(this.shift), this.r2 = this.imod(this.r.sqr()), this.rinv = this.r._invmp(this.m), this.minv = this.rinv.mul(this.r).isubn(1).div(this.m), this.minv = this.minv.umod(this.r), this.minv = this.r.sub(this.minv)
                    }
                    g.prototype._tmp = function() {
                        var t = new s(null);
                        return t.words = new Array(Math.ceil(this.n / 13)), t
                    }, g.prototype.ireduce = function(t) {
                        var e, i = t;
                        do {
                            this.split(i, this.tmp), e = (i = (i = this.imulK(i)).iadd(this.tmp)).bitLength()
                        } while (e > this.n);
                        var r = e < this.n ? -1 : i.ucmp(this.p);
                        return 0 === r ? (i.words[0] = 0, i.length = 1) : r > 0 ? i.isub(this.p) : i._strip(), i
                    }, g.prototype.split = function(t, e) {
                        t.iushrn(this.n, 0, e)
                    }, g.prototype.imulK = function(t) {
                        return t.imul(this.k)
                    }, n(A, g), A.prototype.split = function(t, e) {
                        for (var i = Math.min(t.length, 9), r = 0; r < i; r++) e.words[r] = t.words[r];
                        if (e.length = i, t.length <= 9) return t.words[0] = 0, void(t.length = 1);
                        var n = t.words[9];
                        for (e.words[e.length++] = 4194303 & n, r = 10; r < t.length; r++) {
                            var s = 0 | t.words[r];
                            t.words[r - 10] = (4194303 & s) << 4 | n >>> 22, n = s
                        }
                        n >>>= 22, t.words[r - 10] = n, 0 === n && t.length > 10 ? t.length -= 10 : t.length -= 9
                    }, A.prototype.imulK = function(t) {
                        t.words[t.length] = 0, t.words[t.length + 1] = 0, t.length += 2;
                        for (var e = 0, i = 0; i < t.length; i++) {
                            var r = 0 | t.words[i];
                            e += 977 * r, t.words[i] = 67108863 & e, e = 64 * r + (e / 67108864 | 0)
                        }
                        return 0 === t.words[t.length - 1] && (t.length--, 0 === t.words[t.length - 1] && t.length--), t
                    }, n(y, g), n(E, g), n(D, g), D.prototype.imulK = function(t) {
                        for (var e = 0, i = 0; i < t.length; i++) {
                            var r = 19 * (0 | t.words[i]) + e,
                                n = 67108863 & r;
                            r >>>= 26, t.words[i] = n, e = r
                        }
                        return 0 !== e && (t.words[t.length++] = e), t
                    }, s._prime = function(t) {
                        if (p[t]) return p[t];
                        var e;
                        if ("k256" === t) e = new A;
                        else if ("p224" === t) e = new y;
                        else if ("p192" === t) e = new E;
                        else {
                            if ("p25519" !== t) throw new Error("Unknown prime " + t);
                            e = new D
                        }
                        return p[t] = e, e
                    }, b.prototype._verify1 = function(t) {
                        r(0 === t.negative, "red works only with positives"), r(t.red, "red works only with red numbers")
                    }, b.prototype._verify2 = function(t, e) {
                        r(0 == (t.negative | e.negative), "red works only with positives"), r(t.red && t.red === e.red, "red works only with red numbers")
                    }, b.prototype.imod = function(t) {
                        return this.prime ? this.prime.ireduce(t)._forceRed(this) : (h(t, t.umod(this.m)._forceRed(this)), t)
                    }, b.prototype.neg = function(t) {
                        return t.isZero() ? t.clone() : this.m.sub(t)._forceRed(this)
                    }, b.prototype.add = function(t, e) {
                        this._verify2(t, e);
                        var i = t.add(e);
                        return i.cmp(this.m) >= 0 && i.isub(this.m), i._forceRed(this)
                    }, b.prototype.iadd = function(t, e) {
                        this._verify2(t, e);
                        var i = t.iadd(e);
                        return i.cmp(this.m) >= 0 && i.isub(this.m), i
                    }, b.prototype.sub = function(t, e) {
                        this._verify2(t, e);
                        var i = t.sub(e);
                        return i.cmpn(0) < 0 && i.iadd(this.m), i._forceRed(this)
                    }, b.prototype.isub = function(t, e) {
                        this._verify2(t, e);
                        var i = t.isub(e);
                        return i.cmpn(0) < 0 && i.iadd(this.m), i
                    }, b.prototype.shl = function(t, e) {
                        return this._verify1(t), this.imod(t.ushln(e))
                    }, b.prototype.imul = function(t, e) {
                        return this._verify2(t, e), this.imod(t.imul(e))
                    }, b.prototype.mul = function(t, e) {
                        return this._verify2(t, e), this.imod(t.mul(e))
                    }, b.prototype.isqr = function(t) {
                        return this.imul(t, t.clone())
                    }, b.prototype.sqr = function(t) {
                        return this.mul(t, t)
                    }, b.prototype.sqrt = function(t) {
                        if (t.isZero()) return t.clone();
                        var e = this.m.andln(3);
                        if (r(e % 2 == 1), 3 === e) {
                            var i = this.m.add(new s(1)).iushrn(2);
                            return this.pow(t, i)
                        }
                        for (var n = this.m.subn(1), o = 0; !n.isZero() && 0 === n.andln(1);) o++, n.iushrn(1);
                        r(!n.isZero());
                        var a = new s(1).toRed(this),
                            l = a.redNeg(),
                            h = this.m.subn(1).iushrn(1),
                            c = this.m.bitLength();
                        for (c = new s(2 * c * c).toRed(this); 0 !== this.pow(c, h).cmp(l);) c.redIAdd(l);
                        for (var u = this.pow(c, n), d = this.pow(t, n.addn(1).iushrn(1)), C = this.pow(t, n), f = o; 0 !== C.cmp(a);) {
                            for (var B = C, F = 0; 0 !== B.cmp(a); F++) B = B.redSqr();
                            r(F < f);
                            var w = this.pow(u, new s(1).iushln(f - F - 1));
                            d = d.redMul(w), u = w.redSqr(), C = C.redMul(u), f = F
                        }
                        return d
                    }, b.prototype.invm = function(t) {
                        var e = t._invmp(this.m);
                        return 0 !== e.negative ? (e.negative = 0, this.imod(e).redNeg()) : this.imod(e)
                    }, b.prototype.pow = function(t, e) {
                        if (e.isZero()) return new s(1).toRed(this);
                        if (0 === e.cmpn(1)) return t.clone();
                        var i = new Array(16);
                        i[0] = new s(1).toRed(this), i[1] = t;
                        for (var r = 2; r < i.length; r++) i[r] = this.mul(i[r - 1], t);
                        var n = i[0],
                            o = 0,
                            a = 0,
                            l = e.bitLength() % 26;
                        for (0 === l && (l = 26), r = e.length - 1; r >= 0; r--) {
                            for (var h = e.words[r], c = l - 1; c >= 0; c--) {
                                var u = h >> c & 1;
                                n !== i[0] && (n = this.sqr(n)), 0 !== u || 0 !== o ? (o <<= 1, o |= u, (4 === ++a || 0 === r && 0 === c) && (n = this.mul(n, i[o]), a = 0, o = 0)) : a = 0
                            }
                            l = 26
                        }
                        return n
                    }, b.prototype.convertTo = function(t) {
                        var e = t.umod(this.m);
                        return e === t ? e.clone() : e
                    }, b.prototype.convertFrom = function(t) {
                        var e = t.clone();
                        return e.red = null, e
                    }, s.mont = function(t) {
                        return new v(t)
                    }, n(v, b), v.prototype.convertTo = function(t) {
                        return this.imod(t.ushln(this.shift))
                    }, v.prototype.convertFrom = function(t) {
                        var e = this.imod(t.mul(this.rinv));
                        return e.red = null, e
                    }, v.prototype.imul = function(t, e) {
                        if (t.isZero() || e.isZero()) return t.words[0] = 0, t.length = 1, t;
                        var i = t.imul(e),
                            r = i.maskn(this.shift).mul(this.minv).imaskn(this.shift).mul(this.m),
                            n = i.isub(r).iushrn(this.shift),
                            s = n;
                        return n.cmp(this.m) >= 0 ? s = n.isub(this.m) : n.cmpn(0) < 0 && (s = n.iadd(this.m)), s._forceRed(this)
                    }, v.prototype.mul = function(t, e) {
                        if (t.isZero() || e.isZero()) return new s(0)._forceRed(this);
                        var i = t.mul(e),
                            r = i.maskn(this.shift).mul(this.minv).imaskn(this.shift).mul(this.m),
                            n = i.isub(r).iushrn(this.shift),
                            o = n;
                        return n.cmp(this.m) >= 0 ? o = n.isub(this.m) : n.cmpn(0) < 0 && (o = n.iadd(this.m)), o._forceRed(this)
                    }, v.prototype.invm = function(t) {
                        return this.imod(t._invmp(this.m).mul(this.r2))._forceRed(this)
                    }
                }(t, this)
            }).call(this, i(81)(t))
        },
        3999: function(t, e, i) {
            const {
                crc16: r,
                hexToBytes: n,
                bytesToHex: s,
                stringToBytes: o,
                base64toString: a,
                stringToBase64: l
            } = i(651);
            class Address {
                static isValid(t) {
                    try {
                        return new Address(t), !0
                    } catch (t) {
                        return !1
                    }
                }
                constructor(t) {
                    if (null == t) throw "Invalid address";
                    if (t instanceof Address) return this.wc = t.wc, this.hashPart = t.hashPart, this.isTestOnly = t.isTestOnly, this.isUserFriendly = t.isUserFriendly, this.isBounceable = t.isBounceable, void(this.isUrlSafe = t.isUrlSafe);
                    if (t.search(/\-/) > 0 || t.search(/_/) > 0 ? (this.isUrlSafe = !0, t = t.replace(/\-/g, "+").replace(/_/g, "/")) : this.isUrlSafe = !1, t.indexOf(":") > -1) {
                        const e = t.split(":");
                        if (2 !== e.length) throw new Error("Invalid address " + t);
                        const i = parseInt(e[0]);
                        if (0 !== i && -1 !== i) throw new Error("Invalid address wc " + t);
                        const r = e[1];
                        if (64 !== r.length) throw new Error("Invalid address hex " + t);
                        this.isUserFriendly = !1, this.wc = i, this.hashPart = n(r), this.isTestOnly = !1, this.isBounceable = !1
                    } else {
                        this.isUserFriendly = !0;
                        const e = function(t) {
                            if (48 !== t.length) throw new Error("User-friendly address should contain strictly 48 characters");
                            const e = o(a(t));
                            if (36 !== e.length) throw "Unknown address type: byte length is not equal to 36";
                            const i = e.slice(0, 34),
                                n = e.slice(34, 36),
                                s = r(i);
                            if (s[0] !== n[0] || s[1] !== n[1]) throw "Wrong crc16 hashsum";
                            let l = i[0],
                                h = !1,
                                c = !1;
                            if (128 & l && (h = !0, l ^= 128), 17 !== l && 81 !== l) throw "Unknown address tag";
                            c = 17 === l;
                            let u = null;
                            if (u = 255 === i[1] ? -1 : i[1], 0 !== u && -1 !== u) throw new Error("Invalid address wc " + u);
                            return {
                                isTestOnly: h,
                                isBounceable: c,
                                workchain: u,
                                hashPart: i.slice(2, 34)
                            }
                        }(t);
                        this.wc = e.workchain, this.hashPart = e.hashPart, this.isTestOnly = e.isTestOnly, this.isBounceable = e.isBounceable
                    }
                }
                toString(t, e, i, n) {
                    if (void 0 === t && (t = this.isUserFriendly), void 0 === e && (e = this.isUrlSafe), void 0 === i && (i = this.isBounceable), void 0 === n && (n = this.isTestOnly), t) {
                        let t = i ? 17 : 81;
                        n && (t |= 128);
                        const s = new Int8Array(34);
                        s[0] = t, s[1] = this.wc, s.set(this.hashPart, 2);
                        const o = new Uint8Array(36);
                        o.set(s), o.set(r(s), 34);
                        let a = l(String.fromCharCode.apply(null, new Uint8Array(o)));
                        return e && (a = a.replace(/\+/g, "-").replace(/\//g, "_")), a
                    }
                    return this.wc + ":" + s(this.hashPart)
                }
            }
            t.exports.default = Address
        },
        4e3: function(t, e, i) {
            const {
                hexToBytes: r,
                bytesToHex: n
            } = i(651);
            class AdnlAddress {
                static isValid(t) {
                    try {
                        return new AdnlAddress(t), !0
                    } catch (t) {
                        return !1
                    }
                }
                constructor(t) {
                    if (null == t) throw "Invalid address";
                    if (t instanceof AdnlAddress) this.bytes = t.bytes;
                    else if (t instanceof Uint8Array) {
                        if (32 !== t.length) throw new Error("invalid adnl bytes length");
                        this.bytes = t
                    } else {
                        if ("string" != typeof t) throw new Error("unsupported type");
                        if (64 !== t.length) throw new Error("invalid adnl hex length");
                        this.bytes = r(t)
                    }
                }
                toHex() {
                    let t = n(this.bytes);
                    for (; t.length < 64;) t = "0" + t;
                    return t
                }
            }
            t.exports.default = AdnlAddress
        },
        4001: function(t, e, i) {
            const {
                hexToBytes: r,
                bytesToHex: n
            } = i(651);
            class StorageBagId {
                static isValid(t) {
                    try {
                        return new StorageBagId(t), !0
                    } catch (t) {
                        return !1
                    }
                }
                constructor(t) {
                    if (null == t) throw "Invalid address";
                    if (t instanceof StorageBagId) this.bytes = t.bytes;
                    else if (t instanceof Uint8Array) {
                        if (32 !== t.length) throw new Error("invalid bag id bytes length");
                        this.bytes = t
                    } else {
                        if ("string" != typeof t) throw new Error("unsupported type");
                        if (64 !== t.length) throw new Error("invalid bag id hex length");
                        this.bytes = r(t)
                    }
                }
                toHex() {
                    let t = n(this.bytes);
                    for (; t.length < 64;) t = "0" + t;
                    return t
                }
            }
            t.exports.default = StorageBagId
        },
        4002: function(t, e, i) {
            const {
                BitString: r
            } = i(1112), {
                bytesToBase64: n,
                compareBytes: s,
                concatBytes: o,
                crc32c: a,
                hexToBytes: l,
                readNBytesUIntFromArray: h,
                sha256: c,
                bytesToHex: u
            } = i(79), {
                Slice: d
            } = i(1987), C = l("B5EE9C72"), f = l("68ff65f3"), B = l("acc3a728");
            class Cell {
                constructor() {
                    this.bits = new r(1023), this.refs = [], this.isExotic = !1
                }
                static fromBoc(t) {
                    return w(t)
                }
                static oneFromBoc(t) {
                    const e = w(t);
                    if (1 !== e.length) throw new Error("expected 1 root cell but have " + e.length);
                    return e[0]
                }
                writeCell(t) {
                    this.bits.writeBitString(t.bits), this.refs = this.refs.concat(t.refs)
                }
                getMaxLevel() {
                    let t = 0;
                    for (let e in this.refs) {
                        const i = this.refs[e];
                        i.getMaxLevel() > t && (t = i.getMaxLevel())
                    }
                    return t
                }
                isExplicitlyStoredHashes() {
                    return 0
                }
                getMaxDepth() {
                    let t = 0;
                    if (this.refs.length > 0) {
                        for (let e in this.refs) {
                            const i = this.refs[e];
                            i.getMaxDepth() > t && (t = i.getMaxDepth())
                        }
                        t += 1
                    }
                    return t
                }
                getMaxDepthAsArray() {
                    const t = this.getMaxDepth(),
                        e = Uint8Array.from({
                            length: 2
                        }, () => 0);
                    return e[1] = t % 256, e[0] = Math.floor(t / 256), e
                }
                getRefsDescriptor() {
                    const t = Uint8Array.from({
                        length: 1
                    }, () => 0);
                    return t[0] = this.refs.length + 8 * this.isExotic + 32 * this.getMaxLevel(), t
                }
                getBitsDescriptor() {
                    const t = Uint8Array.from({
                        length: 1
                    }, () => 0);
                    return t[0] = Math.ceil(this.bits.cursor / 8) + Math.floor(this.bits.cursor / 8), t
                }
                getDataWithDescriptors() {
                    const t = this.getRefsDescriptor(),
                        e = this.getBitsDescriptor(),
                        i = this.bits.getTopUppedArray();
                    return o(o(t, e), i)
                }
                async getRepr() {
                    const t = [];
                    t.push(this.getDataWithDescriptors());
                    for (let e in this.refs) {
                        const i = this.refs[e];
                        t.push(i.getMaxDepthAsArray())
                    }
                    for (let e in this.refs) {
                        const i = this.refs[e];
                        t.push(await i.hash())
                    }
                    let e = new Uint8Array;
                    for (let i in t) {
                        const r = t[i];
                        e = o(e, r)
                    }
                    return e
                }
                async hash() {
                    return new Uint8Array(await c(await this.getRepr()))
                }
                beginParse() {
                    const t = this.refs.map(t => t.beginParse());
                    return new d(this.bits.array.slice(), this.bits.length, t)
                }
                print(t) {
                    let e = (t = t || "") + "x{" + this.bits.toHex() + "}\n";
                    for (let i in this.refs) {
                        e += this.refs[i].print(t + " ")
                    }
                    return e
                }
                async toBoc(t = !0, e = !0, i = !1, n = 0) {
                    const s = await this.treeWalk(),
                        l = s[0],
                        h = s[1],
                        c = l.length,
                        u = c.toString(2).length,
                        d = Math.min(Math.ceil(u / 8), 1);
                    let f = 0,
                        B = [];
                    for (let t of l) B.push(f), f += await t[1].bocSerializationSize(h, d);
                    const F = f.toString(2).length,
                        w = Math.max(Math.ceil(F / 8), 1),
                        m = new r(1247 * l.length);
                    m.writeBytes(C), m.writeBitArray([t, e, i]), m.writeUint(n, 2), m.writeUint(d, 3), m.writeUint8(w), m.writeUint(c, 8 * d), m.writeUint(1, 8 * d), m.writeUint(0, 8 * d), m.writeUint(f, 8 * w), m.writeUint(0, 8 * d), t && l.forEach((t, e) => m.writeUint(B[e], 8 * w));
                    for (let t of l) {
                        const e = await t[1].serializeForBoc(h, d);
                        m.writeBytes(e)
                    }
                    let p = m.getTopUppedArray();
                    return e && (p = o(p, a(p))), p
                }
                async serializeForBoc(t, e) {
                    const i = [];
                    if (i.push(this.getDataWithDescriptors()), this.isExplicitlyStoredHashes()) throw new Error("Cell hashes explicit storing is not implemented");
                    for (let e in this.refs) {
                        const r = this.refs[e];
                        let n = t[await r.hash()].toString(16);
                        n.length % 2 && (n = "0" + n);
                        const s = l(n);
                        i.push(s)
                    }
                    let r = new Uint8Array;
                    for (let t in i) {
                        const e = i[t];
                        r = o(r, e)
                    }
                    return r
                }
                async bocSerializationSize(t, e) {
                    return (await this.serializeForBoc(t, e)).length
                }
                async treeWalk() {
                    return async function t(e, i, r, n = null) {
                        const s = await e.hash();
                        if (s in r) return n && r[n] > r[s] && await async function t(e, i, r) {
                            const n = e[r];
                            for (let t in e) e[t] > n && (e[t] = e[t] - 1);
                            e[r] = i.length - 1;
                            const s = i.splice(n, 1)[0];
                            i.push(s);
                            for (let r of s[1].refs) await t(e, i, await r.hash())
                        }(r, i, s), [i, r];
                        r[s] = i.length, i.push([s, e]);
                        for (let n of e.refs) {
                            const e = await t(n, i, r, s);
                            i = e[0], r = e[1]
                        }
                        return [i, r]
                    }(this, [], {})
                }
            }

            function F(t, e) {
                if (t.length < 2) throw "Not enough bytes to encode cell descriptors";
                const i = t[0],
                    r = t[1];
                t = t.slice(2);
                Math.floor(i / 32);
                const n = 8 & i,
                    s = i % 8,
                    o = Math.ceil(r / 2),
                    a = !(r % 2);
                let l = new Cell;
                if (l.isExotic = n, t.length < o + e * s) throw "Not enough bytes to encode cell data";
                l.bits.setTopUppedArray(t.slice(0, o), a), t = t.slice(o);
                for (let i = 0; i < s; i++) l.refs.push(h(e, t)), t = t.slice(e);
                return {
                    cell: l,
                    residue: t
                }
            }

            function w(t) {
                "string" == typeof t && (t = l(t));
                const e = function(t) {
                    if (t.length < 5) throw "Not enough bytes for magic prefix";
                    const e = t,
                        i = t.slice(0, 4);
                    let r, n, o, l, c;
                    if (t = t.slice(4), s(i, C)) {
                        const e = t[0];
                        r = 128 & e, n = 64 & e, o = 32 & e, l = 2 * (16 & e) + (8 & e), c = e % 8
                    }
                    if (s(i, f) && (r = 1, n = 0, o = 0, l = 0, c = t[0]), s(i, B) && (r = 1, n = 1, o = 0, l = 0, c = t[0]), (t = t.slice(1)).length < 1 + 5 * c) throw "Not enough bytes for encoding cells counters";
                    const u = t[0];
                    t = t.slice(1);
                    const d = h(c, t);
                    t = t.slice(c);
                    const F = h(c, t);
                    t = t.slice(c);
                    const w = h(c, t);
                    t = t.slice(c);
                    const m = h(u, t);
                    if ((t = t.slice(u)).length < F * c) throw "Not enough bytes for encoding root cells hashes";
                    let p = [];
                    for (let e = 0; e < F; e++) p.push(h(c, t)), t = t.slice(c);
                    let g = !1;
                    if (r) {
                        if (g = [], t.length < u * d) throw "Not enough bytes for index encoding";
                        for (let e = 0; e < d; e++) g.push(h(u, t)), t = t.slice(u)
                    }
                    if (t.length < m) throw "Not enough bytes for cells data";
                    const A = t.slice(0, m);
                    if (t = t.slice(m), n) {
                        if (t.length < 4) throw "Not enough bytes for crc32c hashsum";
                        const i = e.length;
                        if (!s(a(e.slice(0, i - 4)), t.slice(0, 4))) throw "Crc32c hashsum mismatch";
                        t = t.slice(4)
                    }
                    if (t.length) throw "Too much bytes in BoC serialization";
                    return {
                        has_idx: r,
                        hash_crc32: n,
                        has_cache_bits: o,
                        flags: l,
                        size_bytes: c,
                        off_bytes: u,
                        cells_num: d,
                        roots_num: F,
                        absent_num: w,
                        tot_cells_size: m,
                        root_list: p,
                        index: g,
                        cells_data: A
                    }
                }(t);
                let i = e.cells_data,
                    r = [];
                for (let t = 0; t < e.cells_num; t++) {
                    let t = F(i, e.size_bytes);
                    i = t.residue, r.push(t.cell)
                }
                for (let t = e.cells_num - 1; t >= 0; t--) {
                    let e = r[t];
                    for (let i = 0; i < e.refs.length; i++) {
                        const n = e.refs[i];
                        if (n < t) throw "Topological order is broken";
                        e.refs[i] = r[n]
                    }
                }
                let n = [];
                for (let t of e.root_list) n.push(r[t]);
                return n
            }
            t.exports = {
                Cell: Cell
            }
        },
        4003: function(t, e, i) {
            const {
                Cell: r
            } = i(80), {
                Address: n,
                BN: s,
                bytesToHex: o
            } = i(79), {
                Contract: a
            } = i(133);
            t.exports = class AppTon {
                constructor(t, e) {
                    this.transport = t, this.ton = e, this.ADDRESS_FORMAT_HEX = 0, this.ADDRESS_FORMAT_USER_FRIENDLY = 1, this.ADDRESS_FORMAT_URL_SAFE = 2, this.ADDRESS_FORMAT_BOUNCEABLE = 4, this.ADDRESS_FORMAT_TEST_ONLY = 8
                }
                async getAppConfiguration() {
                    const t = await this.transport.send(224, 1, 0, 0);
                    return {
                        version: t[0] + "." + t[1] + "." + t[2]
                    }
                }
                async getPublicKey(t, e) {
                    const i = Buffer.alloc(4);
                    i.writeInt32BE(t);
                    const r = await this.transport.send(224, 2, e ? 1 : 0, 0, i),
                        n = r[0];
                    return {
                        publicKey: new Uint8Array(r.slice(1, 1 + n))
                    }
                }
                async getAddress(t, e, i) {
                    const r = Buffer.alloc(4);
                    r.writeInt32BE(t);
                    const s = await this.transport.send(224, 5, e ? 1 : 0, i, r),
                        a = s[0],
                        l = new Uint8Array(s.slice(1, 1 + a));
                    return {
                        address: new n("0:" + o(l))
                    }
                }
                async sign(t, e) {
                    const i = Buffer.alloc(4);
                    i.writeInt32BE(t);
                    const r = Buffer.concat([i, Buffer.from(e)]),
                        n = await this.transport.send(224, 3, 0, 0, r),
                        s = n[0];
                    return {
                        signature: n.slice(1, 1 + s)
                    }
                }
                async transfer(t, e, i, n, s, o) {
                    const l = await e.createTransferMessage(null, i, n, s, null, 3, !0),
                        h = Buffer.alloc(4);
                    h.writeInt32BE(t);
                    const c = Buffer.concat([h, Buffer.from(await l.signingMessage.toBoc())]),
                        u = await this.transport.send(224, 4, o, 0, c),
                        d = u[0],
                        C = u.slice(1, 1 + d),
                        f = new Uint8Array(C),
                        B = new r;
                    B.bits.writeBytes(f), B.writeCell(l.signingMessage);
                    let F = null,
                        w = null,
                        m = null;
                    if (0 === s) {
                        const t = await e.createStateInit();
                        F = t.stateInit, w = t.code, m = t.data
                    }
                    const p = await e.getAddress(),
                        g = a.createExternalMessageHeader(p),
                        A = a.createCommonMsgInfo(g, F, B),
                        y = new Promise(t => {
                            t({
                                address: p,
                                message: A,
                                body: B,
                                signature: f,
                                signingMessage: l.signingMessage,
                                stateInit: F,
                                code: w,
                                data: m
                            })
                        });
                    return a.createMethod(this.ton.provider, y)
                }
            }
        },
        4004: function(t, e, i) {
            const {
                Cell: r
            } = i(80), {
                base64ToBytes: n
            } = i(79), s = i(4005).default;
            "undefined" == typeof fetch && (fetch = i(4006));
            class HttpProvider {
                constructor(t, e) {
                    this.host = t || "https://toncenter.com/api/v2/jsonRPC", this.options = e || {}
                }
                sendImpl(t, e) {
                    const i = {
                        "Content-Type": "application/json"
                    };
                    return this.options.apiKey && (i["X-API-Key"] = this.options.apiKey), fetch(t, {
                        method: "POST",
                        headers: i,
                        body: JSON.stringify(e)
                    }).then(t => t.json()).then(({
                        result: t,
                        error: e
                    }) => t || Promise.reject(e))
                }
                send(t, e) {
                    return this.sendImpl(this.host, {
                        id: 1,
                        jsonrpc: "2.0",
                        method: t,
                        params: e
                    })
                }
                async getAddressInfo(t) {
                    return this.send("getAddressInformation", {
                        address: t
                    })
                }
                async getExtendedAddressInfo(t) {
                    return this.send("getExtendedAddressInformation", {
                        address: t
                    })
                }
                async getWalletInfo(t) {
                    return this.send("getWalletInformation", {
                        address: t
                    })
                }
                async getTransactions(t, e = 20, i, r, n, s) {
                    return this.send("getTransactions", {
                        address: t,
                        limit: e,
                        lt: i,
                        hash: r,
                        to_lt: n,
                        archival: s
                    })
                }
                async getBalance(t) {
                    return this.send("getAddressBalance", {
                        address: t
                    })
                }
                async sendBoc(t) {
                    return this.send("sendBoc", {
                        boc: t
                    })
                }
                async sendQuery(t) {
                    return this.send("sendQuerySimple", t)
                }
                async getEstimateFee(t) {
                    return this.send("estimateFee", t)
                }
                async call(t, e, i = []) {
                    return this.send("runGetMethod", {
                        address: t,
                        method: e,
                        stack: i
                    })
                }
                async call2(t, e, i = []) {
                    const r = await this.send("runGetMethod", {
                        address: t,
                        method: e,
                        stack: i
                    });
                    return s.parseResponse(r)
                }
                async getConfigParam(t) {
                    const e = await this.send("getConfigParam", {
                        config_id: t
                    });
                    if ("configInfo" !== e["@type"]) throw new Error("getConfigParam expected type configInfo");
                    if (!e.config) throw new Error("getConfigParam expected config");
                    if ("tvm.cell" !== e.config["@type"]) throw new Error("getConfigParam expected type tvm.cell");
                    if (!e.config.bytes) throw new Error("getConfigParam expected bytes");
                    return r.oneFromBoc(n(e.config.bytes))
                }
                async getMasterchainInfo() {
                    return this.send("getMasterchainInfo", {})
                }
                async getBlockShards(t) {
                    return this.send("shards", {
                        seqno: t
                    })
                }
                async getBlockTransactions(t, e, i) {
                    return this.send("getBlockTransactions", {
                        workchain: t,
                        shard: e,
                        seqno: i
                    })
                }
                async getMasterchainBlockTransactions(t) {
                    return this.getBlockTransactions(-1, "-9223372036854775808", t)
                }
                async getBlockHeader(t, e, i) {
                    return this.send("getBlockHeader", {
                        workchain: t,
                        shard: e,
                        seqno: i
                    })
                }
                async getMasterchainBlockHeader(t) {
                    return this.getBlockHeader(-1, "-9223372036854775808", t)
                }
            }
            HttpProvider.SHARD_ID_ALL = "-9223372036854775808", t.exports.default = HttpProvider
        },
        4005: function(t, e, i) {
            const {
                BN: r,
                base64ToBytes: n
            } = i(79), {
                Cell: s
            } = i(80);
            class HttpProviderUtils {
                static parseObject(t) {
                    const e = t["@type"];
                    switch (e) {
                        case "tvm.list":
                        case "tvm.tuple":
                            return t.elements.map(HttpProviderUtils.parseObject);
                        case "tvm.cell":
                            return s.oneFromBoc(n(t.bytes));
                        case "tvm.stackEntryCell":
                            return HttpProviderUtils.parseObject(t.cell);
                        case "tvm.stackEntryTuple":
                            return HttpProviderUtils.parseObject(t.tuple);
                        case "tvm.stackEntryNumber":
                            return HttpProviderUtils.parseObject(t.number);
                        case "tvm.numberDecimal":
                            return new r(t.number, 10);
                        default:
                            throw new Error("unknown type " + e)
                    }
                }
                static parseResponseStack(t) {
                    const e = t[0],
                        i = t[1];
                    switch (e) {
                        case "num":
                            return new r(i.replace(/0x/, ""), 16);
                        case "list":
                        case "tuple":
                            return HttpProviderUtils.parseObject(i);
                        case "cell":
                            const t = n(i.bytes);
                            return s.oneFromBoc(t);
                        default:
                            throw new Error("unknown type " + e)
                    }
                }
                static parseResponse(t) {
                    if (0 !== t.exit_code) {
                        const e = new Error("http provider parse response error");
                        throw e.result = t, e
                    }
                    const e = t.stack.map(HttpProviderUtils.parseResponseStack);
                    return 1 === e.length ? e[0] : e
                }
                static makeArg(t) {
                    if (t instanceof r || t instanceof Number) return ["num", t];
                    throw new Error("unknown arg type " + t)
                }
                static makeArgs(t) {
                    return t.map(this.makeArg)
                }
            }
            t.exports.default = HttpProviderUtils
        },
        4007: function(t, e, i) {
            const {
                Cell: r
            } = i(80), {
                Address: n,
                BN: s,
                toNano: o,
                bytesToHex: a,
                hexToBytes: l,
                nacl: h,
                stringToBytes: c,
                bytesToBase64: u
            } = i(79), {
                Contract: d
            } = i(133), {
                SimpleWalletContractR1: C,
                SimpleWalletContractR2: f,
                SimpleWalletContractR3: B
            } = i(4008), {
                WalletV2ContractR1: F,
                WalletV2ContractR2: w
            } = i(4009), {
                WalletV3ContractR1: m,
                WalletV3ContractR2: p
            } = i(4010), {
                WalletV4ContractR1: g
            } = i(4011), {
                WalletV4ContractR2: A
            } = i(4012), y = {
                simpleR1: C,
                simpleR2: f,
                simpleR3: B,
                v2R1: F,
                v2R2: w,
                v3R1: m,
                v3R2: p,
                v4R1: g,
                v4R2: A
            }, E = [C, f, B, F, w, m, p, g, A];
            class Wallets {
                constructor(t) {
                    this.provider = t, this.all = y, this.list = E, this.defaultVersion = "v3R1", this.default = this.all[this.defaultVersion]
                }
                create(t) {
                    return new this.default(this.provider, t)
                }
            }
            Wallets.all = y, Wallets.list = E, t.exports.default = Wallets
        },
        4008: function(t, e, i) {
            const {
                Cell: r
            } = i(80), {
                WalletContract: n
            } = i(426);
            t.exports = {
                SimpleWalletContractR1: class SimpleWalletContractR1 extends n {
                    constructor(t, e) {
                        e.code = r.oneFromBoc("B5EE9C72410101010044000084FF0020DDA4F260810200D71820D70B1FED44D0D31FD3FFD15112BAF2A122F901541044F910F2A2F80001D31F3120D74A96D307D402FB00DED1A4C8CB1FCBFFC9ED5441FDF089"), super(t, e)
                    }
                    getName() {
                        return "simpleR1"
                    }
                },
                SimpleWalletContractR2: class SimpleWalletContractR2 extends n {
                    constructor(t, e) {
                        e.code = r.oneFromBoc("B5EE9C724101010100530000A2FF0020DD2082014C97BA9730ED44D0D70B1FE0A4F260810200D71820D70B1FED44D0D31FD3FFD15112BAF2A122F901541044F910F2A2F80001D31F3120D74A96D307D402FB00DED1A4C8CB1FCBFFC9ED54D0E2786F"), super(t, e)
                    }
                    getName() {
                        return "simpleR2"
                    }
                },
                SimpleWalletContractR3: class SimpleWalletContractR3 extends n {
                    constructor(t, e) {
                        e.code = r.oneFromBoc("B5EE9C7241010101005F0000BAFF0020DD2082014C97BA218201339CBAB19C71B0ED44D0D31FD70BFFE304E0A4F260810200D71820D70B1FED44D0D31FD3FFD15112BAF2A122F901541044F910F2A2F80001D31F3120D74A96D307D402FB00DED1A4C8CB1FCBFFC9ED54B5B86E42"), super(t, e)
                    }
                    getName() {
                        return "simpleR3"
                    }
                }
            }
        },
        4009: function(t, e, i) {
            const {
                Cell: r
            } = i(80), {
                WalletContract: n
            } = i(426);
            class WalletV2ContractBase extends n {
                createSigningMessage(t, e) {
                    t = t || 0, e = e || Math.floor(Date.now() / 1e3) + 60;
                    const i = new r;
                    if (i.bits.writeUint(t, 32), 0 === t)
                        for (let t = 0; t < 32; t++) i.bits.writeBit(1);
                    else i.bits.writeUint(e, 32);
                    return i
                }
            }
            t.exports = {
                WalletV2ContractR1: class WalletV2ContractR1 extends WalletV2ContractBase {
                    constructor(t, e) {
                        e.code = r.oneFromBoc("B5EE9C724101010100570000AAFF0020DD2082014C97BA9730ED44D0D70B1FE0A4F2608308D71820D31FD31F01F823BBF263ED44D0D31FD3FFD15131BAF2A103F901541042F910F2A2F800029320D74A96D307D402FB00E8D1A4C8CB1FCBFFC9ED54A1370BB6"), super(t, e)
                    }
                    getName() {
                        return "v2R1"
                    }
                },
                WalletV2ContractR2: class WalletV2ContractR2 extends WalletV2ContractBase {
                    constructor(t, e) {
                        e.code = r.oneFromBoc("B5EE9C724101010100630000C2FF0020DD2082014C97BA218201339CBAB19C71B0ED44D0D31FD70BFFE304E0A4F2608308D71820D31FD31F01F823BBF263ED44D0D31FD3FFD15131BAF2A103F901541042F910F2A2F800029320D74A96D307D402FB00E8D1A4C8CB1FCBFFC9ED54044CD7A1"), super(t, e)
                    }
                    getName() {
                        return "v2R2"
                    }
                }
            }
        },
        4010: function(t, e, i) {
            const {
                Cell: r
            } = i(80), {
                WalletContract: n
            } = i(426), {
                parseWalletV3TransferQuery: s,
                parseWalletV3TransferBody: o
            } = i(1113);
            class WalletV3ContractBase extends n {
                createSigningMessage(t, e) {
                    t = t || 0, e = e || Math.floor(Date.now() / 1e3) + 60;
                    const i = new r;
                    if (i.bits.writeUint(this.options.walletId, 32), 0 === t)
                        for (let t = 0; t < 32; t++) i.bits.writeBit(1);
                    else i.bits.writeUint(e, 32);
                    return i.bits.writeUint(t, 32), i
                }
                createDataCell() {
                    const t = new r;
                    return t.bits.writeUint(0, 32), t.bits.writeUint(this.options.walletId, 32), t.bits.writeBytes(this.options.publicKey), t
                }
            }
            class WalletV3ContractR1 extends WalletV3ContractBase {
                constructor(t, e) {
                    e.code = r.oneFromBoc("B5EE9C724101010100620000C0FF0020DD2082014C97BA9730ED44D0D70B1FE0A4F2608308D71820D31FD31FD31FF82313BBF263ED44D0D31FD31FD3FFD15132BAF2A15144BAF2A204F901541055F910F2A3F8009320D74A96D307D402FB00E8D101A4C8CB1FCB1FCBFFC9ED543FBE6EE0"), super(t, e), this.options.walletId || (this.options.walletId = 698983191 + this.options.wc)
                }
                getName() {
                    return "v3R1"
                }
            }
            WalletV3ContractR1.parseTransferQuery = s, WalletV3ContractR1.parseTransferBody = o;
            class WalletV3ContractR2 extends WalletV3ContractBase {
                constructor(t, e) {
                    e.code = r.oneFromBoc("B5EE9C724101010100710000DEFF0020DD2082014C97BA218201339CBAB19F71B0ED44D0D31FD31F31D70BFFE304E0A4F2608308D71820D31FD31FD31FF82313BBF263ED44D0D31FD31FD3FFD15132BAF2A15144BAF2A204F901541055F910F2A3F8009320D74A96D307D402FB00E8D101A4C8CB1FCB1FCBFFC9ED5410BD6DAD"), super(t, e), this.options.walletId || (this.options.walletId = 698983191 + this.options.wc)
                }
                getName() {
                    return "v3R2"
                }
            }
            WalletV3ContractR2.parseTransferQuery = s, WalletV3ContractR2.parseTransferBody = o, t.exports = {
                WalletV3ContractR1: WalletV3ContractR1,
                WalletV3ContractR2: WalletV3ContractR2
            }
        },
        4011: function(t, e, i) {
            const {
                Cell: r
            } = i(80), {
                Contract: n
            } = i(133), {
                Address: s,
                bytesToHex: o,
                BN: a
            } = i(79), {
                WalletContract: l
            } = i(426), {
                parseWalletV3TransferQuery: h,
                parseWalletV3TransferBody: c
            } = i(1113);
            class WalletV4ContractR1 extends l {
                constructor(t, e) {
                    e.code = r.oneFromBoc("B5EE9C72410215010002F5000114FF00F4A413F4BCF2C80B010201200203020148040504F8F28308D71820D31FD31FD31F02F823BBF263ED44D0D31FD31FD3FFF404D15143BAF2A15151BAF2A205F901541064F910F2A3F80024A4C8CB1F5240CB1F5230CBFF5210F400C9ED54F80F01D30721C0009F6C519320D74A96D307D402FB00E830E021C001E30021C002E30001C0039130E30D03A4C8CB1F12CB1FCBFF1112131403EED001D0D3030171B0915BE021D749C120915BE001D31F218210706C7567BD228210626C6E63BDB022821064737472BDB0925F03E002FA403020FA4401C8CA07CBFFC9D0ED44D0810140D721F404305C810108F40A6FA131B3925F05E004D33FC8258210706C7567BA9131E30D248210626C6E63BAE30004060708020120090A005001FA00F404308210706C7567831EB17080185005CB0527CF165003FA02F40012CB69CB1F5210CB3F0052F8276F228210626C6E63831EB17080185005CB0527CF1624FA0214CB6A13CB1F5230CB3F01FA02F4000092821064737472BA8E3504810108F45930ED44D0810140D720C801CF16F400C9ED54821064737472831EB17080185004CB0558CF1622FA0212CB6ACB1FCB3F9410345F04E2C98040FB000201200B0C0059BD242B6F6A2684080A06B90FA0218470D4080847A4937D29910CE6903E9FF9837812801B7810148987159F31840201580D0E0011B8C97ED44D0D70B1F8003DB29DFB513420405035C87D010C00B23281F2FFF274006040423D029BE84C600201200F100019ADCE76A26840206B90EB85FFC00019AF1DF6A26840106B90EB858FC0006ED207FA00D4D422F90005C8CA0715CBFFC9D077748018C8CB05CB0222CF165005FA0214CB6B12CCCCC971FB00C84014810108F451F2A702006C810108D718C8542025810108F451F2A782106E6F746570748018C8CB05CB025004CF16821005F5E100FA0213CB6A12CB1FC971FB00020072810108D718305202810108F459F2A7F82582106473747270748018C8CB05CB025005CF16821005F5E100FA0214CB6A13CB1F12CB3FC973FB00000AF400C9ED5446A9F34F"), super(t, e), this.options.walletId || (this.options.walletId = 698983191 + this.options.wc), this.methods.getPublicKey = this.getPublicKey.bind(this)
                }
                getName() {
                    return "v4R1"
                }
                createSigningMessage(t, e, i) {
                    t = t || 0, e = e || Math.floor(Date.now() / 1e3) + 60;
                    const n = new r;
                    if (n.bits.writeUint(this.options.walletId, 32), 0 === t)
                        for (let t = 0; t < 32; t++) n.bits.writeBit(1);
                    else n.bits.writeUint(e, 32);
                    return n.bits.writeUint(t, 32), i || n.bits.writeUint(0, 8), n
                }
                createDataCell() {
                    const t = new r;
                    return t.bits.writeUint(0, 32), t.bits.writeUint(this.options.walletId, 32), t.bits.writeBytes(this.options.publicKey), t.bits.writeUint(0, 1), t
                }
                async getPublicKey() {
                    const t = await this.getAddress();
                    return this.provider.call2(t.toString(), "get_public_key")
                }
            }
            WalletV4ContractR1.parseTransferQuery = h, WalletV4ContractR1.parseTransferBody = c, t.exports = {
                WalletV4ContractR1: WalletV4ContractR1
            }
        },
        4012: function(t, e, i) {
            const {
                Cell: r
            } = i(80), {
                Contract: n
            } = i(133), {
                Address: s,
                bytesToHex: o,
                BN: a,
                toNano: l
            } = i(79), {
                WalletContract: h
            } = i(426), {
                parseWalletV3TransferQuery: c,
                parseWalletV3TransferBody: u
            } = i(1113);
            class WalletV4ContractR2 extends h {
                constructor(t, e) {
                    e.code = r.oneFromBoc("B5EE9C72410214010002D4000114FF00F4A413F4BCF2C80B010201200203020148040504F8F28308D71820D31FD31FD31F02F823BBF264ED44D0D31FD31FD3FFF404D15143BAF2A15151BAF2A205F901541064F910F2A3F80024A4C8CB1F5240CB1F5230CBFF5210F400C9ED54F80F01D30721C0009F6C519320D74A96D307D402FB00E830E021C001E30021C002E30001C0039130E30D03A4C8CB1F12CB1FCBFF1011121302E6D001D0D3032171B0925F04E022D749C120925F04E002D31F218210706C7567BD22821064737472BDB0925F05E003FA403020FA4401C8CA07CBFFC9D0ED44D0810140D721F404305C810108F40A6FA131B3925F07E005D33FC8258210706C7567BA923830E30D03821064737472BA925F06E30D06070201200809007801FA00F40430F8276F2230500AA121BEF2E0508210706C7567831EB17080185004CB0526CF1658FA0219F400CB6917CB1F5260CB3F20C98040FB0006008A5004810108F45930ED44D0810140D720C801CF16F400C9ED540172B08E23821064737472831EB17080185005CB055003CF1623FA0213CB6ACB1FCB3FC98040FB00925F03E20201200A0B0059BD242B6F6A2684080A06B90FA0218470D4080847A4937D29910CE6903E9FF9837812801B7810148987159F31840201580C0D0011B8C97ED44D0D70B1F8003DB29DFB513420405035C87D010C00B23281F2FFF274006040423D029BE84C600201200E0F0019ADCE76A26840206B90EB85FFC00019AF1DF6A26840106B90EB858FC0006ED207FA00D4D422F90005C8CA0715CBFFC9D077748018C8CB05CB0222CF165005FA0214CB6B12CCCCC973FB00C84014810108F451F2A7020070810108D718FA00D33FC8542047810108F451F2A782106E6F746570748018C8CB05CB025006CF165004FA0214CB6A12CB1FCB3FC973FB0002006C810108D718FA00D33F305224810108F459F2A782106473747270748018C8CB05CB025005CF165003FA0213CB6ACB1F12CB3FC973FB00000AF400C9ED54696225E5"), super(t, e), this.options.walletId || (this.options.walletId = 698983191 + this.options.wc), this.methods.deployAndInstallPlugin = e => n.createMethod(t, this.deployAndInstallPlugin(e)), this.methods.installPlugin = e => n.createMethod(t, this.installPlugin(e)), this.methods.removePlugin = e => n.createMethod(t, this.removePlugin(e)), this.methods.getPublicKey = this.getPublicKey.bind(this), this.methods.getWalletId = this.getWalletId.bind(this), this.methods.isPluginInstalled = this.isPluginInstalled.bind(this), this.methods.getPluginsList = this.getPluginsList.bind(this)
                }
                getName() {
                    return "v4R2"
                }
                createSigningMessage(t, e, i) {
                    t = t || 0, e = e || Math.floor(Date.now() / 1e3) + 60;
                    const n = new r;
                    if (n.bits.writeUint(this.options.walletId, 32), 0 === t)
                        for (let t = 0; t < 32; t++) n.bits.writeBit(1);
                    else n.bits.writeUint(e, 32);
                    return n.bits.writeUint(t, 32), i || n.bits.writeUint(0, 8), n
                }
                createDataCell() {
                    const t = new r;
                    return t.bits.writeUint(0, 32), t.bits.writeUint(this.options.walletId, 32), t.bits.writeBytes(this.options.publicKey), t.bits.writeUint(0, 1), t
                }
                async deployAndInstallPlugin(t) {
                    const {
                        secretKey: e,
                        seqno: i,
                        pluginWc: r,
                        amount: n,
                        stateInit: s,
                        body: o,
                        expireAt: a
                    } = t, l = this.createSigningMessage(i, a, !0);
                    return l.bits.writeUint(1, 8), l.bits.writeInt(r, 8), l.bits.writeGrams(n), l.refs.push(s), l.refs.push(o), this.createExternalMessage(l, e, i, !1)
                }
                async _setPlugin(t, e) {
                    const {
                        secretKey: i,
                        seqno: r,
                        amount: n,
                        queryId: o,
                        expireAt: a
                    } = t, h = new s(t.pluginAddress), c = this.createSigningMessage(r, a, !0);
                    return c.bits.writeUint(e ? 2 : 3, 8), c.bits.writeInt(h.wc, 8), c.bits.writeBytes(h.hashPart), c.bits.writeGrams(n || l("0.1")), c.bits.writeUint(o || 0, 64), this.createExternalMessage(c, i, r, !1)
                }
                async installPlugin(t) {
                    return this._setPlugin(t, !0)
                }
                async removePlugin(t) {
                    return this._setPlugin(t, !1)
                }
                async getWalletId() {
                    const t = await this.getAddress();
                    return (await this.provider.call2(t.toString(), "get_subwallet_id")).toNumber()
                }
                async getPublicKey() {
                    const t = await this.getAddress();
                    return this.provider.call2(t.toString(), "get_public_key")
                }
                async isPluginInstalled(t) {
                    t = new s(t);
                    const e = "0x" + o(t.hashPart),
                        i = await this.getAddress();
                    return !(await this.provider.call2(i.toString(), "is_plugin_installed", [
                        ["num", t.wc],
                        ["num", e]
                    ])).isZero()
                }
                async getPluginsList() {
                    const t = await this.getAddress();
                    return (await this.provider.call2(t.toString(), "get_plugin_list")).map(t => t[0].toNumber() + ":" + t[1].toString(16))
                }
            }
            WalletV4ContractR2.parseTransferQuery = c, WalletV4ContractR2.parseTransferBody = u, t.exports = {
                WalletV4ContractR2: WalletV4ContractR2
            }
        },
        4013: function(t, e, i) {
            const {
                Cell: r
            } = i(80), {
                Address: n,
                BN: s,
                toNano: o,
                bytesToHex: a,
                hexToBytes: l,
                nacl: h,
                stringToBytes: c,
                bytesToBase64: u,
                base64ToBytes: d
            } = i(79), {
                Contract: C
            } = i(133), {
                WalletContract: f
            } = i(426);
            class LockupWalletV1 extends f {
                constructor(t, e) {
                    e.code = r.oneFromBoc("B5EE9C7241021E01000261000114FF00F4A413F4BCF2C80B010201200203020148040501F2F28308D71820D31FD31FD31F802403F823BB13F2F2F003802251A9BA1AF2F4802351B7BA1BF2F4801F0BF9015410C5F9101AF2F4F8005057F823F0065098F823F0062071289320D74A8E8BD30731D4511BDB3C12B001E8309229A0DF72FB02069320D74A96D307D402FB00E8D103A4476814154330F004ED541D0202CD0607020120131402012008090201200F100201200A0B002D5ED44D0D31FD31FD3FFD3FFF404FA00F404FA00F404D1803F7007434C0C05C6C2497C0F83E900C0871C02497C0F80074C7C87040A497C1383C00D46D3C00608420BABE7114AC2F6C2497C338200A208420BABE7106EE86BCBD20084AE0840EE6B2802FBCBD01E0C235C62008087E4055040DBE4404BCBD34C7E00A60840DCEAA7D04EE84BCBD34C034C7CC0078C3C412040DD78CA00C0D0E00130875D27D2A1BE95B0C60000C1039480AF00500161037410AF0050810575056001010244300F004ED540201201112004548E1E228020F4966FA520933023BB9131E2209835FA00D113A14013926C21E2B3E6308003502323287C5F287C572FFC4F2FFFD00007E80BD00007E80BD00326000431448A814C4E0083D039BE865BE803444E800A44C38B21400FE809004E0083D10C06002012015160015BDE9F780188242F847800C02012017180201481B1C002DB5187E006D88868A82609E00C6207E00C63F04EDE20B30020158191A0017ADCE76A268699F98EB85FFC00017AC78F6A268698F98EB858FC00011B325FB513435C2C7E00017B1D1BE08E0804230FB50F620002801D0D3030178B0925B7FE0FA4031FA403001F001A80EDAA4"), super(t, e), this.options.walletId || (this.options.walletId = 698983191 + this.options.wc), this.methods.getPublicKey = this.getPublicKey.bind(this), this.methods.getWalletId = this.getWalletId.bind(this), this.methods.getLiquidBalance = this.getLiquidBalance.bind(this), this.methods.getNominalRestrictedBalance = this.getNominalRestrictedBalance.bind(this), this.methods.getNominalLockedBalance = this.getNominalLockedBalance.bind(this)
                }
                getName() {
                    return "lockup-0.1"
                }
                createSigningMessage(t, e) {
                    t = t || 0;
                    const i = new r;
                    if (i.bits.writeUint(this.options.walletId, 32), 0 === t)
                        for (let t = 0; t < 32; t++) i.bits.writeBit(1);
                    else {
                        const t = new Date,
                            e = Math.floor(t.getTime() / 1e3);
                        i.bits.writeUint(e + 60, 32)
                    }
                    return i.bits.writeUint(t, 32), i
                }
                createDataCell() {
                    const t = new r;
                    return t.bits.writeUint(0, 32), t.bits.writeUint(this.options.walletId, 32), t.bits.writeBytes(this.options.publicKey), t.bits.writeBytes(d(this.options.config.config_public_key)), this.options.config.allowed_destinations ? (t.bits.writeUint(1, 1), t.refs.push(r.oneFromBoc(d(this.options.config.allowed_destinations)))) : t.bits.writeUint(0, 1), t.bits.writeGrams(0), t.bits.writeUint(0, 1), t.bits.writeGrams(0), t.bits.writeUint(0, 1), t
                }
                async getWalletId() {
                    const t = await this.getAddress();
                    return (await this.provider.call2(t.toString(), "get_subwallet_id")).toNumber()
                }
                async getPublicKey() {
                    const t = await this.getAddress();
                    return this.provider.call2(t.toString(), "get_public_key")
                }
                async getLiquidBalance() {
                    const t = await this.getBalances();
                    return t[0] - t[1] - t[2]
                }
                async getNominalRestrictedBalance() {
                    return await this.getBalances()[1]
                }
                async getNominalLockedBalance() {
                    return await this.getBalances()[2]
                }
                async getBalances() {
                    const t = await this.getAddress();
                    return this.provider.call2(t.toString(), "get_balances")
                }
            }
            t.exports.default = {
                LockupWalletV1: LockupWalletV1,
                all: {
                    "lockup-0.1": LockupWalletV1
                },
                list: [LockupWalletV1]
            }
        },
        4014: function(t, e, i) {
            const {
                NftCollection: r
            } = i(4015), {
                NftItem: n
            } = i(4016), {
                NftMarketplace: s
            } = i(4017), {
                NftSale: o
            } = i(4018);
            t.exports.default = {
                NftCollection: r,
                NftItem: n,
                NftMarketplace: s,
                NftSale: o
            }
        },
        4015: function(t, e, i) {
            const {
                Contract: r
            } = i(133), {
                Cell: n
            } = i(80), {
                Address: s,
                bytesToBase64: o,
                BN: a
            } = i(79), {
                parseAddress: l
            } = i(181), {
                createOffchainUriCell: h,
                serializeUri: c,
                parseOffchainUriCell: u,
                getRoyaltyParams: d
            } = i(181);
            t.exports = {
                NftCollection: class NftCollection extends r {
                    constructor(t, e) {
                        if (e.wc = 0, e.code = e.code || n.oneFromBoc("B5EE9C724102140100021F000114FF00F4A413F4BCF2C80B0102016202030202CD04050201200E0F04E7D10638048ADF000E8698180B8D848ADF07D201800E98FE99FF6A2687D20699FEA6A6A184108349E9CA829405D47141BAF8280E8410854658056B84008646582A802E78B127D010A65B509E58FE59F80E78B64C0207D80701B28B9E382F970C892E000F18112E001718112E001F181181981E0024060708090201200A0B00603502D33F5313BBF2E1925313BA01FA00D43028103459F0068E1201A44343C85005CF1613CB3FCCCCCCC9ED54925F05E200A6357003D4308E378040F4966FA5208E2906A4208100FABE93F2C18FDE81019321A05325BBF2F402FA00D43022544B30F00623BA9302A402DE04926C21E2B3E6303250444313C85005CF1613CB3FCCCCCCC9ED54002C323401FA40304144C85005CF1613CB3FCCCCCCC9ED54003C8E15D4D43010344130C85005CF1613CB3FCCCCCCC9ED54E05F04840FF2F00201200C0D003D45AF0047021F005778018C8CB0558CF165004FA0213CB6B12CCCCC971FB008002D007232CFFE0A33C5B25C083232C044FD003D0032C03260001B3E401D3232C084B281F2FFF2742002012010110025BC82DF6A2687D20699FEA6A6A182DE86A182C40043B8B5D31ED44D0FA40D33FD4D4D43010245F04D0D431D430D071C8CB0701CF16CCC980201201213002FB5DAFDA89A1F481A67FA9A9A860D883A1A61FA61FF480610002DB4F47DA89A1F481A67FA9A9A86028BE09E008E003E00B01A500C6E"), e.royalty > 1) throw new Error("royalty > 1");
                        e.royaltyBase = 1e3, e.royaltyFactor = Math.floor(e.royalty * e.royaltyBase), super(t, e), this.methods.getCollectionData = this.getCollectionData.bind(this), this.methods.getNftItemAddressByIndex = this.getNftItemAddressByIndex.bind(this), this.methods.getNftItemContent = this.getNftItemContent.bind(this), this.methods.getRoyaltyParams = this.getRoyaltyParams.bind(this)
                    }
                    createContentCell(t) {
                        const e = h(t.collectionContentUri),
                            i = new n;
                        i.bits.writeBytes(c(t.nftItemContentBaseUri));
                        const r = new n;
                        return r.refs[0] = e, r.refs[1] = i, r
                    }
                    createRoyaltyCell(t) {
                        const e = new n;
                        return e.bits.writeUint(t.royaltyFactor, 16), e.bits.writeUint(t.royaltyBase, 16), e.bits.writeAddress(t.royaltyAddress), e
                    }
                    createDataCell() {
                        const t = new n;
                        return t.bits.writeAddress(this.options.ownerAddress), t.bits.writeUint(0, 64), t.refs[0] = this.createContentCell(this.options), t.refs[1] = n.oneFromBoc(this.options.nftItemCodeHex), t.refs[2] = this.createRoyaltyCell(this.options), t
                    }
                    createMintBody(t) {
                        const e = new n;
                        e.bits.writeUint(1, 32), e.bits.writeUint(t.queryId || 0, 64), e.bits.writeUint(t.itemIndex, 64), e.bits.writeCoins(t.amount);
                        const i = new n;
                        i.bits.writeAddress(t.itemOwnerAddress);
                        const r = new n;
                        return r.bits.writeBytes(c(t.itemContentUri)), i.refs[0] = r, e.refs[0] = i, e
                    }
                    createGetRoyaltyParamsBody(t) {
                        const e = new n;
                        return e.bits.writeUint(1765620048, 32), e.bits.writeUint(t.queryId || 0, 64), e
                    }
                    createChangeOwnerBody(t) {
                        if (void 0 === t.newOwnerAddress) throw new Error("Specify newOwnerAddress");
                        const e = new n;
                        return e.bits.writeUint(3, 32), e.bits.writeUint(t.queryId || 0, 64), e.bits.writeAddress(t.newOwnerAddress), e
                    }
                    createEditContentBody(t) {
                        if (t.royalty > 1) throw new Error("royalty > 1");
                        t.royaltyBase = 1e3, t.royaltyFactor = Math.floor(t.royalty * t.royaltyBase);
                        const e = new n;
                        return e.bits.writeUint(4, 32), e.bits.writeUint(t.queryId || 0, 64), e.refs[0] = this.createContentCell(t), e.refs[1] = this.createRoyaltyCell(t), e
                    }
                    async getCollectionData() {
                        const t = await this.getAddress(),
                            e = await this.provider.call2(t.toString(), "get_collection_data"),
                            i = e[0];
                        let r = NaN;
                        try {
                            r = i.toNumber()
                        } catch (t) {}
                        const n = e[1];
                        let s = null;
                        try {
                            s = u(n)
                        } catch (t) {}
                        return {
                            nextItemIndex: r,
                            itemsCount: i,
                            ownerAddress: l(e[2]),
                            collectionContentCell: n,
                            collectionContentUri: s
                        }
                    }
                    async getNftItemContent(t) {
                        const e = await this.getAddress(),
                            i = await t.getData();
                        if (i.isInitialized) {
                            const t = await this.provider.call2(e.toString(), "get_nft_content", [
                                ["num", i.itemIndex.toString(10)],
                                ["tvm.Cell", o(await i.contentCell.toBoc(!1))]
                            ]);
                            i.contentUri = null;
                            try {
                                i.contentUri = u(t)
                            } catch (t) {}
                        }
                        return i
                    }
                    async getNftItemAddressByIndex(t) {
                        t = new a(t);
                        const e = await this.getAddress(),
                            i = await this.provider.call2(e.toString(), "get_nft_address_by_index", [
                                ["num", t.toString(10)]
                            ]);
                        return l(i)
                    }
                    async getRoyaltyParams() {
                        const t = await this.getAddress();
                        return d(this.provider, t.toString())
                    }
                }
            }
        },
        4016: function(t, e, i) {
            const {
                Contract: r
            } = i(133), {
                Cell: n
            } = i(80), {
                Address: s,
                BN: o
            } = i(79), {
                parseAddress: a,
                getRoyaltyParams: l
            } = i(181), {
                parseOffchainUriCell: h
            } = i(181), c = "B5EE9C7241020D010001D0000114FF00F4A413F4BCF2C80B0102016202030202CE04050009A11F9FE00502012006070201200B0C02D70C8871C02497C0F83434C0C05C6C2497C0F83E903E900C7E800C5C75C87E800C7E800C3C00812CE3850C1B088D148CB1C17CB865407E90350C0408FC00F801B4C7F4CFE08417F30F45148C2EA3A1CC840DD78C9004F80C0D0D0D4D60840BF2C9A884AEB8C097C12103FCBC20080900113E910C1C2EBCB8536001F65135C705F2E191FA4021F001FA40D20031FA00820AFAF0801BA121945315A0A1DE22D70B01C300209206A19136E220C2FFF2E192218E3E821005138D91C85009CF16500BCF16712449145446A0708010C8CB055007CF165005FA0215CB6A12CB1FCB3F226EB39458CF17019132E201C901FB00104794102A375BE20A00727082108B77173505C8CBFF5004CF1610248040708010C8CB055007CF165005FA0215CB6A12CB1FCB3F226EB39458CF17019132E201C901FB000082028E3526F0018210D53276DB103744006D71708010C8CB055007CF165005FA0215CB6A12CB1FCB3F226EB39458CF17019132E201C901FB0093303234E25502F003003B3B513434CFFE900835D27080269FC07E90350C04090408F80C1C165B5B60001D00F232CFD633C58073C5B3327B5520BF75041B";
            class NftItem extends r {
                constructor(t, e) {
                    e.wc = 0, e.code = e.code || n.oneFromBoc(c), super(t, e), this.methods.getData = this.getData.bind(this)
                }
                createDataCell() {
                    const t = new n;
                    return t.bits.writeUint(this.options.index, 64), t.bits.writeAddress(this.options.collectionAddress), t
                }
                async getData() {
                    const t = await this.getAddress(),
                        e = await this.provider.call2(t.toString(), "get_nft_data"),
                        i = -1 === e[0].toNumber(),
                        r = e[1];
                    let n = NaN;
                    try {
                        n = r.toNumber()
                    } catch (t) {}
                    const s = a(e[2]),
                        o = i ? a(e[3]) : null,
                        l = e[4];
                    let c = null;
                    try {
                        c = i && null === s ? h(l) : null
                    } catch (t) {}
                    return {
                        isInitialized: i,
                        index: n,
                        itemIndex: r,
                        collectionAddress: s,
                        ownerAddress: o,
                        contentCell: l,
                        contentUri: c
                    }
                }
                async createTransferBody(t) {
                    const e = new n;
                    return e.bits.writeUint(1607220500, 32), e.bits.writeUint(t.queryId || 0, 64), e.bits.writeAddress(t.newOwnerAddress), e.bits.writeAddress(t.responseAddress), e.bits.writeBit(!1), e.bits.writeCoins(t.forwardAmount || new o(0)), e.bits.writeBit(!1), t.forwardPayload && e.bits.writeBytes(t.forwardPayload), e
                }
                createGetStaticDataBody(t) {
                    const e = new n;
                    return e.bits.writeUint(801842850, 32), e.bits.writeUint(t.queryId || 0, 64), e
                }
                async getRoyaltyParams() {
                    const t = await this.getAddress();
                    return l(this.provider, t.toString())
                }
            }
            NftItem.codeHex = c, t.exports = {
                NftItem: NftItem
            }
        },
        4017: function(t, e, i) {
            const {
                Contract: r
            } = i(133), {
                Cell: n
            } = i(80), {
                Address: s
            } = i(79), {
                parseAddress: o
            } = i(181);
            t.exports = {
                NftMarketplace: class NftMarketplace extends r {
                    constructor(t, e) {
                        e.wc = 0, e.code = e.code || n.oneFromBoc("B5EE9C7241010401006D000114FF00F4A413F4BCF2C80B01020120020300AAD23221C700915BE0D0D3030171B0915BE0FA40ED44D0FA403012C705F2E19101D31F01C0018E2BFA003001D4D43021F90070C8CA07CBFFC9D077748018C8CB05CB0258CF165004FA0213CB6BCCCCC971FB00915BE20004F2308EF7CCE7"), super(t, e)
                    }
                    createDataCell() {
                        const t = new n;
                        return t.bits.writeAddress(this.options.ownerAddress), t
                    }
                }
            }
        },
        4018: function(t, e, i) {
            const {
                Contract: r
            } = i(133), {
                Cell: n
            } = i(80), {
                parseAddress: s
            } = i(181), {
                BN: o
            } = i(79), a = "B5EE9C7241020A010001B4000114FF00F4A413F4BCF2C80B01020120020302014804050004F2300202CD0607002FA03859DA89A1F481F481F481F401A861A1F401F481F4006101F7D00E8698180B8D8492F82707D201876A2687D207D207D207D006A18116BA4E10159C71D991B1B2990E382C92F837028916382F970FA01698FC1080289C6C8895D7970FAE99F98FD2018201A642802E78B2801E78B00E78B00FD016664F6AA701363804C9B081B2299823878027003698FE99F9810E000C92F857010C0801F5D41081DCD650029285029185F7970E101E87D007D207D0018384008646582A804E78B28B9D090D0A85AD08A500AFD010AE5B564B8FD80384008646582AC678B2803FD010B65B564B8FD80384008646582A802E78B00FD0109E5B564B8FD80381041082FE61E8A10C00C646582A802E78B117D010A65B509E58F8A40900C8C0029A3110471036454012F004E032363704C0038E4782103B9ACA0015BEF2E1C95312C70559C705B1F2E1CA702082105FCC3D14218010C8CB055006CF1622FA0215CB6A14CB1F14CB3F21CF1601CF16CA0021FA02CA00C98100A0FB00E05F06840FF2F0002ACB3F22CF1658CF16CA0021FA02CA00C98100A0FB00AECABAD1";
            class NftSale extends r {
                constructor(t, e) {
                    e.wc = 0, e.code = e.code || n.oneFromBoc(a), super(t, e), this.methods.getData = this.getData.bind(this)
                }
                createDataCell() {
                    const t = new n;
                    t.bits.writeAddress(this.options.marketplaceAddress), t.bits.writeAddress(this.options.nftAddress), t.bits.writeAddress(null), t.bits.writeCoins(this.options.fullPrice);
                    const e = new n;
                    return e.bits.writeCoins(this.options.marketplaceFee), e.bits.writeAddress(this.options.royaltyAddress), e.bits.writeCoins(this.options.royaltyAmount), t.refs[0] = e, t
                }
                async getData() {
                    const t = await this.getAddress(),
                        e = await this.provider.call2(t.toString(), "get_sale_data");
                    return {
                        marketplaceAddress: s(e[0]),
                        nftAddress: s(e[1]),
                        nftOwnerAddress: s(e[2]),
                        fullPrice: e[3],
                        marketplaceFee: e[4],
                        royaltyAddress: s(e[5]),
                        royaltyAmount: e[6]
                    }
                }
                async createCancelBody(t) {
                    const e = new n;
                    return e.bits.writeUint(3, 32), e.bits.writeUint(t.queryId || 0, 64), e
                }
            }
            NftSale.codeHex = a, t.exports = {
                NftSale: NftSale
            }
        },
        4019: function(t, e, i) {
            const {
                JettonMinter: r
            } = i(4020), {
                JettonWallet: n
            } = i(4021);
            t.exports.default = {
                JettonMinter: r,
                JettonWallet: n
            }
        },
        4020: function(t, e, i) {
            const {
                Contract: r
            } = i(133), {
                Cell: n
            } = i(80), {
                createOffchainUriCell: s,
                parseOffchainUriCell: o,
                parseAddress: a
            } = i(181), {
                Address: l,
                BN: h,
                bytesToBase64: c
            } = i(79);
            t.exports = {
                JettonMinter: class JettonMinter extends r {
                    constructor(t, e) {
                        e.wc = 0, e.code = e.code || n.oneFromBoc("B5EE9C7241020B010001ED000114FF00F4A413F4BCF2C80B0102016202030202CC040502037A60090A03EFD9910E38048ADF068698180B8D848ADF07D201800E98FE99FF6A2687D007D206A6A18400AA9385D47181A9AA8AAE382F9702480FD207D006A18106840306B90FD001812881A28217804502A906428027D012C678B666664F6AA7041083DEECBEF29385D71811A92E001F1811802600271812F82C207F97840607080093DFC142201B82A1009AA0A01E428027D012C678B00E78B666491646580897A007A00658064907C80383A6465816503E5FFE4E83BC00C646582AC678B28027D0109E5B589666664B8FD80400FE3603FA00FA40F82854120870542013541403C85004FA0258CF1601CF16CCC922C8CB0112F400F400CB00C9F9007074C8CB02CA07CBFFC9D05008C705F2E04A12A1035024C85004FA0258CF16CCCCC9ED5401FA403020D70B01C3008E1F8210D53276DB708010C8CB055003CF1622FA0212CB6ACB1FCB3FC98042FB00915BE200303515C705F2E049FA403059C85004FA0258CF16CCCCC9ED54002E5143C705F2E049D43001C85004FA0258CF16CCCCC9ED54007DADBCF6A2687D007D206A6A183618FC1400B82A1009AA0A01E428027D012C678B00E78B666491646580897A007A00658064FC80383A6465816503E5FFE4E840001FAF16F6A2687D007D206A6A183FAA904051007F09"), super(t, e)
                    }
                    createDataCell() {
                        const t = new n;
                        return t.bits.writeCoins(0), t.bits.writeAddress(this.options.adminAddress), t.refs[0] = s(this.options.jettonContentUri), t.refs[1] = n.oneFromBoc(this.options.jettonWalletCodeHex), t
                    }
                    createMintBody(t) {
                        const e = new n;
                        e.bits.writeUint(21, 32), e.bits.writeUint(t.queryId || 0, 64), e.bits.writeAddress(t.destination), e.bits.writeCoins(t.amount);
                        const i = new n;
                        return i.bits.writeUint(395134233, 32), i.bits.writeUint(t.queryId || 0, 64), i.bits.writeCoins(t.jettonAmount), i.bits.writeAddress(null), i.bits.writeAddress(null), i.bits.writeCoins(new h(0)), i.bits.writeBit(!1), e.refs[0] = i, e
                    }
                    createChangeAdminBody(t) {
                        if (void 0 === t.newAdminAddress) throw new Error("Specify newAdminAddress");
                        const e = new n;
                        return e.bits.writeUint(3, 32), e.bits.writeUint(t.queryId || 0, 64), e.bits.writeAddress(t.newAdminAddress), e
                    }
                    createEditContentBody(t) {
                        const e = new n;
                        return e.bits.writeUint(4, 32), e.bits.writeUint(t.queryId || 0, 64), e.refs[0] = s(t.jettonContentUri), e
                    }
                    async getJettonData() {
                        const t = await this.getAddress(),
                            e = await this.provider.call2(t.toString(), "get_jetton_data"),
                            i = e[0],
                            r = -1 === e[1].toNumber(),
                            n = a(e[2]),
                            s = e[3];
                        let l = null;
                        try {
                            l = o(s)
                        } catch (t) {}
                        return {
                            totalSupply: i,
                            isMutable: r,
                            adminAddress: n,
                            jettonContentCell: s,
                            jettonContentUri: l,
                            jettonWalletCode: e[4]
                        }
                    }
                    async getJettonWalletAddress(t) {
                        const e = await this.getAddress(),
                            i = new n;
                        i.bits.writeAddress(t);
                        const r = await this.provider.call2(e.toString(), "get_wallet_address", [
                            ["tvm.Slice", c(await i.toBoc(!1))]
                        ]);
                        return a(r)
                    }
                }
            }
        },
        4021: function(t, e, i) {
            const {
                Contract: r
            } = i(133), {
                Cell: n
            } = i(80), {
                parseAddress: s
            } = i(181), {
                BN: o
            } = i(79), a = "B5EE9C7241021201000328000114FF00F4A413F4BCF2C80B0102016202030202CC0405001BA0F605DA89A1F401F481F481A8610201D40607020148080900BB0831C02497C138007434C0C05C6C2544D7C0FC02F83E903E900C7E800C5C75C87E800C7E800C00B4C7E08403E29FA954882EA54C4D167C0238208405E3514654882EA58C511100FC02780D60841657C1EF2EA4D67C02B817C12103FCBC2000113E910C1C2EBCB853600201200A0B020120101101F500F4CFFE803E90087C007B51343E803E903E90350C144DA8548AB1C17CB8B04A30BFFCB8B0950D109C150804D50500F214013E809633C58073C5B33248B232C044BD003D0032C032483E401C1D3232C0B281F2FFF274013E903D010C7E801DE0063232C1540233C59C3E8085F2DAC4F3208405E351467232C7C6600C03F73B51343E803E903E90350C0234CFFE80145468017E903E9014D6F1C1551CDB5C150804D50500F214013E809633C58073C5B33248B232C044BD003D0032C0327E401C1D3232C0B281F2FFF274140371C1472C7CB8B0C2BE80146A2860822625A020822625A004AD822860822625A028062849F8C3C975C2C070C008E00D0E0F009ACB3F5007FA0222CF165006CF1625FA025003CF16C95005CC2391729171E25008A813A08208989680AA008208989680A0A014BCF2E2C504C98040FB001023C85004FA0258CF1601CF16CCC9ED5400705279A018A182107362D09CC8CB1F5230CB3F58FA025007CF165007CF16C9718018C8CB0524CF165006FA0215CB6A14CCC971FB0010241023000E10491038375F040076C200B08E218210D53276DB708010C8CB055008CF165004FA0216CB6A12CB1F12CB3FC972FB0093356C21E203C85004FA0258CF1601CF16CCC9ED5400DB3B51343E803E903E90350C01F4CFFE803E900C145468549271C17CB8B049F0BFFCB8B0A0822625A02A8005A805AF3CB8B0E0841EF765F7B232C7C572CFD400FE8088B3C58073C5B25C60063232C14933C59C3E80B2DAB33260103EC01004F214013E809633C58073C5B3327B55200083200835C87B51343E803E903E90350C0134C7E08405E3514654882EA0841EF765F784EE84AC7CB8B174CFCC7E800C04E81408F214013E809633C58073C5B3327B55205ECCF23D";
            class JettonWallet extends r {
                constructor(t, e) {
                    e.wc = 0, e.code = e.code || n.oneFromBoc(a), super(t, e)
                }
                async createTransferBody(t) {
                    const e = new n;
                    return e.bits.writeUint(260734629, 32), e.bits.writeUint(t.queryId || 0, 64), e.bits.writeCoins(t.jettonAmount), e.bits.writeAddress(t.toAddress), e.bits.writeAddress(t.responseAddress), e.bits.writeBit(!1), e.bits.writeCoins(t.forwardAmount || new o(0)), e.bits.writeBit(!1), t.forwardPayload && e.bits.writeBytes(t.forwardPayload), e
                }
                async createBurnBody(t) {
                    const e = new n;
                    return e.bits.writeUint(1499400124, 32), e.bits.writeUint(t.queryId || 0, 64), e.bits.writeCoins(t.jettonAmount), e.bits.writeAddress(t.responseAddress), e
                }
                async getData() {
                    const t = await this.getAddress(),
                        e = await this.provider.call2(t.toString(), "get_wallet_data");
                    return {
                        balance: e[0],
                        ownerAddress: s(e[1]),
                        jettonMinterAddress: s(e[2]),
                        jettonWalletCode: e[3]
                    }
                }
            }
            JettonWallet.codeHex = a, t.exports = {
                JettonWallet: JettonWallet
            }
        },
        4022: function(t, e, i) {
            const {
                BlockSubscription: r
            } = i(4023), {
                InMemoryBlockStorage: n
            } = i(4024);
            t.exports = {
                BlockSubscription: r,
                InMemoryBlockStorage: n
            }
        },
        4023: function(t, e) {
            const i = t => ({
                workchain: t.workchain,
                shardId: t.shard,
                shardBlockNumber: t.seqno
            });
            t.exports = {
                BlockSubscription: class BlockSubscription {
                    constructor(t, e, i, r) {
                        this.provider = t, this.storage = e, this.onBlock = i, this.startMcBlockNumber = r ? r.startMcBlockNumber : void 0, this.mcInterval = (r ? r.mcInterval : void 0) || 1e4, this.shardsInterval = (r ? r.shardsInterval : void 0) || 1e3
                    }
                    async start() {
                        if (this.stop(), !this.startMcBlockNumber && (this.startMcBlockNumber = (await this.provider.getMasterchainInfo()).last.seqno, !this.startMcBlockNumber)) throw new Error("Cannot get start mc block number from provider");
                        const t = await this.provider.getMasterchainBlockHeader(this.startMcBlockNumber);
                        if (this.startLT = t.end_lt, !this.startLT) throw new Error("Cannot get startLT from provider");
                        let e = !1;
                        const r = async () => {
                            if (!e) {
                                e = !0;
                                try {
                                    const t = await this.storage.getLastMasterchainBlockNumber() || this.startMcBlockNumber;
                                    if (!t) throw new Error("no init masterchain block in storage");
                                    const e = (await this.provider.getMasterchainInfo()).last.seqno;
                                    if (!e) throw new Error("invalid last masterchain block from provider");
                                    for (let r = t + 1; r < e; r++) {
                                        const t = await this.provider.getBlockShards(r),
                                            e = await this.provider.getMasterchainBlockHeader(r);
                                        await this.onBlock(e, t), await this.storage.insertBlocks(r, t.shards.map(i))
                                    }
                                } catch (t) {
                                    console.error(t)
                                }
                                e = !1
                            }
                        };
                        this.mcIntervalId = setInterval(() => r(), this.mcInterval), r();
                        let n = !1;
                        const s = async () => {
                            if (!n) {
                                n = !0;
                                try {
                                    const t = await this.storage.getUnprocessedShardBlock();
                                    if (t) {
                                        const {
                                            workchain: e,
                                            shardId: r,
                                            shardBlockNumber: n
                                        } = t, s = await this.provider.getBlockHeader(e, r, n);
                                        if (s.end_lt < this.startLT) await this.storage.setBlockProcessed(e, r, n, []);
                                        else {
                                            await this.onBlock(s);
                                            const t = s.prev_blocks.map(i);
                                            await this.storage.setBlockProcessed(e, r, n, t)
                                        }
                                    }
                                } catch (t) {
                                    console.log(t)
                                }
                                n = !1
                            }
                        };
                        this.shardsIntervalId = setInterval(() => s(), this.shardsInterval)
                    }
                    stop() {
                        clearInterval(this.mcIntervalId), clearInterval(this.shardsIntervalId)
                    }
                }
            }
        },
        4024: function(t, e) {
            t.exports = {
                InMemoryBlockStorage: class InMemoryBlockStorage {
                    constructor(t) {
                        this.masterchainBlocks = {}, this.shardchainBlocks = {}, this.logFunction = t
                    }
                    async insertShardBlocks(t) {
                        for (const {
                                workchain: e,
                                shardId: i,
                                shardBlockNumber: r
                            }
                            of t) void 0 === this.shardchainBlocks[e + "_" + i + "_" + r] && (this.logFunction && this.logFunction("insert shard " + e + " " + i + " " + r), this.shardchainBlocks[e + "_" + i + "_" + r] = !1)
                    }
                    async insertBlocks(t, e) {
                        if (this.logFunction && this.logFunction("mc processed " + t), void 0 !== this.masterchainBlocks[t]) throw new Error("mc already exists " + t);
                        this.masterchainBlocks[t] = !0, await this.insertShardBlocks(e)
                    }
                    async getLastMasterchainBlockNumber() {
                        return Object.keys(this.masterchainBlocks).map(t => Number(t)).sort((t, e) => e - t)[0]
                    }
                    async setBlockProcessed(t, e, i, r) {
                        if (this.logFunction && this.logFunction("shard processed " + t + " " + e + " " + i), void 0 === this.shardchainBlocks[t + "_" + e + "_" + i]) throw new Error("shard not exists " + t + "_" + e + "_" + i);
                        this.shardchainBlocks[t + "_" + e + "_" + i] = !0, await this.insertShardBlocks(r)
                    }
                    async getUnprocessedShardBlock() {
                        for (let t in this.shardchainBlocks)
                            if (!1 === this.shardchainBlocks[t]) {
                                const e = t.split("_");
                                return {
                                    workchain: Number(e[0]),
                                    shardId: e[1],
                                    shardBlockNumber: Number(e[2])
                                }
                            }
                    }
                }
            }
        },
        4025: function(t, e, i) {
            const {
                Contract: r
            } = i(133), {
                Cell: n
            } = i(80), {
                hexToBytes: s,
                BN: o,
                nacl: a,
                bytesToBase64: l
            } = i(79);
            t.exports = {
                SubscriptionContract: class SubscriptionContract extends r {
                    constructor(t, e) {
                        e.code = n.oneFromBoc("B5EE9C7241020F01000262000114FF00F4A413F4BCF2C80B0102012002030201480405036AF230DB3C5335A127A904F82327A128A90401BC5135A0F823B913B0F29EF800725210BE945387F0078E855386DB3CA4E2F82302DB3C0B0C0D0202CD06070121A0D0C9B67813F488DE0411F488DE0410130B048FD6D9E05E8698198FD201829846382C74E2F841999E98F9841083239BA395D497803F018B841083AB735BBED9E702984E382D9C74688462F863841083AB735BBED9E70156BA4E09040B0A0A080269F10FD22184093886D9E7C12C1083239BA39384008646582A803678B2801FD010A65B5658F89659FE4B9FD803FC1083239BA396D9E40E0A04F08E8D108C5F0C708210756E6B77DB3CE00AD31F308210706C7567831EB15210BA8F48305324A126A904F82326A127A904BEF27109FA4430A619F833D078D721D70B3F5260A11BBE8E923036F82370708210737562732759DB3C5077DE106910581047103645135042DB3CE0395F076C2232821064737472BA0A0A0D09011A8E897F821064737472DB3CE0300A006821B39982100400000072FB02DE70F8276F118010C8CB055005CF1621FA0214F40013CB6912CB1F830602948100A032DEC901FB000030ED44D0FA40FA40FA00D31FD31FD31FD31FD31FD307D31F30018021FA443020813A98DB3C01A619F833D078D721D70B3FA070F8258210706C7567228018C8CB055007CF165004FA0215CB6A12CB1F13CB3F01FA02CB00C973FB000E0040C8500ACF165008CF165006FA0214CB1F12CB1FCB1FCB1FCB1FCB07CB1FC9ED54005801A615F833D020D70B078100D1BA95810088D721DED307218100DDBA028100DEBA12B1F2E047D33F30A8AB0FE5855AB4"), super(t, e), this.methods.pay = () => r.createMethod(t, this.createPayExternalMessage()), this.methods.getSubscriptionData = this.getSubscriptionData.bind(this)
                    }
                    createDataCell() {
                        const t = new n;
                        return t.bits.writeAddress(this.options.wallet), t.bits.writeAddress(this.options.beneficiary), t.bits.writeGrams(this.options.amount), t.bits.writeUint(this.options.period, 32), t.bits.writeUint(this.options.startAt, 32), t.bits.writeUint(this.options.timeout, 32), t.bits.writeUint(0, 32), t.bits.writeUint(0, 32), t.bits.writeUint(0, 8), t.bits.writeUint(this.options.subscriptionId, 32), t
                    }
                    createBody() {
                        const t = new n;
                        return t.bits.writeUint(new o(1886156135).add(new o(2147483648)), 32), t
                    }
                    createSelfDestructBody() {
                        const t = new n;
                        return t.bits.writeUint(1685288050, 32), t
                    }
                    async getSubscriptionData() {
                        const t = t => t[0].toNumber() + ":" + t[1].toString(16),
                            e = await this.getAddress(),
                            i = await this.provider.call2(e.toString(), "get_subscription_data");
                        return {
                            wallet: t(i[0]),
                            beneficiary: t(i[1]),
                            amount: i[2],
                            period: i[3].toNumber(),
                            startAt: i[4].toNumber(),
                            timeout: i[5].toNumber(),
                            lastPayment: i[6].toNumber(),
                            lastRequest: i[7].toNumber(),
                            failedAttempts: i[8].toNumber(),
                            subscriptionId: i[9].toNumber()
                        }
                    }
                    async createPayExternalMessage() {
                        const t = await this.getAddress(),
                            e = r.createExternalMessageHeader(t),
                            i = r.createCommonMsgInfo(e, null, null),
                            s = new n;
                        return s.bits.writeUint(Math.floor(Date.now() / 1e3), 64), {
                            address: t,
                            message: i,
                            body: s
                        }
                    }
                }
            }
        },
        4026: function(t, e, i) {
            const {
                PaymentChannel: r
            } = i(4027);
            t.exports = {
                Payments: class Payments {
                    constructor(t) {
                        this.provider = t
                    }
                    createChannel(t) {
                        return new r(this.provider, t)
                    }
                },
                PaymentChannel: r
            }
        },
        4027: function(t, e, i) {
            var r = i(151);
            const {
                Contract: n
            } = i(133), {
                Cell: s
            } = i(80), {
                nacl: o,
                hexToBytes: a,
                BN: l
            } = i(79), {
                parseAddress: h
            } = i(181), {
                writePublicKey: c,
                writeSignature: u,
                createSignatureCell: d,
                tag_init: C,
                tag_cooperative_close: f,
                tag_cooperative_commit: B,
                tag_start_uncooperative_close: F,
                tag_challenge_state: w,
                tag_settle_conditionals: m,
                tag_state: p,
                op_top_up_balance: g,
                op_init_channel: A,
                op_cooperative_close: y,
                op_cooperative_commit: E,
                op_start_uncooperative_close: D,
                op_challenge_quarantined_state: b,
                op_settle_conditionals: v,
                op_finish_uncooperative_close: M,
                op_channel_closed: S,
                createTopUpBalance: _,
                createInitChannelBody: I,
                createCooperativeCloseChannelBody: U,
                createCooperativeCommitBody: x,
                createConditionalPayment: T,
                createSemiChannelBody: N,
                createSemiChannelState: R,
                createSignedSemiChannelState: k,
                createStartUncooperativeCloseBody: P,
                createChallengeQuarantinedStateBody: W,
                createSettleConditionalsBody: q,
                createFinishUncooperativeClose: O,
                createOneSignature: L,
                createTwoSignature: K
            } = i(4028), H = "B5EE9C72410230010007FB000114FF00F4A413F4BCF2C80B0102012002030201480405000AF26C21F0190202CB06070201202E2F020120080902012016170201200A0B0201200C0D0009D3610F80CC001D6B5007434C7FE8034C7CC1BC0FE19E0201580E0F0201201011002D3E11DBC4BE11DBC43232C7FE11DBC47E80B2C7F2407320008B083E1B7B51343480007E187E80007E18BE80007E18F4FFC07E1934FFC07E1974DFC07E19BC01887080A7F4C7C07E1A34C7C07E1A7D01007E1AB7807080E535007E1AF7BE1B2002012012130201201415008D3E13723E11BE117E113E10540132803E10BE80BE10FE8084F2FFC4B2FFF2DFFC02887080A7FE12BE127E121400F2C7C4B2C7FD0037807080E53E12C073253E1333C5B8B27B5520004D1C3C02FE106CFCB8193E803E800C3E1096283E18BE10C0683E18FE10BE10E8006EFCB819BC032000CF1D3C02FE106CFCB819348020C235C6083E4040E4BE1124BE117890CC3E443CB81974C7C060841A5B9A5D2EBCB81A3E118074DFD66EBCB81CBE803E800C3E1094882FBE10D4882FAC3CB819807E18BE18FE12F43E800C3E10BE10E80068006E7CB8199FFE187C0320004120843777222E9C20043232C15401B3C594013E808532DA84B2C7F2DFF2407EC02002012018190201D42B2C0201201A1B0201201E1F0201201C1D00E5473F00BD401D001D401D021F90102D31F01821043436D74BAF2E068F84601D37F59BAF2E072F844544355F910F8454330F910B0F2E065D33FD33F30F84822B9F84922B9B0F2E06C21F86820F869F84A6E915B8E19F84AD0D33FFA003171D721D33F305033BC02BCB1936DF86ADEE2F800F00C8006F3E12F43E800C7E903E900C3E09DBC41CBE10D62F24CC20C1B7BE10FE11963C03FE10BE11A04020BC03DC3E185C3E189C3E18DB7E1ABC032000B51D3C02F5007400750074087E4040B4C7C0608410DB1BDCEEBCB81A3E118074DFD66EBCB81CBE111510D57E443E1150CC3E442C3CB8197E80007E18BE80007E18F4CFF4CFCC3E1208AE7E1248AE6C3CB81B007E1A3E1A7E003C042001C1573F00BF84A6EF2E06AD2008308D71820F9012392F84492F845E24130F910F2E065D31F018210556E436CBAF2E068F84601D37F59BAF2E072D401D08308D71820F901F8444130F910F2E06501D430D08308D71820F901F8454130F910F2E06501820020120222301FED31F01821043685374BAF2E068F84601D37F59BAF2E072D33FFA00F404552003D200019AD401D0D33FFA00F40430937F206DE2303205D31F01821043685374BAF2E068F84601D37F59BAF2E072D33FFA00F404552003D200019AD401D0D33FFA00F40430937F206DE23032F8485280BEF8495250BEB0524BBE1AB0527ABE19210064B05215BE14B05248BE17B0F2E06970F82305C8CB3F5004FA0215F40015CB3F5004FA0212F400CB1F12CA00CA00C9F86AF00C01C31CFC02FE129BACFCB81AF48020C235C6083E4048E4BE1124BE1178904C3E443CB81974C7C0608410DA19D46EBCB81A3E118074DFD66EBCB81CB5007420C235C6083E407E11104C3E443CB81940750C3420C235C6083E407E11504C3E443CB81940602403F71CFC02FE129BACFCB81AF48020C235C6083E4048E4BE1124BE1178904C3E443CB81974C7C0608410DB10DBAEBCB81A3E118074DFD66EBCB81CBD010C3E12B434CFFE803D0134CFFE803D0134C7FE11DBC4148828083E08EE7CB81BBE11DBC4A83E08EF3CB81C34800C151D5A64D6D4C8F7A2B98E82A49B08B8C3816028292A01FCD31F01821043685374BAF2E068F84601D37F59BAF2E072D33FFA00F404552003D200019AD401D0D33FFA00F40430937F206DE2303205D31F01821043685374BAF2E068F84601D37F59BAF2E072D33FFA00F404552003D200019AD401D0D33FFA00F40430937F206DE230325339BE5381BEB0F8495250BEB0F8485290BEB02502FE5237BE16B05262BEB0F2E06927C20097F84918BEF2E0699137E222C20097F84813BEF2E0699132E2F84AD0D33FFA00F404D33FFA00F404D31FF8476F105220A0F823BCF2E06FD200D20030B3F2E073209C3537373A5274BC5263BC12B18E11323939395250BC5299BC18B14650134440E25319BAB3F2E06D9130E30D7F05C82627002496F8476F1114A098F8476F1117A00603E203003ECB3F5004FA0215F40012CB3F5004FA0213F400CB1F12CA00CA00C9F86AF00C00620A8020F4966FA5208E213050038020F4666FA1208E1001FA00ED1E15DA119450C3A00B9133E2923430E202926C21E2B31B000C3535075063140038C8CB3F5004FA0212F400CB3F5003FA0213F400CB1FCA00C9F86AF00C00D51D3C02FE129BACFCB81AFE12B434CFFE803D010C74CFFE803D010C74C7CC3E11DBC4283E11DBC4A83E08EE7CB81C7E003E10886808E87E18BE10D400E816287E18FE10F04026BE10BE10E83E189C3E18F7BE10B04026BE10FE10A83E18DC3E18F780693E1A293E1A7C042001F53B7EF4C7C8608419F1F4A06EA4CC7C037808608403818830AEA54C7C03B6CC780C882084155DD61FAEA54C3C0476CC780820841E6849BBEEA54C3C04B6CC7808208407C546B3EEA54C3C0576CC780820840223AA8CAEA54C3C05B6CC7808208419BDBC1A6EA54C3C05F6CC780C60840950CAA46EA53C0636CC78202D0008840FF2F00075BC7FE3A7805FC25E87D007D207D20184100D0CAF6A1EC7C217C21B7817C227C22B7817C237C23FC247C24B7817C2524C3B7818823881B22A021984008DBD0CABA7805FC20C8B870FC253748B8F07C256840206B90FD0018C020EB90FD0018B8EB90E98F987C23B7882908507C11DE491839707C23B788507C23B789507C11DE48B9F03A4331C4966";
            class PaymentChannel extends n {
                constructor(t, e) {
                    e.publicKeyA = e.isA ? e.myKeyPair.publicKey : e.hisPublicKey, e.publicKeyB = e.isA ? e.hisPublicKey : e.myKeyPair.publicKey, e.wc = e.wc || 0, e.code = e.code || s.oneFromBoc(H), super(t, e)
                }
                createDataCell() {
                    var t, e, i;
                    const r = new s;
                    r.bits.writeBit(0), r.bits.writeCoins(0), r.bits.writeCoins(0), c(r, this.options.publicKeyA), c(r, this.options.publicKeyB), r.bits.writeUint(this.options.channelId, 128);
                    const n = new s;
                    n.bits.writeUint((null === (t = this.options.closingConfig) || void 0 === t ? void 0 : t.quarantineDuration) || 0, 32), n.bits.writeCoins((null === (e = this.options.closingConfig) || void 0 === e ? void 0 : e.misbehaviorFine) || new l(0)), n.bits.writeUint((null === (i = this.options.closingConfig) || void 0 === i ? void 0 : i.conditionalCloseDuration) || 0, 32), r.refs[0] = n, r.bits.writeUint(0, 32), r.bits.writeUint(0, 32), r.bits.writeBit(!1);
                    const o = new s;
                    return o.bits.writeCoins(this.options.excessFee || new l(0)), o.bits.writeAddress(this.options.addressA), o.bits.writeAddress(this.options.addressB), r.refs[1] = o, r
                }
                async createOneSignature(t, e) {
                    const i = o.sign.detached(await e.hash(), this.options.myKeyPair.secretKey);
                    return {
                        cell: L({
                            op: t,
                            isA: this.options.isA,
                            signature: i,
                            cell: e
                        }),
                        signature: i
                    }
                }
                async createTwoSignature(t, e, i) {
                    const r = o.sign.detached(await i.hash(), this.options.myKeyPair.secretKey),
                        n = this.options.isA ? r : e,
                        s = this.options.isA ? e : r;
                    return {
                        cell: K({
                            op: t,
                            signatureA: n,
                            signatureB: s,
                            cell: i
                        }),
                        signature: r
                    }
                }
                async createTopUpBalance(t) {
                    return _(t)
                }
                async createInitChannel(t) {
                    return this.createOneSignature(A, I({
                        ...t,
                        channelId: this.options.channelId
                    }))
                }
                async createCooperativeCloseChannel(t) {
                    return t.hisSignature || (t.hisSignature = new Uint8Array(64)), this.createTwoSignature(y, t.hisSignature, U({
                        ...t,
                        channelId: this.options.channelId
                    }))
                }
                async createCooperativeCommit(t) {
                    return t.hisSignature || (t.hisSignature = new Uint8Array(64)), this.createTwoSignature(E, t.hisSignature, x({
                        ...t,
                        channelId: this.options.channelId
                    }))
                }
                async createSignedSemiChannelState(t) {
                    const e = R({
                            channelId: this.options.channelId,
                            semiChannelBody: N({
                                seqno: t.mySeqno,
                                sentCoins: t.mySentCoins,
                                conditionals: null
                            }),
                            counterpartySemiChannelBody: void 0 === t.hisSeqno ? null : N({
                                seqno: t.hisSeqno,
                                sentCoins: t.hisSentCoins,
                                conditionals: null
                            })
                        }),
                        i = o.sign.detached(await e.hash(), this.options.myKeyPair.secretKey);
                    return {
                        cell: k({
                            signature: i,
                            state: e
                        }),
                        signature: i
                    }
                }
                async signState(t) {
                    const e = this.options.isA ? t.seqnoA : t.seqnoB,
                        i = this.options.isA ? t.seqnoB : t.seqnoA,
                        r = this.options.initBalanceA.gt(t.balanceA) ? this.options.initBalanceA.sub(t.balanceA) : new l(0),
                        n = this.options.initBalanceB.gt(t.balanceB) ? this.options.initBalanceB.sub(t.balanceB) : new l(0),
                        s = this.options.isA ? r : n,
                        o = this.options.isA ? n : r,
                        {
                            cell: a,
                            signature: h
                        } = await this.createSignedSemiChannelState({
                            mySeqno: e,
                            mySentCoins: s,
                            hisSeqno: i,
                            hisSentCoins: o
                        });
                    return h
                }
                async verifyState(t, e) {
                    const i = this.options.isA ? t.seqnoB : t.seqnoA,
                        r = this.options.isA ? t.seqnoA : t.seqnoB,
                        n = this.options.initBalanceA.gt(t.balanceA) ? this.options.initBalanceA.sub(t.balanceA) : new l(0),
                        s = this.options.initBalanceB.gt(t.balanceB) ? this.options.initBalanceB.sub(t.balanceB) : new l(0),
                        a = this.options.isA ? s : n,
                        h = this.options.isA ? n : s,
                        c = R({
                            channelId: this.options.channelId,
                            semiChannelBody: N({
                                seqno: i,
                                sentCoins: a,
                                conditionals: null
                            }),
                            counterpartySemiChannelBody: void 0 === r ? null : N({
                                seqno: r,
                                sentCoins: h,
                                conditionals: null
                            })
                        }),
                        u = await c.hash();
                    return o.sign.detached.verify(u, e, this.options.isA ? this.options.publicKeyB : this.options.publicKeyA)
                }
                async signClose(t) {
                    const {
                        cell: e,
                        signature: i
                    } = await this.createCooperativeCloseChannel(t);
                    return i
                }
                async verifyClose(t, e) {
                    const i = await U({
                            ...t,
                            channelId: this.options.channelId
                        }),
                        r = await i.hash();
                    return o.sign.detached.verify(r, e, this.options.isA ? this.options.publicKeyB : this.options.publicKeyA)
                }
                async createStartUncooperativeClose(t) {
                    return this.createOneSignature(D, P({
                        ...t,
                        channelId: this.options.channelId
                    }))
                }
                async createChallengeQuarantinedState(t) {
                    return this.createOneSignature(b, W({
                        ...t,
                        channelId: this.options.channelId
                    }))
                }
                async createSettleConditionals(t) {
                    return this.createOneSignature(v, q({
                        ...t,
                        channelId: this.options.channelId
                    }))
                }
                async createFinishUncooperativeClose() {
                    return O()
                }
                async getChannelState() {
                    const t = await this.getAddress();
                    return (await this.provider.call2(t.toString(), "get_channel_state", [])).toNumber()
                }
                async getData() {
                    const t = t => {
                            let e = t.toString(16);
                            return e.length % 2 != 0 && (e = "0" + e), a(e)
                        },
                        e = await this.getAddress(),
                        i = await this.provider.call2(e.toString(), "get_channel_data", []);
                    return {
                        state: i[0].toNumber(),
                        balanceA: i[1][0],
                        balanceB: i[1][1],
                        publicKeyA: t(i[2][0]),
                        publicKeyB: t(i[2][1]),
                        channelId: i[3],
                        quarantineDuration: i[4][0].toNumber(),
                        misbehaviorFine: i[4][1],
                        conditionalCloseDuration: i[4][2].toNumber(),
                        seqnoA: i[5][0],
                        seqnoB: i[5][1],
                        quarantine: i[6],
                        excessFee: i[7][0],
                        addressA: h(i[7][1]),
                        addressB: h(i[7][2])
                    }
                }
                fromWallet(t) {
                    const {
                        wallet: e,
                        secretKey: i
                    } = t, r = (t, r) => {
                        const n = async n => {
                            const s = r ? (await this.createStateInit()).stateInit : null,
                                o = await this.getAddress(),
                                a = await e.methods.seqno().call() || 0,
                                l = await t;
                            return e.methods.transfer({
                                secretKey: i,
                                toAddress: o.toString(!0, !0, !0),
                                amount: n,
                                seqno: a,
                                payload: l,
                                stateInit: s,
                                sendMode: 3
                            })
                        };
                        return {
                            send: t => n(t).then(t => t.send()),
                            estimateFee: t => n(t).then(t => t.estimateFee())
                        }
                    };
                    return {
                        deploy: () => r(null, !0),
                        init: t => r(this.createInitChannel(t).then(t => t.cell)),
                        topUp: t => r(this.createTopUpBalance(t)),
                        close: t => r(this.createCooperativeCloseChannel(t).then(t => t.cell)),
                        commit: t => r(this.createCooperativeCommit(t).then(t => t.cell)),
                        startUncooperativeClose: t => r(this.createStartUncooperativeClose(t).then(t => t.cell)),
                        challengeQuarantinedState: t => r(this.createChallengeQuarantinedState(t).then(t => t.cell)),
                        settleConditionals: t => r(this.createSettleConditionals(t).then(t => t.cell)),
                        finishUncooperativeClose: () => r(this.createFinishUncooperativeClose())
                    }
                }
            }
            r(PaymentChannel, "STATE_UNINITED", 0), r(PaymentChannel, "STATE_OPEN", 1), r(PaymentChannel, "STATE_CLOSURE_STARTED", 2), r(PaymentChannel, "STATE_SETTLING_CONDITIONALS", 3), r(PaymentChannel, "STATE_AWAITING_FINALIZATION", 4), PaymentChannel.codeHex = H, t.exports = {
                PaymentChannel: PaymentChannel
            }
        },
        4028: function(t, e, i) {
            const {
                Cell: r
            } = i(80), n = (t, e) => {
                if (64 !== e.length) throw new Error("invalid signature length");
                t.bits.writeBytes(e)
            }, s = t => {
                const e = new r;
                return n(e, t), e
            }, o = (t, e) => {
                if (e) {
                    if (t.bits.writeBit(1), t.refs.length >= 4) throw new Error("refs overflow");
                    t.refs.push(e)
                } else t.bits.writeBit(0)
            }, a = o;
            t.exports = {
                writePublicKey: (t, e) => {
                    if (32 !== e.length) throw new Error("invalid publicKey length");
                    t.bits.writeBytes(e)
                },
                writeSignature: n,
                createSignatureCell: s,
                tag_init: 1768843636,
                tag_cooperative_close: 1131179891,
                tag_cooperative_commit: 1128492404,
                tag_start_uncooperative_close: 1433289580,
                tag_challenge_state: 1130915665,
                tag_settle_conditionals: 1131168622,
                tag_state: 1130910580,
                op_top_up_balance: 1741148801,
                op_init_channel: 235282626,
                op_cooperative_close: 1433884798,
                op_cooperative_commit: 2040604399,
                op_start_uncooperative_close: 521476815,
                op_challenge_quarantined_state: 143567410,
                op_settle_conditionals: 1727459433,
                op_finish_uncooperative_close: 625158801,
                op_channel_closed: -572749638,
                createTopUpBalance: t => {
                    const e = new r;
                    return e.bits.writeUint(1741148801, 32), e.bits.writeCoins(t.coinsA), e.bits.writeCoins(t.coinsB), e
                },
                createInitChannelBody: t => {
                    const e = new r;
                    return e.bits.writeUint(1768843636, 32), e.bits.writeUint(t.channelId, 128), e.bits.writeCoins(t.balanceA), e.bits.writeCoins(t.balanceB), e
                },
                createCooperativeCloseChannelBody: t => {
                    const e = new r;
                    return e.bits.writeUint(1131179891, 32), e.bits.writeUint(t.channelId, 128), e.bits.writeCoins(t.balanceA), e.bits.writeCoins(t.balanceB), e.bits.writeUint(t.seqnoA, 64), e.bits.writeUint(t.seqnoB, 64), e
                },
                createCooperativeCommitBody: t => {
                    const e = new r;
                    return e.bits.writeUint(1128492404, 32), e.bits.writeUint(t.channelId, 128), e.bits.writeUint(t.seqnoA, 64), e.bits.writeUint(t.seqnoB, 64), e
                },
                createConditionalPayment: t => {
                    const e = new r;
                    return e.bits.writeCoins(t.amount), e.writeCell(t.condition), e
                },
                createSemiChannelBody: t => {
                    const e = new r;
                    return e.bits.writeUint(t.seqno, 64), e.bits.writeCoins(t.sentCoins), a(e, t.conditionals), e
                },
                createSemiChannelState: t => {
                    const e = new r;
                    return e.bits.writeUint(1130910580, 32), e.bits.writeUint(t.channelId, 128), e.writeCell(t.semiChannelBody), o(e, t.counterpartySemiChannelBody), e
                },
                createSignedSemiChannelState: t => {
                    const e = new r;
                    return n(e, t.signature), e.writeCell(t.state), e
                },
                createStartUncooperativeCloseBody: t => {
                    const e = new r;
                    return e.bits.writeUint(1433289580, 32), e.bits.writeUint(t.channelId, 128), e.refs[0] = t.signedSemiChannelStateA, e.refs[1] = t.signedSemiChannelStateB, e
                },
                createChallengeQuarantinedStateBody: t => {
                    const e = new r;
                    return e.bits.writeUint(1130915665, 32), e.bits.writeUint(t.channelId, 128), e.refs[0] = t.signedSemiChannelStateA, e.refs[1] = t.signedSemiChannelStateB, e
                },
                createSettleConditionalsBody: t => {
                    const e = new r;
                    return e.bits.writeUint(1131168622, 32), e.bits.writeUint(t.channelId, 128), a(e, t.conditionalsToSettle), e
                },
                createFinishUncooperativeClose: () => {
                    const t = new r;
                    return t.bits.writeUint(625158801, 32), t
                },
                createOneSignature: t => {
                    const e = new r;
                    return e.bits.writeUint(t.op, 32), e.bits.writeBit(t.isA), n(e, t.signature), e.writeCell(t.cell), e
                },
                createTwoSignature: t => {
                    const e = new r;
                    return e.bits.writeUint(t.op, 32), e.refs[0] = s(t.signatureA), e.refs[1] = s(t.signatureB), e.writeCell(t.cell), e
                }
            }
        },
        4056: function(t, e, i) {
            const r = i(4057).default,
                {
                    DnsCollection: n
                } = i(4058),
                {
                    DnsItem: s
                } = i(4059);
            t.exports.default = {
                Dns: r,
                DnsCollection: n,
                DnsItem: s
            }
        },
        4057: function(t, e, i) {
            const {
                Cell: r
            } = i(80), {
                Address: n,
                bytesToHex: s
            } = i(79), {
                DNS_CATEGORY_NEXT_RESOLVER: o,
                DNS_CATEGORY_SITE: a,
                DNS_CATEGORY_WALLET: l,
                DNS_CATEGORY_STORAGE: h,
                createSmartContractAddressRecord: c,
                createAdnlAddressRecord: u,
                createStorageBagIdRecord: d,
                createNextResolverRecord: C,
                parseSmartContractAddressRecord: f,
                parseAdnlAddressRecord: B,
                parseStorageBagIdRecord: F,
                parseSiteRecord: w,
                parseNextResolverRecord: m,
                dnsResolve: p
            } = i(1120);
            class Dns {
                constructor(t) {
                    this.provider = t
                }
                async getRootDnsAddress() {
                    const t = (await this.provider.getConfigParam(4)).bits.array;
                    if (32 !== t.length) throw new Error("Invalid ConfigParam 4 length " + t.length);
                    const e = s(t);
                    return new n("-1:" + e)
                }
                async resolve(t, e, i) {
                    const r = await this.getRootDnsAddress();
                    return p(this.provider, r.toString(), t, e, i)
                }
                getWalletAddress(t) {
                    return this.resolve(t, l)
                }
                getSiteAddress(t) {
                    return this.resolve(t, a)
                }
            }
            Dns.resolve = p, Dns.createSmartContractAddressRecord = c, Dns.createAdnlAddressRecord = u, Dns.createStorageBagIdRecord = d, Dns.createNextResolverRecord = C, Dns.parseNextResolverRecord = m, Dns.parseAdnlAddressRecord = B, Dns.parseStorageBagIdRecord = F, Dns.parseSiteRecord = w, Dns.parseSmartContractAddressRecord = f, Dns.DNS_CATEGORY_NEXT_RESOLVER = o, Dns.DNS_CATEGORY_WALLET = l, Dns.DNS_CATEGORY_SITE = a, Dns.DNS_CATEGORY_STORAGE = h, t.exports.default = Dns
        },
        4058: function(t, e, i) {
            const {
                Contract: r
            } = i(133), {
                Cell: n
            } = i(80), {
                Address: s
            } = i(79), {
                parseAddress: o
            } = i(181), {
                dnsResolve: a
            } = i(1120), {
                parseOffchainUriCell: l
            } = i(181);
            t.exports = {
                DnsCollection: class DnsCollection extends r {
                    constructor(t, e) {
                        if (e.wc = 0, e.code = e.code, super(t, e), !e.collectionContent && !e.address) throw new Error("required collectionContent cell");
                        this.methods.getCollectionData = this.getCollectionData.bind(this), this.methods.getNftItemAddressByIndex = this.getNftItemAddressByIndex.bind(this), this.methods.getNftItemContent = this.getNftItemContent.bind(this), this.methods.resolve = this.resolve.bind(this)
                    }
                    createDataCell() {
                        const t = new n;
                        return t.refs[0] = this.options.collectionContent, t.refs[1] = n.oneFromBoc(this.options.dnsItemCodeHex), t
                    }
                    async getCollectionData() {
                        const t = await this.getAddress(),
                            e = await this.provider.call2(t.toString(), "get_collection_data"),
                            i = e[0].toNumber(),
                            r = e[1];
                        return {
                            collectionContentUri: l(r),
                            collectionContent: r,
                            ownerAddress: null,
                            nextItemIndex: i
                        }
                    }
                    async getNftItemContent(t) {
                        return await t.getData()
                    }
                    async getNftItemAddressByIndex(t) {
                        const e = await this.getAddress(),
                            i = await this.provider.call2(e.toString(), "get_nft_address_by_index", [
                                ["num", t.toString()]
                            ]);
                        return o(i)
                    }
                    async resolve(t, e, i) {
                        const r = await this.getAddress();
                        return a(this.provider, r.toString(), t, e, i)
                    }
                }
            }
        },
        4059: function(t, e, i) {
            const {
                Contract: r
            } = i(133), {
                Cell: n
            } = i(80), {
                Address: s,
                BN: o
            } = i(79), {
                parseAddress: a
            } = i(181), {
                dnsResolve: l,
                categoryToBN: h
            } = i(1120);
            class DnsItem extends r {
                constructor(t, e) {
                    e.wc = 0, e.code = e.code, super(t, e), this.methods.getData = this.getData.bind(this), this.methods.getDomain = this.getDomain.bind(this), this.methods.getAuctionInfo = this.getAuctionInfo.bind(this), this.methods.getLastFillUpTime = this.getLastFillUpTime.bind(this), this.methods.resolve = this.resolve.bind(this)
                }
                createDataCell() {
                    const t = new n;
                    return t.bits.writeUint(this.options.index, 256), t.bits.writeAddress(this.options.collectionAddress), t
                }
                async getData() {
                    const t = await this.getAddress(),
                        e = await this.provider.call2(t.toString(), "get_nft_data"),
                        i = -1 === e[0].toNumber();
                    return {
                        isInitialized: i,
                        index: e[1],
                        collectionAddress: a(e[2]),
                        ownerAddress: i ? a(e[3]) : null,
                        contentCell: e[4]
                    }
                }
                async createTransferBody(t) {
                    const e = new n;
                    return e.bits.writeUint(1607220500, 32), e.bits.writeUint(t.queryId || 0, 64), e.bits.writeAddress(t.newOwnerAddress), e.bits.writeAddress(t.responseAddress), e.bits.writeBit(!1), e.bits.writeCoins(t.forwardAmount || new o(0)), e.bits.writeBit(!1), t.forwardPayload && e.bits.writeBytes(t.forwardPayload), e
                }
                createGetStaticDataBody(t) {
                    const e = new n;
                    return e.bits.writeUint(801842850, 32), e.bits.writeUint(t.queryId || 0, 64), e
                }
                async getDomain() {
                    const t = await this.getAddress(),
                        e = await this.provider.call2(t.toString(), "get_domain");
                    return (new TextDecoder).decode(e.bits.array.buffer)
                }
                async getAuctionInfo() {
                    const t = await this.getAddress(),
                        e = await this.provider.call2(t.toString(), "get_auction_info");
                    return {
                        maxBidAddress: a(e[0]),
                        maxBidAmount: e[1],
                        auctionEndTime: e[2].toNumber()
                    }
                }
                async getLastFillUpTime() {
                    const t = await this.getAddress();
                    return (await this.provider.call2(t.toString(), "get_last_fill_up_time")).toNumber()
                }
                async resolve(t, e, i) {
                    const r = await this.getAddress();
                    return l(this.provider, r.toString(), t, e, i)
                }
            }
            DnsItem.createChangeContentEntryBody = async t => {
                const e = new n;
                return e.bits.writeUint(1320284409, 32), e.bits.writeUint(t.queryId || 0, 64), e.bits.writeUint(await h(t.category), 256), t.value && (e.refs[0] = t.value), e
            }, t.exports = {
                DnsItem: DnsItem
            }
        },
        426: function(t, e, i) {
            const {
                Contract: r
            } = i(133), {
                Cell: n
            } = i(80), {
                nacl: s,
                stringToBytes: o,
                Address: a,
                BN: l
            } = i(79);
            t.exports = {
                WalletContract: class WalletContract extends r {
                    constructor(t, e) {
                        if (!e.publicKey && !e.address) throw new Error("WalletContract required publicKey or address in options");
                        super(t, e), this.methods = {
                            transfer: e => r.createMethod(t, this.createTransferMessage(e.secretKey, e.toAddress, e.amount, e.seqno, e.payload, e.sendMode, !Boolean(e.secretKey), e.stateInit, e.expireAt)),
                            seqno: () => ({
                                call: async () => {
                                    const e = await this.getAddress();
                                    let i = null;
                                    try {
                                        i = (await t.call2(e.toString(), "seqno")).toNumber()
                                    } catch (t) {}
                                    return i
                                }
                            })
                        }, this.deploy = e => r.createMethod(t, this.createInitExternalMessage(e))
                    }
                    getName() {
                        throw new Error("override me")
                    }
                    createDataCell() {
                        const t = new n;
                        return t.bits.writeUint(0, 32), t.bits.writeBytes(this.options.publicKey), t
                    }
                    createSigningMessage(t) {
                        t = t || 0;
                        const e = new n;
                        return e.bits.writeUint(t, 32), e
                    }
                    async createInitExternalMessage(t) {
                        if (!this.options.publicKey) {
                            const e = s.sign.keyPair.fromSecretKey(t);
                            this.options.publicKey = e.publicKey
                        }
                        const {
                            stateInit: e,
                            address: i,
                            code: o,
                            data: a
                        } = await this.createStateInit(), l = this.createSigningMessage(), h = s.sign.detached(await l.hash(), t), c = new n;
                        c.bits.writeBytes(h), c.writeCell(l);
                        const u = r.createExternalMessageHeader(i);
                        return {
                            address: i,
                            message: r.createCommonMsgInfo(u, e, c),
                            body: c,
                            signingMessage: l,
                            stateInit: e,
                            code: o,
                            data: a
                        }
                    }
                    async createExternalMessage(t, e, i, o = !1) {
                        const a = o ? new Uint8Array(64) : s.sign.detached(await t.hash(), e),
                            l = new n;
                        l.bits.writeBytes(a), l.writeCell(t);
                        let h = null,
                            c = null,
                            u = null;
                        if (0 === i) {
                            if (!this.options.publicKey) {
                                const t = s.sign.keyPair.fromSecretKey(e);
                                this.options.publicKey = t.publicKey
                            }
                            const t = await this.createStateInit();
                            h = t.stateInit, c = t.code, u = t.data
                        }
                        const d = await this.getAddress(),
                            C = r.createExternalMessageHeader(d);
                        return {
                            address: d,
                            message: r.createCommonMsgInfo(C, h, l),
                            body: l,
                            signature: a,
                            signingMessage: t,
                            stateInit: h,
                            code: c,
                            data: u
                        }
                    }
                    async createTransferMessage(t, e, i, s, o = "", h = 3, c = !1, u = null, d) {
                        let C = new n;
                        o && (o.refs ? C = o : "string" == typeof o ? o.length > 0 && (C.bits.writeUint(0, 32), C.bits.writeString(o)) : C.bits.writeBytes(o));
                        const f = r.createInternalMessageHeader(new a(e), new l(i)),
                            B = r.createCommonMsgInfo(f, u, C),
                            F = this.createSigningMessage(s, d);
                        return F.bits.writeUint8(h), F.refs.push(B), this.createExternalMessage(F, t, s, c)
                    }
                }
            }
        },
        651: function(t, e, i) {
            const r = i(3995),
                n = i(73),
                s = i(1028),
                o = "undefined" != typeof self && self.crypto && self.crypto.subtle;
            let a = null;
            o || (a = i(3996));
            const l = [],
                h = {};
            for (let t = 0; t <= 255; t++) {
                let e = t.toString(16);
                e.length < 2 && (e = "0" + e), l.push(e), h[e] = t
            }
            const c = (() => {
                const t = [],
                    e = "A".charCodeAt(0),
                    i = "a".charCodeAt(0),
                    r = "0".charCodeAt(0);
                for (let i = 0; i < 26; ++i) t.push(String.fromCharCode(e + i));
                for (let e = 0; e < 26; ++e) t.push(String.fromCharCode(i + e));
                for (let e = 0; e < 10; ++e) t.push(String.fromCharCode(r + e));
                return t.push("+"), t.push("/"), t
            })();

            function u(t) {
                return "undefined" == typeof self ? Buffer.from(t, "base64").toString("binary") : atob(t)
            }
            t.exports = {
                BN: r,
                nacl: n,
                sha256: function(t) {
                    return o ? crypto.subtle.digest("SHA-256", t) : a.subtle.digest({
                        name: "SHA-256"
                    }, t)
                },
                fromNano: function(t) {
                    if (!r.isBN(t) && "string" != typeof t) throw new Error("Please pass numbers as strings or BN objects to avoid precision errors.");
                    return s.fromWei(t, "gwei")
                },
                toNano: function(t) {
                    if (!r.isBN(t) && "string" != typeof t) throw new Error("Please pass numbers as strings or BN objects to avoid precision errors.");
                    return s.toWei(t, "gwei")
                },
                bytesToHex: function(t) {
                    const e = [];
                    for (let i = 0; i < t.byteLength; i++) e.push(l[t[i]]);
                    return e.join("")
                },
                hexToBytes: function(t) {
                    const e = (t = t.toLowerCase()).length;
                    if (e % 2 != 0) throw "hex string must have length a multiple of 2";
                    const i = e / 2,
                        r = new Uint8Array(i);
                    for (let e = 0; e < i; e++) {
                        const i = 2 * e,
                            n = t.substring(i, i + 2);
                        if (!h.hasOwnProperty(n)) throw new Error("invalid hex character " + n);
                        r[e] = h[n]
                    }
                    return r
                },
                stringToBytes: function(t, e = 1) {
                    let i, r;
                    1 === e && (i = new ArrayBuffer(t.length), r = new Uint8Array(i)), 2 === e && (i = new ArrayBuffer(2 * t.length), r = new Uint16Array(i)), 4 === e && (i = new ArrayBuffer(4 * t.length), r = new Uint32Array(i));
                    for (let e = 0, i = t.length; e < i; e++) r[e] = t.charCodeAt(e);
                    return new Uint8Array(r.buffer)
                },
                crc32c: function(t) {
                    const e = function(t, e) {
                            const i = 2197175160;
                            t ^= 4294967295;
                            for (let r = 0; r < e.length; r++) t = 1 & (t = 1 & (t = 1 & (t = 1 & (t = 1 & (t = 1 & (t = 1 & (t = 1 & (t ^= e[r]) ? t >>> 1 ^ i : t >>> 1) ? t >>> 1 ^ i : t >>> 1) ? t >>> 1 ^ i : t >>> 1) ? t >>> 1 ^ i : t >>> 1) ? t >>> 1 ^ i : t >>> 1) ? t >>> 1 ^ i : t >>> 1) ? t >>> 1 ^ i : t >>> 1) ? t >>> 1 ^ i : t >>> 1;
                            return 4294967295 ^ t
                        }(0, t),
                        i = new ArrayBuffer(4);
                    return new DataView(i).setUint32(0, e, !1), new Uint8Array(i).reverse()
                },
                crc16: function(t) {
                    let e = 0;
                    const i = new Uint8Array(t.length + 2);
                    i.set(t);
                    for (let t of i) {
                        let i = 128;
                        for (; i > 0;) e <<= 1, t & i && (e += 1), i >>= 1, e > 65535 && (e &= 65535, e ^= 4129)
                    }
                    return new Uint8Array([Math.floor(e / 256), e % 256])
                },
                concatBytes: function(t, e) {
                    const i = new Uint8Array(t.length + e.length);
                    return i.set(t), i.set(e, t.length), i
                },
                bytesToBase64: function(t) {
                    let e, i = "";
                    const r = t.length;
                    for (e = 2; e < r; e += 3) i += c[t[e - 2] >> 2], i += c[(3 & t[e - 2]) << 4 | t[e - 1] >> 4], i += c[(15 & t[e - 1]) << 2 | t[e] >> 6], i += c[63 & t[e]];
                    return e === r + 1 && (i += c[t[e - 2] >> 2], i += c[(3 & t[e - 2]) << 4], i += "=="), e === r && (i += c[t[e - 2] >> 2], i += c[(3 & t[e - 2]) << 4 | t[e - 1] >> 4], i += c[(15 & t[e - 1]) << 2], i += "="), i
                },
                base64ToBytes: function(t) {
                    const e = u(t),
                        i = e.length,
                        r = new Uint8Array(i);
                    for (let t = 0; t < i; t++) r[t] = e.charCodeAt(t);
                    return r
                },
                base64toString: u,
                stringToBase64: function(t) {
                    return "undefined" == typeof self ? Buffer.from(t, "binary").toString("base64") : btoa(t)
                },
                compareBytes: function(t, e) {
                    return t.toString() === e.toString()
                },
                readNBytesUIntFromArray: function(t, e) {
                    let i = 0;
                    for (let r = 0; r < t; r++) i *= 256, i += e[r];
                    return i
                },
                keyPairFromSeed: function(t) {
                    return n.sign.keyPair.fromSeed(t)
                },
                newKeyPair: function() {
                    return n.sign.keyPair()
                },
                newSeed: function() {
                    return n.sign.keyPair().secretKey.slice(0, 32)
                }
            }
        },
        79: function(t, e, i) {
            const {
                BN: r,
                nacl: n,
                sha256: s,
                fromNano: o,
                toNano: a,
                bytesToHex: l,
                hexToBytes: h,
                stringToBytes: c,
                crc32c: u,
                crc16: d,
                concatBytes: C,
                bytesToBase64: f,
                base64ToBytes: B,
                base64toString: F,
                stringToBase64: w,
                compareBytes: m,
                readNBytesUIntFromArray: p,
                keyPairFromSeed: g,
                newKeyPair: A,
                newSeed: y
            } = i(651), E = i(3999).default, D = i(4e3).default, b = i(4001).default;
            t.exports = {
                Address: E,
                AdnlAddress: D,
                StorageBagId: b,
                BN: r,
                nacl: n,
                sha256: s,
                fromNano: o,
                toNano: a,
                bytesToHex: l,
                hexToBytes: h,
                stringToBytes: c,
                crc32c: u,
                crc16: d,
                concatBytes: C,
                bytesToBase64: f,
                base64ToBytes: B,
                base64toString: F,
                stringToBase64: w,
                compareBytes: m,
                readNBytesUIntFromArray: p,
                parseTransferUrl: function(t) {
                    const e = "ton://transfer/";
                    if (!t.startsWith(e)) throw new Error("must starts with " + e);
                    const i = t.substring(e.length).split("?");
                    if (i.length > 2) throw new Error('multiple "?"');
                    const n = i[0];
                    if (!E.isValid(n)) throw new Error("invalid address format " + n);
                    const s = {
                            address: n
                        },
                        o = i[1];
                    if (o && o.length) {
                        const t = o.split("&").map(t => t.split("="));
                        for (const e of t) {
                            if (2 !== e.length) throw new Error("invalid url pair");
                            const t = e[0],
                                i = e[1];
                            if ("amount" === t) {
                                if (s.amount) throw new Error("amount already set");
                                if (new r(i).isNeg()) throw new Error("negative amount");
                                s.amount = i
                            } else {
                                if ("text" !== t) throw new Error("unknown url var " + t);
                                if (s.text) throw new Error("text already set");
                                s.text = decodeURIComponent(i)
                            }
                        }
                    }
                    return s
                },
                formatTransferUrl: function(t, e, i) {
                    let r = "ton://transfer/" + t;
                    const n = [];
                    return e && n.push("amount=" + e), i && n.push("text=" + encodeURIComponent(i)), 0 === n.length ? r : r + "?" + n.join("&")
                },
                keyPairFromSeed: g,
                newKeyPair: A,
                newSeed: y
            }
        },
        80: function(t, e, i) {
            const {
                BitString: r
            } = i(1112), {
                Cell: n
            } = i(4002), {
                Slice: s
            } = i(1987);
            t.exports = {
                BitString: r,
                Cell: n,
                Slice: s
            }
        }
    }
]);